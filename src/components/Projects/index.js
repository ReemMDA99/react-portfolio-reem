import React from "react";
import "./projects-style.css";

const Projects = () => {
    return (
        <div className="container" id="repo">
            <div className="row justify-description-center">
            {/* Project 1 BudgetTracker */}
                
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card border border-dark shadow-lg p-3 mb-5 rounded text-center h-100">
                        
                            <h3>Budget Tracker</h3>
                                
                            {/* Import image */}
                            <div className="screenshot">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/budget-tracker.png`}
                                 className="d-flex align-self-center"
                                    alt="Budget Tracker" />
                            </div>
                            <div className="card-body mb-5 pl-0">
                                <p className="card-text">
                                    {/* Description */}
                                    Application that allows users to add expenses and deposits to their budget with or without a connection.
                                </p>
                                <div className="url w-100 position-absolute">
                                    {/* GitHub link */}
                                    <a href="https://github.com/ReemMDA99/Budget-Tracker-by-Reem" target="_blank" className="btn" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    {/* Deployed link */}
                                    <a href="https://budget-tracker-by-reem.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 2 Music Slayer */}

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card border border-dark shadow-lg p-3 mb-5 rounded text-center h-100">
                    <h3>Music Slayer</h3>
                        <div className="screenshot">
                            {/* Import image */}
                            <img src={`${process.env.PUBLIC_URL}/assets/images/music-slayers.png`} className="card-img-top border-bottom"
                                alt="Music Slayer" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            
                            <p className="card-text">
                                {/* Description */}
                                Team Music Slayers have created an application for users to access their favorite music. 
                                It not only allows them to browse for music but also let them search their preferred songs preview using Artists or Albums.
                            </p>
                            <div className="url w-100 py-3 pt-3 pl-0 position-absolute">
                                {/* GitHub link */}
                                    <a href="https://github.com/Project01-Team14/Music-Slayers" target="_blank" className="btn" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                {/* Deployed link */}
                            
                                <a href="https://project01-team14.github.io/Music-Slayers/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Project 3 Residential Matchmakers */}
                
        
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card border border-dark shadow-lg p-3 mb-5 rounded text-center h-100">
                    <h3>Residential matchmaker</h3>
                        <div className="screenshot">
                            {/* Import image */}
                            <img src={`${process.env.PUBLIC_URL}/assets/images/residential-matchmakers.png`} className="card-img-top border-bottom"
                                alt="Residential Matchmaker" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            
                            <p className="card-text">
                                {/* Description */}
                                Our site acts as a housing “dating” site where users can post their own houses and a description of their home for prospective buyers to view.
                                Prospective buyers can comment or vote on listed postings and contact sellers to initiate the home sale.
                            </p>
                            <div className="url w-100 py-3 pt-3 pl-0 position-absolute">
                            {/* GitHub link */}
                            <a href="https://github.com/Group-0007/Project-2-Group-7" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                            </a>
                            {/* Deployed url */}
                            
                                <a href="https://residential-matchmaker.herokuapp.com//" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-link"></i>
                                </a>                          
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Project 4 My-Weather-Network */}

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card border border-dark shadow-lg p-3 mb-5 rounded text-center h-100">
                    <h3>My Weather Network</h3>
                        <div className="screenshot">
                            {/* Import image */}
                            <img src={`${process.env.PUBLIC_URL}/assets/images/weather-network.png`} className="card-img-top border-bottom"
                                alt="My-Weather-Network" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            
                            <p className="card-text">
                                {/* Description */}
                                Application that allows users check the weather by city name.
                                It generates the UV index, Humidity and Temperature of a particular city for  next 5 days.
                            </p>
                            <div className="url w-100 py-3 pt-3 pl-0 position-absolute">
                            {/* GitHub link */}
                            <a href="https://github.com/ReemMDA99/My-Weather-Network" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                            </a>
                            {/* Deployed url */}
                            
                                <a href="https://reemmda99.github.io/My-Weather-Network/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-link"></i>
                                </a>  
                            </div>
                        </div>
                    </div>
                </div>

            
                {/*  Project 5 Password Generator */}
                 
                
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card border border-dark shadow-lg p-3 mb-5 rounded text-center h-100">
                    <h3>Password Generator</h3>
                        <div className="screenshot">
                            {/* Import image */}
                            <img src={`${process.env.PUBLIC_URL}/assets/images/password-generator.png`} className="card-img-top border-bottom"
                                alt="Password Generator" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            
                            <p className="card-text">
                            {/* Description */}
                                Application that allows users to add expenses and deposits to their budget with or without a connection.
                            </p>
                            <div className="url w-100 py-3 pt-3 pl-0 position-absolute">
                            {/* GitHub link */}
                                <a href="https://github.com/ReemMDA99/PasswordGenerator-Reem" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            {/* Deployed url */}
                            
                                <a href="https://reemmda99.github.io/PasswordGenerator-Reem/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 6 Note-Taker */}

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card border border-dark shadow-lg p-3 mb-5 rounded text-center h-100">
                    <h3>Note Taker</h3>
                        <div className="screenshot">
                            {/* Import image */}
                            <img src={`${process.env.PUBLIC_URL}/assets/images/note-taker.png`} className="card-img-top border-bottom"
                                alt="Note Taker" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            
                            <p className="card-text">
                                {/* Description */}
                                Application that allows users to write and save notes.
                                This application will use an Express.js back end and will save and retrieve note data from a JSON file.
                            </p>
                            <div className="url w-100 py-3 pt-3 pl-0 position-absolute">
                                {/* GitHub link */}
                                <a href="https://github.com/ReemMDA99/NoteTaker-by-Reem" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                {/* Deployed url */}
                                    <a href="https://notetaker-by-reem.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                            
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Projects;