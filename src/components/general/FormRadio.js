import PropTypes from 'prop-types'

const Radio = ({ id, name, value, checked, onChange, label}) => {
    return (
        <div>
            <input
                type='radio'
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

Radio.PropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Radio