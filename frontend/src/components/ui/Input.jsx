export default function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${className}`}
      {...props}
    />
  );
}