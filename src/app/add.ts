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
export class Phones extends Add{
    screen:string;
    ram:number;
    processor:string;
    
    constructor(
    model:string,
    brand:string,
    image:string,
    devicecolor:string,
    price:number,
    product_details:string,
    screen:string,
    ram:number,
    processor:string){
super(model,brand,image,devicecolor,price,product_details);
this.processor=processor;
this.ram=ram;
this.screen=screen;
    }
}
export class tablets extends Add{
    processor:string;
    internalmemory:string;
    screensize:number;
    ram:number;
    constructor(model:string,brand:string,image:string,devicecolor:string,price:number,product_details:string,
    processor:string,
    internalmemory:string,
    screensize:number,
    ram:number
    ){
        super(model,
brand,
image,
devicecolor,
price,
product_details);
    }
}
export class TV extends Add{
    resolution:string;
    quality:string;
    screentype:string;
    constructor(model:string,brand:string,image:string,devicecolor:string,price:number,product_details:string,
    resolution:string,
    quality:string,
    screentype:string
    ){
        super(model,
brand,
image,
devicecolor,
price,
product_details);
    }
    
}

export class Watch extends Add{
    resolution:string;
    storage:string;
    ram:string;
    screensize:string;
    constructor(model:string,brand:string,image:string,devicecolor:string,price:number,product_details:string,
    resolution:string,
    storage:string,
    screensize:string,
    ram:string
    ){
        super(model,
brand,
image,
devicecolor,
price,
product_details);
    }
    
}