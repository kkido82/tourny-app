import { FormGroup } from "@angular/forms";

export default (form: FormGroup) => {
  const pass = form.controls.password.value;
  const confirmPass = form.controls.confirmPassword.value;

  return pass === confirmPass ? null : { notSame: true }
}