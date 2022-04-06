export default function MainLogo() {
	return (
		<div className="relative">
			<div className="flex items-center pt-48 pb-10 md:pt-60">
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
					<div className="bg-gradient-1 w-7 h-36 rounded-full mx-3 blur-lg mt-5 md:h-60 md:w-14 xl:w-18 xl:h-72"></div>
					<div className="bg-gradient-2 w-7 h-36 rounded-full mx-3 blur-lg mb-5 md:h-60 md:w-14 xl:w-18 xl:h-72"></div>
					<div className="bg-gradient-3 w-7 h-36 rounded-full mx-3 blur-lg mt-5 md:h-60 md:w-14 xl:w-18 xl:h-72"></div>
					<div className="bg-gradient-4 w-7 h-36 rounded-full mx-3 blur-lg mb-5 md:h-60 md:w-14 xl:w-18 xl:h-72"></div>
					<div className="bg-gradient-5 w-7 h-36 rounded-full mx-3 blur-lg mt-5 md:h-60 md:w-14 xl:w-18 xl:h-72"></div>
					<div className="bg-gradient-6 w-7 h-36 rounded-full mx-3 blur-lg mb-5 md:h-60 md:w-14 xl:w-18 xl:h-72"></div>
					<div className="bg-gradient-7 w-7 h-36 rounded-full mx-3 blur-lg mt-5 md:h-60 md:w-14 xl:w-18 xl:h-72"></div>
				</div>
			</div>
		</div>
	);
}
