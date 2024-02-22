function ButtonDefault({ children, type, to, onclick }) {
  const check = type === "men" ? "bg-green-300" : "bg-red-300";

  return (
    <button
      className={`mb-0 w-full rounded-xl ${check} py-4 font-bold text-white`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default ButtonDefault;
