import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GroundStationClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelContact(input: shapes.GroundStationCancelContactRequest): GroundStationCancelContact {
    return new GroundStationCancelContact(this, 'CancelContact', this.__resources, input);
  }

  public createConfig(input: shapes.GroundStationCreateConfigRequest): GroundStationCreateConfig {
    return new GroundStationCreateConfig(this, 'CreateConfig', this.__resources, input);
  }

  public createDataflowEndpointGroup(input: shapes.GroundStationCreateDataflowEndpointGroupRequest): GroundStationCreateDataflowEndpointGroup {
    return new GroundStationCreateDataflowEndpointGroup(this, 'CreateDataflowEndpointGroup', this.__resources, input);
  }

  public createMissionProfile(input: shapes.GroundStationCreateMissionProfileRequest): GroundStationCreateMissionProfile {
    return new GroundStationCreateMissionProfile(this, 'CreateMissionProfile', this.__resources, input);
  }

  public deleteConfig(input: shapes.GroundStationDeleteConfigRequest): GroundStationDeleteConfig {
    return new GroundStationDeleteConfig(this, 'DeleteConfig', this.__resources, input);
  }

  public deleteDataflowEndpointGroup(input: shapes.GroundStationDeleteDataflowEndpointGroupRequest): GroundStationDeleteDataflowEndpointGroup {
    return new GroundStationDeleteDataflowEndpointGroup(this, 'DeleteDataflowEndpointGroup', this.__resources, input);
  }

  public deleteMissionProfile(input: shapes.GroundStationDeleteMissionProfileRequest): GroundStationDeleteMissionProfile {
    return new GroundStationDeleteMissionProfile(this, 'DeleteMissionProfile', this.__resources, input);
  }

  public describeContact(input: shapes.GroundStationDescribeContactRequest): GroundStationDescribeContact {
    return new GroundStationDescribeContact(this, 'DescribeContact', this.__resources, input);
  }

  public fetchConfig(input: shapes.GroundStationGetConfigRequest): GroundStationFetchConfig {
    return new GroundStationFetchConfig(this, 'FetchConfig', this.__resources, input);
  }

  public fetchDataflowEndpointGroup(input: shapes.GroundStationGetDataflowEndpointGroupRequest): GroundStationFetchDataflowEndpointGroup {
    return new GroundStationFetchDataflowEndpointGroup(this, 'FetchDataflowEndpointGroup', this.__resources, input);
  }

  public fetchMinuteUsage(input: shapes.GroundStationGetMinuteUsageRequest): GroundStationFetchMinuteUsage {
    return new GroundStationFetchMinuteUsage(this, 'FetchMinuteUsage', this.__resources, input);
  }

  public fetchMissionProfile(input: shapes.GroundStationGetMissionProfileRequest): GroundStationFetchMissionProfile {
    return new GroundStationFetchMissionProfile(this, 'FetchMissionProfile', this.__resources, input);
  }

  public fetchSatellite(input: shapes.GroundStationGetSatelliteRequest): GroundStationFetchSatellite {
    return new GroundStationFetchSatellite(this, 'FetchSatellite', this.__resources, input);
  }

  public listConfigs(input: shapes.GroundStationListConfigsRequest): GroundStationListConfigs {
    return new GroundStationListConfigs(this, 'ListConfigs', this.__resources, input);
  }

  public listContacts(input: shapes.GroundStationListContactsRequest): GroundStationListContacts {
    return new GroundStationListContacts(this, 'ListContacts', this.__resources, input);
  }

  public listDataflowEndpointGroups(input: shapes.GroundStationListDataflowEndpointGroupsRequest): GroundStationListDataflowEndpointGroups {
    return new GroundStationListDataflowEndpointGroups(this, 'ListDataflowEndpointGroups', this.__resources, input);
  }

  public listGroundStations(input: shapes.GroundStationListGroundStationsRequest): GroundStationListGroundStations {
    return new GroundStationListGroundStations(this, 'ListGroundStations', this.__resources, input);
  }

  public listMissionProfiles(input: shapes.GroundStationListMissionProfilesRequest): GroundStationListMissionProfiles {
    return new GroundStationListMissionProfiles(this, 'ListMissionProfiles', this.__resources, input);
  }

  public listSatellites(input: shapes.GroundStationListSatellitesRequest): GroundStationListSatellites {
    return new GroundStationListSatellites(this, 'ListSatellites', this.__resources, input);
  }

  public listTagsForResource(input: shapes.GroundStationListTagsForResourceRequest): GroundStationListTagsForResource {
    return new GroundStationListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public reserveContact(input: shapes.GroundStationReserveContactRequest): GroundStationReserveContact {
    return new GroundStationReserveContact(this, 'ReserveContact', this.__resources, input);
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

  public updateConfig(input: shapes.GroundStationUpdateConfigRequest): GroundStationUpdateConfig {
    return new GroundStationUpdateConfig(this, 'UpdateConfig', this.__resources, input);
  }

  public updateMissionProfile(input: shapes.GroundStationUpdateMissionProfileRequest): GroundStationUpdateMissionProfile {
    return new GroundStationUpdateMissionProfile(this, 'UpdateMissionProfile', this.__resources, input);
  }

}

export class GroundStationCancelContact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationCancelContactRequest) {
    super(scope, id);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelContact.contactId', props);
    return resource.getResponseField('contactId') as unknown as string;
  }

}

export class GroundStationCreateConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationCreateConfigRequest) {
    super(scope, id);
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
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.input.configData.uplinkEchoConfig?.enabled,
            },
          },
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfig.configArn', props);
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
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.input.configData.uplinkEchoConfig?.enabled,
            },
          },
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfig.configId', props);
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
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.input.configData.uplinkEchoConfig?.enabled,
            },
          },
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfig.configType', props);
    return resource.getResponseField('configType') as unknown as string;
  }

}

export class GroundStationCreateDataflowEndpointGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationCreateDataflowEndpointGroupRequest) {
    super(scope, id);
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
          endpointDetails: this.input.endpointDetails,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataflowEndpointGroup.dataflowEndpointGroupId', props);
    return resource.getResponseField('dataflowEndpointGroupId') as unknown as string;
  }

}

export class GroundStationCreateMissionProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationCreateMissionProfileRequest) {
    super(scope, id);
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
          contactPostPassDurationSeconds: this.input.contactPostPassDurationSeconds,
          contactPrePassDurationSeconds: this.input.contactPrePassDurationSeconds,
          dataflowEdges: this.input.dataflowEdges,
          minimumViableContactDurationSeconds: this.input.minimumViableContactDurationSeconds,
          name: this.input.name,
          tags: this.input.tags,
          trackingConfigArn: this.input.trackingConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMissionProfile.missionProfileId', props);
    return resource.getResponseField('missionProfileId') as unknown as string;
  }

}

export class GroundStationDeleteConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationDeleteConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConfig.configArn', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConfig.configId', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConfig.configType', props);
    return resource.getResponseField('configType') as unknown as string;
  }

}

export class GroundStationDeleteDataflowEndpointGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationDeleteDataflowEndpointGroupRequest) {
    super(scope, id);
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
          dataflowEndpointGroupId: this.input.dataflowEndpointGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataflowEndpointGroup.dataflowEndpointGroupId', props);
    return resource.getResponseField('dataflowEndpointGroupId') as unknown as string;
  }

}

export class GroundStationDeleteMissionProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationDeleteMissionProfileRequest) {
    super(scope, id);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteMissionProfile.missionProfileId', props);
    return resource.getResponseField('missionProfileId') as unknown as string;
  }

}

export class GroundStationDescribeContact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationDescribeContactRequest) {
    super(scope, id);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.contactId', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.contactStatus', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.dataflowList', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.endTime', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.errorMessage', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.groundStation', props);
    return resource.getResponseField('groundStation') as unknown as string;
  }

  public get maximumElevation(): GroundStationDescribeContactMaximumElevation {
    return new GroundStationDescribeContactMaximumElevation(this, 'MaximumElevation', this.__resources, this.input);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.missionProfileArn', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.postPassEndTime', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.prePassStartTime', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.region', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.satelliteArn', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.startTime', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GroundStationDescribeContactMaximumElevation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationDescribeContactRequest) {
    super(scope, id);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.maximumElevation.unit', props);
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
          contactId: this.input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContact.maximumElevation.value', props);
    return resource.getResponseField('maximumElevation.value') as unknown as number;
  }

}

export class GroundStationFetchConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configArn', props);
    return resource.getResponseField('configArn') as unknown as string;
  }

  public get configData(): GroundStationFetchConfigConfigData {
    return new GroundStationFetchConfigConfigData(this, 'ConfigData', this.__resources, this.input);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configId', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configType', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.name', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GroundStationFetchConfigConfigData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
  }

  public get antennaDownlinkConfig(): GroundStationFetchConfigConfigDataAntennaDownlinkConfig {
    return new GroundStationFetchConfigConfigDataAntennaDownlinkConfig(this, 'AntennaDownlinkConfig', this.__resources, this.input);
  }

  public get antennaDownlinkDemodDecodeConfig(): GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig {
    return new GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig(this, 'AntennaDownlinkDemodDecodeConfig', this.__resources, this.input);
  }

  public get antennaUplinkConfig(): GroundStationFetchConfigConfigDataAntennaUplinkConfig {
    return new GroundStationFetchConfigConfigDataAntennaUplinkConfig(this, 'AntennaUplinkConfig', this.__resources, this.input);
  }

  public get dataflowEndpointConfig(): GroundStationFetchConfigConfigDataDataflowEndpointConfig {
    return new GroundStationFetchConfigConfigDataDataflowEndpointConfig(this, 'DataflowEndpointConfig', this.__resources, this.input);
  }

  public get trackingConfig(): GroundStationFetchConfigConfigDataTrackingConfig {
    return new GroundStationFetchConfigConfigDataTrackingConfig(this, 'TrackingConfig', this.__resources, this.input);
  }

  public get uplinkEchoConfig(): GroundStationFetchConfigConfigDataUplinkEchoConfig {
    return new GroundStationFetchConfigConfigDataUplinkEchoConfig(this, 'UplinkEchoConfig', this.__resources, this.input);
  }

}

export class GroundStationFetchConfigConfigDataAntennaDownlinkConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
  }

  public get spectrumConfig(): GroundStationFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig {
    return new GroundStationFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig(this, 'SpectrumConfig', this.__resources, this.input);
  }

}

export class GroundStationFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
  }

  public get bandwidth(): GroundStationFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth {
    return new GroundStationFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth(this, 'Bandwidth', this.__resources, this.input);
  }

  public get centerFrequency(): GroundStationFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency {
    return new GroundStationFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency(this, 'CenterFrequency', this.__resources, this.input);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkConfig.spectrumConfig.polarization', props);
    return resource.getResponseField('configData.antennaDownlinkConfig.spectrumConfig.polarization') as unknown as string;
  }

}

export class GroundStationFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkConfig.spectrumConfig.bandwidth.units', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkConfig.spectrumConfig.bandwidth.value', props);
    return resource.getResponseField('configData.antennaDownlinkConfig.spectrumConfig.bandwidth.value') as unknown as number;
  }

}

export class GroundStationFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.units', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.value', props);
    return resource.getResponseField('configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.value') as unknown as number;
  }

}

export class GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
  }

  public get decodeConfig(): GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig {
    return new GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig(this, 'DecodeConfig', this.__resources, this.input);
  }

  public get demodulationConfig(): GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig {
    return new GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig(this, 'DemodulationConfig', this.__resources, this.input);
  }

  public get spectrumConfig(): GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig {
    return new GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig(this, 'SpectrumConfig', this.__resources, this.input);
  }

}

export class GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.decodeConfig.unvalidatedJSON', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.decodeConfig.unvalidatedJSON') as unknown as string;
  }

}

export class GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.demodulationConfig.unvalidatedJSON', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.demodulationConfig.unvalidatedJSON') as unknown as string;
  }

}

export class GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
  }

  public get bandwidth(): GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth {
    return new GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth(this, 'Bandwidth', this.__resources, this.input);
  }

  public get centerFrequency(): GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency {
    return new GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency(this, 'CenterFrequency', this.__resources, this.input);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.polarization', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.polarization') as unknown as string;
  }

}

export class GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.units', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.value', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.value') as unknown as number;
  }

}

export class GroundStationFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.units', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.value', props);
    return resource.getResponseField('configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.value') as unknown as number;
  }

}

export class GroundStationFetchConfigConfigDataAntennaUplinkConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
  }

  public get spectrumConfig(): GroundStationFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig {
    return new GroundStationFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig(this, 'SpectrumConfig', this.__resources, this.input);
  }

  public get targetEirp(): GroundStationFetchConfigConfigDataAntennaUplinkConfigTargetEirp {
    return new GroundStationFetchConfigConfigDataAntennaUplinkConfigTargetEirp(this, 'TargetEirp', this.__resources, this.input);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaUplinkConfig.transmitDisabled', props);
    return resource.getResponseField('configData.antennaUplinkConfig.transmitDisabled') as unknown as boolean;
  }

}

export class GroundStationFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
  }

  public get centerFrequency(): GroundStationFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency {
    return new GroundStationFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency(this, 'CenterFrequency', this.__resources, this.input);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaUplinkConfig.spectrumConfig.polarization', props);
    return resource.getResponseField('configData.antennaUplinkConfig.spectrumConfig.polarization') as unknown as string;
  }

}

export class GroundStationFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaUplinkConfig.spectrumConfig.centerFrequency.units', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaUplinkConfig.spectrumConfig.centerFrequency.value', props);
    return resource.getResponseField('configData.antennaUplinkConfig.spectrumConfig.centerFrequency.value') as unknown as number;
  }

}

export class GroundStationFetchConfigConfigDataAntennaUplinkConfigTargetEirp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaUplinkConfig.targetEirp.units', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.antennaUplinkConfig.targetEirp.value', props);
    return resource.getResponseField('configData.antennaUplinkConfig.targetEirp.value') as unknown as number;
  }

}

export class GroundStationFetchConfigConfigDataDataflowEndpointConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.dataflowEndpointConfig.dataflowEndpointName', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.dataflowEndpointConfig.dataflowEndpointRegion', props);
    return resource.getResponseField('configData.dataflowEndpointConfig.dataflowEndpointRegion') as unknown as string;
  }

}

export class GroundStationFetchConfigConfigDataTrackingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.trackingConfig.autotrack', props);
    return resource.getResponseField('configData.trackingConfig.autotrack') as unknown as string;
  }

}

export class GroundStationFetchConfigConfigDataUplinkEchoConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetConfigRequest) {
    super(scope, id);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.uplinkEchoConfig.antennaUplinkConfigArn', props);
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
          configId: this.input.configId,
          configType: this.input.configType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.configData.uplinkEchoConfig.enabled', props);
    return resource.getResponseField('configData.uplinkEchoConfig.enabled') as unknown as boolean;
  }

}

export class GroundStationFetchDataflowEndpointGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetDataflowEndpointGroupRequest) {
    super(scope, id);
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
          dataflowEndpointGroupId: this.input.dataflowEndpointGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataflowEndpointGroup.dataflowEndpointGroupArn', props);
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
          dataflowEndpointGroupId: this.input.dataflowEndpointGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataflowEndpointGroup.dataflowEndpointGroupId', props);
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
          dataflowEndpointGroupId: this.input.dataflowEndpointGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataflowEndpointGroup.endpointsDetails', props);
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
          dataflowEndpointGroupId: this.input.dataflowEndpointGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataflowEndpointGroup.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GroundStationFetchMinuteUsage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetMinuteUsageRequest) {
    super(scope, id);
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
          month: this.input.month,
          year: this.input.year,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMinuteUsage.estimatedMinutesRemaining', props);
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
          month: this.input.month,
          year: this.input.year,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMinuteUsage.isReservedMinutesCustomer', props);
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
          month: this.input.month,
          year: this.input.year,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMinuteUsage.totalReservedMinuteAllocation', props);
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
          month: this.input.month,
          year: this.input.year,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMinuteUsage.totalScheduledMinutes', props);
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
          month: this.input.month,
          year: this.input.year,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMinuteUsage.upcomingMinutesScheduled', props);
    return resource.getResponseField('upcomingMinutesScheduled') as unknown as number;
  }

}

export class GroundStationFetchMissionProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetMissionProfileRequest) {
    super(scope, id);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMissionProfile.contactPostPassDurationSeconds', props);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMissionProfile.contactPrePassDurationSeconds', props);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMissionProfile.dataflowEdges', props);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMissionProfile.minimumViableContactDurationSeconds', props);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMissionProfile.missionProfileArn', props);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMissionProfile.missionProfileId', props);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMissionProfile.name', props);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMissionProfile.region', props);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMissionProfile.tags', props);
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
          missionProfileId: this.input.missionProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMissionProfile.trackingConfigArn', props);
    return resource.getResponseField('trackingConfigArn') as unknown as string;
  }

}

export class GroundStationFetchSatellite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationGetSatelliteRequest) {
    super(scope, id);
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
          satelliteId: this.input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSatellite.groundStations', props);
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
          satelliteId: this.input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSatellite.noradSatelliteID', props);
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
          satelliteId: this.input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSatellite.satelliteArn', props);
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
          satelliteId: this.input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSatellite.satelliteId', props);
    return resource.getResponseField('satelliteId') as unknown as string;
  }

}

export class GroundStationListConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationListConfigsRequest) {
    super(scope, id);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigs.configList', props);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GroundStationListContacts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationListContactsRequest) {
    super(scope, id);
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
          endTime: this.input.endTime,
          groundStation: this.input.groundStation,
          maxResults: this.input.maxResults,
          missionProfileArn: this.input.missionProfileArn,
          nextToken: this.input.nextToken,
          satelliteArn: this.input.satelliteArn,
          startTime: this.input.startTime,
          statusList: this.input.statusList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContacts.contactList', props);
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
          endTime: this.input.endTime,
          groundStation: this.input.groundStation,
          maxResults: this.input.maxResults,
          missionProfileArn: this.input.missionProfileArn,
          nextToken: this.input.nextToken,
          satelliteArn: this.input.satelliteArn,
          startTime: this.input.startTime,
          statusList: this.input.statusList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContacts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GroundStationListDataflowEndpointGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationListDataflowEndpointGroupsRequest) {
    super(scope, id);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataflowEndpointGroups.dataflowEndpointGroupList', props);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataflowEndpointGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GroundStationListGroundStations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationListGroundStationsRequest) {
    super(scope, id);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          satelliteId: this.input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroundStations.groundStationList', props);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          satelliteId: this.input.satelliteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroundStations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GroundStationListMissionProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationListMissionProfilesRequest) {
    super(scope, id);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMissionProfiles.missionProfileList', props);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMissionProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GroundStationListSatellites extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationListSatellitesRequest) {
    super(scope, id);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSatellites.nextToken', props);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSatellites.satellites', props);
    return resource.getResponseField('satellites') as unknown as shapes.GroundStationSatelliteListItem[];
  }

}

export class GroundStationListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GroundStationReserveContact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationReserveContactRequest) {
    super(scope, id);
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
          endTime: this.input.endTime,
          groundStation: this.input.groundStation,
          missionProfileArn: this.input.missionProfileArn,
          satelliteArn: this.input.satelliteArn,
          startTime: this.input.startTime,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReserveContact.contactId', props);
    return resource.getResponseField('contactId') as unknown as string;
  }

}

export class GroundStationUpdateConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationUpdateConfigRequest) {
    super(scope, id);
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
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.input.configData.uplinkEchoConfig?.enabled,
            },
          },
          configId: this.input.configId,
          configType: this.input.configType,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfig.configArn', props);
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
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.input.configData.uplinkEchoConfig?.enabled,
            },
          },
          configId: this.input.configId,
          configType: this.input.configType,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfig.configId', props);
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
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkConfig?.spectrumConfig.polarization,
              },
            },
            antennaDownlinkDemodDecodeConfig: {
              decodeConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.decodeConfig.unvalidatedJSON,
              },
              demodulationConfig: {
                unvalidatedJSON: this.input.configData.antennaDownlinkDemodDecodeConfig?.demodulationConfig.unvalidatedJSON,
              },
              spectrumConfig: {
                bandwidth: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.bandwidth.value,
                },
                centerFrequency: {
                  units: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaDownlinkDemodDecodeConfig?.spectrumConfig.polarization,
              },
            },
            antennaUplinkConfig: {
              spectrumConfig: {
                centerFrequency: {
                  units: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.units,
                  value: this.input.configData.antennaUplinkConfig?.spectrumConfig.centerFrequency.value,
                },
                polarization: this.input.configData.antennaUplinkConfig?.spectrumConfig.polarization,
              },
              targetEirp: {
                units: this.input.configData.antennaUplinkConfig?.targetEirp.units,
                value: this.input.configData.antennaUplinkConfig?.targetEirp.value,
              },
              transmitDisabled: this.input.configData.antennaUplinkConfig?.transmitDisabled,
            },
            dataflowEndpointConfig: {
              dataflowEndpointName: this.input.configData.dataflowEndpointConfig?.dataflowEndpointName,
              dataflowEndpointRegion: this.input.configData.dataflowEndpointConfig?.dataflowEndpointRegion,
            },
            trackingConfig: {
              autotrack: this.input.configData.trackingConfig?.autotrack,
            },
            uplinkEchoConfig: {
              antennaUplinkConfigArn: this.input.configData.uplinkEchoConfig?.antennaUplinkConfigArn,
              enabled: this.input.configData.uplinkEchoConfig?.enabled,
            },
          },
          configId: this.input.configId,
          configType: this.input.configType,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfig.configType', props);
    return resource.getResponseField('configType') as unknown as string;
  }

}

export class GroundStationUpdateMissionProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GroundStationUpdateMissionProfileRequest) {
    super(scope, id);
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
          contactPostPassDurationSeconds: this.input.contactPostPassDurationSeconds,
          contactPrePassDurationSeconds: this.input.contactPrePassDurationSeconds,
          dataflowEdges: this.input.dataflowEdges,
          minimumViableContactDurationSeconds: this.input.minimumViableContactDurationSeconds,
          missionProfileId: this.input.missionProfileId,
          name: this.input.name,
          trackingConfigArn: this.input.trackingConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMissionProfile.missionProfileId', props);
    return resource.getResponseField('missionProfileId') as unknown as string;
  }

}

