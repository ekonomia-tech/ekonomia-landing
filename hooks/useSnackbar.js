import { useContext } from "react";
import { SnackbarContext } from "../contexts/snackbarContext";

export default function useSnackbar() {
	const { snackbar, setSnackbar } = useContext(SnackbarContext);

	const SnackbarComponent = () => {
		if (snackbar.result) {
			return (
				<div
					style={{
						background: snackbar.result == "success" ? "#198754" : "#FF0000",
					}}
					className={`absolute z-50 h-20 bottom-0 left-0 w-full`}
				>
					{snackbar.text}
				</div>
			);
		}
		return null;
	};
	return { snackbar, setSnackbar, SnackbarComponent };
}
