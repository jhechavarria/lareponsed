<template>
  <div>
    <div class="row">

    </div>
    <div class="row">
      <div class="">
        <card>
          <h4 slot="header" class="card-title">Equipes à prévoir pour Septembre</h4>
          <h1>8</h1>
        </card>
      </div>
      <div class="col-2">
        <card>
          <h4 slot="header" class="card-title">Nombre de chauffeurs</h4>
          <h1>8</h1>
        </card>
      </div>
      <div class="">
        <card>
          <h4 slot="header" class="card-title">nombre d'agents</h4>
          <h1>24</h1>
        </card>
      </div>
      <div class="col-6">
        <card>
          <h4 slot="header" class="card-title">Info Equipes</h4>
          <base-alert type="info">
            <span>
              <b>Info - </b> Equipe 12 à été affectées à l'itinéraire A0F - S37.
            </span>
          </base-alert>
        </card>
      </div>
    </div>

    
    <div class="col-11">
      <div class="col">
        <card card-body-classes="table-fonction-width">
          <h4 slot="header" class="card-title">Equipes affectées à la semaien 37</h4>
          <el-table :data="tableData2">
            <el-table-column
              sortable
              label="Equipe"
              property="equipe"
            ></el-table-column>
            <el-table-column
              sortable
              label="Nom"
              property="name"
            ></el-table-column>
            <el-table-column
              sortable
              label="fonction"
              property="fonction"
            ></el-table-column>
            <el-table-column
              sortable
              label="Véhicule"
              property="done"
            ></el-table-column>
            <el-table-column
              sortable
              label="Itinéraire"
              property="address"
            ></el-table-column>
            <el-table-column
              sortable
              label="Secteur"
              property="secteur"
            ></el-table-column>
          </el-table>
        </card>
      </div>
    </div>
    </div>
</template>

<script>
import { Table, TableColumn } from 'element-ui';
import tt from "@tomtom-international/web-sdk-maps";
import { BaseAlert } from '@/components';

export default {
  name: 'regular',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BaseAlert,
  },
  data() {
    return {
      key: "4NQ8LXRDKZxEifOocQ8QCj6okBGwXpTu",
      lyon: [4.834310, 45.767310],
      tableData: [
        {
          name: 'Jean',
          address: '103 rue John Doe - 69005',
          fonction: 'Chauffeur',
          done: 'Vidé'
        },
        {
          name: 'Gavino Toscano',
          address: '20 rue Dufrène - 69005',
          fonction: 'Agent de terrain',
          done: 'Vidé'
        },
        {
          name: 'Anastasie Sevier',
          address: '1 rue du Caire - 69005',
          fonction: 'Chauffeur',
          done: 'Vidé'
        },
        {
          name: 'Agate Grandpré',
          address: '3 rue St. Pierre - 69005',
          fonction: 'Agent de terrain',
          done: 'CB'
        },
        {
          name: 'Jamal E. Ford',
          address: '12 rue Juliot - 69005',
          fonction: 'Agent de terrain',
          done: 'Planifiée'
        },
        {
          name: 'Julien Blanchard',
          address: '3 rue St. Pierre - 69005',
          fonction: 'Agent de terrain',
          done: 'CB'
        },
      ],
      tableData2: [
        {
          equipe: '12',
          name: 'Arlette Descoteau',
          address: 'A0F',
          fonction: 'Chauffeur',
          done: 'CL 34',
          secteur : '1'
        },
        {
          equipe : '20',
          name: 'José Correia',
          address: '00F',
          fonction: 'Agent de terrain',
          done: 'CB 02',
          secteur : '2'
        },
        {
          equipe: '12',
          name: 'Luca Saenger',
          address: 'A0F',
          fonction: 'Chauffeur',
          done: 'CL 34',
          secteur : '1'
        },
        {equipe : '01',
          name: 'Ulrich Frueh',
          address: '04B',
          fonction: 'Chauffeur',
          done: 'CL 12',
          secteur : '3'
        },
        {
          equipe: '13',
          name: 'Adrienne Norbert',
          address: '12A',
          fonction: 'Agent de terrain',
          done: 'CB',
          secteur : '2'
        },
        {
          equipe: '13',
          name: 'Jiao Chang',
          address: '12A',
          fonction: 'Agent de terrain',
          done: 'CB',
          secteur : '2'
        },
        {
          equipe: '13',
          name: 'Farhah Hajjar',
          address: '12A',
          fonction: 'Agent de terrain',
          done: 'CB',
          secteur : '2'
        },
      ]
    };
  },
};
</script>
<style>
.table-transparent {
  background-color: transparent !important;
}
</style>
