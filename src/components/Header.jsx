import { useState } from "react";

const Header = ({
  employeeData,
  setEmployeeData,
  showData,
  setShowData,
  searchQuery,
  setSearchQuery,
}) => {
  // const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    // const query = e.target.value;
    // console.log(query);
    setSearchQuery(query);

    const filterData = employeeData.filter((item) =>
      item.id.toString().includes(query)
    );

    // console.log(filterData);

    setShowData(filterData);
  };

  return (
    <>
      {/* Header Container */}
      <div className="header">
        {/* Logo */}
        <div className="logo">
          <i class="fa-solid fa-bars"></i>
          Dashboard
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            placeholder="Search for an Employee"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        {/* User */}
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </>
  );
};
export default Header;
