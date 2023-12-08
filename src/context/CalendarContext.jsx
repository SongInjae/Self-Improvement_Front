import { format } from 'date-fns';
import { createContext, useEffect, useMemo, useState } from 'react';
import { transformDate } from '../utils/transform';

const CalendarContext = createContext({
  state: {
    current: '',
    selectDay: '',
    month: '',
    year: '',
  },
  action: {
    setSelectDay: () => {},
    setMonth: () => {},
    setYear: () => {},
  },
});

const CalendarContextProvider = ({ children }) => {
  const [current, setCurrent] = useState(new Date());
  const [selectDay, setSelectDay] = useState(new Date());
  const [month, setMonth] = useState(format(current, 'MMM'));
  const [year, setYear] = useState(format(current, 'yyyy'));

  useEffect(() => {
    const newDate = new Date(`${year}-${month}`);
    setCurrent(newDate);
  }, [month, year]);

  const value = useMemo(
    () => ({
      state: { current, selectDay, month, year },
      action: { setSelectDay, setMonth, setYear },
    }),
    [current, selectDay, month, year],
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContextProvider };
export default CalendarContext;
