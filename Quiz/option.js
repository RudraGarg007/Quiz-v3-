class option {
    constructor(){
        this.generalscience = createButton("General science");
        this.space = createButton("Space");
        this.tech = createButton("Technology");
        this.gk = createButton("General knowledge");
    }

    display(){
        if(generalscienceX == "not done"){
            this.generalscience.position(300,300);
            this.generalscience.mousePressed(()=>{
                playSet = "generalSci";
                generalscienceX = "done";
                this.gk.hide();
                this.tech.hide();
                this.space.hide();
                this.generalscience.hide();
            });
        }

        if(spaceX == "not done"){
            this.space.position(300,400);
            this.space.mousePressed(()=>{
                playSet = "space";
                spaceX = "done";
                this.gk.hide();
                this.tech.hide();
                this.space.hide();
                this.generalscience.hide();
            });
        }

        if(techX == "not done"){
            this.tech.position(450,300);
            this.tech.mousePressed(()=>{
                playSet = "tech";
                techX = "done";
                this.gk.hide();
                this.tech.hide();
                this.space.hide();
                this.generalscience.hide();
            });
        }

        if(gkX == "not done"){
            this.gk.position(450,400);
            this.gk.mousePressed(()=>{
                playSet = "generalK";
                gkX = "done";
                this.gk.hide();
                this.tech.hide();
                this.space.hide();
                this.generalscience.hide();
            });
        }
    }
}
