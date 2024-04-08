import { useState } from 'react'
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types'
import { createComment } from '../../application/slices/feature';

const Comments = ({feature}) => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState('');

	const handleCommentChange = (event) => {
		setComment(event.target.value);
	};

	const handleCommentSubmit = async () => {
		await dispatch(createComment({featureId: feature.id, body: comment}));
		setComment('')
	};

  return (
	<>
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
		<button onClick={() => handleCommentSubmit()}>
			Enviar comentario
		</button>
	</>
  )
}

Comments.propTypes = {
	feature: PropTypes.shape({
		id: PropTypes.number.isRequired,
		comments: PropTypes.array
	}),
};

export default Comments