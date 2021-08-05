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

  public batchAssociateProjectAssets(input: shapes.IoTSiteWiseBatchAssociateProjectAssetsRequest): IoTSiteWiseResponsesBatchAssociateProjectAssets {
    return new IoTSiteWiseResponsesBatchAssociateProjectAssets(this, this.__resources, input);
  }

  public batchDisassociateProjectAssets(input: shapes.IoTSiteWiseBatchDisassociateProjectAssetsRequest): IoTSiteWiseResponsesBatchDisassociateProjectAssets {
    return new IoTSiteWiseResponsesBatchDisassociateProjectAssets(this, this.__resources, input);
  }

  public batchPutAssetPropertyValue(input: shapes.IoTSiteWiseBatchPutAssetPropertyValueRequest): IoTSiteWiseResponsesBatchPutAssetPropertyValue {
    return new IoTSiteWiseResponsesBatchPutAssetPropertyValue(this, this.__resources, input);
  }

  public createAccessPolicy(input: shapes.IoTSiteWiseCreateAccessPolicyRequest): IoTSiteWiseResponsesCreateAccessPolicy {
    return new IoTSiteWiseResponsesCreateAccessPolicy(this, this.__resources, input);
  }

  public createAsset(input: shapes.IoTSiteWiseCreateAssetRequest): IoTSiteWiseResponsesCreateAsset {
    return new IoTSiteWiseResponsesCreateAsset(this, this.__resources, input);
  }

  public createAssetModel(input: shapes.IoTSiteWiseCreateAssetModelRequest): IoTSiteWiseResponsesCreateAssetModel {
    return new IoTSiteWiseResponsesCreateAssetModel(this, this.__resources, input);
  }

  public createDashboard(input: shapes.IoTSiteWiseCreateDashboardRequest): IoTSiteWiseResponsesCreateDashboard {
    return new IoTSiteWiseResponsesCreateDashboard(this, this.__resources, input);
  }

  public createGateway(input: shapes.IoTSiteWiseCreateGatewayRequest): IoTSiteWiseResponsesCreateGateway {
    return new IoTSiteWiseResponsesCreateGateway(this, this.__resources, input);
  }

  public createPortal(input: shapes.IoTSiteWiseCreatePortalRequest): IoTSiteWiseResponsesCreatePortal {
    return new IoTSiteWiseResponsesCreatePortal(this, this.__resources, input);
  }

  public createPresignedPortalUrl(input: shapes.IoTSiteWiseCreatePresignedPortalUrlRequest): IoTSiteWiseResponsesCreatePresignedPortalUrl {
    return new IoTSiteWiseResponsesCreatePresignedPortalUrl(this, this.__resources, input);
  }

  public createProject(input: shapes.IoTSiteWiseCreateProjectRequest): IoTSiteWiseResponsesCreateProject {
    return new IoTSiteWiseResponsesCreateProject(this, this.__resources, input);
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

  public deleteAsset(input: shapes.IoTSiteWiseDeleteAssetRequest): IoTSiteWiseResponsesDeleteAsset {
    return new IoTSiteWiseResponsesDeleteAsset(this, this.__resources, input);
  }

  public deleteAssetModel(input: shapes.IoTSiteWiseDeleteAssetModelRequest): IoTSiteWiseResponsesDeleteAssetModel {
    return new IoTSiteWiseResponsesDeleteAssetModel(this, this.__resources, input);
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

  public deletePortal(input: shapes.IoTSiteWiseDeletePortalRequest): IoTSiteWiseResponsesDeletePortal {
    return new IoTSiteWiseResponsesDeletePortal(this, this.__resources, input);
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

  public describeAccessPolicy(input: shapes.IoTSiteWiseDescribeAccessPolicyRequest): IoTSiteWiseResponsesDescribeAccessPolicy {
    return new IoTSiteWiseResponsesDescribeAccessPolicy(this, this.__resources, input);
  }

  public describeAsset(input: shapes.IoTSiteWiseDescribeAssetRequest): IoTSiteWiseResponsesDescribeAsset {
    return new IoTSiteWiseResponsesDescribeAsset(this, this.__resources, input);
  }

  public describeAssetModel(input: shapes.IoTSiteWiseDescribeAssetModelRequest): IoTSiteWiseResponsesDescribeAssetModel {
    return new IoTSiteWiseResponsesDescribeAssetModel(this, this.__resources, input);
  }

  public describeAssetProperty(input: shapes.IoTSiteWiseDescribeAssetPropertyRequest): IoTSiteWiseResponsesDescribeAssetProperty {
    return new IoTSiteWiseResponsesDescribeAssetProperty(this, this.__resources, input);
  }

  public describeDashboard(input: shapes.IoTSiteWiseDescribeDashboardRequest): IoTSiteWiseResponsesDescribeDashboard {
    return new IoTSiteWiseResponsesDescribeDashboard(this, this.__resources, input);
  }

  public describeDefaultEncryptionConfiguration(): IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration {
    return new IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration(this, this.__resources);
  }

  public describeGateway(input: shapes.IoTSiteWiseDescribeGatewayRequest): IoTSiteWiseResponsesDescribeGateway {
    return new IoTSiteWiseResponsesDescribeGateway(this, this.__resources, input);
  }

  public describeGatewayCapabilityConfiguration(input: shapes.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest): IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration {
    return new IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration(this, this.__resources, input);
  }

  public describeLoggingOptions(): IoTSiteWiseResponsesDescribeLoggingOptions {
    return new IoTSiteWiseResponsesDescribeLoggingOptions(this, this.__resources);
  }

  public describePortal(input: shapes.IoTSiteWiseDescribePortalRequest): IoTSiteWiseResponsesDescribePortal {
    return new IoTSiteWiseResponsesDescribePortal(this, this.__resources, input);
  }

  public describeProject(input: shapes.IoTSiteWiseDescribeProjectRequest): IoTSiteWiseResponsesDescribeProject {
    return new IoTSiteWiseResponsesDescribeProject(this, this.__resources, input);
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

  public fetchAssetPropertyAggregates(input: shapes.IoTSiteWiseGetAssetPropertyAggregatesRequest): IoTSiteWiseResponsesFetchAssetPropertyAggregates {
    return new IoTSiteWiseResponsesFetchAssetPropertyAggregates(this, this.__resources, input);
  }

  public fetchAssetPropertyValue(input: shapes.IoTSiteWiseGetAssetPropertyValueRequest): IoTSiteWiseResponsesFetchAssetPropertyValue {
    return new IoTSiteWiseResponsesFetchAssetPropertyValue(this, this.__resources, input);
  }

  public fetchAssetPropertyValueHistory(input: shapes.IoTSiteWiseGetAssetPropertyValueHistoryRequest): IoTSiteWiseResponsesFetchAssetPropertyValueHistory {
    return new IoTSiteWiseResponsesFetchAssetPropertyValueHistory(this, this.__resources, input);
  }

  public listAccessPolicies(input: shapes.IoTSiteWiseListAccessPoliciesRequest): IoTSiteWiseResponsesListAccessPolicies {
    return new IoTSiteWiseResponsesListAccessPolicies(this, this.__resources, input);
  }

  public listAssetModels(input: shapes.IoTSiteWiseListAssetModelsRequest): IoTSiteWiseResponsesListAssetModels {
    return new IoTSiteWiseResponsesListAssetModels(this, this.__resources, input);
  }

  public listAssets(input: shapes.IoTSiteWiseListAssetsRequest): IoTSiteWiseResponsesListAssets {
    return new IoTSiteWiseResponsesListAssets(this, this.__resources, input);
  }

  public listAssociatedAssets(input: shapes.IoTSiteWiseListAssociatedAssetsRequest): IoTSiteWiseResponsesListAssociatedAssets {
    return new IoTSiteWiseResponsesListAssociatedAssets(this, this.__resources, input);
  }

  public listDashboards(input: shapes.IoTSiteWiseListDashboardsRequest): IoTSiteWiseResponsesListDashboards {
    return new IoTSiteWiseResponsesListDashboards(this, this.__resources, input);
  }

  public listGateways(input: shapes.IoTSiteWiseListGatewaysRequest): IoTSiteWiseResponsesListGateways {
    return new IoTSiteWiseResponsesListGateways(this, this.__resources, input);
  }

  public listPortals(input: shapes.IoTSiteWiseListPortalsRequest): IoTSiteWiseResponsesListPortals {
    return new IoTSiteWiseResponsesListPortals(this, this.__resources, input);
  }

  public listProjectAssets(input: shapes.IoTSiteWiseListProjectAssetsRequest): IoTSiteWiseResponsesListProjectAssets {
    return new IoTSiteWiseResponsesListProjectAssets(this, this.__resources, input);
  }

  public listProjects(input: shapes.IoTSiteWiseListProjectsRequest): IoTSiteWiseResponsesListProjects {
    return new IoTSiteWiseResponsesListProjects(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTSiteWiseListTagsForResourceRequest): IoTSiteWiseResponsesListTagsForResource {
    return new IoTSiteWiseResponsesListTagsForResource(this, this.__resources, input);
  }

  public putDefaultEncryptionConfiguration(input: shapes.IoTSiteWisePutDefaultEncryptionConfigurationRequest): IoTSiteWiseResponsesPutDefaultEncryptionConfiguration {
    return new IoTSiteWiseResponsesPutDefaultEncryptionConfiguration(this, this.__resources, input);
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

  public updateAsset(input: shapes.IoTSiteWiseUpdateAssetRequest): IoTSiteWiseResponsesUpdateAsset {
    return new IoTSiteWiseResponsesUpdateAsset(this, this.__resources, input);
  }

  public updateAssetModel(input: shapes.IoTSiteWiseUpdateAssetModelRequest): IoTSiteWiseResponsesUpdateAssetModel {
    return new IoTSiteWiseResponsesUpdateAssetModel(this, this.__resources, input);
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

  public updateGatewayCapabilityConfiguration(input: shapes.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest): IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration {
    return new IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration(this, this.__resources, input);
  }

  public updatePortal(input: shapes.IoTSiteWiseUpdatePortalRequest): IoTSiteWiseResponsesUpdatePortal {
    return new IoTSiteWiseResponsesUpdatePortal(this, this.__resources, input);
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

export class IoTSiteWiseResponsesBatchAssociateProjectAssets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseBatchAssociateProjectAssetsRequest) {
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
          projectId: this.__input.projectId,
          assetIds: this.__input.assetIds,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAssociateProjectAssets.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.IoTSiteWiseAssetErrorDetails[];
  }

}

export class IoTSiteWiseResponsesBatchDisassociateProjectAssets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseBatchDisassociateProjectAssetsRequest) {
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
          projectId: this.__input.projectId,
          assetIds: this.__input.assetIds,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisassociateProjectAssets.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.IoTSiteWiseAssetErrorDetails[];
  }

}

export class IoTSiteWiseResponsesBatchPutAssetPropertyValue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseBatchPutAssetPropertyValueRequest) {
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
          entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchPutAssetPropertyValue.errorEntries', props);
    return resource.getResponseField('errorEntries') as unknown as shapes.IoTSiteWiseBatchPutAssetPropertyErrorEntry[];
  }

}

export class IoTSiteWiseResponsesCreateAccessPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreateAccessPolicyRequest) {
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
              id: this.__input.accessPolicyIdentity.user?.id,
            },
            group: {
              id: this.__input.accessPolicyIdentity.group?.id,
            },
            iamUser: {
              arn: this.__input.accessPolicyIdentity.iamUser?.arn,
            },
          },
          accessPolicyResource: {
            portal: {
              id: this.__input.accessPolicyResource.portal?.id,
            },
            project: {
              id: this.__input.accessPolicyResource.project?.id,
            },
          },
          accessPolicyPermission: this.__input.accessPolicyPermission,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessPolicy.accessPolicyId', props);
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
              id: this.__input.accessPolicyIdentity.user?.id,
            },
            group: {
              id: this.__input.accessPolicyIdentity.group?.id,
            },
            iamUser: {
              arn: this.__input.accessPolicyIdentity.iamUser?.arn,
            },
          },
          accessPolicyResource: {
            portal: {
              id: this.__input.accessPolicyResource.portal?.id,
            },
            project: {
              id: this.__input.accessPolicyResource.project?.id,
            },
          },
          accessPolicyPermission: this.__input.accessPolicyPermission,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessPolicy.accessPolicyArn', props);
    return resource.getResponseField('accessPolicyArn') as unknown as string;
  }

}

export class IoTSiteWiseResponsesCreateAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreateAssetRequest) {
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
          assetName: this.__input.assetName,
          assetModelId: this.__input.assetModelId,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.assetId', props);
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
          assetName: this.__input.assetName,
          assetModelId: this.__input.assetModelId,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.assetArn', props);
    return resource.getResponseField('assetArn') as unknown as string;
  }

  public get assetStatus(): IoTSiteWiseResponsesCreateAssetAssetStatus {
    return new IoTSiteWiseResponsesCreateAssetAssetStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesCreateAssetAssetStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreateAssetRequest) {
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
          assetName: this.__input.assetName,
          assetModelId: this.__input.assetModelId,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.assetStatus.state', props);
    return resource.getResponseField('assetStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesCreateAssetAssetStatusError {
    return new IoTSiteWiseResponsesCreateAssetAssetStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesCreateAssetAssetStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreateAssetRequest) {
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
          assetName: this.__input.assetName,
          assetModelId: this.__input.assetModelId,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.assetStatus.error.code', props);
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
          assetName: this.__input.assetName,
          assetModelId: this.__input.assetModelId,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAsset.assetStatus.error.message', props);
    return resource.getResponseField('assetStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesCreateAssetModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreateAssetModelRequest) {
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
          assetModelName: this.__input.assetModelName,
          assetModelDescription: this.__input.assetModelDescription,
          assetModelProperties: this.__input.assetModelProperties,
          assetModelHierarchies: this.__input.assetModelHierarchies,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssetModel.assetModelId', props);
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
          assetModelName: this.__input.assetModelName,
          assetModelDescription: this.__input.assetModelDescription,
          assetModelProperties: this.__input.assetModelProperties,
          assetModelHierarchies: this.__input.assetModelHierarchies,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssetModel.assetModelArn', props);
    return resource.getResponseField('assetModelArn') as unknown as string;
  }

  public get assetModelStatus(): IoTSiteWiseResponsesCreateAssetModelAssetModelStatus {
    return new IoTSiteWiseResponsesCreateAssetModelAssetModelStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesCreateAssetModelAssetModelStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreateAssetModelRequest) {
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
          assetModelName: this.__input.assetModelName,
          assetModelDescription: this.__input.assetModelDescription,
          assetModelProperties: this.__input.assetModelProperties,
          assetModelHierarchies: this.__input.assetModelHierarchies,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssetModel.assetModelStatus.state', props);
    return resource.getResponseField('assetModelStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError {
    return new IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreateAssetModelRequest) {
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
          assetModelName: this.__input.assetModelName,
          assetModelDescription: this.__input.assetModelDescription,
          assetModelProperties: this.__input.assetModelProperties,
          assetModelHierarchies: this.__input.assetModelHierarchies,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssetModel.assetModelStatus.error.code', props);
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
          assetModelName: this.__input.assetModelName,
          assetModelDescription: this.__input.assetModelDescription,
          assetModelProperties: this.__input.assetModelProperties,
          assetModelHierarchies: this.__input.assetModelHierarchies,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssetModel.assetModelStatus.error.message', props);
    return resource.getResponseField('assetModelStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesCreateDashboard {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreateDashboardRequest) {
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
          projectId: this.__input.projectId,
          dashboardName: this.__input.dashboardName,
          dashboardDescription: this.__input.dashboardDescription,
          dashboardDefinition: this.__input.dashboardDefinition,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDashboard.dashboardId', props);
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
          projectId: this.__input.projectId,
          dashboardName: this.__input.dashboardName,
          dashboardDescription: this.__input.dashboardDescription,
          dashboardDefinition: this.__input.dashboardDefinition,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDashboard.dashboardArn', props);
    return resource.getResponseField('dashboardArn') as unknown as string;
  }

}

export class IoTSiteWiseResponsesCreateGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreateGatewayRequest) {
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
          gatewayName: this.__input.gatewayName,
          gatewayPlatform: {
            greengrass: {
              groupArn: this.__input.gatewayPlatform.greengrass.groupArn,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGateway.gatewayId', props);
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
          gatewayName: this.__input.gatewayName,
          gatewayPlatform: {
            greengrass: {
              groupArn: this.__input.gatewayPlatform.greengrass.groupArn,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGateway.gatewayArn', props);
    return resource.getResponseField('gatewayArn') as unknown as string;
  }

}

export class IoTSiteWiseResponsesCreatePortal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreatePortalRequest) {
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
          portalName: this.__input.portalName,
          portalDescription: this.__input.portalDescription,
          portalContactEmail: this.__input.portalContactEmail,
          clientToken: this.__input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.__input.portalLogoImageFile?.type,
          },
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          portalAuthMode: this.__input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortal.portalId', props);
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
          portalName: this.__input.portalName,
          portalDescription: this.__input.portalDescription,
          portalContactEmail: this.__input.portalContactEmail,
          clientToken: this.__input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.__input.portalLogoImageFile?.type,
          },
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          portalAuthMode: this.__input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortal.portalArn', props);
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
          portalName: this.__input.portalName,
          portalDescription: this.__input.portalDescription,
          portalContactEmail: this.__input.portalContactEmail,
          clientToken: this.__input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.__input.portalLogoImageFile?.type,
          },
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          portalAuthMode: this.__input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortal.portalStartUrl', props);
    return resource.getResponseField('portalStartUrl') as unknown as string;
  }

  public get portalStatus(): IoTSiteWiseResponsesCreatePortalPortalStatus {
    return new IoTSiteWiseResponsesCreatePortalPortalStatus(this.__scope, this.__resources, this.__input);
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
          portalName: this.__input.portalName,
          portalDescription: this.__input.portalDescription,
          portalContactEmail: this.__input.portalContactEmail,
          clientToken: this.__input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.__input.portalLogoImageFile?.type,
          },
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          portalAuthMode: this.__input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortal.ssoApplicationId', props);
    return resource.getResponseField('ssoApplicationId') as unknown as string;
  }

}

export class IoTSiteWiseResponsesCreatePortalPortalStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreatePortalRequest) {
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
          portalName: this.__input.portalName,
          portalDescription: this.__input.portalDescription,
          portalContactEmail: this.__input.portalContactEmail,
          clientToken: this.__input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.__input.portalLogoImageFile?.type,
          },
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          portalAuthMode: this.__input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortal.portalStatus.state', props);
    return resource.getResponseField('portalStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesCreatePortalPortalStatusError {
    return new IoTSiteWiseResponsesCreatePortalPortalStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesCreatePortalPortalStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreatePortalRequest) {
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
          portalName: this.__input.portalName,
          portalDescription: this.__input.portalDescription,
          portalContactEmail: this.__input.portalContactEmail,
          clientToken: this.__input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.__input.portalLogoImageFile?.type,
          },
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          portalAuthMode: this.__input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortal.portalStatus.error.code', props);
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
          portalName: this.__input.portalName,
          portalDescription: this.__input.portalDescription,
          portalContactEmail: this.__input.portalContactEmail,
          clientToken: this.__input.clientToken,
          portalLogoImageFile: {
            data: {
            },
            type: this.__input.portalLogoImageFile?.type,
          },
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          portalAuthMode: this.__input.portalAuthMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortal.portalStatus.error.message', props);
    return resource.getResponseField('portalStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesCreatePresignedPortalUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreatePresignedPortalUrlRequest) {
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
          portalId: this.__input.portalId,
          sessionDurationSeconds: this.__input.sessionDurationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePresignedPortalUrl.presignedPortalUrl', props);
    return resource.getResponseField('presignedPortalUrl') as unknown as string;
  }

}

export class IoTSiteWiseResponsesCreateProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseCreateProjectRequest) {
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
          portalId: this.__input.portalId,
          projectName: this.__input.projectName,
          projectDescription: this.__input.projectDescription,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.projectId', props);
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
          portalId: this.__input.portalId,
          projectName: this.__input.projectName,
          projectDescription: this.__input.projectDescription,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.projectArn', props);
    return resource.getResponseField('projectArn') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDeleteAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDeleteAssetRequest) {
  }

  public get assetStatus(): IoTSiteWiseResponsesDeleteAssetAssetStatus {
    return new IoTSiteWiseResponsesDeleteAssetAssetStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDeleteAssetAssetStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDeleteAssetRequest) {
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
          assetId: this.__input.assetId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAsset.assetStatus.state', props);
    return resource.getResponseField('assetStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesDeleteAssetAssetStatusError {
    return new IoTSiteWiseResponsesDeleteAssetAssetStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDeleteAssetAssetStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDeleteAssetRequest) {
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
          assetId: this.__input.assetId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAsset.assetStatus.error.code', props);
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
          assetId: this.__input.assetId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAsset.assetStatus.error.message', props);
    return resource.getResponseField('assetStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDeleteAssetModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDeleteAssetModelRequest) {
  }

  public get assetModelStatus(): IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus {
    return new IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDeleteAssetModelRequest) {
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
          assetModelId: this.__input.assetModelId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAssetModel.assetModelStatus.state', props);
    return resource.getResponseField('assetModelStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError {
    return new IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDeleteAssetModelRequest) {
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
          assetModelId: this.__input.assetModelId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAssetModel.assetModelStatus.error.code', props);
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
          assetModelId: this.__input.assetModelId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAssetModel.assetModelStatus.error.message', props);
    return resource.getResponseField('assetModelStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDeletePortal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDeletePortalRequest) {
  }

  public get portalStatus(): IoTSiteWiseResponsesDeletePortalPortalStatus {
    return new IoTSiteWiseResponsesDeletePortalPortalStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDeletePortalPortalStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDeletePortalRequest) {
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
          portalId: this.__input.portalId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePortal.portalStatus.state', props);
    return resource.getResponseField('portalStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesDeletePortalPortalStatusError {
    return new IoTSiteWiseResponsesDeletePortalPortalStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDeletePortalPortalStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDeletePortalRequest) {
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
          portalId: this.__input.portalId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePortal.portalStatus.error.code', props);
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
          portalId: this.__input.portalId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePortal.portalStatus.error.message', props);
    return resource.getResponseField('portalStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAccessPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
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
          accessPolicyId: this.__input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccessPolicy.accessPolicyId', props);
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
          accessPolicyId: this.__input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccessPolicy.accessPolicyArn', props);
    return resource.getResponseField('accessPolicyArn') as unknown as string;
  }

  public get accessPolicyIdentity(): IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity {
    return new IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity(this.__scope, this.__resources, this.__input);
  }

  public get accessPolicyResource(): IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource {
    return new IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource(this.__scope, this.__resources, this.__input);
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
          accessPolicyId: this.__input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccessPolicy.accessPolicyPermission', props);
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
          accessPolicyId: this.__input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccessPolicy.accessPolicyCreationDate', props);
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
          accessPolicyId: this.__input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccessPolicy.accessPolicyLastUpdateDate', props);
    return resource.getResponseField('accessPolicyLastUpdateDate') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
  }

  public get user(): IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser {
    return new IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser(this.__scope, this.__resources, this.__input);
  }

  public get group(): IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup {
    return new IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup(this.__scope, this.__resources, this.__input);
  }

  public get iamUser(): IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser {
    return new IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
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
          accessPolicyId: this.__input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccessPolicy.accessPolicyIdentity.user.id', props);
    return resource.getResponseField('accessPolicyIdentity.user.id') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
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
          accessPolicyId: this.__input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccessPolicy.accessPolicyIdentity.group.id', props);
    return resource.getResponseField('accessPolicyIdentity.group.id') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
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
          accessPolicyId: this.__input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccessPolicy.accessPolicyIdentity.iamUser.arn', props);
    return resource.getResponseField('accessPolicyIdentity.iamUser.arn') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
  }

  public get portal(): IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal {
    return new IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal(this.__scope, this.__resources, this.__input);
  }

  public get project(): IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject {
    return new IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
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
          accessPolicyId: this.__input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccessPolicy.accessPolicyResource.portal.id', props);
    return resource.getResponseField('accessPolicyResource.portal.id') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAccessPolicyRequest) {
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
          accessPolicyId: this.__input.accessPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccessPolicy.accessPolicyResource.project.id', props);
    return resource.getResponseField('accessPolicyResource.project.id') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetRequest) {
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetId', props);
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetArn', props);
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetName', props);
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetModelId', props);
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetProperties', props);
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetHierarchies', props);
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetCreationDate', props);
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetLastUpdateDate', props);
    return resource.getResponseField('assetLastUpdateDate') as unknown as string;
  }

  public get assetStatus(): IoTSiteWiseResponsesDescribeAssetAssetStatus {
    return new IoTSiteWiseResponsesDescribeAssetAssetStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAssetAssetStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetRequest) {
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetStatus.state', props);
    return resource.getResponseField('assetStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesDescribeAssetAssetStatusError {
    return new IoTSiteWiseResponsesDescribeAssetAssetStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAssetAssetStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetRequest) {
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetStatus.error.code', props);
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
          assetId: this.__input.assetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAsset.assetStatus.error.message', props);
    return resource.getResponseField('assetStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAssetModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetModelRequest) {
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelId', props);
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelArn', props);
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelName', props);
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelDescription', props);
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelProperties', props);
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelHierarchies', props);
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelCreationDate', props);
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelLastUpdateDate', props);
    return resource.getResponseField('assetModelLastUpdateDate') as unknown as string;
  }

  public get assetModelStatus(): IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus {
    return new IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetModelRequest) {
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelStatus.state', props);
    return resource.getResponseField('assetModelStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError {
    return new IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetModelRequest) {
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelStatus.error.code', props);
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
          assetModelId: this.__input.assetModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetModel.assetModelStatus.error.message', props);
    return resource.getResponseField('assetModelStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAssetProperty {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetId', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetName', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetModelId', props);
    return resource.getResponseField('assetModelId') as unknown as string;
  }

  public get assetProperty(): IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty {
    return new IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.id', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.name', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.alias', props);
    return resource.getResponseField('assetProperty.alias') as unknown as string;
  }

  public get notification(): IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification {
    return new IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification(this.__scope, this.__resources, this.__input);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.dataType', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.unit', props);
    return resource.getResponseField('assetProperty.unit') as unknown as string;
  }

  public get type(): IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType {
    return new IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.notification.topic', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.notification.state', props);
    return resource.getResponseField('assetProperty.notification.state') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
  }

  public get attribute(): IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute {
    return new IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute(this.__scope, this.__resources, this.__input);
  }

  public get measurement(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssetProperty',
        service: 'IoTSiteWise',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSiteWise.DescribeAssetProperty.assetProperty.type.measurement'),
        outputPath: 'assetProperty.type.measurement',
        parameters: {
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.type.measurement', props);
    return resource.getResponseField('assetProperty.type.measurement') as unknown as any;
  }

  public get transform(): IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform {
    return new IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform(this.__scope, this.__resources, this.__input);
  }

  public get metric(): IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric {
    return new IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.type.attribute.defaultValue', props);
    return resource.getResponseField('assetProperty.type.attribute.defaultValue') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.type.transform.expression', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.type.transform.variables', props);
    return resource.getResponseField('assetProperty.type.transform.variables') as unknown as shapes.IoTSiteWiseExpressionVariable[];
  }

}

export class IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.type.metric.expression', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.type.metric.variables', props);
    return resource.getResponseField('assetProperty.type.metric.variables') as unknown as shapes.IoTSiteWiseExpressionVariable[];
  }

  public get window(): IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow {
    return new IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
  }

  public get tumbling(): IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling {
    return new IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeAssetPropertyRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssetProperty.assetProperty.type.metric.window.tumbling.interval', props);
    return resource.getResponseField('assetProperty.type.metric.window.tumbling.interval') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeDashboard {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeDashboardRequest) {
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
          dashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.dashboardId', props);
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
          dashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.dashboardArn', props);
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
          dashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.dashboardName', props);
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
          dashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.projectId', props);
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
          dashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.dashboardDescription', props);
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
          dashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.dashboardDefinition', props);
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
          dashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.dashboardCreationDate', props);
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
          dashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.dashboardLastUpdateDate', props);
    return resource.getResponseField('dashboardLastUpdateDate') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultEncryptionConfiguration.encryptionType', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultEncryptionConfiguration.kmsKeyArn', props);
    return resource.getResponseField('kmsKeyArn') as unknown as string;
  }

  public get configurationStatus(): IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus {
    return new IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus(this.__scope, this.__resources);
  }

}

export class IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultEncryptionConfiguration.configurationStatus.state', props);
    return resource.getResponseField('configurationStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError {
    return new IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError(this.__scope, this.__resources);
  }

}

export class IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultEncryptionConfiguration.configurationStatus.error.code', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultEncryptionConfiguration.configurationStatus.error.message', props);
    return resource.getResponseField('configurationStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeGatewayRequest) {
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
          gatewayId: this.__input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGateway.gatewayId', props);
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
          gatewayId: this.__input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGateway.gatewayName', props);
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
          gatewayId: this.__input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGateway.gatewayArn', props);
    return resource.getResponseField('gatewayArn') as unknown as string;
  }

  public get gatewayPlatform(): IoTSiteWiseResponsesDescribeGatewayGatewayPlatform {
    return new IoTSiteWiseResponsesDescribeGatewayGatewayPlatform(this.__scope, this.__resources, this.__input);
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
          gatewayId: this.__input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGateway.gatewayCapabilitySummaries', props);
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
          gatewayId: this.__input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGateway.creationDate', props);
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
          gatewayId: this.__input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGateway.lastUpdateDate', props);
    return resource.getResponseField('lastUpdateDate') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeGatewayGatewayPlatform {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeGatewayRequest) {
  }

  public get greengrass(): IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass {
    return new IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeGatewayRequest) {
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
          gatewayId: this.__input.gatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGateway.gatewayPlatform.greengrass.groupArn', props);
    return resource.getResponseField('gatewayPlatform.greengrass.groupArn') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest) {
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
          gatewayId: this.__input.gatewayId,
          capabilityNamespace: this.__input.capabilityNamespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayCapabilityConfiguration.gatewayId', props);
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
          gatewayId: this.__input.gatewayId,
          capabilityNamespace: this.__input.capabilityNamespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayCapabilityConfiguration.capabilityNamespace', props);
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
          gatewayId: this.__input.gatewayId,
          capabilityNamespace: this.__input.capabilityNamespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayCapabilityConfiguration.capabilityConfiguration', props);
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
          gatewayId: this.__input.gatewayId,
          capabilityNamespace: this.__input.capabilityNamespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayCapabilityConfiguration.capabilitySyncStatus', props);
    return resource.getResponseField('capabilitySyncStatus') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeLoggingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get loggingOptions(): IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions {
    return new IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions(this.__scope, this.__resources);
  }

}

export class IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoggingOptions.loggingOptions.level', props);
    return resource.getResponseField('loggingOptions.level') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribePortal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribePortalRequest) {
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalId', props);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalArn', props);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalName', props);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalDescription', props);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalClientId', props);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalStartUrl', props);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalContactEmail', props);
    return resource.getResponseField('portalContactEmail') as unknown as string;
  }

  public get portalStatus(): IoTSiteWiseResponsesDescribePortalPortalStatus {
    return new IoTSiteWiseResponsesDescribePortalPortalStatus(this.__scope, this.__resources, this.__input);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalCreationDate', props);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalLastUpdateDate', props);
    return resource.getResponseField('portalLastUpdateDate') as unknown as string;
  }

  public get portalLogoImageLocation(): IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation {
    return new IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation(this.__scope, this.__resources, this.__input);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.roleArn', props);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalAuthMode', props);
    return resource.getResponseField('portalAuthMode') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribePortalPortalStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribePortalRequest) {
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalStatus.state', props);
    return resource.getResponseField('portalStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesDescribePortalPortalStatusError {
    return new IoTSiteWiseResponsesDescribePortalPortalStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesDescribePortalPortalStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribePortalRequest) {
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalStatus.error.code', props);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalStatus.error.message', props);
    return resource.getResponseField('portalStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribePortalRequest) {
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalLogoImageLocation.id', props);
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
          portalId: this.__input.portalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortal.portalLogoImageLocation.url', props);
    return resource.getResponseField('portalLogoImageLocation.url') as unknown as string;
  }

}

export class IoTSiteWiseResponsesDescribeProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseDescribeProjectRequest) {
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
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.projectId', props);
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
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.projectArn', props);
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
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.projectName', props);
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
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.portalId', props);
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
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.projectDescription', props);
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
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.projectCreationDate', props);
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
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.projectLastUpdateDate', props);
    return resource.getResponseField('projectLastUpdateDate') as unknown as string;
  }

}

export class IoTSiteWiseResponsesFetchAssetPropertyAggregates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseGetAssetPropertyAggregatesRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
          aggregateTypes: this.__input.aggregateTypes,
          resolution: this.__input.resolution,
          qualities: this.__input.qualities,
          startDate: this.__input.startDate,
          endDate: this.__input.endDate,
          timeOrdering: this.__input.timeOrdering,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyAggregates.aggregatedValues', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
          aggregateTypes: this.__input.aggregateTypes,
          resolution: this.__input.resolution,
          qualities: this.__input.qualities,
          startDate: this.__input.startDate,
          endDate: this.__input.endDate,
          timeOrdering: this.__input.timeOrdering,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyAggregates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesFetchAssetPropertyValue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseGetAssetPropertyValueRequest) {
  }

  public get propertyValue(): IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue {
    return new IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseGetAssetPropertyValueRequest) {
  }

  public get value(): IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue {
    return new IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue(this.__scope, this.__resources, this.__input);
  }

  public get timestamp(): IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp {
    return new IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp(this.__scope, this.__resources, this.__input);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyValue.propertyValue.quality', props);
    return resource.getResponseField('propertyValue.quality') as unknown as string;
  }

}

export class IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseGetAssetPropertyValueRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyValue.propertyValue.value.stringValue', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyValue.propertyValue.value.integerValue', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyValue.propertyValue.value.doubleValue', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyValue.propertyValue.value.booleanValue', props);
    return resource.getResponseField('propertyValue.value.booleanValue') as unknown as boolean;
  }

}

export class IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseGetAssetPropertyValueRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyValue.propertyValue.timestamp.timeInSeconds', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyValue.propertyValue.timestamp.offsetInNanos', props);
    return resource.getResponseField('propertyValue.timestamp.offsetInNanos') as unknown as number;
  }

}

export class IoTSiteWiseResponsesFetchAssetPropertyValueHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseGetAssetPropertyValueHistoryRequest) {
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
          startDate: this.__input.startDate,
          endDate: this.__input.endDate,
          qualities: this.__input.qualities,
          timeOrdering: this.__input.timeOrdering,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyValueHistory.assetPropertyValueHistory', props);
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
          assetId: this.__input.assetId,
          propertyId: this.__input.propertyId,
          propertyAlias: this.__input.propertyAlias,
          startDate: this.__input.startDate,
          endDate: this.__input.endDate,
          qualities: this.__input.qualities,
          timeOrdering: this.__input.timeOrdering,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssetPropertyValueHistory.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesListAccessPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseListAccessPoliciesRequest) {
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
          identityType: this.__input.identityType,
          identityId: this.__input.identityId,
          resourceType: this.__input.resourceType,
          resourceId: this.__input.resourceId,
          iamArn: this.__input.iamArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessPolicies.accessPolicySummaries', props);
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
          identityType: this.__input.identityType,
          identityId: this.__input.identityId,
          resourceType: this.__input.resourceType,
          resourceId: this.__input.resourceId,
          iamArn: this.__input.iamArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessPolicies.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesListAssetModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseListAssetModelsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssetModels.assetModelSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssetModels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesListAssets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseListAssetsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          assetModelId: this.__input.assetModelId,
          filter: this.__input.filter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssets.assetSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          assetModelId: this.__input.assetModelId,
          filter: this.__input.filter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesListAssociatedAssets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseListAssociatedAssetsRequest) {
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
          assetId: this.__input.assetId,
          hierarchyId: this.__input.hierarchyId,
          traversalDirection: this.__input.traversalDirection,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedAssets.assetSummaries', props);
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
          assetId: this.__input.assetId,
          hierarchyId: this.__input.hierarchyId,
          traversalDirection: this.__input.traversalDirection,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedAssets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesListDashboards {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseListDashboardsRequest) {
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
          projectId: this.__input.projectId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDashboards.dashboardSummaries', props);
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
          projectId: this.__input.projectId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDashboards.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesListGateways {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseListGatewaysRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGateways.gatewaySummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGateways.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesListPortals {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseListPortalsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPortals.portalSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPortals.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesListProjectAssets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseListProjectAssetsRequest) {
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
          projectId: this.__input.projectId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjectAssets.assetIds', props);
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
          projectId: this.__input.projectId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjectAssets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesListProjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseListProjectsRequest) {
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
          portalId: this.__input.portalId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.projectSummaries', props);
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
          portalId: this.__input.portalId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSiteWiseResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class IoTSiteWiseResponsesPutDefaultEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWisePutDefaultEncryptionConfigurationRequest) {
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
          encryptionType: this.__input.encryptionType,
          kmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutDefaultEncryptionConfiguration.encryptionType', props);
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
          encryptionType: this.__input.encryptionType,
          kmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutDefaultEncryptionConfiguration.kmsKeyArn', props);
    return resource.getResponseField('kmsKeyArn') as unknown as string;
  }

  public get configurationStatus(): IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus {
    return new IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWisePutDefaultEncryptionConfigurationRequest) {
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
          encryptionType: this.__input.encryptionType,
          kmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutDefaultEncryptionConfiguration.configurationStatus.state', props);
    return resource.getResponseField('configurationStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError {
    return new IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWisePutDefaultEncryptionConfigurationRequest) {
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
          encryptionType: this.__input.encryptionType,
          kmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutDefaultEncryptionConfiguration.configurationStatus.error.code', props);
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
          encryptionType: this.__input.encryptionType,
          kmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutDefaultEncryptionConfiguration.configurationStatus.error.message', props);
    return resource.getResponseField('configurationStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesUpdateAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseUpdateAssetRequest) {
  }

  public get assetStatus(): IoTSiteWiseResponsesUpdateAssetAssetStatus {
    return new IoTSiteWiseResponsesUpdateAssetAssetStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesUpdateAssetAssetStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseUpdateAssetRequest) {
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
          assetId: this.__input.assetId,
          assetName: this.__input.assetName,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.assetStatus.state', props);
    return resource.getResponseField('assetStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesUpdateAssetAssetStatusError {
    return new IoTSiteWiseResponsesUpdateAssetAssetStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesUpdateAssetAssetStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseUpdateAssetRequest) {
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
          assetId: this.__input.assetId,
          assetName: this.__input.assetName,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.assetStatus.error.code', props);
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
          assetId: this.__input.assetId,
          assetName: this.__input.assetName,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.assetStatus.error.message', props);
    return resource.getResponseField('assetStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesUpdateAssetModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseUpdateAssetModelRequest) {
  }

  public get assetModelStatus(): IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus {
    return new IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseUpdateAssetModelRequest) {
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
          assetModelId: this.__input.assetModelId,
          assetModelName: this.__input.assetModelName,
          assetModelDescription: this.__input.assetModelDescription,
          assetModelProperties: this.__input.assetModelProperties,
          assetModelHierarchies: this.__input.assetModelHierarchies,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssetModel.assetModelStatus.state', props);
    return resource.getResponseField('assetModelStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError {
    return new IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseUpdateAssetModelRequest) {
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
          assetModelId: this.__input.assetModelId,
          assetModelName: this.__input.assetModelName,
          assetModelDescription: this.__input.assetModelDescription,
          assetModelProperties: this.__input.assetModelProperties,
          assetModelHierarchies: this.__input.assetModelHierarchies,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssetModel.assetModelStatus.error.code', props);
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
          assetModelId: this.__input.assetModelId,
          assetModelName: this.__input.assetModelName,
          assetModelDescription: this.__input.assetModelDescription,
          assetModelProperties: this.__input.assetModelProperties,
          assetModelHierarchies: this.__input.assetModelHierarchies,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssetModel.assetModelStatus.error.message', props);
    return resource.getResponseField('assetModelStatus.error.message') as unknown as string;
  }

}

export class IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest) {
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
          gatewayId: this.__input.gatewayId,
          capabilityNamespace: this.__input.capabilityNamespace,
          capabilityConfiguration: this.__input.capabilityConfiguration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGatewayCapabilityConfiguration.capabilityNamespace', props);
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
          gatewayId: this.__input.gatewayId,
          capabilityNamespace: this.__input.capabilityNamespace,
          capabilityConfiguration: this.__input.capabilityConfiguration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGatewayCapabilityConfiguration.capabilitySyncStatus', props);
    return resource.getResponseField('capabilitySyncStatus') as unknown as string;
  }

}

export class IoTSiteWiseResponsesUpdatePortal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseUpdatePortalRequest) {
  }

  public get portalStatus(): IoTSiteWiseResponsesUpdatePortalPortalStatus {
    return new IoTSiteWiseResponsesUpdatePortalPortalStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesUpdatePortalPortalStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseUpdatePortalRequest) {
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
          portalId: this.__input.portalId,
          portalName: this.__input.portalName,
          portalDescription: this.__input.portalDescription,
          portalContactEmail: this.__input.portalContactEmail,
          portalLogoImage: {
            id: this.__input.portalLogoImage?.id,
            file: {
              data: {
              },
              type: this.__input.portalLogoImage?.file?.type,
            },
          },
          roleArn: this.__input.roleArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortal.portalStatus.state', props);
    return resource.getResponseField('portalStatus.state') as unknown as string;
  }

  public get error(): IoTSiteWiseResponsesUpdatePortalPortalStatusError {
    return new IoTSiteWiseResponsesUpdatePortalPortalStatusError(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSiteWiseResponsesUpdatePortalPortalStatusError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSiteWiseUpdatePortalRequest) {
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
          portalId: this.__input.portalId,
          portalName: this.__input.portalName,
          portalDescription: this.__input.portalDescription,
          portalContactEmail: this.__input.portalContactEmail,
          portalLogoImage: {
            id: this.__input.portalLogoImage?.id,
            file: {
              data: {
              },
              type: this.__input.portalLogoImage?.file?.type,
            },
          },
          roleArn: this.__input.roleArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortal.portalStatus.error.code', props);
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
          portalId: this.__input.portalId,
          portalName: this.__input.portalName,
          portalDescription: this.__input.portalDescription,
          portalContactEmail: this.__input.portalContactEmail,
          portalLogoImage: {
            id: this.__input.portalLogoImage?.id,
            file: {
              data: {
              },
              type: this.__input.portalLogoImage?.file?.type,
            },
          },
          roleArn: this.__input.roleArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortal.portalStatus.error.message', props);
    return resource.getResponseField('portalStatus.error.message') as unknown as string;
  }

}

