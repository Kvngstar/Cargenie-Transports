import Subscribe from "./subscribe";

const Footer = () => {
	return (
		<div className="container-fluid greenerbackground pb-4 ralewaymeduim">
			<div
				className="w-100 robotomeduim  footerr  whitetext py-1 container"
				style={{ fontSize: "14px" }}
			>
				<div>
					<div className="mt-3">Visit Help Center</div>
				</div>
				<div className=" my-4 footer-second ">
					<div>
						<h6>Company</h6>

						<ul>
							<li>About Us</li>
							<li>Blog</li>
						</ul>
					</div>
					<div>
						<h6>Products</h6>
						<ul>
							<li>Ride</li>
							<li>invest</li>
						</ul>
					</div>
					<div>
						<h6>Travel</h6>
						<ul>
							<li>Airport</li>
							<li>Events</li>
							<li>Cities</li>
						</ul>
					</div>
				</div>
				<Subscribe />
				<div
					className="d-flex  justify-content-between flex-wrap-reverse align-items-center "
					style={{ fontSize: "12px" }}
				>
					<div className="d-flex  align-items-center">
						<span className="material-symbols-outlined mr-1">copyright</span>
						<span>2022 Devmonk</span>
					</div>
					<div className="d-flex">
						<div className="p-2">Privacy</div>
						<div className="p-2">Acessbility</div>
						<div className="p-2">Terms</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
