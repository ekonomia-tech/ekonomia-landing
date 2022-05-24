import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Contact from "./misc/Contact";
import useModal from "../hooks/useModal";
import ShouldRender from "./misc/ShouldRender";
import useSnackbar from "../hooks/useSnackbar";

export default function Layout({ children }) {
	const { modalData } = useModal();
	const { SnackbarComponent, snackbar } = useSnackbar();

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== "undefined") {
			// Handler to call on window resize
			function handleResize() {
				let vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty("--vh", `${vh}px`);
			}

			// Add event listener
			window.addEventListener("resize", handleResize);

			// Call handler right away so state gets updated with initial window size
			handleResize();

			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return (
		<div className="w-screen">
			<Navbar />
			{children}
			<ShouldRender should={!!modalData}>
				<Contact />
			</ShouldRender>
			{snackbar.result && (
				<div
					className={`h-16 w-full  z-50 fixed bottom-0 left-0 text-center flex items-center justify-center text-sm text-white px-4 animate-fadeIn ${
						snackbar.result === "success"
							? "bg-gradient-to-r from-gradient-3 to-gradient-7"
							: "bg-red-600"
					}`}
				>
					<div className="">{snackbar.text}</div>
				</div>
			)}

			<Footer />
		</div>
	);
}
