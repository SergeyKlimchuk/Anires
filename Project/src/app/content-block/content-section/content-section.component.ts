import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent implements OnInit {

  items: Array<String> = new Array<String>(5);

  constructor() { }

  ngOnInit() {
  }

}
