import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-toolbar',
  templateUrl: './footer-toolbar.component.html',
  styleUrls: ['./footer-toolbar.component.scss']
})
export class FooterToolbarComponent {
  activeTabHearth: boolean = true;
  activeTabMap: boolean = false;
  activeTabHome: boolean = false;
  activeTabLaws: boolean = false;
  activeTabXperience: boolean = false;

  activeTabHearthMethod(): void{
    this.activeTabHearth = true;
    this.activeTabMap = false;
    this.activeTabHome = false;
    this.activeTabLaws = false;
    this.activeTabXperience = false;
  }

  activeTabMapMethod(): void{
    this.activeTabHearth = false;
    this.activeTabMap = true;
    this.activeTabHome = false;
    this.activeTabLaws = false;
    this.activeTabXperience = false;
  }

  activeTabHomeMethod(): void{
    this.activeTabHearth = false;
    this.activeTabMap = false;
    this.activeTabHome = true;
    this.activeTabLaws = false;
    this.activeTabXperience = false;
  }

  activeTabLawsMethod(): void{
    this.activeTabHearth = false;
    this.activeTabMap = false;
    this.activeTabHome = false;
    this.activeTabLaws = true;
    this.activeTabXperience = false;
  }

  activeTabXperienceMethod(): void{
    this.activeTabHearth = false;
    this.activeTabMap = false;
    this.activeTabHome = false;
    this.activeTabLaws = false;
    this.activeTabXperience = true;
  }
}
