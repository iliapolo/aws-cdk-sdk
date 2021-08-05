import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ChimeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associatePhoneNumberWithUser(input: shapes.ChimeAssociatePhoneNumberWithUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associatePhoneNumberWithUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.AssociatePhoneNumberWithUser'),
        parameters: {
          AccountId: input.accountId,
          UserId: input.userId,
          E164PhoneNumber: input.e164PhoneNumber,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociatePhoneNumberWithUser', props);
  }

  public associatePhoneNumbersWithVoiceConnector(input: shapes.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest): ChimeResponsesAssociatePhoneNumbersWithVoiceConnector {
    return new ChimeResponsesAssociatePhoneNumbersWithVoiceConnector(this, this.__resources, input);
  }

  public associatePhoneNumbersWithVoiceConnectorGroup(input: shapes.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest): ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup {
    return new ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup(this, this.__resources, input);
  }

  public associateSigninDelegateGroupsWithAccount(input: shapes.ChimeAssociateSigninDelegateGroupsWithAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateSigninDelegateGroupsWithAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.AssociateSigninDelegateGroupsWithAccount'),
        parameters: {
          AccountId: input.accountId,
          SigninDelegateGroups: input.signinDelegateGroups,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateSigninDelegateGroupsWithAccount', props);
  }

  public batchCreateAttendee(input: shapes.ChimeBatchCreateAttendeeRequest): ChimeResponsesBatchCreateAttendee {
    return new ChimeResponsesBatchCreateAttendee(this, this.__resources, input);
  }

  public batchCreateRoomMembership(input: shapes.ChimeBatchCreateRoomMembershipRequest): ChimeResponsesBatchCreateRoomMembership {
    return new ChimeResponsesBatchCreateRoomMembership(this, this.__resources, input);
  }

  public batchDeletePhoneNumber(input: shapes.ChimeBatchDeletePhoneNumberRequest): ChimeResponsesBatchDeletePhoneNumber {
    return new ChimeResponsesBatchDeletePhoneNumber(this, this.__resources, input);
  }

  public batchSuspendUser(input: shapes.ChimeBatchSuspendUserRequest): ChimeResponsesBatchSuspendUser {
    return new ChimeResponsesBatchSuspendUser(this, this.__resources, input);
  }

  public batchUnsuspendUser(input: shapes.ChimeBatchUnsuspendUserRequest): ChimeResponsesBatchUnsuspendUser {
    return new ChimeResponsesBatchUnsuspendUser(this, this.__resources, input);
  }

  public batchUpdatePhoneNumber(input: shapes.ChimeBatchUpdatePhoneNumberRequest): ChimeResponsesBatchUpdatePhoneNumber {
    return new ChimeResponsesBatchUpdatePhoneNumber(this, this.__resources, input);
  }

  public batchUpdateUser(input: shapes.ChimeBatchUpdateUserRequest): ChimeResponsesBatchUpdateUser {
    return new ChimeResponsesBatchUpdateUser(this, this.__resources, input);
  }

  public createAccount(input: shapes.ChimeCreateAccountRequest): ChimeResponsesCreateAccount {
    return new ChimeResponsesCreateAccount(this, this.__resources, input);
  }

  public createAppInstance(input: shapes.ChimeCreateAppInstanceRequest): ChimeResponsesCreateAppInstance {
    return new ChimeResponsesCreateAppInstance(this, this.__resources, input);
  }

  public createAppInstanceAdmin(input: shapes.ChimeCreateAppInstanceAdminRequest): ChimeResponsesCreateAppInstanceAdmin {
    return new ChimeResponsesCreateAppInstanceAdmin(this, this.__resources, input);
  }

  public createAppInstanceUser(input: shapes.ChimeCreateAppInstanceUserRequest): ChimeResponsesCreateAppInstanceUser {
    return new ChimeResponsesCreateAppInstanceUser(this, this.__resources, input);
  }

  public createAttendee(input: shapes.ChimeCreateAttendeeRequest): ChimeResponsesCreateAttendee {
    return new ChimeResponsesCreateAttendee(this, this.__resources, input);
  }

  public createBot(input: shapes.ChimeCreateBotRequest): ChimeResponsesCreateBot {
    return new ChimeResponsesCreateBot(this, this.__resources, input);
  }

  public createChannel(input: shapes.ChimeCreateChannelRequest): ChimeResponsesCreateChannel {
    return new ChimeResponsesCreateChannel(this, this.__resources, input);
  }

  public createChannelBan(input: shapes.ChimeCreateChannelBanRequest): ChimeResponsesCreateChannelBan {
    return new ChimeResponsesCreateChannelBan(this, this.__resources, input);
  }

  public createChannelMembership(input: shapes.ChimeCreateChannelMembershipRequest): ChimeResponsesCreateChannelMembership {
    return new ChimeResponsesCreateChannelMembership(this, this.__resources, input);
  }

  public createChannelModerator(input: shapes.ChimeCreateChannelModeratorRequest): ChimeResponsesCreateChannelModerator {
    return new ChimeResponsesCreateChannelModerator(this, this.__resources, input);
  }

  public createMeeting(input: shapes.ChimeCreateMeetingRequest): ChimeResponsesCreateMeeting {
    return new ChimeResponsesCreateMeeting(this, this.__resources, input);
  }

  public createMeetingDialOut(input: shapes.ChimeCreateMeetingDialOutRequest): ChimeResponsesCreateMeetingDialOut {
    return new ChimeResponsesCreateMeetingDialOut(this, this.__resources, input);
  }

  public createMeetingWithAttendees(input: shapes.ChimeCreateMeetingWithAttendeesRequest): ChimeResponsesCreateMeetingWithAttendees {
    return new ChimeResponsesCreateMeetingWithAttendees(this, this.__resources, input);
  }

  public createPhoneNumberOrder(input: shapes.ChimeCreatePhoneNumberOrderRequest): ChimeResponsesCreatePhoneNumberOrder {
    return new ChimeResponsesCreatePhoneNumberOrder(this, this.__resources, input);
  }

  public createProxySession(input: shapes.ChimeCreateProxySessionRequest): ChimeResponsesCreateProxySession {
    return new ChimeResponsesCreateProxySession(this, this.__resources, input);
  }

  public createRoom(input: shapes.ChimeCreateRoomRequest): ChimeResponsesCreateRoom {
    return new ChimeResponsesCreateRoom(this, this.__resources, input);
  }

  public createRoomMembership(input: shapes.ChimeCreateRoomMembershipRequest): ChimeResponsesCreateRoomMembership {
    return new ChimeResponsesCreateRoomMembership(this, this.__resources, input);
  }

  public createSipMediaApplication(input: shapes.ChimeCreateSipMediaApplicationRequest): ChimeResponsesCreateSipMediaApplication {
    return new ChimeResponsesCreateSipMediaApplication(this, this.__resources, input);
  }

  public createSipMediaApplicationCall(input: shapes.ChimeCreateSipMediaApplicationCallRequest): ChimeResponsesCreateSipMediaApplicationCall {
    return new ChimeResponsesCreateSipMediaApplicationCall(this, this.__resources, input);
  }

  public createSipRule(input: shapes.ChimeCreateSipRuleRequest): ChimeResponsesCreateSipRule {
    return new ChimeResponsesCreateSipRule(this, this.__resources, input);
  }

  public createUser(input: shapes.ChimeCreateUserRequest): ChimeResponsesCreateUser {
    return new ChimeResponsesCreateUser(this, this.__resources, input);
  }

  public createVoiceConnector(input: shapes.ChimeCreateVoiceConnectorRequest): ChimeResponsesCreateVoiceConnector {
    return new ChimeResponsesCreateVoiceConnector(this, this.__resources, input);
  }

  public createVoiceConnectorGroup(input: shapes.ChimeCreateVoiceConnectorGroupRequest): ChimeResponsesCreateVoiceConnectorGroup {
    return new ChimeResponsesCreateVoiceConnectorGroup(this, this.__resources, input);
  }

  public deleteAccount(input: shapes.ChimeDeleteAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteAccount'),
        parameters: {
          AccountId: input.accountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccount', props);
  }

  public deleteAppInstance(input: shapes.ChimeDeleteAppInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppInstance',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteAppInstance'),
        parameters: {
          AppInstanceArn: input.appInstanceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppInstance', props);
  }

  public deleteAppInstanceAdmin(input: shapes.ChimeDeleteAppInstanceAdminRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppInstanceAdmin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteAppInstanceAdmin'),
        parameters: {
          AppInstanceAdminArn: input.appInstanceAdminArn,
          AppInstanceArn: input.appInstanceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppInstanceAdmin', props);
  }

  public deleteAppInstanceStreamingConfigurations(input: shapes.ChimeDeleteAppInstanceStreamingConfigurationsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppInstanceStreamingConfigurations',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteAppInstanceStreamingConfigurations'),
        parameters: {
          AppInstanceArn: input.appInstanceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppInstanceStreamingConfigurations', props);
  }

  public deleteAppInstanceUser(input: shapes.ChimeDeleteAppInstanceUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteAppInstanceUser'),
        parameters: {
          AppInstanceUserArn: input.appInstanceUserArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppInstanceUser', props);
  }

  public deleteAttendee(input: shapes.ChimeDeleteAttendeeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteAttendee'),
        parameters: {
          MeetingId: input.meetingId,
          AttendeeId: input.attendeeId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAttendee', props);
  }

  public deleteChannel(input: shapes.ChimeDeleteChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteChannel'),
        parameters: {
          ChannelArn: input.channelArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannel', props);
  }

  public deleteChannelBan(input: shapes.ChimeDeleteChannelBanRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannelBan',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteChannelBan'),
        parameters: {
          ChannelArn: input.channelArn,
          MemberArn: input.memberArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannelBan', props);
  }

  public deleteChannelMembership(input: shapes.ChimeDeleteChannelMembershipRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteChannelMembership'),
        parameters: {
          ChannelArn: input.channelArn,
          MemberArn: input.memberArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannelMembership', props);
  }

  public deleteChannelMessage(input: shapes.ChimeDeleteChannelMessageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteChannelMessage'),
        parameters: {
          ChannelArn: input.channelArn,
          MessageId: input.messageId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannelMessage', props);
  }

  public deleteChannelModerator(input: shapes.ChimeDeleteChannelModeratorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannelModerator',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteChannelModerator'),
        parameters: {
          ChannelArn: input.channelArn,
          ChannelModeratorArn: input.channelModeratorArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannelModerator', props);
  }

  public deleteEventsConfiguration(input: shapes.ChimeDeleteEventsConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventsConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteEventsConfiguration'),
        parameters: {
          AccountId: input.accountId,
          BotId: input.botId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEventsConfiguration', props);
  }

  public deleteMeeting(input: shapes.ChimeDeleteMeetingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteMeeting'),
        parameters: {
          MeetingId: input.meetingId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMeeting', props);
  }

  public deletePhoneNumber(input: shapes.ChimeDeletePhoneNumberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeletePhoneNumber'),
        parameters: {
          PhoneNumberId: input.phoneNumberId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePhoneNumber', props);
  }

  public deleteProxySession(input: shapes.ChimeDeleteProxySessionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteProxySession'),
        parameters: {
          VoiceConnectorId: input.voiceConnectorId,
          ProxySessionId: input.proxySessionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProxySession', props);
  }

  public deleteRoom(input: shapes.ChimeDeleteRoomRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteRoom'),
        parameters: {
          AccountId: input.accountId,
          RoomId: input.roomId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRoom', props);
  }

  public deleteRoomMembership(input: shapes.ChimeDeleteRoomMembershipRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteRoomMembership'),
        parameters: {
          AccountId: input.accountId,
          RoomId: input.roomId,
          MemberId: input.memberId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRoomMembership', props);
  }

  public deleteSipMediaApplication(input: shapes.ChimeDeleteSipMediaApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteSipMediaApplication'),
        parameters: {
          SipMediaApplicationId: input.sipMediaApplicationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSipMediaApplication', props);
  }

  public deleteSipRule(input: shapes.ChimeDeleteSipRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteSipRule'),
        parameters: {
          SipRuleId: input.sipRuleId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSipRule', props);
  }

  public deleteVoiceConnector(input: shapes.ChimeDeleteVoiceConnectorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteVoiceConnector'),
        parameters: {
          VoiceConnectorId: input.voiceConnectorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVoiceConnector', props);
  }

  public deleteVoiceConnectorEmergencyCallingConfiguration(input: shapes.ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVoiceConnectorEmergencyCallingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteVoiceConnectorEmergencyCallingConfiguration'),
        parameters: {
          VoiceConnectorId: input.voiceConnectorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVoiceConnectorEmergencyCallingConfiguration', props);
  }

  public deleteVoiceConnectorGroup(input: shapes.ChimeDeleteVoiceConnectorGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteVoiceConnectorGroup'),
        parameters: {
          VoiceConnectorGroupId: input.voiceConnectorGroupId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVoiceConnectorGroup', props);
  }

  public deleteVoiceConnectorOrigination(input: shapes.ChimeDeleteVoiceConnectorOriginationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVoiceConnectorOrigination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteVoiceConnectorOrigination'),
        parameters: {
          VoiceConnectorId: input.voiceConnectorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVoiceConnectorOrigination', props);
  }

  public deleteVoiceConnectorProxy(input: shapes.ChimeDeleteVoiceConnectorProxyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVoiceConnectorProxy',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteVoiceConnectorProxy'),
        parameters: {
          VoiceConnectorId: input.voiceConnectorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVoiceConnectorProxy', props);
  }

  public deleteVoiceConnectorStreamingConfiguration(input: shapes.ChimeDeleteVoiceConnectorStreamingConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVoiceConnectorStreamingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteVoiceConnectorStreamingConfiguration'),
        parameters: {
          VoiceConnectorId: input.voiceConnectorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVoiceConnectorStreamingConfiguration', props);
  }

  public deleteVoiceConnectorTermination(input: shapes.ChimeDeleteVoiceConnectorTerminationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteVoiceConnectorTermination'),
        parameters: {
          VoiceConnectorId: input.voiceConnectorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVoiceConnectorTermination', props);
  }

  public deleteVoiceConnectorTerminationCredentials(input: shapes.ChimeDeleteVoiceConnectorTerminationCredentialsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVoiceConnectorTerminationCredentials',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DeleteVoiceConnectorTerminationCredentials'),
        parameters: {
          VoiceConnectorId: input.voiceConnectorId,
          Usernames: input.usernames,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVoiceConnectorTerminationCredentials', props);
  }

  public describeAppInstance(input: shapes.ChimeDescribeAppInstanceRequest): ChimeResponsesDescribeAppInstance {
    return new ChimeResponsesDescribeAppInstance(this, this.__resources, input);
  }

  public describeAppInstanceAdmin(input: shapes.ChimeDescribeAppInstanceAdminRequest): ChimeResponsesDescribeAppInstanceAdmin {
    return new ChimeResponsesDescribeAppInstanceAdmin(this, this.__resources, input);
  }

  public describeAppInstanceUser(input: shapes.ChimeDescribeAppInstanceUserRequest): ChimeResponsesDescribeAppInstanceUser {
    return new ChimeResponsesDescribeAppInstanceUser(this, this.__resources, input);
  }

  public describeChannel(input: shapes.ChimeDescribeChannelRequest): ChimeResponsesDescribeChannel {
    return new ChimeResponsesDescribeChannel(this, this.__resources, input);
  }

  public describeChannelBan(input: shapes.ChimeDescribeChannelBanRequest): ChimeResponsesDescribeChannelBan {
    return new ChimeResponsesDescribeChannelBan(this, this.__resources, input);
  }

  public describeChannelMembership(input: shapes.ChimeDescribeChannelMembershipRequest): ChimeResponsesDescribeChannelMembership {
    return new ChimeResponsesDescribeChannelMembership(this, this.__resources, input);
  }

  public describeChannelMembershipForAppInstanceUser(input: shapes.ChimeDescribeChannelMembershipForAppInstanceUserRequest): ChimeResponsesDescribeChannelMembershipForAppInstanceUser {
    return new ChimeResponsesDescribeChannelMembershipForAppInstanceUser(this, this.__resources, input);
  }

  public describeChannelModeratedByAppInstanceUser(input: shapes.ChimeDescribeChannelModeratedByAppInstanceUserRequest): ChimeResponsesDescribeChannelModeratedByAppInstanceUser {
    return new ChimeResponsesDescribeChannelModeratedByAppInstanceUser(this, this.__resources, input);
  }

  public describeChannelModerator(input: shapes.ChimeDescribeChannelModeratorRequest): ChimeResponsesDescribeChannelModerator {
    return new ChimeResponsesDescribeChannelModerator(this, this.__resources, input);
  }

  public disassociatePhoneNumberFromUser(input: shapes.ChimeDisassociatePhoneNumberFromUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociatePhoneNumberFromUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DisassociatePhoneNumberFromUser'),
        parameters: {
          AccountId: input.accountId,
          UserId: input.userId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociatePhoneNumberFromUser', props);
  }

  public disassociatePhoneNumbersFromVoiceConnector(input: shapes.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest): ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector {
    return new ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector(this, this.__resources, input);
  }

  public disassociatePhoneNumbersFromVoiceConnectorGroup(input: shapes.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest): ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup {
    return new ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup(this, this.__resources, input);
  }

  public disassociateSigninDelegateGroupsFromAccount(input: shapes.ChimeDisassociateSigninDelegateGroupsFromAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateSigninDelegateGroupsFromAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DisassociateSigninDelegateGroupsFromAccount'),
        parameters: {
          AccountId: input.accountId,
          GroupNames: input.groupNames,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateSigninDelegateGroupsFromAccount', props);
  }

  public fetchAccount(input: shapes.ChimeGetAccountRequest): ChimeResponsesFetchAccount {
    return new ChimeResponsesFetchAccount(this, this.__resources, input);
  }

  public fetchAccountSettings(input: shapes.ChimeGetAccountSettingsRequest): ChimeResponsesFetchAccountSettings {
    return new ChimeResponsesFetchAccountSettings(this, this.__resources, input);
  }

  public fetchAppInstanceRetentionSettings(input: shapes.ChimeGetAppInstanceRetentionSettingsRequest): ChimeResponsesFetchAppInstanceRetentionSettings {
    return new ChimeResponsesFetchAppInstanceRetentionSettings(this, this.__resources, input);
  }

  public fetchAppInstanceStreamingConfigurations(input: shapes.ChimeGetAppInstanceStreamingConfigurationsRequest): ChimeResponsesFetchAppInstanceStreamingConfigurations {
    return new ChimeResponsesFetchAppInstanceStreamingConfigurations(this, this.__resources, input);
  }

  public fetchAttendee(input: shapes.ChimeGetAttendeeRequest): ChimeResponsesFetchAttendee {
    return new ChimeResponsesFetchAttendee(this, this.__resources, input);
  }

  public fetchBot(input: shapes.ChimeGetBotRequest): ChimeResponsesFetchBot {
    return new ChimeResponsesFetchBot(this, this.__resources, input);
  }

  public fetchChannelMessage(input: shapes.ChimeGetChannelMessageRequest): ChimeResponsesFetchChannelMessage {
    return new ChimeResponsesFetchChannelMessage(this, this.__resources, input);
  }

  public fetchEventsConfiguration(input: shapes.ChimeGetEventsConfigurationRequest): ChimeResponsesFetchEventsConfiguration {
    return new ChimeResponsesFetchEventsConfiguration(this, this.__resources, input);
  }

  public fetchGlobalSettings(): ChimeResponsesFetchGlobalSettings {
    return new ChimeResponsesFetchGlobalSettings(this, this.__resources);
  }

  public fetchMeeting(input: shapes.ChimeGetMeetingRequest): ChimeResponsesFetchMeeting {
    return new ChimeResponsesFetchMeeting(this, this.__resources, input);
  }

  public fetchMessagingSessionEndpoint(): ChimeResponsesFetchMessagingSessionEndpoint {
    return new ChimeResponsesFetchMessagingSessionEndpoint(this, this.__resources);
  }

  public fetchPhoneNumber(input: shapes.ChimeGetPhoneNumberRequest): ChimeResponsesFetchPhoneNumber {
    return new ChimeResponsesFetchPhoneNumber(this, this.__resources, input);
  }

  public fetchPhoneNumberOrder(input: shapes.ChimeGetPhoneNumberOrderRequest): ChimeResponsesFetchPhoneNumberOrder {
    return new ChimeResponsesFetchPhoneNumberOrder(this, this.__resources, input);
  }

  public fetchPhoneNumberSettings(): ChimeResponsesFetchPhoneNumberSettings {
    return new ChimeResponsesFetchPhoneNumberSettings(this, this.__resources);
  }

  public fetchProxySession(input: shapes.ChimeGetProxySessionRequest): ChimeResponsesFetchProxySession {
    return new ChimeResponsesFetchProxySession(this, this.__resources, input);
  }

  public fetchRetentionSettings(input: shapes.ChimeGetRetentionSettingsRequest): ChimeResponsesFetchRetentionSettings {
    return new ChimeResponsesFetchRetentionSettings(this, this.__resources, input);
  }

  public fetchRoom(input: shapes.ChimeGetRoomRequest): ChimeResponsesFetchRoom {
    return new ChimeResponsesFetchRoom(this, this.__resources, input);
  }

  public fetchSipMediaApplication(input: shapes.ChimeGetSipMediaApplicationRequest): ChimeResponsesFetchSipMediaApplication {
    return new ChimeResponsesFetchSipMediaApplication(this, this.__resources, input);
  }

  public fetchSipMediaApplicationLoggingConfiguration(input: shapes.ChimeGetSipMediaApplicationLoggingConfigurationRequest): ChimeResponsesFetchSipMediaApplicationLoggingConfiguration {
    return new ChimeResponsesFetchSipMediaApplicationLoggingConfiguration(this, this.__resources, input);
  }

  public fetchSipRule(input: shapes.ChimeGetSipRuleRequest): ChimeResponsesFetchSipRule {
    return new ChimeResponsesFetchSipRule(this, this.__resources, input);
  }

  public fetchUser(input: shapes.ChimeGetUserRequest): ChimeResponsesFetchUser {
    return new ChimeResponsesFetchUser(this, this.__resources, input);
  }

  public fetchUserSettings(input: shapes.ChimeGetUserSettingsRequest): ChimeResponsesFetchUserSettings {
    return new ChimeResponsesFetchUserSettings(this, this.__resources, input);
  }

  public fetchVoiceConnector(input: shapes.ChimeGetVoiceConnectorRequest): ChimeResponsesFetchVoiceConnector {
    return new ChimeResponsesFetchVoiceConnector(this, this.__resources, input);
  }

  public fetchVoiceConnectorEmergencyCallingConfiguration(input: shapes.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest): ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration {
    return new ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration(this, this.__resources, input);
  }

  public fetchVoiceConnectorGroup(input: shapes.ChimeGetVoiceConnectorGroupRequest): ChimeResponsesFetchVoiceConnectorGroup {
    return new ChimeResponsesFetchVoiceConnectorGroup(this, this.__resources, input);
  }

  public fetchVoiceConnectorLoggingConfiguration(input: shapes.ChimeGetVoiceConnectorLoggingConfigurationRequest): ChimeResponsesFetchVoiceConnectorLoggingConfiguration {
    return new ChimeResponsesFetchVoiceConnectorLoggingConfiguration(this, this.__resources, input);
  }

  public fetchVoiceConnectorOrigination(input: shapes.ChimeGetVoiceConnectorOriginationRequest): ChimeResponsesFetchVoiceConnectorOrigination {
    return new ChimeResponsesFetchVoiceConnectorOrigination(this, this.__resources, input);
  }

  public fetchVoiceConnectorProxy(input: shapes.ChimeGetVoiceConnectorProxyRequest): ChimeResponsesFetchVoiceConnectorProxy {
    return new ChimeResponsesFetchVoiceConnectorProxy(this, this.__resources, input);
  }

  public fetchVoiceConnectorStreamingConfiguration(input: shapes.ChimeGetVoiceConnectorStreamingConfigurationRequest): ChimeResponsesFetchVoiceConnectorStreamingConfiguration {
    return new ChimeResponsesFetchVoiceConnectorStreamingConfiguration(this, this.__resources, input);
  }

  public fetchVoiceConnectorTermination(input: shapes.ChimeGetVoiceConnectorTerminationRequest): ChimeResponsesFetchVoiceConnectorTermination {
    return new ChimeResponsesFetchVoiceConnectorTermination(this, this.__resources, input);
  }

  public fetchVoiceConnectorTerminationHealth(input: shapes.ChimeGetVoiceConnectorTerminationHealthRequest): ChimeResponsesFetchVoiceConnectorTerminationHealth {
    return new ChimeResponsesFetchVoiceConnectorTerminationHealth(this, this.__resources, input);
  }

  public inviteUsers(input: shapes.ChimeInviteUsersRequest): ChimeResponsesInviteUsers {
    return new ChimeResponsesInviteUsers(this, this.__resources, input);
  }

  public listAccounts(input: shapes.ChimeListAccountsRequest): ChimeResponsesListAccounts {
    return new ChimeResponsesListAccounts(this, this.__resources, input);
  }

  public listAppInstanceAdmins(input: shapes.ChimeListAppInstanceAdminsRequest): ChimeResponsesListAppInstanceAdmins {
    return new ChimeResponsesListAppInstanceAdmins(this, this.__resources, input);
  }

  public listAppInstanceUsers(input: shapes.ChimeListAppInstanceUsersRequest): ChimeResponsesListAppInstanceUsers {
    return new ChimeResponsesListAppInstanceUsers(this, this.__resources, input);
  }

  public listAppInstances(input: shapes.ChimeListAppInstancesRequest): ChimeResponsesListAppInstances {
    return new ChimeResponsesListAppInstances(this, this.__resources, input);
  }

  public listAttendeeTags(input: shapes.ChimeListAttendeeTagsRequest): ChimeResponsesListAttendeeTags {
    return new ChimeResponsesListAttendeeTags(this, this.__resources, input);
  }

  public listAttendees(input: shapes.ChimeListAttendeesRequest): ChimeResponsesListAttendees {
    return new ChimeResponsesListAttendees(this, this.__resources, input);
  }

  public listBots(input: shapes.ChimeListBotsRequest): ChimeResponsesListBots {
    return new ChimeResponsesListBots(this, this.__resources, input);
  }

  public listChannelBans(input: shapes.ChimeListChannelBansRequest): ChimeResponsesListChannelBans {
    return new ChimeResponsesListChannelBans(this, this.__resources, input);
  }

  public listChannelMemberships(input: shapes.ChimeListChannelMembershipsRequest): ChimeResponsesListChannelMemberships {
    return new ChimeResponsesListChannelMemberships(this, this.__resources, input);
  }

  public listChannelMembershipsForAppInstanceUser(input: shapes.ChimeListChannelMembershipsForAppInstanceUserRequest): ChimeResponsesListChannelMembershipsForAppInstanceUser {
    return new ChimeResponsesListChannelMembershipsForAppInstanceUser(this, this.__resources, input);
  }

  public listChannelMessages(input: shapes.ChimeListChannelMessagesRequest): ChimeResponsesListChannelMessages {
    return new ChimeResponsesListChannelMessages(this, this.__resources, input);
  }

  public listChannelModerators(input: shapes.ChimeListChannelModeratorsRequest): ChimeResponsesListChannelModerators {
    return new ChimeResponsesListChannelModerators(this, this.__resources, input);
  }

  public listChannels(input: shapes.ChimeListChannelsRequest): ChimeResponsesListChannels {
    return new ChimeResponsesListChannels(this, this.__resources, input);
  }

  public listChannelsModeratedByAppInstanceUser(input: shapes.ChimeListChannelsModeratedByAppInstanceUserRequest): ChimeResponsesListChannelsModeratedByAppInstanceUser {
    return new ChimeResponsesListChannelsModeratedByAppInstanceUser(this, this.__resources, input);
  }

  public listMeetingTags(input: shapes.ChimeListMeetingTagsRequest): ChimeResponsesListMeetingTags {
    return new ChimeResponsesListMeetingTags(this, this.__resources, input);
  }

  public listMeetings(input: shapes.ChimeListMeetingsRequest): ChimeResponsesListMeetings {
    return new ChimeResponsesListMeetings(this, this.__resources, input);
  }

  public listPhoneNumberOrders(input: shapes.ChimeListPhoneNumberOrdersRequest): ChimeResponsesListPhoneNumberOrders {
    return new ChimeResponsesListPhoneNumberOrders(this, this.__resources, input);
  }

  public listPhoneNumbers(input: shapes.ChimeListPhoneNumbersRequest): ChimeResponsesListPhoneNumbers {
    return new ChimeResponsesListPhoneNumbers(this, this.__resources, input);
  }

  public listProxySessions(input: shapes.ChimeListProxySessionsRequest): ChimeResponsesListProxySessions {
    return new ChimeResponsesListProxySessions(this, this.__resources, input);
  }

  public listRoomMemberships(input: shapes.ChimeListRoomMembershipsRequest): ChimeResponsesListRoomMemberships {
    return new ChimeResponsesListRoomMemberships(this, this.__resources, input);
  }

  public listRooms(input: shapes.ChimeListRoomsRequest): ChimeResponsesListRooms {
    return new ChimeResponsesListRooms(this, this.__resources, input);
  }

  public listSipMediaApplications(input: shapes.ChimeListSipMediaApplicationsRequest): ChimeResponsesListSipMediaApplications {
    return new ChimeResponsesListSipMediaApplications(this, this.__resources, input);
  }

  public listSipRules(input: shapes.ChimeListSipRulesRequest): ChimeResponsesListSipRules {
    return new ChimeResponsesListSipRules(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.ChimeListTagsForResourceRequest): ChimeResponsesListTagsForResource {
    return new ChimeResponsesListTagsForResource(this, this.__resources, input);
  }

  public listUsers(input: shapes.ChimeListUsersRequest): ChimeResponsesListUsers {
    return new ChimeResponsesListUsers(this, this.__resources, input);
  }

  public listVoiceConnectorGroups(input: shapes.ChimeListVoiceConnectorGroupsRequest): ChimeResponsesListVoiceConnectorGroups {
    return new ChimeResponsesListVoiceConnectorGroups(this, this.__resources, input);
  }

  public listVoiceConnectorTerminationCredentials(input: shapes.ChimeListVoiceConnectorTerminationCredentialsRequest): ChimeResponsesListVoiceConnectorTerminationCredentials {
    return new ChimeResponsesListVoiceConnectorTerminationCredentials(this, this.__resources, input);
  }

  public listVoiceConnectors(input: shapes.ChimeListVoiceConnectorsRequest): ChimeResponsesListVoiceConnectors {
    return new ChimeResponsesListVoiceConnectors(this, this.__resources, input);
  }

  public logoutUser(input: shapes.ChimeLogoutUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'logoutUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.LogoutUser'),
        parameters: {
          AccountId: input.accountId,
          UserId: input.userId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'LogoutUser', props);
  }

  public putAppInstanceRetentionSettings(input: shapes.ChimePutAppInstanceRetentionSettingsRequest): ChimeResponsesPutAppInstanceRetentionSettings {
    return new ChimeResponsesPutAppInstanceRetentionSettings(this, this.__resources, input);
  }

  public putAppInstanceStreamingConfigurations(input: shapes.ChimePutAppInstanceStreamingConfigurationsRequest): ChimeResponsesPutAppInstanceStreamingConfigurations {
    return new ChimeResponsesPutAppInstanceStreamingConfigurations(this, this.__resources, input);
  }

  public putEventsConfiguration(input: shapes.ChimePutEventsConfigurationRequest): ChimeResponsesPutEventsConfiguration {
    return new ChimeResponsesPutEventsConfiguration(this, this.__resources, input);
  }

  public putRetentionSettings(input: shapes.ChimePutRetentionSettingsRequest): ChimeResponsesPutRetentionSettings {
    return new ChimeResponsesPutRetentionSettings(this, this.__resources, input);
  }

  public putSipMediaApplicationLoggingConfiguration(input: shapes.ChimePutSipMediaApplicationLoggingConfigurationRequest): ChimeResponsesPutSipMediaApplicationLoggingConfiguration {
    return new ChimeResponsesPutSipMediaApplicationLoggingConfiguration(this, this.__resources, input);
  }

  public putVoiceConnectorEmergencyCallingConfiguration(input: shapes.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest): ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration {
    return new ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration(this, this.__resources, input);
  }

  public putVoiceConnectorLoggingConfiguration(input: shapes.ChimePutVoiceConnectorLoggingConfigurationRequest): ChimeResponsesPutVoiceConnectorLoggingConfiguration {
    return new ChimeResponsesPutVoiceConnectorLoggingConfiguration(this, this.__resources, input);
  }

  public putVoiceConnectorOrigination(input: shapes.ChimePutVoiceConnectorOriginationRequest): ChimeResponsesPutVoiceConnectorOrigination {
    return new ChimeResponsesPutVoiceConnectorOrigination(this, this.__resources, input);
  }

  public putVoiceConnectorProxy(input: shapes.ChimePutVoiceConnectorProxyRequest): ChimeResponsesPutVoiceConnectorProxy {
    return new ChimeResponsesPutVoiceConnectorProxy(this, this.__resources, input);
  }

  public putVoiceConnectorStreamingConfiguration(input: shapes.ChimePutVoiceConnectorStreamingConfigurationRequest): ChimeResponsesPutVoiceConnectorStreamingConfiguration {
    return new ChimeResponsesPutVoiceConnectorStreamingConfiguration(this, this.__resources, input);
  }

  public putVoiceConnectorTermination(input: shapes.ChimePutVoiceConnectorTerminationRequest): ChimeResponsesPutVoiceConnectorTermination {
    return new ChimeResponsesPutVoiceConnectorTermination(this, this.__resources, input);
  }

  public putVoiceConnectorTerminationCredentials(input: shapes.ChimePutVoiceConnectorTerminationCredentialsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorTerminationCredentials',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorTerminationCredentials'),
        parameters: {
          VoiceConnectorId: input.voiceConnectorId,
          Credentials: input.credentials,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutVoiceConnectorTerminationCredentials', props);
  }

  public redactChannelMessage(input: shapes.ChimeRedactChannelMessageRequest): ChimeResponsesRedactChannelMessage {
    return new ChimeResponsesRedactChannelMessage(this, this.__resources, input);
  }

  public redactConversationMessage(input: shapes.ChimeRedactConversationMessageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'redactConversationMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RedactConversationMessage'),
        parameters: {
          AccountId: input.accountId,
          ConversationId: input.conversationId,
          MessageId: input.messageId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RedactConversationMessage', props);
  }

  public redactRoomMessage(input: shapes.ChimeRedactRoomMessageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'redactRoomMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RedactRoomMessage'),
        parameters: {
          AccountId: input.accountId,
          RoomId: input.roomId,
          MessageId: input.messageId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RedactRoomMessage', props);
  }

  public regenerateSecurityToken(input: shapes.ChimeRegenerateSecurityTokenRequest): ChimeResponsesRegenerateSecurityToken {
    return new ChimeResponsesRegenerateSecurityToken(this, this.__resources, input);
  }

  public resetPersonalPin(input: shapes.ChimeResetPersonalPinRequest): ChimeResponsesResetPersonalPin {
    return new ChimeResponsesResetPersonalPin(this, this.__resources, input);
  }

  public restorePhoneNumber(input: shapes.ChimeRestorePhoneNumberRequest): ChimeResponsesRestorePhoneNumber {
    return new ChimeResponsesRestorePhoneNumber(this, this.__resources, input);
  }

  public searchAvailablePhoneNumbers(input: shapes.ChimeSearchAvailablePhoneNumbersRequest): ChimeResponsesSearchAvailablePhoneNumbers {
    return new ChimeResponsesSearchAvailablePhoneNumbers(this, this.__resources, input);
  }

  public sendChannelMessage(input: shapes.ChimeSendChannelMessageRequest): ChimeResponsesSendChannelMessage {
    return new ChimeResponsesSendChannelMessage(this, this.__resources, input);
  }

  public tagAttendee(input: shapes.ChimeTagAttendeeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.TagAttendee'),
        parameters: {
          MeetingId: input.meetingId,
          AttendeeId: input.attendeeId,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagAttendee', props);
  }

  public tagMeeting(input: shapes.ChimeTagMeetingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.TagMeeting'),
        parameters: {
          MeetingId: input.meetingId,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagMeeting', props);
  }

  public tagResource(input: shapes.ChimeTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagAttendee(input: shapes.ChimeUntagAttendeeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UntagAttendee'),
        parameters: {
          MeetingId: input.meetingId,
          AttendeeId: input.attendeeId,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagAttendee', props);
  }

  public untagMeeting(input: shapes.ChimeUntagMeetingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UntagMeeting'),
        parameters: {
          MeetingId: input.meetingId,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagMeeting', props);
  }

  public untagResource(input: shapes.ChimeUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAccount(input: shapes.ChimeUpdateAccountRequest): ChimeResponsesUpdateAccount {
    return new ChimeResponsesUpdateAccount(this, this.__resources, input);
  }

  public updateAccountSettings(input: shapes.ChimeUpdateAccountSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAccountSettings'),
        parameters: {
          AccountId: input.accountId,
          AccountSettings: {
            DisableRemoteControl: input.accountSettings.disableRemoteControl,
            EnableDialOut: input.accountSettings.enableDialOut,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAccountSettings', props);
  }

  public updateAppInstance(input: shapes.ChimeUpdateAppInstanceRequest): ChimeResponsesUpdateAppInstance {
    return new ChimeResponsesUpdateAppInstance(this, this.__resources, input);
  }

  public updateAppInstanceUser(input: shapes.ChimeUpdateAppInstanceUserRequest): ChimeResponsesUpdateAppInstanceUser {
    return new ChimeResponsesUpdateAppInstanceUser(this, this.__resources, input);
  }

  public updateBot(input: shapes.ChimeUpdateBotRequest): ChimeResponsesUpdateBot {
    return new ChimeResponsesUpdateBot(this, this.__resources, input);
  }

  public updateChannel(input: shapes.ChimeUpdateChannelRequest): ChimeResponsesUpdateChannel {
    return new ChimeResponsesUpdateChannel(this, this.__resources, input);
  }

  public updateChannelMessage(input: shapes.ChimeUpdateChannelMessageRequest): ChimeResponsesUpdateChannelMessage {
    return new ChimeResponsesUpdateChannelMessage(this, this.__resources, input);
  }

  public updateChannelReadMarker(input: shapes.ChimeUpdateChannelReadMarkerRequest): ChimeResponsesUpdateChannelReadMarker {
    return new ChimeResponsesUpdateChannelReadMarker(this, this.__resources, input);
  }

  public updateGlobalSettings(input: shapes.ChimeUpdateGlobalSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateGlobalSettings'),
        parameters: {
          BusinessCalling: {
            CdrBucket: input.businessCalling.cdrBucket,
          },
          VoiceConnector: {
            CdrBucket: input.voiceConnector.cdrBucket,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateGlobalSettings', props);
  }

  public updatePhoneNumber(input: shapes.ChimeUpdatePhoneNumberRequest): ChimeResponsesUpdatePhoneNumber {
    return new ChimeResponsesUpdatePhoneNumber(this, this.__resources, input);
  }

  public updatePhoneNumberSettings(input: shapes.ChimeUpdatePhoneNumberSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumberSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumberSettings'),
        parameters: {
          CallingName: input.callingName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePhoneNumberSettings', props);
  }

  public updateProxySession(input: shapes.ChimeUpdateProxySessionRequest): ChimeResponsesUpdateProxySession {
    return new ChimeResponsesUpdateProxySession(this, this.__resources, input);
  }

  public updateRoom(input: shapes.ChimeUpdateRoomRequest): ChimeResponsesUpdateRoom {
    return new ChimeResponsesUpdateRoom(this, this.__resources, input);
  }

  public updateRoomMembership(input: shapes.ChimeUpdateRoomMembershipRequest): ChimeResponsesUpdateRoomMembership {
    return new ChimeResponsesUpdateRoomMembership(this, this.__resources, input);
  }

  public updateSipMediaApplication(input: shapes.ChimeUpdateSipMediaApplicationRequest): ChimeResponsesUpdateSipMediaApplication {
    return new ChimeResponsesUpdateSipMediaApplication(this, this.__resources, input);
  }

  public updateSipRule(input: shapes.ChimeUpdateSipRuleRequest): ChimeResponsesUpdateSipRule {
    return new ChimeResponsesUpdateSipRule(this, this.__resources, input);
  }

  public updateUser(input: shapes.ChimeUpdateUserRequest): ChimeResponsesUpdateUser {
    return new ChimeResponsesUpdateUser(this, this.__resources, input);
  }

  public updateUserSettings(input: shapes.ChimeUpdateUserSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUserSettings'),
        parameters: {
          AccountId: input.accountId,
          UserId: input.userId,
          UserSettings: {
            Telephony: {
              InboundCalling: input.userSettings.telephony.inboundCalling,
              OutboundCalling: input.userSettings.telephony.outboundCalling,
              SMS: input.userSettings.telephony.sms,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserSettings', props);
  }

  public updateVoiceConnector(input: shapes.ChimeUpdateVoiceConnectorRequest): ChimeResponsesUpdateVoiceConnector {
    return new ChimeResponsesUpdateVoiceConnector(this, this.__resources, input);
  }

  public updateVoiceConnectorGroup(input: shapes.ChimeUpdateVoiceConnectorGroupRequest): ChimeResponsesUpdateVoiceConnectorGroup {
    return new ChimeResponsesUpdateVoiceConnectorGroup(this, this.__resources, input);
  }

}

export class ChimeResponsesAssociatePhoneNumbersWithVoiceConnector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest) {
  }

  public get phoneNumberErrors(): shapes.ChimePhoneNumberError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associatePhoneNumbersWithVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.AssociatePhoneNumbersWithVoiceConnector.PhoneNumberErrors'),
        outputPath: 'PhoneNumberErrors',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          E164PhoneNumbers: this.__input.e164PhoneNumbers,
          ForceAssociate: this.__input.forceAssociate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociatePhoneNumbersWithVoiceConnector.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest) {
  }

  public get phoneNumberErrors(): shapes.ChimePhoneNumberError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associatePhoneNumbersWithVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.AssociatePhoneNumbersWithVoiceConnectorGroup.PhoneNumberErrors'),
        outputPath: 'PhoneNumberErrors',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
          E164PhoneNumbers: this.__input.e164PhoneNumbers,
          ForceAssociate: this.__input.forceAssociate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociatePhoneNumbersWithVoiceConnectorGroup.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeResponsesBatchCreateAttendee {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeBatchCreateAttendeeRequest) {
  }

  public get attendees(): shapes.ChimeAttendee[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.BatchCreateAttendee.Attendees'),
        outputPath: 'Attendees',
        parameters: {
          MeetingId: this.__input.meetingId,
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateAttendee.Attendees', props);
    return resource.getResponseField('Attendees') as unknown as shapes.ChimeAttendee[];
  }

  public get errors(): shapes.ChimeCreateAttendeeError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.BatchCreateAttendee.Errors'),
        outputPath: 'Errors',
        parameters: {
          MeetingId: this.__input.meetingId,
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateAttendee.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.ChimeCreateAttendeeError[];
  }

}

export class ChimeResponsesBatchCreateRoomMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeBatchCreateRoomMembershipRequest) {
  }

  public get errors(): shapes.ChimeMemberError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.BatchCreateRoomMembership.Errors'),
        outputPath: 'Errors',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MembershipItemList: this.__input.membershipItemList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateRoomMembership.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.ChimeMemberError[];
  }

}

export class ChimeResponsesBatchDeletePhoneNumber {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeBatchDeletePhoneNumberRequest) {
  }

  public get phoneNumberErrors(): shapes.ChimePhoneNumberError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeletePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.BatchDeletePhoneNumber.PhoneNumberErrors'),
        outputPath: 'PhoneNumberErrors',
        parameters: {
          PhoneNumberIds: this.__input.phoneNumberIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeletePhoneNumber.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeResponsesBatchSuspendUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeBatchSuspendUserRequest) {
  }

  public get userErrors(): shapes.ChimeUserError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchSuspendUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.BatchSuspendUser.UserErrors'),
        outputPath: 'UserErrors',
        parameters: {
          AccountId: this.__input.accountId,
          UserIdList: this.__input.userIdList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchSuspendUser.UserErrors', props);
    return resource.getResponseField('UserErrors') as unknown as shapes.ChimeUserError[];
  }

}

export class ChimeResponsesBatchUnsuspendUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeBatchUnsuspendUserRequest) {
  }

  public get userErrors(): shapes.ChimeUserError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUnsuspendUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.BatchUnsuspendUser.UserErrors'),
        outputPath: 'UserErrors',
        parameters: {
          AccountId: this.__input.accountId,
          UserIdList: this.__input.userIdList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUnsuspendUser.UserErrors', props);
    return resource.getResponseField('UserErrors') as unknown as shapes.ChimeUserError[];
  }

}

export class ChimeResponsesBatchUpdatePhoneNumber {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeBatchUpdatePhoneNumberRequest) {
  }

  public get phoneNumberErrors(): shapes.ChimePhoneNumberError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.BatchUpdatePhoneNumber.PhoneNumberErrors'),
        outputPath: 'PhoneNumberErrors',
        parameters: {
          UpdatePhoneNumberRequestItems: this.__input.updatePhoneNumberRequestItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpdatePhoneNumber.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeResponsesBatchUpdateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeBatchUpdateUserRequest) {
  }

  public get userErrors(): shapes.ChimeUserError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.BatchUpdateUser.UserErrors'),
        outputPath: 'UserErrors',
        parameters: {
          AccountId: this.__input.accountId,
          UpdateUserRequestItems: this.__input.updateUserRequestItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpdateUser.UserErrors', props);
    return resource.getResponseField('UserErrors') as unknown as shapes.ChimeUserError[];
  }

}

export class ChimeResponsesCreateAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateAccountRequest) {
  }

  public get account(): ChimeResponsesCreateAccountAccount {
    return new ChimeResponsesCreateAccountAccount(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateAccountAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateAccountRequest) {
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAccount.Account.AwsAccountId'),
        outputPath: 'Account.AwsAccountId',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.Account.AwsAccountId', props);
    return resource.getResponseField('Account.AwsAccountId') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAccount.Account.AccountId'),
        outputPath: 'Account.AccountId',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.Account.AccountId', props);
    return resource.getResponseField('Account.AccountId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAccount.Account.Name'),
        outputPath: 'Account.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.Account.Name', props);
    return resource.getResponseField('Account.Name') as unknown as string;
  }

  public get accountType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAccount.Account.AccountType'),
        outputPath: 'Account.AccountType',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.Account.AccountType', props);
    return resource.getResponseField('Account.AccountType') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAccount.Account.CreatedTimestamp'),
        outputPath: 'Account.CreatedTimestamp',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.Account.CreatedTimestamp', props);
    return resource.getResponseField('Account.CreatedTimestamp') as unknown as string;
  }

  public get defaultLicense(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAccount.Account.DefaultLicense'),
        outputPath: 'Account.DefaultLicense',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.Account.DefaultLicense', props);
    return resource.getResponseField('Account.DefaultLicense') as unknown as string;
  }

  public get supportedLicenses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAccount.Account.SupportedLicenses'),
        outputPath: 'Account.SupportedLicenses',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.Account.SupportedLicenses', props);
    return resource.getResponseField('Account.SupportedLicenses') as unknown as string[];
  }

  public get signinDelegateGroups(): shapes.ChimeSigninDelegateGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAccount.Account.SigninDelegateGroups'),
        outputPath: 'Account.SigninDelegateGroups',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.Account.SigninDelegateGroups', props);
    return resource.getResponseField('Account.SigninDelegateGroups') as unknown as shapes.ChimeSigninDelegateGroup[];
  }

}

export class ChimeResponsesCreateAppInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateAppInstanceRequest) {
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppInstance',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAppInstance.AppInstanceArn'),
        outputPath: 'AppInstanceArn',
        parameters: {
          Name: this.__input.name,
          Metadata: this.__input.metadata,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppInstance.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

}

export class ChimeResponsesCreateAppInstanceAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateAppInstanceAdminRequest) {
  }

  public get appInstanceAdmin(): ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin {
    return new ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin(this.__scope, this.__resources, this.__input);
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppInstanceAdmin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAppInstanceAdmin.AppInstanceArn'),
        outputPath: 'AppInstanceArn',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppInstanceAdmin.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

}

export class ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateAppInstanceAdminRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppInstanceAdmin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAppInstanceAdmin.AppInstanceAdmin.Arn'),
        outputPath: 'AppInstanceAdmin.Arn',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppInstanceAdmin.AppInstanceAdmin.Arn', props);
    return resource.getResponseField('AppInstanceAdmin.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppInstanceAdmin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAppInstanceAdmin.AppInstanceAdmin.Name'),
        outputPath: 'AppInstanceAdmin.Name',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppInstanceAdmin.AppInstanceAdmin.Name', props);
    return resource.getResponseField('AppInstanceAdmin.Name') as unknown as string;
  }

}

export class ChimeResponsesCreateAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateAppInstanceUserRequest) {
  }

  public get appInstanceUserArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAppInstanceUser.AppInstanceUserArn'),
        outputPath: 'AppInstanceUserArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          AppInstanceUserId: this.__input.appInstanceUserId,
          Name: this.__input.name,
          Metadata: this.__input.metadata,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppInstanceUser.AppInstanceUserArn', props);
    return resource.getResponseField('AppInstanceUserArn') as unknown as string;
  }

}

export class ChimeResponsesCreateAttendee {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateAttendeeRequest) {
  }

  public get attendee(): ChimeResponsesCreateAttendeeAttendee {
    return new ChimeResponsesCreateAttendeeAttendee(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateAttendeeAttendee {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateAttendeeRequest) {
  }

  public get externalUserId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAttendee.Attendee.ExternalUserId'),
        outputPath: 'Attendee.ExternalUserId',
        parameters: {
          MeetingId: this.__input.meetingId,
          ExternalUserId: this.__input.externalUserId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAttendee.Attendee.ExternalUserId', props);
    return resource.getResponseField('Attendee.ExternalUserId') as unknown as string;
  }

  public get attendeeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAttendee.Attendee.AttendeeId'),
        outputPath: 'Attendee.AttendeeId',
        parameters: {
          MeetingId: this.__input.meetingId,
          ExternalUserId: this.__input.externalUserId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAttendee.Attendee.AttendeeId', props);
    return resource.getResponseField('Attendee.AttendeeId') as unknown as string;
  }

  public get joinToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateAttendee.Attendee.JoinToken'),
        outputPath: 'Attendee.JoinToken',
        parameters: {
          MeetingId: this.__input.meetingId,
          ExternalUserId: this.__input.externalUserId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAttendee.Attendee.JoinToken', props);
    return resource.getResponseField('Attendee.JoinToken') as unknown as string;
  }

}

export class ChimeResponsesCreateBot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateBotRequest) {
  }

  public get bot(): ChimeResponsesCreateBotBot {
    return new ChimeResponsesCreateBotBot(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateBotBot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateBotRequest) {
  }

  public get botId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateBot.Bot.BotId'),
        outputPath: 'Bot.BotId',
        parameters: {
          AccountId: this.__input.accountId,
          DisplayName: this.__input.displayName,
          Domain: this.__input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBot.Bot.BotId', props);
    return resource.getResponseField('Bot.BotId') as unknown as string;
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateBot.Bot.UserId'),
        outputPath: 'Bot.UserId',
        parameters: {
          AccountId: this.__input.accountId,
          DisplayName: this.__input.displayName,
          Domain: this.__input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBot.Bot.UserId', props);
    return resource.getResponseField('Bot.UserId') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateBot.Bot.DisplayName'),
        outputPath: 'Bot.DisplayName',
        parameters: {
          AccountId: this.__input.accountId,
          DisplayName: this.__input.displayName,
          Domain: this.__input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBot.Bot.DisplayName', props);
    return resource.getResponseField('Bot.DisplayName') as unknown as string;
  }

  public get botType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateBot.Bot.BotType'),
        outputPath: 'Bot.BotType',
        parameters: {
          AccountId: this.__input.accountId,
          DisplayName: this.__input.displayName,
          Domain: this.__input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBot.Bot.BotType', props);
    return resource.getResponseField('Bot.BotType') as unknown as string;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateBot.Bot.Disabled'),
        outputPath: 'Bot.Disabled',
        parameters: {
          AccountId: this.__input.accountId,
          DisplayName: this.__input.displayName,
          Domain: this.__input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBot.Bot.Disabled', props);
    return resource.getResponseField('Bot.Disabled') as unknown as boolean;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateBot.Bot.CreatedTimestamp'),
        outputPath: 'Bot.CreatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          DisplayName: this.__input.displayName,
          Domain: this.__input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBot.Bot.CreatedTimestamp', props);
    return resource.getResponseField('Bot.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateBot.Bot.UpdatedTimestamp'),
        outputPath: 'Bot.UpdatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          DisplayName: this.__input.displayName,
          Domain: this.__input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBot.Bot.UpdatedTimestamp', props);
    return resource.getResponseField('Bot.UpdatedTimestamp') as unknown as string;
  }

  public get botEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateBot.Bot.BotEmail'),
        outputPath: 'Bot.BotEmail',
        parameters: {
          AccountId: this.__input.accountId,
          DisplayName: this.__input.displayName,
          Domain: this.__input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBot.Bot.BotEmail', props);
    return resource.getResponseField('Bot.BotEmail') as unknown as string;
  }

  public get securityToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateBot.Bot.SecurityToken'),
        outputPath: 'Bot.SecurityToken',
        parameters: {
          AccountId: this.__input.accountId,
          DisplayName: this.__input.displayName,
          Domain: this.__input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBot.Bot.SecurityToken', props);
    return resource.getResponseField('Bot.SecurityToken') as unknown as string;
  }

}

export class ChimeResponsesCreateChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateChannelRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateChannel.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          Name: this.__input.name,
          Mode: this.__input.mode,
          Privacy: this.__input.privacy,
          Metadata: this.__input.metadata,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

}

export class ChimeResponsesCreateChannelBan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateChannelBanRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelBan',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateChannelBan.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelBan.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get member(): ChimeResponsesCreateChannelBanMember {
    return new ChimeResponsesCreateChannelBanMember(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateChannelBanMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateChannelBanRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelBan',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateChannelBan.Member.Arn'),
        outputPath: 'Member.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelBan.Member.Arn', props);
    return resource.getResponseField('Member.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelBan',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateChannelBan.Member.Name'),
        outputPath: 'Member.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelBan.Member.Name', props);
    return resource.getResponseField('Member.Name') as unknown as string;
  }

}

export class ChimeResponsesCreateChannelMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateChannelMembershipRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateChannelMembership.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelMembership.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get member(): ChimeResponsesCreateChannelMembershipMember {
    return new ChimeResponsesCreateChannelMembershipMember(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateChannelMembershipMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateChannelMembershipRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateChannelMembership.Member.Arn'),
        outputPath: 'Member.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelMembership.Member.Arn', props);
    return resource.getResponseField('Member.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateChannelMembership.Member.Name'),
        outputPath: 'Member.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelMembership.Member.Name', props);
    return resource.getResponseField('Member.Name') as unknown as string;
  }

}

export class ChimeResponsesCreateChannelModerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateChannelModeratorRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelModerator',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateChannelModerator.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelModerator.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get channelModerator(): ChimeResponsesCreateChannelModeratorChannelModerator {
    return new ChimeResponsesCreateChannelModeratorChannelModerator(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateChannelModeratorChannelModerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateChannelModeratorRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelModerator',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateChannelModerator.ChannelModerator.Arn'),
        outputPath: 'ChannelModerator.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelModerator.ChannelModerator.Arn', props);
    return resource.getResponseField('ChannelModerator.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelModerator',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateChannelModerator.ChannelModerator.Name'),
        outputPath: 'ChannelModerator.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelModerator.ChannelModerator.Name', props);
    return resource.getResponseField('ChannelModerator.Name') as unknown as string;
  }

}

export class ChimeResponsesCreateMeeting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateMeetingRequest) {
  }

  public get meeting(): ChimeResponsesCreateMeetingMeeting {
    return new ChimeResponsesCreateMeetingMeeting(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateMeetingMeeting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateMeetingRequest) {
  }

  public get meetingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeeting.Meeting.MeetingId'),
        outputPath: 'Meeting.MeetingId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeeting.Meeting.MeetingId', props);
    return resource.getResponseField('Meeting.MeetingId') as unknown as string;
  }

  public get externalMeetingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeeting.Meeting.ExternalMeetingId'),
        outputPath: 'Meeting.ExternalMeetingId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeeting.Meeting.ExternalMeetingId', props);
    return resource.getResponseField('Meeting.ExternalMeetingId') as unknown as string;
  }

  public get mediaPlacement(): ChimeResponsesCreateMeetingMeetingMediaPlacement {
    return new ChimeResponsesCreateMeetingMeetingMediaPlacement(this.__scope, this.__resources, this.__input);
  }

  public get mediaRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeeting.Meeting.MediaRegion'),
        outputPath: 'Meeting.MediaRegion',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeeting.Meeting.MediaRegion', props);
    return resource.getResponseField('Meeting.MediaRegion') as unknown as string;
  }

}

export class ChimeResponsesCreateMeetingMeetingMediaPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateMeetingRequest) {
  }

  public get audioHostUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeeting.Meeting.MediaPlacement.AudioHostUrl'),
        outputPath: 'Meeting.MediaPlacement.AudioHostUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeeting.Meeting.MediaPlacement.AudioHostUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.AudioHostUrl') as unknown as string;
  }

  public get audioFallbackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeeting.Meeting.MediaPlacement.AudioFallbackUrl'),
        outputPath: 'Meeting.MediaPlacement.AudioFallbackUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeeting.Meeting.MediaPlacement.AudioFallbackUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.AudioFallbackUrl') as unknown as string;
  }

  public get screenDataUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeeting.Meeting.MediaPlacement.ScreenDataUrl'),
        outputPath: 'Meeting.MediaPlacement.ScreenDataUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeeting.Meeting.MediaPlacement.ScreenDataUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.ScreenDataUrl') as unknown as string;
  }

  public get screenSharingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeeting.Meeting.MediaPlacement.ScreenSharingUrl'),
        outputPath: 'Meeting.MediaPlacement.ScreenSharingUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeeting.Meeting.MediaPlacement.ScreenSharingUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.ScreenSharingUrl') as unknown as string;
  }

  public get screenViewingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeeting.Meeting.MediaPlacement.ScreenViewingUrl'),
        outputPath: 'Meeting.MediaPlacement.ScreenViewingUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeeting.Meeting.MediaPlacement.ScreenViewingUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.ScreenViewingUrl') as unknown as string;
  }

  public get signalingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeeting.Meeting.MediaPlacement.SignalingUrl'),
        outputPath: 'Meeting.MediaPlacement.SignalingUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeeting.Meeting.MediaPlacement.SignalingUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.SignalingUrl') as unknown as string;
  }

  public get turnControlUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeeting.Meeting.MediaPlacement.TurnControlUrl'),
        outputPath: 'Meeting.MediaPlacement.TurnControlUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeeting.Meeting.MediaPlacement.TurnControlUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.TurnControlUrl') as unknown as string;
  }

}

export class ChimeResponsesCreateMeetingDialOut {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateMeetingDialOutRequest) {
  }

  public get transactionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingDialOut',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingDialOut.TransactionId'),
        outputPath: 'TransactionId',
        parameters: {
          MeetingId: this.__input.meetingId,
          FromPhoneNumber: this.__input.fromPhoneNumber,
          ToPhoneNumber: this.__input.toPhoneNumber,
          JoinToken: this.__input.joinToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingDialOut.TransactionId', props);
    return resource.getResponseField('TransactionId') as unknown as string;
  }

}

export class ChimeResponsesCreateMeetingWithAttendees {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateMeetingWithAttendeesRequest) {
  }

  public get meeting(): ChimeResponsesCreateMeetingWithAttendeesMeeting {
    return new ChimeResponsesCreateMeetingWithAttendeesMeeting(this.__scope, this.__resources, this.__input);
  }

  public get attendees(): shapes.ChimeAttendee[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Attendees'),
        outputPath: 'Attendees',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Attendees', props);
    return resource.getResponseField('Attendees') as unknown as shapes.ChimeAttendee[];
  }

  public get errors(): shapes.ChimeCreateAttendeeError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Errors'),
        outputPath: 'Errors',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.ChimeCreateAttendeeError[];
  }

}

export class ChimeResponsesCreateMeetingWithAttendeesMeeting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateMeetingWithAttendeesRequest) {
  }

  public get meetingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Meeting.MeetingId'),
        outputPath: 'Meeting.MeetingId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Meeting.MeetingId', props);
    return resource.getResponseField('Meeting.MeetingId') as unknown as string;
  }

  public get externalMeetingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Meeting.ExternalMeetingId'),
        outputPath: 'Meeting.ExternalMeetingId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Meeting.ExternalMeetingId', props);
    return resource.getResponseField('Meeting.ExternalMeetingId') as unknown as string;
  }

  public get mediaPlacement(): ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement {
    return new ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement(this.__scope, this.__resources, this.__input);
  }

  public get mediaRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Meeting.MediaRegion'),
        outputPath: 'Meeting.MediaRegion',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Meeting.MediaRegion', props);
    return resource.getResponseField('Meeting.MediaRegion') as unknown as string;
  }

}

export class ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateMeetingWithAttendeesRequest) {
  }

  public get audioHostUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Meeting.MediaPlacement.AudioHostUrl'),
        outputPath: 'Meeting.MediaPlacement.AudioHostUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.AudioHostUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.AudioHostUrl') as unknown as string;
  }

  public get audioFallbackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Meeting.MediaPlacement.AudioFallbackUrl'),
        outputPath: 'Meeting.MediaPlacement.AudioFallbackUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.AudioFallbackUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.AudioFallbackUrl') as unknown as string;
  }

  public get screenDataUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Meeting.MediaPlacement.ScreenDataUrl'),
        outputPath: 'Meeting.MediaPlacement.ScreenDataUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.ScreenDataUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.ScreenDataUrl') as unknown as string;
  }

  public get screenSharingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Meeting.MediaPlacement.ScreenSharingUrl'),
        outputPath: 'Meeting.MediaPlacement.ScreenSharingUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.ScreenSharingUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.ScreenSharingUrl') as unknown as string;
  }

  public get screenViewingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Meeting.MediaPlacement.ScreenViewingUrl'),
        outputPath: 'Meeting.MediaPlacement.ScreenViewingUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.ScreenViewingUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.ScreenViewingUrl') as unknown as string;
  }

  public get signalingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Meeting.MediaPlacement.SignalingUrl'),
        outputPath: 'Meeting.MediaPlacement.SignalingUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.SignalingUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.SignalingUrl') as unknown as string;
  }

  public get turnControlUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMeetingWithAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateMeetingWithAttendees.Meeting.MediaPlacement.TurnControlUrl'),
        outputPath: 'Meeting.MediaPlacement.TurnControlUrl',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          ExternalMeetingId: this.__input.externalMeetingId,
          MeetingHostId: this.__input.meetingHostId,
          MediaRegion: this.__input.mediaRegion,
          Tags: this.__input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.__input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.__input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.__input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.TurnControlUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.TurnControlUrl') as unknown as string;
  }

}

export class ChimeResponsesCreatePhoneNumberOrder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreatePhoneNumberOrderRequest) {
  }

  public get phoneNumberOrder(): ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder {
    return new ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreatePhoneNumberOrderRequest) {
  }

  public get phoneNumberOrderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreatePhoneNumberOrder.PhoneNumberOrder.PhoneNumberOrderId'),
        outputPath: 'PhoneNumberOrder.PhoneNumberOrderId',
        parameters: {
          ProductType: this.__input.productType,
          E164PhoneNumbers: this.__input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePhoneNumberOrder.PhoneNumberOrder.PhoneNumberOrderId', props);
    return resource.getResponseField('PhoneNumberOrder.PhoneNumberOrderId') as unknown as string;
  }

  public get productType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreatePhoneNumberOrder.PhoneNumberOrder.ProductType'),
        outputPath: 'PhoneNumberOrder.ProductType',
        parameters: {
          ProductType: this.__input.productType,
          E164PhoneNumbers: this.__input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePhoneNumberOrder.PhoneNumberOrder.ProductType', props);
    return resource.getResponseField('PhoneNumberOrder.ProductType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreatePhoneNumberOrder.PhoneNumberOrder.Status'),
        outputPath: 'PhoneNumberOrder.Status',
        parameters: {
          ProductType: this.__input.productType,
          E164PhoneNumbers: this.__input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePhoneNumberOrder.PhoneNumberOrder.Status', props);
    return resource.getResponseField('PhoneNumberOrder.Status') as unknown as string;
  }

  public get orderedPhoneNumbers(): shapes.ChimeOrderedPhoneNumber[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreatePhoneNumberOrder.PhoneNumberOrder.OrderedPhoneNumbers'),
        outputPath: 'PhoneNumberOrder.OrderedPhoneNumbers',
        parameters: {
          ProductType: this.__input.productType,
          E164PhoneNumbers: this.__input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePhoneNumberOrder.PhoneNumberOrder.OrderedPhoneNumbers', props);
    return resource.getResponseField('PhoneNumberOrder.OrderedPhoneNumbers') as unknown as shapes.ChimeOrderedPhoneNumber[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreatePhoneNumberOrder.PhoneNumberOrder.CreatedTimestamp'),
        outputPath: 'PhoneNumberOrder.CreatedTimestamp',
        parameters: {
          ProductType: this.__input.productType,
          E164PhoneNumbers: this.__input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePhoneNumberOrder.PhoneNumberOrder.CreatedTimestamp', props);
    return resource.getResponseField('PhoneNumberOrder.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreatePhoneNumberOrder.PhoneNumberOrder.UpdatedTimestamp'),
        outputPath: 'PhoneNumberOrder.UpdatedTimestamp',
        parameters: {
          ProductType: this.__input.productType,
          E164PhoneNumbers: this.__input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePhoneNumberOrder.PhoneNumberOrder.UpdatedTimestamp', props);
    return resource.getResponseField('PhoneNumberOrder.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesCreateProxySession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateProxySessionRequest) {
  }

  public get proxySession(): ChimeResponsesCreateProxySessionProxySession {
    return new ChimeResponsesCreateProxySessionProxySession(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateProxySessionProxySession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateProxySessionRequest) {
  }

  public get voiceConnectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.VoiceConnectorId'),
        outputPath: 'ProxySession.VoiceConnectorId',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.VoiceConnectorId', props);
    return resource.getResponseField('ProxySession.VoiceConnectorId') as unknown as string;
  }

  public get proxySessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.ProxySessionId'),
        outputPath: 'ProxySession.ProxySessionId',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.ProxySessionId', props);
    return resource.getResponseField('ProxySession.ProxySessionId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.Name'),
        outputPath: 'ProxySession.Name',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.Name', props);
    return resource.getResponseField('ProxySession.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.Status'),
        outputPath: 'ProxySession.Status',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.Status', props);
    return resource.getResponseField('ProxySession.Status') as unknown as string;
  }

  public get expiryMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.ExpiryMinutes'),
        outputPath: 'ProxySession.ExpiryMinutes',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.ExpiryMinutes', props);
    return resource.getResponseField('ProxySession.ExpiryMinutes') as unknown as number;
  }

  public get capabilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.Capabilities'),
        outputPath: 'ProxySession.Capabilities',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.Capabilities', props);
    return resource.getResponseField('ProxySession.Capabilities') as unknown as string[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.CreatedTimestamp'),
        outputPath: 'ProxySession.CreatedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.CreatedTimestamp', props);
    return resource.getResponseField('ProxySession.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.UpdatedTimestamp'),
        outputPath: 'ProxySession.UpdatedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.UpdatedTimestamp', props);
    return resource.getResponseField('ProxySession.UpdatedTimestamp') as unknown as string;
  }

  public get endedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.EndedTimestamp'),
        outputPath: 'ProxySession.EndedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.EndedTimestamp', props);
    return resource.getResponseField('ProxySession.EndedTimestamp') as unknown as string;
  }

  public get participants(): shapes.ChimeParticipant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.Participants'),
        outputPath: 'ProxySession.Participants',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.Participants', props);
    return resource.getResponseField('ProxySession.Participants') as unknown as shapes.ChimeParticipant[];
  }

  public get numberSelectionBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.NumberSelectionBehavior'),
        outputPath: 'ProxySession.NumberSelectionBehavior',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.NumberSelectionBehavior', props);
    return resource.getResponseField('ProxySession.NumberSelectionBehavior') as unknown as string;
  }

  public get geoMatchLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.GeoMatchLevel'),
        outputPath: 'ProxySession.GeoMatchLevel',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.GeoMatchLevel', props);
    return resource.getResponseField('ProxySession.GeoMatchLevel') as unknown as string;
  }

  public get geoMatchParams(): ChimeResponsesCreateProxySessionProxySessionGeoMatchParams {
    return new ChimeResponsesCreateProxySessionProxySessionGeoMatchParams(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateProxySessionProxySessionGeoMatchParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateProxySessionRequest) {
  }

  public get country(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.GeoMatchParams.Country'),
        outputPath: 'ProxySession.GeoMatchParams.Country',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.GeoMatchParams.Country', props);
    return resource.getResponseField('ProxySession.GeoMatchParams.Country') as unknown as string;
  }

  public get areaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateProxySession.ProxySession.GeoMatchParams.AreaCode'),
        outputPath: 'ProxySession.GeoMatchParams.AreaCode',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ParticipantPhoneNumbers: this.__input.participantPhoneNumbers,
          Name: this.__input.name,
          ExpiryMinutes: this.__input.expiryMinutes,
          Capabilities: this.__input.capabilities,
          NumberSelectionBehavior: this.__input.numberSelectionBehavior,
          GeoMatchLevel: this.__input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.__input.geoMatchParams?.country,
            AreaCode: this.__input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProxySession.ProxySession.GeoMatchParams.AreaCode', props);
    return resource.getResponseField('ProxySession.GeoMatchParams.AreaCode') as unknown as string;
  }

}

export class ChimeResponsesCreateRoom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateRoomRequest) {
  }

  public get room(): ChimeResponsesCreateRoomRoom {
    return new ChimeResponsesCreateRoomRoom(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateRoomRoom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateRoomRequest) {
  }

  public get roomId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoom.Room.RoomId'),
        outputPath: 'Room.RoomId',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoom.Room.RoomId', props);
    return resource.getResponseField('Room.RoomId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoom.Room.Name'),
        outputPath: 'Room.Name',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoom.Room.Name', props);
    return resource.getResponseField('Room.Name') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoom.Room.AccountId'),
        outputPath: 'Room.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoom.Room.AccountId', props);
    return resource.getResponseField('Room.AccountId') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoom.Room.CreatedBy'),
        outputPath: 'Room.CreatedBy',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoom.Room.CreatedBy', props);
    return resource.getResponseField('Room.CreatedBy') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoom.Room.CreatedTimestamp'),
        outputPath: 'Room.CreatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoom.Room.CreatedTimestamp', props);
    return resource.getResponseField('Room.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoom.Room.UpdatedTimestamp'),
        outputPath: 'Room.UpdatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoom.Room.UpdatedTimestamp', props);
    return resource.getResponseField('Room.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesCreateRoomMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateRoomMembershipRequest) {
  }

  public get roomMembership(): ChimeResponsesCreateRoomMembershipRoomMembership {
    return new ChimeResponsesCreateRoomMembershipRoomMembership(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateRoomMembershipRoomMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateRoomMembershipRequest) {
  }

  public get roomId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoomMembership.RoomMembership.RoomId'),
        outputPath: 'RoomMembership.RoomId',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoomMembership.RoomMembership.RoomId', props);
    return resource.getResponseField('RoomMembership.RoomId') as unknown as string;
  }

  public get member(): ChimeResponsesCreateRoomMembershipRoomMembershipMember {
    return new ChimeResponsesCreateRoomMembershipRoomMembershipMember(this.__scope, this.__resources, this.__input);
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoomMembership.RoomMembership.Role'),
        outputPath: 'RoomMembership.Role',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoomMembership.RoomMembership.Role', props);
    return resource.getResponseField('RoomMembership.Role') as unknown as string;
  }

  public get invitedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoomMembership.RoomMembership.InvitedBy'),
        outputPath: 'RoomMembership.InvitedBy',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoomMembership.RoomMembership.InvitedBy', props);
    return resource.getResponseField('RoomMembership.InvitedBy') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoomMembership.RoomMembership.UpdatedTimestamp'),
        outputPath: 'RoomMembership.UpdatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoomMembership.RoomMembership.UpdatedTimestamp', props);
    return resource.getResponseField('RoomMembership.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesCreateRoomMembershipRoomMembershipMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateRoomMembershipRequest) {
  }

  public get memberId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoomMembership.RoomMembership.Member.MemberId'),
        outputPath: 'RoomMembership.Member.MemberId',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoomMembership.RoomMembership.Member.MemberId', props);
    return resource.getResponseField('RoomMembership.Member.MemberId') as unknown as string;
  }

  public get memberType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoomMembership.RoomMembership.Member.MemberType'),
        outputPath: 'RoomMembership.Member.MemberType',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoomMembership.RoomMembership.Member.MemberType', props);
    return resource.getResponseField('RoomMembership.Member.MemberType') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoomMembership.RoomMembership.Member.Email'),
        outputPath: 'RoomMembership.Member.Email',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoomMembership.RoomMembership.Member.Email', props);
    return resource.getResponseField('RoomMembership.Member.Email') as unknown as string;
  }

  public get fullName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoomMembership.RoomMembership.Member.FullName'),
        outputPath: 'RoomMembership.Member.FullName',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoomMembership.RoomMembership.Member.FullName', props);
    return resource.getResponseField('RoomMembership.Member.FullName') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateRoomMembership.RoomMembership.Member.AccountId'),
        outputPath: 'RoomMembership.Member.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoomMembership.RoomMembership.Member.AccountId', props);
    return resource.getResponseField('RoomMembership.Member.AccountId') as unknown as string;
  }

}

export class ChimeResponsesCreateSipMediaApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateSipMediaApplicationRequest) {
  }

  public get sipMediaApplication(): ChimeResponsesCreateSipMediaApplicationSipMediaApplication {
    return new ChimeResponsesCreateSipMediaApplicationSipMediaApplication(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateSipMediaApplicationSipMediaApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateSipMediaApplicationRequest) {
  }

  public get sipMediaApplicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipMediaApplication.SipMediaApplication.SipMediaApplicationId'),
        outputPath: 'SipMediaApplication.SipMediaApplicationId',
        parameters: {
          AwsRegion: this.__input.awsRegion,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipMediaApplication.SipMediaApplication.SipMediaApplicationId', props);
    return resource.getResponseField('SipMediaApplication.SipMediaApplicationId') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipMediaApplication.SipMediaApplication.AwsRegion'),
        outputPath: 'SipMediaApplication.AwsRegion',
        parameters: {
          AwsRegion: this.__input.awsRegion,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipMediaApplication.SipMediaApplication.AwsRegion', props);
    return resource.getResponseField('SipMediaApplication.AwsRegion') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipMediaApplication.SipMediaApplication.Name'),
        outputPath: 'SipMediaApplication.Name',
        parameters: {
          AwsRegion: this.__input.awsRegion,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipMediaApplication.SipMediaApplication.Name', props);
    return resource.getResponseField('SipMediaApplication.Name') as unknown as string;
  }

  public get endpoints(): shapes.ChimeSipMediaApplicationEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipMediaApplication.SipMediaApplication.Endpoints'),
        outputPath: 'SipMediaApplication.Endpoints',
        parameters: {
          AwsRegion: this.__input.awsRegion,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipMediaApplication.SipMediaApplication.Endpoints', props);
    return resource.getResponseField('SipMediaApplication.Endpoints') as unknown as shapes.ChimeSipMediaApplicationEndpoint[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipMediaApplication.SipMediaApplication.CreatedTimestamp'),
        outputPath: 'SipMediaApplication.CreatedTimestamp',
        parameters: {
          AwsRegion: this.__input.awsRegion,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipMediaApplication.SipMediaApplication.CreatedTimestamp', props);
    return resource.getResponseField('SipMediaApplication.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipMediaApplication.SipMediaApplication.UpdatedTimestamp'),
        outputPath: 'SipMediaApplication.UpdatedTimestamp',
        parameters: {
          AwsRegion: this.__input.awsRegion,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipMediaApplication.SipMediaApplication.UpdatedTimestamp', props);
    return resource.getResponseField('SipMediaApplication.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesCreateSipMediaApplicationCall {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateSipMediaApplicationCallRequest) {
  }

  public get sipMediaApplicationCall(): ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall {
    return new ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateSipMediaApplicationCallRequest) {
  }

  public get transactionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipMediaApplicationCall',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipMediaApplicationCall.SipMediaApplicationCall.TransactionId'),
        outputPath: 'SipMediaApplicationCall.TransactionId',
        parameters: {
          FromPhoneNumber: this.__input.fromPhoneNumber,
          ToPhoneNumber: this.__input.toPhoneNumber,
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipMediaApplicationCall.SipMediaApplicationCall.TransactionId', props);
    return resource.getResponseField('SipMediaApplicationCall.TransactionId') as unknown as string;
  }

}

export class ChimeResponsesCreateSipRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateSipRuleRequest) {
  }

  public get sipRule(): ChimeResponsesCreateSipRuleSipRule {
    return new ChimeResponsesCreateSipRuleSipRule(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateSipRuleSipRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateSipRuleRequest) {
  }

  public get sipRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipRule.SipRule.SipRuleId'),
        outputPath: 'SipRule.SipRuleId',
        parameters: {
          Name: this.__input.name,
          TriggerType: this.__input.triggerType,
          TriggerValue: this.__input.triggerValue,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipRule.SipRule.SipRuleId', props);
    return resource.getResponseField('SipRule.SipRuleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipRule.SipRule.Name'),
        outputPath: 'SipRule.Name',
        parameters: {
          Name: this.__input.name,
          TriggerType: this.__input.triggerType,
          TriggerValue: this.__input.triggerValue,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipRule.SipRule.Name', props);
    return resource.getResponseField('SipRule.Name') as unknown as string;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipRule.SipRule.Disabled'),
        outputPath: 'SipRule.Disabled',
        parameters: {
          Name: this.__input.name,
          TriggerType: this.__input.triggerType,
          TriggerValue: this.__input.triggerValue,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipRule.SipRule.Disabled', props);
    return resource.getResponseField('SipRule.Disabled') as unknown as boolean;
  }

  public get triggerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipRule.SipRule.TriggerType'),
        outputPath: 'SipRule.TriggerType',
        parameters: {
          Name: this.__input.name,
          TriggerType: this.__input.triggerType,
          TriggerValue: this.__input.triggerValue,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipRule.SipRule.TriggerType', props);
    return resource.getResponseField('SipRule.TriggerType') as unknown as string;
  }

  public get triggerValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipRule.SipRule.TriggerValue'),
        outputPath: 'SipRule.TriggerValue',
        parameters: {
          Name: this.__input.name,
          TriggerType: this.__input.triggerType,
          TriggerValue: this.__input.triggerValue,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipRule.SipRule.TriggerValue', props);
    return resource.getResponseField('SipRule.TriggerValue') as unknown as string;
  }

  public get targetApplications(): shapes.ChimeSipRuleTargetApplication[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipRule.SipRule.TargetApplications'),
        outputPath: 'SipRule.TargetApplications',
        parameters: {
          Name: this.__input.name,
          TriggerType: this.__input.triggerType,
          TriggerValue: this.__input.triggerValue,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipRule.SipRule.TargetApplications', props);
    return resource.getResponseField('SipRule.TargetApplications') as unknown as shapes.ChimeSipRuleTargetApplication[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipRule.SipRule.CreatedTimestamp'),
        outputPath: 'SipRule.CreatedTimestamp',
        parameters: {
          Name: this.__input.name,
          TriggerType: this.__input.triggerType,
          TriggerValue: this.__input.triggerValue,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipRule.SipRule.CreatedTimestamp', props);
    return resource.getResponseField('SipRule.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateSipRule.SipRule.UpdatedTimestamp'),
        outputPath: 'SipRule.UpdatedTimestamp',
        parameters: {
          Name: this.__input.name,
          TriggerType: this.__input.triggerType,
          TriggerValue: this.__input.triggerValue,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSipRule.SipRule.UpdatedTimestamp', props);
    return resource.getResponseField('SipRule.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesCreateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateUserRequest) {
  }

  public get user(): ChimeResponsesCreateUserUser {
    return new ChimeResponsesCreateUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateUserRequest) {
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.UserId'),
        outputPath: 'User.UserId',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.UserId', props);
    return resource.getResponseField('User.UserId') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.AccountId'),
        outputPath: 'User.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.AccountId', props);
    return resource.getResponseField('User.AccountId') as unknown as string;
  }

  public get primaryEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.PrimaryEmail'),
        outputPath: 'User.PrimaryEmail',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.PrimaryEmail', props);
    return resource.getResponseField('User.PrimaryEmail') as unknown as string;
  }

  public get primaryProvisionedNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.PrimaryProvisionedNumber'),
        outputPath: 'User.PrimaryProvisionedNumber',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.PrimaryProvisionedNumber', props);
    return resource.getResponseField('User.PrimaryProvisionedNumber') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.DisplayName'),
        outputPath: 'User.DisplayName',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.DisplayName', props);
    return resource.getResponseField('User.DisplayName') as unknown as string;
  }

  public get licenseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.LicenseType'),
        outputPath: 'User.LicenseType',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.LicenseType', props);
    return resource.getResponseField('User.LicenseType') as unknown as string;
  }

  public get userType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.UserType'),
        outputPath: 'User.UserType',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.UserType', props);
    return resource.getResponseField('User.UserType') as unknown as string;
  }

  public get userRegistrationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.UserRegistrationStatus'),
        outputPath: 'User.UserRegistrationStatus',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.UserRegistrationStatus', props);
    return resource.getResponseField('User.UserRegistrationStatus') as unknown as string;
  }

  public get userInvitationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.UserInvitationStatus'),
        outputPath: 'User.UserInvitationStatus',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.UserInvitationStatus', props);
    return resource.getResponseField('User.UserInvitationStatus') as unknown as string;
  }

  public get registeredOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.RegisteredOn'),
        outputPath: 'User.RegisteredOn',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.RegisteredOn', props);
    return resource.getResponseField('User.RegisteredOn') as unknown as string;
  }

  public get invitedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.InvitedOn'),
        outputPath: 'User.InvitedOn',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.InvitedOn', props);
    return resource.getResponseField('User.InvitedOn') as unknown as string;
  }

  public get alexaForBusinessMetadata(): ChimeResponsesCreateUserUserAlexaForBusinessMetadata {
    return new ChimeResponsesCreateUserUserAlexaForBusinessMetadata(this.__scope, this.__resources, this.__input);
  }

  public get personalPin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.PersonalPIN'),
        outputPath: 'User.PersonalPIN',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.PersonalPIN', props);
    return resource.getResponseField('User.PersonalPIN') as unknown as string;
  }

}

export class ChimeResponsesCreateUserUserAlexaForBusinessMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateUserRequest) {
  }

  public get isAlexaForBusinessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled'),
        outputPath: 'User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled') as unknown as boolean;
  }

  public get alexaForBusinessRoomArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateUser.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn'),
        outputPath: 'User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn',
        parameters: {
          AccountId: this.__input.accountId,
          Username: this.__input.username,
          Email: this.__input.email,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn') as unknown as string;
  }

}

export class ChimeResponsesCreateVoiceConnector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateVoiceConnectorRequest) {
  }

  public get voiceConnector(): ChimeResponsesCreateVoiceConnectorVoiceConnector {
    return new ChimeResponsesCreateVoiceConnectorVoiceConnector(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateVoiceConnectorVoiceConnector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateVoiceConnectorRequest) {
  }

  public get voiceConnectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnector.VoiceConnector.VoiceConnectorId'),
        outputPath: 'VoiceConnector.VoiceConnectorId',
        parameters: {
          Name: this.__input.name,
          AwsRegion: this.__input.awsRegion,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnector.VoiceConnector.VoiceConnectorId', props);
    return resource.getResponseField('VoiceConnector.VoiceConnectorId') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnector.VoiceConnector.AwsRegion'),
        outputPath: 'VoiceConnector.AwsRegion',
        parameters: {
          Name: this.__input.name,
          AwsRegion: this.__input.awsRegion,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnector.VoiceConnector.AwsRegion', props);
    return resource.getResponseField('VoiceConnector.AwsRegion') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnector.VoiceConnector.Name'),
        outputPath: 'VoiceConnector.Name',
        parameters: {
          Name: this.__input.name,
          AwsRegion: this.__input.awsRegion,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnector.VoiceConnector.Name', props);
    return resource.getResponseField('VoiceConnector.Name') as unknown as string;
  }

  public get outboundHostName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnector.VoiceConnector.OutboundHostName'),
        outputPath: 'VoiceConnector.OutboundHostName',
        parameters: {
          Name: this.__input.name,
          AwsRegion: this.__input.awsRegion,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnector.VoiceConnector.OutboundHostName', props);
    return resource.getResponseField('VoiceConnector.OutboundHostName') as unknown as string;
  }

  public get requireEncryption(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnector.VoiceConnector.RequireEncryption'),
        outputPath: 'VoiceConnector.RequireEncryption',
        parameters: {
          Name: this.__input.name,
          AwsRegion: this.__input.awsRegion,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnector.VoiceConnector.RequireEncryption', props);
    return resource.getResponseField('VoiceConnector.RequireEncryption') as unknown as boolean;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnector.VoiceConnector.CreatedTimestamp'),
        outputPath: 'VoiceConnector.CreatedTimestamp',
        parameters: {
          Name: this.__input.name,
          AwsRegion: this.__input.awsRegion,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnector.VoiceConnector.CreatedTimestamp', props);
    return resource.getResponseField('VoiceConnector.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnector.VoiceConnector.UpdatedTimestamp'),
        outputPath: 'VoiceConnector.UpdatedTimestamp',
        parameters: {
          Name: this.__input.name,
          AwsRegion: this.__input.awsRegion,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnector.VoiceConnector.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnector.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesCreateVoiceConnectorGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateVoiceConnectorGroupRequest) {
  }

  public get voiceConnectorGroup(): ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup {
    return new ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeCreateVoiceConnectorGroupRequest) {
  }

  public get voiceConnectorGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorGroupId'),
        outputPath: 'VoiceConnectorGroup.VoiceConnectorGroupId',
        parameters: {
          Name: this.__input.name,
          VoiceConnectorItems: this.__input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorGroupId', props);
    return resource.getResponseField('VoiceConnectorGroup.VoiceConnectorGroupId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnectorGroup.VoiceConnectorGroup.Name'),
        outputPath: 'VoiceConnectorGroup.Name',
        parameters: {
          Name: this.__input.name,
          VoiceConnectorItems: this.__input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnectorGroup.VoiceConnectorGroup.Name', props);
    return resource.getResponseField('VoiceConnectorGroup.Name') as unknown as string;
  }

  public get voiceConnectorItems(): shapes.ChimeVoiceConnectorItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorItems'),
        outputPath: 'VoiceConnectorGroup.VoiceConnectorItems',
        parameters: {
          Name: this.__input.name,
          VoiceConnectorItems: this.__input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorItems', props);
    return resource.getResponseField('VoiceConnectorGroup.VoiceConnectorItems') as unknown as shapes.ChimeVoiceConnectorItem[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnectorGroup.VoiceConnectorGroup.CreatedTimestamp'),
        outputPath: 'VoiceConnectorGroup.CreatedTimestamp',
        parameters: {
          Name: this.__input.name,
          VoiceConnectorItems: this.__input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnectorGroup.VoiceConnectorGroup.CreatedTimestamp', props);
    return resource.getResponseField('VoiceConnectorGroup.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.CreateVoiceConnectorGroup.VoiceConnectorGroup.UpdatedTimestamp'),
        outputPath: 'VoiceConnectorGroup.UpdatedTimestamp',
        parameters: {
          Name: this.__input.name,
          VoiceConnectorItems: this.__input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVoiceConnectorGroup.VoiceConnectorGroup.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnectorGroup.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesDescribeAppInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeAppInstanceRequest) {
  }

  public get appInstance(): ChimeResponsesDescribeAppInstanceAppInstance {
    return new ChimeResponsesDescribeAppInstanceAppInstance(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeAppInstanceAppInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeAppInstanceRequest) {
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstance',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstance.AppInstance.AppInstanceArn'),
        outputPath: 'AppInstance.AppInstanceArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstance.AppInstance.AppInstanceArn', props);
    return resource.getResponseField('AppInstance.AppInstanceArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstance',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstance.AppInstance.Name'),
        outputPath: 'AppInstance.Name',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstance.AppInstance.Name', props);
    return resource.getResponseField('AppInstance.Name') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstance',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstance.AppInstance.Metadata'),
        outputPath: 'AppInstance.Metadata',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstance.AppInstance.Metadata', props);
    return resource.getResponseField('AppInstance.Metadata') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstance',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstance.AppInstance.CreatedTimestamp'),
        outputPath: 'AppInstance.CreatedTimestamp',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstance.AppInstance.CreatedTimestamp', props);
    return resource.getResponseField('AppInstance.CreatedTimestamp') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstance',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstance.AppInstance.LastUpdatedTimestamp'),
        outputPath: 'AppInstance.LastUpdatedTimestamp',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstance.AppInstance.LastUpdatedTimestamp', props);
    return resource.getResponseField('AppInstance.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesDescribeAppInstanceAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeAppInstanceAdminRequest) {
  }

  public get appInstanceAdmin(): ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin {
    return new ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeAppInstanceAdminRequest) {
  }

  public get admin(): ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin {
    return new ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin(this.__scope, this.__resources, this.__input);
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceAdmin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstanceAdmin.AppInstanceAdmin.AppInstanceArn'),
        outputPath: 'AppInstanceAdmin.AppInstanceArn',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceAdmin.AppInstanceAdmin.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceAdmin.AppInstanceArn') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceAdmin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstanceAdmin.AppInstanceAdmin.CreatedTimestamp'),
        outputPath: 'AppInstanceAdmin.CreatedTimestamp',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceAdmin.AppInstanceAdmin.CreatedTimestamp', props);
    return resource.getResponseField('AppInstanceAdmin.CreatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeAppInstanceAdminRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceAdmin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstanceAdmin.AppInstanceAdmin.Admin.Arn'),
        outputPath: 'AppInstanceAdmin.Admin.Arn',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceAdmin.AppInstanceAdmin.Admin.Arn', props);
    return resource.getResponseField('AppInstanceAdmin.Admin.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceAdmin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstanceAdmin.AppInstanceAdmin.Admin.Name'),
        outputPath: 'AppInstanceAdmin.Admin.Name',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceAdmin.AppInstanceAdmin.Admin.Name', props);
    return resource.getResponseField('AppInstanceAdmin.Admin.Name') as unknown as string;
  }

}

export class ChimeResponsesDescribeAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeAppInstanceUserRequest) {
  }

  public get appInstanceUser(): ChimeResponsesDescribeAppInstanceUserAppInstanceUser {
    return new ChimeResponsesDescribeAppInstanceUserAppInstanceUser(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeAppInstanceUserAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeAppInstanceUserRequest) {
  }

  public get appInstanceUserArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstanceUser.AppInstanceUser.AppInstanceUserArn'),
        outputPath: 'AppInstanceUser.AppInstanceUserArn',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceUser.AppInstanceUser.AppInstanceUserArn', props);
    return resource.getResponseField('AppInstanceUser.AppInstanceUserArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstanceUser.AppInstanceUser.Name'),
        outputPath: 'AppInstanceUser.Name',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceUser.AppInstanceUser.Name', props);
    return resource.getResponseField('AppInstanceUser.Name') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstanceUser.AppInstanceUser.CreatedTimestamp'),
        outputPath: 'AppInstanceUser.CreatedTimestamp',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceUser.AppInstanceUser.CreatedTimestamp', props);
    return resource.getResponseField('AppInstanceUser.CreatedTimestamp') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstanceUser.AppInstanceUser.Metadata'),
        outputPath: 'AppInstanceUser.Metadata',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceUser.AppInstanceUser.Metadata', props);
    return resource.getResponseField('AppInstanceUser.Metadata') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeAppInstanceUser.AppInstanceUser.LastUpdatedTimestamp'),
        outputPath: 'AppInstanceUser.LastUpdatedTimestamp',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceUser.AppInstanceUser.LastUpdatedTimestamp', props);
    return resource.getResponseField('AppInstanceUser.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelRequest) {
  }

  public get channel(): ChimeResponsesDescribeChannelChannel {
    return new ChimeResponsesDescribeChannelChannel(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeChannelChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannel.Channel.Name'),
        outputPath: 'Channel.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.Name', props);
    return resource.getResponseField('Channel.Name') as unknown as string;
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannel.Channel.ChannelArn'),
        outputPath: 'Channel.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.ChannelArn', props);
    return resource.getResponseField('Channel.ChannelArn') as unknown as string;
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannel.Channel.Mode'),
        outputPath: 'Channel.Mode',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.Mode', props);
    return resource.getResponseField('Channel.Mode') as unknown as string;
  }

  public get privacy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannel.Channel.Privacy'),
        outputPath: 'Channel.Privacy',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.Privacy', props);
    return resource.getResponseField('Channel.Privacy') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannel.Channel.Metadata'),
        outputPath: 'Channel.Metadata',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.Metadata', props);
    return resource.getResponseField('Channel.Metadata') as unknown as string;
  }

  public get createdBy(): ChimeResponsesDescribeChannelChannelCreatedBy {
    return new ChimeResponsesDescribeChannelChannelCreatedBy(this.__scope, this.__resources, this.__input);
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannel.Channel.CreatedTimestamp'),
        outputPath: 'Channel.CreatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.CreatedTimestamp', props);
    return resource.getResponseField('Channel.CreatedTimestamp') as unknown as string;
  }

  public get lastMessageTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannel.Channel.LastMessageTimestamp'),
        outputPath: 'Channel.LastMessageTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.LastMessageTimestamp', props);
    return resource.getResponseField('Channel.LastMessageTimestamp') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannel.Channel.LastUpdatedTimestamp'),
        outputPath: 'Channel.LastUpdatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.LastUpdatedTimestamp', props);
    return resource.getResponseField('Channel.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelChannelCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannel.Channel.CreatedBy.Arn'),
        outputPath: 'Channel.CreatedBy.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.CreatedBy.Arn', props);
    return resource.getResponseField('Channel.CreatedBy.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannel.Channel.CreatedBy.Name'),
        outputPath: 'Channel.CreatedBy.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.CreatedBy.Name', props);
    return resource.getResponseField('Channel.CreatedBy.Name') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelBan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelBanRequest) {
  }

  public get channelBan(): ChimeResponsesDescribeChannelBanChannelBan {
    return new ChimeResponsesDescribeChannelBanChannelBan(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeChannelBanChannelBan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelBanRequest) {
  }

  public get member(): ChimeResponsesDescribeChannelBanChannelBanMember {
    return new ChimeResponsesDescribeChannelBanChannelBanMember(this.__scope, this.__resources, this.__input);
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelBan',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelBan.ChannelBan.ChannelArn'),
        outputPath: 'ChannelBan.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelBan.ChannelBan.ChannelArn', props);
    return resource.getResponseField('ChannelBan.ChannelArn') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelBan',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelBan.ChannelBan.CreatedTimestamp'),
        outputPath: 'ChannelBan.CreatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelBan.ChannelBan.CreatedTimestamp', props);
    return resource.getResponseField('ChannelBan.CreatedTimestamp') as unknown as string;
  }

  public get createdBy(): ChimeResponsesDescribeChannelBanChannelBanCreatedBy {
    return new ChimeResponsesDescribeChannelBanChannelBanCreatedBy(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeChannelBanChannelBanMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelBanRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelBan',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelBan.ChannelBan.Member.Arn'),
        outputPath: 'ChannelBan.Member.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelBan.ChannelBan.Member.Arn', props);
    return resource.getResponseField('ChannelBan.Member.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelBan',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelBan.ChannelBan.Member.Name'),
        outputPath: 'ChannelBan.Member.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelBan.ChannelBan.Member.Name', props);
    return resource.getResponseField('ChannelBan.Member.Name') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelBanChannelBanCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelBanRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelBan',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelBan.ChannelBan.CreatedBy.Arn'),
        outputPath: 'ChannelBan.CreatedBy.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelBan.ChannelBan.CreatedBy.Arn', props);
    return resource.getResponseField('ChannelBan.CreatedBy.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelBan',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelBan.ChannelBan.CreatedBy.Name'),
        outputPath: 'ChannelBan.CreatedBy.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelBan.ChannelBan.CreatedBy.Name', props);
    return resource.getResponseField('ChannelBan.CreatedBy.Name') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelMembershipRequest) {
  }

  public get channelMembership(): ChimeResponsesDescribeChannelMembershipChannelMembership {
    return new ChimeResponsesDescribeChannelMembershipChannelMembership(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeChannelMembershipChannelMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelMembershipRequest) {
  }

  public get invitedBy(): ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy {
    return new ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy(this.__scope, this.__resources, this.__input);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembership.ChannelMembership.Type'),
        outputPath: 'ChannelMembership.Type',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.Type', props);
    return resource.getResponseField('ChannelMembership.Type') as unknown as string;
  }

  public get member(): ChimeResponsesDescribeChannelMembershipChannelMembershipMember {
    return new ChimeResponsesDescribeChannelMembershipChannelMembershipMember(this.__scope, this.__resources, this.__input);
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembership.ChannelMembership.ChannelArn'),
        outputPath: 'ChannelMembership.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.ChannelArn', props);
    return resource.getResponseField('ChannelMembership.ChannelArn') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembership.ChannelMembership.CreatedTimestamp'),
        outputPath: 'ChannelMembership.CreatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.CreatedTimestamp', props);
    return resource.getResponseField('ChannelMembership.CreatedTimestamp') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembership.ChannelMembership.LastUpdatedTimestamp'),
        outputPath: 'ChannelMembership.LastUpdatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.LastUpdatedTimestamp', props);
    return resource.getResponseField('ChannelMembership.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelMembershipRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembership.ChannelMembership.InvitedBy.Arn'),
        outputPath: 'ChannelMembership.InvitedBy.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.InvitedBy.Arn', props);
    return resource.getResponseField('ChannelMembership.InvitedBy.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembership.ChannelMembership.InvitedBy.Name'),
        outputPath: 'ChannelMembership.InvitedBy.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.InvitedBy.Name', props);
    return resource.getResponseField('ChannelMembership.InvitedBy.Name') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelMembershipChannelMembershipMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelMembershipRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembership.ChannelMembership.Member.Arn'),
        outputPath: 'ChannelMembership.Member.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.Member.Arn', props);
    return resource.getResponseField('ChannelMembership.Member.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembership.ChannelMembership.Member.Name'),
        outputPath: 'ChannelMembership.Member.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.Member.Name', props);
    return resource.getResponseField('ChannelMembership.Member.Name') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelMembershipForAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelMembershipForAppInstanceUserRequest) {
  }

  public get channelMembership(): ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership {
    return new ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelMembershipForAppInstanceUserRequest) {
  }

  public get channelSummary(): ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary {
    return new ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary(this.__scope, this.__resources, this.__input);
  }

  public get appInstanceUserMembershipSummary(): ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary {
    return new ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelMembershipForAppInstanceUserRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembershipForAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Name'),
        outputPath: 'ChannelMembership.ChannelSummary.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Name', props);
    return resource.getResponseField('ChannelMembership.ChannelSummary.Name') as unknown as string;
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembershipForAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.ChannelArn'),
        outputPath: 'ChannelMembership.ChannelSummary.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.ChannelArn', props);
    return resource.getResponseField('ChannelMembership.ChannelSummary.ChannelArn') as unknown as string;
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembershipForAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Mode'),
        outputPath: 'ChannelMembership.ChannelSummary.Mode',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Mode', props);
    return resource.getResponseField('ChannelMembership.ChannelSummary.Mode') as unknown as string;
  }

  public get privacy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembershipForAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Privacy'),
        outputPath: 'ChannelMembership.ChannelSummary.Privacy',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Privacy', props);
    return resource.getResponseField('ChannelMembership.ChannelSummary.Privacy') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembershipForAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Metadata'),
        outputPath: 'ChannelMembership.ChannelSummary.Metadata',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Metadata', props);
    return resource.getResponseField('ChannelMembership.ChannelSummary.Metadata') as unknown as string;
  }

  public get lastMessageTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembershipForAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.LastMessageTimestamp'),
        outputPath: 'ChannelMembership.ChannelSummary.LastMessageTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.LastMessageTimestamp', props);
    return resource.getResponseField('ChannelMembership.ChannelSummary.LastMessageTimestamp') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelMembershipForAppInstanceUserRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembershipForAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.AppInstanceUserMembershipSummary.Type'),
        outputPath: 'ChannelMembership.AppInstanceUserMembershipSummary.Type',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.AppInstanceUserMembershipSummary.Type', props);
    return resource.getResponseField('ChannelMembership.AppInstanceUserMembershipSummary.Type') as unknown as string;
  }

  public get readMarkerTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembershipForAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.AppInstanceUserMembershipSummary.ReadMarkerTimestamp'),
        outputPath: 'ChannelMembership.AppInstanceUserMembershipSummary.ReadMarkerTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.AppInstanceUserMembershipSummary.ReadMarkerTimestamp', props);
    return resource.getResponseField('ChannelMembership.AppInstanceUserMembershipSummary.ReadMarkerTimestamp') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelModeratedByAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelModeratedByAppInstanceUserRequest) {
  }

  public get channel(): ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel {
    return new ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelModeratedByAppInstanceUserRequest) {
  }

  public get channelSummary(): ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary {
    return new ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelModeratedByAppInstanceUserRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModeratedByAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Name'),
        outputPath: 'Channel.ChannelSummary.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Name', props);
    return resource.getResponseField('Channel.ChannelSummary.Name') as unknown as string;
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModeratedByAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.ChannelArn'),
        outputPath: 'Channel.ChannelSummary.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.ChannelArn', props);
    return resource.getResponseField('Channel.ChannelSummary.ChannelArn') as unknown as string;
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModeratedByAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Mode'),
        outputPath: 'Channel.ChannelSummary.Mode',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Mode', props);
    return resource.getResponseField('Channel.ChannelSummary.Mode') as unknown as string;
  }

  public get privacy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModeratedByAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Privacy'),
        outputPath: 'Channel.ChannelSummary.Privacy',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Privacy', props);
    return resource.getResponseField('Channel.ChannelSummary.Privacy') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModeratedByAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Metadata'),
        outputPath: 'Channel.ChannelSummary.Metadata',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Metadata', props);
    return resource.getResponseField('Channel.ChannelSummary.Metadata') as unknown as string;
  }

  public get lastMessageTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModeratedByAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.LastMessageTimestamp'),
        outputPath: 'Channel.ChannelSummary.LastMessageTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.LastMessageTimestamp', props);
    return resource.getResponseField('Channel.ChannelSummary.LastMessageTimestamp') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelModerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelModeratorRequest) {
  }

  public get channelModerator(): ChimeResponsesDescribeChannelModeratorChannelModerator {
    return new ChimeResponsesDescribeChannelModeratorChannelModerator(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeChannelModeratorChannelModerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelModeratorRequest) {
  }

  public get moderator(): ChimeResponsesDescribeChannelModeratorChannelModeratorModerator {
    return new ChimeResponsesDescribeChannelModeratorChannelModeratorModerator(this.__scope, this.__resources, this.__input);
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModerator',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModerator.ChannelModerator.ChannelArn'),
        outputPath: 'ChannelModerator.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModerator.ChannelModerator.ChannelArn', props);
    return resource.getResponseField('ChannelModerator.ChannelArn') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModerator',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModerator.ChannelModerator.CreatedTimestamp'),
        outputPath: 'ChannelModerator.CreatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModerator.ChannelModerator.CreatedTimestamp', props);
    return resource.getResponseField('ChannelModerator.CreatedTimestamp') as unknown as string;
  }

  public get createdBy(): ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy {
    return new ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesDescribeChannelModeratorChannelModeratorModerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelModeratorRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModerator',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModerator.ChannelModerator.Moderator.Arn'),
        outputPath: 'ChannelModerator.Moderator.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModerator.ChannelModerator.Moderator.Arn', props);
    return resource.getResponseField('ChannelModerator.Moderator.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModerator',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModerator.ChannelModerator.Moderator.Name'),
        outputPath: 'ChannelModerator.Moderator.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModerator.ChannelModerator.Moderator.Name', props);
    return resource.getResponseField('ChannelModerator.Moderator.Name') as unknown as string;
  }

}

export class ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDescribeChannelModeratorRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModerator',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModerator.ChannelModerator.CreatedBy.Arn'),
        outputPath: 'ChannelModerator.CreatedBy.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModerator.ChannelModerator.CreatedBy.Arn', props);
    return resource.getResponseField('ChannelModerator.CreatedBy.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModerator',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DescribeChannelModerator.ChannelModerator.CreatedBy.Name'),
        outputPath: 'ChannelModerator.CreatedBy.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModerator.ChannelModerator.CreatedBy.Name', props);
    return resource.getResponseField('ChannelModerator.CreatedBy.Name') as unknown as string;
  }

}

export class ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest) {
  }

  public get phoneNumberErrors(): shapes.ChimePhoneNumberError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociatePhoneNumbersFromVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DisassociatePhoneNumbersFromVoiceConnector.PhoneNumberErrors'),
        outputPath: 'PhoneNumberErrors',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          E164PhoneNumbers: this.__input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociatePhoneNumbersFromVoiceConnector.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest) {
  }

  public get phoneNumberErrors(): shapes.ChimePhoneNumberError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociatePhoneNumbersFromVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.DisassociatePhoneNumbersFromVoiceConnectorGroup.PhoneNumberErrors'),
        outputPath: 'PhoneNumberErrors',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
          E164PhoneNumbers: this.__input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociatePhoneNumbersFromVoiceConnectorGroup.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeResponsesFetchAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetAccountRequest) {
  }

  public get account(): ChimeResponsesFetchAccountAccount {
    return new ChimeResponsesFetchAccountAccount(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchAccountAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetAccountRequest) {
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAccount.Account.AwsAccountId'),
        outputPath: 'Account.AwsAccountId',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Account.AwsAccountId', props);
    return resource.getResponseField('Account.AwsAccountId') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAccount.Account.AccountId'),
        outputPath: 'Account.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Account.AccountId', props);
    return resource.getResponseField('Account.AccountId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAccount.Account.Name'),
        outputPath: 'Account.Name',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Account.Name', props);
    return resource.getResponseField('Account.Name') as unknown as string;
  }

  public get accountType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAccount.Account.AccountType'),
        outputPath: 'Account.AccountType',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Account.AccountType', props);
    return resource.getResponseField('Account.AccountType') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAccount.Account.CreatedTimestamp'),
        outputPath: 'Account.CreatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Account.CreatedTimestamp', props);
    return resource.getResponseField('Account.CreatedTimestamp') as unknown as string;
  }

  public get defaultLicense(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAccount.Account.DefaultLicense'),
        outputPath: 'Account.DefaultLicense',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Account.DefaultLicense', props);
    return resource.getResponseField('Account.DefaultLicense') as unknown as string;
  }

  public get supportedLicenses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAccount.Account.SupportedLicenses'),
        outputPath: 'Account.SupportedLicenses',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Account.SupportedLicenses', props);
    return resource.getResponseField('Account.SupportedLicenses') as unknown as string[];
  }

  public get signinDelegateGroups(): shapes.ChimeSigninDelegateGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAccount.Account.SigninDelegateGroups'),
        outputPath: 'Account.SigninDelegateGroups',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Account.SigninDelegateGroups', props);
    return resource.getResponseField('Account.SigninDelegateGroups') as unknown as shapes.ChimeSigninDelegateGroup[];
  }

}

export class ChimeResponsesFetchAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetAccountSettingsRequest) {
  }

  public get accountSettings(): ChimeResponsesFetchAccountSettingsAccountSettings {
    return new ChimeResponsesFetchAccountSettingsAccountSettings(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchAccountSettingsAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetAccountSettingsRequest) {
  }

  public get disableRemoteControl(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAccountSettings.AccountSettings.DisableRemoteControl'),
        outputPath: 'AccountSettings.DisableRemoteControl',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.AccountSettings.DisableRemoteControl', props);
    return resource.getResponseField('AccountSettings.DisableRemoteControl') as unknown as boolean;
  }

  public get enableDialOut(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAccountSettings.AccountSettings.EnableDialOut'),
        outputPath: 'AccountSettings.EnableDialOut',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.AccountSettings.EnableDialOut', props);
    return resource.getResponseField('AccountSettings.EnableDialOut') as unknown as boolean;
  }

}

export class ChimeResponsesFetchAppInstanceRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetAppInstanceRetentionSettingsRequest) {
  }

  public get appInstanceRetentionSettings(): ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings {
    return new ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings(this.__scope, this.__resources, this.__input);
  }

  public get initiateDeletionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppInstanceRetentionSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAppInstanceRetentionSettings.InitiateDeletionTimestamp'),
        outputPath: 'InitiateDeletionTimestamp',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppInstanceRetentionSettings.InitiateDeletionTimestamp', props);
    return resource.getResponseField('InitiateDeletionTimestamp') as unknown as string;
  }

}

export class ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetAppInstanceRetentionSettingsRequest) {
  }

  public get channelRetentionSettings(): ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings {
    return new ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetAppInstanceRetentionSettingsRequest) {
  }

  public get retentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppInstanceRetentionSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAppInstanceRetentionSettings.AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays'),
        outputPath: 'AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppInstanceRetentionSettings.AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays', props);
    return resource.getResponseField('AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeResponsesFetchAppInstanceStreamingConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetAppInstanceStreamingConfigurationsRequest) {
  }

  public get appInstanceStreamingConfigurations(): shapes.ChimeAppInstanceStreamingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppInstanceStreamingConfigurations',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAppInstanceStreamingConfigurations.AppInstanceStreamingConfigurations'),
        outputPath: 'AppInstanceStreamingConfigurations',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppInstanceStreamingConfigurations.AppInstanceStreamingConfigurations', props);
    return resource.getResponseField('AppInstanceStreamingConfigurations') as unknown as shapes.ChimeAppInstanceStreamingConfiguration[];
  }

}

export class ChimeResponsesFetchAttendee {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetAttendeeRequest) {
  }

  public get attendee(): ChimeResponsesFetchAttendeeAttendee {
    return new ChimeResponsesFetchAttendeeAttendee(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchAttendeeAttendee {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetAttendeeRequest) {
  }

  public get externalUserId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAttendee.Attendee.ExternalUserId'),
        outputPath: 'Attendee.ExternalUserId',
        parameters: {
          MeetingId: this.__input.meetingId,
          AttendeeId: this.__input.attendeeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttendee.Attendee.ExternalUserId', props);
    return resource.getResponseField('Attendee.ExternalUserId') as unknown as string;
  }

  public get attendeeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAttendee.Attendee.AttendeeId'),
        outputPath: 'Attendee.AttendeeId',
        parameters: {
          MeetingId: this.__input.meetingId,
          AttendeeId: this.__input.attendeeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttendee.Attendee.AttendeeId', props);
    return resource.getResponseField('Attendee.AttendeeId') as unknown as string;
  }

  public get joinToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttendee',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetAttendee.Attendee.JoinToken'),
        outputPath: 'Attendee.JoinToken',
        parameters: {
          MeetingId: this.__input.meetingId,
          AttendeeId: this.__input.attendeeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttendee.Attendee.JoinToken', props);
    return resource.getResponseField('Attendee.JoinToken') as unknown as string;
  }

}

export class ChimeResponsesFetchBot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetBotRequest) {
  }

  public get bot(): ChimeResponsesFetchBotBot {
    return new ChimeResponsesFetchBotBot(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchBotBot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetBotRequest) {
  }

  public get botId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetBot.Bot.BotId'),
        outputPath: 'Bot.BotId',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBot.Bot.BotId', props);
    return resource.getResponseField('Bot.BotId') as unknown as string;
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetBot.Bot.UserId'),
        outputPath: 'Bot.UserId',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBot.Bot.UserId', props);
    return resource.getResponseField('Bot.UserId') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetBot.Bot.DisplayName'),
        outputPath: 'Bot.DisplayName',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBot.Bot.DisplayName', props);
    return resource.getResponseField('Bot.DisplayName') as unknown as string;
  }

  public get botType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetBot.Bot.BotType'),
        outputPath: 'Bot.BotType',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBot.Bot.BotType', props);
    return resource.getResponseField('Bot.BotType') as unknown as string;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetBot.Bot.Disabled'),
        outputPath: 'Bot.Disabled',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBot.Bot.Disabled', props);
    return resource.getResponseField('Bot.Disabled') as unknown as boolean;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetBot.Bot.CreatedTimestamp'),
        outputPath: 'Bot.CreatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBot.Bot.CreatedTimestamp', props);
    return resource.getResponseField('Bot.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetBot.Bot.UpdatedTimestamp'),
        outputPath: 'Bot.UpdatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBot.Bot.UpdatedTimestamp', props);
    return resource.getResponseField('Bot.UpdatedTimestamp') as unknown as string;
  }

  public get botEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetBot.Bot.BotEmail'),
        outputPath: 'Bot.BotEmail',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBot.Bot.BotEmail', props);
    return resource.getResponseField('Bot.BotEmail') as unknown as string;
  }

  public get securityToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetBot.Bot.SecurityToken'),
        outputPath: 'Bot.SecurityToken',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBot.Bot.SecurityToken', props);
    return resource.getResponseField('Bot.SecurityToken') as unknown as string;
  }

}

export class ChimeResponsesFetchChannelMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetChannelMessageRequest) {
  }

  public get channelMessage(): ChimeResponsesFetchChannelMessageChannelMessage {
    return new ChimeResponsesFetchChannelMessageChannelMessage(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchChannelMessageChannelMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetChannelMessageRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.ChannelArn'),
        outputPath: 'ChannelMessage.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.ChannelArn', props);
    return resource.getResponseField('ChannelMessage.ChannelArn') as unknown as string;
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.MessageId'),
        outputPath: 'ChannelMessage.MessageId',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.MessageId', props);
    return resource.getResponseField('ChannelMessage.MessageId') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.Content'),
        outputPath: 'ChannelMessage.Content',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.Content', props);
    return resource.getResponseField('ChannelMessage.Content') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.Metadata'),
        outputPath: 'ChannelMessage.Metadata',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.Metadata', props);
    return resource.getResponseField('ChannelMessage.Metadata') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.Type'),
        outputPath: 'ChannelMessage.Type',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.Type', props);
    return resource.getResponseField('ChannelMessage.Type') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.CreatedTimestamp'),
        outputPath: 'ChannelMessage.CreatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.CreatedTimestamp', props);
    return resource.getResponseField('ChannelMessage.CreatedTimestamp') as unknown as string;
  }

  public get lastEditedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.LastEditedTimestamp'),
        outputPath: 'ChannelMessage.LastEditedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.LastEditedTimestamp', props);
    return resource.getResponseField('ChannelMessage.LastEditedTimestamp') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.LastUpdatedTimestamp'),
        outputPath: 'ChannelMessage.LastUpdatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.LastUpdatedTimestamp', props);
    return resource.getResponseField('ChannelMessage.LastUpdatedTimestamp') as unknown as string;
  }

  public get sender(): ChimeResponsesFetchChannelMessageChannelMessageSender {
    return new ChimeResponsesFetchChannelMessageChannelMessageSender(this.__scope, this.__resources, this.__input);
  }

  public get redacted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.Redacted'),
        outputPath: 'ChannelMessage.Redacted',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.Redacted', props);
    return resource.getResponseField('ChannelMessage.Redacted') as unknown as boolean;
  }

  public get persistence(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.Persistence'),
        outputPath: 'ChannelMessage.Persistence',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.Persistence', props);
    return resource.getResponseField('ChannelMessage.Persistence') as unknown as string;
  }

}

export class ChimeResponsesFetchChannelMessageChannelMessageSender {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetChannelMessageRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.Sender.Arn'),
        outputPath: 'ChannelMessage.Sender.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.Sender.Arn', props);
    return resource.getResponseField('ChannelMessage.Sender.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetChannelMessage.ChannelMessage.Sender.Name'),
        outputPath: 'ChannelMessage.Sender.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.Sender.Name', props);
    return resource.getResponseField('ChannelMessage.Sender.Name') as unknown as string;
  }

}

export class ChimeResponsesFetchEventsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetEventsConfigurationRequest) {
  }

  public get eventsConfiguration(): ChimeResponsesFetchEventsConfigurationEventsConfiguration {
    return new ChimeResponsesFetchEventsConfigurationEventsConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchEventsConfigurationEventsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetEventsConfigurationRequest) {
  }

  public get botId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventsConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetEventsConfiguration.EventsConfiguration.BotId'),
        outputPath: 'EventsConfiguration.BotId',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventsConfiguration.EventsConfiguration.BotId', props);
    return resource.getResponseField('EventsConfiguration.BotId') as unknown as string;
  }

  public get outboundEventsHttpsEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventsConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetEventsConfiguration.EventsConfiguration.OutboundEventsHTTPSEndpoint'),
        outputPath: 'EventsConfiguration.OutboundEventsHTTPSEndpoint',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventsConfiguration.EventsConfiguration.OutboundEventsHTTPSEndpoint', props);
    return resource.getResponseField('EventsConfiguration.OutboundEventsHTTPSEndpoint') as unknown as string;
  }

  public get lambdaFunctionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventsConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetEventsConfiguration.EventsConfiguration.LambdaFunctionArn'),
        outputPath: 'EventsConfiguration.LambdaFunctionArn',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventsConfiguration.EventsConfiguration.LambdaFunctionArn', props);
    return resource.getResponseField('EventsConfiguration.LambdaFunctionArn') as unknown as string;
  }

}

export class ChimeResponsesFetchGlobalSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get businessCalling(): ChimeResponsesFetchGlobalSettingsBusinessCalling {
    return new ChimeResponsesFetchGlobalSettingsBusinessCalling(this.__scope, this.__resources);
  }

  public get voiceConnector(): ChimeResponsesFetchGlobalSettingsVoiceConnector {
    return new ChimeResponsesFetchGlobalSettingsVoiceConnector(this.__scope, this.__resources);
  }

}

export class ChimeResponsesFetchGlobalSettingsBusinessCalling {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get cdrBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGlobalSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetGlobalSettings.BusinessCalling.CdrBucket'),
        outputPath: 'BusinessCalling.CdrBucket',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGlobalSettings.BusinessCalling.CdrBucket', props);
    return resource.getResponseField('BusinessCalling.CdrBucket') as unknown as string;
  }

}

export class ChimeResponsesFetchGlobalSettingsVoiceConnector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get cdrBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGlobalSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetGlobalSettings.VoiceConnector.CdrBucket'),
        outputPath: 'VoiceConnector.CdrBucket',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGlobalSettings.VoiceConnector.CdrBucket', props);
    return resource.getResponseField('VoiceConnector.CdrBucket') as unknown as string;
  }

}

export class ChimeResponsesFetchMeeting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetMeetingRequest) {
  }

  public get meeting(): ChimeResponsesFetchMeetingMeeting {
    return new ChimeResponsesFetchMeetingMeeting(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchMeetingMeeting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetMeetingRequest) {
  }

  public get meetingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMeeting.Meeting.MeetingId'),
        outputPath: 'Meeting.MeetingId',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMeeting.Meeting.MeetingId', props);
    return resource.getResponseField('Meeting.MeetingId') as unknown as string;
  }

  public get externalMeetingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMeeting.Meeting.ExternalMeetingId'),
        outputPath: 'Meeting.ExternalMeetingId',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMeeting.Meeting.ExternalMeetingId', props);
    return resource.getResponseField('Meeting.ExternalMeetingId') as unknown as string;
  }

  public get mediaPlacement(): ChimeResponsesFetchMeetingMeetingMediaPlacement {
    return new ChimeResponsesFetchMeetingMeetingMediaPlacement(this.__scope, this.__resources, this.__input);
  }

  public get mediaRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMeeting.Meeting.MediaRegion'),
        outputPath: 'Meeting.MediaRegion',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMeeting.Meeting.MediaRegion', props);
    return resource.getResponseField('Meeting.MediaRegion') as unknown as string;
  }

}

export class ChimeResponsesFetchMeetingMeetingMediaPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetMeetingRequest) {
  }

  public get audioHostUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMeeting.Meeting.MediaPlacement.AudioHostUrl'),
        outputPath: 'Meeting.MediaPlacement.AudioHostUrl',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMeeting.Meeting.MediaPlacement.AudioHostUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.AudioHostUrl') as unknown as string;
  }

  public get audioFallbackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMeeting.Meeting.MediaPlacement.AudioFallbackUrl'),
        outputPath: 'Meeting.MediaPlacement.AudioFallbackUrl',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMeeting.Meeting.MediaPlacement.AudioFallbackUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.AudioFallbackUrl') as unknown as string;
  }

  public get screenDataUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMeeting.Meeting.MediaPlacement.ScreenDataUrl'),
        outputPath: 'Meeting.MediaPlacement.ScreenDataUrl',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMeeting.Meeting.MediaPlacement.ScreenDataUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.ScreenDataUrl') as unknown as string;
  }

  public get screenSharingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMeeting.Meeting.MediaPlacement.ScreenSharingUrl'),
        outputPath: 'Meeting.MediaPlacement.ScreenSharingUrl',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMeeting.Meeting.MediaPlacement.ScreenSharingUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.ScreenSharingUrl') as unknown as string;
  }

  public get screenViewingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMeeting.Meeting.MediaPlacement.ScreenViewingUrl'),
        outputPath: 'Meeting.MediaPlacement.ScreenViewingUrl',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMeeting.Meeting.MediaPlacement.ScreenViewingUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.ScreenViewingUrl') as unknown as string;
  }

  public get signalingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMeeting.Meeting.MediaPlacement.SignalingUrl'),
        outputPath: 'Meeting.MediaPlacement.SignalingUrl',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMeeting.Meeting.MediaPlacement.SignalingUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.SignalingUrl') as unknown as string;
  }

  public get turnControlUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMeeting',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMeeting.Meeting.MediaPlacement.TurnControlUrl'),
        outputPath: 'Meeting.MediaPlacement.TurnControlUrl',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMeeting.Meeting.MediaPlacement.TurnControlUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.TurnControlUrl') as unknown as string;
  }

}

export class ChimeResponsesFetchMessagingSessionEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get endpoint(): ChimeResponsesFetchMessagingSessionEndpointEndpoint {
    return new ChimeResponsesFetchMessagingSessionEndpointEndpoint(this.__scope, this.__resources);
  }

}

export class ChimeResponsesFetchMessagingSessionEndpointEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMessagingSessionEndpoint',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetMessagingSessionEndpoint.Endpoint.Url'),
        outputPath: 'Endpoint.Url',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMessagingSessionEndpoint.Endpoint.Url', props);
    return resource.getResponseField('Endpoint.Url') as unknown as string;
  }

}

export class ChimeResponsesFetchPhoneNumber {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetPhoneNumberRequest) {
  }

  public get phoneNumber(): ChimeResponsesFetchPhoneNumberPhoneNumber {
    return new ChimeResponsesFetchPhoneNumberPhoneNumber(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchPhoneNumberPhoneNumber {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetPhoneNumberRequest) {
  }

  public get phoneNumberId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.PhoneNumberId'),
        outputPath: 'PhoneNumber.PhoneNumberId',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.PhoneNumberId', props);
    return resource.getResponseField('PhoneNumber.PhoneNumberId') as unknown as string;
  }

  public get e164PhoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.E164PhoneNumber'),
        outputPath: 'PhoneNumber.E164PhoneNumber',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.E164PhoneNumber', props);
    return resource.getResponseField('PhoneNumber.E164PhoneNumber') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.Type'),
        outputPath: 'PhoneNumber.Type',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.Type', props);
    return resource.getResponseField('PhoneNumber.Type') as unknown as string;
  }

  public get productType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.ProductType'),
        outputPath: 'PhoneNumber.ProductType',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.ProductType', props);
    return resource.getResponseField('PhoneNumber.ProductType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.Status'),
        outputPath: 'PhoneNumber.Status',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.Status', props);
    return resource.getResponseField('PhoneNumber.Status') as unknown as string;
  }

  public get capabilities(): ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities {
    return new ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities(this.__scope, this.__resources, this.__input);
  }

  public get associations(): shapes.ChimePhoneNumberAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.Associations'),
        outputPath: 'PhoneNumber.Associations',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.Associations', props);
    return resource.getResponseField('PhoneNumber.Associations') as unknown as shapes.ChimePhoneNumberAssociation[];
  }

  public get callingName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.CallingName'),
        outputPath: 'PhoneNumber.CallingName',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.CallingName', props);
    return resource.getResponseField('PhoneNumber.CallingName') as unknown as string;
  }

  public get callingNameStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.CallingNameStatus'),
        outputPath: 'PhoneNumber.CallingNameStatus',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.CallingNameStatus', props);
    return resource.getResponseField('PhoneNumber.CallingNameStatus') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.CreatedTimestamp'),
        outputPath: 'PhoneNumber.CreatedTimestamp',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.CreatedTimestamp', props);
    return resource.getResponseField('PhoneNumber.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.UpdatedTimestamp'),
        outputPath: 'PhoneNumber.UpdatedTimestamp',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.UpdatedTimestamp', props);
    return resource.getResponseField('PhoneNumber.UpdatedTimestamp') as unknown as string;
  }

  public get deletionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.DeletionTimestamp'),
        outputPath: 'PhoneNumber.DeletionTimestamp',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.DeletionTimestamp', props);
    return resource.getResponseField('PhoneNumber.DeletionTimestamp') as unknown as string;
  }

}

export class ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetPhoneNumberRequest) {
  }

  public get inboundCall(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.Capabilities.InboundCall'),
        outputPath: 'PhoneNumber.Capabilities.InboundCall',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.Capabilities.InboundCall', props);
    return resource.getResponseField('PhoneNumber.Capabilities.InboundCall') as unknown as boolean;
  }

  public get outboundCall(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.Capabilities.OutboundCall'),
        outputPath: 'PhoneNumber.Capabilities.OutboundCall',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.Capabilities.OutboundCall', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundCall') as unknown as boolean;
  }

  public get inboundSms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.Capabilities.InboundSMS'),
        outputPath: 'PhoneNumber.Capabilities.InboundSMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.Capabilities.InboundSMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.InboundSMS') as unknown as boolean;
  }

  public get outboundSms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.Capabilities.OutboundSMS'),
        outputPath: 'PhoneNumber.Capabilities.OutboundSMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.Capabilities.OutboundSMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundSMS') as unknown as boolean;
  }

  public get inboundMms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.Capabilities.InboundMMS'),
        outputPath: 'PhoneNumber.Capabilities.InboundMMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.Capabilities.InboundMMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.InboundMMS') as unknown as boolean;
  }

  public get outboundMms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumber.PhoneNumber.Capabilities.OutboundMMS'),
        outputPath: 'PhoneNumber.Capabilities.OutboundMMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumber.PhoneNumber.Capabilities.OutboundMMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundMMS') as unknown as boolean;
  }

}

export class ChimeResponsesFetchPhoneNumberOrder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetPhoneNumberOrderRequest) {
  }

  public get phoneNumberOrder(): ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder {
    return new ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetPhoneNumberOrderRequest) {
  }

  public get phoneNumberOrderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumberOrder.PhoneNumberOrder.PhoneNumberOrderId'),
        outputPath: 'PhoneNumberOrder.PhoneNumberOrderId',
        parameters: {
          PhoneNumberOrderId: this.__input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumberOrder.PhoneNumberOrder.PhoneNumberOrderId', props);
    return resource.getResponseField('PhoneNumberOrder.PhoneNumberOrderId') as unknown as string;
  }

  public get productType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumberOrder.PhoneNumberOrder.ProductType'),
        outputPath: 'PhoneNumberOrder.ProductType',
        parameters: {
          PhoneNumberOrderId: this.__input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumberOrder.PhoneNumberOrder.ProductType', props);
    return resource.getResponseField('PhoneNumberOrder.ProductType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumberOrder.PhoneNumberOrder.Status'),
        outputPath: 'PhoneNumberOrder.Status',
        parameters: {
          PhoneNumberOrderId: this.__input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumberOrder.PhoneNumberOrder.Status', props);
    return resource.getResponseField('PhoneNumberOrder.Status') as unknown as string;
  }

  public get orderedPhoneNumbers(): shapes.ChimeOrderedPhoneNumber[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumberOrder.PhoneNumberOrder.OrderedPhoneNumbers'),
        outputPath: 'PhoneNumberOrder.OrderedPhoneNumbers',
        parameters: {
          PhoneNumberOrderId: this.__input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumberOrder.PhoneNumberOrder.OrderedPhoneNumbers', props);
    return resource.getResponseField('PhoneNumberOrder.OrderedPhoneNumbers') as unknown as shapes.ChimeOrderedPhoneNumber[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumberOrder.PhoneNumberOrder.CreatedTimestamp'),
        outputPath: 'PhoneNumberOrder.CreatedTimestamp',
        parameters: {
          PhoneNumberOrderId: this.__input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumberOrder.PhoneNumberOrder.CreatedTimestamp', props);
    return resource.getResponseField('PhoneNumberOrder.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumberOrder',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumberOrder.PhoneNumberOrder.UpdatedTimestamp'),
        outputPath: 'PhoneNumberOrder.UpdatedTimestamp',
        parameters: {
          PhoneNumberOrderId: this.__input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumberOrder.PhoneNumberOrder.UpdatedTimestamp', props);
    return resource.getResponseField('PhoneNumberOrder.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesFetchPhoneNumberSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get callingName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumberSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumberSettings.CallingName'),
        outputPath: 'CallingName',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumberSettings.CallingName', props);
    return resource.getResponseField('CallingName') as unknown as string;
  }

  public get callingNameUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPhoneNumberSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetPhoneNumberSettings.CallingNameUpdatedTimestamp'),
        outputPath: 'CallingNameUpdatedTimestamp',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPhoneNumberSettings.CallingNameUpdatedTimestamp', props);
    return resource.getResponseField('CallingNameUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesFetchProxySession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetProxySessionRequest) {
  }

  public get proxySession(): ChimeResponsesFetchProxySessionProxySession {
    return new ChimeResponsesFetchProxySessionProxySession(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchProxySessionProxySession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetProxySessionRequest) {
  }

  public get voiceConnectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.VoiceConnectorId'),
        outputPath: 'ProxySession.VoiceConnectorId',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.VoiceConnectorId', props);
    return resource.getResponseField('ProxySession.VoiceConnectorId') as unknown as string;
  }

  public get proxySessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.ProxySessionId'),
        outputPath: 'ProxySession.ProxySessionId',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.ProxySessionId', props);
    return resource.getResponseField('ProxySession.ProxySessionId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.Name'),
        outputPath: 'ProxySession.Name',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.Name', props);
    return resource.getResponseField('ProxySession.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.Status'),
        outputPath: 'ProxySession.Status',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.Status', props);
    return resource.getResponseField('ProxySession.Status') as unknown as string;
  }

  public get expiryMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.ExpiryMinutes'),
        outputPath: 'ProxySession.ExpiryMinutes',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.ExpiryMinutes', props);
    return resource.getResponseField('ProxySession.ExpiryMinutes') as unknown as number;
  }

  public get capabilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.Capabilities'),
        outputPath: 'ProxySession.Capabilities',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.Capabilities', props);
    return resource.getResponseField('ProxySession.Capabilities') as unknown as string[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.CreatedTimestamp'),
        outputPath: 'ProxySession.CreatedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.CreatedTimestamp', props);
    return resource.getResponseField('ProxySession.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.UpdatedTimestamp'),
        outputPath: 'ProxySession.UpdatedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.UpdatedTimestamp', props);
    return resource.getResponseField('ProxySession.UpdatedTimestamp') as unknown as string;
  }

  public get endedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.EndedTimestamp'),
        outputPath: 'ProxySession.EndedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.EndedTimestamp', props);
    return resource.getResponseField('ProxySession.EndedTimestamp') as unknown as string;
  }

  public get participants(): shapes.ChimeParticipant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.Participants'),
        outputPath: 'ProxySession.Participants',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.Participants', props);
    return resource.getResponseField('ProxySession.Participants') as unknown as shapes.ChimeParticipant[];
  }

  public get numberSelectionBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.NumberSelectionBehavior'),
        outputPath: 'ProxySession.NumberSelectionBehavior',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.NumberSelectionBehavior', props);
    return resource.getResponseField('ProxySession.NumberSelectionBehavior') as unknown as string;
  }

  public get geoMatchLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.GeoMatchLevel'),
        outputPath: 'ProxySession.GeoMatchLevel',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.GeoMatchLevel', props);
    return resource.getResponseField('ProxySession.GeoMatchLevel') as unknown as string;
  }

  public get geoMatchParams(): ChimeResponsesFetchProxySessionProxySessionGeoMatchParams {
    return new ChimeResponsesFetchProxySessionProxySessionGeoMatchParams(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchProxySessionProxySessionGeoMatchParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetProxySessionRequest) {
  }

  public get country(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.GeoMatchParams.Country'),
        outputPath: 'ProxySession.GeoMatchParams.Country',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.GeoMatchParams.Country', props);
    return resource.getResponseField('ProxySession.GeoMatchParams.Country') as unknown as string;
  }

  public get areaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetProxySession.ProxySession.GeoMatchParams.AreaCode'),
        outputPath: 'ProxySession.GeoMatchParams.AreaCode',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProxySession.ProxySession.GeoMatchParams.AreaCode', props);
    return resource.getResponseField('ProxySession.GeoMatchParams.AreaCode') as unknown as string;
  }

}

export class ChimeResponsesFetchRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetRetentionSettingsRequest) {
  }

  public get retentionSettings(): ChimeResponsesFetchRetentionSettingsRetentionSettings {
    return new ChimeResponsesFetchRetentionSettingsRetentionSettings(this.__scope, this.__resources, this.__input);
  }

  public get initiateDeletionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRetentionSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetRetentionSettings.InitiateDeletionTimestamp'),
        outputPath: 'InitiateDeletionTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRetentionSettings.InitiateDeletionTimestamp', props);
    return resource.getResponseField('InitiateDeletionTimestamp') as unknown as string;
  }

}

export class ChimeResponsesFetchRetentionSettingsRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetRetentionSettingsRequest) {
  }

  public get roomRetentionSettings(): ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings {
    return new ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings(this.__scope, this.__resources, this.__input);
  }

  public get conversationRetentionSettings(): ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings {
    return new ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetRetentionSettingsRequest) {
  }

  public get retentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRetentionSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetRetentionSettings.RetentionSettings.RoomRetentionSettings.RetentionDays'),
        outputPath: 'RetentionSettings.RoomRetentionSettings.RetentionDays',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRetentionSettings.RetentionSettings.RoomRetentionSettings.RetentionDays', props);
    return resource.getResponseField('RetentionSettings.RoomRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetRetentionSettingsRequest) {
  }

  public get retentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRetentionSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetRetentionSettings.RetentionSettings.ConversationRetentionSettings.RetentionDays'),
        outputPath: 'RetentionSettings.ConversationRetentionSettings.RetentionDays',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRetentionSettings.RetentionSettings.ConversationRetentionSettings.RetentionDays', props);
    return resource.getResponseField('RetentionSettings.ConversationRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeResponsesFetchRoom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetRoomRequest) {
  }

  public get room(): ChimeResponsesFetchRoomRoom {
    return new ChimeResponsesFetchRoomRoom(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchRoomRoom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetRoomRequest) {
  }

  public get roomId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetRoom.Room.RoomId'),
        outputPath: 'Room.RoomId',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.RoomId', props);
    return resource.getResponseField('Room.RoomId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetRoom.Room.Name'),
        outputPath: 'Room.Name',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.Name', props);
    return resource.getResponseField('Room.Name') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetRoom.Room.AccountId'),
        outputPath: 'Room.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.AccountId', props);
    return resource.getResponseField('Room.AccountId') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetRoom.Room.CreatedBy'),
        outputPath: 'Room.CreatedBy',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.CreatedBy', props);
    return resource.getResponseField('Room.CreatedBy') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetRoom.Room.CreatedTimestamp'),
        outputPath: 'Room.CreatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.CreatedTimestamp', props);
    return resource.getResponseField('Room.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetRoom.Room.UpdatedTimestamp'),
        outputPath: 'Room.UpdatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.UpdatedTimestamp', props);
    return resource.getResponseField('Room.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesFetchSipMediaApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetSipMediaApplicationRequest) {
  }

  public get sipMediaApplication(): ChimeResponsesFetchSipMediaApplicationSipMediaApplication {
    return new ChimeResponsesFetchSipMediaApplicationSipMediaApplication(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchSipMediaApplicationSipMediaApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetSipMediaApplicationRequest) {
  }

  public get sipMediaApplicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipMediaApplication.SipMediaApplication.SipMediaApplicationId'),
        outputPath: 'SipMediaApplication.SipMediaApplicationId',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipMediaApplication.SipMediaApplication.SipMediaApplicationId', props);
    return resource.getResponseField('SipMediaApplication.SipMediaApplicationId') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipMediaApplication.SipMediaApplication.AwsRegion'),
        outputPath: 'SipMediaApplication.AwsRegion',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipMediaApplication.SipMediaApplication.AwsRegion', props);
    return resource.getResponseField('SipMediaApplication.AwsRegion') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipMediaApplication.SipMediaApplication.Name'),
        outputPath: 'SipMediaApplication.Name',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipMediaApplication.SipMediaApplication.Name', props);
    return resource.getResponseField('SipMediaApplication.Name') as unknown as string;
  }

  public get endpoints(): shapes.ChimeSipMediaApplicationEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipMediaApplication.SipMediaApplication.Endpoints'),
        outputPath: 'SipMediaApplication.Endpoints',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipMediaApplication.SipMediaApplication.Endpoints', props);
    return resource.getResponseField('SipMediaApplication.Endpoints') as unknown as shapes.ChimeSipMediaApplicationEndpoint[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipMediaApplication.SipMediaApplication.CreatedTimestamp'),
        outputPath: 'SipMediaApplication.CreatedTimestamp',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipMediaApplication.SipMediaApplication.CreatedTimestamp', props);
    return resource.getResponseField('SipMediaApplication.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipMediaApplication.SipMediaApplication.UpdatedTimestamp'),
        outputPath: 'SipMediaApplication.UpdatedTimestamp',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipMediaApplication.SipMediaApplication.UpdatedTimestamp', props);
    return resource.getResponseField('SipMediaApplication.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesFetchSipMediaApplicationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetSipMediaApplicationLoggingConfigurationRequest) {
  }

  public get sipMediaApplicationLoggingConfiguration(): ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration {
    return new ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetSipMediaApplicationLoggingConfigurationRequest) {
  }

  public get enableSipMediaApplicationMessageLogs(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipMediaApplicationLoggingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipMediaApplicationLoggingConfiguration.SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs'),
        outputPath: 'SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipMediaApplicationLoggingConfiguration.SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs', props);
    return resource.getResponseField('SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs') as unknown as boolean;
  }

}

export class ChimeResponsesFetchSipRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetSipRuleRequest) {
  }

  public get sipRule(): ChimeResponsesFetchSipRuleSipRule {
    return new ChimeResponsesFetchSipRuleSipRule(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchSipRuleSipRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetSipRuleRequest) {
  }

  public get sipRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipRule.SipRule.SipRuleId'),
        outputPath: 'SipRule.SipRuleId',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipRule.SipRule.SipRuleId', props);
    return resource.getResponseField('SipRule.SipRuleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipRule.SipRule.Name'),
        outputPath: 'SipRule.Name',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipRule.SipRule.Name', props);
    return resource.getResponseField('SipRule.Name') as unknown as string;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipRule.SipRule.Disabled'),
        outputPath: 'SipRule.Disabled',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipRule.SipRule.Disabled', props);
    return resource.getResponseField('SipRule.Disabled') as unknown as boolean;
  }

  public get triggerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipRule.SipRule.TriggerType'),
        outputPath: 'SipRule.TriggerType',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipRule.SipRule.TriggerType', props);
    return resource.getResponseField('SipRule.TriggerType') as unknown as string;
  }

  public get triggerValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipRule.SipRule.TriggerValue'),
        outputPath: 'SipRule.TriggerValue',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipRule.SipRule.TriggerValue', props);
    return resource.getResponseField('SipRule.TriggerValue') as unknown as string;
  }

  public get targetApplications(): shapes.ChimeSipRuleTargetApplication[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipRule.SipRule.TargetApplications'),
        outputPath: 'SipRule.TargetApplications',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipRule.SipRule.TargetApplications', props);
    return resource.getResponseField('SipRule.TargetApplications') as unknown as shapes.ChimeSipRuleTargetApplication[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipRule.SipRule.CreatedTimestamp'),
        outputPath: 'SipRule.CreatedTimestamp',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipRule.SipRule.CreatedTimestamp', props);
    return resource.getResponseField('SipRule.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetSipRule.SipRule.UpdatedTimestamp'),
        outputPath: 'SipRule.UpdatedTimestamp',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSipRule.SipRule.UpdatedTimestamp', props);
    return resource.getResponseField('SipRule.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesFetchUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetUserRequest) {
  }

  public get user(): ChimeResponsesFetchUserUser {
    return new ChimeResponsesFetchUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetUserRequest) {
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.UserId'),
        outputPath: 'User.UserId',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.UserId', props);
    return resource.getResponseField('User.UserId') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.AccountId'),
        outputPath: 'User.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.AccountId', props);
    return resource.getResponseField('User.AccountId') as unknown as string;
  }

  public get primaryEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.PrimaryEmail'),
        outputPath: 'User.PrimaryEmail',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.PrimaryEmail', props);
    return resource.getResponseField('User.PrimaryEmail') as unknown as string;
  }

  public get primaryProvisionedNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.PrimaryProvisionedNumber'),
        outputPath: 'User.PrimaryProvisionedNumber',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.PrimaryProvisionedNumber', props);
    return resource.getResponseField('User.PrimaryProvisionedNumber') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.DisplayName'),
        outputPath: 'User.DisplayName',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.DisplayName', props);
    return resource.getResponseField('User.DisplayName') as unknown as string;
  }

  public get licenseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.LicenseType'),
        outputPath: 'User.LicenseType',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.LicenseType', props);
    return resource.getResponseField('User.LicenseType') as unknown as string;
  }

  public get userType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.UserType'),
        outputPath: 'User.UserType',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.UserType', props);
    return resource.getResponseField('User.UserType') as unknown as string;
  }

  public get userRegistrationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.UserRegistrationStatus'),
        outputPath: 'User.UserRegistrationStatus',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.UserRegistrationStatus', props);
    return resource.getResponseField('User.UserRegistrationStatus') as unknown as string;
  }

  public get userInvitationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.UserInvitationStatus'),
        outputPath: 'User.UserInvitationStatus',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.UserInvitationStatus', props);
    return resource.getResponseField('User.UserInvitationStatus') as unknown as string;
  }

  public get registeredOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.RegisteredOn'),
        outputPath: 'User.RegisteredOn',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.RegisteredOn', props);
    return resource.getResponseField('User.RegisteredOn') as unknown as string;
  }

  public get invitedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.InvitedOn'),
        outputPath: 'User.InvitedOn',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.InvitedOn', props);
    return resource.getResponseField('User.InvitedOn') as unknown as string;
  }

  public get alexaForBusinessMetadata(): ChimeResponsesFetchUserUserAlexaForBusinessMetadata {
    return new ChimeResponsesFetchUserUserAlexaForBusinessMetadata(this.__scope, this.__resources, this.__input);
  }

  public get personalPin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.PersonalPIN'),
        outputPath: 'User.PersonalPIN',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.PersonalPIN', props);
    return resource.getResponseField('User.PersonalPIN') as unknown as string;
  }

}

export class ChimeResponsesFetchUserUserAlexaForBusinessMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetUserRequest) {
  }

  public get isAlexaForBusinessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled'),
        outputPath: 'User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled') as unknown as boolean;
  }

  public get alexaForBusinessRoomArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUser.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn'),
        outputPath: 'User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn') as unknown as string;
  }

}

export class ChimeResponsesFetchUserSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetUserSettingsRequest) {
  }

  public get userSettings(): ChimeResponsesFetchUserSettingsUserSettings {
    return new ChimeResponsesFetchUserSettingsUserSettings(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchUserSettingsUserSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetUserSettingsRequest) {
  }

  public get telephony(): ChimeResponsesFetchUserSettingsUserSettingsTelephony {
    return new ChimeResponsesFetchUserSettingsUserSettingsTelephony(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchUserSettingsUserSettingsTelephony {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetUserSettingsRequest) {
  }

  public get inboundCalling(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUserSettings.UserSettings.Telephony.InboundCalling'),
        outputPath: 'UserSettings.Telephony.InboundCalling',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserSettings.UserSettings.Telephony.InboundCalling', props);
    return resource.getResponseField('UserSettings.Telephony.InboundCalling') as unknown as boolean;
  }

  public get outboundCalling(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUserSettings.UserSettings.Telephony.OutboundCalling'),
        outputPath: 'UserSettings.Telephony.OutboundCalling',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserSettings.UserSettings.Telephony.OutboundCalling', props);
    return resource.getResponseField('UserSettings.Telephony.OutboundCalling') as unknown as boolean;
  }

  public get sms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetUserSettings.UserSettings.Telephony.SMS'),
        outputPath: 'UserSettings.Telephony.SMS',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserSettings.UserSettings.Telephony.SMS', props);
    return resource.getResponseField('UserSettings.Telephony.SMS') as unknown as boolean;
  }

}

export class ChimeResponsesFetchVoiceConnector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorRequest) {
  }

  public get voiceConnector(): ChimeResponsesFetchVoiceConnectorVoiceConnector {
    return new ChimeResponsesFetchVoiceConnectorVoiceConnector(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchVoiceConnectorVoiceConnector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorRequest) {
  }

  public get voiceConnectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnector.VoiceConnector.VoiceConnectorId'),
        outputPath: 'VoiceConnector.VoiceConnectorId',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnector.VoiceConnector.VoiceConnectorId', props);
    return resource.getResponseField('VoiceConnector.VoiceConnectorId') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnector.VoiceConnector.AwsRegion'),
        outputPath: 'VoiceConnector.AwsRegion',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnector.VoiceConnector.AwsRegion', props);
    return resource.getResponseField('VoiceConnector.AwsRegion') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnector.VoiceConnector.Name'),
        outputPath: 'VoiceConnector.Name',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnector.VoiceConnector.Name', props);
    return resource.getResponseField('VoiceConnector.Name') as unknown as string;
  }

  public get outboundHostName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnector.VoiceConnector.OutboundHostName'),
        outputPath: 'VoiceConnector.OutboundHostName',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnector.VoiceConnector.OutboundHostName', props);
    return resource.getResponseField('VoiceConnector.OutboundHostName') as unknown as string;
  }

  public get requireEncryption(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnector.VoiceConnector.RequireEncryption'),
        outputPath: 'VoiceConnector.RequireEncryption',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnector.VoiceConnector.RequireEncryption', props);
    return resource.getResponseField('VoiceConnector.RequireEncryption') as unknown as boolean;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnector.VoiceConnector.CreatedTimestamp'),
        outputPath: 'VoiceConnector.CreatedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnector.VoiceConnector.CreatedTimestamp', props);
    return resource.getResponseField('VoiceConnector.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnector.VoiceConnector.UpdatedTimestamp'),
        outputPath: 'VoiceConnector.UpdatedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnector.VoiceConnector.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnector.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest) {
  }

  public get emergencyCallingConfiguration(): ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration {
    return new ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest) {
  }

  public get dnis(): shapes.ChimeDnisEmergencyCallingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorEmergencyCallingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorEmergencyCallingConfiguration.EmergencyCallingConfiguration.DNIS'),
        outputPath: 'EmergencyCallingConfiguration.DNIS',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorEmergencyCallingConfiguration.EmergencyCallingConfiguration.DNIS', props);
    return resource.getResponseField('EmergencyCallingConfiguration.DNIS') as unknown as shapes.ChimeDnisEmergencyCallingConfiguration[];
  }

}

export class ChimeResponsesFetchVoiceConnectorGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorGroupRequest) {
  }

  public get voiceConnectorGroup(): ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup {
    return new ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorGroupRequest) {
  }

  public get voiceConnectorGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorGroupId'),
        outputPath: 'VoiceConnectorGroup.VoiceConnectorGroupId',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorGroupId', props);
    return resource.getResponseField('VoiceConnectorGroup.VoiceConnectorGroupId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorGroup.VoiceConnectorGroup.Name'),
        outputPath: 'VoiceConnectorGroup.Name',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorGroup.VoiceConnectorGroup.Name', props);
    return resource.getResponseField('VoiceConnectorGroup.Name') as unknown as string;
  }

  public get voiceConnectorItems(): shapes.ChimeVoiceConnectorItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorItems'),
        outputPath: 'VoiceConnectorGroup.VoiceConnectorItems',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorItems', props);
    return resource.getResponseField('VoiceConnectorGroup.VoiceConnectorItems') as unknown as shapes.ChimeVoiceConnectorItem[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorGroup.VoiceConnectorGroup.CreatedTimestamp'),
        outputPath: 'VoiceConnectorGroup.CreatedTimestamp',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorGroup.VoiceConnectorGroup.CreatedTimestamp', props);
    return resource.getResponseField('VoiceConnectorGroup.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorGroup.VoiceConnectorGroup.UpdatedTimestamp'),
        outputPath: 'VoiceConnectorGroup.UpdatedTimestamp',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorGroup.VoiceConnectorGroup.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnectorGroup.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesFetchVoiceConnectorLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorLoggingConfigurationRequest) {
  }

  public get loggingConfiguration(): ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration {
    return new ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorLoggingConfigurationRequest) {
  }

  public get enableSipLogs(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorLoggingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorLoggingConfiguration.LoggingConfiguration.EnableSIPLogs'),
        outputPath: 'LoggingConfiguration.EnableSIPLogs',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorLoggingConfiguration.LoggingConfiguration.EnableSIPLogs', props);
    return resource.getResponseField('LoggingConfiguration.EnableSIPLogs') as unknown as boolean;
  }

}

export class ChimeResponsesFetchVoiceConnectorOrigination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorOriginationRequest) {
  }

  public get origination(): ChimeResponsesFetchVoiceConnectorOriginationOrigination {
    return new ChimeResponsesFetchVoiceConnectorOriginationOrigination(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchVoiceConnectorOriginationOrigination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorOriginationRequest) {
  }

  public get routes(): shapes.ChimeOriginationRoute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorOrigination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorOrigination.Origination.Routes'),
        outputPath: 'Origination.Routes',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorOrigination.Origination.Routes', props);
    return resource.getResponseField('Origination.Routes') as unknown as shapes.ChimeOriginationRoute[];
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorOrigination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorOrigination.Origination.Disabled'),
        outputPath: 'Origination.Disabled',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorOrigination.Origination.Disabled', props);
    return resource.getResponseField('Origination.Disabled') as unknown as boolean;
  }

}

export class ChimeResponsesFetchVoiceConnectorProxy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorProxyRequest) {
  }

  public get proxy(): ChimeResponsesFetchVoiceConnectorProxyProxy {
    return new ChimeResponsesFetchVoiceConnectorProxyProxy(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchVoiceConnectorProxyProxy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorProxyRequest) {
  }

  public get defaultSessionExpiryMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorProxy',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorProxy.Proxy.DefaultSessionExpiryMinutes'),
        outputPath: 'Proxy.DefaultSessionExpiryMinutes',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorProxy.Proxy.DefaultSessionExpiryMinutes', props);
    return resource.getResponseField('Proxy.DefaultSessionExpiryMinutes') as unknown as number;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorProxy',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorProxy.Proxy.Disabled'),
        outputPath: 'Proxy.Disabled',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorProxy.Proxy.Disabled', props);
    return resource.getResponseField('Proxy.Disabled') as unknown as boolean;
  }

  public get fallBackPhoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorProxy',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorProxy.Proxy.FallBackPhoneNumber'),
        outputPath: 'Proxy.FallBackPhoneNumber',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorProxy.Proxy.FallBackPhoneNumber', props);
    return resource.getResponseField('Proxy.FallBackPhoneNumber') as unknown as string;
  }

  public get phoneNumberCountries(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorProxy',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorProxy.Proxy.PhoneNumberCountries'),
        outputPath: 'Proxy.PhoneNumberCountries',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorProxy.Proxy.PhoneNumberCountries', props);
    return resource.getResponseField('Proxy.PhoneNumberCountries') as unknown as string[];
  }

}

export class ChimeResponsesFetchVoiceConnectorStreamingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorStreamingConfigurationRequest) {
  }

  public get streamingConfiguration(): ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration {
    return new ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorStreamingConfigurationRequest) {
  }

  public get dataRetentionInHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorStreamingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorStreamingConfiguration.StreamingConfiguration.DataRetentionInHours'),
        outputPath: 'StreamingConfiguration.DataRetentionInHours',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorStreamingConfiguration.StreamingConfiguration.DataRetentionInHours', props);
    return resource.getResponseField('StreamingConfiguration.DataRetentionInHours') as unknown as number;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorStreamingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorStreamingConfiguration.StreamingConfiguration.Disabled'),
        outputPath: 'StreamingConfiguration.Disabled',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorStreamingConfiguration.StreamingConfiguration.Disabled', props);
    return resource.getResponseField('StreamingConfiguration.Disabled') as unknown as boolean;
  }

  public get streamingNotificationTargets(): shapes.ChimeStreamingNotificationTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorStreamingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorStreamingConfiguration.StreamingConfiguration.StreamingNotificationTargets'),
        outputPath: 'StreamingConfiguration.StreamingNotificationTargets',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorStreamingConfiguration.StreamingConfiguration.StreamingNotificationTargets', props);
    return resource.getResponseField('StreamingConfiguration.StreamingNotificationTargets') as unknown as shapes.ChimeStreamingNotificationTarget[];
  }

}

export class ChimeResponsesFetchVoiceConnectorTermination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorTerminationRequest) {
  }

  public get termination(): ChimeResponsesFetchVoiceConnectorTerminationTermination {
    return new ChimeResponsesFetchVoiceConnectorTerminationTermination(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchVoiceConnectorTerminationTermination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorTerminationRequest) {
  }

  public get cpsLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorTermination.Termination.CpsLimit'),
        outputPath: 'Termination.CpsLimit',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorTermination.Termination.CpsLimit', props);
    return resource.getResponseField('Termination.CpsLimit') as unknown as number;
  }

  public get defaultPhoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorTermination.Termination.DefaultPhoneNumber'),
        outputPath: 'Termination.DefaultPhoneNumber',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorTermination.Termination.DefaultPhoneNumber', props);
    return resource.getResponseField('Termination.DefaultPhoneNumber') as unknown as string;
  }

  public get callingRegions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorTermination.Termination.CallingRegions'),
        outputPath: 'Termination.CallingRegions',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorTermination.Termination.CallingRegions', props);
    return resource.getResponseField('Termination.CallingRegions') as unknown as string[];
  }

  public get cidrAllowedList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorTermination.Termination.CidrAllowedList'),
        outputPath: 'Termination.CidrAllowedList',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorTermination.Termination.CidrAllowedList', props);
    return resource.getResponseField('Termination.CidrAllowedList') as unknown as string[];
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorTermination.Termination.Disabled'),
        outputPath: 'Termination.Disabled',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorTermination.Termination.Disabled', props);
    return resource.getResponseField('Termination.Disabled') as unknown as boolean;
  }

}

export class ChimeResponsesFetchVoiceConnectorTerminationHealth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorTerminationHealthRequest) {
  }

  public get terminationHealth(): ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth {
    return new ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeGetVoiceConnectorTerminationHealthRequest) {
  }

  public get timestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorTerminationHealth',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorTerminationHealth.TerminationHealth.Timestamp'),
        outputPath: 'TerminationHealth.Timestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorTerminationHealth.TerminationHealth.Timestamp', props);
    return resource.getResponseField('TerminationHealth.Timestamp') as unknown as string;
  }

  public get source(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVoiceConnectorTerminationHealth',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.GetVoiceConnectorTerminationHealth.TerminationHealth.Source'),
        outputPath: 'TerminationHealth.Source',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVoiceConnectorTerminationHealth.TerminationHealth.Source', props);
    return resource.getResponseField('TerminationHealth.Source') as unknown as string;
  }

}

export class ChimeResponsesInviteUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeInviteUsersRequest) {
  }

  public get invites(): shapes.ChimeInvite[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteUsers',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.InviteUsers.Invites'),
        outputPath: 'Invites',
        parameters: {
          AccountId: this.__input.accountId,
          UserEmailList: this.__input.userEmailList,
          UserType: this.__input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteUsers.Invites', props);
    return resource.getResponseField('Invites') as unknown as shapes.ChimeInvite[];
  }

}

export class ChimeResponsesListAccounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListAccountsRequest) {
  }

  public get accounts(): shapes.ChimeAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccounts',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAccounts.Accounts'),
        outputPath: 'Accounts',
        parameters: {
          Name: this.__input.name,
          UserEmail: this.__input.userEmail,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccounts.Accounts', props);
    return resource.getResponseField('Accounts') as unknown as shapes.ChimeAccount[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccounts',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAccounts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Name: this.__input.name,
          UserEmail: this.__input.userEmail,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListAppInstanceAdmins {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListAppInstanceAdminsRequest) {
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceAdmins',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAppInstanceAdmins.AppInstanceArn'),
        outputPath: 'AppInstanceArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceAdmins.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

  public get appInstanceAdmins(): shapes.ChimeAppInstanceAdminSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceAdmins',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAppInstanceAdmins.AppInstanceAdmins'),
        outputPath: 'AppInstanceAdmins',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceAdmins.AppInstanceAdmins', props);
    return resource.getResponseField('AppInstanceAdmins') as unknown as shapes.ChimeAppInstanceAdminSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceAdmins',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAppInstanceAdmins.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceAdmins.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListAppInstanceUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListAppInstanceUsersRequest) {
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceUsers',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAppInstanceUsers.AppInstanceArn'),
        outputPath: 'AppInstanceArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceUsers.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

  public get appInstanceUsers(): shapes.ChimeAppInstanceUserSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceUsers',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAppInstanceUsers.AppInstanceUsers'),
        outputPath: 'AppInstanceUsers',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceUsers.AppInstanceUsers', props);
    return resource.getResponseField('AppInstanceUsers') as unknown as shapes.ChimeAppInstanceUserSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceUsers',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAppInstanceUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListAppInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListAppInstancesRequest) {
  }

  public get appInstances(): shapes.ChimeAppInstanceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstances',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAppInstances.AppInstances'),
        outputPath: 'AppInstances',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstances.AppInstances', props);
    return resource.getResponseField('AppInstances') as unknown as shapes.ChimeAppInstanceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstances',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAppInstances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListAttendeeTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListAttendeeTagsRequest) {
  }

  public get tags(): shapes.ChimeTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttendeeTags',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAttendeeTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          MeetingId: this.__input.meetingId,
          AttendeeId: this.__input.attendeeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttendeeTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ChimeTag[];
  }

}

export class ChimeResponsesListAttendees {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListAttendeesRequest) {
  }

  public get attendees(): shapes.ChimeAttendee[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAttendees.Attendees'),
        outputPath: 'Attendees',
        parameters: {
          MeetingId: this.__input.meetingId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttendees.Attendees', props);
    return resource.getResponseField('Attendees') as unknown as shapes.ChimeAttendee[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttendees',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListAttendees.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MeetingId: this.__input.meetingId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttendees.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListBots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListBotsRequest) {
  }

  public get bots(): shapes.ChimeBot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBots',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListBots.Bots'),
        outputPath: 'Bots',
        parameters: {
          AccountId: this.__input.accountId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBots.Bots', props);
    return resource.getResponseField('Bots') as unknown as shapes.ChimeBot[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBots',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListBots.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBots.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListChannelBans {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListChannelBansRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelBans',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelBans.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelBans.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelBans',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelBans.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelBans.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get channelBans(): shapes.ChimeChannelBanSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelBans',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelBans.ChannelBans'),
        outputPath: 'ChannelBans',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelBans.ChannelBans', props);
    return resource.getResponseField('ChannelBans') as unknown as shapes.ChimeChannelBanSummary[];
  }

}

export class ChimeResponsesListChannelMemberships {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListChannelMembershipsRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMemberships',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelMemberships.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMemberships.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get channelMemberships(): shapes.ChimeChannelMembershipSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMemberships',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelMemberships.ChannelMemberships'),
        outputPath: 'ChannelMemberships',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMemberships.ChannelMemberships', props);
    return resource.getResponseField('ChannelMemberships') as unknown as shapes.ChimeChannelMembershipSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMemberships',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelMemberships.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMemberships.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListChannelMembershipsForAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListChannelMembershipsForAppInstanceUserRequest) {
  }

  public get channelMemberships(): shapes.ChimeChannelMembershipForAppInstanceUserSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMembershipsForAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelMembershipsForAppInstanceUser.ChannelMemberships'),
        outputPath: 'ChannelMemberships',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMembershipsForAppInstanceUser.ChannelMemberships', props);
    return resource.getResponseField('ChannelMemberships') as unknown as shapes.ChimeChannelMembershipForAppInstanceUserSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMembershipsForAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelMembershipsForAppInstanceUser.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMembershipsForAppInstanceUser.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListChannelMessages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListChannelMessagesRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMessages',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelMessages.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          SortOrder: this.__input.sortOrder,
          NotBefore: this.__input.notBefore,
          NotAfter: this.__input.notAfter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMessages.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMessages',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelMessages.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChannelArn: this.__input.channelArn,
          SortOrder: this.__input.sortOrder,
          NotBefore: this.__input.notBefore,
          NotAfter: this.__input.notAfter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMessages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get channelMessages(): shapes.ChimeChannelMessageSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMessages',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelMessages.ChannelMessages'),
        outputPath: 'ChannelMessages',
        parameters: {
          ChannelArn: this.__input.channelArn,
          SortOrder: this.__input.sortOrder,
          NotBefore: this.__input.notBefore,
          NotAfter: this.__input.notAfter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMessages.ChannelMessages', props);
    return resource.getResponseField('ChannelMessages') as unknown as shapes.ChimeChannelMessageSummary[];
  }

}

export class ChimeResponsesListChannelModerators {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListChannelModeratorsRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelModerators',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelModerators.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelModerators.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelModerators',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelModerators.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelModerators.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get channelModerators(): shapes.ChimeChannelModeratorSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelModerators',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelModerators.ChannelModerators'),
        outputPath: 'ChannelModerators',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelModerators.ChannelModerators', props);
    return resource.getResponseField('ChannelModerators') as unknown as shapes.ChimeChannelModeratorSummary[];
  }

}

export class ChimeResponsesListChannels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListChannelsRequest) {
  }

  public get channels(): shapes.ChimeChannelSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannels',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannels.Channels'),
        outputPath: 'Channels',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          Privacy: this.__input.privacy,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannels.Channels', props);
    return resource.getResponseField('Channels') as unknown as shapes.ChimeChannelSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannels',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          Privacy: this.__input.privacy,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListChannelsModeratedByAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListChannelsModeratedByAppInstanceUserRequest) {
  }

  public get channels(): shapes.ChimeChannelModeratedByAppInstanceUserSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelsModeratedByAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelsModeratedByAppInstanceUser.Channels'),
        outputPath: 'Channels',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelsModeratedByAppInstanceUser.Channels', props);
    return resource.getResponseField('Channels') as unknown as shapes.ChimeChannelModeratedByAppInstanceUserSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelsModeratedByAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListChannelsModeratedByAppInstanceUser.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelsModeratedByAppInstanceUser.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListMeetingTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListMeetingTagsRequest) {
  }

  public get tags(): shapes.ChimeTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMeetingTags',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListMeetingTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          MeetingId: this.__input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMeetingTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ChimeTag[];
  }

}

export class ChimeResponsesListMeetings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListMeetingsRequest) {
  }

  public get meetings(): shapes.ChimeMeeting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMeetings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListMeetings.Meetings'),
        outputPath: 'Meetings',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMeetings.Meetings', props);
    return resource.getResponseField('Meetings') as unknown as shapes.ChimeMeeting[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMeetings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListMeetings.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMeetings.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListPhoneNumberOrders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListPhoneNumberOrdersRequest) {
  }

  public get phoneNumberOrders(): shapes.ChimePhoneNumberOrder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPhoneNumberOrders',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListPhoneNumberOrders.PhoneNumberOrders'),
        outputPath: 'PhoneNumberOrders',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPhoneNumberOrders.PhoneNumberOrders', props);
    return resource.getResponseField('PhoneNumberOrders') as unknown as shapes.ChimePhoneNumberOrder[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPhoneNumberOrders',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListPhoneNumberOrders.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPhoneNumberOrders.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListPhoneNumbers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListPhoneNumbersRequest) {
  }

  public get phoneNumbers(): shapes.ChimePhoneNumber[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPhoneNumbers',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListPhoneNumbers.PhoneNumbers'),
        outputPath: 'PhoneNumbers',
        parameters: {
          Status: this.__input.status,
          ProductType: this.__input.productType,
          FilterName: this.__input.filterName,
          FilterValue: this.__input.filterValue,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPhoneNumbers.PhoneNumbers', props);
    return resource.getResponseField('PhoneNumbers') as unknown as shapes.ChimePhoneNumber[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPhoneNumbers',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListPhoneNumbers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Status: this.__input.status,
          ProductType: this.__input.productType,
          FilterName: this.__input.filterName,
          FilterValue: this.__input.filterValue,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPhoneNumbers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListProxySessions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListProxySessionsRequest) {
  }

  public get proxySessions(): shapes.ChimeProxySession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProxySessions',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListProxySessions.ProxySessions'),
        outputPath: 'ProxySessions',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Status: this.__input.status,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProxySessions.ProxySessions', props);
    return resource.getResponseField('ProxySessions') as unknown as shapes.ChimeProxySession[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProxySessions',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListProxySessions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Status: this.__input.status,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProxySessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListRoomMemberships {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListRoomMembershipsRequest) {
  }

  public get roomMemberships(): shapes.ChimeRoomMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoomMemberships',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListRoomMemberships.RoomMemberships'),
        outputPath: 'RoomMemberships',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoomMemberships.RoomMemberships', props);
    return resource.getResponseField('RoomMemberships') as unknown as shapes.ChimeRoomMembership[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoomMemberships',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListRoomMemberships.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoomMemberships.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListRooms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListRoomsRequest) {
  }

  public get rooms(): shapes.ChimeRoom[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRooms',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListRooms.Rooms'),
        outputPath: 'Rooms',
        parameters: {
          AccountId: this.__input.accountId,
          MemberId: this.__input.memberId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRooms.Rooms', props);
    return resource.getResponseField('Rooms') as unknown as shapes.ChimeRoom[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRooms',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListRooms.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          MemberId: this.__input.memberId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRooms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListSipMediaApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListSipMediaApplicationsRequest) {
  }

  public get sipMediaApplications(): shapes.ChimeSipMediaApplication[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSipMediaApplications',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListSipMediaApplications.SipMediaApplications'),
        outputPath: 'SipMediaApplications',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSipMediaApplications.SipMediaApplications', props);
    return resource.getResponseField('SipMediaApplications') as unknown as shapes.ChimeSipMediaApplication[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSipMediaApplications',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListSipMediaApplications.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSipMediaApplications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListSipRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListSipRulesRequest) {
  }

  public get sipRules(): shapes.ChimeSipRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSipRules',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListSipRules.SipRules'),
        outputPath: 'SipRules',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSipRules.SipRules', props);
    return resource.getResponseField('SipRules') as unknown as shapes.ChimeSipRule[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSipRules',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListSipRules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSipRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListTagsForResourceRequest) {
  }

  public get tags(): shapes.ChimeTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ChimeTag[];
  }

}

export class ChimeResponsesListUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListUsersRequest) {
  }

  public get users(): shapes.ChimeUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListUsers.Users'),
        outputPath: 'Users',
        parameters: {
          AccountId: this.__input.accountId,
          UserEmail: this.__input.userEmail,
          UserType: this.__input.userType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.ChimeUser[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          UserEmail: this.__input.userEmail,
          UserType: this.__input.userType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListVoiceConnectorGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListVoiceConnectorGroupsRequest) {
  }

  public get voiceConnectorGroups(): shapes.ChimeVoiceConnectorGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVoiceConnectorGroups',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListVoiceConnectorGroups.VoiceConnectorGroups'),
        outputPath: 'VoiceConnectorGroups',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVoiceConnectorGroups.VoiceConnectorGroups', props);
    return resource.getResponseField('VoiceConnectorGroups') as unknown as shapes.ChimeVoiceConnectorGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVoiceConnectorGroups',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListVoiceConnectorGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVoiceConnectorGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesListVoiceConnectorTerminationCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListVoiceConnectorTerminationCredentialsRequest) {
  }

  public get usernames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVoiceConnectorTerminationCredentials',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListVoiceConnectorTerminationCredentials.Usernames'),
        outputPath: 'Usernames',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVoiceConnectorTerminationCredentials.Usernames', props);
    return resource.getResponseField('Usernames') as unknown as string[];
  }

}

export class ChimeResponsesListVoiceConnectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeListVoiceConnectorsRequest) {
  }

  public get voiceConnectors(): shapes.ChimeVoiceConnector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVoiceConnectors',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListVoiceConnectors.VoiceConnectors'),
        outputPath: 'VoiceConnectors',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVoiceConnectors.VoiceConnectors', props);
    return resource.getResponseField('VoiceConnectors') as unknown as shapes.ChimeVoiceConnector[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVoiceConnectors',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ListVoiceConnectors.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVoiceConnectors.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeResponsesPutAppInstanceRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutAppInstanceRetentionSettingsRequest) {
  }

  public get appInstanceRetentionSettings(): ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings {
    return new ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings(this.__scope, this.__resources, this.__input);
  }

  public get initiateDeletionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppInstanceRetentionSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutAppInstanceRetentionSettings.InitiateDeletionTimestamp'),
        outputPath: 'InitiateDeletionTimestamp',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          AppInstanceRetentionSettings: {
            ChannelRetentionSettings: {
              RetentionDays: this.__input.appInstanceRetentionSettings.channelRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppInstanceRetentionSettings.InitiateDeletionTimestamp', props);
    return resource.getResponseField('InitiateDeletionTimestamp') as unknown as string;
  }

}

export class ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutAppInstanceRetentionSettingsRequest) {
  }

  public get channelRetentionSettings(): ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings {
    return new ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutAppInstanceRetentionSettingsRequest) {
  }

  public get retentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppInstanceRetentionSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutAppInstanceRetentionSettings.AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays'),
        outputPath: 'AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          AppInstanceRetentionSettings: {
            ChannelRetentionSettings: {
              RetentionDays: this.__input.appInstanceRetentionSettings.channelRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppInstanceRetentionSettings.AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays', props);
    return resource.getResponseField('AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeResponsesPutAppInstanceStreamingConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutAppInstanceStreamingConfigurationsRequest) {
  }

  public get appInstanceStreamingConfigurations(): shapes.ChimeAppInstanceStreamingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppInstanceStreamingConfigurations',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutAppInstanceStreamingConfigurations.AppInstanceStreamingConfigurations'),
        outputPath: 'AppInstanceStreamingConfigurations',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          AppInstanceStreamingConfigurations: this.__input.appInstanceStreamingConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppInstanceStreamingConfigurations.AppInstanceStreamingConfigurations', props);
    return resource.getResponseField('AppInstanceStreamingConfigurations') as unknown as shapes.ChimeAppInstanceStreamingConfiguration[];
  }

}

export class ChimeResponsesPutEventsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutEventsConfigurationRequest) {
  }

  public get eventsConfiguration(): ChimeResponsesPutEventsConfigurationEventsConfiguration {
    return new ChimeResponsesPutEventsConfigurationEventsConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesPutEventsConfigurationEventsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutEventsConfigurationRequest) {
  }

  public get botId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEventsConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutEventsConfiguration.EventsConfiguration.BotId'),
        outputPath: 'EventsConfiguration.BotId',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          OutboundEventsHTTPSEndpoint: this.__input.outboundEventsHttpsEndpoint,
          LambdaFunctionArn: this.__input.lambdaFunctionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEventsConfiguration.EventsConfiguration.BotId', props);
    return resource.getResponseField('EventsConfiguration.BotId') as unknown as string;
  }

  public get outboundEventsHttpsEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEventsConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutEventsConfiguration.EventsConfiguration.OutboundEventsHTTPSEndpoint'),
        outputPath: 'EventsConfiguration.OutboundEventsHTTPSEndpoint',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          OutboundEventsHTTPSEndpoint: this.__input.outboundEventsHttpsEndpoint,
          LambdaFunctionArn: this.__input.lambdaFunctionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEventsConfiguration.EventsConfiguration.OutboundEventsHTTPSEndpoint', props);
    return resource.getResponseField('EventsConfiguration.OutboundEventsHTTPSEndpoint') as unknown as string;
  }

  public get lambdaFunctionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEventsConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutEventsConfiguration.EventsConfiguration.LambdaFunctionArn'),
        outputPath: 'EventsConfiguration.LambdaFunctionArn',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          OutboundEventsHTTPSEndpoint: this.__input.outboundEventsHttpsEndpoint,
          LambdaFunctionArn: this.__input.lambdaFunctionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEventsConfiguration.EventsConfiguration.LambdaFunctionArn', props);
    return resource.getResponseField('EventsConfiguration.LambdaFunctionArn') as unknown as string;
  }

}

export class ChimeResponsesPutRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutRetentionSettingsRequest) {
  }

  public get retentionSettings(): ChimeResponsesPutRetentionSettingsRetentionSettings {
    return new ChimeResponsesPutRetentionSettingsRetentionSettings(this.__scope, this.__resources, this.__input);
  }

  public get initiateDeletionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRetentionSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutRetentionSettings.InitiateDeletionTimestamp'),
        outputPath: 'InitiateDeletionTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          RetentionSettings: {
            RoomRetentionSettings: {
              RetentionDays: this.__input.retentionSettings.roomRetentionSettings?.retentionDays,
            },
            ConversationRetentionSettings: {
              RetentionDays: this.__input.retentionSettings.conversationRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRetentionSettings.InitiateDeletionTimestamp', props);
    return resource.getResponseField('InitiateDeletionTimestamp') as unknown as string;
  }

}

export class ChimeResponsesPutRetentionSettingsRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutRetentionSettingsRequest) {
  }

  public get roomRetentionSettings(): ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings {
    return new ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings(this.__scope, this.__resources, this.__input);
  }

  public get conversationRetentionSettings(): ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings {
    return new ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutRetentionSettingsRequest) {
  }

  public get retentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRetentionSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutRetentionSettings.RetentionSettings.RoomRetentionSettings.RetentionDays'),
        outputPath: 'RetentionSettings.RoomRetentionSettings.RetentionDays',
        parameters: {
          AccountId: this.__input.accountId,
          RetentionSettings: {
            RoomRetentionSettings: {
              RetentionDays: this.__input.retentionSettings.roomRetentionSettings?.retentionDays,
            },
            ConversationRetentionSettings: {
              RetentionDays: this.__input.retentionSettings.conversationRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRetentionSettings.RetentionSettings.RoomRetentionSettings.RetentionDays', props);
    return resource.getResponseField('RetentionSettings.RoomRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutRetentionSettingsRequest) {
  }

  public get retentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRetentionSettings',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutRetentionSettings.RetentionSettings.ConversationRetentionSettings.RetentionDays'),
        outputPath: 'RetentionSettings.ConversationRetentionSettings.RetentionDays',
        parameters: {
          AccountId: this.__input.accountId,
          RetentionSettings: {
            RoomRetentionSettings: {
              RetentionDays: this.__input.retentionSettings.roomRetentionSettings?.retentionDays,
            },
            ConversationRetentionSettings: {
              RetentionDays: this.__input.retentionSettings.conversationRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRetentionSettings.RetentionSettings.ConversationRetentionSettings.RetentionDays', props);
    return resource.getResponseField('RetentionSettings.ConversationRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeResponsesPutSipMediaApplicationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutSipMediaApplicationLoggingConfigurationRequest) {
  }

  public get sipMediaApplicationLoggingConfiguration(): ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration {
    return new ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutSipMediaApplicationLoggingConfigurationRequest) {
  }

  public get enableSipMediaApplicationMessageLogs(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSipMediaApplicationLoggingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutSipMediaApplicationLoggingConfiguration.SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs'),
        outputPath: 'SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
          SipMediaApplicationLoggingConfiguration: {
            EnableSipMediaApplicationMessageLogs: this.__input.sipMediaApplicationLoggingConfiguration?.enableSipMediaApplicationMessageLogs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSipMediaApplicationLoggingConfiguration.SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs', props);
    return resource.getResponseField('SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs') as unknown as boolean;
  }

}

export class ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest) {
  }

  public get emergencyCallingConfiguration(): ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration {
    return new ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest) {
  }

  public get dnis(): shapes.ChimeDnisEmergencyCallingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorEmergencyCallingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorEmergencyCallingConfiguration.EmergencyCallingConfiguration.DNIS'),
        outputPath: 'EmergencyCallingConfiguration.DNIS',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          EmergencyCallingConfiguration: {
            DNIS: this.__input.emergencyCallingConfiguration.dnis,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorEmergencyCallingConfiguration.EmergencyCallingConfiguration.DNIS', props);
    return resource.getResponseField('EmergencyCallingConfiguration.DNIS') as unknown as shapes.ChimeDnisEmergencyCallingConfiguration[];
  }

}

export class ChimeResponsesPutVoiceConnectorLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorLoggingConfigurationRequest) {
  }

  public get loggingConfiguration(): ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration {
    return new ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorLoggingConfigurationRequest) {
  }

  public get enableSipLogs(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorLoggingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorLoggingConfiguration.LoggingConfiguration.EnableSIPLogs'),
        outputPath: 'LoggingConfiguration.EnableSIPLogs',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          LoggingConfiguration: {
            EnableSIPLogs: this.__input.loggingConfiguration.enableSipLogs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorLoggingConfiguration.LoggingConfiguration.EnableSIPLogs', props);
    return resource.getResponseField('LoggingConfiguration.EnableSIPLogs') as unknown as boolean;
  }

}

export class ChimeResponsesPutVoiceConnectorOrigination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorOriginationRequest) {
  }

  public get origination(): ChimeResponsesPutVoiceConnectorOriginationOrigination {
    return new ChimeResponsesPutVoiceConnectorOriginationOrigination(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesPutVoiceConnectorOriginationOrigination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorOriginationRequest) {
  }

  public get routes(): shapes.ChimeOriginationRoute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorOrigination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorOrigination.Origination.Routes'),
        outputPath: 'Origination.Routes',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Origination: {
            Routes: this.__input.origination.routes,
            Disabled: this.__input.origination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorOrigination.Origination.Routes', props);
    return resource.getResponseField('Origination.Routes') as unknown as shapes.ChimeOriginationRoute[];
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorOrigination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorOrigination.Origination.Disabled'),
        outputPath: 'Origination.Disabled',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Origination: {
            Routes: this.__input.origination.routes,
            Disabled: this.__input.origination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorOrigination.Origination.Disabled', props);
    return resource.getResponseField('Origination.Disabled') as unknown as boolean;
  }

}

export class ChimeResponsesPutVoiceConnectorProxy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorProxyRequest) {
  }

  public get proxy(): ChimeResponsesPutVoiceConnectorProxyProxy {
    return new ChimeResponsesPutVoiceConnectorProxyProxy(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesPutVoiceConnectorProxyProxy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorProxyRequest) {
  }

  public get defaultSessionExpiryMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorProxy',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorProxy.Proxy.DefaultSessionExpiryMinutes'),
        outputPath: 'Proxy.DefaultSessionExpiryMinutes',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          DefaultSessionExpiryMinutes: this.__input.defaultSessionExpiryMinutes,
          PhoneNumberPoolCountries: this.__input.phoneNumberPoolCountries,
          FallBackPhoneNumber: this.__input.fallBackPhoneNumber,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorProxy.Proxy.DefaultSessionExpiryMinutes', props);
    return resource.getResponseField('Proxy.DefaultSessionExpiryMinutes') as unknown as number;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorProxy',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorProxy.Proxy.Disabled'),
        outputPath: 'Proxy.Disabled',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          DefaultSessionExpiryMinutes: this.__input.defaultSessionExpiryMinutes,
          PhoneNumberPoolCountries: this.__input.phoneNumberPoolCountries,
          FallBackPhoneNumber: this.__input.fallBackPhoneNumber,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorProxy.Proxy.Disabled', props);
    return resource.getResponseField('Proxy.Disabled') as unknown as boolean;
  }

  public get fallBackPhoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorProxy',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorProxy.Proxy.FallBackPhoneNumber'),
        outputPath: 'Proxy.FallBackPhoneNumber',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          DefaultSessionExpiryMinutes: this.__input.defaultSessionExpiryMinutes,
          PhoneNumberPoolCountries: this.__input.phoneNumberPoolCountries,
          FallBackPhoneNumber: this.__input.fallBackPhoneNumber,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorProxy.Proxy.FallBackPhoneNumber', props);
    return resource.getResponseField('Proxy.FallBackPhoneNumber') as unknown as string;
  }

  public get phoneNumberCountries(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorProxy',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorProxy.Proxy.PhoneNumberCountries'),
        outputPath: 'Proxy.PhoneNumberCountries',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          DefaultSessionExpiryMinutes: this.__input.defaultSessionExpiryMinutes,
          PhoneNumberPoolCountries: this.__input.phoneNumberPoolCountries,
          FallBackPhoneNumber: this.__input.fallBackPhoneNumber,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorProxy.Proxy.PhoneNumberCountries', props);
    return resource.getResponseField('Proxy.PhoneNumberCountries') as unknown as string[];
  }

}

export class ChimeResponsesPutVoiceConnectorStreamingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorStreamingConfigurationRequest) {
  }

  public get streamingConfiguration(): ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration {
    return new ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorStreamingConfigurationRequest) {
  }

  public get dataRetentionInHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorStreamingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorStreamingConfiguration.StreamingConfiguration.DataRetentionInHours'),
        outputPath: 'StreamingConfiguration.DataRetentionInHours',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          StreamingConfiguration: {
            DataRetentionInHours: this.__input.streamingConfiguration.dataRetentionInHours,
            Disabled: this.__input.streamingConfiguration.disabled,
            StreamingNotificationTargets: this.__input.streamingConfiguration.streamingNotificationTargets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorStreamingConfiguration.StreamingConfiguration.DataRetentionInHours', props);
    return resource.getResponseField('StreamingConfiguration.DataRetentionInHours') as unknown as number;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorStreamingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorStreamingConfiguration.StreamingConfiguration.Disabled'),
        outputPath: 'StreamingConfiguration.Disabled',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          StreamingConfiguration: {
            DataRetentionInHours: this.__input.streamingConfiguration.dataRetentionInHours,
            Disabled: this.__input.streamingConfiguration.disabled,
            StreamingNotificationTargets: this.__input.streamingConfiguration.streamingNotificationTargets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorStreamingConfiguration.StreamingConfiguration.Disabled', props);
    return resource.getResponseField('StreamingConfiguration.Disabled') as unknown as boolean;
  }

  public get streamingNotificationTargets(): shapes.ChimeStreamingNotificationTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorStreamingConfiguration',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorStreamingConfiguration.StreamingConfiguration.StreamingNotificationTargets'),
        outputPath: 'StreamingConfiguration.StreamingNotificationTargets',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          StreamingConfiguration: {
            DataRetentionInHours: this.__input.streamingConfiguration.dataRetentionInHours,
            Disabled: this.__input.streamingConfiguration.disabled,
            StreamingNotificationTargets: this.__input.streamingConfiguration.streamingNotificationTargets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorStreamingConfiguration.StreamingConfiguration.StreamingNotificationTargets', props);
    return resource.getResponseField('StreamingConfiguration.StreamingNotificationTargets') as unknown as shapes.ChimeStreamingNotificationTarget[];
  }

}

export class ChimeResponsesPutVoiceConnectorTermination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorTerminationRequest) {
  }

  public get termination(): ChimeResponsesPutVoiceConnectorTerminationTermination {
    return new ChimeResponsesPutVoiceConnectorTerminationTermination(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesPutVoiceConnectorTerminationTermination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimePutVoiceConnectorTerminationRequest) {
  }

  public get cpsLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorTermination.Termination.CpsLimit'),
        outputPath: 'Termination.CpsLimit',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Termination: {
            CpsLimit: this.__input.termination.cpsLimit,
            DefaultPhoneNumber: this.__input.termination.defaultPhoneNumber,
            CallingRegions: this.__input.termination.callingRegions,
            CidrAllowedList: this.__input.termination.cidrAllowedList,
            Disabled: this.__input.termination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorTermination.Termination.CpsLimit', props);
    return resource.getResponseField('Termination.CpsLimit') as unknown as number;
  }

  public get defaultPhoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorTermination.Termination.DefaultPhoneNumber'),
        outputPath: 'Termination.DefaultPhoneNumber',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Termination: {
            CpsLimit: this.__input.termination.cpsLimit,
            DefaultPhoneNumber: this.__input.termination.defaultPhoneNumber,
            CallingRegions: this.__input.termination.callingRegions,
            CidrAllowedList: this.__input.termination.cidrAllowedList,
            Disabled: this.__input.termination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorTermination.Termination.DefaultPhoneNumber', props);
    return resource.getResponseField('Termination.DefaultPhoneNumber') as unknown as string;
  }

  public get callingRegions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorTermination.Termination.CallingRegions'),
        outputPath: 'Termination.CallingRegions',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Termination: {
            CpsLimit: this.__input.termination.cpsLimit,
            DefaultPhoneNumber: this.__input.termination.defaultPhoneNumber,
            CallingRegions: this.__input.termination.callingRegions,
            CidrAllowedList: this.__input.termination.cidrAllowedList,
            Disabled: this.__input.termination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorTermination.Termination.CallingRegions', props);
    return resource.getResponseField('Termination.CallingRegions') as unknown as string[];
  }

  public get cidrAllowedList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorTermination.Termination.CidrAllowedList'),
        outputPath: 'Termination.CidrAllowedList',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Termination: {
            CpsLimit: this.__input.termination.cpsLimit,
            DefaultPhoneNumber: this.__input.termination.defaultPhoneNumber,
            CallingRegions: this.__input.termination.callingRegions,
            CidrAllowedList: this.__input.termination.cidrAllowedList,
            Disabled: this.__input.termination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorTermination.Termination.CidrAllowedList', props);
    return resource.getResponseField('Termination.CidrAllowedList') as unknown as string[];
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putVoiceConnectorTermination',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.PutVoiceConnectorTermination.Termination.Disabled'),
        outputPath: 'Termination.Disabled',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Termination: {
            CpsLimit: this.__input.termination.cpsLimit,
            DefaultPhoneNumber: this.__input.termination.defaultPhoneNumber,
            CallingRegions: this.__input.termination.callingRegions,
            CidrAllowedList: this.__input.termination.cidrAllowedList,
            Disabled: this.__input.termination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutVoiceConnectorTermination.Termination.Disabled', props);
    return resource.getResponseField('Termination.Disabled') as unknown as boolean;
  }

}

export class ChimeResponsesRedactChannelMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeRedactChannelMessageRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'redactChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RedactChannelMessage.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RedactChannelMessage.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'redactChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RedactChannelMessage.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RedactChannelMessage.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class ChimeResponsesRegenerateSecurityToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeRegenerateSecurityTokenRequest) {
  }

  public get bot(): ChimeResponsesRegenerateSecurityTokenBot {
    return new ChimeResponsesRegenerateSecurityTokenBot(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesRegenerateSecurityTokenBot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeRegenerateSecurityTokenRequest) {
  }

  public get botId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'regenerateSecurityToken',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RegenerateSecurityToken.Bot.BotId'),
        outputPath: 'Bot.BotId',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegenerateSecurityToken.Bot.BotId', props);
    return resource.getResponseField('Bot.BotId') as unknown as string;
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'regenerateSecurityToken',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RegenerateSecurityToken.Bot.UserId'),
        outputPath: 'Bot.UserId',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegenerateSecurityToken.Bot.UserId', props);
    return resource.getResponseField('Bot.UserId') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'regenerateSecurityToken',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RegenerateSecurityToken.Bot.DisplayName'),
        outputPath: 'Bot.DisplayName',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegenerateSecurityToken.Bot.DisplayName', props);
    return resource.getResponseField('Bot.DisplayName') as unknown as string;
  }

  public get botType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'regenerateSecurityToken',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RegenerateSecurityToken.Bot.BotType'),
        outputPath: 'Bot.BotType',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegenerateSecurityToken.Bot.BotType', props);
    return resource.getResponseField('Bot.BotType') as unknown as string;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'regenerateSecurityToken',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RegenerateSecurityToken.Bot.Disabled'),
        outputPath: 'Bot.Disabled',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegenerateSecurityToken.Bot.Disabled', props);
    return resource.getResponseField('Bot.Disabled') as unknown as boolean;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'regenerateSecurityToken',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RegenerateSecurityToken.Bot.CreatedTimestamp'),
        outputPath: 'Bot.CreatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegenerateSecurityToken.Bot.CreatedTimestamp', props);
    return resource.getResponseField('Bot.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'regenerateSecurityToken',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RegenerateSecurityToken.Bot.UpdatedTimestamp'),
        outputPath: 'Bot.UpdatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegenerateSecurityToken.Bot.UpdatedTimestamp', props);
    return resource.getResponseField('Bot.UpdatedTimestamp') as unknown as string;
  }

  public get botEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'regenerateSecurityToken',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RegenerateSecurityToken.Bot.BotEmail'),
        outputPath: 'Bot.BotEmail',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegenerateSecurityToken.Bot.BotEmail', props);
    return resource.getResponseField('Bot.BotEmail') as unknown as string;
  }

  public get securityToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'regenerateSecurityToken',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RegenerateSecurityToken.Bot.SecurityToken'),
        outputPath: 'Bot.SecurityToken',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegenerateSecurityToken.Bot.SecurityToken', props);
    return resource.getResponseField('Bot.SecurityToken') as unknown as string;
  }

}

export class ChimeResponsesResetPersonalPin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeResetPersonalPinRequest) {
  }

  public get user(): ChimeResponsesResetPersonalPinUser {
    return new ChimeResponsesResetPersonalPinUser(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesResetPersonalPinUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeResetPersonalPinRequest) {
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.UserId'),
        outputPath: 'User.UserId',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.UserId', props);
    return resource.getResponseField('User.UserId') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.AccountId'),
        outputPath: 'User.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.AccountId', props);
    return resource.getResponseField('User.AccountId') as unknown as string;
  }

  public get primaryEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.PrimaryEmail'),
        outputPath: 'User.PrimaryEmail',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.PrimaryEmail', props);
    return resource.getResponseField('User.PrimaryEmail') as unknown as string;
  }

  public get primaryProvisionedNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.PrimaryProvisionedNumber'),
        outputPath: 'User.PrimaryProvisionedNumber',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.PrimaryProvisionedNumber', props);
    return resource.getResponseField('User.PrimaryProvisionedNumber') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.DisplayName'),
        outputPath: 'User.DisplayName',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.DisplayName', props);
    return resource.getResponseField('User.DisplayName') as unknown as string;
  }

  public get licenseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.LicenseType'),
        outputPath: 'User.LicenseType',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.LicenseType', props);
    return resource.getResponseField('User.LicenseType') as unknown as string;
  }

  public get userType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.UserType'),
        outputPath: 'User.UserType',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.UserType', props);
    return resource.getResponseField('User.UserType') as unknown as string;
  }

  public get userRegistrationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.UserRegistrationStatus'),
        outputPath: 'User.UserRegistrationStatus',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.UserRegistrationStatus', props);
    return resource.getResponseField('User.UserRegistrationStatus') as unknown as string;
  }

  public get userInvitationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.UserInvitationStatus'),
        outputPath: 'User.UserInvitationStatus',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.UserInvitationStatus', props);
    return resource.getResponseField('User.UserInvitationStatus') as unknown as string;
  }

  public get registeredOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.RegisteredOn'),
        outputPath: 'User.RegisteredOn',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.RegisteredOn', props);
    return resource.getResponseField('User.RegisteredOn') as unknown as string;
  }

  public get invitedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.InvitedOn'),
        outputPath: 'User.InvitedOn',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.InvitedOn', props);
    return resource.getResponseField('User.InvitedOn') as unknown as string;
  }

  public get alexaForBusinessMetadata(): ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata {
    return new ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata(this.__scope, this.__resources, this.__input);
  }

  public get personalPin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.PersonalPIN'),
        outputPath: 'User.PersonalPIN',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.PersonalPIN', props);
    return resource.getResponseField('User.PersonalPIN') as unknown as string;
  }

}

export class ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeResetPersonalPinRequest) {
  }

  public get isAlexaForBusinessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled'),
        outputPath: 'User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled') as unknown as boolean;
  }

  public get alexaForBusinessRoomArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPersonalPin',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.ResetPersonalPIN.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn'),
        outputPath: 'User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetPersonalPIN.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn') as unknown as string;
  }

}

export class ChimeResponsesRestorePhoneNumber {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeRestorePhoneNumberRequest) {
  }

  public get phoneNumber(): ChimeResponsesRestorePhoneNumberPhoneNumber {
    return new ChimeResponsesRestorePhoneNumberPhoneNumber(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesRestorePhoneNumberPhoneNumber {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeRestorePhoneNumberRequest) {
  }

  public get phoneNumberId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.PhoneNumberId'),
        outputPath: 'PhoneNumber.PhoneNumberId',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.PhoneNumberId', props);
    return resource.getResponseField('PhoneNumber.PhoneNumberId') as unknown as string;
  }

  public get e164PhoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.E164PhoneNumber'),
        outputPath: 'PhoneNumber.E164PhoneNumber',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.E164PhoneNumber', props);
    return resource.getResponseField('PhoneNumber.E164PhoneNumber') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.Type'),
        outputPath: 'PhoneNumber.Type',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.Type', props);
    return resource.getResponseField('PhoneNumber.Type') as unknown as string;
  }

  public get productType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.ProductType'),
        outputPath: 'PhoneNumber.ProductType',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.ProductType', props);
    return resource.getResponseField('PhoneNumber.ProductType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.Status'),
        outputPath: 'PhoneNumber.Status',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.Status', props);
    return resource.getResponseField('PhoneNumber.Status') as unknown as string;
  }

  public get capabilities(): ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities {
    return new ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities(this.__scope, this.__resources, this.__input);
  }

  public get associations(): shapes.ChimePhoneNumberAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.Associations'),
        outputPath: 'PhoneNumber.Associations',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.Associations', props);
    return resource.getResponseField('PhoneNumber.Associations') as unknown as shapes.ChimePhoneNumberAssociation[];
  }

  public get callingName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.CallingName'),
        outputPath: 'PhoneNumber.CallingName',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.CallingName', props);
    return resource.getResponseField('PhoneNumber.CallingName') as unknown as string;
  }

  public get callingNameStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.CallingNameStatus'),
        outputPath: 'PhoneNumber.CallingNameStatus',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.CallingNameStatus', props);
    return resource.getResponseField('PhoneNumber.CallingNameStatus') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.CreatedTimestamp'),
        outputPath: 'PhoneNumber.CreatedTimestamp',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.CreatedTimestamp', props);
    return resource.getResponseField('PhoneNumber.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.UpdatedTimestamp'),
        outputPath: 'PhoneNumber.UpdatedTimestamp',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.UpdatedTimestamp', props);
    return resource.getResponseField('PhoneNumber.UpdatedTimestamp') as unknown as string;
  }

  public get deletionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.DeletionTimestamp'),
        outputPath: 'PhoneNumber.DeletionTimestamp',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.DeletionTimestamp', props);
    return resource.getResponseField('PhoneNumber.DeletionTimestamp') as unknown as string;
  }

}

export class ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeRestorePhoneNumberRequest) {
  }

  public get inboundCall(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.Capabilities.InboundCall'),
        outputPath: 'PhoneNumber.Capabilities.InboundCall',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.Capabilities.InboundCall', props);
    return resource.getResponseField('PhoneNumber.Capabilities.InboundCall') as unknown as boolean;
  }

  public get outboundCall(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.Capabilities.OutboundCall'),
        outputPath: 'PhoneNumber.Capabilities.OutboundCall',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.Capabilities.OutboundCall', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundCall') as unknown as boolean;
  }

  public get inboundSms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.Capabilities.InboundSMS'),
        outputPath: 'PhoneNumber.Capabilities.InboundSMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.Capabilities.InboundSMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.InboundSMS') as unknown as boolean;
  }

  public get outboundSms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.Capabilities.OutboundSMS'),
        outputPath: 'PhoneNumber.Capabilities.OutboundSMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.Capabilities.OutboundSMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundSMS') as unknown as boolean;
  }

  public get inboundMms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.Capabilities.InboundMMS'),
        outputPath: 'PhoneNumber.Capabilities.InboundMMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.Capabilities.InboundMMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.InboundMMS') as unknown as boolean;
  }

  public get outboundMms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restorePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.RestorePhoneNumber.PhoneNumber.Capabilities.OutboundMMS'),
        outputPath: 'PhoneNumber.Capabilities.OutboundMMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestorePhoneNumber.PhoneNumber.Capabilities.OutboundMMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundMMS') as unknown as boolean;
  }

}

export class ChimeResponsesSearchAvailablePhoneNumbers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSearchAvailablePhoneNumbersRequest) {
  }

  public get e164PhoneNumbers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchAvailablePhoneNumbers',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.SearchAvailablePhoneNumbers.E164PhoneNumbers'),
        outputPath: 'E164PhoneNumbers',
        parameters: {
          AreaCode: this.__input.areaCode,
          City: this.__input.city,
          Country: this.__input.country,
          State: this.__input.state,
          TollFreePrefix: this.__input.tollFreePrefix,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchAvailablePhoneNumbers.E164PhoneNumbers', props);
    return resource.getResponseField('E164PhoneNumbers') as unknown as string[];
  }

}

export class ChimeResponsesSendChannelMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSendChannelMessageRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.SendChannelMessage.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Content: this.__input.content,
          Type: this.__input.type,
          Persistence: this.__input.persistence,
          Metadata: this.__input.metadata,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendChannelMessage.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.SendChannelMessage.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Content: this.__input.content,
          Type: this.__input.type,
          Persistence: this.__input.persistence,
          Metadata: this.__input.metadata,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendChannelMessage.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class ChimeResponsesUpdateAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateAccountRequest) {
  }

  public get account(): ChimeResponsesUpdateAccountAccount {
    return new ChimeResponsesUpdateAccountAccount(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateAccountAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateAccountRequest) {
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAccount.Account.AwsAccountId'),
        outputPath: 'Account.AwsAccountId',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.Account.AwsAccountId', props);
    return resource.getResponseField('Account.AwsAccountId') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAccount.Account.AccountId'),
        outputPath: 'Account.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.Account.AccountId', props);
    return resource.getResponseField('Account.AccountId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAccount.Account.Name'),
        outputPath: 'Account.Name',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.Account.Name', props);
    return resource.getResponseField('Account.Name') as unknown as string;
  }

  public get accountType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAccount.Account.AccountType'),
        outputPath: 'Account.AccountType',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.Account.AccountType', props);
    return resource.getResponseField('Account.AccountType') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAccount.Account.CreatedTimestamp'),
        outputPath: 'Account.CreatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.Account.CreatedTimestamp', props);
    return resource.getResponseField('Account.CreatedTimestamp') as unknown as string;
  }

  public get defaultLicense(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAccount.Account.DefaultLicense'),
        outputPath: 'Account.DefaultLicense',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.Account.DefaultLicense', props);
    return resource.getResponseField('Account.DefaultLicense') as unknown as string;
  }

  public get supportedLicenses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAccount.Account.SupportedLicenses'),
        outputPath: 'Account.SupportedLicenses',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.Account.SupportedLicenses', props);
    return resource.getResponseField('Account.SupportedLicenses') as unknown as string[];
  }

  public get signinDelegateGroups(): shapes.ChimeSigninDelegateGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAccount.Account.SigninDelegateGroups'),
        outputPath: 'Account.SigninDelegateGroups',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.Account.SigninDelegateGroups', props);
    return resource.getResponseField('Account.SigninDelegateGroups') as unknown as shapes.ChimeSigninDelegateGroup[];
  }

}

export class ChimeResponsesUpdateAppInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateAppInstanceRequest) {
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAppInstance',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAppInstance.AppInstanceArn'),
        outputPath: 'AppInstanceArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          Name: this.__input.name,
          Metadata: this.__input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAppInstance.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

}

export class ChimeResponsesUpdateAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateAppInstanceUserRequest) {
  }

  public get appInstanceUserArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAppInstanceUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateAppInstanceUser.AppInstanceUserArn'),
        outputPath: 'AppInstanceUserArn',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          Name: this.__input.name,
          Metadata: this.__input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAppInstanceUser.AppInstanceUserArn', props);
    return resource.getResponseField('AppInstanceUserArn') as unknown as string;
  }

}

export class ChimeResponsesUpdateBot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateBotRequest) {
  }

  public get bot(): ChimeResponsesUpdateBotBot {
    return new ChimeResponsesUpdateBotBot(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateBotBot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateBotRequest) {
  }

  public get botId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateBot.Bot.BotId'),
        outputPath: 'Bot.BotId',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBot.Bot.BotId', props);
    return resource.getResponseField('Bot.BotId') as unknown as string;
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateBot.Bot.UserId'),
        outputPath: 'Bot.UserId',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBot.Bot.UserId', props);
    return resource.getResponseField('Bot.UserId') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateBot.Bot.DisplayName'),
        outputPath: 'Bot.DisplayName',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBot.Bot.DisplayName', props);
    return resource.getResponseField('Bot.DisplayName') as unknown as string;
  }

  public get botType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateBot.Bot.BotType'),
        outputPath: 'Bot.BotType',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBot.Bot.BotType', props);
    return resource.getResponseField('Bot.BotType') as unknown as string;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateBot.Bot.Disabled'),
        outputPath: 'Bot.Disabled',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBot.Bot.Disabled', props);
    return resource.getResponseField('Bot.Disabled') as unknown as boolean;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateBot.Bot.CreatedTimestamp'),
        outputPath: 'Bot.CreatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBot.Bot.CreatedTimestamp', props);
    return resource.getResponseField('Bot.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateBot.Bot.UpdatedTimestamp'),
        outputPath: 'Bot.UpdatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBot.Bot.UpdatedTimestamp', props);
    return resource.getResponseField('Bot.UpdatedTimestamp') as unknown as string;
  }

  public get botEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateBot.Bot.BotEmail'),
        outputPath: 'Bot.BotEmail',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBot.Bot.BotEmail', props);
    return resource.getResponseField('Bot.BotEmail') as unknown as string;
  }

  public get securityToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBot',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateBot.Bot.SecurityToken'),
        outputPath: 'Bot.SecurityToken',
        parameters: {
          AccountId: this.__input.accountId,
          BotId: this.__input.botId,
          Disabled: this.__input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBot.Bot.SecurityToken', props);
    return resource.getResponseField('Bot.SecurityToken') as unknown as string;
  }

}

export class ChimeResponsesUpdateChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateChannelRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateChannel.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Name: this.__input.name,
          Mode: this.__input.mode,
          Metadata: this.__input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

}

export class ChimeResponsesUpdateChannelMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateChannelMessageRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateChannelMessage.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          Content: this.__input.content,
          Metadata: this.__input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannelMessage.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannelMessage',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateChannelMessage.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          Content: this.__input.content,
          Metadata: this.__input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannelMessage.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class ChimeResponsesUpdateChannelReadMarker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateChannelReadMarkerRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannelReadMarker',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateChannelReadMarker.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannelReadMarker.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

}

export class ChimeResponsesUpdatePhoneNumber {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdatePhoneNumberRequest) {
  }

  public get phoneNumber(): ChimeResponsesUpdatePhoneNumberPhoneNumber {
    return new ChimeResponsesUpdatePhoneNumberPhoneNumber(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdatePhoneNumberPhoneNumber {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdatePhoneNumberRequest) {
  }

  public get phoneNumberId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.PhoneNumberId'),
        outputPath: 'PhoneNumber.PhoneNumberId',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.PhoneNumberId', props);
    return resource.getResponseField('PhoneNumber.PhoneNumberId') as unknown as string;
  }

  public get e164PhoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.E164PhoneNumber'),
        outputPath: 'PhoneNumber.E164PhoneNumber',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.E164PhoneNumber', props);
    return resource.getResponseField('PhoneNumber.E164PhoneNumber') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.Type'),
        outputPath: 'PhoneNumber.Type',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.Type', props);
    return resource.getResponseField('PhoneNumber.Type') as unknown as string;
  }

  public get productType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.ProductType'),
        outputPath: 'PhoneNumber.ProductType',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.ProductType', props);
    return resource.getResponseField('PhoneNumber.ProductType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.Status'),
        outputPath: 'PhoneNumber.Status',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.Status', props);
    return resource.getResponseField('PhoneNumber.Status') as unknown as string;
  }

  public get capabilities(): ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities {
    return new ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities(this.__scope, this.__resources, this.__input);
  }

  public get associations(): shapes.ChimePhoneNumberAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.Associations'),
        outputPath: 'PhoneNumber.Associations',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.Associations', props);
    return resource.getResponseField('PhoneNumber.Associations') as unknown as shapes.ChimePhoneNumberAssociation[];
  }

  public get callingName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.CallingName'),
        outputPath: 'PhoneNumber.CallingName',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.CallingName', props);
    return resource.getResponseField('PhoneNumber.CallingName') as unknown as string;
  }

  public get callingNameStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.CallingNameStatus'),
        outputPath: 'PhoneNumber.CallingNameStatus',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.CallingNameStatus', props);
    return resource.getResponseField('PhoneNumber.CallingNameStatus') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.CreatedTimestamp'),
        outputPath: 'PhoneNumber.CreatedTimestamp',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.CreatedTimestamp', props);
    return resource.getResponseField('PhoneNumber.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.UpdatedTimestamp'),
        outputPath: 'PhoneNumber.UpdatedTimestamp',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.UpdatedTimestamp', props);
    return resource.getResponseField('PhoneNumber.UpdatedTimestamp') as unknown as string;
  }

  public get deletionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.DeletionTimestamp'),
        outputPath: 'PhoneNumber.DeletionTimestamp',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.DeletionTimestamp', props);
    return resource.getResponseField('PhoneNumber.DeletionTimestamp') as unknown as string;
  }

}

export class ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdatePhoneNumberRequest) {
  }

  public get inboundCall(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.Capabilities.InboundCall'),
        outputPath: 'PhoneNumber.Capabilities.InboundCall',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.Capabilities.InboundCall', props);
    return resource.getResponseField('PhoneNumber.Capabilities.InboundCall') as unknown as boolean;
  }

  public get outboundCall(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.Capabilities.OutboundCall'),
        outputPath: 'PhoneNumber.Capabilities.OutboundCall',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.Capabilities.OutboundCall', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundCall') as unknown as boolean;
  }

  public get inboundSms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.Capabilities.InboundSMS'),
        outputPath: 'PhoneNumber.Capabilities.InboundSMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.Capabilities.InboundSMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.InboundSMS') as unknown as boolean;
  }

  public get outboundSms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.Capabilities.OutboundSMS'),
        outputPath: 'PhoneNumber.Capabilities.OutboundSMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.Capabilities.OutboundSMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundSMS') as unknown as boolean;
  }

  public get inboundMms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.Capabilities.InboundMMS'),
        outputPath: 'PhoneNumber.Capabilities.InboundMMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.Capabilities.InboundMMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.InboundMMS') as unknown as boolean;
  }

  public get outboundMms(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePhoneNumber',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdatePhoneNumber.PhoneNumber.Capabilities.OutboundMMS'),
        outputPath: 'PhoneNumber.Capabilities.OutboundMMS',
        parameters: {
          PhoneNumberId: this.__input.phoneNumberId,
          ProductType: this.__input.productType,
          CallingName: this.__input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePhoneNumber.PhoneNumber.Capabilities.OutboundMMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundMMS') as unknown as boolean;
  }

}

export class ChimeResponsesUpdateProxySession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateProxySessionRequest) {
  }

  public get proxySession(): ChimeResponsesUpdateProxySessionProxySession {
    return new ChimeResponsesUpdateProxySessionProxySession(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateProxySessionProxySession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateProxySessionRequest) {
  }

  public get voiceConnectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.VoiceConnectorId'),
        outputPath: 'ProxySession.VoiceConnectorId',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.VoiceConnectorId', props);
    return resource.getResponseField('ProxySession.VoiceConnectorId') as unknown as string;
  }

  public get proxySessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.ProxySessionId'),
        outputPath: 'ProxySession.ProxySessionId',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.ProxySessionId', props);
    return resource.getResponseField('ProxySession.ProxySessionId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.Name'),
        outputPath: 'ProxySession.Name',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.Name', props);
    return resource.getResponseField('ProxySession.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.Status'),
        outputPath: 'ProxySession.Status',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.Status', props);
    return resource.getResponseField('ProxySession.Status') as unknown as string;
  }

  public get expiryMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.ExpiryMinutes'),
        outputPath: 'ProxySession.ExpiryMinutes',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.ExpiryMinutes', props);
    return resource.getResponseField('ProxySession.ExpiryMinutes') as unknown as number;
  }

  public get capabilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.Capabilities'),
        outputPath: 'ProxySession.Capabilities',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.Capabilities', props);
    return resource.getResponseField('ProxySession.Capabilities') as unknown as string[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.CreatedTimestamp'),
        outputPath: 'ProxySession.CreatedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.CreatedTimestamp', props);
    return resource.getResponseField('ProxySession.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.UpdatedTimestamp'),
        outputPath: 'ProxySession.UpdatedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.UpdatedTimestamp', props);
    return resource.getResponseField('ProxySession.UpdatedTimestamp') as unknown as string;
  }

  public get endedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.EndedTimestamp'),
        outputPath: 'ProxySession.EndedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.EndedTimestamp', props);
    return resource.getResponseField('ProxySession.EndedTimestamp') as unknown as string;
  }

  public get participants(): shapes.ChimeParticipant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.Participants'),
        outputPath: 'ProxySession.Participants',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.Participants', props);
    return resource.getResponseField('ProxySession.Participants') as unknown as shapes.ChimeParticipant[];
  }

  public get numberSelectionBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.NumberSelectionBehavior'),
        outputPath: 'ProxySession.NumberSelectionBehavior',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.NumberSelectionBehavior', props);
    return resource.getResponseField('ProxySession.NumberSelectionBehavior') as unknown as string;
  }

  public get geoMatchLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.GeoMatchLevel'),
        outputPath: 'ProxySession.GeoMatchLevel',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.GeoMatchLevel', props);
    return resource.getResponseField('ProxySession.GeoMatchLevel') as unknown as string;
  }

  public get geoMatchParams(): ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams {
    return new ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateProxySessionRequest) {
  }

  public get country(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.GeoMatchParams.Country'),
        outputPath: 'ProxySession.GeoMatchParams.Country',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.GeoMatchParams.Country', props);
    return resource.getResponseField('ProxySession.GeoMatchParams.Country') as unknown as string;
  }

  public get areaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProxySession',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateProxySession.ProxySession.GeoMatchParams.AreaCode'),
        outputPath: 'ProxySession.GeoMatchParams.AreaCode',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          ProxySessionId: this.__input.proxySessionId,
          Capabilities: this.__input.capabilities,
          ExpiryMinutes: this.__input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProxySession.ProxySession.GeoMatchParams.AreaCode', props);
    return resource.getResponseField('ProxySession.GeoMatchParams.AreaCode') as unknown as string;
  }

}

export class ChimeResponsesUpdateRoom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateRoomRequest) {
  }

  public get room(): ChimeResponsesUpdateRoomRoom {
    return new ChimeResponsesUpdateRoomRoom(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateRoomRoom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateRoomRequest) {
  }

  public get roomId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoom.Room.RoomId'),
        outputPath: 'Room.RoomId',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoom.Room.RoomId', props);
    return resource.getResponseField('Room.RoomId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoom.Room.Name'),
        outputPath: 'Room.Name',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoom.Room.Name', props);
    return resource.getResponseField('Room.Name') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoom.Room.AccountId'),
        outputPath: 'Room.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoom.Room.AccountId', props);
    return resource.getResponseField('Room.AccountId') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoom.Room.CreatedBy'),
        outputPath: 'Room.CreatedBy',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoom.Room.CreatedBy', props);
    return resource.getResponseField('Room.CreatedBy') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoom.Room.CreatedTimestamp'),
        outputPath: 'Room.CreatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoom.Room.CreatedTimestamp', props);
    return resource.getResponseField('Room.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoom',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoom.Room.UpdatedTimestamp'),
        outputPath: 'Room.UpdatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoom.Room.UpdatedTimestamp', props);
    return resource.getResponseField('Room.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesUpdateRoomMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateRoomMembershipRequest) {
  }

  public get roomMembership(): ChimeResponsesUpdateRoomMembershipRoomMembership {
    return new ChimeResponsesUpdateRoomMembershipRoomMembership(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateRoomMembershipRoomMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateRoomMembershipRequest) {
  }

  public get roomId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoomMembership.RoomMembership.RoomId'),
        outputPath: 'RoomMembership.RoomId',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoomMembership.RoomMembership.RoomId', props);
    return resource.getResponseField('RoomMembership.RoomId') as unknown as string;
  }

  public get member(): ChimeResponsesUpdateRoomMembershipRoomMembershipMember {
    return new ChimeResponsesUpdateRoomMembershipRoomMembershipMember(this.__scope, this.__resources, this.__input);
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoomMembership.RoomMembership.Role'),
        outputPath: 'RoomMembership.Role',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoomMembership.RoomMembership.Role', props);
    return resource.getResponseField('RoomMembership.Role') as unknown as string;
  }

  public get invitedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoomMembership.RoomMembership.InvitedBy'),
        outputPath: 'RoomMembership.InvitedBy',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoomMembership.RoomMembership.InvitedBy', props);
    return resource.getResponseField('RoomMembership.InvitedBy') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoomMembership.RoomMembership.UpdatedTimestamp'),
        outputPath: 'RoomMembership.UpdatedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoomMembership.RoomMembership.UpdatedTimestamp', props);
    return resource.getResponseField('RoomMembership.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesUpdateRoomMembershipRoomMembershipMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateRoomMembershipRequest) {
  }

  public get memberId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoomMembership.RoomMembership.Member.MemberId'),
        outputPath: 'RoomMembership.Member.MemberId',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoomMembership.RoomMembership.Member.MemberId', props);
    return resource.getResponseField('RoomMembership.Member.MemberId') as unknown as string;
  }

  public get memberType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoomMembership.RoomMembership.Member.MemberType'),
        outputPath: 'RoomMembership.Member.MemberType',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoomMembership.RoomMembership.Member.MemberType', props);
    return resource.getResponseField('RoomMembership.Member.MemberType') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoomMembership.RoomMembership.Member.Email'),
        outputPath: 'RoomMembership.Member.Email',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoomMembership.RoomMembership.Member.Email', props);
    return resource.getResponseField('RoomMembership.Member.Email') as unknown as string;
  }

  public get fullName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoomMembership.RoomMembership.Member.FullName'),
        outputPath: 'RoomMembership.Member.FullName',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoomMembership.RoomMembership.Member.FullName', props);
    return resource.getResponseField('RoomMembership.Member.FullName') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoomMembership',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateRoomMembership.RoomMembership.Member.AccountId'),
        outputPath: 'RoomMembership.Member.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          RoomId: this.__input.roomId,
          MemberId: this.__input.memberId,
          Role: this.__input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoomMembership.RoomMembership.Member.AccountId', props);
    return resource.getResponseField('RoomMembership.Member.AccountId') as unknown as string;
  }

}

export class ChimeResponsesUpdateSipMediaApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateSipMediaApplicationRequest) {
  }

  public get sipMediaApplication(): ChimeResponsesUpdateSipMediaApplicationSipMediaApplication {
    return new ChimeResponsesUpdateSipMediaApplicationSipMediaApplication(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateSipMediaApplicationSipMediaApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateSipMediaApplicationRequest) {
  }

  public get sipMediaApplicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipMediaApplication.SipMediaApplication.SipMediaApplicationId'),
        outputPath: 'SipMediaApplication.SipMediaApplicationId',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipMediaApplication.SipMediaApplication.SipMediaApplicationId', props);
    return resource.getResponseField('SipMediaApplication.SipMediaApplicationId') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipMediaApplication.SipMediaApplication.AwsRegion'),
        outputPath: 'SipMediaApplication.AwsRegion',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipMediaApplication.SipMediaApplication.AwsRegion', props);
    return resource.getResponseField('SipMediaApplication.AwsRegion') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipMediaApplication.SipMediaApplication.Name'),
        outputPath: 'SipMediaApplication.Name',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipMediaApplication.SipMediaApplication.Name', props);
    return resource.getResponseField('SipMediaApplication.Name') as unknown as string;
  }

  public get endpoints(): shapes.ChimeSipMediaApplicationEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipMediaApplication.SipMediaApplication.Endpoints'),
        outputPath: 'SipMediaApplication.Endpoints',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipMediaApplication.SipMediaApplication.Endpoints', props);
    return resource.getResponseField('SipMediaApplication.Endpoints') as unknown as shapes.ChimeSipMediaApplicationEndpoint[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipMediaApplication.SipMediaApplication.CreatedTimestamp'),
        outputPath: 'SipMediaApplication.CreatedTimestamp',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipMediaApplication.SipMediaApplication.CreatedTimestamp', props);
    return resource.getResponseField('SipMediaApplication.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipMediaApplication',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipMediaApplication.SipMediaApplication.UpdatedTimestamp'),
        outputPath: 'SipMediaApplication.UpdatedTimestamp',
        parameters: {
          SipMediaApplicationId: this.__input.sipMediaApplicationId,
          Name: this.__input.name,
          Endpoints: this.__input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipMediaApplication.SipMediaApplication.UpdatedTimestamp', props);
    return resource.getResponseField('SipMediaApplication.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesUpdateSipRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateSipRuleRequest) {
  }

  public get sipRule(): ChimeResponsesUpdateSipRuleSipRule {
    return new ChimeResponsesUpdateSipRuleSipRule(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateSipRuleSipRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateSipRuleRequest) {
  }

  public get sipRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipRule.SipRule.SipRuleId'),
        outputPath: 'SipRule.SipRuleId',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
          Name: this.__input.name,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipRule.SipRule.SipRuleId', props);
    return resource.getResponseField('SipRule.SipRuleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipRule.SipRule.Name'),
        outputPath: 'SipRule.Name',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
          Name: this.__input.name,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipRule.SipRule.Name', props);
    return resource.getResponseField('SipRule.Name') as unknown as string;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipRule.SipRule.Disabled'),
        outputPath: 'SipRule.Disabled',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
          Name: this.__input.name,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipRule.SipRule.Disabled', props);
    return resource.getResponseField('SipRule.Disabled') as unknown as boolean;
  }

  public get triggerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipRule.SipRule.TriggerType'),
        outputPath: 'SipRule.TriggerType',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
          Name: this.__input.name,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipRule.SipRule.TriggerType', props);
    return resource.getResponseField('SipRule.TriggerType') as unknown as string;
  }

  public get triggerValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipRule.SipRule.TriggerValue'),
        outputPath: 'SipRule.TriggerValue',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
          Name: this.__input.name,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipRule.SipRule.TriggerValue', props);
    return resource.getResponseField('SipRule.TriggerValue') as unknown as string;
  }

  public get targetApplications(): shapes.ChimeSipRuleTargetApplication[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipRule.SipRule.TargetApplications'),
        outputPath: 'SipRule.TargetApplications',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
          Name: this.__input.name,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipRule.SipRule.TargetApplications', props);
    return resource.getResponseField('SipRule.TargetApplications') as unknown as shapes.ChimeSipRuleTargetApplication[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipRule.SipRule.CreatedTimestamp'),
        outputPath: 'SipRule.CreatedTimestamp',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
          Name: this.__input.name,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipRule.SipRule.CreatedTimestamp', props);
    return resource.getResponseField('SipRule.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSipRule',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateSipRule.SipRule.UpdatedTimestamp'),
        outputPath: 'SipRule.UpdatedTimestamp',
        parameters: {
          SipRuleId: this.__input.sipRuleId,
          Name: this.__input.name,
          Disabled: this.__input.disabled,
          TargetApplications: this.__input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSipRule.SipRule.UpdatedTimestamp', props);
    return resource.getResponseField('SipRule.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesUpdateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateUserRequest) {
  }

  public get user(): ChimeResponsesUpdateUserUser {
    return new ChimeResponsesUpdateUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateUserRequest) {
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.UserId'),
        outputPath: 'User.UserId',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.UserId', props);
    return resource.getResponseField('User.UserId') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.AccountId'),
        outputPath: 'User.AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.AccountId', props);
    return resource.getResponseField('User.AccountId') as unknown as string;
  }

  public get primaryEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.PrimaryEmail'),
        outputPath: 'User.PrimaryEmail',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.PrimaryEmail', props);
    return resource.getResponseField('User.PrimaryEmail') as unknown as string;
  }

  public get primaryProvisionedNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.PrimaryProvisionedNumber'),
        outputPath: 'User.PrimaryProvisionedNumber',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.PrimaryProvisionedNumber', props);
    return resource.getResponseField('User.PrimaryProvisionedNumber') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.DisplayName'),
        outputPath: 'User.DisplayName',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.DisplayName', props);
    return resource.getResponseField('User.DisplayName') as unknown as string;
  }

  public get licenseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.LicenseType'),
        outputPath: 'User.LicenseType',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.LicenseType', props);
    return resource.getResponseField('User.LicenseType') as unknown as string;
  }

  public get userType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.UserType'),
        outputPath: 'User.UserType',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.UserType', props);
    return resource.getResponseField('User.UserType') as unknown as string;
  }

  public get userRegistrationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.UserRegistrationStatus'),
        outputPath: 'User.UserRegistrationStatus',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.UserRegistrationStatus', props);
    return resource.getResponseField('User.UserRegistrationStatus') as unknown as string;
  }

  public get userInvitationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.UserInvitationStatus'),
        outputPath: 'User.UserInvitationStatus',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.UserInvitationStatus', props);
    return resource.getResponseField('User.UserInvitationStatus') as unknown as string;
  }

  public get registeredOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.RegisteredOn'),
        outputPath: 'User.RegisteredOn',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.RegisteredOn', props);
    return resource.getResponseField('User.RegisteredOn') as unknown as string;
  }

  public get invitedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.InvitedOn'),
        outputPath: 'User.InvitedOn',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.InvitedOn', props);
    return resource.getResponseField('User.InvitedOn') as unknown as string;
  }

  public get alexaForBusinessMetadata(): ChimeResponsesUpdateUserUserAlexaForBusinessMetadata {
    return new ChimeResponsesUpdateUserUserAlexaForBusinessMetadata(this.__scope, this.__resources, this.__input);
  }

  public get personalPin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.PersonalPIN'),
        outputPath: 'User.PersonalPIN',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.PersonalPIN', props);
    return resource.getResponseField('User.PersonalPIN') as unknown as string;
  }

}

export class ChimeResponsesUpdateUserUserAlexaForBusinessMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateUserRequest) {
  }

  public get isAlexaForBusinessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled'),
        outputPath: 'User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled') as unknown as boolean;
  }

  public get alexaForBusinessRoomArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateUser.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn'),
        outputPath: 'User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn',
        parameters: {
          AccountId: this.__input.accountId,
          UserId: this.__input.userId,
          LicenseType: this.__input.licenseType,
          UserType: this.__input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.__input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.__input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn') as unknown as string;
  }

}

export class ChimeResponsesUpdateVoiceConnector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateVoiceConnectorRequest) {
  }

  public get voiceConnector(): ChimeResponsesUpdateVoiceConnectorVoiceConnector {
    return new ChimeResponsesUpdateVoiceConnectorVoiceConnector(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateVoiceConnectorVoiceConnector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateVoiceConnectorRequest) {
  }

  public get voiceConnectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnector.VoiceConnector.VoiceConnectorId'),
        outputPath: 'VoiceConnector.VoiceConnectorId',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Name: this.__input.name,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnector.VoiceConnector.VoiceConnectorId', props);
    return resource.getResponseField('VoiceConnector.VoiceConnectorId') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnector.VoiceConnector.AwsRegion'),
        outputPath: 'VoiceConnector.AwsRegion',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Name: this.__input.name,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnector.VoiceConnector.AwsRegion', props);
    return resource.getResponseField('VoiceConnector.AwsRegion') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnector.VoiceConnector.Name'),
        outputPath: 'VoiceConnector.Name',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Name: this.__input.name,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnector.VoiceConnector.Name', props);
    return resource.getResponseField('VoiceConnector.Name') as unknown as string;
  }

  public get outboundHostName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnector.VoiceConnector.OutboundHostName'),
        outputPath: 'VoiceConnector.OutboundHostName',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Name: this.__input.name,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnector.VoiceConnector.OutboundHostName', props);
    return resource.getResponseField('VoiceConnector.OutboundHostName') as unknown as string;
  }

  public get requireEncryption(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnector.VoiceConnector.RequireEncryption'),
        outputPath: 'VoiceConnector.RequireEncryption',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Name: this.__input.name,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnector.VoiceConnector.RequireEncryption', props);
    return resource.getResponseField('VoiceConnector.RequireEncryption') as unknown as boolean;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnector.VoiceConnector.CreatedTimestamp'),
        outputPath: 'VoiceConnector.CreatedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Name: this.__input.name,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnector.VoiceConnector.CreatedTimestamp', props);
    return resource.getResponseField('VoiceConnector.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnector',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnector.VoiceConnector.UpdatedTimestamp'),
        outputPath: 'VoiceConnector.UpdatedTimestamp',
        parameters: {
          VoiceConnectorId: this.__input.voiceConnectorId,
          Name: this.__input.name,
          RequireEncryption: this.__input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnector.VoiceConnector.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnector.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeResponsesUpdateVoiceConnectorGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateVoiceConnectorGroupRequest) {
  }

  public get voiceConnectorGroup(): ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup {
    return new ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeUpdateVoiceConnectorGroupRequest) {
  }

  public get voiceConnectorGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorGroupId'),
        outputPath: 'VoiceConnectorGroup.VoiceConnectorGroupId',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
          Name: this.__input.name,
          VoiceConnectorItems: this.__input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorGroupId', props);
    return resource.getResponseField('VoiceConnectorGroup.VoiceConnectorGroupId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnectorGroup.VoiceConnectorGroup.Name'),
        outputPath: 'VoiceConnectorGroup.Name',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
          Name: this.__input.name,
          VoiceConnectorItems: this.__input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnectorGroup.VoiceConnectorGroup.Name', props);
    return resource.getResponseField('VoiceConnectorGroup.Name') as unknown as string;
  }

  public get voiceConnectorItems(): shapes.ChimeVoiceConnectorItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorItems'),
        outputPath: 'VoiceConnectorGroup.VoiceConnectorItems',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
          Name: this.__input.name,
          VoiceConnectorItems: this.__input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorItems', props);
    return resource.getResponseField('VoiceConnectorGroup.VoiceConnectorItems') as unknown as shapes.ChimeVoiceConnectorItem[];
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnectorGroup.VoiceConnectorGroup.CreatedTimestamp'),
        outputPath: 'VoiceConnectorGroup.CreatedTimestamp',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
          Name: this.__input.name,
          VoiceConnectorItems: this.__input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnectorGroup.VoiceConnectorGroup.CreatedTimestamp', props);
    return resource.getResponseField('VoiceConnectorGroup.CreatedTimestamp') as unknown as string;
  }

  public get updatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVoiceConnectorGroup',
        service: 'Chime',
        physicalResourceId: cr.PhysicalResourceId.of('Chime.UpdateVoiceConnectorGroup.VoiceConnectorGroup.UpdatedTimestamp'),
        outputPath: 'VoiceConnectorGroup.UpdatedTimestamp',
        parameters: {
          VoiceConnectorGroupId: this.__input.voiceConnectorGroupId,
          Name: this.__input.name,
          VoiceConnectorItems: this.__input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVoiceConnectorGroup.VoiceConnectorGroup.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnectorGroup.UpdatedTimestamp') as unknown as string;
  }

}

