import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Assignment';
  first='';
  second='';
  action='';
  result='';
  onClickMe(action)
  {
    if(this.first!='' && this.second !='')
    {
        this.action=action;
        if(action==='+')
        {
          this.result= String(parseInt(this.first)+parseInt(this.second));
        }
        if(action==='-')
        {
          this.result= String(parseInt(this.first)-parseInt(this.second));
        }
        if(action==='*')
        {
          this.result= String(parseInt(this.first)*parseInt(this.second));
        }
        if(action==='/')
        {
          this.result= String(parseInt(this.first)/parseInt(this.second));
        }
         if(action==='clear')
        {
          this.first='';
          this.second='';
          this.result='';
          this.action='';
        }
    }
    else
    {
      alert('enter any number');
    }
  }
}
