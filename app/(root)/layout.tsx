import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root">
      <div className="root-container">
        <div className="wrapper">asdfsdfasdf{children}</div>
      </div>
    </div>
  );
};

export default layout;
