import {AbstractControl, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class MatchPassword implements Validators {
  validate(formGroup: AbstractControl) {
    const {password, passwordConfirmation} = formGroup.value;

    if (password === passwordConfirmation) {
      return null;
    }
    return {passwordsDontMatch: true};
  }
}
