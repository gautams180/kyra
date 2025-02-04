import clsx from "clsx";
import React from "react";

type CardProps = {
  cardClass?: string;
  growth?: React.ReactNode;
  title: string;
  description: string;
  descriptionPrefix?: string;
  descriptionClass?: string;
};

export const abbreviateNumber = (value: number) => {
  const absValue = Math.abs(value);
  const sign = value < 0 ? "-": ""
  if (absValue >= 1e12) {
    return `${sign}${(absValue / 1e12).toFixed(2).replace(/\.00$/, "") + " T"}`;
  } else if (absValue >= 1e9) {
    return `${sign}${(absValue / 1e9).toFixed(2).replace(/\.00$/, "") + " B"}`;
  } else if (absValue >= 1e6) {
    return `${sign}${(absValue / 1e6).toFixed(2).replace(/\.00$/, "") + " m"}`;
  } else if (absValue >= 1e3) {
    return `${sign}${(absValue / 1e3).toFixed(2).replace(/\.00$/, "") + " K"}`;
  } else {
    return `${sign}${absValue.toString()}`;
  }
};

export const Card: React.FC<CardProps> = ({ cardClass, growth, title, description, descriptionPrefix, descriptionClass }) => {
  return (
    <div
      className={clsx(
        "w-full lg:w-1/5 min-h-32 lg:min-h-24 flex flex-col items-center px-5 py-3 rounded-3xl",
        cardClass
      )}
    >
      <h2 className="text-[0.8rem] lg:text-[1rem] text-gray-100 font-semibold">{title}</h2>
      <div className={clsx("flex items-center text-xl lg:text-2xl",descriptionClass)}>{descriptionPrefix}{description !== "" ? description : (<div className="bg-white h-[2px] w-7 rounded-lg"></div>)}</div>
      {growth ? growth : ""}
    </div>
  );
};
