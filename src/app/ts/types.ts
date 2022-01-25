type FormField = {
  accessor: string;
  value: string;
  isValid: boolean;
  type: string;
  label: string;
  pattern?: RegExp;
};

type Form = FormField[];

type FormInputChangeEventValues = {
  value: string;
  accessor?: string;
  isValid: boolean;
};

type Product = {
  label: string;
  price: number;
};
