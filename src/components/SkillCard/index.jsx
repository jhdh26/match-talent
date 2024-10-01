import './SkillCard.css'

import { IoIosExit } from "react-icons/io";

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
                <IoIosExit/>
            </div>
        </div>
    )
}

export default SkillCard