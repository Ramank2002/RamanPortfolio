// next image

import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        // src={"/avatar.png"}
        src={"/avatar3.png"}
        width={737}
        height={678}
        // width={800}
        // height={700}
        alt=""
        className="translate-z-0 w-full h-full"
        // className="translate-z-0 w-360 h-460"
      />
    </div>
  );
};

export default Avatar;
