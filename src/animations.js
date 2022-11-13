/*
 ** DOM VARIABLES
 */

const SOCIAL_REMINDER_TEXT = document.getElementById("social-reminder-text");

/*
 ** DOC VARIABLES
 */

// animations
const ENTRANCE_ANIMATION_CLASS = "animate__bounceInDown";
const INTERMITENT_ANIMATION_CLASS = "animate__bounce";
const EXIT_ANIMATION_CLASS = "animate__bounceOutUp";

// Social HTML constructors
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
	// add entrance animation
	SOCIAL_REMINDER_TEXT.classList.add(ENTRANCE_ANIMATION_CLASS);
	// social reminder text constructor
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
	// remove entrance animation
	setTimeout(() => {
		SOCIAL_REMINDER_TEXT.classList.remove(ENTRANCE_ANIMATION_CLASS);
	}, 2000);
}

socialReminderChange();

// animation change

function intermitentAnimationToggle(counter = 0) {
	let intermitentAnimationToggleCounter = counter;
	if (intermitentAnimationToggleCounter < 6) {
		setTimeout(() => {
			counter++;
			SOCIAL_REMINDER_TEXT.classList.toggle(INTERMITENT_ANIMATION_CLASS);
			intermitentAnimationToggle(counter);
		}, 5000);
	}
}
