const fs = require('fs');
let ParseFile = require('./reader');

function sortIt(){
  let p = new ParseFile("RIFA.txt");
  p.getParticipants();
  let participants = p.participants;
  let max = -1;
  let maxSelected = -1;
  let selecteds = [];

  let log = "";

  for(let i = 0; i < 10000; i++){
    let number = Math.floor((Math.random() * 1000) % participants.length);
    if(selecteds[number] === undefined){
      selecteds[number] = 1;
    }
    else{
      selecteds[number]+= 1;
    }
    let data = new Date();
    log += `Ganhador: ${participants[number].name}, Senha: ${participants[number].number}\nGanhou: ${selecteds[number]} vezes\nData/hora: ${data.toJSON()}\n#################\n`;
  }

  fs.writeFile("log.txt", log, (err) => {
    if(err){
      console.log(log);
      return console.log("Não foi possível salvar o log");
    }
    console.log("Salvo no arquivo log.txt");
  });

  selecteds.map((item, index) => {
    if(item > max){
      max = item;
      maxSelected = index;
    }
  });

  console.log(`${participants[maxSelected].name} Ganhou com ${max} recorrencias\nNumero da senha: ${participants[maxSelected].number}`);

}


sortIt();
