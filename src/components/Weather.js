import React, { useEffect, useState } from "react";

const key = "6c038ec79fd04e26ac2da7836648f8d7";

function Weather() {
  const [temp, setTemp] = useState(null);
  const [coords, setCoords] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => setCoords(coords));
  }, []);

  useEffect(() => {
    if (!coords) {
      return;
    }
    console.log(coords)
    fetch(
      `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${coords.latitude}&lon=${coords.longitude}`
    )
      .then((res) => res.json())
      .then((data) => setTemp(data?.data[0].temp));
  }, [coords]);
  return (
    <div className="flex flex-col bg-blue-50 items-center justify-center h-screen w-screen">
      <div className="font-bold text-2xl uppercase text-gray-400">Weather</div>
      <div className="font-bold text-5xl mt-3">
        {temp === null ? "n/a" : temp}&deg;
      </div>
    </div>
  );
}

export default Weather;
