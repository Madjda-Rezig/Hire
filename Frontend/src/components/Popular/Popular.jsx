import Image from "../../assets/HeroCompany.jpg";
const Popular = () => {
  return (
    <section className="py-6 sm:py-12 bg-white text-gray-600">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Most Popular</h2>
          <p className="font-serif text-sm text-gray-400">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col bg-gray-100 shadow-xl border-gray-200 border-2">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-500"
                src={Image}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-blue-600"
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                How To Find The Job That Feet Your Carrer Expectations
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>June 1, 2020</span>
                <span>Rezig Madjda</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-gray-100 shadow-xl border-gray-200 border-2">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-500"
                src={Image}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-blue-600"
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                How To Find The Job That Feet Your Carrer Expectations
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>June 2, 2020</span>
                <span>Rezig Madjda</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-gray-100 shadow-xl border-gray-200 border-2">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-500"
                src={Image}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-blue-600"
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                How To Find The Job That Feet Your Carrer Expectations
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>June 3, 2020</span>
                <span>Rezig Madjda</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-gray-100 shadow-xl border-gray-200 border-2">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-500"
                src={Image}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-blue-600"
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                How To Find The Job That Feet Your Carrer Expectations
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>June 4, 2020</span>
                <span>Rezig Madjda</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Popular;
