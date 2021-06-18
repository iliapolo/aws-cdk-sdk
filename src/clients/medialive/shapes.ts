/**
 * @schema MediaLiveAcceptInputDeviceTransferRequest
 */
export interface MediaLiveAcceptInputDeviceTransferRequest {
  /**
   * @schema MediaLiveAcceptInputDeviceTransferRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

}

/**
 * @schema MediaLiveAcceptInputDeviceTransferResponse
 */
export interface MediaLiveAcceptInputDeviceTransferResponse {
}

/**
 * @schema MediaLiveBatchDeleteRequest
 */
export interface MediaLiveBatchDeleteRequest {
  /**
   * @schema MediaLiveBatchDeleteRequest#ChannelIds
   */
  readonly channelIds?: string[];

  /**
   * @schema MediaLiveBatchDeleteRequest#InputIds
   */
  readonly inputIds?: string[];

  /**
   * @schema MediaLiveBatchDeleteRequest#InputSecurityGroupIds
   */
  readonly inputSecurityGroupIds?: string[];

  /**
   * @schema MediaLiveBatchDeleteRequest#MultiplexIds
   */
  readonly multiplexIds?: string[];

}

/**
 * @schema MediaLiveBatchDeleteResponse
 */
export interface MediaLiveBatchDeleteResponse {
  /**
   * @schema MediaLiveBatchDeleteResponse#Failed
   */
  readonly failed?: MediaLiveBatchFailedResultModel[];

  /**
   * @schema MediaLiveBatchDeleteResponse#Successful
   */
  readonly successful?: MediaLiveBatchSuccessfulResultModel[];

}

/**
 * @schema MediaLiveBatchStartRequest
 */
export interface MediaLiveBatchStartRequest {
  /**
   * @schema MediaLiveBatchStartRequest#ChannelIds
   */
  readonly channelIds?: string[];

  /**
   * @schema MediaLiveBatchStartRequest#MultiplexIds
   */
  readonly multiplexIds?: string[];

}

/**
 * @schema MediaLiveBatchStartResponse
 */
export interface MediaLiveBatchStartResponse {
  /**
   * @schema MediaLiveBatchStartResponse#Failed
   */
  readonly failed?: MediaLiveBatchFailedResultModel[];

  /**
   * @schema MediaLiveBatchStartResponse#Successful
   */
  readonly successful?: MediaLiveBatchSuccessfulResultModel[];

}

/**
 * @schema MediaLiveBatchStopRequest
 */
export interface MediaLiveBatchStopRequest {
  /**
   * @schema MediaLiveBatchStopRequest#ChannelIds
   */
  readonly channelIds?: string[];

  /**
   * @schema MediaLiveBatchStopRequest#MultiplexIds
   */
  readonly multiplexIds?: string[];

}

/**
 * @schema MediaLiveBatchStopResponse
 */
export interface MediaLiveBatchStopResponse {
  /**
   * @schema MediaLiveBatchStopResponse#Failed
   */
  readonly failed?: MediaLiveBatchFailedResultModel[];

  /**
   * @schema MediaLiveBatchStopResponse#Successful
   */
  readonly successful?: MediaLiveBatchSuccessfulResultModel[];

}

/**
 * @schema MediaLiveBatchUpdateScheduleRequest
 */
export interface MediaLiveBatchUpdateScheduleRequest {
  /**
   * @schema MediaLiveBatchUpdateScheduleRequest#ChannelId
   */
  readonly channelId: string;

  /**
   * @schema MediaLiveBatchUpdateScheduleRequest#Creates
   */
  readonly creates?: MediaLiveBatchScheduleActionCreateRequest;

  /**
   * @schema MediaLiveBatchUpdateScheduleRequest#Deletes
   */
  readonly deletes?: MediaLiveBatchScheduleActionDeleteRequest;

}

/**
 * @schema MediaLiveBatchUpdateScheduleResponse
 */
export interface MediaLiveBatchUpdateScheduleResponse {
  /**
   * @schema MediaLiveBatchUpdateScheduleResponse#Creates
   */
  readonly creates?: MediaLiveBatchScheduleActionCreateResult;

  /**
   * @schema MediaLiveBatchUpdateScheduleResponse#Deletes
   */
  readonly deletes?: MediaLiveBatchScheduleActionDeleteResult;

}

/**
 * @schema MediaLiveCancelInputDeviceTransferRequest
 */
export interface MediaLiveCancelInputDeviceTransferRequest {
  /**
   * @schema MediaLiveCancelInputDeviceTransferRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

}

/**
 * @schema MediaLiveCancelInputDeviceTransferResponse
 */
export interface MediaLiveCancelInputDeviceTransferResponse {
}

/**
 * @schema MediaLiveCreateChannelRequest
 */
export interface MediaLiveCreateChannelRequest {
  /**
   * @schema MediaLiveCreateChannelRequest#CdiInputSpecification
   */
  readonly cdiInputSpecification?: MediaLiveCdiInputSpecification;

  /**
   * @schema MediaLiveCreateChannelRequest#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveCreateChannelRequest#Destinations
   */
  readonly destinations?: MediaLiveOutputDestination[];

  /**
   * @schema MediaLiveCreateChannelRequest#EncoderSettings
   */
  readonly encoderSettings?: MediaLiveEncoderSettings;

  /**
   * @schema MediaLiveCreateChannelRequest#InputAttachments
   */
  readonly inputAttachments?: MediaLiveInputAttachment[];

  /**
   * @schema MediaLiveCreateChannelRequest#InputSpecification
   */
  readonly inputSpecification?: MediaLiveInputSpecification;

  /**
   * @schema MediaLiveCreateChannelRequest#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema MediaLiveCreateChannelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveCreateChannelRequest#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema MediaLiveCreateChannelRequest#Reserved
   */
  readonly reserved?: string;

  /**
   * @schema MediaLiveCreateChannelRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveCreateChannelRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveCreateChannelResponse
 */
export interface MediaLiveCreateChannelResponse {
  /**
   * @schema MediaLiveCreateChannelResponse#Channel
   */
  readonly channel?: MediaLiveChannel;

}

/**
 * @schema MediaLiveCreateInputRequest
 */
export interface MediaLiveCreateInputRequest {
  /**
   * @schema MediaLiveCreateInputRequest#Destinations
   */
  readonly destinations?: MediaLiveInputDestinationRequest[];

  /**
   * @schema MediaLiveCreateInputRequest#InputDevices
   */
  readonly inputDevices?: MediaLiveInputDeviceSettings[];

  /**
   * @schema MediaLiveCreateInputRequest#InputSecurityGroups
   */
  readonly inputSecurityGroups?: string[];

  /**
   * @schema MediaLiveCreateInputRequest#MediaConnectFlows
   */
  readonly mediaConnectFlows?: MediaLiveMediaConnectFlowRequest[];

  /**
   * @schema MediaLiveCreateInputRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveCreateInputRequest#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema MediaLiveCreateInputRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveCreateInputRequest#Sources
   */
  readonly sources?: MediaLiveInputSourceRequest[];

  /**
   * @schema MediaLiveCreateInputRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaLiveCreateInputRequest#Type
   */
  readonly type?: string;

  /**
   * @schema MediaLiveCreateInputRequest#Vpc
   */
  readonly vpc?: MediaLiveInputVpcRequest;

}

/**
 * @schema MediaLiveCreateInputResponse
 */
export interface MediaLiveCreateInputResponse {
  /**
   * @schema MediaLiveCreateInputResponse#Input
   */
  readonly input?: MediaLiveInput;

}

/**
 * @schema MediaLiveCreateInputSecurityGroupRequest
 */
export interface MediaLiveCreateInputSecurityGroupRequest {
  /**
   * @schema MediaLiveCreateInputSecurityGroupRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaLiveCreateInputSecurityGroupRequest#WhitelistRules
   */
  readonly whitelistRules?: MediaLiveInputWhitelistRuleCidr[];

}

/**
 * @schema MediaLiveCreateInputSecurityGroupResponse
 */
export interface MediaLiveCreateInputSecurityGroupResponse {
  /**
   * @schema MediaLiveCreateInputSecurityGroupResponse#SecurityGroup
   */
  readonly securityGroup?: MediaLiveInputSecurityGroup;

}

/**
 * @schema MediaLiveCreateMultiplexRequest
 */
export interface MediaLiveCreateMultiplexRequest {
  /**
   * @schema MediaLiveCreateMultiplexRequest#AvailabilityZones
   */
  readonly availabilityZones: string[];

  /**
   * @schema MediaLiveCreateMultiplexRequest#MultiplexSettings
   */
  readonly multiplexSettings: MediaLiveMultiplexSettings;

  /**
   * @schema MediaLiveCreateMultiplexRequest#Name
   */
  readonly name: string;

  /**
   * @schema MediaLiveCreateMultiplexRequest#RequestId
   */
  readonly requestId: string;

  /**
   * @schema MediaLiveCreateMultiplexRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveCreateMultiplexResponse
 */
export interface MediaLiveCreateMultiplexResponse {
  /**
   * @schema MediaLiveCreateMultiplexResponse#Multiplex
   */
  readonly multiplex?: MediaLiveMultiplex;

}

/**
 * @schema MediaLiveCreateMultiplexProgramRequest
 */
export interface MediaLiveCreateMultiplexProgramRequest {
  /**
   * @schema MediaLiveCreateMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema MediaLiveCreateMultiplexProgramRequest#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings: MediaLiveMultiplexProgramSettings;

  /**
   * @schema MediaLiveCreateMultiplexProgramRequest#ProgramName
   */
  readonly programName: string;

  /**
   * @schema MediaLiveCreateMultiplexProgramRequest#RequestId
   */
  readonly requestId: string;

}

/**
 * @schema MediaLiveCreateMultiplexProgramResponse
 */
export interface MediaLiveCreateMultiplexProgramResponse {
  /**
   * @schema MediaLiveCreateMultiplexProgramResponse#MultiplexProgram
   */
  readonly multiplexProgram?: MediaLiveMultiplexProgram;

}

/**
 * @schema MediaLiveCreateTagsRequest
 */
export interface MediaLiveCreateTagsRequest {
  /**
   * @schema MediaLiveCreateTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MediaLiveCreateTagsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveDeleteChannelRequest
 */
export interface MediaLiveDeleteChannelRequest {
  /**
   * @schema MediaLiveDeleteChannelRequest#ChannelId
   */
  readonly channelId: string;

}

/**
 * @schema MediaLiveDeleteChannelResponse
 */
export interface MediaLiveDeleteChannelResponse {
  /**
   * @schema MediaLiveDeleteChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveDeleteChannelResponse#CdiInputSpecification
   */
  readonly cdiInputSpecification?: MediaLiveCdiInputSpecification;

  /**
   * @schema MediaLiveDeleteChannelResponse#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveDeleteChannelResponse#Destinations
   */
  readonly destinations?: MediaLiveOutputDestination[];

  /**
   * @schema MediaLiveDeleteChannelResponse#EgressEndpoints
   */
  readonly egressEndpoints?: MediaLiveChannelEgressEndpoint[];

  /**
   * @schema MediaLiveDeleteChannelResponse#EncoderSettings
   */
  readonly encoderSettings?: MediaLiveEncoderSettings;

  /**
   * @schema MediaLiveDeleteChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveDeleteChannelResponse#InputAttachments
   */
  readonly inputAttachments?: MediaLiveInputAttachment[];

  /**
   * @schema MediaLiveDeleteChannelResponse#InputSpecification
   */
  readonly inputSpecification?: MediaLiveInputSpecification;

  /**
   * @schema MediaLiveDeleteChannelResponse#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema MediaLiveDeleteChannelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveDeleteChannelResponse#PipelineDetails
   */
  readonly pipelineDetails?: MediaLivePipelineDetail[];

  /**
   * @schema MediaLiveDeleteChannelResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveDeleteChannelResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveDeleteChannelResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveDeleteChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveDeleteInputRequest
 */
export interface MediaLiveDeleteInputRequest {
  /**
   * @schema MediaLiveDeleteInputRequest#InputId
   */
  readonly inputId: string;

}

/**
 * @schema MediaLiveDeleteInputResponse
 */
export interface MediaLiveDeleteInputResponse {
}

/**
 * @schema MediaLiveDeleteInputSecurityGroupRequest
 */
export interface MediaLiveDeleteInputSecurityGroupRequest {
  /**
   * @schema MediaLiveDeleteInputSecurityGroupRequest#InputSecurityGroupId
   */
  readonly inputSecurityGroupId: string;

}

/**
 * @schema MediaLiveDeleteInputSecurityGroupResponse
 */
export interface MediaLiveDeleteInputSecurityGroupResponse {
}

/**
 * @schema MediaLiveDeleteMultiplexRequest
 */
export interface MediaLiveDeleteMultiplexRequest {
  /**
   * @schema MediaLiveDeleteMultiplexRequest#MultiplexId
   */
  readonly multiplexId: string;

}

/**
 * @schema MediaLiveDeleteMultiplexResponse
 */
export interface MediaLiveDeleteMultiplexResponse {
  /**
   * @schema MediaLiveDeleteMultiplexResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveDeleteMultiplexResponse#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema MediaLiveDeleteMultiplexResponse#Destinations
   */
  readonly destinations?: MediaLiveMultiplexOutputDestination[];

  /**
   * @schema MediaLiveDeleteMultiplexResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveDeleteMultiplexResponse#MultiplexSettings
   */
  readonly multiplexSettings?: MediaLiveMultiplexSettings;

  /**
   * @schema MediaLiveDeleteMultiplexResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveDeleteMultiplexResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveDeleteMultiplexResponse#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema MediaLiveDeleteMultiplexResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveDeleteMultiplexResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveDeleteMultiplexProgramRequest
 */
export interface MediaLiveDeleteMultiplexProgramRequest {
  /**
   * @schema MediaLiveDeleteMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema MediaLiveDeleteMultiplexProgramRequest#ProgramName
   */
  readonly programName: string;

}

/**
 * @schema MediaLiveDeleteMultiplexProgramResponse
 */
export interface MediaLiveDeleteMultiplexProgramResponse {
  /**
   * @schema MediaLiveDeleteMultiplexProgramResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaLiveDeleteMultiplexProgramResponse#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings?: MediaLiveMultiplexProgramSettings;

  /**
   * @schema MediaLiveDeleteMultiplexProgramResponse#PacketIdentifiersMap
   */
  readonly packetIdentifiersMap?: MediaLiveMultiplexProgramPacketIdentifiersMap;

  /**
   * @schema MediaLiveDeleteMultiplexProgramResponse#PipelineDetails
   */
  readonly pipelineDetails?: MediaLiveMultiplexProgramPipelineDetail[];

  /**
   * @schema MediaLiveDeleteMultiplexProgramResponse#ProgramName
   */
  readonly programName?: string;

}

/**
 * @schema MediaLiveDeleteReservationRequest
 */
export interface MediaLiveDeleteReservationRequest {
  /**
   * @schema MediaLiveDeleteReservationRequest#ReservationId
   */
  readonly reservationId: string;

}

/**
 * @schema MediaLiveDeleteReservationResponse
 */
export interface MediaLiveDeleteReservationResponse {
  /**
   * @schema MediaLiveDeleteReservationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#Count
   */
  readonly count?: number;

  /**
   * @schema MediaLiveDeleteReservationResponse#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaLiveDeleteReservationResponse#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#End
   */
  readonly end?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema MediaLiveDeleteReservationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#Region
   */
  readonly region?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#ReservationId
   */
  readonly reservationId?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#ResourceSpecification
   */
  readonly resourceSpecification?: MediaLiveReservationResourceSpecification;

  /**
   * @schema MediaLiveDeleteReservationResponse#Start
   */
  readonly start?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveDeleteReservationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaLiveDeleteReservationResponse#UsagePrice
   */
  readonly usagePrice?: number;

}

/**
 * @schema MediaLiveDeleteScheduleRequest
 */
export interface MediaLiveDeleteScheduleRequest {
  /**
   * @schema MediaLiveDeleteScheduleRequest#ChannelId
   */
  readonly channelId: string;

}

/**
 * @schema MediaLiveDeleteScheduleResponse
 */
export interface MediaLiveDeleteScheduleResponse {
}

/**
 * @schema MediaLiveDeleteTagsRequest
 */
export interface MediaLiveDeleteTagsRequest {
  /**
   * @schema MediaLiveDeleteTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MediaLiveDeleteTagsRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema MediaLiveDescribeChannelRequest
 */
export interface MediaLiveDescribeChannelRequest {
  /**
   * @schema MediaLiveDescribeChannelRequest#ChannelId
   */
  readonly channelId: string;

}

/**
 * @schema MediaLiveDescribeChannelResponse
 */
export interface MediaLiveDescribeChannelResponse {
  /**
   * @schema MediaLiveDescribeChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveDescribeChannelResponse#CdiInputSpecification
   */
  readonly cdiInputSpecification?: MediaLiveCdiInputSpecification;

  /**
   * @schema MediaLiveDescribeChannelResponse#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveDescribeChannelResponse#Destinations
   */
  readonly destinations?: MediaLiveOutputDestination[];

  /**
   * @schema MediaLiveDescribeChannelResponse#EgressEndpoints
   */
  readonly egressEndpoints?: MediaLiveChannelEgressEndpoint[];

  /**
   * @schema MediaLiveDescribeChannelResponse#EncoderSettings
   */
  readonly encoderSettings?: MediaLiveEncoderSettings;

  /**
   * @schema MediaLiveDescribeChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveDescribeChannelResponse#InputAttachments
   */
  readonly inputAttachments?: MediaLiveInputAttachment[];

  /**
   * @schema MediaLiveDescribeChannelResponse#InputSpecification
   */
  readonly inputSpecification?: MediaLiveInputSpecification;

  /**
   * @schema MediaLiveDescribeChannelResponse#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema MediaLiveDescribeChannelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveDescribeChannelResponse#PipelineDetails
   */
  readonly pipelineDetails?: MediaLivePipelineDetail[];

  /**
   * @schema MediaLiveDescribeChannelResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveDescribeChannelResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveDescribeChannelResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveDescribeChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveDescribeInputRequest
 */
export interface MediaLiveDescribeInputRequest {
  /**
   * @schema MediaLiveDescribeInputRequest#InputId
   */
  readonly inputId: string;

}

/**
 * @schema MediaLiveDescribeInputResponse
 */
export interface MediaLiveDescribeInputResponse {
  /**
   * @schema MediaLiveDescribeInputResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveDescribeInputResponse#AttachedChannels
   */
  readonly attachedChannels?: string[];

  /**
   * @schema MediaLiveDescribeInputResponse#Destinations
   */
  readonly destinations?: MediaLiveInputDestination[];

  /**
   * @schema MediaLiveDescribeInputResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveDescribeInputResponse#InputClass
   */
  readonly inputClass?: string;

  /**
   * @schema MediaLiveDescribeInputResponse#InputDevices
   */
  readonly inputDevices?: MediaLiveInputDeviceSettings[];

  /**
   * @schema MediaLiveDescribeInputResponse#InputSourceType
   */
  readonly inputSourceType?: string;

  /**
   * @schema MediaLiveDescribeInputResponse#MediaConnectFlows
   */
  readonly mediaConnectFlows?: MediaLiveMediaConnectFlow[];

  /**
   * @schema MediaLiveDescribeInputResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveDescribeInputResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveDescribeInputResponse#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema MediaLiveDescribeInputResponse#Sources
   */
  readonly sources?: MediaLiveInputSource[];

  /**
   * @schema MediaLiveDescribeInputResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveDescribeInputResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaLiveDescribeInputResponse#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaLiveDescribeInputDeviceRequest
 */
export interface MediaLiveDescribeInputDeviceRequest {
  /**
   * @schema MediaLiveDescribeInputDeviceRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

}

/**
 * @schema MediaLiveDescribeInputDeviceResponse
 */
export interface MediaLiveDescribeInputDeviceResponse {
  /**
   * @schema MediaLiveDescribeInputDeviceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#DeviceSettingsSyncState
   */
  readonly deviceSettingsSyncState?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#DeviceUpdateStatus
   */
  readonly deviceUpdateStatus?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#HdDeviceSettings
   */
  readonly hdDeviceSettings?: MediaLiveInputDeviceHdSettings;

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#NetworkSettings
   */
  readonly networkSettings?: MediaLiveInputDeviceNetworkSettings;

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaLiveDescribeInputDeviceThumbnailRequest
 */
export interface MediaLiveDescribeInputDeviceThumbnailRequest {
  /**
   * @schema MediaLiveDescribeInputDeviceThumbnailRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

  /**
   * @schema MediaLiveDescribeInputDeviceThumbnailRequest#Accept
   */
  readonly accept: string;

}

/**
 * @schema MediaLiveDescribeInputDeviceThumbnailResponse
 */
export interface MediaLiveDescribeInputDeviceThumbnailResponse {
  /**
   * @schema MediaLiveDescribeInputDeviceThumbnailResponse#Body
   */
  readonly body?: any;

  /**
   * @schema MediaLiveDescribeInputDeviceThumbnailResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceThumbnailResponse#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema MediaLiveDescribeInputDeviceThumbnailResponse#ETag
   */
  readonly eTag?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceThumbnailResponse#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema MediaLiveDescribeInputSecurityGroupRequest
 */
export interface MediaLiveDescribeInputSecurityGroupRequest {
  /**
   * @schema MediaLiveDescribeInputSecurityGroupRequest#InputSecurityGroupId
   */
  readonly inputSecurityGroupId: string;

}

/**
 * @schema MediaLiveDescribeInputSecurityGroupResponse
 */
export interface MediaLiveDescribeInputSecurityGroupResponse {
  /**
   * @schema MediaLiveDescribeInputSecurityGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveDescribeInputSecurityGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveDescribeInputSecurityGroupResponse#Inputs
   */
  readonly inputs?: string[];

  /**
   * @schema MediaLiveDescribeInputSecurityGroupResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveDescribeInputSecurityGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaLiveDescribeInputSecurityGroupResponse#WhitelistRules
   */
  readonly whitelistRules?: MediaLiveInputWhitelistRule[];

}

/**
 * @schema MediaLiveDescribeMultiplexRequest
 */
export interface MediaLiveDescribeMultiplexRequest {
  /**
   * @schema MediaLiveDescribeMultiplexRequest#MultiplexId
   */
  readonly multiplexId: string;

}

/**
 * @schema MediaLiveDescribeMultiplexResponse
 */
export interface MediaLiveDescribeMultiplexResponse {
  /**
   * @schema MediaLiveDescribeMultiplexResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveDescribeMultiplexResponse#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema MediaLiveDescribeMultiplexResponse#Destinations
   */
  readonly destinations?: MediaLiveMultiplexOutputDestination[];

  /**
   * @schema MediaLiveDescribeMultiplexResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveDescribeMultiplexResponse#MultiplexSettings
   */
  readonly multiplexSettings?: MediaLiveMultiplexSettings;

  /**
   * @schema MediaLiveDescribeMultiplexResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveDescribeMultiplexResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveDescribeMultiplexResponse#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema MediaLiveDescribeMultiplexResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveDescribeMultiplexResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveDescribeMultiplexProgramRequest
 */
export interface MediaLiveDescribeMultiplexProgramRequest {
  /**
   * @schema MediaLiveDescribeMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema MediaLiveDescribeMultiplexProgramRequest#ProgramName
   */
  readonly programName: string;

}

/**
 * @schema MediaLiveDescribeMultiplexProgramResponse
 */
export interface MediaLiveDescribeMultiplexProgramResponse {
  /**
   * @schema MediaLiveDescribeMultiplexProgramResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaLiveDescribeMultiplexProgramResponse#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings?: MediaLiveMultiplexProgramSettings;

  /**
   * @schema MediaLiveDescribeMultiplexProgramResponse#PacketIdentifiersMap
   */
  readonly packetIdentifiersMap?: MediaLiveMultiplexProgramPacketIdentifiersMap;

  /**
   * @schema MediaLiveDescribeMultiplexProgramResponse#PipelineDetails
   */
  readonly pipelineDetails?: MediaLiveMultiplexProgramPipelineDetail[];

  /**
   * @schema MediaLiveDescribeMultiplexProgramResponse#ProgramName
   */
  readonly programName?: string;

}

/**
 * @schema MediaLiveDescribeOfferingRequest
 */
export interface MediaLiveDescribeOfferingRequest {
  /**
   * @schema MediaLiveDescribeOfferingRequest#OfferingId
   */
  readonly offeringId: string;

}

/**
 * @schema MediaLiveDescribeOfferingResponse
 */
export interface MediaLiveDescribeOfferingResponse {
  /**
   * @schema MediaLiveDescribeOfferingResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveDescribeOfferingResponse#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema MediaLiveDescribeOfferingResponse#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaLiveDescribeOfferingResponse#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema MediaLiveDescribeOfferingResponse#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema MediaLiveDescribeOfferingResponse#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema MediaLiveDescribeOfferingResponse#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema MediaLiveDescribeOfferingResponse#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema MediaLiveDescribeOfferingResponse#Region
   */
  readonly region?: string;

  /**
   * @schema MediaLiveDescribeOfferingResponse#ResourceSpecification
   */
  readonly resourceSpecification?: MediaLiveReservationResourceSpecification;

  /**
   * @schema MediaLiveDescribeOfferingResponse#UsagePrice
   */
  readonly usagePrice?: number;

}

/**
 * @schema MediaLiveDescribeReservationRequest
 */
export interface MediaLiveDescribeReservationRequest {
  /**
   * @schema MediaLiveDescribeReservationRequest#ReservationId
   */
  readonly reservationId: string;

}

/**
 * @schema MediaLiveDescribeReservationResponse
 */
export interface MediaLiveDescribeReservationResponse {
  /**
   * @schema MediaLiveDescribeReservationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#Count
   */
  readonly count?: number;

  /**
   * @schema MediaLiveDescribeReservationResponse#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaLiveDescribeReservationResponse#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#End
   */
  readonly end?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema MediaLiveDescribeReservationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#Region
   */
  readonly region?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#ReservationId
   */
  readonly reservationId?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#ResourceSpecification
   */
  readonly resourceSpecification?: MediaLiveReservationResourceSpecification;

  /**
   * @schema MediaLiveDescribeReservationResponse#Start
   */
  readonly start?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveDescribeReservationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaLiveDescribeReservationResponse#UsagePrice
   */
  readonly usagePrice?: number;

}

/**
 * @schema MediaLiveDescribeScheduleRequest
 */
export interface MediaLiveDescribeScheduleRequest {
  /**
   * @schema MediaLiveDescribeScheduleRequest#ChannelId
   */
  readonly channelId: string;

  /**
   * @schema MediaLiveDescribeScheduleRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaLiveDescribeScheduleRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveDescribeScheduleResponse
 */
export interface MediaLiveDescribeScheduleResponse {
  /**
   * @schema MediaLiveDescribeScheduleResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaLiveDescribeScheduleResponse#ScheduleActions
   */
  readonly scheduleActions?: MediaLiveScheduleAction[];

}

/**
 * @schema MediaLiveListChannelsRequest
 */
export interface MediaLiveListChannelsRequest {
  /**
   * @schema MediaLiveListChannelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaLiveListChannelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListChannelsResponse
 */
export interface MediaLiveListChannelsResponse {
  /**
   * @schema MediaLiveListChannelsResponse#Channels
   */
  readonly channels?: MediaLiveChannelSummary[];

  /**
   * @schema MediaLiveListChannelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListInputDeviceTransfersRequest
 */
export interface MediaLiveListInputDeviceTransfersRequest {
  /**
   * @schema MediaLiveListInputDeviceTransfersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaLiveListInputDeviceTransfersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaLiveListInputDeviceTransfersRequest#TransferType
   */
  readonly transferType: string;

}

/**
 * @schema MediaLiveListInputDeviceTransfersResponse
 */
export interface MediaLiveListInputDeviceTransfersResponse {
  /**
   * @schema MediaLiveListInputDeviceTransfersResponse#InputDeviceTransfers
   */
  readonly inputDeviceTransfers?: MediaLiveTransferringInputDeviceSummary[];

  /**
   * @schema MediaLiveListInputDeviceTransfersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListInputDevicesRequest
 */
export interface MediaLiveListInputDevicesRequest {
  /**
   * @schema MediaLiveListInputDevicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaLiveListInputDevicesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListInputDevicesResponse
 */
export interface MediaLiveListInputDevicesResponse {
  /**
   * @schema MediaLiveListInputDevicesResponse#InputDevices
   */
  readonly inputDevices?: MediaLiveInputDeviceSummary[];

  /**
   * @schema MediaLiveListInputDevicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListInputSecurityGroupsRequest
 */
export interface MediaLiveListInputSecurityGroupsRequest {
  /**
   * @schema MediaLiveListInputSecurityGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaLiveListInputSecurityGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListInputSecurityGroupsResponse
 */
export interface MediaLiveListInputSecurityGroupsResponse {
  /**
   * @schema MediaLiveListInputSecurityGroupsResponse#InputSecurityGroups
   */
  readonly inputSecurityGroups?: MediaLiveInputSecurityGroup[];

  /**
   * @schema MediaLiveListInputSecurityGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListInputsRequest
 */
export interface MediaLiveListInputsRequest {
  /**
   * @schema MediaLiveListInputsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaLiveListInputsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListInputsResponse
 */
export interface MediaLiveListInputsResponse {
  /**
   * @schema MediaLiveListInputsResponse#Inputs
   */
  readonly inputs?: MediaLiveInput[];

  /**
   * @schema MediaLiveListInputsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListMultiplexProgramsRequest
 */
export interface MediaLiveListMultiplexProgramsRequest {
  /**
   * @schema MediaLiveListMultiplexProgramsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaLiveListMultiplexProgramsRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema MediaLiveListMultiplexProgramsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListMultiplexProgramsResponse
 */
export interface MediaLiveListMultiplexProgramsResponse {
  /**
   * @schema MediaLiveListMultiplexProgramsResponse#MultiplexPrograms
   */
  readonly multiplexPrograms?: MediaLiveMultiplexProgramSummary[];

  /**
   * @schema MediaLiveListMultiplexProgramsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListMultiplexesRequest
 */
export interface MediaLiveListMultiplexesRequest {
  /**
   * @schema MediaLiveListMultiplexesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaLiveListMultiplexesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListMultiplexesResponse
 */
export interface MediaLiveListMultiplexesResponse {
  /**
   * @schema MediaLiveListMultiplexesResponse#Multiplexes
   */
  readonly multiplexes?: MediaLiveMultiplexSummary[];

  /**
   * @schema MediaLiveListMultiplexesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaLiveListOfferingsRequest
 */
export interface MediaLiveListOfferingsRequest {
  /**
   * @schema MediaLiveListOfferingsRequest#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveListOfferingsRequest#ChannelConfiguration
   */
  readonly channelConfiguration?: string;

  /**
   * @schema MediaLiveListOfferingsRequest#Codec
   */
  readonly codec?: string;

  /**
   * @schema MediaLiveListOfferingsRequest#Duration
   */
  readonly duration?: string;

  /**
   * @schema MediaLiveListOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaLiveListOfferingsRequest#MaximumBitrate
   */
  readonly maximumBitrate?: string;

  /**
   * @schema MediaLiveListOfferingsRequest#MaximumFramerate
   */
  readonly maximumFramerate?: string;

  /**
   * @schema MediaLiveListOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaLiveListOfferingsRequest#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema MediaLiveListOfferingsRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema MediaLiveListOfferingsRequest#SpecialFeature
   */
  readonly specialFeature?: string;

  /**
   * @schema MediaLiveListOfferingsRequest#VideoQuality
   */
  readonly videoQuality?: string;

}

/**
 * @schema MediaLiveListOfferingsResponse
 */
export interface MediaLiveListOfferingsResponse {
  /**
   * @schema MediaLiveListOfferingsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaLiveListOfferingsResponse#Offerings
   */
  readonly offerings?: MediaLiveOffering[];

}

/**
 * @schema MediaLiveListReservationsRequest
 */
export interface MediaLiveListReservationsRequest {
  /**
   * @schema MediaLiveListReservationsRequest#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveListReservationsRequest#Codec
   */
  readonly codec?: string;

  /**
   * @schema MediaLiveListReservationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaLiveListReservationsRequest#MaximumBitrate
   */
  readonly maximumBitrate?: string;

  /**
   * @schema MediaLiveListReservationsRequest#MaximumFramerate
   */
  readonly maximumFramerate?: string;

  /**
   * @schema MediaLiveListReservationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaLiveListReservationsRequest#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema MediaLiveListReservationsRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema MediaLiveListReservationsRequest#SpecialFeature
   */
  readonly specialFeature?: string;

  /**
   * @schema MediaLiveListReservationsRequest#VideoQuality
   */
  readonly videoQuality?: string;

}

/**
 * @schema MediaLiveListReservationsResponse
 */
export interface MediaLiveListReservationsResponse {
  /**
   * @schema MediaLiveListReservationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaLiveListReservationsResponse#Reservations
   */
  readonly reservations?: MediaLiveReservation[];

}

/**
 * @schema MediaLiveListTagsForResourceRequest
 */
export interface MediaLiveListTagsForResourceRequest {
  /**
   * @schema MediaLiveListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema MediaLiveListTagsForResourceResponse
 */
export interface MediaLiveListTagsForResourceResponse {
  /**
   * @schema MediaLiveListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLivePurchaseOfferingRequest
 */
export interface MediaLivePurchaseOfferingRequest {
  /**
   * @schema MediaLivePurchaseOfferingRequest#Count
   */
  readonly count: number;

  /**
   * @schema MediaLivePurchaseOfferingRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLivePurchaseOfferingRequest#OfferingId
   */
  readonly offeringId: string;

  /**
   * @schema MediaLivePurchaseOfferingRequest#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema MediaLivePurchaseOfferingRequest#Start
   */
  readonly start?: string;

  /**
   * @schema MediaLivePurchaseOfferingRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLivePurchaseOfferingResponse
 */
export interface MediaLivePurchaseOfferingResponse {
  /**
   * @schema MediaLivePurchaseOfferingResponse#Reservation
   */
  readonly reservation?: MediaLiveReservation;

}

/**
 * @schema MediaLiveRejectInputDeviceTransferRequest
 */
export interface MediaLiveRejectInputDeviceTransferRequest {
  /**
   * @schema MediaLiveRejectInputDeviceTransferRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

}

/**
 * @schema MediaLiveRejectInputDeviceTransferResponse
 */
export interface MediaLiveRejectInputDeviceTransferResponse {
}

/**
 * @schema MediaLiveStartChannelRequest
 */
export interface MediaLiveStartChannelRequest {
  /**
   * @schema MediaLiveStartChannelRequest#ChannelId
   */
  readonly channelId: string;

}

/**
 * @schema MediaLiveStartChannelResponse
 */
export interface MediaLiveStartChannelResponse {
  /**
   * @schema MediaLiveStartChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveStartChannelResponse#CdiInputSpecification
   */
  readonly cdiInputSpecification?: MediaLiveCdiInputSpecification;

  /**
   * @schema MediaLiveStartChannelResponse#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveStartChannelResponse#Destinations
   */
  readonly destinations?: MediaLiveOutputDestination[];

  /**
   * @schema MediaLiveStartChannelResponse#EgressEndpoints
   */
  readonly egressEndpoints?: MediaLiveChannelEgressEndpoint[];

  /**
   * @schema MediaLiveStartChannelResponse#EncoderSettings
   */
  readonly encoderSettings?: MediaLiveEncoderSettings;

  /**
   * @schema MediaLiveStartChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveStartChannelResponse#InputAttachments
   */
  readonly inputAttachments?: MediaLiveInputAttachment[];

  /**
   * @schema MediaLiveStartChannelResponse#InputSpecification
   */
  readonly inputSpecification?: MediaLiveInputSpecification;

  /**
   * @schema MediaLiveStartChannelResponse#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema MediaLiveStartChannelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveStartChannelResponse#PipelineDetails
   */
  readonly pipelineDetails?: MediaLivePipelineDetail[];

  /**
   * @schema MediaLiveStartChannelResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveStartChannelResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveStartChannelResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveStartChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveStartMultiplexRequest
 */
export interface MediaLiveStartMultiplexRequest {
  /**
   * @schema MediaLiveStartMultiplexRequest#MultiplexId
   */
  readonly multiplexId: string;

}

/**
 * @schema MediaLiveStartMultiplexResponse
 */
export interface MediaLiveStartMultiplexResponse {
  /**
   * @schema MediaLiveStartMultiplexResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveStartMultiplexResponse#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema MediaLiveStartMultiplexResponse#Destinations
   */
  readonly destinations?: MediaLiveMultiplexOutputDestination[];

  /**
   * @schema MediaLiveStartMultiplexResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveStartMultiplexResponse#MultiplexSettings
   */
  readonly multiplexSettings?: MediaLiveMultiplexSettings;

  /**
   * @schema MediaLiveStartMultiplexResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveStartMultiplexResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveStartMultiplexResponse#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema MediaLiveStartMultiplexResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveStartMultiplexResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveStopChannelRequest
 */
export interface MediaLiveStopChannelRequest {
  /**
   * @schema MediaLiveStopChannelRequest#ChannelId
   */
  readonly channelId: string;

}

/**
 * @schema MediaLiveStopChannelResponse
 */
export interface MediaLiveStopChannelResponse {
  /**
   * @schema MediaLiveStopChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveStopChannelResponse#CdiInputSpecification
   */
  readonly cdiInputSpecification?: MediaLiveCdiInputSpecification;

  /**
   * @schema MediaLiveStopChannelResponse#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveStopChannelResponse#Destinations
   */
  readonly destinations?: MediaLiveOutputDestination[];

  /**
   * @schema MediaLiveStopChannelResponse#EgressEndpoints
   */
  readonly egressEndpoints?: MediaLiveChannelEgressEndpoint[];

  /**
   * @schema MediaLiveStopChannelResponse#EncoderSettings
   */
  readonly encoderSettings?: MediaLiveEncoderSettings;

  /**
   * @schema MediaLiveStopChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveStopChannelResponse#InputAttachments
   */
  readonly inputAttachments?: MediaLiveInputAttachment[];

  /**
   * @schema MediaLiveStopChannelResponse#InputSpecification
   */
  readonly inputSpecification?: MediaLiveInputSpecification;

  /**
   * @schema MediaLiveStopChannelResponse#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema MediaLiveStopChannelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveStopChannelResponse#PipelineDetails
   */
  readonly pipelineDetails?: MediaLivePipelineDetail[];

  /**
   * @schema MediaLiveStopChannelResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveStopChannelResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveStopChannelResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveStopChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveStopMultiplexRequest
 */
export interface MediaLiveStopMultiplexRequest {
  /**
   * @schema MediaLiveStopMultiplexRequest#MultiplexId
   */
  readonly multiplexId: string;

}

/**
 * @schema MediaLiveStopMultiplexResponse
 */
export interface MediaLiveStopMultiplexResponse {
  /**
   * @schema MediaLiveStopMultiplexResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveStopMultiplexResponse#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema MediaLiveStopMultiplexResponse#Destinations
   */
  readonly destinations?: MediaLiveMultiplexOutputDestination[];

  /**
   * @schema MediaLiveStopMultiplexResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveStopMultiplexResponse#MultiplexSettings
   */
  readonly multiplexSettings?: MediaLiveMultiplexSettings;

  /**
   * @schema MediaLiveStopMultiplexResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveStopMultiplexResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveStopMultiplexResponse#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema MediaLiveStopMultiplexResponse#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveStopMultiplexResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveTransferInputDeviceRequest
 */
export interface MediaLiveTransferInputDeviceRequest {
  /**
   * @schema MediaLiveTransferInputDeviceRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

  /**
   * @schema MediaLiveTransferInputDeviceRequest#TargetCustomerId
   */
  readonly targetCustomerId?: string;

  /**
   * @schema MediaLiveTransferInputDeviceRequest#TransferMessage
   */
  readonly transferMessage?: string;

}

/**
 * @schema MediaLiveTransferInputDeviceResponse
 */
export interface MediaLiveTransferInputDeviceResponse {
}

/**
 * @schema MediaLiveUpdateChannelRequest
 */
export interface MediaLiveUpdateChannelRequest {
  /**
   * @schema MediaLiveUpdateChannelRequest#CdiInputSpecification
   */
  readonly cdiInputSpecification?: MediaLiveCdiInputSpecification;

  /**
   * @schema MediaLiveUpdateChannelRequest#ChannelId
   */
  readonly channelId: string;

  /**
   * @schema MediaLiveUpdateChannelRequest#Destinations
   */
  readonly destinations?: MediaLiveOutputDestination[];

  /**
   * @schema MediaLiveUpdateChannelRequest#EncoderSettings
   */
  readonly encoderSettings?: MediaLiveEncoderSettings;

  /**
   * @schema MediaLiveUpdateChannelRequest#InputAttachments
   */
  readonly inputAttachments?: MediaLiveInputAttachment[];

  /**
   * @schema MediaLiveUpdateChannelRequest#InputSpecification
   */
  readonly inputSpecification?: MediaLiveInputSpecification;

  /**
   * @schema MediaLiveUpdateChannelRequest#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema MediaLiveUpdateChannelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveUpdateChannelRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema MediaLiveUpdateChannelResponse
 */
export interface MediaLiveUpdateChannelResponse {
  /**
   * @schema MediaLiveUpdateChannelResponse#Channel
   */
  readonly channel?: MediaLiveChannel;

}

/**
 * @schema MediaLiveUpdateChannelClassRequest
 */
export interface MediaLiveUpdateChannelClassRequest {
  /**
   * @schema MediaLiveUpdateChannelClassRequest#ChannelClass
   */
  readonly channelClass: string;

  /**
   * @schema MediaLiveUpdateChannelClassRequest#ChannelId
   */
  readonly channelId: string;

  /**
   * @schema MediaLiveUpdateChannelClassRequest#Destinations
   */
  readonly destinations?: MediaLiveOutputDestination[];

}

/**
 * @schema MediaLiveUpdateChannelClassResponse
 */
export interface MediaLiveUpdateChannelClassResponse {
  /**
   * @schema MediaLiveUpdateChannelClassResponse#Channel
   */
  readonly channel?: MediaLiveChannel;

}

/**
 * @schema MediaLiveUpdateInputRequest
 */
export interface MediaLiveUpdateInputRequest {
  /**
   * @schema MediaLiveUpdateInputRequest#Destinations
   */
  readonly destinations?: MediaLiveInputDestinationRequest[];

  /**
   * @schema MediaLiveUpdateInputRequest#InputDevices
   */
  readonly inputDevices?: MediaLiveInputDeviceRequest[];

  /**
   * @schema MediaLiveUpdateInputRequest#InputId
   */
  readonly inputId: string;

  /**
   * @schema MediaLiveUpdateInputRequest#InputSecurityGroups
   */
  readonly inputSecurityGroups?: string[];

  /**
   * @schema MediaLiveUpdateInputRequest#MediaConnectFlows
   */
  readonly mediaConnectFlows?: MediaLiveMediaConnectFlowRequest[];

  /**
   * @schema MediaLiveUpdateInputRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveUpdateInputRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveUpdateInputRequest#Sources
   */
  readonly sources?: MediaLiveInputSourceRequest[];

}

/**
 * @schema MediaLiveUpdateInputResponse
 */
export interface MediaLiveUpdateInputResponse {
  /**
   * @schema MediaLiveUpdateInputResponse#Input
   */
  readonly input?: MediaLiveInput;

}

/**
 * @schema MediaLiveUpdateInputDeviceRequest
 */
export interface MediaLiveUpdateInputDeviceRequest {
  /**
   * @schema MediaLiveUpdateInputDeviceRequest#HdDeviceSettings
   */
  readonly hdDeviceSettings?: MediaLiveInputDeviceConfigurableSettings;

  /**
   * @schema MediaLiveUpdateInputDeviceRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

  /**
   * @schema MediaLiveUpdateInputDeviceRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema MediaLiveUpdateInputDeviceResponse
 */
export interface MediaLiveUpdateInputDeviceResponse {
  /**
   * @schema MediaLiveUpdateInputDeviceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#DeviceSettingsSyncState
   */
  readonly deviceSettingsSyncState?: string;

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#DeviceUpdateStatus
   */
  readonly deviceUpdateStatus?: string;

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#HdDeviceSettings
   */
  readonly hdDeviceSettings?: MediaLiveInputDeviceHdSettings;

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#NetworkSettings
   */
  readonly networkSettings?: MediaLiveInputDeviceNetworkSettings;

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaLiveUpdateInputSecurityGroupRequest
 */
export interface MediaLiveUpdateInputSecurityGroupRequest {
  /**
   * @schema MediaLiveUpdateInputSecurityGroupRequest#InputSecurityGroupId
   */
  readonly inputSecurityGroupId: string;

  /**
   * @schema MediaLiveUpdateInputSecurityGroupRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaLiveUpdateInputSecurityGroupRequest#WhitelistRules
   */
  readonly whitelistRules?: MediaLiveInputWhitelistRuleCidr[];

}

/**
 * @schema MediaLiveUpdateInputSecurityGroupResponse
 */
export interface MediaLiveUpdateInputSecurityGroupResponse {
  /**
   * @schema MediaLiveUpdateInputSecurityGroupResponse#SecurityGroup
   */
  readonly securityGroup?: MediaLiveInputSecurityGroup;

}

/**
 * @schema MediaLiveUpdateMultiplexRequest
 */
export interface MediaLiveUpdateMultiplexRequest {
  /**
   * @schema MediaLiveUpdateMultiplexRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema MediaLiveUpdateMultiplexRequest#MultiplexSettings
   */
  readonly multiplexSettings?: MediaLiveMultiplexSettings;

  /**
   * @schema MediaLiveUpdateMultiplexRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema MediaLiveUpdateMultiplexResponse
 */
export interface MediaLiveUpdateMultiplexResponse {
  /**
   * @schema MediaLiveUpdateMultiplexResponse#Multiplex
   */
  readonly multiplex?: MediaLiveMultiplex;

}

/**
 * @schema MediaLiveUpdateMultiplexProgramRequest
 */
export interface MediaLiveUpdateMultiplexProgramRequest {
  /**
   * @schema MediaLiveUpdateMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema MediaLiveUpdateMultiplexProgramRequest#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings?: MediaLiveMultiplexProgramSettings;

  /**
   * @schema MediaLiveUpdateMultiplexProgramRequest#ProgramName
   */
  readonly programName: string;

}

/**
 * @schema MediaLiveUpdateMultiplexProgramResponse
 */
export interface MediaLiveUpdateMultiplexProgramResponse {
  /**
   * @schema MediaLiveUpdateMultiplexProgramResponse#MultiplexProgram
   */
  readonly multiplexProgram?: MediaLiveMultiplexProgram;

}

/**
 * @schema MediaLiveUpdateReservationRequest
 */
export interface MediaLiveUpdateReservationRequest {
  /**
   * @schema MediaLiveUpdateReservationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveUpdateReservationRequest#ReservationId
   */
  readonly reservationId: string;

}

/**
 * @schema MediaLiveUpdateReservationResponse
 */
export interface MediaLiveUpdateReservationResponse {
  /**
   * @schema MediaLiveUpdateReservationResponse#Reservation
   */
  readonly reservation?: MediaLiveReservation;

}

/**
 * @schema MediaLiveBatchFailedResultModel
 */
export interface MediaLiveBatchFailedResultModel {
  /**
   * @schema MediaLiveBatchFailedResultModel#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveBatchFailedResultModel#Code
   */
  readonly code?: string;

  /**
   * @schema MediaLiveBatchFailedResultModel#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveBatchFailedResultModel#Message
   */
  readonly message?: string;

}

/**
 * @schema MediaLiveBatchSuccessfulResultModel
 */
export interface MediaLiveBatchSuccessfulResultModel {
  /**
   * @schema MediaLiveBatchSuccessfulResultModel#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveBatchSuccessfulResultModel#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveBatchSuccessfulResultModel#State
   */
  readonly state?: string;

}

/**
 * @schema MediaLiveBatchScheduleActionCreateRequest
 */
export interface MediaLiveBatchScheduleActionCreateRequest {
  /**
   * @schema MediaLiveBatchScheduleActionCreateRequest#ScheduleActions
   */
  readonly scheduleActions: MediaLiveScheduleAction[];

}

/**
 * @schema MediaLiveBatchScheduleActionDeleteRequest
 */
export interface MediaLiveBatchScheduleActionDeleteRequest {
  /**
   * @schema MediaLiveBatchScheduleActionDeleteRequest#ActionNames
   */
  readonly actionNames: string[];

}

/**
 * @schema MediaLiveBatchScheduleActionCreateResult
 */
export interface MediaLiveBatchScheduleActionCreateResult {
  /**
   * @schema MediaLiveBatchScheduleActionCreateResult#ScheduleActions
   */
  readonly scheduleActions: MediaLiveScheduleAction[];

}

/**
 * @schema MediaLiveBatchScheduleActionDeleteResult
 */
export interface MediaLiveBatchScheduleActionDeleteResult {
  /**
   * @schema MediaLiveBatchScheduleActionDeleteResult#ScheduleActions
   */
  readonly scheduleActions: MediaLiveScheduleAction[];

}

/**
 * @schema MediaLiveCdiInputSpecification
 */
export interface MediaLiveCdiInputSpecification {
  /**
   * @schema MediaLiveCdiInputSpecification#Resolution
   */
  readonly resolution?: string;

}

/**
 * @schema MediaLiveOutputDestination
 */
export interface MediaLiveOutputDestination {
  /**
   * @schema MediaLiveOutputDestination#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveOutputDestination#MediaPackageSettings
   */
  readonly mediaPackageSettings?: MediaLiveMediaPackageOutputDestinationSettings[];

  /**
   * @schema MediaLiveOutputDestination#MultiplexSettings
   */
  readonly multiplexSettings?: MediaLiveMultiplexProgramChannelDestinationSettings;

  /**
   * @schema MediaLiveOutputDestination#Settings
   */
  readonly settings?: MediaLiveOutputDestinationSettings[];

}

/**
 * @schema MediaLiveEncoderSettings
 */
export interface MediaLiveEncoderSettings {
  /**
   * @schema MediaLiveEncoderSettings#AudioDescriptions
   */
  readonly audioDescriptions: MediaLiveAudioDescription[];

  /**
   * @schema MediaLiveEncoderSettings#AvailBlanking
   */
  readonly availBlanking?: MediaLiveAvailBlanking;

  /**
   * @schema MediaLiveEncoderSettings#AvailConfiguration
   */
  readonly availConfiguration?: MediaLiveAvailConfiguration;

  /**
   * @schema MediaLiveEncoderSettings#BlackoutSlate
   */
  readonly blackoutSlate?: MediaLiveBlackoutSlate;

  /**
   * @schema MediaLiveEncoderSettings#CaptionDescriptions
   */
  readonly captionDescriptions?: MediaLiveCaptionDescription[];

  /**
   * @schema MediaLiveEncoderSettings#FeatureActivations
   */
  readonly featureActivations?: MediaLiveFeatureActivations;

  /**
   * @schema MediaLiveEncoderSettings#GlobalConfiguration
   */
  readonly globalConfiguration?: MediaLiveGlobalConfiguration;

  /**
   * @schema MediaLiveEncoderSettings#NielsenConfiguration
   */
  readonly nielsenConfiguration?: MediaLiveNielsenConfiguration;

  /**
   * @schema MediaLiveEncoderSettings#OutputGroups
   */
  readonly outputGroups: MediaLiveOutputGroup[];

  /**
   * @schema MediaLiveEncoderSettings#TimecodeConfig
   */
  readonly timecodeConfig: MediaLiveTimecodeConfig;

  /**
   * @schema MediaLiveEncoderSettings#VideoDescriptions
   */
  readonly videoDescriptions: MediaLiveVideoDescription[];

}

/**
 * @schema MediaLiveInputAttachment
 */
export interface MediaLiveInputAttachment {
  /**
   * @schema MediaLiveInputAttachment#AutomaticInputFailoverSettings
   */
  readonly automaticInputFailoverSettings?: MediaLiveAutomaticInputFailoverSettings;

  /**
   * @schema MediaLiveInputAttachment#InputAttachmentName
   */
  readonly inputAttachmentName?: string;

  /**
   * @schema MediaLiveInputAttachment#InputId
   */
  readonly inputId?: string;

  /**
   * @schema MediaLiveInputAttachment#InputSettings
   */
  readonly inputSettings?: MediaLiveInputSettings;

}

/**
 * @schema MediaLiveInputSpecification
 */
export interface MediaLiveInputSpecification {
  /**
   * @schema MediaLiveInputSpecification#Codec
   */
  readonly codec?: string;

  /**
   * @schema MediaLiveInputSpecification#MaximumBitrate
   */
  readonly maximumBitrate?: string;

  /**
   * @schema MediaLiveInputSpecification#Resolution
   */
  readonly resolution?: string;

}

/**
 * @schema MediaLiveChannel
 */
export interface MediaLiveChannel {
  /**
   * @schema MediaLiveChannel#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveChannel#CdiInputSpecification
   */
  readonly cdiInputSpecification?: MediaLiveCdiInputSpecification;

  /**
   * @schema MediaLiveChannel#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveChannel#Destinations
   */
  readonly destinations?: MediaLiveOutputDestination[];

  /**
   * @schema MediaLiveChannel#EgressEndpoints
   */
  readonly egressEndpoints?: MediaLiveChannelEgressEndpoint[];

  /**
   * @schema MediaLiveChannel#EncoderSettings
   */
  readonly encoderSettings?: MediaLiveEncoderSettings;

  /**
   * @schema MediaLiveChannel#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveChannel#InputAttachments
   */
  readonly inputAttachments?: MediaLiveInputAttachment[];

  /**
   * @schema MediaLiveChannel#InputSpecification
   */
  readonly inputSpecification?: MediaLiveInputSpecification;

  /**
   * @schema MediaLiveChannel#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema MediaLiveChannel#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveChannel#PipelineDetails
   */
  readonly pipelineDetails?: MediaLivePipelineDetail[];

  /**
   * @schema MediaLiveChannel#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveChannel#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveChannel#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveChannel#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveInputDestinationRequest
 */
export interface MediaLiveInputDestinationRequest {
  /**
   * @schema MediaLiveInputDestinationRequest#StreamName
   */
  readonly streamName?: string;

}

/**
 * @schema MediaLiveInputDeviceSettings
 */
export interface MediaLiveInputDeviceSettings {
  /**
   * @schema MediaLiveInputDeviceSettings#Id
   */
  readonly id?: string;

}

/**
 * @schema MediaLiveMediaConnectFlowRequest
 */
export interface MediaLiveMediaConnectFlowRequest {
  /**
   * @schema MediaLiveMediaConnectFlowRequest#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * @schema MediaLiveInputSourceRequest
 */
export interface MediaLiveInputSourceRequest {
  /**
   * @schema MediaLiveInputSourceRequest#PasswordParam
   */
  readonly passwordParam?: string;

  /**
   * @schema MediaLiveInputSourceRequest#Url
   */
  readonly url?: string;

  /**
   * @schema MediaLiveInputSourceRequest#Username
   */
  readonly username?: string;

}

/**
 * @schema MediaLiveInputVpcRequest
 */
export interface MediaLiveInputVpcRequest {
  /**
   * @schema MediaLiveInputVpcRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema MediaLiveInputVpcRequest#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema MediaLiveInput
 */
export interface MediaLiveInput {
  /**
   * @schema MediaLiveInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveInput#AttachedChannels
   */
  readonly attachedChannels?: string[];

  /**
   * @schema MediaLiveInput#Destinations
   */
  readonly destinations?: MediaLiveInputDestination[];

  /**
   * @schema MediaLiveInput#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveInput#InputClass
   */
  readonly inputClass?: string;

  /**
   * @schema MediaLiveInput#InputDevices
   */
  readonly inputDevices?: MediaLiveInputDeviceSettings[];

  /**
   * @schema MediaLiveInput#InputSourceType
   */
  readonly inputSourceType?: string;

  /**
   * @schema MediaLiveInput#MediaConnectFlows
   */
  readonly mediaConnectFlows?: MediaLiveMediaConnectFlow[];

  /**
   * @schema MediaLiveInput#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveInput#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveInput#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema MediaLiveInput#Sources
   */
  readonly sources?: MediaLiveInputSource[];

  /**
   * @schema MediaLiveInput#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveInput#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaLiveInput#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaLiveInputWhitelistRuleCidr
 */
export interface MediaLiveInputWhitelistRuleCidr {
  /**
   * @schema MediaLiveInputWhitelistRuleCidr#Cidr
   */
  readonly cidr?: string;

}

/**
 * @schema MediaLiveInputSecurityGroup
 */
export interface MediaLiveInputSecurityGroup {
  /**
   * @schema MediaLiveInputSecurityGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveInputSecurityGroup#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveInputSecurityGroup#Inputs
   */
  readonly inputs?: string[];

  /**
   * @schema MediaLiveInputSecurityGroup#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveInputSecurityGroup#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaLiveInputSecurityGroup#WhitelistRules
   */
  readonly whitelistRules?: MediaLiveInputWhitelistRule[];

}

/**
 * @schema MediaLiveMultiplexSettings
 */
export interface MediaLiveMultiplexSettings {
  /**
   * @schema MediaLiveMultiplexSettings#MaximumVideoBufferDelayMilliseconds
   */
  readonly maximumVideoBufferDelayMilliseconds?: number;

  /**
   * @schema MediaLiveMultiplexSettings#TransportStreamBitrate
   */
  readonly transportStreamBitrate: number;

  /**
   * @schema MediaLiveMultiplexSettings#TransportStreamId
   */
  readonly transportStreamId: number;

  /**
   * @schema MediaLiveMultiplexSettings#TransportStreamReservedBitrate
   */
  readonly transportStreamReservedBitrate?: number;

}

/**
 * @schema MediaLiveMultiplex
 */
export interface MediaLiveMultiplex {
  /**
   * @schema MediaLiveMultiplex#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveMultiplex#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema MediaLiveMultiplex#Destinations
   */
  readonly destinations?: MediaLiveMultiplexOutputDestination[];

  /**
   * @schema MediaLiveMultiplex#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveMultiplex#MultiplexSettings
   */
  readonly multiplexSettings?: MediaLiveMultiplexSettings;

  /**
   * @schema MediaLiveMultiplex#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveMultiplex#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveMultiplex#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema MediaLiveMultiplex#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveMultiplex#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveMultiplexProgramSettings
 */
export interface MediaLiveMultiplexProgramSettings {
  /**
   * @schema MediaLiveMultiplexProgramSettings#PreferredChannelPipeline
   */
  readonly preferredChannelPipeline?: string;

  /**
   * @schema MediaLiveMultiplexProgramSettings#ProgramNumber
   */
  readonly programNumber: number;

  /**
   * @schema MediaLiveMultiplexProgramSettings#ServiceDescriptor
   */
  readonly serviceDescriptor?: MediaLiveMultiplexProgramServiceDescriptor;

  /**
   * @schema MediaLiveMultiplexProgramSettings#VideoSettings
   */
  readonly videoSettings?: MediaLiveMultiplexVideoSettings;

}

/**
 * @schema MediaLiveMultiplexProgram
 */
export interface MediaLiveMultiplexProgram {
  /**
   * @schema MediaLiveMultiplexProgram#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaLiveMultiplexProgram#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings?: MediaLiveMultiplexProgramSettings;

  /**
   * @schema MediaLiveMultiplexProgram#PacketIdentifiersMap
   */
  readonly packetIdentifiersMap?: MediaLiveMultiplexProgramPacketIdentifiersMap;

  /**
   * @schema MediaLiveMultiplexProgram#PipelineDetails
   */
  readonly pipelineDetails?: MediaLiveMultiplexProgramPipelineDetail[];

  /**
   * @schema MediaLiveMultiplexProgram#ProgramName
   */
  readonly programName?: string;

}

/**
 * @schema MediaLiveChannelEgressEndpoint
 */
export interface MediaLiveChannelEgressEndpoint {
  /**
   * @schema MediaLiveChannelEgressEndpoint#SourceIp
   */
  readonly sourceIp?: string;

}

/**
 * @schema MediaLivePipelineDetail
 */
export interface MediaLivePipelineDetail {
  /**
   * @schema MediaLivePipelineDetail#ActiveInputAttachmentName
   */
  readonly activeInputAttachmentName?: string;

  /**
   * @schema MediaLivePipelineDetail#ActiveInputSwitchActionName
   */
  readonly activeInputSwitchActionName?: string;

  /**
   * @schema MediaLivePipelineDetail#PipelineId
   */
  readonly pipelineId?: string;

}

/**
 * @schema MediaLiveMultiplexOutputDestination
 */
export interface MediaLiveMultiplexOutputDestination {
  /**
   * @schema MediaLiveMultiplexOutputDestination#MediaConnectSettings
   */
  readonly mediaConnectSettings?: MediaLiveMultiplexMediaConnectOutputDestinationSettings;

}

/**
 * @schema MediaLiveMultiplexProgramPacketIdentifiersMap
 */
export interface MediaLiveMultiplexProgramPacketIdentifiersMap {
  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#AudioPids
   */
  readonly audioPids?: number[];

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#DvbSubPids
   */
  readonly dvbSubPids?: number[];

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#DvbTeletextPid
   */
  readonly dvbTeletextPid?: number;

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#EtvPlatformPid
   */
  readonly etvPlatformPid?: number;

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#EtvSignalPid
   */
  readonly etvSignalPid?: number;

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#KlvDataPids
   */
  readonly klvDataPids?: number[];

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#PcrPid
   */
  readonly pcrPid?: number;

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#PmtPid
   */
  readonly pmtPid?: number;

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#PrivateMetadataPid
   */
  readonly privateMetadataPid?: number;

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#Scte27Pids
   */
  readonly scte27Pids?: number[];

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#Scte35Pid
   */
  readonly scte35Pid?: number;

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#TimedMetadataPid
   */
  readonly timedMetadataPid?: number;

  /**
   * @schema MediaLiveMultiplexProgramPacketIdentifiersMap#VideoPid
   */
  readonly videoPid?: number;

}

/**
 * @schema MediaLiveMultiplexProgramPipelineDetail
 */
export interface MediaLiveMultiplexProgramPipelineDetail {
  /**
   * @schema MediaLiveMultiplexProgramPipelineDetail#ActiveChannelPipeline
   */
  readonly activeChannelPipeline?: string;

  /**
   * @schema MediaLiveMultiplexProgramPipelineDetail#PipelineId
   */
  readonly pipelineId?: string;

}

/**
 * @schema MediaLiveReservationResourceSpecification
 */
export interface MediaLiveReservationResourceSpecification {
  /**
   * @schema MediaLiveReservationResourceSpecification#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveReservationResourceSpecification#Codec
   */
  readonly codec?: string;

  /**
   * @schema MediaLiveReservationResourceSpecification#MaximumBitrate
   */
  readonly maximumBitrate?: string;

  /**
   * @schema MediaLiveReservationResourceSpecification#MaximumFramerate
   */
  readonly maximumFramerate?: string;

  /**
   * @schema MediaLiveReservationResourceSpecification#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema MediaLiveReservationResourceSpecification#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema MediaLiveReservationResourceSpecification#SpecialFeature
   */
  readonly specialFeature?: string;

  /**
   * @schema MediaLiveReservationResourceSpecification#VideoQuality
   */
  readonly videoQuality?: string;

}

/**
 * @schema MediaLiveInputDestination
 */
export interface MediaLiveInputDestination {
  /**
   * @schema MediaLiveInputDestination#Ip
   */
  readonly ip?: string;

  /**
   * @schema MediaLiveInputDestination#Port
   */
  readonly port?: string;

  /**
   * @schema MediaLiveInputDestination#Url
   */
  readonly url?: string;

  /**
   * @schema MediaLiveInputDestination#Vpc
   */
  readonly vpc?: MediaLiveInputDestinationVpc;

}

/**
 * @schema MediaLiveMediaConnectFlow
 */
export interface MediaLiveMediaConnectFlow {
  /**
   * @schema MediaLiveMediaConnectFlow#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * @schema MediaLiveInputSource
 */
export interface MediaLiveInputSource {
  /**
   * @schema MediaLiveInputSource#PasswordParam
   */
  readonly passwordParam?: string;

  /**
   * @schema MediaLiveInputSource#Url
   */
  readonly url?: string;

  /**
   * @schema MediaLiveInputSource#Username
   */
  readonly username?: string;

}

/**
 * @schema MediaLiveInputDeviceHdSettings
 */
export interface MediaLiveInputDeviceHdSettings {
  /**
   * @schema MediaLiveInputDeviceHdSettings#ActiveInput
   */
  readonly activeInput?: string;

  /**
   * @schema MediaLiveInputDeviceHdSettings#ConfiguredInput
   */
  readonly configuredInput?: string;

  /**
   * @schema MediaLiveInputDeviceHdSettings#DeviceState
   */
  readonly deviceState?: string;

  /**
   * @schema MediaLiveInputDeviceHdSettings#Framerate
   */
  readonly framerate?: number;

  /**
   * @schema MediaLiveInputDeviceHdSettings#Height
   */
  readonly height?: number;

  /**
   * @schema MediaLiveInputDeviceHdSettings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaLiveInputDeviceHdSettings#ScanType
   */
  readonly scanType?: string;

  /**
   * @schema MediaLiveInputDeviceHdSettings#Width
   */
  readonly width?: number;

}

/**
 * @schema MediaLiveInputDeviceNetworkSettings
 */
export interface MediaLiveInputDeviceNetworkSettings {
  /**
   * @schema MediaLiveInputDeviceNetworkSettings#DnsAddresses
   */
  readonly dnsAddresses?: string[];

  /**
   * @schema MediaLiveInputDeviceNetworkSettings#Gateway
   */
  readonly gateway?: string;

  /**
   * @schema MediaLiveInputDeviceNetworkSettings#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema MediaLiveInputDeviceNetworkSettings#IpScheme
   */
  readonly ipScheme?: string;

  /**
   * @schema MediaLiveInputDeviceNetworkSettings#SubnetMask
   */
  readonly subnetMask?: string;

}

/**
 * @schema MediaLiveInputWhitelistRule
 */
export interface MediaLiveInputWhitelistRule {
  /**
   * @schema MediaLiveInputWhitelistRule#Cidr
   */
  readonly cidr?: string;

}

/**
 * @schema MediaLiveScheduleAction
 */
export interface MediaLiveScheduleAction {
  /**
   * @schema MediaLiveScheduleAction#ActionName
   */
  readonly actionName: string;

  /**
   * @schema MediaLiveScheduleAction#ScheduleActionSettings
   */
  readonly scheduleActionSettings: MediaLiveScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleAction#ScheduleActionStartSettings
   */
  readonly scheduleActionStartSettings: MediaLiveScheduleActionStartSettings;

}

/**
 * @schema MediaLiveChannelSummary
 */
export interface MediaLiveChannelSummary {
  /**
   * @schema MediaLiveChannelSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveChannelSummary#CdiInputSpecification
   */
  readonly cdiInputSpecification?: MediaLiveCdiInputSpecification;

  /**
   * @schema MediaLiveChannelSummary#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveChannelSummary#Destinations
   */
  readonly destinations?: MediaLiveOutputDestination[];

  /**
   * @schema MediaLiveChannelSummary#EgressEndpoints
   */
  readonly egressEndpoints?: MediaLiveChannelEgressEndpoint[];

  /**
   * @schema MediaLiveChannelSummary#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveChannelSummary#InputAttachments
   */
  readonly inputAttachments?: MediaLiveInputAttachment[];

  /**
   * @schema MediaLiveChannelSummary#InputSpecification
   */
  readonly inputSpecification?: MediaLiveInputSpecification;

  /**
   * @schema MediaLiveChannelSummary#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema MediaLiveChannelSummary#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveChannelSummary#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveChannelSummary#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaLiveChannelSummary#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveChannelSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveTransferringInputDeviceSummary
 */
export interface MediaLiveTransferringInputDeviceSummary {
  /**
   * @schema MediaLiveTransferringInputDeviceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveTransferringInputDeviceSummary#Message
   */
  readonly message?: string;

  /**
   * @schema MediaLiveTransferringInputDeviceSummary#TargetCustomerId
   */
  readonly targetCustomerId?: string;

  /**
   * @schema MediaLiveTransferringInputDeviceSummary#TransferType
   */
  readonly transferType?: string;

}

/**
 * @schema MediaLiveInputDeviceSummary
 */
export interface MediaLiveInputDeviceSummary {
  /**
   * @schema MediaLiveInputDeviceSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveInputDeviceSummary#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema MediaLiveInputDeviceSummary#DeviceSettingsSyncState
   */
  readonly deviceSettingsSyncState?: string;

  /**
   * @schema MediaLiveInputDeviceSummary#DeviceUpdateStatus
   */
  readonly deviceUpdateStatus?: string;

  /**
   * @schema MediaLiveInputDeviceSummary#HdDeviceSettings
   */
  readonly hdDeviceSettings?: MediaLiveInputDeviceHdSettings;

  /**
   * @schema MediaLiveInputDeviceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveInputDeviceSummary#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema MediaLiveInputDeviceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveInputDeviceSummary#NetworkSettings
   */
  readonly networkSettings?: MediaLiveInputDeviceNetworkSettings;

  /**
   * @schema MediaLiveInputDeviceSummary#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema MediaLiveInputDeviceSummary#Type
   */
  readonly type?: string;

}

/**
 * @schema MediaLiveMultiplexProgramSummary
 */
export interface MediaLiveMultiplexProgramSummary {
  /**
   * @schema MediaLiveMultiplexProgramSummary#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaLiveMultiplexProgramSummary#ProgramName
   */
  readonly programName?: string;

}

/**
 * @schema MediaLiveMultiplexSummary
 */
export interface MediaLiveMultiplexSummary {
  /**
   * @schema MediaLiveMultiplexSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveMultiplexSummary#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema MediaLiveMultiplexSummary#Id
   */
  readonly id?: string;

  /**
   * @schema MediaLiveMultiplexSummary#MultiplexSettings
   */
  readonly multiplexSettings?: MediaLiveMultiplexSettingsSummary;

  /**
   * @schema MediaLiveMultiplexSummary#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveMultiplexSummary#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MediaLiveMultiplexSummary#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema MediaLiveMultiplexSummary#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveMultiplexSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaLiveOffering
 */
export interface MediaLiveOffering {
  /**
   * @schema MediaLiveOffering#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema MediaLiveOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaLiveOffering#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema MediaLiveOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema MediaLiveOffering#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema MediaLiveOffering#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema MediaLiveOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema MediaLiveOffering#Region
   */
  readonly region?: string;

  /**
   * @schema MediaLiveOffering#ResourceSpecification
   */
  readonly resourceSpecification?: MediaLiveReservationResourceSpecification;

  /**
   * @schema MediaLiveOffering#UsagePrice
   */
  readonly usagePrice?: number;

}

/**
 * @schema MediaLiveReservation
 */
export interface MediaLiveReservation {
  /**
   * @schema MediaLiveReservation#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaLiveReservation#Count
   */
  readonly count?: number;

  /**
   * @schema MediaLiveReservation#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema MediaLiveReservation#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaLiveReservation#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema MediaLiveReservation#End
   */
  readonly end?: string;

  /**
   * @schema MediaLiveReservation#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema MediaLiveReservation#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveReservation#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema MediaLiveReservation#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema MediaLiveReservation#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema MediaLiveReservation#Region
   */
  readonly region?: string;

  /**
   * @schema MediaLiveReservation#ReservationId
   */
  readonly reservationId?: string;

  /**
   * @schema MediaLiveReservation#ResourceSpecification
   */
  readonly resourceSpecification?: MediaLiveReservationResourceSpecification;

  /**
   * @schema MediaLiveReservation#Start
   */
  readonly start?: string;

  /**
   * @schema MediaLiveReservation#State
   */
  readonly state?: string;

  /**
   * @schema MediaLiveReservation#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaLiveReservation#UsagePrice
   */
  readonly usagePrice?: number;

}

/**
 * @schema MediaLiveInputDeviceRequest
 */
export interface MediaLiveInputDeviceRequest {
  /**
   * @schema MediaLiveInputDeviceRequest#Id
   */
  readonly id?: string;

}

/**
 * @schema MediaLiveInputDeviceConfigurableSettings
 */
export interface MediaLiveInputDeviceConfigurableSettings {
  /**
   * @schema MediaLiveInputDeviceConfigurableSettings#ConfiguredInput
   */
  readonly configuredInput?: string;

  /**
   * @schema MediaLiveInputDeviceConfigurableSettings#MaxBitrate
   */
  readonly maxBitrate?: number;

}

/**
 * @schema MediaLiveMediaPackageOutputDestinationSettings
 */
export interface MediaLiveMediaPackageOutputDestinationSettings {
  /**
   * @schema MediaLiveMediaPackageOutputDestinationSettings#ChannelId
   */
  readonly channelId?: string;

}

/**
 * @schema MediaLiveMultiplexProgramChannelDestinationSettings
 */
export interface MediaLiveMultiplexProgramChannelDestinationSettings {
  /**
   * @schema MediaLiveMultiplexProgramChannelDestinationSettings#MultiplexId
   */
  readonly multiplexId?: string;

  /**
   * @schema MediaLiveMultiplexProgramChannelDestinationSettings#ProgramName
   */
  readonly programName?: string;

}

/**
 * @schema MediaLiveOutputDestinationSettings
 */
export interface MediaLiveOutputDestinationSettings {
  /**
   * @schema MediaLiveOutputDestinationSettings#PasswordParam
   */
  readonly passwordParam?: string;

  /**
   * @schema MediaLiveOutputDestinationSettings#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema MediaLiveOutputDestinationSettings#Url
   */
  readonly url?: string;

  /**
   * @schema MediaLiveOutputDestinationSettings#Username
   */
  readonly username?: string;

}

/**
 * @schema MediaLiveAudioDescription
 */
export interface MediaLiveAudioDescription {
  /**
   * @schema MediaLiveAudioDescription#AudioNormalizationSettings
   */
  readonly audioNormalizationSettings?: MediaLiveAudioNormalizationSettings;

  /**
   * @schema MediaLiveAudioDescription#AudioSelectorName
   */
  readonly audioSelectorName: string;

  /**
   * @schema MediaLiveAudioDescription#AudioType
   */
  readonly audioType?: string;

  /**
   * @schema MediaLiveAudioDescription#AudioTypeControl
   */
  readonly audioTypeControl?: string;

  /**
   * @schema MediaLiveAudioDescription#CodecSettings
   */
  readonly codecSettings?: MediaLiveAudioCodecSettings;

  /**
   * @schema MediaLiveAudioDescription#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaLiveAudioDescription#LanguageCodeControl
   */
  readonly languageCodeControl?: string;

  /**
   * @schema MediaLiveAudioDescription#Name
   */
  readonly name: string;

  /**
   * @schema MediaLiveAudioDescription#RemixSettings
   */
  readonly remixSettings?: MediaLiveRemixSettings;

  /**
   * @schema MediaLiveAudioDescription#StreamName
   */
  readonly streamName?: string;

}

/**
 * @schema MediaLiveAvailBlanking
 */
export interface MediaLiveAvailBlanking {
  /**
   * @schema MediaLiveAvailBlanking#AvailBlankingImage
   */
  readonly availBlankingImage?: MediaLiveInputLocation;

  /**
   * @schema MediaLiveAvailBlanking#State
   */
  readonly state?: string;

}

/**
 * @schema MediaLiveAvailConfiguration
 */
export interface MediaLiveAvailConfiguration {
  /**
   * @schema MediaLiveAvailConfiguration#AvailSettings
   */
  readonly availSettings?: MediaLiveAvailSettings;

}

/**
 * @schema MediaLiveBlackoutSlate
 */
export interface MediaLiveBlackoutSlate {
  /**
   * @schema MediaLiveBlackoutSlate#BlackoutSlateImage
   */
  readonly blackoutSlateImage?: MediaLiveInputLocation;

  /**
   * @schema MediaLiveBlackoutSlate#NetworkEndBlackout
   */
  readonly networkEndBlackout?: string;

  /**
   * @schema MediaLiveBlackoutSlate#NetworkEndBlackoutImage
   */
  readonly networkEndBlackoutImage?: MediaLiveInputLocation;

  /**
   * @schema MediaLiveBlackoutSlate#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema MediaLiveBlackoutSlate#State
   */
  readonly state?: string;

}

/**
 * @schema MediaLiveCaptionDescription
 */
export interface MediaLiveCaptionDescription {
  /**
   * @schema MediaLiveCaptionDescription#CaptionSelectorName
   */
  readonly captionSelectorName: string;

  /**
   * @schema MediaLiveCaptionDescription#DestinationSettings
   */
  readonly destinationSettings?: MediaLiveCaptionDestinationSettings;

  /**
   * @schema MediaLiveCaptionDescription#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaLiveCaptionDescription#LanguageDescription
   */
  readonly languageDescription?: string;

  /**
   * @schema MediaLiveCaptionDescription#Name
   */
  readonly name: string;

}

/**
 * @schema MediaLiveFeatureActivations
 */
export interface MediaLiveFeatureActivations {
  /**
   * @schema MediaLiveFeatureActivations#InputPrepareScheduleActions
   */
  readonly inputPrepareScheduleActions?: string;

}

/**
 * @schema MediaLiveGlobalConfiguration
 */
export interface MediaLiveGlobalConfiguration {
  /**
   * @schema MediaLiveGlobalConfiguration#InitialAudioGain
   */
  readonly initialAudioGain?: number;

  /**
   * @schema MediaLiveGlobalConfiguration#InputEndAction
   */
  readonly inputEndAction?: string;

  /**
   * @schema MediaLiveGlobalConfiguration#InputLossBehavior
   */
  readonly inputLossBehavior?: MediaLiveInputLossBehavior;

  /**
   * @schema MediaLiveGlobalConfiguration#OutputLockingMode
   */
  readonly outputLockingMode?: string;

  /**
   * @schema MediaLiveGlobalConfiguration#OutputTimingSource
   */
  readonly outputTimingSource?: string;

  /**
   * @schema MediaLiveGlobalConfiguration#SupportLowFramerateInputs
   */
  readonly supportLowFramerateInputs?: string;

}

/**
 * @schema MediaLiveNielsenConfiguration
 */
export interface MediaLiveNielsenConfiguration {
  /**
   * @schema MediaLiveNielsenConfiguration#DistributorId
   */
  readonly distributorId?: string;

  /**
   * @schema MediaLiveNielsenConfiguration#NielsenPcmToId3Tagging
   */
  readonly nielsenPcmToId3Tagging?: string;

}

/**
 * @schema MediaLiveOutputGroup
 */
export interface MediaLiveOutputGroup {
  /**
   * @schema MediaLiveOutputGroup#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveOutputGroup#OutputGroupSettings
   */
  readonly outputGroupSettings: MediaLiveOutputGroupSettings;

  /**
   * @schema MediaLiveOutputGroup#Outputs
   */
  readonly outputs: MediaLiveOutput[];

}

/**
 * @schema MediaLiveTimecodeConfig
 */
export interface MediaLiveTimecodeConfig {
  /**
   * @schema MediaLiveTimecodeConfig#Source
   */
  readonly source: string;

  /**
   * @schema MediaLiveTimecodeConfig#SyncThreshold
   */
  readonly syncThreshold?: number;

}

/**
 * @schema MediaLiveVideoDescription
 */
export interface MediaLiveVideoDescription {
  /**
   * @schema MediaLiveVideoDescription#CodecSettings
   */
  readonly codecSettings?: MediaLiveVideoCodecSettings;

  /**
   * @schema MediaLiveVideoDescription#Height
   */
  readonly height?: number;

  /**
   * @schema MediaLiveVideoDescription#Name
   */
  readonly name: string;

  /**
   * @schema MediaLiveVideoDescription#RespondToAfd
   */
  readonly respondToAfd?: string;

  /**
   * @schema MediaLiveVideoDescription#ScalingBehavior
   */
  readonly scalingBehavior?: string;

  /**
   * @schema MediaLiveVideoDescription#Sharpness
   */
  readonly sharpness?: number;

  /**
   * @schema MediaLiveVideoDescription#Width
   */
  readonly width?: number;

}

/**
 * @schema MediaLiveAutomaticInputFailoverSettings
 */
export interface MediaLiveAutomaticInputFailoverSettings {
  /**
   * @schema MediaLiveAutomaticInputFailoverSettings#ErrorClearTimeMsec
   */
  readonly errorClearTimeMsec?: number;

  /**
   * @schema MediaLiveAutomaticInputFailoverSettings#FailoverConditions
   */
  readonly failoverConditions?: MediaLiveFailoverCondition[];

  /**
   * @schema MediaLiveAutomaticInputFailoverSettings#InputPreference
   */
  readonly inputPreference?: string;

  /**
   * @schema MediaLiveAutomaticInputFailoverSettings#SecondaryInputId
   */
  readonly secondaryInputId: string;

}

/**
 * @schema MediaLiveInputSettings
 */
export interface MediaLiveInputSettings {
  /**
   * @schema MediaLiveInputSettings#AudioSelectors
   */
  readonly audioSelectors?: MediaLiveAudioSelector[];

  /**
   * @schema MediaLiveInputSettings#CaptionSelectors
   */
  readonly captionSelectors?: MediaLiveCaptionSelector[];

  /**
   * @schema MediaLiveInputSettings#DeblockFilter
   */
  readonly deblockFilter?: string;

  /**
   * @schema MediaLiveInputSettings#DenoiseFilter
   */
  readonly denoiseFilter?: string;

  /**
   * @schema MediaLiveInputSettings#FilterStrength
   */
  readonly filterStrength?: number;

  /**
   * @schema MediaLiveInputSettings#InputFilter
   */
  readonly inputFilter?: string;

  /**
   * @schema MediaLiveInputSettings#NetworkInputSettings
   */
  readonly networkInputSettings?: MediaLiveNetworkInputSettings;

  /**
   * @schema MediaLiveInputSettings#Smpte2038DataPreference
   */
  readonly smpte2038DataPreference?: string;

  /**
   * @schema MediaLiveInputSettings#SourceEndBehavior
   */
  readonly sourceEndBehavior?: string;

  /**
   * @schema MediaLiveInputSettings#VideoSelector
   */
  readonly videoSelector?: MediaLiveVideoSelector;

}

/**
 * @schema MediaLiveMultiplexProgramServiceDescriptor
 */
export interface MediaLiveMultiplexProgramServiceDescriptor {
  /**
   * @schema MediaLiveMultiplexProgramServiceDescriptor#ProviderName
   */
  readonly providerName: string;

  /**
   * @schema MediaLiveMultiplexProgramServiceDescriptor#ServiceName
   */
  readonly serviceName: string;

}

/**
 * @schema MediaLiveMultiplexVideoSettings
 */
export interface MediaLiveMultiplexVideoSettings {
  /**
   * @schema MediaLiveMultiplexVideoSettings#ConstantBitrate
   */
  readonly constantBitrate?: number;

  /**
   * @schema MediaLiveMultiplexVideoSettings#StatmuxSettings
   */
  readonly statmuxSettings?: MediaLiveMultiplexStatmuxVideoSettings;

}

/**
 * @schema MediaLiveMultiplexMediaConnectOutputDestinationSettings
 */
export interface MediaLiveMultiplexMediaConnectOutputDestinationSettings {
  /**
   * @schema MediaLiveMultiplexMediaConnectOutputDestinationSettings#EntitlementArn
   */
  readonly entitlementArn?: string;

}

/**
 * @schema MediaLiveInputDestinationVpc
 */
export interface MediaLiveInputDestinationVpc {
  /**
   * @schema MediaLiveInputDestinationVpc#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema MediaLiveInputDestinationVpc#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

}

/**
 * @schema MediaLiveScheduleActionSettings
 */
export interface MediaLiveScheduleActionSettings {
  /**
   * @schema MediaLiveScheduleActionSettings#HlsId3SegmentTaggingSettings
   */
  readonly hlsId3SegmentTaggingSettings?: MediaLiveHlsId3SegmentTaggingScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleActionSettings#HlsTimedMetadataSettings
   */
  readonly hlsTimedMetadataSettings?: MediaLiveHlsTimedMetadataScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleActionSettings#InputPrepareSettings
   */
  readonly inputPrepareSettings?: MediaLiveInputPrepareScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleActionSettings#InputSwitchSettings
   */
  readonly inputSwitchSettings?: MediaLiveInputSwitchScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleActionSettings#PauseStateSettings
   */
  readonly pauseStateSettings?: MediaLivePauseStateScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleActionSettings#Scte35ReturnToNetworkSettings
   */
  readonly scte35ReturnToNetworkSettings?: MediaLiveScte35ReturnToNetworkScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleActionSettings#Scte35SpliceInsertSettings
   */
  readonly scte35SpliceInsertSettings?: MediaLiveScte35SpliceInsertScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleActionSettings#Scte35TimeSignalSettings
   */
  readonly scte35TimeSignalSettings?: MediaLiveScte35TimeSignalScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleActionSettings#StaticImageActivateSettings
   */
  readonly staticImageActivateSettings?: MediaLiveStaticImageActivateScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleActionSettings#StaticImageDeactivateSettings
   */
  readonly staticImageDeactivateSettings?: MediaLiveStaticImageDeactivateScheduleActionSettings;

}

/**
 * @schema MediaLiveScheduleActionStartSettings
 */
export interface MediaLiveScheduleActionStartSettings {
  /**
   * @schema MediaLiveScheduleActionStartSettings#FixedModeScheduleActionStartSettings
   */
  readonly fixedModeScheduleActionStartSettings?: MediaLiveFixedModeScheduleActionStartSettings;

  /**
   * @schema MediaLiveScheduleActionStartSettings#FollowModeScheduleActionStartSettings
   */
  readonly followModeScheduleActionStartSettings?: MediaLiveFollowModeScheduleActionStartSettings;

  /**
   * @schema MediaLiveScheduleActionStartSettings#ImmediateModeScheduleActionStartSettings
   */
  readonly immediateModeScheduleActionStartSettings?: MediaLiveImmediateModeScheduleActionStartSettings;

}

/**
 * @schema MediaLiveMultiplexSettingsSummary
 */
export interface MediaLiveMultiplexSettingsSummary {
  /**
   * @schema MediaLiveMultiplexSettingsSummary#TransportStreamBitrate
   */
  readonly transportStreamBitrate?: number;

}

/**
 * @schema MediaLiveAudioNormalizationSettings
 */
export interface MediaLiveAudioNormalizationSettings {
  /**
   * @schema MediaLiveAudioNormalizationSettings#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MediaLiveAudioNormalizationSettings#AlgorithmControl
   */
  readonly algorithmControl?: string;

  /**
   * @schema MediaLiveAudioNormalizationSettings#TargetLkfs
   */
  readonly targetLkfs?: number;

}

/**
 * @schema MediaLiveAudioCodecSettings
 */
export interface MediaLiveAudioCodecSettings {
  /**
   * @schema MediaLiveAudioCodecSettings#AacSettings
   */
  readonly aacSettings?: MediaLiveAacSettings;

  /**
   * @schema MediaLiveAudioCodecSettings#Ac3Settings
   */
  readonly ac3Settings?: MediaLiveAc3Settings;

  /**
   * @schema MediaLiveAudioCodecSettings#Eac3Settings
   */
  readonly eac3Settings?: MediaLiveEac3Settings;

  /**
   * @schema MediaLiveAudioCodecSettings#Mp2Settings
   */
  readonly mp2Settings?: MediaLiveMp2Settings;

  /**
   * @schema MediaLiveAudioCodecSettings#PassThroughSettings
   */
  readonly passThroughSettings?: MediaLivePassThroughSettings;

  /**
   * @schema MediaLiveAudioCodecSettings#WavSettings
   */
  readonly wavSettings?: MediaLiveWavSettings;

}

/**
 * @schema MediaLiveRemixSettings
 */
export interface MediaLiveRemixSettings {
  /**
   * @schema MediaLiveRemixSettings#ChannelMappings
   */
  readonly channelMappings: MediaLiveAudioChannelMapping[];

  /**
   * @schema MediaLiveRemixSettings#ChannelsIn
   */
  readonly channelsIn?: number;

  /**
   * @schema MediaLiveRemixSettings#ChannelsOut
   */
  readonly channelsOut?: number;

}

/**
 * @schema MediaLiveInputLocation
 */
export interface MediaLiveInputLocation {
  /**
   * @schema MediaLiveInputLocation#PasswordParam
   */
  readonly passwordParam?: string;

  /**
   * @schema MediaLiveInputLocation#Uri
   */
  readonly uri: string;

  /**
   * @schema MediaLiveInputLocation#Username
   */
  readonly username?: string;

}

/**
 * @schema MediaLiveAvailSettings
 */
export interface MediaLiveAvailSettings {
  /**
   * @schema MediaLiveAvailSettings#Scte35SpliceInsert
   */
  readonly scte35SpliceInsert?: MediaLiveScte35SpliceInsert;

  /**
   * @schema MediaLiveAvailSettings#Scte35TimeSignalApos
   */
  readonly scte35TimeSignalApos?: MediaLiveScte35TimeSignalApos;

}

/**
 * @schema MediaLiveCaptionDestinationSettings
 */
export interface MediaLiveCaptionDestinationSettings {
  /**
   * @schema MediaLiveCaptionDestinationSettings#AribDestinationSettings
   */
  readonly aribDestinationSettings?: MediaLiveAribDestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#BurnInDestinationSettings
   */
  readonly burnInDestinationSettings?: MediaLiveBurnInDestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#DvbSubDestinationSettings
   */
  readonly dvbSubDestinationSettings?: MediaLiveDvbSubDestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#EbuTtDDestinationSettings
   */
  readonly ebuTtDDestinationSettings?: MediaLiveEbuTtDDestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#EmbeddedDestinationSettings
   */
  readonly embeddedDestinationSettings?: MediaLiveEmbeddedDestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#EmbeddedPlusScte20DestinationSettings
   */
  readonly embeddedPlusScte20DestinationSettings?: MediaLiveEmbeddedPlusScte20DestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#RtmpCaptionInfoDestinationSettings
   */
  readonly rtmpCaptionInfoDestinationSettings?: MediaLiveRtmpCaptionInfoDestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#Scte20PlusEmbeddedDestinationSettings
   */
  readonly scte20PlusEmbeddedDestinationSettings?: MediaLiveScte20PlusEmbeddedDestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#Scte27DestinationSettings
   */
  readonly scte27DestinationSettings?: MediaLiveScte27DestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#SmpteTtDestinationSettings
   */
  readonly smpteTtDestinationSettings?: MediaLiveSmpteTtDestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#TeletextDestinationSettings
   */
  readonly teletextDestinationSettings?: MediaLiveTeletextDestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#TtmlDestinationSettings
   */
  readonly ttmlDestinationSettings?: MediaLiveTtmlDestinationSettings;

  /**
   * @schema MediaLiveCaptionDestinationSettings#WebvttDestinationSettings
   */
  readonly webvttDestinationSettings?: MediaLiveWebvttDestinationSettings;

}

/**
 * @schema MediaLiveInputLossBehavior
 */
export interface MediaLiveInputLossBehavior {
  /**
   * @schema MediaLiveInputLossBehavior#BlackFrameMsec
   */
  readonly blackFrameMsec?: number;

  /**
   * @schema MediaLiveInputLossBehavior#InputLossImageColor
   */
  readonly inputLossImageColor?: string;

  /**
   * @schema MediaLiveInputLossBehavior#InputLossImageSlate
   */
  readonly inputLossImageSlate?: MediaLiveInputLocation;

  /**
   * @schema MediaLiveInputLossBehavior#InputLossImageType
   */
  readonly inputLossImageType?: string;

  /**
   * @schema MediaLiveInputLossBehavior#RepeatFrameMsec
   */
  readonly repeatFrameMsec?: number;

}

/**
 * @schema MediaLiveOutputGroupSettings
 */
export interface MediaLiveOutputGroupSettings {
  /**
   * @schema MediaLiveOutputGroupSettings#ArchiveGroupSettings
   */
  readonly archiveGroupSettings?: MediaLiveArchiveGroupSettings;

  /**
   * @schema MediaLiveOutputGroupSettings#FrameCaptureGroupSettings
   */
  readonly frameCaptureGroupSettings?: MediaLiveFrameCaptureGroupSettings;

  /**
   * @schema MediaLiveOutputGroupSettings#HlsGroupSettings
   */
  readonly hlsGroupSettings?: MediaLiveHlsGroupSettings;

  /**
   * @schema MediaLiveOutputGroupSettings#MediaPackageGroupSettings
   */
  readonly mediaPackageGroupSettings?: MediaLiveMediaPackageGroupSettings;

  /**
   * @schema MediaLiveOutputGroupSettings#MsSmoothGroupSettings
   */
  readonly msSmoothGroupSettings?: MediaLiveMsSmoothGroupSettings;

  /**
   * @schema MediaLiveOutputGroupSettings#MultiplexGroupSettings
   */
  readonly multiplexGroupSettings?: MediaLiveMultiplexGroupSettings;

  /**
   * @schema MediaLiveOutputGroupSettings#RtmpGroupSettings
   */
  readonly rtmpGroupSettings?: MediaLiveRtmpGroupSettings;

  /**
   * @schema MediaLiveOutputGroupSettings#UdpGroupSettings
   */
  readonly udpGroupSettings?: MediaLiveUdpGroupSettings;

}

/**
 * @schema MediaLiveOutput
 */
export interface MediaLiveOutput {
  /**
   * @schema MediaLiveOutput#AudioDescriptionNames
   */
  readonly audioDescriptionNames?: string[];

  /**
   * @schema MediaLiveOutput#CaptionDescriptionNames
   */
  readonly captionDescriptionNames?: string[];

  /**
   * @schema MediaLiveOutput#OutputName
   */
  readonly outputName?: string;

  /**
   * @schema MediaLiveOutput#OutputSettings
   */
  readonly outputSettings: MediaLiveOutputSettings;

  /**
   * @schema MediaLiveOutput#VideoDescriptionName
   */
  readonly videoDescriptionName?: string;

}

/**
 * @schema MediaLiveVideoCodecSettings
 */
export interface MediaLiveVideoCodecSettings {
  /**
   * @schema MediaLiveVideoCodecSettings#FrameCaptureSettings
   */
  readonly frameCaptureSettings?: MediaLiveFrameCaptureSettings;

  /**
   * @schema MediaLiveVideoCodecSettings#H264Settings
   */
  readonly h264Settings?: MediaLiveH264Settings;

  /**
   * @schema MediaLiveVideoCodecSettings#H265Settings
   */
  readonly h265Settings?: MediaLiveH265Settings;

  /**
   * @schema MediaLiveVideoCodecSettings#Mpeg2Settings
   */
  readonly mpeg2Settings?: MediaLiveMpeg2Settings;

}

/**
 * @schema MediaLiveFailoverCondition
 */
export interface MediaLiveFailoverCondition {
  /**
   * @schema MediaLiveFailoverCondition#FailoverConditionSettings
   */
  readonly failoverConditionSettings?: MediaLiveFailoverConditionSettings;

}

/**
 * @schema MediaLiveAudioSelector
 */
export interface MediaLiveAudioSelector {
  /**
   * @schema MediaLiveAudioSelector#Name
   */
  readonly name: string;

  /**
   * @schema MediaLiveAudioSelector#SelectorSettings
   */
  readonly selectorSettings?: MediaLiveAudioSelectorSettings;

}

/**
 * @schema MediaLiveCaptionSelector
 */
export interface MediaLiveCaptionSelector {
  /**
   * @schema MediaLiveCaptionSelector#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaLiveCaptionSelector#Name
   */
  readonly name: string;

  /**
   * @schema MediaLiveCaptionSelector#SelectorSettings
   */
  readonly selectorSettings?: MediaLiveCaptionSelectorSettings;

}

/**
 * @schema MediaLiveNetworkInputSettings
 */
export interface MediaLiveNetworkInputSettings {
  /**
   * @schema MediaLiveNetworkInputSettings#HlsInputSettings
   */
  readonly hlsInputSettings?: MediaLiveHlsInputSettings;

  /**
   * @schema MediaLiveNetworkInputSettings#ServerValidation
   */
  readonly serverValidation?: string;

}

/**
 * @schema MediaLiveVideoSelector
 */
export interface MediaLiveVideoSelector {
  /**
   * @schema MediaLiveVideoSelector#ColorSpace
   */
  readonly colorSpace?: string;

  /**
   * @schema MediaLiveVideoSelector#ColorSpaceUsage
   */
  readonly colorSpaceUsage?: string;

  /**
   * @schema MediaLiveVideoSelector#SelectorSettings
   */
  readonly selectorSettings?: MediaLiveVideoSelectorSettings;

}

/**
 * @schema MediaLiveMultiplexStatmuxVideoSettings
 */
export interface MediaLiveMultiplexStatmuxVideoSettings {
  /**
   * @schema MediaLiveMultiplexStatmuxVideoSettings#MaximumBitrate
   */
  readonly maximumBitrate?: number;

  /**
   * @schema MediaLiveMultiplexStatmuxVideoSettings#MinimumBitrate
   */
  readonly minimumBitrate?: number;

  /**
   * @schema MediaLiveMultiplexStatmuxVideoSettings#Priority
   */
  readonly priority?: number;

}

/**
 * @schema MediaLiveHlsId3SegmentTaggingScheduleActionSettings
 */
export interface MediaLiveHlsId3SegmentTaggingScheduleActionSettings {
  /**
   * @schema MediaLiveHlsId3SegmentTaggingScheduleActionSettings#Tag
   */
  readonly tag: string;

}

/**
 * @schema MediaLiveHlsTimedMetadataScheduleActionSettings
 */
export interface MediaLiveHlsTimedMetadataScheduleActionSettings {
  /**
   * @schema MediaLiveHlsTimedMetadataScheduleActionSettings#Id3
   */
  readonly id3: string;

}

/**
 * @schema MediaLiveInputPrepareScheduleActionSettings
 */
export interface MediaLiveInputPrepareScheduleActionSettings {
  /**
   * @schema MediaLiveInputPrepareScheduleActionSettings#InputAttachmentNameReference
   */
  readonly inputAttachmentNameReference?: string;

  /**
   * @schema MediaLiveInputPrepareScheduleActionSettings#InputClippingSettings
   */
  readonly inputClippingSettings?: MediaLiveInputClippingSettings;

  /**
   * @schema MediaLiveInputPrepareScheduleActionSettings#UrlPath
   */
  readonly urlPath?: string[];

}

/**
 * @schema MediaLiveInputSwitchScheduleActionSettings
 */
export interface MediaLiveInputSwitchScheduleActionSettings {
  /**
   * @schema MediaLiveInputSwitchScheduleActionSettings#InputAttachmentNameReference
   */
  readonly inputAttachmentNameReference: string;

  /**
   * @schema MediaLiveInputSwitchScheduleActionSettings#InputClippingSettings
   */
  readonly inputClippingSettings?: MediaLiveInputClippingSettings;

  /**
   * @schema MediaLiveInputSwitchScheduleActionSettings#UrlPath
   */
  readonly urlPath?: string[];

}

/**
 * @schema MediaLivePauseStateScheduleActionSettings
 */
export interface MediaLivePauseStateScheduleActionSettings {
  /**
   * @schema MediaLivePauseStateScheduleActionSettings#Pipelines
   */
  readonly pipelines?: MediaLivePipelinePauseStateSettings[];

}

/**
 * @schema MediaLiveScte35ReturnToNetworkScheduleActionSettings
 */
export interface MediaLiveScte35ReturnToNetworkScheduleActionSettings {
  /**
   * @schema MediaLiveScte35ReturnToNetworkScheduleActionSettings#SpliceEventId
   */
  readonly spliceEventId: number;

}

/**
 * @schema MediaLiveScte35SpliceInsertScheduleActionSettings
 */
export interface MediaLiveScte35SpliceInsertScheduleActionSettings {
  /**
   * @schema MediaLiveScte35SpliceInsertScheduleActionSettings#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaLiveScte35SpliceInsertScheduleActionSettings#SpliceEventId
   */
  readonly spliceEventId: number;

}

/**
 * @schema MediaLiveScte35TimeSignalScheduleActionSettings
 */
export interface MediaLiveScte35TimeSignalScheduleActionSettings {
  /**
   * @schema MediaLiveScte35TimeSignalScheduleActionSettings#Scte35Descriptors
   */
  readonly scte35Descriptors: MediaLiveScte35Descriptor[];

}

/**
 * @schema MediaLiveStaticImageActivateScheduleActionSettings
 */
export interface MediaLiveStaticImageActivateScheduleActionSettings {
  /**
   * @schema MediaLiveStaticImageActivateScheduleActionSettings#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaLiveStaticImageActivateScheduleActionSettings#FadeIn
   */
  readonly fadeIn?: number;

  /**
   * @schema MediaLiveStaticImageActivateScheduleActionSettings#FadeOut
   */
  readonly fadeOut?: number;

  /**
   * @schema MediaLiveStaticImageActivateScheduleActionSettings#Height
   */
  readonly height?: number;

  /**
   * @schema MediaLiveStaticImageActivateScheduleActionSettings#Image
   */
  readonly image: MediaLiveInputLocation;

  /**
   * @schema MediaLiveStaticImageActivateScheduleActionSettings#ImageX
   */
  readonly imageX?: number;

  /**
   * @schema MediaLiveStaticImageActivateScheduleActionSettings#ImageY
   */
  readonly imageY?: number;

  /**
   * @schema MediaLiveStaticImageActivateScheduleActionSettings#Layer
   */
  readonly layer?: number;

  /**
   * @schema MediaLiveStaticImageActivateScheduleActionSettings#Opacity
   */
  readonly opacity?: number;

  /**
   * @schema MediaLiveStaticImageActivateScheduleActionSettings#Width
   */
  readonly width?: number;

}

/**
 * @schema MediaLiveStaticImageDeactivateScheduleActionSettings
 */
export interface MediaLiveStaticImageDeactivateScheduleActionSettings {
  /**
   * @schema MediaLiveStaticImageDeactivateScheduleActionSettings#FadeOut
   */
  readonly fadeOut?: number;

  /**
   * @schema MediaLiveStaticImageDeactivateScheduleActionSettings#Layer
   */
  readonly layer?: number;

}

/**
 * @schema MediaLiveFixedModeScheduleActionStartSettings
 */
export interface MediaLiveFixedModeScheduleActionStartSettings {
  /**
   * @schema MediaLiveFixedModeScheduleActionStartSettings#Time
   */
  readonly time: string;

}

/**
 * @schema MediaLiveFollowModeScheduleActionStartSettings
 */
export interface MediaLiveFollowModeScheduleActionStartSettings {
  /**
   * @schema MediaLiveFollowModeScheduleActionStartSettings#FollowPoint
   */
  readonly followPoint: string;

  /**
   * @schema MediaLiveFollowModeScheduleActionStartSettings#ReferenceActionName
   */
  readonly referenceActionName: string;

}

/**
 * @schema MediaLiveImmediateModeScheduleActionStartSettings
 */
export interface MediaLiveImmediateModeScheduleActionStartSettings {
}

/**
 * @schema MediaLiveAacSettings
 */
export interface MediaLiveAacSettings {
  /**
   * @schema MediaLiveAacSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaLiveAacSettings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaLiveAacSettings#InputType
   */
  readonly inputType?: string;

  /**
   * @schema MediaLiveAacSettings#Profile
   */
  readonly profile?: string;

  /**
   * @schema MediaLiveAacSettings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaLiveAacSettings#RawFormat
   */
  readonly rawFormat?: string;

  /**
   * @schema MediaLiveAacSettings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaLiveAacSettings#Spec
   */
  readonly spec?: string;

  /**
   * @schema MediaLiveAacSettings#VbrQuality
   */
  readonly vbrQuality?: string;

}

/**
 * @schema MediaLiveAc3Settings
 */
export interface MediaLiveAc3Settings {
  /**
   * @schema MediaLiveAc3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaLiveAc3Settings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema MediaLiveAc3Settings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaLiveAc3Settings#Dialnorm
   */
  readonly dialnorm?: number;

  /**
   * @schema MediaLiveAc3Settings#DrcProfile
   */
  readonly drcProfile?: string;

  /**
   * @schema MediaLiveAc3Settings#LfeFilter
   */
  readonly lfeFilter?: string;

  /**
   * @schema MediaLiveAc3Settings#MetadataControl
   */
  readonly metadataControl?: string;

}

/**
 * @schema MediaLiveEac3Settings
 */
export interface MediaLiveEac3Settings {
  /**
   * @schema MediaLiveEac3Settings#AttenuationControl
   */
  readonly attenuationControl?: string;

  /**
   * @schema MediaLiveEac3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaLiveEac3Settings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema MediaLiveEac3Settings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaLiveEac3Settings#DcFilter
   */
  readonly dcFilter?: string;

  /**
   * @schema MediaLiveEac3Settings#Dialnorm
   */
  readonly dialnorm?: number;

  /**
   * @schema MediaLiveEac3Settings#DrcLine
   */
  readonly drcLine?: string;

  /**
   * @schema MediaLiveEac3Settings#DrcRf
   */
  readonly drcRf?: string;

  /**
   * @schema MediaLiveEac3Settings#LfeControl
   */
  readonly lfeControl?: string;

  /**
   * @schema MediaLiveEac3Settings#LfeFilter
   */
  readonly lfeFilter?: string;

  /**
   * @schema MediaLiveEac3Settings#LoRoCenterMixLevel
   */
  readonly loRoCenterMixLevel?: number;

  /**
   * @schema MediaLiveEac3Settings#LoRoSurroundMixLevel
   */
  readonly loRoSurroundMixLevel?: number;

  /**
   * @schema MediaLiveEac3Settings#LtRtCenterMixLevel
   */
  readonly ltRtCenterMixLevel?: number;

  /**
   * @schema MediaLiveEac3Settings#LtRtSurroundMixLevel
   */
  readonly ltRtSurroundMixLevel?: number;

  /**
   * @schema MediaLiveEac3Settings#MetadataControl
   */
  readonly metadataControl?: string;

  /**
   * @schema MediaLiveEac3Settings#PassthroughControl
   */
  readonly passthroughControl?: string;

  /**
   * @schema MediaLiveEac3Settings#PhaseControl
   */
  readonly phaseControl?: string;

  /**
   * @schema MediaLiveEac3Settings#StereoDownmix
   */
  readonly stereoDownmix?: string;

  /**
   * @schema MediaLiveEac3Settings#SurroundExMode
   */
  readonly surroundExMode?: string;

  /**
   * @schema MediaLiveEac3Settings#SurroundMode
   */
  readonly surroundMode?: string;

}

/**
 * @schema MediaLiveMp2Settings
 */
export interface MediaLiveMp2Settings {
  /**
   * @schema MediaLiveMp2Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaLiveMp2Settings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaLiveMp2Settings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema MediaLivePassThroughSettings
 */
export interface MediaLivePassThroughSettings {
}

/**
 * @schema MediaLiveWavSettings
 */
export interface MediaLiveWavSettings {
  /**
   * @schema MediaLiveWavSettings#BitDepth
   */
  readonly bitDepth?: number;

  /**
   * @schema MediaLiveWavSettings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaLiveWavSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema MediaLiveAudioChannelMapping
 */
export interface MediaLiveAudioChannelMapping {
  /**
   * @schema MediaLiveAudioChannelMapping#InputChannelLevels
   */
  readonly inputChannelLevels: MediaLiveInputChannelLevel[];

  /**
   * @schema MediaLiveAudioChannelMapping#OutputChannel
   */
  readonly outputChannel: number;

}

/**
 * @schema MediaLiveScte35SpliceInsert
 */
export interface MediaLiveScte35SpliceInsert {
  /**
   * @schema MediaLiveScte35SpliceInsert#AdAvailOffset
   */
  readonly adAvailOffset?: number;

  /**
   * @schema MediaLiveScte35SpliceInsert#NoRegionalBlackoutFlag
   */
  readonly noRegionalBlackoutFlag?: string;

  /**
   * @schema MediaLiveScte35SpliceInsert#WebDeliveryAllowedFlag
   */
  readonly webDeliveryAllowedFlag?: string;

}

/**
 * @schema MediaLiveScte35TimeSignalApos
 */
export interface MediaLiveScte35TimeSignalApos {
  /**
   * @schema MediaLiveScte35TimeSignalApos#AdAvailOffset
   */
  readonly adAvailOffset?: number;

  /**
   * @schema MediaLiveScte35TimeSignalApos#NoRegionalBlackoutFlag
   */
  readonly noRegionalBlackoutFlag?: string;

  /**
   * @schema MediaLiveScte35TimeSignalApos#WebDeliveryAllowedFlag
   */
  readonly webDeliveryAllowedFlag?: string;

}

/**
 * @schema MediaLiveAribDestinationSettings
 */
export interface MediaLiveAribDestinationSettings {
}

/**
 * @schema MediaLiveBurnInDestinationSettings
 */
export interface MediaLiveBurnInDestinationSettings {
  /**
   * @schema MediaLiveBurnInDestinationSettings#Alignment
   */
  readonly alignment?: string;

  /**
   * @schema MediaLiveBurnInDestinationSettings#BackgroundColor
   */
  readonly backgroundColor?: string;

  /**
   * @schema MediaLiveBurnInDestinationSettings#BackgroundOpacity
   */
  readonly backgroundOpacity?: number;

  /**
   * @schema MediaLiveBurnInDestinationSettings#Font
   */
  readonly font?: MediaLiveInputLocation;

  /**
   * @schema MediaLiveBurnInDestinationSettings#FontColor
   */
  readonly fontColor?: string;

  /**
   * @schema MediaLiveBurnInDestinationSettings#FontOpacity
   */
  readonly fontOpacity?: number;

  /**
   * @schema MediaLiveBurnInDestinationSettings#FontResolution
   */
  readonly fontResolution?: number;

  /**
   * @schema MediaLiveBurnInDestinationSettings#FontSize
   */
  readonly fontSize?: string;

  /**
   * @schema MediaLiveBurnInDestinationSettings#OutlineColor
   */
  readonly outlineColor?: string;

  /**
   * @schema MediaLiveBurnInDestinationSettings#OutlineSize
   */
  readonly outlineSize?: number;

  /**
   * @schema MediaLiveBurnInDestinationSettings#ShadowColor
   */
  readonly shadowColor?: string;

  /**
   * @schema MediaLiveBurnInDestinationSettings#ShadowOpacity
   */
  readonly shadowOpacity?: number;

  /**
   * @schema MediaLiveBurnInDestinationSettings#ShadowXOffset
   */
  readonly shadowXOffset?: number;

  /**
   * @schema MediaLiveBurnInDestinationSettings#ShadowYOffset
   */
  readonly shadowYOffset?: number;

  /**
   * @schema MediaLiveBurnInDestinationSettings#TeletextGridControl
   */
  readonly teletextGridControl?: string;

  /**
   * @schema MediaLiveBurnInDestinationSettings#XPosition
   */
  readonly xPosition?: number;

  /**
   * @schema MediaLiveBurnInDestinationSettings#YPosition
   */
  readonly yPosition?: number;

}

/**
 * @schema MediaLiveDvbSubDestinationSettings
 */
export interface MediaLiveDvbSubDestinationSettings {
  /**
   * @schema MediaLiveDvbSubDestinationSettings#Alignment
   */
  readonly alignment?: string;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#BackgroundColor
   */
  readonly backgroundColor?: string;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#BackgroundOpacity
   */
  readonly backgroundOpacity?: number;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#Font
   */
  readonly font?: MediaLiveInputLocation;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#FontColor
   */
  readonly fontColor?: string;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#FontOpacity
   */
  readonly fontOpacity?: number;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#FontResolution
   */
  readonly fontResolution?: number;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#FontSize
   */
  readonly fontSize?: string;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#OutlineColor
   */
  readonly outlineColor?: string;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#OutlineSize
   */
  readonly outlineSize?: number;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#ShadowColor
   */
  readonly shadowColor?: string;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#ShadowOpacity
   */
  readonly shadowOpacity?: number;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#ShadowXOffset
   */
  readonly shadowXOffset?: number;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#ShadowYOffset
   */
  readonly shadowYOffset?: number;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#TeletextGridControl
   */
  readonly teletextGridControl?: string;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#XPosition
   */
  readonly xPosition?: number;

  /**
   * @schema MediaLiveDvbSubDestinationSettings#YPosition
   */
  readonly yPosition?: number;

}

/**
 * @schema MediaLiveEbuTtDDestinationSettings
 */
export interface MediaLiveEbuTtDDestinationSettings {
  /**
   * @schema MediaLiveEbuTtDDestinationSettings#FillLineGap
   */
  readonly fillLineGap?: string;

  /**
   * @schema MediaLiveEbuTtDDestinationSettings#FontFamily
   */
  readonly fontFamily?: string;

  /**
   * @schema MediaLiveEbuTtDDestinationSettings#StyleControl
   */
  readonly styleControl?: string;

}

/**
 * @schema MediaLiveEmbeddedDestinationSettings
 */
export interface MediaLiveEmbeddedDestinationSettings {
}

/**
 * @schema MediaLiveEmbeddedPlusScte20DestinationSettings
 */
export interface MediaLiveEmbeddedPlusScte20DestinationSettings {
}

/**
 * @schema MediaLiveRtmpCaptionInfoDestinationSettings
 */
export interface MediaLiveRtmpCaptionInfoDestinationSettings {
}

/**
 * @schema MediaLiveScte20PlusEmbeddedDestinationSettings
 */
export interface MediaLiveScte20PlusEmbeddedDestinationSettings {
}

/**
 * @schema MediaLiveScte27DestinationSettings
 */
export interface MediaLiveScte27DestinationSettings {
}

/**
 * @schema MediaLiveSmpteTtDestinationSettings
 */
export interface MediaLiveSmpteTtDestinationSettings {
}

/**
 * @schema MediaLiveTeletextDestinationSettings
 */
export interface MediaLiveTeletextDestinationSettings {
}

/**
 * @schema MediaLiveTtmlDestinationSettings
 */
export interface MediaLiveTtmlDestinationSettings {
  /**
   * @schema MediaLiveTtmlDestinationSettings#StyleControl
   */
  readonly styleControl?: string;

}

/**
 * @schema MediaLiveWebvttDestinationSettings
 */
export interface MediaLiveWebvttDestinationSettings {
}

/**
 * @schema MediaLiveArchiveGroupSettings
 */
export interface MediaLiveArchiveGroupSettings {
  /**
   * @schema MediaLiveArchiveGroupSettings#Destination
   */
  readonly destination: MediaLiveOutputLocationRef;

  /**
   * @schema MediaLiveArchiveGroupSettings#RolloverInterval
   */
  readonly rolloverInterval?: number;

}

/**
 * @schema MediaLiveFrameCaptureGroupSettings
 */
export interface MediaLiveFrameCaptureGroupSettings {
  /**
   * @schema MediaLiveFrameCaptureGroupSettings#Destination
   */
  readonly destination: MediaLiveOutputLocationRef;

}

/**
 * @schema MediaLiveHlsGroupSettings
 */
export interface MediaLiveHlsGroupSettings {
  /**
   * @schema MediaLiveHlsGroupSettings#AdMarkers
   */
  readonly adMarkers?: string[];

  /**
   * @schema MediaLiveHlsGroupSettings#BaseUrlContent
   */
  readonly baseUrlContent?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#BaseUrlContent1
   */
  readonly baseUrlContent1?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#BaseUrlManifest
   */
  readonly baseUrlManifest?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#BaseUrlManifest1
   */
  readonly baseUrlManifest1?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#CaptionLanguageMappings
   */
  readonly captionLanguageMappings?: MediaLiveCaptionLanguageMapping[];

  /**
   * @schema MediaLiveHlsGroupSettings#CaptionLanguageSetting
   */
  readonly captionLanguageSetting?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#ClientCache
   */
  readonly clientCache?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#CodecSpecification
   */
  readonly codecSpecification?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#ConstantIv
   */
  readonly constantIv?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#Destination
   */
  readonly destination: MediaLiveOutputLocationRef;

  /**
   * @schema MediaLiveHlsGroupSettings#DirectoryStructure
   */
  readonly directoryStructure?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#DiscontinuityTags
   */
  readonly discontinuityTags?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#HlsCdnSettings
   */
  readonly hlsCdnSettings?: MediaLiveHlsCdnSettings;

  /**
   * @schema MediaLiveHlsGroupSettings#HlsId3SegmentTagging
   */
  readonly hlsId3SegmentTagging?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#IFrameOnlyPlaylists
   */
  readonly iFrameOnlyPlaylists?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#IncompleteSegmentBehavior
   */
  readonly incompleteSegmentBehavior?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#IndexNSegments
   */
  readonly indexNSegments?: number;

  /**
   * @schema MediaLiveHlsGroupSettings#InputLossAction
   */
  readonly inputLossAction?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#IvInManifest
   */
  readonly ivInManifest?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#IvSource
   */
  readonly ivSource?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#KeepSegments
   */
  readonly keepSegments?: number;

  /**
   * @schema MediaLiveHlsGroupSettings#KeyFormat
   */
  readonly keyFormat?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#KeyFormatVersions
   */
  readonly keyFormatVersions?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#KeyProviderSettings
   */
  readonly keyProviderSettings?: MediaLiveKeyProviderSettings;

  /**
   * @schema MediaLiveHlsGroupSettings#ManifestCompression
   */
  readonly manifestCompression?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#ManifestDurationFormat
   */
  readonly manifestDurationFormat?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#MinSegmentLength
   */
  readonly minSegmentLength?: number;

  /**
   * @schema MediaLiveHlsGroupSettings#Mode
   */
  readonly mode?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#OutputSelection
   */
  readonly outputSelection?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#ProgramDateTime
   */
  readonly programDateTime?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#ProgramDateTimePeriod
   */
  readonly programDateTimePeriod?: number;

  /**
   * @schema MediaLiveHlsGroupSettings#RedundantManifest
   */
  readonly redundantManifest?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema MediaLiveHlsGroupSettings#SegmentationMode
   */
  readonly segmentationMode?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#SegmentsPerSubdirectory
   */
  readonly segmentsPerSubdirectory?: number;

  /**
   * @schema MediaLiveHlsGroupSettings#StreamInfResolution
   */
  readonly streamInfResolution?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#TimedMetadataId3Frame
   */
  readonly timedMetadataId3Frame?: string;

  /**
   * @schema MediaLiveHlsGroupSettings#TimedMetadataId3Period
   */
  readonly timedMetadataId3Period?: number;

  /**
   * @schema MediaLiveHlsGroupSettings#TimestampDeltaMilliseconds
   */
  readonly timestampDeltaMilliseconds?: number;

  /**
   * @schema MediaLiveHlsGroupSettings#TsFileMode
   */
  readonly tsFileMode?: string;

}

/**
 * @schema MediaLiveMediaPackageGroupSettings
 */
export interface MediaLiveMediaPackageGroupSettings {
  /**
   * @schema MediaLiveMediaPackageGroupSettings#Destination
   */
  readonly destination: MediaLiveOutputLocationRef;

}

/**
 * @schema MediaLiveMsSmoothGroupSettings
 */
export interface MediaLiveMsSmoothGroupSettings {
  /**
   * @schema MediaLiveMsSmoothGroupSettings#AcquisitionPointId
   */
  readonly acquisitionPointId?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#AudioOnlyTimecodeControl
   */
  readonly audioOnlyTimecodeControl?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#CertificateMode
   */
  readonly certificateMode?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#Destination
   */
  readonly destination: MediaLiveOutputLocationRef;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#EventId
   */
  readonly eventId?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#EventIdMode
   */
  readonly eventIdMode?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#EventStopBehavior
   */
  readonly eventStopBehavior?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#FilecacheDuration
   */
  readonly filecacheDuration?: number;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#InputLossAction
   */
  readonly inputLossAction?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#NumRetries
   */
  readonly numRetries?: number;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#RestartDelay
   */
  readonly restartDelay?: number;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#SegmentationMode
   */
  readonly segmentationMode?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#SendDelayMs
   */
  readonly sendDelayMs?: number;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#SparseTrackType
   */
  readonly sparseTrackType?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#StreamManifestBehavior
   */
  readonly streamManifestBehavior?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#TimestampOffset
   */
  readonly timestampOffset?: string;

  /**
   * @schema MediaLiveMsSmoothGroupSettings#TimestampOffsetMode
   */
  readonly timestampOffsetMode?: string;

}

/**
 * @schema MediaLiveMultiplexGroupSettings
 */
export interface MediaLiveMultiplexGroupSettings {
}

/**
 * @schema MediaLiveRtmpGroupSettings
 */
export interface MediaLiveRtmpGroupSettings {
  /**
   * @schema MediaLiveRtmpGroupSettings#AdMarkers
   */
  readonly adMarkers?: string[];

  /**
   * @schema MediaLiveRtmpGroupSettings#AuthenticationScheme
   */
  readonly authenticationScheme?: string;

  /**
   * @schema MediaLiveRtmpGroupSettings#CacheFullBehavior
   */
  readonly cacheFullBehavior?: string;

  /**
   * @schema MediaLiveRtmpGroupSettings#CacheLength
   */
  readonly cacheLength?: number;

  /**
   * @schema MediaLiveRtmpGroupSettings#CaptionData
   */
  readonly captionData?: string;

  /**
   * @schema MediaLiveRtmpGroupSettings#InputLossAction
   */
  readonly inputLossAction?: string;

  /**
   * @schema MediaLiveRtmpGroupSettings#RestartDelay
   */
  readonly restartDelay?: number;

}

/**
 * @schema MediaLiveUdpGroupSettings
 */
export interface MediaLiveUdpGroupSettings {
  /**
   * @schema MediaLiveUdpGroupSettings#InputLossAction
   */
  readonly inputLossAction?: string;

  /**
   * @schema MediaLiveUdpGroupSettings#TimedMetadataId3Frame
   */
  readonly timedMetadataId3Frame?: string;

  /**
   * @schema MediaLiveUdpGroupSettings#TimedMetadataId3Period
   */
  readonly timedMetadataId3Period?: number;

}

/**
 * @schema MediaLiveOutputSettings
 */
export interface MediaLiveOutputSettings {
  /**
   * @schema MediaLiveOutputSettings#ArchiveOutputSettings
   */
  readonly archiveOutputSettings?: MediaLiveArchiveOutputSettings;

  /**
   * @schema MediaLiveOutputSettings#FrameCaptureOutputSettings
   */
  readonly frameCaptureOutputSettings?: MediaLiveFrameCaptureOutputSettings;

  /**
   * @schema MediaLiveOutputSettings#HlsOutputSettings
   */
  readonly hlsOutputSettings?: MediaLiveHlsOutputSettings;

  /**
   * @schema MediaLiveOutputSettings#MediaPackageOutputSettings
   */
  readonly mediaPackageOutputSettings?: MediaLiveMediaPackageOutputSettings;

  /**
   * @schema MediaLiveOutputSettings#MsSmoothOutputSettings
   */
  readonly msSmoothOutputSettings?: MediaLiveMsSmoothOutputSettings;

  /**
   * @schema MediaLiveOutputSettings#MultiplexOutputSettings
   */
  readonly multiplexOutputSettings?: MediaLiveMultiplexOutputSettings;

  /**
   * @schema MediaLiveOutputSettings#RtmpOutputSettings
   */
  readonly rtmpOutputSettings?: MediaLiveRtmpOutputSettings;

  /**
   * @schema MediaLiveOutputSettings#UdpOutputSettings
   */
  readonly udpOutputSettings?: MediaLiveUdpOutputSettings;

}

/**
 * @schema MediaLiveFrameCaptureSettings
 */
export interface MediaLiveFrameCaptureSettings {
  /**
   * @schema MediaLiveFrameCaptureSettings#CaptureInterval
   */
  readonly captureInterval: number;

  /**
   * @schema MediaLiveFrameCaptureSettings#CaptureIntervalUnits
   */
  readonly captureIntervalUnits?: string;

}

/**
 * @schema MediaLiveH264Settings
 */
export interface MediaLiveH264Settings {
  /**
   * @schema MediaLiveH264Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaLiveH264Settings#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema MediaLiveH264Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaLiveH264Settings#BufFillPct
   */
  readonly bufFillPct?: number;

  /**
   * @schema MediaLiveH264Settings#BufSize
   */
  readonly bufSize?: number;

  /**
   * @schema MediaLiveH264Settings#ColorMetadata
   */
  readonly colorMetadata?: string;

  /**
   * @schema MediaLiveH264Settings#ColorSpaceSettings
   */
  readonly colorSpaceSettings?: MediaLiveH264ColorSpaceSettings;

  /**
   * @schema MediaLiveH264Settings#EntropyEncoding
   */
  readonly entropyEncoding?: string;

  /**
   * @schema MediaLiveH264Settings#FilterSettings
   */
  readonly filterSettings?: MediaLiveH264FilterSettings;

  /**
   * @schema MediaLiveH264Settings#FixedAfd
   */
  readonly fixedAfd?: string;

  /**
   * @schema MediaLiveH264Settings#FlickerAq
   */
  readonly flickerAq?: string;

  /**
   * @schema MediaLiveH264Settings#ForceFieldPictures
   */
  readonly forceFieldPictures?: string;

  /**
   * @schema MediaLiveH264Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaLiveH264Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaLiveH264Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaLiveH264Settings#GopBReference
   */
  readonly gopBReference?: string;

  /**
   * @schema MediaLiveH264Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaLiveH264Settings#GopNumBFrames
   */
  readonly gopNumBFrames?: number;

  /**
   * @schema MediaLiveH264Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaLiveH264Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema MediaLiveH264Settings#Level
   */
  readonly level?: string;

  /**
   * @schema MediaLiveH264Settings#LookAheadRateControl
   */
  readonly lookAheadRateControl?: string;

  /**
   * @schema MediaLiveH264Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaLiveH264Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema MediaLiveH264Settings#NumRefFrames
   */
  readonly numRefFrames?: number;

  /**
   * @schema MediaLiveH264Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaLiveH264Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaLiveH264Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaLiveH264Settings#Profile
   */
  readonly profile?: string;

  /**
   * @schema MediaLiveH264Settings#QualityLevel
   */
  readonly qualityLevel?: string;

  /**
   * @schema MediaLiveH264Settings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema MediaLiveH264Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaLiveH264Settings#ScanType
   */
  readonly scanType?: string;

  /**
   * @schema MediaLiveH264Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema MediaLiveH264Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema MediaLiveH264Settings#Softness
   */
  readonly softness?: number;

  /**
   * @schema MediaLiveH264Settings#SpatialAq
   */
  readonly spatialAq?: string;

  /**
   * @schema MediaLiveH264Settings#SubgopLength
   */
  readonly subgopLength?: string;

  /**
   * @schema MediaLiveH264Settings#Syntax
   */
  readonly syntax?: string;

  /**
   * @schema MediaLiveH264Settings#TemporalAq
   */
  readonly temporalAq?: string;

  /**
   * @schema MediaLiveH264Settings#TimecodeInsertion
   */
  readonly timecodeInsertion?: string;

}

/**
 * @schema MediaLiveH265Settings
 */
export interface MediaLiveH265Settings {
  /**
   * @schema MediaLiveH265Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaLiveH265Settings#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema MediaLiveH265Settings#AlternativeTransferFunction
   */
  readonly alternativeTransferFunction?: string;

  /**
   * @schema MediaLiveH265Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaLiveH265Settings#BufSize
   */
  readonly bufSize?: number;

  /**
   * @schema MediaLiveH265Settings#ColorMetadata
   */
  readonly colorMetadata?: string;

  /**
   * @schema MediaLiveH265Settings#ColorSpaceSettings
   */
  readonly colorSpaceSettings?: MediaLiveH265ColorSpaceSettings;

  /**
   * @schema MediaLiveH265Settings#FilterSettings
   */
  readonly filterSettings?: MediaLiveH265FilterSettings;

  /**
   * @schema MediaLiveH265Settings#FixedAfd
   */
  readonly fixedAfd?: string;

  /**
   * @schema MediaLiveH265Settings#FlickerAq
   */
  readonly flickerAq?: string;

  /**
   * @schema MediaLiveH265Settings#FramerateDenominator
   */
  readonly framerateDenominator: number;

  /**
   * @schema MediaLiveH265Settings#FramerateNumerator
   */
  readonly framerateNumerator: number;

  /**
   * @schema MediaLiveH265Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaLiveH265Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaLiveH265Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema MediaLiveH265Settings#Level
   */
  readonly level?: string;

  /**
   * @schema MediaLiveH265Settings#LookAheadRateControl
   */
  readonly lookAheadRateControl?: string;

  /**
   * @schema MediaLiveH265Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaLiveH265Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema MediaLiveH265Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaLiveH265Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaLiveH265Settings#Profile
   */
  readonly profile?: string;

  /**
   * @schema MediaLiveH265Settings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema MediaLiveH265Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaLiveH265Settings#ScanType
   */
  readonly scanType?: string;

  /**
   * @schema MediaLiveH265Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema MediaLiveH265Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema MediaLiveH265Settings#Tier
   */
  readonly tier?: string;

  /**
   * @schema MediaLiveH265Settings#TimecodeInsertion
   */
  readonly timecodeInsertion?: string;

}

/**
 * @schema MediaLiveMpeg2Settings
 */
export interface MediaLiveMpeg2Settings {
  /**
   * @schema MediaLiveMpeg2Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaLiveMpeg2Settings#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema MediaLiveMpeg2Settings#ColorMetadata
   */
  readonly colorMetadata?: string;

  /**
   * @schema MediaLiveMpeg2Settings#ColorSpace
   */
  readonly colorSpace?: string;

  /**
   * @schema MediaLiveMpeg2Settings#DisplayAspectRatio
   */
  readonly displayAspectRatio?: string;

  /**
   * @schema MediaLiveMpeg2Settings#FilterSettings
   */
  readonly filterSettings?: MediaLiveMpeg2FilterSettings;

  /**
   * @schema MediaLiveMpeg2Settings#FixedAfd
   */
  readonly fixedAfd?: string;

  /**
   * @schema MediaLiveMpeg2Settings#FramerateDenominator
   */
  readonly framerateDenominator: number;

  /**
   * @schema MediaLiveMpeg2Settings#FramerateNumerator
   */
  readonly framerateNumerator: number;

  /**
   * @schema MediaLiveMpeg2Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaLiveMpeg2Settings#GopNumBFrames
   */
  readonly gopNumBFrames?: number;

  /**
   * @schema MediaLiveMpeg2Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaLiveMpeg2Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema MediaLiveMpeg2Settings#ScanType
   */
  readonly scanType?: string;

  /**
   * @schema MediaLiveMpeg2Settings#SubgopLength
   */
  readonly subgopLength?: string;

  /**
   * @schema MediaLiveMpeg2Settings#TimecodeInsertion
   */
  readonly timecodeInsertion?: string;

}

/**
 * @schema MediaLiveFailoverConditionSettings
 */
export interface MediaLiveFailoverConditionSettings {
  /**
   * @schema MediaLiveFailoverConditionSettings#InputLossSettings
   */
  readonly inputLossSettings?: MediaLiveInputLossFailoverSettings;

}

/**
 * @schema MediaLiveAudioSelectorSettings
 */
export interface MediaLiveAudioSelectorSettings {
  /**
   * @schema MediaLiveAudioSelectorSettings#AudioLanguageSelection
   */
  readonly audioLanguageSelection?: MediaLiveAudioLanguageSelection;

  /**
   * @schema MediaLiveAudioSelectorSettings#AudioPidSelection
   */
  readonly audioPidSelection?: MediaLiveAudioPidSelection;

  /**
   * @schema MediaLiveAudioSelectorSettings#AudioTrackSelection
   */
  readonly audioTrackSelection?: MediaLiveAudioTrackSelection;

}

/**
 * @schema MediaLiveCaptionSelectorSettings
 */
export interface MediaLiveCaptionSelectorSettings {
  /**
   * @schema MediaLiveCaptionSelectorSettings#AncillarySourceSettings
   */
  readonly ancillarySourceSettings?: MediaLiveAncillarySourceSettings;

  /**
   * @schema MediaLiveCaptionSelectorSettings#AribSourceSettings
   */
  readonly aribSourceSettings?: MediaLiveAribSourceSettings;

  /**
   * @schema MediaLiveCaptionSelectorSettings#DvbSubSourceSettings
   */
  readonly dvbSubSourceSettings?: MediaLiveDvbSubSourceSettings;

  /**
   * @schema MediaLiveCaptionSelectorSettings#EmbeddedSourceSettings
   */
  readonly embeddedSourceSettings?: MediaLiveEmbeddedSourceSettings;

  /**
   * @schema MediaLiveCaptionSelectorSettings#Scte20SourceSettings
   */
  readonly scte20SourceSettings?: MediaLiveScte20SourceSettings;

  /**
   * @schema MediaLiveCaptionSelectorSettings#Scte27SourceSettings
   */
  readonly scte27SourceSettings?: MediaLiveScte27SourceSettings;

  /**
   * @schema MediaLiveCaptionSelectorSettings#TeletextSourceSettings
   */
  readonly teletextSourceSettings?: MediaLiveTeletextSourceSettings;

}

/**
 * @schema MediaLiveHlsInputSettings
 */
export interface MediaLiveHlsInputSettings {
  /**
   * @schema MediaLiveHlsInputSettings#Bandwidth
   */
  readonly bandwidth?: number;

  /**
   * @schema MediaLiveHlsInputSettings#BufferSegments
   */
  readonly bufferSegments?: number;

  /**
   * @schema MediaLiveHlsInputSettings#Retries
   */
  readonly retries?: number;

  /**
   * @schema MediaLiveHlsInputSettings#RetryInterval
   */
  readonly retryInterval?: number;

}

/**
 * @schema MediaLiveVideoSelectorSettings
 */
export interface MediaLiveVideoSelectorSettings {
  /**
   * @schema MediaLiveVideoSelectorSettings#VideoSelectorPid
   */
  readonly videoSelectorPid?: MediaLiveVideoSelectorPid;

  /**
   * @schema MediaLiveVideoSelectorSettings#VideoSelectorProgramId
   */
  readonly videoSelectorProgramId?: MediaLiveVideoSelectorProgramId;

}

/**
 * @schema MediaLiveInputClippingSettings
 */
export interface MediaLiveInputClippingSettings {
  /**
   * @schema MediaLiveInputClippingSettings#InputTimecodeSource
   */
  readonly inputTimecodeSource: string;

  /**
   * @schema MediaLiveInputClippingSettings#StartTimecode
   */
  readonly startTimecode?: MediaLiveStartTimecode;

  /**
   * @schema MediaLiveInputClippingSettings#StopTimecode
   */
  readonly stopTimecode?: MediaLiveStopTimecode;

}

/**
 * @schema MediaLivePipelinePauseStateSettings
 */
export interface MediaLivePipelinePauseStateSettings {
  /**
   * @schema MediaLivePipelinePauseStateSettings#PipelineId
   */
  readonly pipelineId: string;

}

/**
 * @schema MediaLiveScte35Descriptor
 */
export interface MediaLiveScte35Descriptor {
  /**
   * @schema MediaLiveScte35Descriptor#Scte35DescriptorSettings
   */
  readonly scte35DescriptorSettings: MediaLiveScte35DescriptorSettings;

}

/**
 * @schema MediaLiveInputChannelLevel
 */
export interface MediaLiveInputChannelLevel {
  /**
   * @schema MediaLiveInputChannelLevel#Gain
   */
  readonly gain: number;

  /**
   * @schema MediaLiveInputChannelLevel#InputChannel
   */
  readonly inputChannel: number;

}

/**
 * @schema MediaLiveOutputLocationRef
 */
export interface MediaLiveOutputLocationRef {
  /**
   * @schema MediaLiveOutputLocationRef#DestinationRefId
   */
  readonly destinationRefId?: string;

}

/**
 * @schema MediaLiveCaptionLanguageMapping
 */
export interface MediaLiveCaptionLanguageMapping {
  /**
   * @schema MediaLiveCaptionLanguageMapping#CaptionChannel
   */
  readonly captionChannel: number;

  /**
   * @schema MediaLiveCaptionLanguageMapping#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema MediaLiveCaptionLanguageMapping#LanguageDescription
   */
  readonly languageDescription: string;

}

/**
 * @schema MediaLiveHlsCdnSettings
 */
export interface MediaLiveHlsCdnSettings {
  /**
   * @schema MediaLiveHlsCdnSettings#HlsAkamaiSettings
   */
  readonly hlsAkamaiSettings?: MediaLiveHlsAkamaiSettings;

  /**
   * @schema MediaLiveHlsCdnSettings#HlsBasicPutSettings
   */
  readonly hlsBasicPutSettings?: MediaLiveHlsBasicPutSettings;

  /**
   * @schema MediaLiveHlsCdnSettings#HlsMediaStoreSettings
   */
  readonly hlsMediaStoreSettings?: MediaLiveHlsMediaStoreSettings;

  /**
   * @schema MediaLiveHlsCdnSettings#HlsWebdavSettings
   */
  readonly hlsWebdavSettings?: MediaLiveHlsWebdavSettings;

}

/**
 * @schema MediaLiveKeyProviderSettings
 */
export interface MediaLiveKeyProviderSettings {
  /**
   * @schema MediaLiveKeyProviderSettings#StaticKeySettings
   */
  readonly staticKeySettings?: MediaLiveStaticKeySettings;

}

/**
 * @schema MediaLiveArchiveOutputSettings
 */
export interface MediaLiveArchiveOutputSettings {
  /**
   * @schema MediaLiveArchiveOutputSettings#ContainerSettings
   */
  readonly containerSettings: MediaLiveArchiveContainerSettings;

  /**
   * @schema MediaLiveArchiveOutputSettings#Extension
   */
  readonly extension?: string;

  /**
   * @schema MediaLiveArchiveOutputSettings#NameModifier
   */
  readonly nameModifier?: string;

}

/**
 * @schema MediaLiveFrameCaptureOutputSettings
 */
export interface MediaLiveFrameCaptureOutputSettings {
  /**
   * @schema MediaLiveFrameCaptureOutputSettings#NameModifier
   */
  readonly nameModifier?: string;

}

/**
 * @schema MediaLiveHlsOutputSettings
 */
export interface MediaLiveHlsOutputSettings {
  /**
   * @schema MediaLiveHlsOutputSettings#H265PackagingType
   */
  readonly h265PackagingType?: string;

  /**
   * @schema MediaLiveHlsOutputSettings#HlsSettings
   */
  readonly hlsSettings: MediaLiveHlsSettings;

  /**
   * @schema MediaLiveHlsOutputSettings#NameModifier
   */
  readonly nameModifier?: string;

  /**
   * @schema MediaLiveHlsOutputSettings#SegmentModifier
   */
  readonly segmentModifier?: string;

}

/**
 * @schema MediaLiveMediaPackageOutputSettings
 */
export interface MediaLiveMediaPackageOutputSettings {
}

/**
 * @schema MediaLiveMsSmoothOutputSettings
 */
export interface MediaLiveMsSmoothOutputSettings {
  /**
   * @schema MediaLiveMsSmoothOutputSettings#H265PackagingType
   */
  readonly h265PackagingType?: string;

  /**
   * @schema MediaLiveMsSmoothOutputSettings#NameModifier
   */
  readonly nameModifier?: string;

}

/**
 * @schema MediaLiveMultiplexOutputSettings
 */
export interface MediaLiveMultiplexOutputSettings {
  /**
   * @schema MediaLiveMultiplexOutputSettings#Destination
   */
  readonly destination: MediaLiveOutputLocationRef;

}

/**
 * @schema MediaLiveRtmpOutputSettings
 */
export interface MediaLiveRtmpOutputSettings {
  /**
   * @schema MediaLiveRtmpOutputSettings#CertificateMode
   */
  readonly certificateMode?: string;

  /**
   * @schema MediaLiveRtmpOutputSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema MediaLiveRtmpOutputSettings#Destination
   */
  readonly destination: MediaLiveOutputLocationRef;

  /**
   * @schema MediaLiveRtmpOutputSettings#NumRetries
   */
  readonly numRetries?: number;

}

/**
 * @schema MediaLiveUdpOutputSettings
 */
export interface MediaLiveUdpOutputSettings {
  /**
   * @schema MediaLiveUdpOutputSettings#BufferMsec
   */
  readonly bufferMsec?: number;

  /**
   * @schema MediaLiveUdpOutputSettings#ContainerSettings
   */
  readonly containerSettings: MediaLiveUdpContainerSettings;

  /**
   * @schema MediaLiveUdpOutputSettings#Destination
   */
  readonly destination: MediaLiveOutputLocationRef;

  /**
   * @schema MediaLiveUdpOutputSettings#FecOutputSettings
   */
  readonly fecOutputSettings?: MediaLiveFecOutputSettings;

}

/**
 * @schema MediaLiveH264ColorSpaceSettings
 */
export interface MediaLiveH264ColorSpaceSettings {
  /**
   * @schema MediaLiveH264ColorSpaceSettings#ColorSpacePassthroughSettings
   */
  readonly colorSpacePassthroughSettings?: MediaLiveColorSpacePassthroughSettings;

  /**
   * @schema MediaLiveH264ColorSpaceSettings#Rec601Settings
   */
  readonly rec601Settings?: MediaLiveRec601Settings;

  /**
   * @schema MediaLiveH264ColorSpaceSettings#Rec709Settings
   */
  readonly rec709Settings?: MediaLiveRec709Settings;

}

/**
 * @schema MediaLiveH264FilterSettings
 */
export interface MediaLiveH264FilterSettings {
  /**
   * @schema MediaLiveH264FilterSettings#TemporalFilterSettings
   */
  readonly temporalFilterSettings?: MediaLiveTemporalFilterSettings;

}

/**
 * @schema MediaLiveH265ColorSpaceSettings
 */
export interface MediaLiveH265ColorSpaceSettings {
  /**
   * @schema MediaLiveH265ColorSpaceSettings#ColorSpacePassthroughSettings
   */
  readonly colorSpacePassthroughSettings?: MediaLiveColorSpacePassthroughSettings;

  /**
   * @schema MediaLiveH265ColorSpaceSettings#Hdr10Settings
   */
  readonly hdr10Settings?: MediaLiveHdr10Settings;

  /**
   * @schema MediaLiveH265ColorSpaceSettings#Rec601Settings
   */
  readonly rec601Settings?: MediaLiveRec601Settings;

  /**
   * @schema MediaLiveH265ColorSpaceSettings#Rec709Settings
   */
  readonly rec709Settings?: MediaLiveRec709Settings;

}

/**
 * @schema MediaLiveH265FilterSettings
 */
export interface MediaLiveH265FilterSettings {
  /**
   * @schema MediaLiveH265FilterSettings#TemporalFilterSettings
   */
  readonly temporalFilterSettings?: MediaLiveTemporalFilterSettings;

}

/**
 * @schema MediaLiveMpeg2FilterSettings
 */
export interface MediaLiveMpeg2FilterSettings {
  /**
   * @schema MediaLiveMpeg2FilterSettings#TemporalFilterSettings
   */
  readonly temporalFilterSettings?: MediaLiveTemporalFilterSettings;

}

/**
 * @schema MediaLiveInputLossFailoverSettings
 */
export interface MediaLiveInputLossFailoverSettings {
  /**
   * @schema MediaLiveInputLossFailoverSettings#InputLossThresholdMsec
   */
  readonly inputLossThresholdMsec?: number;

}

/**
 * @schema MediaLiveAudioLanguageSelection
 */
export interface MediaLiveAudioLanguageSelection {
  /**
   * @schema MediaLiveAudioLanguageSelection#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema MediaLiveAudioLanguageSelection#LanguageSelectionPolicy
   */
  readonly languageSelectionPolicy?: string;

}

/**
 * @schema MediaLiveAudioPidSelection
 */
export interface MediaLiveAudioPidSelection {
  /**
   * @schema MediaLiveAudioPidSelection#Pid
   */
  readonly pid: number;

}

/**
 * @schema MediaLiveAudioTrackSelection
 */
export interface MediaLiveAudioTrackSelection {
  /**
   * @schema MediaLiveAudioTrackSelection#Tracks
   */
  readonly tracks: MediaLiveAudioTrack[];

}

/**
 * @schema MediaLiveAncillarySourceSettings
 */
export interface MediaLiveAncillarySourceSettings {
  /**
   * @schema MediaLiveAncillarySourceSettings#SourceAncillaryChannelNumber
   */
  readonly sourceAncillaryChannelNumber?: number;

}

/**
 * @schema MediaLiveAribSourceSettings
 */
export interface MediaLiveAribSourceSettings {
}

/**
 * @schema MediaLiveDvbSubSourceSettings
 */
export interface MediaLiveDvbSubSourceSettings {
  /**
   * @schema MediaLiveDvbSubSourceSettings#Pid
   */
  readonly pid?: number;

}

/**
 * @schema MediaLiveEmbeddedSourceSettings
 */
export interface MediaLiveEmbeddedSourceSettings {
  /**
   * @schema MediaLiveEmbeddedSourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema MediaLiveEmbeddedSourceSettings#Scte20Detection
   */
  readonly scte20Detection?: string;

  /**
   * @schema MediaLiveEmbeddedSourceSettings#Source608ChannelNumber
   */
  readonly source608ChannelNumber?: number;

  /**
   * @schema MediaLiveEmbeddedSourceSettings#Source608TrackNumber
   */
  readonly source608TrackNumber?: number;

}

/**
 * @schema MediaLiveScte20SourceSettings
 */
export interface MediaLiveScte20SourceSettings {
  /**
   * @schema MediaLiveScte20SourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema MediaLiveScte20SourceSettings#Source608ChannelNumber
   */
  readonly source608ChannelNumber?: number;

}

/**
 * @schema MediaLiveScte27SourceSettings
 */
export interface MediaLiveScte27SourceSettings {
  /**
   * @schema MediaLiveScte27SourceSettings#Pid
   */
  readonly pid?: number;

}

/**
 * @schema MediaLiveTeletextSourceSettings
 */
export interface MediaLiveTeletextSourceSettings {
  /**
   * @schema MediaLiveTeletextSourceSettings#PageNumber
   */
  readonly pageNumber?: string;

}

/**
 * @schema MediaLiveVideoSelectorPid
 */
export interface MediaLiveVideoSelectorPid {
  /**
   * @schema MediaLiveVideoSelectorPid#Pid
   */
  readonly pid?: number;

}

/**
 * @schema MediaLiveVideoSelectorProgramId
 */
export interface MediaLiveVideoSelectorProgramId {
  /**
   * @schema MediaLiveVideoSelectorProgramId#ProgramId
   */
  readonly programId?: number;

}

/**
 * @schema MediaLiveStartTimecode
 */
export interface MediaLiveStartTimecode {
  /**
   * @schema MediaLiveStartTimecode#Timecode
   */
  readonly timecode?: string;

}

/**
 * @schema MediaLiveStopTimecode
 */
export interface MediaLiveStopTimecode {
  /**
   * @schema MediaLiveStopTimecode#LastFrameClippingBehavior
   */
  readonly lastFrameClippingBehavior?: string;

  /**
   * @schema MediaLiveStopTimecode#Timecode
   */
  readonly timecode?: string;

}

/**
 * @schema MediaLiveScte35DescriptorSettings
 */
export interface MediaLiveScte35DescriptorSettings {
  /**
   * @schema MediaLiveScte35DescriptorSettings#SegmentationDescriptorScte35DescriptorSettings
   */
  readonly segmentationDescriptorScte35DescriptorSettings: MediaLiveScte35SegmentationDescriptor;

}

/**
 * @schema MediaLiveHlsAkamaiSettings
 */
export interface MediaLiveHlsAkamaiSettings {
  /**
   * @schema MediaLiveHlsAkamaiSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema MediaLiveHlsAkamaiSettings#FilecacheDuration
   */
  readonly filecacheDuration?: number;

  /**
   * @schema MediaLiveHlsAkamaiSettings#HttpTransferMode
   */
  readonly httpTransferMode?: string;

  /**
   * @schema MediaLiveHlsAkamaiSettings#NumRetries
   */
  readonly numRetries?: number;

  /**
   * @schema MediaLiveHlsAkamaiSettings#RestartDelay
   */
  readonly restartDelay?: number;

  /**
   * @schema MediaLiveHlsAkamaiSettings#Salt
   */
  readonly salt?: string;

  /**
   * @schema MediaLiveHlsAkamaiSettings#Token
   */
  readonly token?: string;

}

/**
 * @schema MediaLiveHlsBasicPutSettings
 */
export interface MediaLiveHlsBasicPutSettings {
  /**
   * @schema MediaLiveHlsBasicPutSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema MediaLiveHlsBasicPutSettings#FilecacheDuration
   */
  readonly filecacheDuration?: number;

  /**
   * @schema MediaLiveHlsBasicPutSettings#NumRetries
   */
  readonly numRetries?: number;

  /**
   * @schema MediaLiveHlsBasicPutSettings#RestartDelay
   */
  readonly restartDelay?: number;

}

/**
 * @schema MediaLiveHlsMediaStoreSettings
 */
export interface MediaLiveHlsMediaStoreSettings {
  /**
   * @schema MediaLiveHlsMediaStoreSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema MediaLiveHlsMediaStoreSettings#FilecacheDuration
   */
  readonly filecacheDuration?: number;

  /**
   * @schema MediaLiveHlsMediaStoreSettings#MediaStoreStorageClass
   */
  readonly mediaStoreStorageClass?: string;

  /**
   * @schema MediaLiveHlsMediaStoreSettings#NumRetries
   */
  readonly numRetries?: number;

  /**
   * @schema MediaLiveHlsMediaStoreSettings#RestartDelay
   */
  readonly restartDelay?: number;

}

/**
 * @schema MediaLiveHlsWebdavSettings
 */
export interface MediaLiveHlsWebdavSettings {
  /**
   * @schema MediaLiveHlsWebdavSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema MediaLiveHlsWebdavSettings#FilecacheDuration
   */
  readonly filecacheDuration?: number;

  /**
   * @schema MediaLiveHlsWebdavSettings#HttpTransferMode
   */
  readonly httpTransferMode?: string;

  /**
   * @schema MediaLiveHlsWebdavSettings#NumRetries
   */
  readonly numRetries?: number;

  /**
   * @schema MediaLiveHlsWebdavSettings#RestartDelay
   */
  readonly restartDelay?: number;

}

/**
 * @schema MediaLiveStaticKeySettings
 */
export interface MediaLiveStaticKeySettings {
  /**
   * @schema MediaLiveStaticKeySettings#KeyProviderServer
   */
  readonly keyProviderServer?: MediaLiveInputLocation;

  /**
   * @schema MediaLiveStaticKeySettings#StaticKeyValue
   */
  readonly staticKeyValue: string;

}

/**
 * @schema MediaLiveArchiveContainerSettings
 */
export interface MediaLiveArchiveContainerSettings {
  /**
   * @schema MediaLiveArchiveContainerSettings#M2tsSettings
   */
  readonly m2TsSettings?: MediaLiveM2tsSettings;

  /**
   * @schema MediaLiveArchiveContainerSettings#RawSettings
   */
  readonly rawSettings?: MediaLiveRawSettings;

}

/**
 * @schema MediaLiveHlsSettings
 */
export interface MediaLiveHlsSettings {
  /**
   * @schema MediaLiveHlsSettings#AudioOnlyHlsSettings
   */
  readonly audioOnlyHlsSettings?: MediaLiveAudioOnlyHlsSettings;

  /**
   * @schema MediaLiveHlsSettings#Fmp4HlsSettings
   */
  readonly fmp4HlsSettings?: MediaLiveFmp4HlsSettings;

  /**
   * @schema MediaLiveHlsSettings#StandardHlsSettings
   */
  readonly standardHlsSettings?: MediaLiveStandardHlsSettings;

}

/**
 * @schema MediaLiveUdpContainerSettings
 */
export interface MediaLiveUdpContainerSettings {
  /**
   * @schema MediaLiveUdpContainerSettings#M2tsSettings
   */
  readonly m2TsSettings?: MediaLiveM2tsSettings;

}

/**
 * @schema MediaLiveFecOutputSettings
 */
export interface MediaLiveFecOutputSettings {
  /**
   * @schema MediaLiveFecOutputSettings#ColumnDepth
   */
  readonly columnDepth?: number;

  /**
   * @schema MediaLiveFecOutputSettings#IncludeFec
   */
  readonly includeFec?: string;

  /**
   * @schema MediaLiveFecOutputSettings#RowLength
   */
  readonly rowLength?: number;

}

/**
 * @schema MediaLiveColorSpacePassthroughSettings
 */
export interface MediaLiveColorSpacePassthroughSettings {
}

/**
 * @schema MediaLiveRec601Settings
 */
export interface MediaLiveRec601Settings {
}

/**
 * @schema MediaLiveRec709Settings
 */
export interface MediaLiveRec709Settings {
}

/**
 * @schema MediaLiveTemporalFilterSettings
 */
export interface MediaLiveTemporalFilterSettings {
  /**
   * @schema MediaLiveTemporalFilterSettings#PostFilterSharpening
   */
  readonly postFilterSharpening?: string;

  /**
   * @schema MediaLiveTemporalFilterSettings#Strength
   */
  readonly strength?: string;

}

/**
 * @schema MediaLiveHdr10Settings
 */
export interface MediaLiveHdr10Settings {
  /**
   * @schema MediaLiveHdr10Settings#MaxCll
   */
  readonly maxCll?: number;

  /**
   * @schema MediaLiveHdr10Settings#MaxFall
   */
  readonly maxFall?: number;

}

/**
 * @schema MediaLiveAudioTrack
 */
export interface MediaLiveAudioTrack {
  /**
   * @schema MediaLiveAudioTrack#Track
   */
  readonly track: number;

}

/**
 * @schema MediaLiveScte35SegmentationDescriptor
 */
export interface MediaLiveScte35SegmentationDescriptor {
  /**
   * @schema MediaLiveScte35SegmentationDescriptor#DeliveryRestrictions
   */
  readonly deliveryRestrictions?: MediaLiveScte35DeliveryRestrictions;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SegmentNum
   */
  readonly segmentNum?: number;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SegmentationCancelIndicator
   */
  readonly segmentationCancelIndicator: string;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SegmentationDuration
   */
  readonly segmentationDuration?: number;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SegmentationEventId
   */
  readonly segmentationEventId: number;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SegmentationTypeId
   */
  readonly segmentationTypeId?: number;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SegmentationUpid
   */
  readonly segmentationUpid?: string;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SegmentationUpidType
   */
  readonly segmentationUpidType?: number;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SegmentsExpected
   */
  readonly segmentsExpected?: number;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SubSegmentNum
   */
  readonly subSegmentNum?: number;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SubSegmentsExpected
   */
  readonly subSegmentsExpected?: number;

}

/**
 * @schema MediaLiveM2tsSettings
 */
export interface MediaLiveM2tsSettings {
  /**
   * @schema MediaLiveM2tsSettings#AbsentInputAudioBehavior
   */
  readonly absentInputAudioBehavior?: string;

  /**
   * @schema MediaLiveM2tsSettings#Arib
   */
  readonly arib?: string;

  /**
   * @schema MediaLiveM2tsSettings#AribCaptionsPid
   */
  readonly aribCaptionsPid?: string;

  /**
   * @schema MediaLiveM2tsSettings#AribCaptionsPidControl
   */
  readonly aribCaptionsPidControl?: string;

  /**
   * @schema MediaLiveM2tsSettings#AudioBufferModel
   */
  readonly audioBufferModel?: string;

  /**
   * @schema MediaLiveM2tsSettings#AudioFramesPerPes
   */
  readonly audioFramesPerPes?: number;

  /**
   * @schema MediaLiveM2tsSettings#AudioPids
   */
  readonly audioPids?: string;

  /**
   * @schema MediaLiveM2tsSettings#AudioStreamType
   */
  readonly audioStreamType?: string;

  /**
   * @schema MediaLiveM2tsSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaLiveM2tsSettings#BufferModel
   */
  readonly bufferModel?: string;

  /**
   * @schema MediaLiveM2tsSettings#CcDescriptor
   */
  readonly ccDescriptor?: string;

  /**
   * @schema MediaLiveM2tsSettings#DvbNitSettings
   */
  readonly dvbNitSettings?: MediaLiveDvbNitSettings;

  /**
   * @schema MediaLiveM2tsSettings#DvbSdtSettings
   */
  readonly dvbSdtSettings?: MediaLiveDvbSdtSettings;

  /**
   * @schema MediaLiveM2tsSettings#DvbSubPids
   */
  readonly dvbSubPids?: string;

  /**
   * @schema MediaLiveM2tsSettings#DvbTdtSettings
   */
  readonly dvbTdtSettings?: MediaLiveDvbTdtSettings;

  /**
   * @schema MediaLiveM2tsSettings#DvbTeletextPid
   */
  readonly dvbTeletextPid?: string;

  /**
   * @schema MediaLiveM2tsSettings#Ebif
   */
  readonly ebif?: string;

  /**
   * @schema MediaLiveM2tsSettings#EbpAudioInterval
   */
  readonly ebpAudioInterval?: string;

  /**
   * @schema MediaLiveM2tsSettings#EbpLookaheadMs
   */
  readonly ebpLookaheadMs?: number;

  /**
   * @schema MediaLiveM2tsSettings#EbpPlacement
   */
  readonly ebpPlacement?: string;

  /**
   * @schema MediaLiveM2tsSettings#EcmPid
   */
  readonly ecmPid?: string;

  /**
   * @schema MediaLiveM2tsSettings#EsRateInPes
   */
  readonly esRateInPes?: string;

  /**
   * @schema MediaLiveM2tsSettings#EtvPlatformPid
   */
  readonly etvPlatformPid?: string;

  /**
   * @schema MediaLiveM2tsSettings#EtvSignalPid
   */
  readonly etvSignalPid?: string;

  /**
   * @schema MediaLiveM2tsSettings#FragmentTime
   */
  readonly fragmentTime?: number;

  /**
   * @schema MediaLiveM2tsSettings#Klv
   */
  readonly klv?: string;

  /**
   * @schema MediaLiveM2tsSettings#KlvDataPids
   */
  readonly klvDataPids?: string;

  /**
   * @schema MediaLiveM2tsSettings#NielsenId3Behavior
   */
  readonly nielsenId3Behavior?: string;

  /**
   * @schema MediaLiveM2tsSettings#NullPacketBitrate
   */
  readonly nullPacketBitrate?: number;

  /**
   * @schema MediaLiveM2tsSettings#PatInterval
   */
  readonly patInterval?: number;

  /**
   * @schema MediaLiveM2tsSettings#PcrControl
   */
  readonly pcrControl?: string;

  /**
   * @schema MediaLiveM2tsSettings#PcrPeriod
   */
  readonly pcrPeriod?: number;

  /**
   * @schema MediaLiveM2tsSettings#PcrPid
   */
  readonly pcrPid?: string;

  /**
   * @schema MediaLiveM2tsSettings#PmtInterval
   */
  readonly pmtInterval?: number;

  /**
   * @schema MediaLiveM2tsSettings#PmtPid
   */
  readonly pmtPid?: string;

  /**
   * @schema MediaLiveM2tsSettings#ProgramNum
   */
  readonly programNum?: number;

  /**
   * @schema MediaLiveM2tsSettings#RateMode
   */
  readonly rateMode?: string;

  /**
   * @schema MediaLiveM2tsSettings#Scte27Pids
   */
  readonly scte27Pids?: string;

  /**
   * @schema MediaLiveM2tsSettings#Scte35Control
   */
  readonly scte35Control?: string;

  /**
   * @schema MediaLiveM2tsSettings#Scte35Pid
   */
  readonly scte35Pid?: string;

  /**
   * @schema MediaLiveM2tsSettings#SegmentationMarkers
   */
  readonly segmentationMarkers?: string;

  /**
   * @schema MediaLiveM2tsSettings#SegmentationStyle
   */
  readonly segmentationStyle?: string;

  /**
   * @schema MediaLiveM2tsSettings#SegmentationTime
   */
  readonly segmentationTime?: number;

  /**
   * @schema MediaLiveM2tsSettings#TimedMetadataBehavior
   */
  readonly timedMetadataBehavior?: string;

  /**
   * @schema MediaLiveM2tsSettings#TimedMetadataPid
   */
  readonly timedMetadataPid?: string;

  /**
   * @schema MediaLiveM2tsSettings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema MediaLiveM2tsSettings#VideoPid
   */
  readonly videoPid?: string;

}

/**
 * @schema MediaLiveRawSettings
 */
export interface MediaLiveRawSettings {
}

/**
 * @schema MediaLiveAudioOnlyHlsSettings
 */
export interface MediaLiveAudioOnlyHlsSettings {
  /**
   * @schema MediaLiveAudioOnlyHlsSettings#AudioGroupId
   */
  readonly audioGroupId?: string;

  /**
   * @schema MediaLiveAudioOnlyHlsSettings#AudioOnlyImage
   */
  readonly audioOnlyImage?: MediaLiveInputLocation;

  /**
   * @schema MediaLiveAudioOnlyHlsSettings#AudioTrackType
   */
  readonly audioTrackType?: string;

  /**
   * @schema MediaLiveAudioOnlyHlsSettings#SegmentType
   */
  readonly segmentType?: string;

}

/**
 * @schema MediaLiveFmp4HlsSettings
 */
export interface MediaLiveFmp4HlsSettings {
  /**
   * @schema MediaLiveFmp4HlsSettings#AudioRenditionSets
   */
  readonly audioRenditionSets?: string;

  /**
   * @schema MediaLiveFmp4HlsSettings#NielsenId3Behavior
   */
  readonly nielsenId3Behavior?: string;

  /**
   * @schema MediaLiveFmp4HlsSettings#TimedMetadataBehavior
   */
  readonly timedMetadataBehavior?: string;

}

/**
 * @schema MediaLiveStandardHlsSettings
 */
export interface MediaLiveStandardHlsSettings {
  /**
   * @schema MediaLiveStandardHlsSettings#AudioRenditionSets
   */
  readonly audioRenditionSets?: string;

  /**
   * @schema MediaLiveStandardHlsSettings#M3u8Settings
   */
  readonly m3U8Settings: MediaLiveM3u8Settings;

}

/**
 * @schema MediaLiveScte35DeliveryRestrictions
 */
export interface MediaLiveScte35DeliveryRestrictions {
  /**
   * @schema MediaLiveScte35DeliveryRestrictions#ArchiveAllowedFlag
   */
  readonly archiveAllowedFlag: string;

  /**
   * @schema MediaLiveScte35DeliveryRestrictions#DeviceRestrictions
   */
  readonly deviceRestrictions: string;

  /**
   * @schema MediaLiveScte35DeliveryRestrictions#NoRegionalBlackoutFlag
   */
  readonly noRegionalBlackoutFlag: string;

  /**
   * @schema MediaLiveScte35DeliveryRestrictions#WebDeliveryAllowedFlag
   */
  readonly webDeliveryAllowedFlag: string;

}

/**
 * @schema MediaLiveDvbNitSettings
 */
export interface MediaLiveDvbNitSettings {
  /**
   * @schema MediaLiveDvbNitSettings#NetworkId
   */
  readonly networkId: number;

  /**
   * @schema MediaLiveDvbNitSettings#NetworkName
   */
  readonly networkName: string;

  /**
   * @schema MediaLiveDvbNitSettings#RepInterval
   */
  readonly repInterval?: number;

}

/**
 * @schema MediaLiveDvbSdtSettings
 */
export interface MediaLiveDvbSdtSettings {
  /**
   * @schema MediaLiveDvbSdtSettings#OutputSdt
   */
  readonly outputSdt?: string;

  /**
   * @schema MediaLiveDvbSdtSettings#RepInterval
   */
  readonly repInterval?: number;

  /**
   * @schema MediaLiveDvbSdtSettings#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema MediaLiveDvbSdtSettings#ServiceProviderName
   */
  readonly serviceProviderName?: string;

}

/**
 * @schema MediaLiveDvbTdtSettings
 */
export interface MediaLiveDvbTdtSettings {
  /**
   * @schema MediaLiveDvbTdtSettings#RepInterval
   */
  readonly repInterval?: number;

}

/**
 * @schema MediaLiveM3u8Settings
 */
export interface MediaLiveM3u8Settings {
  /**
   * @schema MediaLiveM3u8Settings#AudioFramesPerPes
   */
  readonly audioFramesPerPes?: number;

  /**
   * @schema MediaLiveM3u8Settings#AudioPids
   */
  readonly audioPids?: string;

  /**
   * @schema MediaLiveM3u8Settings#EcmPid
   */
  readonly ecmPid?: string;

  /**
   * @schema MediaLiveM3u8Settings#NielsenId3Behavior
   */
  readonly nielsenId3Behavior?: string;

  /**
   * @schema MediaLiveM3u8Settings#PatInterval
   */
  readonly patInterval?: number;

  /**
   * @schema MediaLiveM3u8Settings#PcrControl
   */
  readonly pcrControl?: string;

  /**
   * @schema MediaLiveM3u8Settings#PcrPeriod
   */
  readonly pcrPeriod?: number;

  /**
   * @schema MediaLiveM3u8Settings#PcrPid
   */
  readonly pcrPid?: string;

  /**
   * @schema MediaLiveM3u8Settings#PmtInterval
   */
  readonly pmtInterval?: number;

  /**
   * @schema MediaLiveM3u8Settings#PmtPid
   */
  readonly pmtPid?: string;

  /**
   * @schema MediaLiveM3u8Settings#ProgramNum
   */
  readonly programNum?: number;

  /**
   * @schema MediaLiveM3u8Settings#Scte35Behavior
   */
  readonly scte35Behavior?: string;

  /**
   * @schema MediaLiveM3u8Settings#Scte35Pid
   */
  readonly scte35Pid?: string;

  /**
   * @schema MediaLiveM3u8Settings#TimedMetadataBehavior
   */
  readonly timedMetadataBehavior?: string;

  /**
   * @schema MediaLiveM3u8Settings#TimedMetadataPid
   */
  readonly timedMetadataPid?: string;

  /**
   * @schema MediaLiveM3u8Settings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema MediaLiveM3u8Settings#VideoPid
   */
  readonly videoPid?: string;

}
