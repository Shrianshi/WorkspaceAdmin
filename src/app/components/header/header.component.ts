import { Component,Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authservices/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private auth:AuthService){}
  @Input() header: string = '';
  @Input() para:string='';
  @Input() search:string='';
  name:string | null='';
  
  ngOnInit(): void {
    this.name=localStorage.getItem('name')
  }
}
