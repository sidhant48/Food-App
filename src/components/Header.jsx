const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://cdn3d.iconscout.com/3d/premium/thumb/restaurant-6843937-5603506.png?f=webp"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
