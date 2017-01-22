import { Injectable } from '@angular/core';
import {Add,Phones,tablets,TV,wears} from "./add"
@Injectable()

export class PostingService {

  constructor() { }
  post:Add[]=[new Phones("LG G5","LG","images/G5-medium07.jpg","Silver",47800,
  "Versions: H850 (Europe); LG G5 Speed H858 (Taiwan) VS987(Verizon); H820 (AT&T); LS992 (Sprint); H830 (T-Mobile); US992 (US Cellular); Vodafone Also known as LG G5 Dual H860N with dual-SIM card slots",
  "5.3 inches (~70.1% screen-to-body ratio)",
  "4 GB RAM",
  "Quad-core (2x2.15 GHz Kryo & 2x1.6 GHz Kryo)",0
  ),
  new tablets(
    "",
    "",
    "",
    "",
    20000,
    "",
    "",
    "",
    "",
    "",
    1
  ),
new TV(
  "",
  "",
  "",
  "",
  50000,
  "",
  "",
  "",
  "",
  2
),
new wears(
  "",
  "",
  "",
  "",
  2899,
  "",
  "",
  "",
  "",
  "",3
)

  ];
AddCart:Add[]=[];
getPost(){
  return this.post;
}
getCart(){
  return this.AddCart;
}
PhoneAdd(model,brand,image,devicecolor,
price,product_details,screen,ram,
processor,id
){
  this.post.push(new Phones(model.value,
  brand.value,image.src,devicecolor.value,
  price,product_details.value,screen.value,ram.value,processor.value,id
  ));

}
tabletAdd(model,
brand,
image,
devicecolor,
price,
product_details,
processor,
internalmemory,
screensize,
ram,
id){
  this.post.push(new tablets(model.value,brand.value,
  image.src,
  devicecolor.value,price,product_details.value,processor.value,
  internalmemory.value,screensize.value,ram.value,id));
}
tvAdd(model,
brand,
image,
devicecolor,
price,
product_details,
resolution,
quality,
screentype,id){
  this.post.push(new TV(model.value,
  brand.value,image.src,
  devicecolor.value,price,product_details.value,resolution.value,quality.value,
  screentype.value,
  id));

}
WearsAdd(model,
brand,
image,
devicecolor,
price,
product_details,
resolution,
storage,
screensize,
ram,
id){
  this.post.push(new wears(model.value,brand.value,
  image.src,
  devicecolor.value,price,product_details.value,
  resolution.value,storage.value,screensize.value,ram.value,
  id));
}

cartAdd(id){
  this.AddCart.push(this.post[id]);
}
removefromcart(id){
  this.AddCart.splice(id,1);
}
}
