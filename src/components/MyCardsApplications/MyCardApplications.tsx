import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { ApplicationStatus, InformationBlock } from 'components';
import { CardApplicationsList } from 'interfaces/application';
import classes from './MyCardApplications.module.scss';

export const MyCardApplications: FC<CardApplicationsList> = ({ cardApplicationsList }): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.pageTitle}>{t('myCardApplications.pageTitle')}</h2>
      {cardApplicationsList.length > 0 ? (
        <ul className={classes.cardApplicationsList}>
          {cardApplicationsList.map(
            ({ id, userCardId, createAt, cardProductName, deliveryStatus, deliveryType }): ReactElement => (
              <li key={id} className={classes.cardApplication}>
                <div className={`${classes.applicationInfo} ${classes.fixedWidth}`}>
                  <span className={classes.applicationMethod}>{deliveryType}</span>
                  <span className={classes.applicationCardType}>{cardProductName}</span>
                </div>
                <div className={`${classes.applicationInfo} ${classes.textAlignCenter}`}>
                  <span className={classes.applicationMethod}>{t('myCardApplications.submissionDate')}:</span>
                  <span className={classes.applicationCardType}>{createAt}</span>
                </div>
                <ApplicationStatus status={deliveryStatus} cardId={userCardId} />
              </li>
            )
          )}
        </ul>
      ) : (
        <InformationBlock>{t('myCardApplications.noApplicationMessage')}</InformationBlock>
      )}
    </div>
  );
};
