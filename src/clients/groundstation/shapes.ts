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
 * @schema GroundStationContactIdResponse
 */
export interface GroundStationContactIdResponse {
  /**
   * @schema GroundStationContactIdResponse#contactId
   */
  readonly contactId?: string;

}

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
 * @schema GroundStationDataflowEndpointGroupIdResponse
 */
export interface GroundStationDataflowEndpointGroupIdResponse {
  /**
   * @schema GroundStationDataflowEndpointGroupIdResponse#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId?: string;

}

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
 * @schema GroundStationMissionProfileIdResponse
 */
export interface GroundStationMissionProfileIdResponse {
  /**
   * @schema GroundStationMissionProfileIdResponse#missionProfileId
   */
  readonly missionProfileId?: string;

}

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
 * @schema GroundStationDeleteDataflowEndpointGroupRequest
 */
export interface GroundStationDeleteDataflowEndpointGroupRequest {
  /**
   * @schema GroundStationDeleteDataflowEndpointGroupRequest#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId: string;

}

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
 * @schema GroundStationDescribeContactRequest
 */
export interface GroundStationDescribeContactRequest {
  /**
   * @schema GroundStationDescribeContactRequest#contactId
   */
  readonly contactId: string;

}

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
 * @schema GroundStationGetDataflowEndpointGroupRequest
 */
export interface GroundStationGetDataflowEndpointGroupRequest {
  /**
   * @schema GroundStationGetDataflowEndpointGroupRequest#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId: string;

}

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
 * @schema GroundStationGetMissionProfileRequest
 */
export interface GroundStationGetMissionProfileRequest {
  /**
   * @schema GroundStationGetMissionProfileRequest#missionProfileId
   */
  readonly missionProfileId: string;

}

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
 * @schema GroundStationGetSatelliteRequest
 */
export interface GroundStationGetSatelliteRequest {
  /**
   * @schema GroundStationGetSatelliteRequest#satelliteId
   */
  readonly satelliteId: string;

}

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
  readonly noradSatelliteID?: number;

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
 * @schema GroundStationListTagsForResourceRequest
 */
export interface GroundStationListTagsForResourceRequest {
  /**
   * @schema GroundStationListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema GroundStationTagResourceResponse
 */
export interface GroundStationTagResourceResponse {
}

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
 * @schema GroundStationUntagResourceResponse
 */
export interface GroundStationUntagResourceResponse {
}

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
   * @schema GroundStationConfigTypeData#trackingConfig
   */
  readonly trackingConfig?: GroundStationTrackingConfig;

  /**
   * @schema GroundStationConfigTypeData#uplinkEchoConfig
   */
  readonly uplinkEchoConfig?: GroundStationUplinkEchoConfig;

}

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
  readonly noradSatelliteID?: number;

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
 * @schema GroundStationAntennaDownlinkConfig
 */
export interface GroundStationAntennaDownlinkConfig {
  /**
   * @schema GroundStationAntennaDownlinkConfig#spectrumConfig
   */
  readonly spectrumConfig: GroundStationSpectrumConfig;

}

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
 * @schema GroundStationTrackingConfig
 */
export interface GroundStationTrackingConfig {
  /**
   * @schema GroundStationTrackingConfig#autotrack
   */
  readonly autotrack: string;

}

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
 * @schema GroundStationDecodeConfig
 */
export interface GroundStationDecodeConfig {
  /**
   * @schema GroundStationDecodeConfig#unvalidatedJSON
   */
  readonly unvalidatedJSON?: string;

}

/**
 * @schema GroundStationDemodulationConfig
 */
export interface GroundStationDemodulationConfig {
  /**
   * @schema GroundStationDemodulationConfig#unvalidatedJSON
   */
  readonly unvalidatedJSON?: string;

}

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

}

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
 * @schema GroundStationAntennaDemodDecodeDetails
 */
export interface GroundStationAntennaDemodDecodeDetails {
  /**
   * @schema GroundStationAntennaDemodDecodeDetails#outputNode
   */
  readonly outputNode?: string;

}
