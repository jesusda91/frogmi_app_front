import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { CardActions, TextField, Button } from "@mui/material";
import { createComment } from "../../../application/slices/feature";

const Comments = ({ feature }) => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState("");

	const handleCommentChange = (event) => {
		setComment(event.target.value);
	};

	const handleCommentSubmit = async () => {
		await dispatch(createComment({ featureId: feature.id, body: comment }));
		setComment("");
	};

	return (
		<>
			<h3>Comentarios</h3>
			{feature?.comments?.map((comment) => (
				<p key={comment.id}>{comment.body}</p>
			))}
			<CardActions>
				<TextField
 					variant="standard"
					type="text"
					value={comment}
					onChange={handleCommentChange}
					placeholder="Escribe un comentario..."
				/>
				<Button variant="text" onClick={() => handleCommentSubmit()}>
					Enviar
				</Button>
			</CardActions>
		</>
	);
};

Comments.propTypes = {
	feature: PropTypes.shape({
		id: PropTypes.number.isRequired,
		comments: PropTypes.array,
	}),
};

export default Comments;
