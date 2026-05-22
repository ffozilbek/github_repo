const ErrorCard = () => {
  return (
    <div className="w-full border border-gray-200 shadow-sm/20 rounded-lg px-4 py-6 bg-white flex justify-center items-center flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        className="text-6xl"
      >
        <path d="M0 0h32v32H0z" fill="none" />
        <path
          fill="#ef5350"
          d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"
        />
        <path
          fill="#ffcdd2"
          d="M25 14a7 7 0 1 0 7 7a7 7 0 0 0-7-7m1 2v6h-2v-6Zm-2 10v-2h2v2Z"
        />
      </svg>
      <h1 className="text-red-400 text-xl font-semibold">
        Error fetching data
      </h1>
    </div>
  );
};

export default ErrorCard;
