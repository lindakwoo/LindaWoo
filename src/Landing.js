import React, {Component} from "react";
import classes from "./Landing.module.css";
import Linda from './images/lindaWooHeadShot.jpeg';
import Rezoom from './images/rezoom.jpeg';
import Phinney from './images/Phinney.jpeg';
import NavBtn from './images/navBtn.png';
import Bean from './images/Bean.png';
import Seashell from './images/seashell.png';


class Landing extends Component {
    state={
        skillsRef : React.createRef(),
        projectsRef: React.createRef()
    }
    render(){
        let place = 0;
        window.addEventListener("scroll", (e)=>{
            if(this.state.skillsRef.current){
            place = window.pageYOffset;
            this.state.skillsRef.current.style.transform = `translate(0%,${.2*place}px)`;
            this.state.projectsRef.current.style.transform = `translate(0%,${.4*place}px)`;
            }
        })
        return(
            <div className = {classes.Back}>
                <div className = {classes.Landing}>
                    <div className = {classes.Navbar}>
                        <a href = '#AboutMe'> About Me</a> 
                        <a href = "#Projects"> My Projects</a>
                        <a> Contact Me</a>
                    </div>
                    <div className = {classes.Heading}>
                        <img className = {classes.Linda} src = {Linda} />
                        
                        <div className = {classes.Text}>
                            <p className = {classes.Name}>Linda Woo</p>
                            <p className = {classes.Title}>Frontend Software Developer</p>
                        </div>
                    </div>
                    <div id = "AboutMe" className = {classes.AboutMe}>
                        <div className = {classes.SkillsContainer} ref = {this.state.skillsRef}>
                            <div className = {[classes.Skills, classes.JavaScript].join(" ")}>
                                JavaScript
                            </div>
                            <div className = {[classes.Skills,classes.React].join(" ")}>
                                ReactJS
                            </div>
                            <div className = {[classes.Skills, classes.Html].join(" ")}>
                                HTML
                            </div>
                            <div className = {[classes.Skills, classes.Css].join(" ")}>
                                CSS
                            </div>
                            <div className = {[classes.Skills, classes.JQuery].join(" ")}>
                                JQuery
                            </div>
                        </div>
                        <div className = {classes.Description}>
                            I am an entry-level frontend web developer with over 20 years of professional work experience.
                        </div>
                    </div>
                    <div id = "Projects" className = {classes.Projects} ref = {this.state.projectsRef}>
                        <div className = {classes.Project}>
                            <img src = {Rezoom} /> 
                            <p> Resume site for first-time job seekers</p>
                        </div>
                        <div className = {classes.Project}>
                            <img src = {Phinney} /> 
                            <p> Seattle Optometry Shop</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;