import { Pipe, PipeTransform } from '@angular/core';
import { serializePath } from '@angular/router/src/url_tree';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item.name.includes(searchText);
    });
  }
}
