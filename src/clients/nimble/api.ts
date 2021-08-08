import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class NimbleClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptEulas(input: shapes.NimbleAcceptEulasRequest): NimbleResponsesAcceptEulas {
    return new NimbleResponsesAcceptEulas(this, this.__resources, input);
  }

  public createLaunchProfile(input: shapes.NimbleCreateLaunchProfileRequest): NimbleResponsesCreateLaunchProfile {
    return new NimbleResponsesCreateLaunchProfile(this, this.__resources, input);
  }

  public createStreamingImage(input: shapes.NimbleCreateStreamingImageRequest): NimbleResponsesCreateStreamingImage {
    return new NimbleResponsesCreateStreamingImage(this, this.__resources, input);
  }

  public createStreamingSession(input: shapes.NimbleCreateStreamingSessionRequest): NimbleResponsesCreateStreamingSession {
    return new NimbleResponsesCreateStreamingSession(this, this.__resources, input);
  }

  public createStreamingSessionStream(input: shapes.NimbleCreateStreamingSessionStreamRequest): NimbleResponsesCreateStreamingSessionStream {
    return new NimbleResponsesCreateStreamingSessionStream(this, this.__resources, input);
  }

  public createStudio(input: shapes.NimbleCreateStudioRequest): NimbleResponsesCreateStudio {
    return new NimbleResponsesCreateStudio(this, this.__resources, input);
  }

  public createStudioComponent(input: shapes.NimbleCreateStudioComponentRequest): NimbleResponsesCreateStudioComponent {
    return new NimbleResponsesCreateStudioComponent(this, this.__resources, input);
  }

  public deleteLaunchProfile(input: shapes.NimbleDeleteLaunchProfileRequest): NimbleResponsesDeleteLaunchProfile {
    return new NimbleResponsesDeleteLaunchProfile(this, this.__resources, input);
  }

  public deleteLaunchProfileMember(input: shapes.NimbleDeleteLaunchProfileMemberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfileMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfileMember'),
        parameters: {
          clientToken: input.clientToken,
          launchProfileId: input.launchProfileId,
          principalId: input.principalId,
          studioId: input.studioId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLaunchProfileMember', props);
  }

  public deleteStreamingImage(input: shapes.NimbleDeleteStreamingImageRequest): NimbleResponsesDeleteStreamingImage {
    return new NimbleResponsesDeleteStreamingImage(this, this.__resources, input);
  }

  public deleteStreamingSession(input: shapes.NimbleDeleteStreamingSessionRequest): NimbleResponsesDeleteStreamingSession {
    return new NimbleResponsesDeleteStreamingSession(this, this.__resources, input);
  }

  public deleteStudio(input: shapes.NimbleDeleteStudioRequest): NimbleResponsesDeleteStudio {
    return new NimbleResponsesDeleteStudio(this, this.__resources, input);
  }

  public deleteStudioComponent(input: shapes.NimbleDeleteStudioComponentRequest): NimbleResponsesDeleteStudioComponent {
    return new NimbleResponsesDeleteStudioComponent(this, this.__resources, input);
  }

  public deleteStudioMember(input: shapes.NimbleDeleteStudioMemberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioMember'),
        parameters: {
          clientToken: input.clientToken,
          principalId: input.principalId,
          studioId: input.studioId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStudioMember', props);
  }

  public fetchEula(input: shapes.NimbleGetEulaRequest): NimbleResponsesFetchEula {
    return new NimbleResponsesFetchEula(this, this.__resources, input);
  }

  public fetchLaunchProfile(input: shapes.NimbleGetLaunchProfileRequest): NimbleResponsesFetchLaunchProfile {
    return new NimbleResponsesFetchLaunchProfile(this, this.__resources, input);
  }

  public fetchLaunchProfileDetails(input: shapes.NimbleGetLaunchProfileDetailsRequest): NimbleResponsesFetchLaunchProfileDetails {
    return new NimbleResponsesFetchLaunchProfileDetails(this, this.__resources, input);
  }

  public fetchLaunchProfileInitialization(input: shapes.NimbleGetLaunchProfileInitializationRequest): NimbleResponsesFetchLaunchProfileInitialization {
    return new NimbleResponsesFetchLaunchProfileInitialization(this, this.__resources, input);
  }

  public fetchLaunchProfileMember(input: shapes.NimbleGetLaunchProfileMemberRequest): NimbleResponsesFetchLaunchProfileMember {
    return new NimbleResponsesFetchLaunchProfileMember(this, this.__resources, input);
  }

  public fetchStreamingImage(input: shapes.NimbleGetStreamingImageRequest): NimbleResponsesFetchStreamingImage {
    return new NimbleResponsesFetchStreamingImage(this, this.__resources, input);
  }

  public fetchStreamingSession(input: shapes.NimbleGetStreamingSessionRequest): NimbleResponsesFetchStreamingSession {
    return new NimbleResponsesFetchStreamingSession(this, this.__resources, input);
  }

  public fetchStreamingSessionStream(input: shapes.NimbleGetStreamingSessionStreamRequest): NimbleResponsesFetchStreamingSessionStream {
    return new NimbleResponsesFetchStreamingSessionStream(this, this.__resources, input);
  }

  public fetchStudio(input: shapes.NimbleGetStudioRequest): NimbleResponsesFetchStudio {
    return new NimbleResponsesFetchStudio(this, this.__resources, input);
  }

  public fetchStudioComponent(input: shapes.NimbleGetStudioComponentRequest): NimbleResponsesFetchStudioComponent {
    return new NimbleResponsesFetchStudioComponent(this, this.__resources, input);
  }

  public fetchStudioMember(input: shapes.NimbleGetStudioMemberRequest): NimbleResponsesFetchStudioMember {
    return new NimbleResponsesFetchStudioMember(this, this.__resources, input);
  }

  public listEulaAcceptances(input: shapes.NimbleListEulaAcceptancesRequest): NimbleResponsesListEulaAcceptances {
    return new NimbleResponsesListEulaAcceptances(this, this.__resources, input);
  }

  public listEulas(input: shapes.NimbleListEulasRequest): NimbleResponsesListEulas {
    return new NimbleResponsesListEulas(this, this.__resources, input);
  }

  public listLaunchProfileMembers(input: shapes.NimbleListLaunchProfileMembersRequest): NimbleResponsesListLaunchProfileMembers {
    return new NimbleResponsesListLaunchProfileMembers(this, this.__resources, input);
  }

  public listLaunchProfiles(input: shapes.NimbleListLaunchProfilesRequest): NimbleResponsesListLaunchProfiles {
    return new NimbleResponsesListLaunchProfiles(this, this.__resources, input);
  }

  public listStreamingImages(input: shapes.NimbleListStreamingImagesRequest): NimbleResponsesListStreamingImages {
    return new NimbleResponsesListStreamingImages(this, this.__resources, input);
  }

  public listStreamingSessions(input: shapes.NimbleListStreamingSessionsRequest): NimbleResponsesListStreamingSessions {
    return new NimbleResponsesListStreamingSessions(this, this.__resources, input);
  }

  public listStudioComponents(input: shapes.NimbleListStudioComponentsRequest): NimbleResponsesListStudioComponents {
    return new NimbleResponsesListStudioComponents(this, this.__resources, input);
  }

  public listStudioMembers(input: shapes.NimbleListStudioMembersRequest): NimbleResponsesListStudioMembers {
    return new NimbleResponsesListStudioMembers(this, this.__resources, input);
  }

  public listStudios(input: shapes.NimbleListStudiosRequest): NimbleResponsesListStudios {
    return new NimbleResponsesListStudios(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.NimbleListTagsForResourceRequest): NimbleResponsesListTagsForResource {
    return new NimbleResponsesListTagsForResource(this, this.__resources, input);
  }

  public putLaunchProfileMembers(input: shapes.NimblePutLaunchProfileMembersRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLaunchProfileMembers',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.PutLaunchProfileMembers'),
        parameters: {
          clientToken: input.clientToken,
          identityStoreId: input.identityStoreId,
          launchProfileId: input.launchProfileId,
          members: input.members,
          studioId: input.studioId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutLaunchProfileMembers', props);
  }

  public putStudioMembers(input: shapes.NimblePutStudioMembersRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putStudioMembers',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.PutStudioMembers'),
        parameters: {
          clientToken: input.clientToken,
          identityStoreId: input.identityStoreId,
          members: input.members,
          studioId: input.studioId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutStudioMembers', props);
  }

  public startStudioSsoConfigurationRepair(input: shapes.NimbleStartStudioSsoConfigurationRepairRequest): NimbleResponsesStartStudioSsoConfigurationRepair {
    return new NimbleResponsesStartStudioSsoConfigurationRepair(this, this.__resources, input);
  }

  public tagResource(input: shapes.NimbleTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.NimbleUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateLaunchProfile(input: shapes.NimbleUpdateLaunchProfileRequest): NimbleResponsesUpdateLaunchProfile {
    return new NimbleResponsesUpdateLaunchProfile(this, this.__resources, input);
  }

  public updateLaunchProfileMember(input: shapes.NimbleUpdateLaunchProfileMemberRequest): NimbleResponsesUpdateLaunchProfileMember {
    return new NimbleResponsesUpdateLaunchProfileMember(this, this.__resources, input);
  }

  public updateStreamingImage(input: shapes.NimbleUpdateStreamingImageRequest): NimbleResponsesUpdateStreamingImage {
    return new NimbleResponsesUpdateStreamingImage(this, this.__resources, input);
  }

  public updateStudio(input: shapes.NimbleUpdateStudioRequest): NimbleResponsesUpdateStudio {
    return new NimbleResponsesUpdateStudio(this, this.__resources, input);
  }

  public updateStudioComponent(input: shapes.NimbleUpdateStudioComponentRequest): NimbleResponsesUpdateStudioComponent {
    return new NimbleResponsesUpdateStudioComponent(this, this.__resources, input);
  }

}

export class NimbleResponsesAcceptEulas {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleAcceptEulasRequest) {
  }

  public get eulaAcceptances(): shapes.NimbleEulaAcceptance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptEulas',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.AcceptEulas.eulaAcceptances'),
        outputPath: 'eulaAcceptances',
        parameters: {
          clientToken: this.__input.clientToken,
          eulaIds: this.__input.eulaIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptEulas.eulaAcceptances', props);
    return resource.getResponseField('eulaAcceptances') as unknown as shapes.NimbleEulaAcceptance[];
  }

}

export class NimbleResponsesCreateLaunchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateLaunchProfileRequest) {
  }

  public get launchProfile(): NimbleResponsesCreateLaunchProfileLaunchProfile {
    return new NimbleResponsesCreateLaunchProfileLaunchProfile(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesCreateLaunchProfileLaunchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateLaunchProfileRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.arn'),
        outputPath: 'launchProfile.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.arn', props);
    return resource.getResponseField('launchProfile.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.createdAt'),
        outputPath: 'launchProfile.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.createdAt', props);
    return resource.getResponseField('launchProfile.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.createdBy'),
        outputPath: 'launchProfile.createdBy',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.createdBy', props);
    return resource.getResponseField('launchProfile.createdBy') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.description'),
        outputPath: 'launchProfile.description',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.description', props);
    return resource.getResponseField('launchProfile.description') as unknown as string;
  }

  public get ec2SubnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.ec2SubnetIds'),
        outputPath: 'launchProfile.ec2SubnetIds',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.ec2SubnetIds', props);
    return resource.getResponseField('launchProfile.ec2SubnetIds') as unknown as string[];
  }

  public get launchProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.launchProfileId'),
        outputPath: 'launchProfile.launchProfileId',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.launchProfileId', props);
    return resource.getResponseField('launchProfile.launchProfileId') as unknown as string;
  }

  public get launchProfileProtocolVersions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.launchProfileProtocolVersions'),
        outputPath: 'launchProfile.launchProfileProtocolVersions',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.launchProfileProtocolVersions', props);
    return resource.getResponseField('launchProfile.launchProfileProtocolVersions') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.name'),
        outputPath: 'launchProfile.name',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.name', props);
    return resource.getResponseField('launchProfile.name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.state'),
        outputPath: 'launchProfile.state',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.state', props);
    return resource.getResponseField('launchProfile.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.statusCode'),
        outputPath: 'launchProfile.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.statusCode', props);
    return resource.getResponseField('launchProfile.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.statusMessage'),
        outputPath: 'launchProfile.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.statusMessage', props);
    return resource.getResponseField('launchProfile.statusMessage') as unknown as string;
  }

  public get streamConfiguration(): NimbleResponsesCreateLaunchProfileLaunchProfileStreamConfiguration {
    return new NimbleResponsesCreateLaunchProfileLaunchProfileStreamConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get studioComponentIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.studioComponentIds'),
        outputPath: 'launchProfile.studioComponentIds',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.studioComponentIds', props);
    return resource.getResponseField('launchProfile.studioComponentIds') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.tags'),
        outputPath: 'launchProfile.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.tags', props);
    return resource.getResponseField('launchProfile.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.updatedAt'),
        outputPath: 'launchProfile.updatedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.updatedAt', props);
    return resource.getResponseField('launchProfile.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.updatedBy'),
        outputPath: 'launchProfile.updatedBy',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.updatedBy', props);
    return resource.getResponseField('launchProfile.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesCreateLaunchProfileLaunchProfileStreamConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateLaunchProfileRequest) {
  }

  public get clipboardMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.streamConfiguration.clipboardMode'),
        outputPath: 'launchProfile.streamConfiguration.clipboardMode',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.streamConfiguration.clipboardMode', props);
    return resource.getResponseField('launchProfile.streamConfiguration.clipboardMode') as unknown as string;
  }

  public get ec2InstanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.streamConfiguration.ec2InstanceTypes'),
        outputPath: 'launchProfile.streamConfiguration.ec2InstanceTypes',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.streamConfiguration.ec2InstanceTypes', props);
    return resource.getResponseField('launchProfile.streamConfiguration.ec2InstanceTypes') as unknown as string[];
  }

  public get maxSessionLengthInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.streamConfiguration.maxSessionLengthInMinutes'),
        outputPath: 'launchProfile.streamConfiguration.maxSessionLengthInMinutes',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.streamConfiguration.maxSessionLengthInMinutes', props);
    return resource.getResponseField('launchProfile.streamConfiguration.maxSessionLengthInMinutes') as unknown as number;
  }

  public get streamingImageIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateLaunchProfile.launchProfile.streamConfiguration.streamingImageIds'),
        outputPath: 'launchProfile.streamConfiguration.streamingImageIds',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2SubnetIds: this.__input.ec2SubnetIds,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLaunchProfile.launchProfile.streamConfiguration.streamingImageIds', props);
    return resource.getResponseField('launchProfile.streamConfiguration.streamingImageIds') as unknown as string[];
  }

}

export class NimbleResponsesCreateStreamingImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStreamingImageRequest) {
  }

  public get streamingImage(): NimbleResponsesCreateStreamingImageStreamingImage {
    return new NimbleResponsesCreateStreamingImageStreamingImage(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesCreateStreamingImageStreamingImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStreamingImageRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.arn'),
        outputPath: 'streamingImage.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.arn', props);
    return resource.getResponseField('streamingImage.arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.description'),
        outputPath: 'streamingImage.description',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.description', props);
    return resource.getResponseField('streamingImage.description') as unknown as string;
  }

  public get ec2ImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.ec2ImageId'),
        outputPath: 'streamingImage.ec2ImageId',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.ec2ImageId', props);
    return resource.getResponseField('streamingImage.ec2ImageId') as unknown as string;
  }

  public get encryptionConfiguration(): NimbleResponsesCreateStreamingImageStreamingImageEncryptionConfiguration {
    return new NimbleResponsesCreateStreamingImageStreamingImageEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get eulaIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.eulaIds'),
        outputPath: 'streamingImage.eulaIds',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.eulaIds', props);
    return resource.getResponseField('streamingImage.eulaIds') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.name'),
        outputPath: 'streamingImage.name',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.name', props);
    return resource.getResponseField('streamingImage.name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.owner'),
        outputPath: 'streamingImage.owner',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.owner', props);
    return resource.getResponseField('streamingImage.owner') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.platform'),
        outputPath: 'streamingImage.platform',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.platform', props);
    return resource.getResponseField('streamingImage.platform') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.state'),
        outputPath: 'streamingImage.state',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.state', props);
    return resource.getResponseField('streamingImage.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.statusCode'),
        outputPath: 'streamingImage.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.statusCode', props);
    return resource.getResponseField('streamingImage.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.statusMessage'),
        outputPath: 'streamingImage.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.statusMessage', props);
    return resource.getResponseField('streamingImage.statusMessage') as unknown as string;
  }

  public get streamingImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.streamingImageId'),
        outputPath: 'streamingImage.streamingImageId',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.streamingImageId', props);
    return resource.getResponseField('streamingImage.streamingImageId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.tags'),
        outputPath: 'streamingImage.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.tags', props);
    return resource.getResponseField('streamingImage.tags') as unknown as Record<string, string>;
  }

}

export class NimbleResponsesCreateStreamingImageStreamingImageEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStreamingImageRequest) {
  }

  public get keyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.encryptionConfiguration.keyArn'),
        outputPath: 'streamingImage.encryptionConfiguration.keyArn',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.encryptionConfiguration.keyArn', props);
    return resource.getResponseField('streamingImage.encryptionConfiguration.keyArn') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingImage.streamingImage.encryptionConfiguration.keyType'),
        outputPath: 'streamingImage.encryptionConfiguration.keyType',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ec2ImageId: this.__input.ec2ImageId,
          name: this.__input.name,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingImage.streamingImage.encryptionConfiguration.keyType', props);
    return resource.getResponseField('streamingImage.encryptionConfiguration.keyType') as unknown as string;
  }

}

export class NimbleResponsesCreateStreamingSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStreamingSessionRequest) {
  }

  public get session(): NimbleResponsesCreateStreamingSessionSession {
    return new NimbleResponsesCreateStreamingSessionSession(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesCreateStreamingSessionSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStreamingSessionRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.arn'),
        outputPath: 'session.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.arn', props);
    return resource.getResponseField('session.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.createdAt'),
        outputPath: 'session.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.createdAt', props);
    return resource.getResponseField('session.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.createdBy'),
        outputPath: 'session.createdBy',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.createdBy', props);
    return resource.getResponseField('session.createdBy') as unknown as string;
  }

  public get ec2InstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.ec2InstanceType'),
        outputPath: 'session.ec2InstanceType',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.ec2InstanceType', props);
    return resource.getResponseField('session.ec2InstanceType') as unknown as string;
  }

  public get launchProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.launchProfileId'),
        outputPath: 'session.launchProfileId',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.launchProfileId', props);
    return resource.getResponseField('session.launchProfileId') as unknown as string;
  }

  public get sessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.sessionId'),
        outputPath: 'session.sessionId',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.sessionId', props);
    return resource.getResponseField('session.sessionId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.state'),
        outputPath: 'session.state',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.state', props);
    return resource.getResponseField('session.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.statusCode'),
        outputPath: 'session.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.statusCode', props);
    return resource.getResponseField('session.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.statusMessage'),
        outputPath: 'session.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.statusMessage', props);
    return resource.getResponseField('session.statusMessage') as unknown as string;
  }

  public get streamingImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.streamingImageId'),
        outputPath: 'session.streamingImageId',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.streamingImageId', props);
    return resource.getResponseField('session.streamingImageId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.tags'),
        outputPath: 'session.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.tags', props);
    return resource.getResponseField('session.tags') as unknown as Record<string, string>;
  }

  public get terminateAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.terminateAt'),
        outputPath: 'session.terminateAt',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.terminateAt', props);
    return resource.getResponseField('session.terminateAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.updatedAt'),
        outputPath: 'session.updatedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.updatedAt', props);
    return resource.getResponseField('session.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSession.session.updatedBy'),
        outputPath: 'session.updatedBy',
        parameters: {
          clientToken: this.__input.clientToken,
          ec2InstanceType: this.__input.ec2InstanceType,
          launchProfileId: this.__input.launchProfileId,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSession.session.updatedBy', props);
    return resource.getResponseField('session.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesCreateStreamingSessionStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStreamingSessionStreamRequest) {
  }

  public get stream(): NimbleResponsesCreateStreamingSessionStreamStream {
    return new NimbleResponsesCreateStreamingSessionStreamStream(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesCreateStreamingSessionStreamStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStreamingSessionStreamRequest) {
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSessionStream.stream.createdAt'),
        outputPath: 'stream.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          expirationInSeconds: this.__input.expirationInSeconds,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSessionStream.stream.createdAt', props);
    return resource.getResponseField('stream.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSessionStream.stream.createdBy'),
        outputPath: 'stream.createdBy',
        parameters: {
          clientToken: this.__input.clientToken,
          expirationInSeconds: this.__input.expirationInSeconds,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSessionStream.stream.createdBy', props);
    return resource.getResponseField('stream.createdBy') as unknown as string;
  }

  public get expiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSessionStream.stream.expiresAt'),
        outputPath: 'stream.expiresAt',
        parameters: {
          clientToken: this.__input.clientToken,
          expirationInSeconds: this.__input.expirationInSeconds,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSessionStream.stream.expiresAt', props);
    return resource.getResponseField('stream.expiresAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSessionStream.stream.state'),
        outputPath: 'stream.state',
        parameters: {
          clientToken: this.__input.clientToken,
          expirationInSeconds: this.__input.expirationInSeconds,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSessionStream.stream.state', props);
    return resource.getResponseField('stream.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSessionStream.stream.statusCode'),
        outputPath: 'stream.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          expirationInSeconds: this.__input.expirationInSeconds,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSessionStream.stream.statusCode', props);
    return resource.getResponseField('stream.statusCode') as unknown as string;
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSessionStream.stream.streamId'),
        outputPath: 'stream.streamId',
        parameters: {
          clientToken: this.__input.clientToken,
          expirationInSeconds: this.__input.expirationInSeconds,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSessionStream.stream.streamId', props);
    return resource.getResponseField('stream.streamId') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStreamingSessionStream.stream.url'),
        outputPath: 'stream.url',
        parameters: {
          clientToken: this.__input.clientToken,
          expirationInSeconds: this.__input.expirationInSeconds,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingSessionStream.stream.url', props);
    return resource.getResponseField('stream.url') as unknown as string;
  }

}

export class NimbleResponsesCreateStudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStudioRequest) {
  }

  public get studio(): NimbleResponsesCreateStudioStudio {
    return new NimbleResponsesCreateStudioStudio(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesCreateStudioStudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStudioRequest) {
  }

  public get adminRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.adminRoleArn'),
        outputPath: 'studio.adminRoleArn',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.adminRoleArn', props);
    return resource.getResponseField('studio.adminRoleArn') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.arn'),
        outputPath: 'studio.arn',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.arn', props);
    return resource.getResponseField('studio.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.createdAt'),
        outputPath: 'studio.createdAt',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.createdAt', props);
    return resource.getResponseField('studio.createdAt') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.displayName'),
        outputPath: 'studio.displayName',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.displayName', props);
    return resource.getResponseField('studio.displayName') as unknown as string;
  }

  public get homeRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.homeRegion'),
        outputPath: 'studio.homeRegion',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.homeRegion', props);
    return resource.getResponseField('studio.homeRegion') as unknown as string;
  }

  public get ssoClientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.ssoClientId'),
        outputPath: 'studio.ssoClientId',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.ssoClientId', props);
    return resource.getResponseField('studio.ssoClientId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.state'),
        outputPath: 'studio.state',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.state', props);
    return resource.getResponseField('studio.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.statusCode'),
        outputPath: 'studio.statusCode',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.statusCode', props);
    return resource.getResponseField('studio.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.statusMessage'),
        outputPath: 'studio.statusMessage',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.statusMessage', props);
    return resource.getResponseField('studio.statusMessage') as unknown as string;
  }

  public get studioEncryptionConfiguration(): NimbleResponsesCreateStudioStudioStudioEncryptionConfiguration {
    return new NimbleResponsesCreateStudioStudioStudioEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get studioId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.studioId'),
        outputPath: 'studio.studioId',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.studioId', props);
    return resource.getResponseField('studio.studioId') as unknown as string;
  }

  public get studioName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.studioName'),
        outputPath: 'studio.studioName',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.studioName', props);
    return resource.getResponseField('studio.studioName') as unknown as string;
  }

  public get studioUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.studioUrl'),
        outputPath: 'studio.studioUrl',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.studioUrl', props);
    return resource.getResponseField('studio.studioUrl') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.tags'),
        outputPath: 'studio.tags',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.tags', props);
    return resource.getResponseField('studio.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.updatedAt'),
        outputPath: 'studio.updatedAt',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.updatedAt', props);
    return resource.getResponseField('studio.updatedAt') as unknown as string;
  }

  public get userRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.userRoleArn'),
        outputPath: 'studio.userRoleArn',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.userRoleArn', props);
    return resource.getResponseField('studio.userRoleArn') as unknown as string;
  }

}

export class NimbleResponsesCreateStudioStudioStudioEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStudioRequest) {
  }

  public get keyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.studioEncryptionConfiguration.keyArn'),
        outputPath: 'studio.studioEncryptionConfiguration.keyArn',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.studioEncryptionConfiguration.keyArn', props);
    return resource.getResponseField('studio.studioEncryptionConfiguration.keyArn') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudio.studio.studioEncryptionConfiguration.keyType'),
        outputPath: 'studio.studioEncryptionConfiguration.keyType',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioEncryptionConfiguration: {
            keyArn: this.__input.studioEncryptionConfiguration?.keyArn,
            keyType: this.__input.studioEncryptionConfiguration?.keyType,
          },
          studioName: this.__input.studioName,
          tags: this.__input.tags,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudio.studio.studioEncryptionConfiguration.keyType', props);
    return resource.getResponseField('studio.studioEncryptionConfiguration.keyType') as unknown as string;
  }

}

export class NimbleResponsesCreateStudioComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStudioComponentRequest) {
  }

  public get studioComponent(): NimbleResponsesCreateStudioComponentStudioComponent {
    return new NimbleResponsesCreateStudioComponentStudioComponent(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesCreateStudioComponentStudioComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStudioComponentRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.arn'),
        outputPath: 'studioComponent.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.arn', props);
    return resource.getResponseField('studioComponent.arn') as unknown as string;
  }

  public get configuration(): NimbleResponsesCreateStudioComponentStudioComponentConfiguration {
    return new NimbleResponsesCreateStudioComponentStudioComponentConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.createdAt'),
        outputPath: 'studioComponent.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.createdAt', props);
    return resource.getResponseField('studioComponent.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.createdBy'),
        outputPath: 'studioComponent.createdBy',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.createdBy', props);
    return resource.getResponseField('studioComponent.createdBy') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.description'),
        outputPath: 'studioComponent.description',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.description', props);
    return resource.getResponseField('studioComponent.description') as unknown as string;
  }

  public get ec2SecurityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.ec2SecurityGroupIds'),
        outputPath: 'studioComponent.ec2SecurityGroupIds',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.ec2SecurityGroupIds', props);
    return resource.getResponseField('studioComponent.ec2SecurityGroupIds') as unknown as string[];
  }

  public get initializationScripts(): shapes.NimbleStudioComponentInitializationScript[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.initializationScripts'),
        outputPath: 'studioComponent.initializationScripts',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.initializationScripts', props);
    return resource.getResponseField('studioComponent.initializationScripts') as unknown as shapes.NimbleStudioComponentInitializationScript[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.name'),
        outputPath: 'studioComponent.name',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.name', props);
    return resource.getResponseField('studioComponent.name') as unknown as string;
  }

  public get scriptParameters(): shapes.NimbleScriptParameterKeyValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.scriptParameters'),
        outputPath: 'studioComponent.scriptParameters',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.scriptParameters', props);
    return resource.getResponseField('studioComponent.scriptParameters') as unknown as shapes.NimbleScriptParameterKeyValue[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.state'),
        outputPath: 'studioComponent.state',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.state', props);
    return resource.getResponseField('studioComponent.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.statusCode'),
        outputPath: 'studioComponent.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.statusCode', props);
    return resource.getResponseField('studioComponent.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.statusMessage'),
        outputPath: 'studioComponent.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.statusMessage', props);
    return resource.getResponseField('studioComponent.statusMessage') as unknown as string;
  }

  public get studioComponentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.studioComponentId'),
        outputPath: 'studioComponent.studioComponentId',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.studioComponentId', props);
    return resource.getResponseField('studioComponent.studioComponentId') as unknown as string;
  }

  public get subtype(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.subtype'),
        outputPath: 'studioComponent.subtype',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.subtype', props);
    return resource.getResponseField('studioComponent.subtype') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.tags'),
        outputPath: 'studioComponent.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.tags', props);
    return resource.getResponseField('studioComponent.tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.type'),
        outputPath: 'studioComponent.type',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.type', props);
    return resource.getResponseField('studioComponent.type') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.updatedAt'),
        outputPath: 'studioComponent.updatedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.updatedAt', props);
    return resource.getResponseField('studioComponent.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.updatedBy'),
        outputPath: 'studioComponent.updatedBy',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.updatedBy', props);
    return resource.getResponseField('studioComponent.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesCreateStudioComponentStudioComponentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStudioComponentRequest) {
  }

  public get activeDirectoryConfiguration(): NimbleResponsesCreateStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration {
    return new NimbleResponsesCreateStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get computeFarmConfiguration(): NimbleResponsesCreateStudioComponentStudioComponentConfigurationComputeFarmConfiguration {
    return new NimbleResponsesCreateStudioComponentStudioComponentConfigurationComputeFarmConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get licenseServiceConfiguration(): NimbleResponsesCreateStudioComponentStudioComponentConfigurationLicenseServiceConfiguration {
    return new NimbleResponsesCreateStudioComponentStudioComponentConfigurationLicenseServiceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get sharedFileSystemConfiguration(): NimbleResponsesCreateStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration {
    return new NimbleResponsesCreateStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesCreateStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStudioComponentRequest) {
  }

  public get computerAttributes(): shapes.NimbleActiveDirectoryComputerAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.computerAttributes'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.computerAttributes',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.computerAttributes', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.computerAttributes') as unknown as shapes.NimbleActiveDirectoryComputerAttribute[];
  }

  public get directoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.directoryId'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.directoryId',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.directoryId', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.directoryId') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName') as unknown as string;
  }

}

export class NimbleResponsesCreateStudioComponentStudioComponentConfigurationComputeFarmConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStudioComponentRequest) {
  }

  public get activeDirectoryUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser'),
        outputPath: 'studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser', props);
    return resource.getResponseField('studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.computeFarmConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.computeFarmConfiguration.endpoint',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.computeFarmConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.computeFarmConfiguration.endpoint') as unknown as string;
  }

}

export class NimbleResponsesCreateStudioComponentStudioComponentConfigurationLicenseServiceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStudioComponentRequest) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.licenseServiceConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.licenseServiceConfiguration.endpoint',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.licenseServiceConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.licenseServiceConfiguration.endpoint') as unknown as string;
  }

}

export class NimbleResponsesCreateStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleCreateStudioComponentRequest) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.endpoint',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.endpoint') as unknown as string;
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId') as unknown as string;
  }

  public get linuxMountPoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint') as unknown as string;
  }

  public get shareName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.shareName'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.shareName',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.shareName', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.shareName') as unknown as string;
  }

  public get windowsMountDrive(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.CreateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive') as unknown as string;
  }

}

export class NimbleResponsesDeleteLaunchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteLaunchProfileRequest) {
  }

  public get launchProfile(): NimbleResponsesDeleteLaunchProfileLaunchProfile {
    return new NimbleResponsesDeleteLaunchProfileLaunchProfile(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesDeleteLaunchProfileLaunchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteLaunchProfileRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.arn'),
        outputPath: 'launchProfile.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.arn', props);
    return resource.getResponseField('launchProfile.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.createdAt'),
        outputPath: 'launchProfile.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.createdAt', props);
    return resource.getResponseField('launchProfile.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.createdBy'),
        outputPath: 'launchProfile.createdBy',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.createdBy', props);
    return resource.getResponseField('launchProfile.createdBy') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.description'),
        outputPath: 'launchProfile.description',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.description', props);
    return resource.getResponseField('launchProfile.description') as unknown as string;
  }

  public get ec2SubnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.ec2SubnetIds'),
        outputPath: 'launchProfile.ec2SubnetIds',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.ec2SubnetIds', props);
    return resource.getResponseField('launchProfile.ec2SubnetIds') as unknown as string[];
  }

  public get launchProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.launchProfileId'),
        outputPath: 'launchProfile.launchProfileId',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.launchProfileId', props);
    return resource.getResponseField('launchProfile.launchProfileId') as unknown as string;
  }

  public get launchProfileProtocolVersions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.launchProfileProtocolVersions'),
        outputPath: 'launchProfile.launchProfileProtocolVersions',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.launchProfileProtocolVersions', props);
    return resource.getResponseField('launchProfile.launchProfileProtocolVersions') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.name'),
        outputPath: 'launchProfile.name',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.name', props);
    return resource.getResponseField('launchProfile.name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.state'),
        outputPath: 'launchProfile.state',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.state', props);
    return resource.getResponseField('launchProfile.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.statusCode'),
        outputPath: 'launchProfile.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.statusCode', props);
    return resource.getResponseField('launchProfile.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.statusMessage'),
        outputPath: 'launchProfile.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.statusMessage', props);
    return resource.getResponseField('launchProfile.statusMessage') as unknown as string;
  }

  public get streamConfiguration(): NimbleResponsesDeleteLaunchProfileLaunchProfileStreamConfiguration {
    return new NimbleResponsesDeleteLaunchProfileLaunchProfileStreamConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get studioComponentIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.studioComponentIds'),
        outputPath: 'launchProfile.studioComponentIds',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.studioComponentIds', props);
    return resource.getResponseField('launchProfile.studioComponentIds') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.tags'),
        outputPath: 'launchProfile.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.tags', props);
    return resource.getResponseField('launchProfile.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.updatedAt'),
        outputPath: 'launchProfile.updatedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.updatedAt', props);
    return resource.getResponseField('launchProfile.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.updatedBy'),
        outputPath: 'launchProfile.updatedBy',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.updatedBy', props);
    return resource.getResponseField('launchProfile.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesDeleteLaunchProfileLaunchProfileStreamConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteLaunchProfileRequest) {
  }

  public get clipboardMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.streamConfiguration.clipboardMode'),
        outputPath: 'launchProfile.streamConfiguration.clipboardMode',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.streamConfiguration.clipboardMode', props);
    return resource.getResponseField('launchProfile.streamConfiguration.clipboardMode') as unknown as string;
  }

  public get ec2InstanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.streamConfiguration.ec2InstanceTypes'),
        outputPath: 'launchProfile.streamConfiguration.ec2InstanceTypes',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.streamConfiguration.ec2InstanceTypes', props);
    return resource.getResponseField('launchProfile.streamConfiguration.ec2InstanceTypes') as unknown as string[];
  }

  public get maxSessionLengthInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.streamConfiguration.maxSessionLengthInMinutes'),
        outputPath: 'launchProfile.streamConfiguration.maxSessionLengthInMinutes',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.streamConfiguration.maxSessionLengthInMinutes', props);
    return resource.getResponseField('launchProfile.streamConfiguration.maxSessionLengthInMinutes') as unknown as number;
  }

  public get streamingImageIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteLaunchProfile.launchProfile.streamConfiguration.streamingImageIds'),
        outputPath: 'launchProfile.streamConfiguration.streamingImageIds',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLaunchProfile.launchProfile.streamConfiguration.streamingImageIds', props);
    return resource.getResponseField('launchProfile.streamConfiguration.streamingImageIds') as unknown as string[];
  }

}

export class NimbleResponsesDeleteStreamingImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStreamingImageRequest) {
  }

  public get streamingImage(): NimbleResponsesDeleteStreamingImageStreamingImage {
    return new NimbleResponsesDeleteStreamingImageStreamingImage(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesDeleteStreamingImageStreamingImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStreamingImageRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.arn'),
        outputPath: 'streamingImage.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.arn', props);
    return resource.getResponseField('streamingImage.arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.description'),
        outputPath: 'streamingImage.description',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.description', props);
    return resource.getResponseField('streamingImage.description') as unknown as string;
  }

  public get ec2ImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.ec2ImageId'),
        outputPath: 'streamingImage.ec2ImageId',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.ec2ImageId', props);
    return resource.getResponseField('streamingImage.ec2ImageId') as unknown as string;
  }

  public get encryptionConfiguration(): NimbleResponsesDeleteStreamingImageStreamingImageEncryptionConfiguration {
    return new NimbleResponsesDeleteStreamingImageStreamingImageEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get eulaIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.eulaIds'),
        outputPath: 'streamingImage.eulaIds',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.eulaIds', props);
    return resource.getResponseField('streamingImage.eulaIds') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.name'),
        outputPath: 'streamingImage.name',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.name', props);
    return resource.getResponseField('streamingImage.name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.owner'),
        outputPath: 'streamingImage.owner',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.owner', props);
    return resource.getResponseField('streamingImage.owner') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.platform'),
        outputPath: 'streamingImage.platform',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.platform', props);
    return resource.getResponseField('streamingImage.platform') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.state'),
        outputPath: 'streamingImage.state',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.state', props);
    return resource.getResponseField('streamingImage.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.statusCode'),
        outputPath: 'streamingImage.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.statusCode', props);
    return resource.getResponseField('streamingImage.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.statusMessage'),
        outputPath: 'streamingImage.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.statusMessage', props);
    return resource.getResponseField('streamingImage.statusMessage') as unknown as string;
  }

  public get streamingImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.streamingImageId'),
        outputPath: 'streamingImage.streamingImageId',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.streamingImageId', props);
    return resource.getResponseField('streamingImage.streamingImageId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.tags'),
        outputPath: 'streamingImage.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.tags', props);
    return resource.getResponseField('streamingImage.tags') as unknown as Record<string, string>;
  }

}

export class NimbleResponsesDeleteStreamingImageStreamingImageEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStreamingImageRequest) {
  }

  public get keyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.encryptionConfiguration.keyArn'),
        outputPath: 'streamingImage.encryptionConfiguration.keyArn',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.encryptionConfiguration.keyArn', props);
    return resource.getResponseField('streamingImage.encryptionConfiguration.keyArn') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingImage.streamingImage.encryptionConfiguration.keyType'),
        outputPath: 'streamingImage.encryptionConfiguration.keyType',
        parameters: {
          clientToken: this.__input.clientToken,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingImage.streamingImage.encryptionConfiguration.keyType', props);
    return resource.getResponseField('streamingImage.encryptionConfiguration.keyType') as unknown as string;
  }

}

export class NimbleResponsesDeleteStreamingSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStreamingSessionRequest) {
  }

  public get session(): NimbleResponsesDeleteStreamingSessionSession {
    return new NimbleResponsesDeleteStreamingSessionSession(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesDeleteStreamingSessionSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStreamingSessionRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.arn'),
        outputPath: 'session.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.arn', props);
    return resource.getResponseField('session.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.createdAt'),
        outputPath: 'session.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.createdAt', props);
    return resource.getResponseField('session.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.createdBy'),
        outputPath: 'session.createdBy',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.createdBy', props);
    return resource.getResponseField('session.createdBy') as unknown as string;
  }

  public get ec2InstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.ec2InstanceType'),
        outputPath: 'session.ec2InstanceType',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.ec2InstanceType', props);
    return resource.getResponseField('session.ec2InstanceType') as unknown as string;
  }

  public get launchProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.launchProfileId'),
        outputPath: 'session.launchProfileId',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.launchProfileId', props);
    return resource.getResponseField('session.launchProfileId') as unknown as string;
  }

  public get sessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.sessionId'),
        outputPath: 'session.sessionId',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.sessionId', props);
    return resource.getResponseField('session.sessionId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.state'),
        outputPath: 'session.state',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.state', props);
    return resource.getResponseField('session.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.statusCode'),
        outputPath: 'session.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.statusCode', props);
    return resource.getResponseField('session.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.statusMessage'),
        outputPath: 'session.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.statusMessage', props);
    return resource.getResponseField('session.statusMessage') as unknown as string;
  }

  public get streamingImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.streamingImageId'),
        outputPath: 'session.streamingImageId',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.streamingImageId', props);
    return resource.getResponseField('session.streamingImageId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.tags'),
        outputPath: 'session.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.tags', props);
    return resource.getResponseField('session.tags') as unknown as Record<string, string>;
  }

  public get terminateAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.terminateAt'),
        outputPath: 'session.terminateAt',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.terminateAt', props);
    return resource.getResponseField('session.terminateAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.updatedAt'),
        outputPath: 'session.updatedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.updatedAt', props);
    return resource.getResponseField('session.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStreamingSession.session.updatedBy'),
        outputPath: 'session.updatedBy',
        parameters: {
          clientToken: this.__input.clientToken,
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStreamingSession.session.updatedBy', props);
    return resource.getResponseField('session.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesDeleteStudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStudioRequest) {
  }

  public get studio(): NimbleResponsesDeleteStudioStudio {
    return new NimbleResponsesDeleteStudioStudio(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesDeleteStudioStudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStudioRequest) {
  }

  public get adminRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.adminRoleArn'),
        outputPath: 'studio.adminRoleArn',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.adminRoleArn', props);
    return resource.getResponseField('studio.adminRoleArn') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.arn'),
        outputPath: 'studio.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.arn', props);
    return resource.getResponseField('studio.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.createdAt'),
        outputPath: 'studio.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.createdAt', props);
    return resource.getResponseField('studio.createdAt') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.displayName'),
        outputPath: 'studio.displayName',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.displayName', props);
    return resource.getResponseField('studio.displayName') as unknown as string;
  }

  public get homeRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.homeRegion'),
        outputPath: 'studio.homeRegion',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.homeRegion', props);
    return resource.getResponseField('studio.homeRegion') as unknown as string;
  }

  public get ssoClientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.ssoClientId'),
        outputPath: 'studio.ssoClientId',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.ssoClientId', props);
    return resource.getResponseField('studio.ssoClientId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.state'),
        outputPath: 'studio.state',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.state', props);
    return resource.getResponseField('studio.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.statusCode'),
        outputPath: 'studio.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.statusCode', props);
    return resource.getResponseField('studio.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.statusMessage'),
        outputPath: 'studio.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.statusMessage', props);
    return resource.getResponseField('studio.statusMessage') as unknown as string;
  }

  public get studioEncryptionConfiguration(): NimbleResponsesDeleteStudioStudioStudioEncryptionConfiguration {
    return new NimbleResponsesDeleteStudioStudioStudioEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get studioId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.studioId'),
        outputPath: 'studio.studioId',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.studioId', props);
    return resource.getResponseField('studio.studioId') as unknown as string;
  }

  public get studioName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.studioName'),
        outputPath: 'studio.studioName',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.studioName', props);
    return resource.getResponseField('studio.studioName') as unknown as string;
  }

  public get studioUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.studioUrl'),
        outputPath: 'studio.studioUrl',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.studioUrl', props);
    return resource.getResponseField('studio.studioUrl') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.tags'),
        outputPath: 'studio.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.tags', props);
    return resource.getResponseField('studio.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.updatedAt'),
        outputPath: 'studio.updatedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.updatedAt', props);
    return resource.getResponseField('studio.updatedAt') as unknown as string;
  }

  public get userRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.userRoleArn'),
        outputPath: 'studio.userRoleArn',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.userRoleArn', props);
    return resource.getResponseField('studio.userRoleArn') as unknown as string;
  }

}

export class NimbleResponsesDeleteStudioStudioStudioEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStudioRequest) {
  }

  public get keyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.studioEncryptionConfiguration.keyArn'),
        outputPath: 'studio.studioEncryptionConfiguration.keyArn',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.studioEncryptionConfiguration.keyArn', props);
    return resource.getResponseField('studio.studioEncryptionConfiguration.keyArn') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudio.studio.studioEncryptionConfiguration.keyType'),
        outputPath: 'studio.studioEncryptionConfiguration.keyType',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudio.studio.studioEncryptionConfiguration.keyType', props);
    return resource.getResponseField('studio.studioEncryptionConfiguration.keyType') as unknown as string;
  }

}

export class NimbleResponsesDeleteStudioComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStudioComponentRequest) {
  }

  public get studioComponent(): NimbleResponsesDeleteStudioComponentStudioComponent {
    return new NimbleResponsesDeleteStudioComponentStudioComponent(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesDeleteStudioComponentStudioComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStudioComponentRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.arn'),
        outputPath: 'studioComponent.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.arn', props);
    return resource.getResponseField('studioComponent.arn') as unknown as string;
  }

  public get configuration(): NimbleResponsesDeleteStudioComponentStudioComponentConfiguration {
    return new NimbleResponsesDeleteStudioComponentStudioComponentConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.createdAt'),
        outputPath: 'studioComponent.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.createdAt', props);
    return resource.getResponseField('studioComponent.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.createdBy'),
        outputPath: 'studioComponent.createdBy',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.createdBy', props);
    return resource.getResponseField('studioComponent.createdBy') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.description'),
        outputPath: 'studioComponent.description',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.description', props);
    return resource.getResponseField('studioComponent.description') as unknown as string;
  }

  public get ec2SecurityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.ec2SecurityGroupIds'),
        outputPath: 'studioComponent.ec2SecurityGroupIds',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.ec2SecurityGroupIds', props);
    return resource.getResponseField('studioComponent.ec2SecurityGroupIds') as unknown as string[];
  }

  public get initializationScripts(): shapes.NimbleStudioComponentInitializationScript[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.initializationScripts'),
        outputPath: 'studioComponent.initializationScripts',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.initializationScripts', props);
    return resource.getResponseField('studioComponent.initializationScripts') as unknown as shapes.NimbleStudioComponentInitializationScript[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.name'),
        outputPath: 'studioComponent.name',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.name', props);
    return resource.getResponseField('studioComponent.name') as unknown as string;
  }

  public get scriptParameters(): shapes.NimbleScriptParameterKeyValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.scriptParameters'),
        outputPath: 'studioComponent.scriptParameters',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.scriptParameters', props);
    return resource.getResponseField('studioComponent.scriptParameters') as unknown as shapes.NimbleScriptParameterKeyValue[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.state'),
        outputPath: 'studioComponent.state',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.state', props);
    return resource.getResponseField('studioComponent.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.statusCode'),
        outputPath: 'studioComponent.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.statusCode', props);
    return resource.getResponseField('studioComponent.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.statusMessage'),
        outputPath: 'studioComponent.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.statusMessage', props);
    return resource.getResponseField('studioComponent.statusMessage') as unknown as string;
  }

  public get studioComponentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.studioComponentId'),
        outputPath: 'studioComponent.studioComponentId',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.studioComponentId', props);
    return resource.getResponseField('studioComponent.studioComponentId') as unknown as string;
  }

  public get subtype(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.subtype'),
        outputPath: 'studioComponent.subtype',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.subtype', props);
    return resource.getResponseField('studioComponent.subtype') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.tags'),
        outputPath: 'studioComponent.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.tags', props);
    return resource.getResponseField('studioComponent.tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.type'),
        outputPath: 'studioComponent.type',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.type', props);
    return resource.getResponseField('studioComponent.type') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.updatedAt'),
        outputPath: 'studioComponent.updatedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.updatedAt', props);
    return resource.getResponseField('studioComponent.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.updatedBy'),
        outputPath: 'studioComponent.updatedBy',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.updatedBy', props);
    return resource.getResponseField('studioComponent.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesDeleteStudioComponentStudioComponentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStudioComponentRequest) {
  }

  public get activeDirectoryConfiguration(): NimbleResponsesDeleteStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration {
    return new NimbleResponsesDeleteStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get computeFarmConfiguration(): NimbleResponsesDeleteStudioComponentStudioComponentConfigurationComputeFarmConfiguration {
    return new NimbleResponsesDeleteStudioComponentStudioComponentConfigurationComputeFarmConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get licenseServiceConfiguration(): NimbleResponsesDeleteStudioComponentStudioComponentConfigurationLicenseServiceConfiguration {
    return new NimbleResponsesDeleteStudioComponentStudioComponentConfigurationLicenseServiceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get sharedFileSystemConfiguration(): NimbleResponsesDeleteStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration {
    return new NimbleResponsesDeleteStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesDeleteStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStudioComponentRequest) {
  }

  public get computerAttributes(): shapes.NimbleActiveDirectoryComputerAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.computerAttributes'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.computerAttributes',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.computerAttributes', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.computerAttributes') as unknown as shapes.NimbleActiveDirectoryComputerAttribute[];
  }

  public get directoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.directoryId'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.directoryId',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.directoryId', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.directoryId') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName') as unknown as string;
  }

}

export class NimbleResponsesDeleteStudioComponentStudioComponentConfigurationComputeFarmConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStudioComponentRequest) {
  }

  public get activeDirectoryUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser'),
        outputPath: 'studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser', props);
    return resource.getResponseField('studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.computeFarmConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.computeFarmConfiguration.endpoint',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.computeFarmConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.computeFarmConfiguration.endpoint') as unknown as string;
  }

}

export class NimbleResponsesDeleteStudioComponentStudioComponentConfigurationLicenseServiceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStudioComponentRequest) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.licenseServiceConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.licenseServiceConfiguration.endpoint',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.licenseServiceConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.licenseServiceConfiguration.endpoint') as unknown as string;
  }

}

export class NimbleResponsesDeleteStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleDeleteStudioComponentRequest) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.endpoint',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.endpoint') as unknown as string;
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId') as unknown as string;
  }

  public get linuxMountPoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint') as unknown as string;
  }

  public get shareName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.shareName'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.shareName',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.shareName', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.shareName') as unknown as string;
  }

  public get windowsMountDrive(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.DeleteStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive',
        parameters: {
          clientToken: this.__input.clientToken,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive') as unknown as string;
  }

}

export class NimbleResponsesFetchEula {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetEulaRequest) {
  }

  public get eula(): NimbleResponsesFetchEulaEula {
    return new NimbleResponsesFetchEulaEula(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchEulaEula {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetEulaRequest) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEula',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetEula.eula.content'),
        outputPath: 'eula.content',
        parameters: {
          eulaId: this.__input.eulaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEula.eula.content', props);
    return resource.getResponseField('eula.content') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEula',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetEula.eula.createdAt'),
        outputPath: 'eula.createdAt',
        parameters: {
          eulaId: this.__input.eulaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEula.eula.createdAt', props);
    return resource.getResponseField('eula.createdAt') as unknown as string;
  }

  public get eulaId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEula',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetEula.eula.eulaId'),
        outputPath: 'eula.eulaId',
        parameters: {
          eulaId: this.__input.eulaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEula.eula.eulaId', props);
    return resource.getResponseField('eula.eulaId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEula',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetEula.eula.name'),
        outputPath: 'eula.name',
        parameters: {
          eulaId: this.__input.eulaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEula.eula.name', props);
    return resource.getResponseField('eula.name') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEula',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetEula.eula.updatedAt'),
        outputPath: 'eula.updatedAt',
        parameters: {
          eulaId: this.__input.eulaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEula.eula.updatedAt', props);
    return resource.getResponseField('eula.updatedAt') as unknown as string;
  }

}

export class NimbleResponsesFetchLaunchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileRequest) {
  }

  public get launchProfile(): NimbleResponsesFetchLaunchProfileLaunchProfile {
    return new NimbleResponsesFetchLaunchProfileLaunchProfile(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchLaunchProfileLaunchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.arn'),
        outputPath: 'launchProfile.arn',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.arn', props);
    return resource.getResponseField('launchProfile.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.createdAt'),
        outputPath: 'launchProfile.createdAt',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.createdAt', props);
    return resource.getResponseField('launchProfile.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.createdBy'),
        outputPath: 'launchProfile.createdBy',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.createdBy', props);
    return resource.getResponseField('launchProfile.createdBy') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.description'),
        outputPath: 'launchProfile.description',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.description', props);
    return resource.getResponseField('launchProfile.description') as unknown as string;
  }

  public get ec2SubnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.ec2SubnetIds'),
        outputPath: 'launchProfile.ec2SubnetIds',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.ec2SubnetIds', props);
    return resource.getResponseField('launchProfile.ec2SubnetIds') as unknown as string[];
  }

  public get launchProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.launchProfileId'),
        outputPath: 'launchProfile.launchProfileId',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.launchProfileId', props);
    return resource.getResponseField('launchProfile.launchProfileId') as unknown as string;
  }

  public get launchProfileProtocolVersions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.launchProfileProtocolVersions'),
        outputPath: 'launchProfile.launchProfileProtocolVersions',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.launchProfileProtocolVersions', props);
    return resource.getResponseField('launchProfile.launchProfileProtocolVersions') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.name'),
        outputPath: 'launchProfile.name',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.name', props);
    return resource.getResponseField('launchProfile.name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.state'),
        outputPath: 'launchProfile.state',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.state', props);
    return resource.getResponseField('launchProfile.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.statusCode'),
        outputPath: 'launchProfile.statusCode',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.statusCode', props);
    return resource.getResponseField('launchProfile.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.statusMessage'),
        outputPath: 'launchProfile.statusMessage',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.statusMessage', props);
    return resource.getResponseField('launchProfile.statusMessage') as unknown as string;
  }

  public get streamConfiguration(): NimbleResponsesFetchLaunchProfileLaunchProfileStreamConfiguration {
    return new NimbleResponsesFetchLaunchProfileLaunchProfileStreamConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get studioComponentIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.studioComponentIds'),
        outputPath: 'launchProfile.studioComponentIds',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.studioComponentIds', props);
    return resource.getResponseField('launchProfile.studioComponentIds') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.tags'),
        outputPath: 'launchProfile.tags',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.tags', props);
    return resource.getResponseField('launchProfile.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.updatedAt'),
        outputPath: 'launchProfile.updatedAt',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.updatedAt', props);
    return resource.getResponseField('launchProfile.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.updatedBy'),
        outputPath: 'launchProfile.updatedBy',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.updatedBy', props);
    return resource.getResponseField('launchProfile.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesFetchLaunchProfileLaunchProfileStreamConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileRequest) {
  }

  public get clipboardMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.streamConfiguration.clipboardMode'),
        outputPath: 'launchProfile.streamConfiguration.clipboardMode',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.streamConfiguration.clipboardMode', props);
    return resource.getResponseField('launchProfile.streamConfiguration.clipboardMode') as unknown as string;
  }

  public get ec2InstanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.streamConfiguration.ec2InstanceTypes'),
        outputPath: 'launchProfile.streamConfiguration.ec2InstanceTypes',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.streamConfiguration.ec2InstanceTypes', props);
    return resource.getResponseField('launchProfile.streamConfiguration.ec2InstanceTypes') as unknown as string[];
  }

  public get maxSessionLengthInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.streamConfiguration.maxSessionLengthInMinutes'),
        outputPath: 'launchProfile.streamConfiguration.maxSessionLengthInMinutes',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.streamConfiguration.maxSessionLengthInMinutes', props);
    return resource.getResponseField('launchProfile.streamConfiguration.maxSessionLengthInMinutes') as unknown as number;
  }

  public get streamingImageIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfile.launchProfile.streamConfiguration.streamingImageIds'),
        outputPath: 'launchProfile.streamConfiguration.streamingImageIds',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfile.launchProfile.streamConfiguration.streamingImageIds', props);
    return resource.getResponseField('launchProfile.streamConfiguration.streamingImageIds') as unknown as string[];
  }

}

export class NimbleResponsesFetchLaunchProfileDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileDetailsRequest) {
  }

  public get launchProfile(): NimbleResponsesFetchLaunchProfileDetailsLaunchProfile {
    return new NimbleResponsesFetchLaunchProfileDetailsLaunchProfile(this.__scope, this.__resources, this.__input);
  }

  public get streamingImages(): shapes.NimbleStreamingImage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.streamingImages'),
        outputPath: 'streamingImages',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.streamingImages', props);
    return resource.getResponseField('streamingImages') as unknown as shapes.NimbleStreamingImage[];
  }

  public get studioComponentSummaries(): shapes.NimbleStudioComponentSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.studioComponentSummaries'),
        outputPath: 'studioComponentSummaries',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.studioComponentSummaries', props);
    return resource.getResponseField('studioComponentSummaries') as unknown as shapes.NimbleStudioComponentSummary[];
  }

}

export class NimbleResponsesFetchLaunchProfileDetailsLaunchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileDetailsRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.arn'),
        outputPath: 'launchProfile.arn',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.arn', props);
    return resource.getResponseField('launchProfile.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.createdAt'),
        outputPath: 'launchProfile.createdAt',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.createdAt', props);
    return resource.getResponseField('launchProfile.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.createdBy'),
        outputPath: 'launchProfile.createdBy',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.createdBy', props);
    return resource.getResponseField('launchProfile.createdBy') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.description'),
        outputPath: 'launchProfile.description',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.description', props);
    return resource.getResponseField('launchProfile.description') as unknown as string;
  }

  public get ec2SubnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.ec2SubnetIds'),
        outputPath: 'launchProfile.ec2SubnetIds',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.ec2SubnetIds', props);
    return resource.getResponseField('launchProfile.ec2SubnetIds') as unknown as string[];
  }

  public get launchProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.launchProfileId'),
        outputPath: 'launchProfile.launchProfileId',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.launchProfileId', props);
    return resource.getResponseField('launchProfile.launchProfileId') as unknown as string;
  }

  public get launchProfileProtocolVersions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.launchProfileProtocolVersions'),
        outputPath: 'launchProfile.launchProfileProtocolVersions',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.launchProfileProtocolVersions', props);
    return resource.getResponseField('launchProfile.launchProfileProtocolVersions') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.name'),
        outputPath: 'launchProfile.name',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.name', props);
    return resource.getResponseField('launchProfile.name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.state'),
        outputPath: 'launchProfile.state',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.state', props);
    return resource.getResponseField('launchProfile.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.statusCode'),
        outputPath: 'launchProfile.statusCode',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.statusCode', props);
    return resource.getResponseField('launchProfile.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.statusMessage'),
        outputPath: 'launchProfile.statusMessage',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.statusMessage', props);
    return resource.getResponseField('launchProfile.statusMessage') as unknown as string;
  }

  public get streamConfiguration(): NimbleResponsesFetchLaunchProfileDetailsLaunchProfileStreamConfiguration {
    return new NimbleResponsesFetchLaunchProfileDetailsLaunchProfileStreamConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get studioComponentIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.studioComponentIds'),
        outputPath: 'launchProfile.studioComponentIds',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.studioComponentIds', props);
    return resource.getResponseField('launchProfile.studioComponentIds') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.tags'),
        outputPath: 'launchProfile.tags',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.tags', props);
    return resource.getResponseField('launchProfile.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.updatedAt'),
        outputPath: 'launchProfile.updatedAt',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.updatedAt', props);
    return resource.getResponseField('launchProfile.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.updatedBy'),
        outputPath: 'launchProfile.updatedBy',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.updatedBy', props);
    return resource.getResponseField('launchProfile.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesFetchLaunchProfileDetailsLaunchProfileStreamConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileDetailsRequest) {
  }

  public get clipboardMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.streamConfiguration.clipboardMode'),
        outputPath: 'launchProfile.streamConfiguration.clipboardMode',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.streamConfiguration.clipboardMode', props);
    return resource.getResponseField('launchProfile.streamConfiguration.clipboardMode') as unknown as string;
  }

  public get ec2InstanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.streamConfiguration.ec2InstanceTypes'),
        outputPath: 'launchProfile.streamConfiguration.ec2InstanceTypes',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.streamConfiguration.ec2InstanceTypes', props);
    return resource.getResponseField('launchProfile.streamConfiguration.ec2InstanceTypes') as unknown as string[];
  }

  public get maxSessionLengthInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.streamConfiguration.maxSessionLengthInMinutes'),
        outputPath: 'launchProfile.streamConfiguration.maxSessionLengthInMinutes',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.streamConfiguration.maxSessionLengthInMinutes', props);
    return resource.getResponseField('launchProfile.streamConfiguration.maxSessionLengthInMinutes') as unknown as number;
  }

  public get streamingImageIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileDetails',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileDetails.launchProfile.streamConfiguration.streamingImageIds'),
        outputPath: 'launchProfile.streamConfiguration.streamingImageIds',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileDetails.launchProfile.streamConfiguration.streamingImageIds', props);
    return resource.getResponseField('launchProfile.streamConfiguration.streamingImageIds') as unknown as string[];
  }

}

export class NimbleResponsesFetchLaunchProfileInitialization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileInitializationRequest) {
  }

  public get launchProfileInitialization(): NimbleResponsesFetchLaunchProfileInitializationLaunchProfileInitialization {
    return new NimbleResponsesFetchLaunchProfileInitializationLaunchProfileInitialization(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchLaunchProfileInitializationLaunchProfileInitialization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileInitializationRequest) {
  }

  public get activeDirectory(): NimbleResponsesFetchLaunchProfileInitializationLaunchProfileInitializationActiveDirectory {
    return new NimbleResponsesFetchLaunchProfileInitializationLaunchProfileInitializationActiveDirectory(this.__scope, this.__resources, this.__input);
  }

  public get ec2SecurityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.ec2SecurityGroupIds'),
        outputPath: 'launchProfileInitialization.ec2SecurityGroupIds',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.ec2SecurityGroupIds', props);
    return resource.getResponseField('launchProfileInitialization.ec2SecurityGroupIds') as unknown as string[];
  }

  public get launchProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.launchProfileId'),
        outputPath: 'launchProfileInitialization.launchProfileId',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.launchProfileId', props);
    return resource.getResponseField('launchProfileInitialization.launchProfileId') as unknown as string;
  }

  public get launchProfileProtocolVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.launchProfileProtocolVersion'),
        outputPath: 'launchProfileInitialization.launchProfileProtocolVersion',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.launchProfileProtocolVersion', props);
    return resource.getResponseField('launchProfileInitialization.launchProfileProtocolVersion') as unknown as string;
  }

  public get launchPurpose(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.launchPurpose'),
        outputPath: 'launchProfileInitialization.launchPurpose',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.launchPurpose', props);
    return resource.getResponseField('launchProfileInitialization.launchPurpose') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.name'),
        outputPath: 'launchProfileInitialization.name',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.name', props);
    return resource.getResponseField('launchProfileInitialization.name') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.platform'),
        outputPath: 'launchProfileInitialization.platform',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.platform', props);
    return resource.getResponseField('launchProfileInitialization.platform') as unknown as string;
  }

  public get systemInitializationScripts(): shapes.NimbleLaunchProfileInitializationScript[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.systemInitializationScripts'),
        outputPath: 'launchProfileInitialization.systemInitializationScripts',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.systemInitializationScripts', props);
    return resource.getResponseField('launchProfileInitialization.systemInitializationScripts') as unknown as shapes.NimbleLaunchProfileInitializationScript[];
  }

  public get userInitializationScripts(): shapes.NimbleLaunchProfileInitializationScript[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.userInitializationScripts'),
        outputPath: 'launchProfileInitialization.userInitializationScripts',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.userInitializationScripts', props);
    return resource.getResponseField('launchProfileInitialization.userInitializationScripts') as unknown as shapes.NimbleLaunchProfileInitializationScript[];
  }

}

export class NimbleResponsesFetchLaunchProfileInitializationLaunchProfileInitializationActiveDirectory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileInitializationRequest) {
  }

  public get computerAttributes(): shapes.NimbleActiveDirectoryComputerAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.computerAttributes'),
        outputPath: 'launchProfileInitialization.activeDirectory.computerAttributes',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.computerAttributes', props);
    return resource.getResponseField('launchProfileInitialization.activeDirectory.computerAttributes') as unknown as shapes.NimbleActiveDirectoryComputerAttribute[];
  }

  public get directoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.directoryId'),
        outputPath: 'launchProfileInitialization.activeDirectory.directoryId',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.directoryId', props);
    return resource.getResponseField('launchProfileInitialization.activeDirectory.directoryId') as unknown as string;
  }

  public get directoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.directoryName'),
        outputPath: 'launchProfileInitialization.activeDirectory.directoryName',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.directoryName', props);
    return resource.getResponseField('launchProfileInitialization.activeDirectory.directoryName') as unknown as string;
  }

  public get dnsIpAddresses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.dnsIpAddresses'),
        outputPath: 'launchProfileInitialization.activeDirectory.dnsIpAddresses',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.dnsIpAddresses', props);
    return resource.getResponseField('launchProfileInitialization.activeDirectory.dnsIpAddresses') as unknown as string[];
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.organizationalUnitDistinguishedName'),
        outputPath: 'launchProfileInitialization.activeDirectory.organizationalUnitDistinguishedName',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.organizationalUnitDistinguishedName', props);
    return resource.getResponseField('launchProfileInitialization.activeDirectory.organizationalUnitDistinguishedName') as unknown as string;
  }

  public get studioComponentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.studioComponentId'),
        outputPath: 'launchProfileInitialization.activeDirectory.studioComponentId',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.studioComponentId', props);
    return resource.getResponseField('launchProfileInitialization.activeDirectory.studioComponentId') as unknown as string;
  }

  public get studioComponentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileInitialization',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.studioComponentName'),
        outputPath: 'launchProfileInitialization.activeDirectory.studioComponentName',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          launchPurpose: this.__input.launchPurpose,
          platform: this.__input.platform,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileInitialization.launchProfileInitialization.activeDirectory.studioComponentName', props);
    return resource.getResponseField('launchProfileInitialization.activeDirectory.studioComponentName') as unknown as string;
  }

}

export class NimbleResponsesFetchLaunchProfileMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileMemberRequest) {
  }

  public get member(): NimbleResponsesFetchLaunchProfileMemberMember {
    return new NimbleResponsesFetchLaunchProfileMemberMember(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchLaunchProfileMemberMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetLaunchProfileMemberRequest) {
  }

  public get identityStoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileMember.member.identityStoreId'),
        outputPath: 'member.identityStoreId',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          principalId: this.__input.principalId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileMember.member.identityStoreId', props);
    return resource.getResponseField('member.identityStoreId') as unknown as string;
  }

  public get persona(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileMember.member.persona'),
        outputPath: 'member.persona',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          principalId: this.__input.principalId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileMember.member.persona', props);
    return resource.getResponseField('member.persona') as unknown as string;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchProfileMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetLaunchProfileMember.member.principalId'),
        outputPath: 'member.principalId',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          principalId: this.__input.principalId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchProfileMember.member.principalId', props);
    return resource.getResponseField('member.principalId') as unknown as string;
  }

}

export class NimbleResponsesFetchStreamingImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStreamingImageRequest) {
  }

  public get streamingImage(): NimbleResponsesFetchStreamingImageStreamingImage {
    return new NimbleResponsesFetchStreamingImageStreamingImage(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchStreamingImageStreamingImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStreamingImageRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.arn'),
        outputPath: 'streamingImage.arn',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.arn', props);
    return resource.getResponseField('streamingImage.arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.description'),
        outputPath: 'streamingImage.description',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.description', props);
    return resource.getResponseField('streamingImage.description') as unknown as string;
  }

  public get ec2ImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.ec2ImageId'),
        outputPath: 'streamingImage.ec2ImageId',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.ec2ImageId', props);
    return resource.getResponseField('streamingImage.ec2ImageId') as unknown as string;
  }

  public get encryptionConfiguration(): NimbleResponsesFetchStreamingImageStreamingImageEncryptionConfiguration {
    return new NimbleResponsesFetchStreamingImageStreamingImageEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get eulaIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.eulaIds'),
        outputPath: 'streamingImage.eulaIds',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.eulaIds', props);
    return resource.getResponseField('streamingImage.eulaIds') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.name'),
        outputPath: 'streamingImage.name',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.name', props);
    return resource.getResponseField('streamingImage.name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.owner'),
        outputPath: 'streamingImage.owner',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.owner', props);
    return resource.getResponseField('streamingImage.owner') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.platform'),
        outputPath: 'streamingImage.platform',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.platform', props);
    return resource.getResponseField('streamingImage.platform') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.state'),
        outputPath: 'streamingImage.state',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.state', props);
    return resource.getResponseField('streamingImage.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.statusCode'),
        outputPath: 'streamingImage.statusCode',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.statusCode', props);
    return resource.getResponseField('streamingImage.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.statusMessage'),
        outputPath: 'streamingImage.statusMessage',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.statusMessage', props);
    return resource.getResponseField('streamingImage.statusMessage') as unknown as string;
  }

  public get streamingImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.streamingImageId'),
        outputPath: 'streamingImage.streamingImageId',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.streamingImageId', props);
    return resource.getResponseField('streamingImage.streamingImageId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.tags'),
        outputPath: 'streamingImage.tags',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.tags', props);
    return resource.getResponseField('streamingImage.tags') as unknown as Record<string, string>;
  }

}

export class NimbleResponsesFetchStreamingImageStreamingImageEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStreamingImageRequest) {
  }

  public get keyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.encryptionConfiguration.keyArn'),
        outputPath: 'streamingImage.encryptionConfiguration.keyArn',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.encryptionConfiguration.keyArn', props);
    return resource.getResponseField('streamingImage.encryptionConfiguration.keyArn') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingImage.streamingImage.encryptionConfiguration.keyType'),
        outputPath: 'streamingImage.encryptionConfiguration.keyType',
        parameters: {
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingImage.streamingImage.encryptionConfiguration.keyType', props);
    return resource.getResponseField('streamingImage.encryptionConfiguration.keyType') as unknown as string;
  }

}

export class NimbleResponsesFetchStreamingSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStreamingSessionRequest) {
  }

  public get session(): NimbleResponsesFetchStreamingSessionSession {
    return new NimbleResponsesFetchStreamingSessionSession(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchStreamingSessionSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStreamingSessionRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.arn'),
        outputPath: 'session.arn',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.arn', props);
    return resource.getResponseField('session.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.createdAt'),
        outputPath: 'session.createdAt',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.createdAt', props);
    return resource.getResponseField('session.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.createdBy'),
        outputPath: 'session.createdBy',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.createdBy', props);
    return resource.getResponseField('session.createdBy') as unknown as string;
  }

  public get ec2InstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.ec2InstanceType'),
        outputPath: 'session.ec2InstanceType',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.ec2InstanceType', props);
    return resource.getResponseField('session.ec2InstanceType') as unknown as string;
  }

  public get launchProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.launchProfileId'),
        outputPath: 'session.launchProfileId',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.launchProfileId', props);
    return resource.getResponseField('session.launchProfileId') as unknown as string;
  }

  public get sessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.sessionId'),
        outputPath: 'session.sessionId',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.sessionId', props);
    return resource.getResponseField('session.sessionId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.state'),
        outputPath: 'session.state',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.state', props);
    return resource.getResponseField('session.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.statusCode'),
        outputPath: 'session.statusCode',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.statusCode', props);
    return resource.getResponseField('session.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.statusMessage'),
        outputPath: 'session.statusMessage',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.statusMessage', props);
    return resource.getResponseField('session.statusMessage') as unknown as string;
  }

  public get streamingImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.streamingImageId'),
        outputPath: 'session.streamingImageId',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.streamingImageId', props);
    return resource.getResponseField('session.streamingImageId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.tags'),
        outputPath: 'session.tags',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.tags', props);
    return resource.getResponseField('session.tags') as unknown as Record<string, string>;
  }

  public get terminateAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.terminateAt'),
        outputPath: 'session.terminateAt',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.terminateAt', props);
    return resource.getResponseField('session.terminateAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.updatedAt'),
        outputPath: 'session.updatedAt',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.updatedAt', props);
    return resource.getResponseField('session.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSession',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSession.session.updatedBy'),
        outputPath: 'session.updatedBy',
        parameters: {
          sessionId: this.__input.sessionId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSession.session.updatedBy', props);
    return resource.getResponseField('session.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesFetchStreamingSessionStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStreamingSessionStreamRequest) {
  }

  public get stream(): NimbleResponsesFetchStreamingSessionStreamStream {
    return new NimbleResponsesFetchStreamingSessionStreamStream(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchStreamingSessionStreamStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStreamingSessionStreamRequest) {
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSessionStream.stream.createdAt'),
        outputPath: 'stream.createdAt',
        parameters: {
          sessionId: this.__input.sessionId,
          streamId: this.__input.streamId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSessionStream.stream.createdAt', props);
    return resource.getResponseField('stream.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSessionStream.stream.createdBy'),
        outputPath: 'stream.createdBy',
        parameters: {
          sessionId: this.__input.sessionId,
          streamId: this.__input.streamId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSessionStream.stream.createdBy', props);
    return resource.getResponseField('stream.createdBy') as unknown as string;
  }

  public get expiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSessionStream.stream.expiresAt'),
        outputPath: 'stream.expiresAt',
        parameters: {
          sessionId: this.__input.sessionId,
          streamId: this.__input.streamId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSessionStream.stream.expiresAt', props);
    return resource.getResponseField('stream.expiresAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSessionStream.stream.state'),
        outputPath: 'stream.state',
        parameters: {
          sessionId: this.__input.sessionId,
          streamId: this.__input.streamId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSessionStream.stream.state', props);
    return resource.getResponseField('stream.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSessionStream.stream.statusCode'),
        outputPath: 'stream.statusCode',
        parameters: {
          sessionId: this.__input.sessionId,
          streamId: this.__input.streamId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSessionStream.stream.statusCode', props);
    return resource.getResponseField('stream.statusCode') as unknown as string;
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSessionStream.stream.streamId'),
        outputPath: 'stream.streamId',
        parameters: {
          sessionId: this.__input.sessionId,
          streamId: this.__input.streamId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSessionStream.stream.streamId', props);
    return resource.getResponseField('stream.streamId') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamingSessionStream',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStreamingSessionStream.stream.url'),
        outputPath: 'stream.url',
        parameters: {
          sessionId: this.__input.sessionId,
          streamId: this.__input.streamId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamingSessionStream.stream.url', props);
    return resource.getResponseField('stream.url') as unknown as string;
  }

}

export class NimbleResponsesFetchStudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioRequest) {
  }

  public get studio(): NimbleResponsesFetchStudioStudio {
    return new NimbleResponsesFetchStudioStudio(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchStudioStudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioRequest) {
  }

  public get adminRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.adminRoleArn'),
        outputPath: 'studio.adminRoleArn',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.adminRoleArn', props);
    return resource.getResponseField('studio.adminRoleArn') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.arn'),
        outputPath: 'studio.arn',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.arn', props);
    return resource.getResponseField('studio.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.createdAt'),
        outputPath: 'studio.createdAt',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.createdAt', props);
    return resource.getResponseField('studio.createdAt') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.displayName'),
        outputPath: 'studio.displayName',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.displayName', props);
    return resource.getResponseField('studio.displayName') as unknown as string;
  }

  public get homeRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.homeRegion'),
        outputPath: 'studio.homeRegion',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.homeRegion', props);
    return resource.getResponseField('studio.homeRegion') as unknown as string;
  }

  public get ssoClientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.ssoClientId'),
        outputPath: 'studio.ssoClientId',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.ssoClientId', props);
    return resource.getResponseField('studio.ssoClientId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.state'),
        outputPath: 'studio.state',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.state', props);
    return resource.getResponseField('studio.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.statusCode'),
        outputPath: 'studio.statusCode',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.statusCode', props);
    return resource.getResponseField('studio.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.statusMessage'),
        outputPath: 'studio.statusMessage',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.statusMessage', props);
    return resource.getResponseField('studio.statusMessage') as unknown as string;
  }

  public get studioEncryptionConfiguration(): NimbleResponsesFetchStudioStudioStudioEncryptionConfiguration {
    return new NimbleResponsesFetchStudioStudioStudioEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get studioId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.studioId'),
        outputPath: 'studio.studioId',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.studioId', props);
    return resource.getResponseField('studio.studioId') as unknown as string;
  }

  public get studioName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.studioName'),
        outputPath: 'studio.studioName',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.studioName', props);
    return resource.getResponseField('studio.studioName') as unknown as string;
  }

  public get studioUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.studioUrl'),
        outputPath: 'studio.studioUrl',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.studioUrl', props);
    return resource.getResponseField('studio.studioUrl') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.tags'),
        outputPath: 'studio.tags',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.tags', props);
    return resource.getResponseField('studio.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.updatedAt'),
        outputPath: 'studio.updatedAt',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.updatedAt', props);
    return resource.getResponseField('studio.updatedAt') as unknown as string;
  }

  public get userRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.userRoleArn'),
        outputPath: 'studio.userRoleArn',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.userRoleArn', props);
    return resource.getResponseField('studio.userRoleArn') as unknown as string;
  }

}

export class NimbleResponsesFetchStudioStudioStudioEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioRequest) {
  }

  public get keyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.studioEncryptionConfiguration.keyArn'),
        outputPath: 'studio.studioEncryptionConfiguration.keyArn',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.studioEncryptionConfiguration.keyArn', props);
    return resource.getResponseField('studio.studioEncryptionConfiguration.keyArn') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudio.studio.studioEncryptionConfiguration.keyType'),
        outputPath: 'studio.studioEncryptionConfiguration.keyType',
        parameters: {
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudio.studio.studioEncryptionConfiguration.keyType', props);
    return resource.getResponseField('studio.studioEncryptionConfiguration.keyType') as unknown as string;
  }

}

export class NimbleResponsesFetchStudioComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioComponentRequest) {
  }

  public get studioComponent(): NimbleResponsesFetchStudioComponentStudioComponent {
    return new NimbleResponsesFetchStudioComponentStudioComponent(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchStudioComponentStudioComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioComponentRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.arn'),
        outputPath: 'studioComponent.arn',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.arn', props);
    return resource.getResponseField('studioComponent.arn') as unknown as string;
  }

  public get configuration(): NimbleResponsesFetchStudioComponentStudioComponentConfiguration {
    return new NimbleResponsesFetchStudioComponentStudioComponentConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.createdAt'),
        outputPath: 'studioComponent.createdAt',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.createdAt', props);
    return resource.getResponseField('studioComponent.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.createdBy'),
        outputPath: 'studioComponent.createdBy',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.createdBy', props);
    return resource.getResponseField('studioComponent.createdBy') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.description'),
        outputPath: 'studioComponent.description',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.description', props);
    return resource.getResponseField('studioComponent.description') as unknown as string;
  }

  public get ec2SecurityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.ec2SecurityGroupIds'),
        outputPath: 'studioComponent.ec2SecurityGroupIds',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.ec2SecurityGroupIds', props);
    return resource.getResponseField('studioComponent.ec2SecurityGroupIds') as unknown as string[];
  }

  public get initializationScripts(): shapes.NimbleStudioComponentInitializationScript[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.initializationScripts'),
        outputPath: 'studioComponent.initializationScripts',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.initializationScripts', props);
    return resource.getResponseField('studioComponent.initializationScripts') as unknown as shapes.NimbleStudioComponentInitializationScript[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.name'),
        outputPath: 'studioComponent.name',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.name', props);
    return resource.getResponseField('studioComponent.name') as unknown as string;
  }

  public get scriptParameters(): shapes.NimbleScriptParameterKeyValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.scriptParameters'),
        outputPath: 'studioComponent.scriptParameters',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.scriptParameters', props);
    return resource.getResponseField('studioComponent.scriptParameters') as unknown as shapes.NimbleScriptParameterKeyValue[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.state'),
        outputPath: 'studioComponent.state',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.state', props);
    return resource.getResponseField('studioComponent.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.statusCode'),
        outputPath: 'studioComponent.statusCode',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.statusCode', props);
    return resource.getResponseField('studioComponent.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.statusMessage'),
        outputPath: 'studioComponent.statusMessage',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.statusMessage', props);
    return resource.getResponseField('studioComponent.statusMessage') as unknown as string;
  }

  public get studioComponentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.studioComponentId'),
        outputPath: 'studioComponent.studioComponentId',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.studioComponentId', props);
    return resource.getResponseField('studioComponent.studioComponentId') as unknown as string;
  }

  public get subtype(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.subtype'),
        outputPath: 'studioComponent.subtype',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.subtype', props);
    return resource.getResponseField('studioComponent.subtype') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.tags'),
        outputPath: 'studioComponent.tags',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.tags', props);
    return resource.getResponseField('studioComponent.tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.type'),
        outputPath: 'studioComponent.type',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.type', props);
    return resource.getResponseField('studioComponent.type') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.updatedAt'),
        outputPath: 'studioComponent.updatedAt',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.updatedAt', props);
    return resource.getResponseField('studioComponent.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.updatedBy'),
        outputPath: 'studioComponent.updatedBy',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.updatedBy', props);
    return resource.getResponseField('studioComponent.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesFetchStudioComponentStudioComponentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioComponentRequest) {
  }

  public get activeDirectoryConfiguration(): NimbleResponsesFetchStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration {
    return new NimbleResponsesFetchStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get computeFarmConfiguration(): NimbleResponsesFetchStudioComponentStudioComponentConfigurationComputeFarmConfiguration {
    return new NimbleResponsesFetchStudioComponentStudioComponentConfigurationComputeFarmConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get licenseServiceConfiguration(): NimbleResponsesFetchStudioComponentStudioComponentConfigurationLicenseServiceConfiguration {
    return new NimbleResponsesFetchStudioComponentStudioComponentConfigurationLicenseServiceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get sharedFileSystemConfiguration(): NimbleResponsesFetchStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration {
    return new NimbleResponsesFetchStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioComponentRequest) {
  }

  public get computerAttributes(): shapes.NimbleActiveDirectoryComputerAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.computerAttributes'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.computerAttributes',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.computerAttributes', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.computerAttributes') as unknown as shapes.NimbleActiveDirectoryComputerAttribute[];
  }

  public get directoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.directoryId'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.directoryId',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.directoryId', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.directoryId') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName') as unknown as string;
  }

}

export class NimbleResponsesFetchStudioComponentStudioComponentConfigurationComputeFarmConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioComponentRequest) {
  }

  public get activeDirectoryUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser'),
        outputPath: 'studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser', props);
    return resource.getResponseField('studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.computeFarmConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.computeFarmConfiguration.endpoint',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.computeFarmConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.computeFarmConfiguration.endpoint') as unknown as string;
  }

}

export class NimbleResponsesFetchStudioComponentStudioComponentConfigurationLicenseServiceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioComponentRequest) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.licenseServiceConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.licenseServiceConfiguration.endpoint',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.licenseServiceConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.licenseServiceConfiguration.endpoint') as unknown as string;
  }

}

export class NimbleResponsesFetchStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioComponentRequest) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.endpoint',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.endpoint') as unknown as string;
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId') as unknown as string;
  }

  public get linuxMountPoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint') as unknown as string;
  }

  public get shareName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.shareName'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.shareName',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.shareName', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.shareName') as unknown as string;
  }

  public get windowsMountDrive(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive',
        parameters: {
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive') as unknown as string;
  }

}

export class NimbleResponsesFetchStudioMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioMemberRequest) {
  }

  public get member(): NimbleResponsesFetchStudioMemberMember {
    return new NimbleResponsesFetchStudioMemberMember(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesFetchStudioMemberMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleGetStudioMemberRequest) {
  }

  public get identityStoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioMember.member.identityStoreId'),
        outputPath: 'member.identityStoreId',
        parameters: {
          principalId: this.__input.principalId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioMember.member.identityStoreId', props);
    return resource.getResponseField('member.identityStoreId') as unknown as string;
  }

  public get persona(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioMember.member.persona'),
        outputPath: 'member.persona',
        parameters: {
          principalId: this.__input.principalId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioMember.member.persona', props);
    return resource.getResponseField('member.persona') as unknown as string;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStudioMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.GetStudioMember.member.principalId'),
        outputPath: 'member.principalId',
        parameters: {
          principalId: this.__input.principalId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStudioMember.member.principalId', props);
    return resource.getResponseField('member.principalId') as unknown as string;
  }

}

export class NimbleResponsesListEulaAcceptances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleListEulaAcceptancesRequest) {
  }

  public get eulaAcceptances(): shapes.NimbleEulaAcceptance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEulaAcceptances',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListEulaAcceptances.eulaAcceptances'),
        outputPath: 'eulaAcceptances',
        parameters: {
          eulaIds: this.__input.eulaIds,
          nextToken: this.__input.nextToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEulaAcceptances.eulaAcceptances', props);
    return resource.getResponseField('eulaAcceptances') as unknown as shapes.NimbleEulaAcceptance[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEulaAcceptances',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListEulaAcceptances.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          eulaIds: this.__input.eulaIds,
          nextToken: this.__input.nextToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEulaAcceptances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class NimbleResponsesListEulas {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleListEulasRequest) {
  }

  public get eulas(): shapes.NimbleEula[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEulas',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListEulas.eulas'),
        outputPath: 'eulas',
        parameters: {
          eulaIds: this.__input.eulaIds,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEulas.eulas', props);
    return resource.getResponseField('eulas') as unknown as shapes.NimbleEula[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEulas',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListEulas.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          eulaIds: this.__input.eulaIds,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEulas.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class NimbleResponsesListLaunchProfileMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleListLaunchProfileMembersRequest) {
  }

  public get members(): shapes.NimbleLaunchProfileMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLaunchProfileMembers',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListLaunchProfileMembers.members'),
        outputPath: 'members',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLaunchProfileMembers.members', props);
    return resource.getResponseField('members') as unknown as shapes.NimbleLaunchProfileMembership[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLaunchProfileMembers',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListLaunchProfileMembers.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          launchProfileId: this.__input.launchProfileId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLaunchProfileMembers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class NimbleResponsesListLaunchProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleListLaunchProfilesRequest) {
  }

  public get launchProfiles(): shapes.NimbleLaunchProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLaunchProfiles',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListLaunchProfiles.launchProfiles'),
        outputPath: 'launchProfiles',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          principalId: this.__input.principalId,
          states: this.__input.states,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLaunchProfiles.launchProfiles', props);
    return resource.getResponseField('launchProfiles') as unknown as shapes.NimbleLaunchProfile[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLaunchProfiles',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListLaunchProfiles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          principalId: this.__input.principalId,
          states: this.__input.states,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLaunchProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class NimbleResponsesListStreamingImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleListStreamingImagesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreamingImages',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListStreamingImages.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          owner: this.__input.owner,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreamingImages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get streamingImages(): shapes.NimbleStreamingImage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreamingImages',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListStreamingImages.streamingImages'),
        outputPath: 'streamingImages',
        parameters: {
          nextToken: this.__input.nextToken,
          owner: this.__input.owner,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreamingImages.streamingImages', props);
    return resource.getResponseField('streamingImages') as unknown as shapes.NimbleStreamingImage[];
  }

}

export class NimbleResponsesListStreamingSessions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleListStreamingSessionsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreamingSessions',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListStreamingSessions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          createdBy: this.__input.createdBy,
          nextToken: this.__input.nextToken,
          sessionIds: this.__input.sessionIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreamingSessions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get sessions(): shapes.NimbleStreamingSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreamingSessions',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListStreamingSessions.sessions'),
        outputPath: 'sessions',
        parameters: {
          createdBy: this.__input.createdBy,
          nextToken: this.__input.nextToken,
          sessionIds: this.__input.sessionIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreamingSessions.sessions', props);
    return resource.getResponseField('sessions') as unknown as shapes.NimbleStreamingSession[];
  }

}

export class NimbleResponsesListStudioComponents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleListStudioComponentsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStudioComponents',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListStudioComponents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          states: this.__input.states,
          studioId: this.__input.studioId,
          types: this.__input.types,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStudioComponents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get studioComponents(): shapes.NimbleStudioComponent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStudioComponents',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListStudioComponents.studioComponents'),
        outputPath: 'studioComponents',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          states: this.__input.states,
          studioId: this.__input.studioId,
          types: this.__input.types,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStudioComponents.studioComponents', props);
    return resource.getResponseField('studioComponents') as unknown as shapes.NimbleStudioComponent[];
  }

}

export class NimbleResponsesListStudioMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleListStudioMembersRequest) {
  }

  public get members(): shapes.NimbleStudioMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStudioMembers',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListStudioMembers.members'),
        outputPath: 'members',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStudioMembers.members', props);
    return resource.getResponseField('members') as unknown as shapes.NimbleStudioMembership[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStudioMembers',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListStudioMembers.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStudioMembers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class NimbleResponsesListStudios {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleListStudiosRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStudios',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListStudios.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStudios.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get studios(): shapes.NimbleStudio[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStudios',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListStudios.studios'),
        outputPath: 'studios',
        parameters: {
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStudios.studios', props);
    return resource.getResponseField('studios') as unknown as shapes.NimbleStudio[];
  }

}

export class NimbleResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class NimbleResponsesStartStudioSsoConfigurationRepair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleStartStudioSsoConfigurationRepairRequest) {
  }

  public get studio(): NimbleResponsesStartStudioSsoConfigurationRepairStudio {
    return new NimbleResponsesStartStudioSsoConfigurationRepairStudio(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesStartStudioSsoConfigurationRepairStudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleStartStudioSsoConfigurationRepairRequest) {
  }

  public get adminRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.adminRoleArn'),
        outputPath: 'studio.adminRoleArn',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.adminRoleArn', props);
    return resource.getResponseField('studio.adminRoleArn') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.arn'),
        outputPath: 'studio.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.arn', props);
    return resource.getResponseField('studio.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.createdAt'),
        outputPath: 'studio.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.createdAt', props);
    return resource.getResponseField('studio.createdAt') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.displayName'),
        outputPath: 'studio.displayName',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.displayName', props);
    return resource.getResponseField('studio.displayName') as unknown as string;
  }

  public get homeRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.homeRegion'),
        outputPath: 'studio.homeRegion',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.homeRegion', props);
    return resource.getResponseField('studio.homeRegion') as unknown as string;
  }

  public get ssoClientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.ssoClientId'),
        outputPath: 'studio.ssoClientId',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.ssoClientId', props);
    return resource.getResponseField('studio.ssoClientId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.state'),
        outputPath: 'studio.state',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.state', props);
    return resource.getResponseField('studio.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.statusCode'),
        outputPath: 'studio.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.statusCode', props);
    return resource.getResponseField('studio.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.statusMessage'),
        outputPath: 'studio.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.statusMessage', props);
    return resource.getResponseField('studio.statusMessage') as unknown as string;
  }

  public get studioEncryptionConfiguration(): NimbleResponsesStartStudioSsoConfigurationRepairStudioStudioEncryptionConfiguration {
    return new NimbleResponsesStartStudioSsoConfigurationRepairStudioStudioEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get studioId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.studioId'),
        outputPath: 'studio.studioId',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.studioId', props);
    return resource.getResponseField('studio.studioId') as unknown as string;
  }

  public get studioName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.studioName'),
        outputPath: 'studio.studioName',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.studioName', props);
    return resource.getResponseField('studio.studioName') as unknown as string;
  }

  public get studioUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.studioUrl'),
        outputPath: 'studio.studioUrl',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.studioUrl', props);
    return resource.getResponseField('studio.studioUrl') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.tags'),
        outputPath: 'studio.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.tags', props);
    return resource.getResponseField('studio.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.updatedAt'),
        outputPath: 'studio.updatedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.updatedAt', props);
    return resource.getResponseField('studio.updatedAt') as unknown as string;
  }

  public get userRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.userRoleArn'),
        outputPath: 'studio.userRoleArn',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.userRoleArn', props);
    return resource.getResponseField('studio.userRoleArn') as unknown as string;
  }

}

export class NimbleResponsesStartStudioSsoConfigurationRepairStudioStudioEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleStartStudioSsoConfigurationRepairRequest) {
  }

  public get keyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.studioEncryptionConfiguration.keyArn'),
        outputPath: 'studio.studioEncryptionConfiguration.keyArn',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.studioEncryptionConfiguration.keyArn', props);
    return resource.getResponseField('studio.studioEncryptionConfiguration.keyArn') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStudioSsoConfigurationRepair',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.StartStudioSSOConfigurationRepair.studio.studioEncryptionConfiguration.keyType'),
        outputPath: 'studio.studioEncryptionConfiguration.keyType',
        parameters: {
          clientToken: this.__input.clientToken,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartStudioSSOConfigurationRepair.studio.studioEncryptionConfiguration.keyType', props);
    return resource.getResponseField('studio.studioEncryptionConfiguration.keyType') as unknown as string;
  }

}

export class NimbleResponsesUpdateLaunchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateLaunchProfileRequest) {
  }

  public get launchProfile(): NimbleResponsesUpdateLaunchProfileLaunchProfile {
    return new NimbleResponsesUpdateLaunchProfileLaunchProfile(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesUpdateLaunchProfileLaunchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateLaunchProfileRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.arn'),
        outputPath: 'launchProfile.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.arn', props);
    return resource.getResponseField('launchProfile.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.createdAt'),
        outputPath: 'launchProfile.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.createdAt', props);
    return resource.getResponseField('launchProfile.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.createdBy'),
        outputPath: 'launchProfile.createdBy',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.createdBy', props);
    return resource.getResponseField('launchProfile.createdBy') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.description'),
        outputPath: 'launchProfile.description',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.description', props);
    return resource.getResponseField('launchProfile.description') as unknown as string;
  }

  public get ec2SubnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.ec2SubnetIds'),
        outputPath: 'launchProfile.ec2SubnetIds',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.ec2SubnetIds', props);
    return resource.getResponseField('launchProfile.ec2SubnetIds') as unknown as string[];
  }

  public get launchProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.launchProfileId'),
        outputPath: 'launchProfile.launchProfileId',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.launchProfileId', props);
    return resource.getResponseField('launchProfile.launchProfileId') as unknown as string;
  }

  public get launchProfileProtocolVersions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.launchProfileProtocolVersions'),
        outputPath: 'launchProfile.launchProfileProtocolVersions',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.launchProfileProtocolVersions', props);
    return resource.getResponseField('launchProfile.launchProfileProtocolVersions') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.name'),
        outputPath: 'launchProfile.name',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.name', props);
    return resource.getResponseField('launchProfile.name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.state'),
        outputPath: 'launchProfile.state',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.state', props);
    return resource.getResponseField('launchProfile.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.statusCode'),
        outputPath: 'launchProfile.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.statusCode', props);
    return resource.getResponseField('launchProfile.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.statusMessage'),
        outputPath: 'launchProfile.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.statusMessage', props);
    return resource.getResponseField('launchProfile.statusMessage') as unknown as string;
  }

  public get streamConfiguration(): NimbleResponsesUpdateLaunchProfileLaunchProfileStreamConfiguration {
    return new NimbleResponsesUpdateLaunchProfileLaunchProfileStreamConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get studioComponentIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.studioComponentIds'),
        outputPath: 'launchProfile.studioComponentIds',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.studioComponentIds', props);
    return resource.getResponseField('launchProfile.studioComponentIds') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.tags'),
        outputPath: 'launchProfile.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.tags', props);
    return resource.getResponseField('launchProfile.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.updatedAt'),
        outputPath: 'launchProfile.updatedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.updatedAt', props);
    return resource.getResponseField('launchProfile.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.updatedBy'),
        outputPath: 'launchProfile.updatedBy',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.updatedBy', props);
    return resource.getResponseField('launchProfile.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesUpdateLaunchProfileLaunchProfileStreamConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateLaunchProfileRequest) {
  }

  public get clipboardMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.streamConfiguration.clipboardMode'),
        outputPath: 'launchProfile.streamConfiguration.clipboardMode',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.streamConfiguration.clipboardMode', props);
    return resource.getResponseField('launchProfile.streamConfiguration.clipboardMode') as unknown as string;
  }

  public get ec2InstanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.streamConfiguration.ec2InstanceTypes'),
        outputPath: 'launchProfile.streamConfiguration.ec2InstanceTypes',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.streamConfiguration.ec2InstanceTypes', props);
    return resource.getResponseField('launchProfile.streamConfiguration.ec2InstanceTypes') as unknown as string[];
  }

  public get maxSessionLengthInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.streamConfiguration.maxSessionLengthInMinutes'),
        outputPath: 'launchProfile.streamConfiguration.maxSessionLengthInMinutes',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.streamConfiguration.maxSessionLengthInMinutes', props);
    return resource.getResponseField('launchProfile.streamConfiguration.maxSessionLengthInMinutes') as unknown as number;
  }

  public get streamingImageIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfile',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfile.launchProfile.streamConfiguration.streamingImageIds'),
        outputPath: 'launchProfile.streamConfiguration.streamingImageIds',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          launchProfileId: this.__input.launchProfileId,
          launchProfileProtocolVersions: this.__input.launchProfileProtocolVersions,
          name: this.__input.name,
          streamConfiguration: {
            clipboardMode: this.__input.streamConfiguration?.clipboardMode,
            ec2InstanceTypes: this.__input.streamConfiguration?.ec2InstanceTypes,
            maxSessionLengthInMinutes: this.__input.streamConfiguration?.maxSessionLengthInMinutes,
            streamingImageIds: this.__input.streamConfiguration?.streamingImageIds,
          },
          studioComponentIds: this.__input.studioComponentIds,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfile.launchProfile.streamConfiguration.streamingImageIds', props);
    return resource.getResponseField('launchProfile.streamConfiguration.streamingImageIds') as unknown as string[];
  }

}

export class NimbleResponsesUpdateLaunchProfileMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateLaunchProfileMemberRequest) {
  }

  public get member(): NimbleResponsesUpdateLaunchProfileMemberMember {
    return new NimbleResponsesUpdateLaunchProfileMemberMember(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesUpdateLaunchProfileMemberMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateLaunchProfileMemberRequest) {
  }

  public get identityStoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfileMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfileMember.member.identityStoreId'),
        outputPath: 'member.identityStoreId',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          persona: this.__input.persona,
          principalId: this.__input.principalId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfileMember.member.identityStoreId', props);
    return resource.getResponseField('member.identityStoreId') as unknown as string;
  }

  public get persona(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfileMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfileMember.member.persona'),
        outputPath: 'member.persona',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          persona: this.__input.persona,
          principalId: this.__input.principalId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfileMember.member.persona', props);
    return resource.getResponseField('member.persona') as unknown as string;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchProfileMember',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateLaunchProfileMember.member.principalId'),
        outputPath: 'member.principalId',
        parameters: {
          clientToken: this.__input.clientToken,
          launchProfileId: this.__input.launchProfileId,
          persona: this.__input.persona,
          principalId: this.__input.principalId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchProfileMember.member.principalId', props);
    return resource.getResponseField('member.principalId') as unknown as string;
  }

}

export class NimbleResponsesUpdateStreamingImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStreamingImageRequest) {
  }

  public get streamingImage(): NimbleResponsesUpdateStreamingImageStreamingImage {
    return new NimbleResponsesUpdateStreamingImageStreamingImage(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesUpdateStreamingImageStreamingImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStreamingImageRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.arn'),
        outputPath: 'streamingImage.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.arn', props);
    return resource.getResponseField('streamingImage.arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.description'),
        outputPath: 'streamingImage.description',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.description', props);
    return resource.getResponseField('streamingImage.description') as unknown as string;
  }

  public get ec2ImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.ec2ImageId'),
        outputPath: 'streamingImage.ec2ImageId',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.ec2ImageId', props);
    return resource.getResponseField('streamingImage.ec2ImageId') as unknown as string;
  }

  public get encryptionConfiguration(): NimbleResponsesUpdateStreamingImageStreamingImageEncryptionConfiguration {
    return new NimbleResponsesUpdateStreamingImageStreamingImageEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get eulaIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.eulaIds'),
        outputPath: 'streamingImage.eulaIds',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.eulaIds', props);
    return resource.getResponseField('streamingImage.eulaIds') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.name'),
        outputPath: 'streamingImage.name',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.name', props);
    return resource.getResponseField('streamingImage.name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.owner'),
        outputPath: 'streamingImage.owner',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.owner', props);
    return resource.getResponseField('streamingImage.owner') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.platform'),
        outputPath: 'streamingImage.platform',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.platform', props);
    return resource.getResponseField('streamingImage.platform') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.state'),
        outputPath: 'streamingImage.state',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.state', props);
    return resource.getResponseField('streamingImage.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.statusCode'),
        outputPath: 'streamingImage.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.statusCode', props);
    return resource.getResponseField('streamingImage.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.statusMessage'),
        outputPath: 'streamingImage.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.statusMessage', props);
    return resource.getResponseField('streamingImage.statusMessage') as unknown as string;
  }

  public get streamingImageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.streamingImageId'),
        outputPath: 'streamingImage.streamingImageId',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.streamingImageId', props);
    return resource.getResponseField('streamingImage.streamingImageId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.tags'),
        outputPath: 'streamingImage.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.tags', props);
    return resource.getResponseField('streamingImage.tags') as unknown as Record<string, string>;
  }

}

export class NimbleResponsesUpdateStreamingImageStreamingImageEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStreamingImageRequest) {
  }

  public get keyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.encryptionConfiguration.keyArn'),
        outputPath: 'streamingImage.encryptionConfiguration.keyArn',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.encryptionConfiguration.keyArn', props);
    return resource.getResponseField('streamingImage.encryptionConfiguration.keyArn') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStreamingImage',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStreamingImage.streamingImage.encryptionConfiguration.keyType'),
        outputPath: 'streamingImage.encryptionConfiguration.keyType',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          name: this.__input.name,
          streamingImageId: this.__input.streamingImageId,
          studioId: this.__input.studioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStreamingImage.streamingImage.encryptionConfiguration.keyType', props);
    return resource.getResponseField('streamingImage.encryptionConfiguration.keyType') as unknown as string;
  }

}

export class NimbleResponsesUpdateStudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStudioRequest) {
  }

  public get studio(): NimbleResponsesUpdateStudioStudio {
    return new NimbleResponsesUpdateStudioStudio(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesUpdateStudioStudio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStudioRequest) {
  }

  public get adminRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.adminRoleArn'),
        outputPath: 'studio.adminRoleArn',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.adminRoleArn', props);
    return resource.getResponseField('studio.adminRoleArn') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.arn'),
        outputPath: 'studio.arn',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.arn', props);
    return resource.getResponseField('studio.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.createdAt'),
        outputPath: 'studio.createdAt',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.createdAt', props);
    return resource.getResponseField('studio.createdAt') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.displayName'),
        outputPath: 'studio.displayName',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.displayName', props);
    return resource.getResponseField('studio.displayName') as unknown as string;
  }

  public get homeRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.homeRegion'),
        outputPath: 'studio.homeRegion',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.homeRegion', props);
    return resource.getResponseField('studio.homeRegion') as unknown as string;
  }

  public get ssoClientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.ssoClientId'),
        outputPath: 'studio.ssoClientId',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.ssoClientId', props);
    return resource.getResponseField('studio.ssoClientId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.state'),
        outputPath: 'studio.state',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.state', props);
    return resource.getResponseField('studio.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.statusCode'),
        outputPath: 'studio.statusCode',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.statusCode', props);
    return resource.getResponseField('studio.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.statusMessage'),
        outputPath: 'studio.statusMessage',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.statusMessage', props);
    return resource.getResponseField('studio.statusMessage') as unknown as string;
  }

  public get studioEncryptionConfiguration(): NimbleResponsesUpdateStudioStudioStudioEncryptionConfiguration {
    return new NimbleResponsesUpdateStudioStudioStudioEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get studioId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.studioId'),
        outputPath: 'studio.studioId',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.studioId', props);
    return resource.getResponseField('studio.studioId') as unknown as string;
  }

  public get studioName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.studioName'),
        outputPath: 'studio.studioName',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.studioName', props);
    return resource.getResponseField('studio.studioName') as unknown as string;
  }

  public get studioUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.studioUrl'),
        outputPath: 'studio.studioUrl',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.studioUrl', props);
    return resource.getResponseField('studio.studioUrl') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.tags'),
        outputPath: 'studio.tags',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.tags', props);
    return resource.getResponseField('studio.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.updatedAt'),
        outputPath: 'studio.updatedAt',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.updatedAt', props);
    return resource.getResponseField('studio.updatedAt') as unknown as string;
  }

  public get userRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.userRoleArn'),
        outputPath: 'studio.userRoleArn',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.userRoleArn', props);
    return resource.getResponseField('studio.userRoleArn') as unknown as string;
  }

}

export class NimbleResponsesUpdateStudioStudioStudioEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStudioRequest) {
  }

  public get keyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.studioEncryptionConfiguration.keyArn'),
        outputPath: 'studio.studioEncryptionConfiguration.keyArn',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.studioEncryptionConfiguration.keyArn', props);
    return resource.getResponseField('studio.studioEncryptionConfiguration.keyArn') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudio',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudio.studio.studioEncryptionConfiguration.keyType'),
        outputPath: 'studio.studioEncryptionConfiguration.keyType',
        parameters: {
          adminRoleArn: this.__input.adminRoleArn,
          clientToken: this.__input.clientToken,
          displayName: this.__input.displayName,
          studioId: this.__input.studioId,
          userRoleArn: this.__input.userRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudio.studio.studioEncryptionConfiguration.keyType', props);
    return resource.getResponseField('studio.studioEncryptionConfiguration.keyType') as unknown as string;
  }

}

export class NimbleResponsesUpdateStudioComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStudioComponentRequest) {
  }

  public get studioComponent(): NimbleResponsesUpdateStudioComponentStudioComponent {
    return new NimbleResponsesUpdateStudioComponentStudioComponent(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesUpdateStudioComponentStudioComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStudioComponentRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.arn'),
        outputPath: 'studioComponent.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.arn', props);
    return resource.getResponseField('studioComponent.arn') as unknown as string;
  }

  public get configuration(): NimbleResponsesUpdateStudioComponentStudioComponentConfiguration {
    return new NimbleResponsesUpdateStudioComponentStudioComponentConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.createdAt'),
        outputPath: 'studioComponent.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.createdAt', props);
    return resource.getResponseField('studioComponent.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.createdBy'),
        outputPath: 'studioComponent.createdBy',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.createdBy', props);
    return resource.getResponseField('studioComponent.createdBy') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.description'),
        outputPath: 'studioComponent.description',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.description', props);
    return resource.getResponseField('studioComponent.description') as unknown as string;
  }

  public get ec2SecurityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.ec2SecurityGroupIds'),
        outputPath: 'studioComponent.ec2SecurityGroupIds',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.ec2SecurityGroupIds', props);
    return resource.getResponseField('studioComponent.ec2SecurityGroupIds') as unknown as string[];
  }

  public get initializationScripts(): shapes.NimbleStudioComponentInitializationScript[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.initializationScripts'),
        outputPath: 'studioComponent.initializationScripts',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.initializationScripts', props);
    return resource.getResponseField('studioComponent.initializationScripts') as unknown as shapes.NimbleStudioComponentInitializationScript[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.name'),
        outputPath: 'studioComponent.name',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.name', props);
    return resource.getResponseField('studioComponent.name') as unknown as string;
  }

  public get scriptParameters(): shapes.NimbleScriptParameterKeyValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.scriptParameters'),
        outputPath: 'studioComponent.scriptParameters',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.scriptParameters', props);
    return resource.getResponseField('studioComponent.scriptParameters') as unknown as shapes.NimbleScriptParameterKeyValue[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.state'),
        outputPath: 'studioComponent.state',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.state', props);
    return resource.getResponseField('studioComponent.state') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.statusCode'),
        outputPath: 'studioComponent.statusCode',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.statusCode', props);
    return resource.getResponseField('studioComponent.statusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.statusMessage'),
        outputPath: 'studioComponent.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.statusMessage', props);
    return resource.getResponseField('studioComponent.statusMessage') as unknown as string;
  }

  public get studioComponentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.studioComponentId'),
        outputPath: 'studioComponent.studioComponentId',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.studioComponentId', props);
    return resource.getResponseField('studioComponent.studioComponentId') as unknown as string;
  }

  public get subtype(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.subtype'),
        outputPath: 'studioComponent.subtype',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.subtype', props);
    return resource.getResponseField('studioComponent.subtype') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.tags'),
        outputPath: 'studioComponent.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.tags', props);
    return resource.getResponseField('studioComponent.tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.type'),
        outputPath: 'studioComponent.type',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.type', props);
    return resource.getResponseField('studioComponent.type') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.updatedAt'),
        outputPath: 'studioComponent.updatedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.updatedAt', props);
    return resource.getResponseField('studioComponent.updatedAt') as unknown as string;
  }

  public get updatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.updatedBy'),
        outputPath: 'studioComponent.updatedBy',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.updatedBy', props);
    return resource.getResponseField('studioComponent.updatedBy') as unknown as string;
  }

}

export class NimbleResponsesUpdateStudioComponentStudioComponentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStudioComponentRequest) {
  }

  public get activeDirectoryConfiguration(): NimbleResponsesUpdateStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration {
    return new NimbleResponsesUpdateStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get computeFarmConfiguration(): NimbleResponsesUpdateStudioComponentStudioComponentConfigurationComputeFarmConfiguration {
    return new NimbleResponsesUpdateStudioComponentStudioComponentConfigurationComputeFarmConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get licenseServiceConfiguration(): NimbleResponsesUpdateStudioComponentStudioComponentConfigurationLicenseServiceConfiguration {
    return new NimbleResponsesUpdateStudioComponentStudioComponentConfigurationLicenseServiceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get sharedFileSystemConfiguration(): NimbleResponsesUpdateStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration {
    return new NimbleResponsesUpdateStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class NimbleResponsesUpdateStudioComponentStudioComponentConfigurationActiveDirectoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStudioComponentRequest) {
  }

  public get computerAttributes(): shapes.NimbleActiveDirectoryComputerAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.computerAttributes'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.computerAttributes',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.computerAttributes', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.computerAttributes') as unknown as shapes.NimbleActiveDirectoryComputerAttribute[];
  }

  public get directoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.directoryId'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.directoryId',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.directoryId', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.directoryId') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName'),
        outputPath: 'studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName', props);
    return resource.getResponseField('studioComponent.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName') as unknown as string;
  }

}

export class NimbleResponsesUpdateStudioComponentStudioComponentConfigurationComputeFarmConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStudioComponentRequest) {
  }

  public get activeDirectoryUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser'),
        outputPath: 'studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser', props);
    return resource.getResponseField('studioComponent.configuration.computeFarmConfiguration.activeDirectoryUser') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.computeFarmConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.computeFarmConfiguration.endpoint',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.computeFarmConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.computeFarmConfiguration.endpoint') as unknown as string;
  }

}

export class NimbleResponsesUpdateStudioComponentStudioComponentConfigurationLicenseServiceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStudioComponentRequest) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.licenseServiceConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.licenseServiceConfiguration.endpoint',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.licenseServiceConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.licenseServiceConfiguration.endpoint') as unknown as string;
  }

}

export class NimbleResponsesUpdateStudioComponentStudioComponentConfigurationSharedFileSystemConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NimbleUpdateStudioComponentRequest) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.endpoint'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.endpoint',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.endpoint', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.endpoint') as unknown as string;
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.fileSystemId') as unknown as string;
  }

  public get linuxMountPoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.linuxMountPoint') as unknown as string;
  }

  public get shareName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.shareName'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.shareName',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.shareName', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.shareName') as unknown as string;
  }

  public get windowsMountDrive(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStudioComponent',
        service: 'Nimble',
        physicalResourceId: cr.PhysicalResourceId.of('Nimble.UpdateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive'),
        outputPath: 'studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive',
        parameters: {
          clientToken: this.__input.clientToken,
          configuration: {
            activeDirectoryConfiguration: {
              computerAttributes: this.__input.configuration?.activeDirectoryConfiguration?.computerAttributes,
              directoryId: this.__input.configuration?.activeDirectoryConfiguration?.directoryId,
              organizationalUnitDistinguishedName: this.__input.configuration?.activeDirectoryConfiguration?.organizationalUnitDistinguishedName,
            },
            computeFarmConfiguration: {
              activeDirectoryUser: this.__input.configuration?.computeFarmConfiguration?.activeDirectoryUser,
              endpoint: this.__input.configuration?.computeFarmConfiguration?.endpoint,
            },
            licenseServiceConfiguration: {
              endpoint: this.__input.configuration?.licenseServiceConfiguration?.endpoint,
            },
            sharedFileSystemConfiguration: {
              endpoint: this.__input.configuration?.sharedFileSystemConfiguration?.endpoint,
              fileSystemId: this.__input.configuration?.sharedFileSystemConfiguration?.fileSystemId,
              linuxMountPoint: this.__input.configuration?.sharedFileSystemConfiguration?.linuxMountPoint,
              shareName: this.__input.configuration?.sharedFileSystemConfiguration?.shareName,
              windowsMountDrive: this.__input.configuration?.sharedFileSystemConfiguration?.windowsMountDrive,
            },
          },
          description: this.__input.description,
          ec2SecurityGroupIds: this.__input.ec2SecurityGroupIds,
          initializationScripts: this.__input.initializationScripts,
          name: this.__input.name,
          scriptParameters: this.__input.scriptParameters,
          studioComponentId: this.__input.studioComponentId,
          studioId: this.__input.studioId,
          subtype: this.__input.subtype,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStudioComponent.studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive', props);
    return resource.getResponseField('studioComponent.configuration.sharedFileSystemConfiguration.windowsMountDrive') as unknown as string;
  }

}

