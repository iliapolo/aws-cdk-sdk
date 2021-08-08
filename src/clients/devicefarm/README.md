# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DeviceFarmClient <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createDevicePool` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.createDevicePool"></a>

```typescript
public createDevicePool(input: DeviceFarmCreateDevicePoolRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest)

---

##### `createInstanceProfile` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.createInstanceProfile"></a>

```typescript
public createInstanceProfile(input: DeviceFarmCreateInstanceProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest)

---

##### `createNetworkProfile` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.createNetworkProfile"></a>

```typescript
public createNetworkProfile(input: DeviceFarmCreateNetworkProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest)

---

##### `createProject` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.createProject"></a>

```typescript
public createProject(input: DeviceFarmCreateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectRequest)

---

##### `createRemoteAccessSession` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.createRemoteAccessSession"></a>

```typescript
public createRemoteAccessSession(input: DeviceFarmCreateRemoteAccessSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest)

---

##### `createTestGridProject` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.createTestGridProject"></a>

```typescript
public createTestGridProject(input: DeviceFarmCreateTestGridProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectRequest)

---

##### `createTestGridUrl` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.createTestGridUrl"></a>

```typescript
public createTestGridUrl(input: DeviceFarmCreateTestGridUrlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridUrlRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridUrlRequest)

---

##### `createUpload` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.createUpload"></a>

```typescript
public createUpload(input: DeviceFarmCreateUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest)

---

##### `createVpceConfiguration` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.createVpceConfiguration"></a>

```typescript
public createVpceConfiguration(input: DeviceFarmCreateVpceConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest)

---

##### `deleteDevicePool` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.deleteDevicePool"></a>

```typescript
public deleteDevicePool(input: DeviceFarmDeleteDevicePoolRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeleteDevicePoolRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmDeleteDevicePoolRequest)

---

##### `deleteInstanceProfile` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.deleteInstanceProfile"></a>

```typescript
public deleteInstanceProfile(input: DeviceFarmDeleteInstanceProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeleteInstanceProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmDeleteInstanceProfileRequest)

---

##### `deleteNetworkProfile` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.deleteNetworkProfile"></a>

```typescript
public deleteNetworkProfile(input: DeviceFarmDeleteNetworkProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeleteNetworkProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmDeleteNetworkProfileRequest)

---

##### `deleteProject` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.deleteProject"></a>

```typescript
public deleteProject(input: DeviceFarmDeleteProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeleteProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmDeleteProjectRequest)

---

##### `deleteRemoteAccessSession` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.deleteRemoteAccessSession"></a>

```typescript
public deleteRemoteAccessSession(input: DeviceFarmDeleteRemoteAccessSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeleteRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmDeleteRemoteAccessSessionRequest)

---

##### `deleteRun` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.deleteRun"></a>

```typescript
public deleteRun(input: DeviceFarmDeleteRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeleteRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmDeleteRunRequest)

---

##### `deleteTestGridProject` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.deleteTestGridProject"></a>

```typescript
public deleteTestGridProject(input: DeviceFarmDeleteTestGridProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeleteTestGridProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmDeleteTestGridProjectRequest)

---

##### `deleteUpload` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.deleteUpload"></a>

```typescript
public deleteUpload(input: DeviceFarmDeleteUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeleteUploadRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmDeleteUploadRequest)

---

##### `deleteVpceConfiguration` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.deleteVpceConfiguration"></a>

```typescript
public deleteVpceConfiguration(input: DeviceFarmDeleteVpceConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeleteVpceConfigurationRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmDeleteVpceConfigurationRequest)

---

##### `fetchAccountSettings` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchAccountSettings"></a>

```typescript
public fetchAccountSettings()
```

##### `fetchDevice` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchDevice"></a>

```typescript
public fetchDevice(input: DeviceFarmGetDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest)

---

##### `fetchDeviceInstance` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchDeviceInstance"></a>

```typescript
public fetchDeviceInstance(input: DeviceFarmGetDeviceInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceRequest)

---

##### `fetchDevicePool` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchDevicePool"></a>

```typescript
public fetchDevicePool(input: DeviceFarmGetDevicePoolRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolRequest)

---

##### `fetchDevicePoolCompatibility` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchDevicePoolCompatibility"></a>

```typescript
public fetchDevicePoolCompatibility(input: DeviceFarmGetDevicePoolCompatibilityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest)

---

##### `fetchInstanceProfile` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchInstanceProfile"></a>

```typescript
public fetchInstanceProfile(input: DeviceFarmGetInstanceProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetInstanceProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetInstanceProfileRequest)

---

##### `fetchJob` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchJob"></a>

```typescript
public fetchJob(input: DeviceFarmGetJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest)

---

##### `fetchNetworkProfile` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchNetworkProfile"></a>

```typescript
public fetchNetworkProfile(input: DeviceFarmGetNetworkProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetNetworkProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetNetworkProfileRequest)

---

##### `fetchOfferingStatus` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchOfferingStatus"></a>

```typescript
public fetchOfferingStatus(input: DeviceFarmGetOfferingStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetOfferingStatusRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetOfferingStatusRequest)

---

##### `fetchProject` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchProject"></a>

```typescript
public fetchProject(input: DeviceFarmGetProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetProjectRequest)

---

##### `fetchRemoteAccessSession` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchRemoteAccessSession"></a>

```typescript
public fetchRemoteAccessSession(input: DeviceFarmGetRemoteAccessSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest)

---

##### `fetchRun` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchRun"></a>

```typescript
public fetchRun(input: DeviceFarmGetRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest)

---

##### `fetchSuite` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchSuite"></a>

```typescript
public fetchSuite(input: DeviceFarmGetSuiteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest)

---

##### `fetchTest` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchTest"></a>

```typescript
public fetchTest(input: DeviceFarmGetTestRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest)

---

##### `fetchTestGridProject` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchTestGridProject"></a>

```typescript
public fetchTestGridProject(input: DeviceFarmGetTestGridProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridProjectRequest)

---

##### `fetchTestGridSession` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchTestGridSession"></a>

```typescript
public fetchTestGridSession(input: DeviceFarmGetTestGridSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionRequest)

---

##### `fetchUpload` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchUpload"></a>

```typescript
public fetchUpload(input: DeviceFarmGetUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetUploadRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetUploadRequest)

---

##### `fetchVpceConfiguration` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.fetchVpceConfiguration"></a>

```typescript
public fetchVpceConfiguration(input: DeviceFarmGetVpceConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetVpceConfigurationRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetVpceConfigurationRequest)

---

##### `installToRemoteAccessSession` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.installToRemoteAccessSession"></a>

```typescript
public installToRemoteAccessSession(input: DeviceFarmInstallToRemoteAccessSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionRequest)

---

##### `listArtifacts` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listArtifacts"></a>

```typescript
public listArtifacts(input: DeviceFarmListArtifactsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsRequest)

---

##### `listDeviceInstances` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listDeviceInstances"></a>

```typescript
public listDeviceInstances(input: DeviceFarmListDeviceInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListDeviceInstancesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListDeviceInstancesRequest)

---

##### `listDevicePools` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listDevicePools"></a>

```typescript
public listDevicePools(input: DeviceFarmListDevicePoolsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsRequest)

---

##### `listDevices` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listDevices"></a>

```typescript
public listDevices(input: DeviceFarmListDevicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListDevicesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListDevicesRequest)

---

##### `listInstanceProfiles` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listInstanceProfiles"></a>

```typescript
public listInstanceProfiles(input: DeviceFarmListInstanceProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListInstanceProfilesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListInstanceProfilesRequest)

---

##### `listJobs` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listJobs"></a>

```typescript
public listJobs(input: DeviceFarmListJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListJobsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListJobsRequest)

---

##### `listNetworkProfiles` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listNetworkProfiles"></a>

```typescript
public listNetworkProfiles(input: DeviceFarmListNetworkProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesRequest)

---

##### `listOfferingPromotions` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listOfferingPromotions"></a>

```typescript
public listOfferingPromotions(input: DeviceFarmListOfferingPromotionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListOfferingPromotionsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListOfferingPromotionsRequest)

---

##### `listOfferings` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listOfferings"></a>

```typescript
public listOfferings(input: DeviceFarmListOfferingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListOfferingsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListOfferingsRequest)

---

##### `listOfferingTransactions` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listOfferingTransactions"></a>

```typescript
public listOfferingTransactions(input: DeviceFarmListOfferingTransactionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListOfferingTransactionsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListOfferingTransactionsRequest)

---

##### `listProjects` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listProjects"></a>

```typescript
public listProjects(input: DeviceFarmListProjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListProjectsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListProjectsRequest)

---

##### `listRemoteAccessSessions` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listRemoteAccessSessions"></a>

```typescript
public listRemoteAccessSessions(input: DeviceFarmListRemoteAccessSessionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListRemoteAccessSessionsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListRemoteAccessSessionsRequest)

---

##### `listRuns` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listRuns"></a>

```typescript
public listRuns(input: DeviceFarmListRunsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListRunsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListRunsRequest)

---

##### `listSamples` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listSamples"></a>

```typescript
public listSamples(input: DeviceFarmListSamplesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListSamplesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListSamplesRequest)

---

##### `listSuites` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listSuites"></a>

```typescript
public listSuites(input: DeviceFarmListSuitesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListSuitesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListSuitesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: DeviceFarmListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTagsForResourceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTagsForResourceRequest)

---

##### `listTestGridProjects` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listTestGridProjects"></a>

```typescript
public listTestGridProjects(input: DeviceFarmListTestGridProjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTestGridProjectsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTestGridProjectsRequest)

---

##### `listTestGridSessionActions` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listTestGridSessionActions"></a>

```typescript
public listTestGridSessionActions(input: DeviceFarmListTestGridSessionActionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsRequest)

---

##### `listTestGridSessionArtifacts` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listTestGridSessionArtifacts"></a>

```typescript
public listTestGridSessionArtifacts(input: DeviceFarmListTestGridSessionArtifactsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsRequest)

---

##### `listTestGridSessions` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listTestGridSessions"></a>

```typescript
public listTestGridSessions(input: DeviceFarmListTestGridSessionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest)

---

##### `listTests` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listTests"></a>

```typescript
public listTests(input: DeviceFarmListTestsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTestsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTestsRequest)

---

##### `listUniqueProblems` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listUniqueProblems"></a>

```typescript
public listUniqueProblems(input: DeviceFarmListUniqueProblemsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListUniqueProblemsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListUniqueProblemsRequest)

---

##### `listUploads` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listUploads"></a>

```typescript
public listUploads(input: DeviceFarmListUploadsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListUploadsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListUploadsRequest)

---

##### `listVpceConfigurations` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.listVpceConfigurations"></a>

```typescript
public listVpceConfigurations(input: DeviceFarmListVpceConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListVpceConfigurationsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListVpceConfigurationsRequest)

---

##### `purchaseOffering` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.purchaseOffering"></a>

```typescript
public purchaseOffering(input: DeviceFarmPurchaseOfferingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest)

---

##### `renewOffering` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.renewOffering"></a>

```typescript
public renewOffering(input: DeviceFarmRenewOfferingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest)

---

##### `scheduleRun` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.scheduleRun"></a>

```typescript
public scheduleRun(input: DeviceFarmScheduleRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest)

---

##### `stopJob` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.stopJob"></a>

```typescript
public stopJob(input: DeviceFarmStopJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest)

---

##### `stopRemoteAccessSession` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.stopRemoteAccessSession"></a>

```typescript
public stopRemoteAccessSession(input: DeviceFarmStopRemoteAccessSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest)

---

##### `stopRun` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.stopRun"></a>

```typescript
public stopRun(input: DeviceFarmStopRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.tagResource"></a>

```typescript
public tagResource(input: DeviceFarmTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTagResourceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.untagResource"></a>

```typescript
public untagResource(input: DeviceFarmUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUntagResourceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUntagResourceRequest)

---

##### `updateDeviceInstance` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.updateDeviceInstance"></a>

```typescript
public updateDeviceInstance(input: DeviceFarmUpdateDeviceInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest)

---

##### `updateDevicePool` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.updateDevicePool"></a>

```typescript
public updateDevicePool(input: DeviceFarmUpdateDevicePoolRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest)

---

##### `updateInstanceProfile` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.updateInstanceProfile"></a>

```typescript
public updateInstanceProfile(input: DeviceFarmUpdateInstanceProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest)

---

##### `updateNetworkProfile` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.updateNetworkProfile"></a>

```typescript
public updateNetworkProfile(input: DeviceFarmUpdateNetworkProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest)

---

##### `updateProject` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.updateProject"></a>

```typescript
public updateProject(input: DeviceFarmUpdateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectRequest)

---

##### `updateTestGridProject` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.updateTestGridProject"></a>

```typescript
public updateTestGridProject(input: DeviceFarmUpdateTestGridProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectRequest)

---

##### `updateUpload` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.updateUpload"></a>

```typescript
public updateUpload(input: DeviceFarmUpdateUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest)

---

##### `updateVpceConfiguration` <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.updateVpceConfiguration"></a>

```typescript
public updateVpceConfiguration(input: DeviceFarmUpdateVpceConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest)

---




## Structs <a name="Structs"></a>

### DeviceFarmAccountSettings <a name="aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmAccountSettings: devicefarm.DeviceFarmAccountSettings = { ... }
```

##### `awsAccountNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings.property.awsAccountNumber"></a>

- *Type:* `string`

---

##### `defaultJobTimeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings.property.defaultJobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `maxJobTimeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings.property.maxJobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `maxSlots`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings.property.maxSlots"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `skipAppResign`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `trialMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings.property.trialMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTrialMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmTrialMinutes)

---

##### `unmeteredDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings.property.unmeteredDevices"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `unmeteredRemoteAccessDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings.property.unmeteredRemoteAccessDevices"></a>

- *Type:* {[ key: string ]: `number`}

---

### DeviceFarmArtifact <a name="aws-cdk-sdk.devicefarm.DeviceFarmArtifact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmArtifact: devicefarm.DeviceFarmArtifact = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmArtifact.property.arn"></a>

- *Type:* `string`

---

##### `extension`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmArtifact.property.extension"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmArtifact.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmArtifact.property.type"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmArtifact.property.url"></a>

- *Type:* `string`

---

### DeviceFarmCounters <a name="aws-cdk-sdk.devicefarm.DeviceFarmCounters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCounters: devicefarm.DeviceFarmCounters = { ... }
```

##### `errored`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCounters.property.errored"></a>

- *Type:* `number`

---

##### `failed`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCounters.property.failed"></a>

- *Type:* `number`

---

##### `passed`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCounters.property.passed"></a>

- *Type:* `number`

---

##### `skipped`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCounters.property.skipped"></a>

- *Type:* `number`

---

##### `stopped`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCounters.property.stopped"></a>

- *Type:* `number`

---

##### `total`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCounters.property.total"></a>

- *Type:* `number`

---

##### `warned`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCounters.property.warned"></a>

- *Type:* `number`

---

### DeviceFarmCpu <a name="aws-cdk-sdk.devicefarm.DeviceFarmCpu"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCpu: devicefarm.DeviceFarmCpu = { ... }
```

##### `architecture`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCpu.property.architecture"></a>

- *Type:* `string`

---

##### `clock`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCpu.property.clock"></a>

- *Type:* `number`

---

##### `frequency`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCpu.property.frequency"></a>

- *Type:* `string`

---

### DeviceFarmCreateDevicePoolRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateDevicePoolRequest: devicefarm.DeviceFarmCreateDevicePoolRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest.property.name"></a>

- *Type:* `string`

---

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest.property.projectArn"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest.property.rules"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRule`](#aws-cdk-sdk.devicefarm.DeviceFarmRule)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest.property.description"></a>

- *Type:* `string`

---

##### `maxDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest.property.maxDevices"></a>

- *Type:* `number`

---

### DeviceFarmCreateDevicePoolResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateDevicePoolResult: devicefarm.DeviceFarmCreateDevicePoolResult = { ... }
```

##### `devicePool`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolResult.property.devicePool"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevicePool`](#aws-cdk-sdk.devicefarm.DeviceFarmDevicePool)

---

### DeviceFarmCreateInstanceProfileRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateInstanceProfileRequest: devicefarm.DeviceFarmCreateInstanceProfileRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest.property.description"></a>

- *Type:* `string`

---

##### `excludeAppPackagesFromCleanup`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest.property.excludeAppPackagesFromCleanup"></a>

- *Type:* `string`[]

---

##### `packageCleanup`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest.property.packageCleanup"></a>

- *Type:* `boolean`

---

##### `rebootAfterUse`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest.property.rebootAfterUse"></a>

- *Type:* `boolean`

---

### DeviceFarmCreateInstanceProfileResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateInstanceProfileResult: devicefarm.DeviceFarmCreateInstanceProfileResult = { ... }
```

##### `instanceProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileResult.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile)

---

### DeviceFarmCreateNetworkProfileRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateNetworkProfileRequest: devicefarm.DeviceFarmCreateNetworkProfileRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.name"></a>

- *Type:* `string`

---

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.projectArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.description"></a>

- *Type:* `string`

---

##### `downlinkBandwidthBits`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.downlinkBandwidthBits"></a>

- *Type:* `number`

---

##### `downlinkDelayMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.downlinkDelayMs"></a>

- *Type:* `number`

---

##### `downlinkJitterMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.downlinkJitterMs"></a>

- *Type:* `number`

---

##### `downlinkLossPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.downlinkLossPercent"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.type"></a>

- *Type:* `string`

---

##### `uplinkBandwidthBits`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.uplinkBandwidthBits"></a>

- *Type:* `number`

---

##### `uplinkDelayMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.uplinkDelayMs"></a>

- *Type:* `number`

---

##### `uplinkJitterMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.uplinkJitterMs"></a>

- *Type:* `number`

---

##### `uplinkLossPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest.property.uplinkLossPercent"></a>

- *Type:* `number`

---

### DeviceFarmCreateNetworkProfileResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateNetworkProfileResult: devicefarm.DeviceFarmCreateNetworkProfileResult = { ... }
```

##### `networkProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileResult.property.networkProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile)

---

### DeviceFarmCreateProjectRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateProjectRequest: devicefarm.DeviceFarmCreateProjectRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectRequest.property.name"></a>

- *Type:* `string`

---

##### `defaultJobTimeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectRequest.property.defaultJobTimeoutMinutes"></a>

- *Type:* `number`

---

### DeviceFarmCreateProjectResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateProjectResult: devicefarm.DeviceFarmCreateProjectResult = { ... }
```

##### `project`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectResult.property.project"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmProject`](#aws-cdk-sdk.devicefarm.DeviceFarmProject)

---

### DeviceFarmCreateRemoteAccessSessionConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateRemoteAccessSessionConfiguration: devicefarm.DeviceFarmCreateRemoteAccessSessionConfiguration = { ... }
```

##### `billingMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionConfiguration.property.billingMethod"></a>

- *Type:* `string`

---

##### `vpceConfigurationArns`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionConfiguration.property.vpceConfigurationArns"></a>

- *Type:* `string`[]

---

### DeviceFarmCreateRemoteAccessSessionRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateRemoteAccessSessionRequest: devicefarm.DeviceFarmCreateRemoteAccessSessionRequest = { ... }
```

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.deviceArn"></a>

- *Type:* `string`

---

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.projectArn"></a>

- *Type:* `string`

---

##### `clientId`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.clientId"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionConfiguration)

---

##### `instanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `interactionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.interactionMode"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.name"></a>

- *Type:* `string`

---

##### `remoteDebugEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `remoteRecordAppArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.remoteRecordAppArn"></a>

- *Type:* `string`

---

##### `remoteRecordEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.remoteRecordEnabled"></a>

- *Type:* `boolean`

---

##### `skipAppResign`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest.property.sshPublicKey"></a>

- *Type:* `string`

---

### DeviceFarmCreateRemoteAccessSessionResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateRemoteAccessSessionResult: devicefarm.DeviceFarmCreateRemoteAccessSessionResult = { ... }
```

##### `remoteAccessSession`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionResult.property.remoteAccessSession"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession`](#aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession)

---

### DeviceFarmCreateTestGridProjectRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateTestGridProjectRequest: devicefarm.DeviceFarmCreateTestGridProjectRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectRequest.property.description"></a>

- *Type:* `string`

---

### DeviceFarmCreateTestGridProjectResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateTestGridProjectResult: devicefarm.DeviceFarmCreateTestGridProjectResult = { ... }
```

##### `testGridProject`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectResult.property.testGridProject"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject)

---

### DeviceFarmCreateTestGridUrlRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridUrlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateTestGridUrlRequest: devicefarm.DeviceFarmCreateTestGridUrlRequest = { ... }
```

##### `expiresInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridUrlRequest.property.expiresInSeconds"></a>

- *Type:* `number`

---

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridUrlRequest.property.projectArn"></a>

- *Type:* `string`

---

### DeviceFarmCreateTestGridUrlResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridUrlResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateTestGridUrlResult: devicefarm.DeviceFarmCreateTestGridUrlResult = { ... }
```

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridUrlResult.property.expires"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridUrlResult.property.url"></a>

- *Type:* `string`

---

### DeviceFarmCreateUploadRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateUploadRequest: devicefarm.DeviceFarmCreateUploadRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest.property.name"></a>

- *Type:* `string`

---

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest.property.projectArn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest.property.type"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest.property.contentType"></a>

- *Type:* `string`

---

### DeviceFarmCreateUploadResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateUploadResult: devicefarm.DeviceFarmCreateUploadResult = { ... }
```

##### `upload`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadResult.property.upload"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpload`](#aws-cdk-sdk.devicefarm.DeviceFarmUpload)

---

### DeviceFarmCreateVpceConfigurationRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateVpceConfigurationRequest: devicefarm.DeviceFarmCreateVpceConfigurationRequest = { ... }
```

##### `serviceDnsName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest.property.serviceDnsName"></a>

- *Type:* `string`

---

##### `vpceConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest.property.vpceConfigurationName"></a>

- *Type:* `string`

---

##### `vpceServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest.property.vpceServiceName"></a>

- *Type:* `string`

---

##### `vpceConfigurationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest.property.vpceConfigurationDescription"></a>

- *Type:* `string`

---

### DeviceFarmCreateVpceConfigurationResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCreateVpceConfigurationResult: devicefarm.DeviceFarmCreateVpceConfigurationResult = { ... }
```

##### `vpceConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationResult.property.vpceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration)

---

### DeviceFarmCustomerArtifactPaths <a name="aws-cdk-sdk.devicefarm.DeviceFarmCustomerArtifactPaths"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmCustomerArtifactPaths: devicefarm.DeviceFarmCustomerArtifactPaths = { ... }
```

##### `androidPaths`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCustomerArtifactPaths.property.androidPaths"></a>

- *Type:* `string`[]

---

##### `deviceHostPaths`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCustomerArtifactPaths.property.deviceHostPaths"></a>

- *Type:* `string`[]

---

##### `iosPaths`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmCustomerArtifactPaths.property.iosPaths"></a>

- *Type:* `string`[]

---

### DeviceFarmDeleteDevicePoolRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteDevicePoolRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteDevicePoolRequest: devicefarm.DeviceFarmDeleteDevicePoolRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteDevicePoolRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmDeleteDevicePoolResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteDevicePoolResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteDevicePoolResult: devicefarm.DeviceFarmDeleteDevicePoolResult = { ... }
```

### DeviceFarmDeleteInstanceProfileRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteInstanceProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteInstanceProfileRequest: devicefarm.DeviceFarmDeleteInstanceProfileRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteInstanceProfileRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmDeleteInstanceProfileResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteInstanceProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteInstanceProfileResult: devicefarm.DeviceFarmDeleteInstanceProfileResult = { ... }
```

### DeviceFarmDeleteNetworkProfileRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteNetworkProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteNetworkProfileRequest: devicefarm.DeviceFarmDeleteNetworkProfileRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteNetworkProfileRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmDeleteNetworkProfileResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteNetworkProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteNetworkProfileResult: devicefarm.DeviceFarmDeleteNetworkProfileResult = { ... }
```

### DeviceFarmDeleteProjectRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteProjectRequest: devicefarm.DeviceFarmDeleteProjectRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteProjectRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmDeleteProjectResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteProjectResult: devicefarm.DeviceFarmDeleteProjectResult = { ... }
```

### DeviceFarmDeleteRemoteAccessSessionRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteRemoteAccessSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteRemoteAccessSessionRequest: devicefarm.DeviceFarmDeleteRemoteAccessSessionRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteRemoteAccessSessionRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmDeleteRemoteAccessSessionResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteRemoteAccessSessionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteRemoteAccessSessionResult: devicefarm.DeviceFarmDeleteRemoteAccessSessionResult = { ... }
```

### DeviceFarmDeleteRunRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteRunRequest: devicefarm.DeviceFarmDeleteRunRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteRunRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmDeleteRunResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteRunResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteRunResult: devicefarm.DeviceFarmDeleteRunResult = { ... }
```

### DeviceFarmDeleteTestGridProjectRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteTestGridProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteTestGridProjectRequest: devicefarm.DeviceFarmDeleteTestGridProjectRequest = { ... }
```

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteTestGridProjectRequest.property.projectArn"></a>

- *Type:* `string`

---

### DeviceFarmDeleteTestGridProjectResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteTestGridProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteTestGridProjectResult: devicefarm.DeviceFarmDeleteTestGridProjectResult = { ... }
```

### DeviceFarmDeleteUploadRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteUploadRequest: devicefarm.DeviceFarmDeleteUploadRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteUploadRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmDeleteUploadResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteUploadResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteUploadResult: devicefarm.DeviceFarmDeleteUploadResult = { ... }
```

### DeviceFarmDeleteVpceConfigurationRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteVpceConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteVpceConfigurationRequest: devicefarm.DeviceFarmDeleteVpceConfigurationRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteVpceConfigurationRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmDeleteVpceConfigurationResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeleteVpceConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeleteVpceConfigurationResult: devicefarm.DeviceFarmDeleteVpceConfigurationResult = { ... }
```

### DeviceFarmDevice <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDevice: devicefarm.DeviceFarmDevice = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.arn"></a>

- *Type:* `string`

---

##### `availability`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.availability"></a>

- *Type:* `string`

---

##### `carrier`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.carrier"></a>

- *Type:* `string`

---

##### `cpu`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.cpu"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCpu`](#aws-cdk-sdk.devicefarm.DeviceFarmCpu)

---

##### `fleetName`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.fleetName"></a>

- *Type:* `string`

---

##### `fleetType`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.fleetType"></a>

- *Type:* `string`

---

##### `formFactor`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.formFactor"></a>

- *Type:* `string`

---

##### `heapSize`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.heapSize"></a>

- *Type:* `number`

---

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.image"></a>

- *Type:* `string`

---

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.instances"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)[]

---

##### `manufacturer`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.manufacturer"></a>

- *Type:* `string`

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.memory"></a>

- *Type:* `number`

---

##### `model`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.model"></a>

- *Type:* `string`

---

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.name"></a>

- *Type:* `string`

---

##### `os`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.os"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.platform"></a>

- *Type:* `string`

---

##### `radio`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.radio"></a>

- *Type:* `string`

---

##### `remoteAccessEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.remoteAccessEnabled"></a>

- *Type:* `boolean`

---

##### `remoteDebugEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `resolution`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevice.property.resolution"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResolution`](#aws-cdk-sdk.devicefarm.DeviceFarmResolution)

---

### DeviceFarmDeviceFilter <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeviceFilter: devicefarm.DeviceFarmDeviceFilter = { ... }
```

##### `attribute`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter.property.attribute"></a>

- *Type:* `string`

---

##### `operator`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter.property.operator"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter.property.values"></a>

- *Type:* `string`[]

---

### DeviceFarmDeviceInstance <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeviceInstance: devicefarm.DeviceFarmDeviceInstance = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance.property.arn"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance.property.deviceArn"></a>

- *Type:* `string`

---

##### `instanceProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile)

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance.property.labels"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance.property.status"></a>

- *Type:* `string`

---

##### `udid`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance.property.udid"></a>

- *Type:* `string`

---

### DeviceFarmDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeviceMinutes: devicefarm.DeviceFarmDeviceMinutes = { ... }
```

##### `metered`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---

### DeviceFarmDevicePool <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDevicePool: devicefarm.DeviceFarmDevicePool = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePool.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePool.property.description"></a>

- *Type:* `string`

---

##### `maxDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePool.property.maxDevices"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePool.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePool.property.rules"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRule`](#aws-cdk-sdk.devicefarm.DeviceFarmRule)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePool.property.type"></a>

- *Type:* `string`

---

### DeviceFarmDevicePoolCompatibilityResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDevicePoolCompatibilityResult: devicefarm.DeviceFarmDevicePoolCompatibilityResult = { ... }
```

##### `compatible`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult.property.compatible"></a>

- *Type:* `boolean`

---

##### `device`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmDevice)

---

##### `incompatibilityMessages`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult.property.incompatibilityMessages"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmIncompatibilityMessage`](#aws-cdk-sdk.devicefarm.DeviceFarmIncompatibilityMessage)[]

---

### DeviceFarmDeviceSelectionConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeviceSelectionConfiguration: devicefarm.DeviceFarmDeviceSelectionConfiguration = { ... }
```

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionConfiguration.property.filters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter)[]

---

##### `maxDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionConfiguration.property.maxDevices"></a>

- *Type:* `number`

---

### DeviceFarmDeviceSelectionResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmDeviceSelectionResult: devicefarm.DeviceFarmDeviceSelectionResult = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionResult.property.filters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter)[]

---

##### `matchedDevicesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionResult.property.matchedDevicesCount"></a>

- *Type:* `number`

---

##### `maxDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionResult.property.maxDevices"></a>

- *Type:* `number`

---

### DeviceFarmExecutionConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmExecutionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmExecutionConfiguration: devicefarm.DeviceFarmExecutionConfiguration = { ... }
```

##### `accountsCleanup`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmExecutionConfiguration.property.accountsCleanup"></a>

- *Type:* `boolean`

---

##### `appPackagesCleanup`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmExecutionConfiguration.property.appPackagesCleanup"></a>

- *Type:* `boolean`

---

##### `jobTimeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmExecutionConfiguration.property.jobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `skipAppResign`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmExecutionConfiguration.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `videoCapture`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmExecutionConfiguration.property.videoCapture"></a>

- *Type:* `boolean`

---

### DeviceFarmGetAccountSettingsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetAccountSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetAccountSettingsRequest: devicefarm.DeviceFarmGetAccountSettingsRequest = { ... }
```

### DeviceFarmGetAccountSettingsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetAccountSettingsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetAccountSettingsResult: devicefarm.DeviceFarmGetAccountSettingsResult = { ... }
```

##### `accountSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetAccountSettingsResult.property.accountSettings"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings`](#aws-cdk-sdk.devicefarm.DeviceFarmAccountSettings)

---

### DeviceFarmGetDeviceInstanceRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetDeviceInstanceRequest: devicefarm.DeviceFarmGetDeviceInstanceRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetDeviceInstanceResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetDeviceInstanceResult: devicefarm.DeviceFarmGetDeviceInstanceResult = { ... }
```

##### `deviceInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceResult.property.deviceInstance"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)

---

### DeviceFarmGetDevicePoolCompatibilityRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetDevicePoolCompatibilityRequest: devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest = { ... }
```

##### `devicePoolArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest.property.devicePoolArn"></a>

- *Type:* `string`

---

##### `appArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest.property.appArn"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration)

---

##### `test`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest.property.test"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunTest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunTest)

---

##### `testType`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest.property.testType"></a>

- *Type:* `string`

---

### DeviceFarmGetDevicePoolCompatibilityResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetDevicePoolCompatibilityResult: devicefarm.DeviceFarmGetDevicePoolCompatibilityResult = { ... }
```

##### `compatibleDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityResult.property.compatibleDevices"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult`](#aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult)[]

---

##### `incompatibleDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityResult.property.incompatibleDevices"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult`](#aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult)[]

---

### DeviceFarmGetDevicePoolRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetDevicePoolRequest: devicefarm.DeviceFarmGetDevicePoolRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetDevicePoolResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetDevicePoolResult: devicefarm.DeviceFarmGetDevicePoolResult = { ... }
```

##### `devicePool`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolResult.property.devicePool"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevicePool`](#aws-cdk-sdk.devicefarm.DeviceFarmDevicePool)

---

### DeviceFarmGetDeviceRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetDeviceRequest: devicefarm.DeviceFarmGetDeviceRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetDeviceResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetDeviceResult: devicefarm.DeviceFarmGetDeviceResult = { ... }
```

##### `device`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceResult.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmDevice)

---

### DeviceFarmGetInstanceProfileRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetInstanceProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetInstanceProfileRequest: devicefarm.DeviceFarmGetInstanceProfileRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetInstanceProfileRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetInstanceProfileResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetInstanceProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetInstanceProfileResult: devicefarm.DeviceFarmGetInstanceProfileResult = { ... }
```

##### `instanceProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetInstanceProfileResult.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile)

---

### DeviceFarmGetJobRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetJobRequest: devicefarm.DeviceFarmGetJobRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetJobResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetJobResult: devicefarm.DeviceFarmGetJobResult = { ... }
```

##### `job`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetJobResult.property.job"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmJob`](#aws-cdk-sdk.devicefarm.DeviceFarmJob)

---

### DeviceFarmGetNetworkProfileRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetNetworkProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetNetworkProfileRequest: devicefarm.DeviceFarmGetNetworkProfileRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetNetworkProfileRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetNetworkProfileResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetNetworkProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetNetworkProfileResult: devicefarm.DeviceFarmGetNetworkProfileResult = { ... }
```

##### `networkProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetNetworkProfileResult.property.networkProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile)

---

### DeviceFarmGetOfferingStatusRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetOfferingStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetOfferingStatusRequest: devicefarm.DeviceFarmGetOfferingStatusRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetOfferingStatusRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmGetOfferingStatusResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetOfferingStatusResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetOfferingStatusResult: devicefarm.DeviceFarmGetOfferingStatusResult = { ... }
```

##### `current`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetOfferingStatusResult.property.current"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus)}

---

##### `nextPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetOfferingStatusResult.property.nextPeriod"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus)}

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetOfferingStatusResult.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmGetProjectRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetProjectRequest: devicefarm.DeviceFarmGetProjectRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetProjectRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetProjectResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetProjectResult: devicefarm.DeviceFarmGetProjectResult = { ... }
```

##### `project`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetProjectResult.property.project"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmProject`](#aws-cdk-sdk.devicefarm.DeviceFarmProject)

---

### DeviceFarmGetRemoteAccessSessionRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetRemoteAccessSessionRequest: devicefarm.DeviceFarmGetRemoteAccessSessionRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetRemoteAccessSessionResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetRemoteAccessSessionResult: devicefarm.DeviceFarmGetRemoteAccessSessionResult = { ... }
```

##### `remoteAccessSession`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionResult.property.remoteAccessSession"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession`](#aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession)

---

### DeviceFarmGetRunRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetRunRequest: devicefarm.DeviceFarmGetRunRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetRunResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetRunResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetRunResult: devicefarm.DeviceFarmGetRunResult = { ... }
```

##### `run`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetRunResult.property.run"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRun`](#aws-cdk-sdk.devicefarm.DeviceFarmRun)

---

### DeviceFarmGetSuiteRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetSuiteRequest: devicefarm.DeviceFarmGetSuiteRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetSuiteResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetSuiteResult: devicefarm.DeviceFarmGetSuiteResult = { ... }
```

##### `suite`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteResult.property.suite"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmSuite`](#aws-cdk-sdk.devicefarm.DeviceFarmSuite)

---

### DeviceFarmGetTestGridProjectRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetTestGridProjectRequest: devicefarm.DeviceFarmGetTestGridProjectRequest = { ... }
```

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridProjectRequest.property.projectArn"></a>

- *Type:* `string`

---

### DeviceFarmGetTestGridProjectResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetTestGridProjectResult: devicefarm.DeviceFarmGetTestGridProjectResult = { ... }
```

##### `testGridProject`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridProjectResult.property.testGridProject"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject)

---

### DeviceFarmGetTestGridSessionRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetTestGridSessionRequest: devicefarm.DeviceFarmGetTestGridSessionRequest = { ... }
```

##### `projectArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionRequest.property.projectArn"></a>

- *Type:* `string`

---

##### `sessionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionRequest.property.sessionArn"></a>

- *Type:* `string`

---

##### `sessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionRequest.property.sessionId"></a>

- *Type:* `string`

---

### DeviceFarmGetTestGridSessionResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetTestGridSessionResult: devicefarm.DeviceFarmGetTestGridSessionResult = { ... }
```

##### `testGridSession`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionResult.property.testGridSession"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession)

---

### DeviceFarmGetTestRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetTestRequest: devicefarm.DeviceFarmGetTestRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetTestResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetTestResult: devicefarm.DeviceFarmGetTestResult = { ... }
```

##### `test`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetTestResult.property.test"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTest`](#aws-cdk-sdk.devicefarm.DeviceFarmTest)

---

### DeviceFarmGetUploadRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetUploadRequest: devicefarm.DeviceFarmGetUploadRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetUploadRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetUploadResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetUploadResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetUploadResult: devicefarm.DeviceFarmGetUploadResult = { ... }
```

##### `upload`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetUploadResult.property.upload"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpload`](#aws-cdk-sdk.devicefarm.DeviceFarmUpload)

---

### DeviceFarmGetVpceConfigurationRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetVpceConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetVpceConfigurationRequest: devicefarm.DeviceFarmGetVpceConfigurationRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetVpceConfigurationRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmGetVpceConfigurationResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetVpceConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmGetVpceConfigurationResult: devicefarm.DeviceFarmGetVpceConfigurationResult = { ... }
```

##### `vpceConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmGetVpceConfigurationResult.property.vpceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration)

---

### DeviceFarmIncompatibilityMessage <a name="aws-cdk-sdk.devicefarm.DeviceFarmIncompatibilityMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmIncompatibilityMessage: devicefarm.DeviceFarmIncompatibilityMessage = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmIncompatibilityMessage.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmIncompatibilityMessage.property.type"></a>

- *Type:* `string`

---

### DeviceFarmInstallToRemoteAccessSessionRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmInstallToRemoteAccessSessionRequest: devicefarm.DeviceFarmInstallToRemoteAccessSessionRequest = { ... }
```

##### `appArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionRequest.property.appArn"></a>

- *Type:* `string`

---

##### `remoteAccessSessionArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionRequest.property.remoteAccessSessionArn"></a>

- *Type:* `string`

---

### DeviceFarmInstallToRemoteAccessSessionResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmInstallToRemoteAccessSessionResult: devicefarm.DeviceFarmInstallToRemoteAccessSessionResult = { ... }
```

##### `appUpload`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionResult.property.appUpload"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpload`](#aws-cdk-sdk.devicefarm.DeviceFarmUpload)

---

### DeviceFarmInstanceProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmInstanceProfile: devicefarm.DeviceFarmInstanceProfile = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile.property.description"></a>

- *Type:* `string`

---

##### `excludeAppPackagesFromCleanup`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile.property.name"></a>

- *Type:* `string`

---

##### `packageCleanup`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile.property.packageCleanup"></a>

- *Type:* `boolean`

---

##### `rebootAfterUse`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile.property.rebootAfterUse"></a>

- *Type:* `boolean`

---

### DeviceFarmJob <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmJob: devicefarm.DeviceFarmJob = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.arn"></a>

- *Type:* `string`

---

##### `counters`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmCounters)

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.created"></a>

- *Type:* `string`

---

##### `device`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmDevice)

---

##### `deviceMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes)

---

##### `instanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.instanceArn"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.name"></a>

- *Type:* `string`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.result"></a>

- *Type:* `string`

---

##### `started`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.stopped"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.type"></a>

- *Type:* `string`

---

##### `videoCapture`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.videoCapture"></a>

- *Type:* `boolean`

---

##### `videoEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmJob.property.videoEndpoint"></a>

- *Type:* `string`

---

### DeviceFarmListArtifactsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListArtifactsRequest: devicefarm.DeviceFarmListArtifactsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsRequest.property.arn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsRequest.property.type"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListArtifactsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListArtifactsResult: devicefarm.DeviceFarmListArtifactsResult = { ... }
```

##### `artifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsResult.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmArtifact`](#aws-cdk-sdk.devicefarm.DeviceFarmArtifact)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsResult.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListDeviceInstancesRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDeviceInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListDeviceInstancesRequest: devicefarm.DeviceFarmListDeviceInstancesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDeviceInstancesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDeviceInstancesRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListDeviceInstancesResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDeviceInstancesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListDeviceInstancesResult: devicefarm.DeviceFarmListDeviceInstancesResult = { ... }
```

##### `deviceInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDeviceInstancesResult.property.deviceInstances"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDeviceInstancesResult.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListDevicePoolsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListDevicePoolsRequest: devicefarm.DeviceFarmListDevicePoolsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsRequest.property.type"></a>

- *Type:* `string`

---

### DeviceFarmListDevicePoolsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListDevicePoolsResult: devicefarm.DeviceFarmListDevicePoolsResult = { ... }
```

##### `devicePools`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsResult.property.devicePools"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevicePool`](#aws-cdk-sdk.devicefarm.DeviceFarmDevicePool)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsResult.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListDevicesRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListDevicesRequest: devicefarm.DeviceFarmListDevicesRequest = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicesRequest.property.arn"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicesRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListDevicesResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListDevicesResult: devicefarm.DeviceFarmListDevicesResult = { ... }
```

##### `devices`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicesResult.property.devices"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmDevice)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListDevicesResult.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListInstanceProfilesRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListInstanceProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListInstanceProfilesRequest: devicefarm.DeviceFarmListInstanceProfilesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListInstanceProfilesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListInstanceProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListInstanceProfilesResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListInstanceProfilesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListInstanceProfilesResult: devicefarm.DeviceFarmListInstanceProfilesResult = { ... }
```

##### `instanceProfiles`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListInstanceProfilesResult.property.instanceProfiles"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListInstanceProfilesResult.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListJobsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListJobsRequest: devicefarm.DeviceFarmListJobsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListJobsRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListJobsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListJobsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListJobsResult: devicefarm.DeviceFarmListJobsResult = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListJobsResult.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmJob`](#aws-cdk-sdk.devicefarm.DeviceFarmJob)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListJobsResult.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListNetworkProfilesRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListNetworkProfilesRequest: devicefarm.DeviceFarmListNetworkProfilesRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesRequest.property.type"></a>

- *Type:* `string`

---

### DeviceFarmListNetworkProfilesResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListNetworkProfilesResult: devicefarm.DeviceFarmListNetworkProfilesResult = { ... }
```

##### `networkProfiles`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesResult.property.networkProfiles"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesResult.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListOfferingPromotionsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingPromotionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListOfferingPromotionsRequest: devicefarm.DeviceFarmListOfferingPromotionsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingPromotionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListOfferingPromotionsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingPromotionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListOfferingPromotionsResult: devicefarm.DeviceFarmListOfferingPromotionsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingPromotionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `offeringPromotions`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingPromotionsResult.property.offeringPromotions"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingPromotion`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingPromotion)[]

---

### DeviceFarmListOfferingsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListOfferingsRequest: devicefarm.DeviceFarmListOfferingsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListOfferingsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListOfferingsResult: devicefarm.DeviceFarmListOfferingsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `offerings`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingsResult.property.offerings"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmOffering`](#aws-cdk-sdk.devicefarm.DeviceFarmOffering)[]

---

### DeviceFarmListOfferingTransactionsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingTransactionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListOfferingTransactionsRequest: devicefarm.DeviceFarmListOfferingTransactionsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingTransactionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListOfferingTransactionsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingTransactionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListOfferingTransactionsResult: devicefarm.DeviceFarmListOfferingTransactionsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingTransactionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `offeringTransactions`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListOfferingTransactionsResult.property.offeringTransactions"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction)[]

---

### DeviceFarmListProjectsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListProjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListProjectsRequest: devicefarm.DeviceFarmListProjectsRequest = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListProjectsRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListProjectsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListProjectsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListProjectsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListProjectsResult: devicefarm.DeviceFarmListProjectsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListProjectsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListProjectsResult.property.projects"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmProject`](#aws-cdk-sdk.devicefarm.DeviceFarmProject)[]

---

### DeviceFarmListRemoteAccessSessionsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRemoteAccessSessionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListRemoteAccessSessionsRequest: devicefarm.DeviceFarmListRemoteAccessSessionsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRemoteAccessSessionsRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRemoteAccessSessionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListRemoteAccessSessionsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRemoteAccessSessionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListRemoteAccessSessionsResult: devicefarm.DeviceFarmListRemoteAccessSessionsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRemoteAccessSessionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `remoteAccessSessions`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRemoteAccessSessionsResult.property.remoteAccessSessions"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession`](#aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession)[]

---

### DeviceFarmListRunsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRunsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListRunsRequest: devicefarm.DeviceFarmListRunsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRunsRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRunsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListRunsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRunsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListRunsResult: devicefarm.DeviceFarmListRunsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRunsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `runs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListRunsResult.property.runs"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRun`](#aws-cdk-sdk.devicefarm.DeviceFarmRun)[]

---

### DeviceFarmListSamplesRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSamplesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListSamplesRequest: devicefarm.DeviceFarmListSamplesRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSamplesRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSamplesRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListSamplesResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSamplesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListSamplesResult: devicefarm.DeviceFarmListSamplesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSamplesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `samples`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSamplesResult.property.samples"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmSample`](#aws-cdk-sdk.devicefarm.DeviceFarmSample)[]

---

### DeviceFarmListSuitesRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSuitesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListSuitesRequest: devicefarm.DeviceFarmListSuitesRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSuitesRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSuitesRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListSuitesResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSuitesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListSuitesResult: devicefarm.DeviceFarmListSuitesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSuitesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `suites`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListSuitesResult.property.suites"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmSuite`](#aws-cdk-sdk.devicefarm.DeviceFarmSuite)[]

---

### DeviceFarmListTagsForResourceRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTagsForResourceRequest: devicefarm.DeviceFarmListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### DeviceFarmListTagsForResourceResponse <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTagsForResourceResponse: devicefarm.DeviceFarmListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTag`](#aws-cdk-sdk.devicefarm.DeviceFarmTag)[]

---

### DeviceFarmListTestGridProjectsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridProjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTestGridProjectsRequest: devicefarm.DeviceFarmListTestGridProjectsRequest = { ... }
```

##### `maxResult`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridProjectsRequest.property.maxResult"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridProjectsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListTestGridProjectsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridProjectsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTestGridProjectsResult: devicefarm.DeviceFarmListTestGridProjectsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridProjectsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `testGridProjects`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridProjectsResult.property.testGridProjects"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject)[]

---

### DeviceFarmListTestGridSessionActionsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTestGridSessionActionsRequest: devicefarm.DeviceFarmListTestGridSessionActionsRequest = { ... }
```

##### `sessionArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsRequest.property.sessionArn"></a>

- *Type:* `string`

---

##### `maxResult`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsRequest.property.maxResult"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListTestGridSessionActionsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTestGridSessionActionsResult: devicefarm.DeviceFarmListTestGridSessionActionsResult = { ... }
```

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsResult.property.actions"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionAction`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionAction)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsResult.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListTestGridSessionArtifactsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTestGridSessionArtifactsRequest: devicefarm.DeviceFarmListTestGridSessionArtifactsRequest = { ... }
```

##### `sessionArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsRequest.property.sessionArn"></a>

- *Type:* `string`

---

##### `maxResult`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsRequest.property.maxResult"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsRequest.property.type"></a>

- *Type:* `string`

---

### DeviceFarmListTestGridSessionArtifactsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTestGridSessionArtifactsResult: devicefarm.DeviceFarmListTestGridSessionArtifactsResult = { ... }
```

##### `artifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsResult.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionArtifact`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionArtifact)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsResult.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListTestGridSessionsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTestGridSessionsRequest: devicefarm.DeviceFarmListTestGridSessionsRequest = { ... }
```

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest.property.projectArn"></a>

- *Type:* `string`

---

##### `creationTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest.property.creationTimeAfter"></a>

- *Type:* `string`

---

##### `creationTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest.property.creationTimeBefore"></a>

- *Type:* `string`

---

##### `endTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest.property.endTimeAfter"></a>

- *Type:* `string`

---

##### `endTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest.property.endTimeBefore"></a>

- *Type:* `string`

---

##### `maxResult`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest.property.maxResult"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest.property.status"></a>

- *Type:* `string`

---

### DeviceFarmListTestGridSessionsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTestGridSessionsResult: devicefarm.DeviceFarmListTestGridSessionsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `testGridSessions`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsResult.property.testGridSessions"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession)[]

---

### DeviceFarmListTestsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTestsRequest: devicefarm.DeviceFarmListTestsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestsRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListTestsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListTestsResult: devicefarm.DeviceFarmListTestsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `tests`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListTestsResult.property.tests"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTest`](#aws-cdk-sdk.devicefarm.DeviceFarmTest)[]

---

### DeviceFarmListUniqueProblemsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUniqueProblemsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListUniqueProblemsRequest: devicefarm.DeviceFarmListUniqueProblemsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUniqueProblemsRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUniqueProblemsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListUniqueProblemsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUniqueProblemsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListUniqueProblemsResult: devicefarm.DeviceFarmListUniqueProblemsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUniqueProblemsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `uniqueProblems`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUniqueProblemsResult.property.uniqueProblems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.devicefarm.DeviceFarmUniqueProblem`](#aws-cdk-sdk.devicefarm.DeviceFarmUniqueProblem)[]}

---

### DeviceFarmListUploadsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUploadsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListUploadsRequest: devicefarm.DeviceFarmListUploadsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUploadsRequest.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUploadsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUploadsRequest.property.type"></a>

- *Type:* `string`

---

### DeviceFarmListUploadsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUploadsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListUploadsResult: devicefarm.DeviceFarmListUploadsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUploadsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `uploads`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListUploadsResult.property.uploads"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpload`](#aws-cdk-sdk.devicefarm.DeviceFarmUpload)[]

---

### DeviceFarmListVpceConfigurationsRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmListVpceConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListVpceConfigurationsRequest: devicefarm.DeviceFarmListVpceConfigurationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListVpceConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListVpceConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DeviceFarmListVpceConfigurationsResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmListVpceConfigurationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmListVpceConfigurationsResult: devicefarm.DeviceFarmListVpceConfigurationsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListVpceConfigurationsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `vpceConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmListVpceConfigurationsResult.property.vpceConfigurations"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration)[]

---

### DeviceFarmLocation <a name="aws-cdk-sdk.devicefarm.DeviceFarmLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmLocation: devicefarm.DeviceFarmLocation = { ... }
```

##### `latitude`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmLocation.property.latitude"></a>

- *Type:* `number`

---

##### `longitude`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmLocation.property.longitude"></a>

- *Type:* `number`

---

### DeviceFarmMonetaryAmount <a name="aws-cdk-sdk.devicefarm.DeviceFarmMonetaryAmount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmMonetaryAmount: devicefarm.DeviceFarmMonetaryAmount = { ... }
```

##### `amount`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmMonetaryAmount.property.amount"></a>

- *Type:* `number`

---

##### `currencyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmMonetaryAmount.property.currencyCode"></a>

- *Type:* `string`

---

### DeviceFarmNetworkProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmNetworkProfile: devicefarm.DeviceFarmNetworkProfile = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.description"></a>

- *Type:* `string`

---

##### `downlinkBandwidthBits`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.downlinkBandwidthBits"></a>

- *Type:* `number`

---

##### `downlinkDelayMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.downlinkDelayMs"></a>

- *Type:* `number`

---

##### `downlinkJitterMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.downlinkJitterMs"></a>

- *Type:* `number`

---

##### `downlinkLossPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.downlinkLossPercent"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.type"></a>

- *Type:* `string`

---

##### `uplinkBandwidthBits`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.uplinkBandwidthBits"></a>

- *Type:* `number`

---

##### `uplinkDelayMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.uplinkDelayMs"></a>

- *Type:* `number`

---

##### `uplinkJitterMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.uplinkJitterMs"></a>

- *Type:* `number`

---

##### `uplinkLossPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile.property.uplinkLossPercent"></a>

- *Type:* `number`

---

### DeviceFarmOffering <a name="aws-cdk-sdk.devicefarm.DeviceFarmOffering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmOffering: devicefarm.DeviceFarmOffering = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOffering.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOffering.property.id"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOffering.property.platform"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOffering.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRecurringCharge`](#aws-cdk-sdk.devicefarm.DeviceFarmRecurringCharge)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOffering.property.type"></a>

- *Type:* `string`

---

### DeviceFarmOfferingPromotion <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingPromotion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmOfferingPromotion: devicefarm.DeviceFarmOfferingPromotion = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingPromotion.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingPromotion.property.id"></a>

- *Type:* `string`

---

### DeviceFarmOfferingStatus <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmOfferingStatus: devicefarm.DeviceFarmOfferingStatus = { ... }
```

##### `effectiveOn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus.property.effectiveOn"></a>

- *Type:* `string`

---

##### `offering`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus.property.offering"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmOffering`](#aws-cdk-sdk.devicefarm.DeviceFarmOffering)

---

##### `quantity`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus.property.quantity"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus.property.type"></a>

- *Type:* `string`

---

### DeviceFarmOfferingTransaction <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmOfferingTransaction: devicefarm.DeviceFarmOfferingTransaction = { ... }
```

##### `cost`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction.property.cost"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmMonetaryAmount`](#aws-cdk-sdk.devicefarm.DeviceFarmMonetaryAmount)

---

##### `createdOn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction.property.createdOn"></a>

- *Type:* `string`

---

##### `offeringPromotionId`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction.property.offeringPromotionId"></a>

- *Type:* `string`

---

##### `offeringStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction.property.offeringStatus"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus)

---

##### `transactionId`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction.property.transactionId"></a>

- *Type:* `string`

---

### DeviceFarmProblem <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmProblem: devicefarm.DeviceFarmProblem = { ... }
```

##### `device`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblem.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmDevice)

---

##### `job`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblem.property.job"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail`](#aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail)

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblem.property.message"></a>

- *Type:* `string`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblem.property.result"></a>

- *Type:* `string`

---

##### `run`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblem.property.run"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail`](#aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail)

---

##### `suite`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblem.property.suite"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail`](#aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail)

---

##### `test`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblem.property.test"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail`](#aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail)

---

### DeviceFarmProblemDetail <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmProblemDetail: devicefarm.DeviceFarmProblemDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProblemDetail.property.name"></a>

- *Type:* `string`

---

### DeviceFarmProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmProject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmProject: devicefarm.DeviceFarmProject = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProject.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProject.property.created"></a>

- *Type:* `string`

---

##### `defaultJobTimeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProject.property.defaultJobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmProject.property.name"></a>

- *Type:* `string`

---

### DeviceFarmPurchaseOfferingRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmPurchaseOfferingRequest: devicefarm.DeviceFarmPurchaseOfferingRequest = { ... }
```

##### `offeringId`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringPromotionId`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest.property.offeringPromotionId"></a>

- *Type:* `string`

---

##### `quantity`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest.property.quantity"></a>

- *Type:* `number`

---

### DeviceFarmPurchaseOfferingResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmPurchaseOfferingResult: devicefarm.DeviceFarmPurchaseOfferingResult = { ... }
```

##### `offeringTransaction`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingResult.property.offeringTransaction"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction)

---

### DeviceFarmRadios <a name="aws-cdk-sdk.devicefarm.DeviceFarmRadios"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmRadios: devicefarm.DeviceFarmRadios = { ... }
```

##### `bluetooth`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRadios.property.bluetooth"></a>

- *Type:* `boolean`

---

##### `gps`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRadios.property.gps"></a>

- *Type:* `boolean`

---

##### `nfc`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRadios.property.nfc"></a>

- *Type:* `boolean`

---

##### `wifi`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRadios.property.wifi"></a>

- *Type:* `boolean`

---

### DeviceFarmRecurringCharge <a name="aws-cdk-sdk.devicefarm.DeviceFarmRecurringCharge"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmRecurringCharge: devicefarm.DeviceFarmRecurringCharge = { ... }
```

##### `cost`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRecurringCharge.property.cost"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmMonetaryAmount`](#aws-cdk-sdk.devicefarm.DeviceFarmMonetaryAmount)

---

##### `frequency`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRecurringCharge.property.frequency"></a>

- *Type:* `string`

---

### DeviceFarmRemoteAccessSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmRemoteAccessSession: devicefarm.DeviceFarmRemoteAccessSession = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.arn"></a>

- *Type:* `string`

---

##### `billingMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.billingMethod"></a>

- *Type:* `string`

---

##### `clientId`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.clientId"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.created"></a>

- *Type:* `string`

---

##### `device`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmDevice)

---

##### `deviceMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes)

---

##### `deviceUdid`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.deviceUdid"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.endpoint"></a>

- *Type:* `string`

---

##### `hostAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.hostAddress"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.instanceArn"></a>

- *Type:* `string`

---

##### `interactionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.interactionMode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.name"></a>

- *Type:* `string`

---

##### `remoteDebugEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `remoteRecordAppArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.remoteRecordAppArn"></a>

- *Type:* `string`

---

##### `remoteRecordEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.remoteRecordEnabled"></a>

- *Type:* `boolean`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.result"></a>

- *Type:* `string`

---

##### `skipAppResign`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `started`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession.property.stopped"></a>

- *Type:* `string`

---

### DeviceFarmRenewOfferingRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmRenewOfferingRequest: devicefarm.DeviceFarmRenewOfferingRequest = { ... }
```

##### `offeringId`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest.property.offeringId"></a>

- *Type:* `string`

---

##### `quantity`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest.property.quantity"></a>

- *Type:* `number`

---

### DeviceFarmRenewOfferingResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmRenewOfferingResult: devicefarm.DeviceFarmRenewOfferingResult = { ... }
```

##### `offeringTransaction`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingResult.property.offeringTransaction"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction)

---

### DeviceFarmResolution <a name="aws-cdk-sdk.devicefarm.DeviceFarmResolution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmResolution: devicefarm.DeviceFarmResolution = { ... }
```

##### `height`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResolution.property.height"></a>

- *Type:* `number`

---

##### `width`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResolution.property.width"></a>

- *Type:* `number`

---

### DeviceFarmRule <a name="aws-cdk-sdk.devicefarm.DeviceFarmRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmRule: devicefarm.DeviceFarmRule = { ... }
```

##### `attribute`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRule.property.attribute"></a>

- *Type:* `string`

---

##### `operator`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRule.property.operator"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRule.property.value"></a>

- *Type:* `string`

---

### DeviceFarmRun <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmRun: devicefarm.DeviceFarmRun = { ... }
```

##### `appUpload`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.appUpload"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.arn"></a>

- *Type:* `string`

---

##### `billingMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.billingMethod"></a>

- *Type:* `string`

---

##### `completedJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.completedJobs"></a>

- *Type:* `number`

---

##### `counters`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmCounters)

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.created"></a>

- *Type:* `string`

---

##### `customerArtifactPaths`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.customerArtifactPaths"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCustomerArtifactPaths`](#aws-cdk-sdk.devicefarm.DeviceFarmCustomerArtifactPaths)

---

##### `deviceMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes)

---

##### `devicePoolArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.devicePoolArn"></a>

- *Type:* `string`

---

##### `deviceSelectionResult`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.deviceSelectionResult"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionResult`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionResult)

---

##### `eventCount`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.eventCount"></a>

- *Type:* `number`

---

##### `jobTimeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.jobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.locale"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.location"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmLocation`](#aws-cdk-sdk.devicefarm.DeviceFarmLocation)

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.name"></a>

- *Type:* `string`

---

##### `networkProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.networkProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile)

---

##### `parsingResultUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.parsingResultUrl"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.platform"></a>

- *Type:* `string`

---

##### `radios`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.radios"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRadios`](#aws-cdk-sdk.devicefarm.DeviceFarmRadios)

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.result"></a>

- *Type:* `string`

---

##### `resultCode`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.resultCode"></a>

- *Type:* `string`

---

##### `seed`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.seed"></a>

- *Type:* `number`

---

##### `skipAppResign`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `started`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.stopped"></a>

- *Type:* `string`

---

##### `testSpecArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.testSpecArn"></a>

- *Type:* `string`

---

##### `totalJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.totalJobs"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.type"></a>

- *Type:* `string`

---

##### `webUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmRun.property.webUrl"></a>

- *Type:* `string`

---

### DeviceFarmSample <a name="aws-cdk-sdk.devicefarm.DeviceFarmSample"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmSample: devicefarm.DeviceFarmSample = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSample.property.arn"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSample.property.type"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSample.property.url"></a>

- *Type:* `string`

---

### DeviceFarmScheduleRunConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmScheduleRunConfiguration: devicefarm.DeviceFarmScheduleRunConfiguration = { ... }
```

##### `auxiliaryApps`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration.property.auxiliaryApps"></a>

- *Type:* `string`[]

---

##### `billingMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration.property.billingMethod"></a>

- *Type:* `string`

---

##### `customerArtifactPaths`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration.property.customerArtifactPaths"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCustomerArtifactPaths`](#aws-cdk-sdk.devicefarm.DeviceFarmCustomerArtifactPaths)

---

##### `extraDataPackageArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration.property.extraDataPackageArn"></a>

- *Type:* `string`

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration.property.locale"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration.property.location"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmLocation`](#aws-cdk-sdk.devicefarm.DeviceFarmLocation)

---

##### `networkProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration.property.networkProfileArn"></a>

- *Type:* `string`

---

##### `radios`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration.property.radios"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRadios`](#aws-cdk-sdk.devicefarm.DeviceFarmRadios)

---

##### `vpceConfigurationArns`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration.property.vpceConfigurationArns"></a>

- *Type:* `string`[]

---

### DeviceFarmScheduleRunRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmScheduleRunRequest: devicefarm.DeviceFarmScheduleRunRequest = { ... }
```

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest.property.projectArn"></a>

- *Type:* `string`

---

##### `test`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest.property.test"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunTest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunTest)

---

##### `appArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest.property.appArn"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunConfiguration)

---

##### `devicePoolArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest.property.devicePoolArn"></a>

- *Type:* `string`

---

##### `deviceSelectionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest.property.deviceSelectionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceSelectionConfiguration)

---

##### `executionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest.property.executionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmExecutionConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmExecutionConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest.property.name"></a>

- *Type:* `string`

---

### DeviceFarmScheduleRunResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmScheduleRunResult: devicefarm.DeviceFarmScheduleRunResult = { ... }
```

##### `run`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunResult.property.run"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRun`](#aws-cdk-sdk.devicefarm.DeviceFarmRun)

---

### DeviceFarmScheduleRunTest <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunTest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmScheduleRunTest: devicefarm.DeviceFarmScheduleRunTest = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunTest.property.type"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunTest.property.filter"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunTest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `testPackageArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunTest.property.testPackageArn"></a>

- *Type:* `string`

---

##### `testSpecArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunTest.property.testSpecArn"></a>

- *Type:* `string`

---

### DeviceFarmStopJobRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmStopJobRequest: devicefarm.DeviceFarmStopJobRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmStopJobResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmStopJobResult: devicefarm.DeviceFarmStopJobResult = { ... }
```

##### `job`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopJobResult.property.job"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmJob`](#aws-cdk-sdk.devicefarm.DeviceFarmJob)

---

### DeviceFarmStopRemoteAccessSessionRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmStopRemoteAccessSessionRequest: devicefarm.DeviceFarmStopRemoteAccessSessionRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmStopRemoteAccessSessionResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmStopRemoteAccessSessionResult: devicefarm.DeviceFarmStopRemoteAccessSessionResult = { ... }
```

##### `remoteAccessSession`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionResult.property.remoteAccessSession"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession`](#aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession)

---

### DeviceFarmStopRunRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmStopRunRequest: devicefarm.DeviceFarmStopRunRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest.property.arn"></a>

- *Type:* `string`

---

### DeviceFarmStopRunResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopRunResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmStopRunResult: devicefarm.DeviceFarmStopRunResult = { ... }
```

##### `run`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmStopRunResult.property.run"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRun`](#aws-cdk-sdk.devicefarm.DeviceFarmRun)

---

### DeviceFarmSuite <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmSuite: devicefarm.DeviceFarmSuite = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.arn"></a>

- *Type:* `string`

---

##### `counters`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmCounters)

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.created"></a>

- *Type:* `string`

---

##### `deviceMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes)

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.name"></a>

- *Type:* `string`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.result"></a>

- *Type:* `string`

---

##### `started`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.stopped"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmSuite.property.type"></a>

- *Type:* `string`

---

### DeviceFarmTag <a name="aws-cdk-sdk.devicefarm.DeviceFarmTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmTag: devicefarm.DeviceFarmTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTag.property.value"></a>

- *Type:* `string`

---

### DeviceFarmTagResourceRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmTagResourceRequest: devicefarm.DeviceFarmTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTag`](#aws-cdk-sdk.devicefarm.DeviceFarmTag)[]

---

### DeviceFarmTagResourceResponse <a name="aws-cdk-sdk.devicefarm.DeviceFarmTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmTagResourceResponse: devicefarm.DeviceFarmTagResourceResponse = { ... }
```

### DeviceFarmTest <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmTest: devicefarm.DeviceFarmTest = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.arn"></a>

- *Type:* `string`

---

##### `counters`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmCounters)

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.created"></a>

- *Type:* `string`

---

##### `deviceMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceMinutes)

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.name"></a>

- *Type:* `string`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.result"></a>

- *Type:* `string`

---

##### `started`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.stopped"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTest.property.type"></a>

- *Type:* `string`

---

### DeviceFarmTestGridProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmTestGridProject: devicefarm.DeviceFarmTestGridProject = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject.property.name"></a>

- *Type:* `string`

---

### DeviceFarmTestGridSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmTestGridSession: devicefarm.DeviceFarmTestGridSession = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession.property.arn"></a>

- *Type:* `string`

---

##### `billingMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession.property.billingMinutes"></a>

- *Type:* `number`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession.property.created"></a>

- *Type:* `string`

---

##### `ended`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession.property.ended"></a>

- *Type:* `string`

---

##### `seleniumProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession.property.seleniumProperties"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession.property.status"></a>

- *Type:* `string`

---

### DeviceFarmTestGridSessionAction <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmTestGridSessionAction: devicefarm.DeviceFarmTestGridSessionAction = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionAction.property.action"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionAction.property.duration"></a>

- *Type:* `number`

---

##### `requestMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionAction.property.requestMethod"></a>

- *Type:* `string`

---

##### `started`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionAction.property.started"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionAction.property.statusCode"></a>

- *Type:* `string`

---

### DeviceFarmTestGridSessionArtifact <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionArtifact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmTestGridSessionArtifact: devicefarm.DeviceFarmTestGridSessionArtifact = { ... }
```

##### `filename`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionArtifact.property.filename"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionArtifact.property.type"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionArtifact.property.url"></a>

- *Type:* `string`

---

### DeviceFarmTrialMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmTrialMinutes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmTrialMinutes: devicefarm.DeviceFarmTrialMinutes = { ... }
```

##### `remaining`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTrialMinutes.property.remaining"></a>

- *Type:* `number`

---

##### `total`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmTrialMinutes.property.total"></a>

- *Type:* `number`

---

### DeviceFarmUniqueProblem <a name="aws-cdk-sdk.devicefarm.DeviceFarmUniqueProblem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUniqueProblem: devicefarm.DeviceFarmUniqueProblem = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUniqueProblem.property.message"></a>

- *Type:* `string`

---

##### `problems`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUniqueProblem.property.problems"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmProblem`](#aws-cdk-sdk.devicefarm.DeviceFarmProblem)[]

---

### DeviceFarmUntagResourceRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUntagResourceRequest: devicefarm.DeviceFarmUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### DeviceFarmUntagResourceResponse <a name="aws-cdk-sdk.devicefarm.DeviceFarmUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUntagResourceResponse: devicefarm.DeviceFarmUntagResourceResponse = { ... }
```

### DeviceFarmUpdateDeviceInstanceRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateDeviceInstanceRequest: devicefarm.DeviceFarmUpdateDeviceInstanceRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest.property.arn"></a>

- *Type:* `string`

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest.property.labels"></a>

- *Type:* `string`[]

---

##### `profileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest.property.profileArn"></a>

- *Type:* `string`

---

### DeviceFarmUpdateDeviceInstanceResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateDeviceInstanceResult: devicefarm.DeviceFarmUpdateDeviceInstanceResult = { ... }
```

##### `deviceInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceResult.property.deviceInstance"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)

---

### DeviceFarmUpdateDevicePoolRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateDevicePoolRequest: devicefarm.DeviceFarmUpdateDevicePoolRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest.property.arn"></a>

- *Type:* `string`

---

##### `clearMaxDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest.property.clearMaxDevices"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest.property.description"></a>

- *Type:* `string`

---

##### `maxDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest.property.maxDevices"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest.property.rules"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRule`](#aws-cdk-sdk.devicefarm.DeviceFarmRule)[]

---

### DeviceFarmUpdateDevicePoolResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateDevicePoolResult: devicefarm.DeviceFarmUpdateDevicePoolResult = { ... }
```

##### `devicePool`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolResult.property.devicePool"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevicePool`](#aws-cdk-sdk.devicefarm.DeviceFarmDevicePool)

---

### DeviceFarmUpdateInstanceProfileRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateInstanceProfileRequest: devicefarm.DeviceFarmUpdateInstanceProfileRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest.property.description"></a>

- *Type:* `string`

---

##### `excludeAppPackagesFromCleanup`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest.property.excludeAppPackagesFromCleanup"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest.property.name"></a>

- *Type:* `string`

---

##### `packageCleanup`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest.property.packageCleanup"></a>

- *Type:* `boolean`

---

##### `rebootAfterUse`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest.property.rebootAfterUse"></a>

- *Type:* `boolean`

---

### DeviceFarmUpdateInstanceProfileResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateInstanceProfileResult: devicefarm.DeviceFarmUpdateInstanceProfileResult = { ... }
```

##### `instanceProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileResult.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile)

---

### DeviceFarmUpdateNetworkProfileRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateNetworkProfileRequest: devicefarm.DeviceFarmUpdateNetworkProfileRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.description"></a>

- *Type:* `string`

---

##### `downlinkBandwidthBits`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.downlinkBandwidthBits"></a>

- *Type:* `number`

---

##### `downlinkDelayMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.downlinkDelayMs"></a>

- *Type:* `number`

---

##### `downlinkJitterMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.downlinkJitterMs"></a>

- *Type:* `number`

---

##### `downlinkLossPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.downlinkLossPercent"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.type"></a>

- *Type:* `string`

---

##### `uplinkBandwidthBits`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.uplinkBandwidthBits"></a>

- *Type:* `number`

---

##### `uplinkDelayMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.uplinkDelayMs"></a>

- *Type:* `number`

---

##### `uplinkJitterMs`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.uplinkJitterMs"></a>

- *Type:* `number`

---

##### `uplinkLossPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest.property.uplinkLossPercent"></a>

- *Type:* `number`

---

### DeviceFarmUpdateNetworkProfileResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateNetworkProfileResult: devicefarm.DeviceFarmUpdateNetworkProfileResult = { ... }
```

##### `networkProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileResult.property.networkProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile)

---

### DeviceFarmUpdateProjectRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateProjectRequest: devicefarm.DeviceFarmUpdateProjectRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectRequest.property.arn"></a>

- *Type:* `string`

---

##### `defaultJobTimeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectRequest.property.defaultJobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectRequest.property.name"></a>

- *Type:* `string`

---

### DeviceFarmUpdateProjectResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateProjectResult: devicefarm.DeviceFarmUpdateProjectResult = { ... }
```

##### `project`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectResult.property.project"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmProject`](#aws-cdk-sdk.devicefarm.DeviceFarmProject)

---

### DeviceFarmUpdateTestGridProjectRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateTestGridProjectRequest: devicefarm.DeviceFarmUpdateTestGridProjectRequest = { ... }
```

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectRequest.property.projectArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectRequest.property.name"></a>

- *Type:* `string`

---

### DeviceFarmUpdateTestGridProjectResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateTestGridProjectResult: devicefarm.DeviceFarmUpdateTestGridProjectResult = { ... }
```

##### `testGridProject`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectResult.property.testGridProject"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject)

---

### DeviceFarmUpdateUploadRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateUploadRequest: devicefarm.DeviceFarmUpdateUploadRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest.property.arn"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest.property.contentType"></a>

- *Type:* `string`

---

##### `editContent`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest.property.editContent"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest.property.name"></a>

- *Type:* `string`

---

### DeviceFarmUpdateUploadResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateUploadResult: devicefarm.DeviceFarmUpdateUploadResult = { ... }
```

##### `upload`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadResult.property.upload"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpload`](#aws-cdk-sdk.devicefarm.DeviceFarmUpload)

---

### DeviceFarmUpdateVpceConfigurationRequest <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateVpceConfigurationRequest: devicefarm.DeviceFarmUpdateVpceConfigurationRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest.property.arn"></a>

- *Type:* `string`

---

##### `serviceDnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest.property.serviceDnsName"></a>

- *Type:* `string`

---

##### `vpceConfigurationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest.property.vpceConfigurationDescription"></a>

- *Type:* `string`

---

##### `vpceConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest.property.vpceConfigurationName"></a>

- *Type:* `string`

---

##### `vpceServiceName`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest.property.vpceServiceName"></a>

- *Type:* `string`

---

### DeviceFarmUpdateVpceConfigurationResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpdateVpceConfigurationResult: devicefarm.DeviceFarmUpdateVpceConfigurationResult = { ... }
```

##### `vpceConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationResult.property.vpceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration)

---

### DeviceFarmUpload <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmUpload: devicefarm.DeviceFarmUpload = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload.property.arn"></a>

- *Type:* `string`

---

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload.property.category"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload.property.contentType"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload.property.created"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload.property.message"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload.property.type"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmUpload.property.url"></a>

- *Type:* `string`

---

### DeviceFarmVpceConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

const deviceFarmVpceConfiguration: devicefarm.DeviceFarmVpceConfiguration = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `serviceDnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration.property.serviceDnsName"></a>

- *Type:* `string`

---

##### `vpceConfigurationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration.property.vpceConfigurationDescription"></a>

- *Type:* `string`

---

##### `vpceConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration.property.vpceConfigurationName"></a>

- *Type:* `string`

---

##### `vpceServiceName`<sup>Optional</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration.property.vpceServiceName"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### DeviceFarmResponsesCreateDevicePool <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePool"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePool.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateDevicePool(__scope: Construct, __resources: string[], __input: DeviceFarmCreateDevicePoolRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest)

---



#### Properties <a name="Properties"></a>

##### `devicePool`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePool.property.devicePool"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool)

---


### DeviceFarmResponsesCreateDevicePoolDevicePool <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool(__scope: Construct, __resources: string[], __input: DeviceFarmCreateDevicePoolRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateDevicePoolRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool.property.description"></a>

- *Type:* `string`

---

##### `maxDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool.property.maxDevices"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool.property.rules"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRule`](#aws-cdk-sdk.devicefarm.DeviceFarmRule)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateDevicePoolDevicePool.property.type"></a>

- *Type:* `string`

---


### DeviceFarmResponsesCreateInstanceProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateInstanceProfile(__scope: Construct, __resources: string[], __input: DeviceFarmCreateInstanceProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfile.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile)

---


### DeviceFarmResponsesCreateInstanceProfileInstanceProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile(__scope: Construct, __resources: string[], __input: DeviceFarmCreateInstanceProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateInstanceProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile.property.description"></a>

- *Type:* `string`

---

##### `excludeAppPackagesFromCleanup`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile.property.name"></a>

- *Type:* `string`

---

##### `packageCleanup`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile.property.packageCleanup"></a>

- *Type:* `boolean`

---

##### `rebootAfterUse`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateInstanceProfileInstanceProfile.property.rebootAfterUse"></a>

- *Type:* `boolean`

---


### DeviceFarmResponsesCreateNetworkProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateNetworkProfile(__scope: Construct, __resources: string[], __input: DeviceFarmCreateNetworkProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `networkProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfile.property.networkProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile)

---


### DeviceFarmResponsesCreateNetworkProfileNetworkProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile(__scope: Construct, __resources: string[], __input: DeviceFarmCreateNetworkProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateNetworkProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.description"></a>

- *Type:* `string`

---

##### `downlinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.downlinkBandwidthBits"></a>

- *Type:* `number`

---

##### `downlinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.downlinkDelayMs"></a>

- *Type:* `number`

---

##### `downlinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.downlinkJitterMs"></a>

- *Type:* `number`

---

##### `downlinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.downlinkLossPercent"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.type"></a>

- *Type:* `string`

---

##### `uplinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.uplinkBandwidthBits"></a>

- *Type:* `number`

---

##### `uplinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.uplinkDelayMs"></a>

- *Type:* `number`

---

##### `uplinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.uplinkJitterMs"></a>

- *Type:* `number`

---

##### `uplinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateNetworkProfileNetworkProfile.property.uplinkLossPercent"></a>

- *Type:* `number`

---


### DeviceFarmResponsesCreateProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateProject(__scope: Construct, __resources: string[], __input: DeviceFarmCreateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `project`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProject.property.project"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject)

---


### DeviceFarmResponsesCreateProjectProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateProjectProject(__scope: Construct, __resources: string[], __input: DeviceFarmCreateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject.property.created"></a>

- *Type:* `string`

---

##### `defaultJobTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject.property.defaultJobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateProjectProject.property.name"></a>

- *Type:* `string`

---


### DeviceFarmResponsesCreateRemoteAccessSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSession"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSession.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateRemoteAccessSession(__scope: Construct, __resources: string[], __input: DeviceFarmCreateRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `remoteAccessSession`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSession.property.remoteAccessSession"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession)

---


### DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession(__scope: Construct, __resources: string[], __input: DeviceFarmCreateRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.arn"></a>

- *Type:* `string`

---

##### `billingMethod`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.billingMethod"></a>

- *Type:* `string`

---

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.clientId"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.created"></a>

- *Type:* `string`

---

##### `device`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice)

---

##### `deviceMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes)

---

##### `deviceUdid`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.deviceUdid"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.endpoint"></a>

- *Type:* `string`

---

##### `hostAddress`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.hostAddress"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.instanceArn"></a>

- *Type:* `string`

---

##### `interactionMode`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.interactionMode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.name"></a>

- *Type:* `string`

---

##### `remoteDebugEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `remoteRecordAppArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.remoteRecordAppArn"></a>

- *Type:* `string`

---

##### `remoteRecordEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.remoteRecordEnabled"></a>

- *Type:* `boolean`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.result"></a>

- *Type:* `string`

---

##### `skipAppResign`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `started`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession.property.stopped"></a>

- *Type:* `string`

---


### DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice(__scope: Construct, __resources: string[], __input: DeviceFarmCreateRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.arn"></a>

- *Type:* `string`

---

##### `availability`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.availability"></a>

- *Type:* `string`

---

##### `carrier`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.carrier"></a>

- *Type:* `string`

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.cpu"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu)

---

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.fleetName"></a>

- *Type:* `string`

---

##### `fleetType`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.fleetType"></a>

- *Type:* `string`

---

##### `formFactor`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.formFactor"></a>

- *Type:* `string`

---

##### `heapSize`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.heapSize"></a>

- *Type:* `number`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.image"></a>

- *Type:* `string`

---

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.instances"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)[]

---

##### `manufacturer`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.manufacturer"></a>

- *Type:* `string`

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.memory"></a>

- *Type:* `number`

---

##### `model`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.model"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.name"></a>

- *Type:* `string`

---

##### `os`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.os"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.platform"></a>

- *Type:* `string`

---

##### `radio`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.radio"></a>

- *Type:* `string`

---

##### `remoteAccessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.remoteAccessEnabled"></a>

- *Type:* `boolean`

---

##### `remoteDebugEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice.property.resolution"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution)

---


### DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu(__scope: Construct, __resources: string[], __input: DeviceFarmCreateRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `architecture`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu.property.architecture"></a>

- *Type:* `string`

---

##### `clock`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu.property.clock"></a>

- *Type:* `number`

---

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu.property.frequency"></a>

- *Type:* `string`

---


### DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes(__scope: Construct, __resources: string[], __input: DeviceFarmCreateRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `metered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---


### DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution(__scope: Construct, __resources: string[], __input: DeviceFarmCreateRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution.property.height"></a>

- *Type:* `number`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution.property.width"></a>

- *Type:* `number`

---


### DeviceFarmResponsesCreateTestGridProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateTestGridProject(__scope: Construct, __resources: string[], __input: DeviceFarmCreateTestGridProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `testGridProject`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProject.property.testGridProject"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject)

---


### DeviceFarmResponsesCreateTestGridProjectTestGridProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject(__scope: Construct, __resources: string[], __input: DeviceFarmCreateTestGridProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridProjectTestGridProject.property.name"></a>

- *Type:* `string`

---


### DeviceFarmResponsesCreateTestGridUrl <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridUrl"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridUrl.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateTestGridUrl(__scope: Construct, __resources: string[], __input: DeviceFarmCreateTestGridUrlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridUrlRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateTestGridUrlRequest)

---



#### Properties <a name="Properties"></a>

##### `expires`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridUrl.property.expires"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateTestGridUrl.property.url"></a>

- *Type:* `string`

---


### DeviceFarmResponsesCreateUpload <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUpload"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUpload.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateUpload(__scope: Construct, __resources: string[], __input: DeviceFarmCreateUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `upload`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUpload.property.upload"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload)

---


### DeviceFarmResponsesCreateUploadUpload <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateUploadUpload(__scope: Construct, __resources: string[], __input: DeviceFarmCreateUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.property.arn"></a>

- *Type:* `string`

---

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.property.category"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.property.contentType"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.property.created"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.property.message"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.property.type"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateUploadUpload.property.url"></a>

- *Type:* `string`

---


### DeviceFarmResponsesCreateVpceConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfiguration.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateVpceConfiguration(__scope: Construct, __resources: string[], __input: DeviceFarmCreateVpceConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `vpceConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfiguration.property.vpceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration)

---


### DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration(__scope: Construct, __resources: string[], __input: DeviceFarmCreateVpceConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmCreateVpceConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `serviceDnsName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration.property.serviceDnsName"></a>

- *Type:* `string`

---

##### `vpceConfigurationDescription`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration.property.vpceConfigurationDescription"></a>

- *Type:* `string`

---

##### `vpceConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration.property.vpceConfigurationName"></a>

- *Type:* `string`

---

##### `vpceServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration.property.vpceServiceName"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchAccountSettings <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettings"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettings.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchAccountSettings(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettings.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `accountSettings`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettings.property.accountSettings"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings)

---


### DeviceFarmResponsesFetchAccountSettingsAccountSettings <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `awsAccountNumber`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.property.awsAccountNumber"></a>

- *Type:* `string`

---

##### `defaultJobTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.property.defaultJobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `maxJobTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.property.maxJobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `maxSlots`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.property.maxSlots"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `skipAppResign`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `trialMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.property.trialMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes)

---

##### `unmeteredDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.property.unmeteredDevices"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `unmeteredRemoteAccessDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettings.property.unmeteredRemoteAccessDevices"></a>

- *Type:* {[ key: string ]: `number`}

---


### DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `remaining`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes.property.remaining"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes.property.total"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchDevice <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevice"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevice.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchDevice(__scope: Construct, __resources: string[], __input: DeviceFarmGetDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `device`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevice.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice)

---


### DeviceFarmResponsesFetchDeviceDevice <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchDeviceDevice(__scope: Construct, __resources: string[], __input: DeviceFarmGetDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.arn"></a>

- *Type:* `string`

---

##### `availability`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.availability"></a>

- *Type:* `string`

---

##### `carrier`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.carrier"></a>

- *Type:* `string`

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.cpu"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu)

---

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.fleetName"></a>

- *Type:* `string`

---

##### `fleetType`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.fleetType"></a>

- *Type:* `string`

---

##### `formFactor`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.formFactor"></a>

- *Type:* `string`

---

##### `heapSize`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.heapSize"></a>

- *Type:* `number`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.image"></a>

- *Type:* `string`

---

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.instances"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)[]

---

##### `manufacturer`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.manufacturer"></a>

- *Type:* `string`

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.memory"></a>

- *Type:* `number`

---

##### `model`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.model"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.name"></a>

- *Type:* `string`

---

##### `os`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.os"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.platform"></a>

- *Type:* `string`

---

##### `radio`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.radio"></a>

- *Type:* `string`

---

##### `remoteAccessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.remoteAccessEnabled"></a>

- *Type:* `boolean`

---

##### `remoteDebugEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDevice.property.resolution"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceResolution`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceResolution)

---


### DeviceFarmResponsesFetchDeviceDeviceCpu <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu(__scope: Construct, __resources: string[], __input: DeviceFarmGetDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `architecture`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu.property.architecture"></a>

- *Type:* `string`

---

##### `clock`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu.property.clock"></a>

- *Type:* `number`

---

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceCpu.property.frequency"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchDeviceDeviceResolution <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceResolution"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceResolution.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchDeviceDeviceResolution(__scope: Construct, __resources: string[], __input: DeviceFarmGetDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceResolution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceResolution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceResolution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceResolution.property.height"></a>

- *Type:* `number`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceDeviceResolution.property.width"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchDeviceInstance <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstance"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstance.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchDeviceInstance(__scope: Construct, __resources: string[], __input: DeviceFarmGetDeviceInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `deviceInstance`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstance.property.deviceInstance"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance)

---


### DeviceFarmResponsesFetchDeviceInstanceDeviceInstance <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance(__scope: Construct, __resources: string[], __input: DeviceFarmGetDeviceInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance.property.arn"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance.property.deviceArn"></a>

- *Type:* `string`

---

##### `instanceProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile)

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance.property.labels"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance.property.status"></a>

- *Type:* `string`

---

##### `udid`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstance.property.udid"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile(__scope: Construct, __resources: string[], __input: DeviceFarmGetDeviceInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDeviceInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile.property.description"></a>

- *Type:* `string`

---

##### `excludeAppPackagesFromCleanup`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile.property.name"></a>

- *Type:* `string`

---

##### `packageCleanup`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile.property.packageCleanup"></a>

- *Type:* `boolean`

---

##### `rebootAfterUse`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile.property.rebootAfterUse"></a>

- *Type:* `boolean`

---


### DeviceFarmResponsesFetchDevicePool <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePool"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePool.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchDevicePool(__scope: Construct, __resources: string[], __input: DeviceFarmGetDevicePoolRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolRequest)

---



#### Properties <a name="Properties"></a>

##### `devicePool`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePool.property.devicePool"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool)

---


### DeviceFarmResponsesFetchDevicePoolCompatibility <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolCompatibility"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolCompatibility.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchDevicePoolCompatibility(__scope: Construct, __resources: string[], __input: DeviceFarmGetDevicePoolCompatibilityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolCompatibility.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolCompatibility.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolCompatibility.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolCompatibilityRequest)

---



#### Properties <a name="Properties"></a>

##### `compatibleDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolCompatibility.property.compatibleDevices"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult`](#aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult)[]

---

##### `incompatibleDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolCompatibility.property.incompatibleDevices"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult`](#aws-cdk-sdk.devicefarm.DeviceFarmDevicePoolCompatibilityResult)[]

---


### DeviceFarmResponsesFetchDevicePoolDevicePool <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool(__scope: Construct, __resources: string[], __input: DeviceFarmGetDevicePoolRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetDevicePoolRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool.property.description"></a>

- *Type:* `string`

---

##### `maxDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool.property.maxDevices"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool.property.rules"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRule`](#aws-cdk-sdk.devicefarm.DeviceFarmRule)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchDevicePoolDevicePool.property.type"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchInstanceProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchInstanceProfile(__scope: Construct, __resources: string[], __input: DeviceFarmGetInstanceProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetInstanceProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetInstanceProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfile.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile)

---


### DeviceFarmResponsesFetchInstanceProfileInstanceProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile(__scope: Construct, __resources: string[], __input: DeviceFarmGetInstanceProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetInstanceProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetInstanceProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile.property.description"></a>

- *Type:* `string`

---

##### `excludeAppPackagesFromCleanup`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile.property.name"></a>

- *Type:* `string`

---

##### `packageCleanup`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile.property.packageCleanup"></a>

- *Type:* `boolean`

---

##### `rebootAfterUse`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchInstanceProfileInstanceProfile.property.rebootAfterUse"></a>

- *Type:* `boolean`

---


### DeviceFarmResponsesFetchJob <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJob"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJob.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchJob(__scope: Construct, __resources: string[], __input: DeviceFarmGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJob.property.job"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob)

---


### DeviceFarmResponsesFetchJobJob <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchJobJob(__scope: Construct, __resources: string[], __input: DeviceFarmGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.arn"></a>

- *Type:* `string`

---

##### `counters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.created"></a>

- *Type:* `string`

---

##### `device`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice)

---

##### `deviceMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes)

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.instanceArn"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.name"></a>

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.result"></a>

- *Type:* `string`

---

##### `started`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.stopped"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.type"></a>

- *Type:* `string`

---

##### `videoCapture`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.videoCapture"></a>

- *Type:* `boolean`

---

##### `videoEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJob.property.videoEndpoint"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchJobJobCounters <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchJobJobCounters(__scope: Construct, __resources: string[], __input: DeviceFarmGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.property.errored"></a>

- *Type:* `number`

---

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.property.failed"></a>

- *Type:* `number`

---

##### `passed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.property.passed"></a>

- *Type:* `number`

---

##### `skipped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.property.skipped"></a>

- *Type:* `number`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.property.stopped"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.property.total"></a>

- *Type:* `number`

---

##### `warned`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobCounters.property.warned"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchJobJobDevice <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchJobJobDevice(__scope: Construct, __resources: string[], __input: DeviceFarmGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.arn"></a>

- *Type:* `string`

---

##### `availability`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.availability"></a>

- *Type:* `string`

---

##### `carrier`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.carrier"></a>

- *Type:* `string`

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.cpu"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu)

---

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.fleetName"></a>

- *Type:* `string`

---

##### `fleetType`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.fleetType"></a>

- *Type:* `string`

---

##### `formFactor`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.formFactor"></a>

- *Type:* `string`

---

##### `heapSize`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.heapSize"></a>

- *Type:* `number`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.image"></a>

- *Type:* `string`

---

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.instances"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)[]

---

##### `manufacturer`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.manufacturer"></a>

- *Type:* `string`

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.memory"></a>

- *Type:* `number`

---

##### `model`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.model"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.name"></a>

- *Type:* `string`

---

##### `os`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.os"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.platform"></a>

- *Type:* `string`

---

##### `radio`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.radio"></a>

- *Type:* `string`

---

##### `remoteAccessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.remoteAccessEnabled"></a>

- *Type:* `boolean`

---

##### `remoteDebugEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDevice.property.resolution"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceResolution`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceResolution)

---


### DeviceFarmResponsesFetchJobJobDeviceCpu <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu(__scope: Construct, __resources: string[], __input: DeviceFarmGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `architecture`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu.property.architecture"></a>

- *Type:* `string`

---

##### `clock`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu.property.clock"></a>

- *Type:* `number`

---

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceCpu.property.frequency"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchJobJobDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes(__scope: Construct, __resources: string[], __input: DeviceFarmGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `metered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchJobJobDeviceResolution <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceResolution"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceResolution.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchJobJobDeviceResolution(__scope: Construct, __resources: string[], __input: DeviceFarmGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceResolution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceResolution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceResolution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceResolution.property.height"></a>

- *Type:* `number`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchJobJobDeviceResolution.property.width"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchNetworkProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchNetworkProfile(__scope: Construct, __resources: string[], __input: DeviceFarmGetNetworkProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetNetworkProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetNetworkProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `networkProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfile.property.networkProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile)

---


### DeviceFarmResponsesFetchNetworkProfileNetworkProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile(__scope: Construct, __resources: string[], __input: DeviceFarmGetNetworkProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetNetworkProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetNetworkProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.description"></a>

- *Type:* `string`

---

##### `downlinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.downlinkBandwidthBits"></a>

- *Type:* `number`

---

##### `downlinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.downlinkDelayMs"></a>

- *Type:* `number`

---

##### `downlinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.downlinkJitterMs"></a>

- *Type:* `number`

---

##### `downlinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.downlinkLossPercent"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.type"></a>

- *Type:* `string`

---

##### `uplinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.uplinkBandwidthBits"></a>

- *Type:* `number`

---

##### `uplinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.uplinkDelayMs"></a>

- *Type:* `number`

---

##### `uplinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.uplinkJitterMs"></a>

- *Type:* `number`

---

##### `uplinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchNetworkProfileNetworkProfile.property.uplinkLossPercent"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchOfferingStatus <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchOfferingStatus"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchOfferingStatus.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchOfferingStatus(__scope: Construct, __resources: string[], __input: DeviceFarmGetOfferingStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchOfferingStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchOfferingStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchOfferingStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetOfferingStatusRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetOfferingStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `current`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchOfferingStatus.property.current"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus)}

---

##### `nextPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchOfferingStatus.property.nextPeriod"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingStatus)}

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchOfferingStatus.property.nextToken"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchProject(__scope: Construct, __resources: string[], __input: DeviceFarmGetProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `project`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProject.property.project"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject)

---


### DeviceFarmResponsesFetchProjectProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchProjectProject(__scope: Construct, __resources: string[], __input: DeviceFarmGetProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject.property.created"></a>

- *Type:* `string`

---

##### `defaultJobTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject.property.defaultJobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchProjectProject.property.name"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchRemoteAccessSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSession"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSession.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRemoteAccessSession(__scope: Construct, __resources: string[], __input: DeviceFarmGetRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `remoteAccessSession`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSession.property.remoteAccessSession"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession)

---


### DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession(__scope: Construct, __resources: string[], __input: DeviceFarmGetRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.arn"></a>

- *Type:* `string`

---

##### `billingMethod`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.billingMethod"></a>

- *Type:* `string`

---

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.clientId"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.created"></a>

- *Type:* `string`

---

##### `device`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice)

---

##### `deviceMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes)

---

##### `deviceUdid`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.deviceUdid"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.endpoint"></a>

- *Type:* `string`

---

##### `hostAddress`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.hostAddress"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.instanceArn"></a>

- *Type:* `string`

---

##### `interactionMode`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.interactionMode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.name"></a>

- *Type:* `string`

---

##### `remoteDebugEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `remoteRecordAppArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.remoteRecordAppArn"></a>

- *Type:* `string`

---

##### `remoteRecordEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.remoteRecordEnabled"></a>

- *Type:* `boolean`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.result"></a>

- *Type:* `string`

---

##### `skipAppResign`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `started`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession.property.stopped"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice(__scope: Construct, __resources: string[], __input: DeviceFarmGetRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.arn"></a>

- *Type:* `string`

---

##### `availability`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.availability"></a>

- *Type:* `string`

---

##### `carrier`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.carrier"></a>

- *Type:* `string`

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.cpu"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu)

---

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.fleetName"></a>

- *Type:* `string`

---

##### `fleetType`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.fleetType"></a>

- *Type:* `string`

---

##### `formFactor`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.formFactor"></a>

- *Type:* `string`

---

##### `heapSize`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.heapSize"></a>

- *Type:* `number`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.image"></a>

- *Type:* `string`

---

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.instances"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)[]

---

##### `manufacturer`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.manufacturer"></a>

- *Type:* `string`

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.memory"></a>

- *Type:* `number`

---

##### `model`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.model"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.name"></a>

- *Type:* `string`

---

##### `os`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.os"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.platform"></a>

- *Type:* `string`

---

##### `radio`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.radio"></a>

- *Type:* `string`

---

##### `remoteAccessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.remoteAccessEnabled"></a>

- *Type:* `boolean`

---

##### `remoteDebugEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice.property.resolution"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution)

---


### DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu(__scope: Construct, __resources: string[], __input: DeviceFarmGetRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `architecture`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu.property.architecture"></a>

- *Type:* `string`

---

##### `clock`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu.property.clock"></a>

- *Type:* `number`

---

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu.property.frequency"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes(__scope: Construct, __resources: string[], __input: DeviceFarmGetRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `metered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution(__scope: Construct, __resources: string[], __input: DeviceFarmGetRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution.property.height"></a>

- *Type:* `number`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution.property.width"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchRun <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRun"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRun.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRun(__scope: Construct, __resources: string[], __input: DeviceFarmGetRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest)

---



#### Properties <a name="Properties"></a>

##### `run`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRun.property.run"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun)

---


### DeviceFarmResponsesFetchRunRun <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRunRun(__scope: Construct, __resources: string[], __input: DeviceFarmGetRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest)

---



#### Properties <a name="Properties"></a>

##### `appUpload`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.appUpload"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.arn"></a>

- *Type:* `string`

---

##### `billingMethod`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.billingMethod"></a>

- *Type:* `string`

---

##### `completedJobs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.completedJobs"></a>

- *Type:* `number`

---

##### `counters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.created"></a>

- *Type:* `string`

---

##### `customerArtifactPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.customerArtifactPaths"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths)

---

##### `deviceMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes)

---

##### `devicePoolArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.devicePoolArn"></a>

- *Type:* `string`

---

##### `deviceSelectionResult`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.deviceSelectionResult"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult)

---

##### `eventCount`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.eventCount"></a>

- *Type:* `number`

---

##### `jobTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.jobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `locale`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.locale"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.location"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunLocation`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunLocation)

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.name"></a>

- *Type:* `string`

---

##### `networkProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.networkProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile)

---

##### `parsingResultUrl`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.parsingResultUrl"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.platform"></a>

- *Type:* `string`

---

##### `radios`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.radios"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios)

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.result"></a>

- *Type:* `string`

---

##### `resultCode`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.resultCode"></a>

- *Type:* `string`

---

##### `seed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.seed"></a>

- *Type:* `number`

---

##### `skipAppResign`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `started`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.stopped"></a>

- *Type:* `string`

---

##### `testSpecArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.testSpecArn"></a>

- *Type:* `string`

---

##### `totalJobs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.totalJobs"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.type"></a>

- *Type:* `string`

---

##### `webUrl`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRun.property.webUrl"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchRunRunCounters <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRunRunCounters(__scope: Construct, __resources: string[], __input: DeviceFarmGetRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest)

---



#### Properties <a name="Properties"></a>

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.property.errored"></a>

- *Type:* `number`

---

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.property.failed"></a>

- *Type:* `number`

---

##### `passed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.property.passed"></a>

- *Type:* `number`

---

##### `skipped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.property.skipped"></a>

- *Type:* `number`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.property.stopped"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.property.total"></a>

- *Type:* `number`

---

##### `warned`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCounters.property.warned"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchRunRunCustomerArtifactPaths <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths(__scope: Construct, __resources: string[], __input: DeviceFarmGetRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest)

---



#### Properties <a name="Properties"></a>

##### `androidPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths.property.androidPaths"></a>

- *Type:* `string`[]

---

##### `deviceHostPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths.property.deviceHostPaths"></a>

- *Type:* `string`[]

---

##### `iosPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunCustomerArtifactPaths.property.iosPaths"></a>

- *Type:* `string`[]

---


### DeviceFarmResponsesFetchRunRunDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes(__scope: Construct, __resources: string[], __input: DeviceFarmGetRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest)

---



#### Properties <a name="Properties"></a>

##### `metered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchRunRunDeviceSelectionResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult(__scope: Construct, __resources: string[], __input: DeviceFarmGetRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest)

---



#### Properties <a name="Properties"></a>

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult.property.filters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter)[]

---

##### `matchedDevicesCount`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult.property.matchedDevicesCount"></a>

- *Type:* `number`

---

##### `maxDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunDeviceSelectionResult.property.maxDevices"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchRunRunLocation <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunLocation"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunLocation.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRunRunLocation(__scope: Construct, __resources: string[], __input: DeviceFarmGetRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest)

---



#### Properties <a name="Properties"></a>

##### `latitude`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunLocation.property.latitude"></a>

- *Type:* `number`

---

##### `longitude`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunLocation.property.longitude"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchRunRunNetworkProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile(__scope: Construct, __resources: string[], __input: DeviceFarmGetRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.description"></a>

- *Type:* `string`

---

##### `downlinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.downlinkBandwidthBits"></a>

- *Type:* `number`

---

##### `downlinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.downlinkDelayMs"></a>

- *Type:* `number`

---

##### `downlinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.downlinkJitterMs"></a>

- *Type:* `number`

---

##### `downlinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.downlinkLossPercent"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.type"></a>

- *Type:* `string`

---

##### `uplinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.uplinkBandwidthBits"></a>

- *Type:* `number`

---

##### `uplinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.uplinkDelayMs"></a>

- *Type:* `number`

---

##### `uplinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.uplinkJitterMs"></a>

- *Type:* `number`

---

##### `uplinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunNetworkProfile.property.uplinkLossPercent"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchRunRunRadios <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchRunRunRadios(__scope: Construct, __resources: string[], __input: DeviceFarmGetRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetRunRequest)

---



#### Properties <a name="Properties"></a>

##### `bluetooth`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios.property.bluetooth"></a>

- *Type:* `boolean`

---

##### `gps`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios.property.gps"></a>

- *Type:* `boolean`

---

##### `nfc`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios.property.nfc"></a>

- *Type:* `boolean`

---

##### `wifi`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchRunRunRadios.property.wifi"></a>

- *Type:* `boolean`

---


### DeviceFarmResponsesFetchSuite <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuite"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuite.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchSuite(__scope: Construct, __resources: string[], __input: DeviceFarmGetSuiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest)

---



#### Properties <a name="Properties"></a>

##### `suite`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuite.property.suite"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite)

---


### DeviceFarmResponsesFetchSuiteSuite <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchSuiteSuite(__scope: Construct, __resources: string[], __input: DeviceFarmGetSuiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.arn"></a>

- *Type:* `string`

---

##### `counters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.created"></a>

- *Type:* `string`

---

##### `deviceMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes)

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.name"></a>

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.result"></a>

- *Type:* `string`

---

##### `started`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.stopped"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuite.property.type"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchSuiteSuiteCounters <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters(__scope: Construct, __resources: string[], __input: DeviceFarmGetSuiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest)

---



#### Properties <a name="Properties"></a>

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.property.errored"></a>

- *Type:* `number`

---

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.property.failed"></a>

- *Type:* `number`

---

##### `passed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.property.passed"></a>

- *Type:* `number`

---

##### `skipped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.property.skipped"></a>

- *Type:* `number`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.property.stopped"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.property.total"></a>

- *Type:* `number`

---

##### `warned`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteCounters.property.warned"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes(__scope: Construct, __resources: string[], __input: DeviceFarmGetSuiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetSuiteRequest)

---



#### Properties <a name="Properties"></a>

##### `metered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchTest <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTest"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTest.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchTest(__scope: Construct, __resources: string[], __input: DeviceFarmGetTestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest)

---



#### Properties <a name="Properties"></a>

##### `test`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTest.property.test"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest)

---


### DeviceFarmResponsesFetchTestGridProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchTestGridProject(__scope: Construct, __resources: string[], __input: DeviceFarmGetTestGridProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `testGridProject`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProject.property.testGridProject"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject)

---


### DeviceFarmResponsesFetchTestGridProjectTestGridProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject(__scope: Construct, __resources: string[], __input: DeviceFarmGetTestGridProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridProjectTestGridProject.property.name"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchTestGridSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSession"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSession.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchTestGridSession(__scope: Construct, __resources: string[], __input: DeviceFarmGetTestGridSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `testGridSession`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSession.property.testGridSession"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession)

---


### DeviceFarmResponsesFetchTestGridSessionTestGridSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession(__scope: Construct, __resources: string[], __input: DeviceFarmGetTestGridSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestGridSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession.property.arn"></a>

- *Type:* `string`

---

##### `billingMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession.property.billingMinutes"></a>

- *Type:* `number`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession.property.created"></a>

- *Type:* `string`

---

##### `ended`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession.property.ended"></a>

- *Type:* `string`

---

##### `seleniumProperties`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession.property.seleniumProperties"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestGridSessionTestGridSession.property.status"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchTestTest <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchTestTest(__scope: Construct, __resources: string[], __input: DeviceFarmGetTestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.arn"></a>

- *Type:* `string`

---

##### `counters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.created"></a>

- *Type:* `string`

---

##### `deviceMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes)

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.name"></a>

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.result"></a>

- *Type:* `string`

---

##### `started`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.stopped"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTest.property.type"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchTestTestCounters <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchTestTestCounters(__scope: Construct, __resources: string[], __input: DeviceFarmGetTestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest)

---



#### Properties <a name="Properties"></a>

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.property.errored"></a>

- *Type:* `number`

---

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.property.failed"></a>

- *Type:* `number`

---

##### `passed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.property.passed"></a>

- *Type:* `number`

---

##### `skipped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.property.skipped"></a>

- *Type:* `number`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.property.stopped"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.property.total"></a>

- *Type:* `number`

---

##### `warned`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestCounters.property.warned"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchTestTestDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes(__scope: Construct, __resources: string[], __input: DeviceFarmGetTestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetTestRequest)

---



#### Properties <a name="Properties"></a>

##### `metered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchTestTestDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---


### DeviceFarmResponsesFetchUpload <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUpload"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUpload.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchUpload(__scope: Construct, __resources: string[], __input: DeviceFarmGetUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetUploadRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `upload`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUpload.property.upload"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload)

---


### DeviceFarmResponsesFetchUploadUpload <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchUploadUpload(__scope: Construct, __resources: string[], __input: DeviceFarmGetUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetUploadRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.property.arn"></a>

- *Type:* `string`

---

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.property.category"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.property.contentType"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.property.created"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.property.message"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.property.type"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchUploadUpload.property.url"></a>

- *Type:* `string`

---


### DeviceFarmResponsesFetchVpceConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfiguration.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchVpceConfiguration(__scope: Construct, __resources: string[], __input: DeviceFarmGetVpceConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetVpceConfigurationRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetVpceConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `vpceConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfiguration.property.vpceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration)

---


### DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration(__scope: Construct, __resources: string[], __input: DeviceFarmGetVpceConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmGetVpceConfigurationRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmGetVpceConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `serviceDnsName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration.property.serviceDnsName"></a>

- *Type:* `string`

---

##### `vpceConfigurationDescription`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration.property.vpceConfigurationDescription"></a>

- *Type:* `string`

---

##### `vpceConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration.property.vpceConfigurationName"></a>

- *Type:* `string`

---

##### `vpceServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration.property.vpceServiceName"></a>

- *Type:* `string`

---


### DeviceFarmResponsesInstallToRemoteAccessSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSession"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSession.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesInstallToRemoteAccessSession(__scope: Construct, __resources: string[], __input: DeviceFarmInstallToRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `appUpload`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSession.property.appUpload"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload)

---


### DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload(__scope: Construct, __resources: string[], __input: DeviceFarmInstallToRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmInstallToRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.property.arn"></a>

- *Type:* `string`

---

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.property.category"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.property.contentType"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.property.created"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.property.message"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.property.type"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload.property.url"></a>

- *Type:* `string`

---


### DeviceFarmResponsesListArtifacts <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListArtifacts"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListArtifacts.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListArtifacts(__scope: Construct, __resources: string[], __input: DeviceFarmListArtifactsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListArtifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListArtifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListArtifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListArtifactsRequest)

---



#### Properties <a name="Properties"></a>

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListArtifacts.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmArtifact`](#aws-cdk-sdk.devicefarm.DeviceFarmArtifact)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListArtifacts.property.nextToken"></a>

- *Type:* `string`

---


### DeviceFarmResponsesListDeviceInstances <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDeviceInstances"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDeviceInstances.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListDeviceInstances(__scope: Construct, __resources: string[], __input: DeviceFarmListDeviceInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDeviceInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDeviceInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDeviceInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListDeviceInstancesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListDeviceInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `deviceInstances`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDeviceInstances.property.deviceInstances"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDeviceInstances.property.nextToken"></a>

- *Type:* `string`

---


### DeviceFarmResponsesListDevicePools <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevicePools"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevicePools.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListDevicePools(__scope: Construct, __resources: string[], __input: DeviceFarmListDevicePoolsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevicePools.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevicePools.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevicePools.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListDevicePoolsRequest)

---



#### Properties <a name="Properties"></a>

##### `devicePools`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevicePools.property.devicePools"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevicePool`](#aws-cdk-sdk.devicefarm.DeviceFarmDevicePool)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevicePools.property.nextToken"></a>

- *Type:* `string`

---


### DeviceFarmResponsesListDevices <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevices"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevices.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListDevices(__scope: Construct, __resources: string[], __input: DeviceFarmListDevicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListDevicesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListDevicesRequest)

---



#### Properties <a name="Properties"></a>

##### `devices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevices.property.devices"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmDevice)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListDevices.property.nextToken"></a>

- *Type:* `string`

---


### DeviceFarmResponsesListInstanceProfiles <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListInstanceProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListInstanceProfiles.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListInstanceProfiles(__scope: Construct, __resources: string[], __input: DeviceFarmListInstanceProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListInstanceProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListInstanceProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListInstanceProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListInstanceProfilesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListInstanceProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceProfiles`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListInstanceProfiles.property.instanceProfiles"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmInstanceProfile)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListInstanceProfiles.property.nextToken"></a>

- *Type:* `string`

---


### DeviceFarmResponsesListJobs <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListJobs.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListJobs(__scope: Construct, __resources: string[], __input: DeviceFarmListJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListJobsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmJob`](#aws-cdk-sdk.devicefarm.DeviceFarmJob)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListJobs.property.nextToken"></a>

- *Type:* `string`

---


### DeviceFarmResponsesListNetworkProfiles <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListNetworkProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListNetworkProfiles.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListNetworkProfiles(__scope: Construct, __resources: string[], __input: DeviceFarmListNetworkProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListNetworkProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListNetworkProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListNetworkProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListNetworkProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `networkProfiles`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListNetworkProfiles.property.networkProfiles"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmNetworkProfile)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListNetworkProfiles.property.nextToken"></a>

- *Type:* `string`

---


### DeviceFarmResponsesListOfferingPromotions <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingPromotions"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingPromotions.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListOfferingPromotions(__scope: Construct, __resources: string[], __input: DeviceFarmListOfferingPromotionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingPromotions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingPromotions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingPromotions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListOfferingPromotionsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListOfferingPromotionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingPromotions.property.nextToken"></a>

- *Type:* `string`

---

##### `offeringPromotions`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingPromotions.property.offeringPromotions"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingPromotion`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingPromotion)[]

---


### DeviceFarmResponsesListOfferings <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferings"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferings.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListOfferings(__scope: Construct, __resources: string[], __input: DeviceFarmListOfferingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListOfferingsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListOfferingsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferings.property.nextToken"></a>

- *Type:* `string`

---

##### `offerings`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferings.property.offerings"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmOffering`](#aws-cdk-sdk.devicefarm.DeviceFarmOffering)[]

---


### DeviceFarmResponsesListOfferingTransactions <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingTransactions"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingTransactions.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListOfferingTransactions(__scope: Construct, __resources: string[], __input: DeviceFarmListOfferingTransactionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingTransactions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingTransactions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingTransactions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListOfferingTransactionsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListOfferingTransactionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingTransactions.property.nextToken"></a>

- *Type:* `string`

---

##### `offeringTransactions`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListOfferingTransactions.property.offeringTransactions"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction`](#aws-cdk-sdk.devicefarm.DeviceFarmOfferingTransaction)[]

---


### DeviceFarmResponsesListProjects <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListProjects"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListProjects.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListProjects(__scope: Construct, __resources: string[], __input: DeviceFarmListProjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListProjectsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListProjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListProjects.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListProjects.property.projects"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmProject`](#aws-cdk-sdk.devicefarm.DeviceFarmProject)[]

---


### DeviceFarmResponsesListRemoteAccessSessions <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRemoteAccessSessions"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRemoteAccessSessions.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListRemoteAccessSessions(__scope: Construct, __resources: string[], __input: DeviceFarmListRemoteAccessSessionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRemoteAccessSessions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRemoteAccessSessions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRemoteAccessSessions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListRemoteAccessSessionsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListRemoteAccessSessionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRemoteAccessSessions.property.nextToken"></a>

- *Type:* `string`

---

##### `remoteAccessSessions`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRemoteAccessSessions.property.remoteAccessSessions"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession`](#aws-cdk-sdk.devicefarm.DeviceFarmRemoteAccessSession)[]

---


### DeviceFarmResponsesListRuns <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRuns"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRuns.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListRuns(__scope: Construct, __resources: string[], __input: DeviceFarmListRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRuns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRuns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRuns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListRunsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRuns.property.nextToken"></a>

- *Type:* `string`

---

##### `runs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListRuns.property.runs"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRun`](#aws-cdk-sdk.devicefarm.DeviceFarmRun)[]

---


### DeviceFarmResponsesListSamples <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSamples"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSamples.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListSamples(__scope: Construct, __resources: string[], __input: DeviceFarmListSamplesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSamples.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSamples.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSamples.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListSamplesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListSamplesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSamples.property.nextToken"></a>

- *Type:* `string`

---

##### `samples`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSamples.property.samples"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmSample`](#aws-cdk-sdk.devicefarm.DeviceFarmSample)[]

---


### DeviceFarmResponsesListSuites <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSuites"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSuites.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListSuites(__scope: Construct, __resources: string[], __input: DeviceFarmListSuitesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSuites.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSuites.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSuites.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListSuitesRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListSuitesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSuites.property.nextToken"></a>

- *Type:* `string`

---

##### `suites`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListSuites.property.suites"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmSuite`](#aws-cdk-sdk.devicefarm.DeviceFarmSuite)[]

---


### DeviceFarmResponsesListTagsForResource <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTagsForResource.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: DeviceFarmListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTagsForResourceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTag`](#aws-cdk-sdk.devicefarm.DeviceFarmTag)[]

---


### DeviceFarmResponsesListTestGridProjects <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridProjects"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridProjects.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListTestGridProjects(__scope: Construct, __resources: string[], __input: DeviceFarmListTestGridProjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTestGridProjectsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTestGridProjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridProjects.property.nextToken"></a>

- *Type:* `string`

---

##### `testGridProjects`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridProjects.property.testGridProjects"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridProject)[]

---


### DeviceFarmResponsesListTestGridSessionActions <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionActions"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionActions.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListTestGridSessionActions(__scope: Construct, __resources: string[], __input: DeviceFarmListTestGridSessionActionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionActionsRequest)

---



#### Properties <a name="Properties"></a>

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionActions.property.actions"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionAction`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionAction)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionActions.property.nextToken"></a>

- *Type:* `string`

---


### DeviceFarmResponsesListTestGridSessionArtifacts <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionArtifacts"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionArtifacts.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListTestGridSessionArtifacts(__scope: Construct, __resources: string[], __input: DeviceFarmListTestGridSessionArtifactsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionArtifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionArtifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionArtifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionArtifactsRequest)

---



#### Properties <a name="Properties"></a>

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionArtifacts.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionArtifact`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridSessionArtifact)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessionArtifacts.property.nextToken"></a>

- *Type:* `string`

---


### DeviceFarmResponsesListTestGridSessions <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessions"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessions.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListTestGridSessions(__scope: Construct, __resources: string[], __input: DeviceFarmListTestGridSessionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTestGridSessionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessions.property.nextToken"></a>

- *Type:* `string`

---

##### `testGridSessions`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTestGridSessions.property.testGridSessions"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession`](#aws-cdk-sdk.devicefarm.DeviceFarmTestGridSession)[]

---


### DeviceFarmResponsesListTests <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTests"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTests.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListTests(__scope: Construct, __resources: string[], __input: DeviceFarmListTestsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTests.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTests.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTests.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListTestsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListTestsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTests.property.nextToken"></a>

- *Type:* `string`

---

##### `tests`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListTests.property.tests"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmTest`](#aws-cdk-sdk.devicefarm.DeviceFarmTest)[]

---


### DeviceFarmResponsesListUniqueProblems <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUniqueProblems"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUniqueProblems.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListUniqueProblems(__scope: Construct, __resources: string[], __input: DeviceFarmListUniqueProblemsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUniqueProblems.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUniqueProblems.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUniqueProblems.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListUniqueProblemsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListUniqueProblemsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUniqueProblems.property.nextToken"></a>

- *Type:* `string`

---

##### `uniqueProblems`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUniqueProblems.property.uniqueProblems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.devicefarm.DeviceFarmUniqueProblem`](#aws-cdk-sdk.devicefarm.DeviceFarmUniqueProblem)[]}

---


### DeviceFarmResponsesListUploads <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUploads"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUploads.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListUploads(__scope: Construct, __resources: string[], __input: DeviceFarmListUploadsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUploads.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUploads.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUploads.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListUploadsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListUploadsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUploads.property.nextToken"></a>

- *Type:* `string`

---

##### `uploads`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListUploads.property.uploads"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpload`](#aws-cdk-sdk.devicefarm.DeviceFarmUpload)[]

---


### DeviceFarmResponsesListVpceConfigurations <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListVpceConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListVpceConfigurations.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesListVpceConfigurations(__scope: Construct, __resources: string[], __input: DeviceFarmListVpceConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListVpceConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListVpceConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListVpceConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmListVpceConfigurationsRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmListVpceConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListVpceConfigurations.property.nextToken"></a>

- *Type:* `string`

---

##### `vpceConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesListVpceConfigurations.property.vpceConfigurations"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmVpceConfiguration)[]

---


### DeviceFarmResponsesPurchaseOffering <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOffering"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOffering.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesPurchaseOffering(__scope: Construct, __resources: string[], __input: DeviceFarmPurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `offeringTransaction`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOffering.property.offeringTransaction"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction)

---


### DeviceFarmResponsesPurchaseOfferingOfferingTransaction <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction(__scope: Construct, __resources: string[], __input: DeviceFarmPurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `cost`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction.property.cost"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost)

---

##### `createdOn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction.property.createdOn"></a>

- *Type:* `string`

---

##### `offeringPromotionId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction.property.offeringPromotionId"></a>

- *Type:* `string`

---

##### `offeringStatus`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction.property.offeringStatus"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus)

---

##### `transactionId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransaction.property.transactionId"></a>

- *Type:* `string`

---


### DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost(__scope: Construct, __resources: string[], __input: DeviceFarmPurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `amount`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost.property.amount"></a>

- *Type:* `number`

---

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost.property.currencyCode"></a>

- *Type:* `string`

---


### DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus(__scope: Construct, __resources: string[], __input: DeviceFarmPurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `effectiveOn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus.property.effectiveOn"></a>

- *Type:* `string`

---

##### `offering`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus.property.offering"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering)

---

##### `quantity`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus.property.quantity"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus.property.type"></a>

- *Type:* `string`

---


### DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering(__scope: Construct, __resources: string[], __input: DeviceFarmPurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmPurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering.property.id"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering.property.platform"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRecurringCharge`](#aws-cdk-sdk.devicefarm.DeviceFarmRecurringCharge)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering.property.type"></a>

- *Type:* `string`

---


### DeviceFarmResponsesRenewOffering <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOffering"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOffering.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesRenewOffering(__scope: Construct, __resources: string[], __input: DeviceFarmRenewOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `offeringTransaction`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOffering.property.offeringTransaction"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction)

---


### DeviceFarmResponsesRenewOfferingOfferingTransaction <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction(__scope: Construct, __resources: string[], __input: DeviceFarmRenewOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `cost`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction.property.cost"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionCost`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionCost)

---

##### `createdOn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction.property.createdOn"></a>

- *Type:* `string`

---

##### `offeringPromotionId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction.property.offeringPromotionId"></a>

- *Type:* `string`

---

##### `offeringStatus`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction.property.offeringStatus"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus)

---

##### `transactionId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransaction.property.transactionId"></a>

- *Type:* `string`

---


### DeviceFarmResponsesRenewOfferingOfferingTransactionCost <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionCost"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionCost.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionCost(__scope: Construct, __resources: string[], __input: DeviceFarmRenewOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionCost.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionCost.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionCost.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `amount`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionCost.property.amount"></a>

- *Type:* `number`

---

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionCost.property.currencyCode"></a>

- *Type:* `string`

---


### DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus(__scope: Construct, __resources: string[], __input: DeviceFarmRenewOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `effectiveOn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus.property.effectiveOn"></a>

- *Type:* `string`

---

##### `offering`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus.property.offering"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering)

---

##### `quantity`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus.property.quantity"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus.property.type"></a>

- *Type:* `string`

---


### DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering(__scope: Construct, __resources: string[], __input: DeviceFarmRenewOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmRenewOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering.property.id"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering.property.platform"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRecurringCharge`](#aws-cdk-sdk.devicefarm.DeviceFarmRecurringCharge)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering.property.type"></a>

- *Type:* `string`

---


### DeviceFarmResponsesScheduleRun <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRun"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRun.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesScheduleRun(__scope: Construct, __resources: string[], __input: DeviceFarmScheduleRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest)

---



#### Properties <a name="Properties"></a>

##### `run`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRun.property.run"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun)

---


### DeviceFarmResponsesScheduleRunRun <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesScheduleRunRun(__scope: Construct, __resources: string[], __input: DeviceFarmScheduleRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest)

---



#### Properties <a name="Properties"></a>

##### `appUpload`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.appUpload"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.arn"></a>

- *Type:* `string`

---

##### `billingMethod`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.billingMethod"></a>

- *Type:* `string`

---

##### `completedJobs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.completedJobs"></a>

- *Type:* `number`

---

##### `counters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.created"></a>

- *Type:* `string`

---

##### `customerArtifactPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.customerArtifactPaths"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths)

---

##### `deviceMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes)

---

##### `devicePoolArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.devicePoolArn"></a>

- *Type:* `string`

---

##### `deviceSelectionResult`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.deviceSelectionResult"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult)

---

##### `eventCount`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.eventCount"></a>

- *Type:* `number`

---

##### `jobTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.jobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `locale`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.locale"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.location"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunLocation`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunLocation)

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.name"></a>

- *Type:* `string`

---

##### `networkProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.networkProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile)

---

##### `parsingResultUrl`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.parsingResultUrl"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.platform"></a>

- *Type:* `string`

---

##### `radios`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.radios"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios)

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.result"></a>

- *Type:* `string`

---

##### `resultCode`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.resultCode"></a>

- *Type:* `string`

---

##### `seed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.seed"></a>

- *Type:* `number`

---

##### `skipAppResign`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `started`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.stopped"></a>

- *Type:* `string`

---

##### `testSpecArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.testSpecArn"></a>

- *Type:* `string`

---

##### `totalJobs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.totalJobs"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.type"></a>

- *Type:* `string`

---

##### `webUrl`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRun.property.webUrl"></a>

- *Type:* `string`

---


### DeviceFarmResponsesScheduleRunRunCounters <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesScheduleRunRunCounters(__scope: Construct, __resources: string[], __input: DeviceFarmScheduleRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest)

---



#### Properties <a name="Properties"></a>

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.property.errored"></a>

- *Type:* `number`

---

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.property.failed"></a>

- *Type:* `number`

---

##### `passed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.property.passed"></a>

- *Type:* `number`

---

##### `skipped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.property.skipped"></a>

- *Type:* `number`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.property.stopped"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.property.total"></a>

- *Type:* `number`

---

##### `warned`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCounters.property.warned"></a>

- *Type:* `number`

---


### DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths(__scope: Construct, __resources: string[], __input: DeviceFarmScheduleRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest)

---



#### Properties <a name="Properties"></a>

##### `androidPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths.property.androidPaths"></a>

- *Type:* `string`[]

---

##### `deviceHostPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths.property.deviceHostPaths"></a>

- *Type:* `string`[]

---

##### `iosPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths.property.iosPaths"></a>

- *Type:* `string`[]

---


### DeviceFarmResponsesScheduleRunRunDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes(__scope: Construct, __resources: string[], __input: DeviceFarmScheduleRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest)

---



#### Properties <a name="Properties"></a>

##### `metered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---


### DeviceFarmResponsesScheduleRunRunDeviceSelectionResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult(__scope: Construct, __resources: string[], __input: DeviceFarmScheduleRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest)

---



#### Properties <a name="Properties"></a>

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult.property.filters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter)[]

---

##### `matchedDevicesCount`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult.property.matchedDevicesCount"></a>

- *Type:* `number`

---

##### `maxDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunDeviceSelectionResult.property.maxDevices"></a>

- *Type:* `number`

---


### DeviceFarmResponsesScheduleRunRunLocation <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunLocation"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunLocation.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesScheduleRunRunLocation(__scope: Construct, __resources: string[], __input: DeviceFarmScheduleRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest)

---



#### Properties <a name="Properties"></a>

##### `latitude`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunLocation.property.latitude"></a>

- *Type:* `number`

---

##### `longitude`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunLocation.property.longitude"></a>

- *Type:* `number`

---


### DeviceFarmResponsesScheduleRunRunNetworkProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile(__scope: Construct, __resources: string[], __input: DeviceFarmScheduleRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.description"></a>

- *Type:* `string`

---

##### `downlinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.downlinkBandwidthBits"></a>

- *Type:* `number`

---

##### `downlinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.downlinkDelayMs"></a>

- *Type:* `number`

---

##### `downlinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.downlinkJitterMs"></a>

- *Type:* `number`

---

##### `downlinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.downlinkLossPercent"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.type"></a>

- *Type:* `string`

---

##### `uplinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.uplinkBandwidthBits"></a>

- *Type:* `number`

---

##### `uplinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.uplinkDelayMs"></a>

- *Type:* `number`

---

##### `uplinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.uplinkJitterMs"></a>

- *Type:* `number`

---

##### `uplinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunNetworkProfile.property.uplinkLossPercent"></a>

- *Type:* `number`

---


### DeviceFarmResponsesScheduleRunRunRadios <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesScheduleRunRunRadios(__scope: Construct, __resources: string[], __input: DeviceFarmScheduleRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmScheduleRunRequest)

---



#### Properties <a name="Properties"></a>

##### `bluetooth`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios.property.bluetooth"></a>

- *Type:* `boolean`

---

##### `gps`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios.property.gps"></a>

- *Type:* `boolean`

---

##### `nfc`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios.property.nfc"></a>

- *Type:* `boolean`

---

##### `wifi`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesScheduleRunRunRadios.property.wifi"></a>

- *Type:* `boolean`

---


### DeviceFarmResponsesStopJob <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJob"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJob.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopJob(__scope: Construct, __resources: string[], __input: DeviceFarmStopJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest)

---



#### Properties <a name="Properties"></a>

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJob.property.job"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob)

---


### DeviceFarmResponsesStopJobJob <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopJobJob(__scope: Construct, __resources: string[], __input: DeviceFarmStopJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.arn"></a>

- *Type:* `string`

---

##### `counters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.created"></a>

- *Type:* `string`

---

##### `device`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice)

---

##### `deviceMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes)

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.instanceArn"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.name"></a>

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.result"></a>

- *Type:* `string`

---

##### `started`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.stopped"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.type"></a>

- *Type:* `string`

---

##### `videoCapture`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.videoCapture"></a>

- *Type:* `boolean`

---

##### `videoEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJob.property.videoEndpoint"></a>

- *Type:* `string`

---


### DeviceFarmResponsesStopJobJobCounters <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopJobJobCounters(__scope: Construct, __resources: string[], __input: DeviceFarmStopJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest)

---



#### Properties <a name="Properties"></a>

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.property.errored"></a>

- *Type:* `number`

---

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.property.failed"></a>

- *Type:* `number`

---

##### `passed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.property.passed"></a>

- *Type:* `number`

---

##### `skipped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.property.skipped"></a>

- *Type:* `number`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.property.stopped"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.property.total"></a>

- *Type:* `number`

---

##### `warned`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobCounters.property.warned"></a>

- *Type:* `number`

---


### DeviceFarmResponsesStopJobJobDevice <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopJobJobDevice(__scope: Construct, __resources: string[], __input: DeviceFarmStopJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.arn"></a>

- *Type:* `string`

---

##### `availability`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.availability"></a>

- *Type:* `string`

---

##### `carrier`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.carrier"></a>

- *Type:* `string`

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.cpu"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu)

---

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.fleetName"></a>

- *Type:* `string`

---

##### `fleetType`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.fleetType"></a>

- *Type:* `string`

---

##### `formFactor`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.formFactor"></a>

- *Type:* `string`

---

##### `heapSize`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.heapSize"></a>

- *Type:* `number`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.image"></a>

- *Type:* `string`

---

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.instances"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)[]

---

##### `manufacturer`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.manufacturer"></a>

- *Type:* `string`

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.memory"></a>

- *Type:* `number`

---

##### `model`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.model"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.name"></a>

- *Type:* `string`

---

##### `os`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.os"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.platform"></a>

- *Type:* `string`

---

##### `radio`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.radio"></a>

- *Type:* `string`

---

##### `remoteAccessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.remoteAccessEnabled"></a>

- *Type:* `boolean`

---

##### `remoteDebugEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDevice.property.resolution"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceResolution`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceResolution)

---


### DeviceFarmResponsesStopJobJobDeviceCpu <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu(__scope: Construct, __resources: string[], __input: DeviceFarmStopJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest)

---



#### Properties <a name="Properties"></a>

##### `architecture`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu.property.architecture"></a>

- *Type:* `string`

---

##### `clock`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu.property.clock"></a>

- *Type:* `number`

---

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceCpu.property.frequency"></a>

- *Type:* `string`

---


### DeviceFarmResponsesStopJobJobDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes(__scope: Construct, __resources: string[], __input: DeviceFarmStopJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest)

---



#### Properties <a name="Properties"></a>

##### `metered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---


### DeviceFarmResponsesStopJobJobDeviceResolution <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceResolution"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceResolution.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopJobJobDeviceResolution(__scope: Construct, __resources: string[], __input: DeviceFarmStopJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceResolution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceResolution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceResolution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopJobRequest)

---



#### Properties <a name="Properties"></a>

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceResolution.property.height"></a>

- *Type:* `number`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopJobJobDeviceResolution.property.width"></a>

- *Type:* `number`

---


### DeviceFarmResponsesStopRemoteAccessSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSession"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSession.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRemoteAccessSession(__scope: Construct, __resources: string[], __input: DeviceFarmStopRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `remoteAccessSession`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSession.property.remoteAccessSession"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession)

---


### DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession(__scope: Construct, __resources: string[], __input: DeviceFarmStopRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.arn"></a>

- *Type:* `string`

---

##### `billingMethod`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.billingMethod"></a>

- *Type:* `string`

---

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.clientId"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.created"></a>

- *Type:* `string`

---

##### `device`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.device"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice)

---

##### `deviceMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes)

---

##### `deviceUdid`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.deviceUdid"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.endpoint"></a>

- *Type:* `string`

---

##### `hostAddress`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.hostAddress"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.instanceArn"></a>

- *Type:* `string`

---

##### `interactionMode`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.interactionMode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.name"></a>

- *Type:* `string`

---

##### `remoteDebugEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `remoteRecordAppArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.remoteRecordAppArn"></a>

- *Type:* `string`

---

##### `remoteRecordEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.remoteRecordEnabled"></a>

- *Type:* `boolean`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.result"></a>

- *Type:* `string`

---

##### `skipAppResign`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `started`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession.property.stopped"></a>

- *Type:* `string`

---


### DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice(__scope: Construct, __resources: string[], __input: DeviceFarmStopRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.arn"></a>

- *Type:* `string`

---

##### `availability`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.availability"></a>

- *Type:* `string`

---

##### `carrier`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.carrier"></a>

- *Type:* `string`

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.cpu"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu)

---

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.fleetName"></a>

- *Type:* `string`

---

##### `fleetType`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.fleetType"></a>

- *Type:* `string`

---

##### `formFactor`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.formFactor"></a>

- *Type:* `string`

---

##### `heapSize`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.heapSize"></a>

- *Type:* `number`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.image"></a>

- *Type:* `string`

---

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.instances"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceInstance)[]

---

##### `manufacturer`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.manufacturer"></a>

- *Type:* `string`

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.memory"></a>

- *Type:* `number`

---

##### `model`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.model"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.name"></a>

- *Type:* `string`

---

##### `os`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.os"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.platform"></a>

- *Type:* `string`

---

##### `radio`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.radio"></a>

- *Type:* `string`

---

##### `remoteAccessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.remoteAccessEnabled"></a>

- *Type:* `boolean`

---

##### `remoteDebugEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.remoteDebugEnabled"></a>

- *Type:* `boolean`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice.property.resolution"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution)

---


### DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu(__scope: Construct, __resources: string[], __input: DeviceFarmStopRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `architecture`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu.property.architecture"></a>

- *Type:* `string`

---

##### `clock`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu.property.clock"></a>

- *Type:* `number`

---

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu.property.frequency"></a>

- *Type:* `string`

---


### DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes(__scope: Construct, __resources: string[], __input: DeviceFarmStopRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `metered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---


### DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution(__scope: Construct, __resources: string[], __input: DeviceFarmStopRemoteAccessSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRemoteAccessSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution.property.height"></a>

- *Type:* `number`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution.property.width"></a>

- *Type:* `number`

---


### DeviceFarmResponsesStopRun <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRun"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRun.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRun(__scope: Construct, __resources: string[], __input: DeviceFarmStopRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest)

---



#### Properties <a name="Properties"></a>

##### `run`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRun.property.run"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun)

---


### DeviceFarmResponsesStopRunRun <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRunRun(__scope: Construct, __resources: string[], __input: DeviceFarmStopRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest)

---



#### Properties <a name="Properties"></a>

##### `appUpload`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.appUpload"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.arn"></a>

- *Type:* `string`

---

##### `billingMethod`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.billingMethod"></a>

- *Type:* `string`

---

##### `completedJobs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.completedJobs"></a>

- *Type:* `number`

---

##### `counters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.counters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.created"></a>

- *Type:* `string`

---

##### `customerArtifactPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.customerArtifactPaths"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths)

---

##### `deviceMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.deviceMinutes"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes)

---

##### `devicePoolArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.devicePoolArn"></a>

- *Type:* `string`

---

##### `deviceSelectionResult`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.deviceSelectionResult"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult)

---

##### `eventCount`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.eventCount"></a>

- *Type:* `number`

---

##### `jobTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.jobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `locale`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.locale"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.location"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunLocation`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunLocation)

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.name"></a>

- *Type:* `string`

---

##### `networkProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.networkProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile)

---

##### `parsingResultUrl`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.parsingResultUrl"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.platform"></a>

- *Type:* `string`

---

##### `radios`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.radios"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios)

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.result"></a>

- *Type:* `string`

---

##### `resultCode`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.resultCode"></a>

- *Type:* `string`

---

##### `seed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.seed"></a>

- *Type:* `number`

---

##### `skipAppResign`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.skipAppResign"></a>

- *Type:* `boolean`

---

##### `started`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.started"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.status"></a>

- *Type:* `string`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.stopped"></a>

- *Type:* `string`

---

##### `testSpecArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.testSpecArn"></a>

- *Type:* `string`

---

##### `totalJobs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.totalJobs"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.type"></a>

- *Type:* `string`

---

##### `webUrl`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRun.property.webUrl"></a>

- *Type:* `string`

---


### DeviceFarmResponsesStopRunRunCounters <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRunRunCounters(__scope: Construct, __resources: string[], __input: DeviceFarmStopRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest)

---



#### Properties <a name="Properties"></a>

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.property.errored"></a>

- *Type:* `number`

---

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.property.failed"></a>

- *Type:* `number`

---

##### `passed`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.property.passed"></a>

- *Type:* `number`

---

##### `skipped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.property.skipped"></a>

- *Type:* `number`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.property.stopped"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.property.total"></a>

- *Type:* `number`

---

##### `warned`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCounters.property.warned"></a>

- *Type:* `number`

---


### DeviceFarmResponsesStopRunRunCustomerArtifactPaths <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths(__scope: Construct, __resources: string[], __input: DeviceFarmStopRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest)

---



#### Properties <a name="Properties"></a>

##### `androidPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths.property.androidPaths"></a>

- *Type:* `string`[]

---

##### `deviceHostPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths.property.deviceHostPaths"></a>

- *Type:* `string`[]

---

##### `iosPaths`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunCustomerArtifactPaths.property.iosPaths"></a>

- *Type:* `string`[]

---


### DeviceFarmResponsesStopRunRunDeviceMinutes <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes(__scope: Construct, __resources: string[], __input: DeviceFarmStopRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest)

---



#### Properties <a name="Properties"></a>

##### `metered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes.property.metered"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes.property.total"></a>

- *Type:* `number`

---

##### `unmetered`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceMinutes.property.unmetered"></a>

- *Type:* `number`

---


### DeviceFarmResponsesStopRunRunDeviceSelectionResult <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult(__scope: Construct, __resources: string[], __input: DeviceFarmStopRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest)

---



#### Properties <a name="Properties"></a>

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult.property.filters"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter`](#aws-cdk-sdk.devicefarm.DeviceFarmDeviceFilter)[]

---

##### `matchedDevicesCount`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult.property.matchedDevicesCount"></a>

- *Type:* `number`

---

##### `maxDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunDeviceSelectionResult.property.maxDevices"></a>

- *Type:* `number`

---


### DeviceFarmResponsesStopRunRunLocation <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunLocation"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunLocation.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRunRunLocation(__scope: Construct, __resources: string[], __input: DeviceFarmStopRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest)

---



#### Properties <a name="Properties"></a>

##### `latitude`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunLocation.property.latitude"></a>

- *Type:* `number`

---

##### `longitude`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunLocation.property.longitude"></a>

- *Type:* `number`

---


### DeviceFarmResponsesStopRunRunNetworkProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile(__scope: Construct, __resources: string[], __input: DeviceFarmStopRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.description"></a>

- *Type:* `string`

---

##### `downlinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.downlinkBandwidthBits"></a>

- *Type:* `number`

---

##### `downlinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.downlinkDelayMs"></a>

- *Type:* `number`

---

##### `downlinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.downlinkJitterMs"></a>

- *Type:* `number`

---

##### `downlinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.downlinkLossPercent"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.type"></a>

- *Type:* `string`

---

##### `uplinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.uplinkBandwidthBits"></a>

- *Type:* `number`

---

##### `uplinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.uplinkDelayMs"></a>

- *Type:* `number`

---

##### `uplinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.uplinkJitterMs"></a>

- *Type:* `number`

---

##### `uplinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunNetworkProfile.property.uplinkLossPercent"></a>

- *Type:* `number`

---


### DeviceFarmResponsesStopRunRunRadios <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesStopRunRunRadios(__scope: Construct, __resources: string[], __input: DeviceFarmStopRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmStopRunRequest)

---



#### Properties <a name="Properties"></a>

##### `bluetooth`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios.property.bluetooth"></a>

- *Type:* `boolean`

---

##### `gps`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios.property.gps"></a>

- *Type:* `boolean`

---

##### `nfc`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios.property.nfc"></a>

- *Type:* `boolean`

---

##### `wifi`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesStopRunRunRadios.property.wifi"></a>

- *Type:* `boolean`

---


### DeviceFarmResponsesUpdateDeviceInstance <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstance"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstance.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateDeviceInstance(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateDeviceInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `deviceInstance`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstance.property.deviceInstance"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance)

---


### DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateDeviceInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance.property.arn"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance.property.deviceArn"></a>

- *Type:* `string`

---

##### `instanceProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile)

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance.property.labels"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance.property.status"></a>

- *Type:* `string`

---

##### `udid`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance.property.udid"></a>

- *Type:* `string`

---


### DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateDeviceInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateDeviceInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile.property.description"></a>

- *Type:* `string`

---

##### `excludeAppPackagesFromCleanup`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile.property.name"></a>

- *Type:* `string`

---

##### `packageCleanup`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile.property.packageCleanup"></a>

- *Type:* `boolean`

---

##### `rebootAfterUse`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile.property.rebootAfterUse"></a>

- *Type:* `boolean`

---


### DeviceFarmResponsesUpdateDevicePool <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePool"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePool.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateDevicePool(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateDevicePoolRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest)

---



#### Properties <a name="Properties"></a>

##### `devicePool`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePool.property.devicePool"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool)

---


### DeviceFarmResponsesUpdateDevicePoolDevicePool <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateDevicePoolRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateDevicePoolRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool.property.description"></a>

- *Type:* `string`

---

##### `maxDevices`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool.property.maxDevices"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool.property.rules"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmRule`](#aws-cdk-sdk.devicefarm.DeviceFarmRule)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateDevicePoolDevicePool.property.type"></a>

- *Type:* `string`

---


### DeviceFarmResponsesUpdateInstanceProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateInstanceProfile(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateInstanceProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfile.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile)

---


### DeviceFarmResponsesUpdateInstanceProfileInstanceProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateInstanceProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateInstanceProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile.property.description"></a>

- *Type:* `string`

---

##### `excludeAppPackagesFromCleanup`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile.property.name"></a>

- *Type:* `string`

---

##### `packageCleanup`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile.property.packageCleanup"></a>

- *Type:* `boolean`

---

##### `rebootAfterUse`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateInstanceProfileInstanceProfile.property.rebootAfterUse"></a>

- *Type:* `boolean`

---


### DeviceFarmResponsesUpdateNetworkProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateNetworkProfile(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateNetworkProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `networkProfile`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfile.property.networkProfile"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile)

---


### DeviceFarmResponsesUpdateNetworkProfileNetworkProfile <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateNetworkProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateNetworkProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.description"></a>

- *Type:* `string`

---

##### `downlinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.downlinkBandwidthBits"></a>

- *Type:* `number`

---

##### `downlinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.downlinkDelayMs"></a>

- *Type:* `number`

---

##### `downlinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.downlinkJitterMs"></a>

- *Type:* `number`

---

##### `downlinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.downlinkLossPercent"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.type"></a>

- *Type:* `string`

---

##### `uplinkBandwidthBits`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.uplinkBandwidthBits"></a>

- *Type:* `number`

---

##### `uplinkDelayMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.uplinkDelayMs"></a>

- *Type:* `number`

---

##### `uplinkJitterMs`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.uplinkJitterMs"></a>

- *Type:* `number`

---

##### `uplinkLossPercent`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateNetworkProfileNetworkProfile.property.uplinkLossPercent"></a>

- *Type:* `number`

---


### DeviceFarmResponsesUpdateProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateProject(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `project`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProject.property.project"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject)

---


### DeviceFarmResponsesUpdateProjectProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateProjectProject(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject.property.created"></a>

- *Type:* `string`

---

##### `defaultJobTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject.property.defaultJobTimeoutMinutes"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateProjectProject.property.name"></a>

- *Type:* `string`

---


### DeviceFarmResponsesUpdateTestGridProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateTestGridProject(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateTestGridProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `testGridProject`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProject.property.testGridProject"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject)

---


### DeviceFarmResponsesUpdateTestGridProjectTestGridProject <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateTestGridProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateTestGridProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateTestGridProjectTestGridProject.property.name"></a>

- *Type:* `string`

---


### DeviceFarmResponsesUpdateUpload <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUpload"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUpload.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateUpload(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `upload`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUpload.property.upload"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload)

---


### DeviceFarmResponsesUpdateUploadUpload <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateUploadUpload(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.property.arn"></a>

- *Type:* `string`

---

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.property.category"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.property.contentType"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.property.created"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.property.message"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.property.metadata"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.property.type"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateUploadUpload.property.url"></a>

- *Type:* `string`

---


### DeviceFarmResponsesUpdateVpceConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfiguration.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateVpceConfiguration(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateVpceConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `vpceConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfiguration.property.vpceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration`](#aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration)

---


### DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration.Initializer"></a>

```typescript
import { devicefarm } from 'aws-cdk-sdk'

new devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration(__scope: Construct, __resources: string[], __input: DeviceFarmUpdateVpceConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest`](#aws-cdk-sdk.devicefarm.DeviceFarmUpdateVpceConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `serviceDnsName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration.property.serviceDnsName"></a>

- *Type:* `string`

---

##### `vpceConfigurationDescription`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration.property.vpceConfigurationDescription"></a>

- *Type:* `string`

---

##### `vpceConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration.property.vpceConfigurationName"></a>

- *Type:* `string`

---

##### `vpceServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.devicefarm.DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration.property.vpceServiceName"></a>

- *Type:* `string`

---



