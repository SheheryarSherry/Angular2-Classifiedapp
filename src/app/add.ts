export class Add {
    model:string;
    brand:string;
    image:string;
    devicecolor:string;
    addedincart=false;
    product_details:string;
    price:number;
    constructor(model:string,brand:string,image:string,devicecolor:string,price:number,product_details:string){
        this.model=model;
        this.brand=brand;
        this.image=image;
        this.price=price;
        this.product_details=product_details;
        
    }
}
