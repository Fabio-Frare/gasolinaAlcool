import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  resultado: string = ""
  precoEtanol: any;
  precoGasolina: any;

  constructor() {}

  calcular() {
    if(this.precoEtanol && this.precoGasolina) {
      var pEtanol   = parseFloat(this.precoEtanol)
      var pGasolina = parseFloat(this.precoGasolina)
      var res       = pEtanol / pGasolina
      if(res >= 0.7) {
        this.resultado = "Melhor utilizar gasolina."
      } else {
        this.resultado = "Melhor utilizar etanol."
      }
    } else {
      this.resultado = "Informe os preços."
    }
  }

}
