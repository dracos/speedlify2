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
		traintimes: {
			name: "traintimes.org.uk",
			enabled: true,
            showOnHomePageCategoryList: true,
            showHealth: true,
			sites: [
                { name: "traintimes.org.uk front", url: "https://traintimes.org.uk/" },
                { name: "traintimes.org.uk JP", url: "https://traintimes.org.uk/btn/man/1000/2026-11-14" },
                { name: "traintimes.org.uk LDB", url: "https://traintimes.org.uk/live/btn" },
			],
		},
		other_train: {
			name: "Other train sites",
			enabled: true,
            showOnHomePageCategoryList: true,
			sites: [
                { name: "National Rail front", url: "https://www.nationalrail.co.uk/" },
                { name: "National Rail JP", url: "https://www.nationalrail.co.uk/journey-planner?adults=1&destination=MAN&extraTime=0&leavingDate=141126&leavingHour=10&leavingMin=00&leavingType=departing&origin=BTN&type=single" },
                { name: "National Rail LDB", url: "https://www.nationalrail.co.uk/live-trains/departures/birmingham-new-street/" },
                { name: "Trainline", url: "https://www.thetrainline.com" },
                { name: "RealTimeTrains front", url: "https://www.realtimetrains.co.uk/" },
                { name: "RealTimeTrains LDB", url: "https://www.realtimetrains.co.uk/search/detailed/gb-nr:BTN" },
			],
		},
	},
};
