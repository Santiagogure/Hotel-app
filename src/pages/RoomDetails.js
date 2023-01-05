import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/dataProvider";
import { useParams } from "react-router";
import AdultsDropdown from "../components/AdultsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import KidsDropdown from "../components/KidsDropdown";
import ScrollToTop from "../components/ScrollToTop";
import { FaCheck } from "react-icons/fa";

export const RoomDetails = () => {
  const value = useContext(AppContext);
  const rooms = value.rooms;
  const params = useParams();

  const room = rooms.find((room) => {
    return room.id === Number(params.id);
  });

  const { name, description, facilities, imageLg, price } = room;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  return (
    <section className="">
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary ">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full lg:w-[60%] px-10">
           <h2 className="h2">{name}</h2>
           <p className="mb-8">{description}</p>
           <img src={imageLg} alt=""></img>
           <div className="mt-12">
             <h3 className="text-3xl mb-3">Room Facilities</h3>
             <p className="mb-12"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="grid grid-cols-2 gap-6 mb-12 content-center">
              {facilities.map((item, index) => {
                const {name, icon} = item
                return ( 
                  <div className="flex items-center justify-center gap-x-4 flex-1" key={index}>
                  <div className="text-3xl ">{icon}</div>
                  <div className="text-base">{name}</div>
                </div>
                )
              })}
            </div>
           </div>
          </div>
          <div className="w-full h-full lg:w-[40%] ">
            <div className="py-8 px-6 shadow-2xl mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3 className="text-3xl">Your reservation</h3>
                <div className="h-[60px]">
                  <CheckIn/>
                </div>
                <div className="h-[60px]">
                  <CheckOut/>
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown/>
                </div>
                <div className="h-[60px]">
                  <KidsDropdown/>
                </div>
                <button className="btn btn-secondary btn-sm max-w-[200px]  mx-auto hover:bg-white hover:text-black hover:border-2">
                  Book now for ${price}
                </button>
              </div>
            </div>
            <div>
              <h3 className="h3">Hotel rules</h3>
              <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
              <li className="flex items-center gap-x-4">
                <FaCheck  />
                Check-in: 4:00 PM - 9:00 pm
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck  />
                Check-out: 4:00 PM - 9:00 pm
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck  />
                No pets
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck  />
                No smoking
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck  />
                Disturbing other guests
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
