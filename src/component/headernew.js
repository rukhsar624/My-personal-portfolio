
function Navbar(){
    const navRef =useRef();
    const showNavbar =()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
return(
    <header>
        <h3>logo</h3>
        <nav ref={navRef}>
              <a href="/#">Home</a>
              <a href="/#">Home</a>
              <a href="/#">Home</a>
              <a href="/#">Home</a>
              <a href="/#">Home</a>
              <a href="/#">Home</a>
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <faTime/>
              </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
                <faTime/>
              </button>
    </header>
);
}