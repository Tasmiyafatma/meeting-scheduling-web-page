import { useDispatch } from "react-redux";
import { updateCurrentPage } from "../utils/currentStateSlice";

const Time = () => {

  const dispatch = useDispatch();

  const availableTimes = [
    "09:00 am",
    "09:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "1:00 pm",
    "1:30 pm",
    "2:00 pm",
    "2:30 pm",
    "3:00 pm",
    "3:30 pm",
    "4:00 pm",
    "4:30 pm",
    "5:00 pm",
    "5:30 pm",
    "6:00 pm",
    "6:30 pm",
    "7:00 pm",
    "7:30 pm",
    "8:00 pm",
    "8:30 pm",
    "9:00 pm",
  ];

  const handleNextClick = () => {
    dispatch(updateCurrentPage('fillEventDetails'));
  }

  return (
    <div className="pt-10">
      <p className="text-center">Friday, April 5</p>
      <div className="w-full h-80 mt-4 p-3 overflow-y-auto">
        {availableTimes.map((item, index) => (
          <div
            key={index}
            className="w-full border-2 border-blue-400 rounded-sm px-2 py-3 mt-2 hover:border-blue-600 hover:cursor-pointer"
          >
            <p className="text-center text-blue-600">{item}</p>
          </div>
        ))}
        <div className="w-full flex gap-2 mt-2">
          <div className="flex-1 flex justify-center items-center bg-gray-500 px-2 py-1 rounded-sm">
            <p className="text-center text-white text-sm">9:30 pm</p>
          </div>
          <div className="flex-1 flex justify-center items-center bg-blue-600 px-2 py-3 rounded-sm hover:cursor-pointer" onClick={handleNextClick}>
            <p className="text-center text-white text-sm" >Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
