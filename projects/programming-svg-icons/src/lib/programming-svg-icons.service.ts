import { Injectable } from '@angular/core';
import { ProgrammingSvgIcons } from './programming-icons';
@Injectable({
  providedIn: 'root'
})
export class ProgrammingSvgIconsService {


  private registry = new Map<string, string>();

  public registerIcons(icons: ProgrammingSvgIcons[]): void {
      icons.forEach((icon: ProgrammingSvgIcons) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
      if (!this.registry.has(iconName)) {
          console.warn(`We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`);
      }
      return this.registry.get(iconName);
  }
}
