import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeStarNotificationsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createNotificationRule(input: shapes.CodeStarNotificationsCreateNotificationRuleRequest): CodeStarNotificationsCreateNotificationRule {
    return new CodeStarNotificationsCreateNotificationRule(this, 'CreateNotificationRule', this.__resources, input);
  }

  public deleteNotificationRule(input: shapes.CodeStarNotificationsDeleteNotificationRuleRequest): CodeStarNotificationsDeleteNotificationRule {
    return new CodeStarNotificationsDeleteNotificationRule(this, 'DeleteNotificationRule', this.__resources, input);
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

  public describeNotificationRule(input: shapes.CodeStarNotificationsDescribeNotificationRuleRequest): CodeStarNotificationsDescribeNotificationRule {
    return new CodeStarNotificationsDescribeNotificationRule(this, 'DescribeNotificationRule', this.__resources, input);
  }

  public listEventTypes(input: shapes.CodeStarNotificationsListEventTypesRequest): CodeStarNotificationsListEventTypes {
    return new CodeStarNotificationsListEventTypes(this, 'ListEventTypes', this.__resources, input);
  }

  public listNotificationRules(input: shapes.CodeStarNotificationsListNotificationRulesRequest): CodeStarNotificationsListNotificationRules {
    return new CodeStarNotificationsListNotificationRules(this, 'ListNotificationRules', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeStarNotificationsListTagsForResourceRequest): CodeStarNotificationsListTagsForResource {
    return new CodeStarNotificationsListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTargets(input: shapes.CodeStarNotificationsListTargetsRequest): CodeStarNotificationsListTargets {
    return new CodeStarNotificationsListTargets(this, 'ListTargets', this.__resources, input);
  }

  public subscribe(input: shapes.CodeStarNotificationsSubscribeRequest): CodeStarNotificationsSubscribe {
    return new CodeStarNotificationsSubscribe(this, 'Subscribe', this.__resources, input);
  }

  public tagResource(input: shapes.CodeStarNotificationsTagResourceRequest): CodeStarNotificationsTagResource {
    return new CodeStarNotificationsTagResource(this, 'TagResource', this.__resources, input);
  }

  public unsubscribe(input: shapes.CodeStarNotificationsUnsubscribeRequest): CodeStarNotificationsUnsubscribe {
    return new CodeStarNotificationsUnsubscribe(this, 'Unsubscribe', this.__resources, input);
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

export class CodeStarNotificationsCreateNotificationRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarNotificationsCreateNotificationRuleRequest) {
    super(scope, id);
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
          Name: this.input.name,
          EventTypeIds: this.input.eventTypeIds,
          Resource: this.input.resource,
          Targets: this.input.targets,
          DetailType: this.input.detailType,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNotificationRule.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class CodeStarNotificationsDeleteNotificationRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarNotificationsDeleteNotificationRuleRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNotificationRule.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class CodeStarNotificationsDescribeNotificationRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarNotificationsDescribeNotificationRuleRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.Arn', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.Name', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.EventTypes', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.Resource', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.Targets', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.DetailType', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.CreatedBy', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.Status', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.CreatedTimestamp', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.LastModifiedTimestamp', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationRule.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeStarNotificationsListEventTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarNotificationsListEventTypesRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventTypes.EventTypes', props);
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
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventTypes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeStarNotificationsListNotificationRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarNotificationsListNotificationRulesRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNotificationRules.NextToken', props);
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
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNotificationRules.NotificationRules', props);
    return resource.getResponseField('NotificationRules') as unknown as shapes.CodeStarNotificationsNotificationRuleSummary[];
  }

}

export class CodeStarNotificationsListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarNotificationsListTagsForResourceRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeStarNotificationsListTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarNotificationsListTargetsRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTargets.Targets', props);
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
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTargets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeStarNotificationsSubscribe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarNotificationsSubscribeRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
          Target: {
            TargetType: this.input.target.targetType,
            TargetAddress: this.input.target.targetAddress,
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Subscribe.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class CodeStarNotificationsTagResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarNotificationsTagResourceRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TagResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeStarNotificationsUnsubscribe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarNotificationsUnsubscribeRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
          TargetAddress: this.input.targetAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Unsubscribe.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

