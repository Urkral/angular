import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserNameValidators{
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value).indexOf(" ")>=0){
            return{ cannotContainSpace : true }
        }
        return  null
    }
    static shouldBeUnique(control:AbstractControl): Promise<ValidationErrors|null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value == "Goulagwe"){
                    resolve({shouldBeUnique : true})
                }
                resolve (null);
            },2000)
        })
    }
}