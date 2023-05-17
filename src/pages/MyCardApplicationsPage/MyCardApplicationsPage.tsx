import React, { FC, ReactElement, useEffect } from 'react';

import { MyCardApplications } from 'components';
import { CardApplication } from 'interfaces/application';
import { useTypedSelector, useTypedDispatch } from 'hooks';
import { getCardsApplications, requestUserCardApplications } from 'store';

export const MyCardApplicationsPage: FC = (): ReactElement => {
  const dispatch = useTypedDispatch();
  const cardApplications: CardApplication[] = useTypedSelector(getCardsApplications);

  useEffect(() => {
    dispatch(requestUserCardApplications());
  }, [dispatch]);

  return <MyCardApplications cardApplicationsList={cardApplications} />;
};
