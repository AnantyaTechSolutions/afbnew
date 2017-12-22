import { Injectable,Component,Input } from '@angular/core';

@Injectable()
export class FootertextService {
  @Input() footerheading:string;
 
 
  constructor() { }
  texts:string[] = [
    'About Us','Contact Us','Services','Products'
  ];
  getFooterText(){
    console.log(this.footerheading)
    return this.texts[0];
  }
}
