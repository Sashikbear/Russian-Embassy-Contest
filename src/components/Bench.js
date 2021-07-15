import benchPic from "../images/bench.png";
function Bench() {
	return (
		<div>
			<h2>Нажмите на скамейку, чтобы скачать эскиз</h2>
			<a href={benchPic} download>
				<img src={benchPic} />
			</a>
		</div>
	);
}

export default Bench;
