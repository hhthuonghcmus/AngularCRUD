import { EntityState, EntityStore, setEntities, Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Task } from './../../model/TaskModel';

export interface TaskState extends EntityState<Task>{

}

export const getInitialState = () => {
    return{
            
    }
}

@Injectable({
    providedIn: 'root'
})

@StoreConfig({name: 'task'})

export class TaskStore extends EntityStore<TaskState, Task>{
    constructor(){
        super(getInitialState());
        this.add(
            [ 
                { id: '1', name: 'Go', duration: 1 },
                { id: '2', name: 'Went', duration: 2 },
                { id: '3', name: 'Gone', duration: 3 }
            ]
        )
    }
}