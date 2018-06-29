var image = document.getElementById("img1");
document.addEventListener('keydown', doKeyDown, true);

function doKeyDown(e) {
	console.log('!msg!');
	//====================
	//  THE W KEY
	//====================
	if (e.keyCode == 87) {
		image.setAttribute('style', '-webkit-transform:scale(4);');
	}
    //====================
	//  THE X KEY
	//====================
	if (e.keyCode == 88) {
		image.setAttribute('style', '-webkit-transform:scale(1);');
	}
}