export default function ShouldRender({ should, children }) {
	if (should) {
		return children;
	}
	return null;
}
