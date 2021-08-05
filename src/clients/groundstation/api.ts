import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GroundStationClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelContact(input: shapes.GroundStationCancelContactRequest): GroundStationResponsesCancelContact {
    return new GroundStationResponsesCancelContact(this, this.__resources, input);
  }

  public createConfig(input: shapes.GroundStationCreateConfigRequest): GroundStationResponsesCreateConfig {
    return new GroundStationResponsesCreateConfig(this, this.__resources, input);
  }

  public createDataflowEndpointGroup(input: shapes.GroundStationCreateDataflowEndpointGroupRequest): GroundStationResponsesCreateDataflowEndpointGroup {
    return new GroundStationResponsesCreateDataflowEndpointGroup(this, this.__resources, input);
  }

  public createMissionProfile(input: shapes.GroundStationCreateMissionProfileRequest): GroundStationResponsesCreateMissionProfile {
    return new GroundStationResponsesCreateMissionProfile(this, this.__resources, input);
  }

  public deleteConfig(input: shapes.GroundStationDeleteConfigRequest): GroundStationResponsesDeleteConfig {
    return new GroundStationResponsesDeleteConfig(this, this.__resources, input);
  }

  public deleteDataflowEndpointGroup(input: shapes.GroundStationDeleteDataflowEndpointGroupRequest): GroundStationResponsesDeleteDataflowEndpointGroup {
    return new GroundStationResponsesDeleteDataflowEndpointGroup(this, this.__resources, input);
  }

  public deleteMissionProfile(input: shapes.GroundStationDeleteMissionProfileRequest): GroundStationResponsesDeleteMissionProfile {
    return new GroundStationResponsesDeleteMissionProfile(this, this.__resources, input);
  }

  public describeContact(input: shapes.GroundStationDescribeContactRequest): GroundStationResponsesDescribeContact {
    return new GroundStationResponsesDescribeContact(this, this.__resources, input);
  }

  public fetchConfig(input: shapes.GroundStationGetConfigRequest): GroundStationResponsesFetchConfig {
    return new GroundStationResponsesFetchConfig(this, this.__resources, input);
  }

  public fetchDataflowEndpointGroup(input: shapes.GroundStationGetDataflowEndpointGroupRequest): GroundStationResponsesFetchDataflowEndpointGroup {
    return new GroundStationResponsesFetchDataflowEndpointGroup(this, this.__resources, input);
  }

  public fetchMinuteUsage(input: shapes.GroundStationGetMinuteUsageRequest): GroundStationResponsesFetchMinuteUsage {
    return new GroundStationResponsesFetchMinuteUsage(this, this.__resources, input);
  }

  public fetchMissionProfile(input: shapes.GroundStationGetMissionProfileRequest): GroundStationResponsesFetchMissionProfile {
    return new GroundStationResponsesFetchMissionProfile(this, this.__resources, input);
  }

  public fetchSatellite(input: shapes.GroundStationGetSatelliteRequest): GroundStationResponsesFetchSatellite {
    return new GroundStationResponsesFetchSatellite(this, this.__resources, input);
  }

  public listConfigs(input: shapes.GroundStationListConfigsRequest): GroundStationResponsesListConfigs {
    return new GroundStationResponsesListConfigs(this, this.__resources, input);
  }

  public listContacts(input: shapes.GroundStationListContactsRequest): GroundStationResponsesListContacts {
    return new GroundStationResponsesListContacts(this, this.__resources, input);
  }

  public listDataflowEndpointGroups(input: shapes.GroundStationListDataflowEndpointGroupsRequest): GroundStationResponsesListDataflowEndpointGroups {
    return new GroundStationResponsesListDataflowEndpointGroups(this, this.__resources, input);
  }

  public listGroundStations(input: shapes.GroundStationListGroundStationsRequest): GroundStationResponsesListGroundStations {
    return new GroundStationResponsesListGroundStations(this, this.__resources, input);
  }

  public listMissionProfiles(input: shapes.GroundStationListMissionProfilesRequest): GroundStationResponsesListMissionProfiles {
    return new GroundStationResponsesListMissionProfiles(this, this.__resources, input);
  }

  public listSatellites(input: shapes.GroundStationListSatellitesRequest): GroundStationResponsesListSatellites {
    return new GroundStationResponsesListSatellites(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.GroundStationListTagsForResourceRequest): GroundStationResponsesListTagsForResource {
    return new GroundStationResponsesListTagsForResource(this, this.__resources, input);
  }

  public reserveContact(input: shapes.GroundStationReserveContactRequest): GroundStationResponsesReserveContact {
    return new GroundStationResponsesReserveContact(this, this.__resources, input);
  }

  public tagResource(input: shapes.GroundStationTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.GroundStationUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateConfig(input: shapes.GroundStationUpdateConfigRequest): GroundStationResponsesUpdateConfig {
    return new GroundStationResponsesUpdateConfig(this, this.__resources, input);
  }

  public updateMissionProfile(input: shapes.GroundStationUpdateMissionProfileRequest): GroundStationResponsesUpdateMissionProfile {
    return new GroundStationResponsesUpdateMissionProfile(this, this.__resources, input);
  }

}

export class GroundStationResponsesCancelContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationCancelContactRequest) {
  }

  public get contactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.CancelContact.contactId'),
        outputPath: 'contactId',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelContact.contactId', props);
    return resource.getResponseField('contactId') as unknown as string;
  }

}

export class GroundStationResponsesCreateConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationCreateConfigRequest) {
  }

  public get configArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.CreateConfig.configArn'),
        outputPath: 'configArn',
        parameters: {
          configData: {
            antennaDownlinkConfig: {
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.__input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.__input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.__input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.__input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.__input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.__input.configData.uplinkEchoConfig?.enabled,
            },
          },
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfig.configArn', props);
    return resource.getResponseField('configArn') as unknown as string;
  }

  public get configId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.CreateConfig.configId'),
        outputPath: 'configId',
        parameters: {
          configData: {
            antennaDownlinkConfig: {
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.__input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.__input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.__input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.__input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.__input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.__input.configData.uplinkEchoConfig?.enabled,
            },
          },
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfig.configId', props);
    return resource.getResponseField('configId') as unknown as string;
  }

  public get configType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.CreateConfig.configType'),
        outputPath: 'configType',
        parameters: {
          configData: {
            antennaDownlinkConfig: {
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.__input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.__input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.__input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.__input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.__input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.__input.configData.uplinkEchoConfig?.enabled,
            },
          },
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfig.configType', props);
    return resource.getResponseField('configType') as unknown as string;
  }

}

export class GroundStationResponsesCreateDataflowEndpointGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationCreateDataflowEndpointGroupRequest) {
  }

  public get dataflowEndpointGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataflowEndpointGroup',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.CreateDataflowEndpointGroup.dataflowEndpointGroupId'),
        outputPath: 'dataflowEndpointGroupId',
        parameters: {
          endpointDetails: this.__input.endpointDetails,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataflowEndpointGroup.dataflowEndpointGroupId', props);
    return resource.getResponseField('dataflowEndpointGroupId') as unknown as string;
  }

}

export class GroundStationResponsesCreateMissionProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationCreateMissionProfileRequest) {
  }

  public get missionProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.CreateMissionProfile.missionProfileId'),
        outputPath: 'missionProfileId',
        parameters: {
          contactPostPassDurationSeconds: this.__input.contactPostPassDurationSeconds,
          contactPrePassDurationSeconds: this.__input.contactPrePassDurationSeconds,
          dataflowEdges: this.__input.dataflowEdges,
          minimumViableContactDurationSeconds: this.__input.minimumViableContactDurationSeconds,
          name: this.__input.name,
          tags: this.__input.tags,
          trackingConfigArn: this.__input.trackingConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMissionProfile.missionProfileId', props);
    return resource.getResponseField('missionProfileId') as unknown as string;
  }

}

export class GroundStationResponsesDeleteConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationDeleteConfigRequest) {
  }

  public get configArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DeleteConfig.configArn'),
        outputPath: 'configArn',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConfig.configArn', props);
    return resource.getResponseField('configArn') as unknown as string;
  }

  public get configId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DeleteConfig.configId'),
        outputPath: 'configId',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConfig.configId', props);
    return resource.getResponseField('configId') as unknown as string;
  }

  public get configType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DeleteConfig.configType'),
        outputPath: 'configType',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConfig.configType', props);
    return resource.getResponseField('configType') as unknown as string;
  }

}

export class GroundStationResponsesDeleteDataflowEndpointGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationDeleteDataflowEndpointGroupRequest) {
  }

  public get dataflowEndpointGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataflowEndpointGroup',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DeleteDataflowEndpointGroup.dataflowEndpointGroupId'),
        outputPath: 'dataflowEndpointGroupId',
        parameters: {
          dataflowEndpointGroupId: this.__input.dataflowEndpointGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataflowEndpointGroup.dataflowEndpointGroupId', props);
    return resource.getResponseField('dataflowEndpointGroupId') as unknown as string;
  }

}

export class GroundStationResponsesDeleteMissionProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationDeleteMissionProfileRequest) {
  }

  public get missionProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DeleteMissionProfile.missionProfileId'),
        outputPath: 'missionProfileId',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteMissionProfile.missionProfileId', props);
    return resource.getResponseField('missionProfileId') as unknown as string;
  }

}

export class GroundStationResponsesDescribeContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationDescribeContactRequest) {
  }

  public get contactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.contactId'),
        outputPath: 'contactId',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.contactId', props);
    return resource.getResponseField('contactId') as unknown as string;
  }

  public get contactStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.contactStatus'),
        outputPath: 'contactStatus',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.contactStatus', props);
    return resource.getResponseField('contactStatus') as unknown as string;
  }

  public get dataflowList(): shapes.GroundStationDataflowDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.dataflowList'),
        outputPath: 'dataflowList',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.dataflowList', props);
    return resource.getResponseField('dataflowList') as unknown as shapes.GroundStationDataflowDetail[];
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.endTime'),
        outputPath: 'endTime',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.endTime', props);
    return resource.getResponseField('endTime') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.errorMessage'),
        outputPath: 'errorMessage',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.errorMessage', props);
    return resource.getResponseField('errorMessage') as unknown as string;
  }

  public get groundStation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.groundStation'),
        outputPath: 'groundStation',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.groundStation', props);
    return resource.getResponseField('groundStation') as unknown as string;
  }

  public get maximumElevation(): GroundStationResponsesDescribeContactMaximumElevation {
    return new GroundStationResponsesDescribeContactMaximumElevation(this.__scope, this.__resources, this.__input);
  }

  public get missionProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.missionProfileArn'),
        outputPath: 'missionProfileArn',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.missionProfileArn', props);
    return resource.getResponseField('missionProfileArn') as unknown as string;
  }

  public get postPassEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.postPassEndTime'),
        outputPath: 'postPassEndTime',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.postPassEndTime', props);
    return resource.getResponseField('postPassEndTime') as unknown as string;
  }

  public get prePassStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.prePassStartTime'),
        outputPath: 'prePassStartTime',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.prePassStartTime', props);
    return resource.getResponseField('prePassStartTime') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.region'),
        outputPath: 'region',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get satelliteArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.satelliteArn'),
        outputPath: 'satelliteArn',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.satelliteArn', props);
    return resource.getResponseField('satelliteArn') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.startTime'),
        outputPath: 'startTime',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.startTime', props);
    return resource.getResponseField('startTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.tags'),
        outputPath: 'tags',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GroundStationResponsesDescribeContactMaximumElevation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationDescribeContactRequest) {
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.maximumElevation.unit'),
        outputPath: 'maximumElevation.unit',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.maximumElevation.unit', props);
    return resource.getResponseField('maximumElevation.unit') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.DescribeContact.maximumElevation.value'),
        outputPath: 'maximumElevation.value',
        parameters: {
          contactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContact.maximumElevation.value', props);
    return resource.getResponseField('maximumElevation.value') as unknown as number;
  }

}

export class GroundStationResponsesFetchConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get configArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configArn'),
        outputPath: 'configArn',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configArn', props);
    return resource.getResponseField('configArn') as unknown as string;
  }

  public get configData(): GroundStationResponsesFetchConfigConfigData {
    return new GroundStationResponsesFetchConfigConfigData(this.__scope, this.__resources, this.__input);
  }

  public get configId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configId'),
        outputPath: 'configId',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configId', props);
    return resource.getResponseField('configId') as unknown as string;
  }

  public get configType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configType'),
        outputPath: 'configType',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configType', props);
    return resource.getResponseField('configType') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.name'),
        outputPath: 'name',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.tags'),
        outputPath: 'tags',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GroundStationResponsesFetchConfigConfigData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get antennaDownlinkConfig(): GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig {
    return new GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig(this.__scope, this.__resources, this.__input);
  }

  public get antennaDownlinkDemodDecodeConfig(): GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig {
    return new GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig(this.__scope, this.__resources, this.__input);
  }

  public get antennaUplinkConfig(): GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig {
    return new GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig(this.__scope, this.__resources, this.__input);
  }

  public get dataflowEndpointConfig(): GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig {
    return new GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig(this.__scope, this.__resources, this.__input);
  }

  public get trackingConfig(): GroundStationResponsesFetchConfigConfigDataTrackingConfig {
    return new GroundStationResponsesFetchConfigConfigDataTrackingConfig(this.__scope, this.__resources, this.__input);
  }

  public get uplinkEchoConfig(): GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig {
    return new GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig(this.__scope, this.__resources, this.__input);
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get spectrumConfig(): GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig {
    return new GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig(this.__scope, this.__resources, this.__input);
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get bandwidth(): GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth {
    return new GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth(this.__scope, this.__resources, this.__input);
  }

  public get centerFrequency(): GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency {
    return new GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency(this.__scope, this.__resources, this.__input);
  }

  public get polarization(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkConfig.spectrumConfig.polarization'),
        outputPath: 'configData.antennaDownlinkConfig.spectrumConfig.polarization',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkConfig.spectrumConfig.polarization', props);
    return resource.getResponseField('configData.antennaDownlinkConfig.spectrumConfig.polarization') as unknown as string;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get units(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkConfig.spectrumConfig.bandwidth.units'),
        outputPath: 'configData.antennaDownlinkConfig.spectrumConfig.bandwidth.units',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkConfig.spectrumConfig.bandwidth.units', props);
    return resource.getResponseField('configData.antennaDownlinkConfig.spectrumConfig.bandwidth.units') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkConfig.spectrumConfig.bandwidth.value'),
        outputPath: 'configData.antennaDownlinkConfig.spectrumConfig.bandwidth.value',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkConfig.spectrumConfig.bandwidth.value', props);
    return resource.getResponseField('configData.antennaDownlinkConfig.spectrumConfig.bandwidth.value') as unknown as number;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get units(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.units'),
        outputPath: 'configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.units',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.units', props);
    return resource.getResponseField('configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.units') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.value'),
        outputPath: 'configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.value',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.value', props);
    return resource.getResponseField('configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.value') as unknown as number;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get decodeConfig(): GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig {
    return new GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig(this.__scope, this.__resources, this.__input);
  }

  public get demodulationConfig(): GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig {
    return new GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig(this.__scope, this.__resources, this.__input);
  }

  public get spectrumConfig(): GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig {
    return new GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig(this.__scope, this.__resources, this.__input);
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get unvalidatedJson(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkDemodDecodeConfig.decodeConfig.unvalidatedJSON'),
        outputPath: 'configData.antennaDownlinkDemodDecodeConfig.decodeConfig.unvalidatedJSON',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.decodeConfig.unvalidatedJSON', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.decodeConfig.unvalidatedJSON') as unknown as string;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get unvalidatedJson(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkDemodDecodeConfig.demodulationConfig.unvalidatedJSON'),
        outputPath: 'configData.antennaDownlinkDemodDecodeConfig.demodulationConfig.unvalidatedJSON',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.demodulationConfig.unvalidatedJSON', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.demodulationConfig.unvalidatedJSON') as unknown as string;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get bandwidth(): GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth {
    return new GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth(this.__scope, this.__resources, this.__input);
  }

  public get centerFrequency(): GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency {
    return new GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency(this.__scope, this.__resources, this.__input);
  }

  public get polarization(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.polarization'),
        outputPath: 'configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.polarization',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.polarization', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.polarization') as unknown as string;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get units(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.units'),
        outputPath: 'configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.units',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.units', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.units') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.value'),
        outputPath: 'configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.value',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.value', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.value') as unknown as number;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get units(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.units'),
        outputPath: 'configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.units',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.units', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.units') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.value'),
        outputPath: 'configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.value',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.value', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.value') as unknown as number;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get spectrumConfig(): GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig {
    return new GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig(this.__scope, this.__resources, this.__input);
  }

  public get targetEirp(): GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp {
    return new GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp(this.__scope, this.__resources, this.__input);
  }

  public get transmitDisabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaUplinkConfig.transmitDisabled'),
        outputPath: 'configData.antennaUplinkConfig.transmitDisabled',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaUplinkConfig.transmitDisabled', props);
    return resource.getResponseField('configData.antennaUplinkConfig.transmitDisabled') as unknown as boolean;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get centerFrequency(): GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency {
    return new GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency(this.__scope, this.__resources, this.__input);
  }

  public get polarization(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaUplinkConfig.spectrumConfig.polarization'),
        outputPath: 'configData.antennaUplinkConfig.spectrumConfig.polarization',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaUplinkConfig.spectrumConfig.polarization', props);
    return resource.getResponseField('configData.antennaUplinkConfig.spectrumConfig.polarization') as unknown as string;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get units(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaUplinkConfig.spectrumConfig.centerFrequency.units'),
        outputPath: 'configData.antennaUplinkConfig.spectrumConfig.centerFrequency.units',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaUplinkConfig.spectrumConfig.centerFrequency.units', props);
    return resource.getResponseField('configData.antennaUplinkConfig.spectrumConfig.centerFrequency.units') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaUplinkConfig.spectrumConfig.centerFrequency.value'),
        outputPath: 'configData.antennaUplinkConfig.spectrumConfig.centerFrequency.value',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaUplinkConfig.spectrumConfig.centerFrequency.value', props);
    return resource.getResponseField('configData.antennaUplinkConfig.spectrumConfig.centerFrequency.value') as unknown as number;
  }

}

export class GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get units(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaUplinkConfig.targetEirp.units'),
        outputPath: 'configData.antennaUplinkConfig.targetEirp.units',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaUplinkConfig.targetEirp.units', props);
    return resource.getResponseField('configData.antennaUplinkConfig.targetEirp.units') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.antennaUplinkConfig.targetEirp.value'),
        outputPath: 'configData.antennaUplinkConfig.targetEirp.value',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.antennaUplinkConfig.targetEirp.value', props);
    return resource.getResponseField('configData.antennaUplinkConfig.targetEirp.value') as unknown as number;
  }

}

export class GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get dataflowEndpointName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.dataflowEndpointConfig.dataflowEndpointName'),
        outputPath: 'configData.dataflowEndpointConfig.dataflowEndpointName',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.dataflowEndpointConfig.dataflowEndpointName', props);
    return resource.getResponseField('configData.dataflowEndpointConfig.dataflowEndpointName') as unknown as string;
  }

  public get dataflowEndpointRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.dataflowEndpointConfig.dataflowEndpointRegion'),
        outputPath: 'configData.dataflowEndpointConfig.dataflowEndpointRegion',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.dataflowEndpointConfig.dataflowEndpointRegion', props);
    return resource.getResponseField('configData.dataflowEndpointConfig.dataflowEndpointRegion') as unknown as string;
  }

}

export class GroundStationResponsesFetchConfigConfigDataTrackingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get autotrack(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.trackingConfig.autotrack'),
        outputPath: 'configData.trackingConfig.autotrack',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.trackingConfig.autotrack', props);
    return resource.getResponseField('configData.trackingConfig.autotrack') as unknown as string;
  }

}

export class GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetConfigRequest) {
  }

  public get antennaUplinkConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.uplinkEchoConfig.antennaUplinkConfigArn'),
        outputPath: 'configData.uplinkEchoConfig.antennaUplinkConfigArn',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.uplinkEchoConfig.antennaUplinkConfigArn', props);
    return resource.getResponseField('configData.uplinkEchoConfig.antennaUplinkConfigArn') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetConfig.configData.uplinkEchoConfig.enabled'),
        outputPath: 'configData.uplinkEchoConfig.enabled',
        parameters: {
          configId: this.__input.configId,
          configType: this.__input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.configData.uplinkEchoConfig.enabled', props);
    return resource.getResponseField('configData.uplinkEchoConfig.enabled') as unknown as boolean;
  }

}

export class GroundStationResponsesFetchDataflowEndpointGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetDataflowEndpointGroupRequest) {
  }

  public get dataflowEndpointGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataflowEndpointGroup',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetDataflowEndpointGroup.dataflowEndpointGroupArn'),
        outputPath: 'dataflowEndpointGroupArn',
        parameters: {
          dataflowEndpointGroupId: this.__input.dataflowEndpointGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataflowEndpointGroup.dataflowEndpointGroupArn', props);
    return resource.getResponseField('dataflowEndpointGroupArn') as unknown as string;
  }

  public get dataflowEndpointGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataflowEndpointGroup',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetDataflowEndpointGroup.dataflowEndpointGroupId'),
        outputPath: 'dataflowEndpointGroupId',
        parameters: {
          dataflowEndpointGroupId: this.__input.dataflowEndpointGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataflowEndpointGroup.dataflowEndpointGroupId', props);
    return resource.getResponseField('dataflowEndpointGroupId') as unknown as string;
  }

  public get endpointsDetails(): shapes.GroundStationEndpointDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataflowEndpointGroup',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetDataflowEndpointGroup.endpointsDetails'),
        outputPath: 'endpointsDetails',
        parameters: {
          dataflowEndpointGroupId: this.__input.dataflowEndpointGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataflowEndpointGroup.endpointsDetails', props);
    return resource.getResponseField('endpointsDetails') as unknown as shapes.GroundStationEndpointDetails[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataflowEndpointGroup',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetDataflowEndpointGroup.tags'),
        outputPath: 'tags',
        parameters: {
          dataflowEndpointGroupId: this.__input.dataflowEndpointGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataflowEndpointGroup.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GroundStationResponsesFetchMinuteUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetMinuteUsageRequest) {
  }

  public get estimatedMinutesRemaining(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMinuteUsage',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMinuteUsage.estimatedMinutesRemaining'),
        outputPath: 'estimatedMinutesRemaining',
        parameters: {
          month: this.__input.month,
          year: this.__input.year,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMinuteUsage.estimatedMinutesRemaining', props);
    return resource.getResponseField('estimatedMinutesRemaining') as unknown as number;
  }

  public get isReservedMinutesCustomer(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMinuteUsage',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMinuteUsage.isReservedMinutesCustomer'),
        outputPath: 'isReservedMinutesCustomer',
        parameters: {
          month: this.__input.month,
          year: this.__input.year,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMinuteUsage.isReservedMinutesCustomer', props);
    return resource.getResponseField('isReservedMinutesCustomer') as unknown as boolean;
  }

  public get totalReservedMinuteAllocation(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMinuteUsage',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMinuteUsage.totalReservedMinuteAllocation'),
        outputPath: 'totalReservedMinuteAllocation',
        parameters: {
          month: this.__input.month,
          year: this.__input.year,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMinuteUsage.totalReservedMinuteAllocation', props);
    return resource.getResponseField('totalReservedMinuteAllocation') as unknown as number;
  }

  public get totalScheduledMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMinuteUsage',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMinuteUsage.totalScheduledMinutes'),
        outputPath: 'totalScheduledMinutes',
        parameters: {
          month: this.__input.month,
          year: this.__input.year,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMinuteUsage.totalScheduledMinutes', props);
    return resource.getResponseField('totalScheduledMinutes') as unknown as number;
  }

  public get upcomingMinutesScheduled(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMinuteUsage',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMinuteUsage.upcomingMinutesScheduled'),
        outputPath: 'upcomingMinutesScheduled',
        parameters: {
          month: this.__input.month,
          year: this.__input.year,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMinuteUsage.upcomingMinutesScheduled', props);
    return resource.getResponseField('upcomingMinutesScheduled') as unknown as number;
  }

}

export class GroundStationResponsesFetchMissionProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetMissionProfileRequest) {
  }

  public get contactPostPassDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMissionProfile.contactPostPassDurationSeconds'),
        outputPath: 'contactPostPassDurationSeconds',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMissionProfile.contactPostPassDurationSeconds', props);
    return resource.getResponseField('contactPostPassDurationSeconds') as unknown as number;
  }

  public get contactPrePassDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMissionProfile.contactPrePassDurationSeconds'),
        outputPath: 'contactPrePassDurationSeconds',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMissionProfile.contactPrePassDurationSeconds', props);
    return resource.getResponseField('contactPrePassDurationSeconds') as unknown as number;
  }

  public get dataflowEdges(): string[][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMissionProfile.dataflowEdges'),
        outputPath: 'dataflowEdges',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMissionProfile.dataflowEdges', props);
    return resource.getResponseField('dataflowEdges') as unknown as string[][];
  }

  public get minimumViableContactDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMissionProfile.minimumViableContactDurationSeconds'),
        outputPath: 'minimumViableContactDurationSeconds',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMissionProfile.minimumViableContactDurationSeconds', props);
    return resource.getResponseField('minimumViableContactDurationSeconds') as unknown as number;
  }

  public get missionProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMissionProfile.missionProfileArn'),
        outputPath: 'missionProfileArn',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMissionProfile.missionProfileArn', props);
    return resource.getResponseField('missionProfileArn') as unknown as string;
  }

  public get missionProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMissionProfile.missionProfileId'),
        outputPath: 'missionProfileId',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMissionProfile.missionProfileId', props);
    return resource.getResponseField('missionProfileId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMissionProfile.name'),
        outputPath: 'name',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMissionProfile.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMissionProfile.region'),
        outputPath: 'region',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMissionProfile.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMissionProfile.tags'),
        outputPath: 'tags',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMissionProfile.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get trackingConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetMissionProfile.trackingConfigArn'),
        outputPath: 'trackingConfigArn',
        parameters: {
          missionProfileId: this.__input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMissionProfile.trackingConfigArn', props);
    return resource.getResponseField('trackingConfigArn') as unknown as string;
  }

}

export class GroundStationResponsesFetchSatellite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationGetSatelliteRequest) {
  }

  public get groundStations(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSatellite',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetSatellite.groundStations'),
        outputPath: 'groundStations',
        parameters: {
          satelliteId: this.__input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSatellite.groundStations', props);
    return resource.getResponseField('groundStations') as unknown as string[];
  }

  public get noradSatelliteId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSatellite',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetSatellite.noradSatelliteID'),
        outputPath: 'noradSatelliteID',
        parameters: {
          satelliteId: this.__input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSatellite.noradSatelliteID', props);
    return resource.getResponseField('noradSatelliteID') as unknown as number;
  }

  public get satelliteArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSatellite',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetSatellite.satelliteArn'),
        outputPath: 'satelliteArn',
        parameters: {
          satelliteId: this.__input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSatellite.satelliteArn', props);
    return resource.getResponseField('satelliteArn') as unknown as string;
  }

  public get satelliteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSatellite',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.GetSatellite.satelliteId'),
        outputPath: 'satelliteId',
        parameters: {
          satelliteId: this.__input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSatellite.satelliteId', props);
    return resource.getResponseField('satelliteId') as unknown as string;
  }

}

export class GroundStationResponsesListConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationListConfigsRequest) {
  }

  public get configList(): shapes.GroundStationConfigListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigs',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListConfigs.configList'),
        outputPath: 'configList',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigs.configList', props);
    return resource.getResponseField('configList') as unknown as shapes.GroundStationConfigListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigs',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListConfigs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GroundStationResponsesListContacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationListContactsRequest) {
  }

  public get contactList(): shapes.GroundStationContactData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContacts',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListContacts.contactList'),
        outputPath: 'contactList',
        parameters: {
          endTime: this.__input.endTime,
          groundStation: this.__input.groundStation,
          maxResults: this.__input.maxResults,
          missionProfileArn: this.__input.missionProfileArn,
          nextToken: this.__input.nextToken,
          satelliteArn: this.__input.satelliteArn,
          startTime: this.__input.startTime,
          statusList: this.__input.statusList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContacts.contactList', props);
    return resource.getResponseField('contactList') as unknown as shapes.GroundStationContactData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContacts',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListContacts.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          endTime: this.__input.endTime,
          groundStation: this.__input.groundStation,
          maxResults: this.__input.maxResults,
          missionProfileArn: this.__input.missionProfileArn,
          nextToken: this.__input.nextToken,
          satelliteArn: this.__input.satelliteArn,
          startTime: this.__input.startTime,
          statusList: this.__input.statusList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContacts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GroundStationResponsesListDataflowEndpointGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationListDataflowEndpointGroupsRequest) {
  }

  public get dataflowEndpointGroupList(): shapes.GroundStationDataflowEndpointListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataflowEndpointGroups',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListDataflowEndpointGroups.dataflowEndpointGroupList'),
        outputPath: 'dataflowEndpointGroupList',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataflowEndpointGroups.dataflowEndpointGroupList', props);
    return resource.getResponseField('dataflowEndpointGroupList') as unknown as shapes.GroundStationDataflowEndpointListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataflowEndpointGroups',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListDataflowEndpointGroups.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataflowEndpointGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GroundStationResponsesListGroundStations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationListGroundStationsRequest) {
  }

  public get groundStationList(): shapes.GroundStationGroundStationData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroundStations',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListGroundStations.groundStationList'),
        outputPath: 'groundStationList',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          satelliteId: this.__input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroundStations.groundStationList', props);
    return resource.getResponseField('groundStationList') as unknown as shapes.GroundStationGroundStationData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroundStations',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListGroundStations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          satelliteId: this.__input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroundStations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GroundStationResponsesListMissionProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationListMissionProfilesRequest) {
  }

  public get missionProfileList(): shapes.GroundStationMissionProfileListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMissionProfiles',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListMissionProfiles.missionProfileList'),
        outputPath: 'missionProfileList',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMissionProfiles.missionProfileList', props);
    return resource.getResponseField('missionProfileList') as unknown as shapes.GroundStationMissionProfileListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMissionProfiles',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListMissionProfiles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMissionProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GroundStationResponsesListSatellites {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationListSatellitesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSatellites',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListSatellites.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSatellites.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get satellites(): shapes.GroundStationSatelliteListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSatellites',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListSatellites.satellites'),
        outputPath: 'satellites',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSatellites.satellites', props);
    return resource.getResponseField('satellites') as unknown as shapes.GroundStationSatelliteListItem[];
  }

}

export class GroundStationResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GroundStationResponsesReserveContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationReserveContactRequest) {
  }

  public get contactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reserveContact',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.ReserveContact.contactId'),
        outputPath: 'contactId',
        parameters: {
          endTime: this.__input.endTime,
          groundStation: this.__input.groundStation,
          missionProfileArn: this.__input.missionProfileArn,
          satelliteArn: this.__input.satelliteArn,
          startTime: this.__input.startTime,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReserveContact.contactId', props);
    return resource.getResponseField('contactId') as unknown as string;
  }

}

export class GroundStationResponsesUpdateConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationUpdateConfigRequest) {
  }

  public get configArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.UpdateConfig.configArn'),
        outputPath: 'configArn',
        parameters: {
          configData: {
            antennaDownlinkConfig: {
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.__input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.__input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.__input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.__input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.__input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.__input.configData.uplinkEchoConfig?.enabled,
            },
          },
          configId: this.__input.configId,
          configType: this.__input.configType,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfig.configArn', props);
    return resource.getResponseField('configArn') as unknown as string;
  }

  public get configId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.UpdateConfig.configId'),
        outputPath: 'configId',
        parameters: {
          configData: {
            antennaDownlinkConfig: {
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.__input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.__input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.__input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.__input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.__input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.__input.configData.uplinkEchoConfig?.enabled,
            },
          },
          configId: this.__input.configId,
          configType: this.__input.configType,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfig.configId', props);
    return resource.getResponseField('configId') as unknown as string;
  }

  public get configType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfig',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.UpdateConfig.configType'),
        outputPath: 'configType',
        parameters: {
          configData: {
            antennaDownlinkConfig: {
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.__input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.__input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.__input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.__input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.__input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.__input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.__input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.__input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.__input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.__input.configData.uplinkEchoConfig?.enabled,
            },
          },
          configId: this.__input.configId,
          configType: this.__input.configType,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfig.configType', props);
    return resource.getResponseField('configType') as unknown as string;
  }

}

export class GroundStationResponsesUpdateMissionProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GroundStationUpdateMissionProfileRequest) {
  }

  public get missionProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMissionProfile',
        service: 'GroundStation',
        physicalResourceId: cr.PhysicalResourceId.of('GroundStation.UpdateMissionProfile.missionProfileId'),
        outputPath: 'missionProfileId',
        parameters: {
          contactPostPassDurationSeconds: this.__input.contactPostPassDurationSeconds,
          contactPrePassDurationSeconds: this.__input.contactPrePassDurationSeconds,
          dataflowEdges: this.__input.dataflowEdges,
          minimumViableContactDurationSeconds: this.__input.minimumViableContactDurationSeconds,
          missionProfileId: this.__input.missionProfileId,
          name: this.__input.name,
          trackingConfigArn: this.__input.trackingConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMissionProfile.missionProfileId', props);
    return resource.getResponseField('missionProfileId') as unknown as string;
  }

}

