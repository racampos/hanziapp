import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  @Input() component: string;
  dummy_data: string;
  component_data: string;

  constructor() { 
    

  }

  ngOnInit() {
    if (this.component == "日" ) {
      this.dummy_data = `{
        "stroke_count": "4",
        "hsk_level": "2",
        "radical": {
          "kangxi": "72",
          "character": "日"
        },
        "definition": "sun; day; daytime",
        "general_std_number": "0112",
        "pinyin": "rì",
        "component1": "N/A",
        "character": "日",
        "freq_rank": "101",
        "component2": "N/A"
      }`
    } else {
      this.dummy_data = `{
        "stroke_count": "4",
        "hsk_level": "1",
        "radical": {
          "kangxi": "74",
          "character": "月"
        },
        "definition": "moon; month; KangXi radical 74",
        "general_std_number": "0150",
        "pinyin": "yuè",
        "component1": "N/A",
        "character": "月",
        "freq_rank": "169",
        "component2": "N/A"
      }`
    }
    this.component_data = JSON.parse(this.dummy_data)
  }

}
