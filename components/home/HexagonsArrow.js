export default function ({ direction }) {
	return (
		<div
			className={` w-full justify-center flex ${
				direction === "down" ? "rotate-0" : "rotate-180"
			}`}
		>
			<img src="svg/BoxArrowImage.svg" className="md:w-5/6 xl:w-1/2" />
		</div>
	);
}
