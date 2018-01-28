import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from './bar/test.service';
import { BarService} from '@my/lib';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class MyLib2Module {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: MyLib2Module,
      providers: [
        TestService,
        BarService
      ]
    };
  }
}
