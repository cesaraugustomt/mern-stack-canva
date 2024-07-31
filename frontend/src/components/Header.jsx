import { Link } from "react-router-dom";

export const Header = () => {
  const saveImage = () => {};
  const downloadImage = () => {};

  return (
    <div className="h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c]">
      <div className="flex justify-between px-10 items-center text-gray-300 h-full">
        <Link to="/">
          <img
            src="https://static.canva.com/web/images/856bac30504ecac8dbd38dbee61de1f1.svg"
            alt=""
          />
        </Link>
        <span className="text-xl">Mini Canva</span>
        <div className="flex justify-center items-center gap-2 text-gray-300">
          <button
            onClick={saveImage}
            className="px-3 py-[6px] outline-none bg-[#252627]"
          >
            Save
          </button>
          <button
            onClick={downloadImage}
            className="px-3 py-[6px] outline-none bg-[#252627]"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
