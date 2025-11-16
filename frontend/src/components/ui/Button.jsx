export default function Button({ children, variant = 'primary', ...props }) {
  const base = 'btn';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}