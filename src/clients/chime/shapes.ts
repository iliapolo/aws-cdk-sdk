/**
 * @schema ChimeAssociatePhoneNumberWithUserRequest
 */
export interface ChimeAssociatePhoneNumberWithUserRequest {
  /**
   * @schema ChimeAssociatePhoneNumberWithUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeAssociatePhoneNumberWithUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ChimeAssociatePhoneNumberWithUserRequest#E164PhoneNumber
   */
  readonly e164PhoneNumber: string;

}

/**
 * @schema ChimeAssociatePhoneNumberWithUserResponse
 */
export interface ChimeAssociatePhoneNumberWithUserResponse {
}

/**
 * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorRequest
 */
export interface ChimeAssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers: string[];

  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorRequest#ForceAssociate
   */
  readonly forceAssociate?: boolean;

}

/**
 * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorResponse
 */
export interface ChimeAssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest
 */
export interface ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId: string;

  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers: string[];

  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest#ForceAssociate
   */
  readonly forceAssociate?: boolean;

}

/**
 * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse
 */
export interface ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * @schema ChimeAssociateSigninDelegateGroupsWithAccountRequest
 */
export interface ChimeAssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * @schema ChimeAssociateSigninDelegateGroupsWithAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeAssociateSigninDelegateGroupsWithAccountRequest#SigninDelegateGroups
   */
  readonly signinDelegateGroups: ChimeSigninDelegateGroup[];

}

/**
 * @schema ChimeAssociateSigninDelegateGroupsWithAccountResponse
 */
export interface ChimeAssociateSigninDelegateGroupsWithAccountResponse {
}

/**
 * @schema ChimeBatchCreateAttendeeRequest
 */
export interface ChimeBatchCreateAttendeeRequest {
  /**
   * @schema ChimeBatchCreateAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeBatchCreateAttendeeRequest#Attendees
   */
  readonly attendees: ChimeCreateAttendeeRequestItem[];

}

/**
 * @schema ChimeBatchCreateAttendeeResponse
 */
export interface ChimeBatchCreateAttendeeResponse {
  /**
   * @schema ChimeBatchCreateAttendeeResponse#Attendees
   */
  readonly attendees?: ChimeAttendee[];

  /**
   * @schema ChimeBatchCreateAttendeeResponse#Errors
   */
  readonly errors?: ChimeCreateAttendeeError[];

}

/**
 * @schema ChimeBatchCreateRoomMembershipRequest
 */
export interface ChimeBatchCreateRoomMembershipRequest {
  /**
   * @schema ChimeBatchCreateRoomMembershipRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeBatchCreateRoomMembershipRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema ChimeBatchCreateRoomMembershipRequest#MembershipItemList
   */
  readonly membershipItemList: ChimeMembershipItem[];

}

/**
 * @schema ChimeBatchCreateRoomMembershipResponse
 */
export interface ChimeBatchCreateRoomMembershipResponse {
  /**
   * @schema ChimeBatchCreateRoomMembershipResponse#Errors
   */
  readonly errors?: ChimeMemberError[];

}

/**
 * @schema ChimeBatchDeletePhoneNumberRequest
 */
export interface ChimeBatchDeletePhoneNumberRequest {
  /**
   * @schema ChimeBatchDeletePhoneNumberRequest#PhoneNumberIds
   */
  readonly phoneNumberIds: string[];

}

/**
 * @schema ChimeBatchDeletePhoneNumberResponse
 */
export interface ChimeBatchDeletePhoneNumberResponse {
  /**
   * @schema ChimeBatchDeletePhoneNumberResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * @schema ChimeBatchSuspendUserRequest
 */
export interface ChimeBatchSuspendUserRequest {
  /**
   * @schema ChimeBatchSuspendUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeBatchSuspendUserRequest#UserIdList
   */
  readonly userIdList: string[];

}

/**
 * @schema ChimeBatchSuspendUserResponse
 */
export interface ChimeBatchSuspendUserResponse {
  /**
   * @schema ChimeBatchSuspendUserResponse#UserErrors
   */
  readonly userErrors?: ChimeUserError[];

}

/**
 * @schema ChimeBatchUnsuspendUserRequest
 */
export interface ChimeBatchUnsuspendUserRequest {
  /**
   * @schema ChimeBatchUnsuspendUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeBatchUnsuspendUserRequest#UserIdList
   */
  readonly userIdList: string[];

}

/**
 * @schema ChimeBatchUnsuspendUserResponse
 */
export interface ChimeBatchUnsuspendUserResponse {
  /**
   * @schema ChimeBatchUnsuspendUserResponse#UserErrors
   */
  readonly userErrors?: ChimeUserError[];

}

/**
 * @schema ChimeBatchUpdatePhoneNumberRequest
 */
export interface ChimeBatchUpdatePhoneNumberRequest {
  /**
   * @schema ChimeBatchUpdatePhoneNumberRequest#UpdatePhoneNumberRequestItems
   */
  readonly updatePhoneNumberRequestItems: ChimeUpdatePhoneNumberRequestItem[];

}

/**
 * @schema ChimeBatchUpdatePhoneNumberResponse
 */
export interface ChimeBatchUpdatePhoneNumberResponse {
  /**
   * @schema ChimeBatchUpdatePhoneNumberResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * @schema ChimeBatchUpdateUserRequest
 */
export interface ChimeBatchUpdateUserRequest {
  /**
   * @schema ChimeBatchUpdateUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeBatchUpdateUserRequest#UpdateUserRequestItems
   */
  readonly updateUserRequestItems: ChimeUpdateUserRequestItem[];

}

/**
 * @schema ChimeBatchUpdateUserResponse
 */
export interface ChimeBatchUpdateUserResponse {
  /**
   * @schema ChimeBatchUpdateUserResponse#UserErrors
   */
  readonly userErrors?: ChimeUserError[];

}

/**
 * @schema ChimeCreateAccountRequest
 */
export interface ChimeCreateAccountRequest {
  /**
   * @schema ChimeCreateAccountRequest#Name
   */
  readonly name: string;

}

/**
 * @schema ChimeCreateAccountResponse
 */
export interface ChimeCreateAccountResponse {
  /**
   * @schema ChimeCreateAccountResponse#Account
   */
  readonly account?: ChimeAccount;

}

/**
 * @schema ChimeCreateAppInstanceRequest
 */
export interface ChimeCreateAppInstanceRequest {
  /**
   * @schema ChimeCreateAppInstanceRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeCreateAppInstanceRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeCreateAppInstanceRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema ChimeCreateAppInstanceResponse
 */
export interface ChimeCreateAppInstanceResponse {
  /**
   * @schema ChimeCreateAppInstanceResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * @schema ChimeCreateAppInstanceAdminRequest
 */
export interface ChimeCreateAppInstanceAdminRequest {
  /**
   * @schema ChimeCreateAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn: string;

  /**
   * @schema ChimeCreateAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema ChimeCreateAppInstanceAdminResponse
 */
export interface ChimeCreateAppInstanceAdminResponse {
  /**
   * @schema ChimeCreateAppInstanceAdminResponse#AppInstanceAdmin
   */
  readonly appInstanceAdmin?: ChimeIdentity;

  /**
   * @schema ChimeCreateAppInstanceAdminResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * @schema ChimeCreateAppInstanceUserRequest
 */
export interface ChimeCreateAppInstanceUserRequest {
  /**
   * @schema ChimeCreateAppInstanceUserRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ChimeCreateAppInstanceUserRequest#AppInstanceUserId
   */
  readonly appInstanceUserId: string;

  /**
   * @schema ChimeCreateAppInstanceUserRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeCreateAppInstanceUserRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeCreateAppInstanceUserRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema ChimeCreateAppInstanceUserResponse
 */
export interface ChimeCreateAppInstanceUserResponse {
  /**
   * @schema ChimeCreateAppInstanceUserResponse#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * @schema ChimeCreateAttendeeRequest
 */
export interface ChimeCreateAttendeeRequest {
  /**
   * @schema ChimeCreateAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeCreateAttendeeRequest#ExternalUserId
   */
  readonly externalUserId: string;

  /**
   * @schema ChimeCreateAttendeeRequest#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * @schema ChimeCreateAttendeeResponse
 */
export interface ChimeCreateAttendeeResponse {
  /**
   * @schema ChimeCreateAttendeeResponse#Attendee
   */
  readonly attendee?: ChimeAttendee;

}

/**
 * @schema ChimeCreateBotRequest
 */
export interface ChimeCreateBotRequest {
  /**
   * @schema ChimeCreateBotRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeCreateBotRequest#DisplayName
   */
  readonly displayName: string;

  /**
   * @schema ChimeCreateBotRequest#Domain
   */
  readonly domain?: string;

}

/**
 * @schema ChimeCreateBotResponse
 */
export interface ChimeCreateBotResponse {
  /**
   * @schema ChimeCreateBotResponse#Bot
   */
  readonly bot?: ChimeBot;

}

/**
 * @schema ChimeCreateChannelRequest
 */
export interface ChimeCreateChannelRequest {
  /**
   * @schema ChimeCreateChannelRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ChimeCreateChannelRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeCreateChannelRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeCreateChannelRequest#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeCreateChannelRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeCreateChannelRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema ChimeCreateChannelRequest#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * @schema ChimeCreateChannelResponse
 */
export interface ChimeCreateChannelResponse {
  /**
   * @schema ChimeCreateChannelResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * @schema ChimeCreateChannelBanRequest
 */
export interface ChimeCreateChannelBanRequest {
  /**
   * @schema ChimeCreateChannelBanRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeCreateChannelBanRequest#MemberArn
   */
  readonly memberArn: string;

}

/**
 * @schema ChimeCreateChannelBanResponse
 */
export interface ChimeCreateChannelBanResponse {
  /**
   * @schema ChimeCreateChannelBanResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeCreateChannelBanResponse#Member
   */
  readonly member?: ChimeIdentity;

}

/**
 * @schema ChimeCreateChannelMembershipRequest
 */
export interface ChimeCreateChannelMembershipRequest {
  /**
   * @schema ChimeCreateChannelMembershipRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeCreateChannelMembershipRequest#MemberArn
   */
  readonly memberArn: string;

  /**
   * @schema ChimeCreateChannelMembershipRequest#Type
   */
  readonly type: string;

}

/**
 * @schema ChimeCreateChannelMembershipResponse
 */
export interface ChimeCreateChannelMembershipResponse {
  /**
   * @schema ChimeCreateChannelMembershipResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeCreateChannelMembershipResponse#Member
   */
  readonly member?: ChimeIdentity;

}

/**
 * @schema ChimeCreateChannelModeratorRequest
 */
export interface ChimeCreateChannelModeratorRequest {
  /**
   * @schema ChimeCreateChannelModeratorRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeCreateChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn: string;

}

/**
 * @schema ChimeCreateChannelModeratorResponse
 */
export interface ChimeCreateChannelModeratorResponse {
  /**
   * @schema ChimeCreateChannelModeratorResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeCreateChannelModeratorResponse#ChannelModerator
   */
  readonly channelModerator?: ChimeIdentity;

}

/**
 * @schema ChimeCreateMeetingRequest
 */
export interface ChimeCreateMeetingRequest {
  /**
   * @schema ChimeCreateMeetingRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema ChimeCreateMeetingRequest#ExternalMeetingId
   */
  readonly externalMeetingId?: string;

  /**
   * @schema ChimeCreateMeetingRequest#MeetingHostId
   */
  readonly meetingHostId?: string;

  /**
   * @schema ChimeCreateMeetingRequest#MediaRegion
   */
  readonly mediaRegion?: string;

  /**
   * @schema ChimeCreateMeetingRequest#Tags
   */
  readonly tags?: ChimeTag[];

  /**
   * @schema ChimeCreateMeetingRequest#NotificationsConfiguration
   */
  readonly notificationsConfiguration?: ChimeMeetingNotificationConfiguration;

}

/**
 * @schema ChimeCreateMeetingResponse
 */
export interface ChimeCreateMeetingResponse {
  /**
   * @schema ChimeCreateMeetingResponse#Meeting
   */
  readonly meeting?: ChimeMeeting;

}

/**
 * @schema ChimeCreateMeetingDialOutRequest
 */
export interface ChimeCreateMeetingDialOutRequest {
  /**
   * @schema ChimeCreateMeetingDialOutRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeCreateMeetingDialOutRequest#FromPhoneNumber
   */
  readonly fromPhoneNumber: string;

  /**
   * @schema ChimeCreateMeetingDialOutRequest#ToPhoneNumber
   */
  readonly toPhoneNumber: string;

  /**
   * @schema ChimeCreateMeetingDialOutRequest#JoinToken
   */
  readonly joinToken: string;

}

/**
 * @schema ChimeCreateMeetingDialOutResponse
 */
export interface ChimeCreateMeetingDialOutResponse {
  /**
   * @schema ChimeCreateMeetingDialOutResponse#TransactionId
   */
  readonly transactionId?: string;

}

/**
 * @schema ChimeCreateMeetingWithAttendeesRequest
 */
export interface ChimeCreateMeetingWithAttendeesRequest {
  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#ExternalMeetingId
   */
  readonly externalMeetingId?: string;

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#MeetingHostId
   */
  readonly meetingHostId?: string;

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#MediaRegion
   */
  readonly mediaRegion?: string;

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#Tags
   */
  readonly tags?: ChimeTag[];

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#NotificationsConfiguration
   */
  readonly notificationsConfiguration?: ChimeMeetingNotificationConfiguration;

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#Attendees
   */
  readonly attendees?: ChimeCreateAttendeeRequestItem[];

}

/**
 * @schema ChimeCreateMeetingWithAttendeesResponse
 */
export interface ChimeCreateMeetingWithAttendeesResponse {
  /**
   * @schema ChimeCreateMeetingWithAttendeesResponse#Meeting
   */
  readonly meeting?: ChimeMeeting;

  /**
   * @schema ChimeCreateMeetingWithAttendeesResponse#Attendees
   */
  readonly attendees?: ChimeAttendee[];

  /**
   * @schema ChimeCreateMeetingWithAttendeesResponse#Errors
   */
  readonly errors?: ChimeCreateAttendeeError[];

}

/**
 * @schema ChimeCreatePhoneNumberOrderRequest
 */
export interface ChimeCreatePhoneNumberOrderRequest {
  /**
   * @schema ChimeCreatePhoneNumberOrderRequest#ProductType
   */
  readonly productType: string;

  /**
   * @schema ChimeCreatePhoneNumberOrderRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers: string[];

}

/**
 * @schema ChimeCreatePhoneNumberOrderResponse
 */
export interface ChimeCreatePhoneNumberOrderResponse {
  /**
   * @schema ChimeCreatePhoneNumberOrderResponse#PhoneNumberOrder
   */
  readonly phoneNumberOrder?: ChimePhoneNumberOrder;

}

/**
 * @schema ChimeCreateProxySessionRequest
 */
export interface ChimeCreateProxySessionRequest {
  /**
   * @schema ChimeCreateProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimeCreateProxySessionRequest#ParticipantPhoneNumbers
   */
  readonly participantPhoneNumbers: string[];

  /**
   * @schema ChimeCreateProxySessionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateProxySessionRequest#ExpiryMinutes
   */
  readonly expiryMinutes?: number;

  /**
   * @schema ChimeCreateProxySessionRequest#Capabilities
   */
  readonly capabilities: string[];

  /**
   * @schema ChimeCreateProxySessionRequest#NumberSelectionBehavior
   */
  readonly numberSelectionBehavior?: string;

  /**
   * @schema ChimeCreateProxySessionRequest#GeoMatchLevel
   */
  readonly geoMatchLevel?: string;

  /**
   * @schema ChimeCreateProxySessionRequest#GeoMatchParams
   */
  readonly geoMatchParams?: ChimeGeoMatchParams;

}

/**
 * @schema ChimeCreateProxySessionResponse
 */
export interface ChimeCreateProxySessionResponse {
  /**
   * @schema ChimeCreateProxySessionResponse#ProxySession
   */
  readonly proxySession?: ChimeProxySession;

}

/**
 * @schema ChimeCreateRoomRequest
 */
export interface ChimeCreateRoomRequest {
  /**
   * @schema ChimeCreateRoomRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeCreateRoomRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeCreateRoomRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema ChimeCreateRoomResponse
 */
export interface ChimeCreateRoomResponse {
  /**
   * @schema ChimeCreateRoomResponse#Room
   */
  readonly room?: ChimeRoom;

}

/**
 * @schema ChimeCreateRoomMembershipRequest
 */
export interface ChimeCreateRoomMembershipRequest {
  /**
   * @schema ChimeCreateRoomMembershipRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeCreateRoomMembershipRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema ChimeCreateRoomMembershipRequest#MemberId
   */
  readonly memberId: string;

  /**
   * @schema ChimeCreateRoomMembershipRequest#Role
   */
  readonly role?: string;

}

/**
 * @schema ChimeCreateRoomMembershipResponse
 */
export interface ChimeCreateRoomMembershipResponse {
  /**
   * @schema ChimeCreateRoomMembershipResponse#RoomMembership
   */
  readonly roomMembership?: ChimeRoomMembership;

}

/**
 * @schema ChimeCreateSipMediaApplicationRequest
 */
export interface ChimeCreateSipMediaApplicationRequest {
  /**
   * @schema ChimeCreateSipMediaApplicationRequest#AwsRegion
   */
  readonly awsRegion: string;

  /**
   * @schema ChimeCreateSipMediaApplicationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateSipMediaApplicationRequest#Endpoints
   */
  readonly endpoints: ChimeSipMediaApplicationEndpoint[];

}

/**
 * @schema ChimeCreateSipMediaApplicationResponse
 */
export interface ChimeCreateSipMediaApplicationResponse {
  /**
   * @schema ChimeCreateSipMediaApplicationResponse#SipMediaApplication
   */
  readonly sipMediaApplication?: ChimeSipMediaApplication;

}

/**
 * @schema ChimeCreateSipMediaApplicationCallRequest
 */
export interface ChimeCreateSipMediaApplicationCallRequest {
  /**
   * @schema ChimeCreateSipMediaApplicationCallRequest#FromPhoneNumber
   */
  readonly fromPhoneNumber?: string;

  /**
   * @schema ChimeCreateSipMediaApplicationCallRequest#ToPhoneNumber
   */
  readonly toPhoneNumber?: string;

  /**
   * @schema ChimeCreateSipMediaApplicationCallRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

}

/**
 * @schema ChimeCreateSipMediaApplicationCallResponse
 */
export interface ChimeCreateSipMediaApplicationCallResponse {
  /**
   * @schema ChimeCreateSipMediaApplicationCallResponse#SipMediaApplicationCall
   */
  readonly sipMediaApplicationCall?: ChimeSipMediaApplicationCall;

}

/**
 * @schema ChimeCreateSipRuleRequest
 */
export interface ChimeCreateSipRuleRequest {
  /**
   * @schema ChimeCreateSipRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeCreateSipRuleRequest#TriggerType
   */
  readonly triggerType: string;

  /**
   * @schema ChimeCreateSipRuleRequest#TriggerValue
   */
  readonly triggerValue: string;

  /**
   * @schema ChimeCreateSipRuleRequest#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeCreateSipRuleRequest#TargetApplications
   */
  readonly targetApplications: ChimeSipRuleTargetApplication[];

}

/**
 * @schema ChimeCreateSipRuleResponse
 */
export interface ChimeCreateSipRuleResponse {
  /**
   * @schema ChimeCreateSipRuleResponse#SipRule
   */
  readonly sipRule?: ChimeSipRule;

}

/**
 * @schema ChimeCreateUserRequest
 */
export interface ChimeCreateUserRequest {
  /**
   * @schema ChimeCreateUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeCreateUserRequest#Username
   */
  readonly username?: string;

  /**
   * @schema ChimeCreateUserRequest#Email
   */
  readonly email?: string;

  /**
   * @schema ChimeCreateUserRequest#UserType
   */
  readonly userType?: string;

}

/**
 * @schema ChimeCreateUserResponse
 */
export interface ChimeCreateUserResponse {
  /**
   * @schema ChimeCreateUserResponse#User
   */
  readonly user?: ChimeUser;

}

/**
 * @schema ChimeCreateVoiceConnectorRequest
 */
export interface ChimeCreateVoiceConnectorRequest {
  /**
   * @schema ChimeCreateVoiceConnectorRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeCreateVoiceConnectorRequest#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ChimeCreateVoiceConnectorRequest#RequireEncryption
   */
  readonly requireEncryption: boolean;

}

/**
 * @schema ChimeCreateVoiceConnectorResponse
 */
export interface ChimeCreateVoiceConnectorResponse {
  /**
   * @schema ChimeCreateVoiceConnectorResponse#VoiceConnector
   */
  readonly voiceConnector?: ChimeVoiceConnector;

}

/**
 * @schema ChimeCreateVoiceConnectorGroupRequest
 */
export interface ChimeCreateVoiceConnectorGroupRequest {
  /**
   * @schema ChimeCreateVoiceConnectorGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeCreateVoiceConnectorGroupRequest#VoiceConnectorItems
   */
  readonly voiceConnectorItems?: ChimeVoiceConnectorItem[];

}

/**
 * @schema ChimeCreateVoiceConnectorGroupResponse
 */
export interface ChimeCreateVoiceConnectorGroupResponse {
  /**
   * @schema ChimeCreateVoiceConnectorGroupResponse#VoiceConnectorGroup
   */
  readonly voiceConnectorGroup?: ChimeVoiceConnectorGroup;

}

/**
 * @schema ChimeDeleteAccountRequest
 */
export interface ChimeDeleteAccountRequest {
  /**
   * @schema ChimeDeleteAccountRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema ChimeDeleteAccountResponse
 */
export interface ChimeDeleteAccountResponse {
}

/**
 * @schema ChimeDeleteAppInstanceRequest
 */
export interface ChimeDeleteAppInstanceRequest {
  /**
   * @schema ChimeDeleteAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema ChimeDeleteAppInstanceAdminRequest
 */
export interface ChimeDeleteAppInstanceAdminRequest {
  /**
   * @schema ChimeDeleteAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn: string;

  /**
   * @schema ChimeDeleteAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema ChimeDeleteAppInstanceStreamingConfigurationsRequest
 */
export interface ChimeDeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * @schema ChimeDeleteAppInstanceStreamingConfigurationsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema ChimeDeleteAppInstanceUserRequest
 */
export interface ChimeDeleteAppInstanceUserRequest {
  /**
   * @schema ChimeDeleteAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn: string;

}

/**
 * @schema ChimeDeleteAttendeeRequest
 */
export interface ChimeDeleteAttendeeRequest {
  /**
   * @schema ChimeDeleteAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeDeleteAttendeeRequest#AttendeeId
   */
  readonly attendeeId: string;

}

/**
 * @schema ChimeDeleteChannelRequest
 */
export interface ChimeDeleteChannelRequest {
  /**
   * @schema ChimeDeleteChannelRequest#ChannelArn
   */
  readonly channelArn: string;

}

/**
 * @schema ChimeDeleteChannelBanRequest
 */
export interface ChimeDeleteChannelBanRequest {
  /**
   * @schema ChimeDeleteChannelBanRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeDeleteChannelBanRequest#MemberArn
   */
  readonly memberArn: string;

}

/**
 * @schema ChimeDeleteChannelMembershipRequest
 */
export interface ChimeDeleteChannelMembershipRequest {
  /**
   * @schema ChimeDeleteChannelMembershipRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeDeleteChannelMembershipRequest#MemberArn
   */
  readonly memberArn: string;

}

/**
 * @schema ChimeDeleteChannelMessageRequest
 */
export interface ChimeDeleteChannelMessageRequest {
  /**
   * @schema ChimeDeleteChannelMessageRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeDeleteChannelMessageRequest#MessageId
   */
  readonly messageId: string;

}

/**
 * @schema ChimeDeleteChannelModeratorRequest
 */
export interface ChimeDeleteChannelModeratorRequest {
  /**
   * @schema ChimeDeleteChannelModeratorRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeDeleteChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn: string;

}

/**
 * @schema ChimeDeleteEventsConfigurationRequest
 */
export interface ChimeDeleteEventsConfigurationRequest {
  /**
   * @schema ChimeDeleteEventsConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeDeleteEventsConfigurationRequest#BotId
   */
  readonly botId: string;

}

/**
 * @schema ChimeDeleteMeetingRequest
 */
export interface ChimeDeleteMeetingRequest {
  /**
   * @schema ChimeDeleteMeetingRequest#MeetingId
   */
  readonly meetingId: string;

}

/**
 * @schema ChimeDeletePhoneNumberRequest
 */
export interface ChimeDeletePhoneNumberRequest {
  /**
   * @schema ChimeDeletePhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId: string;

}

/**
 * @schema ChimeDeleteProxySessionRequest
 */
export interface ChimeDeleteProxySessionRequest {
  /**
   * @schema ChimeDeleteProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimeDeleteProxySessionRequest#ProxySessionId
   */
  readonly proxySessionId: string;

}

/**
 * @schema ChimeDeleteRoomRequest
 */
export interface ChimeDeleteRoomRequest {
  /**
   * @schema ChimeDeleteRoomRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeDeleteRoomRequest#RoomId
   */
  readonly roomId: string;

}

/**
 * @schema ChimeDeleteRoomMembershipRequest
 */
export interface ChimeDeleteRoomMembershipRequest {
  /**
   * @schema ChimeDeleteRoomMembershipRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeDeleteRoomMembershipRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema ChimeDeleteRoomMembershipRequest#MemberId
   */
  readonly memberId: string;

}

/**
 * @schema ChimeDeleteSipMediaApplicationRequest
 */
export interface ChimeDeleteSipMediaApplicationRequest {
  /**
   * @schema ChimeDeleteSipMediaApplicationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

}

/**
 * @schema ChimeDeleteSipRuleRequest
 */
export interface ChimeDeleteSipRuleRequest {
  /**
   * @schema ChimeDeleteSipRuleRequest#SipRuleId
   */
  readonly sipRuleId: string;

}

/**
 * @schema ChimeDeleteVoiceConnectorRequest
 */
export interface ChimeDeleteVoiceConnectorRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest
 */
export interface ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeDeleteVoiceConnectorGroupRequest
 */
export interface ChimeDeleteVoiceConnectorGroupRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId: string;

}

/**
 * @schema ChimeDeleteVoiceConnectorOriginationRequest
 */
export interface ChimeDeleteVoiceConnectorOriginationRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorOriginationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeDeleteVoiceConnectorProxyRequest
 */
export interface ChimeDeleteVoiceConnectorProxyRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorProxyRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeDeleteVoiceConnectorStreamingConfigurationRequest
 */
export interface ChimeDeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorStreamingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeDeleteVoiceConnectorTerminationRequest
 */
export interface ChimeDeleteVoiceConnectorTerminationRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorTerminationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeDeleteVoiceConnectorTerminationCredentialsRequest
 */
export interface ChimeDeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorTerminationCredentialsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimeDeleteVoiceConnectorTerminationCredentialsRequest#Usernames
   */
  readonly usernames: string[];

}

/**
 * @schema ChimeDescribeAppInstanceRequest
 */
export interface ChimeDescribeAppInstanceRequest {
  /**
   * @schema ChimeDescribeAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema ChimeDescribeAppInstanceResponse
 */
export interface ChimeDescribeAppInstanceResponse {
  /**
   * @schema ChimeDescribeAppInstanceResponse#AppInstance
   */
  readonly appInstance?: ChimeAppInstance;

}

/**
 * @schema ChimeDescribeAppInstanceAdminRequest
 */
export interface ChimeDescribeAppInstanceAdminRequest {
  /**
   * @schema ChimeDescribeAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn: string;

  /**
   * @schema ChimeDescribeAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema ChimeDescribeAppInstanceAdminResponse
 */
export interface ChimeDescribeAppInstanceAdminResponse {
  /**
   * @schema ChimeDescribeAppInstanceAdminResponse#AppInstanceAdmin
   */
  readonly appInstanceAdmin?: ChimeAppInstanceAdmin;

}

/**
 * @schema ChimeDescribeAppInstanceUserRequest
 */
export interface ChimeDescribeAppInstanceUserRequest {
  /**
   * @schema ChimeDescribeAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn: string;

}

/**
 * @schema ChimeDescribeAppInstanceUserResponse
 */
export interface ChimeDescribeAppInstanceUserResponse {
  /**
   * @schema ChimeDescribeAppInstanceUserResponse#AppInstanceUser
   */
  readonly appInstanceUser?: ChimeAppInstanceUser;

}

/**
 * @schema ChimeDescribeChannelRequest
 */
export interface ChimeDescribeChannelRequest {
  /**
   * @schema ChimeDescribeChannelRequest#ChannelArn
   */
  readonly channelArn: string;

}

/**
 * @schema ChimeDescribeChannelResponse
 */
export interface ChimeDescribeChannelResponse {
  /**
   * @schema ChimeDescribeChannelResponse#Channel
   */
  readonly channel?: ChimeChannel;

}

/**
 * @schema ChimeDescribeChannelBanRequest
 */
export interface ChimeDescribeChannelBanRequest {
  /**
   * @schema ChimeDescribeChannelBanRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeDescribeChannelBanRequest#MemberArn
   */
  readonly memberArn: string;

}

/**
 * @schema ChimeDescribeChannelBanResponse
 */
export interface ChimeDescribeChannelBanResponse {
  /**
   * @schema ChimeDescribeChannelBanResponse#ChannelBan
   */
  readonly channelBan?: ChimeChannelBan;

}

/**
 * @schema ChimeDescribeChannelMembershipRequest
 */
export interface ChimeDescribeChannelMembershipRequest {
  /**
   * @schema ChimeDescribeChannelMembershipRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeDescribeChannelMembershipRequest#MemberArn
   */
  readonly memberArn: string;

}

/**
 * @schema ChimeDescribeChannelMembershipResponse
 */
export interface ChimeDescribeChannelMembershipResponse {
  /**
   * @schema ChimeDescribeChannelMembershipResponse#ChannelMembership
   */
  readonly channelMembership?: ChimeChannelMembership;

}

/**
 * @schema ChimeDescribeChannelMembershipForAppInstanceUserRequest
 */
export interface ChimeDescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * @schema ChimeDescribeChannelMembershipForAppInstanceUserRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeDescribeChannelMembershipForAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn: string;

}

/**
 * @schema ChimeDescribeChannelMembershipForAppInstanceUserResponse
 */
export interface ChimeDescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * @schema ChimeDescribeChannelMembershipForAppInstanceUserResponse#ChannelMembership
   */
  readonly channelMembership?: ChimeChannelMembershipForAppInstanceUserSummary;

}

/**
 * @schema ChimeDescribeChannelModeratedByAppInstanceUserRequest
 */
export interface ChimeDescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * @schema ChimeDescribeChannelModeratedByAppInstanceUserRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeDescribeChannelModeratedByAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn: string;

}

/**
 * @schema ChimeDescribeChannelModeratedByAppInstanceUserResponse
 */
export interface ChimeDescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * @schema ChimeDescribeChannelModeratedByAppInstanceUserResponse#Channel
   */
  readonly channel?: ChimeChannelModeratedByAppInstanceUserSummary;

}

/**
 * @schema ChimeDescribeChannelModeratorRequest
 */
export interface ChimeDescribeChannelModeratorRequest {
  /**
   * @schema ChimeDescribeChannelModeratorRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeDescribeChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn: string;

}

/**
 * @schema ChimeDescribeChannelModeratorResponse
 */
export interface ChimeDescribeChannelModeratorResponse {
  /**
   * @schema ChimeDescribeChannelModeratorResponse#ChannelModerator
   */
  readonly channelModerator?: ChimeChannelModerator;

}

/**
 * @schema ChimeDisassociatePhoneNumberFromUserRequest
 */
export interface ChimeDisassociatePhoneNumberFromUserRequest {
  /**
   * @schema ChimeDisassociatePhoneNumberFromUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeDisassociatePhoneNumberFromUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema ChimeDisassociatePhoneNumberFromUserResponse
 */
export interface ChimeDisassociatePhoneNumberFromUserResponse {
}

/**
 * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest
 */
export interface ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers: string[];

}

/**
 * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse
 */
export interface ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest
 */
export interface ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId: string;

  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers: string[];

}

/**
 * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse
 */
export interface ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * @schema ChimeDisassociateSigninDelegateGroupsFromAccountRequest
 */
export interface ChimeDisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * @schema ChimeDisassociateSigninDelegateGroupsFromAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeDisassociateSigninDelegateGroupsFromAccountRequest#GroupNames
   */
  readonly groupNames: string[];

}

/**
 * @schema ChimeDisassociateSigninDelegateGroupsFromAccountResponse
 */
export interface ChimeDisassociateSigninDelegateGroupsFromAccountResponse {
}

/**
 * @schema ChimeGetAccountRequest
 */
export interface ChimeGetAccountRequest {
  /**
   * @schema ChimeGetAccountRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema ChimeGetAccountResponse
 */
export interface ChimeGetAccountResponse {
  /**
   * @schema ChimeGetAccountResponse#Account
   */
  readonly account?: ChimeAccount;

}

/**
 * @schema ChimeGetAccountSettingsRequest
 */
export interface ChimeGetAccountSettingsRequest {
  /**
   * @schema ChimeGetAccountSettingsRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema ChimeGetAccountSettingsResponse
 */
export interface ChimeGetAccountSettingsResponse {
  /**
   * @schema ChimeGetAccountSettingsResponse#AccountSettings
   */
  readonly accountSettings?: ChimeAccountSettings;

}

/**
 * @schema ChimeGetAppInstanceRetentionSettingsRequest
 */
export interface ChimeGetAppInstanceRetentionSettingsRequest {
  /**
   * @schema ChimeGetAppInstanceRetentionSettingsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema ChimeGetAppInstanceRetentionSettingsResponse
 */
export interface ChimeGetAppInstanceRetentionSettingsResponse {
  /**
   * @schema ChimeGetAppInstanceRetentionSettingsResponse#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings?: ChimeAppInstanceRetentionSettings;

  /**
   * @schema ChimeGetAppInstanceRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * @schema ChimeGetAppInstanceStreamingConfigurationsRequest
 */
export interface ChimeGetAppInstanceStreamingConfigurationsRequest {
  /**
   * @schema ChimeGetAppInstanceStreamingConfigurationsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema ChimeGetAppInstanceStreamingConfigurationsResponse
 */
export interface ChimeGetAppInstanceStreamingConfigurationsResponse {
  /**
   * @schema ChimeGetAppInstanceStreamingConfigurationsResponse#AppInstanceStreamingConfigurations
   */
  readonly appInstanceStreamingConfigurations?: ChimeAppInstanceStreamingConfiguration[];

}

/**
 * @schema ChimeGetAttendeeRequest
 */
export interface ChimeGetAttendeeRequest {
  /**
   * @schema ChimeGetAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeGetAttendeeRequest#AttendeeId
   */
  readonly attendeeId: string;

}

/**
 * @schema ChimeGetAttendeeResponse
 */
export interface ChimeGetAttendeeResponse {
  /**
   * @schema ChimeGetAttendeeResponse#Attendee
   */
  readonly attendee?: ChimeAttendee;

}

/**
 * @schema ChimeGetBotRequest
 */
export interface ChimeGetBotRequest {
  /**
   * @schema ChimeGetBotRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeGetBotRequest#BotId
   */
  readonly botId: string;

}

/**
 * @schema ChimeGetBotResponse
 */
export interface ChimeGetBotResponse {
  /**
   * @schema ChimeGetBotResponse#Bot
   */
  readonly bot?: ChimeBot;

}

/**
 * @schema ChimeGetChannelMessageRequest
 */
export interface ChimeGetChannelMessageRequest {
  /**
   * @schema ChimeGetChannelMessageRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeGetChannelMessageRequest#MessageId
   */
  readonly messageId: string;

}

/**
 * @schema ChimeGetChannelMessageResponse
 */
export interface ChimeGetChannelMessageResponse {
  /**
   * @schema ChimeGetChannelMessageResponse#ChannelMessage
   */
  readonly channelMessage?: ChimeChannelMessage;

}

/**
 * @schema ChimeGetEventsConfigurationRequest
 */
export interface ChimeGetEventsConfigurationRequest {
  /**
   * @schema ChimeGetEventsConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeGetEventsConfigurationRequest#BotId
   */
  readonly botId: string;

}

/**
 * @schema ChimeGetEventsConfigurationResponse
 */
export interface ChimeGetEventsConfigurationResponse {
  /**
   * @schema ChimeGetEventsConfigurationResponse#EventsConfiguration
   */
  readonly eventsConfiguration?: ChimeEventsConfiguration;

}

/**
 * @schema ChimeGetGlobalSettingsResponse
 */
export interface ChimeGetGlobalSettingsResponse {
  /**
   * @schema ChimeGetGlobalSettingsResponse#BusinessCalling
   */
  readonly businessCalling?: ChimeBusinessCallingSettings;

  /**
   * @schema ChimeGetGlobalSettingsResponse#VoiceConnector
   */
  readonly voiceConnector?: ChimeVoiceConnectorSettings;

}

/**
 * @schema ChimeGetMeetingRequest
 */
export interface ChimeGetMeetingRequest {
  /**
   * @schema ChimeGetMeetingRequest#MeetingId
   */
  readonly meetingId: string;

}

/**
 * @schema ChimeGetMeetingResponse
 */
export interface ChimeGetMeetingResponse {
  /**
   * @schema ChimeGetMeetingResponse#Meeting
   */
  readonly meeting?: ChimeMeeting;

}

/**
 * @schema ChimeGetMessagingSessionEndpointRequest
 */
export interface ChimeGetMessagingSessionEndpointRequest {
}

/**
 * @schema ChimeGetMessagingSessionEndpointResponse
 */
export interface ChimeGetMessagingSessionEndpointResponse {
  /**
   * @schema ChimeGetMessagingSessionEndpointResponse#Endpoint
   */
  readonly endpoint?: ChimeMessagingSessionEndpoint;

}

/**
 * @schema ChimeGetPhoneNumberRequest
 */
export interface ChimeGetPhoneNumberRequest {
  /**
   * @schema ChimeGetPhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId: string;

}

/**
 * @schema ChimeGetPhoneNumberResponse
 */
export interface ChimeGetPhoneNumberResponse {
  /**
   * @schema ChimeGetPhoneNumberResponse#PhoneNumber
   */
  readonly phoneNumber?: ChimePhoneNumber;

}

/**
 * @schema ChimeGetPhoneNumberOrderRequest
 */
export interface ChimeGetPhoneNumberOrderRequest {
  /**
   * @schema ChimeGetPhoneNumberOrderRequest#PhoneNumberOrderId
   */
  readonly phoneNumberOrderId: string;

}

/**
 * @schema ChimeGetPhoneNumberOrderResponse
 */
export interface ChimeGetPhoneNumberOrderResponse {
  /**
   * @schema ChimeGetPhoneNumberOrderResponse#PhoneNumberOrder
   */
  readonly phoneNumberOrder?: ChimePhoneNumberOrder;

}

/**
 * @schema ChimeGetPhoneNumberSettingsResponse
 */
export interface ChimeGetPhoneNumberSettingsResponse {
  /**
   * @schema ChimeGetPhoneNumberSettingsResponse#CallingName
   */
  readonly callingName?: string;

  /**
   * @schema ChimeGetPhoneNumberSettingsResponse#CallingNameUpdatedTimestamp
   */
  readonly callingNameUpdatedTimestamp?: string;

}

/**
 * @schema ChimeGetProxySessionRequest
 */
export interface ChimeGetProxySessionRequest {
  /**
   * @schema ChimeGetProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimeGetProxySessionRequest#ProxySessionId
   */
  readonly proxySessionId: string;

}

/**
 * @schema ChimeGetProxySessionResponse
 */
export interface ChimeGetProxySessionResponse {
  /**
   * @schema ChimeGetProxySessionResponse#ProxySession
   */
  readonly proxySession?: ChimeProxySession;

}

/**
 * @schema ChimeGetRetentionSettingsRequest
 */
export interface ChimeGetRetentionSettingsRequest {
  /**
   * @schema ChimeGetRetentionSettingsRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema ChimeGetRetentionSettingsResponse
 */
export interface ChimeGetRetentionSettingsResponse {
  /**
   * @schema ChimeGetRetentionSettingsResponse#RetentionSettings
   */
  readonly retentionSettings?: ChimeRetentionSettings;

  /**
   * @schema ChimeGetRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * @schema ChimeGetRoomRequest
 */
export interface ChimeGetRoomRequest {
  /**
   * @schema ChimeGetRoomRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeGetRoomRequest#RoomId
   */
  readonly roomId: string;

}

/**
 * @schema ChimeGetRoomResponse
 */
export interface ChimeGetRoomResponse {
  /**
   * @schema ChimeGetRoomResponse#Room
   */
  readonly room?: ChimeRoom;

}

/**
 * @schema ChimeGetSipMediaApplicationRequest
 */
export interface ChimeGetSipMediaApplicationRequest {
  /**
   * @schema ChimeGetSipMediaApplicationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

}

/**
 * @schema ChimeGetSipMediaApplicationResponse
 */
export interface ChimeGetSipMediaApplicationResponse {
  /**
   * @schema ChimeGetSipMediaApplicationResponse#SipMediaApplication
   */
  readonly sipMediaApplication?: ChimeSipMediaApplication;

}

/**
 * @schema ChimeGetSipMediaApplicationLoggingConfigurationRequest
 */
export interface ChimeGetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @schema ChimeGetSipMediaApplicationLoggingConfigurationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

}

/**
 * @schema ChimeGetSipMediaApplicationLoggingConfigurationResponse
 */
export interface ChimeGetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @schema ChimeGetSipMediaApplicationLoggingConfigurationResponse#SipMediaApplicationLoggingConfiguration
   */
  readonly sipMediaApplicationLoggingConfiguration?: ChimeSipMediaApplicationLoggingConfiguration;

}

/**
 * @schema ChimeGetSipRuleRequest
 */
export interface ChimeGetSipRuleRequest {
  /**
   * @schema ChimeGetSipRuleRequest#SipRuleId
   */
  readonly sipRuleId: string;

}

/**
 * @schema ChimeGetSipRuleResponse
 */
export interface ChimeGetSipRuleResponse {
  /**
   * @schema ChimeGetSipRuleResponse#SipRule
   */
  readonly sipRule?: ChimeSipRule;

}

/**
 * @schema ChimeGetUserRequest
 */
export interface ChimeGetUserRequest {
  /**
   * @schema ChimeGetUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeGetUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema ChimeGetUserResponse
 */
export interface ChimeGetUserResponse {
  /**
   * @schema ChimeGetUserResponse#User
   */
  readonly user?: ChimeUser;

}

/**
 * @schema ChimeGetUserSettingsRequest
 */
export interface ChimeGetUserSettingsRequest {
  /**
   * @schema ChimeGetUserSettingsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeGetUserSettingsRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema ChimeGetUserSettingsResponse
 */
export interface ChimeGetUserSettingsResponse {
  /**
   * @schema ChimeGetUserSettingsResponse#UserSettings
   */
  readonly userSettings?: ChimeUserSettings;

}

/**
 * @schema ChimeGetVoiceConnectorRequest
 */
export interface ChimeGetVoiceConnectorRequest {
  /**
   * @schema ChimeGetVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeGetVoiceConnectorResponse
 */
export interface ChimeGetVoiceConnectorResponse {
  /**
   * @schema ChimeGetVoiceConnectorResponse#VoiceConnector
   */
  readonly voiceConnector?: ChimeVoiceConnector;

}

/**
 * @schema ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest
 */
export interface ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @schema ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse
 */
export interface ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @schema ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse#EmergencyCallingConfiguration
   */
  readonly emergencyCallingConfiguration?: ChimeEmergencyCallingConfiguration;

}

/**
 * @schema ChimeGetVoiceConnectorGroupRequest
 */
export interface ChimeGetVoiceConnectorGroupRequest {
  /**
   * @schema ChimeGetVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId: string;

}

/**
 * @schema ChimeGetVoiceConnectorGroupResponse
 */
export interface ChimeGetVoiceConnectorGroupResponse {
  /**
   * @schema ChimeGetVoiceConnectorGroupResponse#VoiceConnectorGroup
   */
  readonly voiceConnectorGroup?: ChimeVoiceConnectorGroup;

}

/**
 * @schema ChimeGetVoiceConnectorLoggingConfigurationRequest
 */
export interface ChimeGetVoiceConnectorLoggingConfigurationRequest {
  /**
   * @schema ChimeGetVoiceConnectorLoggingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeGetVoiceConnectorLoggingConfigurationResponse
 */
export interface ChimeGetVoiceConnectorLoggingConfigurationResponse {
  /**
   * @schema ChimeGetVoiceConnectorLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: ChimeLoggingConfiguration;

}

/**
 * @schema ChimeGetVoiceConnectorOriginationRequest
 */
export interface ChimeGetVoiceConnectorOriginationRequest {
  /**
   * @schema ChimeGetVoiceConnectorOriginationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeGetVoiceConnectorOriginationResponse
 */
export interface ChimeGetVoiceConnectorOriginationResponse {
  /**
   * @schema ChimeGetVoiceConnectorOriginationResponse#Origination
   */
  readonly origination?: ChimeOrigination;

}

/**
 * @schema ChimeGetVoiceConnectorProxyRequest
 */
export interface ChimeGetVoiceConnectorProxyRequest {
  /**
   * @schema ChimeGetVoiceConnectorProxyRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeGetVoiceConnectorProxyResponse
 */
export interface ChimeGetVoiceConnectorProxyResponse {
  /**
   * @schema ChimeGetVoiceConnectorProxyResponse#Proxy
   */
  readonly proxy?: ChimeProxy;

}

/**
 * @schema ChimeGetVoiceConnectorStreamingConfigurationRequest
 */
export interface ChimeGetVoiceConnectorStreamingConfigurationRequest {
  /**
   * @schema ChimeGetVoiceConnectorStreamingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeGetVoiceConnectorStreamingConfigurationResponse
 */
export interface ChimeGetVoiceConnectorStreamingConfigurationResponse {
  /**
   * @schema ChimeGetVoiceConnectorStreamingConfigurationResponse#StreamingConfiguration
   */
  readonly streamingConfiguration?: ChimeStreamingConfiguration;

}

/**
 * @schema ChimeGetVoiceConnectorTerminationRequest
 */
export interface ChimeGetVoiceConnectorTerminationRequest {
  /**
   * @schema ChimeGetVoiceConnectorTerminationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeGetVoiceConnectorTerminationResponse
 */
export interface ChimeGetVoiceConnectorTerminationResponse {
  /**
   * @schema ChimeGetVoiceConnectorTerminationResponse#Termination
   */
  readonly termination?: ChimeTermination;

}

/**
 * @schema ChimeGetVoiceConnectorTerminationHealthRequest
 */
export interface ChimeGetVoiceConnectorTerminationHealthRequest {
  /**
   * @schema ChimeGetVoiceConnectorTerminationHealthRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeGetVoiceConnectorTerminationHealthResponse
 */
export interface ChimeGetVoiceConnectorTerminationHealthResponse {
  /**
   * @schema ChimeGetVoiceConnectorTerminationHealthResponse#TerminationHealth
   */
  readonly terminationHealth?: ChimeTerminationHealth;

}

/**
 * @schema ChimeInviteUsersRequest
 */
export interface ChimeInviteUsersRequest {
  /**
   * @schema ChimeInviteUsersRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeInviteUsersRequest#UserEmailList
   */
  readonly userEmailList: string[];

  /**
   * @schema ChimeInviteUsersRequest#UserType
   */
  readonly userType?: string;

}

/**
 * @schema ChimeInviteUsersResponse
 */
export interface ChimeInviteUsersResponse {
  /**
   * @schema ChimeInviteUsersResponse#Invites
   */
  readonly invites?: ChimeInvite[];

}

/**
 * @schema ChimeListAccountsRequest
 */
export interface ChimeListAccountsRequest {
  /**
   * @schema ChimeListAccountsRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeListAccountsRequest#UserEmail
   */
  readonly userEmail?: string;

  /**
   * @schema ChimeListAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ChimeListAccountsResponse
 */
export interface ChimeListAccountsResponse {
  /**
   * @schema ChimeListAccountsResponse#Accounts
   */
  readonly accounts?: ChimeAccount[];

  /**
   * @schema ChimeListAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListAppInstanceAdminsRequest
 */
export interface ChimeListAppInstanceAdminsRequest {
  /**
   * @schema ChimeListAppInstanceAdminsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ChimeListAppInstanceAdminsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListAppInstanceAdminsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListAppInstanceAdminsResponse
 */
export interface ChimeListAppInstanceAdminsResponse {
  /**
   * @schema ChimeListAppInstanceAdminsResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeListAppInstanceAdminsResponse#AppInstanceAdmins
   */
  readonly appInstanceAdmins?: ChimeAppInstanceAdminSummary[];

  /**
   * @schema ChimeListAppInstanceAdminsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListAppInstanceUsersRequest
 */
export interface ChimeListAppInstanceUsersRequest {
  /**
   * @schema ChimeListAppInstanceUsersRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ChimeListAppInstanceUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListAppInstanceUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListAppInstanceUsersResponse
 */
export interface ChimeListAppInstanceUsersResponse {
  /**
   * @schema ChimeListAppInstanceUsersResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeListAppInstanceUsersResponse#AppInstanceUsers
   */
  readonly appInstanceUsers?: ChimeAppInstanceUserSummary[];

  /**
   * @schema ChimeListAppInstanceUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListAppInstancesRequest
 */
export interface ChimeListAppInstancesRequest {
  /**
   * @schema ChimeListAppInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListAppInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListAppInstancesResponse
 */
export interface ChimeListAppInstancesResponse {
  /**
   * @schema ChimeListAppInstancesResponse#AppInstances
   */
  readonly appInstances?: ChimeAppInstanceSummary[];

  /**
   * @schema ChimeListAppInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListAttendeeTagsRequest
 */
export interface ChimeListAttendeeTagsRequest {
  /**
   * @schema ChimeListAttendeeTagsRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeListAttendeeTagsRequest#AttendeeId
   */
  readonly attendeeId: string;

}

/**
 * @schema ChimeListAttendeeTagsResponse
 */
export interface ChimeListAttendeeTagsResponse {
  /**
   * @schema ChimeListAttendeeTagsResponse#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * @schema ChimeListAttendeesRequest
 */
export interface ChimeListAttendeesRequest {
  /**
   * @schema ChimeListAttendeesRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeListAttendeesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListAttendeesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ChimeListAttendeesResponse
 */
export interface ChimeListAttendeesResponse {
  /**
   * @schema ChimeListAttendeesResponse#Attendees
   */
  readonly attendees?: ChimeAttendee[];

  /**
   * @schema ChimeListAttendeesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListBotsRequest
 */
export interface ChimeListBotsRequest {
  /**
   * @schema ChimeListBotsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeListBotsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListBotsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListBotsResponse
 */
export interface ChimeListBotsResponse {
  /**
   * @schema ChimeListBotsResponse#Bots
   */
  readonly bots?: ChimeBot[];

  /**
   * @schema ChimeListBotsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelBansRequest
 */
export interface ChimeListChannelBansRequest {
  /**
   * @schema ChimeListChannelBansRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeListChannelBansRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelBansRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelBansResponse
 */
export interface ChimeListChannelBansResponse {
  /**
   * @schema ChimeListChannelBansResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelBansResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelBansResponse#ChannelBans
   */
  readonly channelBans?: ChimeChannelBanSummary[];

}

/**
 * @schema ChimeListChannelMembershipsRequest
 */
export interface ChimeListChannelMembershipsRequest {
  /**
   * @schema ChimeListChannelMembershipsRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeListChannelMembershipsRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeListChannelMembershipsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelMembershipsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelMembershipsResponse
 */
export interface ChimeListChannelMembershipsResponse {
  /**
   * @schema ChimeListChannelMembershipsResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelMembershipsResponse#ChannelMemberships
   */
  readonly channelMemberships?: ChimeChannelMembershipSummary[];

  /**
   * @schema ChimeListChannelMembershipsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelMembershipsForAppInstanceUserRequest
 */
export interface ChimeListChannelMembershipsForAppInstanceUserRequest {
  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelMembershipsForAppInstanceUserResponse
 */
export interface ChimeListChannelMembershipsForAppInstanceUserResponse {
  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserResponse#ChannelMemberships
   */
  readonly channelMemberships?: ChimeChannelMembershipForAppInstanceUserSummary[];

  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelMessagesRequest
 */
export interface ChimeListChannelMessagesRequest {
  /**
   * @schema ChimeListChannelMessagesRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeListChannelMessagesRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ChimeListChannelMessagesRequest#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema ChimeListChannelMessagesRequest#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema ChimeListChannelMessagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelMessagesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelMessagesResponse
 */
export interface ChimeListChannelMessagesResponse {
  /**
   * @schema ChimeListChannelMessagesResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelMessagesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelMessagesResponse#ChannelMessages
   */
  readonly channelMessages?: ChimeChannelMessageSummary[];

}

/**
 * @schema ChimeListChannelModeratorsRequest
 */
export interface ChimeListChannelModeratorsRequest {
  /**
   * @schema ChimeListChannelModeratorsRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeListChannelModeratorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelModeratorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelModeratorsResponse
 */
export interface ChimeListChannelModeratorsResponse {
  /**
   * @schema ChimeListChannelModeratorsResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelModeratorsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelModeratorsResponse#ChannelModerators
   */
  readonly channelModerators?: ChimeChannelModeratorSummary[];

}

/**
 * @schema ChimeListChannelsRequest
 */
export interface ChimeListChannelsRequest {
  /**
   * @schema ChimeListChannelsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ChimeListChannelsRequest#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeListChannelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelsResponse
 */
export interface ChimeListChannelsResponse {
  /**
   * @schema ChimeListChannelsResponse#Channels
   */
  readonly channels?: ChimeChannelSummary[];

  /**
   * @schema ChimeListChannelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelsModeratedByAppInstanceUserRequest
 */
export interface ChimeListChannelsModeratedByAppInstanceUserRequest {
  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListChannelsModeratedByAppInstanceUserResponse
 */
export interface ChimeListChannelsModeratedByAppInstanceUserResponse {
  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserResponse#Channels
   */
  readonly channels?: ChimeChannelModeratedByAppInstanceUserSummary[];

  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListMeetingTagsRequest
 */
export interface ChimeListMeetingTagsRequest {
  /**
   * @schema ChimeListMeetingTagsRequest#MeetingId
   */
  readonly meetingId: string;

}

/**
 * @schema ChimeListMeetingTagsResponse
 */
export interface ChimeListMeetingTagsResponse {
  /**
   * @schema ChimeListMeetingTagsResponse#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * @schema ChimeListMeetingsRequest
 */
export interface ChimeListMeetingsRequest {
  /**
   * @schema ChimeListMeetingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListMeetingsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ChimeListMeetingsResponse
 */
export interface ChimeListMeetingsResponse {
  /**
   * @schema ChimeListMeetingsResponse#Meetings
   */
  readonly meetings?: ChimeMeeting[];

  /**
   * @schema ChimeListMeetingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListPhoneNumberOrdersRequest
 */
export interface ChimeListPhoneNumberOrdersRequest {
  /**
   * @schema ChimeListPhoneNumberOrdersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListPhoneNumberOrdersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ChimeListPhoneNumberOrdersResponse
 */
export interface ChimeListPhoneNumberOrdersResponse {
  /**
   * @schema ChimeListPhoneNumberOrdersResponse#PhoneNumberOrders
   */
  readonly phoneNumberOrders?: ChimePhoneNumberOrder[];

  /**
   * @schema ChimeListPhoneNumberOrdersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListPhoneNumbersRequest
 */
export interface ChimeListPhoneNumbersRequest {
  /**
   * @schema ChimeListPhoneNumbersRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ChimeListPhoneNumbersRequest#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimeListPhoneNumbersRequest#FilterName
   */
  readonly filterName?: string;

  /**
   * @schema ChimeListPhoneNumbersRequest#FilterValue
   */
  readonly filterValue?: string;

  /**
   * @schema ChimeListPhoneNumbersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListPhoneNumbersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListPhoneNumbersResponse
 */
export interface ChimeListPhoneNumbersResponse {
  /**
   * @schema ChimeListPhoneNumbersResponse#PhoneNumbers
   */
  readonly phoneNumbers?: ChimePhoneNumber[];

  /**
   * @schema ChimeListPhoneNumbersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListProxySessionsRequest
 */
export interface ChimeListProxySessionsRequest {
  /**
   * @schema ChimeListProxySessionsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimeListProxySessionsRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ChimeListProxySessionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListProxySessionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ChimeListProxySessionsResponse
 */
export interface ChimeListProxySessionsResponse {
  /**
   * @schema ChimeListProxySessionsResponse#ProxySessions
   */
  readonly proxySessions?: ChimeProxySession[];

  /**
   * @schema ChimeListProxySessionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListRoomMembershipsRequest
 */
export interface ChimeListRoomMembershipsRequest {
  /**
   * @schema ChimeListRoomMembershipsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeListRoomMembershipsRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema ChimeListRoomMembershipsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListRoomMembershipsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListRoomMembershipsResponse
 */
export interface ChimeListRoomMembershipsResponse {
  /**
   * @schema ChimeListRoomMembershipsResponse#RoomMemberships
   */
  readonly roomMemberships?: ChimeRoomMembership[];

  /**
   * @schema ChimeListRoomMembershipsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListRoomsRequest
 */
export interface ChimeListRoomsRequest {
  /**
   * @schema ChimeListRoomsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeListRoomsRequest#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ChimeListRoomsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListRoomsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListRoomsResponse
 */
export interface ChimeListRoomsResponse {
  /**
   * @schema ChimeListRoomsResponse#Rooms
   */
  readonly rooms?: ChimeRoom[];

  /**
   * @schema ChimeListRoomsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListSipMediaApplicationsRequest
 */
export interface ChimeListSipMediaApplicationsRequest {
  /**
   * @schema ChimeListSipMediaApplicationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListSipMediaApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListSipMediaApplicationsResponse
 */
export interface ChimeListSipMediaApplicationsResponse {
  /**
   * @schema ChimeListSipMediaApplicationsResponse#SipMediaApplications
   */
  readonly sipMediaApplications?: ChimeSipMediaApplication[];

  /**
   * @schema ChimeListSipMediaApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListSipRulesRequest
 */
export interface ChimeListSipRulesRequest {
  /**
   * @schema ChimeListSipRulesRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema ChimeListSipRulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListSipRulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListSipRulesResponse
 */
export interface ChimeListSipRulesResponse {
  /**
   * @schema ChimeListSipRulesResponse#SipRules
   */
  readonly sipRules?: ChimeSipRule[];

  /**
   * @schema ChimeListSipRulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListTagsForResourceRequest
 */
export interface ChimeListTagsForResourceRequest {
  /**
   * @schema ChimeListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema ChimeListTagsForResourceResponse
 */
export interface ChimeListTagsForResourceResponse {
  /**
   * @schema ChimeListTagsForResourceResponse#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * @schema ChimeListUsersRequest
 */
export interface ChimeListUsersRequest {
  /**
   * @schema ChimeListUsersRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeListUsersRequest#UserEmail
   */
  readonly userEmail?: string;

  /**
   * @schema ChimeListUsersRequest#UserType
   */
  readonly userType?: string;

  /**
   * @schema ChimeListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListUsersResponse
 */
export interface ChimeListUsersResponse {
  /**
   * @schema ChimeListUsersResponse#Users
   */
  readonly users?: ChimeUser[];

  /**
   * @schema ChimeListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListVoiceConnectorGroupsRequest
 */
export interface ChimeListVoiceConnectorGroupsRequest {
  /**
   * @schema ChimeListVoiceConnectorGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListVoiceConnectorGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ChimeListVoiceConnectorGroupsResponse
 */
export interface ChimeListVoiceConnectorGroupsResponse {
  /**
   * @schema ChimeListVoiceConnectorGroupsResponse#VoiceConnectorGroups
   */
  readonly voiceConnectorGroups?: ChimeVoiceConnectorGroup[];

  /**
   * @schema ChimeListVoiceConnectorGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeListVoiceConnectorTerminationCredentialsRequest
 */
export interface ChimeListVoiceConnectorTerminationCredentialsRequest {
  /**
   * @schema ChimeListVoiceConnectorTerminationCredentialsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ChimeListVoiceConnectorTerminationCredentialsResponse
 */
export interface ChimeListVoiceConnectorTerminationCredentialsResponse {
  /**
   * @schema ChimeListVoiceConnectorTerminationCredentialsResponse#Usernames
   */
  readonly usernames?: string[];

}

/**
 * @schema ChimeListVoiceConnectorsRequest
 */
export interface ChimeListVoiceConnectorsRequest {
  /**
   * @schema ChimeListVoiceConnectorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListVoiceConnectorsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ChimeListVoiceConnectorsResponse
 */
export interface ChimeListVoiceConnectorsResponse {
  /**
   * @schema ChimeListVoiceConnectorsResponse#VoiceConnectors
   */
  readonly voiceConnectors?: ChimeVoiceConnector[];

  /**
   * @schema ChimeListVoiceConnectorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeLogoutUserRequest
 */
export interface ChimeLogoutUserRequest {
  /**
   * @schema ChimeLogoutUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeLogoutUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema ChimeLogoutUserResponse
 */
export interface ChimeLogoutUserResponse {
}

/**
 * @schema ChimePutAppInstanceRetentionSettingsRequest
 */
export interface ChimePutAppInstanceRetentionSettingsRequest {
  /**
   * @schema ChimePutAppInstanceRetentionSettingsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ChimePutAppInstanceRetentionSettingsRequest#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings: ChimeAppInstanceRetentionSettings;

}

/**
 * @schema ChimePutAppInstanceRetentionSettingsResponse
 */
export interface ChimePutAppInstanceRetentionSettingsResponse {
  /**
   * @schema ChimePutAppInstanceRetentionSettingsResponse#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings?: ChimeAppInstanceRetentionSettings;

  /**
   * @schema ChimePutAppInstanceRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * @schema ChimePutAppInstanceStreamingConfigurationsRequest
 */
export interface ChimePutAppInstanceStreamingConfigurationsRequest {
  /**
   * @schema ChimePutAppInstanceStreamingConfigurationsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ChimePutAppInstanceStreamingConfigurationsRequest#AppInstanceStreamingConfigurations
   */
  readonly appInstanceStreamingConfigurations: ChimeAppInstanceStreamingConfiguration[];

}

/**
 * @schema ChimePutAppInstanceStreamingConfigurationsResponse
 */
export interface ChimePutAppInstanceStreamingConfigurationsResponse {
  /**
   * @schema ChimePutAppInstanceStreamingConfigurationsResponse#AppInstanceStreamingConfigurations
   */
  readonly appInstanceStreamingConfigurations?: ChimeAppInstanceStreamingConfiguration[];

}

/**
 * @schema ChimePutEventsConfigurationRequest
 */
export interface ChimePutEventsConfigurationRequest {
  /**
   * @schema ChimePutEventsConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimePutEventsConfigurationRequest#BotId
   */
  readonly botId: string;

  /**
   * @schema ChimePutEventsConfigurationRequest#OutboundEventsHTTPSEndpoint
   */
  readonly outboundEventsHttpsEndpoint?: string;

  /**
   * @schema ChimePutEventsConfigurationRequest#LambdaFunctionArn
   */
  readonly lambdaFunctionArn?: string;

}

/**
 * @schema ChimePutEventsConfigurationResponse
 */
export interface ChimePutEventsConfigurationResponse {
  /**
   * @schema ChimePutEventsConfigurationResponse#EventsConfiguration
   */
  readonly eventsConfiguration?: ChimeEventsConfiguration;

}

/**
 * @schema ChimePutRetentionSettingsRequest
 */
export interface ChimePutRetentionSettingsRequest {
  /**
   * @schema ChimePutRetentionSettingsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimePutRetentionSettingsRequest#RetentionSettings
   */
  readonly retentionSettings: ChimeRetentionSettings;

}

/**
 * @schema ChimePutRetentionSettingsResponse
 */
export interface ChimePutRetentionSettingsResponse {
  /**
   * @schema ChimePutRetentionSettingsResponse#RetentionSettings
   */
  readonly retentionSettings?: ChimeRetentionSettings;

  /**
   * @schema ChimePutRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * @schema ChimePutSipMediaApplicationLoggingConfigurationRequest
 */
export interface ChimePutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @schema ChimePutSipMediaApplicationLoggingConfigurationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

  /**
   * @schema ChimePutSipMediaApplicationLoggingConfigurationRequest#SipMediaApplicationLoggingConfiguration
   */
  readonly sipMediaApplicationLoggingConfiguration?: ChimeSipMediaApplicationLoggingConfiguration;

}

/**
 * @schema ChimePutSipMediaApplicationLoggingConfigurationResponse
 */
export interface ChimePutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @schema ChimePutSipMediaApplicationLoggingConfigurationResponse#SipMediaApplicationLoggingConfiguration
   */
  readonly sipMediaApplicationLoggingConfiguration?: ChimeSipMediaApplicationLoggingConfiguration;

}

/**
 * @schema ChimePutVoiceConnectorEmergencyCallingConfigurationRequest
 */
export interface ChimePutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @schema ChimePutVoiceConnectorEmergencyCallingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimePutVoiceConnectorEmergencyCallingConfigurationRequest#EmergencyCallingConfiguration
   */
  readonly emergencyCallingConfiguration: ChimeEmergencyCallingConfiguration;

}

/**
 * @schema ChimePutVoiceConnectorEmergencyCallingConfigurationResponse
 */
export interface ChimePutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @schema ChimePutVoiceConnectorEmergencyCallingConfigurationResponse#EmergencyCallingConfiguration
   */
  readonly emergencyCallingConfiguration?: ChimeEmergencyCallingConfiguration;

}

/**
 * @schema ChimePutVoiceConnectorLoggingConfigurationRequest
 */
export interface ChimePutVoiceConnectorLoggingConfigurationRequest {
  /**
   * @schema ChimePutVoiceConnectorLoggingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimePutVoiceConnectorLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration: ChimeLoggingConfiguration;

}

/**
 * @schema ChimePutVoiceConnectorLoggingConfigurationResponse
 */
export interface ChimePutVoiceConnectorLoggingConfigurationResponse {
  /**
   * @schema ChimePutVoiceConnectorLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: ChimeLoggingConfiguration;

}

/**
 * @schema ChimePutVoiceConnectorOriginationRequest
 */
export interface ChimePutVoiceConnectorOriginationRequest {
  /**
   * @schema ChimePutVoiceConnectorOriginationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimePutVoiceConnectorOriginationRequest#Origination
   */
  readonly origination: ChimeOrigination;

}

/**
 * @schema ChimePutVoiceConnectorOriginationResponse
 */
export interface ChimePutVoiceConnectorOriginationResponse {
  /**
   * @schema ChimePutVoiceConnectorOriginationResponse#Origination
   */
  readonly origination?: ChimeOrigination;

}

/**
 * @schema ChimePutVoiceConnectorProxyRequest
 */
export interface ChimePutVoiceConnectorProxyRequest {
  /**
   * @schema ChimePutVoiceConnectorProxyRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimePutVoiceConnectorProxyRequest#DefaultSessionExpiryMinutes
   */
  readonly defaultSessionExpiryMinutes: number;

  /**
   * @schema ChimePutVoiceConnectorProxyRequest#PhoneNumberPoolCountries
   */
  readonly phoneNumberPoolCountries: string[];

  /**
   * @schema ChimePutVoiceConnectorProxyRequest#FallBackPhoneNumber
   */
  readonly fallBackPhoneNumber?: string;

  /**
   * @schema ChimePutVoiceConnectorProxyRequest#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * @schema ChimePutVoiceConnectorProxyResponse
 */
export interface ChimePutVoiceConnectorProxyResponse {
  /**
   * @schema ChimePutVoiceConnectorProxyResponse#Proxy
   */
  readonly proxy?: ChimeProxy;

}

/**
 * @schema ChimePutVoiceConnectorStreamingConfigurationRequest
 */
export interface ChimePutVoiceConnectorStreamingConfigurationRequest {
  /**
   * @schema ChimePutVoiceConnectorStreamingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimePutVoiceConnectorStreamingConfigurationRequest#StreamingConfiguration
   */
  readonly streamingConfiguration: ChimeStreamingConfiguration;

}

/**
 * @schema ChimePutVoiceConnectorStreamingConfigurationResponse
 */
export interface ChimePutVoiceConnectorStreamingConfigurationResponse {
  /**
   * @schema ChimePutVoiceConnectorStreamingConfigurationResponse#StreamingConfiguration
   */
  readonly streamingConfiguration?: ChimeStreamingConfiguration;

}

/**
 * @schema ChimePutVoiceConnectorTerminationRequest
 */
export interface ChimePutVoiceConnectorTerminationRequest {
  /**
   * @schema ChimePutVoiceConnectorTerminationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimePutVoiceConnectorTerminationRequest#Termination
   */
  readonly termination: ChimeTermination;

}

/**
 * @schema ChimePutVoiceConnectorTerminationResponse
 */
export interface ChimePutVoiceConnectorTerminationResponse {
  /**
   * @schema ChimePutVoiceConnectorTerminationResponse#Termination
   */
  readonly termination?: ChimeTermination;

}

/**
 * @schema ChimePutVoiceConnectorTerminationCredentialsRequest
 */
export interface ChimePutVoiceConnectorTerminationCredentialsRequest {
  /**
   * @schema ChimePutVoiceConnectorTerminationCredentialsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimePutVoiceConnectorTerminationCredentialsRequest#Credentials
   */
  readonly credentials?: ChimeCredential[];

}

/**
 * @schema ChimeRedactChannelMessageRequest
 */
export interface ChimeRedactChannelMessageRequest {
  /**
   * @schema ChimeRedactChannelMessageRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeRedactChannelMessageRequest#MessageId
   */
  readonly messageId: string;

}

/**
 * @schema ChimeRedactChannelMessageResponse
 */
export interface ChimeRedactChannelMessageResponse {
  /**
   * @schema ChimeRedactChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeRedactChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * @schema ChimeRedactConversationMessageRequest
 */
export interface ChimeRedactConversationMessageRequest {
  /**
   * @schema ChimeRedactConversationMessageRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeRedactConversationMessageRequest#ConversationId
   */
  readonly conversationId: string;

  /**
   * @schema ChimeRedactConversationMessageRequest#MessageId
   */
  readonly messageId: string;

}

/**
 * @schema ChimeRedactConversationMessageResponse
 */
export interface ChimeRedactConversationMessageResponse {
}

/**
 * @schema ChimeRedactRoomMessageRequest
 */
export interface ChimeRedactRoomMessageRequest {
  /**
   * @schema ChimeRedactRoomMessageRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeRedactRoomMessageRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema ChimeRedactRoomMessageRequest#MessageId
   */
  readonly messageId: string;

}

/**
 * @schema ChimeRedactRoomMessageResponse
 */
export interface ChimeRedactRoomMessageResponse {
}

/**
 * @schema ChimeRegenerateSecurityTokenRequest
 */
export interface ChimeRegenerateSecurityTokenRequest {
  /**
   * @schema ChimeRegenerateSecurityTokenRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeRegenerateSecurityTokenRequest#BotId
   */
  readonly botId: string;

}

/**
 * @schema ChimeRegenerateSecurityTokenResponse
 */
export interface ChimeRegenerateSecurityTokenResponse {
  /**
   * @schema ChimeRegenerateSecurityTokenResponse#Bot
   */
  readonly bot?: ChimeBot;

}

/**
 * @schema ChimeResetPersonalPinRequest
 */
export interface ChimeResetPersonalPinRequest {
  /**
   * @schema ChimeResetPersonalPinRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeResetPersonalPinRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema ChimeResetPersonalPinResponse
 */
export interface ChimeResetPersonalPinResponse {
  /**
   * @schema ChimeResetPersonalPinResponse#User
   */
  readonly user?: ChimeUser;

}

/**
 * @schema ChimeRestorePhoneNumberRequest
 */
export interface ChimeRestorePhoneNumberRequest {
  /**
   * @schema ChimeRestorePhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId: string;

}

/**
 * @schema ChimeRestorePhoneNumberResponse
 */
export interface ChimeRestorePhoneNumberResponse {
  /**
   * @schema ChimeRestorePhoneNumberResponse#PhoneNumber
   */
  readonly phoneNumber?: ChimePhoneNumber;

}

/**
 * @schema ChimeSearchAvailablePhoneNumbersRequest
 */
export interface ChimeSearchAvailablePhoneNumbersRequest {
  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#AreaCode
   */
  readonly areaCode?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#City
   */
  readonly city?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#Country
   */
  readonly country?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#State
   */
  readonly state?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#TollFreePrefix
   */
  readonly tollFreePrefix?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChimeSearchAvailablePhoneNumbersResponse
 */
export interface ChimeSearchAvailablePhoneNumbersResponse {
  /**
   * @schema ChimeSearchAvailablePhoneNumbersResponse#E164PhoneNumbers
   */
  readonly e164PhoneNumbers?: string[];

}

/**
 * @schema ChimeSendChannelMessageRequest
 */
export interface ChimeSendChannelMessageRequest {
  /**
   * @schema ChimeSendChannelMessageRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeSendChannelMessageRequest#Content
   */
  readonly content: string;

  /**
   * @schema ChimeSendChannelMessageRequest#Type
   */
  readonly type: string;

  /**
   * @schema ChimeSendChannelMessageRequest#Persistence
   */
  readonly persistence: string;

  /**
   * @schema ChimeSendChannelMessageRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSendChannelMessageRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema ChimeSendChannelMessageResponse
 */
export interface ChimeSendChannelMessageResponse {
  /**
   * @schema ChimeSendChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSendChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * @schema ChimeTagAttendeeRequest
 */
export interface ChimeTagAttendeeRequest {
  /**
   * @schema ChimeTagAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeTagAttendeeRequest#AttendeeId
   */
  readonly attendeeId: string;

  /**
   * @schema ChimeTagAttendeeRequest#Tags
   */
  readonly tags: ChimeTag[];

}

/**
 * @schema ChimeTagMeetingRequest
 */
export interface ChimeTagMeetingRequest {
  /**
   * @schema ChimeTagMeetingRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeTagMeetingRequest#Tags
   */
  readonly tags: ChimeTag[];

}

/**
 * @schema ChimeTagResourceRequest
 */
export interface ChimeTagResourceRequest {
  /**
   * @schema ChimeTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema ChimeTagResourceRequest#Tags
   */
  readonly tags: ChimeTag[];

}

/**
 * @schema ChimeUntagAttendeeRequest
 */
export interface ChimeUntagAttendeeRequest {
  /**
   * @schema ChimeUntagAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeUntagAttendeeRequest#AttendeeId
   */
  readonly attendeeId: string;

  /**
   * @schema ChimeUntagAttendeeRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ChimeUntagMeetingRequest
 */
export interface ChimeUntagMeetingRequest {
  /**
   * @schema ChimeUntagMeetingRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ChimeUntagMeetingRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ChimeUntagResourceRequest
 */
export interface ChimeUntagResourceRequest {
  /**
   * @schema ChimeUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema ChimeUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ChimeUpdateAccountRequest
 */
export interface ChimeUpdateAccountRequest {
  /**
   * @schema ChimeUpdateAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeUpdateAccountRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema ChimeUpdateAccountResponse
 */
export interface ChimeUpdateAccountResponse {
  /**
   * @schema ChimeUpdateAccountResponse#Account
   */
  readonly account?: ChimeAccount;

}

/**
 * @schema ChimeUpdateAccountSettingsRequest
 */
export interface ChimeUpdateAccountSettingsRequest {
  /**
   * @schema ChimeUpdateAccountSettingsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeUpdateAccountSettingsRequest#AccountSettings
   */
  readonly accountSettings: ChimeAccountSettings;

}

/**
 * @schema ChimeUpdateAccountSettingsResponse
 */
export interface ChimeUpdateAccountSettingsResponse {
}

/**
 * @schema ChimeUpdateAppInstanceRequest
 */
export interface ChimeUpdateAppInstanceRequest {
  /**
   * @schema ChimeUpdateAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ChimeUpdateAppInstanceRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeUpdateAppInstanceRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema ChimeUpdateAppInstanceResponse
 */
export interface ChimeUpdateAppInstanceResponse {
  /**
   * @schema ChimeUpdateAppInstanceResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * @schema ChimeUpdateAppInstanceUserRequest
 */
export interface ChimeUpdateAppInstanceUserRequest {
  /**
   * @schema ChimeUpdateAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn: string;

  /**
   * @schema ChimeUpdateAppInstanceUserRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeUpdateAppInstanceUserRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema ChimeUpdateAppInstanceUserResponse
 */
export interface ChimeUpdateAppInstanceUserResponse {
  /**
   * @schema ChimeUpdateAppInstanceUserResponse#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * @schema ChimeUpdateBotRequest
 */
export interface ChimeUpdateBotRequest {
  /**
   * @schema ChimeUpdateBotRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeUpdateBotRequest#BotId
   */
  readonly botId: string;

  /**
   * @schema ChimeUpdateBotRequest#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * @schema ChimeUpdateBotResponse
 */
export interface ChimeUpdateBotResponse {
  /**
   * @schema ChimeUpdateBotResponse#Bot
   */
  readonly bot?: ChimeBot;

}

/**
 * @schema ChimeUpdateChannelRequest
 */
export interface ChimeUpdateChannelRequest {
  /**
   * @schema ChimeUpdateChannelRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeUpdateChannelRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeUpdateChannelRequest#Mode
   */
  readonly mode: string;

  /**
   * @schema ChimeUpdateChannelRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema ChimeUpdateChannelResponse
 */
export interface ChimeUpdateChannelResponse {
  /**
   * @schema ChimeUpdateChannelResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * @schema ChimeUpdateChannelMessageRequest
 */
export interface ChimeUpdateChannelMessageRequest {
  /**
   * @schema ChimeUpdateChannelMessageRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ChimeUpdateChannelMessageRequest#MessageId
   */
  readonly messageId: string;

  /**
   * @schema ChimeUpdateChannelMessageRequest#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeUpdateChannelMessageRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema ChimeUpdateChannelMessageResponse
 */
export interface ChimeUpdateChannelMessageResponse {
  /**
   * @schema ChimeUpdateChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeUpdateChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * @schema ChimeUpdateChannelReadMarkerRequest
 */
export interface ChimeUpdateChannelReadMarkerRequest {
  /**
   * @schema ChimeUpdateChannelReadMarkerRequest#ChannelArn
   */
  readonly channelArn: string;

}

/**
 * @schema ChimeUpdateChannelReadMarkerResponse
 */
export interface ChimeUpdateChannelReadMarkerResponse {
  /**
   * @schema ChimeUpdateChannelReadMarkerResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * @schema ChimeUpdateGlobalSettingsRequest
 */
export interface ChimeUpdateGlobalSettingsRequest {
  /**
   * @schema ChimeUpdateGlobalSettingsRequest#BusinessCalling
   */
  readonly businessCalling: ChimeBusinessCallingSettings;

  /**
   * @schema ChimeUpdateGlobalSettingsRequest#VoiceConnector
   */
  readonly voiceConnector: ChimeVoiceConnectorSettings;

}

/**
 * @schema ChimeUpdatePhoneNumberRequest
 */
export interface ChimeUpdatePhoneNumberRequest {
  /**
   * @schema ChimeUpdatePhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId: string;

  /**
   * @schema ChimeUpdatePhoneNumberRequest#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimeUpdatePhoneNumberRequest#CallingName
   */
  readonly callingName?: string;

}

/**
 * @schema ChimeUpdatePhoneNumberResponse
 */
export interface ChimeUpdatePhoneNumberResponse {
  /**
   * @schema ChimeUpdatePhoneNumberResponse#PhoneNumber
   */
  readonly phoneNumber?: ChimePhoneNumber;

}

/**
 * @schema ChimeUpdatePhoneNumberSettingsRequest
 */
export interface ChimeUpdatePhoneNumberSettingsRequest {
  /**
   * @schema ChimeUpdatePhoneNumberSettingsRequest#CallingName
   */
  readonly callingName: string;

}

/**
 * @schema ChimeUpdateProxySessionRequest
 */
export interface ChimeUpdateProxySessionRequest {
  /**
   * @schema ChimeUpdateProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimeUpdateProxySessionRequest#ProxySessionId
   */
  readonly proxySessionId: string;

  /**
   * @schema ChimeUpdateProxySessionRequest#Capabilities
   */
  readonly capabilities: string[];

  /**
   * @schema ChimeUpdateProxySessionRequest#ExpiryMinutes
   */
  readonly expiryMinutes?: number;

}

/**
 * @schema ChimeUpdateProxySessionResponse
 */
export interface ChimeUpdateProxySessionResponse {
  /**
   * @schema ChimeUpdateProxySessionResponse#ProxySession
   */
  readonly proxySession?: ChimeProxySession;

}

/**
 * @schema ChimeUpdateRoomRequest
 */
export interface ChimeUpdateRoomRequest {
  /**
   * @schema ChimeUpdateRoomRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeUpdateRoomRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema ChimeUpdateRoomRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema ChimeUpdateRoomResponse
 */
export interface ChimeUpdateRoomResponse {
  /**
   * @schema ChimeUpdateRoomResponse#Room
   */
  readonly room?: ChimeRoom;

}

/**
 * @schema ChimeUpdateRoomMembershipRequest
 */
export interface ChimeUpdateRoomMembershipRequest {
  /**
   * @schema ChimeUpdateRoomMembershipRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeUpdateRoomMembershipRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema ChimeUpdateRoomMembershipRequest#MemberId
   */
  readonly memberId: string;

  /**
   * @schema ChimeUpdateRoomMembershipRequest#Role
   */
  readonly role?: string;

}

/**
 * @schema ChimeUpdateRoomMembershipResponse
 */
export interface ChimeUpdateRoomMembershipResponse {
  /**
   * @schema ChimeUpdateRoomMembershipResponse#RoomMembership
   */
  readonly roomMembership?: ChimeRoomMembership;

}

/**
 * @schema ChimeUpdateSipMediaApplicationRequest
 */
export interface ChimeUpdateSipMediaApplicationRequest {
  /**
   * @schema ChimeUpdateSipMediaApplicationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

  /**
   * @schema ChimeUpdateSipMediaApplicationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeUpdateSipMediaApplicationRequest#Endpoints
   */
  readonly endpoints?: ChimeSipMediaApplicationEndpoint[];

}

/**
 * @schema ChimeUpdateSipMediaApplicationResponse
 */
export interface ChimeUpdateSipMediaApplicationResponse {
  /**
   * @schema ChimeUpdateSipMediaApplicationResponse#SipMediaApplication
   */
  readonly sipMediaApplication?: ChimeSipMediaApplication;

}

/**
 * @schema ChimeUpdateSipRuleRequest
 */
export interface ChimeUpdateSipRuleRequest {
  /**
   * @schema ChimeUpdateSipRuleRequest#SipRuleId
   */
  readonly sipRuleId: string;

  /**
   * @schema ChimeUpdateSipRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeUpdateSipRuleRequest#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeUpdateSipRuleRequest#TargetApplications
   */
  readonly targetApplications?: ChimeSipRuleTargetApplication[];

}

/**
 * @schema ChimeUpdateSipRuleResponse
 */
export interface ChimeUpdateSipRuleResponse {
  /**
   * @schema ChimeUpdateSipRuleResponse#SipRule
   */
  readonly sipRule?: ChimeSipRule;

}

/**
 * @schema ChimeUpdateUserRequest
 */
export interface ChimeUpdateUserRequest {
  /**
   * @schema ChimeUpdateUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeUpdateUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ChimeUpdateUserRequest#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ChimeUpdateUserRequest#UserType
   */
  readonly userType?: string;

  /**
   * @schema ChimeUpdateUserRequest#AlexaForBusinessMetadata
   */
  readonly alexaForBusinessMetadata?: ChimeAlexaForBusinessMetadata;

}

/**
 * @schema ChimeUpdateUserResponse
 */
export interface ChimeUpdateUserResponse {
  /**
   * @schema ChimeUpdateUserResponse#User
   */
  readonly user?: ChimeUser;

}

/**
 * @schema ChimeUpdateUserSettingsRequest
 */
export interface ChimeUpdateUserSettingsRequest {
  /**
   * @schema ChimeUpdateUserSettingsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeUpdateUserSettingsRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ChimeUpdateUserSettingsRequest#UserSettings
   */
  readonly userSettings: ChimeUserSettings;

}

/**
 * @schema ChimeUpdateVoiceConnectorRequest
 */
export interface ChimeUpdateVoiceConnectorRequest {
  /**
   * @schema ChimeUpdateVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimeUpdateVoiceConnectorRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeUpdateVoiceConnectorRequest#RequireEncryption
   */
  readonly requireEncryption: boolean;

}

/**
 * @schema ChimeUpdateVoiceConnectorResponse
 */
export interface ChimeUpdateVoiceConnectorResponse {
  /**
   * @schema ChimeUpdateVoiceConnectorResponse#VoiceConnector
   */
  readonly voiceConnector?: ChimeVoiceConnector;

}

/**
 * @schema ChimeUpdateVoiceConnectorGroupRequest
 */
export interface ChimeUpdateVoiceConnectorGroupRequest {
  /**
   * @schema ChimeUpdateVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId: string;

  /**
   * @schema ChimeUpdateVoiceConnectorGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema ChimeUpdateVoiceConnectorGroupRequest#VoiceConnectorItems
   */
  readonly voiceConnectorItems: ChimeVoiceConnectorItem[];

}

/**
 * @schema ChimeUpdateVoiceConnectorGroupResponse
 */
export interface ChimeUpdateVoiceConnectorGroupResponse {
  /**
   * @schema ChimeUpdateVoiceConnectorGroupResponse#VoiceConnectorGroup
   */
  readonly voiceConnectorGroup?: ChimeVoiceConnectorGroup;

}

/**
 * @schema ChimePhoneNumberError
 */
export interface ChimePhoneNumberError {
  /**
   * @schema ChimePhoneNumberError#PhoneNumberId
   */
  readonly phoneNumberId?: string;

  /**
   * @schema ChimePhoneNumberError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ChimePhoneNumberError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ChimeSigninDelegateGroup
 */
export interface ChimeSigninDelegateGroup {
  /**
   * @schema ChimeSigninDelegateGroup#GroupName
   */
  readonly groupName?: string;

}

/**
 * @schema ChimeCreateAttendeeRequestItem
 */
export interface ChimeCreateAttendeeRequestItem {
  /**
   * @schema ChimeCreateAttendeeRequestItem#ExternalUserId
   */
  readonly externalUserId: string;

  /**
   * @schema ChimeCreateAttendeeRequestItem#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * @schema ChimeAttendee
 */
export interface ChimeAttendee {
  /**
   * @schema ChimeAttendee#ExternalUserId
   */
  readonly externalUserId?: string;

  /**
   * @schema ChimeAttendee#AttendeeId
   */
  readonly attendeeId?: string;

  /**
   * @schema ChimeAttendee#JoinToken
   */
  readonly joinToken?: string;

}

/**
 * @schema ChimeCreateAttendeeError
 */
export interface ChimeCreateAttendeeError {
  /**
   * @schema ChimeCreateAttendeeError#ExternalUserId
   */
  readonly externalUserId?: string;

  /**
   * @schema ChimeCreateAttendeeError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ChimeCreateAttendeeError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ChimeMembershipItem
 */
export interface ChimeMembershipItem {
  /**
   * @schema ChimeMembershipItem#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ChimeMembershipItem#Role
   */
  readonly role?: string;

}

/**
 * @schema ChimeMemberError
 */
export interface ChimeMemberError {
  /**
   * @schema ChimeMemberError#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ChimeMemberError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ChimeMemberError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ChimeUserError
 */
export interface ChimeUserError {
  /**
   * @schema ChimeUserError#UserId
   */
  readonly userId?: string;

  /**
   * @schema ChimeUserError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ChimeUserError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ChimeUpdatePhoneNumberRequestItem
 */
export interface ChimeUpdatePhoneNumberRequestItem {
  /**
   * @schema ChimeUpdatePhoneNumberRequestItem#PhoneNumberId
   */
  readonly phoneNumberId: string;

  /**
   * @schema ChimeUpdatePhoneNumberRequestItem#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimeUpdatePhoneNumberRequestItem#CallingName
   */
  readonly callingName?: string;

}

/**
 * @schema ChimeUpdateUserRequestItem
 */
export interface ChimeUpdateUserRequestItem {
  /**
   * @schema ChimeUpdateUserRequestItem#UserId
   */
  readonly userId: string;

  /**
   * @schema ChimeUpdateUserRequestItem#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ChimeUpdateUserRequestItem#UserType
   */
  readonly userType?: string;

  /**
   * @schema ChimeUpdateUserRequestItem#AlexaForBusinessMetadata
   */
  readonly alexaForBusinessMetadata?: ChimeAlexaForBusinessMetadata;

}

/**
 * @schema ChimeAccount
 */
export interface ChimeAccount {
  /**
   * @schema ChimeAccount#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ChimeAccount#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ChimeAccount#Name
   */
  readonly name: string;

  /**
   * @schema ChimeAccount#AccountType
   */
  readonly accountType?: string;

  /**
   * @schema ChimeAccount#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeAccount#DefaultLicense
   */
  readonly defaultLicense?: string;

  /**
   * @schema ChimeAccount#SupportedLicenses
   */
  readonly supportedLicenses?: string[];

  /**
   * @schema ChimeAccount#SigninDelegateGroups
   */
  readonly signinDelegateGroups?: ChimeSigninDelegateGroup[];

}

/**
 * @schema ChimeIdentity
 */
export interface ChimeIdentity {
  /**
   * @schema ChimeIdentity#Arn
   */
  readonly arn?: string;

  /**
   * @schema ChimeIdentity#Name
   */
  readonly name?: string;

}

/**
 * @schema ChimeTag
 */
export interface ChimeTag {
  /**
   * @schema ChimeTag#Key
   */
  readonly key: string;

  /**
   * @schema ChimeTag#Value
   */
  readonly value: string;

}

/**
 * @schema ChimeBot
 */
export interface ChimeBot {
  /**
   * @schema ChimeBot#BotId
   */
  readonly botId?: string;

  /**
   * @schema ChimeBot#UserId
   */
  readonly userId?: string;

  /**
   * @schema ChimeBot#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ChimeBot#BotType
   */
  readonly botType?: string;

  /**
   * @schema ChimeBot#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeBot#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeBot#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

  /**
   * @schema ChimeBot#BotEmail
   */
  readonly botEmail?: string;

  /**
   * @schema ChimeBot#SecurityToken
   */
  readonly securityToken?: string;

}

/**
 * @schema ChimeMeetingNotificationConfiguration
 */
export interface ChimeMeetingNotificationConfiguration {
  /**
   * @schema ChimeMeetingNotificationConfiguration#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema ChimeMeetingNotificationConfiguration#SqsQueueArn
   */
  readonly sqsQueueArn?: string;

}

/**
 * @schema ChimeMeeting
 */
export interface ChimeMeeting {
  /**
   * @schema ChimeMeeting#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeMeeting#ExternalMeetingId
   */
  readonly externalMeetingId?: string;

  /**
   * @schema ChimeMeeting#MediaPlacement
   */
  readonly mediaPlacement?: ChimeMediaPlacement;

  /**
   * @schema ChimeMeeting#MediaRegion
   */
  readonly mediaRegion?: string;

}

/**
 * @schema ChimePhoneNumberOrder
 */
export interface ChimePhoneNumberOrder {
  /**
   * @schema ChimePhoneNumberOrder#PhoneNumberOrderId
   */
  readonly phoneNumberOrderId?: string;

  /**
   * @schema ChimePhoneNumberOrder#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimePhoneNumberOrder#Status
   */
  readonly status?: string;

  /**
   * @schema ChimePhoneNumberOrder#OrderedPhoneNumbers
   */
  readonly orderedPhoneNumbers?: ChimeOrderedPhoneNumber[];

  /**
   * @schema ChimePhoneNumberOrder#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimePhoneNumberOrder#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema ChimeGeoMatchParams
 */
export interface ChimeGeoMatchParams {
  /**
   * @schema ChimeGeoMatchParams#Country
   */
  readonly country: string;

  /**
   * @schema ChimeGeoMatchParams#AreaCode
   */
  readonly areaCode: string;

}

/**
 * @schema ChimeProxySession
 */
export interface ChimeProxySession {
  /**
   * @schema ChimeProxySession#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeProxySession#ProxySessionId
   */
  readonly proxySessionId?: string;

  /**
   * @schema ChimeProxySession#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeProxySession#Status
   */
  readonly status?: string;

  /**
   * @schema ChimeProxySession#ExpiryMinutes
   */
  readonly expiryMinutes?: number;

  /**
   * @schema ChimeProxySession#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema ChimeProxySession#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeProxySession#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

  /**
   * @schema ChimeProxySession#EndedTimestamp
   */
  readonly endedTimestamp?: string;

  /**
   * @schema ChimeProxySession#Participants
   */
  readonly participants?: ChimeParticipant[];

  /**
   * @schema ChimeProxySession#NumberSelectionBehavior
   */
  readonly numberSelectionBehavior?: string;

  /**
   * @schema ChimeProxySession#GeoMatchLevel
   */
  readonly geoMatchLevel?: string;

  /**
   * @schema ChimeProxySession#GeoMatchParams
   */
  readonly geoMatchParams?: ChimeGeoMatchParams;

}

/**
 * @schema ChimeRoom
 */
export interface ChimeRoom {
  /**
   * @schema ChimeRoom#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeRoom#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeRoom#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeRoom#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema ChimeRoom#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeRoom#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema ChimeRoomMembership
 */
export interface ChimeRoomMembership {
  /**
   * @schema ChimeRoomMembership#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeRoomMembership#Member
   */
  readonly member?: ChimeMember;

  /**
   * @schema ChimeRoomMembership#Role
   */
  readonly role?: string;

  /**
   * @schema ChimeRoomMembership#InvitedBy
   */
  readonly invitedBy?: string;

  /**
   * @schema ChimeRoomMembership#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema ChimeSipMediaApplicationEndpoint
 */
export interface ChimeSipMediaApplicationEndpoint {
  /**
   * @schema ChimeSipMediaApplicationEndpoint#LambdaArn
   */
  readonly lambdaArn?: string;

}

/**
 * @schema ChimeSipMediaApplication
 */
export interface ChimeSipMediaApplication {
  /**
   * @schema ChimeSipMediaApplication#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema ChimeSipMediaApplication#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ChimeSipMediaApplication#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSipMediaApplication#Endpoints
   */
  readonly endpoints?: ChimeSipMediaApplicationEndpoint[];

  /**
   * @schema ChimeSipMediaApplication#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSipMediaApplication#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema ChimeSipMediaApplicationCall
 */
export interface ChimeSipMediaApplicationCall {
  /**
   * @schema ChimeSipMediaApplicationCall#TransactionId
   */
  readonly transactionId?: string;

}

/**
 * @schema ChimeSipRuleTargetApplication
 */
export interface ChimeSipRuleTargetApplication {
  /**
   * @schema ChimeSipRuleTargetApplication#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema ChimeSipRuleTargetApplication#Priority
   */
  readonly priority?: number;

  /**
   * @schema ChimeSipRuleTargetApplication#AwsRegion
   */
  readonly awsRegion?: string;

}

/**
 * @schema ChimeSipRule
 */
export interface ChimeSipRule {
  /**
   * @schema ChimeSipRule#SipRuleId
   */
  readonly sipRuleId?: string;

  /**
   * @schema ChimeSipRule#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSipRule#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeSipRule#TriggerType
   */
  readonly triggerType?: string;

  /**
   * @schema ChimeSipRule#TriggerValue
   */
  readonly triggerValue?: string;

  /**
   * @schema ChimeSipRule#TargetApplications
   */
  readonly targetApplications?: ChimeSipRuleTargetApplication[];

  /**
   * @schema ChimeSipRule#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSipRule#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema ChimeUser
 */
export interface ChimeUser {
  /**
   * @schema ChimeUser#UserId
   */
  readonly userId: string;

  /**
   * @schema ChimeUser#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeUser#PrimaryEmail
   */
  readonly primaryEmail?: string;

  /**
   * @schema ChimeUser#PrimaryProvisionedNumber
   */
  readonly primaryProvisionedNumber?: string;

  /**
   * @schema ChimeUser#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ChimeUser#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ChimeUser#UserType
   */
  readonly userType?: string;

  /**
   * @schema ChimeUser#UserRegistrationStatus
   */
  readonly userRegistrationStatus?: string;

  /**
   * @schema ChimeUser#UserInvitationStatus
   */
  readonly userInvitationStatus?: string;

  /**
   * @schema ChimeUser#RegisteredOn
   */
  readonly registeredOn?: string;

  /**
   * @schema ChimeUser#InvitedOn
   */
  readonly invitedOn?: string;

  /**
   * @schema ChimeUser#AlexaForBusinessMetadata
   */
  readonly alexaForBusinessMetadata?: ChimeAlexaForBusinessMetadata;

  /**
   * @schema ChimeUser#PersonalPIN
   */
  readonly personalPin?: string;

}

/**
 * @schema ChimeVoiceConnector
 */
export interface ChimeVoiceConnector {
  /**
   * @schema ChimeVoiceConnector#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeVoiceConnector#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ChimeVoiceConnector#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeVoiceConnector#OutboundHostName
   */
  readonly outboundHostName?: string;

  /**
   * @schema ChimeVoiceConnector#RequireEncryption
   */
  readonly requireEncryption?: boolean;

  /**
   * @schema ChimeVoiceConnector#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeVoiceConnector#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema ChimeVoiceConnectorItem
 */
export interface ChimeVoiceConnectorItem {
  /**
   * @schema ChimeVoiceConnectorItem#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ChimeVoiceConnectorItem#Priority
   */
  readonly priority: number;

}

/**
 * @schema ChimeVoiceConnectorGroup
 */
export interface ChimeVoiceConnectorGroup {
  /**
   * @schema ChimeVoiceConnectorGroup#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId?: string;

  /**
   * @schema ChimeVoiceConnectorGroup#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeVoiceConnectorGroup#VoiceConnectorItems
   */
  readonly voiceConnectorItems?: ChimeVoiceConnectorItem[];

  /**
   * @schema ChimeVoiceConnectorGroup#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeVoiceConnectorGroup#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema ChimeAppInstance
 */
export interface ChimeAppInstance {
  /**
   * @schema ChimeAppInstance#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeAppInstance#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeAppInstance#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeAppInstance#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeAppInstance#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema ChimeAppInstanceAdmin
 */
export interface ChimeAppInstanceAdmin {
  /**
   * @schema ChimeAppInstanceAdmin#Admin
   */
  readonly admin?: ChimeIdentity;

  /**
   * @schema ChimeAppInstanceAdmin#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeAppInstanceAdmin#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * @schema ChimeAppInstanceUser
 */
export interface ChimeAppInstanceUser {
  /**
   * @schema ChimeAppInstanceUser#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeAppInstanceUser#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeAppInstanceUser#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeAppInstanceUser#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeAppInstanceUser#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema ChimeChannel
 */
export interface ChimeChannel {
  /**
   * @schema ChimeChannel#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeChannel#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannel#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeChannel#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeChannel#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeChannel#CreatedBy
   */
  readonly createdBy?: ChimeIdentity;

  /**
   * @schema ChimeChannel#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannel#LastMessageTimestamp
   */
  readonly lastMessageTimestamp?: string;

  /**
   * @schema ChimeChannel#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema ChimeChannelBan
 */
export interface ChimeChannelBan {
  /**
   * @schema ChimeChannelBan#Member
   */
  readonly member?: ChimeIdentity;

  /**
   * @schema ChimeChannelBan#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannelBan#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannelBan#CreatedBy
   */
  readonly createdBy?: ChimeIdentity;

}

/**
 * @schema ChimeChannelMembership
 */
export interface ChimeChannelMembership {
  /**
   * @schema ChimeChannelMembership#InvitedBy
   */
  readonly invitedBy?: ChimeIdentity;

  /**
   * @schema ChimeChannelMembership#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeChannelMembership#Member
   */
  readonly member?: ChimeIdentity;

  /**
   * @schema ChimeChannelMembership#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannelMembership#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannelMembership#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema ChimeChannelMembershipForAppInstanceUserSummary
 */
export interface ChimeChannelMembershipForAppInstanceUserSummary {
  /**
   * @schema ChimeChannelMembershipForAppInstanceUserSummary#ChannelSummary
   */
  readonly channelSummary?: ChimeChannelSummary;

  /**
   * @schema ChimeChannelMembershipForAppInstanceUserSummary#AppInstanceUserMembershipSummary
   */
  readonly appInstanceUserMembershipSummary?: ChimeAppInstanceUserMembershipSummary;

}

/**
 * @schema ChimeChannelModeratedByAppInstanceUserSummary
 */
export interface ChimeChannelModeratedByAppInstanceUserSummary {
  /**
   * @schema ChimeChannelModeratedByAppInstanceUserSummary#ChannelSummary
   */
  readonly channelSummary?: ChimeChannelSummary;

}

/**
 * @schema ChimeChannelModerator
 */
export interface ChimeChannelModerator {
  /**
   * @schema ChimeChannelModerator#Moderator
   */
  readonly moderator?: ChimeIdentity;

  /**
   * @schema ChimeChannelModerator#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannelModerator#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannelModerator#CreatedBy
   */
  readonly createdBy?: ChimeIdentity;

}

/**
 * @schema ChimeAccountSettings
 */
export interface ChimeAccountSettings {
  /**
   * @schema ChimeAccountSettings#DisableRemoteControl
   */
  readonly disableRemoteControl?: boolean;

  /**
   * @schema ChimeAccountSettings#EnableDialOut
   */
  readonly enableDialOut?: boolean;

}

/**
 * @schema ChimeAppInstanceRetentionSettings
 */
export interface ChimeAppInstanceRetentionSettings {
  /**
   * @schema ChimeAppInstanceRetentionSettings#ChannelRetentionSettings
   */
  readonly channelRetentionSettings?: ChimeChannelRetentionSettings;

}

/**
 * @schema ChimeAppInstanceStreamingConfiguration
 */
export interface ChimeAppInstanceStreamingConfiguration {
  /**
   * @schema ChimeAppInstanceStreamingConfiguration#AppInstanceDataType
   */
  readonly appInstanceDataType: string;

  /**
   * @schema ChimeAppInstanceStreamingConfiguration#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ChimeChannelMessage
 */
export interface ChimeChannelMessage {
  /**
   * @schema ChimeChannelMessage#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannelMessage#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeChannelMessage#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeChannelMessage#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeChannelMessage#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeChannelMessage#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannelMessage#LastEditedTimestamp
   */
  readonly lastEditedTimestamp?: string;

  /**
   * @schema ChimeChannelMessage#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ChimeChannelMessage#Sender
   */
  readonly sender?: ChimeIdentity;

  /**
   * @schema ChimeChannelMessage#Redacted
   */
  readonly redacted?: boolean;

  /**
   * @schema ChimeChannelMessage#Persistence
   */
  readonly persistence?: string;

}

/**
 * @schema ChimeEventsConfiguration
 */
export interface ChimeEventsConfiguration {
  /**
   * @schema ChimeEventsConfiguration#BotId
   */
  readonly botId?: string;

  /**
   * @schema ChimeEventsConfiguration#OutboundEventsHTTPSEndpoint
   */
  readonly outboundEventsHttpsEndpoint?: string;

  /**
   * @schema ChimeEventsConfiguration#LambdaFunctionArn
   */
  readonly lambdaFunctionArn?: string;

}

/**
 * @schema ChimeBusinessCallingSettings
 */
export interface ChimeBusinessCallingSettings {
  /**
   * @schema ChimeBusinessCallingSettings#CdrBucket
   */
  readonly cdrBucket?: string;

}

/**
 * @schema ChimeVoiceConnectorSettings
 */
export interface ChimeVoiceConnectorSettings {
  /**
   * @schema ChimeVoiceConnectorSettings#CdrBucket
   */
  readonly cdrBucket?: string;

}

/**
 * @schema ChimeMessagingSessionEndpoint
 */
export interface ChimeMessagingSessionEndpoint {
  /**
   * @schema ChimeMessagingSessionEndpoint#Url
   */
  readonly url?: string;

}

/**
 * @schema ChimePhoneNumber
 */
export interface ChimePhoneNumber {
  /**
   * @schema ChimePhoneNumber#PhoneNumberId
   */
  readonly phoneNumberId?: string;

  /**
   * @schema ChimePhoneNumber#E164PhoneNumber
   */
  readonly e164PhoneNumber?: string;

  /**
   * @schema ChimePhoneNumber#Type
   */
  readonly type?: string;

  /**
   * @schema ChimePhoneNumber#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimePhoneNumber#Status
   */
  readonly status?: string;

  /**
   * @schema ChimePhoneNumber#Capabilities
   */
  readonly capabilities?: ChimePhoneNumberCapabilities;

  /**
   * @schema ChimePhoneNumber#Associations
   */
  readonly associations?: ChimePhoneNumberAssociation[];

  /**
   * @schema ChimePhoneNumber#CallingName
   */
  readonly callingName?: string;

  /**
   * @schema ChimePhoneNumber#CallingNameStatus
   */
  readonly callingNameStatus?: string;

  /**
   * @schema ChimePhoneNumber#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimePhoneNumber#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

  /**
   * @schema ChimePhoneNumber#DeletionTimestamp
   */
  readonly deletionTimestamp?: string;

}

/**
 * @schema ChimeRetentionSettings
 */
export interface ChimeRetentionSettings {
  /**
   * @schema ChimeRetentionSettings#RoomRetentionSettings
   */
  readonly roomRetentionSettings?: ChimeRoomRetentionSettings;

  /**
   * @schema ChimeRetentionSettings#ConversationRetentionSettings
   */
  readonly conversationRetentionSettings?: ChimeConversationRetentionSettings;

}

/**
 * @schema ChimeSipMediaApplicationLoggingConfiguration
 */
export interface ChimeSipMediaApplicationLoggingConfiguration {
  /**
   * @schema ChimeSipMediaApplicationLoggingConfiguration#EnableSipMediaApplicationMessageLogs
   */
  readonly enableSipMediaApplicationMessageLogs?: boolean;

}

/**
 * @schema ChimeUserSettings
 */
export interface ChimeUserSettings {
  /**
   * @schema ChimeUserSettings#Telephony
   */
  readonly telephony: ChimeTelephonySettings;

}

/**
 * @schema ChimeEmergencyCallingConfiguration
 */
export interface ChimeEmergencyCallingConfiguration {
  /**
   * @schema ChimeEmergencyCallingConfiguration#DNIS
   */
  readonly dnis?: ChimeDnisEmergencyCallingConfiguration[];

}

/**
 * @schema ChimeLoggingConfiguration
 */
export interface ChimeLoggingConfiguration {
  /**
   * @schema ChimeLoggingConfiguration#EnableSIPLogs
   */
  readonly enableSipLogs?: boolean;

}

/**
 * @schema ChimeOrigination
 */
export interface ChimeOrigination {
  /**
   * @schema ChimeOrigination#Routes
   */
  readonly routes?: ChimeOriginationRoute[];

  /**
   * @schema ChimeOrigination#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * @schema ChimeProxy
 */
export interface ChimeProxy {
  /**
   * @schema ChimeProxy#DefaultSessionExpiryMinutes
   */
  readonly defaultSessionExpiryMinutes?: number;

  /**
   * @schema ChimeProxy#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeProxy#FallBackPhoneNumber
   */
  readonly fallBackPhoneNumber?: string;

  /**
   * @schema ChimeProxy#PhoneNumberCountries
   */
  readonly phoneNumberCountries?: string[];

}

/**
 * @schema ChimeStreamingConfiguration
 */
export interface ChimeStreamingConfiguration {
  /**
   * @schema ChimeStreamingConfiguration#DataRetentionInHours
   */
  readonly dataRetentionInHours: number;

  /**
   * @schema ChimeStreamingConfiguration#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeStreamingConfiguration#StreamingNotificationTargets
   */
  readonly streamingNotificationTargets?: ChimeStreamingNotificationTarget[];

}

/**
 * @schema ChimeTermination
 */
export interface ChimeTermination {
  /**
   * @schema ChimeTermination#CpsLimit
   */
  readonly cpsLimit?: number;

  /**
   * @schema ChimeTermination#DefaultPhoneNumber
   */
  readonly defaultPhoneNumber?: string;

  /**
   * @schema ChimeTermination#CallingRegions
   */
  readonly callingRegions?: string[];

  /**
   * @schema ChimeTermination#CidrAllowedList
   */
  readonly cidrAllowedList?: string[];

  /**
   * @schema ChimeTermination#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * @schema ChimeTerminationHealth
 */
export interface ChimeTerminationHealth {
  /**
   * @schema ChimeTerminationHealth#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema ChimeTerminationHealth#Source
   */
  readonly source?: string;

}

/**
 * @schema ChimeInvite
 */
export interface ChimeInvite {
  /**
   * @schema ChimeInvite#InviteId
   */
  readonly inviteId?: string;

  /**
   * @schema ChimeInvite#Status
   */
  readonly status?: string;

  /**
   * @schema ChimeInvite#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema ChimeInvite#EmailStatus
   */
  readonly emailStatus?: string;

}

/**
 * @schema ChimeAppInstanceAdminSummary
 */
export interface ChimeAppInstanceAdminSummary {
  /**
   * @schema ChimeAppInstanceAdminSummary#Admin
   */
  readonly admin?: ChimeIdentity;

}

/**
 * @schema ChimeAppInstanceUserSummary
 */
export interface ChimeAppInstanceUserSummary {
  /**
   * @schema ChimeAppInstanceUserSummary#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeAppInstanceUserSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeAppInstanceUserSummary#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema ChimeAppInstanceSummary
 */
export interface ChimeAppInstanceSummary {
  /**
   * @schema ChimeAppInstanceSummary#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeAppInstanceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeAppInstanceSummary#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema ChimeChannelBanSummary
 */
export interface ChimeChannelBanSummary {
  /**
   * @schema ChimeChannelBanSummary#Member
   */
  readonly member?: ChimeIdentity;

}

/**
 * @schema ChimeChannelMembershipSummary
 */
export interface ChimeChannelMembershipSummary {
  /**
   * @schema ChimeChannelMembershipSummary#Member
   */
  readonly member?: ChimeIdentity;

}

/**
 * @schema ChimeChannelMessageSummary
 */
export interface ChimeChannelMessageSummary {
  /**
   * @schema ChimeChannelMessageSummary#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeChannelMessageSummary#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeChannelMessageSummary#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeChannelMessageSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeChannelMessageSummary#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannelMessageSummary#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ChimeChannelMessageSummary#LastEditedTimestamp
   */
  readonly lastEditedTimestamp?: string;

  /**
   * @schema ChimeChannelMessageSummary#Sender
   */
  readonly sender?: ChimeIdentity;

  /**
   * @schema ChimeChannelMessageSummary#Redacted
   */
  readonly redacted?: boolean;

}

/**
 * @schema ChimeChannelModeratorSummary
 */
export interface ChimeChannelModeratorSummary {
  /**
   * @schema ChimeChannelModeratorSummary#Moderator
   */
  readonly moderator?: ChimeIdentity;

}

/**
 * @schema ChimeChannelSummary
 */
export interface ChimeChannelSummary {
  /**
   * @schema ChimeChannelSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeChannelSummary#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannelSummary#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeChannelSummary#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeChannelSummary#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeChannelSummary#LastMessageTimestamp
   */
  readonly lastMessageTimestamp?: string;

}

/**
 * @schema ChimeCredential
 */
export interface ChimeCredential {
  /**
   * @schema ChimeCredential#Username
   */
  readonly username?: string;

  /**
   * @schema ChimeCredential#Password
   */
  readonly password?: string;

}

/**
 * @schema ChimeAlexaForBusinessMetadata
 */
export interface ChimeAlexaForBusinessMetadata {
  /**
   * @schema ChimeAlexaForBusinessMetadata#IsAlexaForBusinessEnabled
   */
  readonly isAlexaForBusinessEnabled?: boolean;

  /**
   * @schema ChimeAlexaForBusinessMetadata#AlexaForBusinessRoomArn
   */
  readonly alexaForBusinessRoomArn?: string;

}

/**
 * @schema ChimeMediaPlacement
 */
export interface ChimeMediaPlacement {
  /**
   * @schema ChimeMediaPlacement#AudioHostUrl
   */
  readonly audioHostUrl?: string;

  /**
   * @schema ChimeMediaPlacement#AudioFallbackUrl
   */
  readonly audioFallbackUrl?: string;

  /**
   * @schema ChimeMediaPlacement#ScreenDataUrl
   */
  readonly screenDataUrl?: string;

  /**
   * @schema ChimeMediaPlacement#ScreenSharingUrl
   */
  readonly screenSharingUrl?: string;

  /**
   * @schema ChimeMediaPlacement#ScreenViewingUrl
   */
  readonly screenViewingUrl?: string;

  /**
   * @schema ChimeMediaPlacement#SignalingUrl
   */
  readonly signalingUrl?: string;

  /**
   * @schema ChimeMediaPlacement#TurnControlUrl
   */
  readonly turnControlUrl?: string;

}

/**
 * @schema ChimeOrderedPhoneNumber
 */
export interface ChimeOrderedPhoneNumber {
  /**
   * @schema ChimeOrderedPhoneNumber#E164PhoneNumber
   */
  readonly e164PhoneNumber?: string;

  /**
   * @schema ChimeOrderedPhoneNumber#Status
   */
  readonly status?: string;

}

/**
 * @schema ChimeParticipant
 */
export interface ChimeParticipant {
  /**
   * @schema ChimeParticipant#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema ChimeParticipant#ProxyPhoneNumber
   */
  readonly proxyPhoneNumber?: string;

}

/**
 * @schema ChimeMember
 */
export interface ChimeMember {
  /**
   * @schema ChimeMember#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ChimeMember#MemberType
   */
  readonly memberType?: string;

  /**
   * @schema ChimeMember#Email
   */
  readonly email?: string;

  /**
   * @schema ChimeMember#FullName
   */
  readonly fullName?: string;

  /**
   * @schema ChimeMember#AccountId
   */
  readonly accountId?: string;

}

/**
 * @schema ChimeAppInstanceUserMembershipSummary
 */
export interface ChimeAppInstanceUserMembershipSummary {
  /**
   * @schema ChimeAppInstanceUserMembershipSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeAppInstanceUserMembershipSummary#ReadMarkerTimestamp
   */
  readonly readMarkerTimestamp?: string;

}

/**
 * @schema ChimeChannelRetentionSettings
 */
export interface ChimeChannelRetentionSettings {
  /**
   * @schema ChimeChannelRetentionSettings#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * @schema ChimePhoneNumberCapabilities
 */
export interface ChimePhoneNumberCapabilities {
  /**
   * @schema ChimePhoneNumberCapabilities#InboundCall
   */
  readonly inboundCall?: boolean;

  /**
   * @schema ChimePhoneNumberCapabilities#OutboundCall
   */
  readonly outboundCall?: boolean;

  /**
   * @schema ChimePhoneNumberCapabilities#InboundSMS
   */
  readonly inboundSms?: boolean;

  /**
   * @schema ChimePhoneNumberCapabilities#OutboundSMS
   */
  readonly outboundSms?: boolean;

  /**
   * @schema ChimePhoneNumberCapabilities#InboundMMS
   */
  readonly inboundMms?: boolean;

  /**
   * @schema ChimePhoneNumberCapabilities#OutboundMMS
   */
  readonly outboundMms?: boolean;

}

/**
 * @schema ChimePhoneNumberAssociation
 */
export interface ChimePhoneNumberAssociation {
  /**
   * @schema ChimePhoneNumberAssociation#Value
   */
  readonly value?: string;

  /**
   * @schema ChimePhoneNumberAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema ChimePhoneNumberAssociation#AssociatedTimestamp
   */
  readonly associatedTimestamp?: string;

}

/**
 * @schema ChimeRoomRetentionSettings
 */
export interface ChimeRoomRetentionSettings {
  /**
   * @schema ChimeRoomRetentionSettings#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * @schema ChimeConversationRetentionSettings
 */
export interface ChimeConversationRetentionSettings {
  /**
   * @schema ChimeConversationRetentionSettings#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * @schema ChimeTelephonySettings
 */
export interface ChimeTelephonySettings {
  /**
   * @schema ChimeTelephonySettings#InboundCalling
   */
  readonly inboundCalling: boolean;

  /**
   * @schema ChimeTelephonySettings#OutboundCalling
   */
  readonly outboundCalling: boolean;

  /**
   * @schema ChimeTelephonySettings#SMS
   */
  readonly sms: boolean;

}

/**
 * @schema ChimeDnisEmergencyCallingConfiguration
 */
export interface ChimeDnisEmergencyCallingConfiguration {
  /**
   * @schema ChimeDnisEmergencyCallingConfiguration#EmergencyPhoneNumber
   */
  readonly emergencyPhoneNumber: string;

  /**
   * @schema ChimeDnisEmergencyCallingConfiguration#TestPhoneNumber
   */
  readonly testPhoneNumber?: string;

  /**
   * @schema ChimeDnisEmergencyCallingConfiguration#CallingCountry
   */
  readonly callingCountry: string;

}

/**
 * @schema ChimeOriginationRoute
 */
export interface ChimeOriginationRoute {
  /**
   * @schema ChimeOriginationRoute#Host
   */
  readonly host?: string;

  /**
   * @schema ChimeOriginationRoute#Port
   */
  readonly port?: number;

  /**
   * @schema ChimeOriginationRoute#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema ChimeOriginationRoute#Priority
   */
  readonly priority?: number;

  /**
   * @schema ChimeOriginationRoute#Weight
   */
  readonly weight?: number;

}

/**
 * @schema ChimeStreamingNotificationTarget
 */
export interface ChimeStreamingNotificationTarget {
  /**
   * @schema ChimeStreamingNotificationTarget#NotificationTarget
   */
  readonly notificationTarget: string;

}
