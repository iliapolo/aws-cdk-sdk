/**
 * @schema ElasticTranscoderCancelJobRequest
 */
export interface ElasticTranscoderCancelJobRequest {
  /**
   * @schema ElasticTranscoderCancelJobRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ElasticTranscoderCancelJobResponse
 */
export interface ElasticTranscoderCancelJobResponse {
}

/**
 * @schema ElasticTranscoderCreateJobRequest
 */
export interface ElasticTranscoderCreateJobRequest {
  /**
   * @schema ElasticTranscoderCreateJobRequest#PipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema ElasticTranscoderCreateJobRequest#Input
   */
  readonly input?: ElasticTranscoderJobInput;

  /**
   * @schema ElasticTranscoderCreateJobRequest#Inputs
   */
  readonly inputs?: ElasticTranscoderJobInput[];

  /**
   * @schema ElasticTranscoderCreateJobRequest#Output
   */
  readonly output?: ElasticTranscoderCreateJobOutput;

  /**
   * @schema ElasticTranscoderCreateJobRequest#Outputs
   */
  readonly outputs?: ElasticTranscoderCreateJobOutput[];

  /**
   * @schema ElasticTranscoderCreateJobRequest#OutputKeyPrefix
   */
  readonly outputKeyPrefix?: string;

  /**
   * @schema ElasticTranscoderCreateJobRequest#Playlists
   */
  readonly playlists?: ElasticTranscoderCreateJobPlaylist[];

  /**
   * @schema ElasticTranscoderCreateJobRequest#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

}

/**
 * @schema ElasticTranscoderCreateJobResponse
 */
export interface ElasticTranscoderCreateJobResponse {
  /**
   * @schema ElasticTranscoderCreateJobResponse#Job
   */
  readonly job?: ElasticTranscoderJob;

}

/**
 * @schema ElasticTranscoderCreatePipelineRequest
 */
export interface ElasticTranscoderCreatePipelineRequest {
  /**
   * @schema ElasticTranscoderCreatePipelineRequest#Name
   */
  readonly name: string;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#InputBucket
   */
  readonly inputBucket: string;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#OutputBucket
   */
  readonly outputBucket?: string;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#Role
   */
  readonly role: string;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#AwsKmsKeyArn
   */
  readonly awsKmsKeyArn?: string;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#Notifications
   */
  readonly notifications?: ElasticTranscoderNotifications;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#ContentConfig
   */
  readonly contentConfig?: ElasticTranscoderPipelineOutputConfig;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#ThumbnailConfig
   */
  readonly thumbnailConfig?: ElasticTranscoderPipelineOutputConfig;

}

/**
 * @schema ElasticTranscoderCreatePipelineResponse
 */
export interface ElasticTranscoderCreatePipelineResponse {
  /**
   * @schema ElasticTranscoderCreatePipelineResponse#Pipeline
   */
  readonly pipeline?: ElasticTranscoderPipeline;

  /**
   * @schema ElasticTranscoderCreatePipelineResponse#Warnings
   */
  readonly warnings?: ElasticTranscoderWarning[];

}

/**
 * @schema ElasticTranscoderCreatePresetRequest
 */
export interface ElasticTranscoderCreatePresetRequest {
  /**
   * @schema ElasticTranscoderCreatePresetRequest#Name
   */
  readonly name: string;

  /**
   * @schema ElasticTranscoderCreatePresetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticTranscoderCreatePresetRequest#Container
   */
  readonly container: string;

  /**
   * @schema ElasticTranscoderCreatePresetRequest#Video
   */
  readonly video?: ElasticTranscoderVideoParameters;

  /**
   * @schema ElasticTranscoderCreatePresetRequest#Audio
   */
  readonly audio?: ElasticTranscoderAudioParameters;

  /**
   * @schema ElasticTranscoderCreatePresetRequest#Thumbnails
   */
  readonly thumbnails?: ElasticTranscoderThumbnails;

}

/**
 * @schema ElasticTranscoderCreatePresetResponse
 */
export interface ElasticTranscoderCreatePresetResponse {
  /**
   * @schema ElasticTranscoderCreatePresetResponse#Preset
   */
  readonly preset?: ElasticTranscoderPreset;

  /**
   * @schema ElasticTranscoderCreatePresetResponse#Warning
   */
  readonly warning?: string;

}

/**
 * @schema ElasticTranscoderDeletePipelineRequest
 */
export interface ElasticTranscoderDeletePipelineRequest {
  /**
   * @schema ElasticTranscoderDeletePipelineRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ElasticTranscoderDeletePipelineResponse
 */
export interface ElasticTranscoderDeletePipelineResponse {
}

/**
 * @schema ElasticTranscoderDeletePresetRequest
 */
export interface ElasticTranscoderDeletePresetRequest {
  /**
   * @schema ElasticTranscoderDeletePresetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ElasticTranscoderDeletePresetResponse
 */
export interface ElasticTranscoderDeletePresetResponse {
}

/**
 * @schema ElasticTranscoderListJobsByPipelineRequest
 */
export interface ElasticTranscoderListJobsByPipelineRequest {
  /**
   * @schema ElasticTranscoderListJobsByPipelineRequest#PipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema ElasticTranscoderListJobsByPipelineRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ElasticTranscoderListJobsByPipelineRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ElasticTranscoderListJobsByPipelineResponse
 */
export interface ElasticTranscoderListJobsByPipelineResponse {
  /**
   * @schema ElasticTranscoderListJobsByPipelineResponse#Jobs
   */
  readonly jobs?: ElasticTranscoderJob[];

  /**
   * @schema ElasticTranscoderListJobsByPipelineResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ElasticTranscoderListJobsByStatusRequest
 */
export interface ElasticTranscoderListJobsByStatusRequest {
  /**
   * @schema ElasticTranscoderListJobsByStatusRequest#Status
   */
  readonly status: string;

  /**
   * @schema ElasticTranscoderListJobsByStatusRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ElasticTranscoderListJobsByStatusRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ElasticTranscoderListJobsByStatusResponse
 */
export interface ElasticTranscoderListJobsByStatusResponse {
  /**
   * @schema ElasticTranscoderListJobsByStatusResponse#Jobs
   */
  readonly jobs?: ElasticTranscoderJob[];

  /**
   * @schema ElasticTranscoderListJobsByStatusResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ElasticTranscoderListPipelinesRequest
 */
export interface ElasticTranscoderListPipelinesRequest {
  /**
   * @schema ElasticTranscoderListPipelinesRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ElasticTranscoderListPipelinesRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ElasticTranscoderListPipelinesResponse
 */
export interface ElasticTranscoderListPipelinesResponse {
  /**
   * @schema ElasticTranscoderListPipelinesResponse#Pipelines
   */
  readonly pipelines?: ElasticTranscoderPipeline[];

  /**
   * @schema ElasticTranscoderListPipelinesResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ElasticTranscoderListPresetsRequest
 */
export interface ElasticTranscoderListPresetsRequest {
  /**
   * @schema ElasticTranscoderListPresetsRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ElasticTranscoderListPresetsRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ElasticTranscoderListPresetsResponse
 */
export interface ElasticTranscoderListPresetsResponse {
  /**
   * @schema ElasticTranscoderListPresetsResponse#Presets
   */
  readonly presets?: ElasticTranscoderPreset[];

  /**
   * @schema ElasticTranscoderListPresetsResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ElasticTranscoderReadJobRequest
 */
export interface ElasticTranscoderReadJobRequest {
  /**
   * @schema ElasticTranscoderReadJobRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ElasticTranscoderReadJobResponse
 */
export interface ElasticTranscoderReadJobResponse {
  /**
   * @schema ElasticTranscoderReadJobResponse#Job
   */
  readonly job?: ElasticTranscoderJob;

}

/**
 * @schema ElasticTranscoderReadPipelineRequest
 */
export interface ElasticTranscoderReadPipelineRequest {
  /**
   * @schema ElasticTranscoderReadPipelineRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ElasticTranscoderReadPipelineResponse
 */
export interface ElasticTranscoderReadPipelineResponse {
  /**
   * @schema ElasticTranscoderReadPipelineResponse#Pipeline
   */
  readonly pipeline?: ElasticTranscoderPipeline;

  /**
   * @schema ElasticTranscoderReadPipelineResponse#Warnings
   */
  readonly warnings?: ElasticTranscoderWarning[];

}

/**
 * @schema ElasticTranscoderReadPresetRequest
 */
export interface ElasticTranscoderReadPresetRequest {
  /**
   * @schema ElasticTranscoderReadPresetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ElasticTranscoderReadPresetResponse
 */
export interface ElasticTranscoderReadPresetResponse {
  /**
   * @schema ElasticTranscoderReadPresetResponse#Preset
   */
  readonly preset?: ElasticTranscoderPreset;

}

/**
 * @schema ElasticTranscoderTestRoleRequest
 */
export interface ElasticTranscoderTestRoleRequest {
  /**
   * @schema ElasticTranscoderTestRoleRequest#Role
   */
  readonly role: string;

  /**
   * @schema ElasticTranscoderTestRoleRequest#InputBucket
   */
  readonly inputBucket: string;

  /**
   * @schema ElasticTranscoderTestRoleRequest#OutputBucket
   */
  readonly outputBucket: string;

  /**
   * @schema ElasticTranscoderTestRoleRequest#Topics
   */
  readonly topics: string[];

}

/**
 * @schema ElasticTranscoderTestRoleResponse
 */
export interface ElasticTranscoderTestRoleResponse {
  /**
   * @schema ElasticTranscoderTestRoleResponse#Success
   */
  readonly success?: string;

  /**
   * @schema ElasticTranscoderTestRoleResponse#Messages
   */
  readonly messages?: string[];

}

/**
 * @schema ElasticTranscoderUpdatePipelineRequest
 */
export interface ElasticTranscoderUpdatePipelineRequest {
  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#Id
   */
  readonly id: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#InputBucket
   */
  readonly inputBucket?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#Role
   */
  readonly role?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#AwsKmsKeyArn
   */
  readonly awsKmsKeyArn?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#Notifications
   */
  readonly notifications?: ElasticTranscoderNotifications;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#ContentConfig
   */
  readonly contentConfig?: ElasticTranscoderPipelineOutputConfig;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#ThumbnailConfig
   */
  readonly thumbnailConfig?: ElasticTranscoderPipelineOutputConfig;

}

/**
 * @schema ElasticTranscoderUpdatePipelineResponse
 */
export interface ElasticTranscoderUpdatePipelineResponse {
  /**
   * @schema ElasticTranscoderUpdatePipelineResponse#Pipeline
   */
  readonly pipeline?: ElasticTranscoderPipeline;

  /**
   * @schema ElasticTranscoderUpdatePipelineResponse#Warnings
   */
  readonly warnings?: ElasticTranscoderWarning[];

}

/**
 * @schema ElasticTranscoderUpdatePipelineNotificationsRequest
 */
export interface ElasticTranscoderUpdatePipelineNotificationsRequest {
  /**
   * @schema ElasticTranscoderUpdatePipelineNotificationsRequest#Id
   */
  readonly id: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineNotificationsRequest#Notifications
   */
  readonly notifications: ElasticTranscoderNotifications;

}

/**
 * @schema ElasticTranscoderUpdatePipelineNotificationsResponse
 */
export interface ElasticTranscoderUpdatePipelineNotificationsResponse {
  /**
   * @schema ElasticTranscoderUpdatePipelineNotificationsResponse#Pipeline
   */
  readonly pipeline?: ElasticTranscoderPipeline;

}

/**
 * @schema ElasticTranscoderUpdatePipelineStatusRequest
 */
export interface ElasticTranscoderUpdatePipelineStatusRequest {
  /**
   * @schema ElasticTranscoderUpdatePipelineStatusRequest#Id
   */
  readonly id: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineStatusRequest#Status
   */
  readonly status: string;

}

/**
 * @schema ElasticTranscoderUpdatePipelineStatusResponse
 */
export interface ElasticTranscoderUpdatePipelineStatusResponse {
  /**
   * @schema ElasticTranscoderUpdatePipelineStatusResponse#Pipeline
   */
  readonly pipeline?: ElasticTranscoderPipeline;

}

/**
 * @schema ElasticTranscoderJobInput
 */
export interface ElasticTranscoderJobInput {
  /**
   * @schema ElasticTranscoderJobInput#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderJobInput#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema ElasticTranscoderJobInput#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema ElasticTranscoderJobInput#AspectRatio
   */
  readonly aspectRatio?: string;

  /**
   * @schema ElasticTranscoderJobInput#Interlaced
   */
  readonly interlaced?: string;

  /**
   * @schema ElasticTranscoderJobInput#Container
   */
  readonly container?: string;

  /**
   * @schema ElasticTranscoderJobInput#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

  /**
   * @schema ElasticTranscoderJobInput#TimeSpan
   */
  readonly timeSpan?: ElasticTranscoderTimeSpan;

  /**
   * @schema ElasticTranscoderJobInput#InputCaptions
   */
  readonly inputCaptions?: ElasticTranscoderInputCaptions;

  /**
   * @schema ElasticTranscoderJobInput#DetectedProperties
   */
  readonly detectedProperties?: ElasticTranscoderDetectedProperties;

}

/**
 * @schema ElasticTranscoderCreateJobOutput
 */
export interface ElasticTranscoderCreateJobOutput {
  /**
   * @schema ElasticTranscoderCreateJobOutput#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderCreateJobOutput#ThumbnailPattern
   */
  readonly thumbnailPattern?: string;

  /**
   * @schema ElasticTranscoderCreateJobOutput#ThumbnailEncryption
   */
  readonly thumbnailEncryption?: ElasticTranscoderEncryption;

  /**
   * @schema ElasticTranscoderCreateJobOutput#Rotate
   */
  readonly rotate?: string;

  /**
   * @schema ElasticTranscoderCreateJobOutput#PresetId
   */
  readonly presetId?: string;

  /**
   * @schema ElasticTranscoderCreateJobOutput#SegmentDuration
   */
  readonly segmentDuration?: string;

  /**
   * @schema ElasticTranscoderCreateJobOutput#Watermarks
   */
  readonly watermarks?: ElasticTranscoderJobWatermark[];

  /**
   * @schema ElasticTranscoderCreateJobOutput#AlbumArt
   */
  readonly albumArt?: ElasticTranscoderJobAlbumArt;

  /**
   * @schema ElasticTranscoderCreateJobOutput#Composition
   */
  readonly composition?: ElasticTranscoderClip[];

  /**
   * @schema ElasticTranscoderCreateJobOutput#Captions
   */
  readonly captions?: ElasticTranscoderCaptions;

  /**
   * @schema ElasticTranscoderCreateJobOutput#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

}

/**
 * @schema ElasticTranscoderCreateJobPlaylist
 */
export interface ElasticTranscoderCreateJobPlaylist {
  /**
   * @schema ElasticTranscoderCreateJobPlaylist#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderCreateJobPlaylist#Format
   */
  readonly format?: string;

  /**
   * @schema ElasticTranscoderCreateJobPlaylist#OutputKeys
   */
  readonly outputKeys?: string[];

  /**
   * @schema ElasticTranscoderCreateJobPlaylist#HlsContentProtection
   */
  readonly hlsContentProtection?: ElasticTranscoderHlsContentProtection;

  /**
   * @schema ElasticTranscoderCreateJobPlaylist#PlayReadyDrm
   */
  readonly playReadyDrm?: ElasticTranscoderPlayReadyDrm;

}

/**
 * @schema ElasticTranscoderJob
 */
export interface ElasticTranscoderJob {
  /**
   * @schema ElasticTranscoderJob#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderJob#Arn
   */
  readonly arn?: string;

  /**
   * @schema ElasticTranscoderJob#PipelineId
   */
  readonly pipelineId?: string;

  /**
   * @schema ElasticTranscoderJob#Input
   */
  readonly input?: ElasticTranscoderJobInput;

  /**
   * @schema ElasticTranscoderJob#Inputs
   */
  readonly inputs?: ElasticTranscoderJobInput[];

  /**
   * @schema ElasticTranscoderJob#Output
   */
  readonly output?: ElasticTranscoderJobOutput;

  /**
   * @schema ElasticTranscoderJob#Outputs
   */
  readonly outputs?: ElasticTranscoderJobOutput[];

  /**
   * @schema ElasticTranscoderJob#OutputKeyPrefix
   */
  readonly outputKeyPrefix?: string;

  /**
   * @schema ElasticTranscoderJob#Playlists
   */
  readonly playlists?: ElasticTranscoderPlaylist[];

  /**
   * @schema ElasticTranscoderJob#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticTranscoderJob#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

  /**
   * @schema ElasticTranscoderJob#Timing
   */
  readonly timing?: ElasticTranscoderTiming;

}

/**
 * @schema ElasticTranscoderNotifications
 */
export interface ElasticTranscoderNotifications {
  /**
   * @schema ElasticTranscoderNotifications#Progressing
   */
  readonly progressing?: string;

  /**
   * @schema ElasticTranscoderNotifications#Completed
   */
  readonly completed?: string;

  /**
   * @schema ElasticTranscoderNotifications#Warning
   */
  readonly warning?: string;

  /**
   * @schema ElasticTranscoderNotifications#Error
   */
  readonly error?: string;

}

/**
 * @schema ElasticTranscoderPipelineOutputConfig
 */
export interface ElasticTranscoderPipelineOutputConfig {
  /**
   * @schema ElasticTranscoderPipelineOutputConfig#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema ElasticTranscoderPipelineOutputConfig#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema ElasticTranscoderPipelineOutputConfig#Permissions
   */
  readonly permissions?: ElasticTranscoderPermission[];

}

/**
 * @schema ElasticTranscoderPipeline
 */
export interface ElasticTranscoderPipeline {
  /**
   * @schema ElasticTranscoderPipeline#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderPipeline#Arn
   */
  readonly arn?: string;

  /**
   * @schema ElasticTranscoderPipeline#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderPipeline#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticTranscoderPipeline#InputBucket
   */
  readonly inputBucket?: string;

  /**
   * @schema ElasticTranscoderPipeline#OutputBucket
   */
  readonly outputBucket?: string;

  /**
   * @schema ElasticTranscoderPipeline#Role
   */
  readonly role?: string;

  /**
   * @schema ElasticTranscoderPipeline#AwsKmsKeyArn
   */
  readonly awsKmsKeyArn?: string;

  /**
   * @schema ElasticTranscoderPipeline#Notifications
   */
  readonly notifications?: ElasticTranscoderNotifications;

  /**
   * @schema ElasticTranscoderPipeline#ContentConfig
   */
  readonly contentConfig?: ElasticTranscoderPipelineOutputConfig;

  /**
   * @schema ElasticTranscoderPipeline#ThumbnailConfig
   */
  readonly thumbnailConfig?: ElasticTranscoderPipelineOutputConfig;

}

/**
 * @schema ElasticTranscoderWarning
 */
export interface ElasticTranscoderWarning {
  /**
   * @schema ElasticTranscoderWarning#Code
   */
  readonly code?: string;

  /**
   * @schema ElasticTranscoderWarning#Message
   */
  readonly message?: string;

}

/**
 * @schema ElasticTranscoderVideoParameters
 */
export interface ElasticTranscoderVideoParameters {
  /**
   * @schema ElasticTranscoderVideoParameters#Codec
   */
  readonly codec?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#CodecOptions
   */
  readonly codecOptions?: { [key: string]: string };

  /**
   * @schema ElasticTranscoderVideoParameters#KeyframesMaxDist
   */
  readonly keyframesMaxDist?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#FixedGOP
   */
  readonly fixedGop?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#BitRate
   */
  readonly bitRate?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#MaxFrameRate
   */
  readonly maxFrameRate?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#AspectRatio
   */
  readonly aspectRatio?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#DisplayAspectRatio
   */
  readonly displayAspectRatio?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#PaddingPolicy
   */
  readonly paddingPolicy?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#Watermarks
   */
  readonly watermarks?: ElasticTranscoderPresetWatermark[];

}

/**
 * @schema ElasticTranscoderAudioParameters
 */
export interface ElasticTranscoderAudioParameters {
  /**
   * @schema ElasticTranscoderAudioParameters#Codec
   */
  readonly codec?: string;

  /**
   * @schema ElasticTranscoderAudioParameters#SampleRate
   */
  readonly sampleRate?: string;

  /**
   * @schema ElasticTranscoderAudioParameters#BitRate
   */
  readonly bitRate?: string;

  /**
   * @schema ElasticTranscoderAudioParameters#Channels
   */
  readonly channels?: string;

  /**
   * @schema ElasticTranscoderAudioParameters#AudioPackingMode
   */
  readonly audioPackingMode?: string;

  /**
   * @schema ElasticTranscoderAudioParameters#CodecOptions
   */
  readonly codecOptions?: ElasticTranscoderAudioCodecOptions;

}

/**
 * @schema ElasticTranscoderThumbnails
 */
export interface ElasticTranscoderThumbnails {
  /**
   * @schema ElasticTranscoderThumbnails#Format
   */
  readonly format?: string;

  /**
   * @schema ElasticTranscoderThumbnails#Interval
   */
  readonly interval?: string;

  /**
   * @schema ElasticTranscoderThumbnails#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema ElasticTranscoderThumbnails#AspectRatio
   */
  readonly aspectRatio?: string;

  /**
   * @schema ElasticTranscoderThumbnails#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema ElasticTranscoderThumbnails#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema ElasticTranscoderThumbnails#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema ElasticTranscoderThumbnails#PaddingPolicy
   */
  readonly paddingPolicy?: string;

}

/**
 * @schema ElasticTranscoderPreset
 */
export interface ElasticTranscoderPreset {
  /**
   * @schema ElasticTranscoderPreset#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderPreset#Arn
   */
  readonly arn?: string;

  /**
   * @schema ElasticTranscoderPreset#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderPreset#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticTranscoderPreset#Container
   */
  readonly container?: string;

  /**
   * @schema ElasticTranscoderPreset#Audio
   */
  readonly audio?: ElasticTranscoderAudioParameters;

  /**
   * @schema ElasticTranscoderPreset#Video
   */
  readonly video?: ElasticTranscoderVideoParameters;

  /**
   * @schema ElasticTranscoderPreset#Thumbnails
   */
  readonly thumbnails?: ElasticTranscoderThumbnails;

  /**
   * @schema ElasticTranscoderPreset#Type
   */
  readonly type?: string;

}

/**
 * @schema ElasticTranscoderEncryption
 */
export interface ElasticTranscoderEncryption {
  /**
   * @schema ElasticTranscoderEncryption#Mode
   */
  readonly mode?: string;

  /**
   * @schema ElasticTranscoderEncryption#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderEncryption#KeyMd5
   */
  readonly keyMd5?: string;

  /**
   * @schema ElasticTranscoderEncryption#InitializationVector
   */
  readonly initializationVector?: string;

}

/**
 * @schema ElasticTranscoderTimeSpan
 */
export interface ElasticTranscoderTimeSpan {
  /**
   * @schema ElasticTranscoderTimeSpan#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ElasticTranscoderTimeSpan#Duration
   */
  readonly duration?: string;

}

/**
 * @schema ElasticTranscoderInputCaptions
 */
export interface ElasticTranscoderInputCaptions {
  /**
   * @schema ElasticTranscoderInputCaptions#MergePolicy
   */
  readonly mergePolicy?: string;

  /**
   * @schema ElasticTranscoderInputCaptions#CaptionSources
   */
  readonly captionSources?: ElasticTranscoderCaptionSource[];

}

/**
 * @schema ElasticTranscoderDetectedProperties
 */
export interface ElasticTranscoderDetectedProperties {
  /**
   * @schema ElasticTranscoderDetectedProperties#Width
   */
  readonly width?: number;

  /**
   * @schema ElasticTranscoderDetectedProperties#Height
   */
  readonly height?: number;

  /**
   * @schema ElasticTranscoderDetectedProperties#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema ElasticTranscoderDetectedProperties#FileSize
   */
  readonly fileSize?: number;

  /**
   * @schema ElasticTranscoderDetectedProperties#DurationMillis
   */
  readonly durationMillis?: number;

}

/**
 * @schema ElasticTranscoderJobWatermark
 */
export interface ElasticTranscoderJobWatermark {
  /**
   * @schema ElasticTranscoderJobWatermark#PresetWatermarkId
   */
  readonly presetWatermarkId?: string;

  /**
   * @schema ElasticTranscoderJobWatermark#InputKey
   */
  readonly inputKey?: string;

  /**
   * @schema ElasticTranscoderJobWatermark#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

}

/**
 * @schema ElasticTranscoderJobAlbumArt
 */
export interface ElasticTranscoderJobAlbumArt {
  /**
   * @schema ElasticTranscoderJobAlbumArt#MergePolicy
   */
  readonly mergePolicy?: string;

  /**
   * @schema ElasticTranscoderJobAlbumArt#Artwork
   */
  readonly artwork?: ElasticTranscoderArtwork[];

}

/**
 * @schema ElasticTranscoderClip
 */
export interface ElasticTranscoderClip {
  /**
   * @schema ElasticTranscoderClip#TimeSpan
   */
  readonly timeSpan?: ElasticTranscoderTimeSpan;

}

/**
 * @schema ElasticTranscoderCaptions
 */
export interface ElasticTranscoderCaptions {
  /**
   * @schema ElasticTranscoderCaptions#MergePolicy
   */
  readonly mergePolicy?: string;

  /**
   * @schema ElasticTranscoderCaptions#CaptionSources
   */
  readonly captionSources?: ElasticTranscoderCaptionSource[];

  /**
   * @schema ElasticTranscoderCaptions#CaptionFormats
   */
  readonly captionFormats?: ElasticTranscoderCaptionFormat[];

}

/**
 * @schema ElasticTranscoderHlsContentProtection
 */
export interface ElasticTranscoderHlsContentProtection {
  /**
   * @schema ElasticTranscoderHlsContentProtection#Method
   */
  readonly method?: string;

  /**
   * @schema ElasticTranscoderHlsContentProtection#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderHlsContentProtection#KeyMd5
   */
  readonly keyMd5?: string;

  /**
   * @schema ElasticTranscoderHlsContentProtection#InitializationVector
   */
  readonly initializationVector?: string;

  /**
   * @schema ElasticTranscoderHlsContentProtection#LicenseAcquisitionUrl
   */
  readonly licenseAcquisitionUrl?: string;

  /**
   * @schema ElasticTranscoderHlsContentProtection#KeyStoragePolicy
   */
  readonly keyStoragePolicy?: string;

}

/**
 * @schema ElasticTranscoderPlayReadyDrm
 */
export interface ElasticTranscoderPlayReadyDrm {
  /**
   * @schema ElasticTranscoderPlayReadyDrm#Format
   */
  readonly format?: string;

  /**
   * @schema ElasticTranscoderPlayReadyDrm#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderPlayReadyDrm#KeyMd5
   */
  readonly keyMd5?: string;

  /**
   * @schema ElasticTranscoderPlayReadyDrm#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema ElasticTranscoderPlayReadyDrm#InitializationVector
   */
  readonly initializationVector?: string;

  /**
   * @schema ElasticTranscoderPlayReadyDrm#LicenseAcquisitionUrl
   */
  readonly licenseAcquisitionUrl?: string;

}

/**
 * @schema ElasticTranscoderJobOutput
 */
export interface ElasticTranscoderJobOutput {
  /**
   * @schema ElasticTranscoderJobOutput#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderJobOutput#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderJobOutput#ThumbnailPattern
   */
  readonly thumbnailPattern?: string;

  /**
   * @schema ElasticTranscoderJobOutput#ThumbnailEncryption
   */
  readonly thumbnailEncryption?: ElasticTranscoderEncryption;

  /**
   * @schema ElasticTranscoderJobOutput#Rotate
   */
  readonly rotate?: string;

  /**
   * @schema ElasticTranscoderJobOutput#PresetId
   */
  readonly presetId?: string;

  /**
   * @schema ElasticTranscoderJobOutput#SegmentDuration
   */
  readonly segmentDuration?: string;

  /**
   * @schema ElasticTranscoderJobOutput#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticTranscoderJobOutput#StatusDetail
   */
  readonly statusDetail?: string;

  /**
   * @schema ElasticTranscoderJobOutput#Duration
   */
  readonly duration?: number;

  /**
   * @schema ElasticTranscoderJobOutput#Width
   */
  readonly width?: number;

  /**
   * @schema ElasticTranscoderJobOutput#Height
   */
  readonly height?: number;

  /**
   * @schema ElasticTranscoderJobOutput#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema ElasticTranscoderJobOutput#FileSize
   */
  readonly fileSize?: number;

  /**
   * @schema ElasticTranscoderJobOutput#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema ElasticTranscoderJobOutput#Watermarks
   */
  readonly watermarks?: ElasticTranscoderJobWatermark[];

  /**
   * @schema ElasticTranscoderJobOutput#AlbumArt
   */
  readonly albumArt?: ElasticTranscoderJobAlbumArt;

  /**
   * @schema ElasticTranscoderJobOutput#Composition
   */
  readonly composition?: ElasticTranscoderClip[];

  /**
   * @schema ElasticTranscoderJobOutput#Captions
   */
  readonly captions?: ElasticTranscoderCaptions;

  /**
   * @schema ElasticTranscoderJobOutput#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

  /**
   * @schema ElasticTranscoderJobOutput#AppliedColorSpaceConversion
   */
  readonly appliedColorSpaceConversion?: string;

}

/**
 * @schema ElasticTranscoderPlaylist
 */
export interface ElasticTranscoderPlaylist {
  /**
   * @schema ElasticTranscoderPlaylist#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderPlaylist#Format
   */
  readonly format?: string;

  /**
   * @schema ElasticTranscoderPlaylist#OutputKeys
   */
  readonly outputKeys?: string[];

  /**
   * @schema ElasticTranscoderPlaylist#HlsContentProtection
   */
  readonly hlsContentProtection?: ElasticTranscoderHlsContentProtection;

  /**
   * @schema ElasticTranscoderPlaylist#PlayReadyDrm
   */
  readonly playReadyDrm?: ElasticTranscoderPlayReadyDrm;

  /**
   * @schema ElasticTranscoderPlaylist#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticTranscoderPlaylist#StatusDetail
   */
  readonly statusDetail?: string;

}

/**
 * @schema ElasticTranscoderTiming
 */
export interface ElasticTranscoderTiming {
  /**
   * @schema ElasticTranscoderTiming#SubmitTimeMillis
   */
  readonly submitTimeMillis?: number;

  /**
   * @schema ElasticTranscoderTiming#StartTimeMillis
   */
  readonly startTimeMillis?: number;

  /**
   * @schema ElasticTranscoderTiming#FinishTimeMillis
   */
  readonly finishTimeMillis?: number;

}

/**
 * @schema ElasticTranscoderPermission
 */
export interface ElasticTranscoderPermission {
  /**
   * @schema ElasticTranscoderPermission#GranteeType
   */
  readonly granteeType?: string;

  /**
   * @schema ElasticTranscoderPermission#Grantee
   */
  readonly grantee?: string;

  /**
   * @schema ElasticTranscoderPermission#Access
   */
  readonly access?: string[];

}

/**
 * @schema ElasticTranscoderPresetWatermark
 */
export interface ElasticTranscoderPresetWatermark {
  /**
   * @schema ElasticTranscoderPresetWatermark#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#HorizontalAlign
   */
  readonly horizontalAlign?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#HorizontalOffset
   */
  readonly horizontalOffset?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#VerticalAlign
   */
  readonly verticalAlign?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#VerticalOffset
   */
  readonly verticalOffset?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#Opacity
   */
  readonly opacity?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#Target
   */
  readonly target?: string;

}

/**
 * @schema ElasticTranscoderAudioCodecOptions
 */
export interface ElasticTranscoderAudioCodecOptions {
  /**
   * @schema ElasticTranscoderAudioCodecOptions#Profile
   */
  readonly profile?: string;

  /**
   * @schema ElasticTranscoderAudioCodecOptions#BitDepth
   */
  readonly bitDepth?: string;

  /**
   * @schema ElasticTranscoderAudioCodecOptions#BitOrder
   */
  readonly bitOrder?: string;

  /**
   * @schema ElasticTranscoderAudioCodecOptions#Signed
   */
  readonly signed?: string;

}

/**
 * @schema ElasticTranscoderCaptionSource
 */
export interface ElasticTranscoderCaptionSource {
  /**
   * @schema ElasticTranscoderCaptionSource#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderCaptionSource#Language
   */
  readonly language?: string;

  /**
   * @schema ElasticTranscoderCaptionSource#TimeOffset
   */
  readonly timeOffset?: string;

  /**
   * @schema ElasticTranscoderCaptionSource#Label
   */
  readonly label?: string;

  /**
   * @schema ElasticTranscoderCaptionSource#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

}

/**
 * @schema ElasticTranscoderArtwork
 */
export interface ElasticTranscoderArtwork {
  /**
   * @schema ElasticTranscoderArtwork#InputKey
   */
  readonly inputKey?: string;

  /**
   * @schema ElasticTranscoderArtwork#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema ElasticTranscoderArtwork#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema ElasticTranscoderArtwork#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema ElasticTranscoderArtwork#PaddingPolicy
   */
  readonly paddingPolicy?: string;

  /**
   * @schema ElasticTranscoderArtwork#AlbumArtFormat
   */
  readonly albumArtFormat?: string;

  /**
   * @schema ElasticTranscoderArtwork#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

}

/**
 * @schema ElasticTranscoderCaptionFormat
 */
export interface ElasticTranscoderCaptionFormat {
  /**
   * @schema ElasticTranscoderCaptionFormat#Format
   */
  readonly format?: string;

  /**
   * @schema ElasticTranscoderCaptionFormat#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema ElasticTranscoderCaptionFormat#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

}
