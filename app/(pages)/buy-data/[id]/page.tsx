'use client'
import { useState } from "react";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    occupation: "",
    dob: "",
    location: "",
    idType: "",
    idNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Data:", formData);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Registration Page</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Attention Section */}
        <div className="bg-blue-100 p-4 border border-blue-200 rounded">
          <h2 className="text-lg font-semibold text-blue-800">Attention Please!</h2>
          <p className="text-blue-700 mt-2">
            The Registration Fee is GH¢ 8.00 and will be deducted from your available wallet balance.
          </p>
        </div>

        {/* Disclaimer Section */}
        <div className="bg-blue-100 p-4 border border-blue-200 rounded">
          <h2 className="text-lg font-semibold text-blue-800">Disclaimer!</h2>
          <p className="text-blue-700 mt-2">
            Your information will only be used to serve you better in our system and will{" "}
            <strong>NOT BE SHARED, OR ADVERTISED</strong> to any third party.
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded border border-gray-200 shadow">
        <h2 className="text-lg font-semibold mb-4">Enter Your Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Beneficiary Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Recipient Phone Number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Occupation"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ID Type</label>
            <select
              name="idType"
              value={formData.idType}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">- Select -</option>
              <option value="National ID">National ID</option>
              <option value="Passport">Passport</option>
              <option value="Driver&apos;s License">Driver&apos;s License</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">ID Number</label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter ID Number"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
}
