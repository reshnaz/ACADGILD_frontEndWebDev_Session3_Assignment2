// This function is called from HTML and the parameters passed are used to create object.
function calculate(carStarted, p) {
    // Car class that makes use of properties from interface "Drivable" and implements it.
    var Car = /** @class */ (function () {
        // This constructor takes boolean and string values 
        // These values indicate whether the car has started and if yes, where it is.
        function Car(hs, l) {
            this.hasStarted = hs;
            this.location = l;
        }
        Car.prototype.start = function () {
            if (this.hasStarted === true) {
                this.driveMsg = "The car has started.";
                this.positionMsg = "The car is currently positioned at ";
                this.drive(this.driveMsg);
                this.getPosition(this.positionMsg, this.location);
            }
            else {
                this.driveMsg = "The car has NOT started.";
                this.drive(this.driveMsg);
                this.getPosition("", "");
            }
        };
        Car.prototype.drive = function (dm) {
            // Display result im HTML
            document.getElementById("driveResult").innerHTML = dm + " <br>";
        };
        Car.prototype.getPosition = function (pm, l) {
            // Display result im HTML
            document.getElementById("positionResult").innerHTML = "" + pm + l + ".";
        };
        return Car;
    }());
    var CEOcar = new Car(carStarted, p); // Create object of class Car with parameters passed on from HTML.
    CEOcar.start();
}
