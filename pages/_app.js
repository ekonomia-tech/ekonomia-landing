import Head from "next/head";
import Layout from "../components/Layout";
import { ModalsContextProvider } from "../contexts/modalContext";
import { SnackbarContextProvider } from "../contexts/snackbarContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<SnackbarContextProvider>
			<ModalsContextProvider>
				<Layout>
					<Head>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
						></meta>
					</Head>
					<Component {...pageProps} />
				</Layout>
			</ModalsContextProvider>
		</SnackbarContextProvider>
	);
}

export default MyApp;
