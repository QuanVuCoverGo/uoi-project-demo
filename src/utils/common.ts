import { AREAS_LIST } from "./../constants/index";
export type Area = {
  name: string;
  value: string;
  description: string;
};

export function getAreaDescription(area: "area2" | "area3"): string {
  return AREAS_LIST.find((areaItem: Area) => areaItem.value === area)
    ?.description;
}
export function getFieldName(field: string): string {
  return fieldNames[field] || field;
}

const fieldNames = {
  fullName: "Full name",
  dateOfBirth: "Date Of Birth",
  NRICorPassport: "NRIC or Passport",
  email: "email",
  address: "address",
};
