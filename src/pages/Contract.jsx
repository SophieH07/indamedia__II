import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contract = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function getDetails() {
    setShowDetails(!showDetails);
    setIsAccepted(false);
  }

  function getAccepted() {
    setIsAccepted(!isAccepted);
    setShowDetails(false);
  }

  return (
    <div className="text-center font-medium text-xl">
      <div>
        <p>Let's pretend there is a contract.</p>
        <p>Please accept the terms of using this webpage.</p>
        <p>If you want to know more about the contract, click on "Részletek"</p>
      </div>
      <div>
        <button className=" py-2 px-3 m-4" onClick={getAccepted}>
          OK
        </button>
        <button className=" py-2 px-3 m-4">
          <Link to="/">Mégse</Link>
        </button>
        <button className=" py-2 px-3 m-4" onClick={getDetails}>
          Részletek
        </button>
      </div>
      {showDetails ? (
        <div>
          <p>
            Now you can read more about the contract, but since this is fake,
            there is nothing to read.
          </p>
        </div>
      ) : (
        ""
      )}
      {isAccepted ? (
        <div>
          <p>Thank you for accepting the terms!</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contract;
