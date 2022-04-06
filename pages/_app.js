import Layout from "../components/Layout";
import { ModalsContextProvider } from "../contexts/modalContext";
import { SnackbarContextProvider } from "../contexts/snackbarContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<SnackbarContextProvider>
			<ModalsContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ModalsContextProvider>
		</SnackbarContextProvider>
	);
}

export default MyApp;
