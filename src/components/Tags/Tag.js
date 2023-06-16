import '../../styles/Tags.css'
import { PropTypes } from 'prop-types'

const Tag = ({tagContent}) => {
    return (
    <div className="tag">
        {tagContent}
    </div>
    )
}

export default Tag