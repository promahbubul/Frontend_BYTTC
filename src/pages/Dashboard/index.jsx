import { useEffect, useState } from "react";
import usePrivetAxios from "../../../hooks/usePrivetAxios";
import usePublicAxios from "../../../hooks/usePublicAxios";
import Loading from "../../components/Loading";
import DashboardHeader from "../../components/DashboardHeader";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const publicAxios = usePublicAxios();
  const privetAxios = usePrivetAxios(token);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  

  useEffect(() => {
    
    privetAxios.get("/students").then((res) => {
      setStudents(res?.data?.data);
      setLoading(false);
    });
    publicAxios.get("/courses").then((res) => {
      setCourses(res?.data?.data);
    });
  }, []);

  

  return loading ? (
    <Loading />
  ) : (
    <div>
      <DashboardHeader title={"Dashboard"} />
      <div className="grid grid-cols-2 gap-10">
        <div className="p-10 rounded-xl bg-primary">
          <h1 className="text-2xl font-light text-white border-b border-b-white pb-2">
            Total Students
          </h1>
          <p className="text-7xl text-center pt-5 font-extrabold text-white ">
            {students?.length}
          </p>
        </div>
        <div className="p-10 rounded-xl bg-accent">
          <h1 className="text-2xl font-light text-white border-b border-b-white pb-2">
            Total Course
          </h1>
          <p className="text-7xl text-center pt-5 font-extrabold text-white ">
            {courses?.length}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
