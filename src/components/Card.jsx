const Card = ({ data }) => {
  return (
    <div className="w-full border border-gray-200 shadow-sm/20 rounded-lg px-4 py-6 pt-23 bg-white space-y-2 relative overflow-hidden">
      <div className="w-full flex items-center gap-2 absolute top-0 left-0 bg-indigo-950 p-4">
        <div className="w-10 h-10 border border-gray-400 rounded-lg overflow-hidden flex items-center justify-center">
          <img src={data.owner.avatar_url} className="w-full" />
        </div>
        <h1 className="font-bold text-white">{data.owner.login}</h1>
      </div>
      <h1 className="font-semibold">{data.name}</h1>
      <p className="text-gray-700">{data.description}</p>
      <a
        href={data.html_url}
        className="flex items-center gap-1 text-indigo-500 underline mb-5"
      >
        Repo Link
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z"
          />
          <path
            fill="currentColor"
            d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837"
          />
        </svg>
      </a>
      <div className="card__footer relative flex items-center justify-between pt-5">
        {/* LANGUAGE */}
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            className="text-gray-600"
          >
            <path d="M0 0h48v48H0z" fill="none" />
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-width="4"
              d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
            />
          </svg>
          {data.language}
        </div>
        {/* STARS COUNT*/}
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-amber-400"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
            />
          </svg>
          {data.stargazers_count}
        </div>
        {/* FORKS COUNT */}
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="-4 -2 24 24"
          >
            <path d="M-4 -2h24v24H-4z" fill="none" />
            <path
              fill="currentColor"
              d="M8 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1.033-3.817A3.001 3.001 0 1 1 7 14.17v-1.047q0-.111.008-.221a1 1 0 0 0-.462-.637L3.46 10.42A3 3 0 0 1 2 7.845V5.829a3.001 3.001 0 1 1 2 0v2.016a1 1 0 0 0 .487.858l3.086 1.846a3 3 0 0 1 .443.324a3 3 0 0 1 .444-.324l3.086-1.846a1 1 0 0 0 .487-.858V5.841A3.001 3.001 0 0 1 13 0a3 3 0 0 1 1.033 5.817v2.028a3 3 0 0 1-1.46 2.575l-3.086 1.846a1 1 0 0 0-.462.637q.008.11.008.22zM3 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
            />
          </svg>
          {data.forks_count}
        </div>
        {/* OPEN ISSUES COUNT */}
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            className="text-red-400"
          >
            <path d="M0 0h48v48H0z" fill="none" />
            <g fill="none">
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="4"
                d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"
              />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M24 37a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                clip-rule="evenodd"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M24 12v16"
              />
            </g>
          </svg>
          {data.open_issues_count}
        </div>
      </div>
    </div>
  );
};

export default Card;
