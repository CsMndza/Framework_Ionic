import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);

  //Loading
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }

  //Toast
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  //Enrruta a cualquier pagina disponible
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  //Guardar Elementos en el LocalStorage
  saveInLocaStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  //Obtener el Elemento del LocalStorage
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }

}
