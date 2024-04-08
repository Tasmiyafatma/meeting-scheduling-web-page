import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImage from "../assets/profile-image.jpg";
import {
  faCalendar,
  faCheckCircle,
  faEarthAmericas,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import googleLogo from "../assets/google-icon.svg";
import microsoftLogo from "../assets/microsoft-icon.svg";

const ScheduledEvent = () => {
  return (
    <div className="p-8 relative">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <div className="w-24 h-24 flex justify-center items-center rounded-full">
          <img
            src={profileImage}
            alt="profile-image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex justify-center items-center gap-3">
          <FontAwesomeIcon icon={faCheckCircle} size="2x" color="green" />
          <p className="font-bold text-3xl">You are scheduled</p>
        </div>

        <p className="font-normal text-gray-700 text-md">
          A calendar invitation has been sent to your email address.
        </p>

        <div className="w-[500px] border-2 border-gray-200 rounded-md p-4">
          <p className="font-bold text-xl">Fibery Demo</p>
          <div className="flex justify-start items-center gap-3 mt-3">
            <FontAwesomeIcon icon={faUser} color="gray" />
            <p className="text-gray-400 font-medium text-md">Tasmiya</p>
          </div>
          <div className="flex justify-start items-center gap-3 mt-3">
            <FontAwesomeIcon icon={faCalendar} color="gray" />
            <p className="text-gray-400 font-medium text-md">
              09:30 pm - 10:00 pm, Firday, April 5, 2024
            </p>
          </div>
          <div className="flex justify-start items-center gap-3 mt-3">
            <FontAwesomeIcon icon={faEarthAmericas} color="gray" />
            <p className="text-gray-400 font-medium text-md">
              Indian Standard Time
            </p>
          </div>
          <div className="flex justify-start items-center gap-3 mt-3">
            <FontAwesomeIcon icon={faEarthAmericas} color="gray" />
            <p className="text-gray-400 font-medium text-md">
              Web Conferencing details to follow
            </p>
          </div>
        </div>

        <div className="border-t-2 border-gray-200 h-2 my-2 w-[500px]"></div>

        <div className="w-[500px]">
          <p className="font-bold">
            Schedule your own meetings with Calendly for free
          </p>
        </div>
        <div className="w-[500px]">
          <p className="font-normal">
            Eliminate the back-and-forth emails for finding time.
          </p>
        </div>

        <div className="w-[500px] flex gap-2">
          <div className="flex-1 flex justify-center items-center gap-2 border-2 border-gray-800 rounded-full py-2 hover:cursor-pointer">
            <img src={googleLogo} alt="google-logo" className="w-8" />
            <p className="text-sm font-medium">Sign up with Google</p>
          </div>
          <div className="flex-1 flex justify-center items-center gap-2 border-2 border-gray-800 rounded-full py-2 hover:cursor-pointer">
            <img src={microsoftLogo} alt="microsoft-logo" className="w-8" />
            <p className="text-sm font-medium">Sign up with Microsoft</p>
          </div>
        </div>

        <p className="text-blue-600 mt-4 hover:cursor-pointer">Sign up with work email</p>
      </div>

      {/* Cookies Sesttings text */}
      <p className="text-blue-500 font-normal text-sm absolute bottom-4 left-8">
        Cookie settings
      </p>
    </div>
  );
};

export default ScheduledEvent;
