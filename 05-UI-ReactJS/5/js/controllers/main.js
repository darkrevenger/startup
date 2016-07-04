// A array of movies to show by default

var moviesArray =  [
    { 
      name: 'The Lord of the Rings: The Fellowship of the Ring', 
      price: 200, 
      year: ('2001 09 19'),
      duration: 180,
      cover: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring.jpg',
      likes: 0
    }, 
    { 
      name: 'The Lord of the Rings: The Fellowship of the Ring II', 
      price: 8, 
      year: ('2001 09 19'), 
      duration: 150,
      cover: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring.jpg',
      likes: 0 
    }, 
    { 
      name: 'The Lord of the Rings: The Two Towers', 
      price: 11.99, 
      year: ('2002 12 18'), 
      duration: 133,
      cover: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Two-Towers.jpg',
      likes: 0 
    }, 
    { 
      name: 'The Lord of the Rings: The Return of the King', 
      price: 7.99, 
      year: ('2003 12 17'), 
      duration: 157,
      cover: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Return-Of-The-King.jpg',
      likes: 0 
    }
];

var MovieRemover = React.createClass({

deleteMovie = function (position) {
  movies.splice(position, 1);


});

// Renders the MovieCreator form, saves the movie and sends the info to MovieLibrary

var MovieCreator = React.createClass({
  getInitialState: function() {
  return {name: '', year: '', duration: '', cover: '', price: ''};
  },
  handleName: function(event) {
    this.setState({name: event.target.value});
  },
  handleYear: function(event) {
    this.setState({year: event.target.value});
  },
  handleDuration: function(event) {
    this.setState({duration: event.target.value});
  },
  handleCover: function(event) {
    this.setState({cover: event.target.value});
  },
  handlePrice: function(event) {
    this.setState({price: event.target.value});
  },
  handleSaveMovie: function () {
    console.log(movie);
    var name = this.state.name;
    var year = this.state.year;
    var duration = this.state.duration;
    var cover = this.state.cover;
    var price = this.state.price; 
    var movie = {name: name, year: year, duration: duration, cover: cover, price: price};
    console.log(movie);
    this.props.onMovieSubmit(movie);
  },
  render: function() {
    return (
      <Formsy.Form onSubmit={this.handleSaveMovie}>
      <h1 className='library-title'>This is the movie library, add them at will</h1>
      <input type='text' required value={this.state.name} onChange={this.handleName} placeholder='Enter Title of the movie' className='text-field' />
      <input type='text' required value={this.state.year} onChange={this.handleYear} placeholder='Enter the year' className='text-field' />
      <input type='number' step='0.01' min='0.5' max='10000' required value={this.state.duration} onChange={this.handleDuration} placeholder='Enter duration in minutes' className='text-field' />
      <input type='text' required value={this.state.cover} onChange={this.handleCover} placeholder='Enter the path of the pic' className='text-field' />
      <input type='number' required value={this.state.price} onChange={this.handlePrice} placeholder='Enter the price' className='text-field' />
      <button className='boton btn btn-success' type='submit'>Add a movie!</button>
      <button className='boton btn btn-info' type='reset'>Reset</button>
      </Formsy.Form> 
    );
  }

});

// Renders the MoviesContainer with all of the movies inside.

var MoviesContainer = React.createClass({
render: function() {
  var showMovies = this.props.movies.map(function(movie, i) {
    return (
      <li key={i}>
      <p className='movie-name'>{ movie.name }</p>
      <p className='movie-year'>{ movie.year }</p>
      <img src={movie.cover} className='img-circle' alt='This is the movie picture!'></img>
      <p className='movie-duration'>this movie is { movie.duration } minutes long</p>
      <p className='movie-price'> { movie.price }</p>
      </li>
      );
    });

  return (
    <ul>
    {showMovies}
    </ul>
  );
}
});

// Renders the main class and add the new movie to the array so it can be rendered by the MovieContainer

var MovieLibrary = React.createClass({
      handleMovieSubmit: function (movie) {
        moviesArray.push(movie);
        this.setState({movies: moviesArray});
    },
      handleMovieRemove: function (movie) {
        moviesArray.push(movie);
        this.setState({movies: moviesArray});
    },
    render: function() {
        return (
          <div>
            <MoviesContainer movies={this.props.movies} />

            <MovieCreator onMovieSubmit={this.handleMovieSubmit} />
            <MovieRemover  />
          </div>
          );
    }
});

// Rendering MovieLibrary, wich renders the rest of the  classes.

ReactDOM.render(<MovieLibrary movies={ moviesArray }  />, 
document.getElementById('container'));