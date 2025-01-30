import CustomButton, { CustomButtonProps } from "./CustomButton";

type PurpleButtonProps = Pick<
  CustomButtonProps,
  "text" | "href" | "isOpenNewTab"
>;

const PurpleButton = ({ text, href, isOpenNewTab }: PurpleButtonProps) => {
  return (
    <CustomButton
      text={text}
      href={href}
      variant="purple"
      isOpenNewTab={isOpenNewTab}
    />
  );
};

export default PurpleButton;
