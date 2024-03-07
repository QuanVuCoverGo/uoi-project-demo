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
