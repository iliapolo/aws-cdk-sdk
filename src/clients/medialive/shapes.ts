/**
 * @schema MediaLiveAcceptInputDeviceTransferRequest
 */
export interface MediaLiveAcceptInputDeviceTransferRequest {
  /**
   * @schema MediaLiveAcceptInputDeviceTransferRequest#InputDeviceId
   */
  readonly inputDeviceId?: string;

}

/**
 * Converts an object of type 'MediaLiveAcceptInputDeviceTransferRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAcceptInputDeviceTransferRequest(obj: MediaLiveAcceptInputDeviceTransferRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDeviceId': obj.inputDeviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAcceptInputDeviceTransferResponse
 */
export interface MediaLiveAcceptInputDeviceTransferResponse {
}

/**
 * Converts an object of type 'MediaLiveAcceptInputDeviceTransferResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAcceptInputDeviceTransferResponse(obj: MediaLiveAcceptInputDeviceTransferResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBatchDeleteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchDeleteRequest(obj: MediaLiveBatchDeleteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelIds': obj.channelIds?.map(y => y),
    'InputIds': obj.inputIds?.map(y => y),
    'InputSecurityGroupIds': obj.inputSecurityGroupIds?.map(y => y),
    'MultiplexIds': obj.multiplexIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBatchDeleteResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchDeleteResponse(obj: MediaLiveBatchDeleteResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Failed': obj.failed?.map(y => toJson_MediaLiveBatchFailedResultModel(y)),
    'Successful': obj.successful?.map(y => toJson_MediaLiveBatchSuccessfulResultModel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBatchStartRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchStartRequest(obj: MediaLiveBatchStartRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelIds': obj.channelIds?.map(y => y),
    'MultiplexIds': obj.multiplexIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBatchStartResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchStartResponse(obj: MediaLiveBatchStartResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Failed': obj.failed?.map(y => toJson_MediaLiveBatchFailedResultModel(y)),
    'Successful': obj.successful?.map(y => toJson_MediaLiveBatchSuccessfulResultModel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBatchStopRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchStopRequest(obj: MediaLiveBatchStopRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelIds': obj.channelIds?.map(y => y),
    'MultiplexIds': obj.multiplexIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBatchStopResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchStopResponse(obj: MediaLiveBatchStopResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Failed': obj.failed?.map(y => toJson_MediaLiveBatchFailedResultModel(y)),
    'Successful': obj.successful?.map(y => toJson_MediaLiveBatchSuccessfulResultModel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveBatchUpdateScheduleRequest
 */
export interface MediaLiveBatchUpdateScheduleRequest {
  /**
   * @schema MediaLiveBatchUpdateScheduleRequest#ChannelId
   */
  readonly channelId?: string;

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
 * Converts an object of type 'MediaLiveBatchUpdateScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchUpdateScheduleRequest(obj: MediaLiveBatchUpdateScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
    'Creates': toJson_MediaLiveBatchScheduleActionCreateRequest(obj.creates),
    'Deletes': toJson_MediaLiveBatchScheduleActionDeleteRequest(obj.deletes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBatchUpdateScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchUpdateScheduleResponse(obj: MediaLiveBatchUpdateScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Creates': toJson_MediaLiveBatchScheduleActionCreateResult(obj.creates),
    'Deletes': toJson_MediaLiveBatchScheduleActionDeleteResult(obj.deletes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveCancelInputDeviceTransferRequest
 */
export interface MediaLiveCancelInputDeviceTransferRequest {
  /**
   * @schema MediaLiveCancelInputDeviceTransferRequest#InputDeviceId
   */
  readonly inputDeviceId?: string;

}

/**
 * Converts an object of type 'MediaLiveCancelInputDeviceTransferRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCancelInputDeviceTransferRequest(obj: MediaLiveCancelInputDeviceTransferRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDeviceId': obj.inputDeviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveCancelInputDeviceTransferResponse
 */
export interface MediaLiveCancelInputDeviceTransferResponse {
}

/**
 * Converts an object of type 'MediaLiveCancelInputDeviceTransferResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCancelInputDeviceTransferResponse(obj: MediaLiveCancelInputDeviceTransferResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveCreateChannelRequest#Vpc
   */
  readonly vpc?: MediaLiveVpcOutputSettings;

}

/**
 * Converts an object of type 'MediaLiveCreateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateChannelRequest(obj: MediaLiveCreateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CdiInputSpecification': toJson_MediaLiveCdiInputSpecification(obj.cdiInputSpecification),
    'ChannelClass': obj.channelClass,
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveOutputDestination(y)),
    'EncoderSettings': toJson_MediaLiveEncoderSettings(obj.encoderSettings),
    'InputAttachments': obj.inputAttachments?.map(y => toJson_MediaLiveInputAttachment(y)),
    'InputSpecification': toJson_MediaLiveInputSpecification(obj.inputSpecification),
    'LogLevel': obj.logLevel,
    'Name': obj.name,
    'RequestId': obj.requestId,
    'Reserved': obj.reserved,
    'RoleArn': obj.roleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Vpc': toJson_MediaLiveVpcOutputSettings(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveCreateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateChannelResponse(obj: MediaLiveCreateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channel': toJson_MediaLiveChannel(obj.channel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveCreateInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateInputRequest(obj: MediaLiveCreateInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveInputDestinationRequest(y)),
    'InputDevices': obj.inputDevices?.map(y => toJson_MediaLiveInputDeviceSettings(y)),
    'InputSecurityGroups': obj.inputSecurityGroups?.map(y => y),
    'MediaConnectFlows': obj.mediaConnectFlows?.map(y => toJson_MediaLiveMediaConnectFlowRequest(y)),
    'Name': obj.name,
    'RequestId': obj.requestId,
    'RoleArn': obj.roleArn,
    'Sources': obj.sources?.map(y => toJson_MediaLiveInputSourceRequest(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Type': obj.type,
    'Vpc': toJson_MediaLiveInputVpcRequest(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveCreateInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateInputResponse(obj: MediaLiveCreateInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Input': toJson_MediaLiveInput(obj.input),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveCreateInputSecurityGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateInputSecurityGroupRequest(obj: MediaLiveCreateInputSecurityGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'WhitelistRules': obj.whitelistRules?.map(y => toJson_MediaLiveInputWhitelistRuleCidr(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveCreateInputSecurityGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateInputSecurityGroupResponse(obj: MediaLiveCreateInputSecurityGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroup': toJson_MediaLiveInputSecurityGroup(obj.securityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveCreateMultiplexRequest
 */
export interface MediaLiveCreateMultiplexRequest {
  /**
   * @schema MediaLiveCreateMultiplexRequest#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema MediaLiveCreateMultiplexRequest#MultiplexSettings
   */
  readonly multiplexSettings?: MediaLiveMultiplexSettings;

  /**
   * @schema MediaLiveCreateMultiplexRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveCreateMultiplexRequest#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema MediaLiveCreateMultiplexRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaLiveCreateMultiplexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateMultiplexRequest(obj: MediaLiveCreateMultiplexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'MultiplexSettings': toJson_MediaLiveMultiplexSettings(obj.multiplexSettings),
    'Name': obj.name,
    'RequestId': obj.requestId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveCreateMultiplexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateMultiplexResponse(obj: MediaLiveCreateMultiplexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Multiplex': toJson_MediaLiveMultiplex(obj.multiplex),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveCreateMultiplexProgramRequest
 */
export interface MediaLiveCreateMultiplexProgramRequest {
  /**
   * @schema MediaLiveCreateMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId?: string;

  /**
   * @schema MediaLiveCreateMultiplexProgramRequest#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings?: MediaLiveMultiplexProgramSettings;

  /**
   * @schema MediaLiveCreateMultiplexProgramRequest#ProgramName
   */
  readonly programName?: string;

  /**
   * @schema MediaLiveCreateMultiplexProgramRequest#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'MediaLiveCreateMultiplexProgramRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateMultiplexProgramRequest(obj: MediaLiveCreateMultiplexProgramRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexId': obj.multiplexId,
    'MultiplexProgramSettings': toJson_MediaLiveMultiplexProgramSettings(obj.multiplexProgramSettings),
    'ProgramName': obj.programName,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveCreateMultiplexProgramResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateMultiplexProgramResponse(obj: MediaLiveCreateMultiplexProgramResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexProgram': toJson_MediaLiveMultiplexProgram(obj.multiplexProgram),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveCreatePartnerInputRequest
 */
export interface MediaLiveCreatePartnerInputRequest {
  /**
   * @schema MediaLiveCreatePartnerInputRequest#InputId
   */
  readonly inputId?: string;

  /**
   * @schema MediaLiveCreatePartnerInputRequest#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema MediaLiveCreatePartnerInputRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaLiveCreatePartnerInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreatePartnerInputRequest(obj: MediaLiveCreatePartnerInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputId': obj.inputId,
    'RequestId': obj.requestId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveCreatePartnerInputResponse
 */
export interface MediaLiveCreatePartnerInputResponse {
  /**
   * @schema MediaLiveCreatePartnerInputResponse#Input
   */
  readonly input?: MediaLiveInput;

}

/**
 * Converts an object of type 'MediaLiveCreatePartnerInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreatePartnerInputResponse(obj: MediaLiveCreatePartnerInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Input': toJson_MediaLiveInput(obj.input),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveCreateTagsRequest
 */
export interface MediaLiveCreateTagsRequest {
  /**
   * @schema MediaLiveCreateTagsRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MediaLiveCreateTagsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaLiveCreateTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCreateTagsRequest(obj: MediaLiveCreateTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteChannelRequest
 */
export interface MediaLiveDeleteChannelRequest {
  /**
   * @schema MediaLiveDeleteChannelRequest#ChannelId
   */
  readonly channelId?: string;

}

/**
 * Converts an object of type 'MediaLiveDeleteChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteChannelRequest(obj: MediaLiveDeleteChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveDeleteChannelResponse#Vpc
   */
  readonly vpc?: MediaLiveVpcOutputSettingsDescription;

}

/**
 * Converts an object of type 'MediaLiveDeleteChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteChannelResponse(obj: MediaLiveDeleteChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CdiInputSpecification': toJson_MediaLiveCdiInputSpecification(obj.cdiInputSpecification),
    'ChannelClass': obj.channelClass,
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveOutputDestination(y)),
    'EgressEndpoints': obj.egressEndpoints?.map(y => toJson_MediaLiveChannelEgressEndpoint(y)),
    'EncoderSettings': toJson_MediaLiveEncoderSettings(obj.encoderSettings),
    'Id': obj.id,
    'InputAttachments': obj.inputAttachments?.map(y => toJson_MediaLiveInputAttachment(y)),
    'InputSpecification': toJson_MediaLiveInputSpecification(obj.inputSpecification),
    'LogLevel': obj.logLevel,
    'Name': obj.name,
    'PipelineDetails': obj.pipelineDetails?.map(y => toJson_MediaLivePipelineDetail(y)),
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'RoleArn': obj.roleArn,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Vpc': toJson_MediaLiveVpcOutputSettingsDescription(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteInputRequest
 */
export interface MediaLiveDeleteInputRequest {
  /**
   * @schema MediaLiveDeleteInputRequest#InputId
   */
  readonly inputId?: string;

}

/**
 * Converts an object of type 'MediaLiveDeleteInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteInputRequest(obj: MediaLiveDeleteInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputId': obj.inputId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteInputResponse
 */
export interface MediaLiveDeleteInputResponse {
}

/**
 * Converts an object of type 'MediaLiveDeleteInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteInputResponse(obj: MediaLiveDeleteInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteInputSecurityGroupRequest
 */
export interface MediaLiveDeleteInputSecurityGroupRequest {
  /**
   * @schema MediaLiveDeleteInputSecurityGroupRequest#InputSecurityGroupId
   */
  readonly inputSecurityGroupId?: string;

}

/**
 * Converts an object of type 'MediaLiveDeleteInputSecurityGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteInputSecurityGroupRequest(obj: MediaLiveDeleteInputSecurityGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputSecurityGroupId': obj.inputSecurityGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteInputSecurityGroupResponse
 */
export interface MediaLiveDeleteInputSecurityGroupResponse {
}

/**
 * Converts an object of type 'MediaLiveDeleteInputSecurityGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteInputSecurityGroupResponse(obj: MediaLiveDeleteInputSecurityGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteMultiplexRequest
 */
export interface MediaLiveDeleteMultiplexRequest {
  /**
   * @schema MediaLiveDeleteMultiplexRequest#MultiplexId
   */
  readonly multiplexId?: string;

}

/**
 * Converts an object of type 'MediaLiveDeleteMultiplexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteMultiplexRequest(obj: MediaLiveDeleteMultiplexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexId': obj.multiplexId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDeleteMultiplexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteMultiplexResponse(obj: MediaLiveDeleteMultiplexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveMultiplexOutputDestination(y)),
    'Id': obj.id,
    'MultiplexSettings': toJson_MediaLiveMultiplexSettings(obj.multiplexSettings),
    'Name': obj.name,
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'ProgramCount': obj.programCount,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteMultiplexProgramRequest
 */
export interface MediaLiveDeleteMultiplexProgramRequest {
  /**
   * @schema MediaLiveDeleteMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId?: string;

  /**
   * @schema MediaLiveDeleteMultiplexProgramRequest#ProgramName
   */
  readonly programName?: string;

}

/**
 * Converts an object of type 'MediaLiveDeleteMultiplexProgramRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteMultiplexProgramRequest(obj: MediaLiveDeleteMultiplexProgramRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexId': obj.multiplexId,
    'ProgramName': obj.programName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDeleteMultiplexProgramResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteMultiplexProgramResponse(obj: MediaLiveDeleteMultiplexProgramResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
    'MultiplexProgramSettings': toJson_MediaLiveMultiplexProgramSettings(obj.multiplexProgramSettings),
    'PacketIdentifiersMap': toJson_MediaLiveMultiplexProgramPacketIdentifiersMap(obj.packetIdentifiersMap),
    'PipelineDetails': obj.pipelineDetails?.map(y => toJson_MediaLiveMultiplexProgramPipelineDetail(y)),
    'ProgramName': obj.programName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteReservationRequest
 */
export interface MediaLiveDeleteReservationRequest {
  /**
   * @schema MediaLiveDeleteReservationRequest#ReservationId
   */
  readonly reservationId?: string;

}

/**
 * Converts an object of type 'MediaLiveDeleteReservationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteReservationRequest(obj: MediaLiveDeleteReservationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservationId': obj.reservationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDeleteReservationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteReservationResponse(obj: MediaLiveDeleteReservationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Count': obj.count,
    'CurrencyCode': obj.currencyCode,
    'Duration': obj.duration,
    'DurationUnits': obj.durationUnits,
    'End': obj.end,
    'FixedPrice': obj.fixedPrice,
    'Name': obj.name,
    'OfferingDescription': obj.offeringDescription,
    'OfferingId': obj.offeringId,
    'OfferingType': obj.offeringType,
    'Region': obj.region,
    'ReservationId': obj.reservationId,
    'ResourceSpecification': toJson_MediaLiveReservationResourceSpecification(obj.resourceSpecification),
    'Start': obj.start,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UsagePrice': obj.usagePrice,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteScheduleRequest
 */
export interface MediaLiveDeleteScheduleRequest {
  /**
   * @schema MediaLiveDeleteScheduleRequest#ChannelId
   */
  readonly channelId?: string;

}

/**
 * Converts an object of type 'MediaLiveDeleteScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteScheduleRequest(obj: MediaLiveDeleteScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteScheduleResponse
 */
export interface MediaLiveDeleteScheduleResponse {
}

/**
 * Converts an object of type 'MediaLiveDeleteScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteScheduleResponse(obj: MediaLiveDeleteScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDeleteTagsRequest
 */
export interface MediaLiveDeleteTagsRequest {
  /**
   * @schema MediaLiveDeleteTagsRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MediaLiveDeleteTagsRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'MediaLiveDeleteTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDeleteTagsRequest(obj: MediaLiveDeleteTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDescribeChannelRequest
 */
export interface MediaLiveDescribeChannelRequest {
  /**
   * @schema MediaLiveDescribeChannelRequest#ChannelId
   */
  readonly channelId?: string;

}

/**
 * Converts an object of type 'MediaLiveDescribeChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeChannelRequest(obj: MediaLiveDescribeChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveDescribeChannelResponse#Vpc
   */
  readonly vpc?: MediaLiveVpcOutputSettingsDescription;

}

/**
 * Converts an object of type 'MediaLiveDescribeChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeChannelResponse(obj: MediaLiveDescribeChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CdiInputSpecification': toJson_MediaLiveCdiInputSpecification(obj.cdiInputSpecification),
    'ChannelClass': obj.channelClass,
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveOutputDestination(y)),
    'EgressEndpoints': obj.egressEndpoints?.map(y => toJson_MediaLiveChannelEgressEndpoint(y)),
    'EncoderSettings': toJson_MediaLiveEncoderSettings(obj.encoderSettings),
    'Id': obj.id,
    'InputAttachments': obj.inputAttachments?.map(y => toJson_MediaLiveInputAttachment(y)),
    'InputSpecification': toJson_MediaLiveInputSpecification(obj.inputSpecification),
    'LogLevel': obj.logLevel,
    'Name': obj.name,
    'PipelineDetails': obj.pipelineDetails?.map(y => toJson_MediaLivePipelineDetail(y)),
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'RoleArn': obj.roleArn,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Vpc': toJson_MediaLiveVpcOutputSettingsDescription(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDescribeInputRequest
 */
export interface MediaLiveDescribeInputRequest {
  /**
   * @schema MediaLiveDescribeInputRequest#InputId
   */
  readonly inputId?: string;

}

/**
 * Converts an object of type 'MediaLiveDescribeInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeInputRequest(obj: MediaLiveDescribeInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputId': obj.inputId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MediaLiveDescribeInputResponse#InputPartnerIds
   */
  readonly inputPartnerIds?: string[];

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
 * Converts an object of type 'MediaLiveDescribeInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeInputResponse(obj: MediaLiveDescribeInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AttachedChannels': obj.attachedChannels?.map(y => y),
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveInputDestination(y)),
    'Id': obj.id,
    'InputClass': obj.inputClass,
    'InputDevices': obj.inputDevices?.map(y => toJson_MediaLiveInputDeviceSettings(y)),
    'InputPartnerIds': obj.inputPartnerIds?.map(y => y),
    'InputSourceType': obj.inputSourceType,
    'MediaConnectFlows': obj.mediaConnectFlows?.map(y => toJson_MediaLiveMediaConnectFlow(y)),
    'Name': obj.name,
    'RoleArn': obj.roleArn,
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'Sources': obj.sources?.map(y => toJson_MediaLiveInputSource(y)),
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDescribeInputDeviceRequest
 */
export interface MediaLiveDescribeInputDeviceRequest {
  /**
   * @schema MediaLiveDescribeInputDeviceRequest#InputDeviceId
   */
  readonly inputDeviceId?: string;

}

/**
 * Converts an object of type 'MediaLiveDescribeInputDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeInputDeviceRequest(obj: MediaLiveDescribeInputDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDeviceId': obj.inputDeviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveDescribeInputDeviceResponse#UhdDeviceSettings
   */
  readonly uhdDeviceSettings?: MediaLiveInputDeviceUhdSettings;

}

/**
 * Converts an object of type 'MediaLiveDescribeInputDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeInputDeviceResponse(obj: MediaLiveDescribeInputDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ConnectionState': obj.connectionState,
    'DeviceSettingsSyncState': obj.deviceSettingsSyncState,
    'DeviceUpdateStatus': obj.deviceUpdateStatus,
    'HdDeviceSettings': toJson_MediaLiveInputDeviceHdSettings(obj.hdDeviceSettings),
    'Id': obj.id,
    'MacAddress': obj.macAddress,
    'Name': obj.name,
    'NetworkSettings': toJson_MediaLiveInputDeviceNetworkSettings(obj.networkSettings),
    'SerialNumber': obj.serialNumber,
    'Type': obj.type,
    'UhdDeviceSettings': toJson_MediaLiveInputDeviceUhdSettings(obj.uhdDeviceSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDescribeInputDeviceThumbnailRequest
 */
export interface MediaLiveDescribeInputDeviceThumbnailRequest {
  /**
   * @schema MediaLiveDescribeInputDeviceThumbnailRequest#InputDeviceId
   */
  readonly inputDeviceId?: string;

  /**
   * @schema MediaLiveDescribeInputDeviceThumbnailRequest#Accept
   */
  readonly accept?: string;

}

/**
 * Converts an object of type 'MediaLiveDescribeInputDeviceThumbnailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeInputDeviceThumbnailRequest(obj: MediaLiveDescribeInputDeviceThumbnailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDeviceId': obj.inputDeviceId,
    'Accept': obj.accept,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDescribeInputDeviceThumbnailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeInputDeviceThumbnailResponse(obj: MediaLiveDescribeInputDeviceThumbnailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Body': obj.body,
    'ContentType': obj.contentType,
    'ContentLength': obj.contentLength,
    'ETag': obj.eTag,
    'LastModified': obj.lastModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDescribeInputSecurityGroupRequest
 */
export interface MediaLiveDescribeInputSecurityGroupRequest {
  /**
   * @schema MediaLiveDescribeInputSecurityGroupRequest#InputSecurityGroupId
   */
  readonly inputSecurityGroupId?: string;

}

/**
 * Converts an object of type 'MediaLiveDescribeInputSecurityGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeInputSecurityGroupRequest(obj: MediaLiveDescribeInputSecurityGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputSecurityGroupId': obj.inputSecurityGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDescribeInputSecurityGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeInputSecurityGroupResponse(obj: MediaLiveDescribeInputSecurityGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
    'Inputs': obj.inputs?.map(y => y),
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'WhitelistRules': obj.whitelistRules?.map(y => toJson_MediaLiveInputWhitelistRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDescribeMultiplexRequest
 */
export interface MediaLiveDescribeMultiplexRequest {
  /**
   * @schema MediaLiveDescribeMultiplexRequest#MultiplexId
   */
  readonly multiplexId?: string;

}

/**
 * Converts an object of type 'MediaLiveDescribeMultiplexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeMultiplexRequest(obj: MediaLiveDescribeMultiplexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexId': obj.multiplexId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDescribeMultiplexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeMultiplexResponse(obj: MediaLiveDescribeMultiplexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveMultiplexOutputDestination(y)),
    'Id': obj.id,
    'MultiplexSettings': toJson_MediaLiveMultiplexSettings(obj.multiplexSettings),
    'Name': obj.name,
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'ProgramCount': obj.programCount,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDescribeMultiplexProgramRequest
 */
export interface MediaLiveDescribeMultiplexProgramRequest {
  /**
   * @schema MediaLiveDescribeMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId?: string;

  /**
   * @schema MediaLiveDescribeMultiplexProgramRequest#ProgramName
   */
  readonly programName?: string;

}

/**
 * Converts an object of type 'MediaLiveDescribeMultiplexProgramRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeMultiplexProgramRequest(obj: MediaLiveDescribeMultiplexProgramRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexId': obj.multiplexId,
    'ProgramName': obj.programName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDescribeMultiplexProgramResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeMultiplexProgramResponse(obj: MediaLiveDescribeMultiplexProgramResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
    'MultiplexProgramSettings': toJson_MediaLiveMultiplexProgramSettings(obj.multiplexProgramSettings),
    'PacketIdentifiersMap': toJson_MediaLiveMultiplexProgramPacketIdentifiersMap(obj.packetIdentifiersMap),
    'PipelineDetails': obj.pipelineDetails?.map(y => toJson_MediaLiveMultiplexProgramPipelineDetail(y)),
    'ProgramName': obj.programName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDescribeOfferingRequest
 */
export interface MediaLiveDescribeOfferingRequest {
  /**
   * @schema MediaLiveDescribeOfferingRequest#OfferingId
   */
  readonly offeringId?: string;

}

/**
 * Converts an object of type 'MediaLiveDescribeOfferingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeOfferingRequest(obj: MediaLiveDescribeOfferingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OfferingId': obj.offeringId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDescribeOfferingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeOfferingResponse(obj: MediaLiveDescribeOfferingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CurrencyCode': obj.currencyCode,
    'Duration': obj.duration,
    'DurationUnits': obj.durationUnits,
    'FixedPrice': obj.fixedPrice,
    'OfferingDescription': obj.offeringDescription,
    'OfferingId': obj.offeringId,
    'OfferingType': obj.offeringType,
    'Region': obj.region,
    'ResourceSpecification': toJson_MediaLiveReservationResourceSpecification(obj.resourceSpecification),
    'UsagePrice': obj.usagePrice,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDescribeReservationRequest
 */
export interface MediaLiveDescribeReservationRequest {
  /**
   * @schema MediaLiveDescribeReservationRequest#ReservationId
   */
  readonly reservationId?: string;

}

/**
 * Converts an object of type 'MediaLiveDescribeReservationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeReservationRequest(obj: MediaLiveDescribeReservationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservationId': obj.reservationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDescribeReservationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeReservationResponse(obj: MediaLiveDescribeReservationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Count': obj.count,
    'CurrencyCode': obj.currencyCode,
    'Duration': obj.duration,
    'DurationUnits': obj.durationUnits,
    'End': obj.end,
    'FixedPrice': obj.fixedPrice,
    'Name': obj.name,
    'OfferingDescription': obj.offeringDescription,
    'OfferingId': obj.offeringId,
    'OfferingType': obj.offeringType,
    'Region': obj.region,
    'ReservationId': obj.reservationId,
    'ResourceSpecification': toJson_MediaLiveReservationResourceSpecification(obj.resourceSpecification),
    'Start': obj.start,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UsagePrice': obj.usagePrice,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDescribeScheduleRequest
 */
export interface MediaLiveDescribeScheduleRequest {
  /**
   * @schema MediaLiveDescribeScheduleRequest#ChannelId
   */
  readonly channelId?: string;

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
 * Converts an object of type 'MediaLiveDescribeScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeScheduleRequest(obj: MediaLiveDescribeScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDescribeScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDescribeScheduleResponse(obj: MediaLiveDescribeScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ScheduleActions': obj.scheduleActions?.map(y => toJson_MediaLiveScheduleAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListChannelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListChannelsRequest(obj: MediaLiveListChannelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListChannelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListChannelsResponse(obj: MediaLiveListChannelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channels': obj.channels?.map(y => toJson_MediaLiveChannelSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly transferType?: string;

}

/**
 * Converts an object of type 'MediaLiveListInputDeviceTransfersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListInputDeviceTransfersRequest(obj: MediaLiveListInputDeviceTransfersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'TransferType': obj.transferType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListInputDeviceTransfersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListInputDeviceTransfersResponse(obj: MediaLiveListInputDeviceTransfersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDeviceTransfers': obj.inputDeviceTransfers?.map(y => toJson_MediaLiveTransferringInputDeviceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListInputDevicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListInputDevicesRequest(obj: MediaLiveListInputDevicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListInputDevicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListInputDevicesResponse(obj: MediaLiveListInputDevicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDevices': obj.inputDevices?.map(y => toJson_MediaLiveInputDeviceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListInputSecurityGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListInputSecurityGroupsRequest(obj: MediaLiveListInputSecurityGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListInputSecurityGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListInputSecurityGroupsResponse(obj: MediaLiveListInputSecurityGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputSecurityGroups': obj.inputSecurityGroups?.map(y => toJson_MediaLiveInputSecurityGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListInputsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListInputsRequest(obj: MediaLiveListInputsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListInputsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListInputsResponse(obj: MediaLiveListInputsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Inputs': obj.inputs?.map(y => toJson_MediaLiveInput(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly multiplexId?: string;

  /**
   * @schema MediaLiveListMultiplexProgramsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaLiveListMultiplexProgramsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListMultiplexProgramsRequest(obj: MediaLiveListMultiplexProgramsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'MultiplexId': obj.multiplexId,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListMultiplexProgramsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListMultiplexProgramsResponse(obj: MediaLiveListMultiplexProgramsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexPrograms': obj.multiplexPrograms?.map(y => toJson_MediaLiveMultiplexProgramSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListMultiplexesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListMultiplexesRequest(obj: MediaLiveListMultiplexesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListMultiplexesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListMultiplexesResponse(obj: MediaLiveListMultiplexesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Multiplexes': obj.multiplexes?.map(y => toJson_MediaLiveMultiplexSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListOfferingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListOfferingsRequest(obj: MediaLiveListOfferingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelClass': obj.channelClass,
    'ChannelConfiguration': obj.channelConfiguration,
    'Codec': obj.codec,
    'Duration': obj.duration,
    'MaxResults': obj.maxResults,
    'MaximumBitrate': obj.maximumBitrate,
    'MaximumFramerate': obj.maximumFramerate,
    'NextToken': obj.nextToken,
    'Resolution': obj.resolution,
    'ResourceType': obj.resourceType,
    'SpecialFeature': obj.specialFeature,
    'VideoQuality': obj.videoQuality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListOfferingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListOfferingsResponse(obj: MediaLiveListOfferingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Offerings': obj.offerings?.map(y => toJson_MediaLiveOffering(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListReservationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListReservationsRequest(obj: MediaLiveListReservationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelClass': obj.channelClass,
    'Codec': obj.codec,
    'MaxResults': obj.maxResults,
    'MaximumBitrate': obj.maximumBitrate,
    'MaximumFramerate': obj.maximumFramerate,
    'NextToken': obj.nextToken,
    'Resolution': obj.resolution,
    'ResourceType': obj.resourceType,
    'SpecialFeature': obj.specialFeature,
    'VideoQuality': obj.videoQuality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListReservationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListReservationsResponse(obj: MediaLiveListReservationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Reservations': obj.reservations?.map(y => toJson_MediaLiveReservation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveListTagsForResourceRequest
 */
export interface MediaLiveListTagsForResourceRequest {
  /**
   * @schema MediaLiveListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'MediaLiveListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListTagsForResourceRequest(obj: MediaLiveListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveListTagsForResourceResponse(obj: MediaLiveListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLivePurchaseOfferingRequest
 */
export interface MediaLivePurchaseOfferingRequest {
  /**
   * @schema MediaLivePurchaseOfferingRequest#Count
   */
  readonly count?: number;

  /**
   * @schema MediaLivePurchaseOfferingRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLivePurchaseOfferingRequest#OfferingId
   */
  readonly offeringId?: string;

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
 * Converts an object of type 'MediaLivePurchaseOfferingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLivePurchaseOfferingRequest(obj: MediaLivePurchaseOfferingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Count': obj.count,
    'Name': obj.name,
    'OfferingId': obj.offeringId,
    'RequestId': obj.requestId,
    'Start': obj.start,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLivePurchaseOfferingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLivePurchaseOfferingResponse(obj: MediaLivePurchaseOfferingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Reservation': toJson_MediaLiveReservation(obj.reservation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveRejectInputDeviceTransferRequest
 */
export interface MediaLiveRejectInputDeviceTransferRequest {
  /**
   * @schema MediaLiveRejectInputDeviceTransferRequest#InputDeviceId
   */
  readonly inputDeviceId?: string;

}

/**
 * Converts an object of type 'MediaLiveRejectInputDeviceTransferRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveRejectInputDeviceTransferRequest(obj: MediaLiveRejectInputDeviceTransferRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDeviceId': obj.inputDeviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveRejectInputDeviceTransferResponse
 */
export interface MediaLiveRejectInputDeviceTransferResponse {
}

/**
 * Converts an object of type 'MediaLiveRejectInputDeviceTransferResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveRejectInputDeviceTransferResponse(obj: MediaLiveRejectInputDeviceTransferResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveStartChannelRequest
 */
export interface MediaLiveStartChannelRequest {
  /**
   * @schema MediaLiveStartChannelRequest#ChannelId
   */
  readonly channelId?: string;

}

/**
 * Converts an object of type 'MediaLiveStartChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStartChannelRequest(obj: MediaLiveStartChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveStartChannelResponse#Vpc
   */
  readonly vpc?: MediaLiveVpcOutputSettingsDescription;

}

/**
 * Converts an object of type 'MediaLiveStartChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStartChannelResponse(obj: MediaLiveStartChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CdiInputSpecification': toJson_MediaLiveCdiInputSpecification(obj.cdiInputSpecification),
    'ChannelClass': obj.channelClass,
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveOutputDestination(y)),
    'EgressEndpoints': obj.egressEndpoints?.map(y => toJson_MediaLiveChannelEgressEndpoint(y)),
    'EncoderSettings': toJson_MediaLiveEncoderSettings(obj.encoderSettings),
    'Id': obj.id,
    'InputAttachments': obj.inputAttachments?.map(y => toJson_MediaLiveInputAttachment(y)),
    'InputSpecification': toJson_MediaLiveInputSpecification(obj.inputSpecification),
    'LogLevel': obj.logLevel,
    'Name': obj.name,
    'PipelineDetails': obj.pipelineDetails?.map(y => toJson_MediaLivePipelineDetail(y)),
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'RoleArn': obj.roleArn,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Vpc': toJson_MediaLiveVpcOutputSettingsDescription(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveStartMultiplexRequest
 */
export interface MediaLiveStartMultiplexRequest {
  /**
   * @schema MediaLiveStartMultiplexRequest#MultiplexId
   */
  readonly multiplexId?: string;

}

/**
 * Converts an object of type 'MediaLiveStartMultiplexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStartMultiplexRequest(obj: MediaLiveStartMultiplexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexId': obj.multiplexId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveStartMultiplexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStartMultiplexResponse(obj: MediaLiveStartMultiplexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveMultiplexOutputDestination(y)),
    'Id': obj.id,
    'MultiplexSettings': toJson_MediaLiveMultiplexSettings(obj.multiplexSettings),
    'Name': obj.name,
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'ProgramCount': obj.programCount,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveStopChannelRequest
 */
export interface MediaLiveStopChannelRequest {
  /**
   * @schema MediaLiveStopChannelRequest#ChannelId
   */
  readonly channelId?: string;

}

/**
 * Converts an object of type 'MediaLiveStopChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStopChannelRequest(obj: MediaLiveStopChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveStopChannelResponse#Vpc
   */
  readonly vpc?: MediaLiveVpcOutputSettingsDescription;

}

/**
 * Converts an object of type 'MediaLiveStopChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStopChannelResponse(obj: MediaLiveStopChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CdiInputSpecification': toJson_MediaLiveCdiInputSpecification(obj.cdiInputSpecification),
    'ChannelClass': obj.channelClass,
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveOutputDestination(y)),
    'EgressEndpoints': obj.egressEndpoints?.map(y => toJson_MediaLiveChannelEgressEndpoint(y)),
    'EncoderSettings': toJson_MediaLiveEncoderSettings(obj.encoderSettings),
    'Id': obj.id,
    'InputAttachments': obj.inputAttachments?.map(y => toJson_MediaLiveInputAttachment(y)),
    'InputSpecification': toJson_MediaLiveInputSpecification(obj.inputSpecification),
    'LogLevel': obj.logLevel,
    'Name': obj.name,
    'PipelineDetails': obj.pipelineDetails?.map(y => toJson_MediaLivePipelineDetail(y)),
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'RoleArn': obj.roleArn,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Vpc': toJson_MediaLiveVpcOutputSettingsDescription(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveStopMultiplexRequest
 */
export interface MediaLiveStopMultiplexRequest {
  /**
   * @schema MediaLiveStopMultiplexRequest#MultiplexId
   */
  readonly multiplexId?: string;

}

/**
 * Converts an object of type 'MediaLiveStopMultiplexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStopMultiplexRequest(obj: MediaLiveStopMultiplexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexId': obj.multiplexId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveStopMultiplexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStopMultiplexResponse(obj: MediaLiveStopMultiplexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveMultiplexOutputDestination(y)),
    'Id': obj.id,
    'MultiplexSettings': toJson_MediaLiveMultiplexSettings(obj.multiplexSettings),
    'Name': obj.name,
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'ProgramCount': obj.programCount,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveTransferInputDeviceRequest
 */
export interface MediaLiveTransferInputDeviceRequest {
  /**
   * @schema MediaLiveTransferInputDeviceRequest#InputDeviceId
   */
  readonly inputDeviceId?: string;

  /**
   * @schema MediaLiveTransferInputDeviceRequest#TargetCustomerId
   */
  readonly targetCustomerId?: string;

  /**
   * @schema MediaLiveTransferInputDeviceRequest#TargetRegion
   */
  readonly targetRegion?: string;

  /**
   * @schema MediaLiveTransferInputDeviceRequest#TransferMessage
   */
  readonly transferMessage?: string;

}

/**
 * Converts an object of type 'MediaLiveTransferInputDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveTransferInputDeviceRequest(obj: MediaLiveTransferInputDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDeviceId': obj.inputDeviceId,
    'TargetCustomerId': obj.targetCustomerId,
    'TargetRegion': obj.targetRegion,
    'TransferMessage': obj.transferMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveTransferInputDeviceResponse
 */
export interface MediaLiveTransferInputDeviceResponse {
}

/**
 * Converts an object of type 'MediaLiveTransferInputDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveTransferInputDeviceResponse(obj: MediaLiveTransferInputDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly channelId?: string;

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
 * Converts an object of type 'MediaLiveUpdateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateChannelRequest(obj: MediaLiveUpdateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CdiInputSpecification': toJson_MediaLiveCdiInputSpecification(obj.cdiInputSpecification),
    'ChannelId': obj.channelId,
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveOutputDestination(y)),
    'EncoderSettings': toJson_MediaLiveEncoderSettings(obj.encoderSettings),
    'InputAttachments': obj.inputAttachments?.map(y => toJson_MediaLiveInputAttachment(y)),
    'InputSpecification': toJson_MediaLiveInputSpecification(obj.inputSpecification),
    'LogLevel': obj.logLevel,
    'Name': obj.name,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveUpdateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateChannelResponse(obj: MediaLiveUpdateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channel': toJson_MediaLiveChannel(obj.channel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveUpdateChannelClassRequest
 */
export interface MediaLiveUpdateChannelClassRequest {
  /**
   * @schema MediaLiveUpdateChannelClassRequest#ChannelClass
   */
  readonly channelClass?: string;

  /**
   * @schema MediaLiveUpdateChannelClassRequest#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaLiveUpdateChannelClassRequest#Destinations
   */
  readonly destinations?: MediaLiveOutputDestination[];

}

/**
 * Converts an object of type 'MediaLiveUpdateChannelClassRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateChannelClassRequest(obj: MediaLiveUpdateChannelClassRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelClass': obj.channelClass,
    'ChannelId': obj.channelId,
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveOutputDestination(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveUpdateChannelClassResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateChannelClassResponse(obj: MediaLiveUpdateChannelClassResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channel': toJson_MediaLiveChannel(obj.channel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly inputId?: string;

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
 * Converts an object of type 'MediaLiveUpdateInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateInputRequest(obj: MediaLiveUpdateInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveInputDestinationRequest(y)),
    'InputDevices': obj.inputDevices?.map(y => toJson_MediaLiveInputDeviceRequest(y)),
    'InputId': obj.inputId,
    'InputSecurityGroups': obj.inputSecurityGroups?.map(y => y),
    'MediaConnectFlows': obj.mediaConnectFlows?.map(y => toJson_MediaLiveMediaConnectFlowRequest(y)),
    'Name': obj.name,
    'RoleArn': obj.roleArn,
    'Sources': obj.sources?.map(y => toJson_MediaLiveInputSourceRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveUpdateInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateInputResponse(obj: MediaLiveUpdateInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Input': toJson_MediaLiveInput(obj.input),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly inputDeviceId?: string;

  /**
   * @schema MediaLiveUpdateInputDeviceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveUpdateInputDeviceRequest#UhdDeviceSettings
   */
  readonly uhdDeviceSettings?: MediaLiveInputDeviceConfigurableSettings;

}

/**
 * Converts an object of type 'MediaLiveUpdateInputDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateInputDeviceRequest(obj: MediaLiveUpdateInputDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HdDeviceSettings': toJson_MediaLiveInputDeviceConfigurableSettings(obj.hdDeviceSettings),
    'InputDeviceId': obj.inputDeviceId,
    'Name': obj.name,
    'UhdDeviceSettings': toJson_MediaLiveInputDeviceConfigurableSettings(obj.uhdDeviceSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveUpdateInputDeviceResponse#UhdDeviceSettings
   */
  readonly uhdDeviceSettings?: MediaLiveInputDeviceUhdSettings;

}

/**
 * Converts an object of type 'MediaLiveUpdateInputDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateInputDeviceResponse(obj: MediaLiveUpdateInputDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ConnectionState': obj.connectionState,
    'DeviceSettingsSyncState': obj.deviceSettingsSyncState,
    'DeviceUpdateStatus': obj.deviceUpdateStatus,
    'HdDeviceSettings': toJson_MediaLiveInputDeviceHdSettings(obj.hdDeviceSettings),
    'Id': obj.id,
    'MacAddress': obj.macAddress,
    'Name': obj.name,
    'NetworkSettings': toJson_MediaLiveInputDeviceNetworkSettings(obj.networkSettings),
    'SerialNumber': obj.serialNumber,
    'Type': obj.type,
    'UhdDeviceSettings': toJson_MediaLiveInputDeviceUhdSettings(obj.uhdDeviceSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveUpdateInputSecurityGroupRequest
 */
export interface MediaLiveUpdateInputSecurityGroupRequest {
  /**
   * @schema MediaLiveUpdateInputSecurityGroupRequest#InputSecurityGroupId
   */
  readonly inputSecurityGroupId?: string;

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
 * Converts an object of type 'MediaLiveUpdateInputSecurityGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateInputSecurityGroupRequest(obj: MediaLiveUpdateInputSecurityGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputSecurityGroupId': obj.inputSecurityGroupId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'WhitelistRules': obj.whitelistRules?.map(y => toJson_MediaLiveInputWhitelistRuleCidr(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveUpdateInputSecurityGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateInputSecurityGroupResponse(obj: MediaLiveUpdateInputSecurityGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroup': toJson_MediaLiveInputSecurityGroup(obj.securityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveUpdateMultiplexRequest
 */
export interface MediaLiveUpdateMultiplexRequest {
  /**
   * @schema MediaLiveUpdateMultiplexRequest#MultiplexId
   */
  readonly multiplexId?: string;

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
 * Converts an object of type 'MediaLiveUpdateMultiplexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateMultiplexRequest(obj: MediaLiveUpdateMultiplexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexId': obj.multiplexId,
    'MultiplexSettings': toJson_MediaLiveMultiplexSettings(obj.multiplexSettings),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveUpdateMultiplexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateMultiplexResponse(obj: MediaLiveUpdateMultiplexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Multiplex': toJson_MediaLiveMultiplex(obj.multiplex),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveUpdateMultiplexProgramRequest
 */
export interface MediaLiveUpdateMultiplexProgramRequest {
  /**
   * @schema MediaLiveUpdateMultiplexProgramRequest#MultiplexId
   */
  readonly multiplexId?: string;

  /**
   * @schema MediaLiveUpdateMultiplexProgramRequest#MultiplexProgramSettings
   */
  readonly multiplexProgramSettings?: MediaLiveMultiplexProgramSettings;

  /**
   * @schema MediaLiveUpdateMultiplexProgramRequest#ProgramName
   */
  readonly programName?: string;

}

/**
 * Converts an object of type 'MediaLiveUpdateMultiplexProgramRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateMultiplexProgramRequest(obj: MediaLiveUpdateMultiplexProgramRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexId': obj.multiplexId,
    'MultiplexProgramSettings': toJson_MediaLiveMultiplexProgramSettings(obj.multiplexProgramSettings),
    'ProgramName': obj.programName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveUpdateMultiplexProgramResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateMultiplexProgramResponse(obj: MediaLiveUpdateMultiplexProgramResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexProgram': toJson_MediaLiveMultiplexProgram(obj.multiplexProgram),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly reservationId?: string;

}

/**
 * Converts an object of type 'MediaLiveUpdateReservationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateReservationRequest(obj: MediaLiveUpdateReservationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ReservationId': obj.reservationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveUpdateReservationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUpdateReservationResponse(obj: MediaLiveUpdateReservationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Reservation': toJson_MediaLiveReservation(obj.reservation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBatchFailedResultModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchFailedResultModel(obj: MediaLiveBatchFailedResultModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Code': obj.code,
    'Id': obj.id,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBatchSuccessfulResultModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchSuccessfulResultModel(obj: MediaLiveBatchSuccessfulResultModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveBatchScheduleActionCreateRequest
 */
export interface MediaLiveBatchScheduleActionCreateRequest {
  /**
   * @schema MediaLiveBatchScheduleActionCreateRequest#ScheduleActions
   */
  readonly scheduleActions?: MediaLiveScheduleAction[];

}

/**
 * Converts an object of type 'MediaLiveBatchScheduleActionCreateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchScheduleActionCreateRequest(obj: MediaLiveBatchScheduleActionCreateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleActions': obj.scheduleActions?.map(y => toJson_MediaLiveScheduleAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveBatchScheduleActionDeleteRequest
 */
export interface MediaLiveBatchScheduleActionDeleteRequest {
  /**
   * @schema MediaLiveBatchScheduleActionDeleteRequest#ActionNames
   */
  readonly actionNames?: string[];

}

/**
 * Converts an object of type 'MediaLiveBatchScheduleActionDeleteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchScheduleActionDeleteRequest(obj: MediaLiveBatchScheduleActionDeleteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionNames': obj.actionNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveBatchScheduleActionCreateResult
 */
export interface MediaLiveBatchScheduleActionCreateResult {
  /**
   * @schema MediaLiveBatchScheduleActionCreateResult#ScheduleActions
   */
  readonly scheduleActions?: MediaLiveScheduleAction[];

}

/**
 * Converts an object of type 'MediaLiveBatchScheduleActionCreateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchScheduleActionCreateResult(obj: MediaLiveBatchScheduleActionCreateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleActions': obj.scheduleActions?.map(y => toJson_MediaLiveScheduleAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveBatchScheduleActionDeleteResult
 */
export interface MediaLiveBatchScheduleActionDeleteResult {
  /**
   * @schema MediaLiveBatchScheduleActionDeleteResult#ScheduleActions
   */
  readonly scheduleActions?: MediaLiveScheduleAction[];

}

/**
 * Converts an object of type 'MediaLiveBatchScheduleActionDeleteResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBatchScheduleActionDeleteResult(obj: MediaLiveBatchScheduleActionDeleteResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleActions': obj.scheduleActions?.map(y => toJson_MediaLiveScheduleAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveCdiInputSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCdiInputSpecification(obj: MediaLiveCdiInputSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resolution': obj.resolution,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveOutputDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveOutputDestination(obj: MediaLiveOutputDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'MediaPackageSettings': obj.mediaPackageSettings?.map(y => toJson_MediaLiveMediaPackageOutputDestinationSettings(y)),
    'MultiplexSettings': toJson_MediaLiveMultiplexProgramChannelDestinationSettings(obj.multiplexSettings),
    'Settings': obj.settings?.map(y => toJson_MediaLiveOutputDestinationSettings(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveEncoderSettings
 */
export interface MediaLiveEncoderSettings {
  /**
   * @schema MediaLiveEncoderSettings#AudioDescriptions
   */
  readonly audioDescriptions?: MediaLiveAudioDescription[];

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
   * @schema MediaLiveEncoderSettings#MotionGraphicsConfiguration
   */
  readonly motionGraphicsConfiguration?: MediaLiveMotionGraphicsConfiguration;

  /**
   * @schema MediaLiveEncoderSettings#NielsenConfiguration
   */
  readonly nielsenConfiguration?: MediaLiveNielsenConfiguration;

  /**
   * @schema MediaLiveEncoderSettings#OutputGroups
   */
  readonly outputGroups?: MediaLiveOutputGroup[];

  /**
   * @schema MediaLiveEncoderSettings#TimecodeConfig
   */
  readonly timecodeConfig?: MediaLiveTimecodeConfig;

  /**
   * @schema MediaLiveEncoderSettings#VideoDescriptions
   */
  readonly videoDescriptions?: MediaLiveVideoDescription[];

}

/**
 * Converts an object of type 'MediaLiveEncoderSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveEncoderSettings(obj: MediaLiveEncoderSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioDescriptions': obj.audioDescriptions?.map(y => toJson_MediaLiveAudioDescription(y)),
    'AvailBlanking': toJson_MediaLiveAvailBlanking(obj.availBlanking),
    'AvailConfiguration': toJson_MediaLiveAvailConfiguration(obj.availConfiguration),
    'BlackoutSlate': toJson_MediaLiveBlackoutSlate(obj.blackoutSlate),
    'CaptionDescriptions': obj.captionDescriptions?.map(y => toJson_MediaLiveCaptionDescription(y)),
    'FeatureActivations': toJson_MediaLiveFeatureActivations(obj.featureActivations),
    'GlobalConfiguration': toJson_MediaLiveGlobalConfiguration(obj.globalConfiguration),
    'MotionGraphicsConfiguration': toJson_MediaLiveMotionGraphicsConfiguration(obj.motionGraphicsConfiguration),
    'NielsenConfiguration': toJson_MediaLiveNielsenConfiguration(obj.nielsenConfiguration),
    'OutputGroups': obj.outputGroups?.map(y => toJson_MediaLiveOutputGroup(y)),
    'TimecodeConfig': toJson_MediaLiveTimecodeConfig(obj.timecodeConfig),
    'VideoDescriptions': obj.videoDescriptions?.map(y => toJson_MediaLiveVideoDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputAttachment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputAttachment(obj: MediaLiveInputAttachment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomaticInputFailoverSettings': toJson_MediaLiveAutomaticInputFailoverSettings(obj.automaticInputFailoverSettings),
    'InputAttachmentName': obj.inputAttachmentName,
    'InputId': obj.inputId,
    'InputSettings': toJson_MediaLiveInputSettings(obj.inputSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputSpecification(obj: MediaLiveInputSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Codec': obj.codec,
    'MaximumBitrate': obj.maximumBitrate,
    'Resolution': obj.resolution,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveVpcOutputSettings
 */
export interface MediaLiveVpcOutputSettings {
  /**
   * @schema MediaLiveVpcOutputSettings#PublicAddressAllocationIds
   */
  readonly publicAddressAllocationIds?: string[];

  /**
   * @schema MediaLiveVpcOutputSettings#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema MediaLiveVpcOutputSettings#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'MediaLiveVpcOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveVpcOutputSettings(obj: MediaLiveVpcOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicAddressAllocationIds': obj.publicAddressAllocationIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveChannel#Vpc
   */
  readonly vpc?: MediaLiveVpcOutputSettingsDescription;

}

/**
 * Converts an object of type 'MediaLiveChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveChannel(obj: MediaLiveChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CdiInputSpecification': toJson_MediaLiveCdiInputSpecification(obj.cdiInputSpecification),
    'ChannelClass': obj.channelClass,
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveOutputDestination(y)),
    'EgressEndpoints': obj.egressEndpoints?.map(y => toJson_MediaLiveChannelEgressEndpoint(y)),
    'EncoderSettings': toJson_MediaLiveEncoderSettings(obj.encoderSettings),
    'Id': obj.id,
    'InputAttachments': obj.inputAttachments?.map(y => toJson_MediaLiveInputAttachment(y)),
    'InputSpecification': toJson_MediaLiveInputSpecification(obj.inputSpecification),
    'LogLevel': obj.logLevel,
    'Name': obj.name,
    'PipelineDetails': obj.pipelineDetails?.map(y => toJson_MediaLivePipelineDetail(y)),
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'RoleArn': obj.roleArn,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Vpc': toJson_MediaLiveVpcOutputSettingsDescription(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputDestinationRequest(obj: MediaLiveInputDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputDeviceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputDeviceSettings(obj: MediaLiveInputDeviceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMediaConnectFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMediaConnectFlowRequest(obj: MediaLiveMediaConnectFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputSourceRequest(obj: MediaLiveInputSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PasswordParam': obj.passwordParam,
    'Url': obj.url,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'MediaLiveInputVpcRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputVpcRequest(obj: MediaLiveInputVpcRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MediaLiveInput#InputPartnerIds
   */
  readonly inputPartnerIds?: string[];

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
 * Converts an object of type 'MediaLiveInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInput(obj: MediaLiveInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AttachedChannels': obj.attachedChannels?.map(y => y),
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveInputDestination(y)),
    'Id': obj.id,
    'InputClass': obj.inputClass,
    'InputDevices': obj.inputDevices?.map(y => toJson_MediaLiveInputDeviceSettings(y)),
    'InputPartnerIds': obj.inputPartnerIds?.map(y => y),
    'InputSourceType': obj.inputSourceType,
    'MediaConnectFlows': obj.mediaConnectFlows?.map(y => toJson_MediaLiveMediaConnectFlow(y)),
    'Name': obj.name,
    'RoleArn': obj.roleArn,
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'Sources': obj.sources?.map(y => toJson_MediaLiveInputSource(y)),
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputWhitelistRuleCidr' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputWhitelistRuleCidr(obj: MediaLiveInputWhitelistRuleCidr | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cidr': obj.cidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputSecurityGroup(obj: MediaLiveInputSecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
    'Inputs': obj.inputs?.map(y => y),
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'WhitelistRules': obj.whitelistRules?.map(y => toJson_MediaLiveInputWhitelistRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly transportStreamBitrate?: number;

  /**
   * @schema MediaLiveMultiplexSettings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema MediaLiveMultiplexSettings#TransportStreamReservedBitrate
   */
  readonly transportStreamReservedBitrate?: number;

}

/**
 * Converts an object of type 'MediaLiveMultiplexSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexSettings(obj: MediaLiveMultiplexSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaximumVideoBufferDelayMilliseconds': obj.maximumVideoBufferDelayMilliseconds,
    'TransportStreamBitrate': obj.transportStreamBitrate,
    'TransportStreamId': obj.transportStreamId,
    'TransportStreamReservedBitrate': obj.transportStreamReservedBitrate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplex(obj: MediaLiveMultiplex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveMultiplexOutputDestination(y)),
    'Id': obj.id,
    'MultiplexSettings': toJson_MediaLiveMultiplexSettings(obj.multiplexSettings),
    'Name': obj.name,
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'ProgramCount': obj.programCount,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly programNumber?: number;

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
 * Converts an object of type 'MediaLiveMultiplexProgramSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexProgramSettings(obj: MediaLiveMultiplexProgramSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PreferredChannelPipeline': obj.preferredChannelPipeline,
    'ProgramNumber': obj.programNumber,
    'ServiceDescriptor': toJson_MediaLiveMultiplexProgramServiceDescriptor(obj.serviceDescriptor),
    'VideoSettings': toJson_MediaLiveMultiplexVideoSettings(obj.videoSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexProgram' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexProgram(obj: MediaLiveMultiplexProgram | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
    'MultiplexProgramSettings': toJson_MediaLiveMultiplexProgramSettings(obj.multiplexProgramSettings),
    'PacketIdentifiersMap': toJson_MediaLiveMultiplexProgramPacketIdentifiersMap(obj.packetIdentifiersMap),
    'PipelineDetails': obj.pipelineDetails?.map(y => toJson_MediaLiveMultiplexProgramPipelineDetail(y)),
    'ProgramName': obj.programName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveChannelEgressEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveChannelEgressEndpoint(obj: MediaLiveChannelEgressEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIp': obj.sourceIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MediaLivePipelineDetail#ActiveMotionGraphicsActionName
   */
  readonly activeMotionGraphicsActionName?: string;

  /**
   * @schema MediaLivePipelineDetail#ActiveMotionGraphicsUri
   */
  readonly activeMotionGraphicsUri?: string;

  /**
   * @schema MediaLivePipelineDetail#PipelineId
   */
  readonly pipelineId?: string;

}

/**
 * Converts an object of type 'MediaLivePipelineDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLivePipelineDetail(obj: MediaLivePipelineDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActiveInputAttachmentName': obj.activeInputAttachmentName,
    'ActiveInputSwitchActionName': obj.activeInputSwitchActionName,
    'ActiveMotionGraphicsActionName': obj.activeMotionGraphicsActionName,
    'ActiveMotionGraphicsUri': obj.activeMotionGraphicsUri,
    'PipelineId': obj.pipelineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveVpcOutputSettingsDescription
 */
export interface MediaLiveVpcOutputSettingsDescription {
  /**
   * @schema MediaLiveVpcOutputSettingsDescription#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema MediaLiveVpcOutputSettingsDescription#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema MediaLiveVpcOutputSettingsDescription#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema MediaLiveVpcOutputSettingsDescription#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'MediaLiveVpcOutputSettingsDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveVpcOutputSettingsDescription(obj: MediaLiveVpcOutputSettingsDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'NetworkInterfaceIds': obj.networkInterfaceIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexOutputDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexOutputDestination(obj: MediaLiveMultiplexOutputDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MediaConnectSettings': toJson_MediaLiveMultiplexMediaConnectOutputDestinationSettings(obj.mediaConnectSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexProgramPacketIdentifiersMap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexProgramPacketIdentifiersMap(obj: MediaLiveMultiplexProgramPacketIdentifiersMap | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioPids': obj.audioPids?.map(y => y),
    'DvbSubPids': obj.dvbSubPids?.map(y => y),
    'DvbTeletextPid': obj.dvbTeletextPid,
    'EtvPlatformPid': obj.etvPlatformPid,
    'EtvSignalPid': obj.etvSignalPid,
    'KlvDataPids': obj.klvDataPids?.map(y => y),
    'PcrPid': obj.pcrPid,
    'PmtPid': obj.pmtPid,
    'PrivateMetadataPid': obj.privateMetadataPid,
    'Scte27Pids': obj.scte27Pids?.map(y => y),
    'Scte35Pid': obj.scte35Pid,
    'TimedMetadataPid': obj.timedMetadataPid,
    'VideoPid': obj.videoPid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexProgramPipelineDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexProgramPipelineDetail(obj: MediaLiveMultiplexProgramPipelineDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActiveChannelPipeline': obj.activeChannelPipeline,
    'PipelineId': obj.pipelineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveReservationResourceSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveReservationResourceSpecification(obj: MediaLiveReservationResourceSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelClass': obj.channelClass,
    'Codec': obj.codec,
    'MaximumBitrate': obj.maximumBitrate,
    'MaximumFramerate': obj.maximumFramerate,
    'Resolution': obj.resolution,
    'ResourceType': obj.resourceType,
    'SpecialFeature': obj.specialFeature,
    'VideoQuality': obj.videoQuality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputDestination(obj: MediaLiveInputDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ip': obj.ip,
    'Port': obj.port,
    'Url': obj.url,
    'Vpc': toJson_MediaLiveInputDestinationVpc(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMediaConnectFlow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMediaConnectFlow(obj: MediaLiveMediaConnectFlow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputSource(obj: MediaLiveInputSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PasswordParam': obj.passwordParam,
    'Url': obj.url,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputDeviceHdSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputDeviceHdSettings(obj: MediaLiveInputDeviceHdSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActiveInput': obj.activeInput,
    'ConfiguredInput': obj.configuredInput,
    'DeviceState': obj.deviceState,
    'Framerate': obj.framerate,
    'Height': obj.height,
    'MaxBitrate': obj.maxBitrate,
    'ScanType': obj.scanType,
    'Width': obj.width,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputDeviceNetworkSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputDeviceNetworkSettings(obj: MediaLiveInputDeviceNetworkSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DnsAddresses': obj.dnsAddresses?.map(y => y),
    'Gateway': obj.gateway,
    'IpAddress': obj.ipAddress,
    'IpScheme': obj.ipScheme,
    'SubnetMask': obj.subnetMask,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveInputDeviceUhdSettings
 */
export interface MediaLiveInputDeviceUhdSettings {
  /**
   * @schema MediaLiveInputDeviceUhdSettings#ActiveInput
   */
  readonly activeInput?: string;

  /**
   * @schema MediaLiveInputDeviceUhdSettings#ConfiguredInput
   */
  readonly configuredInput?: string;

  /**
   * @schema MediaLiveInputDeviceUhdSettings#DeviceState
   */
  readonly deviceState?: string;

  /**
   * @schema MediaLiveInputDeviceUhdSettings#Framerate
   */
  readonly framerate?: number;

  /**
   * @schema MediaLiveInputDeviceUhdSettings#Height
   */
  readonly height?: number;

  /**
   * @schema MediaLiveInputDeviceUhdSettings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaLiveInputDeviceUhdSettings#ScanType
   */
  readonly scanType?: string;

  /**
   * @schema MediaLiveInputDeviceUhdSettings#Width
   */
  readonly width?: number;

}

/**
 * Converts an object of type 'MediaLiveInputDeviceUhdSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputDeviceUhdSettings(obj: MediaLiveInputDeviceUhdSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActiveInput': obj.activeInput,
    'ConfiguredInput': obj.configuredInput,
    'DeviceState': obj.deviceState,
    'Framerate': obj.framerate,
    'Height': obj.height,
    'MaxBitrate': obj.maxBitrate,
    'ScanType': obj.scanType,
    'Width': obj.width,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputWhitelistRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputWhitelistRule(obj: MediaLiveInputWhitelistRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cidr': obj.cidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveScheduleAction
 */
export interface MediaLiveScheduleAction {
  /**
   * @schema MediaLiveScheduleAction#ActionName
   */
  readonly actionName?: string;

  /**
   * @schema MediaLiveScheduleAction#ScheduleActionSettings
   */
  readonly scheduleActionSettings?: MediaLiveScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleAction#ScheduleActionStartSettings
   */
  readonly scheduleActionStartSettings?: MediaLiveScheduleActionStartSettings;

}

/**
 * Converts an object of type 'MediaLiveScheduleAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScheduleAction(obj: MediaLiveScheduleAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionName': obj.actionName,
    'ScheduleActionSettings': toJson_MediaLiveScheduleActionSettings(obj.scheduleActionSettings),
    'ScheduleActionStartSettings': toJson_MediaLiveScheduleActionStartSettings(obj.scheduleActionStartSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveChannelSummary#Vpc
   */
  readonly vpc?: MediaLiveVpcOutputSettingsDescription;

}

/**
 * Converts an object of type 'MediaLiveChannelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveChannelSummary(obj: MediaLiveChannelSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CdiInputSpecification': toJson_MediaLiveCdiInputSpecification(obj.cdiInputSpecification),
    'ChannelClass': obj.channelClass,
    'Destinations': obj.destinations?.map(y => toJson_MediaLiveOutputDestination(y)),
    'EgressEndpoints': obj.egressEndpoints?.map(y => toJson_MediaLiveChannelEgressEndpoint(y)),
    'Id': obj.id,
    'InputAttachments': obj.inputAttachments?.map(y => toJson_MediaLiveInputAttachment(y)),
    'InputSpecification': toJson_MediaLiveInputSpecification(obj.inputSpecification),
    'LogLevel': obj.logLevel,
    'Name': obj.name,
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'RoleArn': obj.roleArn,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Vpc': toJson_MediaLiveVpcOutputSettingsDescription(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveTransferringInputDeviceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveTransferringInputDeviceSummary(obj: MediaLiveTransferringInputDeviceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Message': obj.message,
    'TargetCustomerId': obj.targetCustomerId,
    'TransferType': obj.transferType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveInputDeviceSummary#UhdDeviceSettings
   */
  readonly uhdDeviceSettings?: MediaLiveInputDeviceUhdSettings;

}

/**
 * Converts an object of type 'MediaLiveInputDeviceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputDeviceSummary(obj: MediaLiveInputDeviceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ConnectionState': obj.connectionState,
    'DeviceSettingsSyncState': obj.deviceSettingsSyncState,
    'DeviceUpdateStatus': obj.deviceUpdateStatus,
    'HdDeviceSettings': toJson_MediaLiveInputDeviceHdSettings(obj.hdDeviceSettings),
    'Id': obj.id,
    'MacAddress': obj.macAddress,
    'Name': obj.name,
    'NetworkSettings': toJson_MediaLiveInputDeviceNetworkSettings(obj.networkSettings),
    'SerialNumber': obj.serialNumber,
    'Type': obj.type,
    'UhdDeviceSettings': toJson_MediaLiveInputDeviceUhdSettings(obj.uhdDeviceSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexProgramSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexProgramSummary(obj: MediaLiveMultiplexProgramSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
    'ProgramName': obj.programName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexSummary(obj: MediaLiveMultiplexSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'Id': obj.id,
    'MultiplexSettings': toJson_MediaLiveMultiplexSettingsSummary(obj.multiplexSettings),
    'Name': obj.name,
    'PipelinesRunningCount': obj.pipelinesRunningCount,
    'ProgramCount': obj.programCount,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveOffering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveOffering(obj: MediaLiveOffering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CurrencyCode': obj.currencyCode,
    'Duration': obj.duration,
    'DurationUnits': obj.durationUnits,
    'FixedPrice': obj.fixedPrice,
    'OfferingDescription': obj.offeringDescription,
    'OfferingId': obj.offeringId,
    'OfferingType': obj.offeringType,
    'Region': obj.region,
    'ResourceSpecification': toJson_MediaLiveReservationResourceSpecification(obj.resourceSpecification),
    'UsagePrice': obj.usagePrice,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveReservation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveReservation(obj: MediaLiveReservation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Count': obj.count,
    'CurrencyCode': obj.currencyCode,
    'Duration': obj.duration,
    'DurationUnits': obj.durationUnits,
    'End': obj.end,
    'FixedPrice': obj.fixedPrice,
    'Name': obj.name,
    'OfferingDescription': obj.offeringDescription,
    'OfferingId': obj.offeringId,
    'OfferingType': obj.offeringType,
    'Region': obj.region,
    'ReservationId': obj.reservationId,
    'ResourceSpecification': toJson_MediaLiveReservationResourceSpecification(obj.resourceSpecification),
    'Start': obj.start,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UsagePrice': obj.usagePrice,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputDeviceRequest(obj: MediaLiveInputDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputDeviceConfigurableSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputDeviceConfigurableSettings(obj: MediaLiveInputDeviceConfigurableSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfiguredInput': obj.configuredInput,
    'MaxBitrate': obj.maxBitrate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMediaPackageOutputDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMediaPackageOutputDestinationSettings(obj: MediaLiveMediaPackageOutputDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexProgramChannelDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexProgramChannelDestinationSettings(obj: MediaLiveMultiplexProgramChannelDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiplexId': obj.multiplexId,
    'ProgramName': obj.programName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveOutputDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveOutputDestinationSettings(obj: MediaLiveOutputDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PasswordParam': obj.passwordParam,
    'StreamName': obj.streamName,
    'Url': obj.url,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly audioSelectorName?: string;

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
  readonly name?: string;

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
 * Converts an object of type 'MediaLiveAudioDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioDescription(obj: MediaLiveAudioDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioNormalizationSettings': toJson_MediaLiveAudioNormalizationSettings(obj.audioNormalizationSettings),
    'AudioSelectorName': obj.audioSelectorName,
    'AudioType': obj.audioType,
    'AudioTypeControl': obj.audioTypeControl,
    'CodecSettings': toJson_MediaLiveAudioCodecSettings(obj.codecSettings),
    'LanguageCode': obj.languageCode,
    'LanguageCodeControl': obj.languageCodeControl,
    'Name': obj.name,
    'RemixSettings': toJson_MediaLiveRemixSettings(obj.remixSettings),
    'StreamName': obj.streamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveAvailBlanking' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAvailBlanking(obj: MediaLiveAvailBlanking | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailBlankingImage': toJson_MediaLiveInputLocation(obj.availBlankingImage),
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveAvailConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAvailConfiguration(obj: MediaLiveAvailConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailSettings': toJson_MediaLiveAvailSettings(obj.availSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBlackoutSlate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBlackoutSlate(obj: MediaLiveBlackoutSlate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlackoutSlateImage': toJson_MediaLiveInputLocation(obj.blackoutSlateImage),
    'NetworkEndBlackout': obj.networkEndBlackout,
    'NetworkEndBlackoutImage': toJson_MediaLiveInputLocation(obj.networkEndBlackoutImage),
    'NetworkId': obj.networkId,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveCaptionDescription
 */
export interface MediaLiveCaptionDescription {
  /**
   * @schema MediaLiveCaptionDescription#CaptionSelectorName
   */
  readonly captionSelectorName?: string;

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
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaLiveCaptionDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCaptionDescription(obj: MediaLiveCaptionDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CaptionSelectorName': obj.captionSelectorName,
    'DestinationSettings': toJson_MediaLiveCaptionDestinationSettings(obj.destinationSettings),
    'LanguageCode': obj.languageCode,
    'LanguageDescription': obj.languageDescription,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveFeatureActivations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFeatureActivations(obj: MediaLiveFeatureActivations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputPrepareScheduleActions': obj.inputPrepareScheduleActions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveGlobalConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveGlobalConfiguration(obj: MediaLiveGlobalConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InitialAudioGain': obj.initialAudioGain,
    'InputEndAction': obj.inputEndAction,
    'InputLossBehavior': toJson_MediaLiveInputLossBehavior(obj.inputLossBehavior),
    'OutputLockingMode': obj.outputLockingMode,
    'OutputTimingSource': obj.outputTimingSource,
    'SupportLowFramerateInputs': obj.supportLowFramerateInputs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveMotionGraphicsConfiguration
 */
export interface MediaLiveMotionGraphicsConfiguration {
  /**
   * @schema MediaLiveMotionGraphicsConfiguration#MotionGraphicsInsertion
   */
  readonly motionGraphicsInsertion?: string;

  /**
   * @schema MediaLiveMotionGraphicsConfiguration#MotionGraphicsSettings
   */
  readonly motionGraphicsSettings?: MediaLiveMotionGraphicsSettings;

}

/**
 * Converts an object of type 'MediaLiveMotionGraphicsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMotionGraphicsConfiguration(obj: MediaLiveMotionGraphicsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MotionGraphicsInsertion': obj.motionGraphicsInsertion,
    'MotionGraphicsSettings': toJson_MediaLiveMotionGraphicsSettings(obj.motionGraphicsSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveNielsenConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveNielsenConfiguration(obj: MediaLiveNielsenConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributorId': obj.distributorId,
    'NielsenPcmToId3Tagging': obj.nielsenPcmToId3Tagging,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly outputGroupSettings?: MediaLiveOutputGroupSettings;

  /**
   * @schema MediaLiveOutputGroup#Outputs
   */
  readonly outputs?: MediaLiveOutput[];

}

/**
 * Converts an object of type 'MediaLiveOutputGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveOutputGroup(obj: MediaLiveOutputGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'OutputGroupSettings': toJson_MediaLiveOutputGroupSettings(obj.outputGroupSettings),
    'Outputs': obj.outputs?.map(y => toJson_MediaLiveOutput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveTimecodeConfig
 */
export interface MediaLiveTimecodeConfig {
  /**
   * @schema MediaLiveTimecodeConfig#Source
   */
  readonly source?: string;

  /**
   * @schema MediaLiveTimecodeConfig#SyncThreshold
   */
  readonly syncThreshold?: number;

}

/**
 * Converts an object of type 'MediaLiveTimecodeConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveTimecodeConfig(obj: MediaLiveTimecodeConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Source': obj.source,
    'SyncThreshold': obj.syncThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly name?: string;

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
 * Converts an object of type 'MediaLiveVideoDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveVideoDescription(obj: MediaLiveVideoDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodecSettings': toJson_MediaLiveVideoCodecSettings(obj.codecSettings),
    'Height': obj.height,
    'Name': obj.name,
    'RespondToAfd': obj.respondToAfd,
    'ScalingBehavior': obj.scalingBehavior,
    'Sharpness': obj.sharpness,
    'Width': obj.width,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly secondaryInputId?: string;

}

/**
 * Converts an object of type 'MediaLiveAutomaticInputFailoverSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAutomaticInputFailoverSettings(obj: MediaLiveAutomaticInputFailoverSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorClearTimeMsec': obj.errorClearTimeMsec,
    'FailoverConditions': obj.failoverConditions?.map(y => toJson_MediaLiveFailoverCondition(y)),
    'InputPreference': obj.inputPreference,
    'SecondaryInputId': obj.secondaryInputId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputSettings(obj: MediaLiveInputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioSelectors': obj.audioSelectors?.map(y => toJson_MediaLiveAudioSelector(y)),
    'CaptionSelectors': obj.captionSelectors?.map(y => toJson_MediaLiveCaptionSelector(y)),
    'DeblockFilter': obj.deblockFilter,
    'DenoiseFilter': obj.denoiseFilter,
    'FilterStrength': obj.filterStrength,
    'InputFilter': obj.inputFilter,
    'NetworkInputSettings': toJson_MediaLiveNetworkInputSettings(obj.networkInputSettings),
    'Smpte2038DataPreference': obj.smpte2038DataPreference,
    'SourceEndBehavior': obj.sourceEndBehavior,
    'VideoSelector': toJson_MediaLiveVideoSelector(obj.videoSelector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveMultiplexProgramServiceDescriptor
 */
export interface MediaLiveMultiplexProgramServiceDescriptor {
  /**
   * @schema MediaLiveMultiplexProgramServiceDescriptor#ProviderName
   */
  readonly providerName?: string;

  /**
   * @schema MediaLiveMultiplexProgramServiceDescriptor#ServiceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'MediaLiveMultiplexProgramServiceDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexProgramServiceDescriptor(obj: MediaLiveMultiplexProgramServiceDescriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProviderName': obj.providerName,
    'ServiceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexVideoSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexVideoSettings(obj: MediaLiveMultiplexVideoSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstantBitrate': obj.constantBitrate,
    'StatmuxSettings': toJson_MediaLiveMultiplexStatmuxVideoSettings(obj.statmuxSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexMediaConnectOutputDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexMediaConnectOutputDestinationSettings(obj: MediaLiveMultiplexMediaConnectOutputDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntitlementArn': obj.entitlementArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputDestinationVpc' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputDestinationVpc(obj: MediaLiveInputDestinationVpc | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZone': obj.availabilityZone,
    'NetworkInterfaceId': obj.networkInterfaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MediaLiveScheduleActionSettings#MotionGraphicsImageActivateSettings
   */
  readonly motionGraphicsImageActivateSettings?: MediaLiveMotionGraphicsActivateScheduleActionSettings;

  /**
   * @schema MediaLiveScheduleActionSettings#MotionGraphicsImageDeactivateSettings
   */
  readonly motionGraphicsImageDeactivateSettings?: MediaLiveMotionGraphicsDeactivateScheduleActionSettings;

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
 * Converts an object of type 'MediaLiveScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScheduleActionSettings(obj: MediaLiveScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HlsId3SegmentTaggingSettings': toJson_MediaLiveHlsId3SegmentTaggingScheduleActionSettings(obj.hlsId3SegmentTaggingSettings),
    'HlsTimedMetadataSettings': toJson_MediaLiveHlsTimedMetadataScheduleActionSettings(obj.hlsTimedMetadataSettings),
    'InputPrepareSettings': toJson_MediaLiveInputPrepareScheduleActionSettings(obj.inputPrepareSettings),
    'InputSwitchSettings': toJson_MediaLiveInputSwitchScheduleActionSettings(obj.inputSwitchSettings),
    'MotionGraphicsImageActivateSettings': toJson_MediaLiveMotionGraphicsActivateScheduleActionSettings(obj.motionGraphicsImageActivateSettings),
    'MotionGraphicsImageDeactivateSettings': toJson_MediaLiveMotionGraphicsDeactivateScheduleActionSettings(obj.motionGraphicsImageDeactivateSettings),
    'PauseStateSettings': toJson_MediaLivePauseStateScheduleActionSettings(obj.pauseStateSettings),
    'Scte35ReturnToNetworkSettings': toJson_MediaLiveScte35ReturnToNetworkScheduleActionSettings(obj.scte35ReturnToNetworkSettings),
    'Scte35SpliceInsertSettings': toJson_MediaLiveScte35SpliceInsertScheduleActionSettings(obj.scte35SpliceInsertSettings),
    'Scte35TimeSignalSettings': toJson_MediaLiveScte35TimeSignalScheduleActionSettings(obj.scte35TimeSignalSettings),
    'StaticImageActivateSettings': toJson_MediaLiveStaticImageActivateScheduleActionSettings(obj.staticImageActivateSettings),
    'StaticImageDeactivateSettings': toJson_MediaLiveStaticImageDeactivateScheduleActionSettings(obj.staticImageDeactivateSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveScheduleActionStartSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScheduleActionStartSettings(obj: MediaLiveScheduleActionStartSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FixedModeScheduleActionStartSettings': toJson_MediaLiveFixedModeScheduleActionStartSettings(obj.fixedModeScheduleActionStartSettings),
    'FollowModeScheduleActionStartSettings': toJson_MediaLiveFollowModeScheduleActionStartSettings(obj.followModeScheduleActionStartSettings),
    'ImmediateModeScheduleActionStartSettings': toJson_MediaLiveImmediateModeScheduleActionStartSettings(obj.immediateModeScheduleActionStartSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexSettingsSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexSettingsSummary(obj: MediaLiveMultiplexSettingsSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransportStreamBitrate': obj.transportStreamBitrate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveAudioNormalizationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioNormalizationSettings(obj: MediaLiveAudioNormalizationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Algorithm': obj.algorithm,
    'AlgorithmControl': obj.algorithmControl,
    'TargetLkfs': obj.targetLkfs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveAudioCodecSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioCodecSettings(obj: MediaLiveAudioCodecSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AacSettings': toJson_MediaLiveAacSettings(obj.aacSettings),
    'Ac3Settings': toJson_MediaLiveAc3Settings(obj.ac3Settings),
    'Eac3Settings': toJson_MediaLiveEac3Settings(obj.eac3Settings),
    'Mp2Settings': toJson_MediaLiveMp2Settings(obj.mp2Settings),
    'PassThroughSettings': toJson_MediaLivePassThroughSettings(obj.passThroughSettings),
    'WavSettings': toJson_MediaLiveWavSettings(obj.wavSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveRemixSettings
 */
export interface MediaLiveRemixSettings {
  /**
   * @schema MediaLiveRemixSettings#ChannelMappings
   */
  readonly channelMappings?: MediaLiveAudioChannelMapping[];

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
 * Converts an object of type 'MediaLiveRemixSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveRemixSettings(obj: MediaLiveRemixSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelMappings': obj.channelMappings?.map(y => toJson_MediaLiveAudioChannelMapping(y)),
    'ChannelsIn': obj.channelsIn,
    'ChannelsOut': obj.channelsOut,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly uri?: string;

  /**
   * @schema MediaLiveInputLocation#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'MediaLiveInputLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputLocation(obj: MediaLiveInputLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PasswordParam': obj.passwordParam,
    'Uri': obj.uri,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveAvailSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAvailSettings(obj: MediaLiveAvailSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scte35SpliceInsert': toJson_MediaLiveScte35SpliceInsert(obj.scte35SpliceInsert),
    'Scte35TimeSignalApos': toJson_MediaLiveScte35TimeSignalApos(obj.scte35TimeSignalApos),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveCaptionDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCaptionDestinationSettings(obj: MediaLiveCaptionDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AribDestinationSettings': toJson_MediaLiveAribDestinationSettings(obj.aribDestinationSettings),
    'BurnInDestinationSettings': toJson_MediaLiveBurnInDestinationSettings(obj.burnInDestinationSettings),
    'DvbSubDestinationSettings': toJson_MediaLiveDvbSubDestinationSettings(obj.dvbSubDestinationSettings),
    'EbuTtDDestinationSettings': toJson_MediaLiveEbuTtDDestinationSettings(obj.ebuTtDDestinationSettings),
    'EmbeddedDestinationSettings': toJson_MediaLiveEmbeddedDestinationSettings(obj.embeddedDestinationSettings),
    'EmbeddedPlusScte20DestinationSettings': toJson_MediaLiveEmbeddedPlusScte20DestinationSettings(obj.embeddedPlusScte20DestinationSettings),
    'RtmpCaptionInfoDestinationSettings': toJson_MediaLiveRtmpCaptionInfoDestinationSettings(obj.rtmpCaptionInfoDestinationSettings),
    'Scte20PlusEmbeddedDestinationSettings': toJson_MediaLiveScte20PlusEmbeddedDestinationSettings(obj.scte20PlusEmbeddedDestinationSettings),
    'Scte27DestinationSettings': toJson_MediaLiveScte27DestinationSettings(obj.scte27DestinationSettings),
    'SmpteTtDestinationSettings': toJson_MediaLiveSmpteTtDestinationSettings(obj.smpteTtDestinationSettings),
    'TeletextDestinationSettings': toJson_MediaLiveTeletextDestinationSettings(obj.teletextDestinationSettings),
    'TtmlDestinationSettings': toJson_MediaLiveTtmlDestinationSettings(obj.ttmlDestinationSettings),
    'WebvttDestinationSettings': toJson_MediaLiveWebvttDestinationSettings(obj.webvttDestinationSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputLossBehavior' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputLossBehavior(obj: MediaLiveInputLossBehavior | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlackFrameMsec': obj.blackFrameMsec,
    'InputLossImageColor': obj.inputLossImageColor,
    'InputLossImageSlate': toJson_MediaLiveInputLocation(obj.inputLossImageSlate),
    'InputLossImageType': obj.inputLossImageType,
    'RepeatFrameMsec': obj.repeatFrameMsec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveMotionGraphicsSettings
 */
export interface MediaLiveMotionGraphicsSettings {
  /**
   * @schema MediaLiveMotionGraphicsSettings#HtmlMotionGraphicsSettings
   */
  readonly htmlMotionGraphicsSettings?: MediaLiveHtmlMotionGraphicsSettings;

}

/**
 * Converts an object of type 'MediaLiveMotionGraphicsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMotionGraphicsSettings(obj: MediaLiveMotionGraphicsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HtmlMotionGraphicsSettings': toJson_MediaLiveHtmlMotionGraphicsSettings(obj.htmlMotionGraphicsSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveOutputGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveOutputGroupSettings(obj: MediaLiveOutputGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveGroupSettings': toJson_MediaLiveArchiveGroupSettings(obj.archiveGroupSettings),
    'FrameCaptureGroupSettings': toJson_MediaLiveFrameCaptureGroupSettings(obj.frameCaptureGroupSettings),
    'HlsGroupSettings': toJson_MediaLiveHlsGroupSettings(obj.hlsGroupSettings),
    'MediaPackageGroupSettings': toJson_MediaLiveMediaPackageGroupSettings(obj.mediaPackageGroupSettings),
    'MsSmoothGroupSettings': toJson_MediaLiveMsSmoothGroupSettings(obj.msSmoothGroupSettings),
    'MultiplexGroupSettings': toJson_MediaLiveMultiplexGroupSettings(obj.multiplexGroupSettings),
    'RtmpGroupSettings': toJson_MediaLiveRtmpGroupSettings(obj.rtmpGroupSettings),
    'UdpGroupSettings': toJson_MediaLiveUdpGroupSettings(obj.udpGroupSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly outputSettings?: MediaLiveOutputSettings;

  /**
   * @schema MediaLiveOutput#VideoDescriptionName
   */
  readonly videoDescriptionName?: string;

}

/**
 * Converts an object of type 'MediaLiveOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveOutput(obj: MediaLiveOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioDescriptionNames': obj.audioDescriptionNames?.map(y => y),
    'CaptionDescriptionNames': obj.captionDescriptionNames?.map(y => y),
    'OutputName': obj.outputName,
    'OutputSettings': toJson_MediaLiveOutputSettings(obj.outputSettings),
    'VideoDescriptionName': obj.videoDescriptionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveVideoCodecSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveVideoCodecSettings(obj: MediaLiveVideoCodecSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FrameCaptureSettings': toJson_MediaLiveFrameCaptureSettings(obj.frameCaptureSettings),
    'H264Settings': toJson_MediaLiveH264Settings(obj.h264Settings),
    'H265Settings': toJson_MediaLiveH265Settings(obj.h265Settings),
    'Mpeg2Settings': toJson_MediaLiveMpeg2Settings(obj.mpeg2Settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveFailoverCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFailoverCondition(obj: MediaLiveFailoverCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailoverConditionSettings': toJson_MediaLiveFailoverConditionSettings(obj.failoverConditionSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAudioSelector
 */
export interface MediaLiveAudioSelector {
  /**
   * @schema MediaLiveAudioSelector#Name
   */
  readonly name?: string;

  /**
   * @schema MediaLiveAudioSelector#SelectorSettings
   */
  readonly selectorSettings?: MediaLiveAudioSelectorSettings;

}

/**
 * Converts an object of type 'MediaLiveAudioSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioSelector(obj: MediaLiveAudioSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SelectorSettings': toJson_MediaLiveAudioSelectorSettings(obj.selectorSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly name?: string;

  /**
   * @schema MediaLiveCaptionSelector#SelectorSettings
   */
  readonly selectorSettings?: MediaLiveCaptionSelectorSettings;

}

/**
 * Converts an object of type 'MediaLiveCaptionSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCaptionSelector(obj: MediaLiveCaptionSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LanguageCode': obj.languageCode,
    'Name': obj.name,
    'SelectorSettings': toJson_MediaLiveCaptionSelectorSettings(obj.selectorSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveNetworkInputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveNetworkInputSettings(obj: MediaLiveNetworkInputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HlsInputSettings': toJson_MediaLiveHlsInputSettings(obj.hlsInputSettings),
    'ServerValidation': obj.serverValidation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveVideoSelector
 */
export interface MediaLiveVideoSelector {
  /**
   * @schema MediaLiveVideoSelector#ColorSpace
   */
  readonly colorSpace?: string;

  /**
   * @schema MediaLiveVideoSelector#ColorSpaceSettings
   */
  readonly colorSpaceSettings?: MediaLiveVideoSelectorColorSpaceSettings;

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
 * Converts an object of type 'MediaLiveVideoSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveVideoSelector(obj: MediaLiveVideoSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColorSpace': obj.colorSpace,
    'ColorSpaceSettings': toJson_MediaLiveVideoSelectorColorSpaceSettings(obj.colorSpaceSettings),
    'ColorSpaceUsage': obj.colorSpaceUsage,
    'SelectorSettings': toJson_MediaLiveVideoSelectorSettings(obj.selectorSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMultiplexStatmuxVideoSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexStatmuxVideoSettings(obj: MediaLiveMultiplexStatmuxVideoSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaximumBitrate': obj.maximumBitrate,
    'MinimumBitrate': obj.minimumBitrate,
    'Priority': obj.priority,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveHlsId3SegmentTaggingScheduleActionSettings
 */
export interface MediaLiveHlsId3SegmentTaggingScheduleActionSettings {
  /**
   * @schema MediaLiveHlsId3SegmentTaggingScheduleActionSettings#Tag
   */
  readonly tag?: string;

}

/**
 * Converts an object of type 'MediaLiveHlsId3SegmentTaggingScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsId3SegmentTaggingScheduleActionSettings(obj: MediaLiveHlsId3SegmentTaggingScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tag': obj.tag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveHlsTimedMetadataScheduleActionSettings
 */
export interface MediaLiveHlsTimedMetadataScheduleActionSettings {
  /**
   * @schema MediaLiveHlsTimedMetadataScheduleActionSettings#Id3
   */
  readonly id3?: string;

}

/**
 * Converts an object of type 'MediaLiveHlsTimedMetadataScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsTimedMetadataScheduleActionSettings(obj: MediaLiveHlsTimedMetadataScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id3': obj.id3,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputPrepareScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputPrepareScheduleActionSettings(obj: MediaLiveInputPrepareScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputAttachmentNameReference': obj.inputAttachmentNameReference,
    'InputClippingSettings': toJson_MediaLiveInputClippingSettings(obj.inputClippingSettings),
    'UrlPath': obj.urlPath?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveInputSwitchScheduleActionSettings
 */
export interface MediaLiveInputSwitchScheduleActionSettings {
  /**
   * @schema MediaLiveInputSwitchScheduleActionSettings#InputAttachmentNameReference
   */
  readonly inputAttachmentNameReference?: string;

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
 * Converts an object of type 'MediaLiveInputSwitchScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputSwitchScheduleActionSettings(obj: MediaLiveInputSwitchScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputAttachmentNameReference': obj.inputAttachmentNameReference,
    'InputClippingSettings': toJson_MediaLiveInputClippingSettings(obj.inputClippingSettings),
    'UrlPath': obj.urlPath?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveMotionGraphicsActivateScheduleActionSettings
 */
export interface MediaLiveMotionGraphicsActivateScheduleActionSettings {
  /**
   * @schema MediaLiveMotionGraphicsActivateScheduleActionSettings#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaLiveMotionGraphicsActivateScheduleActionSettings#PasswordParam
   */
  readonly passwordParam?: string;

  /**
   * @schema MediaLiveMotionGraphicsActivateScheduleActionSettings#Url
   */
  readonly url?: string;

  /**
   * @schema MediaLiveMotionGraphicsActivateScheduleActionSettings#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'MediaLiveMotionGraphicsActivateScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMotionGraphicsActivateScheduleActionSettings(obj: MediaLiveMotionGraphicsActivateScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Duration': obj.duration,
    'PasswordParam': obj.passwordParam,
    'Url': obj.url,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveMotionGraphicsDeactivateScheduleActionSettings
 */
export interface MediaLiveMotionGraphicsDeactivateScheduleActionSettings {
}

/**
 * Converts an object of type 'MediaLiveMotionGraphicsDeactivateScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMotionGraphicsDeactivateScheduleActionSettings(obj: MediaLiveMotionGraphicsDeactivateScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLivePauseStateScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLivePauseStateScheduleActionSettings(obj: MediaLivePauseStateScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pipelines': obj.pipelines?.map(y => toJson_MediaLivePipelinePauseStateSettings(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveScte35ReturnToNetworkScheduleActionSettings
 */
export interface MediaLiveScte35ReturnToNetworkScheduleActionSettings {
  /**
   * @schema MediaLiveScte35ReturnToNetworkScheduleActionSettings#SpliceEventId
   */
  readonly spliceEventId?: number;

}

/**
 * Converts an object of type 'MediaLiveScte35ReturnToNetworkScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte35ReturnToNetworkScheduleActionSettings(obj: MediaLiveScte35ReturnToNetworkScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SpliceEventId': obj.spliceEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly spliceEventId?: number;

}

/**
 * Converts an object of type 'MediaLiveScte35SpliceInsertScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte35SpliceInsertScheduleActionSettings(obj: MediaLiveScte35SpliceInsertScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Duration': obj.duration,
    'SpliceEventId': obj.spliceEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveScte35TimeSignalScheduleActionSettings
 */
export interface MediaLiveScte35TimeSignalScheduleActionSettings {
  /**
   * @schema MediaLiveScte35TimeSignalScheduleActionSettings#Scte35Descriptors
   */
  readonly scte35Descriptors?: MediaLiveScte35Descriptor[];

}

/**
 * Converts an object of type 'MediaLiveScte35TimeSignalScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte35TimeSignalScheduleActionSettings(obj: MediaLiveScte35TimeSignalScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scte35Descriptors': obj.scte35Descriptors?.map(y => toJson_MediaLiveScte35Descriptor(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly image?: MediaLiveInputLocation;

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
 * Converts an object of type 'MediaLiveStaticImageActivateScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStaticImageActivateScheduleActionSettings(obj: MediaLiveStaticImageActivateScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Duration': obj.duration,
    'FadeIn': obj.fadeIn,
    'FadeOut': obj.fadeOut,
    'Height': obj.height,
    'Image': toJson_MediaLiveInputLocation(obj.image),
    'ImageX': obj.imageX,
    'ImageY': obj.imageY,
    'Layer': obj.layer,
    'Opacity': obj.opacity,
    'Width': obj.width,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveStaticImageDeactivateScheduleActionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStaticImageDeactivateScheduleActionSettings(obj: MediaLiveStaticImageDeactivateScheduleActionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FadeOut': obj.fadeOut,
    'Layer': obj.layer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveFixedModeScheduleActionStartSettings
 */
export interface MediaLiveFixedModeScheduleActionStartSettings {
  /**
   * @schema MediaLiveFixedModeScheduleActionStartSettings#Time
   */
  readonly time?: string;

}

/**
 * Converts an object of type 'MediaLiveFixedModeScheduleActionStartSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFixedModeScheduleActionStartSettings(obj: MediaLiveFixedModeScheduleActionStartSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Time': obj.time,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveFollowModeScheduleActionStartSettings
 */
export interface MediaLiveFollowModeScheduleActionStartSettings {
  /**
   * @schema MediaLiveFollowModeScheduleActionStartSettings#FollowPoint
   */
  readonly followPoint?: string;

  /**
   * @schema MediaLiveFollowModeScheduleActionStartSettings#ReferenceActionName
   */
  readonly referenceActionName?: string;

}

/**
 * Converts an object of type 'MediaLiveFollowModeScheduleActionStartSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFollowModeScheduleActionStartSettings(obj: MediaLiveFollowModeScheduleActionStartSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FollowPoint': obj.followPoint,
    'ReferenceActionName': obj.referenceActionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveImmediateModeScheduleActionStartSettings
 */
export interface MediaLiveImmediateModeScheduleActionStartSettings {
}

/**
 * Converts an object of type 'MediaLiveImmediateModeScheduleActionStartSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveImmediateModeScheduleActionStartSettings(obj: MediaLiveImmediateModeScheduleActionStartSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveAacSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAacSettings(obj: MediaLiveAacSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bitrate': obj.bitrate,
    'CodingMode': obj.codingMode,
    'InputType': obj.inputType,
    'Profile': obj.profile,
    'RateControlMode': obj.rateControlMode,
    'RawFormat': obj.rawFormat,
    'SampleRate': obj.sampleRate,
    'Spec': obj.spec,
    'VbrQuality': obj.vbrQuality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveAc3Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAc3Settings(obj: MediaLiveAc3Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bitrate': obj.bitrate,
    'BitstreamMode': obj.bitstreamMode,
    'CodingMode': obj.codingMode,
    'Dialnorm': obj.dialnorm,
    'DrcProfile': obj.drcProfile,
    'LfeFilter': obj.lfeFilter,
    'MetadataControl': obj.metadataControl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveEac3Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveEac3Settings(obj: MediaLiveEac3Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttenuationControl': obj.attenuationControl,
    'Bitrate': obj.bitrate,
    'BitstreamMode': obj.bitstreamMode,
    'CodingMode': obj.codingMode,
    'DcFilter': obj.dcFilter,
    'Dialnorm': obj.dialnorm,
    'DrcLine': obj.drcLine,
    'DrcRf': obj.drcRf,
    'LfeControl': obj.lfeControl,
    'LfeFilter': obj.lfeFilter,
    'LoRoCenterMixLevel': obj.loRoCenterMixLevel,
    'LoRoSurroundMixLevel': obj.loRoSurroundMixLevel,
    'LtRtCenterMixLevel': obj.ltRtCenterMixLevel,
    'LtRtSurroundMixLevel': obj.ltRtSurroundMixLevel,
    'MetadataControl': obj.metadataControl,
    'PassthroughControl': obj.passthroughControl,
    'PhaseControl': obj.phaseControl,
    'StereoDownmix': obj.stereoDownmix,
    'SurroundExMode': obj.surroundExMode,
    'SurroundMode': obj.surroundMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMp2Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMp2Settings(obj: MediaLiveMp2Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bitrate': obj.bitrate,
    'CodingMode': obj.codingMode,
    'SampleRate': obj.sampleRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLivePassThroughSettings
 */
export interface MediaLivePassThroughSettings {
}

/**
 * Converts an object of type 'MediaLivePassThroughSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLivePassThroughSettings(obj: MediaLivePassThroughSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveWavSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveWavSettings(obj: MediaLiveWavSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BitDepth': obj.bitDepth,
    'CodingMode': obj.codingMode,
    'SampleRate': obj.sampleRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAudioChannelMapping
 */
export interface MediaLiveAudioChannelMapping {
  /**
   * @schema MediaLiveAudioChannelMapping#InputChannelLevels
   */
  readonly inputChannelLevels?: MediaLiveInputChannelLevel[];

  /**
   * @schema MediaLiveAudioChannelMapping#OutputChannel
   */
  readonly outputChannel?: number;

}

/**
 * Converts an object of type 'MediaLiveAudioChannelMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioChannelMapping(obj: MediaLiveAudioChannelMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputChannelLevels': obj.inputChannelLevels?.map(y => toJson_MediaLiveInputChannelLevel(y)),
    'OutputChannel': obj.outputChannel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveScte35SpliceInsert' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte35SpliceInsert(obj: MediaLiveScte35SpliceInsert | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdAvailOffset': obj.adAvailOffset,
    'NoRegionalBlackoutFlag': obj.noRegionalBlackoutFlag,
    'WebDeliveryAllowedFlag': obj.webDeliveryAllowedFlag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveScte35TimeSignalApos' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte35TimeSignalApos(obj: MediaLiveScte35TimeSignalApos | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdAvailOffset': obj.adAvailOffset,
    'NoRegionalBlackoutFlag': obj.noRegionalBlackoutFlag,
    'WebDeliveryAllowedFlag': obj.webDeliveryAllowedFlag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAribDestinationSettings
 */
export interface MediaLiveAribDestinationSettings {
}

/**
 * Converts an object of type 'MediaLiveAribDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAribDestinationSettings(obj: MediaLiveAribDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveBurnInDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveBurnInDestinationSettings(obj: MediaLiveBurnInDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alignment': obj.alignment,
    'BackgroundColor': obj.backgroundColor,
    'BackgroundOpacity': obj.backgroundOpacity,
    'Font': toJson_MediaLiveInputLocation(obj.font),
    'FontColor': obj.fontColor,
    'FontOpacity': obj.fontOpacity,
    'FontResolution': obj.fontResolution,
    'FontSize': obj.fontSize,
    'OutlineColor': obj.outlineColor,
    'OutlineSize': obj.outlineSize,
    'ShadowColor': obj.shadowColor,
    'ShadowOpacity': obj.shadowOpacity,
    'ShadowXOffset': obj.shadowXOffset,
    'ShadowYOffset': obj.shadowYOffset,
    'TeletextGridControl': obj.teletextGridControl,
    'XPosition': obj.xPosition,
    'YPosition': obj.yPosition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDvbSubDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDvbSubDestinationSettings(obj: MediaLiveDvbSubDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alignment': obj.alignment,
    'BackgroundColor': obj.backgroundColor,
    'BackgroundOpacity': obj.backgroundOpacity,
    'Font': toJson_MediaLiveInputLocation(obj.font),
    'FontColor': obj.fontColor,
    'FontOpacity': obj.fontOpacity,
    'FontResolution': obj.fontResolution,
    'FontSize': obj.fontSize,
    'OutlineColor': obj.outlineColor,
    'OutlineSize': obj.outlineSize,
    'ShadowColor': obj.shadowColor,
    'ShadowOpacity': obj.shadowOpacity,
    'ShadowXOffset': obj.shadowXOffset,
    'ShadowYOffset': obj.shadowYOffset,
    'TeletextGridControl': obj.teletextGridControl,
    'XPosition': obj.xPosition,
    'YPosition': obj.yPosition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveEbuTtDDestinationSettings
 */
export interface MediaLiveEbuTtDDestinationSettings {
  /**
   * @schema MediaLiveEbuTtDDestinationSettings#CopyrightHolder
   */
  readonly copyrightHolder?: string;

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
 * Converts an object of type 'MediaLiveEbuTtDDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveEbuTtDDestinationSettings(obj: MediaLiveEbuTtDDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CopyrightHolder': obj.copyrightHolder,
    'FillLineGap': obj.fillLineGap,
    'FontFamily': obj.fontFamily,
    'StyleControl': obj.styleControl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveEmbeddedDestinationSettings
 */
export interface MediaLiveEmbeddedDestinationSettings {
}

/**
 * Converts an object of type 'MediaLiveEmbeddedDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveEmbeddedDestinationSettings(obj: MediaLiveEmbeddedDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveEmbeddedPlusScte20DestinationSettings
 */
export interface MediaLiveEmbeddedPlusScte20DestinationSettings {
}

/**
 * Converts an object of type 'MediaLiveEmbeddedPlusScte20DestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveEmbeddedPlusScte20DestinationSettings(obj: MediaLiveEmbeddedPlusScte20DestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveRtmpCaptionInfoDestinationSettings
 */
export interface MediaLiveRtmpCaptionInfoDestinationSettings {
}

/**
 * Converts an object of type 'MediaLiveRtmpCaptionInfoDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveRtmpCaptionInfoDestinationSettings(obj: MediaLiveRtmpCaptionInfoDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveScte20PlusEmbeddedDestinationSettings
 */
export interface MediaLiveScte20PlusEmbeddedDestinationSettings {
}

/**
 * Converts an object of type 'MediaLiveScte20PlusEmbeddedDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte20PlusEmbeddedDestinationSettings(obj: MediaLiveScte20PlusEmbeddedDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveScte27DestinationSettings
 */
export interface MediaLiveScte27DestinationSettings {
}

/**
 * Converts an object of type 'MediaLiveScte27DestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte27DestinationSettings(obj: MediaLiveScte27DestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveSmpteTtDestinationSettings
 */
export interface MediaLiveSmpteTtDestinationSettings {
}

/**
 * Converts an object of type 'MediaLiveSmpteTtDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveSmpteTtDestinationSettings(obj: MediaLiveSmpteTtDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveTeletextDestinationSettings
 */
export interface MediaLiveTeletextDestinationSettings {
}

/**
 * Converts an object of type 'MediaLiveTeletextDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveTeletextDestinationSettings(obj: MediaLiveTeletextDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveTtmlDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveTtmlDestinationSettings(obj: MediaLiveTtmlDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StyleControl': obj.styleControl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveWebvttDestinationSettings
 */
export interface MediaLiveWebvttDestinationSettings {
  /**
   * @schema MediaLiveWebvttDestinationSettings#StyleControl
   */
  readonly styleControl?: string;

}

/**
 * Converts an object of type 'MediaLiveWebvttDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveWebvttDestinationSettings(obj: MediaLiveWebvttDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StyleControl': obj.styleControl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveHtmlMotionGraphicsSettings
 */
export interface MediaLiveHtmlMotionGraphicsSettings {
}

/**
 * Converts an object of type 'MediaLiveHtmlMotionGraphicsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHtmlMotionGraphicsSettings(obj: MediaLiveHtmlMotionGraphicsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveArchiveGroupSettings
 */
export interface MediaLiveArchiveGroupSettings {
  /**
   * @schema MediaLiveArchiveGroupSettings#ArchiveCdnSettings
   */
  readonly archiveCdnSettings?: MediaLiveArchiveCdnSettings;

  /**
   * @schema MediaLiveArchiveGroupSettings#Destination
   */
  readonly destination?: MediaLiveOutputLocationRef;

  /**
   * @schema MediaLiveArchiveGroupSettings#RolloverInterval
   */
  readonly rolloverInterval?: number;

}

/**
 * Converts an object of type 'MediaLiveArchiveGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveArchiveGroupSettings(obj: MediaLiveArchiveGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveCdnSettings': toJson_MediaLiveArchiveCdnSettings(obj.archiveCdnSettings),
    'Destination': toJson_MediaLiveOutputLocationRef(obj.destination),
    'RolloverInterval': obj.rolloverInterval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveFrameCaptureGroupSettings
 */
export interface MediaLiveFrameCaptureGroupSettings {
  /**
   * @schema MediaLiveFrameCaptureGroupSettings#Destination
   */
  readonly destination?: MediaLiveOutputLocationRef;

  /**
   * @schema MediaLiveFrameCaptureGroupSettings#FrameCaptureCdnSettings
   */
  readonly frameCaptureCdnSettings?: MediaLiveFrameCaptureCdnSettings;

}

/**
 * Converts an object of type 'MediaLiveFrameCaptureGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFrameCaptureGroupSettings(obj: MediaLiveFrameCaptureGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destination': toJson_MediaLiveOutputLocationRef(obj.destination),
    'FrameCaptureCdnSettings': toJson_MediaLiveFrameCaptureCdnSettings(obj.frameCaptureCdnSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly destination?: MediaLiveOutputLocationRef;

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
 * Converts an object of type 'MediaLiveHlsGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsGroupSettings(obj: MediaLiveHlsGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdMarkers': obj.adMarkers?.map(y => y),
    'BaseUrlContent': obj.baseUrlContent,
    'BaseUrlContent1': obj.baseUrlContent1,
    'BaseUrlManifest': obj.baseUrlManifest,
    'BaseUrlManifest1': obj.baseUrlManifest1,
    'CaptionLanguageMappings': obj.captionLanguageMappings?.map(y => toJson_MediaLiveCaptionLanguageMapping(y)),
    'CaptionLanguageSetting': obj.captionLanguageSetting,
    'ClientCache': obj.clientCache,
    'CodecSpecification': obj.codecSpecification,
    'ConstantIv': obj.constantIv,
    'Destination': toJson_MediaLiveOutputLocationRef(obj.destination),
    'DirectoryStructure': obj.directoryStructure,
    'DiscontinuityTags': obj.discontinuityTags,
    'EncryptionType': obj.encryptionType,
    'HlsCdnSettings': toJson_MediaLiveHlsCdnSettings(obj.hlsCdnSettings),
    'HlsId3SegmentTagging': obj.hlsId3SegmentTagging,
    'IFrameOnlyPlaylists': obj.iFrameOnlyPlaylists,
    'IncompleteSegmentBehavior': obj.incompleteSegmentBehavior,
    'IndexNSegments': obj.indexNSegments,
    'InputLossAction': obj.inputLossAction,
    'IvInManifest': obj.ivInManifest,
    'IvSource': obj.ivSource,
    'KeepSegments': obj.keepSegments,
    'KeyFormat': obj.keyFormat,
    'KeyFormatVersions': obj.keyFormatVersions,
    'KeyProviderSettings': toJson_MediaLiveKeyProviderSettings(obj.keyProviderSettings),
    'ManifestCompression': obj.manifestCompression,
    'ManifestDurationFormat': obj.manifestDurationFormat,
    'MinSegmentLength': obj.minSegmentLength,
    'Mode': obj.mode,
    'OutputSelection': obj.outputSelection,
    'ProgramDateTime': obj.programDateTime,
    'ProgramDateTimePeriod': obj.programDateTimePeriod,
    'RedundantManifest': obj.redundantManifest,
    'SegmentLength': obj.segmentLength,
    'SegmentationMode': obj.segmentationMode,
    'SegmentsPerSubdirectory': obj.segmentsPerSubdirectory,
    'StreamInfResolution': obj.streamInfResolution,
    'TimedMetadataId3Frame': obj.timedMetadataId3Frame,
    'TimedMetadataId3Period': obj.timedMetadataId3Period,
    'TimestampDeltaMilliseconds': obj.timestampDeltaMilliseconds,
    'TsFileMode': obj.tsFileMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveMediaPackageGroupSettings
 */
export interface MediaLiveMediaPackageGroupSettings {
  /**
   * @schema MediaLiveMediaPackageGroupSettings#Destination
   */
  readonly destination?: MediaLiveOutputLocationRef;

}

/**
 * Converts an object of type 'MediaLiveMediaPackageGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMediaPackageGroupSettings(obj: MediaLiveMediaPackageGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destination': toJson_MediaLiveOutputLocationRef(obj.destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly destination?: MediaLiveOutputLocationRef;

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
 * Converts an object of type 'MediaLiveMsSmoothGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMsSmoothGroupSettings(obj: MediaLiveMsSmoothGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcquisitionPointId': obj.acquisitionPointId,
    'AudioOnlyTimecodeControl': obj.audioOnlyTimecodeControl,
    'CertificateMode': obj.certificateMode,
    'ConnectionRetryInterval': obj.connectionRetryInterval,
    'Destination': toJson_MediaLiveOutputLocationRef(obj.destination),
    'EventId': obj.eventId,
    'EventIdMode': obj.eventIdMode,
    'EventStopBehavior': obj.eventStopBehavior,
    'FilecacheDuration': obj.filecacheDuration,
    'FragmentLength': obj.fragmentLength,
    'InputLossAction': obj.inputLossAction,
    'NumRetries': obj.numRetries,
    'RestartDelay': obj.restartDelay,
    'SegmentationMode': obj.segmentationMode,
    'SendDelayMs': obj.sendDelayMs,
    'SparseTrackType': obj.sparseTrackType,
    'StreamManifestBehavior': obj.streamManifestBehavior,
    'TimestampOffset': obj.timestampOffset,
    'TimestampOffsetMode': obj.timestampOffsetMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveMultiplexGroupSettings
 */
export interface MediaLiveMultiplexGroupSettings {
}

/**
 * Converts an object of type 'MediaLiveMultiplexGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexGroupSettings(obj: MediaLiveMultiplexGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveRtmpGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveRtmpGroupSettings(obj: MediaLiveRtmpGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdMarkers': obj.adMarkers?.map(y => y),
    'AuthenticationScheme': obj.authenticationScheme,
    'CacheFullBehavior': obj.cacheFullBehavior,
    'CacheLength': obj.cacheLength,
    'CaptionData': obj.captionData,
    'InputLossAction': obj.inputLossAction,
    'RestartDelay': obj.restartDelay,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveUdpGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUdpGroupSettings(obj: MediaLiveUdpGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputLossAction': obj.inputLossAction,
    'TimedMetadataId3Frame': obj.timedMetadataId3Frame,
    'TimedMetadataId3Period': obj.timedMetadataId3Period,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveOutputSettings(obj: MediaLiveOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveOutputSettings': toJson_MediaLiveArchiveOutputSettings(obj.archiveOutputSettings),
    'FrameCaptureOutputSettings': toJson_MediaLiveFrameCaptureOutputSettings(obj.frameCaptureOutputSettings),
    'HlsOutputSettings': toJson_MediaLiveHlsOutputSettings(obj.hlsOutputSettings),
    'MediaPackageOutputSettings': toJson_MediaLiveMediaPackageOutputSettings(obj.mediaPackageOutputSettings),
    'MsSmoothOutputSettings': toJson_MediaLiveMsSmoothOutputSettings(obj.msSmoothOutputSettings),
    'MultiplexOutputSettings': toJson_MediaLiveMultiplexOutputSettings(obj.multiplexOutputSettings),
    'RtmpOutputSettings': toJson_MediaLiveRtmpOutputSettings(obj.rtmpOutputSettings),
    'UdpOutputSettings': toJson_MediaLiveUdpOutputSettings(obj.udpOutputSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveFrameCaptureSettings
 */
export interface MediaLiveFrameCaptureSettings {
  /**
   * @schema MediaLiveFrameCaptureSettings#CaptureInterval
   */
  readonly captureInterval?: number;

  /**
   * @schema MediaLiveFrameCaptureSettings#CaptureIntervalUnits
   */
  readonly captureIntervalUnits?: string;

}

/**
 * Converts an object of type 'MediaLiveFrameCaptureSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFrameCaptureSettings(obj: MediaLiveFrameCaptureSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CaptureInterval': obj.captureInterval,
    'CaptureIntervalUnits': obj.captureIntervalUnits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveH264Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveH264Settings(obj: MediaLiveH264Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdaptiveQuantization': obj.adaptiveQuantization,
    'AfdSignaling': obj.afdSignaling,
    'Bitrate': obj.bitrate,
    'BufFillPct': obj.bufFillPct,
    'BufSize': obj.bufSize,
    'ColorMetadata': obj.colorMetadata,
    'ColorSpaceSettings': toJson_MediaLiveH264ColorSpaceSettings(obj.colorSpaceSettings),
    'EntropyEncoding': obj.entropyEncoding,
    'FilterSettings': toJson_MediaLiveH264FilterSettings(obj.filterSettings),
    'FixedAfd': obj.fixedAfd,
    'FlickerAq': obj.flickerAq,
    'ForceFieldPictures': obj.forceFieldPictures,
    'FramerateControl': obj.framerateControl,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'GopBReference': obj.gopBReference,
    'GopClosedCadence': obj.gopClosedCadence,
    'GopNumBFrames': obj.gopNumBFrames,
    'GopSize': obj.gopSize,
    'GopSizeUnits': obj.gopSizeUnits,
    'Level': obj.level,
    'LookAheadRateControl': obj.lookAheadRateControl,
    'MaxBitrate': obj.maxBitrate,
    'MinIInterval': obj.minIInterval,
    'NumRefFrames': obj.numRefFrames,
    'ParControl': obj.parControl,
    'ParDenominator': obj.parDenominator,
    'ParNumerator': obj.parNumerator,
    'Profile': obj.profile,
    'QualityLevel': obj.qualityLevel,
    'QvbrQualityLevel': obj.qvbrQualityLevel,
    'RateControlMode': obj.rateControlMode,
    'ScanType': obj.scanType,
    'SceneChangeDetect': obj.sceneChangeDetect,
    'Slices': obj.slices,
    'Softness': obj.softness,
    'SpatialAq': obj.spatialAq,
    'SubgopLength': obj.subgopLength,
    'Syntax': obj.syntax,
    'TemporalAq': obj.temporalAq,
    'TimecodeInsertion': obj.timecodeInsertion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly framerateDenominator?: number;

  /**
   * @schema MediaLiveH265Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

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
 * Converts an object of type 'MediaLiveH265Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveH265Settings(obj: MediaLiveH265Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdaptiveQuantization': obj.adaptiveQuantization,
    'AfdSignaling': obj.afdSignaling,
    'AlternativeTransferFunction': obj.alternativeTransferFunction,
    'Bitrate': obj.bitrate,
    'BufSize': obj.bufSize,
    'ColorMetadata': obj.colorMetadata,
    'ColorSpaceSettings': toJson_MediaLiveH265ColorSpaceSettings(obj.colorSpaceSettings),
    'FilterSettings': toJson_MediaLiveH265FilterSettings(obj.filterSettings),
    'FixedAfd': obj.fixedAfd,
    'FlickerAq': obj.flickerAq,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'GopClosedCadence': obj.gopClosedCadence,
    'GopSize': obj.gopSize,
    'GopSizeUnits': obj.gopSizeUnits,
    'Level': obj.level,
    'LookAheadRateControl': obj.lookAheadRateControl,
    'MaxBitrate': obj.maxBitrate,
    'MinIInterval': obj.minIInterval,
    'ParDenominator': obj.parDenominator,
    'ParNumerator': obj.parNumerator,
    'Profile': obj.profile,
    'QvbrQualityLevel': obj.qvbrQualityLevel,
    'RateControlMode': obj.rateControlMode,
    'ScanType': obj.scanType,
    'SceneChangeDetect': obj.sceneChangeDetect,
    'Slices': obj.slices,
    'Tier': obj.tier,
    'TimecodeInsertion': obj.timecodeInsertion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly framerateDenominator?: number;

  /**
   * @schema MediaLiveMpeg2Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

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
 * Converts an object of type 'MediaLiveMpeg2Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMpeg2Settings(obj: MediaLiveMpeg2Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdaptiveQuantization': obj.adaptiveQuantization,
    'AfdSignaling': obj.afdSignaling,
    'ColorMetadata': obj.colorMetadata,
    'ColorSpace': obj.colorSpace,
    'DisplayAspectRatio': obj.displayAspectRatio,
    'FilterSettings': toJson_MediaLiveMpeg2FilterSettings(obj.filterSettings),
    'FixedAfd': obj.fixedAfd,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'GopClosedCadence': obj.gopClosedCadence,
    'GopNumBFrames': obj.gopNumBFrames,
    'GopSize': obj.gopSize,
    'GopSizeUnits': obj.gopSizeUnits,
    'ScanType': obj.scanType,
    'SubgopLength': obj.subgopLength,
    'TimecodeInsertion': obj.timecodeInsertion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveFailoverConditionSettings
 */
export interface MediaLiveFailoverConditionSettings {
  /**
   * @schema MediaLiveFailoverConditionSettings#AudioSilenceSettings
   */
  readonly audioSilenceSettings?: MediaLiveAudioSilenceFailoverSettings;

  /**
   * @schema MediaLiveFailoverConditionSettings#InputLossSettings
   */
  readonly inputLossSettings?: MediaLiveInputLossFailoverSettings;

  /**
   * @schema MediaLiveFailoverConditionSettings#VideoBlackSettings
   */
  readonly videoBlackSettings?: MediaLiveVideoBlackFailoverSettings;

}

/**
 * Converts an object of type 'MediaLiveFailoverConditionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFailoverConditionSettings(obj: MediaLiveFailoverConditionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioSilenceSettings': toJson_MediaLiveAudioSilenceFailoverSettings(obj.audioSilenceSettings),
    'InputLossSettings': toJson_MediaLiveInputLossFailoverSettings(obj.inputLossSettings),
    'VideoBlackSettings': toJson_MediaLiveVideoBlackFailoverSettings(obj.videoBlackSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAudioSelectorSettings
 */
export interface MediaLiveAudioSelectorSettings {
  /**
   * @schema MediaLiveAudioSelectorSettings#AudioHlsRenditionSelection
   */
  readonly audioHlsRenditionSelection?: MediaLiveAudioHlsRenditionSelection;

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
 * Converts an object of type 'MediaLiveAudioSelectorSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioSelectorSettings(obj: MediaLiveAudioSelectorSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioHlsRenditionSelection': toJson_MediaLiveAudioHlsRenditionSelection(obj.audioHlsRenditionSelection),
    'AudioLanguageSelection': toJson_MediaLiveAudioLanguageSelection(obj.audioLanguageSelection),
    'AudioPidSelection': toJson_MediaLiveAudioPidSelection(obj.audioPidSelection),
    'AudioTrackSelection': toJson_MediaLiveAudioTrackSelection(obj.audioTrackSelection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveCaptionSelectorSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCaptionSelectorSettings(obj: MediaLiveCaptionSelectorSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AncillarySourceSettings': toJson_MediaLiveAncillarySourceSettings(obj.ancillarySourceSettings),
    'AribSourceSettings': toJson_MediaLiveAribSourceSettings(obj.aribSourceSettings),
    'DvbSubSourceSettings': toJson_MediaLiveDvbSubSourceSettings(obj.dvbSubSourceSettings),
    'EmbeddedSourceSettings': toJson_MediaLiveEmbeddedSourceSettings(obj.embeddedSourceSettings),
    'Scte20SourceSettings': toJson_MediaLiveScte20SourceSettings(obj.scte20SourceSettings),
    'Scte27SourceSettings': toJson_MediaLiveScte27SourceSettings(obj.scte27SourceSettings),
    'TeletextSourceSettings': toJson_MediaLiveTeletextSourceSettings(obj.teletextSourceSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MediaLiveHlsInputSettings#Scte35Source
   */
  readonly scte35Source?: string;

}

/**
 * Converts an object of type 'MediaLiveHlsInputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsInputSettings(obj: MediaLiveHlsInputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bandwidth': obj.bandwidth,
    'BufferSegments': obj.bufferSegments,
    'Retries': obj.retries,
    'RetryInterval': obj.retryInterval,
    'Scte35Source': obj.scte35Source,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveVideoSelectorColorSpaceSettings
 */
export interface MediaLiveVideoSelectorColorSpaceSettings {
  /**
   * @schema MediaLiveVideoSelectorColorSpaceSettings#Hdr10Settings
   */
  readonly hdr10Settings?: MediaLiveHdr10Settings;

}

/**
 * Converts an object of type 'MediaLiveVideoSelectorColorSpaceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveVideoSelectorColorSpaceSettings(obj: MediaLiveVideoSelectorColorSpaceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Hdr10Settings': toJson_MediaLiveHdr10Settings(obj.hdr10Settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveVideoSelectorSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveVideoSelectorSettings(obj: MediaLiveVideoSelectorSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VideoSelectorPid': toJson_MediaLiveVideoSelectorPid(obj.videoSelectorPid),
    'VideoSelectorProgramId': toJson_MediaLiveVideoSelectorProgramId(obj.videoSelectorProgramId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveInputClippingSettings
 */
export interface MediaLiveInputClippingSettings {
  /**
   * @schema MediaLiveInputClippingSettings#InputTimecodeSource
   */
  readonly inputTimecodeSource?: string;

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
 * Converts an object of type 'MediaLiveInputClippingSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputClippingSettings(obj: MediaLiveInputClippingSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputTimecodeSource': obj.inputTimecodeSource,
    'StartTimecode': toJson_MediaLiveStartTimecode(obj.startTimecode),
    'StopTimecode': toJson_MediaLiveStopTimecode(obj.stopTimecode),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLivePipelinePauseStateSettings
 */
export interface MediaLivePipelinePauseStateSettings {
  /**
   * @schema MediaLivePipelinePauseStateSettings#PipelineId
   */
  readonly pipelineId?: string;

}

/**
 * Converts an object of type 'MediaLivePipelinePauseStateSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLivePipelinePauseStateSettings(obj: MediaLivePipelinePauseStateSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PipelineId': obj.pipelineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveScte35Descriptor
 */
export interface MediaLiveScte35Descriptor {
  /**
   * @schema MediaLiveScte35Descriptor#Scte35DescriptorSettings
   */
  readonly scte35DescriptorSettings?: MediaLiveScte35DescriptorSettings;

}

/**
 * Converts an object of type 'MediaLiveScte35Descriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte35Descriptor(obj: MediaLiveScte35Descriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scte35DescriptorSettings': toJson_MediaLiveScte35DescriptorSettings(obj.scte35DescriptorSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveInputChannelLevel
 */
export interface MediaLiveInputChannelLevel {
  /**
   * @schema MediaLiveInputChannelLevel#Gain
   */
  readonly gain?: number;

  /**
   * @schema MediaLiveInputChannelLevel#InputChannel
   */
  readonly inputChannel?: number;

}

/**
 * Converts an object of type 'MediaLiveInputChannelLevel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputChannelLevel(obj: MediaLiveInputChannelLevel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Gain': obj.gain,
    'InputChannel': obj.inputChannel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveArchiveCdnSettings
 */
export interface MediaLiveArchiveCdnSettings {
  /**
   * @schema MediaLiveArchiveCdnSettings#ArchiveS3Settings
   */
  readonly archiveS3Settings?: MediaLiveArchiveS3Settings;

}

/**
 * Converts an object of type 'MediaLiveArchiveCdnSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveArchiveCdnSettings(obj: MediaLiveArchiveCdnSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveS3Settings': toJson_MediaLiveArchiveS3Settings(obj.archiveS3Settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveOutputLocationRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveOutputLocationRef(obj: MediaLiveOutputLocationRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationRefId': obj.destinationRefId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveFrameCaptureCdnSettings
 */
export interface MediaLiveFrameCaptureCdnSettings {
  /**
   * @schema MediaLiveFrameCaptureCdnSettings#FrameCaptureS3Settings
   */
  readonly frameCaptureS3Settings?: MediaLiveFrameCaptureS3Settings;

}

/**
 * Converts an object of type 'MediaLiveFrameCaptureCdnSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFrameCaptureCdnSettings(obj: MediaLiveFrameCaptureCdnSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FrameCaptureS3Settings': toJson_MediaLiveFrameCaptureS3Settings(obj.frameCaptureS3Settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveCaptionLanguageMapping
 */
export interface MediaLiveCaptionLanguageMapping {
  /**
   * @schema MediaLiveCaptionLanguageMapping#CaptionChannel
   */
  readonly captionChannel?: number;

  /**
   * @schema MediaLiveCaptionLanguageMapping#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaLiveCaptionLanguageMapping#LanguageDescription
   */
  readonly languageDescription?: string;

}

/**
 * Converts an object of type 'MediaLiveCaptionLanguageMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCaptionLanguageMapping(obj: MediaLiveCaptionLanguageMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CaptionChannel': obj.captionChannel,
    'LanguageCode': obj.languageCode,
    'LanguageDescription': obj.languageDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MediaLiveHlsCdnSettings#HlsS3Settings
   */
  readonly hlsS3Settings?: MediaLiveHlsS3Settings;

  /**
   * @schema MediaLiveHlsCdnSettings#HlsWebdavSettings
   */
  readonly hlsWebdavSettings?: MediaLiveHlsWebdavSettings;

}

/**
 * Converts an object of type 'MediaLiveHlsCdnSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsCdnSettings(obj: MediaLiveHlsCdnSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HlsAkamaiSettings': toJson_MediaLiveHlsAkamaiSettings(obj.hlsAkamaiSettings),
    'HlsBasicPutSettings': toJson_MediaLiveHlsBasicPutSettings(obj.hlsBasicPutSettings),
    'HlsMediaStoreSettings': toJson_MediaLiveHlsMediaStoreSettings(obj.hlsMediaStoreSettings),
    'HlsS3Settings': toJson_MediaLiveHlsS3Settings(obj.hlsS3Settings),
    'HlsWebdavSettings': toJson_MediaLiveHlsWebdavSettings(obj.hlsWebdavSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveKeyProviderSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveKeyProviderSettings(obj: MediaLiveKeyProviderSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StaticKeySettings': toJson_MediaLiveStaticKeySettings(obj.staticKeySettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveArchiveOutputSettings
 */
export interface MediaLiveArchiveOutputSettings {
  /**
   * @schema MediaLiveArchiveOutputSettings#ContainerSettings
   */
  readonly containerSettings?: MediaLiveArchiveContainerSettings;

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
 * Converts an object of type 'MediaLiveArchiveOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveArchiveOutputSettings(obj: MediaLiveArchiveOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerSettings': toJson_MediaLiveArchiveContainerSettings(obj.containerSettings),
    'Extension': obj.extension,
    'NameModifier': obj.nameModifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveFrameCaptureOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFrameCaptureOutputSettings(obj: MediaLiveFrameCaptureOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NameModifier': obj.nameModifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly hlsSettings?: MediaLiveHlsSettings;

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
 * Converts an object of type 'MediaLiveHlsOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsOutputSettings(obj: MediaLiveHlsOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'H265PackagingType': obj.h265PackagingType,
    'HlsSettings': toJson_MediaLiveHlsSettings(obj.hlsSettings),
    'NameModifier': obj.nameModifier,
    'SegmentModifier': obj.segmentModifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveMediaPackageOutputSettings
 */
export interface MediaLiveMediaPackageOutputSettings {
}

/**
 * Converts an object of type 'MediaLiveMediaPackageOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMediaPackageOutputSettings(obj: MediaLiveMediaPackageOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMsSmoothOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMsSmoothOutputSettings(obj: MediaLiveMsSmoothOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'H265PackagingType': obj.h265PackagingType,
    'NameModifier': obj.nameModifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveMultiplexOutputSettings
 */
export interface MediaLiveMultiplexOutputSettings {
  /**
   * @schema MediaLiveMultiplexOutputSettings#Destination
   */
  readonly destination?: MediaLiveOutputLocationRef;

}

/**
 * Converts an object of type 'MediaLiveMultiplexOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMultiplexOutputSettings(obj: MediaLiveMultiplexOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destination': toJson_MediaLiveOutputLocationRef(obj.destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly destination?: MediaLiveOutputLocationRef;

  /**
   * @schema MediaLiveRtmpOutputSettings#NumRetries
   */
  readonly numRetries?: number;

}

/**
 * Converts an object of type 'MediaLiveRtmpOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveRtmpOutputSettings(obj: MediaLiveRtmpOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateMode': obj.certificateMode,
    'ConnectionRetryInterval': obj.connectionRetryInterval,
    'Destination': toJson_MediaLiveOutputLocationRef(obj.destination),
    'NumRetries': obj.numRetries,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly containerSettings?: MediaLiveUdpContainerSettings;

  /**
   * @schema MediaLiveUdpOutputSettings#Destination
   */
  readonly destination?: MediaLiveOutputLocationRef;

  /**
   * @schema MediaLiveUdpOutputSettings#FecOutputSettings
   */
  readonly fecOutputSettings?: MediaLiveFecOutputSettings;

}

/**
 * Converts an object of type 'MediaLiveUdpOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUdpOutputSettings(obj: MediaLiveUdpOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BufferMsec': obj.bufferMsec,
    'ContainerSettings': toJson_MediaLiveUdpContainerSettings(obj.containerSettings),
    'Destination': toJson_MediaLiveOutputLocationRef(obj.destination),
    'FecOutputSettings': toJson_MediaLiveFecOutputSettings(obj.fecOutputSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveH264ColorSpaceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveH264ColorSpaceSettings(obj: MediaLiveH264ColorSpaceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColorSpacePassthroughSettings': toJson_MediaLiveColorSpacePassthroughSettings(obj.colorSpacePassthroughSettings),
    'Rec601Settings': toJson_MediaLiveRec601Settings(obj.rec601Settings),
    'Rec709Settings': toJson_MediaLiveRec709Settings(obj.rec709Settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveH264FilterSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveH264FilterSettings(obj: MediaLiveH264FilterSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemporalFilterSettings': toJson_MediaLiveTemporalFilterSettings(obj.temporalFilterSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveH265ColorSpaceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveH265ColorSpaceSettings(obj: MediaLiveH265ColorSpaceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColorSpacePassthroughSettings': toJson_MediaLiveColorSpacePassthroughSettings(obj.colorSpacePassthroughSettings),
    'Hdr10Settings': toJson_MediaLiveHdr10Settings(obj.hdr10Settings),
    'Rec601Settings': toJson_MediaLiveRec601Settings(obj.rec601Settings),
    'Rec709Settings': toJson_MediaLiveRec709Settings(obj.rec709Settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveH265FilterSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveH265FilterSettings(obj: MediaLiveH265FilterSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemporalFilterSettings': toJson_MediaLiveTemporalFilterSettings(obj.temporalFilterSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveMpeg2FilterSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveMpeg2FilterSettings(obj: MediaLiveMpeg2FilterSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemporalFilterSettings': toJson_MediaLiveTemporalFilterSettings(obj.temporalFilterSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAudioSilenceFailoverSettings
 */
export interface MediaLiveAudioSilenceFailoverSettings {
  /**
   * @schema MediaLiveAudioSilenceFailoverSettings#AudioSelectorName
   */
  readonly audioSelectorName?: string;

  /**
   * @schema MediaLiveAudioSilenceFailoverSettings#AudioSilenceThresholdMsec
   */
  readonly audioSilenceThresholdMsec?: number;

}

/**
 * Converts an object of type 'MediaLiveAudioSilenceFailoverSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioSilenceFailoverSettings(obj: MediaLiveAudioSilenceFailoverSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioSelectorName': obj.audioSelectorName,
    'AudioSilenceThresholdMsec': obj.audioSilenceThresholdMsec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveInputLossFailoverSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveInputLossFailoverSettings(obj: MediaLiveInputLossFailoverSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputLossThresholdMsec': obj.inputLossThresholdMsec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveVideoBlackFailoverSettings
 */
export interface MediaLiveVideoBlackFailoverSettings {
  /**
   * @schema MediaLiveVideoBlackFailoverSettings#BlackDetectThreshold
   */
  readonly blackDetectThreshold?: number;

  /**
   * @schema MediaLiveVideoBlackFailoverSettings#VideoBlackThresholdMsec
   */
  readonly videoBlackThresholdMsec?: number;

}

/**
 * Converts an object of type 'MediaLiveVideoBlackFailoverSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveVideoBlackFailoverSettings(obj: MediaLiveVideoBlackFailoverSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlackDetectThreshold': obj.blackDetectThreshold,
    'VideoBlackThresholdMsec': obj.videoBlackThresholdMsec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAudioHlsRenditionSelection
 */
export interface MediaLiveAudioHlsRenditionSelection {
  /**
   * @schema MediaLiveAudioHlsRenditionSelection#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema MediaLiveAudioHlsRenditionSelection#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaLiveAudioHlsRenditionSelection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioHlsRenditionSelection(obj: MediaLiveAudioHlsRenditionSelection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAudioLanguageSelection
 */
export interface MediaLiveAudioLanguageSelection {
  /**
   * @schema MediaLiveAudioLanguageSelection#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaLiveAudioLanguageSelection#LanguageSelectionPolicy
   */
  readonly languageSelectionPolicy?: string;

}

/**
 * Converts an object of type 'MediaLiveAudioLanguageSelection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioLanguageSelection(obj: MediaLiveAudioLanguageSelection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LanguageCode': obj.languageCode,
    'LanguageSelectionPolicy': obj.languageSelectionPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAudioPidSelection
 */
export interface MediaLiveAudioPidSelection {
  /**
   * @schema MediaLiveAudioPidSelection#Pid
   */
  readonly pid?: number;

}

/**
 * Converts an object of type 'MediaLiveAudioPidSelection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioPidSelection(obj: MediaLiveAudioPidSelection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pid': obj.pid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAudioTrackSelection
 */
export interface MediaLiveAudioTrackSelection {
  /**
   * @schema MediaLiveAudioTrackSelection#Tracks
   */
  readonly tracks?: MediaLiveAudioTrack[];

}

/**
 * Converts an object of type 'MediaLiveAudioTrackSelection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioTrackSelection(obj: MediaLiveAudioTrackSelection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tracks': obj.tracks?.map(y => toJson_MediaLiveAudioTrack(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveAncillarySourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAncillarySourceSettings(obj: MediaLiveAncillarySourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceAncillaryChannelNumber': obj.sourceAncillaryChannelNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAribSourceSettings
 */
export interface MediaLiveAribSourceSettings {
}

/**
 * Converts an object of type 'MediaLiveAribSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAribSourceSettings(obj: MediaLiveAribSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDvbSubSourceSettings
 */
export interface MediaLiveDvbSubSourceSettings {
  /**
   * @schema MediaLiveDvbSubSourceSettings#OcrLanguage
   */
  readonly ocrLanguage?: string;

  /**
   * @schema MediaLiveDvbSubSourceSettings#Pid
   */
  readonly pid?: number;

}

/**
 * Converts an object of type 'MediaLiveDvbSubSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDvbSubSourceSettings(obj: MediaLiveDvbSubSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OcrLanguage': obj.ocrLanguage,
    'Pid': obj.pid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveEmbeddedSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveEmbeddedSourceSettings(obj: MediaLiveEmbeddedSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Convert608To708': obj.convert608To708,
    'Scte20Detection': obj.scte20Detection,
    'Source608ChannelNumber': obj.source608ChannelNumber,
    'Source608TrackNumber': obj.source608TrackNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveScte20SourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte20SourceSettings(obj: MediaLiveScte20SourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Convert608To708': obj.convert608To708,
    'Source608ChannelNumber': obj.source608ChannelNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveScte27SourceSettings
 */
export interface MediaLiveScte27SourceSettings {
  /**
   * @schema MediaLiveScte27SourceSettings#OcrLanguage
   */
  readonly ocrLanguage?: string;

  /**
   * @schema MediaLiveScte27SourceSettings#Pid
   */
  readonly pid?: number;

}

/**
 * Converts an object of type 'MediaLiveScte27SourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte27SourceSettings(obj: MediaLiveScte27SourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OcrLanguage': obj.ocrLanguage,
    'Pid': obj.pid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveTeletextSourceSettings
 */
export interface MediaLiveTeletextSourceSettings {
  /**
   * @schema MediaLiveTeletextSourceSettings#OutputRectangle
   */
  readonly outputRectangle?: MediaLiveCaptionRectangle;

  /**
   * @schema MediaLiveTeletextSourceSettings#PageNumber
   */
  readonly pageNumber?: string;

}

/**
 * Converts an object of type 'MediaLiveTeletextSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveTeletextSourceSettings(obj: MediaLiveTeletextSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputRectangle': toJson_MediaLiveCaptionRectangle(obj.outputRectangle),
    'PageNumber': obj.pageNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveHdr10Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHdr10Settings(obj: MediaLiveHdr10Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxCll': obj.maxCll,
    'MaxFall': obj.maxFall,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveVideoSelectorPid' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveVideoSelectorPid(obj: MediaLiveVideoSelectorPid | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pid': obj.pid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveVideoSelectorProgramId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveVideoSelectorProgramId(obj: MediaLiveVideoSelectorProgramId | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProgramId': obj.programId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveStartTimecode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStartTimecode(obj: MediaLiveStartTimecode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timecode': obj.timecode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveStopTimecode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStopTimecode(obj: MediaLiveStopTimecode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastFrameClippingBehavior': obj.lastFrameClippingBehavior,
    'Timecode': obj.timecode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveScte35DescriptorSettings
 */
export interface MediaLiveScte35DescriptorSettings {
  /**
   * @schema MediaLiveScte35DescriptorSettings#SegmentationDescriptorScte35DescriptorSettings
   */
  readonly segmentationDescriptorScte35DescriptorSettings?: MediaLiveScte35SegmentationDescriptor;

}

/**
 * Converts an object of type 'MediaLiveScte35DescriptorSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte35DescriptorSettings(obj: MediaLiveScte35DescriptorSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SegmentationDescriptorScte35DescriptorSettings': toJson_MediaLiveScte35SegmentationDescriptor(obj.segmentationDescriptorScte35DescriptorSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveArchiveS3Settings
 */
export interface MediaLiveArchiveS3Settings {
  /**
   * @schema MediaLiveArchiveS3Settings#CannedAcl
   */
  readonly cannedAcl?: string;

}

/**
 * Converts an object of type 'MediaLiveArchiveS3Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveArchiveS3Settings(obj: MediaLiveArchiveS3Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CannedAcl': obj.cannedAcl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveFrameCaptureS3Settings
 */
export interface MediaLiveFrameCaptureS3Settings {
  /**
   * @schema MediaLiveFrameCaptureS3Settings#CannedAcl
   */
  readonly cannedAcl?: string;

}

/**
 * Converts an object of type 'MediaLiveFrameCaptureS3Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFrameCaptureS3Settings(obj: MediaLiveFrameCaptureS3Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CannedAcl': obj.cannedAcl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveHlsAkamaiSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsAkamaiSettings(obj: MediaLiveHlsAkamaiSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionRetryInterval': obj.connectionRetryInterval,
    'FilecacheDuration': obj.filecacheDuration,
    'HttpTransferMode': obj.httpTransferMode,
    'NumRetries': obj.numRetries,
    'RestartDelay': obj.restartDelay,
    'Salt': obj.salt,
    'Token': obj.token,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveHlsBasicPutSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsBasicPutSettings(obj: MediaLiveHlsBasicPutSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionRetryInterval': obj.connectionRetryInterval,
    'FilecacheDuration': obj.filecacheDuration,
    'NumRetries': obj.numRetries,
    'RestartDelay': obj.restartDelay,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveHlsMediaStoreSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsMediaStoreSettings(obj: MediaLiveHlsMediaStoreSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionRetryInterval': obj.connectionRetryInterval,
    'FilecacheDuration': obj.filecacheDuration,
    'MediaStoreStorageClass': obj.mediaStoreStorageClass,
    'NumRetries': obj.numRetries,
    'RestartDelay': obj.restartDelay,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveHlsS3Settings
 */
export interface MediaLiveHlsS3Settings {
  /**
   * @schema MediaLiveHlsS3Settings#CannedAcl
   */
  readonly cannedAcl?: string;

}

/**
 * Converts an object of type 'MediaLiveHlsS3Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsS3Settings(obj: MediaLiveHlsS3Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CannedAcl': obj.cannedAcl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveHlsWebdavSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsWebdavSettings(obj: MediaLiveHlsWebdavSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionRetryInterval': obj.connectionRetryInterval,
    'FilecacheDuration': obj.filecacheDuration,
    'HttpTransferMode': obj.httpTransferMode,
    'NumRetries': obj.numRetries,
    'RestartDelay': obj.restartDelay,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly staticKeyValue?: string;

}

/**
 * Converts an object of type 'MediaLiveStaticKeySettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStaticKeySettings(obj: MediaLiveStaticKeySettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyProviderServer': toJson_MediaLiveInputLocation(obj.keyProviderServer),
    'StaticKeyValue': obj.staticKeyValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveArchiveContainerSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveArchiveContainerSettings(obj: MediaLiveArchiveContainerSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'M2tsSettings': toJson_MediaLiveM2tsSettings(obj.m2TsSettings),
    'RawSettings': toJson_MediaLiveRawSettings(obj.rawSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MediaLiveHlsSettings#FrameCaptureHlsSettings
   */
  readonly frameCaptureHlsSettings?: MediaLiveFrameCaptureHlsSettings;

  /**
   * @schema MediaLiveHlsSettings#StandardHlsSettings
   */
  readonly standardHlsSettings?: MediaLiveStandardHlsSettings;

}

/**
 * Converts an object of type 'MediaLiveHlsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveHlsSettings(obj: MediaLiveHlsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioOnlyHlsSettings': toJson_MediaLiveAudioOnlyHlsSettings(obj.audioOnlyHlsSettings),
    'Fmp4HlsSettings': toJson_MediaLiveFmp4HlsSettings(obj.fmp4HlsSettings),
    'FrameCaptureHlsSettings': toJson_MediaLiveFrameCaptureHlsSettings(obj.frameCaptureHlsSettings),
    'StandardHlsSettings': toJson_MediaLiveStandardHlsSettings(obj.standardHlsSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveUdpContainerSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveUdpContainerSettings(obj: MediaLiveUdpContainerSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'M2tsSettings': toJson_MediaLiveM2tsSettings(obj.m2TsSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveFecOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFecOutputSettings(obj: MediaLiveFecOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnDepth': obj.columnDepth,
    'IncludeFec': obj.includeFec,
    'RowLength': obj.rowLength,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveColorSpacePassthroughSettings
 */
export interface MediaLiveColorSpacePassthroughSettings {
}

/**
 * Converts an object of type 'MediaLiveColorSpacePassthroughSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveColorSpacePassthroughSettings(obj: MediaLiveColorSpacePassthroughSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveRec601Settings
 */
export interface MediaLiveRec601Settings {
}

/**
 * Converts an object of type 'MediaLiveRec601Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveRec601Settings(obj: MediaLiveRec601Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveRec709Settings
 */
export interface MediaLiveRec709Settings {
}

/**
 * Converts an object of type 'MediaLiveRec709Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveRec709Settings(obj: MediaLiveRec709Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveTemporalFilterSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveTemporalFilterSettings(obj: MediaLiveTemporalFilterSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PostFilterSharpening': obj.postFilterSharpening,
    'Strength': obj.strength,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveAudioTrack
 */
export interface MediaLiveAudioTrack {
  /**
   * @schema MediaLiveAudioTrack#Track
   */
  readonly track?: number;

}

/**
 * Converts an object of type 'MediaLiveAudioTrack' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioTrack(obj: MediaLiveAudioTrack | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Track': obj.track,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveCaptionRectangle
 */
export interface MediaLiveCaptionRectangle {
  /**
   * @schema MediaLiveCaptionRectangle#Height
   */
  readonly height?: number;

  /**
   * @schema MediaLiveCaptionRectangle#LeftOffset
   */
  readonly leftOffset?: number;

  /**
   * @schema MediaLiveCaptionRectangle#TopOffset
   */
  readonly topOffset?: number;

  /**
   * @schema MediaLiveCaptionRectangle#Width
   */
  readonly width?: number;

}

/**
 * Converts an object of type 'MediaLiveCaptionRectangle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveCaptionRectangle(obj: MediaLiveCaptionRectangle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Height': obj.height,
    'LeftOffset': obj.leftOffset,
    'TopOffset': obj.topOffset,
    'Width': obj.width,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly segmentationCancelIndicator?: string;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SegmentationDuration
   */
  readonly segmentationDuration?: number;

  /**
   * @schema MediaLiveScte35SegmentationDescriptor#SegmentationEventId
   */
  readonly segmentationEventId?: number;

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
 * Converts an object of type 'MediaLiveScte35SegmentationDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte35SegmentationDescriptor(obj: MediaLiveScte35SegmentationDescriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryRestrictions': toJson_MediaLiveScte35DeliveryRestrictions(obj.deliveryRestrictions),
    'SegmentNum': obj.segmentNum,
    'SegmentationCancelIndicator': obj.segmentationCancelIndicator,
    'SegmentationDuration': obj.segmentationDuration,
    'SegmentationEventId': obj.segmentationEventId,
    'SegmentationTypeId': obj.segmentationTypeId,
    'SegmentationUpid': obj.segmentationUpid,
    'SegmentationUpidType': obj.segmentationUpidType,
    'SegmentsExpected': obj.segmentsExpected,
    'SubSegmentNum': obj.subSegmentNum,
    'SubSegmentsExpected': obj.subSegmentsExpected,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveM2tsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveM2tsSettings(obj: MediaLiveM2tsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AbsentInputAudioBehavior': obj.absentInputAudioBehavior,
    'Arib': obj.arib,
    'AribCaptionsPid': obj.aribCaptionsPid,
    'AribCaptionsPidControl': obj.aribCaptionsPidControl,
    'AudioBufferModel': obj.audioBufferModel,
    'AudioFramesPerPes': obj.audioFramesPerPes,
    'AudioPids': obj.audioPids,
    'AudioStreamType': obj.audioStreamType,
    'Bitrate': obj.bitrate,
    'BufferModel': obj.bufferModel,
    'CcDescriptor': obj.ccDescriptor,
    'DvbNitSettings': toJson_MediaLiveDvbNitSettings(obj.dvbNitSettings),
    'DvbSdtSettings': toJson_MediaLiveDvbSdtSettings(obj.dvbSdtSettings),
    'DvbSubPids': obj.dvbSubPids,
    'DvbTdtSettings': toJson_MediaLiveDvbTdtSettings(obj.dvbTdtSettings),
    'DvbTeletextPid': obj.dvbTeletextPid,
    'Ebif': obj.ebif,
    'EbpAudioInterval': obj.ebpAudioInterval,
    'EbpLookaheadMs': obj.ebpLookaheadMs,
    'EbpPlacement': obj.ebpPlacement,
    'EcmPid': obj.ecmPid,
    'EsRateInPes': obj.esRateInPes,
    'EtvPlatformPid': obj.etvPlatformPid,
    'EtvSignalPid': obj.etvSignalPid,
    'FragmentTime': obj.fragmentTime,
    'Klv': obj.klv,
    'KlvDataPids': obj.klvDataPids,
    'NielsenId3Behavior': obj.nielsenId3Behavior,
    'NullPacketBitrate': obj.nullPacketBitrate,
    'PatInterval': obj.patInterval,
    'PcrControl': obj.pcrControl,
    'PcrPeriod': obj.pcrPeriod,
    'PcrPid': obj.pcrPid,
    'PmtInterval': obj.pmtInterval,
    'PmtPid': obj.pmtPid,
    'ProgramNum': obj.programNum,
    'RateMode': obj.rateMode,
    'Scte27Pids': obj.scte27Pids,
    'Scte35Control': obj.scte35Control,
    'Scte35Pid': obj.scte35Pid,
    'SegmentationMarkers': obj.segmentationMarkers,
    'SegmentationStyle': obj.segmentationStyle,
    'SegmentationTime': obj.segmentationTime,
    'TimedMetadataBehavior': obj.timedMetadataBehavior,
    'TimedMetadataPid': obj.timedMetadataPid,
    'TransportStreamId': obj.transportStreamId,
    'VideoPid': obj.videoPid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveRawSettings
 */
export interface MediaLiveRawSettings {
}

/**
 * Converts an object of type 'MediaLiveRawSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveRawSettings(obj: MediaLiveRawSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveAudioOnlyHlsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveAudioOnlyHlsSettings(obj: MediaLiveAudioOnlyHlsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioGroupId': obj.audioGroupId,
    'AudioOnlyImage': toJson_MediaLiveInputLocation(obj.audioOnlyImage),
    'AudioTrackType': obj.audioTrackType,
    'SegmentType': obj.segmentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveFmp4HlsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFmp4HlsSettings(obj: MediaLiveFmp4HlsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioRenditionSets': obj.audioRenditionSets,
    'NielsenId3Behavior': obj.nielsenId3Behavior,
    'TimedMetadataBehavior': obj.timedMetadataBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveFrameCaptureHlsSettings
 */
export interface MediaLiveFrameCaptureHlsSettings {
}

/**
 * Converts an object of type 'MediaLiveFrameCaptureHlsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveFrameCaptureHlsSettings(obj: MediaLiveFrameCaptureHlsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly m3U8Settings?: MediaLiveM3u8Settings;

}

/**
 * Converts an object of type 'MediaLiveStandardHlsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveStandardHlsSettings(obj: MediaLiveStandardHlsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioRenditionSets': obj.audioRenditionSets,
    'M3u8Settings': toJson_MediaLiveM3u8Settings(obj.m3U8Settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveScte35DeliveryRestrictions
 */
export interface MediaLiveScte35DeliveryRestrictions {
  /**
   * @schema MediaLiveScte35DeliveryRestrictions#ArchiveAllowedFlag
   */
  readonly archiveAllowedFlag?: string;

  /**
   * @schema MediaLiveScte35DeliveryRestrictions#DeviceRestrictions
   */
  readonly deviceRestrictions?: string;

  /**
   * @schema MediaLiveScte35DeliveryRestrictions#NoRegionalBlackoutFlag
   */
  readonly noRegionalBlackoutFlag?: string;

  /**
   * @schema MediaLiveScte35DeliveryRestrictions#WebDeliveryAllowedFlag
   */
  readonly webDeliveryAllowedFlag?: string;

}

/**
 * Converts an object of type 'MediaLiveScte35DeliveryRestrictions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveScte35DeliveryRestrictions(obj: MediaLiveScte35DeliveryRestrictions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveAllowedFlag': obj.archiveAllowedFlag,
    'DeviceRestrictions': obj.deviceRestrictions,
    'NoRegionalBlackoutFlag': obj.noRegionalBlackoutFlag,
    'WebDeliveryAllowedFlag': obj.webDeliveryAllowedFlag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaLiveDvbNitSettings
 */
export interface MediaLiveDvbNitSettings {
  /**
   * @schema MediaLiveDvbNitSettings#NetworkId
   */
  readonly networkId?: number;

  /**
   * @schema MediaLiveDvbNitSettings#NetworkName
   */
  readonly networkName?: string;

  /**
   * @schema MediaLiveDvbNitSettings#RepInterval
   */
  readonly repInterval?: number;

}

/**
 * Converts an object of type 'MediaLiveDvbNitSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDvbNitSettings(obj: MediaLiveDvbNitSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'NetworkName': obj.networkName,
    'RepInterval': obj.repInterval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDvbSdtSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDvbSdtSettings(obj: MediaLiveDvbSdtSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputSdt': obj.outputSdt,
    'RepInterval': obj.repInterval,
    'ServiceName': obj.serviceName,
    'ServiceProviderName': obj.serviceProviderName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaLiveDvbTdtSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveDvbTdtSettings(obj: MediaLiveDvbTdtSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepInterval': obj.repInterval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'MediaLiveM3u8Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaLiveM3u8Settings(obj: MediaLiveM3u8Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioFramesPerPes': obj.audioFramesPerPes,
    'AudioPids': obj.audioPids,
    'EcmPid': obj.ecmPid,
    'NielsenId3Behavior': obj.nielsenId3Behavior,
    'PatInterval': obj.patInterval,
    'PcrControl': obj.pcrControl,
    'PcrPeriod': obj.pcrPeriod,
    'PcrPid': obj.pcrPid,
    'PmtInterval': obj.pmtInterval,
    'PmtPid': obj.pmtPid,
    'ProgramNum': obj.programNum,
    'Scte35Behavior': obj.scte35Behavior,
    'Scte35Pid': obj.scte35Pid,
    'TimedMetadataBehavior': obj.timedMetadataBehavior,
    'TimedMetadataPid': obj.timedMetadataPid,
    'TransportStreamId': obj.transportStreamId,
    'VideoPid': obj.videoPid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
