import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';

  //ToDo: Eliminar esta lista al momento de integrar la API
  filter: "all" | "active" | "done" = "all";
  allItems:Item[]=[];
  constructor(private todoService: TodoService){}
  
  ngOnInit() {
    this.loadItems(); // Llama al método para cargar los elementos al iniciar
  }

  loadItems() {

    this.todoService.getTasks().subscribe(data => {
      this.allItems.push(data) // Asigna los datos obtenidos del servicio a la matriz
    });
  }
  get items() {
   
    return this.allItems;
  }
  crearNuevoItem() {
    const nuevoItem: Item = { name:'', description: '',priority:'' }; // Crea un nuevo Item vacío
    this.items.push(nuevoItem); // Agrega el nuevo Item a la matriz items
  }

  guardarItem(item: Item) {
    this.todoService.guardarItem(item).subscribe(response => {
      
     
  console.log('Nuevo item guardado:', response);
    });
  }
 
  // addItem(description:string){
  //   this.allItems.unshift({
  //     description,
  //     done:false
  //   })
  // }

  // removeItem(item:Item){
  //   this.allItems.splice(this.allItems.indexOf(item),1)
  // }

}