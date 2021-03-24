import { request } from './generic.service';

const getUser = id => request({ url: `users/${id}`, method: 'get' });

const getUsers = () => request({ url: `users`, method: 'get' });

export { getUser, getUsers };
