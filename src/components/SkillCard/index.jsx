import './SkillCard.css'

import { FaArrowRight } from "react-icons/fa";

const SkillCard = (props) => {
    return(
        <div className="main-skillcard">
            <div
                className="skill-card"
                style={props.style}
            >
                {props.icon}
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <FaArrowRight className='FaArrowRight'/>
            </div>
        </div>
    )
}

export default SkillCard