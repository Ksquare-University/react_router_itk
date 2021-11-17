type IAnimal = {
  id: string;
  name: string;
  imageSrc: string;
};

export const animals: IAnimal[] = [
  {
    id: 'koala',
    name: 'Koala',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg',
  },
  {
    id: 'panda',
    name: 'Panda',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/Giant_Panda_2004-03-2.jpg',
  },
  {
    id: 'gorilla',
    name: 'Gorilla',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Gorilla.jpg',
  },
];
