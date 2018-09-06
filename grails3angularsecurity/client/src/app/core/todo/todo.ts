

export class Todo {
  id: number;

  done: boolean;
  description: string;

  constructor (object?: any) {
    if (object) {
      
      for (var prop in object) {
        this[prop] = object[prop];
      }
    }

  }

  toString(): string {
    return 'todo.Todo : ' + (this.id ? this.id : '(unsaved)');
  }
}