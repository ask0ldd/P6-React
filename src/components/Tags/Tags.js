import '../../styles/Tags.css'
import Tag from './Tag';

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
 
export default Tags