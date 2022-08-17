import { Component, OnInit } from '@angular/core';
//import { faBell,faUser,faGear,faGauge,faUserGear,faLandmark,faUserGraduate,faIndustry,faChalkboardUser,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  
  logoimage:string = "assets/img/logoFinal.png";
  profileimage:string ="assets/img/profile-pic-2.jpg";

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

  constructor() { }

  ngOnInit(): void {
  }

}
