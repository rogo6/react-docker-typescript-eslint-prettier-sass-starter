import React from "react";
import "./button.styles.scss";

type Props = {
  value: string;
  className?: string;
  props?: string[];
};

const Button = ({ className, value, ...props }: Props) => {
  return (
    <button className={`appButton ${className}`} {...props}>
      {value}
    </button>
  );
};

export default Button;
