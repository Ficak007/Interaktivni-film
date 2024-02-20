    
        var TbSucces = document.querySelectorAll('table');
        var BtTryAgain = document.querySelectorAll('.TryAgain');
        var buttons = document.querySelectorAll('.btgroup');  
        var buttons2 = document.querySelectorAll('.btgroup2'); 
        var buttons_chase = document.querySelectorAll('.btgroup_Chase1');  
        var buttons_chase2 = document.querySelectorAll('.btgroup_Chase2');
        var buttons_chase3 = document.querySelectorAll('.btgroup_Chase3');
        var Inputs = document.querySelectorAll('.InputMinihra');
        var film = document.querySelectorAll('.filmik');  
        let video = document.getElementById("myVideo");
        video.volume = 0.1;

        let scoreSucces = 0;
        let scoreSurvive = 0;

        const interval = setInterval(function(){
        if (video.currentTime >= 60) {
            clearInterval(interval);
            video.pause();
            showButtons();
        }
        },100);

        function showButtons() {
        buttons.forEach(function(button) {
            button.style.display = 'block';
        });
        }

        function hideButtons(){
        buttons.forEach(function(button) {
            button.style.display = 'none';
            }); 
        }
        let BTPokojIsClicked = "";
        //sklep /////////////////////////////////////////////////////
        const BTsklep = document.getElementById("BtSklep");
            BTsklep.onclick = function(){ 
                video.play()
                hideButtons();
                BTPokojIsClicked = "false"
                
                
                
                
            };
        //pokoj/////////////////////////////////////////////////////
        const BTpokoj = document.getElementById("BtPokoj");
            BTpokoj.onclick = function(){
                video.src = "Videa/4.B.mp4";
                video.load();
                video.play();
                hideButtons();
                BTPokojIsClicked = "true"
                const intervalPokoj = setInterval(function(){
                if (video.currentTime >= 27.9) {
                    clearInterval(intervalPokoj);  
                    video.src = "Videa/Správná cesta.mp4";
                    video.currentTime=97;
                    video.play();
                }
                },100);
                
            };
    

        const interval2 = setInterval(function(){
        if (video.currentTime >= 113) { 
            clearInterval(interval2);
            video.pause();
            showButtons2();
        }
        },100);

        function showButtons2() {
        buttons2.forEach(function(button) {
            button.style.display = 'block';
        });
        }

        function hideButtons2(){
        buttons2.forEach(function(button) {
            button.style.display = 'none';
        }); 
        }

        //Dilna /////////////////////////////////////////////////////
        const BTdilna = document.getElementById("BtDilna");
            BTdilna.onclick = function(){
                video.play( )
                hideButtons2();
                scoreSucces++;
            };
        //Patro/////////////////////////////////////////////////////
        const BTnahoru = document.getElementById("BtNahoru");
            BTnahoru.onclick = function(){
                video.src = "Videa/6.A.mp4";
                video.load();
                video.play();
                hideButtons2();
                const intervalPokoj = setInterval(function(){
                if (video.currentTime >= 0) {                     //////nastavit čas////
                    clearInterval(intervalPatro);  
                    video.src = "Videa/Správná cesta.mp4";
                    video.currentTime=154;                      //////////////cca upravit čas nebo zčeknout
                    video.play();
                }
                },100);
            };
        
            var input = document.getElementById("myText");

            
            
                const interval_Input = setInterval(function(){
                if (video.currentTime >= 81) {//81//
                    clearInterval(interval_Input);
                    if(BTPokojIsClicked == "false")
                    {
                    video.pause();
                    showInput();
                    }
                }
                },100);

            
            

        function showInput() {
        Inputs.forEach(function(input) {
            input.style.display = 'block';
        });
        }

        
            
            input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                var x = document.getElementById("myText").value;
                if(x == "Zloději hned odejdi z mého domu" || x == "Zlodeji hned odejdi z meho domu" || x== "zlodeji hned odejdi z meho domu" ||x== "zloději hned odejdi z mého domu" ||x== "ZLODEJI HNED ODEJDI Z MEHO DOMU")
                {    
                    video.play();   
                    input.style.display = 'none';
                    scoreSucces++;
                }
                else
                {
                    video.play();
                    input.style.display = 'none';       
                    javascript:alert('Někde jsi udělal chybu, bude to mít vliv na tvůj výsledek');
                    
                }
            } 
            });
                       
        const interval_ChaseScena1 = setInterval(function(){
        if (video.currentTime >= 180) {//180/
            clearInterval(interval_ChaseScena1);
            video.pause();
            showButtons_Chase1();
        }
        },100);
        
        function showButtons_Chase1() {
            buttons_chase.forEach(function(button_Ch) {
            button_Ch.style.display = 'block';
        });
        }

        function hideButtons_Chase1() {
            buttons_chase.forEach(function(button_Ch) {
            button_Ch.style.display = 'none';
        });
        }
        //////9.A///////////////////////////////////////////
            const BTDoLeva1 = document.getElementById("DoLeva1");
                BTDoLeva1.onclick = function(){
                video.src = "Videa/9.A.mp4";
                video.load();
                video.play();
                hideButtons_Chase1();
            };

        ///////9.B/////////////////////////////////////////////////
        const BTDoPrava1 = document.getElementById("DoPrava1");
            BTDoPrava1.onclick = function(){
                video.play( )
                hideButtons_Chase1();
                
            };
        
        
        const interval_ChaseScena2 = setInterval(function(){
        if (video.currentTime >= 183) {///183
            clearInterval(interval_ChaseScena2);
            video.pause();
            showButtons_Chase2();
        }
        },100);
        
        function showButtons_Chase2() {
            buttons_chase2.forEach(function(button_Ch2) {
            button_Ch2.style.display = 'block';
        });
        }

        function hideButtons_Chase2() {
            buttons_chase2.forEach(function(button_Ch) {
            button_Ch.style.display = 'none';
        });
        }
        //////10.A///////////////////////////////////////////
            const BTDoLeva2 = document.getElementById("DoLeva2");
                BTDoLeva2.onclick = function(){
                    video.src = "Videa/10.C.mp4";
                    video.load();
                    video.play();
                    hideButtons_Chase2();
            };

        ///////////////10.B//////////////////////
            const BTRovne = document.getElementById("Rovne");
                BTRovne.onclick = function(){
                    video.play( )
                    hideButtons_Chase2();
                    
            };   

        ///////10.C/////////////////////////////////////////////////
            const BTDoPrava2 = document.getElementById("DoPrava2");
                BTDoPrava2.onclick = function(){
                    video.src = "Videa/10.A.mp4";
                    video.load();
                    video.play();
                    hideButtons_Chase2();
            };
        

        const interval_ChaseScena3 = setInterval(function(){
        if (video.currentTime >= 185) {//185
            clearInterval(interval_ChaseScena3);
            video.pause();
            showButtons_Chase3();
        }
        },100);
        
        function showButtons_Chase3() {
            buttons_chase3.forEach(function(button_Ch3) {
            button_Ch3.style.display = 'block';
        });
        }

        function hideButtons_Chase3() {
            buttons_chase3.forEach(function(button_Ch3) {
            button_Ch3.style.display = 'none';
        });
        }
        //////11.A///////////////////////////////////////////
            const BTDoLeva3 = document.getElementById("DoLeva3");
                BTDoLeva3.onclick = function(){
                    video.src = "Videa/11.B.mp4";
                    video.id = "myVideo";
                    video.load();
                    video.play();
                    hideButtons_Chase3();
            };

        ///////11.B/////////////////////////////////////////////////
        const BTDoPrava3 = document.getElementById("DoPrava3");
            BTDoPrava3.onclick = function(){
                video.play();
                hideButtons_Chase3();
                scoreSurvive = scoreSurvive+3;
                
            };
            
            
            video.addEventListener('ended', function() {

                hideButtons();
                hideButtons2();
                input.style.display = 'none';
                hideButtons_Chase1();
                hideButtons_Chase2();
                hideButtons_Chase3();

                film.forEach(function(video) {
                        video.style.display = 'none';
                    });

                    TbSucces.forEach(function(table) {
                        table.style.display = 'block';
                    });

                    let FinalPercent = (scoreSucces+ scoreSurvive)*(100/5);

                    if(scoreSurvive == 3 )
                    {
                        document.getElementById('Survive').textContent = 'Přežil/a jste'; 
                    }
                    else
                    {
                        document.getElementById('Survive').textContent = 'Nepřežil/a jste';
                        FinalPercent = FinalPercent - 20;
                        
                    }

                    switch(scoreSurvive)
                    {
                        case 3: {
                            document.getElementById('Survive').textContent = 'Přežil/a jste'; 
                                }
                        break;

                        case 0: {
                            document.getElementById('Survive').textContent = 'Nepřežil/a jste';
                            FinalPercent = FinalPercent - 20;
                            if(FinalPercent < 0)
                                {
                                FinalPercent = 0;
                                }
                                }
                        break;
                    }

                    switch(scoreSucces)
                    {
                        case 2: {
                            document.getElementById('Succes').textContent = 'Vyřešil/a jste záhadu';
                            document.getElementById('Percent').textContent = FinalPercent + ' %';
                                }
                        break;

                        case 1: {
                            document.getElementById('Succes').textContent = 'Vyřešil/a jste část záhady';
                            document.getElementById('Percent').textContent = FinalPercent + ' %';
                                }
                        break;

                        case 0: {
                            document.getElementById('Succes').textContent = 'Nevyřešil/a jste záhadu';
                            document.getElementById('Percent').textContent = FinalPercent + ' %';
                                }
                        break;
                    }

                    BtTryAgain.forEach(function(TryA){
                    TryA.style.display ='block'; 
                    });
                    const TryAgainBT = document.getElementById("TryAgainBt");
                        TryAgainBT.onclick = function(){
                        location.href = "file:///C:/Users/Marek/Desktop/IMP%20-%20kopie/Game.html";
                        }
                
            });