export const getCorporateName = name => {
  let label;

  switch (name) {
    case 'meli':
      label = "Mercado Libre";
      break;
    case 'serfe':
      label = "Serfe";
      break;
    default:
      break;
  }

  return label;
};
