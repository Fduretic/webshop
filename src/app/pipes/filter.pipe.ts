import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(categories: any[], filter: Object[]): any {
    if (!categories || !filter) {
      return categories;
    }
    

    
  }

}
