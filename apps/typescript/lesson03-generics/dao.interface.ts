export interface DaoInterface <T> {

        tableName : String;
 insert (object:T):boolean;
 update (object:T):boolean;
 delete (id:T):boolean;
find (id:T):T;
findAll():Array<T>;
}