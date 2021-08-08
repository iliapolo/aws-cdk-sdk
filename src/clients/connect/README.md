# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ConnectClient <a name="aws-cdk-sdk.connect.ConnectClient"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectClient.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateApprovedOrigin` <a name="aws-cdk-sdk.connect.ConnectClient.associateApprovedOrigin"></a>

```typescript
public associateApprovedOrigin(input: ConnectAssociateApprovedOriginRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAssociateApprovedOriginRequest`](#aws-cdk-sdk.connect.ConnectAssociateApprovedOriginRequest)

---

##### `associateInstanceStorageConfig` <a name="aws-cdk-sdk.connect.ConnectClient.associateInstanceStorageConfig"></a>

```typescript
public associateInstanceStorageConfig(input: ConnectAssociateInstanceStorageConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAssociateInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectAssociateInstanceStorageConfigRequest)

---

##### `associateLambdaFunction` <a name="aws-cdk-sdk.connect.ConnectClient.associateLambdaFunction"></a>

```typescript
public associateLambdaFunction(input: ConnectAssociateLambdaFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAssociateLambdaFunctionRequest`](#aws-cdk-sdk.connect.ConnectAssociateLambdaFunctionRequest)

---

##### `associateLexBot` <a name="aws-cdk-sdk.connect.ConnectClient.associateLexBot"></a>

```typescript
public associateLexBot(input: ConnectAssociateLexBotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAssociateLexBotRequest`](#aws-cdk-sdk.connect.ConnectAssociateLexBotRequest)

---

##### `associateRoutingProfileQueues` <a name="aws-cdk-sdk.connect.ConnectClient.associateRoutingProfileQueues"></a>

```typescript
public associateRoutingProfileQueues(input: ConnectAssociateRoutingProfileQueuesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAssociateRoutingProfileQueuesRequest`](#aws-cdk-sdk.connect.ConnectAssociateRoutingProfileQueuesRequest)

---

##### `associateSecurityKey` <a name="aws-cdk-sdk.connect.ConnectClient.associateSecurityKey"></a>

```typescript
public associateSecurityKey(input: ConnectAssociateSecurityKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAssociateSecurityKeyRequest`](#aws-cdk-sdk.connect.ConnectAssociateSecurityKeyRequest)

---

##### `createContactFlow` <a name="aws-cdk-sdk.connect.ConnectClient.createContactFlow"></a>

```typescript
public createContactFlow(input: ConnectCreateContactFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCreateContactFlowRequest`](#aws-cdk-sdk.connect.ConnectCreateContactFlowRequest)

---

##### `createInstance` <a name="aws-cdk-sdk.connect.ConnectClient.createInstance"></a>

```typescript
public createInstance(input: ConnectCreateInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCreateInstanceRequest`](#aws-cdk-sdk.connect.ConnectCreateInstanceRequest)

---

##### `createRoutingProfile` <a name="aws-cdk-sdk.connect.ConnectClient.createRoutingProfile"></a>

```typescript
public createRoutingProfile(input: ConnectCreateRoutingProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest`](#aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest)

---

##### `createUser` <a name="aws-cdk-sdk.connect.ConnectClient.createUser"></a>

```typescript
public createUser(input: ConnectCreateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCreateUserRequest`](#aws-cdk-sdk.connect.ConnectCreateUserRequest)

---

##### `createUserHierarchyGroup` <a name="aws-cdk-sdk.connect.ConnectClient.createUserHierarchyGroup"></a>

```typescript
public createUserHierarchyGroup(input: ConnectCreateUserHierarchyGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupRequest)

---

##### `deleteInstance` <a name="aws-cdk-sdk.connect.ConnectClient.deleteInstance"></a>

```typescript
public deleteInstance(input: ConnectDeleteInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDeleteInstanceRequest`](#aws-cdk-sdk.connect.ConnectDeleteInstanceRequest)

---

##### `deleteUser` <a name="aws-cdk-sdk.connect.ConnectClient.deleteUser"></a>

```typescript
public deleteUser(input: ConnectDeleteUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDeleteUserRequest`](#aws-cdk-sdk.connect.ConnectDeleteUserRequest)

---

##### `deleteUserHierarchyGroup` <a name="aws-cdk-sdk.connect.ConnectClient.deleteUserHierarchyGroup"></a>

```typescript
public deleteUserHierarchyGroup(input: ConnectDeleteUserHierarchyGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDeleteUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectDeleteUserHierarchyGroupRequest)

---

##### `describeContactFlow` <a name="aws-cdk-sdk.connect.ConnectClient.describeContactFlow"></a>

```typescript
public describeContactFlow(input: ConnectDescribeContactFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeContactFlowRequest`](#aws-cdk-sdk.connect.ConnectDescribeContactFlowRequest)

---

##### `describeInstance` <a name="aws-cdk-sdk.connect.ConnectClient.describeInstance"></a>

```typescript
public describeInstance(input: ConnectDescribeInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceRequest)

---

##### `describeInstanceAttribute` <a name="aws-cdk-sdk.connect.ConnectClient.describeInstanceAttribute"></a>

```typescript
public describeInstanceAttribute(input: ConnectDescribeInstanceAttributeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeRequest)

---

##### `describeInstanceStorageConfig` <a name="aws-cdk-sdk.connect.ConnectClient.describeInstanceStorageConfig"></a>

```typescript
public describeInstanceStorageConfig(input: ConnectDescribeInstanceStorageConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest)

---

##### `describeRoutingProfile` <a name="aws-cdk-sdk.connect.ConnectClient.describeRoutingProfile"></a>

```typescript
public describeRoutingProfile(input: ConnectDescribeRoutingProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeRoutingProfileRequest`](#aws-cdk-sdk.connect.ConnectDescribeRoutingProfileRequest)

---

##### `describeUser` <a name="aws-cdk-sdk.connect.ConnectClient.describeUser"></a>

```typescript
public describeUser(input: ConnectDescribeUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserRequest)

---

##### `describeUserHierarchyGroup` <a name="aws-cdk-sdk.connect.ConnectClient.describeUserHierarchyGroup"></a>

```typescript
public describeUserHierarchyGroup(input: ConnectDescribeUserHierarchyGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest)

---

##### `describeUserHierarchyStructure` <a name="aws-cdk-sdk.connect.ConnectClient.describeUserHierarchyStructure"></a>

```typescript
public describeUserHierarchyStructure(input: ConnectDescribeUserHierarchyStructureRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest)

---

##### `disassociateApprovedOrigin` <a name="aws-cdk-sdk.connect.ConnectClient.disassociateApprovedOrigin"></a>

```typescript
public disassociateApprovedOrigin(input: ConnectDisassociateApprovedOriginRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDisassociateApprovedOriginRequest`](#aws-cdk-sdk.connect.ConnectDisassociateApprovedOriginRequest)

---

##### `disassociateInstanceStorageConfig` <a name="aws-cdk-sdk.connect.ConnectClient.disassociateInstanceStorageConfig"></a>

```typescript
public disassociateInstanceStorageConfig(input: ConnectDisassociateInstanceStorageConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDisassociateInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectDisassociateInstanceStorageConfigRequest)

---

##### `disassociateLambdaFunction` <a name="aws-cdk-sdk.connect.ConnectClient.disassociateLambdaFunction"></a>

```typescript
public disassociateLambdaFunction(input: ConnectDisassociateLambdaFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDisassociateLambdaFunctionRequest`](#aws-cdk-sdk.connect.ConnectDisassociateLambdaFunctionRequest)

---

##### `disassociateLexBot` <a name="aws-cdk-sdk.connect.ConnectClient.disassociateLexBot"></a>

```typescript
public disassociateLexBot(input: ConnectDisassociateLexBotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDisassociateLexBotRequest`](#aws-cdk-sdk.connect.ConnectDisassociateLexBotRequest)

---

##### `disassociateRoutingProfileQueues` <a name="aws-cdk-sdk.connect.ConnectClient.disassociateRoutingProfileQueues"></a>

```typescript
public disassociateRoutingProfileQueues(input: ConnectDisassociateRoutingProfileQueuesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDisassociateRoutingProfileQueuesRequest`](#aws-cdk-sdk.connect.ConnectDisassociateRoutingProfileQueuesRequest)

---

##### `disassociateSecurityKey` <a name="aws-cdk-sdk.connect.ConnectClient.disassociateSecurityKey"></a>

```typescript
public disassociateSecurityKey(input: ConnectDisassociateSecurityKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDisassociateSecurityKeyRequest`](#aws-cdk-sdk.connect.ConnectDisassociateSecurityKeyRequest)

---

##### `fetchContactAttributes` <a name="aws-cdk-sdk.connect.ConnectClient.fetchContactAttributes"></a>

```typescript
public fetchContactAttributes(input: ConnectGetContactAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectGetContactAttributesRequest`](#aws-cdk-sdk.connect.ConnectGetContactAttributesRequest)

---

##### `fetchCurrentMetricData` <a name="aws-cdk-sdk.connect.ConnectClient.fetchCurrentMetricData"></a>

```typescript
public fetchCurrentMetricData(input: ConnectGetCurrentMetricDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest`](#aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest)

---

##### `fetchFederationToken` <a name="aws-cdk-sdk.connect.ConnectClient.fetchFederationToken"></a>

```typescript
public fetchFederationToken(input: ConnectGetFederationTokenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectGetFederationTokenRequest`](#aws-cdk-sdk.connect.ConnectGetFederationTokenRequest)

---

##### `fetchMetricData` <a name="aws-cdk-sdk.connect.ConnectClient.fetchMetricData"></a>

```typescript
public fetchMetricData(input: ConnectGetMetricDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectGetMetricDataRequest`](#aws-cdk-sdk.connect.ConnectGetMetricDataRequest)

---

##### `listApprovedOrigins` <a name="aws-cdk-sdk.connect.ConnectClient.listApprovedOrigins"></a>

```typescript
public listApprovedOrigins(input: ConnectListApprovedOriginsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListApprovedOriginsRequest`](#aws-cdk-sdk.connect.ConnectListApprovedOriginsRequest)

---

##### `listContactFlows` <a name="aws-cdk-sdk.connect.ConnectClient.listContactFlows"></a>

```typescript
public listContactFlows(input: ConnectListContactFlowsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListContactFlowsRequest`](#aws-cdk-sdk.connect.ConnectListContactFlowsRequest)

---

##### `listHoursOfOperations` <a name="aws-cdk-sdk.connect.ConnectClient.listHoursOfOperations"></a>

```typescript
public listHoursOfOperations(input: ConnectListHoursOfOperationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListHoursOfOperationsRequest`](#aws-cdk-sdk.connect.ConnectListHoursOfOperationsRequest)

---

##### `listInstanceAttributes` <a name="aws-cdk-sdk.connect.ConnectClient.listInstanceAttributes"></a>

```typescript
public listInstanceAttributes(input: ConnectListInstanceAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListInstanceAttributesRequest`](#aws-cdk-sdk.connect.ConnectListInstanceAttributesRequest)

---

##### `listInstances` <a name="aws-cdk-sdk.connect.ConnectClient.listInstances"></a>

```typescript
public listInstances(input: ConnectListInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListInstancesRequest`](#aws-cdk-sdk.connect.ConnectListInstancesRequest)

---

##### `listInstanceStorageConfigs` <a name="aws-cdk-sdk.connect.ConnectClient.listInstanceStorageConfigs"></a>

```typescript
public listInstanceStorageConfigs(input: ConnectListInstanceStorageConfigsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsRequest`](#aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsRequest)

---

##### `listLambdaFunctions` <a name="aws-cdk-sdk.connect.ConnectClient.listLambdaFunctions"></a>

```typescript
public listLambdaFunctions(input: ConnectListLambdaFunctionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListLambdaFunctionsRequest`](#aws-cdk-sdk.connect.ConnectListLambdaFunctionsRequest)

---

##### `listLexBots` <a name="aws-cdk-sdk.connect.ConnectClient.listLexBots"></a>

```typescript
public listLexBots(input: ConnectListLexBotsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListLexBotsRequest`](#aws-cdk-sdk.connect.ConnectListLexBotsRequest)

---

##### `listPhoneNumbers` <a name="aws-cdk-sdk.connect.ConnectClient.listPhoneNumbers"></a>

```typescript
public listPhoneNumbers(input: ConnectListPhoneNumbersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListPhoneNumbersRequest`](#aws-cdk-sdk.connect.ConnectListPhoneNumbersRequest)

---

##### `listPrompts` <a name="aws-cdk-sdk.connect.ConnectClient.listPrompts"></a>

```typescript
public listPrompts(input: ConnectListPromptsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListPromptsRequest`](#aws-cdk-sdk.connect.ConnectListPromptsRequest)

---

##### `listQueues` <a name="aws-cdk-sdk.connect.ConnectClient.listQueues"></a>

```typescript
public listQueues(input: ConnectListQueuesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListQueuesRequest`](#aws-cdk-sdk.connect.ConnectListQueuesRequest)

---

##### `listRoutingProfileQueues` <a name="aws-cdk-sdk.connect.ConnectClient.listRoutingProfileQueues"></a>

```typescript
public listRoutingProfileQueues(input: ConnectListRoutingProfileQueuesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesRequest`](#aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesRequest)

---

##### `listRoutingProfiles` <a name="aws-cdk-sdk.connect.ConnectClient.listRoutingProfiles"></a>

```typescript
public listRoutingProfiles(input: ConnectListRoutingProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListRoutingProfilesRequest`](#aws-cdk-sdk.connect.ConnectListRoutingProfilesRequest)

---

##### `listSecurityKeys` <a name="aws-cdk-sdk.connect.ConnectClient.listSecurityKeys"></a>

```typescript
public listSecurityKeys(input: ConnectListSecurityKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListSecurityKeysRequest`](#aws-cdk-sdk.connect.ConnectListSecurityKeysRequest)

---

##### `listSecurityProfiles` <a name="aws-cdk-sdk.connect.ConnectClient.listSecurityProfiles"></a>

```typescript
public listSecurityProfiles(input: ConnectListSecurityProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListSecurityProfilesRequest`](#aws-cdk-sdk.connect.ConnectListSecurityProfilesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.connect.ConnectClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: ConnectListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListTagsForResourceRequest`](#aws-cdk-sdk.connect.ConnectListTagsForResourceRequest)

---

##### `listUserHierarchyGroups` <a name="aws-cdk-sdk.connect.ConnectClient.listUserHierarchyGroups"></a>

```typescript
public listUserHierarchyGroups(input: ConnectListUserHierarchyGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsRequest`](#aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsRequest)

---

##### `listUsers` <a name="aws-cdk-sdk.connect.ConnectClient.listUsers"></a>

```typescript
public listUsers(input: ConnectListUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListUsersRequest`](#aws-cdk-sdk.connect.ConnectListUsersRequest)

---

##### `resumeContactRecording` <a name="aws-cdk-sdk.connect.ConnectClient.resumeContactRecording"></a>

```typescript
public resumeContactRecording(input: ConnectResumeContactRecordingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResumeContactRecordingRequest`](#aws-cdk-sdk.connect.ConnectResumeContactRecordingRequest)

---

##### `startChatContact` <a name="aws-cdk-sdk.connect.ConnectClient.startChatContact"></a>

```typescript
public startChatContact(input: ConnectStartChatContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectStartChatContactRequest`](#aws-cdk-sdk.connect.ConnectStartChatContactRequest)

---

##### `startContactRecording` <a name="aws-cdk-sdk.connect.ConnectClient.startContactRecording"></a>

```typescript
public startContactRecording(input: ConnectStartContactRecordingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectStartContactRecordingRequest`](#aws-cdk-sdk.connect.ConnectStartContactRecordingRequest)

---

##### `startOutboundVoiceContact` <a name="aws-cdk-sdk.connect.ConnectClient.startOutboundVoiceContact"></a>

```typescript
public startOutboundVoiceContact(input: ConnectStartOutboundVoiceContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest`](#aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest)

---

##### `stopContact` <a name="aws-cdk-sdk.connect.ConnectClient.stopContact"></a>

```typescript
public stopContact(input: ConnectStopContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectStopContactRequest`](#aws-cdk-sdk.connect.ConnectStopContactRequest)

---

##### `stopContactRecording` <a name="aws-cdk-sdk.connect.ConnectClient.stopContactRecording"></a>

```typescript
public stopContactRecording(input: ConnectStopContactRecordingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectStopContactRecordingRequest`](#aws-cdk-sdk.connect.ConnectStopContactRecordingRequest)

---

##### `suspendContactRecording` <a name="aws-cdk-sdk.connect.ConnectClient.suspendContactRecording"></a>

```typescript
public suspendContactRecording(input: ConnectSuspendContactRecordingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectSuspendContactRecordingRequest`](#aws-cdk-sdk.connect.ConnectSuspendContactRecordingRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.connect.ConnectClient.tagResource"></a>

```typescript
public tagResource(input: ConnectTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectTagResourceRequest`](#aws-cdk-sdk.connect.ConnectTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.connect.ConnectClient.untagResource"></a>

```typescript
public untagResource(input: ConnectUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUntagResourceRequest`](#aws-cdk-sdk.connect.ConnectUntagResourceRequest)

---

##### `updateContactAttributes` <a name="aws-cdk-sdk.connect.ConnectClient.updateContactAttributes"></a>

```typescript
public updateContactAttributes(input: ConnectUpdateContactAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateContactAttributesRequest`](#aws-cdk-sdk.connect.ConnectUpdateContactAttributesRequest)

---

##### `updateContactFlowContent` <a name="aws-cdk-sdk.connect.ConnectClient.updateContactFlowContent"></a>

```typescript
public updateContactFlowContent(input: ConnectUpdateContactFlowContentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateContactFlowContentRequest`](#aws-cdk-sdk.connect.ConnectUpdateContactFlowContentRequest)

---

##### `updateContactFlowName` <a name="aws-cdk-sdk.connect.ConnectClient.updateContactFlowName"></a>

```typescript
public updateContactFlowName(input: ConnectUpdateContactFlowNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateContactFlowNameRequest`](#aws-cdk-sdk.connect.ConnectUpdateContactFlowNameRequest)

---

##### `updateInstanceAttribute` <a name="aws-cdk-sdk.connect.ConnectClient.updateInstanceAttribute"></a>

```typescript
public updateInstanceAttribute(input: ConnectUpdateInstanceAttributeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateInstanceAttributeRequest`](#aws-cdk-sdk.connect.ConnectUpdateInstanceAttributeRequest)

---

##### `updateInstanceStorageConfig` <a name="aws-cdk-sdk.connect.ConnectClient.updateInstanceStorageConfig"></a>

```typescript
public updateInstanceStorageConfig(input: ConnectUpdateInstanceStorageConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectUpdateInstanceStorageConfigRequest)

---

##### `updateRoutingProfileConcurrency` <a name="aws-cdk-sdk.connect.ConnectClient.updateRoutingProfileConcurrency"></a>

```typescript
public updateRoutingProfileConcurrency(input: ConnectUpdateRoutingProfileConcurrencyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateRoutingProfileConcurrencyRequest`](#aws-cdk-sdk.connect.ConnectUpdateRoutingProfileConcurrencyRequest)

---

##### `updateRoutingProfileDefaultOutboundQueue` <a name="aws-cdk-sdk.connect.ConnectClient.updateRoutingProfileDefaultOutboundQueue"></a>

```typescript
public updateRoutingProfileDefaultOutboundQueue(input: ConnectUpdateRoutingProfileDefaultOutboundQueueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateRoutingProfileDefaultOutboundQueueRequest`](#aws-cdk-sdk.connect.ConnectUpdateRoutingProfileDefaultOutboundQueueRequest)

---

##### `updateRoutingProfileName` <a name="aws-cdk-sdk.connect.ConnectClient.updateRoutingProfileName"></a>

```typescript
public updateRoutingProfileName(input: ConnectUpdateRoutingProfileNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateRoutingProfileNameRequest`](#aws-cdk-sdk.connect.ConnectUpdateRoutingProfileNameRequest)

---

##### `updateRoutingProfileQueues` <a name="aws-cdk-sdk.connect.ConnectClient.updateRoutingProfileQueues"></a>

```typescript
public updateRoutingProfileQueues(input: ConnectUpdateRoutingProfileQueuesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateRoutingProfileQueuesRequest`](#aws-cdk-sdk.connect.ConnectUpdateRoutingProfileQueuesRequest)

---

##### `updateUserHierarchy` <a name="aws-cdk-sdk.connect.ConnectClient.updateUserHierarchy"></a>

```typescript
public updateUserHierarchy(input: ConnectUpdateUserHierarchyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateUserHierarchyRequest`](#aws-cdk-sdk.connect.ConnectUpdateUserHierarchyRequest)

---

##### `updateUserHierarchyGroupName` <a name="aws-cdk-sdk.connect.ConnectClient.updateUserHierarchyGroupName"></a>

```typescript
public updateUserHierarchyGroupName(input: ConnectUpdateUserHierarchyGroupNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateUserHierarchyGroupNameRequest`](#aws-cdk-sdk.connect.ConnectUpdateUserHierarchyGroupNameRequest)

---

##### `updateUserHierarchyStructure` <a name="aws-cdk-sdk.connect.ConnectClient.updateUserHierarchyStructure"></a>

```typescript
public updateUserHierarchyStructure(input: ConnectUpdateUserHierarchyStructureRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateUserHierarchyStructureRequest`](#aws-cdk-sdk.connect.ConnectUpdateUserHierarchyStructureRequest)

---

##### `updateUserIdentityInfo` <a name="aws-cdk-sdk.connect.ConnectClient.updateUserIdentityInfo"></a>

```typescript
public updateUserIdentityInfo(input: ConnectUpdateUserIdentityInfoRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateUserIdentityInfoRequest`](#aws-cdk-sdk.connect.ConnectUpdateUserIdentityInfoRequest)

---

##### `updateUserPhoneConfig` <a name="aws-cdk-sdk.connect.ConnectClient.updateUserPhoneConfig"></a>

```typescript
public updateUserPhoneConfig(input: ConnectUpdateUserPhoneConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateUserPhoneConfigRequest`](#aws-cdk-sdk.connect.ConnectUpdateUserPhoneConfigRequest)

---

##### `updateUserRoutingProfile` <a name="aws-cdk-sdk.connect.ConnectClient.updateUserRoutingProfile"></a>

```typescript
public updateUserRoutingProfile(input: ConnectUpdateUserRoutingProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateUserRoutingProfileRequest`](#aws-cdk-sdk.connect.ConnectUpdateUserRoutingProfileRequest)

---

##### `updateUserSecurityProfiles` <a name="aws-cdk-sdk.connect.ConnectClient.updateUserSecurityProfiles"></a>

```typescript
public updateUserSecurityProfiles(input: ConnectUpdateUserSecurityProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUpdateUserSecurityProfilesRequest`](#aws-cdk-sdk.connect.ConnectUpdateUserSecurityProfilesRequest)

---




## Structs <a name="Structs"></a>

### ConnectAssociateApprovedOriginRequest <a name="aws-cdk-sdk.connect.ConnectAssociateApprovedOriginRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectAssociateApprovedOriginRequest: connect.ConnectAssociateApprovedOriginRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateApprovedOriginRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `origin`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateApprovedOriginRequest.property.origin"></a>

- *Type:* `string`

---

### ConnectAssociateInstanceStorageConfigRequest <a name="aws-cdk-sdk.connect.ConnectAssociateInstanceStorageConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectAssociateInstanceStorageConfigRequest: connect.ConnectAssociateInstanceStorageConfigRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateInstanceStorageConfigRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateInstanceStorageConfigRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `storageConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateInstanceStorageConfigRequest.property.storageConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectInstanceStorageConfig`](#aws-cdk-sdk.connect.ConnectInstanceStorageConfig)

---

### ConnectAssociateInstanceStorageConfigResponse <a name="aws-cdk-sdk.connect.ConnectAssociateInstanceStorageConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectAssociateInstanceStorageConfigResponse: connect.ConnectAssociateInstanceStorageConfigResponse = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateInstanceStorageConfigResponse.property.associationId"></a>

- *Type:* `string`

---

### ConnectAssociateLambdaFunctionRequest <a name="aws-cdk-sdk.connect.ConnectAssociateLambdaFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectAssociateLambdaFunctionRequest: connect.ConnectAssociateLambdaFunctionRequest = { ... }
```

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateLambdaFunctionRequest.property.functionArn"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateLambdaFunctionRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectAssociateLexBotRequest <a name="aws-cdk-sdk.connect.ConnectAssociateLexBotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectAssociateLexBotRequest: connect.ConnectAssociateLexBotRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateLexBotRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `lexBot`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateLexBotRequest.property.lexBot"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectLexBot`](#aws-cdk-sdk.connect.ConnectLexBot)

---

### ConnectAssociateRoutingProfileQueuesRequest <a name="aws-cdk-sdk.connect.ConnectAssociateRoutingProfileQueuesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectAssociateRoutingProfileQueuesRequest: connect.ConnectAssociateRoutingProfileQueuesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateRoutingProfileQueuesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `queueConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateRoutingProfileQueuesRequest.property.queueConfigs"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfig`](#aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfig)[]

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateRoutingProfileQueuesRequest.property.routingProfileId"></a>

- *Type:* `string`

---

### ConnectAssociateSecurityKeyRequest <a name="aws-cdk-sdk.connect.ConnectAssociateSecurityKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectAssociateSecurityKeyRequest: connect.ConnectAssociateSecurityKeyRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateSecurityKeyRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateSecurityKeyRequest.property.key"></a>

- *Type:* `string`

---

### ConnectAssociateSecurityKeyResponse <a name="aws-cdk-sdk.connect.ConnectAssociateSecurityKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectAssociateSecurityKeyResponse: connect.ConnectAssociateSecurityKeyResponse = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectAssociateSecurityKeyResponse.property.associationId"></a>

- *Type:* `string`

---

### ConnectAttribute <a name="aws-cdk-sdk.connect.ConnectAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectAttribute: connect.ConnectAttribute = { ... }
```

##### `attributeType`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectAttribute.property.attributeType"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectAttribute.property.value"></a>

- *Type:* `string`

---

### ConnectChatMessage <a name="aws-cdk-sdk.connect.ConnectChatMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectChatMessage: connect.ConnectChatMessage = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectChatMessage.property.content"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectChatMessage.property.contentType"></a>

- *Type:* `string`

---

### ConnectContactFlow <a name="aws-cdk-sdk.connect.ConnectContactFlow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectContactFlow: connect.ConnectContactFlow = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlow.property.arn"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlow.property.content"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlow.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlow.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlow.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlow.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlow.property.type"></a>

- *Type:* `string`

---

### ConnectContactFlowSummary <a name="aws-cdk-sdk.connect.ConnectContactFlowSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectContactFlowSummary: connect.ConnectContactFlowSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlowSummary.property.arn"></a>

- *Type:* `string`

---

##### `contactFlowType`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlowSummary.property.contactFlowType"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlowSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectContactFlowSummary.property.name"></a>

- *Type:* `string`

---

### ConnectCreateContactFlowRequest <a name="aws-cdk-sdk.connect.ConnectCreateContactFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCreateContactFlowRequest: connect.ConnectCreateContactFlowRequest = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateContactFlowRequest.property.content"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateContactFlowRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateContactFlowRequest.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateContactFlowRequest.property.type"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateContactFlowRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateContactFlowRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ConnectCreateContactFlowResponse <a name="aws-cdk-sdk.connect.ConnectCreateContactFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCreateContactFlowResponse: connect.ConnectCreateContactFlowResponse = { ... }
```

##### `contactFlowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateContactFlowResponse.property.contactFlowArn"></a>

- *Type:* `string`

---

##### `contactFlowId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateContactFlowResponse.property.contactFlowId"></a>

- *Type:* `string`

---

### ConnectCreateInstanceRequest <a name="aws-cdk-sdk.connect.ConnectCreateInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCreateInstanceRequest: connect.ConnectCreateInstanceRequest = { ... }
```

##### `identityManagementType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateInstanceRequest.property.identityManagementType"></a>

- *Type:* `string`

---

##### `inboundCallsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateInstanceRequest.property.inboundCallsEnabled"></a>

- *Type:* `boolean`

---

##### `outboundCallsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateInstanceRequest.property.outboundCallsEnabled"></a>

- *Type:* `boolean`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateInstanceRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `directoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateInstanceRequest.property.directoryId"></a>

- *Type:* `string`

---

##### `instanceAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateInstanceRequest.property.instanceAlias"></a>

- *Type:* `string`

---

### ConnectCreateInstanceResponse <a name="aws-cdk-sdk.connect.ConnectCreateInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCreateInstanceResponse: connect.ConnectCreateInstanceResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateInstanceResponse.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateInstanceResponse.property.id"></a>

- *Type:* `string`

---

### ConnectCreateRoutingProfileRequest <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCreateRoutingProfileRequest: connect.ConnectCreateRoutingProfileRequest = { ... }
```

##### `defaultOutboundQueueId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest.property.defaultOutboundQueueId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest.property.description"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest.property.mediaConcurrencies"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectMediaConcurrency`](#aws-cdk-sdk.connect.ConnectMediaConcurrency)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest.property.name"></a>

- *Type:* `string`

---

##### `queueConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest.property.queueConfigs"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfig`](#aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfig)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ConnectCreateRoutingProfileResponse <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCreateRoutingProfileResponse: connect.ConnectCreateRoutingProfileResponse = { ... }
```

##### `routingProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileResponse.property.routingProfileArn"></a>

- *Type:* `string`

---

##### `routingProfileId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateRoutingProfileResponse.property.routingProfileId"></a>

- *Type:* `string`

---

### ConnectCreateUserHierarchyGroupRequest <a name="aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCreateUserHierarchyGroupRequest: connect.ConnectCreateUserHierarchyGroupRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `parentGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupRequest.property.parentGroupId"></a>

- *Type:* `string`

---

### ConnectCreateUserHierarchyGroupResponse <a name="aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCreateUserHierarchyGroupResponse: connect.ConnectCreateUserHierarchyGroupResponse = { ... }
```

##### `hierarchyGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupResponse.property.hierarchyGroupArn"></a>

- *Type:* `string`

---

##### `hierarchyGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupResponse.property.hierarchyGroupId"></a>

- *Type:* `string`

---

### ConnectCreateUserRequest <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCreateUserRequest: connect.ConnectCreateUserRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `phoneConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest.property.phoneConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUserPhoneConfig`](#aws-cdk-sdk.connect.ConnectUserPhoneConfig)

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest.property.routingProfileId"></a>

- *Type:* `string`

---

##### `securityProfileIds`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest.property.securityProfileIds"></a>

- *Type:* `string`[]

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest.property.username"></a>

- *Type:* `string`

---

##### `directoryUserId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest.property.directoryUserId"></a>

- *Type:* `string`

---

##### `hierarchyGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest.property.hierarchyGroupId"></a>

- *Type:* `string`

---

##### `identityInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest.property.identityInfo"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUserIdentityInfo`](#aws-cdk-sdk.connect.ConnectUserIdentityInfo)

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest.property.password"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ConnectCreateUserResponse <a name="aws-cdk-sdk.connect.ConnectCreateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCreateUserResponse: connect.ConnectCreateUserResponse = { ... }
```

##### `userArn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserResponse.property.userArn"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCreateUserResponse.property.userId"></a>

- *Type:* `string`

---

### ConnectCredentials <a name="aws-cdk-sdk.connect.ConnectCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCredentials: connect.ConnectCredentials = { ... }
```

##### `accessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCredentials.property.accessToken"></a>

- *Type:* `string`

---

##### `accessTokenExpiration`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCredentials.property.accessTokenExpiration"></a>

- *Type:* `string`

---

##### `refreshToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCredentials.property.refreshToken"></a>

- *Type:* `string`

---

##### `refreshTokenExpiration`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCredentials.property.refreshTokenExpiration"></a>

- *Type:* `string`

---

### ConnectCurrentMetric <a name="aws-cdk-sdk.connect.ConnectCurrentMetric"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCurrentMetric: connect.ConnectCurrentMetric = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCurrentMetric.property.name"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCurrentMetric.property.unit"></a>

- *Type:* `string`

---

### ConnectCurrentMetricData <a name="aws-cdk-sdk.connect.ConnectCurrentMetricData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCurrentMetricData: connect.ConnectCurrentMetricData = { ... }
```

##### `metric`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCurrentMetricData.property.metric"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCurrentMetric`](#aws-cdk-sdk.connect.ConnectCurrentMetric)

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCurrentMetricData.property.value"></a>

- *Type:* `number`

---

### ConnectCurrentMetricResult <a name="aws-cdk-sdk.connect.ConnectCurrentMetricResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectCurrentMetricResult: connect.ConnectCurrentMetricResult = { ... }
```

##### `collections`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCurrentMetricResult.property.collections"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCurrentMetricData`](#aws-cdk-sdk.connect.ConnectCurrentMetricData)[]

---

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectCurrentMetricResult.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDimensions`](#aws-cdk-sdk.connect.ConnectDimensions)

---

### ConnectDeleteInstanceRequest <a name="aws-cdk-sdk.connect.ConnectDeleteInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDeleteInstanceRequest: connect.ConnectDeleteInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDeleteInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectDeleteUserHierarchyGroupRequest <a name="aws-cdk-sdk.connect.ConnectDeleteUserHierarchyGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDeleteUserHierarchyGroupRequest: connect.ConnectDeleteUserHierarchyGroupRequest = { ... }
```

##### `hierarchyGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDeleteUserHierarchyGroupRequest.property.hierarchyGroupId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDeleteUserHierarchyGroupRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectDeleteUserRequest <a name="aws-cdk-sdk.connect.ConnectDeleteUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDeleteUserRequest: connect.ConnectDeleteUserRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDeleteUserRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDeleteUserRequest.property.userId"></a>

- *Type:* `string`

---

### ConnectDescribeContactFlowRequest <a name="aws-cdk-sdk.connect.ConnectDescribeContactFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeContactFlowRequest: connect.ConnectDescribeContactFlowRequest = { ... }
```

##### `contactFlowId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeContactFlowRequest.property.contactFlowId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeContactFlowRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectDescribeContactFlowResponse <a name="aws-cdk-sdk.connect.ConnectDescribeContactFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeContactFlowResponse: connect.ConnectDescribeContactFlowResponse = { ... }
```

##### `contactFlow`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeContactFlowResponse.property.contactFlow"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectContactFlow`](#aws-cdk-sdk.connect.ConnectContactFlow)

---

### ConnectDescribeInstanceAttributeRequest <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeInstanceAttributeRequest: connect.ConnectDescribeInstanceAttributeRequest = { ... }
```

##### `attributeType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeRequest.property.attributeType"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectDescribeInstanceAttributeResponse <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeInstanceAttributeResponse: connect.ConnectDescribeInstanceAttributeResponse = { ... }
```

##### `attribute`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeResponse.property.attribute"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAttribute`](#aws-cdk-sdk.connect.ConnectAttribute)

---

### ConnectDescribeInstanceRequest <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeInstanceRequest: connect.ConnectDescribeInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectDescribeInstanceResponse <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeInstanceResponse: connect.ConnectDescribeInstanceResponse = { ... }
```

##### `instance`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceResponse.property.instance"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectInstance`](#aws-cdk-sdk.connect.ConnectInstance)

---

### ConnectDescribeInstanceStorageConfigRequest <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeInstanceStorageConfigRequest: connect.ConnectDescribeInstanceStorageConfigRequest = { ... }
```

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest.property.associationId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest.property.resourceType"></a>

- *Type:* `string`

---

### ConnectDescribeInstanceStorageConfigResponse <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeInstanceStorageConfigResponse: connect.ConnectDescribeInstanceStorageConfigResponse = { ... }
```

##### `storageConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigResponse.property.storageConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectInstanceStorageConfig`](#aws-cdk-sdk.connect.ConnectInstanceStorageConfig)

---

### ConnectDescribeRoutingProfileRequest <a name="aws-cdk-sdk.connect.ConnectDescribeRoutingProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeRoutingProfileRequest: connect.ConnectDescribeRoutingProfileRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeRoutingProfileRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeRoutingProfileRequest.property.routingProfileId"></a>

- *Type:* `string`

---

### ConnectDescribeRoutingProfileResponse <a name="aws-cdk-sdk.connect.ConnectDescribeRoutingProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeRoutingProfileResponse: connect.ConnectDescribeRoutingProfileResponse = { ... }
```

##### `routingProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeRoutingProfileResponse.property.routingProfile"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectRoutingProfile`](#aws-cdk-sdk.connect.ConnectRoutingProfile)

---

### ConnectDescribeUserHierarchyGroupRequest <a name="aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeUserHierarchyGroupRequest: connect.ConnectDescribeUserHierarchyGroupRequest = { ... }
```

##### `hierarchyGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest.property.hierarchyGroupId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectDescribeUserHierarchyGroupResponse <a name="aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeUserHierarchyGroupResponse: connect.ConnectDescribeUserHierarchyGroupResponse = { ... }
```

##### `hierarchyGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupResponse.property.hierarchyGroup"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyGroup`](#aws-cdk-sdk.connect.ConnectHierarchyGroup)

---

### ConnectDescribeUserHierarchyStructureRequest <a name="aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeUserHierarchyStructureRequest: connect.ConnectDescribeUserHierarchyStructureRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectDescribeUserHierarchyStructureResponse <a name="aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeUserHierarchyStructureResponse: connect.ConnectDescribeUserHierarchyStructureResponse = { ... }
```

##### `hierarchyStructure`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureResponse.property.hierarchyStructure"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyStructure`](#aws-cdk-sdk.connect.ConnectHierarchyStructure)

---

### ConnectDescribeUserRequest <a name="aws-cdk-sdk.connect.ConnectDescribeUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeUserRequest: connect.ConnectDescribeUserRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeUserRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeUserRequest.property.userId"></a>

- *Type:* `string`

---

### ConnectDescribeUserResponse <a name="aws-cdk-sdk.connect.ConnectDescribeUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDescribeUserResponse: connect.ConnectDescribeUserResponse = { ... }
```

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectDescribeUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUser`](#aws-cdk-sdk.connect.ConnectUser)

---

### ConnectDimensions <a name="aws-cdk-sdk.connect.ConnectDimensions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDimensions: connect.ConnectDimensions = { ... }
```

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectDimensions.property.channel"></a>

- *Type:* `string`

---

##### `queue`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectDimensions.property.queue"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectQueueReference`](#aws-cdk-sdk.connect.ConnectQueueReference)

---

### ConnectDisassociateApprovedOriginRequest <a name="aws-cdk-sdk.connect.ConnectDisassociateApprovedOriginRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDisassociateApprovedOriginRequest: connect.ConnectDisassociateApprovedOriginRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateApprovedOriginRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `origin`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateApprovedOriginRequest.property.origin"></a>

- *Type:* `string`

---

### ConnectDisassociateInstanceStorageConfigRequest <a name="aws-cdk-sdk.connect.ConnectDisassociateInstanceStorageConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDisassociateInstanceStorageConfigRequest: connect.ConnectDisassociateInstanceStorageConfigRequest = { ... }
```

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateInstanceStorageConfigRequest.property.associationId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateInstanceStorageConfigRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateInstanceStorageConfigRequest.property.resourceType"></a>

- *Type:* `string`

---

### ConnectDisassociateLambdaFunctionRequest <a name="aws-cdk-sdk.connect.ConnectDisassociateLambdaFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDisassociateLambdaFunctionRequest: connect.ConnectDisassociateLambdaFunctionRequest = { ... }
```

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateLambdaFunctionRequest.property.functionArn"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateLambdaFunctionRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectDisassociateLexBotRequest <a name="aws-cdk-sdk.connect.ConnectDisassociateLexBotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDisassociateLexBotRequest: connect.ConnectDisassociateLexBotRequest = { ... }
```

##### `botName`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateLexBotRequest.property.botName"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateLexBotRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `lexRegion`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateLexBotRequest.property.lexRegion"></a>

- *Type:* `string`

---

### ConnectDisassociateRoutingProfileQueuesRequest <a name="aws-cdk-sdk.connect.ConnectDisassociateRoutingProfileQueuesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDisassociateRoutingProfileQueuesRequest: connect.ConnectDisassociateRoutingProfileQueuesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateRoutingProfileQueuesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `queueReferences`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateRoutingProfileQueuesRequest.property.queueReferences"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectRoutingProfileQueueReference`](#aws-cdk-sdk.connect.ConnectRoutingProfileQueueReference)[]

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateRoutingProfileQueuesRequest.property.routingProfileId"></a>

- *Type:* `string`

---

### ConnectDisassociateSecurityKeyRequest <a name="aws-cdk-sdk.connect.ConnectDisassociateSecurityKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectDisassociateSecurityKeyRequest: connect.ConnectDisassociateSecurityKeyRequest = { ... }
```

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateSecurityKeyRequest.property.associationId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectDisassociateSecurityKeyRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectEncryptionConfig <a name="aws-cdk-sdk.connect.ConnectEncryptionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectEncryptionConfig: connect.ConnectEncryptionConfig = { ... }
```

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectEncryptionConfig.property.encryptionType"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectEncryptionConfig.property.keyId"></a>

- *Type:* `string`

---

### ConnectFilters <a name="aws-cdk-sdk.connect.ConnectFilters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectFilters: connect.ConnectFilters = { ... }
```

##### `channels`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectFilters.property.channels"></a>

- *Type:* `string`[]

---

##### `queues`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectFilters.property.queues"></a>

- *Type:* `string`[]

---

### ConnectGetContactAttributesRequest <a name="aws-cdk-sdk.connect.ConnectGetContactAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectGetContactAttributesRequest: connect.ConnectGetContactAttributesRequest = { ... }
```

##### `initialContactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetContactAttributesRequest.property.initialContactId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetContactAttributesRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectGetContactAttributesResponse <a name="aws-cdk-sdk.connect.ConnectGetContactAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectGetContactAttributesResponse: connect.ConnectGetContactAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetContactAttributesResponse.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

### ConnectGetCurrentMetricDataRequest <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectGetCurrentMetricDataRequest: connect.ConnectGetCurrentMetricDataRequest = { ... }
```

##### `currentMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest.property.currentMetrics"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCurrentMetric`](#aws-cdk-sdk.connect.ConnectCurrentMetric)[]

---

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectFilters`](#aws-cdk-sdk.connect.ConnectFilters)

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `groupings`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest.property.groupings"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectGetCurrentMetricDataResponse <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectGetCurrentMetricDataResponse: connect.ConnectGetCurrentMetricDataResponse = { ... }
```

##### `dataSnapshotTime`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataResponse.property.dataSnapshotTime"></a>

- *Type:* `string`

---

##### `metricResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataResponse.property.metricResults"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCurrentMetricResult`](#aws-cdk-sdk.connect.ConnectCurrentMetricResult)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetCurrentMetricDataResponse.property.nextToken"></a>

- *Type:* `string`

---

### ConnectGetFederationTokenRequest <a name="aws-cdk-sdk.connect.ConnectGetFederationTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectGetFederationTokenRequest: connect.ConnectGetFederationTokenRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetFederationTokenRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectGetFederationTokenResponse <a name="aws-cdk-sdk.connect.ConnectGetFederationTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectGetFederationTokenResponse: connect.ConnectGetFederationTokenResponse = { ... }
```

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetFederationTokenResponse.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCredentials`](#aws-cdk-sdk.connect.ConnectCredentials)

---

### ConnectGetMetricDataRequest <a name="aws-cdk-sdk.connect.ConnectGetMetricDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectGetMetricDataRequest: connect.ConnectGetMetricDataRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetMetricDataRequest.property.endTime"></a>

- *Type:* `string`

---

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetMetricDataRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectFilters`](#aws-cdk-sdk.connect.ConnectFilters)

---

##### `historicalMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetMetricDataRequest.property.historicalMetrics"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHistoricalMetric`](#aws-cdk-sdk.connect.ConnectHistoricalMetric)[]

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetMetricDataRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectGetMetricDataRequest.property.startTime"></a>

- *Type:* `string`

---

##### `groupings`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetMetricDataRequest.property.groupings"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetMetricDataRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetMetricDataRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectGetMetricDataResponse <a name="aws-cdk-sdk.connect.ConnectGetMetricDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectGetMetricDataResponse: connect.ConnectGetMetricDataResponse = { ... }
```

##### `metricResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetMetricDataResponse.property.metricResults"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHistoricalMetricResult`](#aws-cdk-sdk.connect.ConnectHistoricalMetricResult)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectGetMetricDataResponse.property.nextToken"></a>

- *Type:* `string`

---

### ConnectHierarchyGroup <a name="aws-cdk-sdk.connect.ConnectHierarchyGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHierarchyGroup: connect.ConnectHierarchyGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyGroup.property.arn"></a>

- *Type:* `string`

---

##### `hierarchyPath`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyGroup.property.hierarchyPath"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyPath`](#aws-cdk-sdk.connect.ConnectHierarchyPath)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyGroup.property.id"></a>

- *Type:* `string`

---

##### `levelId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyGroup.property.levelId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyGroup.property.name"></a>

- *Type:* `string`

---

### ConnectHierarchyGroupSummary <a name="aws-cdk-sdk.connect.ConnectHierarchyGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHierarchyGroupSummary: connect.ConnectHierarchyGroupSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyGroupSummary.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyGroupSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyGroupSummary.property.name"></a>

- *Type:* `string`

---

### ConnectHierarchyLevel <a name="aws-cdk-sdk.connect.ConnectHierarchyLevel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHierarchyLevel: connect.ConnectHierarchyLevel = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyLevel.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyLevel.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyLevel.property.name"></a>

- *Type:* `string`

---

### ConnectHierarchyLevelUpdate <a name="aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHierarchyLevelUpdate: connect.ConnectHierarchyLevelUpdate = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate.property.name"></a>

- *Type:* `string`

---

### ConnectHierarchyPath <a name="aws-cdk-sdk.connect.ConnectHierarchyPath"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHierarchyPath: connect.ConnectHierarchyPath = { ... }
```

##### `levelFive`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyPath.property.levelFive"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyGroupSummary`](#aws-cdk-sdk.connect.ConnectHierarchyGroupSummary)

---

##### `levelFour`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyPath.property.levelFour"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyGroupSummary`](#aws-cdk-sdk.connect.ConnectHierarchyGroupSummary)

---

##### `levelOne`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyPath.property.levelOne"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyGroupSummary`](#aws-cdk-sdk.connect.ConnectHierarchyGroupSummary)

---

##### `levelThree`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyPath.property.levelThree"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyGroupSummary`](#aws-cdk-sdk.connect.ConnectHierarchyGroupSummary)

---

##### `levelTwo`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyPath.property.levelTwo"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyGroupSummary`](#aws-cdk-sdk.connect.ConnectHierarchyGroupSummary)

---

### ConnectHierarchyStructure <a name="aws-cdk-sdk.connect.ConnectHierarchyStructure"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHierarchyStructure: connect.ConnectHierarchyStructure = { ... }
```

##### `levelFive`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyStructure.property.levelFive"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyLevel`](#aws-cdk-sdk.connect.ConnectHierarchyLevel)

---

##### `levelFour`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyStructure.property.levelFour"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyLevel`](#aws-cdk-sdk.connect.ConnectHierarchyLevel)

---

##### `levelOne`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyStructure.property.levelOne"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyLevel`](#aws-cdk-sdk.connect.ConnectHierarchyLevel)

---

##### `levelThree`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyStructure.property.levelThree"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyLevel`](#aws-cdk-sdk.connect.ConnectHierarchyLevel)

---

##### `levelTwo`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyStructure.property.levelTwo"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyLevel`](#aws-cdk-sdk.connect.ConnectHierarchyLevel)

---

### ConnectHierarchyStructureUpdate <a name="aws-cdk-sdk.connect.ConnectHierarchyStructureUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHierarchyStructureUpdate: connect.ConnectHierarchyStructureUpdate = { ... }
```

##### `levelFive`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyStructureUpdate.property.levelFive"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate`](#aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate)

---

##### `levelFour`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyStructureUpdate.property.levelFour"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate`](#aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate)

---

##### `levelOne`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyStructureUpdate.property.levelOne"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate`](#aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate)

---

##### `levelThree`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyStructureUpdate.property.levelThree"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate`](#aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate)

---

##### `levelTwo`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHierarchyStructureUpdate.property.levelTwo"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate`](#aws-cdk-sdk.connect.ConnectHierarchyLevelUpdate)

---

### ConnectHistoricalMetric <a name="aws-cdk-sdk.connect.ConnectHistoricalMetric"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHistoricalMetric: connect.ConnectHistoricalMetric = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHistoricalMetric.property.name"></a>

- *Type:* `string`

---

##### `statistic`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHistoricalMetric.property.statistic"></a>

- *Type:* `string`

---

##### `threshold`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHistoricalMetric.property.threshold"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectThreshold`](#aws-cdk-sdk.connect.ConnectThreshold)

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHistoricalMetric.property.unit"></a>

- *Type:* `string`

---

### ConnectHistoricalMetricData <a name="aws-cdk-sdk.connect.ConnectHistoricalMetricData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHistoricalMetricData: connect.ConnectHistoricalMetricData = { ... }
```

##### `metric`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHistoricalMetricData.property.metric"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHistoricalMetric`](#aws-cdk-sdk.connect.ConnectHistoricalMetric)

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHistoricalMetricData.property.value"></a>

- *Type:* `number`

---

### ConnectHistoricalMetricResult <a name="aws-cdk-sdk.connect.ConnectHistoricalMetricResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHistoricalMetricResult: connect.ConnectHistoricalMetricResult = { ... }
```

##### `collections`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHistoricalMetricResult.property.collections"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHistoricalMetricData`](#aws-cdk-sdk.connect.ConnectHistoricalMetricData)[]

---

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHistoricalMetricResult.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDimensions`](#aws-cdk-sdk.connect.ConnectDimensions)

---

### ConnectHoursOfOperationSummary <a name="aws-cdk-sdk.connect.ConnectHoursOfOperationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectHoursOfOperationSummary: connect.ConnectHoursOfOperationSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHoursOfOperationSummary.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHoursOfOperationSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectHoursOfOperationSummary.property.name"></a>

- *Type:* `string`

---

### ConnectInstance <a name="aws-cdk-sdk.connect.ConnectInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectInstance: connect.ConnectInstance = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstance.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstance.property.createdTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstance.property.id"></a>

- *Type:* `string`

---

##### `identityManagementType`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstance.property.identityManagementType"></a>

- *Type:* `string`

---

##### `inboundCallsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstance.property.inboundCallsEnabled"></a>

- *Type:* `boolean`

---

##### `instanceAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstance.property.instanceAlias"></a>

- *Type:* `string`

---

##### `instanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstance.property.instanceStatus"></a>

- *Type:* `string`

---

##### `outboundCallsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstance.property.outboundCallsEnabled"></a>

- *Type:* `boolean`

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstance.property.serviceRole"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstance.property.statusReason"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectInstanceStatusReason`](#aws-cdk-sdk.connect.ConnectInstanceStatusReason)

---

### ConnectInstanceStatusReason <a name="aws-cdk-sdk.connect.ConnectInstanceStatusReason"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectInstanceStatusReason: connect.ConnectInstanceStatusReason = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceStatusReason.property.message"></a>

- *Type:* `string`

---

### ConnectInstanceStorageConfig <a name="aws-cdk-sdk.connect.ConnectInstanceStorageConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectInstanceStorageConfig: connect.ConnectInstanceStorageConfig = { ... }
```

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceStorageConfig.property.storageType"></a>

- *Type:* `string`

---

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceStorageConfig.property.associationId"></a>

- *Type:* `string`

---

##### `kinesisFirehoseConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceStorageConfig.property.kinesisFirehoseConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectKinesisFirehoseConfig`](#aws-cdk-sdk.connect.ConnectKinesisFirehoseConfig)

---

##### `kinesisStreamConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceStorageConfig.property.kinesisStreamConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectKinesisStreamConfig`](#aws-cdk-sdk.connect.ConnectKinesisStreamConfig)

---

##### `kinesisVideoStreamConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectKinesisVideoStreamConfig`](#aws-cdk-sdk.connect.ConnectKinesisVideoStreamConfig)

---

##### `s3Config`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceStorageConfig.property.s3Config"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectS3Config`](#aws-cdk-sdk.connect.ConnectS3Config)

---

### ConnectInstanceSummary <a name="aws-cdk-sdk.connect.ConnectInstanceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectInstanceSummary: connect.ConnectInstanceSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceSummary.property.id"></a>

- *Type:* `string`

---

##### `identityManagementType`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceSummary.property.identityManagementType"></a>

- *Type:* `string`

---

##### `inboundCallsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceSummary.property.inboundCallsEnabled"></a>

- *Type:* `boolean`

---

##### `instanceAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceSummary.property.instanceAlias"></a>

- *Type:* `string`

---

##### `instanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceSummary.property.instanceStatus"></a>

- *Type:* `string`

---

##### `outboundCallsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceSummary.property.outboundCallsEnabled"></a>

- *Type:* `boolean`

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectInstanceSummary.property.serviceRole"></a>

- *Type:* `string`

---

### ConnectKinesisFirehoseConfig <a name="aws-cdk-sdk.connect.ConnectKinesisFirehoseConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectKinesisFirehoseConfig: connect.ConnectKinesisFirehoseConfig = { ... }
```

##### `firehoseArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectKinesisFirehoseConfig.property.firehoseArn"></a>

- *Type:* `string`

---

### ConnectKinesisStreamConfig <a name="aws-cdk-sdk.connect.ConnectKinesisStreamConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectKinesisStreamConfig: connect.ConnectKinesisStreamConfig = { ... }
```

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectKinesisStreamConfig.property.streamArn"></a>

- *Type:* `string`

---

### ConnectKinesisVideoStreamConfig <a name="aws-cdk-sdk.connect.ConnectKinesisVideoStreamConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectKinesisVideoStreamConfig: connect.ConnectKinesisVideoStreamConfig = { ... }
```

##### `encryptionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectKinesisVideoStreamConfig.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectEncryptionConfig`](#aws-cdk-sdk.connect.ConnectEncryptionConfig)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectKinesisVideoStreamConfig.property.prefix"></a>

- *Type:* `string`

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectKinesisVideoStreamConfig.property.retentionPeriodHours"></a>

- *Type:* `number`

---

### ConnectLexBot <a name="aws-cdk-sdk.connect.ConnectLexBot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectLexBot: connect.ConnectLexBot = { ... }
```

##### `lexRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectLexBot.property.lexRegion"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectLexBot.property.name"></a>

- *Type:* `string`

---

### ConnectListApprovedOriginsRequest <a name="aws-cdk-sdk.connect.ConnectListApprovedOriginsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListApprovedOriginsRequest: connect.ConnectListApprovedOriginsRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListApprovedOriginsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListApprovedOriginsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListApprovedOriginsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListApprovedOriginsResponse <a name="aws-cdk-sdk.connect.ConnectListApprovedOriginsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListApprovedOriginsResponse: connect.ConnectListApprovedOriginsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListApprovedOriginsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `origins`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListApprovedOriginsResponse.property.origins"></a>

- *Type:* `string`[]

---

### ConnectListContactFlowsRequest <a name="aws-cdk-sdk.connect.ConnectListContactFlowsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListContactFlowsRequest: connect.ConnectListContactFlowsRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListContactFlowsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `contactFlowTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListContactFlowsRequest.property.contactFlowTypes"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListContactFlowsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListContactFlowsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListContactFlowsResponse <a name="aws-cdk-sdk.connect.ConnectListContactFlowsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListContactFlowsResponse: connect.ConnectListContactFlowsResponse = { ... }
```

##### `contactFlowSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListContactFlowsResponse.property.contactFlowSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectContactFlowSummary`](#aws-cdk-sdk.connect.ConnectContactFlowSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListContactFlowsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListHoursOfOperationsRequest <a name="aws-cdk-sdk.connect.ConnectListHoursOfOperationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListHoursOfOperationsRequest: connect.ConnectListHoursOfOperationsRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListHoursOfOperationsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListHoursOfOperationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListHoursOfOperationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListHoursOfOperationsResponse <a name="aws-cdk-sdk.connect.ConnectListHoursOfOperationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListHoursOfOperationsResponse: connect.ConnectListHoursOfOperationsResponse = { ... }
```

##### `hoursOfOperationSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListHoursOfOperationsResponse.property.hoursOfOperationSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHoursOfOperationSummary`](#aws-cdk-sdk.connect.ConnectHoursOfOperationSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListHoursOfOperationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListInstanceAttributesRequest <a name="aws-cdk-sdk.connect.ConnectListInstanceAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListInstanceAttributesRequest: connect.ConnectListInstanceAttributesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceAttributesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceAttributesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceAttributesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListInstanceAttributesResponse <a name="aws-cdk-sdk.connect.ConnectListInstanceAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListInstanceAttributesResponse: connect.ConnectListInstanceAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAttribute`](#aws-cdk-sdk.connect.ConnectAttribute)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceAttributesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListInstancesRequest <a name="aws-cdk-sdk.connect.ConnectListInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListInstancesRequest: connect.ConnectListInstancesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstancesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstancesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListInstancesResponse <a name="aws-cdk-sdk.connect.ConnectListInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListInstancesResponse: connect.ConnectListInstancesResponse = { ... }
```

##### `instanceSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstancesResponse.property.instanceSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectInstanceSummary`](#aws-cdk-sdk.connect.ConnectInstanceSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstancesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListInstanceStorageConfigsRequest <a name="aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListInstanceStorageConfigsRequest: connect.ConnectListInstanceStorageConfigsRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListInstanceStorageConfigsResponse <a name="aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListInstanceStorageConfigsResponse: connect.ConnectListInstanceStorageConfigsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `storageConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsResponse.property.storageConfigs"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectInstanceStorageConfig`](#aws-cdk-sdk.connect.ConnectInstanceStorageConfig)[]

---

### ConnectListLambdaFunctionsRequest <a name="aws-cdk-sdk.connect.ConnectListLambdaFunctionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListLambdaFunctionsRequest: connect.ConnectListLambdaFunctionsRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListLambdaFunctionsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListLambdaFunctionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListLambdaFunctionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListLambdaFunctionsResponse <a name="aws-cdk-sdk.connect.ConnectListLambdaFunctionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListLambdaFunctionsResponse: connect.ConnectListLambdaFunctionsResponse = { ... }
```

##### `lambdaFunctions`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListLambdaFunctionsResponse.property.lambdaFunctions"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListLambdaFunctionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListLexBotsRequest <a name="aws-cdk-sdk.connect.ConnectListLexBotsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListLexBotsRequest: connect.ConnectListLexBotsRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListLexBotsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListLexBotsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListLexBotsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListLexBotsResponse <a name="aws-cdk-sdk.connect.ConnectListLexBotsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListLexBotsResponse: connect.ConnectListLexBotsResponse = { ... }
```

##### `lexBots`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListLexBotsResponse.property.lexBots"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectLexBot`](#aws-cdk-sdk.connect.ConnectLexBot)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListLexBotsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListPhoneNumbersRequest <a name="aws-cdk-sdk.connect.ConnectListPhoneNumbersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListPhoneNumbersRequest: connect.ConnectListPhoneNumbersRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListPhoneNumbersRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListPhoneNumbersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListPhoneNumbersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `phoneNumberCountryCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListPhoneNumbersRequest.property.phoneNumberCountryCodes"></a>

- *Type:* `string`[]

---

##### `phoneNumberTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListPhoneNumbersRequest.property.phoneNumberTypes"></a>

- *Type:* `string`[]

---

### ConnectListPhoneNumbersResponse <a name="aws-cdk-sdk.connect.ConnectListPhoneNumbersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListPhoneNumbersResponse: connect.ConnectListPhoneNumbersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListPhoneNumbersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `phoneNumberSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListPhoneNumbersResponse.property.phoneNumberSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectPhoneNumberSummary`](#aws-cdk-sdk.connect.ConnectPhoneNumberSummary)[]

---

### ConnectListPromptsRequest <a name="aws-cdk-sdk.connect.ConnectListPromptsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListPromptsRequest: connect.ConnectListPromptsRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListPromptsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListPromptsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListPromptsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListPromptsResponse <a name="aws-cdk-sdk.connect.ConnectListPromptsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListPromptsResponse: connect.ConnectListPromptsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListPromptsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `promptSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListPromptsResponse.property.promptSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectPromptSummary`](#aws-cdk-sdk.connect.ConnectPromptSummary)[]

---

### ConnectListQueuesRequest <a name="aws-cdk-sdk.connect.ConnectListQueuesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListQueuesRequest: connect.ConnectListQueuesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListQueuesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListQueuesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListQueuesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `queueTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListQueuesRequest.property.queueTypes"></a>

- *Type:* `string`[]

---

### ConnectListQueuesResponse <a name="aws-cdk-sdk.connect.ConnectListQueuesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListQueuesResponse: connect.ConnectListQueuesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListQueuesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `queueSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListQueuesResponse.property.queueSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectQueueSummary`](#aws-cdk-sdk.connect.ConnectQueueSummary)[]

---

### ConnectListRoutingProfileQueuesRequest <a name="aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListRoutingProfileQueuesRequest: connect.ConnectListRoutingProfileQueuesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesRequest.property.routingProfileId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListRoutingProfileQueuesResponse <a name="aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListRoutingProfileQueuesResponse: connect.ConnectListRoutingProfileQueuesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `routingProfileQueueConfigSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesResponse.property.routingProfileQueueConfigSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary`](#aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary)[]

---

### ConnectListRoutingProfilesRequest <a name="aws-cdk-sdk.connect.ConnectListRoutingProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListRoutingProfilesRequest: connect.ConnectListRoutingProfilesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfilesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfilesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListRoutingProfilesResponse <a name="aws-cdk-sdk.connect.ConnectListRoutingProfilesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListRoutingProfilesResponse: connect.ConnectListRoutingProfilesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfilesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `routingProfileSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListRoutingProfilesResponse.property.routingProfileSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectRoutingProfileSummary`](#aws-cdk-sdk.connect.ConnectRoutingProfileSummary)[]

---

### ConnectListSecurityKeysRequest <a name="aws-cdk-sdk.connect.ConnectListSecurityKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListSecurityKeysRequest: connect.ConnectListSecurityKeysRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListSecurityKeysRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListSecurityKeysRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListSecurityKeysRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListSecurityKeysResponse <a name="aws-cdk-sdk.connect.ConnectListSecurityKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListSecurityKeysResponse: connect.ConnectListSecurityKeysResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListSecurityKeysResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `securityKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListSecurityKeysResponse.property.securityKeys"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectSecurityKey`](#aws-cdk-sdk.connect.ConnectSecurityKey)[]

---

### ConnectListSecurityProfilesRequest <a name="aws-cdk-sdk.connect.ConnectListSecurityProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListSecurityProfilesRequest: connect.ConnectListSecurityProfilesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListSecurityProfilesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListSecurityProfilesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListSecurityProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListSecurityProfilesResponse <a name="aws-cdk-sdk.connect.ConnectListSecurityProfilesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListSecurityProfilesResponse: connect.ConnectListSecurityProfilesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListSecurityProfilesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `securityProfileSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListSecurityProfilesResponse.property.securityProfileSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectSecurityProfileSummary`](#aws-cdk-sdk.connect.ConnectSecurityProfileSummary)[]

---

### ConnectListTagsForResourceRequest <a name="aws-cdk-sdk.connect.ConnectListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListTagsForResourceRequest: connect.ConnectListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### ConnectListTagsForResourceResponse <a name="aws-cdk-sdk.connect.ConnectListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListTagsForResourceResponse: connect.ConnectListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ConnectListUserHierarchyGroupsRequest <a name="aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListUserHierarchyGroupsRequest: connect.ConnectListUserHierarchyGroupsRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListUserHierarchyGroupsResponse <a name="aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListUserHierarchyGroupsResponse: connect.ConnectListUserHierarchyGroupsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `userHierarchyGroupSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsResponse.property.userHierarchyGroupSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyGroupSummary`](#aws-cdk-sdk.connect.ConnectHierarchyGroupSummary)[]

---

### ConnectListUsersRequest <a name="aws-cdk-sdk.connect.ConnectListUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListUsersRequest: connect.ConnectListUsersRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectListUsersRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListUsersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListUsersRequest.property.nextToken"></a>

- *Type:* `string`

---

### ConnectListUsersResponse <a name="aws-cdk-sdk.connect.ConnectListUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectListUsersResponse: connect.ConnectListUsersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListUsersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `userSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectListUsersResponse.property.userSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUserSummary`](#aws-cdk-sdk.connect.ConnectUserSummary)[]

---

### ConnectMediaConcurrency <a name="aws-cdk-sdk.connect.ConnectMediaConcurrency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectMediaConcurrency: connect.ConnectMediaConcurrency = { ... }
```

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectMediaConcurrency.property.channel"></a>

- *Type:* `string`

---

##### `concurrency`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectMediaConcurrency.property.concurrency"></a>

- *Type:* `number`

---

### ConnectParticipantDetails <a name="aws-cdk-sdk.connect.ConnectParticipantDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectParticipantDetails: connect.ConnectParticipantDetails = { ... }
```

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectParticipantDetails.property.displayName"></a>

- *Type:* `string`

---

### ConnectPhoneNumberSummary <a name="aws-cdk-sdk.connect.ConnectPhoneNumberSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectPhoneNumberSummary: connect.ConnectPhoneNumberSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectPhoneNumberSummary.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectPhoneNumberSummary.property.id"></a>

- *Type:* `string`

---

##### `phoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectPhoneNumberSummary.property.phoneNumber"></a>

- *Type:* `string`

---

##### `phoneNumberCountryCode`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectPhoneNumberSummary.property.phoneNumberCountryCode"></a>

- *Type:* `string`

---

##### `phoneNumberType`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectPhoneNumberSummary.property.phoneNumberType"></a>

- *Type:* `string`

---

### ConnectPromptSummary <a name="aws-cdk-sdk.connect.ConnectPromptSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectPromptSummary: connect.ConnectPromptSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectPromptSummary.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectPromptSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectPromptSummary.property.name"></a>

- *Type:* `string`

---

### ConnectQueueReference <a name="aws-cdk-sdk.connect.ConnectQueueReference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectQueueReference: connect.ConnectQueueReference = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectQueueReference.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectQueueReference.property.id"></a>

- *Type:* `string`

---

### ConnectQueueSummary <a name="aws-cdk-sdk.connect.ConnectQueueSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectQueueSummary: connect.ConnectQueueSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectQueueSummary.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectQueueSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectQueueSummary.property.name"></a>

- *Type:* `string`

---

##### `queueType`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectQueueSummary.property.queueType"></a>

- *Type:* `string`

---

### ConnectResumeContactRecordingRequest <a name="aws-cdk-sdk.connect.ConnectResumeContactRecordingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectResumeContactRecordingRequest: connect.ConnectResumeContactRecordingRequest = { ... }
```

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResumeContactRecordingRequest.property.contactId"></a>

- *Type:* `string`

---

##### `initialContactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResumeContactRecordingRequest.property.initialContactId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResumeContactRecordingRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectResumeContactRecordingResponse <a name="aws-cdk-sdk.connect.ConnectResumeContactRecordingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectResumeContactRecordingResponse: connect.ConnectResumeContactRecordingResponse = { ... }
```

### ConnectRoutingProfile <a name="aws-cdk-sdk.connect.ConnectRoutingProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectRoutingProfile: connect.ConnectRoutingProfile = { ... }
```

##### `defaultOutboundQueueId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfile.property.defaultOutboundQueueId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfile.property.description"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfile.property.instanceId"></a>

- *Type:* `string`

---

##### `mediaConcurrencies`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfile.property.mediaConcurrencies"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectMediaConcurrency`](#aws-cdk-sdk.connect.ConnectMediaConcurrency)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfile.property.name"></a>

- *Type:* `string`

---

##### `routingProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfile.property.routingProfileArn"></a>

- *Type:* `string`

---

##### `routingProfileId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfile.property.routingProfileId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfile.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ConnectRoutingProfileQueueConfig <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectRoutingProfileQueueConfig: connect.ConnectRoutingProfileQueueConfig = { ... }
```

##### `delay`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfig.property.delay"></a>

- *Type:* `number`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfig.property.priority"></a>

- *Type:* `number`

---

##### `queueReference`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfig.property.queueReference"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectRoutingProfileQueueReference`](#aws-cdk-sdk.connect.ConnectRoutingProfileQueueReference)

---

### ConnectRoutingProfileQueueConfigSummary <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectRoutingProfileQueueConfigSummary: connect.ConnectRoutingProfileQueueConfigSummary = { ... }
```

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary.property.channel"></a>

- *Type:* `string`

---

##### `delay`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary.property.delay"></a>

- *Type:* `number`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary.property.priority"></a>

- *Type:* `number`

---

##### `queueArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary.property.queueArn"></a>

- *Type:* `string`

---

##### `queueId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary.property.queueId"></a>

- *Type:* `string`

---

##### `queueName`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary.property.queueName"></a>

- *Type:* `string`

---

### ConnectRoutingProfileQueueReference <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueReference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectRoutingProfileQueueReference: connect.ConnectRoutingProfileQueueReference = { ... }
```

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueReference.property.channel"></a>

- *Type:* `string`

---

##### `queueId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileQueueReference.property.queueId"></a>

- *Type:* `string`

---

### ConnectRoutingProfileSummary <a name="aws-cdk-sdk.connect.ConnectRoutingProfileSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectRoutingProfileSummary: connect.ConnectRoutingProfileSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileSummary.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectRoutingProfileSummary.property.name"></a>

- *Type:* `string`

---

### ConnectS3Config <a name="aws-cdk-sdk.connect.ConnectS3Config"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectS3Config: connect.ConnectS3Config = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectS3Config.property.bucketName"></a>

- *Type:* `string`

---

##### `bucketPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectS3Config.property.bucketPrefix"></a>

- *Type:* `string`

---

##### `encryptionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectS3Config.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectEncryptionConfig`](#aws-cdk-sdk.connect.ConnectEncryptionConfig)

---

### ConnectSecurityKey <a name="aws-cdk-sdk.connect.ConnectSecurityKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectSecurityKey: connect.ConnectSecurityKey = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectSecurityKey.property.associationId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectSecurityKey.property.creationTime"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectSecurityKey.property.key"></a>

- *Type:* `string`

---

### ConnectSecurityProfileSummary <a name="aws-cdk-sdk.connect.ConnectSecurityProfileSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectSecurityProfileSummary: connect.ConnectSecurityProfileSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectSecurityProfileSummary.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectSecurityProfileSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectSecurityProfileSummary.property.name"></a>

- *Type:* `string`

---

### ConnectStartChatContactRequest <a name="aws-cdk-sdk.connect.ConnectStartChatContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectStartChatContactRequest: connect.ConnectStartChatContactRequest = { ... }
```

##### `contactFlowId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStartChatContactRequest.property.contactFlowId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStartChatContactRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `participantDetails`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStartChatContactRequest.property.participantDetails"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectParticipantDetails`](#aws-cdk-sdk.connect.ConnectParticipantDetails)

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartChatContactRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartChatContactRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `initialMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartChatContactRequest.property.initialMessage"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectChatMessage`](#aws-cdk-sdk.connect.ConnectChatMessage)

---

### ConnectStartChatContactResponse <a name="aws-cdk-sdk.connect.ConnectStartChatContactResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectStartChatContactResponse: connect.ConnectStartChatContactResponse = { ... }
```

##### `contactId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartChatContactResponse.property.contactId"></a>

- *Type:* `string`

---

##### `participantId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartChatContactResponse.property.participantId"></a>

- *Type:* `string`

---

##### `participantToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartChatContactResponse.property.participantToken"></a>

- *Type:* `string`

---

### ConnectStartContactRecordingRequest <a name="aws-cdk-sdk.connect.ConnectStartContactRecordingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectStartContactRecordingRequest: connect.ConnectStartContactRecordingRequest = { ... }
```

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStartContactRecordingRequest.property.contactId"></a>

- *Type:* `string`

---

##### `initialContactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStartContactRecordingRequest.property.initialContactId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStartContactRecordingRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `voiceRecordingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStartContactRecordingRequest.property.voiceRecordingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectVoiceRecordingConfiguration`](#aws-cdk-sdk.connect.ConnectVoiceRecordingConfiguration)

---

### ConnectStartContactRecordingResponse <a name="aws-cdk-sdk.connect.ConnectStartContactRecordingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectStartContactRecordingResponse: connect.ConnectStartContactRecordingResponse = { ... }
```

### ConnectStartOutboundVoiceContactRequest <a name="aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectStartOutboundVoiceContactRequest: connect.ConnectStartOutboundVoiceContactRequest = { ... }
```

##### `contactFlowId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest.property.contactFlowId"></a>

- *Type:* `string`

---

##### `destinationPhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest.property.destinationPhoneNumber"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `queueId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest.property.queueId"></a>

- *Type:* `string`

---

##### `sourcePhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest.property.sourcePhoneNumber"></a>

- *Type:* `string`

---

### ConnectStartOutboundVoiceContactResponse <a name="aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectStartOutboundVoiceContactResponse: connect.ConnectStartOutboundVoiceContactResponse = { ... }
```

##### `contactId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactResponse.property.contactId"></a>

- *Type:* `string`

---

### ConnectStopContactRecordingRequest <a name="aws-cdk-sdk.connect.ConnectStopContactRecordingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectStopContactRecordingRequest: connect.ConnectStopContactRecordingRequest = { ... }
```

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStopContactRecordingRequest.property.contactId"></a>

- *Type:* `string`

---

##### `initialContactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStopContactRecordingRequest.property.initialContactId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStopContactRecordingRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectStopContactRecordingResponse <a name="aws-cdk-sdk.connect.ConnectStopContactRecordingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectStopContactRecordingResponse: connect.ConnectStopContactRecordingResponse = { ... }
```

### ConnectStopContactRequest <a name="aws-cdk-sdk.connect.ConnectStopContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectStopContactRequest: connect.ConnectStopContactRequest = { ... }
```

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStopContactRequest.property.contactId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectStopContactRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectStopContactResponse <a name="aws-cdk-sdk.connect.ConnectStopContactResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectStopContactResponse: connect.ConnectStopContactResponse = { ... }
```

### ConnectSuspendContactRecordingRequest <a name="aws-cdk-sdk.connect.ConnectSuspendContactRecordingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectSuspendContactRecordingRequest: connect.ConnectSuspendContactRecordingRequest = { ... }
```

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectSuspendContactRecordingRequest.property.contactId"></a>

- *Type:* `string`

---

##### `initialContactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectSuspendContactRecordingRequest.property.initialContactId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectSuspendContactRecordingRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectSuspendContactRecordingResponse <a name="aws-cdk-sdk.connect.ConnectSuspendContactRecordingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectSuspendContactRecordingResponse: connect.ConnectSuspendContactRecordingResponse = { ... }
```

### ConnectTagResourceRequest <a name="aws-cdk-sdk.connect.ConnectTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectTagResourceRequest: connect.ConnectTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ConnectThreshold <a name="aws-cdk-sdk.connect.ConnectThreshold"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectThreshold: connect.ConnectThreshold = { ... }
```

##### `comparison`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectThreshold.property.comparison"></a>

- *Type:* `string`

---

##### `thresholdValue`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectThreshold.property.thresholdValue"></a>

- *Type:* `number`

---

### ConnectUntagResourceRequest <a name="aws-cdk-sdk.connect.ConnectUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUntagResourceRequest: connect.ConnectUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ConnectUpdateContactAttributesRequest <a name="aws-cdk-sdk.connect.ConnectUpdateContactAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateContactAttributesRequest: connect.ConnectUpdateContactAttributesRequest = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateContactAttributesRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `initialContactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateContactAttributesRequest.property.initialContactId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateContactAttributesRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectUpdateContactAttributesResponse <a name="aws-cdk-sdk.connect.ConnectUpdateContactAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateContactAttributesResponse: connect.ConnectUpdateContactAttributesResponse = { ... }
```

### ConnectUpdateContactFlowContentRequest <a name="aws-cdk-sdk.connect.ConnectUpdateContactFlowContentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateContactFlowContentRequest: connect.ConnectUpdateContactFlowContentRequest = { ... }
```

##### `contactFlowId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateContactFlowContentRequest.property.contactFlowId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateContactFlowContentRequest.property.content"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateContactFlowContentRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectUpdateContactFlowNameRequest <a name="aws-cdk-sdk.connect.ConnectUpdateContactFlowNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateContactFlowNameRequest: connect.ConnectUpdateContactFlowNameRequest = { ... }
```

##### `contactFlowId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateContactFlowNameRequest.property.contactFlowId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateContactFlowNameRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateContactFlowNameRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateContactFlowNameRequest.property.name"></a>

- *Type:* `string`

---

### ConnectUpdateInstanceAttributeRequest <a name="aws-cdk-sdk.connect.ConnectUpdateInstanceAttributeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateInstanceAttributeRequest: connect.ConnectUpdateInstanceAttributeRequest = { ... }
```

##### `attributeType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateInstanceAttributeRequest.property.attributeType"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateInstanceAttributeRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateInstanceAttributeRequest.property.value"></a>

- *Type:* `string`

---

### ConnectUpdateInstanceStorageConfigRequest <a name="aws-cdk-sdk.connect.ConnectUpdateInstanceStorageConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateInstanceStorageConfigRequest: connect.ConnectUpdateInstanceStorageConfigRequest = { ... }
```

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateInstanceStorageConfigRequest.property.associationId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateInstanceStorageConfigRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateInstanceStorageConfigRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `storageConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateInstanceStorageConfigRequest.property.storageConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectInstanceStorageConfig`](#aws-cdk-sdk.connect.ConnectInstanceStorageConfig)

---

### ConnectUpdateRoutingProfileConcurrencyRequest <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileConcurrencyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateRoutingProfileConcurrencyRequest: connect.ConnectUpdateRoutingProfileConcurrencyRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileConcurrencyRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileConcurrencyRequest.property.mediaConcurrencies"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectMediaConcurrency`](#aws-cdk-sdk.connect.ConnectMediaConcurrency)[]

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileConcurrencyRequest.property.routingProfileId"></a>

- *Type:* `string`

---

### ConnectUpdateRoutingProfileDefaultOutboundQueueRequest <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileDefaultOutboundQueueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateRoutingProfileDefaultOutboundQueueRequest: connect.ConnectUpdateRoutingProfileDefaultOutboundQueueRequest = { ... }
```

##### `defaultOutboundQueueId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileDefaultOutboundQueueRequest.property.defaultOutboundQueueId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileDefaultOutboundQueueRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileDefaultOutboundQueueRequest.property.routingProfileId"></a>

- *Type:* `string`

---

### ConnectUpdateRoutingProfileNameRequest <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateRoutingProfileNameRequest: connect.ConnectUpdateRoutingProfileNameRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileNameRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileNameRequest.property.routingProfileId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileNameRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileNameRequest.property.name"></a>

- *Type:* `string`

---

### ConnectUpdateRoutingProfileQueuesRequest <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileQueuesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateRoutingProfileQueuesRequest: connect.ConnectUpdateRoutingProfileQueuesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileQueuesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `queueConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileQueuesRequest.property.queueConfigs"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfig`](#aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfig)[]

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateRoutingProfileQueuesRequest.property.routingProfileId"></a>

- *Type:* `string`

---

### ConnectUpdateUserHierarchyGroupNameRequest <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyGroupNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateUserHierarchyGroupNameRequest: connect.ConnectUpdateUserHierarchyGroupNameRequest = { ... }
```

##### `hierarchyGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyGroupNameRequest.property.hierarchyGroupId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyGroupNameRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyGroupNameRequest.property.name"></a>

- *Type:* `string`

---

### ConnectUpdateUserHierarchyRequest <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateUserHierarchyRequest: connect.ConnectUpdateUserHierarchyRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyRequest.property.userId"></a>

- *Type:* `string`

---

##### `hierarchyGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyRequest.property.hierarchyGroupId"></a>

- *Type:* `string`

---

### ConnectUpdateUserHierarchyStructureRequest <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyStructureRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateUserHierarchyStructureRequest: connect.ConnectUpdateUserHierarchyStructureRequest = { ... }
```

##### `hierarchyStructure`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyStructureRequest.property.hierarchyStructure"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyStructureUpdate`](#aws-cdk-sdk.connect.ConnectHierarchyStructureUpdate)

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserHierarchyStructureRequest.property.instanceId"></a>

- *Type:* `string`

---

### ConnectUpdateUserIdentityInfoRequest <a name="aws-cdk-sdk.connect.ConnectUpdateUserIdentityInfoRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateUserIdentityInfoRequest: connect.ConnectUpdateUserIdentityInfoRequest = { ... }
```

##### `identityInfo`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserIdentityInfoRequest.property.identityInfo"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUserIdentityInfo`](#aws-cdk-sdk.connect.ConnectUserIdentityInfo)

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserIdentityInfoRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserIdentityInfoRequest.property.userId"></a>

- *Type:* `string`

---

### ConnectUpdateUserPhoneConfigRequest <a name="aws-cdk-sdk.connect.ConnectUpdateUserPhoneConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateUserPhoneConfigRequest: connect.ConnectUpdateUserPhoneConfigRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserPhoneConfigRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `phoneConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserPhoneConfigRequest.property.phoneConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUserPhoneConfig`](#aws-cdk-sdk.connect.ConnectUserPhoneConfig)

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserPhoneConfigRequest.property.userId"></a>

- *Type:* `string`

---

### ConnectUpdateUserRoutingProfileRequest <a name="aws-cdk-sdk.connect.ConnectUpdateUserRoutingProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateUserRoutingProfileRequest: connect.ConnectUpdateUserRoutingProfileRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserRoutingProfileRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserRoutingProfileRequest.property.routingProfileId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserRoutingProfileRequest.property.userId"></a>

- *Type:* `string`

---

### ConnectUpdateUserSecurityProfilesRequest <a name="aws-cdk-sdk.connect.ConnectUpdateUserSecurityProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUpdateUserSecurityProfilesRequest: connect.ConnectUpdateUserSecurityProfilesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserSecurityProfilesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `securityProfileIds`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserSecurityProfilesRequest.property.securityProfileIds"></a>

- *Type:* `string`[]

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUpdateUserSecurityProfilesRequest.property.userId"></a>

- *Type:* `string`

---

### ConnectUser <a name="aws-cdk-sdk.connect.ConnectUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUser: connect.ConnectUser = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUser.property.arn"></a>

- *Type:* `string`

---

##### `directoryUserId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUser.property.directoryUserId"></a>

- *Type:* `string`

---

##### `hierarchyGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUser.property.hierarchyGroupId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUser.property.id"></a>

- *Type:* `string`

---

##### `identityInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUser.property.identityInfo"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUserIdentityInfo`](#aws-cdk-sdk.connect.ConnectUserIdentityInfo)

---

##### `phoneConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUser.property.phoneConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUserPhoneConfig`](#aws-cdk-sdk.connect.ConnectUserPhoneConfig)

---

##### `routingProfileId`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUser.property.routingProfileId"></a>

- *Type:* `string`

---

##### `securityProfileIds`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUser.property.securityProfileIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUser.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUser.property.username"></a>

- *Type:* `string`

---

### ConnectUserIdentityInfo <a name="aws-cdk-sdk.connect.ConnectUserIdentityInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUserIdentityInfo: connect.ConnectUserIdentityInfo = { ... }
```

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUserIdentityInfo.property.email"></a>

- *Type:* `string`

---

##### `firstName`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUserIdentityInfo.property.firstName"></a>

- *Type:* `string`

---

##### `lastName`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUserIdentityInfo.property.lastName"></a>

- *Type:* `string`

---

### ConnectUserPhoneConfig <a name="aws-cdk-sdk.connect.ConnectUserPhoneConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUserPhoneConfig: connect.ConnectUserPhoneConfig = { ... }
```

##### `phoneType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectUserPhoneConfig.property.phoneType"></a>

- *Type:* `string`

---

##### `afterContactWorkTimeLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit"></a>

- *Type:* `number`

---

##### `autoAccept`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUserPhoneConfig.property.autoAccept"></a>

- *Type:* `boolean`

---

##### `deskPhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUserPhoneConfig.property.deskPhoneNumber"></a>

- *Type:* `string`

---

### ConnectUserSummary <a name="aws-cdk-sdk.connect.ConnectUserSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectUserSummary: connect.ConnectUserSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUserSummary.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUserSummary.property.id"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectUserSummary.property.username"></a>

- *Type:* `string`

---

### ConnectVoiceRecordingConfiguration <a name="aws-cdk-sdk.connect.ConnectVoiceRecordingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

const connectVoiceRecordingConfiguration: connect.ConnectVoiceRecordingConfiguration = { ... }
```

##### `voiceRecordingTrack`<sup>Optional</sup> <a name="aws-cdk-sdk.connect.ConnectVoiceRecordingConfiguration.property.voiceRecordingTrack"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ConnectResponsesAssociateInstanceStorageConfig <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateInstanceStorageConfig"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateInstanceStorageConfig.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesAssociateInstanceStorageConfig(__scope: Construct, __resources: string[], __input: ConnectAssociateInstanceStorageConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateInstanceStorageConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateInstanceStorageConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateInstanceStorageConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAssociateInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectAssociateInstanceStorageConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateInstanceStorageConfig.property.associationId"></a>

- *Type:* `string`

---


### ConnectResponsesAssociateSecurityKey <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateSecurityKey"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateSecurityKey.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesAssociateSecurityKey(__scope: Construct, __resources: string[], __input: ConnectAssociateSecurityKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateSecurityKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateSecurityKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateSecurityKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAssociateSecurityKeyRequest`](#aws-cdk-sdk.connect.ConnectAssociateSecurityKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesAssociateSecurityKey.property.associationId"></a>

- *Type:* `string`

---


### ConnectResponsesCreateContactFlow <a name="aws-cdk-sdk.connect.ConnectResponsesCreateContactFlow"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesCreateContactFlow.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesCreateContactFlow(__scope: Construct, __resources: string[], __input: ConnectCreateContactFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateContactFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateContactFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateContactFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCreateContactFlowRequest`](#aws-cdk-sdk.connect.ConnectCreateContactFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `contactFlowArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateContactFlow.property.contactFlowArn"></a>

- *Type:* `string`

---

##### `contactFlowId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateContactFlow.property.contactFlowId"></a>

- *Type:* `string`

---


### ConnectResponsesCreateInstance <a name="aws-cdk-sdk.connect.ConnectResponsesCreateInstance"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesCreateInstance.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesCreateInstance(__scope: Construct, __resources: string[], __input: ConnectCreateInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCreateInstanceRequest`](#aws-cdk-sdk.connect.ConnectCreateInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateInstance.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateInstance.property.id"></a>

- *Type:* `string`

---


### ConnectResponsesCreateRoutingProfile <a name="aws-cdk-sdk.connect.ConnectResponsesCreateRoutingProfile"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesCreateRoutingProfile.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesCreateRoutingProfile(__scope: Construct, __resources: string[], __input: ConnectCreateRoutingProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateRoutingProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateRoutingProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateRoutingProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest`](#aws-cdk-sdk.connect.ConnectCreateRoutingProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `routingProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateRoutingProfile.property.routingProfileArn"></a>

- *Type:* `string`

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateRoutingProfile.property.routingProfileId"></a>

- *Type:* `string`

---


### ConnectResponsesCreateUser <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUser"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUser.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesCreateUser(__scope: Construct, __resources: string[], __input: ConnectCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCreateUserRequest`](#aws-cdk-sdk.connect.ConnectCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUser.property.userArn"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUser.property.userId"></a>

- *Type:* `string`

---


### ConnectResponsesCreateUserHierarchyGroup <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUserHierarchyGroup"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUserHierarchyGroup.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesCreateUserHierarchyGroup(__scope: Construct, __resources: string[], __input: ConnectCreateUserHierarchyGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUserHierarchyGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUserHierarchyGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUserHierarchyGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectCreateUserHierarchyGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `hierarchyGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUserHierarchyGroup.property.hierarchyGroupArn"></a>

- *Type:* `string`

---

##### `hierarchyGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesCreateUserHierarchyGroup.property.hierarchyGroupId"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeContactFlow <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlow"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlow.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeContactFlow(__scope: Construct, __resources: string[], __input: ConnectDescribeContactFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeContactFlowRequest`](#aws-cdk-sdk.connect.ConnectDescribeContactFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `contactFlow`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlow.property.contactFlow"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow`](#aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow)

---


### ConnectResponsesDescribeContactFlowContactFlow <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeContactFlowContactFlow(__scope: Construct, __resources: string[], __input: ConnectDescribeContactFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeContactFlowRequest`](#aws-cdk-sdk.connect.ConnectDescribeContactFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.property.arn"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.property.content"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeContactFlowContactFlow.property.type"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeInstance <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstance"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstance.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstance(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `instance`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstance.property.instance"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance`](#aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance)

---


### ConnectResponsesDescribeInstanceAttribute <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttribute"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttribute.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceAttribute(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceAttributeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttribute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttribute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttribute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeRequest)

---



#### Properties <a name="Properties"></a>

##### `attribute`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttribute.property.attribute"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttributeAttribute`](#aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttributeAttribute)

---


### ConnectResponsesDescribeInstanceAttributeAttribute <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttributeAttribute"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttributeAttribute.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceAttributeAttribute(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceAttributeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttributeAttribute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttributeAttribute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttributeAttribute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceAttributeRequest)

---



#### Properties <a name="Properties"></a>

##### `attributeType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttributeAttribute.property.attributeType"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceAttributeAttribute.property.value"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeInstanceInstance <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceInstance(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.property.createdTime"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.property.id"></a>

- *Type:* `string`

---

##### `identityManagementType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.property.identityManagementType"></a>

- *Type:* `string`

---

##### `inboundCallsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.property.inboundCallsEnabled"></a>

- *Type:* `boolean`

---

##### `instanceAlias`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.property.instanceAlias"></a>

- *Type:* `string`

---

##### `instanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.property.instanceStatus"></a>

- *Type:* `string`

---

##### `outboundCallsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.property.outboundCallsEnabled"></a>

- *Type:* `boolean`

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.property.serviceRole"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstance.property.statusReason"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstanceStatusReason`](#aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstanceStatusReason)

---


### ConnectResponsesDescribeInstanceInstanceStatusReason <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstanceStatusReason"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstanceStatusReason.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceInstanceStatusReason(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstanceStatusReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstanceStatusReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstanceStatusReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceInstanceStatusReason.property.message"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeInstanceStorageConfig <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfig"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfig.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceStorageConfig(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceStorageConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `storageConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfig.property.storageConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig`](#aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig)

---


### ConnectResponsesDescribeInstanceStorageConfigStorageConfig <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceStorageConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig.property.associationId"></a>

- *Type:* `string`

---

##### `kinesisFirehoseConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig.property.kinesisFirehoseConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig`](#aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig)

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig.property.kinesisStreamConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig`](#aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig)

---

##### `kinesisVideoStreamConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig.property.kinesisVideoStreamConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig`](#aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig)

---

##### `s3Config`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig.property.s3Config"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config`](#aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config)

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfig.property.storageType"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceStorageConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `firehoseArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisFirehoseConfig.property.firehoseArn"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceStorageConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisStreamConfig.property.streamArn"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceStorageConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig`](#aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.prefix"></a>

- *Type:* `string`

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours"></a>

- *Type:* `number`

---


### ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceStorageConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceStorageConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config.property.bucketName"></a>

- *Type:* `string`

---

##### `bucketPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config.property.bucketPrefix"></a>

- *Type:* `string`

---

##### `encryptionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3Config.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig`](#aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig)

---


### ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig(__scope: Construct, __resources: string[], __input: ConnectDescribeInstanceStorageConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest`](#aws-cdk-sdk.connect.ConnectDescribeInstanceStorageConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.property.encryptionType"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.property.keyId"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeRoutingProfile <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfile"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfile.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeRoutingProfile(__scope: Construct, __resources: string[], __input: ConnectDescribeRoutingProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeRoutingProfileRequest`](#aws-cdk-sdk.connect.ConnectDescribeRoutingProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `routingProfile`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfile.property.routingProfile"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile`](#aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile)

---


### ConnectResponsesDescribeRoutingProfileRoutingProfile <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeRoutingProfileRoutingProfile(__scope: Construct, __resources: string[], __input: ConnectDescribeRoutingProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeRoutingProfileRequest`](#aws-cdk-sdk.connect.ConnectDescribeRoutingProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultOutboundQueueId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.property.defaultOutboundQueueId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.property.description"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.property.instanceId"></a>

- *Type:* `string`

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.property.mediaConcurrencies"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectMediaConcurrency`](#aws-cdk-sdk.connect.ConnectMediaConcurrency)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.property.name"></a>

- *Type:* `string`

---

##### `routingProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.property.routingProfileArn"></a>

- *Type:* `string`

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.property.routingProfileId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeRoutingProfileRoutingProfile.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ConnectResponsesDescribeUser <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUser"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUser.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUser(__scope: Construct, __resources: string[], __input: ConnectDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser)

---


### ConnectResponsesDescribeUserHierarchyGroup <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroup"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroup.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyGroup(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `hierarchyGroup`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroup.property.hierarchyGroup"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup)

---


### ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup.property.arn"></a>

- *Type:* `string`

---

##### `hierarchyPath`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup.property.hierarchyPath"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup.property.id"></a>

- *Type:* `string`

---

##### `levelId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup.property.levelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroup.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `levelFive`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath.property.levelFive"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive)

---

##### `levelFour`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath.property.levelFour"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour)

---

##### `levelOne`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath.property.levelOne"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne)

---

##### `levelThree`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath.property.levelThree"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree)

---

##### `levelTwo`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPath.property.levelTwo"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo)

---


### ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFive.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelFour.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelOne.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelThree.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyGroupHierarchyGroupHierarchyPathLevelTwo.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserHierarchyStructure <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructure"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructure.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyStructure(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyStructureRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructure.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructure.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructure.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest)

---



#### Properties <a name="Properties"></a>

##### `hierarchyStructure`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructure.property.hierarchyStructure"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure)

---


### ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyStructureRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest)

---



#### Properties <a name="Properties"></a>

##### `levelFive`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure.property.levelFive"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive)

---

##### `levelFour`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure.property.levelFour"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour)

---

##### `levelOne`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure.property.levelOne"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne)

---

##### `levelThree`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure.property.levelThree"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree)

---

##### `levelTwo`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructure.property.levelTwo"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo)

---


### ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyStructureRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFive.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyStructureRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelFour.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyStructureRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelOne.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyStructureRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelThree.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo(__scope: Construct, __resources: string[], __input: ConnectDescribeUserHierarchyStructureRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserHierarchyStructureRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserHierarchyStructureHierarchyStructureLevelTwo.property.name"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserUser <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserUser(__scope: Construct, __resources: string[], __input: ConnectDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.property.arn"></a>

- *Type:* `string`

---

##### `directoryUserId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.property.directoryUserId"></a>

- *Type:* `string`

---

##### `hierarchyGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.property.hierarchyGroupId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.property.id"></a>

- *Type:* `string`

---

##### `identityInfo`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.property.identityInfo"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserIdentityInfo`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserIdentityInfo)

---

##### `phoneConfig`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.property.phoneConfig"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig`](#aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig)

---

##### `routingProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.property.routingProfileId"></a>

- *Type:* `string`

---

##### `securityProfileIds`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.property.securityProfileIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUser.property.username"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserUserIdentityInfo <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserIdentityInfo"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserIdentityInfo.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserUserIdentityInfo(__scope: Construct, __resources: string[], __input: ConnectDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserIdentityInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserIdentityInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserIdentityInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserIdentityInfo.property.email"></a>

- *Type:* `string`

---

##### `firstName`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserIdentityInfo.property.firstName"></a>

- *Type:* `string`

---

##### `lastName`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserIdentityInfo.property.lastName"></a>

- *Type:* `string`

---


### ConnectResponsesDescribeUserUserPhoneConfig <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesDescribeUserUserPhoneConfig(__scope: Construct, __resources: string[], __input: ConnectDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectDescribeUserRequest`](#aws-cdk-sdk.connect.ConnectDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig.property.afterContactWorkTimeLimit"></a>

- *Type:* `number`

---

##### `autoAccept`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig.property.autoAccept"></a>

- *Type:* `boolean`

---

##### `deskPhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig.property.deskPhoneNumber"></a>

- *Type:* `string`

---

##### `phoneType`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesDescribeUserUserPhoneConfig.property.phoneType"></a>

- *Type:* `string`

---


### ConnectResponsesFetchContactAttributes <a name="aws-cdk-sdk.connect.ConnectResponsesFetchContactAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesFetchContactAttributes.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesFetchContactAttributes(__scope: Construct, __resources: string[], __input: ConnectGetContactAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchContactAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchContactAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchContactAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectGetContactAttributesRequest`](#aws-cdk-sdk.connect.ConnectGetContactAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchContactAttributes.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---


### ConnectResponsesFetchCurrentMetricData <a name="aws-cdk-sdk.connect.ConnectResponsesFetchCurrentMetricData"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesFetchCurrentMetricData.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesFetchCurrentMetricData(__scope: Construct, __resources: string[], __input: ConnectGetCurrentMetricDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchCurrentMetricData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchCurrentMetricData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchCurrentMetricData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest`](#aws-cdk-sdk.connect.ConnectGetCurrentMetricDataRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSnapshotTime`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchCurrentMetricData.property.dataSnapshotTime"></a>

- *Type:* `string`

---

##### `metricResults`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchCurrentMetricData.property.metricResults"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectCurrentMetricResult`](#aws-cdk-sdk.connect.ConnectCurrentMetricResult)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchCurrentMetricData.property.nextToken"></a>

- *Type:* `string`

---


### ConnectResponsesFetchFederationToken <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationToken"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationToken.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesFetchFederationToken(__scope: Construct, __resources: string[], __input: ConnectGetFederationTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectGetFederationTokenRequest`](#aws-cdk-sdk.connect.ConnectGetFederationTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationToken.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials`](#aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials)

---


### ConnectResponsesFetchFederationTokenCredentials <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesFetchFederationTokenCredentials(__scope: Construct, __resources: string[], __input: ConnectGetFederationTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectGetFederationTokenRequest`](#aws-cdk-sdk.connect.ConnectGetFederationTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `accessToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials.property.accessToken"></a>

- *Type:* `string`

---

##### `accessTokenExpiration`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials.property.accessTokenExpiration"></a>

- *Type:* `string`

---

##### `refreshToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials.property.refreshToken"></a>

- *Type:* `string`

---

##### `refreshTokenExpiration`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchFederationTokenCredentials.property.refreshTokenExpiration"></a>

- *Type:* `string`

---


### ConnectResponsesFetchMetricData <a name="aws-cdk-sdk.connect.ConnectResponsesFetchMetricData"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesFetchMetricData.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesFetchMetricData(__scope: Construct, __resources: string[], __input: ConnectGetMetricDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchMetricData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchMetricData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchMetricData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectGetMetricDataRequest`](#aws-cdk-sdk.connect.ConnectGetMetricDataRequest)

---



#### Properties <a name="Properties"></a>

##### `metricResults`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchMetricData.property.metricResults"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHistoricalMetricResult`](#aws-cdk-sdk.connect.ConnectHistoricalMetricResult)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesFetchMetricData.property.nextToken"></a>

- *Type:* `string`

---


### ConnectResponsesListApprovedOrigins <a name="aws-cdk-sdk.connect.ConnectResponsesListApprovedOrigins"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListApprovedOrigins.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListApprovedOrigins(__scope: Construct, __resources: string[], __input: ConnectListApprovedOriginsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListApprovedOrigins.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListApprovedOrigins.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListApprovedOrigins.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListApprovedOriginsRequest`](#aws-cdk-sdk.connect.ConnectListApprovedOriginsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListApprovedOrigins.property.nextToken"></a>

- *Type:* `string`

---

##### `origins`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListApprovedOrigins.property.origins"></a>

- *Type:* `string`[]

---


### ConnectResponsesListContactFlows <a name="aws-cdk-sdk.connect.ConnectResponsesListContactFlows"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListContactFlows.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListContactFlows(__scope: Construct, __resources: string[], __input: ConnectListContactFlowsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListContactFlows.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListContactFlows.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListContactFlows.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListContactFlowsRequest`](#aws-cdk-sdk.connect.ConnectListContactFlowsRequest)

---



#### Properties <a name="Properties"></a>

##### `contactFlowSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListContactFlows.property.contactFlowSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectContactFlowSummary`](#aws-cdk-sdk.connect.ConnectContactFlowSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListContactFlows.property.nextToken"></a>

- *Type:* `string`

---


### ConnectResponsesListHoursOfOperations <a name="aws-cdk-sdk.connect.ConnectResponsesListHoursOfOperations"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListHoursOfOperations.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListHoursOfOperations(__scope: Construct, __resources: string[], __input: ConnectListHoursOfOperationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListHoursOfOperations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListHoursOfOperations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListHoursOfOperations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListHoursOfOperationsRequest`](#aws-cdk-sdk.connect.ConnectListHoursOfOperationsRequest)

---



#### Properties <a name="Properties"></a>

##### `hoursOfOperationSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListHoursOfOperations.property.hoursOfOperationSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHoursOfOperationSummary`](#aws-cdk-sdk.connect.ConnectHoursOfOperationSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListHoursOfOperations.property.nextToken"></a>

- *Type:* `string`

---


### ConnectResponsesListInstanceAttributes <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceAttributes.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListInstanceAttributes(__scope: Construct, __resources: string[], __input: ConnectListInstanceAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListInstanceAttributesRequest`](#aws-cdk-sdk.connect.ConnectListInstanceAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceAttributes.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectAttribute`](#aws-cdk-sdk.connect.ConnectAttribute)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceAttributes.property.nextToken"></a>

- *Type:* `string`

---


### ConnectResponsesListInstances <a name="aws-cdk-sdk.connect.ConnectResponsesListInstances"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListInstances.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListInstances(__scope: Construct, __resources: string[], __input: ConnectListInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListInstancesRequest`](#aws-cdk-sdk.connect.ConnectListInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstances.property.instanceSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectInstanceSummary`](#aws-cdk-sdk.connect.ConnectInstanceSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstances.property.nextToken"></a>

- *Type:* `string`

---


### ConnectResponsesListInstanceStorageConfigs <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceStorageConfigs"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceStorageConfigs.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListInstanceStorageConfigs(__scope: Construct, __resources: string[], __input: ConnectListInstanceStorageConfigsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceStorageConfigs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceStorageConfigs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceStorageConfigs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsRequest`](#aws-cdk-sdk.connect.ConnectListInstanceStorageConfigsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceStorageConfigs.property.nextToken"></a>

- *Type:* `string`

---

##### `storageConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListInstanceStorageConfigs.property.storageConfigs"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectInstanceStorageConfig`](#aws-cdk-sdk.connect.ConnectInstanceStorageConfig)[]

---


### ConnectResponsesListLambdaFunctions <a name="aws-cdk-sdk.connect.ConnectResponsesListLambdaFunctions"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListLambdaFunctions.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListLambdaFunctions(__scope: Construct, __resources: string[], __input: ConnectListLambdaFunctionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListLambdaFunctions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListLambdaFunctions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListLambdaFunctions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListLambdaFunctionsRequest`](#aws-cdk-sdk.connect.ConnectListLambdaFunctionsRequest)

---



#### Properties <a name="Properties"></a>

##### `lambdaFunctions`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListLambdaFunctions.property.lambdaFunctions"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListLambdaFunctions.property.nextToken"></a>

- *Type:* `string`

---


### ConnectResponsesListLexBots <a name="aws-cdk-sdk.connect.ConnectResponsesListLexBots"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListLexBots.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListLexBots(__scope: Construct, __resources: string[], __input: ConnectListLexBotsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListLexBots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListLexBots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListLexBots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListLexBotsRequest`](#aws-cdk-sdk.connect.ConnectListLexBotsRequest)

---



#### Properties <a name="Properties"></a>

##### `lexBots`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListLexBots.property.lexBots"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectLexBot`](#aws-cdk-sdk.connect.ConnectLexBot)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListLexBots.property.nextToken"></a>

- *Type:* `string`

---


### ConnectResponsesListPhoneNumbers <a name="aws-cdk-sdk.connect.ConnectResponsesListPhoneNumbers"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListPhoneNumbers.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListPhoneNumbers(__scope: Construct, __resources: string[], __input: ConnectListPhoneNumbersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListPhoneNumbers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListPhoneNumbers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListPhoneNumbers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListPhoneNumbersRequest`](#aws-cdk-sdk.connect.ConnectListPhoneNumbersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListPhoneNumbers.property.nextToken"></a>

- *Type:* `string`

---

##### `phoneNumberSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListPhoneNumbers.property.phoneNumberSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectPhoneNumberSummary`](#aws-cdk-sdk.connect.ConnectPhoneNumberSummary)[]

---


### ConnectResponsesListPrompts <a name="aws-cdk-sdk.connect.ConnectResponsesListPrompts"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListPrompts.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListPrompts(__scope: Construct, __resources: string[], __input: ConnectListPromptsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListPrompts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListPrompts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListPrompts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListPromptsRequest`](#aws-cdk-sdk.connect.ConnectListPromptsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListPrompts.property.nextToken"></a>

- *Type:* `string`

---

##### `promptSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListPrompts.property.promptSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectPromptSummary`](#aws-cdk-sdk.connect.ConnectPromptSummary)[]

---


### ConnectResponsesListQueues <a name="aws-cdk-sdk.connect.ConnectResponsesListQueues"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListQueues.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListQueues(__scope: Construct, __resources: string[], __input: ConnectListQueuesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListQueues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListQueues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListQueues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListQueuesRequest`](#aws-cdk-sdk.connect.ConnectListQueuesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListQueues.property.nextToken"></a>

- *Type:* `string`

---

##### `queueSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListQueues.property.queueSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectQueueSummary`](#aws-cdk-sdk.connect.ConnectQueueSummary)[]

---


### ConnectResponsesListRoutingProfileQueues <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfileQueues"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfileQueues.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListRoutingProfileQueues(__scope: Construct, __resources: string[], __input: ConnectListRoutingProfileQueuesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfileQueues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfileQueues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfileQueues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesRequest`](#aws-cdk-sdk.connect.ConnectListRoutingProfileQueuesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfileQueues.property.nextToken"></a>

- *Type:* `string`

---

##### `routingProfileQueueConfigSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfileQueues.property.routingProfileQueueConfigSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary`](#aws-cdk-sdk.connect.ConnectRoutingProfileQueueConfigSummary)[]

---


### ConnectResponsesListRoutingProfiles <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfiles.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListRoutingProfiles(__scope: Construct, __resources: string[], __input: ConnectListRoutingProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListRoutingProfilesRequest`](#aws-cdk-sdk.connect.ConnectListRoutingProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfiles.property.nextToken"></a>

- *Type:* `string`

---

##### `routingProfileSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListRoutingProfiles.property.routingProfileSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectRoutingProfileSummary`](#aws-cdk-sdk.connect.ConnectRoutingProfileSummary)[]

---


### ConnectResponsesListSecurityKeys <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityKeys"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityKeys.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListSecurityKeys(__scope: Construct, __resources: string[], __input: ConnectListSecurityKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListSecurityKeysRequest`](#aws-cdk-sdk.connect.ConnectListSecurityKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityKeys.property.nextToken"></a>

- *Type:* `string`

---

##### `securityKeys`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityKeys.property.securityKeys"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectSecurityKey`](#aws-cdk-sdk.connect.ConnectSecurityKey)[]

---


### ConnectResponsesListSecurityProfiles <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityProfiles.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListSecurityProfiles(__scope: Construct, __resources: string[], __input: ConnectListSecurityProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListSecurityProfilesRequest`](#aws-cdk-sdk.connect.ConnectListSecurityProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityProfiles.property.nextToken"></a>

- *Type:* `string`

---

##### `securityProfileSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListSecurityProfiles.property.securityProfileSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectSecurityProfileSummary`](#aws-cdk-sdk.connect.ConnectSecurityProfileSummary)[]

---


### ConnectResponsesListTagsForResource <a name="aws-cdk-sdk.connect.ConnectResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListTagsForResource.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: ConnectListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListTagsForResourceRequest`](#aws-cdk-sdk.connect.ConnectListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ConnectResponsesListUserHierarchyGroups <a name="aws-cdk-sdk.connect.ConnectResponsesListUserHierarchyGroups"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListUserHierarchyGroups.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListUserHierarchyGroups(__scope: Construct, __resources: string[], __input: ConnectListUserHierarchyGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListUserHierarchyGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListUserHierarchyGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListUserHierarchyGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsRequest`](#aws-cdk-sdk.connect.ConnectListUserHierarchyGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListUserHierarchyGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `userHierarchyGroupSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListUserHierarchyGroups.property.userHierarchyGroupSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectHierarchyGroupSummary`](#aws-cdk-sdk.connect.ConnectHierarchyGroupSummary)[]

---


### ConnectResponsesListUsers <a name="aws-cdk-sdk.connect.ConnectResponsesListUsers"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesListUsers.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesListUsers(__scope: Construct, __resources: string[], __input: ConnectListUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectListUsersRequest`](#aws-cdk-sdk.connect.ConnectListUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListUsers.property.nextToken"></a>

- *Type:* `string`

---

##### `userSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesListUsers.property.userSummaryList"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectUserSummary`](#aws-cdk-sdk.connect.ConnectUserSummary)[]

---


### ConnectResponsesStartChatContact <a name="aws-cdk-sdk.connect.ConnectResponsesStartChatContact"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesStartChatContact.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesStartChatContact(__scope: Construct, __resources: string[], __input: ConnectStartChatContactRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesStartChatContact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesStartChatContact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesStartChatContact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectStartChatContactRequest`](#aws-cdk-sdk.connect.ConnectStartChatContactRequest)

---



#### Properties <a name="Properties"></a>

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesStartChatContact.property.contactId"></a>

- *Type:* `string`

---

##### `participantId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesStartChatContact.property.participantId"></a>

- *Type:* `string`

---

##### `participantToken`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesStartChatContact.property.participantToken"></a>

- *Type:* `string`

---


### ConnectResponsesStartOutboundVoiceContact <a name="aws-cdk-sdk.connect.ConnectResponsesStartOutboundVoiceContact"></a>

#### Initializer <a name="aws-cdk-sdk.connect.ConnectResponsesStartOutboundVoiceContact.Initializer"></a>

```typescript
import { connect } from 'aws-cdk-sdk'

new connect.ConnectResponsesStartOutboundVoiceContact(__scope: Construct, __resources: string[], __input: ConnectStartOutboundVoiceContactRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesStartOutboundVoiceContact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesStartOutboundVoiceContact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesStartOutboundVoiceContact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest`](#aws-cdk-sdk.connect.ConnectStartOutboundVoiceContactRequest)

---



#### Properties <a name="Properties"></a>

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.connect.ConnectResponsesStartOutboundVoiceContact.property.contactId"></a>

- *Type:* `string`

---



