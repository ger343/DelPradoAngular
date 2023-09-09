import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
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
      Swal.fire({
        
        icon: 'success',
        iconColor:'#00EEFF',
        title: 'Mensaje Enviado',
        showConfirmButton: false,
        timer: 1800
      })
    }
 catch (err){
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo Enviar en Mensaje!',
    
  })
 }
 
 
  }


  

}


