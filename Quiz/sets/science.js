class sci {
    constructor(){

        this.question= createElement("H3")

        this.a = createButton("Mesophytes ");
        this.b = createButton("Deciduous ");
        this.c = createButton("Hydrophytes ");
        this.d = createButton("Xerophytes ");

        this.wrongOrRight = createElement("H3");

        this.nextbutton = createButton("next");
        

        this.question2= createElement("H3")

        this.a2 = createButton("Fats");
        this.b2 = createButton("Protein  ");
        this.c2 = createButton("Carbohydrates ");
        this.d2 = createButton("Water");

        this.wrongOrRight2 = createElement("H3");

        this.nextbutton2 = createButton("next");

        this.question3= createElement("H3")

        this.a3 = createButton("Iron");
        this.b3 = createButton("Radon");
        this.c3 = createButton("Manganese ");
        this.d3 = createButton("Chromium ");

        this.wrongOrRight3 = createElement("H3");

        this.nextbutton3 = createButton("next");
        

        this.question4= createElement("H3")

        this.a4 = createButton("Michael Faraday ");
        this.b4 = createButton("Thomas Alva Edison ");
        this.c4 = createButton("Alfred Nobel ");
        this.d4 = createButton("Sir Isaac Newton ");

        this.wrongOrRight4 = createElement("H3");

        this.nextbutton4 = createButton("next");

        this.question5= createElement("H3")

        this.a5 = createButton("Charge");
        this.b5 = createButton("Curren");
        this.c5 = createButton("Vibration ");
        this.d5 = createButton("Couple ");


        this.wrongOrRight5 = createElement("H3");

        this.nextbutton5 = createButton("next");
        

        this.question6= createElement("H3")

        this.wrongOrRight6 = createElement("H3");

        this.a6 = createButton("Mineral ");
        this.b6 = createButton("Igneous rock");
        this.c6 = createButton("Metamorphic rock ");
        this.d6 = createButton("Sedimentary rock ");


        this.generalscience = createButton("General science");
        this.space = createButton("Space");
        this.tech = createButton("Technology");
        this.gk = createButton("General knowledge");

    }

    display(){
        this.question.html("Plants that survive in areas with very little rainfall are ______");
        this.question.position(300,150);

        this.a.position(300,360);
        this.a.mousePressed(()=>{
            wrong++
            this.wrongOrRight.html("Wrong answer");
            this.wrongOrRight.position(300,150);

            this.question.hide();

            this.a.hide();
            this.b.hide();
            this.c.hide();
            this.d.hide();

            if(generalscienceX == "not done"){
                this.generalscience.position(300,300);
                this.generalscience.mousePressed(()=>{
                    playSet = "generalSci";
                    generalscienceX = "done";
                    this.gk.hide();
                    this.tech.hide();
                    this.space.hide();
                    this.generalscience.hide();

                    this.wrongOrRight.hide();
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

                    this.wrongOrRight.hide();
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

                    this.wrongOrRight.hide();
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

                    this.wrongOrRight.hide();
                });
            }

        });
        this.b.position(300,460);
        this.b.mousePressed(()=>{
            wrong++
            this.wrongOrRight.html("Wrong answer");
            this.wrongOrRight.position(300,150);

            this.question.hide();

            this.a.hide();
            this.b.hide();
            this.c.hide();
            this.d.hide();

            if(generalscienceX == "not done"){
                this.generalscience.position(300,300);
                this.generalscience.mousePressed(()=>{
                    playSet = "generalSci";
                    generalscienceX = "done";
                    this.gk.hide();
                    this.tech.hide();
                    this.space.hide();
                    this.generalscience.hide();

                    this.wrongOrRight.hide();
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

                    this.wrongOrRight.hide();
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

                    this.wrongOrRight.hide();
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

                    this.wrongOrRight.hide();
                });
            }
        });
        this.c.position(400,360);
        this.c.mousePressed(()=>{
            
            wrong++
            this.wrongOrRight.html("Wrong answer");
            this.wrongOrRight.position(300,150);

            this.question.hide();

            this.a.hide();
            this.b.hide();
            this.c.hide();
            this.d.hide();


            if(generalscienceX == "not done"){
                this.generalscience.position(300,300);
                this.generalscience.mousePressed(()=>{
                    playSet = "generalSci";
                    generalscienceX = "done";
                    this.gk.hide();
                    this.tech.hide();
                    this.space.hide();
                    this.generalscience.hide();

                    this.wrongOrRight.hide();
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

                    this.wrongOrRight.hide();
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

                    this.wrongOrRight.hide();
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

                    this.wrongOrRight.hide();
                });
            }

        });
        this.d.position(400,460);
        this.d.mousePressed(()=>{
            right++
            this.wrongOrRight.html("Right answer");
            this.wrongOrRight.position(300,150);

            this.question.hide();

            this.a.hide();
            this.b.hide();
            this.c.hide();
            this.d.hide();

            //next question
            this.nextbutton.position(500,500);
            this.nextbutton.mousePressed(()=>{
                this.wrongOrRight.hide();

                this.nextbutton.hide();
                this.question2.html("Which nutrient does Bile juice act upon?");
                this.question2.position(300,150);
        
                this.a2.position(300,360);
                this.a2.mousePressed(()=>{
                    right++
                    this.wrongOrRight2.html("Right answer");
                    this.wrongOrRight2.position(300,150);
        
                    this.question2.hide();
        
                    this.a2.hide();
                    this.b2.hide();
                    this.c2.hide();
                    this.d2.hide();

                                //next question
                        this.nextbutton2.position(500,500);
                        this.nextbutton2.mousePressed(()=>{
                            this.wrongOrRight2.hide();

                            this.nextbutton2.hide();
                            this.question3.html("Which of these elements is radioactive?");
                            this.question3.position(300,150);
                    
                            this.a3.position(300,360);
                            this.a3.mousePressed(()=>{
                                wrong++
                                this.wrongOrRight3.html("Wrong answer");
                                this.wrongOrRight3.position(300,150);
                    
                                this.question3.hide();
                    
                                this.a3.hide();
                                this.b3.hide();
                                this.c3.hide();
                                this.d3.hide();

                                if(generalscienceX == "not done"){
                                    this.generalscience.position(300,300);
                                    this.generalscience.mousePressed(()=>{
                                        playSet = "generalSci";
                                        generalscienceX = "done";
                                        this.gk.hide();
                                        this.tech.hide();
                                        this.space.hide();
                                        this.generalscience.hide();
                    
                                        this.wrongOrRight3.hide();
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
                    
                                        this.wrongOrRight3.hide();
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
                    
                                        this.wrongOrRight3.hide();
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
                    
                                        this.wrongOrRight3.hide();
                                    });
                                }
                            });
                            this.b3.position(300,460);
                            this.b3.mousePressed(()=>{
                                right++
                                this.wrongOrRight3.html("Right answer");
                                this.wrongOrRight3.position(300,150);
                    
                                this.question3.hide();
                    
                                this.a3.hide();
                                this.b3.hide();
                                this.c3.hide();
                                this.d3.hide();

                                            //next question
                                    this.nextbutton3.position(500,500);
                                    this.nextbutton3.mousePressed(()=>{
                                        this.wrongOrRight3.hide();

                                        this.nextbutton3.hide();
                                        this.question4.html("Who created the first electric dynamo?");
                                        this.question4.position(300,150);
                                
                                        this.a4.position(300,360);
                                        this.a4.mousePressed(()=>{

                                            right++
                                            this.wrongOrRight4.html("Right answer");
                                            this.wrongOrRight4.position(300,150);
                                
                                            this.question4.hide();
                                
                                            this.a4.hide();
                                            this.b4.hide();
                                            this.c4.hide();
                                            this.d4.hide();

                                                        //next question
                                                this.nextbutton4.position(500,500);
                                                this.nextbutton4.mousePressed(()=>{
                                                    this.wrongOrRight4.hide();

                                                    this.nextbutton4.hide();
                                                    this.question5.html("The rate at which electric charge flows across a medium is ");
                                                    this.question5.position(300,150);
                                            
                                                    this.a5.position(300,360);
                                                    this.a5.mousePressed(()=>{
                                                        wrong++
                                                        this.wrongOrRight5.html("Wrong answer");
                                                        this.wrongOrRight5.position(300,150);
                                            
                                                        this.question5.hide();
                                            
                                                        this.a5.hide();
                                                        this.b5.hide();
                                                        this.c5.hide();
                                                        this.d5.hide();

                                                        if(generalscienceX == "not done"){
                                                            this.generalscience.position(300,300);
                                                            this.generalscience.mousePressed(()=>{
                                                                playSet = "generalSci";
                                                                generalscienceX = "done";
                                                                this.gk.hide();
                                                                this.tech.hide();
                                                                this.space.hide();
                                                                this.generalscience.hide();
                                            
                                                                this.wrongOrRight5.hide();
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
                                            
                                                                this.wrongOrRight5.hide();
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
                                            
                                                                this.wrongOrRight5.hide();
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
                                            
                                                                this.wrongOrRight5.hide();
                                                            });
                                                        }
                                                    });
                                                    this.b5.position(300,460);
                                                    this.b5.mousePressed(()=>{
                                                        right++
                                                        this.wrongOrRight5.html("Right answer");
                                                        this.wrongOrRight5.position(300,150);
                                            
                                                        this.question5.hide();
                                            
                                                        this.a5.hide();
                                                        this.b5.hide();
                                                        this.c5.hide();
                                                        this.d5.hide();

                                                        this.nextbutton5.position(500,500);
                                                        this.nextbutton5.mousePressed(()=>{
                                                                this.wrongOrRight5.hide();
            
                                                                this.nextbutton5.hide();
                                                                this.question6.html("What type of rock is granite?");
                                                                this.question6.position(300,150);
                                                        
                                                                this.a6.position(300,360);
                                                                this.a6.mousePressed(()=>{
                                                                    wrong++
                                                                    this.wrongOrRight6.html("Wrong answer");
                                                                    this.wrongOrRight6.position(300,150);
                                                        
                                                                    this.question6.hide();
                                                        
                                                                    this.a6.hide();
                                                                    this.b6.hide();
                                                                    this.c6.hide();
                                                                    this.d6.hide();

                                                                    if(generalscienceX == "not done"){
                                                                        this.generalscience.position(300,300);
                                                                        this.generalscience.mousePressed(()=>{
                                                                            playSet = "generalSci";
                                                                            generalscienceX = "done";
                                                                            this.gk.hide();
                                                                            this.tech.hide();
                                                                            this.space.hide();
                                                                            this.generalscience.hide();
                                                        
                                                                            this.wrongOrRight6.hide();
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
                                                        
                                                                            this.wrongOrRight6.hide();
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
                                                        
                                                                            this.wrongOrRight6.hide();
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
                                                        
                                                                            this.wrongOrRight6.hide();
                                                                        });
                                                                    }
                                                                });
                                                            this.b6.position(300,460);
                                                            this.b6.mousePressed(()=>{
                                                                right++
                                                                this.wrongOrRight6.html("Right answer");
                                                                this.wrongOrRight6.position(300,150);
                                                        
                                                                this.question6.hide();
                                                        
                                                                this.a6.hide();
                                                                this.b6.hide();
                                                                this.c6.hide();
                                                                this.d6.hide();
            
                                                                if(generalscienceX == "not done"){
                                                                    this.generalscience.position(300,300);
                                                                    this.generalscience.mousePressed(()=>{
                                                                        playSet = "generalSci";
                                                                        generalscienceX = "done";
                                                                        this.gk.hide();
                                                                        this.tech.hide();
                                                                        this.space.hide();
                                                                        this.generalscience.hide();
                                                    
                                                                        this.wrongOrRight6.hide();
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
                                                    
                                                                        this.wrongOrRight6.hide();
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
                                                    
                                                                        this.wrongOrRight6.hide();
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
                                                    
                                                                        this.wrongOrRight6.hide();
                                                                    });
                                                                }
                                                            
                                                            });
                                                            this.c6.position(400,360);
                                                            this.c6.mousePressed(()=>{
            
                                                                wrong++
                                                                this.wrongOrRight6.html("Wrong answer");
                                                                this.wrongOrRight6.position(300,150);
                                                        
                                                                this.question6.hide();
                                                        
                                                                this.a6.hide();
                                                                this.b6.hide();
                                                                this.c6.hide();
                                                                this.d6.hide();
                                                                if(generalscienceX == "not done"){
                                                                    this.generalscience.position(300,300);
                                                                    this.generalscience.mousePressed(()=>{
                                                                        playSet = "generalSci";
                                                                        generalscienceX = "done";
                                                                        this.gk.hide();
                                                                        this.tech.hide();
                                                                        this.space.hide();
                                                                        this.generalscience.hide();
                                                    
                                                                        this.wrongOrRight6.hide();
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
                                                    
                                                                        this.wrongOrRight6.hide();
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
                                                    
                                                                        this.wrongOrRight6.hide();
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
                                                    
                                                                        this.wrongOrRight6.hide();
                                                                    });
                                                                }
                                                                    
                                                            });
                                                            this.d6.position(400,460);
                                                            this.d6.mousePressed(()=>{
                                                                wrong++
                                                                this.wrongOrRight6.html("Wrong answer");
                                                                this.wrongOrRight6.position(300,150);
                                                        
                                                                this.question6.hide();
                                                        
                                                                this.a6.hide();
                                                                this.b6.hide();
                                                                this.c6.hide();
                                                                this.d6.hide();

                                                                if(generalscienceX == "not done"){
                                                                    this.generalscience.position(300,300);
                                                                    this.generalscience.mousePressed(()=>{
                                                                        playSet = "generalSci";
                                                                        generalscienceX = "done";
                                                                        this.gk.hide();
                                                                        this.tech.hide();
                                                                        this.space.hide();
                                                                        this.generalscience.hide();
                                                    
                                                                        this.wrongOrRight6.hide();
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
                                                    
                                                                        this.wrongOrRight6.hide();
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
                                                    
                                                                        this.wrongOrRight6.hide();
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
                                                    
                                                                        this.wrongOrRight6.hide();
                                                                    });
                                                                }
                                                            });
                                                        });
                                                    })
                                                        
                                                    this.c5.position(400,360);
                                                    this.c5.mousePressed(()=>{

                                                        wrong++
                                                        this.wrongOrRight5.html("Wrong answer");
                                                        this.wrongOrRight5.position(300,150);
                                            
                                                        this.question5.hide();
                                            
                                                        this.a5.hide();
                                                        this.b5.hide();
                                                        this.c5.hide();
                                                        this.d5.hide();

                                                        if(generalscienceX == "not done"){
                                                            this.generalscience.position(300,300);
                                                            this.generalscience.mousePressed(()=>{
                                                                playSet = "generalSci";
                                                                generalscienceX = "done";
                                                                this.gk.hide();
                                                                this.tech.hide();
                                                                this.space.hide();
                                                                this.generalscience.hide();
                                            
                                                                this.wrongOrRight5.hide();
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
                                            
                                                                this.wrongOrRight5.hide();
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
                                            
                                                                this.wrongOrRight5.hide();
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
                                            
                                                                this.wrongOrRight5.hide();
                                                            });
                                                        }

                                                    });
                                                    this.d5.position(400,460);
                                                    this.d5.mousePressed(()=>{
                                                        wrong++
                                                        this.wrongOrRight5.html("Wrong answer");
                                                        this.wrongOrRight5.position(300,150);
                                            
                                                        this.question5.hide();
                                            
                                                        this.a5.hide();
                                                        this.b5.hide();
                                                        this.c5.hide();
                                                        this.d5.hide();

                                                        if(generalscienceX == "not done"){
                                                            this.generalscience.position(300,300);
                                                            this.generalscience.mousePressed(()=>{
                                                                playSet = "generalSci";
                                                                generalscienceX = "done";
                                                                this.gk.hide();
                                                                this.tech.hide();
                                                                this.space.hide();
                                                                this.generalscience.hide();
                                            
                                                                this.wrongOrRight5.hide();
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
                                            
                                                                this.wrongOrRight5.hide();
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
                                            
                                                                this.wrongOrRight5.hide();
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
                                            
                                                                this.wrongOrRight5.hide();
                                                            });
                                                        }
                                                    });
                                                });
                          
                                        });
                                        this.b4.position(300,460);
                                        this.b4.mousePressed(()=>{

                                            wrong++
                                            this.wrongOrRight4.html("Wrong answer");
                                            this.wrongOrRight4.position(300,150);
                                
                                            this.question4.hide();
                                
                                            this.a4.hide();
                                            this.b4.hide();
                                            this.c4.hide();
                                            this.d4.hide();

                                            if(generalscienceX == "not done"){
                                                this.generalscience.position(300,300);
                                                this.generalscience.mousePressed(()=>{
                                                    playSet = "generalSci";
                                                    generalscienceX = "done";
                                                    this.gk.hide();
                                                    this.tech.hide();
                                                    this.space.hide();
                                                    this.generalscience.hide();
                                
                                                    this.wrongOrRight4.hide();
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
                                
                                                    this.wrongOrRight4.hide();
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
                                
                                                    this.wrongOrRight4.hide();
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
                                
                                                    this.wrongOrRight4.hide();
                                                });
                                            }
                                            
                                        });
        
                                        this.c4.position(400,360);
                                        this.c4.mousePressed(()=>{

                                            wrong++
                                            this.wrongOrRight4.html("Wrong answer");
                                            this.wrongOrRight4.position(300,150);
                                
                                            this.question4.hide();
                                
                                            this.a4.hide();
                                            this.b4.hide();
                                            this.c4.hide();
                                            this.d4.hide();

                                            if(generalscienceX == "not done"){
                                                this.generalscience.position(300,300);
                                                this.generalscience.mousePressed(()=>{
                                                    playSet = "generalSci";
                                                    generalscienceX = "done";
                                                    this.gk.hide();
                                                    this.tech.hide();
                                                    this.space.hide();
                                                    this.generalscience.hide();
                                
                                                    this.wrongOrRight4.hide();
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
                                
                                                    this.wrongOrRight4.hide();
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
                                
                                                    this.wrongOrRight4.hide();
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
                                
                                                    this.wrongOrRight4.hide();
                                                });
                                            }

                                            
                                        });
                                        this.d4.position(400,460);
                                        this.d4.mousePressed(()=>{
                                            wrong++
                                            this.wrongOrRight4.html("Wrong answer");
                                            this.wrongOrRight4.position(300,150);
                                
                                            this.question4.hide();
                                
                                            this.a4.hide();
                                            this.b4.hide();
                                            this.c4.hide();
                                            this.d4.hide();

                                            if(generalscienceX == "not done"){
                                                this.generalscience.position(300,300);
                                                this.generalscience.mousePressed(()=>{
                                                    playSet = "generalSci";
                                                    generalscienceX = "done";
                                                    this.gk.hide();
                                                    this.tech.hide();
                                                    this.space.hide();
                                                    this.generalscience.hide();
                                
                                                    this.wrongOrRight4.hide();
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
                                
                                                    this.wrongOrRight4.hide();
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
                                
                                                    this.wrongOrRight4.hide();
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
                                
                                                    this.wrongOrRight4.hide();
                                                });
                                            }
                                            
                                        });
                                    });
                                
                            });
                            this.c3.position(400,360);
                            this.c3.mousePressed(()=>{

                                wrong++
                                this.wrongOrRight3.html("Wrong answer");
                                this.wrongOrRight3.position(300,150);
                    
                                this.question3.hide();
                    
                                this.a3.hide();
                                this.b3.hide();
                                this.c3.hide();
                                this.d3.hide();

                                if(generalscienceX == "not done"){
                                    this.generalscience.position(300,300);
                                    this.generalscience.mousePressed(()=>{
                                        playSet = "generalSci";
                                        generalscienceX = "done";
                                        this.gk.hide();
                                        this.tech.hide();
                                        this.space.hide();
                                        this.generalscience.hide();
                    
                                        this.wrongOrRight3.hide();
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
                    
                                        this.wrongOrRight3.hide();
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
                    
                                        this.wrongOrRight3.hide();
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
                    
                                        this.wrongOrRight3.hide();
                                    });
                                }

                                
                            });
                            this.d3.position(400,460);
                            this.d3.mousePressed(()=>{
                                wrong++
                                this.wrongOrRight3.html("Wrong answer");
                                this.wrongOrRight3.position(300,150);
                    
                                this.question3.hide();
                    
                                this.a3.hide();
                                this.b3.hide();
                                this.c3.hide();
                                this.d3.hide();

                                if(generalscienceX == "not done"){
                                    this.generalscience.position(300,300);
                                    this.generalscience.mousePressed(()=>{
                                        playSet = "generalSci";
                                        generalscienceX = "done";
                                        this.gk.hide();
                                        this.tech.hide();
                                        this.space.hide();
                                        this.generalscience.hide();
                    
                                        this.wrongOrRight3.hide();
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
                    
                                        this.wrongOrRight3.hide();
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
                    
                                        this.wrongOrRight3.hide();
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
                    
                                        this.wrongOrRight3.hide();
                                    });
                                }
                            });
                        });
                });
                this.b2.position(300,460);
                this.b2.mousePressed(()=>{
                    
                    wrong++
                    this.wrongOrRight2.html("Wrong answer");
                    this.wrongOrRight2.position(300,150);
        
                    this.question2.hide();
        
                    this.a2.hide();
                    this.b2.hide();
                    this.c2.hide();
                    this.d2.hide();

                    if(generalscienceX == "not done"){
                        this.generalscience.position(300,300);
                        this.generalscience.mousePressed(()=>{
                            playSet = "generalSci";
                            generalscienceX = "done";
                            this.gk.hide();
                            this.tech.hide();
                            this.space.hide();
                            this.generalscience.hide();
        
                            this.wrongOrRight2.hide();
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
        
                            this.wrongOrRight2.hide();
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
        
                            this.wrongOrRight2.hide();
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
        
                            this.wrongOrRight2.hide();
                        });
                    }

                });
                this.c2.position(400,360);
                this.c2.mousePressed(()=>{

                    wrong++
                    this.wrongOrRight2.html("Wrong answer");
                    this.wrongOrRight2.position(300,150);
        
                    this.question2.hide();
        
                    this.a2.hide();
                    this.b2.hide();
                    this.c2.hide();
                    this.d2.hide();

                    if(generalscienceX == "not done"){
                        this.generalscience.position(300,300);
                        this.generalscience.mousePressed(()=>{
                            playSet = "generalSci";
                            generalscienceX = "done";
                            this.gk.hide();
                            this.tech.hide();
                            this.space.hide();
                            this.generalscience.hide();
        
                            this.wrongOrRight2.hide();
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
        
                            this.wrongOrRight2.hide();
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
        
                            this.wrongOrRight2.hide();
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
        
                            this.wrongOrRight2.hide();
                        });
                    }

                    
                });
                this.d2.position(400,460);
                this.d2.mousePressed(()=>{
                    wrong++
                    this.wrongOrRight2.html("Wrong answer");
                    this.wrongOrRight2.position(300,150);
        
                    this.question2.hide();
        
                    this.a2.hide();
                    this.b2.hide();
                    this.c2.hide();
                    this.d2.hide();
                    
                    if(generalscienceX == "not done"){
                        this.generalscience.position(300,300);
                        this.generalscience.mousePressed(()=>{
                            playSet = "generalSci";
                            generalscienceX = "done";
                            this.gk.hide();
                            this.tech.hide();
                            this.space.hide();
                            this.generalscience.hide();
        
                            this.wrongOrRight2.hide();
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
        
                            this.wrongOrRight2.hide();
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
        
                            this.wrongOrRight2.hide();
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
        
                            this.wrongOrRight2.hide();
                        });
                    }
                });
            });
        });
    }
}
