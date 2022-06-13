import { FiltroArrayPipe } from './filtro-array.pipe';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe{



}
