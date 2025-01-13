import Image from "next/image";
import React from "react";

import { ImageConstant } from "@/constant/ImageConstant";

const Logo = () => {
  const { src, alt, width, height } = ImageConstant.LOGO;
  return (
    <div className="my-2 flex flex-col items-center justify-center ">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="size-[32px]"
      />
      {/* <span className="text-sm font-bold text-primary">yasir-etc</span> */}
    </div>
  );
};

export default Logo;
