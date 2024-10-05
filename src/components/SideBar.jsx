import PropTypes from "prop-types";

export function SideBar({ handleToggleSidebar, data }) {
	return (
		<div className="sidebar">
			<div onClick={ handleToggleSidebar } className={ "bgOverlay" }></div>
			<div className={ "sidebarContents" }>
				<h2>{ data?.title }</h2>
				<div className={ "descriptionContainer" }>
					<p className={ "descriptionTitle" }>{ data?.date }</p>
					<p>{ data?.explanation }</p>
				</div>
				<button onClick={ handleToggleSidebar }>
					<i className="fa-solid fa-arrow-right"></i>
				</button>
			</div>
		</div>
	);
}

SideBar.propTypes = {
	handleToggleSidebar: PropTypes.func.isRequired,
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		explanation: PropTypes.string,
		date: PropTypes.string,
	}),
};