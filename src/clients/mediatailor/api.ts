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

  public fetchPlaybackConfiguration(input: shapes.MediaTailorGetPlaybackConfigurationRequest): MediaTailorFetchPlaybackConfiguration {
    return new MediaTailorFetchPlaybackConfiguration(this, 'FetchPlaybackConfiguration', this.__resources, input);
  }

  public listPlaybackConfigurations(input: shapes.MediaTailorListPlaybackConfigurationsRequest): MediaTailorListPlaybackConfigurations {
    return new MediaTailorListPlaybackConfigurations(this, 'ListPlaybackConfigurations', this.__resources, input);
  }

  public listTagsForResource(input: shapes.MediaTailorListTagsForResourceRequest): MediaTailorListTagsForResource {
    return new MediaTailorListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putPlaybackConfiguration(input: shapes.MediaTailorPutPlaybackConfigurationRequest): MediaTailorPutPlaybackConfiguration {
    return new MediaTailorPutPlaybackConfiguration(this, 'PutPlaybackConfiguration', this.__resources, input);
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

export class MediaTailorFetchPlaybackConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.AdDecisionServerUrl', props);
    return resource.getResponseField('AdDecisionServerUrl') as unknown as string;
  }

  public get availSuppression(): MediaTailorFetchPlaybackConfigurationAvailSuppression {
    return new MediaTailorFetchPlaybackConfigurationAvailSuppression(this, 'AvailSuppression', this.__resources, this.input);
  }

  public get bumper(): MediaTailorFetchPlaybackConfigurationBumper {
    return new MediaTailorFetchPlaybackConfigurationBumper(this, 'Bumper', this.__resources, this.input);
  }

  public get cdnConfiguration(): MediaTailorFetchPlaybackConfigurationCdnConfiguration {
    return new MediaTailorFetchPlaybackConfigurationCdnConfiguration(this, 'CdnConfiguration', this.__resources, this.input);
  }

  public get dashConfiguration(): MediaTailorFetchPlaybackConfigurationDashConfiguration {
    return new MediaTailorFetchPlaybackConfigurationDashConfiguration(this, 'DashConfiguration', this.__resources, this.input);
  }

  public get hlsConfiguration(): MediaTailorFetchPlaybackConfigurationHlsConfiguration {
    return new MediaTailorFetchPlaybackConfigurationHlsConfiguration(this, 'HlsConfiguration', this.__resources, this.input);
  }

  public get livePreRollConfiguration(): MediaTailorFetchPlaybackConfigurationLivePreRollConfiguration {
    return new MediaTailorFetchPlaybackConfigurationLivePreRollConfiguration(this, 'LivePreRollConfiguration', this.__resources, this.input);
  }

  public get manifestProcessingRules(): MediaTailorFetchPlaybackConfigurationManifestProcessingRules {
    return new MediaTailorFetchPlaybackConfigurationManifestProcessingRules(this, 'ManifestProcessingRules', this.__resources, this.input);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.Name', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.PersonalizationThresholdSeconds', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.PlaybackConfigurationArn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.PlaybackEndpointPrefix', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.SessionInitializationEndpointPrefix', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.SlateAdUrl', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.Tags', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.TranscodeProfileName', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.VideoContentSourceUrl', props);
    return resource.getResponseField('VideoContentSourceUrl') as unknown as string;
  }

}

export class MediaTailorFetchPlaybackConfigurationAvailSuppression extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.AvailSuppression.Mode', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.AvailSuppression.Value', props);
    return resource.getResponseField('AvailSuppression.Value') as unknown as string;
  }

}

export class MediaTailorFetchPlaybackConfigurationBumper extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.Bumper.EndUrl', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.Bumper.StartUrl', props);
    return resource.getResponseField('Bumper.StartUrl') as unknown as string;
  }

}

export class MediaTailorFetchPlaybackConfigurationCdnConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.CdnConfiguration.AdSegmentUrlPrefix', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.CdnConfiguration.ContentSegmentUrlPrefix', props);
    return resource.getResponseField('CdnConfiguration.ContentSegmentUrlPrefix') as unknown as string;
  }

}

export class MediaTailorFetchPlaybackConfigurationDashConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.DashConfiguration.ManifestEndpointPrefix', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.DashConfiguration.MpdLocation', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.DashConfiguration.OriginManifestType', props);
    return resource.getResponseField('DashConfiguration.OriginManifestType') as unknown as string;
  }

}

export class MediaTailorFetchPlaybackConfigurationHlsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.HlsConfiguration.ManifestEndpointPrefix', props);
    return resource.getResponseField('HlsConfiguration.ManifestEndpointPrefix') as unknown as string;
  }

}

export class MediaTailorFetchPlaybackConfigurationLivePreRollConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.LivePreRollConfiguration.AdDecisionServerUrl', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.LivePreRollConfiguration.MaxDurationSeconds', props);
    return resource.getResponseField('LivePreRollConfiguration.MaxDurationSeconds') as unknown as number;
  }

}

export class MediaTailorFetchPlaybackConfigurationManifestProcessingRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
    super(scope, id);
  }

  public get adMarkerPassthrough(): MediaTailorFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough {
    return new MediaTailorFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough(this, 'AdMarkerPassthrough', this.__resources, this.input);
  }

}

export class MediaTailorFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorGetPlaybackConfigurationRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackConfiguration.ManifestProcessingRules.AdMarkerPassthrough.Enabled', props);
    return resource.getResponseField('ManifestProcessingRules.AdMarkerPassthrough.Enabled') as unknown as boolean;
  }

}

export class MediaTailorListPlaybackConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorListPlaybackConfigurationsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlaybackConfigurations.Items', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlaybackConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaTailorListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaTailorPutPlaybackConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
    super(scope, id);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.AdDecisionServerUrl', props);
    return resource.getResponseField('AdDecisionServerUrl') as unknown as string;
  }

  public get availSuppression(): MediaTailorPutPlaybackConfigurationAvailSuppression {
    return new MediaTailorPutPlaybackConfigurationAvailSuppression(this, 'AvailSuppression', this.__resources, this.input);
  }

  public get bumper(): MediaTailorPutPlaybackConfigurationBumper {
    return new MediaTailorPutPlaybackConfigurationBumper(this, 'Bumper', this.__resources, this.input);
  }

  public get cdnConfiguration(): MediaTailorPutPlaybackConfigurationCdnConfiguration {
    return new MediaTailorPutPlaybackConfigurationCdnConfiguration(this, 'CdnConfiguration', this.__resources, this.input);
  }

  public get dashConfiguration(): MediaTailorPutPlaybackConfigurationDashConfiguration {
    return new MediaTailorPutPlaybackConfigurationDashConfiguration(this, 'DashConfiguration', this.__resources, this.input);
  }

  public get hlsConfiguration(): MediaTailorPutPlaybackConfigurationHlsConfiguration {
    return new MediaTailorPutPlaybackConfigurationHlsConfiguration(this, 'HlsConfiguration', this.__resources, this.input);
  }

  public get livePreRollConfiguration(): MediaTailorPutPlaybackConfigurationLivePreRollConfiguration {
    return new MediaTailorPutPlaybackConfigurationLivePreRollConfiguration(this, 'LivePreRollConfiguration', this.__resources, this.input);
  }

  public get manifestProcessingRules(): MediaTailorPutPlaybackConfigurationManifestProcessingRules {
    return new MediaTailorPutPlaybackConfigurationManifestProcessingRules(this, 'ManifestProcessingRules', this.__resources, this.input);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.Name', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.PersonalizationThresholdSeconds', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.PlaybackConfigurationArn', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.PlaybackEndpointPrefix', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.SessionInitializationEndpointPrefix', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.SlateAdUrl', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.Tags', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.TranscodeProfileName', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.VideoContentSourceUrl', props);
    return resource.getResponseField('VideoContentSourceUrl') as unknown as string;
  }

}

export class MediaTailorPutPlaybackConfigurationAvailSuppression extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
    super(scope, id);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.AvailSuppression.Mode', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.AvailSuppression.Value', props);
    return resource.getResponseField('AvailSuppression.Value') as unknown as string;
  }

}

export class MediaTailorPutPlaybackConfigurationBumper extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
    super(scope, id);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.Bumper.EndUrl', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.Bumper.StartUrl', props);
    return resource.getResponseField('Bumper.StartUrl') as unknown as string;
  }

}

export class MediaTailorPutPlaybackConfigurationCdnConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
    super(scope, id);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.CdnConfiguration.AdSegmentUrlPrefix', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.CdnConfiguration.ContentSegmentUrlPrefix', props);
    return resource.getResponseField('CdnConfiguration.ContentSegmentUrlPrefix') as unknown as string;
  }

}

export class MediaTailorPutPlaybackConfigurationDashConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
    super(scope, id);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.DashConfiguration.ManifestEndpointPrefix', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.DashConfiguration.MpdLocation', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.DashConfiguration.OriginManifestType', props);
    return resource.getResponseField('DashConfiguration.OriginManifestType') as unknown as string;
  }

}

export class MediaTailorPutPlaybackConfigurationHlsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
    super(scope, id);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.HlsConfiguration.ManifestEndpointPrefix', props);
    return resource.getResponseField('HlsConfiguration.ManifestEndpointPrefix') as unknown as string;
  }

}

export class MediaTailorPutPlaybackConfigurationLivePreRollConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
    super(scope, id);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.LivePreRollConfiguration.AdDecisionServerUrl', props);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.LivePreRollConfiguration.MaxDurationSeconds', props);
    return resource.getResponseField('LivePreRollConfiguration.MaxDurationSeconds') as unknown as number;
  }

}

export class MediaTailorPutPlaybackConfigurationManifestProcessingRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
    super(scope, id);
  }

  public get adMarkerPassthrough(): MediaTailorPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough {
    return new MediaTailorPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough(this, 'AdMarkerPassthrough', this.__resources, this.input);
  }

}

export class MediaTailorPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaTailorPutPlaybackConfigurationRequest) {
    super(scope, id);
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
          AdDecisionServerUrl: this.input.adDecisionServerUrl,
          AvailSuppression: {
            Mode: this.input.availSuppression?.mode,
            Value: this.input.availSuppression?.value,
          },
          Bumper: {
            EndUrl: this.input.bumper?.endUrl,
            StartUrl: this.input.bumper?.startUrl,
          },
          CdnConfiguration: {
            AdSegmentUrlPrefix: this.input.cdnConfiguration?.adSegmentUrlPrefix,
            ContentSegmentUrlPrefix: this.input.cdnConfiguration?.contentSegmentUrlPrefix,
          },
          DashConfiguration: {
            MpdLocation: this.input.dashConfiguration?.mpdLocation,
            OriginManifestType: this.input.dashConfiguration?.originManifestType,
          },
          LivePreRollConfiguration: {
            AdDecisionServerUrl: this.input.livePreRollConfiguration?.adDecisionServerUrl,
            MaxDurationSeconds: this.input.livePreRollConfiguration?.maxDurationSeconds,
          },
          ManifestProcessingRules: {
            AdMarkerPassthrough: {
              Enabled: this.input.manifestProcessingRules?.adMarkerPassthrough?.enabled,
            },
          },
          Name: this.input.name,
          PersonalizationThresholdSeconds: this.input.personalizationThresholdSeconds,
          SlateAdUrl: this.input.slateAdUrl,
          Tags: this.input.tags,
          TranscodeProfileName: this.input.transcodeProfileName,
          VideoContentSourceUrl: this.input.videoContentSourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPlaybackConfiguration.ManifestProcessingRules.AdMarkerPassthrough.Enabled', props);
    return resource.getResponseField('ManifestProcessingRules.AdMarkerPassthrough.Enabled') as unknown as boolean;
  }

}

