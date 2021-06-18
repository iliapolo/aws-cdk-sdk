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

  public createJob(input: shapes.ElasticTranscoderCreateJobRequest): ElasticTranscoderCreateJob {
    return new ElasticTranscoderCreateJob(this, 'CreateJob', this.__resources, input);
  }

  public createPipeline(input: shapes.ElasticTranscoderCreatePipelineRequest): ElasticTranscoderCreatePipeline {
    return new ElasticTranscoderCreatePipeline(this, 'CreatePipeline', this.__resources, input);
  }

  public createPreset(input: shapes.ElasticTranscoderCreatePresetRequest): ElasticTranscoderCreatePreset {
    return new ElasticTranscoderCreatePreset(this, 'CreatePreset', this.__resources, input);
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

  public listJobsByPipeline(input: shapes.ElasticTranscoderListJobsByPipelineRequest): ElasticTranscoderListJobsByPipeline {
    return new ElasticTranscoderListJobsByPipeline(this, 'ListJobsByPipeline', this.__resources, input);
  }

  public listJobsByStatus(input: shapes.ElasticTranscoderListJobsByStatusRequest): ElasticTranscoderListJobsByStatus {
    return new ElasticTranscoderListJobsByStatus(this, 'ListJobsByStatus', this.__resources, input);
  }

  public listPipelines(input: shapes.ElasticTranscoderListPipelinesRequest): ElasticTranscoderListPipelines {
    return new ElasticTranscoderListPipelines(this, 'ListPipelines', this.__resources, input);
  }

  public listPresets(input: shapes.ElasticTranscoderListPresetsRequest): ElasticTranscoderListPresets {
    return new ElasticTranscoderListPresets(this, 'ListPresets', this.__resources, input);
  }

  public readJob(input: shapes.ElasticTranscoderReadJobRequest): ElasticTranscoderReadJob {
    return new ElasticTranscoderReadJob(this, 'ReadJob', this.__resources, input);
  }

  public readPipeline(input: shapes.ElasticTranscoderReadPipelineRequest): ElasticTranscoderReadPipeline {
    return new ElasticTranscoderReadPipeline(this, 'ReadPipeline', this.__resources, input);
  }

  public readPreset(input: shapes.ElasticTranscoderReadPresetRequest): ElasticTranscoderReadPreset {
    return new ElasticTranscoderReadPreset(this, 'ReadPreset', this.__resources, input);
  }

  public testRole(input: shapes.ElasticTranscoderTestRoleRequest): ElasticTranscoderTestRole {
    return new ElasticTranscoderTestRole(this, 'TestRole', this.__resources, input);
  }

  public updatePipeline(input: shapes.ElasticTranscoderUpdatePipelineRequest): ElasticTranscoderUpdatePipeline {
    return new ElasticTranscoderUpdatePipeline(this, 'UpdatePipeline', this.__resources, input);
  }

  public updatePipelineNotifications(input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest): ElasticTranscoderUpdatePipelineNotifications {
    return new ElasticTranscoderUpdatePipelineNotifications(this, 'UpdatePipelineNotifications', this.__resources, input);
  }

  public updatePipelineStatus(input: shapes.ElasticTranscoderUpdatePipelineStatusRequest): ElasticTranscoderUpdatePipelineStatus {
    return new ElasticTranscoderUpdatePipelineStatus(this, 'UpdatePipelineStatus', this.__resources, input);
  }

}

export class ElasticTranscoderCreateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
  }

  public get job(): ElasticTranscoderCreateJobJob {
    return new ElasticTranscoderCreateJobJob(this, 'Job', this.__resources, this.input);
  }

}

export class ElasticTranscoderCreateJobJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Id', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Arn', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.PipelineId', props);
    return resource.getResponseField('Job.PipelineId') as unknown as string;
  }

  public get input(): ElasticTranscoderCreateJobJobInput {
    return new ElasticTranscoderCreateJobJobInput(this, 'Input', this.__resources, this.input);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Inputs', props);
    return resource.getResponseField('Job.Inputs') as unknown as shapes.ElasticTranscoderJobInput[];
  }

  public get output(): ElasticTranscoderCreateJobJobOutput {
    return new ElasticTranscoderCreateJobJobOutput(this, 'Output', this.__resources, this.input);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Outputs', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.OutputKeyPrefix', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Playlists', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Status', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.UserMetadata', props);
    return resource.getResponseField('Job.UserMetadata') as unknown as Record<string, string>;
  }

  public get timing(): ElasticTranscoderCreateJobJobTiming {
    return new ElasticTranscoderCreateJobJobTiming(this, 'Timing', this.__resources, this.input);
  }

}

export class ElasticTranscoderCreateJobJobInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.Key', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.FrameRate', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.Resolution', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.AspectRatio', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.Interlaced', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.Container', props);
    return resource.getResponseField('Job.Input.Container') as unknown as string;
  }

  public get encryption(): ElasticTranscoderCreateJobJobInputEncryption {
    return new ElasticTranscoderCreateJobJobInputEncryption(this, 'Encryption', this.__resources, this.input);
  }

  public get timeSpan(): ElasticTranscoderCreateJobJobInputTimeSpan {
    return new ElasticTranscoderCreateJobJobInputTimeSpan(this, 'TimeSpan', this.__resources, this.input);
  }

  public get inputCaptions(): ElasticTranscoderCreateJobJobInputInputCaptions {
    return new ElasticTranscoderCreateJobJobInputInputCaptions(this, 'InputCaptions', this.__resources, this.input);
  }

  public get detectedProperties(): ElasticTranscoderCreateJobJobInputDetectedProperties {
    return new ElasticTranscoderCreateJobJobInputDetectedProperties(this, 'DetectedProperties', this.__resources, this.input);
  }

}

export class ElasticTranscoderCreateJobJobInputEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.Encryption.Mode', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.Encryption.Key', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.Encryption.KeyMd5', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.Encryption.InitializationVector', props);
    return resource.getResponseField('Job.Input.Encryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderCreateJobJobInputTimeSpan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.TimeSpan.StartTime', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.TimeSpan.Duration', props);
    return resource.getResponseField('Job.Input.TimeSpan.Duration') as unknown as string;
  }

}

export class ElasticTranscoderCreateJobJobInputInputCaptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.InputCaptions.MergePolicy', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.InputCaptions.CaptionSources', props);
    return resource.getResponseField('Job.Input.InputCaptions.CaptionSources') as unknown as shapes.ElasticTranscoderCaptionSource[];
  }

}

export class ElasticTranscoderCreateJobJobInputDetectedProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.DetectedProperties.Width', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.DetectedProperties.Height', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.DetectedProperties.FrameRate', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.DetectedProperties.FileSize', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Input.DetectedProperties.DurationMillis', props);
    return resource.getResponseField('Job.Input.DetectedProperties.DurationMillis') as unknown as number;
  }

}

export class ElasticTranscoderCreateJobJobOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Id', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Key', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.ThumbnailPattern', props);
    return resource.getResponseField('Job.Output.ThumbnailPattern') as unknown as string;
  }

  public get thumbnailEncryption(): ElasticTranscoderCreateJobJobOutputThumbnailEncryption {
    return new ElasticTranscoderCreateJobJobOutputThumbnailEncryption(this, 'ThumbnailEncryption', this.__resources, this.input);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Rotate', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.PresetId', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.SegmentDuration', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Status', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.StatusDetail', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Duration', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Width', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Height', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.FrameRate', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.FileSize', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.DurationMillis', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Watermarks', props);
    return resource.getResponseField('Job.Output.Watermarks') as unknown as shapes.ElasticTranscoderJobWatermark[];
  }

  public get albumArt(): ElasticTranscoderCreateJobJobOutputAlbumArt {
    return new ElasticTranscoderCreateJobJobOutputAlbumArt(this, 'AlbumArt', this.__resources, this.input);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Composition', props);
    return resource.getResponseField('Job.Output.Composition') as unknown as shapes.ElasticTranscoderClip[];
  }

  public get captions(): ElasticTranscoderCreateJobJobOutputCaptions {
    return new ElasticTranscoderCreateJobJobOutputCaptions(this, 'Captions', this.__resources, this.input);
  }

  public get encryption(): ElasticTranscoderCreateJobJobOutputEncryption {
    return new ElasticTranscoderCreateJobJobOutputEncryption(this, 'Encryption', this.__resources, this.input);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.AppliedColorSpaceConversion', props);
    return resource.getResponseField('Job.Output.AppliedColorSpaceConversion') as unknown as string;
  }

}

export class ElasticTranscoderCreateJobJobOutputThumbnailEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.ThumbnailEncryption.Mode', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.ThumbnailEncryption.Key', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.ThumbnailEncryption.KeyMd5', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.ThumbnailEncryption.InitializationVector', props);
    return resource.getResponseField('Job.Output.ThumbnailEncryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderCreateJobJobOutputAlbumArt extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.AlbumArt.MergePolicy', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.AlbumArt.Artwork', props);
    return resource.getResponseField('Job.Output.AlbumArt.Artwork') as unknown as shapes.ElasticTranscoderArtwork[];
  }

}

export class ElasticTranscoderCreateJobJobOutputCaptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Captions.MergePolicy', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Captions.CaptionSources', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Captions.CaptionFormats', props);
    return resource.getResponseField('Job.Output.Captions.CaptionFormats') as unknown as shapes.ElasticTranscoderCaptionFormat[];
  }

}

export class ElasticTranscoderCreateJobJobOutputEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Encryption.Mode', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Encryption.Key', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Encryption.KeyMd5', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Output.Encryption.InitializationVector', props);
    return resource.getResponseField('Job.Output.Encryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderCreateJobJobTiming extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreateJobRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Timing.SubmitTimeMillis', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Timing.StartTimeMillis', props);
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
          PipelineId: this.input.pipelineId,
          Input: {
            Key: this.input.input?.key,
            FrameRate: this.input.input?.frameRate,
            Resolution: this.input.input?.resolution,
            AspectRatio: this.input.input?.aspectRatio,
            Interlaced: this.input.input?.interlaced,
            Container: this.input.input?.container,
            Encryption: {
              Mode: this.input.input?.encryption?.mode,
              Key: this.input.input?.encryption?.key,
              KeyMd5: this.input.input?.encryption?.keyMd5,
              InitializationVector: this.input.input?.encryption?.initializationVector,
            },
            TimeSpan: {
              StartTime: this.input.input?.timeSpan?.startTime,
              Duration: this.input.input?.timeSpan?.duration,
            },
            InputCaptions: {
              MergePolicy: this.input.input?.inputCaptions?.mergePolicy,
              CaptionSources: this.input.input?.inputCaptions?.captionSources,
            },
            DetectedProperties: {
              Width: this.input.input?.detectedProperties?.width,
              Height: this.input.input?.detectedProperties?.height,
              FrameRate: this.input.input?.detectedProperties?.frameRate,
              FileSize: this.input.input?.detectedProperties?.fileSize,
              DurationMillis: this.input.input?.detectedProperties?.durationMillis,
            },
          },
          Inputs: this.input.inputs,
          Output: {
            Key: this.input.output?.key,
            ThumbnailPattern: this.input.output?.thumbnailPattern,
            ThumbnailEncryption: {
              Mode: this.input.output?.thumbnailEncryption?.mode,
              Key: this.input.output?.thumbnailEncryption?.key,
              KeyMd5: this.input.output?.thumbnailEncryption?.keyMd5,
              InitializationVector: this.input.output?.thumbnailEncryption?.initializationVector,
            },
            Rotate: this.input.output?.rotate,
            PresetId: this.input.output?.presetId,
            SegmentDuration: this.input.output?.segmentDuration,
            Watermarks: this.input.output?.watermarks,
            AlbumArt: {
              MergePolicy: this.input.output?.albumArt?.mergePolicy,
              Artwork: this.input.output?.albumArt?.artwork,
            },
            Composition: this.input.output?.composition,
            Captions: {
              MergePolicy: this.input.output?.captions?.mergePolicy,
              CaptionSources: this.input.output?.captions?.captionSources,
              CaptionFormats: this.input.output?.captions?.captionFormats,
            },
            Encryption: {
              Mode: this.input.output?.encryption?.mode,
              Key: this.input.output?.encryption?.key,
              KeyMd5: this.input.output?.encryption?.keyMd5,
              InitializationVector: this.input.output?.encryption?.initializationVector,
            },
          },
          Outputs: this.input.outputs,
          OutputKeyPrefix: this.input.outputKeyPrefix,
          Playlists: this.input.playlists,
          UserMetadata: this.input.userMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Job.Timing.FinishTimeMillis', props);
    return resource.getResponseField('Job.Timing.FinishTimeMillis') as unknown as number;
  }

}

export class ElasticTranscoderCreatePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePipelineRequest) {
    super(scope, id);
  }

  public get pipeline(): ElasticTranscoderCreatePipelinePipeline {
    return new ElasticTranscoderCreatePipelinePipeline(this, 'Pipeline', this.__resources, this.input);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as shapes.ElasticTranscoderWarning[];
  }

}

export class ElasticTranscoderCreatePipelinePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePipelineRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.Id', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.Arn', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.Name', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.Status', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.InputBucket', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.OutputBucket', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.Role', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.AwsKmsKeyArn', props);
    return resource.getResponseField('Pipeline.AwsKmsKeyArn') as unknown as string;
  }

  public get notifications(): ElasticTranscoderCreatePipelinePipelineNotifications {
    return new ElasticTranscoderCreatePipelinePipelineNotifications(this, 'Notifications', this.__resources, this.input);
  }

  public get contentConfig(): ElasticTranscoderCreatePipelinePipelineContentConfig {
    return new ElasticTranscoderCreatePipelinePipelineContentConfig(this, 'ContentConfig', this.__resources, this.input);
  }

  public get thumbnailConfig(): ElasticTranscoderCreatePipelinePipelineThumbnailConfig {
    return new ElasticTranscoderCreatePipelinePipelineThumbnailConfig(this, 'ThumbnailConfig', this.__resources, this.input);
  }

}

export class ElasticTranscoderCreatePipelinePipelineNotifications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePipelineRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.Notifications.Progressing', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.Notifications.Completed', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.Notifications.Warning', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.Notifications.Error', props);
    return resource.getResponseField('Pipeline.Notifications.Error') as unknown as string;
  }

}

export class ElasticTranscoderCreatePipelinePipelineContentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePipelineRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.ContentConfig.Bucket', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.ContentConfig.StorageClass', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.ContentConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ContentConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderCreatePipelinePipelineThumbnailConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePipelineRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.ThumbnailConfig.Bucket', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.ThumbnailConfig.StorageClass', props);
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
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.Pipeline.ThumbnailConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderCreatePreset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePresetRequest) {
    super(scope, id);
  }

  public get preset(): ElasticTranscoderCreatePresetPreset {
    return new ElasticTranscoderCreatePresetPreset(this, 'Preset', this.__resources, this.input);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Warning', props);
    return resource.getResponseField('Warning') as unknown as string;
  }

}

export class ElasticTranscoderCreatePresetPreset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePresetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Id', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Arn', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Name', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Description', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Container', props);
    return resource.getResponseField('Preset.Container') as unknown as string;
  }

  public get audio(): ElasticTranscoderCreatePresetPresetAudio {
    return new ElasticTranscoderCreatePresetPresetAudio(this, 'Audio', this.__resources, this.input);
  }

  public get video(): ElasticTranscoderCreatePresetPresetVideo {
    return new ElasticTranscoderCreatePresetPresetVideo(this, 'Video', this.__resources, this.input);
  }

  public get thumbnails(): ElasticTranscoderCreatePresetPresetThumbnails {
    return new ElasticTranscoderCreatePresetPresetThumbnails(this, 'Thumbnails', this.__resources, this.input);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Type', props);
    return resource.getResponseField('Preset.Type') as unknown as string;
  }

}

export class ElasticTranscoderCreatePresetPresetAudio extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePresetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Audio.Codec', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Audio.SampleRate', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Audio.BitRate', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Audio.Channels', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Audio.AudioPackingMode', props);
    return resource.getResponseField('Preset.Audio.AudioPackingMode') as unknown as string;
  }

  public get codecOptions(): ElasticTranscoderCreatePresetPresetAudioCodecOptions {
    return new ElasticTranscoderCreatePresetPresetAudioCodecOptions(this, 'CodecOptions', this.__resources, this.input);
  }

}

export class ElasticTranscoderCreatePresetPresetAudioCodecOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePresetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Audio.CodecOptions.Profile', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Audio.CodecOptions.BitDepth', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Audio.CodecOptions.BitOrder', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Audio.CodecOptions.Signed', props);
    return resource.getResponseField('Preset.Audio.CodecOptions.Signed') as unknown as string;
  }

}

export class ElasticTranscoderCreatePresetPresetVideo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePresetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.Codec', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.CodecOptions', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.KeyframesMaxDist', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.FixedGOP', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.BitRate', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.FrameRate', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.MaxFrameRate', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.Resolution', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.AspectRatio', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.MaxWidth', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.MaxHeight', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.DisplayAspectRatio', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.SizingPolicy', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.PaddingPolicy', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Video.Watermarks', props);
    return resource.getResponseField('Preset.Video.Watermarks') as unknown as shapes.ElasticTranscoderPresetWatermark[];
  }

}

export class ElasticTranscoderCreatePresetPresetThumbnails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderCreatePresetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Thumbnails.Format', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Thumbnails.Interval', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Thumbnails.Resolution', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Thumbnails.AspectRatio', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Thumbnails.MaxWidth', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Thumbnails.MaxHeight', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Thumbnails.SizingPolicy', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Container: this.input.container,
          Video: {
            Codec: this.input.video?.codec,
            CodecOptions: this.input.video?.codecOptions,
            KeyframesMaxDist: this.input.video?.keyframesMaxDist,
            FixedGOP: this.input.video?.fixedGop,
            BitRate: this.input.video?.bitRate,
            FrameRate: this.input.video?.frameRate,
            MaxFrameRate: this.input.video?.maxFrameRate,
            Resolution: this.input.video?.resolution,
            AspectRatio: this.input.video?.aspectRatio,
            MaxWidth: this.input.video?.maxWidth,
            MaxHeight: this.input.video?.maxHeight,
            DisplayAspectRatio: this.input.video?.displayAspectRatio,
            SizingPolicy: this.input.video?.sizingPolicy,
            PaddingPolicy: this.input.video?.paddingPolicy,
            Watermarks: this.input.video?.watermarks,
          },
          Audio: {
            Codec: this.input.audio?.codec,
            SampleRate: this.input.audio?.sampleRate,
            BitRate: this.input.audio?.bitRate,
            Channels: this.input.audio?.channels,
            AudioPackingMode: this.input.audio?.audioPackingMode,
            CodecOptions: {
              Profile: this.input.audio?.codecOptions?.profile,
              BitDepth: this.input.audio?.codecOptions?.bitDepth,
              BitOrder: this.input.audio?.codecOptions?.bitOrder,
              Signed: this.input.audio?.codecOptions?.signed,
            },
          },
          Thumbnails: {
            Format: this.input.thumbnails?.format,
            Interval: this.input.thumbnails?.interval,
            Resolution: this.input.thumbnails?.resolution,
            AspectRatio: this.input.thumbnails?.aspectRatio,
            MaxWidth: this.input.thumbnails?.maxWidth,
            MaxHeight: this.input.thumbnails?.maxHeight,
            SizingPolicy: this.input.thumbnails?.sizingPolicy,
            PaddingPolicy: this.input.thumbnails?.paddingPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePreset.Preset.Thumbnails.PaddingPolicy', props);
    return resource.getResponseField('Preset.Thumbnails.PaddingPolicy') as unknown as string;
  }

}

export class ElasticTranscoderListJobsByPipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderListJobsByPipelineRequest) {
    super(scope, id);
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
          PipelineId: this.input.pipelineId,
          Ascending: this.input.ascending,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobsByPipeline.Jobs', props);
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
          PipelineId: this.input.pipelineId,
          Ascending: this.input.ascending,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobsByPipeline.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ElasticTranscoderListJobsByStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderListJobsByStatusRequest) {
    super(scope, id);
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
          Status: this.input.status,
          Ascending: this.input.ascending,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobsByStatus.Jobs', props);
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
          Status: this.input.status,
          Ascending: this.input.ascending,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobsByStatus.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ElasticTranscoderListPipelines extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderListPipelinesRequest) {
    super(scope, id);
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
          Ascending: this.input.ascending,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelines.Pipelines', props);
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
          Ascending: this.input.ascending,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelines.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ElasticTranscoderListPresets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderListPresetsRequest) {
    super(scope, id);
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
          Ascending: this.input.ascending,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPresets.Presets', props);
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
          Ascending: this.input.ascending,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPresets.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ElasticTranscoderReadJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
  }

  public get job(): ElasticTranscoderReadJobJob {
    return new ElasticTranscoderReadJobJob(this, 'Job', this.__resources, this.input);
  }

}

export class ElasticTranscoderReadJobJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Id', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Arn', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.PipelineId', props);
    return resource.getResponseField('Job.PipelineId') as unknown as string;
  }

  public get input(): ElasticTranscoderReadJobJobInput {
    return new ElasticTranscoderReadJobJobInput(this, 'Input', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Inputs', props);
    return resource.getResponseField('Job.Inputs') as unknown as shapes.ElasticTranscoderJobInput[];
  }

  public get output(): ElasticTranscoderReadJobJobOutput {
    return new ElasticTranscoderReadJobJobOutput(this, 'Output', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Outputs', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.OutputKeyPrefix', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Playlists', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Status', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.UserMetadata', props);
    return resource.getResponseField('Job.UserMetadata') as unknown as Record<string, string>;
  }

  public get timing(): ElasticTranscoderReadJobJobTiming {
    return new ElasticTranscoderReadJobJobTiming(this, 'Timing', this.__resources, this.input);
  }

}

export class ElasticTranscoderReadJobJobInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.Key', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.FrameRate', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.Resolution', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.AspectRatio', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.Interlaced', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.Container', props);
    return resource.getResponseField('Job.Input.Container') as unknown as string;
  }

  public get encryption(): ElasticTranscoderReadJobJobInputEncryption {
    return new ElasticTranscoderReadJobJobInputEncryption(this, 'Encryption', this.__resources, this.input);
  }

  public get timeSpan(): ElasticTranscoderReadJobJobInputTimeSpan {
    return new ElasticTranscoderReadJobJobInputTimeSpan(this, 'TimeSpan', this.__resources, this.input);
  }

  public get inputCaptions(): ElasticTranscoderReadJobJobInputInputCaptions {
    return new ElasticTranscoderReadJobJobInputInputCaptions(this, 'InputCaptions', this.__resources, this.input);
  }

  public get detectedProperties(): ElasticTranscoderReadJobJobInputDetectedProperties {
    return new ElasticTranscoderReadJobJobInputDetectedProperties(this, 'DetectedProperties', this.__resources, this.input);
  }

}

export class ElasticTranscoderReadJobJobInputEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.Encryption.Mode', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.Encryption.Key', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.Encryption.KeyMd5', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.Encryption.InitializationVector', props);
    return resource.getResponseField('Job.Input.Encryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderReadJobJobInputTimeSpan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.TimeSpan.StartTime', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.TimeSpan.Duration', props);
    return resource.getResponseField('Job.Input.TimeSpan.Duration') as unknown as string;
  }

}

export class ElasticTranscoderReadJobJobInputInputCaptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.InputCaptions.MergePolicy', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.InputCaptions.CaptionSources', props);
    return resource.getResponseField('Job.Input.InputCaptions.CaptionSources') as unknown as shapes.ElasticTranscoderCaptionSource[];
  }

}

export class ElasticTranscoderReadJobJobInputDetectedProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.DetectedProperties.Width', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.DetectedProperties.Height', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.DetectedProperties.FrameRate', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.DetectedProperties.FileSize', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Input.DetectedProperties.DurationMillis', props);
    return resource.getResponseField('Job.Input.DetectedProperties.DurationMillis') as unknown as number;
  }

}

export class ElasticTranscoderReadJobJobOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Id', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Key', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.ThumbnailPattern', props);
    return resource.getResponseField('Job.Output.ThumbnailPattern') as unknown as string;
  }

  public get thumbnailEncryption(): ElasticTranscoderReadJobJobOutputThumbnailEncryption {
    return new ElasticTranscoderReadJobJobOutputThumbnailEncryption(this, 'ThumbnailEncryption', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Rotate', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.PresetId', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.SegmentDuration', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Status', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.StatusDetail', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Duration', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Width', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Height', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.FrameRate', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.FileSize', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.DurationMillis', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Watermarks', props);
    return resource.getResponseField('Job.Output.Watermarks') as unknown as shapes.ElasticTranscoderJobWatermark[];
  }

  public get albumArt(): ElasticTranscoderReadJobJobOutputAlbumArt {
    return new ElasticTranscoderReadJobJobOutputAlbumArt(this, 'AlbumArt', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Composition', props);
    return resource.getResponseField('Job.Output.Composition') as unknown as shapes.ElasticTranscoderClip[];
  }

  public get captions(): ElasticTranscoderReadJobJobOutputCaptions {
    return new ElasticTranscoderReadJobJobOutputCaptions(this, 'Captions', this.__resources, this.input);
  }

  public get encryption(): ElasticTranscoderReadJobJobOutputEncryption {
    return new ElasticTranscoderReadJobJobOutputEncryption(this, 'Encryption', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.AppliedColorSpaceConversion', props);
    return resource.getResponseField('Job.Output.AppliedColorSpaceConversion') as unknown as string;
  }

}

export class ElasticTranscoderReadJobJobOutputThumbnailEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.ThumbnailEncryption.Mode', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.ThumbnailEncryption.Key', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.ThumbnailEncryption.KeyMd5', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.ThumbnailEncryption.InitializationVector', props);
    return resource.getResponseField('Job.Output.ThumbnailEncryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderReadJobJobOutputAlbumArt extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.AlbumArt.MergePolicy', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.AlbumArt.Artwork', props);
    return resource.getResponseField('Job.Output.AlbumArt.Artwork') as unknown as shapes.ElasticTranscoderArtwork[];
  }

}

export class ElasticTranscoderReadJobJobOutputCaptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Captions.MergePolicy', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Captions.CaptionSources', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Captions.CaptionFormats', props);
    return resource.getResponseField('Job.Output.Captions.CaptionFormats') as unknown as shapes.ElasticTranscoderCaptionFormat[];
  }

}

export class ElasticTranscoderReadJobJobOutputEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Encryption.Mode', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Encryption.Key', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Encryption.KeyMd5', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Output.Encryption.InitializationVector', props);
    return resource.getResponseField('Job.Output.Encryption.InitializationVector') as unknown as string;
  }

}

export class ElasticTranscoderReadJobJobTiming extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadJobRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Timing.SubmitTimeMillis', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Timing.StartTimeMillis', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadJob.Job.Timing.FinishTimeMillis', props);
    return resource.getResponseField('Job.Timing.FinishTimeMillis') as unknown as number;
  }

}

export class ElasticTranscoderReadPipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPipelineRequest) {
    super(scope, id);
  }

  public get pipeline(): ElasticTranscoderReadPipelinePipeline {
    return new ElasticTranscoderReadPipelinePipeline(this, 'Pipeline', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as shapes.ElasticTranscoderWarning[];
  }

}

export class ElasticTranscoderReadPipelinePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPipelineRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.Id', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.Arn', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.Name', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.Status', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.InputBucket', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.OutputBucket', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.Role', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.AwsKmsKeyArn', props);
    return resource.getResponseField('Pipeline.AwsKmsKeyArn') as unknown as string;
  }

  public get notifications(): ElasticTranscoderReadPipelinePipelineNotifications {
    return new ElasticTranscoderReadPipelinePipelineNotifications(this, 'Notifications', this.__resources, this.input);
  }

  public get contentConfig(): ElasticTranscoderReadPipelinePipelineContentConfig {
    return new ElasticTranscoderReadPipelinePipelineContentConfig(this, 'ContentConfig', this.__resources, this.input);
  }

  public get thumbnailConfig(): ElasticTranscoderReadPipelinePipelineThumbnailConfig {
    return new ElasticTranscoderReadPipelinePipelineThumbnailConfig(this, 'ThumbnailConfig', this.__resources, this.input);
  }

}

export class ElasticTranscoderReadPipelinePipelineNotifications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPipelineRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.Notifications.Progressing', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.Notifications.Completed', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.Notifications.Warning', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.Notifications.Error', props);
    return resource.getResponseField('Pipeline.Notifications.Error') as unknown as string;
  }

}

export class ElasticTranscoderReadPipelinePipelineContentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPipelineRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.ContentConfig.Bucket', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.ContentConfig.StorageClass', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.ContentConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ContentConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderReadPipelinePipelineThumbnailConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPipelineRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.ThumbnailConfig.Bucket', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.ThumbnailConfig.StorageClass', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPipeline.Pipeline.ThumbnailConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderReadPreset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPresetRequest) {
    super(scope, id);
  }

  public get preset(): ElasticTranscoderReadPresetPreset {
    return new ElasticTranscoderReadPresetPreset(this, 'Preset', this.__resources, this.input);
  }

}

export class ElasticTranscoderReadPresetPreset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPresetRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Id', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Arn', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Name', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Description', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Container', props);
    return resource.getResponseField('Preset.Container') as unknown as string;
  }

  public get audio(): ElasticTranscoderReadPresetPresetAudio {
    return new ElasticTranscoderReadPresetPresetAudio(this, 'Audio', this.__resources, this.input);
  }

  public get video(): ElasticTranscoderReadPresetPresetVideo {
    return new ElasticTranscoderReadPresetPresetVideo(this, 'Video', this.__resources, this.input);
  }

  public get thumbnails(): ElasticTranscoderReadPresetPresetThumbnails {
    return new ElasticTranscoderReadPresetPresetThumbnails(this, 'Thumbnails', this.__resources, this.input);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Type', props);
    return resource.getResponseField('Preset.Type') as unknown as string;
  }

}

export class ElasticTranscoderReadPresetPresetAudio extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPresetRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Audio.Codec', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Audio.SampleRate', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Audio.BitRate', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Audio.Channels', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Audio.AudioPackingMode', props);
    return resource.getResponseField('Preset.Audio.AudioPackingMode') as unknown as string;
  }

  public get codecOptions(): ElasticTranscoderReadPresetPresetAudioCodecOptions {
    return new ElasticTranscoderReadPresetPresetAudioCodecOptions(this, 'CodecOptions', this.__resources, this.input);
  }

}

export class ElasticTranscoderReadPresetPresetAudioCodecOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPresetRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Audio.CodecOptions.Profile', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Audio.CodecOptions.BitDepth', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Audio.CodecOptions.BitOrder', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Audio.CodecOptions.Signed', props);
    return resource.getResponseField('Preset.Audio.CodecOptions.Signed') as unknown as string;
  }

}

export class ElasticTranscoderReadPresetPresetVideo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPresetRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.Codec', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.CodecOptions', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.KeyframesMaxDist', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.FixedGOP', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.BitRate', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.FrameRate', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.MaxFrameRate', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.Resolution', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.AspectRatio', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.MaxWidth', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.MaxHeight', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.DisplayAspectRatio', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.SizingPolicy', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.PaddingPolicy', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Video.Watermarks', props);
    return resource.getResponseField('Preset.Video.Watermarks') as unknown as shapes.ElasticTranscoderPresetWatermark[];
  }

}

export class ElasticTranscoderReadPresetPresetThumbnails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderReadPresetRequest) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Thumbnails.Format', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Thumbnails.Interval', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Thumbnails.Resolution', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Thumbnails.AspectRatio', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Thumbnails.MaxWidth', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Thumbnails.MaxHeight', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Thumbnails.SizingPolicy', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReadPreset.Preset.Thumbnails.PaddingPolicy', props);
    return resource.getResponseField('Preset.Thumbnails.PaddingPolicy') as unknown as string;
  }

}

export class ElasticTranscoderTestRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderTestRoleRequest) {
    super(scope, id);
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
          Role: this.input.role,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Topics: this.input.topics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestRole.Success', props);
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
          Role: this.input.role,
          InputBucket: this.input.inputBucket,
          OutputBucket: this.input.outputBucket,
          Topics: this.input.topics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestRole.Messages', props);
    return resource.getResponseField('Messages') as unknown as string[];
  }

}

export class ElasticTranscoderUpdatePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineRequest) {
    super(scope, id);
  }

  public get pipeline(): ElasticTranscoderUpdatePipelinePipeline {
    return new ElasticTranscoderUpdatePipelinePipeline(this, 'Pipeline', this.__resources, this.input);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as shapes.ElasticTranscoderWarning[];
  }

}

export class ElasticTranscoderUpdatePipelinePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.Id', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.Arn', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.Name', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.Status', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.InputBucket', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.OutputBucket', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.Role', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.AwsKmsKeyArn', props);
    return resource.getResponseField('Pipeline.AwsKmsKeyArn') as unknown as string;
  }

  public get notifications(): ElasticTranscoderUpdatePipelinePipelineNotifications {
    return new ElasticTranscoderUpdatePipelinePipelineNotifications(this, 'Notifications', this.__resources, this.input);
  }

  public get contentConfig(): ElasticTranscoderUpdatePipelinePipelineContentConfig {
    return new ElasticTranscoderUpdatePipelinePipelineContentConfig(this, 'ContentConfig', this.__resources, this.input);
  }

  public get thumbnailConfig(): ElasticTranscoderUpdatePipelinePipelineThumbnailConfig {
    return new ElasticTranscoderUpdatePipelinePipelineThumbnailConfig(this, 'ThumbnailConfig', this.__resources, this.input);
  }

}

export class ElasticTranscoderUpdatePipelinePipelineNotifications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.Notifications.Progressing', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.Notifications.Completed', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.Notifications.Warning', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.Notifications.Error', props);
    return resource.getResponseField('Pipeline.Notifications.Error') as unknown as string;
  }

}

export class ElasticTranscoderUpdatePipelinePipelineContentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.ContentConfig.Bucket', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.ContentConfig.StorageClass', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.ContentConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ContentConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderUpdatePipelinePipelineThumbnailConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.ThumbnailConfig.Bucket', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.ThumbnailConfig.StorageClass', props);
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
          Id: this.input.id,
          Name: this.input.name,
          InputBucket: this.input.inputBucket,
          Role: this.input.role,
          AwsKmsKeyArn: this.input.awsKmsKeyArn,
          Notifications: {
            Progressing: this.input.notifications?.progressing,
            Completed: this.input.notifications?.completed,
            Warning: this.input.notifications?.warning,
            Error: this.input.notifications?.error,
          },
          ContentConfig: {
            Bucket: this.input.contentConfig?.bucket,
            StorageClass: this.input.contentConfig?.storageClass,
            Permissions: this.input.contentConfig?.permissions,
          },
          ThumbnailConfig: {
            Bucket: this.input.thumbnailConfig?.bucket,
            StorageClass: this.input.thumbnailConfig?.storageClass,
            Permissions: this.input.thumbnailConfig?.permissions,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.Pipeline.ThumbnailConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderUpdatePipelineNotifications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest) {
    super(scope, id);
  }

  public get pipeline(): ElasticTranscoderUpdatePipelineNotificationsPipeline {
    return new ElasticTranscoderUpdatePipelineNotificationsPipeline(this, 'Pipeline', this.__resources, this.input);
  }

}

export class ElasticTranscoderUpdatePipelineNotificationsPipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.Id', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.Arn', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.Name', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.Status', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.InputBucket', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.OutputBucket', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.Role', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.AwsKmsKeyArn', props);
    return resource.getResponseField('Pipeline.AwsKmsKeyArn') as unknown as string;
  }

  public get notifications(): ElasticTranscoderUpdatePipelineNotificationsPipelineNotifications {
    return new ElasticTranscoderUpdatePipelineNotificationsPipelineNotifications(this, 'Notifications', this.__resources, this.input);
  }

  public get contentConfig(): ElasticTranscoderUpdatePipelineNotificationsPipelineContentConfig {
    return new ElasticTranscoderUpdatePipelineNotificationsPipelineContentConfig(this, 'ContentConfig', this.__resources, this.input);
  }

  public get thumbnailConfig(): ElasticTranscoderUpdatePipelineNotificationsPipelineThumbnailConfig {
    return new ElasticTranscoderUpdatePipelineNotificationsPipelineThumbnailConfig(this, 'ThumbnailConfig', this.__resources, this.input);
  }

}

export class ElasticTranscoderUpdatePipelineNotificationsPipelineNotifications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.Notifications.Progressing', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.Notifications.Completed', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.Notifications.Warning', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.Notifications.Error', props);
    return resource.getResponseField('Pipeline.Notifications.Error') as unknown as string;
  }

}

export class ElasticTranscoderUpdatePipelineNotificationsPipelineContentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.ContentConfig.Bucket', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.ContentConfig.StorageClass', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.ContentConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ContentConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderUpdatePipelineNotificationsPipelineThumbnailConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineNotificationsRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.ThumbnailConfig.Bucket', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.ThumbnailConfig.StorageClass', props);
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
          Id: this.input.id,
          Notifications: {
            Progressing: this.input.notifications.progressing,
            Completed: this.input.notifications.completed,
            Warning: this.input.notifications.warning,
            Error: this.input.notifications.error,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineNotifications.Pipeline.ThumbnailConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderUpdatePipelineStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineStatusRequest) {
    super(scope, id);
  }

  public get pipeline(): ElasticTranscoderUpdatePipelineStatusPipeline {
    return new ElasticTranscoderUpdatePipelineStatusPipeline(this, 'Pipeline', this.__resources, this.input);
  }

}

export class ElasticTranscoderUpdatePipelineStatusPipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineStatusRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.Id', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.Arn', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.Name', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.Status', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.InputBucket', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.OutputBucket', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.Role', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.AwsKmsKeyArn', props);
    return resource.getResponseField('Pipeline.AwsKmsKeyArn') as unknown as string;
  }

  public get notifications(): ElasticTranscoderUpdatePipelineStatusPipelineNotifications {
    return new ElasticTranscoderUpdatePipelineStatusPipelineNotifications(this, 'Notifications', this.__resources, this.input);
  }

  public get contentConfig(): ElasticTranscoderUpdatePipelineStatusPipelineContentConfig {
    return new ElasticTranscoderUpdatePipelineStatusPipelineContentConfig(this, 'ContentConfig', this.__resources, this.input);
  }

  public get thumbnailConfig(): ElasticTranscoderUpdatePipelineStatusPipelineThumbnailConfig {
    return new ElasticTranscoderUpdatePipelineStatusPipelineThumbnailConfig(this, 'ThumbnailConfig', this.__resources, this.input);
  }

}

export class ElasticTranscoderUpdatePipelineStatusPipelineNotifications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineStatusRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.Notifications.Progressing', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.Notifications.Completed', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.Notifications.Warning', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.Notifications.Error', props);
    return resource.getResponseField('Pipeline.Notifications.Error') as unknown as string;
  }

}

export class ElasticTranscoderUpdatePipelineStatusPipelineContentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineStatusRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.ContentConfig.Bucket', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.ContentConfig.StorageClass', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.ContentConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ContentConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

export class ElasticTranscoderUpdatePipelineStatusPipelineThumbnailConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticTranscoderUpdatePipelineStatusRequest) {
    super(scope, id);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.ThumbnailConfig.Bucket', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.ThumbnailConfig.StorageClass', props);
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
          Id: this.input.id,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipelineStatus.Pipeline.ThumbnailConfig.Permissions', props);
    return resource.getResponseField('Pipeline.ThumbnailConfig.Permissions') as unknown as shapes.ElasticTranscoderPermission[];
  }

}

