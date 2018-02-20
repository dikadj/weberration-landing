import React from "react"
import Router from "react-router-dom/BrowserRouter"
import Link from "react-router-dom/Link"

import $ from "jquery"

import TogglerIcon from "react-icons/lib/md/menu"
import TogglerCollapseIcon from "react-icons/lib/md/clear"
import SearchIcon from "react-icons/lib/md/search"

import logo from "./logotype.svg"

import "./TopNavbarB.scss"

const TogglerDropdown = () => {
	$(".navbar-toggler-icon > div.navbar-toggle-control")
		.toggleClass("navbar-toggle-hidden navbar-toggle-active")

	$(".navbar-toggler-icon > div.navbar-toggle-control").css({
		transition: "display 1s",
	})
}

const TopNavbar = () => (
	<div
		className="top-navbar position-fixed w-100"
		style={{
			zIndex: "2001",
			color: "#fff",
			background: "rgb(30,30,30)",
		}}
	>
		<Router>
			<div>
				<nav className="navbar navbar-expand-lg">
					<Link
						to="/"
						className="navbar-brand logo"
					>
						<img
							src={logo}
							className="logo-img"
							alt="logo"
							style={{
								height: "16px",
							}}
						/>
					</Link>
					<button
						className="navbar-toggler p-0"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={TogglerDropdown}
					>
						<span className="navbar-toggler-icon d-flex justify-content-center">
							<div className="navbar-toggle-control navbar-toggle-active pt-1">
								<TogglerIcon />
							</div>
							<div className="navbar-toggle-control navbar-toggle-hidden pt-1">
								<TogglerCollapseIcon />
							</div>
						</span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul
							className="navbar-nav px-2 pt-lg-2 d-flex justify-content-end"
						>
							<li className="nav-item active">
								<a href="/" className="nav-link">
									<span className="sr-only">
										(current)
									</span>
								</a>
							</li>
							<li className="nav-item rounded">
								<Link
									to="/category-1"
									className="nav-link menu-item-custom text-center text-sm-left ml-sm-2 mx-lg-2"
								>
                  Category 1
								</Link>
							</li>
							<li className="nav-item rounded">
								<Link
									to="/"
									className="nav-link menu-item-custom text-center text-sm-left ml-sm-2 mx-lg-2"
								>
                  Category 2
								</Link>
							</li>
							<li className="nav-item rounded">
								<Link
									to="/"
									className="nav-link menu-item-custom text-center text-sm-left ml-sm-2 mx-lg-2"
								>
                  Category 3
								</Link>
							</li>
						</ul>
						<form className="form-inline form-custom menu-item-custom p-2 p-lg-0 ml-lg-auto">
							<div className="input-group rounded mr-auto">
								<input
									className="form-control input-custom rounded-left"
									type="text"
									placeholder="Search"
									aria-label="Search"
								/>
								<button
									className="form-btn input-group-btn submit-custom rounded-right"
									type="submit"
								>
									<SearchIcon />
								</button>
							</div>
						</form>
					</div>
				</nav>
			</div>
		</Router>
	</div>
)

export default TopNavbar
