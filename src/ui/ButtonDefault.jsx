function ButtonDefault({ children, type, onclick, classList }) {
  const check = type === "men" ? "bg-green-300" : "bg-red-300";

  return (
    <button
      className={`mb-0 w-full rounded-xl ${check} ${classList} py-4 font-bold text-white transition-all duration-300`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default ButtonDefault;
