import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ChimeSdkMessagingClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchCreateChannelMembership(input: shapes.ChimeSdkMessagingBatchCreateChannelMembershipRequest): ChimeSDKMessagingResponsesBatchCreateChannelMembership {
    return new ChimeSDKMessagingResponsesBatchCreateChannelMembership(this, this.__resources, input);
  }

  public createChannel(input: shapes.ChimeSdkMessagingCreateChannelRequest): ChimeSDKMessagingResponsesCreateChannel {
    return new ChimeSDKMessagingResponsesCreateChannel(this, this.__resources, input);
  }

  public createChannelBan(input: shapes.ChimeSdkMessagingCreateChannelBanRequest): ChimeSDKMessagingResponsesCreateChannelBan {
    return new ChimeSDKMessagingResponsesCreateChannelBan(this, this.__resources, input);
  }

  public createChannelMembership(input: shapes.ChimeSdkMessagingCreateChannelMembershipRequest): ChimeSDKMessagingResponsesCreateChannelMembership {
    return new ChimeSDKMessagingResponsesCreateChannelMembership(this, this.__resources, input);
  }

  public createChannelModerator(input: shapes.ChimeSdkMessagingCreateChannelModeratorRequest): ChimeSDKMessagingResponsesCreateChannelModerator {
    return new ChimeSDKMessagingResponsesCreateChannelModerator(this, this.__resources, input);
  }

  public deleteChannel(input: shapes.ChimeSdkMessagingDeleteChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannel',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DeleteChannel'),
        parameters: {
          ChannelArn: input.channelArn,
          ChimeBearer: input.chimeBearer,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannel', props);
  }

  public deleteChannelBan(input: shapes.ChimeSdkMessagingDeleteChannelBanRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannelBan',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DeleteChannelBan'),
        parameters: {
          ChannelArn: input.channelArn,
          MemberArn: input.memberArn,
          ChimeBearer: input.chimeBearer,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannelBan', props);
  }

  public deleteChannelMembership(input: shapes.ChimeSdkMessagingDeleteChannelMembershipRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DeleteChannelMembership'),
        parameters: {
          ChannelArn: input.channelArn,
          MemberArn: input.memberArn,
          ChimeBearer: input.chimeBearer,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannelMembership', props);
  }

  public deleteChannelMessage(input: shapes.ChimeSdkMessagingDeleteChannelMessageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannelMessage',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DeleteChannelMessage'),
        parameters: {
          ChannelArn: input.channelArn,
          MessageId: input.messageId,
          ChimeBearer: input.chimeBearer,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannelMessage', props);
  }

  public deleteChannelModerator(input: shapes.ChimeSdkMessagingDeleteChannelModeratorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannelModerator',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DeleteChannelModerator'),
        parameters: {
          ChannelArn: input.channelArn,
          ChannelModeratorArn: input.channelModeratorArn,
          ChimeBearer: input.chimeBearer,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannelModerator', props);
  }

  public describeChannel(input: shapes.ChimeSdkMessagingDescribeChannelRequest): ChimeSDKMessagingResponsesDescribeChannel {
    return new ChimeSDKMessagingResponsesDescribeChannel(this, this.__resources, input);
  }

  public describeChannelBan(input: shapes.ChimeSdkMessagingDescribeChannelBanRequest): ChimeSDKMessagingResponsesDescribeChannelBan {
    return new ChimeSDKMessagingResponsesDescribeChannelBan(this, this.__resources, input);
  }

  public describeChannelMembership(input: shapes.ChimeSdkMessagingDescribeChannelMembershipRequest): ChimeSDKMessagingResponsesDescribeChannelMembership {
    return new ChimeSDKMessagingResponsesDescribeChannelMembership(this, this.__resources, input);
  }

  public describeChannelMembershipForAppInstanceUser(input: shapes.ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest): ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUser {
    return new ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUser(this, this.__resources, input);
  }

  public describeChannelModeratedByAppInstanceUser(input: shapes.ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest): ChimeSDKMessagingResponsesDescribeChannelModeratedByAppInstanceUser {
    return new ChimeSDKMessagingResponsesDescribeChannelModeratedByAppInstanceUser(this, this.__resources, input);
  }

  public describeChannelModerator(input: shapes.ChimeSdkMessagingDescribeChannelModeratorRequest): ChimeSDKMessagingResponsesDescribeChannelModerator {
    return new ChimeSDKMessagingResponsesDescribeChannelModerator(this, this.__resources, input);
  }

  public fetchChannelMessage(input: shapes.ChimeSdkMessagingGetChannelMessageRequest): ChimeSDKMessagingResponsesFetchChannelMessage {
    return new ChimeSDKMessagingResponsesFetchChannelMessage(this, this.__resources, input);
  }

  public fetchMessagingSessionEndpoint(): ChimeSDKMessagingResponsesFetchMessagingSessionEndpoint {
    return new ChimeSDKMessagingResponsesFetchMessagingSessionEndpoint(this, this.__resources);
  }

  public listChannelBans(input: shapes.ChimeSdkMessagingListChannelBansRequest): ChimeSDKMessagingResponsesListChannelBans {
    return new ChimeSDKMessagingResponsesListChannelBans(this, this.__resources, input);
  }

  public listChannelMemberships(input: shapes.ChimeSdkMessagingListChannelMembershipsRequest): ChimeSDKMessagingResponsesListChannelMemberships {
    return new ChimeSDKMessagingResponsesListChannelMemberships(this, this.__resources, input);
  }

  public listChannelMembershipsForAppInstanceUser(input: shapes.ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest): ChimeSDKMessagingResponsesListChannelMembershipsForAppInstanceUser {
    return new ChimeSDKMessagingResponsesListChannelMembershipsForAppInstanceUser(this, this.__resources, input);
  }

  public listChannelMessages(input: shapes.ChimeSdkMessagingListChannelMessagesRequest): ChimeSDKMessagingResponsesListChannelMessages {
    return new ChimeSDKMessagingResponsesListChannelMessages(this, this.__resources, input);
  }

  public listChannelModerators(input: shapes.ChimeSdkMessagingListChannelModeratorsRequest): ChimeSDKMessagingResponsesListChannelModerators {
    return new ChimeSDKMessagingResponsesListChannelModerators(this, this.__resources, input);
  }

  public listChannels(input: shapes.ChimeSdkMessagingListChannelsRequest): ChimeSDKMessagingResponsesListChannels {
    return new ChimeSDKMessagingResponsesListChannels(this, this.__resources, input);
  }

  public listChannelsModeratedByAppInstanceUser(input: shapes.ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest): ChimeSDKMessagingResponsesListChannelsModeratedByAppInstanceUser {
    return new ChimeSDKMessagingResponsesListChannelsModeratedByAppInstanceUser(this, this.__resources, input);
  }

  public redactChannelMessage(input: shapes.ChimeSdkMessagingRedactChannelMessageRequest): ChimeSDKMessagingResponsesRedactChannelMessage {
    return new ChimeSDKMessagingResponsesRedactChannelMessage(this, this.__resources, input);
  }

  public sendChannelMessage(input: shapes.ChimeSdkMessagingSendChannelMessageRequest): ChimeSDKMessagingResponsesSendChannelMessage {
    return new ChimeSDKMessagingResponsesSendChannelMessage(this, this.__resources, input);
  }

  public updateChannel(input: shapes.ChimeSdkMessagingUpdateChannelRequest): ChimeSDKMessagingResponsesUpdateChannel {
    return new ChimeSDKMessagingResponsesUpdateChannel(this, this.__resources, input);
  }

  public updateChannelMessage(input: shapes.ChimeSdkMessagingUpdateChannelMessageRequest): ChimeSDKMessagingResponsesUpdateChannelMessage {
    return new ChimeSDKMessagingResponsesUpdateChannelMessage(this, this.__resources, input);
  }

  public updateChannelReadMarker(input: shapes.ChimeSdkMessagingUpdateChannelReadMarkerRequest): ChimeSDKMessagingResponsesUpdateChannelReadMarker {
    return new ChimeSDKMessagingResponsesUpdateChannelReadMarker(this, this.__resources, input);
  }

}

export class ChimeSDKMessagingResponsesBatchCreateChannelMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingBatchCreateChannelMembershipRequest) {
  }

  public get batchChannelMemberships(): ChimeSDKMessagingResponsesBatchCreateChannelMembershipBatchChannelMemberships {
    return new ChimeSDKMessagingResponsesBatchCreateChannelMembershipBatchChannelMemberships(this.__scope, this.__resources, this.__input);
  }

  public get errors(): shapes.ChimeSdkMessagingBatchCreateChannelMembershipError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.BatchCreateChannelMembership.Errors'),
        outputPath: 'Errors',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MemberArns: this.__input.memberArns,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateChannelMembership.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.ChimeSdkMessagingBatchCreateChannelMembershipError[];
  }

}

export class ChimeSDKMessagingResponsesBatchCreateChannelMembershipBatchChannelMemberships {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingBatchCreateChannelMembershipRequest) {
  }

  public get invitedBy(): ChimeSDKMessagingResponsesBatchCreateChannelMembershipBatchChannelMembershipsInvitedBy {
    return new ChimeSDKMessagingResponsesBatchCreateChannelMembershipBatchChannelMembershipsInvitedBy(this.__scope, this.__resources, this.__input);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.BatchCreateChannelMembership.BatchChannelMemberships.Type'),
        outputPath: 'BatchChannelMemberships.Type',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MemberArns: this.__input.memberArns,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateChannelMembership.BatchChannelMemberships.Type', props);
    return resource.getResponseField('BatchChannelMemberships.Type') as unknown as string;
  }

  public get members(): shapes.ChimeSdkMessagingIdentity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.BatchCreateChannelMembership.BatchChannelMemberships.Members'),
        outputPath: 'BatchChannelMemberships.Members',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MemberArns: this.__input.memberArns,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateChannelMembership.BatchChannelMemberships.Members', props);
    return resource.getResponseField('BatchChannelMemberships.Members') as unknown as shapes.ChimeSdkMessagingIdentity[];
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.BatchCreateChannelMembership.BatchChannelMemberships.ChannelArn'),
        outputPath: 'BatchChannelMemberships.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MemberArns: this.__input.memberArns,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateChannelMembership.BatchChannelMemberships.ChannelArn', props);
    return resource.getResponseField('BatchChannelMemberships.ChannelArn') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesBatchCreateChannelMembershipBatchChannelMembershipsInvitedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingBatchCreateChannelMembershipRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.BatchCreateChannelMembership.BatchChannelMemberships.InvitedBy.Arn'),
        outputPath: 'BatchChannelMemberships.InvitedBy.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MemberArns: this.__input.memberArns,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateChannelMembership.BatchChannelMemberships.InvitedBy.Arn', props);
    return resource.getResponseField('BatchChannelMemberships.InvitedBy.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.BatchCreateChannelMembership.BatchChannelMemberships.InvitedBy.Name'),
        outputPath: 'BatchChannelMemberships.InvitedBy.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MemberArns: this.__input.memberArns,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateChannelMembership.BatchChannelMemberships.InvitedBy.Name', props);
    return resource.getResponseField('BatchChannelMemberships.InvitedBy.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesCreateChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingCreateChannelRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.CreateChannel.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          Name: this.__input.name,
          Mode: this.__input.mode,
          Privacy: this.__input.privacy,
          Metadata: this.__input.metadata,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesCreateChannelBan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingCreateChannelBanRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelBan',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.CreateChannelBan.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelBan.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get member(): ChimeSDKMessagingResponsesCreateChannelBanMember {
    return new ChimeSDKMessagingResponsesCreateChannelBanMember(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesCreateChannelBanMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingCreateChannelBanRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelBan',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.CreateChannelBan.Member.Arn'),
        outputPath: 'Member.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.CreateChannelBan.Member.Name'),
        outputPath: 'Member.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelBan.Member.Name', props);
    return resource.getResponseField('Member.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesCreateChannelMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingCreateChannelMembershipRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.CreateChannelMembership.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          Type: this.__input.type,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelMembership.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get member(): ChimeSDKMessagingResponsesCreateChannelMembershipMember {
    return new ChimeSDKMessagingResponsesCreateChannelMembershipMember(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesCreateChannelMembershipMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingCreateChannelMembershipRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.CreateChannelMembership.Member.Arn'),
        outputPath: 'Member.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          Type: this.__input.type,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.CreateChannelMembership.Member.Name'),
        outputPath: 'Member.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          Type: this.__input.type,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelMembership.Member.Name', props);
    return resource.getResponseField('Member.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesCreateChannelModerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingCreateChannelModeratorRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelModerator',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.CreateChannelModerator.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelModerator.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get channelModerator(): ChimeSDKMessagingResponsesCreateChannelModeratorChannelModerator {
    return new ChimeSDKMessagingResponsesCreateChannelModeratorChannelModerator(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesCreateChannelModeratorChannelModerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingCreateChannelModeratorRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannelModerator',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.CreateChannelModerator.ChannelModerator.Arn'),
        outputPath: 'ChannelModerator.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.CreateChannelModerator.ChannelModerator.Name'),
        outputPath: 'ChannelModerator.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannelModerator.ChannelModerator.Name', props);
    return resource.getResponseField('ChannelModerator.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelRequest) {
  }

  public get channel(): ChimeSDKMessagingResponsesDescribeChannelChannel {
    return new ChimeSDKMessagingResponsesDescribeChannelChannel(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannel.Channel.Name'),
        outputPath: 'Channel.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannel.Channel.ChannelArn'),
        outputPath: 'Channel.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannel.Channel.Mode'),
        outputPath: 'Channel.Mode',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannel.Channel.Privacy'),
        outputPath: 'Channel.Privacy',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannel.Channel.Metadata'),
        outputPath: 'Channel.Metadata',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.Metadata', props);
    return resource.getResponseField('Channel.Metadata') as unknown as string;
  }

  public get createdBy(): ChimeSDKMessagingResponsesDescribeChannelChannelCreatedBy {
    return new ChimeSDKMessagingResponsesDescribeChannelChannelCreatedBy(this.__scope, this.__resources, this.__input);
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannel.Channel.CreatedTimestamp'),
        outputPath: 'Channel.CreatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannel.Channel.LastMessageTimestamp'),
        outputPath: 'Channel.LastMessageTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannel.Channel.LastUpdatedTimestamp'),
        outputPath: 'Channel.LastUpdatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.LastUpdatedTimestamp', props);
    return resource.getResponseField('Channel.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelChannelCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannel.Channel.CreatedBy.Arn'),
        outputPath: 'Channel.CreatedBy.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannel.Channel.CreatedBy.Name'),
        outputPath: 'Channel.CreatedBy.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.Channel.CreatedBy.Name', props);
    return resource.getResponseField('Channel.CreatedBy.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelBan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelBanRequest) {
  }

  public get channelBan(): ChimeSDKMessagingResponsesDescribeChannelBanChannelBan {
    return new ChimeSDKMessagingResponsesDescribeChannelBanChannelBan(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelBanChannelBan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelBanRequest) {
  }

  public get member(): ChimeSDKMessagingResponsesDescribeChannelBanChannelBanMember {
    return new ChimeSDKMessagingResponsesDescribeChannelBanChannelBanMember(this.__scope, this.__resources, this.__input);
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelBan',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelBan.ChannelBan.ChannelArn'),
        outputPath: 'ChannelBan.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelBan.ChannelBan.CreatedTimestamp'),
        outputPath: 'ChannelBan.CreatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelBan.ChannelBan.CreatedTimestamp', props);
    return resource.getResponseField('ChannelBan.CreatedTimestamp') as unknown as string;
  }

  public get createdBy(): ChimeSDKMessagingResponsesDescribeChannelBanChannelBanCreatedBy {
    return new ChimeSDKMessagingResponsesDescribeChannelBanChannelBanCreatedBy(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelBanChannelBanMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelBanRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelBan',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelBan.ChannelBan.Member.Arn'),
        outputPath: 'ChannelBan.Member.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelBan.ChannelBan.Member.Name'),
        outputPath: 'ChannelBan.Member.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelBan.ChannelBan.Member.Name', props);
    return resource.getResponseField('ChannelBan.Member.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelBanChannelBanCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelBanRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelBan',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelBan.ChannelBan.CreatedBy.Arn'),
        outputPath: 'ChannelBan.CreatedBy.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelBan.ChannelBan.CreatedBy.Name'),
        outputPath: 'ChannelBan.CreatedBy.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelBan.ChannelBan.CreatedBy.Name', props);
    return resource.getResponseField('ChannelBan.CreatedBy.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelMembershipRequest) {
  }

  public get channelMembership(): ChimeSDKMessagingResponsesDescribeChannelMembershipChannelMembership {
    return new ChimeSDKMessagingResponsesDescribeChannelMembershipChannelMembership(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelMembershipChannelMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelMembershipRequest) {
  }

  public get invitedBy(): ChimeSDKMessagingResponsesDescribeChannelMembershipChannelMembershipInvitedBy {
    return new ChimeSDKMessagingResponsesDescribeChannelMembershipChannelMembershipInvitedBy(this.__scope, this.__resources, this.__input);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembership.ChannelMembership.Type'),
        outputPath: 'ChannelMembership.Type',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.Type', props);
    return resource.getResponseField('ChannelMembership.Type') as unknown as string;
  }

  public get member(): ChimeSDKMessagingResponsesDescribeChannelMembershipChannelMembershipMember {
    return new ChimeSDKMessagingResponsesDescribeChannelMembershipChannelMembershipMember(this.__scope, this.__resources, this.__input);
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembership.ChannelMembership.ChannelArn'),
        outputPath: 'ChannelMembership.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembership.ChannelMembership.CreatedTimestamp'),
        outputPath: 'ChannelMembership.CreatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembership.ChannelMembership.LastUpdatedTimestamp'),
        outputPath: 'ChannelMembership.LastUpdatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.LastUpdatedTimestamp', props);
    return resource.getResponseField('ChannelMembership.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelMembershipChannelMembershipInvitedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelMembershipRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembership.ChannelMembership.InvitedBy.Arn'),
        outputPath: 'ChannelMembership.InvitedBy.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembership.ChannelMembership.InvitedBy.Name'),
        outputPath: 'ChannelMembership.InvitedBy.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.InvitedBy.Name', props);
    return resource.getResponseField('ChannelMembership.InvitedBy.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelMembershipChannelMembershipMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelMembershipRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembership',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembership.ChannelMembership.Member.Arn'),
        outputPath: 'ChannelMembership.Member.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembership.ChannelMembership.Member.Name'),
        outputPath: 'ChannelMembership.Member.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MemberArn: this.__input.memberArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembership.ChannelMembership.Member.Name', props);
    return resource.getResponseField('ChannelMembership.Member.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest) {
  }

  public get channelMembership(): ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership {
    return new ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest) {
  }

  public get channelSummary(): ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary {
    return new ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary(this.__scope, this.__resources, this.__input);
  }

  public get appInstanceUserMembershipSummary(): ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary {
    return new ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembershipForAppInstanceUser',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Name'),
        outputPath: 'ChannelMembership.ChannelSummary.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.ChannelArn'),
        outputPath: 'ChannelMembership.ChannelSummary.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Mode'),
        outputPath: 'ChannelMembership.ChannelSummary.Mode',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Privacy'),
        outputPath: 'ChannelMembership.ChannelSummary.Privacy',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.Metadata'),
        outputPath: 'ChannelMembership.ChannelSummary.Metadata',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.LastMessageTimestamp'),
        outputPath: 'ChannelMembership.ChannelSummary.LastMessageTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.ChannelSummary.LastMessageTimestamp', props);
    return resource.getResponseField('ChannelMembership.ChannelSummary.LastMessageTimestamp') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelMembershipForAppInstanceUser',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.AppInstanceUserMembershipSummary.Type'),
        outputPath: 'ChannelMembership.AppInstanceUserMembershipSummary.Type',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelMembershipForAppInstanceUser.ChannelMembership.AppInstanceUserMembershipSummary.ReadMarkerTimestamp'),
        outputPath: 'ChannelMembership.AppInstanceUserMembershipSummary.ReadMarkerTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelMembershipForAppInstanceUser.ChannelMembership.AppInstanceUserMembershipSummary.ReadMarkerTimestamp', props);
    return resource.getResponseField('ChannelMembership.AppInstanceUserMembershipSummary.ReadMarkerTimestamp') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelModeratedByAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest) {
  }

  public get channel(): ChimeSDKMessagingResponsesDescribeChannelModeratedByAppInstanceUserChannel {
    return new ChimeSDKMessagingResponsesDescribeChannelModeratedByAppInstanceUserChannel(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelModeratedByAppInstanceUserChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest) {
  }

  public get channelSummary(): ChimeSDKMessagingResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary {
    return new ChimeSDKMessagingResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModeratedByAppInstanceUser',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Name'),
        outputPath: 'Channel.ChannelSummary.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.ChannelArn'),
        outputPath: 'Channel.ChannelSummary.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Mode'),
        outputPath: 'Channel.ChannelSummary.Mode',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Privacy'),
        outputPath: 'Channel.ChannelSummary.Privacy',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.Metadata'),
        outputPath: 'Channel.ChannelSummary.Metadata',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.LastMessageTimestamp'),
        outputPath: 'Channel.ChannelSummary.LastMessageTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModeratedByAppInstanceUser.Channel.ChannelSummary.LastMessageTimestamp', props);
    return resource.getResponseField('Channel.ChannelSummary.LastMessageTimestamp') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelModerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelModeratorRequest) {
  }

  public get channelModerator(): ChimeSDKMessagingResponsesDescribeChannelModeratorChannelModerator {
    return new ChimeSDKMessagingResponsesDescribeChannelModeratorChannelModerator(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelModeratorChannelModerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelModeratorRequest) {
  }

  public get moderator(): ChimeSDKMessagingResponsesDescribeChannelModeratorChannelModeratorModerator {
    return new ChimeSDKMessagingResponsesDescribeChannelModeratorChannelModeratorModerator(this.__scope, this.__resources, this.__input);
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModerator',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModerator.ChannelModerator.ChannelArn'),
        outputPath: 'ChannelModerator.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModerator.ChannelModerator.CreatedTimestamp'),
        outputPath: 'ChannelModerator.CreatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModerator.ChannelModerator.CreatedTimestamp', props);
    return resource.getResponseField('ChannelModerator.CreatedTimestamp') as unknown as string;
  }

  public get createdBy(): ChimeSDKMessagingResponsesDescribeChannelModeratorChannelModeratorCreatedBy {
    return new ChimeSDKMessagingResponsesDescribeChannelModeratorChannelModeratorCreatedBy(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelModeratorChannelModeratorModerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelModeratorRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModerator',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModerator.ChannelModerator.Moderator.Arn'),
        outputPath: 'ChannelModerator.Moderator.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModerator.ChannelModerator.Moderator.Name'),
        outputPath: 'ChannelModerator.Moderator.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModerator.ChannelModerator.Moderator.Name', props);
    return resource.getResponseField('ChannelModerator.Moderator.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesDescribeChannelModeratorChannelModeratorCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingDescribeChannelModeratorRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannelModerator',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModerator.ChannelModerator.CreatedBy.Arn'),
        outputPath: 'ChannelModerator.CreatedBy.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.DescribeChannelModerator.ChannelModerator.CreatedBy.Name'),
        outputPath: 'ChannelModerator.CreatedBy.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChannelModeratorArn: this.__input.channelModeratorArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannelModerator.ChannelModerator.CreatedBy.Name', props);
    return resource.getResponseField('ChannelModerator.CreatedBy.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesFetchChannelMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingGetChannelMessageRequest) {
  }

  public get channelMessage(): ChimeSDKMessagingResponsesFetchChannelMessageChannelMessage {
    return new ChimeSDKMessagingResponsesFetchChannelMessageChannelMessage(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKMessagingResponsesFetchChannelMessageChannelMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingGetChannelMessageRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.ChannelArn'),
        outputPath: 'ChannelMessage.ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.MessageId'),
        outputPath: 'ChannelMessage.MessageId',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.Content'),
        outputPath: 'ChannelMessage.Content',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.Metadata'),
        outputPath: 'ChannelMessage.Metadata',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.Type'),
        outputPath: 'ChannelMessage.Type',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.CreatedTimestamp'),
        outputPath: 'ChannelMessage.CreatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.LastEditedTimestamp'),
        outputPath: 'ChannelMessage.LastEditedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.LastUpdatedTimestamp'),
        outputPath: 'ChannelMessage.LastUpdatedTimestamp',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.LastUpdatedTimestamp', props);
    return resource.getResponseField('ChannelMessage.LastUpdatedTimestamp') as unknown as string;
  }

  public get sender(): ChimeSDKMessagingResponsesFetchChannelMessageChannelMessageSender {
    return new ChimeSDKMessagingResponsesFetchChannelMessageChannelMessageSender(this.__scope, this.__resources, this.__input);
  }

  public get redacted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.Redacted'),
        outputPath: 'ChannelMessage.Redacted',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.Persistence'),
        outputPath: 'ChannelMessage.Persistence',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.Persistence', props);
    return resource.getResponseField('ChannelMessage.Persistence') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesFetchChannelMessageChannelMessageSender {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingGetChannelMessageRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannelMessage',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.Sender.Arn'),
        outputPath: 'ChannelMessage.Sender.Arn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetChannelMessage.ChannelMessage.Sender.Name'),
        outputPath: 'ChannelMessage.Sender.Name',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannelMessage.ChannelMessage.Sender.Name', props);
    return resource.getResponseField('ChannelMessage.Sender.Name') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesFetchMessagingSessionEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get endpoint(): ChimeSDKMessagingResponsesFetchMessagingSessionEndpointEndpoint {
    return new ChimeSDKMessagingResponsesFetchMessagingSessionEndpointEndpoint(this.__scope, this.__resources);
  }

}

export class ChimeSDKMessagingResponsesFetchMessagingSessionEndpointEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMessagingSessionEndpoint',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.GetMessagingSessionEndpoint.Endpoint.Url'),
        outputPath: 'Endpoint.Url',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMessagingSessionEndpoint.Endpoint.Url', props);
    return resource.getResponseField('Endpoint.Url') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesListChannelBans {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingListChannelBansRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelBans',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelBans.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelBans.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelBans.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get channelBans(): shapes.ChimeSdkMessagingChannelBanSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelBans',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelBans.ChannelBans'),
        outputPath: 'ChannelBans',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelBans.ChannelBans', props);
    return resource.getResponseField('ChannelBans') as unknown as shapes.ChimeSdkMessagingChannelBanSummary[];
  }

}

export class ChimeSDKMessagingResponsesListChannelMemberships {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingListChannelMembershipsRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMemberships',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelMemberships.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMemberships.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

  public get channelMemberships(): shapes.ChimeSdkMessagingChannelMembershipSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMemberships',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelMemberships.ChannelMemberships'),
        outputPath: 'ChannelMemberships',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMemberships.ChannelMemberships', props);
    return resource.getResponseField('ChannelMemberships') as unknown as shapes.ChimeSdkMessagingChannelMembershipSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMemberships',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelMemberships.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Type: this.__input.type,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMemberships.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesListChannelMembershipsForAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest) {
  }

  public get channelMemberships(): shapes.ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMembershipsForAppInstanceUser',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelMembershipsForAppInstanceUser.ChannelMemberships'),
        outputPath: 'ChannelMemberships',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMembershipsForAppInstanceUser.ChannelMemberships', props);
    return resource.getResponseField('ChannelMemberships') as unknown as shapes.ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMembershipsForAppInstanceUser',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelMembershipsForAppInstanceUser.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMembershipsForAppInstanceUser.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesListChannelMessages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingListChannelMessagesRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMessages',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelMessages.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          SortOrder: this.__input.sortOrder,
          NotBefore: this.__input.notBefore,
          NotAfter: this.__input.notAfter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelMessages.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChannelArn: this.__input.channelArn,
          SortOrder: this.__input.sortOrder,
          NotBefore: this.__input.notBefore,
          NotAfter: this.__input.notAfter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMessages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get channelMessages(): shapes.ChimeSdkMessagingChannelMessageSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelMessages',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelMessages.ChannelMessages'),
        outputPath: 'ChannelMessages',
        parameters: {
          ChannelArn: this.__input.channelArn,
          SortOrder: this.__input.sortOrder,
          NotBefore: this.__input.notBefore,
          NotAfter: this.__input.notAfter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelMessages.ChannelMessages', props);
    return resource.getResponseField('ChannelMessages') as unknown as shapes.ChimeSdkMessagingChannelMessageSummary[];
  }

}

export class ChimeSDKMessagingResponsesListChannelModerators {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingListChannelModeratorsRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelModerators',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelModerators.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelModerators.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelModerators.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get channelModerators(): shapes.ChimeSdkMessagingChannelModeratorSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelModerators',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelModerators.ChannelModerators'),
        outputPath: 'ChannelModerators',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelModerators.ChannelModerators', props);
    return resource.getResponseField('ChannelModerators') as unknown as shapes.ChimeSdkMessagingChannelModeratorSummary[];
  }

}

export class ChimeSDKMessagingResponsesListChannels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingListChannelsRequest) {
  }

  public get channels(): shapes.ChimeSdkMessagingChannelSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannels',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannels.Channels'),
        outputPath: 'Channels',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          Privacy: this.__input.privacy,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannels.Channels', props);
    return resource.getResponseField('Channels') as unknown as shapes.ChimeSdkMessagingChannelSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannels',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          Privacy: this.__input.privacy,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesListChannelsModeratedByAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest) {
  }

  public get channels(): shapes.ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelsModeratedByAppInstanceUser',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelsModeratedByAppInstanceUser.Channels'),
        outputPath: 'Channels',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelsModeratedByAppInstanceUser.Channels', props);
    return resource.getResponseField('Channels') as unknown as shapes.ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannelsModeratedByAppInstanceUser',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.ListChannelsModeratedByAppInstanceUser.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannelsModeratedByAppInstanceUser.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesRedactChannelMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingRedactChannelMessageRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'redactChannelMessage',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.RedactChannelMessage.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.RedactChannelMessage.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RedactChannelMessage.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesSendChannelMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingSendChannelMessageRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendChannelMessage',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.SendChannelMessage.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Content: this.__input.content,
          Type: this.__input.type,
          Persistence: this.__input.persistence,
          Metadata: this.__input.metadata,
          ClientRequestToken: this.__input.clientRequestToken,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.SendChannelMessage.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Content: this.__input.content,
          Type: this.__input.type,
          Persistence: this.__input.persistence,
          Metadata: this.__input.metadata,
          ClientRequestToken: this.__input.clientRequestToken,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendChannelMessage.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesUpdateChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingUpdateChannelRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.UpdateChannel.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          Name: this.__input.name,
          Mode: this.__input.mode,
          Metadata: this.__input.metadata,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesUpdateChannelMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingUpdateChannelMessageRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannelMessage',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.UpdateChannelMessage.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          Content: this.__input.content,
          Metadata: this.__input.metadata,
          ChimeBearer: this.__input.chimeBearer,
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
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.UpdateChannelMessage.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          ChannelArn: this.__input.channelArn,
          MessageId: this.__input.messageId,
          Content: this.__input.content,
          Metadata: this.__input.metadata,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannelMessage.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class ChimeSDKMessagingResponsesUpdateChannelReadMarker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkMessagingUpdateChannelReadMarkerRequest) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannelReadMarker',
        service: 'ChimeSDKMessaging',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKMessaging.UpdateChannelReadMarker.ChannelArn'),
        outputPath: 'ChannelArn',
        parameters: {
          ChannelArn: this.__input.channelArn,
          ChimeBearer: this.__input.chimeBearer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannelReadMarker.ChannelArn', props);
    return resource.getResponseField('ChannelArn') as unknown as string;
  }

}

