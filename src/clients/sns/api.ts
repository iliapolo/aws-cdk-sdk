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

  public checkIfPhoneNumberIsOptedOut(input: shapes.SnsCheckIfPhoneNumberIsOptedOutInput): SNSResponsesCheckIfPhoneNumberIsOptedOut {
    return new SNSResponsesCheckIfPhoneNumberIsOptedOut(this, this.__resources, input);
  }

  public confirmSubscription(input: shapes.SnsConfirmSubscriptionInput): SNSResponsesConfirmSubscription {
    return new SNSResponsesConfirmSubscription(this, this.__resources, input);
  }

  public createPlatformApplication(input: shapes.SnsCreatePlatformApplicationInput): SNSResponsesCreatePlatformApplication {
    return new SNSResponsesCreatePlatformApplication(this, this.__resources, input);
  }

  public createPlatformEndpoint(input: shapes.SnsCreatePlatformEndpointInput): SNSResponsesCreatePlatformEndpoint {
    return new SNSResponsesCreatePlatformEndpoint(this, this.__resources, input);
  }

  public createSmsSandboxPhoneNumber(input: shapes.SnsCreateSmsSandboxPhoneNumberInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSmsSandboxPhoneNumber',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.CreateSMSSandboxPhoneNumber'),
        parameters: {
          PhoneNumber: input.phoneNumber,
          LanguageCode: input.languageCode,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateSMSSandboxPhoneNumber', props);
  }

  public createTopic(input: shapes.SnsCreateTopicInput): SNSResponsesCreateTopic {
    return new SNSResponsesCreateTopic(this, this.__resources, input);
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

  public deleteSmsSandboxPhoneNumber(input: shapes.SnsDeleteSmsSandboxPhoneNumberInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSmsSandboxPhoneNumber',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.DeleteSMSSandboxPhoneNumber'),
        parameters: {
          PhoneNumber: input.phoneNumber,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSMSSandboxPhoneNumber', props);
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

  public fetchEndpointAttributes(input: shapes.SnsGetEndpointAttributesInput): SNSResponsesFetchEndpointAttributes {
    return new SNSResponsesFetchEndpointAttributes(this, this.__resources, input);
  }

  public fetchPlatformApplicationAttributes(input: shapes.SnsGetPlatformApplicationAttributesInput): SNSResponsesFetchPlatformApplicationAttributes {
    return new SNSResponsesFetchPlatformApplicationAttributes(this, this.__resources, input);
  }

  public fetchSmsAttributes(input: shapes.SnsGetSmsAttributesInput): SNSResponsesFetchSmsAttributes {
    return new SNSResponsesFetchSmsAttributes(this, this.__resources, input);
  }

  public fetchSmsSandboxAccountStatus(): SNSResponsesFetchSmsSandboxAccountStatus {
    return new SNSResponsesFetchSmsSandboxAccountStatus(this, this.__resources);
  }

  public fetchSubscriptionAttributes(input: shapes.SnsGetSubscriptionAttributesInput): SNSResponsesFetchSubscriptionAttributes {
    return new SNSResponsesFetchSubscriptionAttributes(this, this.__resources, input);
  }

  public fetchTopicAttributes(input: shapes.SnsGetTopicAttributesInput): SNSResponsesFetchTopicAttributes {
    return new SNSResponsesFetchTopicAttributes(this, this.__resources, input);
  }

  public listEndpointsByPlatformApplication(input: shapes.SnsListEndpointsByPlatformApplicationInput): SNSResponsesListEndpointsByPlatformApplication {
    return new SNSResponsesListEndpointsByPlatformApplication(this, this.__resources, input);
  }

  public listOriginationNumbers(input: shapes.SnsListOriginationNumbersRequest): SNSResponsesListOriginationNumbers {
    return new SNSResponsesListOriginationNumbers(this, this.__resources, input);
  }

  public listPhoneNumbersOptedOut(input: shapes.SnsListPhoneNumbersOptedOutInput): SNSResponsesListPhoneNumbersOptedOut {
    return new SNSResponsesListPhoneNumbersOptedOut(this, this.__resources, input);
  }

  public listPlatformApplications(input: shapes.SnsListPlatformApplicationsInput): SNSResponsesListPlatformApplications {
    return new SNSResponsesListPlatformApplications(this, this.__resources, input);
  }

  public listSmsSandboxPhoneNumbers(input: shapes.SnsListSmsSandboxPhoneNumbersInput): SNSResponsesListSmsSandboxPhoneNumbers {
    return new SNSResponsesListSmsSandboxPhoneNumbers(this, this.__resources, input);
  }

  public listSubscriptions(input: shapes.SnsListSubscriptionsInput): SNSResponsesListSubscriptions {
    return new SNSResponsesListSubscriptions(this, this.__resources, input);
  }

  public listSubscriptionsByTopic(input: shapes.SnsListSubscriptionsByTopicInput): SNSResponsesListSubscriptionsByTopic {
    return new SNSResponsesListSubscriptionsByTopic(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SnsListTagsForResourceRequest): SNSResponsesListTagsForResource {
    return new SNSResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTopics(input: shapes.SnsListTopicsInput): SNSResponsesListTopics {
    return new SNSResponsesListTopics(this, this.__resources, input);
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

  public publish(input: shapes.SnsPublishInput): SNSResponsesPublish {
    return new SNSResponsesPublish(this, this.__resources, input);
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

  public putEndpointAttributes(input: shapes.SnsSetEndpointAttributesInput): void {
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

  public putPlatformApplicationAttributes(input: shapes.SnsSetPlatformApplicationAttributesInput): void {
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

  public putSmsAttributes(input: shapes.SnsSetSmsAttributesInput): void {
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

  public putSubscriptionAttributes(input: shapes.SnsSetSubscriptionAttributesInput): void {
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

  public putTopicAttributes(input: shapes.SnsSetTopicAttributesInput): void {
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

  public subscribe(input: shapes.SnsSubscribeInput): SNSResponsesSubscribe {
    return new SNSResponsesSubscribe(this, this.__resources, input);
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

  public verifySmsSandboxPhoneNumber(input: shapes.SnsVerifySmsSandboxPhoneNumberInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'verifySmsSandboxPhoneNumber',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.VerifySMSSandboxPhoneNumber'),
        parameters: {
          PhoneNumber: input.phoneNumber,
          OneTimePassword: input.oneTimePassword,
        },
      },
    };
    new cr.AwsCustomResource(this, 'VerifySMSSandboxPhoneNumber', props);
  }

}

export class SNSResponsesCheckIfPhoneNumberIsOptedOut {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsCheckIfPhoneNumberIsOptedOutInput) {
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
          phoneNumber: this.__input.phoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckIfPhoneNumberIsOptedOut.isOptedOut', props);
    return resource.getResponseField('isOptedOut') as unknown as boolean;
  }

}

export class SNSResponsesConfirmSubscription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsConfirmSubscriptionInput) {
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
          TopicArn: this.__input.topicArn,
          Token: this.__input.token,
          AuthenticateOnUnsubscribe: this.__input.authenticateOnUnsubscribe,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ConfirmSubscription.SubscriptionArn', props);
    return resource.getResponseField('SubscriptionArn') as unknown as string;
  }

}

export class SNSResponsesCreatePlatformApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsCreatePlatformApplicationInput) {
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
          Name: this.__input.name,
          Platform: this.__input.platform,
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformApplication.PlatformApplicationArn', props);
    return resource.getResponseField('PlatformApplicationArn') as unknown as string;
  }

}

export class SNSResponsesCreatePlatformEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsCreatePlatformEndpointInput) {
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
          PlatformApplicationArn: this.__input.platformApplicationArn,
          Token: this.__input.token,
          CustomUserData: this.__input.customUserData,
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class SNSResponsesCreateTopic {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsCreateTopicInput) {
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
          Name: this.__input.name,
          Attributes: this.__input.attributes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTopic.TopicArn', props);
    return resource.getResponseField('TopicArn') as unknown as string;
  }

}

export class SNSResponsesFetchEndpointAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsGetEndpointAttributesInput) {
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
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEndpointAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class SNSResponsesFetchPlatformApplicationAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsGetPlatformApplicationAttributesInput) {
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
          PlatformApplicationArn: this.__input.platformApplicationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlatformApplicationAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class SNSResponsesFetchSmsAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsGetSmsAttributesInput) {
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
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSMSAttributes.attributes', props);
    return resource.getResponseField('attributes') as unknown as Record<string, string>;
  }

}

export class SNSResponsesFetchSmsSandboxAccountStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get isInSandbox(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSmsSandboxAccountStatus',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.GetSMSSandboxAccountStatus.IsInSandbox'),
        outputPath: 'IsInSandbox',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSMSSandboxAccountStatus.IsInSandbox', props);
    return resource.getResponseField('IsInSandbox') as unknown as boolean;
  }

}

export class SNSResponsesFetchSubscriptionAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsGetSubscriptionAttributesInput) {
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
          SubscriptionArn: this.__input.subscriptionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class SNSResponsesFetchTopicAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsGetTopicAttributesInput) {
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
          TopicArn: this.__input.topicArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class SNSResponsesListEndpointsByPlatformApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsListEndpointsByPlatformApplicationInput) {
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
          PlatformApplicationArn: this.__input.platformApplicationArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpointsByPlatformApplication.Endpoints', props);
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
          PlatformApplicationArn: this.__input.platformApplicationArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpointsByPlatformApplication.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSResponsesListOriginationNumbers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsListOriginationNumbersRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOriginationNumbers',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListOriginationNumbers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOriginationNumbers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get phoneNumbers(): shapes.SnsPhoneNumberInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOriginationNumbers',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListOriginationNumbers.PhoneNumbers'),
        outputPath: 'PhoneNumbers',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOriginationNumbers.PhoneNumbers', props);
    return resource.getResponseField('PhoneNumbers') as unknown as shapes.SnsPhoneNumberInformation[];
  }

}

export class SNSResponsesListPhoneNumbersOptedOut {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsListPhoneNumbersOptedOutInput) {
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPhoneNumbersOptedOut.phoneNumbers', props);
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPhoneNumbersOptedOut.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SNSResponsesListPlatformApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsListPlatformApplicationsInput) {
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlatformApplications.PlatformApplications', props);
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlatformApplications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSResponsesListSmsSandboxPhoneNumbers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsListSmsSandboxPhoneNumbersInput) {
  }

  public get phoneNumbers(): shapes.SnssmsSandboxPhoneNumber[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSmsSandboxPhoneNumbers',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListSMSSandboxPhoneNumbers.PhoneNumbers'),
        outputPath: 'PhoneNumbers',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSMSSandboxPhoneNumbers.PhoneNumbers', props);
    return resource.getResponseField('PhoneNumbers') as unknown as shapes.SnssmsSandboxPhoneNumber[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSmsSandboxPhoneNumbers',
        service: 'SNS',
        physicalResourceId: cr.PhysicalResourceId.of('SNS.ListSMSSandboxPhoneNumbers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSMSSandboxPhoneNumbers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSResponsesListSubscriptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsListSubscriptionsInput) {
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscriptions.Subscriptions', props);
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscriptions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSResponsesListSubscriptionsByTopic {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsListSubscriptionsByTopicInput) {
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
          TopicArn: this.__input.topicArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscriptionsByTopic.Subscriptions', props);
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
          TopicArn: this.__input.topicArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscriptionsByTopic.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.SnsTag[];
  }

}

export class SNSResponsesListTopics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsListTopicsInput) {
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTopics.Topics', props);
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTopics.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SNSResponsesPublish {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsPublishInput) {
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
          TopicArn: this.__input.topicArn,
          TargetArn: this.__input.targetArn,
          PhoneNumber: this.__input.phoneNumber,
          Message: this.__input.message,
          Subject: this.__input.subject,
          MessageStructure: this.__input.messageStructure,
          MessageAttributes: this.__input.messageAttributes,
          MessageDeduplicationId: this.__input.messageDeduplicationId,
          MessageGroupId: this.__input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Publish.MessageId', props);
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
          TopicArn: this.__input.topicArn,
          TargetArn: this.__input.targetArn,
          PhoneNumber: this.__input.phoneNumber,
          Message: this.__input.message,
          Subject: this.__input.subject,
          MessageStructure: this.__input.messageStructure,
          MessageAttributes: this.__input.messageAttributes,
          MessageDeduplicationId: this.__input.messageDeduplicationId,
          MessageGroupId: this.__input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Publish.SequenceNumber', props);
    return resource.getResponseField('SequenceNumber') as unknown as string;
  }

}

export class SNSResponsesSubscribe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnsSubscribeInput) {
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
          TopicArn: this.__input.topicArn,
          Protocol: this.__input.protocol,
          Endpoint: this.__input.endpoint,
          Attributes: this.__input.attributes,
          ReturnSubscriptionArn: this.__input.returnSubscriptionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Subscribe.SubscriptionArn', props);
    return resource.getResponseField('SubscriptionArn') as unknown as string;
  }

}

