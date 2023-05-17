import { FC, ReactElement, SyntheticEvent, useState } from 'react';
import { Accordion as AccordionMUI, AccordionDetails, AccordionSummary } from '@mui/material';

import { ArrowDownIcon } from 'assets';
import { TransferAccordionSummary } from 'components';
import { TransferAccordion } from 'interfaces/transferPage';
import { EXPANDED } from 'constants/text';
import classes from './Accordion.module.scss';

interface Props {
  accordionList: TransferAccordion[];
}

export const Accordion: FC<Props> = ({ accordionList }): ReactElement => {
  const [expandedTab, setExpandedTab] = useState<string | boolean>(false);

  const handleAccordionChange =
    (panel: string): ((event: SyntheticEvent, isExpanded: boolean) => void) =>
    (event: SyntheticEvent, isExpanded: boolean): void => {
      setExpandedTab(isExpanded ? panel : false);
    };

  return (
    <ul className={classes.accordionList}>
      {accordionList.map(
        ({ id, summary, content }): ReactElement => (
          <li className={classes.accordionListItem} key={id}>
            <AccordionMUI
              className={classes.accordion}
              expanded={expandedTab === id}
              onChange={handleAccordionChange(id)}
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionSummary
                className={`${classes.accordionSummary} ${classes[expandedTab === id ? EXPANDED : '']}`}
                expandIcon={<ArrowDownIcon className={classes.icon} />}
              >
                <TransferAccordionSummary icon={summary.icon} title={summary.title} details={summary.details} />
              </AccordionSummary>
              <AccordionDetails>{content}</AccordionDetails>
            </AccordionMUI>
          </li>
        )
      )}
    </ul>
  );
};
