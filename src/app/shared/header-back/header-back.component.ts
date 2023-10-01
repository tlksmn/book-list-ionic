import {Component, inject, Input, OnInit} from '@angular/core';
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent implements OnInit {
  @Input() header: string = ''
  @Input() isBack: boolean = false;
  private readonly platform: Platform = inject(Platform);

  ngOnInit() {
  }

  public getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? this.header : '';
  }
}
