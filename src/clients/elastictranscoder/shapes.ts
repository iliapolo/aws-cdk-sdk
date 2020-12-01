/**
 * @schema CancelJobRequest
 */
export interface CancelJobRequest {
  /**
   * @schema CancelJobRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CancelJobResponse
 */
export interface CancelJobResponse {
}

/**
 * @schema CreateJobRequest
 */
export interface CreateJobRequest {
  /**
   * @schema CreateJobRequest#PipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema CreateJobRequest#Input
   */
  readonly input?: JobInput;

  /**
   * @schema CreateJobRequest#Inputs
   */
  readonly inputs?: JobInput[];

  /**
   * @schema CreateJobRequest#Output
   */
  readonly output?: CreateJobOutput;

  /**
   * @schema CreateJobRequest#Outputs
   */
  readonly outputs?: CreateJobOutput[];

  /**
   * @schema CreateJobRequest#OutputKeyPrefix
   */
  readonly outputKeyPrefix?: string;

  /**
   * @schema CreateJobRequest#Playlists
   */
  readonly playlists?: CreateJobPlaylist[];

  /**
   * @schema CreateJobRequest#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

}

/**
 * @schema CreateJobResponse
 */
export interface CreateJobResponse {
  /**
   * @schema CreateJobResponse#Job
   */
  readonly job?: Job;

}

/**
 * @schema CreatePipelineRequest
 */
export interface CreatePipelineRequest {
  /**
   * @schema CreatePipelineRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreatePipelineRequest#InputBucket
   */
  readonly inputBucket: string;

  /**
   * @schema CreatePipelineRequest#OutputBucket
   */
  readonly outputBucket?: string;

  /**
   * @schema CreatePipelineRequest#Role
   */
  readonly role: string;

  /**
   * @schema CreatePipelineRequest#AwsKmsKeyArn
   */
  readonly awsKmsKeyArn?: string;

  /**
   * @schema CreatePipelineRequest#Notifications
   */
  readonly notifications?: Notifications;

  /**
   * @schema CreatePipelineRequest#ContentConfig
   */
  readonly contentConfig?: PipelineOutputConfig;

  /**
   * @schema CreatePipelineRequest#ThumbnailConfig
   */
  readonly thumbnailConfig?: PipelineOutputConfig;

}

/**
 * @schema CreatePipelineResponse
 */
export interface CreatePipelineResponse {
  /**
   * @schema CreatePipelineResponse#Pipeline
   */
  readonly pipeline?: Pipeline;

  /**
   * @schema CreatePipelineResponse#Warnings
   */
  readonly warnings?: Warning[];

}

/**
 * @schema CreatePresetRequest
 */
export interface CreatePresetRequest {
  /**
   * @schema CreatePresetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreatePresetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreatePresetRequest#Container
   */
  readonly container: string;

  /**
   * @schema CreatePresetRequest#Video
   */
  readonly video?: VideoParameters;

  /**
   * @schema CreatePresetRequest#Audio
   */
  readonly audio?: AudioParameters;

  /**
   * @schema CreatePresetRequest#Thumbnails
   */
  readonly thumbnails?: Thumbnails;

}

/**
 * @schema CreatePresetResponse
 */
export interface CreatePresetResponse {
  /**
   * @schema CreatePresetResponse#Preset
   */
  readonly preset?: Preset;

  /**
   * @schema CreatePresetResponse#Warning
   */
  readonly warning?: string;

}

/**
 * @schema DeletePipelineRequest
 */
export interface DeletePipelineRequest {
  /**
   * @schema DeletePipelineRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeletePipelineResponse
 */
export interface DeletePipelineResponse {
}

/**
 * @schema DeletePresetRequest
 */
export interface DeletePresetRequest {
  /**
   * @schema DeletePresetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeletePresetResponse
 */
export interface DeletePresetResponse {
}

/**
 * @schema ListJobsByPipelineRequest
 */
export interface ListJobsByPipelineRequest {
  /**
   * @schema ListJobsByPipelineRequest#PipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema ListJobsByPipelineRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ListJobsByPipelineRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListJobsByPipelineResponse
 */
export interface ListJobsByPipelineResponse {
  /**
   * @schema ListJobsByPipelineResponse#Jobs
   */
  readonly jobs?: Job[];

  /**
   * @schema ListJobsByPipelineResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListJobsByStatusRequest
 */
export interface ListJobsByStatusRequest {
  /**
   * @schema ListJobsByStatusRequest#Status
   */
  readonly status: string;

  /**
   * @schema ListJobsByStatusRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ListJobsByStatusRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListJobsByStatusResponse
 */
export interface ListJobsByStatusResponse {
  /**
   * @schema ListJobsByStatusResponse#Jobs
   */
  readonly jobs?: Job[];

  /**
   * @schema ListJobsByStatusResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListPipelinesRequest
 */
export interface ListPipelinesRequest {
  /**
   * @schema ListPipelinesRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ListPipelinesRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListPipelinesResponse
 */
export interface ListPipelinesResponse {
  /**
   * @schema ListPipelinesResponse#Pipelines
   */
  readonly pipelines?: Pipeline[];

  /**
   * @schema ListPipelinesResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListPresetsRequest
 */
export interface ListPresetsRequest {
  /**
   * @schema ListPresetsRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ListPresetsRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListPresetsResponse
 */
export interface ListPresetsResponse {
  /**
   * @schema ListPresetsResponse#Presets
   */
  readonly presets?: Preset[];

  /**
   * @schema ListPresetsResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ReadJobRequest
 */
export interface ReadJobRequest {
  /**
   * @schema ReadJobRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ReadJobResponse
 */
export interface ReadJobResponse {
  /**
   * @schema ReadJobResponse#Job
   */
  readonly job?: Job;

}

/**
 * @schema ReadPipelineRequest
 */
export interface ReadPipelineRequest {
  /**
   * @schema ReadPipelineRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ReadPipelineResponse
 */
export interface ReadPipelineResponse {
  /**
   * @schema ReadPipelineResponse#Pipeline
   */
  readonly pipeline?: Pipeline;

  /**
   * @schema ReadPipelineResponse#Warnings
   */
  readonly warnings?: Warning[];

}

/**
 * @schema ReadPresetRequest
 */
export interface ReadPresetRequest {
  /**
   * @schema ReadPresetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ReadPresetResponse
 */
export interface ReadPresetResponse {
  /**
   * @schema ReadPresetResponse#Preset
   */
  readonly preset?: Preset;

}

/**
 * @schema TestRoleRequest
 */
export interface TestRoleRequest {
  /**
   * @schema TestRoleRequest#Role
   */
  readonly role: string;

  /**
   * @schema TestRoleRequest#InputBucket
   */
  readonly inputBucket: string;

  /**
   * @schema TestRoleRequest#OutputBucket
   */
  readonly outputBucket: string;

  /**
   * @schema TestRoleRequest#Topics
   */
  readonly topics: string[];

}

/**
 * @schema TestRoleResponse
 */
export interface TestRoleResponse {
  /**
   * @schema TestRoleResponse#Success
   */
  readonly success?: string;

  /**
   * @schema TestRoleResponse#Messages
   */
  readonly messages?: string[];

}

/**
 * @schema UpdatePipelineRequest
 */
export interface UpdatePipelineRequest {
  /**
   * @schema UpdatePipelineRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdatePipelineRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdatePipelineRequest#InputBucket
   */
  readonly inputBucket?: string;

  /**
   * @schema UpdatePipelineRequest#Role
   */
  readonly role?: string;

  /**
   * @schema UpdatePipelineRequest#AwsKmsKeyArn
   */
  readonly awsKmsKeyArn?: string;

  /**
   * @schema UpdatePipelineRequest#Notifications
   */
  readonly notifications?: Notifications;

  /**
   * @schema UpdatePipelineRequest#ContentConfig
   */
  readonly contentConfig?: PipelineOutputConfig;

  /**
   * @schema UpdatePipelineRequest#ThumbnailConfig
   */
  readonly thumbnailConfig?: PipelineOutputConfig;

}

/**
 * @schema UpdatePipelineResponse
 */
export interface UpdatePipelineResponse {
  /**
   * @schema UpdatePipelineResponse#Pipeline
   */
  readonly pipeline?: Pipeline;

  /**
   * @schema UpdatePipelineResponse#Warnings
   */
  readonly warnings?: Warning[];

}

/**
 * @schema UpdatePipelineNotificationsRequest
 */
export interface UpdatePipelineNotificationsRequest {
  /**
   * @schema UpdatePipelineNotificationsRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdatePipelineNotificationsRequest#Notifications
   */
  readonly notifications: Notifications;

}

/**
 * @schema UpdatePipelineNotificationsResponse
 */
export interface UpdatePipelineNotificationsResponse {
  /**
   * @schema UpdatePipelineNotificationsResponse#Pipeline
   */
  readonly pipeline?: Pipeline;

}

/**
 * @schema UpdatePipelineStatusRequest
 */
export interface UpdatePipelineStatusRequest {
  /**
   * @schema UpdatePipelineStatusRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdatePipelineStatusRequest#Status
   */
  readonly status: string;

}

/**
 * @schema UpdatePipelineStatusResponse
 */
export interface UpdatePipelineStatusResponse {
  /**
   * @schema UpdatePipelineStatusResponse#Pipeline
   */
  readonly pipeline?: Pipeline;

}

/**
 * @schema JobInput
 */
export interface JobInput {
  /**
   * @schema JobInput#Key
   */
  readonly key?: string;

  /**
   * @schema JobInput#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema JobInput#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema JobInput#AspectRatio
   */
  readonly aspectRatio?: string;

  /**
   * @schema JobInput#Interlaced
   */
  readonly interlaced?: string;

  /**
   * @schema JobInput#Container
   */
  readonly container?: string;

  /**
   * @schema JobInput#Encryption
   */
  readonly encryption?: Encryption;

  /**
   * @schema JobInput#TimeSpan
   */
  readonly timeSpan?: TimeSpan;

  /**
   * @schema JobInput#InputCaptions
   */
  readonly inputCaptions?: InputCaptions;

  /**
   * @schema JobInput#DetectedProperties
   */
  readonly detectedProperties?: DetectedProperties;

}

/**
 * @schema CreateJobOutput
 */
export interface CreateJobOutput {
  /**
   * @schema CreateJobOutput#Key
   */
  readonly key?: string;

  /**
   * @schema CreateJobOutput#ThumbnailPattern
   */
  readonly thumbnailPattern?: string;

  /**
   * @schema CreateJobOutput#ThumbnailEncryption
   */
  readonly thumbnailEncryption?: Encryption;

  /**
   * @schema CreateJobOutput#Rotate
   */
  readonly rotate?: string;

  /**
   * @schema CreateJobOutput#PresetId
   */
  readonly presetId?: string;

  /**
   * @schema CreateJobOutput#SegmentDuration
   */
  readonly segmentDuration?: string;

  /**
   * @schema CreateJobOutput#Watermarks
   */
  readonly watermarks?: JobWatermark[];

  /**
   * @schema CreateJobOutput#AlbumArt
   */
  readonly albumArt?: JobAlbumArt;

  /**
   * @schema CreateJobOutput#Composition
   */
  readonly composition?: Clip[];

  /**
   * @schema CreateJobOutput#Captions
   */
  readonly captions?: Captions;

  /**
   * @schema CreateJobOutput#Encryption
   */
  readonly encryption?: Encryption;

}

/**
 * @schema CreateJobPlaylist
 */
export interface CreateJobPlaylist {
  /**
   * @schema CreateJobPlaylist#Name
   */
  readonly name?: string;

  /**
   * @schema CreateJobPlaylist#Format
   */
  readonly format?: string;

  /**
   * @schema CreateJobPlaylist#OutputKeys
   */
  readonly outputKeys?: string[];

  /**
   * @schema CreateJobPlaylist#HlsContentProtection
   */
  readonly hlsContentProtection?: HlsContentProtection;

  /**
   * @schema CreateJobPlaylist#PlayReadyDrm
   */
  readonly playReadyDrm?: PlayReadyDrm;

}

/**
 * @schema Job
 */
export interface Job {
  /**
   * @schema Job#Id
   */
  readonly id?: string;

  /**
   * @schema Job#Arn
   */
  readonly arn?: string;

  /**
   * @schema Job#PipelineId
   */
  readonly pipelineId?: string;

  /**
   * @schema Job#Input
   */
  readonly input?: JobInput;

  /**
   * @schema Job#Inputs
   */
  readonly inputs?: JobInput[];

  /**
   * @schema Job#Output
   */
  readonly output?: JobOutput;

  /**
   * @schema Job#Outputs
   */
  readonly outputs?: JobOutput[];

  /**
   * @schema Job#OutputKeyPrefix
   */
  readonly outputKeyPrefix?: string;

  /**
   * @schema Job#Playlists
   */
  readonly playlists?: Playlist[];

  /**
   * @schema Job#Status
   */
  readonly status?: string;

  /**
   * @schema Job#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

  /**
   * @schema Job#Timing
   */
  readonly timing?: Timing;

}

/**
 * @schema Notifications
 */
export interface Notifications {
  /**
   * @schema Notifications#Progressing
   */
  readonly progressing?: string;

  /**
   * @schema Notifications#Completed
   */
  readonly completed?: string;

  /**
   * @schema Notifications#Warning
   */
  readonly warning?: string;

  /**
   * @schema Notifications#Error
   */
  readonly error?: string;

}

/**
 * @schema PipelineOutputConfig
 */
export interface PipelineOutputConfig {
  /**
   * @schema PipelineOutputConfig#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema PipelineOutputConfig#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema PipelineOutputConfig#Permissions
   */
  readonly permissions?: Permission[];

}

/**
 * @schema Pipeline
 */
export interface Pipeline {
  /**
   * @schema Pipeline#Id
   */
  readonly id?: string;

  /**
   * @schema Pipeline#Arn
   */
  readonly arn?: string;

  /**
   * @schema Pipeline#Name
   */
  readonly name?: string;

  /**
   * @schema Pipeline#Status
   */
  readonly status?: string;

  /**
   * @schema Pipeline#InputBucket
   */
  readonly inputBucket?: string;

  /**
   * @schema Pipeline#OutputBucket
   */
  readonly outputBucket?: string;

  /**
   * @schema Pipeline#Role
   */
  readonly role?: string;

  /**
   * @schema Pipeline#AwsKmsKeyArn
   */
  readonly awsKmsKeyArn?: string;

  /**
   * @schema Pipeline#Notifications
   */
  readonly notifications?: Notifications;

  /**
   * @schema Pipeline#ContentConfig
   */
  readonly contentConfig?: PipelineOutputConfig;

  /**
   * @schema Pipeline#ThumbnailConfig
   */
  readonly thumbnailConfig?: PipelineOutputConfig;

}

/**
 * @schema Warning
 */
export interface Warning {
  /**
   * @schema Warning#Code
   */
  readonly code?: string;

  /**
   * @schema Warning#Message
   */
  readonly message?: string;

}

/**
 * @schema VideoParameters
 */
export interface VideoParameters {
  /**
   * @schema VideoParameters#Codec
   */
  readonly codec?: string;

  /**
   * @schema VideoParameters#CodecOptions
   */
  readonly codecOptions?: { [key: string]: string };

  /**
   * @schema VideoParameters#KeyframesMaxDist
   */
  readonly keyframesMaxDist?: string;

  /**
   * @schema VideoParameters#FixedGOP
   */
  readonly fixedGop?: string;

  /**
   * @schema VideoParameters#BitRate
   */
  readonly bitRate?: string;

  /**
   * @schema VideoParameters#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema VideoParameters#MaxFrameRate
   */
  readonly maxFrameRate?: string;

  /**
   * @schema VideoParameters#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema VideoParameters#AspectRatio
   */
  readonly aspectRatio?: string;

  /**
   * @schema VideoParameters#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema VideoParameters#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema VideoParameters#DisplayAspectRatio
   */
  readonly displayAspectRatio?: string;

  /**
   * @schema VideoParameters#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema VideoParameters#PaddingPolicy
   */
  readonly paddingPolicy?: string;

  /**
   * @schema VideoParameters#Watermarks
   */
  readonly watermarks?: PresetWatermark[];

}

/**
 * @schema AudioParameters
 */
export interface AudioParameters {
  /**
   * @schema AudioParameters#Codec
   */
  readonly codec?: string;

  /**
   * @schema AudioParameters#SampleRate
   */
  readonly sampleRate?: string;

  /**
   * @schema AudioParameters#BitRate
   */
  readonly bitRate?: string;

  /**
   * @schema AudioParameters#Channels
   */
  readonly channels?: string;

  /**
   * @schema AudioParameters#AudioPackingMode
   */
  readonly audioPackingMode?: string;

  /**
   * @schema AudioParameters#CodecOptions
   */
  readonly codecOptions?: AudioCodecOptions;

}

/**
 * @schema Thumbnails
 */
export interface Thumbnails {
  /**
   * @schema Thumbnails#Format
   */
  readonly format?: string;

  /**
   * @schema Thumbnails#Interval
   */
  readonly interval?: string;

  /**
   * @schema Thumbnails#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema Thumbnails#AspectRatio
   */
  readonly aspectRatio?: string;

  /**
   * @schema Thumbnails#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema Thumbnails#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema Thumbnails#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema Thumbnails#PaddingPolicy
   */
  readonly paddingPolicy?: string;

}

/**
 * @schema Preset
 */
export interface Preset {
  /**
   * @schema Preset#Id
   */
  readonly id?: string;

  /**
   * @schema Preset#Arn
   */
  readonly arn?: string;

  /**
   * @schema Preset#Name
   */
  readonly name?: string;

  /**
   * @schema Preset#Description
   */
  readonly description?: string;

  /**
   * @schema Preset#Container
   */
  readonly container?: string;

  /**
   * @schema Preset#Audio
   */
  readonly audio?: AudioParameters;

  /**
   * @schema Preset#Video
   */
  readonly video?: VideoParameters;

  /**
   * @schema Preset#Thumbnails
   */
  readonly thumbnails?: Thumbnails;

  /**
   * @schema Preset#Type
   */
  readonly type?: string;

}

/**
 * @schema Encryption
 */
export interface Encryption {
  /**
   * @schema Encryption#Mode
   */
  readonly mode?: string;

  /**
   * @schema Encryption#Key
   */
  readonly key?: string;

  /**
   * @schema Encryption#KeyMd5
   */
  readonly keyMd5?: string;

  /**
   * @schema Encryption#InitializationVector
   */
  readonly initializationVector?: string;

}

/**
 * @schema TimeSpan
 */
export interface TimeSpan {
  /**
   * @schema TimeSpan#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema TimeSpan#Duration
   */
  readonly duration?: string;

}

/**
 * @schema InputCaptions
 */
export interface InputCaptions {
  /**
   * @schema InputCaptions#MergePolicy
   */
  readonly mergePolicy?: string;

  /**
   * @schema InputCaptions#CaptionSources
   */
  readonly captionSources?: CaptionSource[];

}

/**
 * @schema DetectedProperties
 */
export interface DetectedProperties {
  /**
   * @schema DetectedProperties#Width
   */
  readonly width?: number;

  /**
   * @schema DetectedProperties#Height
   */
  readonly height?: number;

  /**
   * @schema DetectedProperties#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema DetectedProperties#FileSize
   */
  readonly fileSize?: number;

  /**
   * @schema DetectedProperties#DurationMillis
   */
  readonly durationMillis?: number;

}

/**
 * @schema JobWatermark
 */
export interface JobWatermark {
  /**
   * @schema JobWatermark#PresetWatermarkId
   */
  readonly presetWatermarkId?: string;

  /**
   * @schema JobWatermark#InputKey
   */
  readonly inputKey?: string;

  /**
   * @schema JobWatermark#Encryption
   */
  readonly encryption?: Encryption;

}

/**
 * @schema JobAlbumArt
 */
export interface JobAlbumArt {
  /**
   * @schema JobAlbumArt#MergePolicy
   */
  readonly mergePolicy?: string;

  /**
   * @schema JobAlbumArt#Artwork
   */
  readonly artwork?: Artwork[];

}

/**
 * @schema Clip
 */
export interface Clip {
  /**
   * @schema Clip#TimeSpan
   */
  readonly timeSpan?: TimeSpan;

}

/**
 * @schema Captions
 */
export interface Captions {
  /**
   * @schema Captions#MergePolicy
   */
  readonly mergePolicy?: string;

  /**
   * @schema Captions#CaptionSources
   */
  readonly captionSources?: CaptionSource[];

  /**
   * @schema Captions#CaptionFormats
   */
  readonly captionFormats?: CaptionFormat[];

}

/**
 * @schema HlsContentProtection
 */
export interface HlsContentProtection {
  /**
   * @schema HlsContentProtection#Method
   */
  readonly method?: string;

  /**
   * @schema HlsContentProtection#Key
   */
  readonly key?: string;

  /**
   * @schema HlsContentProtection#KeyMd5
   */
  readonly keyMd5?: string;

  /**
   * @schema HlsContentProtection#InitializationVector
   */
  readonly initializationVector?: string;

  /**
   * @schema HlsContentProtection#LicenseAcquisitionUrl
   */
  readonly licenseAcquisitionUrl?: string;

  /**
   * @schema HlsContentProtection#KeyStoragePolicy
   */
  readonly keyStoragePolicy?: string;

}

/**
 * @schema PlayReadyDrm
 */
export interface PlayReadyDrm {
  /**
   * @schema PlayReadyDrm#Format
   */
  readonly format?: string;

  /**
   * @schema PlayReadyDrm#Key
   */
  readonly key?: string;

  /**
   * @schema PlayReadyDrm#KeyMd5
   */
  readonly keyMd5?: string;

  /**
   * @schema PlayReadyDrm#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema PlayReadyDrm#InitializationVector
   */
  readonly initializationVector?: string;

  /**
   * @schema PlayReadyDrm#LicenseAcquisitionUrl
   */
  readonly licenseAcquisitionUrl?: string;

}

/**
 * @schema JobOutput
 */
export interface JobOutput {
  /**
   * @schema JobOutput#Id
   */
  readonly id?: string;

  /**
   * @schema JobOutput#Key
   */
  readonly key?: string;

  /**
   * @schema JobOutput#ThumbnailPattern
   */
  readonly thumbnailPattern?: string;

  /**
   * @schema JobOutput#ThumbnailEncryption
   */
  readonly thumbnailEncryption?: Encryption;

  /**
   * @schema JobOutput#Rotate
   */
  readonly rotate?: string;

  /**
   * @schema JobOutput#PresetId
   */
  readonly presetId?: string;

  /**
   * @schema JobOutput#SegmentDuration
   */
  readonly segmentDuration?: string;

  /**
   * @schema JobOutput#Status
   */
  readonly status?: string;

  /**
   * @schema JobOutput#StatusDetail
   */
  readonly statusDetail?: string;

  /**
   * @schema JobOutput#Duration
   */
  readonly duration?: number;

  /**
   * @schema JobOutput#Width
   */
  readonly width?: number;

  /**
   * @schema JobOutput#Height
   */
  readonly height?: number;

  /**
   * @schema JobOutput#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema JobOutput#FileSize
   */
  readonly fileSize?: number;

  /**
   * @schema JobOutput#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema JobOutput#Watermarks
   */
  readonly watermarks?: JobWatermark[];

  /**
   * @schema JobOutput#AlbumArt
   */
  readonly albumArt?: JobAlbumArt;

  /**
   * @schema JobOutput#Composition
   */
  readonly composition?: Clip[];

  /**
   * @schema JobOutput#Captions
   */
  readonly captions?: Captions;

  /**
   * @schema JobOutput#Encryption
   */
  readonly encryption?: Encryption;

  /**
   * @schema JobOutput#AppliedColorSpaceConversion
   */
  readonly appliedColorSpaceConversion?: string;

}

/**
 * @schema Playlist
 */
export interface Playlist {
  /**
   * @schema Playlist#Name
   */
  readonly name?: string;

  /**
   * @schema Playlist#Format
   */
  readonly format?: string;

  /**
   * @schema Playlist#OutputKeys
   */
  readonly outputKeys?: string[];

  /**
   * @schema Playlist#HlsContentProtection
   */
  readonly hlsContentProtection?: HlsContentProtection;

  /**
   * @schema Playlist#PlayReadyDrm
   */
  readonly playReadyDrm?: PlayReadyDrm;

  /**
   * @schema Playlist#Status
   */
  readonly status?: string;

  /**
   * @schema Playlist#StatusDetail
   */
  readonly statusDetail?: string;

}

/**
 * @schema Timing
 */
export interface Timing {
  /**
   * @schema Timing#SubmitTimeMillis
   */
  readonly submitTimeMillis?: number;

  /**
   * @schema Timing#StartTimeMillis
   */
  readonly startTimeMillis?: number;

  /**
   * @schema Timing#FinishTimeMillis
   */
  readonly finishTimeMillis?: number;

}

/**
 * @schema Permission
 */
export interface Permission {
  /**
   * @schema Permission#GranteeType
   */
  readonly granteeType?: string;

  /**
   * @schema Permission#Grantee
   */
  readonly grantee?: string;

  /**
   * @schema Permission#Access
   */
  readonly access?: string[];

}

/**
 * @schema PresetWatermark
 */
export interface PresetWatermark {
  /**
   * @schema PresetWatermark#Id
   */
  readonly id?: string;

  /**
   * @schema PresetWatermark#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema PresetWatermark#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema PresetWatermark#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema PresetWatermark#HorizontalAlign
   */
  readonly horizontalAlign?: string;

  /**
   * @schema PresetWatermark#HorizontalOffset
   */
  readonly horizontalOffset?: string;

  /**
   * @schema PresetWatermark#VerticalAlign
   */
  readonly verticalAlign?: string;

  /**
   * @schema PresetWatermark#VerticalOffset
   */
  readonly verticalOffset?: string;

  /**
   * @schema PresetWatermark#Opacity
   */
  readonly opacity?: string;

  /**
   * @schema PresetWatermark#Target
   */
  readonly target?: string;

}

/**
 * @schema AudioCodecOptions
 */
export interface AudioCodecOptions {
  /**
   * @schema AudioCodecOptions#Profile
   */
  readonly profile?: string;

  /**
   * @schema AudioCodecOptions#BitDepth
   */
  readonly bitDepth?: string;

  /**
   * @schema AudioCodecOptions#BitOrder
   */
  readonly bitOrder?: string;

  /**
   * @schema AudioCodecOptions#Signed
   */
  readonly signed?: string;

}

/**
 * @schema CaptionSource
 */
export interface CaptionSource {
  /**
   * @schema CaptionSource#Key
   */
  readonly key?: string;

  /**
   * @schema CaptionSource#Language
   */
  readonly language?: string;

  /**
   * @schema CaptionSource#TimeOffset
   */
  readonly timeOffset?: string;

  /**
   * @schema CaptionSource#Label
   */
  readonly label?: string;

  /**
   * @schema CaptionSource#Encryption
   */
  readonly encryption?: Encryption;

}

/**
 * @schema Artwork
 */
export interface Artwork {
  /**
   * @schema Artwork#InputKey
   */
  readonly inputKey?: string;

  /**
   * @schema Artwork#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema Artwork#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema Artwork#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema Artwork#PaddingPolicy
   */
  readonly paddingPolicy?: string;

  /**
   * @schema Artwork#AlbumArtFormat
   */
  readonly albumArtFormat?: string;

  /**
   * @schema Artwork#Encryption
   */
  readonly encryption?: Encryption;

}

/**
 * @schema CaptionFormat
 */
export interface CaptionFormat {
  /**
   * @schema CaptionFormat#Format
   */
  readonly format?: string;

  /**
   * @schema CaptionFormat#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema CaptionFormat#Encryption
   */
  readonly encryption?: Encryption;

}
