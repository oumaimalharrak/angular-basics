import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/facesnap.model';
import { SnapFaceService } from '../services/snap-face.service';
import { Router } from '@angular/router';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-facesnap',
  templateUrl: './facesnap.component.html',
  styleUrls: ['./facesnap.component.scss']
})
export class FacesnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap

  buttonSnap!: string
  constructor(private faceSnapSevice: SnapFaceService, private router: Router) { }

  ngOnInit() {

    this.buttonSnap = 'Oh snap!';
 


  }

  onSnapClick() {
    if (this.buttonSnap === 'Oh snap!') {
      this.faceSnapSevice.snapFaceById(this.faceSnap.id, 'snap');
      this.buttonSnap = `OOPs`;
    } else {
      this.faceSnapSevice.snapFaceById(this.faceSnap.id, 'unsnap');

      this.buttonSnap = "Oh snap!"
    }

  }
  goSingleSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)

  }

}
