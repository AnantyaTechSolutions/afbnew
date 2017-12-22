import { Component, OnInit } from '@angular/core';
import { FootertextService } from '../footertext.service';


@Component({
  selector: 'app-footerlinks',
  templateUrl: './footerlinks.component.html',
  styleUrls: ['./footerlinks.component.css']
})
export class FooterlinksComponent implements OnInit {
  text:string;
  footer=[
    {
        "id": 1,
        "name": 'AIR FREIGHT BAZAAR',
        "submenu": [
                    'About Us', 'Contact Us', 'Servives'
                ]
    },
    {
        "id": 2,
        "name": 'SERVICES',
        "submenu": [
                'Airwaybill', 'Barcode', 'Spot rate'
        ]
    }
    ];
  footerTexts:any = this.footerService.texts;
  constructor(private footerService:FootertextService) { }
  
  ngOnInit() {
    console.log(this.footerService.texts);
    this.text=this.footerService.getFooterText();
    
  }

}
