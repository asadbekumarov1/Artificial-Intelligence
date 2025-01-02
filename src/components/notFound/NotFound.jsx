import React from "react";
import Notfound from "../../assets/img/notFound/404.avif";
const NotFound = () => {
  return (
    <div>
      <div>
        <main>
          <img className="w-full h-[550px]" src={Notfound} alt="" />
        </main>
      </div>
    </div>
  );
};

export default NotFound;
