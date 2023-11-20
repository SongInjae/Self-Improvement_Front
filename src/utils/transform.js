import { format } from 'date-fns';

const transformDate = (date) => format(date, 'yyyy-MM-dd');

export { transformDate };
