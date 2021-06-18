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

  public cancelReplay(input: shapes.EventBridgeCancelReplayRequest): EventBridgeCancelReplay {
    return new EventBridgeCancelReplay(this, 'CancelReplay', this.__resources, input);
  }

  public createArchive(input: shapes.EventBridgeCreateArchiveRequest): EventBridgeCreateArchive {
    return new EventBridgeCreateArchive(this, 'CreateArchive', this.__resources, input);
  }

  public createEventBus(input: shapes.EventBridgeCreateEventBusRequest): EventBridgeCreateEventBus {
    return new EventBridgeCreateEventBus(this, 'CreateEventBus', this.__resources, input);
  }

  public createPartnerEventSource(input: shapes.EventBridgeCreatePartnerEventSourceRequest): EventBridgeCreatePartnerEventSource {
    return new EventBridgeCreatePartnerEventSource(this, 'CreatePartnerEventSource', this.__resources, input);
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

  public describeArchive(input: shapes.EventBridgeDescribeArchiveRequest): EventBridgeDescribeArchive {
    return new EventBridgeDescribeArchive(this, 'DescribeArchive', this.__resources, input);
  }

  public describeEventBus(input: shapes.EventBridgeDescribeEventBusRequest): EventBridgeDescribeEventBus {
    return new EventBridgeDescribeEventBus(this, 'DescribeEventBus', this.__resources, input);
  }

  public describeEventSource(input: shapes.EventBridgeDescribeEventSourceRequest): EventBridgeDescribeEventSource {
    return new EventBridgeDescribeEventSource(this, 'DescribeEventSource', this.__resources, input);
  }

  public describePartnerEventSource(input: shapes.EventBridgeDescribePartnerEventSourceRequest): EventBridgeDescribePartnerEventSource {
    return new EventBridgeDescribePartnerEventSource(this, 'DescribePartnerEventSource', this.__resources, input);
  }

  public describeReplay(input: shapes.EventBridgeDescribeReplayRequest): EventBridgeDescribeReplay {
    return new EventBridgeDescribeReplay(this, 'DescribeReplay', this.__resources, input);
  }

  public describeRule(input: shapes.EventBridgeDescribeRuleRequest): EventBridgeDescribeRule {
    return new EventBridgeDescribeRule(this, 'DescribeRule', this.__resources, input);
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

  public listArchives(input: shapes.EventBridgeListArchivesRequest): EventBridgeListArchives {
    return new EventBridgeListArchives(this, 'ListArchives', this.__resources, input);
  }

  public listEventBuses(input: shapes.EventBridgeListEventBusesRequest): EventBridgeListEventBuses {
    return new EventBridgeListEventBuses(this, 'ListEventBuses', this.__resources, input);
  }

  public listEventSources(input: shapes.EventBridgeListEventSourcesRequest): EventBridgeListEventSources {
    return new EventBridgeListEventSources(this, 'ListEventSources', this.__resources, input);
  }

  public listPartnerEventSourceAccounts(input: shapes.EventBridgeListPartnerEventSourceAccountsRequest): EventBridgeListPartnerEventSourceAccounts {
    return new EventBridgeListPartnerEventSourceAccounts(this, 'ListPartnerEventSourceAccounts', this.__resources, input);
  }

  public listPartnerEventSources(input: shapes.EventBridgeListPartnerEventSourcesRequest): EventBridgeListPartnerEventSources {
    return new EventBridgeListPartnerEventSources(this, 'ListPartnerEventSources', this.__resources, input);
  }

  public listReplays(input: shapes.EventBridgeListReplaysRequest): EventBridgeListReplays {
    return new EventBridgeListReplays(this, 'ListReplays', this.__resources, input);
  }

  public listRuleNamesByTarget(input: shapes.EventBridgeListRuleNamesByTargetRequest): EventBridgeListRuleNamesByTarget {
    return new EventBridgeListRuleNamesByTarget(this, 'ListRuleNamesByTarget', this.__resources, input);
  }

  public listRules(input: shapes.EventBridgeListRulesRequest): EventBridgeListRules {
    return new EventBridgeListRules(this, 'ListRules', this.__resources, input);
  }

  public listTagsForResource(input: shapes.EventBridgeListTagsForResourceRequest): EventBridgeListTagsForResource {
    return new EventBridgeListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTargetsByRule(input: shapes.EventBridgeListTargetsByRuleRequest): EventBridgeListTargetsByRule {
    return new EventBridgeListTargetsByRule(this, 'ListTargetsByRule', this.__resources, input);
  }

  public putEvents(input: shapes.EventBridgePutEventsRequest): EventBridgePutEvents {
    return new EventBridgePutEvents(this, 'PutEvents', this.__resources, input);
  }

  public putPartnerEvents(input: shapes.EventBridgePutPartnerEventsRequest): EventBridgePutPartnerEvents {
    return new EventBridgePutPartnerEvents(this, 'PutPartnerEvents', this.__resources, input);
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

  public putRule(input: shapes.EventBridgePutRuleRequest): EventBridgePutRule {
    return new EventBridgePutRule(this, 'PutRule', this.__resources, input);
  }

  public putTargets(input: shapes.EventBridgePutTargetsRequest): EventBridgePutTargets {
    return new EventBridgePutTargets(this, 'PutTargets', this.__resources, input);
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

  public removeTargets(input: shapes.EventBridgeRemoveTargetsRequest): EventBridgeRemoveTargets {
    return new EventBridgeRemoveTargets(this, 'RemoveTargets', this.__resources, input);
  }

  public startReplay(input: shapes.EventBridgeStartReplayRequest): EventBridgeStartReplay {
    return new EventBridgeStartReplay(this, 'StartReplay', this.__resources, input);
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

  public testEventPattern(input: shapes.EventBridgeTestEventPatternRequest): EventBridgeTestEventPattern {
    return new EventBridgeTestEventPattern(this, 'TestEventPattern', this.__resources, input);
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

  public updateArchive(input: shapes.EventBridgeUpdateArchiveRequest): EventBridgeUpdateArchive {
    return new EventBridgeUpdateArchive(this, 'UpdateArchive', this.__resources, input);
  }

}

export class EventBridgeCancelReplay extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeCancelReplayRequest) {
    super(scope, id);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelReplay.ReplayArn', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelReplay.State', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelReplay.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

}

export class EventBridgeCreateArchive extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeCreateArchiveRequest) {
    super(scope, id);
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
          ArchiveName: this.input.archiveName,
          EventSourceArn: this.input.eventSourceArn,
          Description: this.input.description,
          EventPattern: this.input.eventPattern,
          RetentionDays: this.input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateArchive.ArchiveArn', props);
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
          ArchiveName: this.input.archiveName,
          EventSourceArn: this.input.eventSourceArn,
          Description: this.input.description,
          EventPattern: this.input.eventPattern,
          RetentionDays: this.input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateArchive.State', props);
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
          ArchiveName: this.input.archiveName,
          EventSourceArn: this.input.eventSourceArn,
          Description: this.input.description,
          EventPattern: this.input.eventPattern,
          RetentionDays: this.input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateArchive.StateReason', props);
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
          ArchiveName: this.input.archiveName,
          EventSourceArn: this.input.eventSourceArn,
          Description: this.input.description,
          EventPattern: this.input.eventPattern,
          RetentionDays: this.input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateArchive.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class EventBridgeCreateEventBus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeCreateEventBusRequest) {
    super(scope, id);
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
          Name: this.input.name,
          EventSourceName: this.input.eventSourceName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventBus.EventBusArn', props);
    return resource.getResponseField('EventBusArn') as unknown as string;
  }

}

export class EventBridgeCreatePartnerEventSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeCreatePartnerEventSourceRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Account: this.input.account,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePartnerEventSource.EventSourceArn', props);
    return resource.getResponseField('EventSourceArn') as unknown as string;
  }

}

export class EventBridgeDescribeArchive extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeDescribeArchiveRequest) {
    super(scope, id);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.ArchiveArn', props);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.ArchiveName', props);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.EventSourceArn', props);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.Description', props);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.EventPattern', props);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.State', props);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.StateReason', props);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.RetentionDays', props);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.SizeBytes', props);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.EventCount', props);
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
          ArchiveName: this.input.archiveName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeArchive.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class EventBridgeDescribeEventBus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeDescribeEventBusRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventBus.Name', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventBus.Arn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventBus.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class EventBridgeDescribeEventSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeDescribeEventSourceRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventSource.Arn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventSource.CreatedBy', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventSource.CreationTime', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventSource.ExpirationTime', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventSource.Name', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventSource.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class EventBridgeDescribePartnerEventSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeDescribePartnerEventSourceRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePartnerEventSource.Arn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePartnerEventSource.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class EventBridgeDescribeReplay extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeDescribeReplayRequest) {
    super(scope, id);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.ReplayName', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.ReplayArn', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.Description', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.State', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.StateReason', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.EventSourceArn', props);
    return resource.getResponseField('EventSourceArn') as unknown as string;
  }

  public get destination(): EventBridgeDescribeReplayDestination {
    return new EventBridgeDescribeReplayDestination(this, 'Destination', this.__resources, this.input);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.EventStartTime', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.EventEndTime', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.EventLastReplayedTime', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.ReplayStartTime', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.ReplayEndTime', props);
    return resource.getResponseField('ReplayEndTime') as unknown as string;
  }

}

export class EventBridgeDescribeReplayDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeDescribeReplayRequest) {
    super(scope, id);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.Destination.Arn', props);
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
          ReplayName: this.input.replayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplay.Destination.FilterArns', props);
    return resource.getResponseField('Destination.FilterArns') as unknown as string[];
  }

}

export class EventBridgeDescribeRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeDescribeRuleRequest) {
    super(scope, id);
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
          Name: this.input.name,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRule.Name', props);
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
          Name: this.input.name,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRule.Arn', props);
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
          Name: this.input.name,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRule.EventPattern', props);
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
          Name: this.input.name,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRule.ScheduleExpression', props);
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
          Name: this.input.name,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRule.State', props);
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
          Name: this.input.name,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRule.Description', props);
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
          Name: this.input.name,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRule.RoleArn', props);
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
          Name: this.input.name,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRule.ManagedBy', props);
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
          Name: this.input.name,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRule.EventBusName', props);
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
          Name: this.input.name,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRule.CreatedBy', props);
    return resource.getResponseField('CreatedBy') as unknown as string;
  }

}

export class EventBridgeListArchives extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeListArchivesRequest) {
    super(scope, id);
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
          NamePrefix: this.input.namePrefix,
          EventSourceArn: this.input.eventSourceArn,
          State: this.input.state,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListArchives.Archives', props);
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
          NamePrefix: this.input.namePrefix,
          EventSourceArn: this.input.eventSourceArn,
          State: this.input.state,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListArchives.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeListEventBuses extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeListEventBusesRequest) {
    super(scope, id);
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
          NamePrefix: this.input.namePrefix,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventBuses.EventBuses', props);
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
          NamePrefix: this.input.namePrefix,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventBuses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeListEventSources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeListEventSourcesRequest) {
    super(scope, id);
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
          NamePrefix: this.input.namePrefix,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventSources.EventSources', props);
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
          NamePrefix: this.input.namePrefix,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventSources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeListPartnerEventSourceAccounts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeListPartnerEventSourceAccountsRequest) {
    super(scope, id);
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
          EventSourceName: this.input.eventSourceName,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPartnerEventSourceAccounts.PartnerEventSourceAccounts', props);
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
          EventSourceName: this.input.eventSourceName,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPartnerEventSourceAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeListPartnerEventSources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeListPartnerEventSourcesRequest) {
    super(scope, id);
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
          NamePrefix: this.input.namePrefix,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPartnerEventSources.PartnerEventSources', props);
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
          NamePrefix: this.input.namePrefix,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPartnerEventSources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeListReplays extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeListReplaysRequest) {
    super(scope, id);
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
          NamePrefix: this.input.namePrefix,
          State: this.input.state,
          EventSourceArn: this.input.eventSourceArn,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListReplays.Replays', props);
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
          NamePrefix: this.input.namePrefix,
          State: this.input.state,
          EventSourceArn: this.input.eventSourceArn,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListReplays.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeListRuleNamesByTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeListRuleNamesByTargetRequest) {
    super(scope, id);
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
          TargetArn: this.input.targetArn,
          EventBusName: this.input.eventBusName,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuleNamesByTarget.RuleNames', props);
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
          TargetArn: this.input.targetArn,
          EventBusName: this.input.eventBusName,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuleNamesByTarget.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeListRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeListRulesRequest) {
    super(scope, id);
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
          NamePrefix: this.input.namePrefix,
          EventBusName: this.input.eventBusName,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRules.Rules', props);
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
          NamePrefix: this.input.namePrefix,
          EventBusName: this.input.eventBusName,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgeListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.EventBridgeTag[];
  }

}

export class EventBridgeListTargetsByRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeListTargetsByRuleRequest) {
    super(scope, id);
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
          Rule: this.input.rule,
          EventBusName: this.input.eventBusName,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTargetsByRule.Targets', props);
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
          Rule: this.input.rule,
          EventBusName: this.input.eventBusName,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTargetsByRule.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EventBridgePutEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgePutEventsRequest) {
    super(scope, id);
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
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEvents.FailedEntryCount', props);
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
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEvents.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.EventBridgePutEventsResultEntry[];
  }

}

export class EventBridgePutPartnerEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgePutPartnerEventsRequest) {
    super(scope, id);
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
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPartnerEvents.FailedEntryCount', props);
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
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPartnerEvents.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.EventBridgePutPartnerEventsResultEntry[];
  }

}

export class EventBridgePutRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgePutRuleRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ScheduleExpression: this.input.scheduleExpression,
          EventPattern: this.input.eventPattern,
          State: this.input.state,
          Description: this.input.description,
          RoleArn: this.input.roleArn,
          Tags: this.input.tags,
          EventBusName: this.input.eventBusName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRule.RuleArn', props);
    return resource.getResponseField('RuleArn') as unknown as string;
  }

}

export class EventBridgePutTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgePutTargetsRequest) {
    super(scope, id);
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
          Rule: this.input.rule,
          EventBusName: this.input.eventBusName,
          Targets: this.input.targets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutTargets.FailedEntryCount', props);
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
          Rule: this.input.rule,
          EventBusName: this.input.eventBusName,
          Targets: this.input.targets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutTargets.FailedEntries', props);
    return resource.getResponseField('FailedEntries') as unknown as shapes.EventBridgePutTargetsResultEntry[];
  }

}

export class EventBridgeRemoveTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeRemoveTargetsRequest) {
    super(scope, id);
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
          Rule: this.input.rule,
          EventBusName: this.input.eventBusName,
          Ids: this.input.ids,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveTargets.FailedEntryCount', props);
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
          Rule: this.input.rule,
          EventBusName: this.input.eventBusName,
          Ids: this.input.ids,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveTargets.FailedEntries', props);
    return resource.getResponseField('FailedEntries') as unknown as shapes.EventBridgeRemoveTargetsResultEntry[];
  }

}

export class EventBridgeStartReplay extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeStartReplayRequest) {
    super(scope, id);
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
          ReplayName: this.input.replayName,
          Description: this.input.description,
          EventSourceArn: this.input.eventSourceArn,
          EventStartTime: this.input.eventStartTime,
          EventEndTime: this.input.eventEndTime,
          Destination: {
            Arn: this.input.destination.arn,
            FilterArns: this.input.destination.filterArns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartReplay.ReplayArn', props);
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
          ReplayName: this.input.replayName,
          Description: this.input.description,
          EventSourceArn: this.input.eventSourceArn,
          EventStartTime: this.input.eventStartTime,
          EventEndTime: this.input.eventEndTime,
          Destination: {
            Arn: this.input.destination.arn,
            FilterArns: this.input.destination.filterArns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartReplay.State', props);
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
          ReplayName: this.input.replayName,
          Description: this.input.description,
          EventSourceArn: this.input.eventSourceArn,
          EventStartTime: this.input.eventStartTime,
          EventEndTime: this.input.eventEndTime,
          Destination: {
            Arn: this.input.destination.arn,
            FilterArns: this.input.destination.filterArns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartReplay.StateReason', props);
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
          ReplayName: this.input.replayName,
          Description: this.input.description,
          EventSourceArn: this.input.eventSourceArn,
          EventStartTime: this.input.eventStartTime,
          EventEndTime: this.input.eventEndTime,
          Destination: {
            Arn: this.input.destination.arn,
            FilterArns: this.input.destination.filterArns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartReplay.ReplayStartTime', props);
    return resource.getResponseField('ReplayStartTime') as unknown as string;
  }

}

export class EventBridgeTestEventPattern extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeTestEventPatternRequest) {
    super(scope, id);
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
          EventPattern: this.input.eventPattern,
          Event: this.input.event,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestEventPattern.Result', props);
    return resource.getResponseField('Result') as unknown as boolean;
  }

}

export class EventBridgeUpdateArchive extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EventBridgeUpdateArchiveRequest) {
    super(scope, id);
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
          ArchiveName: this.input.archiveName,
          Description: this.input.description,
          EventPattern: this.input.eventPattern,
          RetentionDays: this.input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateArchive.ArchiveArn', props);
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
          ArchiveName: this.input.archiveName,
          Description: this.input.description,
          EventPattern: this.input.eventPattern,
          RetentionDays: this.input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateArchive.State', props);
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
          ArchiveName: this.input.archiveName,
          Description: this.input.description,
          EventPattern: this.input.eventPattern,
          RetentionDays: this.input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateArchive.StateReason', props);
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
          ArchiveName: this.input.archiveName,
          Description: this.input.description,
          EventPattern: this.input.eventPattern,
          RetentionDays: this.input.retentionDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateArchive.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

