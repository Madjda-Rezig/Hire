import Hero from "../../assets/HeroJobs.jpg";
const Herojobs = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200 "
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-7xl font-bold text-white">
            Finding a Job is a Job
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Herojobs;
