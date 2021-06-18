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

  public createFlowTemplate(input: shapes.IoTThingsGraphCreateFlowTemplateRequest): IoTThingsGraphCreateFlowTemplate {
    return new IoTThingsGraphCreateFlowTemplate(this, 'CreateFlowTemplate', this.__resources, input);
  }

  public createSystemInstance(input: shapes.IoTThingsGraphCreateSystemInstanceRequest): IoTThingsGraphCreateSystemInstance {
    return new IoTThingsGraphCreateSystemInstance(this, 'CreateSystemInstance', this.__resources, input);
  }

  public createSystemTemplate(input: shapes.IoTThingsGraphCreateSystemTemplateRequest): IoTThingsGraphCreateSystemTemplate {
    return new IoTThingsGraphCreateSystemTemplate(this, 'CreateSystemTemplate', this.__resources, input);
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

  public deleteNamespace(): IoTThingsGraphDeleteNamespace {
    return new IoTThingsGraphDeleteNamespace(this, 'DeleteNamespace', this.__resources);
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

  public deploySystemInstance(input: shapes.IoTThingsGraphDeploySystemInstanceRequest): IoTThingsGraphDeploySystemInstance {
    return new IoTThingsGraphDeploySystemInstance(this, 'DeploySystemInstance', this.__resources, input);
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

  public describeNamespace(input: shapes.IoTThingsGraphDescribeNamespaceRequest): IoTThingsGraphDescribeNamespace {
    return new IoTThingsGraphDescribeNamespace(this, 'DescribeNamespace', this.__resources, input);
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

  public fetchEntities(input: shapes.IoTThingsGraphGetEntitiesRequest): IoTThingsGraphFetchEntities {
    return new IoTThingsGraphFetchEntities(this, 'FetchEntities', this.__resources, input);
  }

  public fetchFlowTemplate(input: shapes.IoTThingsGraphGetFlowTemplateRequest): IoTThingsGraphFetchFlowTemplate {
    return new IoTThingsGraphFetchFlowTemplate(this, 'FetchFlowTemplate', this.__resources, input);
  }

  public fetchFlowTemplateRevisions(input: shapes.IoTThingsGraphGetFlowTemplateRevisionsRequest): IoTThingsGraphFetchFlowTemplateRevisions {
    return new IoTThingsGraphFetchFlowTemplateRevisions(this, 'FetchFlowTemplateRevisions', this.__resources, input);
  }

  public fetchNamespaceDeletionStatus(): IoTThingsGraphFetchNamespaceDeletionStatus {
    return new IoTThingsGraphFetchNamespaceDeletionStatus(this, 'FetchNamespaceDeletionStatus', this.__resources);
  }

  public fetchSystemInstance(input: shapes.IoTThingsGraphGetSystemInstanceRequest): IoTThingsGraphFetchSystemInstance {
    return new IoTThingsGraphFetchSystemInstance(this, 'FetchSystemInstance', this.__resources, input);
  }

  public fetchSystemTemplate(input: shapes.IoTThingsGraphGetSystemTemplateRequest): IoTThingsGraphFetchSystemTemplate {
    return new IoTThingsGraphFetchSystemTemplate(this, 'FetchSystemTemplate', this.__resources, input);
  }

  public fetchSystemTemplateRevisions(input: shapes.IoTThingsGraphGetSystemTemplateRevisionsRequest): IoTThingsGraphFetchSystemTemplateRevisions {
    return new IoTThingsGraphFetchSystemTemplateRevisions(this, 'FetchSystemTemplateRevisions', this.__resources, input);
  }

  public fetchUploadStatus(input: shapes.IoTThingsGraphGetUploadStatusRequest): IoTThingsGraphFetchUploadStatus {
    return new IoTThingsGraphFetchUploadStatus(this, 'FetchUploadStatus', this.__resources, input);
  }

  public listFlowExecutionMessages(input: shapes.IoTThingsGraphListFlowExecutionMessagesRequest): IoTThingsGraphListFlowExecutionMessages {
    return new IoTThingsGraphListFlowExecutionMessages(this, 'ListFlowExecutionMessages', this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTThingsGraphListTagsForResourceRequest): IoTThingsGraphListTagsForResource {
    return new IoTThingsGraphListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public searchEntities(input: shapes.IoTThingsGraphSearchEntitiesRequest): IoTThingsGraphSearchEntities {
    return new IoTThingsGraphSearchEntities(this, 'SearchEntities', this.__resources, input);
  }

  public searchFlowExecutions(input: shapes.IoTThingsGraphSearchFlowExecutionsRequest): IoTThingsGraphSearchFlowExecutions {
    return new IoTThingsGraphSearchFlowExecutions(this, 'SearchFlowExecutions', this.__resources, input);
  }

  public searchFlowTemplates(input: shapes.IoTThingsGraphSearchFlowTemplatesRequest): IoTThingsGraphSearchFlowTemplates {
    return new IoTThingsGraphSearchFlowTemplates(this, 'SearchFlowTemplates', this.__resources, input);
  }

  public searchSystemInstances(input: shapes.IoTThingsGraphSearchSystemInstancesRequest): IoTThingsGraphSearchSystemInstances {
    return new IoTThingsGraphSearchSystemInstances(this, 'SearchSystemInstances', this.__resources, input);
  }

  public searchSystemTemplates(input: shapes.IoTThingsGraphSearchSystemTemplatesRequest): IoTThingsGraphSearchSystemTemplates {
    return new IoTThingsGraphSearchSystemTemplates(this, 'SearchSystemTemplates', this.__resources, input);
  }

  public searchThings(input: shapes.IoTThingsGraphSearchThingsRequest): IoTThingsGraphSearchThings {
    return new IoTThingsGraphSearchThings(this, 'SearchThings', this.__resources, input);
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

  public undeploySystemInstance(input: shapes.IoTThingsGraphUndeploySystemInstanceRequest): IoTThingsGraphUndeploySystemInstance {
    return new IoTThingsGraphUndeploySystemInstance(this, 'UndeploySystemInstance', this.__resources, input);
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

  public updateFlowTemplate(input: shapes.IoTThingsGraphUpdateFlowTemplateRequest): IoTThingsGraphUpdateFlowTemplate {
    return new IoTThingsGraphUpdateFlowTemplate(this, 'UpdateFlowTemplate', this.__resources, input);
  }

  public updateSystemTemplate(input: shapes.IoTThingsGraphUpdateSystemTemplateRequest): IoTThingsGraphUpdateSystemTemplate {
    return new IoTThingsGraphUpdateSystemTemplate(this, 'UpdateSystemTemplate', this.__resources, input);
  }

  public uploadEntityDefinitions(input: shapes.IoTThingsGraphUploadEntityDefinitionsRequest): IoTThingsGraphUploadEntityDefinitions {
    return new IoTThingsGraphUploadEntityDefinitions(this, 'UploadEntityDefinitions', this.__resources, input);
  }

}

export class IoTThingsGraphCreateFlowTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphCreateFlowTemplateRequest) {
    super(scope, id);
  }

  public get summary(): IoTThingsGraphCreateFlowTemplateSummary {
    return new IoTThingsGraphCreateFlowTemplateSummary(this, 'Summary', this.__resources, this.input);
  }

}

export class IoTThingsGraphCreateFlowTemplateSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphCreateFlowTemplateRequest) {
    super(scope, id);
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
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlowTemplate.summary.id', props);
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
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlowTemplate.summary.arn', props);
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
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlowTemplate.summary.revisionNumber', props);
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
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlowTemplate.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphCreateSystemInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphCreateSystemInstanceRequest) {
    super(scope, id);
  }

  public get summary(): IoTThingsGraphCreateSystemInstanceSummary {
    return new IoTThingsGraphCreateSystemInstanceSummary(this, 'Summary', this.__resources, this.input);
  }

}

export class IoTThingsGraphCreateSystemInstanceSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphCreateSystemInstanceRequest) {
    super(scope, id);
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
          tags: this.input.tags,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          target: this.input.target,
          greengrassGroupName: this.input.greengrassGroupName,
          s3BucketName: this.input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemInstance.summary.id', props);
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
          tags: this.input.tags,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          target: this.input.target,
          greengrassGroupName: this.input.greengrassGroupName,
          s3BucketName: this.input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemInstance.summary.arn', props);
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
          tags: this.input.tags,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          target: this.input.target,
          greengrassGroupName: this.input.greengrassGroupName,
          s3BucketName: this.input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemInstance.summary.status', props);
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
          tags: this.input.tags,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          target: this.input.target,
          greengrassGroupName: this.input.greengrassGroupName,
          s3BucketName: this.input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemInstance.summary.target', props);
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
          tags: this.input.tags,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          target: this.input.target,
          greengrassGroupName: this.input.greengrassGroupName,
          s3BucketName: this.input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemInstance.summary.greengrassGroupName', props);
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
          tags: this.input.tags,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          target: this.input.target,
          greengrassGroupName: this.input.greengrassGroupName,
          s3BucketName: this.input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemInstance.summary.createdAt', props);
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
          tags: this.input.tags,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          target: this.input.target,
          greengrassGroupName: this.input.greengrassGroupName,
          s3BucketName: this.input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemInstance.summary.updatedAt', props);
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
          tags: this.input.tags,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          target: this.input.target,
          greengrassGroupName: this.input.greengrassGroupName,
          s3BucketName: this.input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemInstance.summary.greengrassGroupId', props);
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
          tags: this.input.tags,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          target: this.input.target,
          greengrassGroupName: this.input.greengrassGroupName,
          s3BucketName: this.input.s3BucketName,
          metricsConfiguration: {
            cloudMetricEnabled: this.input.metricsConfiguration?.cloudMetricEnabled,
            metricRuleRoleArn: this.input.metricsConfiguration?.metricRuleRoleArn,
          },
          flowActionsRoleArn: this.input.flowActionsRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemInstance.summary.greengrassGroupVersionId', props);
    return resource.getResponseField('summary.greengrassGroupVersionId') as unknown as string;
  }

}

export class IoTThingsGraphCreateSystemTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphCreateSystemTemplateRequest) {
    super(scope, id);
  }

  public get summary(): IoTThingsGraphCreateSystemTemplateSummary {
    return new IoTThingsGraphCreateSystemTemplateSummary(this, 'Summary', this.__resources, this.input);
  }

}

export class IoTThingsGraphCreateSystemTemplateSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphCreateSystemTemplateRequest) {
    super(scope, id);
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
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemTemplate.summary.id', props);
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
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemTemplate.summary.arn', props);
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
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemTemplate.summary.revisionNumber', props);
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
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSystemTemplate.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphDeleteNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DeleteNamespace.namespaceArn', props);
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
    const resource = new cr.AwsCustomResource(this, 'DeleteNamespace.namespaceName', props);
    return resource.getResponseField('namespaceName') as unknown as string;
  }

}

export class IoTThingsGraphDeploySystemInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphDeploySystemInstanceRequest) {
    super(scope, id);
  }

  public get summary(): IoTThingsGraphDeploySystemInstanceSummary {
    return new IoTThingsGraphDeploySystemInstanceSummary(this, 'Summary', this.__resources, this.input);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeploySystemInstance.greengrassDeploymentId', props);
    return resource.getResponseField('greengrassDeploymentId') as unknown as string;
  }

}

export class IoTThingsGraphDeploySystemInstanceSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphDeploySystemInstanceRequest) {
    super(scope, id);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeploySystemInstance.summary.id', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeploySystemInstance.summary.arn', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeploySystemInstance.summary.status', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeploySystemInstance.summary.target', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeploySystemInstance.summary.greengrassGroupName', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeploySystemInstance.summary.createdAt', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeploySystemInstance.summary.updatedAt', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeploySystemInstance.summary.greengrassGroupId', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeploySystemInstance.summary.greengrassGroupVersionId', props);
    return resource.getResponseField('summary.greengrassGroupVersionId') as unknown as string;
  }

}

export class IoTThingsGraphDescribeNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphDescribeNamespaceRequest) {
    super(scope, id);
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
          namespaceName: this.input.namespaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.namespaceArn', props);
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
          namespaceName: this.input.namespaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.namespaceName', props);
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
          namespaceName: this.input.namespaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.trackingNamespaceName', props);
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
          namespaceName: this.input.namespaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.trackingNamespaceVersion', props);
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
          namespaceName: this.input.namespaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.namespaceVersion', props);
    return resource.getResponseField('namespaceVersion') as unknown as number;
  }

}

export class IoTThingsGraphFetchEntities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetEntitiesRequest) {
    super(scope, id);
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
          ids: this.input.ids,
          namespaceVersion: this.input.namespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEntities.descriptions', props);
    return resource.getResponseField('descriptions') as unknown as shapes.IoTThingsGraphEntityDescription[];
  }

}

export class IoTThingsGraphFetchFlowTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetFlowTemplateRequest) {
    super(scope, id);
  }

  public get description(): IoTThingsGraphFetchFlowTemplateDescription {
    return new IoTThingsGraphFetchFlowTemplateDescription(this, 'Description', this.__resources, this.input);
  }

}

export class IoTThingsGraphFetchFlowTemplateDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetFlowTemplateRequest) {
    super(scope, id);
  }

  public get summary(): IoTThingsGraphFetchFlowTemplateDescriptionSummary {
    return new IoTThingsGraphFetchFlowTemplateDescriptionSummary(this, 'Summary', this.__resources, this.input);
  }

  public get definition(): IoTThingsGraphFetchFlowTemplateDescriptionDefinition {
    return new IoTThingsGraphFetchFlowTemplateDescriptionDefinition(this, 'Definition', this.__resources, this.input);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFlowTemplate.description.validatedNamespaceVersion', props);
    return resource.getResponseField('description.validatedNamespaceVersion') as unknown as number;
  }

}

export class IoTThingsGraphFetchFlowTemplateDescriptionSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetFlowTemplateRequest) {
    super(scope, id);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFlowTemplate.description.summary.id', props);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFlowTemplate.description.summary.arn', props);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFlowTemplate.description.summary.revisionNumber', props);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFlowTemplate.description.summary.createdAt', props);
    return resource.getResponseField('description.summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphFetchFlowTemplateDescriptionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetFlowTemplateRequest) {
    super(scope, id);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFlowTemplate.description.definition.language', props);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFlowTemplate.description.definition.text', props);
    return resource.getResponseField('description.definition.text') as unknown as string;
  }

}

export class IoTThingsGraphFetchFlowTemplateRevisions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetFlowTemplateRevisionsRequest) {
    super(scope, id);
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
          id: this.input.id,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFlowTemplateRevisions.summaries', props);
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
          id: this.input.id,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFlowTemplateRevisions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphFetchNamespaceDeletionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetNamespaceDeletionStatus.namespaceArn', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetNamespaceDeletionStatus.namespaceName', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetNamespaceDeletionStatus.status', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetNamespaceDeletionStatus.errorCode', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetNamespaceDeletionStatus.errorMessage', props);
    return resource.getResponseField('errorMessage') as unknown as string;
  }

}

export class IoTThingsGraphFetchSystemInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetSystemInstanceRequest) {
    super(scope, id);
  }

  public get description(): IoTThingsGraphFetchSystemInstanceDescription {
    return new IoTThingsGraphFetchSystemInstanceDescription(this, 'Description', this.__resources, this.input);
  }

}

export class IoTThingsGraphFetchSystemInstanceDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetSystemInstanceRequest) {
    super(scope, id);
  }

  public get summary(): IoTThingsGraphFetchSystemInstanceDescriptionSummary {
    return new IoTThingsGraphFetchSystemInstanceDescriptionSummary(this, 'Summary', this.__resources, this.input);
  }

  public get definition(): IoTThingsGraphFetchSystemInstanceDescriptionDefinition {
    return new IoTThingsGraphFetchSystemInstanceDescriptionDefinition(this, 'Definition', this.__resources, this.input);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.s3BucketName', props);
    return resource.getResponseField('description.s3BucketName') as unknown as string;
  }

  public get metricsConfiguration(): IoTThingsGraphFetchSystemInstanceDescriptionMetricsConfiguration {
    return new IoTThingsGraphFetchSystemInstanceDescriptionMetricsConfiguration(this, 'MetricsConfiguration', this.__resources, this.input);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.validatedNamespaceVersion', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.validatedDependencyRevisions', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.flowActionsRoleArn', props);
    return resource.getResponseField('description.flowActionsRoleArn') as unknown as string;
  }

}

export class IoTThingsGraphFetchSystemInstanceDescriptionSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetSystemInstanceRequest) {
    super(scope, id);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.summary.id', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.summary.arn', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.summary.status', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.summary.target', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.summary.greengrassGroupName', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.summary.createdAt', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.summary.updatedAt', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.summary.greengrassGroupId', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.summary.greengrassGroupVersionId', props);
    return resource.getResponseField('description.summary.greengrassGroupVersionId') as unknown as string;
  }

}

export class IoTThingsGraphFetchSystemInstanceDescriptionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetSystemInstanceRequest) {
    super(scope, id);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.definition.language', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.definition.text', props);
    return resource.getResponseField('description.definition.text') as unknown as string;
  }

}

export class IoTThingsGraphFetchSystemInstanceDescriptionMetricsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetSystemInstanceRequest) {
    super(scope, id);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.metricsConfiguration.cloudMetricEnabled', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemInstance.description.metricsConfiguration.metricRuleRoleArn', props);
    return resource.getResponseField('description.metricsConfiguration.metricRuleRoleArn') as unknown as string;
  }

}

export class IoTThingsGraphFetchSystemTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetSystemTemplateRequest) {
    super(scope, id);
  }

  public get description(): IoTThingsGraphFetchSystemTemplateDescription {
    return new IoTThingsGraphFetchSystemTemplateDescription(this, 'Description', this.__resources, this.input);
  }

}

export class IoTThingsGraphFetchSystemTemplateDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetSystemTemplateRequest) {
    super(scope, id);
  }

  public get summary(): IoTThingsGraphFetchSystemTemplateDescriptionSummary {
    return new IoTThingsGraphFetchSystemTemplateDescriptionSummary(this, 'Summary', this.__resources, this.input);
  }

  public get definition(): IoTThingsGraphFetchSystemTemplateDescriptionDefinition {
    return new IoTThingsGraphFetchSystemTemplateDescriptionDefinition(this, 'Definition', this.__resources, this.input);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemTemplate.description.validatedNamespaceVersion', props);
    return resource.getResponseField('description.validatedNamespaceVersion') as unknown as number;
  }

}

export class IoTThingsGraphFetchSystemTemplateDescriptionSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetSystemTemplateRequest) {
    super(scope, id);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemTemplate.description.summary.id', props);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemTemplate.description.summary.arn', props);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemTemplate.description.summary.revisionNumber', props);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemTemplate.description.summary.createdAt', props);
    return resource.getResponseField('description.summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphFetchSystemTemplateDescriptionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetSystemTemplateRequest) {
    super(scope, id);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemTemplate.description.definition.language', props);
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
          id: this.input.id,
          revisionNumber: this.input.revisionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemTemplate.description.definition.text', props);
    return resource.getResponseField('description.definition.text') as unknown as string;
  }

}

export class IoTThingsGraphFetchSystemTemplateRevisions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetSystemTemplateRevisionsRequest) {
    super(scope, id);
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
          id: this.input.id,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemTemplateRevisions.summaries', props);
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
          id: this.input.id,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSystemTemplateRevisions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphFetchUploadStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphGetUploadStatusRequest) {
    super(scope, id);
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
          uploadId: this.input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUploadStatus.uploadId', props);
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
          uploadId: this.input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUploadStatus.uploadStatus', props);
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
          uploadId: this.input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUploadStatus.namespaceArn', props);
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
          uploadId: this.input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUploadStatus.namespaceName', props);
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
          uploadId: this.input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUploadStatus.namespaceVersion', props);
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
          uploadId: this.input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUploadStatus.failureReason', props);
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
          uploadId: this.input.uploadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUploadStatus.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

}

export class IoTThingsGraphListFlowExecutionMessages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphListFlowExecutionMessagesRequest) {
    super(scope, id);
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
          flowExecutionId: this.input.flowExecutionId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFlowExecutionMessages.messages', props);
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
          flowExecutionId: this.input.flowExecutionId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFlowExecutionMessages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphListTagsForResourceRequest) {
    super(scope, id);
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
          maxResults: this.input.maxResults,
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
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
          maxResults: this.input.maxResults,
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphSearchEntities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphSearchEntitiesRequest) {
    super(scope, id);
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
          entityTypes: this.input.entityTypes,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          namespaceVersion: this.input.namespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchEntities.descriptions', props);
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
          entityTypes: this.input.entityTypes,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          namespaceVersion: this.input.namespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchEntities.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphSearchFlowExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphSearchFlowExecutionsRequest) {
    super(scope, id);
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
          systemInstanceId: this.input.systemInstanceId,
          flowExecutionId: this.input.flowExecutionId,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchFlowExecutions.summaries', props);
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
          systemInstanceId: this.input.systemInstanceId,
          flowExecutionId: this.input.flowExecutionId,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchFlowExecutions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphSearchFlowTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphSearchFlowTemplatesRequest) {
    super(scope, id);
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
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchFlowTemplates.summaries', props);
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
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchFlowTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphSearchSystemInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphSearchSystemInstancesRequest) {
    super(scope, id);
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
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchSystemInstances.summaries', props);
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
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchSystemInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphSearchSystemTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphSearchSystemTemplatesRequest) {
    super(scope, id);
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
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchSystemTemplates.summaries', props);
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
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchSystemTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphSearchThings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphSearchThingsRequest) {
    super(scope, id);
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
          entityId: this.input.entityId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          namespaceVersion: this.input.namespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchThings.things', props);
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
          entityId: this.input.entityId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          namespaceVersion: this.input.namespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchThings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTThingsGraphUndeploySystemInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphUndeploySystemInstanceRequest) {
    super(scope, id);
  }

  public get summary(): IoTThingsGraphUndeploySystemInstanceSummary {
    return new IoTThingsGraphUndeploySystemInstanceSummary(this, 'Summary', this.__resources, this.input);
  }

}

export class IoTThingsGraphUndeploySystemInstanceSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphUndeploySystemInstanceRequest) {
    super(scope, id);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UndeploySystemInstance.summary.id', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UndeploySystemInstance.summary.arn', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UndeploySystemInstance.summary.status', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UndeploySystemInstance.summary.target', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UndeploySystemInstance.summary.greengrassGroupName', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UndeploySystemInstance.summary.createdAt', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UndeploySystemInstance.summary.updatedAt', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UndeploySystemInstance.summary.greengrassGroupId', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UndeploySystemInstance.summary.greengrassGroupVersionId', props);
    return resource.getResponseField('summary.greengrassGroupVersionId') as unknown as string;
  }

}

export class IoTThingsGraphUpdateFlowTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphUpdateFlowTemplateRequest) {
    super(scope, id);
  }

  public get summary(): IoTThingsGraphUpdateFlowTemplateSummary {
    return new IoTThingsGraphUpdateFlowTemplateSummary(this, 'Summary', this.__resources, this.input);
  }

}

export class IoTThingsGraphUpdateFlowTemplateSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphUpdateFlowTemplateRequest) {
    super(scope, id);
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
          id: this.input.id,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowTemplate.summary.id', props);
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
          id: this.input.id,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowTemplate.summary.arn', props);
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
          id: this.input.id,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowTemplate.summary.revisionNumber', props);
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
          id: this.input.id,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowTemplate.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphUpdateSystemTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphUpdateSystemTemplateRequest) {
    super(scope, id);
  }

  public get summary(): IoTThingsGraphUpdateSystemTemplateSummary {
    return new IoTThingsGraphUpdateSystemTemplateSummary(this, 'Summary', this.__resources, this.input);
  }

}

export class IoTThingsGraphUpdateSystemTemplateSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphUpdateSystemTemplateRequest) {
    super(scope, id);
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
          id: this.input.id,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSystemTemplate.summary.id', props);
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
          id: this.input.id,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSystemTemplate.summary.arn', props);
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
          id: this.input.id,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSystemTemplate.summary.revisionNumber', props);
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
          id: this.input.id,
          definition: {
            language: this.input.definition.language,
            text: this.input.definition.text,
          },
          compatibleNamespaceVersion: this.input.compatibleNamespaceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSystemTemplate.summary.createdAt', props);
    return resource.getResponseField('summary.createdAt') as unknown as string;
  }

}

export class IoTThingsGraphUploadEntityDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTThingsGraphUploadEntityDefinitionsRequest) {
    super(scope, id);
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
            language: this.input.document?.language,
            text: this.input.document?.text,
          },
          syncWithPublicNamespace: this.input.syncWithPublicNamespace,
          deprecateExistingEntities: this.input.deprecateExistingEntities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadEntityDefinitions.uploadId', props);
    return resource.getResponseField('uploadId') as unknown as string;
  }

}

