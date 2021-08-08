import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SsmIncidentsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createReplicationSet(input: shapes.SsmIncidentsCreateReplicationSetInput): SSMIncidentsResponsesCreateReplicationSet {
    return new SSMIncidentsResponsesCreateReplicationSet(this, this.__resources, input);
  }

  public createResponsePlan(input: shapes.SsmIncidentsCreateResponsePlanInput): SSMIncidentsResponsesCreateResponsePlan {
    return new SSMIncidentsResponsesCreateResponsePlan(this, this.__resources, input);
  }

  public createTimelineEvent(input: shapes.SsmIncidentsCreateTimelineEventInput): SSMIncidentsResponsesCreateTimelineEvent {
    return new SSMIncidentsResponsesCreateTimelineEvent(this, this.__resources, input);
  }

  public deleteIncidentRecord(input: shapes.SsmIncidentsDeleteIncidentRecordInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.DeleteIncidentRecord'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteIncidentRecord', props);
  }

  public deleteReplicationSet(input: shapes.SsmIncidentsDeleteReplicationSetInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.DeleteReplicationSet'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteReplicationSet', props);
  }

  public deleteResourcePolicy(input: shapes.SsmIncidentsDeleteResourcePolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourcePolicy',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.DeleteResourcePolicy'),
        parameters: {
          policyId: input.policyId,
          resourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResourcePolicy', props);
  }

  public deleteResponsePlan(input: shapes.SsmIncidentsDeleteResponsePlanInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.DeleteResponsePlan'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResponsePlan', props);
  }

  public deleteTimelineEvent(input: shapes.SsmIncidentsDeleteTimelineEventInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTimelineEvent',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.DeleteTimelineEvent'),
        parameters: {
          eventId: input.eventId,
          incidentRecordArn: input.incidentRecordArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTimelineEvent', props);
  }

  public fetchIncidentRecord(input: shapes.SsmIncidentsGetIncidentRecordInput): SSMIncidentsResponsesFetchIncidentRecord {
    return new SSMIncidentsResponsesFetchIncidentRecord(this, this.__resources, input);
  }

  public fetchReplicationSet(input: shapes.SsmIncidentsGetReplicationSetInput): SSMIncidentsResponsesFetchReplicationSet {
    return new SSMIncidentsResponsesFetchReplicationSet(this, this.__resources, input);
  }

  public fetchResourcePolicies(input: shapes.SsmIncidentsGetResourcePoliciesInput): SSMIncidentsResponsesFetchResourcePolicies {
    return new SSMIncidentsResponsesFetchResourcePolicies(this, this.__resources, input);
  }

  public fetchResponsePlan(input: shapes.SsmIncidentsGetResponsePlanInput): SSMIncidentsResponsesFetchResponsePlan {
    return new SSMIncidentsResponsesFetchResponsePlan(this, this.__resources, input);
  }

  public fetchTimelineEvent(input: shapes.SsmIncidentsGetTimelineEventInput): SSMIncidentsResponsesFetchTimelineEvent {
    return new SSMIncidentsResponsesFetchTimelineEvent(this, this.__resources, input);
  }

  public listIncidentRecords(input: shapes.SsmIncidentsListIncidentRecordsInput): SSMIncidentsResponsesListIncidentRecords {
    return new SSMIncidentsResponsesListIncidentRecords(this, this.__resources, input);
  }

  public listRelatedItems(input: shapes.SsmIncidentsListRelatedItemsInput): SSMIncidentsResponsesListRelatedItems {
    return new SSMIncidentsResponsesListRelatedItems(this, this.__resources, input);
  }

  public listReplicationSets(input: shapes.SsmIncidentsListReplicationSetsInput): SSMIncidentsResponsesListReplicationSets {
    return new SSMIncidentsResponsesListReplicationSets(this, this.__resources, input);
  }

  public listResponsePlans(input: shapes.SsmIncidentsListResponsePlansInput): SSMIncidentsResponsesListResponsePlans {
    return new SSMIncidentsResponsesListResponsePlans(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SsmIncidentsListTagsForResourceRequest): SSMIncidentsResponsesListTagsForResource {
    return new SSMIncidentsResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTimelineEvents(input: shapes.SsmIncidentsListTimelineEventsInput): SSMIncidentsResponsesListTimelineEvents {
    return new SSMIncidentsResponsesListTimelineEvents(this, this.__resources, input);
  }

  public putResourcePolicy(input: shapes.SsmIncidentsPutResourcePolicyInput): SSMIncidentsResponsesPutResourcePolicy {
    return new SSMIncidentsResponsesPutResourcePolicy(this, this.__resources, input);
  }

  public startIncident(input: shapes.SsmIncidentsStartIncidentInput): SSMIncidentsResponsesStartIncident {
    return new SSMIncidentsResponsesStartIncident(this, this.__resources, input);
  }

  public tagResource(input: shapes.SsmIncidentsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.SsmIncidentsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDeletionProtection(input: shapes.SsmIncidentsUpdateDeletionProtectionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeletionProtection',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.UpdateDeletionProtection'),
        parameters: {
          arn: input.arn,
          clientToken: input.clientToken,
          deletionProtected: input.deletionProtected,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDeletionProtection', props);
  }

  public updateIncidentRecord(input: shapes.SsmIncidentsUpdateIncidentRecordInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.UpdateIncidentRecord'),
        parameters: {
          arn: input.arn,
          chatChannel: {
            chatbotSns: input.chatChannel?.chatbotSns,
            empty: {
            },
          },
          clientToken: input.clientToken,
          impact: input.impact,
          notificationTargets: input.notificationTargets,
          status: input.status,
          summary: input.summary,
          title: input.title,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateIncidentRecord', props);
  }

  public updateRelatedItems(input: shapes.SsmIncidentsUpdateRelatedItemsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRelatedItems',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.UpdateRelatedItems'),
        parameters: {
          clientToken: input.clientToken,
          incidentRecordArn: input.incidentRecordArn,
          relatedItemsUpdate: {
            itemToAdd: {
              identifier: {
                type: input.relatedItemsUpdate.itemToAdd?.identifier.type,
                value: {
                  arn: input.relatedItemsUpdate.itemToAdd?.identifier.value.arn,
                  metricDefinition: input.relatedItemsUpdate.itemToAdd?.identifier.value.metricDefinition,
                  url: input.relatedItemsUpdate.itemToAdd?.identifier.value.url,
                },
              },
              title: input.relatedItemsUpdate.itemToAdd?.title,
            },
            itemToRemove: {
              type: input.relatedItemsUpdate.itemToRemove?.type,
              value: {
                arn: input.relatedItemsUpdate.itemToRemove?.value.arn,
                metricDefinition: input.relatedItemsUpdate.itemToRemove?.value.metricDefinition,
                url: input.relatedItemsUpdate.itemToRemove?.value.url,
              },
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRelatedItems', props);
  }

  public updateReplicationSet(input: shapes.SsmIncidentsUpdateReplicationSetInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.UpdateReplicationSet'),
        parameters: {
          actions: input.actions,
          arn: input.arn,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateReplicationSet', props);
  }

  public updateResponsePlan(input: shapes.SsmIncidentsUpdateResponsePlanInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.UpdateResponsePlan'),
        parameters: {
          actions: input.actions,
          arn: input.arn,
          chatChannel: {
            chatbotSns: input.chatChannel?.chatbotSns,
            empty: {
            },
          },
          clientToken: input.clientToken,
          displayName: input.displayName,
          engagements: input.engagements,
          incidentTemplateDedupeString: input.incidentTemplateDedupeString,
          incidentTemplateImpact: input.incidentTemplateImpact,
          incidentTemplateNotificationTargets: input.incidentTemplateNotificationTargets,
          incidentTemplateSummary: input.incidentTemplateSummary,
          incidentTemplateTitle: input.incidentTemplateTitle,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateResponsePlan', props);
  }

  public updateTimelineEvent(input: shapes.SsmIncidentsUpdateTimelineEventInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTimelineEvent',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.UpdateTimelineEvent'),
        parameters: {
          clientToken: input.clientToken,
          eventData: input.eventData,
          eventId: input.eventId,
          eventTime: input.eventTime,
          eventType: input.eventType,
          incidentRecordArn: input.incidentRecordArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateTimelineEvent', props);
  }

}

export class SSMIncidentsResponsesCreateReplicationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsCreateReplicationSetInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.CreateReplicationSet.arn'),
        outputPath: 'arn',
        parameters: {
          clientToken: this.__input.clientToken,
          regions: this.__input.regions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationSet.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class SSMIncidentsResponsesCreateResponsePlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsCreateResponsePlanInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.CreateResponsePlan.arn'),
        outputPath: 'arn',
        parameters: {
          actions: this.__input.actions,
          chatChannel: {
            chatbotSns: this.__input.chatChannel?.chatbotSns,
            empty: {
            },
          },
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          engagements: this.__input.engagements,
          incidentTemplate: {
            dedupeString: this.__input.incidentTemplate.dedupeString,
            impact: this.__input.incidentTemplate.impact,
            notificationTargets: this.__input.incidentTemplate.notificationTargets,
            summary: this.__input.incidentTemplate.summary,
            title: this.__input.incidentTemplate.title,
          },
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResponsePlan.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class SSMIncidentsResponsesCreateTimelineEvent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsCreateTimelineEventInput) {
  }

  public get eventId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTimelineEvent',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.CreateTimelineEvent.eventId'),
        outputPath: 'eventId',
        parameters: {
          clientToken: this.__input.clientToken,
          eventData: this.__input.eventData,
          eventTime: this.__input.eventTime,
          eventType: this.__input.eventType,
          incidentRecordArn: this.__input.incidentRecordArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTimelineEvent.eventId', props);
    return resource.getResponseField('eventId') as unknown as string;
  }

  public get incidentRecordArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTimelineEvent',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.CreateTimelineEvent.incidentRecordArn'),
        outputPath: 'incidentRecordArn',
        parameters: {
          clientToken: this.__input.clientToken,
          eventData: this.__input.eventData,
          eventTime: this.__input.eventTime,
          eventType: this.__input.eventType,
          incidentRecordArn: this.__input.incidentRecordArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTimelineEvent.incidentRecordArn', props);
    return resource.getResponseField('incidentRecordArn') as unknown as string;
  }

}

export class SSMIncidentsResponsesFetchIncidentRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetIncidentRecordInput) {
  }

  public get incidentRecord(): SSMIncidentsResponsesFetchIncidentRecordIncidentRecord {
    return new SSMIncidentsResponsesFetchIncidentRecordIncidentRecord(this.__scope, this.__resources, this.__input);
  }

}

export class SSMIncidentsResponsesFetchIncidentRecordIncidentRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetIncidentRecordInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.arn'),
        outputPath: 'incidentRecord.arn',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.arn', props);
    return resource.getResponseField('incidentRecord.arn') as unknown as string;
  }

  public get automationExecutions(): shapes.SsmIncidentsAutomationExecution[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.automationExecutions'),
        outputPath: 'incidentRecord.automationExecutions',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.automationExecutions', props);
    return resource.getResponseField('incidentRecord.automationExecutions') as unknown as shapes.SsmIncidentsAutomationExecution[];
  }

  public get chatChannel(): SSMIncidentsResponsesFetchIncidentRecordIncidentRecordChatChannel {
    return new SSMIncidentsResponsesFetchIncidentRecordIncidentRecordChatChannel(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.creationTime'),
        outputPath: 'incidentRecord.creationTime',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.creationTime', props);
    return resource.getResponseField('incidentRecord.creationTime') as unknown as string;
  }

  public get dedupeString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.dedupeString'),
        outputPath: 'incidentRecord.dedupeString',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.dedupeString', props);
    return resource.getResponseField('incidentRecord.dedupeString') as unknown as string;
  }

  public get impact(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.impact'),
        outputPath: 'incidentRecord.impact',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.impact', props);
    return resource.getResponseField('incidentRecord.impact') as unknown as number;
  }

  public get incidentRecordSource(): SSMIncidentsResponsesFetchIncidentRecordIncidentRecordIncidentRecordSource {
    return new SSMIncidentsResponsesFetchIncidentRecordIncidentRecordIncidentRecordSource(this.__scope, this.__resources, this.__input);
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.lastModifiedBy'),
        outputPath: 'incidentRecord.lastModifiedBy',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.lastModifiedBy', props);
    return resource.getResponseField('incidentRecord.lastModifiedBy') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.lastModifiedTime'),
        outputPath: 'incidentRecord.lastModifiedTime',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.lastModifiedTime', props);
    return resource.getResponseField('incidentRecord.lastModifiedTime') as unknown as string;
  }

  public get notificationTargets(): shapes.SsmIncidentsNotificationTargetItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.notificationTargets'),
        outputPath: 'incidentRecord.notificationTargets',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.notificationTargets', props);
    return resource.getResponseField('incidentRecord.notificationTargets') as unknown as shapes.SsmIncidentsNotificationTargetItem[];
  }

  public get resolvedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.resolvedTime'),
        outputPath: 'incidentRecord.resolvedTime',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.resolvedTime', props);
    return resource.getResponseField('incidentRecord.resolvedTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.status'),
        outputPath: 'incidentRecord.status',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.status', props);
    return resource.getResponseField('incidentRecord.status') as unknown as string;
  }

  public get summary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.summary'),
        outputPath: 'incidentRecord.summary',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.summary', props);
    return resource.getResponseField('incidentRecord.summary') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.title'),
        outputPath: 'incidentRecord.title',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.title', props);
    return resource.getResponseField('incidentRecord.title') as unknown as string;
  }

}

export class SSMIncidentsResponsesFetchIncidentRecordIncidentRecordChatChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetIncidentRecordInput) {
  }

  public get chatbotSns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.chatChannel.chatbotSns'),
        outputPath: 'incidentRecord.chatChannel.chatbotSns',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.chatChannel.chatbotSns', props);
    return resource.getResponseField('incidentRecord.chatChannel.chatbotSns') as unknown as string[];
  }

  public get empty(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.chatChannel.empty'),
        outputPath: 'incidentRecord.chatChannel.empty',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.chatChannel.empty', props);
    return resource.getResponseField('incidentRecord.chatChannel.empty') as unknown as any;
  }

}

export class SSMIncidentsResponsesFetchIncidentRecordIncidentRecordIncidentRecordSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetIncidentRecordInput) {
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.incidentRecordSource.createdBy'),
        outputPath: 'incidentRecord.incidentRecordSource.createdBy',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.incidentRecordSource.createdBy', props);
    return resource.getResponseField('incidentRecord.incidentRecordSource.createdBy') as unknown as string;
  }

  public get invokedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.incidentRecordSource.invokedBy'),
        outputPath: 'incidentRecord.incidentRecordSource.invokedBy',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.incidentRecordSource.invokedBy', props);
    return resource.getResponseField('incidentRecord.incidentRecordSource.invokedBy') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.incidentRecordSource.resourceArn'),
        outputPath: 'incidentRecord.incidentRecordSource.resourceArn',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.incidentRecordSource.resourceArn', props);
    return resource.getResponseField('incidentRecord.incidentRecordSource.resourceArn') as unknown as string;
  }

  public get source(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIncidentRecord',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetIncidentRecord.incidentRecord.incidentRecordSource.source'),
        outputPath: 'incidentRecord.incidentRecordSource.source',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIncidentRecord.incidentRecord.incidentRecordSource.source', props);
    return resource.getResponseField('incidentRecord.incidentRecordSource.source') as unknown as string;
  }

}

export class SSMIncidentsResponsesFetchReplicationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetReplicationSetInput) {
  }

  public get replicationSet(): SSMIncidentsResponsesFetchReplicationSetReplicationSet {
    return new SSMIncidentsResponsesFetchReplicationSetReplicationSet(this.__scope, this.__resources, this.__input);
  }

}

export class SSMIncidentsResponsesFetchReplicationSetReplicationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetReplicationSetInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetReplicationSet.replicationSet.arn'),
        outputPath: 'replicationSet.arn',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationSet.replicationSet.arn', props);
    return resource.getResponseField('replicationSet.arn') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetReplicationSet.replicationSet.createdBy'),
        outputPath: 'replicationSet.createdBy',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationSet.replicationSet.createdBy', props);
    return resource.getResponseField('replicationSet.createdBy') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetReplicationSet.replicationSet.createdTime'),
        outputPath: 'replicationSet.createdTime',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationSet.replicationSet.createdTime', props);
    return resource.getResponseField('replicationSet.createdTime') as unknown as string;
  }

  public get deletionProtected(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetReplicationSet.replicationSet.deletionProtected'),
        outputPath: 'replicationSet.deletionProtected',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationSet.replicationSet.deletionProtected', props);
    return resource.getResponseField('replicationSet.deletionProtected') as unknown as boolean;
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetReplicationSet.replicationSet.lastModifiedBy'),
        outputPath: 'replicationSet.lastModifiedBy',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationSet.replicationSet.lastModifiedBy', props);
    return resource.getResponseField('replicationSet.lastModifiedBy') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetReplicationSet.replicationSet.lastModifiedTime'),
        outputPath: 'replicationSet.lastModifiedTime',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationSet.replicationSet.lastModifiedTime', props);
    return resource.getResponseField('replicationSet.lastModifiedTime') as unknown as string;
  }

  public get regionMap(): Record<string, shapes.SsmIncidentsRegionInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetReplicationSet.replicationSet.regionMap'),
        outputPath: 'replicationSet.regionMap',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationSet.replicationSet.regionMap', props);
    return resource.getResponseField('replicationSet.regionMap') as unknown as Record<string, shapes.SsmIncidentsRegionInfo>;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationSet',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetReplicationSet.replicationSet.status'),
        outputPath: 'replicationSet.status',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationSet.replicationSet.status', props);
    return resource.getResponseField('replicationSet.status') as unknown as string;
  }

}

export class SSMIncidentsResponsesFetchResourcePolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetResourcePoliciesInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicies',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResourcePolicies.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicies.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get resourcePolicies(): shapes.SsmIncidentsResourcePolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicies',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResourcePolicies.resourcePolicies'),
        outputPath: 'resourcePolicies',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicies.resourcePolicies', props);
    return resource.getResponseField('resourcePolicies') as unknown as shapes.SsmIncidentsResourcePolicy[];
  }

}

export class SSMIncidentsResponsesFetchResponsePlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetResponsePlanInput) {
  }

  public get actions(): shapes.SsmIncidentsAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.actions'),
        outputPath: 'actions',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.actions', props);
    return resource.getResponseField('actions') as unknown as shapes.SsmIncidentsAction[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.arn'),
        outputPath: 'arn',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get chatChannel(): SSMIncidentsResponsesFetchResponsePlanChatChannel {
    return new SSMIncidentsResponsesFetchResponsePlanChatChannel(this.__scope, this.__resources, this.__input);
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.displayName'),
        outputPath: 'displayName',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.displayName', props);
    return resource.getResponseField('displayName') as unknown as string;
  }

  public get engagements(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.engagements'),
        outputPath: 'engagements',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.engagements', props);
    return resource.getResponseField('engagements') as unknown as string[];
  }

  public get incidentTemplate(): SSMIncidentsResponsesFetchResponsePlanIncidentTemplate {
    return new SSMIncidentsResponsesFetchResponsePlanIncidentTemplate(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.name'),
        outputPath: 'name',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

}

export class SSMIncidentsResponsesFetchResponsePlanChatChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetResponsePlanInput) {
  }

  public get chatbotSns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.chatChannel.chatbotSns'),
        outputPath: 'chatChannel.chatbotSns',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.chatChannel.chatbotSns', props);
    return resource.getResponseField('chatChannel.chatbotSns') as unknown as string[];
  }

  public get empty(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.chatChannel.empty'),
        outputPath: 'chatChannel.empty',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.chatChannel.empty', props);
    return resource.getResponseField('chatChannel.empty') as unknown as any;
  }

}

export class SSMIncidentsResponsesFetchResponsePlanIncidentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetResponsePlanInput) {
  }

  public get dedupeString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.incidentTemplate.dedupeString'),
        outputPath: 'incidentTemplate.dedupeString',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.incidentTemplate.dedupeString', props);
    return resource.getResponseField('incidentTemplate.dedupeString') as unknown as string;
  }

  public get impact(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.incidentTemplate.impact'),
        outputPath: 'incidentTemplate.impact',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.incidentTemplate.impact', props);
    return resource.getResponseField('incidentTemplate.impact') as unknown as number;
  }

  public get notificationTargets(): shapes.SsmIncidentsNotificationTargetItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.incidentTemplate.notificationTargets'),
        outputPath: 'incidentTemplate.notificationTargets',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.incidentTemplate.notificationTargets', props);
    return resource.getResponseField('incidentTemplate.notificationTargets') as unknown as shapes.SsmIncidentsNotificationTargetItem[];
  }

  public get summary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.incidentTemplate.summary'),
        outputPath: 'incidentTemplate.summary',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.incidentTemplate.summary', props);
    return resource.getResponseField('incidentTemplate.summary') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResponsePlan',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetResponsePlan.incidentTemplate.title'),
        outputPath: 'incidentTemplate.title',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResponsePlan.incidentTemplate.title', props);
    return resource.getResponseField('incidentTemplate.title') as unknown as string;
  }

}

export class SSMIncidentsResponsesFetchTimelineEvent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetTimelineEventInput) {
  }

  public get event(): SSMIncidentsResponsesFetchTimelineEventEvent {
    return new SSMIncidentsResponsesFetchTimelineEventEvent(this.__scope, this.__resources, this.__input);
  }

}

export class SSMIncidentsResponsesFetchTimelineEventEvent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsGetTimelineEventInput) {
  }

  public get eventData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTimelineEvent',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetTimelineEvent.event.eventData'),
        outputPath: 'event.eventData',
        parameters: {
          eventId: this.__input.eventId,
          incidentRecordArn: this.__input.incidentRecordArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTimelineEvent.event.eventData', props);
    return resource.getResponseField('event.eventData') as unknown as string;
  }

  public get eventId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTimelineEvent',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetTimelineEvent.event.eventId'),
        outputPath: 'event.eventId',
        parameters: {
          eventId: this.__input.eventId,
          incidentRecordArn: this.__input.incidentRecordArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTimelineEvent.event.eventId', props);
    return resource.getResponseField('event.eventId') as unknown as string;
  }

  public get eventTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTimelineEvent',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetTimelineEvent.event.eventTime'),
        outputPath: 'event.eventTime',
        parameters: {
          eventId: this.__input.eventId,
          incidentRecordArn: this.__input.incidentRecordArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTimelineEvent.event.eventTime', props);
    return resource.getResponseField('event.eventTime') as unknown as string;
  }

  public get eventType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTimelineEvent',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetTimelineEvent.event.eventType'),
        outputPath: 'event.eventType',
        parameters: {
          eventId: this.__input.eventId,
          incidentRecordArn: this.__input.incidentRecordArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTimelineEvent.event.eventType', props);
    return resource.getResponseField('event.eventType') as unknown as string;
  }

  public get eventUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTimelineEvent',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetTimelineEvent.event.eventUpdatedTime'),
        outputPath: 'event.eventUpdatedTime',
        parameters: {
          eventId: this.__input.eventId,
          incidentRecordArn: this.__input.incidentRecordArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTimelineEvent.event.eventUpdatedTime', props);
    return resource.getResponseField('event.eventUpdatedTime') as unknown as string;
  }

  public get incidentRecordArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTimelineEvent',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.GetTimelineEvent.event.incidentRecordArn'),
        outputPath: 'event.incidentRecordArn',
        parameters: {
          eventId: this.__input.eventId,
          incidentRecordArn: this.__input.incidentRecordArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTimelineEvent.event.incidentRecordArn', props);
    return resource.getResponseField('event.incidentRecordArn') as unknown as string;
  }

}

export class SSMIncidentsResponsesListIncidentRecords {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsListIncidentRecordsInput) {
  }

  public get incidentRecordSummaries(): shapes.SsmIncidentsIncidentRecordSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIncidentRecords',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListIncidentRecords.incidentRecordSummaries'),
        outputPath: 'incidentRecordSummaries',
        parameters: {
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIncidentRecords.incidentRecordSummaries', props);
    return resource.getResponseField('incidentRecordSummaries') as unknown as shapes.SsmIncidentsIncidentRecordSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIncidentRecords',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListIncidentRecords.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIncidentRecords.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SSMIncidentsResponsesListRelatedItems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsListRelatedItemsInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRelatedItems',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListRelatedItems.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          incidentRecordArn: this.__input.incidentRecordArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRelatedItems.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get relatedItems(): shapes.SsmIncidentsRelatedItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRelatedItems',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListRelatedItems.relatedItems'),
        outputPath: 'relatedItems',
        parameters: {
          incidentRecordArn: this.__input.incidentRecordArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRelatedItems.relatedItems', props);
    return resource.getResponseField('relatedItems') as unknown as shapes.SsmIncidentsRelatedItem[];
  }

}

export class SSMIncidentsResponsesListReplicationSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsListReplicationSetsInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReplicationSets',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListReplicationSets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReplicationSets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get replicationSetArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReplicationSets',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListReplicationSets.replicationSetArns'),
        outputPath: 'replicationSetArns',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReplicationSets.replicationSetArns', props);
    return resource.getResponseField('replicationSetArns') as unknown as string[];
  }

}

export class SSMIncidentsResponsesListResponsePlans {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsListResponsePlansInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResponsePlans',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListResponsePlans.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResponsePlans.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get responsePlanSummaries(): shapes.SsmIncidentsResponsePlanSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResponsePlans',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListResponsePlans.responsePlanSummaries'),
        outputPath: 'responsePlanSummaries',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResponsePlans.responsePlanSummaries', props);
    return resource.getResponseField('responsePlanSummaries') as unknown as shapes.SsmIncidentsResponsePlanSummary[];
  }

}

export class SSMIncidentsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListTagsForResource.tags'),
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

export class SSMIncidentsResponsesListTimelineEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsListTimelineEventsInput) {
  }

  public get eventSummaries(): shapes.SsmIncidentsEventSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTimelineEvents',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListTimelineEvents.eventSummaries'),
        outputPath: 'eventSummaries',
        parameters: {
          filters: this.__input.filters,
          incidentRecordArn: this.__input.incidentRecordArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortBy: this.__input.sortBy,
          sortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTimelineEvents.eventSummaries', props);
    return resource.getResponseField('eventSummaries') as unknown as shapes.SsmIncidentsEventSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTimelineEvents',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.ListTimelineEvents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.__input.filters,
          incidentRecordArn: this.__input.incidentRecordArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortBy: this.__input.sortBy,
          sortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTimelineEvents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SSMIncidentsResponsesPutResourcePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsPutResourcePolicyInput) {
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourcePolicy',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.PutResourcePolicy.policyId'),
        outputPath: 'policyId',
        parameters: {
          policy: this.__input.policy,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutResourcePolicy.policyId', props);
    return resource.getResponseField('policyId') as unknown as string;
  }

}

export class SSMIncidentsResponsesStartIncident {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmIncidentsStartIncidentInput) {
  }

  public get incidentRecordArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startIncident',
        service: 'SSMIncidents',
        physicalResourceId: cr.PhysicalResourceId.of('SSMIncidents.StartIncident.incidentRecordArn'),
        outputPath: 'incidentRecordArn',
        parameters: {
          clientToken: this.__input.clientToken,
          impact: this.__input.impact,
          relatedItems: this.__input.relatedItems,
          responsePlanArn: this.__input.responsePlanArn,
          title: this.__input.title,
          triggerDetails: {
            rawData: this.__input.triggerDetails?.rawData,
            source: this.__input.triggerDetails?.source,
            timestamp: this.__input.triggerDetails?.timestamp,
            triggerArn: this.__input.triggerDetails?.triggerArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartIncident.incidentRecordArn', props);
    return resource.getResponseField('incidentRecordArn') as unknown as string;
  }

}

