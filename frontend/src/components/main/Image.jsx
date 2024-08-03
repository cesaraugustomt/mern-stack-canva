export const Image = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {[
        1, 2, 3, 4, 23, 234, 235, 6547, 234, 156, 74, 45, 7, 8, 9, 67, 43, 74,
        25, 74,
      ].map((img, i) => (
        <div
          key={i}
          className="w-full h-[90px] 
          overflow-hidden rounded-sm cursor-pointer"
        >
          <img
            className="w-full h-full object-fill"
            src={`http://localhost:5173/project.webp`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};
