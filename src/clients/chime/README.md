# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ChimeClient <a name="aws-cdk-sdk.chime.ChimeClient"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeClient.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associatePhoneNumbersWithVoiceConnector` <a name="aws-cdk-sdk.chime.ChimeClient.associatePhoneNumbersWithVoiceConnector"></a>

```typescript
public associatePhoneNumbersWithVoiceConnector(input: ChimeAssociatePhoneNumbersWithVoiceConnectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest)

---

##### `associatePhoneNumbersWithVoiceConnectorGroup` <a name="aws-cdk-sdk.chime.ChimeClient.associatePhoneNumbersWithVoiceConnectorGroup"></a>

```typescript
public associatePhoneNumbersWithVoiceConnectorGroup(input: ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest)

---

##### `associatePhoneNumberWithUser` <a name="aws-cdk-sdk.chime.ChimeClient.associatePhoneNumberWithUser"></a>

```typescript
public associatePhoneNumberWithUser(input: ChimeAssociatePhoneNumberWithUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAssociatePhoneNumberWithUserRequest`](#aws-cdk-sdk.chime.ChimeAssociatePhoneNumberWithUserRequest)

---

##### `associateSigninDelegateGroupsWithAccount` <a name="aws-cdk-sdk.chime.ChimeClient.associateSigninDelegateGroupsWithAccount"></a>

```typescript
public associateSigninDelegateGroupsWithAccount(input: ChimeAssociateSigninDelegateGroupsWithAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAssociateSigninDelegateGroupsWithAccountRequest`](#aws-cdk-sdk.chime.ChimeAssociateSigninDelegateGroupsWithAccountRequest)

---

##### `batchCreateAttendee` <a name="aws-cdk-sdk.chime.ChimeClient.batchCreateAttendee"></a>

```typescript
public batchCreateAttendee(input: ChimeBatchCreateAttendeeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchCreateAttendeeRequest`](#aws-cdk-sdk.chime.ChimeBatchCreateAttendeeRequest)

---

##### `batchCreateRoomMembership` <a name="aws-cdk-sdk.chime.ChimeClient.batchCreateRoomMembership"></a>

```typescript
public batchCreateRoomMembership(input: ChimeBatchCreateRoomMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchCreateRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeBatchCreateRoomMembershipRequest)

---

##### `batchDeletePhoneNumber` <a name="aws-cdk-sdk.chime.ChimeClient.batchDeletePhoneNumber"></a>

```typescript
public batchDeletePhoneNumber(input: ChimeBatchDeletePhoneNumberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchDeletePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeBatchDeletePhoneNumberRequest)

---

##### `batchSuspendUser` <a name="aws-cdk-sdk.chime.ChimeClient.batchSuspendUser"></a>

```typescript
public batchSuspendUser(input: ChimeBatchSuspendUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchSuspendUserRequest`](#aws-cdk-sdk.chime.ChimeBatchSuspendUserRequest)

---

##### `batchUnsuspendUser` <a name="aws-cdk-sdk.chime.ChimeClient.batchUnsuspendUser"></a>

```typescript
public batchUnsuspendUser(input: ChimeBatchUnsuspendUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchUnsuspendUserRequest`](#aws-cdk-sdk.chime.ChimeBatchUnsuspendUserRequest)

---

##### `batchUpdatePhoneNumber` <a name="aws-cdk-sdk.chime.ChimeClient.batchUpdatePhoneNumber"></a>

```typescript
public batchUpdatePhoneNumber(input: ChimeBatchUpdatePhoneNumberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchUpdatePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeBatchUpdatePhoneNumberRequest)

---

##### `batchUpdateUser` <a name="aws-cdk-sdk.chime.ChimeClient.batchUpdateUser"></a>

```typescript
public batchUpdateUser(input: ChimeBatchUpdateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchUpdateUserRequest`](#aws-cdk-sdk.chime.ChimeBatchUpdateUserRequest)

---

##### `createAccount` <a name="aws-cdk-sdk.chime.ChimeClient.createAccount"></a>

```typescript
public createAccount(input: ChimeCreateAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAccountRequest`](#aws-cdk-sdk.chime.ChimeCreateAccountRequest)

---

##### `createAppInstance` <a name="aws-cdk-sdk.chime.ChimeClient.createAppInstance"></a>

```typescript
public createAppInstance(input: ChimeCreateAppInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAppInstanceRequest`](#aws-cdk-sdk.chime.ChimeCreateAppInstanceRequest)

---

##### `createAppInstanceAdmin` <a name="aws-cdk-sdk.chime.ChimeClient.createAppInstanceAdmin"></a>

```typescript
public createAppInstanceAdmin(input: ChimeCreateAppInstanceAdminRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminRequest`](#aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminRequest)

---

##### `createAppInstanceUser` <a name="aws-cdk-sdk.chime.ChimeClient.createAppInstanceUser"></a>

```typescript
public createAppInstanceUser(input: ChimeCreateAppInstanceUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeCreateAppInstanceUserRequest)

---

##### `createAttendee` <a name="aws-cdk-sdk.chime.ChimeClient.createAttendee"></a>

```typescript
public createAttendee(input: ChimeCreateAttendeeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAttendeeRequest`](#aws-cdk-sdk.chime.ChimeCreateAttendeeRequest)

---

##### `createBot` <a name="aws-cdk-sdk.chime.ChimeClient.createBot"></a>

```typescript
public createBot(input: ChimeCreateBotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateBotRequest`](#aws-cdk-sdk.chime.ChimeCreateBotRequest)

---

##### `createChannel` <a name="aws-cdk-sdk.chime.ChimeClient.createChannel"></a>

```typescript
public createChannel(input: ChimeCreateChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelRequest)

---

##### `createChannelBan` <a name="aws-cdk-sdk.chime.ChimeClient.createChannelBan"></a>

```typescript
public createChannelBan(input: ChimeCreateChannelBanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelBanRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelBanRequest)

---

##### `createChannelMembership` <a name="aws-cdk-sdk.chime.ChimeClient.createChannelMembership"></a>

```typescript
public createChannelMembership(input: ChimeCreateChannelMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelMembershipRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelMembershipRequest)

---

##### `createChannelModerator` <a name="aws-cdk-sdk.chime.ChimeClient.createChannelModerator"></a>

```typescript
public createChannelModerator(input: ChimeCreateChannelModeratorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelModeratorRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelModeratorRequest)

---

##### `createMeeting` <a name="aws-cdk-sdk.chime.ChimeClient.createMeeting"></a>

```typescript
public createMeeting(input: ChimeCreateMeetingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateMeetingRequest`](#aws-cdk-sdk.chime.ChimeCreateMeetingRequest)

---

##### `createMeetingDialOut` <a name="aws-cdk-sdk.chime.ChimeClient.createMeetingDialOut"></a>

```typescript
public createMeetingDialOut(input: ChimeCreateMeetingDialOutRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateMeetingDialOutRequest`](#aws-cdk-sdk.chime.ChimeCreateMeetingDialOutRequest)

---

##### `createMeetingWithAttendees` <a name="aws-cdk-sdk.chime.ChimeClient.createMeetingWithAttendees"></a>

```typescript
public createMeetingWithAttendees(input: ChimeCreateMeetingWithAttendeesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest`](#aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest)

---

##### `createPhoneNumberOrder` <a name="aws-cdk-sdk.chime.ChimeClient.createPhoneNumberOrder"></a>

```typescript
public createPhoneNumberOrder(input: ChimeCreatePhoneNumberOrderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderRequest`](#aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderRequest)

---

##### `createProxySession` <a name="aws-cdk-sdk.chime.ChimeClient.createProxySession"></a>

```typescript
public createProxySession(input: ChimeCreateProxySessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateProxySessionRequest`](#aws-cdk-sdk.chime.ChimeCreateProxySessionRequest)

---

##### `createRoom` <a name="aws-cdk-sdk.chime.ChimeClient.createRoom"></a>

```typescript
public createRoom(input: ChimeCreateRoomRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateRoomRequest`](#aws-cdk-sdk.chime.ChimeCreateRoomRequest)

---

##### `createRoomMembership` <a name="aws-cdk-sdk.chime.ChimeClient.createRoomMembership"></a>

```typescript
public createRoomMembership(input: ChimeCreateRoomMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest)

---

##### `createSipMediaApplication` <a name="aws-cdk-sdk.chime.ChimeClient.createSipMediaApplication"></a>

```typescript
public createSipMediaApplication(input: ChimeCreateSipMediaApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationRequest`](#aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationRequest)

---

##### `createSipMediaApplicationCall` <a name="aws-cdk-sdk.chime.ChimeClient.createSipMediaApplicationCall"></a>

```typescript
public createSipMediaApplicationCall(input: ChimeCreateSipMediaApplicationCallRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallRequest`](#aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallRequest)

---

##### `createSipRule` <a name="aws-cdk-sdk.chime.ChimeClient.createSipRule"></a>

```typescript
public createSipRule(input: ChimeCreateSipRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateSipRuleRequest`](#aws-cdk-sdk.chime.ChimeCreateSipRuleRequest)

---

##### `createUser` <a name="aws-cdk-sdk.chime.ChimeClient.createUser"></a>

```typescript
public createUser(input: ChimeCreateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateUserRequest`](#aws-cdk-sdk.chime.ChimeCreateUserRequest)

---

##### `createVoiceConnector` <a name="aws-cdk-sdk.chime.ChimeClient.createVoiceConnector"></a>

```typescript
public createVoiceConnector(input: ChimeCreateVoiceConnectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeCreateVoiceConnectorRequest)

---

##### `createVoiceConnectorGroup` <a name="aws-cdk-sdk.chime.ChimeClient.createVoiceConnectorGroup"></a>

```typescript
public createVoiceConnectorGroup(input: ChimeCreateVoiceConnectorGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupRequest)

---

##### `deleteAccount` <a name="aws-cdk-sdk.chime.ChimeClient.deleteAccount"></a>

```typescript
public deleteAccount(input: ChimeDeleteAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteAccountRequest`](#aws-cdk-sdk.chime.ChimeDeleteAccountRequest)

---

##### `deleteAppInstance` <a name="aws-cdk-sdk.chime.ChimeClient.deleteAppInstance"></a>

```typescript
public deleteAppInstance(input: ChimeDeleteAppInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteAppInstanceRequest`](#aws-cdk-sdk.chime.ChimeDeleteAppInstanceRequest)

---

##### `deleteAppInstanceAdmin` <a name="aws-cdk-sdk.chime.ChimeClient.deleteAppInstanceAdmin"></a>

```typescript
public deleteAppInstanceAdmin(input: ChimeDeleteAppInstanceAdminRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteAppInstanceAdminRequest`](#aws-cdk-sdk.chime.ChimeDeleteAppInstanceAdminRequest)

---

##### `deleteAppInstanceStreamingConfigurations` <a name="aws-cdk-sdk.chime.ChimeClient.deleteAppInstanceStreamingConfigurations"></a>

```typescript
public deleteAppInstanceStreamingConfigurations(input: ChimeDeleteAppInstanceStreamingConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteAppInstanceStreamingConfigurationsRequest`](#aws-cdk-sdk.chime.ChimeDeleteAppInstanceStreamingConfigurationsRequest)

---

##### `deleteAppInstanceUser` <a name="aws-cdk-sdk.chime.ChimeClient.deleteAppInstanceUser"></a>

```typescript
public deleteAppInstanceUser(input: ChimeDeleteAppInstanceUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDeleteAppInstanceUserRequest)

---

##### `deleteAttendee` <a name="aws-cdk-sdk.chime.ChimeClient.deleteAttendee"></a>

```typescript
public deleteAttendee(input: ChimeDeleteAttendeeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteAttendeeRequest`](#aws-cdk-sdk.chime.ChimeDeleteAttendeeRequest)

---

##### `deleteChannel` <a name="aws-cdk-sdk.chime.ChimeClient.deleteChannel"></a>

```typescript
public deleteChannel(input: ChimeDeleteChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteChannelRequest`](#aws-cdk-sdk.chime.ChimeDeleteChannelRequest)

---

##### `deleteChannelBan` <a name="aws-cdk-sdk.chime.ChimeClient.deleteChannelBan"></a>

```typescript
public deleteChannelBan(input: ChimeDeleteChannelBanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteChannelBanRequest`](#aws-cdk-sdk.chime.ChimeDeleteChannelBanRequest)

---

##### `deleteChannelMembership` <a name="aws-cdk-sdk.chime.ChimeClient.deleteChannelMembership"></a>

```typescript
public deleteChannelMembership(input: ChimeDeleteChannelMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteChannelMembershipRequest`](#aws-cdk-sdk.chime.ChimeDeleteChannelMembershipRequest)

---

##### `deleteChannelMessage` <a name="aws-cdk-sdk.chime.ChimeClient.deleteChannelMessage"></a>

```typescript
public deleteChannelMessage(input: ChimeDeleteChannelMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeDeleteChannelMessageRequest)

---

##### `deleteChannelModerator` <a name="aws-cdk-sdk.chime.ChimeClient.deleteChannelModerator"></a>

```typescript
public deleteChannelModerator(input: ChimeDeleteChannelModeratorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteChannelModeratorRequest`](#aws-cdk-sdk.chime.ChimeDeleteChannelModeratorRequest)

---

##### `deleteEventsConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.deleteEventsConfiguration"></a>

```typescript
public deleteEventsConfiguration(input: ChimeDeleteEventsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteEventsConfigurationRequest`](#aws-cdk-sdk.chime.ChimeDeleteEventsConfigurationRequest)

---

##### `deleteMeeting` <a name="aws-cdk-sdk.chime.ChimeClient.deleteMeeting"></a>

```typescript
public deleteMeeting(input: ChimeDeleteMeetingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteMeetingRequest`](#aws-cdk-sdk.chime.ChimeDeleteMeetingRequest)

---

##### `deletePhoneNumber` <a name="aws-cdk-sdk.chime.ChimeClient.deletePhoneNumber"></a>

```typescript
public deletePhoneNumber(input: ChimeDeletePhoneNumberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeletePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeDeletePhoneNumberRequest)

---

##### `deleteProxySession` <a name="aws-cdk-sdk.chime.ChimeClient.deleteProxySession"></a>

```typescript
public deleteProxySession(input: ChimeDeleteProxySessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteProxySessionRequest`](#aws-cdk-sdk.chime.ChimeDeleteProxySessionRequest)

---

##### `deleteRoom` <a name="aws-cdk-sdk.chime.ChimeClient.deleteRoom"></a>

```typescript
public deleteRoom(input: ChimeDeleteRoomRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteRoomRequest`](#aws-cdk-sdk.chime.ChimeDeleteRoomRequest)

---

##### `deleteRoomMembership` <a name="aws-cdk-sdk.chime.ChimeClient.deleteRoomMembership"></a>

```typescript
public deleteRoomMembership(input: ChimeDeleteRoomMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeDeleteRoomMembershipRequest)

---

##### `deleteSipMediaApplication` <a name="aws-cdk-sdk.chime.ChimeClient.deleteSipMediaApplication"></a>

```typescript
public deleteSipMediaApplication(input: ChimeDeleteSipMediaApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteSipMediaApplicationRequest`](#aws-cdk-sdk.chime.ChimeDeleteSipMediaApplicationRequest)

---

##### `deleteSipRule` <a name="aws-cdk-sdk.chime.ChimeClient.deleteSipRule"></a>

```typescript
public deleteSipRule(input: ChimeDeleteSipRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteSipRuleRequest`](#aws-cdk-sdk.chime.ChimeDeleteSipRuleRequest)

---

##### `deleteVoiceConnector` <a name="aws-cdk-sdk.chime.ChimeClient.deleteVoiceConnector"></a>

```typescript
public deleteVoiceConnector(input: ChimeDeleteVoiceConnectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorRequest)

---

##### `deleteVoiceConnectorEmergencyCallingConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.deleteVoiceConnectorEmergencyCallingConfiguration"></a>

```typescript
public deleteVoiceConnectorEmergencyCallingConfiguration(input: ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest)

---

##### `deleteVoiceConnectorGroup` <a name="aws-cdk-sdk.chime.ChimeClient.deleteVoiceConnectorGroup"></a>

```typescript
public deleteVoiceConnectorGroup(input: ChimeDeleteVoiceConnectorGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorGroupRequest)

---

##### `deleteVoiceConnectorOrigination` <a name="aws-cdk-sdk.chime.ChimeClient.deleteVoiceConnectorOrigination"></a>

```typescript
public deleteVoiceConnectorOrigination(input: ChimeDeleteVoiceConnectorOriginationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorOriginationRequest`](#aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorOriginationRequest)

---

##### `deleteVoiceConnectorProxy` <a name="aws-cdk-sdk.chime.ChimeClient.deleteVoiceConnectorProxy"></a>

```typescript
public deleteVoiceConnectorProxy(input: ChimeDeleteVoiceConnectorProxyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorProxyRequest`](#aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorProxyRequest)

---

##### `deleteVoiceConnectorStreamingConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.deleteVoiceConnectorStreamingConfiguration"></a>

```typescript
public deleteVoiceConnectorStreamingConfiguration(input: ChimeDeleteVoiceConnectorStreamingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorStreamingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorStreamingConfigurationRequest)

---

##### `deleteVoiceConnectorTermination` <a name="aws-cdk-sdk.chime.ChimeClient.deleteVoiceConnectorTermination"></a>

```typescript
public deleteVoiceConnectorTermination(input: ChimeDeleteVoiceConnectorTerminationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorTerminationRequest`](#aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorTerminationRequest)

---

##### `deleteVoiceConnectorTerminationCredentials` <a name="aws-cdk-sdk.chime.ChimeClient.deleteVoiceConnectorTerminationCredentials"></a>

```typescript
public deleteVoiceConnectorTerminationCredentials(input: ChimeDeleteVoiceConnectorTerminationCredentialsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorTerminationCredentialsRequest`](#aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorTerminationCredentialsRequest)

---

##### `describeAppInstance` <a name="aws-cdk-sdk.chime.ChimeClient.describeAppInstance"></a>

```typescript
public describeAppInstance(input: ChimeDescribeAppInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeAppInstanceRequest`](#aws-cdk-sdk.chime.ChimeDescribeAppInstanceRequest)

---

##### `describeAppInstanceAdmin` <a name="aws-cdk-sdk.chime.ChimeClient.describeAppInstanceAdmin"></a>

```typescript
public describeAppInstanceAdmin(input: ChimeDescribeAppInstanceAdminRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest`](#aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest)

---

##### `describeAppInstanceUser` <a name="aws-cdk-sdk.chime.ChimeClient.describeAppInstanceUser"></a>

```typescript
public describeAppInstanceUser(input: ChimeDescribeAppInstanceUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeAppInstanceUserRequest)

---

##### `describeChannel` <a name="aws-cdk-sdk.chime.ChimeClient.describeChannel"></a>

```typescript
public describeChannel(input: ChimeDescribeChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelRequest)

---

##### `describeChannelBan` <a name="aws-cdk-sdk.chime.ChimeClient.describeChannelBan"></a>

```typescript
public describeChannelBan(input: ChimeDescribeChannelBanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest)

---

##### `describeChannelMembership` <a name="aws-cdk-sdk.chime.ChimeClient.describeChannelMembership"></a>

```typescript
public describeChannelMembership(input: ChimeDescribeChannelMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest)

---

##### `describeChannelMembershipForAppInstanceUser` <a name="aws-cdk-sdk.chime.ChimeClient.describeChannelMembershipForAppInstanceUser"></a>

```typescript
public describeChannelMembershipForAppInstanceUser(input: ChimeDescribeChannelMembershipForAppInstanceUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest)

---

##### `describeChannelModeratedByAppInstanceUser` <a name="aws-cdk-sdk.chime.ChimeClient.describeChannelModeratedByAppInstanceUser"></a>

```typescript
public describeChannelModeratedByAppInstanceUser(input: ChimeDescribeChannelModeratedByAppInstanceUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest)

---

##### `describeChannelModerator` <a name="aws-cdk-sdk.chime.ChimeClient.describeChannelModerator"></a>

```typescript
public describeChannelModerator(input: ChimeDescribeChannelModeratorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest)

---

##### `disassociatePhoneNumberFromUser` <a name="aws-cdk-sdk.chime.ChimeClient.disassociatePhoneNumberFromUser"></a>

```typescript
public disassociatePhoneNumberFromUser(input: ChimeDisassociatePhoneNumberFromUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDisassociatePhoneNumberFromUserRequest`](#aws-cdk-sdk.chime.ChimeDisassociatePhoneNumberFromUserRequest)

---

##### `disassociatePhoneNumbersFromVoiceConnector` <a name="aws-cdk-sdk.chime.ChimeClient.disassociatePhoneNumbersFromVoiceConnector"></a>

```typescript
public disassociatePhoneNumbersFromVoiceConnector(input: ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest)

---

##### `disassociatePhoneNumbersFromVoiceConnectorGroup` <a name="aws-cdk-sdk.chime.ChimeClient.disassociatePhoneNumbersFromVoiceConnectorGroup"></a>

```typescript
public disassociatePhoneNumbersFromVoiceConnectorGroup(input: ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest)

---

##### `disassociateSigninDelegateGroupsFromAccount` <a name="aws-cdk-sdk.chime.ChimeClient.disassociateSigninDelegateGroupsFromAccount"></a>

```typescript
public disassociateSigninDelegateGroupsFromAccount(input: ChimeDisassociateSigninDelegateGroupsFromAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDisassociateSigninDelegateGroupsFromAccountRequest`](#aws-cdk-sdk.chime.ChimeDisassociateSigninDelegateGroupsFromAccountRequest)

---

##### `fetchAccount` <a name="aws-cdk-sdk.chime.ChimeClient.fetchAccount"></a>

```typescript
public fetchAccount(input: ChimeGetAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAccountRequest`](#aws-cdk-sdk.chime.ChimeGetAccountRequest)

---

##### `fetchAccountSettings` <a name="aws-cdk-sdk.chime.ChimeClient.fetchAccountSettings"></a>

```typescript
public fetchAccountSettings(input: ChimeGetAccountSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAccountSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetAccountSettingsRequest)

---

##### `fetchAppInstanceRetentionSettings` <a name="aws-cdk-sdk.chime.ChimeClient.fetchAppInstanceRetentionSettings"></a>

```typescript
public fetchAppInstanceRetentionSettings(input: ChimeGetAppInstanceRetentionSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsRequest)

---

##### `fetchAppInstanceStreamingConfigurations` <a name="aws-cdk-sdk.chime.ChimeClient.fetchAppInstanceStreamingConfigurations"></a>

```typescript
public fetchAppInstanceStreamingConfigurations(input: ChimeGetAppInstanceStreamingConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAppInstanceStreamingConfigurationsRequest`](#aws-cdk-sdk.chime.ChimeGetAppInstanceStreamingConfigurationsRequest)

---

##### `fetchAttendee` <a name="aws-cdk-sdk.chime.ChimeClient.fetchAttendee"></a>

```typescript
public fetchAttendee(input: ChimeGetAttendeeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAttendeeRequest`](#aws-cdk-sdk.chime.ChimeGetAttendeeRequest)

---

##### `fetchBot` <a name="aws-cdk-sdk.chime.ChimeClient.fetchBot"></a>

```typescript
public fetchBot(input: ChimeGetBotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetBotRequest`](#aws-cdk-sdk.chime.ChimeGetBotRequest)

---

##### `fetchChannelMessage` <a name="aws-cdk-sdk.chime.ChimeClient.fetchChannelMessage"></a>

```typescript
public fetchChannelMessage(input: ChimeGetChannelMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeGetChannelMessageRequest)

---

##### `fetchEventsConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.fetchEventsConfiguration"></a>

```typescript
public fetchEventsConfiguration(input: ChimeGetEventsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetEventsConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetEventsConfigurationRequest)

---

##### `fetchGlobalSettings` <a name="aws-cdk-sdk.chime.ChimeClient.fetchGlobalSettings"></a>

```typescript
public fetchGlobalSettings()
```

##### `fetchMeeting` <a name="aws-cdk-sdk.chime.ChimeClient.fetchMeeting"></a>

```typescript
public fetchMeeting(input: ChimeGetMeetingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetMeetingRequest`](#aws-cdk-sdk.chime.ChimeGetMeetingRequest)

---

##### `fetchMessagingSessionEndpoint` <a name="aws-cdk-sdk.chime.ChimeClient.fetchMessagingSessionEndpoint"></a>

```typescript
public fetchMessagingSessionEndpoint()
```

##### `fetchPhoneNumber` <a name="aws-cdk-sdk.chime.ChimeClient.fetchPhoneNumber"></a>

```typescript
public fetchPhoneNumber(input: ChimeGetPhoneNumberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetPhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeGetPhoneNumberRequest)

---

##### `fetchPhoneNumberOrder` <a name="aws-cdk-sdk.chime.ChimeClient.fetchPhoneNumberOrder"></a>

```typescript
public fetchPhoneNumberOrder(input: ChimeGetPhoneNumberOrderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetPhoneNumberOrderRequest`](#aws-cdk-sdk.chime.ChimeGetPhoneNumberOrderRequest)

---

##### `fetchPhoneNumberSettings` <a name="aws-cdk-sdk.chime.ChimeClient.fetchPhoneNumberSettings"></a>

```typescript
public fetchPhoneNumberSettings()
```

##### `fetchProxySession` <a name="aws-cdk-sdk.chime.ChimeClient.fetchProxySession"></a>

```typescript
public fetchProxySession(input: ChimeGetProxySessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetProxySessionRequest`](#aws-cdk-sdk.chime.ChimeGetProxySessionRequest)

---

##### `fetchRetentionSettings` <a name="aws-cdk-sdk.chime.ChimeClient.fetchRetentionSettings"></a>

```typescript
public fetchRetentionSettings(input: ChimeGetRetentionSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest)

---

##### `fetchRoom` <a name="aws-cdk-sdk.chime.ChimeClient.fetchRoom"></a>

```typescript
public fetchRoom(input: ChimeGetRoomRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetRoomRequest`](#aws-cdk-sdk.chime.ChimeGetRoomRequest)

---

##### `fetchSipMediaApplication` <a name="aws-cdk-sdk.chime.ChimeClient.fetchSipMediaApplication"></a>

```typescript
public fetchSipMediaApplication(input: ChimeGetSipMediaApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetSipMediaApplicationRequest`](#aws-cdk-sdk.chime.ChimeGetSipMediaApplicationRequest)

---

##### `fetchSipMediaApplicationLoggingConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.fetchSipMediaApplicationLoggingConfiguration"></a>

```typescript
public fetchSipMediaApplicationLoggingConfiguration(input: ChimeGetSipMediaApplicationLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetSipMediaApplicationLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetSipMediaApplicationLoggingConfigurationRequest)

---

##### `fetchSipRule` <a name="aws-cdk-sdk.chime.ChimeClient.fetchSipRule"></a>

```typescript
public fetchSipRule(input: ChimeGetSipRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetSipRuleRequest`](#aws-cdk-sdk.chime.ChimeGetSipRuleRequest)

---

##### `fetchUser` <a name="aws-cdk-sdk.chime.ChimeClient.fetchUser"></a>

```typescript
public fetchUser(input: ChimeGetUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetUserRequest`](#aws-cdk-sdk.chime.ChimeGetUserRequest)

---

##### `fetchUserSettings` <a name="aws-cdk-sdk.chime.ChimeClient.fetchUserSettings"></a>

```typescript
public fetchUserSettings(input: ChimeGetUserSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetUserSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetUserSettingsRequest)

---

##### `fetchVoiceConnector` <a name="aws-cdk-sdk.chime.ChimeClient.fetchVoiceConnector"></a>

```typescript
public fetchVoiceConnector(input: ChimeGetVoiceConnectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorRequest)

---

##### `fetchVoiceConnectorEmergencyCallingConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.fetchVoiceConnectorEmergencyCallingConfiguration"></a>

```typescript
public fetchVoiceConnectorEmergencyCallingConfiguration(input: ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest)

---

##### `fetchVoiceConnectorGroup` <a name="aws-cdk-sdk.chime.ChimeClient.fetchVoiceConnectorGroup"></a>

```typescript
public fetchVoiceConnectorGroup(input: ChimeGetVoiceConnectorGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorGroupRequest)

---

##### `fetchVoiceConnectorLoggingConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.fetchVoiceConnectorLoggingConfiguration"></a>

```typescript
public fetchVoiceConnectorLoggingConfiguration(input: ChimeGetVoiceConnectorLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorLoggingConfigurationRequest)

---

##### `fetchVoiceConnectorOrigination` <a name="aws-cdk-sdk.chime.ChimeClient.fetchVoiceConnectorOrigination"></a>

```typescript
public fetchVoiceConnectorOrigination(input: ChimeGetVoiceConnectorOriginationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorOriginationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorOriginationRequest)

---

##### `fetchVoiceConnectorProxy` <a name="aws-cdk-sdk.chime.ChimeClient.fetchVoiceConnectorProxy"></a>

```typescript
public fetchVoiceConnectorProxy(input: ChimeGetVoiceConnectorProxyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorProxyRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorProxyRequest)

---

##### `fetchVoiceConnectorStreamingConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.fetchVoiceConnectorStreamingConfiguration"></a>

```typescript
public fetchVoiceConnectorStreamingConfiguration(input: ChimeGetVoiceConnectorStreamingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorStreamingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorStreamingConfigurationRequest)

---

##### `fetchVoiceConnectorTermination` <a name="aws-cdk-sdk.chime.ChimeClient.fetchVoiceConnectorTermination"></a>

```typescript
public fetchVoiceConnectorTermination(input: ChimeGetVoiceConnectorTerminationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationRequest)

---

##### `fetchVoiceConnectorTerminationHealth` <a name="aws-cdk-sdk.chime.ChimeClient.fetchVoiceConnectorTerminationHealth"></a>

```typescript
public fetchVoiceConnectorTerminationHealth(input: ChimeGetVoiceConnectorTerminationHealthRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationHealthRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationHealthRequest)

---

##### `inviteUsers` <a name="aws-cdk-sdk.chime.ChimeClient.inviteUsers"></a>

```typescript
public inviteUsers(input: ChimeInviteUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeInviteUsersRequest`](#aws-cdk-sdk.chime.ChimeInviteUsersRequest)

---

##### `listAccounts` <a name="aws-cdk-sdk.chime.ChimeClient.listAccounts"></a>

```typescript
public listAccounts(input: ChimeListAccountsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAccountsRequest`](#aws-cdk-sdk.chime.ChimeListAccountsRequest)

---

##### `listAppInstanceAdmins` <a name="aws-cdk-sdk.chime.ChimeClient.listAppInstanceAdmins"></a>

```typescript
public listAppInstanceAdmins(input: ChimeListAppInstanceAdminsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAppInstanceAdminsRequest`](#aws-cdk-sdk.chime.ChimeListAppInstanceAdminsRequest)

---

##### `listAppInstances` <a name="aws-cdk-sdk.chime.ChimeClient.listAppInstances"></a>

```typescript
public listAppInstances(input: ChimeListAppInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAppInstancesRequest`](#aws-cdk-sdk.chime.ChimeListAppInstancesRequest)

---

##### `listAppInstanceUsers` <a name="aws-cdk-sdk.chime.ChimeClient.listAppInstanceUsers"></a>

```typescript
public listAppInstanceUsers(input: ChimeListAppInstanceUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAppInstanceUsersRequest`](#aws-cdk-sdk.chime.ChimeListAppInstanceUsersRequest)

---

##### `listAttendees` <a name="aws-cdk-sdk.chime.ChimeClient.listAttendees"></a>

```typescript
public listAttendees(input: ChimeListAttendeesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAttendeesRequest`](#aws-cdk-sdk.chime.ChimeListAttendeesRequest)

---

##### `listAttendeeTags` <a name="aws-cdk-sdk.chime.ChimeClient.listAttendeeTags"></a>

```typescript
public listAttendeeTags(input: ChimeListAttendeeTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAttendeeTagsRequest`](#aws-cdk-sdk.chime.ChimeListAttendeeTagsRequest)

---

##### `listBots` <a name="aws-cdk-sdk.chime.ChimeClient.listBots"></a>

```typescript
public listBots(input: ChimeListBotsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListBotsRequest`](#aws-cdk-sdk.chime.ChimeListBotsRequest)

---

##### `listChannelBans` <a name="aws-cdk-sdk.chime.ChimeClient.listChannelBans"></a>

```typescript
public listChannelBans(input: ChimeListChannelBansRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelBansRequest`](#aws-cdk-sdk.chime.ChimeListChannelBansRequest)

---

##### `listChannelMemberships` <a name="aws-cdk-sdk.chime.ChimeClient.listChannelMemberships"></a>

```typescript
public listChannelMemberships(input: ChimeListChannelMembershipsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelMembershipsRequest`](#aws-cdk-sdk.chime.ChimeListChannelMembershipsRequest)

---

##### `listChannelMembershipsForAppInstanceUser` <a name="aws-cdk-sdk.chime.ChimeClient.listChannelMembershipsForAppInstanceUser"></a>

```typescript
public listChannelMembershipsForAppInstanceUser(input: ChimeListChannelMembershipsForAppInstanceUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserRequest)

---

##### `listChannelMessages` <a name="aws-cdk-sdk.chime.ChimeClient.listChannelMessages"></a>

```typescript
public listChannelMessages(input: ChimeListChannelMessagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelMessagesRequest`](#aws-cdk-sdk.chime.ChimeListChannelMessagesRequest)

---

##### `listChannelModerators` <a name="aws-cdk-sdk.chime.ChimeClient.listChannelModerators"></a>

```typescript
public listChannelModerators(input: ChimeListChannelModeratorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelModeratorsRequest`](#aws-cdk-sdk.chime.ChimeListChannelModeratorsRequest)

---

##### `listChannels` <a name="aws-cdk-sdk.chime.ChimeClient.listChannels"></a>

```typescript
public listChannels(input: ChimeListChannelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelsRequest`](#aws-cdk-sdk.chime.ChimeListChannelsRequest)

---

##### `listChannelsModeratedByAppInstanceUser` <a name="aws-cdk-sdk.chime.ChimeClient.listChannelsModeratedByAppInstanceUser"></a>

```typescript
public listChannelsModeratedByAppInstanceUser(input: ChimeListChannelsModeratedByAppInstanceUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserRequest)

---

##### `listMeetings` <a name="aws-cdk-sdk.chime.ChimeClient.listMeetings"></a>

```typescript
public listMeetings(input: ChimeListMeetingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListMeetingsRequest`](#aws-cdk-sdk.chime.ChimeListMeetingsRequest)

---

##### `listMeetingTags` <a name="aws-cdk-sdk.chime.ChimeClient.listMeetingTags"></a>

```typescript
public listMeetingTags(input: ChimeListMeetingTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListMeetingTagsRequest`](#aws-cdk-sdk.chime.ChimeListMeetingTagsRequest)

---

##### `listPhoneNumberOrders` <a name="aws-cdk-sdk.chime.ChimeClient.listPhoneNumberOrders"></a>

```typescript
public listPhoneNumberOrders(input: ChimeListPhoneNumberOrdersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListPhoneNumberOrdersRequest`](#aws-cdk-sdk.chime.ChimeListPhoneNumberOrdersRequest)

---

##### `listPhoneNumbers` <a name="aws-cdk-sdk.chime.ChimeClient.listPhoneNumbers"></a>

```typescript
public listPhoneNumbers(input: ChimeListPhoneNumbersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest`](#aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest)

---

##### `listProxySessions` <a name="aws-cdk-sdk.chime.ChimeClient.listProxySessions"></a>

```typescript
public listProxySessions(input: ChimeListProxySessionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListProxySessionsRequest`](#aws-cdk-sdk.chime.ChimeListProxySessionsRequest)

---

##### `listRoomMemberships` <a name="aws-cdk-sdk.chime.ChimeClient.listRoomMemberships"></a>

```typescript
public listRoomMemberships(input: ChimeListRoomMembershipsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListRoomMembershipsRequest`](#aws-cdk-sdk.chime.ChimeListRoomMembershipsRequest)

---

##### `listRooms` <a name="aws-cdk-sdk.chime.ChimeClient.listRooms"></a>

```typescript
public listRooms(input: ChimeListRoomsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListRoomsRequest`](#aws-cdk-sdk.chime.ChimeListRoomsRequest)

---

##### `listSipMediaApplications` <a name="aws-cdk-sdk.chime.ChimeClient.listSipMediaApplications"></a>

```typescript
public listSipMediaApplications(input: ChimeListSipMediaApplicationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListSipMediaApplicationsRequest`](#aws-cdk-sdk.chime.ChimeListSipMediaApplicationsRequest)

---

##### `listSipRules` <a name="aws-cdk-sdk.chime.ChimeClient.listSipRules"></a>

```typescript
public listSipRules(input: ChimeListSipRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListSipRulesRequest`](#aws-cdk-sdk.chime.ChimeListSipRulesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.chime.ChimeClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: ChimeListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListTagsForResourceRequest`](#aws-cdk-sdk.chime.ChimeListTagsForResourceRequest)

---

##### `listUsers` <a name="aws-cdk-sdk.chime.ChimeClient.listUsers"></a>

```typescript
public listUsers(input: ChimeListUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListUsersRequest`](#aws-cdk-sdk.chime.ChimeListUsersRequest)

---

##### `listVoiceConnectorGroups` <a name="aws-cdk-sdk.chime.ChimeClient.listVoiceConnectorGroups"></a>

```typescript
public listVoiceConnectorGroups(input: ChimeListVoiceConnectorGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListVoiceConnectorGroupsRequest`](#aws-cdk-sdk.chime.ChimeListVoiceConnectorGroupsRequest)

---

##### `listVoiceConnectors` <a name="aws-cdk-sdk.chime.ChimeClient.listVoiceConnectors"></a>

```typescript
public listVoiceConnectors(input: ChimeListVoiceConnectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListVoiceConnectorsRequest`](#aws-cdk-sdk.chime.ChimeListVoiceConnectorsRequest)

---

##### `listVoiceConnectorTerminationCredentials` <a name="aws-cdk-sdk.chime.ChimeClient.listVoiceConnectorTerminationCredentials"></a>

```typescript
public listVoiceConnectorTerminationCredentials(input: ChimeListVoiceConnectorTerminationCredentialsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListVoiceConnectorTerminationCredentialsRequest`](#aws-cdk-sdk.chime.ChimeListVoiceConnectorTerminationCredentialsRequest)

---

##### `logoutUser` <a name="aws-cdk-sdk.chime.ChimeClient.logoutUser"></a>

```typescript
public logoutUser(input: ChimeLogoutUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeLogoutUserRequest`](#aws-cdk-sdk.chime.ChimeLogoutUserRequest)

---

##### `putAppInstanceRetentionSettings` <a name="aws-cdk-sdk.chime.ChimeClient.putAppInstanceRetentionSettings"></a>

```typescript
public putAppInstanceRetentionSettings(input: ChimePutAppInstanceRetentionSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest)

---

##### `putAppInstanceStreamingConfigurations` <a name="aws-cdk-sdk.chime.ChimeClient.putAppInstanceStreamingConfigurations"></a>

```typescript
public putAppInstanceStreamingConfigurations(input: ChimePutAppInstanceStreamingConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutAppInstanceStreamingConfigurationsRequest`](#aws-cdk-sdk.chime.ChimePutAppInstanceStreamingConfigurationsRequest)

---

##### `putEventsConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.putEventsConfiguration"></a>

```typescript
public putEventsConfiguration(input: ChimePutEventsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest)

---

##### `putRetentionSettings` <a name="aws-cdk-sdk.chime.ChimeClient.putRetentionSettings"></a>

```typescript
public putRetentionSettings(input: ChimePutRetentionSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest)

---

##### `putSipMediaApplicationLoggingConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.putSipMediaApplicationLoggingConfiguration"></a>

```typescript
public putSipMediaApplicationLoggingConfiguration(input: ChimePutSipMediaApplicationLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationRequest)

---

##### `putVoiceConnectorEmergencyCallingConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.putVoiceConnectorEmergencyCallingConfiguration"></a>

```typescript
public putVoiceConnectorEmergencyCallingConfiguration(input: ChimePutVoiceConnectorEmergencyCallingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest)

---

##### `putVoiceConnectorLoggingConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.putVoiceConnectorLoggingConfiguration"></a>

```typescript
public putVoiceConnectorLoggingConfiguration(input: ChimePutVoiceConnectorLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationRequest)

---

##### `putVoiceConnectorOrigination` <a name="aws-cdk-sdk.chime.ChimeClient.putVoiceConnectorOrigination"></a>

```typescript
public putVoiceConnectorOrigination(input: ChimePutVoiceConnectorOriginationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationRequest)

---

##### `putVoiceConnectorProxy` <a name="aws-cdk-sdk.chime.ChimeClient.putVoiceConnectorProxy"></a>

```typescript
public putVoiceConnectorProxy(input: ChimePutVoiceConnectorProxyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest)

---

##### `putVoiceConnectorStreamingConfiguration` <a name="aws-cdk-sdk.chime.ChimeClient.putVoiceConnectorStreamingConfiguration"></a>

```typescript
public putVoiceConnectorStreamingConfiguration(input: ChimePutVoiceConnectorStreamingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationRequest)

---

##### `putVoiceConnectorTermination` <a name="aws-cdk-sdk.chime.ChimeClient.putVoiceConnectorTermination"></a>

```typescript
public putVoiceConnectorTermination(input: ChimePutVoiceConnectorTerminationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationRequest)

---

##### `putVoiceConnectorTerminationCredentials` <a name="aws-cdk-sdk.chime.ChimeClient.putVoiceConnectorTerminationCredentials"></a>

```typescript
public putVoiceConnectorTerminationCredentials(input: ChimePutVoiceConnectorTerminationCredentialsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationCredentialsRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationCredentialsRequest)

---

##### `redactChannelMessage` <a name="aws-cdk-sdk.chime.ChimeClient.redactChannelMessage"></a>

```typescript
public redactChannelMessage(input: ChimeRedactChannelMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRedactChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeRedactChannelMessageRequest)

---

##### `redactConversationMessage` <a name="aws-cdk-sdk.chime.ChimeClient.redactConversationMessage"></a>

```typescript
public redactConversationMessage(input: ChimeRedactConversationMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRedactConversationMessageRequest`](#aws-cdk-sdk.chime.ChimeRedactConversationMessageRequest)

---

##### `redactRoomMessage` <a name="aws-cdk-sdk.chime.ChimeClient.redactRoomMessage"></a>

```typescript
public redactRoomMessage(input: ChimeRedactRoomMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRedactRoomMessageRequest`](#aws-cdk-sdk.chime.ChimeRedactRoomMessageRequest)

---

##### `regenerateSecurityToken` <a name="aws-cdk-sdk.chime.ChimeClient.regenerateSecurityToken"></a>

```typescript
public regenerateSecurityToken(input: ChimeRegenerateSecurityTokenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenRequest`](#aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenRequest)

---

##### `resetPersonalPin` <a name="aws-cdk-sdk.chime.ChimeClient.resetPersonalPin"></a>

```typescript
public resetPersonalPin(input: ChimeResetPersonalPinRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResetPersonalPinRequest`](#aws-cdk-sdk.chime.ChimeResetPersonalPinRequest)

---

##### `restorePhoneNumber` <a name="aws-cdk-sdk.chime.ChimeClient.restorePhoneNumber"></a>

```typescript
public restorePhoneNumber(input: ChimeRestorePhoneNumberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRestorePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeRestorePhoneNumberRequest)

---

##### `searchAvailablePhoneNumbers` <a name="aws-cdk-sdk.chime.ChimeClient.searchAvailablePhoneNumbers"></a>

```typescript
public searchAvailablePhoneNumbers(input: ChimeSearchAvailablePhoneNumbersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest`](#aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest)

---

##### `sendChannelMessage` <a name="aws-cdk-sdk.chime.ChimeClient.sendChannelMessage"></a>

```typescript
public sendChannelMessage(input: ChimeSendChannelMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSendChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeSendChannelMessageRequest)

---

##### `tagAttendee` <a name="aws-cdk-sdk.chime.ChimeClient.tagAttendee"></a>

```typescript
public tagAttendee(input: ChimeTagAttendeeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTagAttendeeRequest`](#aws-cdk-sdk.chime.ChimeTagAttendeeRequest)

---

##### `tagMeeting` <a name="aws-cdk-sdk.chime.ChimeClient.tagMeeting"></a>

```typescript
public tagMeeting(input: ChimeTagMeetingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTagMeetingRequest`](#aws-cdk-sdk.chime.ChimeTagMeetingRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.chime.ChimeClient.tagResource"></a>

```typescript
public tagResource(input: ChimeTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTagResourceRequest`](#aws-cdk-sdk.chime.ChimeTagResourceRequest)

---

##### `untagAttendee` <a name="aws-cdk-sdk.chime.ChimeClient.untagAttendee"></a>

```typescript
public untagAttendee(input: ChimeUntagAttendeeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUntagAttendeeRequest`](#aws-cdk-sdk.chime.ChimeUntagAttendeeRequest)

---

##### `untagMeeting` <a name="aws-cdk-sdk.chime.ChimeClient.untagMeeting"></a>

```typescript
public untagMeeting(input: ChimeUntagMeetingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUntagMeetingRequest`](#aws-cdk-sdk.chime.ChimeUntagMeetingRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.chime.ChimeClient.untagResource"></a>

```typescript
public untagResource(input: ChimeUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUntagResourceRequest`](#aws-cdk-sdk.chime.ChimeUntagResourceRequest)

---

##### `updateAccount` <a name="aws-cdk-sdk.chime.ChimeClient.updateAccount"></a>

```typescript
public updateAccount(input: ChimeUpdateAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateAccountRequest`](#aws-cdk-sdk.chime.ChimeUpdateAccountRequest)

---

##### `updateAccountSettings` <a name="aws-cdk-sdk.chime.ChimeClient.updateAccountSettings"></a>

```typescript
public updateAccountSettings(input: ChimeUpdateAccountSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateAccountSettingsRequest`](#aws-cdk-sdk.chime.ChimeUpdateAccountSettingsRequest)

---

##### `updateAppInstance` <a name="aws-cdk-sdk.chime.ChimeClient.updateAppInstance"></a>

```typescript
public updateAppInstance(input: ChimeUpdateAppInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateAppInstanceRequest`](#aws-cdk-sdk.chime.ChimeUpdateAppInstanceRequest)

---

##### `updateAppInstanceUser` <a name="aws-cdk-sdk.chime.ChimeClient.updateAppInstanceUser"></a>

```typescript
public updateAppInstanceUser(input: ChimeUpdateAppInstanceUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeUpdateAppInstanceUserRequest)

---

##### `updateBot` <a name="aws-cdk-sdk.chime.ChimeClient.updateBot"></a>

```typescript
public updateBot(input: ChimeUpdateBotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateBotRequest`](#aws-cdk-sdk.chime.ChimeUpdateBotRequest)

---

##### `updateChannel` <a name="aws-cdk-sdk.chime.ChimeClient.updateChannel"></a>

```typescript
public updateChannel(input: ChimeUpdateChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateChannelRequest`](#aws-cdk-sdk.chime.ChimeUpdateChannelRequest)

---

##### `updateChannelMessage` <a name="aws-cdk-sdk.chime.ChimeClient.updateChannelMessage"></a>

```typescript
public updateChannelMessage(input: ChimeUpdateChannelMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeUpdateChannelMessageRequest)

---

##### `updateChannelReadMarker` <a name="aws-cdk-sdk.chime.ChimeClient.updateChannelReadMarker"></a>

```typescript
public updateChannelReadMarker(input: ChimeUpdateChannelReadMarkerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateChannelReadMarkerRequest`](#aws-cdk-sdk.chime.ChimeUpdateChannelReadMarkerRequest)

---

##### `updateGlobalSettings` <a name="aws-cdk-sdk.chime.ChimeClient.updateGlobalSettings"></a>

```typescript
public updateGlobalSettings(input: ChimeUpdateGlobalSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateGlobalSettingsRequest`](#aws-cdk-sdk.chime.ChimeUpdateGlobalSettingsRequest)

---

##### `updatePhoneNumber` <a name="aws-cdk-sdk.chime.ChimeClient.updatePhoneNumber"></a>

```typescript
public updatePhoneNumber(input: ChimeUpdatePhoneNumberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest)

---

##### `updatePhoneNumberSettings` <a name="aws-cdk-sdk.chime.ChimeClient.updatePhoneNumberSettings"></a>

```typescript
public updatePhoneNumberSettings(input: ChimeUpdatePhoneNumberSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdatePhoneNumberSettingsRequest`](#aws-cdk-sdk.chime.ChimeUpdatePhoneNumberSettingsRequest)

---

##### `updateProxySession` <a name="aws-cdk-sdk.chime.ChimeClient.updateProxySession"></a>

```typescript
public updateProxySession(input: ChimeUpdateProxySessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest`](#aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest)

---

##### `updateRoom` <a name="aws-cdk-sdk.chime.ChimeClient.updateRoom"></a>

```typescript
public updateRoom(input: ChimeUpdateRoomRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateRoomRequest`](#aws-cdk-sdk.chime.ChimeUpdateRoomRequest)

---

##### `updateRoomMembership` <a name="aws-cdk-sdk.chime.ChimeClient.updateRoomMembership"></a>

```typescript
public updateRoomMembership(input: ChimeUpdateRoomMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest)

---

##### `updateSipMediaApplication` <a name="aws-cdk-sdk.chime.ChimeClient.updateSipMediaApplication"></a>

```typescript
public updateSipMediaApplication(input: ChimeUpdateSipMediaApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationRequest`](#aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationRequest)

---

##### `updateSipRule` <a name="aws-cdk-sdk.chime.ChimeClient.updateSipRule"></a>

```typescript
public updateSipRule(input: ChimeUpdateSipRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest`](#aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest)

---

##### `updateUser` <a name="aws-cdk-sdk.chime.ChimeClient.updateUser"></a>

```typescript
public updateUser(input: ChimeUpdateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateUserRequest`](#aws-cdk-sdk.chime.ChimeUpdateUserRequest)

---

##### `updateUserSettings` <a name="aws-cdk-sdk.chime.ChimeClient.updateUserSettings"></a>

```typescript
public updateUserSettings(input: ChimeUpdateUserSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateUserSettingsRequest`](#aws-cdk-sdk.chime.ChimeUpdateUserSettingsRequest)

---

##### `updateVoiceConnector` <a name="aws-cdk-sdk.chime.ChimeClient.updateVoiceConnector"></a>

```typescript
public updateVoiceConnector(input: ChimeUpdateVoiceConnectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorRequest)

---

##### `updateVoiceConnectorGroup` <a name="aws-cdk-sdk.chime.ChimeClient.updateVoiceConnectorGroup"></a>

```typescript
public updateVoiceConnectorGroup(input: ChimeUpdateVoiceConnectorGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupRequest)

---




## Structs <a name="Structs"></a>

### ChimeAccount <a name="aws-cdk-sdk.chime.ChimeAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAccount: chime.ChimeAccount = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAccount.property.accountId"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAccount.property.awsAccountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAccount.property.name"></a>

- *Type:* `string`

---

##### `accountType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAccount.property.accountType"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAccount.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `defaultLicense`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAccount.property.defaultLicense"></a>

- *Type:* `string`

---

##### `signinDelegateGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAccount.property.signinDelegateGroups"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSigninDelegateGroup`](#aws-cdk-sdk.chime.ChimeSigninDelegateGroup)[]

---

##### `supportedLicenses`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAccount.property.supportedLicenses"></a>

- *Type:* `string`[]

---

### ChimeAccountSettings <a name="aws-cdk-sdk.chime.ChimeAccountSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAccountSettings: chime.ChimeAccountSettings = { ... }
```

##### `disableRemoteControl`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAccountSettings.property.disableRemoteControl"></a>

- *Type:* `boolean`

---

##### `enableDialOut`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAccountSettings.property.enableDialOut"></a>

- *Type:* `boolean`

---

### ChimeAlexaForBusinessMetadata <a name="aws-cdk-sdk.chime.ChimeAlexaForBusinessMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAlexaForBusinessMetadata: chime.ChimeAlexaForBusinessMetadata = { ... }
```

##### `alexaForBusinessRoomArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAlexaForBusinessMetadata.property.alexaForBusinessRoomArn"></a>

- *Type:* `string`

---

##### `isAlexaForBusinessEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAlexaForBusinessMetadata.property.isAlexaForBusinessEnabled"></a>

- *Type:* `boolean`

---

### ChimeAppInstance <a name="aws-cdk-sdk.chime.ChimeAppInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAppInstance: chime.ChimeAppInstance = { ... }
```

##### `appInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstance.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstance.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstance.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstance.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstance.property.name"></a>

- *Type:* `string`

---

### ChimeAppInstanceAdmin <a name="aws-cdk-sdk.chime.ChimeAppInstanceAdmin"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAppInstanceAdmin: chime.ChimeAppInstanceAdmin = { ... }
```

##### `admin`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceAdmin.property.admin"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

##### `appInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceAdmin.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceAdmin.property.createdTimestamp"></a>

- *Type:* `string`

---

### ChimeAppInstanceAdminSummary <a name="aws-cdk-sdk.chime.ChimeAppInstanceAdminSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAppInstanceAdminSummary: chime.ChimeAppInstanceAdminSummary = { ... }
```

##### `admin`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceAdminSummary.property.admin"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

### ChimeAppInstanceRetentionSettings <a name="aws-cdk-sdk.chime.ChimeAppInstanceRetentionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAppInstanceRetentionSettings: chime.ChimeAppInstanceRetentionSettings = { ... }
```

##### `channelRetentionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceRetentionSettings.property.channelRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelRetentionSettings`](#aws-cdk-sdk.chime.ChimeChannelRetentionSettings)

---

### ChimeAppInstanceStreamingConfiguration <a name="aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAppInstanceStreamingConfiguration: chime.ChimeAppInstanceStreamingConfiguration = { ... }
```

##### `appInstanceDataType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration.property.appInstanceDataType"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration.property.resourceArn"></a>

- *Type:* `string`

---

### ChimeAppInstanceSummary <a name="aws-cdk-sdk.chime.ChimeAppInstanceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAppInstanceSummary: chime.ChimeAppInstanceSummary = { ... }
```

##### `appInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceSummary.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceSummary.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceSummary.property.name"></a>

- *Type:* `string`

---

### ChimeAppInstanceUser <a name="aws-cdk-sdk.chime.ChimeAppInstanceUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAppInstanceUser: chime.ChimeAppInstanceUser = { ... }
```

##### `appInstanceUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceUser.property.appInstanceUserArn"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceUser.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceUser.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceUser.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceUser.property.name"></a>

- *Type:* `string`

---

### ChimeAppInstanceUserMembershipSummary <a name="aws-cdk-sdk.chime.ChimeAppInstanceUserMembershipSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAppInstanceUserMembershipSummary: chime.ChimeAppInstanceUserMembershipSummary = { ... }
```

##### `readMarkerTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceUserMembershipSummary.property.readMarkerTimestamp"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceUserMembershipSummary.property.type"></a>

- *Type:* `string`

---

### ChimeAppInstanceUserSummary <a name="aws-cdk-sdk.chime.ChimeAppInstanceUserSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAppInstanceUserSummary: chime.ChimeAppInstanceUserSummary = { ... }
```

##### `appInstanceUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceUserSummary.property.appInstanceUserArn"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceUserSummary.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAppInstanceUserSummary.property.name"></a>

- *Type:* `string`

---

### ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest: chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest = { ... }
```

##### `e164PhoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest.property.e164PhoneNumbers"></a>

- *Type:* `string`[]

---

##### `voiceConnectorGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest.property.voiceConnectorGroupId"></a>

- *Type:* `string`

---

##### `forceAssociate`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest.property.forceAssociate"></a>

- *Type:* `boolean`

---

### ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse: chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse = { ... }
```

##### `phoneNumberErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---

### ChimeAssociatePhoneNumbersWithVoiceConnectorRequest <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAssociatePhoneNumbersWithVoiceConnectorRequest: chime.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest = { ... }
```

##### `e164PhoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest.property.e164PhoneNumbers"></a>

- *Type:* `string`[]

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

##### `forceAssociate`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest.property.forceAssociate"></a>

- *Type:* `boolean`

---

### ChimeAssociatePhoneNumbersWithVoiceConnectorResponse <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAssociatePhoneNumbersWithVoiceConnectorResponse: chime.ChimeAssociatePhoneNumbersWithVoiceConnectorResponse = { ... }
```

##### `phoneNumberErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorResponse.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---

### ChimeAssociatePhoneNumberWithUserRequest <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumberWithUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAssociatePhoneNumberWithUserRequest: chime.ChimeAssociatePhoneNumberWithUserRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumberWithUserRequest.property.accountId"></a>

- *Type:* `string`

---

##### `e164PhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumberWithUserRequest.property.e164PhoneNumber"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumberWithUserRequest.property.userId"></a>

- *Type:* `string`

---

### ChimeAssociatePhoneNumberWithUserResponse <a name="aws-cdk-sdk.chime.ChimeAssociatePhoneNumberWithUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAssociatePhoneNumberWithUserResponse: chime.ChimeAssociatePhoneNumberWithUserResponse = { ... }
```

### ChimeAssociateSigninDelegateGroupsWithAccountRequest <a name="aws-cdk-sdk.chime.ChimeAssociateSigninDelegateGroupsWithAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAssociateSigninDelegateGroupsWithAccountRequest: chime.ChimeAssociateSigninDelegateGroupsWithAccountRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAssociateSigninDelegateGroupsWithAccountRequest.property.accountId"></a>

- *Type:* `string`

---

##### `signinDelegateGroups`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeAssociateSigninDelegateGroupsWithAccountRequest.property.signinDelegateGroups"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSigninDelegateGroup`](#aws-cdk-sdk.chime.ChimeSigninDelegateGroup)[]

---

### ChimeAssociateSigninDelegateGroupsWithAccountResponse <a name="aws-cdk-sdk.chime.ChimeAssociateSigninDelegateGroupsWithAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAssociateSigninDelegateGroupsWithAccountResponse: chime.ChimeAssociateSigninDelegateGroupsWithAccountResponse = { ... }
```

### ChimeAttendee <a name="aws-cdk-sdk.chime.ChimeAttendee"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeAttendee: chime.ChimeAttendee = { ... }
```

##### `attendeeId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAttendee.property.attendeeId"></a>

- *Type:* `string`

---

##### `externalUserId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAttendee.property.externalUserId"></a>

- *Type:* `string`

---

##### `joinToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeAttendee.property.joinToken"></a>

- *Type:* `string`

---

### ChimeBatchCreateAttendeeRequest <a name="aws-cdk-sdk.chime.ChimeBatchCreateAttendeeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchCreateAttendeeRequest: chime.ChimeBatchCreateAttendeeRequest = { ... }
```

##### `attendees`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchCreateAttendeeRequest.property.attendees"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAttendeeRequestItem`](#aws-cdk-sdk.chime.ChimeCreateAttendeeRequestItem)[]

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchCreateAttendeeRequest.property.meetingId"></a>

- *Type:* `string`

---

### ChimeBatchCreateAttendeeResponse <a name="aws-cdk-sdk.chime.ChimeBatchCreateAttendeeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchCreateAttendeeResponse: chime.ChimeBatchCreateAttendeeResponse = { ... }
```

##### `attendees`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBatchCreateAttendeeResponse.property.attendees"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAttendee`](#aws-cdk-sdk.chime.ChimeAttendee)[]

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBatchCreateAttendeeResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAttendeeError`](#aws-cdk-sdk.chime.ChimeCreateAttendeeError)[]

---

### ChimeBatchCreateRoomMembershipRequest <a name="aws-cdk-sdk.chime.ChimeBatchCreateRoomMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchCreateRoomMembershipRequest: chime.ChimeBatchCreateRoomMembershipRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchCreateRoomMembershipRequest.property.accountId"></a>

- *Type:* `string`

---

##### `membershipItemList`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchCreateRoomMembershipRequest.property.membershipItemList"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMembershipItem`](#aws-cdk-sdk.chime.ChimeMembershipItem)[]

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchCreateRoomMembershipRequest.property.roomId"></a>

- *Type:* `string`

---

### ChimeBatchCreateRoomMembershipResponse <a name="aws-cdk-sdk.chime.ChimeBatchCreateRoomMembershipResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchCreateRoomMembershipResponse: chime.ChimeBatchCreateRoomMembershipResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBatchCreateRoomMembershipResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMemberError`](#aws-cdk-sdk.chime.ChimeMemberError)[]

---

### ChimeBatchDeletePhoneNumberRequest <a name="aws-cdk-sdk.chime.ChimeBatchDeletePhoneNumberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchDeletePhoneNumberRequest: chime.ChimeBatchDeletePhoneNumberRequest = { ... }
```

##### `phoneNumberIds`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchDeletePhoneNumberRequest.property.phoneNumberIds"></a>

- *Type:* `string`[]

---

### ChimeBatchDeletePhoneNumberResponse <a name="aws-cdk-sdk.chime.ChimeBatchDeletePhoneNumberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchDeletePhoneNumberResponse: chime.ChimeBatchDeletePhoneNumberResponse = { ... }
```

##### `phoneNumberErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBatchDeletePhoneNumberResponse.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---

### ChimeBatchSuspendUserRequest <a name="aws-cdk-sdk.chime.ChimeBatchSuspendUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchSuspendUserRequest: chime.ChimeBatchSuspendUserRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchSuspendUserRequest.property.accountId"></a>

- *Type:* `string`

---

##### `userIdList`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchSuspendUserRequest.property.userIdList"></a>

- *Type:* `string`[]

---

### ChimeBatchSuspendUserResponse <a name="aws-cdk-sdk.chime.ChimeBatchSuspendUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchSuspendUserResponse: chime.ChimeBatchSuspendUserResponse = { ... }
```

##### `userErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBatchSuspendUserResponse.property.userErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUserError`](#aws-cdk-sdk.chime.ChimeUserError)[]

---

### ChimeBatchUnsuspendUserRequest <a name="aws-cdk-sdk.chime.ChimeBatchUnsuspendUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchUnsuspendUserRequest: chime.ChimeBatchUnsuspendUserRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchUnsuspendUserRequest.property.accountId"></a>

- *Type:* `string`

---

##### `userIdList`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchUnsuspendUserRequest.property.userIdList"></a>

- *Type:* `string`[]

---

### ChimeBatchUnsuspendUserResponse <a name="aws-cdk-sdk.chime.ChimeBatchUnsuspendUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchUnsuspendUserResponse: chime.ChimeBatchUnsuspendUserResponse = { ... }
```

##### `userErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBatchUnsuspendUserResponse.property.userErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUserError`](#aws-cdk-sdk.chime.ChimeUserError)[]

---

### ChimeBatchUpdatePhoneNumberRequest <a name="aws-cdk-sdk.chime.ChimeBatchUpdatePhoneNumberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchUpdatePhoneNumberRequest: chime.ChimeBatchUpdatePhoneNumberRequest = { ... }
```

##### `updatePhoneNumberRequestItems`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchUpdatePhoneNumberRequest.property.updatePhoneNumberRequestItems"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequestItem`](#aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequestItem)[]

---

### ChimeBatchUpdatePhoneNumberResponse <a name="aws-cdk-sdk.chime.ChimeBatchUpdatePhoneNumberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchUpdatePhoneNumberResponse: chime.ChimeBatchUpdatePhoneNumberResponse = { ... }
```

##### `phoneNumberErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBatchUpdatePhoneNumberResponse.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---

### ChimeBatchUpdateUserRequest <a name="aws-cdk-sdk.chime.ChimeBatchUpdateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchUpdateUserRequest: chime.ChimeBatchUpdateUserRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchUpdateUserRequest.property.accountId"></a>

- *Type:* `string`

---

##### `updateUserRequestItems`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeBatchUpdateUserRequest.property.updateUserRequestItems"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateUserRequestItem`](#aws-cdk-sdk.chime.ChimeUpdateUserRequestItem)[]

---

### ChimeBatchUpdateUserResponse <a name="aws-cdk-sdk.chime.ChimeBatchUpdateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBatchUpdateUserResponse: chime.ChimeBatchUpdateUserResponse = { ... }
```

##### `userErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBatchUpdateUserResponse.property.userErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUserError`](#aws-cdk-sdk.chime.ChimeUserError)[]

---

### ChimeBot <a name="aws-cdk-sdk.chime.ChimeBot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBot: chime.ChimeBot = { ... }
```

##### `botEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBot.property.botEmail"></a>

- *Type:* `string`

---

##### `botId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBot.property.botId"></a>

- *Type:* `string`

---

##### `botType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBot.property.botType"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBot.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBot.property.disabled"></a>

- *Type:* `boolean`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBot.property.displayName"></a>

- *Type:* `string`

---

##### `securityToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBot.property.securityToken"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBot.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBot.property.userId"></a>

- *Type:* `string`

---

### ChimeBusinessCallingSettings <a name="aws-cdk-sdk.chime.ChimeBusinessCallingSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeBusinessCallingSettings: chime.ChimeBusinessCallingSettings = { ... }
```

##### `cdrBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeBusinessCallingSettings.property.cdrBucket"></a>

- *Type:* `string`

---

### ChimeChannel <a name="aws-cdk-sdk.chime.ChimeChannel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannel: chime.ChimeChannel = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannel.property.channelArn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannel.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannel.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `lastMessageTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannel.property.lastMessageTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannel.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannel.property.metadata"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannel.property.mode"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannel.property.name"></a>

- *Type:* `string`

---

##### `privacy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannel.property.privacy"></a>

- *Type:* `string`

---

### ChimeChannelBan <a name="aws-cdk-sdk.chime.ChimeChannelBan"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelBan: chime.ChimeChannelBan = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelBan.property.channelArn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelBan.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelBan.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `member`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelBan.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

### ChimeChannelBanSummary <a name="aws-cdk-sdk.chime.ChimeChannelBanSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelBanSummary: chime.ChimeChannelBanSummary = { ... }
```

##### `member`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelBanSummary.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

### ChimeChannelMembership <a name="aws-cdk-sdk.chime.ChimeChannelMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelMembership: chime.ChimeChannelMembership = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMembership.property.channelArn"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMembership.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `invitedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMembership.property.invitedBy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMembership.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `member`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMembership.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMembership.property.type"></a>

- *Type:* `string`

---

### ChimeChannelMembershipForAppInstanceUserSummary <a name="aws-cdk-sdk.chime.ChimeChannelMembershipForAppInstanceUserSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelMembershipForAppInstanceUserSummary: chime.ChimeChannelMembershipForAppInstanceUserSummary = { ... }
```

##### `appInstanceUserMembershipSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMembershipForAppInstanceUserSummary.property.appInstanceUserMembershipSummary"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceUserMembershipSummary`](#aws-cdk-sdk.chime.ChimeAppInstanceUserMembershipSummary)

---

##### `channelSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMembershipForAppInstanceUserSummary.property.channelSummary"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelSummary`](#aws-cdk-sdk.chime.ChimeChannelSummary)

---

### ChimeChannelMembershipSummary <a name="aws-cdk-sdk.chime.ChimeChannelMembershipSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelMembershipSummary: chime.ChimeChannelMembershipSummary = { ... }
```

##### `member`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMembershipSummary.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

### ChimeChannelMessage <a name="aws-cdk-sdk.chime.ChimeChannelMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelMessage: chime.ChimeChannelMessage = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.channelArn"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.content"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `lastEditedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.lastEditedTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.messageId"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.metadata"></a>

- *Type:* `string`

---

##### `persistence`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.persistence"></a>

- *Type:* `string`

---

##### `redacted`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.redacted"></a>

- *Type:* `boolean`

---

##### `sender`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.sender"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessage.property.type"></a>

- *Type:* `string`

---

### ChimeChannelMessageSummary <a name="aws-cdk-sdk.chime.ChimeChannelMessageSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelMessageSummary: chime.ChimeChannelMessageSummary = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessageSummary.property.content"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessageSummary.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `lastEditedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessageSummary.property.lastEditedTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessageSummary.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessageSummary.property.messageId"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessageSummary.property.metadata"></a>

- *Type:* `string`

---

##### `redacted`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessageSummary.property.redacted"></a>

- *Type:* `boolean`

---

##### `sender`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessageSummary.property.sender"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelMessageSummary.property.type"></a>

- *Type:* `string`

---

### ChimeChannelModeratedByAppInstanceUserSummary <a name="aws-cdk-sdk.chime.ChimeChannelModeratedByAppInstanceUserSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelModeratedByAppInstanceUserSummary: chime.ChimeChannelModeratedByAppInstanceUserSummary = { ... }
```

##### `channelSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelModeratedByAppInstanceUserSummary.property.channelSummary"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelSummary`](#aws-cdk-sdk.chime.ChimeChannelSummary)

---

### ChimeChannelModerator <a name="aws-cdk-sdk.chime.ChimeChannelModerator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelModerator: chime.ChimeChannelModerator = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelModerator.property.channelArn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelModerator.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelModerator.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `moderator`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelModerator.property.moderator"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

### ChimeChannelModeratorSummary <a name="aws-cdk-sdk.chime.ChimeChannelModeratorSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelModeratorSummary: chime.ChimeChannelModeratorSummary = { ... }
```

##### `moderator`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelModeratorSummary.property.moderator"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

### ChimeChannelRetentionSettings <a name="aws-cdk-sdk.chime.ChimeChannelRetentionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelRetentionSettings: chime.ChimeChannelRetentionSettings = { ... }
```

##### `retentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelRetentionSettings.property.retentionDays"></a>

- *Type:* `number`

---

### ChimeChannelSummary <a name="aws-cdk-sdk.chime.ChimeChannelSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeChannelSummary: chime.ChimeChannelSummary = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelSummary.property.channelArn"></a>

- *Type:* `string`

---

##### `lastMessageTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelSummary.property.lastMessageTimestamp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelSummary.property.metadata"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelSummary.property.mode"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelSummary.property.name"></a>

- *Type:* `string`

---

##### `privacy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeChannelSummary.property.privacy"></a>

- *Type:* `string`

---

### ChimeConversationRetentionSettings <a name="aws-cdk-sdk.chime.ChimeConversationRetentionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeConversationRetentionSettings: chime.ChimeConversationRetentionSettings = { ... }
```

##### `retentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeConversationRetentionSettings.property.retentionDays"></a>

- *Type:* `number`

---

### ChimeCreateAccountRequest <a name="aws-cdk-sdk.chime.ChimeCreateAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAccountRequest: chime.ChimeCreateAccountRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAccountRequest.property.name"></a>

- *Type:* `string`

---

### ChimeCreateAccountResponse <a name="aws-cdk-sdk.chime.ChimeCreateAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAccountResponse: chime.ChimeCreateAccountResponse = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAccountResponse.property.account"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAccount`](#aws-cdk-sdk.chime.ChimeAccount)

---

### ChimeCreateAppInstanceAdminRequest <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAppInstanceAdminRequest: chime.ChimeCreateAppInstanceAdminRequest = { ... }
```

##### `appInstanceAdminArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminRequest.property.appInstanceAdminArn"></a>

- *Type:* `string`

---

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeCreateAppInstanceAdminResponse <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAppInstanceAdminResponse: chime.ChimeCreateAppInstanceAdminResponse = { ... }
```

##### `appInstanceAdmin`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminResponse.property.appInstanceAdmin"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

##### `appInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminResponse.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeCreateAppInstanceRequest <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAppInstanceRequest: chime.ChimeCreateAppInstanceRequest = { ... }
```

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceRequest.property.name"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceRequest.property.metadata"></a>

- *Type:* `string`

---

### ChimeCreateAppInstanceResponse <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAppInstanceResponse: chime.ChimeCreateAppInstanceResponse = { ... }
```

##### `appInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceResponse.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeCreateAppInstanceUserRequest <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAppInstanceUserRequest: chime.ChimeCreateAppInstanceUserRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceUserRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `appInstanceUserId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceUserRequest.property.appInstanceUserId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceUserRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceUserRequest.property.name"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceUserRequest.property.metadata"></a>

- *Type:* `string`

---

### ChimeCreateAppInstanceUserResponse <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAppInstanceUserResponse: chime.ChimeCreateAppInstanceUserResponse = { ... }
```

##### `appInstanceUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAppInstanceUserResponse.property.appInstanceUserArn"></a>

- *Type:* `string`

---

### ChimeCreateAttendeeError <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAttendeeError: chime.ChimeCreateAttendeeError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeError.property.errorMessage"></a>

- *Type:* `string`

---

##### `externalUserId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeError.property.externalUserId"></a>

- *Type:* `string`

---

### ChimeCreateAttendeeRequest <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAttendeeRequest: chime.ChimeCreateAttendeeRequest = { ... }
```

##### `externalUserId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeRequest.property.externalUserId"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeRequest.property.meetingId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeCreateAttendeeRequestItem <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeRequestItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAttendeeRequestItem: chime.ChimeCreateAttendeeRequestItem = { ... }
```

##### `externalUserId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeRequestItem.property.externalUserId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeRequestItem.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeCreateAttendeeResponse <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateAttendeeResponse: chime.ChimeCreateAttendeeResponse = { ... }
```

##### `attendee`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateAttendeeResponse.property.attendee"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAttendee`](#aws-cdk-sdk.chime.ChimeAttendee)

---

### ChimeCreateBotRequest <a name="aws-cdk-sdk.chime.ChimeCreateBotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateBotRequest: chime.ChimeCreateBotRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateBotRequest.property.accountId"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateBotRequest.property.displayName"></a>

- *Type:* `string`

---

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateBotRequest.property.domain"></a>

- *Type:* `string`

---

### ChimeCreateBotResponse <a name="aws-cdk-sdk.chime.ChimeCreateBotResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateBotResponse: chime.ChimeCreateBotResponse = { ... }
```

##### `bot`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateBotResponse.property.bot"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBot`](#aws-cdk-sdk.chime.ChimeBot)

---

### ChimeCreateChannelBanRequest <a name="aws-cdk-sdk.chime.ChimeCreateChannelBanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateChannelBanRequest: chime.ChimeCreateChannelBanRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelBanRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `memberArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelBanRequest.property.memberArn"></a>

- *Type:* `string`

---

### ChimeCreateChannelBanResponse <a name="aws-cdk-sdk.chime.ChimeCreateChannelBanResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateChannelBanResponse: chime.ChimeCreateChannelBanResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelBanResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `member`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelBanResponse.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

### ChimeCreateChannelMembershipRequest <a name="aws-cdk-sdk.chime.ChimeCreateChannelMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateChannelMembershipRequest: chime.ChimeCreateChannelMembershipRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelMembershipRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `memberArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelMembershipRequest.property.memberArn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelMembershipRequest.property.type"></a>

- *Type:* `string`

---

### ChimeCreateChannelMembershipResponse <a name="aws-cdk-sdk.chime.ChimeCreateChannelMembershipResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateChannelMembershipResponse: chime.ChimeCreateChannelMembershipResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelMembershipResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `member`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelMembershipResponse.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

### ChimeCreateChannelModeratorRequest <a name="aws-cdk-sdk.chime.ChimeCreateChannelModeratorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateChannelModeratorRequest: chime.ChimeCreateChannelModeratorRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelModeratorRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `channelModeratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelModeratorRequest.property.channelModeratorArn"></a>

- *Type:* `string`

---

### ChimeCreateChannelModeratorResponse <a name="aws-cdk-sdk.chime.ChimeCreateChannelModeratorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateChannelModeratorResponse: chime.ChimeCreateChannelModeratorResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelModeratorResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `channelModerator`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelModeratorResponse.property.channelModerator"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeIdentity`](#aws-cdk-sdk.chime.ChimeIdentity)

---

### ChimeCreateChannelRequest <a name="aws-cdk-sdk.chime.ChimeCreateChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateChannelRequest: chime.ChimeCreateChannelRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelRequest.property.name"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelRequest.property.metadata"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelRequest.property.mode"></a>

- *Type:* `string`

---

##### `privacy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelRequest.property.privacy"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeCreateChannelResponse <a name="aws-cdk-sdk.chime.ChimeCreateChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateChannelResponse: chime.ChimeCreateChannelResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateChannelResponse.property.channelArn"></a>

- *Type:* `string`

---

### ChimeCreateMeetingDialOutRequest <a name="aws-cdk-sdk.chime.ChimeCreateMeetingDialOutRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateMeetingDialOutRequest: chime.ChimeCreateMeetingDialOutRequest = { ... }
```

##### `fromPhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingDialOutRequest.property.fromPhoneNumber"></a>

- *Type:* `string`

---

##### `joinToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingDialOutRequest.property.joinToken"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingDialOutRequest.property.meetingId"></a>

- *Type:* `string`

---

##### `toPhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingDialOutRequest.property.toPhoneNumber"></a>

- *Type:* `string`

---

### ChimeCreateMeetingDialOutResponse <a name="aws-cdk-sdk.chime.ChimeCreateMeetingDialOutResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateMeetingDialOutResponse: chime.ChimeCreateMeetingDialOutResponse = { ... }
```

##### `transactionId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingDialOutResponse.property.transactionId"></a>

- *Type:* `string`

---

### ChimeCreateMeetingRequest <a name="aws-cdk-sdk.chime.ChimeCreateMeetingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateMeetingRequest: chime.ChimeCreateMeetingRequest = { ... }
```

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `externalMeetingId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingRequest.property.externalMeetingId"></a>

- *Type:* `string`

---

##### `mediaRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingRequest.property.mediaRegion"></a>

- *Type:* `string`

---

##### `meetingHostId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingRequest.property.meetingHostId"></a>

- *Type:* `string`

---

##### `notificationsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingRequest.property.notificationsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMeetingNotificationConfiguration`](#aws-cdk-sdk.chime.ChimeMeetingNotificationConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeCreateMeetingResponse <a name="aws-cdk-sdk.chime.ChimeCreateMeetingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateMeetingResponse: chime.ChimeCreateMeetingResponse = { ... }
```

##### `meeting`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingResponse.property.meeting"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMeeting`](#aws-cdk-sdk.chime.ChimeMeeting)

---

### ChimeCreateMeetingWithAttendeesRequest <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateMeetingWithAttendeesRequest: chime.ChimeCreateMeetingWithAttendeesRequest = { ... }
```

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `attendees`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest.property.attendees"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAttendeeRequestItem`](#aws-cdk-sdk.chime.ChimeCreateAttendeeRequestItem)[]

---

##### `externalMeetingId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest.property.externalMeetingId"></a>

- *Type:* `string`

---

##### `mediaRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest.property.mediaRegion"></a>

- *Type:* `string`

---

##### `meetingHostId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest.property.meetingHostId"></a>

- *Type:* `string`

---

##### `notificationsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest.property.notificationsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMeetingNotificationConfiguration`](#aws-cdk-sdk.chime.ChimeMeetingNotificationConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeCreateMeetingWithAttendeesResponse <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateMeetingWithAttendeesResponse: chime.ChimeCreateMeetingWithAttendeesResponse = { ... }
```

##### `attendees`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesResponse.property.attendees"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAttendee`](#aws-cdk-sdk.chime.ChimeAttendee)[]

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAttendeeError`](#aws-cdk-sdk.chime.ChimeCreateAttendeeError)[]

---

##### `meeting`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesResponse.property.meeting"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMeeting`](#aws-cdk-sdk.chime.ChimeMeeting)

---

### ChimeCreatePhoneNumberOrderRequest <a name="aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreatePhoneNumberOrderRequest: chime.ChimeCreatePhoneNumberOrderRequest = { ... }
```

##### `e164PhoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderRequest.property.e164PhoneNumbers"></a>

- *Type:* `string`[]

---

##### `productType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderRequest.property.productType"></a>

- *Type:* `string`

---

### ChimeCreatePhoneNumberOrderResponse <a name="aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreatePhoneNumberOrderResponse: chime.ChimeCreatePhoneNumberOrderResponse = { ... }
```

##### `phoneNumberOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderResponse.property.phoneNumberOrder"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberOrder`](#aws-cdk-sdk.chime.ChimePhoneNumberOrder)

---

### ChimeCreateProxySessionRequest <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateProxySessionRequest: chime.ChimeCreateProxySessionRequest = { ... }
```

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionRequest.property.capabilities"></a>

- *Type:* `string`[]

---

##### `participantPhoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionRequest.property.participantPhoneNumbers"></a>

- *Type:* `string`[]

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

##### `expiryMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionRequest.property.expiryMinutes"></a>

- *Type:* `number`

---

##### `geoMatchLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionRequest.property.geoMatchLevel"></a>

- *Type:* `string`

---

##### `geoMatchParams`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionRequest.property.geoMatchParams"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGeoMatchParams`](#aws-cdk-sdk.chime.ChimeGeoMatchParams)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionRequest.property.name"></a>

- *Type:* `string`

---

##### `numberSelectionBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionRequest.property.numberSelectionBehavior"></a>

- *Type:* `string`

---

### ChimeCreateProxySessionResponse <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateProxySessionResponse: chime.ChimeCreateProxySessionResponse = { ... }
```

##### `proxySession`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateProxySessionResponse.property.proxySession"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeProxySession`](#aws-cdk-sdk.chime.ChimeProxySession)

---

### ChimeCreateRoomMembershipRequest <a name="aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateRoomMembershipRequest: chime.ChimeCreateRoomMembershipRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest.property.accountId"></a>

- *Type:* `string`

---

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest.property.memberId"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest.property.roomId"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest.property.role"></a>

- *Type:* `string`

---

### ChimeCreateRoomMembershipResponse <a name="aws-cdk-sdk.chime.ChimeCreateRoomMembershipResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateRoomMembershipResponse: chime.ChimeCreateRoomMembershipResponse = { ... }
```

##### `roomMembership`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateRoomMembershipResponse.property.roomMembership"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRoomMembership`](#aws-cdk-sdk.chime.ChimeRoomMembership)

---

### ChimeCreateRoomRequest <a name="aws-cdk-sdk.chime.ChimeCreateRoomRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateRoomRequest: chime.ChimeCreateRoomRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateRoomRequest.property.accountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateRoomRequest.property.name"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateRoomRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

### ChimeCreateRoomResponse <a name="aws-cdk-sdk.chime.ChimeCreateRoomResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateRoomResponse: chime.ChimeCreateRoomResponse = { ... }
```

##### `room`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateRoomResponse.property.room"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRoom`](#aws-cdk-sdk.chime.ChimeRoom)

---

### ChimeCreateSipMediaApplicationCallRequest <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateSipMediaApplicationCallRequest: chime.ChimeCreateSipMediaApplicationCallRequest = { ... }
```

##### `sipMediaApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallRequest.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

##### `fromPhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallRequest.property.fromPhoneNumber"></a>

- *Type:* `string`

---

##### `toPhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallRequest.property.toPhoneNumber"></a>

- *Type:* `string`

---

### ChimeCreateSipMediaApplicationCallResponse <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateSipMediaApplicationCallResponse: chime.ChimeCreateSipMediaApplicationCallResponse = { ... }
```

##### `sipMediaApplicationCall`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallResponse.property.sipMediaApplicationCall"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplicationCall`](#aws-cdk-sdk.chime.ChimeSipMediaApplicationCall)

---

### ChimeCreateSipMediaApplicationRequest <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateSipMediaApplicationRequest: chime.ChimeCreateSipMediaApplicationRequest = { ... }
```

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationRequest.property.awsRegion"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationRequest.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint`](#aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationRequest.property.name"></a>

- *Type:* `string`

---

### ChimeCreateSipMediaApplicationResponse <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateSipMediaApplicationResponse: chime.ChimeCreateSipMediaApplicationResponse = { ... }
```

##### `sipMediaApplication`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationResponse.property.sipMediaApplication"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplication`](#aws-cdk-sdk.chime.ChimeSipMediaApplication)

---

### ChimeCreateSipRuleRequest <a name="aws-cdk-sdk.chime.ChimeCreateSipRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateSipRuleRequest: chime.ChimeCreateSipRuleRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `targetApplications`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipRuleRequest.property.targetApplications"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRuleTargetApplication`](#aws-cdk-sdk.chime.ChimeSipRuleTargetApplication)[]

---

##### `triggerType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipRuleRequest.property.triggerType"></a>

- *Type:* `string`

---

##### `triggerValue`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipRuleRequest.property.triggerValue"></a>

- *Type:* `string`

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipRuleRequest.property.disabled"></a>

- *Type:* `boolean`

---

### ChimeCreateSipRuleResponse <a name="aws-cdk-sdk.chime.ChimeCreateSipRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateSipRuleResponse: chime.ChimeCreateSipRuleResponse = { ... }
```

##### `sipRule`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateSipRuleResponse.property.sipRule"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRule`](#aws-cdk-sdk.chime.ChimeSipRule)

---

### ChimeCreateUserRequest <a name="aws-cdk-sdk.chime.ChimeCreateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateUserRequest: chime.ChimeCreateUserRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateUserRequest.property.accountId"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateUserRequest.property.email"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateUserRequest.property.username"></a>

- *Type:* `string`

---

##### `userType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateUserRequest.property.userType"></a>

- *Type:* `string`

---

### ChimeCreateUserResponse <a name="aws-cdk-sdk.chime.ChimeCreateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateUserResponse: chime.ChimeCreateUserResponse = { ... }
```

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUser`](#aws-cdk-sdk.chime.ChimeUser)

---

### ChimeCreateVoiceConnectorGroupRequest <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateVoiceConnectorGroupRequest: chime.ChimeCreateVoiceConnectorGroupRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `voiceConnectorItems`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupRequest.property.voiceConnectorItems"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorItem`](#aws-cdk-sdk.chime.ChimeVoiceConnectorItem)[]

---

### ChimeCreateVoiceConnectorGroupResponse <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateVoiceConnectorGroupResponse: chime.ChimeCreateVoiceConnectorGroupResponse = { ... }
```

##### `voiceConnectorGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupResponse.property.voiceConnectorGroup"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorGroup`](#aws-cdk-sdk.chime.ChimeVoiceConnectorGroup)

---

### ChimeCreateVoiceConnectorRequest <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateVoiceConnectorRequest: chime.ChimeCreateVoiceConnectorRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorRequest.property.name"></a>

- *Type:* `string`

---

##### `requireEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorRequest.property.requireEncryption"></a>

- *Type:* `boolean`

---

##### `awsRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorRequest.property.awsRegion"></a>

- *Type:* `string`

---

### ChimeCreateVoiceConnectorResponse <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCreateVoiceConnectorResponse: chime.ChimeCreateVoiceConnectorResponse = { ... }
```

##### `voiceConnector`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCreateVoiceConnectorResponse.property.voiceConnector"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnector`](#aws-cdk-sdk.chime.ChimeVoiceConnector)

---

### ChimeCredential <a name="aws-cdk-sdk.chime.ChimeCredential"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeCredential: chime.ChimeCredential = { ... }
```

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCredential.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeCredential.property.username"></a>

- *Type:* `string`

---

### ChimeDeleteAccountRequest <a name="aws-cdk-sdk.chime.ChimeDeleteAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteAccountRequest: chime.ChimeDeleteAccountRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteAccountRequest.property.accountId"></a>

- *Type:* `string`

---

### ChimeDeleteAccountResponse <a name="aws-cdk-sdk.chime.ChimeDeleteAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteAccountResponse: chime.ChimeDeleteAccountResponse = { ... }
```

### ChimeDeleteAppInstanceAdminRequest <a name="aws-cdk-sdk.chime.ChimeDeleteAppInstanceAdminRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteAppInstanceAdminRequest: chime.ChimeDeleteAppInstanceAdminRequest = { ... }
```

##### `appInstanceAdminArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteAppInstanceAdminRequest.property.appInstanceAdminArn"></a>

- *Type:* `string`

---

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteAppInstanceAdminRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeDeleteAppInstanceRequest <a name="aws-cdk-sdk.chime.ChimeDeleteAppInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteAppInstanceRequest: chime.ChimeDeleteAppInstanceRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteAppInstanceRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeDeleteAppInstanceStreamingConfigurationsRequest <a name="aws-cdk-sdk.chime.ChimeDeleteAppInstanceStreamingConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteAppInstanceStreamingConfigurationsRequest: chime.ChimeDeleteAppInstanceStreamingConfigurationsRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteAppInstanceStreamingConfigurationsRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeDeleteAppInstanceUserRequest <a name="aws-cdk-sdk.chime.ChimeDeleteAppInstanceUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteAppInstanceUserRequest: chime.ChimeDeleteAppInstanceUserRequest = { ... }
```

##### `appInstanceUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteAppInstanceUserRequest.property.appInstanceUserArn"></a>

- *Type:* `string`

---

### ChimeDeleteAttendeeRequest <a name="aws-cdk-sdk.chime.ChimeDeleteAttendeeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteAttendeeRequest: chime.ChimeDeleteAttendeeRequest = { ... }
```

##### `attendeeId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteAttendeeRequest.property.attendeeId"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteAttendeeRequest.property.meetingId"></a>

- *Type:* `string`

---

### ChimeDeleteChannelBanRequest <a name="aws-cdk-sdk.chime.ChimeDeleteChannelBanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteChannelBanRequest: chime.ChimeDeleteChannelBanRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteChannelBanRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `memberArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteChannelBanRequest.property.memberArn"></a>

- *Type:* `string`

---

### ChimeDeleteChannelMembershipRequest <a name="aws-cdk-sdk.chime.ChimeDeleteChannelMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteChannelMembershipRequest: chime.ChimeDeleteChannelMembershipRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteChannelMembershipRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `memberArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteChannelMembershipRequest.property.memberArn"></a>

- *Type:* `string`

---

### ChimeDeleteChannelMessageRequest <a name="aws-cdk-sdk.chime.ChimeDeleteChannelMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteChannelMessageRequest: chime.ChimeDeleteChannelMessageRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteChannelMessageRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteChannelMessageRequest.property.messageId"></a>

- *Type:* `string`

---

### ChimeDeleteChannelModeratorRequest <a name="aws-cdk-sdk.chime.ChimeDeleteChannelModeratorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteChannelModeratorRequest: chime.ChimeDeleteChannelModeratorRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteChannelModeratorRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `channelModeratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteChannelModeratorRequest.property.channelModeratorArn"></a>

- *Type:* `string`

---

### ChimeDeleteChannelRequest <a name="aws-cdk-sdk.chime.ChimeDeleteChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteChannelRequest: chime.ChimeDeleteChannelRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteChannelRequest.property.channelArn"></a>

- *Type:* `string`

---

### ChimeDeleteEventsConfigurationRequest <a name="aws-cdk-sdk.chime.ChimeDeleteEventsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteEventsConfigurationRequest: chime.ChimeDeleteEventsConfigurationRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteEventsConfigurationRequest.property.accountId"></a>

- *Type:* `string`

---

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteEventsConfigurationRequest.property.botId"></a>

- *Type:* `string`

---

### ChimeDeleteMeetingRequest <a name="aws-cdk-sdk.chime.ChimeDeleteMeetingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteMeetingRequest: chime.ChimeDeleteMeetingRequest = { ... }
```

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteMeetingRequest.property.meetingId"></a>

- *Type:* `string`

---

### ChimeDeletePhoneNumberRequest <a name="aws-cdk-sdk.chime.ChimeDeletePhoneNumberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeletePhoneNumberRequest: chime.ChimeDeletePhoneNumberRequest = { ... }
```

##### `phoneNumberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeletePhoneNumberRequest.property.phoneNumberId"></a>

- *Type:* `string`

---

### ChimeDeleteProxySessionRequest <a name="aws-cdk-sdk.chime.ChimeDeleteProxySessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteProxySessionRequest: chime.ChimeDeleteProxySessionRequest = { ... }
```

##### `proxySessionId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteProxySessionRequest.property.proxySessionId"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteProxySessionRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeDeleteRoomMembershipRequest <a name="aws-cdk-sdk.chime.ChimeDeleteRoomMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteRoomMembershipRequest: chime.ChimeDeleteRoomMembershipRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteRoomMembershipRequest.property.accountId"></a>

- *Type:* `string`

---

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteRoomMembershipRequest.property.memberId"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteRoomMembershipRequest.property.roomId"></a>

- *Type:* `string`

---

### ChimeDeleteRoomRequest <a name="aws-cdk-sdk.chime.ChimeDeleteRoomRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteRoomRequest: chime.ChimeDeleteRoomRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteRoomRequest.property.accountId"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteRoomRequest.property.roomId"></a>

- *Type:* `string`

---

### ChimeDeleteSipMediaApplicationRequest <a name="aws-cdk-sdk.chime.ChimeDeleteSipMediaApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteSipMediaApplicationRequest: chime.ChimeDeleteSipMediaApplicationRequest = { ... }
```

##### `sipMediaApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteSipMediaApplicationRequest.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

### ChimeDeleteSipRuleRequest <a name="aws-cdk-sdk.chime.ChimeDeleteSipRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteSipRuleRequest: chime.ChimeDeleteSipRuleRequest = { ... }
```

##### `sipRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteSipRuleRequest.property.sipRuleId"></a>

- *Type:* `string`

---

### ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest: chime.ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeDeleteVoiceConnectorGroupRequest <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteVoiceConnectorGroupRequest: chime.ChimeDeleteVoiceConnectorGroupRequest = { ... }
```

##### `voiceConnectorGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorGroupRequest.property.voiceConnectorGroupId"></a>

- *Type:* `string`

---

### ChimeDeleteVoiceConnectorOriginationRequest <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorOriginationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteVoiceConnectorOriginationRequest: chime.ChimeDeleteVoiceConnectorOriginationRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorOriginationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeDeleteVoiceConnectorProxyRequest <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorProxyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteVoiceConnectorProxyRequest: chime.ChimeDeleteVoiceConnectorProxyRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorProxyRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeDeleteVoiceConnectorRequest <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteVoiceConnectorRequest: chime.ChimeDeleteVoiceConnectorRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeDeleteVoiceConnectorStreamingConfigurationRequest <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorStreamingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteVoiceConnectorStreamingConfigurationRequest: chime.ChimeDeleteVoiceConnectorStreamingConfigurationRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorStreamingConfigurationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeDeleteVoiceConnectorTerminationCredentialsRequest <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorTerminationCredentialsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteVoiceConnectorTerminationCredentialsRequest: chime.ChimeDeleteVoiceConnectorTerminationCredentialsRequest = { ... }
```

##### `usernames`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorTerminationCredentialsRequest.property.usernames"></a>

- *Type:* `string`[]

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorTerminationCredentialsRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeDeleteVoiceConnectorTerminationRequest <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorTerminationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDeleteVoiceConnectorTerminationRequest: chime.ChimeDeleteVoiceConnectorTerminationRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDeleteVoiceConnectorTerminationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeDescribeAppInstanceAdminRequest <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeAppInstanceAdminRequest: chime.ChimeDescribeAppInstanceAdminRequest = { ... }
```

##### `appInstanceAdminArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest.property.appInstanceAdminArn"></a>

- *Type:* `string`

---

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeDescribeAppInstanceAdminResponse <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeAppInstanceAdminResponse: chime.ChimeDescribeAppInstanceAdminResponse = { ... }
```

##### `appInstanceAdmin`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminResponse.property.appInstanceAdmin"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceAdmin`](#aws-cdk-sdk.chime.ChimeAppInstanceAdmin)

---

### ChimeDescribeAppInstanceRequest <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeAppInstanceRequest: chime.ChimeDescribeAppInstanceRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeDescribeAppInstanceResponse <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeAppInstanceResponse: chime.ChimeDescribeAppInstanceResponse = { ... }
```

##### `appInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceResponse.property.appInstance"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstance`](#aws-cdk-sdk.chime.ChimeAppInstance)

---

### ChimeDescribeAppInstanceUserRequest <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeAppInstanceUserRequest: chime.ChimeDescribeAppInstanceUserRequest = { ... }
```

##### `appInstanceUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceUserRequest.property.appInstanceUserArn"></a>

- *Type:* `string`

---

### ChimeDescribeAppInstanceUserResponse <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeAppInstanceUserResponse: chime.ChimeDescribeAppInstanceUserResponse = { ... }
```

##### `appInstanceUser`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeAppInstanceUserResponse.property.appInstanceUser"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceUser`](#aws-cdk-sdk.chime.ChimeAppInstanceUser)

---

### ChimeDescribeChannelBanRequest <a name="aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelBanRequest: chime.ChimeDescribeChannelBanRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `memberArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest.property.memberArn"></a>

- *Type:* `string`

---

### ChimeDescribeChannelBanResponse <a name="aws-cdk-sdk.chime.ChimeDescribeChannelBanResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelBanResponse: chime.ChimeDescribeChannelBanResponse = { ... }
```

##### `channelBan`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelBanResponse.property.channelBan"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelBan`](#aws-cdk-sdk.chime.ChimeChannelBan)

---

### ChimeDescribeChannelMembershipForAppInstanceUserRequest <a name="aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelMembershipForAppInstanceUserRequest: chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest = { ... }
```

##### `appInstanceUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest.property.appInstanceUserArn"></a>

- *Type:* `string`

---

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest.property.channelArn"></a>

- *Type:* `string`

---

### ChimeDescribeChannelMembershipForAppInstanceUserResponse <a name="aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelMembershipForAppInstanceUserResponse: chime.ChimeDescribeChannelMembershipForAppInstanceUserResponse = { ... }
```

##### `channelMembership`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserResponse.property.channelMembership"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelMembershipForAppInstanceUserSummary`](#aws-cdk-sdk.chime.ChimeChannelMembershipForAppInstanceUserSummary)

---

### ChimeDescribeChannelMembershipRequest <a name="aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelMembershipRequest: chime.ChimeDescribeChannelMembershipRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `memberArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest.property.memberArn"></a>

- *Type:* `string`

---

### ChimeDescribeChannelMembershipResponse <a name="aws-cdk-sdk.chime.ChimeDescribeChannelMembershipResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelMembershipResponse: chime.ChimeDescribeChannelMembershipResponse = { ... }
```

##### `channelMembership`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelMembershipResponse.property.channelMembership"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelMembership`](#aws-cdk-sdk.chime.ChimeChannelMembership)

---

### ChimeDescribeChannelModeratedByAppInstanceUserRequest <a name="aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelModeratedByAppInstanceUserRequest: chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest = { ... }
```

##### `appInstanceUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest.property.appInstanceUserArn"></a>

- *Type:* `string`

---

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest.property.channelArn"></a>

- *Type:* `string`

---

### ChimeDescribeChannelModeratedByAppInstanceUserResponse <a name="aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelModeratedByAppInstanceUserResponse: chime.ChimeDescribeChannelModeratedByAppInstanceUserResponse = { ... }
```

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserResponse.property.channel"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelModeratedByAppInstanceUserSummary`](#aws-cdk-sdk.chime.ChimeChannelModeratedByAppInstanceUserSummary)

---

### ChimeDescribeChannelModeratorRequest <a name="aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelModeratorRequest: chime.ChimeDescribeChannelModeratorRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `channelModeratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest.property.channelModeratorArn"></a>

- *Type:* `string`

---

### ChimeDescribeChannelModeratorResponse <a name="aws-cdk-sdk.chime.ChimeDescribeChannelModeratorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelModeratorResponse: chime.ChimeDescribeChannelModeratorResponse = { ... }
```

##### `channelModerator`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelModeratorResponse.property.channelModerator"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelModerator`](#aws-cdk-sdk.chime.ChimeChannelModerator)

---

### ChimeDescribeChannelRequest <a name="aws-cdk-sdk.chime.ChimeDescribeChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelRequest: chime.ChimeDescribeChannelRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelRequest.property.channelArn"></a>

- *Type:* `string`

---

### ChimeDescribeChannelResponse <a name="aws-cdk-sdk.chime.ChimeDescribeChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDescribeChannelResponse: chime.ChimeDescribeChannelResponse = { ... }
```

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDescribeChannelResponse.property.channel"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannel`](#aws-cdk-sdk.chime.ChimeChannel)

---

### ChimeDisassociatePhoneNumberFromUserRequest <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumberFromUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDisassociatePhoneNumberFromUserRequest: chime.ChimeDisassociatePhoneNumberFromUserRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumberFromUserRequest.property.accountId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumberFromUserRequest.property.userId"></a>

- *Type:* `string`

---

### ChimeDisassociatePhoneNumberFromUserResponse <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumberFromUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDisassociatePhoneNumberFromUserResponse: chime.ChimeDisassociatePhoneNumberFromUserResponse = { ... }
```

### ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest: chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest = { ... }
```

##### `e164PhoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest.property.e164PhoneNumbers"></a>

- *Type:* `string`[]

---

##### `voiceConnectorGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest.property.voiceConnectorGroupId"></a>

- *Type:* `string`

---

### ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse: chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse = { ... }
```

##### `phoneNumberErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---

### ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDisassociatePhoneNumbersFromVoiceConnectorRequest: chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest = { ... }
```

##### `e164PhoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest.property.e164PhoneNumbers"></a>

- *Type:* `string`[]

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDisassociatePhoneNumbersFromVoiceConnectorResponse: chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse = { ... }
```

##### `phoneNumberErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---

### ChimeDisassociateSigninDelegateGroupsFromAccountRequest <a name="aws-cdk-sdk.chime.ChimeDisassociateSigninDelegateGroupsFromAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDisassociateSigninDelegateGroupsFromAccountRequest: chime.ChimeDisassociateSigninDelegateGroupsFromAccountRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDisassociateSigninDelegateGroupsFromAccountRequest.property.accountId"></a>

- *Type:* `string`

---

##### `groupNames`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDisassociateSigninDelegateGroupsFromAccountRequest.property.groupNames"></a>

- *Type:* `string`[]

---

### ChimeDisassociateSigninDelegateGroupsFromAccountResponse <a name="aws-cdk-sdk.chime.ChimeDisassociateSigninDelegateGroupsFromAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDisassociateSigninDelegateGroupsFromAccountResponse: chime.ChimeDisassociateSigninDelegateGroupsFromAccountResponse = { ... }
```

### ChimeDnisEmergencyCallingConfiguration <a name="aws-cdk-sdk.chime.ChimeDnisEmergencyCallingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeDnisEmergencyCallingConfiguration: chime.ChimeDnisEmergencyCallingConfiguration = { ... }
```

##### `callingCountry`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDnisEmergencyCallingConfiguration.property.callingCountry"></a>

- *Type:* `string`

---

##### `emergencyPhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeDnisEmergencyCallingConfiguration.property.emergencyPhoneNumber"></a>

- *Type:* `string`

---

##### `testPhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeDnisEmergencyCallingConfiguration.property.testPhoneNumber"></a>

- *Type:* `string`

---

### ChimeEmergencyCallingConfiguration <a name="aws-cdk-sdk.chime.ChimeEmergencyCallingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeEmergencyCallingConfiguration: chime.ChimeEmergencyCallingConfiguration = { ... }
```

##### `dnis`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeEmergencyCallingConfiguration.property.dnis"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDnisEmergencyCallingConfiguration`](#aws-cdk-sdk.chime.ChimeDnisEmergencyCallingConfiguration)[]

---

### ChimeEventsConfiguration <a name="aws-cdk-sdk.chime.ChimeEventsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeEventsConfiguration: chime.ChimeEventsConfiguration = { ... }
```

##### `botId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeEventsConfiguration.property.botId"></a>

- *Type:* `string`

---

##### `lambdaFunctionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeEventsConfiguration.property.lambdaFunctionArn"></a>

- *Type:* `string`

---

##### `outboundEventsHttpsEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeEventsConfiguration.property.outboundEventsHttpsEndpoint"></a>

- *Type:* `string`

---

### ChimeGeoMatchParams <a name="aws-cdk-sdk.chime.ChimeGeoMatchParams"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGeoMatchParams: chime.ChimeGeoMatchParams = { ... }
```

##### `areaCode`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGeoMatchParams.property.areaCode"></a>

- *Type:* `string`

---

##### `country`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGeoMatchParams.property.country"></a>

- *Type:* `string`

---

### ChimeGetAccountRequest <a name="aws-cdk-sdk.chime.ChimeGetAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetAccountRequest: chime.ChimeGetAccountRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetAccountRequest.property.accountId"></a>

- *Type:* `string`

---

### ChimeGetAccountResponse <a name="aws-cdk-sdk.chime.ChimeGetAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetAccountResponse: chime.ChimeGetAccountResponse = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetAccountResponse.property.account"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAccount`](#aws-cdk-sdk.chime.ChimeAccount)

---

### ChimeGetAccountSettingsRequest <a name="aws-cdk-sdk.chime.ChimeGetAccountSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetAccountSettingsRequest: chime.ChimeGetAccountSettingsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetAccountSettingsRequest.property.accountId"></a>

- *Type:* `string`

---

### ChimeGetAccountSettingsResponse <a name="aws-cdk-sdk.chime.ChimeGetAccountSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetAccountSettingsResponse: chime.ChimeGetAccountSettingsResponse = { ... }
```

##### `accountSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetAccountSettingsResponse.property.accountSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAccountSettings`](#aws-cdk-sdk.chime.ChimeAccountSettings)

---

### ChimeGetAppInstanceRetentionSettingsRequest <a name="aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetAppInstanceRetentionSettingsRequest: chime.ChimeGetAppInstanceRetentionSettingsRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeGetAppInstanceRetentionSettingsResponse <a name="aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetAppInstanceRetentionSettingsResponse: chime.ChimeGetAppInstanceRetentionSettingsResponse = { ... }
```

##### `appInstanceRetentionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsResponse.property.appInstanceRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceRetentionSettings`](#aws-cdk-sdk.chime.ChimeAppInstanceRetentionSettings)

---

##### `initiateDeletionTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsResponse.property.initiateDeletionTimestamp"></a>

- *Type:* `string`

---

### ChimeGetAppInstanceStreamingConfigurationsRequest <a name="aws-cdk-sdk.chime.ChimeGetAppInstanceStreamingConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetAppInstanceStreamingConfigurationsRequest: chime.ChimeGetAppInstanceStreamingConfigurationsRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetAppInstanceStreamingConfigurationsRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeGetAppInstanceStreamingConfigurationsResponse <a name="aws-cdk-sdk.chime.ChimeGetAppInstanceStreamingConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetAppInstanceStreamingConfigurationsResponse: chime.ChimeGetAppInstanceStreamingConfigurationsResponse = { ... }
```

##### `appInstanceStreamingConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetAppInstanceStreamingConfigurationsResponse.property.appInstanceStreamingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration`](#aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration)[]

---

### ChimeGetAttendeeRequest <a name="aws-cdk-sdk.chime.ChimeGetAttendeeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetAttendeeRequest: chime.ChimeGetAttendeeRequest = { ... }
```

##### `attendeeId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetAttendeeRequest.property.attendeeId"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetAttendeeRequest.property.meetingId"></a>

- *Type:* `string`

---

### ChimeGetAttendeeResponse <a name="aws-cdk-sdk.chime.ChimeGetAttendeeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetAttendeeResponse: chime.ChimeGetAttendeeResponse = { ... }
```

##### `attendee`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetAttendeeResponse.property.attendee"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAttendee`](#aws-cdk-sdk.chime.ChimeAttendee)

---

### ChimeGetBotRequest <a name="aws-cdk-sdk.chime.ChimeGetBotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetBotRequest: chime.ChimeGetBotRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetBotRequest.property.accountId"></a>

- *Type:* `string`

---

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetBotRequest.property.botId"></a>

- *Type:* `string`

---

### ChimeGetBotResponse <a name="aws-cdk-sdk.chime.ChimeGetBotResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetBotResponse: chime.ChimeGetBotResponse = { ... }
```

##### `bot`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetBotResponse.property.bot"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBot`](#aws-cdk-sdk.chime.ChimeBot)

---

### ChimeGetChannelMessageRequest <a name="aws-cdk-sdk.chime.ChimeGetChannelMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetChannelMessageRequest: chime.ChimeGetChannelMessageRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetChannelMessageRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetChannelMessageRequest.property.messageId"></a>

- *Type:* `string`

---

### ChimeGetChannelMessageResponse <a name="aws-cdk-sdk.chime.ChimeGetChannelMessageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetChannelMessageResponse: chime.ChimeGetChannelMessageResponse = { ... }
```

##### `channelMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetChannelMessageResponse.property.channelMessage"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelMessage`](#aws-cdk-sdk.chime.ChimeChannelMessage)

---

### ChimeGetEventsConfigurationRequest <a name="aws-cdk-sdk.chime.ChimeGetEventsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetEventsConfigurationRequest: chime.ChimeGetEventsConfigurationRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetEventsConfigurationRequest.property.accountId"></a>

- *Type:* `string`

---

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetEventsConfigurationRequest.property.botId"></a>

- *Type:* `string`

---

### ChimeGetEventsConfigurationResponse <a name="aws-cdk-sdk.chime.ChimeGetEventsConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetEventsConfigurationResponse: chime.ChimeGetEventsConfigurationResponse = { ... }
```

##### `eventsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetEventsConfigurationResponse.property.eventsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeEventsConfiguration`](#aws-cdk-sdk.chime.ChimeEventsConfiguration)

---

### ChimeGetGlobalSettingsResponse <a name="aws-cdk-sdk.chime.ChimeGetGlobalSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetGlobalSettingsResponse: chime.ChimeGetGlobalSettingsResponse = { ... }
```

##### `businessCalling`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetGlobalSettingsResponse.property.businessCalling"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBusinessCallingSettings`](#aws-cdk-sdk.chime.ChimeBusinessCallingSettings)

---

##### `voiceConnector`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetGlobalSettingsResponse.property.voiceConnector"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorSettings`](#aws-cdk-sdk.chime.ChimeVoiceConnectorSettings)

---

### ChimeGetMeetingRequest <a name="aws-cdk-sdk.chime.ChimeGetMeetingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetMeetingRequest: chime.ChimeGetMeetingRequest = { ... }
```

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetMeetingRequest.property.meetingId"></a>

- *Type:* `string`

---

### ChimeGetMeetingResponse <a name="aws-cdk-sdk.chime.ChimeGetMeetingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetMeetingResponse: chime.ChimeGetMeetingResponse = { ... }
```

##### `meeting`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetMeetingResponse.property.meeting"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMeeting`](#aws-cdk-sdk.chime.ChimeMeeting)

---

### ChimeGetMessagingSessionEndpointRequest <a name="aws-cdk-sdk.chime.ChimeGetMessagingSessionEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetMessagingSessionEndpointRequest: chime.ChimeGetMessagingSessionEndpointRequest = { ... }
```

### ChimeGetMessagingSessionEndpointResponse <a name="aws-cdk-sdk.chime.ChimeGetMessagingSessionEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetMessagingSessionEndpointResponse: chime.ChimeGetMessagingSessionEndpointResponse = { ... }
```

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetMessagingSessionEndpointResponse.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMessagingSessionEndpoint`](#aws-cdk-sdk.chime.ChimeMessagingSessionEndpoint)

---

### ChimeGetPhoneNumberOrderRequest <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberOrderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetPhoneNumberOrderRequest: chime.ChimeGetPhoneNumberOrderRequest = { ... }
```

##### `phoneNumberOrderId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberOrderRequest.property.phoneNumberOrderId"></a>

- *Type:* `string`

---

### ChimeGetPhoneNumberOrderResponse <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberOrderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetPhoneNumberOrderResponse: chime.ChimeGetPhoneNumberOrderResponse = { ... }
```

##### `phoneNumberOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberOrderResponse.property.phoneNumberOrder"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberOrder`](#aws-cdk-sdk.chime.ChimePhoneNumberOrder)

---

### ChimeGetPhoneNumberRequest <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetPhoneNumberRequest: chime.ChimeGetPhoneNumberRequest = { ... }
```

##### `phoneNumberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberRequest.property.phoneNumberId"></a>

- *Type:* `string`

---

### ChimeGetPhoneNumberResponse <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetPhoneNumberResponse: chime.ChimeGetPhoneNumberResponse = { ... }
```

##### `phoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberResponse.property.phoneNumber"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumber`](#aws-cdk-sdk.chime.ChimePhoneNumber)

---

### ChimeGetPhoneNumberSettingsResponse <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetPhoneNumberSettingsResponse: chime.ChimeGetPhoneNumberSettingsResponse = { ... }
```

##### `callingName`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberSettingsResponse.property.callingName"></a>

- *Type:* `string`

---

##### `callingNameUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetPhoneNumberSettingsResponse.property.callingNameUpdatedTimestamp"></a>

- *Type:* `string`

---

### ChimeGetProxySessionRequest <a name="aws-cdk-sdk.chime.ChimeGetProxySessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetProxySessionRequest: chime.ChimeGetProxySessionRequest = { ... }
```

##### `proxySessionId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetProxySessionRequest.property.proxySessionId"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetProxySessionRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeGetProxySessionResponse <a name="aws-cdk-sdk.chime.ChimeGetProxySessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetProxySessionResponse: chime.ChimeGetProxySessionResponse = { ... }
```

##### `proxySession`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetProxySessionResponse.property.proxySession"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeProxySession`](#aws-cdk-sdk.chime.ChimeProxySession)

---

### ChimeGetRetentionSettingsRequest <a name="aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetRetentionSettingsRequest: chime.ChimeGetRetentionSettingsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest.property.accountId"></a>

- *Type:* `string`

---

### ChimeGetRetentionSettingsResponse <a name="aws-cdk-sdk.chime.ChimeGetRetentionSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetRetentionSettingsResponse: chime.ChimeGetRetentionSettingsResponse = { ... }
```

##### `initiateDeletionTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetRetentionSettingsResponse.property.initiateDeletionTimestamp"></a>

- *Type:* `string`

---

##### `retentionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetRetentionSettingsResponse.property.retentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRetentionSettings`](#aws-cdk-sdk.chime.ChimeRetentionSettings)

---

### ChimeGetRoomRequest <a name="aws-cdk-sdk.chime.ChimeGetRoomRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetRoomRequest: chime.ChimeGetRoomRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetRoomRequest.property.accountId"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetRoomRequest.property.roomId"></a>

- *Type:* `string`

---

### ChimeGetRoomResponse <a name="aws-cdk-sdk.chime.ChimeGetRoomResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetRoomResponse: chime.ChimeGetRoomResponse = { ... }
```

##### `room`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetRoomResponse.property.room"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRoom`](#aws-cdk-sdk.chime.ChimeRoom)

---

### ChimeGetSipMediaApplicationLoggingConfigurationRequest <a name="aws-cdk-sdk.chime.ChimeGetSipMediaApplicationLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetSipMediaApplicationLoggingConfigurationRequest: chime.ChimeGetSipMediaApplicationLoggingConfigurationRequest = { ... }
```

##### `sipMediaApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetSipMediaApplicationLoggingConfigurationRequest.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

### ChimeGetSipMediaApplicationLoggingConfigurationResponse <a name="aws-cdk-sdk.chime.ChimeGetSipMediaApplicationLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetSipMediaApplicationLoggingConfigurationResponse: chime.ChimeGetSipMediaApplicationLoggingConfigurationResponse = { ... }
```

##### `sipMediaApplicationLoggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetSipMediaApplicationLoggingConfigurationResponse.property.sipMediaApplicationLoggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplicationLoggingConfiguration`](#aws-cdk-sdk.chime.ChimeSipMediaApplicationLoggingConfiguration)

---

### ChimeGetSipMediaApplicationRequest <a name="aws-cdk-sdk.chime.ChimeGetSipMediaApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetSipMediaApplicationRequest: chime.ChimeGetSipMediaApplicationRequest = { ... }
```

##### `sipMediaApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetSipMediaApplicationRequest.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

### ChimeGetSipMediaApplicationResponse <a name="aws-cdk-sdk.chime.ChimeGetSipMediaApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetSipMediaApplicationResponse: chime.ChimeGetSipMediaApplicationResponse = { ... }
```

##### `sipMediaApplication`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetSipMediaApplicationResponse.property.sipMediaApplication"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplication`](#aws-cdk-sdk.chime.ChimeSipMediaApplication)

---

### ChimeGetSipRuleRequest <a name="aws-cdk-sdk.chime.ChimeGetSipRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetSipRuleRequest: chime.ChimeGetSipRuleRequest = { ... }
```

##### `sipRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetSipRuleRequest.property.sipRuleId"></a>

- *Type:* `string`

---

### ChimeGetSipRuleResponse <a name="aws-cdk-sdk.chime.ChimeGetSipRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetSipRuleResponse: chime.ChimeGetSipRuleResponse = { ... }
```

##### `sipRule`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetSipRuleResponse.property.sipRule"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRule`](#aws-cdk-sdk.chime.ChimeSipRule)

---

### ChimeGetUserRequest <a name="aws-cdk-sdk.chime.ChimeGetUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetUserRequest: chime.ChimeGetUserRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetUserRequest.property.accountId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetUserRequest.property.userId"></a>

- *Type:* `string`

---

### ChimeGetUserResponse <a name="aws-cdk-sdk.chime.ChimeGetUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetUserResponse: chime.ChimeGetUserResponse = { ... }
```

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUser`](#aws-cdk-sdk.chime.ChimeUser)

---

### ChimeGetUserSettingsRequest <a name="aws-cdk-sdk.chime.ChimeGetUserSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetUserSettingsRequest: chime.ChimeGetUserSettingsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetUserSettingsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetUserSettingsRequest.property.userId"></a>

- *Type:* `string`

---

### ChimeGetUserSettingsResponse <a name="aws-cdk-sdk.chime.ChimeGetUserSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetUserSettingsResponse: chime.ChimeGetUserSettingsResponse = { ... }
```

##### `userSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetUserSettingsResponse.property.userSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUserSettings`](#aws-cdk-sdk.chime.ChimeUserSettings)

---

### ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorEmergencyCallingConfigurationRequest: chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorEmergencyCallingConfigurationResponse: chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse = { ... }
```

##### `emergencyCallingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse.property.emergencyCallingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeEmergencyCallingConfiguration`](#aws-cdk-sdk.chime.ChimeEmergencyCallingConfiguration)

---

### ChimeGetVoiceConnectorGroupRequest <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorGroupRequest: chime.ChimeGetVoiceConnectorGroupRequest = { ... }
```

##### `voiceConnectorGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorGroupRequest.property.voiceConnectorGroupId"></a>

- *Type:* `string`

---

### ChimeGetVoiceConnectorGroupResponse <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorGroupResponse: chime.ChimeGetVoiceConnectorGroupResponse = { ... }
```

##### `voiceConnectorGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorGroupResponse.property.voiceConnectorGroup"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorGroup`](#aws-cdk-sdk.chime.ChimeVoiceConnectorGroup)

---

### ChimeGetVoiceConnectorLoggingConfigurationRequest <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorLoggingConfigurationRequest: chime.ChimeGetVoiceConnectorLoggingConfigurationRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorLoggingConfigurationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeGetVoiceConnectorLoggingConfigurationResponse <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorLoggingConfigurationResponse: chime.ChimeGetVoiceConnectorLoggingConfigurationResponse = { ... }
```

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorLoggingConfigurationResponse.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeLoggingConfiguration`](#aws-cdk-sdk.chime.ChimeLoggingConfiguration)

---

### ChimeGetVoiceConnectorOriginationRequest <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorOriginationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorOriginationRequest: chime.ChimeGetVoiceConnectorOriginationRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorOriginationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeGetVoiceConnectorOriginationResponse <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorOriginationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorOriginationResponse: chime.ChimeGetVoiceConnectorOriginationResponse = { ... }
```

##### `origination`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorOriginationResponse.property.origination"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeOrigination`](#aws-cdk-sdk.chime.ChimeOrigination)

---

### ChimeGetVoiceConnectorProxyRequest <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorProxyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorProxyRequest: chime.ChimeGetVoiceConnectorProxyRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorProxyRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeGetVoiceConnectorProxyResponse <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorProxyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorProxyResponse: chime.ChimeGetVoiceConnectorProxyResponse = { ... }
```

##### `proxy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorProxyResponse.property.proxy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeProxy`](#aws-cdk-sdk.chime.ChimeProxy)

---

### ChimeGetVoiceConnectorRequest <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorRequest: chime.ChimeGetVoiceConnectorRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeGetVoiceConnectorResponse <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorResponse: chime.ChimeGetVoiceConnectorResponse = { ... }
```

##### `voiceConnector`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorResponse.property.voiceConnector"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnector`](#aws-cdk-sdk.chime.ChimeVoiceConnector)

---

### ChimeGetVoiceConnectorStreamingConfigurationRequest <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorStreamingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorStreamingConfigurationRequest: chime.ChimeGetVoiceConnectorStreamingConfigurationRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorStreamingConfigurationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeGetVoiceConnectorStreamingConfigurationResponse <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorStreamingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorStreamingConfigurationResponse: chime.ChimeGetVoiceConnectorStreamingConfigurationResponse = { ... }
```

##### `streamingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorStreamingConfigurationResponse.property.streamingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeStreamingConfiguration`](#aws-cdk-sdk.chime.ChimeStreamingConfiguration)

---

### ChimeGetVoiceConnectorTerminationHealthRequest <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationHealthRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorTerminationHealthRequest: chime.ChimeGetVoiceConnectorTerminationHealthRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationHealthRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeGetVoiceConnectorTerminationHealthResponse <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationHealthResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorTerminationHealthResponse: chime.ChimeGetVoiceConnectorTerminationHealthResponse = { ... }
```

##### `terminationHealth`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationHealthResponse.property.terminationHealth"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTerminationHealth`](#aws-cdk-sdk.chime.ChimeTerminationHealth)

---

### ChimeGetVoiceConnectorTerminationRequest <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorTerminationRequest: chime.ChimeGetVoiceConnectorTerminationRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeGetVoiceConnectorTerminationResponse <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeGetVoiceConnectorTerminationResponse: chime.ChimeGetVoiceConnectorTerminationResponse = { ... }
```

##### `termination`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationResponse.property.termination"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTermination`](#aws-cdk-sdk.chime.ChimeTermination)

---

### ChimeIdentity <a name="aws-cdk-sdk.chime.ChimeIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeIdentity: chime.ChimeIdentity = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeIdentity.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeIdentity.property.name"></a>

- *Type:* `string`

---

### ChimeInvite <a name="aws-cdk-sdk.chime.ChimeInvite"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeInvite: chime.ChimeInvite = { ... }
```

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeInvite.property.emailAddress"></a>

- *Type:* `string`

---

##### `emailStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeInvite.property.emailStatus"></a>

- *Type:* `string`

---

##### `inviteId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeInvite.property.inviteId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeInvite.property.status"></a>

- *Type:* `string`

---

### ChimeInviteUsersRequest <a name="aws-cdk-sdk.chime.ChimeInviteUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeInviteUsersRequest: chime.ChimeInviteUsersRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeInviteUsersRequest.property.accountId"></a>

- *Type:* `string`

---

##### `userEmailList`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeInviteUsersRequest.property.userEmailList"></a>

- *Type:* `string`[]

---

##### `userType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeInviteUsersRequest.property.userType"></a>

- *Type:* `string`

---

### ChimeInviteUsersResponse <a name="aws-cdk-sdk.chime.ChimeInviteUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeInviteUsersResponse: chime.ChimeInviteUsersResponse = { ... }
```

##### `invites`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeInviteUsersResponse.property.invites"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeInvite`](#aws-cdk-sdk.chime.ChimeInvite)[]

---

### ChimeListAccountsRequest <a name="aws-cdk-sdk.chime.ChimeListAccountsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAccountsRequest: chime.ChimeListAccountsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAccountsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAccountsRequest.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAccountsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `userEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAccountsRequest.property.userEmail"></a>

- *Type:* `string`

---

### ChimeListAccountsResponse <a name="aws-cdk-sdk.chime.ChimeListAccountsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAccountsResponse: chime.ChimeListAccountsResponse = { ... }
```

##### `accounts`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAccountsResponse.property.accounts"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAccount`](#aws-cdk-sdk.chime.ChimeAccount)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAccountsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListAppInstanceAdminsRequest <a name="aws-cdk-sdk.chime.ChimeListAppInstanceAdminsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAppInstanceAdminsRequest: chime.ChimeListAppInstanceAdminsRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceAdminsRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceAdminsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceAdminsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListAppInstanceAdminsResponse <a name="aws-cdk-sdk.chime.ChimeListAppInstanceAdminsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAppInstanceAdminsResponse: chime.ChimeListAppInstanceAdminsResponse = { ... }
```

##### `appInstanceAdmins`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceAdminsResponse.property.appInstanceAdmins"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceAdminSummary`](#aws-cdk-sdk.chime.ChimeAppInstanceAdminSummary)[]

---

##### `appInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceAdminsResponse.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceAdminsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListAppInstancesRequest <a name="aws-cdk-sdk.chime.ChimeListAppInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAppInstancesRequest: chime.ChimeListAppInstancesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstancesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstancesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListAppInstancesResponse <a name="aws-cdk-sdk.chime.ChimeListAppInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAppInstancesResponse: chime.ChimeListAppInstancesResponse = { ... }
```

##### `appInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstancesResponse.property.appInstances"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceSummary`](#aws-cdk-sdk.chime.ChimeAppInstanceSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstancesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListAppInstanceUsersRequest <a name="aws-cdk-sdk.chime.ChimeListAppInstanceUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAppInstanceUsersRequest: chime.ChimeListAppInstanceUsersRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceUsersRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceUsersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceUsersRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListAppInstanceUsersResponse <a name="aws-cdk-sdk.chime.ChimeListAppInstanceUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAppInstanceUsersResponse: chime.ChimeListAppInstanceUsersResponse = { ... }
```

##### `appInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceUsersResponse.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `appInstanceUsers`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceUsersResponse.property.appInstanceUsers"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceUserSummary`](#aws-cdk-sdk.chime.ChimeAppInstanceUserSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAppInstanceUsersResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListAttendeesRequest <a name="aws-cdk-sdk.chime.ChimeListAttendeesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAttendeesRequest: chime.ChimeListAttendeesRequest = { ... }
```

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListAttendeesRequest.property.meetingId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAttendeesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAttendeesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListAttendeesResponse <a name="aws-cdk-sdk.chime.ChimeListAttendeesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAttendeesResponse: chime.ChimeListAttendeesResponse = { ... }
```

##### `attendees`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAttendeesResponse.property.attendees"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAttendee`](#aws-cdk-sdk.chime.ChimeAttendee)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAttendeesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListAttendeeTagsRequest <a name="aws-cdk-sdk.chime.ChimeListAttendeeTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAttendeeTagsRequest: chime.ChimeListAttendeeTagsRequest = { ... }
```

##### `attendeeId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListAttendeeTagsRequest.property.attendeeId"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListAttendeeTagsRequest.property.meetingId"></a>

- *Type:* `string`

---

### ChimeListAttendeeTagsResponse <a name="aws-cdk-sdk.chime.ChimeListAttendeeTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListAttendeeTagsResponse: chime.ChimeListAttendeeTagsResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListAttendeeTagsResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeListBotsRequest <a name="aws-cdk-sdk.chime.ChimeListBotsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListBotsRequest: chime.ChimeListBotsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListBotsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListBotsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListBotsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListBotsResponse <a name="aws-cdk-sdk.chime.ChimeListBotsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListBotsResponse: chime.ChimeListBotsResponse = { ... }
```

##### `bots`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListBotsResponse.property.bots"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBot`](#aws-cdk-sdk.chime.ChimeBot)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListBotsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelBansRequest <a name="aws-cdk-sdk.chime.ChimeListChannelBansRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelBansRequest: chime.ChimeListChannelBansRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelBansRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelBansRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelBansRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelBansResponse <a name="aws-cdk-sdk.chime.ChimeListChannelBansResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelBansResponse: chime.ChimeListChannelBansResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelBansResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `channelBans`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelBansResponse.property.channelBans"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelBanSummary`](#aws-cdk-sdk.chime.ChimeChannelBanSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelBansResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelMembershipsForAppInstanceUserRequest <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelMembershipsForAppInstanceUserRequest: chime.ChimeListChannelMembershipsForAppInstanceUserRequest = { ... }
```

##### `appInstanceUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserRequest.property.appInstanceUserArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelMembershipsForAppInstanceUserResponse <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelMembershipsForAppInstanceUserResponse: chime.ChimeListChannelMembershipsForAppInstanceUserResponse = { ... }
```

##### `channelMemberships`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserResponse.property.channelMemberships"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelMembershipForAppInstanceUserSummary`](#aws-cdk-sdk.chime.ChimeChannelMembershipForAppInstanceUserSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelMembershipsRequest <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelMembershipsRequest: chime.ChimeListChannelMembershipsRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsRequest.property.type"></a>

- *Type:* `string`

---

### ChimeListChannelMembershipsResponse <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelMembershipsResponse: chime.ChimeListChannelMembershipsResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `channelMemberships`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsResponse.property.channelMemberships"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelMembershipSummary`](#aws-cdk-sdk.chime.ChimeChannelMembershipSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMembershipsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelMessagesRequest <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelMessagesRequest: chime.ChimeListChannelMessagesRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `notAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesRequest.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesRequest.property.notBefore"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesRequest.property.sortOrder"></a>

- *Type:* `string`

---

### ChimeListChannelMessagesResponse <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelMessagesResponse: chime.ChimeListChannelMessagesResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `channelMessages`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesResponse.property.channelMessages"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelMessageSummary`](#aws-cdk-sdk.chime.ChimeChannelMessageSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelMessagesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelModeratorsRequest <a name="aws-cdk-sdk.chime.ChimeListChannelModeratorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelModeratorsRequest: chime.ChimeListChannelModeratorsRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelModeratorsRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelModeratorsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelModeratorsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelModeratorsResponse <a name="aws-cdk-sdk.chime.ChimeListChannelModeratorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelModeratorsResponse: chime.ChimeListChannelModeratorsResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelModeratorsResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `channelModerators`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelModeratorsResponse.property.channelModerators"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelModeratorSummary`](#aws-cdk-sdk.chime.ChimeChannelModeratorSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelModeratorsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelsModeratedByAppInstanceUserRequest <a name="aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelsModeratedByAppInstanceUserRequest: chime.ChimeListChannelsModeratedByAppInstanceUserRequest = { ... }
```

##### `appInstanceUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserRequest.property.appInstanceUserArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelsModeratedByAppInstanceUserResponse <a name="aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelsModeratedByAppInstanceUserResponse: chime.ChimeListChannelsModeratedByAppInstanceUserResponse = { ... }
```

##### `channels`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserResponse.property.channels"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelModeratedByAppInstanceUserSummary`](#aws-cdk-sdk.chime.ChimeChannelModeratedByAppInstanceUserSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListChannelsRequest <a name="aws-cdk-sdk.chime.ChimeListChannelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelsRequest: chime.ChimeListChannelsRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `privacy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsRequest.property.privacy"></a>

- *Type:* `string`

---

### ChimeListChannelsResponse <a name="aws-cdk-sdk.chime.ChimeListChannelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListChannelsResponse: chime.ChimeListChannelsResponse = { ... }
```

##### `channels`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsResponse.property.channels"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelSummary`](#aws-cdk-sdk.chime.ChimeChannelSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListChannelsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListMeetingsRequest <a name="aws-cdk-sdk.chime.ChimeListMeetingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListMeetingsRequest: chime.ChimeListMeetingsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListMeetingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListMeetingsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListMeetingsResponse <a name="aws-cdk-sdk.chime.ChimeListMeetingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListMeetingsResponse: chime.ChimeListMeetingsResponse = { ... }
```

##### `meetings`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListMeetingsResponse.property.meetings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMeeting`](#aws-cdk-sdk.chime.ChimeMeeting)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListMeetingsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListMeetingTagsRequest <a name="aws-cdk-sdk.chime.ChimeListMeetingTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListMeetingTagsRequest: chime.ChimeListMeetingTagsRequest = { ... }
```

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListMeetingTagsRequest.property.meetingId"></a>

- *Type:* `string`

---

### ChimeListMeetingTagsResponse <a name="aws-cdk-sdk.chime.ChimeListMeetingTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListMeetingTagsResponse: chime.ChimeListMeetingTagsResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListMeetingTagsResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeListPhoneNumberOrdersRequest <a name="aws-cdk-sdk.chime.ChimeListPhoneNumberOrdersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListPhoneNumberOrdersRequest: chime.ChimeListPhoneNumberOrdersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumberOrdersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumberOrdersRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListPhoneNumberOrdersResponse <a name="aws-cdk-sdk.chime.ChimeListPhoneNumberOrdersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListPhoneNumberOrdersResponse: chime.ChimeListPhoneNumberOrdersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumberOrdersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `phoneNumberOrders`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumberOrdersResponse.property.phoneNumberOrders"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberOrder`](#aws-cdk-sdk.chime.ChimePhoneNumberOrder)[]

---

### ChimeListPhoneNumbersRequest <a name="aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListPhoneNumbersRequest: chime.ChimeListPhoneNumbersRequest = { ... }
```

##### `filterName`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest.property.filterName"></a>

- *Type:* `string`

---

##### `filterValue`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest.property.filterValue"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `productType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest.property.productType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest.property.status"></a>

- *Type:* `string`

---

### ChimeListPhoneNumbersResponse <a name="aws-cdk-sdk.chime.ChimeListPhoneNumbersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListPhoneNumbersResponse: chime.ChimeListPhoneNumbersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumbersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `phoneNumbers`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListPhoneNumbersResponse.property.phoneNumbers"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumber`](#aws-cdk-sdk.chime.ChimePhoneNumber)[]

---

### ChimeListProxySessionsRequest <a name="aws-cdk-sdk.chime.ChimeListProxySessionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListProxySessionsRequest: chime.ChimeListProxySessionsRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListProxySessionsRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListProxySessionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListProxySessionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListProxySessionsRequest.property.status"></a>

- *Type:* `string`

---

### ChimeListProxySessionsResponse <a name="aws-cdk-sdk.chime.ChimeListProxySessionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListProxySessionsResponse: chime.ChimeListProxySessionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListProxySessionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `proxySessions`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListProxySessionsResponse.property.proxySessions"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeProxySession`](#aws-cdk-sdk.chime.ChimeProxySession)[]

---

### ChimeListRoomMembershipsRequest <a name="aws-cdk-sdk.chime.ChimeListRoomMembershipsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListRoomMembershipsRequest: chime.ChimeListRoomMembershipsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomMembershipsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomMembershipsRequest.property.roomId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomMembershipsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomMembershipsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListRoomMembershipsResponse <a name="aws-cdk-sdk.chime.ChimeListRoomMembershipsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListRoomMembershipsResponse: chime.ChimeListRoomMembershipsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomMembershipsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `roomMemberships`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomMembershipsResponse.property.roomMemberships"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRoomMembership`](#aws-cdk-sdk.chime.ChimeRoomMembership)[]

---

### ChimeListRoomsRequest <a name="aws-cdk-sdk.chime.ChimeListRoomsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListRoomsRequest: chime.ChimeListRoomsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `memberId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomsRequest.property.memberId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListRoomsResponse <a name="aws-cdk-sdk.chime.ChimeListRoomsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListRoomsResponse: chime.ChimeListRoomsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `rooms`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListRoomsResponse.property.rooms"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRoom`](#aws-cdk-sdk.chime.ChimeRoom)[]

---

### ChimeListSipMediaApplicationsRequest <a name="aws-cdk-sdk.chime.ChimeListSipMediaApplicationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListSipMediaApplicationsRequest: chime.ChimeListSipMediaApplicationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListSipMediaApplicationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListSipMediaApplicationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListSipMediaApplicationsResponse <a name="aws-cdk-sdk.chime.ChimeListSipMediaApplicationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListSipMediaApplicationsResponse: chime.ChimeListSipMediaApplicationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListSipMediaApplicationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `sipMediaApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListSipMediaApplicationsResponse.property.sipMediaApplications"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplication`](#aws-cdk-sdk.chime.ChimeSipMediaApplication)[]

---

### ChimeListSipRulesRequest <a name="aws-cdk-sdk.chime.ChimeListSipRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListSipRulesRequest: chime.ChimeListSipRulesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListSipRulesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListSipRulesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sipMediaApplicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListSipRulesRequest.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

### ChimeListSipRulesResponse <a name="aws-cdk-sdk.chime.ChimeListSipRulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListSipRulesResponse: chime.ChimeListSipRulesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListSipRulesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `sipRules`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListSipRulesResponse.property.sipRules"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRule`](#aws-cdk-sdk.chime.ChimeSipRule)[]

---

### ChimeListTagsForResourceRequest <a name="aws-cdk-sdk.chime.ChimeListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListTagsForResourceRequest: chime.ChimeListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### ChimeListTagsForResourceResponse <a name="aws-cdk-sdk.chime.ChimeListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListTagsForResourceResponse: chime.ChimeListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeListUsersRequest <a name="aws-cdk-sdk.chime.ChimeListUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListUsersRequest: chime.ChimeListUsersRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListUsersRequest.property.accountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListUsersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListUsersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `userEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListUsersRequest.property.userEmail"></a>

- *Type:* `string`

---

##### `userType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListUsersRequest.property.userType"></a>

- *Type:* `string`

---

### ChimeListUsersResponse <a name="aws-cdk-sdk.chime.ChimeListUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListUsersResponse: chime.ChimeListUsersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListUsersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `users`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListUsersResponse.property.users"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUser`](#aws-cdk-sdk.chime.ChimeUser)[]

---

### ChimeListVoiceConnectorGroupsRequest <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListVoiceConnectorGroupsRequest: chime.ChimeListVoiceConnectorGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListVoiceConnectorGroupsResponse <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListVoiceConnectorGroupsResponse: chime.ChimeListVoiceConnectorGroupsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `voiceConnectorGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorGroupsResponse.property.voiceConnectorGroups"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorGroup`](#aws-cdk-sdk.chime.ChimeVoiceConnectorGroup)[]

---

### ChimeListVoiceConnectorsRequest <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListVoiceConnectorsRequest: chime.ChimeListVoiceConnectorsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ChimeListVoiceConnectorsResponse <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListVoiceConnectorsResponse: chime.ChimeListVoiceConnectorsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `voiceConnectors`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorsResponse.property.voiceConnectors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnector`](#aws-cdk-sdk.chime.ChimeVoiceConnector)[]

---

### ChimeListVoiceConnectorTerminationCredentialsRequest <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorTerminationCredentialsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListVoiceConnectorTerminationCredentialsRequest: chime.ChimeListVoiceConnectorTerminationCredentialsRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorTerminationCredentialsRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeListVoiceConnectorTerminationCredentialsResponse <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorTerminationCredentialsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeListVoiceConnectorTerminationCredentialsResponse: chime.ChimeListVoiceConnectorTerminationCredentialsResponse = { ... }
```

##### `usernames`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeListVoiceConnectorTerminationCredentialsResponse.property.usernames"></a>

- *Type:* `string`[]

---

### ChimeLoggingConfiguration <a name="aws-cdk-sdk.chime.ChimeLoggingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeLoggingConfiguration: chime.ChimeLoggingConfiguration = { ... }
```

##### `enableSipLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeLoggingConfiguration.property.enableSipLogs"></a>

- *Type:* `boolean`

---

### ChimeLogoutUserRequest <a name="aws-cdk-sdk.chime.ChimeLogoutUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeLogoutUserRequest: chime.ChimeLogoutUserRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeLogoutUserRequest.property.accountId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeLogoutUserRequest.property.userId"></a>

- *Type:* `string`

---

### ChimeLogoutUserResponse <a name="aws-cdk-sdk.chime.ChimeLogoutUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeLogoutUserResponse: chime.ChimeLogoutUserResponse = { ... }
```

### ChimeMediaPlacement <a name="aws-cdk-sdk.chime.ChimeMediaPlacement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeMediaPlacement: chime.ChimeMediaPlacement = { ... }
```

##### `audioFallbackUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMediaPlacement.property.audioFallbackUrl"></a>

- *Type:* `string`

---

##### `audioHostUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMediaPlacement.property.audioHostUrl"></a>

- *Type:* `string`

---

##### `screenDataUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMediaPlacement.property.screenDataUrl"></a>

- *Type:* `string`

---

##### `screenSharingUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMediaPlacement.property.screenSharingUrl"></a>

- *Type:* `string`

---

##### `screenViewingUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMediaPlacement.property.screenViewingUrl"></a>

- *Type:* `string`

---

##### `signalingUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMediaPlacement.property.signalingUrl"></a>

- *Type:* `string`

---

##### `turnControlUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMediaPlacement.property.turnControlUrl"></a>

- *Type:* `string`

---

### ChimeMeeting <a name="aws-cdk-sdk.chime.ChimeMeeting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeMeeting: chime.ChimeMeeting = { ... }
```

##### `externalMeetingId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMeeting.property.externalMeetingId"></a>

- *Type:* `string`

---

##### `mediaPlacement`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMeeting.property.mediaPlacement"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMediaPlacement`](#aws-cdk-sdk.chime.ChimeMediaPlacement)

---

##### `mediaRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMeeting.property.mediaRegion"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMeeting.property.meetingId"></a>

- *Type:* `string`

---

### ChimeMeetingNotificationConfiguration <a name="aws-cdk-sdk.chime.ChimeMeetingNotificationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeMeetingNotificationConfiguration: chime.ChimeMeetingNotificationConfiguration = { ... }
```

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMeetingNotificationConfiguration.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sqsQueueArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMeetingNotificationConfiguration.property.sqsQueueArn"></a>

- *Type:* `string`

---

### ChimeMember <a name="aws-cdk-sdk.chime.ChimeMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeMember: chime.ChimeMember = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMember.property.accountId"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMember.property.email"></a>

- *Type:* `string`

---

##### `fullName`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMember.property.fullName"></a>

- *Type:* `string`

---

##### `memberId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMember.property.memberId"></a>

- *Type:* `string`

---

##### `memberType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMember.property.memberType"></a>

- *Type:* `string`

---

### ChimeMemberError <a name="aws-cdk-sdk.chime.ChimeMemberError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeMemberError: chime.ChimeMemberError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMemberError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMemberError.property.errorMessage"></a>

- *Type:* `string`

---

##### `memberId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMemberError.property.memberId"></a>

- *Type:* `string`

---

### ChimeMembershipItem <a name="aws-cdk-sdk.chime.ChimeMembershipItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeMembershipItem: chime.ChimeMembershipItem = { ... }
```

##### `memberId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMembershipItem.property.memberId"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMembershipItem.property.role"></a>

- *Type:* `string`

---

### ChimeMessagingSessionEndpoint <a name="aws-cdk-sdk.chime.ChimeMessagingSessionEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeMessagingSessionEndpoint: chime.ChimeMessagingSessionEndpoint = { ... }
```

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeMessagingSessionEndpoint.property.url"></a>

- *Type:* `string`

---

### ChimeOrderedPhoneNumber <a name="aws-cdk-sdk.chime.ChimeOrderedPhoneNumber"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeOrderedPhoneNumber: chime.ChimeOrderedPhoneNumber = { ... }
```

##### `e164PhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeOrderedPhoneNumber.property.e164PhoneNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeOrderedPhoneNumber.property.status"></a>

- *Type:* `string`

---

### ChimeOrigination <a name="aws-cdk-sdk.chime.ChimeOrigination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeOrigination: chime.ChimeOrigination = { ... }
```

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeOrigination.property.disabled"></a>

- *Type:* `boolean`

---

##### `routes`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeOrigination.property.routes"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeOriginationRoute`](#aws-cdk-sdk.chime.ChimeOriginationRoute)[]

---

### ChimeOriginationRoute <a name="aws-cdk-sdk.chime.ChimeOriginationRoute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeOriginationRoute: chime.ChimeOriginationRoute = { ... }
```

##### `host`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeOriginationRoute.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeOriginationRoute.property.port"></a>

- *Type:* `number`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeOriginationRoute.property.priority"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeOriginationRoute.property.protocol"></a>

- *Type:* `string`

---

##### `weight`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeOriginationRoute.property.weight"></a>

- *Type:* `number`

---

### ChimeParticipant <a name="aws-cdk-sdk.chime.ChimeParticipant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeParticipant: chime.ChimeParticipant = { ... }
```

##### `phoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeParticipant.property.phoneNumber"></a>

- *Type:* `string`

---

##### `proxyPhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeParticipant.property.proxyPhoneNumber"></a>

- *Type:* `string`

---

### ChimePhoneNumber <a name="aws-cdk-sdk.chime.ChimePhoneNumber"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePhoneNumber: chime.ChimePhoneNumber = { ... }
```

##### `associations`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.associations"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberAssociation`](#aws-cdk-sdk.chime.ChimePhoneNumberAssociation)[]

---

##### `callingName`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.callingName"></a>

- *Type:* `string`

---

##### `callingNameStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.callingNameStatus"></a>

- *Type:* `string`

---

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.capabilities"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberCapabilities`](#aws-cdk-sdk.chime.ChimePhoneNumberCapabilities)

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `deletionTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.deletionTimestamp"></a>

- *Type:* `string`

---

##### `e164PhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.e164PhoneNumber"></a>

- *Type:* `string`

---

##### `phoneNumberId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.phoneNumberId"></a>

- *Type:* `string`

---

##### `productType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.productType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.type"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumber.property.updatedTimestamp"></a>

- *Type:* `string`

---

### ChimePhoneNumberAssociation <a name="aws-cdk-sdk.chime.ChimePhoneNumberAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePhoneNumberAssociation: chime.ChimePhoneNumberAssociation = { ... }
```

##### `associatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberAssociation.property.associatedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberAssociation.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberAssociation.property.value"></a>

- *Type:* `string`

---

### ChimePhoneNumberCapabilities <a name="aws-cdk-sdk.chime.ChimePhoneNumberCapabilities"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePhoneNumberCapabilities: chime.ChimePhoneNumberCapabilities = { ... }
```

##### `inboundCall`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberCapabilities.property.inboundCall"></a>

- *Type:* `boolean`

---

##### `inboundMms`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberCapabilities.property.inboundMms"></a>

- *Type:* `boolean`

---

##### `inboundSms`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberCapabilities.property.inboundSms"></a>

- *Type:* `boolean`

---

##### `outboundCall`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberCapabilities.property.outboundCall"></a>

- *Type:* `boolean`

---

##### `outboundMms`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberCapabilities.property.outboundMms"></a>

- *Type:* `boolean`

---

##### `outboundSms`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberCapabilities.property.outboundSms"></a>

- *Type:* `boolean`

---

### ChimePhoneNumberError <a name="aws-cdk-sdk.chime.ChimePhoneNumberError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePhoneNumberError: chime.ChimePhoneNumberError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberError.property.errorMessage"></a>

- *Type:* `string`

---

##### `phoneNumberId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberError.property.phoneNumberId"></a>

- *Type:* `string`

---

### ChimePhoneNumberOrder <a name="aws-cdk-sdk.chime.ChimePhoneNumberOrder"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePhoneNumberOrder: chime.ChimePhoneNumberOrder = { ... }
```

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberOrder.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `orderedPhoneNumbers`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberOrder.property.orderedPhoneNumbers"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeOrderedPhoneNumber`](#aws-cdk-sdk.chime.ChimeOrderedPhoneNumber)[]

---

##### `phoneNumberOrderId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberOrder.property.phoneNumberOrderId"></a>

- *Type:* `string`

---

##### `productType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberOrder.property.productType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberOrder.property.status"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePhoneNumberOrder.property.updatedTimestamp"></a>

- *Type:* `string`

---

### ChimeProxy <a name="aws-cdk-sdk.chime.ChimeProxy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeProxy: chime.ChimeProxy = { ... }
```

##### `defaultSessionExpiryMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxy.property.defaultSessionExpiryMinutes"></a>

- *Type:* `number`

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxy.property.disabled"></a>

- *Type:* `boolean`

---

##### `fallBackPhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxy.property.fallBackPhoneNumber"></a>

- *Type:* `string`

---

##### `phoneNumberCountries`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxy.property.phoneNumberCountries"></a>

- *Type:* `string`[]

---

### ChimeProxySession <a name="aws-cdk-sdk.chime.ChimeProxySession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeProxySession: chime.ChimeProxySession = { ... }
```

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.capabilities"></a>

- *Type:* `string`[]

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.endedTimestamp"></a>

- *Type:* `string`

---

##### `expiryMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.expiryMinutes"></a>

- *Type:* `number`

---

##### `geoMatchLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.geoMatchLevel"></a>

- *Type:* `string`

---

##### `geoMatchParams`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.geoMatchParams"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGeoMatchParams`](#aws-cdk-sdk.chime.ChimeGeoMatchParams)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.name"></a>

- *Type:* `string`

---

##### `numberSelectionBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.numberSelectionBehavior"></a>

- *Type:* `string`

---

##### `participants`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.participants"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeParticipant`](#aws-cdk-sdk.chime.ChimeParticipant)[]

---

##### `proxySessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.proxySessionId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.status"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeProxySession.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimePutAppInstanceRetentionSettingsRequest <a name="aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutAppInstanceRetentionSettingsRequest: chime.ChimePutAppInstanceRetentionSettingsRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `appInstanceRetentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest.property.appInstanceRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceRetentionSettings`](#aws-cdk-sdk.chime.ChimeAppInstanceRetentionSettings)

---

### ChimePutAppInstanceRetentionSettingsResponse <a name="aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutAppInstanceRetentionSettingsResponse: chime.ChimePutAppInstanceRetentionSettingsResponse = { ... }
```

##### `appInstanceRetentionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsResponse.property.appInstanceRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceRetentionSettings`](#aws-cdk-sdk.chime.ChimeAppInstanceRetentionSettings)

---

##### `initiateDeletionTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsResponse.property.initiateDeletionTimestamp"></a>

- *Type:* `string`

---

### ChimePutAppInstanceStreamingConfigurationsRequest <a name="aws-cdk-sdk.chime.ChimePutAppInstanceStreamingConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutAppInstanceStreamingConfigurationsRequest: chime.ChimePutAppInstanceStreamingConfigurationsRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutAppInstanceStreamingConfigurationsRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `appInstanceStreamingConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutAppInstanceStreamingConfigurationsRequest.property.appInstanceStreamingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration`](#aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration)[]

---

### ChimePutAppInstanceStreamingConfigurationsResponse <a name="aws-cdk-sdk.chime.ChimePutAppInstanceStreamingConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutAppInstanceStreamingConfigurationsResponse: chime.ChimePutAppInstanceStreamingConfigurationsResponse = { ... }
```

##### `appInstanceStreamingConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutAppInstanceStreamingConfigurationsResponse.property.appInstanceStreamingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration`](#aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration)[]

---

### ChimePutEventsConfigurationRequest <a name="aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutEventsConfigurationRequest: chime.ChimePutEventsConfigurationRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest.property.accountId"></a>

- *Type:* `string`

---

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest.property.botId"></a>

- *Type:* `string`

---

##### `lambdaFunctionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest.property.lambdaFunctionArn"></a>

- *Type:* `string`

---

##### `outboundEventsHttpsEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest.property.outboundEventsHttpsEndpoint"></a>

- *Type:* `string`

---

### ChimePutEventsConfigurationResponse <a name="aws-cdk-sdk.chime.ChimePutEventsConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutEventsConfigurationResponse: chime.ChimePutEventsConfigurationResponse = { ... }
```

##### `eventsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutEventsConfigurationResponse.property.eventsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeEventsConfiguration`](#aws-cdk-sdk.chime.ChimeEventsConfiguration)

---

### ChimePutRetentionSettingsRequest <a name="aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutRetentionSettingsRequest: chime.ChimePutRetentionSettingsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `retentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest.property.retentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRetentionSettings`](#aws-cdk-sdk.chime.ChimeRetentionSettings)

---

### ChimePutRetentionSettingsResponse <a name="aws-cdk-sdk.chime.ChimePutRetentionSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutRetentionSettingsResponse: chime.ChimePutRetentionSettingsResponse = { ... }
```

##### `initiateDeletionTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutRetentionSettingsResponse.property.initiateDeletionTimestamp"></a>

- *Type:* `string`

---

##### `retentionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutRetentionSettingsResponse.property.retentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRetentionSettings`](#aws-cdk-sdk.chime.ChimeRetentionSettings)

---

### ChimePutSipMediaApplicationLoggingConfigurationRequest <a name="aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutSipMediaApplicationLoggingConfigurationRequest: chime.ChimePutSipMediaApplicationLoggingConfigurationRequest = { ... }
```

##### `sipMediaApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationRequest.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

##### `sipMediaApplicationLoggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationRequest.property.sipMediaApplicationLoggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplicationLoggingConfiguration`](#aws-cdk-sdk.chime.ChimeSipMediaApplicationLoggingConfiguration)

---

### ChimePutSipMediaApplicationLoggingConfigurationResponse <a name="aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutSipMediaApplicationLoggingConfigurationResponse: chime.ChimePutSipMediaApplicationLoggingConfigurationResponse = { ... }
```

##### `sipMediaApplicationLoggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationResponse.property.sipMediaApplicationLoggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplicationLoggingConfiguration`](#aws-cdk-sdk.chime.ChimeSipMediaApplicationLoggingConfiguration)

---

### ChimePutVoiceConnectorEmergencyCallingConfigurationRequest <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorEmergencyCallingConfigurationRequest: chime.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest = { ... }
```

##### `emergencyCallingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest.property.emergencyCallingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeEmergencyCallingConfiguration`](#aws-cdk-sdk.chime.ChimeEmergencyCallingConfiguration)

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimePutVoiceConnectorEmergencyCallingConfigurationResponse <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorEmergencyCallingConfigurationResponse: chime.ChimePutVoiceConnectorEmergencyCallingConfigurationResponse = { ... }
```

##### `emergencyCallingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationResponse.property.emergencyCallingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeEmergencyCallingConfiguration`](#aws-cdk-sdk.chime.ChimeEmergencyCallingConfiguration)

---

### ChimePutVoiceConnectorLoggingConfigurationRequest <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorLoggingConfigurationRequest: chime.ChimePutVoiceConnectorLoggingConfigurationRequest = { ... }
```

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationRequest.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeLoggingConfiguration`](#aws-cdk-sdk.chime.ChimeLoggingConfiguration)

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimePutVoiceConnectorLoggingConfigurationResponse <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorLoggingConfigurationResponse: chime.ChimePutVoiceConnectorLoggingConfigurationResponse = { ... }
```

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationResponse.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeLoggingConfiguration`](#aws-cdk-sdk.chime.ChimeLoggingConfiguration)

---

### ChimePutVoiceConnectorOriginationRequest <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorOriginationRequest: chime.ChimePutVoiceConnectorOriginationRequest = { ... }
```

##### `origination`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationRequest.property.origination"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeOrigination`](#aws-cdk-sdk.chime.ChimeOrigination)

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimePutVoiceConnectorOriginationResponse <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorOriginationResponse: chime.ChimePutVoiceConnectorOriginationResponse = { ... }
```

##### `origination`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationResponse.property.origination"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeOrigination`](#aws-cdk-sdk.chime.ChimeOrigination)

---

### ChimePutVoiceConnectorProxyRequest <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorProxyRequest: chime.ChimePutVoiceConnectorProxyRequest = { ... }
```

##### `defaultSessionExpiryMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest.property.defaultSessionExpiryMinutes"></a>

- *Type:* `number`

---

##### `phoneNumberPoolCountries`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest.property.phoneNumberPoolCountries"></a>

- *Type:* `string`[]

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest.property.disabled"></a>

- *Type:* `boolean`

---

##### `fallBackPhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest.property.fallBackPhoneNumber"></a>

- *Type:* `string`

---

### ChimePutVoiceConnectorProxyResponse <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorProxyResponse: chime.ChimePutVoiceConnectorProxyResponse = { ... }
```

##### `proxy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyResponse.property.proxy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeProxy`](#aws-cdk-sdk.chime.ChimeProxy)

---

### ChimePutVoiceConnectorStreamingConfigurationRequest <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorStreamingConfigurationRequest: chime.ChimePutVoiceConnectorStreamingConfigurationRequest = { ... }
```

##### `streamingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationRequest.property.streamingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeStreamingConfiguration`](#aws-cdk-sdk.chime.ChimeStreamingConfiguration)

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimePutVoiceConnectorStreamingConfigurationResponse <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorStreamingConfigurationResponse: chime.ChimePutVoiceConnectorStreamingConfigurationResponse = { ... }
```

##### `streamingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationResponse.property.streamingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeStreamingConfiguration`](#aws-cdk-sdk.chime.ChimeStreamingConfiguration)

---

### ChimePutVoiceConnectorTerminationCredentialsRequest <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationCredentialsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorTerminationCredentialsRequest: chime.ChimePutVoiceConnectorTerminationCredentialsRequest = { ... }
```

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationCredentialsRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationCredentialsRequest.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCredential`](#aws-cdk-sdk.chime.ChimeCredential)[]

---

### ChimePutVoiceConnectorTerminationRequest <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorTerminationRequest: chime.ChimePutVoiceConnectorTerminationRequest = { ... }
```

##### `termination`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationRequest.property.termination"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTermination`](#aws-cdk-sdk.chime.ChimeTermination)

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimePutVoiceConnectorTerminationResponse <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimePutVoiceConnectorTerminationResponse: chime.ChimePutVoiceConnectorTerminationResponse = { ... }
```

##### `termination`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationResponse.property.termination"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTermination`](#aws-cdk-sdk.chime.ChimeTermination)

---

### ChimeRedactChannelMessageRequest <a name="aws-cdk-sdk.chime.ChimeRedactChannelMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRedactChannelMessageRequest: chime.ChimeRedactChannelMessageRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRedactChannelMessageRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRedactChannelMessageRequest.property.messageId"></a>

- *Type:* `string`

---

### ChimeRedactChannelMessageResponse <a name="aws-cdk-sdk.chime.ChimeRedactChannelMessageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRedactChannelMessageResponse: chime.ChimeRedactChannelMessageResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRedactChannelMessageResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRedactChannelMessageResponse.property.messageId"></a>

- *Type:* `string`

---

### ChimeRedactConversationMessageRequest <a name="aws-cdk-sdk.chime.ChimeRedactConversationMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRedactConversationMessageRequest: chime.ChimeRedactConversationMessageRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRedactConversationMessageRequest.property.accountId"></a>

- *Type:* `string`

---

##### `conversationId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRedactConversationMessageRequest.property.conversationId"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRedactConversationMessageRequest.property.messageId"></a>

- *Type:* `string`

---

### ChimeRedactConversationMessageResponse <a name="aws-cdk-sdk.chime.ChimeRedactConversationMessageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRedactConversationMessageResponse: chime.ChimeRedactConversationMessageResponse = { ... }
```

### ChimeRedactRoomMessageRequest <a name="aws-cdk-sdk.chime.ChimeRedactRoomMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRedactRoomMessageRequest: chime.ChimeRedactRoomMessageRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRedactRoomMessageRequest.property.accountId"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRedactRoomMessageRequest.property.messageId"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRedactRoomMessageRequest.property.roomId"></a>

- *Type:* `string`

---

### ChimeRedactRoomMessageResponse <a name="aws-cdk-sdk.chime.ChimeRedactRoomMessageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRedactRoomMessageResponse: chime.ChimeRedactRoomMessageResponse = { ... }
```

### ChimeRegenerateSecurityTokenRequest <a name="aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRegenerateSecurityTokenRequest: chime.ChimeRegenerateSecurityTokenRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenRequest.property.accountId"></a>

- *Type:* `string`

---

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenRequest.property.botId"></a>

- *Type:* `string`

---

### ChimeRegenerateSecurityTokenResponse <a name="aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRegenerateSecurityTokenResponse: chime.ChimeRegenerateSecurityTokenResponse = { ... }
```

##### `bot`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenResponse.property.bot"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBot`](#aws-cdk-sdk.chime.ChimeBot)

---

### ChimeResetPersonalPinRequest <a name="aws-cdk-sdk.chime.ChimeResetPersonalPinRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeResetPersonalPinRequest: chime.ChimeResetPersonalPinRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResetPersonalPinRequest.property.accountId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResetPersonalPinRequest.property.userId"></a>

- *Type:* `string`

---

### ChimeResetPersonalPinResponse <a name="aws-cdk-sdk.chime.ChimeResetPersonalPinResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeResetPersonalPinResponse: chime.ChimeResetPersonalPinResponse = { ... }
```

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeResetPersonalPinResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUser`](#aws-cdk-sdk.chime.ChimeUser)

---

### ChimeRestorePhoneNumberRequest <a name="aws-cdk-sdk.chime.ChimeRestorePhoneNumberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRestorePhoneNumberRequest: chime.ChimeRestorePhoneNumberRequest = { ... }
```

##### `phoneNumberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeRestorePhoneNumberRequest.property.phoneNumberId"></a>

- *Type:* `string`

---

### ChimeRestorePhoneNumberResponse <a name="aws-cdk-sdk.chime.ChimeRestorePhoneNumberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRestorePhoneNumberResponse: chime.ChimeRestorePhoneNumberResponse = { ... }
```

##### `phoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRestorePhoneNumberResponse.property.phoneNumber"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumber`](#aws-cdk-sdk.chime.ChimePhoneNumber)

---

### ChimeRetentionSettings <a name="aws-cdk-sdk.chime.ChimeRetentionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRetentionSettings: chime.ChimeRetentionSettings = { ... }
```

##### `conversationRetentionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRetentionSettings.property.conversationRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeConversationRetentionSettings`](#aws-cdk-sdk.chime.ChimeConversationRetentionSettings)

---

##### `roomRetentionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRetentionSettings.property.roomRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRoomRetentionSettings`](#aws-cdk-sdk.chime.ChimeRoomRetentionSettings)

---

### ChimeRoom <a name="aws-cdk-sdk.chime.ChimeRoom"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRoom: chime.ChimeRoom = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoom.property.accountId"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoom.property.createdBy"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoom.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoom.property.name"></a>

- *Type:* `string`

---

##### `roomId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoom.property.roomId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoom.property.updatedTimestamp"></a>

- *Type:* `string`

---

### ChimeRoomMembership <a name="aws-cdk-sdk.chime.ChimeRoomMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRoomMembership: chime.ChimeRoomMembership = { ... }
```

##### `invitedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoomMembership.property.invitedBy"></a>

- *Type:* `string`

---

##### `member`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoomMembership.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMember`](#aws-cdk-sdk.chime.ChimeMember)

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoomMembership.property.role"></a>

- *Type:* `string`

---

##### `roomId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoomMembership.property.roomId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoomMembership.property.updatedTimestamp"></a>

- *Type:* `string`

---

### ChimeRoomRetentionSettings <a name="aws-cdk-sdk.chime.ChimeRoomRetentionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeRoomRetentionSettings: chime.ChimeRoomRetentionSettings = { ... }
```

##### `retentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeRoomRetentionSettings.property.retentionDays"></a>

- *Type:* `number`

---

### ChimeSearchAvailablePhoneNumbersRequest <a name="aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSearchAvailablePhoneNumbersRequest: chime.ChimeSearchAvailablePhoneNumbersRequest = { ... }
```

##### `areaCode`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest.property.areaCode"></a>

- *Type:* `string`

---

##### `city`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest.property.city"></a>

- *Type:* `string`

---

##### `country`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest.property.country"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest.property.state"></a>

- *Type:* `string`

---

##### `tollFreePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest.property.tollFreePrefix"></a>

- *Type:* `string`

---

### ChimeSearchAvailablePhoneNumbersResponse <a name="aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSearchAvailablePhoneNumbersResponse: chime.ChimeSearchAvailablePhoneNumbersResponse = { ... }
```

##### `e164PhoneNumbers`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersResponse.property.e164PhoneNumbers"></a>

- *Type:* `string`[]

---

### ChimeSendChannelMessageRequest <a name="aws-cdk-sdk.chime.ChimeSendChannelMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSendChannelMessageRequest: chime.ChimeSendChannelMessageRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeSendChannelMessageRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeSendChannelMessageRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeSendChannelMessageRequest.property.content"></a>

- *Type:* `string`

---

##### `persistence`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeSendChannelMessageRequest.property.persistence"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeSendChannelMessageRequest.property.type"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSendChannelMessageRequest.property.metadata"></a>

- *Type:* `string`

---

### ChimeSendChannelMessageResponse <a name="aws-cdk-sdk.chime.ChimeSendChannelMessageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSendChannelMessageResponse: chime.ChimeSendChannelMessageResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSendChannelMessageResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSendChannelMessageResponse.property.messageId"></a>

- *Type:* `string`

---

### ChimeSigninDelegateGroup <a name="aws-cdk-sdk.chime.ChimeSigninDelegateGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSigninDelegateGroup: chime.ChimeSigninDelegateGroup = { ... }
```

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSigninDelegateGroup.property.groupName"></a>

- *Type:* `string`

---

### ChimeSipMediaApplication <a name="aws-cdk-sdk.chime.ChimeSipMediaApplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSipMediaApplication: chime.ChimeSipMediaApplication = { ... }
```

##### `awsRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipMediaApplication.property.awsRegion"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipMediaApplication.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipMediaApplication.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint`](#aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipMediaApplication.property.name"></a>

- *Type:* `string`

---

##### `sipMediaApplicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipMediaApplication.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipMediaApplication.property.updatedTimestamp"></a>

- *Type:* `string`

---

### ChimeSipMediaApplicationCall <a name="aws-cdk-sdk.chime.ChimeSipMediaApplicationCall"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSipMediaApplicationCall: chime.ChimeSipMediaApplicationCall = { ... }
```

##### `transactionId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipMediaApplicationCall.property.transactionId"></a>

- *Type:* `string`

---

### ChimeSipMediaApplicationEndpoint <a name="aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSipMediaApplicationEndpoint: chime.ChimeSipMediaApplicationEndpoint = { ... }
```

##### `lambdaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint.property.lambdaArn"></a>

- *Type:* `string`

---

### ChimeSipMediaApplicationLoggingConfiguration <a name="aws-cdk-sdk.chime.ChimeSipMediaApplicationLoggingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSipMediaApplicationLoggingConfiguration: chime.ChimeSipMediaApplicationLoggingConfiguration = { ... }
```

##### `enableSipMediaApplicationMessageLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipMediaApplicationLoggingConfiguration.property.enableSipMediaApplicationMessageLogs"></a>

- *Type:* `boolean`

---

### ChimeSipRule <a name="aws-cdk-sdk.chime.ChimeSipRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSipRule: chime.ChimeSipRule = { ... }
```

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRule.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRule.property.disabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRule.property.name"></a>

- *Type:* `string`

---

##### `sipRuleId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRule.property.sipRuleId"></a>

- *Type:* `string`

---

##### `targetApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRule.property.targetApplications"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRuleTargetApplication`](#aws-cdk-sdk.chime.ChimeSipRuleTargetApplication)[]

---

##### `triggerType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRule.property.triggerType"></a>

- *Type:* `string`

---

##### `triggerValue`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRule.property.triggerValue"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRule.property.updatedTimestamp"></a>

- *Type:* `string`

---

### ChimeSipRuleTargetApplication <a name="aws-cdk-sdk.chime.ChimeSipRuleTargetApplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeSipRuleTargetApplication: chime.ChimeSipRuleTargetApplication = { ... }
```

##### `awsRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRuleTargetApplication.property.awsRegion"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRuleTargetApplication.property.priority"></a>

- *Type:* `number`

---

##### `sipMediaApplicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeSipRuleTargetApplication.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

### ChimeStreamingConfiguration <a name="aws-cdk-sdk.chime.ChimeStreamingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeStreamingConfiguration: chime.ChimeStreamingConfiguration = { ... }
```

##### `dataRetentionInHours`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeStreamingConfiguration.property.dataRetentionInHours"></a>

- *Type:* `number`

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeStreamingConfiguration.property.disabled"></a>

- *Type:* `boolean`

---

##### `streamingNotificationTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeStreamingConfiguration.property.streamingNotificationTargets"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeStreamingNotificationTarget`](#aws-cdk-sdk.chime.ChimeStreamingNotificationTarget)[]

---

### ChimeStreamingNotificationTarget <a name="aws-cdk-sdk.chime.ChimeStreamingNotificationTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeStreamingNotificationTarget: chime.ChimeStreamingNotificationTarget = { ... }
```

##### `notificationTarget`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeStreamingNotificationTarget.property.notificationTarget"></a>

- *Type:* `string`

---

### ChimeTag <a name="aws-cdk-sdk.chime.ChimeTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeTag: chime.ChimeTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTag.property.value"></a>

- *Type:* `string`

---

### ChimeTagAttendeeRequest <a name="aws-cdk-sdk.chime.ChimeTagAttendeeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeTagAttendeeRequest: chime.ChimeTagAttendeeRequest = { ... }
```

##### `attendeeId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTagAttendeeRequest.property.attendeeId"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTagAttendeeRequest.property.meetingId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTagAttendeeRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeTagMeetingRequest <a name="aws-cdk-sdk.chime.ChimeTagMeetingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeTagMeetingRequest: chime.ChimeTagMeetingRequest = { ... }
```

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTagMeetingRequest.property.meetingId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTagMeetingRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeTagResourceRequest <a name="aws-cdk-sdk.chime.ChimeTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeTagResourceRequest: chime.ChimeTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---

### ChimeTelephonySettings <a name="aws-cdk-sdk.chime.ChimeTelephonySettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeTelephonySettings: chime.ChimeTelephonySettings = { ... }
```

##### `inboundCalling`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTelephonySettings.property.inboundCalling"></a>

- *Type:* `boolean`

---

##### `outboundCalling`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTelephonySettings.property.outboundCalling"></a>

- *Type:* `boolean`

---

##### `sms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeTelephonySettings.property.sms"></a>

- *Type:* `boolean`

---

### ChimeTermination <a name="aws-cdk-sdk.chime.ChimeTermination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeTermination: chime.ChimeTermination = { ... }
```

##### `callingRegions`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeTermination.property.callingRegions"></a>

- *Type:* `string`[]

---

##### `cidrAllowedList`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeTermination.property.cidrAllowedList"></a>

- *Type:* `string`[]

---

##### `cpsLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeTermination.property.cpsLimit"></a>

- *Type:* `number`

---

##### `defaultPhoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeTermination.property.defaultPhoneNumber"></a>

- *Type:* `string`

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeTermination.property.disabled"></a>

- *Type:* `boolean`

---

### ChimeTerminationHealth <a name="aws-cdk-sdk.chime.ChimeTerminationHealth"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeTerminationHealth: chime.ChimeTerminationHealth = { ... }
```

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeTerminationHealth.property.source"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeTerminationHealth.property.timestamp"></a>

- *Type:* `string`

---

### ChimeUntagAttendeeRequest <a name="aws-cdk-sdk.chime.ChimeUntagAttendeeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUntagAttendeeRequest: chime.ChimeUntagAttendeeRequest = { ... }
```

##### `attendeeId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUntagAttendeeRequest.property.attendeeId"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUntagAttendeeRequest.property.meetingId"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUntagAttendeeRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ChimeUntagMeetingRequest <a name="aws-cdk-sdk.chime.ChimeUntagMeetingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUntagMeetingRequest: chime.ChimeUntagMeetingRequest = { ... }
```

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUntagMeetingRequest.property.meetingId"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUntagMeetingRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ChimeUntagResourceRequest <a name="aws-cdk-sdk.chime.ChimeUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUntagResourceRequest: chime.ChimeUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ChimeUpdateAccountRequest <a name="aws-cdk-sdk.chime.ChimeUpdateAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateAccountRequest: chime.ChimeUpdateAccountRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAccountRequest.property.accountId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAccountRequest.property.name"></a>

- *Type:* `string`

---

### ChimeUpdateAccountResponse <a name="aws-cdk-sdk.chime.ChimeUpdateAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateAccountResponse: chime.ChimeUpdateAccountResponse = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAccountResponse.property.account"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAccount`](#aws-cdk-sdk.chime.ChimeAccount)

---

### ChimeUpdateAccountSettingsRequest <a name="aws-cdk-sdk.chime.ChimeUpdateAccountSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateAccountSettingsRequest: chime.ChimeUpdateAccountSettingsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAccountSettingsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `accountSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAccountSettingsRequest.property.accountSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAccountSettings`](#aws-cdk-sdk.chime.ChimeAccountSettings)

---

### ChimeUpdateAccountSettingsResponse <a name="aws-cdk-sdk.chime.ChimeUpdateAccountSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateAccountSettingsResponse: chime.ChimeUpdateAccountSettingsResponse = { ... }
```

### ChimeUpdateAppInstanceRequest <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateAppInstanceRequest: chime.ChimeUpdateAppInstanceRequest = { ... }
```

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceRequest.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceRequest.property.name"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceRequest.property.metadata"></a>

- *Type:* `string`

---

### ChimeUpdateAppInstanceResponse <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateAppInstanceResponse: chime.ChimeUpdateAppInstanceResponse = { ... }
```

##### `appInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceResponse.property.appInstanceArn"></a>

- *Type:* `string`

---

### ChimeUpdateAppInstanceUserRequest <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateAppInstanceUserRequest: chime.ChimeUpdateAppInstanceUserRequest = { ... }
```

##### `appInstanceUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceUserRequest.property.appInstanceUserArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceUserRequest.property.name"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceUserRequest.property.metadata"></a>

- *Type:* `string`

---

### ChimeUpdateAppInstanceUserResponse <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateAppInstanceUserResponse: chime.ChimeUpdateAppInstanceUserResponse = { ... }
```

##### `appInstanceUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateAppInstanceUserResponse.property.appInstanceUserArn"></a>

- *Type:* `string`

---

### ChimeUpdateBotRequest <a name="aws-cdk-sdk.chime.ChimeUpdateBotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateBotRequest: chime.ChimeUpdateBotRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateBotRequest.property.accountId"></a>

- *Type:* `string`

---

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateBotRequest.property.botId"></a>

- *Type:* `string`

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateBotRequest.property.disabled"></a>

- *Type:* `boolean`

---

### ChimeUpdateBotResponse <a name="aws-cdk-sdk.chime.ChimeUpdateBotResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateBotResponse: chime.ChimeUpdateBotResponse = { ... }
```

##### `bot`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateBotResponse.property.bot"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBot`](#aws-cdk-sdk.chime.ChimeBot)

---

### ChimeUpdateChannelMessageRequest <a name="aws-cdk-sdk.chime.ChimeUpdateChannelMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateChannelMessageRequest: chime.ChimeUpdateChannelMessageRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelMessageRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelMessageRequest.property.messageId"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelMessageRequest.property.content"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelMessageRequest.property.metadata"></a>

- *Type:* `string`

---

### ChimeUpdateChannelMessageResponse <a name="aws-cdk-sdk.chime.ChimeUpdateChannelMessageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateChannelMessageResponse: chime.ChimeUpdateChannelMessageResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelMessageResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelMessageResponse.property.messageId"></a>

- *Type:* `string`

---

### ChimeUpdateChannelReadMarkerRequest <a name="aws-cdk-sdk.chime.ChimeUpdateChannelReadMarkerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateChannelReadMarkerRequest: chime.ChimeUpdateChannelReadMarkerRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelReadMarkerRequest.property.channelArn"></a>

- *Type:* `string`

---

### ChimeUpdateChannelReadMarkerResponse <a name="aws-cdk-sdk.chime.ChimeUpdateChannelReadMarkerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateChannelReadMarkerResponse: chime.ChimeUpdateChannelReadMarkerResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelReadMarkerResponse.property.channelArn"></a>

- *Type:* `string`

---

### ChimeUpdateChannelRequest <a name="aws-cdk-sdk.chime.ChimeUpdateChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateChannelRequest: chime.ChimeUpdateChannelRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelRequest.property.mode"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelRequest.property.name"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelRequest.property.metadata"></a>

- *Type:* `string`

---

### ChimeUpdateChannelResponse <a name="aws-cdk-sdk.chime.ChimeUpdateChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateChannelResponse: chime.ChimeUpdateChannelResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateChannelResponse.property.channelArn"></a>

- *Type:* `string`

---

### ChimeUpdateGlobalSettingsRequest <a name="aws-cdk-sdk.chime.ChimeUpdateGlobalSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateGlobalSettingsRequest: chime.ChimeUpdateGlobalSettingsRequest = { ... }
```

##### `businessCalling`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateGlobalSettingsRequest.property.businessCalling"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBusinessCallingSettings`](#aws-cdk-sdk.chime.ChimeBusinessCallingSettings)

---

##### `voiceConnector`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateGlobalSettingsRequest.property.voiceConnector"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorSettings`](#aws-cdk-sdk.chime.ChimeVoiceConnectorSettings)

---

### ChimeUpdatePhoneNumberRequest <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdatePhoneNumberRequest: chime.ChimeUpdatePhoneNumberRequest = { ... }
```

##### `phoneNumberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest.property.phoneNumberId"></a>

- *Type:* `string`

---

##### `callingName`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest.property.callingName"></a>

- *Type:* `string`

---

##### `productType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest.property.productType"></a>

- *Type:* `string`

---

### ChimeUpdatePhoneNumberRequestItem <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequestItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdatePhoneNumberRequestItem: chime.ChimeUpdatePhoneNumberRequestItem = { ... }
```

##### `phoneNumberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequestItem.property.phoneNumberId"></a>

- *Type:* `string`

---

##### `callingName`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequestItem.property.callingName"></a>

- *Type:* `string`

---

##### `productType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequestItem.property.productType"></a>

- *Type:* `string`

---

### ChimeUpdatePhoneNumberResponse <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdatePhoneNumberResponse: chime.ChimeUpdatePhoneNumberResponse = { ... }
```

##### `phoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberResponse.property.phoneNumber"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumber`](#aws-cdk-sdk.chime.ChimePhoneNumber)

---

### ChimeUpdatePhoneNumberSettingsRequest <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdatePhoneNumberSettingsRequest: chime.ChimeUpdatePhoneNumberSettingsRequest = { ... }
```

##### `callingName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdatePhoneNumberSettingsRequest.property.callingName"></a>

- *Type:* `string`

---

### ChimeUpdateProxySessionRequest <a name="aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateProxySessionRequest: chime.ChimeUpdateProxySessionRequest = { ... }
```

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest.property.capabilities"></a>

- *Type:* `string`[]

---

##### `proxySessionId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest.property.proxySessionId"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

##### `expiryMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest.property.expiryMinutes"></a>

- *Type:* `number`

---

### ChimeUpdateProxySessionResponse <a name="aws-cdk-sdk.chime.ChimeUpdateProxySessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateProxySessionResponse: chime.ChimeUpdateProxySessionResponse = { ... }
```

##### `proxySession`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateProxySessionResponse.property.proxySession"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeProxySession`](#aws-cdk-sdk.chime.ChimeProxySession)

---

### ChimeUpdateRoomMembershipRequest <a name="aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateRoomMembershipRequest: chime.ChimeUpdateRoomMembershipRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest.property.accountId"></a>

- *Type:* `string`

---

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest.property.memberId"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest.property.roomId"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest.property.role"></a>

- *Type:* `string`

---

### ChimeUpdateRoomMembershipResponse <a name="aws-cdk-sdk.chime.ChimeUpdateRoomMembershipResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateRoomMembershipResponse: chime.ChimeUpdateRoomMembershipResponse = { ... }
```

##### `roomMembership`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateRoomMembershipResponse.property.roomMembership"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRoomMembership`](#aws-cdk-sdk.chime.ChimeRoomMembership)

---

### ChimeUpdateRoomRequest <a name="aws-cdk-sdk.chime.ChimeUpdateRoomRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateRoomRequest: chime.ChimeUpdateRoomRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateRoomRequest.property.accountId"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateRoomRequest.property.roomId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateRoomRequest.property.name"></a>

- *Type:* `string`

---

### ChimeUpdateRoomResponse <a name="aws-cdk-sdk.chime.ChimeUpdateRoomResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateRoomResponse: chime.ChimeUpdateRoomResponse = { ... }
```

##### `room`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateRoomResponse.property.room"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRoom`](#aws-cdk-sdk.chime.ChimeRoom)

---

### ChimeUpdateSipMediaApplicationRequest <a name="aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateSipMediaApplicationRequest: chime.ChimeUpdateSipMediaApplicationRequest = { ... }
```

##### `sipMediaApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationRequest.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationRequest.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint`](#aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationRequest.property.name"></a>

- *Type:* `string`

---

### ChimeUpdateSipMediaApplicationResponse <a name="aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateSipMediaApplicationResponse: chime.ChimeUpdateSipMediaApplicationResponse = { ... }
```

##### `sipMediaApplication`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationResponse.property.sipMediaApplication"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplication`](#aws-cdk-sdk.chime.ChimeSipMediaApplication)

---

### ChimeUpdateSipRuleRequest <a name="aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateSipRuleRequest: chime.ChimeUpdateSipRuleRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `sipRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest.property.sipRuleId"></a>

- *Type:* `string`

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest.property.disabled"></a>

- *Type:* `boolean`

---

##### `targetApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest.property.targetApplications"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRuleTargetApplication`](#aws-cdk-sdk.chime.ChimeSipRuleTargetApplication)[]

---

### ChimeUpdateSipRuleResponse <a name="aws-cdk-sdk.chime.ChimeUpdateSipRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateSipRuleResponse: chime.ChimeUpdateSipRuleResponse = { ... }
```

##### `sipRule`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateSipRuleResponse.property.sipRule"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRule`](#aws-cdk-sdk.chime.ChimeSipRule)

---

### ChimeUpdateUserRequest <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateUserRequest: chime.ChimeUpdateUserRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequest.property.accountId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequest.property.userId"></a>

- *Type:* `string`

---

##### `alexaForBusinessMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequest.property.alexaForBusinessMetadata"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAlexaForBusinessMetadata`](#aws-cdk-sdk.chime.ChimeAlexaForBusinessMetadata)

---

##### `licenseType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequest.property.licenseType"></a>

- *Type:* `string`

---

##### `userType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequest.property.userType"></a>

- *Type:* `string`

---

### ChimeUpdateUserRequestItem <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequestItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateUserRequestItem: chime.ChimeUpdateUserRequestItem = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequestItem.property.userId"></a>

- *Type:* `string`

---

##### `alexaForBusinessMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequestItem.property.alexaForBusinessMetadata"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAlexaForBusinessMetadata`](#aws-cdk-sdk.chime.ChimeAlexaForBusinessMetadata)

---

##### `licenseType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequestItem.property.licenseType"></a>

- *Type:* `string`

---

##### `userType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserRequestItem.property.userType"></a>

- *Type:* `string`

---

### ChimeUpdateUserResponse <a name="aws-cdk-sdk.chime.ChimeUpdateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateUserResponse: chime.ChimeUpdateUserResponse = { ... }
```

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUser`](#aws-cdk-sdk.chime.ChimeUser)

---

### ChimeUpdateUserSettingsRequest <a name="aws-cdk-sdk.chime.ChimeUpdateUserSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateUserSettingsRequest: chime.ChimeUpdateUserSettingsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserSettingsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserSettingsRequest.property.userId"></a>

- *Type:* `string`

---

##### `userSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateUserSettingsRequest.property.userSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUserSettings`](#aws-cdk-sdk.chime.ChimeUserSettings)

---

### ChimeUpdateVoiceConnectorGroupRequest <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateVoiceConnectorGroupRequest: chime.ChimeUpdateVoiceConnectorGroupRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `voiceConnectorGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupRequest.property.voiceConnectorGroupId"></a>

- *Type:* `string`

---

##### `voiceConnectorItems`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupRequest.property.voiceConnectorItems"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorItem`](#aws-cdk-sdk.chime.ChimeVoiceConnectorItem)[]

---

### ChimeUpdateVoiceConnectorGroupResponse <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateVoiceConnectorGroupResponse: chime.ChimeUpdateVoiceConnectorGroupResponse = { ... }
```

##### `voiceConnectorGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupResponse.property.voiceConnectorGroup"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorGroup`](#aws-cdk-sdk.chime.ChimeVoiceConnectorGroup)

---

### ChimeUpdateVoiceConnectorRequest <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateVoiceConnectorRequest: chime.ChimeUpdateVoiceConnectorRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorRequest.property.name"></a>

- *Type:* `string`

---

##### `requireEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorRequest.property.requireEncryption"></a>

- *Type:* `boolean`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorRequest.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeUpdateVoiceConnectorResponse <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUpdateVoiceConnectorResponse: chime.ChimeUpdateVoiceConnectorResponse = { ... }
```

##### `voiceConnector`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorResponse.property.voiceConnector"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnector`](#aws-cdk-sdk.chime.ChimeVoiceConnector)

---

### ChimeUser <a name="aws-cdk-sdk.chime.ChimeUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUser: chime.ChimeUser = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.userId"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.accountId"></a>

- *Type:* `string`

---

##### `alexaForBusinessMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.alexaForBusinessMetadata"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAlexaForBusinessMetadata`](#aws-cdk-sdk.chime.ChimeAlexaForBusinessMetadata)

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.displayName"></a>

- *Type:* `string`

---

##### `invitedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.invitedOn"></a>

- *Type:* `string`

---

##### `licenseType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.licenseType"></a>

- *Type:* `string`

---

##### `personalPin`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.personalPin"></a>

- *Type:* `string`

---

##### `primaryEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.primaryEmail"></a>

- *Type:* `string`

---

##### `primaryProvisionedNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.primaryProvisionedNumber"></a>

- *Type:* `string`

---

##### `registeredOn`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.registeredOn"></a>

- *Type:* `string`

---

##### `userInvitationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.userInvitationStatus"></a>

- *Type:* `string`

---

##### `userRegistrationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.userRegistrationStatus"></a>

- *Type:* `string`

---

##### `userType`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUser.property.userType"></a>

- *Type:* `string`

---

### ChimeUserError <a name="aws-cdk-sdk.chime.ChimeUserError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUserError: chime.ChimeUserError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUserError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUserError.property.errorMessage"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeUserError.property.userId"></a>

- *Type:* `string`

---

### ChimeUserSettings <a name="aws-cdk-sdk.chime.ChimeUserSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeUserSettings: chime.ChimeUserSettings = { ... }
```

##### `telephony`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeUserSettings.property.telephony"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTelephonySettings`](#aws-cdk-sdk.chime.ChimeTelephonySettings)

---

### ChimeVoiceConnector <a name="aws-cdk-sdk.chime.ChimeVoiceConnector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeVoiceConnector: chime.ChimeVoiceConnector = { ... }
```

##### `awsRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnector.property.awsRegion"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnector.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnector.property.name"></a>

- *Type:* `string`

---

##### `outboundHostName`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnector.property.outboundHostName"></a>

- *Type:* `string`

---

##### `requireEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnector.property.requireEncryption"></a>

- *Type:* `boolean`

---

##### `updatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnector.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnector.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeVoiceConnectorGroup <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeVoiceConnectorGroup: chime.ChimeVoiceConnectorGroup = { ... }
```

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorGroup.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorGroup.property.name"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorGroup.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorGroup.property.voiceConnectorGroupId"></a>

- *Type:* `string`

---

##### `voiceConnectorItems`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorGroup.property.voiceConnectorItems"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorItem`](#aws-cdk-sdk.chime.ChimeVoiceConnectorItem)[]

---

### ChimeVoiceConnectorItem <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeVoiceConnectorItem: chime.ChimeVoiceConnectorItem = { ... }
```

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorItem.property.priority"></a>

- *Type:* `number`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorItem.property.voiceConnectorId"></a>

- *Type:* `string`

---

### ChimeVoiceConnectorSettings <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

const chimeVoiceConnectorSettings: chime.ChimeVoiceConnectorSettings = { ... }
```

##### `cdrBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.chime.ChimeVoiceConnectorSettings.property.cdrBucket"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ChimeResponsesAssociatePhoneNumbersWithVoiceConnector <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnector"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnector.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnector(__scope: Construct, __resources: string[], __input: ChimeAssociatePhoneNumbersWithVoiceConnectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumberErrors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnector.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---


### ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup(__scope: Construct, __resources: string[], __input: ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumberErrors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesAssociatePhoneNumbersWithVoiceConnectorGroup.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---


### ChimeResponsesBatchCreateAttendee <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateAttendee"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateAttendee.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesBatchCreateAttendee(__scope: Construct, __resources: string[], __input: ChimeBatchCreateAttendeeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateAttendee.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateAttendee.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateAttendee.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchCreateAttendeeRequest`](#aws-cdk-sdk.chime.ChimeBatchCreateAttendeeRequest)

---



#### Properties <a name="Properties"></a>

##### `attendees`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateAttendee.property.attendees"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAttendee`](#aws-cdk-sdk.chime.ChimeAttendee)[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateAttendee.property.errors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAttendeeError`](#aws-cdk-sdk.chime.ChimeCreateAttendeeError)[]

---


### ChimeResponsesBatchCreateRoomMembership <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateRoomMembership"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateRoomMembership.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesBatchCreateRoomMembership(__scope: Construct, __resources: string[], __input: ChimeBatchCreateRoomMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateRoomMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateRoomMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateRoomMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchCreateRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeBatchCreateRoomMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchCreateRoomMembership.property.errors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMemberError`](#aws-cdk-sdk.chime.ChimeMemberError)[]

---


### ChimeResponsesBatchDeletePhoneNumber <a name="aws-cdk-sdk.chime.ChimeResponsesBatchDeletePhoneNumber"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesBatchDeletePhoneNumber.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesBatchDeletePhoneNumber(__scope: Construct, __resources: string[], __input: ChimeBatchDeletePhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchDeletePhoneNumber.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchDeletePhoneNumber.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchDeletePhoneNumber.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchDeletePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeBatchDeletePhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumberErrors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchDeletePhoneNumber.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---


### ChimeResponsesBatchSuspendUser <a name="aws-cdk-sdk.chime.ChimeResponsesBatchSuspendUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesBatchSuspendUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesBatchSuspendUser(__scope: Construct, __resources: string[], __input: ChimeBatchSuspendUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchSuspendUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchSuspendUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchSuspendUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchSuspendUserRequest`](#aws-cdk-sdk.chime.ChimeBatchSuspendUserRequest)

---



#### Properties <a name="Properties"></a>

##### `userErrors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchSuspendUser.property.userErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUserError`](#aws-cdk-sdk.chime.ChimeUserError)[]

---


### ChimeResponsesBatchUnsuspendUser <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUnsuspendUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUnsuspendUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesBatchUnsuspendUser(__scope: Construct, __resources: string[], __input: ChimeBatchUnsuspendUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUnsuspendUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUnsuspendUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUnsuspendUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchUnsuspendUserRequest`](#aws-cdk-sdk.chime.ChimeBatchUnsuspendUserRequest)

---



#### Properties <a name="Properties"></a>

##### `userErrors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUnsuspendUser.property.userErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUserError`](#aws-cdk-sdk.chime.ChimeUserError)[]

---


### ChimeResponsesBatchUpdatePhoneNumber <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdatePhoneNumber"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdatePhoneNumber.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesBatchUpdatePhoneNumber(__scope: Construct, __resources: string[], __input: ChimeBatchUpdatePhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdatePhoneNumber.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdatePhoneNumber.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdatePhoneNumber.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchUpdatePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeBatchUpdatePhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumberErrors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdatePhoneNumber.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---


### ChimeResponsesBatchUpdateUser <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdateUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdateUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesBatchUpdateUser(__scope: Construct, __resources: string[], __input: ChimeBatchUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBatchUpdateUserRequest`](#aws-cdk-sdk.chime.ChimeBatchUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `userErrors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesBatchUpdateUser.property.userErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUserError`](#aws-cdk-sdk.chime.ChimeUserError)[]

---


### ChimeResponsesCreateAccount <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccount"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccount.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateAccount(__scope: Construct, __resources: string[], __input: ChimeCreateAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAccountRequest`](#aws-cdk-sdk.chime.ChimeCreateAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccount.property.account"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount`](#aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount)

---


### ChimeResponsesCreateAccountAccount <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateAccountAccount(__scope: Construct, __resources: string[], __input: ChimeCreateAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAccountRequest`](#aws-cdk-sdk.chime.ChimeCreateAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.property.accountId"></a>

- *Type:* `string`

---

##### `accountType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.property.accountType"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.property.awsAccountId"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `defaultLicense`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.property.defaultLicense"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.property.name"></a>

- *Type:* `string`

---

##### `signinDelegateGroups`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.property.signinDelegateGroups"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSigninDelegateGroup`](#aws-cdk-sdk.chime.ChimeSigninDelegateGroup)[]

---

##### `supportedLicenses`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAccountAccount.property.supportedLicenses"></a>

- *Type:* `string`[]

---


### ChimeResponsesCreateAppInstance <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstance"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstance.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateAppInstance(__scope: Construct, __resources: string[], __input: ChimeCreateAppInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAppInstanceRequest`](#aws-cdk-sdk.chime.ChimeCreateAppInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstance.property.appInstanceArn"></a>

- *Type:* `string`

---


### ChimeResponsesCreateAppInstanceAdmin <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdmin"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdmin.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateAppInstanceAdmin(__scope: Construct, __resources: string[], __input: ChimeCreateAppInstanceAdminRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdmin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdmin.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdmin.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminRequest`](#aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceAdmin`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdmin.property.appInstanceAdmin"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin`](#aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin)

---

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdmin.property.appInstanceArn"></a>

- *Type:* `string`

---


### ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin(__scope: Construct, __resources: string[], __input: ChimeCreateAppInstanceAdminRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminRequest`](#aws-cdk-sdk.chime.ChimeCreateAppInstanceAdminRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceAdminAppInstanceAdmin.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesCreateAppInstanceUser <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateAppInstanceUser(__scope: Construct, __resources: string[], __input: ChimeCreateAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeCreateAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAppInstanceUser.property.appInstanceUserArn"></a>

- *Type:* `string`

---


### ChimeResponsesCreateAttendee <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendee"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendee.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateAttendee(__scope: Construct, __resources: string[], __input: ChimeCreateAttendeeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendee.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendee.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendee.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAttendeeRequest`](#aws-cdk-sdk.chime.ChimeCreateAttendeeRequest)

---



#### Properties <a name="Properties"></a>

##### `attendee`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendee.property.attendee"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateAttendeeAttendee`](#aws-cdk-sdk.chime.ChimeResponsesCreateAttendeeAttendee)

---


### ChimeResponsesCreateAttendeeAttendee <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendeeAttendee"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendeeAttendee.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateAttendeeAttendee(__scope: Construct, __resources: string[], __input: ChimeCreateAttendeeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendeeAttendee.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendeeAttendee.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendeeAttendee.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAttendeeRequest`](#aws-cdk-sdk.chime.ChimeCreateAttendeeRequest)

---



#### Properties <a name="Properties"></a>

##### `attendeeId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendeeAttendee.property.attendeeId"></a>

- *Type:* `string`

---

##### `externalUserId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendeeAttendee.property.externalUserId"></a>

- *Type:* `string`

---

##### `joinToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateAttendeeAttendee.property.joinToken"></a>

- *Type:* `string`

---


### ChimeResponsesCreateBot <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBot"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBot.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateBot(__scope: Construct, __resources: string[], __input: ChimeCreateBotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateBotRequest`](#aws-cdk-sdk.chime.ChimeCreateBotRequest)

---



#### Properties <a name="Properties"></a>

##### `bot`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBot.property.bot"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateBotBot`](#aws-cdk-sdk.chime.ChimeResponsesCreateBotBot)

---


### ChimeResponsesCreateBotBot <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateBotBot(__scope: Construct, __resources: string[], __input: ChimeCreateBotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateBotRequest`](#aws-cdk-sdk.chime.ChimeCreateBotRequest)

---



#### Properties <a name="Properties"></a>

##### `botEmail`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.property.botEmail"></a>

- *Type:* `string`

---

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.property.botId"></a>

- *Type:* `string`

---

##### `botType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.property.botType"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.property.disabled"></a>

- *Type:* `boolean`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.property.displayName"></a>

- *Type:* `string`

---

##### `securityToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.property.securityToken"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateBotBot.property.userId"></a>

- *Type:* `string`

---


### ChimeResponsesCreateChannel <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannel"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannel.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateChannel(__scope: Construct, __resources: string[], __input: ChimeCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannel.property.channelArn"></a>

- *Type:* `string`

---


### ChimeResponsesCreateChannelBan <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBan"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBan.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateChannelBan(__scope: Construct, __resources: string[], __input: ChimeCreateChannelBanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelBanRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelBanRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBan.property.channelArn"></a>

- *Type:* `string`

---

##### `member`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBan.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateChannelBanMember`](#aws-cdk-sdk.chime.ChimeResponsesCreateChannelBanMember)

---


### ChimeResponsesCreateChannelBanMember <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBanMember"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBanMember.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateChannelBanMember(__scope: Construct, __resources: string[], __input: ChimeCreateChannelBanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBanMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBanMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBanMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelBanRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelBanRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBanMember.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelBanMember.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesCreateChannelMembership <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembership"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembership.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateChannelMembership(__scope: Construct, __resources: string[], __input: ChimeCreateChannelMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelMembershipRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembership.property.channelArn"></a>

- *Type:* `string`

---

##### `member`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembership.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembershipMember`](#aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembershipMember)

---


### ChimeResponsesCreateChannelMembershipMember <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembershipMember"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembershipMember.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateChannelMembershipMember(__scope: Construct, __resources: string[], __input: ChimeCreateChannelMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembershipMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembershipMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembershipMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelMembershipRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembershipMember.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelMembershipMember.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesCreateChannelModerator <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModerator"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModerator.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateChannelModerator(__scope: Construct, __resources: string[], __input: ChimeCreateChannelModeratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelModeratorRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelModeratorRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModerator.property.channelArn"></a>

- *Type:* `string`

---

##### `channelModerator`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModerator.property.channelModerator"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateChannelModeratorChannelModerator`](#aws-cdk-sdk.chime.ChimeResponsesCreateChannelModeratorChannelModerator)

---


### ChimeResponsesCreateChannelModeratorChannelModerator <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModeratorChannelModerator"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModeratorChannelModerator.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateChannelModeratorChannelModerator(__scope: Construct, __resources: string[], __input: ChimeCreateChannelModeratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModeratorChannelModerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModeratorChannelModerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModeratorChannelModerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateChannelModeratorRequest`](#aws-cdk-sdk.chime.ChimeCreateChannelModeratorRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModeratorChannelModerator.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateChannelModeratorChannelModerator.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesCreateMeeting <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeeting"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeeting.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateMeeting(__scope: Construct, __resources: string[], __input: ChimeCreateMeetingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeeting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeeting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeeting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateMeetingRequest`](#aws-cdk-sdk.chime.ChimeCreateMeetingRequest)

---



#### Properties <a name="Properties"></a>

##### `meeting`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeeting.property.meeting"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting`](#aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting)

---


### ChimeResponsesCreateMeetingDialOut <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingDialOut"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingDialOut.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateMeetingDialOut(__scope: Construct, __resources: string[], __input: ChimeCreateMeetingDialOutRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingDialOut.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingDialOut.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingDialOut.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateMeetingDialOutRequest`](#aws-cdk-sdk.chime.ChimeCreateMeetingDialOutRequest)

---



#### Properties <a name="Properties"></a>

##### `transactionId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingDialOut.property.transactionId"></a>

- *Type:* `string`

---


### ChimeResponsesCreateMeetingMeeting <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateMeetingMeeting(__scope: Construct, __resources: string[], __input: ChimeCreateMeetingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateMeetingRequest`](#aws-cdk-sdk.chime.ChimeCreateMeetingRequest)

---



#### Properties <a name="Properties"></a>

##### `externalMeetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting.property.externalMeetingId"></a>

- *Type:* `string`

---

##### `mediaPlacement`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting.property.mediaPlacement"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement`](#aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement)

---

##### `mediaRegion`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting.property.mediaRegion"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeeting.property.meetingId"></a>

- *Type:* `string`

---


### ChimeResponsesCreateMeetingMeetingMediaPlacement <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateMeetingMeetingMediaPlacement(__scope: Construct, __resources: string[], __input: ChimeCreateMeetingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateMeetingRequest`](#aws-cdk-sdk.chime.ChimeCreateMeetingRequest)

---



#### Properties <a name="Properties"></a>

##### `audioFallbackUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.property.audioFallbackUrl"></a>

- *Type:* `string`

---

##### `audioHostUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.property.audioHostUrl"></a>

- *Type:* `string`

---

##### `screenDataUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.property.screenDataUrl"></a>

- *Type:* `string`

---

##### `screenSharingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.property.screenSharingUrl"></a>

- *Type:* `string`

---

##### `screenViewingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.property.screenViewingUrl"></a>

- *Type:* `string`

---

##### `signalingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.property.signalingUrl"></a>

- *Type:* `string`

---

##### `turnControlUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingMeetingMediaPlacement.property.turnControlUrl"></a>

- *Type:* `string`

---


### ChimeResponsesCreateMeetingWithAttendees <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendees"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendees.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateMeetingWithAttendees(__scope: Construct, __resources: string[], __input: ChimeCreateMeetingWithAttendeesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendees.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendees.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendees.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest`](#aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest)

---



#### Properties <a name="Properties"></a>

##### `attendees`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendees.property.attendees"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAttendee`](#aws-cdk-sdk.chime.ChimeAttendee)[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendees.property.errors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateAttendeeError`](#aws-cdk-sdk.chime.ChimeCreateAttendeeError)[]

---

##### `meeting`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendees.property.meeting"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting`](#aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting)

---


### ChimeResponsesCreateMeetingWithAttendeesMeeting <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateMeetingWithAttendeesMeeting(__scope: Construct, __resources: string[], __input: ChimeCreateMeetingWithAttendeesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest`](#aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest)

---



#### Properties <a name="Properties"></a>

##### `externalMeetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting.property.externalMeetingId"></a>

- *Type:* `string`

---

##### `mediaPlacement`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting.property.mediaPlacement"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement`](#aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement)

---

##### `mediaRegion`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting.property.mediaRegion"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeeting.property.meetingId"></a>

- *Type:* `string`

---


### ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement(__scope: Construct, __resources: string[], __input: ChimeCreateMeetingWithAttendeesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest`](#aws-cdk-sdk.chime.ChimeCreateMeetingWithAttendeesRequest)

---



#### Properties <a name="Properties"></a>

##### `audioFallbackUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.property.audioFallbackUrl"></a>

- *Type:* `string`

---

##### `audioHostUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.property.audioHostUrl"></a>

- *Type:* `string`

---

##### `screenDataUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.property.screenDataUrl"></a>

- *Type:* `string`

---

##### `screenSharingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.property.screenSharingUrl"></a>

- *Type:* `string`

---

##### `screenViewingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.property.screenViewingUrl"></a>

- *Type:* `string`

---

##### `signalingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.property.signalingUrl"></a>

- *Type:* `string`

---

##### `turnControlUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateMeetingWithAttendeesMeetingMediaPlacement.property.turnControlUrl"></a>

- *Type:* `string`

---


### ChimeResponsesCreatePhoneNumberOrder <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrder"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrder.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreatePhoneNumberOrder(__scope: Construct, __resources: string[], __input: ChimeCreatePhoneNumberOrderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderRequest`](#aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumberOrder`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrder.property.phoneNumberOrder"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder`](#aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder)

---


### ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder(__scope: Construct, __resources: string[], __input: ChimeCreatePhoneNumberOrderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderRequest`](#aws-cdk-sdk.chime.ChimeCreatePhoneNumberOrderRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `orderedPhoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder.property.orderedPhoneNumbers"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeOrderedPhoneNumber`](#aws-cdk-sdk.chime.ChimeOrderedPhoneNumber)[]

---

##### `phoneNumberOrderId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder.property.phoneNumberOrderId"></a>

- *Type:* `string`

---

##### `productType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder.property.productType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder.property.status"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreatePhoneNumberOrderPhoneNumberOrder.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesCreateProxySession <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySession"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySession.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateProxySession(__scope: Construct, __resources: string[], __input: ChimeCreateProxySessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateProxySessionRequest`](#aws-cdk-sdk.chime.ChimeCreateProxySessionRequest)

---



#### Properties <a name="Properties"></a>

##### `proxySession`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySession.property.proxySession"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession`](#aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession)

---


### ChimeResponsesCreateProxySessionProxySession <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateProxySessionProxySession(__scope: Construct, __resources: string[], __input: ChimeCreateProxySessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateProxySessionRequest`](#aws-cdk-sdk.chime.ChimeCreateProxySessionRequest)

---



#### Properties <a name="Properties"></a>

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.capabilities"></a>

- *Type:* `string`[]

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.endedTimestamp"></a>

- *Type:* `string`

---

##### `expiryMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.expiryMinutes"></a>

- *Type:* `number`

---

##### `geoMatchLevel`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.geoMatchLevel"></a>

- *Type:* `string`

---

##### `geoMatchParams`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.geoMatchParams"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySessionGeoMatchParams`](#aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySessionGeoMatchParams)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.name"></a>

- *Type:* `string`

---

##### `numberSelectionBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.numberSelectionBehavior"></a>

- *Type:* `string`

---

##### `participants`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.participants"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeParticipant`](#aws-cdk-sdk.chime.ChimeParticipant)[]

---

##### `proxySessionId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.proxySessionId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.status"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySession.property.voiceConnectorId"></a>

- *Type:* `string`

---


### ChimeResponsesCreateProxySessionProxySessionGeoMatchParams <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySessionGeoMatchParams"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySessionGeoMatchParams.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateProxySessionProxySessionGeoMatchParams(__scope: Construct, __resources: string[], __input: ChimeCreateProxySessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySessionGeoMatchParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySessionGeoMatchParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySessionGeoMatchParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateProxySessionRequest`](#aws-cdk-sdk.chime.ChimeCreateProxySessionRequest)

---



#### Properties <a name="Properties"></a>

##### `areaCode`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySessionGeoMatchParams.property.areaCode"></a>

- *Type:* `string`

---

##### `country`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateProxySessionProxySessionGeoMatchParams.property.country"></a>

- *Type:* `string`

---


### ChimeResponsesCreateRoom <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoom"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoom.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateRoom(__scope: Construct, __resources: string[], __input: ChimeCreateRoomRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoom.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoom.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoom.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateRoomRequest`](#aws-cdk-sdk.chime.ChimeCreateRoomRequest)

---



#### Properties <a name="Properties"></a>

##### `room`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoom.property.room"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom`](#aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom)

---


### ChimeResponsesCreateRoomMembership <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembership"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembership.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateRoomMembership(__scope: Construct, __resources: string[], __input: ChimeCreateRoomMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `roomMembership`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembership.property.roomMembership"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership`](#aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership)

---


### ChimeResponsesCreateRoomMembershipRoomMembership <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateRoomMembershipRoomMembership(__scope: Construct, __resources: string[], __input: ChimeCreateRoomMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `invitedBy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership.property.invitedBy"></a>

- *Type:* `string`

---

##### `member`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember`](#aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember)

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership.property.role"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership.property.roomId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembership.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesCreateRoomMembershipRoomMembershipMember <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember(__scope: Construct, __resources: string[], __input: ChimeCreateRoomMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeCreateRoomMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember.property.accountId"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember.property.email"></a>

- *Type:* `string`

---

##### `fullName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember.property.fullName"></a>

- *Type:* `string`

---

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember.property.memberId"></a>

- *Type:* `string`

---

##### `memberType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomMembershipRoomMembershipMember.property.memberType"></a>

- *Type:* `string`

---


### ChimeResponsesCreateRoomRoom <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateRoomRoom(__scope: Construct, __resources: string[], __input: ChimeCreateRoomRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateRoomRequest`](#aws-cdk-sdk.chime.ChimeCreateRoomRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom.property.accountId"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom.property.createdBy"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom.property.name"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom.property.roomId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateRoomRoom.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesCreateSipMediaApplication <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplication"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplication.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateSipMediaApplication(__scope: Construct, __resources: string[], __input: ChimeCreateSipMediaApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationRequest`](#aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `sipMediaApplication`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplication.property.sipMediaApplication"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication`](#aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication)

---


### ChimeResponsesCreateSipMediaApplicationCall <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCall"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCall.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateSipMediaApplicationCall(__scope: Construct, __resources: string[], __input: ChimeCreateSipMediaApplicationCallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCall.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCall.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCall.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallRequest`](#aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallRequest)

---



#### Properties <a name="Properties"></a>

##### `sipMediaApplicationCall`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCall.property.sipMediaApplicationCall"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall`](#aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall)

---


### ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall(__scope: Construct, __resources: string[], __input: ChimeCreateSipMediaApplicationCallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallRequest`](#aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationCallRequest)

---



#### Properties <a name="Properties"></a>

##### `transactionId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationCallSipMediaApplicationCall.property.transactionId"></a>

- *Type:* `string`

---


### ChimeResponsesCreateSipMediaApplicationSipMediaApplication <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication(__scope: Construct, __resources: string[], __input: ChimeCreateSipMediaApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationRequest`](#aws-cdk-sdk.chime.ChimeCreateSipMediaApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication.property.awsRegion"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint`](#aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication.property.name"></a>

- *Type:* `string`

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipMediaApplicationSipMediaApplication.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesCreateSipRule <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRule"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRule.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateSipRule(__scope: Construct, __resources: string[], __input: ChimeCreateSipRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateSipRuleRequest`](#aws-cdk-sdk.chime.ChimeCreateSipRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `sipRule`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRule.property.sipRule"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule`](#aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule)

---


### ChimeResponsesCreateSipRuleSipRule <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateSipRuleSipRule(__scope: Construct, __resources: string[], __input: ChimeCreateSipRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateSipRuleRequest`](#aws-cdk-sdk.chime.ChimeCreateSipRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.property.disabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.property.name"></a>

- *Type:* `string`

---

##### `sipRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.property.sipRuleId"></a>

- *Type:* `string`

---

##### `targetApplications`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.property.targetApplications"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRuleTargetApplication`](#aws-cdk-sdk.chime.ChimeSipRuleTargetApplication)[]

---

##### `triggerType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.property.triggerType"></a>

- *Type:* `string`

---

##### `triggerValue`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.property.triggerValue"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateSipRuleSipRule.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesCreateUser <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateUser(__scope: Construct, __resources: string[], __input: ChimeCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateUserRequest`](#aws-cdk-sdk.chime.ChimeCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateUserUser`](#aws-cdk-sdk.chime.ChimeResponsesCreateUserUser)

---


### ChimeResponsesCreateUserUser <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateUserUser(__scope: Construct, __resources: string[], __input: ChimeCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateUserRequest`](#aws-cdk-sdk.chime.ChimeCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.accountId"></a>

- *Type:* `string`

---

##### `alexaForBusinessMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.alexaForBusinessMetadata"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateUserUserAlexaForBusinessMetadata`](#aws-cdk-sdk.chime.ChimeResponsesCreateUserUserAlexaForBusinessMetadata)

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.displayName"></a>

- *Type:* `string`

---

##### `invitedOn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.invitedOn"></a>

- *Type:* `string`

---

##### `licenseType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.licenseType"></a>

- *Type:* `string`

---

##### `personalPin`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.personalPin"></a>

- *Type:* `string`

---

##### `primaryEmail`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.primaryEmail"></a>

- *Type:* `string`

---

##### `primaryProvisionedNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.primaryProvisionedNumber"></a>

- *Type:* `string`

---

##### `registeredOn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.registeredOn"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.userId"></a>

- *Type:* `string`

---

##### `userInvitationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.userInvitationStatus"></a>

- *Type:* `string`

---

##### `userRegistrationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.userRegistrationStatus"></a>

- *Type:* `string`

---

##### `userType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUser.property.userType"></a>

- *Type:* `string`

---


### ChimeResponsesCreateUserUserAlexaForBusinessMetadata <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUserAlexaForBusinessMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUserAlexaForBusinessMetadata.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateUserUserAlexaForBusinessMetadata(__scope: Construct, __resources: string[], __input: ChimeCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUserAlexaForBusinessMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUserAlexaForBusinessMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUserAlexaForBusinessMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateUserRequest`](#aws-cdk-sdk.chime.ChimeCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `alexaForBusinessRoomArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUserAlexaForBusinessMetadata.property.alexaForBusinessRoomArn"></a>

- *Type:* `string`

---

##### `isAlexaForBusinessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateUserUserAlexaForBusinessMetadata.property.isAlexaForBusinessEnabled"></a>

- *Type:* `boolean`

---


### ChimeResponsesCreateVoiceConnector <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnector"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnector.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateVoiceConnector(__scope: Construct, __resources: string[], __input: ChimeCreateVoiceConnectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeCreateVoiceConnectorRequest)

---



#### Properties <a name="Properties"></a>

##### `voiceConnector`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnector.property.voiceConnector"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector`](#aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector)

---


### ChimeResponsesCreateVoiceConnectorGroup <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroup"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroup.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateVoiceConnectorGroup(__scope: Construct, __resources: string[], __input: ChimeCreateVoiceConnectorGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `voiceConnectorGroup`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroup.property.voiceConnectorGroup"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup`](#aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup)

---


### ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup(__scope: Construct, __resources: string[], __input: ChimeCreateVoiceConnectorGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeCreateVoiceConnectorGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup.property.name"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup.property.voiceConnectorGroupId"></a>

- *Type:* `string`

---

##### `voiceConnectorItems`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorGroupVoiceConnectorGroup.property.voiceConnectorItems"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorItem`](#aws-cdk-sdk.chime.ChimeVoiceConnectorItem)[]

---


### ChimeResponsesCreateVoiceConnectorVoiceConnector <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesCreateVoiceConnectorVoiceConnector(__scope: Construct, __resources: string[], __input: ChimeCreateVoiceConnectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeCreateVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeCreateVoiceConnectorRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.property.awsRegion"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.property.name"></a>

- *Type:* `string`

---

##### `outboundHostName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.property.outboundHostName"></a>

- *Type:* `string`

---

##### `requireEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.property.requireEncryption"></a>

- *Type:* `boolean`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesCreateVoiceConnectorVoiceConnector.property.voiceConnectorId"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeAppInstance <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstance"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstance.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeAppInstance(__scope: Construct, __resources: string[], __input: ChimeDescribeAppInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeAppInstanceRequest`](#aws-cdk-sdk.chime.ChimeDescribeAppInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstance`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstance.property.appInstance"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance`](#aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance)

---


### ChimeResponsesDescribeAppInstanceAdmin <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdmin"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdmin.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeAppInstanceAdmin(__scope: Construct, __resources: string[], __input: ChimeDescribeAppInstanceAdminRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdmin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdmin.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdmin.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest`](#aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceAdmin`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdmin.property.appInstanceAdmin"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin`](#aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin)

---


### ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin(__scope: Construct, __resources: string[], __input: ChimeDescribeAppInstanceAdminRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest`](#aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest)

---



#### Properties <a name="Properties"></a>

##### `admin`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin.property.admin"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin`](#aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin)

---

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdmin.property.createdTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin(__scope: Construct, __resources: string[], __input: ChimeDescribeAppInstanceAdminRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest`](#aws-cdk-sdk.chime.ChimeDescribeAppInstanceAdminRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeAppInstanceAppInstance <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeAppInstanceAppInstance(__scope: Construct, __resources: string[], __input: ChimeDescribeAppInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeAppInstanceRequest`](#aws-cdk-sdk.chime.ChimeDescribeAppInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceAppInstance.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeAppInstanceUser <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeAppInstanceUser(__scope: Construct, __resources: string[], __input: ChimeDescribeAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceUser`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUser.property.appInstanceUser"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser`](#aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser)

---


### ChimeResponsesDescribeAppInstanceUserAppInstanceUser <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser(__scope: Construct, __resources: string[], __input: ChimeDescribeAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser.property.appInstanceUserArn"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeAppInstanceUserAppInstanceUser.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannel <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannel"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannel.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannel(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannel.property.channel"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel)

---


### ChimeResponsesDescribeChannelBan <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBan"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBan.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelBan(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelBanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest)

---



#### Properties <a name="Properties"></a>

##### `channelBan`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBan.property.channelBan"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan)

---


### ChimeResponsesDescribeChannelBanChannelBan <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelBanChannelBan(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelBanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan.property.channelArn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanCreatedBy`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanCreatedBy)

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `member`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBan.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanMember`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanMember)

---


### ChimeResponsesDescribeChannelBanChannelBanCreatedBy <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanCreatedBy"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanCreatedBy.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelBanChannelBanCreatedBy(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelBanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanCreatedBy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanCreatedBy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanCreatedBy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanCreatedBy.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanCreatedBy.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelBanChannelBanMember <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanMember"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanMember.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelBanChannelBanMember(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelBanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelBanRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanMember.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelBanChannelBanMember.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelChannel <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelChannel(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.property.channelArn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannelCreatedBy`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannelCreatedBy)

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `lastMessageTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.property.lastMessageTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.property.metadata"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.property.mode"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.property.name"></a>

- *Type:* `string`

---

##### `privacy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannel.property.privacy"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelChannelCreatedBy <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannelCreatedBy"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannelCreatedBy.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelChannelCreatedBy(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannelCreatedBy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannelCreatedBy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannelCreatedBy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannelCreatedBy.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelChannelCreatedBy.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelMembership <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembership"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembership.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelMembership(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `channelMembership`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembership.property.channelMembership"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership)

---


### ChimeResponsesDescribeChannelMembershipChannelMembership <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelMembershipChannelMembership(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership.property.channelArn"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `invitedBy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership.property.invitedBy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy)

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `member`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipMember`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipMember)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembership.property.type"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipInvitedBy.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelMembershipChannelMembershipMember <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipMember"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipMember.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelMembershipChannelMembershipMember(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipMember.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipChannelMembershipMember.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelMembershipForAppInstanceUser <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUser(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelMembershipForAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `channelMembership`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUser.property.channelMembership"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership)

---


### ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelMembershipForAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceUserMembershipSummary`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership.property.appInstanceUserMembershipSummary"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary)

---

##### `channelSummary`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembership.property.channelSummary"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary)

---


### ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelMembershipForAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `readMarkerTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary.property.readMarkerTimestamp"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipAppInstanceUserMembershipSummary.property.type"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelMembershipForAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelMembershipForAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary.property.channelArn"></a>

- *Type:* `string`

---

##### `lastMessageTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary.property.lastMessageTimestamp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary.property.metadata"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary.property.mode"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary.property.name"></a>

- *Type:* `string`

---

##### `privacy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelMembershipForAppInstanceUserChannelMembershipChannelSummary.property.privacy"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelModeratedByAppInstanceUser <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUser(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelModeratedByAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUser.property.channel"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel)

---


### ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelModeratedByAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `channelSummary`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannel.property.channelSummary"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary)

---


### ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelModeratedByAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelModeratedByAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary.property.channelArn"></a>

- *Type:* `string`

---

##### `lastMessageTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary.property.lastMessageTimestamp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary.property.metadata"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary.property.mode"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary.property.name"></a>

- *Type:* `string`

---

##### `privacy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratedByAppInstanceUserChannelChannelSummary.property.privacy"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelModerator <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModerator"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModerator.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelModerator(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelModeratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest)

---



#### Properties <a name="Properties"></a>

##### `channelModerator`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModerator.property.channelModerator"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator)

---


### ChimeResponsesDescribeChannelModeratorChannelModerator <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelModeratorChannelModerator(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelModeratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator.property.channelArn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy)

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `moderator`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModerator.property.moderator"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorModerator`](#aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorModerator)

---


### ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelModeratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorCreatedBy.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesDescribeChannelModeratorChannelModeratorModerator <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorModerator"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorModerator.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDescribeChannelModeratorChannelModeratorModerator(__scope: Construct, __resources: string[], __input: ChimeDescribeChannelModeratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorModerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorModerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorModerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest`](#aws-cdk-sdk.chime.ChimeDescribeChannelModeratorRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorModerator.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDescribeChannelModeratorChannelModeratorModerator.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector(__scope: Construct, __resources: string[], __input: ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumberErrors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnector.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---


### ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup(__scope: Construct, __resources: string[], __input: ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumberErrors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesDisassociatePhoneNumbersFromVoiceConnectorGroup.property.phoneNumberErrors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberError`](#aws-cdk-sdk.chime.ChimePhoneNumberError)[]

---


### ChimeResponsesFetchAccount <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccount"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccount.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchAccount(__scope: Construct, __resources: string[], __input: ChimeGetAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAccountRequest`](#aws-cdk-sdk.chime.ChimeGetAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccount.property.account"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount`](#aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount)

---


### ChimeResponsesFetchAccountAccount <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchAccountAccount(__scope: Construct, __resources: string[], __input: ChimeGetAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAccountRequest`](#aws-cdk-sdk.chime.ChimeGetAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.property.accountId"></a>

- *Type:* `string`

---

##### `accountType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.property.accountType"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.property.awsAccountId"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `defaultLicense`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.property.defaultLicense"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.property.name"></a>

- *Type:* `string`

---

##### `signinDelegateGroups`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.property.signinDelegateGroups"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSigninDelegateGroup`](#aws-cdk-sdk.chime.ChimeSigninDelegateGroup)[]

---

##### `supportedLicenses`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountAccount.property.supportedLicenses"></a>

- *Type:* `string`[]

---


### ChimeResponsesFetchAccountSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchAccountSettings(__scope: Construct, __resources: string[], __input: ChimeGetAccountSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAccountSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetAccountSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `accountSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettings.property.accountSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettingsAccountSettings`](#aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettingsAccountSettings)

---


### ChimeResponsesFetchAccountSettingsAccountSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettingsAccountSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettingsAccountSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchAccountSettingsAccountSettings(__scope: Construct, __resources: string[], __input: ChimeGetAccountSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettingsAccountSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettingsAccountSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettingsAccountSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAccountSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetAccountSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `disableRemoteControl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettingsAccountSettings.property.disableRemoteControl"></a>

- *Type:* `boolean`

---

##### `enableDialOut`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAccountSettingsAccountSettings.property.enableDialOut"></a>

- *Type:* `boolean`

---


### ChimeResponsesFetchAppInstanceRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchAppInstanceRetentionSettings(__scope: Construct, __resources: string[], __input: ChimeGetAppInstanceRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceRetentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettings.property.appInstanceRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings`](#aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings)

---

##### `initiateDeletionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettings.property.initiateDeletionTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings(__scope: Construct, __resources: string[], __input: ChimeGetAppInstanceRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `channelRetentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings.property.channelRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings`](#aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings)

---


### ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings(__scope: Construct, __resources: string[], __input: ChimeGetAppInstanceRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetAppInstanceRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `retentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings.property.retentionDays"></a>

- *Type:* `number`

---


### ChimeResponsesFetchAppInstanceStreamingConfigurations <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceStreamingConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceStreamingConfigurations.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchAppInstanceStreamingConfigurations(__scope: Construct, __resources: string[], __input: ChimeGetAppInstanceStreamingConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceStreamingConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceStreamingConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceStreamingConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAppInstanceStreamingConfigurationsRequest`](#aws-cdk-sdk.chime.ChimeGetAppInstanceStreamingConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceStreamingConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAppInstanceStreamingConfigurations.property.appInstanceStreamingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration`](#aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration)[]

---


### ChimeResponsesFetchAttendee <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendee"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendee.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchAttendee(__scope: Construct, __resources: string[], __input: ChimeGetAttendeeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendee.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendee.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendee.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAttendeeRequest`](#aws-cdk-sdk.chime.ChimeGetAttendeeRequest)

---



#### Properties <a name="Properties"></a>

##### `attendee`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendee.property.attendee"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchAttendeeAttendee`](#aws-cdk-sdk.chime.ChimeResponsesFetchAttendeeAttendee)

---


### ChimeResponsesFetchAttendeeAttendee <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendeeAttendee"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendeeAttendee.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchAttendeeAttendee(__scope: Construct, __resources: string[], __input: ChimeGetAttendeeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendeeAttendee.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendeeAttendee.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendeeAttendee.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetAttendeeRequest`](#aws-cdk-sdk.chime.ChimeGetAttendeeRequest)

---



#### Properties <a name="Properties"></a>

##### `attendeeId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendeeAttendee.property.attendeeId"></a>

- *Type:* `string`

---

##### `externalUserId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendeeAttendee.property.externalUserId"></a>

- *Type:* `string`

---

##### `joinToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchAttendeeAttendee.property.joinToken"></a>

- *Type:* `string`

---


### ChimeResponsesFetchBot <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBot"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBot.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchBot(__scope: Construct, __resources: string[], __input: ChimeGetBotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetBotRequest`](#aws-cdk-sdk.chime.ChimeGetBotRequest)

---



#### Properties <a name="Properties"></a>

##### `bot`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBot.property.bot"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchBotBot`](#aws-cdk-sdk.chime.ChimeResponsesFetchBotBot)

---


### ChimeResponsesFetchBotBot <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchBotBot(__scope: Construct, __resources: string[], __input: ChimeGetBotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetBotRequest`](#aws-cdk-sdk.chime.ChimeGetBotRequest)

---



#### Properties <a name="Properties"></a>

##### `botEmail`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.property.botEmail"></a>

- *Type:* `string`

---

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.property.botId"></a>

- *Type:* `string`

---

##### `botType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.property.botType"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.property.disabled"></a>

- *Type:* `boolean`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.property.displayName"></a>

- *Type:* `string`

---

##### `securityToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.property.securityToken"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchBotBot.property.userId"></a>

- *Type:* `string`

---


### ChimeResponsesFetchChannelMessage <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessage"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessage.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchChannelMessage(__scope: Construct, __resources: string[], __input: ChimeGetChannelMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeGetChannelMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `channelMessage`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessage.property.channelMessage"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage`](#aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage)

---


### ChimeResponsesFetchChannelMessageChannelMessage <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchChannelMessageChannelMessage(__scope: Construct, __resources: string[], __input: ChimeGetChannelMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeGetChannelMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.channelArn"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.content"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `lastEditedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.lastEditedTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.messageId"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.metadata"></a>

- *Type:* `string`

---

##### `persistence`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.persistence"></a>

- *Type:* `string`

---

##### `redacted`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.redacted"></a>

- *Type:* `boolean`

---

##### `sender`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.sender"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessageSender`](#aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessageSender)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessage.property.type"></a>

- *Type:* `string`

---


### ChimeResponsesFetchChannelMessageChannelMessageSender <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessageSender"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessageSender.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchChannelMessageChannelMessageSender(__scope: Construct, __resources: string[], __input: ChimeGetChannelMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessageSender.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessageSender.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessageSender.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeGetChannelMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessageSender.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchChannelMessageChannelMessageSender.property.name"></a>

- *Type:* `string`

---


### ChimeResponsesFetchEventsConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchEventsConfiguration(__scope: Construct, __resources: string[], __input: ChimeGetEventsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetEventsConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetEventsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `eventsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfiguration.property.eventsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration`](#aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration)

---


### ChimeResponsesFetchEventsConfigurationEventsConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration(__scope: Construct, __resources: string[], __input: ChimeGetEventsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetEventsConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetEventsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration.property.botId"></a>

- *Type:* `string`

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration.property.lambdaFunctionArn"></a>

- *Type:* `string`

---

##### `outboundEventsHttpsEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchEventsConfigurationEventsConfiguration.property.outboundEventsHttpsEndpoint"></a>

- *Type:* `string`

---


### ChimeResponsesFetchGlobalSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchGlobalSettings(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettings.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `businessCalling`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettings.property.businessCalling"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsBusinessCalling`](#aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsBusinessCalling)

---

##### `voiceConnector`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettings.property.voiceConnector"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsVoiceConnector`](#aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsVoiceConnector)

---


### ChimeResponsesFetchGlobalSettingsBusinessCalling <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsBusinessCalling"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsBusinessCalling.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchGlobalSettingsBusinessCalling(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsBusinessCalling.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsBusinessCalling.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `cdrBucket`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsBusinessCalling.property.cdrBucket"></a>

- *Type:* `string`

---


### ChimeResponsesFetchGlobalSettingsVoiceConnector <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsVoiceConnector"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsVoiceConnector.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchGlobalSettingsVoiceConnector(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsVoiceConnector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsVoiceConnector.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `cdrBucket`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchGlobalSettingsVoiceConnector.property.cdrBucket"></a>

- *Type:* `string`

---


### ChimeResponsesFetchMeeting <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeeting"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeeting.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchMeeting(__scope: Construct, __resources: string[], __input: ChimeGetMeetingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeeting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeeting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeeting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetMeetingRequest`](#aws-cdk-sdk.chime.ChimeGetMeetingRequest)

---



#### Properties <a name="Properties"></a>

##### `meeting`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeeting.property.meeting"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting`](#aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting)

---


### ChimeResponsesFetchMeetingMeeting <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchMeetingMeeting(__scope: Construct, __resources: string[], __input: ChimeGetMeetingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetMeetingRequest`](#aws-cdk-sdk.chime.ChimeGetMeetingRequest)

---



#### Properties <a name="Properties"></a>

##### `externalMeetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting.property.externalMeetingId"></a>

- *Type:* `string`

---

##### `mediaPlacement`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting.property.mediaPlacement"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement`](#aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement)

---

##### `mediaRegion`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting.property.mediaRegion"></a>

- *Type:* `string`

---

##### `meetingId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeeting.property.meetingId"></a>

- *Type:* `string`

---


### ChimeResponsesFetchMeetingMeetingMediaPlacement <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchMeetingMeetingMediaPlacement(__scope: Construct, __resources: string[], __input: ChimeGetMeetingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetMeetingRequest`](#aws-cdk-sdk.chime.ChimeGetMeetingRequest)

---



#### Properties <a name="Properties"></a>

##### `audioFallbackUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.property.audioFallbackUrl"></a>

- *Type:* `string`

---

##### `audioHostUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.property.audioHostUrl"></a>

- *Type:* `string`

---

##### `screenDataUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.property.screenDataUrl"></a>

- *Type:* `string`

---

##### `screenSharingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.property.screenSharingUrl"></a>

- *Type:* `string`

---

##### `screenViewingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.property.screenViewingUrl"></a>

- *Type:* `string`

---

##### `signalingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.property.signalingUrl"></a>

- *Type:* `string`

---

##### `turnControlUrl`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMeetingMeetingMediaPlacement.property.turnControlUrl"></a>

- *Type:* `string`

---


### ChimeResponsesFetchMessagingSessionEndpoint <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpoint.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchMessagingSessionEndpoint(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpoint.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpointEndpoint`](#aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpointEndpoint)

---


### ChimeResponsesFetchMessagingSessionEndpointEndpoint <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpointEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpointEndpoint.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchMessagingSessionEndpointEndpoint(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpointEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpointEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchMessagingSessionEndpointEndpoint.property.url"></a>

- *Type:* `string`

---


### ChimeResponsesFetchPhoneNumber <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumber"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumber.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchPhoneNumber(__scope: Construct, __resources: string[], __input: ChimeGetPhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumber.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumber.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumber.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetPhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeGetPhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumber.property.phoneNumber"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber`](#aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber)

---


### ChimeResponsesFetchPhoneNumberOrder <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrder"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrder.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchPhoneNumberOrder(__scope: Construct, __resources: string[], __input: ChimeGetPhoneNumberOrderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetPhoneNumberOrderRequest`](#aws-cdk-sdk.chime.ChimeGetPhoneNumberOrderRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumberOrder`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrder.property.phoneNumberOrder"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder`](#aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder)

---


### ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder(__scope: Construct, __resources: string[], __input: ChimeGetPhoneNumberOrderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetPhoneNumberOrderRequest`](#aws-cdk-sdk.chime.ChimeGetPhoneNumberOrderRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `orderedPhoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder.property.orderedPhoneNumbers"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeOrderedPhoneNumber`](#aws-cdk-sdk.chime.ChimeOrderedPhoneNumber)[]

---

##### `phoneNumberOrderId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder.property.phoneNumberOrderId"></a>

- *Type:* `string`

---

##### `productType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder.property.productType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder.property.status"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberOrderPhoneNumberOrder.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesFetchPhoneNumberPhoneNumber <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchPhoneNumberPhoneNumber(__scope: Construct, __resources: string[], __input: ChimeGetPhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetPhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeGetPhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `associations`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.associations"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberAssociation`](#aws-cdk-sdk.chime.ChimePhoneNumberAssociation)[]

---

##### `callingName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.callingName"></a>

- *Type:* `string`

---

##### `callingNameStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.callingNameStatus"></a>

- *Type:* `string`

---

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.capabilities"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities`](#aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities)

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `deletionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.deletionTimestamp"></a>

- *Type:* `string`

---

##### `e164PhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.e164PhoneNumber"></a>

- *Type:* `string`

---

##### `phoneNumberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.phoneNumberId"></a>

- *Type:* `string`

---

##### `productType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.productType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.type"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumber.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities(__scope: Construct, __resources: string[], __input: ChimeGetPhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetPhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeGetPhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `inboundCall`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities.property.inboundCall"></a>

- *Type:* `boolean`

---

##### `inboundMms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities.property.inboundMms"></a>

- *Type:* `boolean`

---

##### `inboundSms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities.property.inboundSms"></a>

- *Type:* `boolean`

---

##### `outboundCall`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities.property.outboundCall"></a>

- *Type:* `boolean`

---

##### `outboundMms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities.property.outboundMms"></a>

- *Type:* `boolean`

---

##### `outboundSms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberPhoneNumberCapabilities.property.outboundSms"></a>

- *Type:* `boolean`

---


### ChimeResponsesFetchPhoneNumberSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchPhoneNumberSettings(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberSettings.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `callingName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberSettings.property.callingName"></a>

- *Type:* `string`

---

##### `callingNameUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchPhoneNumberSettings.property.callingNameUpdatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesFetchProxySession <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySession"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySession.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchProxySession(__scope: Construct, __resources: string[], __input: ChimeGetProxySessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetProxySessionRequest`](#aws-cdk-sdk.chime.ChimeGetProxySessionRequest)

---



#### Properties <a name="Properties"></a>

##### `proxySession`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySession.property.proxySession"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession`](#aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession)

---


### ChimeResponsesFetchProxySessionProxySession <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchProxySessionProxySession(__scope: Construct, __resources: string[], __input: ChimeGetProxySessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetProxySessionRequest`](#aws-cdk-sdk.chime.ChimeGetProxySessionRequest)

---



#### Properties <a name="Properties"></a>

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.capabilities"></a>

- *Type:* `string`[]

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.endedTimestamp"></a>

- *Type:* `string`

---

##### `expiryMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.expiryMinutes"></a>

- *Type:* `number`

---

##### `geoMatchLevel`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.geoMatchLevel"></a>

- *Type:* `string`

---

##### `geoMatchParams`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.geoMatchParams"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySessionGeoMatchParams`](#aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySessionGeoMatchParams)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.name"></a>

- *Type:* `string`

---

##### `numberSelectionBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.numberSelectionBehavior"></a>

- *Type:* `string`

---

##### `participants`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.participants"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeParticipant`](#aws-cdk-sdk.chime.ChimeParticipant)[]

---

##### `proxySessionId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.proxySessionId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.status"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySession.property.voiceConnectorId"></a>

- *Type:* `string`

---


### ChimeResponsesFetchProxySessionProxySessionGeoMatchParams <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySessionGeoMatchParams"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySessionGeoMatchParams.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchProxySessionProxySessionGeoMatchParams(__scope: Construct, __resources: string[], __input: ChimeGetProxySessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySessionGeoMatchParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySessionGeoMatchParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySessionGeoMatchParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetProxySessionRequest`](#aws-cdk-sdk.chime.ChimeGetProxySessionRequest)

---



#### Properties <a name="Properties"></a>

##### `areaCode`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySessionGeoMatchParams.property.areaCode"></a>

- *Type:* `string`

---

##### `country`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchProxySessionProxySessionGeoMatchParams.property.country"></a>

- *Type:* `string`

---


### ChimeResponsesFetchRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchRetentionSettings(__scope: Construct, __resources: string[], __input: ChimeGetRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `initiateDeletionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettings.property.initiateDeletionTimestamp"></a>

- *Type:* `string`

---

##### `retentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettings.property.retentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettings`](#aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettings)

---


### ChimeResponsesFetchRetentionSettingsRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchRetentionSettingsRetentionSettings(__scope: Construct, __resources: string[], __input: ChimeGetRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `conversationRetentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettings.property.conversationRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings`](#aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings)

---

##### `roomRetentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettings.property.roomRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings`](#aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings)

---


### ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings(__scope: Construct, __resources: string[], __input: ChimeGetRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `retentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsConversationRetentionSettings.property.retentionDays"></a>

- *Type:* `number`

---


### ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings(__scope: Construct, __resources: string[], __input: ChimeGetRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `retentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRetentionSettingsRetentionSettingsRoomRetentionSettings.property.retentionDays"></a>

- *Type:* `number`

---


### ChimeResponsesFetchRoom <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoom"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoom.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchRoom(__scope: Construct, __resources: string[], __input: ChimeGetRoomRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoom.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoom.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoom.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetRoomRequest`](#aws-cdk-sdk.chime.ChimeGetRoomRequest)

---



#### Properties <a name="Properties"></a>

##### `room`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoom.property.room"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom`](#aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom)

---


### ChimeResponsesFetchRoomRoom <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchRoomRoom(__scope: Construct, __resources: string[], __input: ChimeGetRoomRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetRoomRequest`](#aws-cdk-sdk.chime.ChimeGetRoomRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom.property.accountId"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom.property.createdBy"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom.property.name"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom.property.roomId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchRoomRoom.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesFetchSipMediaApplication <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplication"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplication.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchSipMediaApplication(__scope: Construct, __resources: string[], __input: ChimeGetSipMediaApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetSipMediaApplicationRequest`](#aws-cdk-sdk.chime.ChimeGetSipMediaApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `sipMediaApplication`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplication.property.sipMediaApplication"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication`](#aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication)

---


### ChimeResponsesFetchSipMediaApplicationLoggingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchSipMediaApplicationLoggingConfiguration(__scope: Construct, __resources: string[], __input: ChimeGetSipMediaApplicationLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetSipMediaApplicationLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetSipMediaApplicationLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `sipMediaApplicationLoggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfiguration.property.sipMediaApplicationLoggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration`](#aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration)

---


### ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration(__scope: Construct, __resources: string[], __input: ChimeGetSipMediaApplicationLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetSipMediaApplicationLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetSipMediaApplicationLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `enableSipMediaApplicationMessageLogs`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration.property.enableSipMediaApplicationMessageLogs"></a>

- *Type:* `boolean`

---


### ChimeResponsesFetchSipMediaApplicationSipMediaApplication <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication(__scope: Construct, __resources: string[], __input: ChimeGetSipMediaApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetSipMediaApplicationRequest`](#aws-cdk-sdk.chime.ChimeGetSipMediaApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication.property.awsRegion"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint`](#aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication.property.name"></a>

- *Type:* `string`

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipMediaApplicationSipMediaApplication.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesFetchSipRule <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRule"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRule.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchSipRule(__scope: Construct, __resources: string[], __input: ChimeGetSipRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetSipRuleRequest`](#aws-cdk-sdk.chime.ChimeGetSipRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `sipRule`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRule.property.sipRule"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule`](#aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule)

---


### ChimeResponsesFetchSipRuleSipRule <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchSipRuleSipRule(__scope: Construct, __resources: string[], __input: ChimeGetSipRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetSipRuleRequest`](#aws-cdk-sdk.chime.ChimeGetSipRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.property.disabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.property.name"></a>

- *Type:* `string`

---

##### `sipRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.property.sipRuleId"></a>

- *Type:* `string`

---

##### `targetApplications`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.property.targetApplications"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRuleTargetApplication`](#aws-cdk-sdk.chime.ChimeSipRuleTargetApplication)[]

---

##### `triggerType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.property.triggerType"></a>

- *Type:* `string`

---

##### `triggerValue`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.property.triggerValue"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchSipRuleSipRule.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesFetchUser <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchUser(__scope: Construct, __resources: string[], __input: ChimeGetUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetUserRequest`](#aws-cdk-sdk.chime.ChimeGetUserRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchUserUser`](#aws-cdk-sdk.chime.ChimeResponsesFetchUserUser)

---


### ChimeResponsesFetchUserSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchUserSettings(__scope: Construct, __resources: string[], __input: ChimeGetUserSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetUserSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetUserSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `userSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettings.property.userSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettings`](#aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettings)

---


### ChimeResponsesFetchUserSettingsUserSettings <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchUserSettingsUserSettings(__scope: Construct, __resources: string[], __input: ChimeGetUserSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetUserSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetUserSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `telephony`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettings.property.telephony"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony`](#aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony)

---


### ChimeResponsesFetchUserSettingsUserSettingsTelephony <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony(__scope: Construct, __resources: string[], __input: ChimeGetUserSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetUserSettingsRequest`](#aws-cdk-sdk.chime.ChimeGetUserSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `inboundCalling`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony.property.inboundCalling"></a>

- *Type:* `boolean`

---

##### `outboundCalling`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony.property.outboundCalling"></a>

- *Type:* `boolean`

---

##### `sms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserSettingsUserSettingsTelephony.property.sms"></a>

- *Type:* `boolean`

---


### ChimeResponsesFetchUserUser <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchUserUser(__scope: Construct, __resources: string[], __input: ChimeGetUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetUserRequest`](#aws-cdk-sdk.chime.ChimeGetUserRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.accountId"></a>

- *Type:* `string`

---

##### `alexaForBusinessMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.alexaForBusinessMetadata"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchUserUserAlexaForBusinessMetadata`](#aws-cdk-sdk.chime.ChimeResponsesFetchUserUserAlexaForBusinessMetadata)

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.displayName"></a>

- *Type:* `string`

---

##### `invitedOn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.invitedOn"></a>

- *Type:* `string`

---

##### `licenseType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.licenseType"></a>

- *Type:* `string`

---

##### `personalPin`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.personalPin"></a>

- *Type:* `string`

---

##### `primaryEmail`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.primaryEmail"></a>

- *Type:* `string`

---

##### `primaryProvisionedNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.primaryProvisionedNumber"></a>

- *Type:* `string`

---

##### `registeredOn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.registeredOn"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.userId"></a>

- *Type:* `string`

---

##### `userInvitationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.userInvitationStatus"></a>

- *Type:* `string`

---

##### `userRegistrationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.userRegistrationStatus"></a>

- *Type:* `string`

---

##### `userType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUser.property.userType"></a>

- *Type:* `string`

---


### ChimeResponsesFetchUserUserAlexaForBusinessMetadata <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUserAlexaForBusinessMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUserAlexaForBusinessMetadata.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchUserUserAlexaForBusinessMetadata(__scope: Construct, __resources: string[], __input: ChimeGetUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUserAlexaForBusinessMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUserAlexaForBusinessMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUserAlexaForBusinessMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetUserRequest`](#aws-cdk-sdk.chime.ChimeGetUserRequest)

---



#### Properties <a name="Properties"></a>

##### `alexaForBusinessRoomArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUserAlexaForBusinessMetadata.property.alexaForBusinessRoomArn"></a>

- *Type:* `string`

---

##### `isAlexaForBusinessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchUserUserAlexaForBusinessMetadata.property.isAlexaForBusinessEnabled"></a>

- *Type:* `boolean`

---


### ChimeResponsesFetchVoiceConnector <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnector"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnector.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnector(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorRequest)

---



#### Properties <a name="Properties"></a>

##### `voiceConnector`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnector.property.voiceConnector"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector`](#aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector)

---


### ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `emergencyCallingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfiguration.property.emergencyCallingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration`](#aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration)

---


### ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `dnis`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration.property.dnis"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDnisEmergencyCallingConfiguration`](#aws-cdk-sdk.chime.ChimeDnisEmergencyCallingConfiguration)[]

---


### ChimeResponsesFetchVoiceConnectorGroup <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroup"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroup.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorGroup(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `voiceConnectorGroup`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroup.property.voiceConnectorGroup"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup`](#aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup)

---


### ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup.property.name"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup.property.voiceConnectorGroupId"></a>

- *Type:* `string`

---

##### `voiceConnectorItems`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorGroupVoiceConnectorGroup.property.voiceConnectorItems"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorItem`](#aws-cdk-sdk.chime.ChimeVoiceConnectorItem)[]

---


### ChimeResponsesFetchVoiceConnectorLoggingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorLoggingConfiguration(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfiguration.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration`](#aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration)

---


### ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `enableSipLogs`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorLoggingConfigurationLoggingConfiguration.property.enableSipLogs"></a>

- *Type:* `boolean`

---


### ChimeResponsesFetchVoiceConnectorOrigination <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOrigination"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOrigination.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorOrigination(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorOriginationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOrigination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOrigination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOrigination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorOriginationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorOriginationRequest)

---



#### Properties <a name="Properties"></a>

##### `origination`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOrigination.property.origination"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOriginationOrigination`](#aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOriginationOrigination)

---


### ChimeResponsesFetchVoiceConnectorOriginationOrigination <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOriginationOrigination"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOriginationOrigination.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorOriginationOrigination(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorOriginationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOriginationOrigination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOriginationOrigination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOriginationOrigination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorOriginationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorOriginationRequest)

---



#### Properties <a name="Properties"></a>

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOriginationOrigination.property.disabled"></a>

- *Type:* `boolean`

---

##### `routes`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorOriginationOrigination.property.routes"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeOriginationRoute`](#aws-cdk-sdk.chime.ChimeOriginationRoute)[]

---


### ChimeResponsesFetchVoiceConnectorProxy <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxy"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxy.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorProxy(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorProxyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorProxyRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorProxyRequest)

---



#### Properties <a name="Properties"></a>

##### `proxy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxy.property.proxy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy`](#aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy)

---


### ChimeResponsesFetchVoiceConnectorProxyProxy <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorProxyProxy(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorProxyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorProxyRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorProxyRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultSessionExpiryMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy.property.defaultSessionExpiryMinutes"></a>

- *Type:* `number`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy.property.disabled"></a>

- *Type:* `boolean`

---

##### `fallBackPhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy.property.fallBackPhoneNumber"></a>

- *Type:* `string`

---

##### `phoneNumberCountries`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorProxyProxy.property.phoneNumberCountries"></a>

- *Type:* `string`[]

---


### ChimeResponsesFetchVoiceConnectorStreamingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorStreamingConfiguration(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorStreamingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorStreamingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorStreamingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `streamingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfiguration.property.streamingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration`](#aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration)

---


### ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorStreamingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorStreamingConfigurationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorStreamingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `dataRetentionInHours`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration.property.dataRetentionInHours"></a>

- *Type:* `number`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration.property.disabled"></a>

- *Type:* `boolean`

---

##### `streamingNotificationTargets`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorStreamingConfigurationStreamingConfiguration.property.streamingNotificationTargets"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeStreamingNotificationTarget`](#aws-cdk-sdk.chime.ChimeStreamingNotificationTarget)[]

---


### ChimeResponsesFetchVoiceConnectorTermination <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTermination"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTermination.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorTermination(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorTerminationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTermination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTermination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTermination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationRequest)

---



#### Properties <a name="Properties"></a>

##### `termination`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTermination.property.termination"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination`](#aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination)

---


### ChimeResponsesFetchVoiceConnectorTerminationHealth <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealth"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealth.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorTerminationHealth(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorTerminationHealthRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationHealthRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationHealthRequest)

---



#### Properties <a name="Properties"></a>

##### `terminationHealth`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealth.property.terminationHealth"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth`](#aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth)

---


### ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorTerminationHealthRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationHealthRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationHealthRequest)

---



#### Properties <a name="Properties"></a>

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth.property.source"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationHealthTerminationHealth.property.timestamp"></a>

- *Type:* `string`

---


### ChimeResponsesFetchVoiceConnectorTerminationTermination <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorTerminationTermination(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorTerminationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorTerminationRequest)

---



#### Properties <a name="Properties"></a>

##### `callingRegions`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination.property.callingRegions"></a>

- *Type:* `string`[]

---

##### `cidrAllowedList`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination.property.cidrAllowedList"></a>

- *Type:* `string`[]

---

##### `cpsLimit`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination.property.cpsLimit"></a>

- *Type:* `number`

---

##### `defaultPhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination.property.defaultPhoneNumber"></a>

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorTerminationTermination.property.disabled"></a>

- *Type:* `boolean`

---


### ChimeResponsesFetchVoiceConnectorVoiceConnector <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesFetchVoiceConnectorVoiceConnector(__scope: Construct, __resources: string[], __input: ChimeGetVoiceConnectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeGetVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeGetVoiceConnectorRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.property.awsRegion"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.property.name"></a>

- *Type:* `string`

---

##### `outboundHostName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.property.outboundHostName"></a>

- *Type:* `string`

---

##### `requireEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.property.requireEncryption"></a>

- *Type:* `boolean`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesFetchVoiceConnectorVoiceConnector.property.voiceConnectorId"></a>

- *Type:* `string`

---


### ChimeResponsesInviteUsers <a name="aws-cdk-sdk.chime.ChimeResponsesInviteUsers"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesInviteUsers.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesInviteUsers(__scope: Construct, __resources: string[], __input: ChimeInviteUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesInviteUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesInviteUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesInviteUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeInviteUsersRequest`](#aws-cdk-sdk.chime.ChimeInviteUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `invites`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesInviteUsers.property.invites"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeInvite`](#aws-cdk-sdk.chime.ChimeInvite)[]

---


### ChimeResponsesListAccounts <a name="aws-cdk-sdk.chime.ChimeResponsesListAccounts"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListAccounts.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListAccounts(__scope: Construct, __resources: string[], __input: ChimeListAccountsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAccounts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAccounts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAccounts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAccountsRequest`](#aws-cdk-sdk.chime.ChimeListAccountsRequest)

---



#### Properties <a name="Properties"></a>

##### `accounts`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAccounts.property.accounts"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAccount`](#aws-cdk-sdk.chime.ChimeAccount)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAccounts.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListAppInstanceAdmins <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceAdmins"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceAdmins.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListAppInstanceAdmins(__scope: Construct, __resources: string[], __input: ChimeListAppInstanceAdminsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceAdmins.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceAdmins.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceAdmins.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAppInstanceAdminsRequest`](#aws-cdk-sdk.chime.ChimeListAppInstanceAdminsRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceAdmins`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceAdmins.property.appInstanceAdmins"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceAdminSummary`](#aws-cdk-sdk.chime.ChimeAppInstanceAdminSummary)[]

---

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceAdmins.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceAdmins.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListAppInstances <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstances"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstances.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListAppInstances(__scope: Construct, __resources: string[], __input: ChimeListAppInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAppInstancesRequest`](#aws-cdk-sdk.chime.ChimeListAppInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstances`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstances.property.appInstances"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceSummary`](#aws-cdk-sdk.chime.ChimeAppInstanceSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstances.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListAppInstanceUsers <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceUsers"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceUsers.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListAppInstanceUsers(__scope: Construct, __resources: string[], __input: ChimeListAppInstanceUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAppInstanceUsersRequest`](#aws-cdk-sdk.chime.ChimeListAppInstanceUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceUsers.property.appInstanceArn"></a>

- *Type:* `string`

---

##### `appInstanceUsers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceUsers.property.appInstanceUsers"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceUserSummary`](#aws-cdk-sdk.chime.ChimeAppInstanceUserSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAppInstanceUsers.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListAttendees <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendees"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendees.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListAttendees(__scope: Construct, __resources: string[], __input: ChimeListAttendeesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendees.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendees.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendees.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAttendeesRequest`](#aws-cdk-sdk.chime.ChimeListAttendeesRequest)

---



#### Properties <a name="Properties"></a>

##### `attendees`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendees.property.attendees"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAttendee`](#aws-cdk-sdk.chime.ChimeAttendee)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendees.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListAttendeeTags <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendeeTags"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendeeTags.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListAttendeeTags(__scope: Construct, __resources: string[], __input: ChimeListAttendeeTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendeeTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendeeTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendeeTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListAttendeeTagsRequest`](#aws-cdk-sdk.chime.ChimeListAttendeeTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListAttendeeTags.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---


### ChimeResponsesListBots <a name="aws-cdk-sdk.chime.ChimeResponsesListBots"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListBots.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListBots(__scope: Construct, __resources: string[], __input: ChimeListBotsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListBots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListBots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListBots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListBotsRequest`](#aws-cdk-sdk.chime.ChimeListBotsRequest)

---



#### Properties <a name="Properties"></a>

##### `bots`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListBots.property.bots"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeBot`](#aws-cdk-sdk.chime.ChimeBot)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListBots.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListChannelBans <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelBans"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelBans.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListChannelBans(__scope: Construct, __resources: string[], __input: ChimeListChannelBansRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelBans.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelBans.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelBans.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelBansRequest`](#aws-cdk-sdk.chime.ChimeListChannelBansRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelBans.property.channelArn"></a>

- *Type:* `string`

---

##### `channelBans`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelBans.property.channelBans"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelBanSummary`](#aws-cdk-sdk.chime.ChimeChannelBanSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelBans.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListChannelMemberships <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMemberships"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMemberships.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListChannelMemberships(__scope: Construct, __resources: string[], __input: ChimeListChannelMembershipsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMemberships.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMemberships.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMemberships.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelMembershipsRequest`](#aws-cdk-sdk.chime.ChimeListChannelMembershipsRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMemberships.property.channelArn"></a>

- *Type:* `string`

---

##### `channelMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMemberships.property.channelMemberships"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelMembershipSummary`](#aws-cdk-sdk.chime.ChimeChannelMembershipSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMemberships.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListChannelMembershipsForAppInstanceUser <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMembershipsForAppInstanceUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMembershipsForAppInstanceUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListChannelMembershipsForAppInstanceUser(__scope: Construct, __resources: string[], __input: ChimeListChannelMembershipsForAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMembershipsForAppInstanceUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMembershipsForAppInstanceUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMembershipsForAppInstanceUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeListChannelMembershipsForAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `channelMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMembershipsForAppInstanceUser.property.channelMemberships"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelMembershipForAppInstanceUserSummary`](#aws-cdk-sdk.chime.ChimeChannelMembershipForAppInstanceUserSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMembershipsForAppInstanceUser.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListChannelMessages <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMessages"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMessages.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListChannelMessages(__scope: Construct, __resources: string[], __input: ChimeListChannelMessagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMessages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMessages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMessages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelMessagesRequest`](#aws-cdk-sdk.chime.ChimeListChannelMessagesRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMessages.property.channelArn"></a>

- *Type:* `string`

---

##### `channelMessages`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMessages.property.channelMessages"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelMessageSummary`](#aws-cdk-sdk.chime.ChimeChannelMessageSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelMessages.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListChannelModerators <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelModerators"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelModerators.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListChannelModerators(__scope: Construct, __resources: string[], __input: ChimeListChannelModeratorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelModerators.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelModerators.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelModerators.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelModeratorsRequest`](#aws-cdk-sdk.chime.ChimeListChannelModeratorsRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelModerators.property.channelArn"></a>

- *Type:* `string`

---

##### `channelModerators`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelModerators.property.channelModerators"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelModeratorSummary`](#aws-cdk-sdk.chime.ChimeChannelModeratorSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelModerators.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListChannels <a name="aws-cdk-sdk.chime.ChimeResponsesListChannels"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListChannels.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListChannels(__scope: Construct, __resources: string[], __input: ChimeListChannelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelsRequest`](#aws-cdk-sdk.chime.ChimeListChannelsRequest)

---



#### Properties <a name="Properties"></a>

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannels.property.channels"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelSummary`](#aws-cdk-sdk.chime.ChimeChannelSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannels.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListChannelsModeratedByAppInstanceUser <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelsModeratedByAppInstanceUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelsModeratedByAppInstanceUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListChannelsModeratedByAppInstanceUser(__scope: Construct, __resources: string[], __input: ChimeListChannelsModeratedByAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelsModeratedByAppInstanceUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelsModeratedByAppInstanceUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelsModeratedByAppInstanceUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeListChannelsModeratedByAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelsModeratedByAppInstanceUser.property.channels"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeChannelModeratedByAppInstanceUserSummary`](#aws-cdk-sdk.chime.ChimeChannelModeratedByAppInstanceUserSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListChannelsModeratedByAppInstanceUser.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListMeetings <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListMeetings(__scope: Construct, __resources: string[], __input: ChimeListMeetingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListMeetingsRequest`](#aws-cdk-sdk.chime.ChimeListMeetingsRequest)

---



#### Properties <a name="Properties"></a>

##### `meetings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetings.property.meetings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeMeeting`](#aws-cdk-sdk.chime.ChimeMeeting)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetings.property.nextToken"></a>

- *Type:* `string`

---


### ChimeResponsesListMeetingTags <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetingTags"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetingTags.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListMeetingTags(__scope: Construct, __resources: string[], __input: ChimeListMeetingTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetingTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetingTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetingTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListMeetingTagsRequest`](#aws-cdk-sdk.chime.ChimeListMeetingTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListMeetingTags.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---


### ChimeResponsesListPhoneNumberOrders <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumberOrders"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumberOrders.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListPhoneNumberOrders(__scope: Construct, __resources: string[], __input: ChimeListPhoneNumberOrdersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumberOrders.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumberOrders.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumberOrders.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListPhoneNumberOrdersRequest`](#aws-cdk-sdk.chime.ChimeListPhoneNumberOrdersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumberOrders.property.nextToken"></a>

- *Type:* `string`

---

##### `phoneNumberOrders`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumberOrders.property.phoneNumberOrders"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberOrder`](#aws-cdk-sdk.chime.ChimePhoneNumberOrder)[]

---


### ChimeResponsesListPhoneNumbers <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumbers"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumbers.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListPhoneNumbers(__scope: Construct, __resources: string[], __input: ChimeListPhoneNumbersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumbers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumbers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumbers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest`](#aws-cdk-sdk.chime.ChimeListPhoneNumbersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumbers.property.nextToken"></a>

- *Type:* `string`

---

##### `phoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListPhoneNumbers.property.phoneNumbers"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumber`](#aws-cdk-sdk.chime.ChimePhoneNumber)[]

---


### ChimeResponsesListProxySessions <a name="aws-cdk-sdk.chime.ChimeResponsesListProxySessions"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListProxySessions.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListProxySessions(__scope: Construct, __resources: string[], __input: ChimeListProxySessionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListProxySessions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListProxySessions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListProxySessions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListProxySessionsRequest`](#aws-cdk-sdk.chime.ChimeListProxySessionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListProxySessions.property.nextToken"></a>

- *Type:* `string`

---

##### `proxySessions`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListProxySessions.property.proxySessions"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeProxySession`](#aws-cdk-sdk.chime.ChimeProxySession)[]

---


### ChimeResponsesListRoomMemberships <a name="aws-cdk-sdk.chime.ChimeResponsesListRoomMemberships"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListRoomMemberships.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListRoomMemberships(__scope: Construct, __resources: string[], __input: ChimeListRoomMembershipsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListRoomMemberships.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListRoomMemberships.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListRoomMemberships.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListRoomMembershipsRequest`](#aws-cdk-sdk.chime.ChimeListRoomMembershipsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListRoomMemberships.property.nextToken"></a>

- *Type:* `string`

---

##### `roomMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListRoomMemberships.property.roomMemberships"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRoomMembership`](#aws-cdk-sdk.chime.ChimeRoomMembership)[]

---


### ChimeResponsesListRooms <a name="aws-cdk-sdk.chime.ChimeResponsesListRooms"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListRooms.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListRooms(__scope: Construct, __resources: string[], __input: ChimeListRoomsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListRooms.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListRooms.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListRooms.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListRoomsRequest`](#aws-cdk-sdk.chime.ChimeListRoomsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListRooms.property.nextToken"></a>

- *Type:* `string`

---

##### `rooms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListRooms.property.rooms"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRoom`](#aws-cdk-sdk.chime.ChimeRoom)[]

---


### ChimeResponsesListSipMediaApplications <a name="aws-cdk-sdk.chime.ChimeResponsesListSipMediaApplications"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListSipMediaApplications.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListSipMediaApplications(__scope: Construct, __resources: string[], __input: ChimeListSipMediaApplicationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListSipMediaApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListSipMediaApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListSipMediaApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListSipMediaApplicationsRequest`](#aws-cdk-sdk.chime.ChimeListSipMediaApplicationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListSipMediaApplications.property.nextToken"></a>

- *Type:* `string`

---

##### `sipMediaApplications`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListSipMediaApplications.property.sipMediaApplications"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplication`](#aws-cdk-sdk.chime.ChimeSipMediaApplication)[]

---


### ChimeResponsesListSipRules <a name="aws-cdk-sdk.chime.ChimeResponsesListSipRules"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListSipRules.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListSipRules(__scope: Construct, __resources: string[], __input: ChimeListSipRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListSipRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListSipRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListSipRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListSipRulesRequest`](#aws-cdk-sdk.chime.ChimeListSipRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListSipRules.property.nextToken"></a>

- *Type:* `string`

---

##### `sipRules`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListSipRules.property.sipRules"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRule`](#aws-cdk-sdk.chime.ChimeSipRule)[]

---


### ChimeResponsesListTagsForResource <a name="aws-cdk-sdk.chime.ChimeResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListTagsForResource.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: ChimeListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListTagsForResourceRequest`](#aws-cdk-sdk.chime.ChimeListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeTag`](#aws-cdk-sdk.chime.ChimeTag)[]

---


### ChimeResponsesListUsers <a name="aws-cdk-sdk.chime.ChimeResponsesListUsers"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListUsers.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListUsers(__scope: Construct, __resources: string[], __input: ChimeListUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListUsersRequest`](#aws-cdk-sdk.chime.ChimeListUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListUsers.property.nextToken"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListUsers.property.users"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUser`](#aws-cdk-sdk.chime.ChimeUser)[]

---


### ChimeResponsesListVoiceConnectorGroups <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorGroups"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorGroups.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListVoiceConnectorGroups(__scope: Construct, __resources: string[], __input: ChimeListVoiceConnectorGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListVoiceConnectorGroupsRequest`](#aws-cdk-sdk.chime.ChimeListVoiceConnectorGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `voiceConnectorGroups`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorGroups.property.voiceConnectorGroups"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorGroup`](#aws-cdk-sdk.chime.ChimeVoiceConnectorGroup)[]

---


### ChimeResponsesListVoiceConnectors <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectors"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectors.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListVoiceConnectors(__scope: Construct, __resources: string[], __input: ChimeListVoiceConnectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListVoiceConnectorsRequest`](#aws-cdk-sdk.chime.ChimeListVoiceConnectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectors.property.nextToken"></a>

- *Type:* `string`

---

##### `voiceConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectors.property.voiceConnectors"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnector`](#aws-cdk-sdk.chime.ChimeVoiceConnector)[]

---


### ChimeResponsesListVoiceConnectorTerminationCredentials <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorTerminationCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorTerminationCredentials.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesListVoiceConnectorTerminationCredentials(__scope: Construct, __resources: string[], __input: ChimeListVoiceConnectorTerminationCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorTerminationCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorTerminationCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorTerminationCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeListVoiceConnectorTerminationCredentialsRequest`](#aws-cdk-sdk.chime.ChimeListVoiceConnectorTerminationCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `usernames`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesListVoiceConnectorTerminationCredentials.property.usernames"></a>

- *Type:* `string`[]

---


### ChimeResponsesPutAppInstanceRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutAppInstanceRetentionSettings(__scope: Construct, __resources: string[], __input: ChimePutAppInstanceRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceRetentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettings.property.appInstanceRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings`](#aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings)

---

##### `initiateDeletionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettings.property.initiateDeletionTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings(__scope: Construct, __resources: string[], __input: ChimePutAppInstanceRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `channelRetentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings.property.channelRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings`](#aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings)

---


### ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings(__scope: Construct, __resources: string[], __input: ChimePutAppInstanceRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimePutAppInstanceRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `retentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings.property.retentionDays"></a>

- *Type:* `number`

---


### ChimeResponsesPutAppInstanceStreamingConfigurations <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceStreamingConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceStreamingConfigurations.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutAppInstanceStreamingConfigurations(__scope: Construct, __resources: string[], __input: ChimePutAppInstanceStreamingConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceStreamingConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceStreamingConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceStreamingConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutAppInstanceStreamingConfigurationsRequest`](#aws-cdk-sdk.chime.ChimePutAppInstanceStreamingConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceStreamingConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutAppInstanceStreamingConfigurations.property.appInstanceStreamingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration`](#aws-cdk-sdk.chime.ChimeAppInstanceStreamingConfiguration)[]

---


### ChimeResponsesPutEventsConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutEventsConfiguration(__scope: Construct, __resources: string[], __input: ChimePutEventsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `eventsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfiguration.property.eventsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutEventsConfigurationEventsConfiguration`](#aws-cdk-sdk.chime.ChimeResponsesPutEventsConfigurationEventsConfiguration)

---


### ChimeResponsesPutEventsConfigurationEventsConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfigurationEventsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfigurationEventsConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutEventsConfigurationEventsConfiguration(__scope: Construct, __resources: string[], __input: ChimePutEventsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfigurationEventsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfigurationEventsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfigurationEventsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutEventsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfigurationEventsConfiguration.property.botId"></a>

- *Type:* `string`

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfigurationEventsConfiguration.property.lambdaFunctionArn"></a>

- *Type:* `string`

---

##### `outboundEventsHttpsEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutEventsConfigurationEventsConfiguration.property.outboundEventsHttpsEndpoint"></a>

- *Type:* `string`

---


### ChimeResponsesPutRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutRetentionSettings(__scope: Construct, __resources: string[], __input: ChimePutRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `initiateDeletionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettings.property.initiateDeletionTimestamp"></a>

- *Type:* `string`

---

##### `retentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettings.property.retentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettings`](#aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettings)

---


### ChimeResponsesPutRetentionSettingsRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutRetentionSettingsRetentionSettings(__scope: Construct, __resources: string[], __input: ChimePutRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `conversationRetentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettings.property.conversationRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings`](#aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings)

---

##### `roomRetentionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettings.property.roomRetentionSettings"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings`](#aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings)

---


### ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings(__scope: Construct, __resources: string[], __input: ChimePutRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `retentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsConversationRetentionSettings.property.retentionDays"></a>

- *Type:* `number`

---


### ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings(__scope: Construct, __resources: string[], __input: ChimePutRetentionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest`](#aws-cdk-sdk.chime.ChimePutRetentionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `retentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutRetentionSettingsRetentionSettingsRoomRetentionSettings.property.retentionDays"></a>

- *Type:* `number`

---


### ChimeResponsesPutSipMediaApplicationLoggingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutSipMediaApplicationLoggingConfiguration(__scope: Construct, __resources: string[], __input: ChimePutSipMediaApplicationLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `sipMediaApplicationLoggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfiguration.property.sipMediaApplicationLoggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration`](#aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration)

---


### ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration(__scope: Construct, __resources: string[], __input: ChimePutSipMediaApplicationLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutSipMediaApplicationLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `enableSipMediaApplicationMessageLogs`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutSipMediaApplicationLoggingConfigurationSipMediaApplicationLoggingConfiguration.property.enableSipMediaApplicationMessageLogs"></a>

- *Type:* `boolean`

---


### ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorEmergencyCallingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `emergencyCallingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfiguration.property.emergencyCallingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration`](#aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration)

---


### ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorEmergencyCallingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorEmergencyCallingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `dnis`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorEmergencyCallingConfigurationEmergencyCallingConfiguration.property.dnis"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeDnisEmergencyCallingConfiguration`](#aws-cdk-sdk.chime.ChimeDnisEmergencyCallingConfiguration)[]

---


### ChimeResponsesPutVoiceConnectorLoggingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorLoggingConfiguration(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfiguration.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration`](#aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration)

---


### ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `enableSipLogs`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorLoggingConfigurationLoggingConfiguration.property.enableSipLogs"></a>

- *Type:* `boolean`

---


### ChimeResponsesPutVoiceConnectorOrigination <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOrigination"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOrigination.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorOrigination(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorOriginationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOrigination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOrigination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOrigination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationRequest)

---



#### Properties <a name="Properties"></a>

##### `origination`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOrigination.property.origination"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOriginationOrigination`](#aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOriginationOrigination)

---


### ChimeResponsesPutVoiceConnectorOriginationOrigination <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOriginationOrigination"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOriginationOrigination.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorOriginationOrigination(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorOriginationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOriginationOrigination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOriginationOrigination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOriginationOrigination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorOriginationRequest)

---



#### Properties <a name="Properties"></a>

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOriginationOrigination.property.disabled"></a>

- *Type:* `boolean`

---

##### `routes`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorOriginationOrigination.property.routes"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeOriginationRoute`](#aws-cdk-sdk.chime.ChimeOriginationRoute)[]

---


### ChimeResponsesPutVoiceConnectorProxy <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxy"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxy.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorProxy(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorProxyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest)

---



#### Properties <a name="Properties"></a>

##### `proxy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxy.property.proxy"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy`](#aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy)

---


### ChimeResponsesPutVoiceConnectorProxyProxy <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorProxyProxy(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorProxyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorProxyRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultSessionExpiryMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy.property.defaultSessionExpiryMinutes"></a>

- *Type:* `number`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy.property.disabled"></a>

- *Type:* `boolean`

---

##### `fallBackPhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy.property.fallBackPhoneNumber"></a>

- *Type:* `string`

---

##### `phoneNumberCountries`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorProxyProxy.property.phoneNumberCountries"></a>

- *Type:* `string`[]

---


### ChimeResponsesPutVoiceConnectorStreamingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorStreamingConfiguration(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorStreamingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `streamingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfiguration.property.streamingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration`](#aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration)

---


### ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorStreamingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorStreamingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `dataRetentionInHours`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration.property.dataRetentionInHours"></a>

- *Type:* `number`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration.property.disabled"></a>

- *Type:* `boolean`

---

##### `streamingNotificationTargets`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorStreamingConfigurationStreamingConfiguration.property.streamingNotificationTargets"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeStreamingNotificationTarget`](#aws-cdk-sdk.chime.ChimeStreamingNotificationTarget)[]

---


### ChimeResponsesPutVoiceConnectorTermination <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTermination"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTermination.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorTermination(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorTerminationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTermination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTermination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTermination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationRequest)

---



#### Properties <a name="Properties"></a>

##### `termination`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTermination.property.termination"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination`](#aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination)

---


### ChimeResponsesPutVoiceConnectorTerminationTermination <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesPutVoiceConnectorTerminationTermination(__scope: Construct, __resources: string[], __input: ChimePutVoiceConnectorTerminationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationRequest`](#aws-cdk-sdk.chime.ChimePutVoiceConnectorTerminationRequest)

---



#### Properties <a name="Properties"></a>

##### `callingRegions`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination.property.callingRegions"></a>

- *Type:* `string`[]

---

##### `cidrAllowedList`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination.property.cidrAllowedList"></a>

- *Type:* `string`[]

---

##### `cpsLimit`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination.property.cpsLimit"></a>

- *Type:* `number`

---

##### `defaultPhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination.property.defaultPhoneNumber"></a>

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesPutVoiceConnectorTerminationTermination.property.disabled"></a>

- *Type:* `boolean`

---


### ChimeResponsesRedactChannelMessage <a name="aws-cdk-sdk.chime.ChimeResponsesRedactChannelMessage"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesRedactChannelMessage.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesRedactChannelMessage(__scope: Construct, __resources: string[], __input: ChimeRedactChannelMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRedactChannelMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRedactChannelMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRedactChannelMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRedactChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeRedactChannelMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRedactChannelMessage.property.channelArn"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRedactChannelMessage.property.messageId"></a>

- *Type:* `string`

---


### ChimeResponsesRegenerateSecurityToken <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityToken"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityToken.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesRegenerateSecurityToken(__scope: Construct, __resources: string[], __input: ChimeRegenerateSecurityTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenRequest`](#aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `bot`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityToken.property.bot"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot`](#aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot)

---


### ChimeResponsesRegenerateSecurityTokenBot <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesRegenerateSecurityTokenBot(__scope: Construct, __resources: string[], __input: ChimeRegenerateSecurityTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenRequest`](#aws-cdk-sdk.chime.ChimeRegenerateSecurityTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `botEmail`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.property.botEmail"></a>

- *Type:* `string`

---

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.property.botId"></a>

- *Type:* `string`

---

##### `botType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.property.botType"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.property.disabled"></a>

- *Type:* `boolean`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.property.displayName"></a>

- *Type:* `string`

---

##### `securityToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.property.securityToken"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRegenerateSecurityTokenBot.property.userId"></a>

- *Type:* `string`

---


### ChimeResponsesResetPersonalPin <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPin"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPin.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesResetPersonalPin(__scope: Construct, __resources: string[], __input: ChimeResetPersonalPinRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPin.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPin.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResetPersonalPinRequest`](#aws-cdk-sdk.chime.ChimeResetPersonalPinRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPin.property.user"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser`](#aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser)

---


### ChimeResponsesResetPersonalPinUser <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesResetPersonalPinUser(__scope: Construct, __resources: string[], __input: ChimeResetPersonalPinRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResetPersonalPinRequest`](#aws-cdk-sdk.chime.ChimeResetPersonalPinRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.accountId"></a>

- *Type:* `string`

---

##### `alexaForBusinessMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.alexaForBusinessMetadata"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata`](#aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata)

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.displayName"></a>

- *Type:* `string`

---

##### `invitedOn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.invitedOn"></a>

- *Type:* `string`

---

##### `licenseType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.licenseType"></a>

- *Type:* `string`

---

##### `personalPin`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.personalPin"></a>

- *Type:* `string`

---

##### `primaryEmail`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.primaryEmail"></a>

- *Type:* `string`

---

##### `primaryProvisionedNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.primaryProvisionedNumber"></a>

- *Type:* `string`

---

##### `registeredOn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.registeredOn"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.userId"></a>

- *Type:* `string`

---

##### `userInvitationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.userInvitationStatus"></a>

- *Type:* `string`

---

##### `userRegistrationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.userRegistrationStatus"></a>

- *Type:* `string`

---

##### `userType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUser.property.userType"></a>

- *Type:* `string`

---


### ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata(__scope: Construct, __resources: string[], __input: ChimeResetPersonalPinRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResetPersonalPinRequest`](#aws-cdk-sdk.chime.ChimeResetPersonalPinRequest)

---



#### Properties <a name="Properties"></a>

##### `alexaForBusinessRoomArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata.property.alexaForBusinessRoomArn"></a>

- *Type:* `string`

---

##### `isAlexaForBusinessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesResetPersonalPinUserAlexaForBusinessMetadata.property.isAlexaForBusinessEnabled"></a>

- *Type:* `boolean`

---


### ChimeResponsesRestorePhoneNumber <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumber"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumber.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesRestorePhoneNumber(__scope: Construct, __resources: string[], __input: ChimeRestorePhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumber.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumber.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumber.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRestorePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeRestorePhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumber.property.phoneNumber"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber`](#aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber)

---


### ChimeResponsesRestorePhoneNumberPhoneNumber <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesRestorePhoneNumberPhoneNumber(__scope: Construct, __resources: string[], __input: ChimeRestorePhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRestorePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeRestorePhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `associations`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.associations"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberAssociation`](#aws-cdk-sdk.chime.ChimePhoneNumberAssociation)[]

---

##### `callingName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.callingName"></a>

- *Type:* `string`

---

##### `callingNameStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.callingNameStatus"></a>

- *Type:* `string`

---

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.capabilities"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities`](#aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities)

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `deletionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.deletionTimestamp"></a>

- *Type:* `string`

---

##### `e164PhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.e164PhoneNumber"></a>

- *Type:* `string`

---

##### `phoneNumberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.phoneNumberId"></a>

- *Type:* `string`

---

##### `productType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.productType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.type"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumber.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities(__scope: Construct, __resources: string[], __input: ChimeRestorePhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeRestorePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeRestorePhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `inboundCall`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities.property.inboundCall"></a>

- *Type:* `boolean`

---

##### `inboundMms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities.property.inboundMms"></a>

- *Type:* `boolean`

---

##### `inboundSms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities.property.inboundSms"></a>

- *Type:* `boolean`

---

##### `outboundCall`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities.property.outboundCall"></a>

- *Type:* `boolean`

---

##### `outboundMms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities.property.outboundMms"></a>

- *Type:* `boolean`

---

##### `outboundSms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesRestorePhoneNumberPhoneNumberCapabilities.property.outboundSms"></a>

- *Type:* `boolean`

---


### ChimeResponsesSearchAvailablePhoneNumbers <a name="aws-cdk-sdk.chime.ChimeResponsesSearchAvailablePhoneNumbers"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesSearchAvailablePhoneNumbers.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesSearchAvailablePhoneNumbers(__scope: Construct, __resources: string[], __input: ChimeSearchAvailablePhoneNumbersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesSearchAvailablePhoneNumbers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesSearchAvailablePhoneNumbers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesSearchAvailablePhoneNumbers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest`](#aws-cdk-sdk.chime.ChimeSearchAvailablePhoneNumbersRequest)

---



#### Properties <a name="Properties"></a>

##### `e164PhoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesSearchAvailablePhoneNumbers.property.e164PhoneNumbers"></a>

- *Type:* `string`[]

---


### ChimeResponsesSendChannelMessage <a name="aws-cdk-sdk.chime.ChimeResponsesSendChannelMessage"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesSendChannelMessage.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesSendChannelMessage(__scope: Construct, __resources: string[], __input: ChimeSendChannelMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesSendChannelMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesSendChannelMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesSendChannelMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSendChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeSendChannelMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesSendChannelMessage.property.channelArn"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesSendChannelMessage.property.messageId"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateAccount <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccount"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccount.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateAccount(__scope: Construct, __resources: string[], __input: ChimeUpdateAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateAccountRequest`](#aws-cdk-sdk.chime.ChimeUpdateAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccount.property.account"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount`](#aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount)

---


### ChimeResponsesUpdateAccountAccount <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateAccountAccount(__scope: Construct, __resources: string[], __input: ChimeUpdateAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateAccountRequest`](#aws-cdk-sdk.chime.ChimeUpdateAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.property.accountId"></a>

- *Type:* `string`

---

##### `accountType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.property.accountType"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.property.awsAccountId"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `defaultLicense`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.property.defaultLicense"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.property.name"></a>

- *Type:* `string`

---

##### `signinDelegateGroups`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.property.signinDelegateGroups"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSigninDelegateGroup`](#aws-cdk-sdk.chime.ChimeSigninDelegateGroup)[]

---

##### `supportedLicenses`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAccountAccount.property.supportedLicenses"></a>

- *Type:* `string`[]

---


### ChimeResponsesUpdateAppInstance <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstance"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstance.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateAppInstance(__scope: Construct, __resources: string[], __input: ChimeUpdateAppInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateAppInstanceRequest`](#aws-cdk-sdk.chime.ChimeUpdateAppInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstance.property.appInstanceArn"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateAppInstanceUser <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstanceUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstanceUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateAppInstanceUser(__scope: Construct, __resources: string[], __input: ChimeUpdateAppInstanceUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstanceUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstanceUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstanceUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateAppInstanceUserRequest`](#aws-cdk-sdk.chime.ChimeUpdateAppInstanceUserRequest)

---



#### Properties <a name="Properties"></a>

##### `appInstanceUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateAppInstanceUser.property.appInstanceUserArn"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateBot <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBot"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBot.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateBot(__scope: Construct, __resources: string[], __input: ChimeUpdateBotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateBotRequest`](#aws-cdk-sdk.chime.ChimeUpdateBotRequest)

---



#### Properties <a name="Properties"></a>

##### `bot`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBot.property.bot"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot`](#aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot)

---


### ChimeResponsesUpdateBotBot <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateBotBot(__scope: Construct, __resources: string[], __input: ChimeUpdateBotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateBotRequest`](#aws-cdk-sdk.chime.ChimeUpdateBotRequest)

---



#### Properties <a name="Properties"></a>

##### `botEmail`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.property.botEmail"></a>

- *Type:* `string`

---

##### `botId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.property.botId"></a>

- *Type:* `string`

---

##### `botType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.property.botType"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.property.disabled"></a>

- *Type:* `boolean`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.property.displayName"></a>

- *Type:* `string`

---

##### `securityToken`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.property.securityToken"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateBotBot.property.userId"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateChannel <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannel"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannel.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateChannel(__scope: Construct, __resources: string[], __input: ChimeUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateChannelRequest`](#aws-cdk-sdk.chime.ChimeUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannel.property.channelArn"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateChannelMessage <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelMessage"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelMessage.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateChannelMessage(__scope: Construct, __resources: string[], __input: ChimeUpdateChannelMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateChannelMessageRequest`](#aws-cdk-sdk.chime.ChimeUpdateChannelMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelMessage.property.channelArn"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelMessage.property.messageId"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateChannelReadMarker <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelReadMarker"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelReadMarker.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateChannelReadMarker(__scope: Construct, __resources: string[], __input: ChimeUpdateChannelReadMarkerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelReadMarker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelReadMarker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelReadMarker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateChannelReadMarkerRequest`](#aws-cdk-sdk.chime.ChimeUpdateChannelReadMarkerRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateChannelReadMarker.property.channelArn"></a>

- *Type:* `string`

---


### ChimeResponsesUpdatePhoneNumber <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumber"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumber.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdatePhoneNumber(__scope: Construct, __resources: string[], __input: ChimeUpdatePhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumber.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumber.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumber.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `phoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumber.property.phoneNumber"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber`](#aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber)

---


### ChimeResponsesUpdatePhoneNumberPhoneNumber <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdatePhoneNumberPhoneNumber(__scope: Construct, __resources: string[], __input: ChimeUpdatePhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `associations`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.associations"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimePhoneNumberAssociation`](#aws-cdk-sdk.chime.ChimePhoneNumberAssociation)[]

---

##### `callingName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.callingName"></a>

- *Type:* `string`

---

##### `callingNameStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.callingNameStatus"></a>

- *Type:* `string`

---

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.capabilities"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities`](#aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities)

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `deletionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.deletionTimestamp"></a>

- *Type:* `string`

---

##### `e164PhoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.e164PhoneNumber"></a>

- *Type:* `string`

---

##### `phoneNumberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.phoneNumberId"></a>

- *Type:* `string`

---

##### `productType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.productType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.type"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumber.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities(__scope: Construct, __resources: string[], __input: ChimeUpdatePhoneNumberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest`](#aws-cdk-sdk.chime.ChimeUpdatePhoneNumberRequest)

---



#### Properties <a name="Properties"></a>

##### `inboundCall`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities.property.inboundCall"></a>

- *Type:* `boolean`

---

##### `inboundMms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities.property.inboundMms"></a>

- *Type:* `boolean`

---

##### `inboundSms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities.property.inboundSms"></a>

- *Type:* `boolean`

---

##### `outboundCall`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities.property.outboundCall"></a>

- *Type:* `boolean`

---

##### `outboundMms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities.property.outboundMms"></a>

- *Type:* `boolean`

---

##### `outboundSms`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdatePhoneNumberPhoneNumberCapabilities.property.outboundSms"></a>

- *Type:* `boolean`

---


### ChimeResponsesUpdateProxySession <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySession"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySession.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateProxySession(__scope: Construct, __resources: string[], __input: ChimeUpdateProxySessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest`](#aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest)

---



#### Properties <a name="Properties"></a>

##### `proxySession`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySession.property.proxySession"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession`](#aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession)

---


### ChimeResponsesUpdateProxySessionProxySession <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateProxySessionProxySession(__scope: Construct, __resources: string[], __input: ChimeUpdateProxySessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest`](#aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest)

---



#### Properties <a name="Properties"></a>

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.capabilities"></a>

- *Type:* `string`[]

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.endedTimestamp"></a>

- *Type:* `string`

---

##### `expiryMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.expiryMinutes"></a>

- *Type:* `number`

---

##### `geoMatchLevel`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.geoMatchLevel"></a>

- *Type:* `string`

---

##### `geoMatchParams`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.geoMatchParams"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams`](#aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.name"></a>

- *Type:* `string`

---

##### `numberSelectionBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.numberSelectionBehavior"></a>

- *Type:* `string`

---

##### `participants`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.participants"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeParticipant`](#aws-cdk-sdk.chime.ChimeParticipant)[]

---

##### `proxySessionId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.proxySessionId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.status"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySession.property.voiceConnectorId"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams(__scope: Construct, __resources: string[], __input: ChimeUpdateProxySessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest`](#aws-cdk-sdk.chime.ChimeUpdateProxySessionRequest)

---



#### Properties <a name="Properties"></a>

##### `areaCode`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams.property.areaCode"></a>

- *Type:* `string`

---

##### `country`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateProxySessionProxySessionGeoMatchParams.property.country"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateRoom <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoom"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoom.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateRoom(__scope: Construct, __resources: string[], __input: ChimeUpdateRoomRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoom.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoom.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoom.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateRoomRequest`](#aws-cdk-sdk.chime.ChimeUpdateRoomRequest)

---



#### Properties <a name="Properties"></a>

##### `room`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoom.property.room"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom`](#aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom)

---


### ChimeResponsesUpdateRoomMembership <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembership"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembership.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateRoomMembership(__scope: Construct, __resources: string[], __input: ChimeUpdateRoomMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `roomMembership`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembership.property.roomMembership"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership`](#aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership)

---


### ChimeResponsesUpdateRoomMembershipRoomMembership <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateRoomMembershipRoomMembership(__scope: Construct, __resources: string[], __input: ChimeUpdateRoomMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `invitedBy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership.property.invitedBy"></a>

- *Type:* `string`

---

##### `member`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership.property.member"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember`](#aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember)

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership.property.role"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership.property.roomId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembership.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateRoomMembershipRoomMembershipMember <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember(__scope: Construct, __resources: string[], __input: ChimeUpdateRoomMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest`](#aws-cdk-sdk.chime.ChimeUpdateRoomMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember.property.accountId"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember.property.email"></a>

- *Type:* `string`

---

##### `fullName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember.property.fullName"></a>

- *Type:* `string`

---

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember.property.memberId"></a>

- *Type:* `string`

---

##### `memberType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomMembershipRoomMembershipMember.property.memberType"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateRoomRoom <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateRoomRoom(__scope: Construct, __resources: string[], __input: ChimeUpdateRoomRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateRoomRequest`](#aws-cdk-sdk.chime.ChimeUpdateRoomRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom.property.accountId"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom.property.createdBy"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom.property.name"></a>

- *Type:* `string`

---

##### `roomId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom.property.roomId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateRoomRoom.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateSipMediaApplication <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplication"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplication.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateSipMediaApplication(__scope: Construct, __resources: string[], __input: ChimeUpdateSipMediaApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationRequest`](#aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `sipMediaApplication`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplication.property.sipMediaApplication"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication`](#aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication)

---


### ChimeResponsesUpdateSipMediaApplicationSipMediaApplication <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication(__scope: Construct, __resources: string[], __input: ChimeUpdateSipMediaApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationRequest`](#aws-cdk-sdk.chime.ChimeUpdateSipMediaApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication.property.awsRegion"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint`](#aws-cdk-sdk.chime.ChimeSipMediaApplicationEndpoint)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication.property.name"></a>

- *Type:* `string`

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication.property.sipMediaApplicationId"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipMediaApplicationSipMediaApplication.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateSipRule <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRule"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRule.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateSipRule(__scope: Construct, __resources: string[], __input: ChimeUpdateSipRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest`](#aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `sipRule`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRule.property.sipRule"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule`](#aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule)

---


### ChimeResponsesUpdateSipRuleSipRule <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateSipRuleSipRule(__scope: Construct, __resources: string[], __input: ChimeUpdateSipRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest`](#aws-cdk-sdk.chime.ChimeUpdateSipRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.property.disabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.property.name"></a>

- *Type:* `string`

---

##### `sipRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.property.sipRuleId"></a>

- *Type:* `string`

---

##### `targetApplications`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.property.targetApplications"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeSipRuleTargetApplication`](#aws-cdk-sdk.chime.ChimeSipRuleTargetApplication)[]

---

##### `triggerType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.property.triggerType"></a>

- *Type:* `string`

---

##### `triggerValue`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.property.triggerValue"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateSipRuleSipRule.property.updatedTimestamp"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateUser <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateUser(__scope: Construct, __resources: string[], __input: ChimeUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateUserRequest`](#aws-cdk-sdk.chime.ChimeUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser`](#aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser)

---


### ChimeResponsesUpdateUserUser <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateUserUser(__scope: Construct, __resources: string[], __input: ChimeUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateUserRequest`](#aws-cdk-sdk.chime.ChimeUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.accountId"></a>

- *Type:* `string`

---

##### `alexaForBusinessMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.alexaForBusinessMetadata"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateUserUserAlexaForBusinessMetadata`](#aws-cdk-sdk.chime.ChimeResponsesUpdateUserUserAlexaForBusinessMetadata)

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.displayName"></a>

- *Type:* `string`

---

##### `invitedOn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.invitedOn"></a>

- *Type:* `string`

---

##### `licenseType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.licenseType"></a>

- *Type:* `string`

---

##### `personalPin`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.personalPin"></a>

- *Type:* `string`

---

##### `primaryEmail`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.primaryEmail"></a>

- *Type:* `string`

---

##### `primaryProvisionedNumber`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.primaryProvisionedNumber"></a>

- *Type:* `string`

---

##### `registeredOn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.registeredOn"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.userId"></a>

- *Type:* `string`

---

##### `userInvitationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.userInvitationStatus"></a>

- *Type:* `string`

---

##### `userRegistrationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.userRegistrationStatus"></a>

- *Type:* `string`

---

##### `userType`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUser.property.userType"></a>

- *Type:* `string`

---


### ChimeResponsesUpdateUserUserAlexaForBusinessMetadata <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUserAlexaForBusinessMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUserAlexaForBusinessMetadata.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateUserUserAlexaForBusinessMetadata(__scope: Construct, __resources: string[], __input: ChimeUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUserAlexaForBusinessMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUserAlexaForBusinessMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUserAlexaForBusinessMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateUserRequest`](#aws-cdk-sdk.chime.ChimeUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `alexaForBusinessRoomArn`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUserAlexaForBusinessMetadata.property.alexaForBusinessRoomArn"></a>

- *Type:* `string`

---

##### `isAlexaForBusinessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateUserUserAlexaForBusinessMetadata.property.isAlexaForBusinessEnabled"></a>

- *Type:* `boolean`

---


### ChimeResponsesUpdateVoiceConnector <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnector"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnector.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateVoiceConnector(__scope: Construct, __resources: string[], __input: ChimeUpdateVoiceConnectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorRequest)

---



#### Properties <a name="Properties"></a>

##### `voiceConnector`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnector.property.voiceConnector"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector`](#aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector)

---


### ChimeResponsesUpdateVoiceConnectorGroup <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroup"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroup.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateVoiceConnectorGroup(__scope: Construct, __resources: string[], __input: ChimeUpdateVoiceConnectorGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `voiceConnectorGroup`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroup.property.voiceConnectorGroup"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup`](#aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup)

---


### ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup(__scope: Construct, __resources: string[], __input: ChimeUpdateVoiceConnectorGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupRequest`](#aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup.property.name"></a>

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup.property.voiceConnectorGroupId"></a>

- *Type:* `string`

---

##### `voiceConnectorItems`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorGroupVoiceConnectorGroup.property.voiceConnectorItems"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeVoiceConnectorItem`](#aws-cdk-sdk.chime.ChimeVoiceConnectorItem)[]

---


### ChimeResponsesUpdateVoiceConnectorVoiceConnector <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector"></a>

#### Initializer <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.Initializer"></a>

```typescript
import { chime } from 'aws-cdk-sdk'

new chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector(__scope: Construct, __resources: string[], __input: ChimeUpdateVoiceConnectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorRequest`](#aws-cdk-sdk.chime.ChimeUpdateVoiceConnectorRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.property.awsRegion"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.property.name"></a>

- *Type:* `string`

---

##### `outboundHostName`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.property.outboundHostName"></a>

- *Type:* `string`

---

##### `requireEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.property.requireEncryption"></a>

- *Type:* `boolean`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.property.updatedTimestamp"></a>

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="aws-cdk-sdk.chime.ChimeResponsesUpdateVoiceConnectorVoiceConnector.property.voiceConnectorId"></a>

- *Type:* `string`

---



