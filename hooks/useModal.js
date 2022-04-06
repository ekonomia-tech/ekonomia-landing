import { useContext } from "react";
import modalContext from "../contexts/modalContext";

export default function useModal() {
	return useContext(modalContext);
}
