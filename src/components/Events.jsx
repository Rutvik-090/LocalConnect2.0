import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaCamera,
  FaComment,
  FaEdit,
  FaFilter,
  FaHeart,
  FaImage,
  FaMapMarkerAlt,
  FaPlus,
  FaRegHeart,
  FaSearch,
  FaShare,
  FaTrash,
  FaUpload,
  FaUsers,
} from "react-icons/fa";
import { MdEvent, MdEventAvailable } from "react-icons/md";

const LocalConnectEvents = () => {
  const [activeTab, setActiveTab] = useState("discover"); // discover, myEvents, create
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [likedEvents, setLikedEvents] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Sample events data
  const [allEvents, setAllEvents] = useState([
    {
      id: 1,
      title: "Diwali Celebration 2024",
      date: "2024-11-01",
      time: "18:00",
      location: "Central Park, New York",
      description:
        "Join us for a grand Diwali celebration with traditional food, music, and fireworks!",
      purpose: "Cultural Festival",
      category: "cultural",
      image: "/api/placeholder/400/250",
      organizer: "Priya Sharma",
      organizerHometown: "Mumbai",
      attendees: 45,
      maxAttendees: 100,
      likes: 23,
      comments: 8,
      isActive: true,
      createdBy: "other",
    },
    {
      id: 2,
      title: "South Indian Food Festival",
      date: "2024-11-15",
      time: "12:00",
      location: "Jackson Heights Community Center",
      description:
        "Authentic South Indian cuisine prepared by home cooks from Tamil Nadu, Kerala, and Andhra Pradesh.",
      purpose: "Food & Culture",
      category: "food",
      image: "/api/placeholder/400/250",
      organizer: "Raj Kumar",
      organizerHometown: "Chennai",
      attendees: 32,
      maxAttendees: 80,
      likes: 18,
      comments: 12,
      isActive: true,
      createdBy: "other",
    },
    {
      id: 3,
      title: "Bollywood Dance Workshop",
      date: "2024-10-28",
      time: "15:00",
      location: "Brooklyn Dance Studio",
      description:
        "Learn classic Bollywood dance moves with professional choreographer Meera Patel.",
      purpose: "Entertainment & Learning",
      category: "entertainment",
      image: "/api/placeholder/400/250",
      organizer: "You",
      organizerHometown: "Delhi",
      attendees: 18,
      maxAttendees: 25,
      likes: 12,
      comments: 5,
      isActive: true,
      createdBy: "me",
    },
  ]);

  const [myEvents] = useState([
    {
      id: 3,
      title: "Bollywood Dance Workshop",
      date: "2024-10-28",
      time: "15:00",
      location: "Brooklyn Dance Studio",
      description:
        "Learn classic Bollywood dance moves with professional choreographer Meera Patel.",
      purpose: "Entertainment & Learning",
      category: "entertainment",
      organizer: "You",
      organizerHometown: "Delhi",
      attendees: 18,
      maxAttendees: 25,
      likes: 12,
      comments: 5,
      status: "active",
      createdBy: "me",
    },
    {
      id: 4,
      title: "Gujarati New Year Celebration",
      date: "2024-11-20",
      time: "19:00",
      location: "Queens Community Hall",
      description:
        "Celebrate Gujarati New Year with traditional music, dance, and authentic food.",
      purpose: "Cultural Festival",
      category: "cultural",
      organizer: "You",
      organizerHometown: "Ahmedabad",
      attendees: 0,
      maxAttendees: 60,
      likes: 0,
      comments: 0,
      status: "upcoming",
      createdBy: "me",
    },
  ]);

  const [eventForm, setEventForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    purpose: "",
    category: "cultural",
    maxAttendees: "",
    image: null,
  });

  const categories = [
    { value: "all", label: "All Events" },
    { value: "cultural", label: "Cultural" },
    { value: "food", label: "Food & Dining" },
    { value: "entertainment", label: "Entertainment" },
    { value: "sports", label: "Sports" },
    { value: "networking", label: "Networking" },
    { value: "religious", label: "Religious" },
  ];

  const handleCreateEvent = () => {
    if (
      !eventForm.title ||
      !eventForm.date ||
      !eventForm.time ||
      !eventForm.location ||
      !eventForm.description ||
      !eventForm.purpose
    ) {
      alert("Please fill in all required fields");
      return;
    }
    const newEvent = {
      id: Date.now(),
      ...eventForm,
      organizer: "You",
      organizerHometown: "Your Hometown",
      attendees: 0,
      likes: 0,
      comments: 0,
      isActive: true,
      createdBy: "me",
    };

    setAllEvents((prev) => [newEvent, ...prev]);
    setEventForm({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      purpose: "",
      category: "cultural",
      maxAttendees: "",
      image: null,
    });
    setShowCreateForm(false);
    setActiveTab("myEvents");
  };

  const toggleLike = (eventId) => {
    setLikedEvents((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(eventId)) {
        newLiked.delete(eventId);
      } else {
        newLiked.add(eventId);
      }
      return newLiked;
    });
  };

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || event.category === filterCategory;
    return matchesSearch && matchesCategory && event.isActive;
  });

  const EventCard = ({ event, showActions = false }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 bg-gradient-to-br from-[#FFECCC] to-[#F5E6D3]">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <MdEvent className="text-[#6C4780] text-6xl opacity-50" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-[#6C4780] text-white px-2 py-1 rounded-full text-xs font-semibold">
          {event.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#2C1810] mb-2">{event.title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-[#6F6F6F] text-sm">
            <FaCalendarAlt className="mr-2" />
            {new Date(event.date).toLocaleDateString()} at {event.time}
          </div>
          <div className="flex items-center text-[#6F6F6F] text-sm">
            <FaMapMarkerAlt className="mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-[#6F6F6F] text-sm">
            <FaUsers className="mr-2" />
            {event.attendees}/{event.maxAttendees || "∞"} attending
          </div>
        </div>

        <p className="text-[#6F6F6F] text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => toggleLike(event.id)}
              className="flex items-center space-x-1 text-[#6F6F6F] hover:text-[#6C4780] transition-colors"
            >
              {likedEvents.has(event.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
              <span className="text-sm">{event.likes || 0}</span>
            </button>
            <button className="flex items-center space-x-1 text-[#6F6F6F] hover:text-[#6C4780] transition-colors">
              <FaComment />
              <span className="text-sm">{event.comments || 0}</span>
            </button>
            <button className="flex items-center space-x-1 text-[#6F6F6F] hover:text-[#6C4780] transition-colors">
              <FaShare />
            </button>
          </div>

          {showActions && event.createdBy === "me" ? (
            <div className="flex space-x-2">
              <button className="p-2 text-[#6C4780] hover:bg-[#F5E6D3] rounded-full transition-colors">
                <FaEdit />
              </button>
              <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors">
                <FaTrash />
              </button>
            </div>
          ) : (
            <motion.button
              className="bg-[#6C4780] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#8B5A9B] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Event
            </motion.button>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-[#E3D4C3]">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#6C4780] rounded-full flex items-center justify-center text-white text-xs font-semibold">
              {event.organizer ? event.organizer.charAt(0) : "U"}
            </div>
            <div>
              <p className="text-sm font-medium text-[#2C1810]">
                {event.organizer || "Unknown Organizer"}
              </p>
              <p className="text-xs text-[#6F6F6F]">
                From {event.organizerHometown || "Unknown Location"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#FFECCC]">
      {/* Header */}
      <motion.header
        className="bg-[#6C4780] text-white p-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#FFECCC] rounded-full flex items-center justify-center">
              <BsFillChatDotsFill className="text-[#6C4780] text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">LocalConnect Events</h1>
              <p className="text-sm opacity-80">
                Discover and create amazing events with your community
              </p>
            </div>
          </div>

          <motion.button
            onClick={() => setShowCreateForm(true)}
            className="bg-[#FFECCC] text-[#6C4780] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlus />
            <span>Create Event</span>
          </motion.button>
        </div>
      </motion.header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b-2 border-[#E3D4C3]">
        <div className="max-w-6xl mx-auto">
          <div className="flex space-x-8">
            {[
              {
                key: "discover",
                label: "Discover Events",
                icon: MdEventAvailable,
              },
              { key: "myEvents", label: "My Events", icon: MdEvent },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? "border-[#6C4780] text-[#6C4780]"
                    : "border-transparent text-[#6F6F6F] hover:text-[#6C4780]"
                }`}
              >
                <tab.icon />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        <AnimatePresence mode="wait">
          {activeTab === "discover" && (
            <motion.div
              key="discover"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Search and Filter */}
              <div className="mb-6 flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6F6F6F]" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6F6F6F]" />
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 rounded-lg border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none appearance-none bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {activeTab === "myEvents" && (
            <motion.div
              key="myEvents"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#2C1810] mb-4">
                  My Events
                </h2>
                <p className="text-[#6F6F6F]">
                  Manage your created events and track attendance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myEvents.map((event) => (
                  <EventCard key={event.id} event={event} showActions={true} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Create Event Modal */}
      <AnimatePresence>
        {showCreateForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#2C1810]">
                    Create New Event
                  </h2>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="p-2 hover:bg-[#F5E6D3] rounded-full transition-colors"
                  >
                    <FaArrowLeft className="text-[#6C4780]" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-2">
                      Event Title
                    </label>
                    <input
                      type="text"
                      required
                      value={eventForm.title}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, title: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none"
                      placeholder="Enter event title"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C1810] mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={eventForm.date}
                        onChange={(e) =>
                          setEventForm({ ...eventForm, date: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C1810] mb-2">
                        Time
                      </label>
                      <input
                        type="time"
                        required
                        value={eventForm.time}
                        onChange={(e) =>
                          setEventForm({ ...eventForm, time: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      required
                      value={eventForm.location}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, location: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none"
                      placeholder="Enter event location"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-2">
                      Purpose/Theme
                    </label>
                    <input
                      type="text"
                      required
                      value={eventForm.purpose}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, purpose: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none"
                      placeholder="e.g., Cultural Festival, Networking, Food Tasting"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C1810] mb-2">
                        Category
                      </label>
                      <select
                        value={eventForm.category}
                        onChange={(e) =>
                          setEventForm({
                            ...eventForm,
                            category: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none"
                      >
                        {categories.slice(1).map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C1810] mb-2">
                        Max Attendees
                      </label>
                      <input
                        type="number"
                        value={eventForm.maxAttendees}
                        onChange={(e) =>
                          setEventForm({
                            ...eventForm,
                            maxAttendees: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none"
                        placeholder="Leave empty for unlimited"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-2">
                      Description
                    </label>
                    <textarea
                      required
                      value={eventForm.description}
                      onChange={(e) =>
                        setEventForm({
                          ...eventForm,
                          description: e.target.value,
                        })
                      }
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none"
                      placeholder="Describe your event in detail..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-2">
                      Event Image
                    </label>
                    <div className="border-2 border-dashed border-[#E3D4C3] rounded-lg p-6 text-center">
                      <FaImage className="mx-auto text-[#6C4780] text-3xl mb-4" />
                      <p className="text-[#6F6F6F] mb-4">
                        Upload an image for your event
                      </p>
                      <div className="flex justify-center space-x-4">
                        <button
                          type="button"
                          className="flex items-center space-x-2 px-4 py-2 bg-[#6C4780] text-white rounded-lg hover:bg-[#8B5A9B] transition-colors"
                        >
                          <FaCamera />
                          <span>Take Photo</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center space-x-2 px-4 py-2 border-2 border-[#6C4780] text-[#6C4780] rounded-lg hover:bg-[#F5E6D3] transition-colors"
                        >
                          <FaUpload />
                          <span>Upload</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="flex-1 px-6 py-3 border-2 border-[#6C4780] text-[#6C4780] rounded-lg font-semibold hover:bg-[#F5E6D3] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleCreateEvent}
                      className="flex-1 px-6 py-3 bg-[#6C4780] text-white rounded-lg font-semibold hover:bg-[#8B5A9B] transition-colors"
                    >
                      Create Event
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocalConnectEvents;
