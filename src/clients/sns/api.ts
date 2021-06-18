import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SnsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addPermission(input: shapes.SnsAddPermissionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addPermission',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.AddPermission'),
        parameters: {
          TopicArn: input.topicArn,
          Label: input.label,
          AWSAccountId: input.awsAccountId,
          ActionName: input.actionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddPermission', props);
  }

  public checkIfPhoneNumberIsOptedOut(input: shapes.SnsCheckIfPhoneNumberIsOptedOutInput): SNSCheckIfPhoneNumberIsOptedOut {
    return new SNSCheckIfPhoneNumberIsOptedOut(this, 'CheckIfPhoneNumberIsOptedOut', this.__resources, input);
  }

  public confirmSubscription(input: shapes.SnsConfirmSubscriptionInput): SNSConfirmSubscription {
    return new SNSConfirmSubscription(this, 'ConfirmSubscription', this.__resources, input);
  }

  public createPlatformApplication(input: shapes.SnsCreatePlatformApplicationInput): SNSCreatePlatformApplication {
    return new SNSCreatePlatformApplication(this, 'CreatePlatformApplication', this.__resources, input);
  }

  public createPlatformEndpoint(input: shapes.SnsCreatePlatformEndpointInput): SNSCreatePlatformEndpoint {
    return new SNSCreatePlatformEndpoint(this, 'CreatePlatformEndpoint', this.__resources, input);
  }

  public createTopic(input: shapes.SnsCreateTopicInput): SNSCreateTopic {
    return new SNSCreateTopic(this, 'CreateTopic', this.__resources, input);
  }

  public deleteEndpoint(input: shapes.SnsDeleteEndpointInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEndpoint',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.DeleteEndpoint'),
        parameters: {
          EndpointArn: input.endpointArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEndpoint', props);
  }

  public deletePlatformApplication(input: shapes.SnsDeletePlatformApplicationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformApplication',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.DeletePlatformApplication'),
        parameters: {
          PlatformApplicationArn: input.platformApplicationArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePlatformApplication', props);
  }

  public deleteTopic(input: shapes.SnsDeleteTopicInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTopic',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.DeleteTopic'),
        parameters: {
          TopicArn: input.topicArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTopic', props);
  }

  public fetchEndpointAttributes(input: shapes.SnsGetEndpointAttributesInput): SNSFetchEndpointAttributes {
    return new SNSFetchEndpointAttributes(this, 'FetchEndpointAttributes', this.__resources, input);
  }

  public fetchPlatformApplicationAttributes(input: shapes.SnsGetPlatformApplicationAttributesInput): SNSFetchPlatformApplicationAttributes {
    return new SNSFetchPlatformApplicationAttributes(this, 'FetchPlatformApplicationAttributes', this.__resources, input);
  }

  public fetchSmsAttributes(input: shapes.SnsGetSmsAttributesInput): SNSFetchSmsAttributes {
    return new SNSFetchSmsAttributes(this, 'FetchSmsAttributes', this.__resources, input);
  }

  public fetchSubscriptionAttributes(input: shapes.SnsGetSubscriptionAttributesInput): SNSFetchSubscriptionAttributes {
    return new SNSFetchSubscriptionAttributes(this, 'FetchSubscriptionAttributes', this.__resources, input);
  }

  public fetchTopicAttributes(input: shapes.SnsGetTopicAttributesInput): SNSFetchTopicAttributes {
    return new SNSFetchTopicAttributes(this, 'FetchTopicAttributes', this.__resources, input);
  }

  public listEndpointsByPlatformApplication(input: shapes.SnsListEndpointsByPlatformApplicationInput): SNSListEndpointsByPlatformApplication {
    return new SNSListEndpointsByPlatformApplication(this, 'ListEndpointsByPlatformApplication', this.__resources, input);
  }

  public listPhoneNumbersOptedOut(input: shapes.SnsListPhoneNumbersOptedOutInput): SNSListPhoneNumbersOptedOut {
    return new SNSListPhoneNumbersOptedOut(this, 'ListPhoneNumbersOptedOut', this.__resources, input);
  }

  public listPlatformApplications(input: shapes.SnsListPlatformApplicationsInput): SNSListPlatformApplications {
    return new SNSListPlatformApplications(this, 'ListPlatformApplications', this.__resources, input);
  }

  public listSubscriptions(input: shapes.SnsListSubscriptionsInput): SNSListSubscriptions {
    return new SNSListSubscriptions(this, 'ListSubscriptions', this.__resources, input);
  }

  public listSubscriptionsByTopic(input: shapes.SnsListSubscriptionsByTopicInput): SNSListSubscriptionsByTopic {
    return new SNSListSubscriptionsByTopic(this, 'ListSubscriptionsByTopic', this.__resources, input);
  }

  public listTagsForResource(input: shapes.SnsListTagsForResourceRequest): SNSListTagsForResource {
    return new SNSListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTopics(input: shapes.SnsListTopicsInput): SNSListTopics {
    return new SNSListTopics(this, 'ListTopics', this.__resources, input);
  }

  public optInPhoneNumber(input: shapes.SnsOptInPhoneNumberInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'optInPhoneNumber',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.OptInPhoneNumber'),
        parameters: {
          phoneNumber: input.phoneNumber,
        },
      },
    };
    new cr.AwsCustomResource(this, 'OptInPhoneNumber', props);
  }

  public publish(input: shapes.SnsPublishInput): SNSPublish {
    return new SNSPublish(this, 'Publish', this.__resources, input);
  }

  public removePermission(input: shapes.SnsRemovePermissionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removePermission',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.RemovePermission'),
        parameters: {
          TopicArn: input.topicArn,
          Label: input.label,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemovePermission', props);
  }

  public setEndpointAttributes(input: shapes.SnsSetEndpointAttributesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setEndpointAttributes',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.SetEndpointAttributes'),
        parameters: {
          EndpointArn: input.endpointArn,
          Attributes: input.attributes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetEndpointAttributes', props);
  }

  public setPlatformApplicationAttributes(input: shapes.SnsSetPlatformApplicationAttributesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setPlatformApplicationAttributes',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.SetPlatformApplicationAttributes'),
        parameters: {
          PlatformApplicationArn: input.platformApplicationArn,
          Attributes: input.attributes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetPlatformApplicationAttributes', props);
  }

  public setSmsAttributes(input: shapes.SnsSetSmsAttributesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setSmsAttributes',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.SetSMSAttributes'),
        parameters: {
          attributes: input.attributes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetSMSAttributes', props);
  }

  public setSubscriptionAttributes(input: shapes.SnsSetSubscriptionAttributesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setSubscriptionAttributes',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.SetSubscriptionAttributes'),
        parameters: {
          SubscriptionArn: input.subscriptionArn,
          AttributeName: input.attributeName,
          AttributeValue: input.attributeValue,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetSubscriptionAttributes', props);
  }

  public setTopicAttributes(input: shapes.SnsSetTopicAttributesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setTopicAttributes',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.SetTopicAttributes'),
        parameters: {
          TopicArn: input.topicArn,
          AttributeName: input.attributeName,
          AttributeValue: input.attributeValue,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetTopicAttributes', props);
  }

  public subscribe(input: shapes.SnsSubscribeInput): SNSSubscribe {
    return new SNSSubscribe(this, 'Subscribe', this.__resources, input);
  }

  public tagResource(input: shapes.SnsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public unsubscribe(input: shapes.SnsUnsubscribeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unsubscribe',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.Unsubscribe'),
        parameters: {
          SubscriptionArn: input.subscriptionArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'Unsubscribe', props);
  }

  public untagResource(input: shapes.SnsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class SNSCheckIfPhoneNumberIsOptedOut extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsCheckIfPhoneNumberIsOptedOutInput) {
    super(scope, id);
  }

  public get isOptedOut(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkIfPhoneNumberIsOptedOut',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.CheckIfPhoneNumberIsOptedOut.isOptedOut'),
        outputPath: 'isOptedOut',
        parameters: {
          phoneNumber: this.input.phoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CheckIfPhoneNumberIsOptedOut.isOptedOut', props);
    return resource.getResponseField('isOptedOut') as unknown as boolean;
  }

}

export class SNSConfirmSubscription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsConfirmSubscriptionInput) {
    super(scope, id);
  }

  public get subscriptionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'confirmSubscription',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ConfirmSubscription.SubscriptionArn'),
        outputPath: 'SubscriptionArn',
        parameters: {
          TopicArn: this.input.topicArn,
          Token: this.input.token,
          AuthenticateOnUnsubscribe: this.input.authenticateOnUnsubscribe,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ConfirmSubscription.SubscriptionArn', props);
    return resource.getResponseField('SubscriptionArn') as unknown as string;
  }

}

export class SNSCreatePlatformApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsCreatePlatformApplicationInput) {
    super(scope, id);
  }

  public get platformApplicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformApplication',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.CreatePlatformApplication.PlatformApplicationArn'),
        outputPath: 'PlatformApplicationArn',
        parameters: {
          Name: this.input.name,
          Platform: this.input.platform,
          Attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformApplication.PlatformApplicationArn', props);
    return resource.getResponseField('PlatformApplicationArn') as unknown as string;
  }

}

export class SNSCreatePlatformEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsCreatePlatformEndpointInput) {
    super(scope, id);
  }

  public get endpointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformEndpoint',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.CreatePlatformEndpoint.EndpointArn'),
        outputPath: 'EndpointArn',
        parameters: {
          PlatformApplicationArn: this.input.platformApplicationArn,
          Token: this.input.token,
          CustomUserData: this.input.customUserData,
          Attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class SNSCreateTopic extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsCreateTopicInput) {
    super(scope, id);
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTopic',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.CreateTopic.TopicArn'),
        outputPath: 'TopicArn',
        parameters: {
          Name: this.input.name,
          Attributes: this.input.attributes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTopic.TopicArn', props);
    return resource.getResponseField('TopicArn') as unknown as string;
  }

}

export class SNSFetchEndpointAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsGetEndpointAttributesInput) {
    super(scope, id);
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEndpointAttributes',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.GetEndpointAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEndpointAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class SNSFetchPlatformApplicationAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsGetPlatformApplicationAttributesInput) {
    super(scope, id);
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlatformApplicationAttributes',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.GetPlatformApplicationAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          PlatformApplicationArn: this.input.platformApplicationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlatformApplicationAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class SNSFetchSmsAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsGetSmsAttributesInput) {
    super(scope, id);
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSmsAttributes',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.GetSMSAttributes.attributes'),
        outputPath: 'attributes',
        parameters: {
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSMSAttributes.attributes', props);
    return resource.getResponseField('attributes') as unknown as Record<string, string>;
  }

}

export class SNSFetchSubscriptionAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsGetSubscriptionAttributesInput) {
    super(scope, id);
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionAttributes',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.GetSubscriptionAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          SubscriptionArn: this.input.subscriptionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class SNSFetchTopicAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsGetTopicAttributesInput) {
    super(scope, id);
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicAttributes',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.GetTopicAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          TopicArn: this.input.topicArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class SNSListEndpointsByPlatformApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsListEndpointsByPlatformApplicationInput) {
    super(scope, id);
  }

  public get endpoints(): shapes.SnsEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpointsByPlatformApplication',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListEndpointsByPlatformApplication.Endpoints'),
        outputPath: 'Endpoints',
        parameters: {
          PlatformApplicationArn: this.input.platformApplicationArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpointsByPlatformApplication.Endpoints', props);
    return resource.getResponseField('Endpoints') as unknown as shapes.SnsEndpoint[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpointsByPlatformApplication',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListEndpointsByPlatformApplication.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          PlatformApplicationArn: this.input.platformApplicationArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpointsByPlatformApplication.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSListPhoneNumbersOptedOut extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsListPhoneNumbersOptedOutInput) {
    super(scope, id);
  }

  public get phoneNumbers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPhoneNumbersOptedOut',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListPhoneNumbersOptedOut.phoneNumbers'),
        outputPath: 'phoneNumbers',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPhoneNumbersOptedOut.phoneNumbers', props);
    return resource.getResponseField('phoneNumbers') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPhoneNumbersOptedOut',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListPhoneNumbersOptedOut.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPhoneNumbersOptedOut.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SNSListPlatformApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsListPlatformApplicationsInput) {
    super(scope, id);
  }

  public get platformApplications(): shapes.SnsPlatformApplication[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlatformApplications',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListPlatformApplications.PlatformApplications'),
        outputPath: 'PlatformApplications',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlatformApplications.PlatformApplications', props);
    return resource.getResponseField('PlatformApplications') as unknown as shapes.SnsPlatformApplication[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlatformApplications',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListPlatformApplications.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlatformApplications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSListSubscriptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsListSubscriptionsInput) {
    super(scope, id);
  }

  public get subscriptions(): shapes.SnsSubscription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscriptions',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListSubscriptions.Subscriptions'),
        outputPath: 'Subscriptions',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscriptions.Subscriptions', props);
    return resource.getResponseField('Subscriptions') as unknown as shapes.SnsSubscription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscriptions',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListSubscriptions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscriptions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSListSubscriptionsByTopic extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsListSubscriptionsByTopicInput) {
    super(scope, id);
  }

  public get subscriptions(): shapes.SnsSubscription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscriptionsByTopic',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListSubscriptionsByTopic.Subscriptions'),
        outputPath: 'Subscriptions',
        parameters: {
          TopicArn: this.input.topicArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscriptionsByTopic.Subscriptions', props);
    return resource.getResponseField('Subscriptions') as unknown as shapes.SnsSubscription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscriptionsByTopic',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListSubscriptionsByTopic.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TopicArn: this.input.topicArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscriptionsByTopic.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.SnsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.SnsTag[];
  }

}

export class SNSListTopics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsListTopicsInput) {
    super(scope, id);
  }

  public get topics(): shapes.SnsTopic[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTopics',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListTopics.Topics'),
        outputPath: 'Topics',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTopics.Topics', props);
    return resource.getResponseField('Topics') as unknown as shapes.SnsTopic[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTopics',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListTopics.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTopics.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSPublish extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsPublishInput) {
    super(scope, id);
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publish',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.Publish.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          TopicArn: this.input.topicArn,
          TargetArn: this.input.targetArn,
          PhoneNumber: this.input.phoneNumber,
          Message: this.input.message,
          Subject: this.input.subject,
          MessageStructure: this.input.messageStructure,
          MessageAttributes: this.input.messageAttributes,
          MessageDeduplicationId: this.input.messageDeduplicationId,
          MessageGroupId: this.input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Publish.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

  public get sequenceNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publish',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.Publish.SequenceNumber'),
        outputPath: 'SequenceNumber',
        parameters: {
          TopicArn: this.input.topicArn,
          TargetArn: this.input.targetArn,
          PhoneNumber: this.input.phoneNumber,
          Message: this.input.message,
          Subject: this.input.subject,
          MessageStructure: this.input.messageStructure,
          MessageAttributes: this.input.messageAttributes,
          MessageDeduplicationId: this.input.messageDeduplicationId,
          MessageGroupId: this.input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Publish.SequenceNumber', props);
    return resource.getResponseField('SequenceNumber') as unknown as string;
  }

}

export class SNSSubscribe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnsSubscribeInput) {
    super(scope, id);
  }

  public get subscriptionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'subscribe',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.Subscribe.SubscriptionArn'),
        outputPath: 'SubscriptionArn',
        parameters: {
          TopicArn: this.input.topicArn,
          Protocol: this.input.protocol,
          Endpoint: this.input.endpoint,
          Attributes: this.input.attributes,
          ReturnSubscriptionArn: this.input.returnSubscriptionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Subscribe.SubscriptionArn', props);
    return resource.getResponseField('SubscriptionArn') as unknown as string;
  }

}

