export class ProductItemModel{

    img: string;
    price: number;
    title: string;
    comments: number;
    description: string;


    constructor(img: string, price:number, title:string, comments:number,description: string){

        this.img = img;
        this.price = price;
        this.title = title;
        this.comments = comments;
        this.description = description;

    }
}