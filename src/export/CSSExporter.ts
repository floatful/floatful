import Rule from "../data/Rule";

/**
 * Class representing a CSS exporter, allowing users to export their floatful styles into a succinct CSS file
 */
class CSSExporter {
	rules:Rule[]
	constructor(rules:Rule[]) {
		this.rules = rules;
	}

	export() {}
}

export default CSSExporter;
