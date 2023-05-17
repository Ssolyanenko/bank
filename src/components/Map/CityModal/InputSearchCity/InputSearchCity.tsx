import React, { FC, useState, useEffect, ReactElement } from 'react';

import { SearchIcon } from 'assets/SearchIcon';
import { CityContainer } from 'components';
import { resultInputSearch } from 'helpers/resultInputSearch';
import { getFilterBranches } from 'helpers/getFilterBranches';
import { toDo } from 'helpers';
import { Branch } from 'interfaces/branch';
import classes from './InputSearchCity.module.scss';

interface Props {
  placeholder?: string;
  cities?: string[];
  isClearField?: boolean;
  branches?: Branch[];
  closeModal?(): void;
  closeBranches?(): void;
  setShowSearchList?(showList: boolean): void;
  selectCity(name: string): void;
  setClearInput?(isClear: boolean): void;
  errorBankBranchesFound?: string;
}

export const InputSearchCity: FC<Props> = ({
  selectCity,
  placeholder = '',
  cities = [],
  branches = [],
  closeModal = toDo,
  closeBranches = toDo,
  setClearInput = toDo,
  setShowSearchList = toDo,
  isClearField = false,
  errorBankBranchesFound = 'No results found',
}): ReactElement => {
  const [value, setValue] = useState('');
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [hasClearButton, setHasClearButton] = useState(false);
  const [citiesFilter, setCitiesFilter] = useState<string[]>([]);
  const [isNotResult, setIsNotResult] = useState(false);

  useEffect(() => {
    resultInputSearch(value, setHasClearButton, setIsCityOpen, setIsNotResult, citiesFilter);
  }, [value, citiesFilter]);

  useEffect(() => {
    setShowSearchList(isCityOpen);
  }, [isCityOpen, setShowSearchList]);

  const selectItem = (item: string): void => {
    setIsCityOpen(false);
    selectCity(item);
    setValue(item);
  };

  const getCity = (name: string): void => {
    if (cities.length) {
      const filterCities = cities.filter((elem) => String(elem).toLowerCase().startsWith(name.toLowerCase()));
      setCitiesFilter([...filterCities]);
    }

    if (branches.length) {
      const filterBranches = getFilterBranches(branches, name);
      const addressBranches = filterBranches.map((branch: Branch) => branch.address.split(' ').slice(1).join(' '));
      setCitiesFilter([...addressBranches]);
    }
  };

  return (
    <div className={classes.search}>
      <span>
        <SearchIcon className={classes.icon} />
      </span>
      <input
        value={isClearField ? '' : value}
        onClick={(event): void => {
          getCity(event.currentTarget.value);
        }}
        onChange={(event): void => {
          setClearInput(false);
          getCity(event.target.value);
          setValue(event.target.value);
        }}
        className={classes.searchInput}
        placeholder={placeholder}
      />
      {hasClearButton && (
        <button
          className={classes.clearButton}
          onClick={(): void => {
            setValue('');
            closeBranches();
          }}
          aria-label=" "
        >
          &times;
        </button>
      )}
      {isCityOpen && (
        <CityContainer cities={citiesFilter.slice(0, 10)} closeModal={closeModal} selectItem={selectItem} />
      )}
      {isNotResult && <span className={classes.noCity}>{errorBankBranchesFound}</span>}
    </div>
  );
};
