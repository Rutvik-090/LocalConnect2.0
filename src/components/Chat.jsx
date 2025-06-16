import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import {
  FaArrowLeft,
  FaCamera,
  FaCheck,
  FaCheckDouble,
  FaEllipsisV,
  FaFile,
  FaImage,
  FaMapMarkerAlt,
  FaMicrophone,
  FaPaperclip,
  FaPaperPlane,
  FaPhone,
  FaSmile,
  FaVideo,
} from "react-icons/fa";
import { MdAdd, MdSearch } from "react-icons/md";

const LocalConnectChat = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({
    0: [
      {
        id: 1,
        text: "Hey! I saw you're from Mumbai too! 🇮🇳",
        sender: "other",
        time: "10:30",
        status: "read",
      },
      {
        id: 2,
        text: "Yes! Currently in New York though. Are you here too?",
        sender: "me",
        time: "10:32",
        status: "read",
      },
      {
        id: 3,
        text: "Amazing! I'm in Brooklyn. We should meet up for some authentic Indian food!",
        sender: "other",
        time: "10:35",
        status: "read",
      },
      {
        id: 4,
        text: "That sounds perfect! I know a great place in Jackson Heights",
        sender: "me",
        time: "10:37",
        status: "read",
      },
      {
        id: 5,
        text: "Perfect! I've been craving good Mumbai street food 😊",
        sender: "other",
        time: "10:40",
        status: "delivered",
      },
    ],
    1: [
      {
        id: 1,
        text: "Welcome to our Delhi community group! 🎉",
        sender: "other",
        time: "09:15",
        status: "read",
      },
      {
        id: 2,
        text: "Thanks for adding me! Great to connect with people from home",
        sender: "me",
        time: "09:18",
        status: "read",
      },
      {
        id: 3,
        text: "We're planning a Diwali celebration next month. You should join!",
        sender: "other",
        time: "09:20",
        status: "read",
      },
    ],
  });
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const messagesEndRef = useRef(null);

  const chatList = [
    {
      id: 0,
      name: "Priya Sharma",
      avatar: "PS",
      lastMessage: "Perfect! I've been craving good Mumbai street food 😊",
      time: "10:40",
      unread: 2,
      online: true,
      hometown: "Mumbai",
      currentCity: "New York",
    },
    {
      id: 1,
      name: "Delhi Friends",
      avatar: "DF",
      lastMessage: "We're planning a Diwali celebration next month...",
      time: "09:20",
      unread: 0,
      online: false,
      hometown: "Delhi",
      currentCity: "Group Chat",
      isGroup: true,
    },
    {
      id: 2,
      name: "Raj Patel",
      avatar: "RP",
      lastMessage: "The weather here reminds me of Gujarat!",
      time: "Yesterday",
      unread: 0,
      online: false,
      hometown: "Ahmedabad",
      currentCity: "Toronto",
    },
    {
      id: 3,
      name: "Chennai Connect",
      avatar: "CC",
      lastMessage: "Anyone up for filter coffee tomorrow?",
      time: "Yesterday",
      unread: 5,
      online: true,
      hometown: "Chennai",
      currentCity: "Group Chat",
      isGroup: true,
    },
  ];

  const emojis = ["😊", "😂", "❤️", "👍", "👎", "😢", "😮", "🎉", "🇮🇳", "🍛"];

  const attachmentOptions = [
    { icon: FaCamera, label: "Camera", color: "#FF6B6B" },
    { icon: FaImage, label: "Gallery", color: "#4ECDC4" },
    { icon: FaFile, label: "Document", color: "#45B7D1" },
    { icon: FaMapMarkerAlt, label: "Location", color: "#96CEB4" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        text: message,
        sender: "me",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "sent",
      };

      setMessages((prev) => ({
        ...prev,
        [selectedChat]: [...(prev[selectedChat] || []), newMessage],
      }));
      setMessage("");

      // Simulate message status updates
      setTimeout(() => {
        setMessages((prev) => ({
          ...prev,
          [selectedChat]: prev[selectedChat].map((msg) =>
            msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg
          ),
        }));
      }, 1000);
    }
  };

  const addEmoji = (emoji) => {
    setMessage((prev) => prev + emoji);
    setShowEmoji(false);
  };

  return (
    <div className="h-screen bg-[#FFECCC] flex">
      {/* Sidebar - Chat List */}
      <motion.div
        className="w-80 bg-[#FFFDF0] border-r-2 border-[#E3D4C3] flex flex-col"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="p-4 bg-[#6C4780] text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FFECCC] rounded-full flex items-center justify-center">
                <BsFillChatDotsFill className="text-[#6C4780] text-lg" />
              </div>
              <div>
                <h2 className="font-semibold">LocalConnect</h2>
                <p className="text-xs opacity-80">Find your people</p>
              </div>
            </div>
            <MdAdd className="text-xl cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-full p-1 w-8 h-8" />
          </div>

          {/* Search */}
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6F6F6F]" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-[#2C1810] placeholder-[#6F6F6F] focus:outline-none focus:ring-2 focus:ring-[#FFECCC]"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chatList.map((chat) => (
            <motion.div
              key={chat.id}
              className={`p-4 border-b border-[#E3D4C3] cursor-pointer transition-colors ${
                selectedChat === chat.id ? "bg-[#F5E6D3]" : "hover:bg-[#F9F9F9]"
              }`}
              onClick={() => setSelectedChat(chat.id)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                      chat.isGroup ? "bg-[#96CEB4]" : "bg-[#6C4780]"
                    }`}
                  >
                    {chat.avatar}
                  </div>
                  {chat.online && !chat.isGroup && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[#2C1810] truncate">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-[#6F6F6F]">{chat.time}</span>
                  </div>
                  <p className="text-sm text-[#6F6F6F] truncate">
                    {chat.lastMessage}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-[#6C4780]">
                      {chat.hometown} → {chat.currentCity}
                    </span>
                    {chat.unread > 0 && (
                      <span className="bg-[#6C4780] text-white text-xs rounded-full px-2 py-1">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <motion.div
          className="bg-[#6C4780] text-white p-4 flex items-center justify-between"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <FaArrowLeft className="cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-full p-2 w-8 h-8" />
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                chatList[selectedChat]?.isGroup
                  ? "bg-[#96CEB4]"
                  : "bg-[#FFECCC] text-[#6C4780]"
              }`}
            >
              {chatList[selectedChat]?.avatar}
            </div>
            <div>
              <h3 className="font-semibold">{chatList[selectedChat]?.name}</h3>
              <p className="text-xs opacity-80">
                {chatList[selectedChat]?.online
                  ? "Online"
                  : "Last seen recently"}{" "}
                • {chatList[selectedChat]?.hometown}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-full p-2 w-8 h-8" />
            <FaVideo className="cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-full p-2 w-8 h-8" />
            <FaEllipsisV className="cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-full p-2 w-8 h-8" />
          </div>
        </motion.div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FFECCC]">
          <AnimatePresence>
            {(messages[selectedChat] || []).map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    msg.sender === "me"
                      ? "bg-[#6C4780] text-white rounded-br-md"
                      : "bg-white text-[#2C1810] rounded-bl-md shadow-sm"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <div
                    className={`flex items-center justify-end space-x-1 mt-1 ${
                      msg.sender === "me"
                        ? "text-white text-opacity-70"
                        : "text-[#6F6F6F]"
                    }`}
                  >
                    <span className="text-xs">{msg.time}</span>
                    {msg.sender === "me" && (
                      <div className="text-xs">
                        {msg.status === "sent" && <FaCheck />}
                        {msg.status === "delivered" && <FaCheckDouble />}
                        {msg.status === "read" && (
                          <FaCheckDouble className="text-blue-300" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <motion.div
          className="bg-[#FFFDF0] p-4 border-t-2 border-[#E3D4C3]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Emoji Picker */}
          <AnimatePresence>
            {showEmoji && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white rounded-lg shadow-lg p-3 mb-3 flex flex-wrap gap-2"
              >
                {emojis.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => addEmoji(emoji)}
                    className="hover:bg-[#F5E6D3] rounded p-2 text-lg"
                  >
                    {emoji}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Attachment Menu */}
          <AnimatePresence>
            {showAttachMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-white rounded-lg shadow-lg p-3 mb-3 grid grid-cols-4 gap-3"
              >
                {attachmentOptions.map((option) => (
                  <motion.button
                    key={option.label}
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-[#F5E6D3] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-2`}
                      style={{ backgroundColor: option.color }}
                    >
                      <option.icon />
                    </div>
                    <span className="text-xs text-[#2C1810]">
                      {option.label}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAttachMenu(!showAttachMenu)}
              className="p-2 text-[#6C4780] hover:bg-[#F5E6D3] rounded-full transition-colors"
            >
              <FaPaperclip />
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="w-full px-4 py-2 rounded-full border-2 border-[#E3D4C3] focus:border-[#6C4780] focus:outline-none bg-white"
              />
              <button
                onClick={() => setShowEmoji(!showEmoji)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6C4780] hover:text-[#8B5A9B]"
              >
                <FaSmile />
              </button>
            </div>

            {message.trim() ? (
              <motion.button
                onClick={sendMessage}
                className="p-2 bg-[#6C4780] text-white rounded-full hover:bg-[#8B5A9B] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPaperPlane />
              </motion.button>
            ) : (
              <button className="p-2 text-[#6C4780] hover:bg-[#F5E6D3] rounded-full transition-colors">
                <FaMicrophone />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LocalConnectChat;
