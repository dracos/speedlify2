export default {
	runs: 3,
	screenshots: "filmstrip",
	formFactor: "mobile",
	freshnessHours: 24,
	staleAfterHours: 48,
	batchSize: 20,
	historyLimit: 120,
	retryErrorsAfterHours: 6,
	failureBackoff: true,
	redirectConfirmations: 3,
	groups: {
		trains: {
			name: "Trains",
			enabled: true,
			description: "Train sites",
			sites: [
			],
		},
	},
};
