import React, { useContext } from "react";
import { AppContext } from "../context/dataProvider";
import { Loader } from "../loader/loader";
import Room from "./Room";

const Rooms = () => {
  const value = useContext(AppContext);
  const rooms = value.rooms;
  const loading = value.loading
  const setLoading = value.setLoading
  const total = value.total

  return (
    <section className="py-24">
      {loading ? 
      <Loader/>
      :
      <div className="container mx-auto lg:px-0">
        <div className="text-center mt-2">
        <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
          Hotel Gurevich
        </div>
        <h2 className="font-primary text-[45px] mb-8">Room & Suites</h2>
        </div>

        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] 
        lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })}
        </div>
      </div>
      }
    </section>
  );
};

export default Rooms;
