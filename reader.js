const fs = require('fs');

class ParseFile{
  constructor(filename){
    this.file = fs.readFileSync(filename, 'utf-8');
    this.participants = [];
  }

  _parseParticipant(participant){
    let data = participant.split(",");
    if(data.length < 2){
      return false;
    }
    let _participant = {
      name: data[0].replace("\n", ""),
      number: data[1]
    }
    return _participant;
  }

  getParticipants(){
    let participants = this.file.split(";");
    for(let participant of participants){
      let p = this._parseParticipant(participant);
      if(p){
        this.participants.push(p);
      }
    }
  }

}

module.exports = ParseFile;
