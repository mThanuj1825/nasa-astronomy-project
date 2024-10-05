import PropTypes from "prop-types";

export function Main({ data }) {
	return (
		<div className={ "imageContainer" }>
			<img src={ data?.hdurl } alt={ data?.title || "bg-img" } className={ "bgImage" } />
		</div>
	);
}

Main.propTypes = {
	data: PropTypes.shape({
		hdurl: PropTypes.string,
		title: PropTypes.string,
	}),
};