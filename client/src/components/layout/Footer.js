import * as React from 'react';

const footer = (props) => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      MERN {new Date().getFullYear()}
    </footer>
  );
}

export default footer;