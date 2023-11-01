import React, { useState, useEffect } from "react";
import "./assets/styles/style.scss";
import RandomCode from "./components/RandomCode/RandomCode";
import Buttons from "./components/Buttons/Buttons";
import { Info } from "./types";
import { trackInfo } from "./constants/data";
import TrackInfo from "./components/TrackInfo/TrackInfo";

function App() {
  const [allInfo, setAllInfo] = useState<Info[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("trackInfo")) {
      localStorage.setItem("trackInfo", JSON.stringify(trackInfo));
      setAllInfo(trackInfo);
    } else {
      const info = JSON.parse(localStorage.getItem("trackInfo") || "");
      setAllInfo(info);
    }
  }, []);

  return (
    <div className="general">
      <RandomCode />
      <div className="info">
        <button className="info__reset">Reset Settings</button>
        <ul className="info__list">
          {allInfo.map((info: Info) => (
            <li key={info.id} className="info__list-item">
              <TrackInfo
                allInfo={allInfo}
                setAllInfo={setAllInfo}
                info={info}
                openedId={selectedId}
                setOpenedId={setSelectedId}
              />
            </li>
          ))}
        </ul>
      </div>
      <Buttons />
    </div>
  );
}

export default App;
