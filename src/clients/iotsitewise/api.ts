import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTSiteWiseClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateAssets(input: shapes.IoTSiteWiseAssociateAssetsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateAssets',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.AssociateAssets'),
        parameters: {
          assetId: input.assetId,
          hierarchyId: input.hierarchyId,
          childAssetId: input.childAssetId,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateAssets', props);
  }

  public batchAssociateProjectAssets(input: shapes.IoTSiteWiseBatchAssociateProjectAssetsRequest): IoTSiteWiseBatchAssociateProjectAssets {
    return new IoTSiteWiseBatchAssociateProjectAssets(this, 'BatchAssociateProjectAssets', this.__resources, input);
  }

  public batchDisassociateProjectAssets(input: shapes.IoTSiteWiseBatchDisassociateProjectAssetsRequest): IoTSiteWiseBatchDisassociateProjectAssets {
    return new IoTSiteWiseBatchDisassociateProjectAssets(this, 'BatchDisassociateProjectAssets', this.__resources, input);
  }

  public batchPutAssetPropertyValue(input: shapes.IoTSiteWiseBatchPutAssetPropertyValueRequest): IoTSiteWiseBatchPutAssetPropertyValue {
    return new IoTSiteWiseBatchPutAssetPropertyValue(this, 'BatchPutAssetPropertyValue', this.__resources, input);
  }

  public createAccessPolicy(input: shapes.IoTSiteWiseCreateAccessPolicyRequest): IoTSiteWiseCreateAccessPolicy {
    return new IoTSiteWiseCreateAccessPolicy(this, 'CreateAccessPolicy', this.__resources, input);
  }

  public createAsset(input: shapes.IoTSiteWiseCreateAssetRequest): IoTSiteWiseCreateAsset {
    return new IoTSiteWiseCreateAsset(this, 'CreateAsset', this.__resources, input);
  }

  public createAssetModel(input: shapes.IoTSiteWiseCreateAssetModelRequest): IoTSiteWiseCreateAssetModel {
    return new IoTSiteWiseCreateAssetModel(this, 'CreateAssetModel', this.__resources, input);
  }

  public createDashboard(input: shapes.IoTSiteWiseCreateDashboardRequest): IoTSiteWiseCreateDashboard {
    return new IoTSiteWiseCreateDashboard(this, 'CreateDashboard', this.__resources, input);
  }

  public createGateway(input: shapes.IoTSiteWiseCreateGatewayRequest): IoTSiteWiseCreateGateway {
    return new IoTSiteWiseCreateGateway(this, 'CreateGateway', this.__resources, input);
  }

  public createPortal(input: shapes.IoTSiteWiseCreatePortalRequest): IoTSiteWiseCreatePortal {
    return new IoTSiteWiseCreatePortal(this, 'CreatePortal', this.__resources, input);
  }

  public createPresignedPortalUrl(input: shapes.IoTSiteWiseCreatePresignedPortalUrlRequest): IoTSiteWiseCreatePresignedPortalUrl {
    return new IoTSiteWiseCreatePresignedPortalUrl(this, 'CreatePresignedPortalUrl', this.__resources, input);
  }

  public createProject(input: shapes.IoTSiteWiseCreateProjectRequest): IoTSiteWiseCreateProject {
    return new IoTSiteWiseCreateProject(this, 'CreateProject', this.__resources, input);
  }

  public deleteAccessPolicy(input: shapes.IoTSiteWiseDeleteAccessPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeleteAccessPolicy'),
        parameters: {
          accessPolicyId: input.accessPolicyId,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccessPolicy', props);
  }

  public deleteAsset(input: shapes.IoTSiteWiseDeleteAssetRequest): IoTSiteWiseDeleteAsset {
    return new IoTSiteWiseDeleteAsset(this, 'DeleteAsset', this.__resources, input);
  }

  public deleteAssetModel(input: shapes.IoTSiteWiseDeleteAssetModelRequest): IoTSiteWiseDeleteAssetModel {
    return new IoTSiteWiseDeleteAssetModel(this, 'DeleteAssetModel', this.__resources, input);
  }

  public deleteDashboard(input: shapes.IoTSiteWiseDeleteDashboardRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeleteDashboard'),
        parameters: {
          dashboardId: input.dashboardId,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDashboard', props);
  }

  public deleteGateway(input: shapes.IoTSiteWiseDeleteGatewayRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeleteGateway'),
        parameters: {
          gatewayId: input.gatewayId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGateway', props);
  }

  public deletePortal(input: shapes.IoTSiteWiseDeletePortalRequest): IoTSiteWiseDeletePortal {
    return new IoTSiteWiseDeletePortal(this, 'DeletePortal', this.__resources, input);
  }

  public deleteProject(input: shapes.IoTSiteWiseDeleteProjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeleteProject'),
        parameters: {
          projectId: input.projectId,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProject', props);
  }

  public describeAccessPolicy(input: shapes.IoTSiteWiseDescribeAccessPolicyRequest): IoTSiteWiseDescribeAccessPolicy {
    return new IoTSiteWiseDescribeAccessPolicy(this, 'DescribeAccessPolicy', this.__resources, input);
  }

  public describeAsset(input: shapes.IoTSiteWiseDescribeAssetRequest): IoTSiteWiseDescribeAsset {
    return new IoTSiteWiseDescribeAsset(this, 'DescribeAsset', this.__resources, input);
  }

  public describeAssetModel(input: shapes.IoTSiteWiseDescribeAssetModelRequest): IoTSiteWiseDescribeAssetModel {
    return new IoTSiteWiseDescribeAssetModel(this, 'DescribeAssetModel', this.__resources, input);
  }

  public describeAssetProperty(input: shapes.IoTSiteWiseDescribeAssetPropertyRequest): IoTSiteWiseDescribeAssetProperty {
    return new IoTSiteWiseDescribeAssetProperty(this, 'DescribeAssetProperty', this.__resources, input);
  }

  public describeDashboard(input: shapes.IoTSiteWiseDescribeDashboardRequest): IoTSiteWiseDescribeDashboard {
    return new IoTSiteWiseDescribeDashboard(this, 'DescribeDashboard', this.__resources, input);
  }

  public describeDefaultEncryptionConfiguration(): IoTSiteWiseDescribeDefaultEncryptionConfiguration {
    return new IoTSiteWiseDescribeDefaultEncryptionConfiguration(this, 'DescribeDefaultEncryptionConfiguration', this.__resources);
  }

  public describeGateway(input: shapes.IoTSiteWiseDescribeGatewayRequest): IoTSiteWiseDescribeGateway {
    return new IoTSiteWiseDescribeGateway(this, 'DescribeGateway', this.__resources, input);
  }

  public describeGatewayCapabilityConfiguration(input: shapes.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest): IoTSiteWiseDescribeGatewayCapabilityConfiguration {
    return new IoTSiteWiseDescribeGatewayCapabilityConfiguration(this, 'DescribeGatewayCapabilityConfiguration', this.__resources, input);
  }

  public describeLoggingOptions(): IoTSiteWiseDescribeLoggingOptions {
    return new IoTSiteWiseDescribeLoggingOptions(this, 'DescribeLoggingOptions', this.__resources);
  }

  public describePortal(input: shapes.IoTSiteWiseDescribePortalRequest): IoTSiteWiseDescribePortal {
    return new IoTSiteWiseDescribePortal(this, 'DescribePortal', this.__resources, input);
  }

  public describeProject(input: shapes.IoTSiteWiseDescribeProjectRequest): IoTSiteWiseDescribeProject {
    return new IoTSiteWiseDescribeProject(this, 'DescribeProject', this.__resources, input);
  }

  public disassociateAssets(input: shapes.IoTSiteWiseDisassociateAssetsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateAssets',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DisassociateAssets'),
        parameters: {
          assetId: input.assetId,
          hierarchyId: input.hierarchyId,
          childAssetId: input.childAssetId,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateAssets', props);
  }

  public fetchAssetPropertyAggregates(input: shapes.IoTSiteWiseGetAssetPropertyAggregatesRequest): IoTSiteWiseFetchAssetPropertyAggregates {
    return new IoTSiteWiseFetchAssetPropertyAggregates(this, 'FetchAssetPropertyAggregates', this.__resources, input);
  }

  public fetchAssetPropertyValue(input: shapes.IoTSiteWiseGetAssetPropertyValueRequest): IoTSiteWiseFetchAssetPropertyValue {
    return new IoTSiteWiseFetchAssetPropertyValue(this, 'FetchAssetPropertyValue', this.__resources, input);
  }

  public fetchAssetPropertyValueHistory(input: shapes.IoTSiteWiseGetAssetPropertyValueHistoryRequest): IoTSiteWiseFetchAssetPropertyValueHistory {
    return new IoTSiteWiseFetchAssetPropertyValueHistory(this, 'FetchAssetPropertyValueHistory', this.__resources, input);
  }

  public listAccessPolicies(input: shapes.IoTSiteWiseListAccessPoliciesRequest): IoTSiteWiseListAccessPolicies {
    return new IoTSiteWiseListAccessPolicies(this, 'ListAccessPolicies', this.__resources, input);
  }

  public listAssetModels(input: shapes.IoTSiteWiseListAssetModelsRequest): IoTSiteWiseListAssetModels {
    return new IoTSiteWiseListAssetModels(this, 'ListAssetModels', this.__resources, input);
  }

  public listAssets(input: shapes.IoTSiteWiseListAssetsRequest): IoTSiteWiseListAssets {
    return new IoTSiteWiseListAssets(this, 'ListAssets', this.__resources, input);
  }

  public listAssociatedAssets(input: shapes.IoTSiteWiseListAssociatedAssetsRequest): IoTSiteWiseListAssociatedAssets {
    return new IoTSiteWiseListAssociatedAssets(this, 'ListAssociatedAssets', this.__resources, input);
  }

  public listDashboards(input: shapes.IoTSiteWiseListDashboardsRequest): IoTSiteWiseListDashboards {
    return new IoTSiteWiseListDashboards(this, 'ListDashboards', this.__resources, input);
  }

  public listGateways(input: shapes.IoTSiteWiseListGatewaysRequest): IoTSiteWiseListGateways {
    return new IoTSiteWiseListGateways(this, 'ListGateways', this.__resources, input);
  }

  public listPortals(input: shapes.IoTSiteWiseListPortalsRequest): IoTSiteWiseListPortals {
    return new IoTSiteWiseListPortals(this, 'ListPortals', this.__resources, input);
  }

  public listProjectAssets(input: shapes.IoTSiteWiseListProjectAssetsRequest): IoTSiteWiseListProjectAssets {
    return new IoTSiteWiseListProjectAssets(this, 'ListProjectAssets', this.__resources, input);
  }

  public listProjects(input: shapes.IoTSiteWiseListProjectsRequest): IoTSiteWiseListProjects {
    return new IoTSiteWiseListProjects(this, 'ListProjects', this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTSiteWiseListTagsForResourceRequest): IoTSiteWiseListTagsForResource {
    return new IoTSiteWiseListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putDefaultEncryptionConfiguration(input: shapes.IoTSiteWisePutDefaultEncryptionConfigurationRequest): IoTSiteWisePutDefaultEncryptionConfiguration {
    return new IoTSiteWisePutDefaultEncryptionConfiguration(this, 'PutDefaultEncryptionConfiguration', this.__resources, input);
  }

  public putLoggingOptions(input: shapes.IoTSiteWisePutLoggingOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingOptions',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.PutLoggingOptions'),
        parameters: {
          loggingOptions: {
            level: input.loggingOptions.level,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutLoggingOptions', props);
  }

  public tagResource(input: shapes.IoTSiteWiseTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.IoTSiteWiseUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAccessPolicy(input: shapes.IoTSiteWiseUpdateAccessPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateAccessPolicy'),
        parameters: {
          accessPolicyId: input.accessPolicyId,
          accessPolicyIdentity: {
            user: {
              id: input.accessPolicyIdentity.user?.id,
            },
            group: {
              id: input.accessPolicyIdentity.group?.id,
            },
            iamUser: {
              arn: input.accessPolicyIdentity.iamUser?.arn,
            },
          },
          accessPolicyResource: {
            portal: {
              id: input.accessPolicyResource.portal?.id,
            },
            project: {
              id: input.accessPolicyResource.project?.id,
            },
          },
          accessPolicyPermission: input.accessPolicyPermission,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAccessPolicy', props);
  }

  public updateAsset(input: shapes.IoTSiteWiseUpdateAssetRequest): IoTSiteWiseUpdateAsset {
    return new IoTSiteWiseUpdateAsset(this, 'UpdateAsset', this.__resources, input);
  }

  public updateAssetModel(input: shapes.IoTSiteWiseUpdateAssetModelRequest): IoTSiteWiseUpdateAssetModel {
    return new IoTSiteWiseUpdateAssetModel(this, 'UpdateAssetModel', this.__resources, input);
  }

  public updateAssetProperty(input: shapes.IoTSiteWiseUpdateAssetPropertyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateAssetProperty'),
        parameters: {
          assetId: input.assetId,
          propertyId: input.propertyId,
          propertyAlias: input.propertyAlias,
          propertyNotificationState: input.propertyNotificationState,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAssetProperty', props);
  }

  public updateDashboard(input: shapes.IoTSiteWiseUpdateDashboardRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateDashboard'),
        parameters: {
          dashboardId: input.dashboardId,
          dashboardName: input.dashboardName,
          dashboardDescription: input.dashboardDescription,
          dashboardDefinition: input.dashboardDefinition,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDashboard', props);
  }

  public updateGateway(input: shapes.IoTSiteWiseUpdateGatewayRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateGateway'),
        parameters: {
          gatewayId: input.gatewayId,
          gatewayName: input.gatewayName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateGateway', props);
  }

  public updateGatewayCapabilityConfiguration(input: shapes.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest): IoTSiteWiseUpdateGatewayCapabilityConfiguration {
    return new IoTSiteWiseUpdateGatewayCapabilityConfiguration(this, 'UpdateGatewayCapabilityConfiguration', this.__resources, input);
  }

  public updatePortal(input: shapes.IoTSiteWiseUpdatePortalRequest): IoTSiteWiseUpdatePortal {
    return new IoTSiteWiseUpdatePortal(this, 'UpdatePortal', this.__resources, input);
  }

  public updateProject(input: shapes.IoTSiteWiseUpdateProjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateProject'),
        parameters: {
          projectId: input.projectId,
          projectName: input.projectName,
          projectDescription: input.projectDescription,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateProject', props);
  }

}

export class IoTSiteWiseBatchAssociateProjectAssets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseBatchAssociateProjectAssetsRequest) {
    super(scope, id);
  }

  public get errors(): shapes.IoTSiteWiseAssetErrorDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAssociateProjectAssets',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.BatchAssociateProjectAssets.errors'),
        outputPath: 'errors',
        parameters: {
          projectId: this.input.projectId,
          assetIds: this.input.assetIds,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchAssociateProjectAssets.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.IoTSiteWiseAssetErrorDetails[];
  }

}

export class IoTSiteWiseBatchDisassociateProjectAssets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseBatchDisassociateProjectAssetsRequest) {
    super(scope, id);
  }

  public get errors(): shapes.IoTSiteWiseAssetErrorDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisassociateProjectAssets',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.BatchDisassociateProjectAssets.errors'),
        outputPath: 'errors',
        parameters: {
          projectId: this.input.projectId,
          assetIds: this.input.assetIds,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDisassociateProjectAssets.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.IoTSiteWiseAssetErrorDetails[];
  }

}

export class IoTSiteWiseBatchPutAssetPropertyValue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseBatchPutAssetPropertyValueRequest) {
    super(scope, id);
  }

  public get errorEntries(): shapes.IoTSiteWiseBatchPutAssetPropertyErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchPutAssetPropertyValue',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.BatchPutAssetPropertyValue.errorEntries'),
        outputPath: 'errorEntries',
        parameters: {
          entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchPutAssetPropertyValue.errorEntries', props);
    return resource.getResponseField('errorEntries') as unknown as shapes.IoTSiteWiseBatchPutAssetPropertyErrorEntry[];
  }

}

export class IoTSiteWiseCreateAccessPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreateAccessPolicyRequest) {
    super(scope, id);
  }

  public get accessPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAccessPolicy.accessPolicyId'),
        outputPath: 'accessPolicyId',
        parameters: {
          accessPolicyIdentity: {
            user: {
              id: this.input.accessPolicyIdentity.user?.id,
            },
            group: {
              id: this.input.accessPolicyIdentity.group?.id,
            },
            iamUser: {
              arn: this.input.accessPolicyIdentity.iamUser?.arn,
            },
          },
          accessPolicyResource: {
            portal: {
              id: this.input.accessPolicyResource.portal?.id,
            },
            project: {
              id: this.input.accessPolicyResource.project?.id,
            },
          },
          accessPolicyPermission: this.input.accessPolicyPermission,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccessPolicy.accessPolicyId', props);
    return resource.getResponseField('accessPolicyId') as unknown as string;
  }

  public get accessPolicyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAccessPolicy.accessPolicyArn'),
        outputPath: 'accessPolicyArn',
        parameters: {
          accessPolicyIdentity: {
            user: {
              id: this.input.accessPolicyIdentity.user?.id,
            },
            group: {
              id: this.input.accessPolicyIdentity.group?.id,
            },
            iamUser: {
              arn: this.input.accessPolicyIdentity.iamUser?.arn,
            },
          },
          accessPolicyResource: {
            portal: {
              id: this.input.accessPolicyResource.portal?.id,
            },
            project: {
              id: this.input.accessPolicyResource.project?.id,
            },
          },
          accessPolicyPermission: this.input.accessPolicyPermission,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccessPolicy.accessPolicyArn', props);
    return resource.getResponseField('accessPolicyArn') as unknown as string;
  }

}

export class IoTSiteWiseCreateAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreateAssetRequest) {
    super(scope, id);
  }

  public get assetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAsset.assetId'),
        outputPath: 'assetId',
        parameters: {
          assetName: this.input.assetName,
          assetModelId: this.input.assetModelId,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.assetId', props);
    return resource.getResponseField('assetId') as unknown as string;
  }

  public get assetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAsset.assetArn'),
        outputPath: 'assetArn',
        parameters: {
          assetName: this.input.assetName,
          assetModelId: this.input.assetModelId,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.assetArn', props);
    return resource.getResponseField('assetArn') as unknown as string;
  }

  public get assetStatus(): IoTSiteWiseCreateAssetAssetStatus {
    return new IoTSiteWiseCreateAssetAssetStatus(this, 'AssetStatus', this.__resources, this.input);
  }

}

export class IoTSiteWiseCreateAssetAssetStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreateAssetRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAsset.assetStatus.state'),
        outputPath: 'assetStatus.state',
        parameters: {
          assetName: this.input.assetName,
          assetModelId: this.input.assetModelId,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.assetStatus.state', props);
    return resource.getResponseField('assetStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseCreateAssetAssetStatusError {
    return new IoTSiteWiseCreateAssetAssetStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseCreateAssetAssetStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreateAssetRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAsset.assetStatus.error.code'),
        outputPath: 'assetStatus.error.code',
        parameters: {
          assetName: this.input.assetName,
          assetModelId: this.input.assetModelId,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.assetStatus.error.code', props);
    return resource.getResponseField('assetStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAsset.assetStatus.error.message'),
        outputPath: 'assetStatus.error.message',
        parameters: {
          assetName: this.input.assetName,
          assetModelId: this.input.assetModelId,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAsset.assetStatus.error.message', props);
    return resource.getResponseField('assetStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseCreateAssetModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreateAssetModelRequest) {
    super(scope, id);
  }

  public get assetModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAssetModel.assetModelId'),
        outputPath: 'assetModelId',
        parameters: {
          assetModelName: this.input.assetModelName,
          assetModelDescription: this.input.assetModelDescription,
          assetModelProperties: this.input.assetModelProperties,
          assetModelHierarchies: this.input.assetModelHierarchies,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssetModel.assetModelId', props);
    return resource.getResponseField('assetModelId') as unknown as string;
  }

  public get assetModelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAssetModel.assetModelArn'),
        outputPath: 'assetModelArn',
        parameters: {
          assetModelName: this.input.assetModelName,
          assetModelDescription: this.input.assetModelDescription,
          assetModelProperties: this.input.assetModelProperties,
          assetModelHierarchies: this.input.assetModelHierarchies,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssetModel.assetModelArn', props);
    return resource.getResponseField('assetModelArn') as unknown as string;
  }

  public get assetModelStatus(): IoTSiteWiseCreateAssetModelAssetModelStatus {
    return new IoTSiteWiseCreateAssetModelAssetModelStatus(this, 'AssetModelStatus', this.__resources, this.input);
  }

}

export class IoTSiteWiseCreateAssetModelAssetModelStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreateAssetModelRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAssetModel.assetModelStatus.state'),
        outputPath: 'assetModelStatus.state',
        parameters: {
          assetModelName: this.input.assetModelName,
          assetModelDescription: this.input.assetModelDescription,
          assetModelProperties: this.input.assetModelProperties,
          assetModelHierarchies: this.input.assetModelHierarchies,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssetModel.assetModelStatus.state', props);
    return resource.getResponseField('assetModelStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseCreateAssetModelAssetModelStatusError {
    return new IoTSiteWiseCreateAssetModelAssetModelStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseCreateAssetModelAssetModelStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreateAssetModelRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAssetModel.assetModelStatus.error.code'),
        outputPath: 'assetModelStatus.error.code',
        parameters: {
          assetModelName: this.input.assetModelName,
          assetModelDescription: this.input.assetModelDescription,
          assetModelProperties: this.input.assetModelProperties,
          assetModelHierarchies: this.input.assetModelHierarchies,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssetModel.assetModelStatus.error.code', props);
    return resource.getResponseField('assetModelStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateAssetModel.assetModelStatus.error.message'),
        outputPath: 'assetModelStatus.error.message',
        parameters: {
          assetModelName: this.input.assetModelName,
          assetModelDescription: this.input.assetModelDescription,
          assetModelProperties: this.input.assetModelProperties,
          assetModelHierarchies: this.input.assetModelHierarchies,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssetModel.assetModelStatus.error.message', props);
    return resource.getResponseField('assetModelStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseCreateDashboard extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreateDashboardRequest) {
    super(scope, id);
  }

  public get dashboardId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateDashboard.dashboardId'),
        outputPath: 'dashboardId',
        parameters: {
          projectId: this.input.projectId,
          dashboardName: this.input.dashboardName,
          dashboardDescription: this.input.dashboardDescription,
          dashboardDefinition: this.input.dashboardDefinition,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDashboard.dashboardId', props);
    return resource.getResponseField('dashboardId') as unknown as string;
  }

  public get dashboardArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateDashboard.dashboardArn'),
        outputPath: 'dashboardArn',
        parameters: {
          projectId: this.input.projectId,
          dashboardName: this.input.dashboardName,
          dashboardDescription: this.input.dashboardDescription,
          dashboardDefinition: this.input.dashboardDefinition,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDashboard.dashboardArn', props);
    return resource.getResponseField('dashboardArn') as unknown as string;
  }

}

export class IoTSiteWiseCreateGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreateGatewayRequest) {
    super(scope, id);
  }

  public get gatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateGateway.gatewayId'),
        outputPath: 'gatewayId',
        parameters: {
          gatewayName: this.input.gatewayName,
          gatewayPlatform: {
            greengrass: {
              groupArn: this.input.gatewayPlatform.greengrass.groupArn,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGateway.gatewayId', props);
    return resource.getResponseField('gatewayId') as unknown as string;
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateGateway.gatewayArn'),
        outputPath: 'gatewayArn',
        parameters: {
          gatewayName: this.input.gatewayName,
          gatewayPlatform: {
            greengrass: {
              groupArn: this.input.gatewayPlatform.greengrass.groupArn,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGateway.gatewayArn', props);
    return resource.getResponseField('gatewayArn') as unknown as string;
  }

}

export class IoTSiteWiseCreatePortal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreatePortalRequest) {
    super(scope, id);
  }

  public get portalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreatePortal.portalId'),
        outputPath: 'portalId',
        parameters: {
          portalName: this.input.portalName,
          portalDescription: this.input.portalDescription,
          portalContactEmail: this.input.portalContactEmail,
          clientToken: this.input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.input.portalLogoImageFile?.type,
          },
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          portalAuthMode: this.input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortal.portalId', props);
    return resource.getResponseField('portalId') as unknown as string;
  }

  public get portalArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreatePortal.portalArn'),
        outputPath: 'portalArn',
        parameters: {
          portalName: this.input.portalName,
          portalDescription: this.input.portalDescription,
          portalContactEmail: this.input.portalContactEmail,
          clientToken: this.input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.input.portalLogoImageFile?.type,
          },
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          portalAuthMode: this.input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortal.portalArn', props);
    return resource.getResponseField('portalArn') as unknown as string;
  }

  public get portalStartUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreatePortal.portalStartUrl'),
        outputPath: 'portalStartUrl',
        parameters: {
          portalName: this.input.portalName,
          portalDescription: this.input.portalDescription,
          portalContactEmail: this.input.portalContactEmail,
          clientToken: this.input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.input.portalLogoImageFile?.type,
          },
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          portalAuthMode: this.input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortal.portalStartUrl', props);
    return resource.getResponseField('portalStartUrl') as unknown as string;
  }

  public get portalStatus(): IoTSiteWiseCreatePortalPortalStatus {
    return new IoTSiteWiseCreatePortalPortalStatus(this, 'PortalStatus', this.__resources, this.input);
  }

  public get ssoApplicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreatePortal.ssoApplicationId'),
        outputPath: 'ssoApplicationId',
        parameters: {
          portalName: this.input.portalName,
          portalDescription: this.input.portalDescription,
          portalContactEmail: this.input.portalContactEmail,
          clientToken: this.input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.input.portalLogoImageFile?.type,
          },
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          portalAuthMode: this.input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortal.ssoApplicationId', props);
    return resource.getResponseField('ssoApplicationId') as unknown as string;
  }

}

export class IoTSiteWiseCreatePortalPortalStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreatePortalRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreatePortal.portalStatus.state'),
        outputPath: 'portalStatus.state',
        parameters: {
          portalName: this.input.portalName,
          portalDescription: this.input.portalDescription,
          portalContactEmail: this.input.portalContactEmail,
          clientToken: this.input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.input.portalLogoImageFile?.type,
          },
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          portalAuthMode: this.input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortal.portalStatus.state', props);
    return resource.getResponseField('portalStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseCreatePortalPortalStatusError {
    return new IoTSiteWiseCreatePortalPortalStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseCreatePortalPortalStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreatePortalRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreatePortal.portalStatus.error.code'),
        outputPath: 'portalStatus.error.code',
        parameters: {
          portalName: this.input.portalName,
          portalDescription: this.input.portalDescription,
          portalContactEmail: this.input.portalContactEmail,
          clientToken: this.input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.input.portalLogoImageFile?.type,
          },
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          portalAuthMode: this.input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortal.portalStatus.error.code', props);
    return resource.getResponseField('portalStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreatePortal.portalStatus.error.message'),
        outputPath: 'portalStatus.error.message',
        parameters: {
          portalName: this.input.portalName,
          portalDescription: this.input.portalDescription,
          portalContactEmail: this.input.portalContactEmail,
          clientToken: this.input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.input.portalLogoImageFile?.type,
          },
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          portalAuthMode: this.input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortal.portalStatus.error.message', props);
    return resource.getResponseField('portalStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseCreatePresignedPortalUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreatePresignedPortalUrlRequest) {
    super(scope, id);
  }

  public get presignedPortalUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPresignedPortalUrl',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreatePresignedPortalUrl.presignedPortalUrl'),
        outputPath: 'presignedPortalUrl',
        parameters: {
          portalId: this.input.portalId,
          sessionDurationSeconds: this.input.sessionDurationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePresignedPortalUrl.presignedPortalUrl', props);
    return resource.getResponseField('presignedPortalUrl') as unknown as string;
  }

}

export class IoTSiteWiseCreateProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseCreateProjectRequest) {
    super(scope, id);
  }

  public get projectId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateProject.projectId'),
        outputPath: 'projectId',
        parameters: {
          portalId: this.input.portalId,
          projectName: this.input.projectName,
          projectDescription: this.input.projectDescription,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.projectId', props);
    return resource.getResponseField('projectId') as unknown as string;
  }

  public get projectArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.CreateProject.projectArn'),
        outputPath: 'projectArn',
        parameters: {
          portalId: this.input.portalId,
          projectName: this.input.projectName,
          projectDescription: this.input.projectDescription,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.projectArn', props);
    return resource.getResponseField('projectArn') as unknown as string;
  }

}

export class IoTSiteWiseDeleteAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDeleteAssetRequest) {
    super(scope, id);
  }

  public get assetStatus(): IoTSiteWiseDeleteAssetAssetStatus {
    return new IoTSiteWiseDeleteAssetAssetStatus(this, 'AssetStatus', this.__resources, this.input);
  }

}

export class IoTSiteWiseDeleteAssetAssetStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDeleteAssetRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeleteAsset.assetStatus.state'),
        outputPath: 'assetStatus.state',
        parameters: {
          assetId: this.input.assetId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAsset.assetStatus.state', props);
    return resource.getResponseField('assetStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseDeleteAssetAssetStatusError {
    return new IoTSiteWiseDeleteAssetAssetStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseDeleteAssetAssetStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDeleteAssetRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeleteAsset.assetStatus.error.code'),
        outputPath: 'assetStatus.error.code',
        parameters: {
          assetId: this.input.assetId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAsset.assetStatus.error.code', props);
    return resource.getResponseField('assetStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeleteAsset.assetStatus.error.message'),
        outputPath: 'assetStatus.error.message',
        parameters: {
          assetId: this.input.assetId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAsset.assetStatus.error.message', props);
    return resource.getResponseField('assetStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseDeleteAssetModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDeleteAssetModelRequest) {
    super(scope, id);
  }

  public get assetModelStatus(): IoTSiteWiseDeleteAssetModelAssetModelStatus {
    return new IoTSiteWiseDeleteAssetModelAssetModelStatus(this, 'AssetModelStatus', this.__resources, this.input);
  }

}

export class IoTSiteWiseDeleteAssetModelAssetModelStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDeleteAssetModelRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeleteAssetModel.assetModelStatus.state'),
        outputPath: 'assetModelStatus.state',
        parameters: {
          assetModelId: this.input.assetModelId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAssetModel.assetModelStatus.state', props);
    return resource.getResponseField('assetModelStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseDeleteAssetModelAssetModelStatusError {
    return new IoTSiteWiseDeleteAssetModelAssetModelStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseDeleteAssetModelAssetModelStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDeleteAssetModelRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeleteAssetModel.assetModelStatus.error.code'),
        outputPath: 'assetModelStatus.error.code',
        parameters: {
          assetModelId: this.input.assetModelId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAssetModel.assetModelStatus.error.code', props);
    return resource.getResponseField('assetModelStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeleteAssetModel.assetModelStatus.error.message'),
        outputPath: 'assetModelStatus.error.message',
        parameters: {
          assetModelId: this.input.assetModelId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAssetModel.assetModelStatus.error.message', props);
    return resource.getResponseField('assetModelStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseDeletePortal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDeletePortalRequest) {
    super(scope, id);
  }

  public get portalStatus(): IoTSiteWiseDeletePortalPortalStatus {
    return new IoTSiteWiseDeletePortalPortalStatus(this, 'PortalStatus', this.__resources, this.input);
  }

}

export class IoTSiteWiseDeletePortalPortalStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDeletePortalRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeletePortal.portalStatus.state'),
        outputPath: 'portalStatus.state',
        parameters: {
          portalId: this.input.portalId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePortal.portalStatus.state', props);
    return resource.getResponseField('portalStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseDeletePortalPortalStatusError {
    return new IoTSiteWiseDeletePortalPortalStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseDeletePortalPortalStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDeletePortalRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeletePortal.portalStatus.error.code'),
        outputPath: 'portalStatus.error.code',
        parameters: {
          portalId: this.input.portalId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePortal.portalStatus.error.code', props);
    return resource.getResponseField('portalStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DeletePortal.portalStatus.error.message'),
        outputPath: 'portalStatus.error.message',
        parameters: {
          portalId: this.input.portalId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePortal.portalStatus.error.message', props);
    return resource.getResponseField('portalStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAccessPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
    super(scope, id);
  }

  public get accessPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAccessPolicy.accessPolicyId'),
        outputPath: 'accessPolicyId',
        parameters: {
          accessPolicyId: this.input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccessPolicy.accessPolicyId', props);
    return resource.getResponseField('accessPolicyId') as unknown as string;
  }

  public get accessPolicyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAccessPolicy.accessPolicyArn'),
        outputPath: 'accessPolicyArn',
        parameters: {
          accessPolicyId: this.input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccessPolicy.accessPolicyArn', props);
    return resource.getResponseField('accessPolicyArn') as unknown as string;
  }

  public get accessPolicyIdentity(): IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentity {
    return new IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentity(this, 'AccessPolicyIdentity', this.__resources, this.input);
  }

  public get accessPolicyResource(): IoTSiteWiseDescribeAccessPolicyAccessPolicyResource {
    return new IoTSiteWiseDescribeAccessPolicyAccessPolicyResource(this, 'AccessPolicyResource', this.__resources, this.input);
  }

  public get accessPolicyPermission(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAccessPolicy.accessPolicyPermission'),
        outputPath: 'accessPolicyPermission',
        parameters: {
          accessPolicyId: this.input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccessPolicy.accessPolicyPermission', props);
    return resource.getResponseField('accessPolicyPermission') as unknown as string;
  }

  public get accessPolicyCreationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAccessPolicy.accessPolicyCreationDate'),
        outputPath: 'accessPolicyCreationDate',
        parameters: {
          accessPolicyId: this.input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccessPolicy.accessPolicyCreationDate', props);
    return resource.getResponseField('accessPolicyCreationDate') as unknown as string;
  }

  public get accessPolicyLastUpdateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAccessPolicy.accessPolicyLastUpdateDate'),
        outputPath: 'accessPolicyLastUpdateDate',
        parameters: {
          accessPolicyId: this.input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccessPolicy.accessPolicyLastUpdateDate', props);
    return resource.getResponseField('accessPolicyLastUpdateDate') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
    super(scope, id);
  }

  public get user(): IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentityUser {
    return new IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentityUser(this, 'User', this.__resources, this.input);
  }

  public get group(): IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentityGroup {
    return new IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentityGroup(this, 'Group', this.__resources, this.input);
  }

  public get iamUser(): IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentityIamUser {
    return new IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentityIamUser(this, 'IamUser', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentityUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAccessPolicy.accessPolicyIdentity.user.id'),
        outputPath: 'accessPolicyIdentity.user.id',
        parameters: {
          accessPolicyId: this.input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccessPolicy.accessPolicyIdentity.user.id', props);
    return resource.getResponseField('accessPolicyIdentity.user.id') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentityGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAccessPolicy.accessPolicyIdentity.group.id'),
        outputPath: 'accessPolicyIdentity.group.id',
        parameters: {
          accessPolicyId: this.input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccessPolicy.accessPolicyIdentity.group.id', props);
    return resource.getResponseField('accessPolicyIdentity.group.id') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAccessPolicyAccessPolicyIdentityIamUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAccessPolicy.accessPolicyIdentity.iamUser.arn'),
        outputPath: 'accessPolicyIdentity.iamUser.arn',
        parameters: {
          accessPolicyId: this.input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccessPolicy.accessPolicyIdentity.iamUser.arn', props);
    return resource.getResponseField('accessPolicyIdentity.iamUser.arn') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAccessPolicyAccessPolicyResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
    super(scope, id);
  }

  public get portal(): IoTSiteWiseDescribeAccessPolicyAccessPolicyResourcePortal {
    return new IoTSiteWiseDescribeAccessPolicyAccessPolicyResourcePortal(this, 'Portal', this.__resources, this.input);
  }

  public get project(): IoTSiteWiseDescribeAccessPolicyAccessPolicyResourceProject {
    return new IoTSiteWiseDescribeAccessPolicyAccessPolicyResourceProject(this, 'Project', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAccessPolicyAccessPolicyResourcePortal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAccessPolicy.accessPolicyResource.portal.id'),
        outputPath: 'accessPolicyResource.portal.id',
        parameters: {
          accessPolicyId: this.input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccessPolicy.accessPolicyResource.portal.id', props);
    return resource.getResponseField('accessPolicyResource.portal.id') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAccessPolicyAccessPolicyResourceProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccessPolicy',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAccessPolicy.accessPolicyResource.project.id'),
        outputPath: 'accessPolicyResource.project.id',
        parameters: {
          accessPolicyId: this.input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccessPolicy.accessPolicyResource.project.id', props);
    return resource.getResponseField('accessPolicyResource.project.id') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetRequest) {
    super(scope, id);
  }

  public get assetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetId'),
        outputPath: 'assetId',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetId', props);
    return resource.getResponseField('assetId') as unknown as string;
  }

  public get assetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetArn'),
        outputPath: 'assetArn',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetArn', props);
    return resource.getResponseField('assetArn') as unknown as string;
  }

  public get assetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetName'),
        outputPath: 'assetName',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetName', props);
    return resource.getResponseField('assetName') as unknown as string;
  }

  public get assetModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetModelId'),
        outputPath: 'assetModelId',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetModelId', props);
    return resource.getResponseField('assetModelId') as unknown as string;
  }

  public get assetProperties(): shapes.IoTSiteWiseAssetProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetProperties'),
        outputPath: 'assetProperties',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetProperties', props);
    return resource.getResponseField('assetProperties') as unknown as shapes.IoTSiteWiseAssetProperty[];
  }

  public get assetHierarchies(): shapes.IoTSiteWiseAssetHierarchy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetHierarchies'),
        outputPath: 'assetHierarchies',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetHierarchies', props);
    return resource.getResponseField('assetHierarchies') as unknown as shapes.IoTSiteWiseAssetHierarchy[];
  }

  public get assetCreationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetCreationDate'),
        outputPath: 'assetCreationDate',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetCreationDate', props);
    return resource.getResponseField('assetCreationDate') as unknown as string;
  }

  public get assetLastUpdateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetLastUpdateDate'),
        outputPath: 'assetLastUpdateDate',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetLastUpdateDate', props);
    return resource.getResponseField('assetLastUpdateDate') as unknown as string;
  }

  public get assetStatus(): IoTSiteWiseDescribeAssetAssetStatus {
    return new IoTSiteWiseDescribeAssetAssetStatus(this, 'AssetStatus', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAssetAssetStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetStatus.state'),
        outputPath: 'assetStatus.state',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetStatus.state', props);
    return resource.getResponseField('assetStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseDescribeAssetAssetStatusError {
    return new IoTSiteWiseDescribeAssetAssetStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAssetAssetStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetStatus.error.code'),
        outputPath: 'assetStatus.error.code',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetStatus.error.code', props);
    return resource.getResponseField('assetStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAsset.assetStatus.error.message'),
        outputPath: 'assetStatus.error.message',
        parameters: {
          assetId: this.input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAsset.assetStatus.error.message', props);
    return resource.getResponseField('assetStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAssetModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetModelRequest) {
    super(scope, id);
  }

  public get assetModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelId'),
        outputPath: 'assetModelId',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelId', props);
    return resource.getResponseField('assetModelId') as unknown as string;
  }

  public get assetModelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelArn'),
        outputPath: 'assetModelArn',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelArn', props);
    return resource.getResponseField('assetModelArn') as unknown as string;
  }

  public get assetModelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelName'),
        outputPath: 'assetModelName',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelName', props);
    return resource.getResponseField('assetModelName') as unknown as string;
  }

  public get assetModelDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelDescription'),
        outputPath: 'assetModelDescription',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelDescription', props);
    return resource.getResponseField('assetModelDescription') as unknown as string;
  }

  public get assetModelProperties(): shapes.IoTSiteWiseAssetModelProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelProperties'),
        outputPath: 'assetModelProperties',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelProperties', props);
    return resource.getResponseField('assetModelProperties') as unknown as shapes.IoTSiteWiseAssetModelProperty[];
  }

  public get assetModelHierarchies(): shapes.IoTSiteWiseAssetModelHierarchy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelHierarchies'),
        outputPath: 'assetModelHierarchies',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelHierarchies', props);
    return resource.getResponseField('assetModelHierarchies') as unknown as shapes.IoTSiteWiseAssetModelHierarchy[];
  }

  public get assetModelCreationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelCreationDate'),
        outputPath: 'assetModelCreationDate',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelCreationDate', props);
    return resource.getResponseField('assetModelCreationDate') as unknown as string;
  }

  public get assetModelLastUpdateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelLastUpdateDate'),
        outputPath: 'assetModelLastUpdateDate',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelLastUpdateDate', props);
    return resource.getResponseField('assetModelLastUpdateDate') as unknown as string;
  }

  public get assetModelStatus(): IoTSiteWiseDescribeAssetModelAssetModelStatus {
    return new IoTSiteWiseDescribeAssetModelAssetModelStatus(this, 'AssetModelStatus', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAssetModelAssetModelStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetModelRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelStatus.state'),
        outputPath: 'assetModelStatus.state',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelStatus.state', props);
    return resource.getResponseField('assetModelStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseDescribeAssetModelAssetModelStatusError {
    return new IoTSiteWiseDescribeAssetModelAssetModelStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAssetModelAssetModelStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetModelRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelStatus.error.code'),
        outputPath: 'assetModelStatus.error.code',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelStatus.error.code', props);
    return resource.getResponseField('assetModelStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetModel.assetModelStatus.error.message'),
        outputPath: 'assetModelStatus.error.message',
        parameters: {
          assetModelId: this.input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetModel.assetModelStatus.error.message', props);
    return resource.getResponseField('assetModelStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAssetProperty extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
    super(scope, id);
  }

  public get assetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetId'),
        outputPath: 'assetId',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetId', props);
    return resource.getResponseField('assetId') as unknown as string;
  }

  public get assetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetName'),
        outputPath: 'assetName',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetName', props);
    return resource.getResponseField('assetName') as unknown as string;
  }

  public get assetModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetModelId'),
        outputPath: 'assetModelId',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetModelId', props);
    return resource.getResponseField('assetModelId') as unknown as string;
  }

  public get assetProperty(): IoTSiteWiseDescribeAssetPropertyAssetProperty {
    return new IoTSiteWiseDescribeAssetPropertyAssetProperty(this, 'AssetProperty', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAssetPropertyAssetProperty extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.id'),
        outputPath: 'assetProperty.id',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.id', props);
    return resource.getResponseField('assetProperty.id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.name'),
        outputPath: 'assetProperty.name',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.name', props);
    return resource.getResponseField('assetProperty.name') as unknown as string;
  }

  public get alias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.alias'),
        outputPath: 'assetProperty.alias',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.alias', props);
    return resource.getResponseField('assetProperty.alias') as unknown as string;
  }

  public get notification(): IoTSiteWiseDescribeAssetPropertyAssetPropertyNotification {
    return new IoTSiteWiseDescribeAssetPropertyAssetPropertyNotification(this, 'Notification', this.__resources, this.input);
  }

  public get dataType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.dataType'),
        outputPath: 'assetProperty.dataType',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.dataType', props);
    return resource.getResponseField('assetProperty.dataType') as unknown as string;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.unit'),
        outputPath: 'assetProperty.unit',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.unit', props);
    return resource.getResponseField('assetProperty.unit') as unknown as string;
  }

  public get type(): IoTSiteWiseDescribeAssetPropertyAssetPropertyType {
    return new IoTSiteWiseDescribeAssetPropertyAssetPropertyType(this, 'Type', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAssetPropertyAssetPropertyNotification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
    super(scope, id);
  }

  public get topic(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.notification.topic'),
        outputPath: 'assetProperty.notification.topic',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.notification.topic', props);
    return resource.getResponseField('assetProperty.notification.topic') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.notification.state'),
        outputPath: 'assetProperty.notification.state',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.notification.state', props);
    return resource.getResponseField('assetProperty.notification.state') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAssetPropertyAssetPropertyType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
    super(scope, id);
  }

  public get attribute(): IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeAttribute {
    return new IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeAttribute(this, 'Attribute', this.__resources, this.input);
  }

  public get measurement(): IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMeasurement {
    return new IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMeasurement(this, 'Measurement');
  }

  public get transform(): IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeTransform {
    return new IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeTransform(this, 'Transform', this.__resources, this.input);
  }

  public get metric(): IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMetric {
    return new IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMetric(this, 'Metric', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeAttribute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.type.attribute.defaultValue'),
        outputPath: 'assetProperty.type.attribute.defaultValue',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.type.attribute.defaultValue', props);
    return resource.getResponseField('assetProperty.type.attribute.defaultValue') as unknown as string;
  }

}

export class IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMeasurement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeTransform extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
    super(scope, id);
  }

  public get expression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.type.transform.expression'),
        outputPath: 'assetProperty.type.transform.expression',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.type.transform.expression', props);
    return resource.getResponseField('assetProperty.type.transform.expression') as unknown as string;
  }

  public get variables(): shapes.IoTSiteWiseExpressionVariable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.type.transform.variables'),
        outputPath: 'assetProperty.type.transform.variables',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.type.transform.variables', props);
    return resource.getResponseField('assetProperty.type.transform.variables') as unknown as shapes.IoTSiteWiseExpressionVariable[];
  }

}

export class IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMetric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
    super(scope, id);
  }

  public get expression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.type.metric.expression'),
        outputPath: 'assetProperty.type.metric.expression',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.type.metric.expression', props);
    return resource.getResponseField('assetProperty.type.metric.expression') as unknown as string;
  }

  public get variables(): shapes.IoTSiteWiseExpressionVariable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.type.metric.variables'),
        outputPath: 'assetProperty.type.metric.variables',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.type.metric.variables', props);
    return resource.getResponseField('assetProperty.type.metric.variables') as unknown as shapes.IoTSiteWiseExpressionVariable[];
  }

  public get window(): IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMetricWindow {
    return new IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMetricWindow(this, 'Window', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMetricWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
    super(scope, id);
  }

  public get tumbling(): IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling {
    return new IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling(this, 'Tumbling', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
    super(scope, id);
  }

  public get interval(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.type.metric.window.tumbling.interval'),
        outputPath: 'assetProperty.type.metric.window.tumbling.interval',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssetProperty.assetProperty.type.metric.window.tumbling.interval', props);
    return resource.getResponseField('assetProperty.type.metric.window.tumbling.interval') as unknown as string;
  }

}

export class IoTSiteWiseDescribeDashboard extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeDashboardRequest) {
    super(scope, id);
  }

  public get dashboardId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDashboard.dashboardId'),
        outputPath: 'dashboardId',
        parameters: {
          dashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.dashboardId', props);
    return resource.getResponseField('dashboardId') as unknown as string;
  }

  public get dashboardArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDashboard.dashboardArn'),
        outputPath: 'dashboardArn',
        parameters: {
          dashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.dashboardArn', props);
    return resource.getResponseField('dashboardArn') as unknown as string;
  }

  public get dashboardName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDashboard.dashboardName'),
        outputPath: 'dashboardName',
        parameters: {
          dashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.dashboardName', props);
    return resource.getResponseField('dashboardName') as unknown as string;
  }

  public get projectId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDashboard.projectId'),
        outputPath: 'projectId',
        parameters: {
          dashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.projectId', props);
    return resource.getResponseField('projectId') as unknown as string;
  }

  public get dashboardDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDashboard.dashboardDescription'),
        outputPath: 'dashboardDescription',
        parameters: {
          dashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.dashboardDescription', props);
    return resource.getResponseField('dashboardDescription') as unknown as string;
  }

  public get dashboardDefinition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDashboard.dashboardDefinition'),
        outputPath: 'dashboardDefinition',
        parameters: {
          dashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.dashboardDefinition', props);
    return resource.getResponseField('dashboardDefinition') as unknown as string;
  }

  public get dashboardCreationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDashboard.dashboardCreationDate'),
        outputPath: 'dashboardCreationDate',
        parameters: {
          dashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.dashboardCreationDate', props);
    return resource.getResponseField('dashboardCreationDate') as unknown as string;
  }

  public get dashboardLastUpdateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDashboard.dashboardLastUpdateDate'),
        outputPath: 'dashboardLastUpdateDate',
        parameters: {
          dashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.dashboardLastUpdateDate', props);
    return resource.getResponseField('dashboardLastUpdateDate') as unknown as string;
  }

}

export class IoTSiteWiseDescribeDefaultEncryptionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultEncryptionConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDefaultEncryptionConfiguration.encryptionType'),
        outputPath: 'encryptionType',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultEncryptionConfiguration.encryptionType', props);
    return resource.getResponseField('encryptionType') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultEncryptionConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDefaultEncryptionConfiguration.kmsKeyArn'),
        outputPath: 'kmsKeyArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultEncryptionConfiguration.kmsKeyArn', props);
    return resource.getResponseField('kmsKeyArn') as unknown as string;
  }

  public get configurationStatus(): IoTSiteWiseDescribeDefaultEncryptionConfigurationConfigurationStatus {
    return new IoTSiteWiseDescribeDefaultEncryptionConfigurationConfigurationStatus(this, 'ConfigurationStatus', this.__resources);
  }

}

export class IoTSiteWiseDescribeDefaultEncryptionConfigurationConfigurationStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultEncryptionConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDefaultEncryptionConfiguration.configurationStatus.state'),
        outputPath: 'configurationStatus.state',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultEncryptionConfiguration.configurationStatus.state', props);
    return resource.getResponseField('configurationStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseDescribeDefaultEncryptionConfigurationConfigurationStatusError {
    return new IoTSiteWiseDescribeDefaultEncryptionConfigurationConfigurationStatusError(this, 'Error', this.__resources);
  }

}

export class IoTSiteWiseDescribeDefaultEncryptionConfigurationConfigurationStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultEncryptionConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDefaultEncryptionConfiguration.configurationStatus.error.code'),
        outputPath: 'configurationStatus.error.code',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultEncryptionConfiguration.configurationStatus.error.code', props);
    return resource.getResponseField('configurationStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultEncryptionConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeDefaultEncryptionConfiguration.configurationStatus.error.message'),
        outputPath: 'configurationStatus.error.message',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultEncryptionConfiguration.configurationStatus.error.message', props);
    return resource.getResponseField('configurationStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseDescribeGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeGatewayRequest) {
    super(scope, id);
  }

  public get gatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGateway.gatewayId'),
        outputPath: 'gatewayId',
        parameters: {
          gatewayId: this.input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGateway.gatewayId', props);
    return resource.getResponseField('gatewayId') as unknown as string;
  }

  public get gatewayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGateway.gatewayName'),
        outputPath: 'gatewayName',
        parameters: {
          gatewayId: this.input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGateway.gatewayName', props);
    return resource.getResponseField('gatewayName') as unknown as string;
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGateway.gatewayArn'),
        outputPath: 'gatewayArn',
        parameters: {
          gatewayId: this.input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGateway.gatewayArn', props);
    return resource.getResponseField('gatewayArn') as unknown as string;
  }

  public get gatewayPlatform(): IoTSiteWiseDescribeGatewayGatewayPlatform {
    return new IoTSiteWiseDescribeGatewayGatewayPlatform(this, 'GatewayPlatform', this.__resources, this.input);
  }

  public get gatewayCapabilitySummaries(): shapes.IoTSiteWiseGatewayCapabilitySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGateway.gatewayCapabilitySummaries'),
        outputPath: 'gatewayCapabilitySummaries',
        parameters: {
          gatewayId: this.input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGateway.gatewayCapabilitySummaries', props);
    return resource.getResponseField('gatewayCapabilitySummaries') as unknown as shapes.IoTSiteWiseGatewayCapabilitySummary[];
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGateway.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          gatewayId: this.input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGateway.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastUpdateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGateway.lastUpdateDate'),
        outputPath: 'lastUpdateDate',
        parameters: {
          gatewayId: this.input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGateway.lastUpdateDate', props);
    return resource.getResponseField('lastUpdateDate') as unknown as string;
  }

}

export class IoTSiteWiseDescribeGatewayGatewayPlatform extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeGatewayRequest) {
    super(scope, id);
  }

  public get greengrass(): IoTSiteWiseDescribeGatewayGatewayPlatformGreengrass {
    return new IoTSiteWiseDescribeGatewayGatewayPlatformGreengrass(this, 'Greengrass', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribeGatewayGatewayPlatformGreengrass extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeGatewayRequest) {
    super(scope, id);
  }

  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGateway',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGateway.gatewayPlatform.greengrass.groupArn'),
        outputPath: 'gatewayPlatform.greengrass.groupArn',
        parameters: {
          gatewayId: this.input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGateway.gatewayPlatform.greengrass.groupArn', props);
    return resource.getResponseField('gatewayPlatform.greengrass.groupArn') as unknown as string;
  }

}

export class IoTSiteWiseDescribeGatewayCapabilityConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest) {
    super(scope, id);
  }

  public get gatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayCapabilityConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGatewayCapabilityConfiguration.gatewayId'),
        outputPath: 'gatewayId',
        parameters: {
          gatewayId: this.input.gatewayId,
          capabilityNamespace: this.input.capabilityNamespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayCapabilityConfiguration.gatewayId', props);
    return resource.getResponseField('gatewayId') as unknown as string;
  }

  public get capabilityNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayCapabilityConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGatewayCapabilityConfiguration.capabilityNamespace'),
        outputPath: 'capabilityNamespace',
        parameters: {
          gatewayId: this.input.gatewayId,
          capabilityNamespace: this.input.capabilityNamespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayCapabilityConfiguration.capabilityNamespace', props);
    return resource.getResponseField('capabilityNamespace') as unknown as string;
  }

  public get capabilityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayCapabilityConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGatewayCapabilityConfiguration.capabilityConfiguration'),
        outputPath: 'capabilityConfiguration',
        parameters: {
          gatewayId: this.input.gatewayId,
          capabilityNamespace: this.input.capabilityNamespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayCapabilityConfiguration.capabilityConfiguration', props);
    return resource.getResponseField('capabilityConfiguration') as unknown as string;
  }

  public get capabilitySyncStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayCapabilityConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeGatewayCapabilityConfiguration.capabilitySyncStatus'),
        outputPath: 'capabilitySyncStatus',
        parameters: {
          gatewayId: this.input.gatewayId,
          capabilityNamespace: this.input.capabilityNamespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayCapabilityConfiguration.capabilitySyncStatus', props);
    return resource.getResponseField('capabilitySyncStatus') as unknown as string;
  }

}

export class IoTSiteWiseDescribeLoggingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get loggingOptions(): IoTSiteWiseDescribeLoggingOptionsLoggingOptions {
    return new IoTSiteWiseDescribeLoggingOptionsLoggingOptions(this, 'LoggingOptions', this.__resources);
  }

}

export class IoTSiteWiseDescribeLoggingOptionsLoggingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get level(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoggingOptions',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeLoggingOptions.loggingOptions.level'),
        outputPath: 'loggingOptions.level',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoggingOptions.loggingOptions.level', props);
    return resource.getResponseField('loggingOptions.level') as unknown as string;
  }

}

export class IoTSiteWiseDescribePortal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribePortalRequest) {
    super(scope, id);
  }

  public get portalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalId'),
        outputPath: 'portalId',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalId', props);
    return resource.getResponseField('portalId') as unknown as string;
  }

  public get portalArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalArn'),
        outputPath: 'portalArn',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalArn', props);
    return resource.getResponseField('portalArn') as unknown as string;
  }

  public get portalName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalName'),
        outputPath: 'portalName',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalName', props);
    return resource.getResponseField('portalName') as unknown as string;
  }

  public get portalDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalDescription'),
        outputPath: 'portalDescription',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalDescription', props);
    return resource.getResponseField('portalDescription') as unknown as string;
  }

  public get portalClientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalClientId'),
        outputPath: 'portalClientId',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalClientId', props);
    return resource.getResponseField('portalClientId') as unknown as string;
  }

  public get portalStartUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalStartUrl'),
        outputPath: 'portalStartUrl',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalStartUrl', props);
    return resource.getResponseField('portalStartUrl') as unknown as string;
  }

  public get portalContactEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalContactEmail'),
        outputPath: 'portalContactEmail',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalContactEmail', props);
    return resource.getResponseField('portalContactEmail') as unknown as string;
  }

  public get portalStatus(): IoTSiteWiseDescribePortalPortalStatus {
    return new IoTSiteWiseDescribePortalPortalStatus(this, 'PortalStatus', this.__resources, this.input);
  }

  public get portalCreationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalCreationDate'),
        outputPath: 'portalCreationDate',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalCreationDate', props);
    return resource.getResponseField('portalCreationDate') as unknown as string;
  }

  public get portalLastUpdateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalLastUpdateDate'),
        outputPath: 'portalLastUpdateDate',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalLastUpdateDate', props);
    return resource.getResponseField('portalLastUpdateDate') as unknown as string;
  }

  public get portalLogoImageLocation(): IoTSiteWiseDescribePortalPortalLogoImageLocation {
    return new IoTSiteWiseDescribePortalPortalLogoImageLocation(this, 'PortalLogoImageLocation', this.__resources, this.input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.roleArn'),
        outputPath: 'roleArn',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.roleArn', props);
    return resource.getResponseField('roleArn') as unknown as string;
  }

  public get portalAuthMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalAuthMode'),
        outputPath: 'portalAuthMode',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalAuthMode', props);
    return resource.getResponseField('portalAuthMode') as unknown as string;
  }

}

export class IoTSiteWiseDescribePortalPortalStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribePortalRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalStatus.state'),
        outputPath: 'portalStatus.state',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalStatus.state', props);
    return resource.getResponseField('portalStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseDescribePortalPortalStatusError {
    return new IoTSiteWiseDescribePortalPortalStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseDescribePortalPortalStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribePortalRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalStatus.error.code'),
        outputPath: 'portalStatus.error.code',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalStatus.error.code', props);
    return resource.getResponseField('portalStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalStatus.error.message'),
        outputPath: 'portalStatus.error.message',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalStatus.error.message', props);
    return resource.getResponseField('portalStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseDescribePortalPortalLogoImageLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribePortalRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalLogoImageLocation.id'),
        outputPath: 'portalLogoImageLocation.id',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalLogoImageLocation.id', props);
    return resource.getResponseField('portalLogoImageLocation.id') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribePortal.portalLogoImageLocation.url'),
        outputPath: 'portalLogoImageLocation.url',
        parameters: {
          portalId: this.input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortal.portalLogoImageLocation.url', props);
    return resource.getResponseField('portalLogoImageLocation.url') as unknown as string;
  }

}

export class IoTSiteWiseDescribeProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseDescribeProjectRequest) {
    super(scope, id);
  }

  public get projectId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeProject.projectId'),
        outputPath: 'projectId',
        parameters: {
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.projectId', props);
    return resource.getResponseField('projectId') as unknown as string;
  }

  public get projectArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeProject.projectArn'),
        outputPath: 'projectArn',
        parameters: {
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.projectArn', props);
    return resource.getResponseField('projectArn') as unknown as string;
  }

  public get projectName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeProject.projectName'),
        outputPath: 'projectName',
        parameters: {
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.projectName', props);
    return resource.getResponseField('projectName') as unknown as string;
  }

  public get portalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeProject.portalId'),
        outputPath: 'portalId',
        parameters: {
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.portalId', props);
    return resource.getResponseField('portalId') as unknown as string;
  }

  public get projectDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeProject.projectDescription'),
        outputPath: 'projectDescription',
        parameters: {
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.projectDescription', props);
    return resource.getResponseField('projectDescription') as unknown as string;
  }

  public get projectCreationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeProject.projectCreationDate'),
        outputPath: 'projectCreationDate',
        parameters: {
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.projectCreationDate', props);
    return resource.getResponseField('projectCreationDate') as unknown as string;
  }

  public get projectLastUpdateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeProject.projectLastUpdateDate'),
        outputPath: 'projectLastUpdateDate',
        parameters: {
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.projectLastUpdateDate', props);
    return resource.getResponseField('projectLastUpdateDate') as unknown as string;
  }

}

export class IoTSiteWiseFetchAssetPropertyAggregates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseGetAssetPropertyAggregatesRequest) {
    super(scope, id);
  }

  public get aggregatedValues(): shapes.IoTSiteWiseAggregatedValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyAggregates',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyAggregates.aggregatedValues'),
        outputPath: 'aggregatedValues',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
          aggregateTypes: this.input.aggregateTypes,
          resolution: this.input.resolution,
          qualities: this.input.qualities,
          startDate: this.input.startDate,
          endDate: this.input.endDate,
          timeOrdering: this.input.timeOrdering,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyAggregates.aggregatedValues', props);
    return resource.getResponseField('aggregatedValues') as unknown as shapes.IoTSiteWiseAggregatedValue[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyAggregates',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyAggregates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
          aggregateTypes: this.input.aggregateTypes,
          resolution: this.input.resolution,
          qualities: this.input.qualities,
          startDate: this.input.startDate,
          endDate: this.input.endDate,
          timeOrdering: this.input.timeOrdering,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyAggregates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseFetchAssetPropertyValue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseGetAssetPropertyValueRequest) {
    super(scope, id);
  }

  public get propertyValue(): IoTSiteWiseFetchAssetPropertyValuePropertyValue {
    return new IoTSiteWiseFetchAssetPropertyValuePropertyValue(this, 'PropertyValue', this.__resources, this.input);
  }

}

export class IoTSiteWiseFetchAssetPropertyValuePropertyValue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseGetAssetPropertyValueRequest) {
    super(scope, id);
  }

  public get value(): IoTSiteWiseFetchAssetPropertyValuePropertyValueValue {
    return new IoTSiteWiseFetchAssetPropertyValuePropertyValueValue(this, 'Value', this.__resources, this.input);
  }

  public get timestamp(): IoTSiteWiseFetchAssetPropertyValuePropertyValueTimestamp {
    return new IoTSiteWiseFetchAssetPropertyValuePropertyValueTimestamp(this, 'Timestamp', this.__resources, this.input);
  }

  public get quality(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyValue',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyValue.propertyValue.quality'),
        outputPath: 'propertyValue.quality',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyValue.propertyValue.quality', props);
    return resource.getResponseField('propertyValue.quality') as unknown as string;
  }

}

export class IoTSiteWiseFetchAssetPropertyValuePropertyValueValue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseGetAssetPropertyValueRequest) {
    super(scope, id);
  }

  public get stringValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyValue',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyValue.propertyValue.value.stringValue'),
        outputPath: 'propertyValue.value.stringValue',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyValue.propertyValue.value.stringValue', props);
    return resource.getResponseField('propertyValue.value.stringValue') as unknown as string;
  }

  public get integerValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyValue',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyValue.propertyValue.value.integerValue'),
        outputPath: 'propertyValue.value.integerValue',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyValue.propertyValue.value.integerValue', props);
    return resource.getResponseField('propertyValue.value.integerValue') as unknown as number;
  }

  public get doubleValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyValue',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyValue.propertyValue.value.doubleValue'),
        outputPath: 'propertyValue.value.doubleValue',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyValue.propertyValue.value.doubleValue', props);
    return resource.getResponseField('propertyValue.value.doubleValue') as unknown as number;
  }

  public get booleanValue(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyValue',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyValue.propertyValue.value.booleanValue'),
        outputPath: 'propertyValue.value.booleanValue',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyValue.propertyValue.value.booleanValue', props);
    return resource.getResponseField('propertyValue.value.booleanValue') as unknown as boolean;
  }

}

export class IoTSiteWiseFetchAssetPropertyValuePropertyValueTimestamp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseGetAssetPropertyValueRequest) {
    super(scope, id);
  }

  public get timeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyValue',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyValue.propertyValue.timestamp.timeInSeconds'),
        outputPath: 'propertyValue.timestamp.timeInSeconds',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyValue.propertyValue.timestamp.timeInSeconds', props);
    return resource.getResponseField('propertyValue.timestamp.timeInSeconds') as unknown as number;
  }

  public get offsetInNanos(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyValue',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyValue.propertyValue.timestamp.offsetInNanos'),
        outputPath: 'propertyValue.timestamp.offsetInNanos',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyValue.propertyValue.timestamp.offsetInNanos', props);
    return resource.getResponseField('propertyValue.timestamp.offsetInNanos') as unknown as number;
  }

}

export class IoTSiteWiseFetchAssetPropertyValueHistory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseGetAssetPropertyValueHistoryRequest) {
    super(scope, id);
  }

  public get assetPropertyValueHistory(): shapes.IoTSiteWiseAssetPropertyValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyValueHistory',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyValueHistory.assetPropertyValueHistory'),
        outputPath: 'assetPropertyValueHistory',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
          startDate: this.input.startDate,
          endDate: this.input.endDate,
          qualities: this.input.qualities,
          timeOrdering: this.input.timeOrdering,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyValueHistory.assetPropertyValueHistory', props);
    return resource.getResponseField('assetPropertyValueHistory') as unknown as shapes.IoTSiteWiseAssetPropertyValue[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssetPropertyValueHistory',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.GetAssetPropertyValueHistory.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assetId: this.input.assetId,
          propertyId: this.input.propertyId,
          propertyAlias: this.input.propertyAlias,
          startDate: this.input.startDate,
          endDate: this.input.endDate,
          qualities: this.input.qualities,
          timeOrdering: this.input.timeOrdering,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssetPropertyValueHistory.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseListAccessPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseListAccessPoliciesRequest) {
    super(scope, id);
  }

  public get accessPolicySummaries(): shapes.IoTSiteWiseAccessPolicySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessPolicies',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListAccessPolicies.accessPolicySummaries'),
        outputPath: 'accessPolicySummaries',
        parameters: {
          identityType: this.input.identityType,
          identityId: this.input.identityId,
          resourceType: this.input.resourceType,
          resourceId: this.input.resourceId,
          iamArn: this.input.iamArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccessPolicies.accessPolicySummaries', props);
    return resource.getResponseField('accessPolicySummaries') as unknown as shapes.IoTSiteWiseAccessPolicySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessPolicies',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListAccessPolicies.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          identityType: this.input.identityType,
          identityId: this.input.identityId,
          resourceType: this.input.resourceType,
          resourceId: this.input.resourceId,
          iamArn: this.input.iamArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccessPolicies.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseListAssetModels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseListAssetModelsRequest) {
    super(scope, id);
  }

  public get assetModelSummaries(): shapes.IoTSiteWiseAssetModelSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssetModels',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListAssetModels.assetModelSummaries'),
        outputPath: 'assetModelSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssetModels.assetModelSummaries', props);
    return resource.getResponseField('assetModelSummaries') as unknown as shapes.IoTSiteWiseAssetModelSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssetModels',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListAssetModels.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssetModels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseListAssets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseListAssetsRequest) {
    super(scope, id);
  }

  public get assetSummaries(): shapes.IoTSiteWiseAssetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssets',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListAssets.assetSummaries'),
        outputPath: 'assetSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          assetModelId: this.input.assetModelId,
          filter: this.input.filter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssets.assetSummaries', props);
    return resource.getResponseField('assetSummaries') as unknown as shapes.IoTSiteWiseAssetSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssets',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListAssets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          assetModelId: this.input.assetModelId,
          filter: this.input.filter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseListAssociatedAssets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseListAssociatedAssetsRequest) {
    super(scope, id);
  }

  public get assetSummaries(): shapes.IoTSiteWiseAssociatedAssetsSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedAssets',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListAssociatedAssets.assetSummaries'),
        outputPath: 'assetSummaries',
        parameters: {
          assetId: this.input.assetId,
          hierarchyId: this.input.hierarchyId,
          traversalDirection: this.input.traversalDirection,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedAssets.assetSummaries', props);
    return resource.getResponseField('assetSummaries') as unknown as shapes.IoTSiteWiseAssociatedAssetsSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedAssets',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListAssociatedAssets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assetId: this.input.assetId,
          hierarchyId: this.input.hierarchyId,
          traversalDirection: this.input.traversalDirection,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedAssets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseListDashboards extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseListDashboardsRequest) {
    super(scope, id);
  }

  public get dashboardSummaries(): shapes.IoTSiteWiseDashboardSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDashboards',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListDashboards.dashboardSummaries'),
        outputPath: 'dashboardSummaries',
        parameters: {
          projectId: this.input.projectId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDashboards.dashboardSummaries', props);
    return resource.getResponseField('dashboardSummaries') as unknown as shapes.IoTSiteWiseDashboardSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDashboards',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListDashboards.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          projectId: this.input.projectId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDashboards.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseListGateways extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseListGatewaysRequest) {
    super(scope, id);
  }

  public get gatewaySummaries(): shapes.IoTSiteWiseGatewaySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGateways',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListGateways.gatewaySummaries'),
        outputPath: 'gatewaySummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGateways.gatewaySummaries', props);
    return resource.getResponseField('gatewaySummaries') as unknown as shapes.IoTSiteWiseGatewaySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGateways',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListGateways.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGateways.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseListPortals extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseListPortalsRequest) {
    super(scope, id);
  }

  public get portalSummaries(): shapes.IoTSiteWisePortalSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPortals',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListPortals.portalSummaries'),
        outputPath: 'portalSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPortals.portalSummaries', props);
    return resource.getResponseField('portalSummaries') as unknown as shapes.IoTSiteWisePortalSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPortals',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListPortals.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPortals.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseListProjectAssets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseListProjectAssetsRequest) {
    super(scope, id);
  }

  public get assetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjectAssets',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListProjectAssets.assetIds'),
        outputPath: 'assetIds',
        parameters: {
          projectId: this.input.projectId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjectAssets.assetIds', props);
    return resource.getResponseField('assetIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjectAssets',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListProjectAssets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          projectId: this.input.projectId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjectAssets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseListProjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseListProjectsRequest) {
    super(scope, id);
  }

  public get projectSummaries(): shapes.IoTSiteWiseProjectSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListProjects.projectSummaries'),
        outputPath: 'projectSummaries',
        parameters: {
          portalId: this.input.portalId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.projectSummaries', props);
    return resource.getResponseField('projectSummaries') as unknown as shapes.IoTSiteWiseProjectSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListProjects.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          portalId: this.input.portalId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.ListTagsForResource.tags'),
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

export class IoTSiteWisePutDefaultEncryptionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWisePutDefaultEncryptionConfigurationRequest) {
    super(scope, id);
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDefaultEncryptionConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.PutDefaultEncryptionConfiguration.encryptionType'),
        outputPath: 'encryptionType',
        parameters: {
          encryptionType: this.input.encryptionType,
          kmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutDefaultEncryptionConfiguration.encryptionType', props);
    return resource.getResponseField('encryptionType') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDefaultEncryptionConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.PutDefaultEncryptionConfiguration.kmsKeyArn'),
        outputPath: 'kmsKeyArn',
        parameters: {
          encryptionType: this.input.encryptionType,
          kmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutDefaultEncryptionConfiguration.kmsKeyArn', props);
    return resource.getResponseField('kmsKeyArn') as unknown as string;
  }

  public get configurationStatus(): IoTSiteWisePutDefaultEncryptionConfigurationConfigurationStatus {
    return new IoTSiteWisePutDefaultEncryptionConfigurationConfigurationStatus(this, 'ConfigurationStatus', this.__resources, this.input);
  }

}

export class IoTSiteWisePutDefaultEncryptionConfigurationConfigurationStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWisePutDefaultEncryptionConfigurationRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDefaultEncryptionConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.PutDefaultEncryptionConfiguration.configurationStatus.state'),
        outputPath: 'configurationStatus.state',
        parameters: {
          encryptionType: this.input.encryptionType,
          kmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutDefaultEncryptionConfiguration.configurationStatus.state', props);
    return resource.getResponseField('configurationStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWisePutDefaultEncryptionConfigurationConfigurationStatusError {
    return new IoTSiteWisePutDefaultEncryptionConfigurationConfigurationStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWisePutDefaultEncryptionConfigurationConfigurationStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWisePutDefaultEncryptionConfigurationRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDefaultEncryptionConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.PutDefaultEncryptionConfiguration.configurationStatus.error.code'),
        outputPath: 'configurationStatus.error.code',
        parameters: {
          encryptionType: this.input.encryptionType,
          kmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutDefaultEncryptionConfiguration.configurationStatus.error.code', props);
    return resource.getResponseField('configurationStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDefaultEncryptionConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.PutDefaultEncryptionConfiguration.configurationStatus.error.message'),
        outputPath: 'configurationStatus.error.message',
        parameters: {
          encryptionType: this.input.encryptionType,
          kmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutDefaultEncryptionConfiguration.configurationStatus.error.message', props);
    return resource.getResponseField('configurationStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseUpdateAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseUpdateAssetRequest) {
    super(scope, id);
  }

  public get assetStatus(): IoTSiteWiseUpdateAssetAssetStatus {
    return new IoTSiteWiseUpdateAssetAssetStatus(this, 'AssetStatus', this.__resources, this.input);
  }

}

export class IoTSiteWiseUpdateAssetAssetStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseUpdateAssetRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateAsset.assetStatus.state'),
        outputPath: 'assetStatus.state',
        parameters: {
          assetId: this.input.assetId,
          assetName: this.input.assetName,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.assetStatus.state', props);
    return resource.getResponseField('assetStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseUpdateAssetAssetStatusError {
    return new IoTSiteWiseUpdateAssetAssetStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseUpdateAssetAssetStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseUpdateAssetRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateAsset.assetStatus.error.code'),
        outputPath: 'assetStatus.error.code',
        parameters: {
          assetId: this.input.assetId,
          assetName: this.input.assetName,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.assetStatus.error.code', props);
    return resource.getResponseField('assetStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateAsset.assetStatus.error.message'),
        outputPath: 'assetStatus.error.message',
        parameters: {
          assetId: this.input.assetId,
          assetName: this.input.assetName,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.assetStatus.error.message', props);
    return resource.getResponseField('assetStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseUpdateAssetModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseUpdateAssetModelRequest) {
    super(scope, id);
  }

  public get assetModelStatus(): IoTSiteWiseUpdateAssetModelAssetModelStatus {
    return new IoTSiteWiseUpdateAssetModelAssetModelStatus(this, 'AssetModelStatus', this.__resources, this.input);
  }

}

export class IoTSiteWiseUpdateAssetModelAssetModelStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseUpdateAssetModelRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateAssetModel.assetModelStatus.state'),
        outputPath: 'assetModelStatus.state',
        parameters: {
          assetModelId: this.input.assetModelId,
          assetModelName: this.input.assetModelName,
          assetModelDescription: this.input.assetModelDescription,
          assetModelProperties: this.input.assetModelProperties,
          assetModelHierarchies: this.input.assetModelHierarchies,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssetModel.assetModelStatus.state', props);
    return resource.getResponseField('assetModelStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseUpdateAssetModelAssetModelStatusError {
    return new IoTSiteWiseUpdateAssetModelAssetModelStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseUpdateAssetModelAssetModelStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseUpdateAssetModelRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateAssetModel.assetModelStatus.error.code'),
        outputPath: 'assetModelStatus.error.code',
        parameters: {
          assetModelId: this.input.assetModelId,
          assetModelName: this.input.assetModelName,
          assetModelDescription: this.input.assetModelDescription,
          assetModelProperties: this.input.assetModelProperties,
          assetModelHierarchies: this.input.assetModelHierarchies,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssetModel.assetModelStatus.error.code', props);
    return resource.getResponseField('assetModelStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssetModel',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateAssetModel.assetModelStatus.error.message'),
        outputPath: 'assetModelStatus.error.message',
        parameters: {
          assetModelId: this.input.assetModelId,
          assetModelName: this.input.assetModelName,
          assetModelDescription: this.input.assetModelDescription,
          assetModelProperties: this.input.assetModelProperties,
          assetModelHierarchies: this.input.assetModelHierarchies,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssetModel.assetModelStatus.error.message', props);
    return resource.getResponseField('assetModelStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseUpdateGatewayCapabilityConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest) {
    super(scope, id);
  }

  public get capabilityNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewayCapabilityConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateGatewayCapabilityConfiguration.capabilityNamespace'),
        outputPath: 'capabilityNamespace',
        parameters: {
          gatewayId: this.input.gatewayId,
          capabilityNamespace: this.input.capabilityNamespace,
          capabilityConfiguration: this.input.capabilityConfiguration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGatewayCapabilityConfiguration.capabilityNamespace', props);
    return resource.getResponseField('capabilityNamespace') as unknown as string;
  }

  public get capabilitySyncStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewayCapabilityConfiguration',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdateGatewayCapabilityConfiguration.capabilitySyncStatus'),
        outputPath: 'capabilitySyncStatus',
        parameters: {
          gatewayId: this.input.gatewayId,
          capabilityNamespace: this.input.capabilityNamespace,
          capabilityConfiguration: this.input.capabilityConfiguration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGatewayCapabilityConfiguration.capabilitySyncStatus', props);
    return resource.getResponseField('capabilitySyncStatus') as unknown as string;
  }

}

export class IoTSiteWiseUpdatePortal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseUpdatePortalRequest) {
    super(scope, id);
  }

  public get portalStatus(): IoTSiteWiseUpdatePortalPortalStatus {
    return new IoTSiteWiseUpdatePortalPortalStatus(this, 'PortalStatus', this.__resources, this.input);
  }

}

export class IoTSiteWiseUpdatePortalPortalStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseUpdatePortalRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdatePortal.portalStatus.state'),
        outputPath: 'portalStatus.state',
        parameters: {
          portalId: this.input.portalId,
          portalName: this.input.portalName,
          portalDescription: this.input.portalDescription,
          portalContactEmail: this.input.portalContactEmail,
          portalLogoImage: {
            id: this.input.portalLogoImage?.id,
            file: {
              data: {
              },
              type: this.input.portalLogoImage?.file?.type,
            },
          },
          roleArn: this.input.roleArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePortal.portalStatus.state', props);
    return resource.getResponseField('portalStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseUpdatePortalPortalStatusError {
    return new IoTSiteWiseUpdatePortalPortalStatusError(this, 'Error', this.__resources, this.input);
  }

}

export class IoTSiteWiseUpdatePortalPortalStatusError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSiteWiseUpdatePortalRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdatePortal.portalStatus.error.code'),
        outputPath: 'portalStatus.error.code',
        parameters: {
          portalId: this.input.portalId,
          portalName: this.input.portalName,
          portalDescription: this.input.portalDescription,
          portalContactEmail: this.input.portalContactEmail,
          portalLogoImage: {
            id: this.input.portalLogoImage?.id,
            file: {
              data: {
              },
              type: this.input.portalLogoImage?.file?.type,
            },
          },
          roleArn: this.input.roleArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePortal.portalStatus.error.code', props);
    return resource.getResponseField('portalStatus.error.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortal',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.UpdatePortal.portalStatus.error.message'),
        outputPath: 'portalStatus.error.message',
        parameters: {
          portalId: this.input.portalId,
          portalName: this.input.portalName,
          portalDescription: this.input.portalDescription,
          portalContactEmail: this.input.portalContactEmail,
          portalLogoImage: {
            id: this.input.portalLogoImage?.id,
            file: {
              data: {
              },
              type: this.input.portalLogoImage?.file?.type,
            },
          },
          roleArn: this.input.roleArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePortal.portalStatus.error.message', props);
    return resource.getResponseField('portalStatus.error.message') as unknown as string;
  }

}

