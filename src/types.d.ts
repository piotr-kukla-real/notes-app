export interface Note {
  title: string;
  text: string;
  time: string;
  id: number;
}

export type Notes = Note[];

export interface CompProp {
  component?: React.ElementType<any>;
}
