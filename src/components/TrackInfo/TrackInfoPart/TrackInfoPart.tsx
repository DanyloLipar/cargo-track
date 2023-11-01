import React from "react";
import { ConditionTypes, Info, Part } from "../../../types";
import white_circle from "../../../assets/images/icons/white_circle.svg";
import green_dot from "../../../assets/images/icons/green_dot.svg";
import red_dot from "../../../assets/images/icons/red_dot.svg";

type Props = {
  allInfo: Info[];
  setAllInfo: (info: Info[]) => void;
  part: Part;
  categoryId: number;
};

const TrackInfoPart: React.FC<Props> = ({
  part,
  categoryId,
  allInfo,
  setAllInfo,
}) => {
  const changePartCondition = () => {
    const updatedInfo = allInfo.map((info) => {
      if (info.id === categoryId) {
        const updatedParts = info.parts.map((somePart) => {
          if (somePart.id === part.id) {
            switch (somePart.condition) {
              case ConditionTypes.default:
                somePart.condition = ConditionTypes.good;
                break;
              case ConditionTypes.good:
                somePart.condition = ConditionTypes.problem;
                break;
              case ConditionTypes.problem:
                somePart.condition = ConditionTypes.good;
                break;
            }
          }
          return somePart;
        });
        return { ...info, parts: updatedParts };
      }
      return info;
    });
    setAllInfo(updatedInfo);
    localStorage.setItem("trackInfo", JSON.stringify(updatedInfo));
  };

  return (
    <div className="part">
      <p className="part__name">{part.part}</p>
      <button onClick={changePartCondition} className="part__control">
        {part.condition === ConditionTypes.default && (
          <img src={white_circle} alt="default" />
        )}
        {part.condition === ConditionTypes.good && (
          <img src={green_dot} alt="good" />
        )}
        {part.condition === ConditionTypes.problem && (
          <img src={red_dot} alt="problem" />
        )}
      </button>
    </div>
  );
};

export default TrackInfoPart;
