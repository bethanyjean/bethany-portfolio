import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { name, description, appLink, gitHubLink, index } = currentProject;

  //creates the Modal based on what project was selected
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/large/${index}.jpg`).default}
          alt="project screenshot"
        />
        <p>{description}</p>
        <p>{appLink}</p>
        <p>{gitHubLink}</p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;