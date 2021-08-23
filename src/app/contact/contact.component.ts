import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private f: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();

  }

  createForm() {
    this.contactForm = this.f.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      projectDetails: ['', [Validators.required]]
    }, { updateOn: 'submit' })
  }

  get getControl() {
    return this.contactForm.controls;
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
      // Used to remove invalid class after submit
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.controls[key].setErrors(null)
      });
    };
  }

}

