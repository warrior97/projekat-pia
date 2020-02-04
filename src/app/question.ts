export class Question {
    public name:string;
    public question:string;
    public type:string;
    public answer:string
    public choices:Array<any>;
    public correct:Array<any>;
    public randomize:boolean;
    public points:number;


    constructor(){
        this.name='';
        this.question='';
        this.type='';
        this.choices=[];
        this.randomize=false;
        this.points=0;
    }
}