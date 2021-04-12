import { request } from './generic.service';

const getPlacement = id => request({ url: `placement/${id}`, method: 'get' });

const getPlacements = () => request({ url: `placemant`, method: 'get' });

export { getPlacement, getPlacements };
