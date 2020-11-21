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
      "months2" : ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      "quandCollecter": "Amount to collect",
      "totalParSecteur": "Total quantity per area",
      "collectes": "Collections",
      "secteur": "Area {secteur}",
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
        "secteurOrigine": "Original area",
        "secteurDestination": "Destination area",
        "type": "Type",
        "nombre": "Number",
        "tournee_var" : {
          "effectif" : "Workforce",
          "benne_30t" : "Dump Truck 30T",
          "benne_40t" : "Dump Truck 40T"
        }
      },
      "variationEffectifs": "Change in headcount",
      "variationEffectifsLabels": {
        "dateDebut": "Start date",
        "dateFin": "End date",
        "effectifs": "Headcounts"
      }
    },
    "equipes": {
      "equipes_a_prevoir_pour_decembre" : "Team to schedule on december",
      "nombre_de_chauffeurs" : "Total Drivers",
      "nombre_d_agents" : "Total Agents",
      "info_equipes" : "Team Info",
      "info_equipes_notificatoin_1" : "Team 12 was assigned to itinerary A0F - S49.",
      "equipes_affectées_a_la_semaine" : "Team assigned to week 49",
      "equipes_labels": {
        "equipe" : "TEAM",
        "nom" : "names",
        "fonction" : "function",
        "vehicule" : "Vehicle",
        "itineraire" : "itinerary",
        "secteur" : "area",
        
      },
      "fonction_var" :{
        "chauffeur" : "Driver",
        "agent_de_terrain" : "garbage collector"
        }
    },
    "feuilles": {
      "remplissage_de_la_benne" : "Dump truck filling",
      "silos_recuperes" : "Emptied silos",
      "trajet_restant" : "Remaining Trip",
      "duree_estimee" : "Estimated duration",
      "itineraire" : "itinerary",
      "silos" : "Silos",
      "silos_labels" : {
        "silo" : "Silo",
        "remplissage" : "Filling",
        "adresse" : "Address",
        "etat" : "Status"
      },
      "actu_tournée" : "Tour Info",
      "actu_tournée_var" : {
        "debut_tour" : "Tour started",
        "maj_tour" : "Itinerary uptated",
        "info" : "Info",
        "silo_vide" : "Silo emptied",
        "route_baree" : "Closed road"
      },
      "feuilles_var" : {
        "vide" : "Emptied",
        "planifie" : "Planned",
        "annule" : "Canceled"
      }
    },
  },
    "user_profile": {
      "coFounder": "Co-founder",
      "slogan": "You better embrace changes as they come before they eat you as they go",
    "edit_profile_form" : {
      "edit_profile" : "Edit Profile",
      "enregistrer" : "Save",
      "edit_profile_var" : {
        "societe" : "Company",
        "nom_d_utilisateur" : "Username",
        "email" : "Email",
        "prenom" : "Firstname",
        "nom" : "LASTNAME",
        "adresse" : "Address",
        "ville" : "City",
        "pays" : "Country",
        "code_postal" : "Zip Code",
        "a_propos_de_moi" : "About Me"
      }
    }
  }
}
