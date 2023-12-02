import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDataFormatPipe'
})
export class CustomDataFormatPipe implements PipeTransform {

  transform(value: any): string {
    if (value) {
      const date = new Date(value);
      const day = this.addZero(date.getUTCDate());
      const month = this.addZero(date.getUTCMonth());
      const year = date.getUTCFullYear();

      return `${day}/${month}/${year}`;
    }
    return '';
  }

  private addZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
