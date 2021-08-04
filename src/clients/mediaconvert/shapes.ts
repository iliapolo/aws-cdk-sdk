/**
 * @schema MediaConvertAssociateCertificateRequest
 */
export interface MediaConvertAssociateCertificateRequest {
  /**
   * @schema MediaConvertAssociateCertificateRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema MediaConvertAssociateCertificateResponse
 */
export interface MediaConvertAssociateCertificateResponse {
}

/**
 * @schema MediaConvertCancelJobRequest
 */
export interface MediaConvertCancelJobRequest {
  /**
   * @schema MediaConvertCancelJobRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaConvertCancelJobResponse
 */
export interface MediaConvertCancelJobResponse {
}

/**
 * @schema MediaConvertCreateJobRequest
 */
export interface MediaConvertCreateJobRequest {
  /**
   * @schema MediaConvertCreateJobRequest#AccelerationSettings
   */
  readonly accelerationSettings?: MediaConvertAccelerationSettings;

  /**
   * @schema MediaConvertCreateJobRequest#BillingTagsSource
   */
  readonly billingTagsSource?: string;

  /**
   * @schema MediaConvertCreateJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema MediaConvertCreateJobRequest#HopDestinations
   */
  readonly hopDestinations?: MediaConvertHopDestination[];

  /**
   * @schema MediaConvertCreateJobRequest#JobTemplate
   */
  readonly jobTemplate?: string;

  /**
   * @schema MediaConvertCreateJobRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertCreateJobRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertCreateJobRequest#Role
   */
  readonly role: string;

  /**
   * @schema MediaConvertCreateJobRequest#Settings
   */
  readonly settings: MediaConvertJobSettings;

  /**
   * @schema MediaConvertCreateJobRequest#SimulateReservedQueue
   */
  readonly simulateReservedQueue?: string;

  /**
   * @schema MediaConvertCreateJobRequest#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema MediaConvertCreateJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaConvertCreateJobRequest#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

}

/**
 * @schema MediaConvertCreateJobResponse
 */
export interface MediaConvertCreateJobResponse {
  /**
   * @schema MediaConvertCreateJobResponse#Job
   */
  readonly job?: MediaConvertJob;

}

/**
 * @schema MediaConvertCreateJobTemplateRequest
 */
export interface MediaConvertCreateJobTemplateRequest {
  /**
   * @schema MediaConvertCreateJobTemplateRequest#AccelerationSettings
   */
  readonly accelerationSettings?: MediaConvertAccelerationSettings;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#HopDestinations
   */
  readonly hopDestinations?: MediaConvertHopDestination[];

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Name
   */
  readonly name: string;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Settings
   */
  readonly settings: MediaConvertJobTemplateSettings;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaConvertCreateJobTemplateResponse
 */
export interface MediaConvertCreateJobTemplateResponse {
  /**
   * @schema MediaConvertCreateJobTemplateResponse#JobTemplate
   */
  readonly jobTemplate?: MediaConvertJobTemplate;

}

/**
 * @schema MediaConvertCreatePresetRequest
 */
export interface MediaConvertCreatePresetRequest {
  /**
   * @schema MediaConvertCreatePresetRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertCreatePresetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertCreatePresetRequest#Name
   */
  readonly name: string;

  /**
   * @schema MediaConvertCreatePresetRequest#Settings
   */
  readonly settings: MediaConvertPresetSettings;

  /**
   * @schema MediaConvertCreatePresetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaConvertCreatePresetResponse
 */
export interface MediaConvertCreatePresetResponse {
  /**
   * @schema MediaConvertCreatePresetResponse#Preset
   */
  readonly preset?: MediaConvertPreset;

}

/**
 * @schema MediaConvertCreateQueueRequest
 */
export interface MediaConvertCreateQueueRequest {
  /**
   * @schema MediaConvertCreateQueueRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertCreateQueueRequest#Name
   */
  readonly name: string;

  /**
   * @schema MediaConvertCreateQueueRequest#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema MediaConvertCreateQueueRequest#ReservationPlanSettings
   */
  readonly reservationPlanSettings?: MediaConvertReservationPlanSettings;

  /**
   * @schema MediaConvertCreateQueueRequest#Status
   */
  readonly status?: string;

  /**
   * @schema MediaConvertCreateQueueRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaConvertCreateQueueResponse
 */
export interface MediaConvertCreateQueueResponse {
  /**
   * @schema MediaConvertCreateQueueResponse#Queue
   */
  readonly queue?: MediaConvertQueue;

}

/**
 * @schema MediaConvertDeleteJobTemplateRequest
 */
export interface MediaConvertDeleteJobTemplateRequest {
  /**
   * @schema MediaConvertDeleteJobTemplateRequest#Name
   */
  readonly name: string;

}

/**
 * @schema MediaConvertDeleteJobTemplateResponse
 */
export interface MediaConvertDeleteJobTemplateResponse {
}

/**
 * @schema MediaConvertDeletePresetRequest
 */
export interface MediaConvertDeletePresetRequest {
  /**
   * @schema MediaConvertDeletePresetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema MediaConvertDeletePresetResponse
 */
export interface MediaConvertDeletePresetResponse {
}

/**
 * @schema MediaConvertDeleteQueueRequest
 */
export interface MediaConvertDeleteQueueRequest {
  /**
   * @schema MediaConvertDeleteQueueRequest#Name
   */
  readonly name: string;

}

/**
 * @schema MediaConvertDeleteQueueResponse
 */
export interface MediaConvertDeleteQueueResponse {
}

/**
 * @schema MediaConvertDescribeEndpointsRequest
 */
export interface MediaConvertDescribeEndpointsRequest {
  /**
   * @schema MediaConvertDescribeEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConvertDescribeEndpointsRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema MediaConvertDescribeEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaConvertDescribeEndpointsResponse
 */
export interface MediaConvertDescribeEndpointsResponse {
  /**
   * @schema MediaConvertDescribeEndpointsResponse#Endpoints
   */
  readonly endpoints?: MediaConvertEndpoint[];

  /**
   * @schema MediaConvertDescribeEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaConvertDisassociateCertificateRequest
 */
export interface MediaConvertDisassociateCertificateRequest {
  /**
   * @schema MediaConvertDisassociateCertificateRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema MediaConvertDisassociateCertificateResponse
 */
export interface MediaConvertDisassociateCertificateResponse {
}

/**
 * @schema MediaConvertGetJobRequest
 */
export interface MediaConvertGetJobRequest {
  /**
   * @schema MediaConvertGetJobRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaConvertGetJobResponse
 */
export interface MediaConvertGetJobResponse {
  /**
   * @schema MediaConvertGetJobResponse#Job
   */
  readonly job?: MediaConvertJob;

}

/**
 * @schema MediaConvertGetJobTemplateRequest
 */
export interface MediaConvertGetJobTemplateRequest {
  /**
   * @schema MediaConvertGetJobTemplateRequest#Name
   */
  readonly name: string;

}

/**
 * @schema MediaConvertGetJobTemplateResponse
 */
export interface MediaConvertGetJobTemplateResponse {
  /**
   * @schema MediaConvertGetJobTemplateResponse#JobTemplate
   */
  readonly jobTemplate?: MediaConvertJobTemplate;

}

/**
 * @schema MediaConvertGetPresetRequest
 */
export interface MediaConvertGetPresetRequest {
  /**
   * @schema MediaConvertGetPresetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema MediaConvertGetPresetResponse
 */
export interface MediaConvertGetPresetResponse {
  /**
   * @schema MediaConvertGetPresetResponse#Preset
   */
  readonly preset?: MediaConvertPreset;

}

/**
 * @schema MediaConvertGetQueueRequest
 */
export interface MediaConvertGetQueueRequest {
  /**
   * @schema MediaConvertGetQueueRequest#Name
   */
  readonly name: string;

}

/**
 * @schema MediaConvertGetQueueResponse
 */
export interface MediaConvertGetQueueResponse {
  /**
   * @schema MediaConvertGetQueueResponse#Queue
   */
  readonly queue?: MediaConvertQueue;

}

/**
 * @schema MediaConvertListJobTemplatesRequest
 */
export interface MediaConvertListJobTemplatesRequest {
  /**
   * @schema MediaConvertListJobTemplatesRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertListJobTemplatesRequest#ListBy
   */
  readonly listBy?: string;

  /**
   * @schema MediaConvertListJobTemplatesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConvertListJobTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListJobTemplatesRequest#Order
   */
  readonly order?: string;

}

/**
 * @schema MediaConvertListJobTemplatesResponse
 */
export interface MediaConvertListJobTemplatesResponse {
  /**
   * @schema MediaConvertListJobTemplatesResponse#JobTemplates
   */
  readonly jobTemplates?: MediaConvertJobTemplate[];

  /**
   * @schema MediaConvertListJobTemplatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaConvertListJobsRequest
 */
export interface MediaConvertListJobsRequest {
  /**
   * @schema MediaConvertListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConvertListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListJobsRequest#Order
   */
  readonly order?: string;

  /**
   * @schema MediaConvertListJobsRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertListJobsRequest#Status
   */
  readonly status?: string;

}

/**
 * @schema MediaConvertListJobsResponse
 */
export interface MediaConvertListJobsResponse {
  /**
   * @schema MediaConvertListJobsResponse#Jobs
   */
  readonly jobs?: MediaConvertJob[];

  /**
   * @schema MediaConvertListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaConvertListPresetsRequest
 */
export interface MediaConvertListPresetsRequest {
  /**
   * @schema MediaConvertListPresetsRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertListPresetsRequest#ListBy
   */
  readonly listBy?: string;

  /**
   * @schema MediaConvertListPresetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConvertListPresetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListPresetsRequest#Order
   */
  readonly order?: string;

}

/**
 * @schema MediaConvertListPresetsResponse
 */
export interface MediaConvertListPresetsResponse {
  /**
   * @schema MediaConvertListPresetsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListPresetsResponse#Presets
   */
  readonly presets?: MediaConvertPreset[];

}

/**
 * @schema MediaConvertListQueuesRequest
 */
export interface MediaConvertListQueuesRequest {
  /**
   * @schema MediaConvertListQueuesRequest#ListBy
   */
  readonly listBy?: string;

  /**
   * @schema MediaConvertListQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConvertListQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListQueuesRequest#Order
   */
  readonly order?: string;

}

/**
 * @schema MediaConvertListQueuesResponse
 */
export interface MediaConvertListQueuesResponse {
  /**
   * @schema MediaConvertListQueuesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListQueuesResponse#Queues
   */
  readonly queues?: MediaConvertQueue[];

}

/**
 * @schema MediaConvertListTagsForResourceRequest
 */
export interface MediaConvertListTagsForResourceRequest {
  /**
   * @schema MediaConvertListTagsForResourceRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema MediaConvertListTagsForResourceResponse
 */
export interface MediaConvertListTagsForResourceResponse {
  /**
   * @schema MediaConvertListTagsForResourceResponse#ResourceTags
   */
  readonly resourceTags?: MediaConvertResourceTags;

}

/**
 * @schema MediaConvertTagResourceRequest
 */
export interface MediaConvertTagResourceRequest {
  /**
   * @schema MediaConvertTagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema MediaConvertTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema MediaConvertTagResourceResponse
 */
export interface MediaConvertTagResourceResponse {
}

/**
 * @schema MediaConvertUntagResourceRequest
 */
export interface MediaConvertUntagResourceRequest {
  /**
   * @schema MediaConvertUntagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema MediaConvertUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * @schema MediaConvertUntagResourceResponse
 */
export interface MediaConvertUntagResourceResponse {
}

/**
 * @schema MediaConvertUpdateJobTemplateRequest
 */
export interface MediaConvertUpdateJobTemplateRequest {
  /**
   * @schema MediaConvertUpdateJobTemplateRequest#AccelerationSettings
   */
  readonly accelerationSettings?: MediaConvertAccelerationSettings;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#HopDestinations
   */
  readonly hopDestinations?: MediaConvertHopDestination[];

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Name
   */
  readonly name: string;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Settings
   */
  readonly settings?: MediaConvertJobTemplateSettings;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

}

/**
 * @schema MediaConvertUpdateJobTemplateResponse
 */
export interface MediaConvertUpdateJobTemplateResponse {
  /**
   * @schema MediaConvertUpdateJobTemplateResponse#JobTemplate
   */
  readonly jobTemplate?: MediaConvertJobTemplate;

}

/**
 * @schema MediaConvertUpdatePresetRequest
 */
export interface MediaConvertUpdatePresetRequest {
  /**
   * @schema MediaConvertUpdatePresetRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertUpdatePresetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertUpdatePresetRequest#Name
   */
  readonly name: string;

  /**
   * @schema MediaConvertUpdatePresetRequest#Settings
   */
  readonly settings?: MediaConvertPresetSettings;

}

/**
 * @schema MediaConvertUpdatePresetResponse
 */
export interface MediaConvertUpdatePresetResponse {
  /**
   * @schema MediaConvertUpdatePresetResponse#Preset
   */
  readonly preset?: MediaConvertPreset;

}

/**
 * @schema MediaConvertUpdateQueueRequest
 */
export interface MediaConvertUpdateQueueRequest {
  /**
   * @schema MediaConvertUpdateQueueRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertUpdateQueueRequest#Name
   */
  readonly name: string;

  /**
   * @schema MediaConvertUpdateQueueRequest#ReservationPlanSettings
   */
  readonly reservationPlanSettings?: MediaConvertReservationPlanSettings;

  /**
   * @schema MediaConvertUpdateQueueRequest#Status
   */
  readonly status?: string;

}

/**
 * @schema MediaConvertUpdateQueueResponse
 */
export interface MediaConvertUpdateQueueResponse {
  /**
   * @schema MediaConvertUpdateQueueResponse#Queue
   */
  readonly queue?: MediaConvertQueue;

}

/**
 * @schema MediaConvertAccelerationSettings
 */
export interface MediaConvertAccelerationSettings {
  /**
   * @schema MediaConvertAccelerationSettings#Mode
   */
  readonly mode: string;

}

/**
 * @schema MediaConvertHopDestination
 */
export interface MediaConvertHopDestination {
  /**
   * @schema MediaConvertHopDestination#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertHopDestination#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertHopDestination#WaitMinutes
   */
  readonly waitMinutes?: number;

}

/**
 * @schema MediaConvertJobSettings
 */
export interface MediaConvertJobSettings {
  /**
   * @schema MediaConvertJobSettings#AdAvailOffset
   */
  readonly adAvailOffset?: number;

  /**
   * @schema MediaConvertJobSettings#AvailBlanking
   */
  readonly availBlanking?: MediaConvertAvailBlanking;

  /**
   * @schema MediaConvertJobSettings#Esam
   */
  readonly esam?: MediaConvertEsamSettings;

  /**
   * @schema MediaConvertJobSettings#Inputs
   */
  readonly inputs?: MediaConvertInput[];

  /**
   * @schema MediaConvertJobSettings#MotionImageInserter
   */
  readonly motionImageInserter?: MediaConvertMotionImageInserter;

  /**
   * @schema MediaConvertJobSettings#NielsenConfiguration
   */
  readonly nielsenConfiguration?: MediaConvertNielsenConfiguration;

  /**
   * @schema MediaConvertJobSettings#NielsenNonLinearWatermark
   */
  readonly nielsenNonLinearWatermark?: MediaConvertNielsenNonLinearWatermarkSettings;

  /**
   * @schema MediaConvertJobSettings#OutputGroups
   */
  readonly outputGroups?: MediaConvertOutputGroup[];

  /**
   * @schema MediaConvertJobSettings#TimecodeConfig
   */
  readonly timecodeConfig?: MediaConvertTimecodeConfig;

  /**
   * @schema MediaConvertJobSettings#TimedMetadataInsertion
   */
  readonly timedMetadataInsertion?: MediaConvertTimedMetadataInsertion;

}

/**
 * @schema MediaConvertJob
 */
export interface MediaConvertJob {
  /**
   * @schema MediaConvertJob#AccelerationSettings
   */
  readonly accelerationSettings?: MediaConvertAccelerationSettings;

  /**
   * @schema MediaConvertJob#AccelerationStatus
   */
  readonly accelerationStatus?: string;

  /**
   * @schema MediaConvertJob#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertJob#BillingTagsSource
   */
  readonly billingTagsSource?: string;

  /**
   * @schema MediaConvertJob#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaConvertJob#CurrentPhase
   */
  readonly currentPhase?: string;

  /**
   * @schema MediaConvertJob#ErrorCode
   */
  readonly errorCode?: number;

  /**
   * @schema MediaConvertJob#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema MediaConvertJob#HopDestinations
   */
  readonly hopDestinations?: MediaConvertHopDestination[];

  /**
   * @schema MediaConvertJob#Id
   */
  readonly id?: string;

  /**
   * @schema MediaConvertJob#JobPercentComplete
   */
  readonly jobPercentComplete?: number;

  /**
   * @schema MediaConvertJob#JobTemplate
   */
  readonly jobTemplate?: string;

  /**
   * @schema MediaConvertJob#Messages
   */
  readonly messages?: MediaConvertJobMessages;

  /**
   * @schema MediaConvertJob#OutputGroupDetails
   */
  readonly outputGroupDetails?: MediaConvertOutputGroupDetail[];

  /**
   * @schema MediaConvertJob#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertJob#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertJob#QueueTransitions
   */
  readonly queueTransitions?: MediaConvertQueueTransition[];

  /**
   * @schema MediaConvertJob#RetryCount
   */
  readonly retryCount?: number;

  /**
   * @schema MediaConvertJob#Role
   */
  readonly role: string;

  /**
   * @schema MediaConvertJob#Settings
   */
  readonly settings: MediaConvertJobSettings;

  /**
   * @schema MediaConvertJob#SimulateReservedQueue
   */
  readonly simulateReservedQueue?: string;

  /**
   * @schema MediaConvertJob#Status
   */
  readonly status?: string;

  /**
   * @schema MediaConvertJob#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema MediaConvertJob#Timing
   */
  readonly timing?: MediaConvertTiming;

  /**
   * @schema MediaConvertJob#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

}

/**
 * @schema MediaConvertJobTemplateSettings
 */
export interface MediaConvertJobTemplateSettings {
  /**
   * @schema MediaConvertJobTemplateSettings#AdAvailOffset
   */
  readonly adAvailOffset?: number;

  /**
   * @schema MediaConvertJobTemplateSettings#AvailBlanking
   */
  readonly availBlanking?: MediaConvertAvailBlanking;

  /**
   * @schema MediaConvertJobTemplateSettings#Esam
   */
  readonly esam?: MediaConvertEsamSettings;

  /**
   * @schema MediaConvertJobTemplateSettings#Inputs
   */
  readonly inputs?: MediaConvertInputTemplate[];

  /**
   * @schema MediaConvertJobTemplateSettings#MotionImageInserter
   */
  readonly motionImageInserter?: MediaConvertMotionImageInserter;

  /**
   * @schema MediaConvertJobTemplateSettings#NielsenConfiguration
   */
  readonly nielsenConfiguration?: MediaConvertNielsenConfiguration;

  /**
   * @schema MediaConvertJobTemplateSettings#NielsenNonLinearWatermark
   */
  readonly nielsenNonLinearWatermark?: MediaConvertNielsenNonLinearWatermarkSettings;

  /**
   * @schema MediaConvertJobTemplateSettings#OutputGroups
   */
  readonly outputGroups?: MediaConvertOutputGroup[];

  /**
   * @schema MediaConvertJobTemplateSettings#TimecodeConfig
   */
  readonly timecodeConfig?: MediaConvertTimecodeConfig;

  /**
   * @schema MediaConvertJobTemplateSettings#TimedMetadataInsertion
   */
  readonly timedMetadataInsertion?: MediaConvertTimedMetadataInsertion;

}

/**
 * @schema MediaConvertJobTemplate
 */
export interface MediaConvertJobTemplate {
  /**
   * @schema MediaConvertJobTemplate#AccelerationSettings
   */
  readonly accelerationSettings?: MediaConvertAccelerationSettings;

  /**
   * @schema MediaConvertJobTemplate#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertJobTemplate#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertJobTemplate#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaConvertJobTemplate#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertJobTemplate#HopDestinations
   */
  readonly hopDestinations?: MediaConvertHopDestination[];

  /**
   * @schema MediaConvertJobTemplate#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema MediaConvertJobTemplate#Name
   */
  readonly name: string;

  /**
   * @schema MediaConvertJobTemplate#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertJobTemplate#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertJobTemplate#Settings
   */
  readonly settings: MediaConvertJobTemplateSettings;

  /**
   * @schema MediaConvertJobTemplate#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema MediaConvertJobTemplate#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaConvertPresetSettings
 */
export interface MediaConvertPresetSettings {
  /**
   * @schema MediaConvertPresetSettings#AudioDescriptions
   */
  readonly audioDescriptions?: MediaConvertAudioDescription[];

  /**
   * @schema MediaConvertPresetSettings#CaptionDescriptions
   */
  readonly captionDescriptions?: MediaConvertCaptionDescriptionPreset[];

  /**
   * @schema MediaConvertPresetSettings#ContainerSettings
   */
  readonly containerSettings?: MediaConvertContainerSettings;

  /**
   * @schema MediaConvertPresetSettings#VideoDescription
   */
  readonly videoDescription?: MediaConvertVideoDescription;

}

/**
 * @schema MediaConvertPreset
 */
export interface MediaConvertPreset {
  /**
   * @schema MediaConvertPreset#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertPreset#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertPreset#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaConvertPreset#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertPreset#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema MediaConvertPreset#Name
   */
  readonly name: string;

  /**
   * @schema MediaConvertPreset#Settings
   */
  readonly settings: MediaConvertPresetSettings;

  /**
   * @schema MediaConvertPreset#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaConvertReservationPlanSettings
 */
export interface MediaConvertReservationPlanSettings {
  /**
   * @schema MediaConvertReservationPlanSettings#Commitment
   */
  readonly commitment: string;

  /**
   * @schema MediaConvertReservationPlanSettings#RenewalType
   */
  readonly renewalType: string;

  /**
   * @schema MediaConvertReservationPlanSettings#ReservedSlots
   */
  readonly reservedSlots: number;

}

/**
 * @schema MediaConvertQueue
 */
export interface MediaConvertQueue {
  /**
   * @schema MediaConvertQueue#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertQueue#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaConvertQueue#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertQueue#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema MediaConvertQueue#Name
   */
  readonly name: string;

  /**
   * @schema MediaConvertQueue#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema MediaConvertQueue#ProgressingJobsCount
   */
  readonly progressingJobsCount?: number;

  /**
   * @schema MediaConvertQueue#ReservationPlan
   */
  readonly reservationPlan?: MediaConvertReservationPlan;

  /**
   * @schema MediaConvertQueue#Status
   */
  readonly status?: string;

  /**
   * @schema MediaConvertQueue#SubmittedJobsCount
   */
  readonly submittedJobsCount?: number;

  /**
   * @schema MediaConvertQueue#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaConvertEndpoint
 */
export interface MediaConvertEndpoint {
  /**
   * @schema MediaConvertEndpoint#Url
   */
  readonly url?: string;

}

/**
 * @schema MediaConvertResourceTags
 */
export interface MediaConvertResourceTags {
  /**
   * @schema MediaConvertResourceTags#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertResourceTags#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaConvertAvailBlanking
 */
export interface MediaConvertAvailBlanking {
  /**
   * @schema MediaConvertAvailBlanking#AvailBlankingImage
   */
  readonly availBlankingImage?: string;

}

/**
 * @schema MediaConvertEsamSettings
 */
export interface MediaConvertEsamSettings {
  /**
   * @schema MediaConvertEsamSettings#ManifestConfirmConditionNotification
   */
  readonly manifestConfirmConditionNotification?: MediaConvertEsamManifestConfirmConditionNotification;

  /**
   * @schema MediaConvertEsamSettings#ResponseSignalPreroll
   */
  readonly responseSignalPreroll?: number;

  /**
   * @schema MediaConvertEsamSettings#SignalProcessingNotification
   */
  readonly signalProcessingNotification?: MediaConvertEsamSignalProcessingNotification;

}

/**
 * @schema MediaConvertInput
 */
export interface MediaConvertInput {
  /**
   * @schema MediaConvertInput#AudioSelectorGroups
   */
  readonly audioSelectorGroups?: { [key: string]: MediaConvertAudioSelectorGroup };

  /**
   * @schema MediaConvertInput#AudioSelectors
   */
  readonly audioSelectors?: { [key: string]: MediaConvertAudioSelector };

  /**
   * @schema MediaConvertInput#CaptionSelectors
   */
  readonly captionSelectors?: { [key: string]: MediaConvertCaptionSelector };

  /**
   * @schema MediaConvertInput#Crop
   */
  readonly crop?: MediaConvertRectangle;

  /**
   * @schema MediaConvertInput#DeblockFilter
   */
  readonly deblockFilter?: string;

  /**
   * @schema MediaConvertInput#DecryptionSettings
   */
  readonly decryptionSettings?: MediaConvertInputDecryptionSettings;

  /**
   * @schema MediaConvertInput#DenoiseFilter
   */
  readonly denoiseFilter?: string;

  /**
   * @schema MediaConvertInput#FileInput
   */
  readonly fileInput?: string;

  /**
   * @schema MediaConvertInput#FilterEnable
   */
  readonly filterEnable?: string;

  /**
   * @schema MediaConvertInput#FilterStrength
   */
  readonly filterStrength?: number;

  /**
   * @schema MediaConvertInput#ImageInserter
   */
  readonly imageInserter?: MediaConvertImageInserter;

  /**
   * @schema MediaConvertInput#InputClippings
   */
  readonly inputClippings?: MediaConvertInputClipping[];

  /**
   * @schema MediaConvertInput#InputScanType
   */
  readonly inputScanType?: string;

  /**
   * @schema MediaConvertInput#Position
   */
  readonly position?: MediaConvertRectangle;

  /**
   * @schema MediaConvertInput#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema MediaConvertInput#PsiControl
   */
  readonly psiControl?: string;

  /**
   * @schema MediaConvertInput#SupplementalImps
   */
  readonly supplementalImps?: string[];

  /**
   * @schema MediaConvertInput#TimecodeSource
   */
  readonly timecodeSource?: string;

  /**
   * @schema MediaConvertInput#TimecodeStart
   */
  readonly timecodeStart?: string;

  /**
   * @schema MediaConvertInput#VideoSelector
   */
  readonly videoSelector?: MediaConvertVideoSelector;

}

/**
 * @schema MediaConvertMotionImageInserter
 */
export interface MediaConvertMotionImageInserter {
  /**
   * @schema MediaConvertMotionImageInserter#Framerate
   */
  readonly framerate?: MediaConvertMotionImageInsertionFramerate;

  /**
   * @schema MediaConvertMotionImageInserter#Input
   */
  readonly input?: string;

  /**
   * @schema MediaConvertMotionImageInserter#InsertionMode
   */
  readonly insertionMode?: string;

  /**
   * @schema MediaConvertMotionImageInserter#Offset
   */
  readonly offset?: MediaConvertMotionImageInsertionOffset;

  /**
   * @schema MediaConvertMotionImageInserter#Playback
   */
  readonly playback?: string;

  /**
   * @schema MediaConvertMotionImageInserter#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema MediaConvertNielsenConfiguration
 */
export interface MediaConvertNielsenConfiguration {
  /**
   * @schema MediaConvertNielsenConfiguration#BreakoutCode
   */
  readonly breakoutCode?: number;

  /**
   * @schema MediaConvertNielsenConfiguration#DistributorId
   */
  readonly distributorId?: string;

}

/**
 * @schema MediaConvertNielsenNonLinearWatermarkSettings
 */
export interface MediaConvertNielsenNonLinearWatermarkSettings {
  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#ActiveWatermarkProcess
   */
  readonly activeWatermarkProcess?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#AdiFilename
   */
  readonly adiFilename?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#AssetId
   */
  readonly assetId?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#AssetName
   */
  readonly assetName?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#CbetSourceId
   */
  readonly cbetSourceId?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#EpisodeId
   */
  readonly episodeId?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#MetadataDestination
   */
  readonly metadataDestination?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#SourceId
   */
  readonly sourceId?: number;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#SourceWatermarkStatus
   */
  readonly sourceWatermarkStatus?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#TicServerUrl
   */
  readonly ticServerUrl?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#UniqueTicPerAudioTrack
   */
  readonly uniqueTicPerAudioTrack?: string;

}

/**
 * @schema MediaConvertOutputGroup
 */
export interface MediaConvertOutputGroup {
  /**
   * @schema MediaConvertOutputGroup#AutomatedEncodingSettings
   */
  readonly automatedEncodingSettings?: MediaConvertAutomatedEncodingSettings;

  /**
   * @schema MediaConvertOutputGroup#CustomName
   */
  readonly customName?: string;

  /**
   * @schema MediaConvertOutputGroup#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertOutputGroup#OutputGroupSettings
   */
  readonly outputGroupSettings?: MediaConvertOutputGroupSettings;

  /**
   * @schema MediaConvertOutputGroup#Outputs
   */
  readonly outputs?: MediaConvertOutput[];

}

/**
 * @schema MediaConvertTimecodeConfig
 */
export interface MediaConvertTimecodeConfig {
  /**
   * @schema MediaConvertTimecodeConfig#Anchor
   */
  readonly anchor?: string;

  /**
   * @schema MediaConvertTimecodeConfig#Source
   */
  readonly source?: string;

  /**
   * @schema MediaConvertTimecodeConfig#Start
   */
  readonly start?: string;

  /**
   * @schema MediaConvertTimecodeConfig#TimestampOffset
   */
  readonly timestampOffset?: string;

}

/**
 * @schema MediaConvertTimedMetadataInsertion
 */
export interface MediaConvertTimedMetadataInsertion {
  /**
   * @schema MediaConvertTimedMetadataInsertion#Id3Insertions
   */
  readonly id3Insertions?: MediaConvertId3Insertion[];

}

/**
 * @schema MediaConvertJobMessages
 */
export interface MediaConvertJobMessages {
  /**
   * @schema MediaConvertJobMessages#Info
   */
  readonly info?: string[];

  /**
   * @schema MediaConvertJobMessages#Warning
   */
  readonly warning?: string[];

}

/**
 * @schema MediaConvertOutputGroupDetail
 */
export interface MediaConvertOutputGroupDetail {
  /**
   * @schema MediaConvertOutputGroupDetail#OutputDetails
   */
  readonly outputDetails?: MediaConvertOutputDetail[];

}

/**
 * @schema MediaConvertQueueTransition
 */
export interface MediaConvertQueueTransition {
  /**
   * @schema MediaConvertQueueTransition#DestinationQueue
   */
  readonly destinationQueue?: string;

  /**
   * @schema MediaConvertQueueTransition#SourceQueue
   */
  readonly sourceQueue?: string;

  /**
   * @schema MediaConvertQueueTransition#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema MediaConvertTiming
 */
export interface MediaConvertTiming {
  /**
   * @schema MediaConvertTiming#FinishTime
   */
  readonly finishTime?: string;

  /**
   * @schema MediaConvertTiming#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MediaConvertTiming#SubmitTime
   */
  readonly submitTime?: string;

}

/**
 * @schema MediaConvertInputTemplate
 */
export interface MediaConvertInputTemplate {
  /**
   * @schema MediaConvertInputTemplate#AudioSelectorGroups
   */
  readonly audioSelectorGroups?: { [key: string]: MediaConvertAudioSelectorGroup };

  /**
   * @schema MediaConvertInputTemplate#AudioSelectors
   */
  readonly audioSelectors?: { [key: string]: MediaConvertAudioSelector };

  /**
   * @schema MediaConvertInputTemplate#CaptionSelectors
   */
  readonly captionSelectors?: { [key: string]: MediaConvertCaptionSelector };

  /**
   * @schema MediaConvertInputTemplate#Crop
   */
  readonly crop?: MediaConvertRectangle;

  /**
   * @schema MediaConvertInputTemplate#DeblockFilter
   */
  readonly deblockFilter?: string;

  /**
   * @schema MediaConvertInputTemplate#DenoiseFilter
   */
  readonly denoiseFilter?: string;

  /**
   * @schema MediaConvertInputTemplate#FilterEnable
   */
  readonly filterEnable?: string;

  /**
   * @schema MediaConvertInputTemplate#FilterStrength
   */
  readonly filterStrength?: number;

  /**
   * @schema MediaConvertInputTemplate#ImageInserter
   */
  readonly imageInserter?: MediaConvertImageInserter;

  /**
   * @schema MediaConvertInputTemplate#InputClippings
   */
  readonly inputClippings?: MediaConvertInputClipping[];

  /**
   * @schema MediaConvertInputTemplate#InputScanType
   */
  readonly inputScanType?: string;

  /**
   * @schema MediaConvertInputTemplate#Position
   */
  readonly position?: MediaConvertRectangle;

  /**
   * @schema MediaConvertInputTemplate#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema MediaConvertInputTemplate#PsiControl
   */
  readonly psiControl?: string;

  /**
   * @schema MediaConvertInputTemplate#TimecodeSource
   */
  readonly timecodeSource?: string;

  /**
   * @schema MediaConvertInputTemplate#TimecodeStart
   */
  readonly timecodeStart?: string;

  /**
   * @schema MediaConvertInputTemplate#VideoSelector
   */
  readonly videoSelector?: MediaConvertVideoSelector;

}

/**
 * @schema MediaConvertAudioDescription
 */
export interface MediaConvertAudioDescription {
  /**
   * @schema MediaConvertAudioDescription#AudioChannelTaggingSettings
   */
  readonly audioChannelTaggingSettings?: MediaConvertAudioChannelTaggingSettings;

  /**
   * @schema MediaConvertAudioDescription#AudioNormalizationSettings
   */
  readonly audioNormalizationSettings?: MediaConvertAudioNormalizationSettings;

  /**
   * @schema MediaConvertAudioDescription#AudioSourceName
   */
  readonly audioSourceName?: string;

  /**
   * @schema MediaConvertAudioDescription#AudioType
   */
  readonly audioType?: number;

  /**
   * @schema MediaConvertAudioDescription#AudioTypeControl
   */
  readonly audioTypeControl?: string;

  /**
   * @schema MediaConvertAudioDescription#CodecSettings
   */
  readonly codecSettings?: MediaConvertAudioCodecSettings;

  /**
   * @schema MediaConvertAudioDescription#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertAudioDescription#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertAudioDescription#LanguageCodeControl
   */
  readonly languageCodeControl?: string;

  /**
   * @schema MediaConvertAudioDescription#RemixSettings
   */
  readonly remixSettings?: MediaConvertRemixSettings;

  /**
   * @schema MediaConvertAudioDescription#StreamName
   */
  readonly streamName?: string;

}

/**
 * @schema MediaConvertCaptionDescriptionPreset
 */
export interface MediaConvertCaptionDescriptionPreset {
  /**
   * @schema MediaConvertCaptionDescriptionPreset#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertCaptionDescriptionPreset#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertCaptionDestinationSettings;

  /**
   * @schema MediaConvertCaptionDescriptionPreset#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertCaptionDescriptionPreset#LanguageDescription
   */
  readonly languageDescription?: string;

}

/**
 * @schema MediaConvertContainerSettings
 */
export interface MediaConvertContainerSettings {
  /**
   * @schema MediaConvertContainerSettings#CmfcSettings
   */
  readonly cmfcSettings?: MediaConvertCmfcSettings;

  /**
   * @schema MediaConvertContainerSettings#Container
   */
  readonly container?: string;

  /**
   * @schema MediaConvertContainerSettings#F4vSettings
   */
  readonly f4VSettings?: MediaConvertF4vSettings;

  /**
   * @schema MediaConvertContainerSettings#M2tsSettings
   */
  readonly m2TsSettings?: MediaConvertM2tsSettings;

  /**
   * @schema MediaConvertContainerSettings#M3u8Settings
   */
  readonly m3U8Settings?: MediaConvertM3u8Settings;

  /**
   * @schema MediaConvertContainerSettings#MovSettings
   */
  readonly movSettings?: MediaConvertMovSettings;

  /**
   * @schema MediaConvertContainerSettings#Mp4Settings
   */
  readonly mp4Settings?: MediaConvertMp4Settings;

  /**
   * @schema MediaConvertContainerSettings#MpdSettings
   */
  readonly mpdSettings?: MediaConvertMpdSettings;

  /**
   * @schema MediaConvertContainerSettings#MxfSettings
   */
  readonly mxfSettings?: MediaConvertMxfSettings;

}

/**
 * @schema MediaConvertVideoDescription
 */
export interface MediaConvertVideoDescription {
  /**
   * @schema MediaConvertVideoDescription#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema MediaConvertVideoDescription#AntiAlias
   */
  readonly antiAlias?: string;

  /**
   * @schema MediaConvertVideoDescription#CodecSettings
   */
  readonly codecSettings?: MediaConvertVideoCodecSettings;

  /**
   * @schema MediaConvertVideoDescription#ColorMetadata
   */
  readonly colorMetadata?: string;

  /**
   * @schema MediaConvertVideoDescription#Crop
   */
  readonly crop?: MediaConvertRectangle;

  /**
   * @schema MediaConvertVideoDescription#DropFrameTimecode
   */
  readonly dropFrameTimecode?: string;

  /**
   * @schema MediaConvertVideoDescription#FixedAfd
   */
  readonly fixedAfd?: number;

  /**
   * @schema MediaConvertVideoDescription#Height
   */
  readonly height?: number;

  /**
   * @schema MediaConvertVideoDescription#Position
   */
  readonly position?: MediaConvertRectangle;

  /**
   * @schema MediaConvertVideoDescription#RespondToAfd
   */
  readonly respondToAfd?: string;

  /**
   * @schema MediaConvertVideoDescription#ScalingBehavior
   */
  readonly scalingBehavior?: string;

  /**
   * @schema MediaConvertVideoDescription#Sharpness
   */
  readonly sharpness?: number;

  /**
   * @schema MediaConvertVideoDescription#TimecodeInsertion
   */
  readonly timecodeInsertion?: string;

  /**
   * @schema MediaConvertVideoDescription#VideoPreprocessors
   */
  readonly videoPreprocessors?: MediaConvertVideoPreprocessor;

  /**
   * @schema MediaConvertVideoDescription#Width
   */
  readonly width?: number;

}

/**
 * @schema MediaConvertReservationPlan
 */
export interface MediaConvertReservationPlan {
  /**
   * @schema MediaConvertReservationPlan#Commitment
   */
  readonly commitment?: string;

  /**
   * @schema MediaConvertReservationPlan#ExpiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema MediaConvertReservationPlan#PurchasedAt
   */
  readonly purchasedAt?: string;

  /**
   * @schema MediaConvertReservationPlan#RenewalType
   */
  readonly renewalType?: string;

  /**
   * @schema MediaConvertReservationPlan#ReservedSlots
   */
  readonly reservedSlots?: number;

  /**
   * @schema MediaConvertReservationPlan#Status
   */
  readonly status?: string;

}

/**
 * @schema MediaConvertEsamManifestConfirmConditionNotification
 */
export interface MediaConvertEsamManifestConfirmConditionNotification {
  /**
   * @schema MediaConvertEsamManifestConfirmConditionNotification#MccXml
   */
  readonly mccXml?: string;

}

/**
 * @schema MediaConvertEsamSignalProcessingNotification
 */
export interface MediaConvertEsamSignalProcessingNotification {
  /**
   * @schema MediaConvertEsamSignalProcessingNotification#SccXml
   */
  readonly sccXml?: string;

}

/**
 * @schema MediaConvertAudioSelectorGroup
 */
export interface MediaConvertAudioSelectorGroup {
  /**
   * @schema MediaConvertAudioSelectorGroup#AudioSelectorNames
   */
  readonly audioSelectorNames?: string[];

}

/**
 * @schema MediaConvertAudioSelector
 */
export interface MediaConvertAudioSelector {
  /**
   * @schema MediaConvertAudioSelector#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertAudioSelector#DefaultSelection
   */
  readonly defaultSelection?: string;

  /**
   * @schema MediaConvertAudioSelector#ExternalAudioFileInput
   */
  readonly externalAudioFileInput?: string;

  /**
   * @schema MediaConvertAudioSelector#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertAudioSelector#Offset
   */
  readonly offset?: number;

  /**
   * @schema MediaConvertAudioSelector#Pids
   */
  readonly pids?: number[];

  /**
   * @schema MediaConvertAudioSelector#ProgramSelection
   */
  readonly programSelection?: number;

  /**
   * @schema MediaConvertAudioSelector#RemixSettings
   */
  readonly remixSettings?: MediaConvertRemixSettings;

  /**
   * @schema MediaConvertAudioSelector#SelectorType
   */
  readonly selectorType?: string;

  /**
   * @schema MediaConvertAudioSelector#Tracks
   */
  readonly tracks?: number[];

}

/**
 * @schema MediaConvertCaptionSelector
 */
export interface MediaConvertCaptionSelector {
  /**
   * @schema MediaConvertCaptionSelector#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertCaptionSelector#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertCaptionSelector#SourceSettings
   */
  readonly sourceSettings?: MediaConvertCaptionSourceSettings;

}

/**
 * @schema MediaConvertRectangle
 */
export interface MediaConvertRectangle {
  /**
   * @schema MediaConvertRectangle#Height
   */
  readonly height?: number;

  /**
   * @schema MediaConvertRectangle#Width
   */
  readonly width?: number;

  /**
   * @schema MediaConvertRectangle#X
   */
  readonly x?: number;

  /**
   * @schema MediaConvertRectangle#Y
   */
  readonly y?: number;

}

/**
 * @schema MediaConvertInputDecryptionSettings
 */
export interface MediaConvertInputDecryptionSettings {
  /**
   * @schema MediaConvertInputDecryptionSettings#DecryptionMode
   */
  readonly decryptionMode?: string;

  /**
   * @schema MediaConvertInputDecryptionSettings#EncryptedDecryptionKey
   */
  readonly encryptedDecryptionKey?: string;

  /**
   * @schema MediaConvertInputDecryptionSettings#InitializationVector
   */
  readonly initializationVector?: string;

  /**
   * @schema MediaConvertInputDecryptionSettings#KmsKeyRegion
   */
  readonly kmsKeyRegion?: string;

}

/**
 * @schema MediaConvertImageInserter
 */
export interface MediaConvertImageInserter {
  /**
   * @schema MediaConvertImageInserter#InsertableImages
   */
  readonly insertableImages?: MediaConvertInsertableImage[];

}

/**
 * @schema MediaConvertInputClipping
 */
export interface MediaConvertInputClipping {
  /**
   * @schema MediaConvertInputClipping#EndTimecode
   */
  readonly endTimecode?: string;

  /**
   * @schema MediaConvertInputClipping#StartTimecode
   */
  readonly startTimecode?: string;

}

/**
 * @schema MediaConvertVideoSelector
 */
export interface MediaConvertVideoSelector {
  /**
   * @schema MediaConvertVideoSelector#AlphaBehavior
   */
  readonly alphaBehavior?: string;

  /**
   * @schema MediaConvertVideoSelector#ColorSpace
   */
  readonly colorSpace?: string;

  /**
   * @schema MediaConvertVideoSelector#ColorSpaceUsage
   */
  readonly colorSpaceUsage?: string;

  /**
   * @schema MediaConvertVideoSelector#Hdr10Metadata
   */
  readonly hdr10Metadata?: MediaConvertHdr10Metadata;

  /**
   * @schema MediaConvertVideoSelector#Pid
   */
  readonly pid?: number;

  /**
   * @schema MediaConvertVideoSelector#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema MediaConvertVideoSelector#Rotate
   */
  readonly rotate?: string;

}

/**
 * @schema MediaConvertMotionImageInsertionFramerate
 */
export interface MediaConvertMotionImageInsertionFramerate {
  /**
   * @schema MediaConvertMotionImageInsertionFramerate#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertMotionImageInsertionFramerate#FramerateNumerator
   */
  readonly framerateNumerator?: number;

}

/**
 * @schema MediaConvertMotionImageInsertionOffset
 */
export interface MediaConvertMotionImageInsertionOffset {
  /**
   * @schema MediaConvertMotionImageInsertionOffset#ImageX
   */
  readonly imageX?: number;

  /**
   * @schema MediaConvertMotionImageInsertionOffset#ImageY
   */
  readonly imageY?: number;

}

/**
 * @schema MediaConvertAutomatedEncodingSettings
 */
export interface MediaConvertAutomatedEncodingSettings {
  /**
   * @schema MediaConvertAutomatedEncodingSettings#AbrSettings
   */
  readonly abrSettings?: MediaConvertAutomatedAbrSettings;

}

/**
 * @schema MediaConvertOutputGroupSettings
 */
export interface MediaConvertOutputGroupSettings {
  /**
   * @schema MediaConvertOutputGroupSettings#CmafGroupSettings
   */
  readonly cmafGroupSettings?: MediaConvertCmafGroupSettings;

  /**
   * @schema MediaConvertOutputGroupSettings#DashIsoGroupSettings
   */
  readonly dashIsoGroupSettings?: MediaConvertDashIsoGroupSettings;

  /**
   * @schema MediaConvertOutputGroupSettings#FileGroupSettings
   */
  readonly fileGroupSettings?: MediaConvertFileGroupSettings;

  /**
   * @schema MediaConvertOutputGroupSettings#HlsGroupSettings
   */
  readonly hlsGroupSettings?: MediaConvertHlsGroupSettings;

  /**
   * @schema MediaConvertOutputGroupSettings#MsSmoothGroupSettings
   */
  readonly msSmoothGroupSettings?: MediaConvertMsSmoothGroupSettings;

  /**
   * @schema MediaConvertOutputGroupSettings#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaConvertOutput
 */
export interface MediaConvertOutput {
  /**
   * @schema MediaConvertOutput#AudioDescriptions
   */
  readonly audioDescriptions?: MediaConvertAudioDescription[];

  /**
   * @schema MediaConvertOutput#CaptionDescriptions
   */
  readonly captionDescriptions?: MediaConvertCaptionDescription[];

  /**
   * @schema MediaConvertOutput#ContainerSettings
   */
  readonly containerSettings?: MediaConvertContainerSettings;

  /**
   * @schema MediaConvertOutput#Extension
   */
  readonly extension?: string;

  /**
   * @schema MediaConvertOutput#NameModifier
   */
  readonly nameModifier?: string;

  /**
   * @schema MediaConvertOutput#OutputSettings
   */
  readonly outputSettings?: MediaConvertOutputSettings;

  /**
   * @schema MediaConvertOutput#Preset
   */
  readonly preset?: string;

  /**
   * @schema MediaConvertOutput#VideoDescription
   */
  readonly videoDescription?: MediaConvertVideoDescription;

}

/**
 * @schema MediaConvertId3Insertion
 */
export interface MediaConvertId3Insertion {
  /**
   * @schema MediaConvertId3Insertion#Id3
   */
  readonly id3?: string;

  /**
   * @schema MediaConvertId3Insertion#Timecode
   */
  readonly timecode?: string;

}

/**
 * @schema MediaConvertOutputDetail
 */
export interface MediaConvertOutputDetail {
  /**
   * @schema MediaConvertOutputDetail#DurationInMs
   */
  readonly durationInMs?: number;

  /**
   * @schema MediaConvertOutputDetail#VideoDetails
   */
  readonly videoDetails?: MediaConvertVideoDetail;

}

/**
 * @schema MediaConvertAudioChannelTaggingSettings
 */
export interface MediaConvertAudioChannelTaggingSettings {
  /**
   * @schema MediaConvertAudioChannelTaggingSettings#ChannelTag
   */
  readonly channelTag?: string;

}

/**
 * @schema MediaConvertAudioNormalizationSettings
 */
export interface MediaConvertAudioNormalizationSettings {
  /**
   * @schema MediaConvertAudioNormalizationSettings#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MediaConvertAudioNormalizationSettings#AlgorithmControl
   */
  readonly algorithmControl?: string;

  /**
   * @schema MediaConvertAudioNormalizationSettings#CorrectionGateLevel
   */
  readonly correctionGateLevel?: number;

  /**
   * @schema MediaConvertAudioNormalizationSettings#LoudnessLogging
   */
  readonly loudnessLogging?: string;

  /**
   * @schema MediaConvertAudioNormalizationSettings#PeakCalculation
   */
  readonly peakCalculation?: string;

  /**
   * @schema MediaConvertAudioNormalizationSettings#TargetLkfs
   */
  readonly targetLkfs?: number;

}

/**
 * @schema MediaConvertAudioCodecSettings
 */
export interface MediaConvertAudioCodecSettings {
  /**
   * @schema MediaConvertAudioCodecSettings#AacSettings
   */
  readonly aacSettings?: MediaConvertAacSettings;

  /**
   * @schema MediaConvertAudioCodecSettings#Ac3Settings
   */
  readonly ac3Settings?: MediaConvertAc3Settings;

  /**
   * @schema MediaConvertAudioCodecSettings#AiffSettings
   */
  readonly aiffSettings?: MediaConvertAiffSettings;

  /**
   * @schema MediaConvertAudioCodecSettings#Codec
   */
  readonly codec?: string;

  /**
   * @schema MediaConvertAudioCodecSettings#Eac3AtmosSettings
   */
  readonly eac3AtmosSettings?: MediaConvertEac3AtmosSettings;

  /**
   * @schema MediaConvertAudioCodecSettings#Eac3Settings
   */
  readonly eac3Settings?: MediaConvertEac3Settings;

  /**
   * @schema MediaConvertAudioCodecSettings#Mp2Settings
   */
  readonly mp2Settings?: MediaConvertMp2Settings;

  /**
   * @schema MediaConvertAudioCodecSettings#Mp3Settings
   */
  readonly mp3Settings?: MediaConvertMp3Settings;

  /**
   * @schema MediaConvertAudioCodecSettings#OpusSettings
   */
  readonly opusSettings?: MediaConvertOpusSettings;

  /**
   * @schema MediaConvertAudioCodecSettings#VorbisSettings
   */
  readonly vorbisSettings?: MediaConvertVorbisSettings;

  /**
   * @schema MediaConvertAudioCodecSettings#WavSettings
   */
  readonly wavSettings?: MediaConvertWavSettings;

}

/**
 * @schema MediaConvertRemixSettings
 */
export interface MediaConvertRemixSettings {
  /**
   * @schema MediaConvertRemixSettings#ChannelMapping
   */
  readonly channelMapping?: MediaConvertChannelMapping;

  /**
   * @schema MediaConvertRemixSettings#ChannelsIn
   */
  readonly channelsIn?: number;

  /**
   * @schema MediaConvertRemixSettings#ChannelsOut
   */
  readonly channelsOut?: number;

}

/**
 * @schema MediaConvertCaptionDestinationSettings
 */
export interface MediaConvertCaptionDestinationSettings {
  /**
   * @schema MediaConvertCaptionDestinationSettings#BurninDestinationSettings
   */
  readonly burninDestinationSettings?: MediaConvertBurninDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#DestinationType
   */
  readonly destinationType?: string;

  /**
   * @schema MediaConvertCaptionDestinationSettings#DvbSubDestinationSettings
   */
  readonly dvbSubDestinationSettings?: MediaConvertDvbSubDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#EmbeddedDestinationSettings
   */
  readonly embeddedDestinationSettings?: MediaConvertEmbeddedDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#ImscDestinationSettings
   */
  readonly imscDestinationSettings?: MediaConvertImscDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#SccDestinationSettings
   */
  readonly sccDestinationSettings?: MediaConvertSccDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#TeletextDestinationSettings
   */
  readonly teletextDestinationSettings?: MediaConvertTeletextDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#TtmlDestinationSettings
   */
  readonly ttmlDestinationSettings?: MediaConvertTtmlDestinationSettings;

}

/**
 * @schema MediaConvertCmfcSettings
 */
export interface MediaConvertCmfcSettings {
  /**
   * @schema MediaConvertCmfcSettings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MediaConvertCmfcSettings#Scte35Esam
   */
  readonly scte35Esam?: string;

  /**
   * @schema MediaConvertCmfcSettings#Scte35Source
   */
  readonly scte35Source?: string;

}

/**
 * @schema MediaConvertF4vSettings
 */
export interface MediaConvertF4vSettings {
  /**
   * @schema MediaConvertF4vSettings#MoovPlacement
   */
  readonly moovPlacement?: string;

}

/**
 * @schema MediaConvertM2tsSettings
 */
export interface MediaConvertM2tsSettings {
  /**
   * @schema MediaConvertM2tsSettings#AudioBufferModel
   */
  readonly audioBufferModel?: string;

  /**
   * @schema MediaConvertM2tsSettings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MediaConvertM2tsSettings#AudioFramesPerPes
   */
  readonly audioFramesPerPes?: number;

  /**
   * @schema MediaConvertM2tsSettings#AudioPids
   */
  readonly audioPids?: number[];

  /**
   * @schema MediaConvertM2tsSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertM2tsSettings#BufferModel
   */
  readonly bufferModel?: string;

  /**
   * @schema MediaConvertM2tsSettings#DvbNitSettings
   */
  readonly dvbNitSettings?: MediaConvertDvbNitSettings;

  /**
   * @schema MediaConvertM2tsSettings#DvbSdtSettings
   */
  readonly dvbSdtSettings?: MediaConvertDvbSdtSettings;

  /**
   * @schema MediaConvertM2tsSettings#DvbSubPids
   */
  readonly dvbSubPids?: number[];

  /**
   * @schema MediaConvertM2tsSettings#DvbTdtSettings
   */
  readonly dvbTdtSettings?: MediaConvertDvbTdtSettings;

  /**
   * @schema MediaConvertM2tsSettings#DvbTeletextPid
   */
  readonly dvbTeletextPid?: number;

  /**
   * @schema MediaConvertM2tsSettings#EbpAudioInterval
   */
  readonly ebpAudioInterval?: string;

  /**
   * @schema MediaConvertM2tsSettings#EbpPlacement
   */
  readonly ebpPlacement?: string;

  /**
   * @schema MediaConvertM2tsSettings#EsRateInPes
   */
  readonly esRateInPes?: string;

  /**
   * @schema MediaConvertM2tsSettings#ForceTsVideoEbpOrder
   */
  readonly forceTsVideoEbpOrder?: string;

  /**
   * @schema MediaConvertM2tsSettings#FragmentTime
   */
  readonly fragmentTime?: number;

  /**
   * @schema MediaConvertM2tsSettings#MaxPcrInterval
   */
  readonly maxPcrInterval?: number;

  /**
   * @schema MediaConvertM2tsSettings#MinEbpInterval
   */
  readonly minEbpInterval?: number;

  /**
   * @schema MediaConvertM2tsSettings#NielsenId3
   */
  readonly nielsenId3?: string;

  /**
   * @schema MediaConvertM2tsSettings#NullPacketBitrate
   */
  readonly nullPacketBitrate?: number;

  /**
   * @schema MediaConvertM2tsSettings#PatInterval
   */
  readonly patInterval?: number;

  /**
   * @schema MediaConvertM2tsSettings#PcrControl
   */
  readonly pcrControl?: string;

  /**
   * @schema MediaConvertM2tsSettings#PcrPid
   */
  readonly pcrPid?: number;

  /**
   * @schema MediaConvertM2tsSettings#PmtInterval
   */
  readonly pmtInterval?: number;

  /**
   * @schema MediaConvertM2tsSettings#PmtPid
   */
  readonly pmtPid?: number;

  /**
   * @schema MediaConvertM2tsSettings#PrivateMetadataPid
   */
  readonly privateMetadataPid?: number;

  /**
   * @schema MediaConvertM2tsSettings#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema MediaConvertM2tsSettings#RateMode
   */
  readonly rateMode?: string;

  /**
   * @schema MediaConvertM2tsSettings#Scte35Esam
   */
  readonly scte35Esam?: MediaConvertM2tsScte35Esam;

  /**
   * @schema MediaConvertM2tsSettings#Scte35Pid
   */
  readonly scte35Pid?: number;

  /**
   * @schema MediaConvertM2tsSettings#Scte35Source
   */
  readonly scte35Source?: string;

  /**
   * @schema MediaConvertM2tsSettings#SegmentationMarkers
   */
  readonly segmentationMarkers?: string;

  /**
   * @schema MediaConvertM2tsSettings#SegmentationStyle
   */
  readonly segmentationStyle?: string;

  /**
   * @schema MediaConvertM2tsSettings#SegmentationTime
   */
  readonly segmentationTime?: number;

  /**
   * @schema MediaConvertM2tsSettings#TimedMetadataPid
   */
  readonly timedMetadataPid?: number;

  /**
   * @schema MediaConvertM2tsSettings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema MediaConvertM2tsSettings#VideoPid
   */
  readonly videoPid?: number;

}

/**
 * @schema MediaConvertM3u8Settings
 */
export interface MediaConvertM3u8Settings {
  /**
   * @schema MediaConvertM3u8Settings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MediaConvertM3u8Settings#AudioFramesPerPes
   */
  readonly audioFramesPerPes?: number;

  /**
   * @schema MediaConvertM3u8Settings#AudioPids
   */
  readonly audioPids?: number[];

  /**
   * @schema MediaConvertM3u8Settings#NielsenId3
   */
  readonly nielsenId3?: string;

  /**
   * @schema MediaConvertM3u8Settings#PatInterval
   */
  readonly patInterval?: number;

  /**
   * @schema MediaConvertM3u8Settings#PcrControl
   */
  readonly pcrControl?: string;

  /**
   * @schema MediaConvertM3u8Settings#PcrPid
   */
  readonly pcrPid?: number;

  /**
   * @schema MediaConvertM3u8Settings#PmtInterval
   */
  readonly pmtInterval?: number;

  /**
   * @schema MediaConvertM3u8Settings#PmtPid
   */
  readonly pmtPid?: number;

  /**
   * @schema MediaConvertM3u8Settings#PrivateMetadataPid
   */
  readonly privateMetadataPid?: number;

  /**
   * @schema MediaConvertM3u8Settings#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema MediaConvertM3u8Settings#Scte35Pid
   */
  readonly scte35Pid?: number;

  /**
   * @schema MediaConvertM3u8Settings#Scte35Source
   */
  readonly scte35Source?: string;

  /**
   * @schema MediaConvertM3u8Settings#TimedMetadata
   */
  readonly timedMetadata?: string;

  /**
   * @schema MediaConvertM3u8Settings#TimedMetadataPid
   */
  readonly timedMetadataPid?: number;

  /**
   * @schema MediaConvertM3u8Settings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema MediaConvertM3u8Settings#VideoPid
   */
  readonly videoPid?: number;

}

/**
 * @schema MediaConvertMovSettings
 */
export interface MediaConvertMovSettings {
  /**
   * @schema MediaConvertMovSettings#ClapAtom
   */
  readonly clapAtom?: string;

  /**
   * @schema MediaConvertMovSettings#CslgAtom
   */
  readonly cslgAtom?: string;

  /**
   * @schema MediaConvertMovSettings#Mpeg2FourCCControl
   */
  readonly mpeg2FourCcControl?: string;

  /**
   * @schema MediaConvertMovSettings#PaddingControl
   */
  readonly paddingControl?: string;

  /**
   * @schema MediaConvertMovSettings#Reference
   */
  readonly reference?: string;

}

/**
 * @schema MediaConvertMp4Settings
 */
export interface MediaConvertMp4Settings {
  /**
   * @schema MediaConvertMp4Settings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MediaConvertMp4Settings#CslgAtom
   */
  readonly cslgAtom?: string;

  /**
   * @schema MediaConvertMp4Settings#CttsVersion
   */
  readonly cttsVersion?: number;

  /**
   * @schema MediaConvertMp4Settings#FreeSpaceBox
   */
  readonly freeSpaceBox?: string;

  /**
   * @schema MediaConvertMp4Settings#MoovPlacement
   */
  readonly moovPlacement?: string;

  /**
   * @schema MediaConvertMp4Settings#Mp4MajorBrand
   */
  readonly mp4MajorBrand?: string;

}

/**
 * @schema MediaConvertMpdSettings
 */
export interface MediaConvertMpdSettings {
  /**
   * @schema MediaConvertMpdSettings#AccessibilityCaptionHints
   */
  readonly accessibilityCaptionHints?: string;

  /**
   * @schema MediaConvertMpdSettings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MediaConvertMpdSettings#CaptionContainerType
   */
  readonly captionContainerType?: string;

  /**
   * @schema MediaConvertMpdSettings#Scte35Esam
   */
  readonly scte35Esam?: string;

  /**
   * @schema MediaConvertMpdSettings#Scte35Source
   */
  readonly scte35Source?: string;

}

/**
 * @schema MediaConvertMxfSettings
 */
export interface MediaConvertMxfSettings {
  /**
   * @schema MediaConvertMxfSettings#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema MediaConvertMxfSettings#Profile
   */
  readonly profile?: string;

}

/**
 * @schema MediaConvertVideoCodecSettings
 */
export interface MediaConvertVideoCodecSettings {
  /**
   * @schema MediaConvertVideoCodecSettings#Av1Settings
   */
  readonly av1Settings?: MediaConvertAv1Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#AvcIntraSettings
   */
  readonly avcIntraSettings?: MediaConvertAvcIntraSettings;

  /**
   * @schema MediaConvertVideoCodecSettings#Codec
   */
  readonly codec?: string;

  /**
   * @schema MediaConvertVideoCodecSettings#FrameCaptureSettings
   */
  readonly frameCaptureSettings?: MediaConvertFrameCaptureSettings;

  /**
   * @schema MediaConvertVideoCodecSettings#H264Settings
   */
  readonly h264Settings?: MediaConvertH264Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#H265Settings
   */
  readonly h265Settings?: MediaConvertH265Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#Mpeg2Settings
   */
  readonly mpeg2Settings?: MediaConvertMpeg2Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#ProresSettings
   */
  readonly proresSettings?: MediaConvertProresSettings;

  /**
   * @schema MediaConvertVideoCodecSettings#Vc3Settings
   */
  readonly vc3Settings?: MediaConvertVc3Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#Vp8Settings
   */
  readonly vp8Settings?: MediaConvertVp8Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#Vp9Settings
   */
  readonly vp9Settings?: MediaConvertVp9Settings;

}

/**
 * @schema MediaConvertVideoPreprocessor
 */
export interface MediaConvertVideoPreprocessor {
  /**
   * @schema MediaConvertVideoPreprocessor#ColorCorrector
   */
  readonly colorCorrector?: MediaConvertColorCorrector;

  /**
   * @schema MediaConvertVideoPreprocessor#Deinterlacer
   */
  readonly deinterlacer?: MediaConvertDeinterlacer;

  /**
   * @schema MediaConvertVideoPreprocessor#DolbyVision
   */
  readonly dolbyVision?: MediaConvertDolbyVision;

  /**
   * @schema MediaConvertVideoPreprocessor#ImageInserter
   */
  readonly imageInserter?: MediaConvertImageInserter;

  /**
   * @schema MediaConvertVideoPreprocessor#NoiseReducer
   */
  readonly noiseReducer?: MediaConvertNoiseReducer;

  /**
   * @schema MediaConvertVideoPreprocessor#PartnerWatermarking
   */
  readonly partnerWatermarking?: MediaConvertPartnerWatermarking;

  /**
   * @schema MediaConvertVideoPreprocessor#TimecodeBurnin
   */
  readonly timecodeBurnin?: MediaConvertTimecodeBurnin;

}

/**
 * @schema MediaConvertCaptionSourceSettings
 */
export interface MediaConvertCaptionSourceSettings {
  /**
   * @schema MediaConvertCaptionSourceSettings#AncillarySourceSettings
   */
  readonly ancillarySourceSettings?: MediaConvertAncillarySourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#DvbSubSourceSettings
   */
  readonly dvbSubSourceSettings?: MediaConvertDvbSubSourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#EmbeddedSourceSettings
   */
  readonly embeddedSourceSettings?: MediaConvertEmbeddedSourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#FileSourceSettings
   */
  readonly fileSourceSettings?: MediaConvertFileSourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema MediaConvertCaptionSourceSettings#TeletextSourceSettings
   */
  readonly teletextSourceSettings?: MediaConvertTeletextSourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#TrackSourceSettings
   */
  readonly trackSourceSettings?: MediaConvertTrackSourceSettings;

}

/**
 * @schema MediaConvertInsertableImage
 */
export interface MediaConvertInsertableImage {
  /**
   * @schema MediaConvertInsertableImage#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaConvertInsertableImage#FadeIn
   */
  readonly fadeIn?: number;

  /**
   * @schema MediaConvertInsertableImage#FadeOut
   */
  readonly fadeOut?: number;

  /**
   * @schema MediaConvertInsertableImage#Height
   */
  readonly height?: number;

  /**
   * @schema MediaConvertInsertableImage#ImageInserterInput
   */
  readonly imageInserterInput?: string;

  /**
   * @schema MediaConvertInsertableImage#ImageX
   */
  readonly imageX?: number;

  /**
   * @schema MediaConvertInsertableImage#ImageY
   */
  readonly imageY?: number;

  /**
   * @schema MediaConvertInsertableImage#Layer
   */
  readonly layer?: number;

  /**
   * @schema MediaConvertInsertableImage#Opacity
   */
  readonly opacity?: number;

  /**
   * @schema MediaConvertInsertableImage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MediaConvertInsertableImage#Width
   */
  readonly width?: number;

}

/**
 * @schema MediaConvertHdr10Metadata
 */
export interface MediaConvertHdr10Metadata {
  /**
   * @schema MediaConvertHdr10Metadata#BluePrimaryX
   */
  readonly bluePrimaryX?: number;

  /**
   * @schema MediaConvertHdr10Metadata#BluePrimaryY
   */
  readonly bluePrimaryY?: number;

  /**
   * @schema MediaConvertHdr10Metadata#GreenPrimaryX
   */
  readonly greenPrimaryX?: number;

  /**
   * @schema MediaConvertHdr10Metadata#GreenPrimaryY
   */
  readonly greenPrimaryY?: number;

  /**
   * @schema MediaConvertHdr10Metadata#MaxContentLightLevel
   */
  readonly maxContentLightLevel?: number;

  /**
   * @schema MediaConvertHdr10Metadata#MaxFrameAverageLightLevel
   */
  readonly maxFrameAverageLightLevel?: number;

  /**
   * @schema MediaConvertHdr10Metadata#MaxLuminance
   */
  readonly maxLuminance?: number;

  /**
   * @schema MediaConvertHdr10Metadata#MinLuminance
   */
  readonly minLuminance?: number;

  /**
   * @schema MediaConvertHdr10Metadata#RedPrimaryX
   */
  readonly redPrimaryX?: number;

  /**
   * @schema MediaConvertHdr10Metadata#RedPrimaryY
   */
  readonly redPrimaryY?: number;

  /**
   * @schema MediaConvertHdr10Metadata#WhitePointX
   */
  readonly whitePointX?: number;

  /**
   * @schema MediaConvertHdr10Metadata#WhitePointY
   */
  readonly whitePointY?: number;

}

/**
 * @schema MediaConvertAutomatedAbrSettings
 */
export interface MediaConvertAutomatedAbrSettings {
  /**
   * @schema MediaConvertAutomatedAbrSettings#MaxAbrBitrate
   */
  readonly maxAbrBitrate?: number;

  /**
   * @schema MediaConvertAutomatedAbrSettings#MaxRenditions
   */
  readonly maxRenditions?: number;

  /**
   * @schema MediaConvertAutomatedAbrSettings#MinAbrBitrate
   */
  readonly minAbrBitrate?: number;

}

/**
 * @schema MediaConvertCmafGroupSettings
 */
export interface MediaConvertCmafGroupSettings {
  /**
   * @schema MediaConvertCmafGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: MediaConvertCmafAdditionalManifest[];

  /**
   * @schema MediaConvertCmafGroupSettings#BaseUrl
   */
  readonly baseUrl?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#ClientCache
   */
  readonly clientCache?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#CodecSpecification
   */
  readonly codecSpecification?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertDestinationSettings;

  /**
   * @schema MediaConvertCmafGroupSettings#Encryption
   */
  readonly encryption?: MediaConvertCmafEncryptionSettings;

  /**
   * @schema MediaConvertCmafGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema MediaConvertCmafGroupSettings#ManifestCompression
   */
  readonly manifestCompression?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#ManifestDurationFormat
   */
  readonly manifestDurationFormat?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#MinBufferTime
   */
  readonly minBufferTime?: number;

  /**
   * @schema MediaConvertCmafGroupSettings#MinFinalSegmentLength
   */
  readonly minFinalSegmentLength?: number;

  /**
   * @schema MediaConvertCmafGroupSettings#MpdProfile
   */
  readonly mpdProfile?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#SegmentControl
   */
  readonly segmentControl?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema MediaConvertCmafGroupSettings#StreamInfResolution
   */
  readonly streamInfResolution?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#WriteDashManifest
   */
  readonly writeDashManifest?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#WriteHlsManifest
   */
  readonly writeHlsManifest?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#WriteSegmentTimelineInRepresentation
   */
  readonly writeSegmentTimelineInRepresentation?: string;

}

/**
 * @schema MediaConvertDashIsoGroupSettings
 */
export interface MediaConvertDashIsoGroupSettings {
  /**
   * @schema MediaConvertDashIsoGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: MediaConvertDashAdditionalManifest[];

  /**
   * @schema MediaConvertDashIsoGroupSettings#BaseUrl
   */
  readonly baseUrl?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertDestinationSettings;

  /**
   * @schema MediaConvertDashIsoGroupSettings#Encryption
   */
  readonly encryption?: MediaConvertDashIsoEncryptionSettings;

  /**
   * @schema MediaConvertDashIsoGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema MediaConvertDashIsoGroupSettings#HbbtvCompliance
   */
  readonly hbbtvCompliance?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#MinBufferTime
   */
  readonly minBufferTime?: number;

  /**
   * @schema MediaConvertDashIsoGroupSettings#MinFinalSegmentLength
   */
  readonly minFinalSegmentLength?: number;

  /**
   * @schema MediaConvertDashIsoGroupSettings#MpdProfile
   */
  readonly mpdProfile?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#SegmentControl
   */
  readonly segmentControl?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema MediaConvertDashIsoGroupSettings#WriteSegmentTimelineInRepresentation
   */
  readonly writeSegmentTimelineInRepresentation?: string;

}

/**
 * @schema MediaConvertFileGroupSettings
 */
export interface MediaConvertFileGroupSettings {
  /**
   * @schema MediaConvertFileGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConvertFileGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertDestinationSettings;

}

/**
 * @schema MediaConvertHlsGroupSettings
 */
export interface MediaConvertHlsGroupSettings {
  /**
   * @schema MediaConvertHlsGroupSettings#AdMarkers
   */
  readonly adMarkers?: string[];

  /**
   * @schema MediaConvertHlsGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: MediaConvertHlsAdditionalManifest[];

  /**
   * @schema MediaConvertHlsGroupSettings#AudioOnlyHeader
   */
  readonly audioOnlyHeader?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#BaseUrl
   */
  readonly baseUrl?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#CaptionLanguageMappings
   */
  readonly captionLanguageMappings?: MediaConvertHlsCaptionLanguageMapping[];

  /**
   * @schema MediaConvertHlsGroupSettings#CaptionLanguageSetting
   */
  readonly captionLanguageSetting?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#ClientCache
   */
  readonly clientCache?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#CodecSpecification
   */
  readonly codecSpecification?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertDestinationSettings;

  /**
   * @schema MediaConvertHlsGroupSettings#DirectoryStructure
   */
  readonly directoryStructure?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#Encryption
   */
  readonly encryption?: MediaConvertHlsEncryptionSettings;

  /**
   * @schema MediaConvertHlsGroupSettings#ManifestCompression
   */
  readonly manifestCompression?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#ManifestDurationFormat
   */
  readonly manifestDurationFormat?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#MinFinalSegmentLength
   */
  readonly minFinalSegmentLength?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#MinSegmentLength
   */
  readonly minSegmentLength?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#OutputSelection
   */
  readonly outputSelection?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#ProgramDateTime
   */
  readonly programDateTime?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#ProgramDateTimePeriod
   */
  readonly programDateTimePeriod?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#SegmentControl
   */
  readonly segmentControl?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#SegmentsPerSubdirectory
   */
  readonly segmentsPerSubdirectory?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#StreamInfResolution
   */
  readonly streamInfResolution?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#TimedMetadataId3Frame
   */
  readonly timedMetadataId3Frame?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#TimedMetadataId3Period
   */
  readonly timedMetadataId3Period?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#TimestampDeltaMilliseconds
   */
  readonly timestampDeltaMilliseconds?: number;

}

/**
 * @schema MediaConvertMsSmoothGroupSettings
 */
export interface MediaConvertMsSmoothGroupSettings {
  /**
   * @schema MediaConvertMsSmoothGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: MediaConvertMsSmoothAdditionalManifest[];

  /**
   * @schema MediaConvertMsSmoothGroupSettings#AudioDeduplication
   */
  readonly audioDeduplication?: string;

  /**
   * @schema MediaConvertMsSmoothGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConvertMsSmoothGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertDestinationSettings;

  /**
   * @schema MediaConvertMsSmoothGroupSettings#Encryption
   */
  readonly encryption?: MediaConvertMsSmoothEncryptionSettings;

  /**
   * @schema MediaConvertMsSmoothGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema MediaConvertMsSmoothGroupSettings#ManifestEncoding
   */
  readonly manifestEncoding?: string;

}

/**
 * @schema MediaConvertCaptionDescription
 */
export interface MediaConvertCaptionDescription {
  /**
   * @schema MediaConvertCaptionDescription#CaptionSelectorName
   */
  readonly captionSelectorName?: string;

  /**
   * @schema MediaConvertCaptionDescription#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertCaptionDescription#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertCaptionDestinationSettings;

  /**
   * @schema MediaConvertCaptionDescription#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertCaptionDescription#LanguageDescription
   */
  readonly languageDescription?: string;

}

/**
 * @schema MediaConvertOutputSettings
 */
export interface MediaConvertOutputSettings {
  /**
   * @schema MediaConvertOutputSettings#HlsSettings
   */
  readonly hlsSettings?: MediaConvertHlsSettings;

}

/**
 * @schema MediaConvertVideoDetail
 */
export interface MediaConvertVideoDetail {
  /**
   * @schema MediaConvertVideoDetail#HeightInPx
   */
  readonly heightInPx?: number;

  /**
   * @schema MediaConvertVideoDetail#WidthInPx
   */
  readonly widthInPx?: number;

}

/**
 * @schema MediaConvertAacSettings
 */
export interface MediaConvertAacSettings {
  /**
   * @schema MediaConvertAacSettings#AudioDescriptionBroadcasterMix
   */
  readonly audioDescriptionBroadcasterMix?: string;

  /**
   * @schema MediaConvertAacSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertAacSettings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertAacSettings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaConvertAacSettings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertAacSettings#RawFormat
   */
  readonly rawFormat?: string;

  /**
   * @schema MediaConvertAacSettings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaConvertAacSettings#Specification
   */
  readonly specification?: string;

  /**
   * @schema MediaConvertAacSettings#VbrQuality
   */
  readonly vbrQuality?: string;

}

/**
 * @schema MediaConvertAc3Settings
 */
export interface MediaConvertAc3Settings {
  /**
   * @schema MediaConvertAc3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertAc3Settings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema MediaConvertAc3Settings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaConvertAc3Settings#Dialnorm
   */
  readonly dialnorm?: number;

  /**
   * @schema MediaConvertAc3Settings#DynamicRangeCompressionProfile
   */
  readonly dynamicRangeCompressionProfile?: string;

  /**
   * @schema MediaConvertAc3Settings#LfeFilter
   */
  readonly lfeFilter?: string;

  /**
   * @schema MediaConvertAc3Settings#MetadataControl
   */
  readonly metadataControl?: string;

  /**
   * @schema MediaConvertAc3Settings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema MediaConvertAiffSettings
 */
export interface MediaConvertAiffSettings {
  /**
   * @schema MediaConvertAiffSettings#BitDepth
   */
  readonly bitDepth?: number;

  /**
   * @schema MediaConvertAiffSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertAiffSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema MediaConvertEac3AtmosSettings
 */
export interface MediaConvertEac3AtmosSettings {
  /**
   * @schema MediaConvertEac3AtmosSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#DialogueIntelligence
   */
  readonly dialogueIntelligence?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#DynamicRangeCompressionLine
   */
  readonly dynamicRangeCompressionLine?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#DynamicRangeCompressionRf
   */
  readonly dynamicRangeCompressionRf?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#LoRoCenterMixLevel
   */
  readonly loRoCenterMixLevel?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#LoRoSurroundMixLevel
   */
  readonly loRoSurroundMixLevel?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#LtRtCenterMixLevel
   */
  readonly ltRtCenterMixLevel?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#LtRtSurroundMixLevel
   */
  readonly ltRtSurroundMixLevel?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#MeteringMode
   */
  readonly meteringMode?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#SpeechThreshold
   */
  readonly speechThreshold?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#StereoDownmix
   */
  readonly stereoDownmix?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#SurroundExMode
   */
  readonly surroundExMode?: string;

}

/**
 * @schema MediaConvertEac3Settings
 */
export interface MediaConvertEac3Settings {
  /**
   * @schema MediaConvertEac3Settings#AttenuationControl
   */
  readonly attenuationControl?: string;

  /**
   * @schema MediaConvertEac3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertEac3Settings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema MediaConvertEac3Settings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaConvertEac3Settings#DcFilter
   */
  readonly dcFilter?: string;

  /**
   * @schema MediaConvertEac3Settings#Dialnorm
   */
  readonly dialnorm?: number;

  /**
   * @schema MediaConvertEac3Settings#DynamicRangeCompressionLine
   */
  readonly dynamicRangeCompressionLine?: string;

  /**
   * @schema MediaConvertEac3Settings#DynamicRangeCompressionRf
   */
  readonly dynamicRangeCompressionRf?: string;

  /**
   * @schema MediaConvertEac3Settings#LfeControl
   */
  readonly lfeControl?: string;

  /**
   * @schema MediaConvertEac3Settings#LfeFilter
   */
  readonly lfeFilter?: string;

  /**
   * @schema MediaConvertEac3Settings#LoRoCenterMixLevel
   */
  readonly loRoCenterMixLevel?: number;

  /**
   * @schema MediaConvertEac3Settings#LoRoSurroundMixLevel
   */
  readonly loRoSurroundMixLevel?: number;

  /**
   * @schema MediaConvertEac3Settings#LtRtCenterMixLevel
   */
  readonly ltRtCenterMixLevel?: number;

  /**
   * @schema MediaConvertEac3Settings#LtRtSurroundMixLevel
   */
  readonly ltRtSurroundMixLevel?: number;

  /**
   * @schema MediaConvertEac3Settings#MetadataControl
   */
  readonly metadataControl?: string;

  /**
   * @schema MediaConvertEac3Settings#PassthroughControl
   */
  readonly passthroughControl?: string;

  /**
   * @schema MediaConvertEac3Settings#PhaseControl
   */
  readonly phaseControl?: string;

  /**
   * @schema MediaConvertEac3Settings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaConvertEac3Settings#StereoDownmix
   */
  readonly stereoDownmix?: string;

  /**
   * @schema MediaConvertEac3Settings#SurroundExMode
   */
  readonly surroundExMode?: string;

  /**
   * @schema MediaConvertEac3Settings#SurroundMode
   */
  readonly surroundMode?: string;

}

/**
 * @schema MediaConvertMp2Settings
 */
export interface MediaConvertMp2Settings {
  /**
   * @schema MediaConvertMp2Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertMp2Settings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertMp2Settings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema MediaConvertMp3Settings
 */
export interface MediaConvertMp3Settings {
  /**
   * @schema MediaConvertMp3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertMp3Settings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertMp3Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertMp3Settings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaConvertMp3Settings#VbrQuality
   */
  readonly vbrQuality?: number;

}

/**
 * @schema MediaConvertOpusSettings
 */
export interface MediaConvertOpusSettings {
  /**
   * @schema MediaConvertOpusSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertOpusSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertOpusSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema MediaConvertVorbisSettings
 */
export interface MediaConvertVorbisSettings {
  /**
   * @schema MediaConvertVorbisSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertVorbisSettings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaConvertVorbisSettings#VbrQuality
   */
  readonly vbrQuality?: number;

}

/**
 * @schema MediaConvertWavSettings
 */
export interface MediaConvertWavSettings {
  /**
   * @schema MediaConvertWavSettings#BitDepth
   */
  readonly bitDepth?: number;

  /**
   * @schema MediaConvertWavSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertWavSettings#Format
   */
  readonly format?: string;

  /**
   * @schema MediaConvertWavSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema MediaConvertChannelMapping
 */
export interface MediaConvertChannelMapping {
  /**
   * @schema MediaConvertChannelMapping#OutputChannels
   */
  readonly outputChannels?: MediaConvertOutputChannelMapping[];

}

/**
 * @schema MediaConvertBurninDestinationSettings
 */
export interface MediaConvertBurninDestinationSettings {
  /**
   * @schema MediaConvertBurninDestinationSettings#Alignment
   */
  readonly alignment?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#BackgroundColor
   */
  readonly backgroundColor?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#BackgroundOpacity
   */
  readonly backgroundOpacity?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#FontColor
   */
  readonly fontColor?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#FontOpacity
   */
  readonly fontOpacity?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#FontResolution
   */
  readonly fontResolution?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#FontScript
   */
  readonly fontScript?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#FontSize
   */
  readonly fontSize?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#OutlineColor
   */
  readonly outlineColor?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#OutlineSize
   */
  readonly outlineSize?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#ShadowColor
   */
  readonly shadowColor?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#ShadowOpacity
   */
  readonly shadowOpacity?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#ShadowXOffset
   */
  readonly shadowXOffset?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#ShadowYOffset
   */
  readonly shadowYOffset?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#TeletextSpacing
   */
  readonly teletextSpacing?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#XPosition
   */
  readonly xPosition?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#YPosition
   */
  readonly yPosition?: number;

}

/**
 * @schema MediaConvertDvbSubDestinationSettings
 */
export interface MediaConvertDvbSubDestinationSettings {
  /**
   * @schema MediaConvertDvbSubDestinationSettings#Alignment
   */
  readonly alignment?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#BackgroundColor
   */
  readonly backgroundColor?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#BackgroundOpacity
   */
  readonly backgroundOpacity?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#FontColor
   */
  readonly fontColor?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#FontOpacity
   */
  readonly fontOpacity?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#FontResolution
   */
  readonly fontResolution?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#FontScript
   */
  readonly fontScript?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#FontSize
   */
  readonly fontSize?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#OutlineColor
   */
  readonly outlineColor?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#OutlineSize
   */
  readonly outlineSize?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#ShadowColor
   */
  readonly shadowColor?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#ShadowOpacity
   */
  readonly shadowOpacity?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#ShadowXOffset
   */
  readonly shadowXOffset?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#ShadowYOffset
   */
  readonly shadowYOffset?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#SubtitlingType
   */
  readonly subtitlingType?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#TeletextSpacing
   */
  readonly teletextSpacing?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#XPosition
   */
  readonly xPosition?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#YPosition
   */
  readonly yPosition?: number;

}

/**
 * @schema MediaConvertEmbeddedDestinationSettings
 */
export interface MediaConvertEmbeddedDestinationSettings {
  /**
   * @schema MediaConvertEmbeddedDestinationSettings#Destination608ChannelNumber
   */
  readonly destination608ChannelNumber?: number;

  /**
   * @schema MediaConvertEmbeddedDestinationSettings#Destination708ServiceNumber
   */
  readonly destination708ServiceNumber?: number;

}

/**
 * @schema MediaConvertImscDestinationSettings
 */
export interface MediaConvertImscDestinationSettings {
  /**
   * @schema MediaConvertImscDestinationSettings#StylePassthrough
   */
  readonly stylePassthrough?: string;

}

/**
 * @schema MediaConvertSccDestinationSettings
 */
export interface MediaConvertSccDestinationSettings {
  /**
   * @schema MediaConvertSccDestinationSettings#Framerate
   */
  readonly framerate?: string;

}

/**
 * @schema MediaConvertTeletextDestinationSettings
 */
export interface MediaConvertTeletextDestinationSettings {
  /**
   * @schema MediaConvertTeletextDestinationSettings#PageNumber
   */
  readonly pageNumber?: string;

  /**
   * @schema MediaConvertTeletextDestinationSettings#PageTypes
   */
  readonly pageTypes?: string[];

}

/**
 * @schema MediaConvertTtmlDestinationSettings
 */
export interface MediaConvertTtmlDestinationSettings {
  /**
   * @schema MediaConvertTtmlDestinationSettings#StylePassthrough
   */
  readonly stylePassthrough?: string;

}

/**
 * @schema MediaConvertDvbNitSettings
 */
export interface MediaConvertDvbNitSettings {
  /**
   * @schema MediaConvertDvbNitSettings#NetworkId
   */
  readonly networkId?: number;

  /**
   * @schema MediaConvertDvbNitSettings#NetworkName
   */
  readonly networkName?: string;

  /**
   * @schema MediaConvertDvbNitSettings#NitInterval
   */
  readonly nitInterval?: number;

}

/**
 * @schema MediaConvertDvbSdtSettings
 */
export interface MediaConvertDvbSdtSettings {
  /**
   * @schema MediaConvertDvbSdtSettings#OutputSdt
   */
  readonly outputSdt?: string;

  /**
   * @schema MediaConvertDvbSdtSettings#SdtInterval
   */
  readonly sdtInterval?: number;

  /**
   * @schema MediaConvertDvbSdtSettings#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema MediaConvertDvbSdtSettings#ServiceProviderName
   */
  readonly serviceProviderName?: string;

}

/**
 * @schema MediaConvertDvbTdtSettings
 */
export interface MediaConvertDvbTdtSettings {
  /**
   * @schema MediaConvertDvbTdtSettings#TdtInterval
   */
  readonly tdtInterval?: number;

}

/**
 * @schema MediaConvertM2tsScte35Esam
 */
export interface MediaConvertM2tsScte35Esam {
  /**
   * @schema MediaConvertM2tsScte35Esam#Scte35EsamPid
   */
  readonly scte35EsamPid?: number;

}

/**
 * @schema MediaConvertAv1Settings
 */
export interface MediaConvertAv1Settings {
  /**
   * @schema MediaConvertAv1Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaConvertAv1Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertAv1Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertAv1Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertAv1Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertAv1Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertAv1Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertAv1Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema MediaConvertAv1Settings#QvbrSettings
   */
  readonly qvbrSettings?: MediaConvertAv1QvbrSettings;

  /**
   * @schema MediaConvertAv1Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertAv1Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema MediaConvertAv1Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

}

/**
 * @schema MediaConvertAvcIntraSettings
 */
export interface MediaConvertAvcIntraSettings {
  /**
   * @schema MediaConvertAvcIntraSettings#AvcIntraClass
   */
  readonly avcIntraClass?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertAvcIntraSettings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertAvcIntraSettings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#Telecine
   */
  readonly telecine?: string;

}

/**
 * @schema MediaConvertFrameCaptureSettings
 */
export interface MediaConvertFrameCaptureSettings {
  /**
   * @schema MediaConvertFrameCaptureSettings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertFrameCaptureSettings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertFrameCaptureSettings#MaxCaptures
   */
  readonly maxCaptures?: number;

  /**
   * @schema MediaConvertFrameCaptureSettings#Quality
   */
  readonly quality?: number;

}

/**
 * @schema MediaConvertH264Settings
 */
export interface MediaConvertH264Settings {
  /**
   * @schema MediaConvertH264Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaConvertH264Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertH264Settings#CodecLevel
   */
  readonly codecLevel?: string;

  /**
   * @schema MediaConvertH264Settings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertH264Settings#DynamicSubGop
   */
  readonly dynamicSubGop?: string;

  /**
   * @schema MediaConvertH264Settings#EntropyEncoding
   */
  readonly entropyEncoding?: string;

  /**
   * @schema MediaConvertH264Settings#FieldEncoding
   */
  readonly fieldEncoding?: string;

  /**
   * @schema MediaConvertH264Settings#FlickerAdaptiveQuantization
   */
  readonly flickerAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH264Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertH264Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertH264Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertH264Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertH264Settings#GopBReference
   */
  readonly gopBReference?: string;

  /**
   * @schema MediaConvertH264Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaConvertH264Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertH264Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema MediaConvertH264Settings#HrdBufferInitialFillPercentage
   */
  readonly hrdBufferInitialFillPercentage?: number;

  /**
   * @schema MediaConvertH264Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertH264Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertH264Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertH264Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema MediaConvertH264Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema MediaConvertH264Settings#NumberReferenceFrames
   */
  readonly numberReferenceFrames?: number;

  /**
   * @schema MediaConvertH264Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertH264Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertH264Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertH264Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertH264Settings#QvbrSettings
   */
  readonly qvbrSettings?: MediaConvertH264QvbrSettings;

  /**
   * @schema MediaConvertH264Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertH264Settings#RepeatPps
   */
  readonly repeatPps?: string;

  /**
   * @schema MediaConvertH264Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema MediaConvertH264Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema MediaConvertH264Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertH264Settings#Softness
   */
  readonly softness?: number;

  /**
   * @schema MediaConvertH264Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH264Settings#Syntax
   */
  readonly syntax?: string;

  /**
   * @schema MediaConvertH264Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema MediaConvertH264Settings#TemporalAdaptiveQuantization
   */
  readonly temporalAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH264Settings#UnregisteredSeiTimecode
   */
  readonly unregisteredSeiTimecode?: string;

}

/**
 * @schema MediaConvertH265Settings
 */
export interface MediaConvertH265Settings {
  /**
   * @schema MediaConvertH265Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaConvertH265Settings#AlternateTransferFunctionSei
   */
  readonly alternateTransferFunctionSei?: string;

  /**
   * @schema MediaConvertH265Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertH265Settings#CodecLevel
   */
  readonly codecLevel?: string;

  /**
   * @schema MediaConvertH265Settings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertH265Settings#DynamicSubGop
   */
  readonly dynamicSubGop?: string;

  /**
   * @schema MediaConvertH265Settings#FlickerAdaptiveQuantization
   */
  readonly flickerAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH265Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertH265Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertH265Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertH265Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertH265Settings#GopBReference
   */
  readonly gopBReference?: string;

  /**
   * @schema MediaConvertH265Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaConvertH265Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertH265Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema MediaConvertH265Settings#HrdBufferInitialFillPercentage
   */
  readonly hrdBufferInitialFillPercentage?: number;

  /**
   * @schema MediaConvertH265Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertH265Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertH265Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertH265Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema MediaConvertH265Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema MediaConvertH265Settings#NumberReferenceFrames
   */
  readonly numberReferenceFrames?: number;

  /**
   * @schema MediaConvertH265Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertH265Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertH265Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertH265Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertH265Settings#QvbrSettings
   */
  readonly qvbrSettings?: MediaConvertH265QvbrSettings;

  /**
   * @schema MediaConvertH265Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertH265Settings#SampleAdaptiveOffsetFilterMode
   */
  readonly sampleAdaptiveOffsetFilterMode?: string;

  /**
   * @schema MediaConvertH265Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema MediaConvertH265Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema MediaConvertH265Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertH265Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH265Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema MediaConvertH265Settings#TemporalAdaptiveQuantization
   */
  readonly temporalAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH265Settings#TemporalIds
   */
  readonly temporalIds?: string;

  /**
   * @schema MediaConvertH265Settings#Tiles
   */
  readonly tiles?: string;

  /**
   * @schema MediaConvertH265Settings#UnregisteredSeiTimecode
   */
  readonly unregisteredSeiTimecode?: string;

  /**
   * @schema MediaConvertH265Settings#WriteMp4PackagingType
   */
  readonly writeMp4PackagingType?: string;

}

/**
 * @schema MediaConvertMpeg2Settings
 */
export interface MediaConvertMpeg2Settings {
  /**
   * @schema MediaConvertMpeg2Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaConvertMpeg2Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertMpeg2Settings#CodecLevel
   */
  readonly codecLevel?: string;

  /**
   * @schema MediaConvertMpeg2Settings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertMpeg2Settings#DynamicSubGop
   */
  readonly dynamicSubGop?: string;

  /**
   * @schema MediaConvertMpeg2Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertMpeg2Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertMpeg2Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertMpeg2Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertMpeg2Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaConvertMpeg2Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertMpeg2Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema MediaConvertMpeg2Settings#HrdBufferInitialFillPercentage
   */
  readonly hrdBufferInitialFillPercentage?: number;

  /**
   * @schema MediaConvertMpeg2Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertMpeg2Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertMpeg2Settings#IntraDcPrecision
   */
  readonly intraDcPrecision?: string;

  /**
   * @schema MediaConvertMpeg2Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertMpeg2Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema MediaConvertMpeg2Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema MediaConvertMpeg2Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertMpeg2Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertMpeg2Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertMpeg2Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertMpeg2Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertMpeg2Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema MediaConvertMpeg2Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertMpeg2Settings#Softness
   */
  readonly softness?: number;

  /**
   * @schema MediaConvertMpeg2Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertMpeg2Settings#Syntax
   */
  readonly syntax?: string;

  /**
   * @schema MediaConvertMpeg2Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema MediaConvertMpeg2Settings#TemporalAdaptiveQuantization
   */
  readonly temporalAdaptiveQuantization?: string;

}

/**
 * @schema MediaConvertProresSettings
 */
export interface MediaConvertProresSettings {
  /**
   * @schema MediaConvertProresSettings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertProresSettings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertProresSettings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertProresSettings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertProresSettings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertProresSettings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertProresSettings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertProresSettings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertProresSettings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertProresSettings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertProresSettings#Telecine
   */
  readonly telecine?: string;

}

/**
 * @schema MediaConvertVc3Settings
 */
export interface MediaConvertVc3Settings {
  /**
   * @schema MediaConvertVc3Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertVc3Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertVc3Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertVc3Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertVc3Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertVc3Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertVc3Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema MediaConvertVc3Settings#Vc3Class
   */
  readonly vc3Class?: string;

}

/**
 * @schema MediaConvertVp8Settings
 */
export interface MediaConvertVp8Settings {
  /**
   * @schema MediaConvertVp8Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertVp8Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertVp8Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertVp8Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertVp8Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertVp8Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertVp8Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertVp8Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertVp8Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertVp8Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertVp8Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertVp8Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertVp8Settings#RateControlMode
   */
  readonly rateControlMode?: string;

}

/**
 * @schema MediaConvertVp9Settings
 */
export interface MediaConvertVp9Settings {
  /**
   * @schema MediaConvertVp9Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertVp9Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertVp9Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertVp9Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertVp9Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertVp9Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertVp9Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertVp9Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertVp9Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertVp9Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertVp9Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertVp9Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertVp9Settings#RateControlMode
   */
  readonly rateControlMode?: string;

}

/**
 * @schema MediaConvertColorCorrector
 */
export interface MediaConvertColorCorrector {
  /**
   * @schema MediaConvertColorCorrector#Brightness
   */
  readonly brightness?: number;

  /**
   * @schema MediaConvertColorCorrector#ColorSpaceConversion
   */
  readonly colorSpaceConversion?: string;

  /**
   * @schema MediaConvertColorCorrector#Contrast
   */
  readonly contrast?: number;

  /**
   * @schema MediaConvertColorCorrector#Hdr10Metadata
   */
  readonly hdr10Metadata?: MediaConvertHdr10Metadata;

  /**
   * @schema MediaConvertColorCorrector#Hue
   */
  readonly hue?: number;

  /**
   * @schema MediaConvertColorCorrector#Saturation
   */
  readonly saturation?: number;

}

/**
 * @schema MediaConvertDeinterlacer
 */
export interface MediaConvertDeinterlacer {
  /**
   * @schema MediaConvertDeinterlacer#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MediaConvertDeinterlacer#Control
   */
  readonly control?: string;

  /**
   * @schema MediaConvertDeinterlacer#Mode
   */
  readonly mode?: string;

}

/**
 * @schema MediaConvertDolbyVision
 */
export interface MediaConvertDolbyVision {
  /**
   * @schema MediaConvertDolbyVision#L6Metadata
   */
  readonly l6Metadata?: MediaConvertDolbyVisionLevel6Metadata;

  /**
   * @schema MediaConvertDolbyVision#L6Mode
   */
  readonly l6Mode?: string;

  /**
   * @schema MediaConvertDolbyVision#Profile
   */
  readonly profile?: string;

}

/**
 * @schema MediaConvertNoiseReducer
 */
export interface MediaConvertNoiseReducer {
  /**
   * @schema MediaConvertNoiseReducer#Filter
   */
  readonly filter?: string;

  /**
   * @schema MediaConvertNoiseReducer#FilterSettings
   */
  readonly filterSettings?: MediaConvertNoiseReducerFilterSettings;

  /**
   * @schema MediaConvertNoiseReducer#SpatialFilterSettings
   */
  readonly spatialFilterSettings?: MediaConvertNoiseReducerSpatialFilterSettings;

  /**
   * @schema MediaConvertNoiseReducer#TemporalFilterSettings
   */
  readonly temporalFilterSettings?: MediaConvertNoiseReducerTemporalFilterSettings;

}

/**
 * @schema MediaConvertPartnerWatermarking
 */
export interface MediaConvertPartnerWatermarking {
  /**
   * @schema MediaConvertPartnerWatermarking#NexguardFileMarkerSettings
   */
  readonly nexguardFileMarkerSettings?: MediaConvertNexGuardFileMarkerSettings;

}

/**
 * @schema MediaConvertTimecodeBurnin
 */
export interface MediaConvertTimecodeBurnin {
  /**
   * @schema MediaConvertTimecodeBurnin#FontSize
   */
  readonly fontSize?: number;

  /**
   * @schema MediaConvertTimecodeBurnin#Position
   */
  readonly position?: string;

  /**
   * @schema MediaConvertTimecodeBurnin#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema MediaConvertAncillarySourceSettings
 */
export interface MediaConvertAncillarySourceSettings {
  /**
   * @schema MediaConvertAncillarySourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema MediaConvertAncillarySourceSettings#SourceAncillaryChannelNumber
   */
  readonly sourceAncillaryChannelNumber?: number;

  /**
   * @schema MediaConvertAncillarySourceSettings#TerminateCaptions
   */
  readonly terminateCaptions?: string;

}

/**
 * @schema MediaConvertDvbSubSourceSettings
 */
export interface MediaConvertDvbSubSourceSettings {
  /**
   * @schema MediaConvertDvbSubSourceSettings#Pid
   */
  readonly pid?: number;

}

/**
 * @schema MediaConvertEmbeddedSourceSettings
 */
export interface MediaConvertEmbeddedSourceSettings {
  /**
   * @schema MediaConvertEmbeddedSourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema MediaConvertEmbeddedSourceSettings#Source608ChannelNumber
   */
  readonly source608ChannelNumber?: number;

  /**
   * @schema MediaConvertEmbeddedSourceSettings#Source608TrackNumber
   */
  readonly source608TrackNumber?: number;

  /**
   * @schema MediaConvertEmbeddedSourceSettings#TerminateCaptions
   */
  readonly terminateCaptions?: string;

}

/**
 * @schema MediaConvertFileSourceSettings
 */
export interface MediaConvertFileSourceSettings {
  /**
   * @schema MediaConvertFileSourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema MediaConvertFileSourceSettings#Framerate
   */
  readonly framerate?: MediaConvertCaptionSourceFramerate;

  /**
   * @schema MediaConvertFileSourceSettings#SourceFile
   */
  readonly sourceFile?: string;

  /**
   * @schema MediaConvertFileSourceSettings#TimeDelta
   */
  readonly timeDelta?: number;

}

/**
 * @schema MediaConvertTeletextSourceSettings
 */
export interface MediaConvertTeletextSourceSettings {
  /**
   * @schema MediaConvertTeletextSourceSettings#PageNumber
   */
  readonly pageNumber?: string;

}

/**
 * @schema MediaConvertTrackSourceSettings
 */
export interface MediaConvertTrackSourceSettings {
  /**
   * @schema MediaConvertTrackSourceSettings#TrackNumber
   */
  readonly trackNumber?: number;

}

/**
 * @schema MediaConvertCmafAdditionalManifest
 */
export interface MediaConvertCmafAdditionalManifest {
  /**
   * @schema MediaConvertCmafAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema MediaConvertCmafAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * @schema MediaConvertDestinationSettings
 */
export interface MediaConvertDestinationSettings {
  /**
   * @schema MediaConvertDestinationSettings#S3Settings
   */
  readonly s3Settings?: MediaConvertS3DestinationSettings;

}

/**
 * @schema MediaConvertCmafEncryptionSettings
 */
export interface MediaConvertCmafEncryptionSettings {
  /**
   * @schema MediaConvertCmafEncryptionSettings#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaConvertCmafEncryptionSettings#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema MediaConvertCmafEncryptionSettings#InitializationVectorInManifest
   */
  readonly initializationVectorInManifest?: string;

  /**
   * @schema MediaConvertCmafEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaConvertSpekeKeyProviderCmaf;

  /**
   * @schema MediaConvertCmafEncryptionSettings#StaticKeyProvider
   */
  readonly staticKeyProvider?: MediaConvertStaticKeyProvider;

  /**
   * @schema MediaConvertCmafEncryptionSettings#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaConvertDashAdditionalManifest
 */
export interface MediaConvertDashAdditionalManifest {
  /**
   * @schema MediaConvertDashAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema MediaConvertDashAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * @schema MediaConvertDashIsoEncryptionSettings
 */
export interface MediaConvertDashIsoEncryptionSettings {
  /**
   * @schema MediaConvertDashIsoEncryptionSettings#PlaybackDeviceCompatibility
   */
  readonly playbackDeviceCompatibility?: string;

  /**
   * @schema MediaConvertDashIsoEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaConvertSpekeKeyProvider;

}

/**
 * @schema MediaConvertHlsAdditionalManifest
 */
export interface MediaConvertHlsAdditionalManifest {
  /**
   * @schema MediaConvertHlsAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema MediaConvertHlsAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * @schema MediaConvertHlsCaptionLanguageMapping
 */
export interface MediaConvertHlsCaptionLanguageMapping {
  /**
   * @schema MediaConvertHlsCaptionLanguageMapping#CaptionChannel
   */
  readonly captionChannel?: number;

  /**
   * @schema MediaConvertHlsCaptionLanguageMapping#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertHlsCaptionLanguageMapping#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertHlsCaptionLanguageMapping#LanguageDescription
   */
  readonly languageDescription?: string;

}

/**
 * @schema MediaConvertHlsEncryptionSettings
 */
export interface MediaConvertHlsEncryptionSettings {
  /**
   * @schema MediaConvertHlsEncryptionSettings#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaConvertHlsEncryptionSettings#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema MediaConvertHlsEncryptionSettings#InitializationVectorInManifest
   */
  readonly initializationVectorInManifest?: string;

  /**
   * @schema MediaConvertHlsEncryptionSettings#OfflineEncrypted
   */
  readonly offlineEncrypted?: string;

  /**
   * @schema MediaConvertHlsEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaConvertSpekeKeyProvider;

  /**
   * @schema MediaConvertHlsEncryptionSettings#StaticKeyProvider
   */
  readonly staticKeyProvider?: MediaConvertStaticKeyProvider;

  /**
   * @schema MediaConvertHlsEncryptionSettings#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaConvertMsSmoothAdditionalManifest
 */
export interface MediaConvertMsSmoothAdditionalManifest {
  /**
   * @schema MediaConvertMsSmoothAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema MediaConvertMsSmoothAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * @schema MediaConvertMsSmoothEncryptionSettings
 */
export interface MediaConvertMsSmoothEncryptionSettings {
  /**
   * @schema MediaConvertMsSmoothEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaConvertSpekeKeyProvider;

}

/**
 * @schema MediaConvertHlsSettings
 */
export interface MediaConvertHlsSettings {
  /**
   * @schema MediaConvertHlsSettings#AudioGroupId
   */
  readonly audioGroupId?: string;

  /**
   * @schema MediaConvertHlsSettings#AudioOnlyContainer
   */
  readonly audioOnlyContainer?: string;

  /**
   * @schema MediaConvertHlsSettings#AudioRenditionSets
   */
  readonly audioRenditionSets?: string;

  /**
   * @schema MediaConvertHlsSettings#AudioTrackType
   */
  readonly audioTrackType?: string;

  /**
   * @schema MediaConvertHlsSettings#IFrameOnlyManifest
   */
  readonly iFrameOnlyManifest?: string;

  /**
   * @schema MediaConvertHlsSettings#SegmentModifier
   */
  readonly segmentModifier?: string;

}

/**
 * @schema MediaConvertOutputChannelMapping
 */
export interface MediaConvertOutputChannelMapping {
  /**
   * @schema MediaConvertOutputChannelMapping#InputChannels
   */
  readonly inputChannels?: number[];

}

/**
 * @schema MediaConvertAv1QvbrSettings
 */
export interface MediaConvertAv1QvbrSettings {
  /**
   * @schema MediaConvertAv1QvbrSettings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema MediaConvertAv1QvbrSettings#QvbrQualityLevelFineTune
   */
  readonly qvbrQualityLevelFineTune?: number;

}

/**
 * @schema MediaConvertH264QvbrSettings
 */
export interface MediaConvertH264QvbrSettings {
  /**
   * @schema MediaConvertH264QvbrSettings#MaxAverageBitrate
   */
  readonly maxAverageBitrate?: number;

  /**
   * @schema MediaConvertH264QvbrSettings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema MediaConvertH264QvbrSettings#QvbrQualityLevelFineTune
   */
  readonly qvbrQualityLevelFineTune?: number;

}

/**
 * @schema MediaConvertH265QvbrSettings
 */
export interface MediaConvertH265QvbrSettings {
  /**
   * @schema MediaConvertH265QvbrSettings#MaxAverageBitrate
   */
  readonly maxAverageBitrate?: number;

  /**
   * @schema MediaConvertH265QvbrSettings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema MediaConvertH265QvbrSettings#QvbrQualityLevelFineTune
   */
  readonly qvbrQualityLevelFineTune?: number;

}

/**
 * @schema MediaConvertDolbyVisionLevel6Metadata
 */
export interface MediaConvertDolbyVisionLevel6Metadata {
  /**
   * @schema MediaConvertDolbyVisionLevel6Metadata#MaxCll
   */
  readonly maxCll?: number;

  /**
   * @schema MediaConvertDolbyVisionLevel6Metadata#MaxFall
   */
  readonly maxFall?: number;

}

/**
 * @schema MediaConvertNoiseReducerFilterSettings
 */
export interface MediaConvertNoiseReducerFilterSettings {
  /**
   * @schema MediaConvertNoiseReducerFilterSettings#Strength
   */
  readonly strength?: number;

}

/**
 * @schema MediaConvertNoiseReducerSpatialFilterSettings
 */
export interface MediaConvertNoiseReducerSpatialFilterSettings {
  /**
   * @schema MediaConvertNoiseReducerSpatialFilterSettings#PostFilterSharpenStrength
   */
  readonly postFilterSharpenStrength?: number;

  /**
   * @schema MediaConvertNoiseReducerSpatialFilterSettings#Speed
   */
  readonly speed?: number;

  /**
   * @schema MediaConvertNoiseReducerSpatialFilterSettings#Strength
   */
  readonly strength?: number;

}

/**
 * @schema MediaConvertNoiseReducerTemporalFilterSettings
 */
export interface MediaConvertNoiseReducerTemporalFilterSettings {
  /**
   * @schema MediaConvertNoiseReducerTemporalFilterSettings#AggressiveMode
   */
  readonly aggressiveMode?: number;

  /**
   * @schema MediaConvertNoiseReducerTemporalFilterSettings#PostTemporalSharpening
   */
  readonly postTemporalSharpening?: string;

  /**
   * @schema MediaConvertNoiseReducerTemporalFilterSettings#Speed
   */
  readonly speed?: number;

  /**
   * @schema MediaConvertNoiseReducerTemporalFilterSettings#Strength
   */
  readonly strength?: number;

}

/**
 * @schema MediaConvertNexGuardFileMarkerSettings
 */
export interface MediaConvertNexGuardFileMarkerSettings {
  /**
   * @schema MediaConvertNexGuardFileMarkerSettings#License
   */
  readonly license?: string;

  /**
   * @schema MediaConvertNexGuardFileMarkerSettings#Payload
   */
  readonly payload?: number;

  /**
   * @schema MediaConvertNexGuardFileMarkerSettings#Preset
   */
  readonly preset?: string;

  /**
   * @schema MediaConvertNexGuardFileMarkerSettings#Strength
   */
  readonly strength?: string;

}

/**
 * @schema MediaConvertCaptionSourceFramerate
 */
export interface MediaConvertCaptionSourceFramerate {
  /**
   * @schema MediaConvertCaptionSourceFramerate#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertCaptionSourceFramerate#FramerateNumerator
   */
  readonly framerateNumerator?: number;

}

/**
 * @schema MediaConvertS3DestinationSettings
 */
export interface MediaConvertS3DestinationSettings {
  /**
   * @schema MediaConvertS3DestinationSettings#AccessControl
   */
  readonly accessControl?: MediaConvertS3DestinationAccessControl;

  /**
   * @schema MediaConvertS3DestinationSettings#Encryption
   */
  readonly encryption?: MediaConvertS3EncryptionSettings;

}

/**
 * @schema MediaConvertSpekeKeyProviderCmaf
 */
export interface MediaConvertSpekeKeyProviderCmaf {
  /**
   * @schema MediaConvertSpekeKeyProviderCmaf#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema MediaConvertSpekeKeyProviderCmaf#DashSignaledSystemIds
   */
  readonly dashSignaledSystemIds?: string[];

  /**
   * @schema MediaConvertSpekeKeyProviderCmaf#HlsSignaledSystemIds
   */
  readonly hlsSignaledSystemIds?: string[];

  /**
   * @schema MediaConvertSpekeKeyProviderCmaf#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaConvertSpekeKeyProviderCmaf#Url
   */
  readonly url?: string;

}

/**
 * @schema MediaConvertStaticKeyProvider
 */
export interface MediaConvertStaticKeyProvider {
  /**
   * @schema MediaConvertStaticKeyProvider#KeyFormat
   */
  readonly keyFormat?: string;

  /**
   * @schema MediaConvertStaticKeyProvider#KeyFormatVersions
   */
  readonly keyFormatVersions?: string;

  /**
   * @schema MediaConvertStaticKeyProvider#StaticKeyValue
   */
  readonly staticKeyValue?: string;

  /**
   * @schema MediaConvertStaticKeyProvider#Url
   */
  readonly url?: string;

}

/**
 * @schema MediaConvertSpekeKeyProvider
 */
export interface MediaConvertSpekeKeyProvider {
  /**
   * @schema MediaConvertSpekeKeyProvider#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema MediaConvertSpekeKeyProvider#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaConvertSpekeKeyProvider#SystemIds
   */
  readonly systemIds?: string[];

  /**
   * @schema MediaConvertSpekeKeyProvider#Url
   */
  readonly url?: string;

}

/**
 * @schema MediaConvertS3DestinationAccessControl
 */
export interface MediaConvertS3DestinationAccessControl {
  /**
   * @schema MediaConvertS3DestinationAccessControl#CannedAcl
   */
  readonly cannedAcl?: string;

}

/**
 * @schema MediaConvertS3EncryptionSettings
 */
export interface MediaConvertS3EncryptionSettings {
  /**
   * @schema MediaConvertS3EncryptionSettings#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema MediaConvertS3EncryptionSettings#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}
