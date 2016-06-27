
        <!-- <script type="text/javascript" src="js/EventEmitter.js"></script>
        <script type="text/javascript" src="js/Movie.js"></script>
        <script type="text/javascript" src="js/Logger.js"></script>
        <script type="text/javascript" src="js/socialObject.js"></script>
        <script type="text/javascript" src="js/Actor.js"></script> -->

            let lordOfTheRings = new Movie('The Lord of the Rings: The Fellowship of the Ring', 2001, 2.5);
            let logger = new Logger();
            lordOfTheRings.on('play', logger.log("Hola soy el log del evento play de la pelicula LOTR: TFOTR"));
            lordOfTheRings.play();

            Object.assign(lordOfTheRings, social);
            lordOfTheRings.share('Martin Fares');
            lordOfTheRings.like('Martin Fares'); 

        let aragorn = new Actor('Arnold Schwarzenegger', 50);
        let otherCast = [
         new Actor('Paul Winfield', 50),
         new Actor('Michael Biehn', 50),
         new Actor('Linda Hamilton', 50)
        ];

        lordOfTheRings.addCast(aragorn);
        lordOfTheRings.addCast(otherCast); //Movie must contain an array of 4 actors