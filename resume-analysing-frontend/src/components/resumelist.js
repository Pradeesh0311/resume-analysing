import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/resumeServiceService";
import Employee from "./resume";

const resumeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [resume, setresume] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await resumeService.getresume();
        setresume(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteresume = (e, id) => {
    e.preventDefault();
    resumeService.deleterresume(id).then((res) => {
      if (resume) {
        setresume((prevElement) => {
          return prevElement.filter((resume) => resume.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addresume")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Add resume
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Name
              </th>
              
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees.map((resume) => (
                <Employee
                  employee={resume}
                  deleteresume={deleteresume}
                  key={resume.id}></resume>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default resumelist;