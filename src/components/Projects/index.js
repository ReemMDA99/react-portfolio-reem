import React from "react";
import "./projects-style.css";

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
            {/* Project 1 BudgetTracker */}

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        {/* Import image */}
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/budget-tracker.png`} className="card-img-top border-bottom"
                                alt="Budget Tracker" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Budget Tracker</h3>
                            <p className="card-text">
                                {/* Description */}
                                Application that allows users to add expenses and deposits to their budget with or without a connection.
                            </p>
                         
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                {/* GitHub link */}
                                <a href="https://github.com/ReemMDA99/Budget-Tracker-by-Reem" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                {/* Deployed link */}
                                <a href="https://budget-tracker-by-reem.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 2 Music Slayer */}

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            {/* Import image */}
                            <img src={`${process.env.PUBLIC_URL}/assets/images/music-slayers.png`} className="card-img-top border-bottom"
                                alt="Music Slayer" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Music Slayer</h3>
                            <p className="card-text">
                                {/* Description */}
                                Team Music Slayers have created an application for users to access their favorite music. 
                                It not only allows them to browse for music but also let them search their preferred songs preview using Artists or Albums.
                            </p>
                      
                            {/* Deployed link */}
                            <a href="https://github.com/Project01-Team14/Music-Slayers" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                            </a>
                            {/* GitHub link */}
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://project01-team14.github.io/Music-Slayers/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 3 Residential Matchmakers */}
                
                 {/* Project 4 My-Weather-Network */}

                 {/*  Project 5 Password Generator */}

                 {/* Project 6 Note-Taker */}

              
                
            </div>
        </div>
    )
}
export default Projects;