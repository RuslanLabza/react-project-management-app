import { useRef, forwardRef, useImperativeHandle } from "react";

export default forwardRef(function Input({ textarea, type, placeholder, label }, ref) {
    const classes = "w-full bg-transparent border-b-2 border-stone-300 p-2 focus:outline-none focus:border-stone-600";
    const userInput = useRef(null);

    useImperativeHandle(ref, () => ({
        getValue: () => userInput.current.value,
    }));

  return (
    <div>
      <label htmlFor={label} className="block text-stone-700 mb-1">{label}</label>
      {textarea ? (
        <textarea ref={userInput} id={label} placeholder={placeholder} className={classes} />
      ) : (
        <input ref={userInput} type={type} id={label} placeholder={placeholder} className={classes} />
      )}
  </div>
  );
})