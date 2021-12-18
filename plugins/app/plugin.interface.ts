import { INestApplication } from '@nestjs/common';

interface Type<T> {
  new (...args: any[]): T;
}

export function StaticImplements<T>() {
  return (constructor: T) => {
    //
  };
}

export interface Plugin extends Type<any> {
  setup(app: INestApplication, serviceName?: string);
}
