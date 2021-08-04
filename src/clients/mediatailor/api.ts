import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MediaTailorClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public deletePlaybackConfiguration(input: shapes.MediaTailorDeletePlaybackConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DeletePlaybackConfiguration'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePlaybackConfiguration', props);
  }

  public fetchPlaybackConfiguration(input: shapes.MediaTailorGetPlaybackConfigurationRequest): MediaTailorResponsesFetchPlaybackConfiguration {
    return new MediaTailorResponsesFetchPlaybackConfiguration(this, this.__resources, input);
  }

  public listPlaybackConfigurations(input: shapes.MediaTailorListPlaybackConfigurationsRequest): MediaTailorResponsesListPlaybackConfigurations {
    return new MediaTailorResponsesListPlaybackConfigurations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.MediaTailorListTagsForResourceRequest): MediaTailorResponsesListTagsForResource {
    return new MediaTailorResponsesListTagsForResource(this, this.__resources, input);
  }

  public putPlaybackConfiguration(input: shapes.MediaTailorPutPlaybackConfigurationRequest): MediaTailorResponsesPutPlaybackConfiguration {
    return new MediaTailorResponsesPutPlaybackConfiguration(this, this.__resources, input);
  }

  public tagResource(input: shapes.MediaTailorTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.MediaTailorUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class MediaTailorResponsesFetchPlaybackConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
  }

  public get adDecisionServerUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.AdDecisionServerUrl'),
        outputPath: 'AdDecisionServerUrl',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.AdDecisionServerUrl', props);
    return resource.getResponseField('AdDecisionServerUrl') as unknown as string;
  }

  public get availSuppression(): MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression {
    return new MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression(this.__scope, this.__resources, this.__input);
  }

  public get bumper(): MediaTailorResponsesFetchPlaybackConfigurationBumper {
    return new MediaTailorResponsesFetchPlaybackConfigurationBumper(this.__scope, this.__resources, this.__input);
  }

  public get cdnConfiguration(): MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration {
    return new MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get dashConfiguration(): MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration {
    return new MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get hlsConfiguration(): MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration {
    return new MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get livePreRollConfiguration(): MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration {
    return new MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get manifestProcessingRules(): MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules {
    return new MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get personalizationThresholdSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.PersonalizationThresholdSeconds'),
        outputPath: 'PersonalizationThresholdSeconds',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.PersonalizationThresholdSeconds', props);
    return resource.getResponseField('PersonalizationThresholdSeconds') as unknown as number;
  }

  public get playbackConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.PlaybackConfigurationArn'),
        outputPath: 'PlaybackConfigurationArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.PlaybackConfigurationArn', props);
    return resource.getResponseField('PlaybackConfigurationArn') as unknown as string;
  }

  public get playbackEndpointPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.PlaybackEndpointPrefix'),
        outputPath: 'PlaybackEndpointPrefix',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.PlaybackEndpointPrefix', props);
    return resource.getResponseField('PlaybackEndpointPrefix') as unknown as string;
  }

  public get sessionInitializationEndpointPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.SessionInitializationEndpointPrefix'),
        outputPath: 'SessionInitializationEndpointPrefix',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.SessionInitializationEndpointPrefix', props);
    return resource.getResponseField('SessionInitializationEndpointPrefix') as unknown as string;
  }

  public get slateAdUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.SlateAdUrl'),
        outputPath: 'SlateAdUrl',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.SlateAdUrl', props);
    return resource.getResponseField('SlateAdUrl') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get transcodeProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.TranscodeProfileName'),
        outputPath: 'TranscodeProfileName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.TranscodeProfileName', props);
    return resource.getResponseField('TranscodeProfileName') as unknown as string;
  }

  public get videoContentSourceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.VideoContentSourceUrl'),
        outputPath: 'VideoContentSourceUrl',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.VideoContentSourceUrl', props);
    return resource.getResponseField('VideoContentSourceUrl') as unknown as string;
  }

}

export class MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.AvailSuppression.Mode'),
        outputPath: 'AvailSuppression.Mode',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.AvailSuppression.Mode', props);
    return resource.getResponseField('AvailSuppression.Mode') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.AvailSuppression.Value'),
        outputPath: 'AvailSuppression.Value',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.AvailSuppression.Value', props);
    return resource.getResponseField('AvailSuppression.Value') as unknown as string;
  }

}

export class MediaTailorResponsesFetchPlaybackConfigurationBumper {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
  }

  public get endUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.Bumper.EndUrl'),
        outputPath: 'Bumper.EndUrl',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.Bumper.EndUrl', props);
    return resource.getResponseField('Bumper.EndUrl') as unknown as string;
  }

  public get startUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.Bumper.StartUrl'),
        outputPath: 'Bumper.StartUrl',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.Bumper.StartUrl', props);
    return resource.getResponseField('Bumper.StartUrl') as unknown as string;
  }

}

export class MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
  }

  public get adSegmentUrlPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.CdnConfiguration.AdSegmentUrlPrefix'),
        outputPath: 'CdnConfiguration.AdSegmentUrlPrefix',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.CdnConfiguration.AdSegmentUrlPrefix', props);
    return resource.getResponseField('CdnConfiguration.AdSegmentUrlPrefix') as unknown as string;
  }

  public get contentSegmentUrlPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.CdnConfiguration.ContentSegmentUrlPrefix'),
        outputPath: 'CdnConfiguration.ContentSegmentUrlPrefix',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.CdnConfiguration.ContentSegmentUrlPrefix', props);
    return resource.getResponseField('CdnConfiguration.ContentSegmentUrlPrefix') as unknown as string;
  }

}

export class MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
  }

  public get manifestEndpointPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.DashConfiguration.ManifestEndpointPrefix'),
        outputPath: 'DashConfiguration.ManifestEndpointPrefix',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.DashConfiguration.ManifestEndpointPrefix', props);
    return resource.getResponseField('DashConfiguration.ManifestEndpointPrefix') as unknown as string;
  }

  public get mpdLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.DashConfiguration.MpdLocation'),
        outputPath: 'DashConfiguration.MpdLocation',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.DashConfiguration.MpdLocation', props);
    return resource.getResponseField('DashConfiguration.MpdLocation') as unknown as string;
  }

  public get originManifestType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.DashConfiguration.OriginManifestType'),
        outputPath: 'DashConfiguration.OriginManifestType',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.DashConfiguration.OriginManifestType', props);
    return resource.getResponseField('DashConfiguration.OriginManifestType') as unknown as string;
  }

}

export class MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
  }

  public get manifestEndpointPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.HlsConfiguration.ManifestEndpointPrefix'),
        outputPath: 'HlsConfiguration.ManifestEndpointPrefix',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.HlsConfiguration.ManifestEndpointPrefix', props);
    return resource.getResponseField('HlsConfiguration.ManifestEndpointPrefix') as unknown as string;
  }

}

export class MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
  }

  public get adDecisionServerUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.LivePreRollConfiguration.AdDecisionServerUrl'),
        outputPath: 'LivePreRollConfiguration.AdDecisionServerUrl',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.LivePreRollConfiguration.AdDecisionServerUrl', props);
    return resource.getResponseField('LivePreRollConfiguration.AdDecisionServerUrl') as unknown as string;
  }

  public get maxDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.LivePreRollConfiguration.MaxDurationSeconds'),
        outputPath: 'LivePreRollConfiguration.MaxDurationSeconds',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.LivePreRollConfiguration.MaxDurationSeconds', props);
    return resource.getResponseField('LivePreRollConfiguration.MaxDurationSeconds') as unknown as number;
  }

}

export class MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
  }

  public get adMarkerPassthrough(): MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough {
    return new MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough(this.__scope, this.__resources, this.__input);
  }

}

export class MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.ManifestProcessingRules.AdMarkerPassthrough.Enabled'),
        outputPath: 'ManifestProcessingRules.AdMarkerPassthrough.Enabled',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.ManifestProcessingRules.AdMarkerPassthrough.Enabled', props);
    return resource.getResponseField('ManifestProcessingRules.AdMarkerPassthrough.Enabled') as unknown as boolean;
  }

}

export class MediaTailorResponsesListPlaybackConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorListPlaybackConfigurationsRequest) {
  }

  public get items(): shapes.MediaTailorPlaybackConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlaybackConfigurations',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListPlaybackConfigurations.Items'),
        outputPath: 'Items',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlaybackConfigurations.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.MediaTailorPlaybackConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlaybackConfigurations',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListPlaybackConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlaybackConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaTailorResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaTailorResponsesPutPlaybackConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
  }

  public get adDecisionServerUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.AdDecisionServerUrl'),
        outputPath: 'AdDecisionServerUrl',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.AdDecisionServerUrl', props);
    return resource.getResponseField('AdDecisionServerUrl') as unknown as string;
  }

  public get availSuppression(): MediaTailorResponsesPutPlaybackConfigurationAvailSuppression {
    return new MediaTailorResponsesPutPlaybackConfigurationAvailSuppression(this.__scope, this.__resources, this.__input);
  }

  public get bumper(): MediaTailorResponsesPutPlaybackConfigurationBumper {
    return new MediaTailorResponsesPutPlaybackConfigurationBumper(this.__scope, this.__resources, this.__input);
  }

  public get cdnConfiguration(): MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration {
    return new MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get dashConfiguration(): MediaTailorResponsesPutPlaybackConfigurationDashConfiguration {
    return new MediaTailorResponsesPutPlaybackConfigurationDashConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get hlsConfiguration(): MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration {
    return new MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get livePreRollConfiguration(): MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration {
    return new MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get manifestProcessingRules(): MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules {
    return new MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.Name'),
        outputPath: 'Name',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get personalizationThresholdSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.PersonalizationThresholdSeconds'),
        outputPath: 'PersonalizationThresholdSeconds',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.PersonalizationThresholdSeconds', props);
    return resource.getResponseField('PersonalizationThresholdSeconds') as unknown as number;
  }

  public get playbackConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.PlaybackConfigurationArn'),
        outputPath: 'PlaybackConfigurationArn',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.PlaybackConfigurationArn', props);
    return resource.getResponseField('PlaybackConfigurationArn') as unknown as string;
  }

  public get playbackEndpointPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.PlaybackEndpointPrefix'),
        outputPath: 'PlaybackEndpointPrefix',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.PlaybackEndpointPrefix', props);
    return resource.getResponseField('PlaybackEndpointPrefix') as unknown as string;
  }

  public get sessionInitializationEndpointPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.SessionInitializationEndpointPrefix'),
        outputPath: 'SessionInitializationEndpointPrefix',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.SessionInitializationEndpointPrefix', props);
    return resource.getResponseField('SessionInitializationEndpointPrefix') as unknown as string;
  }

  public get slateAdUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.SlateAdUrl'),
        outputPath: 'SlateAdUrl',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.SlateAdUrl', props);
    return resource.getResponseField('SlateAdUrl') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.Tags'),
        outputPath: 'Tags',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get transcodeProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.TranscodeProfileName'),
        outputPath: 'TranscodeProfileName',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.TranscodeProfileName', props);
    return resource.getResponseField('TranscodeProfileName') as unknown as string;
  }

  public get videoContentSourceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.VideoContentSourceUrl'),
        outputPath: 'VideoContentSourceUrl',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.VideoContentSourceUrl', props);
    return resource.getResponseField('VideoContentSourceUrl') as unknown as string;
  }

}

export class MediaTailorResponsesPutPlaybackConfigurationAvailSuppression {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.AvailSuppression.Mode'),
        outputPath: 'AvailSuppression.Mode',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.AvailSuppression.Mode', props);
    return resource.getResponseField('AvailSuppression.Mode') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.AvailSuppression.Value'),
        outputPath: 'AvailSuppression.Value',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.AvailSuppression.Value', props);
    return resource.getResponseField('AvailSuppression.Value') as unknown as string;
  }

}

export class MediaTailorResponsesPutPlaybackConfigurationBumper {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
  }

  public get endUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.Bumper.EndUrl'),
        outputPath: 'Bumper.EndUrl',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.Bumper.EndUrl', props);
    return resource.getResponseField('Bumper.EndUrl') as unknown as string;
  }

  public get startUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.Bumper.StartUrl'),
        outputPath: 'Bumper.StartUrl',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.Bumper.StartUrl', props);
    return resource.getResponseField('Bumper.StartUrl') as unknown as string;
  }

}

export class MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
  }

  public get adSegmentUrlPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.CdnConfiguration.AdSegmentUrlPrefix'),
        outputPath: 'CdnConfiguration.AdSegmentUrlPrefix',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.CdnConfiguration.AdSegmentUrlPrefix', props);
    return resource.getResponseField('CdnConfiguration.AdSegmentUrlPrefix') as unknown as string;
  }

  public get contentSegmentUrlPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.CdnConfiguration.ContentSegmentUrlPrefix'),
        outputPath: 'CdnConfiguration.ContentSegmentUrlPrefix',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.CdnConfiguration.ContentSegmentUrlPrefix', props);
    return resource.getResponseField('CdnConfiguration.ContentSegmentUrlPrefix') as unknown as string;
  }

}

export class MediaTailorResponsesPutPlaybackConfigurationDashConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
  }

  public get manifestEndpointPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.DashConfiguration.ManifestEndpointPrefix'),
        outputPath: 'DashConfiguration.ManifestEndpointPrefix',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.DashConfiguration.ManifestEndpointPrefix', props);
    return resource.getResponseField('DashConfiguration.ManifestEndpointPrefix') as unknown as string;
  }

  public get mpdLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.DashConfiguration.MpdLocation'),
        outputPath: 'DashConfiguration.MpdLocation',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.DashConfiguration.MpdLocation', props);
    return resource.getResponseField('DashConfiguration.MpdLocation') as unknown as string;
  }

  public get originManifestType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.DashConfiguration.OriginManifestType'),
        outputPath: 'DashConfiguration.OriginManifestType',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.DashConfiguration.OriginManifestType', props);
    return resource.getResponseField('DashConfiguration.OriginManifestType') as unknown as string;
  }

}

export class MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
  }

  public get manifestEndpointPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.HlsConfiguration.ManifestEndpointPrefix'),
        outputPath: 'HlsConfiguration.ManifestEndpointPrefix',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.HlsConfiguration.ManifestEndpointPrefix', props);
    return resource.getResponseField('HlsConfiguration.ManifestEndpointPrefix') as unknown as string;
  }

}

export class MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
  }

  public get adDecisionServerUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.LivePreRollConfiguration.AdDecisionServerUrl'),
        outputPath: 'LivePreRollConfiguration.AdDecisionServerUrl',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.LivePreRollConfiguration.AdDecisionServerUrl', props);
    return resource.getResponseField('LivePreRollConfiguration.AdDecisionServerUrl') as unknown as string;
  }

  public get maxDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.LivePreRollConfiguration.MaxDurationSeconds'),
        outputPath: 'LivePreRollConfiguration.MaxDurationSeconds',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.LivePreRollConfiguration.MaxDurationSeconds', props);
    return resource.getResponseField('LivePreRollConfiguration.MaxDurationSeconds') as unknown as number;
  }

}

export class MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
  }

  public get adMarkerPassthrough(): MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough {
    return new MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough(this.__scope, this.__resources, this.__input);
  }

}

export class MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.ManifestProcessingRules.AdMarkerPassthrough.Enabled'),
        outputPath: 'ManifestProcessingRules.AdMarkerPassthrough.Enabled',
        parameters: {
          AdDecisionServerUrl: this.__input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.__input.availSuppression?.mode,
            Value: this.__input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.__input.bumper?.endUrl,
            StartUrl: this.__input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.__input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.__input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.__input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.__input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.__input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.__input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.__input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.__input.name,
          PersonalizationThresholdSeconds: this.__input.personalizationThresholdSeconds,
          SlateAdUrl: this.__input.slateAdUrl,
          Tags: this.__input.tags,
          TranscodeProfileName: this.__input.transcodeProfileName,
          VideoContentSourceUrl: this.__input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.ManifestProcessingRules.AdMarkerPassthrough.Enabled', props);
    return resource.getResponseField('ManifestProcessingRules.AdMarkerPassthrough.Enabled') as unknown as boolean;
  }

}

