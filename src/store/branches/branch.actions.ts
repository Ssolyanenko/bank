import { SetStateAction } from 'react';

import { BANK_INFO_URL } from 'constants/requestUrls';
import { ActionType } from 'interfaces/action';
import { Branch } from 'interfaces/branch';
import { BranchActions } from 'constants/branch';
import { BankTypes } from 'constants/branchType';
import { GetRequest } from 'services/getRequest';

export const setBranches =
  (data: Branch[]): ActionType =>
  async (dispatch) => {
    dispatch({ type: BranchActions.SET_BRANCH_REQUEST });

    try {
      dispatch({ type: BranchActions.SET_BRANCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: BranchActions.SET_BRANCH_ERROR });
    }
  };

export const getBranches =
  (city: string, setDataBranches?: { (value: SetStateAction<Branch[]>): void }, bankTypes?: BankTypes): ActionType =>
  async (dispatch) => {
    dispatch({ type: BranchActions.GET_BRANCH_REQUEST });

    try {
      const url = bankTypes ? `${BANK_INFO_URL}${city}?bankTypes=${bankTypes}` : `${BANK_INFO_URL}${city}`;
      const branches = await GetRequest(url);
      setDataBranches && setDataBranches(branches);

      return dispatch({ type: BranchActions.GET_BRANCH_SUCCESS, payload: branches });
    } catch (error) {
      if (error instanceof Error) dispatch({ type: BranchActions.GET_BRANCH_ERROR });
    }
  };
