export class BuildItemModel{

    img: string;
    price: number;
    title: string;
    upvotes: number;
    comments: number;
    cpu: string;
    gpu:string;
    userID: string;



    constructor(img: string, price:number, title:string, comments:number, upvotes:number,cpu: string,gpu:string,userID:string){

        this.img = img;
        this.price = price;
        this.title = title;
        this.comments = comments;
        this.upvotes = upvotes;
        this.cpu = cpu;
        this.gpu = gpu;
        this.userID = userID;
        

    }
}