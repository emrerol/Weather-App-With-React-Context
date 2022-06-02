import "../styles/weathercard.styles.css";

const WeatherCard = ({ weathers }) => {
  return (
    <div className="card">
      <div>
        <img
          className="rotate"
          src="https://img.icons8.com/doodle/48/undefined/sun--v1.png"
        />
      </div>
      <div className="data-container">
        <p className="data">Date</p>
        <p className="data">Degree</p>
      </div>
    </div>
  );
};

export default WeatherCard;
