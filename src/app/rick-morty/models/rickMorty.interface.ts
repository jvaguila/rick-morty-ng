export interface IRickMorty {
  id: number;
  name: string;
  gender: string;
  origin: IOrigin;
  type: string;
  status: string;
  image: string;
}

interface IOrigin {
  name: string;
  url: string;
}

type STATUS = 'Alive' | 'Dead';
