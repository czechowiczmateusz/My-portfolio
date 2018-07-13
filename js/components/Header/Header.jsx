import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="menu">
                        <div>MC</div>
                        <nav>
                            <ul>
                                <li><a target="_blank" href="https://www.linkedin.com/in/mczechowicz/"><i
                                    className="fab fa-linkedin-in"></i></a></li>
                                <li><a target="_blank" href="https://github.com/czechowiczmateusz/"><i
                                    className="fab fa-github"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="about">
                        <h1>About me</h1>
                        <hr width="50%"/>
                        <p>My name is Mateusz Czechowicz. I'm looking for a job as Junior Front-end Developer. I
                            finished a course of programming JavaScript: React in Coder's Lab (<a target="_blank"
                                                                                                  href="https://coderslab.pl/en/javascript-developer-react">https://coderslab.pl/en/javascript-developer-react</a>)
                            - the school for developers. I'm fascinated with programming so I'd like to further develop
                            in this field, I'm looking for a job where I can deepen and expand my knowledge in
                            JavaScript and surrounding technologies. Currently I'm learning React Native and AngularJS.
                        </p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header