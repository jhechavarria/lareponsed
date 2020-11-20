<template>
  <div>
    <div class="row">
      <div class="col-md-2 col-sm-4">
        <card>
          <h4 slot="header" class="card-title text-center">{{ $t('pages.equipes.equipes_a_prevoir_pour_decembre') }}</h4>
          <h1 align="center">8</h1>
        </card>
      </div>
      <div class="col-md-2 col-sm-4">
        <card>
          <h4 slot="header" class="card-title text-center">{{ $t('pages.equipes.nombre_de_chauffeurs') }}</h4>
          <h1 align="center">8</h1>
        </card>
      </div>
      <div class="col-md-2 col-sm-4">
        <card>
          <h4 slot="header" class="card-title text-center">{{ $t('pages.equipes.nombre_d_agents') }}</h4>
          <h1 align="center">24</h1>
        </card>
      </div>
      <div class="col-md-6 col-sm-12">
        <card>
          <h4 slot="header" class="card-title">{{ $t('pages.equipes.info_equipes') }}</h4>
          <base-alert type="info">
            <span>
              <b>Info - </b> {{ $t('pages.equipes.info_equipes_notificatoin_1') }}
            </span>
          </base-alert>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <card card-body-classes="table-fonction-width">
          <h4 slot="header" class="card-title">{{ $t('pages.equipes.equipes_affectées_a_la_semaine') }}</h4>
          <el-table :data="tableData2">
            <el-table-column
              sortable
              :label= "$t('pages.equipes.equipes_labels.equipe')"
              property="equipe"
            ></el-table-column>
            <el-table-column
              sortable
              :label= "$t('pages.equipes.equipes_labels.nom')"
              property="name"
            ></el-table-column>
            <el-table-column
              sortable
              :label= "$t('pages.equipes.equipes_labels.fonction')"
              property="fonction"
            ></el-table-column>
            <el-table-column
              sortable
              :label= "$t('pages.equipes.equipes_labels.vehicule')"
              property="done"
            ></el-table-column>
            <el-table-column
              sortable
              :label= "$t('pages.equipes.equipes_labels.itineraire')"
              property="address"
            ></el-table-column>
            <el-table-column
              sortable
              :label= "$t('pages.equipes.equipes_labels.secteur')"
              property="secteur"
            ></el-table-column>
          </el-table>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import tt from "@tomtom-international/web-sdk-maps";
import { BaseAlert } from "@/components";

export default {
  name: "regular",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BaseAlert,
  },
  data() {
    return {
      key: "4NQ8LXRDKZxEifOocQ8QCj6okBGwXpTu",
      lyon: [4.83431, 45.76731],
      tableData: [
        {
          name: "Jean",
          address: "103 rue John Doe - 69005",
          fonction: "Chauffeur",
          done: "Vidé",
        },
        {
          name: "Gavino Toscano",
          address: "20 rue Dufrène - 69005",
          fonction: this.$t('pages.equipes.fonction_var.agent_de_terrain'),
          done: "Vidé",
        },
        {
          name: "Anastasie Sevier",
          address: "1 rue du Caire - 69005",
          fonction: this.$t('pages.equipes.equipes_labels.fonction_var.chauffeur'),
          done: "Vidé",
        },
        {
          name: "Agate Grandpré",
          address: "3 rue St. Pierre - 69005",
          fonction: this.$t('pages.equipes.fonction_var.agent_de_terrain'),
          done: "CB",
        },
        {
          name: "Jamal E. Ford",
          address: "12 rue Juliot - 69005",
          fonction: this.$t('pages.equipes.fonction_var.agent_de_terrain'),
          done: "Planifiée",
        },
        {
          name: "Julien Blanchard",
          address: "3 rue St. Pierre - 69005",
          fonction: this.$t('pages.equipes.fonction_var.agent_de_terrain'),
          done: "CB",
        },
      ],
      tableData2: [
        {
          equipe: "12",
          name: "Arlette Descoteau",
          address: "A0F",
          fonction: this.$t('pages.equipes.fonction_var.chauffeur'),
          done: "CL 34",
          secteur: "1",
        },
        {
          equipe: "20",
          name: "José Correia",
          address: "00F",
          fonction: this.$t('pages.equipes.fonction_var.agent_de_terrain'),
          done: "CB 02",
          secteur: "2",
        },
        {
          equipe: "12",
          name: "Luca Saenger",
          address: "A0F",
          fonction: this.$t('pages.equipes.fonction_var.chauffeur'),
          done: "CL 34",
          secteur: "1",
        },
        {
          equipe: "01",
          name: "Ulrich Frueh",
          address: "04B",
          fonction: this.$t('pages.equipes.fonction_var.chauffeur'),
          done: "CL 12",
          secteur: "3",
        },
        {
          equipe: "13",
          name: "Adrienne Norbert",
          address: "12A",
          fonction: this.$t('pages.equipes.fonction_var.agent_de_terrain'),
          done: "CB",
          secteur: "2",
        },
        {
          equipe: "13",
          name: "Jiao Chang",
          address: "12A",
          fonction: this.$t('pages.equipes.fonction_var.agent_de_terrain'),
          done: "CB",
          secteur: "2",
        },
        {
          equipe: "13",
          name: "Farhah Hajjar",
          address: "12A",
          fonction: this.$t('pages.equipes.fonction_var.agent_de_terrain'),
          done: "CB",
          secteur: "2",
        },
      ],
    };
  },
};
</script>
<style>
.table-transparent {
  background-color: transparent !important;
}
</style>
