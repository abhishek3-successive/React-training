'use client';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false 
}) {
  const baseStyle = `
    px-4 py-2 rounded font-semibold focus:outline-none transition
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const style = `${baseStyle} ${variants[variant] || variants.primary}`;

  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={style}
      type="button"
    >
      {children}
    </button>
  );
}
