export type Status = 'Active' | 'Inactive' | 'Suspended';

export interface Pupil {
  name: string;
  age: number;
  status?: Status;
}
