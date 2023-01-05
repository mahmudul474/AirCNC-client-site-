import React, { useState } from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import { CalendarIcon } from '@heroicons/react/20/solid'
import DatePicker from 'react-datepicker'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  
 const [location, setLocation] = useState("Dhaka");
 const [curentdate, setCurenDate] = useState(new Date());
 const [nexDate, setNextDate] = useState(new Date(curentdate.getTime() +24*60*60*10000 ));

 const naveigate=useNavigate()
 const handleSearch = (event) => {

   event.preventDefault();

   const query = {
     location: location,
     curentdate: curentdate,
     nexdate: nexDate
   };
  


   naveigate("/seach-results", { state: query });
  
  
console.log(query)
  
  
  };




  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto">
      <h1 className="text-xl font-semibold text-gray-700">
        Where do you want to go
      </h1>

      <form onSubmit={handleSearch} className="mt-6">
        <div className="shadow-md rounded-md my-2 p-3">
          <label
            htmlFor="location"
            className="block text-md font-bold text-gray-800"
          >
            Location
          </label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            type="text"
            name="location"
            required
            placeholder="Add city, Landmark or address"
            className="block w-full mt-1 p-1 text-gray-700 bg-white   focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="flex justify-between">
          <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
            <div>
              <p className="block text-sm text-gray-500">Arrival</p>
              <DatePicker
                selected={curentdate}
                onChange={(date) => setCurenDate(date)}
                className="w-2/3"
              />
            </div>

            <CalendarIcon className="h5 w-5" />
          </div>
          <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
            <div>
              <p className="block text-sm text-gray-500">Departure</p>
              <DatePicker
                selected={nexDate}
                onChange={(date) => setNextDate(date)}
                className="w-2/3"
              />
            </div>

            <CalendarIcon className="h5 w-5" />
          </div>
        </div>

        <div className="mt-6">
          <PrimaryButton
            type="submit"
            classes="w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md"
          >
            Search
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}

export default SearchForm
