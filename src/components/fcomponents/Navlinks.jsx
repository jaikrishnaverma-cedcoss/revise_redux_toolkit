import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { rt } from "../../App";
const Navlinks = () => {
	const location = useLocation();
	return (
		<div>
			<div className="container  mt-4">
				<nav aria-label="breadcrumb">
					<ol className={`breadcrumb `}>
						{rt.map((p) => {
							console.log({ pathname: location.pathname, p });
							return (
								<li key={p.path} className={`breadcrumb-item me-2  ms-1`}>
									<a
										className={`${
											location.pathname == "/" + p.path ? "text-secondary" : ""
										} `}
										href={p.path}
									>
										{p.path}
									</a>
								</li>
							);
						})}
					</ol>
				</nav>
			</div>
			<Outlet />
		</div>
	);
};

export default Navlinks;
