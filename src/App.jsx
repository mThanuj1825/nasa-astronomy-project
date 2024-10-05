import { useEffect, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";
import { SideBar } from "./components/SideBar.jsx";

export default function App() {
	const [data, setData] = useState(null);
	const [showSidebar, setShowSidebar] = useState(false);
	
	function handleToggleSidebar() {
		setShowSidebar(!showSidebar);
	}
	
	useEffect(() => {
		async function fetchAPIData() {
			const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
			const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${ NASA_KEY }`;
			
			const today = (new Date()).toDateString();
			const localKey = `NASA-${ today }`;
			
			if (localStorage.getItem(localKey)) {
				const apiData = JSON.parse(localStorage.getItem(localKey));
				setData(apiData);
				console.log("Fetched from cache today");
				return;
			}
			localStorage.clear();
			
			try {
				const response = await fetch(url);
				const apiData = await response.json();
				
				localStorage.setItem(localKey, JSON.stringify(apiData));
				
				setData(apiData);
				console.log("Fetched from api today");
			} catch (err) {
				console.log(err.message);
			}
		}
		
		fetchAPIData();
	}, []);
	
	return (
		<>
			{ data ? (<Main data={ data } />) : (
				<div className={ "loadingState" }>
					<i className="fa-solid fa-gear"></i>
				</div>
			) }
			{ showSidebar && <SideBar data={ data } handleToggleSidebar={ handleToggleSidebar } /> }
			{ data && (<Footer data={ data } handleToggleSidebar={ handleToggleSidebar } />) }
		</>
	);
}