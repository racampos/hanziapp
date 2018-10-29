import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  @Input() component: string;
  @Input() position: string;
  component_data: Object;
  loading: boolean;

  constructor(private http: HttpClient,
              private router: Router) { 
  }

  ngOnInit() {
    this.makeRequest();
  }

  ngOnChanges() {
    this.makeRequest();
  }

  charClick(): void {
    if (this.component_data["hsk_level"] != "?") {
      this.router.navigateByUrl('/?char=' + this.component_data["character"]);
    } else {
      window.open('http://hanzidb.org/character/' + this.component_data["character"], "_blank");
    }
  };

  makeRequest(): void { 
    this.loading = true; 
    this.http
      .get('https://780w5o5jsh.execute-api.us-east-1.amazonaws.com/production/hanzi?char=' + this.component)
      .subscribe(data => {
        if (data){
          this.component_data = data;
          this.component_data["hsk_class"] = "hsk" + this.component_data["hsk_level"];
        } else {
          this.component_data = {character: this.component,
                                 definition: "Character not in HSK", 
                                 hsk_level: "?",
                                 pinyin: "-",
                                 hsk_class: "hskNone"}
        }  
        this.loading = false; });
  }



}
