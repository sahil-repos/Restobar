export class Ingredient{

    // public name:string;
    // public amount:number;

    // constructor(
    //     name:string, amount:number)
    // {
    //     this.name=name;
    //     this.amount=amount;

    // }
    //typescript offer: istead of declaring properties,
    //simply add an accessor to the prop in ctor
    //now can be treated as propeties


    constructor(public name:string,public amount:number){}

}