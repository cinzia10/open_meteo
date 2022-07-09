import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeIcon'
})
export class CodeIconPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    switch (value) {
      case 0:
        return '../../../assets/weather/clear-day.svg';
      case 1:
      case 2:
      case 3:
        return '.../../../assets/weather/cloudy.svg';
      case 45:
      case 48:
        return '../../../assets/weather/fog.svg';
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return '../../../assets/weather/drizzle.svg'
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
        return '.../../../assets/weather/rain.svg'
      case 71:
      case 73:
      case 75:
      case 76:
      case 77:
        return '../../../assets/weather/rain.svg'
      case 80:
      case 81:
      case 82:
      case 85:
      case 86:
        return '../../../assets/weather/shower.svg'
      case 95:
      case 96:
      case 99:
        return '../../../assets/weather/thunder.svg'
      default:
        return '../../../assets/weather/clear-day.svg';
    }
  }

}
