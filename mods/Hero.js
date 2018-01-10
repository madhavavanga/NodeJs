export class Hero{
    constructor(fn){
        this.firstname = fn;
        this._secret = "My Secret";
    }
    static defaultCity(){
        return "Bangalore";
    }
    sayname(){
        return "My Name is "+this.firstname
    }
    set secret(newsecret){
        this._secret = newsecret;
    }
    get secret(){
        return this._secret;
    }
};
export class Company{
    constructor(){
        this.headcount = 5000;
    }
    getHeadCount(){
        return this.headcount;
    }
};

