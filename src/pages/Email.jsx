import React, { useState, useEffect } from "react";

const Email = () => {
  const [data, SetData] = useState(null);

  useEffect(() => {
    const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://rapidapi.com/guides/api/rest";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", corsAnywhereUrl + targetUrl, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = JSON.parse(xhr.responseText);
        SetData(jsonData.data);
        console.log(xhr.responseText);
      }
    };

    xhr.send();

    return () => {
      xhr.abort();
    };
  }, []);

  return (
    <div className="text-center font-medium h-full">
      <p className="text-xl pb-2">XHR GET Request Example</p>
      {data ? (
        <div>
          <p>Data Received:</p>
          <ul className="flex flex-wrap justify-center">
            {data.map((person) => (
              <li
                key={person.id}
                className="block m-3 p-6 bg-sky-300 rounded-lg dark:text-white dark:bg-gray-800 dark:border-gray-700"
              >
                <p>First Name: {person.first_name}</p>
                <p>Last Name: {person.last_name}</p>
                <p>Email: {person.email}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="pt-10">Loading...</p>
      )}
    </div>
  );
};

export default Email;
