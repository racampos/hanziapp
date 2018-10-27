import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-character',
  templateUrl: './main-character.component.html',
  styleUrls: ['./main-character.component.css']
})
export class MainCharacterComponent implements OnInit {

  @Input() character: {
              stroke_count: string,
              hsk_level: string,
              radical: {
                "kangxi": string,
                "character": string
              },
              "definition": string,
              "general_std_number": string,
              "pinyin": string,
              "component1": string,
              "character": string,
              "freq_rank": string,
              "component2": string
  };

  constructor() { }

  ngOnInit() {
  }

}
