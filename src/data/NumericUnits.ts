// List of all possible CSS numerical units
const NumericUnits: readonly (string | null)[] = [
	null,
	"%",
	"cm",
	"mm",
	"in",
	"px",
	"pt",
	"pc",
	"em",
	"ex",
	"ch",
	"rem",
	"vw",
	"vh",
	"vmin",
	"vmax",
] as const;
type NumericUnit = typeof NumericUnits[number];

export { NumericUnits, NumericUnit };
