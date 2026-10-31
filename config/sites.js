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
        mine: {
            name: "My sites",
            enabled: true,
            showOnHomePageCategoryList: true,
            showHealth: true,
            sites: [
                { name: "dracos.co.uk", url: "https://dracos.co.uk/" },
                { name: "Theatricalia", url: "https://theatricalia.com/" },
                { name: "Find your nearest postbox", url: "https://postboxes.dracos.co.uk/" },
                { name: "In Tune Mixtape Fan Club", url: "https://intunemixtapefanclub.dracos.co.uk/" },
                { name: "Post Office Inquiry", url: "https://postofficeinquiry.dracos.co.uk/" },
            ]
        },
        work: {
            name: "mySociety",
            enabled: true,
            showOnHomePageCategoryList: true,
            sites: [
                { name: "FixMyStreet", url: "https://www.fixmystreet.com/" },
                { name: "WhatDoTheyKnow", url: "https://www.whatdotheyknow.com/" },
                { name: "TheyWorkForYou", url: "https://www.theyworkforyou.com/" },
                { name: "WriteToThem", url: "https://www.writetothem.com/" },
            ]
        },
		traintimes: {
			name: "traintimes.org.uk",
			enabled: true,
            showOnHomePageCategoryList: true,
            showHealth: true,
			sites: [
                { name: "traintimes.org.uk front", url: "https://traintimes.org.uk/" },
                { name: "traintimes.org.uk JP", url: "https://traintimes.org.uk/btn/man/1000/tomorrow" },
                { name: "traintimes.org.uk LDB", url: "https://traintimes.org.uk/live/btn" },
                { name: "split.traintimes.org.uk", url: "https://split.traintimes.org.uk/" },
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
