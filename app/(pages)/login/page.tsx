// pages/login.js
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-900 to-lime-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          {/* Replace with your logo */}
          <Image
            src="/logo.png" // Add your logo path here
            alt="Ultimate Blog Logo"
            width={80}
            height={80}
          />
          <h2 className="mt-4 text-xl font-bold">Ultimate Blog</h2>
          <p className="text-gray-600">Login</p>
        </div>

        <form>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-gray-700" htmlFor="email">
              Email Address or Agent Code
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="GN-3473"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block mb-1 text-sm font-semibold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer">
              👁️
            </span>
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-semibold text-gray-700" htmlFor="securityCode">
              Enter this Security Code
            </label>
            <div className="flex items-center space-x-3">
              <span className="px-4 py-2 font-bold text-red-600 bg-gray-100 border border-gray-300 rounded-md">
                3638
              </span>
              <input
                type="text"
                id="securityCode"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Security Pin"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mb-4 text-white bg-blue-700 rounded-md hover:bg-blue-800"
          >
            Login
          </button>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Don't Have An Account Yet?</p>
            <a
              href="/register"
              className="px-4 py-2 text-sm font-semibold text-yellow-700 bg-yellow-200 rounded-md hover:bg-yellow-300"
            >
              Register Here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
