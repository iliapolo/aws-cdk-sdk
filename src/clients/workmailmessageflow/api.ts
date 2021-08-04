import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class WorkMailMessageFlowClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchRawMessageContent(input: shapes.WorkMailMessageFlowGetRawMessageContentRequest): WorkMailMessageFlowResponsesFetchRawMessageContent {
    return new WorkMailMessageFlowResponsesFetchRawMessageContent(this, this.__resources, input);
  }

}

export class WorkMailMessageFlowResponsesFetchRawMessageContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailMessageFlowGetRawMessageContentRequest) {
  }

  public get messageContent(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRawMessageContent',
        service: 'WorkMailMessageFlow',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMailMessageFlow.GetRawMessageContent.messageContent'),
        outputPath: 'messageContent',
        parameters: {
          messageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRawMessageContent.messageContent', props);
    return resource.getResponseField('messageContent') as unknown as any;
  }

}

