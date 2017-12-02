import{Pipe,PipeTransform,Injectable} from '@angular/core';

@Pipe({
    name:'reversestring'
})

@Injectable()

export class ReversePipe implements PipeTransform {

    transform(value:string)
    {
        if(value){
        
    return value.split('').reverse().join('');
        }
       
    }
}