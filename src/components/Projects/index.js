import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects(props) {
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>Projects</p>
      <ProjectList />
    </section>
  );
}
export default Projects;