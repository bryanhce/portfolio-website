import Link from "next/link";

type ButtonVariant = "pink" | "purple";

export type CustomButtonProps = {
  text: string;
  href: string;
  variant: ButtonVariant;
  isOpenNewTab?: boolean;
};

const variantStyles = {
  pink: "bg-[#E17FB3] hover:bg-[#ff90cb]",
  purple: "bg-[#8185E1] hover:bg-[#9299ff]",
} as const;

const CustomButton = ({
  text,
  href,
  variant,
  isOpenNewTab,
}: CustomButtonProps) => {
  return (
    <Link
      href={href}
      target={isOpenNewTab ? "_blank" : "_self"}
      rel={isOpenNewTab ? "noopener noreferrer" : undefined}
      className={`
        ${variantStyles[variant]}
        inline-block shadow-lg py-3 px-5 mr-5 rounded-md 
        text-black font-bold text-lg 
        transition-colors duration-500
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700
        ${variant === "pink" ? "focus:ring-pink-400" : "focus:ring-purple-500"}
      `}
      role="button"
    >
      {text}
    </Link>
  );
};

export default CustomButton;
