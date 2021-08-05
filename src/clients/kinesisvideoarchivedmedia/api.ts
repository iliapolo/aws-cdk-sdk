import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KinesisVideoArchivedMediaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchClip(input: shapes.KinesisVideoArchivedMediaGetClipInput): KinesisVideoArchivedMediaResponsesFetchClip {
    return new KinesisVideoArchivedMediaResponsesFetchClip(this, this.__resources, input);
  }

  public fetchDashStreamingSessionUrl(input: shapes.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput): KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl {
    return new KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl(this, this.__resources, input);
  }

  public fetchHlsStreamingSessionUrl(input: shapes.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput): KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl {
    return new KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl(this, this.__resources, input);
  }

  public fetchMediaForFragmentList(input: shapes.KinesisVideoArchivedMediaGetMediaForFragmentListInput): KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList {
    return new KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList(this, this.__resources, input);
  }

  public listFragments(input: shapes.KinesisVideoArchivedMediaListFragmentsInput): KinesisVideoArchivedMediaResponsesListFragments {
    return new KinesisVideoArchivedMediaResponsesListFragments(this, this.__resources, input);
  }

}

export class KinesisVideoArchivedMediaResponsesFetchClip {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoArchivedMediaGetClipInput) {
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
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
          ClipFragmentSelector: {
            FragmentSelectorType: this.__input.clipFragmentSelector.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.__input.clipFragmentSelector.timestampRange.startTimestamp,
              EndTimestamp: this.__input.clipFragmentSelector.timestampRange.endTimestamp,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClip.ContentType', props);
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
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
          ClipFragmentSelector: {
            FragmentSelectorType: this.__input.clipFragmentSelector.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.__input.clipFragmentSelector.timestampRange.startTimestamp,
              EndTimestamp: this.__input.clipFragmentSelector.timestampRange.endTimestamp,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClip.Payload', props);
    return resource.getResponseField('Payload') as unknown as any;
  }

}

export class KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput) {
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
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
          PlaybackMode: this.__input.playbackMode,
          DisplayFragmentTimestamp: this.__input.displayFragmentTimestamp,
          DisplayFragmentNumber: this.__input.displayFragmentNumber,
          DASHFragmentSelector: {
            FragmentSelectorType: this.__input.dashFragmentSelector?.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.__input.dashFragmentSelector?.timestampRange?.startTimestamp,
              EndTimestamp: this.__input.dashFragmentSelector?.timestampRange?.endTimestamp,
            },
          },
          Expires: this.__input.expires,
          MaxManifestFragmentResults: this.__input.maxManifestFragmentResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDASHStreamingSessionURL.DASHStreamingSessionURL', props);
    return resource.getResponseField('DASHStreamingSessionURL') as unknown as string;
  }

}

export class KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput) {
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
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
          PlaybackMode: this.__input.playbackMode,
          HLSFragmentSelector: {
            FragmentSelectorType: this.__input.hlsFragmentSelector?.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.__input.hlsFragmentSelector?.timestampRange?.startTimestamp,
              EndTimestamp: this.__input.hlsFragmentSelector?.timestampRange?.endTimestamp,
            },
          },
          ContainerFormat: this.__input.containerFormat,
          DiscontinuityMode: this.__input.discontinuityMode,
          DisplayFragmentTimestamp: this.__input.displayFragmentTimestamp,
          Expires: this.__input.expires,
          MaxMediaPlaylistFragmentResults: this.__input.maxMediaPlaylistFragmentResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHLSStreamingSessionURL.HLSStreamingSessionURL', props);
    return resource.getResponseField('HLSStreamingSessionURL') as unknown as string;
  }

}

export class KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoArchivedMediaGetMediaForFragmentListInput) {
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
          StreamName: this.__input.streamName,
          Fragments: this.__input.fragments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMediaForFragmentList.ContentType', props);
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
          StreamName: this.__input.streamName,
          Fragments: this.__input.fragments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMediaForFragmentList.Payload', props);
    return resource.getResponseField('Payload') as unknown as any;
  }

}

export class KinesisVideoArchivedMediaResponsesListFragments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoArchivedMediaListFragmentsInput) {
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
          StreamName: this.__input.streamName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          FragmentSelector: {
            FragmentSelectorType: this.__input.fragmentSelector?.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.__input.fragmentSelector?.timestampRange.startTimestamp,
              EndTimestamp: this.__input.fragmentSelector?.timestampRange.endTimestamp,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFragments.Fragments', props);
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
          StreamName: this.__input.streamName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          FragmentSelector: {
            FragmentSelectorType: this.__input.fragmentSelector?.fragmentSelectorType,
            TimestampRange: {
              StartTimestamp: this.__input.fragmentSelector?.timestampRange.startTimestamp,
              EndTimestamp: this.__input.fragmentSelector?.timestampRange.endTimestamp,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFragments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

