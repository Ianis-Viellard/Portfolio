document.addEventListener("DOMContentLoaded", function() {
	let body = document.querySelector("body")
	let header = document.querySelector("header")
	let subpartHidden = document.querySelectorAll(".subpartHidden")
	let hauteurEcran = window.innerHeight

	window.addEventListener("load",function(){
		let project =document.querySelector("#project")
		project.classList.add("subpart")
	})


	//div qui apparait depuis la gauche
	window.addEventListener("scroll",function(){
		for(let oneSubPartHidden of subpartHidden){
			let hautsubpartHidden = oneSubPartHidden.getBoundingClientRect().top
			if (hautsubpartHidden < (hauteurEcran-(hauteurEcran/6))) {
				oneSubPartHidden.classList.add("subpart")
			}
		}
		
	})

	let navbar = document.querySelector(".navbar")
	let skillBars = document.querySelectorAll(".bar div")


	window.addEventListener("scroll",function(){
		 if(window.scrollY>30)
			navbar.classList.add("navbar_shadow")
		else
			navbar.classList.remove("navbar_shadow")

		for(let skillBar of skillBars){
			let topBar = skillBar.getBoundingClientRect().top
			if(topBar < hauteurEcran-hauteurEcran/5){
				skillBar.style.width = skillBar.dataset.value
			}
		}
	})

	document.querySelector(".navbar a:nth-child(1)").addEventListener("click",function(){
		window.scrollTo(0,0)
	})

	
})

