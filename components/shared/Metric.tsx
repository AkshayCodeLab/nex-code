import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  textStyles,
  href,
  isAuthor,
}: Props) => {
  const metricContent = (
    <div className="flex items-center gap-2">
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <div className={`flex ${isAuthor ? "flex-col" : "items-center gap-1"}`}>
        <p className={`${textStyles} flex items-center`}>{value}</p>
        <span
          className={`small-regular line-clamp-1 text-gray-500 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center gap-2 hover:underline">
        {metricContent}
      </Link>
    );
  }

  return <div className="flex items-center gap-2">{metricContent}</div>;
};

export default Metric;
