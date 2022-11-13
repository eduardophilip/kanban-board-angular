import { Iboard } from "../interfaces/Iboard"

export const boradTest: Iboard[] = [
  {
    name: 'Board Name',
    path: "/pages/board-name",
    columns: [
      {
        title: 'Ideas', 
        tasks: ['Learn about Angular material', 'Learn RXJS', 'Learn Ngrx']
      },
      {
        title: 'Research', 
        tasks: ['See Github', 'Take Class']
      },
      {
        title: 'Todo', 
        tasks: ['Learning Inner join', 'ORM', 'Kanban application']
      },
      {
        title: 'Done', 
        tasks: ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']
      }
    ]    
  },
  {
    name: 'Board Name2',
    path: "/pages/board-name",
    columns: [
      {
        title: 'Backlog', 
        tasks: ['Testando', 'Board 2',]
      },
      {
        title: 'Research', 
        tasks: ['See Github', 'Take Class']
      },
      {
        title: 'My todo', 
        tasks: ['Learning Inner join', 'ORM', 'Kanban application']
      },
      {
        title: 'Done', 
        tasks: ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']
      }
    ]    
  }]