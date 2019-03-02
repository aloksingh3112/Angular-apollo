import { Component,OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private apollo:Apollo){

  }
  ngOnInit() {
  this.apollo.watchQuery(
    {
      query:gql`
          {
            rates(currency:"USD"){
            currency,
            rate
          }
          }
        `
    }
  )
  .valueChanges.subscribe(
    data=>console.log(data),
    err=>console.log(err)
  )

  }

}
