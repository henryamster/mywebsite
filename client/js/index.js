// window.addEventListener("resize", setup);
// //window.addEventListener()
// var minute = new Date();
// var minutes = minute.getMinutes();
// var px, py;
// function setup() {
//     createCanvas(windowWidth, windowHeight + (windowHeight * .1));
//     colorMode(HSB);
//     background(12, 2, 12);
//     pixelDensity(1);
// px = mouseX;
//     py=mouseY;


// }

// function draw() {
 
//    ellipse(mouseX, mouseY,abs(px-mouseX)+(py-mouseY))
//              px=mouseX;
//     py=mouseY;
//     //fill((random(110,255)));
//     // strokeWeight(4)
//     ;
//     ellipse(-.25 * windowWidth + frameCount % windowWidth * 1.25, (windowWidth * .25) + .5 * windowHeight * sin(frameCount ^ windowHeight), 1);
//     translate(width * .5, height * .5);

//     scale(sin(frameCount) * .450);
//     rotate((frameCount % 360) * PI / 8);

//     var x = random(0, windowWidth);
//     var y = random(0, windowHeight);
//     var t = frameCount + y % x;
//     var movey = atan2(tan(i * movey - y), sin(8.79 * y, x * 2.72)) * max(9.91 + y, -cos(x + 5.50)) * sin(x ^ y) * tan(t * y) - min(1.35 * i, y / 13) + sin(t * x) * sin(y, x) + 8.28;
//     var proj = random(25, 395);
//     for (var i = 2; i < proj; i++) {
//         //fill((proj * i) % 255, 40, 160);
//         noFill();
//        //lol //stroke((proj + i) % 255, 40, proj);
//         stroke((sin(px)>.5)?235:45,56,111);
//         for (var p = 0; p < 4; p++) {
//             scale(.9985);
//             shootingSquare(x + i, y + i, i, movey, p % 3);
//         }

//     }

// }

// function shootingSquare(x, y, i, movey, factor) {

//     beginShape();
//     vertex(x, i);
//     bezierVertex(y - x, i - y, x + i * 3 + y, y + i * 3 - x, movey + i, movey + i);
//     bezierVertex(y, i);
//     bezierVertex(x - y, i - x, x, y, movey - i, movey - sin(i));
//     endShape(TRIANGLE_FAN);

//     ellipse(x + i * 13 + y, y + i * 13 - x, movey + i, movey + i);

//     rect(x + i * 3 + y, y + i * 3 - x, -movey + i, -movey + i);
// }


//Henry Fritz Design & Development
//HenryAmsterFritz@gmail.com