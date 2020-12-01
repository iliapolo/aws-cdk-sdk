/**
 * @schema ApproveSkillRequest
 */
export interface ApproveSkillRequest {
  /**
   * @schema ApproveSkillRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema ApproveSkillResponse
 */
export interface ApproveSkillResponse {
}

/**
 * @schema AssociateContactWithAddressBookRequest
 */
export interface AssociateContactWithAddressBookRequest {
  /**
   * @schema AssociateContactWithAddressBookRequest#ContactArn
   */
  readonly contactArn: string;

  /**
   * @schema AssociateContactWithAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn: string;

}

/**
 * @schema AssociateContactWithAddressBookResponse
 */
export interface AssociateContactWithAddressBookResponse {
}

/**
 * @schema AssociateDeviceWithNetworkProfileRequest
 */
export interface AssociateDeviceWithNetworkProfileRequest {
  /**
   * @schema AssociateDeviceWithNetworkProfileRequest#DeviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema AssociateDeviceWithNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn: string;

}

/**
 * @schema AssociateDeviceWithNetworkProfileResponse
 */
export interface AssociateDeviceWithNetworkProfileResponse {
}

/**
 * @schema AssociateDeviceWithRoomRequest
 */
export interface AssociateDeviceWithRoomRequest {
  /**
   * @schema AssociateDeviceWithRoomRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AssociateDeviceWithRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AssociateDeviceWithRoomResponse
 */
export interface AssociateDeviceWithRoomResponse {
}

/**
 * @schema AssociateSkillGroupWithRoomRequest
 */
export interface AssociateSkillGroupWithRoomRequest {
  /**
   * @schema AssociateSkillGroupWithRoomRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AssociateSkillGroupWithRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AssociateSkillGroupWithRoomResponse
 */
export interface AssociateSkillGroupWithRoomResponse {
}

/**
 * @schema AssociateSkillWithSkillGroupRequest
 */
export interface AssociateSkillWithSkillGroupRequest {
  /**
   * @schema AssociateSkillWithSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AssociateSkillWithSkillGroupRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema AssociateSkillWithSkillGroupResponse
 */
export interface AssociateSkillWithSkillGroupResponse {
}

/**
 * @schema AssociateSkillWithUsersRequest
 */
export interface AssociateSkillWithUsersRequest {
  /**
   * @schema AssociateSkillWithUsersRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema AssociateSkillWithUsersResponse
 */
export interface AssociateSkillWithUsersResponse {
}

/**
 * @schema CreateAddressBookRequest
 */
export interface CreateAddressBookRequest {
  /**
   * @schema CreateAddressBookRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateAddressBookRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateAddressBookRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CreateAddressBookResponse
 */
export interface CreateAddressBookResponse {
  /**
   * @schema CreateAddressBookResponse#AddressBookArn
   */
  readonly addressBookArn?: string;

}

/**
 * @schema CreateBusinessReportScheduleRequest
 */
export interface CreateBusinessReportScheduleRequest {
  /**
   * @schema CreateBusinessReportScheduleRequest#ScheduleName
   */
  readonly scheduleName?: string;

  /**
   * @schema CreateBusinessReportScheduleRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema CreateBusinessReportScheduleRequest#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema CreateBusinessReportScheduleRequest#Format
   */
  readonly format: string;

  /**
   * @schema CreateBusinessReportScheduleRequest#ContentRange
   */
  readonly contentRange: BusinessReportContentRange;

  /**
   * @schema CreateBusinessReportScheduleRequest#Recurrence
   */
  readonly recurrence?: BusinessReportRecurrence;

  /**
   * @schema CreateBusinessReportScheduleRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateBusinessReportScheduleRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateBusinessReportScheduleResponse
 */
export interface CreateBusinessReportScheduleResponse {
  /**
   * @schema CreateBusinessReportScheduleResponse#ScheduleArn
   */
  readonly scheduleArn?: string;

}

/**
 * @schema CreateConferenceProviderRequest
 */
export interface CreateConferenceProviderRequest {
  /**
   * @schema CreateConferenceProviderRequest#ConferenceProviderName
   */
  readonly conferenceProviderName: string;

  /**
   * @schema CreateConferenceProviderRequest#ConferenceProviderType
   */
  readonly conferenceProviderType: string;

  /**
   * @schema CreateConferenceProviderRequest#IPDialIn
   */
  readonly ipDialIn?: IpDialIn;

  /**
   * @schema CreateConferenceProviderRequest#PSTNDialIn
   */
  readonly pstnDialIn?: PstnDialIn;

  /**
   * @schema CreateConferenceProviderRequest#MeetingSetting
   */
  readonly meetingSetting: MeetingSetting;

  /**
   * @schema CreateConferenceProviderRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CreateConferenceProviderResponse
 */
export interface CreateConferenceProviderResponse {
  /**
   * @schema CreateConferenceProviderResponse#ConferenceProviderArn
   */
  readonly conferenceProviderArn?: string;

}

/**
 * @schema CreateContactRequest
 */
export interface CreateContactRequest {
  /**
   * @schema CreateContactRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateContactRequest#FirstName
   */
  readonly firstName: string;

  /**
   * @schema CreateContactRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema CreateContactRequest#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema CreateContactRequest#PhoneNumbers
   */
  readonly phoneNumbers?: PhoneNumber[];

  /**
   * @schema CreateContactRequest#SipAddresses
   */
  readonly sipAddresses?: SipAddress[];

  /**
   * @schema CreateContactRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CreateContactResponse
 */
export interface CreateContactResponse {
  /**
   * @schema CreateContactResponse#ContactArn
   */
  readonly contactArn?: string;

}

/**
 * @schema CreateGatewayGroupRequest
 */
export interface CreateGatewayGroupRequest {
  /**
   * @schema CreateGatewayGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateGatewayGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateGatewayGroupRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema CreateGatewayGroupResponse
 */
export interface CreateGatewayGroupResponse {
  /**
   * @schema CreateGatewayGroupResponse#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

}

/**
 * @schema CreateNetworkProfileRequest
 */
export interface CreateNetworkProfileRequest {
  /**
   * @schema CreateNetworkProfileRequest#NetworkProfileName
   */
  readonly networkProfileName: string;

  /**
   * @schema CreateNetworkProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateNetworkProfileRequest#Ssid
   */
  readonly ssid: string;

  /**
   * @schema CreateNetworkProfileRequest#SecurityType
   */
  readonly securityType: string;

  /**
   * @schema CreateNetworkProfileRequest#EapMethod
   */
  readonly eapMethod?: string;

  /**
   * @schema CreateNetworkProfileRequest#CurrentPassword
   */
  readonly currentPassword?: string;

  /**
   * @schema CreateNetworkProfileRequest#NextPassword
   */
  readonly nextPassword?: string;

  /**
   * @schema CreateNetworkProfileRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema CreateNetworkProfileRequest#TrustAnchors
   */
  readonly trustAnchors?: string[];

  /**
   * @schema CreateNetworkProfileRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema CreateNetworkProfileResponse
 */
export interface CreateNetworkProfileResponse {
  /**
   * @schema CreateNetworkProfileResponse#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

}

/**
 * @schema CreateProfileRequest
 */
export interface CreateProfileRequest {
  /**
   * @schema CreateProfileRequest#ProfileName
   */
  readonly profileName: string;

  /**
   * @schema CreateProfileRequest#Timezone
   */
  readonly timezone: string;

  /**
   * @schema CreateProfileRequest#Address
   */
  readonly address: string;

  /**
   * @schema CreateProfileRequest#DistanceUnit
   */
  readonly distanceUnit: string;

  /**
   * @schema CreateProfileRequest#TemperatureUnit
   */
  readonly temperatureUnit: string;

  /**
   * @schema CreateProfileRequest#WakeWord
   */
  readonly wakeWord: string;

  /**
   * @schema CreateProfileRequest#Locale
   */
  readonly locale?: string;

  /**
   * @schema CreateProfileRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateProfileRequest#SetupModeDisabled
   */
  readonly setupModeDisabled?: boolean;

  /**
   * @schema CreateProfileRequest#MaxVolumeLimit
   */
  readonly maxVolumeLimit?: number;

  /**
   * @schema CreateProfileRequest#PSTNEnabled
   */
  readonly pstnEnabled?: boolean;

  /**
   * @schema CreateProfileRequest#MeetingRoomConfiguration
   */
  readonly meetingRoomConfiguration?: CreateMeetingRoomConfiguration;

  /**
   * @schema CreateProfileRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateProfileResponse
 */
export interface CreateProfileResponse {
  /**
   * @schema CreateProfileResponse#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * @schema CreateRoomRequest
 */
export interface CreateRoomRequest {
  /**
   * @schema CreateRoomRequest#RoomName
   */
  readonly roomName: string;

  /**
   * @schema CreateRoomRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRoomRequest#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema CreateRoomRequest#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema CreateRoomRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateRoomRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRoomResponse
 */
export interface CreateRoomResponse {
  /**
   * @schema CreateRoomResponse#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema CreateSkillGroupRequest
 */
export interface CreateSkillGroupRequest {
  /**
   * @schema CreateSkillGroupRequest#SkillGroupName
   */
  readonly skillGroupName: string;

  /**
   * @schema CreateSkillGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateSkillGroupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateSkillGroupRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSkillGroupResponse
 */
export interface CreateSkillGroupResponse {
  /**
   * @schema CreateSkillGroupResponse#SkillGroupArn
   */
  readonly skillGroupArn?: string;

}

/**
 * @schema CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * @schema CreateUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema CreateUserRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema CreateUserRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema CreateUserRequest#Email
   */
  readonly email?: string;

  /**
   * @schema CreateUserRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateUserRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateUserResponse
 */
export interface CreateUserResponse {
  /**
   * @schema CreateUserResponse#UserArn
   */
  readonly userArn?: string;

}

/**
 * @schema DeleteAddressBookRequest
 */
export interface DeleteAddressBookRequest {
  /**
   * @schema DeleteAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn: string;

}

/**
 * @schema DeleteAddressBookResponse
 */
export interface DeleteAddressBookResponse {
}

/**
 * @schema DeleteBusinessReportScheduleRequest
 */
export interface DeleteBusinessReportScheduleRequest {
  /**
   * @schema DeleteBusinessReportScheduleRequest#ScheduleArn
   */
  readonly scheduleArn: string;

}

/**
 * @schema DeleteBusinessReportScheduleResponse
 */
export interface DeleteBusinessReportScheduleResponse {
}

/**
 * @schema DeleteConferenceProviderRequest
 */
export interface DeleteConferenceProviderRequest {
  /**
   * @schema DeleteConferenceProviderRequest#ConferenceProviderArn
   */
  readonly conferenceProviderArn: string;

}

/**
 * @schema DeleteConferenceProviderResponse
 */
export interface DeleteConferenceProviderResponse {
}

/**
 * @schema DeleteContactRequest
 */
export interface DeleteContactRequest {
  /**
   * @schema DeleteContactRequest#ContactArn
   */
  readonly contactArn: string;

}

/**
 * @schema DeleteContactResponse
 */
export interface DeleteContactResponse {
}

/**
 * @schema DeleteDeviceRequest
 */
export interface DeleteDeviceRequest {
  /**
   * @schema DeleteDeviceRequest#DeviceArn
   */
  readonly deviceArn: string;

}

/**
 * @schema DeleteDeviceResponse
 */
export interface DeleteDeviceResponse {
}

/**
 * @schema DeleteDeviceUsageDataRequest
 */
export interface DeleteDeviceUsageDataRequest {
  /**
   * @schema DeleteDeviceUsageDataRequest#DeviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema DeleteDeviceUsageDataRequest#DeviceUsageType
   */
  readonly deviceUsageType: string;

}

/**
 * @schema DeleteDeviceUsageDataResponse
 */
export interface DeleteDeviceUsageDataResponse {
}

/**
 * @schema DeleteGatewayGroupRequest
 */
export interface DeleteGatewayGroupRequest {
  /**
   * @schema DeleteGatewayGroupRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn: string;

}

/**
 * @schema DeleteGatewayGroupResponse
 */
export interface DeleteGatewayGroupResponse {
}

/**
 * @schema DeleteNetworkProfileRequest
 */
export interface DeleteNetworkProfileRequest {
  /**
   * @schema DeleteNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn: string;

}

/**
 * @schema DeleteNetworkProfileResponse
 */
export interface DeleteNetworkProfileResponse {
}

/**
 * @schema DeleteProfileRequest
 */
export interface DeleteProfileRequest {
  /**
   * @schema DeleteProfileRequest#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * @schema DeleteProfileResponse
 */
export interface DeleteProfileResponse {
}

/**
 * @schema DeleteRoomRequest
 */
export interface DeleteRoomRequest {
  /**
   * @schema DeleteRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema DeleteRoomResponse
 */
export interface DeleteRoomResponse {
}

/**
 * @schema DeleteRoomSkillParameterRequest
 */
export interface DeleteRoomSkillParameterRequest {
  /**
   * @schema DeleteRoomSkillParameterRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema DeleteRoomSkillParameterRequest#SkillId
   */
  readonly skillId: string;

  /**
   * @schema DeleteRoomSkillParameterRequest#ParameterKey
   */
  readonly parameterKey: string;

}

/**
 * @schema DeleteRoomSkillParameterResponse
 */
export interface DeleteRoomSkillParameterResponse {
}

/**
 * @schema DeleteSkillAuthorizationRequest
 */
export interface DeleteSkillAuthorizationRequest {
  /**
   * @schema DeleteSkillAuthorizationRequest#SkillId
   */
  readonly skillId: string;

  /**
   * @schema DeleteSkillAuthorizationRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema DeleteSkillAuthorizationResponse
 */
export interface DeleteSkillAuthorizationResponse {
}

/**
 * @schema DeleteSkillGroupRequest
 */
export interface DeleteSkillGroupRequest {
  /**
   * @schema DeleteSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

}

/**
 * @schema DeleteSkillGroupResponse
 */
export interface DeleteSkillGroupResponse {
}

/**
 * @schema DeleteUserRequest
 */
export interface DeleteUserRequest {
  /**
   * @schema DeleteUserRequest#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema DeleteUserRequest#EnrollmentId
   */
  readonly enrollmentId: string;

}

/**
 * @schema DeleteUserResponse
 */
export interface DeleteUserResponse {
}

/**
 * @schema DisassociateContactFromAddressBookRequest
 */
export interface DisassociateContactFromAddressBookRequest {
  /**
   * @schema DisassociateContactFromAddressBookRequest#ContactArn
   */
  readonly contactArn: string;

  /**
   * @schema DisassociateContactFromAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn: string;

}

/**
 * @schema DisassociateContactFromAddressBookResponse
 */
export interface DisassociateContactFromAddressBookResponse {
}

/**
 * @schema DisassociateDeviceFromRoomRequest
 */
export interface DisassociateDeviceFromRoomRequest {
  /**
   * @schema DisassociateDeviceFromRoomRequest#DeviceArn
   */
  readonly deviceArn?: string;

}

/**
 * @schema DisassociateDeviceFromRoomResponse
 */
export interface DisassociateDeviceFromRoomResponse {
}

/**
 * @schema DisassociateSkillFromSkillGroupRequest
 */
export interface DisassociateSkillFromSkillGroupRequest {
  /**
   * @schema DisassociateSkillFromSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema DisassociateSkillFromSkillGroupRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema DisassociateSkillFromSkillGroupResponse
 */
export interface DisassociateSkillFromSkillGroupResponse {
}

/**
 * @schema DisassociateSkillFromUsersRequest
 */
export interface DisassociateSkillFromUsersRequest {
  /**
   * @schema DisassociateSkillFromUsersRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema DisassociateSkillFromUsersResponse
 */
export interface DisassociateSkillFromUsersResponse {
}

/**
 * @schema DisassociateSkillGroupFromRoomRequest
 */
export interface DisassociateSkillGroupFromRoomRequest {
  /**
   * @schema DisassociateSkillGroupFromRoomRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema DisassociateSkillGroupFromRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema DisassociateSkillGroupFromRoomResponse
 */
export interface DisassociateSkillGroupFromRoomResponse {
}

/**
 * @schema ForgetSmartHomeAppliancesRequest
 */
export interface ForgetSmartHomeAppliancesRequest {
  /**
   * @schema ForgetSmartHomeAppliancesRequest#RoomArn
   */
  readonly roomArn: string;

}

/**
 * @schema ForgetSmartHomeAppliancesResponse
 */
export interface ForgetSmartHomeAppliancesResponse {
}

/**
 * @schema GetAddressBookRequest
 */
export interface GetAddressBookRequest {
  /**
   * @schema GetAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn: string;

}

/**
 * @schema GetAddressBookResponse
 */
export interface GetAddressBookResponse {
  /**
   * @schema GetAddressBookResponse#AddressBook
   */
  readonly addressBook?: AddressBook;

}

/**
 * @schema GetConferencePreferenceRequest
 */
export interface GetConferencePreferenceRequest {
}

/**
 * @schema GetConferencePreferenceResponse
 */
export interface GetConferencePreferenceResponse {
  /**
   * @schema GetConferencePreferenceResponse#Preference
   */
  readonly preference?: ConferencePreference;

}

/**
 * @schema GetConferenceProviderRequest
 */
export interface GetConferenceProviderRequest {
  /**
   * @schema GetConferenceProviderRequest#ConferenceProviderArn
   */
  readonly conferenceProviderArn: string;

}

/**
 * @schema GetConferenceProviderResponse
 */
export interface GetConferenceProviderResponse {
  /**
   * @schema GetConferenceProviderResponse#ConferenceProvider
   */
  readonly conferenceProvider?: ConferenceProvider;

}

/**
 * @schema GetContactRequest
 */
export interface GetContactRequest {
  /**
   * @schema GetContactRequest#ContactArn
   */
  readonly contactArn: string;

}

/**
 * @schema GetContactResponse
 */
export interface GetContactResponse {
  /**
   * @schema GetContactResponse#Contact
   */
  readonly contact?: Contact;

}

/**
 * @schema GetDeviceRequest
 */
export interface GetDeviceRequest {
  /**
   * @schema GetDeviceRequest#DeviceArn
   */
  readonly deviceArn?: string;

}

/**
 * @schema GetDeviceResponse
 */
export interface GetDeviceResponse {
  /**
   * @schema GetDeviceResponse#Device
   */
  readonly device?: Device;

}

/**
 * @schema GetGatewayRequest
 */
export interface GetGatewayRequest {
  /**
   * @schema GetGatewayRequest#GatewayArn
   */
  readonly gatewayArn: string;

}

/**
 * @schema GetGatewayResponse
 */
export interface GetGatewayResponse {
  /**
   * @schema GetGatewayResponse#Gateway
   */
  readonly gateway?: Gateway;

}

/**
 * @schema GetGatewayGroupRequest
 */
export interface GetGatewayGroupRequest {
  /**
   * @schema GetGatewayGroupRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn: string;

}

/**
 * @schema GetGatewayGroupResponse
 */
export interface GetGatewayGroupResponse {
  /**
   * @schema GetGatewayGroupResponse#GatewayGroup
   */
  readonly gatewayGroup?: GatewayGroup;

}

/**
 * @schema GetInvitationConfigurationRequest
 */
export interface GetInvitationConfigurationRequest {
}

/**
 * @schema GetInvitationConfigurationResponse
 */
export interface GetInvitationConfigurationResponse {
  /**
   * @schema GetInvitationConfigurationResponse#OrganizationName
   */
  readonly organizationName?: string;

  /**
   * @schema GetInvitationConfigurationResponse#ContactEmail
   */
  readonly contactEmail?: string;

  /**
   * @schema GetInvitationConfigurationResponse#PrivateSkillIds
   */
  readonly privateSkillIds?: string[];

}

/**
 * @schema GetNetworkProfileRequest
 */
export interface GetNetworkProfileRequest {
  /**
   * @schema GetNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn: string;

}

/**
 * @schema GetNetworkProfileResponse
 */
export interface GetNetworkProfileResponse {
  /**
   * @schema GetNetworkProfileResponse#NetworkProfile
   */
  readonly networkProfile?: NetworkProfile;

}

/**
 * @schema GetProfileRequest
 */
export interface GetProfileRequest {
  /**
   * @schema GetProfileRequest#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * @schema GetProfileResponse
 */
export interface GetProfileResponse {
  /**
   * @schema GetProfileResponse#Profile
   */
  readonly profile?: Profile;

}

/**
 * @schema GetRoomRequest
 */
export interface GetRoomRequest {
  /**
   * @schema GetRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema GetRoomResponse
 */
export interface GetRoomResponse {
  /**
   * @schema GetRoomResponse#Room
   */
  readonly room?: Room;

}

/**
 * @schema GetRoomSkillParameterRequest
 */
export interface GetRoomSkillParameterRequest {
  /**
   * @schema GetRoomSkillParameterRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema GetRoomSkillParameterRequest#SkillId
   */
  readonly skillId: string;

  /**
   * @schema GetRoomSkillParameterRequest#ParameterKey
   */
  readonly parameterKey: string;

}

/**
 * @schema GetRoomSkillParameterResponse
 */
export interface GetRoomSkillParameterResponse {
  /**
   * @schema GetRoomSkillParameterResponse#RoomSkillParameter
   */
  readonly roomSkillParameter?: RoomSkillParameter;

}

/**
 * @schema GetSkillGroupRequest
 */
export interface GetSkillGroupRequest {
  /**
   * @schema GetSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

}

/**
 * @schema GetSkillGroupResponse
 */
export interface GetSkillGroupResponse {
  /**
   * @schema GetSkillGroupResponse#SkillGroup
   */
  readonly skillGroup?: SkillGroup;

}

/**
 * @schema ListBusinessReportSchedulesRequest
 */
export interface ListBusinessReportSchedulesRequest {
  /**
   * @schema ListBusinessReportSchedulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBusinessReportSchedulesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListBusinessReportSchedulesResponse
 */
export interface ListBusinessReportSchedulesResponse {
  /**
   * @schema ListBusinessReportSchedulesResponse#BusinessReportSchedules
   */
  readonly businessReportSchedules?: BusinessReportSchedule[];

  /**
   * @schema ListBusinessReportSchedulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConferenceProvidersRequest
 */
export interface ListConferenceProvidersRequest {
  /**
   * @schema ListConferenceProvidersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListConferenceProvidersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListConferenceProvidersResponse
 */
export interface ListConferenceProvidersResponse {
  /**
   * @schema ListConferenceProvidersResponse#ConferenceProviders
   */
  readonly conferenceProviders?: ConferenceProvider[];

  /**
   * @schema ListConferenceProvidersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeviceEventsRequest
 */
export interface ListDeviceEventsRequest {
  /**
   * @schema ListDeviceEventsRequest#DeviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema ListDeviceEventsRequest#EventType
   */
  readonly eventType?: string;

  /**
   * @schema ListDeviceEventsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDeviceEventsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDeviceEventsResponse
 */
export interface ListDeviceEventsResponse {
  /**
   * @schema ListDeviceEventsResponse#DeviceEvents
   */
  readonly deviceEvents?: DeviceEvent[];

  /**
   * @schema ListDeviceEventsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGatewayGroupsRequest
 */
export interface ListGatewayGroupsRequest {
  /**
   * @schema ListGatewayGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGatewayGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListGatewayGroupsResponse
 */
export interface ListGatewayGroupsResponse {
  /**
   * @schema ListGatewayGroupsResponse#GatewayGroups
   */
  readonly gatewayGroups?: GatewayGroupSummary[];

  /**
   * @schema ListGatewayGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGatewaysRequest
 */
export interface ListGatewaysRequest {
  /**
   * @schema ListGatewaysRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

  /**
   * @schema ListGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListGatewaysResponse
 */
export interface ListGatewaysResponse {
  /**
   * @schema ListGatewaysResponse#Gateways
   */
  readonly gateways?: GatewaySummary[];

  /**
   * @schema ListGatewaysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSkillsRequest
 */
export interface ListSkillsRequest {
  /**
   * @schema ListSkillsRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema ListSkillsRequest#EnablementType
   */
  readonly enablementType?: string;

  /**
   * @schema ListSkillsRequest#SkillType
   */
  readonly skillType?: string;

  /**
   * @schema ListSkillsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSkillsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSkillsResponse
 */
export interface ListSkillsResponse {
  /**
   * @schema ListSkillsResponse#SkillSummaries
   */
  readonly skillSummaries?: SkillSummary[];

  /**
   * @schema ListSkillsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSkillsStoreCategoriesRequest
 */
export interface ListSkillsStoreCategoriesRequest {
  /**
   * @schema ListSkillsStoreCategoriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSkillsStoreCategoriesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSkillsStoreCategoriesResponse
 */
export interface ListSkillsStoreCategoriesResponse {
  /**
   * @schema ListSkillsStoreCategoriesResponse#CategoryList
   */
  readonly categoryList?: Category[];

  /**
   * @schema ListSkillsStoreCategoriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSkillsStoreSkillsByCategoryRequest
 */
export interface ListSkillsStoreSkillsByCategoryRequest {
  /**
   * @schema ListSkillsStoreSkillsByCategoryRequest#CategoryId
   */
  readonly categoryId: number;

  /**
   * @schema ListSkillsStoreSkillsByCategoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSkillsStoreSkillsByCategoryRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSkillsStoreSkillsByCategoryResponse
 */
export interface ListSkillsStoreSkillsByCategoryResponse {
  /**
   * @schema ListSkillsStoreSkillsByCategoryResponse#SkillsStoreSkills
   */
  readonly skillsStoreSkills?: SkillsStoreSkill[];

  /**
   * @schema ListSkillsStoreSkillsByCategoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSmartHomeAppliancesRequest
 */
export interface ListSmartHomeAppliancesRequest {
  /**
   * @schema ListSmartHomeAppliancesRequest#RoomArn
   */
  readonly roomArn: string;

  /**
   * @schema ListSmartHomeAppliancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSmartHomeAppliancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSmartHomeAppliancesResponse
 */
export interface ListSmartHomeAppliancesResponse {
  /**
   * @schema ListSmartHomeAppliancesResponse#SmartHomeAppliances
   */
  readonly smartHomeAppliances?: SmartHomeAppliance[];

  /**
   * @schema ListSmartHomeAppliancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsRequest
 */
export interface ListTagsRequest {
  /**
   * @schema ListTagsRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema ListTagsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsResponse
 */
export interface ListTagsResponse {
  /**
   * @schema ListTagsResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutConferencePreferenceRequest
 */
export interface PutConferencePreferenceRequest {
  /**
   * @schema PutConferencePreferenceRequest#ConferencePreference
   */
  readonly conferencePreference: ConferencePreference;

}

/**
 * @schema PutConferencePreferenceResponse
 */
export interface PutConferencePreferenceResponse {
}

/**
 * @schema PutInvitationConfigurationRequest
 */
export interface PutInvitationConfigurationRequest {
  /**
   * @schema PutInvitationConfigurationRequest#OrganizationName
   */
  readonly organizationName: string;

  /**
   * @schema PutInvitationConfigurationRequest#ContactEmail
   */
  readonly contactEmail?: string;

  /**
   * @schema PutInvitationConfigurationRequest#PrivateSkillIds
   */
  readonly privateSkillIds?: string[];

}

/**
 * @schema PutInvitationConfigurationResponse
 */
export interface PutInvitationConfigurationResponse {
}

/**
 * @schema PutRoomSkillParameterRequest
 */
export interface PutRoomSkillParameterRequest {
  /**
   * @schema PutRoomSkillParameterRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema PutRoomSkillParameterRequest#SkillId
   */
  readonly skillId: string;

  /**
   * @schema PutRoomSkillParameterRequest#RoomSkillParameter
   */
  readonly roomSkillParameter: RoomSkillParameter;

}

/**
 * @schema PutRoomSkillParameterResponse
 */
export interface PutRoomSkillParameterResponse {
}

/**
 * @schema PutSkillAuthorizationRequest
 */
export interface PutSkillAuthorizationRequest {
  /**
   * @schema PutSkillAuthorizationRequest#AuthorizationResult
   */
  readonly authorizationResult: { [key: string]: string };

  /**
   * @schema PutSkillAuthorizationRequest#SkillId
   */
  readonly skillId: string;

  /**
   * @schema PutSkillAuthorizationRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema PutSkillAuthorizationResponse
 */
export interface PutSkillAuthorizationResponse {
}

/**
 * @schema RegisterAvsDeviceRequest
 */
export interface RegisterAvsDeviceRequest {
  /**
   * @schema RegisterAvsDeviceRequest#ClientId
   */
  readonly clientId: string;

  /**
   * @schema RegisterAvsDeviceRequest#UserCode
   */
  readonly userCode: string;

  /**
   * @schema RegisterAvsDeviceRequest#ProductId
   */
  readonly productId: string;

  /**
   * @schema RegisterAvsDeviceRequest#DeviceSerialNumber
   */
  readonly deviceSerialNumber?: string;

  /**
   * @schema RegisterAvsDeviceRequest#AmazonId
   */
  readonly amazonId: string;

  /**
   * @schema RegisterAvsDeviceRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema RegisterAvsDeviceResponse
 */
export interface RegisterAvsDeviceResponse {
  /**
   * @schema RegisterAvsDeviceResponse#DeviceArn
   */
  readonly deviceArn?: string;

}

/**
 * @schema RejectSkillRequest
 */
export interface RejectSkillRequest {
  /**
   * @schema RejectSkillRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema RejectSkillResponse
 */
export interface RejectSkillResponse {
}

/**
 * @schema ResolveRoomRequest
 */
export interface ResolveRoomRequest {
  /**
   * @schema ResolveRoomRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ResolveRoomRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema ResolveRoomResponse
 */
export interface ResolveRoomResponse {
  /**
   * @schema ResolveRoomResponse#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema ResolveRoomResponse#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema ResolveRoomResponse#RoomSkillParameters
   */
  readonly roomSkillParameters?: RoomSkillParameter[];

}

/**
 * @schema RevokeInvitationRequest
 */
export interface RevokeInvitationRequest {
  /**
   * @schema RevokeInvitationRequest#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema RevokeInvitationRequest#EnrollmentId
   */
  readonly enrollmentId?: string;

}

/**
 * @schema RevokeInvitationResponse
 */
export interface RevokeInvitationResponse {
}

/**
 * @schema SearchAddressBooksRequest
 */
export interface SearchAddressBooksRequest {
  /**
   * @schema SearchAddressBooksRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema SearchAddressBooksRequest#SortCriteria
   */
  readonly sortCriteria?: Sort[];

  /**
   * @schema SearchAddressBooksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchAddressBooksRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SearchAddressBooksResponse
 */
export interface SearchAddressBooksResponse {
  /**
   * @schema SearchAddressBooksResponse#AddressBooks
   */
  readonly addressBooks?: AddressBookData[];

  /**
   * @schema SearchAddressBooksResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchAddressBooksResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema SearchContactsRequest
 */
export interface SearchContactsRequest {
  /**
   * @schema SearchContactsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema SearchContactsRequest#SortCriteria
   */
  readonly sortCriteria?: Sort[];

  /**
   * @schema SearchContactsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchContactsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SearchContactsResponse
 */
export interface SearchContactsResponse {
  /**
   * @schema SearchContactsResponse#Contacts
   */
  readonly contacts?: ContactData[];

  /**
   * @schema SearchContactsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchContactsResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema SearchDevicesRequest
 */
export interface SearchDevicesRequest {
  /**
   * @schema SearchDevicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchDevicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchDevicesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema SearchDevicesRequest#SortCriteria
   */
  readonly sortCriteria?: Sort[];

}

/**
 * @schema SearchDevicesResponse
 */
export interface SearchDevicesResponse {
  /**
   * @schema SearchDevicesResponse#Devices
   */
  readonly devices?: DeviceData[];

  /**
   * @schema SearchDevicesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchDevicesResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema SearchNetworkProfilesRequest
 */
export interface SearchNetworkProfilesRequest {
  /**
   * @schema SearchNetworkProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchNetworkProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchNetworkProfilesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema SearchNetworkProfilesRequest#SortCriteria
   */
  readonly sortCriteria?: Sort[];

}

/**
 * @schema SearchNetworkProfilesResponse
 */
export interface SearchNetworkProfilesResponse {
  /**
   * @schema SearchNetworkProfilesResponse#NetworkProfiles
   */
  readonly networkProfiles?: NetworkProfileData[];

  /**
   * @schema SearchNetworkProfilesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchNetworkProfilesResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema SearchProfilesRequest
 */
export interface SearchProfilesRequest {
  /**
   * @schema SearchProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchProfilesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema SearchProfilesRequest#SortCriteria
   */
  readonly sortCriteria?: Sort[];

}

/**
 * @schema SearchProfilesResponse
 */
export interface SearchProfilesResponse {
  /**
   * @schema SearchProfilesResponse#Profiles
   */
  readonly profiles?: ProfileData[];

  /**
   * @schema SearchProfilesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchProfilesResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema SearchRoomsRequest
 */
export interface SearchRoomsRequest {
  /**
   * @schema SearchRoomsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchRoomsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchRoomsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema SearchRoomsRequest#SortCriteria
   */
  readonly sortCriteria?: Sort[];

}

/**
 * @schema SearchRoomsResponse
 */
export interface SearchRoomsResponse {
  /**
   * @schema SearchRoomsResponse#Rooms
   */
  readonly rooms?: RoomData[];

  /**
   * @schema SearchRoomsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchRoomsResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema SearchSkillGroupsRequest
 */
export interface SearchSkillGroupsRequest {
  /**
   * @schema SearchSkillGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchSkillGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchSkillGroupsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema SearchSkillGroupsRequest#SortCriteria
   */
  readonly sortCriteria?: Sort[];

}

/**
 * @schema SearchSkillGroupsResponse
 */
export interface SearchSkillGroupsResponse {
  /**
   * @schema SearchSkillGroupsResponse#SkillGroups
   */
  readonly skillGroups?: SkillGroupData[];

  /**
   * @schema SearchSkillGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchSkillGroupsResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema SearchUsersRequest
 */
export interface SearchUsersRequest {
  /**
   * @schema SearchUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchUsersRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema SearchUsersRequest#SortCriteria
   */
  readonly sortCriteria?: Sort[];

}

/**
 * @schema SearchUsersResponse
 */
export interface SearchUsersResponse {
  /**
   * @schema SearchUsersResponse#Users
   */
  readonly users?: UserData[];

  /**
   * @schema SearchUsersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchUsersResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema SendAnnouncementRequest
 */
export interface SendAnnouncementRequest {
  /**
   * @schema SendAnnouncementRequest#RoomFilters
   */
  readonly roomFilters: Filter[];

  /**
   * @schema SendAnnouncementRequest#Content
   */
  readonly content: Content;

  /**
   * @schema SendAnnouncementRequest#TimeToLiveInSeconds
   */
  readonly timeToLiveInSeconds?: number;

  /**
   * @schema SendAnnouncementRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema SendAnnouncementResponse
 */
export interface SendAnnouncementResponse {
  /**
   * @schema SendAnnouncementResponse#AnnouncementArn
   */
  readonly announcementArn?: string;

}

/**
 * @schema SendInvitationRequest
 */
export interface SendInvitationRequest {
  /**
   * @schema SendInvitationRequest#UserArn
   */
  readonly userArn?: string;

}

/**
 * @schema SendInvitationResponse
 */
export interface SendInvitationResponse {
}

/**
 * @schema StartDeviceSyncRequest
 */
export interface StartDeviceSyncRequest {
  /**
   * @schema StartDeviceSyncRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema StartDeviceSyncRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema StartDeviceSyncRequest#Features
   */
  readonly features: string[];

}

/**
 * @schema StartDeviceSyncResponse
 */
export interface StartDeviceSyncResponse {
}

/**
 * @schema StartSmartHomeApplianceDiscoveryRequest
 */
export interface StartSmartHomeApplianceDiscoveryRequest {
  /**
   * @schema StartSmartHomeApplianceDiscoveryRequest#RoomArn
   */
  readonly roomArn: string;

}

/**
 * @schema StartSmartHomeApplianceDiscoveryResponse
 */
export interface StartSmartHomeApplianceDiscoveryResponse {
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
  readonly tags: Tag[];

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
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateAddressBookRequest
 */
export interface UpdateAddressBookRequest {
  /**
   * @schema UpdateAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn: string;

  /**
   * @schema UpdateAddressBookRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateAddressBookRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateAddressBookResponse
 */
export interface UpdateAddressBookResponse {
}

/**
 * @schema UpdateBusinessReportScheduleRequest
 */
export interface UpdateBusinessReportScheduleRequest {
  /**
   * @schema UpdateBusinessReportScheduleRequest#ScheduleArn
   */
  readonly scheduleArn: string;

  /**
   * @schema UpdateBusinessReportScheduleRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema UpdateBusinessReportScheduleRequest#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema UpdateBusinessReportScheduleRequest#Format
   */
  readonly format?: string;

  /**
   * @schema UpdateBusinessReportScheduleRequest#ScheduleName
   */
  readonly scheduleName?: string;

  /**
   * @schema UpdateBusinessReportScheduleRequest#Recurrence
   */
  readonly recurrence?: BusinessReportRecurrence;

}

/**
 * @schema UpdateBusinessReportScheduleResponse
 */
export interface UpdateBusinessReportScheduleResponse {
}

/**
 * @schema UpdateConferenceProviderRequest
 */
export interface UpdateConferenceProviderRequest {
  /**
   * @schema UpdateConferenceProviderRequest#ConferenceProviderArn
   */
  readonly conferenceProviderArn: string;

  /**
   * @schema UpdateConferenceProviderRequest#ConferenceProviderType
   */
  readonly conferenceProviderType: string;

  /**
   * @schema UpdateConferenceProviderRequest#IPDialIn
   */
  readonly ipDialIn?: IpDialIn;

  /**
   * @schema UpdateConferenceProviderRequest#PSTNDialIn
   */
  readonly pstnDialIn?: PstnDialIn;

  /**
   * @schema UpdateConferenceProviderRequest#MeetingSetting
   */
  readonly meetingSetting: MeetingSetting;

}

/**
 * @schema UpdateConferenceProviderResponse
 */
export interface UpdateConferenceProviderResponse {
}

/**
 * @schema UpdateContactRequest
 */
export interface UpdateContactRequest {
  /**
   * @schema UpdateContactRequest#ContactArn
   */
  readonly contactArn: string;

  /**
   * @schema UpdateContactRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdateContactRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema UpdateContactRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema UpdateContactRequest#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema UpdateContactRequest#PhoneNumbers
   */
  readonly phoneNumbers?: PhoneNumber[];

  /**
   * @schema UpdateContactRequest#SipAddresses
   */
  readonly sipAddresses?: SipAddress[];

}

/**
 * @schema UpdateContactResponse
 */
export interface UpdateContactResponse {
}

/**
 * @schema UpdateDeviceRequest
 */
export interface UpdateDeviceRequest {
  /**
   * @schema UpdateDeviceRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema UpdateDeviceRequest#DeviceName
   */
  readonly deviceName?: string;

}

/**
 * @schema UpdateDeviceResponse
 */
export interface UpdateDeviceResponse {
}

/**
 * @schema UpdateGatewayRequest
 */
export interface UpdateGatewayRequest {
  /**
   * @schema UpdateGatewayRequest#GatewayArn
   */
  readonly gatewayArn: string;

  /**
   * @schema UpdateGatewayRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateGatewayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateGatewayRequest#SoftwareVersion
   */
  readonly softwareVersion?: string;

}

/**
 * @schema UpdateGatewayResponse
 */
export interface UpdateGatewayResponse {
}

/**
 * @schema UpdateGatewayGroupRequest
 */
export interface UpdateGatewayGroupRequest {
  /**
   * @schema UpdateGatewayGroupRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn: string;

  /**
   * @schema UpdateGatewayGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateGatewayGroupRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateGatewayGroupResponse
 */
export interface UpdateGatewayGroupResponse {
}

/**
 * @schema UpdateNetworkProfileRequest
 */
export interface UpdateNetworkProfileRequest {
  /**
   * @schema UpdateNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn: string;

  /**
   * @schema UpdateNetworkProfileRequest#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema UpdateNetworkProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateNetworkProfileRequest#CurrentPassword
   */
  readonly currentPassword?: string;

  /**
   * @schema UpdateNetworkProfileRequest#NextPassword
   */
  readonly nextPassword?: string;

  /**
   * @schema UpdateNetworkProfileRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema UpdateNetworkProfileRequest#TrustAnchors
   */
  readonly trustAnchors?: string[];

}

/**
 * @schema UpdateNetworkProfileResponse
 */
export interface UpdateNetworkProfileResponse {
}

/**
 * @schema UpdateProfileRequest
 */
export interface UpdateProfileRequest {
  /**
   * @schema UpdateProfileRequest#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema UpdateProfileRequest#ProfileName
   */
  readonly profileName?: string;

  /**
   * @schema UpdateProfileRequest#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema UpdateProfileRequest#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema UpdateProfileRequest#Address
   */
  readonly address?: string;

  /**
   * @schema UpdateProfileRequest#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema UpdateProfileRequest#TemperatureUnit
   */
  readonly temperatureUnit?: string;

  /**
   * @schema UpdateProfileRequest#WakeWord
   */
  readonly wakeWord?: string;

  /**
   * @schema UpdateProfileRequest#Locale
   */
  readonly locale?: string;

  /**
   * @schema UpdateProfileRequest#SetupModeDisabled
   */
  readonly setupModeDisabled?: boolean;

  /**
   * @schema UpdateProfileRequest#MaxVolumeLimit
   */
  readonly maxVolumeLimit?: number;

  /**
   * @schema UpdateProfileRequest#PSTNEnabled
   */
  readonly pstnEnabled?: boolean;

  /**
   * @schema UpdateProfileRequest#MeetingRoomConfiguration
   */
  readonly meetingRoomConfiguration?: UpdateMeetingRoomConfiguration;

}

/**
 * @schema UpdateProfileResponse
 */
export interface UpdateProfileResponse {
}

/**
 * @schema UpdateRoomRequest
 */
export interface UpdateRoomRequest {
  /**
   * @schema UpdateRoomRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema UpdateRoomRequest#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema UpdateRoomRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateRoomRequest#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema UpdateRoomRequest#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * @schema UpdateRoomResponse
 */
export interface UpdateRoomResponse {
}

/**
 * @schema UpdateSkillGroupRequest
 */
export interface UpdateSkillGroupRequest {
  /**
   * @schema UpdateSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema UpdateSkillGroupRequest#SkillGroupName
   */
  readonly skillGroupName?: string;

  /**
   * @schema UpdateSkillGroupRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateSkillGroupResponse
 */
export interface UpdateSkillGroupResponse {
}

/**
 * @schema BusinessReportContentRange
 */
export interface BusinessReportContentRange {
  /**
   * @schema BusinessReportContentRange#Interval
   */
  readonly interval: string;

}

/**
 * @schema BusinessReportRecurrence
 */
export interface BusinessReportRecurrence {
  /**
   * @schema BusinessReportRecurrence#StartDate
   */
  readonly startDate?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema IpDialIn
 */
export interface IpDialIn {
  /**
   * @schema IpDialIn#Endpoint
   */
  readonly endpoint: string;

  /**
   * @schema IpDialIn#CommsProtocol
   */
  readonly commsProtocol: string;

}

/**
 * @schema PstnDialIn
 */
export interface PstnDialIn {
  /**
   * @schema PstnDialIn#CountryCode
   */
  readonly countryCode: string;

  /**
   * @schema PstnDialIn#PhoneNumber
   */
  readonly phoneNumber: string;

  /**
   * @schema PstnDialIn#OneClickIdDelay
   */
  readonly oneClickIdDelay: string;

  /**
   * @schema PstnDialIn#OneClickPinDelay
   */
  readonly oneClickPinDelay: string;

}

/**
 * @schema MeetingSetting
 */
export interface MeetingSetting {
  /**
   * @schema MeetingSetting#RequirePin
   */
  readonly requirePin: string;

}

/**
 * @schema PhoneNumber
 */
export interface PhoneNumber {
  /**
   * @schema PhoneNumber#Number
   */
  readonly number: string;

  /**
   * @schema PhoneNumber#Type
   */
  readonly type: string;

}

/**
 * @schema SipAddress
 */
export interface SipAddress {
  /**
   * @schema SipAddress#Uri
   */
  readonly uri: string;

  /**
   * @schema SipAddress#Type
   */
  readonly type: string;

}

/**
 * @schema CreateMeetingRoomConfiguration
 */
export interface CreateMeetingRoomConfiguration {
  /**
   * @schema CreateMeetingRoomConfiguration#RoomUtilizationMetricsEnabled
   */
  readonly roomUtilizationMetricsEnabled?: boolean;

  /**
   * @schema CreateMeetingRoomConfiguration#EndOfMeetingReminder
   */
  readonly endOfMeetingReminder?: CreateEndOfMeetingReminder;

  /**
   * @schema CreateMeetingRoomConfiguration#InstantBooking
   */
  readonly instantBooking?: CreateInstantBooking;

  /**
   * @schema CreateMeetingRoomConfiguration#RequireCheckIn
   */
  readonly requireCheckIn?: CreateRequireCheckIn;

}

/**
 * @schema AddressBook
 */
export interface AddressBook {
  /**
   * @schema AddressBook#AddressBookArn
   */
  readonly addressBookArn?: string;

  /**
   * @schema AddressBook#Name
   */
  readonly name?: string;

  /**
   * @schema AddressBook#Description
   */
  readonly description?: string;

}

/**
 * @schema ConferencePreference
 */
export interface ConferencePreference {
  /**
   * @schema ConferencePreference#DefaultConferenceProviderArn
   */
  readonly defaultConferenceProviderArn?: string;

}

/**
 * @schema ConferenceProvider
 */
export interface ConferenceProvider {
  /**
   * @schema ConferenceProvider#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConferenceProvider#Name
   */
  readonly name?: string;

  /**
   * @schema ConferenceProvider#Type
   */
  readonly type?: string;

  /**
   * @schema ConferenceProvider#IPDialIn
   */
  readonly ipDialIn?: IpDialIn;

  /**
   * @schema ConferenceProvider#PSTNDialIn
   */
  readonly pstnDialIn?: PstnDialIn;

  /**
   * @schema ConferenceProvider#MeetingSetting
   */
  readonly meetingSetting?: MeetingSetting;

}

/**
 * @schema Contact
 */
export interface Contact {
  /**
   * @schema Contact#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema Contact#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Contact#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema Contact#LastName
   */
  readonly lastName?: string;

  /**
   * @schema Contact#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema Contact#PhoneNumbers
   */
  readonly phoneNumbers?: PhoneNumber[];

  /**
   * @schema Contact#SipAddresses
   */
  readonly sipAddresses?: SipAddress[];

}

/**
 * @schema Device
 */
export interface Device {
  /**
   * @schema Device#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema Device#DeviceSerialNumber
   */
  readonly deviceSerialNumber?: string;

  /**
   * @schema Device#DeviceType
   */
  readonly deviceType?: string;

  /**
   * @schema Device#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Device#SoftwareVersion
   */
  readonly softwareVersion?: string;

  /**
   * @schema Device#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema Device#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema Device#DeviceStatus
   */
  readonly deviceStatus?: string;

  /**
   * @schema Device#DeviceStatusInfo
   */
  readonly deviceStatusInfo?: DeviceStatusInfo;

  /**
   * @schema Device#NetworkProfileInfo
   */
  readonly networkProfileInfo?: DeviceNetworkProfileInfo;

}

/**
 * @schema Gateway
 */
export interface Gateway {
  /**
   * @schema Gateway#Arn
   */
  readonly arn?: string;

  /**
   * @schema Gateway#Name
   */
  readonly name?: string;

  /**
   * @schema Gateway#Description
   */
  readonly description?: string;

  /**
   * @schema Gateway#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

  /**
   * @schema Gateway#SoftwareVersion
   */
  readonly softwareVersion?: string;

}

/**
 * @schema GatewayGroup
 */
export interface GatewayGroup {
  /**
   * @schema GatewayGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema GatewayGroup#Name
   */
  readonly name?: string;

  /**
   * @schema GatewayGroup#Description
   */
  readonly description?: string;

}

/**
 * @schema NetworkProfile
 */
export interface NetworkProfile {
  /**
   * @schema NetworkProfile#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema NetworkProfile#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema NetworkProfile#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkProfile#Ssid
   */
  readonly ssid?: string;

  /**
   * @schema NetworkProfile#SecurityType
   */
  readonly securityType?: string;

  /**
   * @schema NetworkProfile#EapMethod
   */
  readonly eapMethod?: string;

  /**
   * @schema NetworkProfile#CurrentPassword
   */
  readonly currentPassword?: string;

  /**
   * @schema NetworkProfile#NextPassword
   */
  readonly nextPassword?: string;

  /**
   * @schema NetworkProfile#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema NetworkProfile#TrustAnchors
   */
  readonly trustAnchors?: string[];

}

/**
 * @schema Profile
 */
export interface Profile {
  /**
   * @schema Profile#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema Profile#ProfileName
   */
  readonly profileName?: string;

  /**
   * @schema Profile#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema Profile#Address
   */
  readonly address?: string;

  /**
   * @schema Profile#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema Profile#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema Profile#TemperatureUnit
   */
  readonly temperatureUnit?: string;

  /**
   * @schema Profile#WakeWord
   */
  readonly wakeWord?: string;

  /**
   * @schema Profile#Locale
   */
  readonly locale?: string;

  /**
   * @schema Profile#SetupModeDisabled
   */
  readonly setupModeDisabled?: boolean;

  /**
   * @schema Profile#MaxVolumeLimit
   */
  readonly maxVolumeLimit?: number;

  /**
   * @schema Profile#PSTNEnabled
   */
  readonly pstnEnabled?: boolean;

  /**
   * @schema Profile#AddressBookArn
   */
  readonly addressBookArn?: string;

  /**
   * @schema Profile#MeetingRoomConfiguration
   */
  readonly meetingRoomConfiguration?: MeetingRoomConfiguration;

}

/**
 * @schema Room
 */
export interface Room {
  /**
   * @schema Room#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema Room#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema Room#Description
   */
  readonly description?: string;

  /**
   * @schema Room#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema Room#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * @schema RoomSkillParameter
 */
export interface RoomSkillParameter {
  /**
   * @schema RoomSkillParameter#ParameterKey
   */
  readonly parameterKey: string;

  /**
   * @schema RoomSkillParameter#ParameterValue
   */
  readonly parameterValue: string;

}

/**
 * @schema SkillGroup
 */
export interface SkillGroup {
  /**
   * @schema SkillGroup#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema SkillGroup#SkillGroupName
   */
  readonly skillGroupName?: string;

  /**
   * @schema SkillGroup#Description
   */
  readonly description?: string;

}

/**
 * @schema BusinessReportSchedule
 */
export interface BusinessReportSchedule {
  /**
   * @schema BusinessReportSchedule#ScheduleArn
   */
  readonly scheduleArn?: string;

  /**
   * @schema BusinessReportSchedule#ScheduleName
   */
  readonly scheduleName?: string;

  /**
   * @schema BusinessReportSchedule#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema BusinessReportSchedule#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema BusinessReportSchedule#Format
   */
  readonly format?: string;

  /**
   * @schema BusinessReportSchedule#ContentRange
   */
  readonly contentRange?: BusinessReportContentRange;

  /**
   * @schema BusinessReportSchedule#Recurrence
   */
  readonly recurrence?: BusinessReportRecurrence;

  /**
   * @schema BusinessReportSchedule#LastBusinessReport
   */
  readonly lastBusinessReport?: BusinessReport;

}

/**
 * @schema DeviceEvent
 */
export interface DeviceEvent {
  /**
   * @schema DeviceEvent#Type
   */
  readonly type?: string;

  /**
   * @schema DeviceEvent#Value
   */
  readonly value?: string;

  /**
   * @schema DeviceEvent#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema GatewayGroupSummary
 */
export interface GatewayGroupSummary {
  /**
   * @schema GatewayGroupSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema GatewayGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema GatewayGroupSummary#Description
   */
  readonly description?: string;

}

/**
 * @schema GatewaySummary
 */
export interface GatewaySummary {
  /**
   * @schema GatewaySummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema GatewaySummary#Name
   */
  readonly name?: string;

  /**
   * @schema GatewaySummary#Description
   */
  readonly description?: string;

  /**
   * @schema GatewaySummary#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

  /**
   * @schema GatewaySummary#SoftwareVersion
   */
  readonly softwareVersion?: string;

}

/**
 * @schema SkillSummary
 */
export interface SkillSummary {
  /**
   * @schema SkillSummary#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema SkillSummary#SkillName
   */
  readonly skillName?: string;

  /**
   * @schema SkillSummary#SupportsLinking
   */
  readonly supportsLinking?: boolean;

  /**
   * @schema SkillSummary#EnablementType
   */
  readonly enablementType?: string;

  /**
   * @schema SkillSummary#SkillType
   */
  readonly skillType?: string;

}

/**
 * @schema Category
 */
export interface Category {
  /**
   * @schema Category#CategoryId
   */
  readonly categoryId?: number;

  /**
   * @schema Category#CategoryName
   */
  readonly categoryName?: string;

}

/**
 * @schema SkillsStoreSkill
 */
export interface SkillsStoreSkill {
  /**
   * @schema SkillsStoreSkill#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema SkillsStoreSkill#SkillName
   */
  readonly skillName?: string;

  /**
   * @schema SkillsStoreSkill#ShortDescription
   */
  readonly shortDescription?: string;

  /**
   * @schema SkillsStoreSkill#IconUrl
   */
  readonly iconUrl?: string;

  /**
   * @schema SkillsStoreSkill#SampleUtterances
   */
  readonly sampleUtterances?: string[];

  /**
   * @schema SkillsStoreSkill#SkillDetails
   */
  readonly skillDetails?: SkillDetails;

  /**
   * @schema SkillsStoreSkill#SupportsLinking
   */
  readonly supportsLinking?: boolean;

}

/**
 * @schema SmartHomeAppliance
 */
export interface SmartHomeAppliance {
  /**
   * @schema SmartHomeAppliance#FriendlyName
   */
  readonly friendlyName?: string;

  /**
   * @schema SmartHomeAppliance#Description
   */
  readonly description?: string;

  /**
   * @schema SmartHomeAppliance#ManufacturerName
   */
  readonly manufacturerName?: string;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Key
   */
  readonly key: string;

  /**
   * @schema Filter#Values
   */
  readonly values: string[];

}

/**
 * @schema Sort
 */
export interface Sort {
  /**
   * @schema Sort#Key
   */
  readonly key: string;

  /**
   * @schema Sort#Value
   */
  readonly value: string;

}

/**
 * @schema AddressBookData
 */
export interface AddressBookData {
  /**
   * @schema AddressBookData#AddressBookArn
   */
  readonly addressBookArn?: string;

  /**
   * @schema AddressBookData#Name
   */
  readonly name?: string;

  /**
   * @schema AddressBookData#Description
   */
  readonly description?: string;

}

/**
 * @schema ContactData
 */
export interface ContactData {
  /**
   * @schema ContactData#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema ContactData#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ContactData#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema ContactData#LastName
   */
  readonly lastName?: string;

  /**
   * @schema ContactData#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema ContactData#PhoneNumbers
   */
  readonly phoneNumbers?: PhoneNumber[];

  /**
   * @schema ContactData#SipAddresses
   */
  readonly sipAddresses?: SipAddress[];

}

/**
 * @schema DeviceData
 */
export interface DeviceData {
  /**
   * @schema DeviceData#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema DeviceData#DeviceSerialNumber
   */
  readonly deviceSerialNumber?: string;

  /**
   * @schema DeviceData#DeviceType
   */
  readonly deviceType?: string;

  /**
   * @schema DeviceData#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema DeviceData#SoftwareVersion
   */
  readonly softwareVersion?: string;

  /**
   * @schema DeviceData#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema DeviceData#DeviceStatus
   */
  readonly deviceStatus?: string;

  /**
   * @schema DeviceData#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema DeviceData#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema DeviceData#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema DeviceData#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema DeviceData#DeviceStatusInfo
   */
  readonly deviceStatusInfo?: DeviceStatusInfo;

  /**
   * @schema DeviceData#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema NetworkProfileData
 */
export interface NetworkProfileData {
  /**
   * @schema NetworkProfileData#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema NetworkProfileData#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema NetworkProfileData#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkProfileData#Ssid
   */
  readonly ssid?: string;

  /**
   * @schema NetworkProfileData#SecurityType
   */
  readonly securityType?: string;

  /**
   * @schema NetworkProfileData#EapMethod
   */
  readonly eapMethod?: string;

  /**
   * @schema NetworkProfileData#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

}

/**
 * @schema ProfileData
 */
export interface ProfileData {
  /**
   * @schema ProfileData#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema ProfileData#ProfileName
   */
  readonly profileName?: string;

  /**
   * @schema ProfileData#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema ProfileData#Address
   */
  readonly address?: string;

  /**
   * @schema ProfileData#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema ProfileData#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema ProfileData#TemperatureUnit
   */
  readonly temperatureUnit?: string;

  /**
   * @schema ProfileData#WakeWord
   */
  readonly wakeWord?: string;

  /**
   * @schema ProfileData#Locale
   */
  readonly locale?: string;

}

/**
 * @schema RoomData
 */
export interface RoomData {
  /**
   * @schema RoomData#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema RoomData#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema RoomData#Description
   */
  readonly description?: string;

  /**
   * @schema RoomData#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema RoomData#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema RoomData#ProfileName
   */
  readonly profileName?: string;

}

/**
 * @schema SkillGroupData
 */
export interface SkillGroupData {
  /**
   * @schema SkillGroupData#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema SkillGroupData#SkillGroupName
   */
  readonly skillGroupName?: string;

  /**
   * @schema SkillGroupData#Description
   */
  readonly description?: string;

}

/**
 * @schema UserData
 */
export interface UserData {
  /**
   * @schema UserData#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema UserData#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema UserData#LastName
   */
  readonly lastName?: string;

  /**
   * @schema UserData#Email
   */
  readonly email?: string;

  /**
   * @schema UserData#EnrollmentStatus
   */
  readonly enrollmentStatus?: string;

  /**
   * @schema UserData#EnrollmentId
   */
  readonly enrollmentId?: string;

}

/**
 * @schema Content
 */
export interface Content {
  /**
   * @schema Content#TextList
   */
  readonly textList?: Text[];

  /**
   * @schema Content#SsmlList
   */
  readonly ssmlList?: Ssml[];

  /**
   * @schema Content#AudioList
   */
  readonly audioList?: Audio[];

}

/**
 * @schema UpdateMeetingRoomConfiguration
 */
export interface UpdateMeetingRoomConfiguration {
  /**
   * @schema UpdateMeetingRoomConfiguration#RoomUtilizationMetricsEnabled
   */
  readonly roomUtilizationMetricsEnabled?: boolean;

  /**
   * @schema UpdateMeetingRoomConfiguration#EndOfMeetingReminder
   */
  readonly endOfMeetingReminder?: UpdateEndOfMeetingReminder;

  /**
   * @schema UpdateMeetingRoomConfiguration#InstantBooking
   */
  readonly instantBooking?: UpdateInstantBooking;

  /**
   * @schema UpdateMeetingRoomConfiguration#RequireCheckIn
   */
  readonly requireCheckIn?: UpdateRequireCheckIn;

}

/**
 * @schema CreateEndOfMeetingReminder
 */
export interface CreateEndOfMeetingReminder {
  /**
   * @schema CreateEndOfMeetingReminder#ReminderAtMinutes
   */
  readonly reminderAtMinutes: number[];

  /**
   * @schema CreateEndOfMeetingReminder#ReminderType
   */
  readonly reminderType: string;

  /**
   * @schema CreateEndOfMeetingReminder#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema CreateInstantBooking
 */
export interface CreateInstantBooking {
  /**
   * @schema CreateInstantBooking#DurationInMinutes
   */
  readonly durationInMinutes: number;

  /**
   * @schema CreateInstantBooking#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema CreateRequireCheckIn
 */
export interface CreateRequireCheckIn {
  /**
   * @schema CreateRequireCheckIn#ReleaseAfterMinutes
   */
  readonly releaseAfterMinutes: number;

  /**
   * @schema CreateRequireCheckIn#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema DeviceStatusInfo
 */
export interface DeviceStatusInfo {
  /**
   * @schema DeviceStatusInfo#DeviceStatusDetails
   */
  readonly deviceStatusDetails?: DeviceStatusDetail[];

  /**
   * @schema DeviceStatusInfo#ConnectionStatus
   */
  readonly connectionStatus?: string;

  /**
   * @schema DeviceStatusInfo#ConnectionStatusUpdatedTime
   */
  readonly connectionStatusUpdatedTime?: string;

}

/**
 * @schema DeviceNetworkProfileInfo
 */
export interface DeviceNetworkProfileInfo {
  /**
   * @schema DeviceNetworkProfileInfo#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema DeviceNetworkProfileInfo#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema DeviceNetworkProfileInfo#CertificateExpirationTime
   */
  readonly certificateExpirationTime?: string;

}

/**
 * @schema MeetingRoomConfiguration
 */
export interface MeetingRoomConfiguration {
  /**
   * @schema MeetingRoomConfiguration#RoomUtilizationMetricsEnabled
   */
  readonly roomUtilizationMetricsEnabled?: boolean;

  /**
   * @schema MeetingRoomConfiguration#EndOfMeetingReminder
   */
  readonly endOfMeetingReminder?: EndOfMeetingReminder;

  /**
   * @schema MeetingRoomConfiguration#InstantBooking
   */
  readonly instantBooking?: InstantBooking;

  /**
   * @schema MeetingRoomConfiguration#RequireCheckIn
   */
  readonly requireCheckIn?: RequireCheckIn;

}

/**
 * @schema BusinessReport
 */
export interface BusinessReport {
  /**
   * @schema BusinessReport#Status
   */
  readonly status?: string;

  /**
   * @schema BusinessReport#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema BusinessReport#S3Location
   */
  readonly s3Location?: BusinessReportS3Location;

  /**
   * @schema BusinessReport#DeliveryTime
   */
  readonly deliveryTime?: string;

  /**
   * @schema BusinessReport#DownloadUrl
   */
  readonly downloadUrl?: string;

}

/**
 * @schema SkillDetails
 */
export interface SkillDetails {
  /**
   * @schema SkillDetails#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema SkillDetails#InvocationPhrase
   */
  readonly invocationPhrase?: string;

  /**
   * @schema SkillDetails#ReleaseDate
   */
  readonly releaseDate?: string;

  /**
   * @schema SkillDetails#EndUserLicenseAgreement
   */
  readonly endUserLicenseAgreement?: string;

  /**
   * @schema SkillDetails#GenericKeywords
   */
  readonly genericKeywords?: string[];

  /**
   * @schema SkillDetails#BulletPoints
   */
  readonly bulletPoints?: string[];

  /**
   * @schema SkillDetails#NewInThisVersionBulletPoints
   */
  readonly newInThisVersionBulletPoints?: string[];

  /**
   * @schema SkillDetails#SkillTypes
   */
  readonly skillTypes?: string[];

  /**
   * @schema SkillDetails#Reviews
   */
  readonly reviews?: { [key: string]: string };

  /**
   * @schema SkillDetails#DeveloperInfo
   */
  readonly developerInfo?: DeveloperInfo;

}

/**
 * @schema Text
 */
export interface Text {
  /**
   * @schema Text#Locale
   */
  readonly locale: string;

  /**
   * @schema Text#Value
   */
  readonly value: string;

}

/**
 * @schema Ssml
 */
export interface Ssml {
  /**
   * @schema Ssml#Locale
   */
  readonly locale: string;

  /**
   * @schema Ssml#Value
   */
  readonly value: string;

}

/**
 * @schema Audio
 */
export interface Audio {
  /**
   * @schema Audio#Locale
   */
  readonly locale: string;

  /**
   * @schema Audio#Location
   */
  readonly location: string;

}

/**
 * @schema UpdateEndOfMeetingReminder
 */
export interface UpdateEndOfMeetingReminder {
  /**
   * @schema UpdateEndOfMeetingReminder#ReminderAtMinutes
   */
  readonly reminderAtMinutes?: number[];

  /**
   * @schema UpdateEndOfMeetingReminder#ReminderType
   */
  readonly reminderType?: string;

  /**
   * @schema UpdateEndOfMeetingReminder#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema UpdateInstantBooking
 */
export interface UpdateInstantBooking {
  /**
   * @schema UpdateInstantBooking#DurationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema UpdateInstantBooking#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema UpdateRequireCheckIn
 */
export interface UpdateRequireCheckIn {
  /**
   * @schema UpdateRequireCheckIn#ReleaseAfterMinutes
   */
  readonly releaseAfterMinutes?: number;

  /**
   * @schema UpdateRequireCheckIn#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema DeviceStatusDetail
 */
export interface DeviceStatusDetail {
  /**
   * @schema DeviceStatusDetail#Feature
   */
  readonly feature?: string;

  /**
   * @schema DeviceStatusDetail#Code
   */
  readonly code?: string;

}

/**
 * @schema EndOfMeetingReminder
 */
export interface EndOfMeetingReminder {
  /**
   * @schema EndOfMeetingReminder#ReminderAtMinutes
   */
  readonly reminderAtMinutes?: number[];

  /**
   * @schema EndOfMeetingReminder#ReminderType
   */
  readonly reminderType?: string;

  /**
   * @schema EndOfMeetingReminder#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema InstantBooking
 */
export interface InstantBooking {
  /**
   * @schema InstantBooking#DurationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema InstantBooking#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema RequireCheckIn
 */
export interface RequireCheckIn {
  /**
   * @schema RequireCheckIn#ReleaseAfterMinutes
   */
  readonly releaseAfterMinutes?: number;

  /**
   * @schema RequireCheckIn#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema BusinessReportS3Location
 */
export interface BusinessReportS3Location {
  /**
   * @schema BusinessReportS3Location#Path
   */
  readonly path?: string;

  /**
   * @schema BusinessReportS3Location#BucketName
   */
  readonly bucketName?: string;

}

/**
 * @schema DeveloperInfo
 */
export interface DeveloperInfo {
  /**
   * @schema DeveloperInfo#DeveloperName
   */
  readonly developerName?: string;

  /**
   * @schema DeveloperInfo#PrivacyPolicy
   */
  readonly privacyPolicy?: string;

  /**
   * @schema DeveloperInfo#Email
   */
  readonly email?: string;

  /**
   * @schema DeveloperInfo#Url
   */
  readonly url?: string;

}
