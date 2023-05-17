export interface FilterHistory {
  value: string;
  setValue(value: string): void;
  dates: string[];
  setDates(dates: string[]): void;
  selectValue: string;
  setSelectValue(value: string): void;
  count: number[];
  isClicked: boolean;
  setClicked(value: boolean): void;
  handleChangeCount(event: Event, newValue: number | number[]): void;
  handleChange(event: React.KeyboardEvent<HTMLInputElement>): void;
  getHistoryFiler(): void;
  resetAllFilters(): void;
  changeCount(type: string, event: React.ChangeEvent<HTMLInputElement>): void;
  isActiveButton: boolean;
}
