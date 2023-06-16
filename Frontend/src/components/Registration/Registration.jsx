const Registration = () => {
  return (
    <section className="p-6 bg-[#1CD2B1] text-gray-600">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white">
          3 steps to create a recruiter account
        </h2>
        <div className="grid gap-6 my-10 lg:grid-cols-3 a recruiter account">
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-white drop-shadow-2xl">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[#1CD2B1] text-white">
              1
            </div>
            <p className="text-3xl font-bold text-center text-[#1CD2B1]">
              Registration
            </p>
            <p className="text-xl font-semibold text-center">
              Fill out the Contact Us form with your basic details
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-white drop-shadow-2xl">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[#1CD2B1] text-white">
              2
            </div>
            <p className="text-3xl font-bold text-center text-[#1CD2B1]">
              Contact
            </p>
            <p className="text-xl font-semibold text-center">
              Our team will contact you to initiate the verification process.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-white drop-shadow-2xl">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[#1CD2B1] text-white">
              3
            </div>
            <p className="text-3xl font-bold text-center text-[#1CD2B1]">
              Account Setup
            </p>
            <p className="text-xl font-semibold text-center">
              Get a unique identifier, granting you access to your recruiter
              account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
