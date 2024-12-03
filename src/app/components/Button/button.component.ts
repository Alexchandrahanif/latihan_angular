import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label: string = 'Click Me'; // Teks pada tombol
  @Input() color: string = 'bg-blue-500'; // Warna tombol default
  @Input() textColor: string = 'text-white'; // Warna teks
  @Input() disabled: boolean = false; // Status disabled
  @Output() onClick = new EventEmitter<void>(); // Event untuk klik tombol

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit(); // Emit event ke parent jika tidak disabled
    }
  }
}
