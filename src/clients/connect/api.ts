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

  public associateInstanceStorageConfig(input: shapes.ConnectAssociateInstanceStorageConfigRequest): ConnectResponsesAssociateInstanceStorageConfig {
    return new ConnectResponsesAssociateInstanceStorageConfig(this, this.__resources, input);
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

  public associateSecurityKey(input: shapes.ConnectAssociateSecurityKeyRequest): ConnectResponsesAssociateSecurityKey {
    return new ConnectResponsesAssociateSecurityKey(this, this.__resources, input);
  }

  public createContactFlow(input: shapes.ConnectCreateContactFlowRequest): ConnectResponsesCreateContactFlow {
    return new ConnectResponsesCreateContactFlow(this, this.__resources, input);
  }

  public createInstance(input: shapes.ConnectCreateInstanceRequest): ConnectResponsesCreateInstance {
    return new ConnectResponsesCreateInstance(this, this.__resources, input);
  }

  public createRoutingProfile(input: shapes.ConnectCreateRoutingProfileRequest): ConnectResponsesCreateRoutingProfile {
    return new ConnectResponsesCreateRoutingProfile(this, this.__resources, input);
  }

  public createUser(input: shapes.ConnectCreateUserRequest): ConnectResponsesCreateUser {
    return new ConnectResponsesCreateUser(this, this.__resources, input);
  }

  public createUserHierarchyGroup(input: shapes.ConnectCreateUserHierarchyGroupRequest): ConnectResponsesCreateUserHierarchyGroup {
    return new ConnectResponsesCreateUserHierarchyGroup(this, this.__resources, input);
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

  public describeContactFlow(input: shapes.ConnectDescribeContactFlowRequest): ConnectResponsesDescribeContactFlow {
    return new ConnectResponsesDescribeContactFlow(this, this.__resources, input);
  }

  public describeInstance(input: shapes.ConnectDescribeInstanceRequest): ConnectResponsesDescribeInstance {
    return new ConnectResponsesDescribeInstance(this, this.__resources, input);
  }

  public describeInstanceAttribute(input: shapes.ConnectDescribeInstanceAttributeRequest): ConnectResponsesDescribeInstanceAttribute {
    return new ConnectResponsesDescribeInstanceAttribute(this, this.__resources, input);
  }

  public describeInstanceStorageConfig(input: shapes.ConnectDescribeInstanceStorageConfigRequest): ConnectResponsesDescribeInstanceStorageConfig {
    return new ConnectResponsesDescribeInstanceStorageConfig(this, this.__resources, input);
  }

  public describeRoutingProfile(input: shapes.ConnectDescribeRoutingProfileRequest): ConnectResponsesDescribeRoutingProfile {
    return new ConnectResponsesDescribeRoutingProfile(this, this.__resources, input);
  }

  public describeUser(input: shapes.ConnectDescribeUserRequest): ConnectResponsesDescribeUser {
    return new ConnectResponsesDescribeUser(this, this.__resources, input);
  }

  public describeUserHierarchyGroup(input: shapes.ConnectDescribeUserHierarchyGroupRequest): ConnectResponsesDescribeUserHierarchyGroup {
    return new ConnectResponsesDescribeUserHierarchyGroup(this, this.__resources, input);
  }

  public describeUserHierarchyStructure(input: shapes.ConnectDescribeUserHierarchyStructureRequest): ConnectResponsesDescribeUserHierarchyStructure {
    return new ConnectResponsesDescribeUserHierarchyStructure(this, this.__resources, input);
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

  public fetchContactAttributes(input: shapes.ConnectGetContactAttributesRequest): ConnectResponsesFetchContactAttributes {
    return new ConnectResponsesFetchContactAttributes(this, this.__resources, input);
  }

  public fetchCurrentMetricData(input: shapes.ConnectGetCurrentMetricDataRequest): ConnectResponsesFetchCurrentMetricData {
    return new ConnectResponsesFetchCurrentMetricData(this, this.__resources, input);
  }

  public fetchFederationToken(input: shapes.ConnectGetFederationTokenRequest): ConnectResponsesFetchFederationToken {
    return new ConnectResponsesFetchFederationToken(this, this.__resources, input);
  }

  public fetchMetricData(input: shapes.ConnectGetMetricDataRequest): ConnectResponsesFetchMetricData {
    return new ConnectResponsesFetchMetricData(this, this.__resources, input);
  }

  public listApprovedOrigins(input: shapes.ConnectListApprovedOriginsRequest): ConnectResponsesListApprovedOrigins {
    return new ConnectResponsesListApprovedOrigins(this, this.__resources, input);
  }

  public listContactFlows(input: shapes.ConnectListContactFlowsRequest): ConnectResponsesListContactFlows {
    return new ConnectResponsesListContactFlows(this, this.__resources, input);
  }

  public listHoursOfOperations(input: shapes.ConnectListHoursOfOperationsRequest): ConnectResponsesListHoursOfOperations {
    return new ConnectResponsesListHoursOfOperations(this, this.__resources, input);
  }

  public listInstanceAttributes(input: shapes.ConnectListInstanceAttributesRequest): ConnectResponsesListInstanceAttributes {
    return new ConnectResponsesListInstanceAttributes(this, this.__resources, input);
  }

  public listInstanceStorageConfigs(input: shapes.ConnectListInstanceStorageConfigsRequest): ConnectResponsesListInstanceStorageConfigs {
    return new ConnectResponsesListInstanceStorageConfigs(this, this.__resources, input);
  }

  public listInstances(input: shapes.ConnectListInstancesRequest): ConnectResponsesListInstances {
    return new ConnectResponsesListInstances(this, this.__resources, input);
  }

  public listLambdaFunctions(input: shapes.ConnectListLambdaFunctionsRequest): ConnectResponsesListLambdaFunctions {
    return new ConnectResponsesListLambdaFunctions(this, this.__resources, input);
  }

  public listLexBots(input: shapes.ConnectListLexBotsRequest): ConnectResponsesListLexBots {
    return new ConnectResponsesListLexBots(this, this.__resources, input);
  }

  public listPhoneNumbers(input: shapes.ConnectListPhoneNumbersRequest): ConnectResponsesListPhoneNumbers {
    return new ConnectResponsesListPhoneNumbers(this, this.__resources, input);
  }

  public listPrompts(input: shapes.ConnectListPromptsRequest): ConnectResponsesListPrompts {
    return new ConnectResponsesListPrompts(this, this.__resources, input);
  }

  public listQueues(input: shapes.ConnectListQueuesRequest): ConnectResponsesListQueues {
    return new ConnectResponsesListQueues(this, this.__resources, input);
  }

  public listRoutingProfileQueues(input: shapes.ConnectListRoutingProfileQueuesRequest): ConnectResponsesListRoutingProfileQueues {
    return new ConnectResponsesListRoutingProfileQueues(this, this.__resources, input);
  }

  public listRoutingProfiles(input: shapes.ConnectListRoutingProfilesRequest): ConnectResponsesListRoutingProfiles {
    return new ConnectResponsesListRoutingProfiles(this, this.__resources, input);
  }

  public listSecurityKeys(input: shapes.ConnectListSecurityKeysRequest): ConnectResponsesListSecurityKeys {
    return new ConnectResponsesListSecurityKeys(this, this.__resources, input);
  }

  public listSecurityProfiles(input: shapes.ConnectListSecurityProfilesRequest): ConnectResponsesListSecurityProfiles {
    return new ConnectResponsesListSecurityProfiles(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.ConnectListTagsForResourceRequest): ConnectResponsesListTagsForResource {
    return new ConnectResponsesListTagsForResource(this, this.__resources, input);
  }

  public listUserHierarchyGroups(input: shapes.ConnectListUserHierarchyGroupsRequest): ConnectResponsesListUserHierarchyGroups {
    return new ConnectResponsesListUserHierarchyGroups(this, this.__resources, input);
  }

  public listUsers(input: shapes.ConnectListUsersRequest): ConnectResponsesListUsers {
    return new ConnectResponsesListUsers(this, this.__resources, input);
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

  public startChatContact(input: shapes.ConnectStartChatContactRequest): ConnectResponsesStartChatContact {
    return new ConnectResponsesStartChatContact(this, this.__resources, input);
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

  public startOutboundVoiceContact(input: shapes.ConnectStartOutboundVoiceContactRequest): ConnectResponsesStartOutboundVoiceContact {
    return new ConnectResponsesStartOutboundVoiceContact(this, this.__resources, input);
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

export class ConnectResponsesAssociateInstanceStorageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectAssociateInstanceStorageConfigRequest) {
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
          InstanceId: this.__input.instanceId,
          ResourceType: this.__input.resourceType,
          StorageConfig: {
            AssociationId: this.__input.storageConfig.associationId,
            StorageType: this.__input.storageConfig.storageType,
            S3Config: {
              BucketName: this.__input.storageConfig.s3Config?.bucketName,
              BucketPrefix: this.__input.storageConfig.s3Config?.bucketPrefix,
              EncryptionConfig: {
                EncryptionType: this.__input.storageConfig.s3Config?.encryptionConfig?.encryptionType,
                KeyId: this.__input.storageConfig.s3Config?.encryptionConfig?.keyId,
              },
            },
            KinesisVideoStreamConfig: {
              Prefix: this.__input.storageConfig.kinesisVideoStreamConfig?.prefix,
              RetentionPeriodHours: this.__input.storageConfig.kinesisVideoStreamConfig?.retentionPeriodHours,
              EncryptionConfig: {
                EncryptionType: this.__input.storageConfig.kinesisVideoStreamConfig?.encryptionConfig.encryptionType,
                KeyId: this.__input.storageConfig.kinesisVideoStreamConfig?.encryptionConfig.keyId,
              },
            },
            KinesisStreamConfig: {
              StreamArn: this.__input.storageConfig.kinesisStreamConfig?.streamArn,
            },
            KinesisFirehoseConfig: {
              FirehoseArn: this.__input.storageConfig.kinesisFirehoseConfig?.firehoseArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateInstanceStorageConfig.AssociationId', props);
    return resource.getResponseField('AssociationId') as unknown as string;
  }

}

export class ConnectResponsesAssociateSecurityKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectAssociateSecurityKeyRequest) {
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
          InstanceId: this.__input.instanceId,
          Key: this.__input.key,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateSecurityKey.AssociationId', props);
    return resource.getResponseField('AssociationId') as unknown as string;
  }

}

export class ConnectResponsesCreateContactFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectCreateContactFlowRequest) {
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
          InstanceId: this.__input.instanceId,
          Name: this.__input.name,
          Type: this.__input.type,
          Description: this.__input.description,
          Content: this.__input.content,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContactFlow.ContactFlowId', props);
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
          InstanceId: this.__input.instanceId,
          Name: this.__input.name,
          Type: this.__input.type,
          Description: this.__input.description,
          Content: this.__input.content,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContactFlow.ContactFlowArn', props);
    return resource.getResponseField('ContactFlowArn') as unknown as string;
  }

}

export class ConnectResponsesCreateInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectCreateInstanceRequest) {
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
          ClientToken: this.__input.clientToken,
          IdentityManagementType: this.__input.identityManagementType,
          InstanceAlias: this.__input.instanceAlias,
          DirectoryId: this.__input.directoryId,
          InboundCallsEnabled: this.__input.inboundCallsEnabled,
          OutboundCallsEnabled: this.__input.outboundCallsEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstance.Id', props);
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
          ClientToken: this.__input.clientToken,
          IdentityManagementType: this.__input.identityManagementType,
          InstanceAlias: this.__input.instanceAlias,
          DirectoryId: this.__input.directoryId,
          InboundCallsEnabled: this.__input.inboundCallsEnabled,
          OutboundCallsEnabled: this.__input.outboundCallsEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstance.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class ConnectResponsesCreateRoutingProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectCreateRoutingProfileRequest) {
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
          InstanceId: this.__input.instanceId,
          Name: this.__input.name,
          Description: this.__input.description,
          DefaultOutboundQueueId: this.__input.defaultOutboundQueueId,
          QueueConfigs: this.__input.queueConfigs,
          MediaConcurrencies: this.__input.mediaConcurrencies,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoutingProfile.RoutingProfileArn', props);
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
          InstanceId: this.__input.instanceId,
          Name: this.__input.name,
          Description: this.__input.description,
          DefaultOutboundQueueId: this.__input.defaultOutboundQueueId,
          QueueConfigs: this.__input.queueConfigs,
          MediaConcurrencies: this.__input.mediaConcurrencies,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoutingProfile.RoutingProfileId', props);
    return resource.getResponseField('RoutingProfileId') as unknown as string;
  }

}

export class ConnectResponsesCreateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectCreateUserRequest) {
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
          Username: this.__input.username,
          Password: this.__input.password,
          IdentityInfo: {
            FirstName: this.__input.identityInfo?.firstName,
            LastName: this.__input.identityInfo?.lastName,
            Email: this.__input.identityInfo?.email,
          },
          PhoneConfig: {
            PhoneType: this.__input.phoneConfig.phoneType,
            AutoAccept: this.__input.phoneConfig.autoAccept,
            AfterContactWorkTimeLimit: this.__input.phoneConfig.afterContactWorkTimeLimit,
            DeskPhoneNumber: this.__input.phoneConfig.deskPhoneNumber,
          },
          DirectoryUserId: this.__input.directoryUserId,
          SecurityProfileIds: this.__input.securityProfileIds,
          RoutingProfileId: this.__input.routingProfileId,
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.UserId', props);
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
          Username: this.__input.username,
          Password: this.__input.password,
          IdentityInfo: {
            FirstName: this.__input.identityInfo?.firstName,
            LastName: this.__input.identityInfo?.lastName,
            Email: this.__input.identityInfo?.email,
          },
          PhoneConfig: {
            PhoneType: this.__input.phoneConfig.phoneType,
            AutoAccept: this.__input.phoneConfig.autoAccept,
            AfterContactWorkTimeLimit: this.__input.phoneConfig.afterContactWorkTimeLimit,
            DeskPhoneNumber: this.__input.phoneConfig.deskPhoneNumber,
          },
          DirectoryUserId: this.__input.directoryUserId,
          SecurityProfileIds: this.__input.securityProfileIds,
          RoutingProfileId: this.__input.routingProfileId,
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.UserArn', props);
    return resource.getResponseField('UserArn') as unknown as string;
  }

}

export class ConnectResponsesCreateUserHierarchyGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectCreateUserHierarchyGroupRequest) {
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
          Name: this.__input.name,
          ParentGroupId: this.__input.parentGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserHierarchyGroup.HierarchyGroupId', props);
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
          Name: this.__input.name,
          ParentGroupId: this.__input.parentGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserHierarchyGroup.HierarchyGroupArn', props);
    return resource.getResponseField('HierarchyGroupArn') as unknown as string;
  }

}

export class ConnectResponsesDescribeContactFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeContactFlowRequest) {
  }

  public get contactFlow(): ConnectResponsesDescribeContactFlowContactFlow {
    return new ConnectResponsesDescribeContactFlowContactFlow(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeContactFlowContactFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeContactFlowRequest) {
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
          InstanceId: this.__input.instanceId,
          ContactFlowId: this.__input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContactFlow.ContactFlow.Arn', props);
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
          InstanceId: this.__input.instanceId,
          ContactFlowId: this.__input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContactFlow.ContactFlow.Id', props);
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
          InstanceId: this.__input.instanceId,
          ContactFlowId: this.__input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContactFlow.ContactFlow.Name', props);
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
          InstanceId: this.__input.instanceId,
          ContactFlowId: this.__input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContactFlow.ContactFlow.Type', props);
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
          InstanceId: this.__input.instanceId,
          ContactFlowId: this.__input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContactFlow.ContactFlow.Description', props);
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
          InstanceId: this.__input.instanceId,
          ContactFlowId: this.__input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContactFlow.ContactFlow.Content', props);
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
          InstanceId: this.__input.instanceId,
          ContactFlowId: this.__input.contactFlowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContactFlow.ContactFlow.Tags', props);
    return resource.getResponseField('ContactFlow.Tags') as unknown as Record<string, string>;
  }

}

export class ConnectResponsesDescribeInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceRequest) {
  }

  public get instance(): ConnectResponsesDescribeInstanceInstance {
    return new ConnectResponsesDescribeInstanceInstance(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeInstanceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceRequest) {
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstance.Instance.Id', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstance.Instance.Arn', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstance.Instance.IdentityManagementType', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstance.Instance.InstanceAlias', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstance.Instance.CreatedTime', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstance.Instance.ServiceRole', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstance.Instance.InstanceStatus', props);
    return resource.getResponseField('Instance.InstanceStatus') as unknown as string;
  }

  public get statusReason(): ConnectResponsesDescribeInstanceInstanceStatusReason {
    return new ConnectResponsesDescribeInstanceInstanceStatusReason(this.__scope, this.__resources, this.__input);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstance.Instance.InboundCallsEnabled', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstance.Instance.OutboundCallsEnabled', props);
    return resource.getResponseField('Instance.OutboundCallsEnabled') as unknown as boolean;
  }

}

export class ConnectResponsesDescribeInstanceInstanceStatusReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceRequest) {
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstance.Instance.StatusReason.Message', props);
    return resource.getResponseField('Instance.StatusReason.Message') as unknown as string;
  }

}

export class ConnectResponsesDescribeInstanceAttribute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceAttributeRequest) {
  }

  public get attribute(): ConnectResponsesDescribeInstanceAttributeAttribute {
    return new ConnectResponsesDescribeInstanceAttributeAttribute(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeInstanceAttributeAttribute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceAttributeRequest) {
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
          InstanceId: this.__input.instanceId,
          AttributeType: this.__input.attributeType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceAttribute.Attribute.AttributeType', props);
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
          InstanceId: this.__input.instanceId,
          AttributeType: this.__input.attributeType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceAttribute.Attribute.Value', props);
    return resource.getResponseField('Attribute.Value') as unknown as string;
  }

}

export class ConnectResponsesDescribeInstanceStorageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
  }

  public get storageConfig(): ConnectResponsesDescribeInstanceStorageConfigStorageConfig {
    return new ConnectResponsesDescribeInstanceStorageConfigStorageConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeInstanceStorageConfigStorageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.AssociationId', props);
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.StorageType', props);
    return resource.getResponseField('StorageConfig.StorageType') as unknown as string;
  }

  public get s3Config(): ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config {
    return new ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config(this.__scope, this.__resources, this.__input);
  }

  public get kinesisVideoStreamConfig(): ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig {
    return new ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig(this.__scope, this.__resources, this.__input);
  }

  public get kinesisStreamConfig(): ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig {
    return new ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig(this.__scope, this.__resources, this.__input);
  }

  public get kinesisFirehoseConfig(): ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig {
    return new ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.S3Config.BucketName', props);
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.S3Config.BucketPrefix', props);
    return resource.getResponseField('StorageConfig.S3Config.BucketPrefix') as unknown as string;
  }

  public get encryptionConfig(): ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig {
    return new ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.S3Config.EncryptionConfig.EncryptionType', props);
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.S3Config.EncryptionConfig.KeyId', props);
    return resource.getResponseField('StorageConfig.S3Config.EncryptionConfig.KeyId') as unknown as string;
  }

}

export class ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.Prefix', props);
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.RetentionPeriodHours', props);
    return resource.getResponseField('StorageConfig.KinesisVideoStreamConfig.RetentionPeriodHours') as unknown as number;
  }

  public get encryptionConfig(): ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig {
    return new ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.EncryptionType', props);
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.KeyId', props);
    return resource.getResponseField('StorageConfig.KinesisVideoStreamConfig.EncryptionConfig.KeyId') as unknown as string;
  }

}

export class ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.KinesisStreamConfig.StreamArn', props);
    return resource.getResponseField('StorageConfig.KinesisStreamConfig.StreamArn') as unknown as string;
  }

}

export class ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeInstanceStorageConfigRequest) {
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
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceStorageConfig.StorageConfig.KinesisFirehoseConfig.FirehoseArn', props);
    return resource.getResponseField('StorageConfig.KinesisFirehoseConfig.FirehoseArn') as unknown as string;
  }

}

export class ConnectResponsesDescribeRoutingProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeRoutingProfileRequest) {
  }

  public get routingProfile(): ConnectResponsesDescribeRoutingProfileRoutingProfile {
    return new ConnectResponsesDescribeRoutingProfileRoutingProfile(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeRoutingProfileRoutingProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeRoutingProfileRequest) {
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
          InstanceId: this.__input.instanceId,
          RoutingProfileId: this.__input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingProfile.RoutingProfile.InstanceId', props);
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
          InstanceId: this.__input.instanceId,
          RoutingProfileId: this.__input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingProfile.RoutingProfile.Name', props);
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
          InstanceId: this.__input.instanceId,
          RoutingProfileId: this.__input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingProfile.RoutingProfile.RoutingProfileArn', props);
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
          InstanceId: this.__input.instanceId,
          RoutingProfileId: this.__input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingProfile.RoutingProfile.RoutingProfileId', props);
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
          InstanceId: this.__input.instanceId,
          RoutingProfileId: this.__input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingProfile.RoutingProfile.Description', props);
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
          InstanceId: this.__input.instanceId,
          RoutingProfileId: this.__input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingProfile.RoutingProfile.MediaConcurrencies', props);
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
          InstanceId: this.__input.instanceId,
          RoutingProfileId: this.__input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingProfile.RoutingProfile.DefaultOutboundQueueId', props);
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
          InstanceId: this.__input.instanceId,
          RoutingProfileId: this.__input.routingProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingProfile.RoutingProfile.Tags', props);
    return resource.getResponseField('RoutingProfile.Tags') as unknown as Record<string, string>;
  }

}

export class ConnectResponsesDescribeUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserRequest) {
  }

  public get user(): ConnectResponsesDescribeUserUser {
    return new ConnectResponsesDescribeUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserRequest) {
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Id', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Arn', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Username', props);
    return resource.getResponseField('User.Username') as unknown as string;
  }

  public get identityInfo(): ConnectResponsesDescribeUserUserIdentityInfo {
    return new ConnectResponsesDescribeUserUserIdentityInfo(this.__scope, this.__resources, this.__input);
  }

  public get phoneConfig(): ConnectResponsesDescribeUserUserPhoneConfig {
    return new ConnectResponsesDescribeUserUserPhoneConfig(this.__scope, this.__resources, this.__input);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.DirectoryUserId', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.SecurityProfileIds', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.RoutingProfileId', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.HierarchyGroupId', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Tags', props);
    return resource.getResponseField('User.Tags') as unknown as Record<string, string>;
  }

}

export class ConnectResponsesDescribeUserUserIdentityInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserRequest) {
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.IdentityInfo.FirstName', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.IdentityInfo.LastName', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.IdentityInfo.Email', props);
    return resource.getResponseField('User.IdentityInfo.Email') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserUserPhoneConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserRequest) {
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.PhoneConfig.PhoneType', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.PhoneConfig.AutoAccept', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.PhoneConfig.AfterContactWorkTimeLimit', props);
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
          UserId: this.__input.userId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.PhoneConfig.DeskPhoneNumber', props);
    return resource.getResponseField('User.PhoneConfig.DeskPhoneNumber') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserHierarchyGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
  }

  public get hierarchyGroup(): ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup {
    return new ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.Id', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.Arn', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.Name', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.LevelId', props);
    return resource.getResponseField('HierarchyGroup.LevelId') as unknown as string;
  }

  public get hierarchyPath(): ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath {
    return new ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
  }

  public get levelOne(): ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne {
    return new ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne(this.__scope, this.__resources, this.__input);
  }

  public get levelTwo(): ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo {
    return new ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo(this.__scope, this.__resources, this.__input);
  }

  public get levelThree(): ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree {
    return new ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree(this.__scope, this.__resources, this.__input);
  }

  public get levelFour(): ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour {
    return new ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour(this.__scope, this.__resources, this.__input);
  }

  public get levelFive(): ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive {
    return new ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelOne.Id', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelOne.Arn', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelOne.Name', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelOne.Name') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelTwo.Id', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelTwo.Arn', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelTwo.Name', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelTwo.Name') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelThree.Id', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelThree.Arn', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelThree.Name', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelThree.Name') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFour.Id', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFour.Arn', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFour.Name', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelFour.Name') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyGroupRequest) {
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFive.Id', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFive.Arn', props);
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
          HierarchyGroupId: this.__input.hierarchyGroupId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyGroup.HierarchyGroup.HierarchyPath.LevelFive.Name', props);
    return resource.getResponseField('HierarchyGroup.HierarchyPath.LevelFive.Name') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserHierarchyStructure {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
  }

  public get hierarchyStructure(): ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure {
    return new ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
  }

  public get levelOne(): ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne {
    return new ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne(this.__scope, this.__resources, this.__input);
  }

  public get levelTwo(): ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo {
    return new ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo(this.__scope, this.__resources, this.__input);
  }

  public get levelThree(): ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree {
    return new ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree(this.__scope, this.__resources, this.__input);
  }

  public get levelFour(): ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour {
    return new ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour(this.__scope, this.__resources, this.__input);
  }

  public get levelFive(): ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive {
    return new ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelOne.Id', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelOne.Arn', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelOne.Name', props);
    return resource.getResponseField('HierarchyStructure.LevelOne.Name') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelTwo.Id', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelTwo.Arn', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelTwo.Name', props);
    return resource.getResponseField('HierarchyStructure.LevelTwo.Name') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelThree.Id', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelThree.Arn', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelThree.Name', props);
    return resource.getResponseField('HierarchyStructure.LevelThree.Name') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFour.Id', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFour.Arn', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFour.Name', props);
    return resource.getResponseField('HierarchyStructure.LevelFour.Name') as unknown as string;
  }

}

export class ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectDescribeUserHierarchyStructureRequest) {
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFive.Id', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFive.Arn', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserHierarchyStructure.HierarchyStructure.LevelFive.Name', props);
    return resource.getResponseField('HierarchyStructure.LevelFive.Name') as unknown as string;
  }

}

export class ConnectResponsesFetchContactAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectGetContactAttributesRequest) {
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
          InstanceId: this.__input.instanceId,
          InitialContactId: this.__input.initialContactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class ConnectResponsesFetchCurrentMetricData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectGetCurrentMetricDataRequest) {
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
          InstanceId: this.__input.instanceId,
          Filters: {
            Queues: this.__input.filters.queues,
            Channels: this.__input.filters.channels,
          },
          Groupings: this.__input.groupings,
          CurrentMetrics: this.__input.currentMetrics,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentMetricData.NextToken', props);
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
          InstanceId: this.__input.instanceId,
          Filters: {
            Queues: this.__input.filters.queues,
            Channels: this.__input.filters.channels,
          },
          Groupings: this.__input.groupings,
          CurrentMetrics: this.__input.currentMetrics,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentMetricData.MetricResults', props);
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
          InstanceId: this.__input.instanceId,
          Filters: {
            Queues: this.__input.filters.queues,
            Channels: this.__input.filters.channels,
          },
          Groupings: this.__input.groupings,
          CurrentMetrics: this.__input.currentMetrics,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentMetricData.DataSnapshotTime', props);
    return resource.getResponseField('DataSnapshotTime') as unknown as string;
  }

}

export class ConnectResponsesFetchFederationToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectGetFederationTokenRequest) {
  }

  public get credentials(): ConnectResponsesFetchFederationTokenCredentials {
    return new ConnectResponsesFetchFederationTokenCredentials(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectResponsesFetchFederationTokenCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectGetFederationTokenRequest) {
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.Credentials.AccessToken', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.Credentials.AccessTokenExpiration', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.Credentials.RefreshToken', props);
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
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.Credentials.RefreshTokenExpiration', props);
    return resource.getResponseField('Credentials.RefreshTokenExpiration') as unknown as string;
  }

}

export class ConnectResponsesFetchMetricData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectGetMetricDataRequest) {
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
          InstanceId: this.__input.instanceId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Filters: {
            Queues: this.__input.filters.queues,
            Channels: this.__input.filters.channels,
          },
          Groupings: this.__input.groupings,
          HistoricalMetrics: this.__input.historicalMetrics,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMetricData.NextToken', props);
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
          InstanceId: this.__input.instanceId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Filters: {
            Queues: this.__input.filters.queues,
            Channels: this.__input.filters.channels,
          },
          Groupings: this.__input.groupings,
          HistoricalMetrics: this.__input.historicalMetrics,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMetricData.MetricResults', props);
    return resource.getResponseField('MetricResults') as unknown as shapes.ConnectHistoricalMetricResult[];
  }

}

export class ConnectResponsesListApprovedOrigins {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListApprovedOriginsRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApprovedOrigins.Origins', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApprovedOrigins.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListContactFlows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListContactFlowsRequest) {
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
          InstanceId: this.__input.instanceId,
          ContactFlowTypes: this.__input.contactFlowTypes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContactFlows.ContactFlowSummaryList', props);
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
          InstanceId: this.__input.instanceId,
          ContactFlowTypes: this.__input.contactFlowTypes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContactFlows.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListHoursOfOperations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListHoursOfOperationsRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHoursOfOperations.HoursOfOperationSummaryList', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHoursOfOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListInstanceAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListInstanceAttributesRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceAttributes.Attributes', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceAttributes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListInstanceStorageConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListInstanceStorageConfigsRequest) {
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
          InstanceId: this.__input.instanceId,
          ResourceType: this.__input.resourceType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceStorageConfigs.StorageConfigs', props);
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
          InstanceId: this.__input.instanceId,
          ResourceType: this.__input.resourceType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceStorageConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListInstancesRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstances.InstanceSummaryList', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListLambdaFunctions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListLambdaFunctionsRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLambdaFunctions.LambdaFunctions', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLambdaFunctions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListLexBots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListLexBotsRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLexBots.LexBots', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLexBots.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListPhoneNumbers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListPhoneNumbersRequest) {
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
          InstanceId: this.__input.instanceId,
          PhoneNumberTypes: this.__input.phoneNumberTypes,
          PhoneNumberCountryCodes: this.__input.phoneNumberCountryCodes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPhoneNumbers.PhoneNumberSummaryList', props);
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
          InstanceId: this.__input.instanceId,
          PhoneNumberTypes: this.__input.phoneNumberTypes,
          PhoneNumberCountryCodes: this.__input.phoneNumberCountryCodes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPhoneNumbers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListPrompts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListPromptsRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPrompts.PromptSummaryList', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPrompts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListQueues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListQueuesRequest) {
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
          InstanceId: this.__input.instanceId,
          QueueTypes: this.__input.queueTypes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListQueues.QueueSummaryList', props);
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
          InstanceId: this.__input.instanceId,
          QueueTypes: this.__input.queueTypes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListQueues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListRoutingProfileQueues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListRoutingProfileQueuesRequest) {
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
          InstanceId: this.__input.instanceId,
          RoutingProfileId: this.__input.routingProfileId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoutingProfileQueues.NextToken', props);
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
          InstanceId: this.__input.instanceId,
          RoutingProfileId: this.__input.routingProfileId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoutingProfileQueues.RoutingProfileQueueConfigSummaryList', props);
    return resource.getResponseField('RoutingProfileQueueConfigSummaryList') as unknown as shapes.ConnectRoutingProfileQueueConfigSummary[];
  }

}

export class ConnectResponsesListRoutingProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListRoutingProfilesRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoutingProfiles.RoutingProfileSummaryList', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoutingProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListSecurityKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListSecurityKeysRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecurityKeys.SecurityKeys', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecurityKeys.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListSecurityProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListSecurityProfilesRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecurityProfiles.SecurityProfileSummaryList', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecurityProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class ConnectResponsesListUserHierarchyGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListUserHierarchyGroupsRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserHierarchyGroups.UserHierarchyGroupSummaryList', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserHierarchyGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesListUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectListUsersRequest) {
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.UserSummaryList', props);
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
          InstanceId: this.__input.instanceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectResponsesStartChatContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectStartChatContactRequest) {
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
          InstanceId: this.__input.instanceId,
          ContactFlowId: this.__input.contactFlowId,
          Attributes: this.__input.attributes,
          ParticipantDetails: {
            DisplayName: this.__input.participantDetails.displayName,
          },
          InitialMessage: {
            ContentType: this.__input.initialMessage?.contentType,
            Content: this.__input.initialMessage?.content,
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartChatContact.ContactId', props);
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
          InstanceId: this.__input.instanceId,
          ContactFlowId: this.__input.contactFlowId,
          Attributes: this.__input.attributes,
          ParticipantDetails: {
            DisplayName: this.__input.participantDetails.displayName,
          },
          InitialMessage: {
            ContentType: this.__input.initialMessage?.contentType,
            Content: this.__input.initialMessage?.content,
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartChatContact.ParticipantId', props);
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
          InstanceId: this.__input.instanceId,
          ContactFlowId: this.__input.contactFlowId,
          Attributes: this.__input.attributes,
          ParticipantDetails: {
            DisplayName: this.__input.participantDetails.displayName,
          },
          InitialMessage: {
            ContentType: this.__input.initialMessage?.contentType,
            Content: this.__input.initialMessage?.content,
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartChatContact.ParticipantToken', props);
    return resource.getResponseField('ParticipantToken') as unknown as string;
  }

}

export class ConnectResponsesStartOutboundVoiceContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectStartOutboundVoiceContactRequest) {
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
          DestinationPhoneNumber: this.__input.destinationPhoneNumber,
          ContactFlowId: this.__input.contactFlowId,
          InstanceId: this.__input.instanceId,
          ClientToken: this.__input.clientToken,
          SourcePhoneNumber: this.__input.sourcePhoneNumber,
          QueueId: this.__input.queueId,
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartOutboundVoiceContact.ContactId', props);
    return resource.getResponseField('ContactId') as unknown as string;
  }

}

