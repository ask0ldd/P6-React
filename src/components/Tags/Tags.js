import '../../styles/Tags.css'
import Tag from './Tag';
import { PropTypes } from 'prop-types'

/*const Tag = (props) => {
    return (
    <div className="tag">
        {props.tagContent}
    </div>
    )
}*/

const Tags = ({tags}) => {
    return (
    <div className="tagsContainer">
        {tags.map((tg, index)=>(<Tag key={index} tagContent={tg} />))}
    </div>
    )
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
}
 
export default Tags