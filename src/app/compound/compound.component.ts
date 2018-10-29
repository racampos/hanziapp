import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent implements OnInit {

  @Input() component: string;
  @Input() position: string;

  compounds: Object;
  loading: boolean;
  mouse_over: boolean;

  constructor(private http: HttpClient,
              private router: Router) { 
  }

  ngOnInit() {
    this.makeRequest();
    this.mouse_over = false;
  }

  ngOnChanges() {
    this.makeRequest();
  }

  charClick(char: string): void {
    this.router.navigateByUrl('/?char=' + char);
  };

  makeRequest(): void { 
    this.loading = true; 
    this.http
      .get('https://780w5o5jsh.execute-api.us-east-1.amazonaws.com/production/hanzi/compounds?position=' + this.position + '&component=' + this.component)
      .subscribe(data => {
        let temp: any;
        temp = data;
        this.compounds = temp.sort(function(a, b){
            var A=a.hsk_level, B=b.hsk_level
            if (A < B)
                return -1 
            if (A > B)
                return 1
            return 0
        });
        this.loading = false; });
  }

}
