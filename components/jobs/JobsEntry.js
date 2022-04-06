import useModal from "../../hooks/useModal";

export default function JobEntry({ data }) {
	const { setModalData } = useModal();

	return (
		<div className="border border-primary rounded-xl px-6 pt-8 pb-6 my-4 backdrop-filter backdrop-blur-sm">
			<div className="text-primary text-xl underline">{data.title}</div>
			<div className="pt-3">
				{data.requirements.map((req, i) => (
					<div className="text-primary py-1.5" key={i}>
						<div className="flex items-start">
							<img src="svg/Ekonomia-logo-light.svg" className="w-3" />
							<div className="text-xs px-4">{req.main}</div>
						</div>

						{req.sub && (
							<div className="pt-1">
								{req.sub.map((subreq, i) => (
									<div className="pl-10" key={i}>
										<div className="text-xs"> - {subreq}</div>
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</div>

			<div className="w-full flex justify-end">
				<button
					className={`bg-gradient-to-r from-gradient-3 to-gradient-7 bg-shadow rounded-full py-2 px-4 text-accent mt-4 w-fit shadow-xl cursor-pointer text-xs ml-auto`}
					onClick={() => setModalData({ type: "job", data })}
				>
					Contact us
				</button>
			</div>
		</div>
	);
}
