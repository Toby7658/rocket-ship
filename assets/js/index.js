const canvas = document.getElementById('canvas');
//const canvasContext = canvas.getContext('2d');
// let ship = document.getElementById("rocketship");



// setting width and height to cover full screen
//canvas.width = window.innerHeight;
//canvas.height = window.innerWidth;
//canvasContext.fillStyle = "black";
//canvasContext.fillRect(0, 0, canvas.width, canvas.height); 

// code to create keyboard controls
// window.addEventListener("keydown", (e) => {
//   var actualleft = parseInt(window.getComputedStyle(ship).getPropertyValue("left"));  // contain left property of rocketship
//   if (e.key == "ArrowLeft" && actualleft > 10) {                                     // the number of px from the left
//     ship.style.left = actualleft - 10 + "px";
//   }
//   //1000  =>  gameboard width - ship width
//   else if (e.key == "ArrowRight" && actualleft <= 1400) {
//     ship.style.left = actualleft + 10 + "px";
//   }
// }


let alien = document.getElementById("aliengirl");


let control = document.getElementById('rocketship');
let moveBy = 20;
/*window.addEventListener('load', () => {
  control.style.position = 'absolute';
  control.style.left = 0;
  control.style.top = 300;
});*/

// code for arrow key movement
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
          control.style.left = parseInt(window.getComputedStyle(control).getPropertyValue("left")) - moveBy + 'px';
            break;
        case 'ArrowRight':
          control.style.left = parseInt(window.getComputedStyle(control).getPropertyValue("left")) + moveBy + 'px';
            break;
        case 'ArrowUp':
          control.style.top = parseInt(window.getComputedStyle(control).getPropertyValue("top")) - moveBy + 'px';
            break;
        case 'ArrowDown':
          control.style.top = parseInt(window.getComputedStyle(control).getPropertyValue("top")) + moveBy + 'px';
            break;

            
  if (e.key == "ArrowUp" || e.keyCode == 32) {
    //32 is for space key
    var bullets = document.createElement("div");
    bullet.classList.add("laser");
    game.appendChild(bullet);

    var movebullet = setInterval(() => {    //repeated
      var rocks = document.getElementsByClassName("aliengirl");

      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        if (rock != undefined) {
          var rockbound = rock.getBoundingClientRect();
          var bulletbound = bullet.getBoundingClientRect();

          //Condition to check whether the rock/alien and the bullet are at the same position..!
          //If so,then we have to destroy that rock

          if (
            bulletbound.left >= rockbound.left &&
            bulletbound.right <= rockbound.right &&
            bulletbound.top <= rockbound.top &&
            bulletbound.bottom <= rockbound.bottom
          ) {
            rock.parentElement.removeChild(rock); //Just removing that particular rock;
            //Scoreboard
            document.getElementById("score").innerHTML =
              parseInt(document.getElementById("score").innerHTML) + 1;
          }
        }
      }
      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      //Stops the bullet from moving outside the gamebox
      if (bulletbottom >= 800) {
        clearInterval(movebullet);
      }

      bullet.style.left = left + "px"; //bullet should always be placed at the top of my ship..!
      bullet.style.bottom = bulletbottom + 10 + "px";
    });
  }
}

var generaterocks = setInterval(() => {
  var rock = document.createElement("div");
  rock.classList.add("aliengirl");
  //Just getting the left of the rock to place it in random position...
  var rockleft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left")
  );
  //generate value between 0 to 450 where 450 => gameboard width - rock width
  rock.style.left = Math.floor(Math.random() * 3450) + "px";

  canvas.appendChild(rock);
}, 1000);

var moverocks = setInterval(() => {
  var rocks = document.getElementsByClassName("aliengirl");

  if (rocks != undefined) {
    for (var i = 0; i < rocks.length; i++) {
      //Now I have to increase the top of each rock,so that the rocks can move downwards..
      var rock = rocks[i]; //getting each rock
      var rocktop = parseInt(
        window.getComputedStyle(rock).getPropertyValue("top")
      );
      //475 => game board height - rockheight + 25
      if (rocktop >= 800) {
        alert("Game Over");
        clearInterval(moverocks);
        window.location.reload();
      }

      rock.style.top = rocktop + 25 + "px";
    }
  }
}, 650);  // speed of alien 
    }
);









//   if (e.key == "ArrowUp" || e.keyCode == 32) {
//     //32 is for space key
//     var bullets = document.createElement("div");
//     bullet.classList.add("laser");
//     game.appendChild(bullet);

//     var movebullet = setInterval(() => {    //repeated
//       var rocks = document.getElementsByClassName("aliengirl");

//       for (var i = 0; i < rocks.length; i++) {
//         var rock = rocks[i];
//         if (rock != undefined) {
//           var rockbound = rock.getBoundingClientRect();
//           var bulletbound = bullet.getBoundingClientRect();

//           //Condition to check whether the rock/alien and the bullet are at the same position..!
//           //If so,then we have to destroy that rock

//           if (
//             bulletbound.left >= rockbound.left &&
//             bulletbound.right <= rockbound.right &&
//             bulletbound.top <= rockbound.top &&
//             bulletbound.bottom <= rockbound.bottom
//           ) {
//             rock.parentElement.removeChild(rock); //Just removing that particular rock;
//             //Scoreboard
//             document.getElementById("score").innerHTML =
//               parseInt(document.getElementById("score").innerHTML) + 1;
//           }
//         }
//       }
//       var bulletbottom = parseInt(
//         window.getComputedStyle(bullet).getPropertyValue("bottom")
//       );

//       //Stops the bullet from moving outside the gamebox
//       if (bulletbottom >= 800) {
//         clearInterval(movebullet);
//       }

//       bullet.style.left = left + "px"; //bullet should always be placed at the top of my ship..!
//       bullet.style.bottom = bulletbottom + 10 + "px";
//     });
//   }
// });

// var generaterocks = setInterval(() => {
//   var rock = document.createElement("div");
//   rock.classList.add("aliengirl");
//   //Just getting the left of the rock to place it in random position...
//   var rockleft = parseInt(
//     window.getComputedStyle(rock).getPropertyValue("left")
//   );
//   //generate value between 0 to 450 where 450 => gameboard width - rock width
//   rock.style.left = Math.floor(Math.random() * 3450) + "px";

//   canvas.appendChild(rock);
// }, 1000);

// var moverocks = setInterval(() => {
//   var rocks = document.getElementsByClassName("aliengirl");

//   if (rocks != undefined) {
//     for (var i = 0; i < rocks.length; i++) {
//       //Now I have to increase the top of each rock,so that the rocks can move downwards..
//       var rock = rocks[i]; //getting each rock
//       var rocktop = parseInt(
//         window.getComputedStyle(rock).getPropertyValue("top")
//       );
//       //475 => game board height - rockheight + 25
//       if (rocktop >= 800) {
//         alert("Game Over");
//         clearInterval(moverocks);
//         window.location.reload();
//       }

//       rock.style.top = rocktop + 25 + "px";
//     }
//   }
// }, 450);  // speed of alien 
