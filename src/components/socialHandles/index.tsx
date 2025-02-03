import { RiShareBoxFill } from "react-icons/ri";
import { SocialIcon } from "../header";
import { socialHandlesData } from "./socialHandlesData";

type Props = {};

export const SocialHandles = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
      {socialHandlesData.map((data, index) => (
        <div
          className="w-fit mx-auto flex gap-1 items-center px-2 rounded-lg bg-[#212529] text-xs lg:text-sm"
          key={index}
        >
          <div>
            <SocialIcon icon={data.icon} />
          </div>
          <p>@{data.handle}</p>
          <a className="text-white cursor-pointer" href={data.link} target="_blank">
            <RiShareBoxFill />
          </a>
        </div>
      ))}
    </div>
  );
};
