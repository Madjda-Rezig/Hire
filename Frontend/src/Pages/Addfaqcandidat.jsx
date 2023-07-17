export default function Addfaqcandidat() {
  return (
    <div>
      <form
        className="my-40 space-y-5 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border-2"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <span className=" text-4xl py-5 font-semibold sm:text-4xl bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 bg-clip-text text-transparent">
            Add a Category
          </span>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Category Name:</span>
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              name="nom"
              value={nom}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <label className="label">
              <span className="label-text">Description:</span>
            </label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              name="defcat"
              value={defcat}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full rounded-lg  px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}
