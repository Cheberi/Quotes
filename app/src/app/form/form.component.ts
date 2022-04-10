import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote} from '../quote';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output() emitQuote= new EventEmitter()
  quoteStr!: any;
  quotePublisher!: any;
  quoteAuthor!: any;
  theQuote:any

  submitQuote(  ){
    this.theQuote= new Quote(this.quotePublisher,this.quoteAuthor,this.quoteStr)
    this.quoteStr=''
    this.quoteAuthor=''
    this.quotePublisher=''
    this.emitQuote.emit(this.theQuote)

  FormComponent.constructor(), { }

  this.ngOnInit(); void {
  }

}
}
