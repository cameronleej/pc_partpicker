export class FullBuildItemModel{

    img: string;
    price: string;
    title: string;
    upvotes: string;
    comments: string;
    cpu: string;
    gpu:string;
    userID: string;



    constructor(img: string, price:string, title:string, comments:string, upvotes:string,cpu: string,gpu:string,userID:string){

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