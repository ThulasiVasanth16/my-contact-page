import React from "react";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleList,
  faArrowsRotate,
  faUserGroup,
  faExpand,
  faSquareRss,
  faCodeBranch,
  faCube,
  faChartSimple,
  faGear,
  faBell,
  faCircleQuestion,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar bg-[#FBFAFF;] flex-[1] border-r-[0.5px] border-solid border-[#D8E0ED] min-h-screen p-[14px]">
      <div className="top flex-col mt-[24px] flex  items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M35.5 18C35.5 27.665 27.665 35.5 18 35.5C8.33501 35.5 0.5 27.665 0.5 18C0.5 8.33501 8.33501 0.5 18 0.5C27.665 0.5 35.5 8.33501 35.5 18Z"
            fill="#5051F9"
            stroke="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6775 8H25.3599V12.1829H8.58008L10.6775 8Z"
            fill="white"
          />
          <path
            d="M23.2624 8H28.5061L24.3111 16.3657H19.0674L23.2624 8Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.59766 23.2822H26.3775L24.28 27.4651H9.59766V23.2822Z"
            fill="white"
          />
          <path
            d="M11.695 19.0996H16.9387L12.7437 27.4653H7.5L11.695 19.0996Z"
            fill="white"
          />
        </svg>
        <span className="logo  text-xl font-bold ">ZEPIC</span>
      </div>
      {/* <hr className="hr h-[0] " /> */}
      <div className="center p-[10px]">
        <ul className="flex  flex-col gap-[58px] mt-[14px]">
          <li className="flex items-center  p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faRectangleList}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] "
              data-tooltip-id="dashboard-icon"
              data-tooltip-content="Dahboard"
            />
            <Tooltip id="dashboard-icon" />
          </li>
          <li className="flex items-center p-[5px] hover:cursor-pointer">
            <FontAwesomeIcon
              icon={faArrowsRotate}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  hover:text-[#5051F9] hover:cursor-pointer "
              data-tooltip-id="data-icon"
              data-tooltip-content="Data"
            />
            <Tooltip id="data-icon" />
          </li>
          <li className="flex items-center p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] hover:cursor-pointer "
              data-tooltip-id="user-icon"
              data-tooltip-content="User"
            />
            <Tooltip id="user-icon" />
          </li>
          <li className="flex items-center p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faExpand}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] hover:cursor-pointer"
              data-tooltip-id="segment-icon"
              data-tooltip-content="Segment"
            />
            <Tooltip id="segment-icon" />
          </li>
          <li className="flex items-center p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faSquareRss}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] hover:cursor-pointer"
              data-tooltip-id="campagins-icon"
              data-tooltip-content="Campagins"
            />
            <Tooltip id="campagins-icon" />
          </li>
          <li className="flex items-center p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faCodeBranch}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] hover:cursor-pointer"
              data-tooltip-id="flow-icon"
              data-tooltip-content="Flow"
            />
            <Tooltip id="flow-icon" />
          </li>
          <li className="flex items-center p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faCube}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] hover:cursor-pointer"
              data-tooltip-id="cube-icon"
              data-tooltip-content="Cube"
            />
            <Tooltip id="cube-icon" />
          </li>
          <li className="flex items-center p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faChartSimple}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] hover:cursor-pointer"
              data-tooltip-id="reports-icon"
              data-tooltip-content="Reports"
            />
            <Tooltip id="reports-icon" />
          </li>
          <li className="flex items-center p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faGear}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] hover:cursor-pointer"
              data-tooltip-id="settings-icon"
              data-tooltip-content="Settings"
            />
            <Tooltip id="settings-icon" />
          </li>
          <li className="flex items-center p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faBell}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] hover:cursor-pointer"
              data-tooltip-id="notification-icon"
              data-tooltip-content="Notifications"
            />

            <Tooltip id="notification-icon" />
          </li>
          <li className="flex items-center p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] hover:cursor-pointer"
              data-tooltip-id="help-icon"
              data-tooltip-content="Help"
            />

            <Tooltip id="help-icon" />
          </li>
          <li className="flex items-center p-[5px] cursor-pointer">
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#5F6187] w-[24px] h-[24px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:text-[#5051F9] hover:cursor-pointer"
              data-tooltip-id="profile-icon"
              data-tooltip-content="Profile"
            />
            <Tooltip id="profile-icon" />
          </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
