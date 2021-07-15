import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Rules() {
	const [eng, setEng] = useState(false);
	const handleRus = (event) => {
		setEng(false);
	};
	const handleEng = (event) => {
		setEng(true);
	};
	return (
		<div className="form-wrapper">
			<div className="rule-wrapper">
				<div>
					<h1>
						Правила проведения конкурса <br />
						Rules of the contest
					</h1>
				</div>
				<div className="lang-buttons">
					<button onClick={handleRus} className="button" type="submit">
						Rus
					</button>
					<button onClick={handleEng} className="button" type="submit">
						Eng
					</button>
				</div>
			</div>
			{!eng && (
				<ol className="main-text Home">
					<li>
						Настоящие правила закрепляют порядок проведения конкурса «Осторожно,
						окрашено в любовь!» (далее — Конкурс и Правила).
					</li>
					<li>
						Конкурс проводится в период с 15 по 30 июля 2021 года включительно.
					</li>
					<li>
						Организатором конкурса является Русский дом в Тель-Авиве и
						Объединение профессиональных художников Израиля — Организаторы).
						Информация об Организаторах доступна{" "}
						<a
							className="nav-item"
							href="https://www.facebook.com/russianhouse.tlv/"
						>
							здесь.
						</a>
					</li>
					<li>Участником Конкурса может стать любое физическое лицо.</li>
					<li>
						Участнику Конкурса необходимо в период с 15 по 25 июля 2021 года
						выполнить следующие действия (далее — конкурсное задание):
						<br />
						5.1. Заполнить заявку{" "}
						<Link
							to={{
								pathname: "/form",
							}}
							style={{ textDecoration: "none" }}
							className="nav-item"
						>
							здесь.
						</Link>
						<br />
						Прикрепить к заявке оформленный эскиз скамейки (скачать эскиз{" "}
						<Link
							to={{
								pathname: "/bench",
							}}
							style={{ textDecoration: "none" }}
							className="nav-item-two"
						>
							здесь
						</Link>
						).
						<br />
					</li>
					<li>
						При совершении действий, указанных в п. 5 участнику Конкурса
						необходимо использовать поле для отправки конкурсного задания
						исключительно для участия в Конкурсе.
					</li>
					<li>
						Жюри организаторов Конкурса определяет победителей путем
						голосования.
					</li>
					<li>
						Подведение итогов Конкурса состоится не позднее 27 июля 2021 года.
						Организатор публикует результаты Конкурса на официальном сайте
						конкурса и странице Фейсбук Организатора. Организатор дополнительно
						сообщает каждому участнику Конкурса, являющимся победителем, о
						результатах проведения Конкурса по электронной почте, которую
						участник оставил при прохождении теста (п. 5.1. Правил).
					</li>
					<li>
						Победитель Конкурса получает право художественно оформить выбранную
						им скамейку по своему эскизу. Краска и другие необходимые
						инструменты предоставляются Организатором.
					</li>
					<li>Оформление скамеек будет проходить с 28 по 30 июля 2021 года.</li>
					<li>
						Право на оформление скамейки не может быть передано третьему лицу, в
						том числе другому участнику Конкурса.
					</li>
					<li>
						По итогам голосования с победителями свяжутся представители
						Организатора и согласуют детали проведения акции.
					</li>
					<li>
						Обращения на пересмотр результатов Конкурса Организатором не
						принимаются. 
					</li>
				</ol>
			)}
			{eng && (
				<ol className="main-text Home">
					<li>
						These rules fix the procedure for holding the contest "Caution,
						painted in love!" (hereinafter-the Contest and the Rules).
					</li>
					<li>
						The competition is held during the period from July 15 to July 30,
						2021.
					</li>
					<li>
						he organizers of the contest are the Russian House in Tel Aviv and
						the Association of Professional Artists of Israel, hereinafter-the
						Organizer). Information about the Organizers is available{" "}
						<a
							className="nav-item"
							href="https://www.facebook.com/russianhouse.tlv/"
						>
							here.
						</a>
					</li>
					<li>Any individual can become a participant of the Competition.</li>
					<li>
						The participant of the Competition should perform the following
						actions during the period from July 15 to 25, 2021 (hereinafter
						referred to as the competition task):
						<br />
						5.1. Fill out the application{" "}
						<Link
							to={{
								pathname: "/form",
							}}
							style={{ textDecoration: "none" }}
							className="nav-item"
						>
							here.
						</Link>
						<br />
						Attach a decorated sketch of a bench to the application (download
						the sketch{" "}
						<Link
							to={{
								pathname: "/bench",
							}}
							style={{ textDecoration: "none" }}
							className="nav-item-two"
						>
							here
						</Link>
						).
						<br />
					</li>
					<li>
						When performing the actions specified in clause 5, the contestant
						must use the field to send the competition task solely for the
						purpose of participating in the Competition.
					</li>
					<li>The Competition jury determines the winners by voting.</li>
					<li>
						The results of the Competition will be summed up no later than July
						27, 2021. The Organizer publishes the results of the Contest on the
						official website of the contest and on the Organizer's Facebook
						page. The organizer additionally informs each winner of the
						Competition about the results of the Competition by the e-mail,
						which the participant indicated when passing the test (clause 5.1.
						of the Rules).
					</li>
					<li>
						The winner of the Competition gets the right to artistically design
						the bench chosen by him according to his sketch. Paint and other
						necessary tools are provided by the Organizer.
					</li>
					<li>
						The design of the benches will take place from 28 to 30 July 2021.
					</li>
					<li>
						The right to design a bench cannot be transferred to a third party,
						including another participant of the Competition.
					</li>
					<li>
						Following the results of the voting, representatives of the
						Organizer will contact the winners and agree on the details of the
						campaign.
					</li>
					<li>
						Requests for revision of the results of the Competition are not
						accepted by the Organizer.
					</li>
				</ol>
			)}
		</div>
	);
}

export default Rules;
