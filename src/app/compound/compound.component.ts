import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent implements OnInit {

  @Input() char: string;

  compounds1_json: string;
  compounds2_json: string;
  compounds: { stroke_count: string,
                hsk_level: string,
                radical: {
                    kangxi: string,
                    character: string
                },
                definition: string,
                general_std_number: string,
                pinyin: string,
                component1: string,
                character: string,
                freq_rank: string,
                component2: string }[]
  

  constructor() { 

    this.compounds1_json = `[
      {
          "stroke_count": "6",
          "hsk_level": "6",
          "radical": {
              "kangxi": "72",
              "character": "日"
          },
          "definition": "purpose, aim; excellent",
          "general_std_number": "0501",
          "pinyin": "zhǐ",
          "component1": "匕",
          "character": "旨",
          "freq_rank": "1685",
          "component2": "日"
      },
      {
          "stroke_count": "5",
          "hsk_level": "3",
          "radical": {
              "kangxi": "72",
              "character": "日"
          },
          "definition": "old, ancient; former, past",
          "general_std_number": "0232",
          "pinyin": "jiù",
          "component1": "丨",
          "character": "旧",
          "freq_rank": "915",
          "component2": "日"
      },
      {
          "stroke_count": "7",
          "hsk_level": "2",
          "radical": {
              "kangxi": "169",
              "character": "門"
          },
          "definition": "midpoint, space; place, locality",
          "general_std_number": "0847",
          "pinyin": "jiān",
          "component1": "门",
          "character": "间",
          "freq_rank": "135",
          "component2": "日"
      }
    ]`

    this.compounds2_json = `[
    {
        "stroke_count": "9",
        "hsk_level": "4",
        "radical": {
            "kangxi": "167",
            "character": "金"
        },
        "definition": "key; lock",
        "general_std_number": "1531",
        "pinyin": "yào",
        "component1": "钅",
        "character": "钥",
        "freq_rank": "2481",
        "component2": "月"
    },
    {
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
    },
    {
        "stroke_count": "6",
        "hsk_level": "2",
        "radical": {
            "kangxi": "170",
            "character": "阜"
        },
        "definition": "overcast, cloudy, shady",
        "general_std_number": "0575",
        "pinyin": "yīn",
        "component1": "阝",
        "character": "阴",
        "freq_rank": "987",
        "component2": "月"
    }
  ]`
  }

  ngOnInit() {
    if (this.char == "日"){
      this.compounds = JSON.parse(this.compounds1_json);
    } else if (this.char == "月"){
      this.compounds = JSON.parse(this.compounds2_json);
    }
  }

}
