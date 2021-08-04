import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PersonalizeEventsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public putEvents(input: shapes.PersonalizeEventsPutEventsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEvents',
        service: 'PersonalizeEvents',
        physicalResourceId: cr.PhysicalResourceId.of('PersonalizeEvents.PutEvents'),
        parameters: {
          trackingId: input.trackingId,
          userId: input.userId,
          sessionId: input.sessionId,
          eventList: input.eventList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEvents', props);
  }

  public putItems(input: shapes.PersonalizeEventsPutItemsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItems',
        service: 'PersonalizeEvents',
        physicalResourceId: cr.PhysicalResourceId.of('PersonalizeEvents.PutItems'),
        parameters: {
          datasetArn: input.datasetArn,
          items: input.items,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutItems', props);
  }

  public putUsers(input: shapes.PersonalizeEventsPutUsersRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putUsers',
        service: 'PersonalizeEvents',
        physicalResourceId: cr.PhysicalResourceId.of('PersonalizeEvents.PutUsers'),
        parameters: {
          datasetArn: input.datasetArn,
          users: input.users,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutUsers', props);
  }

}

