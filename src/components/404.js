import React from 'react';

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex align-middle justify-center bg-primary-light">
      <div className="flex justify-center items-center gap-8">
        <div className="pr-8 py-4 border-r-2 text-3xl border-gray-300 font-bold text-gray-200">
          404
        </div>
        <div className="font-semibold text-lg text-gray-400">
          This page could not be found.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
