import Logo from "../../assets/Logo_Djezzy.png";

const Cardcompany = () => {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-blue-600">
            The Company That Trust Us
          </h2>
          <p className="mt-4 text-gray-600">
            This is a list of all the companies we work with to provide you the
            best work opportunity
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="card w-60 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={Logo} alt="logo" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Djezzy</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <a className="link link-hover text-blue-600 text-center">
              - More Details -
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardcompany;
