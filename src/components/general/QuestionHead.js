import PropTypes from 'prop-types';

const QuestionHead = ({text}) => {
    return <p className='question-header'>{text}</p>
}

QuestionHead.PropTypes = {
    text: PropTypes.string.isRequired,
}

export default QuestionHead