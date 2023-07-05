function Navbar() {
  return (
    <nav className="h-16 bg-primary border-b-whitegray border-b-2  flex justify-between items-center px-10">
      <span className="font-bold text-white">Playlistfy</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.3449 19.4054C19.8977 19.2902 20.2269 18.7117 19.9522 18.2183C19.3466 17.1307 18.3926 16.1749 17.1722 15.4465C15.6004 14.5085 13.6745 14 11.6933 14C9.71213 14 7.78628 14.5085 6.21448 15.4465C4.99405 16.1749 4.04002 17.1307 3.43444 18.2183C3.15974 18.7117 3.48898 19.2902 4.04179 19.4054V19.4054C9.0886 20.4572 14.2981 20.4572 19.3449 19.4054V19.4054Z"
          fill="white"
        />
        <circle cx="12" cy="8" r="5" fill="white" />
      </svg>
    </nav>
  );
}

export default Navbar;
