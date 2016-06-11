 // Defining Movie Class

 function Movie(title, year, duration) {

  EventEmitter.call(this);

  this.title = title;
  this.year = year;
  this.duration = duration;

  this.play = function (){

    this.on('play', function(){console.log('play event called')});

    this.status = 'Playing'; 
    console.log('Now playing ' + this.title);

  };
  this.pause = function (){

    if(this.status != 'Playing') {
      
      console.log('The movie is not beign played');

    } else {
      this.status = 'Paused';
      this.on('pause', function(){console.log('pause event called')});
      console.log('The movie ' + this.title + ' is now paused');
    
    }
  };
  this.resume = function (){

    if(this.status == 'Paused') {
      this.play();
      this.status = 'Playing';
      this.on('resume', function(){console.log('resume event called')});
    } else {
      console.log(this.title + ' is not paused');
    } 

  };
  
  console.log('movie called ' + this.title + ' has been created');
};

  Movie.prototype = Object.create(EventEmitter.prototype);


/*Jedi.prototype.jump = function() {
  this.jumping = true;
  return this;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
  return this;
};

var luke = new Jedi();

luke.jump()
  .setHeight(20);*/


/*class Movie{

  constructor(title, year, duration){

    this.title = title;
    this.year = year;
    this.duration = duration;
    this.status;

  }
  play(){

    this.status = 'Playing';
    console.log('Now Playing ' + this.title)

  }; 
  pause(){

    this.status = 'Paused';
    console.log('The movie ' + this.title + ' is paused')

  }; 
  resume(){

    this.status == 'Paused' ? this.play() : console.log('Movie is not paused');

  }; 

};*/