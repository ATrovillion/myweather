import React from 'react';
import useForm from '../utils/useForm';
import FetchLocation from './FetchLocation';

export default function LocationForm() {
  const { values, updateValues } = useForm({
    zipcode: '',
    lattitude: '',
    longitude: '',
  });
  console.log(values);
  return (
    <>
      <form>
        <fieldset className="zipcode">
          <legend>Zip Code</legend>
          <label htmlFor="zipcode">
            Enter the zip code for the place whose weather you want to see.
            <input type="number" name="zipcode" value={values.zipcode} />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
        <fieldset className="coordinates">
          <legend>Coordinates</legend>
          Enter the lattitude and longitude for the location.
          <label htmlFor="lattitude">
            <input
              type="number"
              name="lattitude"
              value={values.lattitude}
              placeholder="Lattitude"
            />
          </label>
          <label htmlFor="longitude">
            <input
              type="number"
              name="longitude"
              value={values.longitude}
              placeholder="Longitude"
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <FetchLocation />
    </>
  );
}
