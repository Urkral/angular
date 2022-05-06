import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limite: number = 50): any {
    if(!value) return null;
    return value.slice(0,limite)+'...'
  }
}
