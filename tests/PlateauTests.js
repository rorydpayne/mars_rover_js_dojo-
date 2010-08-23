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
        assertEquals(endPoint, myPlateau.endPoint);
    },

    testCanAddRoversToPlateau: function(){
        var position = new Coordinate(0,0);
        var direction = "N";

        var myPlateau = new Plateau(new Coordinate(3, 3));

        myPlateau.placeNewRover(position, direction);

        assertEquals(position, myPlateau.rover[0].roverCurrentPosition);
        assertEquals("N", myPlateau.rover[0].roverCurrentDirection);
    },

    testCanAddTwoRoversToPlateau: function() {
        var position1 = new Coordinate(0,0);
        var direction1 = "N";
        var position2 = new Coordinate(0,1);
        var direction2 = "E";

        var myPlateau = new Plateau(new Coordinate(3, 3));

        myPlateau.placeNewRover(position1, direction1);
        myPlateau.placeNewRover(position2, direction2);

        assertEquals(position1, myPlateau.rover[0].roverCurrentPosition);
        assertEquals(position2, myPlateau.rover[1].roverCurrentPosition);
        assertEquals("N", myPlateau.rover[0].roverCurrentDirection);
        assertEquals("E", myPlateau.rover[1].roverCurrentDirection);
    }
});