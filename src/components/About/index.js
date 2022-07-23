import React from 'react';
import coverImage from '../../assets/cover/Bethany-Griffin.png'
function About() {
  return (
    <section ClassName="my-5">
      <h1 id="about">Who am I?</h1>

      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
        Web developer and industrial engineer with system admin, development, and deployment experience. Recently earned a Full Stack Development Certification from The University of Richmond to pair with Industrial Engineering degree from The Georgia Institute of Technology. Through my work, I have become proficient in JavaScript, MERN (MongoDB, Express, React, Node), and RESTful APIs. Passionate about efficiency in processes and code and the development of both. I place a strong emphasis on the end user experience and the needs and requirements of the client. I have been recognized for excellence by being nominated to the Emerging Talent Development Program and receiving the Procurement Hero of the month award for my work with development in our quality system of record. Having been both in the boardroom and the classroom, I excel at communication and training. I am excited to bring my diverse background to help find solutions to an organization’s opportunities.  
        </p>
      </div>
    </section>
  );
}

export default About;