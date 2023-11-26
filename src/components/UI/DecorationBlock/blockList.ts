export type Block = {
  id: number;
  side: "left" | "right";
  sidedistance: number;
  align: "top" | "bottom";
  aligndistance: number;
  value: number;
  rotate: number;
};

export const blockList: Block[] = [
  {
    id: 1,
    side: "left",
    sidedistance: 150,
    align: "bottom",
    aligndistance: 70,
    value: 32,
    rotate: 0,
  },
  {
    id: 2,
    side: "right",
    sidedistance: 30,
    align: "bottom",
    aligndistance: 120,
    value: 256,
    rotate: 23,
  },
  {
    id: 3,
    side: "left",
    sidedistance: 20,
    align: "top",
    aligndistance: 80,
    value: 8,
    rotate: -20,
  },
  {
    id: 4,
    side: "right",
    sidedistance: 30,
    align: "top",
    aligndistance: 130,
    value: 16,
    rotate: 10,
  },
  {
    id: 5,
    side: "left",
    sidedistance: 15,
    align: "bottom",
    aligndistance: 200,
    value: 4,
    rotate: -15,
  },
  {
    id: 6,
    side: "left",
    sidedistance: 138,
    align: "top",
    aligndistance: 150,
    value: 512,
    rotate: -1,
  },
];
