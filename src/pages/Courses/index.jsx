import { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import usePublicAxios from "../../../hooks/usePublicAxios";
import Loading from "../../components/Loading";
import { FaFilePdf, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import usePrivetAxios from "../../../hooks/usePrivetAxios";
import { toast } from "react-toastify";
import AddCourseModal from "../../components/Courses/AddCourseModal";

const Courses = () => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState([]);
  const [updateCourse, setUpdateCourse] = useState({});
  const publicAxios = usePublicAxios();
  const privetAxios = usePrivetAxios(token);

  const handleDeleteCourse = (id) => {
    privetAxios.delete(`/courses/${id}`).then((res) => {
      if (res?.data?.data?.deletedCount > 0) {
        toast.success(res?.data?.message);
        const remainingCourse = courseData.filter(
          (course) => course?._id !== id
        );
        setCourseData(remainingCourse);
      }
    });
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const name = form.name.value;
    const price = form.price.value;
    const duration = form.duration.value;
    const availableSeat = form.availableSeat.value;
    const course = { name, price, duration, availableSeat };
    privetAxios.post("/courses", course).then(({ data }) => {
      if (data?.data?.insertedId) {
        setCourseData([...courseData, course]);
        document.getElementById("my_modal_2").close();
        toast.success("Course Added Successfully");
      }
    });
  };

  const handleUpdateCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const name = form.name.value;
    const price = form.price.value;
    const duration = form.duration.value;
    const availableSeat = form.availableSeat.value;
    const course = { name, price, duration, availableSeat };
    privetAxios
      .put(`/courses/${updateCourse?._id}`, course)
      .then(({ data }) => {
        if (data?.data?.matchedCount) {
          toast.success(data?.message);
          // console.log(, updateCourse)
          const remainingCourse = courseData.filter(
            (course) => course?._id !== updateCourse?._id
          );
          setCourseData([
            ...remainingCourse,
            { _id: updateCourse?._id, ...course },
          ]);
          document.getElementById("update_modal").close();
        }
      });
  };

  useEffect(() => {
    publicAxios.get("/courses").then((res) => {
      setCourseData(res.data.data);
      setLoading(false);
    });
  }, []);

  
  return loading ? (
    <Loading />
  ) : (
    <div>
      <DashboardHeader title={"Course List"} />
      <AddCourseModal
        modalName={"my_modal_2"}
        buttonText={"Submit"}
        modalTitle={"Add Course"}
        onSubmit={handleAddCourse}
        buttonShow={true}
      />
      <AddCourseModal
        course={updateCourse}
        modalName={"update_modal"}
        buttonText={"Update"}
        modalTitle={"Upate Course"}
        onSubmit={handleUpdateCourse}
      />
      <div className="">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Available Seat</th>
                <th className="justify-end text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {courseData?.map((course, index) => (
                <tr key={index}>
                  <th>{course?.name}</th>
                  <th>{course?.price}</th>
                  <th>{course?.duration}</th>
                  <th>{course?.availableSeat}</th>
                  <th className="flex flex-row items-center justify-end gap-2">
                    <button
                      onClick={() => handleDeleteCourse(course?._id)}
                      className="text-error text-2xl cursor-pointer"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => {
                        setUpdateCourse(course);
                        document.getElementById("update_modal").showModal();
                      }}
                      className="text-success text-2xl cursor-pointer"
                    >
                      <MdEdit />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Courses;
