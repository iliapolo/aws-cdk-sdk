# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### GroundStationClient <a name="aws-cdk-sdk.groundstation.GroundStationClient"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationClient.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelContact` <a name="aws-cdk-sdk.groundstation.GroundStationClient.cancelContact"></a>

```typescript
public cancelContact(input: GroundStationCancelContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationCancelContactRequest`](#aws-cdk-sdk.groundstation.GroundStationCancelContactRequest)

---

##### `createConfig` <a name="aws-cdk-sdk.groundstation.GroundStationClient.createConfig"></a>

```typescript
public createConfig(input: GroundStationCreateConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationCreateConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationCreateConfigRequest)

---

##### `createDataflowEndpointGroup` <a name="aws-cdk-sdk.groundstation.GroundStationClient.createDataflowEndpointGroup"></a>

```typescript
public createDataflowEndpointGroup(input: GroundStationCreateDataflowEndpointGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationCreateDataflowEndpointGroupRequest`](#aws-cdk-sdk.groundstation.GroundStationCreateDataflowEndpointGroupRequest)

---

##### `createMissionProfile` <a name="aws-cdk-sdk.groundstation.GroundStationClient.createMissionProfile"></a>

```typescript
public createMissionProfile(input: GroundStationCreateMissionProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest`](#aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest)

---

##### `deleteConfig` <a name="aws-cdk-sdk.groundstation.GroundStationClient.deleteConfig"></a>

```typescript
public deleteConfig(input: GroundStationDeleteConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDeleteConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationDeleteConfigRequest)

---

##### `deleteDataflowEndpointGroup` <a name="aws-cdk-sdk.groundstation.GroundStationClient.deleteDataflowEndpointGroup"></a>

```typescript
public deleteDataflowEndpointGroup(input: GroundStationDeleteDataflowEndpointGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDeleteDataflowEndpointGroupRequest`](#aws-cdk-sdk.groundstation.GroundStationDeleteDataflowEndpointGroupRequest)

---

##### `deleteMissionProfile` <a name="aws-cdk-sdk.groundstation.GroundStationClient.deleteMissionProfile"></a>

```typescript
public deleteMissionProfile(input: GroundStationDeleteMissionProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDeleteMissionProfileRequest`](#aws-cdk-sdk.groundstation.GroundStationDeleteMissionProfileRequest)

---

##### `describeContact` <a name="aws-cdk-sdk.groundstation.GroundStationClient.describeContact"></a>

```typescript
public describeContact(input: GroundStationDescribeContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDescribeContactRequest`](#aws-cdk-sdk.groundstation.GroundStationDescribeContactRequest)

---

##### `fetchConfig` <a name="aws-cdk-sdk.groundstation.GroundStationClient.fetchConfig"></a>

```typescript
public fetchConfig(input: GroundStationGetConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---

##### `fetchDataflowEndpointGroup` <a name="aws-cdk-sdk.groundstation.GroundStationClient.fetchDataflowEndpointGroup"></a>

```typescript
public fetchDataflowEndpointGroup(input: GroundStationGetDataflowEndpointGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupRequest`](#aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupRequest)

---

##### `fetchMinuteUsage` <a name="aws-cdk-sdk.groundstation.GroundStationClient.fetchMinuteUsage"></a>

```typescript
public fetchMinuteUsage(input: GroundStationGetMinuteUsageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageRequest`](#aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageRequest)

---

##### `fetchMissionProfile` <a name="aws-cdk-sdk.groundstation.GroundStationClient.fetchMissionProfile"></a>

```typescript
public fetchMissionProfile(input: GroundStationGetMissionProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetMissionProfileRequest`](#aws-cdk-sdk.groundstation.GroundStationGetMissionProfileRequest)

---

##### `fetchSatellite` <a name="aws-cdk-sdk.groundstation.GroundStationClient.fetchSatellite"></a>

```typescript
public fetchSatellite(input: GroundStationGetSatelliteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetSatelliteRequest`](#aws-cdk-sdk.groundstation.GroundStationGetSatelliteRequest)

---

##### `listConfigs` <a name="aws-cdk-sdk.groundstation.GroundStationClient.listConfigs"></a>

```typescript
public listConfigs(input: GroundStationListConfigsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListConfigsRequest`](#aws-cdk-sdk.groundstation.GroundStationListConfigsRequest)

---

##### `listContacts` <a name="aws-cdk-sdk.groundstation.GroundStationClient.listContacts"></a>

```typescript
public listContacts(input: GroundStationListContactsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListContactsRequest`](#aws-cdk-sdk.groundstation.GroundStationListContactsRequest)

---

##### `listDataflowEndpointGroups` <a name="aws-cdk-sdk.groundstation.GroundStationClient.listDataflowEndpointGroups"></a>

```typescript
public listDataflowEndpointGroups(input: GroundStationListDataflowEndpointGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListDataflowEndpointGroupsRequest`](#aws-cdk-sdk.groundstation.GroundStationListDataflowEndpointGroupsRequest)

---

##### `listGroundStations` <a name="aws-cdk-sdk.groundstation.GroundStationClient.listGroundStations"></a>

```typescript
public listGroundStations(input: GroundStationListGroundStationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListGroundStationsRequest`](#aws-cdk-sdk.groundstation.GroundStationListGroundStationsRequest)

---

##### `listMissionProfiles` <a name="aws-cdk-sdk.groundstation.GroundStationClient.listMissionProfiles"></a>

```typescript
public listMissionProfiles(input: GroundStationListMissionProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListMissionProfilesRequest`](#aws-cdk-sdk.groundstation.GroundStationListMissionProfilesRequest)

---

##### `listSatellites` <a name="aws-cdk-sdk.groundstation.GroundStationClient.listSatellites"></a>

```typescript
public listSatellites(input: GroundStationListSatellitesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListSatellitesRequest`](#aws-cdk-sdk.groundstation.GroundStationListSatellitesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.groundstation.GroundStationClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: GroundStationListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListTagsForResourceRequest`](#aws-cdk-sdk.groundstation.GroundStationListTagsForResourceRequest)

---

##### `reserveContact` <a name="aws-cdk-sdk.groundstation.GroundStationClient.reserveContact"></a>

```typescript
public reserveContact(input: GroundStationReserveContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationReserveContactRequest`](#aws-cdk-sdk.groundstation.GroundStationReserveContactRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.groundstation.GroundStationClient.tagResource"></a>

```typescript
public tagResource(input: GroundStationTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationTagResourceRequest`](#aws-cdk-sdk.groundstation.GroundStationTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.groundstation.GroundStationClient.untagResource"></a>

```typescript
public untagResource(input: GroundStationUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationUntagResourceRequest`](#aws-cdk-sdk.groundstation.GroundStationUntagResourceRequest)

---

##### `updateConfig` <a name="aws-cdk-sdk.groundstation.GroundStationClient.updateConfig"></a>

```typescript
public updateConfig(input: GroundStationUpdateConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationUpdateConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationUpdateConfigRequest)

---

##### `updateMissionProfile` <a name="aws-cdk-sdk.groundstation.GroundStationClient.updateMissionProfile"></a>

```typescript
public updateMissionProfile(input: GroundStationUpdateMissionProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest`](#aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest)

---




## Structs <a name="Structs"></a>

### GroundStationAntennaDemodDecodeDetails <a name="aws-cdk-sdk.groundstation.GroundStationAntennaDemodDecodeDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationAntennaDemodDecodeDetails: groundstation.GroundStationAntennaDemodDecodeDetails = { ... }
```

##### `outputNode`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationAntennaDemodDecodeDetails.property.outputNode"></a>

- *Type:* `string`

---

### GroundStationAntennaDownlinkConfig <a name="aws-cdk-sdk.groundstation.GroundStationAntennaDownlinkConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationAntennaDownlinkConfig: groundstation.GroundStationAntennaDownlinkConfig = { ... }
```

##### `spectrumConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationAntennaDownlinkConfig.property.spectrumConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationSpectrumConfig`](#aws-cdk-sdk.groundstation.GroundStationSpectrumConfig)

---

### GroundStationAntennaDownlinkDemodDecodeConfig <a name="aws-cdk-sdk.groundstation.GroundStationAntennaDownlinkDemodDecodeConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationAntennaDownlinkDemodDecodeConfig: groundstation.GroundStationAntennaDownlinkDemodDecodeConfig = { ... }
```

##### `decodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationAntennaDownlinkDemodDecodeConfig.property.decodeConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDecodeConfig`](#aws-cdk-sdk.groundstation.GroundStationDecodeConfig)

---

##### `demodulationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationAntennaDownlinkDemodDecodeConfig.property.demodulationConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDemodulationConfig`](#aws-cdk-sdk.groundstation.GroundStationDemodulationConfig)

---

##### `spectrumConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationAntennaDownlinkDemodDecodeConfig.property.spectrumConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationSpectrumConfig`](#aws-cdk-sdk.groundstation.GroundStationSpectrumConfig)

---

### GroundStationAntennaUplinkConfig <a name="aws-cdk-sdk.groundstation.GroundStationAntennaUplinkConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationAntennaUplinkConfig: groundstation.GroundStationAntennaUplinkConfig = { ... }
```

##### `spectrumConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationAntennaUplinkConfig.property.spectrumConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationUplinkSpectrumConfig`](#aws-cdk-sdk.groundstation.GroundStationUplinkSpectrumConfig)

---

##### `targetEirp`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationAntennaUplinkConfig.property.targetEirp"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationEirp`](#aws-cdk-sdk.groundstation.GroundStationEirp)

---

##### `transmitDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationAntennaUplinkConfig.property.transmitDisabled"></a>

- *Type:* `boolean`

---

### GroundStationCancelContactRequest <a name="aws-cdk-sdk.groundstation.GroundStationCancelContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationCancelContactRequest: groundstation.GroundStationCancelContactRequest = { ... }
```

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCancelContactRequest.property.contactId"></a>

- *Type:* `string`

---

### GroundStationConfigDetails <a name="aws-cdk-sdk.groundstation.GroundStationConfigDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationConfigDetails: groundstation.GroundStationConfigDetails = { ... }
```

##### `antennaDemodDecodeDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigDetails.property.antennaDemodDecodeDetails"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationAntennaDemodDecodeDetails`](#aws-cdk-sdk.groundstation.GroundStationAntennaDemodDecodeDetails)

---

##### `endpointDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigDetails.property.endpointDetails"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationEndpointDetails`](#aws-cdk-sdk.groundstation.GroundStationEndpointDetails)

---

### GroundStationConfigIdResponse <a name="aws-cdk-sdk.groundstation.GroundStationConfigIdResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationConfigIdResponse: groundstation.GroundStationConfigIdResponse = { ... }
```

##### `configArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigIdResponse.property.configArn"></a>

- *Type:* `string`

---

##### `configId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigIdResponse.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigIdResponse.property.configType"></a>

- *Type:* `string`

---

### GroundStationConfigListItem <a name="aws-cdk-sdk.groundstation.GroundStationConfigListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationConfigListItem: groundstation.GroundStationConfigListItem = { ... }
```

##### `configArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigListItem.property.configArn"></a>

- *Type:* `string`

---

##### `configId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigListItem.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigListItem.property.configType"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigListItem.property.name"></a>

- *Type:* `string`

---

### GroundStationConfigTypeData <a name="aws-cdk-sdk.groundstation.GroundStationConfigTypeData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationConfigTypeData: groundstation.GroundStationConfigTypeData = { ... }
```

##### `antennaDownlinkConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigTypeData.property.antennaDownlinkConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationAntennaDownlinkConfig`](#aws-cdk-sdk.groundstation.GroundStationAntennaDownlinkConfig)

---

##### `antennaDownlinkDemodDecodeConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigTypeData.property.antennaDownlinkDemodDecodeConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationAntennaDownlinkDemodDecodeConfig`](#aws-cdk-sdk.groundstation.GroundStationAntennaDownlinkDemodDecodeConfig)

---

##### `antennaUplinkConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigTypeData.property.antennaUplinkConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationAntennaUplinkConfig`](#aws-cdk-sdk.groundstation.GroundStationAntennaUplinkConfig)

---

##### `dataflowEndpointConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigTypeData.property.dataflowEndpointConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDataflowEndpointConfig`](#aws-cdk-sdk.groundstation.GroundStationDataflowEndpointConfig)

---

##### `trackingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigTypeData.property.trackingConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationTrackingConfig`](#aws-cdk-sdk.groundstation.GroundStationTrackingConfig)

---

##### `uplinkEchoConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationConfigTypeData.property.uplinkEchoConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationUplinkEchoConfig`](#aws-cdk-sdk.groundstation.GroundStationUplinkEchoConfig)

---

### GroundStationContactData <a name="aws-cdk-sdk.groundstation.GroundStationContactData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationContactData: groundstation.GroundStationContactData = { ... }
```

##### `contactId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.contactId"></a>

- *Type:* `string`

---

##### `contactStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.contactStatus"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.endTime"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.errorMessage"></a>

- *Type:* `string`

---

##### `groundStation`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.groundStation"></a>

- *Type:* `string`

---

##### `maximumElevation`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.maximumElevation"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationElevation`](#aws-cdk-sdk.groundstation.GroundStationElevation)

---

##### `missionProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.missionProfileArn"></a>

- *Type:* `string`

---

##### `postPassEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.postPassEndTime"></a>

- *Type:* `string`

---

##### `prePassStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.prePassStartTime"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.region"></a>

- *Type:* `string`

---

##### `satelliteArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.satelliteArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.startTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactData.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GroundStationContactIdResponse <a name="aws-cdk-sdk.groundstation.GroundStationContactIdResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationContactIdResponse: groundstation.GroundStationContactIdResponse = { ... }
```

##### `contactId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationContactIdResponse.property.contactId"></a>

- *Type:* `string`

---

### GroundStationCreateConfigRequest <a name="aws-cdk-sdk.groundstation.GroundStationCreateConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationCreateConfigRequest: groundstation.GroundStationCreateConfigRequest = { ... }
```

##### `configData`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateConfigRequest.property.configData"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationConfigTypeData`](#aws-cdk-sdk.groundstation.GroundStationConfigTypeData)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateConfigRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateConfigRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GroundStationCreateDataflowEndpointGroupRequest <a name="aws-cdk-sdk.groundstation.GroundStationCreateDataflowEndpointGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationCreateDataflowEndpointGroupRequest: groundstation.GroundStationCreateDataflowEndpointGroupRequest = { ... }
```

##### `endpointDetails`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateDataflowEndpointGroupRequest.property.endpointDetails"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationEndpointDetails`](#aws-cdk-sdk.groundstation.GroundStationEndpointDetails)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateDataflowEndpointGroupRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GroundStationCreateMissionProfileRequest <a name="aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationCreateMissionProfileRequest: groundstation.GroundStationCreateMissionProfileRequest = { ... }
```

##### `dataflowEdges`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest.property.dataflowEdges"></a>

- *Type:* `string`[][]

---

##### `minimumViableContactDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest.property.minimumViableContactDurationSeconds"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest.property.name"></a>

- *Type:* `string`

---

##### `trackingConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest.property.trackingConfigArn"></a>

- *Type:* `string`

---

##### `contactPostPassDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest.property.contactPostPassDurationSeconds"></a>

- *Type:* `number`

---

##### `contactPrePassDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest.property.contactPrePassDurationSeconds"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GroundStationDataflowDetail <a name="aws-cdk-sdk.groundstation.GroundStationDataflowDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDataflowDetail: groundstation.GroundStationDataflowDetail = { ... }
```

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowDetail.property.destination"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDestination`](#aws-cdk-sdk.groundstation.GroundStationDestination)

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowDetail.property.errorMessage"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowDetail.property.source"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationSource`](#aws-cdk-sdk.groundstation.GroundStationSource)

---

### GroundStationDataflowEndpoint <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDataflowEndpoint: groundstation.GroundStationDataflowEndpoint = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpoint.property.address"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationSocketAddress`](#aws-cdk-sdk.groundstation.GroundStationSocketAddress)

---

##### `mtu`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpoint.property.mtu"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpoint.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpoint.property.status"></a>

- *Type:* `string`

---

### GroundStationDataflowEndpointConfig <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpointConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDataflowEndpointConfig: groundstation.GroundStationDataflowEndpointConfig = { ... }
```

##### `dataflowEndpointName`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpointConfig.property.dataflowEndpointName"></a>

- *Type:* `string`

---

##### `dataflowEndpointRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpointConfig.property.dataflowEndpointRegion"></a>

- *Type:* `string`

---

### GroundStationDataflowEndpointGroupIdResponse <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpointGroupIdResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDataflowEndpointGroupIdResponse: groundstation.GroundStationDataflowEndpointGroupIdResponse = { ... }
```

##### `dataflowEndpointGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpointGroupIdResponse.property.dataflowEndpointGroupId"></a>

- *Type:* `string`

---

### GroundStationDataflowEndpointListItem <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpointListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDataflowEndpointListItem: groundstation.GroundStationDataflowEndpointListItem = { ... }
```

##### `dataflowEndpointGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpointListItem.property.dataflowEndpointGroupArn"></a>

- *Type:* `string`

---

##### `dataflowEndpointGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDataflowEndpointListItem.property.dataflowEndpointGroupId"></a>

- *Type:* `string`

---

### GroundStationDecodeConfig <a name="aws-cdk-sdk.groundstation.GroundStationDecodeConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDecodeConfig: groundstation.GroundStationDecodeConfig = { ... }
```

##### `unvalidatedJSON`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDecodeConfig.property.unvalidatedJSON"></a>

- *Type:* `string`

---

### GroundStationDeleteConfigRequest <a name="aws-cdk-sdk.groundstation.GroundStationDeleteConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDeleteConfigRequest: groundstation.GroundStationDeleteConfigRequest = { ... }
```

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDeleteConfigRequest.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDeleteConfigRequest.property.configType"></a>

- *Type:* `string`

---

### GroundStationDeleteDataflowEndpointGroupRequest <a name="aws-cdk-sdk.groundstation.GroundStationDeleteDataflowEndpointGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDeleteDataflowEndpointGroupRequest: groundstation.GroundStationDeleteDataflowEndpointGroupRequest = { ... }
```

##### `dataflowEndpointGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDeleteDataflowEndpointGroupRequest.property.dataflowEndpointGroupId"></a>

- *Type:* `string`

---

### GroundStationDeleteMissionProfileRequest <a name="aws-cdk-sdk.groundstation.GroundStationDeleteMissionProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDeleteMissionProfileRequest: groundstation.GroundStationDeleteMissionProfileRequest = { ... }
```

##### `missionProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDeleteMissionProfileRequest.property.missionProfileId"></a>

- *Type:* `string`

---

### GroundStationDemodulationConfig <a name="aws-cdk-sdk.groundstation.GroundStationDemodulationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDemodulationConfig: groundstation.GroundStationDemodulationConfig = { ... }
```

##### `unvalidatedJSON`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDemodulationConfig.property.unvalidatedJSON"></a>

- *Type:* `string`

---

### GroundStationDescribeContactRequest <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDescribeContactRequest: groundstation.GroundStationDescribeContactRequest = { ... }
```

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactRequest.property.contactId"></a>

- *Type:* `string`

---

### GroundStationDescribeContactResponse <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDescribeContactResponse: groundstation.GroundStationDescribeContactResponse = { ... }
```

##### `contactId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.contactId"></a>

- *Type:* `string`

---

##### `contactStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.contactStatus"></a>

- *Type:* `string`

---

##### `dataflowList`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.dataflowList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDataflowDetail`](#aws-cdk-sdk.groundstation.GroundStationDataflowDetail)[]

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.endTime"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.errorMessage"></a>

- *Type:* `string`

---

##### `groundStation`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.groundStation"></a>

- *Type:* `string`

---

##### `maximumElevation`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.maximumElevation"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationElevation`](#aws-cdk-sdk.groundstation.GroundStationElevation)

---

##### `missionProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.missionProfileArn"></a>

- *Type:* `string`

---

##### `postPassEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.postPassEndTime"></a>

- *Type:* `string`

---

##### `prePassStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.prePassStartTime"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.region"></a>

- *Type:* `string`

---

##### `satelliteArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.satelliteArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.startTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDescribeContactResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GroundStationDestination <a name="aws-cdk-sdk.groundstation.GroundStationDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationDestination: groundstation.GroundStationDestination = { ... }
```

##### `configDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDestination.property.configDetails"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationConfigDetails`](#aws-cdk-sdk.groundstation.GroundStationConfigDetails)

---

##### `configId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDestination.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDestination.property.configType"></a>

- *Type:* `string`

---

##### `dataflowDestinationRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationDestination.property.dataflowDestinationRegion"></a>

- *Type:* `string`

---

### GroundStationEirp <a name="aws-cdk-sdk.groundstation.GroundStationEirp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationEirp: groundstation.GroundStationEirp = { ... }
```

##### `units`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationEirp.property.units"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationEirp.property.value"></a>

- *Type:* `number`

---

### GroundStationElevation <a name="aws-cdk-sdk.groundstation.GroundStationElevation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationElevation: groundstation.GroundStationElevation = { ... }
```

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationElevation.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationElevation.property.value"></a>

- *Type:* `number`

---

### GroundStationEndpointDetails <a name="aws-cdk-sdk.groundstation.GroundStationEndpointDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationEndpointDetails: groundstation.GroundStationEndpointDetails = { ... }
```

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationEndpointDetails.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDataflowEndpoint`](#aws-cdk-sdk.groundstation.GroundStationDataflowEndpoint)

---

##### `securityDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationEndpointDetails.property.securityDetails"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationSecurityDetails`](#aws-cdk-sdk.groundstation.GroundStationSecurityDetails)

---

### GroundStationFrequency <a name="aws-cdk-sdk.groundstation.GroundStationFrequency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationFrequency: groundstation.GroundStationFrequency = { ... }
```

##### `units`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationFrequency.property.units"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationFrequency.property.value"></a>

- *Type:* `number`

---

### GroundStationFrequencyBandwidth <a name="aws-cdk-sdk.groundstation.GroundStationFrequencyBandwidth"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationFrequencyBandwidth: groundstation.GroundStationFrequencyBandwidth = { ... }
```

##### `units`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationFrequencyBandwidth.property.units"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationFrequencyBandwidth.property.value"></a>

- *Type:* `number`

---

### GroundStationGetConfigRequest <a name="aws-cdk-sdk.groundstation.GroundStationGetConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGetConfigRequest: groundstation.GroundStationGetConfigRequest = { ... }
```

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetConfigRequest.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetConfigRequest.property.configType"></a>

- *Type:* `string`

---

### GroundStationGetConfigResponse <a name="aws-cdk-sdk.groundstation.GroundStationGetConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGetConfigResponse: groundstation.GroundStationGetConfigResponse = { ... }
```

##### `configArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetConfigResponse.property.configArn"></a>

- *Type:* `string`

---

##### `configData`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetConfigResponse.property.configData"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationConfigTypeData`](#aws-cdk-sdk.groundstation.GroundStationConfigTypeData)

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetConfigResponse.property.configId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetConfigResponse.property.name"></a>

- *Type:* `string`

---

##### `configType`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetConfigResponse.property.configType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetConfigResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GroundStationGetDataflowEndpointGroupRequest <a name="aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGetDataflowEndpointGroupRequest: groundstation.GroundStationGetDataflowEndpointGroupRequest = { ... }
```

##### `dataflowEndpointGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupRequest.property.dataflowEndpointGroupId"></a>

- *Type:* `string`

---

### GroundStationGetDataflowEndpointGroupResponse <a name="aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGetDataflowEndpointGroupResponse: groundstation.GroundStationGetDataflowEndpointGroupResponse = { ... }
```

##### `dataflowEndpointGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupResponse.property.dataflowEndpointGroupArn"></a>

- *Type:* `string`

---

##### `dataflowEndpointGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupResponse.property.dataflowEndpointGroupId"></a>

- *Type:* `string`

---

##### `endpointsDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupResponse.property.endpointsDetails"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationEndpointDetails`](#aws-cdk-sdk.groundstation.GroundStationEndpointDetails)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GroundStationGetMinuteUsageRequest <a name="aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGetMinuteUsageRequest: groundstation.GroundStationGetMinuteUsageRequest = { ... }
```

##### `month`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageRequest.property.month"></a>

- *Type:* `number`

---

##### `year`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageRequest.property.year"></a>

- *Type:* `number`

---

### GroundStationGetMinuteUsageResponse <a name="aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGetMinuteUsageResponse: groundstation.GroundStationGetMinuteUsageResponse = { ... }
```

##### `estimatedMinutesRemaining`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageResponse.property.estimatedMinutesRemaining"></a>

- *Type:* `number`

---

##### `isReservedMinutesCustomer`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageResponse.property.isReservedMinutesCustomer"></a>

- *Type:* `boolean`

---

##### `totalReservedMinuteAllocation`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageResponse.property.totalReservedMinuteAllocation"></a>

- *Type:* `number`

---

##### `totalScheduledMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageResponse.property.totalScheduledMinutes"></a>

- *Type:* `number`

---

##### `upcomingMinutesScheduled`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageResponse.property.upcomingMinutesScheduled"></a>

- *Type:* `number`

---

### GroundStationGetMissionProfileRequest <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGetMissionProfileRequest: groundstation.GroundStationGetMissionProfileRequest = { ... }
```

##### `missionProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileRequest.property.missionProfileId"></a>

- *Type:* `string`

---

### GroundStationGetMissionProfileResponse <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGetMissionProfileResponse: groundstation.GroundStationGetMissionProfileResponse = { ... }
```

##### `contactPostPassDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse.property.contactPostPassDurationSeconds"></a>

- *Type:* `number`

---

##### `contactPrePassDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse.property.contactPrePassDurationSeconds"></a>

- *Type:* `number`

---

##### `dataflowEdges`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse.property.dataflowEdges"></a>

- *Type:* `string`[][]

---

##### `minimumViableContactDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse.property.minimumViableContactDurationSeconds"></a>

- *Type:* `number`

---

##### `missionProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse.property.missionProfileArn"></a>

- *Type:* `string`

---

##### `missionProfileId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse.property.missionProfileId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `trackingConfigArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetMissionProfileResponse.property.trackingConfigArn"></a>

- *Type:* `string`

---

### GroundStationGetSatelliteRequest <a name="aws-cdk-sdk.groundstation.GroundStationGetSatelliteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGetSatelliteRequest: groundstation.GroundStationGetSatelliteRequest = { ... }
```

##### `satelliteId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetSatelliteRequest.property.satelliteId"></a>

- *Type:* `string`

---

### GroundStationGetSatelliteResponse <a name="aws-cdk-sdk.groundstation.GroundStationGetSatelliteResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGetSatelliteResponse: groundstation.GroundStationGetSatelliteResponse = { ... }
```

##### `groundStations`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetSatelliteResponse.property.groundStations"></a>

- *Type:* `string`[]

---

##### `noradSatelliteID`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetSatelliteResponse.property.noradSatelliteID"></a>

- *Type:* `number`

---

##### `satelliteArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetSatelliteResponse.property.satelliteArn"></a>

- *Type:* `string`

---

##### `satelliteId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGetSatelliteResponse.property.satelliteId"></a>

- *Type:* `string`

---

### GroundStationGroundStationData <a name="aws-cdk-sdk.groundstation.GroundStationGroundStationData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationGroundStationData: groundstation.GroundStationGroundStationData = { ... }
```

##### `groundStationId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGroundStationData.property.groundStationId"></a>

- *Type:* `string`

---

##### `groundStationName`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGroundStationData.property.groundStationName"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationGroundStationData.property.region"></a>

- *Type:* `string`

---

### GroundStationListConfigsRequest <a name="aws-cdk-sdk.groundstation.GroundStationListConfigsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListConfigsRequest: groundstation.GroundStationListConfigsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListConfigsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListConfigsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GroundStationListConfigsResponse <a name="aws-cdk-sdk.groundstation.GroundStationListConfigsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListConfigsResponse: groundstation.GroundStationListConfigsResponse = { ... }
```

##### `configList`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListConfigsResponse.property.configList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationConfigListItem`](#aws-cdk-sdk.groundstation.GroundStationConfigListItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListConfigsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GroundStationListContactsRequest <a name="aws-cdk-sdk.groundstation.GroundStationListContactsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListContactsRequest: groundstation.GroundStationListContactsRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListContactsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListContactsRequest.property.startTime"></a>

- *Type:* `string`

---

##### `statusList`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListContactsRequest.property.statusList"></a>

- *Type:* `string`[]

---

##### `groundStation`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListContactsRequest.property.groundStation"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListContactsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `missionProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListContactsRequest.property.missionProfileArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListContactsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `satelliteArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListContactsRequest.property.satelliteArn"></a>

- *Type:* `string`

---

### GroundStationListContactsResponse <a name="aws-cdk-sdk.groundstation.GroundStationListContactsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListContactsResponse: groundstation.GroundStationListContactsResponse = { ... }
```

##### `contactList`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListContactsResponse.property.contactList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationContactData`](#aws-cdk-sdk.groundstation.GroundStationContactData)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListContactsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GroundStationListDataflowEndpointGroupsRequest <a name="aws-cdk-sdk.groundstation.GroundStationListDataflowEndpointGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListDataflowEndpointGroupsRequest: groundstation.GroundStationListDataflowEndpointGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListDataflowEndpointGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListDataflowEndpointGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GroundStationListDataflowEndpointGroupsResponse <a name="aws-cdk-sdk.groundstation.GroundStationListDataflowEndpointGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListDataflowEndpointGroupsResponse: groundstation.GroundStationListDataflowEndpointGroupsResponse = { ... }
```

##### `dataflowEndpointGroupList`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListDataflowEndpointGroupsResponse.property.dataflowEndpointGroupList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDataflowEndpointListItem`](#aws-cdk-sdk.groundstation.GroundStationDataflowEndpointListItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListDataflowEndpointGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GroundStationListGroundStationsRequest <a name="aws-cdk-sdk.groundstation.GroundStationListGroundStationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListGroundStationsRequest: groundstation.GroundStationListGroundStationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListGroundStationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListGroundStationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `satelliteId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListGroundStationsRequest.property.satelliteId"></a>

- *Type:* `string`

---

### GroundStationListGroundStationsResponse <a name="aws-cdk-sdk.groundstation.GroundStationListGroundStationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListGroundStationsResponse: groundstation.GroundStationListGroundStationsResponse = { ... }
```

##### `groundStationList`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListGroundStationsResponse.property.groundStationList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGroundStationData`](#aws-cdk-sdk.groundstation.GroundStationGroundStationData)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListGroundStationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GroundStationListMissionProfilesRequest <a name="aws-cdk-sdk.groundstation.GroundStationListMissionProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListMissionProfilesRequest: groundstation.GroundStationListMissionProfilesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListMissionProfilesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListMissionProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

### GroundStationListMissionProfilesResponse <a name="aws-cdk-sdk.groundstation.GroundStationListMissionProfilesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListMissionProfilesResponse: groundstation.GroundStationListMissionProfilesResponse = { ... }
```

##### `missionProfileList`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListMissionProfilesResponse.property.missionProfileList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationMissionProfileListItem`](#aws-cdk-sdk.groundstation.GroundStationMissionProfileListItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListMissionProfilesResponse.property.nextToken"></a>

- *Type:* `string`

---

### GroundStationListSatellitesRequest <a name="aws-cdk-sdk.groundstation.GroundStationListSatellitesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListSatellitesRequest: groundstation.GroundStationListSatellitesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListSatellitesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListSatellitesRequest.property.nextToken"></a>

- *Type:* `string`

---

### GroundStationListSatellitesResponse <a name="aws-cdk-sdk.groundstation.GroundStationListSatellitesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListSatellitesResponse: groundstation.GroundStationListSatellitesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListSatellitesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `satellites`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListSatellitesResponse.property.satellites"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationSatelliteListItem`](#aws-cdk-sdk.groundstation.GroundStationSatelliteListItem)[]

---

### GroundStationListTagsForResourceRequest <a name="aws-cdk-sdk.groundstation.GroundStationListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListTagsForResourceRequest: groundstation.GroundStationListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### GroundStationListTagsForResourceResponse <a name="aws-cdk-sdk.groundstation.GroundStationListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationListTagsForResourceResponse: groundstation.GroundStationListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GroundStationMissionProfileIdResponse <a name="aws-cdk-sdk.groundstation.GroundStationMissionProfileIdResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationMissionProfileIdResponse: groundstation.GroundStationMissionProfileIdResponse = { ... }
```

##### `missionProfileId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationMissionProfileIdResponse.property.missionProfileId"></a>

- *Type:* `string`

---

### GroundStationMissionProfileListItem <a name="aws-cdk-sdk.groundstation.GroundStationMissionProfileListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationMissionProfileListItem: groundstation.GroundStationMissionProfileListItem = { ... }
```

##### `missionProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationMissionProfileListItem.property.missionProfileArn"></a>

- *Type:* `string`

---

##### `missionProfileId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationMissionProfileListItem.property.missionProfileId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationMissionProfileListItem.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationMissionProfileListItem.property.region"></a>

- *Type:* `string`

---

### GroundStationReserveContactRequest <a name="aws-cdk-sdk.groundstation.GroundStationReserveContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationReserveContactRequest: groundstation.GroundStationReserveContactRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationReserveContactRequest.property.endTime"></a>

- *Type:* `string`

---

##### `groundStation`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationReserveContactRequest.property.groundStation"></a>

- *Type:* `string`

---

##### `missionProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationReserveContactRequest.property.missionProfileArn"></a>

- *Type:* `string`

---

##### `satelliteArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationReserveContactRequest.property.satelliteArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationReserveContactRequest.property.startTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationReserveContactRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GroundStationSatelliteListItem <a name="aws-cdk-sdk.groundstation.GroundStationSatelliteListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationSatelliteListItem: groundstation.GroundStationSatelliteListItem = { ... }
```

##### `groundStations`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSatelliteListItem.property.groundStations"></a>

- *Type:* `string`[]

---

##### `noradSatelliteID`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSatelliteListItem.property.noradSatelliteID"></a>

- *Type:* `number`

---

##### `satelliteArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSatelliteListItem.property.satelliteArn"></a>

- *Type:* `string`

---

##### `satelliteId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSatelliteListItem.property.satelliteId"></a>

- *Type:* `string`

---

### GroundStationSecurityDetails <a name="aws-cdk-sdk.groundstation.GroundStationSecurityDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationSecurityDetails: groundstation.GroundStationSecurityDetails = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSecurityDetails.property.roleArn"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSecurityDetails.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSecurityDetails.property.subnetIds"></a>

- *Type:* `string`[]

---

### GroundStationSocketAddress <a name="aws-cdk-sdk.groundstation.GroundStationSocketAddress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationSocketAddress: groundstation.GroundStationSocketAddress = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSocketAddress.property.name"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSocketAddress.property.port"></a>

- *Type:* `number`

---

### GroundStationSource <a name="aws-cdk-sdk.groundstation.GroundStationSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationSource: groundstation.GroundStationSource = { ... }
```

##### `configDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSource.property.configDetails"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationConfigDetails`](#aws-cdk-sdk.groundstation.GroundStationConfigDetails)

---

##### `configId`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSource.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSource.property.configType"></a>

- *Type:* `string`

---

##### `dataflowSourceRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSource.property.dataflowSourceRegion"></a>

- *Type:* `string`

---

### GroundStationSpectrumConfig <a name="aws-cdk-sdk.groundstation.GroundStationSpectrumConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationSpectrumConfig: groundstation.GroundStationSpectrumConfig = { ... }
```

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSpectrumConfig.property.bandwidth"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationFrequencyBandwidth`](#aws-cdk-sdk.groundstation.GroundStationFrequencyBandwidth)

---

##### `centerFrequency`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSpectrumConfig.property.centerFrequency"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationFrequency`](#aws-cdk-sdk.groundstation.GroundStationFrequency)

---

##### `polarization`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationSpectrumConfig.property.polarization"></a>

- *Type:* `string`

---

### GroundStationTagResourceRequest <a name="aws-cdk-sdk.groundstation.GroundStationTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationTagResourceRequest: groundstation.GroundStationTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GroundStationTagResourceResponse <a name="aws-cdk-sdk.groundstation.GroundStationTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationTagResourceResponse: groundstation.GroundStationTagResourceResponse = { ... }
```

### GroundStationTrackingConfig <a name="aws-cdk-sdk.groundstation.GroundStationTrackingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationTrackingConfig: groundstation.GroundStationTrackingConfig = { ... }
```

##### `autotrack`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationTrackingConfig.property.autotrack"></a>

- *Type:* `string`

---

### GroundStationUntagResourceRequest <a name="aws-cdk-sdk.groundstation.GroundStationUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationUntagResourceRequest: groundstation.GroundStationUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### GroundStationUntagResourceResponse <a name="aws-cdk-sdk.groundstation.GroundStationUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationUntagResourceResponse: groundstation.GroundStationUntagResourceResponse = { ... }
```

### GroundStationUpdateConfigRequest <a name="aws-cdk-sdk.groundstation.GroundStationUpdateConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationUpdateConfigRequest: groundstation.GroundStationUpdateConfigRequest = { ... }
```

##### `configData`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateConfigRequest.property.configData"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationConfigTypeData`](#aws-cdk-sdk.groundstation.GroundStationConfigTypeData)

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateConfigRequest.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateConfigRequest.property.configType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateConfigRequest.property.name"></a>

- *Type:* `string`

---

### GroundStationUpdateMissionProfileRequest <a name="aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationUpdateMissionProfileRequest: groundstation.GroundStationUpdateMissionProfileRequest = { ... }
```

##### `missionProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest.property.missionProfileId"></a>

- *Type:* `string`

---

##### `contactPostPassDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest.property.contactPostPassDurationSeconds"></a>

- *Type:* `number`

---

##### `contactPrePassDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest.property.contactPrePassDurationSeconds"></a>

- *Type:* `number`

---

##### `dataflowEdges`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest.property.dataflowEdges"></a>

- *Type:* `string`[][]

---

##### `minimumViableContactDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest.property.minimumViableContactDurationSeconds"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest.property.name"></a>

- *Type:* `string`

---

##### `trackingConfigArn`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest.property.trackingConfigArn"></a>

- *Type:* `string`

---

### GroundStationUplinkEchoConfig <a name="aws-cdk-sdk.groundstation.GroundStationUplinkEchoConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationUplinkEchoConfig: groundstation.GroundStationUplinkEchoConfig = { ... }
```

##### `antennaUplinkConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUplinkEchoConfig.property.antennaUplinkConfigArn"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUplinkEchoConfig.property.enabled"></a>

- *Type:* `boolean`

---

### GroundStationUplinkSpectrumConfig <a name="aws-cdk-sdk.groundstation.GroundStationUplinkSpectrumConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

const groundStationUplinkSpectrumConfig: groundstation.GroundStationUplinkSpectrumConfig = { ... }
```

##### `centerFrequency`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUplinkSpectrumConfig.property.centerFrequency"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationFrequency`](#aws-cdk-sdk.groundstation.GroundStationFrequency)

---

##### `polarization`<sup>Optional</sup> <a name="aws-cdk-sdk.groundstation.GroundStationUplinkSpectrumConfig.property.polarization"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### GroundStationResponsesCancelContact <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCancelContact"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCancelContact.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesCancelContact(__scope: Construct, __resources: string[], __input: GroundStationCancelContactRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCancelContact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCancelContact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCancelContact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationCancelContactRequest`](#aws-cdk-sdk.groundstation.GroundStationCancelContactRequest)

---



#### Properties <a name="Properties"></a>

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCancelContact.property.contactId"></a>

- *Type:* `string`

---


### GroundStationResponsesCreateConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesCreateConfig(__scope: Construct, __resources: string[], __input: GroundStationCreateConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationCreateConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationCreateConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `configArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateConfig.property.configArn"></a>

- *Type:* `string`

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateConfig.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateConfig.property.configType"></a>

- *Type:* `string`

---


### GroundStationResponsesCreateDataflowEndpointGroup <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateDataflowEndpointGroup"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateDataflowEndpointGroup.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesCreateDataflowEndpointGroup(__scope: Construct, __resources: string[], __input: GroundStationCreateDataflowEndpointGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateDataflowEndpointGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateDataflowEndpointGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateDataflowEndpointGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationCreateDataflowEndpointGroupRequest`](#aws-cdk-sdk.groundstation.GroundStationCreateDataflowEndpointGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `dataflowEndpointGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateDataflowEndpointGroup.property.dataflowEndpointGroupId"></a>

- *Type:* `string`

---


### GroundStationResponsesCreateMissionProfile <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateMissionProfile"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateMissionProfile.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesCreateMissionProfile(__scope: Construct, __resources: string[], __input: GroundStationCreateMissionProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateMissionProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateMissionProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateMissionProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest`](#aws-cdk-sdk.groundstation.GroundStationCreateMissionProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `missionProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesCreateMissionProfile.property.missionProfileId"></a>

- *Type:* `string`

---


### GroundStationResponsesDeleteConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesDeleteConfig(__scope: Construct, __resources: string[], __input: GroundStationDeleteConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDeleteConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationDeleteConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `configArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteConfig.property.configArn"></a>

- *Type:* `string`

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteConfig.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteConfig.property.configType"></a>

- *Type:* `string`

---


### GroundStationResponsesDeleteDataflowEndpointGroup <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteDataflowEndpointGroup"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteDataflowEndpointGroup.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesDeleteDataflowEndpointGroup(__scope: Construct, __resources: string[], __input: GroundStationDeleteDataflowEndpointGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteDataflowEndpointGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteDataflowEndpointGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteDataflowEndpointGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDeleteDataflowEndpointGroupRequest`](#aws-cdk-sdk.groundstation.GroundStationDeleteDataflowEndpointGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `dataflowEndpointGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteDataflowEndpointGroup.property.dataflowEndpointGroupId"></a>

- *Type:* `string`

---


### GroundStationResponsesDeleteMissionProfile <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteMissionProfile"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteMissionProfile.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesDeleteMissionProfile(__scope: Construct, __resources: string[], __input: GroundStationDeleteMissionProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteMissionProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteMissionProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteMissionProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDeleteMissionProfileRequest`](#aws-cdk-sdk.groundstation.GroundStationDeleteMissionProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `missionProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDeleteMissionProfile.property.missionProfileId"></a>

- *Type:* `string`

---


### GroundStationResponsesDescribeContact <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesDescribeContact(__scope: Construct, __resources: string[], __input: GroundStationDescribeContactRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDescribeContactRequest`](#aws-cdk-sdk.groundstation.GroundStationDescribeContactRequest)

---



#### Properties <a name="Properties"></a>

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.contactId"></a>

- *Type:* `string`

---

##### `contactStatus`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.contactStatus"></a>

- *Type:* `string`

---

##### `dataflowList`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.dataflowList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDataflowDetail`](#aws-cdk-sdk.groundstation.GroundStationDataflowDetail)[]

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.endTime"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.errorMessage"></a>

- *Type:* `string`

---

##### `groundStation`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.groundStation"></a>

- *Type:* `string`

---

##### `maximumElevation`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.maximumElevation"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContactMaximumElevation`](#aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContactMaximumElevation)

---

##### `missionProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.missionProfileArn"></a>

- *Type:* `string`

---

##### `postPassEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.postPassEndTime"></a>

- *Type:* `string`

---

##### `prePassStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.prePassStartTime"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.region"></a>

- *Type:* `string`

---

##### `satelliteArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.satelliteArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.startTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContact.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GroundStationResponsesDescribeContactMaximumElevation <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContactMaximumElevation"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContactMaximumElevation.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesDescribeContactMaximumElevation(__scope: Construct, __resources: string[], __input: GroundStationDescribeContactRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContactMaximumElevation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContactMaximumElevation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContactMaximumElevation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDescribeContactRequest`](#aws-cdk-sdk.groundstation.GroundStationDescribeContactRequest)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContactMaximumElevation.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesDescribeContactMaximumElevation.property.value"></a>

- *Type:* `number`

---


### GroundStationResponsesFetchConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `configArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig.property.configArn"></a>

- *Type:* `string`

---

##### `configData`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig.property.configData"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData)

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig.property.configType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfig.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GroundStationResponsesFetchConfigConfigData <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigData(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `antennaDownlinkConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData.property.antennaDownlinkConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig)

---

##### `antennaDownlinkDemodDecodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData.property.antennaDownlinkDemodDecodeConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig)

---

##### `antennaUplinkConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData.property.antennaUplinkConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig)

---

##### `dataflowEndpointConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData.property.dataflowEndpointConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig)

---

##### `trackingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData.property.trackingConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataTrackingConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataTrackingConfig)

---

##### `uplinkEchoConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigData.property.uplinkEchoConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig)

---


### GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `spectrumConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfig.property.spectrumConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig)

---


### GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.bandwidth"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth)

---

##### `centerFrequency`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.centerFrequency"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency)

---

##### `polarization`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.polarization"></a>

- *Type:* `string`

---


### GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `units`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.units"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.value"></a>

- *Type:* `number`

---


### GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `units`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.units"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.value"></a>

- *Type:* `number`

---


### GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `decodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.decodeConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig)

---

##### `demodulationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.demodulationConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig)

---

##### `spectrumConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.spectrumConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig)

---


### GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `unvalidatedJson`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.property.unvalidatedJson"></a>

- *Type:* `string`

---


### GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `unvalidatedJson`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.property.unvalidatedJson"></a>

- *Type:* `string`

---


### GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.bandwidth"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth)

---

##### `centerFrequency`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.centerFrequency"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency)

---

##### `polarization`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.polarization"></a>

- *Type:* `string`

---


### GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `units`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.units"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.value"></a>

- *Type:* `number`

---


### GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `units`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.units"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.value"></a>

- *Type:* `number`

---


### GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `spectrumConfig`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig.property.spectrumConfig"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig)

---

##### `targetEirp`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig.property.targetEirp"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp)

---

##### `transmitDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfig.property.transmitDisabled"></a>

- *Type:* `boolean`

---


### GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `centerFrequency`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.centerFrequency"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency`](#aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency)

---

##### `polarization`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.polarization"></a>

- *Type:* `string`

---


### GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `units`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.units"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.value"></a>

- *Type:* `number`

---


### GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `units`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp.property.units"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataAntennaUplinkConfigTargetEirp.property.value"></a>

- *Type:* `number`

---


### GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `dataflowEndpointName`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointName"></a>

- *Type:* `string`

---

##### `dataflowEndpointRegion`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointRegion"></a>

- *Type:* `string`

---


### GroundStationResponsesFetchConfigConfigDataTrackingConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataTrackingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataTrackingConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataTrackingConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataTrackingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataTrackingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataTrackingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `autotrack`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataTrackingConfig.property.autotrack"></a>

- *Type:* `string`

---


### GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig(__scope: Construct, __resources: string[], __input: GroundStationGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `antennaUplinkConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig.property.antennaUplinkConfigArn"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchConfigConfigDataUplinkEchoConfig.property.enabled"></a>

- *Type:* `boolean`

---


### GroundStationResponsesFetchDataflowEndpointGroup <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchDataflowEndpointGroup"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchDataflowEndpointGroup.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchDataflowEndpointGroup(__scope: Construct, __resources: string[], __input: GroundStationGetDataflowEndpointGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchDataflowEndpointGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchDataflowEndpointGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchDataflowEndpointGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupRequest`](#aws-cdk-sdk.groundstation.GroundStationGetDataflowEndpointGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `dataflowEndpointGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchDataflowEndpointGroup.property.dataflowEndpointGroupArn"></a>

- *Type:* `string`

---

##### `dataflowEndpointGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchDataflowEndpointGroup.property.dataflowEndpointGroupId"></a>

- *Type:* `string`

---

##### `endpointsDetails`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchDataflowEndpointGroup.property.endpointsDetails"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationEndpointDetails`](#aws-cdk-sdk.groundstation.GroundStationEndpointDetails)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchDataflowEndpointGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GroundStationResponsesFetchMinuteUsage <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMinuteUsage"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMinuteUsage.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchMinuteUsage(__scope: Construct, __resources: string[], __input: GroundStationGetMinuteUsageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMinuteUsage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMinuteUsage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMinuteUsage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageRequest`](#aws-cdk-sdk.groundstation.GroundStationGetMinuteUsageRequest)

---



#### Properties <a name="Properties"></a>

##### `estimatedMinutesRemaining`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMinuteUsage.property.estimatedMinutesRemaining"></a>

- *Type:* `number`

---

##### `isReservedMinutesCustomer`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMinuteUsage.property.isReservedMinutesCustomer"></a>

- *Type:* `boolean`

---

##### `totalReservedMinuteAllocation`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMinuteUsage.property.totalReservedMinuteAllocation"></a>

- *Type:* `number`

---

##### `totalScheduledMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMinuteUsage.property.totalScheduledMinutes"></a>

- *Type:* `number`

---

##### `upcomingMinutesScheduled`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMinuteUsage.property.upcomingMinutesScheduled"></a>

- *Type:* `number`

---


### GroundStationResponsesFetchMissionProfile <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchMissionProfile(__scope: Construct, __resources: string[], __input: GroundStationGetMissionProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetMissionProfileRequest`](#aws-cdk-sdk.groundstation.GroundStationGetMissionProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `contactPostPassDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.property.contactPostPassDurationSeconds"></a>

- *Type:* `number`

---

##### `contactPrePassDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.property.contactPrePassDurationSeconds"></a>

- *Type:* `number`

---

##### `dataflowEdges`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.property.dataflowEdges"></a>

- *Type:* `string`[][]

---

##### `minimumViableContactDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.property.minimumViableContactDurationSeconds"></a>

- *Type:* `number`

---

##### `missionProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.property.missionProfileArn"></a>

- *Type:* `string`

---

##### `missionProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.property.missionProfileId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `trackingConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchMissionProfile.property.trackingConfigArn"></a>

- *Type:* `string`

---


### GroundStationResponsesFetchSatellite <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchSatellite"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchSatellite.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesFetchSatellite(__scope: Construct, __resources: string[], __input: GroundStationGetSatelliteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchSatellite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchSatellite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchSatellite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGetSatelliteRequest`](#aws-cdk-sdk.groundstation.GroundStationGetSatelliteRequest)

---



#### Properties <a name="Properties"></a>

##### `groundStations`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchSatellite.property.groundStations"></a>

- *Type:* `string`[]

---

##### `noradSatelliteId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchSatellite.property.noradSatelliteId"></a>

- *Type:* `number`

---

##### `satelliteArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchSatellite.property.satelliteArn"></a>

- *Type:* `string`

---

##### `satelliteId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesFetchSatellite.property.satelliteId"></a>

- *Type:* `string`

---


### GroundStationResponsesListConfigs <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListConfigs"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListConfigs.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesListConfigs(__scope: Construct, __resources: string[], __input: GroundStationListConfigsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListConfigs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListConfigs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListConfigs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListConfigsRequest`](#aws-cdk-sdk.groundstation.GroundStationListConfigsRequest)

---



#### Properties <a name="Properties"></a>

##### `configList`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListConfigs.property.configList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationConfigListItem`](#aws-cdk-sdk.groundstation.GroundStationConfigListItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListConfigs.property.nextToken"></a>

- *Type:* `string`

---


### GroundStationResponsesListContacts <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListContacts"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListContacts.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesListContacts(__scope: Construct, __resources: string[], __input: GroundStationListContactsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListContacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListContacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListContacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListContactsRequest`](#aws-cdk-sdk.groundstation.GroundStationListContactsRequest)

---



#### Properties <a name="Properties"></a>

##### `contactList`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListContacts.property.contactList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationContactData`](#aws-cdk-sdk.groundstation.GroundStationContactData)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListContacts.property.nextToken"></a>

- *Type:* `string`

---


### GroundStationResponsesListDataflowEndpointGroups <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListDataflowEndpointGroups"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListDataflowEndpointGroups.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesListDataflowEndpointGroups(__scope: Construct, __resources: string[], __input: GroundStationListDataflowEndpointGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListDataflowEndpointGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListDataflowEndpointGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListDataflowEndpointGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListDataflowEndpointGroupsRequest`](#aws-cdk-sdk.groundstation.GroundStationListDataflowEndpointGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `dataflowEndpointGroupList`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListDataflowEndpointGroups.property.dataflowEndpointGroupList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationDataflowEndpointListItem`](#aws-cdk-sdk.groundstation.GroundStationDataflowEndpointListItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListDataflowEndpointGroups.property.nextToken"></a>

- *Type:* `string`

---


### GroundStationResponsesListGroundStations <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListGroundStations"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListGroundStations.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesListGroundStations(__scope: Construct, __resources: string[], __input: GroundStationListGroundStationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListGroundStations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListGroundStations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListGroundStations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListGroundStationsRequest`](#aws-cdk-sdk.groundstation.GroundStationListGroundStationsRequest)

---



#### Properties <a name="Properties"></a>

##### `groundStationList`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListGroundStations.property.groundStationList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationGroundStationData`](#aws-cdk-sdk.groundstation.GroundStationGroundStationData)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListGroundStations.property.nextToken"></a>

- *Type:* `string`

---


### GroundStationResponsesListMissionProfiles <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListMissionProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListMissionProfiles.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesListMissionProfiles(__scope: Construct, __resources: string[], __input: GroundStationListMissionProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListMissionProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListMissionProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListMissionProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListMissionProfilesRequest`](#aws-cdk-sdk.groundstation.GroundStationListMissionProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `missionProfileList`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListMissionProfiles.property.missionProfileList"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationMissionProfileListItem`](#aws-cdk-sdk.groundstation.GroundStationMissionProfileListItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListMissionProfiles.property.nextToken"></a>

- *Type:* `string`

---


### GroundStationResponsesListSatellites <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListSatellites"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListSatellites.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesListSatellites(__scope: Construct, __resources: string[], __input: GroundStationListSatellitesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListSatellites.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListSatellites.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListSatellites.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListSatellitesRequest`](#aws-cdk-sdk.groundstation.GroundStationListSatellitesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListSatellites.property.nextToken"></a>

- *Type:* `string`

---

##### `satellites`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListSatellites.property.satellites"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationSatelliteListItem`](#aws-cdk-sdk.groundstation.GroundStationSatelliteListItem)[]

---


### GroundStationResponsesListTagsForResource <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListTagsForResource.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: GroundStationListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationListTagsForResourceRequest`](#aws-cdk-sdk.groundstation.GroundStationListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GroundStationResponsesReserveContact <a name="aws-cdk-sdk.groundstation.GroundStationResponsesReserveContact"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesReserveContact.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesReserveContact(__scope: Construct, __resources: string[], __input: GroundStationReserveContactRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesReserveContact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesReserveContact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesReserveContact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationReserveContactRequest`](#aws-cdk-sdk.groundstation.GroundStationReserveContactRequest)

---



#### Properties <a name="Properties"></a>

##### `contactId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesReserveContact.property.contactId"></a>

- *Type:* `string`

---


### GroundStationResponsesUpdateConfig <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateConfig"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateConfig.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesUpdateConfig(__scope: Construct, __resources: string[], __input: GroundStationUpdateConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationUpdateConfigRequest`](#aws-cdk-sdk.groundstation.GroundStationUpdateConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `configArn`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateConfig.property.configArn"></a>

- *Type:* `string`

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateConfig.property.configId"></a>

- *Type:* `string`

---

##### `configType`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateConfig.property.configType"></a>

- *Type:* `string`

---


### GroundStationResponsesUpdateMissionProfile <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateMissionProfile"></a>

#### Initializer <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateMissionProfile.Initializer"></a>

```typescript
import { groundstation } from 'aws-cdk-sdk'

new groundstation.GroundStationResponsesUpdateMissionProfile(__scope: Construct, __resources: string[], __input: GroundStationUpdateMissionProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateMissionProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateMissionProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateMissionProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest`](#aws-cdk-sdk.groundstation.GroundStationUpdateMissionProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `missionProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.groundstation.GroundStationResponsesUpdateMissionProfile.property.missionProfileId"></a>

- *Type:* `string`

---



