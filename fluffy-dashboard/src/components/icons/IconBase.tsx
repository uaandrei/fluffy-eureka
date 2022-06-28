import { PropsWithChildren } from "react";

type IconBaseProps = {
  hoverColor?: string;
};

const IconBase: React.FC<PropsWithChildren<IconBaseProps>> = ({
  children,
  hoverColor,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline hover:bg-gray-200 rounded-lg hover:cursor-pointer self-center"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {children}
    </svg>
  );
};

export { IconBase };
