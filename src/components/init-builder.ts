import CardItem from "./CardItem.vue";
import TravelForms from "./TravelForms.vue";
import Header from "./Header.vue";
import VTextInput from "./VTextInput.vue";
import VSelectInput from "./VSelectInput.vue";
import VDateInput from "./VDateInput.vue";
import VText from "./VText.vue";
import VGroupItems from "./VGroupItems.vue";
import TypeInsurance from "./TypeInsurance.vue";
import VCountInput from "./VCountInput.vue";

export const registeredComponents = [
  {
    component: TravelForms,
    name: "TravelForms",
  },
  {
    component: VTextInput,
    name: "VTextInput",
    inputs: [
      {
        name: "customCss",
        type: "string",
      },
      {
        name: "label",
        type: "string",
      },
    ],
  },
  {
    component: VText,
    name: "VText",
    inputs: [
      {
        name: "text",
        type: "longText",
      },
    ],
  },
  {
    component: VGroupItems,
    name: "VGroupItems",
    inputs: [
      {
        name: "label",
        type: "string",
      },
    ],
  },
  {
    component: TypeInsurance,
    name: "TypeInsurance",
    inputs: [
      {
        name: "label",
        type: "string",
      },
    ],
  },
  {
    component: VCountInput,
    name: "VCountInput",
    inputs: [
      {
        name: "label",
        type: "string",
      },
    ],
  },
  {
    component: VDateInput,
    name: "Date input",
    inputs: [
      {
        name: "customCss",
        type: "string",
      },
      {
        name: "label",
        type: "string",
      },
    ],
  },
  {
    component: VSelectInput,
    name: "VSelectInput",
    inputs: [
      {
        name: "customCss",
        type: "string",
      },
      {
        name: "helper",
        type: "string",
      },
      {
        name: "label",
        type: "string",
      },
    ],
  },
  {
    component: CardItem,
    name: "VCard",
    canHaveChildren: true,
    inputs: [
      {
        name: "customCss",
        type: "string",
      },
      {
        name: "width",
        type: "number",
      },
      {
        name: "height",
        type: "number",
      },
    ],
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Text",
          options: { text: "I am child text block!" },
        },
      },
    ],
  },
  {
    component: Header,
    name: "Header",
    inputs: [
      {
        name: "customCss",
        type: "string",
      },
      {
        name: "titleStepOne",
        type: "string",
      },
      {
        name: "titleStepTwo",
        type: "string",
      },
      {
        name: "titleStepThree",
        type: "string",
      },
    ],
  },
];
