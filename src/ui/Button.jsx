import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "text-stone-800 inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "text-stone-400 inline-block text-sm rounded-full bg-tranparent border-2 border-stone-300 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 px-4 py-2.5 sm:px-6 sm:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
