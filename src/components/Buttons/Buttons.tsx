import rotate from "../../assets/images/icons/left_click.svg";
import zoom from "../../assets/images/icons/scroll.svg";
import move from "../../assets/images/icons/right_click.svg";
import reset_camera from "../../assets/images/icons/reset_camera.svg";

const Buttons = () => {
  return (
    <div className="controls">
      <button className="controls__btn">
        <img className="controls__btn-icon" src={rotate} alt="rotate" />
      </button>
      <button className="controls__btn">
        <img className="controls__btn-icon" src={zoom} alt="zoom" />
      </button>
      <button className="controls__btn">
        <img className="controls__btn-icon" src={move} alt="move" />
      </button>
      <button className="controls__btn">
        <img
          className="controls__btn-icon"
          src={reset_camera}
          alt="reset_camera"
        />
      </button>
    </div>
  );
};

export default Buttons;
