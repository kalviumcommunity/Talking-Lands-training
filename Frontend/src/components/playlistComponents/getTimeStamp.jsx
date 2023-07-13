import React from "react";

function GetTimeStamp({time}) {
  const duration = time ;

  // Remove the leading 'PT' from the duration string
  const timeString = duration.slice(2);

  // Extract minutes and seconds
  const minutes = timeString.split("M")[0];
  const seconds = timeString.split("M")[1].slice(0, -1);
  return <div>
    <span className="text-white  text-[12px] bg-grayblack p-1 font-bold  rounded-md relative bottom-[95px] left-[185px]">{minutes < 10 ? "0"+minutes: minutes}:{seconds < 10 ? '0'+seconds : seconds}</span>
  </div>;
}

export default GetTimeStamp;
