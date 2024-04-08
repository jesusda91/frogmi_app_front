import { useDispatch, useSelector } from "react-redux";
import { selectAllFeatures } from "../../../application/selectors/feature";
import { useEffect, useState } from "react";
import { fetchFeatures } from "../../../application/slices/feature";
import './FeatureList.scss'
import Card from "../../components/Card";

const FeatureList = () => {
	const dispatch = useDispatch();
	const features = useSelector(selectAllFeatures);

	useEffect(() => {
		dispatch(fetchFeatures());
	}, [dispatch]);

	return (
		<div>
			<h1>Listado de Features</h1>
			{features?.map((feature) => (
				<Card feature={feature} key={feature.id} />
			))}
		</div>
	);
};

export default FeatureList;
