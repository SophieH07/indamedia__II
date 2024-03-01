import React, { useState, useEffect } from "react";

const Email = () => {
  const [data, SetData] = useState(null);
  const [accessGranted, setAccessGranted] = useState(false);

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
        // console.log(xhr.responseText);
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
      {!accessGranted ? (
        <div>
          <p>
            First, because of CORS, to get the example, you have the request
            temporary access to the demo server. Please visit this link
          </p>
          <p
            className="cursor-pointer hover:underline"
            onClick={() => setAccessGranted(true)}
          >
            <a
              href="https://cors-anywhere.herokuapp.com/corsdemo"
              target="_blank"
            >
              Access request for demo server
            </a>
          </p>
          <p>then refresh the page and you will see the data.</p>
        </div>
      ) : (
        <div>
          {data ? (
            <div>
              <p>Data Received:</p>
              <ul className="flex flex-wrap justify-center">
                {data.map((person) => (
                  <li
                    key={person.id}
                    className="block m-3 p-6 bg-sky-300 rounded-lg dark:bg-sky-800"
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
      )}
    </div>
  );
};

export default Email;
