// Button component
const Button = ({ children, type, onClick, className, style }) => (
    <button
        className={`button button-matrix ${className}`}
        type={type}
        onClick={
            (e) => {
                onClick(e);
                e.preventDefault();
            }
        }
        style={style}
    >
        {children}
    </button>
)

export default Button;