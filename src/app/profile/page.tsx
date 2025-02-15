import Header from "@/components/Header/Header";
import Profile from "./Profile";
import { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

// Define metadata for the page
export const metadata: Metadata = {
  title: "John Doe - Software Engineer",
  description: "View the profile of John Doe, a passionate software engineer with expertise in web development and cloud computing.",
  keywords: ["John Doe", "Software Engineer", "Web Development", "Cloud Computing", "Profile"],
  openGraph: {
    title: "John Doe - Software Engineer",
    description: "View the profile of John Doe, a passionate software engineer with expertise in web development and cloud computing.",
    type: "profile",
    images: [
      {
        url: "https://via.placeholder.com/150", // Replace with the actual profile photo URL
        width: 150,
        height: 150,
        alt: "John Doe Profile Photo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "John Doe - Software Engineer",
    description: "View the profile of John Doe, a passionate software engineer with expertise in web development and cloud computing.",
    images: ["https://via.placeholder.com/150"], // Replace with the actual profile photo URL
  },
};

const UserProfilePage = () => {
  const user = {
    name: "John Doe",
    title: "Software Engineer",
    profilePhoto: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=is&k=20&c=PJjJWl0njGyow3AefY7KVNuhkbw5r2skqFiCFM5kyic=", // Replace with actual image URL
    number: "+1234567890",
    email: "john.doe@example.com",
    skype: "john.doe",
    website: "https://johndoe.com",
    facebook: "https://facebook.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    pinterest: "https://pinterest.com/johndoe",
    description: "I am a passionate software engineer with expertise in web development and cloud computing.",
  };

  return (
    <div>
      <Header></Header>
      <div className="container mx-auto p-4">
      <Profile user={user} />

      </div>
      <Footer></Footer>
    </div>
  );
};

export default UserProfilePage;
