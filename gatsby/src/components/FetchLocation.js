import React from 'react';

const position = {};
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    //   );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
export default function FetchLocation() {
  getPosition().then((pos) => {
    position.latitude = pos.coords.latitude;
  });
  console.log(position);
  return (
    <div>
      <h3>Hi! I'm the fetchlocation component</h3>
      <p>Your location is:</p>
      <p>Latitude: {position.latitude}</p>
      <p>Longitude: </p>
    </div>
  );
}
