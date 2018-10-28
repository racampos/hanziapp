import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    //this.component_data = JSON.parse(`[{"stroke_count":"5","hsk_level":"3","radical":{"kangxi":"61","character":"心"},"definition":"surely, most certainly; must","general_std_number":"0321","pinyin":"bì","component1":"心","character":"必","freq_rank":"248","component2":"丿"}]`);
    this.makeRequest();
  }

  ngOnChanges() {
    this.makeRequest();
  }

  makeRequest(): void { 
    this.loading = true; 
    this.http
      .get('https://780w5o5jsh.execute-api.us-east-1.amazonaws.com/production/hanzi?char=' + this.component)
      .subscribe(data => {
        if (data){
          this.component_data = data;
          this.component_data["hsk_class"] = "hsk" + this.component_data["hsk_level"];
        } else {
          this.component_data = {character: this.component_data,
                                 definition: "Character not in HSK", 
                                 hsk_level: "?",
                                 pinyin: "-",
                                 hsk_class: "hsk_none"}
        }  
        this.loading = false; });
  }

  // makeRequest(): void { 
  //   this.loading = true; 
  //   this.http
  //     .get('https://780w5o5jsh.execute-api.us-east-1.amazonaws.com/production/hanzi/compounds?position=' + this.position + '&component=' + this.component)
  //     .subscribe(data => {
  //       this.component_data = data;
  //       this.loading = false; });
  // }

}
