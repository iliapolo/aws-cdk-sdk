import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ConnectClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateApprovedOrigin(input: shapes.ConnectAssociateApprovedOriginRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateApprovedOrigin',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.AssociateApprovedOrigin'),
        parameters: {
          InstanceId: input.instanceId,
          Origin: input.origin,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateApprovedOrigin', props);
  }

  public associateInstanceStorageConfig(input: shapes.ConnectAssociateInstanceStorageConfigRequest): ConnectAssociateInstanceStorageConfig {
    return new ConnectAssociateInstanceStorageConfig(this, 'AssociateInstanceStorageConfig', this.__resources, input);
  }

  public associateLambdaFunction(input: shapes.ConnectAssociateLambdaFunctionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateLambdaFunction',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.AssociateLambdaFunction'),
        parameters: {
          InstanceId: input.instanceId,
          FunctionArn: input.functionArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateLambdaFunction', props);
  }

  public associateLexBot(input: shapes.ConnectAssociateLexBotRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateLexBot',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.AssociateLexBot'),
        parameters: {
          InstanceId: input.instanceId,
          LexBot: {
            Name: input.lexBot.name,
            LexRegion: input.lexBot.lexRegion,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateLexBot', props);
  }

  public associateRoutingProfileQueues(input: shapes.ConnectAssociateRoutingProfileQueuesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRoutingProfileQueues',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.AssociateRoutingProfileQueues'),
        parameters: {
          InstanceId: input.instanceId,
          RoutingProfileId: input.routingProfileId,
          QueueConfigs: input.queueConfigs,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateRoutingProfileQueues', props);
  }

  public associateSecurityKey(input: shapes.ConnectAssociateSecurityKeyRequest): ConnectAssociateSecurityKey {
    return new ConnectAssociateSecurityKey(this, 'AssociateSecurityKey', this.__resources, input);
  }

  public createContactFlow(input: shapes.ConnectCreateContactFlowRequest): ConnectCreateContactFlow {
    return new ConnectCreateContactFlow(this, 'CreateContactFlow', this.__resources, input);
  }

  public createInstance(input: shapes.ConnectCreateInstanceRequest): ConnectCreateInstance {
    return new ConnectCreateInstance(this, 'CreateInstance', this.__resources, input);
  }

  public createRoutingProfile(input: shapes.ConnectCreateRoutingProfileRequest): ConnectCreateRoutingProfile {
    return new ConnectCreateRoutingProfile(this, 'CreateRoutingProfile', this.__resources, input);
  }

  public createUser(input: shapes.ConnectCreateUserRequest): ConnectCreateUser {
    return new ConnectCreateUser(this, 'CreateUser', this.__resources, input);
  }

  public createUserHierarchyGroup(input: shapes.ConnectCreateUserHierarchyGroupRequest): ConnectCreateUserHierarchyGroup {
    return new ConnectCreateUserHierarchyGroup(this, 'CreateUserHierarchyGroup', this.__resources, input);
  }

  public deleteInstance(input: shapes.ConnectDeleteInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DeleteInstance'),
        parameters: {
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteInstance', props);
  }

  public deleteUser(input: shapes.ConnectDeleteUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DeleteUser'),
        parameters: {
          InstanceId: input.instanceId,
          UserId: input.userId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUser', props);
  }

  public deleteUserHierarchyGroup(input: shapes.ConnectDeleteUserHierarchyGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DeleteUserHierarchyGroup'),
        parameters: {
          HierarchyGroupId: input.hierarchyGroupId,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUserHierarchyGroup', props);
  }

  public describeContactFlow(input: shapes.ConnectDescribeContactFlowRequest): ConnectDescribeContactFlow {
    return new ConnectDescribeContactFlow(this, 'DescribeContactFlow', this.__resources, input);
  }

  public describeInstance(input: shapes.ConnectDescribeInstanceRequest): ConnectDescribeInstance {
    return new ConnectDescribeInstance(this, 'DescribeInstance', this.__resources, input);
  }

  public describeInstanceAttribute(input: shapes.ConnectDescribeInstanceAttributeRequest): ConnectDescribeInstanceAttribute {
    return new ConnectDescribeInstanceAttribute(this, 'DescribeInstanceAttribute', this.__resources, input);
  }

  public describeInstanceStorageConfig(input: shapes.ConnectDescribeInstanceStorageConfigRequest): ConnectDescribeInstanceStorageConfig {
    return new ConnectDescribeInstanceStorageConfig(this, 'DescribeInstanceStorageConfig', this.__resources, input);
  }

  public describeRoutingProfile(input: shapes.ConnectDescribeRoutingProfileRequest): ConnectDescribeRoutingProfile {
    return new ConnectDescribeRoutingProfile(this, 'DescribeRoutingProfile', this.__resources, input);
  }

  public describeUser(input: shapes.ConnectDescribeUserRequest): ConnectDescribeUser {
    return new ConnectDescribeUser(this, 'DescribeUser', this.__resources, input);
  }

  public describeUserHierarchyGroup(input: shapes.ConnectDescribeUserHierarchyGroupRequest): ConnectDescribeUserHierarchyGroup {
    return new ConnectDescribeUserHierarchyGroup(this, 'DescribeUserHierarchyGroup', this.__resources, input);
  }

  public describeUserHierarchyStructure(input: shapes.ConnectDescribeUserHierarchyStructureRequest): ConnectDescribeUserHierarchyStructure {
    return new ConnectDescribeUserHierarchyStructure(this, 'DescribeUserHierarchyStructure', this.__resources, input);
  }

  public disassociateApprovedOrigin(input: shapes.ConnectDisassociateApprovedOriginRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateApprovedOrigin',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DisassociateApprovedOrigin'),
        parameters: {
          InstanceId: input.instanceId,
          Origin: input.origin,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateApprovedOrigin', props);
  }

  public disassociateInstanceStorageConfig(input: shapes.ConnectDisassociateInstanceStorageConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DisassociateInstanceStorageConfig'),
        parameters: {
          InstanceId: input.instanceId,
          AssociationId: input.associationId,
          ResourceType: input.resourceType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateInstanceStorageConfig', props);
  }

  public disassociateLambdaFunction(input: shapes.ConnectDisassociateLambdaFunctionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateLambdaFunction',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DisassociateLambdaFunction'),
        parameters: {
          InstanceId: input.instanceId,
          FunctionArn: input.functionArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateLambdaFunction', props);
  }

  public disassociateLexBot(input: shapes.ConnectDisassociateLexBotRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateLexBot',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DisassociateLexBot'),
        parameters: {
          InstanceId: input.instanceId,
          BotName: input.botName,
          LexRegion: input.lexRegion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateLexBot', props);
  }

  public disassociateRoutingProfileQueues(input: shapes.ConnectDisassociateRoutingProfileQueuesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRoutingProfileQueues',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DisassociateRoutingProfileQueues'),
        parameters: {
          InstanceId: input.instanceId,
          RoutingProfileId: input.routingProfileId,
          QueueReferences: input.queueReferences,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateRoutingProfileQueues', props);
  }

  public disassociateSecurityKey(input: shapes.ConnectDisassociateSecurityKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateSecurityKey',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DisassociateSecurityKey'),
        parameters: {
          InstanceId: input.instanceId,
          AssociationId: input.associationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateSecurityKey', props);
  }

  public fetchContactAttributes(input: shapes.ConnectGetContactAttributesRequest): ConnectFetchContactAttributes {
    return new ConnectFetchContactAttributes(this, 'FetchContactAttributes', this.__resources, input);
  }

  public fetchCurrentMetricData(input: shapes.ConnectGetCurrentMetricDataRequest): ConnectFetchCurrentMetricData {
    return new ConnectFetchCurrentMetricData(this, 'FetchCurrentMetricData', this.__resources, input);
  }

  public fetchFederationToken(input: shapes.ConnectGetFederationTokenRequest): ConnectFetchFederationToken {
    return new ConnectFetchFederationToken(this, 'FetchFederationToken', this.__resources, input);
  }

  public fetchMetricData(input: shapes.ConnectGetMetricDataRequest): ConnectFetchMetricData {
    return new ConnectFetchMetricData(this, 'FetchMetricData', this.__resources, input);
  }

  public listApprovedOrigins(input: shapes.ConnectListApprovedOriginsRequest): ConnectListApprovedOrigins {
    return new ConnectListApprovedOrigins(this, 'ListApprovedOrigins', this.__resources, input);
  }

  public listContactFlows(input: shapes.ConnectListContactFlowsRequest): ConnectListContactFlows {
    return new ConnectListContactFlows(this, 'ListContactFlows', this.__resources, input);
  }

  public listHoursOfOperations(input: shapes.ConnectListHoursOfOperationsRequest): ConnectListHoursOfOperations {
    return new ConnectListHoursOfOperations(this, 'ListHoursOfOperations', this.__resources, input);
  }

  public listInstanceAttributes(input: shapes.ConnectListInstanceAttributesRequest): ConnectListInstanceAttributes {
    return new ConnectListInstanceAttributes(this, 'ListInstanceAttributes', this.__resources, input);
  }

  public listInstanceStorageConfigs(input: shapes.ConnectListInstanceStorageConfigsRequest): ConnectListInstanceStorageConfigs {
    return new ConnectListInstanceStorageConfigs(this, 'ListInstanceStorageConfigs', this.__resources, input);
  }

  public listInstances(input: shapes.ConnectListInstancesRequest): ConnectListInstances {
    return new ConnectListInstances(this, 'ListInstances', this.__resources, input);
  }

  public listLambdaFunctions(input: shapes.ConnectListLambdaFunctionsRequest): ConnectListLambdaFunctions {
    return new ConnectListLambdaFunctions(this, 'ListLambdaFunctions', this.__resources, input);
  }

  public listLexBots(input: shapes.ConnectListLexBotsRequest): ConnectListLexBots {
    return new ConnectListLexBots(this, 'ListLexBots', this.__resources, input);
  }

  public listPhoneNumbers(input: shapes.ConnectListPhoneNumbersRequest): ConnectListPhoneNumbers {
    return new ConnectListPhoneNumbers(this, 'ListPhoneNumbers', this.__resources, input);
  }

  public listPrompts(input: shapes.ConnectListPromptsRequest): ConnectListPrompts {
    return new ConnectListPrompts(this, 'ListPrompts', this.__resources, input);
  }

  public listQueues(input: shapes.ConnectListQueuesRequest): ConnectListQueues {
    return new ConnectListQueues(this, 'ListQueues', this.__resources, input);
  }

  public listRoutingProfileQueues(input: shapes.ConnectListRoutingProfileQueuesRequest): ConnectListRoutingProfileQueues {
    return new ConnectListRoutingProfileQueues(this, 'ListRoutingProfileQueues', this.__resources, input);
  }

  public listRoutingProfiles(input: shapes.ConnectListRoutingProfilesRequest): ConnectListRoutingProfiles {
    return new ConnectListRoutingProfiles(this, 'ListRoutingProfiles', this.__resources, input);
  }

  public listSecurityKeys(input: shapes.ConnectListSecurityKeysRequest): ConnectListSecurityKeys {
    return new ConnectListSecurityKeys(this, 'ListSecurityKeys', this.__resources, input);
  }

  public listSecurityProfiles(input: shapes.ConnectListSecurityProfilesRequest): ConnectListSecurityProfiles {
    return new ConnectListSecurityProfiles(this, 'ListSecurityProfiles', this.__resources, input);
  }

  public listTagsForResource(input: shapes.ConnectListTagsForResourceRequest): ConnectListTagsForResource {
    return new ConnectListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listUserHierarchyGroups(input: shapes.ConnectListUserHierarchyGroupsRequest): ConnectListUserHierarchyGroups {
    return new ConnectListUserHierarchyGroups(this, 'ListUserHierarchyGroups', this.__resources, input);
  }

  public listUsers(input: shapes.ConnectListUsersRequest): ConnectListUsers {
    return new ConnectListUsers(this, 'ListUsers', this.__resources, input);
  }

  public resumeContactRecording(input: shapes.ConnectResumeContactRecordingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeContactRecording',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ResumeContactRecording'),
        parameters: {
          InstanceId: input.instanceId,
          ContactId: input.contactId,
          InitialContactId: input.initialContactId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ResumeContactRecording', props);
  }

  public startChatContact(input: shapes.ConnectStartChatContactRequest): ConnectStartChatContact {
    return new ConnectStartChatContact(this, 'StartChatContact', this.__resources, input);
  }

  public startContactRecording(input: shapes.ConnectStartContactRecordingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startContactRecording',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.StartContactRecording'),
        parameters: {
          InstanceId: input.instanceId,
          ContactId: input.contactId,
          InitialContactId: input.initialContactId,
          VoiceRecordingConfiguration: {
            VoiceRecordingTrack: input.voiceRecordingConfiguration.voiceRecordingTrack,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartContactRecording', props);
  }

  public startOutboundVoiceContact(input: shapes.ConnectStartOutboundVoiceContactRequest): ConnectStartOutboundVoiceContact {
    return new ConnectStartOutboundVoiceContact(this, 'StartOutboundVoiceContact', this.__resources, input);
  }

  public stopContact(input: shapes.ConnectStopContactRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopContact',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.StopContact'),
        parameters: {
          ContactId: input.contactId,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopContact', props);
  }

  public stopContactRecording(input: shapes.ConnectStopContactRecordingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopContactRecording',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.StopContactRecording'),
        parameters: {
          InstanceId: input.instanceId,
          ContactId: input.contactId,
          InitialContactId: input.initialContactId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopContactRecording', props);
  }

  public suspendContactRecording(input: shapes.ConnectSuspendContactRecordingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendContactRecording',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.SuspendContactRecording'),
        parameters: {
          InstanceId: input.instanceId,
          ContactId: input.contactId,
          InitialContactId: input.initialContactId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SuspendContactRecording', props);
  }

  public tagResource(input: shapes.ConnectTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.ConnectUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateContactAttributes(input: shapes.ConnectUpdateContactAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContactAttributes',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateContactAttributes'),
        parameters: {
          InitialContactId: input.initialContactId,
          InstanceId: input.instanceId,
          Attributes: input.attributes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateContactAttributes', props);
  }

  public updateContactFlowContent(input: shapes.ConnectUpdateContactFlowContentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContactFlowContent',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateContactFlowContent'),
        parameters: {
          InstanceId: input.instanceId,
          ContactFlowId: input.contactFlowId,
          Content: input.content,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateContactFlowContent', props);
  }

  public updateContactFlowName(input: shapes.ConnectUpdateContactFlowNameRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContactFlowName',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateContactFlowName'),
        parameters: {
          InstanceId: input.instanceId,
          ContactFlowId: input.contactFlowId,
          Name: input.name,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateContactFlowName', props);
  }

  public updateInstanceAttribute(input: shapes.ConnectUpdateInstanceAttributeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstanceAttribute',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateInstanceAttribute'),
        parameters: {
          InstanceId: input.instanceId,
          AttributeType: input.attributeType,
          Value: input.value,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateInstanceAttribute', props);
  }

  public updateInstanceStorageConfig(input: shapes.ConnectUpdateInstanceStorageConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateInstanceStorageConfig'),
        parameters: {
          InstanceId: input.instanceId,
          AssociationId: input.associationId,
          ResourceType: input.resourceType,
          StorageConfig: {
            AssociationId: input.storageConfig.associationId,
            StorageType: input.storageConfig.storageType,
            S3Config: {
              BucketName: input.storageConfig.s3Config?.bucketName,
              BucketPrefix: input.storageConfig.s3Config?.bucketPrefix,
              EncryptionConfig: {
                EncryptionType: input.storageConfig.s3Config?.encryptionConfig?.encryptionType,
                KeyId: input.storageConfig.s3Config?.encryptionConfig?.keyId,
              },
            },
            KinesisVideoStreamConfig: {
              Prefix: input.storageConfig.kinesisVideoStreamConfig?.prefix,
              RetentionPeriodHours: input.storageConfig.kinesisVideoStreamConfig?.retentionPeriodHours,
              EncryptionConfig: {
                EncryptionType: input.storageConfig.kinesisVideoStreamConfig?.encryptionConfig.encryptionType,
                KeyId: input.storageConfig.kinesisVideoStreamConfig?.encryptionConfig.keyId,
              },
            },
            KinesisStreamConfig: {
              StreamArn: input.storageConfig.kinesisStreamConfig?.streamArn,
            },
            KinesisFirehoseConfig: {
              FirehoseArn: input.storageConfig.kinesisFirehoseConfig?.firehoseArn,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateInstanceStorageConfig', props);
  }

  public updateRoutingProfileConcurrency(input: shapes.ConnectUpdateRoutingProfileConcurrencyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoutingProfileConcurrency',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateRoutingProfileConcurrency'),
        parameters: {
          InstanceId: input.instanceId,
          RoutingProfileId: input.routingProfileId,
          MediaConcurrencies: input.mediaConcurrencies,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRoutingProfileConcurrency', props);
  }

  public updateRoutingProfileDefaultOutboundQueue(input: shapes.ConnectUpdateRoutingProfileDefaultOutboundQueueRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoutingProfileDefaultOutboundQueue',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateRoutingProfileDefaultOutboundQueue'),
        parameters: {
          InstanceId: input.instanceId,
          RoutingProfileId: input.routingProfileId,
          DefaultOutboundQueueId: input.defaultOutboundQueueId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRoutingProfileDefaultOutboundQueue', props);
  }

  public updateRoutingProfileName(input: shapes.ConnectUpdateRoutingProfileNameRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoutingProfileName',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateRoutingProfileName'),
        parameters: {
          InstanceId: input.instanceId,
          RoutingProfileId: input.routingProfileId,
          Name: input.name,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRoutingProfileName', props);
  }

  public updateRoutingProfileQueues(input: shapes.ConnectUpdateRoutingProfileQueuesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoutingProfileQueues',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateRoutingProfileQueues'),
        parameters: {
          InstanceId: input.instanceId,
          RoutingProfileId: input.routingProfileId,
          QueueConfigs: input.queueConfigs,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRoutingProfileQueues', props);
  }

  public updateUserHierarchy(input: shapes.ConnectUpdateUserHierarchyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserHierarchy',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateUserHierarchy'),
        parameters: {
          HierarchyGroupId: input.hierarchyGroupId,
          UserId: input.userId,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserHierarchy', props);
  }

  public updateUserHierarchyGroupName(input: shapes.ConnectUpdateUserHierarchyGroupNameRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserHierarchyGroupName',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateUserHierarchyGroupName'),
        parameters: {
          Name: input.name,
          HierarchyGroupId: input.hierarchyGroupId,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserHierarchyGroupName', props);
  }

  public updateUserHierarchyStructure(input: shapes.ConnectUpdateUserHierarchyStructureRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateUserHierarchyStructure'),
        parameters: {
          HierarchyStructure: {
            LevelOne: {
              Name: input.hierarchyStructure.levelOne?.name,
            },
            LevelTwo: {
              Name: input.hierarchyStructure.levelTwo?.name,
            },
            LevelThree: {
              Name: input.hierarchyStructure.levelThree?.name,
            },
            LevelFour: {
              Name: input.hierarchyStructure.levelFour?.name,
            },
            LevelFive: {
              Name: input.hierarchyStructure.levelFive?.name,
            },
          },
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserHierarchyStructure', props);
  }

  public updateUserIdentityInfo(input: shapes.ConnectUpdateUserIdentityInfoRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserIdentityInfo',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateUserIdentityInfo'),
        parameters: {
          IdentityInfo: {
            FirstName: input.identityInfo.firstName,
            LastName: input.identityInfo.lastName,
            Email: input.identityInfo.email,
          },
          UserId: input.userId,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserIdentityInfo', props);
  }

  public updateUserPhoneConfig(input: shapes.ConnectUpdateUserPhoneConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserPhoneConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateUserPhoneConfig'),
        parameters: {
          PhoneConfig: {
            PhoneType: input.phoneConfig.phoneType,
            AutoAccept: input.phoneConfig.autoAccept,
            AfterContactWorkTimeLimit: input.phoneConfig.afterContactWorkTimeLimit,
            DeskPhoneNumber: input.phoneConfig.deskPhoneNumber,
          },
          UserId: input.userId,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserPhoneConfig', props);
  }

  public updateUserRoutingProfile(input: shapes.ConnectUpdateUserRoutingProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateUserRoutingProfile'),
        parameters: {
          RoutingProfileId: input.routingProfileId,
          UserId: input.userId,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserRoutingProfile', props);
  }

  public updateUserSecurityProfiles(input: shapes.ConnectUpdateUserSecurityProfilesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserSecurityProfiles',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.UpdateUserSecurityProfiles'),
        parameters: {
          SecurityProfileIds: input.securityProfileIds,
          UserId: input.userId,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserSecurityProfiles', props);
  }

}

export class ConnectAssociateInstanceStorageConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectAssociateInstanceStorageConfigRequest) {
    super(scope, id);
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.AssociateInstanceStorageConfig.AssociationId'),
        outputPath: 'AssociationId',
        parameters: {
          InstanceId: this.input.instanceId,
          ResourceType: this.input.resourceType,
          StorageConfig: {
            AssociationId: this.input.storageConfig.associationId,
            StorageType: this.input.storageConfig.storageType,
            S3Config: {
              BucketName: this.input.storageConfig.s3Config?.bucketName,
              BucketPrefix: this.input.storageConfig.s3Config?.bucketPrefix,
              EncryptionConfig: {
                EncryptionType: this.input.storageConfig.s3Config?.encryptionConfig?.encryptionType,
                KeyId: this.input.storageConfig.s3Config?.encryptionConfig?.keyId,
              },
            },
            KinesisVideoStreamConfig: {
              Prefix: this.input.storageConfig.kinesisVideoStreamConfig?.prefix,
              RetentionPeriodHours: this.input.storageConfig.kinesisVideoStreamConfig?.retentionPeriodHours,
              EncryptionConfig: {
                EncryptionType: this.input.storageConfig.kinesisVideoStreamConfig?.encryptionConfig.encryptionType,
                KeyId: this.input.storageConfig.kinesisVideoStreamConfig?.encryptionConfig.keyId,
              },
            },
            KinesisStreamConfig: {
              StreamArn: this.input.storageConfig.kinesisStreamConfig?.streamArn,
            },
            KinesisFirehoseConfig: {
              FirehoseArn: this.input.storageConfig.kinesisFirehoseConfig?.firehoseArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateInstanceStorageConfig.AssociationId', props);
    return resource.getResponseField('AssociationId') as unknown as string;
  }

}

export class ConnectAssociateSecurityKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectAssociateSecurityKeyRequest) {
    super(scope, id);
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateSecurityKey',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.AssociateSecurityKey.AssociationId'),
        outputPath: 'AssociationId',
        parameters: {
          InstanceId: this.input.instanceId,
          Key: this.input.key,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateSecurityKey.AssociationId', props);
    return resource.getResponseField('AssociationId') as unknown as string;
  }

}

export class ConnectCreateContactFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectCreateContactFlowRequest) {
    super(scope, id);
  }

  public get contactFlowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContactFlow',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.CreateContactFlow.ContactFlowId'),
        outputPath: 'ContactFlowId',
        parameters: {
          InstanceId: this.input.instanceId,
          Name: this.input.name,
          Type: this.input.type,
          Description: this.input.description,
          Content: this.input.content,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContactFlow.ContactFlowId', props);
    return resource.getResponseField('ContactFlowId') as unknown as string;
  }

  public get contactFlowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContactFlow',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.CreateContactFlow.ContactFlowArn'),
        outputPath: 'ContactFlowArn',
        parameters: {
          InstanceId: this.input.instanceId,
          Name: this.input.name,
          Type: this.input.type,
          Description: this.input.description,
          Content: this.input.content,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContactFlow.ContactFlowArn', props);
    return resource.getResponseField('ContactFlowArn') as unknown as string;
  }

}

export class ConnectCreateInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectCreateInstanceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.CreateInstance.Id'),
        outputPath: 'Id',
        parameters: {
          ClientToken: this.input.clientToken,
          IdentityManagementType: this.input.identityManagementType,
          InstanceAlias: this.input.instanceAlias,
          DirectoryId: this.input.directoryId,
          InboundCallsEnabled: this.input.inboundCallsEnabled,
          OutboundCallsEnabled: this.input.outboundCallsEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstance.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.CreateInstance.Arn'),
        outputPath: 'Arn',
        parameters: {
          ClientToken: this.input.clientToken,
          IdentityManagementType: this.input.identityManagementType,
          InstanceAlias: this.input.instanceAlias,
          DirectoryId: this.input.directoryId,
          InboundCallsEnabled: this.input.inboundCallsEnabled,
          OutboundCallsEnabled: this.input.outboundCallsEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstance.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class ConnectCreateRoutingProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectCreateRoutingProfileRequest) {
    super(scope, id);
  }

  public get routingProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.CreateRoutingProfile.RoutingProfileArn'),
        outputPath: 'RoutingProfileArn',
        parameters: {
          InstanceId: this.input.instanceId,
          Name: this.input.name,
          Description: this.input.description,
          DefaultOutboundQueueId: this.input.defaultOutboundQueueId,
          QueueConfigs: this.input.queueConfigs,
          MediaConcurrencies: this.input.mediaConcurrencies,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoutingProfile.RoutingProfileArn', props);
    return resource.getResponseField('RoutingProfileArn') as unknown as string;
  }

  public get routingProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.CreateRoutingProfile.RoutingProfileId'),
        outputPath: 'RoutingProfileId',
        parameters: {
          InstanceId: this.input.instanceId,
          Name: this.input.name,
          Description: this.input.description,
          DefaultOutboundQueueId: this.input.defaultOutboundQueueId,
          QueueConfigs: this.input.queueConfigs,
          MediaConcurrencies: this.input.mediaConcurrencies,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoutingProfile.RoutingProfileId', props);
    return resource.getResponseField('RoutingProfileId') as unknown as string;
  }

}

export class ConnectCreateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectCreateUserRequest) {
    super(scope, id);
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.CreateUser.UserId'),
        outputPath: 'UserId',
        parameters: {
          Username: this.input.username,
          Password: this.input.password,
          IdentityInfo: {
            FirstName: this.input.identityInfo?.firstName,
            LastName: this.input.identityInfo?.lastName,
            Email: this.input.identityInfo?.email,
          },
          PhoneConfig: {
            PhoneType: this.input.phoneConfig.phoneType,
            AutoAccept: this.input.phoneConfig.autoAccept,
            AfterContactWorkTimeLimit: this.input.phoneConfig.afterContactWorkTimeLimit,
            DeskPhoneNumber: this.input.phoneConfig.deskPhoneNumber,
          },
          DirectoryUserId: this.input.directoryUserId,
          SecurityProfileIds: this.input.securityProfileIds,
          RoutingProfileId: this.input.routingProfileId,
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.UserId', props);
    return resource.getResponseField('UserId') as unknown as string;
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.CreateUser.UserArn'),
        outputPath: 'UserArn',
        parameters: {
          Username: this.input.username,
          Password: this.input.password,
          IdentityInfo: {
            FirstName: this.input.identityInfo?.firstName,
            LastName: this.input.identityInfo?.lastName,
            Email: this.input.identityInfo?.email,
          },
          PhoneConfig: {
            PhoneType: this.input.phoneConfig.phoneType,
            AutoAccept: this.input.phoneConfig.autoAccept,
            AfterContactWorkTimeLimit: this.input.phoneConfig.afterContactWorkTimeLimit,
            DeskPhoneNumber: this.input.phoneConfig.deskPhoneNumber,
          },
          DirectoryUserId: this.input.directoryUserId,
          SecurityProfileIds: this.input.securityProfileIds,
          RoutingProfileId: this.input.routingProfileId,
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.UserArn', props);
    return resource.getResponseField('UserArn') as unknown as string;
  }

}

export class ConnectCreateUserHierarchyGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectCreateUserHierarchyGroupRequest) {
    super(scope, id);
  }

  public get hierarchyGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.CreateUserHierarchyGroup.HierarchyGroupId'),
        outputPath: 'HierarchyGroupId',
        parameters: {
          Name: this.input.name,
          ParentGroupId: this.input.parentGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserHierarchyGroup.HierarchyGroupId', props);
    return resource.getResponseField('HierarchyGroupId') as unknown as string;
  }

  public get hierarchyGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.CreateUserHierarchyGroup.HierarchyGroupArn'),
        outputPath: 'HierarchyGroupArn',
        parameters: {
          Name: this.input.name,
          ParentGroupId: this.input.parentGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserHierarchyGroup.HierarchyGroupArn', props);
    return resource.getResponseField('HierarchyGroupArn') as unknown as string;
  }

}

export class ConnectDescribeContactFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeContactFlowRequest) {
    super(scope, id);
  }

  public get contactFlow(): ConnectDescribeContactFlowContactFlow {
    return new ConnectDescribeContactFlowContactFlow(this, 'ContactFlow', this.__resources, this.input);
  }

}

export class ConnectDescribeContactFlowContactFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeContactFlowRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContactFlow',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeContactFlow.ContactFlow.Arn'),
        outputPath: 'ContactFlow.Arn',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowId: this.input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContactFlow.ContactFlow.Arn', props);
    return resource.getResponseField('ContactFlow.Arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContactFlow',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeContactFlow.ContactFlow.Id'),
        outputPath: 'ContactFlow.Id',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowId: this.input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContactFlow.ContactFlow.Id', props);
    return resource.getResponseField('ContactFlow.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContactFlow',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeContactFlow.ContactFlow.Name'),
        outputPath: 'ContactFlow.Name',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowId: this.input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContactFlow.ContactFlow.Name', props);
    return resource.getResponseField('ContactFlow.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContactFlow',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeContactFlow.ContactFlow.Type'),
        outputPath: 'ContactFlow.Type',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowId: this.input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContactFlow.ContactFlow.Type', props);
    return resource.getResponseField('ContactFlow.Type') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContactFlow',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeContactFlow.ContactFlow.Description'),
        outputPath: 'ContactFlow.Description',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowId: this.input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContactFlow.ContactFlow.Description', props);
    return resource.getResponseField('ContactFlow.Description') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContactFlow',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeContactFlow.ContactFlow.Content'),
        outputPath: 'ContactFlow.Content',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowId: this.input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContactFlow.ContactFlow.Content', props);
    return resource.getResponseField('ContactFlow.Content') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContactFlow',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeContactFlow.ContactFlow.Tags'),
        outputPath: 'ContactFlow.Tags',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowId: this.input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContactFlow.ContactFlow.Tags', props);
    return resource.getResponseField('ContactFlow.Tags') as unknown as Record<string, string>;
  }

}

export class ConnectDescribeInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceRequest) {
    super(scope, id);
  }

  public get instance(): ConnectDescribeInstanceInstance {
    return new ConnectDescribeInstanceInstance(this, 'Instance', this.__resources, this.input);
  }

}

export class ConnectDescribeInstanceInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstance.Instance.Id'),
        outputPath: 'Instance.Id',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstance.Instance.Id', props);
    return resource.getResponseField('Instance.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstance.Instance.Arn'),
        outputPath: 'Instance.Arn',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstance.Instance.Arn', props);
    return resource.getResponseField('Instance.Arn') as unknown as string;
  }

  public get identityManagementType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstance.Instance.IdentityManagementType'),
        outputPath: 'Instance.IdentityManagementType',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstance.Instance.IdentityManagementType', props);
    return resource.getResponseField('Instance.IdentityManagementType') as unknown as string;
  }

  public get instanceAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstance.Instance.InstanceAlias'),
        outputPath: 'Instance.InstanceAlias',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstance.Instance.InstanceAlias', props);
    return resource.getResponseField('Instance.InstanceAlias') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstance.Instance.CreatedTime'),
        outputPath: 'Instance.CreatedTime',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstance.Instance.CreatedTime', props);
    return resource.getResponseField('Instance.CreatedTime') as unknown as string;
  }

  public get serviceRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstance.Instance.ServiceRole'),
        outputPath: 'Instance.ServiceRole',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstance.Instance.ServiceRole', props);
    return resource.getResponseField('Instance.ServiceRole') as unknown as string;
  }

  public get instanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstance.Instance.InstanceStatus'),
        outputPath: 'Instance.InstanceStatus',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstance.Instance.InstanceStatus', props);
    return resource.getResponseField('Instance.InstanceStatus') as unknown as string;
  }

  public get statusReason(): ConnectDescribeInstanceInstanceStatusReason {
    return new ConnectDescribeInstanceInstanceStatusReason(this, 'StatusReason', this.__resources, this.input);
  }

  public get inboundCallsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstance.Instance.InboundCallsEnabled'),
        outputPath: 'Instance.InboundCallsEnabled',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstance.Instance.InboundCallsEnabled', props);
    return resource.getResponseField('Instance.InboundCallsEnabled') as unknown as boolean;
  }

  public get outboundCallsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstance.Instance.OutboundCallsEnabled'),
        outputPath: 'Instance.OutboundCallsEnabled',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstance.Instance.OutboundCallsEnabled', props);
    return resource.getResponseField('Instance.OutboundCallsEnabled') as unknown as boolean;
  }

}

export class ConnectDescribeInstanceInstanceStatusReason extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstance',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstance.Instance.StatusReason.Message'),
        outputPath: 'Instance.StatusReason.Message',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstance.Instance.StatusReason.Message', props);
    return resource.getResponseField('Instance.StatusReason.Message') as unknown as string;
  }

}

export class ConnectDescribeInstanceAttribute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceAttributeRequest) {
    super(scope, id);
  }

  public get attribute(): ConnectDescribeInstanceAttributeAttribute {
    return new ConnectDescribeInstanceAttributeAttribute(this, 'Attribute', this.__resources, this.input);
  }

}

export class ConnectDescribeInstanceAttributeAttribute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceAttributeRequest) {
    super(scope, id);
  }

  public get attributeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceAttribute',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceAttribute.Attribute.AttributeType'),
        outputPath: 'Attribute.AttributeType',
        parameters: {
          InstanceId: this.input.instanceId,
          AttributeType: this.input.attributeType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceAttribute.Attribute.AttributeType', props);
    return resource.getResponseField('Attribute.AttributeType') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceAttribute',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceAttribute.Attribute.Value'),
        outputPath: 'Attribute.Value',
        parameters: {
          InstanceId: this.input.instanceId,
          AttributeType: this.input.attributeType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceAttribute.Attribute.Value', props);
    return resource.getResponseField('Attribute.Value') as unknown as string;
  }

}

export class ConnectDescribeInstanceStorageConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
    super(scope, id);
  }

  public get storageConfig(): ConnectDescribeInstanceStorageConfigStorageConfig {
    return new ConnectDescribeInstanceStorageConfigStorageConfig(this, 'StorageConfig', this.__resources, this.input);
  }

}

export class ConnectDescribeInstanceStorageConfigStorageConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
    super(scope, id);
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.AssociationId'),
        outputPath: 'StorageConfig.AssociationId',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.AssociationId', props);
    return resource.getResponseField('StorageConfig.AssociationId') as unknown as string;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.StorageType'),
        outputPath: 'StorageConfig.StorageType',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.StorageType', props);
    return resource.getResponseField('StorageConfig.StorageType') as unknown as string;
  }

  public get s3Config(): ConnectDescribeInstanceStorageConfigStorageConfigS3Config {
    return new ConnectDescribeInstanceStorageConfigStorageConfigS3Config(this, 'S3Config', this.__resources, this.input);
  }

  public get kinesisVideoStreamConfig(): ConnectDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig {
    return new ConnectDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig(this, 'KinesisVideoStreamConfig', this.__resources, this.input);
  }

  public get kinesisStreamConfig(): ConnectDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig {
    return new ConnectDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig(this, 'KinesisStreamConfig', this.__resources, this.input);
  }

  public get kinesisFirehoseConfig(): ConnectDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig {
    return new ConnectDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig(this, 'KinesisFirehoseConfig', this.__resources, this.input);
  }

}

export class ConnectDescribeInstanceStorageConfigStorageConfigS3Config extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
    super(scope, id);
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.S3Config.BucketName'),
        outputPath: 'StorageConfig.S3Config.BucketName',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.S3Config.BucketName', props);
    return resource.getResponseField('StorageConfig.S3Config.BucketName') as unknown as string;
  }

  public get bucketPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.S3Config.BucketPrefix'),
        outputPath: 'StorageConfig.S3Config.BucketPrefix',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.S3Config.BucketPrefix', props);
    return resource.getResponseField('StorageConfig.S3Config.BucketPrefix') as unknown as string;
  }

  public get encryptionConfig(): ConnectDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig {
    return new ConnectDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig(this, 'EncryptionConfig', this.__resources, this.input);
  }

}

export class ConnectDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
    super(scope, id);
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.S3Config.EncryptionConfig.EncryptionType'),
        outputPath: 'StorageConfig.S3Config.EncryptionConfig.EncryptionType',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.S3Config.EncryptionConfig.EncryptionType', props);
    return resource.getResponseField('StorageConfig.S3Config.EncryptionConfig.EncryptionType') as unknown as string;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.S3Config.EncryptionConfig.KeyId'),
        outputPath: 'StorageConfig.S3Config.EncryptionConfig.KeyId',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.S3Config.EncryptionConfig.KeyId', props);
    return resource.getResponseField('StorageConfig.S3Config.EncryptionConfig.KeyId') as unknown as string;
  }

}

export class ConnectDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
    super(scope, id);
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.Prefix'),
        outputPath: 'StorageConfig.KinesisVideoStreamConfig.Prefix',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.Prefix', props);
    return resource.getResponseField('StorageConfig.KinesisVideoStreamConfig.Prefix') as unknown as string;
  }

  public get retentionPeriodHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.RetentionPeriodHours'),
        outputPath: 'StorageConfig.KinesisVideoStreamConfig.RetentionPeriodHours',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.RetentionPeriodHours', props);
    return resource.getResponseField('StorageConfig.KinesisVideoStreamConfig.RetentionPeriodHours') as unknown as number;
  }

  public get encryptionConfig(): ConnectDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig {
    return new ConnectDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig(this, 'EncryptionConfig', this.__resources, this.input);
  }

}

export class ConnectDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
    super(scope, id);
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.EncryptionType'),
        outputPath: 'StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.EncryptionType',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.EncryptionType', props);
    return resource.getResponseField('StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.EncryptionType') as unknown as string;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.KeyId'),
        outputPath: 'StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.KeyId',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.KeyId', props);
    return resource.getResponseField('StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.KeyId') as unknown as string;
  }

}

export class ConnectDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
    super(scope, id);
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.KinesisStreamConfig.StreamArn'),
        outputPath: 'StorageConfig.KinesisStreamConfig.StreamArn',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.KinesisStreamConfig.StreamArn', props);
    return resource.getResponseField('StorageConfig.KinesisStreamConfig.StreamArn') as unknown as string;
  }

}

export class ConnectDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
    super(scope, id);
  }

  public get firehoseArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceStorageConfig',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeInstanceStorageConfig.StorageConfig.KinesisFirehoseConfig.FirehoseArn'),
        outputPath: 'StorageConfig.KinesisFirehoseConfig.FirehoseArn',
        parameters: {
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceStorageConfig.StorageConfig.KinesisFirehoseConfig.FirehoseArn', props);
    return resource.getResponseField('StorageConfig.KinesisFirehoseConfig.FirehoseArn') as unknown as string;
  }

}

export class ConnectDescribeRoutingProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeRoutingProfileRequest) {
    super(scope, id);
  }

  public get routingProfile(): ConnectDescribeRoutingProfileRoutingProfile {
    return new ConnectDescribeRoutingProfileRoutingProfile(this, 'RoutingProfile', this.__resources, this.input);
  }

}

export class ConnectDescribeRoutingProfileRoutingProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeRoutingProfileRequest) {
    super(scope, id);
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeRoutingProfile.RoutingProfile.InstanceId'),
        outputPath: 'RoutingProfile.InstanceId',
        parameters: {
          InstanceId: this.input.instanceId,
          RoutingProfileId: this.input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoutingProfile.RoutingProfile.InstanceId', props);
    return resource.getResponseField('RoutingProfile.InstanceId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeRoutingProfile.RoutingProfile.Name'),
        outputPath: 'RoutingProfile.Name',
        parameters: {
          InstanceId: this.input.instanceId,
          RoutingProfileId: this.input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoutingProfile.RoutingProfile.Name', props);
    return resource.getResponseField('RoutingProfile.Name') as unknown as string;
  }

  public get routingProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeRoutingProfile.RoutingProfile.RoutingProfileArn'),
        outputPath: 'RoutingProfile.RoutingProfileArn',
        parameters: {
          InstanceId: this.input.instanceId,
          RoutingProfileId: this.input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoutingProfile.RoutingProfile.RoutingProfileArn', props);
    return resource.getResponseField('RoutingProfile.RoutingProfileArn') as unknown as string;
  }

  public get routingProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeRoutingProfile.RoutingProfile.RoutingProfileId'),
        outputPath: 'RoutingProfile.RoutingProfileId',
        parameters: {
          InstanceId: this.input.instanceId,
          RoutingProfileId: this.input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoutingProfile.RoutingProfile.RoutingProfileId', props);
    return resource.getResponseField('RoutingProfile.RoutingProfileId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeRoutingProfile.RoutingProfile.Description'),
        outputPath: 'RoutingProfile.Description',
        parameters: {
          InstanceId: this.input.instanceId,
          RoutingProfileId: this.input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoutingProfile.RoutingProfile.Description', props);
    return resource.getResponseField('RoutingProfile.Description') as unknown as string;
  }

  public get mediaConcurrencies(): shapes.ConnectMediaConcurrency[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeRoutingProfile.RoutingProfile.MediaConcurrencies'),
        outputPath: 'RoutingProfile.MediaConcurrencies',
        parameters: {
          InstanceId: this.input.instanceId,
          RoutingProfileId: this.input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoutingProfile.RoutingProfile.MediaConcurrencies', props);
    return resource.getResponseField('RoutingProfile.MediaConcurrencies') as unknown as shapes.ConnectMediaConcurrency[];
  }

  public get defaultOutboundQueueId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeRoutingProfile.RoutingProfile.DefaultOutboundQueueId'),
        outputPath: 'RoutingProfile.DefaultOutboundQueueId',
        parameters: {
          InstanceId: this.input.instanceId,
          RoutingProfileId: this.input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoutingProfile.RoutingProfile.DefaultOutboundQueueId', props);
    return resource.getResponseField('RoutingProfile.DefaultOutboundQueueId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingProfile',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeRoutingProfile.RoutingProfile.Tags'),
        outputPath: 'RoutingProfile.Tags',
        parameters: {
          InstanceId: this.input.instanceId,
          RoutingProfileId: this.input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoutingProfile.RoutingProfile.Tags', props);
    return resource.getResponseField('RoutingProfile.Tags') as unknown as Record<string, string>;
  }

}

export class ConnectDescribeUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserRequest) {
    super(scope, id);
  }

  public get user(): ConnectDescribeUserUser {
    return new ConnectDescribeUserUser(this, 'User', this.__resources, this.input);
  }

}

export class ConnectDescribeUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.Id'),
        outputPath: 'User.Id',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Id', props);
    return resource.getResponseField('User.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.Arn'),
        outputPath: 'User.Arn',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Arn', props);
    return resource.getResponseField('User.Arn') as unknown as string;
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.Username'),
        outputPath: 'User.Username',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Username', props);
    return resource.getResponseField('User.Username') as unknown as string;
  }

  public get identityInfo(): ConnectDescribeUserUserIdentityInfo {
    return new ConnectDescribeUserUserIdentityInfo(this, 'IdentityInfo', this.__resources, this.input);
  }

  public get phoneConfig(): ConnectDescribeUserUserPhoneConfig {
    return new ConnectDescribeUserUserPhoneConfig(this, 'PhoneConfig', this.__resources, this.input);
  }

  public get directoryUserId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.DirectoryUserId'),
        outputPath: 'User.DirectoryUserId',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.DirectoryUserId', props);
    return resource.getResponseField('User.DirectoryUserId') as unknown as string;
  }

  public get securityProfileIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.SecurityProfileIds'),
        outputPath: 'User.SecurityProfileIds',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.SecurityProfileIds', props);
    return resource.getResponseField('User.SecurityProfileIds') as unknown as string[];
  }

  public get routingProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.RoutingProfileId'),
        outputPath: 'User.RoutingProfileId',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.RoutingProfileId', props);
    return resource.getResponseField('User.RoutingProfileId') as unknown as string;
  }

  public get hierarchyGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.HierarchyGroupId'),
        outputPath: 'User.HierarchyGroupId',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.HierarchyGroupId', props);
    return resource.getResponseField('User.HierarchyGroupId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.Tags'),
        outputPath: 'User.Tags',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Tags', props);
    return resource.getResponseField('User.Tags') as unknown as Record<string, string>;
  }

}

export class ConnectDescribeUserUserIdentityInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserRequest) {
    super(scope, id);
  }

  public get firstName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.IdentityInfo.FirstName'),
        outputPath: 'User.IdentityInfo.FirstName',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.IdentityInfo.FirstName', props);
    return resource.getResponseField('User.IdentityInfo.FirstName') as unknown as string;
  }

  public get lastName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.IdentityInfo.LastName'),
        outputPath: 'User.IdentityInfo.LastName',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.IdentityInfo.LastName', props);
    return resource.getResponseField('User.IdentityInfo.LastName') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.IdentityInfo.Email'),
        outputPath: 'User.IdentityInfo.Email',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.IdentityInfo.Email', props);
    return resource.getResponseField('User.IdentityInfo.Email') as unknown as string;
  }

}

export class ConnectDescribeUserUserPhoneConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserRequest) {
    super(scope, id);
  }

  public get phoneType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.PhoneConfig.PhoneType'),
        outputPath: 'User.PhoneConfig.PhoneType',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.PhoneConfig.PhoneType', props);
    return resource.getResponseField('User.PhoneConfig.PhoneType') as unknown as string;
  }

  public get autoAccept(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.PhoneConfig.AutoAccept'),
        outputPath: 'User.PhoneConfig.AutoAccept',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.PhoneConfig.AutoAccept', props);
    return resource.getResponseField('User.PhoneConfig.AutoAccept') as unknown as boolean;
  }

  public get afterContactWorkTimeLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.PhoneConfig.AfterContactWorkTimeLimit'),
        outputPath: 'User.PhoneConfig.AfterContactWorkTimeLimit',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.PhoneConfig.AfterContactWorkTimeLimit', props);
    return resource.getResponseField('User.PhoneConfig.AfterContactWorkTimeLimit') as unknown as number;
  }

  public get deskPhoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUser.User.PhoneConfig.DeskPhoneNumber'),
        outputPath: 'User.PhoneConfig.DeskPhoneNumber',
        parameters: {
          UserId: this.input.userId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.PhoneConfig.DeskPhoneNumber', props);
    return resource.getResponseField('User.PhoneConfig.DeskPhoneNumber') as unknown as string;
  }

}

export class ConnectDescribeUserHierarchyGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
    super(scope, id);
  }

  public get hierarchyGroup(): ConnectDescribeUserHierarchyGroupHierarchyGroup {
    return new ConnectDescribeUserHierarchyGroupHierarchyGroup(this, 'HierarchyGroup', this.__resources, this.input);
  }

}

export class ConnectDescribeUserHierarchyGroupHierarchyGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.Id'),
        outputPath: 'HierarchyGroup.Id',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.Id', props);
    return resource.getResponseField('HierarchyGroup.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.Arn'),
        outputPath: 'HierarchyGroup.Arn',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.Arn', props);
    return resource.getResponseField('HierarchyGroup.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.Name'),
        outputPath: 'HierarchyGroup.Name',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.Name', props);
    return resource.getResponseField('HierarchyGroup.Name') as unknown as string;
  }

  public get levelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.LevelId'),
        outputPath: 'HierarchyGroup.LevelId',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.LevelId', props);
    return resource.getResponseField('HierarchyGroup.LevelId') as unknown as string;
  }

  public get hierarchyPath(): ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPath {
    return new ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPath(this, 'HierarchyPath', this.__resources, this.input);
  }

}

export class ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPath extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
    super(scope, id);
  }

  public get levelOne(): ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne {
    return new ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne(this, 'LevelOne', this.__resources, this.input);
  }

  public get levelTwo(): ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo {
    return new ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo(this, 'LevelTwo', this.__resources, this.input);
  }

  public get levelThree(): ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree {
    return new ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree(this, 'LevelThree', this.__resources, this.input);
  }

  public get levelFour(): ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour {
    return new ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour(this, 'LevelFour', this.__resources, this.input);
  }

  public get levelFive(): ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive {
    return new ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive(this, 'LevelFive', this.__resources, this.input);
  }

}

export class ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelOne.Id'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelOne.Id',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelOne.Id', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelOne.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelOne.Arn'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelOne.Arn',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelOne.Arn', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelOne.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelOne.Name'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelOne.Name',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelOne.Name', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelOne.Name') as unknown as string;
  }

}

export class ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelTwo.Id'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelTwo.Id',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelTwo.Id', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelTwo.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelTwo.Arn'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelTwo.Arn',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelTwo.Arn', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelTwo.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelTwo.Name'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelTwo.Name',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelTwo.Name', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelTwo.Name') as unknown as string;
  }

}

export class ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelThree.Id'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelThree.Id',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelThree.Id', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelThree.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelThree.Arn'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelThree.Arn',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelThree.Arn', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelThree.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelThree.Name'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelThree.Name',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelThree.Name', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelThree.Name') as unknown as string;
  }

}

export class ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFour.Id'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelFour.Id',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFour.Id', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelFour.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFour.Arn'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelFour.Arn',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFour.Arn', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelFour.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFour.Name'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelFour.Name',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFour.Name', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelFour.Name') as unknown as string;
  }

}

export class ConnectDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFive.Id'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelFive.Id',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFive.Id', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelFive.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFive.Arn'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelFive.Arn',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFive.Arn', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelFive.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyGroup',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFive.Name'),
        outputPath: 'HierarchyGroup.HierarchyPath.LevelFive.Name',
        parameters: {
          HierarchyGroupId: this.input.hierarchyGroupId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFive.Name', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelFive.Name') as unknown as string;
  }

}

export class ConnectDescribeUserHierarchyStructure extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
    super(scope, id);
  }

  public get hierarchyStructure(): ConnectDescribeUserHierarchyStructureHierarchyStructure {
    return new ConnectDescribeUserHierarchyStructureHierarchyStructure(this, 'HierarchyStructure', this.__resources, this.input);
  }

}

export class ConnectDescribeUserHierarchyStructureHierarchyStructure extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
    super(scope, id);
  }

  public get levelOne(): ConnectDescribeUserHierarchyStructureHierarchyStructureLevelOne {
    return new ConnectDescribeUserHierarchyStructureHierarchyStructureLevelOne(this, 'LevelOne', this.__resources, this.input);
  }

  public get levelTwo(): ConnectDescribeUserHierarchyStructureHierarchyStructureLevelTwo {
    return new ConnectDescribeUserHierarchyStructureHierarchyStructureLevelTwo(this, 'LevelTwo', this.__resources, this.input);
  }

  public get levelThree(): ConnectDescribeUserHierarchyStructureHierarchyStructureLevelThree {
    return new ConnectDescribeUserHierarchyStructureHierarchyStructureLevelThree(this, 'LevelThree', this.__resources, this.input);
  }

  public get levelFour(): ConnectDescribeUserHierarchyStructureHierarchyStructureLevelFour {
    return new ConnectDescribeUserHierarchyStructureHierarchyStructureLevelFour(this, 'LevelFour', this.__resources, this.input);
  }

  public get levelFive(): ConnectDescribeUserHierarchyStructureHierarchyStructureLevelFive {
    return new ConnectDescribeUserHierarchyStructureHierarchyStructureLevelFive(this, 'LevelFive', this.__resources, this.input);
  }

}

export class ConnectDescribeUserHierarchyStructureHierarchyStructureLevelOne extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelOne.Id'),
        outputPath: 'HierarchyStructure.LevelOne.Id',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelOne.Id', props);
    return resource.getResponseField('HierarchyStructure.LevelOne.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelOne.Arn'),
        outputPath: 'HierarchyStructure.LevelOne.Arn',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelOne.Arn', props);
    return resource.getResponseField('HierarchyStructure.LevelOne.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelOne.Name'),
        outputPath: 'HierarchyStructure.LevelOne.Name',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelOne.Name', props);
    return resource.getResponseField('HierarchyStructure.LevelOne.Name') as unknown as string;
  }

}

export class ConnectDescribeUserHierarchyStructureHierarchyStructureLevelTwo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelTwo.Id'),
        outputPath: 'HierarchyStructure.LevelTwo.Id',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelTwo.Id', props);
    return resource.getResponseField('HierarchyStructure.LevelTwo.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelTwo.Arn'),
        outputPath: 'HierarchyStructure.LevelTwo.Arn',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelTwo.Arn', props);
    return resource.getResponseField('HierarchyStructure.LevelTwo.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelTwo.Name'),
        outputPath: 'HierarchyStructure.LevelTwo.Name',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelTwo.Name', props);
    return resource.getResponseField('HierarchyStructure.LevelTwo.Name') as unknown as string;
  }

}

export class ConnectDescribeUserHierarchyStructureHierarchyStructureLevelThree extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelThree.Id'),
        outputPath: 'HierarchyStructure.LevelThree.Id',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelThree.Id', props);
    return resource.getResponseField('HierarchyStructure.LevelThree.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelThree.Arn'),
        outputPath: 'HierarchyStructure.LevelThree.Arn',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelThree.Arn', props);
    return resource.getResponseField('HierarchyStructure.LevelThree.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelThree.Name'),
        outputPath: 'HierarchyStructure.LevelThree.Name',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelThree.Name', props);
    return resource.getResponseField('HierarchyStructure.LevelThree.Name') as unknown as string;
  }

}

export class ConnectDescribeUserHierarchyStructureHierarchyStructureLevelFour extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelFour.Id'),
        outputPath: 'HierarchyStructure.LevelFour.Id',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFour.Id', props);
    return resource.getResponseField('HierarchyStructure.LevelFour.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelFour.Arn'),
        outputPath: 'HierarchyStructure.LevelFour.Arn',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFour.Arn', props);
    return resource.getResponseField('HierarchyStructure.LevelFour.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelFour.Name'),
        outputPath: 'HierarchyStructure.LevelFour.Name',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFour.Name', props);
    return resource.getResponseField('HierarchyStructure.LevelFour.Name') as unknown as string;
  }

}

export class ConnectDescribeUserHierarchyStructureHierarchyStructureLevelFive extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelFive.Id'),
        outputPath: 'HierarchyStructure.LevelFive.Id',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFive.Id', props);
    return resource.getResponseField('HierarchyStructure.LevelFive.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelFive.Arn'),
        outputPath: 'HierarchyStructure.LevelFive.Arn',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFive.Arn', props);
    return resource.getResponseField('HierarchyStructure.LevelFive.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserHierarchyStructure',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.DescribeUserHierarchyStructure.HierarchyStructure.LevelFive.Name'),
        outputPath: 'HierarchyStructure.LevelFive.Name',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFive.Name', props);
    return resource.getResponseField('HierarchyStructure.LevelFive.Name') as unknown as string;
  }

}

export class ConnectFetchContactAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectGetContactAttributesRequest) {
    super(scope, id);
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactAttributes',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.GetContactAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          InstanceId: this.input.instanceId,
          InitialContactId: this.input.initialContactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContactAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class ConnectFetchCurrentMetricData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectGetCurrentMetricDataRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentMetricData',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.GetCurrentMetricData.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          Filters: {
            Queues: this.input.filters.queues,
            Channels: this.input.filters.channels,
          },
          Groupings: this.input.groupings,
          CurrentMetrics: this.input.currentMetrics,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentMetricData.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get metricResults(): shapes.ConnectCurrentMetricResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentMetricData',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.GetCurrentMetricData.MetricResults'),
        outputPath: 'MetricResults',
        parameters: {
          InstanceId: this.input.instanceId,
          Filters: {
            Queues: this.input.filters.queues,
            Channels: this.input.filters.channels,
          },
          Groupings: this.input.groupings,
          CurrentMetrics: this.input.currentMetrics,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentMetricData.MetricResults', props);
    return resource.getResponseField('MetricResults') as unknown as shapes.ConnectCurrentMetricResult[];
  }

  public get dataSnapshotTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentMetricData',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.GetCurrentMetricData.DataSnapshotTime'),
        outputPath: 'DataSnapshotTime',
        parameters: {
          InstanceId: this.input.instanceId,
          Filters: {
            Queues: this.input.filters.queues,
            Channels: this.input.filters.channels,
          },
          Groupings: this.input.groupings,
          CurrentMetrics: this.input.currentMetrics,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentMetricData.DataSnapshotTime', props);
    return resource.getResponseField('DataSnapshotTime') as unknown as string;
  }

}

export class ConnectFetchFederationToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectGetFederationTokenRequest) {
    super(scope, id);
  }

  public get credentials(): ConnectFetchFederationTokenCredentials {
    return new ConnectFetchFederationTokenCredentials(this, 'Credentials', this.__resources, this.input);
  }

}

export class ConnectFetchFederationTokenCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectGetFederationTokenRequest) {
    super(scope, id);
  }

  public get accessToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.GetFederationToken.Credentials.AccessToken'),
        outputPath: 'Credentials.AccessToken',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.Credentials.AccessToken', props);
    return resource.getResponseField('Credentials.AccessToken') as unknown as string;
  }

  public get accessTokenExpiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.GetFederationToken.Credentials.AccessTokenExpiration'),
        outputPath: 'Credentials.AccessTokenExpiration',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.Credentials.AccessTokenExpiration', props);
    return resource.getResponseField('Credentials.AccessTokenExpiration') as unknown as string;
  }

  public get refreshToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.GetFederationToken.Credentials.RefreshToken'),
        outputPath: 'Credentials.RefreshToken',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.Credentials.RefreshToken', props);
    return resource.getResponseField('Credentials.RefreshToken') as unknown as string;
  }

  public get refreshTokenExpiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.GetFederationToken.Credentials.RefreshTokenExpiration'),
        outputPath: 'Credentials.RefreshTokenExpiration',
        parameters: {
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.Credentials.RefreshTokenExpiration', props);
    return resource.getResponseField('Credentials.RefreshTokenExpiration') as unknown as string;
  }

}

export class ConnectFetchMetricData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectGetMetricDataRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMetricData',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.GetMetricData.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Filters: {
            Queues: this.input.filters.queues,
            Channels: this.input.filters.channels,
          },
          Groupings: this.input.groupings,
          HistoricalMetrics: this.input.historicalMetrics,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMetricData.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get metricResults(): shapes.ConnectHistoricalMetricResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMetricData',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.GetMetricData.MetricResults'),
        outputPath: 'MetricResults',
        parameters: {
          InstanceId: this.input.instanceId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Filters: {
            Queues: this.input.filters.queues,
            Channels: this.input.filters.channels,
          },
          Groupings: this.input.groupings,
          HistoricalMetrics: this.input.historicalMetrics,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMetricData.MetricResults', props);
    return resource.getResponseField('MetricResults') as unknown as shapes.ConnectHistoricalMetricResult[];
  }

}

export class ConnectListApprovedOrigins extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListApprovedOriginsRequest) {
    super(scope, id);
  }

  public get origins(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApprovedOrigins',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListApprovedOrigins.Origins'),
        outputPath: 'Origins',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApprovedOrigins.Origins', props);
    return resource.getResponseField('Origins') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApprovedOrigins',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListApprovedOrigins.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApprovedOrigins.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListContactFlows extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListContactFlowsRequest) {
    super(scope, id);
  }

  public get contactFlowSummaryList(): shapes.ConnectContactFlowSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContactFlows',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListContactFlows.ContactFlowSummaryList'),
        outputPath: 'ContactFlowSummaryList',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowTypes: this.input.contactFlowTypes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContactFlows.ContactFlowSummaryList', props);
    return resource.getResponseField('ContactFlowSummaryList') as unknown as shapes.ConnectContactFlowSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContactFlows',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListContactFlows.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowTypes: this.input.contactFlowTypes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContactFlows.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListHoursOfOperations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListHoursOfOperationsRequest) {
    super(scope, id);
  }

  public get hoursOfOperationSummaryList(): shapes.ConnectHoursOfOperationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHoursOfOperations',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListHoursOfOperations.HoursOfOperationSummaryList'),
        outputPath: 'HoursOfOperationSummaryList',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHoursOfOperations.HoursOfOperationSummaryList', props);
    return resource.getResponseField('HoursOfOperationSummaryList') as unknown as shapes.ConnectHoursOfOperationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHoursOfOperations',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListHoursOfOperations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHoursOfOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListInstanceAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListInstanceAttributesRequest) {
    super(scope, id);
  }

  public get attributes(): shapes.ConnectAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceAttributes',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListInstanceAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as shapes.ConnectAttribute[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceAttributes',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListInstanceAttributes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceAttributes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListInstanceStorageConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListInstanceStorageConfigsRequest) {
    super(scope, id);
  }

  public get storageConfigs(): shapes.ConnectInstanceStorageConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceStorageConfigs',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListInstanceStorageConfigs.StorageConfigs'),
        outputPath: 'StorageConfigs',
        parameters: {
          InstanceId: this.input.instanceId,
          ResourceType: this.input.resourceType,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceStorageConfigs.StorageConfigs', props);
    return resource.getResponseField('StorageConfigs') as unknown as shapes.ConnectInstanceStorageConfig[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceStorageConfigs',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListInstanceStorageConfigs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          ResourceType: this.input.resourceType,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceStorageConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListInstancesRequest) {
    super(scope, id);
  }

  public get instanceSummaryList(): shapes.ConnectInstanceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstances',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListInstances.InstanceSummaryList'),
        outputPath: 'InstanceSummaryList',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstances.InstanceSummaryList', props);
    return resource.getResponseField('InstanceSummaryList') as unknown as shapes.ConnectInstanceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstances',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListInstances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListLambdaFunctions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListLambdaFunctionsRequest) {
    super(scope, id);
  }

  public get lambdaFunctions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLambdaFunctions',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListLambdaFunctions.LambdaFunctions'),
        outputPath: 'LambdaFunctions',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLambdaFunctions.LambdaFunctions', props);
    return resource.getResponseField('LambdaFunctions') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLambdaFunctions',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListLambdaFunctions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLambdaFunctions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListLexBots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListLexBotsRequest) {
    super(scope, id);
  }

  public get lexBots(): shapes.ConnectLexBot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLexBots',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListLexBots.LexBots'),
        outputPath: 'LexBots',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLexBots.LexBots', props);
    return resource.getResponseField('LexBots') as unknown as shapes.ConnectLexBot[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLexBots',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListLexBots.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLexBots.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListPhoneNumbers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListPhoneNumbersRequest) {
    super(scope, id);
  }

  public get phoneNumberSummaryList(): shapes.ConnectPhoneNumberSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPhoneNumbers',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListPhoneNumbers.PhoneNumberSummaryList'),
        outputPath: 'PhoneNumberSummaryList',
        parameters: {
          InstanceId: this.input.instanceId,
          PhoneNumberTypes: this.input.phoneNumberTypes,
          PhoneNumberCountryCodes: this.input.phoneNumberCountryCodes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPhoneNumbers.PhoneNumberSummaryList', props);
    return resource.getResponseField('PhoneNumberSummaryList') as unknown as shapes.ConnectPhoneNumberSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPhoneNumbers',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListPhoneNumbers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          PhoneNumberTypes: this.input.phoneNumberTypes,
          PhoneNumberCountryCodes: this.input.phoneNumberCountryCodes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPhoneNumbers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListPrompts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListPromptsRequest) {
    super(scope, id);
  }

  public get promptSummaryList(): shapes.ConnectPromptSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPrompts',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListPrompts.PromptSummaryList'),
        outputPath: 'PromptSummaryList',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPrompts.PromptSummaryList', props);
    return resource.getResponseField('PromptSummaryList') as unknown as shapes.ConnectPromptSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPrompts',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListPrompts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPrompts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListQueues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListQueuesRequest) {
    super(scope, id);
  }

  public get queueSummaryList(): shapes.ConnectQueueSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listQueues',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListQueues.QueueSummaryList'),
        outputPath: 'QueueSummaryList',
        parameters: {
          InstanceId: this.input.instanceId,
          QueueTypes: this.input.queueTypes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListQueues.QueueSummaryList', props);
    return resource.getResponseField('QueueSummaryList') as unknown as shapes.ConnectQueueSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listQueues',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListQueues.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          QueueTypes: this.input.queueTypes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListQueues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListRoutingProfileQueues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListRoutingProfileQueuesRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoutingProfileQueues',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListRoutingProfileQueues.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          RoutingProfileId: this.input.routingProfileId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoutingProfileQueues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get routingProfileQueueConfigSummaryList(): shapes.ConnectRoutingProfileQueueConfigSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoutingProfileQueues',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListRoutingProfileQueues.RoutingProfileQueueConfigSummaryList'),
        outputPath: 'RoutingProfileQueueConfigSummaryList',
        parameters: {
          InstanceId: this.input.instanceId,
          RoutingProfileId: this.input.routingProfileId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoutingProfileQueues.RoutingProfileQueueConfigSummaryList', props);
    return resource.getResponseField('RoutingProfileQueueConfigSummaryList') as unknown as shapes.ConnectRoutingProfileQueueConfigSummary[];
  }

}

export class ConnectListRoutingProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListRoutingProfilesRequest) {
    super(scope, id);
  }

  public get routingProfileSummaryList(): shapes.ConnectRoutingProfileSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoutingProfiles',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListRoutingProfiles.RoutingProfileSummaryList'),
        outputPath: 'RoutingProfileSummaryList',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoutingProfiles.RoutingProfileSummaryList', props);
    return resource.getResponseField('RoutingProfileSummaryList') as unknown as shapes.ConnectRoutingProfileSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoutingProfiles',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListRoutingProfiles.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoutingProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListSecurityKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListSecurityKeysRequest) {
    super(scope, id);
  }

  public get securityKeys(): shapes.ConnectSecurityKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecurityKeys',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListSecurityKeys.SecurityKeys'),
        outputPath: 'SecurityKeys',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecurityKeys.SecurityKeys', props);
    return resource.getResponseField('SecurityKeys') as unknown as shapes.ConnectSecurityKey[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecurityKeys',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListSecurityKeys.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecurityKeys.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListSecurityProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListSecurityProfilesRequest) {
    super(scope, id);
  }

  public get securityProfileSummaryList(): shapes.ConnectSecurityProfileSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecurityProfiles',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListSecurityProfiles.SecurityProfileSummaryList'),
        outputPath: 'SecurityProfileSummaryList',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecurityProfiles.SecurityProfileSummaryList', props);
    return resource.getResponseField('SecurityProfileSummaryList') as unknown as shapes.ConnectSecurityProfileSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecurityProfiles',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListSecurityProfiles.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecurityProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class ConnectListUserHierarchyGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListUserHierarchyGroupsRequest) {
    super(scope, id);
  }

  public get userHierarchyGroupSummaryList(): shapes.ConnectHierarchyGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserHierarchyGroups',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListUserHierarchyGroups.UserHierarchyGroupSummaryList'),
        outputPath: 'UserHierarchyGroupSummaryList',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserHierarchyGroups.UserHierarchyGroupSummaryList', props);
    return resource.getResponseField('UserHierarchyGroupSummaryList') as unknown as shapes.ConnectHierarchyGroupSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserHierarchyGroups',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListUserHierarchyGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserHierarchyGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectListUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectListUsersRequest) {
    super(scope, id);
  }

  public get userSummaryList(): shapes.ConnectUserSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListUsers.UserSummaryList'),
        outputPath: 'UserSummaryList',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.UserSummaryList', props);
    return resource.getResponseField('UserSummaryList') as unknown as shapes.ConnectUserSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.ListUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.input.instanceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectStartChatContact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectStartChatContactRequest) {
    super(scope, id);
  }

  public get contactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startChatContact',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.StartChatContact.ContactId'),
        outputPath: 'ContactId',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowId: this.input.contactFlowId,
          Attributes: this.input.attributes,
          ParticipantDetails: {
            DisplayName: this.input.participantDetails.displayName,
          },
          InitialMessage: {
            ContentType: this.input.initialMessage?.contentType,
            Content: this.input.initialMessage?.content,
          },
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartChatContact.ContactId', props);
    return resource.getResponseField('ContactId') as unknown as string;
  }

  public get participantId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startChatContact',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.StartChatContact.ParticipantId'),
        outputPath: 'ParticipantId',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowId: this.input.contactFlowId,
          Attributes: this.input.attributes,
          ParticipantDetails: {
            DisplayName: this.input.participantDetails.displayName,
          },
          InitialMessage: {
            ContentType: this.input.initialMessage?.contentType,
            Content: this.input.initialMessage?.content,
          },
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartChatContact.ParticipantId', props);
    return resource.getResponseField('ParticipantId') as unknown as string;
  }

  public get participantToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startChatContact',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.StartChatContact.ParticipantToken'),
        outputPath: 'ParticipantToken',
        parameters: {
          InstanceId: this.input.instanceId,
          ContactFlowId: this.input.contactFlowId,
          Attributes: this.input.attributes,
          ParticipantDetails: {
            DisplayName: this.input.participantDetails.displayName,
          },
          InitialMessage: {
            ContentType: this.input.initialMessage?.contentType,
            Content: this.input.initialMessage?.content,
          },
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartChatContact.ParticipantToken', props);
    return resource.getResponseField('ParticipantToken') as unknown as string;
  }

}

export class ConnectStartOutboundVoiceContact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectStartOutboundVoiceContactRequest) {
    super(scope, id);
  }

  public get contactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startOutboundVoiceContact',
        service: 'Connect',
        physicalResourceId: cr.PhysicalResourceId.of('Connect.StartOutboundVoiceContact.ContactId'),
        outputPath: 'ContactId',
        parameters: {
          DestinationPhoneNumber: this.input.destinationPhoneNumber,
          ContactFlowId: this.input.contactFlowId,
          InstanceId: this.input.instanceId,
          ClientToken: this.input.clientToken,
          SourcePhoneNumber: this.input.sourcePhoneNumber,
          QueueId: this.input.queueId,
          Attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartOutboundVoiceContact.ContactId', props);
    return resource.getResponseField('ContactId') as unknown as string;
  }

}

