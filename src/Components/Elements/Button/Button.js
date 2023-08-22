// Button component
const Button = ({ children, onClick, className, style}) => (
    <button
        className={`button button-matrix ${className}`}
        onClick={onClick}
        style={style}
    >
        {children}
    </button>
)

export default Button;