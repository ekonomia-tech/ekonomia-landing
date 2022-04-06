import Link from "next/link";

export default function Desc() {
	return (
		<div className="pt-24 px-4 text-sm text-left text-secondary md:pt-36 md:mx-auto md:w-[600px]">
			<div className="px-2">
				Ekonomia uses system and mechanism design principles to create practical
				and self-sustaining defi protocols.
			</div>
			<div className="py-2 px-2">
				We use transparent reputation systems to improve capital efficiency.
			</div>
			<Link href="/jobs">
				<div className="bg-gradient-to-r from-gradient-3 to-gradient-7 bg-shadow rounded-full py-2.5 px-6 text-accent my-3 w-max shadow-xl border border-primary cursor-pointer">
					Join our team
				</div>
			</Link>
		</div>
	);
}
