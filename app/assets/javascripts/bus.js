function Bus() {
  this.passengers = [];
}


Bus.prototype.isEmpty = function(){
  return this.passengers.length === 0;
}

Bus.prototype.add = function(passenger){
  if (!this.contains(passenger)){
    this.passengers.push(passenger);
  } else {
    throw "already on the bus"
  }
}

Bus.prototype.contains = function(passenger){
  return this.passengers.indexOf(passenger) !== -1;
}

Bus.prototype.getSize = function(){
  return this.passengers.length;
}

Bus.prototype.getPassengers = function(){
  var names = [];
  for (var i = 0; i < this.getSize(); i++) {
      names.push(this.passengers[i].name);
  }
  return names
}
