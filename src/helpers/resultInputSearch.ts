export const resultInputSearch = (
  value: string,
  setHasClearButton: (arg: boolean) => void,
  setIsCityOpen: (arg: boolean) => void,
  setIsNotResult: (arg: boolean) => void,
  citiesFilter: string[]
): void => {
  if (!value.length) {
    setHasClearButton(false);
    setIsCityOpen(false);
    setIsNotResult(false);
  } else if (value.length && !citiesFilter.length) {
    setIsNotResult(true);
    setIsCityOpen(false);
  } else if (citiesFilter.every((city) => city.toLowerCase() === value.trim().toLowerCase())) {
    setIsCityOpen(false);
  } else {
    setIsNotResult(false);
    setHasClearButton(true);
    setIsCityOpen(true);
  }
};
