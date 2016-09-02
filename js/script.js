				
// Всплывающая форма

var link = document.querySelector(".open-modal-window");
var popup = document.querySelector(".modal-window");
var close = popup.querySelector (".close");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var username = popup.querySelector("[name=username]");
var storage = localStorage.getItem("username");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-window-show");
	username.focus();
	if (storage) {
		username.value = storage;
		email.focus();
	} else {
		username.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-window-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
	if (!username.value || !email.value) {
		event.preventDefault();
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("username", username.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-window-show")) {
				popup.classList.remove("modal-window-show");
		}
	}
});


// Попап с картой

var openMap = document.querySelector(".open-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".close");

openMap.addEventListener("click", function(event) {
	event.preventDefault();
	popupMap.classList.add("modal-map-show");
})

closeMap.addEventListener("click", function(event) {
	event.preventDefault();
	popupMap.classList.remove("modal-map-show");
})

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popupMap.classList.contains("modal-map-show")) {
				popupMap.classList.remove("modal-map-show");
		}
	}
});

// Слайдер с табами в разделе "Сервис"

var openDelivery = document.querySelector(".delivery-slide");
var showDelivery = document.querySelector("#delivery");

openDelivery.addEventListener("click", function(event) {
	event.preventDefault();
	showDelivery.classList.add("open-slide");
	showGuarantee.classList.remove("open-slide");
	showCredit.classList.remove("open-slide");
});

var openGuarantee = document.querySelector(".guarant-slide");
var showGuarantee = document.querySelector("#guarant");

openGuarantee.addEventListener("click", function(event) {
	event.preventDefault();
	showGuarantee.classList.add("open-slide");
	showDelivery.classList.remove("open-slide");
	showDelivery.classList.add("closed-slide");
	showCredit.classList.remove("open-slide");
});

var openCredit = document.querySelector(".credit-slide");
var showCredit = document.querySelector("#credit");

openCredit.addEventListener("click", function(event) {
	event.preventDefault();
	showCredit.classList.add("open-slide");
	showGuarantee.classList.remove("open-slide");
	showDelivery.classList.remove("open-slide");
});

