import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PrimaryButton, CardTemplate } from 'components/_basic';
import { RoutingPaths } from 'constants/routingPaths';
import { UserCard } from 'interfaces/myCard';
import { ACTIVE_STATUS, BLOCKED_STATUS } from 'constants/text';
import classes from './MyCards.module.scss';

interface Props {
  myCardsList: UserCard[];
}

export const MyCards: FC<Props> = ({ myCardsList }): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ul className={classes.myCardsBlock}>
      {myCardsList.map(
        ({
          id,
          cardProductName,
          cardExpirationDate,
          formattedAmount,
          currency,
          cardNumber,
          paymentSystem,
          cvv,
          isActive,
          isBlocked,
        }): ReactElement => (
          <li key={cardNumber} className={classes.cardWrapper}>
            <CardTemplate
              id={id}
              cardProductName={cardProductName}
              formattedAmount={formattedAmount}
              cardDate={cardExpirationDate}
              paymentSystem={paymentSystem}
              cardNumber={cardNumber}
              currency={currency}
              cvv={cvv}
            />
            <div className={classes.cardInfo}>
              <h3 className={classes.cardTitle}>{cardProductName}</h3>
              <div className={classes.statusContainer}>
                {isActive && !isBlocked ? (
                  <span className={`${classes.statusIndents} ${classes.active}`}> {ACTIVE_STATUS} </span>
                ) : (
                  <span className={`${classes.statusIndents} ${classes.blocked}`}> {BLOCKED_STATUS} </span>
                )}
              </div>
              <div className={classes.cardDetailsButtonWrapper}>
                <PrimaryButton
                  className={classes.cardDetailsButton}
                  onClick={(): void => navigate(`${id}/${RoutingPaths.CARD_DETAILS}`)}
                >
                  {t('buttonNames.cardDetails')}
                </PrimaryButton>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
