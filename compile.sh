#!/bin/bash

###########################################################################################
#
#
#
#
##############################################

set -euo pipefail

scriptdir=$(cd $(dirname $0) && pwd)
rootdir=${scriptdir}

for client in $(ls ${rootdir}/src/clients); do
  echo "Compiling ${client}..."
  NODE_OPTIONS=--max_old_space_size=4096 ${rootdir}/node_modules/.bin/tsc ${rootdir}/src/clients/${client}/*.ts
done;
