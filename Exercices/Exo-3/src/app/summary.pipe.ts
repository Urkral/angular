import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string): any {
  
    let arr = value.split(" ");
    let exept = ['the','de','du','des','la','le','les']
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] != exept[0]){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      else{
        arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1);
      }
    }

    const str2 = arr.join(" ");
    return str2
  }

}
