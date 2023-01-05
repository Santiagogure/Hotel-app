import React, { useContext } from "react";
import { AppContext } from "../context/dataProvider";
import AdultsDropdown from "./AdultsDropdown";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import KidsDropdown from "./KidsDropdown";

const BookForm = () => {
  const value = useContext(AppContext);
  const handleClick = value.handleClick;

  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r cursor-pointer ">
          <CheckIn />
        </div>
        <div className="flex-1 border-r cursor-pointer">
          <CheckOut />
        </div>
        <div className="flex-1 border-r cursor-pointer">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border-r cursor-pointer">
          <KidsDropdown />
        </div>
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-secondary text-white hover:bg-slate-50 hover:text-black"
        >
          Search now
        </button>
      </div>
    </form>
  );
};

export default BookForm;
