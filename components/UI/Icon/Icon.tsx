import { FaStar, FaRegMap, FaCarAlt } from "react-icons/fa";
import { BsFuelPump } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IconName } from "@/types/unions";
import { RxCross2 } from "react-icons/rx";

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case "star":
      return <FaStar className={className} />;

    case "location":
      return <FaRegMap className={className} />;

    case "engine":
      return <BsFuelPump className={className} />;

    case "transmission":
      return <TbAutomaticGearbox className={className} />;

    case "form":
      return <FaCarAlt className={className} />;

    case "close":
      return <RxCross2 className={className} />;
    default:
      return null;
  }
}
