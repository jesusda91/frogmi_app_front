import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { selectAllFeatures } from "../../../application/selectors/feature";
import { useEffect } from "react";
import { fetchFeatures } from "../../../application/slices/feature";
import Card from "../../components/Card";
import "./FeatureList.scss";

const FeatureList = () => {
	const dispatch = useDispatch();
	const features = useSelector(selectAllFeatures);

	useEffect(() => {
		dispatch(fetchFeatures());
	}, [dispatch]);

	const handleLoadMore = () => {
		dispatch(fetchFeatures());
	}

	return (
		<>
			<h1>Listado de Features</h1>
			<div className="cards-container">
				{features?.map((feature) => (
					<Card feature={feature} key={feature.id} />
				))}
			</div>
			<Button variant="text" onClick={() => handleLoadMore()}>
				Cargar más
			</Button>
		</>
	);
};

export default FeatureList;
