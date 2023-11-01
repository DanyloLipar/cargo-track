import React from "react";
import classNames from "classnames";
import { ConditionTypes, Info, Part } from "../../types";
import white_circle from "../../assets/images/icons/white_circle.svg";
import green_dot from "../../assets/images/icons/green_dot.svg";
import red_dot from "../../assets/images/icons/red_dot.svg";
import arrow_down from "../../assets/images/icons/arrow_down.svg";
import TrackInfoPart from "./TrackInfoPart/TrackInfoPart";

type Props = {
  allInfo: Info[];
  setAllInfo: (info: Info[]) => void;
  info: Info;
  openedId: number | null;
  setOpenedId: (num: number | null) => void;
};

const TrackInfo: React.FC<Props> = ({
  allInfo,
  setAllInfo,
  info,
  openedId,
  setOpenedId,
}) => {
  const problemCondition = () => {
    return info.parts.some(
      (part: Part) => part.condition === ConditionTypes.problem
    );
  };

  return (
    <div className="cargo">
      <div className="cargo__box">
        <p className="cargo__box-name">{info.name}</p>
        <div className="cargo__box-actions">
          <div className="cargo__box-condition">
            {!problemCondition() && (
              <img className="" src={white_circle} alt="default" />
            )}
            {problemCondition() && <img src={red_dot} alt="problem" />}
          </div>
          <button
            onClick={() => {
              openedId === info.id ? setOpenedId(null) : setOpenedId(info.id);
            }}
            className={classNames({
              arrow: true,
              "arrow-up": info.id === openedId,
            })}
          >
            <img src={arrow_down} alt="arrow" />
          </button>
        </div>
      </div>
      {openedId === info.id && (
        <ul className="cargo__parts">
          {info.parts.map((part: Part) => (
            <li key={part.id} className="cargo__parts-item">
              <TrackInfoPart
                part={part}
                categoryId={info.id}
                allInfo={allInfo}
                setAllInfo={setAllInfo}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrackInfo;
