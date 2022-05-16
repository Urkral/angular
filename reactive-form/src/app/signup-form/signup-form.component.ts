import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserNameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  // form= new FormGroup({
  //   username : new FormControl(),
  //   password: new FormControl(),
  // })

/* -------------------------------------------------------------------------- */
/*                                 Validation                                 */
/* -------------------------------------------------------------------------- */

  // form= new FormGroup({
    // username : new FormControl('',Validators.required),
    // password: new FormControl('',Validators.required),
  // })
  
  // form= new FormGroup({
  //   username : new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.required),
  // })
  // get username(){
  //   return this.form.get('username')
  // }

/* -------------------------------------------------------------------------- */
/*                             Validateur multiple                            */
/* -------------------------------------------------------------------------- */

//   form= new FormGroup({
//     username : new FormControl('',[
//       Validators.required,
//       Validators.minLength(3),
//     ]),
//     password: new FormControl('',Validators.required),
//   })
//   get username(){
//     return this.form.get('username')
//   }
// }

/* -------------------------------------------------------------------------- */
/*                              validation custon                             */
/* -------------------------------------------------------------------------- */

//   form= new FormGroup({
//     username : new FormControl('',[
//       Validators.required,
//       Validators.minLength(3),
//       UserNameValidators.cannotContainSpace,
//     ]),
//     password: new FormControl('',Validators.required),
//   })
//   get username(){
//     return this.form.get('username')
//   }
// }

/* -------------------------------------------------------------------------- */
/*                                 Validation asynchrone                      */
/* -------------------------------------------------------------------------- */

//   form= new FormGroup({
//     username : new FormControl('',[
//       Validators.required,
//       Validators.minLength(3),
//       UserNameValidators.cannotContainSpace,
//     ], UserNameValidators.shouldBeUnique),
//     password: new FormControl('',Validators.required),
//   })
//   get username(){
//     return this.form.get('username')
//   }
// }

/* -------------------------------------------------------------------------- */
/*                                 Loader                                     */
/* -------------------------------------------------------------------------- */

  form= new FormGroup({
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UserNameValidators.cannotContainSpace,
    ], UserNameValidators.shouldBeUnique),
    password: new FormControl('',Validators.required),
  })

  get username(){
    return this.form.get('username')
  }
  get password(){
    return this.form.get('password')
  }

  login(){
    if(this.username?.value == "esteboeuf" && this.password?.value == "mdr"){
      alert('GOULAGWE de connecxion !! xD ptdr lolito')
    }else{
      alert('Recommence, chien')
      this.form.setErrors({
        invalidLogin:true
      })
    }
  }
}
