function Nav(props) {
    //renders page based on what user has selected in navigation bar
    const {
      contactSelected,
      setContactSelected,
      projectsSelected,
      setProjectsSelected,
      setAboutSelected,
      aboutSelected,
    } = props;

    return (
        <header className="flex-row px-1">
          <img className = 'navImg' src = {require(`../../assets/cover/B (3).png`)}>
        </img>
        <h2>
            <a href="/">
            
              Bethany Griffin
            </a>
          </h2>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a data-testid="about" href="#about" onClick={() => {
                    setContactSelected(false);
                    setProjectsSelected(false);
                    setAboutSelected(true);
                }}>
                  About me
                </a>
              </li>
              <li className={`mx-2 ${contactSelected && !projectsSelected && !aboutSelected && 'navActive'}`}>
                <span onClick={() => {
                    setContactSelected(true);
                    setProjectsSelected(false);
                    setAboutSelected(false)
                    }}>
                    <a>Contact</a> </span>
              </li>
                <li className={`mx-1 ${!contactSelected  && projectsSelected && !aboutSelected && 'navActive'}`}>
                      <span
                    onClick={() => {
                      setContactSelected(false);
                      setProjectsSelected(true);
                      setAboutSelected(false)
                    }}><a>Projects</a>
                  </span>
                </li>
            </ul>
          </nav>
        </header>
      );

}

export default Nav;