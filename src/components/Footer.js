function Footer() {
	return (
		<div className="footer">
			<div className="footer-1">
				<div>
					<i class="far fa-copyright"></i>Российский культурный центр в
					Тель-Авиве <br />
					<i class="far fa-copyright"></i>
					Russian cultural center in Tel Aviv
				</div>
				<div>
					<i class="fas fa-map-marker-alt"></i>Израиль, 6330440, г. Тель-Авив,
					ул. Геула, д. 38
					<br />
					<i class="fas fa-map-marker-alt"></i> Israel, 6330440, Tel Aviv, Geula
					St., 38
				</div>
				<div>
					<a
						style={{ textDecoration: "none", color: "#012f6a" }}
						href="https://isr.rs.gov.ru/ru/contacts/48"
					>
						<i class="fas fa-at"></i>Контактная информация <br />{" "}
						<i class="fas fa-at"></i>Contact information
					</a>
				</div>
			</div>
			<div className="footer-2">
				<div>
					<a href="https://www.facebook.com/russianhouse.tlv">
						<i style={{ color: "#012f6a" }} class="fab fa-facebook"></i>
					</a>
				</div>
				<div>
					<a href="https://www.instagram.com/russianhouse.tlv/">
						<i style={{ color: "#012f6a" }} class="fab fa-instagram"></i>
					</a>
				</div>
				<div>
					<a href="https://www.youtube.com/channel/UCtnzg9u7qezcJPfD1vaalUA">
						<i style={{ color: "#012f6a" }} class="fab fa-youtube"></i>
					</a>
				</div>
				<div>
					<a href="https://twitter.com/russianhousetlv">
						<i style={{ color: "#012f6a" }} class="fab fa-twitter"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
