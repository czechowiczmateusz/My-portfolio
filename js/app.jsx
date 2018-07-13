import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import CommercialProjects from "./components/CommercialProjects";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
require('.././styles/style.scss');
require('aos/src/sass/aos.scss');

class App extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                <Technologies></Technologies>
                <CommercialProjects></CommercialProjects>
                <Projects></Projects>
                <Footer></Footer>
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