//links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiLinkedinBoxFill,
  RiFacebookLine,
  RiMailLine,
  RiGithubFill,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/raman-gupta-b49277202/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 "
        >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://instagram.com/mrraman_2002?igshid=ZDc4ODBmNjlmNQ=="}
        target="_blank"
        className="hover:text-accent transition-all duration-300 "
        >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=100012148788288"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 "
        >
        <RiFacebookLine />
      </Link>
      <Link
        href={"/contact"}
        // target="_blank"
        className="hover:text-accent transition-all duration-300 "
        >
        <RiMailLine />
      </Link>
      <Link
        href={"https://github.com/Ramank2002"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 "
        >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.codingninjas.com/studio/profile/Ramank_gupta"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 "
        >
        <SiCodingninjas />
      </Link>
      <Link
        href={"https://leetcode.com/Ramank2002/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 "
        >
        <SiLeetcode />
      </Link>
      <Link
        href={"https://auth.geeksforgeeks.org/user/ramankg2002"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 "
        >
        <SiGeeksforgeeks />
      </Link>
    </div>
  );
};

export default Socials;
