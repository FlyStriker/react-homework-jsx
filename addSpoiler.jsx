import "./addSpoiler.css";
import React, {useState} from 'react';


const ShowSpoiler = ({ header = "+", open = false, children }) => {
  const [ShowContent, setVisibility] = useState(open);
  const ShowHideText = () => {
    setVisibility(ShowContent ? false : true);
  };

  return (
    <div className="Show_Spoiler" onClick={ShowHideText}>
      {header} <br/>
      {ShowContent ? children : ""}
    </div>
  );
};

export default ShowSpoiler;
