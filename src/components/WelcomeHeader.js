import React from "react"

const WelcomeHeader = () => (
	<div className="welcome d-flex align-items-center">
		<div className="welcome-content container d-flex justify-content-center">
			<div className="welcome-caption col-12 col-sm-6">
				<h3 className="text-center">
					<strong>
						Never get bored.
					</strong>
				</h3>
				<p className="text-center">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
				</p>
				<form
					className="d-flex flex-wrap justify-content-center"
					action="#"
				>
					<div className="input-group">
						<input
							className="welcome-search-input form-control"
							type="email"
							placeholder="Search this site"
							aria-label="Search this site"
						/>
						<div className="input-group-append">
							<button
								className="welcome-search-subscribe btn"
								type="submit"
							>
								search
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
)

export default WelcomeHeader
