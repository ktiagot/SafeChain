import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the EditarClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-cliente',
  templateUrl: 'editar-cliente.html',
})
export class EditarClientePage {
  title: string;
  form: FormGroup;
  cliente: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    private afDb: AngularFireDatabase, private provider: ClienteProvider, private formBuilder: FormBuilder) {
      this.cliente = this.navParams.data.cliente || {};
      this.setupPageTitle();
  }
  private setupPageTitle()
  {
    this.title = 'Editar Informações';
  }
  createForm()
  {
    this.form = this.formBuilder.group({
      key: [this.cliente.key],
      nome: [this.cliente.nome, Validators.required],
      cpf: [this.cliente.cpf, Validators.required],
      telefone: [this.cliente.telefone, Validators.required]
    })
  }
  onSubmit()
  {
    if (this.form.valid)
    {
      this.provider.save(this.form.value)
      .then(() => {
        this.toast.create({message: 'Informações alteradas com sucesso.', duration: 3000}).present();
        this.navCtrl.pop();
      })
      .catch((e) => {
        this.toast.create({message: 'Erro ao salvar informações', duration: 3000}).present();
        console.error(e);
      });
    }
  }

  


  
}

