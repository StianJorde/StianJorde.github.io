//
// deklarerer variablene
//
let Saldo = 150; //Hvor mye penger jeg har
let antallMelk = 0; //Hvor mye melk jeg har
let prisMelk = 25;
let melkPrRore = 0.4;
let antallMel = 0; //Hvor mye mel jeg har
let prisMel = 15;
let melPrRore = 0.4;
let antallEgg = 0; //Hvor mye egg jeg har
let prisEgg = 30;
let eggPrRore = 3;
let antallSyltetoy = 0; //Hvor mye syltetøy jeg har
let prisSyltetoy = 50;
let syltetoyPrVaffel = 50;
let prisPrVaffel = 15; //Pris pr vaffel
let antallRore = 0; //Hvor mye røre jeg har
let antallVafler = 0; //Hvor mange ferdige vafler jeg har
let steketid = 2000;
let medianMarkedspris = 15;
let sjekkSalgIntervall = 2000;
let sjekkSalgId = setInterval(sjekkSalg, sjekkSalgIntervall);

// øknøknøkn
//

oppdaterUI();
document.getElementById("solgtAlert").style.visibility = "hidden";

//
// definerer funksjonene
//

function oppdaterUI() {
  document.getElementById("viserAntallMelk").innerText =
    Math.floor(antallMelk * 10) / 10;
  document.getElementById("viserPrisMelk").innerText = prisMelk;
  document.getElementById("viserAntallMel").innerText =
    Math.floor(antallMel * 10) / 10;
  document.getElementById("viserPrisMel").innerText = prisMel;
  document.getElementById("viserAntallEgg").innerText = antallEgg;
  document.getElementById("viserPrisEgg").innerText = prisEgg;
  document.getElementById("viserAntallSyltetoy").innerText = antallSyltetoy;
  document.getElementById("viserPrisSyltetoy").innerText = prisSyltetoy;
  document.getElementById("viserAntallRore").innerText = antallRore;
  document.getElementById("viserAntallVafler").innerText = antallVafler;
  document.getElementById("viserPris").innerText = prisPrVaffel;
  document.getElementById("viserSaldo").innerText = Saldo;
  if (
    antallMelk >= melkPrRore &&
    antallMel >= melPrRore &&
    antallEgg >= eggPrRore
  ) {
    document.getElementById("lagRoreKnapp").disabled = false;
  } else {
    document.getElementById("lagRoreKnapp").disabled = true;
  }
  if (antallRore >= 1 && antallSyltetoy >= syltetoyPrVaffel) {
    document.getElementById("stekVaflerKnapp").disabled = false;
  } else {
    document.getElementById("stekVaflerKnapp").disabled = true;
  }

  if (Saldo >= 100) {
  }
}

function kjopMelk() {
  if (Saldo >= prisMelk) {
    antallMelk = antallMelk + 1; //Øker mengden melk
    Saldo = Saldo - prisMelk; //Minke penger
  }
  oppdaterUI();
}

function kjopMel() {
  if (Saldo >= prisMel) {
    antallMel = antallMel + 2; //Øker mengden mel
    Saldo = Saldo - prisMel; //Minke penger
  }
  oppdaterUI();
}
function kjopEgg() {
  if (Saldo >= prisEgg) {
    antallEgg = antallEgg + 6; //Øker mengden egg
    Saldo = Saldo - prisEgg; //Minke penger
  }
  oppdaterUI();
}
function kjopSyltetoy() {
  if (Saldo >= prisSyltetoy) {
    antallSyltetoy = antallSyltetoy + 500; //Øker mengden syltetøy
    Saldo = Saldo - prisSyltetoy; //Minke penger
  }
  oppdaterUI();
}

function lagRore() {
  if (
    antallMelk >= melkPrRore &&
    antallMel >= melPrRore &&
    antallEgg >= eggPrRore
  ) {
    antallMelk -= melkPrRore;
    antallMel -= melPrRore;
    antallEgg -= eggPrRore;
    antallRore += 6;
  }
  oppdaterUI();
}

function stekVafler() {
  if (antallRore >= 1 && antallSyltetoy >= syltetoyPrVaffel) {
    antallRore -= 1;
    antallSyltetoy -= syltetoyPrVaffel;
    oppdaterUI();
    document.getElementById("stekVaflerKnapp").disabled = true;
    setTimeout(() => {
      antallVafler += 1;
      oppdaterUI();
    }, steketid);
  }
}

function senkPris() {
  if (prisPrVaffel >= 1) {
    prisPrVaffel -= 1;
  }
  oppdaterUI();
}

function okPris() {
  prisPrVaffel += 1;
  oppdaterUI();
}

function sjekkSalg() {
  let tilfeldigPris = Math.random() * 20 + medianMarkedspris - 20 / 2;
  console.log(tilfeldigPris);
  if (tilfeldigPris >= prisPrVaffel && antallVafler >= 1) {
    antallVafler -= 1;
    Saldo += prisPrVaffel;
    oppdaterUI();
    document.getElementById("solgtAlert").style.visibility = "visible";
    setTimeout(() => {
      document.getElementById("solgtAlert").style.visibility = "hidden";
    }, 500);
  }
}
