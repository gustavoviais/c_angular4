import { Component, OnInit, Input } from '@angular/core';
import { CepService } from '../../providers/cep/cep.service';
import { Cep } from '../../classes/cep';
import { title, validation } from '../../providers/validation/validation-pt-BR';
import { FormControl, Validators } from '@angular/forms';

@Component({  //decorator
    selector: 'grid-page',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})

export class GridComponent {

    source: any =
        {
            datatype: "json",
            datafields: [
                { name: 'id', type: 'number' },
                { name: 'v_id', type: 'string' },
                { name: 'veiculo', type: 'string' },
                { name: 'u_id', type: 'string' },
                { name: 'nome', type: 'string' },
                { name: 'd_id', type: 'string' },
                { name: 'descricao', type: 'string' },
                { name: 'data_emprestimo', type: 'date' },
                { name: 'data_devolucao', type: 'date' },
                { name: 'status', type: 'string' }
            ],
            url: 'http://localhost/frota/public/getreserva',
            updaterow: function (rowid, rowdata) {
                // synchronize with the server - send update command   
            }
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    cellsrenderer = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {
        if (value < 20) {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        }
        else {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    };

    nameRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
        switch (value) {
            case 'Reservado':
                return "<label style='margin: 5px 0 0 5px; text-align: center;color:black;'>" + value + "</label>";

            case 'Em uso':
                return "<label style='margin: 5px 0 0 5px; text-align: center;color:blue;'>" + value + "</label>";

            case 'Atrasado':
                return "<label style='margin: 5px 0 0 5px; text-align: center;color:red;'>" + value + "</label>";

            case 'Devolvido':
                return "<label style='margin: 5px 0 0 5px; text-align: center;color:green;'>" + value + "</label>";

            default:
                return value;
        }
    }

    columns: any[] =
        [
            { text: 'ID', datafield: 'id', width: '4%' },
            { text: 'v_id', datafield: 'v_id', width: '13.4%', hidden: true },
            { text: 'Veículo', datafield: 'veiculo', width: '13.4%' },
            { text: 'u_id', datafield: 'u_id', width: '20%', hidden: true },
            { text: 'Usuário', datafield: 'nome', width: '17%' },
            { text: 'd_id', datafield: 'd_id', width: '20%', hidden: true },
            { text: 'Destino', datafield: 'descricao', width: '20%' },
            { text: 'Data Retirada', datafield: 'data_emprestimo', cellsformat: 'dd/MM/yyyy HH:mm', width: '15%', filtercondition: 'GREATER_THAN_OR_EQUAL', filtertype: 'date' },
            { text: 'Data Devolução', datafield: 'data_devolucao', cellsformat: 'dd/MM/yyyy HH:mm', width: '15%', filtercondition: 'LESS_THAN_OR_EQUAL', filtertype: 'date' },
            { text: 'Status', datafield: 'status', width: '10%', cellsrenderer: this.nameRenderer, filtercondition: 'DOES_NOT_CONTAIN' },
            { text: '', datafield: '', width: '3%', filterable: false }
        ];

    getLocalization = (): any => {
        let localizationobj = null;

        localizationobj = {
            pagergotopagestring: "Página:",
            pagershowrowsstring: "  Registros por Página:",
            pagerrangestring: " de ",
            pagernextbuttonstring: "Próxima",
            pagerpreviousbuttonstring: "Anterior",
            sortascendingstring: "Ordem Crescente",
            sortdescendingstring: "Ordem Decrescente",
            sortremovestring: "Remover filtro",
            firstDay: 1,
            percentsymbol: "%",
            currencysymbol: "R$",
            currencysymbolposition: "before",
            decimalseparator: ",",
            thousandsseparator: ".",
            emptydatastring: "Nenhuma reserva encontrada",
            groupbystring: "Agrupar por esta coluna",
            groupremovestring: "Remover coluna do agrupamento",
            groupsheaderstring: " ",
            todaystring: "Hoje",
            clearstring: "Limpar"
        }

        return localizationobj;
    };

    localization: any = this.getLocalization();



}
