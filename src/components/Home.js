import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import daisy from "../images/daisy.jpeg";
function Home() {
	const [mapSrc, setMapSrc] = useState(
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0749712809434!2d34.77580681554478!3d32.067220927142316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7e9e3887f9%3A0x2a21f70d8eb9ed47!2sRothschild%20Blvd%2094%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1626339458770!5m2!1sen!2sil"
	);
	function changeLocation(event) {
		setMapSrc(event.target.value);
	}
	return (
		<div className="Home">
			<h1>Осторожно, окрашено в любовь!</h1>
			<div className="main-article">
				{/* <div>
					<img className="daisy" src={daisy} />
				</div> */}
				<div className="main-text article">
					В честь Дня любви, семьи и верности и еврейского праздника любви Ту
					бе-Ав Русский дом в Тель-Авиве анонсирует проведение художественного
					флешмоба-конкурса на лучший эскиз раскрашивания скамейки в одном из
					центральных мест Тель-Авива, Нетании и других городов Израиля.
					<br />
					Победитель конкурса получит возможность воплотить свою художественную
					идею в жизнь с помощью профессиональных художников. Скамейка
					победителя станет оригинальным арт-объектом, возле которого можно
					будет сделать памятные фото в течение нескольких недель.
					<br />
					Конкурс проводится совместно с Объединением профессиональных
					художников Израиля при поддержке городских муниципалитетов. Положение
					конкурса и другие подробности будут опубликованы в ближайшее время.
					Следите за нашими сообщениями в{" "}
					<a
						className="nav-item"
						href="https://www.facebook.com/russianhouse.tlv/"
					>
						социальных сетях.
					</a>
				</div>
			</div>
			<h2>Наши скамейки:</h2>
			<div className="map-area">
				<select
					name="locations"
					id="locations"
					onChange={changeLocation}
					value={mapSrc}
				>
					<option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0749712809434!2d34.77580681554478!3d32.067220927142316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7e9e3887f9%3A0x2a21f70d8eb9ed47!2sRothschild%20Blvd%2094%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1626339458770!5m2!1sen!2sil">
						Тель-Авив
					</option>
					<option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4010.473701395956!2d34.84660557735654!3d32.30129502829056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4068fecd0019%3A0xa9f4b3bc4f20a5fa!2sVictory%20Monument!5e0!3m2!1sen!2sil!4v1626116669820!5m2!1sen!2sil">
						Натания
					</option>
					<option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.1059992511323!2d34.990372215557294!3d32.815956289305255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dbbb4faed49cd%3A0x5881a7815b4a1bba!2sHaGefen%20St%202%2C%20Haifa!5e0!3m2!1sen!2sil!4v1626339595436!5m2!1sen!2sil">
						Хайфа
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
					Принять участие
				</Link>
			</div>
		</div>
	);
}

export default Home;
