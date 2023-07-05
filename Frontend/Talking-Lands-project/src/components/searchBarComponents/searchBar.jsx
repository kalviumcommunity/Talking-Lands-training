import SearchBarBox from "./searchBarBox";
import {useRef, useState } from 'react';

function SearchBar() {
  const inputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleInputClick = (event) => {
    if (event.target === inputRef.current) {
      setIsVisible(!isVisible)
    }
  };
  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          className="bg-primary  border border-lightgray rounded-lg mt-6 ml-8 h-8 w-60"
          ref={inputRef} 
          onClick={handleInputClick}
        />
        <svg
          className="absolute bottom-1 left-10"
          width="16"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0292 13.1595 17.8388 11.1286 17.8388 8.91938C17.8388 3.99314 13.8456 0 8.91938 0C3.99314 0 0 3.99314 0 8.91938C0 13.8456 3.99314 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943ZM8.91938 15.0943C5.50257 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50257 5.50257 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50257 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z"
            fill="white"
          />
        </svg>
      </div>
      <SearchBarBox isVisible={isVisible} setIsVisible={setIsVisible}/>
    </div>
  );
}

export default SearchBar;
