import useModal from "../../hooks/useModal";

export default function Modal({ children, hideControls }) {
	const { setModalData } = useModal();

	return (
		<div
			className={`fixed w-screen h-screen 
			 top-0 left-0 z-40 flex justify-center overflow-y-auto md:animate-fadeIn bg-black bg-opacity-80
			md:flex md:items-center md:justify-center
		`}
		>
			{!hideControls && (
				<button
					className="absolute top-4 right-4 bg-black bg-opacity-30 rounded-full p-2"
					onClick={() => setModalData(null)}
				>
					<img src="icons/close.svg" className="w-6" />
				</button>
			)}

			{children}
		</div>
	);
}
