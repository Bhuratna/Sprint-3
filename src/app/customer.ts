export class Customer{

    username:string;
    email:string;
    password:string;
    mobileNumber:string;
    constructor(username:string, email:string, password:string, mobileNumber:string){
        this.username = username;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
    }
}