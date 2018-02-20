import React, { Component } from "react"
import Router from "react-router-dom/BrowserRouter"
import Link from "react-router-dom/Link"

import Drawer from "material-ui/Drawer"
import MenuIcon from "material-ui-icons/Menu"
import IconButton from "material-ui/IconButton"
import CloseIcon from "react-icons/lib/md/close"
import DummyIcon from "react-icons/lib/md/extension"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery"
import "popper.js"
import "bootstrap/dist/js/bootstrap.min"

import logo from "./logotype.svg"

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
		}
	}

	render() {
		const handleDrawerToggle = () => {
			this.setState((prevState, props) => ({ open: !prevState.open }))
		}

		const handleDrawerClose = () => {
			this.setState({ open: false })
		}
		return (
			<Router>
				<div
					className="appbar d-flex justify-content-between align-items-center"
					style={{
						// background: "rgb(60,120,240)",
						// background: "rgb(30,30,30)",
						background: "none",
						// opacity: "0.5",
					}}
				>
					<Link to="/">
						<img
							src={logo}
							alt="logo"
							height="100%"
							className="logo m-3 m-md-4"
						/>
					</Link>
					<Link to="/" onClick={handleDrawerToggle}>
						<MenuIcon
							className="menu m-3 m-md-4"
						/>
					</Link>
					<Drawer
						open={this.state.open}
						onClose={handleDrawerClose}
						anchor={window.innerWidth >= 768 ? "right" : "top"}
					>
						<div
							style={{
								width: "100%",
								height: "150px",
								background: "url('https://source.unsplash.com/3YfSwCfJ6Do/1200x800') no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div className="d-flex justify-content-end">
								<IconButton
									onClick={handleDrawerToggle}
									className="close-drawer"
									style={{
										color: "#fff",
									}}
								>
									<CloseIcon
										className=""
									/>
								</IconButton>
							</div>
						</div>
						<div className="d-flex flex-column">
							<Link
								className="btn menu-item px-3"
								to="/"
								onClick={handleDrawerClose}
							>
								<DummyIcon />
								<span> Category 1</span>
							</Link>
							<Link
								className="btn menu-item px-3"
								to="/"
								onClick={handleDrawerClose}
							>
								<DummyIcon />
								<span> Category 2</span>
							</Link>
							<Link
								className="btn menu-item px-3"
								to="/"
								onClick={handleDrawerClose}
							>
								<DummyIcon />
								<span> Category 3</span>
							</Link>
						</div>
					</Drawer>
				</div>
			</Router>
		)
	}
}
