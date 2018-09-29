import { AbstractControl } from '@angular/forms';

export default (control: AbstractControl) => {
  const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return re.test(String(control.value).toLowerCase()) ? null : { notEmail: true };
}