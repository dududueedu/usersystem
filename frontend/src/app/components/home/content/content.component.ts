import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
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

  sendToSave() {
    let form = this.formToSend;
    let data : User = {
      nome: form.get('name')?.value,
      telefone: form.get('phone')?.value,
      email: form.get('email')?.value,
    }
    this.homeService.saveUser(data).subscribe((response: any) => {
      console.log(response, data.nome)
      this.resetInPut()
    })
  }

  resetInPut() {
    this.formToSend.patchValue({
      name: [''],
      phone: [''],
      email: ['']
    })
  }
}