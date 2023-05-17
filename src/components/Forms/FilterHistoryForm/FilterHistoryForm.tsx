import React, { FC, ReactElement, useState, useEffect, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';
import { Field, Form, Formik, FormikTouched, FormikValues } from 'formik';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import { FilterChip } from 'components';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { getMaxAmount, requestMaxAmount } from 'store';
import { FilterIcon, SearchIcon } from 'assets';
import { Button, CloseButton, DatePicker, InputRange } from 'components/_basic';
import { Size, ButtonType } from 'interfaces/common/componentsSettings';
import { OPENED } from 'constants/text';
import { MIN_VALUE_AMOUNT_RANGE, TRANSACTIONS_DEBOUNCE_DELAY } from 'constants/numbers';
import {
  DEFAULT_FILTERS_VALUES,
  AMOUNT_TYPE,
  DATE_FORMAT,
  NUMBER_OF_DECIMALS,
  POSITIVE,
  NEGATIVE,
  INPUT_NAMES,
  TRANSACTION_TYPE,
  FILTER_TYPE,
  MIN_AMOUNT_FORMATTED,
  MAX_AMOUNT_FORMATTED,
  MIN_AMOUNT,
  ENTER_KEY,
} from 'constants/transactionsHistory';
import { TransactionsFilters } from 'interfaces/Transactions';
import { transformToLocaleString } from 'helpers/transformToLocaleString';
import classes from './FilterHistoryForm.module.scss';

interface Props {
  userCardId: number;
  titleFilter: string;
  filters: TransactionsFilters;
  setFilters: React.Dispatch<React.SetStateAction<TransactionsFilters>>;
}

export const FilterHistoryForm: FC<Props> = ({ userCardId, titleFilter, filters, setFilters }): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();
  const { amount: maxAmount, formattedAmount: maxAmountFormatted } = useTypedSelector(getMaxAmount);

  const [isOpenedFilter, setOpenedFilter] = useState(false);
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const [isAmountChanged, setIsAmountChanged] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [amountValue, setAmountValue] = useState<number[]>([]);
  const [amountValueFormatted, setAmountValueFormatted] = useState<string[]>([]);
  const [areFiltersApplied, setAreFiltersApplied] = useState(false);

  const [amountValueFrom, amountValueTo] = amountValue;
  const [amountValueFormattedFrom, amountValueFormattedTo] = amountValueFormatted;
  const filterIconStatus = isOpenedFilter ? OPENED : '';

  useEffect((): void => {
    dispatch(requestMaxAmount(userCardId, setAmountValue, setAmountValueFormatted));
  }, [userCardId, dispatch]);

  useEffect((): void => {
    setAmountValueFormatted([transformToLocaleString(amountValueFrom), transformToLocaleString(amountValueTo)]);
  }, [amountValueFrom, amountValueTo]);

  useEffect((): void | (() => void) => {
    if (titleFilter === searchQuery) return;

    const handler = setTimeout((): void => {
      setFilters((prevFilters: TransactionsFilters) => ({ ...prevFilters, titleFilter: searchQuery }));
    }, TRANSACTIONS_DEBOUNCE_DELAY);

    return (): void => {
      clearTimeout(handler);
    };
  }, [setFilters, titleFilter, searchQuery]);

  const toggleFilters = (): void => {
    setOpenedFilter((isOpenedFilterPrev: boolean): boolean => !isOpenedFilterPrev);
  };

  const search = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(value);
  };

  const handleChangeCount = (event: Event, newValue: number[]): void => {
    setAmountValue(newValue);
    setIsAmountChanged(true);
  };

  const isDisabled = (values: FormikValues, touched: FormikTouched<FormikValues>): boolean =>
    !(!!values.operationType || isAmountChanged || touched.amountTo || touched.amountFrom || dateFrom || dateTo);

  const blockInvalidChar = (event: KeyboardEvent<HTMLInputElement>, inputValue: string): void => {
    if ((event.key === '.' && inputValue.includes('.')) || event.key.match(/[^0-9.]/) !== null) {
      event.preventDefault();
    }
  };

  const blockInvalidSearchValues = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key.match(/[@#$!]/) || event.key === ENTER_KEY) {
      event.preventDefault();
    }
  };

  const updateAmount = (value: string, oppositeValue: number, amountType: AMOUNT_TYPE): void => {
    const parsedValue = parseFloat(value);
    const valueNumber = parsedValue > maxAmount ? maxAmount : parsedValue;

    const [newFirstAmountValue, newSecondAmountValue] =
      amountType === AMOUNT_TYPE.FROM ? [valueNumber, oppositeValue] : [oppositeValue, valueNumber];
    const sign = amountType === AMOUNT_TYPE.FROM ? NEGATIVE : POSITIVE;

    if (valueNumber * sign < oppositeValue * sign) {
      setAmountValue([newSecondAmountValue, newFirstAmountValue]);

      return;
    }

    if (
      (valueNumber === amountValueFrom && amountType === AMOUNT_TYPE.FROM) ||
      (valueNumber === amountValueTo && amountType === AMOUNT_TYPE.TO)
    ) {
      setAmountValueFormatted([transformToLocaleString(amountValueFrom), transformToLocaleString(amountValueTo)]);

      return;
    }

    setAmountValue([newFirstAmountValue, newSecondAmountValue]);
  };

  const removeFilter = (filterType: FILTER_TYPE, resetForm: () => void): void => {
    switch (filterType) {
      case FILTER_TYPE.AMOUNT:
        setAmountValue([MIN_AMOUNT, maxAmount]);
        setFilters(
          (prevFilters: TransactionsFilters): TransactionsFilters => ({
            ...prevFilters,
            minAmount: MIN_AMOUNT_FORMATTED,
            maxAmount: MAX_AMOUNT_FORMATTED,
          })
        );
        setIsAmountChanged(false);
        break;
      case FILTER_TYPE.DATE:
        setDateFrom(null);
        setDateTo(null);
        setFilters(
          (prevFilters: TransactionsFilters): TransactionsFilters => ({ ...prevFilters, startDate: '', endDate: '' })
        );
        break;
      default:
        resetForm();
        setFilters((prevFilters: TransactionsFilters): TransactionsFilters => ({ ...prevFilters, operationType: '' }));
    }
  };

  return (
    <Formik
      initialValues={{
        searchInput: '',
        operationType: '',
      }}
      onSubmit={(values): void => {
        setFilters({
          titleFilter: searchQuery,
          startDate: dateFrom !== null ? dayjs(String(dateFrom)).format(DATE_FORMAT) : '',
          endDate: dateTo !== null ? dayjs(String(dateTo)).format(DATE_FORMAT) : '',
          minAmount: amountValueFormattedFrom,
          maxAmount: amountValueFormattedTo,
          operationType: values.operationType,
        });
        setAreFiltersApplied(true);
      }}
    >
      {({ values, handleSubmit, resetForm, touched }): ReactElement => (
        <Form className={classes.filterContainer}>
          <div className={classes.search}>
            <div className={classes.searchContainer}>
              <Field
                as="input"
                className={classes.searchInput}
                value={searchQuery}
                onChange={search}
                name={INPUT_NAMES.SEARCH}
                onKeyPress={blockInvalidSearchValues}
                type="text"
                placeholder={t('filterHistoryForm.search')}
              />
              <div className={classes.icon}>
                {!searchQuery.length ? (
                  <SearchIcon />
                ) : (
                  <CloseButton onClick={(): void => setSearchQuery('')} size={Size.MEDIUM} />
                )}
              </div>
            </div>
            <div
              role="presentation"
              className={`${classes.iconFilter} ${classes[filterIconStatus]}`}
              onClick={toggleFilters}
            >
              <span>{t('filterHistoryForm.title')}</span>
              <FilterIcon className={classes.filterIcon} />
            </div>
          </div>
          {isOpenedFilter && (
            <div className={classes.dateFilter}>
              <div className={classes.choseData}>
                <Box component="label" className={classes.dateLabel}>
                  <DatePicker date={dateFrom} setDate={setDateFrom} label="From" maxDate={dateTo} />
                </Box>
                <Box component="label" className={classes.dateLabel}>
                  <DatePicker date={dateTo} setDate={setDateTo} label="To" minDate={dateFrom} />
                </Box>
                <Box component="label" className={classes.typeLabel}>
                  <FormControl fullWidth>
                    <InputLabel>{t('filterHistoryForm.operationType')}</InputLabel>
                    <Field
                      as={Select}
                      className={classes.selectList}
                      label={t('filterHistoryForm.operationType')}
                      name={INPUT_NAMES.OPERATION_TYPE}
                    >
                      <MenuItem value={TRANSACTION_TYPE.INCOMING}>{t('filterHistoryForm.incoming')}</MenuItem>
                      <MenuItem value={TRANSACTION_TYPE.OUTGOING_TRANSFERS}>
                        {t('filterHistoryForm.outgoingTransfers')}
                      </MenuItem>
                      <MenuItem value={TRANSACTION_TYPE.PAYMENTS}>{t('filterHistoryForm.payments')}</MenuItem>
                    </Field>
                  </FormControl>
                </Box>
              </div>
              <div className={classes.filterWrapper}>
                <div className={classes.filterAmount}>
                  <span>{t('filterHistoryForm.transactionAmount')}</span>
                  <div className={classes.amount}>
                    <Box component="label" className={classes.price}>
                      <span className={classes.transactionText}>{t('filterHistoryForm.fromTitle')}</span>
                      <Field
                        as="input"
                        type="text"
                        name={INPUT_NAMES.AMOUNT_VALUE_FROM}
                        className={classes.amountInput}
                        value={amountValueFormattedFrom}
                        onKeyPress={(event: KeyboardEvent<HTMLInputElement>): void => {
                          blockInvalidChar(event, amountValueFormattedFrom);
                        }}
                        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
                          setAmountValueFormatted([value, amountValueFormattedTo]);
                        }}
                        onFocus={(): void => {
                          setAmountValueFormatted([
                            amountValueFrom.toFixed(NUMBER_OF_DECIMALS),
                            amountValueFormattedTo,
                          ]);
                        }}
                        onBlur={({ target: { value } }: FocusEvent<HTMLInputElement>): void => {
                          updateAmount(value, amountValueTo, AMOUNT_TYPE.FROM);
                        }}
                      />
                    </Box>
                    <div className={classes.line} />
                    <Box component="label" className={classes.price}>
                      <span className={classes.transactionText}>{t('filterHistoryForm.toTitle')}</span>
                      <Field
                        as="input"
                        type="text"
                        name={INPUT_NAMES.AMOUNT_VALUE_TO}
                        className={classes.amountInput}
                        value={amountValueFormattedTo}
                        onKeyPress={(event: KeyboardEvent<HTMLInputElement>): void => {
                          blockInvalidChar(event, amountValueFormattedTo);
                        }}
                        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
                          setAmountValueFormatted([amountValueFormattedFrom, value]);
                        }}
                        onFocus={(): void => {
                          setAmountValueFormatted([
                            amountValueFormattedFrom,
                            amountValueTo.toFixed(NUMBER_OF_DECIMALS),
                          ]);
                        }}
                        onBlur={({ target: { value } }: FocusEvent<HTMLInputElement>): void => {
                          updateAmount(value, amountValueFrom, AMOUNT_TYPE.TO);
                        }}
                      />
                    </Box>
                  </div>
                  <div className={classes.range}>
                    <Field
                      as={InputRange}
                      className={classes.inputRange}
                      count={[+amountValueFrom, +amountValueTo]}
                      name={INPUT_NAMES.AMOUNT_RANGE}
                      handleChangeCount={handleChangeCount}
                      min={MIN_VALUE_AMOUNT_RANGE}
                      max={maxAmount}
                    />
                    <div className={classes.minMax}>
                      <span>{MIN_VALUE_AMOUNT_RANGE}</span>
                      <span>{maxAmountFormatted}</span>
                    </div>
                  </div>
                </div>
                <div className={classes.buttonsWrapper}>
                  <Button
                    className={classes.apply}
                    type={ButtonType.SUBMIT}
                    onClick={handleSubmit}
                    isDisabled={isDisabled(values, touched)}
                  >
                    {t('buttonNames.apply')}
                  </Button>
                  <Button className={`${classes.hide} ${classes.btn}`} type={ButtonType.BUTTON} onClick={toggleFilters}>
                    {t('buttonNames.hideFilters')}
                  </Button>
                  <Button
                    className={`${classes.reset} ${classes.btn}`}
                    type={ButtonType.RESET}
                    onClick={(): void => {
                      resetForm();
                      setDateFrom(null);
                      setDateTo(null);
                      setAmountValue([MIN_VALUE_AMOUNT_RANGE, maxAmount]);
                      setIsAmountChanged(false);
                      setAreFiltersApplied(false);
                      setFilters((prev: TransactionsFilters) => ({
                        ...DEFAULT_FILTERS_VALUES,
                        titleFilter: prev.titleFilter,
                      }));
                    }}
                  >
                    {t('buttonNames.resetAllFilters')}
                  </Button>
                </div>
              </div>
            </div>
          )}
          {areFiltersApplied && (
            <div className={classes.chips}>
              {(filters.startDate || filters.endDate) && (
                <FilterChip
                  value={''.concat(
                    filters.startDate ? t('filterHistoryForm.dateFrom', { dateFrom: filters.startDate }) : '',
                    filters.endDate ? t('filterHistoryForm.dateTo', { dateTo: filters.endDate }) : ''
                  )}
                  removeFilter={removeFilter}
                  filterType={FILTER_TYPE.DATE}
                  resetForm={resetForm}
                />
              )}
              {(filters.maxAmount || filters.minAmount) &&
                !(
                  (filters.maxAmount === MAX_AMOUNT_FORMATTED || filters.maxAmount === maxAmountFormatted) &&
                  filters.minAmount === MIN_AMOUNT_FORMATTED
                ) &&
                isAmountChanged && (
                  <FilterChip
                    value={`${filters.minAmount} - ${filters.maxAmount} GBP`}
                    removeFilter={removeFilter}
                    filterType={FILTER_TYPE.AMOUNT}
                    resetForm={resetForm}
                  />
                )}
              {filters.operationType && (
                <FilterChip
                  value={filters.operationType}
                  removeFilter={removeFilter}
                  filterType={FILTER_TYPE.OPERATION_TYPE}
                  resetForm={resetForm}
                />
              )}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};
