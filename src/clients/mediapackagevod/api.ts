import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MediaPackageVodClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createAsset(input: shapes.MediaPackageVodCreateAssetRequest): MediaPackageVodResponsesCreateAsset {
    return new MediaPackageVodResponsesCreateAsset(this, this.__resources, input);
  }

  public createPackagingConfiguration(input: shapes.MediaPackageVodCreatePackagingConfigurationRequest): MediaPackageVodResponsesCreatePackagingConfiguration {
    return new MediaPackageVodResponsesCreatePackagingConfiguration(this, this.__resources, input);
  }

  public createPackagingGroup(input: shapes.MediaPackageVodCreatePackagingGroupRequest): MediaPackageVodResponsesCreatePackagingGroup {
    return new MediaPackageVodResponsesCreatePackagingGroup(this, this.__resources, input);
  }

  public deleteAsset(input: shapes.MediaPackageVodDeleteAssetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DeleteAsset'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAsset', props);
  }

  public deletePackagingConfiguration(input: shapes.MediaPackageVodDeletePackagingConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DeletePackagingConfiguration'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePackagingConfiguration', props);
  }

  public deletePackagingGroup(input: shapes.MediaPackageVodDeletePackagingGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DeletePackagingGroup'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePackagingGroup', props);
  }

  public describeAsset(input: shapes.MediaPackageVodDescribeAssetRequest): MediaPackageVodResponsesDescribeAsset {
    return new MediaPackageVodResponsesDescribeAsset(this, this.__resources, input);
  }

  public describePackagingConfiguration(input: shapes.MediaPackageVodDescribePackagingConfigurationRequest): MediaPackageVodResponsesDescribePackagingConfiguration {
    return new MediaPackageVodResponsesDescribePackagingConfiguration(this, this.__resources, input);
  }

  public describePackagingGroup(input: shapes.MediaPackageVodDescribePackagingGroupRequest): MediaPackageVodResponsesDescribePackagingGroup {
    return new MediaPackageVodResponsesDescribePackagingGroup(this, this.__resources, input);
  }

  public listAssets(input: shapes.MediaPackageVodListAssetsRequest): MediaPackageVodResponsesListAssets {
    return new MediaPackageVodResponsesListAssets(this, this.__resources, input);
  }

  public listPackagingConfigurations(input: shapes.MediaPackageVodListPackagingConfigurationsRequest): MediaPackageVodResponsesListPackagingConfigurations {
    return new MediaPackageVodResponsesListPackagingConfigurations(this, this.__resources, input);
  }

  public listPackagingGroups(input: shapes.MediaPackageVodListPackagingGroupsRequest): MediaPackageVodResponsesListPackagingGroups {
    return new MediaPackageVodResponsesListPackagingGroups(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.MediaPackageVodListTagsForResourceRequest): MediaPackageVodResponsesListTagsForResource {
    return new MediaPackageVodResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.MediaPackageVodTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.MediaPackageVodUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updatePackagingGroup(input: shapes.MediaPackageVodUpdatePackagingGroupRequest): MediaPackageVodResponsesUpdatePackagingGroup {
    return new MediaPackageVodResponsesUpdatePackagingGroup(this, this.__resources, input);
  }

}

export class MediaPackageVodResponsesCreateAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreateAssetRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreateAsset.Arn'),
        outputPath: 'Arn',
        parameters: {
          Id: this.__input.id,
          PackagingGroupId: this.__input.packagingGroupId,
          ResourceId: this.__input.resourceId,
          SourceArn: this.__input.sourceArn,
          SourceRoleArn: this.__input.sourceRoleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreateAsset.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          Id: this.__input.id,
          PackagingGroupId: this.__input.packagingGroupId,
          ResourceId: this.__input.resourceId,
          SourceArn: this.__input.sourceArn,
          SourceRoleArn: this.__input.sourceRoleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get egressEndpoints(): shapes.MediaPackageVodEgressEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreateAsset.EgressEndpoints'),
        outputPath: 'EgressEndpoints',
        parameters: {
          Id: this.__input.id,
          PackagingGroupId: this.__input.packagingGroupId,
          ResourceId: this.__input.resourceId,
          SourceArn: this.__input.sourceArn,
          SourceRoleArn: this.__input.sourceRoleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.EgressEndpoints', props);
    return resource.getResponseField('EgressEndpoints') as unknown as shapes.MediaPackageVodEgressEndpoint[];
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreateAsset.Id'),
        outputPath: 'Id',
        parameters: {
          Id: this.__input.id,
          PackagingGroupId: this.__input.packagingGroupId,
          ResourceId: this.__input.resourceId,
          SourceArn: this.__input.sourceArn,
          SourceRoleArn: this.__input.sourceRoleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get packagingGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreateAsset.PackagingGroupId'),
        outputPath: 'PackagingGroupId',
        parameters: {
          Id: this.__input.id,
          PackagingGroupId: this.__input.packagingGroupId,
          ResourceId: this.__input.resourceId,
          SourceArn: this.__input.sourceArn,
          SourceRoleArn: this.__input.sourceRoleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.PackagingGroupId', props);
    return resource.getResponseField('PackagingGroupId') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreateAsset.ResourceId'),
        outputPath: 'ResourceId',
        parameters: {
          Id: this.__input.id,
          PackagingGroupId: this.__input.packagingGroupId,
          ResourceId: this.__input.resourceId,
          SourceArn: this.__input.sourceArn,
          SourceRoleArn: this.__input.sourceRoleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.ResourceId', props);
    return resource.getResponseField('ResourceId') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreateAsset.SourceArn'),
        outputPath: 'SourceArn',
        parameters: {
          Id: this.__input.id,
          PackagingGroupId: this.__input.packagingGroupId,
          ResourceId: this.__input.resourceId,
          SourceArn: this.__input.sourceArn,
          SourceRoleArn: this.__input.sourceRoleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.SourceArn', props);
    return resource.getResponseField('SourceArn') as unknown as string;
  }

  public get sourceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreateAsset.SourceRoleArn'),
        outputPath: 'SourceRoleArn',
        parameters: {
          Id: this.__input.id,
          PackagingGroupId: this.__input.packagingGroupId,
          ResourceId: this.__input.resourceId,
          SourceArn: this.__input.sourceArn,
          SourceRoleArn: this.__input.sourceRoleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.SourceRoleArn', props);
    return resource.getResponseField('SourceRoleArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreateAsset.Tags'),
        outputPath: 'Tags',
        parameters: {
          Id: this.__input.id,
          PackagingGroupId: this.__input.packagingGroupId,
          ResourceId: this.__input.resourceId,
          SourceArn: this.__input.sourceArn,
          SourceRoleArn: this.__input.sourceRoleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodResponsesCreatePackagingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.Arn'),
        outputPath: 'Arn',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get cmafPackage(): MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage {
    return new MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage(this.__scope, this.__resources, this.__input);
  }

  public get dashPackage(): MediaPackageVodResponsesCreatePackagingConfigurationDashPackage {
    return new MediaPackageVodResponsesCreatePackagingConfigurationDashPackage(this.__scope, this.__resources, this.__input);
  }

  public get hlsPackage(): MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage {
    return new MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage(this.__scope, this.__resources, this.__input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.Id'),
        outputPath: 'Id',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get mssPackage(): MediaPackageVodResponsesCreatePackagingConfigurationMssPackage {
    return new MediaPackageVodResponsesCreatePackagingConfigurationMssPackage(this.__scope, this.__resources, this.__input);
  }

  public get packagingGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.PackagingGroupId'),
        outputPath: 'PackagingGroupId',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.PackagingGroupId', props);
    return resource.getResponseField('PackagingGroupId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.Tags'),
        outputPath: 'Tags',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get encryption(): MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption {
    return new MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption(this.__scope, this.__resources, this.__input);
  }

  public get hlsManifests(): shapes.MediaPackageVodHlsManifest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.CmafPackage.HlsManifests'),
        outputPath: 'CmafPackage.HlsManifests',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.CmafPackage.HlsManifests', props);
    return resource.getResponseField('CmafPackage.HlsManifests') as unknown as shapes.MediaPackageVodHlsManifest[];
  }

  public get segmentDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.CmafPackage.SegmentDurationSeconds'),
        outputPath: 'CmafPackage.SegmentDurationSeconds',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.CmafPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('CmafPackage.SegmentDurationSeconds') as unknown as number;
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get spekeKeyProvider(): MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider(this.__scope, this.__resources, this.__input);
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.RoleArn'),
        outputPath: 'CmafPackage.Encryption.SpekeKeyProvider.RoleArn',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.RoleArn', props);
    return resource.getResponseField('CmafPackage.Encryption.SpekeKeyProvider.RoleArn') as unknown as string;
  }

  public get systemIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.SystemIds'),
        outputPath: 'CmafPackage.Encryption.SpekeKeyProvider.SystemIds',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.SystemIds', props);
    return resource.getResponseField('CmafPackage.Encryption.SpekeKeyProvider.SystemIds') as unknown as string[];
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.Url'),
        outputPath: 'CmafPackage.Encryption.SpekeKeyProvider.Url',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('CmafPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationDashPackage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get dashManifests(): shapes.MediaPackageVodDashManifest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.DashPackage.DashManifests'),
        outputPath: 'DashPackage.DashManifests',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.DashPackage.DashManifests', props);
    return resource.getResponseField('DashPackage.DashManifests') as unknown as shapes.MediaPackageVodDashManifest[];
  }

  public get encryption(): MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption {
    return new MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption(this.__scope, this.__resources, this.__input);
  }

  public get periodTriggers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.DashPackage.PeriodTriggers'),
        outputPath: 'DashPackage.PeriodTriggers',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.DashPackage.PeriodTriggers', props);
    return resource.getResponseField('DashPackage.PeriodTriggers') as unknown as string[];
  }

  public get segmentDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.DashPackage.SegmentDurationSeconds'),
        outputPath: 'DashPackage.SegmentDurationSeconds',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.DashPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('DashPackage.SegmentDurationSeconds') as unknown as number;
  }

  public get segmentTemplateFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.DashPackage.SegmentTemplateFormat'),
        outputPath: 'DashPackage.SegmentTemplateFormat',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.DashPackage.SegmentTemplateFormat', props);
    return resource.getResponseField('DashPackage.SegmentTemplateFormat') as unknown as string;
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get spekeKeyProvider(): MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider(this.__scope, this.__resources, this.__input);
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.RoleArn'),
        outputPath: 'DashPackage.Encryption.SpekeKeyProvider.RoleArn',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.RoleArn', props);
    return resource.getResponseField('DashPackage.Encryption.SpekeKeyProvider.RoleArn') as unknown as string;
  }

  public get systemIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.SystemIds'),
        outputPath: 'DashPackage.Encryption.SpekeKeyProvider.SystemIds',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.SystemIds', props);
    return resource.getResponseField('DashPackage.Encryption.SpekeKeyProvider.SystemIds') as unknown as string[];
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.Url'),
        outputPath: 'DashPackage.Encryption.SpekeKeyProvider.Url',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('DashPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get encryption(): MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption {
    return new MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption(this.__scope, this.__resources, this.__input);
  }

  public get hlsManifests(): shapes.MediaPackageVodHlsManifest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.HlsPackage.HlsManifests'),
        outputPath: 'HlsPackage.HlsManifests',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.HlsPackage.HlsManifests', props);
    return resource.getResponseField('HlsPackage.HlsManifests') as unknown as shapes.MediaPackageVodHlsManifest[];
  }

  public get segmentDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.HlsPackage.SegmentDurationSeconds'),
        outputPath: 'HlsPackage.SegmentDurationSeconds',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.HlsPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('HlsPackage.SegmentDurationSeconds') as unknown as number;
  }

  public get useAudioRenditionGroup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.HlsPackage.UseAudioRenditionGroup'),
        outputPath: 'HlsPackage.UseAudioRenditionGroup',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.HlsPackage.UseAudioRenditionGroup', props);
    return resource.getResponseField('HlsPackage.UseAudioRenditionGroup') as unknown as boolean;
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get constantInitializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.HlsPackage.Encryption.ConstantInitializationVector'),
        outputPath: 'HlsPackage.Encryption.ConstantInitializationVector',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.HlsPackage.Encryption.ConstantInitializationVector', props);
    return resource.getResponseField('HlsPackage.Encryption.ConstantInitializationVector') as unknown as string;
  }

  public get encryptionMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.HlsPackage.Encryption.EncryptionMethod'),
        outputPath: 'HlsPackage.Encryption.EncryptionMethod',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.HlsPackage.Encryption.EncryptionMethod', props);
    return resource.getResponseField('HlsPackage.Encryption.EncryptionMethod') as unknown as string;
  }

  public get spekeKeyProvider(): MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider(this.__scope, this.__resources, this.__input);
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.RoleArn'),
        outputPath: 'HlsPackage.Encryption.SpekeKeyProvider.RoleArn',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.RoleArn', props);
    return resource.getResponseField('HlsPackage.Encryption.SpekeKeyProvider.RoleArn') as unknown as string;
  }

  public get systemIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.SystemIds'),
        outputPath: 'HlsPackage.Encryption.SpekeKeyProvider.SystemIds',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.SystemIds', props);
    return resource.getResponseField('HlsPackage.Encryption.SpekeKeyProvider.SystemIds') as unknown as string[];
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.Url'),
        outputPath: 'HlsPackage.Encryption.SpekeKeyProvider.Url',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('HlsPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationMssPackage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get encryption(): MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption {
    return new MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption(this.__scope, this.__resources, this.__input);
  }

  public get mssManifests(): shapes.MediaPackageVodMssManifest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.MssPackage.MssManifests'),
        outputPath: 'MssPackage.MssManifests',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.MssPackage.MssManifests', props);
    return resource.getResponseField('MssPackage.MssManifests') as unknown as shapes.MediaPackageVodMssManifest[];
  }

  public get segmentDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.MssPackage.SegmentDurationSeconds'),
        outputPath: 'MssPackage.SegmentDurationSeconds',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.MssPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('MssPackage.SegmentDurationSeconds') as unknown as number;
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get spekeKeyProvider(): MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider(this.__scope, this.__resources, this.__input);
  }

}

export class MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.RoleArn'),
        outputPath: 'MssPackage.Encryption.SpekeKeyProvider.RoleArn',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.RoleArn', props);
    return resource.getResponseField('MssPackage.Encryption.SpekeKeyProvider.RoleArn') as unknown as string;
  }

  public get systemIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.SystemIds'),
        outputPath: 'MssPackage.Encryption.SpekeKeyProvider.SystemIds',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.SystemIds', props);
    return resource.getResponseField('MssPackage.Encryption.SpekeKeyProvider.SystemIds') as unknown as string[];
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.Url'),
        outputPath: 'MssPackage.Encryption.SpekeKeyProvider.Url',
        parameters: {
          CmafPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.__input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.__input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.__input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.__input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.__input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.__input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.__input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.__input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.__input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.__input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.__input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.__input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.__input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.__input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.__input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.__input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.__input.packagingGroupId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('MssPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodResponsesCreatePackagingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingGroupRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingGroup.Arn'),
        outputPath: 'Arn',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingGroup.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get authorization(): MediaPackageVodResponsesCreatePackagingGroupAuthorization {
    return new MediaPackageVodResponsesCreatePackagingGroupAuthorization(this.__scope, this.__resources, this.__input);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingGroup.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingGroup.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingGroup.Id'),
        outputPath: 'Id',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingGroup.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingGroup.Tags'),
        outputPath: 'Tags',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodResponsesCreatePackagingGroupAuthorization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodCreatePackagingGroupRequest) {
  }

  public get cdnIdentifierSecret(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingGroup.Authorization.CdnIdentifierSecret'),
        outputPath: 'Authorization.CdnIdentifierSecret',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingGroup.Authorization.CdnIdentifierSecret', props);
    return resource.getResponseField('Authorization.CdnIdentifierSecret') as unknown as string;
  }

  public get secretsRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.CreatePackagingGroup.Authorization.SecretsRoleArn'),
        outputPath: 'Authorization.SecretsRoleArn',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePackagingGroup.Authorization.SecretsRoleArn', props);
    return resource.getResponseField('Authorization.SecretsRoleArn') as unknown as string;
  }

}

export class MediaPackageVodResponsesDescribeAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribeAssetRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribeAsset.Arn'),
        outputPath: 'Arn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribeAsset.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get egressEndpoints(): shapes.MediaPackageVodEgressEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribeAsset.EgressEndpoints'),
        outputPath: 'EgressEndpoints',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.EgressEndpoints', props);
    return resource.getResponseField('EgressEndpoints') as unknown as shapes.MediaPackageVodEgressEndpoint[];
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribeAsset.Id'),
        outputPath: 'Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get packagingGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribeAsset.PackagingGroupId'),
        outputPath: 'PackagingGroupId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.PackagingGroupId', props);
    return resource.getResponseField('PackagingGroupId') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribeAsset.ResourceId'),
        outputPath: 'ResourceId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.ResourceId', props);
    return resource.getResponseField('ResourceId') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribeAsset.SourceArn'),
        outputPath: 'SourceArn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.SourceArn', props);
    return resource.getResponseField('SourceArn') as unknown as string;
  }

  public get sourceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribeAsset.SourceRoleArn'),
        outputPath: 'SourceRoleArn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.SourceRoleArn', props);
    return resource.getResponseField('SourceRoleArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribeAsset.Tags'),
        outputPath: 'Tags',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodResponsesDescribePackagingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.Arn'),
        outputPath: 'Arn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get cmafPackage(): MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage {
    return new MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage(this.__scope, this.__resources, this.__input);
  }

  public get dashPackage(): MediaPackageVodResponsesDescribePackagingConfigurationDashPackage {
    return new MediaPackageVodResponsesDescribePackagingConfigurationDashPackage(this.__scope, this.__resources, this.__input);
  }

  public get hlsPackage(): MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage {
    return new MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage(this.__scope, this.__resources, this.__input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.Id'),
        outputPath: 'Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get mssPackage(): MediaPackageVodResponsesDescribePackagingConfigurationMssPackage {
    return new MediaPackageVodResponsesDescribePackagingConfigurationMssPackage(this.__scope, this.__resources, this.__input);
  }

  public get packagingGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.PackagingGroupId'),
        outputPath: 'PackagingGroupId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.PackagingGroupId', props);
    return resource.getResponseField('PackagingGroupId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.Tags'),
        outputPath: 'Tags',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get encryption(): MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption {
    return new MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption(this.__scope, this.__resources, this.__input);
  }

  public get hlsManifests(): shapes.MediaPackageVodHlsManifest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.CmafPackage.HlsManifests'),
        outputPath: 'CmafPackage.HlsManifests',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.CmafPackage.HlsManifests', props);
    return resource.getResponseField('CmafPackage.HlsManifests') as unknown as shapes.MediaPackageVodHlsManifest[];
  }

  public get segmentDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.CmafPackage.SegmentDurationSeconds'),
        outputPath: 'CmafPackage.SegmentDurationSeconds',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.CmafPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('CmafPackage.SegmentDurationSeconds') as unknown as number;
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get spekeKeyProvider(): MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider(this.__scope, this.__resources, this.__input);
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.RoleArn'),
        outputPath: 'CmafPackage.Encryption.SpekeKeyProvider.RoleArn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.RoleArn', props);
    return resource.getResponseField('CmafPackage.Encryption.SpekeKeyProvider.RoleArn') as unknown as string;
  }

  public get systemIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.SystemIds'),
        outputPath: 'CmafPackage.Encryption.SpekeKeyProvider.SystemIds',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.SystemIds', props);
    return resource.getResponseField('CmafPackage.Encryption.SpekeKeyProvider.SystemIds') as unknown as string[];
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.Url'),
        outputPath: 'CmafPackage.Encryption.SpekeKeyProvider.Url',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('CmafPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationDashPackage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get dashManifests(): shapes.MediaPackageVodDashManifest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.DashPackage.DashManifests'),
        outputPath: 'DashPackage.DashManifests',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.DashPackage.DashManifests', props);
    return resource.getResponseField('DashPackage.DashManifests') as unknown as shapes.MediaPackageVodDashManifest[];
  }

  public get encryption(): MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption {
    return new MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption(this.__scope, this.__resources, this.__input);
  }

  public get periodTriggers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.DashPackage.PeriodTriggers'),
        outputPath: 'DashPackage.PeriodTriggers',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.DashPackage.PeriodTriggers', props);
    return resource.getResponseField('DashPackage.PeriodTriggers') as unknown as string[];
  }

  public get segmentDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.DashPackage.SegmentDurationSeconds'),
        outputPath: 'DashPackage.SegmentDurationSeconds',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.DashPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('DashPackage.SegmentDurationSeconds') as unknown as number;
  }

  public get segmentTemplateFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.DashPackage.SegmentTemplateFormat'),
        outputPath: 'DashPackage.SegmentTemplateFormat',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.DashPackage.SegmentTemplateFormat', props);
    return resource.getResponseField('DashPackage.SegmentTemplateFormat') as unknown as string;
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get spekeKeyProvider(): MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider(this.__scope, this.__resources, this.__input);
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.RoleArn'),
        outputPath: 'DashPackage.Encryption.SpekeKeyProvider.RoleArn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.RoleArn', props);
    return resource.getResponseField('DashPackage.Encryption.SpekeKeyProvider.RoleArn') as unknown as string;
  }

  public get systemIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.SystemIds'),
        outputPath: 'DashPackage.Encryption.SpekeKeyProvider.SystemIds',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.SystemIds', props);
    return resource.getResponseField('DashPackage.Encryption.SpekeKeyProvider.SystemIds') as unknown as string[];
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.Url'),
        outputPath: 'DashPackage.Encryption.SpekeKeyProvider.Url',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('DashPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get encryption(): MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption {
    return new MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption(this.__scope, this.__resources, this.__input);
  }

  public get hlsManifests(): shapes.MediaPackageVodHlsManifest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.HlsPackage.HlsManifests'),
        outputPath: 'HlsPackage.HlsManifests',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.HlsPackage.HlsManifests', props);
    return resource.getResponseField('HlsPackage.HlsManifests') as unknown as shapes.MediaPackageVodHlsManifest[];
  }

  public get segmentDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.HlsPackage.SegmentDurationSeconds'),
        outputPath: 'HlsPackage.SegmentDurationSeconds',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.HlsPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('HlsPackage.SegmentDurationSeconds') as unknown as number;
  }

  public get useAudioRenditionGroup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.HlsPackage.UseAudioRenditionGroup'),
        outputPath: 'HlsPackage.UseAudioRenditionGroup',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.HlsPackage.UseAudioRenditionGroup', props);
    return resource.getResponseField('HlsPackage.UseAudioRenditionGroup') as unknown as boolean;
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get constantInitializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.HlsPackage.Encryption.ConstantInitializationVector'),
        outputPath: 'HlsPackage.Encryption.ConstantInitializationVector',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.HlsPackage.Encryption.ConstantInitializationVector', props);
    return resource.getResponseField('HlsPackage.Encryption.ConstantInitializationVector') as unknown as string;
  }

  public get encryptionMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.HlsPackage.Encryption.EncryptionMethod'),
        outputPath: 'HlsPackage.Encryption.EncryptionMethod',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.HlsPackage.Encryption.EncryptionMethod', props);
    return resource.getResponseField('HlsPackage.Encryption.EncryptionMethod') as unknown as string;
  }

  public get spekeKeyProvider(): MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider(this.__scope, this.__resources, this.__input);
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.RoleArn'),
        outputPath: 'HlsPackage.Encryption.SpekeKeyProvider.RoleArn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.RoleArn', props);
    return resource.getResponseField('HlsPackage.Encryption.SpekeKeyProvider.RoleArn') as unknown as string;
  }

  public get systemIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.SystemIds'),
        outputPath: 'HlsPackage.Encryption.SpekeKeyProvider.SystemIds',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.SystemIds', props);
    return resource.getResponseField('HlsPackage.Encryption.SpekeKeyProvider.SystemIds') as unknown as string[];
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.Url'),
        outputPath: 'HlsPackage.Encryption.SpekeKeyProvider.Url',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('HlsPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationMssPackage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get encryption(): MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption {
    return new MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption(this.__scope, this.__resources, this.__input);
  }

  public get mssManifests(): shapes.MediaPackageVodMssManifest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.MssPackage.MssManifests'),
        outputPath: 'MssPackage.MssManifests',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.MssPackage.MssManifests', props);
    return resource.getResponseField('MssPackage.MssManifests') as unknown as shapes.MediaPackageVodMssManifest[];
  }

  public get segmentDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.MssPackage.SegmentDurationSeconds'),
        outputPath: 'MssPackage.SegmentDurationSeconds',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.MssPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('MssPackage.SegmentDurationSeconds') as unknown as number;
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get spekeKeyProvider(): MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider(this.__scope, this.__resources, this.__input);
  }

}

export class MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.RoleArn'),
        outputPath: 'MssPackage.Encryption.SpekeKeyProvider.RoleArn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.RoleArn', props);
    return resource.getResponseField('MssPackage.Encryption.SpekeKeyProvider.RoleArn') as unknown as string;
  }

  public get systemIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.SystemIds'),
        outputPath: 'MssPackage.Encryption.SpekeKeyProvider.SystemIds',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.SystemIds', props);
    return resource.getResponseField('MssPackage.Encryption.SpekeKeyProvider.SystemIds') as unknown as string[];
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingConfiguration',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.Url'),
        outputPath: 'MssPackage.Encryption.SpekeKeyProvider.Url',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('MssPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodResponsesDescribePackagingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingGroupRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingGroup.Arn'),
        outputPath: 'Arn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingGroup.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get authorization(): MediaPackageVodResponsesDescribePackagingGroupAuthorization {
    return new MediaPackageVodResponsesDescribePackagingGroupAuthorization(this.__scope, this.__resources, this.__input);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingGroup.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingGroup.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingGroup.Id'),
        outputPath: 'Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingGroup.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingGroup.Tags'),
        outputPath: 'Tags',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodResponsesDescribePackagingGroupAuthorization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodDescribePackagingGroupRequest) {
  }

  public get cdnIdentifierSecret(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingGroup.Authorization.CdnIdentifierSecret'),
        outputPath: 'Authorization.CdnIdentifierSecret',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingGroup.Authorization.CdnIdentifierSecret', props);
    return resource.getResponseField('Authorization.CdnIdentifierSecret') as unknown as string;
  }

  public get secretsRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.DescribePackagingGroup.Authorization.SecretsRoleArn'),
        outputPath: 'Authorization.SecretsRoleArn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackagingGroup.Authorization.SecretsRoleArn', props);
    return resource.getResponseField('Authorization.SecretsRoleArn') as unknown as string;
  }

}

export class MediaPackageVodResponsesListAssets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodListAssetsRequest) {
  }

  public get assets(): shapes.MediaPackageVodAssetShallow[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssets',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.ListAssets.Assets'),
        outputPath: 'Assets',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          PackagingGroupId: this.__input.packagingGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssets.Assets', props);
    return resource.getResponseField('Assets') as unknown as shapes.MediaPackageVodAssetShallow[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssets',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.ListAssets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          PackagingGroupId: this.__input.packagingGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaPackageVodResponsesListPackagingConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodListPackagingConfigurationsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackagingConfigurations',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.ListPackagingConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          PackagingGroupId: this.__input.packagingGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackagingConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get packagingConfigurations(): shapes.MediaPackageVodPackagingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackagingConfigurations',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.ListPackagingConfigurations.PackagingConfigurations'),
        outputPath: 'PackagingConfigurations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          PackagingGroupId: this.__input.packagingGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackagingConfigurations.PackagingConfigurations', props);
    return resource.getResponseField('PackagingConfigurations') as unknown as shapes.MediaPackageVodPackagingConfiguration[];
  }

}

export class MediaPackageVodResponsesListPackagingGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodListPackagingGroupsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackagingGroups',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.ListPackagingGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackagingGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get packagingGroups(): shapes.MediaPackageVodPackagingGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackagingGroups',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.ListPackagingGroups.PackagingGroups'),
        outputPath: 'PackagingGroups',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackagingGroups.PackagingGroups', props);
    return resource.getResponseField('PackagingGroups') as unknown as shapes.MediaPackageVodPackagingGroup[];
  }

}

export class MediaPackageVodResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodResponsesUpdatePackagingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodUpdatePackagingGroupRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.UpdatePackagingGroup.Arn'),
        outputPath: 'Arn',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePackagingGroup.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get authorization(): MediaPackageVodResponsesUpdatePackagingGroupAuthorization {
    return new MediaPackageVodResponsesUpdatePackagingGroupAuthorization(this.__scope, this.__resources, this.__input);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.UpdatePackagingGroup.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePackagingGroup.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.UpdatePackagingGroup.Id'),
        outputPath: 'Id',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePackagingGroup.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.UpdatePackagingGroup.Tags'),
        outputPath: 'Tags',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePackagingGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodResponsesUpdatePackagingGroupAuthorization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaPackageVodUpdatePackagingGroupRequest) {
  }

  public get cdnIdentifierSecret(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.UpdatePackagingGroup.Authorization.CdnIdentifierSecret'),
        outputPath: 'Authorization.CdnIdentifierSecret',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePackagingGroup.Authorization.CdnIdentifierSecret', props);
    return resource.getResponseField('Authorization.CdnIdentifierSecret') as unknown as string;
  }

  public get secretsRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePackagingGroup',
        service: 'MediaPackageVod',
        physicalResourceId: cr.PhysicalResourceId.of('MediaPackageVod.UpdatePackagingGroup.Authorization.SecretsRoleArn'),
        outputPath: 'Authorization.SecretsRoleArn',
        parameters: {
          Authorization: {
            CdnIdentifierSecret: this.__input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.__input.authorization?.secretsRoleArn,
          },
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePackagingGroup.Authorization.SecretsRoleArn', props);
    return resource.getResponseField('Authorization.SecretsRoleArn') as unknown as string;
  }

}

