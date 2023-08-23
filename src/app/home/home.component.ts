import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   

characters : string ="asdfghjkl; ";
array: string[] = [];

 generateString(length: number): string {
    let result = ' ';
    const charactersLength = this.characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
ngOnInit(){
  for (let index = 0; index < 100; index++) {
    this.array[index] = this.generateString(4)
    
  }
}


keypress(value :any){
  console.log(value);
}


}
