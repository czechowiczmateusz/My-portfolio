import React from "react";
import AOS from 'aos';

class Projects extends React.Component {
    render() {
        AOS.init();
        return (
            <section className="projects">
                <div className="container">
                    <h3>Projects</h3>
                    <hr width="40%" />
                    <h4>Film-search-app</h4>
                    <div>
                        <a target="_blank" href="https://czechowiczmateusz.github.io/Film-search-app/"><i className="fas fa-globe fa-10x"></i></a>
                        <a target="_blank" href="https://github.com/czechowiczmateusz/Film-search-app"><i className="fab fa-github fa-10x"></i></a>
                    </div>
                    <div data-aos="zoom-in" className="first_project"></div>
                    <h4>Tomorrowland-page</h4>
                    <div>
                        <a target="_blank" href="https://czechowiczmateusz.github.io/Tomorrowland-page/"><i className="fas fa-globe fa-10x"></i></a>
                        <a target="_blank" href="https://github.com/czechowiczmateusz/Tomorrowland-page"><i className="fab fa-github fa-10x"></i></a>
                    </div>
                    <div data-aos="zoom-in" className="second_project"></div>
                    <h4>Sit-on-chair</h4>
                    <div>
                        <a target="_blank" href="https://czechowiczmateusz.github.io/Sit-on-chair/"><i className="fas fa-globe fa-10x"></i></a>
                        <a target="_blank" href="https://github.com/czechowiczmateusz/Sit-on-chair"><i className="fab fa-github fa-10x"></i></a>
                    </div>
                    <div data-aos="zoom-in" className="third_project"></div>
                </div>
            </section>
        )
    }
}

export default Projects