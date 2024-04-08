import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fiberyLogo from "../assets/fibery-logo.png";
import {
  faArrowLeft,
  faDove,
  faEarthAmericas,
  faLaptop,
  faMountain,
  faOtter,
  faPeopleArrows,
  faPerson,
  faQuestionCircle,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faSmile } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { updateCurrentPage } from "../utils/currentStateSlice";

const EventDetails = () => {
  const dispatch = useDispatch();

  const handleScheduleEvent = () => {
    dispatch(updateCurrentPage("eventScheduledSuccessfully"));
  };

  const handleBackClick = () => {
    dispatch(updateCurrentPage("chooseDateAndTime"));
  };
  return (
    <div className="flex max-[900px]:flex-col">
      <div className="w-1/3 max-[900px]:w-full max-[900px]:h-[450px] border-r-2 border-gray-200 relative">
        <div className="w-full h-36 relative border-b-2">
          <img
            src={fiberyLogo}
            alt="fiber-logo"
            className="w-full h-full object-contain"
          />

          <div
            className="w-26 h-26 p-3 border border-gray-200 rounded-full flex justify-center items-center absolute top-8 left-8 hover:cursor-pointer"
            onClick={handleBackClick}
          >
            <FontAwesomeIcon icon={faArrowLeft} color="blue" />
          </div>
        </div>

        <div className="p-4">
          <p className="font-bold text-3xl">Fibery Demo</p>

          <div className="flex justify-start items-center gap-2 my-4">
            <FontAwesomeIcon icon={faClock} color="gray" />
            <p className="text-gray-400 font-medium text-md">45 min</p>
          </div>

          <div className="flex justify-start items-center gap-2 my-4">
            <FontAwesomeIcon icon={faCalendar} color="gray" />
            <p className="text-gray-400 font-medium text-md">
              09:30 pm - 10:00 pm, Firday, April 5, 2024
            </p>
          </div>

          <div className="flex justify-start items-center gap-2 my-4">
            <FontAwesomeIcon icon={faEarthAmericas} color="gray" />
            <p className="text-gray-400 font-medium text-md">
              Indian Standard Time
            </p>
          </div>

          <p className="text-gray-400 font-medium text-md">
            Book a meeting with a product expert. We&apos;ve helped hundreds of
            companies overcome product management challenges.{" "}
          </p>
        </div>

        {/* Cookies Sesttings text */}
        <p className="text-blue-500 font-normal text-sm absolute bottom-4 left-8">
          Cookie settings
        </p>
      </div>
      <div className="w-2/3 max-[900px]:w-full p-6">
        <p className="font-semibold text-2xl mb-4">Enter Details</p>
        <label htmlFor="name" className="font-semibold text-lg">
          Name *
        </label>
        <input
          type="text"
          id="name"
          className="block border border-gray-400 rounded-md w-2/4 p-2 mt-3 mb-3"
        />

        <label htmlFor="email" className="font-semibold text-lg">
          Email *
        </label>
        <input
          type="email"
          id="email"
          className="block border border-gray-400 rounded-md w-2/4 p-2 mt-3 mb-3"
        />

        <p className="border border-blue-600 px-4 py-2 text-sm text-blue-600 w-28 rounded-3xl mb-3">
          Add Guests
        </p>

        <label htmlFor="reason" className="font-semibold text-lg">
          I want Fibery to work for: *
        </label>
        <div className="flex justify-start items-center gap-3 mb-3 mt-4">
          <input type="checkbox" name="" id="" />
          <FontAwesomeIcon icon={faPerson} />
          <p className="text-gray-800 font-normal text-md">Myself</p>
        </div>

        <div className="flex justify-start items-center gap-3 mb-3">
          <input type="checkbox" name="" id="" />
          <FontAwesomeIcon icon={faPeopleArrows} />
          <p className="text-gray-800 font-normal text-md"> &lt;10 People</p>
        </div>

        <div className="flex justify-start items-center gap-3 mb-3">
          <input type="checkbox" name="" id="" />
          <FontAwesomeIcon icon={faUniversalAccess} />
          <p className="text-gray-800 font-normal text-md"> 10-50 People</p>
        </div>

        <div className="flex justify-start items-center gap-3 mb-3">
          <input type="checkbox" name="" id="" />
          <FontAwesomeIcon icon={faDove} />
          <p className="text-gray-800 font-normal text-md"> 50+ People</p>
        </div>

        <label htmlFor="reason" className="font-semibold text-lg">
          Please, choose up to three options. You are more interested in: *
        </label>
        <div className="flex justify-start items-center gap-3 mb-3 mt-4">
          <input type="checkbox" name="" id="" />
          <FontAwesomeIcon icon={faMountain} />
          <p className="text-gray-800 font-normal text-md">Strategy</p>
        </div>

        <div className="flex justify-start items-center gap-3 mb-3">
          <input type="checkbox" name="" id="" />
          <FontAwesomeIcon icon={faSmile} />
          <p className="text-gray-800 font-normal text-md">
            Product Management
          </p>
        </div>

        <div className="flex justify-start items-center gap-3 mb-3">
          <input type="checkbox" name="" id="" />
          <FontAwesomeIcon icon={faLaptop} />
          <p className="text-gray-800 font-normal text-md">Engineering</p>
        </div>

        <div className="flex justify-start items-center gap-3 mb-3">
          <input type="checkbox" name="" id="" />
          <FontAwesomeIcon icon={faOtter} />
          <p className="text-gray-800 font-normal text-md">
            Feedback Management
          </p>
        </div>

        <div className="flex justify-start items-center gap-3 mb-3">
          <input type="checkbox" name="" id="" />
          <FontAwesomeIcon icon={faQuestionCircle} />
          <p className="text-gray-800 font-normal text-md">Something else</p>
        </div>

        <label htmlFor="meeting-help" className="font-semibold text-lg ">
          Please, share anything that will help prepare for our meeting.
        </label>
        <textarea
          id="meeting-help"
          className="block border border-gray-400 rounded-md mt-3 w-2/4 p-2 mb-4"
        />

        <label htmlFor="meeting-help" className="font-semibold text-lg ">
          Please, share with us the name of your Fibery workspace (if any)
        </label>
        <input
          type="text"
          id="meeting-help"
          className="block border border-gray-400 rounded-md mt-3 w-2/4 h-14 p-2 mb-4"
        />

        <p className="text-gray-600 mb-4 text-sm">
          By proceeding, you confirm that you have read and agree to <br />{" "}
          <span className="text-blue-600 font-semibold">
            Calendly&apos;s Terms of Use
          </span>{" "}
          and{" "}
          <span className="text-blue-600 font-semibold">Privacy Notice</span>.
        </p>

        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-3xl text-white"
          onClick={handleScheduleEvent}
        >
          Schedule Event
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
