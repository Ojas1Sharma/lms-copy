import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  const { authTokens } = useContext(AuthContext)

  useEffect(() => {
    axios
      .get("/api/courses", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(authTokens.access)
        }
      })
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => console.error(err));
  }, [authTokens.access]);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-10">Your Courses</h1>
      <div className="grid grid-cols-2 gap-x-20 gap-y-5">
        {courses.map((course) => (
          <div className="bg-white p-4 rounded-md hover:shadow-md">
            <div className="text-sm text-slate-400">
              {course.code}
            </div>
            <div className="font-semibold">
              {course.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;