function Coordinate(x, y)
{
    this.x = x;
    this.y = y;
}

Coordinate.prototype.toString = function() {
   return this.x + ", " + this.y;
};