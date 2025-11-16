export default function ChatBubble({ role, children }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <span
        className={`inline-block max-w-xs px-3 py-2 rounded-lg ${isUser ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-800'
          } dark:${isUser ? 'bg-blue-900 text-blue-100' : 'bg-white-700 text-gray-200'}`}
      >
        {children}
      </span>
    </div>
  );
}