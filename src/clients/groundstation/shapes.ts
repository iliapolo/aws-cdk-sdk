/**
 * @schema GroundStationCancelContactRequest
 */
export interface GroundStationCancelContactRequest {
  /**
   * @schema GroundStationCancelContactRequest#contactId
   */
  readonly contactId: string;

}

/**
 * Converts an object of type 'GroundStationCancelContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationCancelContactRequest(obj: GroundStationCancelContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactId': obj.contactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationContactIdResponse
 */
export interface GroundStationContactIdResponse {
  /**
   * @schema GroundStationContactIdResponse#contactId
   */
  readonly contactId?: string;

}

/**
 * Converts an object of type 'GroundStationContactIdResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationContactIdResponse(obj: GroundStationContactIdResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactId': obj.contactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationCreateConfigRequest
 */
export interface GroundStationCreateConfigRequest {
  /**
   * @schema GroundStationCreateConfigRequest#configData
   */
  readonly configData: GroundStationConfigTypeData;

  /**
   * @schema GroundStationCreateConfigRequest#name
   */
  readonly name: string;

  /**
   * @schema GroundStationCreateConfigRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GroundStationCreateConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationCreateConfigRequest(obj: GroundStationCreateConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configData': toJson_GroundStationConfigTypeData(obj.configData),
    'name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationConfigIdResponse
 */
export interface GroundStationConfigIdResponse {
  /**
   * @schema GroundStationConfigIdResponse#configArn
   */
  readonly configArn?: string;

  /**
   * @schema GroundStationConfigIdResponse#configId
   */
  readonly configId?: string;

  /**
   * @schema GroundStationConfigIdResponse#configType
   */
  readonly configType?: string;

}

/**
 * Converts an object of type 'GroundStationConfigIdResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationConfigIdResponse(obj: GroundStationConfigIdResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configArn': obj.configArn,
    'configId': obj.configId,
    'configType': obj.configType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationCreateDataflowEndpointGroupRequest
 */
export interface GroundStationCreateDataflowEndpointGroupRequest {
  /**
   * @schema GroundStationCreateDataflowEndpointGroupRequest#endpointDetails
   */
  readonly endpointDetails: GroundStationEndpointDetails[];

  /**
   * @schema GroundStationCreateDataflowEndpointGroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GroundStationCreateDataflowEndpointGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationCreateDataflowEndpointGroupRequest(obj: GroundStationCreateDataflowEndpointGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpointDetails': obj.endpointDetails?.map(y => toJson_GroundStationEndpointDetails(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDataflowEndpointGroupIdResponse
 */
export interface GroundStationDataflowEndpointGroupIdResponse {
  /**
   * @schema GroundStationDataflowEndpointGroupIdResponse#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId?: string;

}

/**
 * Converts an object of type 'GroundStationDataflowEndpointGroupIdResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDataflowEndpointGroupIdResponse(obj: GroundStationDataflowEndpointGroupIdResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataflowEndpointGroupId': obj.dataflowEndpointGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationCreateMissionProfileRequest
 */
export interface GroundStationCreateMissionProfileRequest {
  /**
   * @schema GroundStationCreateMissionProfileRequest#contactPostPassDurationSeconds
   */
  readonly contactPostPassDurationSeconds?: number;

  /**
   * @schema GroundStationCreateMissionProfileRequest#contactPrePassDurationSeconds
   */
  readonly contactPrePassDurationSeconds?: number;

  /**
   * @schema GroundStationCreateMissionProfileRequest#dataflowEdges
   */
  readonly dataflowEdges: string[][];

  /**
   * @schema GroundStationCreateMissionProfileRequest#minimumViableContactDurationSeconds
   */
  readonly minimumViableContactDurationSeconds: number;

  /**
   * @schema GroundStationCreateMissionProfileRequest#name
   */
  readonly name: string;

  /**
   * @schema GroundStationCreateMissionProfileRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GroundStationCreateMissionProfileRequest#trackingConfigArn
   */
  readonly trackingConfigArn: string;

}

/**
 * Converts an object of type 'GroundStationCreateMissionProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationCreateMissionProfileRequest(obj: GroundStationCreateMissionProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactPostPassDurationSeconds': obj.contactPostPassDurationSeconds,
    'contactPrePassDurationSeconds': obj.contactPrePassDurationSeconds,
    'dataflowEdges': obj.dataflowEdges?.map(y => y?.map(y => y)),
    'minimumViableContactDurationSeconds': obj.minimumViableContactDurationSeconds,
    'name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'trackingConfigArn': obj.trackingConfigArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationMissionProfileIdResponse
 */
export interface GroundStationMissionProfileIdResponse {
  /**
   * @schema GroundStationMissionProfileIdResponse#missionProfileId
   */
  readonly missionProfileId?: string;

}

/**
 * Converts an object of type 'GroundStationMissionProfileIdResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationMissionProfileIdResponse(obj: GroundStationMissionProfileIdResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'missionProfileId': obj.missionProfileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDeleteConfigRequest
 */
export interface GroundStationDeleteConfigRequest {
  /**
   * @schema GroundStationDeleteConfigRequest#configId
   */
  readonly configId: string;

  /**
   * @schema GroundStationDeleteConfigRequest#configType
   */
  readonly configType: string;

}

/**
 * Converts an object of type 'GroundStationDeleteConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDeleteConfigRequest(obj: GroundStationDeleteConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configId': obj.configId,
    'configType': obj.configType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDeleteDataflowEndpointGroupRequest
 */
export interface GroundStationDeleteDataflowEndpointGroupRequest {
  /**
   * @schema GroundStationDeleteDataflowEndpointGroupRequest#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId: string;

}

/**
 * Converts an object of type 'GroundStationDeleteDataflowEndpointGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDeleteDataflowEndpointGroupRequest(obj: GroundStationDeleteDataflowEndpointGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataflowEndpointGroupId': obj.dataflowEndpointGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDeleteMissionProfileRequest
 */
export interface GroundStationDeleteMissionProfileRequest {
  /**
   * @schema GroundStationDeleteMissionProfileRequest#missionProfileId
   */
  readonly missionProfileId: string;

}

/**
 * Converts an object of type 'GroundStationDeleteMissionProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDeleteMissionProfileRequest(obj: GroundStationDeleteMissionProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'missionProfileId': obj.missionProfileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDescribeContactRequest
 */
export interface GroundStationDescribeContactRequest {
  /**
   * @schema GroundStationDescribeContactRequest#contactId
   */
  readonly contactId: string;

}

/**
 * Converts an object of type 'GroundStationDescribeContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDescribeContactRequest(obj: GroundStationDescribeContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactId': obj.contactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDescribeContactResponse
 */
export interface GroundStationDescribeContactResponse {
  /**
   * @schema GroundStationDescribeContactResponse#contactId
   */
  readonly contactId?: string;

  /**
   * @schema GroundStationDescribeContactResponse#contactStatus
   */
  readonly contactStatus?: string;

  /**
   * @schema GroundStationDescribeContactResponse#dataflowList
   */
  readonly dataflowList?: GroundStationDataflowDetail[];

  /**
   * @schema GroundStationDescribeContactResponse#endTime
   */
  readonly endTime?: string;

  /**
   * @schema GroundStationDescribeContactResponse#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GroundStationDescribeContactResponse#groundStation
   */
  readonly groundStation?: string;

  /**
   * @schema GroundStationDescribeContactResponse#maximumElevation
   */
  readonly maximumElevation?: GroundStationElevation;

  /**
   * @schema GroundStationDescribeContactResponse#missionProfileArn
   */
  readonly missionProfileArn?: string;

  /**
   * @schema GroundStationDescribeContactResponse#postPassEndTime
   */
  readonly postPassEndTime?: string;

  /**
   * @schema GroundStationDescribeContactResponse#prePassStartTime
   */
  readonly prePassStartTime?: string;

  /**
   * @schema GroundStationDescribeContactResponse#region
   */
  readonly region?: string;

  /**
   * @schema GroundStationDescribeContactResponse#satelliteArn
   */
  readonly satelliteArn?: string;

  /**
   * @schema GroundStationDescribeContactResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema GroundStationDescribeContactResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GroundStationDescribeContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDescribeContactResponse(obj: GroundStationDescribeContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactId': obj.contactId,
    'contactStatus': obj.contactStatus,
    'dataflowList': obj.dataflowList?.map(y => toJson_GroundStationDataflowDetail(y)),
    'endTime': obj.endTime,
    'errorMessage': obj.errorMessage,
    'groundStation': obj.groundStation,
    'maximumElevation': toJson_GroundStationElevation(obj.maximumElevation),
    'missionProfileArn': obj.missionProfileArn,
    'postPassEndTime': obj.postPassEndTime,
    'prePassStartTime': obj.prePassStartTime,
    'region': obj.region,
    'satelliteArn': obj.satelliteArn,
    'startTime': obj.startTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGetConfigRequest
 */
export interface GroundStationGetConfigRequest {
  /**
   * @schema GroundStationGetConfigRequest#configId
   */
  readonly configId: string;

  /**
   * @schema GroundStationGetConfigRequest#configType
   */
  readonly configType: string;

}

/**
 * Converts an object of type 'GroundStationGetConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGetConfigRequest(obj: GroundStationGetConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configId': obj.configId,
    'configType': obj.configType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGetConfigResponse
 */
export interface GroundStationGetConfigResponse {
  /**
   * @schema GroundStationGetConfigResponse#configArn
   */
  readonly configArn: string;

  /**
   * @schema GroundStationGetConfigResponse#configData
   */
  readonly configData: GroundStationConfigTypeData;

  /**
   * @schema GroundStationGetConfigResponse#configId
   */
  readonly configId: string;

  /**
   * @schema GroundStationGetConfigResponse#configType
   */
  readonly configType?: string;

  /**
   * @schema GroundStationGetConfigResponse#name
   */
  readonly name: string;

  /**
   * @schema GroundStationGetConfigResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GroundStationGetConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGetConfigResponse(obj: GroundStationGetConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configArn': obj.configArn,
    'configData': toJson_GroundStationConfigTypeData(obj.configData),
    'configId': obj.configId,
    'configType': obj.configType,
    'name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGetDataflowEndpointGroupRequest
 */
export interface GroundStationGetDataflowEndpointGroupRequest {
  /**
   * @schema GroundStationGetDataflowEndpointGroupRequest#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId: string;

}

/**
 * Converts an object of type 'GroundStationGetDataflowEndpointGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGetDataflowEndpointGroupRequest(obj: GroundStationGetDataflowEndpointGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataflowEndpointGroupId': obj.dataflowEndpointGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGetDataflowEndpointGroupResponse
 */
export interface GroundStationGetDataflowEndpointGroupResponse {
  /**
   * @schema GroundStationGetDataflowEndpointGroupResponse#dataflowEndpointGroupArn
   */
  readonly dataflowEndpointGroupArn?: string;

  /**
   * @schema GroundStationGetDataflowEndpointGroupResponse#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId?: string;

  /**
   * @schema GroundStationGetDataflowEndpointGroupResponse#endpointsDetails
   */
  readonly endpointsDetails?: GroundStationEndpointDetails[];

  /**
   * @schema GroundStationGetDataflowEndpointGroupResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GroundStationGetDataflowEndpointGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGetDataflowEndpointGroupResponse(obj: GroundStationGetDataflowEndpointGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataflowEndpointGroupArn': obj.dataflowEndpointGroupArn,
    'dataflowEndpointGroupId': obj.dataflowEndpointGroupId,
    'endpointsDetails': obj.endpointsDetails?.map(y => toJson_GroundStationEndpointDetails(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGetMinuteUsageRequest
 */
export interface GroundStationGetMinuteUsageRequest {
  /**
   * @schema GroundStationGetMinuteUsageRequest#month
   */
  readonly month: number;

  /**
   * @schema GroundStationGetMinuteUsageRequest#year
   */
  readonly year: number;

}

/**
 * Converts an object of type 'GroundStationGetMinuteUsageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGetMinuteUsageRequest(obj: GroundStationGetMinuteUsageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'month': obj.month,
    'year': obj.year,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGetMinuteUsageResponse
 */
export interface GroundStationGetMinuteUsageResponse {
  /**
   * @schema GroundStationGetMinuteUsageResponse#estimatedMinutesRemaining
   */
  readonly estimatedMinutesRemaining?: number;

  /**
   * @schema GroundStationGetMinuteUsageResponse#isReservedMinutesCustomer
   */
  readonly isReservedMinutesCustomer?: boolean;

  /**
   * @schema GroundStationGetMinuteUsageResponse#totalReservedMinuteAllocation
   */
  readonly totalReservedMinuteAllocation?: number;

  /**
   * @schema GroundStationGetMinuteUsageResponse#totalScheduledMinutes
   */
  readonly totalScheduledMinutes?: number;

  /**
   * @schema GroundStationGetMinuteUsageResponse#upcomingMinutesScheduled
   */
  readonly upcomingMinutesScheduled?: number;

}

/**
 * Converts an object of type 'GroundStationGetMinuteUsageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGetMinuteUsageResponse(obj: GroundStationGetMinuteUsageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'estimatedMinutesRemaining': obj.estimatedMinutesRemaining,
    'isReservedMinutesCustomer': obj.isReservedMinutesCustomer,
    'totalReservedMinuteAllocation': obj.totalReservedMinuteAllocation,
    'totalScheduledMinutes': obj.totalScheduledMinutes,
    'upcomingMinutesScheduled': obj.upcomingMinutesScheduled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGetMissionProfileRequest
 */
export interface GroundStationGetMissionProfileRequest {
  /**
   * @schema GroundStationGetMissionProfileRequest#missionProfileId
   */
  readonly missionProfileId: string;

}

/**
 * Converts an object of type 'GroundStationGetMissionProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGetMissionProfileRequest(obj: GroundStationGetMissionProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'missionProfileId': obj.missionProfileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGetMissionProfileResponse
 */
export interface GroundStationGetMissionProfileResponse {
  /**
   * @schema GroundStationGetMissionProfileResponse#contactPostPassDurationSeconds
   */
  readonly contactPostPassDurationSeconds?: number;

  /**
   * @schema GroundStationGetMissionProfileResponse#contactPrePassDurationSeconds
   */
  readonly contactPrePassDurationSeconds?: number;

  /**
   * @schema GroundStationGetMissionProfileResponse#dataflowEdges
   */
  readonly dataflowEdges?: string[][];

  /**
   * @schema GroundStationGetMissionProfileResponse#minimumViableContactDurationSeconds
   */
  readonly minimumViableContactDurationSeconds?: number;

  /**
   * @schema GroundStationGetMissionProfileResponse#missionProfileArn
   */
  readonly missionProfileArn?: string;

  /**
   * @schema GroundStationGetMissionProfileResponse#missionProfileId
   */
  readonly missionProfileId?: string;

  /**
   * @schema GroundStationGetMissionProfileResponse#name
   */
  readonly name?: string;

  /**
   * @schema GroundStationGetMissionProfileResponse#region
   */
  readonly region?: string;

  /**
   * @schema GroundStationGetMissionProfileResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GroundStationGetMissionProfileResponse#trackingConfigArn
   */
  readonly trackingConfigArn?: string;

}

/**
 * Converts an object of type 'GroundStationGetMissionProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGetMissionProfileResponse(obj: GroundStationGetMissionProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactPostPassDurationSeconds': obj.contactPostPassDurationSeconds,
    'contactPrePassDurationSeconds': obj.contactPrePassDurationSeconds,
    'dataflowEdges': obj.dataflowEdges?.map(y => y?.map(y => y)),
    'minimumViableContactDurationSeconds': obj.minimumViableContactDurationSeconds,
    'missionProfileArn': obj.missionProfileArn,
    'missionProfileId': obj.missionProfileId,
    'name': obj.name,
    'region': obj.region,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'trackingConfigArn': obj.trackingConfigArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGetSatelliteRequest
 */
export interface GroundStationGetSatelliteRequest {
  /**
   * @schema GroundStationGetSatelliteRequest#satelliteId
   */
  readonly satelliteId: string;

}

/**
 * Converts an object of type 'GroundStationGetSatelliteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGetSatelliteRequest(obj: GroundStationGetSatelliteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'satelliteId': obj.satelliteId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGetSatelliteResponse
 */
export interface GroundStationGetSatelliteResponse {
  /**
   * @schema GroundStationGetSatelliteResponse#groundStations
   */
  readonly groundStations?: string[];

  /**
   * @schema GroundStationGetSatelliteResponse#noradSatelliteID
   */
  readonly noradSatelliteId?: number;

  /**
   * @schema GroundStationGetSatelliteResponse#satelliteArn
   */
  readonly satelliteArn?: string;

  /**
   * @schema GroundStationGetSatelliteResponse#satelliteId
   */
  readonly satelliteId?: string;

}

/**
 * Converts an object of type 'GroundStationGetSatelliteResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGetSatelliteResponse(obj: GroundStationGetSatelliteResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groundStations': obj.groundStations?.map(y => y),
    'noradSatelliteID': obj.noradSatelliteId,
    'satelliteArn': obj.satelliteArn,
    'satelliteId': obj.satelliteId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListConfigsRequest
 */
export interface GroundStationListConfigsRequest {
  /**
   * @schema GroundStationListConfigsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GroundStationListConfigsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GroundStationListConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListConfigsRequest(obj: GroundStationListConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListConfigsResponse
 */
export interface GroundStationListConfigsResponse {
  /**
   * @schema GroundStationListConfigsResponse#configList
   */
  readonly configList?: GroundStationConfigListItem[];

  /**
   * @schema GroundStationListConfigsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GroundStationListConfigsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListConfigsResponse(obj: GroundStationListConfigsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configList': obj.configList?.map(y => toJson_GroundStationConfigListItem(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListContactsRequest
 */
export interface GroundStationListContactsRequest {
  /**
   * @schema GroundStationListContactsRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema GroundStationListContactsRequest#groundStation
   */
  readonly groundStation?: string;

  /**
   * @schema GroundStationListContactsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GroundStationListContactsRequest#missionProfileArn
   */
  readonly missionProfileArn?: string;

  /**
   * @schema GroundStationListContactsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GroundStationListContactsRequest#satelliteArn
   */
  readonly satelliteArn?: string;

  /**
   * @schema GroundStationListContactsRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema GroundStationListContactsRequest#statusList
   */
  readonly statusList: string[];

}

/**
 * Converts an object of type 'GroundStationListContactsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListContactsRequest(obj: GroundStationListContactsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endTime': obj.endTime,
    'groundStation': obj.groundStation,
    'maxResults': obj.maxResults,
    'missionProfileArn': obj.missionProfileArn,
    'nextToken': obj.nextToken,
    'satelliteArn': obj.satelliteArn,
    'startTime': obj.startTime,
    'statusList': obj.statusList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListContactsResponse
 */
export interface GroundStationListContactsResponse {
  /**
   * @schema GroundStationListContactsResponse#contactList
   */
  readonly contactList?: GroundStationContactData[];

  /**
   * @schema GroundStationListContactsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GroundStationListContactsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListContactsResponse(obj: GroundStationListContactsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactList': obj.contactList?.map(y => toJson_GroundStationContactData(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListDataflowEndpointGroupsRequest
 */
export interface GroundStationListDataflowEndpointGroupsRequest {
  /**
   * @schema GroundStationListDataflowEndpointGroupsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GroundStationListDataflowEndpointGroupsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GroundStationListDataflowEndpointGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListDataflowEndpointGroupsRequest(obj: GroundStationListDataflowEndpointGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListDataflowEndpointGroupsResponse
 */
export interface GroundStationListDataflowEndpointGroupsResponse {
  /**
   * @schema GroundStationListDataflowEndpointGroupsResponse#dataflowEndpointGroupList
   */
  readonly dataflowEndpointGroupList?: GroundStationDataflowEndpointListItem[];

  /**
   * @schema GroundStationListDataflowEndpointGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GroundStationListDataflowEndpointGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListDataflowEndpointGroupsResponse(obj: GroundStationListDataflowEndpointGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataflowEndpointGroupList': obj.dataflowEndpointGroupList?.map(y => toJson_GroundStationDataflowEndpointListItem(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListGroundStationsRequest
 */
export interface GroundStationListGroundStationsRequest {
  /**
   * @schema GroundStationListGroundStationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GroundStationListGroundStationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GroundStationListGroundStationsRequest#satelliteId
   */
  readonly satelliteId?: string;

}

/**
 * Converts an object of type 'GroundStationListGroundStationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListGroundStationsRequest(obj: GroundStationListGroundStationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'satelliteId': obj.satelliteId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListGroundStationsResponse
 */
export interface GroundStationListGroundStationsResponse {
  /**
   * @schema GroundStationListGroundStationsResponse#groundStationList
   */
  readonly groundStationList?: GroundStationGroundStationData[];

  /**
   * @schema GroundStationListGroundStationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GroundStationListGroundStationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListGroundStationsResponse(obj: GroundStationListGroundStationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groundStationList': obj.groundStationList?.map(y => toJson_GroundStationGroundStationData(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListMissionProfilesRequest
 */
export interface GroundStationListMissionProfilesRequest {
  /**
   * @schema GroundStationListMissionProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GroundStationListMissionProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GroundStationListMissionProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListMissionProfilesRequest(obj: GroundStationListMissionProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListMissionProfilesResponse
 */
export interface GroundStationListMissionProfilesResponse {
  /**
   * @schema GroundStationListMissionProfilesResponse#missionProfileList
   */
  readonly missionProfileList?: GroundStationMissionProfileListItem[];

  /**
   * @schema GroundStationListMissionProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GroundStationListMissionProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListMissionProfilesResponse(obj: GroundStationListMissionProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'missionProfileList': obj.missionProfileList?.map(y => toJson_GroundStationMissionProfileListItem(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListSatellitesRequest
 */
export interface GroundStationListSatellitesRequest {
  /**
   * @schema GroundStationListSatellitesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GroundStationListSatellitesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GroundStationListSatellitesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListSatellitesRequest(obj: GroundStationListSatellitesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListSatellitesResponse
 */
export interface GroundStationListSatellitesResponse {
  /**
   * @schema GroundStationListSatellitesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GroundStationListSatellitesResponse#satellites
   */
  readonly satellites?: GroundStationSatelliteListItem[];

}

/**
 * Converts an object of type 'GroundStationListSatellitesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListSatellitesResponse(obj: GroundStationListSatellitesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'satellites': obj.satellites?.map(y => toJson_GroundStationSatelliteListItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListTagsForResourceRequest
 */
export interface GroundStationListTagsForResourceRequest {
  /**
   * @schema GroundStationListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'GroundStationListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListTagsForResourceRequest(obj: GroundStationListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationListTagsForResourceResponse
 */
export interface GroundStationListTagsForResourceResponse {
  /**
   * @schema GroundStationListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GroundStationListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationListTagsForResourceResponse(obj: GroundStationListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationReserveContactRequest
 */
export interface GroundStationReserveContactRequest {
  /**
   * @schema GroundStationReserveContactRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema GroundStationReserveContactRequest#groundStation
   */
  readonly groundStation: string;

  /**
   * @schema GroundStationReserveContactRequest#missionProfileArn
   */
  readonly missionProfileArn: string;

  /**
   * @schema GroundStationReserveContactRequest#satelliteArn
   */
  readonly satelliteArn: string;

  /**
   * @schema GroundStationReserveContactRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema GroundStationReserveContactRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GroundStationReserveContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationReserveContactRequest(obj: GroundStationReserveContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endTime': obj.endTime,
    'groundStation': obj.groundStation,
    'missionProfileArn': obj.missionProfileArn,
    'satelliteArn': obj.satelliteArn,
    'startTime': obj.startTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationTagResourceRequest
 */
export interface GroundStationTagResourceRequest {
  /**
   * @schema GroundStationTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GroundStationTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'GroundStationTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationTagResourceRequest(obj: GroundStationTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationTagResourceResponse
 */
export interface GroundStationTagResourceResponse {
}

/**
 * Converts an object of type 'GroundStationTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationTagResourceResponse(obj: GroundStationTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationUntagResourceRequest
 */
export interface GroundStationUntagResourceRequest {
  /**
   * @schema GroundStationUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GroundStationUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'GroundStationUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationUntagResourceRequest(obj: GroundStationUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationUntagResourceResponse
 */
export interface GroundStationUntagResourceResponse {
}

/**
 * Converts an object of type 'GroundStationUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationUntagResourceResponse(obj: GroundStationUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationUpdateConfigRequest
 */
export interface GroundStationUpdateConfigRequest {
  /**
   * @schema GroundStationUpdateConfigRequest#configData
   */
  readonly configData: GroundStationConfigTypeData;

  /**
   * @schema GroundStationUpdateConfigRequest#configId
   */
  readonly configId: string;

  /**
   * @schema GroundStationUpdateConfigRequest#configType
   */
  readonly configType: string;

  /**
   * @schema GroundStationUpdateConfigRequest#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'GroundStationUpdateConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationUpdateConfigRequest(obj: GroundStationUpdateConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configData': toJson_GroundStationConfigTypeData(obj.configData),
    'configId': obj.configId,
    'configType': obj.configType,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationUpdateMissionProfileRequest
 */
export interface GroundStationUpdateMissionProfileRequest {
  /**
   * @schema GroundStationUpdateMissionProfileRequest#contactPostPassDurationSeconds
   */
  readonly contactPostPassDurationSeconds?: number;

  /**
   * @schema GroundStationUpdateMissionProfileRequest#contactPrePassDurationSeconds
   */
  readonly contactPrePassDurationSeconds?: number;

  /**
   * @schema GroundStationUpdateMissionProfileRequest#dataflowEdges
   */
  readonly dataflowEdges?: string[][];

  /**
   * @schema GroundStationUpdateMissionProfileRequest#minimumViableContactDurationSeconds
   */
  readonly minimumViableContactDurationSeconds?: number;

  /**
   * @schema GroundStationUpdateMissionProfileRequest#missionProfileId
   */
  readonly missionProfileId: string;

  /**
   * @schema GroundStationUpdateMissionProfileRequest#name
   */
  readonly name?: string;

  /**
   * @schema GroundStationUpdateMissionProfileRequest#trackingConfigArn
   */
  readonly trackingConfigArn?: string;

}

/**
 * Converts an object of type 'GroundStationUpdateMissionProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationUpdateMissionProfileRequest(obj: GroundStationUpdateMissionProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactPostPassDurationSeconds': obj.contactPostPassDurationSeconds,
    'contactPrePassDurationSeconds': obj.contactPrePassDurationSeconds,
    'dataflowEdges': obj.dataflowEdges?.map(y => y?.map(y => y)),
    'minimumViableContactDurationSeconds': obj.minimumViableContactDurationSeconds,
    'missionProfileId': obj.missionProfileId,
    'name': obj.name,
    'trackingConfigArn': obj.trackingConfigArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationConfigTypeData
 */
export interface GroundStationConfigTypeData {
  /**
   * @schema GroundStationConfigTypeData#antennaDownlinkConfig
   */
  readonly antennaDownlinkConfig?: GroundStationAntennaDownlinkConfig;

  /**
   * @schema GroundStationConfigTypeData#antennaDownlinkDemodDecodeConfig
   */
  readonly antennaDownlinkDemodDecodeConfig?: GroundStationAntennaDownlinkDemodDecodeConfig;

  /**
   * @schema GroundStationConfigTypeData#antennaUplinkConfig
   */
  readonly antennaUplinkConfig?: GroundStationAntennaUplinkConfig;

  /**
   * @schema GroundStationConfigTypeData#dataflowEndpointConfig
   */
  readonly dataflowEndpointConfig?: GroundStationDataflowEndpointConfig;

  /**
   * @schema GroundStationConfigTypeData#s3RecordingConfig
   */
  readonly s3RecordingConfig?: GroundStationS3RecordingConfig;

  /**
   * @schema GroundStationConfigTypeData#trackingConfig
   */
  readonly trackingConfig?: GroundStationTrackingConfig;

  /**
   * @schema GroundStationConfigTypeData#uplinkEchoConfig
   */
  readonly uplinkEchoConfig?: GroundStationUplinkEchoConfig;

}

/**
 * Converts an object of type 'GroundStationConfigTypeData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationConfigTypeData(obj: GroundStationConfigTypeData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'antennaDownlinkConfig': toJson_GroundStationAntennaDownlinkConfig(obj.antennaDownlinkConfig),
    'antennaDownlinkDemodDecodeConfig': toJson_GroundStationAntennaDownlinkDemodDecodeConfig(obj.antennaDownlinkDemodDecodeConfig),
    'antennaUplinkConfig': toJson_GroundStationAntennaUplinkConfig(obj.antennaUplinkConfig),
    'dataflowEndpointConfig': toJson_GroundStationDataflowEndpointConfig(obj.dataflowEndpointConfig),
    's3RecordingConfig': toJson_GroundStationS3RecordingConfig(obj.s3RecordingConfig),
    'trackingConfig': toJson_GroundStationTrackingConfig(obj.trackingConfig),
    'uplinkEchoConfig': toJson_GroundStationUplinkEchoConfig(obj.uplinkEchoConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationEndpointDetails
 */
export interface GroundStationEndpointDetails {
  /**
   * @schema GroundStationEndpointDetails#endpoint
   */
  readonly endpoint?: GroundStationDataflowEndpoint;

  /**
   * @schema GroundStationEndpointDetails#securityDetails
   */
  readonly securityDetails?: GroundStationSecurityDetails;

}

/**
 * Converts an object of type 'GroundStationEndpointDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationEndpointDetails(obj: GroundStationEndpointDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpoint': toJson_GroundStationDataflowEndpoint(obj.endpoint),
    'securityDetails': toJson_GroundStationSecurityDetails(obj.securityDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDataflowDetail
 */
export interface GroundStationDataflowDetail {
  /**
   * @schema GroundStationDataflowDetail#destination
   */
  readonly destination?: GroundStationDestination;

  /**
   * @schema GroundStationDataflowDetail#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GroundStationDataflowDetail#source
   */
  readonly source?: GroundStationSource;

}

/**
 * Converts an object of type 'GroundStationDataflowDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDataflowDetail(obj: GroundStationDataflowDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'destination': toJson_GroundStationDestination(obj.destination),
    'errorMessage': obj.errorMessage,
    'source': toJson_GroundStationSource(obj.source),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationElevation
 */
export interface GroundStationElevation {
  /**
   * @schema GroundStationElevation#unit
   */
  readonly unit: string;

  /**
   * @schema GroundStationElevation#value
   */
  readonly value: number;

}

/**
 * Converts an object of type 'GroundStationElevation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationElevation(obj: GroundStationElevation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unit': obj.unit,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationConfigListItem
 */
export interface GroundStationConfigListItem {
  /**
   * @schema GroundStationConfigListItem#configArn
   */
  readonly configArn?: string;

  /**
   * @schema GroundStationConfigListItem#configId
   */
  readonly configId?: string;

  /**
   * @schema GroundStationConfigListItem#configType
   */
  readonly configType?: string;

  /**
   * @schema GroundStationConfigListItem#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GroundStationConfigListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationConfigListItem(obj: GroundStationConfigListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configArn': obj.configArn,
    'configId': obj.configId,
    'configType': obj.configType,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationContactData
 */
export interface GroundStationContactData {
  /**
   * @schema GroundStationContactData#contactId
   */
  readonly contactId?: string;

  /**
   * @schema GroundStationContactData#contactStatus
   */
  readonly contactStatus?: string;

  /**
   * @schema GroundStationContactData#endTime
   */
  readonly endTime?: string;

  /**
   * @schema GroundStationContactData#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GroundStationContactData#groundStation
   */
  readonly groundStation?: string;

  /**
   * @schema GroundStationContactData#maximumElevation
   */
  readonly maximumElevation?: GroundStationElevation;

  /**
   * @schema GroundStationContactData#missionProfileArn
   */
  readonly missionProfileArn?: string;

  /**
   * @schema GroundStationContactData#postPassEndTime
   */
  readonly postPassEndTime?: string;

  /**
   * @schema GroundStationContactData#prePassStartTime
   */
  readonly prePassStartTime?: string;

  /**
   * @schema GroundStationContactData#region
   */
  readonly region?: string;

  /**
   * @schema GroundStationContactData#satelliteArn
   */
  readonly satelliteArn?: string;

  /**
   * @schema GroundStationContactData#startTime
   */
  readonly startTime?: string;

  /**
   * @schema GroundStationContactData#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GroundStationContactData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationContactData(obj: GroundStationContactData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactId': obj.contactId,
    'contactStatus': obj.contactStatus,
    'endTime': obj.endTime,
    'errorMessage': obj.errorMessage,
    'groundStation': obj.groundStation,
    'maximumElevation': toJson_GroundStationElevation(obj.maximumElevation),
    'missionProfileArn': obj.missionProfileArn,
    'postPassEndTime': obj.postPassEndTime,
    'prePassStartTime': obj.prePassStartTime,
    'region': obj.region,
    'satelliteArn': obj.satelliteArn,
    'startTime': obj.startTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDataflowEndpointListItem
 */
export interface GroundStationDataflowEndpointListItem {
  /**
   * @schema GroundStationDataflowEndpointListItem#dataflowEndpointGroupArn
   */
  readonly dataflowEndpointGroupArn?: string;

  /**
   * @schema GroundStationDataflowEndpointListItem#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId?: string;

}

/**
 * Converts an object of type 'GroundStationDataflowEndpointListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDataflowEndpointListItem(obj: GroundStationDataflowEndpointListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataflowEndpointGroupArn': obj.dataflowEndpointGroupArn,
    'dataflowEndpointGroupId': obj.dataflowEndpointGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationGroundStationData
 */
export interface GroundStationGroundStationData {
  /**
   * @schema GroundStationGroundStationData#groundStationId
   */
  readonly groundStationId?: string;

  /**
   * @schema GroundStationGroundStationData#groundStationName
   */
  readonly groundStationName?: string;

  /**
   * @schema GroundStationGroundStationData#region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'GroundStationGroundStationData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationGroundStationData(obj: GroundStationGroundStationData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groundStationId': obj.groundStationId,
    'groundStationName': obj.groundStationName,
    'region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationMissionProfileListItem
 */
export interface GroundStationMissionProfileListItem {
  /**
   * @schema GroundStationMissionProfileListItem#missionProfileArn
   */
  readonly missionProfileArn?: string;

  /**
   * @schema GroundStationMissionProfileListItem#missionProfileId
   */
  readonly missionProfileId?: string;

  /**
   * @schema GroundStationMissionProfileListItem#name
   */
  readonly name?: string;

  /**
   * @schema GroundStationMissionProfileListItem#region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'GroundStationMissionProfileListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationMissionProfileListItem(obj: GroundStationMissionProfileListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'missionProfileArn': obj.missionProfileArn,
    'missionProfileId': obj.missionProfileId,
    'name': obj.name,
    'region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationSatelliteListItem
 */
export interface GroundStationSatelliteListItem {
  /**
   * @schema GroundStationSatelliteListItem#groundStations
   */
  readonly groundStations?: string[];

  /**
   * @schema GroundStationSatelliteListItem#noradSatelliteID
   */
  readonly noradSatelliteId?: number;

  /**
   * @schema GroundStationSatelliteListItem#satelliteArn
   */
  readonly satelliteArn?: string;

  /**
   * @schema GroundStationSatelliteListItem#satelliteId
   */
  readonly satelliteId?: string;

}

/**
 * Converts an object of type 'GroundStationSatelliteListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationSatelliteListItem(obj: GroundStationSatelliteListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groundStations': obj.groundStations?.map(y => y),
    'noradSatelliteID': obj.noradSatelliteId,
    'satelliteArn': obj.satelliteArn,
    'satelliteId': obj.satelliteId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationAntennaDownlinkConfig
 */
export interface GroundStationAntennaDownlinkConfig {
  /**
   * @schema GroundStationAntennaDownlinkConfig#spectrumConfig
   */
  readonly spectrumConfig: GroundStationSpectrumConfig;

}

/**
 * Converts an object of type 'GroundStationAntennaDownlinkConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationAntennaDownlinkConfig(obj: GroundStationAntennaDownlinkConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'spectrumConfig': toJson_GroundStationSpectrumConfig(obj.spectrumConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationAntennaDownlinkDemodDecodeConfig
 */
export interface GroundStationAntennaDownlinkDemodDecodeConfig {
  /**
   * @schema GroundStationAntennaDownlinkDemodDecodeConfig#decodeConfig
   */
  readonly decodeConfig: GroundStationDecodeConfig;

  /**
   * @schema GroundStationAntennaDownlinkDemodDecodeConfig#demodulationConfig
   */
  readonly demodulationConfig: GroundStationDemodulationConfig;

  /**
   * @schema GroundStationAntennaDownlinkDemodDecodeConfig#spectrumConfig
   */
  readonly spectrumConfig: GroundStationSpectrumConfig;

}

/**
 * Converts an object of type 'GroundStationAntennaDownlinkDemodDecodeConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationAntennaDownlinkDemodDecodeConfig(obj: GroundStationAntennaDownlinkDemodDecodeConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'decodeConfig': toJson_GroundStationDecodeConfig(obj.decodeConfig),
    'demodulationConfig': toJson_GroundStationDemodulationConfig(obj.demodulationConfig),
    'spectrumConfig': toJson_GroundStationSpectrumConfig(obj.spectrumConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationAntennaUplinkConfig
 */
export interface GroundStationAntennaUplinkConfig {
  /**
   * @schema GroundStationAntennaUplinkConfig#spectrumConfig
   */
  readonly spectrumConfig: GroundStationUplinkSpectrumConfig;

  /**
   * @schema GroundStationAntennaUplinkConfig#targetEirp
   */
  readonly targetEirp: GroundStationEirp;

  /**
   * @schema GroundStationAntennaUplinkConfig#transmitDisabled
   */
  readonly transmitDisabled?: boolean;

}

/**
 * Converts an object of type 'GroundStationAntennaUplinkConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationAntennaUplinkConfig(obj: GroundStationAntennaUplinkConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'spectrumConfig': toJson_GroundStationUplinkSpectrumConfig(obj.spectrumConfig),
    'targetEirp': toJson_GroundStationEirp(obj.targetEirp),
    'transmitDisabled': obj.transmitDisabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDataflowEndpointConfig
 */
export interface GroundStationDataflowEndpointConfig {
  /**
   * @schema GroundStationDataflowEndpointConfig#dataflowEndpointName
   */
  readonly dataflowEndpointName: string;

  /**
   * @schema GroundStationDataflowEndpointConfig#dataflowEndpointRegion
   */
  readonly dataflowEndpointRegion?: string;

}

/**
 * Converts an object of type 'GroundStationDataflowEndpointConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDataflowEndpointConfig(obj: GroundStationDataflowEndpointConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataflowEndpointName': obj.dataflowEndpointName,
    'dataflowEndpointRegion': obj.dataflowEndpointRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationS3RecordingConfig
 */
export interface GroundStationS3RecordingConfig {
  /**
   * @schema GroundStationS3RecordingConfig#bucketArn
   */
  readonly bucketArn: string;

  /**
   * @schema GroundStationS3RecordingConfig#prefix
   */
  readonly prefix?: string;

  /**
   * @schema GroundStationS3RecordingConfig#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'GroundStationS3RecordingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationS3RecordingConfig(obj: GroundStationS3RecordingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketArn': obj.bucketArn,
    'prefix': obj.prefix,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationTrackingConfig
 */
export interface GroundStationTrackingConfig {
  /**
   * @schema GroundStationTrackingConfig#autotrack
   */
  readonly autotrack: string;

}

/**
 * Converts an object of type 'GroundStationTrackingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationTrackingConfig(obj: GroundStationTrackingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'autotrack': obj.autotrack,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationUplinkEchoConfig
 */
export interface GroundStationUplinkEchoConfig {
  /**
   * @schema GroundStationUplinkEchoConfig#antennaUplinkConfigArn
   */
  readonly antennaUplinkConfigArn: string;

  /**
   * @schema GroundStationUplinkEchoConfig#enabled
   */
  readonly enabled: boolean;

}

/**
 * Converts an object of type 'GroundStationUplinkEchoConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationUplinkEchoConfig(obj: GroundStationUplinkEchoConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'antennaUplinkConfigArn': obj.antennaUplinkConfigArn,
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDataflowEndpoint
 */
export interface GroundStationDataflowEndpoint {
  /**
   * @schema GroundStationDataflowEndpoint#address
   */
  readonly address?: GroundStationSocketAddress;

  /**
   * @schema GroundStationDataflowEndpoint#mtu
   */
  readonly mtu?: number;

  /**
   * @schema GroundStationDataflowEndpoint#name
   */
  readonly name?: string;

  /**
   * @schema GroundStationDataflowEndpoint#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GroundStationDataflowEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDataflowEndpoint(obj: GroundStationDataflowEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'address': toJson_GroundStationSocketAddress(obj.address),
    'mtu': obj.mtu,
    'name': obj.name,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationSecurityDetails
 */
export interface GroundStationSecurityDetails {
  /**
   * @schema GroundStationSecurityDetails#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema GroundStationSecurityDetails#securityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema GroundStationSecurityDetails#subnetIds
   */
  readonly subnetIds: string[];

}

/**
 * Converts an object of type 'GroundStationSecurityDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationSecurityDetails(obj: GroundStationSecurityDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'securityGroupIds': obj.securityGroupIds?.map(y => y),
    'subnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDestination
 */
export interface GroundStationDestination {
  /**
   * @schema GroundStationDestination#configDetails
   */
  readonly configDetails?: GroundStationConfigDetails;

  /**
   * @schema GroundStationDestination#configId
   */
  readonly configId?: string;

  /**
   * @schema GroundStationDestination#configType
   */
  readonly configType?: string;

  /**
   * @schema GroundStationDestination#dataflowDestinationRegion
   */
  readonly dataflowDestinationRegion?: string;

}

/**
 * Converts an object of type 'GroundStationDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDestination(obj: GroundStationDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configDetails': toJson_GroundStationConfigDetails(obj.configDetails),
    'configId': obj.configId,
    'configType': obj.configType,
    'dataflowDestinationRegion': obj.dataflowDestinationRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationSource
 */
export interface GroundStationSource {
  /**
   * @schema GroundStationSource#configDetails
   */
  readonly configDetails?: GroundStationConfigDetails;

  /**
   * @schema GroundStationSource#configId
   */
  readonly configId?: string;

  /**
   * @schema GroundStationSource#configType
   */
  readonly configType?: string;

  /**
   * @schema GroundStationSource#dataflowSourceRegion
   */
  readonly dataflowSourceRegion?: string;

}

/**
 * Converts an object of type 'GroundStationSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationSource(obj: GroundStationSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configDetails': toJson_GroundStationConfigDetails(obj.configDetails),
    'configId': obj.configId,
    'configType': obj.configType,
    'dataflowSourceRegion': obj.dataflowSourceRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationSpectrumConfig
 */
export interface GroundStationSpectrumConfig {
  /**
   * @schema GroundStationSpectrumConfig#bandwidth
   */
  readonly bandwidth: GroundStationFrequencyBandwidth;

  /**
   * @schema GroundStationSpectrumConfig#centerFrequency
   */
  readonly centerFrequency: GroundStationFrequency;

  /**
   * @schema GroundStationSpectrumConfig#polarization
   */
  readonly polarization?: string;

}

/**
 * Converts an object of type 'GroundStationSpectrumConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationSpectrumConfig(obj: GroundStationSpectrumConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bandwidth': toJson_GroundStationFrequencyBandwidth(obj.bandwidth),
    'centerFrequency': toJson_GroundStationFrequency(obj.centerFrequency),
    'polarization': obj.polarization,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDecodeConfig
 */
export interface GroundStationDecodeConfig {
  /**
   * @schema GroundStationDecodeConfig#unvalidatedJSON
   */
  readonly unvalidatedJson?: string;

}

/**
 * Converts an object of type 'GroundStationDecodeConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDecodeConfig(obj: GroundStationDecodeConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unvalidatedJSON': obj.unvalidatedJson,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationDemodulationConfig
 */
export interface GroundStationDemodulationConfig {
  /**
   * @schema GroundStationDemodulationConfig#unvalidatedJSON
   */
  readonly unvalidatedJson?: string;

}

/**
 * Converts an object of type 'GroundStationDemodulationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationDemodulationConfig(obj: GroundStationDemodulationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unvalidatedJSON': obj.unvalidatedJson,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationUplinkSpectrumConfig
 */
export interface GroundStationUplinkSpectrumConfig {
  /**
   * @schema GroundStationUplinkSpectrumConfig#centerFrequency
   */
  readonly centerFrequency: GroundStationFrequency;

  /**
   * @schema GroundStationUplinkSpectrumConfig#polarization
   */
  readonly polarization?: string;

}

/**
 * Converts an object of type 'GroundStationUplinkSpectrumConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationUplinkSpectrumConfig(obj: GroundStationUplinkSpectrumConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'centerFrequency': toJson_GroundStationFrequency(obj.centerFrequency),
    'polarization': obj.polarization,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationEirp
 */
export interface GroundStationEirp {
  /**
   * @schema GroundStationEirp#units
   */
  readonly units: string;

  /**
   * @schema GroundStationEirp#value
   */
  readonly value: number;

}

/**
 * Converts an object of type 'GroundStationEirp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationEirp(obj: GroundStationEirp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'units': obj.units,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationSocketAddress
 */
export interface GroundStationSocketAddress {
  /**
   * @schema GroundStationSocketAddress#name
   */
  readonly name: string;

  /**
   * @schema GroundStationSocketAddress#port
   */
  readonly port: number;

}

/**
 * Converts an object of type 'GroundStationSocketAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationSocketAddress(obj: GroundStationSocketAddress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationConfigDetails
 */
export interface GroundStationConfigDetails {
  /**
   * @schema GroundStationConfigDetails#antennaDemodDecodeDetails
   */
  readonly antennaDemodDecodeDetails?: GroundStationAntennaDemodDecodeDetails;

  /**
   * @schema GroundStationConfigDetails#endpointDetails
   */
  readonly endpointDetails?: GroundStationEndpointDetails;

  /**
   * @schema GroundStationConfigDetails#s3RecordingDetails
   */
  readonly s3RecordingDetails?: GroundStationS3RecordingDetails;

}

/**
 * Converts an object of type 'GroundStationConfigDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationConfigDetails(obj: GroundStationConfigDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'antennaDemodDecodeDetails': toJson_GroundStationAntennaDemodDecodeDetails(obj.antennaDemodDecodeDetails),
    'endpointDetails': toJson_GroundStationEndpointDetails(obj.endpointDetails),
    's3RecordingDetails': toJson_GroundStationS3RecordingDetails(obj.s3RecordingDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationFrequencyBandwidth
 */
export interface GroundStationFrequencyBandwidth {
  /**
   * @schema GroundStationFrequencyBandwidth#units
   */
  readonly units: string;

  /**
   * @schema GroundStationFrequencyBandwidth#value
   */
  readonly value: number;

}

/**
 * Converts an object of type 'GroundStationFrequencyBandwidth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationFrequencyBandwidth(obj: GroundStationFrequencyBandwidth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'units': obj.units,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationFrequency
 */
export interface GroundStationFrequency {
  /**
   * @schema GroundStationFrequency#units
   */
  readonly units: string;

  /**
   * @schema GroundStationFrequency#value
   */
  readonly value: number;

}

/**
 * Converts an object of type 'GroundStationFrequency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationFrequency(obj: GroundStationFrequency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'units': obj.units,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationAntennaDemodDecodeDetails
 */
export interface GroundStationAntennaDemodDecodeDetails {
  /**
   * @schema GroundStationAntennaDemodDecodeDetails#outputNode
   */
  readonly outputNode?: string;

}

/**
 * Converts an object of type 'GroundStationAntennaDemodDecodeDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationAntennaDemodDecodeDetails(obj: GroundStationAntennaDemodDecodeDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'outputNode': obj.outputNode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GroundStationS3RecordingDetails
 */
export interface GroundStationS3RecordingDetails {
  /**
   * @schema GroundStationS3RecordingDetails#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema GroundStationS3RecordingDetails#keyTemplate
   */
  readonly keyTemplate?: string;

}

/**
 * Converts an object of type 'GroundStationS3RecordingDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GroundStationS3RecordingDetails(obj: GroundStationS3RecordingDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketArn': obj.bucketArn,
    'keyTemplate': obj.keyTemplate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
