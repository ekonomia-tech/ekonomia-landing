import Desc from "../components/home/Desc";
import MainLogo from "../components/home/MainLogo";

export default function Home() {
	return (
		<div className="w-full bg-primary relative animate-fadeIn md:w-5/6 md:mx-auto">
			<MainLogo />
			<Desc />
		</div>
	);
}
