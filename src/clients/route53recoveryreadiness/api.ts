import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Route53RecoveryReadinessClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCell(input: shapes.Route53RecoveryReadinessCreateCellRequest): Route53RecoveryReadinessResponsesCreateCell {
    return new Route53RecoveryReadinessResponsesCreateCell(this, this.__resources, input);
  }

  public createCrossAccountAuthorization(input: shapes.Route53RecoveryReadinessCreateCrossAccountAuthorizationRequest): Route53RecoveryReadinessResponsesCreateCrossAccountAuthorization {
    return new Route53RecoveryReadinessResponsesCreateCrossAccountAuthorization(this, this.__resources, input);
  }

  public createReadinessCheck(input: shapes.Route53RecoveryReadinessCreateReadinessCheckRequest): Route53RecoveryReadinessResponsesCreateReadinessCheck {
    return new Route53RecoveryReadinessResponsesCreateReadinessCheck(this, this.__resources, input);
  }

  public createRecoveryGroup(input: shapes.Route53RecoveryReadinessCreateRecoveryGroupRequest): Route53RecoveryReadinessResponsesCreateRecoveryGroup {
    return new Route53RecoveryReadinessResponsesCreateRecoveryGroup(this, this.__resources, input);
  }

  public createResourceSet(input: shapes.Route53RecoveryReadinessCreateResourceSetRequest): Route53RecoveryReadinessResponsesCreateResourceSet {
    return new Route53RecoveryReadinessResponsesCreateResourceSet(this, this.__resources, input);
  }

  public deleteCell(input: shapes.Route53RecoveryReadinessDeleteCellRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.DeleteCell'),
        parameters: {
          CellName: input.cellName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCell', props);
  }

  public deleteCrossAccountAuthorization(input: shapes.Route53RecoveryReadinessDeleteCrossAccountAuthorizationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCrossAccountAuthorization',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.DeleteCrossAccountAuthorization'),
        parameters: {
          CrossAccountAuthorization: input.crossAccountAuthorization,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCrossAccountAuthorization', props);
  }

  public deleteReadinessCheck(input: shapes.Route53RecoveryReadinessDeleteReadinessCheckRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.DeleteReadinessCheck'),
        parameters: {
          ReadinessCheckName: input.readinessCheckName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteReadinessCheck', props);
  }

  public deleteRecoveryGroup(input: shapes.Route53RecoveryReadinessDeleteRecoveryGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.DeleteRecoveryGroup'),
        parameters: {
          RecoveryGroupName: input.recoveryGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRecoveryGroup', props);
  }

  public deleteResourceSet(input: shapes.Route53RecoveryReadinessDeleteResourceSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.DeleteResourceSet'),
        parameters: {
          ResourceSetName: input.resourceSetName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResourceSet', props);
  }

  public fetchArchitectureRecommendations(input: shapes.Route53RecoveryReadinessGetArchitectureRecommendationsRequest): Route53RecoveryReadinessResponsesFetchArchitectureRecommendations {
    return new Route53RecoveryReadinessResponsesFetchArchitectureRecommendations(this, this.__resources, input);
  }

  public fetchCell(input: shapes.Route53RecoveryReadinessGetCellRequest): Route53RecoveryReadinessResponsesFetchCell {
    return new Route53RecoveryReadinessResponsesFetchCell(this, this.__resources, input);
  }

  public fetchCellReadinessSummary(input: shapes.Route53RecoveryReadinessGetCellReadinessSummaryRequest): Route53RecoveryReadinessResponsesFetchCellReadinessSummary {
    return new Route53RecoveryReadinessResponsesFetchCellReadinessSummary(this, this.__resources, input);
  }

  public fetchReadinessCheck(input: shapes.Route53RecoveryReadinessGetReadinessCheckRequest): Route53RecoveryReadinessResponsesFetchReadinessCheck {
    return new Route53RecoveryReadinessResponsesFetchReadinessCheck(this, this.__resources, input);
  }

  public fetchReadinessCheckResourceStatus(input: shapes.Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest): Route53RecoveryReadinessResponsesFetchReadinessCheckResourceStatus {
    return new Route53RecoveryReadinessResponsesFetchReadinessCheckResourceStatus(this, this.__resources, input);
  }

  public fetchReadinessCheckStatus(input: shapes.Route53RecoveryReadinessGetReadinessCheckStatusRequest): Route53RecoveryReadinessResponsesFetchReadinessCheckStatus {
    return new Route53RecoveryReadinessResponsesFetchReadinessCheckStatus(this, this.__resources, input);
  }

  public fetchRecoveryGroup(input: shapes.Route53RecoveryReadinessGetRecoveryGroupRequest): Route53RecoveryReadinessResponsesFetchRecoveryGroup {
    return new Route53RecoveryReadinessResponsesFetchRecoveryGroup(this, this.__resources, input);
  }

  public fetchRecoveryGroupReadinessSummary(input: shapes.Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryRequest): Route53RecoveryReadinessResponsesFetchRecoveryGroupReadinessSummary {
    return new Route53RecoveryReadinessResponsesFetchRecoveryGroupReadinessSummary(this, this.__resources, input);
  }

  public fetchResourceSet(input: shapes.Route53RecoveryReadinessGetResourceSetRequest): Route53RecoveryReadinessResponsesFetchResourceSet {
    return new Route53RecoveryReadinessResponsesFetchResourceSet(this, this.__resources, input);
  }

  public listCells(input: shapes.Route53RecoveryReadinessListCellsRequest): Route53RecoveryReadinessResponsesListCells {
    return new Route53RecoveryReadinessResponsesListCells(this, this.__resources, input);
  }

  public listCrossAccountAuthorizations(input: shapes.Route53RecoveryReadinessListCrossAccountAuthorizationsRequest): Route53RecoveryReadinessResponsesListCrossAccountAuthorizations {
    return new Route53RecoveryReadinessResponsesListCrossAccountAuthorizations(this, this.__resources, input);
  }

  public listReadinessChecks(input: shapes.Route53RecoveryReadinessListReadinessChecksRequest): Route53RecoveryReadinessResponsesListReadinessChecks {
    return new Route53RecoveryReadinessResponsesListReadinessChecks(this, this.__resources, input);
  }

  public listRecoveryGroups(input: shapes.Route53RecoveryReadinessListRecoveryGroupsRequest): Route53RecoveryReadinessResponsesListRecoveryGroups {
    return new Route53RecoveryReadinessResponsesListRecoveryGroups(this, this.__resources, input);
  }

  public listResourceSets(input: shapes.Route53RecoveryReadinessListResourceSetsRequest): Route53RecoveryReadinessResponsesListResourceSets {
    return new Route53RecoveryReadinessResponsesListResourceSets(this, this.__resources, input);
  }

  public listRules(input: shapes.Route53RecoveryReadinessListRulesRequest): Route53RecoveryReadinessResponsesListRules {
    return new Route53RecoveryReadinessResponsesListRules(this, this.__resources, input);
  }

  public listTagsForResources(input: shapes.Route53RecoveryReadinessListTagsForResourcesRequest): Route53RecoveryReadinessResponsesListTagsForResources {
    return new Route53RecoveryReadinessResponsesListTagsForResources(this, this.__resources, input);
  }

  public tagResource(input: shapes.Route53RecoveryReadinessTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.Route53RecoveryReadinessUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateCell(input: shapes.Route53RecoveryReadinessUpdateCellRequest): Route53RecoveryReadinessResponsesUpdateCell {
    return new Route53RecoveryReadinessResponsesUpdateCell(this, this.__resources, input);
  }

  public updateReadinessCheck(input: shapes.Route53RecoveryReadinessUpdateReadinessCheckRequest): Route53RecoveryReadinessResponsesUpdateReadinessCheck {
    return new Route53RecoveryReadinessResponsesUpdateReadinessCheck(this, this.__resources, input);
  }

  public updateRecoveryGroup(input: shapes.Route53RecoveryReadinessUpdateRecoveryGroupRequest): Route53RecoveryReadinessResponsesUpdateRecoveryGroup {
    return new Route53RecoveryReadinessResponsesUpdateRecoveryGroup(this, this.__resources, input);
  }

  public updateResourceSet(input: shapes.Route53RecoveryReadinessUpdateResourceSetRequest): Route53RecoveryReadinessResponsesUpdateResourceSet {
    return new Route53RecoveryReadinessResponsesUpdateResourceSet(this, this.__resources, input);
  }

}

export class Route53RecoveryReadinessResponsesCreateCell {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessCreateCellRequest) {
  }

  public get cellArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateCell.CellArn'),
        outputPath: 'CellArn',
        parameters: {
          CellName: this.__input.cellName,
          Cells: this.__input.cells,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCell.CellArn', props);
    return resource.getResponseField('CellArn') as unknown as string;
  }

  public get cellName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateCell.CellName'),
        outputPath: 'CellName',
        parameters: {
          CellName: this.__input.cellName,
          Cells: this.__input.cells,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCell.CellName', props);
    return resource.getResponseField('CellName') as unknown as string;
  }

  public get cells(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateCell.Cells'),
        outputPath: 'Cells',
        parameters: {
          CellName: this.__input.cellName,
          Cells: this.__input.cells,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCell.Cells', props);
    return resource.getResponseField('Cells') as unknown as string[];
  }

  public get parentReadinessScopes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateCell.ParentReadinessScopes'),
        outputPath: 'ParentReadinessScopes',
        parameters: {
          CellName: this.__input.cellName,
          Cells: this.__input.cells,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCell.ParentReadinessScopes', props);
    return resource.getResponseField('ParentReadinessScopes') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateCell.Tags'),
        outputPath: 'Tags',
        parameters: {
          CellName: this.__input.cellName,
          Cells: this.__input.cells,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCell.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesCreateCrossAccountAuthorization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessCreateCrossAccountAuthorizationRequest) {
  }

  public get crossAccountAuthorization(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCrossAccountAuthorization',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateCrossAccountAuthorization.CrossAccountAuthorization'),
        outputPath: 'CrossAccountAuthorization',
        parameters: {
          CrossAccountAuthorization: this.__input.crossAccountAuthorization,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCrossAccountAuthorization.CrossAccountAuthorization', props);
    return resource.getResponseField('CrossAccountAuthorization') as unknown as string;
  }

}

export class Route53RecoveryReadinessResponsesCreateReadinessCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessCreateReadinessCheckRequest) {
  }

  public get readinessCheckArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateReadinessCheck.ReadinessCheckArn'),
        outputPath: 'ReadinessCheckArn',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceSetName: this.__input.resourceSetName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReadinessCheck.ReadinessCheckArn', props);
    return resource.getResponseField('ReadinessCheckArn') as unknown as string;
  }

  public get readinessCheckName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateReadinessCheck.ReadinessCheckName'),
        outputPath: 'ReadinessCheckName',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceSetName: this.__input.resourceSetName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReadinessCheck.ReadinessCheckName', props);
    return resource.getResponseField('ReadinessCheckName') as unknown as string;
  }

  public get resourceSet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateReadinessCheck.ResourceSet'),
        outputPath: 'ResourceSet',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceSetName: this.__input.resourceSetName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReadinessCheck.ResourceSet', props);
    return resource.getResponseField('ResourceSet') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateReadinessCheck.Tags'),
        outputPath: 'Tags',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceSetName: this.__input.resourceSetName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReadinessCheck.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesCreateRecoveryGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessCreateRecoveryGroupRequest) {
  }

  public get cells(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateRecoveryGroup.Cells'),
        outputPath: 'Cells',
        parameters: {
          Cells: this.__input.cells,
          RecoveryGroupName: this.__input.recoveryGroupName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRecoveryGroup.Cells', props);
    return resource.getResponseField('Cells') as unknown as string[];
  }

  public get recoveryGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateRecoveryGroup.RecoveryGroupArn'),
        outputPath: 'RecoveryGroupArn',
        parameters: {
          Cells: this.__input.cells,
          RecoveryGroupName: this.__input.recoveryGroupName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRecoveryGroup.RecoveryGroupArn', props);
    return resource.getResponseField('RecoveryGroupArn') as unknown as string;
  }

  public get recoveryGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateRecoveryGroup.RecoveryGroupName'),
        outputPath: 'RecoveryGroupName',
        parameters: {
          Cells: this.__input.cells,
          RecoveryGroupName: this.__input.recoveryGroupName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRecoveryGroup.RecoveryGroupName', props);
    return resource.getResponseField('RecoveryGroupName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateRecoveryGroup.Tags'),
        outputPath: 'Tags',
        parameters: {
          Cells: this.__input.cells,
          RecoveryGroupName: this.__input.recoveryGroupName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRecoveryGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesCreateResourceSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessCreateResourceSetRequest) {
  }

  public get resourceSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateResourceSet.ResourceSetArn'),
        outputPath: 'ResourceSetArn',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
          ResourceSetType: this.__input.resourceSetType,
          Resources: this.__input.resources,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceSet.ResourceSetArn', props);
    return resource.getResponseField('ResourceSetArn') as unknown as string;
  }

  public get resourceSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateResourceSet.ResourceSetName'),
        outputPath: 'ResourceSetName',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
          ResourceSetType: this.__input.resourceSetType,
          Resources: this.__input.resources,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceSet.ResourceSetName', props);
    return resource.getResponseField('ResourceSetName') as unknown as string;
  }

  public get resourceSetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateResourceSet.ResourceSetType'),
        outputPath: 'ResourceSetType',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
          ResourceSetType: this.__input.resourceSetType,
          Resources: this.__input.resources,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceSet.ResourceSetType', props);
    return resource.getResponseField('ResourceSetType') as unknown as string;
  }

  public get resources(): shapes.Route53RecoveryReadinessResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateResourceSet.Resources'),
        outputPath: 'Resources',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
          ResourceSetType: this.__input.resourceSetType,
          Resources: this.__input.resources,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceSet.Resources', props);
    return resource.getResponseField('Resources') as unknown as shapes.Route53RecoveryReadinessResource[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.CreateResourceSet.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
          ResourceSetType: this.__input.resourceSetType,
          Resources: this.__input.resources,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesFetchArchitectureRecommendations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessGetArchitectureRecommendationsRequest) {
  }

  public get lastAuditTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getArchitectureRecommendations',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetArchitectureRecommendations.LastAuditTimestamp'),
        outputPath: 'LastAuditTimestamp',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetArchitectureRecommendations.LastAuditTimestamp', props);
    return resource.getResponseField('LastAuditTimestamp') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getArchitectureRecommendations',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetArchitectureRecommendations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetArchitectureRecommendations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get recommendations(): shapes.Route53RecoveryReadinessRecommendation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getArchitectureRecommendations',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetArchitectureRecommendations.Recommendations'),
        outputPath: 'Recommendations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetArchitectureRecommendations.Recommendations', props);
    return resource.getResponseField('Recommendations') as unknown as shapes.Route53RecoveryReadinessRecommendation[];
  }

}

export class Route53RecoveryReadinessResponsesFetchCell {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessGetCellRequest) {
  }

  public get cellArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetCell.CellArn'),
        outputPath: 'CellArn',
        parameters: {
          CellName: this.__input.cellName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCell.CellArn', props);
    return resource.getResponseField('CellArn') as unknown as string;
  }

  public get cellName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetCell.CellName'),
        outputPath: 'CellName',
        parameters: {
          CellName: this.__input.cellName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCell.CellName', props);
    return resource.getResponseField('CellName') as unknown as string;
  }

  public get cells(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetCell.Cells'),
        outputPath: 'Cells',
        parameters: {
          CellName: this.__input.cellName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCell.Cells', props);
    return resource.getResponseField('Cells') as unknown as string[];
  }

  public get parentReadinessScopes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetCell.ParentReadinessScopes'),
        outputPath: 'ParentReadinessScopes',
        parameters: {
          CellName: this.__input.cellName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCell.ParentReadinessScopes', props);
    return resource.getResponseField('ParentReadinessScopes') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetCell.Tags'),
        outputPath: 'Tags',
        parameters: {
          CellName: this.__input.cellName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCell.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesFetchCellReadinessSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessGetCellReadinessSummaryRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCellReadinessSummary',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetCellReadinessSummary.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CellName: this.__input.cellName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCellReadinessSummary.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get readiness(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCellReadinessSummary',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetCellReadinessSummary.Readiness'),
        outputPath: 'Readiness',
        parameters: {
          CellName: this.__input.cellName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCellReadinessSummary.Readiness', props);
    return resource.getResponseField('Readiness') as unknown as string;
  }

  public get readinessChecks(): shapes.Route53RecoveryReadinessReadinessCheckSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCellReadinessSummary',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetCellReadinessSummary.ReadinessChecks'),
        outputPath: 'ReadinessChecks',
        parameters: {
          CellName: this.__input.cellName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCellReadinessSummary.ReadinessChecks', props);
    return resource.getResponseField('ReadinessChecks') as unknown as shapes.Route53RecoveryReadinessReadinessCheckSummary[];
  }

}

export class Route53RecoveryReadinessResponsesFetchReadinessCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessGetReadinessCheckRequest) {
  }

  public get readinessCheckArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheck.ReadinessCheckArn'),
        outputPath: 'ReadinessCheckArn',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheck.ReadinessCheckArn', props);
    return resource.getResponseField('ReadinessCheckArn') as unknown as string;
  }

  public get readinessCheckName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheck.ReadinessCheckName'),
        outputPath: 'ReadinessCheckName',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheck.ReadinessCheckName', props);
    return resource.getResponseField('ReadinessCheckName') as unknown as string;
  }

  public get resourceSet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheck.ResourceSet'),
        outputPath: 'ResourceSet',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheck.ResourceSet', props);
    return resource.getResponseField('ResourceSet') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheck.Tags'),
        outputPath: 'Tags',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheck.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesFetchReadinessCheckResourceStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheckResourceStatus',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheckResourceStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceIdentifier: this.__input.resourceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheckResourceStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get readiness(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheckResourceStatus',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheckResourceStatus.Readiness'),
        outputPath: 'Readiness',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceIdentifier: this.__input.resourceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheckResourceStatus.Readiness', props);
    return resource.getResponseField('Readiness') as unknown as string;
  }

  public get rules(): shapes.Route53RecoveryReadinessRuleResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheckResourceStatus',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheckResourceStatus.Rules'),
        outputPath: 'Rules',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceIdentifier: this.__input.resourceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheckResourceStatus.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.Route53RecoveryReadinessRuleResult[];
  }

}

export class Route53RecoveryReadinessResponsesFetchReadinessCheckStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessGetReadinessCheckStatusRequest) {
  }

  public get messages(): shapes.Route53RecoveryReadinessMessage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheckStatus',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheckStatus.Messages'),
        outputPath: 'Messages',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ReadinessCheckName: this.__input.readinessCheckName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheckStatus.Messages', props);
    return resource.getResponseField('Messages') as unknown as shapes.Route53RecoveryReadinessMessage[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheckStatus',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheckStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ReadinessCheckName: this.__input.readinessCheckName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheckStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get readiness(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheckStatus',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheckStatus.Readiness'),
        outputPath: 'Readiness',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ReadinessCheckName: this.__input.readinessCheckName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheckStatus.Readiness', props);
    return resource.getResponseField('Readiness') as unknown as string;
  }

  public get resources(): shapes.Route53RecoveryReadinessResourceResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReadinessCheckStatus',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetReadinessCheckStatus.Resources'),
        outputPath: 'Resources',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ReadinessCheckName: this.__input.readinessCheckName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReadinessCheckStatus.Resources', props);
    return resource.getResponseField('Resources') as unknown as shapes.Route53RecoveryReadinessResourceResult[];
  }

}

export class Route53RecoveryReadinessResponsesFetchRecoveryGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessGetRecoveryGroupRequest) {
  }

  public get cells(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetRecoveryGroup.Cells'),
        outputPath: 'Cells',
        parameters: {
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecoveryGroup.Cells', props);
    return resource.getResponseField('Cells') as unknown as string[];
  }

  public get recoveryGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetRecoveryGroup.RecoveryGroupArn'),
        outputPath: 'RecoveryGroupArn',
        parameters: {
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecoveryGroup.RecoveryGroupArn', props);
    return resource.getResponseField('RecoveryGroupArn') as unknown as string;
  }

  public get recoveryGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetRecoveryGroup.RecoveryGroupName'),
        outputPath: 'RecoveryGroupName',
        parameters: {
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecoveryGroup.RecoveryGroupName', props);
    return resource.getResponseField('RecoveryGroupName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetRecoveryGroup.Tags'),
        outputPath: 'Tags',
        parameters: {
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecoveryGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesFetchRecoveryGroupReadinessSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecoveryGroupReadinessSummary',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetRecoveryGroupReadinessSummary.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecoveryGroupReadinessSummary.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get readiness(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecoveryGroupReadinessSummary',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetRecoveryGroupReadinessSummary.Readiness'),
        outputPath: 'Readiness',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecoveryGroupReadinessSummary.Readiness', props);
    return resource.getResponseField('Readiness') as unknown as string;
  }

  public get readinessChecks(): shapes.Route53RecoveryReadinessReadinessCheckSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecoveryGroupReadinessSummary',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetRecoveryGroupReadinessSummary.ReadinessChecks'),
        outputPath: 'ReadinessChecks',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecoveryGroupReadinessSummary.ReadinessChecks', props);
    return resource.getResponseField('ReadinessChecks') as unknown as shapes.Route53RecoveryReadinessReadinessCheckSummary[];
  }

}

export class Route53RecoveryReadinessResponsesFetchResourceSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessGetResourceSetRequest) {
  }

  public get resourceSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetResourceSet.ResourceSetArn'),
        outputPath: 'ResourceSetArn',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceSet.ResourceSetArn', props);
    return resource.getResponseField('ResourceSetArn') as unknown as string;
  }

  public get resourceSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetResourceSet.ResourceSetName'),
        outputPath: 'ResourceSetName',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceSet.ResourceSetName', props);
    return resource.getResponseField('ResourceSetName') as unknown as string;
  }

  public get resourceSetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetResourceSet.ResourceSetType'),
        outputPath: 'ResourceSetType',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceSet.ResourceSetType', props);
    return resource.getResponseField('ResourceSetType') as unknown as string;
  }

  public get resources(): shapes.Route53RecoveryReadinessResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetResourceSet.Resources'),
        outputPath: 'Resources',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceSet.Resources', props);
    return resource.getResponseField('Resources') as unknown as shapes.Route53RecoveryReadinessResource[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.GetResourceSet.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesListCells {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessListCellsRequest) {
  }

  public get cells(): shapes.Route53RecoveryReadinessCellOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCells',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListCells.Cells'),
        outputPath: 'Cells',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCells.Cells', props);
    return resource.getResponseField('Cells') as unknown as shapes.Route53RecoveryReadinessCellOutput[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCells',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListCells.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCells.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53RecoveryReadinessResponsesListCrossAccountAuthorizations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessListCrossAccountAuthorizationsRequest) {
  }

  public get crossAccountAuthorizations(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCrossAccountAuthorizations',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListCrossAccountAuthorizations.CrossAccountAuthorizations'),
        outputPath: 'CrossAccountAuthorizations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCrossAccountAuthorizations.CrossAccountAuthorizations', props);
    return resource.getResponseField('CrossAccountAuthorizations') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCrossAccountAuthorizations',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListCrossAccountAuthorizations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCrossAccountAuthorizations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53RecoveryReadinessResponsesListReadinessChecks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessListReadinessChecksRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReadinessChecks',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListReadinessChecks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReadinessChecks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get readinessChecks(): shapes.Route53RecoveryReadinessReadinessCheckOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReadinessChecks',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListReadinessChecks.ReadinessChecks'),
        outputPath: 'ReadinessChecks',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReadinessChecks.ReadinessChecks', props);
    return resource.getResponseField('ReadinessChecks') as unknown as shapes.Route53RecoveryReadinessReadinessCheckOutput[];
  }

}

export class Route53RecoveryReadinessResponsesListRecoveryGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessListRecoveryGroupsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecoveryGroups',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListRecoveryGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecoveryGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get recoveryGroups(): shapes.Route53RecoveryReadinessRecoveryGroupOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecoveryGroups',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListRecoveryGroups.RecoveryGroups'),
        outputPath: 'RecoveryGroups',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecoveryGroups.RecoveryGroups', props);
    return resource.getResponseField('RecoveryGroups') as unknown as shapes.Route53RecoveryReadinessRecoveryGroupOutput[];
  }

}

export class Route53RecoveryReadinessResponsesListResourceSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessListResourceSetsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceSets',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListResourceSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get resourceSets(): shapes.Route53RecoveryReadinessResourceSetOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceSets',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListResourceSets.ResourceSets'),
        outputPath: 'ResourceSets',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceSets.ResourceSets', props);
    return resource.getResponseField('ResourceSets') as unknown as shapes.Route53RecoveryReadinessResourceSetOutput[];
  }

}

export class Route53RecoveryReadinessResponsesListRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessListRulesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRules',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListRules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get rules(): shapes.Route53RecoveryReadinessListRulesOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRules',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListRules.Rules'),
        outputPath: 'Rules',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.Route53RecoveryReadinessListRulesOutput[];
  }

}

export class Route53RecoveryReadinessResponsesListTagsForResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessListTagsForResourcesRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResources',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.ListTagsForResources.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResources.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesUpdateCell {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessUpdateCellRequest) {
  }

  public get cellArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateCell.CellArn'),
        outputPath: 'CellArn',
        parameters: {
          CellName: this.__input.cellName,
          Cells: this.__input.cells,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCell.CellArn', props);
    return resource.getResponseField('CellArn') as unknown as string;
  }

  public get cellName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateCell.CellName'),
        outputPath: 'CellName',
        parameters: {
          CellName: this.__input.cellName,
          Cells: this.__input.cells,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCell.CellName', props);
    return resource.getResponseField('CellName') as unknown as string;
  }

  public get cells(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateCell.Cells'),
        outputPath: 'Cells',
        parameters: {
          CellName: this.__input.cellName,
          Cells: this.__input.cells,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCell.Cells', props);
    return resource.getResponseField('Cells') as unknown as string[];
  }

  public get parentReadinessScopes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateCell.ParentReadinessScopes'),
        outputPath: 'ParentReadinessScopes',
        parameters: {
          CellName: this.__input.cellName,
          Cells: this.__input.cells,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCell.ParentReadinessScopes', props);
    return resource.getResponseField('ParentReadinessScopes') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCell',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateCell.Tags'),
        outputPath: 'Tags',
        parameters: {
          CellName: this.__input.cellName,
          Cells: this.__input.cells,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCell.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesUpdateReadinessCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessUpdateReadinessCheckRequest) {
  }

  public get readinessCheckArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateReadinessCheck.ReadinessCheckArn'),
        outputPath: 'ReadinessCheckArn',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceSetName: this.__input.resourceSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReadinessCheck.ReadinessCheckArn', props);
    return resource.getResponseField('ReadinessCheckArn') as unknown as string;
  }

  public get readinessCheckName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateReadinessCheck.ReadinessCheckName'),
        outputPath: 'ReadinessCheckName',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceSetName: this.__input.resourceSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReadinessCheck.ReadinessCheckName', props);
    return resource.getResponseField('ReadinessCheckName') as unknown as string;
  }

  public get resourceSet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateReadinessCheck.ResourceSet'),
        outputPath: 'ResourceSet',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceSetName: this.__input.resourceSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReadinessCheck.ResourceSet', props);
    return resource.getResponseField('ResourceSet') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReadinessCheck',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateReadinessCheck.Tags'),
        outputPath: 'Tags',
        parameters: {
          ReadinessCheckName: this.__input.readinessCheckName,
          ResourceSetName: this.__input.resourceSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReadinessCheck.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesUpdateRecoveryGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessUpdateRecoveryGroupRequest) {
  }

  public get cells(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateRecoveryGroup.Cells'),
        outputPath: 'Cells',
        parameters: {
          Cells: this.__input.cells,
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecoveryGroup.Cells', props);
    return resource.getResponseField('Cells') as unknown as string[];
  }

  public get recoveryGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateRecoveryGroup.RecoveryGroupArn'),
        outputPath: 'RecoveryGroupArn',
        parameters: {
          Cells: this.__input.cells,
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecoveryGroup.RecoveryGroupArn', props);
    return resource.getResponseField('RecoveryGroupArn') as unknown as string;
  }

  public get recoveryGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateRecoveryGroup.RecoveryGroupName'),
        outputPath: 'RecoveryGroupName',
        parameters: {
          Cells: this.__input.cells,
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecoveryGroup.RecoveryGroupName', props);
    return resource.getResponseField('RecoveryGroupName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecoveryGroup',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateRecoveryGroup.Tags'),
        outputPath: 'Tags',
        parameters: {
          Cells: this.__input.cells,
          RecoveryGroupName: this.__input.recoveryGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecoveryGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class Route53RecoveryReadinessResponsesUpdateResourceSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryReadinessUpdateResourceSetRequest) {
  }

  public get resourceSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateResourceSet.ResourceSetArn'),
        outputPath: 'ResourceSetArn',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
          ResourceSetType: this.__input.resourceSetType,
          Resources: this.__input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceSet.ResourceSetArn', props);
    return resource.getResponseField('ResourceSetArn') as unknown as string;
  }

  public get resourceSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateResourceSet.ResourceSetName'),
        outputPath: 'ResourceSetName',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
          ResourceSetType: this.__input.resourceSetType,
          Resources: this.__input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceSet.ResourceSetName', props);
    return resource.getResponseField('ResourceSetName') as unknown as string;
  }

  public get resourceSetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateResourceSet.ResourceSetType'),
        outputPath: 'ResourceSetType',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
          ResourceSetType: this.__input.resourceSetType,
          Resources: this.__input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceSet.ResourceSetType', props);
    return resource.getResponseField('ResourceSetType') as unknown as string;
  }

  public get resources(): shapes.Route53RecoveryReadinessResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateResourceSet.Resources'),
        outputPath: 'Resources',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
          ResourceSetType: this.__input.resourceSetType,
          Resources: this.__input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceSet.Resources', props);
    return resource.getResponseField('Resources') as unknown as shapes.Route53RecoveryReadinessResource[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceSet',
        service: 'Route53RecoveryReadiness',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryReadiness.UpdateResourceSet.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceSetName: this.__input.resourceSetName,
          ResourceSetType: this.__input.resourceSetType,
          Resources: this.__input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

