// DOM Variables
const SOCIAL_REMINDER_TEXT = document.getElementById("social-reminder-text");
// Variables

const SOCIAL_PROFILES = [
	{ name: "youtube", FAID: "fa-youtube", username: "EDarkMatter Gaming" },
	{ name: "facebook", FAID: "fa-facebook", username: "EDarkMatter Gaming" },
	{ name: "twitch", FAID: "fa-twitch", username: "EDarkMatterG" },
	{ name: "twitter", FAID: "fa-twitter", username: "EDarkMatter" },
];

var currentSocialCounter = 0;

console.table(SOCIAL_PROFILES);

// HTML constructor

function socialReminderChange() {
	const SOCIAL_REMINDER_TEXT_CURRENT =
		"<i class='" +
		SOCIAL_PROFILES[currentSocialCounter].name +
		" fa-brands " +
		SOCIAL_PROFILES[currentSocialCounter].FAID +
		"'></i>" +
		SOCIAL_PROFILES[currentSocialCounter].username;
	SOCIAL_REMINDER_TEXT.innerHTML = SOCIAL_REMINDER_TEXT_CURRENT;
	// counter change
	if (currentSocialCounter == 3) {
		currentSocialCounter = 0;
	} else {
		currentSocialCounter++;
	}
}

socialReminderChange();

// animation change

/* setTimeout(function () {
	SOCIAL_REMINDER_TEXT.classList.remove("animate__bounceInDown");
	SOCIAL_REMINDER_TEXT.classList.add("animate__bounce");
}, 1000); */

/* setInterval(function () {
	SOCIAL_REMINDER_TEXT.classList.remove("animate__bounce");
	setTimeout(function () {
		SOCIAL_REMINDER_TEXT.classList.add("animate__bounce");
	}, 1000);
}, 3000); */
