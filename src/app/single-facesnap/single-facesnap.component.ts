import { Component, OnInit ,Input} from '@angular/core';
import { FaceSnap } from '../models/facesnap.model';
import { SnapFaceService } from '../services/snap-face.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-facesnap',
  templateUrl: './single-facesnap.component.html',
  styleUrls: ['./single-facesnap.component.scss']
})
export class SingleFacesnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap

  buttonSnap!: string
  constructor(private faceSnapSevice: SnapFaceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.buttonSnap = 'Oh snap!';
    const facesnapId = +this.route.snapshot.params['id']
    this.faceSnap= this.faceSnapSevice.getFaceSnapById(facesnapId)

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
}
