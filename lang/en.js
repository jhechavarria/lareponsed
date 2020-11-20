module.exports = {
  "components": {
    "layout": {
      "contentFooter": {
        "faitAvec": "Made with",
        "par": "by",
        "avenirMeilleur": "for a better future"
      },
      "dashboardNavbar": {
        "chercher": "search",
        "profil": "Profile",
        "parametres": "Parameters",
        "deconnexion": "logout"
      },
      "sidebarSharePlugin": {
        "title": "THEME COLOR",
        "modeClair": "Light mode",
        "modeSombre": "Dark mode"
      }
    }
  },
  "layouts": {
    "default": {
      "sidebar": {
        "title": "Glassify",
        "shortTitle": "GD",
        "groups": {
          "agency": "Agency",
          "equipe": "Team",
          "utilisateur": "Users"
        },
        "dashboard": "Dashboard",
        "alertes": "Alerts",
        "equipes": "Teams",
        "feuilleDeRoute": "Roadmap",
        "itineraire": "Route",
        "userProfile": "User Profile"
      }
    }
  },
  "pages": {
    "alertes": {
      "pannes": "Breakdown",
      "pannes_labels": {
        "ref_materielle": "Equipment Ref",
        "type_materiel": "Equipement type",
        "panne": "Panne",
        "etat": "Status",
        "date_incident": "Incident Date",
        "date_cloture": "Closing Date"
      },
      "pannes_values": {
        "vehicule": "Vehicle",
        "silo": "Silo",
        "crevaison": "Flat tire",
        "capteur": "Sensor",
        "benne": "Dump truck",
        "alimentation": "Power",
        "depannage": "Reparing",
        "termine": "Completed",
        "hs": "Out of service",
        "maintenance": "In maintenance"
      },
      "alertes_silos": "Silos alerts",
      "alertes_silos_labels": {
        "silo": "Silo",
        "seuil": "Threshold",
        "prise_compte": "Considered",
        "date_heure_incident": "Date and time of incident"
      },
      "alertes_silos_values": {
        "reportee": "Reported",
        "effectuee": "Done",
        "en_cours": "In progress"
      }
    },
    "dashboard": {
      "months": ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      "quandCollecter": "Amount to collect",
      "totalParSecteur": "Total quantity per sector",
      "collectes": "Collections",
      "secteur": "Sector {secteur}",
      "effectifNecessairesMois": "Workforce Required Per Month",
      "nombreSalaries": "Number of employees",
      "predictions": "Predictions",
      "collectePrevueMois": "Next month scheduled quantity to be collected ",
      "tourneesPrevoirPeriode": "Tours to plan for the next periods",
      "tourneesPrevoirPeriodeTabsLabels": {
        "jour": "Day",
        "semaine": "Week",
        "mois": "Month",
        "trimestre": "Trimester",
      },
      "tourneesPrevoirPeriodeLabels": {
        "secteurOrigine": "Original sector",
        "secteurDestination": "Destination sector",
        "type": "Type",
        "nombre": "Number"
      },
      "variationEffectifs": "Change in headcount",
      "variationEffectifsLabels": {
        "dateDebut": "Start date",
        "dateFin": "End date",
        "effectifs": "Headcounts"
      }
    },
    "equipes": {
      "equipes_a_prevoir_pour_decembre" : "Equipe à prévoir pour décembre",
      "nombre_de_chauffeurs" : "Nombre de chauffeurs",
      "nombre_d_agents" : "Nombre d'agents",
      "info_equipes" : "Info Equipes",
      "info_equipes_notificatoin_1" : " Equipe 12 à été affectées à l'itinéraire A0F - S49.",
      "equipes_affectées_a_la_semaine" : "Equipes affectées à la semaines 49",
      "equipes_labels": {
        "equipe" : "EQUIPe",
        "nom" : "noms",
        "fonction" : "fontion",
        "vehicule" : "Véhicule",
        "itineraire" : "itinéraire",
        "secteur" : "secteur",
        
      },
      "fonction_var" :{
        "chauffeur" : "chauffeur",
        "agent_de_terrain" : "Agent de terrain"
        }
    },
    "feuilles": {
      "remplissage_de_la_benne" : "Remplissage de la benne",
      "silos_recuperes" : "Silos récupérés",
      "trajet_restant" : "Trajet restant",
      "duree_estimee" : "Durée estimée",
      "itineraire" : "Itinéraire",
      "silos" : "Silos",
      "silos_labels" : {
        "silo" : "Silo",
        "remplissage" : "Remplissage",
        "adresse" : "Adresse",
        "etat" : "Etat"
      },
      "actu_tournée" : "Actu Tournée",
      "feuilles_var" : {
        "vide" : "Vidé",
        "planifie" : "Planifié",
        "annule" : "Annulé"
      }
    }
  },
    "user_profile": {
    "edit_profile_form" : {
      "edit_profile" : "Edit Profile",
      "enregistrer" : "Enregistrer",
      "edit_profile_var" : {
        "societe" : "Société",
        "nom_d_utilisateur" : "Nom d'utilisateur",
        "email" : "Email",
        "prenom" : "Prénom",
        "nom" : "NOM",
        "adresse" : "Adresse",
        "ville" : "Ville",
        "pays" : "Pays",
        "code_postal" : "Code Postal",
        "a_propos_de_moi" : "A propos de moi"
      }
    }
  }
}
