import PropTypes from "prop-types";
import { Box, Card as MUICard, CardContent, Typography } from "@mui/material";
import Comments from "../Comments";
import "./Card.scss";

const Card = ({ feature }) => {
	return (
		<Box>
			<MUICard variant="outlined" className="feature-card">
				<CardContent>
					<Typography
						variant="h5"
						component="h2"
						className="card-title"
					>
						{feature.attributes.title}
					</Typography>
					<Typography color="textSecondary" className="coordinates">
						Coordenadas: {feature.attributes.coordinates.longitude},{" "}
						{feature.attributes.coordinates.latitude}
					</Typography>
					<Typography variant="body2" component="p">
						Magnitud: {feature.attributes.magnitude}
						<br />
						Longitud: {feature.attributes.coordinates.longitude}
						<br />
						Latitud: {feature.attributes.coordinates.latitude}
						<br />
					</Typography>
					<Comments feature={feature} />
				</CardContent>
			</MUICard>
		</Box>
	);
};

Card.propTypes = {
	feature: PropTypes.shape({
		id: PropTypes.number.isRequired,
		attributes: PropTypes.shape({
			title: PropTypes.string.isRequired,
			magnitude: PropTypes.string.isRequired,
			coordinates: PropTypes.shape({
				longitude: PropTypes.number.isRequired,
				latitude: PropTypes.number.isRequired,
			}).isRequired,
		}).isRequired,
		comments: PropTypes.array,
	}),
};

export default Card;
