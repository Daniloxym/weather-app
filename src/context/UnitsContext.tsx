import { createContext, useContext, useState, type ReactNode } from 'react';

export type TemperatureUnit = 'celsius' | 'fahrenheit';
export type WindSpeedUnit = 'kmh' | 'mph';
export type PrecipitationUnit = 'mm' | 'inch';

interface UnitsContextType {
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
  precipitationUnit: PrecipitationUnit;
  setTemperatureUnit: (unit: TemperatureUnit) => void;
  setWindSpeedUnit: (unit: WindSpeedUnit) => void;
  setPrecipitationUnit: (unit: PrecipitationUnit) => void;
  switchToImperial: () => void;
  switchToMetric: () => void;
}

const UnitsContext = createContext<UnitsContextType | undefined>(undefined);

export function UnitsProvider({ children }: { children: ReactNode }) {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');
  const [windSpeedUnit, setWindSpeedUnit] = useState<WindSpeedUnit>('kmh');
  const [precipitationUnit, setPrecipitationUnit] = useState<PrecipitationUnit>('mm');

  const switchToImperial = () => {
    setTemperatureUnit('fahrenheit');
    setWindSpeedUnit('mph');
    setPrecipitationUnit('inch');
  };

  const switchToMetric = () => {
    setTemperatureUnit('celsius');
    setWindSpeedUnit('kmh');
    setPrecipitationUnit('mm');
  };

  return (
    <UnitsContext.Provider
      value={{
        temperatureUnit,
        windSpeedUnit,
        precipitationUnit,
        setTemperatureUnit,
        setWindSpeedUnit,
        setPrecipitationUnit,
        switchToImperial,
        switchToMetric,
      }}>
      {children}
    </UnitsContext.Provider>
  );
}

export function useUnits() {
  const context = useContext(UnitsContext);
  if (context === undefined) {
    throw new Error('useUnits must be used within a UnitsProvider');
  }
  return context;
}
