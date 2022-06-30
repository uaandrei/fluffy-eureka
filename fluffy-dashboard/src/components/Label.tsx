type LabelProps = {
  type: labelColors;
  value: string;
};

type labelColors = "blue" | "red" | "lime" | "green" | "fuchsia";

const colorClasses: { [key: string]: string } = {
  blue: "bg-blue-300",
  red: "bg-red-300",
  lime: "bg-lime-300",
  green: "bg-green-300",
  fuchsia: "bg-fuchsia-300",
};

const Label = ({ type, value }: LabelProps) => (
  <span className={`px-3 ${colorClasses[type]} rounded-xl font-bold text-sm`}>
    {value}
  </span>
);

export { Label };
