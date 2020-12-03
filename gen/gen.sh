#!/bin/bash

###########################################################################################
#
#
#
#
##############################################

set -euo pipefail

scriptdir=$(cd $(dirname $0) && pwd)
rootdir=${scriptdir}/..
sdk_version=${1:-2.799.0}

tempdir=$(mktemp -d -t aws-cdk-sdk-gen)

pushd ${tempdir}

repo_path=${tempdir}/aws-sdk-js-${sdk_version}

echo "Downloading SDK repository.."
wget https://github.com/aws/aws-sdk-js/archive/v${sdk_version}.zip

echo "Extracting..."
unzip v${sdk_version}.zip

NODE_OPTIONS=--max_old_space_size=4096 ${rootdir}/node_modules/.bin/ts-node ${rootdir}/gen/gen.ts ${repo_path}

for client in $(ls ${rootdir}/src/clients); do
  pushd ${rootdir}/src/clients/${client}
  ${rootdir}/node_modules/.bin/typescript-json-schema shapes.ts "*" > schema.json
  popd
done
popd