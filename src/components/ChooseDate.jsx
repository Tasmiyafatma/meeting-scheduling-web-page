import fiberyLogo from "../assets/fibery-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import Calendar from "./Calendar";
import {
  faCaretDown,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import Time from "./Time";
import { useSelector } from "react-redux";

const ChooseDate = () => {
  const currentState = useSelector((store) => store?.currentState?.currentPgae);
  return (
    <div className="flex max-[900px]:flex-col">
      <div className="flex-1 border-r-2 border-gray-200">
        <div className="flex flex-col">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={fiberyLogo}
              alt="fibery-logo"
              className="w-[180px] h-[180px]"
            />
          </div>
          <div className="flex-auto h-[350px] max-[900px]:h-[230px] border-t-2 border-gray-200 p-4 relative">
            <p className="font-bold text-3xl">Fibery Demo</p>
            <div className="flex justify-start items-center gap-2 my-4">
              <FontAwesomeIcon icon={faClock} color="gray" />
              <p className="text-gray-400 font-medium text-md">45 min</p>
            </div>
            <p className="text-gray-600 font-normal text-md">
              Book a meeting with a product expert. We&apos;ve helped hundreds
              of companies overcome product management challenges.
            </p>
            {/* Cookies Sesttings text */}
            <p className="text-blue-500 font-normal text-sm absolute bottom-2 left-8">
              Cookie settings
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-8">
        <p className="font-bold text-2xl">Select a Date & Time</p>

        {/* Default choose date option will come */}
        {currentState === "chooseDate" ? (
          <Calendar />
        ) : (
          <div className="flex">
            {/* Choose date with time option */}
            <div className="w-2/3">
              <Calendar />
            </div>
            <div className="w-1/3">
              <Time />
            </div>
          </div>
        )}

        <p className="font-bold text-md">Time zone</p>
        <div className="flex justify-start items-center gap-3 my-3">
          <FontAwesomeIcon icon={faEarthAmericas} />
          <p>Indian Standard Time (8:04pm)</p>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
};

export default ChooseDate;
