import { request } from './generic.service';

const getMeetingPoint = id => request({ url: `meetingPoint/${id}`, method: 'get' });

const getMeetingPoints = () => request({ url: `meetingPoint`, method: 'get' });

export { getMeetingPoint, getMeetingPoints };
