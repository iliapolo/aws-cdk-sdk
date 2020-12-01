/**
 * @schema AssociatePhoneNumberWithUserRequest
 */
export interface AssociatePhoneNumberWithUserRequest {
  /**
   * @schema AssociatePhoneNumberWithUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema AssociatePhoneNumberWithUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema AssociatePhoneNumberWithUserRequest#E164PhoneNumber
   */
  readonly e164PhoneNumber: string;

}

/**
 * @schema AssociatePhoneNumberWithUserResponse
 */
export interface AssociatePhoneNumberWithUserResponse {
}

/**
 * @schema AssociatePhoneNumbersWithVoiceConnectorRequest
 */
export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * @schema AssociatePhoneNumbersWithVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema AssociatePhoneNumbersWithVoiceConnectorRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers: string[];

  /**
   * @schema AssociatePhoneNumbersWithVoiceConnectorRequest#ForceAssociate
   */
  readonly forceAssociate?: boolean;

}

/**
 * @schema AssociatePhoneNumbersWithVoiceConnectorResponse
 */
export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * @schema AssociatePhoneNumbersWithVoiceConnectorResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: PhoneNumberError[];

}

/**
 * @schema AssociatePhoneNumbersWithVoiceConnectorGroupRequest
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * @schema AssociatePhoneNumbersWithVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId: string;

  /**
   * @schema AssociatePhoneNumbersWithVoiceConnectorGroupRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers: string[];

  /**
   * @schema AssociatePhoneNumbersWithVoiceConnectorGroupRequest#ForceAssociate
   */
  readonly forceAssociate?: boolean;

}

/**
 * @schema AssociatePhoneNumbersWithVoiceConnectorGroupResponse
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * @schema AssociatePhoneNumbersWithVoiceConnectorGroupResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: PhoneNumberError[];

}

/**
 * @schema AssociateSigninDelegateGroupsWithAccountRequest
 */
export interface AssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * @schema AssociateSigninDelegateGroupsWithAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema AssociateSigninDelegateGroupsWithAccountRequest#SigninDelegateGroups
   */
  readonly signinDelegateGroups: SigninDelegateGroup[];

}

/**
 * @schema AssociateSigninDelegateGroupsWithAccountResponse
 */
export interface AssociateSigninDelegateGroupsWithAccountResponse {
}

/**
 * @schema BatchCreateAttendeeRequest
 */
export interface BatchCreateAttendeeRequest {
  /**
   * @schema BatchCreateAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema BatchCreateAttendeeRequest#Attendees
   */
  readonly attendees: CreateAttendeeRequestItem[];

}

/**
 * @schema BatchCreateAttendeeResponse
 */
export interface BatchCreateAttendeeResponse {
  /**
   * @schema BatchCreateAttendeeResponse#Attendees
   */
  readonly attendees?: Attendee[];

  /**
   * @schema BatchCreateAttendeeResponse#Errors
   */
  readonly errors?: CreateAttendeeError[];

}

/**
 * @schema BatchCreateRoomMembershipRequest
 */
export interface BatchCreateRoomMembershipRequest {
  /**
   * @schema BatchCreateRoomMembershipRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BatchCreateRoomMembershipRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema BatchCreateRoomMembershipRequest#MembershipItemList
   */
  readonly membershipItemList: MembershipItem[];

}

/**
 * @schema BatchCreateRoomMembershipResponse
 */
export interface BatchCreateRoomMembershipResponse {
  /**
   * @schema BatchCreateRoomMembershipResponse#Errors
   */
  readonly errors?: MemberError[];

}

/**
 * @schema BatchDeletePhoneNumberRequest
 */
export interface BatchDeletePhoneNumberRequest {
  /**
   * @schema BatchDeletePhoneNumberRequest#PhoneNumberIds
   */
  readonly phoneNumberIds: string[];

}

/**
 * @schema BatchDeletePhoneNumberResponse
 */
export interface BatchDeletePhoneNumberResponse {
  /**
   * @schema BatchDeletePhoneNumberResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: PhoneNumberError[];

}

/**
 * @schema BatchSuspendUserRequest
 */
export interface BatchSuspendUserRequest {
  /**
   * @schema BatchSuspendUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BatchSuspendUserRequest#UserIdList
   */
  readonly userIdList: string[];

}

/**
 * @schema BatchSuspendUserResponse
 */
export interface BatchSuspendUserResponse {
  /**
   * @schema BatchSuspendUserResponse#UserErrors
   */
  readonly userErrors?: UserError[];

}

/**
 * @schema BatchUnsuspendUserRequest
 */
export interface BatchUnsuspendUserRequest {
  /**
   * @schema BatchUnsuspendUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BatchUnsuspendUserRequest#UserIdList
   */
  readonly userIdList: string[];

}

/**
 * @schema BatchUnsuspendUserResponse
 */
export interface BatchUnsuspendUserResponse {
  /**
   * @schema BatchUnsuspendUserResponse#UserErrors
   */
  readonly userErrors?: UserError[];

}

/**
 * @schema BatchUpdatePhoneNumberRequest
 */
export interface BatchUpdatePhoneNumberRequest {
  /**
   * @schema BatchUpdatePhoneNumberRequest#UpdatePhoneNumberRequestItems
   */
  readonly updatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[];

}

/**
 * @schema BatchUpdatePhoneNumberResponse
 */
export interface BatchUpdatePhoneNumberResponse {
  /**
   * @schema BatchUpdatePhoneNumberResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: PhoneNumberError[];

}

/**
 * @schema BatchUpdateUserRequest
 */
export interface BatchUpdateUserRequest {
  /**
   * @schema BatchUpdateUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BatchUpdateUserRequest#UpdateUserRequestItems
   */
  readonly updateUserRequestItems: UpdateUserRequestItem[];

}

/**
 * @schema BatchUpdateUserResponse
 */
export interface BatchUpdateUserResponse {
  /**
   * @schema BatchUpdateUserResponse#UserErrors
   */
  readonly userErrors?: UserError[];

}

/**
 * @schema CreateAccountRequest
 */
export interface CreateAccountRequest {
  /**
   * @schema CreateAccountRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CreateAccountResponse
 */
export interface CreateAccountResponse {
  /**
   * @schema CreateAccountResponse#Account
   */
  readonly account?: Account;

}

/**
 * @schema CreateAppInstanceRequest
 */
export interface CreateAppInstanceRequest {
  /**
   * @schema CreateAppInstanceRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateAppInstanceRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema CreateAppInstanceRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema CreateAppInstanceResponse
 */
export interface CreateAppInstanceResponse {
  /**
   * @schema CreateAppInstanceResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * @schema CreateAppInstanceAdminRequest
 */
export interface CreateAppInstanceAdminRequest {
  /**
   * @schema CreateAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn: string;

  /**
   * @schema CreateAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema CreateAppInstanceAdminResponse
 */
export interface CreateAppInstanceAdminResponse {
  /**
   * @schema CreateAppInstanceAdminResponse#AppInstanceAdmin
   */
  readonly appInstanceAdmin?: Identity;

  /**
   * @schema CreateAppInstanceAdminResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * @schema CreateAppInstanceUserRequest
 */
export interface CreateAppInstanceUserRequest {
  /**
   * @schema CreateAppInstanceUserRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema CreateAppInstanceUserRequest#AppInstanceUserId
   */
  readonly appInstanceUserId: string;

  /**
   * @schema CreateAppInstanceUserRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateAppInstanceUserRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema CreateAppInstanceUserRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema CreateAppInstanceUserResponse
 */
export interface CreateAppInstanceUserResponse {
  /**
   * @schema CreateAppInstanceUserResponse#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * @schema CreateAttendeeRequest
 */
export interface CreateAttendeeRequest {
  /**
   * @schema CreateAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema CreateAttendeeRequest#ExternalUserId
   */
  readonly externalUserId: string;

  /**
   * @schema CreateAttendeeRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateAttendeeResponse
 */
export interface CreateAttendeeResponse {
  /**
   * @schema CreateAttendeeResponse#Attendee
   */
  readonly attendee?: Attendee;

}

/**
 * @schema CreateBotRequest
 */
export interface CreateBotRequest {
  /**
   * @schema CreateBotRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateBotRequest#DisplayName
   */
  readonly displayName: string;

  /**
   * @schema CreateBotRequest#Domain
   */
  readonly domain?: string;

}

/**
 * @schema CreateBotResponse
 */
export interface CreateBotResponse {
  /**
   * @schema CreateBotResponse#Bot
   */
  readonly bot?: Bot;

}

/**
 * @schema CreateChannelRequest
 */
export interface CreateChannelRequest {
  /**
   * @schema CreateChannelRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema CreateChannelRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateChannelRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema CreateChannelRequest#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema CreateChannelRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema CreateChannelRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema CreateChannelRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateChannelResponse
 */
export interface CreateChannelResponse {
  /**
   * @schema CreateChannelResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * @schema CreateChannelBanRequest
 */
export interface CreateChannelBanRequest {
  /**
   * @schema CreateChannelBanRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema CreateChannelBanRequest#MemberArn
   */
  readonly memberArn: string;

}

/**
 * @schema CreateChannelBanResponse
 */
export interface CreateChannelBanResponse {
  /**
   * @schema CreateChannelBanResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema CreateChannelBanResponse#Member
   */
  readonly member?: Identity;

}

/**
 * @schema CreateChannelMembershipRequest
 */
export interface CreateChannelMembershipRequest {
  /**
   * @schema CreateChannelMembershipRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema CreateChannelMembershipRequest#MemberArn
   */
  readonly memberArn: string;

  /**
   * @schema CreateChannelMembershipRequest#Type
   */
  readonly type: string;

}

/**
 * @schema CreateChannelMembershipResponse
 */
export interface CreateChannelMembershipResponse {
  /**
   * @schema CreateChannelMembershipResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema CreateChannelMembershipResponse#Member
   */
  readonly member?: Identity;

}

/**
 * @schema CreateChannelModeratorRequest
 */
export interface CreateChannelModeratorRequest {
  /**
   * @schema CreateChannelModeratorRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema CreateChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn: string;

}

/**
 * @schema CreateChannelModeratorResponse
 */
export interface CreateChannelModeratorResponse {
  /**
   * @schema CreateChannelModeratorResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema CreateChannelModeratorResponse#ChannelModerator
   */
  readonly channelModerator?: Identity;

}

/**
 * @schema CreateMeetingRequest
 */
export interface CreateMeetingRequest {
  /**
   * @schema CreateMeetingRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema CreateMeetingRequest#ExternalMeetingId
   */
  readonly externalMeetingId?: string;

  /**
   * @schema CreateMeetingRequest#MeetingHostId
   */
  readonly meetingHostId?: string;

  /**
   * @schema CreateMeetingRequest#MediaRegion
   */
  readonly mediaRegion?: string;

  /**
   * @schema CreateMeetingRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateMeetingRequest#NotificationsConfiguration
   */
  readonly notificationsConfiguration?: MeetingNotificationConfiguration;

}

/**
 * @schema CreateMeetingResponse
 */
export interface CreateMeetingResponse {
  /**
   * @schema CreateMeetingResponse#Meeting
   */
  readonly meeting?: Meeting;

}

/**
 * @schema CreateMeetingDialOutRequest
 */
export interface CreateMeetingDialOutRequest {
  /**
   * @schema CreateMeetingDialOutRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema CreateMeetingDialOutRequest#FromPhoneNumber
   */
  readonly fromPhoneNumber: string;

  /**
   * @schema CreateMeetingDialOutRequest#ToPhoneNumber
   */
  readonly toPhoneNumber: string;

  /**
   * @schema CreateMeetingDialOutRequest#JoinToken
   */
  readonly joinToken: string;

}

/**
 * @schema CreateMeetingDialOutResponse
 */
export interface CreateMeetingDialOutResponse {
  /**
   * @schema CreateMeetingDialOutResponse#TransactionId
   */
  readonly transactionId?: string;

}

/**
 * @schema CreateMeetingWithAttendeesRequest
 */
export interface CreateMeetingWithAttendeesRequest {
  /**
   * @schema CreateMeetingWithAttendeesRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema CreateMeetingWithAttendeesRequest#ExternalMeetingId
   */
  readonly externalMeetingId?: string;

  /**
   * @schema CreateMeetingWithAttendeesRequest#MeetingHostId
   */
  readonly meetingHostId?: string;

  /**
   * @schema CreateMeetingWithAttendeesRequest#MediaRegion
   */
  readonly mediaRegion?: string;

  /**
   * @schema CreateMeetingWithAttendeesRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateMeetingWithAttendeesRequest#NotificationsConfiguration
   */
  readonly notificationsConfiguration?: MeetingNotificationConfiguration;

  /**
   * @schema CreateMeetingWithAttendeesRequest#Attendees
   */
  readonly attendees?: CreateAttendeeRequestItem[];

}

/**
 * @schema CreateMeetingWithAttendeesResponse
 */
export interface CreateMeetingWithAttendeesResponse {
  /**
   * @schema CreateMeetingWithAttendeesResponse#Meeting
   */
  readonly meeting?: Meeting;

  /**
   * @schema CreateMeetingWithAttendeesResponse#Attendees
   */
  readonly attendees?: Attendee[];

  /**
   * @schema CreateMeetingWithAttendeesResponse#Errors
   */
  readonly errors?: CreateAttendeeError[];

}

/**
 * @schema CreatePhoneNumberOrderRequest
 */
export interface CreatePhoneNumberOrderRequest {
  /**
   * @schema CreatePhoneNumberOrderRequest#ProductType
   */
  readonly productType: string;

  /**
   * @schema CreatePhoneNumberOrderRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers: string[];

}

/**
 * @schema CreatePhoneNumberOrderResponse
 */
export interface CreatePhoneNumberOrderResponse {
  /**
   * @schema CreatePhoneNumberOrderResponse#PhoneNumberOrder
   */
  readonly phoneNumberOrder?: PhoneNumberOrder;

}

/**
 * @schema CreateProxySessionRequest
 */
export interface CreateProxySessionRequest {
  /**
   * @schema CreateProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema CreateProxySessionRequest#ParticipantPhoneNumbers
   */
  readonly participantPhoneNumbers: string[];

  /**
   * @schema CreateProxySessionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateProxySessionRequest#ExpiryMinutes
   */
  readonly expiryMinutes?: number;

  /**
   * @schema CreateProxySessionRequest#Capabilities
   */
  readonly capabilities: string[];

  /**
   * @schema CreateProxySessionRequest#NumberSelectionBehavior
   */
  readonly numberSelectionBehavior?: string;

  /**
   * @schema CreateProxySessionRequest#GeoMatchLevel
   */
  readonly geoMatchLevel?: string;

  /**
   * @schema CreateProxySessionRequest#GeoMatchParams
   */
  readonly geoMatchParams?: GeoMatchParams;

}

/**
 * @schema CreateProxySessionResponse
 */
export interface CreateProxySessionResponse {
  /**
   * @schema CreateProxySessionResponse#ProxySession
   */
  readonly proxySession?: ProxySession;

}

/**
 * @schema CreateRoomRequest
 */
export interface CreateRoomRequest {
  /**
   * @schema CreateRoomRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateRoomRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateRoomRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CreateRoomResponse
 */
export interface CreateRoomResponse {
  /**
   * @schema CreateRoomResponse#Room
   */
  readonly room?: Room;

}

/**
 * @schema CreateRoomMembershipRequest
 */
export interface CreateRoomMembershipRequest {
  /**
   * @schema CreateRoomMembershipRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateRoomMembershipRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema CreateRoomMembershipRequest#MemberId
   */
  readonly memberId: string;

  /**
   * @schema CreateRoomMembershipRequest#Role
   */
  readonly role?: string;

}

/**
 * @schema CreateRoomMembershipResponse
 */
export interface CreateRoomMembershipResponse {
  /**
   * @schema CreateRoomMembershipResponse#RoomMembership
   */
  readonly roomMembership?: RoomMembership;

}

/**
 * @schema CreateSipMediaApplicationRequest
 */
export interface CreateSipMediaApplicationRequest {
  /**
   * @schema CreateSipMediaApplicationRequest#AwsRegion
   */
  readonly awsRegion: string;

  /**
   * @schema CreateSipMediaApplicationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateSipMediaApplicationRequest#Endpoints
   */
  readonly endpoints: SipMediaApplicationEndpoint[];

}

/**
 * @schema CreateSipMediaApplicationResponse
 */
export interface CreateSipMediaApplicationResponse {
  /**
   * @schema CreateSipMediaApplicationResponse#SipMediaApplication
   */
  readonly sipMediaApplication?: SipMediaApplication;

}

/**
 * @schema CreateSipMediaApplicationCallRequest
 */
export interface CreateSipMediaApplicationCallRequest {
  /**
   * @schema CreateSipMediaApplicationCallRequest#FromPhoneNumber
   */
  readonly fromPhoneNumber?: string;

  /**
   * @schema CreateSipMediaApplicationCallRequest#ToPhoneNumber
   */
  readonly toPhoneNumber?: string;

  /**
   * @schema CreateSipMediaApplicationCallRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

}

/**
 * @schema CreateSipMediaApplicationCallResponse
 */
export interface CreateSipMediaApplicationCallResponse {
  /**
   * @schema CreateSipMediaApplicationCallResponse#SipMediaApplicationCall
   */
  readonly sipMediaApplicationCall?: SipMediaApplicationCall;

}

/**
 * @schema CreateSipRuleRequest
 */
export interface CreateSipRuleRequest {
  /**
   * @schema CreateSipRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateSipRuleRequest#TriggerType
   */
  readonly triggerType: string;

  /**
   * @schema CreateSipRuleRequest#TriggerValue
   */
  readonly triggerValue: string;

  /**
   * @schema CreateSipRuleRequest#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema CreateSipRuleRequest#TargetApplications
   */
  readonly targetApplications: SipRuleTargetApplication[];

}

/**
 * @schema CreateSipRuleResponse
 */
export interface CreateSipRuleResponse {
  /**
   * @schema CreateSipRuleResponse#SipRule
   */
  readonly sipRule?: SipRule;

}

/**
 * @schema CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * @schema CreateUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateUserRequest#Username
   */
  readonly username?: string;

  /**
   * @schema CreateUserRequest#Email
   */
  readonly email?: string;

  /**
   * @schema CreateUserRequest#UserType
   */
  readonly userType?: string;

}

/**
 * @schema CreateUserResponse
 */
export interface CreateUserResponse {
  /**
   * @schema CreateUserResponse#User
   */
  readonly user?: User;

}

/**
 * @schema CreateVoiceConnectorRequest
 */
export interface CreateVoiceConnectorRequest {
  /**
   * @schema CreateVoiceConnectorRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateVoiceConnectorRequest#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema CreateVoiceConnectorRequest#RequireEncryption
   */
  readonly requireEncryption: boolean;

}

/**
 * @schema CreateVoiceConnectorResponse
 */
export interface CreateVoiceConnectorResponse {
  /**
   * @schema CreateVoiceConnectorResponse#VoiceConnector
   */
  readonly voiceConnector?: VoiceConnector;

}

/**
 * @schema CreateVoiceConnectorGroupRequest
 */
export interface CreateVoiceConnectorGroupRequest {
  /**
   * @schema CreateVoiceConnectorGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateVoiceConnectorGroupRequest#VoiceConnectorItems
   */
  readonly voiceConnectorItems?: VoiceConnectorItem[];

}

/**
 * @schema CreateVoiceConnectorGroupResponse
 */
export interface CreateVoiceConnectorGroupResponse {
  /**
   * @schema CreateVoiceConnectorGroupResponse#VoiceConnectorGroup
   */
  readonly voiceConnectorGroup?: VoiceConnectorGroup;

}

/**
 * @schema DeleteAccountRequest
 */
export interface DeleteAccountRequest {
  /**
   * @schema DeleteAccountRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema DeleteAccountResponse
 */
export interface DeleteAccountResponse {
}

/**
 * @schema DeleteAppInstanceRequest
 */
export interface DeleteAppInstanceRequest {
  /**
   * @schema DeleteAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema DeleteAppInstanceAdminRequest
 */
export interface DeleteAppInstanceAdminRequest {
  /**
   * @schema DeleteAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn: string;

  /**
   * @schema DeleteAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema DeleteAppInstanceStreamingConfigurationsRequest
 */
export interface DeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * @schema DeleteAppInstanceStreamingConfigurationsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema DeleteAppInstanceUserRequest
 */
export interface DeleteAppInstanceUserRequest {
  /**
   * @schema DeleteAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn: string;

}

/**
 * @schema DeleteAttendeeRequest
 */
export interface DeleteAttendeeRequest {
  /**
   * @schema DeleteAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema DeleteAttendeeRequest#AttendeeId
   */
  readonly attendeeId: string;

}

/**
 * @schema DeleteChannelRequest
 */
export interface DeleteChannelRequest {
  /**
   * @schema DeleteChannelRequest#ChannelArn
   */
  readonly channelArn: string;

}

/**
 * @schema DeleteChannelBanRequest
 */
export interface DeleteChannelBanRequest {
  /**
   * @schema DeleteChannelBanRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema DeleteChannelBanRequest#MemberArn
   */
  readonly memberArn: string;

}

/**
 * @schema DeleteChannelMembershipRequest
 */
export interface DeleteChannelMembershipRequest {
  /**
   * @schema DeleteChannelMembershipRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema DeleteChannelMembershipRequest#MemberArn
   */
  readonly memberArn: string;

}

/**
 * @schema DeleteChannelMessageRequest
 */
export interface DeleteChannelMessageRequest {
  /**
   * @schema DeleteChannelMessageRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema DeleteChannelMessageRequest#MessageId
   */
  readonly messageId: string;

}

/**
 * @schema DeleteChannelModeratorRequest
 */
export interface DeleteChannelModeratorRequest {
  /**
   * @schema DeleteChannelModeratorRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema DeleteChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn: string;

}

/**
 * @schema DeleteEventsConfigurationRequest
 */
export interface DeleteEventsConfigurationRequest {
  /**
   * @schema DeleteEventsConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteEventsConfigurationRequest#BotId
   */
  readonly botId: string;

}

/**
 * @schema DeleteMeetingRequest
 */
export interface DeleteMeetingRequest {
  /**
   * @schema DeleteMeetingRequest#MeetingId
   */
  readonly meetingId: string;

}

/**
 * @schema DeletePhoneNumberRequest
 */
export interface DeletePhoneNumberRequest {
  /**
   * @schema DeletePhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId: string;

}

/**
 * @schema DeleteProxySessionRequest
 */
export interface DeleteProxySessionRequest {
  /**
   * @schema DeleteProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema DeleteProxySessionRequest#ProxySessionId
   */
  readonly proxySessionId: string;

}

/**
 * @schema DeleteRoomRequest
 */
export interface DeleteRoomRequest {
  /**
   * @schema DeleteRoomRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteRoomRequest#RoomId
   */
  readonly roomId: string;

}

/**
 * @schema DeleteRoomMembershipRequest
 */
export interface DeleteRoomMembershipRequest {
  /**
   * @schema DeleteRoomMembershipRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteRoomMembershipRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema DeleteRoomMembershipRequest#MemberId
   */
  readonly memberId: string;

}

/**
 * @schema DeleteSipMediaApplicationRequest
 */
export interface DeleteSipMediaApplicationRequest {
  /**
   * @schema DeleteSipMediaApplicationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

}

/**
 * @schema DeleteSipRuleRequest
 */
export interface DeleteSipRuleRequest {
  /**
   * @schema DeleteSipRuleRequest#SipRuleId
   */
  readonly sipRuleId: string;

}

/**
 * @schema DeleteVoiceConnectorRequest
 */
export interface DeleteVoiceConnectorRequest {
  /**
   * @schema DeleteVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema DeleteVoiceConnectorEmergencyCallingConfigurationRequest
 */
export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @schema DeleteVoiceConnectorEmergencyCallingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema DeleteVoiceConnectorGroupRequest
 */
export interface DeleteVoiceConnectorGroupRequest {
  /**
   * @schema DeleteVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId: string;

}

/**
 * @schema DeleteVoiceConnectorOriginationRequest
 */
export interface DeleteVoiceConnectorOriginationRequest {
  /**
   * @schema DeleteVoiceConnectorOriginationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema DeleteVoiceConnectorProxyRequest
 */
export interface DeleteVoiceConnectorProxyRequest {
  /**
   * @schema DeleteVoiceConnectorProxyRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema DeleteVoiceConnectorStreamingConfigurationRequest
 */
export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * @schema DeleteVoiceConnectorStreamingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema DeleteVoiceConnectorTerminationRequest
 */
export interface DeleteVoiceConnectorTerminationRequest {
  /**
   * @schema DeleteVoiceConnectorTerminationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema DeleteVoiceConnectorTerminationCredentialsRequest
 */
export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * @schema DeleteVoiceConnectorTerminationCredentialsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema DeleteVoiceConnectorTerminationCredentialsRequest#Usernames
   */
  readonly usernames: string[];

}

/**
 * @schema DescribeAppInstanceRequest
 */
export interface DescribeAppInstanceRequest {
  /**
   * @schema DescribeAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema DescribeAppInstanceResponse
 */
export interface DescribeAppInstanceResponse {
  /**
   * @schema DescribeAppInstanceResponse#AppInstance
   */
  readonly appInstance?: AppInstance;

}

/**
 * @schema DescribeAppInstanceAdminRequest
 */
export interface DescribeAppInstanceAdminRequest {
  /**
   * @schema DescribeAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn: string;

  /**
   * @schema DescribeAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema DescribeAppInstanceAdminResponse
 */
export interface DescribeAppInstanceAdminResponse {
  /**
   * @schema DescribeAppInstanceAdminResponse#AppInstanceAdmin
   */
  readonly appInstanceAdmin?: AppInstanceAdmin;

}

/**
 * @schema DescribeAppInstanceUserRequest
 */
export interface DescribeAppInstanceUserRequest {
  /**
   * @schema DescribeAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn: string;

}

/**
 * @schema DescribeAppInstanceUserResponse
 */
export interface DescribeAppInstanceUserResponse {
  /**
   * @schema DescribeAppInstanceUserResponse#AppInstanceUser
   */
  readonly appInstanceUser?: AppInstanceUser;

}

/**
 * @schema DescribeChannelRequest
 */
export interface DescribeChannelRequest {
  /**
   * @schema DescribeChannelRequest#ChannelArn
   */
  readonly channelArn: string;

}

/**
 * @schema DescribeChannelResponse
 */
export interface DescribeChannelResponse {
  /**
   * @schema DescribeChannelResponse#Channel
   */
  readonly channel?: Channel;

}

/**
 * @schema DescribeChannelBanRequest
 */
export interface DescribeChannelBanRequest {
  /**
   * @schema DescribeChannelBanRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema DescribeChannelBanRequest#MemberArn
   */
  readonly memberArn: string;

}

/**
 * @schema DescribeChannelBanResponse
 */
export interface DescribeChannelBanResponse {
  /**
   * @schema DescribeChannelBanResponse#ChannelBan
   */
  readonly channelBan?: ChannelBan;

}

/**
 * @schema DescribeChannelMembershipRequest
 */
export interface DescribeChannelMembershipRequest {
  /**
   * @schema DescribeChannelMembershipRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema DescribeChannelMembershipRequest#MemberArn
   */
  readonly memberArn: string;

}

/**
 * @schema DescribeChannelMembershipResponse
 */
export interface DescribeChannelMembershipResponse {
  /**
   * @schema DescribeChannelMembershipResponse#ChannelMembership
   */
  readonly channelMembership?: ChannelMembership;

}

/**
 * @schema DescribeChannelMembershipForAppInstanceUserRequest
 */
export interface DescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * @schema DescribeChannelMembershipForAppInstanceUserRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema DescribeChannelMembershipForAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn: string;

}

/**
 * @schema DescribeChannelMembershipForAppInstanceUserResponse
 */
export interface DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * @schema DescribeChannelMembershipForAppInstanceUserResponse#ChannelMembership
   */
  readonly channelMembership?: ChannelMembershipForAppInstanceUserSummary;

}

/**
 * @schema DescribeChannelModeratedByAppInstanceUserRequest
 */
export interface DescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * @schema DescribeChannelModeratedByAppInstanceUserRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema DescribeChannelModeratedByAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn: string;

}

/**
 * @schema DescribeChannelModeratedByAppInstanceUserResponse
 */
export interface DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * @schema DescribeChannelModeratedByAppInstanceUserResponse#Channel
   */
  readonly channel?: ChannelModeratedByAppInstanceUserSummary;

}

/**
 * @schema DescribeChannelModeratorRequest
 */
export interface DescribeChannelModeratorRequest {
  /**
   * @schema DescribeChannelModeratorRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema DescribeChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn: string;

}

/**
 * @schema DescribeChannelModeratorResponse
 */
export interface DescribeChannelModeratorResponse {
  /**
   * @schema DescribeChannelModeratorResponse#ChannelModerator
   */
  readonly channelModerator?: ChannelModerator;

}

/**
 * @schema DisassociatePhoneNumberFromUserRequest
 */
export interface DisassociatePhoneNumberFromUserRequest {
  /**
   * @schema DisassociatePhoneNumberFromUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DisassociatePhoneNumberFromUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema DisassociatePhoneNumberFromUserResponse
 */
export interface DisassociatePhoneNumberFromUserResponse {
}

/**
 * @schema DisassociatePhoneNumbersFromVoiceConnectorRequest
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * @schema DisassociatePhoneNumbersFromVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema DisassociatePhoneNumbersFromVoiceConnectorRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers: string[];

}

/**
 * @schema DisassociatePhoneNumbersFromVoiceConnectorResponse
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * @schema DisassociatePhoneNumbersFromVoiceConnectorResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: PhoneNumberError[];

}

/**
 * @schema DisassociatePhoneNumbersFromVoiceConnectorGroupRequest
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * @schema DisassociatePhoneNumbersFromVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId: string;

  /**
   * @schema DisassociatePhoneNumbersFromVoiceConnectorGroupRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers: string[];

}

/**
 * @schema DisassociatePhoneNumbersFromVoiceConnectorGroupResponse
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * @schema DisassociatePhoneNumbersFromVoiceConnectorGroupResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: PhoneNumberError[];

}

/**
 * @schema DisassociateSigninDelegateGroupsFromAccountRequest
 */
export interface DisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * @schema DisassociateSigninDelegateGroupsFromAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DisassociateSigninDelegateGroupsFromAccountRequest#GroupNames
   */
  readonly groupNames: string[];

}

/**
 * @schema DisassociateSigninDelegateGroupsFromAccountResponse
 */
export interface DisassociateSigninDelegateGroupsFromAccountResponse {
}

/**
 * @schema GetAccountRequest
 */
export interface GetAccountRequest {
  /**
   * @schema GetAccountRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema GetAccountResponse
 */
export interface GetAccountResponse {
  /**
   * @schema GetAccountResponse#Account
   */
  readonly account?: Account;

}

/**
 * @schema GetAccountSettingsRequest
 */
export interface GetAccountSettingsRequest {
  /**
   * @schema GetAccountSettingsRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema GetAccountSettingsResponse
 */
export interface GetAccountSettingsResponse {
  /**
   * @schema GetAccountSettingsResponse#AccountSettings
   */
  readonly accountSettings?: AccountSettings;

}

/**
 * @schema GetAppInstanceRetentionSettingsRequest
 */
export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * @schema GetAppInstanceRetentionSettingsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema GetAppInstanceRetentionSettingsResponse
 */
export interface GetAppInstanceRetentionSettingsResponse {
  /**
   * @schema GetAppInstanceRetentionSettingsResponse#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings?: AppInstanceRetentionSettings;

  /**
   * @schema GetAppInstanceRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * @schema GetAppInstanceStreamingConfigurationsRequest
 */
export interface GetAppInstanceStreamingConfigurationsRequest {
  /**
   * @schema GetAppInstanceStreamingConfigurationsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

}

/**
 * @schema GetAppInstanceStreamingConfigurationsResponse
 */
export interface GetAppInstanceStreamingConfigurationsResponse {
  /**
   * @schema GetAppInstanceStreamingConfigurationsResponse#AppInstanceStreamingConfigurations
   */
  readonly appInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];

}

/**
 * @schema GetAttendeeRequest
 */
export interface GetAttendeeRequest {
  /**
   * @schema GetAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema GetAttendeeRequest#AttendeeId
   */
  readonly attendeeId: string;

}

/**
 * @schema GetAttendeeResponse
 */
export interface GetAttendeeResponse {
  /**
   * @schema GetAttendeeResponse#Attendee
   */
  readonly attendee?: Attendee;

}

/**
 * @schema GetBotRequest
 */
export interface GetBotRequest {
  /**
   * @schema GetBotRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetBotRequest#BotId
   */
  readonly botId: string;

}

/**
 * @schema GetBotResponse
 */
export interface GetBotResponse {
  /**
   * @schema GetBotResponse#Bot
   */
  readonly bot?: Bot;

}

/**
 * @schema GetChannelMessageRequest
 */
export interface GetChannelMessageRequest {
  /**
   * @schema GetChannelMessageRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema GetChannelMessageRequest#MessageId
   */
  readonly messageId: string;

}

/**
 * @schema GetChannelMessageResponse
 */
export interface GetChannelMessageResponse {
  /**
   * @schema GetChannelMessageResponse#ChannelMessage
   */
  readonly channelMessage?: ChannelMessage;

}

/**
 * @schema GetEventsConfigurationRequest
 */
export interface GetEventsConfigurationRequest {
  /**
   * @schema GetEventsConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetEventsConfigurationRequest#BotId
   */
  readonly botId: string;

}

/**
 * @schema GetEventsConfigurationResponse
 */
export interface GetEventsConfigurationResponse {
  /**
   * @schema GetEventsConfigurationResponse#EventsConfiguration
   */
  readonly eventsConfiguration?: EventsConfiguration;

}

/**
 * @schema GetGlobalSettingsResponse
 */
export interface GetGlobalSettingsResponse {
  /**
   * @schema GetGlobalSettingsResponse#BusinessCalling
   */
  readonly businessCalling?: BusinessCallingSettings;

  /**
   * @schema GetGlobalSettingsResponse#VoiceConnector
   */
  readonly voiceConnector?: VoiceConnectorSettings;

}

/**
 * @schema GetMeetingRequest
 */
export interface GetMeetingRequest {
  /**
   * @schema GetMeetingRequest#MeetingId
   */
  readonly meetingId: string;

}

/**
 * @schema GetMeetingResponse
 */
export interface GetMeetingResponse {
  /**
   * @schema GetMeetingResponse#Meeting
   */
  readonly meeting?: Meeting;

}

/**
 * @schema GetMessagingSessionEndpointRequest
 */
export interface GetMessagingSessionEndpointRequest {
}

/**
 * @schema GetMessagingSessionEndpointResponse
 */
export interface GetMessagingSessionEndpointResponse {
  /**
   * @schema GetMessagingSessionEndpointResponse#Endpoint
   */
  readonly endpoint?: MessagingSessionEndpoint;

}

/**
 * @schema GetPhoneNumberRequest
 */
export interface GetPhoneNumberRequest {
  /**
   * @schema GetPhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId: string;

}

/**
 * @schema GetPhoneNumberResponse
 */
export interface GetPhoneNumberResponse {
  /**
   * @schema GetPhoneNumberResponse#PhoneNumber
   */
  readonly phoneNumber?: PhoneNumber;

}

/**
 * @schema GetPhoneNumberOrderRequest
 */
export interface GetPhoneNumberOrderRequest {
  /**
   * @schema GetPhoneNumberOrderRequest#PhoneNumberOrderId
   */
  readonly phoneNumberOrderId: string;

}

/**
 * @schema GetPhoneNumberOrderResponse
 */
export interface GetPhoneNumberOrderResponse {
  /**
   * @schema GetPhoneNumberOrderResponse#PhoneNumberOrder
   */
  readonly phoneNumberOrder?: PhoneNumberOrder;

}

/**
 * @schema GetPhoneNumberSettingsResponse
 */
export interface GetPhoneNumberSettingsResponse {
  /**
   * @schema GetPhoneNumberSettingsResponse#CallingName
   */
  readonly callingName?: string;

  /**
   * @schema GetPhoneNumberSettingsResponse#CallingNameUpdatedTimestamp
   */
  readonly callingNameUpdatedTimestamp?: string;

}

/**
 * @schema GetProxySessionRequest
 */
export interface GetProxySessionRequest {
  /**
   * @schema GetProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema GetProxySessionRequest#ProxySessionId
   */
  readonly proxySessionId: string;

}

/**
 * @schema GetProxySessionResponse
 */
export interface GetProxySessionResponse {
  /**
   * @schema GetProxySessionResponse#ProxySession
   */
  readonly proxySession?: ProxySession;

}

/**
 * @schema GetRetentionSettingsRequest
 */
export interface GetRetentionSettingsRequest {
  /**
   * @schema GetRetentionSettingsRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema GetRetentionSettingsResponse
 */
export interface GetRetentionSettingsResponse {
  /**
   * @schema GetRetentionSettingsResponse#RetentionSettings
   */
  readonly retentionSettings?: RetentionSettings;

  /**
   * @schema GetRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * @schema GetRoomRequest
 */
export interface GetRoomRequest {
  /**
   * @schema GetRoomRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetRoomRequest#RoomId
   */
  readonly roomId: string;

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
 * @schema GetSipMediaApplicationRequest
 */
export interface GetSipMediaApplicationRequest {
  /**
   * @schema GetSipMediaApplicationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

}

/**
 * @schema GetSipMediaApplicationResponse
 */
export interface GetSipMediaApplicationResponse {
  /**
   * @schema GetSipMediaApplicationResponse#SipMediaApplication
   */
  readonly sipMediaApplication?: SipMediaApplication;

}

/**
 * @schema GetSipMediaApplicationLoggingConfigurationRequest
 */
export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @schema GetSipMediaApplicationLoggingConfigurationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

}

/**
 * @schema GetSipMediaApplicationLoggingConfigurationResponse
 */
export interface GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @schema GetSipMediaApplicationLoggingConfigurationResponse#SipMediaApplicationLoggingConfiguration
   */
  readonly sipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;

}

/**
 * @schema GetSipRuleRequest
 */
export interface GetSipRuleRequest {
  /**
   * @schema GetSipRuleRequest#SipRuleId
   */
  readonly sipRuleId: string;

}

/**
 * @schema GetSipRuleResponse
 */
export interface GetSipRuleResponse {
  /**
   * @schema GetSipRuleResponse#SipRule
   */
  readonly sipRule?: SipRule;

}

/**
 * @schema GetUserRequest
 */
export interface GetUserRequest {
  /**
   * @schema GetUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema GetUserResponse
 */
export interface GetUserResponse {
  /**
   * @schema GetUserResponse#User
   */
  readonly user?: User;

}

/**
 * @schema GetUserSettingsRequest
 */
export interface GetUserSettingsRequest {
  /**
   * @schema GetUserSettingsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetUserSettingsRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema GetUserSettingsResponse
 */
export interface GetUserSettingsResponse {
  /**
   * @schema GetUserSettingsResponse#UserSettings
   */
  readonly userSettings?: UserSettings;

}

/**
 * @schema GetVoiceConnectorRequest
 */
export interface GetVoiceConnectorRequest {
  /**
   * @schema GetVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema GetVoiceConnectorResponse
 */
export interface GetVoiceConnectorResponse {
  /**
   * @schema GetVoiceConnectorResponse#VoiceConnector
   */
  readonly voiceConnector?: VoiceConnector;

}

/**
 * @schema GetVoiceConnectorEmergencyCallingConfigurationRequest
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @schema GetVoiceConnectorEmergencyCallingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema GetVoiceConnectorEmergencyCallingConfigurationResponse
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @schema GetVoiceConnectorEmergencyCallingConfigurationResponse#EmergencyCallingConfiguration
   */
  readonly emergencyCallingConfiguration?: EmergencyCallingConfiguration;

}

/**
 * @schema GetVoiceConnectorGroupRequest
 */
export interface GetVoiceConnectorGroupRequest {
  /**
   * @schema GetVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId: string;

}

/**
 * @schema GetVoiceConnectorGroupResponse
 */
export interface GetVoiceConnectorGroupResponse {
  /**
   * @schema GetVoiceConnectorGroupResponse#VoiceConnectorGroup
   */
  readonly voiceConnectorGroup?: VoiceConnectorGroup;

}

/**
 * @schema GetVoiceConnectorLoggingConfigurationRequest
 */
export interface GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * @schema GetVoiceConnectorLoggingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema GetVoiceConnectorLoggingConfigurationResponse
 */
export interface GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * @schema GetVoiceConnectorLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: LoggingConfiguration;

}

/**
 * @schema GetVoiceConnectorOriginationRequest
 */
export interface GetVoiceConnectorOriginationRequest {
  /**
   * @schema GetVoiceConnectorOriginationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema GetVoiceConnectorOriginationResponse
 */
export interface GetVoiceConnectorOriginationResponse {
  /**
   * @schema GetVoiceConnectorOriginationResponse#Origination
   */
  readonly origination?: Origination;

}

/**
 * @schema GetVoiceConnectorProxyRequest
 */
export interface GetVoiceConnectorProxyRequest {
  /**
   * @schema GetVoiceConnectorProxyRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema GetVoiceConnectorProxyResponse
 */
export interface GetVoiceConnectorProxyResponse {
  /**
   * @schema GetVoiceConnectorProxyResponse#Proxy
   */
  readonly proxy?: Proxy;

}

/**
 * @schema GetVoiceConnectorStreamingConfigurationRequest
 */
export interface GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * @schema GetVoiceConnectorStreamingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema GetVoiceConnectorStreamingConfigurationResponse
 */
export interface GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * @schema GetVoiceConnectorStreamingConfigurationResponse#StreamingConfiguration
   */
  readonly streamingConfiguration?: StreamingConfiguration;

}

/**
 * @schema GetVoiceConnectorTerminationRequest
 */
export interface GetVoiceConnectorTerminationRequest {
  /**
   * @schema GetVoiceConnectorTerminationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema GetVoiceConnectorTerminationResponse
 */
export interface GetVoiceConnectorTerminationResponse {
  /**
   * @schema GetVoiceConnectorTerminationResponse#Termination
   */
  readonly termination?: Termination;

}

/**
 * @schema GetVoiceConnectorTerminationHealthRequest
 */
export interface GetVoiceConnectorTerminationHealthRequest {
  /**
   * @schema GetVoiceConnectorTerminationHealthRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema GetVoiceConnectorTerminationHealthResponse
 */
export interface GetVoiceConnectorTerminationHealthResponse {
  /**
   * @schema GetVoiceConnectorTerminationHealthResponse#TerminationHealth
   */
  readonly terminationHealth?: TerminationHealth;

}

/**
 * @schema InviteUsersRequest
 */
export interface InviteUsersRequest {
  /**
   * @schema InviteUsersRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema InviteUsersRequest#UserEmailList
   */
  readonly userEmailList: string[];

  /**
   * @schema InviteUsersRequest#UserType
   */
  readonly userType?: string;

}

/**
 * @schema InviteUsersResponse
 */
export interface InviteUsersResponse {
  /**
   * @schema InviteUsersResponse#Invites
   */
  readonly invites?: Invite[];

}

/**
 * @schema ListAccountsRequest
 */
export interface ListAccountsRequest {
  /**
   * @schema ListAccountsRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ListAccountsRequest#UserEmail
   */
  readonly userEmail?: string;

  /**
   * @schema ListAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAccountsResponse
 */
export interface ListAccountsResponse {
  /**
   * @schema ListAccountsResponse#Accounts
   */
  readonly accounts?: Account[];

  /**
   * @schema ListAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAppInstanceAdminsRequest
 */
export interface ListAppInstanceAdminsRequest {
  /**
   * @schema ListAppInstanceAdminsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ListAppInstanceAdminsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAppInstanceAdminsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAppInstanceAdminsResponse
 */
export interface ListAppInstanceAdminsResponse {
  /**
   * @schema ListAppInstanceAdminsResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ListAppInstanceAdminsResponse#AppInstanceAdmins
   */
  readonly appInstanceAdmins?: AppInstanceAdminSummary[];

  /**
   * @schema ListAppInstanceAdminsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAppInstanceUsersRequest
 */
export interface ListAppInstanceUsersRequest {
  /**
   * @schema ListAppInstanceUsersRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ListAppInstanceUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAppInstanceUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAppInstanceUsersResponse
 */
export interface ListAppInstanceUsersResponse {
  /**
   * @schema ListAppInstanceUsersResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ListAppInstanceUsersResponse#AppInstanceUsers
   */
  readonly appInstanceUsers?: AppInstanceUserSummary[];

  /**
   * @schema ListAppInstanceUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAppInstancesRequest
 */
export interface ListAppInstancesRequest {
  /**
   * @schema ListAppInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAppInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAppInstancesResponse
 */
export interface ListAppInstancesResponse {
  /**
   * @schema ListAppInstancesResponse#AppInstances
   */
  readonly appInstances?: AppInstanceSummary[];

  /**
   * @schema ListAppInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAttendeeTagsRequest
 */
export interface ListAttendeeTagsRequest {
  /**
   * @schema ListAttendeeTagsRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ListAttendeeTagsRequest#AttendeeId
   */
  readonly attendeeId: string;

}

/**
 * @schema ListAttendeeTagsResponse
 */
export interface ListAttendeeTagsResponse {
  /**
   * @schema ListAttendeeTagsResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ListAttendeesRequest
 */
export interface ListAttendeesRequest {
  /**
   * @schema ListAttendeesRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema ListAttendeesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAttendeesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAttendeesResponse
 */
export interface ListAttendeesResponse {
  /**
   * @schema ListAttendeesResponse#Attendees
   */
  readonly attendees?: Attendee[];

  /**
   * @schema ListAttendeesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBotsRequest
 */
export interface ListBotsRequest {
  /**
   * @schema ListBotsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListBotsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListBotsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBotsResponse
 */
export interface ListBotsResponse {
  /**
   * @schema ListBotsResponse#Bots
   */
  readonly bots?: Bot[];

  /**
   * @schema ListBotsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelBansRequest
 */
export interface ListChannelBansRequest {
  /**
   * @schema ListChannelBansRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ListChannelBansRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListChannelBansRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelBansResponse
 */
export interface ListChannelBansResponse {
  /**
   * @schema ListChannelBansResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ListChannelBansResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListChannelBansResponse#ChannelBans
   */
  readonly channelBans?: ChannelBanSummary[];

}

/**
 * @schema ListChannelMembershipsRequest
 */
export interface ListChannelMembershipsRequest {
  /**
   * @schema ListChannelMembershipsRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ListChannelMembershipsRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ListChannelMembershipsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListChannelMembershipsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelMembershipsResponse
 */
export interface ListChannelMembershipsResponse {
  /**
   * @schema ListChannelMembershipsResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ListChannelMembershipsResponse#ChannelMemberships
   */
  readonly channelMemberships?: ChannelMembershipSummary[];

  /**
   * @schema ListChannelMembershipsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelMembershipsForAppInstanceUserRequest
 */
export interface ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * @schema ListChannelMembershipsForAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ListChannelMembershipsForAppInstanceUserRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListChannelMembershipsForAppInstanceUserRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelMembershipsForAppInstanceUserResponse
 */
export interface ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * @schema ListChannelMembershipsForAppInstanceUserResponse#ChannelMemberships
   */
  readonly channelMemberships?: ChannelMembershipForAppInstanceUserSummary[];

  /**
   * @schema ListChannelMembershipsForAppInstanceUserResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelMessagesRequest
 */
export interface ListChannelMessagesRequest {
  /**
   * @schema ListChannelMessagesRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ListChannelMessagesRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListChannelMessagesRequest#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema ListChannelMessagesRequest#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema ListChannelMessagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListChannelMessagesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelMessagesResponse
 */
export interface ListChannelMessagesResponse {
  /**
   * @schema ListChannelMessagesResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ListChannelMessagesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListChannelMessagesResponse#ChannelMessages
   */
  readonly channelMessages?: ChannelMessageSummary[];

}

/**
 * @schema ListChannelModeratorsRequest
 */
export interface ListChannelModeratorsRequest {
  /**
   * @schema ListChannelModeratorsRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema ListChannelModeratorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListChannelModeratorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelModeratorsResponse
 */
export interface ListChannelModeratorsResponse {
  /**
   * @schema ListChannelModeratorsResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ListChannelModeratorsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListChannelModeratorsResponse#ChannelModerators
   */
  readonly channelModerators?: ChannelModeratorSummary[];

}

/**
 * @schema ListChannelsRequest
 */
export interface ListChannelsRequest {
  /**
   * @schema ListChannelsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema ListChannelsRequest#Privacy
   */
  readonly privacy?: string;

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
 * @schema ListChannelsModeratedByAppInstanceUserRequest
 */
export interface ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * @schema ListChannelsModeratedByAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ListChannelsModeratedByAppInstanceUserRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListChannelsModeratedByAppInstanceUserRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelsModeratedByAppInstanceUserResponse
 */
export interface ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * @schema ListChannelsModeratedByAppInstanceUserResponse#Channels
   */
  readonly channels?: ChannelModeratedByAppInstanceUserSummary[];

  /**
   * @schema ListChannelsModeratedByAppInstanceUserResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMeetingTagsRequest
 */
export interface ListMeetingTagsRequest {
  /**
   * @schema ListMeetingTagsRequest#MeetingId
   */
  readonly meetingId: string;

}

/**
 * @schema ListMeetingTagsResponse
 */
export interface ListMeetingTagsResponse {
  /**
   * @schema ListMeetingTagsResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ListMeetingsRequest
 */
export interface ListMeetingsRequest {
  /**
   * @schema ListMeetingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListMeetingsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListMeetingsResponse
 */
export interface ListMeetingsResponse {
  /**
   * @schema ListMeetingsResponse#Meetings
   */
  readonly meetings?: Meeting[];

  /**
   * @schema ListMeetingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPhoneNumberOrdersRequest
 */
export interface ListPhoneNumberOrdersRequest {
  /**
   * @schema ListPhoneNumberOrdersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPhoneNumberOrdersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPhoneNumberOrdersResponse
 */
export interface ListPhoneNumberOrdersResponse {
  /**
   * @schema ListPhoneNumberOrdersResponse#PhoneNumberOrders
   */
  readonly phoneNumberOrders?: PhoneNumberOrder[];

  /**
   * @schema ListPhoneNumberOrdersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPhoneNumbersRequest
 */
export interface ListPhoneNumbersRequest {
  /**
   * @schema ListPhoneNumbersRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ListPhoneNumbersRequest#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ListPhoneNumbersRequest#FilterName
   */
  readonly filterName?: string;

  /**
   * @schema ListPhoneNumbersRequest#FilterValue
   */
  readonly filterValue?: string;

  /**
   * @schema ListPhoneNumbersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPhoneNumbersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPhoneNumbersResponse
 */
export interface ListPhoneNumbersResponse {
  /**
   * @schema ListPhoneNumbersResponse#PhoneNumbers
   */
  readonly phoneNumbers?: PhoneNumber[];

  /**
   * @schema ListPhoneNumbersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProxySessionsRequest
 */
export interface ListProxySessionsRequest {
  /**
   * @schema ListProxySessionsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema ListProxySessionsRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ListProxySessionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProxySessionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListProxySessionsResponse
 */
export interface ListProxySessionsResponse {
  /**
   * @schema ListProxySessionsResponse#ProxySessions
   */
  readonly proxySessions?: ProxySession[];

  /**
   * @schema ListProxySessionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRoomMembershipsRequest
 */
export interface ListRoomMembershipsRequest {
  /**
   * @schema ListRoomMembershipsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListRoomMembershipsRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema ListRoomMembershipsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRoomMembershipsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRoomMembershipsResponse
 */
export interface ListRoomMembershipsResponse {
  /**
   * @schema ListRoomMembershipsResponse#RoomMemberships
   */
  readonly roomMemberships?: RoomMembership[];

  /**
   * @schema ListRoomMembershipsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRoomsRequest
 */
export interface ListRoomsRequest {
  /**
   * @schema ListRoomsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListRoomsRequest#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ListRoomsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRoomsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRoomsResponse
 */
export interface ListRoomsResponse {
  /**
   * @schema ListRoomsResponse#Rooms
   */
  readonly rooms?: Room[];

  /**
   * @schema ListRoomsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSipMediaApplicationsRequest
 */
export interface ListSipMediaApplicationsRequest {
  /**
   * @schema ListSipMediaApplicationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSipMediaApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSipMediaApplicationsResponse
 */
export interface ListSipMediaApplicationsResponse {
  /**
   * @schema ListSipMediaApplicationsResponse#SipMediaApplications
   */
  readonly sipMediaApplications?: SipMediaApplication[];

  /**
   * @schema ListSipMediaApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSipRulesRequest
 */
export interface ListSipRulesRequest {
  /**
   * @schema ListSipRulesRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema ListSipRulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSipRulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSipRulesResponse
 */
export interface ListSipRulesResponse {
  /**
   * @schema ListSipRulesResponse#SipRules
   */
  readonly sipRules?: SipRule[];

  /**
   * @schema ListSipRulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceARN
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
  readonly tags?: Tag[];

}

/**
 * @schema ListUsersRequest
 */
export interface ListUsersRequest {
  /**
   * @schema ListUsersRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListUsersRequest#UserEmail
   */
  readonly userEmail?: string;

  /**
   * @schema ListUsersRequest#UserType
   */
  readonly userType?: string;

  /**
   * @schema ListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListUsersResponse
 */
export interface ListUsersResponse {
  /**
   * @schema ListUsersResponse#Users
   */
  readonly users?: User[];

  /**
   * @schema ListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListVoiceConnectorGroupsRequest
 */
export interface ListVoiceConnectorGroupsRequest {
  /**
   * @schema ListVoiceConnectorGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListVoiceConnectorGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListVoiceConnectorGroupsResponse
 */
export interface ListVoiceConnectorGroupsResponse {
  /**
   * @schema ListVoiceConnectorGroupsResponse#VoiceConnectorGroups
   */
  readonly voiceConnectorGroups?: VoiceConnectorGroup[];

  /**
   * @schema ListVoiceConnectorGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListVoiceConnectorTerminationCredentialsRequest
 */
export interface ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * @schema ListVoiceConnectorTerminationCredentialsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

}

/**
 * @schema ListVoiceConnectorTerminationCredentialsResponse
 */
export interface ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * @schema ListVoiceConnectorTerminationCredentialsResponse#Usernames
   */
  readonly usernames?: string[];

}

/**
 * @schema ListVoiceConnectorsRequest
 */
export interface ListVoiceConnectorsRequest {
  /**
   * @schema ListVoiceConnectorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListVoiceConnectorsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListVoiceConnectorsResponse
 */
export interface ListVoiceConnectorsResponse {
  /**
   * @schema ListVoiceConnectorsResponse#VoiceConnectors
   */
  readonly voiceConnectors?: VoiceConnector[];

  /**
   * @schema ListVoiceConnectorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LogoutUserRequest
 */
export interface LogoutUserRequest {
  /**
   * @schema LogoutUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema LogoutUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema LogoutUserResponse
 */
export interface LogoutUserResponse {
}

/**
 * @schema PutAppInstanceRetentionSettingsRequest
 */
export interface PutAppInstanceRetentionSettingsRequest {
  /**
   * @schema PutAppInstanceRetentionSettingsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema PutAppInstanceRetentionSettingsRequest#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings: AppInstanceRetentionSettings;

}

/**
 * @schema PutAppInstanceRetentionSettingsResponse
 */
export interface PutAppInstanceRetentionSettingsResponse {
  /**
   * @schema PutAppInstanceRetentionSettingsResponse#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings?: AppInstanceRetentionSettings;

  /**
   * @schema PutAppInstanceRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * @schema PutAppInstanceStreamingConfigurationsRequest
 */
export interface PutAppInstanceStreamingConfigurationsRequest {
  /**
   * @schema PutAppInstanceStreamingConfigurationsRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema PutAppInstanceStreamingConfigurationsRequest#AppInstanceStreamingConfigurations
   */
  readonly appInstanceStreamingConfigurations: AppInstanceStreamingConfiguration[];

}

/**
 * @schema PutAppInstanceStreamingConfigurationsResponse
 */
export interface PutAppInstanceStreamingConfigurationsResponse {
  /**
   * @schema PutAppInstanceStreamingConfigurationsResponse#AppInstanceStreamingConfigurations
   */
  readonly appInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];

}

/**
 * @schema PutEventsConfigurationRequest
 */
export interface PutEventsConfigurationRequest {
  /**
   * @schema PutEventsConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema PutEventsConfigurationRequest#BotId
   */
  readonly botId: string;

  /**
   * @schema PutEventsConfigurationRequest#OutboundEventsHTTPSEndpoint
   */
  readonly outboundEventsHttpsEndpoint?: string;

  /**
   * @schema PutEventsConfigurationRequest#LambdaFunctionArn
   */
  readonly lambdaFunctionArn?: string;

}

/**
 * @schema PutEventsConfigurationResponse
 */
export interface PutEventsConfigurationResponse {
  /**
   * @schema PutEventsConfigurationResponse#EventsConfiguration
   */
  readonly eventsConfiguration?: EventsConfiguration;

}

/**
 * @schema PutRetentionSettingsRequest
 */
export interface PutRetentionSettingsRequest {
  /**
   * @schema PutRetentionSettingsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema PutRetentionSettingsRequest#RetentionSettings
   */
  readonly retentionSettings: RetentionSettings;

}

/**
 * @schema PutRetentionSettingsResponse
 */
export interface PutRetentionSettingsResponse {
  /**
   * @schema PutRetentionSettingsResponse#RetentionSettings
   */
  readonly retentionSettings?: RetentionSettings;

  /**
   * @schema PutRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * @schema PutSipMediaApplicationLoggingConfigurationRequest
 */
export interface PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @schema PutSipMediaApplicationLoggingConfigurationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

  /**
   * @schema PutSipMediaApplicationLoggingConfigurationRequest#SipMediaApplicationLoggingConfiguration
   */
  readonly sipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;

}

/**
 * @schema PutSipMediaApplicationLoggingConfigurationResponse
 */
export interface PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @schema PutSipMediaApplicationLoggingConfigurationResponse#SipMediaApplicationLoggingConfiguration
   */
  readonly sipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;

}

/**
 * @schema PutVoiceConnectorEmergencyCallingConfigurationRequest
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @schema PutVoiceConnectorEmergencyCallingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema PutVoiceConnectorEmergencyCallingConfigurationRequest#EmergencyCallingConfiguration
   */
  readonly emergencyCallingConfiguration: EmergencyCallingConfiguration;

}

/**
 * @schema PutVoiceConnectorEmergencyCallingConfigurationResponse
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @schema PutVoiceConnectorEmergencyCallingConfigurationResponse#EmergencyCallingConfiguration
   */
  readonly emergencyCallingConfiguration?: EmergencyCallingConfiguration;

}

/**
 * @schema PutVoiceConnectorLoggingConfigurationRequest
 */
export interface PutVoiceConnectorLoggingConfigurationRequest {
  /**
   * @schema PutVoiceConnectorLoggingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema PutVoiceConnectorLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration: LoggingConfiguration;

}

/**
 * @schema PutVoiceConnectorLoggingConfigurationResponse
 */
export interface PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * @schema PutVoiceConnectorLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: LoggingConfiguration;

}

/**
 * @schema PutVoiceConnectorOriginationRequest
 */
export interface PutVoiceConnectorOriginationRequest {
  /**
   * @schema PutVoiceConnectorOriginationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema PutVoiceConnectorOriginationRequest#Origination
   */
  readonly origination: Origination;

}

/**
 * @schema PutVoiceConnectorOriginationResponse
 */
export interface PutVoiceConnectorOriginationResponse {
  /**
   * @schema PutVoiceConnectorOriginationResponse#Origination
   */
  readonly origination?: Origination;

}

/**
 * @schema PutVoiceConnectorProxyRequest
 */
export interface PutVoiceConnectorProxyRequest {
  /**
   * @schema PutVoiceConnectorProxyRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema PutVoiceConnectorProxyRequest#DefaultSessionExpiryMinutes
   */
  readonly defaultSessionExpiryMinutes: number;

  /**
   * @schema PutVoiceConnectorProxyRequest#PhoneNumberPoolCountries
   */
  readonly phoneNumberPoolCountries: string[];

  /**
   * @schema PutVoiceConnectorProxyRequest#FallBackPhoneNumber
   */
  readonly fallBackPhoneNumber?: string;

  /**
   * @schema PutVoiceConnectorProxyRequest#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * @schema PutVoiceConnectorProxyResponse
 */
export interface PutVoiceConnectorProxyResponse {
  /**
   * @schema PutVoiceConnectorProxyResponse#Proxy
   */
  readonly proxy?: Proxy;

}

/**
 * @schema PutVoiceConnectorStreamingConfigurationRequest
 */
export interface PutVoiceConnectorStreamingConfigurationRequest {
  /**
   * @schema PutVoiceConnectorStreamingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema PutVoiceConnectorStreamingConfigurationRequest#StreamingConfiguration
   */
  readonly streamingConfiguration: StreamingConfiguration;

}

/**
 * @schema PutVoiceConnectorStreamingConfigurationResponse
 */
export interface PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * @schema PutVoiceConnectorStreamingConfigurationResponse#StreamingConfiguration
   */
  readonly streamingConfiguration?: StreamingConfiguration;

}

/**
 * @schema PutVoiceConnectorTerminationRequest
 */
export interface PutVoiceConnectorTerminationRequest {
  /**
   * @schema PutVoiceConnectorTerminationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema PutVoiceConnectorTerminationRequest#Termination
   */
  readonly termination: Termination;

}

/**
 * @schema PutVoiceConnectorTerminationResponse
 */
export interface PutVoiceConnectorTerminationResponse {
  /**
   * @schema PutVoiceConnectorTerminationResponse#Termination
   */
  readonly termination?: Termination;

}

/**
 * @schema PutVoiceConnectorTerminationCredentialsRequest
 */
export interface PutVoiceConnectorTerminationCredentialsRequest {
  /**
   * @schema PutVoiceConnectorTerminationCredentialsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema PutVoiceConnectorTerminationCredentialsRequest#Credentials
   */
  readonly credentials?: Credential[];

}

/**
 * @schema RedactChannelMessageRequest
 */
export interface RedactChannelMessageRequest {
  /**
   * @schema RedactChannelMessageRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema RedactChannelMessageRequest#MessageId
   */
  readonly messageId: string;

}

/**
 * @schema RedactChannelMessageResponse
 */
export interface RedactChannelMessageResponse {
  /**
   * @schema RedactChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema RedactChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * @schema RedactConversationMessageRequest
 */
export interface RedactConversationMessageRequest {
  /**
   * @schema RedactConversationMessageRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema RedactConversationMessageRequest#ConversationId
   */
  readonly conversationId: string;

  /**
   * @schema RedactConversationMessageRequest#MessageId
   */
  readonly messageId: string;

}

/**
 * @schema RedactConversationMessageResponse
 */
export interface RedactConversationMessageResponse {
}

/**
 * @schema RedactRoomMessageRequest
 */
export interface RedactRoomMessageRequest {
  /**
   * @schema RedactRoomMessageRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema RedactRoomMessageRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema RedactRoomMessageRequest#MessageId
   */
  readonly messageId: string;

}

/**
 * @schema RedactRoomMessageResponse
 */
export interface RedactRoomMessageResponse {
}

/**
 * @schema RegenerateSecurityTokenRequest
 */
export interface RegenerateSecurityTokenRequest {
  /**
   * @schema RegenerateSecurityTokenRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema RegenerateSecurityTokenRequest#BotId
   */
  readonly botId: string;

}

/**
 * @schema RegenerateSecurityTokenResponse
 */
export interface RegenerateSecurityTokenResponse {
  /**
   * @schema RegenerateSecurityTokenResponse#Bot
   */
  readonly bot?: Bot;

}

/**
 * @schema ResetPersonalPinRequest
 */
export interface ResetPersonalPinRequest {
  /**
   * @schema ResetPersonalPinRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ResetPersonalPinRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema ResetPersonalPinResponse
 */
export interface ResetPersonalPinResponse {
  /**
   * @schema ResetPersonalPinResponse#User
   */
  readonly user?: User;

}

/**
 * @schema RestorePhoneNumberRequest
 */
export interface RestorePhoneNumberRequest {
  /**
   * @schema RestorePhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId: string;

}

/**
 * @schema RestorePhoneNumberResponse
 */
export interface RestorePhoneNumberResponse {
  /**
   * @schema RestorePhoneNumberResponse#PhoneNumber
   */
  readonly phoneNumber?: PhoneNumber;

}

/**
 * @schema SearchAvailablePhoneNumbersRequest
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * @schema SearchAvailablePhoneNumbersRequest#AreaCode
   */
  readonly areaCode?: string;

  /**
   * @schema SearchAvailablePhoneNumbersRequest#City
   */
  readonly city?: string;

  /**
   * @schema SearchAvailablePhoneNumbersRequest#Country
   */
  readonly country?: string;

  /**
   * @schema SearchAvailablePhoneNumbersRequest#State
   */
  readonly state?: string;

  /**
   * @schema SearchAvailablePhoneNumbersRequest#TollFreePrefix
   */
  readonly tollFreePrefix?: string;

  /**
   * @schema SearchAvailablePhoneNumbersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchAvailablePhoneNumbersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchAvailablePhoneNumbersResponse
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * @schema SearchAvailablePhoneNumbersResponse#E164PhoneNumbers
   */
  readonly e164PhoneNumbers?: string[];

}

/**
 * @schema SendChannelMessageRequest
 */
export interface SendChannelMessageRequest {
  /**
   * @schema SendChannelMessageRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema SendChannelMessageRequest#Content
   */
  readonly content: string;

  /**
   * @schema SendChannelMessageRequest#Type
   */
  readonly type: string;

  /**
   * @schema SendChannelMessageRequest#Persistence
   */
  readonly persistence: string;

  /**
   * @schema SendChannelMessageRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema SendChannelMessageRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema SendChannelMessageResponse
 */
export interface SendChannelMessageResponse {
  /**
   * @schema SendChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema SendChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * @schema TagAttendeeRequest
 */
export interface TagAttendeeRequest {
  /**
   * @schema TagAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema TagAttendeeRequest#AttendeeId
   */
  readonly attendeeId: string;

  /**
   * @schema TagAttendeeRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagMeetingRequest
 */
export interface TagMeetingRequest {
  /**
   * @schema TagMeetingRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema TagMeetingRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema UntagAttendeeRequest
 */
export interface UntagAttendeeRequest {
  /**
   * @schema UntagAttendeeRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema UntagAttendeeRequest#AttendeeId
   */
  readonly attendeeId: string;

  /**
   * @schema UntagAttendeeRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagMeetingRequest
 */
export interface UntagMeetingRequest {
  /**
   * @schema UntagMeetingRequest#MeetingId
   */
  readonly meetingId: string;

  /**
   * @schema UntagMeetingRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateAccountRequest
 */
export interface UpdateAccountRequest {
  /**
   * @schema UpdateAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateAccountRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateAccountResponse
 */
export interface UpdateAccountResponse {
  /**
   * @schema UpdateAccountResponse#Account
   */
  readonly account?: Account;

}

/**
 * @schema UpdateAccountSettingsRequest
 */
export interface UpdateAccountSettingsRequest {
  /**
   * @schema UpdateAccountSettingsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateAccountSettingsRequest#AccountSettings
   */
  readonly accountSettings: AccountSettings;

}

/**
 * @schema UpdateAccountSettingsResponse
 */
export interface UpdateAccountSettingsResponse {
}

/**
 * @schema UpdateAppInstanceRequest
 */
export interface UpdateAppInstanceRequest {
  /**
   * @schema UpdateAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn: string;

  /**
   * @schema UpdateAppInstanceRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateAppInstanceRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema UpdateAppInstanceResponse
 */
export interface UpdateAppInstanceResponse {
  /**
   * @schema UpdateAppInstanceResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * @schema UpdateAppInstanceUserRequest
 */
export interface UpdateAppInstanceUserRequest {
  /**
   * @schema UpdateAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn: string;

  /**
   * @schema UpdateAppInstanceUserRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateAppInstanceUserRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema UpdateAppInstanceUserResponse
 */
export interface UpdateAppInstanceUserResponse {
  /**
   * @schema UpdateAppInstanceUserResponse#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * @schema UpdateBotRequest
 */
export interface UpdateBotRequest {
  /**
   * @schema UpdateBotRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateBotRequest#BotId
   */
  readonly botId: string;

  /**
   * @schema UpdateBotRequest#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * @schema UpdateBotResponse
 */
export interface UpdateBotResponse {
  /**
   * @schema UpdateBotResponse#Bot
   */
  readonly bot?: Bot;

}

/**
 * @schema UpdateChannelRequest
 */
export interface UpdateChannelRequest {
  /**
   * @schema UpdateChannelRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema UpdateChannelRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateChannelRequest#Mode
   */
  readonly mode: string;

  /**
   * @schema UpdateChannelRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema UpdateChannelResponse
 */
export interface UpdateChannelResponse {
  /**
   * @schema UpdateChannelResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * @schema UpdateChannelMessageRequest
 */
export interface UpdateChannelMessageRequest {
  /**
   * @schema UpdateChannelMessageRequest#ChannelArn
   */
  readonly channelArn: string;

  /**
   * @schema UpdateChannelMessageRequest#MessageId
   */
  readonly messageId: string;

  /**
   * @schema UpdateChannelMessageRequest#Content
   */
  readonly content?: string;

  /**
   * @schema UpdateChannelMessageRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema UpdateChannelMessageResponse
 */
export interface UpdateChannelMessageResponse {
  /**
   * @schema UpdateChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema UpdateChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * @schema UpdateChannelReadMarkerRequest
 */
export interface UpdateChannelReadMarkerRequest {
  /**
   * @schema UpdateChannelReadMarkerRequest#ChannelArn
   */
  readonly channelArn: string;

}

/**
 * @schema UpdateChannelReadMarkerResponse
 */
export interface UpdateChannelReadMarkerResponse {
  /**
   * @schema UpdateChannelReadMarkerResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * @schema UpdateGlobalSettingsRequest
 */
export interface UpdateGlobalSettingsRequest {
  /**
   * @schema UpdateGlobalSettingsRequest#BusinessCalling
   */
  readonly businessCalling: BusinessCallingSettings;

  /**
   * @schema UpdateGlobalSettingsRequest#VoiceConnector
   */
  readonly voiceConnector: VoiceConnectorSettings;

}

/**
 * @schema UpdatePhoneNumberRequest
 */
export interface UpdatePhoneNumberRequest {
  /**
   * @schema UpdatePhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId: string;

  /**
   * @schema UpdatePhoneNumberRequest#ProductType
   */
  readonly productType?: string;

  /**
   * @schema UpdatePhoneNumberRequest#CallingName
   */
  readonly callingName?: string;

}

/**
 * @schema UpdatePhoneNumberResponse
 */
export interface UpdatePhoneNumberResponse {
  /**
   * @schema UpdatePhoneNumberResponse#PhoneNumber
   */
  readonly phoneNumber?: PhoneNumber;

}

/**
 * @schema UpdatePhoneNumberSettingsRequest
 */
export interface UpdatePhoneNumberSettingsRequest {
  /**
   * @schema UpdatePhoneNumberSettingsRequest#CallingName
   */
  readonly callingName: string;

}

/**
 * @schema UpdateProxySessionRequest
 */
export interface UpdateProxySessionRequest {
  /**
   * @schema UpdateProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema UpdateProxySessionRequest#ProxySessionId
   */
  readonly proxySessionId: string;

  /**
   * @schema UpdateProxySessionRequest#Capabilities
   */
  readonly capabilities: string[];

  /**
   * @schema UpdateProxySessionRequest#ExpiryMinutes
   */
  readonly expiryMinutes?: number;

}

/**
 * @schema UpdateProxySessionResponse
 */
export interface UpdateProxySessionResponse {
  /**
   * @schema UpdateProxySessionResponse#ProxySession
   */
  readonly proxySession?: ProxySession;

}

/**
 * @schema UpdateRoomRequest
 */
export interface UpdateRoomRequest {
  /**
   * @schema UpdateRoomRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateRoomRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema UpdateRoomRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateRoomResponse
 */
export interface UpdateRoomResponse {
  /**
   * @schema UpdateRoomResponse#Room
   */
  readonly room?: Room;

}

/**
 * @schema UpdateRoomMembershipRequest
 */
export interface UpdateRoomMembershipRequest {
  /**
   * @schema UpdateRoomMembershipRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateRoomMembershipRequest#RoomId
   */
  readonly roomId: string;

  /**
   * @schema UpdateRoomMembershipRequest#MemberId
   */
  readonly memberId: string;

  /**
   * @schema UpdateRoomMembershipRequest#Role
   */
  readonly role?: string;

}

/**
 * @schema UpdateRoomMembershipResponse
 */
export interface UpdateRoomMembershipResponse {
  /**
   * @schema UpdateRoomMembershipResponse#RoomMembership
   */
  readonly roomMembership?: RoomMembership;

}

/**
 * @schema UpdateSipMediaApplicationRequest
 */
export interface UpdateSipMediaApplicationRequest {
  /**
   * @schema UpdateSipMediaApplicationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId: string;

  /**
   * @schema UpdateSipMediaApplicationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateSipMediaApplicationRequest#Endpoints
   */
  readonly endpoints?: SipMediaApplicationEndpoint[];

}

/**
 * @schema UpdateSipMediaApplicationResponse
 */
export interface UpdateSipMediaApplicationResponse {
  /**
   * @schema UpdateSipMediaApplicationResponse#SipMediaApplication
   */
  readonly sipMediaApplication?: SipMediaApplication;

}

/**
 * @schema UpdateSipRuleRequest
 */
export interface UpdateSipRuleRequest {
  /**
   * @schema UpdateSipRuleRequest#SipRuleId
   */
  readonly sipRuleId: string;

  /**
   * @schema UpdateSipRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateSipRuleRequest#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema UpdateSipRuleRequest#TargetApplications
   */
  readonly targetApplications?: SipRuleTargetApplication[];

}

/**
 * @schema UpdateSipRuleResponse
 */
export interface UpdateSipRuleResponse {
  /**
   * @schema UpdateSipRuleResponse#SipRule
   */
  readonly sipRule?: SipRule;

}

/**
 * @schema UpdateUserRequest
 */
export interface UpdateUserRequest {
  /**
   * @schema UpdateUserRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema UpdateUserRequest#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema UpdateUserRequest#UserType
   */
  readonly userType?: string;

  /**
   * @schema UpdateUserRequest#AlexaForBusinessMetadata
   */
  readonly alexaForBusinessMetadata?: AlexaForBusinessMetadata;

}

/**
 * @schema UpdateUserResponse
 */
export interface UpdateUserResponse {
  /**
   * @schema UpdateUserResponse#User
   */
  readonly user?: User;

}

/**
 * @schema UpdateUserSettingsRequest
 */
export interface UpdateUserSettingsRequest {
  /**
   * @schema UpdateUserSettingsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateUserSettingsRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema UpdateUserSettingsRequest#UserSettings
   */
  readonly userSettings: UserSettings;

}

/**
 * @schema UpdateVoiceConnectorRequest
 */
export interface UpdateVoiceConnectorRequest {
  /**
   * @schema UpdateVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema UpdateVoiceConnectorRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateVoiceConnectorRequest#RequireEncryption
   */
  readonly requireEncryption: boolean;

}

/**
 * @schema UpdateVoiceConnectorResponse
 */
export interface UpdateVoiceConnectorResponse {
  /**
   * @schema UpdateVoiceConnectorResponse#VoiceConnector
   */
  readonly voiceConnector?: VoiceConnector;

}

/**
 * @schema UpdateVoiceConnectorGroupRequest
 */
export interface UpdateVoiceConnectorGroupRequest {
  /**
   * @schema UpdateVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId: string;

  /**
   * @schema UpdateVoiceConnectorGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateVoiceConnectorGroupRequest#VoiceConnectorItems
   */
  readonly voiceConnectorItems: VoiceConnectorItem[];

}

/**
 * @schema UpdateVoiceConnectorGroupResponse
 */
export interface UpdateVoiceConnectorGroupResponse {
  /**
   * @schema UpdateVoiceConnectorGroupResponse#VoiceConnectorGroup
   */
  readonly voiceConnectorGroup?: VoiceConnectorGroup;

}

/**
 * @schema PhoneNumberError
 */
export interface PhoneNumberError {
  /**
   * @schema PhoneNumberError#PhoneNumberId
   */
  readonly phoneNumberId?: string;

  /**
   * @schema PhoneNumberError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema PhoneNumberError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema SigninDelegateGroup
 */
export interface SigninDelegateGroup {
  /**
   * @schema SigninDelegateGroup#GroupName
   */
  readonly groupName?: string;

}

/**
 * @schema CreateAttendeeRequestItem
 */
export interface CreateAttendeeRequestItem {
  /**
   * @schema CreateAttendeeRequestItem#ExternalUserId
   */
  readonly externalUserId: string;

  /**
   * @schema CreateAttendeeRequestItem#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Attendee
 */
export interface Attendee {
  /**
   * @schema Attendee#ExternalUserId
   */
  readonly externalUserId?: string;

  /**
   * @schema Attendee#AttendeeId
   */
  readonly attendeeId?: string;

  /**
   * @schema Attendee#JoinToken
   */
  readonly joinToken?: string;

}

/**
 * @schema CreateAttendeeError
 */
export interface CreateAttendeeError {
  /**
   * @schema CreateAttendeeError#ExternalUserId
   */
  readonly externalUserId?: string;

  /**
   * @schema CreateAttendeeError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CreateAttendeeError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema MembershipItem
 */
export interface MembershipItem {
  /**
   * @schema MembershipItem#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema MembershipItem#Role
   */
  readonly role?: string;

}

/**
 * @schema MemberError
 */
export interface MemberError {
  /**
   * @schema MemberError#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema MemberError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema MemberError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema UserError
 */
export interface UserError {
  /**
   * @schema UserError#UserId
   */
  readonly userId?: string;

  /**
   * @schema UserError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema UserError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema UpdatePhoneNumberRequestItem
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * @schema UpdatePhoneNumberRequestItem#PhoneNumberId
   */
  readonly phoneNumberId: string;

  /**
   * @schema UpdatePhoneNumberRequestItem#ProductType
   */
  readonly productType?: string;

  /**
   * @schema UpdatePhoneNumberRequestItem#CallingName
   */
  readonly callingName?: string;

}

/**
 * @schema UpdateUserRequestItem
 */
export interface UpdateUserRequestItem {
  /**
   * @schema UpdateUserRequestItem#UserId
   */
  readonly userId: string;

  /**
   * @schema UpdateUserRequestItem#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema UpdateUserRequestItem#UserType
   */
  readonly userType?: string;

  /**
   * @schema UpdateUserRequestItem#AlexaForBusinessMetadata
   */
  readonly alexaForBusinessMetadata?: AlexaForBusinessMetadata;

}

/**
 * @schema Account
 */
export interface Account {
  /**
   * @schema Account#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema Account#AccountId
   */
  readonly accountId: string;

  /**
   * @schema Account#Name
   */
  readonly name: string;

  /**
   * @schema Account#AccountType
   */
  readonly accountType?: string;

  /**
   * @schema Account#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema Account#DefaultLicense
   */
  readonly defaultLicense?: string;

  /**
   * @schema Account#SupportedLicenses
   */
  readonly supportedLicenses?: string[];

  /**
   * @schema Account#SigninDelegateGroups
   */
  readonly signinDelegateGroups?: SigninDelegateGroup[];

}

/**
 * @schema Identity
 */
export interface Identity {
  /**
   * @schema Identity#Arn
   */
  readonly arn?: string;

  /**
   * @schema Identity#Name
   */
  readonly name?: string;

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
 * @schema Bot
 */
export interface Bot {
  /**
   * @schema Bot#BotId
   */
  readonly botId?: string;

  /**
   * @schema Bot#UserId
   */
  readonly userId?: string;

  /**
   * @schema Bot#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Bot#BotType
   */
  readonly botType?: string;

  /**
   * @schema Bot#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema Bot#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema Bot#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

  /**
   * @schema Bot#BotEmail
   */
  readonly botEmail?: string;

  /**
   * @schema Bot#SecurityToken
   */
  readonly securityToken?: string;

}

/**
 * @schema MeetingNotificationConfiguration
 */
export interface MeetingNotificationConfiguration {
  /**
   * @schema MeetingNotificationConfiguration#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema MeetingNotificationConfiguration#SqsQueueArn
   */
  readonly sqsQueueArn?: string;

}

/**
 * @schema Meeting
 */
export interface Meeting {
  /**
   * @schema Meeting#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema Meeting#ExternalMeetingId
   */
  readonly externalMeetingId?: string;

  /**
   * @schema Meeting#MediaPlacement
   */
  readonly mediaPlacement?: MediaPlacement;

  /**
   * @schema Meeting#MediaRegion
   */
  readonly mediaRegion?: string;

}

/**
 * @schema PhoneNumberOrder
 */
export interface PhoneNumberOrder {
  /**
   * @schema PhoneNumberOrder#PhoneNumberOrderId
   */
  readonly phoneNumberOrderId?: string;

  /**
   * @schema PhoneNumberOrder#ProductType
   */
  readonly productType?: string;

  /**
   * @schema PhoneNumberOrder#Status
   */
  readonly status?: string;

  /**
   * @schema PhoneNumberOrder#OrderedPhoneNumbers
   */
  readonly orderedPhoneNumbers?: OrderedPhoneNumber[];

  /**
   * @schema PhoneNumberOrder#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema PhoneNumberOrder#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema GeoMatchParams
 */
export interface GeoMatchParams {
  /**
   * @schema GeoMatchParams#Country
   */
  readonly country: string;

  /**
   * @schema GeoMatchParams#AreaCode
   */
  readonly areaCode: string;

}

/**
 * @schema ProxySession
 */
export interface ProxySession {
  /**
   * @schema ProxySession#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ProxySession#ProxySessionId
   */
  readonly proxySessionId?: string;

  /**
   * @schema ProxySession#Name
   */
  readonly name?: string;

  /**
   * @schema ProxySession#Status
   */
  readonly status?: string;

  /**
   * @schema ProxySession#ExpiryMinutes
   */
  readonly expiryMinutes?: number;

  /**
   * @schema ProxySession#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema ProxySession#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ProxySession#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

  /**
   * @schema ProxySession#EndedTimestamp
   */
  readonly endedTimestamp?: string;

  /**
   * @schema ProxySession#Participants
   */
  readonly participants?: Participant[];

  /**
   * @schema ProxySession#NumberSelectionBehavior
   */
  readonly numberSelectionBehavior?: string;

  /**
   * @schema ProxySession#GeoMatchLevel
   */
  readonly geoMatchLevel?: string;

  /**
   * @schema ProxySession#GeoMatchParams
   */
  readonly geoMatchParams?: GeoMatchParams;

}

/**
 * @schema Room
 */
export interface Room {
  /**
   * @schema Room#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema Room#Name
   */
  readonly name?: string;

  /**
   * @schema Room#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Room#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema Room#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema Room#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema RoomMembership
 */
export interface RoomMembership {
  /**
   * @schema RoomMembership#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema RoomMembership#Member
   */
  readonly member?: Member;

  /**
   * @schema RoomMembership#Role
   */
  readonly role?: string;

  /**
   * @schema RoomMembership#InvitedBy
   */
  readonly invitedBy?: string;

  /**
   * @schema RoomMembership#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema SipMediaApplicationEndpoint
 */
export interface SipMediaApplicationEndpoint {
  /**
   * @schema SipMediaApplicationEndpoint#LambdaArn
   */
  readonly lambdaArn?: string;

}

/**
 * @schema SipMediaApplication
 */
export interface SipMediaApplication {
  /**
   * @schema SipMediaApplication#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema SipMediaApplication#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema SipMediaApplication#Name
   */
  readonly name?: string;

  /**
   * @schema SipMediaApplication#Endpoints
   */
  readonly endpoints?: SipMediaApplicationEndpoint[];

  /**
   * @schema SipMediaApplication#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema SipMediaApplication#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema SipMediaApplicationCall
 */
export interface SipMediaApplicationCall {
  /**
   * @schema SipMediaApplicationCall#TransactionId
   */
  readonly transactionId?: string;

}

/**
 * @schema SipRuleTargetApplication
 */
export interface SipRuleTargetApplication {
  /**
   * @schema SipRuleTargetApplication#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema SipRuleTargetApplication#Priority
   */
  readonly priority?: number;

  /**
   * @schema SipRuleTargetApplication#AwsRegion
   */
  readonly awsRegion?: string;

}

/**
 * @schema SipRule
 */
export interface SipRule {
  /**
   * @schema SipRule#SipRuleId
   */
  readonly sipRuleId?: string;

  /**
   * @schema SipRule#Name
   */
  readonly name?: string;

  /**
   * @schema SipRule#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema SipRule#TriggerType
   */
  readonly triggerType?: string;

  /**
   * @schema SipRule#TriggerValue
   */
  readonly triggerValue?: string;

  /**
   * @schema SipRule#TargetApplications
   */
  readonly targetApplications?: SipRuleTargetApplication[];

  /**
   * @schema SipRule#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema SipRule#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema User
 */
export interface User {
  /**
   * @schema User#UserId
   */
  readonly userId: string;

  /**
   * @schema User#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema User#PrimaryEmail
   */
  readonly primaryEmail?: string;

  /**
   * @schema User#PrimaryProvisionedNumber
   */
  readonly primaryProvisionedNumber?: string;

  /**
   * @schema User#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema User#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema User#UserType
   */
  readonly userType?: string;

  /**
   * @schema User#UserRegistrationStatus
   */
  readonly userRegistrationStatus?: string;

  /**
   * @schema User#UserInvitationStatus
   */
  readonly userInvitationStatus?: string;

  /**
   * @schema User#RegisteredOn
   */
  readonly registeredOn?: string;

  /**
   * @schema User#InvitedOn
   */
  readonly invitedOn?: string;

  /**
   * @schema User#AlexaForBusinessMetadata
   */
  readonly alexaForBusinessMetadata?: AlexaForBusinessMetadata;

  /**
   * @schema User#PersonalPIN
   */
  readonly personalPin?: string;

}

/**
 * @schema VoiceConnector
 */
export interface VoiceConnector {
  /**
   * @schema VoiceConnector#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema VoiceConnector#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema VoiceConnector#Name
   */
  readonly name?: string;

  /**
   * @schema VoiceConnector#OutboundHostName
   */
  readonly outboundHostName?: string;

  /**
   * @schema VoiceConnector#RequireEncryption
   */
  readonly requireEncryption?: boolean;

  /**
   * @schema VoiceConnector#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema VoiceConnector#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema VoiceConnectorItem
 */
export interface VoiceConnectorItem {
  /**
   * @schema VoiceConnectorItem#VoiceConnectorId
   */
  readonly voiceConnectorId: string;

  /**
   * @schema VoiceConnectorItem#Priority
   */
  readonly priority: number;

}

/**
 * @schema VoiceConnectorGroup
 */
export interface VoiceConnectorGroup {
  /**
   * @schema VoiceConnectorGroup#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId?: string;

  /**
   * @schema VoiceConnectorGroup#Name
   */
  readonly name?: string;

  /**
   * @schema VoiceConnectorGroup#VoiceConnectorItems
   */
  readonly voiceConnectorItems?: VoiceConnectorItem[];

  /**
   * @schema VoiceConnectorGroup#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema VoiceConnectorGroup#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * @schema AppInstance
 */
export interface AppInstance {
  /**
   * @schema AppInstance#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema AppInstance#Name
   */
  readonly name?: string;

  /**
   * @schema AppInstance#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema AppInstance#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema AppInstance#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema AppInstanceAdmin
 */
export interface AppInstanceAdmin {
  /**
   * @schema AppInstanceAdmin#Admin
   */
  readonly admin?: Identity;

  /**
   * @schema AppInstanceAdmin#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema AppInstanceAdmin#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * @schema AppInstanceUser
 */
export interface AppInstanceUser {
  /**
   * @schema AppInstanceUser#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema AppInstanceUser#Name
   */
  readonly name?: string;

  /**
   * @schema AppInstanceUser#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema AppInstanceUser#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema AppInstanceUser#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema Channel
 */
export interface Channel {
  /**
   * @schema Channel#Name
   */
  readonly name?: string;

  /**
   * @schema Channel#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema Channel#Mode
   */
  readonly mode?: string;

  /**
   * @schema Channel#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema Channel#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema Channel#CreatedBy
   */
  readonly createdBy?: Identity;

  /**
   * @schema Channel#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema Channel#LastMessageTimestamp
   */
  readonly lastMessageTimestamp?: string;

  /**
   * @schema Channel#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema ChannelBan
 */
export interface ChannelBan {
  /**
   * @schema ChannelBan#Member
   */
  readonly member?: Identity;

  /**
   * @schema ChannelBan#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChannelBan#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChannelBan#CreatedBy
   */
  readonly createdBy?: Identity;

}

/**
 * @schema ChannelMembership
 */
export interface ChannelMembership {
  /**
   * @schema ChannelMembership#InvitedBy
   */
  readonly invitedBy?: Identity;

  /**
   * @schema ChannelMembership#Type
   */
  readonly type?: string;

  /**
   * @schema ChannelMembership#Member
   */
  readonly member?: Identity;

  /**
   * @schema ChannelMembership#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChannelMembership#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChannelMembership#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema ChannelMembershipForAppInstanceUserSummary
 */
export interface ChannelMembershipForAppInstanceUserSummary {
  /**
   * @schema ChannelMembershipForAppInstanceUserSummary#ChannelSummary
   */
  readonly channelSummary?: ChannelSummary;

  /**
   * @schema ChannelMembershipForAppInstanceUserSummary#AppInstanceUserMembershipSummary
   */
  readonly appInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;

}

/**
 * @schema ChannelModeratedByAppInstanceUserSummary
 */
export interface ChannelModeratedByAppInstanceUserSummary {
  /**
   * @schema ChannelModeratedByAppInstanceUserSummary#ChannelSummary
   */
  readonly channelSummary?: ChannelSummary;

}

/**
 * @schema ChannelModerator
 */
export interface ChannelModerator {
  /**
   * @schema ChannelModerator#Moderator
   */
  readonly moderator?: Identity;

  /**
   * @schema ChannelModerator#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChannelModerator#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChannelModerator#CreatedBy
   */
  readonly createdBy?: Identity;

}

/**
 * @schema AccountSettings
 */
export interface AccountSettings {
  /**
   * @schema AccountSettings#DisableRemoteControl
   */
  readonly disableRemoteControl?: boolean;

  /**
   * @schema AccountSettings#EnableDialOut
   */
  readonly enableDialOut?: boolean;

}

/**
 * @schema AppInstanceRetentionSettings
 */
export interface AppInstanceRetentionSettings {
  /**
   * @schema AppInstanceRetentionSettings#ChannelRetentionSettings
   */
  readonly channelRetentionSettings?: ChannelRetentionSettings;

}

/**
 * @schema AppInstanceStreamingConfiguration
 */
export interface AppInstanceStreamingConfiguration {
  /**
   * @schema AppInstanceStreamingConfiguration#AppInstanceDataType
   */
  readonly appInstanceDataType: string;

  /**
   * @schema AppInstanceStreamingConfiguration#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ChannelMessage
 */
export interface ChannelMessage {
  /**
   * @schema ChannelMessage#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChannelMessage#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChannelMessage#Content
   */
  readonly content?: string;

  /**
   * @schema ChannelMessage#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChannelMessage#Type
   */
  readonly type?: string;

  /**
   * @schema ChannelMessage#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChannelMessage#LastEditedTimestamp
   */
  readonly lastEditedTimestamp?: string;

  /**
   * @schema ChannelMessage#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ChannelMessage#Sender
   */
  readonly sender?: Identity;

  /**
   * @schema ChannelMessage#Redacted
   */
  readonly redacted?: boolean;

  /**
   * @schema ChannelMessage#Persistence
   */
  readonly persistence?: string;

}

/**
 * @schema EventsConfiguration
 */
export interface EventsConfiguration {
  /**
   * @schema EventsConfiguration#BotId
   */
  readonly botId?: string;

  /**
   * @schema EventsConfiguration#OutboundEventsHTTPSEndpoint
   */
  readonly outboundEventsHttpsEndpoint?: string;

  /**
   * @schema EventsConfiguration#LambdaFunctionArn
   */
  readonly lambdaFunctionArn?: string;

}

/**
 * @schema BusinessCallingSettings
 */
export interface BusinessCallingSettings {
  /**
   * @schema BusinessCallingSettings#CdrBucket
   */
  readonly cdrBucket?: string;

}

/**
 * @schema VoiceConnectorSettings
 */
export interface VoiceConnectorSettings {
  /**
   * @schema VoiceConnectorSettings#CdrBucket
   */
  readonly cdrBucket?: string;

}

/**
 * @schema MessagingSessionEndpoint
 */
export interface MessagingSessionEndpoint {
  /**
   * @schema MessagingSessionEndpoint#Url
   */
  readonly url?: string;

}

/**
 * @schema PhoneNumber
 */
export interface PhoneNumber {
  /**
   * @schema PhoneNumber#PhoneNumberId
   */
  readonly phoneNumberId?: string;

  /**
   * @schema PhoneNumber#E164PhoneNumber
   */
  readonly e164PhoneNumber?: string;

  /**
   * @schema PhoneNumber#Type
   */
  readonly type?: string;

  /**
   * @schema PhoneNumber#ProductType
   */
  readonly productType?: string;

  /**
   * @schema PhoneNumber#Status
   */
  readonly status?: string;

  /**
   * @schema PhoneNumber#Capabilities
   */
  readonly capabilities?: PhoneNumberCapabilities;

  /**
   * @schema PhoneNumber#Associations
   */
  readonly associations?: PhoneNumberAssociation[];

  /**
   * @schema PhoneNumber#CallingName
   */
  readonly callingName?: string;

  /**
   * @schema PhoneNumber#CallingNameStatus
   */
  readonly callingNameStatus?: string;

  /**
   * @schema PhoneNumber#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema PhoneNumber#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

  /**
   * @schema PhoneNumber#DeletionTimestamp
   */
  readonly deletionTimestamp?: string;

}

/**
 * @schema RetentionSettings
 */
export interface RetentionSettings {
  /**
   * @schema RetentionSettings#RoomRetentionSettings
   */
  readonly roomRetentionSettings?: RoomRetentionSettings;

  /**
   * @schema RetentionSettings#ConversationRetentionSettings
   */
  readonly conversationRetentionSettings?: ConversationRetentionSettings;

}

/**
 * @schema SipMediaApplicationLoggingConfiguration
 */
export interface SipMediaApplicationLoggingConfiguration {
  /**
   * @schema SipMediaApplicationLoggingConfiguration#EnableSipMediaApplicationMessageLogs
   */
  readonly enableSipMediaApplicationMessageLogs?: boolean;

}

/**
 * @schema UserSettings
 */
export interface UserSettings {
  /**
   * @schema UserSettings#Telephony
   */
  readonly telephony: TelephonySettings;

}

/**
 * @schema EmergencyCallingConfiguration
 */
export interface EmergencyCallingConfiguration {
  /**
   * @schema EmergencyCallingConfiguration#DNIS
   */
  readonly dnis?: DnisEmergencyCallingConfiguration[];

}

/**
 * @schema LoggingConfiguration
 */
export interface LoggingConfiguration {
  /**
   * @schema LoggingConfiguration#EnableSIPLogs
   */
  readonly enableSipLogs?: boolean;

}

/**
 * @schema Origination
 */
export interface Origination {
  /**
   * @schema Origination#Routes
   */
  readonly routes?: OriginationRoute[];

  /**
   * @schema Origination#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * @schema Proxy
 */
export interface Proxy {
  /**
   * @schema Proxy#DefaultSessionExpiryMinutes
   */
  readonly defaultSessionExpiryMinutes?: number;

  /**
   * @schema Proxy#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema Proxy#FallBackPhoneNumber
   */
  readonly fallBackPhoneNumber?: string;

  /**
   * @schema Proxy#PhoneNumberCountries
   */
  readonly phoneNumberCountries?: string[];

}

/**
 * @schema StreamingConfiguration
 */
export interface StreamingConfiguration {
  /**
   * @schema StreamingConfiguration#DataRetentionInHours
   */
  readonly dataRetentionInHours: number;

  /**
   * @schema StreamingConfiguration#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema StreamingConfiguration#StreamingNotificationTargets
   */
  readonly streamingNotificationTargets?: StreamingNotificationTarget[];

}

/**
 * @schema Termination
 */
export interface Termination {
  /**
   * @schema Termination#CpsLimit
   */
  readonly cpsLimit?: number;

  /**
   * @schema Termination#DefaultPhoneNumber
   */
  readonly defaultPhoneNumber?: string;

  /**
   * @schema Termination#CallingRegions
   */
  readonly callingRegions?: string[];

  /**
   * @schema Termination#CidrAllowedList
   */
  readonly cidrAllowedList?: string[];

  /**
   * @schema Termination#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * @schema TerminationHealth
 */
export interface TerminationHealth {
  /**
   * @schema TerminationHealth#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema TerminationHealth#Source
   */
  readonly source?: string;

}

/**
 * @schema Invite
 */
export interface Invite {
  /**
   * @schema Invite#InviteId
   */
  readonly inviteId?: string;

  /**
   * @schema Invite#Status
   */
  readonly status?: string;

  /**
   * @schema Invite#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Invite#EmailStatus
   */
  readonly emailStatus?: string;

}

/**
 * @schema AppInstanceAdminSummary
 */
export interface AppInstanceAdminSummary {
  /**
   * @schema AppInstanceAdminSummary#Admin
   */
  readonly admin?: Identity;

}

/**
 * @schema AppInstanceUserSummary
 */
export interface AppInstanceUserSummary {
  /**
   * @schema AppInstanceUserSummary#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema AppInstanceUserSummary#Name
   */
  readonly name?: string;

  /**
   * @schema AppInstanceUserSummary#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema AppInstanceSummary
 */
export interface AppInstanceSummary {
  /**
   * @schema AppInstanceSummary#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema AppInstanceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema AppInstanceSummary#Metadata
   */
  readonly metadata?: string;

}

/**
 * @schema ChannelBanSummary
 */
export interface ChannelBanSummary {
  /**
   * @schema ChannelBanSummary#Member
   */
  readonly member?: Identity;

}

/**
 * @schema ChannelMembershipSummary
 */
export interface ChannelMembershipSummary {
  /**
   * @schema ChannelMembershipSummary#Member
   */
  readonly member?: Identity;

}

/**
 * @schema ChannelMessageSummary
 */
export interface ChannelMessageSummary {
  /**
   * @schema ChannelMessageSummary#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChannelMessageSummary#Content
   */
  readonly content?: string;

  /**
   * @schema ChannelMessageSummary#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChannelMessageSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ChannelMessageSummary#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChannelMessageSummary#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ChannelMessageSummary#LastEditedTimestamp
   */
  readonly lastEditedTimestamp?: string;

  /**
   * @schema ChannelMessageSummary#Sender
   */
  readonly sender?: Identity;

  /**
   * @schema ChannelMessageSummary#Redacted
   */
  readonly redacted?: boolean;

}

/**
 * @schema ChannelModeratorSummary
 */
export interface ChannelModeratorSummary {
  /**
   * @schema ChannelModeratorSummary#Moderator
   */
  readonly moderator?: Identity;

}

/**
 * @schema ChannelSummary
 */
export interface ChannelSummary {
  /**
   * @schema ChannelSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChannelSummary#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChannelSummary#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChannelSummary#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChannelSummary#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChannelSummary#LastMessageTimestamp
   */
  readonly lastMessageTimestamp?: string;

}

/**
 * @schema Credential
 */
export interface Credential {
  /**
   * @schema Credential#Username
   */
  readonly username?: string;

  /**
   * @schema Credential#Password
   */
  readonly password?: string;

}

/**
 * @schema AlexaForBusinessMetadata
 */
export interface AlexaForBusinessMetadata {
  /**
   * @schema AlexaForBusinessMetadata#IsAlexaForBusinessEnabled
   */
  readonly isAlexaForBusinessEnabled?: boolean;

  /**
   * @schema AlexaForBusinessMetadata#AlexaForBusinessRoomArn
   */
  readonly alexaForBusinessRoomArn?: string;

}

/**
 * @schema MediaPlacement
 */
export interface MediaPlacement {
  /**
   * @schema MediaPlacement#AudioHostUrl
   */
  readonly audioHostUrl?: string;

  /**
   * @schema MediaPlacement#AudioFallbackUrl
   */
  readonly audioFallbackUrl?: string;

  /**
   * @schema MediaPlacement#ScreenDataUrl
   */
  readonly screenDataUrl?: string;

  /**
   * @schema MediaPlacement#ScreenSharingUrl
   */
  readonly screenSharingUrl?: string;

  /**
   * @schema MediaPlacement#ScreenViewingUrl
   */
  readonly screenViewingUrl?: string;

  /**
   * @schema MediaPlacement#SignalingUrl
   */
  readonly signalingUrl?: string;

  /**
   * @schema MediaPlacement#TurnControlUrl
   */
  readonly turnControlUrl?: string;

}

/**
 * @schema OrderedPhoneNumber
 */
export interface OrderedPhoneNumber {
  /**
   * @schema OrderedPhoneNumber#E164PhoneNumber
   */
  readonly e164PhoneNumber?: string;

  /**
   * @schema OrderedPhoneNumber#Status
   */
  readonly status?: string;

}

/**
 * @schema Participant
 */
export interface Participant {
  /**
   * @schema Participant#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema Participant#ProxyPhoneNumber
   */
  readonly proxyPhoneNumber?: string;

}

/**
 * @schema Member
 */
export interface Member {
  /**
   * @schema Member#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema Member#MemberType
   */
  readonly memberType?: string;

  /**
   * @schema Member#Email
   */
  readonly email?: string;

  /**
   * @schema Member#FullName
   */
  readonly fullName?: string;

  /**
   * @schema Member#AccountId
   */
  readonly accountId?: string;

}

/**
 * @schema AppInstanceUserMembershipSummary
 */
export interface AppInstanceUserMembershipSummary {
  /**
   * @schema AppInstanceUserMembershipSummary#Type
   */
  readonly type?: string;

  /**
   * @schema AppInstanceUserMembershipSummary#ReadMarkerTimestamp
   */
  readonly readMarkerTimestamp?: string;

}

/**
 * @schema ChannelRetentionSettings
 */
export interface ChannelRetentionSettings {
  /**
   * @schema ChannelRetentionSettings#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * @schema PhoneNumberCapabilities
 */
export interface PhoneNumberCapabilities {
  /**
   * @schema PhoneNumberCapabilities#InboundCall
   */
  readonly inboundCall?: boolean;

  /**
   * @schema PhoneNumberCapabilities#OutboundCall
   */
  readonly outboundCall?: boolean;

  /**
   * @schema PhoneNumberCapabilities#InboundSMS
   */
  readonly inboundSms?: boolean;

  /**
   * @schema PhoneNumberCapabilities#OutboundSMS
   */
  readonly outboundSms?: boolean;

  /**
   * @schema PhoneNumberCapabilities#InboundMMS
   */
  readonly inboundMms?: boolean;

  /**
   * @schema PhoneNumberCapabilities#OutboundMMS
   */
  readonly outboundMms?: boolean;

}

/**
 * @schema PhoneNumberAssociation
 */
export interface PhoneNumberAssociation {
  /**
   * @schema PhoneNumberAssociation#Value
   */
  readonly value?: string;

  /**
   * @schema PhoneNumberAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema PhoneNumberAssociation#AssociatedTimestamp
   */
  readonly associatedTimestamp?: string;

}

/**
 * @schema RoomRetentionSettings
 */
export interface RoomRetentionSettings {
  /**
   * @schema RoomRetentionSettings#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * @schema ConversationRetentionSettings
 */
export interface ConversationRetentionSettings {
  /**
   * @schema ConversationRetentionSettings#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * @schema TelephonySettings
 */
export interface TelephonySettings {
  /**
   * @schema TelephonySettings#InboundCalling
   */
  readonly inboundCalling: boolean;

  /**
   * @schema TelephonySettings#OutboundCalling
   */
  readonly outboundCalling: boolean;

  /**
   * @schema TelephonySettings#SMS
   */
  readonly sms: boolean;

}

/**
 * @schema DnisEmergencyCallingConfiguration
 */
export interface DnisEmergencyCallingConfiguration {
  /**
   * @schema DnisEmergencyCallingConfiguration#EmergencyPhoneNumber
   */
  readonly emergencyPhoneNumber: string;

  /**
   * @schema DnisEmergencyCallingConfiguration#TestPhoneNumber
   */
  readonly testPhoneNumber?: string;

  /**
   * @schema DnisEmergencyCallingConfiguration#CallingCountry
   */
  readonly callingCountry: string;

}

/**
 * @schema OriginationRoute
 */
export interface OriginationRoute {
  /**
   * @schema OriginationRoute#Host
   */
  readonly host?: string;

  /**
   * @schema OriginationRoute#Port
   */
  readonly port?: number;

  /**
   * @schema OriginationRoute#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema OriginationRoute#Priority
   */
  readonly priority?: number;

  /**
   * @schema OriginationRoute#Weight
   */
  readonly weight?: number;

}

/**
 * @schema StreamingNotificationTarget
 */
export interface StreamingNotificationTarget {
  /**
   * @schema StreamingNotificationTarget#NotificationTarget
   */
  readonly notificationTarget: string;

}
