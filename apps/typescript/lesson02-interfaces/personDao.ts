import { Person } from './../lesson01-classes/person';
import { DaoInterface } from './dao.interface';

export class PersonDao implements DaoInterface {
    tableName : String;
    
    insert (person:Person):boolean {
        console.log('Inserting ... ', person.toString());
       return true;
   
    }
    update (Person:Person):boolean{
   
       return true;
    }
    delete (id:number):boolean {
   
       return true;
    }
   find (id:number):Person{
       return null;
   
   }
   findAll():Array<Person>{
       return [new Person ('Mike')];
   
   };

}