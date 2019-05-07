import { Person } from './../lesson01-classes/person';
import { DaoInterface } from './dao.interface';
import { PersonDao } from './personDao';

let personDao : DaoInterface ;
personDao = new PersonDao();
let person : Person 
person = new Person('Mike');
personDao.insert(person);
