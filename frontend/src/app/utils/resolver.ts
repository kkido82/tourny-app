import { NgModule, Injector, Type, InjectionToken } from "@angular/core";

let injector: Injector;

export interface Type2<T> extends Function {
}

export const resolve = <T>(a: Type<T> | InjectionToken<T> | Type2<T>) => {
  if (!injector) {
    return undefined;
  }
  return injector.get<T>(<any>a);
};

@NgModule({})
export class ResolverModule {
  constructor(a: Injector) {
    injector = a;
  }
}
