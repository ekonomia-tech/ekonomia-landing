import Link from "next/link";

export default function Links() {
	return (
		<div className="w-full py-12 flex flex-col items-center justify-center pb-36">
			<Link href="https://github.com/ekonomia-tech" passHref={true}>
				<a target="_blank" className="px-3">
					<div className="w-[306px] h-[66px] my-2 bg-white rounded-2xl flex justify-center items-center bg-gradient-to-r from-[#8B4513] to-[#556B2F]">
						<div
							className="w-[300px]  rounded-xl shadow-xl flex items-center text-primary p-4  h-[60px] bg-white bg-opacity-10 cursor-pointer hover:bg-opacity-0
				"
						>
							<img src="svg/github.svg" className="w-8" />
							<div className="mx-4 text-sm">Explore our codebase</div>
						</div>
					</div>
				</a>
			</Link>
			<Link href="https://www.medium.com/@ekonomia" passHref={true}>
				<a target="_blank" className="px-3">
					<div className="w-[306px] h-[66px] my-2 bg-white rounded-2xl flex justify-center items-center bg-gradient-to-r from-[#8B4513] to-[#556B2F]">
						<div
							className="w-[300px]  rounded-xl shadow-xl flex items-center text-primary p-4  h-[60px] bg-white bg-opacity-10 cursor-pointer hover:bg-opacity-0
				"
						>
							<img src="svg/Medium.svg" className="w-8" />
							<div className="mx-4 text-sm">Read about us</div>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}
