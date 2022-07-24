import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ProjectList from './components/ProjectList';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        projectsSelected={projectsSelected}
        aboutSelected={aboutSelected}
        setContactSelected={setContactSelected}
        setProjectsSelected={setProjectsSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>
    <main>
    {!contactSelected && !projectsSelected ? (
          <>
            <About></About>
          </>
        ) : 
          !contactSelected && !aboutSelected ? (
            <>
            <ProjectList></ProjectList>
            </>
          )
        : (
          <>
          <ContactForm></ContactForm>
          </>
        )}
    </main>
    <Footer></Footer>
    </div>
  );
}

export default App;
