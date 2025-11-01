"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@heroui/react";
import { LINKS } from "../constants";

export function BoostyButton() {
  const [imageSrc, setImageSrc] = useState<string>(LINKS.BOOSTY_IMAGE_LOCAL);
  const [imgKey, setImgKey] = useState(0);

  const handleImageError = () => {
    // Fallback to remote image if local fails
    if (imageSrc === LINKS.BOOSTY_IMAGE_LOCAL) {
      setImageSrc(LINKS.BOOSTY_IMAGE_REMOTE);
      setImgKey(prev => prev + 1);
    }
  };

  return (
    <Link
      href={LINKS.BOOSTY_DONATE}
      isExternal
      className="transition-all hover:scale-105 hover:opacity-90 flex items-center"
    >
      <Image
        key={imgKey}
        src={imageSrc}
        alt="Support on Boosty"
        width={300}
        height={68}
        className="h-[68px] w-auto rounded-2xl shadow-lg"
        onError={handleImageError}
        unoptimized
      />
    </Link>
  );
}
