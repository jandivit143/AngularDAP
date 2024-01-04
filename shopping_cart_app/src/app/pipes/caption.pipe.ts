// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'caption'
// })
// export class CaptionPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caption'
})
export class CaptionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log('the value is',value);
    return value ? 'Short Date!':'Full Date!';
  }

}
