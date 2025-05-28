import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-talk-form',
  imports: [ReactiveFormsModule],
  templateUrl: './talk-form.component.html',
})
export class TalkFormComponent {
  submitForm = output();
  close = output();

  talkForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.talkForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      talkDescription: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit(): void {
    if (this.talkForm.valid) {
      this.submitForm.emit(this.talkForm.value);
    } else {
      this.markFormGroupTouched(this.talkForm);
    }
  }

  onCancel(): void {
    this.close.emit();
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
