import { Person } from './person';
 export class student extends Person{

    constructor (name : string){
        super(name);

    }

    public showAge(age:number) : void {

            console.log('Studiyng...');
            super.showAge(25);
    }
}