import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.component.html',
  styleUrls: ['./standard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
