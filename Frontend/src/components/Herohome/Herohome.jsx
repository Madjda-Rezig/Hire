import home from "../../assets/Home.jpg";
const Herohome = () => {
  return (
    <div
      className="hero h-screen flex"
      style={{
        backgroundImage: `url(${home})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold text-blue-600">
            Find The Job Of Your Dream
          </h1>
          <p className="py-16 text-4xl ">
            With the best recrutement Web site in Algéria
          </p>
          <a
            href="#"
            class="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-600 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Our Jobs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herohome;
