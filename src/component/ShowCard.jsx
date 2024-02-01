import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ShowCard = ({ id, name, image, rating, genres, premiered }) => {
  
  const navigate = useNavigate();

  const handleSummaryClick = () => {
    // Use navigate to change the route
    navigate(`/show/${id}`);
  };
  return (
    <Card className="border flex flex-col justify-center h-full p-8">
      {image && image.medium && (
        <Card.Img
          className="rounded-lg mb-3"
          src={image.medium}
          alt={`Poster for ${name}`}
        />
      )}
      <Card.Body>
        <h1 className="text-xl font-semibold mb-2">{name}</h1>
        {rating && rating.average && (
          <h4 className="text-gray-600">Rating: {rating.average} ⭐</h4>
        )}
        <p className="text-gray-700"> Premiered: {premiered || "N/A"}</p>

        <p className="text-gray-700 mb-2">
          Genres: {genres && genres.length > 0 && genres.join(", ")}
        </p>

        <Button
        onClick={handleSummaryClick}
        className="rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
      >
        Summary
      </Button>
      </Card.Body>
    </Card>
  );
};

export default ShowCard;
