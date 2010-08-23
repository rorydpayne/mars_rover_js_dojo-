var mockControl = null;

TestCase("RoverTests", {
	setUp: function() {
		mockControl = new MockControl(null);
    },

    tearDown: function() {
		mockControl.verify();
    },

    testCanMoveRoverForwardsWhenFacingNorth: function() {
        var position = new Coordinate(0,0);
        var direction = "N";

        var rover = new Rover(position, direction);
        rover.moveRover('M');

        assertEquals(new Coordinate(0, 1).toString(), rover.roverCurrentPosition.toString());
    },

    testCanTurnRoverRightWhenFacingNorth: function() {
        var position = new Coordinate(0,0);
        var direction = "N";

        var rover = new Rover(position, direction);
        rover.moveRover('R');

        assertEquals("E", rover.roverCurrentDirection);
    },

    testCanTurnRoverLeftWhenFacingNorth: function() {
        var position = new Coordinate(0,0);
        var direction = "N";

        var rover = new Rover(position, direction);
        rover.moveRover("L");

        assertEquals("W", rover.roverCurrentDirection);
    },

    testCarRoverMovePosition: function()
    {
        var position = new Coordinate(0,0);
        var direction = "N";

        var rover = new Rover(position, direction);
        rover.moveRover("RM");

        assertEquals("E", rover.roverCurrentDirection);
        assertEquals(new Coordinate(1,0), rover.roverCurrentPosition);
    }
});