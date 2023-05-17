import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { CreditCards, FeaturedServices, OperationHistory, Rates } from 'components';
import { Block } from 'components/_basic/generic';
import classes from './MainPageContent.module.scss';

export const MainPageContent: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.firstContainer}>
        <div className={classes.wrapperCardsAndHistory}>
          <div className={classes.cards}>
            <Block title={t('mainPageContent.titles.myCards')}>
              <CreditCards />
            </Block>
          </div>
          <div className={classes.operationHistory}>
            <Block title={t('mainPageContent.titles.operationHistory')}>
              <OperationHistory />
            </Block>
          </div>
        </div>
        <div className={classes.exchangeRates}>
          <h2 className={classes.titles}>{t('mainPageContent.titles.exchangeRates')}</h2>
          <div className={classes.ratesWrapper}>
            <Rates />
          </div>
        </div>
      </div>
      <div className={classes.featureServices}>
        <Block title={t('mainPageContent.titles.featureServices')}>
          <FeaturedServices />
        </Block>
      </div>
    </div>
  );
};
