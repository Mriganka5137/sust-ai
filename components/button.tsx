import React from "react";

interface ButtonProps {
  variant: "sign-up" | "outline" | "primary";
  children: React.ReactNode;
  href?: string;
}
const Button = ({ children, variant, href }: ButtonProps) => {
  const buttonClasses = {
    "sign-up": "bg-brand-yellow text-white",
    outline: "border border-primary-green text-primary-green",
    primary: "bg-primary-green text-white",
  };

  return (
    <button
      className={`px-8 py-2.5  rounded-full text-sm max-md:px-5 max-md:py-2 max-md:text-xs flex items-center gap-1 justify-center w-fit  ${buttonClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
