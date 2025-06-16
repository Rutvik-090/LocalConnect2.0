// import { FaPlus, FaSearch } from "react-icons/fa";
// import Header from "./Header";

// function Dashboard() {
//   return (
//     <div>
//       <Header />

//       <div className=" w-[710px] h-[325px] m-[3rem]">
//         <h1 className="text-center text-3xl font-bold font-Inter">
//           Welcome back, User!!
//         </h1>
//         <h3 className="text-center text-base font-normal font-Inter">
//           Let's reconnect with your Hometown circle today.
//         </h3>

//         <div className="flex flex-row gap-2 items-center justify-center mt-[1.5rem] mr-[1rem]">
//           <FaSearch className="" />
//           <input
//             type="text"
//             placeholder="   Find people from Hometown"
//             className="w-[370px] h-[35px] border-[3px] border-[#E3D4C3] rounded-sm font-Inter"
//           />
//         </div>

//         <div className="flex flex-row items-center justify-center gap-4">
//           <button className="flex flex-row w-[120px] h-[25px] border-2 bg-[F6C96A] text-sm rounded-md">
//             <FaPlus />
//             Add Memory
//           </button>
//           <button className="w-[120px] h-[25px] border-2 bg-[F6C96A] text-sm rounded-md">
//             View Events
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import {
  FaBell,
  FaCalendarAlt,
  FaComments,
  FaHome,
  FaLock,
  FaMapMarkerAlt,
  FaPlus,
  FaSearch,
  FaSignOutAlt,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5E6D3] flex">
      {/* Left Sidebar */}
      <div className="w-16 bg-[#8B5A8C] flex flex-col items-center py-4 space-y-4 ">
        <div
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer"
          title="Home"
        >
          <FaHome className="text-[#8B5A8C] text-sm" />
        </div>
        <NavLink to="/chat">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"
            title="Chat"
          >
            <FaComments className="text-white text-sm" />
          </div>
        </NavLink>
        <NavLink to="/events">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"
            title="Events"
          >
            <FaCalendarAlt className="text-white text-sm" />
          </div>
        </NavLink>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"
          title="Notifications"
        >
          <FaBell className="text-white text-sm" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Center Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold text-[#8B5A8C]">
                LocalConnect
              </div>
            </div>
            <nav className="flex space-x-8">
              <NavLink to="/">
                <button className="text-gray-700 hover:text-[#8B5A8C] font-medium cursor-pointer">
                  Home
                </button>
              </NavLink>
              <NavLink to="/chat">
                <button className="text-gray-700 hover:text-[#8B5A8C] font-medium cursor-pointer">
                  Chat
                </button>
              </NavLink>
              <NavLink to="/events">
                <button className="text-gray-700 hover:text-[#8B5A8C] font-medium cursor-pointer">
                  Events
                </button>
              </NavLink>
              <NavLink>
                <button className="text-gray-700 hover:text-[#8B5A8C] font-medium cursor-pointer">
                  Updates
                </button>
              </NavLink>
            </nav>
          </div>

          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back, User !!
            </h1>
            <p className="text-gray-600 mb-6">
              Let's reconnect with your Hometown circle today
            </p>

            {/* Search Bar */}
            <div className="relative mb-6">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Find people from your hometown"
                className="w-full max-w-md pl-12 pr-4 py-3 bg-white border-2 border-[#E3D4C3] rounded-lg focus:outline-none focus:border-[#8B5A8C] transition-colors"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-[#F6C96A] text-gray-800 font-medium rounded-lg hover:bg-[#F4B942] transition-colors">
                <FaPlus className="text-sm" />
                <span>Add Memory</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-[#F6C96A] text-gray-800 font-medium rounded-lg hover:bg-[#F4B942] transition-colors">
                <FaCalendarAlt className="text-sm" />
                <span>View Events</span>
              </button>
            </div>
          </div>

          {/* Connection Map Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Connection Map Review
            </h2>
            <div className="bg-[#E8D5B7] rounded-lg p-6 relative min-h-[200px] overflow-hidden">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  className="fill-[#8B5A8C]"
                >
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Location Markers */}
              <div className="relative z-10">
                <div className="absolute top-8 left-12">
                  <FaMapMarkerAlt className="text-[#8B5A8C] text-2xl drop-shadow-lg" />
                </div>
                <div className="absolute top-16 right-20">
                  <FaMapMarkerAlt className="text-[#8B5A8C] text-2xl drop-shadow-lg" />
                </div>
                <div className="absolute bottom-12 left-1/3">
                  <FaMapMarkerAlt className="text-[#8B5A8C] text-2xl drop-shadow-lg" />
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d="M 60 50 Q 120 80 180 70"
                    stroke="#8B5A8C"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M 60 50 Q 80 120 140 140"
                    stroke="#8B5A8C"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </div>

              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#8B5A8C] text-white rounded-lg hover:bg-[#7A4F7B] transition-colors">
                View full map
              </button>
            </div>
          </div>

          {/* Suggested Connections */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Suggested Connections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Anish */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E3D4C3]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <FaUser className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Anish</h3>
                    <p className="text-gray-600 text-sm">San Francisco</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-[#8B5A8C] hover:text-[#8B5A8C] transition-colors flex items-center justify-center space-x-2">
                  <FaUserPlus className="text-sm" />
                  <span>Connect</span>
                </button>
              </div>

              {/* Priya */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E3D4C3]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#8B5A8C] rounded-full flex items-center justify-center">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Priya</h3>
                    <p className="text-gray-600 text-sm">UAE</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-[#8B5A8C] text-white rounded-lg hover:bg-[#7A4F7B] transition-colors flex items-center justify-center space-x-2">
                  <FaUserPlus className="text-sm" />
                  <span>Connect</span>
                </button>
              </div>

              {/* Rahul */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E3D4C3] md:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <FaUser className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Rahul</h3>
                    <p className="text-gray-600 text-sm">Japan</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-[#8B5A8C] text-white rounded-lg hover:bg-[#7A4F7B] transition-colors flex items-center justify-center space-x-2">
                  <FaUserPlus className="text-sm" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-[#E3D4C3] p-6">
          {/* User Profile Card */}
          <div className="bg-[#F5E6D3] rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <FaUser className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">User</h3>
                <p className="text-gray-600 text-sm">Ahmedabad, India</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Hometown</span>
                <span className="font-medium">Surat, Gujarat</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Connections</span>
                <span className="font-medium">15</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Joined Events</span>
                <span className="font-medium">3</span>
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full text-left text-sm text-gray-700 hover:text-[#8B5A8C] flex items-center space-x-2 py-1">
                <FaUser className="text-xs" />
                <span>Edit Profile</span>
              </button>
              <button className="w-full text-left text-sm text-gray-700 hover:text-[#8B5A8C] flex items-center space-x-2 py-1">
                <FaLock className="text-xs" />
                <span>Privacy Settings</span>
              </button>
              <button className="w-full text-left text-sm text-gray-700 hover:text-[#8B5A8C] flex items-center space-x-2 py-1">
                <FaSignOutAlt className="text-xs" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Corner Purple Circle */}
      <div className="fixed bottom-0 right-0 w-64 h-64 bg-[#8B5A8C] rounded-full translate-x-32 translate-y-32 opacity-20"></div>
    </div>
  );
}

export default Dashboard;
