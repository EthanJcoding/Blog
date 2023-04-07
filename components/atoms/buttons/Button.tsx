import React from "react";
interface ButtonProps {
  children: JSX.Element | string;
  theme?: "primary";
  onClick?: () => void;
}

const Button = ({
  children,
  theme = "primary",
  onClick = undefined,
}: ButtonProps) => {
  return (
    <button className="text-3xl font-bold underline" onClick={onClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
