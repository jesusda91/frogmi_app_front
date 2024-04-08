import { useDispatch, useSelector } from "react-redux";
import { selectAllFeatures } from "../../../application/selectors/feature";
import { useEffect, useState } from "react";
import { fetchFeatures } from "../../../application/slices/feature";
import './FeatureList.scss'

const FeatureList = () => {
	const dispatch = useDispatch();
	const features = useSelector(selectAllFeatures);
	const [comment, setComment] = useState("");

	console.log('features', features)

	useEffect(() => {
		dispatch(fetchFeatures());
	}, [dispatch]);

	const handleCommentChange = (event) => {
		setComment(event.target.value);
	};

	const handleCommentSubmit = (featureId) => {
		// Aquí puedes enviar el comentario al backend, asociado al featureId
		console.log(`Comentario enviado para el feature ${featureId}: ${comment}`);
		// Limpia el campo de comentario después de enviar
		setComment('');
	};

	return (
		<div>
			<h1>Listado de Features</h1>
			{features?.map((feature) => (
				<div key={feature.id}>
					<h2>{feature.attributes.title}</h2>
					<p>Coordenadas: {feature.attributes.coordinates.longitude}, {feature.attributes.coordinates.latitude}</p>
					<p>Longitud: {feature.attributes.coordinates.longitude}</p>
					<p>Latitud: {feature.attributes.coordinates.latitude}</p>
					<h3>Comentarios</h3>
					{feature?.comments?.map((comment) => (
						<p key={comment.id}>{comment.body}</p>
					))}
					<input
						type="text"
						value={comment}
						onChange={handleCommentChange}
						placeholder="Escribe un comentario..."
					/>
					<button onClick={() => handleCommentSubmit(feature.id)}>
						Enviar comentario
					</button>
				</div>
			))}
		</div>
	);
};

export default FeatureList;
