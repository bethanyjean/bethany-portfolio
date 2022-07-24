import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
        name: 'Sports Seekers',
        description: 'The application allows users to search for local sporting events such as basketball, football, softball, and soccer at various locations.',
        appLink: 'https://serene-beyond-42809.herokuapp.com/',
        gitHubLink: 'https://github.com/bethanyjean/sports-seekers.git'
    },
    {
        name: 'Camp Smoothie',
        description: 'Allows users to create a smoothie based on a set list of ingredients and see the nutritional output based on all of the ingredients they have chosen.',
        appLink: 'https://bethanyjean.github.io/camp-smoothie/',
        gitHubLink: 'https://github.com/bethanyjean/camp-smoothie'
    },
    {
        name: 'Weather Dashboard',
        description: 'Provides the User the ability to look at current and future weather for a chosen city and saves recent searches.',
        appLink: 'https://bethanyjean.github.io/weather-dashboard/',
        gitHubLink: 'https://github.com/bethanyjean/weather-dashboard'
    },
    {
        name: 'README Generator',
        description: 'Given a command-line application that accepts user input for information about my application repository,  a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions',
        appLink: '',
        gitHubLink: 'https://github.com/bethanyjean/readme-generator'
    },
    {
        name: 'Budget Tracker',
        description: 'Provides the ability to track my withdrawals and deposits with or without a data/internet connection so that my account balance is accurate when I am traveling',
        appLink: 'https://bethanys-travel-budget-tracker.herokuapp.com/',
        gitHubLink: 'https://github.com/bethanyjean/budget-tracker'
    },
    {
        name: 'Employee Tracker',
        description: 'Provides the ability to view and manage the departments, roles, and employees in my company so that I can organize and plan my business',
        appLink: '',
        gitHubLink: 'https://github.com/bethanyjean/employee-tracker'
    },
  ]);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {projects.map((image, i) => (
          <img
            src={require(`../../assets/small/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
