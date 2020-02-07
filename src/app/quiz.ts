import {Question} from './question';
export class Quiz {
    public username:string;
    public name:string;
    public title:string;
    public description:string;
    public time:number;
    public datetime: number;
    public valid_from_datetime: number;
    public valid_to_datetime: number;
    public test:boolean;
    public questions:Array<Question>=new Array<Question>();
    public randomize:boolean;

}
