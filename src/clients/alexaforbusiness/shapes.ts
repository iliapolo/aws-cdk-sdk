/**
 * @schema AlexaForBusinessApproveSkillRequest
 */
export interface AlexaForBusinessApproveSkillRequest {
  /**
   * @schema AlexaForBusinessApproveSkillRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema AlexaForBusinessApproveSkillResponse
 */
export interface AlexaForBusinessApproveSkillResponse {
}

/**
 * @schema AlexaForBusinessAssociateContactWithAddressBookRequest
 */
export interface AlexaForBusinessAssociateContactWithAddressBookRequest {
  /**
   * @schema AlexaForBusinessAssociateContactWithAddressBookRequest#ContactArn
   */
  readonly contactArn: string;

  /**
   * @schema AlexaForBusinessAssociateContactWithAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn: string;

}

/**
 * @schema AlexaForBusinessAssociateContactWithAddressBookResponse
 */
export interface AlexaForBusinessAssociateContactWithAddressBookResponse {
}

/**
 * @schema AlexaForBusinessAssociateDeviceWithNetworkProfileRequest
 */
export interface AlexaForBusinessAssociateDeviceWithNetworkProfileRequest {
  /**
   * @schema AlexaForBusinessAssociateDeviceWithNetworkProfileRequest#DeviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema AlexaForBusinessAssociateDeviceWithNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn: string;

}

/**
 * @schema AlexaForBusinessAssociateDeviceWithNetworkProfileResponse
 */
export interface AlexaForBusinessAssociateDeviceWithNetworkProfileResponse {
}

/**
 * @schema AlexaForBusinessAssociateDeviceWithRoomRequest
 */
export interface AlexaForBusinessAssociateDeviceWithRoomRequest {
  /**
   * @schema AlexaForBusinessAssociateDeviceWithRoomRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessAssociateDeviceWithRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AlexaForBusinessAssociateDeviceWithRoomResponse
 */
export interface AlexaForBusinessAssociateDeviceWithRoomResponse {
}

/**
 * @schema AlexaForBusinessAssociateSkillGroupWithRoomRequest
 */
export interface AlexaForBusinessAssociateSkillGroupWithRoomRequest {
  /**
   * @schema AlexaForBusinessAssociateSkillGroupWithRoomRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessAssociateSkillGroupWithRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AlexaForBusinessAssociateSkillGroupWithRoomResponse
 */
export interface AlexaForBusinessAssociateSkillGroupWithRoomResponse {
}

/**
 * @schema AlexaForBusinessAssociateSkillWithSkillGroupRequest
 */
export interface AlexaForBusinessAssociateSkillWithSkillGroupRequest {
  /**
   * @schema AlexaForBusinessAssociateSkillWithSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessAssociateSkillWithSkillGroupRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema AlexaForBusinessAssociateSkillWithSkillGroupResponse
 */
export interface AlexaForBusinessAssociateSkillWithSkillGroupResponse {
}

/**
 * @schema AlexaForBusinessAssociateSkillWithUsersRequest
 */
export interface AlexaForBusinessAssociateSkillWithUsersRequest {
  /**
   * @schema AlexaForBusinessAssociateSkillWithUsersRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema AlexaForBusinessAssociateSkillWithUsersResponse
 */
export interface AlexaForBusinessAssociateSkillWithUsersResponse {
}

/**
 * @schema AlexaForBusinessCreateAddressBookRequest
 */
export interface AlexaForBusinessCreateAddressBookRequest {
  /**
   * @schema AlexaForBusinessCreateAddressBookRequest#Name
   */
  readonly name: string;

  /**
   * @schema AlexaForBusinessCreateAddressBookRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessCreateAddressBookRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema AlexaForBusinessCreateAddressBookResponse
 */
export interface AlexaForBusinessCreateAddressBookResponse {
  /**
   * @schema AlexaForBusinessCreateAddressBookResponse#AddressBookArn
   */
  readonly addressBookArn?: string;

}

/**
 * @schema AlexaForBusinessCreateBusinessReportScheduleRequest
 */
export interface AlexaForBusinessCreateBusinessReportScheduleRequest {
  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#ScheduleName
   */
  readonly scheduleName?: string;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#Format
   */
  readonly format: string;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#ContentRange
   */
  readonly contentRange: AlexaForBusinessBusinessReportContentRange;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#Recurrence
   */
  readonly recurrence?: AlexaForBusinessBusinessReportRecurrence;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * @schema AlexaForBusinessCreateBusinessReportScheduleResponse
 */
export interface AlexaForBusinessCreateBusinessReportScheduleResponse {
  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleResponse#ScheduleArn
   */
  readonly scheduleArn?: string;

}

/**
 * @schema AlexaForBusinessCreateConferenceProviderRequest
 */
export interface AlexaForBusinessCreateConferenceProviderRequest {
  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#ConferenceProviderName
   */
  readonly conferenceProviderName: string;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#ConferenceProviderType
   */
  readonly conferenceProviderType: string;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#IPDialIn
   */
  readonly ipDialIn?: AlexaForBusinessIpDialIn;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#PSTNDialIn
   */
  readonly pstnDialIn?: AlexaForBusinessPstnDialIn;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#MeetingSetting
   */
  readonly meetingSetting: AlexaForBusinessMeetingSetting;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema AlexaForBusinessCreateConferenceProviderResponse
 */
export interface AlexaForBusinessCreateConferenceProviderResponse {
  /**
   * @schema AlexaForBusinessCreateConferenceProviderResponse#ConferenceProviderArn
   */
  readonly conferenceProviderArn?: string;

}

/**
 * @schema AlexaForBusinessCreateContactRequest
 */
export interface AlexaForBusinessCreateContactRequest {
  /**
   * @schema AlexaForBusinessCreateContactRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AlexaForBusinessCreateContactRequest#FirstName
   */
  readonly firstName: string;

  /**
   * @schema AlexaForBusinessCreateContactRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessCreateContactRequest#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema AlexaForBusinessCreateContactRequest#PhoneNumbers
   */
  readonly phoneNumbers?: AlexaForBusinessPhoneNumber[];

  /**
   * @schema AlexaForBusinessCreateContactRequest#SipAddresses
   */
  readonly sipAddresses?: AlexaForBusinessSipAddress[];

  /**
   * @schema AlexaForBusinessCreateContactRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema AlexaForBusinessCreateContactResponse
 */
export interface AlexaForBusinessCreateContactResponse {
  /**
   * @schema AlexaForBusinessCreateContactResponse#ContactArn
   */
  readonly contactArn?: string;

}

/**
 * @schema AlexaForBusinessCreateGatewayGroupRequest
 */
export interface AlexaForBusinessCreateGatewayGroupRequest {
  /**
   * @schema AlexaForBusinessCreateGatewayGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema AlexaForBusinessCreateGatewayGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessCreateGatewayGroupRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema AlexaForBusinessCreateGatewayGroupResponse
 */
export interface AlexaForBusinessCreateGatewayGroupResponse {
  /**
   * @schema AlexaForBusinessCreateGatewayGroupResponse#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

}

/**
 * @schema AlexaForBusinessCreateNetworkProfileRequest
 */
export interface AlexaForBusinessCreateNetworkProfileRequest {
  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#NetworkProfileName
   */
  readonly networkProfileName: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#Ssid
   */
  readonly ssid: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#SecurityType
   */
  readonly securityType: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#EapMethod
   */
  readonly eapMethod?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#CurrentPassword
   */
  readonly currentPassword?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#NextPassword
   */
  readonly nextPassword?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#TrustAnchors
   */
  readonly trustAnchors?: string[];

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema AlexaForBusinessCreateNetworkProfileResponse
 */
export interface AlexaForBusinessCreateNetworkProfileResponse {
  /**
   * @schema AlexaForBusinessCreateNetworkProfileResponse#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

}

/**
 * @schema AlexaForBusinessCreateProfileRequest
 */
export interface AlexaForBusinessCreateProfileRequest {
  /**
   * @schema AlexaForBusinessCreateProfileRequest#ProfileName
   */
  readonly profileName: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#Timezone
   */
  readonly timezone: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#Address
   */
  readonly address: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#DistanceUnit
   */
  readonly distanceUnit: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#TemperatureUnit
   */
  readonly temperatureUnit: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#WakeWord
   */
  readonly wakeWord: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#Locale
   */
  readonly locale?: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#SetupModeDisabled
   */
  readonly setupModeDisabled?: boolean;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#MaxVolumeLimit
   */
  readonly maxVolumeLimit?: number;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#PSTNEnabled
   */
  readonly pstnEnabled?: boolean;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#MeetingRoomConfiguration
   */
  readonly meetingRoomConfiguration?: AlexaForBusinessCreateMeetingRoomConfiguration;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * @schema AlexaForBusinessCreateProfileResponse
 */
export interface AlexaForBusinessCreateProfileResponse {
  /**
   * @schema AlexaForBusinessCreateProfileResponse#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * @schema AlexaForBusinessCreateRoomRequest
 */
export interface AlexaForBusinessCreateRoomRequest {
  /**
   * @schema AlexaForBusinessCreateRoomRequest#RoomName
   */
  readonly roomName: string;

  /**
   * @schema AlexaForBusinessCreateRoomRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessCreateRoomRequest#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema AlexaForBusinessCreateRoomRequest#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema AlexaForBusinessCreateRoomRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateRoomRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * @schema AlexaForBusinessCreateRoomResponse
 */
export interface AlexaForBusinessCreateRoomResponse {
  /**
   * @schema AlexaForBusinessCreateRoomResponse#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AlexaForBusinessCreateSkillGroupRequest
 */
export interface AlexaForBusinessCreateSkillGroupRequest {
  /**
   * @schema AlexaForBusinessCreateSkillGroupRequest#SkillGroupName
   */
  readonly skillGroupName: string;

  /**
   * @schema AlexaForBusinessCreateSkillGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessCreateSkillGroupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateSkillGroupRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * @schema AlexaForBusinessCreateSkillGroupResponse
 */
export interface AlexaForBusinessCreateSkillGroupResponse {
  /**
   * @schema AlexaForBusinessCreateSkillGroupResponse#SkillGroupArn
   */
  readonly skillGroupArn?: string;

}

/**
 * @schema AlexaForBusinessCreateUserRequest
 */
export interface AlexaForBusinessCreateUserRequest {
  /**
   * @schema AlexaForBusinessCreateUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema AlexaForBusinessCreateUserRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessCreateUserRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessCreateUserRequest#Email
   */
  readonly email?: string;

  /**
   * @schema AlexaForBusinessCreateUserRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateUserRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * @schema AlexaForBusinessCreateUserResponse
 */
export interface AlexaForBusinessCreateUserResponse {
  /**
   * @schema AlexaForBusinessCreateUserResponse#UserArn
   */
  readonly userArn?: string;

}

/**
 * @schema AlexaForBusinessDeleteAddressBookRequest
 */
export interface AlexaForBusinessDeleteAddressBookRequest {
  /**
   * @schema AlexaForBusinessDeleteAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn: string;

}

/**
 * @schema AlexaForBusinessDeleteAddressBookResponse
 */
export interface AlexaForBusinessDeleteAddressBookResponse {
}

/**
 * @schema AlexaForBusinessDeleteBusinessReportScheduleRequest
 */
export interface AlexaForBusinessDeleteBusinessReportScheduleRequest {
  /**
   * @schema AlexaForBusinessDeleteBusinessReportScheduleRequest#ScheduleArn
   */
  readonly scheduleArn: string;

}

/**
 * @schema AlexaForBusinessDeleteBusinessReportScheduleResponse
 */
export interface AlexaForBusinessDeleteBusinessReportScheduleResponse {
}

/**
 * @schema AlexaForBusinessDeleteConferenceProviderRequest
 */
export interface AlexaForBusinessDeleteConferenceProviderRequest {
  /**
   * @schema AlexaForBusinessDeleteConferenceProviderRequest#ConferenceProviderArn
   */
  readonly conferenceProviderArn: string;

}

/**
 * @schema AlexaForBusinessDeleteConferenceProviderResponse
 */
export interface AlexaForBusinessDeleteConferenceProviderResponse {
}

/**
 * @schema AlexaForBusinessDeleteContactRequest
 */
export interface AlexaForBusinessDeleteContactRequest {
  /**
   * @schema AlexaForBusinessDeleteContactRequest#ContactArn
   */
  readonly contactArn: string;

}

/**
 * @schema AlexaForBusinessDeleteContactResponse
 */
export interface AlexaForBusinessDeleteContactResponse {
}

/**
 * @schema AlexaForBusinessDeleteDeviceRequest
 */
export interface AlexaForBusinessDeleteDeviceRequest {
  /**
   * @schema AlexaForBusinessDeleteDeviceRequest#DeviceArn
   */
  readonly deviceArn: string;

}

/**
 * @schema AlexaForBusinessDeleteDeviceResponse
 */
export interface AlexaForBusinessDeleteDeviceResponse {
}

/**
 * @schema AlexaForBusinessDeleteDeviceUsageDataRequest
 */
export interface AlexaForBusinessDeleteDeviceUsageDataRequest {
  /**
   * @schema AlexaForBusinessDeleteDeviceUsageDataRequest#DeviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema AlexaForBusinessDeleteDeviceUsageDataRequest#DeviceUsageType
   */
  readonly deviceUsageType: string;

}

/**
 * @schema AlexaForBusinessDeleteDeviceUsageDataResponse
 */
export interface AlexaForBusinessDeleteDeviceUsageDataResponse {
}

/**
 * @schema AlexaForBusinessDeleteGatewayGroupRequest
 */
export interface AlexaForBusinessDeleteGatewayGroupRequest {
  /**
   * @schema AlexaForBusinessDeleteGatewayGroupRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn: string;

}

/**
 * @schema AlexaForBusinessDeleteGatewayGroupResponse
 */
export interface AlexaForBusinessDeleteGatewayGroupResponse {
}

/**
 * @schema AlexaForBusinessDeleteNetworkProfileRequest
 */
export interface AlexaForBusinessDeleteNetworkProfileRequest {
  /**
   * @schema AlexaForBusinessDeleteNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn: string;

}

/**
 * @schema AlexaForBusinessDeleteNetworkProfileResponse
 */
export interface AlexaForBusinessDeleteNetworkProfileResponse {
}

/**
 * @schema AlexaForBusinessDeleteProfileRequest
 */
export interface AlexaForBusinessDeleteProfileRequest {
  /**
   * @schema AlexaForBusinessDeleteProfileRequest#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * @schema AlexaForBusinessDeleteProfileResponse
 */
export interface AlexaForBusinessDeleteProfileResponse {
}

/**
 * @schema AlexaForBusinessDeleteRoomRequest
 */
export interface AlexaForBusinessDeleteRoomRequest {
  /**
   * @schema AlexaForBusinessDeleteRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AlexaForBusinessDeleteRoomResponse
 */
export interface AlexaForBusinessDeleteRoomResponse {
}

/**
 * @schema AlexaForBusinessDeleteRoomSkillParameterRequest
 */
export interface AlexaForBusinessDeleteRoomSkillParameterRequest {
  /**
   * @schema AlexaForBusinessDeleteRoomSkillParameterRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessDeleteRoomSkillParameterRequest#SkillId
   */
  readonly skillId: string;

  /**
   * @schema AlexaForBusinessDeleteRoomSkillParameterRequest#ParameterKey
   */
  readonly parameterKey: string;

}

/**
 * @schema AlexaForBusinessDeleteRoomSkillParameterResponse
 */
export interface AlexaForBusinessDeleteRoomSkillParameterResponse {
}

/**
 * @schema AlexaForBusinessDeleteSkillAuthorizationRequest
 */
export interface AlexaForBusinessDeleteSkillAuthorizationRequest {
  /**
   * @schema AlexaForBusinessDeleteSkillAuthorizationRequest#SkillId
   */
  readonly skillId: string;

  /**
   * @schema AlexaForBusinessDeleteSkillAuthorizationRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AlexaForBusinessDeleteSkillAuthorizationResponse
 */
export interface AlexaForBusinessDeleteSkillAuthorizationResponse {
}

/**
 * @schema AlexaForBusinessDeleteSkillGroupRequest
 */
export interface AlexaForBusinessDeleteSkillGroupRequest {
  /**
   * @schema AlexaForBusinessDeleteSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

}

/**
 * @schema AlexaForBusinessDeleteSkillGroupResponse
 */
export interface AlexaForBusinessDeleteSkillGroupResponse {
}

/**
 * @schema AlexaForBusinessDeleteUserRequest
 */
export interface AlexaForBusinessDeleteUserRequest {
  /**
   * @schema AlexaForBusinessDeleteUserRequest#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema AlexaForBusinessDeleteUserRequest#EnrollmentId
   */
  readonly enrollmentId: string;

}

/**
 * @schema AlexaForBusinessDeleteUserResponse
 */
export interface AlexaForBusinessDeleteUserResponse {
}

/**
 * @schema AlexaForBusinessDisassociateContactFromAddressBookRequest
 */
export interface AlexaForBusinessDisassociateContactFromAddressBookRequest {
  /**
   * @schema AlexaForBusinessDisassociateContactFromAddressBookRequest#ContactArn
   */
  readonly contactArn: string;

  /**
   * @schema AlexaForBusinessDisassociateContactFromAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn: string;

}

/**
 * @schema AlexaForBusinessDisassociateContactFromAddressBookResponse
 */
export interface AlexaForBusinessDisassociateContactFromAddressBookResponse {
}

/**
 * @schema AlexaForBusinessDisassociateDeviceFromRoomRequest
 */
export interface AlexaForBusinessDisassociateDeviceFromRoomRequest {
  /**
   * @schema AlexaForBusinessDisassociateDeviceFromRoomRequest#DeviceArn
   */
  readonly deviceArn?: string;

}

/**
 * @schema AlexaForBusinessDisassociateDeviceFromRoomResponse
 */
export interface AlexaForBusinessDisassociateDeviceFromRoomResponse {
}

/**
 * @schema AlexaForBusinessDisassociateSkillFromSkillGroupRequest
 */
export interface AlexaForBusinessDisassociateSkillFromSkillGroupRequest {
  /**
   * @schema AlexaForBusinessDisassociateSkillFromSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessDisassociateSkillFromSkillGroupRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema AlexaForBusinessDisassociateSkillFromSkillGroupResponse
 */
export interface AlexaForBusinessDisassociateSkillFromSkillGroupResponse {
}

/**
 * @schema AlexaForBusinessDisassociateSkillFromUsersRequest
 */
export interface AlexaForBusinessDisassociateSkillFromUsersRequest {
  /**
   * @schema AlexaForBusinessDisassociateSkillFromUsersRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema AlexaForBusinessDisassociateSkillFromUsersResponse
 */
export interface AlexaForBusinessDisassociateSkillFromUsersResponse {
}

/**
 * @schema AlexaForBusinessDisassociateSkillGroupFromRoomRequest
 */
export interface AlexaForBusinessDisassociateSkillGroupFromRoomRequest {
  /**
   * @schema AlexaForBusinessDisassociateSkillGroupFromRoomRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessDisassociateSkillGroupFromRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AlexaForBusinessDisassociateSkillGroupFromRoomResponse
 */
export interface AlexaForBusinessDisassociateSkillGroupFromRoomResponse {
}

/**
 * @schema AlexaForBusinessForgetSmartHomeAppliancesRequest
 */
export interface AlexaForBusinessForgetSmartHomeAppliancesRequest {
  /**
   * @schema AlexaForBusinessForgetSmartHomeAppliancesRequest#RoomArn
   */
  readonly roomArn: string;

}

/**
 * @schema AlexaForBusinessForgetSmartHomeAppliancesResponse
 */
export interface AlexaForBusinessForgetSmartHomeAppliancesResponse {
}

/**
 * @schema AlexaForBusinessGetAddressBookRequest
 */
export interface AlexaForBusinessGetAddressBookRequest {
  /**
   * @schema AlexaForBusinessGetAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn: string;

}

/**
 * @schema AlexaForBusinessGetAddressBookResponse
 */
export interface AlexaForBusinessGetAddressBookResponse {
  /**
   * @schema AlexaForBusinessGetAddressBookResponse#AddressBook
   */
  readonly addressBook?: AlexaForBusinessAddressBook;

}

/**
 * @schema AlexaForBusinessGetConferencePreferenceRequest
 */
export interface AlexaForBusinessGetConferencePreferenceRequest {
}

/**
 * @schema AlexaForBusinessGetConferencePreferenceResponse
 */
export interface AlexaForBusinessGetConferencePreferenceResponse {
  /**
   * @schema AlexaForBusinessGetConferencePreferenceResponse#Preference
   */
  readonly preference?: AlexaForBusinessConferencePreference;

}

/**
 * @schema AlexaForBusinessGetConferenceProviderRequest
 */
export interface AlexaForBusinessGetConferenceProviderRequest {
  /**
   * @schema AlexaForBusinessGetConferenceProviderRequest#ConferenceProviderArn
   */
  readonly conferenceProviderArn: string;

}

/**
 * @schema AlexaForBusinessGetConferenceProviderResponse
 */
export interface AlexaForBusinessGetConferenceProviderResponse {
  /**
   * @schema AlexaForBusinessGetConferenceProviderResponse#ConferenceProvider
   */
  readonly conferenceProvider?: AlexaForBusinessConferenceProvider;

}

/**
 * @schema AlexaForBusinessGetContactRequest
 */
export interface AlexaForBusinessGetContactRequest {
  /**
   * @schema AlexaForBusinessGetContactRequest#ContactArn
   */
  readonly contactArn: string;

}

/**
 * @schema AlexaForBusinessGetContactResponse
 */
export interface AlexaForBusinessGetContactResponse {
  /**
   * @schema AlexaForBusinessGetContactResponse#Contact
   */
  readonly contact?: AlexaForBusinessContact;

}

/**
 * @schema AlexaForBusinessGetDeviceRequest
 */
export interface AlexaForBusinessGetDeviceRequest {
  /**
   * @schema AlexaForBusinessGetDeviceRequest#DeviceArn
   */
  readonly deviceArn?: string;

}

/**
 * @schema AlexaForBusinessGetDeviceResponse
 */
export interface AlexaForBusinessGetDeviceResponse {
  /**
   * @schema AlexaForBusinessGetDeviceResponse#Device
   */
  readonly device?: AlexaForBusinessDevice;

}

/**
 * @schema AlexaForBusinessGetGatewayRequest
 */
export interface AlexaForBusinessGetGatewayRequest {
  /**
   * @schema AlexaForBusinessGetGatewayRequest#GatewayArn
   */
  readonly gatewayArn: string;

}

/**
 * @schema AlexaForBusinessGetGatewayResponse
 */
export interface AlexaForBusinessGetGatewayResponse {
  /**
   * @schema AlexaForBusinessGetGatewayResponse#Gateway
   */
  readonly gateway?: AlexaForBusinessGateway;

}

/**
 * @schema AlexaForBusinessGetGatewayGroupRequest
 */
export interface AlexaForBusinessGetGatewayGroupRequest {
  /**
   * @schema AlexaForBusinessGetGatewayGroupRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn: string;

}

/**
 * @schema AlexaForBusinessGetGatewayGroupResponse
 */
export interface AlexaForBusinessGetGatewayGroupResponse {
  /**
   * @schema AlexaForBusinessGetGatewayGroupResponse#GatewayGroup
   */
  readonly gatewayGroup?: AlexaForBusinessGatewayGroup;

}

/**
 * @schema AlexaForBusinessGetInvitationConfigurationRequest
 */
export interface AlexaForBusinessGetInvitationConfigurationRequest {
}

/**
 * @schema AlexaForBusinessGetInvitationConfigurationResponse
 */
export interface AlexaForBusinessGetInvitationConfigurationResponse {
  /**
   * @schema AlexaForBusinessGetInvitationConfigurationResponse#OrganizationName
   */
  readonly organizationName?: string;

  /**
   * @schema AlexaForBusinessGetInvitationConfigurationResponse#ContactEmail
   */
  readonly contactEmail?: string;

  /**
   * @schema AlexaForBusinessGetInvitationConfigurationResponse#PrivateSkillIds
   */
  readonly privateSkillIds?: string[];

}

/**
 * @schema AlexaForBusinessGetNetworkProfileRequest
 */
export interface AlexaForBusinessGetNetworkProfileRequest {
  /**
   * @schema AlexaForBusinessGetNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn: string;

}

/**
 * @schema AlexaForBusinessGetNetworkProfileResponse
 */
export interface AlexaForBusinessGetNetworkProfileResponse {
  /**
   * @schema AlexaForBusinessGetNetworkProfileResponse#NetworkProfile
   */
  readonly networkProfile?: AlexaForBusinessNetworkProfile;

}

/**
 * @schema AlexaForBusinessGetProfileRequest
 */
export interface AlexaForBusinessGetProfileRequest {
  /**
   * @schema AlexaForBusinessGetProfileRequest#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * @schema AlexaForBusinessGetProfileResponse
 */
export interface AlexaForBusinessGetProfileResponse {
  /**
   * @schema AlexaForBusinessGetProfileResponse#Profile
   */
  readonly profile?: AlexaForBusinessProfile;

}

/**
 * @schema AlexaForBusinessGetRoomRequest
 */
export interface AlexaForBusinessGetRoomRequest {
  /**
   * @schema AlexaForBusinessGetRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AlexaForBusinessGetRoomResponse
 */
export interface AlexaForBusinessGetRoomResponse {
  /**
   * @schema AlexaForBusinessGetRoomResponse#Room
   */
  readonly room?: AlexaForBusinessRoom;

}

/**
 * @schema AlexaForBusinessGetRoomSkillParameterRequest
 */
export interface AlexaForBusinessGetRoomSkillParameterRequest {
  /**
   * @schema AlexaForBusinessGetRoomSkillParameterRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessGetRoomSkillParameterRequest#SkillId
   */
  readonly skillId: string;

  /**
   * @schema AlexaForBusinessGetRoomSkillParameterRequest#ParameterKey
   */
  readonly parameterKey: string;

}

/**
 * @schema AlexaForBusinessGetRoomSkillParameterResponse
 */
export interface AlexaForBusinessGetRoomSkillParameterResponse {
  /**
   * @schema AlexaForBusinessGetRoomSkillParameterResponse#RoomSkillParameter
   */
  readonly roomSkillParameter?: AlexaForBusinessRoomSkillParameter;

}

/**
 * @schema AlexaForBusinessGetSkillGroupRequest
 */
export interface AlexaForBusinessGetSkillGroupRequest {
  /**
   * @schema AlexaForBusinessGetSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

}

/**
 * @schema AlexaForBusinessGetSkillGroupResponse
 */
export interface AlexaForBusinessGetSkillGroupResponse {
  /**
   * @schema AlexaForBusinessGetSkillGroupResponse#SkillGroup
   */
  readonly skillGroup?: AlexaForBusinessSkillGroup;

}

/**
 * @schema AlexaForBusinessListBusinessReportSchedulesRequest
 */
export interface AlexaForBusinessListBusinessReportSchedulesRequest {
  /**
   * @schema AlexaForBusinessListBusinessReportSchedulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListBusinessReportSchedulesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessListBusinessReportSchedulesResponse
 */
export interface AlexaForBusinessListBusinessReportSchedulesResponse {
  /**
   * @schema AlexaForBusinessListBusinessReportSchedulesResponse#BusinessReportSchedules
   */
  readonly businessReportSchedules?: AlexaForBusinessBusinessReportSchedule[];

  /**
   * @schema AlexaForBusinessListBusinessReportSchedulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessListConferenceProvidersRequest
 */
export interface AlexaForBusinessListConferenceProvidersRequest {
  /**
   * @schema AlexaForBusinessListConferenceProvidersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListConferenceProvidersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessListConferenceProvidersResponse
 */
export interface AlexaForBusinessListConferenceProvidersResponse {
  /**
   * @schema AlexaForBusinessListConferenceProvidersResponse#ConferenceProviders
   */
  readonly conferenceProviders?: AlexaForBusinessConferenceProvider[];

  /**
   * @schema AlexaForBusinessListConferenceProvidersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessListDeviceEventsRequest
 */
export interface AlexaForBusinessListDeviceEventsRequest {
  /**
   * @schema AlexaForBusinessListDeviceEventsRequest#DeviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema AlexaForBusinessListDeviceEventsRequest#EventType
   */
  readonly eventType?: string;

  /**
   * @schema AlexaForBusinessListDeviceEventsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListDeviceEventsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessListDeviceEventsResponse
 */
export interface AlexaForBusinessListDeviceEventsResponse {
  /**
   * @schema AlexaForBusinessListDeviceEventsResponse#DeviceEvents
   */
  readonly deviceEvents?: AlexaForBusinessDeviceEvent[];

  /**
   * @schema AlexaForBusinessListDeviceEventsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessListGatewayGroupsRequest
 */
export interface AlexaForBusinessListGatewayGroupsRequest {
  /**
   * @schema AlexaForBusinessListGatewayGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListGatewayGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessListGatewayGroupsResponse
 */
export interface AlexaForBusinessListGatewayGroupsResponse {
  /**
   * @schema AlexaForBusinessListGatewayGroupsResponse#GatewayGroups
   */
  readonly gatewayGroups?: AlexaForBusinessGatewayGroupSummary[];

  /**
   * @schema AlexaForBusinessListGatewayGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessListGatewaysRequest
 */
export interface AlexaForBusinessListGatewaysRequest {
  /**
   * @schema AlexaForBusinessListGatewaysRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

  /**
   * @schema AlexaForBusinessListGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessListGatewaysResponse
 */
export interface AlexaForBusinessListGatewaysResponse {
  /**
   * @schema AlexaForBusinessListGatewaysResponse#Gateways
   */
  readonly gateways?: AlexaForBusinessGatewaySummary[];

  /**
   * @schema AlexaForBusinessListGatewaysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessListSkillsRequest
 */
export interface AlexaForBusinessListSkillsRequest {
  /**
   * @schema AlexaForBusinessListSkillsRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessListSkillsRequest#EnablementType
   */
  readonly enablementType?: string;

  /**
   * @schema AlexaForBusinessListSkillsRequest#SkillType
   */
  readonly skillType?: string;

  /**
   * @schema AlexaForBusinessListSkillsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListSkillsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessListSkillsResponse
 */
export interface AlexaForBusinessListSkillsResponse {
  /**
   * @schema AlexaForBusinessListSkillsResponse#SkillSummaries
   */
  readonly skillSummaries?: AlexaForBusinessSkillSummary[];

  /**
   * @schema AlexaForBusinessListSkillsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessListSkillsStoreCategoriesRequest
 */
export interface AlexaForBusinessListSkillsStoreCategoriesRequest {
  /**
   * @schema AlexaForBusinessListSkillsStoreCategoriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListSkillsStoreCategoriesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessListSkillsStoreCategoriesResponse
 */
export interface AlexaForBusinessListSkillsStoreCategoriesResponse {
  /**
   * @schema AlexaForBusinessListSkillsStoreCategoriesResponse#CategoryList
   */
  readonly categoryList?: AlexaForBusinessCategory[];

  /**
   * @schema AlexaForBusinessListSkillsStoreCategoriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryRequest
 */
export interface AlexaForBusinessListSkillsStoreSkillsByCategoryRequest {
  /**
   * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryRequest#CategoryId
   */
  readonly categoryId: number;

  /**
   * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryResponse
 */
export interface AlexaForBusinessListSkillsStoreSkillsByCategoryResponse {
  /**
   * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryResponse#SkillsStoreSkills
   */
  readonly skillsStoreSkills?: AlexaForBusinessSkillsStoreSkill[];

  /**
   * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessListSmartHomeAppliancesRequest
 */
export interface AlexaForBusinessListSmartHomeAppliancesRequest {
  /**
   * @schema AlexaForBusinessListSmartHomeAppliancesRequest#RoomArn
   */
  readonly roomArn: string;

  /**
   * @schema AlexaForBusinessListSmartHomeAppliancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessListSmartHomeAppliancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessListSmartHomeAppliancesResponse
 */
export interface AlexaForBusinessListSmartHomeAppliancesResponse {
  /**
   * @schema AlexaForBusinessListSmartHomeAppliancesResponse#SmartHomeAppliances
   */
  readonly smartHomeAppliances?: AlexaForBusinessSmartHomeAppliance[];

  /**
   * @schema AlexaForBusinessListSmartHomeAppliancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessListTagsRequest
 */
export interface AlexaForBusinessListTagsRequest {
  /**
   * @schema AlexaForBusinessListTagsRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema AlexaForBusinessListTagsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListTagsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessListTagsResponse
 */
export interface AlexaForBusinessListTagsResponse {
  /**
   * @schema AlexaForBusinessListTagsResponse#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

  /**
   * @schema AlexaForBusinessListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AlexaForBusinessPutConferencePreferenceRequest
 */
export interface AlexaForBusinessPutConferencePreferenceRequest {
  /**
   * @schema AlexaForBusinessPutConferencePreferenceRequest#ConferencePreference
   */
  readonly conferencePreference: AlexaForBusinessConferencePreference;

}

/**
 * @schema AlexaForBusinessPutConferencePreferenceResponse
 */
export interface AlexaForBusinessPutConferencePreferenceResponse {
}

/**
 * @schema AlexaForBusinessPutInvitationConfigurationRequest
 */
export interface AlexaForBusinessPutInvitationConfigurationRequest {
  /**
   * @schema AlexaForBusinessPutInvitationConfigurationRequest#OrganizationName
   */
  readonly organizationName: string;

  /**
   * @schema AlexaForBusinessPutInvitationConfigurationRequest#ContactEmail
   */
  readonly contactEmail?: string;

  /**
   * @schema AlexaForBusinessPutInvitationConfigurationRequest#PrivateSkillIds
   */
  readonly privateSkillIds?: string[];

}

/**
 * @schema AlexaForBusinessPutInvitationConfigurationResponse
 */
export interface AlexaForBusinessPutInvitationConfigurationResponse {
}

/**
 * @schema AlexaForBusinessPutRoomSkillParameterRequest
 */
export interface AlexaForBusinessPutRoomSkillParameterRequest {
  /**
   * @schema AlexaForBusinessPutRoomSkillParameterRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessPutRoomSkillParameterRequest#SkillId
   */
  readonly skillId: string;

  /**
   * @schema AlexaForBusinessPutRoomSkillParameterRequest#RoomSkillParameter
   */
  readonly roomSkillParameter: AlexaForBusinessRoomSkillParameter;

}

/**
 * @schema AlexaForBusinessPutRoomSkillParameterResponse
 */
export interface AlexaForBusinessPutRoomSkillParameterResponse {
}

/**
 * @schema AlexaForBusinessPutSkillAuthorizationRequest
 */
export interface AlexaForBusinessPutSkillAuthorizationRequest {
  /**
   * @schema AlexaForBusinessPutSkillAuthorizationRequest#AuthorizationResult
   */
  readonly authorizationResult: { [key: string]: string };

  /**
   * @schema AlexaForBusinessPutSkillAuthorizationRequest#SkillId
   */
  readonly skillId: string;

  /**
   * @schema AlexaForBusinessPutSkillAuthorizationRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AlexaForBusinessPutSkillAuthorizationResponse
 */
export interface AlexaForBusinessPutSkillAuthorizationResponse {
}

/**
 * @schema AlexaForBusinessRegisterAvsDeviceRequest
 */
export interface AlexaForBusinessRegisterAvsDeviceRequest {
  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#ClientId
   */
  readonly clientId: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#UserCode
   */
  readonly userCode: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#ProductId
   */
  readonly productId: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#DeviceSerialNumber
   */
  readonly deviceSerialNumber?: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#AmazonId
   */
  readonly amazonId: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * @schema AlexaForBusinessRegisterAvsDeviceResponse
 */
export interface AlexaForBusinessRegisterAvsDeviceResponse {
  /**
   * @schema AlexaForBusinessRegisterAvsDeviceResponse#DeviceArn
   */
  readonly deviceArn?: string;

}

/**
 * @schema AlexaForBusinessRejectSkillRequest
 */
export interface AlexaForBusinessRejectSkillRequest {
  /**
   * @schema AlexaForBusinessRejectSkillRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema AlexaForBusinessRejectSkillResponse
 */
export interface AlexaForBusinessRejectSkillResponse {
}

/**
 * @schema AlexaForBusinessResolveRoomRequest
 */
export interface AlexaForBusinessResolveRoomRequest {
  /**
   * @schema AlexaForBusinessResolveRoomRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema AlexaForBusinessResolveRoomRequest#SkillId
   */
  readonly skillId: string;

}

/**
 * @schema AlexaForBusinessResolveRoomResponse
 */
export interface AlexaForBusinessResolveRoomResponse {
  /**
   * @schema AlexaForBusinessResolveRoomResponse#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessResolveRoomResponse#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessResolveRoomResponse#RoomSkillParameters
   */
  readonly roomSkillParameters?: AlexaForBusinessRoomSkillParameter[];

}

/**
 * @schema AlexaForBusinessRevokeInvitationRequest
 */
export interface AlexaForBusinessRevokeInvitationRequest {
  /**
   * @schema AlexaForBusinessRevokeInvitationRequest#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema AlexaForBusinessRevokeInvitationRequest#EnrollmentId
   */
  readonly enrollmentId?: string;

}

/**
 * @schema AlexaForBusinessRevokeInvitationResponse
 */
export interface AlexaForBusinessRevokeInvitationResponse {
}

/**
 * @schema AlexaForBusinessSearchAddressBooksRequest
 */
export interface AlexaForBusinessSearchAddressBooksRequest {
  /**
   * @schema AlexaForBusinessSearchAddressBooksRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchAddressBooksRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

  /**
   * @schema AlexaForBusinessSearchAddressBooksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchAddressBooksRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessSearchAddressBooksResponse
 */
export interface AlexaForBusinessSearchAddressBooksResponse {
  /**
   * @schema AlexaForBusinessSearchAddressBooksResponse#AddressBooks
   */
  readonly addressBooks?: AlexaForBusinessAddressBookData[];

  /**
   * @schema AlexaForBusinessSearchAddressBooksResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchAddressBooksResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema AlexaForBusinessSearchContactsRequest
 */
export interface AlexaForBusinessSearchContactsRequest {
  /**
   * @schema AlexaForBusinessSearchContactsRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchContactsRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

  /**
   * @schema AlexaForBusinessSearchContactsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchContactsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AlexaForBusinessSearchContactsResponse
 */
export interface AlexaForBusinessSearchContactsResponse {
  /**
   * @schema AlexaForBusinessSearchContactsResponse#Contacts
   */
  readonly contacts?: AlexaForBusinessContactData[];

  /**
   * @schema AlexaForBusinessSearchContactsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchContactsResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema AlexaForBusinessSearchDevicesRequest
 */
export interface AlexaForBusinessSearchDevicesRequest {
  /**
   * @schema AlexaForBusinessSearchDevicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchDevicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchDevicesRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchDevicesRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * @schema AlexaForBusinessSearchDevicesResponse
 */
export interface AlexaForBusinessSearchDevicesResponse {
  /**
   * @schema AlexaForBusinessSearchDevicesResponse#Devices
   */
  readonly devices?: AlexaForBusinessDeviceData[];

  /**
   * @schema AlexaForBusinessSearchDevicesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchDevicesResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema AlexaForBusinessSearchNetworkProfilesRequest
 */
export interface AlexaForBusinessSearchNetworkProfilesRequest {
  /**
   * @schema AlexaForBusinessSearchNetworkProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchNetworkProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchNetworkProfilesRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchNetworkProfilesRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * @schema AlexaForBusinessSearchNetworkProfilesResponse
 */
export interface AlexaForBusinessSearchNetworkProfilesResponse {
  /**
   * @schema AlexaForBusinessSearchNetworkProfilesResponse#NetworkProfiles
   */
  readonly networkProfiles?: AlexaForBusinessNetworkProfileData[];

  /**
   * @schema AlexaForBusinessSearchNetworkProfilesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchNetworkProfilesResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema AlexaForBusinessSearchProfilesRequest
 */
export interface AlexaForBusinessSearchProfilesRequest {
  /**
   * @schema AlexaForBusinessSearchProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchProfilesRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchProfilesRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * @schema AlexaForBusinessSearchProfilesResponse
 */
export interface AlexaForBusinessSearchProfilesResponse {
  /**
   * @schema AlexaForBusinessSearchProfilesResponse#Profiles
   */
  readonly profiles?: AlexaForBusinessProfileData[];

  /**
   * @schema AlexaForBusinessSearchProfilesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchProfilesResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema AlexaForBusinessSearchRoomsRequest
 */
export interface AlexaForBusinessSearchRoomsRequest {
  /**
   * @schema AlexaForBusinessSearchRoomsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchRoomsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchRoomsRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchRoomsRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * @schema AlexaForBusinessSearchRoomsResponse
 */
export interface AlexaForBusinessSearchRoomsResponse {
  /**
   * @schema AlexaForBusinessSearchRoomsResponse#Rooms
   */
  readonly rooms?: AlexaForBusinessRoomData[];

  /**
   * @schema AlexaForBusinessSearchRoomsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchRoomsResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema AlexaForBusinessSearchSkillGroupsRequest
 */
export interface AlexaForBusinessSearchSkillGroupsRequest {
  /**
   * @schema AlexaForBusinessSearchSkillGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchSkillGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchSkillGroupsRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchSkillGroupsRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * @schema AlexaForBusinessSearchSkillGroupsResponse
 */
export interface AlexaForBusinessSearchSkillGroupsResponse {
  /**
   * @schema AlexaForBusinessSearchSkillGroupsResponse#SkillGroups
   */
  readonly skillGroups?: AlexaForBusinessSkillGroupData[];

  /**
   * @schema AlexaForBusinessSearchSkillGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchSkillGroupsResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema AlexaForBusinessSearchUsersRequest
 */
export interface AlexaForBusinessSearchUsersRequest {
  /**
   * @schema AlexaForBusinessSearchUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchUsersRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchUsersRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * @schema AlexaForBusinessSearchUsersResponse
 */
export interface AlexaForBusinessSearchUsersResponse {
  /**
   * @schema AlexaForBusinessSearchUsersResponse#Users
   */
  readonly users?: AlexaForBusinessUserData[];

  /**
   * @schema AlexaForBusinessSearchUsersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchUsersResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema AlexaForBusinessSendAnnouncementRequest
 */
export interface AlexaForBusinessSendAnnouncementRequest {
  /**
   * @schema AlexaForBusinessSendAnnouncementRequest#RoomFilters
   */
  readonly roomFilters: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSendAnnouncementRequest#Content
   */
  readonly content: AlexaForBusinessContent;

  /**
   * @schema AlexaForBusinessSendAnnouncementRequest#TimeToLiveInSeconds
   */
  readonly timeToLiveInSeconds?: number;

  /**
   * @schema AlexaForBusinessSendAnnouncementRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema AlexaForBusinessSendAnnouncementResponse
 */
export interface AlexaForBusinessSendAnnouncementResponse {
  /**
   * @schema AlexaForBusinessSendAnnouncementResponse#AnnouncementArn
   */
  readonly announcementArn?: string;

}

/**
 * @schema AlexaForBusinessSendInvitationRequest
 */
export interface AlexaForBusinessSendInvitationRequest {
  /**
   * @schema AlexaForBusinessSendInvitationRequest#UserArn
   */
  readonly userArn?: string;

}

/**
 * @schema AlexaForBusinessSendInvitationResponse
 */
export interface AlexaForBusinessSendInvitationResponse {
}

/**
 * @schema AlexaForBusinessStartDeviceSyncRequest
 */
export interface AlexaForBusinessStartDeviceSyncRequest {
  /**
   * @schema AlexaForBusinessStartDeviceSyncRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessStartDeviceSyncRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessStartDeviceSyncRequest#Features
   */
  readonly features: string[];

}

/**
 * @schema AlexaForBusinessStartDeviceSyncResponse
 */
export interface AlexaForBusinessStartDeviceSyncResponse {
}

/**
 * @schema AlexaForBusinessStartSmartHomeApplianceDiscoveryRequest
 */
export interface AlexaForBusinessStartSmartHomeApplianceDiscoveryRequest {
  /**
   * @schema AlexaForBusinessStartSmartHomeApplianceDiscoveryRequest#RoomArn
   */
  readonly roomArn: string;

}

/**
 * @schema AlexaForBusinessStartSmartHomeApplianceDiscoveryResponse
 */
export interface AlexaForBusinessStartSmartHomeApplianceDiscoveryResponse {
}

/**
 * @schema AlexaForBusinessTagResourceRequest
 */
export interface AlexaForBusinessTagResourceRequest {
  /**
   * @schema AlexaForBusinessTagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema AlexaForBusinessTagResourceRequest#Tags
   */
  readonly tags: AlexaForBusinessTag[];

}

/**
 * @schema AlexaForBusinessTagResourceResponse
 */
export interface AlexaForBusinessTagResourceResponse {
}

/**
 * @schema AlexaForBusinessUntagResourceRequest
 */
export interface AlexaForBusinessUntagResourceRequest {
  /**
   * @schema AlexaForBusinessUntagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema AlexaForBusinessUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema AlexaForBusinessUntagResourceResponse
 */
export interface AlexaForBusinessUntagResourceResponse {
}

/**
 * @schema AlexaForBusinessUpdateAddressBookRequest
 */
export interface AlexaForBusinessUpdateAddressBookRequest {
  /**
   * @schema AlexaForBusinessUpdateAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn: string;

  /**
   * @schema AlexaForBusinessUpdateAddressBookRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessUpdateAddressBookRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema AlexaForBusinessUpdateAddressBookResponse
 */
export interface AlexaForBusinessUpdateAddressBookResponse {
}

/**
 * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest
 */
export interface AlexaForBusinessUpdateBusinessReportScheduleRequest {
  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#ScheduleArn
   */
  readonly scheduleArn: string;

  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#Format
   */
  readonly format?: string;

  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#ScheduleName
   */
  readonly scheduleName?: string;

  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#Recurrence
   */
  readonly recurrence?: AlexaForBusinessBusinessReportRecurrence;

}

/**
 * @schema AlexaForBusinessUpdateBusinessReportScheduleResponse
 */
export interface AlexaForBusinessUpdateBusinessReportScheduleResponse {
}

/**
 * @schema AlexaForBusinessUpdateConferenceProviderRequest
 */
export interface AlexaForBusinessUpdateConferenceProviderRequest {
  /**
   * @schema AlexaForBusinessUpdateConferenceProviderRequest#ConferenceProviderArn
   */
  readonly conferenceProviderArn: string;

  /**
   * @schema AlexaForBusinessUpdateConferenceProviderRequest#ConferenceProviderType
   */
  readonly conferenceProviderType: string;

  /**
   * @schema AlexaForBusinessUpdateConferenceProviderRequest#IPDialIn
   */
  readonly ipDialIn?: AlexaForBusinessIpDialIn;

  /**
   * @schema AlexaForBusinessUpdateConferenceProviderRequest#PSTNDialIn
   */
  readonly pstnDialIn?: AlexaForBusinessPstnDialIn;

  /**
   * @schema AlexaForBusinessUpdateConferenceProviderRequest#MeetingSetting
   */
  readonly meetingSetting: AlexaForBusinessMeetingSetting;

}

/**
 * @schema AlexaForBusinessUpdateConferenceProviderResponse
 */
export interface AlexaForBusinessUpdateConferenceProviderResponse {
}

/**
 * @schema AlexaForBusinessUpdateContactRequest
 */
export interface AlexaForBusinessUpdateContactRequest {
  /**
   * @schema AlexaForBusinessUpdateContactRequest#ContactArn
   */
  readonly contactArn: string;

  /**
   * @schema AlexaForBusinessUpdateContactRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AlexaForBusinessUpdateContactRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessUpdateContactRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessUpdateContactRequest#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema AlexaForBusinessUpdateContactRequest#PhoneNumbers
   */
  readonly phoneNumbers?: AlexaForBusinessPhoneNumber[];

  /**
   * @schema AlexaForBusinessUpdateContactRequest#SipAddresses
   */
  readonly sipAddresses?: AlexaForBusinessSipAddress[];

}

/**
 * @schema AlexaForBusinessUpdateContactResponse
 */
export interface AlexaForBusinessUpdateContactResponse {
}

/**
 * @schema AlexaForBusinessUpdateDeviceRequest
 */
export interface AlexaForBusinessUpdateDeviceRequest {
  /**
   * @schema AlexaForBusinessUpdateDeviceRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessUpdateDeviceRequest#DeviceName
   */
  readonly deviceName?: string;

}

/**
 * @schema AlexaForBusinessUpdateDeviceResponse
 */
export interface AlexaForBusinessUpdateDeviceResponse {
}

/**
 * @schema AlexaForBusinessUpdateGatewayRequest
 */
export interface AlexaForBusinessUpdateGatewayRequest {
  /**
   * @schema AlexaForBusinessUpdateGatewayRequest#GatewayArn
   */
  readonly gatewayArn: string;

  /**
   * @schema AlexaForBusinessUpdateGatewayRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessUpdateGatewayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessUpdateGatewayRequest#SoftwareVersion
   */
  readonly softwareVersion?: string;

}

/**
 * @schema AlexaForBusinessUpdateGatewayResponse
 */
export interface AlexaForBusinessUpdateGatewayResponse {
}

/**
 * @schema AlexaForBusinessUpdateGatewayGroupRequest
 */
export interface AlexaForBusinessUpdateGatewayGroupRequest {
  /**
   * @schema AlexaForBusinessUpdateGatewayGroupRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn: string;

  /**
   * @schema AlexaForBusinessUpdateGatewayGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessUpdateGatewayGroupRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema AlexaForBusinessUpdateGatewayGroupResponse
 */
export interface AlexaForBusinessUpdateGatewayGroupResponse {
}

/**
 * @schema AlexaForBusinessUpdateNetworkProfileRequest
 */
export interface AlexaForBusinessUpdateNetworkProfileRequest {
  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#CurrentPassword
   */
  readonly currentPassword?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#NextPassword
   */
  readonly nextPassword?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#TrustAnchors
   */
  readonly trustAnchors?: string[];

}

/**
 * @schema AlexaForBusinessUpdateNetworkProfileResponse
 */
export interface AlexaForBusinessUpdateNetworkProfileResponse {
}

/**
 * @schema AlexaForBusinessUpdateProfileRequest
 */
export interface AlexaForBusinessUpdateProfileRequest {
  /**
   * @schema AlexaForBusinessUpdateProfileRequest#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#ProfileName
   */
  readonly profileName?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#Address
   */
  readonly address?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#TemperatureUnit
   */
  readonly temperatureUnit?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#WakeWord
   */
  readonly wakeWord?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#Locale
   */
  readonly locale?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#SetupModeDisabled
   */
  readonly setupModeDisabled?: boolean;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#MaxVolumeLimit
   */
  readonly maxVolumeLimit?: number;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#PSTNEnabled
   */
  readonly pstnEnabled?: boolean;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#MeetingRoomConfiguration
   */
  readonly meetingRoomConfiguration?: AlexaForBusinessUpdateMeetingRoomConfiguration;

}

/**
 * @schema AlexaForBusinessUpdateProfileResponse
 */
export interface AlexaForBusinessUpdateProfileResponse {
}

/**
 * @schema AlexaForBusinessUpdateRoomRequest
 */
export interface AlexaForBusinessUpdateRoomRequest {
  /**
   * @schema AlexaForBusinessUpdateRoomRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessUpdateRoomRequest#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessUpdateRoomRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessUpdateRoomRequest#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema AlexaForBusinessUpdateRoomRequest#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * @schema AlexaForBusinessUpdateRoomResponse
 */
export interface AlexaForBusinessUpdateRoomResponse {
}

/**
 * @schema AlexaForBusinessUpdateSkillGroupRequest
 */
export interface AlexaForBusinessUpdateSkillGroupRequest {
  /**
   * @schema AlexaForBusinessUpdateSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessUpdateSkillGroupRequest#SkillGroupName
   */
  readonly skillGroupName?: string;

  /**
   * @schema AlexaForBusinessUpdateSkillGroupRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema AlexaForBusinessUpdateSkillGroupResponse
 */
export interface AlexaForBusinessUpdateSkillGroupResponse {
}

/**
 * @schema AlexaForBusinessBusinessReportContentRange
 */
export interface AlexaForBusinessBusinessReportContentRange {
  /**
   * @schema AlexaForBusinessBusinessReportContentRange#Interval
   */
  readonly interval: string;

}

/**
 * @schema AlexaForBusinessBusinessReportRecurrence
 */
export interface AlexaForBusinessBusinessReportRecurrence {
  /**
   * @schema AlexaForBusinessBusinessReportRecurrence#StartDate
   */
  readonly startDate?: string;

}

/**
 * @schema AlexaForBusinessTag
 */
export interface AlexaForBusinessTag {
  /**
   * @schema AlexaForBusinessTag#Key
   */
  readonly key: string;

  /**
   * @schema AlexaForBusinessTag#Value
   */
  readonly value: string;

}

/**
 * @schema AlexaForBusinessIpDialIn
 */
export interface AlexaForBusinessIpDialIn {
  /**
   * @schema AlexaForBusinessIpDialIn#Endpoint
   */
  readonly endpoint: string;

  /**
   * @schema AlexaForBusinessIpDialIn#CommsProtocol
   */
  readonly commsProtocol: string;

}

/**
 * @schema AlexaForBusinessPstnDialIn
 */
export interface AlexaForBusinessPstnDialIn {
  /**
   * @schema AlexaForBusinessPstnDialIn#CountryCode
   */
  readonly countryCode: string;

  /**
   * @schema AlexaForBusinessPstnDialIn#PhoneNumber
   */
  readonly phoneNumber: string;

  /**
   * @schema AlexaForBusinessPstnDialIn#OneClickIdDelay
   */
  readonly oneClickIdDelay: string;

  /**
   * @schema AlexaForBusinessPstnDialIn#OneClickPinDelay
   */
  readonly oneClickPinDelay: string;

}

/**
 * @schema AlexaForBusinessMeetingSetting
 */
export interface AlexaForBusinessMeetingSetting {
  /**
   * @schema AlexaForBusinessMeetingSetting#RequirePin
   */
  readonly requirePin: string;

}

/**
 * @schema AlexaForBusinessPhoneNumber
 */
export interface AlexaForBusinessPhoneNumber {
  /**
   * @schema AlexaForBusinessPhoneNumber#Number
   */
  readonly number: string;

  /**
   * @schema AlexaForBusinessPhoneNumber#Type
   */
  readonly type: string;

}

/**
 * @schema AlexaForBusinessSipAddress
 */
export interface AlexaForBusinessSipAddress {
  /**
   * @schema AlexaForBusinessSipAddress#Uri
   */
  readonly uri: string;

  /**
   * @schema AlexaForBusinessSipAddress#Type
   */
  readonly type: string;

}

/**
 * @schema AlexaForBusinessCreateMeetingRoomConfiguration
 */
export interface AlexaForBusinessCreateMeetingRoomConfiguration {
  /**
   * @schema AlexaForBusinessCreateMeetingRoomConfiguration#RoomUtilizationMetricsEnabled
   */
  readonly roomUtilizationMetricsEnabled?: boolean;

  /**
   * @schema AlexaForBusinessCreateMeetingRoomConfiguration#EndOfMeetingReminder
   */
  readonly endOfMeetingReminder?: AlexaForBusinessCreateEndOfMeetingReminder;

  /**
   * @schema AlexaForBusinessCreateMeetingRoomConfiguration#InstantBooking
   */
  readonly instantBooking?: AlexaForBusinessCreateInstantBooking;

  /**
   * @schema AlexaForBusinessCreateMeetingRoomConfiguration#RequireCheckIn
   */
  readonly requireCheckIn?: AlexaForBusinessCreateRequireCheckIn;

}

/**
 * @schema AlexaForBusinessAddressBook
 */
export interface AlexaForBusinessAddressBook {
  /**
   * @schema AlexaForBusinessAddressBook#AddressBookArn
   */
  readonly addressBookArn?: string;

  /**
   * @schema AlexaForBusinessAddressBook#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessAddressBook#Description
   */
  readonly description?: string;

}

/**
 * @schema AlexaForBusinessConferencePreference
 */
export interface AlexaForBusinessConferencePreference {
  /**
   * @schema AlexaForBusinessConferencePreference#DefaultConferenceProviderArn
   */
  readonly defaultConferenceProviderArn?: string;

}

/**
 * @schema AlexaForBusinessConferenceProvider
 */
export interface AlexaForBusinessConferenceProvider {
  /**
   * @schema AlexaForBusinessConferenceProvider#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessConferenceProvider#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessConferenceProvider#Type
   */
  readonly type?: string;

  /**
   * @schema AlexaForBusinessConferenceProvider#IPDialIn
   */
  readonly ipDialIn?: AlexaForBusinessIpDialIn;

  /**
   * @schema AlexaForBusinessConferenceProvider#PSTNDialIn
   */
  readonly pstnDialIn?: AlexaForBusinessPstnDialIn;

  /**
   * @schema AlexaForBusinessConferenceProvider#MeetingSetting
   */
  readonly meetingSetting?: AlexaForBusinessMeetingSetting;

}

/**
 * @schema AlexaForBusinessContact
 */
export interface AlexaForBusinessContact {
  /**
   * @schema AlexaForBusinessContact#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema AlexaForBusinessContact#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AlexaForBusinessContact#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessContact#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessContact#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema AlexaForBusinessContact#PhoneNumbers
   */
  readonly phoneNumbers?: AlexaForBusinessPhoneNumber[];

  /**
   * @schema AlexaForBusinessContact#SipAddresses
   */
  readonly sipAddresses?: AlexaForBusinessSipAddress[];

}

/**
 * @schema AlexaForBusinessDevice
 */
export interface AlexaForBusinessDevice {
  /**
   * @schema AlexaForBusinessDevice#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessDevice#DeviceSerialNumber
   */
  readonly deviceSerialNumber?: string;

  /**
   * @schema AlexaForBusinessDevice#DeviceType
   */
  readonly deviceType?: string;

  /**
   * @schema AlexaForBusinessDevice#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema AlexaForBusinessDevice#SoftwareVersion
   */
  readonly softwareVersion?: string;

  /**
   * @schema AlexaForBusinessDevice#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema AlexaForBusinessDevice#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessDevice#DeviceStatus
   */
  readonly deviceStatus?: string;

  /**
   * @schema AlexaForBusinessDevice#DeviceStatusInfo
   */
  readonly deviceStatusInfo?: AlexaForBusinessDeviceStatusInfo;

  /**
   * @schema AlexaForBusinessDevice#NetworkProfileInfo
   */
  readonly networkProfileInfo?: AlexaForBusinessDeviceNetworkProfileInfo;

}

/**
 * @schema AlexaForBusinessGateway
 */
export interface AlexaForBusinessGateway {
  /**
   * @schema AlexaForBusinessGateway#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessGateway#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessGateway#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessGateway#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

  /**
   * @schema AlexaForBusinessGateway#SoftwareVersion
   */
  readonly softwareVersion?: string;

}

/**
 * @schema AlexaForBusinessGatewayGroup
 */
export interface AlexaForBusinessGatewayGroup {
  /**
   * @schema AlexaForBusinessGatewayGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessGatewayGroup#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessGatewayGroup#Description
   */
  readonly description?: string;

}

/**
 * @schema AlexaForBusinessNetworkProfile
 */
export interface AlexaForBusinessNetworkProfile {
  /**
   * @schema AlexaForBusinessNetworkProfile#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#Ssid
   */
  readonly ssid?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#SecurityType
   */
  readonly securityType?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#EapMethod
   */
  readonly eapMethod?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#CurrentPassword
   */
  readonly currentPassword?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#NextPassword
   */
  readonly nextPassword?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#TrustAnchors
   */
  readonly trustAnchors?: string[];

}

/**
 * @schema AlexaForBusinessProfile
 */
export interface AlexaForBusinessProfile {
  /**
   * @schema AlexaForBusinessProfile#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema AlexaForBusinessProfile#ProfileName
   */
  readonly profileName?: string;

  /**
   * @schema AlexaForBusinessProfile#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema AlexaForBusinessProfile#Address
   */
  readonly address?: string;

  /**
   * @schema AlexaForBusinessProfile#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema AlexaForBusinessProfile#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema AlexaForBusinessProfile#TemperatureUnit
   */
  readonly temperatureUnit?: string;

  /**
   * @schema AlexaForBusinessProfile#WakeWord
   */
  readonly wakeWord?: string;

  /**
   * @schema AlexaForBusinessProfile#Locale
   */
  readonly locale?: string;

  /**
   * @schema AlexaForBusinessProfile#SetupModeDisabled
   */
  readonly setupModeDisabled?: boolean;

  /**
   * @schema AlexaForBusinessProfile#MaxVolumeLimit
   */
  readonly maxVolumeLimit?: number;

  /**
   * @schema AlexaForBusinessProfile#PSTNEnabled
   */
  readonly pstnEnabled?: boolean;

  /**
   * @schema AlexaForBusinessProfile#AddressBookArn
   */
  readonly addressBookArn?: string;

  /**
   * @schema AlexaForBusinessProfile#MeetingRoomConfiguration
   */
  readonly meetingRoomConfiguration?: AlexaForBusinessMeetingRoomConfiguration;

}

/**
 * @schema AlexaForBusinessRoom
 */
export interface AlexaForBusinessRoom {
  /**
   * @schema AlexaForBusinessRoom#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessRoom#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessRoom#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessRoom#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema AlexaForBusinessRoom#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * @schema AlexaForBusinessRoomSkillParameter
 */
export interface AlexaForBusinessRoomSkillParameter {
  /**
   * @schema AlexaForBusinessRoomSkillParameter#ParameterKey
   */
  readonly parameterKey: string;

  /**
   * @schema AlexaForBusinessRoomSkillParameter#ParameterValue
   */
  readonly parameterValue: string;

}

/**
 * @schema AlexaForBusinessSkillGroup
 */
export interface AlexaForBusinessSkillGroup {
  /**
   * @schema AlexaForBusinessSkillGroup#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessSkillGroup#SkillGroupName
   */
  readonly skillGroupName?: string;

  /**
   * @schema AlexaForBusinessSkillGroup#Description
   */
  readonly description?: string;

}

/**
 * @schema AlexaForBusinessBusinessReportSchedule
 */
export interface AlexaForBusinessBusinessReportSchedule {
  /**
   * @schema AlexaForBusinessBusinessReportSchedule#ScheduleArn
   */
  readonly scheduleArn?: string;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#ScheduleName
   */
  readonly scheduleName?: string;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#Format
   */
  readonly format?: string;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#ContentRange
   */
  readonly contentRange?: AlexaForBusinessBusinessReportContentRange;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#Recurrence
   */
  readonly recurrence?: AlexaForBusinessBusinessReportRecurrence;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#LastBusinessReport
   */
  readonly lastBusinessReport?: AlexaForBusinessBusinessReport;

}

/**
 * @schema AlexaForBusinessDeviceEvent
 */
export interface AlexaForBusinessDeviceEvent {
  /**
   * @schema AlexaForBusinessDeviceEvent#Type
   */
  readonly type?: string;

  /**
   * @schema AlexaForBusinessDeviceEvent#Value
   */
  readonly value?: string;

  /**
   * @schema AlexaForBusinessDeviceEvent#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema AlexaForBusinessGatewayGroupSummary
 */
export interface AlexaForBusinessGatewayGroupSummary {
  /**
   * @schema AlexaForBusinessGatewayGroupSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessGatewayGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessGatewayGroupSummary#Description
   */
  readonly description?: string;

}

/**
 * @schema AlexaForBusinessGatewaySummary
 */
export interface AlexaForBusinessGatewaySummary {
  /**
   * @schema AlexaForBusinessGatewaySummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessGatewaySummary#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessGatewaySummary#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessGatewaySummary#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

  /**
   * @schema AlexaForBusinessGatewaySummary#SoftwareVersion
   */
  readonly softwareVersion?: string;

}

/**
 * @schema AlexaForBusinessSkillSummary
 */
export interface AlexaForBusinessSkillSummary {
  /**
   * @schema AlexaForBusinessSkillSummary#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema AlexaForBusinessSkillSummary#SkillName
   */
  readonly skillName?: string;

  /**
   * @schema AlexaForBusinessSkillSummary#SupportsLinking
   */
  readonly supportsLinking?: boolean;

  /**
   * @schema AlexaForBusinessSkillSummary#EnablementType
   */
  readonly enablementType?: string;

  /**
   * @schema AlexaForBusinessSkillSummary#SkillType
   */
  readonly skillType?: string;

}

/**
 * @schema AlexaForBusinessCategory
 */
export interface AlexaForBusinessCategory {
  /**
   * @schema AlexaForBusinessCategory#CategoryId
   */
  readonly categoryId?: number;

  /**
   * @schema AlexaForBusinessCategory#CategoryName
   */
  readonly categoryName?: string;

}

/**
 * @schema AlexaForBusinessSkillsStoreSkill
 */
export interface AlexaForBusinessSkillsStoreSkill {
  /**
   * @schema AlexaForBusinessSkillsStoreSkill#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#SkillName
   */
  readonly skillName?: string;

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#ShortDescription
   */
  readonly shortDescription?: string;

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#IconUrl
   */
  readonly iconUrl?: string;

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#SampleUtterances
   */
  readonly sampleUtterances?: string[];

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#SkillDetails
   */
  readonly skillDetails?: AlexaForBusinessSkillDetails;

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#SupportsLinking
   */
  readonly supportsLinking?: boolean;

}

/**
 * @schema AlexaForBusinessSmartHomeAppliance
 */
export interface AlexaForBusinessSmartHomeAppliance {
  /**
   * @schema AlexaForBusinessSmartHomeAppliance#FriendlyName
   */
  readonly friendlyName?: string;

  /**
   * @schema AlexaForBusinessSmartHomeAppliance#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessSmartHomeAppliance#ManufacturerName
   */
  readonly manufacturerName?: string;

}

/**
 * @schema AlexaForBusinessFilter
 */
export interface AlexaForBusinessFilter {
  /**
   * @schema AlexaForBusinessFilter#Key
   */
  readonly key: string;

  /**
   * @schema AlexaForBusinessFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema AlexaForBusinessSort
 */
export interface AlexaForBusinessSort {
  /**
   * @schema AlexaForBusinessSort#Key
   */
  readonly key: string;

  /**
   * @schema AlexaForBusinessSort#Value
   */
  readonly value: string;

}

/**
 * @schema AlexaForBusinessAddressBookData
 */
export interface AlexaForBusinessAddressBookData {
  /**
   * @schema AlexaForBusinessAddressBookData#AddressBookArn
   */
  readonly addressBookArn?: string;

  /**
   * @schema AlexaForBusinessAddressBookData#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessAddressBookData#Description
   */
  readonly description?: string;

}

/**
 * @schema AlexaForBusinessContactData
 */
export interface AlexaForBusinessContactData {
  /**
   * @schema AlexaForBusinessContactData#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema AlexaForBusinessContactData#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AlexaForBusinessContactData#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessContactData#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessContactData#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema AlexaForBusinessContactData#PhoneNumbers
   */
  readonly phoneNumbers?: AlexaForBusinessPhoneNumber[];

  /**
   * @schema AlexaForBusinessContactData#SipAddresses
   */
  readonly sipAddresses?: AlexaForBusinessSipAddress[];

}

/**
 * @schema AlexaForBusinessDeviceData
 */
export interface AlexaForBusinessDeviceData {
  /**
   * @schema AlexaForBusinessDeviceData#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessDeviceData#DeviceSerialNumber
   */
  readonly deviceSerialNumber?: string;

  /**
   * @schema AlexaForBusinessDeviceData#DeviceType
   */
  readonly deviceType?: string;

  /**
   * @schema AlexaForBusinessDeviceData#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema AlexaForBusinessDeviceData#SoftwareVersion
   */
  readonly softwareVersion?: string;

  /**
   * @schema AlexaForBusinessDeviceData#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema AlexaForBusinessDeviceData#DeviceStatus
   */
  readonly deviceStatus?: string;

  /**
   * @schema AlexaForBusinessDeviceData#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema AlexaForBusinessDeviceData#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema AlexaForBusinessDeviceData#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessDeviceData#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessDeviceData#DeviceStatusInfo
   */
  readonly deviceStatusInfo?: AlexaForBusinessDeviceStatusInfo;

  /**
   * @schema AlexaForBusinessDeviceData#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema AlexaForBusinessNetworkProfileData
 */
export interface AlexaForBusinessNetworkProfileData {
  /**
   * @schema AlexaForBusinessNetworkProfileData#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#Ssid
   */
  readonly ssid?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#SecurityType
   */
  readonly securityType?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#EapMethod
   */
  readonly eapMethod?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

}

/**
 * @schema AlexaForBusinessProfileData
 */
export interface AlexaForBusinessProfileData {
  /**
   * @schema AlexaForBusinessProfileData#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema AlexaForBusinessProfileData#ProfileName
   */
  readonly profileName?: string;

  /**
   * @schema AlexaForBusinessProfileData#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema AlexaForBusinessProfileData#Address
   */
  readonly address?: string;

  /**
   * @schema AlexaForBusinessProfileData#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema AlexaForBusinessProfileData#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema AlexaForBusinessProfileData#TemperatureUnit
   */
  readonly temperatureUnit?: string;

  /**
   * @schema AlexaForBusinessProfileData#WakeWord
   */
  readonly wakeWord?: string;

  /**
   * @schema AlexaForBusinessProfileData#Locale
   */
  readonly locale?: string;

}

/**
 * @schema AlexaForBusinessRoomData
 */
export interface AlexaForBusinessRoomData {
  /**
   * @schema AlexaForBusinessRoomData#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessRoomData#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessRoomData#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessRoomData#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema AlexaForBusinessRoomData#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema AlexaForBusinessRoomData#ProfileName
   */
  readonly profileName?: string;

}

/**
 * @schema AlexaForBusinessSkillGroupData
 */
export interface AlexaForBusinessSkillGroupData {
  /**
   * @schema AlexaForBusinessSkillGroupData#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessSkillGroupData#SkillGroupName
   */
  readonly skillGroupName?: string;

  /**
   * @schema AlexaForBusinessSkillGroupData#Description
   */
  readonly description?: string;

}

/**
 * @schema AlexaForBusinessUserData
 */
export interface AlexaForBusinessUserData {
  /**
   * @schema AlexaForBusinessUserData#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema AlexaForBusinessUserData#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessUserData#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessUserData#Email
   */
  readonly email?: string;

  /**
   * @schema AlexaForBusinessUserData#EnrollmentStatus
   */
  readonly enrollmentStatus?: string;

  /**
   * @schema AlexaForBusinessUserData#EnrollmentId
   */
  readonly enrollmentId?: string;

}

/**
 * @schema AlexaForBusinessContent
 */
export interface AlexaForBusinessContent {
  /**
   * @schema AlexaForBusinessContent#TextList
   */
  readonly textList?: AlexaForBusinessText[];

  /**
   * @schema AlexaForBusinessContent#SsmlList
   */
  readonly ssmlList?: AlexaForBusinessSsml[];

  /**
   * @schema AlexaForBusinessContent#AudioList
   */
  readonly audioList?: AlexaForBusinessAudio[];

}

/**
 * @schema AlexaForBusinessUpdateMeetingRoomConfiguration
 */
export interface AlexaForBusinessUpdateMeetingRoomConfiguration {
  /**
   * @schema AlexaForBusinessUpdateMeetingRoomConfiguration#RoomUtilizationMetricsEnabled
   */
  readonly roomUtilizationMetricsEnabled?: boolean;

  /**
   * @schema AlexaForBusinessUpdateMeetingRoomConfiguration#EndOfMeetingReminder
   */
  readonly endOfMeetingReminder?: AlexaForBusinessUpdateEndOfMeetingReminder;

  /**
   * @schema AlexaForBusinessUpdateMeetingRoomConfiguration#InstantBooking
   */
  readonly instantBooking?: AlexaForBusinessUpdateInstantBooking;

  /**
   * @schema AlexaForBusinessUpdateMeetingRoomConfiguration#RequireCheckIn
   */
  readonly requireCheckIn?: AlexaForBusinessUpdateRequireCheckIn;

}

/**
 * @schema AlexaForBusinessCreateEndOfMeetingReminder
 */
export interface AlexaForBusinessCreateEndOfMeetingReminder {
  /**
   * @schema AlexaForBusinessCreateEndOfMeetingReminder#ReminderAtMinutes
   */
  readonly reminderAtMinutes: number[];

  /**
   * @schema AlexaForBusinessCreateEndOfMeetingReminder#ReminderType
   */
  readonly reminderType: string;

  /**
   * @schema AlexaForBusinessCreateEndOfMeetingReminder#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema AlexaForBusinessCreateInstantBooking
 */
export interface AlexaForBusinessCreateInstantBooking {
  /**
   * @schema AlexaForBusinessCreateInstantBooking#DurationInMinutes
   */
  readonly durationInMinutes: number;

  /**
   * @schema AlexaForBusinessCreateInstantBooking#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema AlexaForBusinessCreateRequireCheckIn
 */
export interface AlexaForBusinessCreateRequireCheckIn {
  /**
   * @schema AlexaForBusinessCreateRequireCheckIn#ReleaseAfterMinutes
   */
  readonly releaseAfterMinutes: number;

  /**
   * @schema AlexaForBusinessCreateRequireCheckIn#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema AlexaForBusinessDeviceStatusInfo
 */
export interface AlexaForBusinessDeviceStatusInfo {
  /**
   * @schema AlexaForBusinessDeviceStatusInfo#DeviceStatusDetails
   */
  readonly deviceStatusDetails?: AlexaForBusinessDeviceStatusDetail[];

  /**
   * @schema AlexaForBusinessDeviceStatusInfo#ConnectionStatus
   */
  readonly connectionStatus?: string;

  /**
   * @schema AlexaForBusinessDeviceStatusInfo#ConnectionStatusUpdatedTime
   */
  readonly connectionStatusUpdatedTime?: string;

}

/**
 * @schema AlexaForBusinessDeviceNetworkProfileInfo
 */
export interface AlexaForBusinessDeviceNetworkProfileInfo {
  /**
   * @schema AlexaForBusinessDeviceNetworkProfileInfo#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema AlexaForBusinessDeviceNetworkProfileInfo#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AlexaForBusinessDeviceNetworkProfileInfo#CertificateExpirationTime
   */
  readonly certificateExpirationTime?: string;

}

/**
 * @schema AlexaForBusinessMeetingRoomConfiguration
 */
export interface AlexaForBusinessMeetingRoomConfiguration {
  /**
   * @schema AlexaForBusinessMeetingRoomConfiguration#RoomUtilizationMetricsEnabled
   */
  readonly roomUtilizationMetricsEnabled?: boolean;

  /**
   * @schema AlexaForBusinessMeetingRoomConfiguration#EndOfMeetingReminder
   */
  readonly endOfMeetingReminder?: AlexaForBusinessEndOfMeetingReminder;

  /**
   * @schema AlexaForBusinessMeetingRoomConfiguration#InstantBooking
   */
  readonly instantBooking?: AlexaForBusinessInstantBooking;

  /**
   * @schema AlexaForBusinessMeetingRoomConfiguration#RequireCheckIn
   */
  readonly requireCheckIn?: AlexaForBusinessRequireCheckIn;

}

/**
 * @schema AlexaForBusinessBusinessReport
 */
export interface AlexaForBusinessBusinessReport {
  /**
   * @schema AlexaForBusinessBusinessReport#Status
   */
  readonly status?: string;

  /**
   * @schema AlexaForBusinessBusinessReport#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema AlexaForBusinessBusinessReport#S3Location
   */
  readonly s3Location?: AlexaForBusinessBusinessReportS3Location;

  /**
   * @schema AlexaForBusinessBusinessReport#DeliveryTime
   */
  readonly deliveryTime?: string;

  /**
   * @schema AlexaForBusinessBusinessReport#DownloadUrl
   */
  readonly downloadUrl?: string;

}

/**
 * @schema AlexaForBusinessSkillDetails
 */
export interface AlexaForBusinessSkillDetails {
  /**
   * @schema AlexaForBusinessSkillDetails#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema AlexaForBusinessSkillDetails#InvocationPhrase
   */
  readonly invocationPhrase?: string;

  /**
   * @schema AlexaForBusinessSkillDetails#ReleaseDate
   */
  readonly releaseDate?: string;

  /**
   * @schema AlexaForBusinessSkillDetails#EndUserLicenseAgreement
   */
  readonly endUserLicenseAgreement?: string;

  /**
   * @schema AlexaForBusinessSkillDetails#GenericKeywords
   */
  readonly genericKeywords?: string[];

  /**
   * @schema AlexaForBusinessSkillDetails#BulletPoints
   */
  readonly bulletPoints?: string[];

  /**
   * @schema AlexaForBusinessSkillDetails#NewInThisVersionBulletPoints
   */
  readonly newInThisVersionBulletPoints?: string[];

  /**
   * @schema AlexaForBusinessSkillDetails#SkillTypes
   */
  readonly skillTypes?: string[];

  /**
   * @schema AlexaForBusinessSkillDetails#Reviews
   */
  readonly reviews?: { [key: string]: string };

  /**
   * @schema AlexaForBusinessSkillDetails#DeveloperInfo
   */
  readonly developerInfo?: AlexaForBusinessDeveloperInfo;

}

/**
 * @schema AlexaForBusinessText
 */
export interface AlexaForBusinessText {
  /**
   * @schema AlexaForBusinessText#Locale
   */
  readonly locale: string;

  /**
   * @schema AlexaForBusinessText#Value
   */
  readonly value: string;

}

/**
 * @schema AlexaForBusinessSsml
 */
export interface AlexaForBusinessSsml {
  /**
   * @schema AlexaForBusinessSsml#Locale
   */
  readonly locale: string;

  /**
   * @schema AlexaForBusinessSsml#Value
   */
  readonly value: string;

}

/**
 * @schema AlexaForBusinessAudio
 */
export interface AlexaForBusinessAudio {
  /**
   * @schema AlexaForBusinessAudio#Locale
   */
  readonly locale: string;

  /**
   * @schema AlexaForBusinessAudio#Location
   */
  readonly location: string;

}

/**
 * @schema AlexaForBusinessUpdateEndOfMeetingReminder
 */
export interface AlexaForBusinessUpdateEndOfMeetingReminder {
  /**
   * @schema AlexaForBusinessUpdateEndOfMeetingReminder#ReminderAtMinutes
   */
  readonly reminderAtMinutes?: number[];

  /**
   * @schema AlexaForBusinessUpdateEndOfMeetingReminder#ReminderType
   */
  readonly reminderType?: string;

  /**
   * @schema AlexaForBusinessUpdateEndOfMeetingReminder#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AlexaForBusinessUpdateInstantBooking
 */
export interface AlexaForBusinessUpdateInstantBooking {
  /**
   * @schema AlexaForBusinessUpdateInstantBooking#DurationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema AlexaForBusinessUpdateInstantBooking#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AlexaForBusinessUpdateRequireCheckIn
 */
export interface AlexaForBusinessUpdateRequireCheckIn {
  /**
   * @schema AlexaForBusinessUpdateRequireCheckIn#ReleaseAfterMinutes
   */
  readonly releaseAfterMinutes?: number;

  /**
   * @schema AlexaForBusinessUpdateRequireCheckIn#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AlexaForBusinessDeviceStatusDetail
 */
export interface AlexaForBusinessDeviceStatusDetail {
  /**
   * @schema AlexaForBusinessDeviceStatusDetail#Feature
   */
  readonly feature?: string;

  /**
   * @schema AlexaForBusinessDeviceStatusDetail#Code
   */
  readonly code?: string;

}

/**
 * @schema AlexaForBusinessEndOfMeetingReminder
 */
export interface AlexaForBusinessEndOfMeetingReminder {
  /**
   * @schema AlexaForBusinessEndOfMeetingReminder#ReminderAtMinutes
   */
  readonly reminderAtMinutes?: number[];

  /**
   * @schema AlexaForBusinessEndOfMeetingReminder#ReminderType
   */
  readonly reminderType?: string;

  /**
   * @schema AlexaForBusinessEndOfMeetingReminder#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AlexaForBusinessInstantBooking
 */
export interface AlexaForBusinessInstantBooking {
  /**
   * @schema AlexaForBusinessInstantBooking#DurationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema AlexaForBusinessInstantBooking#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AlexaForBusinessRequireCheckIn
 */
export interface AlexaForBusinessRequireCheckIn {
  /**
   * @schema AlexaForBusinessRequireCheckIn#ReleaseAfterMinutes
   */
  readonly releaseAfterMinutes?: number;

  /**
   * @schema AlexaForBusinessRequireCheckIn#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AlexaForBusinessBusinessReportS3Location
 */
export interface AlexaForBusinessBusinessReportS3Location {
  /**
   * @schema AlexaForBusinessBusinessReportS3Location#Path
   */
  readonly path?: string;

  /**
   * @schema AlexaForBusinessBusinessReportS3Location#BucketName
   */
  readonly bucketName?: string;

}

/**
 * @schema AlexaForBusinessDeveloperInfo
 */
export interface AlexaForBusinessDeveloperInfo {
  /**
   * @schema AlexaForBusinessDeveloperInfo#DeveloperName
   */
  readonly developerName?: string;

  /**
   * @schema AlexaForBusinessDeveloperInfo#PrivacyPolicy
   */
  readonly privacyPolicy?: string;

  /**
   * @schema AlexaForBusinessDeveloperInfo#Email
   */
  readonly email?: string;

  /**
   * @schema AlexaForBusinessDeveloperInfo#Url
   */
  readonly url?: string;

}
