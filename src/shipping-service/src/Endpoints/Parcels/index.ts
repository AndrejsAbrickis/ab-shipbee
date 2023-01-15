import { ParcelsCreateHandler } from './Create';
import { ParcelsGetHandler } from './Get';
import { ParcelsSearchHandler } from './Search';

const ParcelsHandlers = [
  ParcelsGetHandler,
  ParcelsCreateHandler,
  ParcelsSearchHandler,
];

export { ParcelsHandlers };
