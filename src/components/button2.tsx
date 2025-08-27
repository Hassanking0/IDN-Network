import React from "react";

type ButtonProps = {
  title: string;
};

export const Button2: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="cursor-pointer text-sm bg-white text-zinc-950 py-2 px-5 rounded-md hover:bg-zinc-200">
      {title}
    </button>
  );
};

export default Button2;
