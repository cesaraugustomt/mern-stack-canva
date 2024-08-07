export const TemplateDesign = () => {
  return (
    <>
      {[1, 2, 3, 4].map((d, i) => (
        <div
          key={i}
          className="group w-full rounded-md overflow-hidden bg-[#ffffff12]
           cursor-pointer"
        >
          <img
            className="w-full h-full rounded-md overflow-hidden"
            src="http://localhost:5173/project.webp"
            alt="image"
          />
        </div>
      ))}
    </>
  );
};
