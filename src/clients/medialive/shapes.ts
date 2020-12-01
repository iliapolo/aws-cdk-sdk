/**
 * @schema AcceptInputDeviceTransferRequest
 */
export interface AcceptInputDeviceTransferRequest {
  /**
   * @schema AcceptInputDeviceTransferRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

}

/**
 * @schema AcceptInputDeviceTransferResponse
 */
export interface AcceptInputDeviceTransferResponse {
}

/**
 * @schema BatchDeleteRequest
 */
export interface BatchDeleteRequest {
  /**
   * @schema BatchDeleteRequest#ChannelIds
   */
  readonly channelIds?: string[];

  /**
   * @schema BatchDeleteRequest#InputIds
   */
  readonly inputIds?: string[];

  /**
   * @schema BatchDeleteRequest#InputSecurityGroupIds
   */
  readonly inputSecurityGroupIds?: string[];

  /**
   * @schema BatchDeleteRequest#MultiplexIds
   */
  readonly multiplexIds?: string[];

}

/**
 * @schema BatchDeleteResponse
 */
export interface BatchDeleteResponse {
  /**
   * @schema BatchDeleteResponse#Failed
   */
  readonly failed?: BatchFailedResultModel[];

  /**
   * @schema BatchDeleteResponse#Successful
   */
  readonly successful?: BatchSuccessfulResultModel[];

}

/**
 * @schema BatchStartRequest
 */
export interface BatchStartRequest {
  /**
   * @schema BatchStartRequest#ChannelIds
   */
  readonly channelIds?: string[];

  /**
   * @schema BatchStartRequest#MultiplexIds
   */
  readonly multiplexIds?: string[];

}

/**
 * @schema BatchStartResponse
 */
export interface BatchStartResponse {
  /**
   * @schema BatchStartResponse#Failed
   */
  readonly failed?: BatchFailedResultModel[];

  /**
   * @schema BatchStartResponse#Successful
   */
  readonly successful?: BatchSuccessfulResultModel[];

}

/**
 * @schema BatchStopRequest
 */
export interface BatchStopRequest {
  /**
   * @schema BatchStopRequest#ChannelIds
   */
  readonly channelIds?: string[];

  /**
   * @schema BatchStopRequest#MultiplexIds
   */
  readonly multiplexIds?: string[];

}

/**
 * @schema BatchStopResponse
 */
export interface BatchStopResponse {
  /**
   * @schema BatchStopResponse#Failed
   */
  readonly failed?: BatchFailedResultModel[];

  /**
   * @schema BatchStopResponse#Successful
   */
  readonly successful?: BatchSuccessfulResultModel[];

}

/**
 * @schema BatchUpdateScheduleRequest
 */
export interface BatchUpdateScheduleRequest {
  /**
   * @schema BatchUpdateScheduleRequest#ChannelId
   */
  readonly channelId: string;

  /**
   * @schema BatchUpdateScheduleRequest#Creates
   */
  readonly creates?: BatchScheduleActionCreateRequest;

  /**
   * @schema BatchUpdateScheduleRequest#Deletes
   */
  readonly deletes?: BatchScheduleActionDeleteRequest;

}

/**
 * @schema BatchUpdateScheduleResponse
 */
export interface BatchUpdateScheduleResponse {
  /**
   * @schema BatchUpdateScheduleResponse#Creates
   */
  readonly creates?: BatchScheduleActionCreateResult;

  /**
   * @schema BatchUpdateScheduleResponse#Deletes
   */
  readonly deletes?: BatchScheduleActionDeleteResult;

}

/**
 * @schema CancelInputDeviceTransferRequest
 */
export interface CancelInputDeviceTransferRequest {
  /**
   * @schema CancelInputDeviceTransferRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

}

/**
 * @schema CancelInputDeviceTransferResponse
 */
export interface CancelInputDeviceTransferResponse {
}

/**
 * @schema CreateChannelRequest
 */
export interface CreateChannelRequest {
  /**
   * @schema CreateChannelRequest#CdiInputSpecification
   */
  readonly cdiInputSpecification?: CdiInputSpecification;

  /**
   * @schema CreateChannelRequest#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema CreateChannelRequest#Destinations
   */
  readonly destinations?: OutputDestination[];

  /**
   * @schema CreateChannelRequest#EncoderSettings
   */
  readonly encoderSettings?: EncoderSettings;

  /**
   * @schema CreateChannelRequest#InputAttachments
   */
  readonly inputAttachments?: InputAttachment[];

  /**
   * @schema CreateChannelRequest#InputSpecification
   */
  readonly inputSpecification?: InputSpecification;

  /**
   * @schema CreateChannelRequest#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema CreateChannelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateChannelRequest#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateChannelRequest#Reserved
   */
  readonly reserved?: string;

  /**
   * @schema CreateChannelRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CreateChannelRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateChannelResponse
 */
export interface CreateChannelResponse {
  /**
   * @schema CreateChannelResponse#Channel
   */
  readonly channel?: Channel;

}

/**
 * @schema CreateInputRequest
 */
export interface CreateInputRequest {
  /**
   * @schema CreateInputRequest#Destinations
   */
  readonly destinations?: InputDestinationRequest[];

  /**
   * @schema CreateInputRequest#InputDevices
   */
  readonly inputDevices?: InputDeviceSettings[];

  /**
   * @schema CreateInputRequest#InputSecurityGroups
   */
  readonly inputSecurityGroups?: string[];

  /**
   * @schema CreateInputRequest#MediaConnectFlows
   */
  readonly mediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * @schema CreateInputRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateInputRequest#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateInputRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CreateInputRequest#Sources
   */
  readonly sources?: InputSourceRequest[];

  /**
   * @schema CreateInputRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateInputRequest#Type
   */
  readonly type?: string;

  /**
   * @schema CreateInputRequest#Vpc
   */
  readonly vpc?: InputVpcRequest;

}

/**
 * @schema CreateInputResponse
 */
export interface CreateInputResponse {
  /**
   * @schema CreateInputResponse#Input
   */
  readonly input?: Input;

}

/**
 * @schema CreateInputSecurityGroupRequest
 */
export interface CreateInputSecurityGroupRequest {
  /**
   * @schema CreateInputSecurityGroupRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateInputSecurityGroupRequest#WhitelistRules
   */
  readonly whitelistRules?: InputWhitelistRuleCidr[];

}

/**
 * @schema CreateInputSecurityGroupResponse
 */
export interface CreateInputSecurityGroupResponse {
  /**
   * @schema CreateInputSecurityGroupResponse#SecurityGroup
   */
  readonly securityGroup?: InputSecurityGroup;

}

/**
 * @schema CreateMultiplexRequest
 */
export interface CreateMultiplexRequest {
  /**
   * @schema CreateMultiplexRequest#AvailabilityZones
   */
  readonly availabilityZones: string[];

  /**
   * @schema CreateMultiplexRequest#MultiplexSettings
   */
  readonly multiplexSettings: MultiplexSettings;

  /**
   * @schema CreateMultiplexRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateMultiplexRequest#RequestId
   */
  readonly requestId: string;

  /**
   * @schema CreateMultiplexRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateMultiplexResponse
 */
export interface CreateMultiplexResponse {
  /**
   * @schema CreateMultiplexResponse#Multiplex
   */
  readonly multiplex?: Multiplex;

}

/**
 * @schema CreateMultiplexProgramRequest
 */
export interface CreateMultiplexProgramRequest {
  /**
   * @schema CreateMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema CreateMultiplexProgramRequest#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings: MultiplexProgramSettings;

  /**
   * @schema CreateMultiplexProgramRequest#ProgramName
   */
  readonly programName: string;

  /**
   * @schema CreateMultiplexProgramRequest#RequestId
   */
  readonly requestId: string;

}

/**
 * @schema CreateMultiplexProgramResponse
 */
export interface CreateMultiplexProgramResponse {
  /**
   * @schema CreateMultiplexProgramResponse#MultiplexProgram
   */
  readonly multiplexProgram?: MultiplexProgram;

}

/**
 * @schema CreateTagsRequest
 */
export interface CreateTagsRequest {
  /**
   * @schema CreateTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CreateTagsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DeleteChannelRequest
 */
export interface DeleteChannelRequest {
  /**
   * @schema DeleteChannelRequest#ChannelId
   */
  readonly channelId: string;

}

/**
 * @schema DeleteChannelResponse
 */
export interface DeleteChannelResponse {
  /**
   * @schema DeleteChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteChannelResponse#CdiInputSpecification
   */
  readonly cdiInputSpecification?: CdiInputSpecification;

  /**
   * @schema DeleteChannelResponse#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema DeleteChannelResponse#Destinations
   */
  readonly destinations?: OutputDestination[];

  /**
   * @schema DeleteChannelResponse#EgressEndpoints
   */
  readonly egressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @schema DeleteChannelResponse#EncoderSettings
   */
  readonly encoderSettings?: EncoderSettings;

  /**
   * @schema DeleteChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DeleteChannelResponse#InputAttachments
   */
  readonly inputAttachments?: InputAttachment[];

  /**
   * @schema DeleteChannelResponse#InputSpecification
   */
  readonly inputSpecification?: InputSpecification;

  /**
   * @schema DeleteChannelResponse#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema DeleteChannelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DeleteChannelResponse#PipelineDetails
   */
  readonly pipelineDetails?: PipelineDetail[];

  /**
   * @schema DeleteChannelResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema DeleteChannelResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DeleteChannelResponse#State
   */
  readonly state?: string;

  /**
   * @schema DeleteChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DeleteInputRequest
 */
export interface DeleteInputRequest {
  /**
   * @schema DeleteInputRequest#InputId
   */
  readonly inputId: string;

}

/**
 * @schema DeleteInputResponse
 */
export interface DeleteInputResponse {
}

/**
 * @schema DeleteInputSecurityGroupRequest
 */
export interface DeleteInputSecurityGroupRequest {
  /**
   * @schema DeleteInputSecurityGroupRequest#InputSecurityGroupId
   */
  readonly inputSecurityGroupId: string;

}

/**
 * @schema DeleteInputSecurityGroupResponse
 */
export interface DeleteInputSecurityGroupResponse {
}

/**
 * @schema DeleteMultiplexRequest
 */
export interface DeleteMultiplexRequest {
  /**
   * @schema DeleteMultiplexRequest#MultiplexId
   */
  readonly multiplexId: string;

}

/**
 * @schema DeleteMultiplexResponse
 */
export interface DeleteMultiplexResponse {
  /**
   * @schema DeleteMultiplexResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteMultiplexResponse#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DeleteMultiplexResponse#Destinations
   */
  readonly destinations?: MultiplexOutputDestination[];

  /**
   * @schema DeleteMultiplexResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DeleteMultiplexResponse#MultiplexSettings
   */
  readonly multiplexSettings?: MultiplexSettings;

  /**
   * @schema DeleteMultiplexResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DeleteMultiplexResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema DeleteMultiplexResponse#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema DeleteMultiplexResponse#State
   */
  readonly state?: string;

  /**
   * @schema DeleteMultiplexResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DeleteMultiplexProgramRequest
 */
export interface DeleteMultiplexProgramRequest {
  /**
   * @schema DeleteMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema DeleteMultiplexProgramRequest#ProgramName
   */
  readonly programName: string;

}

/**
 * @schema DeleteMultiplexProgramResponse
 */
export interface DeleteMultiplexProgramResponse {
  /**
   * @schema DeleteMultiplexProgramResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema DeleteMultiplexProgramResponse#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * @schema DeleteMultiplexProgramResponse#PacketIdentifiersMap
   */
  readonly packetIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * @schema DeleteMultiplexProgramResponse#PipelineDetails
   */
  readonly pipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * @schema DeleteMultiplexProgramResponse#ProgramName
   */
  readonly programName?: string;

}

/**
 * @schema DeleteReservationRequest
 */
export interface DeleteReservationRequest {
  /**
   * @schema DeleteReservationRequest#ReservationId
   */
  readonly reservationId: string;

}

/**
 * @schema DeleteReservationResponse
 */
export interface DeleteReservationResponse {
  /**
   * @schema DeleteReservationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteReservationResponse#Count
   */
  readonly count?: number;

  /**
   * @schema DeleteReservationResponse#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema DeleteReservationResponse#Duration
   */
  readonly duration?: number;

  /**
   * @schema DeleteReservationResponse#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema DeleteReservationResponse#End
   */
  readonly end?: string;

  /**
   * @schema DeleteReservationResponse#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema DeleteReservationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DeleteReservationResponse#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema DeleteReservationResponse#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema DeleteReservationResponse#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema DeleteReservationResponse#Region
   */
  readonly region?: string;

  /**
   * @schema DeleteReservationResponse#ReservationId
   */
  readonly reservationId?: string;

  /**
   * @schema DeleteReservationResponse#ResourceSpecification
   */
  readonly resourceSpecification?: ReservationResourceSpecification;

  /**
   * @schema DeleteReservationResponse#Start
   */
  readonly start?: string;

  /**
   * @schema DeleteReservationResponse#State
   */
  readonly state?: string;

  /**
   * @schema DeleteReservationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DeleteReservationResponse#UsagePrice
   */
  readonly usagePrice?: number;

}

/**
 * @schema DeleteScheduleRequest
 */
export interface DeleteScheduleRequest {
  /**
   * @schema DeleteScheduleRequest#ChannelId
   */
  readonly channelId: string;

}

/**
 * @schema DeleteScheduleResponse
 */
export interface DeleteScheduleResponse {
}

/**
 * @schema DeleteTagsRequest
 */
export interface DeleteTagsRequest {
  /**
   * @schema DeleteTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DeleteTagsRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DescribeChannelRequest
 */
export interface DescribeChannelRequest {
  /**
   * @schema DescribeChannelRequest#ChannelId
   */
  readonly channelId: string;

}

/**
 * @schema DescribeChannelResponse
 */
export interface DescribeChannelResponse {
  /**
   * @schema DescribeChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeChannelResponse#CdiInputSpecification
   */
  readonly cdiInputSpecification?: CdiInputSpecification;

  /**
   * @schema DescribeChannelResponse#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema DescribeChannelResponse#Destinations
   */
  readonly destinations?: OutputDestination[];

  /**
   * @schema DescribeChannelResponse#EgressEndpoints
   */
  readonly egressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @schema DescribeChannelResponse#EncoderSettings
   */
  readonly encoderSettings?: EncoderSettings;

  /**
   * @schema DescribeChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeChannelResponse#InputAttachments
   */
  readonly inputAttachments?: InputAttachment[];

  /**
   * @schema DescribeChannelResponse#InputSpecification
   */
  readonly inputSpecification?: InputSpecification;

  /**
   * @schema DescribeChannelResponse#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema DescribeChannelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeChannelResponse#PipelineDetails
   */
  readonly pipelineDetails?: PipelineDetail[];

  /**
   * @schema DescribeChannelResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema DescribeChannelResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeChannelResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeInputRequest
 */
export interface DescribeInputRequest {
  /**
   * @schema DescribeInputRequest#InputId
   */
  readonly inputId: string;

}

/**
 * @schema DescribeInputResponse
 */
export interface DescribeInputResponse {
  /**
   * @schema DescribeInputResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeInputResponse#AttachedChannels
   */
  readonly attachedChannels?: string[];

  /**
   * @schema DescribeInputResponse#Destinations
   */
  readonly destinations?: InputDestination[];

  /**
   * @schema DescribeInputResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeInputResponse#InputClass
   */
  readonly inputClass?: string;

  /**
   * @schema DescribeInputResponse#InputDevices
   */
  readonly inputDevices?: InputDeviceSettings[];

  /**
   * @schema DescribeInputResponse#InputSourceType
   */
  readonly inputSourceType?: string;

  /**
   * @schema DescribeInputResponse#MediaConnectFlows
   */
  readonly mediaConnectFlows?: MediaConnectFlow[];

  /**
   * @schema DescribeInputResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeInputResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeInputResponse#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema DescribeInputResponse#Sources
   */
  readonly sources?: InputSource[];

  /**
   * @schema DescribeInputResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeInputResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeInputResponse#Type
   */
  readonly type?: string;

}

/**
 * @schema DescribeInputDeviceRequest
 */
export interface DescribeInputDeviceRequest {
  /**
   * @schema DescribeInputDeviceRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

}

/**
 * @schema DescribeInputDeviceResponse
 */
export interface DescribeInputDeviceResponse {
  /**
   * @schema DescribeInputDeviceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeInputDeviceResponse#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema DescribeInputDeviceResponse#DeviceSettingsSyncState
   */
  readonly deviceSettingsSyncState?: string;

  /**
   * @schema DescribeInputDeviceResponse#DeviceUpdateStatus
   */
  readonly deviceUpdateStatus?: string;

  /**
   * @schema DescribeInputDeviceResponse#HdDeviceSettings
   */
  readonly hdDeviceSettings?: InputDeviceHdSettings;

  /**
   * @schema DescribeInputDeviceResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeInputDeviceResponse#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema DescribeInputDeviceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeInputDeviceResponse#NetworkSettings
   */
  readonly networkSettings?: InputDeviceNetworkSettings;

  /**
   * @schema DescribeInputDeviceResponse#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema DescribeInputDeviceResponse#Type
   */
  readonly type?: string;

}

/**
 * @schema DescribeInputDeviceThumbnailRequest
 */
export interface DescribeInputDeviceThumbnailRequest {
  /**
   * @schema DescribeInputDeviceThumbnailRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

  /**
   * @schema DescribeInputDeviceThumbnailRequest#Accept
   */
  readonly accept: string;

}

/**
 * @schema DescribeInputDeviceThumbnailResponse
 */
export interface DescribeInputDeviceThumbnailResponse {
  /**
   * @schema DescribeInputDeviceThumbnailResponse#Body
   */
  readonly body?: any;

  /**
   * @schema DescribeInputDeviceThumbnailResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema DescribeInputDeviceThumbnailResponse#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema DescribeInputDeviceThumbnailResponse#ETag
   */
  readonly eTag?: string;

  /**
   * @schema DescribeInputDeviceThumbnailResponse#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema DescribeInputSecurityGroupRequest
 */
export interface DescribeInputSecurityGroupRequest {
  /**
   * @schema DescribeInputSecurityGroupRequest#InputSecurityGroupId
   */
  readonly inputSecurityGroupId: string;

}

/**
 * @schema DescribeInputSecurityGroupResponse
 */
export interface DescribeInputSecurityGroupResponse {
  /**
   * @schema DescribeInputSecurityGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeInputSecurityGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeInputSecurityGroupResponse#Inputs
   */
  readonly inputs?: string[];

  /**
   * @schema DescribeInputSecurityGroupResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeInputSecurityGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeInputSecurityGroupResponse#WhitelistRules
   */
  readonly whitelistRules?: InputWhitelistRule[];

}

/**
 * @schema DescribeMultiplexRequest
 */
export interface DescribeMultiplexRequest {
  /**
   * @schema DescribeMultiplexRequest#MultiplexId
   */
  readonly multiplexId: string;

}

/**
 * @schema DescribeMultiplexResponse
 */
export interface DescribeMultiplexResponse {
  /**
   * @schema DescribeMultiplexResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeMultiplexResponse#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DescribeMultiplexResponse#Destinations
   */
  readonly destinations?: MultiplexOutputDestination[];

  /**
   * @schema DescribeMultiplexResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeMultiplexResponse#MultiplexSettings
   */
  readonly multiplexSettings?: MultiplexSettings;

  /**
   * @schema DescribeMultiplexResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeMultiplexResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema DescribeMultiplexResponse#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema DescribeMultiplexResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeMultiplexResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeMultiplexProgramRequest
 */
export interface DescribeMultiplexProgramRequest {
  /**
   * @schema DescribeMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema DescribeMultiplexProgramRequest#ProgramName
   */
  readonly programName: string;

}

/**
 * @schema DescribeMultiplexProgramResponse
 */
export interface DescribeMultiplexProgramResponse {
  /**
   * @schema DescribeMultiplexProgramResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema DescribeMultiplexProgramResponse#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * @schema DescribeMultiplexProgramResponse#PacketIdentifiersMap
   */
  readonly packetIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * @schema DescribeMultiplexProgramResponse#PipelineDetails
   */
  readonly pipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * @schema DescribeMultiplexProgramResponse#ProgramName
   */
  readonly programName?: string;

}

/**
 * @schema DescribeOfferingRequest
 */
export interface DescribeOfferingRequest {
  /**
   * @schema DescribeOfferingRequest#OfferingId
   */
  readonly offeringId: string;

}

/**
 * @schema DescribeOfferingResponse
 */
export interface DescribeOfferingResponse {
  /**
   * @schema DescribeOfferingResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeOfferingResponse#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema DescribeOfferingResponse#Duration
   */
  readonly duration?: number;

  /**
   * @schema DescribeOfferingResponse#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema DescribeOfferingResponse#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema DescribeOfferingResponse#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema DescribeOfferingResponse#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema DescribeOfferingResponse#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema DescribeOfferingResponse#Region
   */
  readonly region?: string;

  /**
   * @schema DescribeOfferingResponse#ResourceSpecification
   */
  readonly resourceSpecification?: ReservationResourceSpecification;

  /**
   * @schema DescribeOfferingResponse#UsagePrice
   */
  readonly usagePrice?: number;

}

/**
 * @schema DescribeReservationRequest
 */
export interface DescribeReservationRequest {
  /**
   * @schema DescribeReservationRequest#ReservationId
   */
  readonly reservationId: string;

}

/**
 * @schema DescribeReservationResponse
 */
export interface DescribeReservationResponse {
  /**
   * @schema DescribeReservationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeReservationResponse#Count
   */
  readonly count?: number;

  /**
   * @schema DescribeReservationResponse#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema DescribeReservationResponse#Duration
   */
  readonly duration?: number;

  /**
   * @schema DescribeReservationResponse#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema DescribeReservationResponse#End
   */
  readonly end?: string;

  /**
   * @schema DescribeReservationResponse#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema DescribeReservationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeReservationResponse#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema DescribeReservationResponse#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema DescribeReservationResponse#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema DescribeReservationResponse#Region
   */
  readonly region?: string;

  /**
   * @schema DescribeReservationResponse#ReservationId
   */
  readonly reservationId?: string;

  /**
   * @schema DescribeReservationResponse#ResourceSpecification
   */
  readonly resourceSpecification?: ReservationResourceSpecification;

  /**
   * @schema DescribeReservationResponse#Start
   */
  readonly start?: string;

  /**
   * @schema DescribeReservationResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeReservationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeReservationResponse#UsagePrice
   */
  readonly usagePrice?: number;

}

/**
 * @schema DescribeScheduleRequest
 */
export interface DescribeScheduleRequest {
  /**
   * @schema DescribeScheduleRequest#ChannelId
   */
  readonly channelId: string;

  /**
   * @schema DescribeScheduleRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeScheduleRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScheduleResponse
 */
export interface DescribeScheduleResponse {
  /**
   * @schema DescribeScheduleResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeScheduleResponse#ScheduleActions
   */
  readonly scheduleActions?: ScheduleAction[];

}

/**
 * @schema ListChannelsRequest
 */
export interface ListChannelsRequest {
  /**
   * @schema ListChannelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListChannelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelsResponse
 */
export interface ListChannelsResponse {
  /**
   * @schema ListChannelsResponse#Channels
   */
  readonly channels?: ChannelSummary[];

  /**
   * @schema ListChannelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInputDeviceTransfersRequest
 */
export interface ListInputDeviceTransfersRequest {
  /**
   * @schema ListInputDeviceTransfersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListInputDeviceTransfersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListInputDeviceTransfersRequest#TransferType
   */
  readonly transferType: string;

}

/**
 * @schema ListInputDeviceTransfersResponse
 */
export interface ListInputDeviceTransfersResponse {
  /**
   * @schema ListInputDeviceTransfersResponse#InputDeviceTransfers
   */
  readonly inputDeviceTransfers?: TransferringInputDeviceSummary[];

  /**
   * @schema ListInputDeviceTransfersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInputDevicesRequest
 */
export interface ListInputDevicesRequest {
  /**
   * @schema ListInputDevicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListInputDevicesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInputDevicesResponse
 */
export interface ListInputDevicesResponse {
  /**
   * @schema ListInputDevicesResponse#InputDevices
   */
  readonly inputDevices?: InputDeviceSummary[];

  /**
   * @schema ListInputDevicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInputSecurityGroupsRequest
 */
export interface ListInputSecurityGroupsRequest {
  /**
   * @schema ListInputSecurityGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListInputSecurityGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInputSecurityGroupsResponse
 */
export interface ListInputSecurityGroupsResponse {
  /**
   * @schema ListInputSecurityGroupsResponse#InputSecurityGroups
   */
  readonly inputSecurityGroups?: InputSecurityGroup[];

  /**
   * @schema ListInputSecurityGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInputsRequest
 */
export interface ListInputsRequest {
  /**
   * @schema ListInputsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListInputsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInputsResponse
 */
export interface ListInputsResponse {
  /**
   * @schema ListInputsResponse#Inputs
   */
  readonly inputs?: Input[];

  /**
   * @schema ListInputsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMultiplexProgramsRequest
 */
export interface ListMultiplexProgramsRequest {
  /**
   * @schema ListMultiplexProgramsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMultiplexProgramsRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema ListMultiplexProgramsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMultiplexProgramsResponse
 */
export interface ListMultiplexProgramsResponse {
  /**
   * @schema ListMultiplexProgramsResponse#MultiplexPrograms
   */
  readonly multiplexPrograms?: MultiplexProgramSummary[];

  /**
   * @schema ListMultiplexProgramsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMultiplexesRequest
 */
export interface ListMultiplexesRequest {
  /**
   * @schema ListMultiplexesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMultiplexesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMultiplexesResponse
 */
export interface ListMultiplexesResponse {
  /**
   * @schema ListMultiplexesResponse#Multiplexes
   */
  readonly multiplexes?: MultiplexSummary[];

  /**
   * @schema ListMultiplexesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOfferingsRequest
 */
export interface ListOfferingsRequest {
  /**
   * @schema ListOfferingsRequest#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema ListOfferingsRequest#ChannelConfiguration
   */
  readonly channelConfiguration?: string;

  /**
   * @schema ListOfferingsRequest#Codec
   */
  readonly codec?: string;

  /**
   * @schema ListOfferingsRequest#Duration
   */
  readonly duration?: string;

  /**
   * @schema ListOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListOfferingsRequest#MaximumBitrate
   */
  readonly maximumBitrate?: string;

  /**
   * @schema ListOfferingsRequest#MaximumFramerate
   */
  readonly maximumFramerate?: string;

  /**
   * @schema ListOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListOfferingsRequest#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema ListOfferingsRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ListOfferingsRequest#SpecialFeature
   */
  readonly specialFeature?: string;

  /**
   * @schema ListOfferingsRequest#VideoQuality
   */
  readonly videoQuality?: string;

}

/**
 * @schema ListOfferingsResponse
 */
export interface ListOfferingsResponse {
  /**
   * @schema ListOfferingsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListOfferingsResponse#Offerings
   */
  readonly offerings?: Offering[];

}

/**
 * @schema ListReservationsRequest
 */
export interface ListReservationsRequest {
  /**
   * @schema ListReservationsRequest#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema ListReservationsRequest#Codec
   */
  readonly codec?: string;

  /**
   * @schema ListReservationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListReservationsRequest#MaximumBitrate
   */
  readonly maximumBitrate?: string;

  /**
   * @schema ListReservationsRequest#MaximumFramerate
   */
  readonly maximumFramerate?: string;

  /**
   * @schema ListReservationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListReservationsRequest#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema ListReservationsRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ListReservationsRequest#SpecialFeature
   */
  readonly specialFeature?: string;

  /**
   * @schema ListReservationsRequest#VideoQuality
   */
  readonly videoQuality?: string;

}

/**
 * @schema ListReservationsResponse
 */
export interface ListReservationsResponse {
  /**
   * @schema ListReservationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListReservationsResponse#Reservations
   */
  readonly reservations?: Reservation[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PurchaseOfferingRequest
 */
export interface PurchaseOfferingRequest {
  /**
   * @schema PurchaseOfferingRequest#Count
   */
  readonly count: number;

  /**
   * @schema PurchaseOfferingRequest#Name
   */
  readonly name?: string;

  /**
   * @schema PurchaseOfferingRequest#OfferingId
   */
  readonly offeringId: string;

  /**
   * @schema PurchaseOfferingRequest#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema PurchaseOfferingRequest#Start
   */
  readonly start?: string;

  /**
   * @schema PurchaseOfferingRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PurchaseOfferingResponse
 */
export interface PurchaseOfferingResponse {
  /**
   * @schema PurchaseOfferingResponse#Reservation
   */
  readonly reservation?: Reservation;

}

/**
 * @schema RejectInputDeviceTransferRequest
 */
export interface RejectInputDeviceTransferRequest {
  /**
   * @schema RejectInputDeviceTransferRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

}

/**
 * @schema RejectInputDeviceTransferResponse
 */
export interface RejectInputDeviceTransferResponse {
}

/**
 * @schema StartChannelRequest
 */
export interface StartChannelRequest {
  /**
   * @schema StartChannelRequest#ChannelId
   */
  readonly channelId: string;

}

/**
 * @schema StartChannelResponse
 */
export interface StartChannelResponse {
  /**
   * @schema StartChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema StartChannelResponse#CdiInputSpecification
   */
  readonly cdiInputSpecification?: CdiInputSpecification;

  /**
   * @schema StartChannelResponse#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema StartChannelResponse#Destinations
   */
  readonly destinations?: OutputDestination[];

  /**
   * @schema StartChannelResponse#EgressEndpoints
   */
  readonly egressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @schema StartChannelResponse#EncoderSettings
   */
  readonly encoderSettings?: EncoderSettings;

  /**
   * @schema StartChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema StartChannelResponse#InputAttachments
   */
  readonly inputAttachments?: InputAttachment[];

  /**
   * @schema StartChannelResponse#InputSpecification
   */
  readonly inputSpecification?: InputSpecification;

  /**
   * @schema StartChannelResponse#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema StartChannelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema StartChannelResponse#PipelineDetails
   */
  readonly pipelineDetails?: PipelineDetail[];

  /**
   * @schema StartChannelResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema StartChannelResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema StartChannelResponse#State
   */
  readonly state?: string;

  /**
   * @schema StartChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StartMultiplexRequest
 */
export interface StartMultiplexRequest {
  /**
   * @schema StartMultiplexRequest#MultiplexId
   */
  readonly multiplexId: string;

}

/**
 * @schema StartMultiplexResponse
 */
export interface StartMultiplexResponse {
  /**
   * @schema StartMultiplexResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema StartMultiplexResponse#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema StartMultiplexResponse#Destinations
   */
  readonly destinations?: MultiplexOutputDestination[];

  /**
   * @schema StartMultiplexResponse#Id
   */
  readonly id?: string;

  /**
   * @schema StartMultiplexResponse#MultiplexSettings
   */
  readonly multiplexSettings?: MultiplexSettings;

  /**
   * @schema StartMultiplexResponse#Name
   */
  readonly name?: string;

  /**
   * @schema StartMultiplexResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema StartMultiplexResponse#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema StartMultiplexResponse#State
   */
  readonly state?: string;

  /**
   * @schema StartMultiplexResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StopChannelRequest
 */
export interface StopChannelRequest {
  /**
   * @schema StopChannelRequest#ChannelId
   */
  readonly channelId: string;

}

/**
 * @schema StopChannelResponse
 */
export interface StopChannelResponse {
  /**
   * @schema StopChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema StopChannelResponse#CdiInputSpecification
   */
  readonly cdiInputSpecification?: CdiInputSpecification;

  /**
   * @schema StopChannelResponse#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema StopChannelResponse#Destinations
   */
  readonly destinations?: OutputDestination[];

  /**
   * @schema StopChannelResponse#EgressEndpoints
   */
  readonly egressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @schema StopChannelResponse#EncoderSettings
   */
  readonly encoderSettings?: EncoderSettings;

  /**
   * @schema StopChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema StopChannelResponse#InputAttachments
   */
  readonly inputAttachments?: InputAttachment[];

  /**
   * @schema StopChannelResponse#InputSpecification
   */
  readonly inputSpecification?: InputSpecification;

  /**
   * @schema StopChannelResponse#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema StopChannelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema StopChannelResponse#PipelineDetails
   */
  readonly pipelineDetails?: PipelineDetail[];

  /**
   * @schema StopChannelResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema StopChannelResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema StopChannelResponse#State
   */
  readonly state?: string;

  /**
   * @schema StopChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StopMultiplexRequest
 */
export interface StopMultiplexRequest {
  /**
   * @schema StopMultiplexRequest#MultiplexId
   */
  readonly multiplexId: string;

}

/**
 * @schema StopMultiplexResponse
 */
export interface StopMultiplexResponse {
  /**
   * @schema StopMultiplexResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema StopMultiplexResponse#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema StopMultiplexResponse#Destinations
   */
  readonly destinations?: MultiplexOutputDestination[];

  /**
   * @schema StopMultiplexResponse#Id
   */
  readonly id?: string;

  /**
   * @schema StopMultiplexResponse#MultiplexSettings
   */
  readonly multiplexSettings?: MultiplexSettings;

  /**
   * @schema StopMultiplexResponse#Name
   */
  readonly name?: string;

  /**
   * @schema StopMultiplexResponse#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema StopMultiplexResponse#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema StopMultiplexResponse#State
   */
  readonly state?: string;

  /**
   * @schema StopMultiplexResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema TransferInputDeviceRequest
 */
export interface TransferInputDeviceRequest {
  /**
   * @schema TransferInputDeviceRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

  /**
   * @schema TransferInputDeviceRequest#TargetCustomerId
   */
  readonly targetCustomerId?: string;

  /**
   * @schema TransferInputDeviceRequest#TransferMessage
   */
  readonly transferMessage?: string;

}

/**
 * @schema TransferInputDeviceResponse
 */
export interface TransferInputDeviceResponse {
}

/**
 * @schema UpdateChannelRequest
 */
export interface UpdateChannelRequest {
  /**
   * @schema UpdateChannelRequest#CdiInputSpecification
   */
  readonly cdiInputSpecification?: CdiInputSpecification;

  /**
   * @schema UpdateChannelRequest#ChannelId
   */
  readonly channelId: string;

  /**
   * @schema UpdateChannelRequest#Destinations
   */
  readonly destinations?: OutputDestination[];

  /**
   * @schema UpdateChannelRequest#EncoderSettings
   */
  readonly encoderSettings?: EncoderSettings;

  /**
   * @schema UpdateChannelRequest#InputAttachments
   */
  readonly inputAttachments?: InputAttachment[];

  /**
   * @schema UpdateChannelRequest#InputSpecification
   */
  readonly inputSpecification?: InputSpecification;

  /**
   * @schema UpdateChannelRequest#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema UpdateChannelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateChannelRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema UpdateChannelResponse
 */
export interface UpdateChannelResponse {
  /**
   * @schema UpdateChannelResponse#Channel
   */
  readonly channel?: Channel;

}

/**
 * @schema UpdateChannelClassRequest
 */
export interface UpdateChannelClassRequest {
  /**
   * @schema UpdateChannelClassRequest#ChannelClass
   */
  readonly channelClass: string;

  /**
   * @schema UpdateChannelClassRequest#ChannelId
   */
  readonly channelId: string;

  /**
   * @schema UpdateChannelClassRequest#Destinations
   */
  readonly destinations?: OutputDestination[];

}

/**
 * @schema UpdateChannelClassResponse
 */
export interface UpdateChannelClassResponse {
  /**
   * @schema UpdateChannelClassResponse#Channel
   */
  readonly channel?: Channel;

}

/**
 * @schema UpdateInputRequest
 */
export interface UpdateInputRequest {
  /**
   * @schema UpdateInputRequest#Destinations
   */
  readonly destinations?: InputDestinationRequest[];

  /**
   * @schema UpdateInputRequest#InputDevices
   */
  readonly inputDevices?: InputDeviceRequest[];

  /**
   * @schema UpdateInputRequest#InputId
   */
  readonly inputId: string;

  /**
   * @schema UpdateInputRequest#InputSecurityGroups
   */
  readonly inputSecurityGroups?: string[];

  /**
   * @schema UpdateInputRequest#MediaConnectFlows
   */
  readonly mediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * @schema UpdateInputRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateInputRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateInputRequest#Sources
   */
  readonly sources?: InputSourceRequest[];

}

/**
 * @schema UpdateInputResponse
 */
export interface UpdateInputResponse {
  /**
   * @schema UpdateInputResponse#Input
   */
  readonly input?: Input;

}

/**
 * @schema UpdateInputDeviceRequest
 */
export interface UpdateInputDeviceRequest {
  /**
   * @schema UpdateInputDeviceRequest#HdDeviceSettings
   */
  readonly hdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * @schema UpdateInputDeviceRequest#InputDeviceId
   */
  readonly inputDeviceId: string;

  /**
   * @schema UpdateInputDeviceRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateInputDeviceResponse
 */
export interface UpdateInputDeviceResponse {
  /**
   * @schema UpdateInputDeviceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateInputDeviceResponse#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema UpdateInputDeviceResponse#DeviceSettingsSyncState
   */
  readonly deviceSettingsSyncState?: string;

  /**
   * @schema UpdateInputDeviceResponse#DeviceUpdateStatus
   */
  readonly deviceUpdateStatus?: string;

  /**
   * @schema UpdateInputDeviceResponse#HdDeviceSettings
   */
  readonly hdDeviceSettings?: InputDeviceHdSettings;

  /**
   * @schema UpdateInputDeviceResponse#Id
   */
  readonly id?: string;

  /**
   * @schema UpdateInputDeviceResponse#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema UpdateInputDeviceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateInputDeviceResponse#NetworkSettings
   */
  readonly networkSettings?: InputDeviceNetworkSettings;

  /**
   * @schema UpdateInputDeviceResponse#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema UpdateInputDeviceResponse#Type
   */
  readonly type?: string;

}

/**
 * @schema UpdateInputSecurityGroupRequest
 */
export interface UpdateInputSecurityGroupRequest {
  /**
   * @schema UpdateInputSecurityGroupRequest#InputSecurityGroupId
   */
  readonly inputSecurityGroupId: string;

  /**
   * @schema UpdateInputSecurityGroupRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema UpdateInputSecurityGroupRequest#WhitelistRules
   */
  readonly whitelistRules?: InputWhitelistRuleCidr[];

}

/**
 * @schema UpdateInputSecurityGroupResponse
 */
export interface UpdateInputSecurityGroupResponse {
  /**
   * @schema UpdateInputSecurityGroupResponse#SecurityGroup
   */
  readonly securityGroup?: InputSecurityGroup;

}

/**
 * @schema UpdateMultiplexRequest
 */
export interface UpdateMultiplexRequest {
  /**
   * @schema UpdateMultiplexRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema UpdateMultiplexRequest#MultiplexSettings
   */
  readonly multiplexSettings?: MultiplexSettings;

  /**
   * @schema UpdateMultiplexRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateMultiplexResponse
 */
export interface UpdateMultiplexResponse {
  /**
   * @schema UpdateMultiplexResponse#Multiplex
   */
  readonly multiplex?: Multiplex;

}

/**
 * @schema UpdateMultiplexProgramRequest
 */
export interface UpdateMultiplexProgramRequest {
  /**
   * @schema UpdateMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId: string;

  /**
   * @schema UpdateMultiplexProgramRequest#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * @schema UpdateMultiplexProgramRequest#ProgramName
   */
  readonly programName: string;

}

/**
 * @schema UpdateMultiplexProgramResponse
 */
export interface UpdateMultiplexProgramResponse {
  /**
   * @schema UpdateMultiplexProgramResponse#MultiplexProgram
   */
  readonly multiplexProgram?: MultiplexProgram;

}

/**
 * @schema UpdateReservationRequest
 */
export interface UpdateReservationRequest {
  /**
   * @schema UpdateReservationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateReservationRequest#ReservationId
   */
  readonly reservationId: string;

}

/**
 * @schema UpdateReservationResponse
 */
export interface UpdateReservationResponse {
  /**
   * @schema UpdateReservationResponse#Reservation
   */
  readonly reservation?: Reservation;

}

/**
 * @schema BatchFailedResultModel
 */
export interface BatchFailedResultModel {
  /**
   * @schema BatchFailedResultModel#Arn
   */
  readonly arn?: string;

  /**
   * @schema BatchFailedResultModel#Code
   */
  readonly code?: string;

  /**
   * @schema BatchFailedResultModel#Id
   */
  readonly id?: string;

  /**
   * @schema BatchFailedResultModel#Message
   */
  readonly message?: string;

}

/**
 * @schema BatchSuccessfulResultModel
 */
export interface BatchSuccessfulResultModel {
  /**
   * @schema BatchSuccessfulResultModel#Arn
   */
  readonly arn?: string;

  /**
   * @schema BatchSuccessfulResultModel#Id
   */
  readonly id?: string;

  /**
   * @schema BatchSuccessfulResultModel#State
   */
  readonly state?: string;

}

/**
 * @schema BatchScheduleActionCreateRequest
 */
export interface BatchScheduleActionCreateRequest {
  /**
   * @schema BatchScheduleActionCreateRequest#ScheduleActions
   */
  readonly scheduleActions: ScheduleAction[];

}

/**
 * @schema BatchScheduleActionDeleteRequest
 */
export interface BatchScheduleActionDeleteRequest {
  /**
   * @schema BatchScheduleActionDeleteRequest#ActionNames
   */
  readonly actionNames: string[];

}

/**
 * @schema BatchScheduleActionCreateResult
 */
export interface BatchScheduleActionCreateResult {
  /**
   * @schema BatchScheduleActionCreateResult#ScheduleActions
   */
  readonly scheduleActions: ScheduleAction[];

}

/**
 * @schema BatchScheduleActionDeleteResult
 */
export interface BatchScheduleActionDeleteResult {
  /**
   * @schema BatchScheduleActionDeleteResult#ScheduleActions
   */
  readonly scheduleActions: ScheduleAction[];

}

/**
 * @schema CdiInputSpecification
 */
export interface CdiInputSpecification {
  /**
   * @schema CdiInputSpecification#Resolution
   */
  readonly resolution?: string;

}

/**
 * @schema OutputDestination
 */
export interface OutputDestination {
  /**
   * @schema OutputDestination#Id
   */
  readonly id?: string;

  /**
   * @schema OutputDestination#MediaPackageSettings
   */
  readonly mediaPackageSettings?: MediaPackageOutputDestinationSettings[];

  /**
   * @schema OutputDestination#MultiplexSettings
   */
  readonly multiplexSettings?: MultiplexProgramChannelDestinationSettings;

  /**
   * @schema OutputDestination#Settings
   */
  readonly settings?: OutputDestinationSettings[];

}

/**
 * @schema EncoderSettings
 */
export interface EncoderSettings {
  /**
   * @schema EncoderSettings#AudioDescriptions
   */
  readonly audioDescriptions: AudioDescription[];

  /**
   * @schema EncoderSettings#AvailBlanking
   */
  readonly availBlanking?: AvailBlanking;

  /**
   * @schema EncoderSettings#AvailConfiguration
   */
  readonly availConfiguration?: AvailConfiguration;

  /**
   * @schema EncoderSettings#BlackoutSlate
   */
  readonly blackoutSlate?: BlackoutSlate;

  /**
   * @schema EncoderSettings#CaptionDescriptions
   */
  readonly captionDescriptions?: CaptionDescription[];

  /**
   * @schema EncoderSettings#FeatureActivations
   */
  readonly featureActivations?: FeatureActivations;

  /**
   * @schema EncoderSettings#GlobalConfiguration
   */
  readonly globalConfiguration?: GlobalConfiguration;

  /**
   * @schema EncoderSettings#NielsenConfiguration
   */
  readonly nielsenConfiguration?: NielsenConfiguration;

  /**
   * @schema EncoderSettings#OutputGroups
   */
  readonly outputGroups: OutputGroup[];

  /**
   * @schema EncoderSettings#TimecodeConfig
   */
  readonly timecodeConfig: TimecodeConfig;

  /**
   * @schema EncoderSettings#VideoDescriptions
   */
  readonly videoDescriptions: VideoDescription[];

}

/**
 * @schema InputAttachment
 */
export interface InputAttachment {
  /**
   * @schema InputAttachment#AutomaticInputFailoverSettings
   */
  readonly automaticInputFailoverSettings?: AutomaticInputFailoverSettings;

  /**
   * @schema InputAttachment#InputAttachmentName
   */
  readonly inputAttachmentName?: string;

  /**
   * @schema InputAttachment#InputId
   */
  readonly inputId?: string;

  /**
   * @schema InputAttachment#InputSettings
   */
  readonly inputSettings?: InputSettings;

}

/**
 * @schema InputSpecification
 */
export interface InputSpecification {
  /**
   * @schema InputSpecification#Codec
   */
  readonly codec?: string;

  /**
   * @schema InputSpecification#MaximumBitrate
   */
  readonly maximumBitrate?: string;

  /**
   * @schema InputSpecification#Resolution
   */
  readonly resolution?: string;

}

/**
 * @schema Channel
 */
export interface Channel {
  /**
   * @schema Channel#Arn
   */
  readonly arn?: string;

  /**
   * @schema Channel#CdiInputSpecification
   */
  readonly cdiInputSpecification?: CdiInputSpecification;

  /**
   * @schema Channel#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema Channel#Destinations
   */
  readonly destinations?: OutputDestination[];

  /**
   * @schema Channel#EgressEndpoints
   */
  readonly egressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @schema Channel#EncoderSettings
   */
  readonly encoderSettings?: EncoderSettings;

  /**
   * @schema Channel#Id
   */
  readonly id?: string;

  /**
   * @schema Channel#InputAttachments
   */
  readonly inputAttachments?: InputAttachment[];

  /**
   * @schema Channel#InputSpecification
   */
  readonly inputSpecification?: InputSpecification;

  /**
   * @schema Channel#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema Channel#Name
   */
  readonly name?: string;

  /**
   * @schema Channel#PipelineDetails
   */
  readonly pipelineDetails?: PipelineDetail[];

  /**
   * @schema Channel#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema Channel#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Channel#State
   */
  readonly state?: string;

  /**
   * @schema Channel#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema InputDestinationRequest
 */
export interface InputDestinationRequest {
  /**
   * @schema InputDestinationRequest#StreamName
   */
  readonly streamName?: string;

}

/**
 * @schema InputDeviceSettings
 */
export interface InputDeviceSettings {
  /**
   * @schema InputDeviceSettings#Id
   */
  readonly id?: string;

}

/**
 * @schema MediaConnectFlowRequest
 */
export interface MediaConnectFlowRequest {
  /**
   * @schema MediaConnectFlowRequest#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * @schema InputSourceRequest
 */
export interface InputSourceRequest {
  /**
   * @schema InputSourceRequest#PasswordParam
   */
  readonly passwordParam?: string;

  /**
   * @schema InputSourceRequest#Url
   */
  readonly url?: string;

  /**
   * @schema InputSourceRequest#Username
   */
  readonly username?: string;

}

/**
 * @schema InputVpcRequest
 */
export interface InputVpcRequest {
  /**
   * @schema InputVpcRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema InputVpcRequest#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema Input
 */
export interface Input {
  /**
   * @schema Input#Arn
   */
  readonly arn?: string;

  /**
   * @schema Input#AttachedChannels
   */
  readonly attachedChannels?: string[];

  /**
   * @schema Input#Destinations
   */
  readonly destinations?: InputDestination[];

  /**
   * @schema Input#Id
   */
  readonly id?: string;

  /**
   * @schema Input#InputClass
   */
  readonly inputClass?: string;

  /**
   * @schema Input#InputDevices
   */
  readonly inputDevices?: InputDeviceSettings[];

  /**
   * @schema Input#InputSourceType
   */
  readonly inputSourceType?: string;

  /**
   * @schema Input#MediaConnectFlows
   */
  readonly mediaConnectFlows?: MediaConnectFlow[];

  /**
   * @schema Input#Name
   */
  readonly name?: string;

  /**
   * @schema Input#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Input#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema Input#Sources
   */
  readonly sources?: InputSource[];

  /**
   * @schema Input#State
   */
  readonly state?: string;

  /**
   * @schema Input#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Input#Type
   */
  readonly type?: string;

}

/**
 * @schema InputWhitelistRuleCidr
 */
export interface InputWhitelistRuleCidr {
  /**
   * @schema InputWhitelistRuleCidr#Cidr
   */
  readonly cidr?: string;

}

/**
 * @schema InputSecurityGroup
 */
export interface InputSecurityGroup {
  /**
   * @schema InputSecurityGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema InputSecurityGroup#Id
   */
  readonly id?: string;

  /**
   * @schema InputSecurityGroup#Inputs
   */
  readonly inputs?: string[];

  /**
   * @schema InputSecurityGroup#State
   */
  readonly state?: string;

  /**
   * @schema InputSecurityGroup#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema InputSecurityGroup#WhitelistRules
   */
  readonly whitelistRules?: InputWhitelistRule[];

}

/**
 * @schema MultiplexSettings
 */
export interface MultiplexSettings {
  /**
   * @schema MultiplexSettings#MaximumVideoBufferDelayMilliseconds
   */
  readonly maximumVideoBufferDelayMilliseconds?: number;

  /**
   * @schema MultiplexSettings#TransportStreamBitrate
   */
  readonly transportStreamBitrate: number;

  /**
   * @schema MultiplexSettings#TransportStreamId
   */
  readonly transportStreamId: number;

  /**
   * @schema MultiplexSettings#TransportStreamReservedBitrate
   */
  readonly transportStreamReservedBitrate?: number;

}

/**
 * @schema Multiplex
 */
export interface Multiplex {
  /**
   * @schema Multiplex#Arn
   */
  readonly arn?: string;

  /**
   * @schema Multiplex#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema Multiplex#Destinations
   */
  readonly destinations?: MultiplexOutputDestination[];

  /**
   * @schema Multiplex#Id
   */
  readonly id?: string;

  /**
   * @schema Multiplex#MultiplexSettings
   */
  readonly multiplexSettings?: MultiplexSettings;

  /**
   * @schema Multiplex#Name
   */
  readonly name?: string;

  /**
   * @schema Multiplex#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema Multiplex#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema Multiplex#State
   */
  readonly state?: string;

  /**
   * @schema Multiplex#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MultiplexProgramSettings
 */
export interface MultiplexProgramSettings {
  /**
   * @schema MultiplexProgramSettings#PreferredChannelPipeline
   */
  readonly preferredChannelPipeline?: string;

  /**
   * @schema MultiplexProgramSettings#ProgramNumber
   */
  readonly programNumber: number;

  /**
   * @schema MultiplexProgramSettings#ServiceDescriptor
   */
  readonly serviceDescriptor?: MultiplexProgramServiceDescriptor;

  /**
   * @schema MultiplexProgramSettings#VideoSettings
   */
  readonly videoSettings?: MultiplexVideoSettings;

}

/**
 * @schema MultiplexProgram
 */
export interface MultiplexProgram {
  /**
   * @schema MultiplexProgram#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MultiplexProgram#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * @schema MultiplexProgram#PacketIdentifiersMap
   */
  readonly packetIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * @schema MultiplexProgram#PipelineDetails
   */
  readonly pipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * @schema MultiplexProgram#ProgramName
   */
  readonly programName?: string;

}

/**
 * @schema ChannelEgressEndpoint
 */
export interface ChannelEgressEndpoint {
  /**
   * @schema ChannelEgressEndpoint#SourceIp
   */
  readonly sourceIp?: string;

}

/**
 * @schema PipelineDetail
 */
export interface PipelineDetail {
  /**
   * @schema PipelineDetail#ActiveInputAttachmentName
   */
  readonly activeInputAttachmentName?: string;

  /**
   * @schema PipelineDetail#ActiveInputSwitchActionName
   */
  readonly activeInputSwitchActionName?: string;

  /**
   * @schema PipelineDetail#PipelineId
   */
  readonly pipelineId?: string;

}

/**
 * @schema MultiplexOutputDestination
 */
export interface MultiplexOutputDestination {
  /**
   * @schema MultiplexOutputDestination#MediaConnectSettings
   */
  readonly mediaConnectSettings?: MultiplexMediaConnectOutputDestinationSettings;

}

/**
 * @schema MultiplexProgramPacketIdentifiersMap
 */
export interface MultiplexProgramPacketIdentifiersMap {
  /**
   * @schema MultiplexProgramPacketIdentifiersMap#AudioPids
   */
  readonly audioPids?: number[];

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#DvbSubPids
   */
  readonly dvbSubPids?: number[];

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#DvbTeletextPid
   */
  readonly dvbTeletextPid?: number;

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#EtvPlatformPid
   */
  readonly etvPlatformPid?: number;

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#EtvSignalPid
   */
  readonly etvSignalPid?: number;

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#KlvDataPids
   */
  readonly klvDataPids?: number[];

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#PcrPid
   */
  readonly pcrPid?: number;

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#PmtPid
   */
  readonly pmtPid?: number;

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#PrivateMetadataPid
   */
  readonly privateMetadataPid?: number;

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#Scte27Pids
   */
  readonly scte27Pids?: number[];

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#Scte35Pid
   */
  readonly scte35Pid?: number;

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#TimedMetadataPid
   */
  readonly timedMetadataPid?: number;

  /**
   * @schema MultiplexProgramPacketIdentifiersMap#VideoPid
   */
  readonly videoPid?: number;

}

/**
 * @schema MultiplexProgramPipelineDetail
 */
export interface MultiplexProgramPipelineDetail {
  /**
   * @schema MultiplexProgramPipelineDetail#ActiveChannelPipeline
   */
  readonly activeChannelPipeline?: string;

  /**
   * @schema MultiplexProgramPipelineDetail#PipelineId
   */
  readonly pipelineId?: string;

}

/**
 * @schema ReservationResourceSpecification
 */
export interface ReservationResourceSpecification {
  /**
   * @schema ReservationResourceSpecification#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema ReservationResourceSpecification#Codec
   */
  readonly codec?: string;

  /**
   * @schema ReservationResourceSpecification#MaximumBitrate
   */
  readonly maximumBitrate?: string;

  /**
   * @schema ReservationResourceSpecification#MaximumFramerate
   */
  readonly maximumFramerate?: string;

  /**
   * @schema ReservationResourceSpecification#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema ReservationResourceSpecification#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ReservationResourceSpecification#SpecialFeature
   */
  readonly specialFeature?: string;

  /**
   * @schema ReservationResourceSpecification#VideoQuality
   */
  readonly videoQuality?: string;

}

/**
 * @schema InputDestination
 */
export interface InputDestination {
  /**
   * @schema InputDestination#Ip
   */
  readonly ip?: string;

  /**
   * @schema InputDestination#Port
   */
  readonly port?: string;

  /**
   * @schema InputDestination#Url
   */
  readonly url?: string;

  /**
   * @schema InputDestination#Vpc
   */
  readonly vpc?: InputDestinationVpc;

}

/**
 * @schema MediaConnectFlow
 */
export interface MediaConnectFlow {
  /**
   * @schema MediaConnectFlow#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * @schema InputSource
 */
export interface InputSource {
  /**
   * @schema InputSource#PasswordParam
   */
  readonly passwordParam?: string;

  /**
   * @schema InputSource#Url
   */
  readonly url?: string;

  /**
   * @schema InputSource#Username
   */
  readonly username?: string;

}

/**
 * @schema InputDeviceHdSettings
 */
export interface InputDeviceHdSettings {
  /**
   * @schema InputDeviceHdSettings#ActiveInput
   */
  readonly activeInput?: string;

  /**
   * @schema InputDeviceHdSettings#ConfiguredInput
   */
  readonly configuredInput?: string;

  /**
   * @schema InputDeviceHdSettings#DeviceState
   */
  readonly deviceState?: string;

  /**
   * @schema InputDeviceHdSettings#Framerate
   */
  readonly framerate?: number;

  /**
   * @schema InputDeviceHdSettings#Height
   */
  readonly height?: number;

  /**
   * @schema InputDeviceHdSettings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema InputDeviceHdSettings#ScanType
   */
  readonly scanType?: string;

  /**
   * @schema InputDeviceHdSettings#Width
   */
  readonly width?: number;

}

/**
 * @schema InputDeviceNetworkSettings
 */
export interface InputDeviceNetworkSettings {
  /**
   * @schema InputDeviceNetworkSettings#DnsAddresses
   */
  readonly dnsAddresses?: string[];

  /**
   * @schema InputDeviceNetworkSettings#Gateway
   */
  readonly gateway?: string;

  /**
   * @schema InputDeviceNetworkSettings#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema InputDeviceNetworkSettings#IpScheme
   */
  readonly ipScheme?: string;

  /**
   * @schema InputDeviceNetworkSettings#SubnetMask
   */
  readonly subnetMask?: string;

}

/**
 * @schema InputWhitelistRule
 */
export interface InputWhitelistRule {
  /**
   * @schema InputWhitelistRule#Cidr
   */
  readonly cidr?: string;

}

/**
 * @schema ScheduleAction
 */
export interface ScheduleAction {
  /**
   * @schema ScheduleAction#ActionName
   */
  readonly actionName: string;

  /**
   * @schema ScheduleAction#ScheduleActionSettings
   */
  readonly scheduleActionSettings: ScheduleActionSettings;

  /**
   * @schema ScheduleAction#ScheduleActionStartSettings
   */
  readonly scheduleActionStartSettings: ScheduleActionStartSettings;

}

/**
 * @schema ChannelSummary
 */
export interface ChannelSummary {
  /**
   * @schema ChannelSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ChannelSummary#CdiInputSpecification
   */
  readonly cdiInputSpecification?: CdiInputSpecification;

  /**
   * @schema ChannelSummary#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema ChannelSummary#Destinations
   */
  readonly destinations?: OutputDestination[];

  /**
   * @schema ChannelSummary#EgressEndpoints
   */
  readonly egressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @schema ChannelSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ChannelSummary#InputAttachments
   */
  readonly inputAttachments?: InputAttachment[];

  /**
   * @schema ChannelSummary#InputSpecification
   */
  readonly inputSpecification?: InputSpecification;

  /**
   * @schema ChannelSummary#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema ChannelSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChannelSummary#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema ChannelSummary#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema ChannelSummary#State
   */
  readonly state?: string;

  /**
   * @schema ChannelSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema TransferringInputDeviceSummary
 */
export interface TransferringInputDeviceSummary {
  /**
   * @schema TransferringInputDeviceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema TransferringInputDeviceSummary#Message
   */
  readonly message?: string;

  /**
   * @schema TransferringInputDeviceSummary#TargetCustomerId
   */
  readonly targetCustomerId?: string;

  /**
   * @schema TransferringInputDeviceSummary#TransferType
   */
  readonly transferType?: string;

}

/**
 * @schema InputDeviceSummary
 */
export interface InputDeviceSummary {
  /**
   * @schema InputDeviceSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema InputDeviceSummary#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema InputDeviceSummary#DeviceSettingsSyncState
   */
  readonly deviceSettingsSyncState?: string;

  /**
   * @schema InputDeviceSummary#DeviceUpdateStatus
   */
  readonly deviceUpdateStatus?: string;

  /**
   * @schema InputDeviceSummary#HdDeviceSettings
   */
  readonly hdDeviceSettings?: InputDeviceHdSettings;

  /**
   * @schema InputDeviceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema InputDeviceSummary#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema InputDeviceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema InputDeviceSummary#NetworkSettings
   */
  readonly networkSettings?: InputDeviceNetworkSettings;

  /**
   * @schema InputDeviceSummary#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema InputDeviceSummary#Type
   */
  readonly type?: string;

}

/**
 * @schema MultiplexProgramSummary
 */
export interface MultiplexProgramSummary {
  /**
   * @schema MultiplexProgramSummary#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MultiplexProgramSummary#ProgramName
   */
  readonly programName?: string;

}

/**
 * @schema MultiplexSummary
 */
export interface MultiplexSummary {
  /**
   * @schema MultiplexSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema MultiplexSummary#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema MultiplexSummary#Id
   */
  readonly id?: string;

  /**
   * @schema MultiplexSummary#MultiplexSettings
   */
  readonly multiplexSettings?: MultiplexSettingsSummary;

  /**
   * @schema MultiplexSummary#Name
   */
  readonly name?: string;

  /**
   * @schema MultiplexSummary#PipelinesRunningCount
   */
  readonly pipelinesRunningCount?: number;

  /**
   * @schema MultiplexSummary#ProgramCount
   */
  readonly programCount?: number;

  /**
   * @schema MultiplexSummary#State
   */
  readonly state?: string;

  /**
   * @schema MultiplexSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Offering
 */
export interface Offering {
  /**
   * @schema Offering#Arn
   */
  readonly arn?: string;

  /**
   * @schema Offering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Offering#Duration
   */
  readonly duration?: number;

  /**
   * @schema Offering#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema Offering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema Offering#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema Offering#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema Offering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema Offering#Region
   */
  readonly region?: string;

  /**
   * @schema Offering#ResourceSpecification
   */
  readonly resourceSpecification?: ReservationResourceSpecification;

  /**
   * @schema Offering#UsagePrice
   */
  readonly usagePrice?: number;

}

/**
 * @schema Reservation
 */
export interface Reservation {
  /**
   * @schema Reservation#Arn
   */
  readonly arn?: string;

  /**
   * @schema Reservation#Count
   */
  readonly count?: number;

  /**
   * @schema Reservation#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Reservation#Duration
   */
  readonly duration?: number;

  /**
   * @schema Reservation#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema Reservation#End
   */
  readonly end?: string;

  /**
   * @schema Reservation#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema Reservation#Name
   */
  readonly name?: string;

  /**
   * @schema Reservation#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema Reservation#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema Reservation#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema Reservation#Region
   */
  readonly region?: string;

  /**
   * @schema Reservation#ReservationId
   */
  readonly reservationId?: string;

  /**
   * @schema Reservation#ResourceSpecification
   */
  readonly resourceSpecification?: ReservationResourceSpecification;

  /**
   * @schema Reservation#Start
   */
  readonly start?: string;

  /**
   * @schema Reservation#State
   */
  readonly state?: string;

  /**
   * @schema Reservation#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Reservation#UsagePrice
   */
  readonly usagePrice?: number;

}

/**
 * @schema InputDeviceRequest
 */
export interface InputDeviceRequest {
  /**
   * @schema InputDeviceRequest#Id
   */
  readonly id?: string;

}

/**
 * @schema InputDeviceConfigurableSettings
 */
export interface InputDeviceConfigurableSettings {
  /**
   * @schema InputDeviceConfigurableSettings#ConfiguredInput
   */
  readonly configuredInput?: string;

  /**
   * @schema InputDeviceConfigurableSettings#MaxBitrate
   */
  readonly maxBitrate?: number;

}

/**
 * @schema MediaPackageOutputDestinationSettings
 */
export interface MediaPackageOutputDestinationSettings {
  /**
   * @schema MediaPackageOutputDestinationSettings#ChannelId
   */
  readonly channelId?: string;

}

/**
 * @schema MultiplexProgramChannelDestinationSettings
 */
export interface MultiplexProgramChannelDestinationSettings {
  /**
   * @schema MultiplexProgramChannelDestinationSettings#MultiplexId
   */
  readonly multiplexId?: string;

  /**
   * @schema MultiplexProgramChannelDestinationSettings#ProgramName
   */
  readonly programName?: string;

}

/**
 * @schema OutputDestinationSettings
 */
export interface OutputDestinationSettings {
  /**
   * @schema OutputDestinationSettings#PasswordParam
   */
  readonly passwordParam?: string;

  /**
   * @schema OutputDestinationSettings#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema OutputDestinationSettings#Url
   */
  readonly url?: string;

  /**
   * @schema OutputDestinationSettings#Username
   */
  readonly username?: string;

}

/**
 * @schema AudioDescription
 */
export interface AudioDescription {
  /**
   * @schema AudioDescription#AudioNormalizationSettings
   */
  readonly audioNormalizationSettings?: AudioNormalizationSettings;

  /**
   * @schema AudioDescription#AudioSelectorName
   */
  readonly audioSelectorName: string;

  /**
   * @schema AudioDescription#AudioType
   */
  readonly audioType?: string;

  /**
   * @schema AudioDescription#AudioTypeControl
   */
  readonly audioTypeControl?: string;

  /**
   * @schema AudioDescription#CodecSettings
   */
  readonly codecSettings?: AudioCodecSettings;

  /**
   * @schema AudioDescription#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema AudioDescription#LanguageCodeControl
   */
  readonly languageCodeControl?: string;

  /**
   * @schema AudioDescription#Name
   */
  readonly name: string;

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
 * @schema AvailBlanking
 */
export interface AvailBlanking {
  /**
   * @schema AvailBlanking#AvailBlankingImage
   */
  readonly availBlankingImage?: InputLocation;

  /**
   * @schema AvailBlanking#State
   */
  readonly state?: string;

}

/**
 * @schema AvailConfiguration
 */
export interface AvailConfiguration {
  /**
   * @schema AvailConfiguration#AvailSettings
   */
  readonly availSettings?: AvailSettings;

}

/**
 * @schema BlackoutSlate
 */
export interface BlackoutSlate {
  /**
   * @schema BlackoutSlate#BlackoutSlateImage
   */
  readonly blackoutSlateImage?: InputLocation;

  /**
   * @schema BlackoutSlate#NetworkEndBlackout
   */
  readonly networkEndBlackout?: string;

  /**
   * @schema BlackoutSlate#NetworkEndBlackoutImage
   */
  readonly networkEndBlackoutImage?: InputLocation;

  /**
   * @schema BlackoutSlate#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema BlackoutSlate#State
   */
  readonly state?: string;

}

/**
 * @schema CaptionDescription
 */
export interface CaptionDescription {
  /**
   * @schema CaptionDescription#CaptionSelectorName
   */
  readonly captionSelectorName: string;

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

  /**
   * @schema CaptionDescription#Name
   */
  readonly name: string;

}

/**
 * @schema FeatureActivations
 */
export interface FeatureActivations {
  /**
   * @schema FeatureActivations#InputPrepareScheduleActions
   */
  readonly inputPrepareScheduleActions?: string;

}

/**
 * @schema GlobalConfiguration
 */
export interface GlobalConfiguration {
  /**
   * @schema GlobalConfiguration#InitialAudioGain
   */
  readonly initialAudioGain?: number;

  /**
   * @schema GlobalConfiguration#InputEndAction
   */
  readonly inputEndAction?: string;

  /**
   * @schema GlobalConfiguration#InputLossBehavior
   */
  readonly inputLossBehavior?: InputLossBehavior;

  /**
   * @schema GlobalConfiguration#OutputLockingMode
   */
  readonly outputLockingMode?: string;

  /**
   * @schema GlobalConfiguration#OutputTimingSource
   */
  readonly outputTimingSource?: string;

  /**
   * @schema GlobalConfiguration#SupportLowFramerateInputs
   */
  readonly supportLowFramerateInputs?: string;

}

/**
 * @schema NielsenConfiguration
 */
export interface NielsenConfiguration {
  /**
   * @schema NielsenConfiguration#DistributorId
   */
  readonly distributorId?: string;

  /**
   * @schema NielsenConfiguration#NielsenPcmToId3Tagging
   */
  readonly nielsenPcmToId3Tagging?: string;

}

/**
 * @schema OutputGroup
 */
export interface OutputGroup {
  /**
   * @schema OutputGroup#Name
   */
  readonly name?: string;

  /**
   * @schema OutputGroup#OutputGroupSettings
   */
  readonly outputGroupSettings: OutputGroupSettings;

  /**
   * @schema OutputGroup#Outputs
   */
  readonly outputs: Output[];

}

/**
 * @schema TimecodeConfig
 */
export interface TimecodeConfig {
  /**
   * @schema TimecodeConfig#Source
   */
  readonly source: string;

  /**
   * @schema TimecodeConfig#SyncThreshold
   */
  readonly syncThreshold?: number;

}

/**
 * @schema VideoDescription
 */
export interface VideoDescription {
  /**
   * @schema VideoDescription#CodecSettings
   */
  readonly codecSettings?: VideoCodecSettings;

  /**
   * @schema VideoDescription#Height
   */
  readonly height?: number;

  /**
   * @schema VideoDescription#Name
   */
  readonly name: string;

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
   * @schema VideoDescription#Width
   */
  readonly width?: number;

}

/**
 * @schema AutomaticInputFailoverSettings
 */
export interface AutomaticInputFailoverSettings {
  /**
   * @schema AutomaticInputFailoverSettings#ErrorClearTimeMsec
   */
  readonly errorClearTimeMsec?: number;

  /**
   * @schema AutomaticInputFailoverSettings#FailoverConditions
   */
  readonly failoverConditions?: FailoverCondition[];

  /**
   * @schema AutomaticInputFailoverSettings#InputPreference
   */
  readonly inputPreference?: string;

  /**
   * @schema AutomaticInputFailoverSettings#SecondaryInputId
   */
  readonly secondaryInputId: string;

}

/**
 * @schema InputSettings
 */
export interface InputSettings {
  /**
   * @schema InputSettings#AudioSelectors
   */
  readonly audioSelectors?: AudioSelector[];

  /**
   * @schema InputSettings#CaptionSelectors
   */
  readonly captionSelectors?: CaptionSelector[];

  /**
   * @schema InputSettings#DeblockFilter
   */
  readonly deblockFilter?: string;

  /**
   * @schema InputSettings#DenoiseFilter
   */
  readonly denoiseFilter?: string;

  /**
   * @schema InputSettings#FilterStrength
   */
  readonly filterStrength?: number;

  /**
   * @schema InputSettings#InputFilter
   */
  readonly inputFilter?: string;

  /**
   * @schema InputSettings#NetworkInputSettings
   */
  readonly networkInputSettings?: NetworkInputSettings;

  /**
   * @schema InputSettings#Smpte2038DataPreference
   */
  readonly smpte2038DataPreference?: string;

  /**
   * @schema InputSettings#SourceEndBehavior
   */
  readonly sourceEndBehavior?: string;

  /**
   * @schema InputSettings#VideoSelector
   */
  readonly videoSelector?: VideoSelector;

}

/**
 * @schema MultiplexProgramServiceDescriptor
 */
export interface MultiplexProgramServiceDescriptor {
  /**
   * @schema MultiplexProgramServiceDescriptor#ProviderName
   */
  readonly providerName: string;

  /**
   * @schema MultiplexProgramServiceDescriptor#ServiceName
   */
  readonly serviceName: string;

}

/**
 * @schema MultiplexVideoSettings
 */
export interface MultiplexVideoSettings {
  /**
   * @schema MultiplexVideoSettings#ConstantBitrate
   */
  readonly constantBitrate?: number;

  /**
   * @schema MultiplexVideoSettings#StatmuxSettings
   */
  readonly statmuxSettings?: MultiplexStatmuxVideoSettings;

}

/**
 * @schema MultiplexMediaConnectOutputDestinationSettings
 */
export interface MultiplexMediaConnectOutputDestinationSettings {
  /**
   * @schema MultiplexMediaConnectOutputDestinationSettings#EntitlementArn
   */
  readonly entitlementArn?: string;

}

/**
 * @schema InputDestinationVpc
 */
export interface InputDestinationVpc {
  /**
   * @schema InputDestinationVpc#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema InputDestinationVpc#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

}

/**
 * @schema ScheduleActionSettings
 */
export interface ScheduleActionSettings {
  /**
   * @schema ScheduleActionSettings#HlsId3SegmentTaggingSettings
   */
  readonly hlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;

  /**
   * @schema ScheduleActionSettings#HlsTimedMetadataSettings
   */
  readonly hlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;

  /**
   * @schema ScheduleActionSettings#InputPrepareSettings
   */
  readonly inputPrepareSettings?: InputPrepareScheduleActionSettings;

  /**
   * @schema ScheduleActionSettings#InputSwitchSettings
   */
  readonly inputSwitchSettings?: InputSwitchScheduleActionSettings;

  /**
   * @schema ScheduleActionSettings#PauseStateSettings
   */
  readonly pauseStateSettings?: PauseStateScheduleActionSettings;

  /**
   * @schema ScheduleActionSettings#Scte35ReturnToNetworkSettings
   */
  readonly scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;

  /**
   * @schema ScheduleActionSettings#Scte35SpliceInsertSettings
   */
  readonly scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;

  /**
   * @schema ScheduleActionSettings#Scte35TimeSignalSettings
   */
  readonly scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;

  /**
   * @schema ScheduleActionSettings#StaticImageActivateSettings
   */
  readonly staticImageActivateSettings?: StaticImageActivateScheduleActionSettings;

  /**
   * @schema ScheduleActionSettings#StaticImageDeactivateSettings
   */
  readonly staticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings;

}

/**
 * @schema ScheduleActionStartSettings
 */
export interface ScheduleActionStartSettings {
  /**
   * @schema ScheduleActionStartSettings#FixedModeScheduleActionStartSettings
   */
  readonly fixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings;

  /**
   * @schema ScheduleActionStartSettings#FollowModeScheduleActionStartSettings
   */
  readonly followModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;

  /**
   * @schema ScheduleActionStartSettings#ImmediateModeScheduleActionStartSettings
   */
  readonly immediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings;

}

/**
 * @schema MultiplexSettingsSummary
 */
export interface MultiplexSettingsSummary {
  /**
   * @schema MultiplexSettingsSummary#TransportStreamBitrate
   */
  readonly transportStreamBitrate?: number;

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
   * @schema AudioCodecSettings#Eac3Settings
   */
  readonly eac3Settings?: Eac3Settings;

  /**
   * @schema AudioCodecSettings#Mp2Settings
   */
  readonly mp2Settings?: Mp2Settings;

  /**
   * @schema AudioCodecSettings#PassThroughSettings
   */
  readonly passThroughSettings?: PassThroughSettings;

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
   * @schema RemixSettings#ChannelMappings
   */
  readonly channelMappings: AudioChannelMapping[];

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
 * @schema InputLocation
 */
export interface InputLocation {
  /**
   * @schema InputLocation#PasswordParam
   */
  readonly passwordParam?: string;

  /**
   * @schema InputLocation#Uri
   */
  readonly uri: string;

  /**
   * @schema InputLocation#Username
   */
  readonly username?: string;

}

/**
 * @schema AvailSettings
 */
export interface AvailSettings {
  /**
   * @schema AvailSettings#Scte35SpliceInsert
   */
  readonly scte35SpliceInsert?: Scte35SpliceInsert;

  /**
   * @schema AvailSettings#Scte35TimeSignalApos
   */
  readonly scte35TimeSignalApos?: Scte35TimeSignalApos;

}

/**
 * @schema CaptionDestinationSettings
 */
export interface CaptionDestinationSettings {
  /**
   * @schema CaptionDestinationSettings#AribDestinationSettings
   */
  readonly aribDestinationSettings?: AribDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#BurnInDestinationSettings
   */
  readonly burnInDestinationSettings?: BurnInDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#DvbSubDestinationSettings
   */
  readonly dvbSubDestinationSettings?: DvbSubDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#EbuTtDDestinationSettings
   */
  readonly ebuTtDDestinationSettings?: EbuTtDDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#EmbeddedDestinationSettings
   */
  readonly embeddedDestinationSettings?: EmbeddedDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#EmbeddedPlusScte20DestinationSettings
   */
  readonly embeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;

  /**
   * @schema CaptionDestinationSettings#RtmpCaptionInfoDestinationSettings
   */
  readonly rtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#Scte20PlusEmbeddedDestinationSettings
   */
  readonly scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#Scte27DestinationSettings
   */
  readonly scte27DestinationSettings?: Scte27DestinationSettings;

  /**
   * @schema CaptionDestinationSettings#SmpteTtDestinationSettings
   */
  readonly smpteTtDestinationSettings?: SmpteTtDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#TeletextDestinationSettings
   */
  readonly teletextDestinationSettings?: TeletextDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#TtmlDestinationSettings
   */
  readonly ttmlDestinationSettings?: TtmlDestinationSettings;

  /**
   * @schema CaptionDestinationSettings#WebvttDestinationSettings
   */
  readonly webvttDestinationSettings?: WebvttDestinationSettings;

}

/**
 * @schema InputLossBehavior
 */
export interface InputLossBehavior {
  /**
   * @schema InputLossBehavior#BlackFrameMsec
   */
  readonly blackFrameMsec?: number;

  /**
   * @schema InputLossBehavior#InputLossImageColor
   */
  readonly inputLossImageColor?: string;

  /**
   * @schema InputLossBehavior#InputLossImageSlate
   */
  readonly inputLossImageSlate?: InputLocation;

  /**
   * @schema InputLossBehavior#InputLossImageType
   */
  readonly inputLossImageType?: string;

  /**
   * @schema InputLossBehavior#RepeatFrameMsec
   */
  readonly repeatFrameMsec?: number;

}

/**
 * @schema OutputGroupSettings
 */
export interface OutputGroupSettings {
  /**
   * @schema OutputGroupSettings#ArchiveGroupSettings
   */
  readonly archiveGroupSettings?: ArchiveGroupSettings;

  /**
   * @schema OutputGroupSettings#FrameCaptureGroupSettings
   */
  readonly frameCaptureGroupSettings?: FrameCaptureGroupSettings;

  /**
   * @schema OutputGroupSettings#HlsGroupSettings
   */
  readonly hlsGroupSettings?: HlsGroupSettings;

  /**
   * @schema OutputGroupSettings#MediaPackageGroupSettings
   */
  readonly mediaPackageGroupSettings?: MediaPackageGroupSettings;

  /**
   * @schema OutputGroupSettings#MsSmoothGroupSettings
   */
  readonly msSmoothGroupSettings?: MsSmoothGroupSettings;

  /**
   * @schema OutputGroupSettings#MultiplexGroupSettings
   */
  readonly multiplexGroupSettings?: MultiplexGroupSettings;

  /**
   * @schema OutputGroupSettings#RtmpGroupSettings
   */
  readonly rtmpGroupSettings?: RtmpGroupSettings;

  /**
   * @schema OutputGroupSettings#UdpGroupSettings
   */
  readonly udpGroupSettings?: UdpGroupSettings;

}

/**
 * @schema Output
 */
export interface Output {
  /**
   * @schema Output#AudioDescriptionNames
   */
  readonly audioDescriptionNames?: string[];

  /**
   * @schema Output#CaptionDescriptionNames
   */
  readonly captionDescriptionNames?: string[];

  /**
   * @schema Output#OutputName
   */
  readonly outputName?: string;

  /**
   * @schema Output#OutputSettings
   */
  readonly outputSettings: OutputSettings;

  /**
   * @schema Output#VideoDescriptionName
   */
  readonly videoDescriptionName?: string;

}

/**
 * @schema VideoCodecSettings
 */
export interface VideoCodecSettings {
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

}

/**
 * @schema FailoverCondition
 */
export interface FailoverCondition {
  /**
   * @schema FailoverCondition#FailoverConditionSettings
   */
  readonly failoverConditionSettings?: FailoverConditionSettings;

}

/**
 * @schema AudioSelector
 */
export interface AudioSelector {
  /**
   * @schema AudioSelector#Name
   */
  readonly name: string;

  /**
   * @schema AudioSelector#SelectorSettings
   */
  readonly selectorSettings?: AudioSelectorSettings;

}

/**
 * @schema CaptionSelector
 */
export interface CaptionSelector {
  /**
   * @schema CaptionSelector#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema CaptionSelector#Name
   */
  readonly name: string;

  /**
   * @schema CaptionSelector#SelectorSettings
   */
  readonly selectorSettings?: CaptionSelectorSettings;

}

/**
 * @schema NetworkInputSettings
 */
export interface NetworkInputSettings {
  /**
   * @schema NetworkInputSettings#HlsInputSettings
   */
  readonly hlsInputSettings?: HlsInputSettings;

  /**
   * @schema NetworkInputSettings#ServerValidation
   */
  readonly serverValidation?: string;

}

/**
 * @schema VideoSelector
 */
export interface VideoSelector {
  /**
   * @schema VideoSelector#ColorSpace
   */
  readonly colorSpace?: string;

  /**
   * @schema VideoSelector#ColorSpaceUsage
   */
  readonly colorSpaceUsage?: string;

  /**
   * @schema VideoSelector#SelectorSettings
   */
  readonly selectorSettings?: VideoSelectorSettings;

}

/**
 * @schema MultiplexStatmuxVideoSettings
 */
export interface MultiplexStatmuxVideoSettings {
  /**
   * @schema MultiplexStatmuxVideoSettings#MaximumBitrate
   */
  readonly maximumBitrate?: number;

  /**
   * @schema MultiplexStatmuxVideoSettings#MinimumBitrate
   */
  readonly minimumBitrate?: number;

  /**
   * @schema MultiplexStatmuxVideoSettings#Priority
   */
  readonly priority?: number;

}

/**
 * @schema HlsId3SegmentTaggingScheduleActionSettings
 */
export interface HlsId3SegmentTaggingScheduleActionSettings {
  /**
   * @schema HlsId3SegmentTaggingScheduleActionSettings#Tag
   */
  readonly tag: string;

}

/**
 * @schema HlsTimedMetadataScheduleActionSettings
 */
export interface HlsTimedMetadataScheduleActionSettings {
  /**
   * @schema HlsTimedMetadataScheduleActionSettings#Id3
   */
  readonly id3: string;

}

/**
 * @schema InputPrepareScheduleActionSettings
 */
export interface InputPrepareScheduleActionSettings {
  /**
   * @schema InputPrepareScheduleActionSettings#InputAttachmentNameReference
   */
  readonly inputAttachmentNameReference?: string;

  /**
   * @schema InputPrepareScheduleActionSettings#InputClippingSettings
   */
  readonly inputClippingSettings?: InputClippingSettings;

  /**
   * @schema InputPrepareScheduleActionSettings#UrlPath
   */
  readonly urlPath?: string[];

}

/**
 * @schema InputSwitchScheduleActionSettings
 */
export interface InputSwitchScheduleActionSettings {
  /**
   * @schema InputSwitchScheduleActionSettings#InputAttachmentNameReference
   */
  readonly inputAttachmentNameReference: string;

  /**
   * @schema InputSwitchScheduleActionSettings#InputClippingSettings
   */
  readonly inputClippingSettings?: InputClippingSettings;

  /**
   * @schema InputSwitchScheduleActionSettings#UrlPath
   */
  readonly urlPath?: string[];

}

/**
 * @schema PauseStateScheduleActionSettings
 */
export interface PauseStateScheduleActionSettings {
  /**
   * @schema PauseStateScheduleActionSettings#Pipelines
   */
  readonly pipelines?: PipelinePauseStateSettings[];

}

/**
 * @schema Scte35ReturnToNetworkScheduleActionSettings
 */
export interface Scte35ReturnToNetworkScheduleActionSettings {
  /**
   * @schema Scte35ReturnToNetworkScheduleActionSettings#SpliceEventId
   */
  readonly spliceEventId: number;

}

/**
 * @schema Scte35SpliceInsertScheduleActionSettings
 */
export interface Scte35SpliceInsertScheduleActionSettings {
  /**
   * @schema Scte35SpliceInsertScheduleActionSettings#Duration
   */
  readonly duration?: number;

  /**
   * @schema Scte35SpliceInsertScheduleActionSettings#SpliceEventId
   */
  readonly spliceEventId: number;

}

/**
 * @schema Scte35TimeSignalScheduleActionSettings
 */
export interface Scte35TimeSignalScheduleActionSettings {
  /**
   * @schema Scte35TimeSignalScheduleActionSettings#Scte35Descriptors
   */
  readonly scte35Descriptors: Scte35Descriptor[];

}

/**
 * @schema StaticImageActivateScheduleActionSettings
 */
export interface StaticImageActivateScheduleActionSettings {
  /**
   * @schema StaticImageActivateScheduleActionSettings#Duration
   */
  readonly duration?: number;

  /**
   * @schema StaticImageActivateScheduleActionSettings#FadeIn
   */
  readonly fadeIn?: number;

  /**
   * @schema StaticImageActivateScheduleActionSettings#FadeOut
   */
  readonly fadeOut?: number;

  /**
   * @schema StaticImageActivateScheduleActionSettings#Height
   */
  readonly height?: number;

  /**
   * @schema StaticImageActivateScheduleActionSettings#Image
   */
  readonly image: InputLocation;

  /**
   * @schema StaticImageActivateScheduleActionSettings#ImageX
   */
  readonly imageX?: number;

  /**
   * @schema StaticImageActivateScheduleActionSettings#ImageY
   */
  readonly imageY?: number;

  /**
   * @schema StaticImageActivateScheduleActionSettings#Layer
   */
  readonly layer?: number;

  /**
   * @schema StaticImageActivateScheduleActionSettings#Opacity
   */
  readonly opacity?: number;

  /**
   * @schema StaticImageActivateScheduleActionSettings#Width
   */
  readonly width?: number;

}

/**
 * @schema StaticImageDeactivateScheduleActionSettings
 */
export interface StaticImageDeactivateScheduleActionSettings {
  /**
   * @schema StaticImageDeactivateScheduleActionSettings#FadeOut
   */
  readonly fadeOut?: number;

  /**
   * @schema StaticImageDeactivateScheduleActionSettings#Layer
   */
  readonly layer?: number;

}

/**
 * @schema FixedModeScheduleActionStartSettings
 */
export interface FixedModeScheduleActionStartSettings {
  /**
   * @schema FixedModeScheduleActionStartSettings#Time
   */
  readonly time: string;

}

/**
 * @schema FollowModeScheduleActionStartSettings
 */
export interface FollowModeScheduleActionStartSettings {
  /**
   * @schema FollowModeScheduleActionStartSettings#FollowPoint
   */
  readonly followPoint: string;

  /**
   * @schema FollowModeScheduleActionStartSettings#ReferenceActionName
   */
  readonly referenceActionName: string;

}

/**
 * @schema ImmediateModeScheduleActionStartSettings
 */
export interface ImmediateModeScheduleActionStartSettings {
}

/**
 * @schema AacSettings
 */
export interface AacSettings {
  /**
   * @schema AacSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema AacSettings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema AacSettings#InputType
   */
  readonly inputType?: string;

  /**
   * @schema AacSettings#Profile
   */
  readonly profile?: string;

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
   * @schema AacSettings#Spec
   */
  readonly spec?: string;

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
   * @schema Ac3Settings#DrcProfile
   */
  readonly drcProfile?: string;

  /**
   * @schema Ac3Settings#LfeFilter
   */
  readonly lfeFilter?: string;

  /**
   * @schema Ac3Settings#MetadataControl
   */
  readonly metadataControl?: string;

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
   * @schema Eac3Settings#DrcLine
   */
  readonly drcLine?: string;

  /**
   * @schema Eac3Settings#DrcRf
   */
  readonly drcRf?: string;

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
   * @schema Mp2Settings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema Mp2Settings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema PassThroughSettings
 */
export interface PassThroughSettings {
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
   * @schema WavSettings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema WavSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * @schema AudioChannelMapping
 */
export interface AudioChannelMapping {
  /**
   * @schema AudioChannelMapping#InputChannelLevels
   */
  readonly inputChannelLevels: InputChannelLevel[];

  /**
   * @schema AudioChannelMapping#OutputChannel
   */
  readonly outputChannel: number;

}

/**
 * @schema Scte35SpliceInsert
 */
export interface Scte35SpliceInsert {
  /**
   * @schema Scte35SpliceInsert#AdAvailOffset
   */
  readonly adAvailOffset?: number;

  /**
   * @schema Scte35SpliceInsert#NoRegionalBlackoutFlag
   */
  readonly noRegionalBlackoutFlag?: string;

  /**
   * @schema Scte35SpliceInsert#WebDeliveryAllowedFlag
   */
  readonly webDeliveryAllowedFlag?: string;

}

/**
 * @schema Scte35TimeSignalApos
 */
export interface Scte35TimeSignalApos {
  /**
   * @schema Scte35TimeSignalApos#AdAvailOffset
   */
  readonly adAvailOffset?: number;

  /**
   * @schema Scte35TimeSignalApos#NoRegionalBlackoutFlag
   */
  readonly noRegionalBlackoutFlag?: string;

  /**
   * @schema Scte35TimeSignalApos#WebDeliveryAllowedFlag
   */
  readonly webDeliveryAllowedFlag?: string;

}

/**
 * @schema AribDestinationSettings
 */
export interface AribDestinationSettings {
}

/**
 * @schema BurnInDestinationSettings
 */
export interface BurnInDestinationSettings {
  /**
   * @schema BurnInDestinationSettings#Alignment
   */
  readonly alignment?: string;

  /**
   * @schema BurnInDestinationSettings#BackgroundColor
   */
  readonly backgroundColor?: string;

  /**
   * @schema BurnInDestinationSettings#BackgroundOpacity
   */
  readonly backgroundOpacity?: number;

  /**
   * @schema BurnInDestinationSettings#Font
   */
  readonly font?: InputLocation;

  /**
   * @schema BurnInDestinationSettings#FontColor
   */
  readonly fontColor?: string;

  /**
   * @schema BurnInDestinationSettings#FontOpacity
   */
  readonly fontOpacity?: number;

  /**
   * @schema BurnInDestinationSettings#FontResolution
   */
  readonly fontResolution?: number;

  /**
   * @schema BurnInDestinationSettings#FontSize
   */
  readonly fontSize?: string;

  /**
   * @schema BurnInDestinationSettings#OutlineColor
   */
  readonly outlineColor?: string;

  /**
   * @schema BurnInDestinationSettings#OutlineSize
   */
  readonly outlineSize?: number;

  /**
   * @schema BurnInDestinationSettings#ShadowColor
   */
  readonly shadowColor?: string;

  /**
   * @schema BurnInDestinationSettings#ShadowOpacity
   */
  readonly shadowOpacity?: number;

  /**
   * @schema BurnInDestinationSettings#ShadowXOffset
   */
  readonly shadowXOffset?: number;

  /**
   * @schema BurnInDestinationSettings#ShadowYOffset
   */
  readonly shadowYOffset?: number;

  /**
   * @schema BurnInDestinationSettings#TeletextGridControl
   */
  readonly teletextGridControl?: string;

  /**
   * @schema BurnInDestinationSettings#XPosition
   */
  readonly xPosition?: number;

  /**
   * @schema BurnInDestinationSettings#YPosition
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
   * @schema DvbSubDestinationSettings#Font
   */
  readonly font?: InputLocation;

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
   * @schema DvbSubDestinationSettings#FontSize
   */
  readonly fontSize?: string;

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
   * @schema DvbSubDestinationSettings#TeletextGridControl
   */
  readonly teletextGridControl?: string;

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
 * @schema EbuTtDDestinationSettings
 */
export interface EbuTtDDestinationSettings {
  /**
   * @schema EbuTtDDestinationSettings#FillLineGap
   */
  readonly fillLineGap?: string;

  /**
   * @schema EbuTtDDestinationSettings#FontFamily
   */
  readonly fontFamily?: string;

  /**
   * @schema EbuTtDDestinationSettings#StyleControl
   */
  readonly styleControl?: string;

}

/**
 * @schema EmbeddedDestinationSettings
 */
export interface EmbeddedDestinationSettings {
}

/**
 * @schema EmbeddedPlusScte20DestinationSettings
 */
export interface EmbeddedPlusScte20DestinationSettings {
}

/**
 * @schema RtmpCaptionInfoDestinationSettings
 */
export interface RtmpCaptionInfoDestinationSettings {
}

/**
 * @schema Scte20PlusEmbeddedDestinationSettings
 */
export interface Scte20PlusEmbeddedDestinationSettings {
}

/**
 * @schema Scte27DestinationSettings
 */
export interface Scte27DestinationSettings {
}

/**
 * @schema SmpteTtDestinationSettings
 */
export interface SmpteTtDestinationSettings {
}

/**
 * @schema TeletextDestinationSettings
 */
export interface TeletextDestinationSettings {
}

/**
 * @schema TtmlDestinationSettings
 */
export interface TtmlDestinationSettings {
  /**
   * @schema TtmlDestinationSettings#StyleControl
   */
  readonly styleControl?: string;

}

/**
 * @schema WebvttDestinationSettings
 */
export interface WebvttDestinationSettings {
}

/**
 * @schema ArchiveGroupSettings
 */
export interface ArchiveGroupSettings {
  /**
   * @schema ArchiveGroupSettings#Destination
   */
  readonly destination: OutputLocationRef;

  /**
   * @schema ArchiveGroupSettings#RolloverInterval
   */
  readonly rolloverInterval?: number;

}

/**
 * @schema FrameCaptureGroupSettings
 */
export interface FrameCaptureGroupSettings {
  /**
   * @schema FrameCaptureGroupSettings#Destination
   */
  readonly destination: OutputLocationRef;

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
   * @schema HlsGroupSettings#BaseUrlContent
   */
  readonly baseUrlContent?: string;

  /**
   * @schema HlsGroupSettings#BaseUrlContent1
   */
  readonly baseUrlContent1?: string;

  /**
   * @schema HlsGroupSettings#BaseUrlManifest
   */
  readonly baseUrlManifest?: string;

  /**
   * @schema HlsGroupSettings#BaseUrlManifest1
   */
  readonly baseUrlManifest1?: string;

  /**
   * @schema HlsGroupSettings#CaptionLanguageMappings
   */
  readonly captionLanguageMappings?: CaptionLanguageMapping[];

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
   * @schema HlsGroupSettings#ConstantIv
   */
  readonly constantIv?: string;

  /**
   * @schema HlsGroupSettings#Destination
   */
  readonly destination: OutputLocationRef;

  /**
   * @schema HlsGroupSettings#DirectoryStructure
   */
  readonly directoryStructure?: string;

  /**
   * @schema HlsGroupSettings#DiscontinuityTags
   */
  readonly discontinuityTags?: string;

  /**
   * @schema HlsGroupSettings#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema HlsGroupSettings#HlsCdnSettings
   */
  readonly hlsCdnSettings?: HlsCdnSettings;

  /**
   * @schema HlsGroupSettings#HlsId3SegmentTagging
   */
  readonly hlsId3SegmentTagging?: string;

  /**
   * @schema HlsGroupSettings#IFrameOnlyPlaylists
   */
  readonly iFrameOnlyPlaylists?: string;

  /**
   * @schema HlsGroupSettings#IncompleteSegmentBehavior
   */
  readonly incompleteSegmentBehavior?: string;

  /**
   * @schema HlsGroupSettings#IndexNSegments
   */
  readonly indexNSegments?: number;

  /**
   * @schema HlsGroupSettings#InputLossAction
   */
  readonly inputLossAction?: string;

  /**
   * @schema HlsGroupSettings#IvInManifest
   */
  readonly ivInManifest?: string;

  /**
   * @schema HlsGroupSettings#IvSource
   */
  readonly ivSource?: string;

  /**
   * @schema HlsGroupSettings#KeepSegments
   */
  readonly keepSegments?: number;

  /**
   * @schema HlsGroupSettings#KeyFormat
   */
  readonly keyFormat?: string;

  /**
   * @schema HlsGroupSettings#KeyFormatVersions
   */
  readonly keyFormatVersions?: string;

  /**
   * @schema HlsGroupSettings#KeyProviderSettings
   */
  readonly keyProviderSettings?: KeyProviderSettings;

  /**
   * @schema HlsGroupSettings#ManifestCompression
   */
  readonly manifestCompression?: string;

  /**
   * @schema HlsGroupSettings#ManifestDurationFormat
   */
  readonly manifestDurationFormat?: string;

  /**
   * @schema HlsGroupSettings#MinSegmentLength
   */
  readonly minSegmentLength?: number;

  /**
   * @schema HlsGroupSettings#Mode
   */
  readonly mode?: string;

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
   * @schema HlsGroupSettings#RedundantManifest
   */
  readonly redundantManifest?: string;

  /**
   * @schema HlsGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema HlsGroupSettings#SegmentationMode
   */
  readonly segmentationMode?: string;

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

  /**
   * @schema HlsGroupSettings#TsFileMode
   */
  readonly tsFileMode?: string;

}

/**
 * @schema MediaPackageGroupSettings
 */
export interface MediaPackageGroupSettings {
  /**
   * @schema MediaPackageGroupSettings#Destination
   */
  readonly destination: OutputLocationRef;

}

/**
 * @schema MsSmoothGroupSettings
 */
export interface MsSmoothGroupSettings {
  /**
   * @schema MsSmoothGroupSettings#AcquisitionPointId
   */
  readonly acquisitionPointId?: string;

  /**
   * @schema MsSmoothGroupSettings#AudioOnlyTimecodeControl
   */
  readonly audioOnlyTimecodeControl?: string;

  /**
   * @schema MsSmoothGroupSettings#CertificateMode
   */
  readonly certificateMode?: string;

  /**
   * @schema MsSmoothGroupSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema MsSmoothGroupSettings#Destination
   */
  readonly destination: OutputLocationRef;

  /**
   * @schema MsSmoothGroupSettings#EventId
   */
  readonly eventId?: string;

  /**
   * @schema MsSmoothGroupSettings#EventIdMode
   */
  readonly eventIdMode?: string;

  /**
   * @schema MsSmoothGroupSettings#EventStopBehavior
   */
  readonly eventStopBehavior?: string;

  /**
   * @schema MsSmoothGroupSettings#FilecacheDuration
   */
  readonly filecacheDuration?: number;

  /**
   * @schema MsSmoothGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema MsSmoothGroupSettings#InputLossAction
   */
  readonly inputLossAction?: string;

  /**
   * @schema MsSmoothGroupSettings#NumRetries
   */
  readonly numRetries?: number;

  /**
   * @schema MsSmoothGroupSettings#RestartDelay
   */
  readonly restartDelay?: number;

  /**
   * @schema MsSmoothGroupSettings#SegmentationMode
   */
  readonly segmentationMode?: string;

  /**
   * @schema MsSmoothGroupSettings#SendDelayMs
   */
  readonly sendDelayMs?: number;

  /**
   * @schema MsSmoothGroupSettings#SparseTrackType
   */
  readonly sparseTrackType?: string;

  /**
   * @schema MsSmoothGroupSettings#StreamManifestBehavior
   */
  readonly streamManifestBehavior?: string;

  /**
   * @schema MsSmoothGroupSettings#TimestampOffset
   */
  readonly timestampOffset?: string;

  /**
   * @schema MsSmoothGroupSettings#TimestampOffsetMode
   */
  readonly timestampOffsetMode?: string;

}

/**
 * @schema MultiplexGroupSettings
 */
export interface MultiplexGroupSettings {
}

/**
 * @schema RtmpGroupSettings
 */
export interface RtmpGroupSettings {
  /**
   * @schema RtmpGroupSettings#AdMarkers
   */
  readonly adMarkers?: string[];

  /**
   * @schema RtmpGroupSettings#AuthenticationScheme
   */
  readonly authenticationScheme?: string;

  /**
   * @schema RtmpGroupSettings#CacheFullBehavior
   */
  readonly cacheFullBehavior?: string;

  /**
   * @schema RtmpGroupSettings#CacheLength
   */
  readonly cacheLength?: number;

  /**
   * @schema RtmpGroupSettings#CaptionData
   */
  readonly captionData?: string;

  /**
   * @schema RtmpGroupSettings#InputLossAction
   */
  readonly inputLossAction?: string;

  /**
   * @schema RtmpGroupSettings#RestartDelay
   */
  readonly restartDelay?: number;

}

/**
 * @schema UdpGroupSettings
 */
export interface UdpGroupSettings {
  /**
   * @schema UdpGroupSettings#InputLossAction
   */
  readonly inputLossAction?: string;

  /**
   * @schema UdpGroupSettings#TimedMetadataId3Frame
   */
  readonly timedMetadataId3Frame?: string;

  /**
   * @schema UdpGroupSettings#TimedMetadataId3Period
   */
  readonly timedMetadataId3Period?: number;

}

/**
 * @schema OutputSettings
 */
export interface OutputSettings {
  /**
   * @schema OutputSettings#ArchiveOutputSettings
   */
  readonly archiveOutputSettings?: ArchiveOutputSettings;

  /**
   * @schema OutputSettings#FrameCaptureOutputSettings
   */
  readonly frameCaptureOutputSettings?: FrameCaptureOutputSettings;

  /**
   * @schema OutputSettings#HlsOutputSettings
   */
  readonly hlsOutputSettings?: HlsOutputSettings;

  /**
   * @schema OutputSettings#MediaPackageOutputSettings
   */
  readonly mediaPackageOutputSettings?: MediaPackageOutputSettings;

  /**
   * @schema OutputSettings#MsSmoothOutputSettings
   */
  readonly msSmoothOutputSettings?: MsSmoothOutputSettings;

  /**
   * @schema OutputSettings#MultiplexOutputSettings
   */
  readonly multiplexOutputSettings?: MultiplexOutputSettings;

  /**
   * @schema OutputSettings#RtmpOutputSettings
   */
  readonly rtmpOutputSettings?: RtmpOutputSettings;

  /**
   * @schema OutputSettings#UdpOutputSettings
   */
  readonly udpOutputSettings?: UdpOutputSettings;

}

/**
 * @schema FrameCaptureSettings
 */
export interface FrameCaptureSettings {
  /**
   * @schema FrameCaptureSettings#CaptureInterval
   */
  readonly captureInterval: number;

  /**
   * @schema FrameCaptureSettings#CaptureIntervalUnits
   */
  readonly captureIntervalUnits?: string;

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
   * @schema H264Settings#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema H264Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema H264Settings#BufFillPct
   */
  readonly bufFillPct?: number;

  /**
   * @schema H264Settings#BufSize
   */
  readonly bufSize?: number;

  /**
   * @schema H264Settings#ColorMetadata
   */
  readonly colorMetadata?: string;

  /**
   * @schema H264Settings#ColorSpaceSettings
   */
  readonly colorSpaceSettings?: H264ColorSpaceSettings;

  /**
   * @schema H264Settings#EntropyEncoding
   */
  readonly entropyEncoding?: string;

  /**
   * @schema H264Settings#FilterSettings
   */
  readonly filterSettings?: H264FilterSettings;

  /**
   * @schema H264Settings#FixedAfd
   */
  readonly fixedAfd?: string;

  /**
   * @schema H264Settings#FlickerAq
   */
  readonly flickerAq?: string;

  /**
   * @schema H264Settings#ForceFieldPictures
   */
  readonly forceFieldPictures?: string;

  /**
   * @schema H264Settings#FramerateControl
   */
  readonly framerateControl?: string;

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
   * @schema H264Settings#GopNumBFrames
   */
  readonly gopNumBFrames?: number;

  /**
   * @schema H264Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema H264Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema H264Settings#Level
   */
  readonly level?: string;

  /**
   * @schema H264Settings#LookAheadRateControl
   */
  readonly lookAheadRateControl?: string;

  /**
   * @schema H264Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema H264Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema H264Settings#NumRefFrames
   */
  readonly numRefFrames?: number;

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
   * @schema H264Settings#Profile
   */
  readonly profile?: string;

  /**
   * @schema H264Settings#QualityLevel
   */
  readonly qualityLevel?: string;

  /**
   * @schema H264Settings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema H264Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema H264Settings#ScanType
   */
  readonly scanType?: string;

  /**
   * @schema H264Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema H264Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema H264Settings#Softness
   */
  readonly softness?: number;

  /**
   * @schema H264Settings#SpatialAq
   */
  readonly spatialAq?: string;

  /**
   * @schema H264Settings#SubgopLength
   */
  readonly subgopLength?: string;

  /**
   * @schema H264Settings#Syntax
   */
  readonly syntax?: string;

  /**
   * @schema H264Settings#TemporalAq
   */
  readonly temporalAq?: string;

  /**
   * @schema H264Settings#TimecodeInsertion
   */
  readonly timecodeInsertion?: string;

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
   * @schema H265Settings#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema H265Settings#AlternativeTransferFunction
   */
  readonly alternativeTransferFunction?: string;

  /**
   * @schema H265Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema H265Settings#BufSize
   */
  readonly bufSize?: number;

  /**
   * @schema H265Settings#ColorMetadata
   */
  readonly colorMetadata?: string;

  /**
   * @schema H265Settings#ColorSpaceSettings
   */
  readonly colorSpaceSettings?: H265ColorSpaceSettings;

  /**
   * @schema H265Settings#FilterSettings
   */
  readonly filterSettings?: H265FilterSettings;

  /**
   * @schema H265Settings#FixedAfd
   */
  readonly fixedAfd?: string;

  /**
   * @schema H265Settings#FlickerAq
   */
  readonly flickerAq?: string;

  /**
   * @schema H265Settings#FramerateDenominator
   */
  readonly framerateDenominator: number;

  /**
   * @schema H265Settings#FramerateNumerator
   */
  readonly framerateNumerator: number;

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
   * @schema H265Settings#Level
   */
  readonly level?: string;

  /**
   * @schema H265Settings#LookAheadRateControl
   */
  readonly lookAheadRateControl?: string;

  /**
   * @schema H265Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema H265Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema H265Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema H265Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema H265Settings#Profile
   */
  readonly profile?: string;

  /**
   * @schema H265Settings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema H265Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema H265Settings#ScanType
   */
  readonly scanType?: string;

  /**
   * @schema H265Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema H265Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema H265Settings#Tier
   */
  readonly tier?: string;

  /**
   * @schema H265Settings#TimecodeInsertion
   */
  readonly timecodeInsertion?: string;

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
   * @schema Mpeg2Settings#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema Mpeg2Settings#ColorMetadata
   */
  readonly colorMetadata?: string;

  /**
   * @schema Mpeg2Settings#ColorSpace
   */
  readonly colorSpace?: string;

  /**
   * @schema Mpeg2Settings#DisplayAspectRatio
   */
  readonly displayAspectRatio?: string;

  /**
   * @schema Mpeg2Settings#FilterSettings
   */
  readonly filterSettings?: Mpeg2FilterSettings;

  /**
   * @schema Mpeg2Settings#FixedAfd
   */
  readonly fixedAfd?: string;

  /**
   * @schema Mpeg2Settings#FramerateDenominator
   */
  readonly framerateDenominator: number;

  /**
   * @schema Mpeg2Settings#FramerateNumerator
   */
  readonly framerateNumerator: number;

  /**
   * @schema Mpeg2Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema Mpeg2Settings#GopNumBFrames
   */
  readonly gopNumBFrames?: number;

  /**
   * @schema Mpeg2Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema Mpeg2Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema Mpeg2Settings#ScanType
   */
  readonly scanType?: string;

  /**
   * @schema Mpeg2Settings#SubgopLength
   */
  readonly subgopLength?: string;

  /**
   * @schema Mpeg2Settings#TimecodeInsertion
   */
  readonly timecodeInsertion?: string;

}

/**
 * @schema FailoverConditionSettings
 */
export interface FailoverConditionSettings {
  /**
   * @schema FailoverConditionSettings#InputLossSettings
   */
  readonly inputLossSettings?: InputLossFailoverSettings;

}

/**
 * @schema AudioSelectorSettings
 */
export interface AudioSelectorSettings {
  /**
   * @schema AudioSelectorSettings#AudioLanguageSelection
   */
  readonly audioLanguageSelection?: AudioLanguageSelection;

  /**
   * @schema AudioSelectorSettings#AudioPidSelection
   */
  readonly audioPidSelection?: AudioPidSelection;

  /**
   * @schema AudioSelectorSettings#AudioTrackSelection
   */
  readonly audioTrackSelection?: AudioTrackSelection;

}

/**
 * @schema CaptionSelectorSettings
 */
export interface CaptionSelectorSettings {
  /**
   * @schema CaptionSelectorSettings#AncillarySourceSettings
   */
  readonly ancillarySourceSettings?: AncillarySourceSettings;

  /**
   * @schema CaptionSelectorSettings#AribSourceSettings
   */
  readonly aribSourceSettings?: AribSourceSettings;

  /**
   * @schema CaptionSelectorSettings#DvbSubSourceSettings
   */
  readonly dvbSubSourceSettings?: DvbSubSourceSettings;

  /**
   * @schema CaptionSelectorSettings#EmbeddedSourceSettings
   */
  readonly embeddedSourceSettings?: EmbeddedSourceSettings;

  /**
   * @schema CaptionSelectorSettings#Scte20SourceSettings
   */
  readonly scte20SourceSettings?: Scte20SourceSettings;

  /**
   * @schema CaptionSelectorSettings#Scte27SourceSettings
   */
  readonly scte27SourceSettings?: Scte27SourceSettings;

  /**
   * @schema CaptionSelectorSettings#TeletextSourceSettings
   */
  readonly teletextSourceSettings?: TeletextSourceSettings;

}

/**
 * @schema HlsInputSettings
 */
export interface HlsInputSettings {
  /**
   * @schema HlsInputSettings#Bandwidth
   */
  readonly bandwidth?: number;

  /**
   * @schema HlsInputSettings#BufferSegments
   */
  readonly bufferSegments?: number;

  /**
   * @schema HlsInputSettings#Retries
   */
  readonly retries?: number;

  /**
   * @schema HlsInputSettings#RetryInterval
   */
  readonly retryInterval?: number;

}

/**
 * @schema VideoSelectorSettings
 */
export interface VideoSelectorSettings {
  /**
   * @schema VideoSelectorSettings#VideoSelectorPid
   */
  readonly videoSelectorPid?: VideoSelectorPid;

  /**
   * @schema VideoSelectorSettings#VideoSelectorProgramId
   */
  readonly videoSelectorProgramId?: VideoSelectorProgramId;

}

/**
 * @schema InputClippingSettings
 */
export interface InputClippingSettings {
  /**
   * @schema InputClippingSettings#InputTimecodeSource
   */
  readonly inputTimecodeSource: string;

  /**
   * @schema InputClippingSettings#StartTimecode
   */
  readonly startTimecode?: StartTimecode;

  /**
   * @schema InputClippingSettings#StopTimecode
   */
  readonly stopTimecode?: StopTimecode;

}

/**
 * @schema PipelinePauseStateSettings
 */
export interface PipelinePauseStateSettings {
  /**
   * @schema PipelinePauseStateSettings#PipelineId
   */
  readonly pipelineId: string;

}

/**
 * @schema Scte35Descriptor
 */
export interface Scte35Descriptor {
  /**
   * @schema Scte35Descriptor#Scte35DescriptorSettings
   */
  readonly scte35DescriptorSettings: Scte35DescriptorSettings;

}

/**
 * @schema InputChannelLevel
 */
export interface InputChannelLevel {
  /**
   * @schema InputChannelLevel#Gain
   */
  readonly gain: number;

  /**
   * @schema InputChannelLevel#InputChannel
   */
  readonly inputChannel: number;

}

/**
 * @schema OutputLocationRef
 */
export interface OutputLocationRef {
  /**
   * @schema OutputLocationRef#DestinationRefId
   */
  readonly destinationRefId?: string;

}

/**
 * @schema CaptionLanguageMapping
 */
export interface CaptionLanguageMapping {
  /**
   * @schema CaptionLanguageMapping#CaptionChannel
   */
  readonly captionChannel: number;

  /**
   * @schema CaptionLanguageMapping#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema CaptionLanguageMapping#LanguageDescription
   */
  readonly languageDescription: string;

}

/**
 * @schema HlsCdnSettings
 */
export interface HlsCdnSettings {
  /**
   * @schema HlsCdnSettings#HlsAkamaiSettings
   */
  readonly hlsAkamaiSettings?: HlsAkamaiSettings;

  /**
   * @schema HlsCdnSettings#HlsBasicPutSettings
   */
  readonly hlsBasicPutSettings?: HlsBasicPutSettings;

  /**
   * @schema HlsCdnSettings#HlsMediaStoreSettings
   */
  readonly hlsMediaStoreSettings?: HlsMediaStoreSettings;

  /**
   * @schema HlsCdnSettings#HlsWebdavSettings
   */
  readonly hlsWebdavSettings?: HlsWebdavSettings;

}

/**
 * @schema KeyProviderSettings
 */
export interface KeyProviderSettings {
  /**
   * @schema KeyProviderSettings#StaticKeySettings
   */
  readonly staticKeySettings?: StaticKeySettings;

}

/**
 * @schema ArchiveOutputSettings
 */
export interface ArchiveOutputSettings {
  /**
   * @schema ArchiveOutputSettings#ContainerSettings
   */
  readonly containerSettings: ArchiveContainerSettings;

  /**
   * @schema ArchiveOutputSettings#Extension
   */
  readonly extension?: string;

  /**
   * @schema ArchiveOutputSettings#NameModifier
   */
  readonly nameModifier?: string;

}

/**
 * @schema FrameCaptureOutputSettings
 */
export interface FrameCaptureOutputSettings {
  /**
   * @schema FrameCaptureOutputSettings#NameModifier
   */
  readonly nameModifier?: string;

}

/**
 * @schema HlsOutputSettings
 */
export interface HlsOutputSettings {
  /**
   * @schema HlsOutputSettings#H265PackagingType
   */
  readonly h265PackagingType?: string;

  /**
   * @schema HlsOutputSettings#HlsSettings
   */
  readonly hlsSettings: HlsSettings;

  /**
   * @schema HlsOutputSettings#NameModifier
   */
  readonly nameModifier?: string;

  /**
   * @schema HlsOutputSettings#SegmentModifier
   */
  readonly segmentModifier?: string;

}

/**
 * @schema MediaPackageOutputSettings
 */
export interface MediaPackageOutputSettings {
}

/**
 * @schema MsSmoothOutputSettings
 */
export interface MsSmoothOutputSettings {
  /**
   * @schema MsSmoothOutputSettings#H265PackagingType
   */
  readonly h265PackagingType?: string;

  /**
   * @schema MsSmoothOutputSettings#NameModifier
   */
  readonly nameModifier?: string;

}

/**
 * @schema MultiplexOutputSettings
 */
export interface MultiplexOutputSettings {
  /**
   * @schema MultiplexOutputSettings#Destination
   */
  readonly destination: OutputLocationRef;

}

/**
 * @schema RtmpOutputSettings
 */
export interface RtmpOutputSettings {
  /**
   * @schema RtmpOutputSettings#CertificateMode
   */
  readonly certificateMode?: string;

  /**
   * @schema RtmpOutputSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema RtmpOutputSettings#Destination
   */
  readonly destination: OutputLocationRef;

  /**
   * @schema RtmpOutputSettings#NumRetries
   */
  readonly numRetries?: number;

}

/**
 * @schema UdpOutputSettings
 */
export interface UdpOutputSettings {
  /**
   * @schema UdpOutputSettings#BufferMsec
   */
  readonly bufferMsec?: number;

  /**
   * @schema UdpOutputSettings#ContainerSettings
   */
  readonly containerSettings: UdpContainerSettings;

  /**
   * @schema UdpOutputSettings#Destination
   */
  readonly destination: OutputLocationRef;

  /**
   * @schema UdpOutputSettings#FecOutputSettings
   */
  readonly fecOutputSettings?: FecOutputSettings;

}

/**
 * @schema H264ColorSpaceSettings
 */
export interface H264ColorSpaceSettings {
  /**
   * @schema H264ColorSpaceSettings#ColorSpacePassthroughSettings
   */
  readonly colorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

  /**
   * @schema H264ColorSpaceSettings#Rec601Settings
   */
  readonly rec601Settings?: Rec601Settings;

  /**
   * @schema H264ColorSpaceSettings#Rec709Settings
   */
  readonly rec709Settings?: Rec709Settings;

}

/**
 * @schema H264FilterSettings
 */
export interface H264FilterSettings {
  /**
   * @schema H264FilterSettings#TemporalFilterSettings
   */
  readonly temporalFilterSettings?: TemporalFilterSettings;

}

/**
 * @schema H265ColorSpaceSettings
 */
export interface H265ColorSpaceSettings {
  /**
   * @schema H265ColorSpaceSettings#ColorSpacePassthroughSettings
   */
  readonly colorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

  /**
   * @schema H265ColorSpaceSettings#Hdr10Settings
   */
  readonly hdr10Settings?: Hdr10Settings;

  /**
   * @schema H265ColorSpaceSettings#Rec601Settings
   */
  readonly rec601Settings?: Rec601Settings;

  /**
   * @schema H265ColorSpaceSettings#Rec709Settings
   */
  readonly rec709Settings?: Rec709Settings;

}

/**
 * @schema H265FilterSettings
 */
export interface H265FilterSettings {
  /**
   * @schema H265FilterSettings#TemporalFilterSettings
   */
  readonly temporalFilterSettings?: TemporalFilterSettings;

}

/**
 * @schema Mpeg2FilterSettings
 */
export interface Mpeg2FilterSettings {
  /**
   * @schema Mpeg2FilterSettings#TemporalFilterSettings
   */
  readonly temporalFilterSettings?: TemporalFilterSettings;

}

/**
 * @schema InputLossFailoverSettings
 */
export interface InputLossFailoverSettings {
  /**
   * @schema InputLossFailoverSettings#InputLossThresholdMsec
   */
  readonly inputLossThresholdMsec?: number;

}

/**
 * @schema AudioLanguageSelection
 */
export interface AudioLanguageSelection {
  /**
   * @schema AudioLanguageSelection#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema AudioLanguageSelection#LanguageSelectionPolicy
   */
  readonly languageSelectionPolicy?: string;

}

/**
 * @schema AudioPidSelection
 */
export interface AudioPidSelection {
  /**
   * @schema AudioPidSelection#Pid
   */
  readonly pid: number;

}

/**
 * @schema AudioTrackSelection
 */
export interface AudioTrackSelection {
  /**
   * @schema AudioTrackSelection#Tracks
   */
  readonly tracks: AudioTrack[];

}

/**
 * @schema AncillarySourceSettings
 */
export interface AncillarySourceSettings {
  /**
   * @schema AncillarySourceSettings#SourceAncillaryChannelNumber
   */
  readonly sourceAncillaryChannelNumber?: number;

}

/**
 * @schema AribSourceSettings
 */
export interface AribSourceSettings {
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
   * @schema EmbeddedSourceSettings#Scte20Detection
   */
  readonly scte20Detection?: string;

  /**
   * @schema EmbeddedSourceSettings#Source608ChannelNumber
   */
  readonly source608ChannelNumber?: number;

  /**
   * @schema EmbeddedSourceSettings#Source608TrackNumber
   */
  readonly source608TrackNumber?: number;

}

/**
 * @schema Scte20SourceSettings
 */
export interface Scte20SourceSettings {
  /**
   * @schema Scte20SourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema Scte20SourceSettings#Source608ChannelNumber
   */
  readonly source608ChannelNumber?: number;

}

/**
 * @schema Scte27SourceSettings
 */
export interface Scte27SourceSettings {
  /**
   * @schema Scte27SourceSettings#Pid
   */
  readonly pid?: number;

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
 * @schema VideoSelectorPid
 */
export interface VideoSelectorPid {
  /**
   * @schema VideoSelectorPid#Pid
   */
  readonly pid?: number;

}

/**
 * @schema VideoSelectorProgramId
 */
export interface VideoSelectorProgramId {
  /**
   * @schema VideoSelectorProgramId#ProgramId
   */
  readonly programId?: number;

}

/**
 * @schema StartTimecode
 */
export interface StartTimecode {
  /**
   * @schema StartTimecode#Timecode
   */
  readonly timecode?: string;

}

/**
 * @schema StopTimecode
 */
export interface StopTimecode {
  /**
   * @schema StopTimecode#LastFrameClippingBehavior
   */
  readonly lastFrameClippingBehavior?: string;

  /**
   * @schema StopTimecode#Timecode
   */
  readonly timecode?: string;

}

/**
 * @schema Scte35DescriptorSettings
 */
export interface Scte35DescriptorSettings {
  /**
   * @schema Scte35DescriptorSettings#SegmentationDescriptorScte35DescriptorSettings
   */
  readonly segmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptor;

}

/**
 * @schema HlsAkamaiSettings
 */
export interface HlsAkamaiSettings {
  /**
   * @schema HlsAkamaiSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema HlsAkamaiSettings#FilecacheDuration
   */
  readonly filecacheDuration?: number;

  /**
   * @schema HlsAkamaiSettings#HttpTransferMode
   */
  readonly httpTransferMode?: string;

  /**
   * @schema HlsAkamaiSettings#NumRetries
   */
  readonly numRetries?: number;

  /**
   * @schema HlsAkamaiSettings#RestartDelay
   */
  readonly restartDelay?: number;

  /**
   * @schema HlsAkamaiSettings#Salt
   */
  readonly salt?: string;

  /**
   * @schema HlsAkamaiSettings#Token
   */
  readonly token?: string;

}

/**
 * @schema HlsBasicPutSettings
 */
export interface HlsBasicPutSettings {
  /**
   * @schema HlsBasicPutSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema HlsBasicPutSettings#FilecacheDuration
   */
  readonly filecacheDuration?: number;

  /**
   * @schema HlsBasicPutSettings#NumRetries
   */
  readonly numRetries?: number;

  /**
   * @schema HlsBasicPutSettings#RestartDelay
   */
  readonly restartDelay?: number;

}

/**
 * @schema HlsMediaStoreSettings
 */
export interface HlsMediaStoreSettings {
  /**
   * @schema HlsMediaStoreSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema HlsMediaStoreSettings#FilecacheDuration
   */
  readonly filecacheDuration?: number;

  /**
   * @schema HlsMediaStoreSettings#MediaStoreStorageClass
   */
  readonly mediaStoreStorageClass?: string;

  /**
   * @schema HlsMediaStoreSettings#NumRetries
   */
  readonly numRetries?: number;

  /**
   * @schema HlsMediaStoreSettings#RestartDelay
   */
  readonly restartDelay?: number;

}

/**
 * @schema HlsWebdavSettings
 */
export interface HlsWebdavSettings {
  /**
   * @schema HlsWebdavSettings#ConnectionRetryInterval
   */
  readonly connectionRetryInterval?: number;

  /**
   * @schema HlsWebdavSettings#FilecacheDuration
   */
  readonly filecacheDuration?: number;

  /**
   * @schema HlsWebdavSettings#HttpTransferMode
   */
  readonly httpTransferMode?: string;

  /**
   * @schema HlsWebdavSettings#NumRetries
   */
  readonly numRetries?: number;

  /**
   * @schema HlsWebdavSettings#RestartDelay
   */
  readonly restartDelay?: number;

}

/**
 * @schema StaticKeySettings
 */
export interface StaticKeySettings {
  /**
   * @schema StaticKeySettings#KeyProviderServer
   */
  readonly keyProviderServer?: InputLocation;

  /**
   * @schema StaticKeySettings#StaticKeyValue
   */
  readonly staticKeyValue: string;

}

/**
 * @schema ArchiveContainerSettings
 */
export interface ArchiveContainerSettings {
  /**
   * @schema ArchiveContainerSettings#M2tsSettings
   */
  readonly m2TsSettings?: M2tsSettings;

  /**
   * @schema ArchiveContainerSettings#RawSettings
   */
  readonly rawSettings?: RawSettings;

}

/**
 * @schema HlsSettings
 */
export interface HlsSettings {
  /**
   * @schema HlsSettings#AudioOnlyHlsSettings
   */
  readonly audioOnlyHlsSettings?: AudioOnlyHlsSettings;

  /**
   * @schema HlsSettings#Fmp4HlsSettings
   */
  readonly fmp4HlsSettings?: Fmp4HlsSettings;

  /**
   * @schema HlsSettings#StandardHlsSettings
   */
  readonly standardHlsSettings?: StandardHlsSettings;

}

/**
 * @schema UdpContainerSettings
 */
export interface UdpContainerSettings {
  /**
   * @schema UdpContainerSettings#M2tsSettings
   */
  readonly m2TsSettings?: M2tsSettings;

}

/**
 * @schema FecOutputSettings
 */
export interface FecOutputSettings {
  /**
   * @schema FecOutputSettings#ColumnDepth
   */
  readonly columnDepth?: number;

  /**
   * @schema FecOutputSettings#IncludeFec
   */
  readonly includeFec?: string;

  /**
   * @schema FecOutputSettings#RowLength
   */
  readonly rowLength?: number;

}

/**
 * @schema ColorSpacePassthroughSettings
 */
export interface ColorSpacePassthroughSettings {
}

/**
 * @schema Rec601Settings
 */
export interface Rec601Settings {
}

/**
 * @schema Rec709Settings
 */
export interface Rec709Settings {
}

/**
 * @schema TemporalFilterSettings
 */
export interface TemporalFilterSettings {
  /**
   * @schema TemporalFilterSettings#PostFilterSharpening
   */
  readonly postFilterSharpening?: string;

  /**
   * @schema TemporalFilterSettings#Strength
   */
  readonly strength?: string;

}

/**
 * @schema Hdr10Settings
 */
export interface Hdr10Settings {
  /**
   * @schema Hdr10Settings#MaxCll
   */
  readonly maxCll?: number;

  /**
   * @schema Hdr10Settings#MaxFall
   */
  readonly maxFall?: number;

}

/**
 * @schema AudioTrack
 */
export interface AudioTrack {
  /**
   * @schema AudioTrack#Track
   */
  readonly track: number;

}

/**
 * @schema Scte35SegmentationDescriptor
 */
export interface Scte35SegmentationDescriptor {
  /**
   * @schema Scte35SegmentationDescriptor#DeliveryRestrictions
   */
  readonly deliveryRestrictions?: Scte35DeliveryRestrictions;

  /**
   * @schema Scte35SegmentationDescriptor#SegmentNum
   */
  readonly segmentNum?: number;

  /**
   * @schema Scte35SegmentationDescriptor#SegmentationCancelIndicator
   */
  readonly segmentationCancelIndicator: string;

  /**
   * @schema Scte35SegmentationDescriptor#SegmentationDuration
   */
  readonly segmentationDuration?: number;

  /**
   * @schema Scte35SegmentationDescriptor#SegmentationEventId
   */
  readonly segmentationEventId: number;

  /**
   * @schema Scte35SegmentationDescriptor#SegmentationTypeId
   */
  readonly segmentationTypeId?: number;

  /**
   * @schema Scte35SegmentationDescriptor#SegmentationUpid
   */
  readonly segmentationUpid?: string;

  /**
   * @schema Scte35SegmentationDescriptor#SegmentationUpidType
   */
  readonly segmentationUpidType?: number;

  /**
   * @schema Scte35SegmentationDescriptor#SegmentsExpected
   */
  readonly segmentsExpected?: number;

  /**
   * @schema Scte35SegmentationDescriptor#SubSegmentNum
   */
  readonly subSegmentNum?: number;

  /**
   * @schema Scte35SegmentationDescriptor#SubSegmentsExpected
   */
  readonly subSegmentsExpected?: number;

}

/**
 * @schema M2tsSettings
 */
export interface M2tsSettings {
  /**
   * @schema M2tsSettings#AbsentInputAudioBehavior
   */
  readonly absentInputAudioBehavior?: string;

  /**
   * @schema M2tsSettings#Arib
   */
  readonly arib?: string;

  /**
   * @schema M2tsSettings#AribCaptionsPid
   */
  readonly aribCaptionsPid?: string;

  /**
   * @schema M2tsSettings#AribCaptionsPidControl
   */
  readonly aribCaptionsPidControl?: string;

  /**
   * @schema M2tsSettings#AudioBufferModel
   */
  readonly audioBufferModel?: string;

  /**
   * @schema M2tsSettings#AudioFramesPerPes
   */
  readonly audioFramesPerPes?: number;

  /**
   * @schema M2tsSettings#AudioPids
   */
  readonly audioPids?: string;

  /**
   * @schema M2tsSettings#AudioStreamType
   */
  readonly audioStreamType?: string;

  /**
   * @schema M2tsSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema M2tsSettings#BufferModel
   */
  readonly bufferModel?: string;

  /**
   * @schema M2tsSettings#CcDescriptor
   */
  readonly ccDescriptor?: string;

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
  readonly dvbSubPids?: string;

  /**
   * @schema M2tsSettings#DvbTdtSettings
   */
  readonly dvbTdtSettings?: DvbTdtSettings;

  /**
   * @schema M2tsSettings#DvbTeletextPid
   */
  readonly dvbTeletextPid?: string;

  /**
   * @schema M2tsSettings#Ebif
   */
  readonly ebif?: string;

  /**
   * @schema M2tsSettings#EbpAudioInterval
   */
  readonly ebpAudioInterval?: string;

  /**
   * @schema M2tsSettings#EbpLookaheadMs
   */
  readonly ebpLookaheadMs?: number;

  /**
   * @schema M2tsSettings#EbpPlacement
   */
  readonly ebpPlacement?: string;

  /**
   * @schema M2tsSettings#EcmPid
   */
  readonly ecmPid?: string;

  /**
   * @schema M2tsSettings#EsRateInPes
   */
  readonly esRateInPes?: string;

  /**
   * @schema M2tsSettings#EtvPlatformPid
   */
  readonly etvPlatformPid?: string;

  /**
   * @schema M2tsSettings#EtvSignalPid
   */
  readonly etvSignalPid?: string;

  /**
   * @schema M2tsSettings#FragmentTime
   */
  readonly fragmentTime?: number;

  /**
   * @schema M2tsSettings#Klv
   */
  readonly klv?: string;

  /**
   * @schema M2tsSettings#KlvDataPids
   */
  readonly klvDataPids?: string;

  /**
   * @schema M2tsSettings#NielsenId3Behavior
   */
  readonly nielsenId3Behavior?: string;

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
   * @schema M2tsSettings#PcrPeriod
   */
  readonly pcrPeriod?: number;

  /**
   * @schema M2tsSettings#PcrPid
   */
  readonly pcrPid?: string;

  /**
   * @schema M2tsSettings#PmtInterval
   */
  readonly pmtInterval?: number;

  /**
   * @schema M2tsSettings#PmtPid
   */
  readonly pmtPid?: string;

  /**
   * @schema M2tsSettings#ProgramNum
   */
  readonly programNum?: number;

  /**
   * @schema M2tsSettings#RateMode
   */
  readonly rateMode?: string;

  /**
   * @schema M2tsSettings#Scte27Pids
   */
  readonly scte27Pids?: string;

  /**
   * @schema M2tsSettings#Scte35Control
   */
  readonly scte35Control?: string;

  /**
   * @schema M2tsSettings#Scte35Pid
   */
  readonly scte35Pid?: string;

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
   * @schema M2tsSettings#TimedMetadataBehavior
   */
  readonly timedMetadataBehavior?: string;

  /**
   * @schema M2tsSettings#TimedMetadataPid
   */
  readonly timedMetadataPid?: string;

  /**
   * @schema M2tsSettings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema M2tsSettings#VideoPid
   */
  readonly videoPid?: string;

}

/**
 * @schema RawSettings
 */
export interface RawSettings {
}

/**
 * @schema AudioOnlyHlsSettings
 */
export interface AudioOnlyHlsSettings {
  /**
   * @schema AudioOnlyHlsSettings#AudioGroupId
   */
  readonly audioGroupId?: string;

  /**
   * @schema AudioOnlyHlsSettings#AudioOnlyImage
   */
  readonly audioOnlyImage?: InputLocation;

  /**
   * @schema AudioOnlyHlsSettings#AudioTrackType
   */
  readonly audioTrackType?: string;

  /**
   * @schema AudioOnlyHlsSettings#SegmentType
   */
  readonly segmentType?: string;

}

/**
 * @schema Fmp4HlsSettings
 */
export interface Fmp4HlsSettings {
  /**
   * @schema Fmp4HlsSettings#AudioRenditionSets
   */
  readonly audioRenditionSets?: string;

  /**
   * @schema Fmp4HlsSettings#NielsenId3Behavior
   */
  readonly nielsenId3Behavior?: string;

  /**
   * @schema Fmp4HlsSettings#TimedMetadataBehavior
   */
  readonly timedMetadataBehavior?: string;

}

/**
 * @schema StandardHlsSettings
 */
export interface StandardHlsSettings {
  /**
   * @schema StandardHlsSettings#AudioRenditionSets
   */
  readonly audioRenditionSets?: string;

  /**
   * @schema StandardHlsSettings#M3u8Settings
   */
  readonly m3U8Settings: M3u8Settings;

}

/**
 * @schema Scte35DeliveryRestrictions
 */
export interface Scte35DeliveryRestrictions {
  /**
   * @schema Scte35DeliveryRestrictions#ArchiveAllowedFlag
   */
  readonly archiveAllowedFlag: string;

  /**
   * @schema Scte35DeliveryRestrictions#DeviceRestrictions
   */
  readonly deviceRestrictions: string;

  /**
   * @schema Scte35DeliveryRestrictions#NoRegionalBlackoutFlag
   */
  readonly noRegionalBlackoutFlag: string;

  /**
   * @schema Scte35DeliveryRestrictions#WebDeliveryAllowedFlag
   */
  readonly webDeliveryAllowedFlag: string;

}

/**
 * @schema DvbNitSettings
 */
export interface DvbNitSettings {
  /**
   * @schema DvbNitSettings#NetworkId
   */
  readonly networkId: number;

  /**
   * @schema DvbNitSettings#NetworkName
   */
  readonly networkName: string;

  /**
   * @schema DvbNitSettings#RepInterval
   */
  readonly repInterval?: number;

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
   * @schema DvbSdtSettings#RepInterval
   */
  readonly repInterval?: number;

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
   * @schema DvbTdtSettings#RepInterval
   */
  readonly repInterval?: number;

}

/**
 * @schema M3u8Settings
 */
export interface M3u8Settings {
  /**
   * @schema M3u8Settings#AudioFramesPerPes
   */
  readonly audioFramesPerPes?: number;

  /**
   * @schema M3u8Settings#AudioPids
   */
  readonly audioPids?: string;

  /**
   * @schema M3u8Settings#EcmPid
   */
  readonly ecmPid?: string;

  /**
   * @schema M3u8Settings#NielsenId3Behavior
   */
  readonly nielsenId3Behavior?: string;

  /**
   * @schema M3u8Settings#PatInterval
   */
  readonly patInterval?: number;

  /**
   * @schema M3u8Settings#PcrControl
   */
  readonly pcrControl?: string;

  /**
   * @schema M3u8Settings#PcrPeriod
   */
  readonly pcrPeriod?: number;

  /**
   * @schema M3u8Settings#PcrPid
   */
  readonly pcrPid?: string;

  /**
   * @schema M3u8Settings#PmtInterval
   */
  readonly pmtInterval?: number;

  /**
   * @schema M3u8Settings#PmtPid
   */
  readonly pmtPid?: string;

  /**
   * @schema M3u8Settings#ProgramNum
   */
  readonly programNum?: number;

  /**
   * @schema M3u8Settings#Scte35Behavior
   */
  readonly scte35Behavior?: string;

  /**
   * @schema M3u8Settings#Scte35Pid
   */
  readonly scte35Pid?: string;

  /**
   * @schema M3u8Settings#TimedMetadataBehavior
   */
  readonly timedMetadataBehavior?: string;

  /**
   * @schema M3u8Settings#TimedMetadataPid
   */
  readonly timedMetadataPid?: string;

  /**
   * @schema M3u8Settings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema M3u8Settings#VideoPid
   */
  readonly videoPid?: string;

}
