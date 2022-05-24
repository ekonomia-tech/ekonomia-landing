export default function HexagonContainer({ icon, header, content }) {
	return (
		<div className="relative flex justify-center">
			<img src="svg/HexData.svg" className="w-[400px] sm:w-[500px]" />
			<div className="absolute top-28 left-1/2 -translate-x-1/2 flex flex-col items-center md:top-24 lg:top-32">
				<img
					src={icon}
					className="mb-4 w-[32px] sm:w-[40px] sm:my-8 md:my-4 "
				/>
				<div className=" font-thin text-center text-gray-100 text-2xl w-max ">
					{header}
				</div>
				<div className=" font-thin text-center text-gray-100 my-4 text-xs w-[280px] sm:w-[300px] sm:text-sm md:my-4">
					{content}
				</div>
			</div>
		</div>
	);
}
