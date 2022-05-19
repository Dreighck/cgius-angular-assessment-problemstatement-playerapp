import { Component, OnInit } from '@angular/core';
import {Player} from '../Player';
import { PlayerService } from '../service/player.service';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  players: Player[] = [];

  player: Player = new Player();

  errorMessage: string = "";

  constructor(private playerService: PlayerService, private dialog: MatDialog) { }

  ngOnInit(){

    this.playerService.getAllPlayers().subscribe({
      next:(players)=>{
        console.log(players);
        this.players = players;
      }
    })
  }


  add(){
    console.log("Add method is invoked");

    if(this.player.id != 0 && this.player.firstName != "" && this.player.country != "" ){

        this.playerService.addNewPlayer(this.player).subscribe({
          next:(player)=>{
            console.log(player);
            this.players.push(player);
            this.errorMessage = "";
          },
          error:(errorResponse)=>{
            console.log(errorResponse);
            this.errorMessage = errorResponse.error;
          }
        });
    }
    else{
      this.errorMessage = "Fields Cannot be empty or Zero";
    }

    console.log(this.player);
  }

  // update(player: Player){
  //   console.log("Update " + player.id);
  //   let employeeCopy=Object.assign({},player);
  //   this.dialog.open(UpdateComponent, {
  //     width: '250px',
  //     data: employeeCopy
  //   }).afterClosed().subscribe(
  //     ()=>{
  //       this.ngOnInit();
  //     })
  //
  // }

}
