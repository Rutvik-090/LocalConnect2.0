// import { NavLink } from "react-router-dom";

// function Login() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-[#FFF7E6]">
//       <div className="w-[30rem] bg-[#FFECCC] rounded-2xl shadow-2xl p-8">
//         <h1 className="text-center mb-6 font-bold text-3xl text-gray-800 font-Inter">
//           Login
//         </h1>
//         <form className="flex flex-col gap-4">
//           <div className="flex flex-col">
//             <label
//               htmlFor="email"
//               className="text-sm font-semibold text-gray-700 mb-1"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="border-2 border-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label
//               htmlFor="password"
//               className="text-sm font-semibold text-gray-700 mb-1"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="border-2 border-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           <p>
//             Don't have account?
//             <NavLink to="/signup">
//               {" "}
//               {""}
//               <span className="font-semibold text-[]">Login</span>
//             </NavLink>
//           </p>

//           <button
//             type="submit"
//             className="mt-4 bg-black text-[#FFECCC] font-semibold py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-200/50 p-8 transform hover:scale-105 transition-all duration-300">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Login to your account</p>
        </div>

        <form className="space-y-6">
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-amber-600 transition-colors"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200 bg-gray-50/50"
                placeholder="Enter your email"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-4 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-amber-600 transition-colors"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200 bg-gray-50/50"
                placeholder="Enter your password"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-4 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="#"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 rounded-xl hover:from-amber-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-amber-200 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <NavLink
              to="/signup"
              className="text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              Sign up
            </NavLink>
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="border-t border-gray-200 w-full"></div>
          <span className="px-4 text-gray-500 text-sm bg-white">or</span>
          <div className="border-t border-gray-200 w-full"></div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
