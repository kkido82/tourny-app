import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  //TODO add regex finish the email validation
  if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return { validUrl: true };
  }
  return null;
}