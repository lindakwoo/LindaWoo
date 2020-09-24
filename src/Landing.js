import React, {Component} from "react";
import classes from "./Landing.module.css";
import Linda from './images/lindaWooHeadShot.jpeg';
import Rezoom from './images/rezoom.jpeg';
import Phinney from './images/Phinney2.jpeg';
import Seashell from './images/seashell.png';
import Airplane from './images/email.png';
import Linkedin from './images/linkedin.png';

class Landing extends Component {
    state={
        skillsRef : React.createRef(),
        projectsRef: React.createRef(),
        landingRef: React.createRef(),
        descriptionRef:React.createRef(),
        contactRef: React.createRef()
    }
    render(){
        let place = 0;
        window.addEventListener("scroll", (e)=>{
            if(this.state.skillsRef.current&&this.state.skillsRef.current&&this.state.contactRef.current){
                place = window.pageYOffset;
                this.state.skillsRef.current.style.transform = `translate(0%,${.2*place}px)`;
                this.state.projectsRef.current.style.transform = `translate(0%,${.33*place}px)`;
                this.state.landingRef.current.style.top = `${-place}px`;
                this.state.contactRef.current.style.transform = `translate(0%,${.45*place}px)`;
                console.log(place)
                // if(place>794){
                //     this.state.landingRef.current.style.position="relative";
                    // this.state.descriptionRef.current.sytle.color="red";
                // }
                
            }
        })
        return(
            <div className = {classes.Back}>
                <div className = {classes.Navbar}>
                        <a href = '#AboutMePlaceholder'> About Me</a> 
                        <a href = "#ProjectsPlaceholder"> My Projects</a>
                        <a href = "#ContactPlaceholder"> Contact Me</a>
                    </div>
                <div className = {classes.Landing} ref = {this.state.landingRef}>
                    <div className = {classes.Heading}>
                        <img className = {classes.Linda} src = {Linda} />
                        
                        <div className = {classes.Text}>
                            <p className = {classes.Name}>Linda Woo</p>
                            <p className = {classes.Title}>Frontend Software Developer</p>
                        </div>
                    </div>

                </div>
                <div className = {classes.LandingBack}></div>
                    <div id = "AboutMe" className = {classes.AboutMe}>
                        <div id = "AboutMePlaceholder" className ={classes.AboutMePlaceholder}>about me placeholder</div>
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
                        <div className = {classes.Description}ref = {this.state.descriptionRef}>
                            I am an entry-level frontend web developer in San Francisco with over 10 years of professional work experience.
                        </div>
                    </div>
                    <div id = "ProjectsPlaceholder" className ={classes.ProjectsPlaceholder}>projects placeholder</div>
                    <div id = "Projects" className = {classes.Projects} ref = {this.state.projectsRef}>
                        <p className = {classes.ProjectsText}>Projects I'm currently working on</p>
                        <div className = {classes.ProjectsContainer}>
                            <div className = {classes.Project}>
                                <div className = {classes.LinkContainer}>
                                
                                    <a className = {classes.RezoomLink} href = "https://rezoom3.web.app/"> <img className = {classes.RezoomPic} src = {Rezoom} /> </a>
                                </div>
                                <p> Resume site for first-time job seekers</p>
                            </div>
                            <div className = {classes.Project}>
                            <div className = {classes.LinkContainer}>
                                
                                <a className = {classes.PhinneyLink} href = "https://functions-32143.web.app/"> <img className = {classes.PhinneyPic} src = {Phinney} /> </a>
                            </div>
                                <p> Seattle Optometry Shop</p>
                            </div>
                        </div>
                    </div>
                    <div className = {classes.ContactContainer} >
                        <div id = "ContactPlaceholder" className ={classes.ContactPlaceholder}>contact placeholder</div>

                        <div className= {classes.Contact} ref = {this.state.contactRef}>
                            <p className = {classes.Name}>Linda Woo</p>
                            <p className = {classes.Link}><a href = "mailto:lindakwoo@gmail.com"><img src = {Airplane}/>email</a></p>
                            <p className = {classes.Link}><a href = "https://linkedin.com/in/lindakwoo"> <img src = {Linkedin}/>linkedin</a></p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Landing;