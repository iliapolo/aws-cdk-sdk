import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MobileAnalyticsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public putEvents(input: shapes.MobileAnalyticsPutEventsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEvents',
        service: 'MobileAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('MobileAnalytics.PutEvents'),
        parameters: {
          events: input.events,
          clientContext: input.clientContext,
          clientContextEncoding: input.clientContextEncoding,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEvents', props);
  }

}

