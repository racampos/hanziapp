import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() next_char: string;

  main_character: Object;
  loading: boolean;
  character_to_query: string;

  title = 'hanziapp';
  

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.character_to_query = params["char"];
      this.makeRequest();
    })
    
  }

  btnClick= function () {
    this.router.navigateByUrl('/?char=' + this.next_char);
  };

  onKeydown(event) {
    if (event.key === "Enter") {
      this.router.navigateByUrl('/?char=' + this.next_char);
    }
  }

  makeRequest(): void { 
    this.loading = true; 
    this.http
      .get('https://780w5o5jsh.execute-api.us-east-1.amazonaws.com/production/hanzi?char=' + this.character_to_query)
      .subscribe(data => {
        if (data){
          this.main_character = data;
          this.main_character["hsk_class"] = "hsk" + this.main_character["hsk_level"];
        } else {
          this.main_character = {character: this.character_to_query,
                                 definition: "Character not in HSK", 
                                 hsk_level: "?",
                                 pinyin: "-",
                                 hsk_class: "hsk_none",
                                 component1: "N/A",
                                 component2: "N/A"}
        }
        this.loading = false; });
  }

}
