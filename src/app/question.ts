export class Question {
    public name:string;
    public question:string;
    public type:string;
    public choices:Array<any>;
    public correct:Array<any>;
    public randomize:boolean;
    public points:number;
}