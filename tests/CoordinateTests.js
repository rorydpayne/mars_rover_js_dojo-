var mockControl = null;

TestCase("CoordinateTests", {
    setUp: function() {
		mockControl = new MockControl(null);
    },

    tearDown: function() {
		mockControl.verify();
    },

    testCoordinatesAreAccurate: function(){
        var point = new Coordinate(1,2);
        assertEquals(point.x,1);
        assertEquals(point.y,2);
    },

    testCoordinatesNotEqual: function() {
        var point = new Coordinate(1,2);
        assertNotEquals(point.x,100);
    }
});

