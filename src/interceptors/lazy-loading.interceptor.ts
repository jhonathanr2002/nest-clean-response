import {Injectable, NestInterceptor, ExecutionContext, CallHandler} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {classToPlain} from 'class-transformer';

@Injectable()
export class LazyLoadingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data: any) => {
                if (data && typeof data === 'object') {
                    return this.transformLazyLoadedProperties(data);
                }
                return data;
            }),
        );
    }

    private transformLazyLoadedProperties(data: any): any {
        if (Array.isArray(data)) {
            return data.map((oItem) => this.transformLazyLoadedProperties(oItem));
        } else if (typeof data !== 'object') {
            return data;
        }

        const result = {...data};

        for (const key in result) {
            if (result.hasOwnProperty(key)) {
                const value = result[key];

                if (typeof value === 'object' && key.startsWith('__') && key.endsWith('__') && value !== null) {
                    result[key.replace(/__+/g, '')] = this.transformLazyLoadedProperties(classToPlain(value));
                    result[key] = undefined;
                }
            }
        }

        return result;
    }
}
