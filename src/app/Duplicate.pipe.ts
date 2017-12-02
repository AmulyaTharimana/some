import{Pipe,PipeTransform,Injectable} from '@angular/core';

@Pipe({
    name:'Delete'
})

@Injectable()

export class DeletePipe implements PipeTransform {

    transform(value){
           return  value.filter(function(elem,pos)
        {
            return value.indexOf(elem) ==pos;
        });

    }
}