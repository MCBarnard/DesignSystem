
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        value: '#f1f1f1',
      },
      {
        name: 'Dark',
        value: '#333333',
      },
    ],
  },
}
