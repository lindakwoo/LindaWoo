import React, {Component} from "react";
import classes from "./Landing.module.css";
import Linda from './images/lindaWooHeadShot.jpeg';
import Rezoom from './images/rezoom.jpeg';

class Landing extends Component {
    state={
        skillsRef : React.createRef()
    }

    render(){

        let place = 0;
        window.addEventListener("scroll", (e)=>{
            if(this.state.skillsRef.current){
            place = window.pageYOffset;
            this.state.skillsRef.current.style.transform = `translate(0%,${.7*place}px)`;
            }
        })
        

        return(
            <div className = {classes.Back}>
                <div className = {classes.Landing}>
                <div className = {classes.Heading}>
                    <p>Linda Woo</p>
                    <span>Frontend Software Developer</span>
                    <img className = {classes.Linda} src = {Linda} />
                </div>
                <div className = {classes.Projects}>
                    <img src = {Rezoom} />
                </div>
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
            </div>
            </div>
            
        )


    }


}

export default Landing;