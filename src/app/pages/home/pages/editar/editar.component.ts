import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent {

  tipos: string[] = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];
  sexos: string[] = ["M", "F"];
  @ViewChild('fileInput') fileInput!: ElementRef;

  openFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      console.log('Arquivo selecionado:', file);
    }
  }
}
