
 //scroll animacije
 function checkScroll(){
    let pocetak = $('.navbar').height() * 3;

    if($(window).scrollTop() > pocetak){
        $('.navbar').addClass("scrolled");
        $('.header-inside').addClass("headerscrolled");
        $('.header-inside').removeClass("headerscrolledback");
    }else{
        $('.navbar').removeClass("scrolled");
        $('.header-inside').removeClass("headerscrolled");
        $('.header-inside').addClass("headerscrolledback");
    }
   }
    if($('.navbar').length > 0){
          $(window).on("scroll load resize", function(){
          checkScroll();
      });
   }

          //SLIDER ZA HEADER SLIKE

      let i = 0;
      function changer(){
         if(i==0){
            $('.header-container').css('background-image', 'url("images/slide2.jpg")');
            i++;
         }else if(i==1){
            $('.header-container').css('background-image', 'url("images/slide3.jpg")');
            i++;
         }else if(i==2){
            $('.header-container').css('background-image', 'url("images/slide1.jpg")');
            i=0;
         }
         setTimeout(changer,3000);
      }

      var slider = document.getElementById("myRange");
      var output = document.getElementById("demo");
      let slidevalue = 600;
      let maxc;
      output.innerHTML = slider.value;
         slider.oninput = function() {
            setTimeout(start,200);
            maxc = 600;
            $(".ind-room").remove();
            output.innerHTML = `${this.value}`;
            slidevalue = output.innerHTML = this.value;
            for(let i=0;i<sobe.length;i++){
               if(slidevalue >= sobe[i].cijena && sobe[i].available == true){
                  if(kvalue == "-"){
                     if(sobe[i].cijena < maxc){
                        maxc = sobe[i].cijena;
                        slider.min = maxc;
                     }
                     $("#rooms-container").append(`<div class='ind-room'><div class="lijevo"><img src="images/sobe/soba${sobe[i].brsobe}.jpg"></img></div> <div class="desno"><h2>Room no. ${sobe[i].brsobe}</h2><p>Number of beds: ${sobe[i].brkreveta}</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><h3>Price (per night) ${sobe[i].cijena} KM</h3> <div class="btn-container"><button  id="myBtn${sobe[i].brsobe}" onClick="btncl${sobe[i].brsobe}()">BOOK ROOM</button> </div></div> `);
                  }else if(kvalue == sobe[i].brkreveta){
                     if(sobe[i].cijena < maxc){
                        maxc = sobe[i].cijena;
                        slider.min = maxc;
                     }
                     $("#rooms-container").append(`<div class='ind-room'><div class="lijevo"><img src="images/sobe/soba${sobe[i].brsobe}.jpg"></img></div> <div class="desno"><h2>Room no. ${sobe[i].brsobe}</h2><p>Number of beds: ${sobe[i].brkreveta}</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><h3>Price (per night) ${sobe[i].cijena} KM</h3> <div class="btn-container"><button  id="myBtn${sobe[i].brsobe}" onClick="btncl${sobe[i].brsobe}()">BOOK ROOM</button> </div></div> `);
                  }
         
               }
            }

      }

      //niz objekata - sobe

      const sobe = [
        {brsobe: 1, brkreveta: 2,cijena: 200, available: true}, 
        {brsobe: 2, brkreveta: 1,cijena: 100, available: true}, 
        {brsobe: 3, brkreveta: 3,cijena: 400, available: true}, 
        {brsobe: 4, brkreveta: 4,cijena: 600, available: true}, 
        {brsobe: 5, brkreveta: 2,cijena: 300, available: true},
        {brsobe: 6, brkreveta: 3,cijena: 200, available: true},
        {brsobe: 7, brkreveta: 4,cijena: 500, available: true},
        {brsobe: 8, brkreveta: 1,cijena: 100, available: true},
        {brsobe: 9, brkreveta: 4,cijena: 450, available: true}
      ];
      
      function loadRooms(){
         for(let i=0;i<sobe.length;i++){
            if(sobe[i].available == true){
               $("#rooms-container").append(`<div class='ind-room'><div class="lijevo"><img src="images/sobe/soba${sobe[i].brsobe}.jpg"></img></div> <div class="desno"><h2>Room no. ${sobe[i].brsobe}</h2><p>Number of beds: ${sobe[i].brkreveta}</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><h3>Price (per night) ${sobe[i].cijena} KM</h3> <div class="btn-container"><button  id="myBtn${sobe[i].brsobe}" onClick="btncl${sobe[i].brsobe}()">BOOK ROOM</button> </div></div> `);
            }
         }
      }

      let brKreveta = document.getElementById("beds");
      let kvalue = "-";
      brKreveta.onchange = function(){
         setTimeout(start,200);
         slider.min = maxc;
         $(".ind-room").remove();
         kvalue = $("#beds :selected").text();
         for(let i=0;i<sobe.length;i++){
            if(kvalue == "-" && slidevalue >= sobe[i].cijena){
               slider.min = maxc;
               $("#rooms-container").append(`<div class='ind-room'><div class="lijevo"><img src="images/sobe/soba${sobe[i].brsobe}.jpg"></img></div> <div class="desno"><h2>Room no. ${sobe[i].brsobe}</h2><p>Number of beds: ${sobe[i].brkreveta}</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><h3>Price (per night) ${sobe[i].cijena} KM</h3> <div class="btn-container"><button  id="myBtn${sobe[i].brsobe}" onClick="btncl${sobe[i].brsobe}()">BOOK ROOM</button> </div></div> `);
            } 
            else if(kvalue == sobe[i].brkreveta && sobe[i].available == true && slidevalue >= sobe[i].cijena){
               slider.min = maxc;
               $("#rooms-container").append(`<div class='ind-room'><div class="lijevo"><img src="images/sobe/soba${sobe[i].brsobe}.jpg"></img></div> <div class="desno"><h2>Room no. ${sobe[i].brsobe}</h2><p>Number of beds: ${sobe[i].brkreveta}</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><h3>Price (per night) ${sobe[i].cijena} KM</h3> <div class="btn-container"><button id="myBtn${sobe[i].brsobe}" onClick="btncl${sobe[i].brsobe}()">BOOK ROOM</button> </div></div> `);
            }else{
               
            }
         }
      }
      let reserved = false;
      var modal = document.getElementById("myModal");
      var span = document.getElementsByClassName("close")[0]; 
      function closem(){
         modal.style.display = "none";
      }
      function closecontent(){
         $(".rez-container").css("display", "none");
         $("#checkanim").css("display", "block");
      }

      
      function anim(){
         $(".rez-container").css("opacity", "0%");
         
      }
      function btncl1(){
         if(reserved == false){
            $("#popunite").text("");
            document.getElementById("box1").checked = false;
            document.getElementById("box2").checked = false;
            document.getElementById("box3").checked = false;
            modal.style.display = "block";
            $("#cijenakm").text(`${sobe[0].cijena} KM`);
            let b = document.getElementById("checkout");
            let ukupnacijena;
            b.onchange = function(){
               let x = document.getElementById("checkin").value
               let y = document.getElementById("checkout").value
               let cin = moment(x);
               let cout = moment(y);
               let te = cout.diff(cin,"days");
               ukupnacijena = te * sobe[0].cijena;
               $("#cijenakm").text(`${ukupnacijena} KM`)
            }
            let box1 = document.getElementById("box1");
            let box2 = document.getElementById("box2");
            let box3 = document.getElementById("box3");
            box1.onchange = function(){
               let box1c = document.getElementById("box1").checked;
               if(box1c == true){
                  ukupnacijena += 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box1c == false){
                  ukupnacijena -= 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box2.onchange = function(){
               let box2c = document.getElementById("box2").checked;
               if(box2c == true){
                  ukupnacijena += 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box2c == false){
                  ukupnacijena -= 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box3.onchange = function(){
               let box3c = document.getElementById("box3").checked;
               if(box3c == true){
                  ukupnacijena += 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box3c == false){
                  ukupnacijena -= 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
   
            let bookbtn = document.getElementById("bkbtn");
            let fname = document.getElementById("fname");
            let lname = document.getElementById("lname");
            let email = document.getElementById("email");
            bookbtn.onclick = function(){
               if(fname.value == "" || lname.value == "" || email.value == ""){
                  $("#popunite").text("ERROR: Fill in all the fields!");
               }else{
                  reserved = true;
                  anim();
                  setTimeout(closecontent,1000);
                  setTimeout(closem,3000);
                  sobe[0].available = false;
               }
            }
         }else{
            alert("You already have a reserved room!");
         }
       


      }
      function btncl2(){
         if(reserved == false){
            $("#popunite").text("");
            document.getElementById("box1").checked = false;
            document.getElementById("box2").checked = false;
            document.getElementById("box3").checked = false;
            modal.style.display = "block";
            $("#cijenakm").text(`${sobe[1].cijena} KM`);
            let b = document.getElementById("checkout");
            let ukupnacijena;
            b.onchange = function(){
               let x = document.getElementById("checkin").value
               let y = document.getElementById("checkout").value
               let cin = moment(x);
               let cout = moment(y);
               let te = cout.diff(cin,"days");
               ukupnacijena = te * sobe[1].cijena;
               $("#cijenakm").text(`${ukupnacijena} KM`)
            }
            let box1 = document.getElementById("box1");
            let box2 = document.getElementById("box2");
            let box3 = document.getElementById("box3");
            box1.onchange = function(){
               let box1c = document.getElementById("box1").checked;
               if(box1c == true){
                  ukupnacijena += 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box1c == false){
                  ukupnacijena -= 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box2.onchange = function(){
               let box2c = document.getElementById("box2").checked;
               if(box2c == true){
                  ukupnacijena += 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box2c == false){
                  ukupnacijena -= 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box3.onchange = function(){
               let box3c = document.getElementById("box3").checked;
               if(box3c == true){
                  ukupnacijena += 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box3c == false){
                  ukupnacijena -= 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
   
            let bookbtn = document.getElementById("bkbtn");
            let fname = document.getElementById("fname");
            let lname = document.getElementById("lname");
            let email = document.getElementById("email");
            bookbtn.onclick = function(){
               if(fname.value == "" || lname.value == "" || email.value == ""){
                  $("#popunite").text("ERROR: Fill in all the fields!");
               }else{
                  reserved = true;
                  anim();
                  setTimeout(closecontent,1000);
                  setTimeout(closem,3000);
                  sobe[1].available = false;
               }
            }
         }else{
            alert("You already have a reserved room!");
         }
      }
      function btncl3(){
         if(reserved == false){
            $("#popunite").text("");
            document.getElementById("box1").checked = false;
            document.getElementById("box2").checked = false;
            document.getElementById("box3").checked = false;
            modal.style.display = "block";
            $("#cijenakm").text(`${sobe[2].cijena} KM`);
            let b = document.getElementById("checkout");
            let ukupnacijena;
            b.onchange = function(){
               let x = document.getElementById("checkin").value
               let y = document.getElementById("checkout").value
               let cin = moment(x);
               let cout = moment(y);
               let te = cout.diff(cin,"days");
               ukupnacijena = te * sobe[2].cijena;
               $("#cijenakm").text(`${ukupnacijena} KM`)
            }
            let box1 = document.getElementById("box1");
            let box2 = document.getElementById("box2");
            let box3 = document.getElementById("box3");
            box1.onchange = function(){
               let box1c = document.getElementById("box1").checked;
               if(box1c == true){
                  ukupnacijena += 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box1c == false){
                  ukupnacijena -= 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box2.onchange = function(){
               let box2c = document.getElementById("box2").checked;
               if(box2c == true){
                  ukupnacijena += 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box2c == false){
                  ukupnacijena -= 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box3.onchange = function(){
               let box3c = document.getElementById("box3").checked;
               if(box3c == true){
                  ukupnacijena += 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box3c == false){
                  ukupnacijena -= 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
   
            let bookbtn = document.getElementById("bkbtn");
            let fname = document.getElementById("fname");
            let lname = document.getElementById("lname");
            let email = document.getElementById("email");
            bookbtn.onclick = function(){
               if(fname.value == "" || lname.value == "" || email.value == ""){
                  $("#popunite").text("ERROR: Fill in all the fields!");
               }else{
                  reserved = true;
                  anim();
                  setTimeout(closecontent,1000);
                  setTimeout(closem,3000);
                  sobe[2].available = false;
               }
            }
         }else{
            alert("You already have a reserved room!");
         }
      }
      function btncl4(){
         if(reserved == false){
            $("#popunite").text("");
            document.getElementById("box1").checked = false;
            document.getElementById("box2").checked = false;
            document.getElementById("box3").checked = false;
            modal.style.display = "block";
            $("#cijenakm").text(`${sobe[3].cijena} KM`);
            let b = document.getElementById("checkout");
            let ukupnacijena;
            b.onchange = function(){
               let x = document.getElementById("checkin").value
               let y = document.getElementById("checkout").value
               let cin = moment(x);
               let cout = moment(y);
               let te = cout.diff(cin,"days");
               ukupnacijena = te * sobe[3].cijena;
               $("#cijenakm").text(`${ukupnacijena} KM`)
            }
            let box1 = document.getElementById("box1");
            let box2 = document.getElementById("box2");
            let box3 = document.getElementById("box3");
            box1.onchange = function(){
               let box1c = document.getElementById("box1").checked;
               if(box1c == true){
                  ukupnacijena += 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box1c == false){
                  ukupnacijena -= 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box2.onchange = function(){
               let box2c = document.getElementById("box2").checked;
               if(box2c == true){
                  ukupnacijena += 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box2c == false){
                  ukupnacijena -= 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box3.onchange = function(){
               let box3c = document.getElementById("box3").checked;
               if(box3c == true){
                  ukupnacijena += 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box3c == false){
                  ukupnacijena -= 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
   
            let bookbtn = document.getElementById("bkbtn");
            let fname = document.getElementById("fname");
            let lname = document.getElementById("lname");
            let email = document.getElementById("email");
            bookbtn.onclick = function(){
               if(fname.value == "" || lname.value == "" || email.value == ""){
                  $("#popunite").text("ERROR: Fill in all the fields!");
               }else{
                  reserved = true;
                  anim();
                  setTimeout(closecontent,1000);
                  setTimeout(closem,3000);
                  sobe[3].available = false;
               }
            }
         }else{
            alert("You already have a reserved room!");
         }
      }
      function btncl5(){
         if(reserved == false){
            $("#popunite").text("");
            document.getElementById("box1").checked = false;
            document.getElementById("box2").checked = false;
            document.getElementById("box3").checked = false;
            modal.style.display = "block";
            $("#cijenakm").text(`${sobe[4].cijena} KM`);
            let b = document.getElementById("checkout");
            let ukupnacijena;
            b.onchange = function(){
               let x = document.getElementById("checkin").value
               let y = document.getElementById("checkout").value
               let cin = moment(x);
               let cout = moment(y);
               let te = cout.diff(cin,"days");
               ukupnacijena = te * sobe[4].cijena;
               $("#cijenakm").text(`${ukupnacijena} KM`)
            }
            let box1 = document.getElementById("box1");
            let box2 = document.getElementById("box2");
            let box3 = document.getElementById("box3");
            box1.onchange = function(){
               let box1c = document.getElementById("box1").checked;
               if(box1c == true){
                  ukupnacijena += 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box1c == false){
                  ukupnacijena -= 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box2.onchange = function(){
               let box2c = document.getElementById("box2").checked;
               if(box2c == true){
                  ukupnacijena += 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box2c == false){
                  ukupnacijena -= 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box3.onchange = function(){
               let box3c = document.getElementById("box3").checked;
               if(box3c == true){
                  ukupnacijena += 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box3c == false){
                  ukupnacijena -= 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
   
            let bookbtn = document.getElementById("bkbtn");
            let fname = document.getElementById("fname");
            let lname = document.getElementById("lname");
            let email = document.getElementById("email");
            bookbtn.onclick = function(){
               if(fname.value == "" || lname.value == "" || email.value == ""){
                  $("#popunite").text("ERROR: Fill in all the fields!");
               }else{
                  reserved = true;
                  anim();
                  setTimeout(closecontent,1000);
                  setTimeout(closem,3000);
                  sobe[4].available = false;
               }
            }
         }else{
            alert("You already have a reserved room!");
         }
      }
      function btncl6(){
         if(reserved == false){
            $("#popunite").text("");
            document.getElementById("box1").checked = false;
            document.getElementById("box2").checked = false;
            document.getElementById("box3").checked = false;
            modal.style.display = "block";
            $("#cijenakm").text(`${sobe[5].cijena} KM`);
            let b = document.getElementById("checkout");
            let ukupnacijena;
            b.onchange = function(){
               let x = document.getElementById("checkin").value
               let y = document.getElementById("checkout").value
               let cin = moment(x);
               let cout = moment(y);
               let te = cout.diff(cin,"days");
               ukupnacijena = te * sobe[5].cijena;
               $("#cijenakm").text(`${ukupnacijena} KM`)
            }
            let box1 = document.getElementById("box1");
            let box2 = document.getElementById("box2");
            let box3 = document.getElementById("box3");
            box1.onchange = function(){
               let box1c = document.getElementById("box1").checked;
               if(box1c == true){
                  ukupnacijena += 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box1c == false){
                  ukupnacijena -= 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box2.onchange = function(){
               let box2c = document.getElementById("box2").checked;
               if(box2c == true){
                  ukupnacijena += 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box2c == false){
                  ukupnacijena -= 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box3.onchange = function(){
               let box3c = document.getElementById("box3").checked;
               if(box3c == true){
                  ukupnacijena += 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box3c == false){
                  ukupnacijena -= 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
   
            let bookbtn = document.getElementById("bkbtn");
            let fname = document.getElementById("fname");
            let lname = document.getElementById("lname");
            let email = document.getElementById("email");
            bookbtn.onclick = function(){
               if(fname.value == "" || lname.value == "" || email.value == ""){
                  $("#popunite").text("ERROR: Fill in all the fields!");
               }else{
                  reserved = true;
                  anim();
                  setTimeout(closecontent,1000);
                  setTimeout(closem,3000);
                  sobe[5].available = false;
               }
            }
         }else{
            alert("You already have a reserved room!");
         }
      }
      function btncl7(){
         if(reserved == false){
            $("#popunite").text("");
            document.getElementById("box1").checked = false;
            document.getElementById("box2").checked = false;
            document.getElementById("box3").checked = false;
            modal.style.display = "block";
            $("#cijenakm").text(`${sobe[6].cijena} KM`);
            let b = document.getElementById("checkout");
            let ukupnacijena;
            b.onchange = function(){
               let x = document.getElementById("checkin").value
               let y = document.getElementById("checkout").value
               let cin = moment(x);
               let cout = moment(y);
               let te = cout.diff(cin,"days");
               ukupnacijena = te * sobe[6].cijena;
               $("#cijenakm").text(`${ukupnacijena} KM`)
            }
            let box1 = document.getElementById("box1");
            let box2 = document.getElementById("box2");
            let box3 = document.getElementById("box3");
            box1.onchange = function(){
               let box1c = document.getElementById("box1").checked;
               if(box1c == true){
                  ukupnacijena += 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box1c == false){
                  ukupnacijena -= 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box2.onchange = function(){
               let box2c = document.getElementById("box2").checked;
               if(box2c == true){
                  ukupnacijena += 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box2c == false){
                  ukupnacijena -= 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box3.onchange = function(){
               let box3c = document.getElementById("box3").checked;
               if(box3c == true){
                  ukupnacijena += 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box3c == false){
                  ukupnacijena -= 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
   
            let bookbtn = document.getElementById("bkbtn");
            let fname = document.getElementById("fname");
            let lname = document.getElementById("lname");
            let email = document.getElementById("email");
            bookbtn.onclick = function(){
               if(fname.value == "" || lname.value == "" || email.value == ""){
                  $("#popunite").text("ERROR: Fill in all the fields!");
               }else{
                  reserved = true;
                  anim();
                  setTimeout(closecontent,1000);
                  setTimeout(closem,3000);
                  sobe[6].available = false;
               }
            }
         }else{
            alert("You already have a reserved room!");
         }
      }
      function btncl8(){
         if(reserved == false){
            $("#popunite").text("");
            document.getElementById("box1").checked = false;
            document.getElementById("box2").checked = false;
            document.getElementById("box3").checked = false;
            modal.style.display = "block";
            $("#cijenakm").text(`${sobe[7].cijena} KM`);
            let b = document.getElementById("checkout");
            let ukupnacijena;
            b.onchange = function(){
               let x = document.getElementById("checkin").value
               let y = document.getElementById("checkout").value
               let cin = moment(x);
               let cout = moment(y);
               let te = cout.diff(cin,"days");
               ukupnacijena = te * sobe[7].cijena;
               $("#cijenakm").text(`${ukupnacijena} KM`)
            }
            let box1 = document.getElementById("box1");
            let box2 = document.getElementById("box2");
            let box3 = document.getElementById("box3");
            box1.onchange = function(){
               let box1c = document.getElementById("box1").checked;
               if(box1c == true){
                  ukupnacijena += 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box1c == false){
                  ukupnacijena -= 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box2.onchange = function(){
               let box2c = document.getElementById("box2").checked;
               if(box2c == true){
                  ukupnacijena += 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box2c == false){
                  ukupnacijena -= 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box3.onchange = function(){
               let box3c = document.getElementById("box3").checked;
               if(box3c == true){
                  ukupnacijena += 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box3c == false){
                  ukupnacijena -= 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
   
            let bookbtn = document.getElementById("bkbtn");
            let fname = document.getElementById("fname");
            let lname = document.getElementById("lname");
            let email = document.getElementById("email");
            bookbtn.onclick = function(){
               if(fname.value == "" || lname.value == "" || email.value == ""){
                  $("#popunite").text("ERROR: Fill in all the fields!");
               }else{
                  reserved = true;
                  anim();
                  setTimeout(closecontent,1000);
                  setTimeout(closem,3000);
                  sobe[7].available = false;
               }
            }
         }else{
            alert("You already have a reserved room!");
         }
      }
      function btncl9(){
         if(reserved == false){
            $("#popunite").text("");
            document.getElementById("box1").checked = false;
            document.getElementById("box2").checked = false;
            document.getElementById("box3").checked = false;
            modal.style.display = "block";
            $("#cijenakm").text(`${sobe[8].cijena} KM`);
            let b = document.getElementById("checkout");
            let ukupnacijena;
            b.onchange = function(){
               let x = document.getElementById("checkin").value
               let y = document.getElementById("checkout").value
               let cin = moment(x);
               let cout = moment(y);
               let te = cout.diff(cin,"days");
               ukupnacijena = te * sobe[8].cijena;
               $("#cijenakm").text(`${ukupnacijena} KM`)
            }
            let box1 = document.getElementById("box1");
            let box2 = document.getElementById("box2");
            let box3 = document.getElementById("box3");
            box1.onchange = function(){
               let box1c = document.getElementById("box1").checked;
               if(box1c == true){
                  ukupnacijena += 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box1c == false){
                  ukupnacijena -= 125;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box2.onchange = function(){
               let box2c = document.getElementById("box2").checked;
               if(box2c == true){
                  ukupnacijena += 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box2c == false){
                  ukupnacijena -= 35;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
            box3.onchange = function(){
               let box3c = document.getElementById("box3").checked;
               if(box3c == true){
                  ukupnacijena += 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
               if(box3c == false){
                  ukupnacijena -= 100;
                  $("#cijenakm").text(`${ukupnacijena} KM`)
               }
            }
   
            let bookbtn = document.getElementById("bkbtn");
            let fname = document.getElementById("fname");
            let lname = document.getElementById("lname");
            let email = document.getElementById("email");
            bookbtn.onclick = function(){
               if(fname.value == "" || lname.value == "" || email.value == ""){
                  $("#popunite").text("ERROR: Fill in all the fields!");
               }else{
                  reserved = true;
                  anim();
                  setTimeout(closecontent,1000);
                  setTimeout(closem,3000);
                  sobe[8].available = false;
               }
            }
         }else{
            alert("You already have a reserved room!");
         }
      }
      function start(){
            span.onclick = function() {
            modal.style.display = "none";
            $("#cijenakm").text(`${sobe[9].cijena} KM`)
            let b = document.getElementById("checkout");
            b.onchange = function(){
               let x = document.getElementById("checkin").value
               let y = document.getElementById("checkout").value
               let cin = moment(x);
               let cout = moment(y);
               let te = cout.diff(cin,"days");
               let ukupnacijena = te * sobe[9].cijena;
               $("#cijenakm").text(`${ukupnacijena} KM`)
            }
         }
            window.onclick = function(event) {
               if (event.target == modal) {
             modal.style.display = "none";
           }
         }
      }
      
      setTimeout(start,200);
      
   
      
