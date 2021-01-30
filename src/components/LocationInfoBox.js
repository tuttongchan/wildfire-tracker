const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>🔥 WILDFIRE INFO 🧯</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          NAME: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
