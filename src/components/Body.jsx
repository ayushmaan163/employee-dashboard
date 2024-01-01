import { useEffect } from "react";
import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

const EMPLOYEE_API = "https://jsonplaceholder.typicode.com/users";

const Body = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const employeeDetails = async () => {
    const data = await fetch(EMPLOYEE_API);
    const json = await data.json();
    console.log(json);
    setEmployeeData(json);
  };

  useEffect(() => {
    employeeDetails();
  }, []);

  return (
    <>
      <div className="card-container">
        {employeeData.map((employeeData) => {
          return (
            <li key={employeeData.id}>
              <EmployeeCard data={employeeData} />
            </li>
          );
        })}
      </div>
    </>
  );
};
export default Body;
