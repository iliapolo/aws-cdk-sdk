import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KinesisVideoArchivedMediaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchClip(input: shapes.KinesisVideoArchivedMediaGetClipInput): KinesisVideoArchivedMediaFetchClip {
    return new KinesisVideoArchivedMediaFetchClip(this, 'FetchClip', this.__resources, input);
  }

  public fetchDashStreamingSessionUrl(input: shapes.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput): KinesisVideoArchivedMediaFetchDashStreamingSessionUrl {
    return new KinesisVideoArchivedMediaFetchDashStreamingSessionUrl(this, 'FetchDashStreamingSessionUrl', this.__resources, input);
  }

  public fetchHlsStreamingSessionUrl(input: shapes.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput): KinesisVideoArchivedMediaFetchHlsStreamingSessionUrl {
    return new KinesisVideoArchivedMediaFetchHlsStreamingSessionUrl(this, 'FetchHlsStreamingSessionUrl', this.__resources, input);
  }

  public fetchMediaForFragmentList(input: shapes.KinesisVideoArchivedMediaGetMediaForFragmentListInput): KinesisVideoArchivedMediaFetchMediaForFragmentList {
    return new KinesisVideoArchivedMediaFetchMediaForFragmentList(this, 'FetchMediaForFragmentList', this.__resources, input);
  }

  public listFragments(input: shapes.KinesisVideoArchivedMediaListFragmentsInput): KinesisVideoArchivedMediaListFragments {
    return new KinesisVideoArchivedMediaListFragments(this, 'ListFragments', this.__resources, input);
  }

}

export class KinesisVideoArchivedMediaFetchClip extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoArchivedMediaGetClipInput) {
    super(scope, id);
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClip',
        service: 'KinesisVideoArchivedMedia',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideoArchivedMedia.GetClip.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
          ClipFragmentSelector: {
            FragmentSelectorType: this.input.clipFragmentSelector.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.input.clipFragmentSelector.timestampRange.startTimestamp,
              EndTimestamp: this.input.clipFragmentSelector.timestampRange.endTimestamp,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClip.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get payload(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClip',
        service: 'KinesisVideoArchivedMedia',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideoArchivedMedia.GetClip.Payload'),
        outputPath: 'Payload',
        parameters: {
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
          ClipFragmentSelector: {
            FragmentSelectorType: this.input.clipFragmentSelector.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.input.clipFragmentSelector.timestampRange.startTimestamp,
              EndTimestamp: this.input.clipFragmentSelector.timestampRange.endTimestamp,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClip.Payload', props);
    return resource.getResponseField('Payload') as unknown as any;
  }

}

export class KinesisVideoArchivedMediaFetchDashStreamingSessionUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput) {
    super(scope, id);
  }

  public get dashStreamingSessionUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDashStreamingSessionUrl',
        service: 'KinesisVideoArchivedMedia',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideoArchivedMedia.GetDASHStreamingSessionURL.DASHStreamingSessionURL'),
        outputPath: 'DASHStreamingSessionURL',
        parameters: {
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
          PlaybackMode: this.input.playbackMode,
          DisplayFragmentTimestamp: this.input.displayFragmentTimestamp,
          DisplayFragmentNumber: this.input.displayFragmentNumber,
          DASHFragmentSelector: {
            FragmentSelectorType: this.input.dashFragmentSelector?.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.input.dashFragmentSelector?.timestampRange?.startTimestamp,
              EndTimestamp: this.input.dashFragmentSelector?.timestampRange?.endTimestamp,
            },
          },
          Expires: this.input.expires,
          MaxManifestFragmentResults: this.input.maxManifestFragmentResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDASHStreamingSessionURL.DASHStreamingSessionURL', props);
    return resource.getResponseField('DASHStreamingSessionURL') as unknown as string;
  }

}

export class KinesisVideoArchivedMediaFetchHlsStreamingSessionUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput) {
    super(scope, id);
  }

  public get hlsStreamingSessionUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHlsStreamingSessionUrl',
        service: 'KinesisVideoArchivedMedia',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideoArchivedMedia.GetHLSStreamingSessionURL.HLSStreamingSessionURL'),
        outputPath: 'HLSStreamingSessionURL',
        parameters: {
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
          PlaybackMode: this.input.playbackMode,
          HLSFragmentSelector: {
            FragmentSelectorType: this.input.hlsFragmentSelector?.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.input.hlsFragmentSelector?.timestampRange?.startTimestamp,
              EndTimestamp: this.input.hlsFragmentSelector?.timestampRange?.endTimestamp,
            },
          },
          ContainerFormat: this.input.containerFormat,
          DiscontinuityMode: this.input.discontinuityMode,
          DisplayFragmentTimestamp: this.input.displayFragmentTimestamp,
          Expires: this.input.expires,
          MaxMediaPlaylistFragmentResults: this.input.maxMediaPlaylistFragmentResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHLSStreamingSessionURL.HLSStreamingSessionURL', props);
    return resource.getResponseField('HLSStreamingSessionURL') as unknown as string;
  }

}

export class KinesisVideoArchivedMediaFetchMediaForFragmentList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoArchivedMediaGetMediaForFragmentListInput) {
    super(scope, id);
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMediaForFragmentList',
        service: 'KinesisVideoArchivedMedia',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideoArchivedMedia.GetMediaForFragmentList.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          StreamName: this.input.streamName,
          Fragments: this.input.fragments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMediaForFragmentList.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get payload(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMediaForFragmentList',
        service: 'KinesisVideoArchivedMedia',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideoArchivedMedia.GetMediaForFragmentList.Payload'),
        outputPath: 'Payload',
        parameters: {
          StreamName: this.input.streamName,
          Fragments: this.input.fragments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMediaForFragmentList.Payload', props);
    return resource.getResponseField('Payload') as unknown as any;
  }

}

export class KinesisVideoArchivedMediaListFragments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoArchivedMediaListFragmentsInput) {
    super(scope, id);
  }

  public get fragments(): shapes.KinesisVideoArchivedMediaFragment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFragments',
        service: 'KinesisVideoArchivedMedia',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideoArchivedMedia.ListFragments.Fragments'),
        outputPath: 'Fragments',
        parameters: {
          StreamName: this.input.streamName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          FragmentSelector: {
            FragmentSelectorType: this.input.fragmentSelector?.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.input.fragmentSelector?.timestampRange.startTimestamp,
              EndTimestamp: this.input.fragmentSelector?.timestampRange.endTimestamp,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFragments.Fragments', props);
    return resource.getResponseField('Fragments') as unknown as shapes.KinesisVideoArchivedMediaFragment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFragments',
        service: 'KinesisVideoArchivedMedia',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideoArchivedMedia.ListFragments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StreamName: this.input.streamName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          FragmentSelector: {
            FragmentSelectorType: this.input.fragmentSelector?.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.input.fragmentSelector?.timestampRange.startTimestamp,
              EndTimestamp: this.input.fragmentSelector?.timestampRange.endTimestamp,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFragments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

