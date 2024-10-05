import PropTypes from "prop-types";

export function Footer({ handleToggleSidebar, data }) {
	return (
		<footer>
			<div className={ "bgGradient" }></div>
			<div>
				<h2>APOD PROJECT</h2>
				<h1>{ data?.title }</h1>
			</div>
			<button onClick={ handleToggleSidebar }>
				<i className="fa-solid fa-circle-info"></i>
			</button>
		</footer>
	);
}

Footer.propTypes = {
	handleToggleSidebar: PropTypes.func.isRequired,
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}),
};