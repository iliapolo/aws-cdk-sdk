import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MediaPackageVodClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createAsset(input: shapes.MediaPackageVodCreateAssetRequest): MediaPackageVodCreateAsset {
    return new MediaPackageVodCreateAsset(this, 'CreateAsset', this.__resources, input);
  }

  public createPackagingConfiguration(input: shapes.MediaPackageVodCreatePackagingConfigurationRequest): MediaPackageVodCreatePackagingConfiguration {
    return new MediaPackageVodCreatePackagingConfiguration(this, 'CreatePackagingConfiguration', this.__resources, input);
  }

  public createPackagingGroup(input: shapes.MediaPackageVodCreatePackagingGroupRequest): MediaPackageVodCreatePackagingGroup {
    return new MediaPackageVodCreatePackagingGroup(this, 'CreatePackagingGroup', this.__resources, input);
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

  public describeAsset(input: shapes.MediaPackageVodDescribeAssetRequest): MediaPackageVodDescribeAsset {
    return new MediaPackageVodDescribeAsset(this, 'DescribeAsset', this.__resources, input);
  }

  public describePackagingConfiguration(input: shapes.MediaPackageVodDescribePackagingConfigurationRequest): MediaPackageVodDescribePackagingConfiguration {
    return new MediaPackageVodDescribePackagingConfiguration(this, 'DescribePackagingConfiguration', this.__resources, input);
  }

  public describePackagingGroup(input: shapes.MediaPackageVodDescribePackagingGroupRequest): MediaPackageVodDescribePackagingGroup {
    return new MediaPackageVodDescribePackagingGroup(this, 'DescribePackagingGroup', this.__resources, input);
  }

  public listAssets(input: shapes.MediaPackageVodListAssetsRequest): MediaPackageVodListAssets {
    return new MediaPackageVodListAssets(this, 'ListAssets', this.__resources, input);
  }

  public listPackagingConfigurations(input: shapes.MediaPackageVodListPackagingConfigurationsRequest): MediaPackageVodListPackagingConfigurations {
    return new MediaPackageVodListPackagingConfigurations(this, 'ListPackagingConfigurations', this.__resources, input);
  }

  public listPackagingGroups(input: shapes.MediaPackageVodListPackagingGroupsRequest): MediaPackageVodListPackagingGroups {
    return new MediaPackageVodListPackagingGroups(this, 'ListPackagingGroups', this.__resources, input);
  }

  public listTagsForResource(input: shapes.MediaPackageVodListTagsForResourceRequest): MediaPackageVodListTagsForResource {
    return new MediaPackageVodListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

  public updatePackagingGroup(input: shapes.MediaPackageVodUpdatePackagingGroupRequest): MediaPackageVodUpdatePackagingGroup {
    return new MediaPackageVodUpdatePackagingGroup(this, 'UpdatePackagingGroup', this.__resources, input);
  }

}

export class MediaPackageVodCreateAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreateAssetRequest) {
    super(scope, id);
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
          Id: this.input.id,
          PackagingGroupId: this.input.packagingGroupId,
          ResourceId: this.input.resourceId,
          SourceArn: this.input.sourceArn,
          SourceRoleArn: this.input.sourceRoleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.Arn', props);
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
          Id: this.input.id,
          PackagingGroupId: this.input.packagingGroupId,
          ResourceId: this.input.resourceId,
          SourceArn: this.input.sourceArn,
          SourceRoleArn: this.input.sourceRoleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.CreatedAt', props);
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
          Id: this.input.id,
          PackagingGroupId: this.input.packagingGroupId,
          ResourceId: this.input.resourceId,
          SourceArn: this.input.sourceArn,
          SourceRoleArn: this.input.sourceRoleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.EgressEndpoints', props);
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
          Id: this.input.id,
          PackagingGroupId: this.input.packagingGroupId,
          ResourceId: this.input.resourceId,
          SourceArn: this.input.sourceArn,
          SourceRoleArn: this.input.sourceRoleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.Id', props);
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
          Id: this.input.id,
          PackagingGroupId: this.input.packagingGroupId,
          ResourceId: this.input.resourceId,
          SourceArn: this.input.sourceArn,
          SourceRoleArn: this.input.sourceRoleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.PackagingGroupId', props);
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
          Id: this.input.id,
          PackagingGroupId: this.input.packagingGroupId,
          ResourceId: this.input.resourceId,
          SourceArn: this.input.sourceArn,
          SourceRoleArn: this.input.sourceRoleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.ResourceId', props);
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
          Id: this.input.id,
          PackagingGroupId: this.input.packagingGroupId,
          ResourceId: this.input.resourceId,
          SourceArn: this.input.sourceArn,
          SourceRoleArn: this.input.sourceRoleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.SourceArn', props);
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
          Id: this.input.id,
          PackagingGroupId: this.input.packagingGroupId,
          ResourceId: this.input.resourceId,
          SourceArn: this.input.sourceArn,
          SourceRoleArn: this.input.sourceRoleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.SourceRoleArn', props);
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
          Id: this.input.id,
          PackagingGroupId: this.input.packagingGroupId,
          ResourceId: this.input.resourceId,
          SourceArn: this.input.sourceArn,
          SourceRoleArn: this.input.sourceRoleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodCreatePackagingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get cmafPackage(): MediaPackageVodCreatePackagingConfigurationCmafPackage {
    return new MediaPackageVodCreatePackagingConfigurationCmafPackage(this, 'CmafPackage', this.__resources, this.input);
  }

  public get dashPackage(): MediaPackageVodCreatePackagingConfigurationDashPackage {
    return new MediaPackageVodCreatePackagingConfigurationDashPackage(this, 'DashPackage', this.__resources, this.input);
  }

  public get hlsPackage(): MediaPackageVodCreatePackagingConfigurationHlsPackage {
    return new MediaPackageVodCreatePackagingConfigurationHlsPackage(this, 'HlsPackage', this.__resources, this.input);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get mssPackage(): MediaPackageVodCreatePackagingConfigurationMssPackage {
    return new MediaPackageVodCreatePackagingConfigurationMssPackage(this, 'MssPackage', this.__resources, this.input);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.PackagingGroupId', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodCreatePackagingConfigurationCmafPackage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get encryption(): MediaPackageVodCreatePackagingConfigurationCmafPackageEncryption {
    return new MediaPackageVodCreatePackagingConfigurationCmafPackageEncryption(this, 'Encryption', this.__resources, this.input);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.CmafPackage.HlsManifests', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.CmafPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('CmafPackage.SegmentDurationSeconds') as unknown as number;
  }

}

export class MediaPackageVodCreatePackagingConfigurationCmafPackageEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get spekeKeyProvider(): MediaPackageVodCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider(this, 'SpekeKeyProvider', this.__resources, this.input);
  }

}

export class MediaPackageVodCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.RoleArn', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.SystemIds', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('CmafPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodCreatePackagingConfigurationDashPackage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.DashPackage.DashManifests', props);
    return resource.getResponseField('DashPackage.DashManifests') as unknown as shapes.MediaPackageVodDashManifest[];
  }

  public get encryption(): MediaPackageVodCreatePackagingConfigurationDashPackageEncryption {
    return new MediaPackageVodCreatePackagingConfigurationDashPackageEncryption(this, 'Encryption', this.__resources, this.input);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.DashPackage.PeriodTriggers', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.DashPackage.SegmentDurationSeconds', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.DashPackage.SegmentTemplateFormat', props);
    return resource.getResponseField('DashPackage.SegmentTemplateFormat') as unknown as string;
  }

}

export class MediaPackageVodCreatePackagingConfigurationDashPackageEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get spekeKeyProvider(): MediaPackageVodCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider(this, 'SpekeKeyProvider', this.__resources, this.input);
  }

}

export class MediaPackageVodCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.RoleArn', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.SystemIds', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('DashPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodCreatePackagingConfigurationHlsPackage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get encryption(): MediaPackageVodCreatePackagingConfigurationHlsPackageEncryption {
    return new MediaPackageVodCreatePackagingConfigurationHlsPackageEncryption(this, 'Encryption', this.__resources, this.input);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.HlsPackage.HlsManifests', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.HlsPackage.SegmentDurationSeconds', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.HlsPackage.UseAudioRenditionGroup', props);
    return resource.getResponseField('HlsPackage.UseAudioRenditionGroup') as unknown as boolean;
  }

}

export class MediaPackageVodCreatePackagingConfigurationHlsPackageEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.HlsPackage.Encryption.ConstantInitializationVector', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.HlsPackage.Encryption.EncryptionMethod', props);
    return resource.getResponseField('HlsPackage.Encryption.EncryptionMethod') as unknown as string;
  }

  public get spekeKeyProvider(): MediaPackageVodCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider(this, 'SpekeKeyProvider', this.__resources, this.input);
  }

}

export class MediaPackageVodCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.RoleArn', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.SystemIds', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('HlsPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodCreatePackagingConfigurationMssPackage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get encryption(): MediaPackageVodCreatePackagingConfigurationMssPackageEncryption {
    return new MediaPackageVodCreatePackagingConfigurationMssPackageEncryption(this, 'Encryption', this.__resources, this.input);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.MssPackage.MssManifests', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.MssPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('MssPackage.SegmentDurationSeconds') as unknown as number;
  }

}

export class MediaPackageVodCreatePackagingConfigurationMssPackageEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get spekeKeyProvider(): MediaPackageVodCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider(this, 'SpekeKeyProvider', this.__resources, this.input);
  }

}

export class MediaPackageVodCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingConfigurationRequest) {
    super(scope, id);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.RoleArn', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.SystemIds', props);
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
                RoleArn: this.input.cmafPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.cmafPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.cmafPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.cmafPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.cmafPackage?.segmentDurationSeconds,
          },
          DashPackage: {
            DashManifests: this.input.dashPackage?.dashManifests,
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.dashPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.dashPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.dashPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            PeriodTriggers: this.input.dashPackage?.periodTriggers,
            SegmentDurationSeconds: this.input.dashPackage?.segmentDurationSeconds,
            SegmentTemplateFormat: this.input.dashPackage?.segmentTemplateFormat,
          },
          HlsPackage: {
            Encryption: {
              ConstantInitializationVector: this.input.hlsPackage?.encryption?.constantInitializationVector,
              EncryptionMethod: this.input.hlsPackage?.encryption?.encryptionMethod,
              SpekeKeyProvider: {
                RoleArn: this.input.hlsPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.hlsPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.hlsPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            HlsManifests: this.input.hlsPackage?.hlsManifests,
            SegmentDurationSeconds: this.input.hlsPackage?.segmentDurationSeconds,
            UseAudioRenditionGroup: this.input.hlsPackage?.useAudioRenditionGroup,
          },
          Id: this.input.id,
          MssPackage: {
            Encryption: {
              SpekeKeyProvider: {
                RoleArn: this.input.mssPackage?.encryption?.spekeKeyProvider.roleArn,
                SystemIds: this.input.mssPackage?.encryption?.spekeKeyProvider.systemIds,
                Url: this.input.mssPackage?.encryption?.spekeKeyProvider.url,
              },
            },
            MssManifests: this.input.mssPackage?.mssManifests,
            SegmentDurationSeconds: this.input.mssPackage?.segmentDurationSeconds,
          },
          PackagingGroupId: this.input.packagingGroupId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('MssPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodCreatePackagingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingGroupRequest) {
    super(scope, id);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingGroup.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get authorization(): MediaPackageVodCreatePackagingGroupAuthorization {
    return new MediaPackageVodCreatePackagingGroupAuthorization(this, 'Authorization', this.__resources, this.input);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingGroup.DomainName', props);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingGroup.Id', props);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodCreatePackagingGroupAuthorization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodCreatePackagingGroupRequest) {
    super(scope, id);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingGroup.Authorization.CdnIdentifierSecret', props);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePackagingGroup.Authorization.SecretsRoleArn', props);
    return resource.getResponseField('Authorization.SecretsRoleArn') as unknown as string;
  }

}

export class MediaPackageVodDescribeAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribeAssetRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.Arn', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.CreatedAt', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.EgressEndpoints', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.Id', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.PackagingGroupId', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.ResourceId', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.SourceArn', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.SourceRoleArn', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodDescribePackagingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get cmafPackage(): MediaPackageVodDescribePackagingConfigurationCmafPackage {
    return new MediaPackageVodDescribePackagingConfigurationCmafPackage(this, 'CmafPackage', this.__resources, this.input);
  }

  public get dashPackage(): MediaPackageVodDescribePackagingConfigurationDashPackage {
    return new MediaPackageVodDescribePackagingConfigurationDashPackage(this, 'DashPackage', this.__resources, this.input);
  }

  public get hlsPackage(): MediaPackageVodDescribePackagingConfigurationHlsPackage {
    return new MediaPackageVodDescribePackagingConfigurationHlsPackage(this, 'HlsPackage', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get mssPackage(): MediaPackageVodDescribePackagingConfigurationMssPackage {
    return new MediaPackageVodDescribePackagingConfigurationMssPackage(this, 'MssPackage', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.PackagingGroupId', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodDescribePackagingConfigurationCmafPackage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get encryption(): MediaPackageVodDescribePackagingConfigurationCmafPackageEncryption {
    return new MediaPackageVodDescribePackagingConfigurationCmafPackageEncryption(this, 'Encryption', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.CmafPackage.HlsManifests', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.CmafPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('CmafPackage.SegmentDurationSeconds') as unknown as number;
  }

}

export class MediaPackageVodDescribePackagingConfigurationCmafPackageEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get spekeKeyProvider(): MediaPackageVodDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider(this, 'SpekeKeyProvider', this.__resources, this.input);
  }

}

export class MediaPackageVodDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.RoleArn', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.SystemIds', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.CmafPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('CmafPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodDescribePackagingConfigurationDashPackage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.DashPackage.DashManifests', props);
    return resource.getResponseField('DashPackage.DashManifests') as unknown as shapes.MediaPackageVodDashManifest[];
  }

  public get encryption(): MediaPackageVodDescribePackagingConfigurationDashPackageEncryption {
    return new MediaPackageVodDescribePackagingConfigurationDashPackageEncryption(this, 'Encryption', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.DashPackage.PeriodTriggers', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.DashPackage.SegmentDurationSeconds', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.DashPackage.SegmentTemplateFormat', props);
    return resource.getResponseField('DashPackage.SegmentTemplateFormat') as unknown as string;
  }

}

export class MediaPackageVodDescribePackagingConfigurationDashPackageEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get spekeKeyProvider(): MediaPackageVodDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider(this, 'SpekeKeyProvider', this.__resources, this.input);
  }

}

export class MediaPackageVodDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.RoleArn', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.SystemIds', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.DashPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('DashPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodDescribePackagingConfigurationHlsPackage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get encryption(): MediaPackageVodDescribePackagingConfigurationHlsPackageEncryption {
    return new MediaPackageVodDescribePackagingConfigurationHlsPackageEncryption(this, 'Encryption', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.HlsPackage.HlsManifests', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.HlsPackage.SegmentDurationSeconds', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.HlsPackage.UseAudioRenditionGroup', props);
    return resource.getResponseField('HlsPackage.UseAudioRenditionGroup') as unknown as boolean;
  }

}

export class MediaPackageVodDescribePackagingConfigurationHlsPackageEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.HlsPackage.Encryption.ConstantInitializationVector', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.HlsPackage.Encryption.EncryptionMethod', props);
    return resource.getResponseField('HlsPackage.Encryption.EncryptionMethod') as unknown as string;
  }

  public get spekeKeyProvider(): MediaPackageVodDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider(this, 'SpekeKeyProvider', this.__resources, this.input);
  }

}

export class MediaPackageVodDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.RoleArn', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.SystemIds', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.HlsPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('HlsPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodDescribePackagingConfigurationMssPackage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get encryption(): MediaPackageVodDescribePackagingConfigurationMssPackageEncryption {
    return new MediaPackageVodDescribePackagingConfigurationMssPackageEncryption(this, 'Encryption', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.MssPackage.MssManifests', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.MssPackage.SegmentDurationSeconds', props);
    return resource.getResponseField('MssPackage.SegmentDurationSeconds') as unknown as number;
  }

}

export class MediaPackageVodDescribePackagingConfigurationMssPackageEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
  }

  public get spekeKeyProvider(): MediaPackageVodDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {
    return new MediaPackageVodDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider(this, 'SpekeKeyProvider', this.__resources, this.input);
  }

}

export class MediaPackageVodDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingConfigurationRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.RoleArn', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.SystemIds', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingConfiguration.MssPackage.Encryption.SpekeKeyProvider.Url', props);
    return resource.getResponseField('MssPackage.Encryption.SpekeKeyProvider.Url') as unknown as string;
  }

}

export class MediaPackageVodDescribePackagingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingGroupRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingGroup.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get authorization(): MediaPackageVodDescribePackagingGroupAuthorization {
    return new MediaPackageVodDescribePackagingGroupAuthorization(this, 'Authorization', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingGroup.DomainName', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingGroup.Id', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodDescribePackagingGroupAuthorization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodDescribePackagingGroupRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingGroup.Authorization.CdnIdentifierSecret', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackagingGroup.Authorization.SecretsRoleArn', props);
    return resource.getResponseField('Authorization.SecretsRoleArn') as unknown as string;
  }

}

export class MediaPackageVodListAssets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodListAssetsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          PackagingGroupId: this.input.packagingGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssets.Assets', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          PackagingGroupId: this.input.packagingGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaPackageVodListPackagingConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodListPackagingConfigurationsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          PackagingGroupId: this.input.packagingGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackagingConfigurations.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          PackagingGroupId: this.input.packagingGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackagingConfigurations.PackagingConfigurations', props);
    return resource.getResponseField('PackagingConfigurations') as unknown as shapes.MediaPackageVodPackagingConfiguration[];
  }

}

export class MediaPackageVodListPackagingGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodListPackagingGroupsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackagingGroups.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackagingGroups.PackagingGroups', props);
    return resource.getResponseField('PackagingGroups') as unknown as shapes.MediaPackageVodPackagingGroup[];
  }

}

export class MediaPackageVodListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodUpdatePackagingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodUpdatePackagingGroupRequest) {
    super(scope, id);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePackagingGroup.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get authorization(): MediaPackageVodUpdatePackagingGroupAuthorization {
    return new MediaPackageVodUpdatePackagingGroupAuthorization(this, 'Authorization', this.__resources, this.input);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePackagingGroup.DomainName', props);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePackagingGroup.Id', props);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePackagingGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaPackageVodUpdatePackagingGroupAuthorization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaPackageVodUpdatePackagingGroupRequest) {
    super(scope, id);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePackagingGroup.Authorization.CdnIdentifierSecret', props);
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
            CdnIdentifierSecret: this.input.authorization?.cdnIdentifierSecret,
            SecretsRoleArn: this.input.authorization?.secretsRoleArn,
          },
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePackagingGroup.Authorization.SecretsRoleArn', props);
    return resource.getResponseField('Authorization.SecretsRoleArn') as unknown as string;
  }

}

