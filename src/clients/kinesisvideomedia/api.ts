import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KinesisVideoMediaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchMedia(input: shapes.KinesisVideoMediaGetMediaInput): KinesisVideoMediaResponsesFetchMedia {
    return new KinesisVideoMediaResponsesFetchMedia(this, this.__resources, input);
  }

}

export class KinesisVideoMediaResponsesFetchMedia {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoMediaGetMediaInput) {
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
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
          StartSelector: {
            StartSelectorType: this.__input.startSelector.startSelectorType,
            AfterFragmentNumber: this.__input.startSelector.afterFragmentNumber,
            StartTimestamp: this.__input.startSelector.startTimestamp,
            ContinuationToken: this.__input.startSelector.continuationToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMedia.ContentType', props);
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
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
          StartSelector: {
            StartSelectorType: this.__input.startSelector.startSelectorType,
            AfterFragmentNumber: this.__input.startSelector.afterFragmentNumber,
            StartTimestamp: this.__input.startSelector.startTimestamp,
            ContinuationToken: this.__input.startSelector.continuationToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMedia.Payload', props);
    return resource.getResponseField('Payload') as unknown as any;
  }

}

