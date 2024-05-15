var b = null;
if(typeof browser != 'undefined'){
	b = browser;
}
else{
	b = chrome;
}

//Change class
b.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if(message.action == "bodyClass") {
		document.body.classList.remove("protanopia");
		document.body.classList.remove("deuteranopia");
		document.body.classList.remove("tritanopia");
		document.body.classList.remove("achromatopsia");
		if(message.class != ""){					
			document.body.classList.add(message.class);
		}
	}
});

//Inject SVG
injectSVGFromFile(b.extension.getURL("simulator/simulator.svg"));

//Inject CSS
injectCSSFromFile(b.extension.getURL("simulator/simulator-inject.css"));