import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatButtonModule],
  providers:[],//services need to add
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit{
ngOnInit(): void {
  console.log('Test');
}
@Input() welcomeMessage: any;
@Output() sendMessage= new EventEmitter<string>();

SendData():void{
  this.sendMessage.emit('Child to Parent');
}

}
