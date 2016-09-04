"use strict";

class AsideEventListener {

    constructor(openElementId, closeElementId, menuElementId) {
        /*
        this.openElementName = openElementId;
        this.closeElementName = closeElementId;
        this.menuElementName = menuElementId;
        this.openElement = document.getElementById(this.openElementName);
        //console.log(this.openElement);
        this.closeElement = document.getElementById(this.closeElementName);
        //console.log(this.closeElement);
        this.menuElement = document.getElementById(this.menuElementName);
        if(this.openElement != null && this.closeElement!= null && this.menuElement != null) {
            this.openElement.addEventListener("click", (e) => { this.onClick(e); });
            this.closeElement.addEventListener("click", (e) => { this.onClick(e); });
        }
        this.show = 'false';
        //this.body = document.body;
    }

    onClick(evt) {
        /*
        console.log('Ditekan');
        if(this.show == 'false') {
            console.info("In onClick: status aside : open");
            this.show = 'true';
            if (this.menuElement.classList.contains("hide")) {
                this.menuElement.classList.remove("hide");
            }
        }
        else {
            this.show = 'false';
            console.info("In onClick: status aside : close");
            if (!this.menuElement.classList.contains("hide")) {
                this.menuElement.classList.add("hide");
            }
        }
        */
    }
}

export default AsideEventListener;
