import {ProgrammingSvgIconsService} from './programming-svg-icons.service';
import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional, ViewEncapsulation,OnInit} from '@angular/core';

@Component({
  selector: 'programming-svg-icons',
  template: `
      <ng-content></ng-content>
  `,
  styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgrammingSvgIconsComponent implements OnInit {
  private svgIcon: SVGElement;

  @Input()
  set name(iconName: string) {
      if (this.svgIcon) {
          this.element.nativeElement.removeChild(this.svgIcon);
      }
      const svgData = this.programmingSvgIconsService.getIcon(iconName);
      this.svgIcon = this.svgElementFromString(svgData || '');
      this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(private element: ElementRef, private programmingSvgIconsService: ProgrammingSvgIconsService,
    @Optional() @Inject(DOCUMENT) private document: any) {
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }

  ngOnInit(): void {
  }

}
