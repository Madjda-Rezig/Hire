import Hero from "../../assets/HeroCompany.jpg";
const Herocompany = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200 "
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Herocompany;
