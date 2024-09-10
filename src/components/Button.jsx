export default function Button({ children, ...props }) {
    const primary = "px-4 py-2 bg-amber-950 text-white rounded hover:bg-amber-900 transition duration-300 ease-in-out";
    const secondary = "px-4 py-2 text-stone-800 rounded hover:bg-stone-100 transition duration-300 ease-in-out";
    const full = "bg-amber-950 hover:bg-amber-900 text-white font-semibold py-2 px-4 rounded-lg mb-4 transition duration-300 ease-in-out shadow-md hover:shadow-lg w-full";
    const danger = "px-4 py-2 text-red-600 rounded hover:text-red-700 transition duration-300 ease-in-out";
    
    let classes = props.full ? full : props.secondary ? secondary : props.danger ? danger : primary;

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}