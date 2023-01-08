import '../../styles/Tags.css'

//jamais creer un tag isolé
const Tag = (props) => {
    return (
    <div className="tag">
        {props.tagContent}
    </div>
    )
}

const Tags = (props) => {
    return (
    <div className="tagsContainer">
        {props.tags.map((tg, index)=>(<Tag key={index} tagContent={tg} />))}
    </div>
    )
}
 
export default Tags