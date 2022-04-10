import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  quotes=[new Quote("H.G Wells","Chris Mambotela","If you fell down yesterday, stand up today"),
new Quote("British-Author","George Eliot","Its never too late to be what you might have been")]
  preNum!: number;
  lastNum!: number;
  counter!: number;

  addQuote(emittedQuote: Quote){
    this.quotes.push(emittedQuote)
  }

  upvote(i: any){
      this.quotes[i].upvotes+=1
  }
  downvote(i: any){
    this.quotes[i].downvotes+=1
  }
  delQuote(i: number){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  QuoteComponent.constructor(); { }

  this.ngOnInit(); void {
  }

}
}
