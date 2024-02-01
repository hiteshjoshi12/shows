import React, { useState } from "react";

const BookingForm = ({ movieName, onSubmit, movieimg }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Saving user details to local storage
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);

    onSubmit();
  };

  return (
    <div className="flex flex-col bg-white p-4 rounded-md w-full sm:w-4/5 md:flex-row md:w-1/2">
      <img
        className="rounded-lg aspect-[3/2] object-contain mx-10 sm:w-1/2 md:mr-4 md:mb-0 md:w-1/3 lg:w-1/4"
        src={movieimg}
        alt=""
      />

      <form className="w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Book Movie Ticket</h2>
          <i
            onClick={handleFormSubmit}
            className="rounded-lg px-2 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300 mx-4 ri-close-fill cursor-pointer"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">
            Movie Name:
          </label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={movieName}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
