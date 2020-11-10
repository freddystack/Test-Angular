import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';




@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  listPeoples: any = []
  fill = ""
  user ={
    name: "",
    country: ""
  }

  constructor( private apiService : ApiService) { }

  ngOnInit(): void {
    this.getPeoples()
  }

  getPeoples(){
      this.apiService.getPeoples().subscribe(
        res => {
          this.listPeoples = res
        },err => console.log(err)
      )
  }

  details(id : any){
      for(let us of this.listPeoples){
           if(us.id === id){
              this.user.name = us.name
              this.user.country = us.country
           }
      }   
  }

}
