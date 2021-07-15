import { Link } from "react-router-dom";
import logo from "../images/russian-house.jpeg";
import daisy from "../images/daisy.jpeg";
function Navbar() {
	return (
		<div className="navbar">
			<div className="mobile-wrapper">
				<div>
					<a className="link-logo" href="https://isr.rs.gov.ru/ru">
						<img className="logo" src={logo} />
					</a>
				</div>
				<div className="mobile-logo">
					<a className="link-logo" href="https://densemyi.ru">
						<img className="logo" src={daisy} />
					</a>
				</div>
			</div>
			<div className="links">
				<Link
					to={{
						pathname: "/",
					}}
					style={{ textDecoration: "none" }}
					className="nav-item"
				>
					О конкурсе
					<br /> About the contest
				</Link>
				<Link
					to={{
						pathname: "/rules",
					}}
					style={{ textDecoration: "none" }}
					className="nav-item"
				>
					Правила проведения конкурса
					<br /> Rules of the contest
				</Link>
				<Link
					to={{
						pathname: "/bench",
					}}
					style={{ textDecoration: "none" }}
					className="nav-item"
				>
					Эскиз скамейки <br /> Bench sketch
				</Link>
				<Link
					to={{
						pathname: "/form",
					}}
					style={{ textDecoration: "none" }}
					className="nav-item"
				>
					Принять участие
					<br /> Become a participant
				</Link>
			</div>
			<div className="desktop-logo">
				<a href="https://densemyi.ru">
					<img className="logo" src={daisy} />
				</a>
			</div>
		</div>
	);
}

export default Navbar;
