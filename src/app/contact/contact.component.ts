import { Component, ViewChild } from '@angular/core'; // Import ViewChild
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms'; // Import NgForm
import { CommonModule } from '@angular/common';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  // Use ViewChild to get a reference to the NgForm instance
  @ViewChild('contactForm') contactForm!: NgForm;

  email: string = 'afrudeenhasina15301@gmail.com';

  contact = {
    name: '',
    email: '',
    message: ''
  };

  showMessageBox: boolean = false;
  messageText: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private contactService: ContactService) { }

  onSubmit() {
    // Reset message box state before a new submission
    this.hideMessageBox();

    // --- ADDED VALIDATION LOGIC ---
    if (this.contactForm.invalid) {
      this.showMessage('Please fill in all required fields.', 'error');
      return; // Prevent the API call if the form is invalid
    }
    // --- END ADDED VALIDATION LOGIC ---

    this.contactService.sendMessage(this.contact).subscribe({
      next: () => {
        this.showMessage('Message sent successfully!', 'success');
        this.contact = { name: '', email: '', message: '' }; // Clear the form
        this.contactForm.resetForm(); // Reset form validation state as well
      },
      error: (err) => {
        console.error('Failed to send message:', err);
        this.showMessage('Failed to send message. Please try again later.', 'error');
      }
    });
  }

  showMessage(message: string, type: 'success' | 'error'): void {
    this.messageText = message;
    this.messageType = type;
    this.showMessageBox = true;
    setTimeout(() => {
      this.hideMessageBox();
    }, 5000);
  }

  hideMessageBox(): void {
    this.showMessageBox = false;
    this.messageText = '';
  }
}