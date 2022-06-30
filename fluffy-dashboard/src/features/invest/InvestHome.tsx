import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";

const props = {
  enableSlices: "x",
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
} as const;

const data = [
  {
    id: "japan",
    color: "hsl(26, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 284,
      },
      {
        x: "helicopter",
        y: 140,
      },
      {
        x: "boat",
        y: 274,
      },
      {
        x: "train",
        y: 297,
      },
      {
        x: "subway",
        y: 169,
      },
      {
        x: "bus",
        y: 80,
      },
      {
        x: "car",
        y: 117,
      },
      {
        x: "moto",
        y: 205,
      },
      {
        x: "bicycle",
        y: 75,
      },
      {
        x: "horse",
        y: 100,
      },
      {
        x: "skateboard",
        y: 93,
      },
      {
        x: "others",
        y: 48,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(148, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 62,
      },
      {
        x: "helicopter",
        y: 46,
      },
      {
        x: "boat",
        y: 255,
      },
      {
        x: "train",
        y: 286,
      },
      {
        x: "subway",
        y: 77,
      },
      {
        x: "bus",
        y: 89,
      },
      {
        x: "car",
        y: 266,
      },
      {
        x: "moto",
        y: 191,
      },
      {
        x: "bicycle",
        y: 170,
      },
      {
        x: "horse",
        y: 109,
      },
      {
        x: "skateboard",
        y: 175,
      },
      {
        x: "others",
        y: 287,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(190, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 3,
      },
      {
        x: "helicopter",
        y: 113,
      },
      {
        x: "boat",
        y: 41,
      },
      {
        x: "train",
        y: 114,
      },
      {
        x: "subway",
        y: 83,
      },
      {
        x: "bus",
        y: 275,
      },
      {
        x: "car",
        y: 215,
      },
      {
        x: "moto",
        y: 95,
      },
      {
        x: "bicycle",
        y: 140,
      },
      {
        x: "horse",
        y: 64,
      },
      {
        x: "skateboard",
        y: 137,
      },
      {
        x: "others",
        y: 236,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(286, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 199,
      },
      {
        x: "helicopter",
        y: 172,
      },
      {
        x: "boat",
        y: 56,
      },
      {
        x: "train",
        y: 131,
      },
      {
        x: "subway",
        y: 198,
      },
      {
        x: "bus",
        y: 3,
      },
      {
        x: "car",
        y: 129,
      },
      {
        x: "moto",
        y: 38,
      },
      {
        x: "bicycle",
        y: 121,
      },
      {
        x: "horse",
        y: 45,
      },
      {
        x: "skateboard",
        y: 279,
      },
      {
        x: "others",
        y: 242,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(158, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 117,
      },
      {
        x: "helicopter",
        y: 246,
      },
      {
        x: "boat",
        y: 212,
      },
      {
        x: "train",
        y: 279,
      },
      {
        x: "subway",
        y: 92,
      },
      {
        x: "bus",
        y: 215,
      },
      {
        x: "car",
        y: 263,
      },
      {
        x: "moto",
        y: 194,
      },
      {
        x: "bicycle",
        y: 64,
      },
      {
        x: "horse",
        y: 85,
      },
      {
        x: "skateboard",
        y: 130,
      },
      {
        x: "others",
        y: 293,
      },
    ],
  },
];

const InvestHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://www.brdam.ro/assets/json/istorica.json`, {
      mode: "cors",
      method: "get",
    })
      .then((response) => {
        debugger;
        return response.json();
      })
      .then((jsonData) => {
        const actiuniA = jsonData as { Data: string; VUAN: string }[];
        console.log(actiuniA);
      })
      .finally(() => setIsLoading(false));
  });
  return (
    <>
      <div>InvestHome</div>
      {isLoading ? (
        "loading"
      ) : (
        <div className="h-80">
          <ResponsiveLine data={data} pointLabelYOffset={-12} {...props} />
        </div>
      )}
    </>
  );
};

export { InvestHome };
