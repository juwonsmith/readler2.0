import React from "react";

function LoginPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-center h-screen w-full text-center">
        <form className="bg-gray-900 p-10 rounded-lg shadow-lg w-[37.5rem] h-[25rem] justify-items-center">
          <h1 className="text-3xl font-bold text-red-400 mb-6 underline animate-pulse">
            Sign in here.
          </h1>
          <div className="mb-4 mt-3">
            <label
              htmlFor="email"
              className="block text-gray-100 font-bold mb-2 text-left"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 text-gray-100 w-full"
              required
            />
          </div>
          <div className="mb-4 mt-8">
            <label
              htmlFor="password"
              className="block text-gray-100 font-bold mb-2 text-left"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 text-gray-100 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 mt-8  text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
