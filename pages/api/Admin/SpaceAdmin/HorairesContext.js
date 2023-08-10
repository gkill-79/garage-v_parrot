import { createContext, useState, useContext } from 'react';

export const HorairesContext = createContext();

export const HorairesProvider = ({ children }) => {
  const defaultHoraires = {
    lundi: 'Fermé',
    mardi: '9h00 - 12h30, 14h00 - 18h30',
    mercredi: '9h00 - 12h30, 14h00 - 18h30',
    jeudi: '9h00 - 12h30, 14h00 - 18h30',
    vendredi: '9h00 - 12h30, 14h00 - 18h30',
    samedi: '9h00 - 12h30, 14h00 - 19h00',
    dimanche: 'Fermé',
  };

  const [horaires, setHoraires] = useState(defaultHoraires);

  return (
    <HorairesContext.Provider value={{ horaires, setHoraires }}>
      {children}
    </HorairesContext.Provider>
  );
};

export const useHoraires = () => useContext(HorairesContext);

















