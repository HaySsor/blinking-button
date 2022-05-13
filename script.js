const btn = document.querySelector(".btn");

function btnAnimatrion(e) {
	const top = e.clientY;
	const left = e.clientX;
	const btnTopPosition = e.target.offsetTop;
	const btnLeftPosition = e.target.offsetLeft;
	let currentTop = top - btnTopPosition;
	let currentleft = left - btnLeftPosition;
	const circle = document.createElement("span");
	circle.classList.add("circle");
	e.target.appendChild(circle);
	circle.style.top = `${currentTop}px`;
	circle.style.left = `${currentleft}px`;

    setTimeout(()=>{
        circle.remove()
    },500)
}

btn.addEventListener("click", btnAnimatrion);
