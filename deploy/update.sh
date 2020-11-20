#!/usr/bin/env bash

sudo git -C /opt/containers/nuxt_app pull
docker-compose -f /opt/lrd/docker-compose.yml restart nuxt_app
