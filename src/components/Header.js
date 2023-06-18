import './Header.css'

function Header() {
  return (
    <header class="header">
    <a href="#" class="logo">Events of GEC</a>
    <nav class="nav-items">
      <a href="index.html">Home</a>
      <a href="signup.html">Login/Sign-up</a>
      <a href="eventlist.html">Events</a>
	  <a href="#">Register</a>
    </nav>
  </header>
  );
}

export default Header;
