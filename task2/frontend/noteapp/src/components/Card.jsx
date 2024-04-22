import React from 'react';

const Card = ({id, text, date, onDelete}) => {

  function deleteHandler(){
    onDelete(id)
  }
  
  return (
    <div className=" max-w-xs max-h-max mx-4 bg-white shadow-md rounded-lg  m-4 flex- ">

      <div className="p-4">
        <p className="text-lg font-bold text-gray-800 whitespace-normal ">{text}</p>
        <p className="text-gray-600 mt-2">{date}</p>
      </div>
      <div className="flex justify-end p-4">
        <button onClick={deleteHandler} className="text-red-500 hover:text-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;