// import react package
import PropTypes from 'prop-types'

// Button component
const Button = ({ children, onClick, className }) => (
    <button
        className={`button button-matrix ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
)

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default Button