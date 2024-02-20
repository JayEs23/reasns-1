import PropTypes from 'prop-types';

const Button = ({ text, className, bgColor, performAction }) => {
    return <button onClick={ () => performAction()} style={{ backgroundColor: bgColor }} className={`btn btn-primary ${className}`}>{text}</button>
}

const LoginButton = ({ text, className, bgColor, performAction }) => {
    return <button onClick={ () => performAction()} style={{ backgroundColor: bgColor }} className={`btn login-btn ${className}`}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    borColor: PropTypes.string,
    performAction: PropTypes.func
}

LoginButton.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    borColor: PropTypes.string,
    performAction: PropTypes.func
}

export { Button, LoginButton };
