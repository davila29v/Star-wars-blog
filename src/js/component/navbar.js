import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const deleteFav = (e, url) => {
		e.stopPropagation();
		e.preventDefault();
		actions.deleteFav(url);
	};

	const showFavs = () => {
		return store.favs.map((item, index) => {
			return (
				<Link to={item.url} className="dropdown-item" key={index}>
					{item.label}
					<i
						className="fas fa-trash float-right"
						onClick={e => {
							deleteFav(e, item.url);
						}}
					/>
				</Link>
			);
		});
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown dropdown-menu-right">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites <span className="badge badge-light">{store.favs.length}</span>
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							{showFavs()}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
