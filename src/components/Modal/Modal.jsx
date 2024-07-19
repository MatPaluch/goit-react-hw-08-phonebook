import ReactDOM from "react-dom";

const PopupWindow = () => {
  return ReactDOM.createPortal(
    <div>PopupWindow with portal</div>,
    document.querySelector("#popup-root"),
  );
};

export default PopupWindow;
