import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import telAviv from "../images/iriya-tel-aviv.jpeg";
import netaniya from "../images/nataniya.jpeg";
import haifa from "../images/haifa.jpeg";
import artistUnion from "../images/artist-union.jpeg";
function Home() {
	const [mapSrc, setMapSrc] = useState(
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0749712809434!2d34.77580681554478!3d32.067220927142316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7e9e3887f9%3A0x2a21f70d8eb9ed47!2sRothschild%20Blvd%2094%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1626339458770!5m2!1sen!2sil"
	);
	function changeLocation(event) {
		setMapSrc(event.target.value);
	}
	return (
		<div className="Home">
			<h1>
				Осторожно, окрашено в любовь!
				<br />
				Caution, painted in love!
			</h1>
			<div className="main-article">
				{/* <div>
					<img className="daisy" src={daisy} />
				</div> */}
				<div className="main-text article">
					В честь Дня любви, семьи и верности и еврейского праздника любви Ту
					бе-Ав Русский дом в Тель-Авиве анонсирует проведение художественного
					флешмоба-конкурса на лучший эскиз раскрашивания скамейки в одном из
					центральных мест Тель-Авива, Нетании и Хайфы.
					<br />
					Победитель конкурса получит возможность воплотить свою художественную
					идею в жизнь с помощью профессиональных художников. Скамейка
					победителя станет оригинальным арт-объектом, возле которого можно
					будет сделать памятные фото в течение нескольких недель.
					<br />
					Конкурс проводится совместно с Объединением профессиональных
					художников Израиля при поддержке городских муниципалитетов.
				</div>
			</div>
			<h2>
				Наши скамейки:
				<br /> Our benches:
			</h2>
			<div className="map-wrapper">
				<div className="map-area">
					<select
						name="locations"
						id="locations"
						onChange={changeLocation}
						value={mapSrc}
					>
						<option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0749712809434!2d34.77580681554478!3d32.067220927142316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7e9e3887f9%3A0x2a21f70d8eb9ed47!2sRothschild%20Blvd%2094%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1626339458770!5m2!1sen!2sil">
							Тель-Авив / Tel Aviv
						</option>
						<option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.9225362374764!2d34.85287934420261!3d32.34078909100953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d6ab0e8d0311b%3A0x7a0a5b0924e88ae7!2sNitsa%20Blvd%2026%2C%20Netanya!5e0!3m2!1sen!2sil!4v1626347648715!5m2!1sen!2sil">
							Нетания / Netanya
						</option>
						<option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.1059992511323!2d34.990372215557294!3d32.815956289305255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dbbb4faed49cd%3A0x5881a7815b4a1bba!2sHaGefen%20St%202%2C%20Haifa!5e0!3m2!1sen!2sil!4v1626339595436!5m2!1sen!2sil">
							Хайфа / Haifa
						</option>
					</select>
					<iframe
						className="map"
						src={mapSrc}
						width="600"
						height="450"
						frameBorder="0"
						style={{ border: 0 }}
						allowFullScreen=""
						aria-hidden="false"
						tabIndex="0"
					/>
					<Link
						to={{
							pathname: "/form",
						}}
						style={{ textDecoration: "none" }}
						className="button"
					>
						Принять участие <br /> Become a participant
					</Link>
				</div>
				<div className="partner-wrapper">
					<div className="partner-subwrapper">
						<img className="partner-logo-tlv" src={telAviv} />
						<img className="partner-logo-ntn" src={netaniya} />
					</div>
					<div className="partner-subwrapper">
						<img className="partner-logo" src={haifa} />
						<img className="partner-logo" src={artistUnion} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
