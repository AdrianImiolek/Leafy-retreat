const burger = document.querySelector(".burger-btn");
const menu = document.querySelector(".nav-mobile");
const menuShadow = document.querySelector(".nav-shadow");
const allNavLinks = document.querySelectorAll(".nav-link");
const footerYear = document.querySelector(".currentdate");

const toggleMenu = () => {
	menu.classList.toggle("active");
	menuShadow.classList.toggle("nav-shadow-active");
	allNavLinks.forEach((item) => {
		//tutaj mamy pętle for each nadajemy kazdemu linkowi akcje, że po kliknięciu w niego zabiera nam klasę active
		item.addEventListener("click", () => {
			menu.classList.remove("active");
			menuShadow.classList.remove("nav-shadow-active");
		});
	});
};

const handleYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

handleYear();
burger.addEventListener("click", toggleMenu);
