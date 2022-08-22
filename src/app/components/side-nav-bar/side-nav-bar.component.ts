import { Component, OnInit } from '@angular/core';
//import { faBell,faUser,faGear,faGauge,faUserGear,faLandmark,faUserGraduate,faIndustry,faChalkboardUser,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  
  logoimage:string = "assets/img/logoFinal.png";
  tablogoimage:string ="assets/img/tabLogo.png";
  profileimage:string ="assets/img/profile-pic-2.jpg";
  sidebar: any;

  // faBell = faBell;
  // faUser = faUser;
  // faGear = faGear;
  // faGauge = faGauge;
  // faUserGear = faUserGear;
  // faLandmark = faLandmark;
  // faUserGraduate = faUserGraduate;
  // faIndustry =faIndustry;
  // faChalkboardUser = faChalkboardUser;
  // faArrowRightFromBracket = faArrowRightFromBracket;

  public sidebarShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mySidenavopen(){
    
  }

}
