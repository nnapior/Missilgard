function VictoryMenu(victory) {
	this.title = "Victory Screen";
    this.background = "src/Images/Backgrounds/menu_bg.png";
    
    if(victory) {
    this.titleImgSrc = "src/Images/Victory.png";
    }
    else {
        this.titleImgSrc = "src/Images/Defeat.png";
    }

	this.buttons = [
		{
			text : "Return to main menu",
			onclick : function(){switchToMenu(new TitleMenu())},
			background : 'src/Images/Buttons/ReturnToMenu.png'
		}
	]
}




VictoryMenu.prototype = Object.create(Menu.prototype);