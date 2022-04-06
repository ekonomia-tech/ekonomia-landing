import Link from "next/link";
import { useRouter } from "next/router";
import useModal from "../hooks/useModal";

export default function Footer() {
	const router = useRouter();
	const { setModalData } = useModal();

	return (
		<div
			className={`w-screen fixed bottom-0 h-12 flex items-center justify-between text-xs text-secondary bg-primary ${
				router.asPath == "/jobs" &&
				"trasnsition-all duration-300 shadow-lg  bg-opacity-60 border-t border-secondary backdrop-filter backdrop-blur-xl"
			}`}
		>
			<div className="flex">
				<button
					className="px-4 cursor-pointer"
					onClick={() => setModalData({ type: "contact" })}
				>
					Contact us
				</button>
				<Link href="/jobs">
					<div className="px-4 cursor-pointer">Jobs</div>
				</Link>
			</div>
			<div className="flex px-4">
				<Link href="https://github.com/ekonomia-tech" passHref={true}>
					<a target="_blank" className="px-3">
						<img src="svg/github.svg" className="w-4 cursor-pointer lg:w-6" />
					</a>
				</Link>
				{/* <Link href="https://github.com/ekonomia-tech" passHref={true}>
					<a target="_blank" className="px-3">
						<img src="svg/twitter.svg" className="w-4 cursor-pointer" />
					</a>
				</Link>
				<Link href="https://github.com/ekonomia-tech" passHref={true}>
					<a target="_blank" className="px-3">
						<img src="svg/discord.svg" className="w-4 cursor-pointer" />
					</a>
				</Link> */}
			</div>
		</div>
	);
}
