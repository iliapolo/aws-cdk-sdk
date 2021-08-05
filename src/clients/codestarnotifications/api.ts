import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeStarNotificationsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createNotificationRule(input: shapes.CodeStarNotificationsCreateNotificationRuleRequest): CodeStarNotificationsResponsesCreateNotificationRule {
    return new CodeStarNotificationsResponsesCreateNotificationRule(this, this.__resources, input);
  }

  public deleteNotificationRule(input: shapes.CodeStarNotificationsDeleteNotificationRuleRequest): CodeStarNotificationsResponsesDeleteNotificationRule {
    return new CodeStarNotificationsResponsesDeleteNotificationRule(this, this.__resources, input);
  }

  public deleteTarget(input: shapes.CodeStarNotificationsDeleteTargetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTarget',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DeleteTarget'),
        parameters: {
          TargetAddress: input.targetAddress,
          ForceUnsubscribeAll: input.forceUnsubscribeAll,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTarget', props);
  }

  public describeNotificationRule(input: shapes.CodeStarNotificationsDescribeNotificationRuleRequest): CodeStarNotificationsResponsesDescribeNotificationRule {
    return new CodeStarNotificationsResponsesDescribeNotificationRule(this, this.__resources, input);
  }

  public listEventTypes(input: shapes.CodeStarNotificationsListEventTypesRequest): CodeStarNotificationsResponsesListEventTypes {
    return new CodeStarNotificationsResponsesListEventTypes(this, this.__resources, input);
  }

  public listNotificationRules(input: shapes.CodeStarNotificationsListNotificationRulesRequest): CodeStarNotificationsResponsesListNotificationRules {
    return new CodeStarNotificationsResponsesListNotificationRules(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeStarNotificationsListTagsForResourceRequest): CodeStarNotificationsResponsesListTagsForResource {
    return new CodeStarNotificationsResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTargets(input: shapes.CodeStarNotificationsListTargetsRequest): CodeStarNotificationsResponsesListTargets {
    return new CodeStarNotificationsResponsesListTargets(this, this.__resources, input);
  }

  public subscribe(input: shapes.CodeStarNotificationsSubscribeRequest): CodeStarNotificationsResponsesSubscribe {
    return new CodeStarNotificationsResponsesSubscribe(this, this.__resources, input);
  }

  public tagResource(input: shapes.CodeStarNotificationsTagResourceRequest): CodeStarNotificationsResponsesTagResource {
    return new CodeStarNotificationsResponsesTagResource(this, this.__resources, input);
  }

  public unsubscribe(input: shapes.CodeStarNotificationsUnsubscribeRequest): CodeStarNotificationsResponsesUnsubscribe {
    return new CodeStarNotificationsResponsesUnsubscribe(this, this.__resources, input);
  }

  public untagResource(input: shapes.CodeStarNotificationsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.UntagResource'),
        parameters: {
          Arn: input.arn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateNotificationRule(input: shapes.CodeStarNotificationsUpdateNotificationRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.UpdateNotificationRule'),
        parameters: {
          Arn: input.arn,
          Name: input.name,
          Status: input.status,
          EventTypeIds: input.eventTypeIds,
          Targets: input.targets,
          DetailType: input.detailType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateNotificationRule', props);
  }

}

export class CodeStarNotificationsResponsesCreateNotificationRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarNotificationsCreateNotificationRuleRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.CreateNotificationRule.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
          EventTypeIds: this.__input.eventTypeIds,
          Resource: this.__input.resource,
          Targets: this.__input.targets,
          DetailType: this.__input.detailType,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNotificationRule.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class CodeStarNotificationsResponsesDeleteNotificationRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarNotificationsDeleteNotificationRuleRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DeleteNotificationRule.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNotificationRule.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class CodeStarNotificationsResponsesDescribeNotificationRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarNotificationsDescribeNotificationRuleRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.Name'),
        outputPath: 'Name',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get eventTypes(): shapes.CodeStarNotificationsEventTypeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.EventTypes'),
        outputPath: 'EventTypes',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.EventTypes', props);
    return resource.getResponseField('EventTypes') as unknown as shapes.CodeStarNotificationsEventTypeSummary[];
  }

  public get resource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.Resource'),
        outputPath: 'Resource',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.Resource', props);
    return resource.getResponseField('Resource') as unknown as string;
  }

  public get targets(): shapes.CodeStarNotificationsTargetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.Targets'),
        outputPath: 'Targets',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.Targets', props);
    return resource.getResponseField('Targets') as unknown as shapes.CodeStarNotificationsTargetSummary[];
  }

  public get detailType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.DetailType'),
        outputPath: 'DetailType',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.DetailType', props);
    return resource.getResponseField('DetailType') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.CreatedBy'),
        outputPath: 'CreatedBy',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.CreatedBy', props);
    return resource.getResponseField('CreatedBy') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.Status'),
        outputPath: 'Status',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.CreatedTimestamp'),
        outputPath: 'CreatedTimestamp',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.CreatedTimestamp', props);
    return resource.getResponseField('CreatedTimestamp') as unknown as string;
  }

  public get lastModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.LastModifiedTimestamp'),
        outputPath: 'LastModifiedTimestamp',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.LastModifiedTimestamp', props);
    return resource.getResponseField('LastModifiedTimestamp') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationRule',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.DescribeNotificationRule.Tags'),
        outputPath: 'Tags',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationRule.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeStarNotificationsResponsesListEventTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarNotificationsListEventTypesRequest) {
  }

  public get eventTypes(): shapes.CodeStarNotificationsEventTypeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventTypes',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.ListEventTypes.EventTypes'),
        outputPath: 'EventTypes',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventTypes.EventTypes', props);
    return resource.getResponseField('EventTypes') as unknown as shapes.CodeStarNotificationsEventTypeSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventTypes',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.ListEventTypes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventTypes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeStarNotificationsResponsesListNotificationRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarNotificationsListNotificationRulesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotificationRules',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.ListNotificationRules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotificationRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get notificationRules(): shapes.CodeStarNotificationsNotificationRuleSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotificationRules',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.ListNotificationRules.NotificationRules'),
        outputPath: 'NotificationRules',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotificationRules.NotificationRules', props);
    return resource.getResponseField('NotificationRules') as unknown as shapes.CodeStarNotificationsNotificationRuleSummary[];
  }

}

export class CodeStarNotificationsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarNotificationsListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeStarNotificationsResponsesListTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarNotificationsListTargetsRequest) {
  }

  public get targets(): shapes.CodeStarNotificationsTargetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTargets',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.ListTargets.Targets'),
        outputPath: 'Targets',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTargets.Targets', props);
    return resource.getResponseField('Targets') as unknown as shapes.CodeStarNotificationsTargetSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTargets',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.ListTargets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTargets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeStarNotificationsResponsesSubscribe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarNotificationsSubscribeRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'subscribe',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.Subscribe.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.__input.arn,
          Target: {
            TargetType: this.__input.target.targetType,
            TargetAddress: this.__input.target.targetAddress,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Subscribe.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class CodeStarNotificationsResponsesTagResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarNotificationsTagResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.TagResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          Arn: this.__input.arn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TagResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeStarNotificationsResponsesUnsubscribe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarNotificationsUnsubscribeRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unsubscribe',
        service: 'CodeStarNotifications',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarNotifications.Unsubscribe.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.__input.arn,
          TargetAddress: this.__input.targetAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Unsubscribe.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

