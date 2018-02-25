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
                            <p>I'm looking for a job as Junior Frontend Developer. I finished a course of programming JavaScript: React in Coder's Lab (<a target="_blank" href="https://coderslab.pl/en/javascript-developer-react">https://coderslab.pl/en/javascript-developer-react</a>) - the school for developers. I'm fascinated with programming so I'd like to further develop in this field, I'm looking for a job where I can deepen and expand my knowledge in JavaScript and surrounding technologies. Currently I'm learning AngularJS.</p>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <h2>Skills</h2>
                        <hr width="50%" />
                    </div>
                </main>
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