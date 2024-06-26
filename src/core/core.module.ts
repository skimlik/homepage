import { ModuleWithProviders, NgModule } from '@angular/core';
import { LocalStorageService } from './services/local-storage.servicce';
import { AuthService } from './auth/auth.service';
import { UserInfoService } from './auth/user-info.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [LocalStorageService, AuthService, UserInfoService],
    };
  }
}
