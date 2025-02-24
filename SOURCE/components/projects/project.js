
import React from 'react';
import './project.css';
import icn1 from '../../assets/e-Learning.jpg';
import icn2 from '../../assets/portfolio.jpg';
import icn3 from '../../assets/tic tac toe.jpg';

const Project = () => {
  return (
    <div>
        <section className="courses" id="project">
            <h2>My Projects</h2>
            <div className="container courses_container">
                <article className="course">
                    <div>
                        <img src={icn1} alt="E Learning Website" className="course_image" />
                    </div>
                    <div className="course_info">
                        <h4>E Learning Website</h4>
                        <a href="https://github.com/ahsa01/E-Learning-site" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View on GitHub
                        </a>
                    </div>
                </article>

                

                <article className="course">
                    <div>
                        <img src={icn3} alt="Object-Detection-with-Voice-Feedback-YOLO-v3" className="course_image"/>
                    </div>
                    <div className="course_info">
                        <h4>Tic Tac Toe Game</h4>
                        <a href="https://github.com/ahsa01/Object-Detection-with-Voice-Feedback-YOLO-v3" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View on GitHub
                        </a>
                    </div>
                </article>
               <article className="course">
                    <div>
                        <img src={icn2} alt="Portfolio" className="course_image"/>
                    </div>
                    <div className="course_info">
                        <h4>Portfolio</h4>
                        <a href="https://github.com/ahsa01/Portfolio-site" className="btn btn-primary">Learn More</a>
                    </div>
                </article>
            </div>
        </section>
    </div>
  );
}

export default Project;
