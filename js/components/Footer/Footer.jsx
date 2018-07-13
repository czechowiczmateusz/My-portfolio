import React from "react";

class Footer extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Footer