import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    data = 0;
    User = {
      Name : "Alex"
    };

  constructor() { }

  ngOnInit(): void {
  }
  changeFromParent(){
    this.data += 1;
  }

  changeUserName() {
    this.User.Name = "Bob";
  }
}
