import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[] | undefined, args=""): string[] {
    if(value){
      return value.filter(name => name.toLowerCase().startsWith(args.toLowerCase()));
    }else{
      return [];
    }
  }

}
