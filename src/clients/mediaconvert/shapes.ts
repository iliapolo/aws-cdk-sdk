/**
 * @schema AssociateCertificateRequest
 */
export interface AssociateCertificateRequest {
  /**
   * @schema AssociateCertificateRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema AssociateCertificateResponse
 */
export interface AssociateCertificateResponse {
}

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
   * @schema CreateJobRequest#AccelerationSettings
   */
  readonly accelerationSettings?: AccelerationSettings;

  /**
   * @schema CreateJobRequest#BillingTagsSource
   */
  readonly billingTagsSource?: string;

  /**
   * @schema CreateJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateJobRequest#HopDestinations
   */
  readonly hopDestinations?: HopDestination[];

  /**
   * @schema CreateJobRequest#JobTemplate
   */
  readonly jobTemplate?: string;

  /**
   * @schema CreateJobRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema CreateJobRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema CreateJobRequest#Role
   */
  readonly role: string;

  /**
   * @schema CreateJobRequest#Settings
   */
  readonly settings: JobSettings;

  /**
   * @schema CreateJobRequest#SimulateReservedQueue
   */
  readonly simulateReservedQueue?: string;

  /**
   * @schema CreateJobRequest#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema CreateJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

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
 * @schema CreateJobTemplateRequest
 */
export interface CreateJobTemplateRequest {
  /**
   * @schema CreateJobTemplateRequest#AccelerationSettings
   */
  readonly accelerationSettings?: AccelerationSettings;

  /**
   * @schema CreateJobTemplateRequest#Category
   */
  readonly category?: string;

  /**
   * @schema CreateJobTemplateRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateJobTemplateRequest#HopDestinations
   */
  readonly hopDestinations?: HopDestination[];

  /**
   * @schema CreateJobTemplateRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateJobTemplateRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema CreateJobTemplateRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema CreateJobTemplateRequest#Settings
   */
  readonly settings: JobTemplateSettings;

  /**
   * @schema CreateJobTemplateRequest#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema CreateJobTemplateRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateJobTemplateResponse
 */
export interface CreateJobTemplateResponse {
  /**
   * @schema CreateJobTemplateResponse#JobTemplate
   */
  readonly jobTemplate?: JobTemplate;

}

/**
 * @schema CreatePresetRequest
 */
export interface CreatePresetRequest {
  /**
   * @schema CreatePresetRequest#Category
   */
  readonly category?: string;

  /**
   * @schema CreatePresetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreatePresetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreatePresetRequest#Settings
   */
  readonly settings: PresetSettings;

  /**
   * @schema CreatePresetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreatePresetResponse
 */
export interface CreatePresetResponse {
  /**
   * @schema CreatePresetResponse#Preset
   */
  readonly preset?: Preset;

}

/**
 * @schema CreateQueueRequest
 */
export interface CreateQueueRequest {
  /**
   * @schema CreateQueueRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateQueueRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateQueueRequest#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema CreateQueueRequest#ReservationPlanSettings
   */
  readonly reservationPlanSettings?: ReservationPlanSettings;

  /**
   * @schema CreateQueueRequest#Status
   */
  readonly status?: string;

  /**
   * @schema CreateQueueRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateQueueResponse
 */
export interface CreateQueueResponse {
  /**
   * @schema CreateQueueResponse#Queue
   */
  readonly queue?: Queue;

}

/**
 * @schema DeleteJobTemplateRequest
 */
export interface DeleteJobTemplateRequest {
  /**
   * @schema DeleteJobTemplateRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteJobTemplateResponse
 */
export interface DeleteJobTemplateResponse {
}

/**
 * @schema DeletePresetRequest
 */
export interface DeletePresetRequest {
  /**
   * @schema DeletePresetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeletePresetResponse
 */
export interface DeletePresetResponse {
}

/**
 * @schema DeleteQueueRequest
 */
export interface DeleteQueueRequest {
  /**
   * @schema DeleteQueueRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteQueueResponse
 */
export interface DeleteQueueResponse {
}

/**
 * @schema DescribeEndpointsRequest
 */
export interface DescribeEndpointsRequest {
  /**
   * @schema DescribeEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeEndpointsRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema DescribeEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEndpointsResponse
 */
export interface DescribeEndpointsResponse {
  /**
   * @schema DescribeEndpointsResponse#Endpoints
   */
  readonly endpoints?: Endpoint[];

  /**
   * @schema DescribeEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DisassociateCertificateRequest
 */
export interface DisassociateCertificateRequest {
  /**
   * @schema DisassociateCertificateRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema DisassociateCertificateResponse
 */
export interface DisassociateCertificateResponse {
}

/**
 * @schema GetJobRequest
 */
export interface GetJobRequest {
  /**
   * @schema GetJobRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetJobResponse
 */
export interface GetJobResponse {
  /**
   * @schema GetJobResponse#Job
   */
  readonly job?: Job;

}

/**
 * @schema GetJobTemplateRequest
 */
export interface GetJobTemplateRequest {
  /**
   * @schema GetJobTemplateRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetJobTemplateResponse
 */
export interface GetJobTemplateResponse {
  /**
   * @schema GetJobTemplateResponse#JobTemplate
   */
  readonly jobTemplate?: JobTemplate;

}

/**
 * @schema GetPresetRequest
 */
export interface GetPresetRequest {
  /**
   * @schema GetPresetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetPresetResponse
 */
export interface GetPresetResponse {
  /**
   * @schema GetPresetResponse#Preset
   */
  readonly preset?: Preset;

}

/**
 * @schema GetQueueRequest
 */
export interface GetQueueRequest {
  /**
   * @schema GetQueueRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetQueueResponse
 */
export interface GetQueueResponse {
  /**
   * @schema GetQueueResponse#Queue
   */
  readonly queue?: Queue;

}

/**
 * @schema ListJobTemplatesRequest
 */
export interface ListJobTemplatesRequest {
  /**
   * @schema ListJobTemplatesRequest#Category
   */
  readonly category?: string;

  /**
   * @schema ListJobTemplatesRequest#ListBy
   */
  readonly listBy?: string;

  /**
   * @schema ListJobTemplatesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListJobTemplatesRequest#Order
   */
  readonly order?: string;

}

/**
 * @schema ListJobTemplatesResponse
 */
export interface ListJobTemplatesResponse {
  /**
   * @schema ListJobTemplatesResponse#JobTemplates
   */
  readonly jobTemplates?: JobTemplate[];

  /**
   * @schema ListJobTemplatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsRequest
 */
export interface ListJobsRequest {
  /**
   * @schema ListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListJobsRequest#Order
   */
  readonly order?: string;

  /**
   * @schema ListJobsRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema ListJobsRequest#Status
   */
  readonly status?: string;

}

/**
 * @schema ListJobsResponse
 */
export interface ListJobsResponse {
  /**
   * @schema ListJobsResponse#Jobs
   */
  readonly jobs?: Job[];

  /**
   * @schema ListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPresetsRequest
 */
export interface ListPresetsRequest {
  /**
   * @schema ListPresetsRequest#Category
   */
  readonly category?: string;

  /**
   * @schema ListPresetsRequest#ListBy
   */
  readonly listBy?: string;

  /**
   * @schema ListPresetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPresetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPresetsRequest#Order
   */
  readonly order?: string;

}

/**
 * @schema ListPresetsResponse
 */
export interface ListPresetsResponse {
  /**
   * @schema ListPresetsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPresetsResponse#Presets
   */
  readonly presets?: Preset[];

}

/**
 * @schema ListQueuesRequest
 */
export interface ListQueuesRequest {
  /**
   * @schema ListQueuesRequest#ListBy
   */
  readonly listBy?: string;

  /**
   * @schema ListQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListQueuesRequest#Order
   */
  readonly order?: string;

}

/**
 * @schema ListQueuesResponse
 */
export interface ListQueuesResponse {
  /**
   * @schema ListQueuesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListQueuesResponse#Queues
   */
  readonly queues?: Queue[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#ResourceTags
   */
  readonly resourceTags?: ResourceTags;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateJobTemplateRequest
 */
export interface UpdateJobTemplateRequest {
  /**
   * @schema UpdateJobTemplateRequest#AccelerationSettings
   */
  readonly accelerationSettings?: AccelerationSettings;

  /**
   * @schema UpdateJobTemplateRequest#Category
   */
  readonly category?: string;

  /**
   * @schema UpdateJobTemplateRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateJobTemplateRequest#HopDestinations
   */
  readonly hopDestinations?: HopDestination[];

  /**
   * @schema UpdateJobTemplateRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateJobTemplateRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema UpdateJobTemplateRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema UpdateJobTemplateRequest#Settings
   */
  readonly settings?: JobTemplateSettings;

  /**
   * @schema UpdateJobTemplateRequest#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

}

/**
 * @schema UpdateJobTemplateResponse
 */
export interface UpdateJobTemplateResponse {
  /**
   * @schema UpdateJobTemplateResponse#JobTemplate
   */
  readonly jobTemplate?: JobTemplate;

}

/**
 * @schema UpdatePresetRequest
 */
export interface UpdatePresetRequest {
  /**
   * @schema UpdatePresetRequest#Category
   */
  readonly category?: string;

  /**
   * @schema UpdatePresetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdatePresetRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdatePresetRequest#Settings
   */
  readonly settings?: PresetSettings;

}

/**
 * @schema UpdatePresetResponse
 */
export interface UpdatePresetResponse {
  /**
   * @schema UpdatePresetResponse#Preset
   */
  readonly preset?: Preset;

}

/**
 * @schema UpdateQueueRequest
 */
export interface UpdateQueueRequest {
  /**
   * @schema UpdateQueueRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateQueueRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateQueueRequest#ReservationPlanSettings
   */
  readonly reservationPlanSettings?: ReservationPlanSettings;

  /**
   * @schema UpdateQueueRequest#Status
   */
  readonly status?: string;

}

/**
 * @schema UpdateQueueResponse
 */
export interface UpdateQueueResponse {
  /**
   * @schema UpdateQueueResponse#Queue
   */
  readonly queue?: Queue;

}

/**
 * @schema AccelerationSettings
 */
export interface AccelerationSettings {
  /**
   * @schema AccelerationSettings#Mode
   */
  readonly mode: string;

}

/**
 * @schema HopDestination
 */
export interface HopDestination {
  /**
   * @schema HopDestination#Priority
   */
  readonly priority?: number;

  /**
   * @schema HopDestination#Queue
   */
  readonly queue?: string;

  /**
   * @schema HopDestination#WaitMinutes
   */
  readonly waitMinutes?: number;

}

/**
 * @schema JobSettings
 */
export interface JobSettings {
  /**
   * @schema JobSettings#AdAvailOffset
   */
  readonly adAvailOffset?: number;

  /**
   * @schema JobSettings#AvailBlanking
   */
  readonly availBlanking?: AvailBlanking;

  /**
   * @schema JobSettings#Esam
   */
  readonly esam?: EsamSettings;

  /**
   * @schema JobSettings#Inputs
   */
  readonly inputs?: Input[];

  /**
   * @schema JobSettings#MotionImageInserter
   */
  readonly motionImageInserter?: MotionImageInserter;

  /**
   * @schema JobSettings#NielsenConfiguration
   */
  readonly nielsenConfiguration?: NielsenConfiguration;

  /**
   * @schema JobSettings#NielsenNonLinearWatermark
   */
  readonly nielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;

  /**
   * @schema JobSettings#OutputGroups
   */
  readonly outputGroups?: OutputGroup[];

  /**
   * @schema JobSettings#TimecodeConfig
   */
  readonly timecodeConfig?: TimecodeConfig;

  /**
   * @schema JobSettings#TimedMetadataInsertion
   */
  readonly timedMetadataInsertion?: TimedMetadataInsertion;

}

/**
 * @schema Job
 */
export interface Job {
  /**
   * @schema Job#AccelerationSettings
   */
  readonly accelerationSettings?: AccelerationSettings;

  /**
   * @schema Job#AccelerationStatus
   */
  readonly accelerationStatus?: string;

  /**
   * @schema Job#Arn
   */
  readonly arn?: string;

  /**
   * @schema Job#BillingTagsSource
   */
  readonly billingTagsSource?: string;

  /**
   * @schema Job#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Job#CurrentPhase
   */
  readonly currentPhase?: string;

  /**
   * @schema Job#ErrorCode
   */
  readonly errorCode?: number;

  /**
   * @schema Job#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema Job#HopDestinations
   */
  readonly hopDestinations?: HopDestination[];

  /**
   * @schema Job#Id
   */
  readonly id?: string;

  /**
   * @schema Job#JobPercentComplete
   */
  readonly jobPercentComplete?: number;

  /**
   * @schema Job#JobTemplate
   */
  readonly jobTemplate?: string;

  /**
   * @schema Job#Messages
   */
  readonly messages?: JobMessages;

  /**
   * @schema Job#OutputGroupDetails
   */
  readonly outputGroupDetails?: OutputGroupDetail[];

  /**
   * @schema Job#Priority
   */
  readonly priority?: number;

  /**
   * @schema Job#Queue
   */
  readonly queue?: string;

  /**
   * @schema Job#QueueTransitions
   */
  readonly queueTransitions?: QueueTransition[];

  /**
   * @schema Job#RetryCount
   */
  readonly retryCount?: number;

  /**
   * @schema Job#Role
   */
  readonly role: string;

  /**
   * @schema Job#Settings
   */
  readonly settings: JobSettings;

  /**
   * @schema Job#SimulateReservedQueue
   */
  readonly simulateReservedQueue?: string;

  /**
   * @schema Job#Status
   */
  readonly status?: string;

  /**
   * @schema Job#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema Job#Timing
   */
  readonly timing?: Timing;

  /**
   * @schema Job#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

}

/**
 * @schema JobTemplateSettings
 */
export interface JobTemplateSettings {
  /**
   * @schema JobTemplateSettings#AdAvailOffset
   */
  readonly adAvailOffset?: number;

  /**
   * @schema JobTemplateSettings#AvailBlanking
   */
  readonly availBlanking?: AvailBlanking;

  /**
   * @schema JobTemplateSettings#Esam
   */
  readonly esam?: EsamSettings;

  /**
   * @schema JobTemplateSettings#Inputs
   */
  readonly inputs?: InputTemplate[];

  /**
   * @schema JobTemplateSettings#MotionImageInserter
   */
  readonly motionImageInserter?: MotionImageInserter;

  /**
   * @schema JobTemplateSettings#NielsenConfiguration
   */
  readonly nielsenConfiguration?: NielsenConfiguration;

  /**
   * @schema JobTemplateSettings#NielsenNonLinearWatermark
   */
  readonly nielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;

  /**
   * @schema JobTemplateSettings#OutputGroups
   */
  readonly outputGroups?: OutputGroup[];

  /**
   * @schema JobTemplateSettings#TimecodeConfig
   */
  readonly timecodeConfig?: TimecodeConfig;

  /**
   * @schema JobTemplateSettings#TimedMetadataInsertion
   */
  readonly timedMetadataInsertion?: TimedMetadataInsertion;

}

/**
 * @schema JobTemplate
 */
export interface JobTemplate {
  /**
   * @schema JobTemplate#AccelerationSettings
   */
  readonly accelerationSettings?: AccelerationSettings;

  /**
   * @schema JobTemplate#Arn
   */
  readonly arn?: string;

  /**
   * @schema JobTemplate#Category
   */
  readonly category?: string;

  /**
   * @schema JobTemplate#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema JobTemplate#Description
   */
  readonly description?: string;

  /**
   * @schema JobTemplate#HopDestinations
   */
  readonly hopDestinations?: HopDestination[];

  /**
   * @schema JobTemplate#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema JobTemplate#Name
   */
  readonly name: string;

  /**
   * @schema JobTemplate#Priority
   */
  readonly priority?: number;

  /**
   * @schema JobTemplate#Queue
   */
  readonly queue?: string;

  /**
   * @schema JobTemplate#Settings
   */
  readonly settings: JobTemplateSettings;

  /**
   * @schema JobTemplate#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema JobTemplate#Type
   */
  readonly type?: string;

}

/**
 * @schema PresetSettings
 */
export interface PresetSettings {
  /**
   * @schema PresetSettings#AudioDescriptions
   */
  readonly audioDescriptions?: AudioDescription[];

  /**
   * @schema PresetSettings#CaptionDescriptions
   */
  readonly captionDescriptions?: CaptionDescriptionPreset[];

  /**
   * @schema PresetSettings#ContainerSettings
   */
  readonly containerSettings?: ContainerSettings;

  /**
   * @schema PresetSettings#VideoDescription
   */
  readonly videoDescription?: VideoDescription;

}

/**
 * @schema Preset
 */
export interface Preset {
  /**
   * @schema Preset#Arn
   */
  readonly arn?: string;

  /**
   * @schema Preset#Category
   */
  readonly category?: string;

  /**
   * @schema Preset#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Preset#Description
   */
  readonly description?: string;

  /**
   * @schema Preset#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema Preset#Name
   */
  readonly name: string;

  /**
   * @schema Preset#Settings
   */
  readonly settings: PresetSettings;

  /**
   * @schema Preset#Type
   */
  readonly type?: string;

}

/**
 * @schema ReservationPlanSettings
 */
export interface ReservationPlanSettings {
  /**
   * @schema ReservationPlanSettings#Commitment
   */
  readonly commitment: string;

  /**
   * @schema ReservationPlanSettings#RenewalType
   */
  readonly renewalType: string;

  /**
   * @schema ReservationPlanSettings#ReservedSlots
   */
  readonly reservedSlots: number;

}

/**
 * @schema Queue
 */
export interface Queue {
  /**
   * @schema Queue#Arn
   */
  readonly arn?: string;

  /**
   * @schema Queue#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Queue#Description
   */
  readonly description?: string;

  /**
   * @schema Queue#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema Queue#Name
   */
  readonly name: string;

  /**
   * @schema Queue#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema Queue#ProgressingJobsCount
   */
  readonly progressingJobsCount?: number;

  /**
   * @schema Queue#ReservationPlan
   */
  readonly reservationPlan?: ReservationPlan;

  /**
   * @schema Queue#Status
   */
  readonly status?: string;

  /**
   * @schema Queue#SubmittedJobsCount
   */
  readonly submittedJobsCount?: number;

  /**
   * @schema Queue#Type
   */
  readonly type?: string;

}

/**
 * @schema Endpoint
 */
export interface Endpoint {
  /**
   * @schema Endpoint#Url
   */
  readonly url?: string;

}

/**
 * @schema ResourceTags
 */
export interface ResourceTags {
  /**
   * @schema ResourceTags#Arn
   */
  readonly arn?: string;

  /**
   * @schema ResourceTags#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AvailBlanking
 */
export interface AvailBlanking {
  /**
   * @schema AvailBlanking#AvailBlankingImage
   */
  readonly availBlankingImage?: string;

}

/**
 * @schema EsamSettings
 */
export interface EsamSettings {
  /**
   * @schema EsamSettings#ManifestConfirmConditionNotification
   */
  readonly manifestConfirmConditionNotification?: EsamManifestConfirmConditionNotification;

  /**
   * @schema EsamSettings#ResponseSignalPreroll
   */
  readonly responseSignalPreroll?: number;

  /**
   * @schema EsamSettings#SignalProcessingNotification
   */
  readonly signalProcessingNotification?: EsamSignalProcessingNotification;

}

/**
 * @schema Input
 */
export interface Input {
  /**
   * @schema Input#AudioSelectorGroups
   */
  readonly audioSelectorGroups?: { [key: string]: AudioSelectorGroup };

  /**
   * @schema Input#AudioSelectors
   */
  readonly audioSelectors?: { [key: string]: AudioSelector };

  /**
   * @schema Input#CaptionSelectors
   */
  readonly captionSelectors?: { [key: string]: CaptionSelector };

  /**
   * @schema Input#Crop
   */
  readonly crop?: Rectangle;

  /**
   * @schema Input#DeblockFilter
   */
  readonly deblockFilter?: string;

  /**
   * @schema Input#DecryptionSettings
   */
  readonly decryptionSettings?: InputDecryptionSettings;

  /**
   * @schema Input#DenoiseFilter
   */
  readonly denoiseFilter?: string;

  /**
   * @schema Input#FileInput
   */
  readonly fileInput?: string;

  /**
   * @schema Input#FilterEnable
   */
  readonly filterEnable?: string;

  /**
   * @schema Input#FilterStrength
   */
  readonly filterStrength?: number;

  /**
   * @schema Input#ImageInserter
   */
  readonly imageInserter?: ImageInserter;

  /**
   * @schema Input#InputClippings
   */
  readonly inputClippings?: InputClipping[];

  /**
   * @schema Input#InputScanType
   */
  readonly inputScanType?: string;

  /**
   * @schema Input#Position
   */
  readonly position?: Rectangle;

  /**
   * @schema Input#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema Input#PsiControl
   */
  readonly psiControl?: string;

  /**
   * @schema Input#SupplementalImps
   */
  readonly supplementalImps?: string[];

  /**
   * @schema Input#TimecodeSource
   */
  readonly timecodeSource?: string;

  /**
   * @schema Input#TimecodeStart
   */
  readonly timecodeStart?: string;

  /**
   * @schema Input#VideoSelector
   */
  readonly videoSelector?: VideoSelector;

}

/**
 * @schema MotionImageInserter
 */
export interface MotionImageInserter {
  /**
   * @schema MotionImageInserter#Framerate
   */
  readonly framerate?: MotionImageInsertionFramerate;

  /**
   * @schema MotionImageInserter#Input
   */
  readonly input?: string;

  /**
   * @schema MotionImageInserter#InsertionMode
   */
  readonly insertionMode?: string;

  /**
   * @schema MotionImageInserter#Offset
   */
  readonly offset?: MotionImageInsertionOffset;

  /**
   * @schema MotionImageInserter#Playback
   */
  readonly playback?: string;

  /**
   * @schema MotionImageInserter#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema NielsenConfiguration
 */
export interface NielsenConfiguration {
  /**
   * @schema NielsenConfiguration#BreakoutCode
   */
  readonly breakoutCode?: number;

  /**
   * @schema NielsenConfiguration#DistributorId
   */
  readonly distributorId?: string;

}

/**
 * @schema NielsenNonLinearWatermarkSettings
 */
export interface NielsenNonLinearWatermarkSettings {
  /**
   * @schema NielsenNonLinearWatermarkSettings#ActiveWatermarkProcess
   */
  readonly activeWatermarkProcess?: string;

  /**
   * @schema NielsenNonLinearWatermarkSettings#AdiFilename
   */
  readonly adiFilename?: string;

  /**
   * @schema NielsenNonLinearWatermarkSettings#AssetId
   */
  readonly assetId?: string;

  /**
   * @schema NielsenNonLinearWatermarkSettings#AssetName
   */
  readonly assetName?: string;

  /**
   * @schema NielsenNonLinearWatermarkSettings#CbetSourceId
   */
  readonly cbetSourceId?: string;

  /**
   * @schema NielsenNonLinearWatermarkSettings#EpisodeId
   */
  readonly episodeId?: string;

  /**
   * @schema NielsenNonLinearWatermarkSettings#MetadataDestination
   */
  readonly metadataDestination?: string;

  /**
   * @schema NielsenNonLinearWatermarkSettings#SourceId
   */
  readonly sourceId?: number;

  /**
   * @schema NielsenNonLinearWatermarkSettings#SourceWatermarkStatus
   */
  readonly sourceWatermarkStatus?: string;

  /**
   * @schema NielsenNonLinearWatermarkSettings#TicServerUrl
   */
  readonly ticServerUrl?: string;

  /**
   * @schema NielsenNonLinearWatermarkSettings#UniqueTicPerAudioTrack
   */
  readonly uniqueTicPerAudioTrack?: string;

}

/**
 * @schema OutputGroup
 */
export interface OutputGroup {
  /**
   * @schema OutputGroup#AutomatedEncodingSettings
   */
  readonly automatedEncodingSettings?: AutomatedEncodingSettings;

  /**
   * @schema OutputGroup#CustomName
   */
  readonly customName?: string;

  /**
   * @schema OutputGroup#Name
   */
  readonly name?: string;

  /**
   * @schema OutputGroup#OutputGroupSettings
   */
  readonly outputGroupSettings?: OutputGroupSettings;

  /**
   * @schema OutputGroup#Outputs
   */
  readonly outputs?: Output[];

}

/**
 * @schema TimecodeConfig
 */
export interface TimecodeConfig {
  /**
   * @schema TimecodeConfig#Anchor
   */
  readonly anchor?: string;

  /**
   * @schema TimecodeConfig#Source
   */
  readonly source?: string;

  /**
   * @schema TimecodeConfig#Start
   */
  readonly start?: string;

  /**
   * @schema TimecodeConfig#TimestampOffset
   */
  readonly timestampOffset?: string;

}

/**
 * @schema TimedMetadataInsertion
 */
export interface TimedMetadataInsertion {
  /**
   * @schema TimedMetadataInsertion#Id3Insertions
   */
  readonly id3Insertions?: Id3Insertion[];

}

/**
 * @schema JobMessages
 */
export interface JobMessages {
  /**
   * @schema JobMessages#Info
   */
  readonly info?: string[];

  /**
   * @schema JobMessages#Warning
   */
  readonly warning?: string[];

}

/**
 * @schema OutputGroupDetail
 */
export interface OutputGroupDetail {
  /**
   * @schema OutputGroupDetail#OutputDetails
   */
  readonly outputDetails?: OutputDetail[];

}

/**
 * @schema QueueTransition
 */
export interface QueueTransition {
  /**
   * @schema QueueTransition#DestinationQueue
   */
  readonly destinationQueue?: string;

  /**
   * @schema QueueTransition#SourceQueue
   */
  readonly sourceQueue?: string;

  /**
   * @schema QueueTransition#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema Timing
 */
export interface Timing {
  /**
   * @schema Timing#FinishTime
   */
  readonly finishTime?: string;

  /**
   * @schema Timing#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Timing#SubmitTime
   */
  readonly submitTime?: string;

}

/**
 * @schema InputTemplate
 */
export interface InputTemplate {
  /**
   * @schema InputTemplate#AudioSelectorGroups
   */
  readonly audioSelectorGroups?: { [key: string]: AudioSelectorGroup };

  /**
   * @schema InputTemplate#AudioSelectors
   */
  readonly audioSelectors?: { [key: string]: AudioSelector };

  /**
   * @schema InputTemplate#CaptionSelectors
   */
  readonly captionSelectors?: { [key: string]: CaptionSelector };

  /**
   * @schema InputTemplate#Crop
   */
  readonly crop?: Rectangle;

  /**
   * @schema InputTemplate#DeblockFilter
   */
  readonly deblockFilter?: string;

  /**
   * @schema InputTemplate#DenoiseFilter
   */
  readonly denoiseFilter?: string;

  /**
   * @schema InputTemplate#FilterEnable
   */
  readonly filterEnable?: string;

  /**
   * @schema InputTemplate#FilterStrength
   */
  readonly filterStrength?: number;

  /**
   * @schema InputTemplate#ImageInserter
   */
  readonly imageInserter?: ImageInserter;

  /**
   * @schema InputTemplate#InputClippings
   */
  readonly inputClippings?: InputClipping[];

  /**
   * @schema InputTemplate#InputScanType
   */
  readonly inputScanType?: string;

  /**
   * @schema InputTemplate#Position
   */
  readonly position?: Rectangle;

  /**
   * @schema InputTemplate#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema InputTemplate#PsiControl
   */
  readonly psiControl?: string;

  /**
   * @schema InputTemplate#TimecodeSource
   */
  readonly timecodeSource?: string;

  /**
   * @schema InputTemplate#TimecodeStart
   */
  readonly timecodeStart?: string;

  /**
   * @schema InputTemplate#VideoSelector
   */
  readonly videoSelector?: VideoSelector;

}

/**
 * @schema AudioDescription
 */
export interface AudioDescription {
  /**
   * @schema AudioDescription#AudioChannelTaggingSettings
   */
  readonly audioChannelTaggingSettings?: AudioChannelTaggingSettings;

  /**
   * @schema AudioDescription#AudioNormalizationSettings
   */
  readonly audioNormalizationSettings?: AudioNormalizationSettings;

  /**
   * @schema AudioDescription#AudioSourceName
   */
  readonly audioSourceName?: string;

  /**
   * @schema AudioDescription#AudioType
   */
  readonly audioType?: number;

  /**
   * @schema AudioDescription#AudioTypeControl
   */
  readonly audioTypeControl?: string;

  /**
   * @schema AudioDescription#CodecSettings
   */
  readonly codecSettings?: AudioCodecSettings;

  /**
   * @schema AudioDescription#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema AudioDescription#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema AudioDescription#LanguageCodeControl
   */
  readonly languageCodeControl?: string;

  /**
   * @schema AudioDescription#RemixSettings
   */
  readonly remixSettings?: RemixSettings;

  /**
   * @schema AudioDescription#StreamName
   */
  readonly streamName?: string;

}

/**
 * @schema CaptionDescriptionPreset
 */
export interface CaptionDescriptionPreset {
  /**
   * @schema CaptionDescriptionPreset#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema CaptionDescriptionPreset#DestinationSettings
   */
  readonly destinationSettings?: CaptionDestinationSettings;

  /**
   * @schema CaptionDescriptionPreset#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema CaptionDescriptionPreset#LanguageDescription
   */
  readonly languageDescription?: string;

}

/**
 * @schema ContainerSettings
 */
export interface ContainerSettings {
  /**
   * @schema ContainerSettings#CmfcSettings
   */
  readonly cmfcSettings?: CmfcSettings;

  /**
   * @schema ContainerSettings#Container
   */
  readonly container?: string;

  /**
   * @schema ContainerSettings#F4vSettings
   */
  readonly f4VSettings?: F4vSettings;

  /**
   * @schema ContainerSettings#M2tsSettings
   */
  readonly m2TsSettings?: M2tsSettings;

  /**
   * @schema ContainerSettings#M3u8Settings
   */
  readonly m3U8Settings?: M3u8Settings;

  /**
   * @schema ContainerSettings#MovSettings
   */
  readonly movSettings?: MovSettings;

  /**
   * @schema ContainerSettings#Mp4Settings
   */
  readonly mp4Settings?: Mp4Settings;

  /**
   * @schema ContainerSettings#MpdSettings
   */
  readonly mpdSettings?: MpdSettings;

  /**
   * @schema ContainerSettings#MxfSettings
   */
  readonly mxfSettings?: MxfSettings;

}

/**
 * @schema VideoDescription
 */
export interface VideoDescription {
  /**
   * @schema VideoDescription#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema VideoDescription#AntiAlias
   */
  readonly antiAlias?: string;

  /**
   * @schema VideoDescription#CodecSettings
   */
  readonly codecSettings?: VideoCodecSettings;

  /**
   * @schema VideoDescription#ColorMetadata
   */
  readonly colorMetadata?: string;

  /**
   * @schema VideoDescription#Crop
   */
  readonly crop?: Rectangle;

  /**
   * @schema VideoDescription#DropFrameTimecode
   */
  readonly dropFrameTimecode?: string;

  /**
   * @schema VideoDescription#FixedAfd
   */
  readonly fixedAfd?: number;

  /**
   * @schema VideoDescription#Height
   */
  readonly height?: number;

  /**
   * @schema VideoDescription#Position
   */
  readonly position?: Rectangle;

  /**
   * @schema VideoDescription#RespondToAfd
   */
  readonly respondToAfd?: string;

  /**
   * @schema VideoDescription#ScalingBehavior
   */
  readonly scalingBehavior?: string;

  /**
   * @schema VideoDescription#Sharpness
   */
  readonly sharpness?: number;

  /**
   * @schema VideoDescription#TimecodeInsertion
   */
  readonly timecodeInsertion?: string;

  /**
   * @schema VideoDescription#VideoPreprocessors
   */
  readonly videoPreprocessors?: VideoPreprocessor;

  /**
   * @schema VideoDescription#Width
   */
  readonly width?: number;

}

/**
 * @schema ReservationPlan
 */
export interface ReservationPlan {
  /**
   * @schema ReservationPlan#Commitment
   */
  readonly commitment?: string;

  /**
   * @schema ReservationPlan#ExpiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema ReservationPlan#PurchasedAt
   */
  readonly purchasedAt?: string;

  /**
   * @schema ReservationPlan#RenewalType
   */
  readonly renewalType?: string;

  /**
   * @schema ReservationPlan#ReservedSlots
   */
  readonly reservedSlots?: number;

  /**
   * @schema ReservationPlan#Status
   */
  readonly status?: string;

}

/**
 * @schema EsamManifestConfirmConditionNotification
 */
export interface EsamManifestConfirmConditionNotification {
  /**
   * @schema EsamManifestConfirmConditionNotification#MccXml
   */
  readonly mccXml?: string;

}

/**
 * @schema EsamSignalProcessingNotification
 */
export interface EsamSignalProcessingNotification {
  /**
   * @schema EsamSignalProcessingNotification#SccXml
   */
  readonly sccXml?: string;

}

/**
 * @schema AudioSelectorGroup
 */
export interface AudioSelectorGroup {
  /**
   * @schema AudioSelectorGroup#AudioSelectorNames
   */
  readonly audioSelectorNames?: string[];

}

/**
 * @schema AudioSelector
 */
export interface AudioSelector {
  /**
   * @schema AudioSelector#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema AudioSelector#DefaultSelection
   */
  readonly defaultSelection?: string;

  /**
   * @schema AudioSelector#ExternalAudioFileInput
   */
  readonly externalAudioFileInput?: string;

  /**
   * @schema AudioSelector#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema AudioSelector#Offset
   */
  readonly offset?: number;

  /**
   * @schema AudioSelector#Pids
   */
  readonly pids?: number[];

  /**
   * @schema AudioSelector#ProgramSelection
   */
  readonly programSelection?: number;

  /**
   * @schema AudioSelector#RemixSettings
   */
  readonly remixSettings?: RemixSettings;

  /**
   * @schema AudioSelector#SelectorType
   */
  readonly selectorType?: string;

  /**
   * @schema AudioSelector#Tracks
   */
  readonly tracks?: number[];

}

/**
 * @schema CaptionSelector
 */
export interface CaptionSelector {
  /**
   * @schema CaptionSelector#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema CaptionSelector#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema CaptionSelector#SourceSettings
   */
  readonly sourceSettings?: CaptionSourceSettings;

}

/**
 * @schema Rectangle
 */
export interface Rectangle {
  /**
   * @schema Rectangle#Height
   */
  readonly height?: number;

  /**
   * @schema Rectangle#Width
   */
  readonly width?: number;

  /**
   * @schema Rectangle#X
   */
  readonly x?: number;

  /**
   * @schema Rectangle#Y
   */
  readonly y?: number;

}

/**
 * @schema InputDecryptionSettings
 */
export interface InputDecryptionSettings {
  /**
   * @schema InputDecryptionSettings#DecryptionMode
   */
  readonly decryptionMode?: string;

  /**
   * @schema InputDecryptionSettings#EncryptedDecryptionKey
   */
  readonly encryptedDecryptionKey?: string;

  /**
   * @schema InputDecryptionSettings#InitializationVector
   */
  readonly initializationVector?: string;

  /**
   * @schema InputDecryptionSettings#KmsKeyRegion
   */
  readonly kmsKeyRegion?: string;

}

/**
 * @schema ImageInserter
 */
export interface ImageInserter {
  /**
   * @schema ImageInserter#InsertableImages
   */
  readonly insertableImages?: InsertableImage[];

}

/**
 * @schema InputClipping
 */
export interface InputClipping {
  /**
   * @schema InputClipping#EndTimecode
   */
  readonly endTimecode?: string;

  /**
   * @schema InputClipping#StartTimecode
   */
  readonly startTimecode?: string;

}

/**
 * @schema VideoSelector
 */
export interface VideoSelector {
  /**
   * @schema VideoSelector#AlphaBehavior
   */
  readonly alphaBehavior?: string;

  /**
   * @schema VideoSelector#ColorSpace
   */
  readonly colorSpace?: string;

  /**
   * @schema VideoSelector#ColorSpaceUsage
   */
  readonly colorSpaceUsage?: string;

  /**
   * @schema VideoSelector#Hdr10Metadata
   */
  readonly hdr10Metadata?: Hdr10Metadata;

  /**
   * @schema VideoSelector#Pid
   */
  readonly pid?: number;

  /**
   * @schema VideoSelector#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema VideoSelector#Rotate
   */
  readonly rotate?: string;

}

/**
 * @schema MotionImageInsertionFramerate
 */
export interface MotionImageInsertionFramerate {
  /**
   * @schema MotionImageInsertionFramerate#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MotionImageInsertionFramerate#FramerateNumerator
   */
  readonly framerateNumerator?: number;

}

/**
 * @schema MotionImageInsertionOffset
 */
export interface MotionImageInsertionOffset {
  /**
   * @schema MotionImageInsertionOffset#ImageX
   */
  readonly imageX?: number;

  /**
   * @schema MotionImageInsertionOffset#ImageY
   */
  readonly imageY?: number;

}

/**
 * @schema AutomatedEncodingSettings
 */
export interface AutomatedEncodingSettings {
  /**
   * @schema AutomatedEncodingSettings#AbrSettings
   */
  readonly abrSettings?: AutomatedAbrSettings;

}

/**
 * @schema OutputGroupSettings
 */
export interface OutputGroupSettings {
  /**
   * @schema OutputGroupSettings#CmafGroupSettings
   */
  readonly cmafGroupSettings?: CmafGroupSettings;

  /**
   * @schema OutputGroupSettings#DashIsoGroupSettings
   */
  readonly dashIsoGroupSettings?: DashIsoGroupSettings;

  /**
   * @schema OutputGroupSettings#FileGroupSettings
   */
  readonly fileGroupSettings?: FileGroupSettings;

  /**
   * @schema OutputGroupSettings#HlsGroupSettings
   */
  readonly hlsGroupSettings?: HlsGroupSettings;

  /**
   * @schema OutputGroupSettings#MsSmoothGroupSettings
   */
  readonly msSmoothGroupSettings?: MsSmoothGroupSettings;

  /**
   * @schema OutputGroupSettings#Type
   */
  readonly type?: string;

}

/**
 * @schema Output
 */
export interface Output {
  /**
   * @schema Output#AudioDescriptions
   */
  readonly audioDescriptions?: AudioDescription[];

  /**
   * @schema Output#CaptionDescriptions
   */
  readonly captionDescriptions?: CaptionDescription[];

  /**
   * @schema Output#ContainerSettings
   */
  readonly containerSettings?: ContainerSettings;

  /**
   * @schema Output#Extension
   */
  readonly extension?: string;

  /**
   * @schema Output#NameModifier
   */
  readonly nameModifier?: string;

  /**
   * @schema Output#OutputSettings
   */
  readonly outputSettings?: OutputSettings;

  /**
   * @schema Output#Preset
   */
  readonly preset?: string;

  /**
   * @schema Output#VideoDescription
   */
  readonly videoDescription?: VideoDescription;

}

/**
 * @schema Id3Insertion
 */
export interface Id3Insertion {
  /**
   * @schema Id3Insertion#Id3
   */
  readonly id3?: string;

  /**
   * @schema Id3Insertion#Timecode
   */
  readonly timecode?: string;

}

/**
 * @schema OutputDetail
 */
export interface OutputDetail {
  /**
   * @schema OutputDetail#DurationInMs
   */
  readonly durationInMs?: number;

  /**
   * @schema OutputDetail#VideoDetails
   */
  readonly videoDetails?: VideoDetail;

}

/**
 * @schema AudioChannelTaggingSettings
 */
export interface AudioChannelTaggingSettings {
  /**
   * @schema AudioChannelTaggingSettings#ChannelTag
   */
  readonly channelTag?: string;

}

/**
 * @schema AudioNormalizationSettings
 */
export interface AudioNormalizationSettings {
  /**
   * @schema AudioNormalizationSettings#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema AudioNormalizationSettings#AlgorithmControl
   */
  readonly algorithmControl?: string;

  /**
   * @schema AudioNormalizationSettings#CorrectionGateLevel
   */
  readonly correctionGateLevel?: number;

  /**
   * @schema AudioNormalizationSettings#LoudnessLogging
   */
  readonly loudnessLogging?: string;

  /**
   * @schema AudioNormalizationSettings#PeakCalculation
   */
  readonly peakCalculation?: string;

  /**
   * @schema AudioNormalizationSettings#TargetLkfs
   */
  readonly targetLkfs?: number;

}

/**
 * @schema AudioCodecSettings
 */
export interface AudioCodecSettings {
  /**
   * @schema AudioCodecSettings#AacSettings
   */
  readonly aacSettings?: AacSettings;

  /**
   * @schema AudioCodecSettings#Ac3Settings
   */
  readonly ac3Settings?: Ac3Settings;

  /**
   * @schema AudioCodecSettings#AiffSettings
   */
  readonly aiffSettings?: AiffSettings;

  /**
   * @schema AudioCodecSettings#Codec
   */
  readonly codec?: string;

  /**
   * @schema AudioCodecSettings#Eac3AtmosSettings
   */
  readonly eac3AtmosSettings?: Eac3AtmosSettings;

  /**
   * @schema AudioCodecSettings#Eac3Settings
   */
  readonly eac3Settings?: Eac3Settings;

  /**
   * @schema AudioCodecSettings#Mp2Settings
   */
  readonly mp2Settings?: Mp2Settings;

  /**
   * @schema AudioCodecSettings#Mp3Settings
   */
  readonly mp3Settings?: Mp3Settings;

  /**
   * @schema AudioCodecSettings#OpusSettings
   */
  readonly opusSettings?: OpusSettings;

  /**
   * @schema AudioCodecSettings#VorbisSettings
   */
  readonly vorbisSettings?: VorbisSettings;

  /**
   * @schema AudioCodecSettings#WavSettings
   */
  readonly wavSettings?: WavSettings;

}

/**
 * @schema RemixSettings
 */
export interface RemixSettings {
  /**
   * @schema RemixSettings#ChannelMapping
   */
  readonly channelMapping?: ChannelMapping;

  /**
   * @schema RemixSettings#ChannelsIn
   */
  readonly channelsIn?: number;

  /**
   * @schema RemixSettings#ChannelsOut
   */
  readonly channelsOut?: number;

}

/**
 * @schema CaptionDestinationSettings
 */
export interface CaptionDestinationSettings {
  /**
   * @schema CaptionDestinationSettings#BurninDestinationSettings
   */
  readonly burninDestinationSettings?: BurninDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#DestinationType
   */
  readonly destinationType?: string;

  /**
   * @schema CaptionDestinationSettings#DvbSubDestinationSettings
   */
  readonly dvbSubDestinationSettings?: DvbSubDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#EmbeddedDestinationSettings
   */
  readonly embeddedDestinationSettings?: EmbeddedDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#ImscDestinationSettings
   */
  readonly imscDestinationSettings?: ImscDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#SccDestinationSettings
   */
  readonly sccDestinationSettings?: SccDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#TeletextDestinationSettings
   */
  readonly teletextDestinationSettings?: TeletextDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#TtmlDestinationSettings
   */
  readonly ttmlDestinationSettings?: TtmlDestinationSettings;

}

/**
 * @schema CmfcSettings
 */
export interface CmfcSettings {
  /**
   * @schema CmfcSettings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema CmfcSettings#Scte35Esam
   */
  readonly scte35Esam?: string;

  /**
   * @schema CmfcSettings#Scte35Source
   */
  readonly scte35Source?: string;

}

/**
 * @schema F4vSettings
 */
export interface F4vSettings {
  /**
   * @schema F4vSettings#MoovPlacement
   */
  readonly moovPlacement?: string;

}

/**
 * @schema M2tsSettings
 */
export interface M2tsSettings {
  /**
   * @schema M2tsSettings#AudioBufferModel
   */
  readonly audioBufferModel?: string;

  /**
   * @schema M2tsSettings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema M2tsSettings#AudioFramesPerPes
   */
  readonly audioFramesPerPes?: number;

  /**
   * @schema M2tsSettings#AudioPids
   */
  readonly audioPids?: number[];

  /**
   * @schema M2tsSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema M2tsSettings#BufferModel
   */
  readonly bufferModel?: string;

  /**
   * @schema M2tsSettings#DvbNitSettings
   */
  readonly dvbNitSettings?: DvbNitSettings;

  /**
   * @schema M2tsSettings#DvbSdtSettings
   */
  readonly dvbSdtSettings?: DvbSdtSettings;

  /**
   * @schema M2tsSettings#DvbSubPids
   */
  readonly dvbSubPids?: number[];

  /**
   * @schema M2tsSettings#DvbTdtSettings
   */
  readonly dvbTdtSettings?: DvbTdtSettings;

  /**
   * @schema M2tsSettings#DvbTeletextPid
   */
  readonly dvbTeletextPid?: number;

  /**
   * @schema M2tsSettings#EbpAudioInterval
   */
  readonly ebpAudioInterval?: string;

  /**
   * @schema M2tsSettings#EbpPlacement
   */
  readonly ebpPlacement?: string;

  /**
   * @schema M2tsSettings#EsRateInPes
   */
  readonly esRateInPes?: string;

  /**
   * @schema M2tsSettings#ForceTsVideoEbpOrder
   */
  readonly forceTsVideoEbpOrder?: string;

  /**
   * @schema M2tsSettings#FragmentTime
   */
  readonly fragmentTime?: number;

  /**
   * @schema M2tsSettings#MaxPcrInterval
   */
  readonly maxPcrInterval?: number;

  /**
   * @schema M2tsSettings#MinEbpInterval
   */
  readonly minEbpInterval?: number;

  /**
   * @schema M2tsSettings#NielsenId3
   */
  readonly nielsenId3?: string;

  /**
   * @schema M2tsSettings#NullPacketBitrate
   */
  readonly nullPacketBitrate?: number;

  /**
   * @schema M2tsSettings#PatInterval
   */
  readonly patInterval?: number;

  /**
   * @schema M2tsSettings#PcrControl
   */
  readonly pcrControl?: string;

  /**
   * @schema M2tsSettings#PcrPid
   */
  readonly pcrPid?: number;

  /**
   * @schema M2tsSettings#PmtInterval
   */
  readonly pmtInterval?: number;

  /**
   * @schema M2tsSettings#PmtPid
   */
  readonly pmtPid?: number;

  /**
   * @schema M2tsSettings#PrivateMetadataPid
   */
  readonly privateMetadataPid?: number;

  /**
   * @schema M2tsSettings#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema M2tsSettings#RateMode
   */
  readonly rateMode?: string;

  /**
   * @schema M2tsSettings#Scte35Esam
   */
  readonly scte35Esam?: M2tsScte35Esam;

  /**
   * @schema M2tsSettings#Scte35Pid
   */
  readonly scte35Pid?: number;

  /**
   * @schema M2tsSettings#Scte35Source
   */
  readonly scte35Source?: string;

  /**
   * @schema M2tsSettings#SegmentationMarkers
   */
  readonly segmentationMarkers?: string;

  /**
   * @schema M2tsSettings#SegmentationStyle
   */
  readonly segmentationStyle?: string;

  /**
   * @schema M2tsSettings#SegmentationTime
   */
  readonly segmentationTime?: number;

  /**
   * @schema M2tsSettings#TimedMetadataPid
   */
  readonly timedMetadataPid?: number;

  /**
   * @schema M2tsSettings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema M2tsSettings#VideoPid
   */
  readonly videoPid?: number;

}

/**
 * @schema M3u8Settings
 */
export interface M3u8Settings {
  /**
   * @schema M3u8Settings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema M3u8Settings#AudioFramesPerPes
   */
  readonly audioFramesPerPes?: number;

  /**
   * @schema M3u8Settings#AudioPids
   */
  readonly audioPids?: number[];

  /**
   * @schema M3u8Settings#NielsenId3
   */
  readonly nielsenId3?: string;

  /**
   * @schema M3u8Settings#PatInterval
   */
  readonly patInterval?: number;

  /**
   * @schema M3u8Settings#PcrControl
   */
  readonly pcrControl?: string;

  /**
   * @schema M3u8Settings#PcrPid
   */
  readonly pcrPid?: number;

  /**
   * @schema M3u8Settings#PmtInterval
   */
  readonly pmtInterval?: number;

  /**
   * @schema M3u8Settings#PmtPid
   */
  readonly pmtPid?: number;

  /**
   * @schema M3u8Settings#PrivateMetadataPid
   */
  readonly privateMetadataPid?: number;

  /**
   * @schema M3u8Settings#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema M3u8Settings#Scte35Pid
   */
  readonly scte35Pid?: number;

  /**
   * @schema M3u8Settings#Scte35Source
   */
  readonly scte35Source?: string;

  /**
   * @schema M3u8Settings#TimedMetadata
   */
  readonly timedMetadata?: string;

  /**
   * @schema M3u8Settings#TimedMetadataPid
   */
  readonly timedMetadataPid?: number;

  /**
   * @schema M3u8Settings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema M3u8Settings#VideoPid
   */
  readonly videoPid?: number;

}

/**
 * @schema MovSettings
 */
export interface MovSettings {
  /**
   * @schema MovSettings#ClapAtom
   */
  readonly clapAtom?: string;

  /**
   * @schema MovSettings#CslgAtom
   */
  readonly cslgAtom?: string;

  /**
   * @schema MovSettings#Mpeg2FourCCControl
   */
  readonly mpeg2FourCcControl?: string;

  /**
   * @schema MovSettings#PaddingControl
   */
  readonly paddingControl?: string;

  /**
   * @schema MovSettings#Reference
   */
  readonly reference?: string;

}

/**
 * @schema Mp4Settings
 */
export interface Mp4Settings {
  /**
   * @schema Mp4Settings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema Mp4Settings#CslgAtom
   */
  readonly cslgAtom?: string;

  /**
   * @schema Mp4Settings#CttsVersion
   */
  readonly cttsVersion?: number;

  /**
   * @schema Mp4Settings#FreeSpaceBox
   */
  readonly freeSpaceBox?: string;

  /**
   * @schema Mp4Settings#MoovPlacement
   */
  readonly moovPlacement?: string;

  /**
   * @schema Mp4Settings#Mp4MajorBrand
   */
  readonly mp4MajorBrand?: string;

}

/**
 * @schema MpdSettings
 */
export interface MpdSettings {
  /**
   * @schema MpdSettings#AccessibilityCaptionHints
   */
  readonly accessibilityCaptionHints?: string;

  /**
   * @schema MpdSettings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MpdSettings#CaptionContainerType
   */
  readonly captionContainerType?: string;

  /**
   * @schema MpdSettings#Scte35Esam
   */
  readonly scte35Esam?: string;

  /**
   * @schema MpdSettings#Scte35Source
   */
  readonly scte35Source?: string;

}

/**
 * @schema MxfSettings
 */
export interface MxfSettings {
  /**
   * @schema MxfSettings#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema MxfSettings#Profile
   */
  readonly profile?: string;

}

/**
 * @schema VideoCodecSettings
 */
export interface VideoCodecSettings {
  /**
   * @schema VideoCodecSettings#Av1Settings
   */
  readonly av1Settings?: Av1Settings;

  /**
   * @schema VideoCodecSettings#AvcIntraSettings
   */
  readonly avcIntraSettings?: AvcIntraSettings;

  /**
   * @schema VideoCodecSettings#Codec
   */
  readonly codec?: string;

  /**
   * @schema VideoCodecSettings#FrameCaptureSettings
   */
  readonly frameCaptureSettings?: FrameCaptureSettings;

  /**
   * @schema VideoCodecSettings#H264Settings
   */
  readonly h264Settings?: H264Settings;

  /**
   * @schema VideoCodecSettings#H265Settings
   */
  readonly h265Settings?: H265Settings;

  /**
   * @schema VideoCodecSettings#Mpeg2Settings
   */
  readonly mpeg2Settings?: Mpeg2Settings;

  /**
   * @schema VideoCodecSettings#ProresSettings
   */
  readonly proresSettings?: ProresSettings;

  /**
   * @schema VideoCodecSettings#Vc3Settings
   */
  readonly vc3Settings?: Vc3Settings;

  /**
   * @schema VideoCodecSettings#Vp8Settings
   */
  readonly vp8Settings?: Vp8Settings;

  /**
   * @schema VideoCodecSettings#Vp9Settings
   */
  readonly vp9Settings?: Vp9Settings;

}

/**
 * @schema VideoPreprocessor
 */
export interface VideoPreprocessor {
  /**
   * @schema VideoPreprocessor#ColorCorrector
   */
  readonly colorCorrector?: ColorCorrector;

  /**
   * @schema VideoPreprocessor#Deinterlacer
   */
  readonly deinterlacer?: Deinterlacer;

  /**
   * @schema VideoPreprocessor#DolbyVision
   */
  readonly dolbyVision?: DolbyVision;

  /**
   * @schema VideoPreprocessor#ImageInserter
   */
  readonly imageInserter?: ImageInserter;

  /**
   * @schema VideoPreprocessor#NoiseReducer
   */
  readonly noiseReducer?: NoiseReducer;

  /**
   * @schema VideoPreprocessor#PartnerWatermarking
   */
  readonly partnerWatermarking?: PartnerWatermarking;

  /**
   * @schema VideoPreprocessor#TimecodeBurnin
   */
  readonly timecodeBurnin?: TimecodeBurnin;

}

/**
 * @schema CaptionSourceSettings
 */
export interface CaptionSourceSettings {
  /**
   * @schema CaptionSourceSettings#AncillarySourceSettings
   */
  readonly ancillarySourceSettings?: AncillarySourceSettings;

  /**
   * @schema CaptionSourceSettings#DvbSubSourceSettings
   */
  readonly dvbSubSourceSettings?: DvbSubSourceSettings;

  /**
   * @schema CaptionSourceSettings#EmbeddedSourceSettings
   */
  readonly embeddedSourceSettings?: EmbeddedSourceSettings;

  /**
   * @schema CaptionSourceSettings#FileSourceSettings
   */
  readonly fileSourceSettings?: FileSourceSettings;

  /**
   * @schema CaptionSourceSettings#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema CaptionSourceSettings#TeletextSourceSettings
   */
  readonly teletextSourceSettings?: TeletextSourceSettings;

  /**
   * @schema CaptionSourceSettings#TrackSourceSettings
   */
  readonly trackSourceSettings?: TrackSourceSettings;

}

/**
 * @schema InsertableImage
 */
export interface InsertableImage {
  /**
   * @schema InsertableImage#Duration
   */
  readonly duration?: number;

  /**
   * @schema InsertableImage#FadeIn
   */
  readonly fadeIn?: number;

  /**
   * @schema InsertableImage#FadeOut
   */
  readonly fadeOut?: number;

  /**
   * @schema InsertableImage#Height
   */
  readonly height?: number;

  /**
   * @schema InsertableImage#ImageInserterInput
   */
  readonly imageInserterInput?: string;

  /**
   * @schema InsertableImage#ImageX
   */
  readonly imageX?: number;

  /**
   * @schema InsertableImage#ImageY
   */
  readonly imageY?: number;

  /**
   * @schema InsertableImage#Layer
   */
  readonly layer?: number;

  /**
   * @schema InsertableImage#Opacity
   */
  readonly opacity?: number;

  /**
   * @schema InsertableImage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema InsertableImage#Width
   */
  readonly width?: number;

}

/**
 * @schema Hdr10Metadata
 */
export interface Hdr10Metadata {
  /**
   * @schema Hdr10Metadata#BluePrimaryX
   */
  readonly bluePrimaryX?: number;

  /**
   * @schema Hdr10Metadata#BluePrimaryY
   */
  readonly bluePrimaryY?: number;

  /**
   * @schema Hdr10Metadata#GreenPrimaryX
   */
  readonly greenPrimaryX?: number;

  /**
   * @schema Hdr10Metadata#GreenPrimaryY
   */
  readonly greenPrimaryY?: number;

  /**
   * @schema Hdr10Metadata#MaxContentLightLevel
   */
  readonly maxContentLightLevel?: number;

  /**
   * @schema Hdr10Metadata#MaxFrameAverageLightLevel
   */
  readonly maxFrameAverageLightLevel?: number;

  /**
   * @schema Hdr10Metadata#MaxLuminance
   */
  readonly maxLuminance?: number;

  /**
   * @schema Hdr10Metadata#MinLuminance
   */
  readonly minLuminance?: number;

  /**
   * @schema Hdr10Metadata#RedPrimaryX
   */
  readonly redPrimaryX?: number;

  /**
   * @schema Hdr10Metadata#RedPrimaryY
   */
  readonly redPrimaryY?: number;

  /**
   * @schema Hdr10Metadata#WhitePointX
   */
  readonly whitePointX?: number;

  /**
   * @schema Hdr10Metadata#WhitePointY
   */
  readonly whitePointY?: number;

}

/**
 * @schema AutomatedAbrSettings
 */
export interface AutomatedAbrSettings {
  /**
   * @schema AutomatedAbrSettings#MaxAbrBitrate
   */
  readonly maxAbrBitrate?: number;

  /**
   * @schema AutomatedAbrSettings#MaxRenditions
   */
  readonly maxRenditions?: number;

  /**
   * @schema AutomatedAbrSettings#MinAbrBitrate
   */
  readonly minAbrBitrate?: number;

}

/**
 * @schema CmafGroupSettings
 */
export interface CmafGroupSettings {
  /**
   * @schema CmafGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: CmafAdditionalManifest[];

  /**
   * @schema CmafGroupSettings#BaseUrl
   */
  readonly baseUrl?: string;

  /**
   * @schema CmafGroupSettings#ClientCache
   */
  readonly clientCache?: string;

  /**
   * @schema CmafGroupSettings#CodecSpecification
   */
  readonly codecSpecification?: string;

  /**
   * @schema CmafGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema CmafGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: DestinationSettings;

  /**
   * @schema CmafGroupSettings#Encryption
   */
  readonly encryption?: CmafEncryptionSettings;

  /**
   * @schema CmafGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema CmafGroupSettings#ManifestCompression
   */
  readonly manifestCompression?: string;

  /**
   * @schema CmafGroupSettings#ManifestDurationFormat
   */
  readonly manifestDurationFormat?: string;

  /**
   * @schema CmafGroupSettings#MinBufferTime
   */
  readonly minBufferTime?: number;

  /**
   * @schema CmafGroupSettings#MinFinalSegmentLength
   */
  readonly minFinalSegmentLength?: number;

  /**
   * @schema CmafGroupSettings#MpdProfile
   */
  readonly mpdProfile?: string;

  /**
   * @schema CmafGroupSettings#SegmentControl
   */
  readonly segmentControl?: string;

  /**
   * @schema CmafGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema CmafGroupSettings#StreamInfResolution
   */
  readonly streamInfResolution?: string;

  /**
   * @schema CmafGroupSettings#WriteDashManifest
   */
  readonly writeDashManifest?: string;

  /**
   * @schema CmafGroupSettings#WriteHlsManifest
   */
  readonly writeHlsManifest?: string;

  /**
   * @schema CmafGroupSettings#WriteSegmentTimelineInRepresentation
   */
  readonly writeSegmentTimelineInRepresentation?: string;

}

/**
 * @schema DashIsoGroupSettings
 */
export interface DashIsoGroupSettings {
  /**
   * @schema DashIsoGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: DashAdditionalManifest[];

  /**
   * @schema DashIsoGroupSettings#BaseUrl
   */
  readonly baseUrl?: string;

  /**
   * @schema DashIsoGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema DashIsoGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: DestinationSettings;

  /**
   * @schema DashIsoGroupSettings#Encryption
   */
  readonly encryption?: DashIsoEncryptionSettings;

  /**
   * @schema DashIsoGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema DashIsoGroupSettings#HbbtvCompliance
   */
  readonly hbbtvCompliance?: string;

  /**
   * @schema DashIsoGroupSettings#MinBufferTime
   */
  readonly minBufferTime?: number;

  /**
   * @schema DashIsoGroupSettings#MinFinalSegmentLength
   */
  readonly minFinalSegmentLength?: number;

  /**
   * @schema DashIsoGroupSettings#MpdProfile
   */
  readonly mpdProfile?: string;

  /**
   * @schema DashIsoGroupSettings#SegmentControl
   */
  readonly segmentControl?: string;

  /**
   * @schema DashIsoGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema DashIsoGroupSettings#WriteSegmentTimelineInRepresentation
   */
  readonly writeSegmentTimelineInRepresentation?: string;

}

/**
 * @schema FileGroupSettings
 */
export interface FileGroupSettings {
  /**
   * @schema FileGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema FileGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: DestinationSettings;

}

/**
 * @schema HlsGroupSettings
 */
export interface HlsGroupSettings {
  /**
   * @schema HlsGroupSettings#AdMarkers
   */
  readonly adMarkers?: string[];

  /**
   * @schema HlsGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: HlsAdditionalManifest[];

  /**
   * @schema HlsGroupSettings#AudioOnlyHeader
   */
  readonly audioOnlyHeader?: string;

  /**
   * @schema HlsGroupSettings#BaseUrl
   */
  readonly baseUrl?: string;

  /**
   * @schema HlsGroupSettings#CaptionLanguageMappings
   */
  readonly captionLanguageMappings?: HlsCaptionLanguageMapping[];

  /**
   * @schema HlsGroupSettings#CaptionLanguageSetting
   */
  readonly captionLanguageSetting?: string;

  /**
   * @schema HlsGroupSettings#ClientCache
   */
  readonly clientCache?: string;

  /**
   * @schema HlsGroupSettings#CodecSpecification
   */
  readonly codecSpecification?: string;

  /**
   * @schema HlsGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema HlsGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: DestinationSettings;

  /**
   * @schema HlsGroupSettings#DirectoryStructure
   */
  readonly directoryStructure?: string;

  /**
   * @schema HlsGroupSettings#Encryption
   */
  readonly encryption?: HlsEncryptionSettings;

  /**
   * @schema HlsGroupSettings#ManifestCompression
   */
  readonly manifestCompression?: string;

  /**
   * @schema HlsGroupSettings#ManifestDurationFormat
   */
  readonly manifestDurationFormat?: string;

  /**
   * @schema HlsGroupSettings#MinFinalSegmentLength
   */
  readonly minFinalSegmentLength?: number;

  /**
   * @schema HlsGroupSettings#MinSegmentLength
   */
  readonly minSegmentLength?: number;

  /**
   * @schema HlsGroupSettings#OutputSelection
   */
  readonly outputSelection?: string;

  /**
   * @schema HlsGroupSettings#ProgramDateTime
   */
  readonly programDateTime?: string;

  /**
   * @schema HlsGroupSettings#ProgramDateTimePeriod
   */
  readonly programDateTimePeriod?: number;

  /**
   * @schema HlsGroupSettings#SegmentControl
   */
  readonly segmentControl?: string;

  /**
   * @schema HlsGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema HlsGroupSettings#SegmentsPerSubdirectory
   */
  readonly segmentsPerSubdirectory?: number;

  /**
   * @schema HlsGroupSettings#StreamInfResolution
   */
  readonly streamInfResolution?: string;

  /**
   * @schema HlsGroupSettings#TimedMetadataId3Frame
   */
  readonly timedMetadataId3Frame?: string;

  /**
   * @schema HlsGroupSettings#TimedMetadataId3Period
   */
  readonly timedMetadataId3Period?: number;

  /**
   * @schema HlsGroupSettings#TimestampDeltaMilliseconds
   */
  readonly timestampDeltaMilliseconds?: number;

}

/**
 * @schema MsSmoothGroupSettings
 */
export interface MsSmoothGroupSettings {
  /**
   * @schema MsSmoothGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: MsSmoothAdditionalManifest[];

  /**
   * @schema MsSmoothGroupSettings#AudioDeduplication
   */
  readonly audioDeduplication?: string;

  /**
   * @schema MsSmoothGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MsSmoothGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: DestinationSettings;

  /**
   * @schema MsSmoothGroupSettings#Encryption
   */
  readonly encryption?: MsSmoothEncryptionSettings;

  /**
   * @schema MsSmoothGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema MsSmoothGroupSettings#ManifestEncoding
   */
  readonly manifestEncoding?: string;

}

/**
 * @schema CaptionDescription
 */
export interface CaptionDescription {
  /**
   * @schema CaptionDescription#CaptionSelectorName
   */
  readonly captionSelectorName?: string;

  /**
   * @schema CaptionDescription#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema CaptionDescription#DestinationSettings
   */
  readonly destinationSettings?: CaptionDestinationSettings;

  /**
   * @schema CaptionDescription#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema CaptionDescription#LanguageDescription
   */
  readonly languageDescription?: string;

}

/**
 * @schema OutputSettings
 */
export interface OutputSettings {
  /**
   * @schema OutputSettings#HlsSettings
   */
  readonly hlsSettings?: HlsSettings;

}

/**
 * @schema VideoDetail
 */
export interface VideoDetail {
  /**
   * @schema VideoDetail#HeightInPx
   */
  readonly heightInPx?: number;

  /**
   * @schema VideoDetail#WidthInPx
   */
  readonly widthInPx?: number;

}

/**
 * @schema AacSettings
 */
export interface AacSettings {
  /**
   * @schema AacSettings#AudioDescriptionBroadcasterMix
   */
  readonly audioDescriptionBroadcasterMix?: string;

  /**
   * @schema AacSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema AacSettings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema AacSettings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema AacSettings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema AacSettings#RawFormat
   */
  readonly rawFormat?: string;

  /**
   * @schema AacSettings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema AacSettings#Specification
   */
  readonly specification?: string;

  /**
   * @schema AacSettings#VbrQuality
   */
  readonly vbrQuality?: string;

}

/**
 * @schema Ac3Settings
 */
export interface Ac3Settings {
  /**
   * @schema Ac3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema Ac3Settings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema Ac3Settings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema Ac3Settings#Dialnorm
   */
  readonly dialnorm?: number;

  /**
   * @schema Ac3Settings#DynamicRangeCompressionProfile
   */
  readonly dynamicRangeCompressionProfile?: string;

  /**
   * @schema Ac3Settings#LfeFilter
   */
  readonly lfeFilter?: string;

  /**
   * @schema Ac3Settings#MetadataControl
   */
  readonly metadataControl?: string;

  /**
   * @schema Ac3Settings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema AiffSettings
 */
export interface AiffSettings {
  /**
   * @schema AiffSettings#BitDepth
   */
  readonly bitDepth?: number;

  /**
   * @schema AiffSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema AiffSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema Eac3AtmosSettings
 */
export interface Eac3AtmosSettings {
  /**
   * @schema Eac3AtmosSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema Eac3AtmosSettings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema Eac3AtmosSettings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema Eac3AtmosSettings#DialogueIntelligence
   */
  readonly dialogueIntelligence?: string;

  /**
   * @schema Eac3AtmosSettings#DynamicRangeCompressionLine
   */
  readonly dynamicRangeCompressionLine?: string;

  /**
   * @schema Eac3AtmosSettings#DynamicRangeCompressionRf
   */
  readonly dynamicRangeCompressionRf?: string;

  /**
   * @schema Eac3AtmosSettings#LoRoCenterMixLevel
   */
  readonly loRoCenterMixLevel?: number;

  /**
   * @schema Eac3AtmosSettings#LoRoSurroundMixLevel
   */
  readonly loRoSurroundMixLevel?: number;

  /**
   * @schema Eac3AtmosSettings#LtRtCenterMixLevel
   */
  readonly ltRtCenterMixLevel?: number;

  /**
   * @schema Eac3AtmosSettings#LtRtSurroundMixLevel
   */
  readonly ltRtSurroundMixLevel?: number;

  /**
   * @schema Eac3AtmosSettings#MeteringMode
   */
  readonly meteringMode?: string;

  /**
   * @schema Eac3AtmosSettings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema Eac3AtmosSettings#SpeechThreshold
   */
  readonly speechThreshold?: number;

  /**
   * @schema Eac3AtmosSettings#StereoDownmix
   */
  readonly stereoDownmix?: string;

  /**
   * @schema Eac3AtmosSettings#SurroundExMode
   */
  readonly surroundExMode?: string;

}

/**
 * @schema Eac3Settings
 */
export interface Eac3Settings {
  /**
   * @schema Eac3Settings#AttenuationControl
   */
  readonly attenuationControl?: string;

  /**
   * @schema Eac3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema Eac3Settings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema Eac3Settings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema Eac3Settings#DcFilter
   */
  readonly dcFilter?: string;

  /**
   * @schema Eac3Settings#Dialnorm
   */
  readonly dialnorm?: number;

  /**
   * @schema Eac3Settings#DynamicRangeCompressionLine
   */
  readonly dynamicRangeCompressionLine?: string;

  /**
   * @schema Eac3Settings#DynamicRangeCompressionRf
   */
  readonly dynamicRangeCompressionRf?: string;

  /**
   * @schema Eac3Settings#LfeControl
   */
  readonly lfeControl?: string;

  /**
   * @schema Eac3Settings#LfeFilter
   */
  readonly lfeFilter?: string;

  /**
   * @schema Eac3Settings#LoRoCenterMixLevel
   */
  readonly loRoCenterMixLevel?: number;

  /**
   * @schema Eac3Settings#LoRoSurroundMixLevel
   */
  readonly loRoSurroundMixLevel?: number;

  /**
   * @schema Eac3Settings#LtRtCenterMixLevel
   */
  readonly ltRtCenterMixLevel?: number;

  /**
   * @schema Eac3Settings#LtRtSurroundMixLevel
   */
  readonly ltRtSurroundMixLevel?: number;

  /**
   * @schema Eac3Settings#MetadataControl
   */
  readonly metadataControl?: string;

  /**
   * @schema Eac3Settings#PassthroughControl
   */
  readonly passthroughControl?: string;

  /**
   * @schema Eac3Settings#PhaseControl
   */
  readonly phaseControl?: string;

  /**
   * @schema Eac3Settings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema Eac3Settings#StereoDownmix
   */
  readonly stereoDownmix?: string;

  /**
   * @schema Eac3Settings#SurroundExMode
   */
  readonly surroundExMode?: string;

  /**
   * @schema Eac3Settings#SurroundMode
   */
  readonly surroundMode?: string;

}

/**
 * @schema Mp2Settings
 */
export interface Mp2Settings {
  /**
   * @schema Mp2Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema Mp2Settings#Channels
   */
  readonly channels?: number;

  /**
   * @schema Mp2Settings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema Mp3Settings
 */
export interface Mp3Settings {
  /**
   * @schema Mp3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema Mp3Settings#Channels
   */
  readonly channels?: number;

  /**
   * @schema Mp3Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema Mp3Settings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema Mp3Settings#VbrQuality
   */
  readonly vbrQuality?: number;

}

/**
 * @schema OpusSettings
 */
export interface OpusSettings {
  /**
   * @schema OpusSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema OpusSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema OpusSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema VorbisSettings
 */
export interface VorbisSettings {
  /**
   * @schema VorbisSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema VorbisSettings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema VorbisSettings#VbrQuality
   */
  readonly vbrQuality?: number;

}

/**
 * @schema WavSettings
 */
export interface WavSettings {
  /**
   * @schema WavSettings#BitDepth
   */
  readonly bitDepth?: number;

  /**
   * @schema WavSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema WavSettings#Format
   */
  readonly format?: string;

  /**
   * @schema WavSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema ChannelMapping
 */
export interface ChannelMapping {
  /**
   * @schema ChannelMapping#OutputChannels
   */
  readonly outputChannels?: OutputChannelMapping[];

}

/**
 * @schema BurninDestinationSettings
 */
export interface BurninDestinationSettings {
  /**
   * @schema BurninDestinationSettings#Alignment
   */
  readonly alignment?: string;

  /**
   * @schema BurninDestinationSettings#BackgroundColor
   */
  readonly backgroundColor?: string;

  /**
   * @schema BurninDestinationSettings#BackgroundOpacity
   */
  readonly backgroundOpacity?: number;

  /**
   * @schema BurninDestinationSettings#FontColor
   */
  readonly fontColor?: string;

  /**
   * @schema BurninDestinationSettings#FontOpacity
   */
  readonly fontOpacity?: number;

  /**
   * @schema BurninDestinationSettings#FontResolution
   */
  readonly fontResolution?: number;

  /**
   * @schema BurninDestinationSettings#FontScript
   */
  readonly fontScript?: string;

  /**
   * @schema BurninDestinationSettings#FontSize
   */
  readonly fontSize?: number;

  /**
   * @schema BurninDestinationSettings#OutlineColor
   */
  readonly outlineColor?: string;

  /**
   * @schema BurninDestinationSettings#OutlineSize
   */
  readonly outlineSize?: number;

  /**
   * @schema BurninDestinationSettings#ShadowColor
   */
  readonly shadowColor?: string;

  /**
   * @schema BurninDestinationSettings#ShadowOpacity
   */
  readonly shadowOpacity?: number;

  /**
   * @schema BurninDestinationSettings#ShadowXOffset
   */
  readonly shadowXOffset?: number;

  /**
   * @schema BurninDestinationSettings#ShadowYOffset
   */
  readonly shadowYOffset?: number;

  /**
   * @schema BurninDestinationSettings#TeletextSpacing
   */
  readonly teletextSpacing?: string;

  /**
   * @schema BurninDestinationSettings#XPosition
   */
  readonly xPosition?: number;

  /**
   * @schema BurninDestinationSettings#YPosition
   */
  readonly yPosition?: number;

}

/**
 * @schema DvbSubDestinationSettings
 */
export interface DvbSubDestinationSettings {
  /**
   * @schema DvbSubDestinationSettings#Alignment
   */
  readonly alignment?: string;

  /**
   * @schema DvbSubDestinationSettings#BackgroundColor
   */
  readonly backgroundColor?: string;

  /**
   * @schema DvbSubDestinationSettings#BackgroundOpacity
   */
  readonly backgroundOpacity?: number;

  /**
   * @schema DvbSubDestinationSettings#FontColor
   */
  readonly fontColor?: string;

  /**
   * @schema DvbSubDestinationSettings#FontOpacity
   */
  readonly fontOpacity?: number;

  /**
   * @schema DvbSubDestinationSettings#FontResolution
   */
  readonly fontResolution?: number;

  /**
   * @schema DvbSubDestinationSettings#FontScript
   */
  readonly fontScript?: string;

  /**
   * @schema DvbSubDestinationSettings#FontSize
   */
  readonly fontSize?: number;

  /**
   * @schema DvbSubDestinationSettings#OutlineColor
   */
  readonly outlineColor?: string;

  /**
   * @schema DvbSubDestinationSettings#OutlineSize
   */
  readonly outlineSize?: number;

  /**
   * @schema DvbSubDestinationSettings#ShadowColor
   */
  readonly shadowColor?: string;

  /**
   * @schema DvbSubDestinationSettings#ShadowOpacity
   */
  readonly shadowOpacity?: number;

  /**
   * @schema DvbSubDestinationSettings#ShadowXOffset
   */
  readonly shadowXOffset?: number;

  /**
   * @schema DvbSubDestinationSettings#ShadowYOffset
   */
  readonly shadowYOffset?: number;

  /**
   * @schema DvbSubDestinationSettings#SubtitlingType
   */
  readonly subtitlingType?: string;

  /**
   * @schema DvbSubDestinationSettings#TeletextSpacing
   */
  readonly teletextSpacing?: string;

  /**
   * @schema DvbSubDestinationSettings#XPosition
   */
  readonly xPosition?: number;

  /**
   * @schema DvbSubDestinationSettings#YPosition
   */
  readonly yPosition?: number;

}

/**
 * @schema EmbeddedDestinationSettings
 */
export interface EmbeddedDestinationSettings {
  /**
   * @schema EmbeddedDestinationSettings#Destination608ChannelNumber
   */
  readonly destination608ChannelNumber?: number;

  /**
   * @schema EmbeddedDestinationSettings#Destination708ServiceNumber
   */
  readonly destination708ServiceNumber?: number;

}

/**
 * @schema ImscDestinationSettings
 */
export interface ImscDestinationSettings {
  /**
   * @schema ImscDestinationSettings#StylePassthrough
   */
  readonly stylePassthrough?: string;

}

/**
 * @schema SccDestinationSettings
 */
export interface SccDestinationSettings {
  /**
   * @schema SccDestinationSettings#Framerate
   */
  readonly framerate?: string;

}

/**
 * @schema TeletextDestinationSettings
 */
export interface TeletextDestinationSettings {
  /**
   * @schema TeletextDestinationSettings#PageNumber
   */
  readonly pageNumber?: string;

  /**
   * @schema TeletextDestinationSettings#PageTypes
   */
  readonly pageTypes?: string[];

}

/**
 * @schema TtmlDestinationSettings
 */
export interface TtmlDestinationSettings {
  /**
   * @schema TtmlDestinationSettings#StylePassthrough
   */
  readonly stylePassthrough?: string;

}

/**
 * @schema DvbNitSettings
 */
export interface DvbNitSettings {
  /**
   * @schema DvbNitSettings#NetworkId
   */
  readonly networkId?: number;

  /**
   * @schema DvbNitSettings#NetworkName
   */
  readonly networkName?: string;

  /**
   * @schema DvbNitSettings#NitInterval
   */
  readonly nitInterval?: number;

}

/**
 * @schema DvbSdtSettings
 */
export interface DvbSdtSettings {
  /**
   * @schema DvbSdtSettings#OutputSdt
   */
  readonly outputSdt?: string;

  /**
   * @schema DvbSdtSettings#SdtInterval
   */
  readonly sdtInterval?: number;

  /**
   * @schema DvbSdtSettings#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema DvbSdtSettings#ServiceProviderName
   */
  readonly serviceProviderName?: string;

}

/**
 * @schema DvbTdtSettings
 */
export interface DvbTdtSettings {
  /**
   * @schema DvbTdtSettings#TdtInterval
   */
  readonly tdtInterval?: number;

}

/**
 * @schema M2tsScte35Esam
 */
export interface M2tsScte35Esam {
  /**
   * @schema M2tsScte35Esam#Scte35EsamPid
   */
  readonly scte35EsamPid?: number;

}

/**
 * @schema Av1Settings
 */
export interface Av1Settings {
  /**
   * @schema Av1Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema Av1Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema Av1Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema Av1Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema Av1Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema Av1Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema Av1Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema Av1Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema Av1Settings#QvbrSettings
   */
  readonly qvbrSettings?: Av1QvbrSettings;

  /**
   * @schema Av1Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema Av1Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema Av1Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

}

/**
 * @schema AvcIntraSettings
 */
export interface AvcIntraSettings {
  /**
   * @schema AvcIntraSettings#AvcIntraClass
   */
  readonly avcIntraClass?: string;

  /**
   * @schema AvcIntraSettings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema AvcIntraSettings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema AvcIntraSettings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema AvcIntraSettings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema AvcIntraSettings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema AvcIntraSettings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema AvcIntraSettings#Telecine
   */
  readonly telecine?: string;

}

/**
 * @schema FrameCaptureSettings
 */
export interface FrameCaptureSettings {
  /**
   * @schema FrameCaptureSettings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema FrameCaptureSettings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema FrameCaptureSettings#MaxCaptures
   */
  readonly maxCaptures?: number;

  /**
   * @schema FrameCaptureSettings#Quality
   */
  readonly quality?: number;

}

/**
 * @schema H264Settings
 */
export interface H264Settings {
  /**
   * @schema H264Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema H264Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema H264Settings#CodecLevel
   */
  readonly codecLevel?: string;

  /**
   * @schema H264Settings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema H264Settings#DynamicSubGop
   */
  readonly dynamicSubGop?: string;

  /**
   * @schema H264Settings#EntropyEncoding
   */
  readonly entropyEncoding?: string;

  /**
   * @schema H264Settings#FieldEncoding
   */
  readonly fieldEncoding?: string;

  /**
   * @schema H264Settings#FlickerAdaptiveQuantization
   */
  readonly flickerAdaptiveQuantization?: string;

  /**
   * @schema H264Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema H264Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema H264Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema H264Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema H264Settings#GopBReference
   */
  readonly gopBReference?: string;

  /**
   * @schema H264Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema H264Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema H264Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema H264Settings#HrdBufferInitialFillPercentage
   */
  readonly hrdBufferInitialFillPercentage?: number;

  /**
   * @schema H264Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema H264Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema H264Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema H264Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema H264Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema H264Settings#NumberReferenceFrames
   */
  readonly numberReferenceFrames?: number;

  /**
   * @schema H264Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema H264Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema H264Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema H264Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema H264Settings#QvbrSettings
   */
  readonly qvbrSettings?: H264QvbrSettings;

  /**
   * @schema H264Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema H264Settings#RepeatPps
   */
  readonly repeatPps?: string;

  /**
   * @schema H264Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema H264Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema H264Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema H264Settings#Softness
   */
  readonly softness?: number;

  /**
   * @schema H264Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

  /**
   * @schema H264Settings#Syntax
   */
  readonly syntax?: string;

  /**
   * @schema H264Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema H264Settings#TemporalAdaptiveQuantization
   */
  readonly temporalAdaptiveQuantization?: string;

  /**
   * @schema H264Settings#UnregisteredSeiTimecode
   */
  readonly unregisteredSeiTimecode?: string;

}

/**
 * @schema H265Settings
 */
export interface H265Settings {
  /**
   * @schema H265Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema H265Settings#AlternateTransferFunctionSei
   */
  readonly alternateTransferFunctionSei?: string;

  /**
   * @schema H265Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema H265Settings#CodecLevel
   */
  readonly codecLevel?: string;

  /**
   * @schema H265Settings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema H265Settings#DynamicSubGop
   */
  readonly dynamicSubGop?: string;

  /**
   * @schema H265Settings#FlickerAdaptiveQuantization
   */
  readonly flickerAdaptiveQuantization?: string;

  /**
   * @schema H265Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema H265Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema H265Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema H265Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema H265Settings#GopBReference
   */
  readonly gopBReference?: string;

  /**
   * @schema H265Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema H265Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema H265Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema H265Settings#HrdBufferInitialFillPercentage
   */
  readonly hrdBufferInitialFillPercentage?: number;

  /**
   * @schema H265Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema H265Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema H265Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema H265Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema H265Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema H265Settings#NumberReferenceFrames
   */
  readonly numberReferenceFrames?: number;

  /**
   * @schema H265Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema H265Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema H265Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema H265Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema H265Settings#QvbrSettings
   */
  readonly qvbrSettings?: H265QvbrSettings;

  /**
   * @schema H265Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema H265Settings#SampleAdaptiveOffsetFilterMode
   */
  readonly sampleAdaptiveOffsetFilterMode?: string;

  /**
   * @schema H265Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema H265Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema H265Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema H265Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

  /**
   * @schema H265Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema H265Settings#TemporalAdaptiveQuantization
   */
  readonly temporalAdaptiveQuantization?: string;

  /**
   * @schema H265Settings#TemporalIds
   */
  readonly temporalIds?: string;

  /**
   * @schema H265Settings#Tiles
   */
  readonly tiles?: string;

  /**
   * @schema H265Settings#UnregisteredSeiTimecode
   */
  readonly unregisteredSeiTimecode?: string;

  /**
   * @schema H265Settings#WriteMp4PackagingType
   */
  readonly writeMp4PackagingType?: string;

}

/**
 * @schema Mpeg2Settings
 */
export interface Mpeg2Settings {
  /**
   * @schema Mpeg2Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema Mpeg2Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema Mpeg2Settings#CodecLevel
   */
  readonly codecLevel?: string;

  /**
   * @schema Mpeg2Settings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema Mpeg2Settings#DynamicSubGop
   */
  readonly dynamicSubGop?: string;

  /**
   * @schema Mpeg2Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema Mpeg2Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema Mpeg2Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema Mpeg2Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema Mpeg2Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema Mpeg2Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema Mpeg2Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema Mpeg2Settings#HrdBufferInitialFillPercentage
   */
  readonly hrdBufferInitialFillPercentage?: number;

  /**
   * @schema Mpeg2Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema Mpeg2Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema Mpeg2Settings#IntraDcPrecision
   */
  readonly intraDcPrecision?: string;

  /**
   * @schema Mpeg2Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema Mpeg2Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema Mpeg2Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema Mpeg2Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema Mpeg2Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema Mpeg2Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema Mpeg2Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema Mpeg2Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema Mpeg2Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema Mpeg2Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema Mpeg2Settings#Softness
   */
  readonly softness?: number;

  /**
   * @schema Mpeg2Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

  /**
   * @schema Mpeg2Settings#Syntax
   */
  readonly syntax?: string;

  /**
   * @schema Mpeg2Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema Mpeg2Settings#TemporalAdaptiveQuantization
   */
  readonly temporalAdaptiveQuantization?: string;

}

/**
 * @schema ProresSettings
 */
export interface ProresSettings {
  /**
   * @schema ProresSettings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema ProresSettings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema ProresSettings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema ProresSettings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema ProresSettings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema ProresSettings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema ProresSettings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema ProresSettings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema ProresSettings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema ProresSettings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema ProresSettings#Telecine
   */
  readonly telecine?: string;

}

/**
 * @schema Vc3Settings
 */
export interface Vc3Settings {
  /**
   * @schema Vc3Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema Vc3Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema Vc3Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema Vc3Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema Vc3Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema Vc3Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema Vc3Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema Vc3Settings#Vc3Class
   */
  readonly vc3Class?: string;

}

/**
 * @schema Vp8Settings
 */
export interface Vp8Settings {
  /**
   * @schema Vp8Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema Vp8Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema Vp8Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema Vp8Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema Vp8Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema Vp8Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema Vp8Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema Vp8Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema Vp8Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema Vp8Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema Vp8Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema Vp8Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema Vp8Settings#RateControlMode
   */
  readonly rateControlMode?: string;

}

/**
 * @schema Vp9Settings
 */
export interface Vp9Settings {
  /**
   * @schema Vp9Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema Vp9Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema Vp9Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema Vp9Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema Vp9Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema Vp9Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema Vp9Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema Vp9Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema Vp9Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema Vp9Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema Vp9Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema Vp9Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema Vp9Settings#RateControlMode
   */
  readonly rateControlMode?: string;

}

/**
 * @schema ColorCorrector
 */
export interface ColorCorrector {
  /**
   * @schema ColorCorrector#Brightness
   */
  readonly brightness?: number;

  /**
   * @schema ColorCorrector#ColorSpaceConversion
   */
  readonly colorSpaceConversion?: string;

  /**
   * @schema ColorCorrector#Contrast
   */
  readonly contrast?: number;

  /**
   * @schema ColorCorrector#Hdr10Metadata
   */
  readonly hdr10Metadata?: Hdr10Metadata;

  /**
   * @schema ColorCorrector#Hue
   */
  readonly hue?: number;

  /**
   * @schema ColorCorrector#Saturation
   */
  readonly saturation?: number;

}

/**
 * @schema Deinterlacer
 */
export interface Deinterlacer {
  /**
   * @schema Deinterlacer#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema Deinterlacer#Control
   */
  readonly control?: string;

  /**
   * @schema Deinterlacer#Mode
   */
  readonly mode?: string;

}

/**
 * @schema DolbyVision
 */
export interface DolbyVision {
  /**
   * @schema DolbyVision#L6Metadata
   */
  readonly l6Metadata?: DolbyVisionLevel6Metadata;

  /**
   * @schema DolbyVision#L6Mode
   */
  readonly l6Mode?: string;

  /**
   * @schema DolbyVision#Profile
   */
  readonly profile?: string;

}

/**
 * @schema NoiseReducer
 */
export interface NoiseReducer {
  /**
   * @schema NoiseReducer#Filter
   */
  readonly filter?: string;

  /**
   * @schema NoiseReducer#FilterSettings
   */
  readonly filterSettings?: NoiseReducerFilterSettings;

  /**
   * @schema NoiseReducer#SpatialFilterSettings
   */
  readonly spatialFilterSettings?: NoiseReducerSpatialFilterSettings;

  /**
   * @schema NoiseReducer#TemporalFilterSettings
   */
  readonly temporalFilterSettings?: NoiseReducerTemporalFilterSettings;

}

/**
 * @schema PartnerWatermarking
 */
export interface PartnerWatermarking {
  /**
   * @schema PartnerWatermarking#NexguardFileMarkerSettings
   */
  readonly nexguardFileMarkerSettings?: NexGuardFileMarkerSettings;

}

/**
 * @schema TimecodeBurnin
 */
export interface TimecodeBurnin {
  /**
   * @schema TimecodeBurnin#FontSize
   */
  readonly fontSize?: number;

  /**
   * @schema TimecodeBurnin#Position
   */
  readonly position?: string;

  /**
   * @schema TimecodeBurnin#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema AncillarySourceSettings
 */
export interface AncillarySourceSettings {
  /**
   * @schema AncillarySourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema AncillarySourceSettings#SourceAncillaryChannelNumber
   */
  readonly sourceAncillaryChannelNumber?: number;

  /**
   * @schema AncillarySourceSettings#TerminateCaptions
   */
  readonly terminateCaptions?: string;

}

/**
 * @schema DvbSubSourceSettings
 */
export interface DvbSubSourceSettings {
  /**
   * @schema DvbSubSourceSettings#Pid
   */
  readonly pid?: number;

}

/**
 * @schema EmbeddedSourceSettings
 */
export interface EmbeddedSourceSettings {
  /**
   * @schema EmbeddedSourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema EmbeddedSourceSettings#Source608ChannelNumber
   */
  readonly source608ChannelNumber?: number;

  /**
   * @schema EmbeddedSourceSettings#Source608TrackNumber
   */
  readonly source608TrackNumber?: number;

  /**
   * @schema EmbeddedSourceSettings#TerminateCaptions
   */
  readonly terminateCaptions?: string;

}

/**
 * @schema FileSourceSettings
 */
export interface FileSourceSettings {
  /**
   * @schema FileSourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema FileSourceSettings#Framerate
   */
  readonly framerate?: CaptionSourceFramerate;

  /**
   * @schema FileSourceSettings#SourceFile
   */
  readonly sourceFile?: string;

  /**
   * @schema FileSourceSettings#TimeDelta
   */
  readonly timeDelta?: number;

}

/**
 * @schema TeletextSourceSettings
 */
export interface TeletextSourceSettings {
  /**
   * @schema TeletextSourceSettings#PageNumber
   */
  readonly pageNumber?: string;

}

/**
 * @schema TrackSourceSettings
 */
export interface TrackSourceSettings {
  /**
   * @schema TrackSourceSettings#TrackNumber
   */
  readonly trackNumber?: number;

}

/**
 * @schema CmafAdditionalManifest
 */
export interface CmafAdditionalManifest {
  /**
   * @schema CmafAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema CmafAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * @schema DestinationSettings
 */
export interface DestinationSettings {
  /**
   * @schema DestinationSettings#S3Settings
   */
  readonly s3Settings?: S3DestinationSettings;

}

/**
 * @schema CmafEncryptionSettings
 */
export interface CmafEncryptionSettings {
  /**
   * @schema CmafEncryptionSettings#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema CmafEncryptionSettings#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema CmafEncryptionSettings#InitializationVectorInManifest
   */
  readonly initializationVectorInManifest?: string;

  /**
   * @schema CmafEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: SpekeKeyProviderCmaf;

  /**
   * @schema CmafEncryptionSettings#StaticKeyProvider
   */
  readonly staticKeyProvider?: StaticKeyProvider;

  /**
   * @schema CmafEncryptionSettings#Type
   */
  readonly type?: string;

}

/**
 * @schema DashAdditionalManifest
 */
export interface DashAdditionalManifest {
  /**
   * @schema DashAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema DashAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * @schema DashIsoEncryptionSettings
 */
export interface DashIsoEncryptionSettings {
  /**
   * @schema DashIsoEncryptionSettings#PlaybackDeviceCompatibility
   */
  readonly playbackDeviceCompatibility?: string;

  /**
   * @schema DashIsoEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: SpekeKeyProvider;

}

/**
 * @schema HlsAdditionalManifest
 */
export interface HlsAdditionalManifest {
  /**
   * @schema HlsAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema HlsAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * @schema HlsCaptionLanguageMapping
 */
export interface HlsCaptionLanguageMapping {
  /**
   * @schema HlsCaptionLanguageMapping#CaptionChannel
   */
  readonly captionChannel?: number;

  /**
   * @schema HlsCaptionLanguageMapping#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema HlsCaptionLanguageMapping#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema HlsCaptionLanguageMapping#LanguageDescription
   */
  readonly languageDescription?: string;

}

/**
 * @schema HlsEncryptionSettings
 */
export interface HlsEncryptionSettings {
  /**
   * @schema HlsEncryptionSettings#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema HlsEncryptionSettings#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema HlsEncryptionSettings#InitializationVectorInManifest
   */
  readonly initializationVectorInManifest?: string;

  /**
   * @schema HlsEncryptionSettings#OfflineEncrypted
   */
  readonly offlineEncrypted?: string;

  /**
   * @schema HlsEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: SpekeKeyProvider;

  /**
   * @schema HlsEncryptionSettings#StaticKeyProvider
   */
  readonly staticKeyProvider?: StaticKeyProvider;

  /**
   * @schema HlsEncryptionSettings#Type
   */
  readonly type?: string;

}

/**
 * @schema MsSmoothAdditionalManifest
 */
export interface MsSmoothAdditionalManifest {
  /**
   * @schema MsSmoothAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema MsSmoothAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * @schema MsSmoothEncryptionSettings
 */
export interface MsSmoothEncryptionSettings {
  /**
   * @schema MsSmoothEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: SpekeKeyProvider;

}

/**
 * @schema HlsSettings
 */
export interface HlsSettings {
  /**
   * @schema HlsSettings#AudioGroupId
   */
  readonly audioGroupId?: string;

  /**
   * @schema HlsSettings#AudioOnlyContainer
   */
  readonly audioOnlyContainer?: string;

  /**
   * @schema HlsSettings#AudioRenditionSets
   */
  readonly audioRenditionSets?: string;

  /**
   * @schema HlsSettings#AudioTrackType
   */
  readonly audioTrackType?: string;

  /**
   * @schema HlsSettings#IFrameOnlyManifest
   */
  readonly iFrameOnlyManifest?: string;

  /**
   * @schema HlsSettings#SegmentModifier
   */
  readonly segmentModifier?: string;

}

/**
 * @schema OutputChannelMapping
 */
export interface OutputChannelMapping {
  /**
   * @schema OutputChannelMapping#InputChannels
   */
  readonly inputChannels?: number[];

}

/**
 * @schema Av1QvbrSettings
 */
export interface Av1QvbrSettings {
  /**
   * @schema Av1QvbrSettings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema Av1QvbrSettings#QvbrQualityLevelFineTune
   */
  readonly qvbrQualityLevelFineTune?: number;

}

/**
 * @schema H264QvbrSettings
 */
export interface H264QvbrSettings {
  /**
   * @schema H264QvbrSettings#MaxAverageBitrate
   */
  readonly maxAverageBitrate?: number;

  /**
   * @schema H264QvbrSettings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema H264QvbrSettings#QvbrQualityLevelFineTune
   */
  readonly qvbrQualityLevelFineTune?: number;

}

/**
 * @schema H265QvbrSettings
 */
export interface H265QvbrSettings {
  /**
   * @schema H265QvbrSettings#MaxAverageBitrate
   */
  readonly maxAverageBitrate?: number;

  /**
   * @schema H265QvbrSettings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema H265QvbrSettings#QvbrQualityLevelFineTune
   */
  readonly qvbrQualityLevelFineTune?: number;

}

/**
 * @schema DolbyVisionLevel6Metadata
 */
export interface DolbyVisionLevel6Metadata {
  /**
   * @schema DolbyVisionLevel6Metadata#MaxCll
   */
  readonly maxCll?: number;

  /**
   * @schema DolbyVisionLevel6Metadata#MaxFall
   */
  readonly maxFall?: number;

}

/**
 * @schema NoiseReducerFilterSettings
 */
export interface NoiseReducerFilterSettings {
  /**
   * @schema NoiseReducerFilterSettings#Strength
   */
  readonly strength?: number;

}

/**
 * @schema NoiseReducerSpatialFilterSettings
 */
export interface NoiseReducerSpatialFilterSettings {
  /**
   * @schema NoiseReducerSpatialFilterSettings#PostFilterSharpenStrength
   */
  readonly postFilterSharpenStrength?: number;

  /**
   * @schema NoiseReducerSpatialFilterSettings#Speed
   */
  readonly speed?: number;

  /**
   * @schema NoiseReducerSpatialFilterSettings#Strength
   */
  readonly strength?: number;

}

/**
 * @schema NoiseReducerTemporalFilterSettings
 */
export interface NoiseReducerTemporalFilterSettings {
  /**
   * @schema NoiseReducerTemporalFilterSettings#AggressiveMode
   */
  readonly aggressiveMode?: number;

  /**
   * @schema NoiseReducerTemporalFilterSettings#PostTemporalSharpening
   */
  readonly postTemporalSharpening?: string;

  /**
   * @schema NoiseReducerTemporalFilterSettings#Speed
   */
  readonly speed?: number;

  /**
   * @schema NoiseReducerTemporalFilterSettings#Strength
   */
  readonly strength?: number;

}

/**
 * @schema NexGuardFileMarkerSettings
 */
export interface NexGuardFileMarkerSettings {
  /**
   * @schema NexGuardFileMarkerSettings#License
   */
  readonly license?: string;

  /**
   * @schema NexGuardFileMarkerSettings#Payload
   */
  readonly payload?: number;

  /**
   * @schema NexGuardFileMarkerSettings#Preset
   */
  readonly preset?: string;

  /**
   * @schema NexGuardFileMarkerSettings#Strength
   */
  readonly strength?: string;

}

/**
 * @schema CaptionSourceFramerate
 */
export interface CaptionSourceFramerate {
  /**
   * @schema CaptionSourceFramerate#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema CaptionSourceFramerate#FramerateNumerator
   */
  readonly framerateNumerator?: number;

}

/**
 * @schema S3DestinationSettings
 */
export interface S3DestinationSettings {
  /**
   * @schema S3DestinationSettings#AccessControl
   */
  readonly accessControl?: S3DestinationAccessControl;

  /**
   * @schema S3DestinationSettings#Encryption
   */
  readonly encryption?: S3EncryptionSettings;

}

/**
 * @schema SpekeKeyProviderCmaf
 */
export interface SpekeKeyProviderCmaf {
  /**
   * @schema SpekeKeyProviderCmaf#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema SpekeKeyProviderCmaf#DashSignaledSystemIds
   */
  readonly dashSignaledSystemIds?: string[];

  /**
   * @schema SpekeKeyProviderCmaf#HlsSignaledSystemIds
   */
  readonly hlsSignaledSystemIds?: string[];

  /**
   * @schema SpekeKeyProviderCmaf#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SpekeKeyProviderCmaf#Url
   */
  readonly url?: string;

}

/**
 * @schema StaticKeyProvider
 */
export interface StaticKeyProvider {
  /**
   * @schema StaticKeyProvider#KeyFormat
   */
  readonly keyFormat?: string;

  /**
   * @schema StaticKeyProvider#KeyFormatVersions
   */
  readonly keyFormatVersions?: string;

  /**
   * @schema StaticKeyProvider#StaticKeyValue
   */
  readonly staticKeyValue?: string;

  /**
   * @schema StaticKeyProvider#Url
   */
  readonly url?: string;

}

/**
 * @schema SpekeKeyProvider
 */
export interface SpekeKeyProvider {
  /**
   * @schema SpekeKeyProvider#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema SpekeKeyProvider#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SpekeKeyProvider#SystemIds
   */
  readonly systemIds?: string[];

  /**
   * @schema SpekeKeyProvider#Url
   */
  readonly url?: string;

}

/**
 * @schema S3DestinationAccessControl
 */
export interface S3DestinationAccessControl {
  /**
   * @schema S3DestinationAccessControl#CannedAcl
   */
  readonly cannedAcl?: string;

}

/**
 * @schema S3EncryptionSettings
 */
export interface S3EncryptionSettings {
  /**
   * @schema S3EncryptionSettings#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema S3EncryptionSettings#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}
