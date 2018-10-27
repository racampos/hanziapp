import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dummy_query: string;
  main_character: string;

  title = 'hanziapp';
  

  constructor() {
    this.dummy_query = `{
        "stroke_count": "8",
        "hsk_level": "1",
        "radical": {
          "kangxi": "72",
          "character": "日"
        },
        "definition": "bright, light, brilliant; clear",
        "general_std_number": "1087",
        "pinyin": "míng",
        "component1": "日",
        "character": "明",
        "freq_rank": "121",
        "component2": "月"
      }`
  }

  ngOnInit() {
    this.main_character = JSON.parse(this.dummy_query);
  }

}
