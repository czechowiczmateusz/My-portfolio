import React from "react";

class Technologies extends React.Component {
    render() {
        return (
            <section className="technologies">
                <div className="container">
                    <h2>Technologies</h2>
                    <hr width="50%" />
                    <div className="list">
                        <div><i className="fab fa-html5 fa-10x" ></i></div>
                        <div><i className="fab fa-css3-alt fa-10x"></i></div>
                        <div><i className="fab fa-js-square fa-10x"></i></div>
                        <div><i className="fab fa-sass fa-10x"></i></div>
                        <div><i className="fab fa-react fa-10x"></i></div>
                        <div><i className="fab fa-angular fa-10x"></i></div>
                        <div><i className="fab fa-vuejs fa-10x"></i></div>
                        <div><i className="fab fa-github fa-10x"></i></div>
                        <div><i className="fab fa-gulp fa-10x"></i></div>
                        <div><i className="fab fa-npm fa-10x"></i></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Technologies