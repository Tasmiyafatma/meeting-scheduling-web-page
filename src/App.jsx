import { useState } from "react";
import bgImage from "./assets/fibery-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ChooseDate from "./components/ChooseDate";
import { useDispatch, useSelector } from "react-redux";
import EventDetails from "./components/EventDetails";
import ScheduledEvent from "./components/ScheduledEvent";
import { updateCurrentPage } from "./utils/currentStateSlice";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(!isOpen);

    dispatch(updateCurrentPage("chooseDate"));
  };

  const currentState = useSelector((store) => store?.currentState?.currentPgae);

  return (
    <div className="w-full h-full">
      {/* Image with onClick event to open modal */}
      <img
        src={bgImage}
        alt="bg-image"
        className="w-full h-full object-contain hover:cursor-pointer"
        onClick={toggleModal}
      />

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-800 bg-opacity-50">
          {/* For closing popup modal */}
          <div className="w-full h-10 flex justify-end items-center absolute top-0 p-6 hover:cursor-pointer">
            <FontAwesomeIcon icon={faTimes} size="2x" color="white" onClick={toggleModal} />
          </div>
          <div className="bg-white rounded-lg w-[65%] h-[54%] overflow-y-auto">

            {/* Intially displaying Choose Date page */}
            { (currentState === 'chooseDate' || currentState === 'chooseDateAndTime') && <ChooseDate /> }
            
            { currentState === 'fillEventDetails' && <EventDetails /> }

            { currentState === 'eventScheduledSuccessfully' && <ScheduledEvent /> } 
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
