import './Button.css';
import { Link } from 'react-router';

function Button({ as: Component = 'button', className, children, ...props }) {
  const combinedClassName = `button ${className}`.trim();
  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}

export default Button;
