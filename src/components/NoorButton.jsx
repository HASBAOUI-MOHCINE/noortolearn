const NoorButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'noor-button-primary focus:ring-yellow-400',
    secondary: 'noor-button-secondary focus:ring-blue-600',
    outline: 'bg-transparent border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-gray-800',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50'
  };

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-6 py-2.5 text-base',
    large: 'px-8 py-3 text-lg'
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:transform-none hover:shadow-none' 
    : '';

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabledClasses}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default NoorButton;
