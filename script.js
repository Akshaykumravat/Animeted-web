const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
      delay: -1,
      stagger: 0.2,
    })
    // .from(".boundingelem1", {
    //   y: -30,
    //   ease: Expo.easeInOut,
    //   duration: 2,
    //   delay: -1.5,
    //   stagger: 0.2,
    // })
    .from("#footer", {
      // y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

firstPageAnim();

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

circleMouseFollower();


// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;




  elem.addEventListener("mouseleave" , function(dets) {
    gsap.to(elem.querySelector("img"),{
      opacity:0,
      ease: Power3,
    });
  });


  elem.addEventListener("mousemove" , function(dets) {

    var diff = dets.clientY - elem.getBoundingClientRect().top;  
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.utils.clamp(-25 , 25 , diffrot);

    
    gsap.to(elem.querySelector("img"),{
      opacity:1,
      ease: Power3,
      top:diff,
      left:dets.clientX,
      rotate:gsap.utils.clamp(-25 , 25 , diffrot),
    });
  });
});

const currentDate = new Date();

// Get the current time components
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Determine AM or PM
const amPm = hours >= 12 ? 'PM' : 'AM';

// Convert hours to 12-hour format
const hours12 = hours % 12 || 12;

// Format the time as a string (add leading zeros if necessary)
const timeString = `${String(hours12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${amPm}`;

document.querySelector("#time").innerHTML = timeString;


// firstPageAnim();
