export default function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full p-3 border rounded-lg resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white ${className}`}
      {...props}
    />
  );
}