"use client";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaSkype, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaGlobe, FaEye, FaEyeSlash, FaCheck, FaTimes, FaUser } from "react-icons/fa";
import "./styles.css"; // Custom CSS import

const ProfileSetting = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    number: "",
    email: "",
    skype: "",
    website: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    pinterest: "",
    description: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const [profilePhoto, setProfilePhoto] = useState<string | null>(null); // State for profile photo

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = (field: keyof typeof showPassword) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const validatePassword = (password: string) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasLetter && hasNumber && hasSpecialChar;
  };

  const isPasswordMatch = formData.newPassword === formData.confirmNewPassword;
  const isPasswordValid = validatePassword(formData.newPassword);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPasswordMatch) {
      alert("New password and confirm new password do not match!");
      return;
    }

    if (!isPasswordValid) {
      alert("Password must contain at least one letter, one number, and one special character!");
      return;
    }

    // Simulate form submission
    console.log("Profile Updated:", formData, { profilePhoto });
    alert("Profile updated successfully!");
  };

  return (
    <form
      className="formContainer p-6 space-y-8 rounded-lg shadow-lg mx-4 ml-2 mr-2"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold mb-4 text-center">Profile Settings</h1>

      {/* Personal Details */}
      <div>
        <label className="formHeading">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="formInput mb-3"
          placeholder="Enter your name"
        />
        <label className="formHeading mt-4">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="formInput"
          placeholder="Enter your title"
        />
      </div>

      {/* Profile Photo Upload */}
      <div>
        <label className="formHeading">Profile Photo</label>
        <div className="flex items-center space-x-4">
          <div className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <FaUser className="text-gray-400 size-8" />
            )}
          </div>
          <input
            type="file"
            id="profilePhoto"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
          <label
            htmlFor="profilePhoto"
            className="submitButton cursor-pointer text-center"
          >
            Upload Photo
          </label>
        </div>
      </div>

      {/* Contact Details */}
      <div>
        <h2 className="formHeading">Contact Information</h2>
        <div className="formGrid md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaPhone className="mr-2 text-black size-6" />
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              className="formInput flex-1 appearance-none"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-black size-6" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="formInput flex-1"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center">
            <FaSkype className="mr-2 text-black size-6" />
            <input
              type="text"
              name="skype"
              value={formData.skype}
              onChange={handleInputChange}
              className="formInput flex-1"
              placeholder="Skype Link"
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="formHeading">Social Media Links</h2>
        <div className="formGrid md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaFacebook className="mr-2 text-black size-6" />
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleInputChange}
              className="formInput flex-1"
              placeholder="Facebook Link"
            />
          </div>
          <div className="flex items-center">
            <FaTwitter className="mr-2 text-black size-6" />
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleInputChange}
              className="formInput flex-1"
              placeholder="Twitter Link"
            />
          </div>
          <div className="flex items-center">
            <FaLinkedin className="mr-2 text-black size-6" />
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              className="formInput flex-1"
              placeholder="LinkedIn Link"
            />
          </div>
          <div className="flex items-center">
            <FaPinterest className="mr-2 text-black size-6" />
            <input
              type="text"
              name="pinterest"
              value={formData.pinterest}
              onChange={handleInputChange}
              className="formInput flex-1"
              placeholder="Pinterest Link"
            />
          </div>
          <div className="flex items-center">
            <FaGlobe className="mr-2 text-black size-6" />
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="formInput flex-1"
              placeholder="Website"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="formHeading">About Me</h2>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="formInput"
          rows={5}
          placeholder="Enter your description"
        />
      </div>

      {/* Password Change Section */}
      <div>
        <h2 className="formHeading">Change Password</h2>
        <div className="formGrid md:grid-cols-2 gap-4">
          {/* Current Password */}
          <div className="flex items-center relative">
            <input
              type={showPassword.currentPassword ? "text" : "password"}
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              className="formInput flex-1 pr-10"
              placeholder="Current Password"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("currentPassword")}
              className="absolute right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword.currentPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* New Password */}
          <div className="flex items-center relative">
            <input
              type={showPassword.newPassword ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="formInput flex-1 pr-10"
              placeholder="New Password"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("newPassword")}
              className="absolute right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword.newPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm New Password */}
          <div className="flex items-center relative">
            <input
              type={showPassword.confirmNewPassword ? "text" : "password"}
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleInputChange}
              className="formInput flex-1 pr-10"
              placeholder="Confirm New Password"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmNewPassword")}
              className="absolute right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword.confirmNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Password Match Validation */}
        {formData.newPassword && formData.confirmNewPassword && (
          <div className="mt-2 flex items-center">
            {isPasswordMatch ? (
              <span className="text-green-500 flex items-center">
                <FaCheck className="mr-1" /> Password Matched
              </span>
            ) : (
              <span className="text-red-500 flex items-center">
                <FaTimes className="mr-1" /> Password Not Matched
              </span>
            )}
          </div>
        )}

        {/* Password Strength Criteria */}
        {formData.newPassword && (
          <div className="mt-2">
            <p className="text-sm">Password must contain:</p>
            <ul className="text-sm list-disc list-inside">
              <li className={/[a-zA-Z]/.test(formData.newPassword) ? "text-green-500" : "text-red-500"}>
                At least one letter
              </li>
              <li className={/\d/.test(formData.newPassword) ? "text-green-500" : "text-red-500"}>
                At least one number
              </li>
              <li className={/[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword) ? "text-green-500" : "text-red-500"}>
                At least one special character
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" className="submitButton">
        Update Profile
      </button>
    </form>
  );
};

export default ProfileSetting;