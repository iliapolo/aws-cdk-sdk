import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EventBridgeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public activateEventSource(input: shapes.EventBridgeActivateEventSourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ActivateEventSource'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ActivateEventSource', props);
  }

  public cancelReplay(input: shapes.EventBridgeCancelReplayRequest): EventBridgeResponsesCancelReplay {
    return new EventBridgeResponsesCancelReplay(this, this.__resources, input);
  }

  public createArchive(input: shapes.EventBridgeCreateArchiveRequest): EventBridgeResponsesCreateArchive {
    return new EventBridgeResponsesCreateArchive(this, this.__resources, input);
  }

  public createEventBus(input: shapes.EventBridgeCreateEventBusRequest): EventBridgeResponsesCreateEventBus {
    return new EventBridgeResponsesCreateEventBus(this, this.__resources, input);
  }

  public createPartnerEventSource(input: shapes.EventBridgeCreatePartnerEventSourceRequest): EventBridgeResponsesCreatePartnerEventSource {
    return new EventBridgeResponsesCreatePartnerEventSource(this, this.__resources, input);
  }

  public deactivateEventSource(input: shapes.EventBridgeDeactivateEventSourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deactivateEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DeactivateEventSource'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeactivateEventSource', props);
  }

  public deleteArchive(input: shapes.EventBridgeDeleteArchiveRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DeleteArchive'),
        parameters: {
          ArchiveName: input.archiveName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteArchive', props);
  }

  public deleteEventBus(input: shapes.EventBridgeDeleteEventBusRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventBus',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DeleteEventBus'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEventBus', props);
  }

  public deletePartnerEventSource(input: shapes.EventBridgeDeletePartnerEventSourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePartnerEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DeletePartnerEventSource'),
        parameters: {
          Name: input.name,
          Account: input.account,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePartnerEventSource', props);
  }

  public deleteRule(input: shapes.EventBridgeDeleteRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DeleteRule'),
        parameters: {
          Name: input.name,
          EventBusName: input.eventBusName,
          Force: input.force,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRule', props);
  }

  public describeArchive(input: shapes.EventBridgeDescribeArchiveRequest): EventBridgeResponsesDescribeArchive {
    return new EventBridgeResponsesDescribeArchive(this, this.__resources, input);
  }

  public describeEventBus(input: shapes.EventBridgeDescribeEventBusRequest): EventBridgeResponsesDescribeEventBus {
    return new EventBridgeResponsesDescribeEventBus(this, this.__resources, input);
  }

  public describeEventSource(input: shapes.EventBridgeDescribeEventSourceRequest): EventBridgeResponsesDescribeEventSource {
    return new EventBridgeResponsesDescribeEventSource(this, this.__resources, input);
  }

  public describePartnerEventSource(input: shapes.EventBridgeDescribePartnerEventSourceRequest): EventBridgeResponsesDescribePartnerEventSource {
    return new EventBridgeResponsesDescribePartnerEventSource(this, this.__resources, input);
  }

  public describeReplay(input: shapes.EventBridgeDescribeReplayRequest): EventBridgeResponsesDescribeReplay {
    return new EventBridgeResponsesDescribeReplay(this, this.__resources, input);
  }

  public describeRule(input: shapes.EventBridgeDescribeRuleRequest): EventBridgeResponsesDescribeRule {
    return new EventBridgeResponsesDescribeRule(this, this.__resources, input);
  }

  public disableRule(input: shapes.EventBridgeDisableRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DisableRule'),
        parameters: {
          Name: input.name,
          EventBusName: input.eventBusName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableRule', props);
  }

  public enableRule(input: shapes.EventBridgeEnableRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.EnableRule'),
        parameters: {
          Name: input.name,
          EventBusName: input.eventBusName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableRule', props);
  }

  public listArchives(input: shapes.EventBridgeListArchivesRequest): EventBridgeResponsesListArchives {
    return new EventBridgeResponsesListArchives(this, this.__resources, input);
  }

  public listEventBuses(input: shapes.EventBridgeListEventBusesRequest): EventBridgeResponsesListEventBuses {
    return new EventBridgeResponsesListEventBuses(this, this.__resources, input);
  }

  public listEventSources(input: shapes.EventBridgeListEventSourcesRequest): EventBridgeResponsesListEventSources {
    return new EventBridgeResponsesListEventSources(this, this.__resources, input);
  }

  public listPartnerEventSourceAccounts(input: shapes.EventBridgeListPartnerEventSourceAccountsRequest): EventBridgeResponsesListPartnerEventSourceAccounts {
    return new EventBridgeResponsesListPartnerEventSourceAccounts(this, this.__resources, input);
  }

  public listPartnerEventSources(input: shapes.EventBridgeListPartnerEventSourcesRequest): EventBridgeResponsesListPartnerEventSources {
    return new EventBridgeResponsesListPartnerEventSources(this, this.__resources, input);
  }

  public listReplays(input: shapes.EventBridgeListReplaysRequest): EventBridgeResponsesListReplays {
    return new EventBridgeResponsesListReplays(this, this.__resources, input);
  }

  public listRuleNamesByTarget(input: shapes.EventBridgeListRuleNamesByTargetRequest): EventBridgeResponsesListRuleNamesByTarget {
    return new EventBridgeResponsesListRuleNamesByTarget(this, this.__resources, input);
  }

  public listRules(input: shapes.EventBridgeListRulesRequest): EventBridgeResponsesListRules {
    return new EventBridgeResponsesListRules(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.EventBridgeListTagsForResourceRequest): EventBridgeResponsesListTagsForResource {
    return new EventBridgeResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTargetsByRule(input: shapes.EventBridgeListTargetsByRuleRequest): EventBridgeResponsesListTargetsByRule {
    return new EventBridgeResponsesListTargetsByRule(this, this.__resources, input);
  }

  public putEvents(input: shapes.EventBridgePutEventsRequest): EventBridgeResponsesPutEvents {
    return new EventBridgeResponsesPutEvents(this, this.__resources, input);
  }

  public putPartnerEvents(input: shapes.EventBridgePutPartnerEventsRequest): EventBridgeResponsesPutPartnerEvents {
    return new EventBridgeResponsesPutPartnerEvents(this, this.__resources, input);
  }

  public putPermission(input: shapes.EventBridgePutPermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPermission',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.PutPermission'),
        parameters: {
          EventBusName: input.eventBusName,
          Action: input.action,
          Principal: input.principal,
          StatementId: input.statementId,
          Condition: {
            Type: input.condition?.type,
            Key: input.condition?.key,
            Value: input.condition?.value,
          },
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutPermission', props);
  }

  public putRule(input: shapes.EventBridgePutRuleRequest): EventBridgeResponsesPutRule {
    return new EventBridgeResponsesPutRule(this, this.__resources, input);
  }

  public putTargets(input: shapes.EventBridgePutTargetsRequest): EventBridgeResponsesPutTargets {
    return new EventBridgeResponsesPutTargets(this, this.__resources, input);
  }

  public removePermission(input: shapes.EventBridgeRemovePermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removePermission',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.RemovePermission'),
        parameters: {
          StatementId: input.statementId,
          RemoveAllPermissions: input.removeAllPermissions,
          EventBusName: input.eventBusName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemovePermission', props);
  }

  public removeTargets(input: shapes.EventBridgeRemoveTargetsRequest): EventBridgeResponsesRemoveTargets {
    return new EventBridgeResponsesRemoveTargets(this, this.__resources, input);
  }

  public startReplay(input: shapes.EventBridgeStartReplayRequest): EventBridgeResponsesStartReplay {
    return new EventBridgeResponsesStartReplay(this, this.__resources, input);
  }

  public tagResource(input: shapes.EventBridgeTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public testEventPattern(input: shapes.EventBridgeTestEventPatternRequest): EventBridgeResponsesTestEventPattern {
    return new EventBridgeResponsesTestEventPattern(this, this.__resources, input);
  }

  public untagResource(input: shapes.EventBridgeUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateArchive(input: shapes.EventBridgeUpdateArchiveRequest): EventBridgeResponsesUpdateArchive {
    return new EventBridgeResponsesUpdateArchive(this, this.__resources, input);
  }

}

export class EventBridgeResponsesCancelReplay {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeCancelReplayRequest) {
  }

  public get replayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.CancelReplay.ReplayArn'),
        outputPath: 'ReplayArn',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelReplay.ReplayArn', props);
    return resource.getResponseField('ReplayArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.CancelReplay.State'),
        outputPath: 'State',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelReplay.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.CancelReplay.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelReplay.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

}

export class EventBridgeResponsesCreateArchive {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeCreateArchiveRequest) {
  }

  public get archiveArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.CreateArchive.ArchiveArn'),
        outputPath: 'ArchiveArn',
        parameters: {
          ArchiveName: this.__input.archiveName,
          EventSourceArn: this.__input.eventSourceArn,
          Description: this.__input.description,
          EventPattern: this.__input.eventPattern,
          RetentionDays: this.__input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateArchive.ArchiveArn', props);
    return resource.getResponseField('ArchiveArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.CreateArchive.State'),
        outputPath: 'State',
        parameters: {
          ArchiveName: this.__input.archiveName,
          EventSourceArn: this.__input.eventSourceArn,
          Description: this.__input.description,
          EventPattern: this.__input.eventPattern,
          RetentionDays: this.__input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateArchive.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.CreateArchive.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          ArchiveName: this.__input.archiveName,
          EventSourceArn: this.__input.eventSourceArn,
          Description: this.__input.description,
          EventPattern: this.__input.eventPattern,
          RetentionDays: this.__input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateArchive.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.CreateArchive.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ArchiveName: this.__input.archiveName,
          EventSourceArn: this.__input.eventSourceArn,
          Description: this.__input.description,
          EventPattern: this.__input.eventPattern,
          RetentionDays: this.__input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateArchive.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class EventBridgeResponsesCreateEventBus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeCreateEventBusRequest) {
  }

  public get eventBusArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventBus',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.CreateEventBus.EventBusArn'),
        outputPath: 'EventBusArn',
        parameters: {
          Name: this.__input.name,
          EventSourceName: this.__input.eventSourceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventBus.EventBusArn', props);
    return resource.getResponseField('EventBusArn') as unknown as string;
  }

}

export class EventBridgeResponsesCreatePartnerEventSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeCreatePartnerEventSourceRequest) {
  }

  public get eventSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPartnerEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.CreatePartnerEventSource.EventSourceArn'),
        outputPath: 'EventSourceArn',
        parameters: {
          Name: this.__input.name,
          Account: this.__input.account,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePartnerEventSource.EventSourceArn', props);
    return resource.getResponseField('EventSourceArn') as unknown as string;
  }

}

export class EventBridgeResponsesDescribeArchive {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeDescribeArchiveRequest) {
  }

  public get archiveArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.ArchiveArn'),
        outputPath: 'ArchiveArn',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.ArchiveArn', props);
    return resource.getResponseField('ArchiveArn') as unknown as string;
  }

  public get archiveName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.ArchiveName'),
        outputPath: 'ArchiveName',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.ArchiveName', props);
    return resource.getResponseField('ArchiveName') as unknown as string;
  }

  public get eventSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.EventSourceArn'),
        outputPath: 'EventSourceArn',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.EventSourceArn', props);
    return resource.getResponseField('EventSourceArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.Description'),
        outputPath: 'Description',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get eventPattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.EventPattern'),
        outputPath: 'EventPattern',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.EventPattern', props);
    return resource.getResponseField('EventPattern') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.State'),
        outputPath: 'State',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

  public get retentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.RetentionDays'),
        outputPath: 'RetentionDays',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.RetentionDays', props);
    return resource.getResponseField('RetentionDays') as unknown as number;
  }

  public get sizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.SizeBytes'),
        outputPath: 'SizeBytes',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.SizeBytes', props);
    return resource.getResponseField('SizeBytes') as unknown as number;
  }

  public get eventCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.EventCount'),
        outputPath: 'EventCount',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.EventCount', props);
    return resource.getResponseField('EventCount') as unknown as number;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeArchive.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ArchiveName: this.__input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeArchive.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class EventBridgeResponsesDescribeEventBus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeDescribeEventBusRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventBus',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeEventBus.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventBus.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventBus',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeEventBus.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventBus.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventBus',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeEventBus.Policy'),
        outputPath: 'Policy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventBus.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class EventBridgeResponsesDescribeEventSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeDescribeEventSourceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeEventSource.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventSource.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeEventSource.CreatedBy'),
        outputPath: 'CreatedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventSource.CreatedBy', props);
    return resource.getResponseField('CreatedBy') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeEventSource.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventSource.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get expirationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeEventSource.ExpirationTime'),
        outputPath: 'ExpirationTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventSource.ExpirationTime', props);
    return resource.getResponseField('ExpirationTime') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeEventSource.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventSource.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeEventSource.State'),
        outputPath: 'State',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventSource.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class EventBridgeResponsesDescribePartnerEventSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeDescribePartnerEventSourceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePartnerEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribePartnerEventSource.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePartnerEventSource.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePartnerEventSource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribePartnerEventSource.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePartnerEventSource.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class EventBridgeResponsesDescribeReplay {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeDescribeReplayRequest) {
  }

  public get replayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.ReplayName'),
        outputPath: 'ReplayName',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.ReplayName', props);
    return resource.getResponseField('ReplayName') as unknown as string;
  }

  public get replayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.ReplayArn'),
        outputPath: 'ReplayArn',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.ReplayArn', props);
    return resource.getResponseField('ReplayArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.Description'),
        outputPath: 'Description',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.State'),
        outputPath: 'State',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

  public get eventSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.EventSourceArn'),
        outputPath: 'EventSourceArn',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.EventSourceArn', props);
    return resource.getResponseField('EventSourceArn') as unknown as string;
  }

  public get destination(): EventBridgeResponsesDescribeReplayDestination {
    return new EventBridgeResponsesDescribeReplayDestination(this.__scope, this.__resources, this.__input);
  }

  public get eventStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.EventStartTime'),
        outputPath: 'EventStartTime',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.EventStartTime', props);
    return resource.getResponseField('EventStartTime') as unknown as string;
  }

  public get eventEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.EventEndTime'),
        outputPath: 'EventEndTime',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.EventEndTime', props);
    return resource.getResponseField('EventEndTime') as unknown as string;
  }

  public get eventLastReplayedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.EventLastReplayedTime'),
        outputPath: 'EventLastReplayedTime',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.EventLastReplayedTime', props);
    return resource.getResponseField('EventLastReplayedTime') as unknown as string;
  }

  public get replayStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.ReplayStartTime'),
        outputPath: 'ReplayStartTime',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.ReplayStartTime', props);
    return resource.getResponseField('ReplayStartTime') as unknown as string;
  }

  public get replayEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.ReplayEndTime'),
        outputPath: 'ReplayEndTime',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.ReplayEndTime', props);
    return resource.getResponseField('ReplayEndTime') as unknown as string;
  }

}

export class EventBridgeResponsesDescribeReplayDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeDescribeReplayRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.Destination.Arn'),
        outputPath: 'Destination.Arn',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.Destination.Arn', props);
    return resource.getResponseField('Destination.Arn') as unknown as string;
  }

  public get filterArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeReplay.Destination.FilterArns'),
        outputPath: 'Destination.FilterArns',
        parameters: {
          ReplayName: this.__input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplay.Destination.FilterArns', props);
    return resource.getResponseField('Destination.FilterArns') as unknown as string[];
  }

}

export class EventBridgeResponsesDescribeRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeDescribeRuleRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeRule.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRule.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeRule.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRule.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get eventPattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeRule.EventPattern'),
        outputPath: 'EventPattern',
        parameters: {
          Name: this.__input.name,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRule.EventPattern', props);
    return resource.getResponseField('EventPattern') as unknown as string;
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeRule.ScheduleExpression'),
        outputPath: 'ScheduleExpression',
        parameters: {
          Name: this.__input.name,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRule.ScheduleExpression', props);
    return resource.getResponseField('ScheduleExpression') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeRule.State'),
        outputPath: 'State',
        parameters: {
          Name: this.__input.name,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRule.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeRule.Description'),
        outputPath: 'Description',
        parameters: {
          Name: this.__input.name,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRule.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeRule.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          Name: this.__input.name,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRule.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get managedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeRule.ManagedBy'),
        outputPath: 'ManagedBy',
        parameters: {
          Name: this.__input.name,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRule.ManagedBy', props);
    return resource.getResponseField('ManagedBy') as unknown as string;
  }

  public get eventBusName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeRule.EventBusName'),
        outputPath: 'EventBusName',
        parameters: {
          Name: this.__input.name,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRule.EventBusName', props);
    return resource.getResponseField('EventBusName') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.DescribeRule.CreatedBy'),
        outputPath: 'CreatedBy',
        parameters: {
          Name: this.__input.name,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRule.CreatedBy', props);
    return resource.getResponseField('CreatedBy') as unknown as string;
  }

}

export class EventBridgeResponsesListArchives {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeListArchivesRequest) {
  }

  public get archives(): shapes.EventBridgeArchive[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listArchives',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListArchives.Archives'),
        outputPath: 'Archives',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          EventSourceArn: this.__input.eventSourceArn,
          State: this.__input.state,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListArchives.Archives', props);
    return resource.getResponseField('Archives') as unknown as shapes.EventBridgeArchive[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listArchives',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListArchives.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          EventSourceArn: this.__input.eventSourceArn,
          State: this.__input.state,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListArchives.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeResponsesListEventBuses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeListEventBusesRequest) {
  }

  public get eventBuses(): shapes.EventBridgeEventBus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventBuses',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListEventBuses.EventBuses'),
        outputPath: 'EventBuses',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventBuses.EventBuses', props);
    return resource.getResponseField('EventBuses') as unknown as shapes.EventBridgeEventBus[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventBuses',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListEventBuses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventBuses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeResponsesListEventSources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeListEventSourcesRequest) {
  }

  public get eventSources(): shapes.EventBridgeEventSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventSources',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListEventSources.EventSources'),
        outputPath: 'EventSources',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventSources.EventSources', props);
    return resource.getResponseField('EventSources') as unknown as shapes.EventBridgeEventSource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventSources',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListEventSources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventSources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeResponsesListPartnerEventSourceAccounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeListPartnerEventSourceAccountsRequest) {
  }

  public get partnerEventSourceAccounts(): shapes.EventBridgePartnerEventSourceAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPartnerEventSourceAccounts',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListPartnerEventSourceAccounts.PartnerEventSourceAccounts'),
        outputPath: 'PartnerEventSourceAccounts',
        parameters: {
          EventSourceName: this.__input.eventSourceName,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPartnerEventSourceAccounts.PartnerEventSourceAccounts', props);
    return resource.getResponseField('PartnerEventSourceAccounts') as unknown as shapes.EventBridgePartnerEventSourceAccount[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPartnerEventSourceAccounts',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListPartnerEventSourceAccounts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          EventSourceName: this.__input.eventSourceName,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPartnerEventSourceAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeResponsesListPartnerEventSources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeListPartnerEventSourcesRequest) {
  }

  public get partnerEventSources(): shapes.EventBridgePartnerEventSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPartnerEventSources',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListPartnerEventSources.PartnerEventSources'),
        outputPath: 'PartnerEventSources',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPartnerEventSources.PartnerEventSources', props);
    return resource.getResponseField('PartnerEventSources') as unknown as shapes.EventBridgePartnerEventSource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPartnerEventSources',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListPartnerEventSources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPartnerEventSources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeResponsesListReplays {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeListReplaysRequest) {
  }

  public get replays(): shapes.EventBridgeReplay[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReplays',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListReplays.Replays'),
        outputPath: 'Replays',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          State: this.__input.state,
          EventSourceArn: this.__input.eventSourceArn,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReplays.Replays', props);
    return resource.getResponseField('Replays') as unknown as shapes.EventBridgeReplay[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReplays',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListReplays.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          State: this.__input.state,
          EventSourceArn: this.__input.eventSourceArn,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReplays.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeResponsesListRuleNamesByTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeListRuleNamesByTargetRequest) {
  }

  public get ruleNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuleNamesByTarget',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListRuleNamesByTarget.RuleNames'),
        outputPath: 'RuleNames',
        parameters: {
          TargetArn: this.__input.targetArn,
          EventBusName: this.__input.eventBusName,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuleNamesByTarget.RuleNames', props);
    return resource.getResponseField('RuleNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuleNamesByTarget',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListRuleNamesByTarget.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TargetArn: this.__input.targetArn,
          EventBusName: this.__input.eventBusName,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuleNamesByTarget.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeResponsesListRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeListRulesRequest) {
  }

  public get rules(): shapes.EventBridgeRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRules',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListRules.Rules'),
        outputPath: 'Rules',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          EventBusName: this.__input.eventBusName,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.EventBridgeRule[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRules',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListRules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NamePrefix: this.__input.namePrefix,
          EventBusName: this.__input.eventBusName,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeListTagsForResourceRequest) {
  }

  public get tags(): shapes.EventBridgeTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.EventBridgeTag[];
  }

}

export class EventBridgeResponsesListTargetsByRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeListTargetsByRuleRequest) {
  }

  public get targets(): shapes.EventBridgeTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTargetsByRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListTargetsByRule.Targets'),
        outputPath: 'Targets',
        parameters: {
          Rule: this.__input.rule,
          EventBusName: this.__input.eventBusName,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTargetsByRule.Targets', props);
    return resource.getResponseField('Targets') as unknown as shapes.EventBridgeTarget[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTargetsByRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.ListTargetsByRule.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Rule: this.__input.rule,
          EventBusName: this.__input.eventBusName,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTargetsByRule.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeResponsesPutEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgePutEventsRequest) {
  }

  public get failedEntryCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEvents',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.PutEvents.FailedEntryCount'),
        outputPath: 'FailedEntryCount',
        parameters: {
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEvents.FailedEntryCount', props);
    return resource.getResponseField('FailedEntryCount') as unknown as number;
  }

  public get entries(): shapes.EventBridgePutEventsResultEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEvents',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.PutEvents.Entries'),
        outputPath: 'Entries',
        parameters: {
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEvents.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.EventBridgePutEventsResultEntry[];
  }

}

export class EventBridgeResponsesPutPartnerEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgePutPartnerEventsRequest) {
  }

  public get failedEntryCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPartnerEvents',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.PutPartnerEvents.FailedEntryCount'),
        outputPath: 'FailedEntryCount',
        parameters: {
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPartnerEvents.FailedEntryCount', props);
    return resource.getResponseField('FailedEntryCount') as unknown as number;
  }

  public get entries(): shapes.EventBridgePutPartnerEventsResultEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPartnerEvents',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.PutPartnerEvents.Entries'),
        outputPath: 'Entries',
        parameters: {
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPartnerEvents.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.EventBridgePutPartnerEventsResultEntry[];
  }

}

export class EventBridgeResponsesPutRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgePutRuleRequest) {
  }

  public get ruleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRule',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.PutRule.RuleArn'),
        outputPath: 'RuleArn',
        parameters: {
          Name: this.__input.name,
          ScheduleExpression: this.__input.scheduleExpression,
          EventPattern: this.__input.eventPattern,
          State: this.__input.state,
          Description: this.__input.description,
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
          EventBusName: this.__input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRule.RuleArn', props);
    return resource.getResponseField('RuleArn') as unknown as string;
  }

}

export class EventBridgeResponsesPutTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgePutTargetsRequest) {
  }

  public get failedEntryCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putTargets',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.PutTargets.FailedEntryCount'),
        outputPath: 'FailedEntryCount',
        parameters: {
          Rule: this.__input.rule,
          EventBusName: this.__input.eventBusName,
          Targets: this.__input.targets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutTargets.FailedEntryCount', props);
    return resource.getResponseField('FailedEntryCount') as unknown as number;
  }

  public get failedEntries(): shapes.EventBridgePutTargetsResultEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putTargets',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.PutTargets.FailedEntries'),
        outputPath: 'FailedEntries',
        parameters: {
          Rule: this.__input.rule,
          EventBusName: this.__input.eventBusName,
          Targets: this.__input.targets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutTargets.FailedEntries', props);
    return resource.getResponseField('FailedEntries') as unknown as shapes.EventBridgePutTargetsResultEntry[];
  }

}

export class EventBridgeResponsesRemoveTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeRemoveTargetsRequest) {
  }

  public get failedEntryCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTargets',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.RemoveTargets.FailedEntryCount'),
        outputPath: 'FailedEntryCount',
        parameters: {
          Rule: this.__input.rule,
          EventBusName: this.__input.eventBusName,
          Ids: this.__input.ids,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveTargets.FailedEntryCount', props);
    return resource.getResponseField('FailedEntryCount') as unknown as number;
  }

  public get failedEntries(): shapes.EventBridgeRemoveTargetsResultEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTargets',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.RemoveTargets.FailedEntries'),
        outputPath: 'FailedEntries',
        parameters: {
          Rule: this.__input.rule,
          EventBusName: this.__input.eventBusName,
          Ids: this.__input.ids,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveTargets.FailedEntries', props);
    return resource.getResponseField('FailedEntries') as unknown as shapes.EventBridgeRemoveTargetsResultEntry[];
  }

}

export class EventBridgeResponsesStartReplay {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeStartReplayRequest) {
  }

  public get replayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.StartReplay.ReplayArn'),
        outputPath: 'ReplayArn',
        parameters: {
          ReplayName: this.__input.replayName,
          Description: this.__input.description,
          EventSourceArn: this.__input.eventSourceArn,
          EventStartTime: this.__input.eventStartTime,
          EventEndTime: this.__input.eventEndTime,
          Destination: {
            Arn: this.__input.destination.arn,
            FilterArns: this.__input.destination.filterArns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartReplay.ReplayArn', props);
    return resource.getResponseField('ReplayArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.StartReplay.State'),
        outputPath: 'State',
        parameters: {
          ReplayName: this.__input.replayName,
          Description: this.__input.description,
          EventSourceArn: this.__input.eventSourceArn,
          EventStartTime: this.__input.eventStartTime,
          EventEndTime: this.__input.eventEndTime,
          Destination: {
            Arn: this.__input.destination.arn,
            FilterArns: this.__input.destination.filterArns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartReplay.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.StartReplay.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          ReplayName: this.__input.replayName,
          Description: this.__input.description,
          EventSourceArn: this.__input.eventSourceArn,
          EventStartTime: this.__input.eventStartTime,
          EventEndTime: this.__input.eventEndTime,
          Destination: {
            Arn: this.__input.destination.arn,
            FilterArns: this.__input.destination.filterArns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartReplay.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

  public get replayStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startReplay',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.StartReplay.ReplayStartTime'),
        outputPath: 'ReplayStartTime',
        parameters: {
          ReplayName: this.__input.replayName,
          Description: this.__input.description,
          EventSourceArn: this.__input.eventSourceArn,
          EventStartTime: this.__input.eventStartTime,
          EventEndTime: this.__input.eventEndTime,
          Destination: {
            Arn: this.__input.destination.arn,
            FilterArns: this.__input.destination.filterArns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartReplay.ReplayStartTime', props);
    return resource.getResponseField('ReplayStartTime') as unknown as string;
  }

}

export class EventBridgeResponsesTestEventPattern {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeTestEventPatternRequest) {
  }

  public get result(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testEventPattern',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.TestEventPattern.Result'),
        outputPath: 'Result',
        parameters: {
          EventPattern: this.__input.eventPattern,
          Event: this.__input.event,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestEventPattern.Result', props);
    return resource.getResponseField('Result') as unknown as boolean;
  }

}

export class EventBridgeResponsesUpdateArchive {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EventBridgeUpdateArchiveRequest) {
  }

  public get archiveArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.UpdateArchive.ArchiveArn'),
        outputPath: 'ArchiveArn',
        parameters: {
          ArchiveName: this.__input.archiveName,
          Description: this.__input.description,
          EventPattern: this.__input.eventPattern,
          RetentionDays: this.__input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateArchive.ArchiveArn', props);
    return resource.getResponseField('ArchiveArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.UpdateArchive.State'),
        outputPath: 'State',
        parameters: {
          ArchiveName: this.__input.archiveName,
          Description: this.__input.description,
          EventPattern: this.__input.eventPattern,
          RetentionDays: this.__input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateArchive.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.UpdateArchive.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          ArchiveName: this.__input.archiveName,
          Description: this.__input.description,
          EventPattern: this.__input.eventPattern,
          RetentionDays: this.__input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateArchive.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateArchive',
        service: 'EventBridge',
        physicalResourceId: cr.PhysicalResourceId.of('EventBridge.UpdateArchive.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ArchiveName: this.__input.archiveName,
          Description: this.__input.description,
          EventPattern: this.__input.eventPattern,
          RetentionDays: this.__input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateArchive.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

