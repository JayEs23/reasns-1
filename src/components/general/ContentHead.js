import PropTypes from 'prop-types';

const ContentHead = ({text, otherText}) => {
    return <p className='question-header'>{text}<span className='customized-text'>{otherText}</span></p>
}

ContentHead.PropTypes = {
    text: PropTypes.string.isRequired,
}

export default ContentHead