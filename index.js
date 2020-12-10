
          // for responsive sidebar navigation menu of header navigation
           function openNav(){
                  document.getElementById('mySidenav').style.width="200px";
           }

            function closeNav(){
                  document.getElementById('mySidenav').style.width="0";
           }
            
          // for carasoul working
             function carControlLeft1(){
                  document.getElementById('carImg1').style.display="none";
                  document.getElementById('carImg2').style.display="none";
                  document.getElementById('carImg3').style.display="block";

                  document.getElementById('circle33').style.color="#1722ff";
            }

            function carControlRight1(){
                  document.getElementById('carImg1').style.display="none";
                  document.getElementById('carImg2').style.display="block";
                  document.getElementById('carImg3').style.display="none";

                  document.getElementById('circle22').style.color="#1722ff";
            }

            function carControlLeft2(){
                  document.getElementById('carImg1').style.display="block";
                  document.getElementById('carImg2').style.display="none";
                  document.getElementById('carImg3').style.display="none";

                  document.getElementById('circle11').style.color="#1722ff";
            }

            function carControlRight2(){
                  document.getElementById('carImg1').style.display="none";
                  document.getElementById('carImg2').style.display="none";
                  document.getElementById('carImg3').style.display="block";

                  document.getElementById('circle33').style.color="#1722ff";
            }

              function carControlLeft3(){
                  document.getElementById('carImg1').style.display="none";
                  document.getElementById('carImg2').style.display="block";
                  document.getElementById('carImg3').style.display="none";

                  document.getElementById('circle22').style.color="#1722ff";
            }

            function carControlRight3(){
                  document.getElementById('carImg1').style.display="block";
                  document.getElementById('carImg2').style.display="none";
                  document.getElementById('carImg3').style.display="none";

                  document.getElementById('circle11').style.color="#1722ff";
            }