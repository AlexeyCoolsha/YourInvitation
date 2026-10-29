import './Button.css';

function Button({ as: Component = 'button', variant = 'primary', rounded='none', className = '', children, ...props }) {
  const combinedClassName = [
    'button',
    `button--${variant}`,
    rounded !== 'none' && `button--rounded-${rounded}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}

export default Button;
