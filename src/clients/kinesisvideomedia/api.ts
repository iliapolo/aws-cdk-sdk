import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KinesisVideoMediaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchMedia(input: shapes.KinesisVideoMediaGetMediaInput): KinesisVideoMediaFetchMedia {
    return new KinesisVideoMediaFetchMedia(this, 'FetchMedia', this.__resources, input);
  }

}

export class KinesisVideoMediaFetchMedia extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoMediaGetMediaInput) {
    super(scope, id);
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMedia',
        service: 'KinesisVideoMedia',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideoMedia.GetMedia.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
          StartSelector: {
            StartSelectorType: this.input.startSelector.startSelectorType,
            AfterFragmentNumber: this.input.startSelector.afterFragmentNumber,
            StartTimestamp: this.input.startSelector.startTimestamp,
            ContinuationToken: this.input.startSelector.continuationToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMedia.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get payload(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMedia',
        service: 'KinesisVideoMedia',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideoMedia.GetMedia.Payload'),
        outputPath: 'Payload',
        parameters: {
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
          StartSelector: {
            StartSelectorType: this.input.startSelector.startSelectorType,
            AfterFragmentNumber: this.input.startSelector.afterFragmentNumber,
            StartTimestamp: this.input.startSelector.startTimestamp,
            ContinuationToken: this.input.startSelector.continuationToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMedia.Payload', props);
    return resource.getResponseField('Payload') as unknown as any;
  }

}

