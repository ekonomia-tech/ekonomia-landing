import HexagonContainer from "./HexagonContainer";

export default function HexagonsContainer() {
	return (
		<div className="w-full mx-auto grid grid-cols-1 justify-center md:grid-cols-2 md:w-full 2xl:w-3/5">
			<HexagonContainer
				icon="svg/Ekonomia-logo-light.svg"
				header="Bottom-up Banking"
				content="Decentralized Banking is a new, bottom-up financial system that has a 1000x opportunity to surpass traditional banking in assets under management. Ekonomia is building this future."
			/>
			<HexagonContainer
				icon="svg/Ekonomia-logo-light.svg"
				header="Stablecoin"
				content="Our first project is a collateralized stablecoin on Ethereum. It ties into a decentralized on-chain reputation to give users unique rates. Ekonomia will strive to ensure the stablecoin will have mass adoption."
			/>
			<HexagonContainer
				icon="svg/Ekonomia-logo-light.svg"
				header="Governance"
				content="The stablecoin will be governed by a token that is widely and fairly distributed to the community. Tokens holders will earn revenues from the protocol through fees and investments into other protocols, such as open market operations."
			/>
			<HexagonContainer
				icon="svg/Ekonomia-logo-light.svg"
				header="Future"
				content="After the success and growth of the stablecoin, Ekonomia will continue to build decentralized products and protocols that leverage the stablecoin, as well as contribute to other DeFi protocols."
			/>
		</div>
	);
}
