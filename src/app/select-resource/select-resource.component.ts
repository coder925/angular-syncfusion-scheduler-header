import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-resource',
  templateUrl: './select-resource.component.html',
  styleUrls: ['./select-resource.component.scss']
})
export class SelectResourceComponent implements OnInit {

  selected: string;

  constructor() { }

  ngOnInit(): void {
  }

  selectResource(e: any): void
  {
    console.log('resource selected: ', e);
  }

}
