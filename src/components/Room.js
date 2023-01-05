import React from "react";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
  return (
    <div className="flex items-center justify-center">
    <div className="bg-white shadow-2x1 min-h-[500px] group w-[300px] lg:w-full">
      <div className="overflow-hidden">
        <Link to={`/room/${room.id}`}>
          <img
            className="group-hover:scale-110 transition-all duration-300 w-full"
            src={room.image}
            alt={room.name}
          ></img>
        </Link>
      </div>
      <div
        className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px]
         -translate-y-1/2 flex justify-center items-center uppercase
         font-tertiary tracking-[1px] font-semibold text-base       
         "
      >
        <div className="flex justify-between items-center w-[80%]">
          <div>
            <div className="flex items-center  gap-x-2 cursor-pointer">
              <div className="text-black">
                <Link to={`/room/${room.id}`}>
                  <i class="fa-solid fa-compress"></i>
                </Link>
              </div>
              <div className="flex gap-x-1">
                <div>Size</div>
                <div>{room.size}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center  gap-x-2 cursor-pointer">
            <div className="text-black">
              <i
                className="flex items-center text-[18px]"
                class="fa-solid fa-person"
              ></i>
            </div>
            <div className="flex gap-x-1">
              <div>People</div>
              <div>{room.maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to={`/room/${room.id}`}>
          <h3 className="h3">{room.name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb65">
          {room.description.slice(0, 56)}
        </p>
      </div>
      <Link
        to={`/room/${room.id}`}
        className="btn btn-secondary 
         btn-sm max-w-[250px]
         h-[70px] mx-auto
         hover:bg-white hover:text-black shadow-xl
         "
      >
        Book now for ${room.price}
      </Link>
    </div>
    </div>
  );
};

export default Room;
