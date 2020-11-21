#!/bin/bash

###################################################
#
# File Name : app.sh
# Created By : antrhaxx
# Creation Date : 2020-11-17 00:02:21
# Last Modified : 2020-11-17 00:25:04
# Purpose : 
#
###################################################

yarn

yarn generate --fail-on-error

yarn start --hostname 0.0.0.0 -p 80
