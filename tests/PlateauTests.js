var mockControl = null;

TestCase("PlateauTests", {
	setUp: function() {
		mockControl = new MockControl(null);
    },

    tearDown: function() {
		mockControl.verify();
    },

    testShouldBeAbleToSetSizeOfPlateau: function() {
        var endPoint = new Coordinate(2,2);
	    var myPlateau = new Plateau(endPoint);
        assertEquals(myPlateau.endPoint, endPoint);
    },

    testCanAddRoversToPlateau: function(){
        var position = new Coordinate(0,0);
        var direction = "N";

        var myPlateau = new Plateau(new Coordinate(3, 3));

        myPlateau.placeRover(position, direction);

        assertEquals(myPlateau.roverCurrentPosition, position);
        assertEquals(myPlateau.roverCurrentDirection, "N");
    },

    testCanMoveRoverForwardsWhenFacingNorth: function() {
        var position = new Coordinate(0,0);
        var direction = "N";
        var myPlateau = new Plateau(new Coordinate(3, 3));
        myPlateau.placeRover(position, direction);
        myPlateau.moveRover('M');

        assertEquals(myPlateau.roverCurrentPosition.toString(), new Coordinate(0, 1).toString());
    },

    testCanTurnRoverRightWhenFacingNorth: function() {
        var position = new Coordinate(0,0);
        var direction = "N";
        var myPlateau = new Plateau(new Coordinate(3, 3));
        myPlateau.placeRover(position, direction);
        myPlateau.moveRover('R');

        assertEquals(myPlateau.roverCurrentDirection, "E");
    },
    
    testCanTurnRoverLeftWhenFacingNorth: function() {
        var position = new Coordinate(0,0);
        var direction = "N";
        var myPlateau = new Plateau(new Coordinate(3, 3));
        myPlateau.placeRover(position, direction);
        myPlateau.moveRover('L');

        assertEquals(myPlateau.roverCurrentDirection, "W");
    }
});