import benchPic from "../images/bench.jpeg";
function Bench() {
	return (
		<div>
			<h2>
				Нажмите на скамейку, чтобы скачать эскиз
				<br /> Please click the bench to download the sketch
			</h2>
			<a href={benchPic} download>
				<img src={benchPic} />
			</a>
		</div>
	);
}

export default Bench;
