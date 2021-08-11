import { TabType } from "./types";

const renderlabel = (type: string) => {
  switch (type) {
    case 'orange':
      return 'On Site';
    default:
      return 'Remoto';
  }
}

const Tab = ({ type }: TabType) => <div className={`fs__tab fs__tab--${type}`}>{renderlabel(type)}</div>

export default Tab;
