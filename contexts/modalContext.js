import React, { createContext, useState } from "react";

const ModalsContext = createContext();

export default ModalsContext;

export const ModalsContextProvider = ({ children }) => {
	const [modalData, setModalData] = useState(null);

	return (
		<ModalsContext.Provider value={{ modalData, setModalData }}>
			{children}
		</ModalsContext.Provider>
	);
};
