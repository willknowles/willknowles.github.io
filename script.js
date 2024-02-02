
// define all your people here. you just have to make each person an object and add it to the nodeSet

var will = { name: "Will" };
var kyle = { name: "Kyle" };
var hannah = { name: "Hannah" };
var pia = { name: "Pia" };
var storm = { name: "Storm" };
var erika = { name: "Erika" };
var kappi = { name: "Kappi" };
var eric = { name: "Eric" };
var mcp = { name: "Matt CP" };
var matts = { name: "Matt S" };
var elena = { name: "Elena" };
var ravi = { name: "Ravi" };
var kaija = { name: "Kaija" };
var simone = { name: "Simone" };
var britts = { name: "Britt S" };
var brittj = { name: "Britt J" };
var emily = { name: "Emily" };
var kobi = { name: "Kobi" };
var chelsea = { name: "Chelsea" };
var madison = { name: "Madison" };
var deirdre = { name: "Deirdre" };
var maddy = { name: "Maddy" };
var monica = { name: "Monica" };
var cubby = { name: "Cubby" };
var joe = { name: "Joe" };
var becca = { name: "Becca" };
var cali = { name: "Cali" };
var cezanne = { name: "Cezanne" };
var sylvie = { name: "Sylvie" };
var alex = { name: "Alex" };
var alisha = { name: "Alisha" };
var brian = { name: "Brian" };
var annie = { name: "Annie" };
var susan = { name: "Susan" };
var hayley = { name: "Hayley" };
var shannon = { name: "Shannon" };
var mischa = { name: "Mischa" };
var paul = { name: "Paul" };
var ben = { name: "Ben" };
var nathan = { name: "Nathan" };
var neil = { name: "Neil" };
var roger = { name: "Roger" };
var lev = { name: "Lev" };
var michael = { name: "Michael" };
var letti = { name: "Letti" };
var julia = { name: "Julia" };
var anna = { name: "Anna" };
var max = { name: "Max" };

var selectedNode = null;
var selectedDataSet = null;

var nodeSet = [
  will,
  hannah,
  kyle,
  pia,
  storm,
  erika,
  kappi,
  eric,
  mcp,
  matts,
  elena,
  ravi,
  kaija,
  simone,
  britts,
  brittj,
  emily,
  kobi,
  chelsea,
  madison,
  deirdre,
  maddy,
  monica,
  cubby,
  joe,
  becca,
  cali,
  cezanne,
  sylvie,
  alex,
  alisha,
  brian,
  hayley,
  shannon,
  mischa,
  paul,
  ben,
  nathan,
  neil,
  roger,
  lev,
  michael,
  letti,
  annie,
  susan,
  julia,
  anna,
  max
];


// fill out the data sets here. some of the data types have a number at the end of 
// each connection list, to indicate whether it is a current connection or not. for
// example, "[will, kyle, hannah, pia, 1]" in 'roommates' means that those 4 people
// currently live together.

var worked = [
  [will, monica, deirdre, kappi, 0],
  [kappi, kobi, eric, mcp, erika, letti, 0],
  [nathan, kyle, matts, mcp, michael, 1],
  [nathan, kyle, matts, mcp, eric, michael, 0],
  [cali, chelsea, 0],
  [hannah, lev, 0]
];

var roommates = [
  [will, kyle, hannah, pia, 1], //motel
  [matts, mcp, eric, kyle, brittj, nathan, neil, roger, michael, 0], //roost
  [erika, will, kappi, storm, 0], // rodeo
  [matts, elena, ravi, eric, kaija, 0], // bratold
  [matts, elena, eric, 1], //brattcurr
  [kaija, storm, ravi, 1], // bernal
  [mcp, matts, eric, storm, britts, joe, sylvie, maddy, alisha, letti, 0], // swamp
  [simone, mcp], //
  [will, emily, kobi, kappi, erika, chelsea, deirdre, kyle, 0], // pizza castle
  [chelsea, erika, emily, madison, 0], // babeville
  [maddy, monica, brittj, 0], // thick fish
  [monica, cubby, 1],
  [cali, cezanne, 1],
  [annie, susan, 0],
  [kobi, emily, shannon, mischa, paul, 0],
  [kobi, emily, shannon, 1],
  [alex, brian, 0],
  [roger, neil, letti, 1],
  [anna, max, 1],
];

// Currently the hookups data is hidden initially and can only be shown by activating the 
// easter egg, in this case by tapping the 'will' node 3 times in a row. see the part
// labeled 'easter egg code' below
var hookups = [
  [will, hannah, pia],
  [hannah, kyle],
  [kaija, joe],
  [kappi, joe],
  [will, joe, becca],
  [will, madison],
  [will, cali],
  [will, kappi, kaija],
  [cali, cezanne],
  [monica, cubby],
  [matts, elena],
  [monica, nathan],
  [mcp, simone],
  [mcp, emily],
  [emily, kobi],
  [deirdre, erika],
  [storm, ravi],
  [brittj, kyle],
  [eric, kappi],
  [britts, mcp],
  [sylvie, mcp],
  [sylvie, joe],
  [will, annie],
  [will, susan],
  [shannon, mischa],
  [kappi, paul],
  [madison, paul],
  [ben, hayley],
  [will, hayley], 
  [ben, kaija],
  [ben, chelsea],
  [becca, kaija],
  [lev, eric],
  [lev, kaija],
  [brian, kaija],
  [anna, max],
];

var school = [
  [mcp, ravi], //scruz
  [eric, matts], //gunn
  [eric, mcp, sylvie, kaija, becca, hannah, lev, michael], //davis
  [elena, kyle, brittj, simone, joe, maddy, cezanne], //stanford
  [ravi, alex, britts], // cornell
  [brian, alex], // chicago hs
  [emily, madison, erika], //chico
  [emily, chelsea, ben], // peninsula hs
  [alisha, britts], //portland hs
  [will, annie, susan, julia], //duke
  [roger, neil], //canada
  [anna, max, kappi], //brown
];

var dated = [
  [kyle, hannah, 1],
  [kyle, brittj, 0],
  [kappi, joe, 0],
  [kappi, eric, 0],
  [chelsea, ben, 0],
  [ben, hayley, 0],
  [ben, kaija, 0],
  [kobi, emily, 1],
  [mcp, emily, 0],
  [mcp, simone, 1],
  [cali, cezanne, 1],
  [storm, ravi, 1],
  [alex, britts, 0],
  [cubby, monica, 1],
  [elena, matts, 1],
  [shannon, mischa, 0],
  [lev, kaija, 0],
  [brian, kaija, 0],
  [anna, max, 1],
];



//initialize the canvas
let MAX_WIDTH = window.innerWidth - 50;
let MAX_HEIGHT = window.innerHeight - 50;

var canvas = document.getElementById("myc");
canvas.height = MAX_HEIGHT;
canvas.width = MAX_WIDTH;
var ctx = canvas.getContext("2d");
var fontSize = 12;
ctx.font = fontSize + "pt Arial";
ctx.textAlign = "center";
var eggCounter = 0;

var edges = [];


function initializeLocations() {
  for (let i = 0; i < nodeSet.length; i++) {
    let randnums = getRandCoord();
    nodeSet[i].x = randnums[0];
    nodeSet[i].y = randnums[1];
  }
}

function drawNodes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  showDataSet(selectedDataSet);
  for (let i = 0; i < nodeSet.length; i++) {
    node = nodeSet[i];

    let shouldDarkenNode = !!selectedNode && !(selectedNode == node);

    for (let j = 0; j < selectedDataSet.length; j++) {
      if (
        selectedDataSet[j].includes(selectedNode) &&
        selectedDataSet[j].includes(node)
      ) {
        shouldDarkenNode = false;
      }
    }
    ctx.beginPath();
    ctx.arc(node.x, node.y, fontSize * 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#7BAFD4";
    ctx.globalAlpha = shouldDarkenNode ? ".3" : ".9";
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.fillText(node.name, node.x, node.y + fontSize / 2);
    ctx.globalAlpha = "1";
  }
}

function getEdges(set) {
  edges = [];
  let lastNumIsCurrent = set == roommates || set == dated || set == worked;
  for (let i = 0; i < set.length; i++) {
    r = set[i];
    let lastNodeIndex = lastNumIsCurrent ? r.length - 1 : r.length;
      console.log (lastNodeIndex);

    for (let j = 0; j < lastNodeIndex; j++) {
      for (let k = j + 1; k < lastNodeIndex; k++) {
        if (!checkIfInEdges(r[j], r[k])) {
          if (lastNumIsCurrent) {
            // console.log(r);
            edges.push([r[j], r[k], r[lastNodeIndex]]);
          } else {
            edges.push([r[j], r[k]]);
          }
        } else {
          let v = indexOfEdge(r[j], r[k]);
          if (lastNumIsCurrent && !edges[v][2] && r[lastNodeIndex]) {
            edges.splice(v, 1);
            edges.push([r[j], r[k], true]);
          }
        }
      }
    }
  }
}

function checkIfInEdges(a, b) {
  for (let i = 0; i < edges.length; i++) {
    if (
      (edges[i][0] == a && edges[i][1] == b) ||
      (edges[i][0] == b && edges[i][1] == a)
    ) {
      return true;
    }
  }
  return false;
}

function indexOfEdge(a, b) {
  for (let i = 0; i < edges.length; i++) {
    if (
      (edges[i][0] == a && edges[i][1] == b) ||
      (edges[i][0] == b && edges[i][1] == a)
    ) {
      return i;
    }
  }
  return -1;
}

function getRandCoord() {
  let THRESHHOLD = 50;
  randx = Math.random() * (MAX_WIDTH - 60) + 30;
  randy = Math.random() * (MAX_HEIGHT - 60) + 30;
  for (let i = 0; i < nodeSet.length; i++) {
    if (
      Math.abs(nodeSet[i].x - randx) <= THRESHHOLD &&
      Math.abs(nodeSet[i].y - randy) <= THRESHHOLD
    ) {
      return getRandCoord();
    }
  }
  return [randx, randy];
}

function showDataSet(set) {
  getEdges(set);
  let lastNumIsCurrent = set == roommates || set == dated || set == worked;

  for (let i = 0; i < edges.length; i++) {
    let e = edges[i];
      let lastNodeIndex = lastNumIsCurrent ? e.length - 1 : e.length;

    let isDark =
      selectedNode != null && selectedNode != e[0] && selectedNode != e[1];
    if (lastNumIsCurrent) {
      ctx.strokeStyle = e[lastNodeIndex] ? "#40b040" : "#b04040";
      ctx.lineWidth = e[lastNodeIndex] ? 2 : 1;
    }

    ctx.beginPath();
    ctx.globalAlpha = isDark ? ".05" : "1";
    ctx.moveTo(e[0].x, e[0].y);
    ctx.lineTo(e[1].x, e[1].y);

    ctx.stroke();
    ctx.strokeStyle = "black";
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
  }
}

function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return [x, y];
}

document.getElementById("hookup").addEventListener("click", () => {
  selectedDataSet = hookups;
  drawNodes();
});

document.getElementById("roommates").addEventListener("click", () => {
  selectedDataSet = roommates;
  drawNodes();
});

document.getElementById("dated").addEventListener("click", () => {
  selectedDataSet = dated;
  drawNodes();
});

document.getElementById("school").addEventListener("click", () => {
  selectedDataSet = school;
  drawNodes();
});

document.getElementById("work").addEventListener("click", () => {
  selectedDataSet = worked;
  drawNodes();
});

canvas.addEventListener("click", (e) => {
  let coord = getCursorPosition(canvas, e);
  for (let i = 0; i < nodeSet.length; i++) {
    if (
      Math.abs(coord[0] - nodeSet[i].x) < 30 &&
      Math.abs(coord[1] - nodeSet[i].y) < 30
    ) {
      selectedNode = nodeSet[i];
      drawNodes();
      // easter egg code
      if (nodeSet[i] == will) {
        eggCounter++;
        if (eggCounter > 2) {
          document.getElementById("hookupParent").style["visibility"] =
            "visible";
        }
      } else {
        eggCounter = 0;
      }
      return;
    }
  }
  selectedNode = null;
  drawNodes();
});

function initializeLoop() {
  initializeLocations();
  selectedDataSet = roommates;
  drawNodes();
}

initializeLoop();
