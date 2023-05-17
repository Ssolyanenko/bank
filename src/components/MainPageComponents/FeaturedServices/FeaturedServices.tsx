import React, { FC, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18next from 'i18n';
import { CurrencyExchangeIcon, PhoneIcon, TransferToCardIcon, UtilitiesIcon } from 'assets';
import { ResponseModal } from 'components/ResponseModal';
import { PENDING_MODAL_CONTENT } from 'constants/modalWindow';
import { Services } from 'interfaces/featuredServices';
import { PENDING } from 'constants/text';
import colors from 'styles/variables.module.scss';
import classes from './FeaturedServices.module.scss';

const SERVICES_INITIAL: Services[] = [
  {
    icon: <PhoneIcon className={classes.icon} color={colors.grayDark_8} />,
    text: i18next.t('featuredServices.phoneRecharge'),
  },
  {
    icon: <TransferToCardIcon className={classes.icon} color={colors.grayDark_8} />,
    text: i18next.t('featuredServices.transferToCard'),
  },
  {
    icon: <UtilitiesIcon className={classes.icon} color={colors.grayDark_8} />,
    text: i18next.t('featuredServices.utilities'),
  },
  {
    icon: <CurrencyExchangeIcon className={classes.icon} color={colors.grayDark_8} />,
    text: i18next.t('featuredServices.currencyExchange'),
  },
];

export const FeaturedServices: FC = (): ReactElement => {
  const { t } = useTranslation();

  const [services, setServices] = useState(SERVICES_INITIAL);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const addServices = (): void => {
    // toDo Create new service and add to services
    setServices([...services]);
    setIsModalOpened(true);
  };

  const pendingModalChild = (
    <>
      {PENDING_MODAL_CONTENT.map(
        (text: string): ReactElement => (
          <p className={classes.pendingModalText} key={text}>
            {text}
          </p>
        )
      )}
    </>
  );

  return (
    <>
      <ul className={classes.featuredServices}>
        {services.map(
          ({ text, icon }: Services, index: number): ReactElement => (
            <li className={classes.service} key={text + index}>
              <div className={classes.iconContainer}>{icon}</div>
              <div className={classes.text}>{text}</div>
            </li>
          )
        )}
        <li role="presentation" className={classes.service} onClick={addServices}>
          <span className={classes.add}>+</span>
          <span className={classes.text}>{t('featuredServices.add')}</span>
        </li>
      </ul>
      <ResponseModal
        isOpened={isModalOpened}
        modalCloseHandler={(): void => setIsModalOpened(false)}
        status={PENDING}
        content={pendingModalChild}
      />
    </>
  );
};
