import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ProjectList from './components/ProjectList';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        projectSelected={projectSelected}
      ></Nav>
    <main>
    {!contactSelected ? (
          <>
            <ProjectList></ProjectList>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
    </main>
    </div>
  );
}

export default App;
