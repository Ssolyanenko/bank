import { FC, ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { MyCards, InformationBlock } from 'components';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { getUserCards, requestUserCards } from 'store';
import { GET_USER_CARDS_URL } from 'constants/requestUrls';
import classes from './MyCardsPage.module.scss';

export const MyCardsPage: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();
  const cards = useTypedSelector(getUserCards);

  useEffect((): void => {
    dispatch(requestUserCards(GET_USER_CARDS_URL));
  }, [dispatch]);

  const renderCards = (): ReactElement => {
    if (!cards.length) {
      return <InformationBlock>{t('myCardsPage.noCards')}</InformationBlock>;
    }

    return <MyCards myCardsList={cards} />;
  };

  return (
    <div className={classes.myCardsWrapper}>
      <h2 className={classes.pageTitle}>{t('myCardsPage.title')}</h2>
      {renderCards()}
    </div>
  );
};
