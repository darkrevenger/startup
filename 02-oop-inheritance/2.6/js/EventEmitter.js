// Defining EventEmitter Class

function EventEmitter(){
  this.eventList = [];
  console.log('EventEmitter created');
};


/**
  *
  * Event register.
  *
  * @param event (string)
  * @param callback (function)
  *
  *
  */

EventEmitter.prototype.on = function(event, callback) {

  this.eventList[event] = callback;

};


/**
  *
  * Execute an event
  *
  *
  *
  *
  * @param event (string)
  *
  */

EventEmitter.prototype.emit = function(event) {

  if(this.eventList[event]){

    this.eventList[event]();

  }  else {

    console.error("Error! El evento no existe");

  }; 

};

EventEmitter.prototype.off = function(event) {

  delete this.eventList[event]; // using delete is a bad practice and WILL AFECT PERFOMANCE

};

EventEmitter.prototype.reset = function() {

  this.eventList = [];

};