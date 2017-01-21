import { Injectable } from '@angular/core';
import {Add,Phones,tablets,TV,wears} from "./add"
@Injectable()

export class PostingService {

  constructor() { }
  post:Add[]=[new Phones("LG G5","LG","images/G5-medium07.jpg","Silver",47800,
  "Versions: H850 (Europe); LG G5 Speed H858 (Taiwan) VS987(Verizon); H820 (AT&T); LS992 (Sprint); H830 (T-Mobile); US992 (US Cellular); Vodafone Also known as LG G5 Dual H860N with dual-SIM card slots",
  "5.3 inches (~70.1% screen-to-body ratio)",
  "4 GB RAM",
  "Quad-core (2x2.15 GHz Kryo & 2x1.6 GHz Kryo)"
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
    ""
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
  ""
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
  ""
)

  ];
AddCart:Add[]=[];
getPost(){
  return this.post;
}
getCart(){
  return this.AddCart;
}
PhoneAdd(){

}
tabletAdd(){

}
tvAdd(){

}
WearsAdd(){

}

cartAdd(){
  this.AddCart.push(this.post[id]);
}
}
