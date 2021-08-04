import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTThingsGraphClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateEntityToThing(input: shapes.IoTThingsGraphAssociateEntityToThingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateEntityToThing',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.AssociateEntityToThing'),
        parameters: {
          thingName: input.thingName,
          entityId: input.entityId,
          namespaceVersion: input.namespaceVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateEntityToThing', props);
  }

  public createFlowTemplate(input: shapes.IoTThingsGraphCreateFlowTemplateRequest): IoTThingsGraphResponsesCreateFlowTemplate {
    return new IoTThingsGraphResponsesCreateFlowTemplate(this, this.__resources, input);
  }

  public createSystemInstance(input: shapes.IoTThingsGraphCreateSystemInstanceRequest): IoTThingsGraphResponsesCreateSystemInstance {
    return new IoTThingsGraphResponsesCreateSystemInstance(this, this.__resources, input);
  }

  public createSystemTemplate(input: shapes.IoTThingsGraphCreateSystemTemplateRequest): IoTThingsGraphResponsesCreateSystemTemplate {
    return new IoTThingsGraphResponsesCreateSystemTemplate(this, this.__resources, input);
  }

  public deleteFlowTemplate(input: shapes.IoTThingsGraphDeleteFlowTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeleteFlowTemplate'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFlowTemplate', props);
  }

  public deleteNamespace(): IoTThingsGraphResponsesDeleteNamespace {
    return new IoTThingsGraphResponsesDeleteNamespace(this, this.__resources);
  }

  public deleteSystemInstance(input: shapes.IoTThingsGraphDeleteSystemInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeleteSystemInstance'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSystemInstance', props);
  }

  public deleteSystemTemplate(input: shapes.IoTThingsGraphDeleteSystemTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeleteSystemTemplate'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSystemTemplate', props);
  }

  public deploySystemInstance(input: shapes.IoTThingsGraphDeploySystemInstanceRequest): IoTThingsGraphResponsesDeploySystemInstance {
    return new IoTThingsGraphResponsesDeploySystemInstance(this, this.__resources, input);
  }

  public deprecateFlowTemplate(input: shapes.IoTThingsGraphDeprecateFlowTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deprecateFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeprecateFlowTemplate'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeprecateFlowTemplate', props);
  }

  public deprecateSystemTemplate(input: shapes.IoTThingsGraphDeprecateSystemTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deprecateSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeprecateSystemTemplate'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeprecateSystemTemplate', props);
  }

  public describeNamespace(input: shapes.IoTThingsGraphDescribeNamespaceRequest): IoTThingsGraphResponsesDescribeNamespace {
    return new IoTThingsGraphResponsesDescribeNamespace(this, this.__resources, input);
  }

  public dissociateEntityFromThing(input: shapes.IoTThingsGraphDissociateEntityFromThingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'dissociateEntityFromThing',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DissociateEntityFromThing'),
        parameters: {
          thingName: input.thingName,
          entityType: input.entityType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DissociateEntityFromThing', props);
  }

  public fetchEntities(input: shapes.IoTThingsGraphGetEntitiesRequest): IoTThingsGraphResponsesFetchEntities {
    return new IoTThingsGraphResponsesFetchEntities(this, this.__resources, input);
  }

  public fetchFlowTemplate(input: shapes.IoTThingsGraphGetFlowTemplateRequest): IoTThingsGraphResponsesFetchFlowTemplate {
    return new IoTThingsGraphResponsesFetchFlowTemplate(this, this.__resources, input);
  }

  public fetchFlowTemplateRevisions(input: shapes.IoTThingsGraphGetFlowTemplateRevisionsRequest): IoTThingsGraphResponsesFetchFlowTemplateRevisions {
    return new IoTThingsGraphResponsesFetchFlowTemplateRevisions(this, this.__resources, input);
  }

  public fetchNamespaceDeletionStatus(): IoTThingsGraphResponsesFetchNamespaceDeletionStatus {
    return new IoTThingsGraphResponsesFetchNamespaceDeletionStatus(this, this.__resources);
  }

  public fetchSystemInstance(input: shapes.IoTThingsGraphGetSystemInstanceRequest): IoTThingsGraphResponsesFetchSystemInstance {
    return new IoTThingsGraphResponsesFetchSystemInstance(this, this.__resources, input);
  }

  public fetchSystemTemplate(input: shapes.IoTThingsGraphGetSystemTemplateRequest): IoTThingsGraphResponsesFetchSystemTemplate {
    return new IoTThingsGraphResponsesFetchSystemTemplate(this, this.__resources, input);
  }

  public fetchSystemTemplateRevisions(input: shapes.IoTThingsGraphGetSystemTemplateRevisionsRequest): IoTThingsGraphResponsesFetchSystemTemplateRevisions {
    return new IoTThingsGraphResponsesFetchSystemTemplateRevisions(this, this.__resources, input);
  }

  public fetchUploadStatus(input: shapes.IoTThingsGraphGetUploadStatusRequest): IoTThingsGraphResponsesFetchUploadStatus {
    return new IoTThingsGraphResponsesFetchUploadStatus(this, this.__resources, input);
  }

  public listFlowExecutionMessages(input: shapes.IoTThingsGraphListFlowExecutionMessagesRequest): IoTThingsGraphResponsesListFlowExecutionMessages {
    return new IoTThingsGraphResponsesListFlowExecutionMessages(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTThingsGraphListTagsForResourceRequest): IoTThingsGraphResponsesListTagsForResource {
    return new IoTThingsGraphResponsesListTagsForResource(this, this.__resources, input);
  }

  public searchEntities(input: shapes.IoTThingsGraphSearchEntitiesRequest): IoTThingsGraphResponsesSearchEntities {
    return new IoTThingsGraphResponsesSearchEntities(this, this.__resources, input);
  }

  public searchFlowExecutions(input: shapes.IoTThingsGraphSearchFlowExecutionsRequest): IoTThingsGraphResponsesSearchFlowExecutions {
    return new IoTThingsGraphResponsesSearchFlowExecutions(this, this.__resources, input);
  }

  public searchFlowTemplates(input: shapes.IoTThingsGraphSearchFlowTemplatesRequest): IoTThingsGraphResponsesSearchFlowTemplates {
    return new IoTThingsGraphResponsesSearchFlowTemplates(this, this.__resources, input);
  }

  public searchSystemInstances(input: shapes.IoTThingsGraphSearchSystemInstancesRequest): IoTThingsGraphResponsesSearchSystemInstances {
    return new IoTThingsGraphResponsesSearchSystemInstances(this, this.__resources, input);
  }

  public searchSystemTemplates(input: shapes.IoTThingsGraphSearchSystemTemplatesRequest): IoTThingsGraphResponsesSearchSystemTemplates {
    return new IoTThingsGraphResponsesSearchSystemTemplates(this, this.__resources, input);
  }

  public searchThings(input: shapes.IoTThingsGraphSearchThingsRequest): IoTThingsGraphResponsesSearchThings {
    return new IoTThingsGraphResponsesSearchThings(this, this.__resources, input);
  }

  public tagResource(input: shapes.IoTThingsGraphTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public undeploySystemInstance(input: shapes.IoTThingsGraphUndeploySystemInstanceRequest): IoTThingsGraphResponsesUndeploySystemInstance {
    return new IoTThingsGraphResponsesUndeploySystemInstance(this, this.__resources, input);
  }

  public untagResource(input: shapes.IoTThingsGraphUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateFlowTemplate(input: shapes.IoTThingsGraphUpdateFlowTemplateRequest): IoTThingsGraphResponsesUpdateFlowTemplate {
    return new IoTThingsGraphResponsesUpdateFlowTemplate(this, this.__resources, input);
  }

  public updateSystemTemplate(input: shapes.IoTThingsGraphUpdateSystemTemplateRequest): IoTThingsGraphResponsesUpdateSystemTemplate {
    return new IoTThingsGraphResponsesUpdateSystemTemplate(this, this.__resources, input);
  }

  public uploadEntityDefinitions(input: shapes.IoTThingsGraphUploadEntityDefinitionsRequest): IoTThingsGraphResponsesUploadEntityDefinitions {
    return new IoTThingsGraphResponsesUploadEntityDefinitions(this, this.__resources, input);
  }

}

export class IoTThingsGraphResponsesCreateFlowTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphCreateFlowTemplateRequest) {
  }

  public get summary(): IoTThingsGraphResponsesCreateFlowTemplateSummary {
    return new IoTThingsGraphResponsesCreateFlowTemplateSummary(this.__scope, this.__resources, this.__input);
  }

}

export class IoTThingsGraphResponsesCreateFlowTemplateSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphCreateFlowTemplateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateFlowTemplate.summary.id'),
        outputPath: 'summary.id',
        parameters: {
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlowTemplate.summary.id', props);
    return resource.getResponseField('summary.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateFlowTemplate.summary.arn'),
        outputPath: 'summary.arn',
        parameters: {
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlowTemplate.summary.arn', props);
    return resource.getResponseField('summary.arn') as unknown as string;
  }

  public get revisionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateFlowTemplate.summary.revisionNumber'),
        outputPath: 'summary.revisionNumber',
        parameters: {
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlowTemplate.summary.revisionNumber', props);
    return resource.getResponseField('summary.revisionNumber') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateFlowTemplate.summary.createdAt'),
        outputPath: 'summary.createdAt',
        parameters: {
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlowTemplate.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphResponsesCreateSystemInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphCreateSystemInstanceRequest) {
  }

  public get summary(): IoTThingsGraphResponsesCreateSystemInstanceSummary {
    return new IoTThingsGraphResponsesCreateSystemInstanceSummary(this.__scope, this.__resources, this.__input);
  }

}

export class IoTThingsGraphResponsesCreateSystemInstanceSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphCreateSystemInstanceRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemInstance.summary.id'),
        outputPath: 'summary.id',
        parameters: {
          tags: this.__input.tags,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          target: this.__input.target,
          greengrassGroupName: this.__input.greengrassGroupName,
          s3BucketName: this.__input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.__input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.__input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.__input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemInstance.summary.id', props);
    return resource.getResponseField('summary.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemInstance.summary.arn'),
        outputPath: 'summary.arn',
        parameters: {
          tags: this.__input.tags,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          target: this.__input.target,
          greengrassGroupName: this.__input.greengrassGroupName,
          s3BucketName: this.__input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.__input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.__input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.__input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemInstance.summary.arn', props);
    return resource.getResponseField('summary.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemInstance.summary.status'),
        outputPath: 'summary.status',
        parameters: {
          tags: this.__input.tags,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          target: this.__input.target,
          greengrassGroupName: this.__input.greengrassGroupName,
          s3BucketName: this.__input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.__input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.__input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.__input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemInstance.summary.status', props);
    return resource.getResponseField('summary.status') as unknown as string;
  }

  public get target(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemInstance.summary.target'),
        outputPath: 'summary.target',
        parameters: {
          tags: this.__input.tags,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          target: this.__input.target,
          greengrassGroupName: this.__input.greengrassGroupName,
          s3BucketName: this.__input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.__input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.__input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.__input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemInstance.summary.target', props);
    return resource.getResponseField('summary.target') as unknown as string;
  }

  public get greengrassGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemInstance.summary.greengrassGroupName'),
        outputPath: 'summary.greengrassGroupName',
        parameters: {
          tags: this.__input.tags,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          target: this.__input.target,
          greengrassGroupName: this.__input.greengrassGroupName,
          s3BucketName: this.__input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.__input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.__input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.__input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemInstance.summary.greengrassGroupName', props);
    return resource.getResponseField('summary.greengrassGroupName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemInstance.summary.createdAt'),
        outputPath: 'summary.createdAt',
        parameters: {
          tags: this.__input.tags,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          target: this.__input.target,
          greengrassGroupName: this.__input.greengrassGroupName,
          s3BucketName: this.__input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.__input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.__input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.__input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemInstance.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemInstance.summary.updatedAt'),
        outputPath: 'summary.updatedAt',
        parameters: {
          tags: this.__input.tags,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          target: this.__input.target,
          greengrassGroupName: this.__input.greengrassGroupName,
          s3BucketName: this.__input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.__input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.__input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.__input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemInstance.summary.updatedAt', props);
    return resource.getResponseField('summary.updatedAt') as unknown as string;
  }

  public get greengrassGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemInstance.summary.greengrassGroupId'),
        outputPath: 'summary.greengrassGroupId',
        parameters: {
          tags: this.__input.tags,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          target: this.__input.target,
          greengrassGroupName: this.__input.greengrassGroupName,
          s3BucketName: this.__input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.__input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.__input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.__input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemInstance.summary.greengrassGroupId', props);
    return resource.getResponseField('summary.greengrassGroupId') as unknown as string;
  }

  public get greengrassGroupVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemInstance.summary.greengrassGroupVersionId'),
        outputPath: 'summary.greengrassGroupVersionId',
        parameters: {
          tags: this.__input.tags,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          target: this.__input.target,
          greengrassGroupName: this.__input.greengrassGroupName,
          s3BucketName: this.__input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.__input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.__input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.__input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemInstance.summary.greengrassGroupVersionId', props);
    return resource.getResponseField('summary.greengrassGroupVersionId') as unknown as string;
  }

}

export class IoTThingsGraphResponsesCreateSystemTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphCreateSystemTemplateRequest) {
  }

  public get summary(): IoTThingsGraphResponsesCreateSystemTemplateSummary {
    return new IoTThingsGraphResponsesCreateSystemTemplateSummary(this.__scope, this.__resources, this.__input);
  }

}

export class IoTThingsGraphResponsesCreateSystemTemplateSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphCreateSystemTemplateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemTemplate.summary.id'),
        outputPath: 'summary.id',
        parameters: {
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemTemplate.summary.id', props);
    return resource.getResponseField('summary.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemTemplate.summary.arn'),
        outputPath: 'summary.arn',
        parameters: {
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemTemplate.summary.arn', props);
    return resource.getResponseField('summary.arn') as unknown as string;
  }

  public get revisionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemTemplate.summary.revisionNumber'),
        outputPath: 'summary.revisionNumber',
        parameters: {
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemTemplate.summary.revisionNumber', props);
    return resource.getResponseField('summary.revisionNumber') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.CreateSystemTemplate.summary.createdAt'),
        outputPath: 'summary.createdAt',
        parameters: {
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSystemTemplate.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphResponsesDeleteNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get namespaceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNamespace',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeleteNamespace.namespaceArn'),
        outputPath: 'namespaceArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNamespace.namespaceArn', props);
    return resource.getResponseField('namespaceArn') as unknown as string;
  }

  public get namespaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNamespace',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeleteNamespace.namespaceName'),
        outputPath: 'namespaceName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNamespace.namespaceName', props);
    return resource.getResponseField('namespaceName') as unknown as string;
  }

}

export class IoTThingsGraphResponsesDeploySystemInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphDeploySystemInstanceRequest) {
  }

  public get summary(): IoTThingsGraphResponsesDeploySystemInstanceSummary {
    return new IoTThingsGraphResponsesDeploySystemInstanceSummary(this.__scope, this.__resources, this.__input);
  }

  public get greengrassDeploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeploySystemInstance.greengrassDeploymentId'),
        outputPath: 'greengrassDeploymentId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeploySystemInstance.greengrassDeploymentId', props);
    return resource.getResponseField('greengrassDeploymentId') as unknown as string;
  }

}

export class IoTThingsGraphResponsesDeploySystemInstanceSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphDeploySystemInstanceRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeploySystemInstance.summary.id'),
        outputPath: 'summary.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeploySystemInstance.summary.id', props);
    return resource.getResponseField('summary.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeploySystemInstance.summary.arn'),
        outputPath: 'summary.arn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeploySystemInstance.summary.arn', props);
    return resource.getResponseField('summary.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeploySystemInstance.summary.status'),
        outputPath: 'summary.status',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeploySystemInstance.summary.status', props);
    return resource.getResponseField('summary.status') as unknown as string;
  }

  public get target(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeploySystemInstance.summary.target'),
        outputPath: 'summary.target',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeploySystemInstance.summary.target', props);
    return resource.getResponseField('summary.target') as unknown as string;
  }

  public get greengrassGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeploySystemInstance.summary.greengrassGroupName'),
        outputPath: 'summary.greengrassGroupName',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeploySystemInstance.summary.greengrassGroupName', props);
    return resource.getResponseField('summary.greengrassGroupName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeploySystemInstance.summary.createdAt'),
        outputPath: 'summary.createdAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeploySystemInstance.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeploySystemInstance.summary.updatedAt'),
        outputPath: 'summary.updatedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeploySystemInstance.summary.updatedAt', props);
    return resource.getResponseField('summary.updatedAt') as unknown as string;
  }

  public get greengrassGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeploySystemInstance.summary.greengrassGroupId'),
        outputPath: 'summary.greengrassGroupId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeploySystemInstance.summary.greengrassGroupId', props);
    return resource.getResponseField('summary.greengrassGroupId') as unknown as string;
  }

  public get greengrassGroupVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DeploySystemInstance.summary.greengrassGroupVersionId'),
        outputPath: 'summary.greengrassGroupVersionId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeploySystemInstance.summary.greengrassGroupVersionId', props);
    return resource.getResponseField('summary.greengrassGroupVersionId') as unknown as string;
  }

}

export class IoTThingsGraphResponsesDescribeNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphDescribeNamespaceRequest) {
  }

  public get namespaceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DescribeNamespace.namespaceArn'),
        outputPath: 'namespaceArn',
        parameters: {
          namespaceName: this.__input.namespaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.namespaceArn', props);
    return resource.getResponseField('namespaceArn') as unknown as string;
  }

  public get namespaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DescribeNamespace.namespaceName'),
        outputPath: 'namespaceName',
        parameters: {
          namespaceName: this.__input.namespaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.namespaceName', props);
    return resource.getResponseField('namespaceName') as unknown as string;
  }

  public get trackingNamespaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DescribeNamespace.trackingNamespaceName'),
        outputPath: 'trackingNamespaceName',
        parameters: {
          namespaceName: this.__input.namespaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.trackingNamespaceName', props);
    return resource.getResponseField('trackingNamespaceName') as unknown as string;
  }

  public get trackingNamespaceVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DescribeNamespace.trackingNamespaceVersion'),
        outputPath: 'trackingNamespaceVersion',
        parameters: {
          namespaceName: this.__input.namespaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.trackingNamespaceVersion', props);
    return resource.getResponseField('trackingNamespaceVersion') as unknown as number;
  }

  public get namespaceVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.DescribeNamespace.namespaceVersion'),
        outputPath: 'namespaceVersion',
        parameters: {
          namespaceName: this.__input.namespaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.namespaceVersion', props);
    return resource.getResponseField('namespaceVersion') as unknown as number;
  }

}

export class IoTThingsGraphResponsesFetchEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetEntitiesRequest) {
  }

  public get descriptions(): shapes.IoTThingsGraphEntityDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEntities',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetEntities.descriptions'),
        outputPath: 'descriptions',
        parameters: {
          ids: this.__input.ids,
          namespaceVersion: this.__input.namespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEntities.descriptions', props);
    return resource.getResponseField('descriptions') as unknown as shapes.IoTThingsGraphEntityDescription[];
  }

}

export class IoTThingsGraphResponsesFetchFlowTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetFlowTemplateRequest) {
  }

  public get description(): IoTThingsGraphResponsesFetchFlowTemplateDescription {
    return new IoTThingsGraphResponsesFetchFlowTemplateDescription(this.__scope, this.__resources, this.__input);
  }

}

export class IoTThingsGraphResponsesFetchFlowTemplateDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetFlowTemplateRequest) {
  }

  public get summary(): IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary {
    return new IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary(this.__scope, this.__resources, this.__input);
  }

  public get definition(): IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition {
    return new IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get validatedNamespaceVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetFlowTemplate.description.validatedNamespaceVersion'),
        outputPath: 'description.validatedNamespaceVersion',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFlowTemplate.description.validatedNamespaceVersion', props);
    return resource.getResponseField('description.validatedNamespaceVersion') as unknown as number;
  }

}

export class IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetFlowTemplateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetFlowTemplate.description.summary.id'),
        outputPath: 'description.summary.id',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFlowTemplate.description.summary.id', props);
    return resource.getResponseField('description.summary.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetFlowTemplate.description.summary.arn'),
        outputPath: 'description.summary.arn',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFlowTemplate.description.summary.arn', props);
    return resource.getResponseField('description.summary.arn') as unknown as string;
  }

  public get revisionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetFlowTemplate.description.summary.revisionNumber'),
        outputPath: 'description.summary.revisionNumber',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFlowTemplate.description.summary.revisionNumber', props);
    return resource.getResponseField('description.summary.revisionNumber') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetFlowTemplate.description.summary.createdAt'),
        outputPath: 'description.summary.createdAt',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFlowTemplate.description.summary.createdAt', props);
    return resource.getResponseField('description.summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetFlowTemplateRequest) {
  }

  public get language(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetFlowTemplate.description.definition.language'),
        outputPath: 'description.definition.language',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFlowTemplate.description.definition.language', props);
    return resource.getResponseField('description.definition.language') as unknown as string;
  }

  public get text(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetFlowTemplate.description.definition.text'),
        outputPath: 'description.definition.text',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFlowTemplate.description.definition.text', props);
    return resource.getResponseField('description.definition.text') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchFlowTemplateRevisions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetFlowTemplateRevisionsRequest) {
  }

  public get summaries(): shapes.IoTThingsGraphFlowTemplateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFlowTemplateRevisions',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetFlowTemplateRevisions.summaries'),
        outputPath: 'summaries',
        parameters: {
          id: this.__input.id,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFlowTemplateRevisions.summaries', props);
    return resource.getResponseField('summaries') as unknown as shapes.IoTThingsGraphFlowTemplateSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFlowTemplateRevisions',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetFlowTemplateRevisions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          id: this.__input.id,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFlowTemplateRevisions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchNamespaceDeletionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get namespaceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespaceDeletionStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetNamespaceDeletionStatus.namespaceArn'),
        outputPath: 'namespaceArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespaceDeletionStatus.namespaceArn', props);
    return resource.getResponseField('namespaceArn') as unknown as string;
  }

  public get namespaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespaceDeletionStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetNamespaceDeletionStatus.namespaceName'),
        outputPath: 'namespaceName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespaceDeletionStatus.namespaceName', props);
    return resource.getResponseField('namespaceName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespaceDeletionStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetNamespaceDeletionStatus.status'),
        outputPath: 'status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespaceDeletionStatus.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespaceDeletionStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetNamespaceDeletionStatus.errorCode'),
        outputPath: 'errorCode',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespaceDeletionStatus.errorCode', props);
    return resource.getResponseField('errorCode') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespaceDeletionStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetNamespaceDeletionStatus.errorMessage'),
        outputPath: 'errorMessage',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespaceDeletionStatus.errorMessage', props);
    return resource.getResponseField('errorMessage') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchSystemInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetSystemInstanceRequest) {
  }

  public get description(): IoTThingsGraphResponsesFetchSystemInstanceDescription {
    return new IoTThingsGraphResponsesFetchSystemInstanceDescription(this.__scope, this.__resources, this.__input);
  }

}

export class IoTThingsGraphResponsesFetchSystemInstanceDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetSystemInstanceRequest) {
  }

  public get summary(): IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary {
    return new IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary(this.__scope, this.__resources, this.__input);
  }

  public get definition(): IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition {
    return new IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.s3BucketName'),
        outputPath: 'description.s3BucketName',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.s3BucketName', props);
    return resource.getResponseField('description.s3BucketName') as unknown as string;
  }

  public get metricsConfiguration(): IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration {
    return new IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get validatedNamespaceVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.validatedNamespaceVersion'),
        outputPath: 'description.validatedNamespaceVersion',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.validatedNamespaceVersion', props);
    return resource.getResponseField('description.validatedNamespaceVersion') as unknown as number;
  }

  public get validatedDependencyRevisions(): shapes.IoTThingsGraphDependencyRevision[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.validatedDependencyRevisions'),
        outputPath: 'description.validatedDependencyRevisions',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.validatedDependencyRevisions', props);
    return resource.getResponseField('description.validatedDependencyRevisions') as unknown as shapes.IoTThingsGraphDependencyRevision[];
  }

  public get flowActionsRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.flowActionsRoleArn'),
        outputPath: 'description.flowActionsRoleArn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.flowActionsRoleArn', props);
    return resource.getResponseField('description.flowActionsRoleArn') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetSystemInstanceRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.summary.id'),
        outputPath: 'description.summary.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.summary.id', props);
    return resource.getResponseField('description.summary.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.summary.arn'),
        outputPath: 'description.summary.arn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.summary.arn', props);
    return resource.getResponseField('description.summary.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.summary.status'),
        outputPath: 'description.summary.status',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.summary.status', props);
    return resource.getResponseField('description.summary.status') as unknown as string;
  }

  public get target(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.summary.target'),
        outputPath: 'description.summary.target',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.summary.target', props);
    return resource.getResponseField('description.summary.target') as unknown as string;
  }

  public get greengrassGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.summary.greengrassGroupName'),
        outputPath: 'description.summary.greengrassGroupName',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.summary.greengrassGroupName', props);
    return resource.getResponseField('description.summary.greengrassGroupName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.summary.createdAt'),
        outputPath: 'description.summary.createdAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.summary.createdAt', props);
    return resource.getResponseField('description.summary.createdAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.summary.updatedAt'),
        outputPath: 'description.summary.updatedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.summary.updatedAt', props);
    return resource.getResponseField('description.summary.updatedAt') as unknown as string;
  }

  public get greengrassGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.summary.greengrassGroupId'),
        outputPath: 'description.summary.greengrassGroupId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.summary.greengrassGroupId', props);
    return resource.getResponseField('description.summary.greengrassGroupId') as unknown as string;
  }

  public get greengrassGroupVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.summary.greengrassGroupVersionId'),
        outputPath: 'description.summary.greengrassGroupVersionId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.summary.greengrassGroupVersionId', props);
    return resource.getResponseField('description.summary.greengrassGroupVersionId') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetSystemInstanceRequest) {
  }

  public get language(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.definition.language'),
        outputPath: 'description.definition.language',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.definition.language', props);
    return resource.getResponseField('description.definition.language') as unknown as string;
  }

  public get text(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.definition.text'),
        outputPath: 'description.definition.text',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.definition.text', props);
    return resource.getResponseField('description.definition.text') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetSystemInstanceRequest) {
  }

  public get cloudMetricEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.metricsConfiguration.cloudMetricEnabled'),
        outputPath: 'description.metricsConfiguration.cloudMetricEnabled',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.metricsConfiguration.cloudMetricEnabled', props);
    return resource.getResponseField('description.metricsConfiguration.cloudMetricEnabled') as unknown as boolean;
  }

  public get metricRuleRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemInstance.description.metricsConfiguration.metricRuleRoleArn'),
        outputPath: 'description.metricsConfiguration.metricRuleRoleArn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemInstance.description.metricsConfiguration.metricRuleRoleArn', props);
    return resource.getResponseField('description.metricsConfiguration.metricRuleRoleArn') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchSystemTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetSystemTemplateRequest) {
  }

  public get description(): IoTThingsGraphResponsesFetchSystemTemplateDescription {
    return new IoTThingsGraphResponsesFetchSystemTemplateDescription(this.__scope, this.__resources, this.__input);
  }

}

export class IoTThingsGraphResponsesFetchSystemTemplateDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetSystemTemplateRequest) {
  }

  public get summary(): IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary {
    return new IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary(this.__scope, this.__resources, this.__input);
  }

  public get definition(): IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition {
    return new IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get validatedNamespaceVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemTemplate.description.validatedNamespaceVersion'),
        outputPath: 'description.validatedNamespaceVersion',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemTemplate.description.validatedNamespaceVersion', props);
    return resource.getResponseField('description.validatedNamespaceVersion') as unknown as number;
  }

}

export class IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetSystemTemplateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemTemplate.description.summary.id'),
        outputPath: 'description.summary.id',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemTemplate.description.summary.id', props);
    return resource.getResponseField('description.summary.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemTemplate.description.summary.arn'),
        outputPath: 'description.summary.arn',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemTemplate.description.summary.arn', props);
    return resource.getResponseField('description.summary.arn') as unknown as string;
  }

  public get revisionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemTemplate.description.summary.revisionNumber'),
        outputPath: 'description.summary.revisionNumber',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemTemplate.description.summary.revisionNumber', props);
    return resource.getResponseField('description.summary.revisionNumber') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemTemplate.description.summary.createdAt'),
        outputPath: 'description.summary.createdAt',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemTemplate.description.summary.createdAt', props);
    return resource.getResponseField('description.summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetSystemTemplateRequest) {
  }

  public get language(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemTemplate.description.definition.language'),
        outputPath: 'description.definition.language',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemTemplate.description.definition.language', props);
    return resource.getResponseField('description.definition.language') as unknown as string;
  }

  public get text(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemTemplate.description.definition.text'),
        outputPath: 'description.definition.text',
        parameters: {
          id: this.__input.id,
          revisionNumber: this.__input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemTemplate.description.definition.text', props);
    return resource.getResponseField('description.definition.text') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchSystemTemplateRevisions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetSystemTemplateRevisionsRequest) {
  }

  public get summaries(): shapes.IoTThingsGraphSystemTemplateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemTemplateRevisions',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemTemplateRevisions.summaries'),
        outputPath: 'summaries',
        parameters: {
          id: this.__input.id,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemTemplateRevisions.summaries', props);
    return resource.getResponseField('summaries') as unknown as shapes.IoTThingsGraphSystemTemplateSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSystemTemplateRevisions',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetSystemTemplateRevisions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          id: this.__input.id,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSystemTemplateRevisions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphResponsesFetchUploadStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphGetUploadStatusRequest) {
  }

  public get uploadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUploadStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetUploadStatus.uploadId'),
        outputPath: 'uploadId',
        parameters: {
          uploadId: this.__input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUploadStatus.uploadId', props);
    return resource.getResponseField('uploadId') as unknown as string;
  }

  public get uploadStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUploadStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetUploadStatus.uploadStatus'),
        outputPath: 'uploadStatus',
        parameters: {
          uploadId: this.__input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUploadStatus.uploadStatus', props);
    return resource.getResponseField('uploadStatus') as unknown as string;
  }

  public get namespaceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUploadStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetUploadStatus.namespaceArn'),
        outputPath: 'namespaceArn',
        parameters: {
          uploadId: this.__input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUploadStatus.namespaceArn', props);
    return resource.getResponseField('namespaceArn') as unknown as string;
  }

  public get namespaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUploadStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetUploadStatus.namespaceName'),
        outputPath: 'namespaceName',
        parameters: {
          uploadId: this.__input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUploadStatus.namespaceName', props);
    return resource.getResponseField('namespaceName') as unknown as string;
  }

  public get namespaceVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUploadStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetUploadStatus.namespaceVersion'),
        outputPath: 'namespaceVersion',
        parameters: {
          uploadId: this.__input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUploadStatus.namespaceVersion', props);
    return resource.getResponseField('namespaceVersion') as unknown as number;
  }

  public get failureReason(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUploadStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetUploadStatus.failureReason'),
        outputPath: 'failureReason',
        parameters: {
          uploadId: this.__input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUploadStatus.failureReason', props);
    return resource.getResponseField('failureReason') as unknown as string[];
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUploadStatus',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.GetUploadStatus.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          uploadId: this.__input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUploadStatus.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

}

export class IoTThingsGraphResponsesListFlowExecutionMessages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphListFlowExecutionMessagesRequest) {
  }

  public get messages(): shapes.IoTThingsGraphFlowExecutionMessage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFlowExecutionMessages',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.ListFlowExecutionMessages.messages'),
        outputPath: 'messages',
        parameters: {
          flowExecutionId: this.__input.flowExecutionId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFlowExecutionMessages.messages', props);
    return resource.getResponseField('messages') as unknown as shapes.IoTThingsGraphFlowExecutionMessage[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFlowExecutionMessages',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.ListFlowExecutionMessages.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          flowExecutionId: this.__input.flowExecutionId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFlowExecutionMessages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphListTagsForResourceRequest) {
  }

  public get tags(): shapes.IoTThingsGraphTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          maxResults: this.__input.maxResults,
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.IoTThingsGraphTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.ListTagsForResource.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphResponsesSearchEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphSearchEntitiesRequest) {
  }

  public get descriptions(): shapes.IoTThingsGraphEntityDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchEntities',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchEntities.descriptions'),
        outputPath: 'descriptions',
        parameters: {
          entityTypes: this.__input.entityTypes,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          namespaceVersion: this.__input.namespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchEntities.descriptions', props);
    return resource.getResponseField('descriptions') as unknown as shapes.IoTThingsGraphEntityDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchEntities',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchEntities.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          entityTypes: this.__input.entityTypes,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          namespaceVersion: this.__input.namespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchEntities.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphResponsesSearchFlowExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphSearchFlowExecutionsRequest) {
  }

  public get summaries(): shapes.IoTThingsGraphFlowExecutionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFlowExecutions',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchFlowExecutions.summaries'),
        outputPath: 'summaries',
        parameters: {
          systemInstanceId: this.__input.systemInstanceId,
          flowExecutionId: this.__input.flowExecutionId,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFlowExecutions.summaries', props);
    return resource.getResponseField('summaries') as unknown as shapes.IoTThingsGraphFlowExecutionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFlowExecutions',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchFlowExecutions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          systemInstanceId: this.__input.systemInstanceId,
          flowExecutionId: this.__input.flowExecutionId,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFlowExecutions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphResponsesSearchFlowTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphSearchFlowTemplatesRequest) {
  }

  public get summaries(): shapes.IoTThingsGraphFlowTemplateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFlowTemplates',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchFlowTemplates.summaries'),
        outputPath: 'summaries',
        parameters: {
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFlowTemplates.summaries', props);
    return resource.getResponseField('summaries') as unknown as shapes.IoTThingsGraphFlowTemplateSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFlowTemplates',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchFlowTemplates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFlowTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphResponsesSearchSystemInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphSearchSystemInstancesRequest) {
  }

  public get summaries(): shapes.IoTThingsGraphSystemInstanceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSystemInstances',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchSystemInstances.summaries'),
        outputPath: 'summaries',
        parameters: {
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchSystemInstances.summaries', props);
    return resource.getResponseField('summaries') as unknown as shapes.IoTThingsGraphSystemInstanceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSystemInstances',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchSystemInstances.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchSystemInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphResponsesSearchSystemTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphSearchSystemTemplatesRequest) {
  }

  public get summaries(): shapes.IoTThingsGraphSystemTemplateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSystemTemplates',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchSystemTemplates.summaries'),
        outputPath: 'summaries',
        parameters: {
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchSystemTemplates.summaries', props);
    return resource.getResponseField('summaries') as unknown as shapes.IoTThingsGraphSystemTemplateSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSystemTemplates',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchSystemTemplates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchSystemTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphResponsesSearchThings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphSearchThingsRequest) {
  }

  public get things(): shapes.IoTThingsGraphThing[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchThings',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchThings.things'),
        outputPath: 'things',
        parameters: {
          entityId: this.__input.entityId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          namespaceVersion: this.__input.namespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchThings.things', props);
    return resource.getResponseField('things') as unknown as shapes.IoTThingsGraphThing[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchThings',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.SearchThings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          entityId: this.__input.entityId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          namespaceVersion: this.__input.namespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchThings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphResponsesUndeploySystemInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphUndeploySystemInstanceRequest) {
  }

  public get summary(): IoTThingsGraphResponsesUndeploySystemInstanceSummary {
    return new IoTThingsGraphResponsesUndeploySystemInstanceSummary(this.__scope, this.__resources, this.__input);
  }

}

export class IoTThingsGraphResponsesUndeploySystemInstanceSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphUndeploySystemInstanceRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UndeploySystemInstance.summary.id'),
        outputPath: 'summary.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UndeploySystemInstance.summary.id', props);
    return resource.getResponseField('summary.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UndeploySystemInstance.summary.arn'),
        outputPath: 'summary.arn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UndeploySystemInstance.summary.arn', props);
    return resource.getResponseField('summary.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UndeploySystemInstance.summary.status'),
        outputPath: 'summary.status',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UndeploySystemInstance.summary.status', props);
    return resource.getResponseField('summary.status') as unknown as string;
  }

  public get target(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UndeploySystemInstance.summary.target'),
        outputPath: 'summary.target',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UndeploySystemInstance.summary.target', props);
    return resource.getResponseField('summary.target') as unknown as string;
  }

  public get greengrassGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UndeploySystemInstance.summary.greengrassGroupName'),
        outputPath: 'summary.greengrassGroupName',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UndeploySystemInstance.summary.greengrassGroupName', props);
    return resource.getResponseField('summary.greengrassGroupName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UndeploySystemInstance.summary.createdAt'),
        outputPath: 'summary.createdAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UndeploySystemInstance.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UndeploySystemInstance.summary.updatedAt'),
        outputPath: 'summary.updatedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UndeploySystemInstance.summary.updatedAt', props);
    return resource.getResponseField('summary.updatedAt') as unknown as string;
  }

  public get greengrassGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UndeploySystemInstance.summary.greengrassGroupId'),
        outputPath: 'summary.greengrassGroupId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UndeploySystemInstance.summary.greengrassGroupId', props);
    return resource.getResponseField('summary.greengrassGroupId') as unknown as string;
  }

  public get greengrassGroupVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeploySystemInstance',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UndeploySystemInstance.summary.greengrassGroupVersionId'),
        outputPath: 'summary.greengrassGroupVersionId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UndeploySystemInstance.summary.greengrassGroupVersionId', props);
    return resource.getResponseField('summary.greengrassGroupVersionId') as unknown as string;
  }

}

export class IoTThingsGraphResponsesUpdateFlowTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphUpdateFlowTemplateRequest) {
  }

  public get summary(): IoTThingsGraphResponsesUpdateFlowTemplateSummary {
    return new IoTThingsGraphResponsesUpdateFlowTemplateSummary(this.__scope, this.__resources, this.__input);
  }

}

export class IoTThingsGraphResponsesUpdateFlowTemplateSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphUpdateFlowTemplateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UpdateFlowTemplate.summary.id'),
        outputPath: 'summary.id',
        parameters: {
          id: this.__input.id,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowTemplate.summary.id', props);
    return resource.getResponseField('summary.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UpdateFlowTemplate.summary.arn'),
        outputPath: 'summary.arn',
        parameters: {
          id: this.__input.id,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowTemplate.summary.arn', props);
    return resource.getResponseField('summary.arn') as unknown as string;
  }

  public get revisionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UpdateFlowTemplate.summary.revisionNumber'),
        outputPath: 'summary.revisionNumber',
        parameters: {
          id: this.__input.id,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowTemplate.summary.revisionNumber', props);
    return resource.getResponseField('summary.revisionNumber') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UpdateFlowTemplate.summary.createdAt'),
        outputPath: 'summary.createdAt',
        parameters: {
          id: this.__input.id,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowTemplate.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphResponsesUpdateSystemTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphUpdateSystemTemplateRequest) {
  }

  public get summary(): IoTThingsGraphResponsesUpdateSystemTemplateSummary {
    return new IoTThingsGraphResponsesUpdateSystemTemplateSummary(this.__scope, this.__resources, this.__input);
  }

}

export class IoTThingsGraphResponsesUpdateSystemTemplateSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphUpdateSystemTemplateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UpdateSystemTemplate.summary.id'),
        outputPath: 'summary.id',
        parameters: {
          id: this.__input.id,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSystemTemplate.summary.id', props);
    return resource.getResponseField('summary.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UpdateSystemTemplate.summary.arn'),
        outputPath: 'summary.arn',
        parameters: {
          id: this.__input.id,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSystemTemplate.summary.arn', props);
    return resource.getResponseField('summary.arn') as unknown as string;
  }

  public get revisionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UpdateSystemTemplate.summary.revisionNumber'),
        outputPath: 'summary.revisionNumber',
        parameters: {
          id: this.__input.id,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSystemTemplate.summary.revisionNumber', props);
    return resource.getResponseField('summary.revisionNumber') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSystemTemplate',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UpdateSystemTemplate.summary.createdAt'),
        outputPath: 'summary.createdAt',
        parameters: {
          id: this.__input.id,
          definition: {
            language: this.__input.definition.language,
            text: this.__input.definition.text,
          },
          compatibleNamespaceVersion: this.__input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSystemTemplate.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphResponsesUploadEntityDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTThingsGraphUploadEntityDefinitionsRequest) {
  }

  public get uploadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadEntityDefinitions',
        service: 'IoTThingsGraph',
        physicalResourceId: cr.PhysicalResourceId.of('IoTThingsGraph.UploadEntityDefinitions.uploadId'),
        outputPath: 'uploadId',
        parameters: {
          document: {
            language: this.__input.document?.language,
            text: this.__input.document?.text,
          },
          syncWithPublicNamespace: this.__input.syncWithPublicNamespace,
          deprecateExistingEntities: this.__input.deprecateExistingEntities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadEntityDefinitions.uploadId', props);
    return resource.getResponseField('uploadId') as unknown as string;
  }

}

