import { Injectable } from '@angular/core';
import {Add,Phones,Tablets,Tv,Watches} from "./Add"
@Injectable()

export class PostingService {

  constructor() { }
  post:Add[]=[new Phones("LG G5","LG",)]

}
