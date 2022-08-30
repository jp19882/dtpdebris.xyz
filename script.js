
// splash screen and background mover

var splashScreen = document.querySelector('.splash');

const content = document.querySelector("#debrisField");

function backgroundMover(){

document.onmousemove = (event) => {
  // the mouse position (in the viewport)
  const viewport_x = event.clientX;
  const viewport_y = event.clientY;
  // console.log(event.clientX + "," + event.clientY);

  // const viewport_x = event.pageX;
  // const viewport_y = event.pageY;
  // console.log(event.pageX + "," + event.pageY);

  // the viewport size
  const viewport_width  = window.innerWidth;
  const viewport_height = window.innerHeight;
  // console.log(window.innerWidth + "," + window.innerHeight);

  // the mouse position, still relative to the viewport
  // but in a range [0, 1]
  const ratio_x = viewport_x / viewport_width;
  const ratio_y = viewport_y / viewport_height;
  // console.log(ratio_x + "," + ratio_y);

  // our content's size
  const content_rect = content.getBoundingClientRect();
  const content_width = content_rect.width;
  const content_height = content_rect.height;
  // console.log(content_width + "," + content_height);

  // transform the mouse position to the content's position
  const content_x = content_width * ratio_x;
  const content_y = content_height * ratio_y;
  // console.log(content_x + "," + content_y);

  // remove it from half the size of the viewport
  // so that aiming at the center of the viewport
  // shows the center of our content
  const translate_x = viewport_width  / 2 - content_x;
  const translate_y = viewport_height / 2 - content_y;
  // console.log(translate_x, translate_y);

  content.style.setProperty("--translate-x", translate_x + "px");
  content.style.setProperty("--translate-y", translate_y + "px");

  };
}


//hide splash screen, start movement, and trigger idle timer

[ splashScreen, content].forEach(function(element) {
   element.addEventListener("click", function() {
    
      splashScreen.style.opacity = 0;
      splashScreen.classList.add("hidden");

      backgroundMover();

      idleOverlay();
   });
});


//idle screen

function idleOverlay() {
  const interval = 1000;
  const timeout = 30;
  let idleCounter = 0;
  window.onload = window.onmousedown = window.onmousemove = function() {
    idleCounter = 0;
    document.documentElement.classList.remove('idle');
  };
  window.setInterval(function() {
    if (++idleCounter >= timeout) {
      document.documentElement.classList.add('idle');
      idleCounter = 0;
    }
  }, interval);
};


// random blur paragraphs

//define all paragraphs in a list
const paragraphs = ["#p1","#p2","#p3","#p4","#p5","#p6","#p7","#p8","#p9","#p10","#p11","#p12","#p13","#p14","#p15","#p16","#p17","#p18","#p19","#p20","#p21","#p22","#p23","#p24","#p25","#p26","#p27","#p28","#p29","#p30","#p31","#p32","#p33","#p34","#p35","#p36","#p37","#p38","#p39","#p40","#p41","#p42","#p43","#p44","#p45","#p46","#p47","#p48","#p49","#p50","#p51","#p52","#p53","#p54","#p55","#p56","#p57","#p58","#p59","#p60","#p61","#p62","#p63","#p64","#p65","#p66","#p67","#p68","#p69","#p70","#p71","#p72","#p73","#p74","#p75","#p76","#p77","#p78","#p79","#p80","#p81","#p82","#p83","#p84","#p85","#p86","#p87","#p88","#p89","#p90","#p91","#p92","#p93","#p94","#p95","#p96","#p97","#p98","#p99","#p100","#p101","#p102","#p103","#p104","#p105","#p106","#p107","#p108","#p109","#p110","#p111","#p112","#p113","#p114","#p115","#p116","#p117","#p118","#p119","#p120","#p121","#p122","#p123","#p124","#p125","#p126","#p127","#p128","#p129","#p130","#p131","#p132","#p133","#p134","#p135","#p136","#p137","#p138","#p139","#p140","#p141","#p142","#p143","#p144","#p145","#p146","#p147","#p148","#p149","#p150","#p151","#p152","#p153","#p154","#p155","#p156","#p157","#p158","#p159","#p160","#p161","#p162","#p163","#p164","#p165","#p166","#p167","#p168","#p169","#p170","#p171","#p172","#p173","#p174","#p175","#p176","#p177","#p178","#p179","#p180","#p181","#p182","#p183","#p184","#p185","#p186","#p187","#p188","#p189","#p190","#p191","#p192","#p193","#p194","#p195","#p196","#p197","#p198","#p199","#p200","#p201","#p202","#p203","#p204","#p205","#p206","#p207","#p208","#p209","#p210","#p211","#p212","#p213","#p214","#p215","#p216","#p217","#p218","#p219","#p220","#p221","#p222","#p223","#p224","#p225","#p226","#p227","#p228","#p229","#p230","#p231","#p232","#p233","#p234","#p235","#p236","#p237","#p238","#p239","#p240","#p241","#p242","#p243","#p244","#p245","#p246","#p247","#p248","#p249","#p250","#p251","#p252","#p253","#p254","#p255","#p256","#p257","#p258","#p259","#p260","#p261","#p262","#p263","#p264","#p265","#p266","#p267","#p268","#p269","#p270","#p271","#p272","#p273","#p274","#p275","#p276","#p277","#p278","#p279","#p280","#p281","#p282","#p283","#p284","#p285","#p286","#p287","#p288","#p289","#p290","#p291","#p292","#p293","#p294","#p295","#p296","#p297","#p298","#p299","#p300","#p301","#p302","#p303","#p304","#p305","#p306","#p307","#p308","#p309","#p310","#p311","#p312","#p313","#p314","#p315","#p316","#p317","#p318","#p319","#p320","#p321","#p322","#p323","#p324","#p325","#p326","#p327","#p328","#p329"
  ];

//select random paragraphs
const randomP = (n) => {
  let newArr = [];
  if (n >= paragraphs.length) {
    return paragraphs;
  }
  for (let i = 0; i < n; i++) {
    let newElem = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    while (newArr.includes(newElem)) {
      newElem = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    }
    newArr.push(newElem);
  }
  return newArr;
}

// run blur animation on selected paragraphs
window.onload = function randomParagraphs(){

  const maxP = 125; //max number of paragraphs selected
  const minP = 100;  //min number of paragraphs selected
  var pQuantity; //the selected paragraphs
  var joinedRandomP; //the selected paragraphs stringed together

  setInterval(function(){
    pQuantity = Math.floor(Math.random() * (maxP - minP + 1)) + minP;
    joinedRandomP = randomP(pQuantity).join(",");
    console.log(joinedRandomP);
  }, 3000);

  setInterval(function(){
    $(joinedRandomP).toggleClass("p-unblur", true);
    setTimeout(function(){
      $(joinedRandomP).toggleClass("p-unblur", false);
    },1500)
  },3000);
};


// random blur images

// retrieve all images
const allImages = document.getElementsByClassName('prz-wrapper');
console.log(allImages);

// select random images
const randomI = (n) => {
  let newArrI = [];
  if (n >= allImages.length) {
    return allImages;
  }
  for (let i = 0; i < n; i++) {
    let newElemI = allImages[Math.floor(Math.random() * allImages.length)];
    while (newArrI.includes(newElemI)) {
      newElemI = allImages[Math.floor(Math.random() * allImages.length)];
    }
    newArrI.push(newElemI);
  }
  return newArrI;
}

// run blur animation on selected images
  function randomImages(){

  const maxI = 125; //max number of images selected
  const minI = 80;  //min number of images selected
  var iQuantity; //the selected images
  var joinedRandomI; //the selected images stringed together

  setInterval(function(){
    iQuantity = Math.floor(Math.random() * (maxI - minI + 1)) + minI;
    // joinedRandomI = randomI(iQuantity).join(",");
    joinedRandomI = randomI(iQuantity);
    console.log(joinedRandomI);
  }, 8000);

  // Random image unblur
  setInterval(function(){
    $(joinedRandomI).toggleClass("unblur", true);
    setTimeout(function(){
      $(joinedRandomI).toggleClass("unblur", false);
    },4000)
  },8000);
};

randomImages();


// Hover + scale up paragraphs

$(document).ready(function () {
  $(".p-container").on("mouseenter", function() {
    $el = $(this);
    console.log($el);
    $el.velocity({
      scale: "1.75",
      width: "19vw"
    },
    {duration:500, delay: 250
    });
  })
});

$(document).ready(function () {
  $(".p-container").on("mouseleave", function() {
    $el = $(this);
    console.log($el);
    $el.velocity("stop");
    $el.velocity({
      scale: "1",
      width: "24vw"
    },
    {duration:1000, delay: 1000
    });
  })
});


//ambient paragraph movement

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let limit1 = "-10";
let limit2 = "10";

let value1 = generateRandomIntegerInRange(limit1,limit2);
let value2 = generateRandomIntegerInRange(limit1,limit2);
let value3 = generateRandomIntegerInRange(limit1,limit2);
let value4 = generateRandomIntegerInRange(limit1,limit2);
let value5 = generateRandomIntegerInRange(limit1,limit2);
let value6 = generateRandomIntegerInRange(limit1,limit2);
let value7 = generateRandomIntegerInRange(limit1,limit2);
let value8 = generateRandomIntegerInRange(limit1,limit2);
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
console.log(value5);
console.log(value6);
console.log(value7);
console.log(value8);

// Ambient paragraph movement
// Paragraph 1
var $element1 = $("#c1");
var mySequence1 = [
    { e: $element1, p: {opacity: 1}, o: {duration: 0}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 0}, o: {duration: 0}},
    { e: $element1, p: {translateX: value1+"vw", translateY: value2+"vw"}, o: {duration: 1000}},
    { e: $element1, p: {opacity: 1}, o: {duration: 0}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 1}, o: {duration: 250}},
    { e: $element1, p: {opacity: 0}, o: {duration: 0}},
    { e: $element1, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence1);
}, 20000);

// Paragraph 2
var $element2 = $("#c5");
var mySequence2 = [
    { e: $element2, p: {opacity: 1}, o: {duration: 0}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 0}, o: {duration: 0}},
    { e: $element2, p: {translateX: value3+"vw", translateY: value4+"vw"}, o: {duration: 1000}},
    { e: $element2, p: {opacity: 1}, o: {duration: 0}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 1}, o: {duration: 250}},
    { e: $element2, p: {opacity: 0}, o: {duration: 0}},
    { e: $element2, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence2);
}, 30000); 

// Paragraph 3
var $element3 = $("#c10");
var mySequence3 = [
    { e: $element3, p: {opacity: 1}, o: {duration: 0}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 0}, o: {duration: 0}},
    { e: $element3, p: {translateX: value3+"vw", translateY: value4+"vw"}, o: {duration: 1000}},
    { e: $element3, p: {opacity: 1}, o: {duration: 0}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 1}, o: {duration: 250}},
    { e: $element3, p: {opacity: 0}, o: {duration: 0}},
    { e: $element3, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence3);
}, 33000); 

// Paragraph 4
var $element4 = $("#c15");
var mySequence4 = [
    { e: $element4, p: {opacity: 1}, o: {duration: 0}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 0}, o: {duration: 0}},
    { e: $element4, p: {translateX: value5+"vw", translateY: value6+"vw"}, o: {duration: 1000}},
    { e: $element4, p: {opacity: 1}, o: {duration: 0}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 1}, o: {duration: 250}},
    { e: $element4, p: {opacity: 0}, o: {duration: 0}},
    { e: $element4, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence4);
}, 33000); 

// Paragraph 5
var $element5 = $("#c18");
var mySequence5 = [
    { e: $element5, p: {opacity: 1}, o: {duration: 0}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 0}, o: {duration: 0}},
    { e: $element5, p: {translateX: value5+"vw", translateY: value6+"vw"}, o: {duration: 1000}},
    { e: $element5, p: {opacity: 1}, o: {duration: 0}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 1}, o: {duration: 250}},
    { e: $element5, p: {opacity: 0}, o: {duration: 0}},
    { e: $element5, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence5);
}, 33000); 


// Paragraph 6
var $element6 = $("#c25");
var mySequence6 = [
    { e: $element6, p: {opacity: 1}, o: {duration: 0}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 0}, o: {duration: 0}},
    { e: $element6, p: {translateX: value1+"vw", translateY: value2+"vw"}, o: {duration: 1000}},
    { e: $element6, p: {opacity: 1}, o: {duration: 0}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 1}, o: {duration: 250}},
    { e: $element6, p: {opacity: 0}, o: {duration: 0}},
    { e: $element6, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence6);
}, 20000);

// Paragraph 7
var $element7 = $("#c30");
var mySequence7 = [
    { e: $element7, p: {opacity: 1}, o: {duration: 0}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 0}, o: {duration: 0}},
    { e: $element7, p: {translateX: value1+"vw", translateY: value2+"vw"}, o: {duration: 1000}},
    { e: $element7, p: {opacity: 1}, o: {duration: 0}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 1}, o: {duration: 250}},
    { e: $element7, p: {opacity: 0}, o: {duration: 0}},
    { e: $element7, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence7);
}, 20000);

// Paragraph 8
var $element8 = $("#c35");
var mySequence8 = [
    { e: $element8, p: {opacity: 1}, o: {duration: 0}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 0}, o: {duration: 0}},
    { e: $element8, p: {translateX: value3+"vw", translateY: value4+"vw"}, o: {duration: 1000}},
    { e: $element8, p: {opacity: 1}, o: {duration: 0}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 1}, o: {duration: 250}},
    { e: $element8, p: {opacity: 0}, o: {duration: 0}},
    { e: $element8, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence8);
}, 30000); 

// Paragraph 9
var $element9 = $("#c40");
var mySequence9 = [
    { e: $element9, p: {opacity: 1}, o: {duration: 0}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 0}, o: {duration: 0}},
    { e: $element9, p: {translateX: value1+"vw", translateY: value2+"vw"}, o: {duration: 1000}},
    { e: $element9, p: {opacity: 1}, o: {duration: 0}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 1}, o: {duration: 250}},
    { e: $element9, p: {opacity: 0}, o: {duration: 0}},
    { e: $element9, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence9);
}, 20000);

// Paragraph 10
var $element10 = $("#c45");
var mySequence10 = [
    { e: $element10, p: {opacity: 1}, o: {duration: 0}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 0}, o: {duration: 0}},
    { e: $element10, p: {translateX: value4+"vw", translateY: value5+"vw"}, o: {duration: 1000}},
    { e: $element10, p: {opacity: 1}, o: {duration: 0}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 1}, o: {duration: 250}},
    { e: $element10, p: {opacity: 0}, o: {duration: 0}},
    { e: $element10, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence10);
}, 20000);


// Paragraph 11
var $element11 = $("#c51");
var mySequence11 = [
    { e: $element11, p: {opacity: 1}, o: {duration: 0}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 0}, o: {duration: 0}},
    { e: $element11, p: {translateX: value3+"vw", translateY: value4+"vw"}, o: {duration: 1000}},
    { e: $element11, p: {opacity: 1}, o: {duration: 0}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 1}, o: {duration: 250}},
    { e: $element11, p: {opacity: 0}, o: {duration: 0}},
    { e: $element11, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence11);
}, 30000);

// Paragraph 12
var $element12 = $("#c60");
var mySequence12 = [
    { e: $element12, p: {opacity: 1}, o: {duration: 0}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 0}, o: {duration: 0}},
    { e: $element12, p: {translateX: value5+"vw", translateY: value6+"vw"}, o: {duration: 1000}},
    { e: $element12, p: {opacity: 1}, o: {duration: 0}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 1}, o: {duration: 250}},
    { e: $element12, p: {opacity: 0}, o: {duration: 0}},
    { e: $element12, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence12);
}, 33000);

// Paragraph 13
var $element13 = $("#c65");
var mySequence13 = [
    { e: $element13, p: {opacity: 1}, o: {duration: 0}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 0}, o: {duration: 0}},
    { e: $element13, p: {translateX: value1+"vw", translateY: value2+"vw"}, o: {duration: 1000}},
    { e: $element13, p: {opacity: 1}, o: {duration: 0}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 1}, o: {duration: 250}},
    { e: $element13, p: {opacity: 0}, o: {duration: 0}},
    { e: $element13, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence13);
}, 20000);

// Paragraph 14
var $element14 = $("#c70");
var mySequence14 = [
    { e: $element14, p: {opacity: 1}, o: {duration: 0}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 0}, o: {duration: 0}},
    { e: $element14, p: {translateX: value4+"vw", translateY: value5+"vw"}, o: {duration: 1000}},
    { e: $element14, p: {opacity: 1}, o: {duration: 0}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 1}, o: {duration: 250}},
    { e: $element14, p: {opacity: 0}, o: {duration: 0}},
    { e: $element14, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence14);
}, 20000);

// Paragraph 15
var $element15 = $("#c75");
var mySequence15 = [
    { e: $element15, p: {opacity: 1}, o: {duration: 0}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 0}, o: {duration: 0}},
    { e: $element15, p: {translateX: value5+"vw", translateY: value6+"vw"}, o: {duration: 1000}},
    { e: $element15, p: {opacity: 1}, o: {duration: 0}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 1}, o: {duration: 250}},
    { e: $element15, p: {opacity: 0}, o: {duration: 0}},
    { e: $element15, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence15);
}, 33000);

// Paragraph 16
var $element16 = $("#c80");
var mySequence16 = [
    { e: $element16, p: {opacity: 1}, o: {duration: 0}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 0}, o: {duration: 0}},
    { e: $element16, p: {translateX: value4+"vw", translateY: value5+"vw"}, o: {duration: 1000}},
    { e: $element16, p: {opacity: 1}, o: {duration: 0}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 1}, o: {duration: 250}},
    { e: $element16, p: {opacity: 0}, o: {duration: 0}},
    { e: $element16, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence16);
}, 20000);

// Paragraph 17
var $element17 = $("#c85");
var mySequence17 = [
    { e: $element17, p: {opacity: 1}, o: {duration: 0}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 0}, o: {duration: 0}},
    { e: $element17, p: {translateX: value5+"vw", translateY: value6+"vw"}, o: {duration: 1000}},
    { e: $element17, p: {opacity: 1}, o: {duration: 0}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 1}, o: {duration: 250}},
    { e: $element17, p: {opacity: 0}, o: {duration: 0}},
    { e: $element17, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence17);
}, 33000);

// Paragraph 18
var $element18 = $("#c89");
var mySequence18 = [
    { e: $element18, p: {opacity: 1}, o: {duration: 0}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 0}, o: {duration: 0}},
    { e: $element18, p: {translateX: value4+"vw", translateY: value5+"vw"}, o: {duration: 1000}},
    { e: $element18, p: {opacity: 1}, o: {duration: 0}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 1}, o: {duration: 250}},
    { e: $element18, p: {opacity: 0}, o: {duration: 0}},
    { e: $element18, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence18);
}, 20000);

// Paragraph 19
var $element19 = $("#c98");
var mySequence19 = [
    { e: $element19, p: {opacity: 1}, o: {duration: 0}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 0}, o: {duration: 0}},
    { e: $element19, p: {translateX: value1+"vw", translateY: value2+"vw"}, o: {duration: 1000}},
    { e: $element19, p: {opacity: 1}, o: {duration: 0}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 1}, o: {duration: 250}},
    { e: $element19, p: {opacity: 0}, o: {duration: 0}},
    { e: $element19, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence19);
}, 33000);

// Paragraph 20
var $element20 = $("#c109");
var mySequence20 = [
    { e: $element20, p: {opacity: 1}, o: {duration: 0}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 0}, o: {duration: 0}},
    { e: $element20, p: {translateX: value1+"vw", translateY: value2+"vw"}, o: {duration: 1000}},
    { e: $element20, p: {opacity: 1}, o: {duration: 0}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},   
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 1}, o: {duration: 250}},
    { e: $element20, p: {opacity: 0}, o: {duration: 0}},
    { e: $element20, p: {translateX: 0, translateY: 0}, o: {duration: 1000}}   
];
// must be minimum 10 seconds longer than sequence
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence20);
}, 33000);


//custom cursor

var $cursor = $('.cursor');

function moveCursor(e) {
  $cursor.addClass('is-moving');
  $cursor.css({"top": e.pageY, "left": e.pageX});
  clearTimeout(timer2);
   var timer2 = setTimeout(function() {
       $cursor.removeClass('is-moving');
   }, 300);
}

$(window).on('mousemove', moveCursor);