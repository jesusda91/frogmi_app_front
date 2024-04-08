import PropTypes from "prop-types";
import Comments from "./Comments";

const Card = ({ feature }) => {


	return (
		<div key={feature.id}>
			<h2>{feature.attributes.title}</h2>
			<p>
				Coordenadas: {feature.attributes.coordinates.longitude},{" "}
				{feature.attributes.coordinates.latitude}
			</p>
			<p>Longitud: {feature.attributes.coordinates.longitude}</p>
			<p>Latitud: {feature.attributes.coordinates.latitude}</p>
			<Comments feature={feature} />

		</div>
	);
};

Card.propTypes = {
	feature: PropTypes.shape({
		id: PropTypes.number.isRequired,
		attributes: PropTypes.shape({
			title: PropTypes.string.isRequired,
			coordinates: PropTypes.shape({
				longitude: PropTypes.number.isRequired,
				latitude: PropTypes.number.isRequired,
			}).isRequired,
		}).isRequired,
		comments: PropTypes.array
	}),
};

export default Card;
