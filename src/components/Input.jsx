export default function Input({ textarea, type, placeholder, label }) {
    const classes = "w-full bg-transparent border-b-2 border-stone-300 p-2 focus:outline-none focus:border-stone-600";
    
  return (
    <div>
      <label htmlFor={label} className="block text-stone-700 mb-1">{label}</label>
      {textarea ? (
        <textarea id={label} placeholder={placeholder} className={classes} />
      ) : (
        <input type={type} id={label} placeholder={placeholder} className={classes} />
      )}
  </div>
  );
}