import React from 'react';
import meImage from '../images/Me.jpeg';
import "./About.css"
const AboutMe = () => {
  return (
    <div className="container">
      <img src={meImage} alt="A picture of me" />
      <h2>About Me</h2>
      <p>I am Remmy Bett and my passion is turning design into code, web developer specializing in both front-end and Back-end development. I'm experienced in developing small to large web applications.</p>
      <a href="https://github.com/Remmy4873">GitHub</a>
      <a href="https://www.linkedin.com/in/remmy-bett-a25241285/">LinkedIn</a>
    </div>
  );
};

export default AboutMe;
