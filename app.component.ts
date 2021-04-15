import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data=new userdata('','');

myimage:string="/assets/Images/Data/search.png";
myimage1:string="/assets/Images/Data/bag.png";
myimage2:string="/assets/Images/Data/bagdara.png";
myimage3:string="/assets/Images/Data/contact.png";

save(data){
  console.log(data)
}

}

export class userdata{
  constructor(
    public username:string,
    public password:any
  ){

  }
}
