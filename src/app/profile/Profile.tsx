import { FaPhone, FaEnvelope, FaSkype, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaGlobe } from "react-icons/fa";
import SubscriptionDetails from "./SubscriptionDetails"; // Import the new component

interface ProfileProps {
  user: {
    name: string;
    title: string;
    profilePhoto?: string; // URL or base64 string
    number?: string;
    email?: string;
    skype?: string;
    website?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    pinterest?: string;
    description?: string;
  };
}

const Profile = ({ user }: ProfileProps) => {
  // Hardcode the selected plan for design purposes
  const selectedPlan = {
    id: 2, // Premium plan
    name: "Premium",
    price: "$19.99/month",
    features: [
      "Unlimited Searches",
      "Priority Support",
      "No Ads",
      "Exclusive Listings",
    ],
    ribbon: "Popular",
    bgColor: "bg-white/30",
    textColor: "text-blue-900",
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-2xl space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">User Profile</h1>

      {/* Profile Photo and Basic Info */}
      <div className="flex flex-col items-center space-y-6">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          {user.profilePhoto ? (
            <img
              src={user.profilePhoto}
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-4xl">👤</span>
            </div>
          )}
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-xl text-gray-600">{user.title}</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {user.number && (
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <FaPhone className="text-gray-600 text-2xl" />
              <span className="text-gray-700">{user.number}</span>
            </div>
          )}
          {user.email && (
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <FaEnvelope className="text-gray-600 text-2xl" />
              <span className="text-gray-700">{user.email}</span>
            </div>
          )}
          {user.skype && (
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <FaSkype className="text-gray-600 text-2xl" />
              <span className="text-gray-700">{user.skype}</span>
            </div>
          )}
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Social Media Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {user.facebook && (
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <FaFacebook className="text-blue-600 text-2xl" />
              <a href={user.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Facebook
              </a>
            </div>
          )}
          {user.twitter && (
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <FaTwitter className="text-blue-400 text-2xl" />
              <a href={user.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Twitter
              </a>
            </div>
          )}
          {user.linkedin && (
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <FaLinkedin className="text-blue-700 text-2xl" />
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                LinkedIn
              </a>
            </div>
          )}
          {user.pinterest && (
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <FaPinterest className="text-red-600 text-2xl" />
              <a href={user.pinterest} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                Pinterest
              </a>
            </div>
          )}
          {user.website && (
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <FaGlobe className="text-green-600 text-2xl" />
              <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                Website
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      {user.description && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-700 bg-white p-6 rounded-lg shadow-sm">{user.description}</p>
        </div>
      )}

      {/* Subscription Details */}
      <SubscriptionDetails selectedPlan={selectedPlan} />
    </div>
  );
};

export default Profile;
