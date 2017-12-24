import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  testShow = "show here!";
  mainCamera ="assets/cameras/camera4.mp4";

  constructor() { }

  ngOnInit() {
  }

  onClick(cameraNo) {
    this.testShow = cameraNo;
    this.mainCamera = "assets/cameras/" + cameraNo + ".mp4";
  }
}

