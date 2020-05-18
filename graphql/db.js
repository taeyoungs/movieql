export const people = [
  {
    id: '0',
    name: 'Jang',
    age: 27,
    gender: 'male',
  },
  {
    id: '1',
    name: 'Tae',
    age: 24,
    gender: 'male',
  },
  {
    id: '2',
    name: 'Young',
    age: 20,
    gender: 'male',
  },
  {
    id: '3',
    name: 'Gang',
    age: 35,
    gender: 'female',
  },
  {
    id: '4',
    name: 'Ha',
    age: 40,
    gender: 'male',
  },
  {
    id: '5',
    name: 'Won',
    age: 28,
    gender: 'female',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
