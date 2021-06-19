import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ElasticTranscoderClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelJob(input: shapes.ElasticTranscoderCancelJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CancelJob'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelJob', props);
  }

  public createJob(input: shapes.ElasticTranscoderCreateJobRequest): ElasticTranscoderResponsesCreateJob {
    return new ElasticTranscoderResponsesCreateJob(this, this.__resources, input);
  }

  public createPipeline(input: shapes.ElasticTranscoderCreatePipelineRequest): ElasticTranscoderResponsesCreatePipeline {
    return new ElasticTranscoderResponsesCreatePipeline(this, this.__resources, input);
  }

  public createPreset(input: shapes.ElasticTranscoderCreatePresetRequest): ElasticTranscoderResponsesCreatePreset {
    return new ElasticTranscoderResponsesCreatePreset(this, this.__resources, input);
  }

  public deletePipeline(input: shapes.ElasticTranscoderDeletePipelineRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.DeletePipeline'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePipeline', props);
  }

  public deletePreset(input: shapes.ElasticTranscoderDeletePresetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.DeletePreset'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePreset', props);
  }

  public listJobsByPipeline(input: shapes.ElasticTranscoderListJobsByPipelineRequest): ElasticTranscoderResponsesListJobsByPipeline {
    return new ElasticTranscoderResponsesListJobsByPipeline(this, this.__resources, input);
  }

  public listJobsByStatus(input: shapes.ElasticTranscoderListJobsByStatusRequest): ElasticTranscoderResponsesListJobsByStatus {
    return new ElasticTranscoderResponsesListJobsByStatus(this, this.__resources, input);
  }

  public listPipelines(input: shapes.ElasticTranscoderListPipelinesRequest): ElasticTranscoderResponsesListPipelines {
    return new ElasticTranscoderResponsesListPipelines(this, this.__resources, input);
  }

  public listPresets(input: shapes.ElasticTranscoderListPresetsRequest): ElasticTranscoderResponsesListPresets {
    return new ElasticTranscoderResponsesListPresets(this, this.__resources, input);
  }

  public readJob(input: shapes.ElasticTranscoderReadJobRequest): ElasticTranscoderResponsesReadJob {
    return new ElasticTranscoderResponsesReadJob(this, this.__resources, input);
  }

  public readPipeline(input: shapes.ElasticTranscoderReadPipelineRequest): ElasticTranscoderResponsesReadPipeline {
    return new ElasticTranscoderResponsesReadPipeline(this, this.__resources, input);
  }

  public readPreset(input: shapes.ElasticTranscoderReadPresetRequest): ElasticTranscoderResponsesReadPreset {
    return new ElasticTranscoderResponsesReadPreset(this, this.__resources, input);
  }

  public testRole(input: shapes.ElasticTranscoderTestRoleRequest): ElasticTranscoderResponsesTestRole {
    return new ElasticTranscoderResponsesTestRole(this, this.__resources, input);
  }

  public updatePipeline(input: shapes.ElasticTranscoderUpdatePipelineRequest): ElasticTranscoderResponsesUpdatePipeline {
    return new ElasticTranscoderResponsesUpdatePipeline(this, this.__resources, input);
  }

  public updatePipelineNotifications(input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest): ElasticTranscoderResponsesUpdatePipelineNotifications {
    return new ElasticTranscoderResponsesUpdatePipelineNotifications(this, this.__resources, input);
  }

  public updatePipelineStatus(input: shapes.ElasticTranscoderUpdatePipelineStatusRequest): ElasticTranscoderResponsesUpdatePipelineStatus {
    return new ElasticTranscoderResponsesUpdatePipelineStatus(this, this.__resources, input);
  }

}

export class ElasticTranscoderResponsesCreateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get job(): ElasticTranscoderResponsesCreateJobJob {
    return new ElasticTranscoderResponsesCreateJobJob(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesCreateJobJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Id'),
        outputPath: 'Job.Id',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Id', props);
    return resource.getResponseField('Job.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Arn'),
        outputPath: 'Job.Arn',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Arn', props);
    return resource.getResponseField('Job.Arn') as unknown as string;
  }

  public get pipelineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.PipelineId'),
        outputPath: 'Job.PipelineId',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.PipelineId', props);
    return resource.getResponseField('Job.PipelineId') as unknown as string;
  }

  public get input(): ElasticTranscoderResponsesCreateJobJobInput {
    return new ElasticTranscoderResponsesCreateJobJobInput(this.__scope, this.__resources, this.__input);
  }

  public get inputs(): shapes.ElasticTranscoderJobInput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Inputs'),
        outputPath: 'Job.Inputs',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Inputs', props);
    return resource.getResponseField('Job.Inputs') as unknown as shapes.ElasticTranscoderJobInput[];
  }

  public get output(): ElasticTranscoderResponsesCreateJobJobOutput {
    return new ElasticTranscoderResponsesCreateJobJobOutput(this.__scope, this.__resources, this.__input);
  }

  public get outputs(): shapes.ElasticTranscoderJobOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Outputs'),
        outputPath: 'Job.Outputs',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Outputs', props);
    return resource.getResponseField('Job.Outputs') as unknown as shapes.ElasticTranscoderJobOutput[];
  }

  public get outputKeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.OutputKeyPrefix'),
        outputPath: 'Job.OutputKeyPrefix',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.OutputKeyPrefix', props);
    return resource.getResponseField('Job.OutputKeyPrefix') as unknown as string;
  }

  public get playlists(): shapes.ElasticTranscoderPlaylist[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Playlists'),
        outputPath: 'Job.Playlists',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Playlists', props);
    return resource.getResponseField('Job.Playlists') as unknown as shapes.ElasticTranscoderPlaylist[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Status'),
        outputPath: 'Job.Status',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Status', props);
    return resource.getResponseField('Job.Status') as unknown as string;
  }

  public get userMetadata(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.UserMetadata'),
        outputPath: 'Job.UserMetadata',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.UserMetadata', props);
    return resource.getResponseField('Job.UserMetadata') as unknown as Record<string, string>;
  }

  public get timing(): ElasticTranscoderResponsesCreateJobJobTiming {
    return new ElasticTranscoderResponsesCreateJobJobTiming(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesCreateJobJobInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.Key'),
        outputPath: 'Job.Input.Key',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.Key', props);
    return resource.getResponseField('Job.Input.Key') as unknown as string;
  }

  public get frameRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.FrameRate'),
        outputPath: 'Job.Input.FrameRate',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.FrameRate', props);
    return resource.getResponseField('Job.Input.FrameRate') as unknown as string;
  }

  public get resolution(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.Resolution'),
        outputPath: 'Job.Input.Resolution',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.Resolution', props);
    return resource.getResponseField('Job.Input.Resolution') as unknown as string;
  }

  public get aspectRatio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.AspectRatio'),
        outputPath: 'Job.Input.AspectRatio',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.AspectRatio', props);
    return resource.getResponseField('Job.Input.AspectRatio') as unknown as string;
  }

  public get interlaced(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.Interlaced'),
        outputPath: 'Job.Input.Interlaced',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.Interlaced', props);
    return resource.getResponseField('Job.Input.Interlaced') as unknown as string;
  }

  public get container(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.Container'),
        outputPath: 'Job.Input.Container',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.Container', props);
    return resource.getResponseField('Job.Input.Container') as unknown as string;
  }

  public get encryption(): ElasticTranscoderResponsesCreateJobJobInputEncryption {
    return new ElasticTranscoderResponsesCreateJobJobInputEncryption(this.__scope, this.__resources, this.__input);
  }

  public get timeSpan(): ElasticTranscoderResponsesCreateJobJobInputTimeSpan {
    return new ElasticTranscoderResponsesCreateJobJobInputTimeSpan(this.__scope, this.__resources, this.__input);
  }

  public get inputCaptions(): ElasticTranscoderResponsesCreateJobJobInputInputCaptions {
    return new ElasticTranscoderResponsesCreateJobJobInputInputCaptions(this.__scope, this.__resources, this.__input);
  }

  public get detectedProperties(): ElasticTranscoderResponsesCreateJobJobInputDetectedProperties {
    return new ElasticTranscoderResponsesCreateJobJobInputDetectedProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesCreateJobJobInputEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.Encryption.Mode'),
        outputPath: 'Job.Input.Encryption.Mode',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.Encryption.Mode', props);
    return resource.getResponseField('Job.Input.Encryption.Mode') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.Encryption.Key'),
        outputPath: 'Job.Input.Encryption.Key',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.Encryption.Key', props);
    return resource.getResponseField('Job.Input.Encryption.Key') as unknown as string;
  }

  public get keyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.Encryption.KeyMd5'),
        outputPath: 'Job.Input.Encryption.KeyMd5',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.Encryption.KeyMd5', props);
    return resource.getResponseField('Job.Input.Encryption.KeyMd5') as unknown as string;
  }

  public get initializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.Encryption.InitializationVector'),
        outputPath: 'Job.Input.Encryption.InitializationVector',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.Encryption.InitializationVector', props);
    return resource.getResponseField('Job.Input.Encryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderResponsesCreateJobJobInputTimeSpan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.TimeSpan.StartTime'),
        outputPath: 'Job.Input.TimeSpan.StartTime',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.TimeSpan.StartTime', props);
    return resource.getResponseField('Job.Input.TimeSpan.StartTime') as unknown as string;
  }

  public get duration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.TimeSpan.Duration'),
        outputPath: 'Job.Input.TimeSpan.Duration',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.TimeSpan.Duration', props);
    return resource.getResponseField('Job.Input.TimeSpan.Duration') as unknown as string;
  }

}

export class ElasticTranscoderResponsesCreateJobJobInputInputCaptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get mergePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.InputCaptions.MergePolicy'),
        outputPath: 'Job.Input.InputCaptions.MergePolicy',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.InputCaptions.MergePolicy', props);
    return resource.getResponseField('Job.Input.InputCaptions.MergePolicy') as unknown as string;
  }

  public get captionSources(): shapes.ElasticTranscoderCaptionSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.InputCaptions.CaptionSources'),
        outputPath: 'Job.Input.InputCaptions.CaptionSources',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.InputCaptions.CaptionSources', props);
    return resource.getResponseField('Job.Input.InputCaptions.CaptionSources') as unknown as shapes.ElasticTranscoderCaptionSource[];
  }

}

export class ElasticTranscoderResponsesCreateJobJobInputDetectedProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.DetectedProperties.Width'),
        outputPath: 'Job.Input.DetectedProperties.Width',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.DetectedProperties.Width', props);
    return resource.getResponseField('Job.Input.DetectedProperties.Width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.DetectedProperties.Height'),
        outputPath: 'Job.Input.DetectedProperties.Height',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.DetectedProperties.Height', props);
    return resource.getResponseField('Job.Input.DetectedProperties.Height') as unknown as number;
  }

  public get frameRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.DetectedProperties.FrameRate'),
        outputPath: 'Job.Input.DetectedProperties.FrameRate',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.DetectedProperties.FrameRate', props);
    return resource.getResponseField('Job.Input.DetectedProperties.FrameRate') as unknown as string;
  }

  public get fileSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.DetectedProperties.FileSize'),
        outputPath: 'Job.Input.DetectedProperties.FileSize',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.DetectedProperties.FileSize', props);
    return resource.getResponseField('Job.Input.DetectedProperties.FileSize') as unknown as number;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Input.DetectedProperties.DurationMillis'),
        outputPath: 'Job.Input.DetectedProperties.DurationMillis',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Input.DetectedProperties.DurationMillis', props);
    return resource.getResponseField('Job.Input.DetectedProperties.DurationMillis') as unknown as number;
  }

}

export class ElasticTranscoderResponsesCreateJobJobOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Id'),
        outputPath: 'Job.Output.Id',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Id', props);
    return resource.getResponseField('Job.Output.Id') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Key'),
        outputPath: 'Job.Output.Key',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Key', props);
    return resource.getResponseField('Job.Output.Key') as unknown as string;
  }

  public get thumbnailPattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.ThumbnailPattern'),
        outputPath: 'Job.Output.ThumbnailPattern',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.ThumbnailPattern', props);
    return resource.getResponseField('Job.Output.ThumbnailPattern') as unknown as string;
  }

  public get thumbnailEncryption(): ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption {
    return new ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption(this.__scope, this.__resources, this.__input);
  }

  public get rotate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Rotate'),
        outputPath: 'Job.Output.Rotate',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Rotate', props);
    return resource.getResponseField('Job.Output.Rotate') as unknown as string;
  }

  public get presetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.PresetId'),
        outputPath: 'Job.Output.PresetId',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.PresetId', props);
    return resource.getResponseField('Job.Output.PresetId') as unknown as string;
  }

  public get segmentDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.SegmentDuration'),
        outputPath: 'Job.Output.SegmentDuration',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.SegmentDuration', props);
    return resource.getResponseField('Job.Output.SegmentDuration') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Status'),
        outputPath: 'Job.Output.Status',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Status', props);
    return resource.getResponseField('Job.Output.Status') as unknown as string;
  }

  public get statusDetail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.StatusDetail'),
        outputPath: 'Job.Output.StatusDetail',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.StatusDetail', props);
    return resource.getResponseField('Job.Output.StatusDetail') as unknown as string;
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Duration'),
        outputPath: 'Job.Output.Duration',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Duration', props);
    return resource.getResponseField('Job.Output.Duration') as unknown as number;
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Width'),
        outputPath: 'Job.Output.Width',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Width', props);
    return resource.getResponseField('Job.Output.Width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Height'),
        outputPath: 'Job.Output.Height',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Height', props);
    return resource.getResponseField('Job.Output.Height') as unknown as number;
  }

  public get frameRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.FrameRate'),
        outputPath: 'Job.Output.FrameRate',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.FrameRate', props);
    return resource.getResponseField('Job.Output.FrameRate') as unknown as string;
  }

  public get fileSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.FileSize'),
        outputPath: 'Job.Output.FileSize',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.FileSize', props);
    return resource.getResponseField('Job.Output.FileSize') as unknown as number;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.DurationMillis'),
        outputPath: 'Job.Output.DurationMillis',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.DurationMillis', props);
    return resource.getResponseField('Job.Output.DurationMillis') as unknown as number;
  }

  public get watermarks(): shapes.ElasticTranscoderJobWatermark[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Watermarks'),
        outputPath: 'Job.Output.Watermarks',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Watermarks', props);
    return resource.getResponseField('Job.Output.Watermarks') as unknown as shapes.ElasticTranscoderJobWatermark[];
  }

  public get albumArt(): ElasticTranscoderResponsesCreateJobJobOutputAlbumArt {
    return new ElasticTranscoderResponsesCreateJobJobOutputAlbumArt(this.__scope, this.__resources, this.__input);
  }

  public get composition(): shapes.ElasticTranscoderClip[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Composition'),
        outputPath: 'Job.Output.Composition',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Composition', props);
    return resource.getResponseField('Job.Output.Composition') as unknown as shapes.ElasticTranscoderClip[];
  }

  public get captions(): ElasticTranscoderResponsesCreateJobJobOutputCaptions {
    return new ElasticTranscoderResponsesCreateJobJobOutputCaptions(this.__scope, this.__resources, this.__input);
  }

  public get encryption(): ElasticTranscoderResponsesCreateJobJobOutputEncryption {
    return new ElasticTranscoderResponsesCreateJobJobOutputEncryption(this.__scope, this.__resources, this.__input);
  }

  public get appliedColorSpaceConversion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.AppliedColorSpaceConversion'),
        outputPath: 'Job.Output.AppliedColorSpaceConversion',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.AppliedColorSpaceConversion', props);
    return resource.getResponseField('Job.Output.AppliedColorSpaceConversion') as unknown as string;
  }

}

export class ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.ThumbnailEncryption.Mode'),
        outputPath: 'Job.Output.ThumbnailEncryption.Mode',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.ThumbnailEncryption.Mode', props);
    return resource.getResponseField('Job.Output.ThumbnailEncryption.Mode') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.ThumbnailEncryption.Key'),
        outputPath: 'Job.Output.ThumbnailEncryption.Key',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.ThumbnailEncryption.Key', props);
    return resource.getResponseField('Job.Output.ThumbnailEncryption.Key') as unknown as string;
  }

  public get keyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.ThumbnailEncryption.KeyMd5'),
        outputPath: 'Job.Output.ThumbnailEncryption.KeyMd5',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.ThumbnailEncryption.KeyMd5', props);
    return resource.getResponseField('Job.Output.ThumbnailEncryption.KeyMd5') as unknown as string;
  }

  public get initializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.ThumbnailEncryption.InitializationVector'),
        outputPath: 'Job.Output.ThumbnailEncryption.InitializationVector',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.ThumbnailEncryption.InitializationVector', props);
    return resource.getResponseField('Job.Output.ThumbnailEncryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderResponsesCreateJobJobOutputAlbumArt {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get mergePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.AlbumArt.MergePolicy'),
        outputPath: 'Job.Output.AlbumArt.MergePolicy',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.AlbumArt.MergePolicy', props);
    return resource.getResponseField('Job.Output.AlbumArt.MergePolicy') as unknown as string;
  }

  public get artwork(): shapes.ElasticTranscoderArtwork[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.AlbumArt.Artwork'),
        outputPath: 'Job.Output.AlbumArt.Artwork',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.AlbumArt.Artwork', props);
    return resource.getResponseField('Job.Output.AlbumArt.Artwork') as unknown as shapes.ElasticTranscoderArtwork[];
  }

}

export class ElasticTranscoderResponsesCreateJobJobOutputCaptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get mergePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Captions.MergePolicy'),
        outputPath: 'Job.Output.Captions.MergePolicy',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Captions.MergePolicy', props);
    return resource.getResponseField('Job.Output.Captions.MergePolicy') as unknown as string;
  }

  public get captionSources(): shapes.ElasticTranscoderCaptionSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Captions.CaptionSources'),
        outputPath: 'Job.Output.Captions.CaptionSources',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Captions.CaptionSources', props);
    return resource.getResponseField('Job.Output.Captions.CaptionSources') as unknown as shapes.ElasticTranscoderCaptionSource[];
  }

  public get captionFormats(): shapes.ElasticTranscoderCaptionFormat[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Captions.CaptionFormats'),
        outputPath: 'Job.Output.Captions.CaptionFormats',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Captions.CaptionFormats', props);
    return resource.getResponseField('Job.Output.Captions.CaptionFormats') as unknown as shapes.ElasticTranscoderCaptionFormat[];
  }

}

export class ElasticTranscoderResponsesCreateJobJobOutputEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Encryption.Mode'),
        outputPath: 'Job.Output.Encryption.Mode',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Encryption.Mode', props);
    return resource.getResponseField('Job.Output.Encryption.Mode') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Encryption.Key'),
        outputPath: 'Job.Output.Encryption.Key',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Encryption.Key', props);
    return resource.getResponseField('Job.Output.Encryption.Key') as unknown as string;
  }

  public get keyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Encryption.KeyMd5'),
        outputPath: 'Job.Output.Encryption.KeyMd5',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Encryption.KeyMd5', props);
    return resource.getResponseField('Job.Output.Encryption.KeyMd5') as unknown as string;
  }

  public get initializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Output.Encryption.InitializationVector'),
        outputPath: 'Job.Output.Encryption.InitializationVector',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Output.Encryption.InitializationVector', props);
    return resource.getResponseField('Job.Output.Encryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderResponsesCreateJobJobTiming {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreateJobRequest) {
  }

  public get submitTimeMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Timing.SubmitTimeMillis'),
        outputPath: 'Job.Timing.SubmitTimeMillis',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Timing.SubmitTimeMillis', props);
    return resource.getResponseField('Job.Timing.SubmitTimeMillis') as unknown as number;
  }

  public get startTimeMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Timing.StartTimeMillis'),
        outputPath: 'Job.Timing.StartTimeMillis',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Timing.StartTimeMillis', props);
    return resource.getResponseField('Job.Timing.StartTimeMillis') as unknown as number;
  }

  public get finishTimeMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreateJob.Job.Timing.FinishTimeMillis'),
        outputPath: 'Job.Timing.FinishTimeMillis',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Input: {
            Key: this.__input.input?.key,
            FrameRate: this.__input.input?.frameRate,
            Resolution: this.__input.input?.resolution,
            AspectRatio: this.__input.input?.aspectRatio,
            Interlaced: this.__input.input?.interlaced,
            Container: this.__input.input?.container,
            Encryption: {
              Mode: this.__input.input?.encryption?.mode,
              Key: this.__input.input?.encryption?.key,
              KeyMd5: this.__input.input?.encryption?.keyMd5,
              InitializationVector: this.__input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.__input.input?.timeSpan?.startTime,
              Duration: this.__input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.__input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.__input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.__input.input?.detectedProperties?.width,
              Height: this.__input.input?.detectedProperties?.height,
              FrameRate: this.__input.input?.detectedProperties?.frameRate,
              FileSize: this.__input.input?.detectedProperties?.fileSize,
              DurationMillis: this.__input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.__input.inputs,
          Output: {
            Key: this.__input.output?.key,
            ThumbnailPattern: this.__input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.__input.output?.thumbnailEncryption?.mode,
              Key: this.__input.output?.thumbnailEncryption?.key,
              KeyMd5: this.__input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.__input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.__input.output?.rotate,
            PresetId: this.__input.output?.presetId,
            SegmentDuration: this.__input.output?.segmentDuration,
            Watermarks: this.__input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.__input.output?.albumArt?.mergePolicy,
              Artwork: this.__input.output?.albumArt?.artwork,
            },
            Composition: this.__input.output?.composition,
            Captions: {
              MergePolicy: this.__input.output?.captions?.mergePolicy,
              CaptionSources: this.__input.output?.captions?.captionSources,
              CaptionFormats: this.__input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.__input.output?.encryption?.mode,
              Key: this.__input.output?.encryption?.key,
              KeyMd5: this.__input.output?.encryption?.keyMd5,
              InitializationVector: this.__input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.__input.outputs,
          OutputKeyPrefix: this.__input.outputKeyPrefix,
          Playlists: this.__input.playlists,
          UserMetadata: this.__input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Job.Timing.FinishTimeMillis', props);
    return resource.getResponseField('Job.Timing.FinishTimeMillis') as unknown as number;
  }

}

export class ElasticTranscoderResponsesCreatePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePipelineRequest) {
  }

  public get pipeline(): ElasticTranscoderResponsesCreatePipelinePipeline {
    return new ElasticTranscoderResponsesCreatePipelinePipeline(this.__scope, this.__resources, this.__input);
  }

  public get warnings(): shapes.ElasticTranscoderWarning[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as shapes.ElasticTranscoderWarning[];
  }

}

export class ElasticTranscoderResponsesCreatePipelinePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePipelineRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.Id'),
        outputPath: 'Pipeline.Id',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.Id', props);
    return resource.getResponseField('Pipeline.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.Arn'),
        outputPath: 'Pipeline.Arn',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.Arn', props);
    return resource.getResponseField('Pipeline.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.Name'),
        outputPath: 'Pipeline.Name',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.Name', props);
    return resource.getResponseField('Pipeline.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.Status'),
        outputPath: 'Pipeline.Status',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.Status', props);
    return resource.getResponseField('Pipeline.Status') as unknown as string;
  }

  public get inputBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.InputBucket'),
        outputPath: 'Pipeline.InputBucket',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.InputBucket', props);
    return resource.getResponseField('Pipeline.InputBucket') as unknown as string;
  }

  public get outputBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.OutputBucket'),
        outputPath: 'Pipeline.OutputBucket',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.OutputBucket', props);
    return resource.getResponseField('Pipeline.OutputBucket') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.Role'),
        outputPath: 'Pipeline.Role',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.Role', props);
    return resource.getResponseField('Pipeline.Role') as unknown as string;
  }

  public get awsKmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.AwsKmsKeyArn'),
        outputPath: 'Pipeline.AwsKmsKeyArn',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.AwsKmsKeyArn', props);
    return resource.getResponseField('Pipeline.AwsKmsKeyArn') as unknown as string;
  }

  public get notifications(): ElasticTranscoderResponsesCreatePipelinePipelineNotifications {
    return new ElasticTranscoderResponsesCreatePipelinePipelineNotifications(this.__scope, this.__resources, this.__input);
  }

  public get contentConfig(): ElasticTranscoderResponsesCreatePipelinePipelineContentConfig {
    return new ElasticTranscoderResponsesCreatePipelinePipelineContentConfig(this.__scope, this.__resources, this.__input);
  }

  public get thumbnailConfig(): ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig {
    return new ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesCreatePipelinePipelineNotifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePipelineRequest) {
  }

  public get progressing(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.Notifications.Progressing'),
        outputPath: 'Pipeline.Notifications.Progressing',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.Notifications.Progressing', props);
    return resource.getResponseField('Pipeline.Notifications.Progressing') as unknown as string;
  }

  public get completed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.Notifications.Completed'),
        outputPath: 'Pipeline.Notifications.Completed',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.Notifications.Completed', props);
    return resource.getResponseField('Pipeline.Notifications.Completed') as unknown as string;
  }

  public get warning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.Notifications.Warning'),
        outputPath: 'Pipeline.Notifications.Warning',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.Notifications.Warning', props);
    return resource.getResponseField('Pipeline.Notifications.Warning') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.Notifications.Error'),
        outputPath: 'Pipeline.Notifications.Error',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.Notifications.Error', props);
    return resource.getResponseField('Pipeline.Notifications.Error') as unknown as string;
  }

}

export class ElasticTranscoderResponsesCreatePipelinePipelineContentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePipelineRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.ContentConfig.Bucket'),
        outputPath: 'Pipeline.ContentConfig.Bucket',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.ContentConfig.Bucket', props);
    return resource.getResponseField('Pipeline.ContentConfig.Bucket') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.ContentConfig.StorageClass'),
        outputPath: 'Pipeline.ContentConfig.StorageClass',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.ContentConfig.StorageClass', props);
    return resource.getResponseField('Pipeline.ContentConfig.StorageClass') as unknown as string;
  }

  public get permissions(): shapes.ElasticTranscoderPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.ContentConfig.Permissions'),
        outputPath: 'Pipeline.ContentConfig.Permissions',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.ContentConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ContentConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePipelineRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.ThumbnailConfig.Bucket'),
        outputPath: 'Pipeline.ThumbnailConfig.Bucket',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.ThumbnailConfig.Bucket', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Bucket') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.ThumbnailConfig.StorageClass'),
        outputPath: 'Pipeline.ThumbnailConfig.StorageClass',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.ThumbnailConfig.StorageClass', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.StorageClass') as unknown as string;
  }

  public get permissions(): shapes.ElasticTranscoderPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePipeline.Pipeline.ThumbnailConfig.Permissions'),
        outputPath: 'Pipeline.ThumbnailConfig.Permissions',
        parameters: {
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.Pipeline.ThumbnailConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderResponsesCreatePreset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePresetRequest) {
  }

  public get preset(): ElasticTranscoderResponsesCreatePresetPreset {
    return new ElasticTranscoderResponsesCreatePresetPreset(this.__scope, this.__resources, this.__input);
  }

  public get warning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Warning'),
        outputPath: 'Warning',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Warning', props);
    return resource.getResponseField('Warning') as unknown as string;
  }

}

export class ElasticTranscoderResponsesCreatePresetPreset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePresetRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Id'),
        outputPath: 'Preset.Id',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Id', props);
    return resource.getResponseField('Preset.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Arn'),
        outputPath: 'Preset.Arn',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Arn', props);
    return resource.getResponseField('Preset.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Name'),
        outputPath: 'Preset.Name',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Name', props);
    return resource.getResponseField('Preset.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Description'),
        outputPath: 'Preset.Description',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Description', props);
    return resource.getResponseField('Preset.Description') as unknown as string;
  }

  public get container(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Container'),
        outputPath: 'Preset.Container',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Container', props);
    return resource.getResponseField('Preset.Container') as unknown as string;
  }

  public get audio(): ElasticTranscoderResponsesCreatePresetPresetAudio {
    return new ElasticTranscoderResponsesCreatePresetPresetAudio(this.__scope, this.__resources, this.__input);
  }

  public get video(): ElasticTranscoderResponsesCreatePresetPresetVideo {
    return new ElasticTranscoderResponsesCreatePresetPresetVideo(this.__scope, this.__resources, this.__input);
  }

  public get thumbnails(): ElasticTranscoderResponsesCreatePresetPresetThumbnails {
    return new ElasticTranscoderResponsesCreatePresetPresetThumbnails(this.__scope, this.__resources, this.__input);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Type'),
        outputPath: 'Preset.Type',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Type', props);
    return resource.getResponseField('Preset.Type') as unknown as string;
  }

}

export class ElasticTranscoderResponsesCreatePresetPresetAudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePresetRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Audio.Codec'),
        outputPath: 'Preset.Audio.Codec',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Audio.Codec', props);
    return resource.getResponseField('Preset.Audio.Codec') as unknown as string;
  }

  public get sampleRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Audio.SampleRate'),
        outputPath: 'Preset.Audio.SampleRate',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Audio.SampleRate', props);
    return resource.getResponseField('Preset.Audio.SampleRate') as unknown as string;
  }

  public get bitRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Audio.BitRate'),
        outputPath: 'Preset.Audio.BitRate',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Audio.BitRate', props);
    return resource.getResponseField('Preset.Audio.BitRate') as unknown as string;
  }

  public get channels(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Audio.Channels'),
        outputPath: 'Preset.Audio.Channels',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Audio.Channels', props);
    return resource.getResponseField('Preset.Audio.Channels') as unknown as string;
  }

  public get audioPackingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Audio.AudioPackingMode'),
        outputPath: 'Preset.Audio.AudioPackingMode',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Audio.AudioPackingMode', props);
    return resource.getResponseField('Preset.Audio.AudioPackingMode') as unknown as string;
  }

  public get codecOptions(): ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions {
    return new ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePresetRequest) {
  }

  public get profile(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Audio.CodecOptions.Profile'),
        outputPath: 'Preset.Audio.CodecOptions.Profile',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Audio.CodecOptions.Profile', props);
    return resource.getResponseField('Preset.Audio.CodecOptions.Profile') as unknown as string;
  }

  public get bitDepth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Audio.CodecOptions.BitDepth'),
        outputPath: 'Preset.Audio.CodecOptions.BitDepth',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Audio.CodecOptions.BitDepth', props);
    return resource.getResponseField('Preset.Audio.CodecOptions.BitDepth') as unknown as string;
  }

  public get bitOrder(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Audio.CodecOptions.BitOrder'),
        outputPath: 'Preset.Audio.CodecOptions.BitOrder',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Audio.CodecOptions.BitOrder', props);
    return resource.getResponseField('Preset.Audio.CodecOptions.BitOrder') as unknown as string;
  }

  public get signed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Audio.CodecOptions.Signed'),
        outputPath: 'Preset.Audio.CodecOptions.Signed',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Audio.CodecOptions.Signed', props);
    return resource.getResponseField('Preset.Audio.CodecOptions.Signed') as unknown as string;
  }

}

export class ElasticTranscoderResponsesCreatePresetPresetVideo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePresetRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.Codec'),
        outputPath: 'Preset.Video.Codec',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.Codec', props);
    return resource.getResponseField('Preset.Video.Codec') as unknown as string;
  }

  public get codecOptions(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.CodecOptions'),
        outputPath: 'Preset.Video.CodecOptions',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.CodecOptions', props);
    return resource.getResponseField('Preset.Video.CodecOptions') as unknown as Record<string, string>;
  }

  public get keyframesMaxDist(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.KeyframesMaxDist'),
        outputPath: 'Preset.Video.KeyframesMaxDist',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.KeyframesMaxDist', props);
    return resource.getResponseField('Preset.Video.KeyframesMaxDist') as unknown as string;
  }

  public get fixedGop(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.FixedGOP'),
        outputPath: 'Preset.Video.FixedGOP',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.FixedGOP', props);
    return resource.getResponseField('Preset.Video.FixedGOP') as unknown as string;
  }

  public get bitRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.BitRate'),
        outputPath: 'Preset.Video.BitRate',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.BitRate', props);
    return resource.getResponseField('Preset.Video.BitRate') as unknown as string;
  }

  public get frameRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.FrameRate'),
        outputPath: 'Preset.Video.FrameRate',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.FrameRate', props);
    return resource.getResponseField('Preset.Video.FrameRate') as unknown as string;
  }

  public get maxFrameRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.MaxFrameRate'),
        outputPath: 'Preset.Video.MaxFrameRate',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.MaxFrameRate', props);
    return resource.getResponseField('Preset.Video.MaxFrameRate') as unknown as string;
  }

  public get resolution(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.Resolution'),
        outputPath: 'Preset.Video.Resolution',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.Resolution', props);
    return resource.getResponseField('Preset.Video.Resolution') as unknown as string;
  }

  public get aspectRatio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.AspectRatio'),
        outputPath: 'Preset.Video.AspectRatio',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.AspectRatio', props);
    return resource.getResponseField('Preset.Video.AspectRatio') as unknown as string;
  }

  public get maxWidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.MaxWidth'),
        outputPath: 'Preset.Video.MaxWidth',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.MaxWidth', props);
    return resource.getResponseField('Preset.Video.MaxWidth') as unknown as string;
  }

  public get maxHeight(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.MaxHeight'),
        outputPath: 'Preset.Video.MaxHeight',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.MaxHeight', props);
    return resource.getResponseField('Preset.Video.MaxHeight') as unknown as string;
  }

  public get displayAspectRatio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.DisplayAspectRatio'),
        outputPath: 'Preset.Video.DisplayAspectRatio',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.DisplayAspectRatio', props);
    return resource.getResponseField('Preset.Video.DisplayAspectRatio') as unknown as string;
  }

  public get sizingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.SizingPolicy'),
        outputPath: 'Preset.Video.SizingPolicy',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.SizingPolicy', props);
    return resource.getResponseField('Preset.Video.SizingPolicy') as unknown as string;
  }

  public get paddingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.PaddingPolicy'),
        outputPath: 'Preset.Video.PaddingPolicy',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.PaddingPolicy', props);
    return resource.getResponseField('Preset.Video.PaddingPolicy') as unknown as string;
  }

  public get watermarks(): shapes.ElasticTranscoderPresetWatermark[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Video.Watermarks'),
        outputPath: 'Preset.Video.Watermarks',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Video.Watermarks', props);
    return resource.getResponseField('Preset.Video.Watermarks') as unknown as shapes.ElasticTranscoderPresetWatermark[];
  }

}

export class ElasticTranscoderResponsesCreatePresetPresetThumbnails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderCreatePresetRequest) {
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Thumbnails.Format'),
        outputPath: 'Preset.Thumbnails.Format',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Thumbnails.Format', props);
    return resource.getResponseField('Preset.Thumbnails.Format') as unknown as string;
  }

  public get interval(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Thumbnails.Interval'),
        outputPath: 'Preset.Thumbnails.Interval',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Thumbnails.Interval', props);
    return resource.getResponseField('Preset.Thumbnails.Interval') as unknown as string;
  }

  public get resolution(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Thumbnails.Resolution'),
        outputPath: 'Preset.Thumbnails.Resolution',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Thumbnails.Resolution', props);
    return resource.getResponseField('Preset.Thumbnails.Resolution') as unknown as string;
  }

  public get aspectRatio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Thumbnails.AspectRatio'),
        outputPath: 'Preset.Thumbnails.AspectRatio',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Thumbnails.AspectRatio', props);
    return resource.getResponseField('Preset.Thumbnails.AspectRatio') as unknown as string;
  }

  public get maxWidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Thumbnails.MaxWidth'),
        outputPath: 'Preset.Thumbnails.MaxWidth',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Thumbnails.MaxWidth', props);
    return resource.getResponseField('Preset.Thumbnails.MaxWidth') as unknown as string;
  }

  public get maxHeight(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Thumbnails.MaxHeight'),
        outputPath: 'Preset.Thumbnails.MaxHeight',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Thumbnails.MaxHeight', props);
    return resource.getResponseField('Preset.Thumbnails.MaxHeight') as unknown as string;
  }

  public get sizingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Thumbnails.SizingPolicy'),
        outputPath: 'Preset.Thumbnails.SizingPolicy',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Thumbnails.SizingPolicy', props);
    return resource.getResponseField('Preset.Thumbnails.SizingPolicy') as unknown as string;
  }

  public get paddingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.CreatePreset.Preset.Thumbnails.PaddingPolicy'),
        outputPath: 'Preset.Thumbnails.PaddingPolicy',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Container: this.__input.container,
          Video: {
            Codec: this.__input.video?.codec,
            CodecOptions: this.__input.video?.codecOptions,
            KeyframesMaxDist: this.__input.video?.keyframesMaxDist,
            FixedGOP: this.__input.video?.fixedGop,
            BitRate: this.__input.video?.bitRate,
            FrameRate: this.__input.video?.frameRate,
            MaxFrameRate: this.__input.video?.maxFrameRate,
            Resolution: this.__input.video?.resolution,
            AspectRatio: this.__input.video?.aspectRatio,
            MaxWidth: this.__input.video?.maxWidth,
            MaxHeight: this.__input.video?.maxHeight,
            DisplayAspectRatio: this.__input.video?.displayAspectRatio,
            SizingPolicy: this.__input.video?.sizingPolicy,
            PaddingPolicy: this.__input.video?.paddingPolicy,
            Watermarks: this.__input.video?.watermarks,
          },
          Audio: {
            Codec: this.__input.audio?.codec,
            SampleRate: this.__input.audio?.sampleRate,
            BitRate: this.__input.audio?.bitRate,
            Channels: this.__input.audio?.channels,
            AudioPackingMode: this.__input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.__input.audio?.codecOptions?.profile,
              BitDepth: this.__input.audio?.codecOptions?.bitDepth,
              BitOrder: this.__input.audio?.codecOptions?.bitOrder,
              Signed: this.__input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.__input.thumbnails?.format,
            Interval: this.__input.thumbnails?.interval,
            Resolution: this.__input.thumbnails?.resolution,
            AspectRatio: this.__input.thumbnails?.aspectRatio,
            MaxWidth: this.__input.thumbnails?.maxWidth,
            MaxHeight: this.__input.thumbnails?.maxHeight,
            SizingPolicy: this.__input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.__input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePreset.Preset.Thumbnails.PaddingPolicy', props);
    return resource.getResponseField('Preset.Thumbnails.PaddingPolicy') as unknown as string;
  }

}

export class ElasticTranscoderResponsesListJobsByPipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderListJobsByPipelineRequest) {
  }

  public get jobs(): shapes.ElasticTranscoderJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobsByPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ListJobsByPipeline.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Ascending: this.__input.ascending,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobsByPipeline.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.ElasticTranscoderJob[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobsByPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ListJobsByPipeline.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          PipelineId: this.__input.pipelineId,
          Ascending: this.__input.ascending,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobsByPipeline.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ElasticTranscoderResponsesListJobsByStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderListJobsByStatusRequest) {
  }

  public get jobs(): shapes.ElasticTranscoderJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobsByStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ListJobsByStatus.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          Status: this.__input.status,
          Ascending: this.__input.ascending,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobsByStatus.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.ElasticTranscoderJob[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobsByStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ListJobsByStatus.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          Status: this.__input.status,
          Ascending: this.__input.ascending,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobsByStatus.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ElasticTranscoderResponsesListPipelines {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderListPipelinesRequest) {
  }

  public get pipelines(): shapes.ElasticTranscoderPipeline[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelines',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ListPipelines.Pipelines'),
        outputPath: 'Pipelines',
        parameters: {
          Ascending: this.__input.ascending,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelines.Pipelines', props);
    return resource.getResponseField('Pipelines') as unknown as shapes.ElasticTranscoderPipeline[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelines',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ListPipelines.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          Ascending: this.__input.ascending,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelines.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ElasticTranscoderResponsesListPresets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderListPresetsRequest) {
  }

  public get presets(): shapes.ElasticTranscoderPreset[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPresets',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ListPresets.Presets'),
        outputPath: 'Presets',
        parameters: {
          Ascending: this.__input.ascending,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPresets.Presets', props);
    return resource.getResponseField('Presets') as unknown as shapes.ElasticTranscoderPreset[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPresets',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ListPresets.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          Ascending: this.__input.ascending,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPresets.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ElasticTranscoderResponsesReadJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get job(): ElasticTranscoderResponsesReadJobJob {
    return new ElasticTranscoderResponsesReadJobJob(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesReadJobJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Id'),
        outputPath: 'Job.Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Id', props);
    return resource.getResponseField('Job.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Arn'),
        outputPath: 'Job.Arn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Arn', props);
    return resource.getResponseField('Job.Arn') as unknown as string;
  }

  public get pipelineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.PipelineId'),
        outputPath: 'Job.PipelineId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.PipelineId', props);
    return resource.getResponseField('Job.PipelineId') as unknown as string;
  }

  public get input(): ElasticTranscoderResponsesReadJobJobInput {
    return new ElasticTranscoderResponsesReadJobJobInput(this.__scope, this.__resources, this.__input);
  }

  public get inputs(): shapes.ElasticTranscoderJobInput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Inputs'),
        outputPath: 'Job.Inputs',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Inputs', props);
    return resource.getResponseField('Job.Inputs') as unknown as shapes.ElasticTranscoderJobInput[];
  }

  public get output(): ElasticTranscoderResponsesReadJobJobOutput {
    return new ElasticTranscoderResponsesReadJobJobOutput(this.__scope, this.__resources, this.__input);
  }

  public get outputs(): shapes.ElasticTranscoderJobOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Outputs'),
        outputPath: 'Job.Outputs',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Outputs', props);
    return resource.getResponseField('Job.Outputs') as unknown as shapes.ElasticTranscoderJobOutput[];
  }

  public get outputKeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.OutputKeyPrefix'),
        outputPath: 'Job.OutputKeyPrefix',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.OutputKeyPrefix', props);
    return resource.getResponseField('Job.OutputKeyPrefix') as unknown as string;
  }

  public get playlists(): shapes.ElasticTranscoderPlaylist[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Playlists'),
        outputPath: 'Job.Playlists',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Playlists', props);
    return resource.getResponseField('Job.Playlists') as unknown as shapes.ElasticTranscoderPlaylist[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Status'),
        outputPath: 'Job.Status',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Status', props);
    return resource.getResponseField('Job.Status') as unknown as string;
  }

  public get userMetadata(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.UserMetadata'),
        outputPath: 'Job.UserMetadata',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.UserMetadata', props);
    return resource.getResponseField('Job.UserMetadata') as unknown as Record<string, string>;
  }

  public get timing(): ElasticTranscoderResponsesReadJobJobTiming {
    return new ElasticTranscoderResponsesReadJobJobTiming(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesReadJobJobInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.Key'),
        outputPath: 'Job.Input.Key',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.Key', props);
    return resource.getResponseField('Job.Input.Key') as unknown as string;
  }

  public get frameRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.FrameRate'),
        outputPath: 'Job.Input.FrameRate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.FrameRate', props);
    return resource.getResponseField('Job.Input.FrameRate') as unknown as string;
  }

  public get resolution(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.Resolution'),
        outputPath: 'Job.Input.Resolution',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.Resolution', props);
    return resource.getResponseField('Job.Input.Resolution') as unknown as string;
  }

  public get aspectRatio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.AspectRatio'),
        outputPath: 'Job.Input.AspectRatio',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.AspectRatio', props);
    return resource.getResponseField('Job.Input.AspectRatio') as unknown as string;
  }

  public get interlaced(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.Interlaced'),
        outputPath: 'Job.Input.Interlaced',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.Interlaced', props);
    return resource.getResponseField('Job.Input.Interlaced') as unknown as string;
  }

  public get container(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.Container'),
        outputPath: 'Job.Input.Container',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.Container', props);
    return resource.getResponseField('Job.Input.Container') as unknown as string;
  }

  public get encryption(): ElasticTranscoderResponsesReadJobJobInputEncryption {
    return new ElasticTranscoderResponsesReadJobJobInputEncryption(this.__scope, this.__resources, this.__input);
  }

  public get timeSpan(): ElasticTranscoderResponsesReadJobJobInputTimeSpan {
    return new ElasticTranscoderResponsesReadJobJobInputTimeSpan(this.__scope, this.__resources, this.__input);
  }

  public get inputCaptions(): ElasticTranscoderResponsesReadJobJobInputInputCaptions {
    return new ElasticTranscoderResponsesReadJobJobInputInputCaptions(this.__scope, this.__resources, this.__input);
  }

  public get detectedProperties(): ElasticTranscoderResponsesReadJobJobInputDetectedProperties {
    return new ElasticTranscoderResponsesReadJobJobInputDetectedProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesReadJobJobInputEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.Encryption.Mode'),
        outputPath: 'Job.Input.Encryption.Mode',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.Encryption.Mode', props);
    return resource.getResponseField('Job.Input.Encryption.Mode') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.Encryption.Key'),
        outputPath: 'Job.Input.Encryption.Key',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.Encryption.Key', props);
    return resource.getResponseField('Job.Input.Encryption.Key') as unknown as string;
  }

  public get keyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.Encryption.KeyMd5'),
        outputPath: 'Job.Input.Encryption.KeyMd5',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.Encryption.KeyMd5', props);
    return resource.getResponseField('Job.Input.Encryption.KeyMd5') as unknown as string;
  }

  public get initializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.Encryption.InitializationVector'),
        outputPath: 'Job.Input.Encryption.InitializationVector',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.Encryption.InitializationVector', props);
    return resource.getResponseField('Job.Input.Encryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderResponsesReadJobJobInputTimeSpan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.TimeSpan.StartTime'),
        outputPath: 'Job.Input.TimeSpan.StartTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.TimeSpan.StartTime', props);
    return resource.getResponseField('Job.Input.TimeSpan.StartTime') as unknown as string;
  }

  public get duration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.TimeSpan.Duration'),
        outputPath: 'Job.Input.TimeSpan.Duration',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.TimeSpan.Duration', props);
    return resource.getResponseField('Job.Input.TimeSpan.Duration') as unknown as string;
  }

}

export class ElasticTranscoderResponsesReadJobJobInputInputCaptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get mergePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.InputCaptions.MergePolicy'),
        outputPath: 'Job.Input.InputCaptions.MergePolicy',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.InputCaptions.MergePolicy', props);
    return resource.getResponseField('Job.Input.InputCaptions.MergePolicy') as unknown as string;
  }

  public get captionSources(): shapes.ElasticTranscoderCaptionSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.InputCaptions.CaptionSources'),
        outputPath: 'Job.Input.InputCaptions.CaptionSources',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.InputCaptions.CaptionSources', props);
    return resource.getResponseField('Job.Input.InputCaptions.CaptionSources') as unknown as shapes.ElasticTranscoderCaptionSource[];
  }

}

export class ElasticTranscoderResponsesReadJobJobInputDetectedProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.DetectedProperties.Width'),
        outputPath: 'Job.Input.DetectedProperties.Width',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.DetectedProperties.Width', props);
    return resource.getResponseField('Job.Input.DetectedProperties.Width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.DetectedProperties.Height'),
        outputPath: 'Job.Input.DetectedProperties.Height',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.DetectedProperties.Height', props);
    return resource.getResponseField('Job.Input.DetectedProperties.Height') as unknown as number;
  }

  public get frameRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.DetectedProperties.FrameRate'),
        outputPath: 'Job.Input.DetectedProperties.FrameRate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.DetectedProperties.FrameRate', props);
    return resource.getResponseField('Job.Input.DetectedProperties.FrameRate') as unknown as string;
  }

  public get fileSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.DetectedProperties.FileSize'),
        outputPath: 'Job.Input.DetectedProperties.FileSize',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.DetectedProperties.FileSize', props);
    return resource.getResponseField('Job.Input.DetectedProperties.FileSize') as unknown as number;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Input.DetectedProperties.DurationMillis'),
        outputPath: 'Job.Input.DetectedProperties.DurationMillis',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Input.DetectedProperties.DurationMillis', props);
    return resource.getResponseField('Job.Input.DetectedProperties.DurationMillis') as unknown as number;
  }

}

export class ElasticTranscoderResponsesReadJobJobOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Id'),
        outputPath: 'Job.Output.Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Id', props);
    return resource.getResponseField('Job.Output.Id') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Key'),
        outputPath: 'Job.Output.Key',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Key', props);
    return resource.getResponseField('Job.Output.Key') as unknown as string;
  }

  public get thumbnailPattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.ThumbnailPattern'),
        outputPath: 'Job.Output.ThumbnailPattern',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.ThumbnailPattern', props);
    return resource.getResponseField('Job.Output.ThumbnailPattern') as unknown as string;
  }

  public get thumbnailEncryption(): ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption {
    return new ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption(this.__scope, this.__resources, this.__input);
  }

  public get rotate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Rotate'),
        outputPath: 'Job.Output.Rotate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Rotate', props);
    return resource.getResponseField('Job.Output.Rotate') as unknown as string;
  }

  public get presetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.PresetId'),
        outputPath: 'Job.Output.PresetId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.PresetId', props);
    return resource.getResponseField('Job.Output.PresetId') as unknown as string;
  }

  public get segmentDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.SegmentDuration'),
        outputPath: 'Job.Output.SegmentDuration',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.SegmentDuration', props);
    return resource.getResponseField('Job.Output.SegmentDuration') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Status'),
        outputPath: 'Job.Output.Status',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Status', props);
    return resource.getResponseField('Job.Output.Status') as unknown as string;
  }

  public get statusDetail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.StatusDetail'),
        outputPath: 'Job.Output.StatusDetail',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.StatusDetail', props);
    return resource.getResponseField('Job.Output.StatusDetail') as unknown as string;
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Duration'),
        outputPath: 'Job.Output.Duration',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Duration', props);
    return resource.getResponseField('Job.Output.Duration') as unknown as number;
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Width'),
        outputPath: 'Job.Output.Width',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Width', props);
    return resource.getResponseField('Job.Output.Width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Height'),
        outputPath: 'Job.Output.Height',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Height', props);
    return resource.getResponseField('Job.Output.Height') as unknown as number;
  }

  public get frameRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.FrameRate'),
        outputPath: 'Job.Output.FrameRate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.FrameRate', props);
    return resource.getResponseField('Job.Output.FrameRate') as unknown as string;
  }

  public get fileSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.FileSize'),
        outputPath: 'Job.Output.FileSize',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.FileSize', props);
    return resource.getResponseField('Job.Output.FileSize') as unknown as number;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.DurationMillis'),
        outputPath: 'Job.Output.DurationMillis',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.DurationMillis', props);
    return resource.getResponseField('Job.Output.DurationMillis') as unknown as number;
  }

  public get watermarks(): shapes.ElasticTranscoderJobWatermark[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Watermarks'),
        outputPath: 'Job.Output.Watermarks',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Watermarks', props);
    return resource.getResponseField('Job.Output.Watermarks') as unknown as shapes.ElasticTranscoderJobWatermark[];
  }

  public get albumArt(): ElasticTranscoderResponsesReadJobJobOutputAlbumArt {
    return new ElasticTranscoderResponsesReadJobJobOutputAlbumArt(this.__scope, this.__resources, this.__input);
  }

  public get composition(): shapes.ElasticTranscoderClip[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Composition'),
        outputPath: 'Job.Output.Composition',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Composition', props);
    return resource.getResponseField('Job.Output.Composition') as unknown as shapes.ElasticTranscoderClip[];
  }

  public get captions(): ElasticTranscoderResponsesReadJobJobOutputCaptions {
    return new ElasticTranscoderResponsesReadJobJobOutputCaptions(this.__scope, this.__resources, this.__input);
  }

  public get encryption(): ElasticTranscoderResponsesReadJobJobOutputEncryption {
    return new ElasticTranscoderResponsesReadJobJobOutputEncryption(this.__scope, this.__resources, this.__input);
  }

  public get appliedColorSpaceConversion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.AppliedColorSpaceConversion'),
        outputPath: 'Job.Output.AppliedColorSpaceConversion',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.AppliedColorSpaceConversion', props);
    return resource.getResponseField('Job.Output.AppliedColorSpaceConversion') as unknown as string;
  }

}

export class ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.ThumbnailEncryption.Mode'),
        outputPath: 'Job.Output.ThumbnailEncryption.Mode',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.ThumbnailEncryption.Mode', props);
    return resource.getResponseField('Job.Output.ThumbnailEncryption.Mode') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.ThumbnailEncryption.Key'),
        outputPath: 'Job.Output.ThumbnailEncryption.Key',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.ThumbnailEncryption.Key', props);
    return resource.getResponseField('Job.Output.ThumbnailEncryption.Key') as unknown as string;
  }

  public get keyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.ThumbnailEncryption.KeyMd5'),
        outputPath: 'Job.Output.ThumbnailEncryption.KeyMd5',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.ThumbnailEncryption.KeyMd5', props);
    return resource.getResponseField('Job.Output.ThumbnailEncryption.KeyMd5') as unknown as string;
  }

  public get initializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.ThumbnailEncryption.InitializationVector'),
        outputPath: 'Job.Output.ThumbnailEncryption.InitializationVector',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.ThumbnailEncryption.InitializationVector', props);
    return resource.getResponseField('Job.Output.ThumbnailEncryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderResponsesReadJobJobOutputAlbumArt {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get mergePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.AlbumArt.MergePolicy'),
        outputPath: 'Job.Output.AlbumArt.MergePolicy',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.AlbumArt.MergePolicy', props);
    return resource.getResponseField('Job.Output.AlbumArt.MergePolicy') as unknown as string;
  }

  public get artwork(): shapes.ElasticTranscoderArtwork[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.AlbumArt.Artwork'),
        outputPath: 'Job.Output.AlbumArt.Artwork',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.AlbumArt.Artwork', props);
    return resource.getResponseField('Job.Output.AlbumArt.Artwork') as unknown as shapes.ElasticTranscoderArtwork[];
  }

}

export class ElasticTranscoderResponsesReadJobJobOutputCaptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get mergePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Captions.MergePolicy'),
        outputPath: 'Job.Output.Captions.MergePolicy',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Captions.MergePolicy', props);
    return resource.getResponseField('Job.Output.Captions.MergePolicy') as unknown as string;
  }

  public get captionSources(): shapes.ElasticTranscoderCaptionSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Captions.CaptionSources'),
        outputPath: 'Job.Output.Captions.CaptionSources',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Captions.CaptionSources', props);
    return resource.getResponseField('Job.Output.Captions.CaptionSources') as unknown as shapes.ElasticTranscoderCaptionSource[];
  }

  public get captionFormats(): shapes.ElasticTranscoderCaptionFormat[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Captions.CaptionFormats'),
        outputPath: 'Job.Output.Captions.CaptionFormats',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Captions.CaptionFormats', props);
    return resource.getResponseField('Job.Output.Captions.CaptionFormats') as unknown as shapes.ElasticTranscoderCaptionFormat[];
  }

}

export class ElasticTranscoderResponsesReadJobJobOutputEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Encryption.Mode'),
        outputPath: 'Job.Output.Encryption.Mode',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Encryption.Mode', props);
    return resource.getResponseField('Job.Output.Encryption.Mode') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Encryption.Key'),
        outputPath: 'Job.Output.Encryption.Key',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Encryption.Key', props);
    return resource.getResponseField('Job.Output.Encryption.Key') as unknown as string;
  }

  public get keyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Encryption.KeyMd5'),
        outputPath: 'Job.Output.Encryption.KeyMd5',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Encryption.KeyMd5', props);
    return resource.getResponseField('Job.Output.Encryption.KeyMd5') as unknown as string;
  }

  public get initializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Output.Encryption.InitializationVector'),
        outputPath: 'Job.Output.Encryption.InitializationVector',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Output.Encryption.InitializationVector', props);
    return resource.getResponseField('Job.Output.Encryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderResponsesReadJobJobTiming {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadJobRequest) {
  }

  public get submitTimeMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Timing.SubmitTimeMillis'),
        outputPath: 'Job.Timing.SubmitTimeMillis',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Timing.SubmitTimeMillis', props);
    return resource.getResponseField('Job.Timing.SubmitTimeMillis') as unknown as number;
  }

  public get startTimeMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Timing.StartTimeMillis'),
        outputPath: 'Job.Timing.StartTimeMillis',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Timing.StartTimeMillis', props);
    return resource.getResponseField('Job.Timing.StartTimeMillis') as unknown as number;
  }

  public get finishTimeMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readJob',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadJob.Job.Timing.FinishTimeMillis'),
        outputPath: 'Job.Timing.FinishTimeMillis',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadJob.Job.Timing.FinishTimeMillis', props);
    return resource.getResponseField('Job.Timing.FinishTimeMillis') as unknown as number;
  }

}

export class ElasticTranscoderResponsesReadPipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPipelineRequest) {
  }

  public get pipeline(): ElasticTranscoderResponsesReadPipelinePipeline {
    return new ElasticTranscoderResponsesReadPipelinePipeline(this.__scope, this.__resources, this.__input);
  }

  public get warnings(): shapes.ElasticTranscoderWarning[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as shapes.ElasticTranscoderWarning[];
  }

}

export class ElasticTranscoderResponsesReadPipelinePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPipelineRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.Id'),
        outputPath: 'Pipeline.Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.Id', props);
    return resource.getResponseField('Pipeline.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.Arn'),
        outputPath: 'Pipeline.Arn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.Arn', props);
    return resource.getResponseField('Pipeline.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.Name'),
        outputPath: 'Pipeline.Name',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.Name', props);
    return resource.getResponseField('Pipeline.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.Status'),
        outputPath: 'Pipeline.Status',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.Status', props);
    return resource.getResponseField('Pipeline.Status') as unknown as string;
  }

  public get inputBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.InputBucket'),
        outputPath: 'Pipeline.InputBucket',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.InputBucket', props);
    return resource.getResponseField('Pipeline.InputBucket') as unknown as string;
  }

  public get outputBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.OutputBucket'),
        outputPath: 'Pipeline.OutputBucket',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.OutputBucket', props);
    return resource.getResponseField('Pipeline.OutputBucket') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.Role'),
        outputPath: 'Pipeline.Role',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.Role', props);
    return resource.getResponseField('Pipeline.Role') as unknown as string;
  }

  public get awsKmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.AwsKmsKeyArn'),
        outputPath: 'Pipeline.AwsKmsKeyArn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.AwsKmsKeyArn', props);
    return resource.getResponseField('Pipeline.AwsKmsKeyArn') as unknown as string;
  }

  public get notifications(): ElasticTranscoderResponsesReadPipelinePipelineNotifications {
    return new ElasticTranscoderResponsesReadPipelinePipelineNotifications(this.__scope, this.__resources, this.__input);
  }

  public get contentConfig(): ElasticTranscoderResponsesReadPipelinePipelineContentConfig {
    return new ElasticTranscoderResponsesReadPipelinePipelineContentConfig(this.__scope, this.__resources, this.__input);
  }

  public get thumbnailConfig(): ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig {
    return new ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesReadPipelinePipelineNotifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPipelineRequest) {
  }

  public get progressing(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.Notifications.Progressing'),
        outputPath: 'Pipeline.Notifications.Progressing',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.Notifications.Progressing', props);
    return resource.getResponseField('Pipeline.Notifications.Progressing') as unknown as string;
  }

  public get completed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.Notifications.Completed'),
        outputPath: 'Pipeline.Notifications.Completed',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.Notifications.Completed', props);
    return resource.getResponseField('Pipeline.Notifications.Completed') as unknown as string;
  }

  public get warning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.Notifications.Warning'),
        outputPath: 'Pipeline.Notifications.Warning',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.Notifications.Warning', props);
    return resource.getResponseField('Pipeline.Notifications.Warning') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.Notifications.Error'),
        outputPath: 'Pipeline.Notifications.Error',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.Notifications.Error', props);
    return resource.getResponseField('Pipeline.Notifications.Error') as unknown as string;
  }

}

export class ElasticTranscoderResponsesReadPipelinePipelineContentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPipelineRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.ContentConfig.Bucket'),
        outputPath: 'Pipeline.ContentConfig.Bucket',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.ContentConfig.Bucket', props);
    return resource.getResponseField('Pipeline.ContentConfig.Bucket') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.ContentConfig.StorageClass'),
        outputPath: 'Pipeline.ContentConfig.StorageClass',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.ContentConfig.StorageClass', props);
    return resource.getResponseField('Pipeline.ContentConfig.StorageClass') as unknown as string;
  }

  public get permissions(): shapes.ElasticTranscoderPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.ContentConfig.Permissions'),
        outputPath: 'Pipeline.ContentConfig.Permissions',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.ContentConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ContentConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPipelineRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.ThumbnailConfig.Bucket'),
        outputPath: 'Pipeline.ThumbnailConfig.Bucket',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.ThumbnailConfig.Bucket', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Bucket') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.ThumbnailConfig.StorageClass'),
        outputPath: 'Pipeline.ThumbnailConfig.StorageClass',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.ThumbnailConfig.StorageClass', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.StorageClass') as unknown as string;
  }

  public get permissions(): shapes.ElasticTranscoderPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPipeline.Pipeline.ThumbnailConfig.Permissions'),
        outputPath: 'Pipeline.ThumbnailConfig.Permissions',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPipeline.Pipeline.ThumbnailConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderResponsesReadPreset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPresetRequest) {
  }

  public get preset(): ElasticTranscoderResponsesReadPresetPreset {
    return new ElasticTranscoderResponsesReadPresetPreset(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesReadPresetPreset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPresetRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Id'),
        outputPath: 'Preset.Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Id', props);
    return resource.getResponseField('Preset.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Arn'),
        outputPath: 'Preset.Arn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Arn', props);
    return resource.getResponseField('Preset.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Name'),
        outputPath: 'Preset.Name',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Name', props);
    return resource.getResponseField('Preset.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Description'),
        outputPath: 'Preset.Description',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Description', props);
    return resource.getResponseField('Preset.Description') as unknown as string;
  }

  public get container(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Container'),
        outputPath: 'Preset.Container',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Container', props);
    return resource.getResponseField('Preset.Container') as unknown as string;
  }

  public get audio(): ElasticTranscoderResponsesReadPresetPresetAudio {
    return new ElasticTranscoderResponsesReadPresetPresetAudio(this.__scope, this.__resources, this.__input);
  }

  public get video(): ElasticTranscoderResponsesReadPresetPresetVideo {
    return new ElasticTranscoderResponsesReadPresetPresetVideo(this.__scope, this.__resources, this.__input);
  }

  public get thumbnails(): ElasticTranscoderResponsesReadPresetPresetThumbnails {
    return new ElasticTranscoderResponsesReadPresetPresetThumbnails(this.__scope, this.__resources, this.__input);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Type'),
        outputPath: 'Preset.Type',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Type', props);
    return resource.getResponseField('Preset.Type') as unknown as string;
  }

}

export class ElasticTranscoderResponsesReadPresetPresetAudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPresetRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Audio.Codec'),
        outputPath: 'Preset.Audio.Codec',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Audio.Codec', props);
    return resource.getResponseField('Preset.Audio.Codec') as unknown as string;
  }

  public get sampleRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Audio.SampleRate'),
        outputPath: 'Preset.Audio.SampleRate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Audio.SampleRate', props);
    return resource.getResponseField('Preset.Audio.SampleRate') as unknown as string;
  }

  public get bitRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Audio.BitRate'),
        outputPath: 'Preset.Audio.BitRate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Audio.BitRate', props);
    return resource.getResponseField('Preset.Audio.BitRate') as unknown as string;
  }

  public get channels(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Audio.Channels'),
        outputPath: 'Preset.Audio.Channels',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Audio.Channels', props);
    return resource.getResponseField('Preset.Audio.Channels') as unknown as string;
  }

  public get audioPackingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Audio.AudioPackingMode'),
        outputPath: 'Preset.Audio.AudioPackingMode',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Audio.AudioPackingMode', props);
    return resource.getResponseField('Preset.Audio.AudioPackingMode') as unknown as string;
  }

  public get codecOptions(): ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions {
    return new ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPresetRequest) {
  }

  public get profile(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Audio.CodecOptions.Profile'),
        outputPath: 'Preset.Audio.CodecOptions.Profile',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Audio.CodecOptions.Profile', props);
    return resource.getResponseField('Preset.Audio.CodecOptions.Profile') as unknown as string;
  }

  public get bitDepth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Audio.CodecOptions.BitDepth'),
        outputPath: 'Preset.Audio.CodecOptions.BitDepth',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Audio.CodecOptions.BitDepth', props);
    return resource.getResponseField('Preset.Audio.CodecOptions.BitDepth') as unknown as string;
  }

  public get bitOrder(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Audio.CodecOptions.BitOrder'),
        outputPath: 'Preset.Audio.CodecOptions.BitOrder',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Audio.CodecOptions.BitOrder', props);
    return resource.getResponseField('Preset.Audio.CodecOptions.BitOrder') as unknown as string;
  }

  public get signed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Audio.CodecOptions.Signed'),
        outputPath: 'Preset.Audio.CodecOptions.Signed',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Audio.CodecOptions.Signed', props);
    return resource.getResponseField('Preset.Audio.CodecOptions.Signed') as unknown as string;
  }

}

export class ElasticTranscoderResponsesReadPresetPresetVideo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPresetRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.Codec'),
        outputPath: 'Preset.Video.Codec',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.Codec', props);
    return resource.getResponseField('Preset.Video.Codec') as unknown as string;
  }

  public get codecOptions(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.CodecOptions'),
        outputPath: 'Preset.Video.CodecOptions',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.CodecOptions', props);
    return resource.getResponseField('Preset.Video.CodecOptions') as unknown as Record<string, string>;
  }

  public get keyframesMaxDist(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.KeyframesMaxDist'),
        outputPath: 'Preset.Video.KeyframesMaxDist',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.KeyframesMaxDist', props);
    return resource.getResponseField('Preset.Video.KeyframesMaxDist') as unknown as string;
  }

  public get fixedGop(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.FixedGOP'),
        outputPath: 'Preset.Video.FixedGOP',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.FixedGOP', props);
    return resource.getResponseField('Preset.Video.FixedGOP') as unknown as string;
  }

  public get bitRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.BitRate'),
        outputPath: 'Preset.Video.BitRate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.BitRate', props);
    return resource.getResponseField('Preset.Video.BitRate') as unknown as string;
  }

  public get frameRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.FrameRate'),
        outputPath: 'Preset.Video.FrameRate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.FrameRate', props);
    return resource.getResponseField('Preset.Video.FrameRate') as unknown as string;
  }

  public get maxFrameRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.MaxFrameRate'),
        outputPath: 'Preset.Video.MaxFrameRate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.MaxFrameRate', props);
    return resource.getResponseField('Preset.Video.MaxFrameRate') as unknown as string;
  }

  public get resolution(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.Resolution'),
        outputPath: 'Preset.Video.Resolution',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.Resolution', props);
    return resource.getResponseField('Preset.Video.Resolution') as unknown as string;
  }

  public get aspectRatio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.AspectRatio'),
        outputPath: 'Preset.Video.AspectRatio',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.AspectRatio', props);
    return resource.getResponseField('Preset.Video.AspectRatio') as unknown as string;
  }

  public get maxWidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.MaxWidth'),
        outputPath: 'Preset.Video.MaxWidth',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.MaxWidth', props);
    return resource.getResponseField('Preset.Video.MaxWidth') as unknown as string;
  }

  public get maxHeight(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.MaxHeight'),
        outputPath: 'Preset.Video.MaxHeight',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.MaxHeight', props);
    return resource.getResponseField('Preset.Video.MaxHeight') as unknown as string;
  }

  public get displayAspectRatio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.DisplayAspectRatio'),
        outputPath: 'Preset.Video.DisplayAspectRatio',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.DisplayAspectRatio', props);
    return resource.getResponseField('Preset.Video.DisplayAspectRatio') as unknown as string;
  }

  public get sizingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.SizingPolicy'),
        outputPath: 'Preset.Video.SizingPolicy',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.SizingPolicy', props);
    return resource.getResponseField('Preset.Video.SizingPolicy') as unknown as string;
  }

  public get paddingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.PaddingPolicy'),
        outputPath: 'Preset.Video.PaddingPolicy',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.PaddingPolicy', props);
    return resource.getResponseField('Preset.Video.PaddingPolicy') as unknown as string;
  }

  public get watermarks(): shapes.ElasticTranscoderPresetWatermark[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Video.Watermarks'),
        outputPath: 'Preset.Video.Watermarks',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Video.Watermarks', props);
    return resource.getResponseField('Preset.Video.Watermarks') as unknown as shapes.ElasticTranscoderPresetWatermark[];
  }

}

export class ElasticTranscoderResponsesReadPresetPresetThumbnails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderReadPresetRequest) {
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Thumbnails.Format'),
        outputPath: 'Preset.Thumbnails.Format',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Thumbnails.Format', props);
    return resource.getResponseField('Preset.Thumbnails.Format') as unknown as string;
  }

  public get interval(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Thumbnails.Interval'),
        outputPath: 'Preset.Thumbnails.Interval',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Thumbnails.Interval', props);
    return resource.getResponseField('Preset.Thumbnails.Interval') as unknown as string;
  }

  public get resolution(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Thumbnails.Resolution'),
        outputPath: 'Preset.Thumbnails.Resolution',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Thumbnails.Resolution', props);
    return resource.getResponseField('Preset.Thumbnails.Resolution') as unknown as string;
  }

  public get aspectRatio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Thumbnails.AspectRatio'),
        outputPath: 'Preset.Thumbnails.AspectRatio',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Thumbnails.AspectRatio', props);
    return resource.getResponseField('Preset.Thumbnails.AspectRatio') as unknown as string;
  }

  public get maxWidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Thumbnails.MaxWidth'),
        outputPath: 'Preset.Thumbnails.MaxWidth',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Thumbnails.MaxWidth', props);
    return resource.getResponseField('Preset.Thumbnails.MaxWidth') as unknown as string;
  }

  public get maxHeight(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Thumbnails.MaxHeight'),
        outputPath: 'Preset.Thumbnails.MaxHeight',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Thumbnails.MaxHeight', props);
    return resource.getResponseField('Preset.Thumbnails.MaxHeight') as unknown as string;
  }

  public get sizingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Thumbnails.SizingPolicy'),
        outputPath: 'Preset.Thumbnails.SizingPolicy',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Thumbnails.SizingPolicy', props);
    return resource.getResponseField('Preset.Thumbnails.SizingPolicy') as unknown as string;
  }

  public get paddingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'readPreset',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.ReadPreset.Preset.Thumbnails.PaddingPolicy'),
        outputPath: 'Preset.Thumbnails.PaddingPolicy',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReadPreset.Preset.Thumbnails.PaddingPolicy', props);
    return resource.getResponseField('Preset.Thumbnails.PaddingPolicy') as unknown as string;
  }

}

export class ElasticTranscoderResponsesTestRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderTestRoleRequest) {
  }

  public get success(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testRole',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.TestRole.Success'),
        outputPath: 'Success',
        parameters: {
          Role: this.__input.role,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Topics: this.__input.topics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestRole.Success', props);
    return resource.getResponseField('Success') as unknown as string;
  }

  public get messages(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testRole',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.TestRole.Messages'),
        outputPath: 'Messages',
        parameters: {
          Role: this.__input.role,
          InputBucket: this.__input.inputBucket,
          OutputBucket: this.__input.outputBucket,
          Topics: this.__input.topics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestRole.Messages', props);
    return resource.getResponseField('Messages') as unknown as string[];
  }

}

export class ElasticTranscoderResponsesUpdatePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineRequest) {
  }

  public get pipeline(): ElasticTranscoderResponsesUpdatePipelinePipeline {
    return new ElasticTranscoderResponsesUpdatePipelinePipeline(this.__scope, this.__resources, this.__input);
  }

  public get warnings(): shapes.ElasticTranscoderWarning[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as shapes.ElasticTranscoderWarning[];
  }

}

export class ElasticTranscoderResponsesUpdatePipelinePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.Id'),
        outputPath: 'Pipeline.Id',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.Id', props);
    return resource.getResponseField('Pipeline.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.Arn'),
        outputPath: 'Pipeline.Arn',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.Arn', props);
    return resource.getResponseField('Pipeline.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.Name'),
        outputPath: 'Pipeline.Name',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.Name', props);
    return resource.getResponseField('Pipeline.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.Status'),
        outputPath: 'Pipeline.Status',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.Status', props);
    return resource.getResponseField('Pipeline.Status') as unknown as string;
  }

  public get inputBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.InputBucket'),
        outputPath: 'Pipeline.InputBucket',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.InputBucket', props);
    return resource.getResponseField('Pipeline.InputBucket') as unknown as string;
  }

  public get outputBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.OutputBucket'),
        outputPath: 'Pipeline.OutputBucket',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.OutputBucket', props);
    return resource.getResponseField('Pipeline.OutputBucket') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.Role'),
        outputPath: 'Pipeline.Role',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.Role', props);
    return resource.getResponseField('Pipeline.Role') as unknown as string;
  }

  public get awsKmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.AwsKmsKeyArn'),
        outputPath: 'Pipeline.AwsKmsKeyArn',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.AwsKmsKeyArn', props);
    return resource.getResponseField('Pipeline.AwsKmsKeyArn') as unknown as string;
  }

  public get notifications(): ElasticTranscoderResponsesUpdatePipelinePipelineNotifications {
    return new ElasticTranscoderResponsesUpdatePipelinePipelineNotifications(this.__scope, this.__resources, this.__input);
  }

  public get contentConfig(): ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig {
    return new ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig(this.__scope, this.__resources, this.__input);
  }

  public get thumbnailConfig(): ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig {
    return new ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesUpdatePipelinePipelineNotifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineRequest) {
  }

  public get progressing(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.Notifications.Progressing'),
        outputPath: 'Pipeline.Notifications.Progressing',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.Notifications.Progressing', props);
    return resource.getResponseField('Pipeline.Notifications.Progressing') as unknown as string;
  }

  public get completed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.Notifications.Completed'),
        outputPath: 'Pipeline.Notifications.Completed',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.Notifications.Completed', props);
    return resource.getResponseField('Pipeline.Notifications.Completed') as unknown as string;
  }

  public get warning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.Notifications.Warning'),
        outputPath: 'Pipeline.Notifications.Warning',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.Notifications.Warning', props);
    return resource.getResponseField('Pipeline.Notifications.Warning') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.Notifications.Error'),
        outputPath: 'Pipeline.Notifications.Error',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.Notifications.Error', props);
    return resource.getResponseField('Pipeline.Notifications.Error') as unknown as string;
  }

}

export class ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.ContentConfig.Bucket'),
        outputPath: 'Pipeline.ContentConfig.Bucket',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.ContentConfig.Bucket', props);
    return resource.getResponseField('Pipeline.ContentConfig.Bucket') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.ContentConfig.StorageClass'),
        outputPath: 'Pipeline.ContentConfig.StorageClass',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.ContentConfig.StorageClass', props);
    return resource.getResponseField('Pipeline.ContentConfig.StorageClass') as unknown as string;
  }

  public get permissions(): shapes.ElasticTranscoderPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.ContentConfig.Permissions'),
        outputPath: 'Pipeline.ContentConfig.Permissions',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.ContentConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ContentConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.ThumbnailConfig.Bucket'),
        outputPath: 'Pipeline.ThumbnailConfig.Bucket',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.ThumbnailConfig.Bucket', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Bucket') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.ThumbnailConfig.StorageClass'),
        outputPath: 'Pipeline.ThumbnailConfig.StorageClass',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.ThumbnailConfig.StorageClass', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.StorageClass') as unknown as string;
  }

  public get permissions(): shapes.ElasticTranscoderPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipeline.Pipeline.ThumbnailConfig.Permissions'),
        outputPath: 'Pipeline.ThumbnailConfig.Permissions',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          InputBucket: this.__input.inputBucket,
          Role: this.__input.role,
          AwsKmsKeyArn: this.__input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.__input.notifications?.progressing,
            Completed: this.__input.notifications?.completed,
            Warning: this.__input.notifications?.warning,
            Error: this.__input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.__input.contentConfig?.bucket,
            StorageClass: this.__input.contentConfig?.storageClass,
            Permissions: this.__input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.__input.thumbnailConfig?.bucket,
            StorageClass: this.__input.thumbnailConfig?.storageClass,
            Permissions: this.__input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.Pipeline.ThumbnailConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderResponsesUpdatePipelineNotifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest) {
  }

  public get pipeline(): ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline {
    return new ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.Id'),
        outputPath: 'Pipeline.Id',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.Id', props);
    return resource.getResponseField('Pipeline.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.Arn'),
        outputPath: 'Pipeline.Arn',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.Arn', props);
    return resource.getResponseField('Pipeline.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.Name'),
        outputPath: 'Pipeline.Name',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.Name', props);
    return resource.getResponseField('Pipeline.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.Status'),
        outputPath: 'Pipeline.Status',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.Status', props);
    return resource.getResponseField('Pipeline.Status') as unknown as string;
  }

  public get inputBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.InputBucket'),
        outputPath: 'Pipeline.InputBucket',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.InputBucket', props);
    return resource.getResponseField('Pipeline.InputBucket') as unknown as string;
  }

  public get outputBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.OutputBucket'),
        outputPath: 'Pipeline.OutputBucket',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.OutputBucket', props);
    return resource.getResponseField('Pipeline.OutputBucket') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.Role'),
        outputPath: 'Pipeline.Role',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.Role', props);
    return resource.getResponseField('Pipeline.Role') as unknown as string;
  }

  public get awsKmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.AwsKmsKeyArn'),
        outputPath: 'Pipeline.AwsKmsKeyArn',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.AwsKmsKeyArn', props);
    return resource.getResponseField('Pipeline.AwsKmsKeyArn') as unknown as string;
  }

  public get notifications(): ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications {
    return new ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications(this.__scope, this.__resources, this.__input);
  }

  public get contentConfig(): ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig {
    return new ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig(this.__scope, this.__resources, this.__input);
  }

  public get thumbnailConfig(): ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig {
    return new ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest) {
  }

  public get progressing(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.Notifications.Progressing'),
        outputPath: 'Pipeline.Notifications.Progressing',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.Notifications.Progressing', props);
    return resource.getResponseField('Pipeline.Notifications.Progressing') as unknown as string;
  }

  public get completed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.Notifications.Completed'),
        outputPath: 'Pipeline.Notifications.Completed',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.Notifications.Completed', props);
    return resource.getResponseField('Pipeline.Notifications.Completed') as unknown as string;
  }

  public get warning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.Notifications.Warning'),
        outputPath: 'Pipeline.Notifications.Warning',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.Notifications.Warning', props);
    return resource.getResponseField('Pipeline.Notifications.Warning') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.Notifications.Error'),
        outputPath: 'Pipeline.Notifications.Error',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.Notifications.Error', props);
    return resource.getResponseField('Pipeline.Notifications.Error') as unknown as string;
  }

}

export class ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.ContentConfig.Bucket'),
        outputPath: 'Pipeline.ContentConfig.Bucket',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.ContentConfig.Bucket', props);
    return resource.getResponseField('Pipeline.ContentConfig.Bucket') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.ContentConfig.StorageClass'),
        outputPath: 'Pipeline.ContentConfig.StorageClass',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.ContentConfig.StorageClass', props);
    return resource.getResponseField('Pipeline.ContentConfig.StorageClass') as unknown as string;
  }

  public get permissions(): shapes.ElasticTranscoderPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.ContentConfig.Permissions'),
        outputPath: 'Pipeline.ContentConfig.Permissions',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.ContentConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ContentConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.ThumbnailConfig.Bucket'),
        outputPath: 'Pipeline.ThumbnailConfig.Bucket',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.ThumbnailConfig.Bucket', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Bucket') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.ThumbnailConfig.StorageClass'),
        outputPath: 'Pipeline.ThumbnailConfig.StorageClass',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.ThumbnailConfig.StorageClass', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.StorageClass') as unknown as string;
  }

  public get permissions(): shapes.ElasticTranscoderPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineNotifications',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineNotifications.Pipeline.ThumbnailConfig.Permissions'),
        outputPath: 'Pipeline.ThumbnailConfig.Permissions',
        parameters: {
          Id: this.__input.id,
          Notifications: {
            Progressing: this.__input.notifications.progressing,
            Completed: this.__input.notifications.completed,
            Warning: this.__input.notifications.warning,
            Error: this.__input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineNotifications.Pipeline.ThumbnailConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderResponsesUpdatePipelineStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineStatusRequest) {
  }

  public get pipeline(): ElasticTranscoderResponsesUpdatePipelineStatusPipeline {
    return new ElasticTranscoderResponsesUpdatePipelineStatusPipeline(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesUpdatePipelineStatusPipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineStatusRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.Id'),
        outputPath: 'Pipeline.Id',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.Id', props);
    return resource.getResponseField('Pipeline.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.Arn'),
        outputPath: 'Pipeline.Arn',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.Arn', props);
    return resource.getResponseField('Pipeline.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.Name'),
        outputPath: 'Pipeline.Name',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.Name', props);
    return resource.getResponseField('Pipeline.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.Status'),
        outputPath: 'Pipeline.Status',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.Status', props);
    return resource.getResponseField('Pipeline.Status') as unknown as string;
  }

  public get inputBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.InputBucket'),
        outputPath: 'Pipeline.InputBucket',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.InputBucket', props);
    return resource.getResponseField('Pipeline.InputBucket') as unknown as string;
  }

  public get outputBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.OutputBucket'),
        outputPath: 'Pipeline.OutputBucket',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.OutputBucket', props);
    return resource.getResponseField('Pipeline.OutputBucket') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.Role'),
        outputPath: 'Pipeline.Role',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.Role', props);
    return resource.getResponseField('Pipeline.Role') as unknown as string;
  }

  public get awsKmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.AwsKmsKeyArn'),
        outputPath: 'Pipeline.AwsKmsKeyArn',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.AwsKmsKeyArn', props);
    return resource.getResponseField('Pipeline.AwsKmsKeyArn') as unknown as string;
  }

  public get notifications(): ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications {
    return new ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications(this.__scope, this.__resources, this.__input);
  }

  public get contentConfig(): ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig {
    return new ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig(this.__scope, this.__resources, this.__input);
  }

  public get thumbnailConfig(): ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig {
    return new ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineStatusRequest) {
  }

  public get progressing(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.Notifications.Progressing'),
        outputPath: 'Pipeline.Notifications.Progressing',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.Notifications.Progressing', props);
    return resource.getResponseField('Pipeline.Notifications.Progressing') as unknown as string;
  }

  public get completed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.Notifications.Completed'),
        outputPath: 'Pipeline.Notifications.Completed',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.Notifications.Completed', props);
    return resource.getResponseField('Pipeline.Notifications.Completed') as unknown as string;
  }

  public get warning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.Notifications.Warning'),
        outputPath: 'Pipeline.Notifications.Warning',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.Notifications.Warning', props);
    return resource.getResponseField('Pipeline.Notifications.Warning') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.Notifications.Error'),
        outputPath: 'Pipeline.Notifications.Error',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.Notifications.Error', props);
    return resource.getResponseField('Pipeline.Notifications.Error') as unknown as string;
  }

}

export class ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineStatusRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.ContentConfig.Bucket'),
        outputPath: 'Pipeline.ContentConfig.Bucket',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.ContentConfig.Bucket', props);
    return resource.getResponseField('Pipeline.ContentConfig.Bucket') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.ContentConfig.StorageClass'),
        outputPath: 'Pipeline.ContentConfig.StorageClass',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.ContentConfig.StorageClass', props);
    return resource.getResponseField('Pipeline.ContentConfig.StorageClass') as unknown as string;
  }

  public get permissions(): shapes.ElasticTranscoderPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.ContentConfig.Permissions'),
        outputPath: 'Pipeline.ContentConfig.Permissions',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.ContentConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ContentConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticTranscoderUpdatePipelineStatusRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.ThumbnailConfig.Bucket'),
        outputPath: 'Pipeline.ThumbnailConfig.Bucket',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.ThumbnailConfig.Bucket', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Bucket') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.ThumbnailConfig.StorageClass'),
        outputPath: 'Pipeline.ThumbnailConfig.StorageClass',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.ThumbnailConfig.StorageClass', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.StorageClass') as unknown as string;
  }

  public get permissions(): shapes.ElasticTranscoderPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipelineStatus',
        service: 'ElasticTranscoder',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticTranscoder.UpdatePipelineStatus.Pipeline.ThumbnailConfig.Permissions'),
        outputPath: 'Pipeline.ThumbnailConfig.Permissions',
        parameters: {
          Id: this.__input.id,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipelineStatus.Pipeline.ThumbnailConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

