import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flag'
})
export class FlagPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'DE':
        return '../../../assets/flag/germany.png'
      case 'US':
        return '../../../assets/flag/united-states.png'
      case 'IR':
        return '../../../assets/flag/iran.png'
      case 'PK':
        return '../../../assets/flag/pakistan.png'
      case 'DK':
        return '../../../assets/flag/denmark.png'
      case 'NO':
        return '../../../assets/flag/norway.png'
      case 'ID':
        return '../../../assets/flag/indonesia.png'
      case 'EE':
        return '../../../assets/flag/estonia.png'
      case 'NG':
        return '../../../assets/flag/nigeria.png'
      case 'SE':
        return '../../../assets/flag/sweden.png'
      case 'IN':
        return '../../../assets/flag/india.png'
      case 'JP':
        return '../../../assets/flag/japan.png'
      case 'GB':
        return '../../../assets/flag/united-kingdom.png'
      case 'AF':
        return '../../../assets/flag/afghanistan.png'
      case 'IT':
        return '../../../assets/flag/italy.png'
      case 'EE':
        return '../../../assets/flag/estonia.png'
      

      default:
        return '/'
    }
  }

}
