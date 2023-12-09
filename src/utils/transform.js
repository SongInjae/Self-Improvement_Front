import { format } from 'date-fns';

const transformDate = (date) => format(date, 'yyyy-MM-dd');

const transformDay = (days) => {
  const Days = {
    월: 'MONDAY',
    화: 'TUESDAY',
    수: 'WEDNESDAY',
    목: 'THURSDAY',
    금: 'FRIDAY',
    토: 'SATURDAY',
    일: 'SUNDAY',
  };

  return days.map((item) => Days[item]);
};

export { transformDate, transformDay };
