import React from "react";

type iconTypes =
  | "check"
  | "collapse"
  | "down"
  | "expand"
  | "pen"
  | "trash"
  | "up"
  | "v-dots"
  | "x";

export type IconProps = {
  hoverColor?: string;
  type: iconTypes;
};

const Icon: React.FC<IconProps> = ({ type }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline hover:bg-gray-200 rounded hover:cursor-pointer self-center"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {getIconPathByType(type)}
    </svg>
  );
};

const getIconPathByType = (type: iconTypes): React.ReactNode => {
  switch (type) {
    case "check":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      );
    case "collapse":
      return <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />;
    case "down":
      return (
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      );
    case "expand":
      return (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      );
    case "pen":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      );
    case "trash":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      );
    case "up":
      return (
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      );
    case "v-dots":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      );
    case "x":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      );
  }
};

export { Icon };
