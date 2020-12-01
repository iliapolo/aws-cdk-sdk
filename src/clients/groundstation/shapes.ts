/**
 * @schema CancelContactRequest
 */
export interface CancelContactRequest {
  /**
   * @schema CancelContactRequest#contactId
   */
  readonly contactId: string;

}

/**
 * @schema ContactIdResponse
 */
export interface ContactIdResponse {
  /**
   * @schema ContactIdResponse#contactId
   */
  readonly contactId?: string;

}

/**
 * @schema CreateConfigRequest
 */
export interface CreateConfigRequest {
  /**
   * @schema CreateConfigRequest#configData
   */
  readonly configData: ConfigTypeData;

  /**
   * @schema CreateConfigRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateConfigRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ConfigIdResponse
 */
export interface ConfigIdResponse {
  /**
   * @schema ConfigIdResponse#configArn
   */
  readonly configArn?: string;

  /**
   * @schema ConfigIdResponse#configId
   */
  readonly configId?: string;

  /**
   * @schema ConfigIdResponse#configType
   */
  readonly configType?: string;

}

/**
 * @schema CreateDataflowEndpointGroupRequest
 */
export interface CreateDataflowEndpointGroupRequest {
  /**
   * @schema CreateDataflowEndpointGroupRequest#endpointDetails
   */
  readonly endpointDetails: EndpointDetails[];

  /**
   * @schema CreateDataflowEndpointGroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DataflowEndpointGroupIdResponse
 */
export interface DataflowEndpointGroupIdResponse {
  /**
   * @schema DataflowEndpointGroupIdResponse#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId?: string;

}

/**
 * @schema CreateMissionProfileRequest
 */
export interface CreateMissionProfileRequest {
  /**
   * @schema CreateMissionProfileRequest#contactPostPassDurationSeconds
   */
  readonly contactPostPassDurationSeconds?: number;

  /**
   * @schema CreateMissionProfileRequest#contactPrePassDurationSeconds
   */
  readonly contactPrePassDurationSeconds?: number;

  /**
   * @schema CreateMissionProfileRequest#dataflowEdges
   */
  readonly dataflowEdges: string[][];

  /**
   * @schema CreateMissionProfileRequest#minimumViableContactDurationSeconds
   */
  readonly minimumViableContactDurationSeconds: number;

  /**
   * @schema CreateMissionProfileRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateMissionProfileRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateMissionProfileRequest#trackingConfigArn
   */
  readonly trackingConfigArn: string;

}

/**
 * @schema MissionProfileIdResponse
 */
export interface MissionProfileIdResponse {
  /**
   * @schema MissionProfileIdResponse#missionProfileId
   */
  readonly missionProfileId?: string;

}

/**
 * @schema DeleteConfigRequest
 */
export interface DeleteConfigRequest {
  /**
   * @schema DeleteConfigRequest#configId
   */
  readonly configId: string;

  /**
   * @schema DeleteConfigRequest#configType
   */
  readonly configType: string;

}

/**
 * @schema DeleteDataflowEndpointGroupRequest
 */
export interface DeleteDataflowEndpointGroupRequest {
  /**
   * @schema DeleteDataflowEndpointGroupRequest#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId: string;

}

/**
 * @schema DeleteMissionProfileRequest
 */
export interface DeleteMissionProfileRequest {
  /**
   * @schema DeleteMissionProfileRequest#missionProfileId
   */
  readonly missionProfileId: string;

}

/**
 * @schema DescribeContactRequest
 */
export interface DescribeContactRequest {
  /**
   * @schema DescribeContactRequest#contactId
   */
  readonly contactId: string;

}

/**
 * @schema DescribeContactResponse
 */
export interface DescribeContactResponse {
  /**
   * @schema DescribeContactResponse#contactId
   */
  readonly contactId?: string;

  /**
   * @schema DescribeContactResponse#contactStatus
   */
  readonly contactStatus?: string;

  /**
   * @schema DescribeContactResponse#dataflowList
   */
  readonly dataflowList?: DataflowDetail[];

  /**
   * @schema DescribeContactResponse#endTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeContactResponse#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DescribeContactResponse#groundStation
   */
  readonly groundStation?: string;

  /**
   * @schema DescribeContactResponse#maximumElevation
   */
  readonly maximumElevation?: Elevation;

  /**
   * @schema DescribeContactResponse#missionProfileArn
   */
  readonly missionProfileArn?: string;

  /**
   * @schema DescribeContactResponse#postPassEndTime
   */
  readonly postPassEndTime?: string;

  /**
   * @schema DescribeContactResponse#prePassStartTime
   */
  readonly prePassStartTime?: string;

  /**
   * @schema DescribeContactResponse#region
   */
  readonly region?: string;

  /**
   * @schema DescribeContactResponse#satelliteArn
   */
  readonly satelliteArn?: string;

  /**
   * @schema DescribeContactResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeContactResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetConfigRequest
 */
export interface GetConfigRequest {
  /**
   * @schema GetConfigRequest#configId
   */
  readonly configId: string;

  /**
   * @schema GetConfigRequest#configType
   */
  readonly configType: string;

}

/**
 * @schema GetConfigResponse
 */
export interface GetConfigResponse {
  /**
   * @schema GetConfigResponse#configArn
   */
  readonly configArn: string;

  /**
   * @schema GetConfigResponse#configData
   */
  readonly configData: ConfigTypeData;

  /**
   * @schema GetConfigResponse#configId
   */
  readonly configId: string;

  /**
   * @schema GetConfigResponse#configType
   */
  readonly configType?: string;

  /**
   * @schema GetConfigResponse#name
   */
  readonly name: string;

  /**
   * @schema GetConfigResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetDataflowEndpointGroupRequest
 */
export interface GetDataflowEndpointGroupRequest {
  /**
   * @schema GetDataflowEndpointGroupRequest#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId: string;

}

/**
 * @schema GetDataflowEndpointGroupResponse
 */
export interface GetDataflowEndpointGroupResponse {
  /**
   * @schema GetDataflowEndpointGroupResponse#dataflowEndpointGroupArn
   */
  readonly dataflowEndpointGroupArn?: string;

  /**
   * @schema GetDataflowEndpointGroupResponse#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId?: string;

  /**
   * @schema GetDataflowEndpointGroupResponse#endpointsDetails
   */
  readonly endpointsDetails?: EndpointDetails[];

  /**
   * @schema GetDataflowEndpointGroupResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetMinuteUsageRequest
 */
export interface GetMinuteUsageRequest {
  /**
   * @schema GetMinuteUsageRequest#month
   */
  readonly month: number;

  /**
   * @schema GetMinuteUsageRequest#year
   */
  readonly year: number;

}

/**
 * @schema GetMinuteUsageResponse
 */
export interface GetMinuteUsageResponse {
  /**
   * @schema GetMinuteUsageResponse#estimatedMinutesRemaining
   */
  readonly estimatedMinutesRemaining?: number;

  /**
   * @schema GetMinuteUsageResponse#isReservedMinutesCustomer
   */
  readonly isReservedMinutesCustomer?: boolean;

  /**
   * @schema GetMinuteUsageResponse#totalReservedMinuteAllocation
   */
  readonly totalReservedMinuteAllocation?: number;

  /**
   * @schema GetMinuteUsageResponse#totalScheduledMinutes
   */
  readonly totalScheduledMinutes?: number;

  /**
   * @schema GetMinuteUsageResponse#upcomingMinutesScheduled
   */
  readonly upcomingMinutesScheduled?: number;

}

/**
 * @schema GetMissionProfileRequest
 */
export interface GetMissionProfileRequest {
  /**
   * @schema GetMissionProfileRequest#missionProfileId
   */
  readonly missionProfileId: string;

}

/**
 * @schema GetMissionProfileResponse
 */
export interface GetMissionProfileResponse {
  /**
   * @schema GetMissionProfileResponse#contactPostPassDurationSeconds
   */
  readonly contactPostPassDurationSeconds?: number;

  /**
   * @schema GetMissionProfileResponse#contactPrePassDurationSeconds
   */
  readonly contactPrePassDurationSeconds?: number;

  /**
   * @schema GetMissionProfileResponse#dataflowEdges
   */
  readonly dataflowEdges?: string[][];

  /**
   * @schema GetMissionProfileResponse#minimumViableContactDurationSeconds
   */
  readonly minimumViableContactDurationSeconds?: number;

  /**
   * @schema GetMissionProfileResponse#missionProfileArn
   */
  readonly missionProfileArn?: string;

  /**
   * @schema GetMissionProfileResponse#missionProfileId
   */
  readonly missionProfileId?: string;

  /**
   * @schema GetMissionProfileResponse#name
   */
  readonly name?: string;

  /**
   * @schema GetMissionProfileResponse#region
   */
  readonly region?: string;

  /**
   * @schema GetMissionProfileResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GetMissionProfileResponse#trackingConfigArn
   */
  readonly trackingConfigArn?: string;

}

/**
 * @schema GetSatelliteRequest
 */
export interface GetSatelliteRequest {
  /**
   * @schema GetSatelliteRequest#satelliteId
   */
  readonly satelliteId: string;

}

/**
 * @schema GetSatelliteResponse
 */
export interface GetSatelliteResponse {
  /**
   * @schema GetSatelliteResponse#groundStations
   */
  readonly groundStations?: string[];

  /**
   * @schema GetSatelliteResponse#noradSatelliteID
   */
  readonly noradSatelliteID?: number;

  /**
   * @schema GetSatelliteResponse#satelliteArn
   */
  readonly satelliteArn?: string;

  /**
   * @schema GetSatelliteResponse#satelliteId
   */
  readonly satelliteId?: string;

}

/**
 * @schema ListConfigsRequest
 */
export interface ListConfigsRequest {
  /**
   * @schema ListConfigsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListConfigsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConfigsResponse
 */
export interface ListConfigsResponse {
  /**
   * @schema ListConfigsResponse#configList
   */
  readonly configList?: ConfigListItem[];

  /**
   * @schema ListConfigsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListContactsRequest
 */
export interface ListContactsRequest {
  /**
   * @schema ListContactsRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema ListContactsRequest#groundStation
   */
  readonly groundStation?: string;

  /**
   * @schema ListContactsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListContactsRequest#missionProfileArn
   */
  readonly missionProfileArn?: string;

  /**
   * @schema ListContactsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListContactsRequest#satelliteArn
   */
  readonly satelliteArn?: string;

  /**
   * @schema ListContactsRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema ListContactsRequest#statusList
   */
  readonly statusList: string[];

}

/**
 * @schema ListContactsResponse
 */
export interface ListContactsResponse {
  /**
   * @schema ListContactsResponse#contactList
   */
  readonly contactList?: ContactData[];

  /**
   * @schema ListContactsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDataflowEndpointGroupsRequest
 */
export interface ListDataflowEndpointGroupsRequest {
  /**
   * @schema ListDataflowEndpointGroupsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDataflowEndpointGroupsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDataflowEndpointGroupsResponse
 */
export interface ListDataflowEndpointGroupsResponse {
  /**
   * @schema ListDataflowEndpointGroupsResponse#dataflowEndpointGroupList
   */
  readonly dataflowEndpointGroupList?: DataflowEndpointListItem[];

  /**
   * @schema ListDataflowEndpointGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGroundStationsRequest
 */
export interface ListGroundStationsRequest {
  /**
   * @schema ListGroundStationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListGroundStationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGroundStationsRequest#satelliteId
   */
  readonly satelliteId?: string;

}

/**
 * @schema ListGroundStationsResponse
 */
export interface ListGroundStationsResponse {
  /**
   * @schema ListGroundStationsResponse#groundStationList
   */
  readonly groundStationList?: GroundStationData[];

  /**
   * @schema ListGroundStationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMissionProfilesRequest
 */
export interface ListMissionProfilesRequest {
  /**
   * @schema ListMissionProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMissionProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMissionProfilesResponse
 */
export interface ListMissionProfilesResponse {
  /**
   * @schema ListMissionProfilesResponse#missionProfileList
   */
  readonly missionProfileList?: MissionProfileListItem[];

  /**
   * @schema ListMissionProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSatellitesRequest
 */
export interface ListSatellitesRequest {
  /**
   * @schema ListSatellitesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSatellitesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSatellitesResponse
 */
export interface ListSatellitesResponse {
  /**
   * @schema ListSatellitesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSatellitesResponse#satellites
   */
  readonly satellites?: SatelliteListItem[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ReserveContactRequest
 */
export interface ReserveContactRequest {
  /**
   * @schema ReserveContactRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema ReserveContactRequest#groundStation
   */
  readonly groundStation: string;

  /**
   * @schema ReserveContactRequest#missionProfileArn
   */
  readonly missionProfileArn: string;

  /**
   * @schema ReserveContactRequest#satelliteArn
   */
  readonly satelliteArn: string;

  /**
   * @schema ReserveContactRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema ReserveContactRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
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
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateConfigRequest
 */
export interface UpdateConfigRequest {
  /**
   * @schema UpdateConfigRequest#configData
   */
  readonly configData: ConfigTypeData;

  /**
   * @schema UpdateConfigRequest#configId
   */
  readonly configId: string;

  /**
   * @schema UpdateConfigRequest#configType
   */
  readonly configType: string;

  /**
   * @schema UpdateConfigRequest#name
   */
  readonly name: string;

}

/**
 * @schema UpdateMissionProfileRequest
 */
export interface UpdateMissionProfileRequest {
  /**
   * @schema UpdateMissionProfileRequest#contactPostPassDurationSeconds
   */
  readonly contactPostPassDurationSeconds?: number;

  /**
   * @schema UpdateMissionProfileRequest#contactPrePassDurationSeconds
   */
  readonly contactPrePassDurationSeconds?: number;

  /**
   * @schema UpdateMissionProfileRequest#dataflowEdges
   */
  readonly dataflowEdges?: string[][];

  /**
   * @schema UpdateMissionProfileRequest#minimumViableContactDurationSeconds
   */
  readonly minimumViableContactDurationSeconds?: number;

  /**
   * @schema UpdateMissionProfileRequest#missionProfileId
   */
  readonly missionProfileId: string;

  /**
   * @schema UpdateMissionProfileRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateMissionProfileRequest#trackingConfigArn
   */
  readonly trackingConfigArn?: string;

}

/**
 * @schema ConfigTypeData
 */
export interface ConfigTypeData {
  /**
   * @schema ConfigTypeData#antennaDownlinkConfig
   */
  readonly antennaDownlinkConfig?: AntennaDownlinkConfig;

  /**
   * @schema ConfigTypeData#antennaDownlinkDemodDecodeConfig
   */
  readonly antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;

  /**
   * @schema ConfigTypeData#antennaUplinkConfig
   */
  readonly antennaUplinkConfig?: AntennaUplinkConfig;

  /**
   * @schema ConfigTypeData#dataflowEndpointConfig
   */
  readonly dataflowEndpointConfig?: DataflowEndpointConfig;

  /**
   * @schema ConfigTypeData#trackingConfig
   */
  readonly trackingConfig?: TrackingConfig;

  /**
   * @schema ConfigTypeData#uplinkEchoConfig
   */
  readonly uplinkEchoConfig?: UplinkEchoConfig;

}

/**
 * @schema EndpointDetails
 */
export interface EndpointDetails {
  /**
   * @schema EndpointDetails#endpoint
   */
  readonly endpoint?: DataflowEndpoint;

  /**
   * @schema EndpointDetails#securityDetails
   */
  readonly securityDetails?: SecurityDetails;

}

/**
 * @schema DataflowDetail
 */
export interface DataflowDetail {
  /**
   * @schema DataflowDetail#destination
   */
  readonly destination?: Destination;

  /**
   * @schema DataflowDetail#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DataflowDetail#source
   */
  readonly source?: Source;

}

/**
 * @schema Elevation
 */
export interface Elevation {
  /**
   * @schema Elevation#unit
   */
  readonly unit: string;

  /**
   * @schema Elevation#value
   */
  readonly value: number;

}

/**
 * @schema ConfigListItem
 */
export interface ConfigListItem {
  /**
   * @schema ConfigListItem#configArn
   */
  readonly configArn?: string;

  /**
   * @schema ConfigListItem#configId
   */
  readonly configId?: string;

  /**
   * @schema ConfigListItem#configType
   */
  readonly configType?: string;

  /**
   * @schema ConfigListItem#name
   */
  readonly name?: string;

}

/**
 * @schema ContactData
 */
export interface ContactData {
  /**
   * @schema ContactData#contactId
   */
  readonly contactId?: string;

  /**
   * @schema ContactData#contactStatus
   */
  readonly contactStatus?: string;

  /**
   * @schema ContactData#endTime
   */
  readonly endTime?: string;

  /**
   * @schema ContactData#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema ContactData#groundStation
   */
  readonly groundStation?: string;

  /**
   * @schema ContactData#maximumElevation
   */
  readonly maximumElevation?: Elevation;

  /**
   * @schema ContactData#missionProfileArn
   */
  readonly missionProfileArn?: string;

  /**
   * @schema ContactData#postPassEndTime
   */
  readonly postPassEndTime?: string;

  /**
   * @schema ContactData#prePassStartTime
   */
  readonly prePassStartTime?: string;

  /**
   * @schema ContactData#region
   */
  readonly region?: string;

  /**
   * @schema ContactData#satelliteArn
   */
  readonly satelliteArn?: string;

  /**
   * @schema ContactData#startTime
   */
  readonly startTime?: string;

  /**
   * @schema ContactData#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DataflowEndpointListItem
 */
export interface DataflowEndpointListItem {
  /**
   * @schema DataflowEndpointListItem#dataflowEndpointGroupArn
   */
  readonly dataflowEndpointGroupArn?: string;

  /**
   * @schema DataflowEndpointListItem#dataflowEndpointGroupId
   */
  readonly dataflowEndpointGroupId?: string;

}

/**
 * @schema GroundStationData
 */
export interface GroundStationData {
  /**
   * @schema GroundStationData#groundStationId
   */
  readonly groundStationId?: string;

  /**
   * @schema GroundStationData#groundStationName
   */
  readonly groundStationName?: string;

  /**
   * @schema GroundStationData#region
   */
  readonly region?: string;

}

/**
 * @schema MissionProfileListItem
 */
export interface MissionProfileListItem {
  /**
   * @schema MissionProfileListItem#missionProfileArn
   */
  readonly missionProfileArn?: string;

  /**
   * @schema MissionProfileListItem#missionProfileId
   */
  readonly missionProfileId?: string;

  /**
   * @schema MissionProfileListItem#name
   */
  readonly name?: string;

  /**
   * @schema MissionProfileListItem#region
   */
  readonly region?: string;

}

/**
 * @schema SatelliteListItem
 */
export interface SatelliteListItem {
  /**
   * @schema SatelliteListItem#groundStations
   */
  readonly groundStations?: string[];

  /**
   * @schema SatelliteListItem#noradSatelliteID
   */
  readonly noradSatelliteID?: number;

  /**
   * @schema SatelliteListItem#satelliteArn
   */
  readonly satelliteArn?: string;

  /**
   * @schema SatelliteListItem#satelliteId
   */
  readonly satelliteId?: string;

}

/**
 * @schema AntennaDownlinkConfig
 */
export interface AntennaDownlinkConfig {
  /**
   * @schema AntennaDownlinkConfig#spectrumConfig
   */
  readonly spectrumConfig: SpectrumConfig;

}

/**
 * @schema AntennaDownlinkDemodDecodeConfig
 */
export interface AntennaDownlinkDemodDecodeConfig {
  /**
   * @schema AntennaDownlinkDemodDecodeConfig#decodeConfig
   */
  readonly decodeConfig: DecodeConfig;

  /**
   * @schema AntennaDownlinkDemodDecodeConfig#demodulationConfig
   */
  readonly demodulationConfig: DemodulationConfig;

  /**
   * @schema AntennaDownlinkDemodDecodeConfig#spectrumConfig
   */
  readonly spectrumConfig: SpectrumConfig;

}

/**
 * @schema AntennaUplinkConfig
 */
export interface AntennaUplinkConfig {
  /**
   * @schema AntennaUplinkConfig#spectrumConfig
   */
  readonly spectrumConfig: UplinkSpectrumConfig;

  /**
   * @schema AntennaUplinkConfig#targetEirp
   */
  readonly targetEirp: Eirp;

  /**
   * @schema AntennaUplinkConfig#transmitDisabled
   */
  readonly transmitDisabled?: boolean;

}

/**
 * @schema DataflowEndpointConfig
 */
export interface DataflowEndpointConfig {
  /**
   * @schema DataflowEndpointConfig#dataflowEndpointName
   */
  readonly dataflowEndpointName: string;

  /**
   * @schema DataflowEndpointConfig#dataflowEndpointRegion
   */
  readonly dataflowEndpointRegion?: string;

}

/**
 * @schema TrackingConfig
 */
export interface TrackingConfig {
  /**
   * @schema TrackingConfig#autotrack
   */
  readonly autotrack: string;

}

/**
 * @schema UplinkEchoConfig
 */
export interface UplinkEchoConfig {
  /**
   * @schema UplinkEchoConfig#antennaUplinkConfigArn
   */
  readonly antennaUplinkConfigArn: string;

  /**
   * @schema UplinkEchoConfig#enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema DataflowEndpoint
 */
export interface DataflowEndpoint {
  /**
   * @schema DataflowEndpoint#address
   */
  readonly address?: SocketAddress;

  /**
   * @schema DataflowEndpoint#mtu
   */
  readonly mtu?: number;

  /**
   * @schema DataflowEndpoint#name
   */
  readonly name?: string;

  /**
   * @schema DataflowEndpoint#status
   */
  readonly status?: string;

}

/**
 * @schema SecurityDetails
 */
export interface SecurityDetails {
  /**
   * @schema SecurityDetails#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema SecurityDetails#securityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema SecurityDetails#subnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema Destination
 */
export interface Destination {
  /**
   * @schema Destination#configDetails
   */
  readonly configDetails?: ConfigDetails;

  /**
   * @schema Destination#configId
   */
  readonly configId?: string;

  /**
   * @schema Destination#configType
   */
  readonly configType?: string;

  /**
   * @schema Destination#dataflowDestinationRegion
   */
  readonly dataflowDestinationRegion?: string;

}

/**
 * @schema Source
 */
export interface Source {
  /**
   * @schema Source#configDetails
   */
  readonly configDetails?: ConfigDetails;

  /**
   * @schema Source#configId
   */
  readonly configId?: string;

  /**
   * @schema Source#configType
   */
  readonly configType?: string;

  /**
   * @schema Source#dataflowSourceRegion
   */
  readonly dataflowSourceRegion?: string;

}

/**
 * @schema SpectrumConfig
 */
export interface SpectrumConfig {
  /**
   * @schema SpectrumConfig#bandwidth
   */
  readonly bandwidth: FrequencyBandwidth;

  /**
   * @schema SpectrumConfig#centerFrequency
   */
  readonly centerFrequency: Frequency;

  /**
   * @schema SpectrumConfig#polarization
   */
  readonly polarization?: string;

}

/**
 * @schema DecodeConfig
 */
export interface DecodeConfig {
  /**
   * @schema DecodeConfig#unvalidatedJSON
   */
  readonly unvalidatedJSON?: string;

}

/**
 * @schema DemodulationConfig
 */
export interface DemodulationConfig {
  /**
   * @schema DemodulationConfig#unvalidatedJSON
   */
  readonly unvalidatedJSON?: string;

}

/**
 * @schema UplinkSpectrumConfig
 */
export interface UplinkSpectrumConfig {
  /**
   * @schema UplinkSpectrumConfig#centerFrequency
   */
  readonly centerFrequency: Frequency;

  /**
   * @schema UplinkSpectrumConfig#polarization
   */
  readonly polarization?: string;

}

/**
 * @schema Eirp
 */
export interface Eirp {
  /**
   * @schema Eirp#units
   */
  readonly units: string;

  /**
   * @schema Eirp#value
   */
  readonly value: number;

}

/**
 * @schema SocketAddress
 */
export interface SocketAddress {
  /**
   * @schema SocketAddress#name
   */
  readonly name: string;

  /**
   * @schema SocketAddress#port
   */
  readonly port: number;

}

/**
 * @schema ConfigDetails
 */
export interface ConfigDetails {
  /**
   * @schema ConfigDetails#antennaDemodDecodeDetails
   */
  readonly antennaDemodDecodeDetails?: AntennaDemodDecodeDetails;

  /**
   * @schema ConfigDetails#endpointDetails
   */
  readonly endpointDetails?: EndpointDetails;

}

/**
 * @schema FrequencyBandwidth
 */
export interface FrequencyBandwidth {
  /**
   * @schema FrequencyBandwidth#units
   */
  readonly units: string;

  /**
   * @schema FrequencyBandwidth#value
   */
  readonly value: number;

}

/**
 * @schema Frequency
 */
export interface Frequency {
  /**
   * @schema Frequency#units
   */
  readonly units: string;

  /**
   * @schema Frequency#value
   */
  readonly value: number;

}

/**
 * @schema AntennaDemodDecodeDetails
 */
export interface AntennaDemodDecodeDetails {
  /**
   * @schema AntennaDemodDecodeDetails#outputNode
   */
  readonly outputNode?: string;

}
