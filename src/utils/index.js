import moment from 'moment';
import { Dimensions } from 'react-native';

export function parseTime(ms) {
  const duration = moment.duration(ms);
  if (ms < 1000) return { unit: duration.asMilliseconds(), metric: 'ms' };
  if (ms >= 1000 && ms < 60000) return { unit: parseFloat(duration.asSeconds()).toFixed(2), metric: 's' };
  return { unit: parseFloat(duration.asMinutes()).toFixed(2), metric: 'm' };
}

export function parseStatusCode(status) {
  if (status !== 200) return 'down';
  return 'up';
}

var {width, height} = Dimensions.get('window');
  // Platform.OS == 'ios' 
  // if height === 812 || width === 812 -> iPhone X
  // aspectRatio ( height/width)  > 1.6 -> iPhone else -> iPad
export const screenUnits = { vw: width/100,  vh: height/100 };


