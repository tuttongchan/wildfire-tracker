import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import LocationInfoBox from './LocationInfoBox';

const Sidebar = ({ info }) => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-heading">
        <Icon icon={locationIcon} /> Wildfire Tracker{' '}
      </h1>
      <div>
        <LocationInfoBox info={LocationInfoBox} />
      </div>
    </div>
  );
};

export default Sidebar;
