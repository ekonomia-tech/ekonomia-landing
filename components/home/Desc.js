import Link from "next/link";

export default function Desc() {
	return (
		<div className="pt-24 px-4 text-md text-center text-secondary md:mx-auto md:w-[600px] 2xl:w-[750px] xl:text-lg">
			<div className="px-2">
				Ekonomia uses system and mechanism design principles to create practical
				and self-sustaining defi protocols.
			</div>
			<div className="py-2 px-2">
				We use transparent reputation systems to improve capital efficiency.
			</div>
			<Link href="/jobs">
				<div className="bg-gradient-to-r from-gradient-3 to-gradient-7 bg-shadow rounded-full py-2.5 px-6 text-accent text-sm my-3 mx-auto w-max shadow-xl cursor-pointer">
					Join our team
				</div>
			</Link>
		</div>
	);
}
