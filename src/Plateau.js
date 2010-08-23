function Plateau(endPoint)
{
    this.endPoint = endPoint;
    this.rover = [];

    this.placeNewRover = function (position, direction) {
        this.rover.push(new Rover(position, direction));
    }
}