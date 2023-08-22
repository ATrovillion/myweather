import React from 'react';

import WeatherData from '../components/WeatherData';
import LocationForm from '../components/LocationForm';

const HomePage = () => (
  <>
    <p>My Weather Home Page</p>
    <LocationForm />
  </>
);

export default HomePage;

export const Head = () => <title>My Weather</title>;
