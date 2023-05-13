function openPanel(){
	
	var painel_compras = window.document.getElementById('shopping-panel')

	var shadow = window.document.getElementById("shadow")
	if(shadow) {
		console.log("I'm here")
		shadow.remove()
	}

	else {
		shadow = window.document.createElement("div")
		shadow.setAttribute("id",'shadow')
		window.document.body.appendChild(shadow)
	}
	
	painel_compras.classList.toggle('d-none')
	


	if (window.innerWidth < 576) {
		window.document.body.classList.toggle('hide-scroll-bar')
	}
}