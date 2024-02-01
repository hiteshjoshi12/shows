import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm"; // Import the BookingForm component

function removeHtmlTags(htmlString) {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
}

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        // Remove HTML tags from the summary
        data.summary = removeHtmlTags(data.summary);
        setShowDetails(data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  const handleBookTicket = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {showDetails ? (
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-col md:flex-row items-center">
            {showDetails.image && showDetails.image.medium && (
              <img
                className="rounded-lg mb-4 md:mr-4 md:mb-0"
                src={showDetails.image.medium}
                alt={`Poster for ${showDetails.name}`}
              />
            )}

            <div>
              <h1 className="text-xl font-semibold mb-2">
                Name: {showDetails.name}
              </h1>
              <p>{showDetails.summary}</p>
              <button
                onClick={handleBookTicket}
                className="rounded-lg mt-4 px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
              >
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Form for Booking */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <BookingForm
            movieName={showDetails ? showDetails.name : ""}
            onSubmit={handleFormClose}
          />
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
