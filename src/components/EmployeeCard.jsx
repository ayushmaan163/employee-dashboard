import userIcon from "../assets/user-icon.png";

const EmployeeCard = ({ data }) => {
  return (
    <>
      <div className="employee-card">
        {/* User-Image */}
        <img
          src={userIcon}
          alt="user"
          className="user-icon"
          style={{ marginBottom: "1.2rem" }}
        />

        {/* Name */}
        <div style={{ fontWeight: "bold" }}>{data.name}</div>

        {/* Email-id */}
        <div style={{ marginBottom: "1.5rem" }}>{data.email}</div>

        {/* Buttons */}
        <div className="card-button">
          <button className="editBtn">Edit</button>
          <button className="deleteBtn">Delete</button>
        </div>
      </div>
    </>
  );
};
export default EmployeeCard;
