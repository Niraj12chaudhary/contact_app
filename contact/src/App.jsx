import Navbar from "./components/Navbar";

import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsCollection = collection;
      } catch (error) {}
    };
    getContacts();
  }, []);

  return (
    <div className=" max-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className=" relative  flex  flex-grow items-center">
          <FiSearch className="text-3xl text-white absolute ml-1 " />
          <input
            type="text"
            className=" h-10  flext-grow  rounded-md border  border-white bg-transparent pl-9 text-white "
          />
        </div>

        <AiFillPlusCircle className="text-5xl cursor-pointer text-white" />
      </div>
    </div>
  );
};
// ghjrirtgr0tgrtrtrij
export default App;
