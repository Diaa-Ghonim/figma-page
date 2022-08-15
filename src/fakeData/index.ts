export const checkboxes = [
  {
    text: "Land Boundaries",
    layersCheckboxes: [
      {
        text: "Qutar",
      },
      {
        text: "Kuwait",
      },
      {
        text: "Yamen",
      },
      {
        text: "Jordan",
      },
      {
        text: "UAE",
      },
    ],
  },
  {
    text: "Maritime",
  },
];

export const layers = [
  {
    text: "National Boundaries",
  },
  {
    text: "International Border",
    checkboxes,
  },
  {
    text: "Topographic",
  },
  {
    text: "Orthophoto",
  },
  {
    text: "Site Inspection",
  },
];

export const bordersData = [
  {
    range: 50,
    description: `Reference point for the international border. Officially the
              kingdom of saudi arabia (KSA) is a country on the arabian
              peninsula in western asia.`,
    headText: "KSA-Qatar point ref border",
  },
  {
    range: 60,
    headText: "Province boundaries",
  },
  {
    range: 30,
    headText: "KSA-Qatar line border",
  },
];
