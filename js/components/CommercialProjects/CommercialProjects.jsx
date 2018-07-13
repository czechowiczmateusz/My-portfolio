import React from "react";
import AOS from "aos";

class CommercialProjects extends React.Component {
    render() {
        AOS.init();
        return (
            <section className="commercial-projects">
                <div className="container">
                    <h3>Commercial project</h3>
                    <hr width="40%" />
                    <h4>Supme</h4>
                    <a target="_blank" href="https://www.supme.io/"><i className="fas fa-globe fa-10x"></i></a>
                    <div data-aos="zoom-in" className="first_project"></div>
                </div>
            </section>
        )
    }
}

export default CommercialProjects