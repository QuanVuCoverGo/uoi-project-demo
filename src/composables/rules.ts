export const emailRules = [
  (value: any) => {
    if (value) return true;

    return "E-mail is required.";
  },
  (value: any) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "E-mail must be valid.";
  },
];

export const getRequiredRules = (fieldName: string) => {
  return [
    (value: any) => {
      if (value) return true;

      return fieldName + " is required.";
    },
  ];
};

export const cardNumberRules = [
  (value: any) => {
    if (value) return true;

    return "Card number is required.";
  },
];

export const validThruRules = [
  (value: any) => {
    if (value) return true;

    return "Valid thru  is required.";
  },
  (value: any) => {
    if (/^(0[1-9]|1[0-2])\/([2-9][0-9]{3})$/.test(value)) return true;

    return "Valid thru must be valid.";
  },
];

export const fullNameRules = [
  (value: any) => {
    if (value) return true;

    return "Full name  is required.";
  },
  (value: any) => {
    if (/^[a-zA-Z]+(?: [a-zA-Z]+)* [a-zA-Z]+(?: [a-zA-Z]+)*$/.test(value))
      return true;

    return "Full name must have at lest two word";
  },
];
