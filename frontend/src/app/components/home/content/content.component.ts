import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  formToSend!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService
  ) {
    this.formToSend = this.formBuilder.group({
      name: [''],
      phone: [''],
      email: [
        '',
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    });
  }

  ngOnInit(): void {}

  sendToSave() {}
}
