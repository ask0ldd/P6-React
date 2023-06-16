import '../styles/Collapse.css'
import { useState } from 'react'
import arrowUp from '../assets/collapse-up.svg'
import arrowDown from '../assets/collapse-down.svg'
import { PropTypes } from 'prop-types'


const Collapse = ({headnbodystyle, body, heading}) => {

    const [bodyDisplay, updateBodyDisplay] = useState(false)

    // headnbody style passed as a prop / body content passed as a pro > innerhtml
    return (
    <article className="collapse">
        <div onClick={()=>updateBodyDisplay(!bodyDisplay)} className={'collapse__heading '+ headnbodystyle[0] /* different styles have been passed if apropos or rental */}>
            <div>{heading}</div><img src={bodyDisplay === true ? arrowUp : arrowDown} alt="arrow" />
        </div>
        {bodyDisplay === true &&
        <div className={'collapse__body '+ headnbodystyle[1]} dangerouslySetInnerHTML={{__html: body}} /> /* innerhtml to interpret the inserted <br>  */}
    </article>
    )
}

Collapse.propTypes = {
    headnbodystyle: PropTypes.arrayOf({
            name: PropTypes.string,
            picture: PropTypes.string,
    }), 
    body: PropTypes.string,
    heading: PropTypes.string,
}

export default Collapse