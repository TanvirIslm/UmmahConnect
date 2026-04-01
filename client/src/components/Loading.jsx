import React from 'react';

const Loading = ({ height = '100vh' }) => {
  return (
    <div
      style={{ height }}
      className="flex items-center justify-center w-full"
    >
      <div
        className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"
        role="status"
        // aria-label="loading"
      />
    </div>
  );
};

export default Loading;