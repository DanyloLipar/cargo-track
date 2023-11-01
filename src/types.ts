export interface Info {
  id: number;
  name: string;
  parts: Part[];
}

export interface Part {
  id: number;
  part: string;
  condition: string;
}

export enum ConditionTypes {
  default = "0",
  good = "1",
  problem = "2",
}
