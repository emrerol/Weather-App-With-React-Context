import "../styles/weathercard.styles.css";

const WeatherCard = ({ date, degree, icon, status }) => {
  return (
    <div className="card">
      <div className="data-container">
        <div className="info-holder">
          <img className="rotate" src={icon} />
        </div>
        <div className="info-holder">
          <p className="data">{status}</p>
        </div>
        <div className="info-holder">
          <label>Date: </label>
          <p className="data">{date}</p>
        </div>
        <div className="info-holder">
          <label>Degree:</label>
          <p className="data">{degree} °C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
