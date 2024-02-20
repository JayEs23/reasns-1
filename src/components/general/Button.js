import PropTypes from 'prop-types';

const Button = ({ text, bgColor, performAction }) => {
    return <button onClick={ () => performAction()} style={{ backgroundColor: bgColor }} className="btn btn-primary">{text}</button>
}

Button.PropTypes = {
    text: PropTypes.string.isRequired,
    bgcolor: PropTypes.string,
    borColor: PropTypes.string,
    performAction: PropTypes.func.isRequired
}

export default Button