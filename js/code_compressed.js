function openPanel(){var a=window.document.getElementById("shopping-panel"),b=window.document.getElementById("shadow");b?(console.log("I'm here"),b.remove()):(b=window.document.createElement("div"),b.setAttribute("id","shadow"),window.document.body.appendChild(b)),a.classList.toggle("d-none"),576>window.innerWidth&&window.document.body.classList.toggle("hide-scroll-bar")}