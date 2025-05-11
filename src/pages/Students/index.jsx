import DashboardHeader from "../../components/DashboardHeader";
import { useEffect, useState } from "react";
import usePrivetAxios from "../../../hooks/usePrivetAxios";
import Loading from "../../components/Loading";
import TableRow from "../../components/Students/TableRow";

const Students = () => {
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState([]);
  const token = localStorage.getItem("token");
  const privetAxios = usePrivetAxios(token);

  useEffect(() => {
    privetAxios
      .get("/students/")
      .then((res) => {
        setStudentData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  

  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className="">
        <DashboardHeader title={"Student List"} />
      </div>
      <div className="">
        <div className="overflow-x-auto p-5 h-[calc(100vh-100px)]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Transaction Id</th>
                <th>Course</th>
                <th>Phone Nuber</th>
                <th>Address</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {studentData.map((student) => (
                <TableRow key={student?._id} student={student} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Students;
