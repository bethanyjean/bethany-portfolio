import React, { useEffect } from 'react';

function Nav(props) {
    //renders page based on what user has selected in navigation bar
    const {
      setProjectSelected,
      projectSelected,
      contactSelected,
      setContactSelected,
    } = props;
    return (
        <header className="flex-row px-1">
          <h2>
            <a data-testid="link" href="/">
              Bethany Griffin
            </a>
          </h2>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a data-testid="about" href="#about" onClick={() => {
                    setContactSelected(false);
                    setProjectSelected(false);
                }}>
                  About me
                </a>
              </li>
              <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => {
                    setContactSelected(true);
                    setProjectSelected(false);
                }}>Contact</span>
              </li>
                <li className={`mx-1 ${projectSelected  && 'navActive'}`}>
                      <span
                    onClick={() => {
                      setProjectSelected(true);
                      setContactSelected(false);
                    }}>Projects
                  </span>
                </li>
            </ul>
          </nav>
        </header>
      );

}

export default Nav;