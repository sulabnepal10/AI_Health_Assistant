export default function Card({ title, color = 'indigo', children }) {
  return (
    <div className="card">
      <h2 className={`text-xl font-semibold mb-4 text-${color}-700 dark:text-${color}-400`}>
        {title}
      </h2>
      {children}
    </div>
  );
}