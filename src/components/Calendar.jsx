import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateCurrentPage } from "../utils/currentStateSlice";

const Calendar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateCurrentPage("chooseDateAndTime"));
  };
  return (
    <div className="p-4">
      {/* Header with navigation arrows */}
      <div className="flex justify-center items-center gap-8 p-3 my-4">
        <FontAwesomeIcon icon={faAngleLeft} size="1x" />
        <p>April 2024</p>
        <FontAwesomeIcon
          icon={faAngleRight}
          size="1x"
          color="blue"
          className="bg-gray-100 p-3 rounded-full"
        />
      </div>

      {/* Days names */}
      <div className="grid grid-cols-7 gap-1 text-center mb-4">
        <p className="text-gray-500 text-sm">Mon</p>
        <p className="text-gray-500 text-sm">Tue</p>
        <p className="text-gray-500 text-sm">Wed</p>
        <p className="text-gray-500 text-sm">Thu</p>
        <p className="text-gray-500 text-sm">Fri</p>
        <p className="text-gray-500 text-sm">Sat</p>
        <p className="text-gray-500 text-sm">Sun</p>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Dummy days for April 2024 (30 days) */}
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="text-center p-2 text-gray-500 rounded-full hover:bg-blue-100 hover:text-blue-700 hover:cursor-pointer"
            onClick={handleClick}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
