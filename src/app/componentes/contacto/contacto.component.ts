import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { __await } from 'tslib';
import { MailService } from 'src/app/servicios/mail.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

public contactFormValues ={
  name:'',
  email:'',
  body:'',
  celular:'',
  asunto:'',
};
constructor(private mailService : MailService){}
async submitEmail(contactForm:NgForm){
  
  let formData: FormData = new FormData();
  formData.append('Nombre', this.contactFormValues.name);
  formData.append('Email', this.contactFormValues.email);
  formData.append('Mensaje', this.contactFormValues.body);
  formData.append('Celular', this.contactFormValues.celular);
  formData.append('Asunto', this.contactFormValues.asunto);

  formData.append('access_key', '0bab3f69-1905-439f-8b89-7f142bb68ad9');
  formData.append('subject', 'Nuevo Email');
  formData.append('from_name', 'MI PORTFOLIO');

  try {
    const res = await this.mailService.sendMail(formData);
    if (!res.ok){
      throw new Error();}
      contactForm.reset();
    }
 catch (err){
  alert(err.message)
 }
 
 
  }


  

}


