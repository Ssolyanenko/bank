import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PhoneIcon } from 'assets';
import { CONTACTS_URL } from 'constants/requestUrls';
import { Contact } from 'interfaces/contact';
import { requestContacts } from 'services/requestContacts';
import { FOOTER, INDIVIDUAL, SUPPORT } from 'constants/contacts';
import classes from './ContactsInformation.module.scss';

interface Props {
  location: string;
}

export const ContactsInformation: FC<Props> = ({ location }): ReactElement => {
  const { t } = useTranslation();

  const [individual, setIndividual] = useState<Contact>(INDIVIDUAL);
  const [support, setSupport] = useState<Contact>(SUPPORT);

  useEffect(() => {
    requestContacts(CONTACTS_URL, setIndividual, setSupport);
  }, []);

  const getClass = (): string => (location === FOOTER ? classes.contactsFooter : classes.contactsMain);

  const hiddenDescription = (): string => (location === FOOTER ? classes.hidden : classes.description);

  return (
    <div className={getClass()}>
      <div className={classes.individual}>
        <h3 className={classes.title}>{individual.name}</h3>
        <span className={hiddenDescription()}>{individual.description}</span>
        <div className={classes.footerWrapper}>
          <ul className={classes.timeWork}>
            {individual.operationModes.map((time, index) => (
              <li key={time.toString() + index}>{time.toString()}</li>
            ))}
          </ul>
          <div className={classes.phone}>
            <PhoneIcon className={classes.phoneIcon} />
            <div className={classes.local}>
              <span className={classes.localText}>{individual.localPhone}</span>
              <span className={classes.text}>{t('contactsInformation.UKFreeCalls')}</span>
            </div>
            {location !== FOOTER && <PhoneIcon className={classes.phoneIcon} />}
            <div className={classes.international}>
              <span className={classes.internationalText}>{individual.internationalPhone}</span>
              <span className={classes.text}>{t('contactsInformation.internationalCalls')}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.support}>
        <h3 className={classes.title}>{support.name}</h3>
        <span className={hiddenDescription()}>{support.description}</span>
        <div className={classes.footerWrapper}>
          <ul className={classes.timeWork}>
            {support.operationModes.map((time, index) => (
              <li key={time.toString() + index}>{time.toString()}</li>
            ))}
          </ul>
          <div className={classes.phone}>
            <PhoneIcon className={classes.phoneIcon} />
            <div className={classes.local}>
              <span className={classes.localText}>{support.localPhone}</span>
              <span className={classes.text}>{t('contactsInformation.UKFreeCalls')}</span>
            </div>
            {location !== FOOTER && <PhoneIcon className={classes.phoneIcon} />}
            <div className={classes.international}>
              <span className={classes.internationalText}>{support.internationalPhone}</span>
              <span className={classes.text}>{t('contactsInformation.internationalCalls')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
