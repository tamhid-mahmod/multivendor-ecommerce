export const GoogleButton = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="h-[45px] cursor-pointer border border-blue-100 flex items-center gap-2 px-3 rounded-[4px] my-2 bg-[rgba(210,277,252,0.3)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--socials minimal__iconify__root css-zje0t0"
          id="\xABrc3\xBB"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="var(--color, #FFC107)"
            d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
          />
          <path
            fill="var(--color, #FF3D00)"
            d="M3.15332 7.3455L6.43882 9.755C7.32782 7.554 9.48082 6 12.0003 6C13.5298 6 14.9213 6.577 15.9808 7.5195L18.8093 4.691C17.0233 3.0265 14.6343 2 12.0003 2C8.15932 2 4.82832 4.1685 3.15332 7.3455Z"
          />
          <path
            fill="var(--color, #4CAF50)"
            d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.0011 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
          />
          <path
            fill="var(--color, #1976D2)"
            d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
          />
        </svg>
        <span className="text-[16px] opacity-[.8] font-Poppins">
          Sign In with Google
        </span>
      </div>
    </div>
  );
};
