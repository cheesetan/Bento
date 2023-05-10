// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'cheesetan_',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good night,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'a77aaa2f05f6110fbb15cfd2ec62951a', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '1.352083',
	defaultLongitude: '103.819839',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:00',
	hourDarkThemeInactive: '06:30',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '2',
			name: 'Spotify',
			icon: 'music',
			link: 'https://open.spotify.com',
		},
		{
			id: '3',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/1/#inbox',
		},
		{
			id: '4',
			name: 'Students Blog',
			icon: 'newspaper',
			link: 'http://studentsblog.sst.edu.sg',
		},
		{
			id: '5',
			name: 'Classroom',
			icon: 'highlighter',
			link: 'https://classroom.google.com/u/1/',
		},
		{
			id: '6',
			name: 'Docs',
			icon: 'text',
			link: 'https://docs.google.com/document/u/1/?tgif=d',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Slides',
			icon: 'wallpaper',
			link: 'https://docs.google.com/presentation/u/1/?tgif=c',
		},
		{
			id: '2',
			name: 'Sheets',
			icon: 'table',
			link: 'https://docs.google.com/spreadsheets/u/1/?tgif=d/',
		},
		{
			id: '3',
			name: 'Forms',
			icon: 'form-input',
			link: 'https://docs.google.com/forms/u/1/?tgif=d',
		},
		{
			id: '4',
			name: 'SLS',
			icon: 'graduation-cap',
			link: 'https://vle.learning.moe.edu.sg/login',
		},
		{
			id: '5',
			name: 'Drive',
			icon: 'hard-drive',
			link: 'https://drive.google.com/drive/u/1/my-drive',
		},
		{
			id: '6',
			name: 'Peardeck',
			icon: 'citrus',
			link: 'https://app.peardeck.com/join',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Classroom',
					link: 'https://classroom.google.com/u/1/',
				},
				{
					name: 'Mail',
					link: 'https://mail.google.com/mail/u/1/#inbox',
				},
				{
					name: 'Students Blog',
					link: 'http://studentsblog.sst.edu.sg',
				},
				{
					name: 'Docs',
					link: 'https://docs.google.com/document/u/1/?tgif=d',
				},
				{
					name: 'Slides',
					link: 'https://docs.google.com/presentation/u/1/?tgif=c',
				},
				{
					name: 'Sheets',
					link: 'https://docs.google.com/spreadsheets/u/1/?tgif=d/',
				},
				{
					name: 'Forms',
					link: 'https://docs.google.com/forms/u/1/?tgif=d',
				},
				{
					name: 'SLS',
					link: 'https://vle.learning.moe.edu.sg/login',
				},
				{
					name: 'Drive',
					link: 'https://drive.google.com/drive/u/1/my-drive',
				},
				{
					name: 'Peardeck',
					link: 'https://app.peardeck.com/join',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Dribbble',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
