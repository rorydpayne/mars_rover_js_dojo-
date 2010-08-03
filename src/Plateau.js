function Plateau(endPoint)
{
    this.endPoint = endPoint;

    this.placeRover = function (position, direction) {
        this.roverCurrentPosition = position;
        this.roverCurrentDirection = direction;
    },

    this.moveRover = function(instruction)
    {
        switch (instruction) {
            case "M":
                this.roverCurrentPosition = new Coordinate(0, 1);
                break;
            case "R":
                this.roverCurrentDirection = "E";
                break;
            case "L":
                this.roverCurrentDirection = "W";
                break;

        }
    }
}