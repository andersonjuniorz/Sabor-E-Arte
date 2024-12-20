import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatGridListModule
  ],
  templateUrl: './gallery.component.html',
  // styleUrl: './gallery.component.scss'
})

export class GalleryComponent {
  @Input() galleryImages: any[] = [];
}
