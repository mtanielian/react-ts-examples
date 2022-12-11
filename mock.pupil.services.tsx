import { Pupil } from './interfaces';

export const getPupuils = ({
  name = 'tests',
  age = 99,
  status = 'Inactive',
}: Pupil): Pupil[] => {
  return [
    {
      name: 'Marin',
      age: 35,
      status: 'Active',
    },
    {
      name: 'Melissa',
      age: 30,
      status: 'Suspended',
    },
  ];
};
