import { DaoInterface } from './dao.interface';

export class Dao<T> implements DaoInterface<T> {
    tableName : String;
    
    insert (object:T):boolean {
        console.log('Inserting ... ');
       return true;
   
    }
    update (Person:T):boolean{
   
       return true;
    }
    delete (id:T):boolean {
   
       return true;
    }
   find (id:T):T{
       return null;
   
   }
   findAll():Array<T>{
       return [null];
   
   };

}