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

  public associatePhoneNumbersWithVoiceConnector(input: shapes.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest): ChimeAssociatePhoneNumbersWithVoiceConnector {
    return new ChimeAssociatePhoneNumbersWithVoiceConnector(this, 'AssociatePhoneNumbersWithVoiceConnector', this.__resources, input);
  }

  public associatePhoneNumbersWithVoiceConnectorGroup(input: shapes.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest): ChimeAssociatePhoneNumbersWithVoiceConnectorGroup {
    return new ChimeAssociatePhoneNumbersWithVoiceConnectorGroup(this, 'AssociatePhoneNumbersWithVoiceConnectorGroup', this.__resources, input);
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

  public batchCreateAttendee(input: shapes.ChimeBatchCreateAttendeeRequest): ChimeBatchCreateAttendee {
    return new ChimeBatchCreateAttendee(this, 'BatchCreateAttendee', this.__resources, input);
  }

  public batchCreateRoomMembership(input: shapes.ChimeBatchCreateRoomMembershipRequest): ChimeBatchCreateRoomMembership {
    return new ChimeBatchCreateRoomMembership(this, 'BatchCreateRoomMembership', this.__resources, input);
  }

  public batchDeletePhoneNumber(input: shapes.ChimeBatchDeletePhoneNumberRequest): ChimeBatchDeletePhoneNumber {
    return new ChimeBatchDeletePhoneNumber(this, 'BatchDeletePhoneNumber', this.__resources, input);
  }

  public batchSuspendUser(input: shapes.ChimeBatchSuspendUserRequest): ChimeBatchSuspendUser {
    return new ChimeBatchSuspendUser(this, 'BatchSuspendUser', this.__resources, input);
  }

  public batchUnsuspendUser(input: shapes.ChimeBatchUnsuspendUserRequest): ChimeBatchUnsuspendUser {
    return new ChimeBatchUnsuspendUser(this, 'BatchUnsuspendUser', this.__resources, input);
  }

  public batchUpdatePhoneNumber(input: shapes.ChimeBatchUpdatePhoneNumberRequest): ChimeBatchUpdatePhoneNumber {
    return new ChimeBatchUpdatePhoneNumber(this, 'BatchUpdatePhoneNumber', this.__resources, input);
  }

  public batchUpdateUser(input: shapes.ChimeBatchUpdateUserRequest): ChimeBatchUpdateUser {
    return new ChimeBatchUpdateUser(this, 'BatchUpdateUser', this.__resources, input);
  }

  public createAccount(input: shapes.ChimeCreateAccountRequest): ChimeCreateAccount {
    return new ChimeCreateAccount(this, 'CreateAccount', this.__resources, input);
  }

  public createAppInstance(input: shapes.ChimeCreateAppInstanceRequest): ChimeCreateAppInstance {
    return new ChimeCreateAppInstance(this, 'CreateAppInstance', this.__resources, input);
  }

  public createAppInstanceAdmin(input: shapes.ChimeCreateAppInstanceAdminRequest): ChimeCreateAppInstanceAdmin {
    return new ChimeCreateAppInstanceAdmin(this, 'CreateAppInstanceAdmin', this.__resources, input);
  }

  public createAppInstanceUser(input: shapes.ChimeCreateAppInstanceUserRequest): ChimeCreateAppInstanceUser {
    return new ChimeCreateAppInstanceUser(this, 'CreateAppInstanceUser', this.__resources, input);
  }

  public createAttendee(input: shapes.ChimeCreateAttendeeRequest): ChimeCreateAttendee {
    return new ChimeCreateAttendee(this, 'CreateAttendee', this.__resources, input);
  }

  public createBot(input: shapes.ChimeCreateBotRequest): ChimeCreateBot {
    return new ChimeCreateBot(this, 'CreateBot', this.__resources, input);
  }

  public createChannel(input: shapes.ChimeCreateChannelRequest): ChimeCreateChannel {
    return new ChimeCreateChannel(this, 'CreateChannel', this.__resources, input);
  }

  public createChannelBan(input: shapes.ChimeCreateChannelBanRequest): ChimeCreateChannelBan {
    return new ChimeCreateChannelBan(this, 'CreateChannelBan', this.__resources, input);
  }

  public createChannelMembership(input: shapes.ChimeCreateChannelMembershipRequest): ChimeCreateChannelMembership {
    return new ChimeCreateChannelMembership(this, 'CreateChannelMembership', this.__resources, input);
  }

  public createChannelModerator(input: shapes.ChimeCreateChannelModeratorRequest): ChimeCreateChannelModerator {
    return new ChimeCreateChannelModerator(this, 'CreateChannelModerator', this.__resources, input);
  }

  public createMeeting(input: shapes.ChimeCreateMeetingRequest): ChimeCreateMeeting {
    return new ChimeCreateMeeting(this, 'CreateMeeting', this.__resources, input);
  }

  public createMeetingDialOut(input: shapes.ChimeCreateMeetingDialOutRequest): ChimeCreateMeetingDialOut {
    return new ChimeCreateMeetingDialOut(this, 'CreateMeetingDialOut', this.__resources, input);
  }

  public createMeetingWithAttendees(input: shapes.ChimeCreateMeetingWithAttendeesRequest): ChimeCreateMeetingWithAttendees {
    return new ChimeCreateMeetingWithAttendees(this, 'CreateMeetingWithAttendees', this.__resources, input);
  }

  public createPhoneNumberOrder(input: shapes.ChimeCreatePhoneNumberOrderRequest): ChimeCreatePhoneNumberOrder {
    return new ChimeCreatePhoneNumberOrder(this, 'CreatePhoneNumberOrder', this.__resources, input);
  }

  public createProxySession(input: shapes.ChimeCreateProxySessionRequest): ChimeCreateProxySession {
    return new ChimeCreateProxySession(this, 'CreateProxySession', this.__resources, input);
  }

  public createRoom(input: shapes.ChimeCreateRoomRequest): ChimeCreateRoom {
    return new ChimeCreateRoom(this, 'CreateRoom', this.__resources, input);
  }

  public createRoomMembership(input: shapes.ChimeCreateRoomMembershipRequest): ChimeCreateRoomMembership {
    return new ChimeCreateRoomMembership(this, 'CreateRoomMembership', this.__resources, input);
  }

  public createSipMediaApplication(input: shapes.ChimeCreateSipMediaApplicationRequest): ChimeCreateSipMediaApplication {
    return new ChimeCreateSipMediaApplication(this, 'CreateSipMediaApplication', this.__resources, input);
  }

  public createSipMediaApplicationCall(input: shapes.ChimeCreateSipMediaApplicationCallRequest): ChimeCreateSipMediaApplicationCall {
    return new ChimeCreateSipMediaApplicationCall(this, 'CreateSipMediaApplicationCall', this.__resources, input);
  }

  public createSipRule(input: shapes.ChimeCreateSipRuleRequest): ChimeCreateSipRule {
    return new ChimeCreateSipRule(this, 'CreateSipRule', this.__resources, input);
  }

  public createUser(input: shapes.ChimeCreateUserRequest): ChimeCreateUser {
    return new ChimeCreateUser(this, 'CreateUser', this.__resources, input);
  }

  public createVoiceConnector(input: shapes.ChimeCreateVoiceConnectorRequest): ChimeCreateVoiceConnector {
    return new ChimeCreateVoiceConnector(this, 'CreateVoiceConnector', this.__resources, input);
  }

  public createVoiceConnectorGroup(input: shapes.ChimeCreateVoiceConnectorGroupRequest): ChimeCreateVoiceConnectorGroup {
    return new ChimeCreateVoiceConnectorGroup(this, 'CreateVoiceConnectorGroup', this.__resources, input);
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

  public describeAppInstance(input: shapes.ChimeDescribeAppInstanceRequest): ChimeDescribeAppInstance {
    return new ChimeDescribeAppInstance(this, 'DescribeAppInstance', this.__resources, input);
  }

  public describeAppInstanceAdmin(input: shapes.ChimeDescribeAppInstanceAdminRequest): ChimeDescribeAppInstanceAdmin {
    return new ChimeDescribeAppInstanceAdmin(this, 'DescribeAppInstanceAdmin', this.__resources, input);
  }

  public describeAppInstanceUser(input: shapes.ChimeDescribeAppInstanceUserRequest): ChimeDescribeAppInstanceUser {
    return new ChimeDescribeAppInstanceUser(this, 'DescribeAppInstanceUser', this.__resources, input);
  }

  public describeChannel(input: shapes.ChimeDescribeChannelRequest): ChimeDescribeChannel {
    return new ChimeDescribeChannel(this, 'DescribeChannel', this.__resources, input);
  }

  public describeChannelBan(input: shapes.ChimeDescribeChannelBanRequest): ChimeDescribeChannelBan {
    return new ChimeDescribeChannelBan(this, 'DescribeChannelBan', this.__resources, input);
  }

  public describeChannelMembership(input: shapes.ChimeDescribeChannelMembershipRequest): ChimeDescribeChannelMembership {
    return new ChimeDescribeChannelMembership(this, 'DescribeChannelMembership', this.__resources, input);
  }

  public describeChannelMembershipForAppInstanceUser(input: shapes.ChimeDescribeChannelMembershipForAppInstanceUserRequest): ChimeDescribeChannelMembershipForAppInstanceUser {
    return new ChimeDescribeChannelMembershipForAppInstanceUser(this, 'DescribeChannelMembershipForAppInstanceUser', this.__resources, input);
  }

  public describeChannelModeratedByAppInstanceUser(input: shapes.ChimeDescribeChannelModeratedByAppInstanceUserRequest): ChimeDescribeChannelModeratedByAppInstanceUser {
    return new ChimeDescribeChannelModeratedByAppInstanceUser(this, 'DescribeChannelModeratedByAppInstanceUser', this.__resources, input);
  }

  public describeChannelModerator(input: shapes.ChimeDescribeChannelModeratorRequest): ChimeDescribeChannelModerator {
    return new ChimeDescribeChannelModerator(this, 'DescribeChannelModerator', this.__resources, input);
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

  public disassociatePhoneNumbersFromVoiceConnector(input: shapes.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest): ChimeDisassociatePhoneNumbersFromVoiceConnector {
    return new ChimeDisassociatePhoneNumbersFromVoiceConnector(this, 'DisassociatePhoneNumbersFromVoiceConnector', this.__resources, input);
  }

  public disassociatePhoneNumbersFromVoiceConnectorGroup(input: shapes.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest): ChimeDisassociatePhoneNumbersFromVoiceConnectorGroup {
    return new ChimeDisassociatePhoneNumbersFromVoiceConnectorGroup(this, 'DisassociatePhoneNumbersFromVoiceConnectorGroup', this.__resources, input);
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

  public fetchAccount(input: shapes.ChimeGetAccountRequest): ChimeFetchAccount {
    return new ChimeFetchAccount(this, 'FetchAccount', this.__resources, input);
  }

  public fetchAccountSettings(input: shapes.ChimeGetAccountSettingsRequest): ChimeFetchAccountSettings {
    return new ChimeFetchAccountSettings(this, 'FetchAccountSettings', this.__resources, input);
  }

  public fetchAppInstanceRetentionSettings(input: shapes.ChimeGetAppInstanceRetentionSettingsRequest): ChimeFetchAppInstanceRetentionSettings {
    return new ChimeFetchAppInstanceRetentionSettings(this, 'FetchAppInstanceRetentionSettings', this.__resources, input);
  }

  public fetchAppInstanceStreamingConfigurations(input: shapes.ChimeGetAppInstanceStreamingConfigurationsRequest): ChimeFetchAppInstanceStreamingConfigurations {
    return new ChimeFetchAppInstanceStreamingConfigurations(this, 'FetchAppInstanceStreamingConfigurations', this.__resources, input);
  }

  public fetchAttendee(input: shapes.ChimeGetAttendeeRequest): ChimeFetchAttendee {
    return new ChimeFetchAttendee(this, 'FetchAttendee', this.__resources, input);
  }

  public fetchBot(input: shapes.ChimeGetBotRequest): ChimeFetchBot {
    return new ChimeFetchBot(this, 'FetchBot', this.__resources, input);
  }

  public fetchChannelMessage(input: shapes.ChimeGetChannelMessageRequest): ChimeFetchChannelMessage {
    return new ChimeFetchChannelMessage(this, 'FetchChannelMessage', this.__resources, input);
  }

  public fetchEventsConfiguration(input: shapes.ChimeGetEventsConfigurationRequest): ChimeFetchEventsConfiguration {
    return new ChimeFetchEventsConfiguration(this, 'FetchEventsConfiguration', this.__resources, input);
  }

  public fetchGlobalSettings(): ChimeFetchGlobalSettings {
    return new ChimeFetchGlobalSettings(this, 'FetchGlobalSettings', this.__resources);
  }

  public fetchMeeting(input: shapes.ChimeGetMeetingRequest): ChimeFetchMeeting {
    return new ChimeFetchMeeting(this, 'FetchMeeting', this.__resources, input);
  }

  public fetchMessagingSessionEndpoint(): ChimeFetchMessagingSessionEndpoint {
    return new ChimeFetchMessagingSessionEndpoint(this, 'FetchMessagingSessionEndpoint', this.__resources);
  }

  public fetchPhoneNumber(input: shapes.ChimeGetPhoneNumberRequest): ChimeFetchPhoneNumber {
    return new ChimeFetchPhoneNumber(this, 'FetchPhoneNumber', this.__resources, input);
  }

  public fetchPhoneNumberOrder(input: shapes.ChimeGetPhoneNumberOrderRequest): ChimeFetchPhoneNumberOrder {
    return new ChimeFetchPhoneNumberOrder(this, 'FetchPhoneNumberOrder', this.__resources, input);
  }

  public fetchPhoneNumberSettings(): ChimeFetchPhoneNumberSettings {
    return new ChimeFetchPhoneNumberSettings(this, 'FetchPhoneNumberSettings', this.__resources);
  }

  public fetchProxySession(input: shapes.ChimeGetProxySessionRequest): ChimeFetchProxySession {
    return new ChimeFetchProxySession(this, 'FetchProxySession', this.__resources, input);
  }

  public fetchRetentionSettings(input: shapes.ChimeGetRetentionSettingsRequest): ChimeFetchRetentionSettings {
    return new ChimeFetchRetentionSettings(this, 'FetchRetentionSettings', this.__resources, input);
  }

  public fetchRoom(input: shapes.ChimeGetRoomRequest): ChimeFetchRoom {
    return new ChimeFetchRoom(this, 'FetchRoom', this.__resources, input);
  }

  public fetchSipMediaApplication(input: shapes.ChimeGetSipMediaApplicationRequest): ChimeFetchSipMediaApplication {
    return new ChimeFetchSipMediaApplication(this, 'FetchSipMediaApplication', this.__resources, input);
  }

  public fetchSipMediaApplicationLoggingConfiguration(input: shapes.ChimeGetSipMediaApplicationLoggingConfigurationRequest): ChimeFetchSipMediaApplicationLoggingConfiguration {
    return new ChimeFetchSipMediaApplicationLoggingConfiguration(this, 'FetchSipMediaApplicationLoggingConfiguration', this.__resources, input);
  }

  public fetchSipRule(input: shapes.ChimeGetSipRuleRequest): ChimeFetchSipRule {
    return new ChimeFetchSipRule(this, 'FetchSipRule', this.__resources, input);
  }

  public fetchUser(input: shapes.ChimeGetUserRequest): ChimeFetchUser {
    return new ChimeFetchUser(this, 'FetchUser', this.__resources, input);
  }

  public fetchUserSettings(input: shapes.ChimeGetUserSettingsRequest): ChimeFetchUserSettings {
    return new ChimeFetchUserSettings(this, 'FetchUserSettings', this.__resources, input);
  }

  public fetchVoiceConnector(input: shapes.ChimeGetVoiceConnectorRequest): ChimeFetchVoiceConnector {
    return new ChimeFetchVoiceConnector(this, 'FetchVoiceConnector', this.__resources, input);
  }

  public fetchVoiceConnectorEmergencyCallingConfiguration(input: shapes.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest): ChimeFetchVoiceConnectorEmergencyCallingConfiguration {
    return new ChimeFetchVoiceConnectorEmergencyCallingConfiguration(this, 'FetchVoiceConnectorEmergencyCallingConfiguration', this.__resources, input);
  }

  public fetchVoiceConnectorGroup(input: shapes.ChimeGetVoiceConnectorGroupRequest): ChimeFetchVoiceConnectorGroup {
    return new ChimeFetchVoiceConnectorGroup(this, 'FetchVoiceConnectorGroup', this.__resources, input);
  }

  public fetchVoiceConnectorLoggingConfiguration(input: shapes.ChimeGetVoiceConnectorLoggingConfigurationRequest): ChimeFetchVoiceConnectorLoggingConfiguration {
    return new ChimeFetchVoiceConnectorLoggingConfiguration(this, 'FetchVoiceConnectorLoggingConfiguration', this.__resources, input);
  }

  public fetchVoiceConnectorOrigination(input: shapes.ChimeGetVoiceConnectorOriginationRequest): ChimeFetchVoiceConnectorOrigination {
    return new ChimeFetchVoiceConnectorOrigination(this, 'FetchVoiceConnectorOrigination', this.__resources, input);
  }

  public fetchVoiceConnectorProxy(input: shapes.ChimeGetVoiceConnectorProxyRequest): ChimeFetchVoiceConnectorProxy {
    return new ChimeFetchVoiceConnectorProxy(this, 'FetchVoiceConnectorProxy', this.__resources, input);
  }

  public fetchVoiceConnectorStreamingConfiguration(input: shapes.ChimeGetVoiceConnectorStreamingConfigurationRequest): ChimeFetchVoiceConnectorStreamingConfiguration {
    return new ChimeFetchVoiceConnectorStreamingConfiguration(this, 'FetchVoiceConnectorStreamingConfiguration', this.__resources, input);
  }

  public fetchVoiceConnectorTermination(input: shapes.ChimeGetVoiceConnectorTerminationRequest): ChimeFetchVoiceConnectorTermination {
    return new ChimeFetchVoiceConnectorTermination(this, 'FetchVoiceConnectorTermination', this.__resources, input);
  }

  public fetchVoiceConnectorTerminationHealth(input: shapes.ChimeGetVoiceConnectorTerminationHealthRequest): ChimeFetchVoiceConnectorTerminationHealth {
    return new ChimeFetchVoiceConnectorTerminationHealth(this, 'FetchVoiceConnectorTerminationHealth', this.__resources, input);
  }

  public inviteUsers(input: shapes.ChimeInviteUsersRequest): ChimeInviteUsers {
    return new ChimeInviteUsers(this, 'InviteUsers', this.__resources, input);
  }

  public listAccounts(input: shapes.ChimeListAccountsRequest): ChimeListAccounts {
    return new ChimeListAccounts(this, 'ListAccounts', this.__resources, input);
  }

  public listAppInstanceAdmins(input: shapes.ChimeListAppInstanceAdminsRequest): ChimeListAppInstanceAdmins {
    return new ChimeListAppInstanceAdmins(this, 'ListAppInstanceAdmins', this.__resources, input);
  }

  public listAppInstanceUsers(input: shapes.ChimeListAppInstanceUsersRequest): ChimeListAppInstanceUsers {
    return new ChimeListAppInstanceUsers(this, 'ListAppInstanceUsers', this.__resources, input);
  }

  public listAppInstances(input: shapes.ChimeListAppInstancesRequest): ChimeListAppInstances {
    return new ChimeListAppInstances(this, 'ListAppInstances', this.__resources, input);
  }

  public listAttendeeTags(input: shapes.ChimeListAttendeeTagsRequest): ChimeListAttendeeTags {
    return new ChimeListAttendeeTags(this, 'ListAttendeeTags', this.__resources, input);
  }

  public listAttendees(input: shapes.ChimeListAttendeesRequest): ChimeListAttendees {
    return new ChimeListAttendees(this, 'ListAttendees', this.__resources, input);
  }

  public listBots(input: shapes.ChimeListBotsRequest): ChimeListBots {
    return new ChimeListBots(this, 'ListBots', this.__resources, input);
  }

  public listChannelBans(input: shapes.ChimeListChannelBansRequest): ChimeListChannelBans {
    return new ChimeListChannelBans(this, 'ListChannelBans', this.__resources, input);
  }

  public listChannelMemberships(input: shapes.ChimeListChannelMembershipsRequest): ChimeListChannelMemberships {
    return new ChimeListChannelMemberships(this, 'ListChannelMemberships', this.__resources, input);
  }

  public listChannelMembershipsForAppInstanceUser(input: shapes.ChimeListChannelMembershipsForAppInstanceUserRequest): ChimeListChannelMembershipsForAppInstanceUser {
    return new ChimeListChannelMembershipsForAppInstanceUser(this, 'ListChannelMembershipsForAppInstanceUser', this.__resources, input);
  }

  public listChannelMessages(input: shapes.ChimeListChannelMessagesRequest): ChimeListChannelMessages {
    return new ChimeListChannelMessages(this, 'ListChannelMessages', this.__resources, input);
  }

  public listChannelModerators(input: shapes.ChimeListChannelModeratorsRequest): ChimeListChannelModerators {
    return new ChimeListChannelModerators(this, 'ListChannelModerators', this.__resources, input);
  }

  public listChannels(input: shapes.ChimeListChannelsRequest): ChimeListChannels {
    return new ChimeListChannels(this, 'ListChannels', this.__resources, input);
  }

  public listChannelsModeratedByAppInstanceUser(input: shapes.ChimeListChannelsModeratedByAppInstanceUserRequest): ChimeListChannelsModeratedByAppInstanceUser {
    return new ChimeListChannelsModeratedByAppInstanceUser(this, 'ListChannelsModeratedByAppInstanceUser', this.__resources, input);
  }

  public listMeetingTags(input: shapes.ChimeListMeetingTagsRequest): ChimeListMeetingTags {
    return new ChimeListMeetingTags(this, 'ListMeetingTags', this.__resources, input);
  }

  public listMeetings(input: shapes.ChimeListMeetingsRequest): ChimeListMeetings {
    return new ChimeListMeetings(this, 'ListMeetings', this.__resources, input);
  }

  public listPhoneNumberOrders(input: shapes.ChimeListPhoneNumberOrdersRequest): ChimeListPhoneNumberOrders {
    return new ChimeListPhoneNumberOrders(this, 'ListPhoneNumberOrders', this.__resources, input);
  }

  public listPhoneNumbers(input: shapes.ChimeListPhoneNumbersRequest): ChimeListPhoneNumbers {
    return new ChimeListPhoneNumbers(this, 'ListPhoneNumbers', this.__resources, input);
  }

  public listProxySessions(input: shapes.ChimeListProxySessionsRequest): ChimeListProxySessions {
    return new ChimeListProxySessions(this, 'ListProxySessions', this.__resources, input);
  }

  public listRoomMemberships(input: shapes.ChimeListRoomMembershipsRequest): ChimeListRoomMemberships {
    return new ChimeListRoomMemberships(this, 'ListRoomMemberships', this.__resources, input);
  }

  public listRooms(input: shapes.ChimeListRoomsRequest): ChimeListRooms {
    return new ChimeListRooms(this, 'ListRooms', this.__resources, input);
  }

  public listSipMediaApplications(input: shapes.ChimeListSipMediaApplicationsRequest): ChimeListSipMediaApplications {
    return new ChimeListSipMediaApplications(this, 'ListSipMediaApplications', this.__resources, input);
  }

  public listSipRules(input: shapes.ChimeListSipRulesRequest): ChimeListSipRules {
    return new ChimeListSipRules(this, 'ListSipRules', this.__resources, input);
  }

  public listTagsForResource(input: shapes.ChimeListTagsForResourceRequest): ChimeListTagsForResource {
    return new ChimeListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listUsers(input: shapes.ChimeListUsersRequest): ChimeListUsers {
    return new ChimeListUsers(this, 'ListUsers', this.__resources, input);
  }

  public listVoiceConnectorGroups(input: shapes.ChimeListVoiceConnectorGroupsRequest): ChimeListVoiceConnectorGroups {
    return new ChimeListVoiceConnectorGroups(this, 'ListVoiceConnectorGroups', this.__resources, input);
  }

  public listVoiceConnectorTerminationCredentials(input: shapes.ChimeListVoiceConnectorTerminationCredentialsRequest): ChimeListVoiceConnectorTerminationCredentials {
    return new ChimeListVoiceConnectorTerminationCredentials(this, 'ListVoiceConnectorTerminationCredentials', this.__resources, input);
  }

  public listVoiceConnectors(input: shapes.ChimeListVoiceConnectorsRequest): ChimeListVoiceConnectors {
    return new ChimeListVoiceConnectors(this, 'ListVoiceConnectors', this.__resources, input);
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

  public putAppInstanceRetentionSettings(input: shapes.ChimePutAppInstanceRetentionSettingsRequest): ChimePutAppInstanceRetentionSettings {
    return new ChimePutAppInstanceRetentionSettings(this, 'PutAppInstanceRetentionSettings', this.__resources, input);
  }

  public putAppInstanceStreamingConfigurations(input: shapes.ChimePutAppInstanceStreamingConfigurationsRequest): ChimePutAppInstanceStreamingConfigurations {
    return new ChimePutAppInstanceStreamingConfigurations(this, 'PutAppInstanceStreamingConfigurations', this.__resources, input);
  }

  public putEventsConfiguration(input: shapes.ChimePutEventsConfigurationRequest): ChimePutEventsConfiguration {
    return new ChimePutEventsConfiguration(this, 'PutEventsConfiguration', this.__resources, input);
  }

  public putRetentionSettings(input: shapes.ChimePutRetentionSettingsRequest): ChimePutRetentionSettings {
    return new ChimePutRetentionSettings(this, 'PutRetentionSettings', this.__resources, input);
  }

  public putSipMediaApplicationLoggingConfiguration(input: shapes.ChimePutSipMediaApplicationLoggingConfigurationRequest): ChimePutSipMediaApplicationLoggingConfiguration {
    return new ChimePutSipMediaApplicationLoggingConfiguration(this, 'PutSipMediaApplicationLoggingConfiguration', this.__resources, input);
  }

  public putVoiceConnectorEmergencyCallingConfiguration(input: shapes.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest): ChimePutVoiceConnectorEmergencyCallingConfiguration {
    return new ChimePutVoiceConnectorEmergencyCallingConfiguration(this, 'PutVoiceConnectorEmergencyCallingConfiguration', this.__resources, input);
  }

  public putVoiceConnectorLoggingConfiguration(input: shapes.ChimePutVoiceConnectorLoggingConfigurationRequest): ChimePutVoiceConnectorLoggingConfiguration {
    return new ChimePutVoiceConnectorLoggingConfiguration(this, 'PutVoiceConnectorLoggingConfiguration', this.__resources, input);
  }

  public putVoiceConnectorOrigination(input: shapes.ChimePutVoiceConnectorOriginationRequest): ChimePutVoiceConnectorOrigination {
    return new ChimePutVoiceConnectorOrigination(this, 'PutVoiceConnectorOrigination', this.__resources, input);
  }

  public putVoiceConnectorProxy(input: shapes.ChimePutVoiceConnectorProxyRequest): ChimePutVoiceConnectorProxy {
    return new ChimePutVoiceConnectorProxy(this, 'PutVoiceConnectorProxy', this.__resources, input);
  }

  public putVoiceConnectorStreamingConfiguration(input: shapes.ChimePutVoiceConnectorStreamingConfigurationRequest): ChimePutVoiceConnectorStreamingConfiguration {
    return new ChimePutVoiceConnectorStreamingConfiguration(this, 'PutVoiceConnectorStreamingConfiguration', this.__resources, input);
  }

  public putVoiceConnectorTermination(input: shapes.ChimePutVoiceConnectorTerminationRequest): ChimePutVoiceConnectorTermination {
    return new ChimePutVoiceConnectorTermination(this, 'PutVoiceConnectorTermination', this.__resources, input);
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

  public redactChannelMessage(input: shapes.ChimeRedactChannelMessageRequest): ChimeRedactChannelMessage {
    return new ChimeRedactChannelMessage(this, 'RedactChannelMessage', this.__resources, input);
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

  public regenerateSecurityToken(input: shapes.ChimeRegenerateSecurityTokenRequest): ChimeRegenerateSecurityToken {
    return new ChimeRegenerateSecurityToken(this, 'RegenerateSecurityToken', this.__resources, input);
  }

  public resetPersonalPin(input: shapes.ChimeResetPersonalPinRequest): ChimeResetPersonalPin {
    return new ChimeResetPersonalPin(this, 'ResetPersonalPin', this.__resources, input);
  }

  public restorePhoneNumber(input: shapes.ChimeRestorePhoneNumberRequest): ChimeRestorePhoneNumber {
    return new ChimeRestorePhoneNumber(this, 'RestorePhoneNumber', this.__resources, input);
  }

  public searchAvailablePhoneNumbers(input: shapes.ChimeSearchAvailablePhoneNumbersRequest): ChimeSearchAvailablePhoneNumbers {
    return new ChimeSearchAvailablePhoneNumbers(this, 'SearchAvailablePhoneNumbers', this.__resources, input);
  }

  public sendChannelMessage(input: shapes.ChimeSendChannelMessageRequest): ChimeSendChannelMessage {
    return new ChimeSendChannelMessage(this, 'SendChannelMessage', this.__resources, input);
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

  public updateAccount(input: shapes.ChimeUpdateAccountRequest): ChimeUpdateAccount {
    return new ChimeUpdateAccount(this, 'UpdateAccount', this.__resources, input);
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

  public updateAppInstance(input: shapes.ChimeUpdateAppInstanceRequest): ChimeUpdateAppInstance {
    return new ChimeUpdateAppInstance(this, 'UpdateAppInstance', this.__resources, input);
  }

  public updateAppInstanceUser(input: shapes.ChimeUpdateAppInstanceUserRequest): ChimeUpdateAppInstanceUser {
    return new ChimeUpdateAppInstanceUser(this, 'UpdateAppInstanceUser', this.__resources, input);
  }

  public updateBot(input: shapes.ChimeUpdateBotRequest): ChimeUpdateBot {
    return new ChimeUpdateBot(this, 'UpdateBot', this.__resources, input);
  }

  public updateChannel(input: shapes.ChimeUpdateChannelRequest): ChimeUpdateChannel {
    return new ChimeUpdateChannel(this, 'UpdateChannel', this.__resources, input);
  }

  public updateChannelMessage(input: shapes.ChimeUpdateChannelMessageRequest): ChimeUpdateChannelMessage {
    return new ChimeUpdateChannelMessage(this, 'UpdateChannelMessage', this.__resources, input);
  }

  public updateChannelReadMarker(input: shapes.ChimeUpdateChannelReadMarkerRequest): ChimeUpdateChannelReadMarker {
    return new ChimeUpdateChannelReadMarker(this, 'UpdateChannelReadMarker', this.__resources, input);
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

  public updatePhoneNumber(input: shapes.ChimeUpdatePhoneNumberRequest): ChimeUpdatePhoneNumber {
    return new ChimeUpdatePhoneNumber(this, 'UpdatePhoneNumber', this.__resources, input);
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

  public updateProxySession(input: shapes.ChimeUpdateProxySessionRequest): ChimeUpdateProxySession {
    return new ChimeUpdateProxySession(this, 'UpdateProxySession', this.__resources, input);
  }

  public updateRoom(input: shapes.ChimeUpdateRoomRequest): ChimeUpdateRoom {
    return new ChimeUpdateRoom(this, 'UpdateRoom', this.__resources, input);
  }

  public updateRoomMembership(input: shapes.ChimeUpdateRoomMembershipRequest): ChimeUpdateRoomMembership {
    return new ChimeUpdateRoomMembership(this, 'UpdateRoomMembership', this.__resources, input);
  }

  public updateSipMediaApplication(input: shapes.ChimeUpdateSipMediaApplicationRequest): ChimeUpdateSipMediaApplication {
    return new ChimeUpdateSipMediaApplication(this, 'UpdateSipMediaApplication', this.__resources, input);
  }

  public updateSipRule(input: shapes.ChimeUpdateSipRuleRequest): ChimeUpdateSipRule {
    return new ChimeUpdateSipRule(this, 'UpdateSipRule', this.__resources, input);
  }

  public updateUser(input: shapes.ChimeUpdateUserRequest): ChimeUpdateUser {
    return new ChimeUpdateUser(this, 'UpdateUser', this.__resources, input);
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

  public updateVoiceConnector(input: shapes.ChimeUpdateVoiceConnectorRequest): ChimeUpdateVoiceConnector {
    return new ChimeUpdateVoiceConnector(this, 'UpdateVoiceConnector', this.__resources, input);
  }

  public updateVoiceConnectorGroup(input: shapes.ChimeUpdateVoiceConnectorGroupRequest): ChimeUpdateVoiceConnectorGroup {
    return new ChimeUpdateVoiceConnectorGroup(this, 'UpdateVoiceConnectorGroup', this.__resources, input);
  }

}

export class ChimeAssociatePhoneNumbersWithVoiceConnector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          E164PhoneNumbers: this.input.e164PhoneNumbers,
          ForceAssociate: this.input.forceAssociate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociatePhoneNumbersWithVoiceConnector.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeAssociatePhoneNumbersWithVoiceConnectorGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest) {
    super(scope, id);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
          E164PhoneNumbers: this.input.e164PhoneNumbers,
          ForceAssociate: this.input.forceAssociate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociatePhoneNumbersWithVoiceConnectorGroup.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeBatchCreateAttendee extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeBatchCreateAttendeeRequest) {
    super(scope, id);
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
          MeetingId: this.input.meetingId,
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchCreateAttendee.Attendees', props);
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
          MeetingId: this.input.meetingId,
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchCreateAttendee.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.ChimeCreateAttendeeError[];
  }

}

export class ChimeBatchCreateRoomMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeBatchCreateRoomMembershipRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MembershipItemList: this.input.membershipItemList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchCreateRoomMembership.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.ChimeMemberError[];
  }

}

export class ChimeBatchDeletePhoneNumber extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeBatchDeletePhoneNumberRequest) {
    super(scope, id);
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
          PhoneNumberIds: this.input.phoneNumberIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeletePhoneNumber.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeBatchSuspendUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeBatchSuspendUserRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserIdList: this.input.userIdList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchSuspendUser.UserErrors', props);
    return resource.getResponseField('UserErrors') as unknown as shapes.ChimeUserError[];
  }

}

export class ChimeBatchUnsuspendUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeBatchUnsuspendUserRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserIdList: this.input.userIdList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchUnsuspendUser.UserErrors', props);
    return resource.getResponseField('UserErrors') as unknown as shapes.ChimeUserError[];
  }

}

export class ChimeBatchUpdatePhoneNumber extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeBatchUpdatePhoneNumberRequest) {
    super(scope, id);
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
          UpdatePhoneNumberRequestItems: this.input.updatePhoneNumberRequestItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchUpdatePhoneNumber.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeBatchUpdateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeBatchUpdateUserRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UpdateUserRequestItems: this.input.updateUserRequestItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchUpdateUser.UserErrors', props);
    return resource.getResponseField('UserErrors') as unknown as shapes.ChimeUserError[];
  }

}

export class ChimeCreateAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateAccountRequest) {
    super(scope, id);
  }

  public get account(): ChimeCreateAccountAccount {
    return new ChimeCreateAccountAccount(this, 'Account', this.__resources, this.input);
  }

}

export class ChimeCreateAccountAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateAccountRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.Account.AwsAccountId', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.Account.AccountId', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.Account.Name', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.Account.AccountType', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.Account.CreatedTimestamp', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.Account.DefaultLicense', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.Account.SupportedLicenses', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.Account.SigninDelegateGroups', props);
    return resource.getResponseField('Account.SigninDelegateGroups') as unknown as shapes.ChimeSigninDelegateGroup[];
  }

}

export class ChimeCreateAppInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateAppInstanceRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Metadata: this.input.metadata,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAppInstance.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

}

export class ChimeCreateAppInstanceAdmin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateAppInstanceAdminRequest) {
    super(scope, id);
  }

  public get appInstanceAdmin(): ChimeCreateAppInstanceAdminAppInstanceAdmin {
    return new ChimeCreateAppInstanceAdminAppInstanceAdmin(this, 'AppInstanceAdmin', this.__resources, this.input);
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
          AppInstanceAdminArn: this.input.appInstanceAdminArn,
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAppInstanceAdmin.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

}

export class ChimeCreateAppInstanceAdminAppInstanceAdmin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateAppInstanceAdminRequest) {
    super(scope, id);
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
          AppInstanceAdminArn: this.input.appInstanceAdminArn,
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAppInstanceAdmin.AppInstanceAdmin.Arn', props);
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
          AppInstanceAdminArn: this.input.appInstanceAdminArn,
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAppInstanceAdmin.AppInstanceAdmin.Name', props);
    return resource.getResponseField('AppInstanceAdmin.Name') as unknown as string;
  }

}

export class ChimeCreateAppInstanceUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateAppInstanceUserRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
          AppInstanceUserId: this.input.appInstanceUserId,
          Name: this.input.name,
          Metadata: this.input.metadata,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAppInstanceUser.AppInstanceUserArn', props);
    return resource.getResponseField('AppInstanceUserArn') as unknown as string;
  }

}

export class ChimeCreateAttendee extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateAttendeeRequest) {
    super(scope, id);
  }

  public get attendee(): ChimeCreateAttendeeAttendee {
    return new ChimeCreateAttendeeAttendee(this, 'Attendee', this.__resources, this.input);
  }

}

export class ChimeCreateAttendeeAttendee extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateAttendeeRequest) {
    super(scope, id);
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
          MeetingId: this.input.meetingId,
          ExternalUserId: this.input.externalUserId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAttendee.Attendee.ExternalUserId', props);
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
          MeetingId: this.input.meetingId,
          ExternalUserId: this.input.externalUserId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAttendee.Attendee.AttendeeId', props);
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
          MeetingId: this.input.meetingId,
          ExternalUserId: this.input.externalUserId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAttendee.Attendee.JoinToken', props);
    return resource.getResponseField('Attendee.JoinToken') as unknown as string;
  }

}

export class ChimeCreateBot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateBotRequest) {
    super(scope, id);
  }

  public get bot(): ChimeCreateBotBot {
    return new ChimeCreateBotBot(this, 'Bot', this.__resources, this.input);
  }

}

export class ChimeCreateBotBot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateBotRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          DisplayName: this.input.displayName,
          Domain: this.input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBot.Bot.BotId', props);
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
          AccountId: this.input.accountId,
          DisplayName: this.input.displayName,
          Domain: this.input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBot.Bot.UserId', props);
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
          AccountId: this.input.accountId,
          DisplayName: this.input.displayName,
          Domain: this.input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBot.Bot.DisplayName', props);
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
          AccountId: this.input.accountId,
          DisplayName: this.input.displayName,
          Domain: this.input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBot.Bot.BotType', props);
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
          AccountId: this.input.accountId,
          DisplayName: this.input.displayName,
          Domain: this.input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBot.Bot.Disabled', props);
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
          AccountId: this.input.accountId,
          DisplayName: this.input.displayName,
          Domain: this.input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBot.Bot.CreatedTimestamp', props);
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
          AccountId: this.input.accountId,
          DisplayName: this.input.displayName,
          Domain: this.input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBot.Bot.UpdatedTimestamp', props);
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
          AccountId: this.input.accountId,
          DisplayName: this.input.displayName,
          Domain: this.input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBot.Bot.BotEmail', props);
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
          AccountId: this.input.accountId,
          DisplayName: this.input.displayName,
          Domain: this.input.domain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBot.Bot.SecurityToken', props);
    return resource.getResponseField('Bot.SecurityToken') as unknown as string;
  }

}

export class ChimeCreateChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateChannelRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
          Name: this.input.name,
          Mode: this.input.mode,
          Privacy: this.input.privacy,
          Metadata: this.input.metadata,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

}

export class ChimeCreateChannelBan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateChannelBanRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannelBan.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get member(): ChimeCreateChannelBanMember {
    return new ChimeCreateChannelBanMember(this, 'Member', this.__resources, this.input);
  }

}

export class ChimeCreateChannelBanMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateChannelBanRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannelBan.Member.Arn', props);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannelBan.Member.Name', props);
    return resource.getResponseField('Member.Name') as unknown as string;
  }

}

export class ChimeCreateChannelMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateChannelMembershipRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannelMembership.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get member(): ChimeCreateChannelMembershipMember {
    return new ChimeCreateChannelMembershipMember(this, 'Member', this.__resources, this.input);
  }

}

export class ChimeCreateChannelMembershipMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateChannelMembershipRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannelMembership.Member.Arn', props);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannelMembership.Member.Name', props);
    return resource.getResponseField('Member.Name') as unknown as string;
  }

}

export class ChimeCreateChannelModerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateChannelModeratorRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          ChannelModeratorArn: this.input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannelModerator.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get channelModerator(): ChimeCreateChannelModeratorChannelModerator {
    return new ChimeCreateChannelModeratorChannelModerator(this, 'ChannelModerator', this.__resources, this.input);
  }

}

export class ChimeCreateChannelModeratorChannelModerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateChannelModeratorRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          ChannelModeratorArn: this.input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannelModerator.ChannelModerator.Arn', props);
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
          ChannelArn: this.input.channelArn,
          ChannelModeratorArn: this.input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannelModerator.ChannelModerator.Name', props);
    return resource.getResponseField('ChannelModerator.Name') as unknown as string;
  }

}

export class ChimeCreateMeeting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateMeetingRequest) {
    super(scope, id);
  }

  public get meeting(): ChimeCreateMeetingMeeting {
    return new ChimeCreateMeetingMeeting(this, 'Meeting', this.__resources, this.input);
  }

}

export class ChimeCreateMeetingMeeting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateMeetingRequest) {
    super(scope, id);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeeting.Meeting.MeetingId', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeeting.Meeting.ExternalMeetingId', props);
    return resource.getResponseField('Meeting.ExternalMeetingId') as unknown as string;
  }

  public get mediaPlacement(): ChimeCreateMeetingMeetingMediaPlacement {
    return new ChimeCreateMeetingMeetingMediaPlacement(this, 'MediaPlacement', this.__resources, this.input);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeeting.Meeting.MediaRegion', props);
    return resource.getResponseField('Meeting.MediaRegion') as unknown as string;
  }

}

export class ChimeCreateMeetingMeetingMediaPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateMeetingRequest) {
    super(scope, id);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeeting.Meeting.MediaPlacement.AudioHostUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeeting.Meeting.MediaPlacement.AudioFallbackUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeeting.Meeting.MediaPlacement.ScreenDataUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeeting.Meeting.MediaPlacement.ScreenSharingUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeeting.Meeting.MediaPlacement.ScreenViewingUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeeting.Meeting.MediaPlacement.SignalingUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeeting.Meeting.MediaPlacement.TurnControlUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.TurnControlUrl') as unknown as string;
  }

}

export class ChimeCreateMeetingDialOut extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateMeetingDialOutRequest) {
    super(scope, id);
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
          MeetingId: this.input.meetingId,
          FromPhoneNumber: this.input.fromPhoneNumber,
          ToPhoneNumber: this.input.toPhoneNumber,
          JoinToken: this.input.joinToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingDialOut.TransactionId', props);
    return resource.getResponseField('TransactionId') as unknown as string;
  }

}

export class ChimeCreateMeetingWithAttendees extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateMeetingWithAttendeesRequest) {
    super(scope, id);
  }

  public get meeting(): ChimeCreateMeetingWithAttendeesMeeting {
    return new ChimeCreateMeetingWithAttendeesMeeting(this, 'Meeting', this.__resources, this.input);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Attendees', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.ChimeCreateAttendeeError[];
  }

}

export class ChimeCreateMeetingWithAttendeesMeeting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateMeetingWithAttendeesRequest) {
    super(scope, id);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Meeting.MeetingId', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Meeting.ExternalMeetingId', props);
    return resource.getResponseField('Meeting.ExternalMeetingId') as unknown as string;
  }

  public get mediaPlacement(): ChimeCreateMeetingWithAttendeesMeetingMediaPlacement {
    return new ChimeCreateMeetingWithAttendeesMeetingMediaPlacement(this, 'MediaPlacement', this.__resources, this.input);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Meeting.MediaRegion', props);
    return resource.getResponseField('Meeting.MediaRegion') as unknown as string;
  }

}

export class ChimeCreateMeetingWithAttendeesMeetingMediaPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateMeetingWithAttendeesRequest) {
    super(scope, id);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.AudioHostUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.AudioFallbackUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.ScreenDataUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.ScreenSharingUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.ScreenViewingUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.SignalingUrl', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          ExternalMeetingId: this.input.externalMeetingId,
          MeetingHostId: this.input.meetingHostId,
          MediaRegion: this.input.mediaRegion,
          Tags: this.input.tags,
          NotificationsConfiguration: {
            SnsTopicArn: this.input.notificationsConfiguration?.snsTopicArn,
            SqsQueueArn: this.input.notificationsConfiguration?.sqsQueueArn,
          },
          Attendees: this.input.attendees,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMeetingWithAttendees.Meeting.MediaPlacement.TurnControlUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.TurnControlUrl') as unknown as string;
  }

}

export class ChimeCreatePhoneNumberOrder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreatePhoneNumberOrderRequest) {
    super(scope, id);
  }

  public get phoneNumberOrder(): ChimeCreatePhoneNumberOrderPhoneNumberOrder {
    return new ChimeCreatePhoneNumberOrderPhoneNumberOrder(this, 'PhoneNumberOrder', this.__resources, this.input);
  }

}

export class ChimeCreatePhoneNumberOrderPhoneNumberOrder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreatePhoneNumberOrderRequest) {
    super(scope, id);
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
          ProductType: this.input.productType,
          E164PhoneNumbers: this.input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePhoneNumberOrder.PhoneNumberOrder.PhoneNumberOrderId', props);
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
          ProductType: this.input.productType,
          E164PhoneNumbers: this.input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePhoneNumberOrder.PhoneNumberOrder.ProductType', props);
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
          ProductType: this.input.productType,
          E164PhoneNumbers: this.input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePhoneNumberOrder.PhoneNumberOrder.Status', props);
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
          ProductType: this.input.productType,
          E164PhoneNumbers: this.input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePhoneNumberOrder.PhoneNumberOrder.OrderedPhoneNumbers', props);
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
          ProductType: this.input.productType,
          E164PhoneNumbers: this.input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePhoneNumberOrder.PhoneNumberOrder.CreatedTimestamp', props);
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
          ProductType: this.input.productType,
          E164PhoneNumbers: this.input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePhoneNumberOrder.PhoneNumberOrder.UpdatedTimestamp', props);
    return resource.getResponseField('PhoneNumberOrder.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeCreateProxySession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateProxySessionRequest) {
    super(scope, id);
  }

  public get proxySession(): ChimeCreateProxySessionProxySession {
    return new ChimeCreateProxySessionProxySession(this, 'ProxySession', this.__resources, this.input);
  }

}

export class ChimeCreateProxySessionProxySession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateProxySessionRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.VoiceConnectorId', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.ProxySessionId', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.Name', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.Status', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.ExpiryMinutes', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.Capabilities', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.CreatedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.UpdatedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.EndedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.Participants', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.NumberSelectionBehavior', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.GeoMatchLevel', props);
    return resource.getResponseField('ProxySession.GeoMatchLevel') as unknown as string;
  }

  public get geoMatchParams(): ChimeCreateProxySessionProxySessionGeoMatchParams {
    return new ChimeCreateProxySessionProxySessionGeoMatchParams(this, 'GeoMatchParams', this.__resources, this.input);
  }

}

export class ChimeCreateProxySessionProxySessionGeoMatchParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateProxySessionRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.GeoMatchParams.Country', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ParticipantPhoneNumbers: this.input.participantPhoneNumbers,
          Name: this.input.name,
          ExpiryMinutes: this.input.expiryMinutes,
          Capabilities: this.input.capabilities,
          NumberSelectionBehavior: this.input.numberSelectionBehavior,
          GeoMatchLevel: this.input.geoMatchLevel,
          GeoMatchParams: {
            Country: this.input.geoMatchParams?.country,
            AreaCode: this.input.geoMatchParams?.areaCode,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProxySession.ProxySession.GeoMatchParams.AreaCode', props);
    return resource.getResponseField('ProxySession.GeoMatchParams.AreaCode') as unknown as string;
  }

}

export class ChimeCreateRoom extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateRoomRequest) {
    super(scope, id);
  }

  public get room(): ChimeCreateRoomRoom {
    return new ChimeCreateRoomRoom(this, 'Room', this.__resources, this.input);
  }

}

export class ChimeCreateRoomRoom extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateRoomRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoom.Room.RoomId', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoom.Room.Name', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoom.Room.AccountId', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoom.Room.CreatedBy', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoom.Room.CreatedTimestamp', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoom.Room.UpdatedTimestamp', props);
    return resource.getResponseField('Room.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeCreateRoomMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateRoomMembershipRequest) {
    super(scope, id);
  }

  public get roomMembership(): ChimeCreateRoomMembershipRoomMembership {
    return new ChimeCreateRoomMembershipRoomMembership(this, 'RoomMembership', this.__resources, this.input);
  }

}

export class ChimeCreateRoomMembershipRoomMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateRoomMembershipRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoomMembership.RoomMembership.RoomId', props);
    return resource.getResponseField('RoomMembership.RoomId') as unknown as string;
  }

  public get member(): ChimeCreateRoomMembershipRoomMembershipMember {
    return new ChimeCreateRoomMembershipRoomMembershipMember(this, 'Member', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoomMembership.RoomMembership.Role', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoomMembership.RoomMembership.InvitedBy', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoomMembership.RoomMembership.UpdatedTimestamp', props);
    return resource.getResponseField('RoomMembership.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeCreateRoomMembershipRoomMembershipMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateRoomMembershipRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoomMembership.RoomMembership.Member.MemberId', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoomMembership.RoomMembership.Member.MemberType', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoomMembership.RoomMembership.Member.Email', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoomMembership.RoomMembership.Member.FullName', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoomMembership.RoomMembership.Member.AccountId', props);
    return resource.getResponseField('RoomMembership.Member.AccountId') as unknown as string;
  }

}

export class ChimeCreateSipMediaApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateSipMediaApplicationRequest) {
    super(scope, id);
  }

  public get sipMediaApplication(): ChimeCreateSipMediaApplicationSipMediaApplication {
    return new ChimeCreateSipMediaApplicationSipMediaApplication(this, 'SipMediaApplication', this.__resources, this.input);
  }

}

export class ChimeCreateSipMediaApplicationSipMediaApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateSipMediaApplicationRequest) {
    super(scope, id);
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
          AwsRegion: this.input.awsRegion,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipMediaApplication.SipMediaApplication.SipMediaApplicationId', props);
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
          AwsRegion: this.input.awsRegion,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipMediaApplication.SipMediaApplication.AwsRegion', props);
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
          AwsRegion: this.input.awsRegion,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipMediaApplication.SipMediaApplication.Name', props);
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
          AwsRegion: this.input.awsRegion,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipMediaApplication.SipMediaApplication.Endpoints', props);
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
          AwsRegion: this.input.awsRegion,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipMediaApplication.SipMediaApplication.CreatedTimestamp', props);
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
          AwsRegion: this.input.awsRegion,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipMediaApplication.SipMediaApplication.UpdatedTimestamp', props);
    return resource.getResponseField('SipMediaApplication.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeCreateSipMediaApplicationCall extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateSipMediaApplicationCallRequest) {
    super(scope, id);
  }

  public get sipMediaApplicationCall(): ChimeCreateSipMediaApplicationCallSipMediaApplicationCall {
    return new ChimeCreateSipMediaApplicationCallSipMediaApplicationCall(this, 'SipMediaApplicationCall', this.__resources, this.input);
  }

}

export class ChimeCreateSipMediaApplicationCallSipMediaApplicationCall extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateSipMediaApplicationCallRequest) {
    super(scope, id);
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
          FromPhoneNumber: this.input.fromPhoneNumber,
          ToPhoneNumber: this.input.toPhoneNumber,
          SipMediaApplicationId: this.input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipMediaApplicationCall.SipMediaApplicationCall.TransactionId', props);
    return resource.getResponseField('SipMediaApplicationCall.TransactionId') as unknown as string;
  }

}

export class ChimeCreateSipRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateSipRuleRequest) {
    super(scope, id);
  }

  public get sipRule(): ChimeCreateSipRuleSipRule {
    return new ChimeCreateSipRuleSipRule(this, 'SipRule', this.__resources, this.input);
  }

}

export class ChimeCreateSipRuleSipRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateSipRuleRequest) {
    super(scope, id);
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
          Name: this.input.name,
          TriggerType: this.input.triggerType,
          TriggerValue: this.input.triggerValue,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipRule.SipRule.SipRuleId', props);
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
          Name: this.input.name,
          TriggerType: this.input.triggerType,
          TriggerValue: this.input.triggerValue,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipRule.SipRule.Name', props);
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
          Name: this.input.name,
          TriggerType: this.input.triggerType,
          TriggerValue: this.input.triggerValue,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipRule.SipRule.Disabled', props);
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
          Name: this.input.name,
          TriggerType: this.input.triggerType,
          TriggerValue: this.input.triggerValue,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipRule.SipRule.TriggerType', props);
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
          Name: this.input.name,
          TriggerType: this.input.triggerType,
          TriggerValue: this.input.triggerValue,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipRule.SipRule.TriggerValue', props);
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
          Name: this.input.name,
          TriggerType: this.input.triggerType,
          TriggerValue: this.input.triggerValue,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipRule.SipRule.TargetApplications', props);
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
          Name: this.input.name,
          TriggerType: this.input.triggerType,
          TriggerValue: this.input.triggerValue,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipRule.SipRule.CreatedTimestamp', props);
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
          Name: this.input.name,
          TriggerType: this.input.triggerType,
          TriggerValue: this.input.triggerValue,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSipRule.SipRule.UpdatedTimestamp', props);
    return resource.getResponseField('SipRule.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeCreateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateUserRequest) {
    super(scope, id);
  }

  public get user(): ChimeCreateUserUser {
    return new ChimeCreateUserUser(this, 'User', this.__resources, this.input);
  }

}

export class ChimeCreateUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateUserRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.UserId', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.AccountId', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.PrimaryEmail', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.PrimaryProvisionedNumber', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.DisplayName', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.LicenseType', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.UserType', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.UserRegistrationStatus', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.UserInvitationStatus', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.RegisteredOn', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.InvitedOn', props);
    return resource.getResponseField('User.InvitedOn') as unknown as string;
  }

  public get alexaForBusinessMetadata(): ChimeCreateUserUserAlexaForBusinessMetadata {
    return new ChimeCreateUserUserAlexaForBusinessMetadata(this, 'AlexaForBusinessMetadata', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.PersonalPIN', props);
    return resource.getResponseField('User.PersonalPIN') as unknown as string;
  }

}

export class ChimeCreateUserUserAlexaForBusinessMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateUserRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled', props);
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
          AccountId: this.input.accountId,
          Username: this.input.username,
          Email: this.input.email,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn') as unknown as string;
  }

}

export class ChimeCreateVoiceConnector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateVoiceConnectorRequest) {
    super(scope, id);
  }

  public get voiceConnector(): ChimeCreateVoiceConnectorVoiceConnector {
    return new ChimeCreateVoiceConnectorVoiceConnector(this, 'VoiceConnector', this.__resources, this.input);
  }

}

export class ChimeCreateVoiceConnectorVoiceConnector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateVoiceConnectorRequest) {
    super(scope, id);
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
          Name: this.input.name,
          AwsRegion: this.input.awsRegion,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnector.VoiceConnector.VoiceConnectorId', props);
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
          Name: this.input.name,
          AwsRegion: this.input.awsRegion,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnector.VoiceConnector.AwsRegion', props);
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
          Name: this.input.name,
          AwsRegion: this.input.awsRegion,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnector.VoiceConnector.Name', props);
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
          Name: this.input.name,
          AwsRegion: this.input.awsRegion,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnector.VoiceConnector.OutboundHostName', props);
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
          Name: this.input.name,
          AwsRegion: this.input.awsRegion,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnector.VoiceConnector.RequireEncryption', props);
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
          Name: this.input.name,
          AwsRegion: this.input.awsRegion,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnector.VoiceConnector.CreatedTimestamp', props);
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
          Name: this.input.name,
          AwsRegion: this.input.awsRegion,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnector.VoiceConnector.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnector.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeCreateVoiceConnectorGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateVoiceConnectorGroupRequest) {
    super(scope, id);
  }

  public get voiceConnectorGroup(): ChimeCreateVoiceConnectorGroupVoiceConnectorGroup {
    return new ChimeCreateVoiceConnectorGroupVoiceConnectorGroup(this, 'VoiceConnectorGroup', this.__resources, this.input);
  }

}

export class ChimeCreateVoiceConnectorGroupVoiceConnectorGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeCreateVoiceConnectorGroupRequest) {
    super(scope, id);
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
          Name: this.input.name,
          VoiceConnectorItems: this.input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorGroupId', props);
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
          Name: this.input.name,
          VoiceConnectorItems: this.input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnectorGroup.VoiceConnectorGroup.Name', props);
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
          Name: this.input.name,
          VoiceConnectorItems: this.input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorItems', props);
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
          Name: this.input.name,
          VoiceConnectorItems: this.input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnectorGroup.VoiceConnectorGroup.CreatedTimestamp', props);
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
          Name: this.input.name,
          VoiceConnectorItems: this.input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVoiceConnectorGroup.VoiceConnectorGroup.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnectorGroup.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeDescribeAppInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeAppInstanceRequest) {
    super(scope, id);
  }

  public get appInstance(): ChimeDescribeAppInstanceAppInstance {
    return new ChimeDescribeAppInstanceAppInstance(this, 'AppInstance', this.__resources, this.input);
  }

}

export class ChimeDescribeAppInstanceAppInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeAppInstanceRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstance.AppInstance.AppInstanceArn', props);
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
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstance.AppInstance.Name', props);
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
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstance.AppInstance.Metadata', props);
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
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstance.AppInstance.CreatedTimestamp', props);
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
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstance.AppInstance.LastUpdatedTimestamp', props);
    return resource.getResponseField('AppInstance.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeDescribeAppInstanceAdmin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeAppInstanceAdminRequest) {
    super(scope, id);
  }

  public get appInstanceAdmin(): ChimeDescribeAppInstanceAdminAppInstanceAdmin {
    return new ChimeDescribeAppInstanceAdminAppInstanceAdmin(this, 'AppInstanceAdmin', this.__resources, this.input);
  }

}

export class ChimeDescribeAppInstanceAdminAppInstanceAdmin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeAppInstanceAdminRequest) {
    super(scope, id);
  }

  public get admin(): ChimeDescribeAppInstanceAdminAppInstanceAdminAdmin {
    return new ChimeDescribeAppInstanceAdminAppInstanceAdminAdmin(this, 'Admin', this.__resources, this.input);
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
          AppInstanceAdminArn: this.input.appInstanceAdminArn,
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstanceAdmin.AppInstanceAdmin.AppInstanceArn', props);
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
          AppInstanceAdminArn: this.input.appInstanceAdminArn,
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstanceAdmin.AppInstanceAdmin.CreatedTimestamp', props);
    return resource.getResponseField('AppInstanceAdmin.CreatedTimestamp') as unknown as string;
  }

}

export class ChimeDescribeAppInstanceAdminAppInstanceAdminAdmin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeAppInstanceAdminRequest) {
    super(scope, id);
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
          AppInstanceAdminArn: this.input.appInstanceAdminArn,
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstanceAdmin.AppInstanceAdmin.Admin.Arn', props);
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
          AppInstanceAdminArn: this.input.appInstanceAdminArn,
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstanceAdmin.AppInstanceAdmin.Admin.Name', props);
    return resource.getResponseField('AppInstanceAdmin.Admin.Name') as unknown as string;
  }

}

export class ChimeDescribeAppInstanceUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeAppInstanceUserRequest) {
    super(scope, id);
  }

  public get appInstanceUser(): ChimeDescribeAppInstanceUserAppInstanceUser {
    return new ChimeDescribeAppInstanceUserAppInstanceUser(this, 'AppInstanceUser', this.__resources, this.input);
  }

}

export class ChimeDescribeAppInstanceUserAppInstanceUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeAppInstanceUserRequest) {
    super(scope, id);
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
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstanceUser.AppInstanceUser.AppInstanceUserArn', props);
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
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstanceUser.AppInstanceUser.Name', props);
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
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstanceUser.AppInstanceUser.CreatedTimestamp', props);
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
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstanceUser.AppInstanceUser.Metadata', props);
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
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppInstanceUser.AppInstanceUser.LastUpdatedTimestamp', props);
    return resource.getResponseField('AppInstanceUser.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeDescribeChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelRequest) {
    super(scope, id);
  }

  public get channel(): ChimeDescribeChannelChannel {
    return new ChimeDescribeChannelChannel(this, 'Channel', this.__resources, this.input);
  }

}

export class ChimeDescribeChannelChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.Channel.Name', props);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.Channel.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.Channel.Mode', props);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.Channel.Privacy', props);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.Channel.Metadata', props);
    return resource.getResponseField('Channel.Metadata') as unknown as string;
  }

  public get createdBy(): ChimeDescribeChannelChannelCreatedBy {
    return new ChimeDescribeChannelChannelCreatedBy(this, 'CreatedBy', this.__resources, this.input);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.Channel.CreatedTimestamp', props);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.Channel.LastMessageTimestamp', props);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.Channel.LastUpdatedTimestamp', props);
    return resource.getResponseField('Channel.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeDescribeChannelChannelCreatedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.Channel.CreatedBy.Arn', props);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.Channel.CreatedBy.Name', props);
    return resource.getResponseField('Channel.CreatedBy.Name') as unknown as string;
  }

}

export class ChimeDescribeChannelBan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelBanRequest) {
    super(scope, id);
  }

  public get channelBan(): ChimeDescribeChannelBanChannelBan {
    return new ChimeDescribeChannelBanChannelBan(this, 'ChannelBan', this.__resources, this.input);
  }

}

export class ChimeDescribeChannelBanChannelBan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelBanRequest) {
    super(scope, id);
  }

  public get member(): ChimeDescribeChannelBanChannelBanMember {
    return new ChimeDescribeChannelBanChannelBanMember(this, 'Member', this.__resources, this.input);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelBan.ChannelBan.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelBan.ChannelBan.CreatedTimestamp', props);
    return resource.getResponseField('ChannelBan.CreatedTimestamp') as unknown as string;
  }

  public get createdBy(): ChimeDescribeChannelBanChannelBanCreatedBy {
    return new ChimeDescribeChannelBanChannelBanCreatedBy(this, 'CreatedBy', this.__resources, this.input);
  }

}

export class ChimeDescribeChannelBanChannelBanMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelBanRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelBan.ChannelBan.Member.Arn', props);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelBan.ChannelBan.Member.Name', props);
    return resource.getResponseField('ChannelBan.Member.Name') as unknown as string;
  }

}

export class ChimeDescribeChannelBanChannelBanCreatedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelBanRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelBan.ChannelBan.CreatedBy.Arn', props);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelBan.ChannelBan.CreatedBy.Name', props);
    return resource.getResponseField('ChannelBan.CreatedBy.Name') as unknown as string;
  }

}

export class ChimeDescribeChannelMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelMembershipRequest) {
    super(scope, id);
  }

  public get channelMembership(): ChimeDescribeChannelMembershipChannelMembership {
    return new ChimeDescribeChannelMembershipChannelMembership(this, 'ChannelMembership', this.__resources, this.input);
  }

}

export class ChimeDescribeChannelMembershipChannelMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelMembershipRequest) {
    super(scope, id);
  }

  public get invitedBy(): ChimeDescribeChannelMembershipChannelMembershipInvitedBy {
    return new ChimeDescribeChannelMembershipChannelMembershipInvitedBy(this, 'InvitedBy', this.__resources, this.input);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembership.ChannelMembership.Type', props);
    return resource.getResponseField('ChannelMembership.Type') as unknown as string;
  }

  public get member(): ChimeDescribeChannelMembershipChannelMembershipMember {
    return new ChimeDescribeChannelMembershipChannelMembershipMember(this, 'Member', this.__resources, this.input);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembership.ChannelMembership.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembership.ChannelMembership.CreatedTimestamp', props);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembership.ChannelMembership.LastUpdatedTimestamp', props);
    return resource.getResponseField('ChannelMembership.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeDescribeChannelMembershipChannelMembershipInvitedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelMembershipRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembership.ChannelMembership.InvitedBy.Arn', props);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembership.ChannelMembership.InvitedBy.Name', props);
    return resource.getResponseField('ChannelMembership.InvitedBy.Name') as unknown as string;
  }

}

export class ChimeDescribeChannelMembershipChannelMembershipMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelMembershipRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembership.ChannelMembership.Member.Arn', props);
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
          ChannelArn: this.input.channelArn,
          MemberArn: this.input.memberArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembership.ChannelMembership.Member.Name', props);
    return resource.getResponseField('ChannelMembership.Member.Name') as unknown as string;
  }

}

export class ChimeDescribeChannelMembershipForAppInstanceUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelMembershipForAppInstanceUserRequest) {
    super(scope, id);
  }

  public get channelMembership(): ChimeDescribeChannelMembershipForAppInstanceUserChannelMembership {
    return new ChimeDescribeChannelMembershipForAppInstanceUserChannelMembership(this, 'ChannelMembership', this.__resources, this.input);
  }

}

export class ChimeDescribeChannelMembershipForAppInstanceUserChannelMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelMembershipForAppInstanceUserRequest) {
    super(scope, id);
  }

  public get channelSummary(): ChimeDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary {
    return new ChimeDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary(this, 'ChannelSummary', this.__resources, this.input);
  }

  public get appInstanceUserMembershipSummary(): ChimeDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary {
    return new ChimeDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary(this, 'AppInstanceUserMembershipSummary', this.__resources, this.input);
  }

}

export class ChimeDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelMembershipForAppInstanceUserRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Name', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Mode', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Privacy', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Metadata', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.LastMessageTimestamp', props);
    return resource.getResponseField('ChannelMembership.ChannelSummary.LastMessageTimestamp') as unknown as string;
  }

}

export class ChimeDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelMembershipForAppInstanceUserRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.AppInstanceUserMembershipSummary.Type', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.AppInstanceUserMembershipSummary.ReadMarkerTimestamp', props);
    return resource.getResponseField('ChannelMembership.AppInstanceUserMembershipSummary.ReadMarkerTimestamp') as unknown as string;
  }

}

export class ChimeDescribeChannelModeratedByAppInstanceUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelModeratedByAppInstanceUserRequest) {
    super(scope, id);
  }

  public get channel(): ChimeDescribeChannelModeratedByAppInstanceUserChannel {
    return new ChimeDescribeChannelModeratedByAppInstanceUserChannel(this, 'Channel', this.__resources, this.input);
  }

}

export class ChimeDescribeChannelModeratedByAppInstanceUserChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelModeratedByAppInstanceUserRequest) {
    super(scope, id);
  }

  public get channelSummary(): ChimeDescribeChannelModeratedByAppInstanceUserChannelChannelSummary {
    return new ChimeDescribeChannelModeratedByAppInstanceUserChannelChannelSummary(this, 'ChannelSummary', this.__resources, this.input);
  }

}

export class ChimeDescribeChannelModeratedByAppInstanceUserChannelChannelSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelModeratedByAppInstanceUserRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Name', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Mode', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Privacy', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Metadata', props);
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
          ChannelArn: this.input.channelArn,
          AppInstanceUserArn: this.input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.LastMessageTimestamp', props);
    return resource.getResponseField('Channel.ChannelSummary.LastMessageTimestamp') as unknown as string;
  }

}

export class ChimeDescribeChannelModerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelModeratorRequest) {
    super(scope, id);
  }

  public get channelModerator(): ChimeDescribeChannelModeratorChannelModerator {
    return new ChimeDescribeChannelModeratorChannelModerator(this, 'ChannelModerator', this.__resources, this.input);
  }

}

export class ChimeDescribeChannelModeratorChannelModerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelModeratorRequest) {
    super(scope, id);
  }

  public get moderator(): ChimeDescribeChannelModeratorChannelModeratorModerator {
    return new ChimeDescribeChannelModeratorChannelModeratorModerator(this, 'Moderator', this.__resources, this.input);
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
          ChannelArn: this.input.channelArn,
          ChannelModeratorArn: this.input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModerator.ChannelModerator.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          ChannelModeratorArn: this.input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModerator.ChannelModerator.CreatedTimestamp', props);
    return resource.getResponseField('ChannelModerator.CreatedTimestamp') as unknown as string;
  }

  public get createdBy(): ChimeDescribeChannelModeratorChannelModeratorCreatedBy {
    return new ChimeDescribeChannelModeratorChannelModeratorCreatedBy(this, 'CreatedBy', this.__resources, this.input);
  }

}

export class ChimeDescribeChannelModeratorChannelModeratorModerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelModeratorRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          ChannelModeratorArn: this.input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModerator.ChannelModerator.Moderator.Arn', props);
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
          ChannelArn: this.input.channelArn,
          ChannelModeratorArn: this.input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModerator.ChannelModerator.Moderator.Name', props);
    return resource.getResponseField('ChannelModerator.Moderator.Name') as unknown as string;
  }

}

export class ChimeDescribeChannelModeratorChannelModeratorCreatedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDescribeChannelModeratorRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          ChannelModeratorArn: this.input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModerator.ChannelModerator.CreatedBy.Arn', props);
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
          ChannelArn: this.input.channelArn,
          ChannelModeratorArn: this.input.channelModeratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannelModerator.ChannelModerator.CreatedBy.Name', props);
    return resource.getResponseField('ChannelModerator.CreatedBy.Name') as unknown as string;
  }

}

export class ChimeDisassociatePhoneNumbersFromVoiceConnector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          E164PhoneNumbers: this.input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociatePhoneNumbersFromVoiceConnector.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeDisassociatePhoneNumbersFromVoiceConnectorGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest) {
    super(scope, id);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
          E164PhoneNumbers: this.input.e164PhoneNumbers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociatePhoneNumbersFromVoiceConnectorGroup.PhoneNumberErrors', props);
    return resource.getResponseField('PhoneNumberErrors') as unknown as shapes.ChimePhoneNumberError[];
  }

}

export class ChimeFetchAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetAccountRequest) {
    super(scope, id);
  }

  public get account(): ChimeFetchAccountAccount {
    return new ChimeFetchAccountAccount(this, 'Account', this.__resources, this.input);
  }

}

export class ChimeFetchAccountAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetAccountRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Account.AwsAccountId', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Account.AccountId', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Account.Name', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Account.AccountType', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Account.CreatedTimestamp', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Account.DefaultLicense', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Account.SupportedLicenses', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Account.SigninDelegateGroups', props);
    return resource.getResponseField('Account.SigninDelegateGroups') as unknown as shapes.ChimeSigninDelegateGroup[];
  }

}

export class ChimeFetchAccountSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetAccountSettingsRequest) {
    super(scope, id);
  }

  public get accountSettings(): ChimeFetchAccountSettingsAccountSettings {
    return new ChimeFetchAccountSettingsAccountSettings(this, 'AccountSettings', this.__resources, this.input);
  }

}

export class ChimeFetchAccountSettingsAccountSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetAccountSettingsRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.AccountSettings.DisableRemoteControl', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.AccountSettings.EnableDialOut', props);
    return resource.getResponseField('AccountSettings.EnableDialOut') as unknown as boolean;
  }

}

export class ChimeFetchAppInstanceRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetAppInstanceRetentionSettingsRequest) {
    super(scope, id);
  }

  public get appInstanceRetentionSettings(): ChimeFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings {
    return new ChimeFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings(this, 'AppInstanceRetentionSettings', this.__resources, this.input);
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
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppInstanceRetentionSettings.InitiateDeletionTimestamp', props);
    return resource.getResponseField('InitiateDeletionTimestamp') as unknown as string;
  }

}

export class ChimeFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetAppInstanceRetentionSettingsRequest) {
    super(scope, id);
  }

  public get channelRetentionSettings(): ChimeFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings {
    return new ChimeFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings(this, 'ChannelRetentionSettings', this.__resources, this.input);
  }

}

export class ChimeFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetAppInstanceRetentionSettingsRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppInstanceRetentionSettings.AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays', props);
    return resource.getResponseField('AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeFetchAppInstanceStreamingConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetAppInstanceStreamingConfigurationsRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppInstanceStreamingConfigurations.AppInstanceStreamingConfigurations', props);
    return resource.getResponseField('AppInstanceStreamingConfigurations') as unknown as shapes.ChimeAppInstanceStreamingConfiguration[];
  }

}

export class ChimeFetchAttendee extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetAttendeeRequest) {
    super(scope, id);
  }

  public get attendee(): ChimeFetchAttendeeAttendee {
    return new ChimeFetchAttendeeAttendee(this, 'Attendee', this.__resources, this.input);
  }

}

export class ChimeFetchAttendeeAttendee extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetAttendeeRequest) {
    super(scope, id);
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
          MeetingId: this.input.meetingId,
          AttendeeId: this.input.attendeeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttendee.Attendee.ExternalUserId', props);
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
          MeetingId: this.input.meetingId,
          AttendeeId: this.input.attendeeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttendee.Attendee.AttendeeId', props);
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
          MeetingId: this.input.meetingId,
          AttendeeId: this.input.attendeeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttendee.Attendee.JoinToken', props);
    return resource.getResponseField('Attendee.JoinToken') as unknown as string;
  }

}

export class ChimeFetchBot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetBotRequest) {
    super(scope, id);
  }

  public get bot(): ChimeFetchBotBot {
    return new ChimeFetchBotBot(this, 'Bot', this.__resources, this.input);
  }

}

export class ChimeFetchBotBot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetBotRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBot.Bot.BotId', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBot.Bot.UserId', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBot.Bot.DisplayName', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBot.Bot.BotType', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBot.Bot.Disabled', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBot.Bot.CreatedTimestamp', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBot.Bot.UpdatedTimestamp', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBot.Bot.BotEmail', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBot.Bot.SecurityToken', props);
    return resource.getResponseField('Bot.SecurityToken') as unknown as string;
  }

}

export class ChimeFetchChannelMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetChannelMessageRequest) {
    super(scope, id);
  }

  public get channelMessage(): ChimeFetchChannelMessageChannelMessage {
    return new ChimeFetchChannelMessageChannelMessage(this, 'ChannelMessage', this.__resources, this.input);
  }

}

export class ChimeFetchChannelMessageChannelMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetChannelMessageRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.MessageId', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.Content', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.Metadata', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.Type', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.CreatedTimestamp', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.LastEditedTimestamp', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.LastUpdatedTimestamp', props);
    return resource.getResponseField('ChannelMessage.LastUpdatedTimestamp') as unknown as string;
  }

  public get sender(): ChimeFetchChannelMessageChannelMessageSender {
    return new ChimeFetchChannelMessageChannelMessageSender(this, 'Sender', this.__resources, this.input);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.Redacted', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.Persistence', props);
    return resource.getResponseField('ChannelMessage.Persistence') as unknown as string;
  }

}

export class ChimeFetchChannelMessageChannelMessageSender extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetChannelMessageRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.Sender.Arn', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannelMessage.ChannelMessage.Sender.Name', props);
    return resource.getResponseField('ChannelMessage.Sender.Name') as unknown as string;
  }

}

export class ChimeFetchEventsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetEventsConfigurationRequest) {
    super(scope, id);
  }

  public get eventsConfiguration(): ChimeFetchEventsConfigurationEventsConfiguration {
    return new ChimeFetchEventsConfigurationEventsConfiguration(this, 'EventsConfiguration', this.__resources, this.input);
  }

}

export class ChimeFetchEventsConfigurationEventsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetEventsConfigurationRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventsConfiguration.EventsConfiguration.BotId', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventsConfiguration.EventsConfiguration.OutboundEventsHTTPSEndpoint', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventsConfiguration.EventsConfiguration.LambdaFunctionArn', props);
    return resource.getResponseField('EventsConfiguration.LambdaFunctionArn') as unknown as string;
  }

}

export class ChimeFetchGlobalSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get businessCalling(): ChimeFetchGlobalSettingsBusinessCalling {
    return new ChimeFetchGlobalSettingsBusinessCalling(this, 'BusinessCalling', this.__resources);
  }

  public get voiceConnector(): ChimeFetchGlobalSettingsVoiceConnector {
    return new ChimeFetchGlobalSettingsVoiceConnector(this, 'VoiceConnector', this.__resources);
  }

}

export class ChimeFetchGlobalSettingsBusinessCalling extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetGlobalSettings.BusinessCalling.CdrBucket', props);
    return resource.getResponseField('BusinessCalling.CdrBucket') as unknown as string;
  }

}

export class ChimeFetchGlobalSettingsVoiceConnector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetGlobalSettings.VoiceConnector.CdrBucket', props);
    return resource.getResponseField('VoiceConnector.CdrBucket') as unknown as string;
  }

}

export class ChimeFetchMeeting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetMeetingRequest) {
    super(scope, id);
  }

  public get meeting(): ChimeFetchMeetingMeeting {
    return new ChimeFetchMeetingMeeting(this, 'Meeting', this.__resources, this.input);
  }

}

export class ChimeFetchMeetingMeeting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetMeetingRequest) {
    super(scope, id);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMeeting.Meeting.MeetingId', props);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMeeting.Meeting.ExternalMeetingId', props);
    return resource.getResponseField('Meeting.ExternalMeetingId') as unknown as string;
  }

  public get mediaPlacement(): ChimeFetchMeetingMeetingMediaPlacement {
    return new ChimeFetchMeetingMeetingMediaPlacement(this, 'MediaPlacement', this.__resources, this.input);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMeeting.Meeting.MediaRegion', props);
    return resource.getResponseField('Meeting.MediaRegion') as unknown as string;
  }

}

export class ChimeFetchMeetingMeetingMediaPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetMeetingRequest) {
    super(scope, id);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMeeting.Meeting.MediaPlacement.AudioHostUrl', props);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMeeting.Meeting.MediaPlacement.AudioFallbackUrl', props);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMeeting.Meeting.MediaPlacement.ScreenDataUrl', props);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMeeting.Meeting.MediaPlacement.ScreenSharingUrl', props);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMeeting.Meeting.MediaPlacement.ScreenViewingUrl', props);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMeeting.Meeting.MediaPlacement.SignalingUrl', props);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMeeting.Meeting.MediaPlacement.TurnControlUrl', props);
    return resource.getResponseField('Meeting.MediaPlacement.TurnControlUrl') as unknown as string;
  }

}

export class ChimeFetchMessagingSessionEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get endpoint(): ChimeFetchMessagingSessionEndpointEndpoint {
    return new ChimeFetchMessagingSessionEndpointEndpoint(this, 'Endpoint', this.__resources);
  }

}

export class ChimeFetchMessagingSessionEndpointEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetMessagingSessionEndpoint.Endpoint.Url', props);
    return resource.getResponseField('Endpoint.Url') as unknown as string;
  }

}

export class ChimeFetchPhoneNumber extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetPhoneNumberRequest) {
    super(scope, id);
  }

  public get phoneNumber(): ChimeFetchPhoneNumberPhoneNumber {
    return new ChimeFetchPhoneNumberPhoneNumber(this, 'PhoneNumber', this.__resources, this.input);
  }

}

export class ChimeFetchPhoneNumberPhoneNumber extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetPhoneNumberRequest) {
    super(scope, id);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.PhoneNumberId', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.E164PhoneNumber', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.Type', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.ProductType', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.Status', props);
    return resource.getResponseField('PhoneNumber.Status') as unknown as string;
  }

  public get capabilities(): ChimeFetchPhoneNumberPhoneNumberCapabilities {
    return new ChimeFetchPhoneNumberPhoneNumberCapabilities(this, 'Capabilities', this.__resources, this.input);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.Associations', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.CallingName', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.CallingNameStatus', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.CreatedTimestamp', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.UpdatedTimestamp', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.DeletionTimestamp', props);
    return resource.getResponseField('PhoneNumber.DeletionTimestamp') as unknown as string;
  }

}

export class ChimeFetchPhoneNumberPhoneNumberCapabilities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetPhoneNumberRequest) {
    super(scope, id);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.Capabilities.InboundCall', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.Capabilities.OutboundCall', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.Capabilities.InboundSMS', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.Capabilities.OutboundSMS', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.Capabilities.InboundMMS', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumber.PhoneNumber.Capabilities.OutboundMMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundMMS') as unknown as boolean;
  }

}

export class ChimeFetchPhoneNumberOrder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetPhoneNumberOrderRequest) {
    super(scope, id);
  }

  public get phoneNumberOrder(): ChimeFetchPhoneNumberOrderPhoneNumberOrder {
    return new ChimeFetchPhoneNumberOrderPhoneNumberOrder(this, 'PhoneNumberOrder', this.__resources, this.input);
  }

}

export class ChimeFetchPhoneNumberOrderPhoneNumberOrder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetPhoneNumberOrderRequest) {
    super(scope, id);
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
          PhoneNumberOrderId: this.input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumberOrder.PhoneNumberOrder.PhoneNumberOrderId', props);
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
          PhoneNumberOrderId: this.input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumberOrder.PhoneNumberOrder.ProductType', props);
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
          PhoneNumberOrderId: this.input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumberOrder.PhoneNumberOrder.Status', props);
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
          PhoneNumberOrderId: this.input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumberOrder.PhoneNumberOrder.OrderedPhoneNumbers', props);
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
          PhoneNumberOrderId: this.input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumberOrder.PhoneNumberOrder.CreatedTimestamp', props);
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
          PhoneNumberOrderId: this.input.phoneNumberOrderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumberOrder.PhoneNumberOrder.UpdatedTimestamp', props);
    return resource.getResponseField('PhoneNumberOrder.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeFetchPhoneNumberSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumberSettings.CallingName', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetPhoneNumberSettings.CallingNameUpdatedTimestamp', props);
    return resource.getResponseField('CallingNameUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeFetchProxySession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetProxySessionRequest) {
    super(scope, id);
  }

  public get proxySession(): ChimeFetchProxySessionProxySession {
    return new ChimeFetchProxySessionProxySession(this, 'ProxySession', this.__resources, this.input);
  }

}

export class ChimeFetchProxySessionProxySession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetProxySessionRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.VoiceConnectorId', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.ProxySessionId', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.Name', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.Status', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.ExpiryMinutes', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.Capabilities', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.CreatedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.UpdatedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.EndedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.Participants', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.NumberSelectionBehavior', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.GeoMatchLevel', props);
    return resource.getResponseField('ProxySession.GeoMatchLevel') as unknown as string;
  }

  public get geoMatchParams(): ChimeFetchProxySessionProxySessionGeoMatchParams {
    return new ChimeFetchProxySessionProxySessionGeoMatchParams(this, 'GeoMatchParams', this.__resources, this.input);
  }

}

export class ChimeFetchProxySessionProxySessionGeoMatchParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetProxySessionRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.GeoMatchParams.Country', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProxySession.ProxySession.GeoMatchParams.AreaCode', props);
    return resource.getResponseField('ProxySession.GeoMatchParams.AreaCode') as unknown as string;
  }

}

export class ChimeFetchRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetRetentionSettingsRequest) {
    super(scope, id);
  }

  public get retentionSettings(): ChimeFetchRetentionSettingsRetentionSettings {
    return new ChimeFetchRetentionSettingsRetentionSettings(this, 'RetentionSettings', this.__resources, this.input);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRetentionSettings.InitiateDeletionTimestamp', props);
    return resource.getResponseField('InitiateDeletionTimestamp') as unknown as string;
  }

}

export class ChimeFetchRetentionSettingsRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetRetentionSettingsRequest) {
    super(scope, id);
  }

  public get roomRetentionSettings(): ChimeFetchRetentionSettingsRetentionSettingsRoomRetentionSettings {
    return new ChimeFetchRetentionSettingsRetentionSettingsRoomRetentionSettings(this, 'RoomRetentionSettings', this.__resources, this.input);
  }

  public get conversationRetentionSettings(): ChimeFetchRetentionSettingsRetentionSettingsConversationRetentionSettings {
    return new ChimeFetchRetentionSettingsRetentionSettingsConversationRetentionSettings(this, 'ConversationRetentionSettings', this.__resources, this.input);
  }

}

export class ChimeFetchRetentionSettingsRetentionSettingsRoomRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetRetentionSettingsRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRetentionSettings.RetentionSettings.RoomRetentionSettings.RetentionDays', props);
    return resource.getResponseField('RetentionSettings.RoomRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeFetchRetentionSettingsRetentionSettingsConversationRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetRetentionSettingsRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRetentionSettings.RetentionSettings.ConversationRetentionSettings.RetentionDays', props);
    return resource.getResponseField('RetentionSettings.ConversationRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeFetchRoom extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetRoomRequest) {
    super(scope, id);
  }

  public get room(): ChimeFetchRoomRoom {
    return new ChimeFetchRoomRoom(this, 'Room', this.__resources, this.input);
  }

}

export class ChimeFetchRoomRoom extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetRoomRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoom.Room.RoomId', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoom.Room.Name', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoom.Room.AccountId', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoom.Room.CreatedBy', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoom.Room.CreatedTimestamp', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoom.Room.UpdatedTimestamp', props);
    return resource.getResponseField('Room.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeFetchSipMediaApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetSipMediaApplicationRequest) {
    super(scope, id);
  }

  public get sipMediaApplication(): ChimeFetchSipMediaApplicationSipMediaApplication {
    return new ChimeFetchSipMediaApplicationSipMediaApplication(this, 'SipMediaApplication', this.__resources, this.input);
  }

}

export class ChimeFetchSipMediaApplicationSipMediaApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetSipMediaApplicationRequest) {
    super(scope, id);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipMediaApplication.SipMediaApplication.SipMediaApplicationId', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipMediaApplication.SipMediaApplication.AwsRegion', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipMediaApplication.SipMediaApplication.Name', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipMediaApplication.SipMediaApplication.Endpoints', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipMediaApplication.SipMediaApplication.CreatedTimestamp', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipMediaApplication.SipMediaApplication.UpdatedTimestamp', props);
    return resource.getResponseField('SipMediaApplication.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeFetchSipMediaApplicationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetSipMediaApplicationLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get sipMediaApplicationLoggingConfiguration(): ChimeFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration {
    return new ChimeFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration(this, 'SipMediaApplicationLoggingConfiguration', this.__resources, this.input);
  }

}

export class ChimeFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetSipMediaApplicationLoggingConfigurationRequest) {
    super(scope, id);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipMediaApplicationLoggingConfiguration.SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs', props);
    return resource.getResponseField('SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs') as unknown as boolean;
  }

}

export class ChimeFetchSipRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetSipRuleRequest) {
    super(scope, id);
  }

  public get sipRule(): ChimeFetchSipRuleSipRule {
    return new ChimeFetchSipRuleSipRule(this, 'SipRule', this.__resources, this.input);
  }

}

export class ChimeFetchSipRuleSipRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetSipRuleRequest) {
    super(scope, id);
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
          SipRuleId: this.input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipRule.SipRule.SipRuleId', props);
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
          SipRuleId: this.input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipRule.SipRule.Name', props);
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
          SipRuleId: this.input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipRule.SipRule.Disabled', props);
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
          SipRuleId: this.input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipRule.SipRule.TriggerType', props);
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
          SipRuleId: this.input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipRule.SipRule.TriggerValue', props);
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
          SipRuleId: this.input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipRule.SipRule.TargetApplications', props);
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
          SipRuleId: this.input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipRule.SipRule.CreatedTimestamp', props);
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
          SipRuleId: this.input.sipRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSipRule.SipRule.UpdatedTimestamp', props);
    return resource.getResponseField('SipRule.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeFetchUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetUserRequest) {
    super(scope, id);
  }

  public get user(): ChimeFetchUserUser {
    return new ChimeFetchUserUser(this, 'User', this.__resources, this.input);
  }

}

export class ChimeFetchUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetUserRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.UserId', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.AccountId', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.PrimaryEmail', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.PrimaryProvisionedNumber', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.DisplayName', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.LicenseType', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.UserType', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.UserRegistrationStatus', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.UserInvitationStatus', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.RegisteredOn', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.InvitedOn', props);
    return resource.getResponseField('User.InvitedOn') as unknown as string;
  }

  public get alexaForBusinessMetadata(): ChimeFetchUserUserAlexaForBusinessMetadata {
    return new ChimeFetchUserUserAlexaForBusinessMetadata(this, 'AlexaForBusinessMetadata', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.PersonalPIN', props);
    return resource.getResponseField('User.PersonalPIN') as unknown as string;
  }

}

export class ChimeFetchUserUserAlexaForBusinessMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetUserRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn') as unknown as string;
  }

}

export class ChimeFetchUserSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetUserSettingsRequest) {
    super(scope, id);
  }

  public get userSettings(): ChimeFetchUserSettingsUserSettings {
    return new ChimeFetchUserSettingsUserSettings(this, 'UserSettings', this.__resources, this.input);
  }

}

export class ChimeFetchUserSettingsUserSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetUserSettingsRequest) {
    super(scope, id);
  }

  public get telephony(): ChimeFetchUserSettingsUserSettingsTelephony {
    return new ChimeFetchUserSettingsUserSettingsTelephony(this, 'Telephony', this.__resources, this.input);
  }

}

export class ChimeFetchUserSettingsUserSettingsTelephony extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetUserSettingsRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserSettings.UserSettings.Telephony.InboundCalling', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserSettings.UserSettings.Telephony.OutboundCalling', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserSettings.UserSettings.Telephony.SMS', props);
    return resource.getResponseField('UserSettings.Telephony.SMS') as unknown as boolean;
  }

}

export class ChimeFetchVoiceConnector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorRequest) {
    super(scope, id);
  }

  public get voiceConnector(): ChimeFetchVoiceConnectorVoiceConnector {
    return new ChimeFetchVoiceConnectorVoiceConnector(this, 'VoiceConnector', this.__resources, this.input);
  }

}

export class ChimeFetchVoiceConnectorVoiceConnector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnector.VoiceConnector.VoiceConnectorId', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnector.VoiceConnector.AwsRegion', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnector.VoiceConnector.Name', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnector.VoiceConnector.OutboundHostName', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnector.VoiceConnector.RequireEncryption', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnector.VoiceConnector.CreatedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnector.VoiceConnector.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnector.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeFetchVoiceConnectorEmergencyCallingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest) {
    super(scope, id);
  }

  public get emergencyCallingConfiguration(): ChimeFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration {
    return new ChimeFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration(this, 'EmergencyCallingConfiguration', this.__resources, this.input);
  }

}

export class ChimeFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorEmergencyCallingConfiguration.EmergencyCallingConfiguration.DNIS', props);
    return resource.getResponseField('EmergencyCallingConfiguration.DNIS') as unknown as shapes.ChimeDnisEmergencyCallingConfiguration[];
  }

}

export class ChimeFetchVoiceConnectorGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorGroupRequest) {
    super(scope, id);
  }

  public get voiceConnectorGroup(): ChimeFetchVoiceConnectorGroupVoiceConnectorGroup {
    return new ChimeFetchVoiceConnectorGroupVoiceConnectorGroup(this, 'VoiceConnectorGroup', this.__resources, this.input);
  }

}

export class ChimeFetchVoiceConnectorGroupVoiceConnectorGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorGroupRequest) {
    super(scope, id);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorGroupId', props);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorGroup.VoiceConnectorGroup.Name', props);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorItems', props);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorGroup.VoiceConnectorGroup.CreatedTimestamp', props);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorGroup.VoiceConnectorGroup.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnectorGroup.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeFetchVoiceConnectorLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get loggingConfiguration(): ChimeFetchVoiceConnectorLoggingConfigurationLoggingConfiguration {
    return new ChimeFetchVoiceConnectorLoggingConfigurationLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.input);
  }

}

export class ChimeFetchVoiceConnectorLoggingConfigurationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorLoggingConfigurationRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorLoggingConfiguration.LoggingConfiguration.EnableSIPLogs', props);
    return resource.getResponseField('LoggingConfiguration.EnableSIPLogs') as unknown as boolean;
  }

}

export class ChimeFetchVoiceConnectorOrigination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorOriginationRequest) {
    super(scope, id);
  }

  public get origination(): ChimeFetchVoiceConnectorOriginationOrigination {
    return new ChimeFetchVoiceConnectorOriginationOrigination(this, 'Origination', this.__resources, this.input);
  }

}

export class ChimeFetchVoiceConnectorOriginationOrigination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorOriginationRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorOrigination.Origination.Routes', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorOrigination.Origination.Disabled', props);
    return resource.getResponseField('Origination.Disabled') as unknown as boolean;
  }

}

export class ChimeFetchVoiceConnectorProxy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorProxyRequest) {
    super(scope, id);
  }

  public get proxy(): ChimeFetchVoiceConnectorProxyProxy {
    return new ChimeFetchVoiceConnectorProxyProxy(this, 'Proxy', this.__resources, this.input);
  }

}

export class ChimeFetchVoiceConnectorProxyProxy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorProxyRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorProxy.Proxy.DefaultSessionExpiryMinutes', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorProxy.Proxy.Disabled', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorProxy.Proxy.FallBackPhoneNumber', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorProxy.Proxy.PhoneNumberCountries', props);
    return resource.getResponseField('Proxy.PhoneNumberCountries') as unknown as string[];
  }

}

export class ChimeFetchVoiceConnectorStreamingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorStreamingConfigurationRequest) {
    super(scope, id);
  }

  public get streamingConfiguration(): ChimeFetchVoiceConnectorStreamingConfigurationStreamingConfiguration {
    return new ChimeFetchVoiceConnectorStreamingConfigurationStreamingConfiguration(this, 'StreamingConfiguration', this.__resources, this.input);
  }

}

export class ChimeFetchVoiceConnectorStreamingConfigurationStreamingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorStreamingConfigurationRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorStreamingConfiguration.StreamingConfiguration.DataRetentionInHours', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorStreamingConfiguration.StreamingConfiguration.Disabled', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorStreamingConfiguration.StreamingConfiguration.StreamingNotificationTargets', props);
    return resource.getResponseField('StreamingConfiguration.StreamingNotificationTargets') as unknown as shapes.ChimeStreamingNotificationTarget[];
  }

}

export class ChimeFetchVoiceConnectorTermination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorTerminationRequest) {
    super(scope, id);
  }

  public get termination(): ChimeFetchVoiceConnectorTerminationTermination {
    return new ChimeFetchVoiceConnectorTerminationTermination(this, 'Termination', this.__resources, this.input);
  }

}

export class ChimeFetchVoiceConnectorTerminationTermination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorTerminationRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorTermination.Termination.CpsLimit', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorTermination.Termination.DefaultPhoneNumber', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorTermination.Termination.CallingRegions', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorTermination.Termination.CidrAllowedList', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorTermination.Termination.Disabled', props);
    return resource.getResponseField('Termination.Disabled') as unknown as boolean;
  }

}

export class ChimeFetchVoiceConnectorTerminationHealth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorTerminationHealthRequest) {
    super(scope, id);
  }

  public get terminationHealth(): ChimeFetchVoiceConnectorTerminationHealthTerminationHealth {
    return new ChimeFetchVoiceConnectorTerminationHealthTerminationHealth(this, 'TerminationHealth', this.__resources, this.input);
  }

}

export class ChimeFetchVoiceConnectorTerminationHealthTerminationHealth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeGetVoiceConnectorTerminationHealthRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorTerminationHealth.TerminationHealth.Timestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVoiceConnectorTerminationHealth.TerminationHealth.Source', props);
    return resource.getResponseField('TerminationHealth.Source') as unknown as string;
  }

}

export class ChimeInviteUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeInviteUsersRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserEmailList: this.input.userEmailList,
          UserType: this.input.userType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteUsers.Invites', props);
    return resource.getResponseField('Invites') as unknown as shapes.ChimeInvite[];
  }

}

export class ChimeListAccounts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListAccountsRequest) {
    super(scope, id);
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
          Name: this.input.name,
          UserEmail: this.input.userEmail,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccounts.Accounts', props);
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
          Name: this.input.name,
          UserEmail: this.input.userEmail,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListAppInstanceAdmins extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListAppInstanceAdminsRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppInstanceAdmins.AppInstanceArn', props);
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
          AppInstanceArn: this.input.appInstanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppInstanceAdmins.AppInstanceAdmins', props);
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
          AppInstanceArn: this.input.appInstanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppInstanceAdmins.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListAppInstanceUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListAppInstanceUsersRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppInstanceUsers.AppInstanceArn', props);
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
          AppInstanceArn: this.input.appInstanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppInstanceUsers.AppInstanceUsers', props);
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
          AppInstanceArn: this.input.appInstanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppInstanceUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListAppInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListAppInstancesRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppInstances.AppInstances', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListAttendeeTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListAttendeeTagsRequest) {
    super(scope, id);
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
          MeetingId: this.input.meetingId,
          AttendeeId: this.input.attendeeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttendeeTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ChimeTag[];
  }

}

export class ChimeListAttendees extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListAttendeesRequest) {
    super(scope, id);
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
          MeetingId: this.input.meetingId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttendees.Attendees', props);
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
          MeetingId: this.input.meetingId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttendees.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListBots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListBotsRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBots.Bots', props);
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
          AccountId: this.input.accountId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBots.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListChannelBans extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListChannelBansRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelBans.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelBans.NextToken', props);
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
          ChannelArn: this.input.channelArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelBans.ChannelBans', props);
    return resource.getResponseField('ChannelBans') as unknown as shapes.ChimeChannelBanSummary[];
  }

}

export class ChimeListChannelMemberships extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListChannelMembershipsRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          Type: this.input.type,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelMemberships.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          Type: this.input.type,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelMemberships.ChannelMemberships', props);
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
          ChannelArn: this.input.channelArn,
          Type: this.input.type,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelMemberships.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListChannelMembershipsForAppInstanceUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListChannelMembershipsForAppInstanceUserRequest) {
    super(scope, id);
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
          AppInstanceUserArn: this.input.appInstanceUserArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelMembershipsForAppInstanceUser.ChannelMemberships', props);
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
          AppInstanceUserArn: this.input.appInstanceUserArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelMembershipsForAppInstanceUser.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListChannelMessages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListChannelMessagesRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          SortOrder: this.input.sortOrder,
          NotBefore: this.input.notBefore,
          NotAfter: this.input.notAfter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelMessages.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          SortOrder: this.input.sortOrder,
          NotBefore: this.input.notBefore,
          NotAfter: this.input.notAfter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelMessages.NextToken', props);
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
          ChannelArn: this.input.channelArn,
          SortOrder: this.input.sortOrder,
          NotBefore: this.input.notBefore,
          NotAfter: this.input.notAfter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelMessages.ChannelMessages', props);
    return resource.getResponseField('ChannelMessages') as unknown as shapes.ChimeChannelMessageSummary[];
  }

}

export class ChimeListChannelModerators extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListChannelModeratorsRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelModerators.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelModerators.NextToken', props);
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
          ChannelArn: this.input.channelArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelModerators.ChannelModerators', props);
    return resource.getResponseField('ChannelModerators') as unknown as shapes.ChimeChannelModeratorSummary[];
  }

}

export class ChimeListChannels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListChannelsRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
          Privacy: this.input.privacy,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannels.Channels', props);
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
          AppInstanceArn: this.input.appInstanceArn,
          Privacy: this.input.privacy,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListChannelsModeratedByAppInstanceUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListChannelsModeratedByAppInstanceUserRequest) {
    super(scope, id);
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
          AppInstanceUserArn: this.input.appInstanceUserArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelsModeratedByAppInstanceUser.Channels', props);
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
          AppInstanceUserArn: this.input.appInstanceUserArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannelsModeratedByAppInstanceUser.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListMeetingTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListMeetingTagsRequest) {
    super(scope, id);
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
          MeetingId: this.input.meetingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMeetingTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ChimeTag[];
  }

}

export class ChimeListMeetings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListMeetingsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMeetings.Meetings', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMeetings.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListPhoneNumberOrders extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListPhoneNumberOrdersRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPhoneNumberOrders.PhoneNumberOrders', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPhoneNumberOrders.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListPhoneNumbers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListPhoneNumbersRequest) {
    super(scope, id);
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
          Status: this.input.status,
          ProductType: this.input.productType,
          FilterName: this.input.filterName,
          FilterValue: this.input.filterValue,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPhoneNumbers.PhoneNumbers', props);
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
          Status: this.input.status,
          ProductType: this.input.productType,
          FilterName: this.input.filterName,
          FilterValue: this.input.filterValue,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPhoneNumbers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListProxySessions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListProxySessionsRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Status: this.input.status,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProxySessions.ProxySessions', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Status: this.input.status,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProxySessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListRoomMemberships extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListRoomMembershipsRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoomMemberships.RoomMemberships', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoomMemberships.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListRooms extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListRoomsRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          MemberId: this.input.memberId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRooms.Rooms', props);
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
          AccountId: this.input.accountId,
          MemberId: this.input.memberId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRooms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListSipMediaApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListSipMediaApplicationsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSipMediaApplications.SipMediaApplications', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSipMediaApplications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListSipRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListSipRulesRequest) {
    super(scope, id);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSipRules.SipRules', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSipRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ChimeTag[];
  }

}

export class ChimeListUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListUsersRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserEmail: this.input.userEmail,
          UserType: this.input.userType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.Users', props);
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
          AccountId: this.input.accountId,
          UserEmail: this.input.userEmail,
          UserType: this.input.userType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListVoiceConnectorGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListVoiceConnectorGroupsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVoiceConnectorGroups.VoiceConnectorGroups', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVoiceConnectorGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeListVoiceConnectorTerminationCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListVoiceConnectorTerminationCredentialsRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVoiceConnectorTerminationCredentials.Usernames', props);
    return resource.getResponseField('Usernames') as unknown as string[];
  }

}

export class ChimeListVoiceConnectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeListVoiceConnectorsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVoiceConnectors.VoiceConnectors', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVoiceConnectors.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimePutAppInstanceRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutAppInstanceRetentionSettingsRequest) {
    super(scope, id);
  }

  public get appInstanceRetentionSettings(): ChimePutAppInstanceRetentionSettingsAppInstanceRetentionSettings {
    return new ChimePutAppInstanceRetentionSettingsAppInstanceRetentionSettings(this, 'AppInstanceRetentionSettings', this.__resources, this.input);
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
          AppInstanceArn: this.input.appInstanceArn,
          AppInstanceRetentionSettings: {
            ChannelRetentionSettings: {
              RetentionDays: this.input.appInstanceRetentionSettings.channelRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppInstanceRetentionSettings.InitiateDeletionTimestamp', props);
    return resource.getResponseField('InitiateDeletionTimestamp') as unknown as string;
  }

}

export class ChimePutAppInstanceRetentionSettingsAppInstanceRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutAppInstanceRetentionSettingsRequest) {
    super(scope, id);
  }

  public get channelRetentionSettings(): ChimePutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings {
    return new ChimePutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings(this, 'ChannelRetentionSettings', this.__resources, this.input);
  }

}

export class ChimePutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutAppInstanceRetentionSettingsRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
          AppInstanceRetentionSettings: {
            ChannelRetentionSettings: {
              RetentionDays: this.input.appInstanceRetentionSettings.channelRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppInstanceRetentionSettings.AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays', props);
    return resource.getResponseField('AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimePutAppInstanceStreamingConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutAppInstanceStreamingConfigurationsRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
          AppInstanceStreamingConfigurations: this.input.appInstanceStreamingConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppInstanceStreamingConfigurations.AppInstanceStreamingConfigurations', props);
    return resource.getResponseField('AppInstanceStreamingConfigurations') as unknown as shapes.ChimeAppInstanceStreamingConfiguration[];
  }

}

export class ChimePutEventsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutEventsConfigurationRequest) {
    super(scope, id);
  }

  public get eventsConfiguration(): ChimePutEventsConfigurationEventsConfiguration {
    return new ChimePutEventsConfigurationEventsConfiguration(this, 'EventsConfiguration', this.__resources, this.input);
  }

}

export class ChimePutEventsConfigurationEventsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutEventsConfigurationRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          OutboundEventsHTTPSEndpoint: this.input.outboundEventsHttpsEndpoint,
          LambdaFunctionArn: this.input.lambdaFunctionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEventsConfiguration.EventsConfiguration.BotId', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          OutboundEventsHTTPSEndpoint: this.input.outboundEventsHttpsEndpoint,
          LambdaFunctionArn: this.input.lambdaFunctionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEventsConfiguration.EventsConfiguration.OutboundEventsHTTPSEndpoint', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          OutboundEventsHTTPSEndpoint: this.input.outboundEventsHttpsEndpoint,
          LambdaFunctionArn: this.input.lambdaFunctionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEventsConfiguration.EventsConfiguration.LambdaFunctionArn', props);
    return resource.getResponseField('EventsConfiguration.LambdaFunctionArn') as unknown as string;
  }

}

export class ChimePutRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutRetentionSettingsRequest) {
    super(scope, id);
  }

  public get retentionSettings(): ChimePutRetentionSettingsRetentionSettings {
    return new ChimePutRetentionSettingsRetentionSettings(this, 'RetentionSettings', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          RetentionSettings: {
            RoomRetentionSettings: {
              RetentionDays: this.input.retentionSettings.roomRetentionSettings?.retentionDays,
            },
            ConversationRetentionSettings: {
              RetentionDays: this.input.retentionSettings.conversationRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRetentionSettings.InitiateDeletionTimestamp', props);
    return resource.getResponseField('InitiateDeletionTimestamp') as unknown as string;
  }

}

export class ChimePutRetentionSettingsRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutRetentionSettingsRequest) {
    super(scope, id);
  }

  public get roomRetentionSettings(): ChimePutRetentionSettingsRetentionSettingsRoomRetentionSettings {
    return new ChimePutRetentionSettingsRetentionSettingsRoomRetentionSettings(this, 'RoomRetentionSettings', this.__resources, this.input);
  }

  public get conversationRetentionSettings(): ChimePutRetentionSettingsRetentionSettingsConversationRetentionSettings {
    return new ChimePutRetentionSettingsRetentionSettingsConversationRetentionSettings(this, 'ConversationRetentionSettings', this.__resources, this.input);
  }

}

export class ChimePutRetentionSettingsRetentionSettingsRoomRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutRetentionSettingsRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          RetentionSettings: {
            RoomRetentionSettings: {
              RetentionDays: this.input.retentionSettings.roomRetentionSettings?.retentionDays,
            },
            ConversationRetentionSettings: {
              RetentionDays: this.input.retentionSettings.conversationRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRetentionSettings.RetentionSettings.RoomRetentionSettings.RetentionDays', props);
    return resource.getResponseField('RetentionSettings.RoomRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimePutRetentionSettingsRetentionSettingsConversationRetentionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutRetentionSettingsRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          RetentionSettings: {
            RoomRetentionSettings: {
              RetentionDays: this.input.retentionSettings.roomRetentionSettings?.retentionDays,
            },
            ConversationRetentionSettings: {
              RetentionDays: this.input.retentionSettings.conversationRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRetentionSettings.RetentionSettings.ConversationRetentionSettings.RetentionDays', props);
    return resource.getResponseField('RetentionSettings.ConversationRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimePutSipMediaApplicationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutSipMediaApplicationLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get sipMediaApplicationLoggingConfiguration(): ChimePutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration {
    return new ChimePutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration(this, 'SipMediaApplicationLoggingConfiguration', this.__resources, this.input);
  }

}

export class ChimePutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutSipMediaApplicationLoggingConfigurationRequest) {
    super(scope, id);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
          SipMediaApplicationLoggingConfiguration: {
            EnableSipMediaApplicationMessageLogs: this.input.sipMediaApplicationLoggingConfiguration?.enableSipMediaApplicationMessageLogs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSipMediaApplicationLoggingConfiguration.SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs', props);
    return resource.getResponseField('SipMediaApplicationLoggingConfiguration.EnableSipMediaApplicationMessageLogs') as unknown as boolean;
  }

}

export class ChimePutVoiceConnectorEmergencyCallingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest) {
    super(scope, id);
  }

  public get emergencyCallingConfiguration(): ChimePutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration {
    return new ChimePutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration(this, 'EmergencyCallingConfiguration', this.__resources, this.input);
  }

}

export class ChimePutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          EmergencyCallingConfiguration: {
            DNIS: this.input.emergencyCallingConfiguration.dnis,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorEmergencyCallingConfiguration.EmergencyCallingConfiguration.DNIS', props);
    return resource.getResponseField('EmergencyCallingConfiguration.DNIS') as unknown as shapes.ChimeDnisEmergencyCallingConfiguration[];
  }

}

export class ChimePutVoiceConnectorLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get loggingConfiguration(): ChimePutVoiceConnectorLoggingConfigurationLoggingConfiguration {
    return new ChimePutVoiceConnectorLoggingConfigurationLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.input);
  }

}

export class ChimePutVoiceConnectorLoggingConfigurationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorLoggingConfigurationRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          LoggingConfiguration: {
            EnableSIPLogs: this.input.loggingConfiguration.enableSipLogs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorLoggingConfiguration.LoggingConfiguration.EnableSIPLogs', props);
    return resource.getResponseField('LoggingConfiguration.EnableSIPLogs') as unknown as boolean;
  }

}

export class ChimePutVoiceConnectorOrigination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorOriginationRequest) {
    super(scope, id);
  }

  public get origination(): ChimePutVoiceConnectorOriginationOrigination {
    return new ChimePutVoiceConnectorOriginationOrigination(this, 'Origination', this.__resources, this.input);
  }

}

export class ChimePutVoiceConnectorOriginationOrigination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorOriginationRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Origination: {
            Routes: this.input.origination.routes,
            Disabled: this.input.origination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorOrigination.Origination.Routes', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Origination: {
            Routes: this.input.origination.routes,
            Disabled: this.input.origination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorOrigination.Origination.Disabled', props);
    return resource.getResponseField('Origination.Disabled') as unknown as boolean;
  }

}

export class ChimePutVoiceConnectorProxy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorProxyRequest) {
    super(scope, id);
  }

  public get proxy(): ChimePutVoiceConnectorProxyProxy {
    return new ChimePutVoiceConnectorProxyProxy(this, 'Proxy', this.__resources, this.input);
  }

}

export class ChimePutVoiceConnectorProxyProxy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorProxyRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          DefaultSessionExpiryMinutes: this.input.defaultSessionExpiryMinutes,
          PhoneNumberPoolCountries: this.input.phoneNumberPoolCountries,
          FallBackPhoneNumber: this.input.fallBackPhoneNumber,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorProxy.Proxy.DefaultSessionExpiryMinutes', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          DefaultSessionExpiryMinutes: this.input.defaultSessionExpiryMinutes,
          PhoneNumberPoolCountries: this.input.phoneNumberPoolCountries,
          FallBackPhoneNumber: this.input.fallBackPhoneNumber,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorProxy.Proxy.Disabled', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          DefaultSessionExpiryMinutes: this.input.defaultSessionExpiryMinutes,
          PhoneNumberPoolCountries: this.input.phoneNumberPoolCountries,
          FallBackPhoneNumber: this.input.fallBackPhoneNumber,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorProxy.Proxy.FallBackPhoneNumber', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          DefaultSessionExpiryMinutes: this.input.defaultSessionExpiryMinutes,
          PhoneNumberPoolCountries: this.input.phoneNumberPoolCountries,
          FallBackPhoneNumber: this.input.fallBackPhoneNumber,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorProxy.Proxy.PhoneNumberCountries', props);
    return resource.getResponseField('Proxy.PhoneNumberCountries') as unknown as string[];
  }

}

export class ChimePutVoiceConnectorStreamingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorStreamingConfigurationRequest) {
    super(scope, id);
  }

  public get streamingConfiguration(): ChimePutVoiceConnectorStreamingConfigurationStreamingConfiguration {
    return new ChimePutVoiceConnectorStreamingConfigurationStreamingConfiguration(this, 'StreamingConfiguration', this.__resources, this.input);
  }

}

export class ChimePutVoiceConnectorStreamingConfigurationStreamingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorStreamingConfigurationRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          StreamingConfiguration: {
            DataRetentionInHours: this.input.streamingConfiguration.dataRetentionInHours,
            Disabled: this.input.streamingConfiguration.disabled,
            StreamingNotificationTargets: this.input.streamingConfiguration.streamingNotificationTargets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorStreamingConfiguration.StreamingConfiguration.DataRetentionInHours', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          StreamingConfiguration: {
            DataRetentionInHours: this.input.streamingConfiguration.dataRetentionInHours,
            Disabled: this.input.streamingConfiguration.disabled,
            StreamingNotificationTargets: this.input.streamingConfiguration.streamingNotificationTargets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorStreamingConfiguration.StreamingConfiguration.Disabled', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          StreamingConfiguration: {
            DataRetentionInHours: this.input.streamingConfiguration.dataRetentionInHours,
            Disabled: this.input.streamingConfiguration.disabled,
            StreamingNotificationTargets: this.input.streamingConfiguration.streamingNotificationTargets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorStreamingConfiguration.StreamingConfiguration.StreamingNotificationTargets', props);
    return resource.getResponseField('StreamingConfiguration.StreamingNotificationTargets') as unknown as shapes.ChimeStreamingNotificationTarget[];
  }

}

export class ChimePutVoiceConnectorTermination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorTerminationRequest) {
    super(scope, id);
  }

  public get termination(): ChimePutVoiceConnectorTerminationTermination {
    return new ChimePutVoiceConnectorTerminationTermination(this, 'Termination', this.__resources, this.input);
  }

}

export class ChimePutVoiceConnectorTerminationTermination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimePutVoiceConnectorTerminationRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Termination: {
            CpsLimit: this.input.termination.cpsLimit,
            DefaultPhoneNumber: this.input.termination.defaultPhoneNumber,
            CallingRegions: this.input.termination.callingRegions,
            CidrAllowedList: this.input.termination.cidrAllowedList,
            Disabled: this.input.termination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorTermination.Termination.CpsLimit', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Termination: {
            CpsLimit: this.input.termination.cpsLimit,
            DefaultPhoneNumber: this.input.termination.defaultPhoneNumber,
            CallingRegions: this.input.termination.callingRegions,
            CidrAllowedList: this.input.termination.cidrAllowedList,
            Disabled: this.input.termination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorTermination.Termination.DefaultPhoneNumber', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Termination: {
            CpsLimit: this.input.termination.cpsLimit,
            DefaultPhoneNumber: this.input.termination.defaultPhoneNumber,
            CallingRegions: this.input.termination.callingRegions,
            CidrAllowedList: this.input.termination.cidrAllowedList,
            Disabled: this.input.termination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorTermination.Termination.CallingRegions', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Termination: {
            CpsLimit: this.input.termination.cpsLimit,
            DefaultPhoneNumber: this.input.termination.defaultPhoneNumber,
            CallingRegions: this.input.termination.callingRegions,
            CidrAllowedList: this.input.termination.cidrAllowedList,
            Disabled: this.input.termination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorTermination.Termination.CidrAllowedList', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Termination: {
            CpsLimit: this.input.termination.cpsLimit,
            DefaultPhoneNumber: this.input.termination.defaultPhoneNumber,
            CallingRegions: this.input.termination.callingRegions,
            CidrAllowedList: this.input.termination.cidrAllowedList,
            Disabled: this.input.termination.disabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutVoiceConnectorTermination.Termination.Disabled', props);
    return resource.getResponseField('Termination.Disabled') as unknown as boolean;
  }

}

export class ChimeRedactChannelMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeRedactChannelMessageRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RedactChannelMessage.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RedactChannelMessage.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class ChimeRegenerateSecurityToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeRegenerateSecurityTokenRequest) {
    super(scope, id);
  }

  public get bot(): ChimeRegenerateSecurityTokenBot {
    return new ChimeRegenerateSecurityTokenBot(this, 'Bot', this.__resources, this.input);
  }

}

export class ChimeRegenerateSecurityTokenBot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeRegenerateSecurityTokenRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegenerateSecurityToken.Bot.BotId', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegenerateSecurityToken.Bot.UserId', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegenerateSecurityToken.Bot.DisplayName', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegenerateSecurityToken.Bot.BotType', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegenerateSecurityToken.Bot.Disabled', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegenerateSecurityToken.Bot.CreatedTimestamp', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegenerateSecurityToken.Bot.UpdatedTimestamp', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegenerateSecurityToken.Bot.BotEmail', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegenerateSecurityToken.Bot.SecurityToken', props);
    return resource.getResponseField('Bot.SecurityToken') as unknown as string;
  }

}

export class ChimeResetPersonalPin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeResetPersonalPinRequest) {
    super(scope, id);
  }

  public get user(): ChimeResetPersonalPinUser {
    return new ChimeResetPersonalPinUser(this, 'User', this.__resources, this.input);
  }

}

export class ChimeResetPersonalPinUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeResetPersonalPinRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.UserId', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.AccountId', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.PrimaryEmail', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.PrimaryProvisionedNumber', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.DisplayName', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.LicenseType', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.UserType', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.UserRegistrationStatus', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.UserInvitationStatus', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.RegisteredOn', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.InvitedOn', props);
    return resource.getResponseField('User.InvitedOn') as unknown as string;
  }

  public get alexaForBusinessMetadata(): ChimeResetPersonalPinUserAlexaForBusinessMetadata {
    return new ChimeResetPersonalPinUserAlexaForBusinessMetadata(this, 'AlexaForBusinessMetadata', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.PersonalPIN', props);
    return resource.getResponseField('User.PersonalPIN') as unknown as string;
  }

}

export class ChimeResetPersonalPinUserAlexaForBusinessMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeResetPersonalPinRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetPersonalPIN.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn') as unknown as string;
  }

}

export class ChimeRestorePhoneNumber extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeRestorePhoneNumberRequest) {
    super(scope, id);
  }

  public get phoneNumber(): ChimeRestorePhoneNumberPhoneNumber {
    return new ChimeRestorePhoneNumberPhoneNumber(this, 'PhoneNumber', this.__resources, this.input);
  }

}

export class ChimeRestorePhoneNumberPhoneNumber extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeRestorePhoneNumberRequest) {
    super(scope, id);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.PhoneNumberId', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.E164PhoneNumber', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.Type', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.ProductType', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.Status', props);
    return resource.getResponseField('PhoneNumber.Status') as unknown as string;
  }

  public get capabilities(): ChimeRestorePhoneNumberPhoneNumberCapabilities {
    return new ChimeRestorePhoneNumberPhoneNumberCapabilities(this, 'Capabilities', this.__resources, this.input);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.Associations', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.CallingName', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.CallingNameStatus', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.CreatedTimestamp', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.UpdatedTimestamp', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.DeletionTimestamp', props);
    return resource.getResponseField('PhoneNumber.DeletionTimestamp') as unknown as string;
  }

}

export class ChimeRestorePhoneNumberPhoneNumberCapabilities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeRestorePhoneNumberRequest) {
    super(scope, id);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.Capabilities.InboundCall', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.Capabilities.OutboundCall', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.Capabilities.InboundSMS', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.Capabilities.OutboundSMS', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.Capabilities.InboundMMS', props);
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
          PhoneNumberId: this.input.phoneNumberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestorePhoneNumber.PhoneNumber.Capabilities.OutboundMMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundMMS') as unknown as boolean;
  }

}

export class ChimeSearchAvailablePhoneNumbers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeSearchAvailablePhoneNumbersRequest) {
    super(scope, id);
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
          AreaCode: this.input.areaCode,
          City: this.input.city,
          Country: this.input.country,
          State: this.input.state,
          TollFreePrefix: this.input.tollFreePrefix,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchAvailablePhoneNumbers.E164PhoneNumbers', props);
    return resource.getResponseField('E164PhoneNumbers') as unknown as string[];
  }

}

export class ChimeSendChannelMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeSendChannelMessageRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          Content: this.input.content,
          Type: this.input.type,
          Persistence: this.input.persistence,
          Metadata: this.input.metadata,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendChannelMessage.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          Content: this.input.content,
          Type: this.input.type,
          Persistence: this.input.persistence,
          Metadata: this.input.metadata,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendChannelMessage.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class ChimeUpdateAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateAccountRequest) {
    super(scope, id);
  }

  public get account(): ChimeUpdateAccountAccount {
    return new ChimeUpdateAccountAccount(this, 'Account', this.__resources, this.input);
  }

}

export class ChimeUpdateAccountAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateAccountRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.Account.AwsAccountId', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.Account.AccountId', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.Account.Name', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.Account.AccountType', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.Account.CreatedTimestamp', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.Account.DefaultLicense', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.Account.SupportedLicenses', props);
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
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.Account.SigninDelegateGroups', props);
    return resource.getResponseField('Account.SigninDelegateGroups') as unknown as shapes.ChimeSigninDelegateGroup[];
  }

}

export class ChimeUpdateAppInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateAppInstanceRequest) {
    super(scope, id);
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
          AppInstanceArn: this.input.appInstanceArn,
          Name: this.input.name,
          Metadata: this.input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAppInstance.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

}

export class ChimeUpdateAppInstanceUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateAppInstanceUserRequest) {
    super(scope, id);
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
          AppInstanceUserArn: this.input.appInstanceUserArn,
          Name: this.input.name,
          Metadata: this.input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAppInstanceUser.AppInstanceUserArn', props);
    return resource.getResponseField('AppInstanceUserArn') as unknown as string;
  }

}

export class ChimeUpdateBot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateBotRequest) {
    super(scope, id);
  }

  public get bot(): ChimeUpdateBotBot {
    return new ChimeUpdateBotBot(this, 'Bot', this.__resources, this.input);
  }

}

export class ChimeUpdateBotBot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateBotRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBot.Bot.BotId', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBot.Bot.UserId', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBot.Bot.DisplayName', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBot.Bot.BotType', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBot.Bot.Disabled', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBot.Bot.CreatedTimestamp', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBot.Bot.UpdatedTimestamp', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBot.Bot.BotEmail', props);
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
          AccountId: this.input.accountId,
          BotId: this.input.botId,
          Disabled: this.input.disabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBot.Bot.SecurityToken', props);
    return resource.getResponseField('Bot.SecurityToken') as unknown as string;
  }

}

export class ChimeUpdateChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateChannelRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          Name: this.input.name,
          Mode: this.input.mode,
          Metadata: this.input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannel.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

}

export class ChimeUpdateChannelMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateChannelMessageRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
          Content: this.input.content,
          Metadata: this.input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannelMessage.ChannelArn', props);
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
          ChannelArn: this.input.channelArn,
          MessageId: this.input.messageId,
          Content: this.input.content,
          Metadata: this.input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannelMessage.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class ChimeUpdateChannelReadMarker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateChannelReadMarkerRequest) {
    super(scope, id);
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
          ChannelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannelReadMarker.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

}

export class ChimeUpdatePhoneNumber extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdatePhoneNumberRequest) {
    super(scope, id);
  }

  public get phoneNumber(): ChimeUpdatePhoneNumberPhoneNumber {
    return new ChimeUpdatePhoneNumberPhoneNumber(this, 'PhoneNumber', this.__resources, this.input);
  }

}

export class ChimeUpdatePhoneNumberPhoneNumber extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdatePhoneNumberRequest) {
    super(scope, id);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.PhoneNumberId', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.E164PhoneNumber', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.Type', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.ProductType', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.Status', props);
    return resource.getResponseField('PhoneNumber.Status') as unknown as string;
  }

  public get capabilities(): ChimeUpdatePhoneNumberPhoneNumberCapabilities {
    return new ChimeUpdatePhoneNumberPhoneNumberCapabilities(this, 'Capabilities', this.__resources, this.input);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.Associations', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.CallingName', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.CallingNameStatus', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.CreatedTimestamp', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.UpdatedTimestamp', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.DeletionTimestamp', props);
    return resource.getResponseField('PhoneNumber.DeletionTimestamp') as unknown as string;
  }

}

export class ChimeUpdatePhoneNumberPhoneNumberCapabilities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdatePhoneNumberRequest) {
    super(scope, id);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.Capabilities.InboundCall', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.Capabilities.OutboundCall', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.Capabilities.InboundSMS', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.Capabilities.OutboundSMS', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.Capabilities.InboundMMS', props);
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
          PhoneNumberId: this.input.phoneNumberId,
          ProductType: this.input.productType,
          CallingName: this.input.callingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePhoneNumber.PhoneNumber.Capabilities.OutboundMMS', props);
    return resource.getResponseField('PhoneNumber.Capabilities.OutboundMMS') as unknown as boolean;
  }

}

export class ChimeUpdateProxySession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateProxySessionRequest) {
    super(scope, id);
  }

  public get proxySession(): ChimeUpdateProxySessionProxySession {
    return new ChimeUpdateProxySessionProxySession(this, 'ProxySession', this.__resources, this.input);
  }

}

export class ChimeUpdateProxySessionProxySession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateProxySessionRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.VoiceConnectorId', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.ProxySessionId', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.Name', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.Status', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.ExpiryMinutes', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.Capabilities', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.CreatedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.UpdatedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.EndedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.Participants', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.NumberSelectionBehavior', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.GeoMatchLevel', props);
    return resource.getResponseField('ProxySession.GeoMatchLevel') as unknown as string;
  }

  public get geoMatchParams(): ChimeUpdateProxySessionProxySessionGeoMatchParams {
    return new ChimeUpdateProxySessionProxySessionGeoMatchParams(this, 'GeoMatchParams', this.__resources, this.input);
  }

}

export class ChimeUpdateProxySessionProxySessionGeoMatchParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateProxySessionRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.GeoMatchParams.Country', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          ProxySessionId: this.input.proxySessionId,
          Capabilities: this.input.capabilities,
          ExpiryMinutes: this.input.expiryMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProxySession.ProxySession.GeoMatchParams.AreaCode', props);
    return resource.getResponseField('ProxySession.GeoMatchParams.AreaCode') as unknown as string;
  }

}

export class ChimeUpdateRoom extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateRoomRequest) {
    super(scope, id);
  }

  public get room(): ChimeUpdateRoomRoom {
    return new ChimeUpdateRoomRoom(this, 'Room', this.__resources, this.input);
  }

}

export class ChimeUpdateRoomRoom extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateRoomRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoom.Room.RoomId', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoom.Room.Name', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoom.Room.AccountId', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoom.Room.CreatedBy', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoom.Room.CreatedTimestamp', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoom.Room.UpdatedTimestamp', props);
    return resource.getResponseField('Room.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeUpdateRoomMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateRoomMembershipRequest) {
    super(scope, id);
  }

  public get roomMembership(): ChimeUpdateRoomMembershipRoomMembership {
    return new ChimeUpdateRoomMembershipRoomMembership(this, 'RoomMembership', this.__resources, this.input);
  }

}

export class ChimeUpdateRoomMembershipRoomMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateRoomMembershipRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoomMembership.RoomMembership.RoomId', props);
    return resource.getResponseField('RoomMembership.RoomId') as unknown as string;
  }

  public get member(): ChimeUpdateRoomMembershipRoomMembershipMember {
    return new ChimeUpdateRoomMembershipRoomMembershipMember(this, 'Member', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoomMembership.RoomMembership.Role', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoomMembership.RoomMembership.InvitedBy', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoomMembership.RoomMembership.UpdatedTimestamp', props);
    return resource.getResponseField('RoomMembership.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeUpdateRoomMembershipRoomMembershipMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateRoomMembershipRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoomMembership.RoomMembership.Member.MemberId', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoomMembership.RoomMembership.Member.MemberType', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoomMembership.RoomMembership.Member.Email', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoomMembership.RoomMembership.Member.FullName', props);
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
          AccountId: this.input.accountId,
          RoomId: this.input.roomId,
          MemberId: this.input.memberId,
          Role: this.input.role,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoomMembership.RoomMembership.Member.AccountId', props);
    return resource.getResponseField('RoomMembership.Member.AccountId') as unknown as string;
  }

}

export class ChimeUpdateSipMediaApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateSipMediaApplicationRequest) {
    super(scope, id);
  }

  public get sipMediaApplication(): ChimeUpdateSipMediaApplicationSipMediaApplication {
    return new ChimeUpdateSipMediaApplicationSipMediaApplication(this, 'SipMediaApplication', this.__resources, this.input);
  }

}

export class ChimeUpdateSipMediaApplicationSipMediaApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateSipMediaApplicationRequest) {
    super(scope, id);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipMediaApplication.SipMediaApplication.SipMediaApplicationId', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipMediaApplication.SipMediaApplication.AwsRegion', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipMediaApplication.SipMediaApplication.Name', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipMediaApplication.SipMediaApplication.Endpoints', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipMediaApplication.SipMediaApplication.CreatedTimestamp', props);
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
          SipMediaApplicationId: this.input.sipMediaApplicationId,
          Name: this.input.name,
          Endpoints: this.input.endpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipMediaApplication.SipMediaApplication.UpdatedTimestamp', props);
    return resource.getResponseField('SipMediaApplication.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeUpdateSipRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateSipRuleRequest) {
    super(scope, id);
  }

  public get sipRule(): ChimeUpdateSipRuleSipRule {
    return new ChimeUpdateSipRuleSipRule(this, 'SipRule', this.__resources, this.input);
  }

}

export class ChimeUpdateSipRuleSipRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateSipRuleRequest) {
    super(scope, id);
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
          SipRuleId: this.input.sipRuleId,
          Name: this.input.name,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipRule.SipRule.SipRuleId', props);
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
          SipRuleId: this.input.sipRuleId,
          Name: this.input.name,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipRule.SipRule.Name', props);
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
          SipRuleId: this.input.sipRuleId,
          Name: this.input.name,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipRule.SipRule.Disabled', props);
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
          SipRuleId: this.input.sipRuleId,
          Name: this.input.name,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipRule.SipRule.TriggerType', props);
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
          SipRuleId: this.input.sipRuleId,
          Name: this.input.name,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipRule.SipRule.TriggerValue', props);
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
          SipRuleId: this.input.sipRuleId,
          Name: this.input.name,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipRule.SipRule.TargetApplications', props);
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
          SipRuleId: this.input.sipRuleId,
          Name: this.input.name,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipRule.SipRule.CreatedTimestamp', props);
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
          SipRuleId: this.input.sipRuleId,
          Name: this.input.name,
          Disabled: this.input.disabled,
          TargetApplications: this.input.targetApplications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSipRule.SipRule.UpdatedTimestamp', props);
    return resource.getResponseField('SipRule.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeUpdateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateUserRequest) {
    super(scope, id);
  }

  public get user(): ChimeUpdateUserUser {
    return new ChimeUpdateUserUser(this, 'User', this.__resources, this.input);
  }

}

export class ChimeUpdateUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateUserRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.UserId', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.AccountId', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.PrimaryEmail', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.PrimaryProvisionedNumber', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.DisplayName', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.LicenseType', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.UserType', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.UserRegistrationStatus', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.UserInvitationStatus', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.RegisteredOn', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.InvitedOn', props);
    return resource.getResponseField('User.InvitedOn') as unknown as string;
  }

  public get alexaForBusinessMetadata(): ChimeUpdateUserUserAlexaForBusinessMetadata {
    return new ChimeUpdateUserUserAlexaForBusinessMetadata(this, 'AlexaForBusinessMetadata', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.PersonalPIN', props);
    return resource.getResponseField('User.PersonalPIN') as unknown as string;
  }

}

export class ChimeUpdateUserUserAlexaForBusinessMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateUserRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.AlexaForBusinessMetadata.IsAlexaForBusinessEnabled', props);
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
          AccountId: this.input.accountId,
          UserId: this.input.userId,
          LicenseType: this.input.licenseType,
          UserType: this.input.userType,
          AlexaForBusinessMetadata: {
            IsAlexaForBusinessEnabled: this.input.alexaForBusinessMetadata?.isAlexaForBusinessEnabled,
            AlexaForBusinessRoomArn: this.input.alexaForBusinessMetadata?.alexaForBusinessRoomArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn', props);
    return resource.getResponseField('User.AlexaForBusinessMetadata.AlexaForBusinessRoomArn') as unknown as string;
  }

}

export class ChimeUpdateVoiceConnector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateVoiceConnectorRequest) {
    super(scope, id);
  }

  public get voiceConnector(): ChimeUpdateVoiceConnectorVoiceConnector {
    return new ChimeUpdateVoiceConnectorVoiceConnector(this, 'VoiceConnector', this.__resources, this.input);
  }

}

export class ChimeUpdateVoiceConnectorVoiceConnector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateVoiceConnectorRequest) {
    super(scope, id);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Name: this.input.name,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnector.VoiceConnector.VoiceConnectorId', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Name: this.input.name,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnector.VoiceConnector.AwsRegion', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Name: this.input.name,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnector.VoiceConnector.Name', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Name: this.input.name,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnector.VoiceConnector.OutboundHostName', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Name: this.input.name,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnector.VoiceConnector.RequireEncryption', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Name: this.input.name,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnector.VoiceConnector.CreatedTimestamp', props);
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
          VoiceConnectorId: this.input.voiceConnectorId,
          Name: this.input.name,
          RequireEncryption: this.input.requireEncryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnector.VoiceConnector.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnector.UpdatedTimestamp') as unknown as string;
  }

}

export class ChimeUpdateVoiceConnectorGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateVoiceConnectorGroupRequest) {
    super(scope, id);
  }

  public get voiceConnectorGroup(): ChimeUpdateVoiceConnectorGroupVoiceConnectorGroup {
    return new ChimeUpdateVoiceConnectorGroupVoiceConnectorGroup(this, 'VoiceConnectorGroup', this.__resources, this.input);
  }

}

export class ChimeUpdateVoiceConnectorGroupVoiceConnectorGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ChimeUpdateVoiceConnectorGroupRequest) {
    super(scope, id);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
          Name: this.input.name,
          VoiceConnectorItems: this.input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorGroupId', props);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
          Name: this.input.name,
          VoiceConnectorItems: this.input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnectorGroup.VoiceConnectorGroup.Name', props);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
          Name: this.input.name,
          VoiceConnectorItems: this.input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnectorGroup.VoiceConnectorGroup.VoiceConnectorItems', props);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
          Name: this.input.name,
          VoiceConnectorItems: this.input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnectorGroup.VoiceConnectorGroup.CreatedTimestamp', props);
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
          VoiceConnectorGroupId: this.input.voiceConnectorGroupId,
          Name: this.input.name,
          VoiceConnectorItems: this.input.voiceConnectorItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVoiceConnectorGroup.VoiceConnectorGroup.UpdatedTimestamp', props);
    return resource.getResponseField('VoiceConnectorGroup.UpdatedTimestamp') as unknown as string;
  }

}

