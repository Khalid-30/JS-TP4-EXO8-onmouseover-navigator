let img = document.getElementById("navIcon");
var message =
                    `Informations sur votre navigateur :
Nom : ${navigatorID.appName}
Version : ${navigatorID.appVersion}
Langue : ${navigator.language}`
img.addEventListener("mouseover", () => {
						alert(message)
					});
			
   

			