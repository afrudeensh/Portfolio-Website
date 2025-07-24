import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatIconModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   isVisible = false;

  @ViewChild('introText', { static: true }) introText!: ElementRef;

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
      },
      { threshold: 0.5 } // Adjust based on when you want it to trigger
    );

    observer.observe(this.introText.nativeElement);
  }

}
