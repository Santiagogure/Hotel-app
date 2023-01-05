import React, { createContext, useEffect, useState } from "react";
import { roomData } from "../data/data";

export const AppContext = createContext();

export default function DataProvider({ children }) {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 adult");
  const [kids, setKids] = useState("0 kids");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true)
    console.log(total);
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false)
    }, 1200);
    
  };
  console.log(rooms);

  const value = {
    rooms,
    setRooms,
    adults,
    setAdults,
    kids,
    setKids,
    total,
    setTotal,
    handleClick,
    loading, 
    setLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
