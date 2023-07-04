function Playlist() {
  return (
    <>
      <div className="ml-10 mt-8">
        <div className="flex items-center">
          <div className="h-14 w-14 bg-pink rounded-lg">
            <svg class="svg-circleplus" viewBox="0 0 100 100">
              <line
                x1="20"
                y1="50"
                x2="80"
                y2="50"
                stroke-width="5"
                stroke="black"
              ></line>
              <line
                x1="50"
                y1="25"
                x2="50"
                y2="75"
                stroke-width="5"
                stroke="black"
              ></line>
            </svg>
          </div>
          <span className="text-2xl font-medium ml-6 text-white">
            Create New Playlist
          </span>
        </div>
      </div>
    </>
  );
}

export default Playlist;
