const youngs = {
  name: 'youngs',
  age: 27,
  gender: 'male',
};

const resolvers = {
  Query: {
    person: () => youngs,
  },
};

export default resolvers;
