import { Component, OnInit } from '@angular/core';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  faTrashCan= faTrashCan;
  constructor() { }

  ngOnInit(): void {
  }

  // deletePost(post: any) {
  //   console.log(this.editPostModal.id);
  //   this.service.deleteData(post.id).subscribe((res) => {
  //     let index = this.posts.indexOf(post);
  //     console.log(post);
  //     this.posts.splice(index, 1);
  //     console.log(res);
  //   });
  // }

}
