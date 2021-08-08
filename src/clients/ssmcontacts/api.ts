import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SsmContactsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptPage(input: shapes.SsmContactsAcceptPageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptPage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.AcceptPage'),
        parameters: {
          PageId: input.pageId,
          ContactChannelId: input.contactChannelId,
          AcceptType: input.acceptType,
          Note: input.note,
          AcceptCode: input.acceptCode,
          AcceptCodeValidation: input.acceptCodeValidation,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptPage', props);
  }

  public activateContactChannel(input: shapes.SsmContactsActivateContactChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ActivateContactChannel'),
        parameters: {
          ContactChannelId: input.contactChannelId,
          ActivationCode: input.activationCode,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ActivateContactChannel', props);
  }

  public createContact(input: shapes.SsmContactsCreateContactRequest): SSMContactsResponsesCreateContact {
    return new SSMContactsResponsesCreateContact(this, this.__resources, input);
  }

  public createContactChannel(input: shapes.SsmContactsCreateContactChannelRequest): SSMContactsResponsesCreateContactChannel {
    return new SSMContactsResponsesCreateContactChannel(this, this.__resources, input);
  }

  public deactivateContactChannel(input: shapes.SsmContactsDeactivateContactChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deactivateContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DeactivateContactChannel'),
        parameters: {
          ContactChannelId: input.contactChannelId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeactivateContactChannel', props);
  }

  public deleteContact(input: shapes.SsmContactsDeleteContactRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContact',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DeleteContact'),
        parameters: {
          ContactId: input.contactId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteContact', props);
  }

  public deleteContactChannel(input: shapes.SsmContactsDeleteContactChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DeleteContactChannel'),
        parameters: {
          ContactChannelId: input.contactChannelId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteContactChannel', props);
  }

  public describeEngagement(input: shapes.SsmContactsDescribeEngagementRequest): SSMContactsResponsesDescribeEngagement {
    return new SSMContactsResponsesDescribeEngagement(this, this.__resources, input);
  }

  public describePage(input: shapes.SsmContactsDescribePageRequest): SSMContactsResponsesDescribePage {
    return new SSMContactsResponsesDescribePage(this, this.__resources, input);
  }

  public fetchContact(input: shapes.SsmContactsGetContactRequest): SSMContactsResponsesFetchContact {
    return new SSMContactsResponsesFetchContact(this, this.__resources, input);
  }

  public fetchContactChannel(input: shapes.SsmContactsGetContactChannelRequest): SSMContactsResponsesFetchContactChannel {
    return new SSMContactsResponsesFetchContactChannel(this, this.__resources, input);
  }

  public fetchContactPolicy(input: shapes.SsmContactsGetContactPolicyRequest): SSMContactsResponsesFetchContactPolicy {
    return new SSMContactsResponsesFetchContactPolicy(this, this.__resources, input);
  }

  public listContactChannels(input: shapes.SsmContactsListContactChannelsRequest): SSMContactsResponsesListContactChannels {
    return new SSMContactsResponsesListContactChannels(this, this.__resources, input);
  }

  public listContacts(input: shapes.SsmContactsListContactsRequest): SSMContactsResponsesListContacts {
    return new SSMContactsResponsesListContacts(this, this.__resources, input);
  }

  public listEngagements(input: shapes.SsmContactsListEngagementsRequest): SSMContactsResponsesListEngagements {
    return new SSMContactsResponsesListEngagements(this, this.__resources, input);
  }

  public listPageReceipts(input: shapes.SsmContactsListPageReceiptsRequest): SSMContactsResponsesListPageReceipts {
    return new SSMContactsResponsesListPageReceipts(this, this.__resources, input);
  }

  public listPagesByContact(input: shapes.SsmContactsListPagesByContactRequest): SSMContactsResponsesListPagesByContact {
    return new SSMContactsResponsesListPagesByContact(this, this.__resources, input);
  }

  public listPagesByEngagement(input: shapes.SsmContactsListPagesByEngagementRequest): SSMContactsResponsesListPagesByEngagement {
    return new SSMContactsResponsesListPagesByEngagement(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SsmContactsListTagsForResourceRequest): SSMContactsResponsesListTagsForResource {
    return new SSMContactsResponsesListTagsForResource(this, this.__resources, input);
  }

  public putContactPolicy(input: shapes.SsmContactsPutContactPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putContactPolicy',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.PutContactPolicy'),
        parameters: {
          ContactArn: input.contactArn,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutContactPolicy', props);
  }

  public sendActivationCode(input: shapes.SsmContactsSendActivationCodeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendActivationCode',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.SendActivationCode'),
        parameters: {
          ContactChannelId: input.contactChannelId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SendActivationCode', props);
  }

  public startEngagement(input: shapes.SsmContactsStartEngagementRequest): SSMContactsResponsesStartEngagement {
    return new SSMContactsResponsesStartEngagement(this, this.__resources, input);
  }

  public stopEngagement(input: shapes.SsmContactsStopEngagementRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.StopEngagement'),
        parameters: {
          EngagementId: input.engagementId,
          Reason: input.reason,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopEngagement', props);
  }

  public tagResource(input: shapes.SsmContactsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.SsmContactsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateContact(input: shapes.SsmContactsUpdateContactRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContact',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.UpdateContact'),
        parameters: {
          ContactId: input.contactId,
          DisplayName: input.displayName,
          Plan: {
            Stages: input.plan?.stages,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateContact', props);
  }

  public updateContactChannel(input: shapes.SsmContactsUpdateContactChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.UpdateContactChannel'),
        parameters: {
          ContactChannelId: input.contactChannelId,
          Name: input.name,
          DeliveryAddress: {
            SimpleAddress: input.deliveryAddress?.simpleAddress,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateContactChannel', props);
  }

}

export class SSMContactsResponsesCreateContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsCreateContactRequest) {
  }

  public get contactArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContact',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.CreateContact.ContactArn'),
        outputPath: 'ContactArn',
        parameters: {
          Alias: this.__input.alias,
          DisplayName: this.__input.displayName,
          Type: this.__input.type,
          Plan: {
            Stages: this.__input.plan.stages,
          },
          Tags: this.__input.tags,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContact.ContactArn', props);
    return resource.getResponseField('ContactArn') as unknown as string;
  }

}

export class SSMContactsResponsesCreateContactChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsCreateContactChannelRequest) {
  }

  public get contactChannelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.CreateContactChannel.ContactChannelArn'),
        outputPath: 'ContactChannelArn',
        parameters: {
          ContactId: this.__input.contactId,
          Name: this.__input.name,
          Type: this.__input.type,
          DeliveryAddress: {
            SimpleAddress: this.__input.deliveryAddress.simpleAddress,
          },
          DeferActivation: this.__input.deferActivation,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContactChannel.ContactChannelArn', props);
    return resource.getResponseField('ContactChannelArn') as unknown as string;
  }

}

export class SSMContactsResponsesDescribeEngagement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsDescribeEngagementRequest) {
  }

  public get contactArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribeEngagement.ContactArn'),
        outputPath: 'ContactArn',
        parameters: {
          EngagementId: this.__input.engagementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngagement.ContactArn', props);
    return resource.getResponseField('ContactArn') as unknown as string;
  }

  public get engagementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribeEngagement.EngagementArn'),
        outputPath: 'EngagementArn',
        parameters: {
          EngagementId: this.__input.engagementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngagement.EngagementArn', props);
    return resource.getResponseField('EngagementArn') as unknown as string;
  }

  public get sender(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribeEngagement.Sender'),
        outputPath: 'Sender',
        parameters: {
          EngagementId: this.__input.engagementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngagement.Sender', props);
    return resource.getResponseField('Sender') as unknown as string;
  }

  public get subject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribeEngagement.Subject'),
        outputPath: 'Subject',
        parameters: {
          EngagementId: this.__input.engagementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngagement.Subject', props);
    return resource.getResponseField('Subject') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribeEngagement.Content'),
        outputPath: 'Content',
        parameters: {
          EngagementId: this.__input.engagementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngagement.Content', props);
    return resource.getResponseField('Content') as unknown as string;
  }

  public get publicSubject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribeEngagement.PublicSubject'),
        outputPath: 'PublicSubject',
        parameters: {
          EngagementId: this.__input.engagementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngagement.PublicSubject', props);
    return resource.getResponseField('PublicSubject') as unknown as string;
  }

  public get publicContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribeEngagement.PublicContent'),
        outputPath: 'PublicContent',
        parameters: {
          EngagementId: this.__input.engagementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngagement.PublicContent', props);
    return resource.getResponseField('PublicContent') as unknown as string;
  }

  public get incidentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribeEngagement.IncidentId'),
        outputPath: 'IncidentId',
        parameters: {
          EngagementId: this.__input.engagementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngagement.IncidentId', props);
    return resource.getResponseField('IncidentId') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribeEngagement.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          EngagementId: this.__input.engagementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngagement.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get stopTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribeEngagement.StopTime'),
        outputPath: 'StopTime',
        parameters: {
          EngagementId: this.__input.engagementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngagement.StopTime', props);
    return resource.getResponseField('StopTime') as unknown as string;
  }

}

export class SSMContactsResponsesDescribePage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsDescribePageRequest) {
  }

  public get pageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.PageArn'),
        outputPath: 'PageArn',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.PageArn', props);
    return resource.getResponseField('PageArn') as unknown as string;
  }

  public get engagementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.EngagementArn'),
        outputPath: 'EngagementArn',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.EngagementArn', props);
    return resource.getResponseField('EngagementArn') as unknown as string;
  }

  public get contactArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.ContactArn'),
        outputPath: 'ContactArn',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.ContactArn', props);
    return resource.getResponseField('ContactArn') as unknown as string;
  }

  public get sender(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.Sender'),
        outputPath: 'Sender',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.Sender', props);
    return resource.getResponseField('Sender') as unknown as string;
  }

  public get subject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.Subject'),
        outputPath: 'Subject',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.Subject', props);
    return resource.getResponseField('Subject') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.Content'),
        outputPath: 'Content',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.Content', props);
    return resource.getResponseField('Content') as unknown as string;
  }

  public get publicSubject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.PublicSubject'),
        outputPath: 'PublicSubject',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.PublicSubject', props);
    return resource.getResponseField('PublicSubject') as unknown as string;
  }

  public get publicContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.PublicContent'),
        outputPath: 'PublicContent',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.PublicContent', props);
    return resource.getResponseField('PublicContent') as unknown as string;
  }

  public get incidentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.IncidentId'),
        outputPath: 'IncidentId',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.IncidentId', props);
    return resource.getResponseField('IncidentId') as unknown as string;
  }

  public get sentTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.SentTime'),
        outputPath: 'SentTime',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.SentTime', props);
    return resource.getResponseField('SentTime') as unknown as string;
  }

  public get readTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.ReadTime'),
        outputPath: 'ReadTime',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.ReadTime', props);
    return resource.getResponseField('ReadTime') as unknown as string;
  }

  public get deliveryTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePage',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.DescribePage.DeliveryTime'),
        outputPath: 'DeliveryTime',
        parameters: {
          PageId: this.__input.pageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePage.DeliveryTime', props);
    return resource.getResponseField('DeliveryTime') as unknown as string;
  }

}

export class SSMContactsResponsesFetchContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsGetContactRequest) {
  }

  public get contactArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContact.ContactArn'),
        outputPath: 'ContactArn',
        parameters: {
          ContactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.ContactArn', props);
    return resource.getResponseField('ContactArn') as unknown as string;
  }

  public get alias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContact.Alias'),
        outputPath: 'Alias',
        parameters: {
          ContactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.Alias', props);
    return resource.getResponseField('Alias') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContact.DisplayName'),
        outputPath: 'DisplayName',
        parameters: {
          ContactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContact.Type'),
        outputPath: 'Type',
        parameters: {
          ContactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get plan(): SSMContactsResponsesFetchContactPlan {
    return new SSMContactsResponsesFetchContactPlan(this.__scope, this.__resources, this.__input);
  }

}

export class SSMContactsResponsesFetchContactPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsGetContactRequest) {
  }

  public get stages(): shapes.SsmContactsStage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContact.Plan.Stages'),
        outputPath: 'Plan.Stages',
        parameters: {
          ContactId: this.__input.contactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.Plan.Stages', props);
    return resource.getResponseField('Plan.Stages') as unknown as shapes.SsmContactsStage[];
  }

}

export class SSMContactsResponsesFetchContactChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsGetContactChannelRequest) {
  }

  public get contactArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContactChannel.ContactArn'),
        outputPath: 'ContactArn',
        parameters: {
          ContactChannelId: this.__input.contactChannelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactChannel.ContactArn', props);
    return resource.getResponseField('ContactArn') as unknown as string;
  }

  public get contactChannelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContactChannel.ContactChannelArn'),
        outputPath: 'ContactChannelArn',
        parameters: {
          ContactChannelId: this.__input.contactChannelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactChannel.ContactChannelArn', props);
    return resource.getResponseField('ContactChannelArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContactChannel.Name'),
        outputPath: 'Name',
        parameters: {
          ContactChannelId: this.__input.contactChannelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactChannel.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContactChannel.Type'),
        outputPath: 'Type',
        parameters: {
          ContactChannelId: this.__input.contactChannelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactChannel.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get deliveryAddress(): SSMContactsResponsesFetchContactChannelDeliveryAddress {
    return new SSMContactsResponsesFetchContactChannelDeliveryAddress(this.__scope, this.__resources, this.__input);
  }

  public get activationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContactChannel.ActivationStatus'),
        outputPath: 'ActivationStatus',
        parameters: {
          ContactChannelId: this.__input.contactChannelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactChannel.ActivationStatus', props);
    return resource.getResponseField('ActivationStatus') as unknown as string;
  }

}

export class SSMContactsResponsesFetchContactChannelDeliveryAddress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsGetContactChannelRequest) {
  }

  public get simpleAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactChannel',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContactChannel.DeliveryAddress.SimpleAddress'),
        outputPath: 'DeliveryAddress.SimpleAddress',
        parameters: {
          ContactChannelId: this.__input.contactChannelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactChannel.DeliveryAddress.SimpleAddress', props);
    return resource.getResponseField('DeliveryAddress.SimpleAddress') as unknown as string;
  }

}

export class SSMContactsResponsesFetchContactPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsGetContactPolicyRequest) {
  }

  public get contactArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactPolicy',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContactPolicy.ContactArn'),
        outputPath: 'ContactArn',
        parameters: {
          ContactArn: this.__input.contactArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactPolicy.ContactArn', props);
    return resource.getResponseField('ContactArn') as unknown as string;
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactPolicy',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.GetContactPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          ContactArn: this.__input.contactArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class SSMContactsResponsesListContactChannels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsListContactChannelsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContactChannels',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListContactChannels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ContactId: this.__input.contactId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContactChannels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get contactChannels(): shapes.SsmContactsContactChannel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContactChannels',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListContactChannels.ContactChannels'),
        outputPath: 'ContactChannels',
        parameters: {
          ContactId: this.__input.contactId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContactChannels.ContactChannels', props);
    return resource.getResponseField('ContactChannels') as unknown as shapes.SsmContactsContactChannel[];
  }

}

export class SSMContactsResponsesListContacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsListContactsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContacts',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListContacts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          AliasPrefix: this.__input.aliasPrefix,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContacts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get contacts(): shapes.SsmContactsContact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContacts',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListContacts.Contacts'),
        outputPath: 'Contacts',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          AliasPrefix: this.__input.aliasPrefix,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContacts.Contacts', props);
    return resource.getResponseField('Contacts') as unknown as shapes.SsmContactsContact[];
  }

}

export class SSMContactsResponsesListEngagements {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsListEngagementsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEngagements',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListEngagements.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          IncidentId: this.__input.incidentId,
          TimeRangeValue: {
            StartTime: this.__input.timeRangeValue?.startTime,
            EndTime: this.__input.timeRangeValue?.endTime,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEngagements.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get engagements(): shapes.SsmContactsEngagement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEngagements',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListEngagements.Engagements'),
        outputPath: 'Engagements',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          IncidentId: this.__input.incidentId,
          TimeRangeValue: {
            StartTime: this.__input.timeRangeValue?.startTime,
            EndTime: this.__input.timeRangeValue?.endTime,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEngagements.Engagements', props);
    return resource.getResponseField('Engagements') as unknown as shapes.SsmContactsEngagement[];
  }

}

export class SSMContactsResponsesListPageReceipts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsListPageReceiptsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPageReceipts',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListPageReceipts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          PageId: this.__input.pageId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPageReceipts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get receipts(): shapes.SsmContactsReceipt[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPageReceipts',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListPageReceipts.Receipts'),
        outputPath: 'Receipts',
        parameters: {
          PageId: this.__input.pageId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPageReceipts.Receipts', props);
    return resource.getResponseField('Receipts') as unknown as shapes.SsmContactsReceipt[];
  }

}

export class SSMContactsResponsesListPagesByContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsListPagesByContactRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPagesByContact',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListPagesByContact.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ContactId: this.__input.contactId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPagesByContact.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get pages(): shapes.SsmContactsPage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPagesByContact',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListPagesByContact.Pages'),
        outputPath: 'Pages',
        parameters: {
          ContactId: this.__input.contactId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPagesByContact.Pages', props);
    return resource.getResponseField('Pages') as unknown as shapes.SsmContactsPage[];
  }

}

export class SSMContactsResponsesListPagesByEngagement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsListPagesByEngagementRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPagesByEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListPagesByEngagement.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          EngagementId: this.__input.engagementId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPagesByEngagement.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get pages(): shapes.SsmContactsPage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPagesByEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListPagesByEngagement.Pages'),
        outputPath: 'Pages',
        parameters: {
          EngagementId: this.__input.engagementId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPagesByEngagement.Pages', props);
    return resource.getResponseField('Pages') as unknown as shapes.SsmContactsPage[];
  }

}

export class SSMContactsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsListTagsForResourceRequest) {
  }

  public get tags(): shapes.SsmContactsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.SsmContactsTag[];
  }

}

export class SSMContactsResponsesStartEngagement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmContactsStartEngagementRequest) {
  }

  public get engagementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startEngagement',
        service: 'SSMContacts',
        physicalResourceId: cr.PhysicalResourceId.of('SSMContacts.StartEngagement.EngagementArn'),
        outputPath: 'EngagementArn',
        parameters: {
          ContactId: this.__input.contactId,
          Sender: this.__input.sender,
          Subject: this.__input.subject,
          Content: this.__input.content,
          PublicSubject: this.__input.publicSubject,
          PublicContent: this.__input.publicContent,
          IncidentId: this.__input.incidentId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartEngagement.EngagementArn', props);
    return resource.getResponseField('EngagementArn') as unknown as string;
  }

}

