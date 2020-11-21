module.exports = {
    "components": {
      "layout": {
        "contentFooter": {
          "faitAvec": "fait avec",
          "par": "par",
          "avenirMeilleur": "pour un avenir meilleur"
        },
        "dashboardNavbar": {
          "chercher": "CHERCHER",
          "profil": "Profil",
          "parametres": "Paramètres",
          "deconnexion": "Se Déconnecter"
        },
        "sidebarSharePlugin": {
          "title": "COULEUR DU THEME",
          "modeClair": "Mode clair",
          "modeSombre": "Mode sombre"
        }
      }
    },
    "layouts": {
      "default": {
        "sidebar": {
          "title": "Glassify",
          "shortTitle": "GD",
          "groups": {
            "agency": "Agence",
            "equipe": "Equipe",
            "utilisateur": "Utilisateurs"
          },
          "dashboard": "Tableau de Bord",
          "alertes": "Alertes",
          "equipes": "Equipes",
          "feuilleDeRoute": "Feuille de route",
          "itineraire": "Itinéraires",
          "userProfile": "Profil"
        }
      }
    },
    "pages": {
      "alertes": {
        "pannes": "Pannes",
        "pannes_labels": {
          "ref_materielle": "Ref Matériel",
          "type_materiel": "Type Matériel",
          "panne": "Panne",
          "etat": "Etat",
          "date_incident": "Date d'incident",
          "date_cloture": "Date de cloture"
        },
        "pannes_values": {
          "vehicule": "Véhicule",
          "silo": "Silo",
          "crevaison": "Crevaison",
          "capteur": "Capteur",
          "benne": "Benne",
          "alimentation": "Alimentation",
          "depannage": "En dépannage",
          "termine": "Terminé",
          "hs": "HS",
          "maintenance": "En maintenance"
        },
        "alertes_silos": "Alertes Silos",
        "alertes_silos_labels": {
          "silo": "Silo",
          "seuil": "Seuil",
          "prise_compte": "Prise en compte",
          "date_heure_incident": "Date & heure d'incident"
        },
        "alertes_silos_values": {
          "reportee": "Reportée",
          "effectuee": "Effecuée",
          "en_cours": "En cours"
        }
      },
      "dashboard": {
        "months": ['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOUT', 'SEP', 'OCT', 'NOV', 'DEC'],
        "months2" : ['JUIL', 'AOUT', 'SEP', 'OCT', 'NOV', 'DEC'],
        "quandCollecter": "Quantité à collecter",
        "totalParSecteur": "Quantité totale par secteur",
        "collectes": "Collectes",
        "secteur": "Secteur {secteur}",
        "effectifNecessairesMois": "Effectifs Necéssaires Par Mois",
        "nombreSalaries": "Nombre de salariés",
        "predictions": "Prédictions",
        "collectePrevueMois": "Collecte prévue pour le mois prochain",
        "tourneesPrevoirPeriode": "Tournées à prévoir pour les prochaines périodes",
        "tourneesPrevoirPeriodeTabsLabels": {
          "jour": "Jour",
          "semaine": "Semaine",
          "mois": "Mois",
          "trimestre": "Trimestre",
        },
        "tourneesPrevoirPeriodeLabels": {
          "secteurOrigine": "Secteur origine",
          "secteurDestination": "Secteur destination",
          "type": "Type",
          "nombre": "Nombre",
          "tournee_var" : {
            "effectif" : "Effectif",
            "benne_30t" : "Benne 30T",
            "benne_40t" : "Bennes 40T"
          }
        },
        "variationEffectifs": "Variation des effectifs",
        "variationEffectifsLabels": {
          "dateDebut": "Dete debut",
          "dateFin": "Dete fin",
          "effectifs": "Effectifs"
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
        "actu_tournée_var" : {
          "debut_tour" : "Début de la tournée",
          "maj_tour" : "Mise à jour de l'itinérairer",
          "info" : "Info",
          "silo_vide" : "Silo vidé",
          "route_baree" : "Route barée"
        },
        "feuilles_var" : {
          "vide" : "Vidé",
          "planifie" : "Planifié",
          "annule" : "Annulé"
        },
      }
    },
      "user_profile": {
        "coFounder": "Co-Fondatrice",
        "slogan": "Mieux vaut prendre le changement par la main avant qu'il ne nous prenne par la gorge",
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
