import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "jquery"
import "popper.js"
import "bootstrap/dist/js/bootstrap"

import $ from "jquery"

import "fullpage.js/dist/jquery.fullpage.css"
import "fullpage.js/dist/jquery.fullpage"

import TopNavbar from "./components/TopNavbar"
import WelcomeHeader from "./components/WelcomeHeader"
import "./App.scss"

const App = () => (
	<div id="fullpage">
		<div className="section">
			<TopNavbar />
			<WelcomeHeader />
		</div>
		<div
			className="section"
			style={{
				height: "100vh",
			}}
		/>
	</div>
)

$(document).ready(() => {
	$("#fullpage").fullpage({
		scrollingSpeed: 1200,
		easing: "easeOutCubic",
		lazyLoading: true,
	})
})

export default App
