import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ConnectContactLensClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public listRealtimeContactAnalysisSegments(input: shapes.ConnectContactLensListRealtimeContactAnalysisSegmentsRequest): ConnectContactLensResponsesListRealtimeContactAnalysisSegments {
    return new ConnectContactLensResponsesListRealtimeContactAnalysisSegments(this, this.__resources, input);
  }

}

export class ConnectContactLensResponsesListRealtimeContactAnalysisSegments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectContactLensListRealtimeContactAnalysisSegmentsRequest) {
  }

  public get segments(): shapes.ConnectContactLensRealtimeContactAnalysisSegment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRealtimeContactAnalysisSegments',
        service: 'ConnectContactLens',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectContactLens.ListRealtimeContactAnalysisSegments.Segments'),
        outputPath: 'Segments',
        parameters: {
          InstanceId: this.__input.instanceId,
          ContactId: this.__input.contactId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRealtimeContactAnalysisSegments.Segments', props);
    return resource.getResponseField('Segments') as unknown as shapes.ConnectContactLensRealtimeContactAnalysisSegment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRealtimeContactAnalysisSegments',
        service: 'ConnectContactLens',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectContactLens.ListRealtimeContactAnalysisSegments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.__input.instanceId,
          ContactId: this.__input.contactId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRealtimeContactAnalysisSegments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

