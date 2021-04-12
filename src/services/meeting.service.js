import { request } from './generic.service';

const getMeeting = id => request({ url: `meetings/${id}`, method: 'get' });

const getMeetings = () => request({ url: `meetings`, method: 'get' });

export { getMeeting, getMeetings };
