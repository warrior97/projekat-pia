import {Question} from './question';
export class Quiz {
    public username:string;
    public name:string;
    public title:string;
    public description:string;
    public test:boolean;
    public questions:Array<Question>;
    public randomize:boolean;

}
