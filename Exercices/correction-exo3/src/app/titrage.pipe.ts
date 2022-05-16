import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titrage'
})
export class TitragePipe implements PipeTransform {

  transform(value: string): string |null {
    if(!value) return null;

    let word = value.split(" ")
    return word.map((word,index) =>{
      if(index > 0 && this.isPreposition(word)){
        word = word.toLowerCase();
      }else{
        word = this.toTitleCase(word)
      }
      return word;
    }).join(' ')
  }

  isPreposition(word:string) : boolean{
    const prepostion = ["le","la","les","de","da","du","des","un","une","a","ton","tes","ta"]
    return prepostion.includes(word.toLowerCase());
  }
  toTitleCase(word:string){
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()
  }
}
