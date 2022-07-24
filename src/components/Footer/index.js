import React from 'react';

function Footer() {
    //takes user to external site based on what user has selected in footer
    
    const linkedIn = 'https://www.linkedin.com/in/bbgriffin/'
    const gitHub = 'https://github.com/bethanyjean'
    const instagram = 'https://www.instagram.com/pi_are_round/'

    return (
      <footer className="flex-row px-1 footer">
        <h1>
            How to Find Me
        </h1>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li className="mx-2">
              <a href={gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li className="mx-1">
              <a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li className='mx-1'>
                <a href = '../../assets/Bethany_B_Griffin.pdf' download>Resume</a>
            </li>
          </ul>
        </nav>
      </footer>
    );

}

export default Footer;