// This function is called from HTML and the parameters passed are used to create object.
function calculate(carStarted:boolean, p:string){
// Our interface that defines the skeleton structure of what our Car class implements.
interface Drivable {
    hasStarted: boolean;
    driveMsg: string;
    positionMsg: string;
    location:string;
    start();
    drive(dm: string);
    getPosition(pm: string, l:string);
}

// Car class that makes use of properties from interface "Drivable" and implements it.
class Car implements Drivable {
    hasStarted: boolean;
    driveMsg: string;
    positionMsg: string;
    location:string;
    start() { // Handles cases based on whether car has started or not.
        if(this.hasStarted===true){
            this.driveMsg=`The car has started.`;
            this.positionMsg=`The car is currently positioned at `;
            this.drive(this.driveMsg);
            this.getPosition(this.positionMsg,this.location);
        }
        else{
            this.driveMsg=`The car has NOT started.`;
            this.drive(this.driveMsg);
            this.getPosition(``,``);
        }
    }
    drive(dm: string){
        // Display result im HTML
        document.getElementById("driveResult").innerHTML=`${dm} <br>`;
    }
    getPosition(pm: string, l:string){
        // Display result im HTML
        document.getElementById("positionResult").innerHTML=`${pm}${l}.`;
    }

    // This constructor takes boolean and string values 
    // These values indicate whether the car has started and if yes, where it is.
    constructor(hs:boolean, l:string) {
        this.hasStarted=hs;
        this.location=l;
     }
}

let CEOcar = new Car(carStarted, p); // Create object of class Car with parameters passed on from HTML.
CEOcar.start();
}
