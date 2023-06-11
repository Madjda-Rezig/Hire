import Hero from "../../assets/HeroBlog.jpg";
const Heroblogs = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200 flex justify-end"
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content">
        <div className="max-w-3xl">
          <h1 className="text-7xl font-bold text-gray-500 text-right ">
            Our Job is to Find You A Job
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Heroblogs;
