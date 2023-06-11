const Stat = () => {
  return (
    <section class="bg-green-400">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            They Trust Us
          </h2>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-600 ">
                Total Sales
              </dt>

              <dd class="text-4xl font-extrabold text-white md:text-5xl">
                $4.8m
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-600">
                Official Addons
              </dt>

              <dd class="text-4xl font-extrabold text-white md:text-5xl">24</dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-600">
                Total Addons
              </dt>

              <dd class="text-4xl font-extrabold text-white md:text-5xl">86</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stat;
