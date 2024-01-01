const Header = () => {
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
          <input placeholder="Search for an Employee" />
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
