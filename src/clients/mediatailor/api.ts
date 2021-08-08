import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MediaTailorClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createChannel(input: shapes.MediaTailorCreateChannelRequest): MediaTailorResponsesCreateChannel {
    return new MediaTailorResponsesCreateChannel(this, this.__resources, input);
  }

  public createProgram(input: shapes.MediaTailorCreateProgramRequest): MediaTailorResponsesCreateProgram {
    return new MediaTailorResponsesCreateProgram(this, this.__resources, input);
  }

  public createSourceLocation(input: shapes.MediaTailorCreateSourceLocationRequest): MediaTailorResponsesCreateSourceLocation {
    return new MediaTailorResponsesCreateSourceLocation(this, this.__resources, input);
  }

  public createVodSource(input: shapes.MediaTailorCreateVodSourceRequest): MediaTailorResponsesCreateVodSource {
    return new MediaTailorResponsesCreateVodSource(this, this.__resources, input);
  }

  public deleteChannel(input: shapes.MediaTailorDeleteChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DeleteChannel'),
        parameters: {
          ChannelName: input.channelName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannel', props);
  }

  public deleteChannelPolicy(input: shapes.MediaTailorDeleteChannelPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannelPolicy',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DeleteChannelPolicy'),
        parameters: {
          ChannelName: input.channelName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannelPolicy', props);
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

  public deleteProgram(input: shapes.MediaTailorDeleteProgramRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DeleteProgram'),
        parameters: {
          ChannelName: input.channelName,
          ProgramName: input.programName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProgram', props);
  }

  public deleteSourceLocation(input: shapes.MediaTailorDeleteSourceLocationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DeleteSourceLocation'),
        parameters: {
          SourceLocationName: input.sourceLocationName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSourceLocation', props);
  }

  public deleteVodSource(input: shapes.MediaTailorDeleteVodSourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DeleteVodSource'),
        parameters: {
          SourceLocationName: input.sourceLocationName,
          VodSourceName: input.vodSourceName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVodSource', props);
  }

  public describeChannel(input: shapes.MediaTailorDescribeChannelRequest): MediaTailorResponsesDescribeChannel {
    return new MediaTailorResponsesDescribeChannel(this, this.__resources, input);
  }

  public describeProgram(input: shapes.MediaTailorDescribeProgramRequest): MediaTailorResponsesDescribeProgram {
    return new MediaTailorResponsesDescribeProgram(this, this.__resources, input);
  }

  public describeSourceLocation(input: shapes.MediaTailorDescribeSourceLocationRequest): MediaTailorResponsesDescribeSourceLocation {
    return new MediaTailorResponsesDescribeSourceLocation(this, this.__resources, input);
  }

  public describeVodSource(input: shapes.MediaTailorDescribeVodSourceRequest): MediaTailorResponsesDescribeVodSource {
    return new MediaTailorResponsesDescribeVodSource(this, this.__resources, input);
  }

  public fetchChannelPolicy(input: shapes.MediaTailorGetChannelPolicyRequest): MediaTailorResponsesFetchChannelPolicy {
    return new MediaTailorResponsesFetchChannelPolicy(this, this.__resources, input);
  }

  public fetchChannelSchedule(input: shapes.MediaTailorGetChannelScheduleRequest): MediaTailorResponsesFetchChannelSchedule {
    return new MediaTailorResponsesFetchChannelSchedule(this, this.__resources, input);
  }

  public fetchPlaybackConfiguration(input: shapes.MediaTailorGetPlaybackConfigurationRequest): MediaTailorResponsesFetchPlaybackConfiguration {
    return new MediaTailorResponsesFetchPlaybackConfiguration(this, this.__resources, input);
  }

  public listAlerts(input: shapes.MediaTailorListAlertsRequest): MediaTailorResponsesListAlerts {
    return new MediaTailorResponsesListAlerts(this, this.__resources, input);
  }

  public listChannels(input: shapes.MediaTailorListChannelsRequest): MediaTailorResponsesListChannels {
    return new MediaTailorResponsesListChannels(this, this.__resources, input);
  }

  public listPlaybackConfigurations(input: shapes.MediaTailorListPlaybackConfigurationsRequest): MediaTailorResponsesListPlaybackConfigurations {
    return new MediaTailorResponsesListPlaybackConfigurations(this, this.__resources, input);
  }

  public listSourceLocations(input: shapes.MediaTailorListSourceLocationsRequest): MediaTailorResponsesListSourceLocations {
    return new MediaTailorResponsesListSourceLocations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.MediaTailorListTagsForResourceRequest): MediaTailorResponsesListTagsForResource {
    return new MediaTailorResponsesListTagsForResource(this, this.__resources, input);
  }

  public listVodSources(input: shapes.MediaTailorListVodSourcesRequest): MediaTailorResponsesListVodSources {
    return new MediaTailorResponsesListVodSources(this, this.__resources, input);
  }

  public putChannelPolicy(input: shapes.MediaTailorPutChannelPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putChannelPolicy',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutChannelPolicy'),
        parameters: {
          ChannelName: input.channelName,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutChannelPolicy', props);
  }

  public putPlaybackConfiguration(input: shapes.MediaTailorPutPlaybackConfigurationRequest): MediaTailorResponsesPutPlaybackConfiguration {
    return new MediaTailorResponsesPutPlaybackConfiguration(this, this.__resources, input);
  }

  public startChannel(input: shapes.MediaTailorStartChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.StartChannel'),
        parameters: {
          ChannelName: input.channelName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartChannel', props);
  }

  public stopChannel(input: shapes.MediaTailorStopChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.StopChannel'),
        parameters: {
          ChannelName: input.channelName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopChannel', props);
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

  public updateChannel(input: shapes.MediaTailorUpdateChannelRequest): MediaTailorResponsesUpdateChannel {
    return new MediaTailorResponsesUpdateChannel(this, this.__resources, input);
  }

  public updateSourceLocation(input: shapes.MediaTailorUpdateSourceLocationRequest): MediaTailorResponsesUpdateSourceLocation {
    return new MediaTailorResponsesUpdateSourceLocation(this, this.__resources, input);
  }

  public updateVodSource(input: shapes.MediaTailorUpdateVodSourceRequest): MediaTailorResponsesUpdateVodSource {
    return new MediaTailorResponsesUpdateVodSource(this, this.__resources, input);
  }

}

export class MediaTailorResponsesCreateChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorCreateChannelRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateChannel.Arn'),
        outputPath: 'Arn',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
          PlaybackMode: this.__input.playbackMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get channelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateChannel.ChannelName'),
        outputPath: 'ChannelName',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
          PlaybackMode: this.__input.playbackMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.ChannelName', props);
    return resource.getResponseField('ChannelName') as unknown as string;
  }

  public get channelState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateChannel.ChannelState'),
        outputPath: 'ChannelState',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
          PlaybackMode: this.__input.playbackMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.ChannelState', props);
    return resource.getResponseField('ChannelState') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateChannel.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
          PlaybackMode: this.__input.playbackMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateChannel.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
          PlaybackMode: this.__input.playbackMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get outputs(): shapes.MediaTailorResponseOutputItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateChannel.Outputs'),
        outputPath: 'Outputs',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
          PlaybackMode: this.__input.playbackMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.Outputs', props);
    return resource.getResponseField('Outputs') as unknown as shapes.MediaTailorResponseOutputItem[];
  }

  public get playbackMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateChannel.PlaybackMode'),
        outputPath: 'PlaybackMode',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
          PlaybackMode: this.__input.playbackMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.PlaybackMode', props);
    return resource.getResponseField('PlaybackMode') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateChannel.Tags'),
        outputPath: 'Tags',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
          PlaybackMode: this.__input.playbackMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaTailorResponsesCreateProgram {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorCreateProgramRequest) {
  }

  public get adBreaks(): shapes.MediaTailorAdBreak[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateProgram.AdBreaks'),
        outputPath: 'AdBreaks',
        parameters: {
          AdBreaks: this.__input.adBreaks,
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
          ScheduleConfiguration: {
            Transition: {
              RelativePosition: this.__input.scheduleConfiguration.transition.relativePosition,
              RelativeProgram: this.__input.scheduleConfiguration.transition.relativeProgram,
              Type: this.__input.scheduleConfiguration.transition.type,
            },
          },
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProgram.AdBreaks', props);
    return resource.getResponseField('AdBreaks') as unknown as shapes.MediaTailorAdBreak[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateProgram.Arn'),
        outputPath: 'Arn',
        parameters: {
          AdBreaks: this.__input.adBreaks,
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
          ScheduleConfiguration: {
            Transition: {
              RelativePosition: this.__input.scheduleConfiguration.transition.relativePosition,
              RelativeProgram: this.__input.scheduleConfiguration.transition.relativeProgram,
              Type: this.__input.scheduleConfiguration.transition.type,
            },
          },
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProgram.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get channelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateProgram.ChannelName'),
        outputPath: 'ChannelName',
        parameters: {
          AdBreaks: this.__input.adBreaks,
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
          ScheduleConfiguration: {
            Transition: {
              RelativePosition: this.__input.scheduleConfiguration.transition.relativePosition,
              RelativeProgram: this.__input.scheduleConfiguration.transition.relativeProgram,
              Type: this.__input.scheduleConfiguration.transition.type,
            },
          },
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProgram.ChannelName', props);
    return resource.getResponseField('ChannelName') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateProgram.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          AdBreaks: this.__input.adBreaks,
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
          ScheduleConfiguration: {
            Transition: {
              RelativePosition: this.__input.scheduleConfiguration.transition.relativePosition,
              RelativeProgram: this.__input.scheduleConfiguration.transition.relativeProgram,
              Type: this.__input.scheduleConfiguration.transition.type,
            },
          },
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProgram.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get programName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateProgram.ProgramName'),
        outputPath: 'ProgramName',
        parameters: {
          AdBreaks: this.__input.adBreaks,
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
          ScheduleConfiguration: {
            Transition: {
              RelativePosition: this.__input.scheduleConfiguration.transition.relativePosition,
              RelativeProgram: this.__input.scheduleConfiguration.transition.relativeProgram,
              Type: this.__input.scheduleConfiguration.transition.type,
            },
          },
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProgram.ProgramName', props);
    return resource.getResponseField('ProgramName') as unknown as string;
  }

  public get sourceLocationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateProgram.SourceLocationName'),
        outputPath: 'SourceLocationName',
        parameters: {
          AdBreaks: this.__input.adBreaks,
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
          ScheduleConfiguration: {
            Transition: {
              RelativePosition: this.__input.scheduleConfiguration.transition.relativePosition,
              RelativeProgram: this.__input.scheduleConfiguration.transition.relativeProgram,
              Type: this.__input.scheduleConfiguration.transition.type,
            },
          },
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProgram.SourceLocationName', props);
    return resource.getResponseField('SourceLocationName') as unknown as string;
  }

  public get vodSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateProgram.VodSourceName'),
        outputPath: 'VodSourceName',
        parameters: {
          AdBreaks: this.__input.adBreaks,
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
          ScheduleConfiguration: {
            Transition: {
              RelativePosition: this.__input.scheduleConfiguration.transition.relativePosition,
              RelativeProgram: this.__input.scheduleConfiguration.transition.relativeProgram,
              Type: this.__input.scheduleConfiguration.transition.type,
            },
          },
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProgram.VodSourceName', props);
    return resource.getResponseField('VodSourceName') as unknown as string;
  }

}

export class MediaTailorResponsesCreateSourceLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorCreateSourceLocationRequest) {
  }

  public get accessConfiguration(): MediaTailorResponsesCreateSourceLocationAccessConfiguration {
    return new MediaTailorResponsesCreateSourceLocationAccessConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.Arn'),
        outputPath: 'Arn',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get defaultSegmentDeliveryConfiguration(): MediaTailorResponsesCreateSourceLocationDefaultSegmentDeliveryConfiguration {
    return new MediaTailorResponsesCreateSourceLocationDefaultSegmentDeliveryConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get httpConfiguration(): MediaTailorResponsesCreateSourceLocationHttpConfiguration {
    return new MediaTailorResponsesCreateSourceLocationHttpConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get sourceLocationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.SourceLocationName'),
        outputPath: 'SourceLocationName',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.SourceLocationName', props);
    return resource.getResponseField('SourceLocationName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.Tags'),
        outputPath: 'Tags',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaTailorResponsesCreateSourceLocationAccessConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorCreateSourceLocationRequest) {
  }

  public get accessType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.AccessConfiguration.AccessType'),
        outputPath: 'AccessConfiguration.AccessType',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.AccessConfiguration.AccessType', props);
    return resource.getResponseField('AccessConfiguration.AccessType') as unknown as string;
  }

  public get secretsManagerAccessTokenConfiguration(): MediaTailorResponsesCreateSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration {
    return new MediaTailorResponsesCreateSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class MediaTailorResponsesCreateSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorCreateSourceLocationRequest) {
  }

  public get headerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName'),
        outputPath: 'AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName', props);
    return resource.getResponseField('AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn'),
        outputPath: 'AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn', props);
    return resource.getResponseField('AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn') as unknown as string;
  }

  public get secretStringKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey'),
        outputPath: 'AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey', props);
    return resource.getResponseField('AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey') as unknown as string;
  }

}

export class MediaTailorResponsesCreateSourceLocationDefaultSegmentDeliveryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorCreateSourceLocationRequest) {
  }

  public get baseUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.DefaultSegmentDeliveryConfiguration.BaseUrl'),
        outputPath: 'DefaultSegmentDeliveryConfiguration.BaseUrl',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.DefaultSegmentDeliveryConfiguration.BaseUrl', props);
    return resource.getResponseField('DefaultSegmentDeliveryConfiguration.BaseUrl') as unknown as string;
  }

}

export class MediaTailorResponsesCreateSourceLocationHttpConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorCreateSourceLocationRequest) {
  }

  public get baseUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateSourceLocation.HttpConfiguration.BaseUrl'),
        outputPath: 'HttpConfiguration.BaseUrl',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSourceLocation.HttpConfiguration.BaseUrl', props);
    return resource.getResponseField('HttpConfiguration.BaseUrl') as unknown as string;
  }

}

export class MediaTailorResponsesCreateVodSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorCreateVodSourceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateVodSource.Arn'),
        outputPath: 'Arn',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVodSource.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateVodSource.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVodSource.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get httpPackageConfigurations(): shapes.MediaTailorHttpPackageConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateVodSource.HttpPackageConfigurations'),
        outputPath: 'HttpPackageConfigurations',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVodSource.HttpPackageConfigurations', props);
    return resource.getResponseField('HttpPackageConfigurations') as unknown as shapes.MediaTailorHttpPackageConfiguration[];
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateVodSource.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVodSource.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get sourceLocationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateVodSource.SourceLocationName'),
        outputPath: 'SourceLocationName',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVodSource.SourceLocationName', props);
    return resource.getResponseField('SourceLocationName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateVodSource.Tags'),
        outputPath: 'Tags',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVodSource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get vodSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.CreateVodSource.VodSourceName'),
        outputPath: 'VodSourceName',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          Tags: this.__input.tags,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVodSource.VodSourceName', props);
    return resource.getResponseField('VodSourceName') as unknown as string;
  }

}

export class MediaTailorResponsesDescribeChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorDescribeChannelRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeChannel.Arn'),
        outputPath: 'Arn',
        parameters: {
          ChannelName: this.__input.channelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get channelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeChannel.ChannelName'),
        outputPath: 'ChannelName',
        parameters: {
          ChannelName: this.__input.channelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.ChannelName', props);
    return resource.getResponseField('ChannelName') as unknown as string;
  }

  public get channelState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeChannel.ChannelState'),
        outputPath: 'ChannelState',
        parameters: {
          ChannelName: this.__input.channelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.ChannelState', props);
    return resource.getResponseField('ChannelState') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeChannel.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ChannelName: this.__input.channelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeChannel.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          ChannelName: this.__input.channelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get outputs(): shapes.MediaTailorResponseOutputItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeChannel.Outputs'),
        outputPath: 'Outputs',
        parameters: {
          ChannelName: this.__input.channelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Outputs', props);
    return resource.getResponseField('Outputs') as unknown as shapes.MediaTailorResponseOutputItem[];
  }

  public get playbackMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeChannel.PlaybackMode'),
        outputPath: 'PlaybackMode',
        parameters: {
          ChannelName: this.__input.channelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.PlaybackMode', props);
    return resource.getResponseField('PlaybackMode') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeChannel.Tags'),
        outputPath: 'Tags',
        parameters: {
          ChannelName: this.__input.channelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaTailorResponsesDescribeProgram {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorDescribeProgramRequest) {
  }

  public get adBreaks(): shapes.MediaTailorAdBreak[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeProgram.AdBreaks'),
        outputPath: 'AdBreaks',
        parameters: {
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProgram.AdBreaks', props);
    return resource.getResponseField('AdBreaks') as unknown as shapes.MediaTailorAdBreak[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeProgram.Arn'),
        outputPath: 'Arn',
        parameters: {
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProgram.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get channelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeProgram.ChannelName'),
        outputPath: 'ChannelName',
        parameters: {
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProgram.ChannelName', props);
    return resource.getResponseField('ChannelName') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeProgram.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProgram.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get programName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeProgram.ProgramName'),
        outputPath: 'ProgramName',
        parameters: {
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProgram.ProgramName', props);
    return resource.getResponseField('ProgramName') as unknown as string;
  }

  public get sourceLocationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeProgram.SourceLocationName'),
        outputPath: 'SourceLocationName',
        parameters: {
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProgram.SourceLocationName', props);
    return resource.getResponseField('SourceLocationName') as unknown as string;
  }

  public get vodSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProgram',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeProgram.VodSourceName'),
        outputPath: 'VodSourceName',
        parameters: {
          ChannelName: this.__input.channelName,
          ProgramName: this.__input.programName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProgram.VodSourceName', props);
    return resource.getResponseField('VodSourceName') as unknown as string;
  }

}

export class MediaTailorResponsesDescribeSourceLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorDescribeSourceLocationRequest) {
  }

  public get accessConfiguration(): MediaTailorResponsesDescribeSourceLocationAccessConfiguration {
    return new MediaTailorResponsesDescribeSourceLocationAccessConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.Arn'),
        outputPath: 'Arn',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get defaultSegmentDeliveryConfiguration(): MediaTailorResponsesDescribeSourceLocationDefaultSegmentDeliveryConfiguration {
    return new MediaTailorResponsesDescribeSourceLocationDefaultSegmentDeliveryConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get httpConfiguration(): MediaTailorResponsesDescribeSourceLocationHttpConfiguration {
    return new MediaTailorResponsesDescribeSourceLocationHttpConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get sourceLocationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.SourceLocationName'),
        outputPath: 'SourceLocationName',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.SourceLocationName', props);
    return resource.getResponseField('SourceLocationName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.Tags'),
        outputPath: 'Tags',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaTailorResponsesDescribeSourceLocationAccessConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorDescribeSourceLocationRequest) {
  }

  public get accessType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.AccessConfiguration.AccessType'),
        outputPath: 'AccessConfiguration.AccessType',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.AccessConfiguration.AccessType', props);
    return resource.getResponseField('AccessConfiguration.AccessType') as unknown as string;
  }

  public get secretsManagerAccessTokenConfiguration(): MediaTailorResponsesDescribeSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration {
    return new MediaTailorResponsesDescribeSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class MediaTailorResponsesDescribeSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorDescribeSourceLocationRequest) {
  }

  public get headerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName'),
        outputPath: 'AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName', props);
    return resource.getResponseField('AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn'),
        outputPath: 'AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn', props);
    return resource.getResponseField('AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn') as unknown as string;
  }

  public get secretStringKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey'),
        outputPath: 'AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey', props);
    return resource.getResponseField('AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey') as unknown as string;
  }

}

export class MediaTailorResponsesDescribeSourceLocationDefaultSegmentDeliveryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorDescribeSourceLocationRequest) {
  }

  public get baseUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.DefaultSegmentDeliveryConfiguration.BaseUrl'),
        outputPath: 'DefaultSegmentDeliveryConfiguration.BaseUrl',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.DefaultSegmentDeliveryConfiguration.BaseUrl', props);
    return resource.getResponseField('DefaultSegmentDeliveryConfiguration.BaseUrl') as unknown as string;
  }

}

export class MediaTailorResponsesDescribeSourceLocationHttpConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorDescribeSourceLocationRequest) {
  }

  public get baseUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeSourceLocation.HttpConfiguration.BaseUrl'),
        outputPath: 'HttpConfiguration.BaseUrl',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceLocation.HttpConfiguration.BaseUrl', props);
    return resource.getResponseField('HttpConfiguration.BaseUrl') as unknown as string;
  }

}

export class MediaTailorResponsesDescribeVodSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorDescribeVodSourceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeVodSource.Arn'),
        outputPath: 'Arn',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVodSource.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeVodSource.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVodSource.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get httpPackageConfigurations(): shapes.MediaTailorHttpPackageConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeVodSource.HttpPackageConfigurations'),
        outputPath: 'HttpPackageConfigurations',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVodSource.HttpPackageConfigurations', props);
    return resource.getResponseField('HttpPackageConfigurations') as unknown as shapes.MediaTailorHttpPackageConfiguration[];
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeVodSource.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVodSource.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get sourceLocationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeVodSource.SourceLocationName'),
        outputPath: 'SourceLocationName',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVodSource.SourceLocationName', props);
    return resource.getResponseField('SourceLocationName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeVodSource.Tags'),
        outputPath: 'Tags',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVodSource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get vodSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.DescribeVodSource.VodSourceName'),
        outputPath: 'VodSourceName',
        parameters: {
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVodSource.VodSourceName', props);
    return resource.getResponseField('VodSourceName') as unknown as string;
  }

}

export class MediaTailorResponsesFetchChannelPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetChannelPolicyRequest) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelPolicy',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetChannelPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          ChannelName: this.__input.channelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class MediaTailorResponsesFetchChannelSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorGetChannelScheduleRequest) {
  }

  public get items(): shapes.MediaTailorScheduleEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelSchedule',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetChannelSchedule.Items'),
        outputPath: 'Items',
        parameters: {
          ChannelName: this.__input.channelName,
          DurationMinutes: this.__input.durationMinutes,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelSchedule.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.MediaTailorScheduleEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelSchedule',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetChannelSchedule.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChannelName: this.__input.channelName,
          DurationMinutes: this.__input.durationMinutes,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelSchedule.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
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

  public get configurationAliases(): Record<string, Record<string, string>> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.GetPlaybackConfiguration.ConfigurationAliases'),
        outputPath: 'ConfigurationAliases',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackConfiguration.ConfigurationAliases', props);
    return resource.getResponseField('ConfigurationAliases') as unknown as Record<string, Record<string, string>>;
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

export class MediaTailorResponsesListAlerts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorListAlertsRequest) {
  }

  public get items(): shapes.MediaTailorAlert[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlerts',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListAlerts.Items'),
        outputPath: 'Items',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlerts.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.MediaTailorAlert[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlerts',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListAlerts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlerts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaTailorResponsesListChannels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorListChannelsRequest) {
  }

  public get items(): shapes.MediaTailorChannel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannels',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListChannels.Items'),
        outputPath: 'Items',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannels.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.MediaTailorChannel[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannels',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListChannels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
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

export class MediaTailorResponsesListSourceLocations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorListSourceLocationsRequest) {
  }

  public get items(): shapes.MediaTailorSourceLocation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSourceLocations',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListSourceLocations.Items'),
        outputPath: 'Items',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSourceLocations.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.MediaTailorSourceLocation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSourceLocations',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListSourceLocations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSourceLocations.NextToken', props);
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

export class MediaTailorResponsesListVodSources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorListVodSourcesRequest) {
  }

  public get items(): shapes.MediaTailorVodSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVodSources',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListVodSources.Items'),
        outputPath: 'Items',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVodSources.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.MediaTailorVodSource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVodSources',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.ListVodSources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVodSources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
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
          ConfigurationAliases: this.__input.configurationAliases,
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

  public get configurationAliases(): Record<string, Record<string, string>> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPlaybackConfiguration',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.PutPlaybackConfiguration.ConfigurationAliases'),
        outputPath: 'ConfigurationAliases',
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
          ConfigurationAliases: this.__input.configurationAliases,
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
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPlaybackConfiguration.ConfigurationAliases', props);
    return resource.getResponseField('ConfigurationAliases') as unknown as Record<string, Record<string, string>>;
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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
          ConfigurationAliases: this.__input.configurationAliases,
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

export class MediaTailorResponsesUpdateChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorUpdateChannelRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateChannel.Arn'),
        outputPath: 'Arn',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get channelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateChannel.ChannelName'),
        outputPath: 'ChannelName',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.ChannelName', props);
    return resource.getResponseField('ChannelName') as unknown as string;
  }

  public get channelState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateChannel.ChannelState'),
        outputPath: 'ChannelState',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.ChannelState', props);
    return resource.getResponseField('ChannelState') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateChannel.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateChannel.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get outputs(): shapes.MediaTailorResponseOutputItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateChannel.Outputs'),
        outputPath: 'Outputs',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.Outputs', props);
    return resource.getResponseField('Outputs') as unknown as shapes.MediaTailorResponseOutputItem[];
  }

  public get playbackMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateChannel.PlaybackMode'),
        outputPath: 'PlaybackMode',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.PlaybackMode', props);
    return resource.getResponseField('PlaybackMode') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateChannel.Tags'),
        outputPath: 'Tags',
        parameters: {
          ChannelName: this.__input.channelName,
          Outputs: this.__input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaTailorResponsesUpdateSourceLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorUpdateSourceLocationRequest) {
  }

  public get accessConfiguration(): MediaTailorResponsesUpdateSourceLocationAccessConfiguration {
    return new MediaTailorResponsesUpdateSourceLocationAccessConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.Arn'),
        outputPath: 'Arn',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get defaultSegmentDeliveryConfiguration(): MediaTailorResponsesUpdateSourceLocationDefaultSegmentDeliveryConfiguration {
    return new MediaTailorResponsesUpdateSourceLocationDefaultSegmentDeliveryConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get httpConfiguration(): MediaTailorResponsesUpdateSourceLocationHttpConfiguration {
    return new MediaTailorResponsesUpdateSourceLocationHttpConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get sourceLocationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.SourceLocationName'),
        outputPath: 'SourceLocationName',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.SourceLocationName', props);
    return resource.getResponseField('SourceLocationName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.Tags'),
        outputPath: 'Tags',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaTailorResponsesUpdateSourceLocationAccessConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorUpdateSourceLocationRequest) {
  }

  public get accessType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.AccessConfiguration.AccessType'),
        outputPath: 'AccessConfiguration.AccessType',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.AccessConfiguration.AccessType', props);
    return resource.getResponseField('AccessConfiguration.AccessType') as unknown as string;
  }

  public get secretsManagerAccessTokenConfiguration(): MediaTailorResponsesUpdateSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration {
    return new MediaTailorResponsesUpdateSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class MediaTailorResponsesUpdateSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorUpdateSourceLocationRequest) {
  }

  public get headerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName'),
        outputPath: 'AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName', props);
    return resource.getResponseField('AccessConfiguration.SecretsManagerAccessTokenConfiguration.HeaderName') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn'),
        outputPath: 'AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn', props);
    return resource.getResponseField('AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretArn') as unknown as string;
  }

  public get secretStringKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey'),
        outputPath: 'AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey', props);
    return resource.getResponseField('AccessConfiguration.SecretsManagerAccessTokenConfiguration.SecretStringKey') as unknown as string;
  }

}

export class MediaTailorResponsesUpdateSourceLocationDefaultSegmentDeliveryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorUpdateSourceLocationRequest) {
  }

  public get baseUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.DefaultSegmentDeliveryConfiguration.BaseUrl'),
        outputPath: 'DefaultSegmentDeliveryConfiguration.BaseUrl',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.DefaultSegmentDeliveryConfiguration.BaseUrl', props);
    return resource.getResponseField('DefaultSegmentDeliveryConfiguration.BaseUrl') as unknown as string;
  }

}

export class MediaTailorResponsesUpdateSourceLocationHttpConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorUpdateSourceLocationRequest) {
  }

  public get baseUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSourceLocation',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateSourceLocation.HttpConfiguration.BaseUrl'),
        outputPath: 'HttpConfiguration.BaseUrl',
        parameters: {
          AccessConfiguration: {
            AccessType: this.__input.accessConfiguration?.accessType,
            SecretsManagerAccessTokenConfiguration: {
              HeaderName: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.headerName,
              SecretArn: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretArn,
              SecretStringKey: this.__input.accessConfiguration?.secretsManagerAccessTokenConfiguration?.secretStringKey,
            },
          },
          DefaultSegmentDeliveryConfiguration: {
            BaseUrl: this.__input.defaultSegmentDeliveryConfiguration?.baseUrl,
          },
          HttpConfiguration: {
            BaseUrl: this.__input.httpConfiguration.baseUrl,
          },
          SourceLocationName: this.__input.sourceLocationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSourceLocation.HttpConfiguration.BaseUrl', props);
    return resource.getResponseField('HttpConfiguration.BaseUrl') as unknown as string;
  }

}

export class MediaTailorResponsesUpdateVodSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaTailorUpdateVodSourceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateVodSource.Arn'),
        outputPath: 'Arn',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVodSource.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateVodSource.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVodSource.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get httpPackageConfigurations(): shapes.MediaTailorHttpPackageConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateVodSource.HttpPackageConfigurations'),
        outputPath: 'HttpPackageConfigurations',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVodSource.HttpPackageConfigurations', props);
    return resource.getResponseField('HttpPackageConfigurations') as unknown as shapes.MediaTailorHttpPackageConfiguration[];
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateVodSource.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVodSource.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get sourceLocationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateVodSource.SourceLocationName'),
        outputPath: 'SourceLocationName',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVodSource.SourceLocationName', props);
    return resource.getResponseField('SourceLocationName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateVodSource.Tags'),
        outputPath: 'Tags',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVodSource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get vodSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVodSource',
        service: 'MediaTailor',
        physicalResourceId: cr.PhysicalResourceId.of('MediaTailor.UpdateVodSource.VodSourceName'),
        outputPath: 'VodSourceName',
        parameters: {
          HttpPackageConfigurations: this.__input.httpPackageConfigurations,
          SourceLocationName: this.__input.sourceLocationName,
          VodSourceName: this.__input.vodSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVodSource.VodSourceName', props);
    return resource.getResponseField('VodSourceName') as unknown as string;
  }

}

