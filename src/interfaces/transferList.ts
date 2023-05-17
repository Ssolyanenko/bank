export interface TransferAccordionSummary {
  icon: JSX.Element;
  title: string;
  details?: string;
}

export interface TransferAccordion {
  id: string;
  summary: TransferAccordionSummary;
  content: JSX.Element;
}
