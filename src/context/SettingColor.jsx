import { createContext, useState, useMemo } from 'react';
import { ORIGINAL_YELLOW } from '../constants/color';

const ColorContext = createContext({
  state: {
    color: '',
  },
  action: {
    setColor: () => {},
  },
});

const ColorContexttProvider = ({ children }) => {
  const [color, setColor] = useState(ORIGINAL_YELLOW);

  const value = useMemo(
    () => ({
      state: { color },
      action: { setColor },
    }),
    [color],
  );

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export { ColorContexttProvider };
export default ColorContext;
