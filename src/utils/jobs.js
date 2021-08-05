import serfe from '../Assets/serfe-logo.png';
import meli from '../Assets/meli-logo.png';
import def from '../Assets/default-image.png';
import syloper from '../Assets/sysloper.png';

export const getCorporateName = name => {
  let label;

  switch (name) {
    case 'meli':
      label = "Mercado Libre";
      break;
    case 'serfe':
      label = "Serfe";
      break;
    case 'syloper':
      label = "Syloper";
      break;
    default:
      break;
  }

  return label;
};

export const getCorporateLogo = (id) => {
  switch (id) {
    case 'meli':
      return <img src={meli} alt="Mercado Libre" />;
    case 'serfe':
      return <img src={serfe} alt="Serfe" />;
    case 'syloper':
      return <img src={syloper} alt="Serfe" />;
    default:
      return <img src={def} alt="Default" />;
  }
}
