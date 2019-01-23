import "./SeasonDisplay.css";
import React from "react";

// Create a new object.
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  //console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  //console.log(season);

  const { text, iconName } = seasonConfig[season]; // {text, iconName}

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left huge ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right huge ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
