import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection  : ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() parentData : any;
  @Input() user :any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes : SimpleChanges){
    console.log(changes);
}

  ngDoCheck() {
    console.log("Do Check");
  }
  ChangesFromChild()
  {
     this.parentData -= 1;

  }
}
