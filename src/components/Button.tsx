import React from "react";

interface ButtonProps {
  text?: string;
  url?: string;
}

const Button: React.FC<ButtonProps> = ({ text, url }) => {
  return (
    <div className="my-2">
      <a href={ url ?? '#'} className="py-2 px-4 bg-green-500 hover:bg-green-700 rounded text-sm text-white">
        {text ?? "NO TEXT"}
      </a>
    </div>
  );
};
export default Button;
