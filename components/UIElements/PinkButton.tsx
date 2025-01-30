import CustomButton, { CustomButtonProps } from "./CustomButton";

type PinkButtonProps = Pick<
  CustomButtonProps,
  "text" | "href" | "isOpenNewTab"
>;

const PinkButton = ({ text, href, isOpenNewTab }: PinkButtonProps) => {
  return (
    <CustomButton
      text={text}
      href={href}
      variant="pink"
      isOpenNewTab={isOpenNewTab}
    />
  );
};

export default PinkButton;
