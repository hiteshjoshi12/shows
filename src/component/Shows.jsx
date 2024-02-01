import React, { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

const Shows = () => {
  const [apidata, setApiData] = useState([]);

  const getDetails = async () => {
    try {
      const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const response = await data.json();
      console.log(response);
      setApiData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center m-4 p-10">
      {apidata.map((demo) => (
        <ShowCard key={demo?.show?.id} {...demo.show} />
      ))}
    </div>
  );
};

export default Shows;
