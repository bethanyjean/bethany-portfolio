import React from 'react';


const Modal = ({ onClose, currentProject }) => {
  const { name, description, appLink, gitHubLink, index } = currentProject;

  //creates the Modal based on what project was selected
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/large/${index}.png`)}
          alt="project screenshot"
        />
        <p className='modalDescription'>{description}</p>

        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
          <img className = 'gitHub' src = {require(`../../assets/cover/GitHub.png`)}>
        </img></a>

        <a href={appLink} target="_blank" rel="noopener noreferrer">
          <img className = "Bimage" src = {require(`../../assets/cover/B (2).png`)}>
        </img></a>

        <div></div>
        
        <button type="button" onClick={onClose}>
          Close
        </button></div>
    </div>
  );
};

export default Modal;