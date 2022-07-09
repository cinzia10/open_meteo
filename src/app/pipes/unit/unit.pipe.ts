import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {

    let unit = ''

    if (args.length > 0) {
      unit = ' ' + args[0];
    }

    const decimalValue = value.toFixed(2);

    return decimalValue + unit;
  }

}
