import { DaoInterface } from './dao.interface';
import { Dao } from './Dao';
import { Person } from '../lesson01-classes/person';
let dao: DaoInterface <Person> = new Dao<Person>();
let person = new Person('Mike');

dao.insert(person);

let dao2: Dao<Person> = new Dao<Person>();