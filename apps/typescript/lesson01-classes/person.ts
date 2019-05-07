export class Person {

    private name:String;
    constructor(name:string){

        this.name = name;
    }

        public showAge (age:number):void{

            console.log(`${this.name}has ${age} years old`);
        }
        public toString ():string{
            return `Class person, name ${this.name}` ;

        }
}