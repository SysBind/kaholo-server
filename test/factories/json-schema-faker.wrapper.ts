import jsf from 'json-schema-faker';
import {ObjectId} from 'mongodb';
import Chance from 'chance';

const chance = new Chance();
jsf.extend('chance', () => chance);

jsf.format('mongoID', () => new ObjectId().toString());

jsf.option('minLength', 5);

export default jsf;
