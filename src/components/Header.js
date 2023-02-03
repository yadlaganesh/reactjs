const Title = () => (
  <a href="">
    <img
      className="logo-img"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt="Logo"
    />
  </a>
);
const  authenticateUser = () => {
  // API call to check authentication
  return true;
}

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Aboutus</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
        </ul>
      </div>
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
};
export default HeaderComponent;
