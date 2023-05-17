export interface TextFieldTemplate {
  wrapperClass?: string;
  labelClassName?: string;
  inputClassName?: string;
  label: string;
  name: string;
  type?: string;
  isDisabled?: boolean;
  children?: HTMLElement;
}
