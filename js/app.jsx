import React from "react";
import ReactDOM from "react-dom";
require('.././styles/style.scss');

class App extends React.Component {
    render(){
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="menu">
                        <div>MC</div>
                            <nav>
                                <ul>
                                    <li><a target="_blank" href="https://www.linkedin.com/in/mczechowicz/"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a target="_blank" href="https://github.com/czechowiczmateusz/"><i className="fab fa-github"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="about">
                            <h1>About me</h1>
                            <hr width="50%" />
                            <p>My name is Mateusz Czechowicz. I'm looking for a job as Junior Frontend Developer. I finished a course of programming JavaScript: React in Coder's Lab (<a target="_blank" href="https://coderslab.pl/en/javascript-developer-react">https://coderslab.pl/en/javascript-developer-react</a>) - the school for developers. I'm fascinated with programming so I'd like to further develop in this field, I'm looking for a job where I can deepen and expand my knowledge in JavaScript and surrounding technologies. Currently I'm learning AngularJS.</p>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <h2>Technologies</h2>
                        <hr width="50%" />
                        <div className="technologies">
                        <i className="fab fa-html5 fa-10x" ></i>
                        <i className="fab fa-css3-alt fa-10x"></i>
                        <i className="fab fa-js-square fa-10x"></i>
                        <i className="fab fa-sass fa-10x"></i>
                        <i className="fab fa-react fa-10x"></i>
                        <i className="fab fa-angular fa-10x"></i>
                        <i className="fab fa-github fa-10x"></i>
                        <i className="fab fa-gulp fa-10x"></i>
                        <i className="fab fa-npm fa-10x"></i>
                        </div>
                    </div>
                </main>
                <article>
                    <div className="container">
                        <h3>Projects</h3>
                        <hr width="50%" />
                        <h4>Film-search-app</h4>
                        <div className="first_project"></div>
                        <h4>Tomorrowland-page</h4>
                        <img src="./styles/images/tomorrowland-page.png" alt=""/>
                    </div>
                </article>
                <footer>
                    <div className="container">
                        <h5>Contact</h5>
                        <hr width="50%" />
                        <i className="fas fa-phone fa-2x"></i>
                        <p>+48 531 323 377</p>
                        <i className="far fa-envelope fa-2x"></i>
                        <p>matic1.czechowicz@gmail.com</p>
                        <i className="fab fa-github fa-2x"></i>
                        <p><a target="_blank"  href="https://github.com/czechowiczmateusz/">https://github.com/czechowiczmateusz/</a></p>
                        <i className="fab fa-linkedin-in fa-2x"></i>
                        <p><a target="_blank"  href="https://www.linkedin.com/in/mczechowicz/">https://www.linkedin.com/in/mczechowicz/</a></p>
                    </div>
                </footer>
            </div>
        )
    }
}

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});