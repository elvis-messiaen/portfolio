import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
    message : String = "Votre message vient d'être envoyé."
    sendFormulaire: boolean = false;

    form: FormGroup = this.fb.group({
    from_name: ["",Validators.required],
    to_name: "Elvis",
    email: ["",[Validators.required,Validators.email]],
    sujet: ["",[Validators.required]],
    message: ["",[Validators.required]]
  })
  async send() {
      emailjs.init('Etw-xSLheu3VLdSE2');
    let response = await emailjs.send("service_pzbvifu","template_6k28y6j",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      email: this.form.value.email,
      sujet: this.form.value.sujet,
      message: this.form.value.message
    });
    this.sendFormulaire = true;
    this.message;
    this.form.reset();
  }

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {}

}
