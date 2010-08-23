function Rover(position, direction)
{
    var that = this;

    this.roverCurrentPosition = position;
    this.roverCurrentDirection = direction;

    this.moveRover = function(instructions) {
        for(var i=0; i < instructions.length; i++) {
            processSingleInstruction(instructions.charAt(i).toString());
        }
    };

    function processSingleInstruction(instruction) {

        switch (instruction) {
            case "M":
                that.roverCurrentPosition = new Coordinate(0, 1);
                break;
            case "R":
                that.roverCurrentDirection = "E";
                break;
            case "L":
                that.roverCurrentDirection = "W";
                break;
        }
    }
}