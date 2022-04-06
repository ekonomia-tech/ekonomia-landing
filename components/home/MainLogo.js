export default function MainLogo() {
	return (
		<div className="relative">
			<div className="flex items-center pt-48 pb-10 md:pt-60 xl:pt-80">
				<div className="w-full flex flex-col items-center absolute justify-center z-10">
					<div className="flex backdrop-filter pt-4">
						<div className="drop-shadow-2xl">
							<img src="svg/Ekonomia-logo-light.svg" className="md:w-14" />
						</div>
						<div className="text-5xl text-primary px-3 font-bold md:text-[72px]">
							ekonomia
						</div>
					</div>
					<div className="text-primary mr-28 my-1 text-sm md:text-xl md:mr-52 md:mt-2">
						/ɛ.kɔˈnɔ.mja/
					</div>
				</div>
				<div className="flex absolute justify-center w-full h-max">
					<div className="bg-opacity-90 bg-gradient-1 w-12 h-36 rounded-full  blur-xl mt-5 md:h-60 md:w-20 xl:w-20 xl:h-60"></div>
					<div className="bg-opacity-90 bg-gradient-2 w-12 h-36 rounded-full  blur-xl mb-5 md:h-60 md:w-20 xl:w-20 xl:h-60"></div>
					<div className="bg-opacity-90 bg-gradient-3 w-12 h-36 rounded-full  blur-xl mt-5 md:h-60 md:w-20 xl:w-20 xl:h-60"></div>
					<div className="bg-opacity-90 bg-gradient-4 w-12 h-36 rounded-full  blur-xl mb-5 md:h-60 md:w-20 xl:w-20 xl:h-60"></div>
					<div className="bg-opacity-90 bg-gradient-5 w-12 h-36 rounded-full  blur-xl mt-5 md:h-60 md:w-20 xl:w-20 xl:h-60"></div>
					<div className="bg-opacity-90 bg-gradient-6 w-12 h-36 rounded-full  blur-xl mb-5 md:h-60 md:w-20 xl:w-20 xl:h-60"></div>
					<div className="bg-opacity-90 bg-gradient-7 w-12 h-36 rounded-full  blur-xl mt-5 md:h-60 md:w-20 xl:w-20 xl:h-60"></div>
				</div>
			</div>
		</div>
	);
}
