import useModal from "../../hooks/useModal";
import Modal from "./Modal";
import { useState, useCallback } from "react";
import axios from "axios";
import useSnackbar from "../../hooks/useSnackbar";

export default function Contact() {
	const { modalData, setModalData } = useModal();
	const { setSnackbar } = useSnackbar();
	const [data, setData] = useState({ fullName: "", email: "", content: "" });
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState([]);

	const handleChange = (field) => (event) => {
		setErrors((errs) => errs.filter((er) => er.field !== field));
		setData({ ...data, [field]: event.target.value });
	};

	const validateFields = async () => {
		let tempErrors = [];
		Object.entries(data).forEach((dt) => {
			let [field, value] = dt;

			if (field === "email") {
				const r = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if (!r.test(value)) {
					tempErrors.push({
						field: "email",
						text: "Please enter a valid email address",
					});
				}
				return;
			}
		});

		setErrors(tempErrors);
		return !tempErrors.length;
	};

	const handleSubmit = async () => {
		setIsLoading(true);

		const isValid = await validateFields();

		if (!isValid) {
			setIsLoading(false);
			return;
		}

		let payload = data;

		if (modalData?.type == "job") {
			payload.position = modalData.data.title;
		}

		const res = await axios.post("/api/sendEmail/contact", payload);
		if (res) {
			setSnackbar({
				result: "success",
				text: "Thank you! We will get back to you as soon as possible.",
			});
			setModalData(null);
			return;
		}
		setSnackbar({
			result: "failed",
			text: "Something went wrong. Please send an email to ops@ekonomia.tech for further inquiry.",
		});
		setModalData(null);
	};

	const getError = useCallback((field) => {
		return errors.find((e) => e.field === field);
	});

	const Error = ({ field }) => {
		return errors && getError(field) ? (
			<div className="text-xs text-red-600 rounded-full py-1 w-max px-3 animte-fadeIn">
				{getError(field).text}
			</div>
		) : null;
	};

	return (
		<Modal>
			<div className="w-11/12  mx-auto my-auto bg-primary rounded-xl border border-secondary shadow-xl p-4 md:w-96">
				<div className="text-primary text-xl py-2">Contact us</div>
				{modalData?.type === "job" && (
					<div className="w-full bg-gradient-to-r from-gradient-3 to-gradient-7 rounded-md my-3 px-4 py-2">
						<div className="text-primary underline text-[12px]">
							Regarding Position:
						</div>
						<div className="flex pt-2 items-center">
							<img src="svg/Ekonomia-logo-light.svg" className="w-3" />
							<div className="text-primary px-2 pt-0.5">
								{modalData?.data.title}
							</div>
						</div>
					</div>
				)}
				<input
					className="w-full bg-transparent text-white outline-none py-3 px-4 text-sm border border-secondary rounded-md my-1"
					placeholder="Full name"
					onChange={handleChange("fullName")}
					value={data.fullName}
				/>
				<input
					className="w-full bg-transparent text-white outline-none py-3 px-4 text-sm border border-secondary rounded-md my-1"
					placeholder="Email address"
					onChange={handleChange("email")}
					value={data.email}
				/>
				<Error field={"email"} />
				<textarea
					className="w-full bg-transparent text-white outline-none py-3 px-4 text-sm border border-secondary rounded-md my-1"
					rows={5}
					placeholder="Telegram Handle \ Phone Number \ What can we do for you?"
					onChange={handleChange("content")}
					value={data.content}
				/>
				<div className="flex justify-end pt-2">
					<button
						className={`border border-secondary bg-gradient-to-r from-gradient-3 to-gradient-7 shadow-lg text-primary py-1.5 px-5 rounded-full text-sm mx-1 disabled:opacity-40`}
						onClick={handleSubmit}
						disabled={
							!(data.fullName && data.email && data.content) || isLoading
						}
					>
						Submit
					</button>
					<button
						className={`border border-secondary text-primary py-1.5 px-5 shadow-lg rounded-full text-sm
                         mx-1`}
						onClick={() => setModalData(null)}
					>
						Cancel
					</button>
				</div>
			</div>
		</Modal>
	);
}
