import Desc from "../components/home/Desc";
import MainLogo from "../components/home/MainLogo";
import HexagonsArrow from "../components/home/HexagonsArrow";
import HexagonContainer from "../components/home/HexagonContainer";
import HexagonsContainer from "../components/home/HexagonsContainer";
import Links from "../components/home/Links";

export default function Home() {
	return (
		<div
			className="w-full relative animate-fadeIn md:mx-auto"
			style={{
				background: "linear-gradient(180deg, #111 0.0%, #333 100%)",
			}}
		>
			<MainLogo />
			<Desc />
			<HexagonsArrow direction={"down"} />
			<HexagonsContainer />
			<HexagonsArrow direction={"up"} />
			<Links />
		</div>
	);
}
