import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { SERVICES_TOKEN } from '../../services/service.token';
import { ISnackBarManagerService } from '../../services/isnackbar-manager.service';
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { Subscription } from 'rxjs';
import { ClientModelForm, ClientModelTable } from '../client.models';
import { Router } from '@angular/router';
import { ClientTableComponent } from '../components/client-table/client-table.component';

@Component({
  selector: 'app-list-client',
  imports: [ClientTableComponent],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.scss',
  providers: [
      {provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService},
      {provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService}
    
    ]
})
export class ListClientComponent implements OnInit, OnDestroy{

  private httpSubscriptions : Subscription []=[]

  clients: ClientModelTable[]=[]

  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENT)private readonly httpService: IClientService,
    @Inject(SERVICES_TOKEN.SNACKBAR)private readonly snackBarManeger: ISnackBarManagerService,
    private readonly router: Router
  ){}
  ngOnInit(): void {
      this.httpSubscriptions.push(this.httpService.list().subscribe(data => this.clients = data))
  }
  ngOnDestroy(): void {
    this.httpSubscriptions.forEach(s => s.unsubscribe())
  }
  update(client: ClientModelTable){
    this.router.navigate(['clients/edit-client', client.id])
  }
  delete(client: ClientModelTable){
    this.httpSubscriptions.push(this.httpService.delete(client.id).subscribe(_ => this.snackBarManeger.show(`O Cliente ${client.name} foi excluido com sucesso!`)))
  }
}
