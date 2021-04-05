import { Component,  OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component implements OnInit {
  
  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
   
  }

  cancel(){
    this.activeModal.dismiss()
  }

  close(){
    this.activeModal.close()
  }
}
