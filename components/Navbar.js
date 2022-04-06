import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";

export default function Navbar() {
	const router = useRouter();
	const [scrollIsZero, setScrollIsZero] = useState(true);

	useEffect(() => {
		scrollListener();
	}, []);

	const scrollListener = useCallback(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY !== 0 && scrollIsZero) {
				setScrollIsZero(false);
			} else {
				setScrollIsZero(true);
			}
		});
	});

	return (
		<div
			className={`fixed top-0 w-screen h-16 z-30 border-b border-transparent ${
				!scrollIsZero &&
				"trasnsition-all duration-300 shadow-lg bg-primary bg-opacity-60 border-secondary backdrop-filter backdrop-blur-xl"
			}`}
		>
			<div className="flex w-full items-center justify-between h-full p-4">
				<Link href="/">
					<div className=" my-auto w-auto h-auto cursor-pointer">
						<img src="svg/Ekonomia-logo-light.svg" className="w-6" />
					</div>
				</Link>
				{router.asPath != "/jobs" && (
					<Link href="/jobs">
						<div className="text-secondary px-4 cursor-pointer">Jobs</div>
					</Link>
				)}
			</div>
		</div>
	);
}
