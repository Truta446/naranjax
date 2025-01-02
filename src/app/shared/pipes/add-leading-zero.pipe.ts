import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addLeadingZero',
  standalone: true,
})
export class AddLeadingZeroPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    const [day, month] = value.split('/');

    const paddedDay = day.length === 1 ? `0${day}` : day;
    const paddedMonth = month.length === 1 ? `0${month}` : month;

    return `${paddedDay}/${paddedMonth}`;
  }
}
