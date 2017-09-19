const dodgerRightEdge = dodgerLeftEdge+40;

   const rockLeftEdge = positionToInteger(rock.style.left)

   // FIXME: The rock is 20 pixel's wide -- how do we get the right edge?
   const rockRightEdge = rockLeftEdge+20;

   if (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge)
       {return true}
   if (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge)
       {return true}
   if (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge)
       {return true}
       /**
              * Think about it -- what's happening here?
              * There's been a collision if one of three things is true:
              * 1. The rock's left edge is < the DODGER's left edge,
              *    and the rock's right edge is > the DODGER's left edge;
              * 2. The rock's left edge is > the DODGER's left edge,
              *    and the rock's right edge is < the DODGER's right edge;
              * 3. The rock's left edge is < the DODGER's right edge,
              *    and the rock's right edge is > the DODGER's right edge
              */

 }
 clearInterval(gameInterval)
 window.removeEventListener('keydown', moveDodger);
 alert("YOU LOSE!")

}

function moveDodger(e) {
 // implement me!
 /**
  * This function should call `moveDodgerLeft()`
  * if the left arrow is pressed and `moveDodgerRight()`
  * if the right arrow is pressed. (Check the constants
  * we've declared for you above.)
  * And be sure to use the functions declared below!
  */
  if (parseInt(e.which) === LEFT_ARROW){e.preventDefault();
    moveDodgerLeft();
  e.stopPropagation();};
  if (parseInt(e.which) === RIGHT_ARROW){e.preventDefault();
    moveDodgerRight();
  e.stopPropagation();};
}

function moveDodgerLeft(e) {
 // implement me!
 /**
  * This function should move DODGER to the left
  * (mabye 4 pixels?). Use window.requestAnimationFrame()!
  */
 function moveDodgetToLeft(e) {document.addEventListener('keydown', function(e) {
 if (parseInt(e.which) === LEFT_ARROW) {


   var leftNumbers = dodger.style.left.replace('px', '')
   var left = parseInt(leftNumbers, 10)
   if (left > 0) {

 dodger.style.left = `${left - 4}px`
}
}

})
}
window.requestAnimationFrame(moveDodgetToLeft)}

function moveDodgerRight() {

 // implement me!
 /**
  * This function should move DODGER to the right
  * (mabye 4 pixels?). Use window.requestAnimationFrame()!
  */
 function moveDodgerToRight(e) {document.addEventListener('keydown', function(e) {
 if (parseInt(e.which) === RIGHT_ARROW) {
   var leftNumbers = dodger.style.left.replace('px', '')
   var left = parseInt(leftNumbers, 10)

   dodger.style.left = `${left + 4}px`
 }
})}


window.requestAnimationFrame(moveDodgerToRight);}

/**
* @param {string} p The position property
* @returns {number} The position as an integer (without 'px')
*/
function positionToInteger(p) {
 return parseInt(p.split('px')[0]) || 0
}

function start() {
 window.addEventListener('keydown', moveDodger)

 START.style.display = 'none'

 gameInterval = setInterval(function() {
   createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
 }, 1000)
}
