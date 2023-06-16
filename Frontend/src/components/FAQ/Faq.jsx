const Faq = () => {
  return (
    <section className="bg-[#1CD2B1] bg-opacity-10 text-gray-600" id="FAQ">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-[#1CD2B1]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-600">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How can I post a job opening on your site?
            </summary>
            <div className="px-4 pb-4">
              <p>
                To post a job opening on our site, you can create an employer
                account and then access your dashboard. From there, you can
                easily create and publish your job opening by providing the
                required details such as the job title, description, required
                skills, etc.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Can I modify or remove my job opening once it has been posted?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Yes, you can modify or remove your job opening at any time. Log
                in to your employer account, access your dashboard, and locate
                the job opening you want to modify or remove. You will have the
                option to update the details of the job opening or delete it
                completely.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How can I reach out to your support team for assistance?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                If you need assistance or have any questions, our support team
                is ready to help. You can reach out to us through the contact
                information provided on our website . We aim to respond to your
                queries promptly and provide the necessary guidance throughout
                your recruitment journey.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
