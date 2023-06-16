import '../../styles/Tags.css'
import { PropTypes } from 'prop-types'

const Tag = ({tagContent}) => {
    return (
    <div className="tag">
        {tagContent}
    </div>
    )
}

Tag.propTypes = {
    tagContent: PropTypes.string,
}

export default Tag