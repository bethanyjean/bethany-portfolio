import React from 'react';
import ProjectList from '../ProjectList';

function Projects(props) {
  return (
    <section>
      <h1 data-testid="h1tag" className='projectList'>{currentProject.name}</h1>
      <p>Projects</p>
      <ProjectList />
    </section>
  );
}
export default Projects;