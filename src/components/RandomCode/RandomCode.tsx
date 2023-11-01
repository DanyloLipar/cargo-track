import React, { useState, useRef } from "react";
import copy from "../../assets/images/icons/copy.svg";

const RandomCode = () => {
  const [randomString, setRandomString] = useState<string>("xbhsj638nskHsj6Ks");
  const codeRef = useRef(null);

  console.log(codeRef);

  const generateRandom = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let random = "";
    for (let i = 0; i < 17; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      random += characters.charAt(randomIndex);
    }
    setRandomString(random);
  };

  const copyCode = () => {
    const selectedBlock: any = codeRef.current;
    navigator.clipboard.writeText(String(selectedBlock.innerText));
    alert(`${selectedBlock.innerText} copied!`);
  };

  return (
    <div className="random">
      <button className="random__btn" onClick={generateRandom}>
        Generate random
      </button>
      <div className="random__desc">
        <span>New scenario</span>
      </div>
      <div className="random__box">
        <div className="random__box-txt">
          <span ref={codeRef}>{randomString}</span>
        </div>
        <button className="random__box-copy" onClick={copyCode}>
          <img src={copy} alt="copy" />
        </button>
      </div>
    </div>
  );
};

export default RandomCode;
